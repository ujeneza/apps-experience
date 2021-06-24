import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { HttpBBRService } from "../services/http-bbr.service";
import { GeneralScripts } from "../scripts/general.scripts";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpTVService } from "../services/http-tv.service";
import { fileTypes, HttpFileService } from "../services/http-file.service";
import { ITVDetail } from "../scripts/interfaces.scripts";
import { FileUploaderComponent } from "../file-uploader/file-uploader.component";
import { appLabels } from "../scripts/appLabels";

@Component({
    selector: "bodembeheerrapport-detail",
    templateUrl: "./bodembeheerrapport-detail.component.html",
    styleUrls: ["./bodembeheerrapport-detail.component.css"]
})
export class BodembeheerrapportDetailComponent extends GeneralScripts implements OnInit {

    @ViewChild("fileUploader") fileUploader: FileUploaderComponent;

    appLabels = appLabels;
    bbr: any;
    andereGvts: any[];
    andereGvtBbrNaarDezeLocatieButtonEnabled = false;
    andereGvtBbrNaarDezeLocatieContentVisible = false;
    plaatsVanHerkomst = "";
    grondtransportmeldingIsVisible = false;
    kadastraleGegevensVisible = false;
    lambertCoordinatenVisible = false;
    onlineOnvangstVerklaringInvullenButtonIsVisible = false;
    onlineOnvangstVerklaringBekijkenButtonIsVisible = false;
    emailButtonIsEnabled = true;
    isFinal: boolean = false;

    // INFO alle transporten code en objecten zijn weggelate want voor zover ik zie niet gebruikt in de oude website
    // Afsluiten idem

    bbrForm = new FormGroup({
        klantID: new FormControl("0"),
        eigenaar: new FormControl(""),
        adres1: new FormControl(""),
        adres2: new FormControl(""),
        postcode: new FormControl(""),
        plaats: new FormControl(""),
        contactPersoon: new FormControl(""),
        telefoon: new FormControl(""),
        email: new FormControl(""),
        afzetAdres1: new FormControl(""),
        afzetAdres2: new FormControl(""),
        afzetPostcode: new FormControl(""),
        afzetPlaats: new FormControl(""),
        bestemmingsBeschrijving: new FormControl(""),
        studieBestemming: new FormControl(""),
        klantContactEmail: new FormControl("")
    });

    deelvolumes: any[];

    //private uploadedIDs: number[] = [];
    uploadStatus: string = "selection";
    uploadQueueCount: number = 0;
    existingFiles: any = [];

    constructor(private readonly bbrRepositoryService: HttpBBRService, private readonly fileRepositoryService: HttpFileService, private readonly tvRepositoryService: HttpTVService, private readonly toastrr: ToastrService, private readonly route: ActivatedRoute, private readonly router: Router) {
        super(toastrr);
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe(x => {
            if (x["bbrId"]) {
                this.loadData(x["bbrId"]);
            }
            if (x["bbr"] && x["bbr"] === "Final") {
                this.isFinal = true;
            }
        });
    }

    loadData(bbrId: number) {

        Promise.all([this.bbrRepositoryService.HasOntvangstVerklaring(bbrId).toPromise(), this.bbrRepositoryService.Detail(bbrId).toPromise()])
            .then((data) => {
                const hasAlreadyOnlineFilled = data[0] as boolean;
                const bbrData = data[1] as any;
                const tvId = bbrData.tvid as number;
                const bestemmingId = bbrData.bestemmingID as number;

                if (bbrData.bestemmingsAardID <= 0)
                    bbrData.bestemmingsAard = "";

                this.bbr = bbrData;
                this.bbrForm.patchValue(bbrData);

                this.grondtransportmeldingIsVisible = (bbrData.grondtransportmeldingID != undefined);
                this.kadastraleGegevensVisible = (bbrData.bestemmingsAardID === 1);
                this.lambertCoordinatenVisible = (bbrData.bestemmingsAardID === 1);

                if (hasAlreadyOnlineFilled) {
                    this.onlineOnvangstVerklaringInvullenButtonIsVisible = false;
                    this.onlineOnvangstVerklaringBekijkenButtonIsVisible = true;
                    this.emailButtonIsEnabled = false;
                } else if (bbrData.bbrStatusID === 3) {
                    this.onlineOnvangstVerklaringInvullenButtonIsVisible = true;
                    this.onlineOnvangstVerklaringBekijkenButtonIsVisible = false;
                    this.emailButtonIsEnabled = true;
                } else {
                    this.onlineOnvangstVerklaringInvullenButtonIsVisible = false;
                    this.onlineOnvangstVerklaringBekijkenButtonIsVisible = false;
                    this.emailButtonIsEnabled = false;
                }

                return Promise.resolve({ bbrId, tvId, bestemmingId });
            })
            .then((data) => {
                return Promise.all([data.bbrId,
                    data.tvId,
                    this.getFileList(data.bbrId),
                    this.bbrRepositoryService.TransportListNrAsString(data.bestemmingId).toPromise()]);
            })
            .then((data) => {
                const bbrId = data[0] as number;
                const tvId = data[1] as number;
                this.existingFiles = data[2];
                const andereGvts = data[3] as any[];

                if (andereGvts.length > 1) {
                    this.andereGvts = andereGvts;
                    this.andereGvtBbrNaarDezeLocatieButtonEnabled = true;
                }

                return Promise.resolve({ bbrId: bbrId, tvId: tvId });
            })
            .then((data) => {
                return Promise.all([data.tvId, this.bbrRepositoryService.Deelvolumes(data.bbrId).toPromise()]);
            })
            .then((data: any) => {
                this.deelvolumes = data[1];
                return Promise.resolve(data[0]);
            })
            .then((tvid: number) => {
                return this.tvRepositoryService.PocoEntity(tvid, false).toPromise<ITVDetail>();
            })
            .then((data: any) => {
                this.plaatsVanHerkomst = data.titel2 + " " + data.titel3 + "\n" + data.titel3 + "\n" + "(" + data.centraalPuntLX + " - " + data.centraalPuntLY + ")";
            })
            .catch(error => {
                this.onlineOnvangstVerklaringInvullenButtonIsVisible = false;
                this.onlineOnvangstVerklaringBekijkenButtonIsVisible = false;
                this.emailButtonIsEnabled = false;
                this.handleError(error);
            });
    }

    private getFileList(bbrId: number) {
        const types: fileTypes[] = [
            fileTypes.UserUploadOntvangstVerklaring,
            fileTypes.GwMailGoedkeuringWeigeringTransport,
            fileTypes.GwMailOntvangstverklaring,
            fileTypes.GwMailGoedkeuringAfkeuringBodembeheerRapport,
            fileTypes.UserOnlineFilledOntvangstVerklaring
        ];
        return this.fileRepositoryService.ListWithoutBlobMultipleTypes(types, bbrId).toPromise();
    }

    andereGvtBbrNaarDezeLocatie() {
        this.andereGvtBbrNaarDezeLocatieContentVisible = !this.andereGvtBbrNaarDezeLocatieContentVisible;
    }

    onActivate(event: any) {
        if (event.type === "dblclick") {
            this.redirectForAndereGvtBbrNaarDezeLocatie(event.row["bbrStatusID"], event.row["bbrNummer"]);
        }
    }

    redirectForAndereGvtBbrNaarDezeLocatie(status: number, bbrId: number) {
        // finaal lijkt niet meer te bestaan in de oude code
        //if (status <= 3) {
        //    this.router.navigate(["/bodembeheerrapport-detail"], { queryParams: { bbrId: bbrId } });
        //} else {
        //    this.router.navigate(["/bodembeheerrapport-detail"], { queryParams: { bbrId: bbrId, final: true } });
        //}        
        this.router.navigate(["/bodembeheerrapport-detail"], { queryParams: { bbrId: bbrId } });
    }

    queueCountChanged(queueLength: number) {
        this.uploadQueueCount = queueLength;
    }


    filesUploaded(fileIDs: number[]) {
        this.fileUploader.moveFilesToFinalLocation(this.bbr.bodemBeheerRapportID);
    }

    moveToFinalDestinationSucceeded(succeeded: boolean) {
        if (!succeeded) {
            this.showErrorToast(appLabels.UploadFailure);
            return;
        }

        //this.getFileList(this.bbr.bodemBeheerRapportID)
        //    .then(data => {
        //        this.existingFiles = data;
        //    })
        //    .catch(() => {
        //        this.showErrorToast("Fout bij het laden van de nieuwe files");
        //    });;

        this.showSuccesToast(appLabels.UploadSuccess);

        this.getFileList(this.bbr.bodemBeheerRapportID)
            .then(data => {
                this.existingFiles = data;
            })
            .catch(() => {
                this.showErrorToast("Fout bij het laden van de nieuwe files");
            });;
    }

    showFileWithId(id: number) {
        this.fileRepositoryService.LoadFileWithoutUserCheck(id).toPromise()
            .then((response: any) => {
                this.openFile(response);
            })
            .catch(_ => {
                this.showErrorToast("Fout bij het laden van de files");
            });
    }

    mailOntvangstVerklaring() {
        const klantContactEmail = this.bbrForm.controls.klantContactEmail.value;
        if (this.isNullOrWhitespace(klantContactEmail))
            return;

        this.emailButtonIsEnabled = false;
        this.bbrRepositoryService.SendLegeOntvangstVerklaringMail(this.bbr.bodemBeheerRapportID, "be.grondwijzer@sgs.com").toPromise()
            .then(() => {
                this.showSuccesToast(`De ontvangstverklaring is verstuurd naar ${klantContactEmail}`);
            })
            .catch(() => {
                this.showErrorToast("Probleem bij het versturen van de mail");
                this.emailButtonIsEnabled = true;
            });
    }

    ontvangstVerklaringOnlineInvullen() {
        this.router.navigate(["/bodembeheerrapport-online", this.bbr.bodemBeheerRapportID]);
    }

    ontvangstVerklaringOnlineBekijken() {
        this.router.navigate(["/bodembeheerrapport-online", this.bbr.bodemBeheerRapportID]);
    }
}