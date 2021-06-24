import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { Location } from "@angular/common";
import { HttpBBRService } from "../services/http-bbr.service";
import { GeneralScripts } from "../scripts/general.scripts";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";
import { fileTypes, HttpFileService } from "../services/http-file.service";
import { IKWDetail } from "../scripts/interfaces.scripts";
import { FileUploaderComponent } from "../file-uploader/file-uploader.component";
import { appLabels } from "../scripts/appLabels";
import { HttpKleineWervenService } from "../services/http-kleinewerven.service";
import { BsLocaleService } from "ngx-bootstrap/datepicker";
import { ValidateRequired, ValidateDateNoLessThan, ValidateDateNoHigherThan } from "../scripts/validator.scripts";

@Component({
    selector: "kleinewerven-verklaring",
    templateUrl: "./kleinewerven-verklaring.component.html",
    styleUrls: ["./kleinewerven-verklaring.component.css"]
})
export class KleineWervenVerklaringComponent extends GeneralScripts implements OnInit {

    @ViewChild("fileUploader") fileUploader: FileUploaderComponent;

    appLabels = appLabels;
    kw: IKWDetail;
    kwID: number = 0;
    grondtransportmeldingIsVisible: boolean = false;
    kadastraleGegevensVisible: boolean = false;
    lambertCoordinatenVisible: boolean = false;

    terugVisible = true;
    waitingMessageVisible = false;

    kwForm: FormGroup;
    volForm: FormGroup;

    deelvolumes: any[];

    //private uploadedIDs: number[] = [];
    uploadStatus: string = "selection";
    uploadQueueCount: number = 0;
    existingFiles: any = [];

    constructor(private readonly bbrRepositoryService: HttpBBRService
        , private readonly fileRepositoryService: HttpFileService
        , private readonly httpKW: HttpKleineWervenService
        , private readonly toastrr: ToastrService
        , private readonly fb: FormBuilder
        , private readonly localeService: BsLocaleService
        , private readonly route: ActivatedRoute
        , private readonly location: Location
        , private readonly router: Router) {
            super(toastrr);
    }

    ngOnInit(): void {
        this.localeService.use("bootstrap-locale-nlbe");

        if (this.route.snapshot.params["id"]) {
            this.kwID = this.route.snapshot.params["id"];
            this.loadData(this.route.snapshot.params["id"]);
        }

        this.kwForm = new FormGroup({
            kleineWervenMeldingID: new FormControl(""),
            isEigenGrondwerker: new FormControl(""),
            kleineWervenGrondwerkerPartijID: new FormControl(""),
            isEigenTransporteur: new FormControl(""),
            kleineWervenTranporteurPartijID: new FormControl(""),
            kleineWervenHerkomstLokatieID: new FormControl(""),
            kleineWervenBestemmingLokatieID: new FormControl(""),
            kleineWervenTopLokatieID: new FormControl(""),
            klantID: new FormControl(""),
            klantReferentie: new FormControl(""),
            geplandVolume: new FormControl(""),
            geplandeStartDatum: new FormControl(""),
            werkelijkVolume: new FormControl(""),
            werkelijkeStartDatum: new FormControl(""),
            werkelijkeEindDatum: new FormControl(""),
            wervenVerklaringOntvangen: new FormControl(""),
            emailSend: new FormControl(""),
            creatieDatum: new FormControl(""),
            statusID: new FormControl(""),

            status: new FormControl(""),
            isTop: new FormControl(""),

            klantVoornaam: new FormControl(""),
            klantAchternaam: new FormControl(""),
            klantFunctie: new FormControl(""),
            klantOrganisatie: new FormControl(""),
            klantAdres1: new FormControl(""),
            klantAdres2: new FormControl(""),
            klantPostCode: new FormControl(""),
            klantPlaats: new FormControl(""),
            klantLand: new FormControl(""),
            klantTelefoon: new FormControl(""),
            klantEmail: new FormControl(""),

            herkAdres1: new FormControl(""),
            herkAdres2: new FormControl(""),
            herkAfzetAdres1: new FormControl(""),
            herkAfzetAdres2: new FormControl(""),
            herkAfzetPlaats: new FormControl(""),
            herkAfzetPostCode: new FormControl(""),
            herkBeschrijving: new FormControl(""),
            herkContactPersoon: new FormControl(""),
            herkContainerBedrijfNaam: new FormControl(""),
            herkEigenaar: new FormControl(""),
            herkEmail: new FormControl(""),
            herkExplAdres1: new FormControl(""),
            herkExplAdres2: new FormControl(""),
            herkExplPlaats: new FormControl(""),
            herkExplPostcode: new FormControl(""),
            herkIsContainerBedrijf: new FormControl(""),
            herkIsContainerPark: new FormControl(""),
            herkKadAfdeling: new FormControl(""),
            herkKadAfdelingsNr: new FormControl(""),
            herkKadBisNr: new FormControl(""),
            herkKadExponent1: new FormControl(""),
            herkKadExponent2: new FormControl(""),
            herkKadGrondNr: new FormControl(""),
            herkKadNummers: new FormControl(""),
            herkKadSectie: new FormControl(""),
            herkKleineWervenLokatieType: new FormControl(""),
            herkLX1: new FormControl(""),
            herkLY1: new FormControl(""),
            herkOpmerkingen: new FormControl(""),
            herkPlaats: new FormControl(""),
            herkPostcode: new FormControl(""),
            herkTelefoon: new FormControl(""),

            herkAdresCode: new FormControl(""),
            herkKadCode: new FormControl(""),
            herkLambCode: new FormControl(""),
            bestAdresCode: new FormControl(""),
            bestKadCode: new FormControl(""),
            bestLambCode: new FormControl(""),

            bestAchternaam: new FormControl(""),
            bestAdres1: new FormControl(""),
            bestAdres2: new FormControl(""),
            bestAfzetAdres1: new FormControl(""),
            bestAfzetAdres2: new FormControl(""),
            bestAfzetPlaats: new FormControl(""),
            bestAfzetPostCode: new FormControl(""),
            bestBtwNummer: new FormControl(""),
            bestContactPersoon: new FormControl(""),
            bestContainerBedrijfNaam: new FormControl(""),
            bestEigenaar: new FormControl(""),
            bestEmail: new FormControl(""),
            bestExplAdres1: new FormControl(""),
            bestExplAdres2: new FormControl(""),
            bestExplPlaats: new FormControl(""),
            bestExplPostcode: new FormControl(""),
            bestFaktuurAdres1: new FormControl(""),
            bestFaktuurAdres2: new FormControl(""),
            bestFaktuurLand: new FormControl(""),
            bestFaktuurPlaats: new FormControl(""),
            bestFaktuurPostcode: new FormControl(""),
            bestFunctie: new FormControl(""),
            bestIsContainerBedrijf: new FormControl(""),
            bestIsContainerPark: new FormControl(""),
            bestKadAfdeling: new FormControl(""),
            bestKadAfdelingsNr: new FormControl(""),
            bestKadBisNr: new FormControl(""),
            bestKadExponent1: new FormControl(""),
            bestKadExponent2: new FormControl(""),
            bestKadGrondNr: new FormControl(""),
            bestKadNummers: new FormControl(""),
            bestKadSectie: new FormControl(""),
            bestKleineWervenLokatieType: new FormControl(""),
            bestLX1: new FormControl(""),
            bestLY1: new FormControl(""),
            bestOpmerkingen: new FormControl(""),
            bestOrganisatie: new FormControl(""),
            bestPlaats: new FormControl(""),
            bestPostcode: new FormControl(""),
            bestTelefoon: new FormControl(""),
            bestVoornaam: new FormControl(""),

            gwAchternaam: new FormControl(""),
            gwEmail: new FormControl(""),
            gwFirmaNaam: new FormControl(""),
            gwKleineWervenPartijType: new FormControl(""),
            gwPlaats: new FormControl(""),
            gwPostcode: new FormControl(""),
            gwStraat1: new FormControl(""),
            gwStraat2: new FormControl(""),
            gwTelefoon: new FormControl(""),
            gwVoornaam: new FormControl(""),

            tptAchternaam: new FormControl(""),
            tptEmail: new FormControl(""),
            tptFirmaNaam: new FormControl(""),
            tptKleineWervenPartijType: new FormControl(""),
            tptPlaats: new FormControl(""),
            tptPostcode: new FormControl(""),
            tptStraat1: new FormControl(""),
            tptStraat2: new FormControl(""),
            tptTelefoon: new FormControl(""),
            tptVoornaam: new FormControl("")
        });

        var today = new Date();
        this.volForm = this.fb.group({
            KleineWervenMeldingId: [""],
            WerkelijkeStartDatum: [""],
            WerkelijkeEindDatum: [""],
            WerkelijkeAfsluitDatum: [today],
            WerkelijkVolume: ["", Validators.required],
            sendOK: [false, Validators.pattern("true")],
        });


        this.volForm.controls.WerkelijkVolume.valueChanges.subscribe(e => {
            if (Number(e) <= 0) {
                this.volForm.controls.WerkelijkeStartDatum.clearValidators();
                this.volForm.controls.WerkelijkeEindDatum.clearValidators();
                this.volForm.controls.WerkelijkeStartDatum.updateValueAndValidity({ emitEvent: false });
                this.volForm.controls.WerkelijkeEindDatum.updateValueAndValidity({ emitEvent: false });
                return;
            }

            this.volForm.controls.WerkelijkeStartDatum.setValidators([ValidateRequired("'Datum van' is verplicht wanneer er een hoeveelheid is ingevuld'"), ValidateDateNoHigherThan(), ValidateDateNoHigherThan("'Datum van' is later dan 'datum tot'", this.volForm.controls.WerkelijkeEindDatum)]);
            this.volForm.controls.WerkelijkeEindDatum.setValidators([ValidateRequired("'Datum tot' is verplicht wanneer er een hoeveelheid is ingevuld'"), ValidateDateNoHigherThan(), ValidateDateNoLessThan("'Datum tot' is voor 'datum van'", this.volForm.controls.WerkelijkeStartDatum)]);
            this.volForm.controls.WerkelijkeStartDatum.updateValueAndValidity({ emitEvent: false });
            this.volForm.controls.WerkelijkeEindDatum.updateValueAndValidity({ emitEvent: false });
        });

        this.volForm.controls.WerkelijkeStartDatum.valueChanges.subscribe(_ => { this.volForm.controls.WerkelijkeEindDatum.updateValueAndValidity({ emitEvent: false }); });
        this.volForm.controls.WerkelijkeEindDatum.valueChanges.subscribe(_ => { this.volForm.controls.WerkelijkeStartDatum.updateValueAndValidity({ emitEvent: false }); });


        //this.volForm.controls.WerkelijkeStartDatum.setValidators([Validators.required, ValidateDateNoHigherThan("Verwachte datum aanvang transport kan niet na de verwachte datum einde transport liggen", this.volForm.controls.WerkelijkeEindDatum)]);
        //this.volForm.controls.WerkelijkeEindDatum.setValidators([ValidateDateNoLessThan("Verwachte datum einde transport kan niet voor verwachte datum aanvang transport liggen", this.volForm.controls.WerkelijkeStartDatum)]);
        //this.volForm.controls.WerkelijkeEindDatum.setValidators([ValidateDateNoHigherThan("Verwachte datum einde transport kan niet na de afsluitdatum liggen", this.volForm.controls.WerkelijkeAfsluitDatum)]);
    }

    StartDatumValidation() {
        setTimeout((volForm: FormGroup) => { volForm.controls["WerkelijkeStartDatum"].updateValueAndValidity() }, 10, this.volForm);
    }

    EindDatumValidation() {
        setTimeout((volForm: FormGroup) => { volForm.controls["WerkelijkeEindDatum"].updateValueAndValidity() }, 10, this.volForm);
    }

    loadData(id: number) {
        this.httpKW.getDetail(id).toPromise()
            .then((dtl: IKWDetail) => {
                this.kw = dtl;
                if (dtl != null) {
                    this.kwForm.patchValue({
                        kleineWervenMeldingID: dtl.kleineWervenMeldingID,
                        isEigenGrondwerker: dtl.isEigenGrondwerker,
                        kleineWervenGrondwerkerPartijID: dtl.kleineWervenGrondwerkerPartijID,
                        isEigenTransporteur: dtl.isEigenTransporteur,
                        kleineWervenTranporteurPartijID: dtl.kleineWervenTranporteurPartijID,
                        kleineWervenHerkomstLokatieID: dtl.kleineWervenHerkomstLokatieID,
                        kleineWervenBestemmingLokatieID: dtl.kleineWervenBestemmingLokatieID,
                        kleineWervenTopLokatieID: dtl.kleineWervenTopLokatieID,
                        klantID: dtl.klantID,
                        klantReferentie: dtl.klantReferentie,
                        geplandVolume: dtl.geplandVolume,
                        geplandeStartDatum: dtl.geplandeStartDatum,
                        werkelijkVolume: dtl.werkelijkVolume,
                        werkelijkeStartDatum: dtl.werkelijkeStartDatum,
                        werkelijkeEindDatum: dtl.werkelijkeEindDatum,
                        wervenVerklaringOntvangen: dtl.wervenVerklaringOntvangen,
                        emailSend: dtl.emailSend,
                        creatieDatum: dtl.creatieDatum,
                        statusID: dtl.statusID,

                        status: dtl.status,
                        isTop: dtl.isTop,

                        klantVoornaam: dtl.klantVoornaam,
                        klantAchternaam: dtl.klantAchternaam,
                        klantFunctie: dtl.klantFunctie,
                        klantOrganisatie: dtl.klantOrganisatie,
                        klantAdres1: dtl.klantAdres1,
                        klantAdres2: dtl.klantAdres2,
                        klantPostCode: dtl.klantPostCode,
                        klantPlaats: dtl.klantPlaats,
                        klantLand: dtl.klantLand,
                        klantTelefoon: dtl.klantTelefoon,
                        klantEmail: dtl.klantEmail,

                        herkAdres1: dtl.herkAdres1,
                        herkAdres2: dtl.herkAdres2,
                        herkAfzetAdres1: dtl.herkAfzetAdres1,
                        herkAfzetAdres2: dtl.bestAfzetAdres2,
                        herkAfzetPlaats: dtl.herkAfzetPlaats,
                        herkAfzetPostCode: dtl.herkAfzetPostCode,
                        herkBeschrijving: dtl.herkBeschrijving,
                        herkContactPersoon: dtl.herkContactPersoon,
                        herkContainerBedrijfNaam: dtl.herkContainerBedrijfNaam,
                        herkEigenaar: dtl.herkEigenaar,
                        herkEmail: dtl.herkEmail,
                        herkExplAdres1: dtl.herkExplAdres1,
                        herkExplAdres2: dtl.herkExplAdres2,
                        herkExplPlaats: dtl.herkExplPlaats,
                        herkExplPostcode: dtl.herkExplPostcode,
                        herkIsContainerBedrijf: dtl.herkIsContainerBedrijf,
                        herkIsContainerPark: dtl.herkIsContainerPark,
                        herkKadAfdeling: dtl.herkKadAfdeling,
                        herkKadAfdelingsNr: dtl.herkKadAfdelingsNr,
                        herkKadBisNr: dtl.herkKadBisNr,
                        herkKadExponent1: dtl.herkKadExponent1,
                        herkKadExponent2: dtl.herkKadExponent2,
                        herkKadGrondNr: dtl.herkKadGrondNr,
                        herkKadNummers: dtl.herkKadNummers,
                        herkKadSectie: dtl.herkKadSectie,
                        herkKleineWervenLokatieType: dtl.herkKleineWervenLokatieType,
                        herkLX1: dtl.herkLX1,
                        herkLY1: dtl.herkLY1,
                        herkOpmerkingen: dtl.herkOpmerkingen,
                        herkPlaats: dtl.herkPlaats,
                        herkPostcode: dtl.herkPostcode,
                        herkTelefoon: dtl.herkTelefoon,

                        herAdresCode: dtl.herkAdresCode,
                        herKadCode: dtl.herkKadCode,
                        herLambCode: dtl.herkLambCode,
                        bestAdresCode: dtl.bestAdresCode,
                        bestKadCode: dtl.bestKadCode,
                        bestLambCode: dtl.bestLambCode,

                        bestAchternaam: dtl.bestAchternaam,
                        bestAdres1: dtl.bestAdres1,
                        bestAdres2: dtl.bestAdres2,
                        bestAfzetAdres1: dtl.bestAfzetAdres1,
                        bestAfzetAdres2: dtl.bestAfzetAdres2,
                        bestAfzetPlaats: dtl.bestAfzetPlaats,
                        bestAfzetPostCode: dtl.bestAfzetPostCode,
                        bestBtwNummer: dtl.bestBtwNummer,
                        bestContactPersoon: dtl.bestContactPersoon,
                        bestContainerBedrijfNaam: dtl.bestContainerBedrijfNaam,
                        bestEigenaar: dtl.bestEigenaar,
                        bestEmail: dtl.bestEmail,
                        bestExplAdres1: dtl.bestExplAdres1,
                        bestExplAdres2: dtl.bestExplAdres2,
                        bestExplPlaats: dtl.bestExplPlaats,
                        bestExplPostcode: dtl.bestExplPostcode,
                        bestFaktuurAdres1: dtl.bestFaktuurAdres1,
                        bestFaktuurAdres2: dtl.bestFaktuurAdres2,
                        bestFaktuurLand: dtl.bestFaktuurLand,
                        bestFaktuurPlaats: dtl.bestFaktuurPlaats,
                        bestFaktuurPostcode: dtl.bestFaktuurPostcode,
                        bestFunctie: dtl.bestFunctie,
                        bestIsContainerBedrijf: dtl.bestIsContainerBedrijf,
                        bestIsContainerPark: dtl.bestIsContainerPark,
                        bestKadAfdeling: dtl.bestKadAfdeling,
                        bestKadAfdelingsNr: dtl.bestKadAfdelingsNr,
                        bestKadBisNr: dtl.bestKadBisNr,
                        bestKadExponent1: dtl.bestKadExponent1,
                        bestKadExponent2: dtl.bestKadExponent2,
                        bestKadGrondNr: dtl.bestKadGrondNr,
                        bestKadNummers: dtl.bestKadNummers,
                        bestKadSectie: dtl.bestKadSectie,
                        bestKleineWervenLokatieType: dtl.bestKleineWervenLokatieType,
                        bestLX1: dtl.bestLX1,
                        bestLY1: dtl.bestLY1,
                        bestOpmerkingen: dtl.bestOpmerkingen,
                        bestOrganisatie: dtl.bestOrganisatie,
                        bestPlaats: dtl.bestPlaats,
                        bestPostcode: dtl.bestPostcode,
                        bestTelefoon: dtl.bestTelefoon,
                        bestVoornaam: dtl.bestVoornaam,

                        gwAchternaam: dtl.gwAchternaam,
                        gwEmail: dtl.gwEmail,
                        gwFirmaNaam: dtl.gwFirmaNaam,
                        gwKleineWervenPartijType: dtl.gwKleineWervenPartijType,
                        gwPlaats: dtl.gwPlaats,
                        gwPostcode: dtl.gwPostcode,
                        gwStraat1: dtl.gwStraat1,
                        gwStraat2: dtl.gwStraat2,
                        gwTelefoon: dtl.gwTelefoon,
                        gwVoornaam: dtl.gwVoornaam,

                        tptAchternaam: dtl.tptAchternaam,
                        tptEmail: dtl.tptEmail,
                        tptFirmaNaam: dtl.tptFirmaNaam,
                        tptKleineWervenPartijType: dtl.tptKleineWervenPartijType,
                        tptPlaats: dtl.tptPlaats,
                        tptPostcode: dtl.tptPostcode,
                        tptStraat1: dtl.tptStraat1,
                        tptStraat2: dtl.tptStraat2,
                        tptTelefoon: dtl.tptTelefoon,
                        tptVoornaam: dtl.tptVoornaam
                    });
                }
            });
    }

    send() {
        this.terugVisible = false;
        this.waitingMessageVisible = true;

        this.volForm.patchValue({ KleineWervenMeldingId: this.kwID });

        this.httpKW.Verklaring(this.volForm.value).toPromise()
            .then(() => {
                this.terugVisible = true;
                this.waitingMessageVisible = false;
                this.showSuccesToast(`De kleine ontgraving verklaring is aangemaakt`);
                this.router.navigate(["/kleinewerven-detail", this.kwID]);
            })
            .catch(() => {
                this.terugVisible = true;
                this.waitingMessageVisible = false;
                this.showErrorToast("Probleem bij het aanmaken van de kleine ontgraving verklaring");
            });
    }

    private goBack() {
        this.location.back();
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


    queueCountChanged(queueLength: number) {
        this.uploadQueueCount = queueLength;
    }


    filesUploaded(fileIDs: number[]) {
        this.fileUploader.moveFilesToFinalLocation(this.kw.kleineWervenMeldingID);
    }

    moveToFinalDestinationSucceeded(succeeded: boolean) {
        if (!succeeded) {
            this.showErrorToast(appLabels.UploadFailure);
            return;
        }

        //this.getFileList(this.kw.kleineWervenMeldingID)
        //    .then(data => {
        //        this.existingFiles = data;
        //    })
        //    .catch(() => {
        //        this.showErrorToast("Fout bij het laden van de nieuwe files");
        //    });;

        this.showSuccesToast(appLabels.UploadSuccess);

        this.getFileList(this.kw.kleineWervenMeldingID)
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
        const klantContactEmail = this.kwForm.controls.klantContactEmail.value;
        if (this.isNullOrWhitespace(klantContactEmail))
            return;

        //this.emailButtonIsEnabled = false;
        this.bbrRepositoryService.SendLegeOntvangstVerklaringMail(this.kw.kleineWervenMeldingID, "be.grondwijzer@sgs.com").toPromise()
            .then(() => {
                this.showSuccesToast(`De ontvangstverklaring is verstuurd naar ${klantContactEmail}`);
            })
            .catch(() => {
                this.showErrorToast("Probleem bij het versturen van de mail");
                //this.emailButtonIsEnabled = true;
            });
    }

    ontvangstVerklaringOnlineInvullen() {
        this.router.navigate(["/bodembeheerrapport-online", this.kw.kleineWervenMeldingID]);
    }

    ontvangstVerklaringOnlineBekijken() {
        this.router.navigate(["/bodembeheerrapport-online", this.kw.kleineWervenMeldingID]);
    }


}