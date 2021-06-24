import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { GeneralScripts } from "../scripts/general.scripts";
//import { HttpClient, HttpParams } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";
import { appLabels } from "../scripts/appLabels";
import { HttpFileService, fileTypes } from "../services/http-file.service";
import { HttpGTMService } from "../services/http-gtm.service";
import { FileUploaderComponent } from "../file-uploader/file-uploader.component";
import { HttpTVService } from "../services/http-tv.service";

@Component({
    selector: "transport-top-cgr-detail",
    templateUrl: "./transport-top-cgr-detail.component.html",
    styleUrls: ["./transport-top-cgr-detail.component.css"],
    //encapsulation: ViewEncapsulation.None
})
/** transport-top-cgr-detail component*/
export class TransportTopCgrDetailComponent extends GeneralScripts implements OnInit {

    @ViewChild("fileUploader") fileUploader: FileUploaderComponent;

    appLabels = appLabels;
    Id: number = 0;
    GTM: any;
    GTMzones: any[];
    topCGR: any;
    grondtransportmeldingGebruik: string;
    isAfgerond: boolean;
    isAlreadyOnlineSent: boolean;
    enableFiles: boolean;
    lbl1: string;
    lbl2: string;
    files: any[];
    uploadedIDs: number[] = [];
    technischVerslag: any;

    constructor(private readonly router: Router, private readonly fileService: HttpFileService, private readonly gtmServcice: HttpGTMService, private readonly tvServcice: HttpTVService,
        //private readonly _http: HttpClient,
        //@Inject("BASE_URL") private readonly _baseUrl: string,
        private readonly _toastr: ToastrService, private readonly route: ActivatedRoute) {
        super(_toastr);
    }

    ngOnInit(): void {
        //Get Id
        if (this.route.snapshot.params["Id"])
            this.Id = this.route.snapshot.params["Id"];

        if (this.Id === 0) {
            this.showErrorToast("No Id received");
            return;
        }

        this.initFormData();
    }

    initFormData() {
        //Fill GTM
        //let params = new HttpParams();
        //params = params.append("GTMId", this.Id.toString());
        //this._http.get(this._baseUrl + "api/TransportTopCgrMelden/GetGTM", { params: params })
        this.gtmServcice.Detail(this.Id).toPromise()
            .then((data: any) => {
                this.GTM = data.gtm;
                this.GTMzones = data.gtmZones;
                this.topCGR = data.topCGRaddress;
                this.grondtransportmeldingGebruik = data.grondtransportmeldingGebruik;
                this.files = data.files;
                this.isAfgerond = data.isAfgerond;
                this.isAlreadyOnlineSent = data.isAlreadyOnlineSent;
                this.enableFiles = (!data.isAfgerond && !data.isAlreadyOnlineSent);
                this.lbl2 = "Verklaring afnemer online invullen";
                if (this.isAlreadyOnlineSent) {
                    this.lbl1 = 'Door te klikken op de knop hieronder kan u uw online ingevulde "Verklaring afnemer" bekijken';
                    this.lbl2 = "Verklaring afnemer online bekijken";
                } else {
                    if (this.isAfgerond) {
                        this.lbl1 = 'U kan geen "Verklaring afnemer" meer online invullen omdat deze GTM al is afgerond';
                    } else {
                        this.lbl1 = "Hieronder kan u de verklaring afnemer online invullen, emailen of direct uploaden (voor zover dit nog niet is gebeurd)";
                    }
                }
                return Promise.resolve(data.gtm.technischVerslagID);
            })
            .then((technischVerslagId: number | null) => {
                if (technischVerslagId == null) {
                    return null;
                }
                return this.tvServcice.Detail(technischVerslagId).toPromise();
            })
            .then((technischVerslag: any) => {
                this.technischVerslag = technischVerslag;
            })
            .catch(error => {
                this.showWarningToast((error.status === 500 && error.error && error.error > "") ? error.error : error.message);
            });
    }

    verklaringAfnemerOnline() {
        this.router.navigate(["/transport-top-cgr-verklaring", this.Id]);
    }

    showFile(id: number) {
        this.fileService.LoadFile(id).toPromise()
            .then((response: any) => {
                this.openFile(response);
            });
    }


    filesUploaded(fileIDs: number[]) {
        this.fileUploader.moveFilesToFinalLocation(this.Id);
    }

    moveToFinalDestinationSucceeded(succeeded: boolean) {
        if (!succeeded) {
            this.showErrorToast(appLabels.UploadFailure);
            return;
        }

        this.showSuccesToast(appLabels.UploadSuccess);

        const types: fileTypes[] = [
            fileTypes.MailGrondTransportMelding,
            fileTypes.MailVerklaringAfnemerGTM,
            fileTypes.UserExtraFilesGTM,
            fileTypes.UserOnlineFilledVerklaringAfnemer,
            fileTypes.UserUploadVerklaringAfnemer
        ];
        this.fileService.ListWithoutBlobMultipleTypes(types, this.Id).toPromise()
            .then((files: any) => {
                this.files = files;
            })
            .catch(_ => {
                this.showErrorToast("Fout bij het laden van de bestanden");
            });
    }
}

