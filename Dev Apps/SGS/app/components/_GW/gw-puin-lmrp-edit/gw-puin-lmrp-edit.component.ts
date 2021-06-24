import { Component, OnInit, ViewChild } from "@angular/core";
import { GeneralScripts } from "../../scripts/general.scripts";
import { HttpBBRService } from "../../services/http-bbr.service";
import { ToastrService } from "ngx-toastr";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from "@angular/forms";
import { appLabels } from "../../scripts/appLabels";
import { IContactInfo, ITVDetail, IPuinIndexTechnischVerslag, IPuinBestInfo, ITVStatusDefinition } from "../../scripts/interfaces.scripts";
import { BsLocaleService } from "ngx-bootstrap/datepicker";
import { PuinAanvragenTypes } from "../../puin-lmrp-aanvragen/puin-lmrp-aanvragen.component";
import { HttpPuinService } from "../../services/http-puin.service";

import { HttpTVService } from "../../services/http-tv.service";
import { AuthenticationService, UserTypes } from "../../services/authentication.service";
import { PuinTechnischVerslagDataComponent } from "../../puin-lmrp-indienen/puin-technisch-verslag-data/puin-technisch-verslag-data.component";
import { DatePipe } from "@angular/common";
import { DocumentTypes } from "../gw-documents/gw-documents.component";
import { EmailHistoriekTypes } from "../gw-email-historiek-grid/gw-email-historiek-grid.component";

@Component({
    selector: "gw-puin-lmrp-edit",
    templateUrl: "./gw-puin-lmrp-edit.component.html",
    styleUrls: ["./gw-puin-lmrp-edit.component.css"],
    providers: [DatePipe],

})
export class gwPuinLmrpEditComponent extends GeneralScripts implements OnInit {
    appLabels = appLabels;

    // data and dropdown
    puinId: number;
    title: string = "";
    statusListItems: ITVStatusDefinition[];


    // Form & Form Validation
    puinForm: FormGroup;

    canGoedgekeeurdSelecteerd: boolean;

    klantemailValidationMessage: string = "";
    bestemailValidationMessage: string = "";
    bestemmingValidationMessage: string = "";
    goedgekeurdValidationMessage: string = "";



    // upload documents
    private uploadedIDs: number[] = [];
    uploadStatus: string = "selection";


    // gw-Documents
    gwDocumentType: DocumentTypes = DocumentTypes.AanvraagLRMP;
    canSendNewEmail: boolean = true;
    emailHistoriekType: EmailHistoriekTypes = EmailHistoriekTypes.gwPuinEdit;



    @ViewChild(PuinTechnischVerslagDataComponent) technischVerslagData: PuinTechnischVerslagDataComponent;

    msgOpmerkingen: string = "750 resterend";

    constructor(
        private readonly httpBBR: HttpBBRService,
        private readonly httpPuin: HttpPuinService,
        private readonly httpTv: HttpTVService,
        private readonly fb: FormBuilder,
        private readonly toastr: ToastrService,
        private readonly router: Router,
        private readonly localeService: BsLocaleService,
        private readonly route: ActivatedRoute,
        private readonly authenticationService: AuthenticationService) {
        super(toastr);
    }

    ngOnInit(): void {

        if (this.route.snapshot.params["id"]) {
            this.puinId = this.route.snapshot.params["id"];
            this.loadData(this.route.snapshot.params["id"]);
        }
        this.localeService.use("bootstrap-locale-nlbe");
        this.loadDropdowns();

        //  const snapshot = this.route.snapshot;
        //if (snapshot.params["IndieningsTypeId"]) this.indieningsTypeId = snapshot.params["IndieningsTypeId"] as PuinAanvragenTypes;

        //if (snapshot.params["BestaandeBestemmingId"]) this.bestaandeBestemmingId = +snapshot.params["BestaandeBestemmingId"];

        // Needed configuration for the bsDatepicker to accept dd/MM/yyyy formatting
        //if (this.indieningsTypeId === PuinAanvragenTypes.NieuweLocatie || this.indieningsTypeId === PuinAanvragenTypes.BestaandeLocatie) {
        //    this.showAddRemoveOptionForTechnischVerslagBlock = (this.authenticationService.userType === UserTypes.Top);
        //}

        this.puinForm = this.fb.group({
            //TypeID: [this.indieningsTypeId],
            //ImmediateRequest: [false],

            klantContactAchterNaam: ["", [Validators.required, Validators.maxLength(50)]],
            klantContactVoorNaam: ["", [Validators.required, Validators.maxLength(50)]],
            klantContactTelefoon: ["", [Validators.required, Validators.maxLength(50)]],
            klantContactEmail: ["", [Validators.required, Validators.maxLength(50)]],
            klantKenmerk: ["", [Validators.required, Validators.maxLength(50)]],
            startDatumAfvoerPuin: ["", [Validators.required]],
            klantOpmerkingen: ["", Validators.maxLength(750)],


            // id: [this.bestaandeBestemmingId],
            eigenaar: ["", [Validators.required, Validators.maxLength(50)]],
            adres1: ["", Validators.maxLength(100)],
            adres2: ["", Validators.maxLength(100)],
            postcode: ["", Validators.maxLength(10)],
            plaats: ["", Validators.maxLength(50)],
            contactPersoon: ["", [Validators.required, Validators.maxLength(50)]],
            telefoon: ["", Validators.maxLength(50)],
            email: ["", Validators.maxLength(50)],
            afzetReferentie: ["", Validators.maxLength(50)],
            afzetAdres1: ["", Validators.maxLength(100)],
            afzetAdres2: ["", Validators.maxLength(100)],
            afzetPostcode: ["", Validators.maxLength(10)],
            afzetPlaats: ["", Validators.maxLength(50)],
            brekerCertificaatNummer: ["", [Validators.required, Validators.maxLength(50)]],

            // new fields
            uitspraakAbsest: [""],
            check_uitspraak_absest: [""],
            uitspraatStorendeStoffen: [""],
            check_uitspraat_storende_stoffen: [""],
            opmerkingen: ["", Validators.maxLength(750)],
            statusID: [""],

            uploadedIDs: [],


        });

        this.title = "gecertificeerde producent van gerecycleerde granulaten";

        this.initialiseValueChangeHandlers();

        //this.loadContactInfo();
        //if (this.bestaandeBestemmingId > 0) {
        //    this.loadBestemmingInfo();
        //}
    }

    // validations and errors

    initialiseValueChangeHandlers() {

        const opmElement = this.puinForm.get("KlantOpmerkingen");
        if (opmElement) {
            opmElement.valueChanges.subscribe(value => this.msgOpmerkingen = (750 - String(opmElement.value).length) + " resterend");
        }


        this.canSendNewEmail = (this.puinForm.get("statusID").value === "") ? true : false;// to test when get value from backend if required?
        this.puinForm.get("statusID").valueChanges.debounceTime(1000).subscribe(val => {
            this.canSendNewEmail = (val !== "4") ? true : false;
        });

        this.puinForm.valueChanges.debounceTime(1000).subscribe(val => {
            if (Number(val.statusID) === 4) {

                const absetMessage = (val.check_uitspraak_absest !== 1) ? "Uitspraak absest": null;
                const stoffenMessage = (val.check_uitspraat_storende_stoffen !== 1) ? "itspraak storende stoffen" : null;

                this.goedgekeurdValidationMessage = (absetMessage !== null || stoffenMessage) ? " U moet een positive besluit invullen voor" + (absetMessage || stoffenMessage ) : "";
               
                   
                   

                console.log(this.goedgekeurdValidationMessage, " this.goedgekeurdValidationMessage");
            }


        });

      

    }


    onUitspraakAbsestSelected(value: any) {
        this.puinForm.patchValue({
            uitspraakAbsest: value,
        });
    }

    onUitspraatStorendeStoffenSelected(value: any) {
        this.puinForm.patchValue({
            uitspraatStorendeStoffen: value,
        });
    }


    // load data
    loadDropdowns() {
        this.httpTv.StatusDefinitionList(false).toPromise().
            then((lst: ITVStatusDefinition[]) => {
                this.statusListItems = [...lst];
            });

    }

    loadData(id: number) {

    }


    // save data

    save() {
        this.uploadStatus = "upload";
    }



    sendData(fileIDs: number[]) {
        if (fileIDs != null) {
            this.uploadedIDs = [...fileIDs];
            this.puinForm.patchValue({ uploadedIDs: this.uploadedIDs });
        }
        //if (!this.afsluitenFormValues) this.afsluitenFormValues = this.afsluitenRedenInit();

        //let tvFormValues: sgsTvJoinedData = { ...this.getTvFormValues(), ...this.afsluitenFormValues, ...this.evaluatieFormValues };

        //this.httpTv.sgsSaveTVJoinedData(tvFormValues).toPromise().then((docId: any) => {
        //    console.log(docId, "docId");
        //    this.showSuccesToast("De gegevens werden opgeslagen");
        //    this.router.navigate(["/gw-tv-grid"]);
        //})
        //    .catch(error => {
        //        this.handleError(error);
        //        console.log(error, "error");
        //        if (this.uploadedIDs.length > 0) {
        //            this.uploadStatus = "clean";
        //        }
        //    });

    }



    sendNewEmail() {
        this.router.navigate(['gw/email', this.emailHistoriekType, this.puinId]);
    }
    //isAfbraakBestemmingVisible() {
    //    return (this.indieningsTypeId === PuinAanvragenTypes.MobieleBrekerOpDeWerf) ? false : true;
    //}

    allIsValid(): boolean {
        const bestemming = this.puinForm.controls.Bestemming as FormGroup;

        var bln1 = bestemming.valid
        var bln2 = this.isKlantSectionValid()
        var bln3 = this.isValid(bestemming.controls.brekerCertificaatNummer)
        var bln4 = this.isValid(bestemming.controls.eigenaar)
        var bln5 = this.isValid(bestemming.controls.contactPersoon)
        var bln6 = this.isValid(bestemming.controls.email)
        var bln7 = this.bestemailValidationMessage === ""
        // var bln8 = this.isBestemmingLocationValid()
        var bln9 = this.isBestEmailTelValid()
        var bln10 = this.puinForm.controls.lockMultiSave.valid;

        return bestemming.valid
            && this.isKlantSectionValid()
            && this.isValid(bestemming.controls.brekerCertificaatNummer)
            && this.isValid(bestemming.controls.eigenaar)
            && this.isValid(bestemming.controls.contactPersoon)
            && this.isValid(bestemming.controls.email)
            && this.bestemailValidationMessage === ""
            //  && this.isBestemmingLocationValid()
            && this.isBestEmailTelValid()
            && this.puinForm.controls.lockMultiSave.valid;
    }

    //isBestemmingLocationValid(): boolean {
    //    if (this.indieningsTypeId == PuinAanvragenTypes.MobieleBrekerOpDeWerf) {
    //        this.clearBestemmingLocationErrors();
    //        this.bestemmingValidationMessage = "";
    //        return true;
    //    }

    //    const bestemming = this.puinForm.controls.Bestemming as FormGroup;
    //    if (!this.isNullOrWhitespace(bestemming.controls.afzetAdres1.value)
    //        && !this.isNullOrWhitespace(bestemming.controls.afzetPostcode.value)
    //        && !this.isNullOrWhitespace(bestemming.controls.afzetPlaats.value)) {
    //        this.clearBestemmingLocationErrors();
    //        this.bestemmingValidationMessage = "";
    //        return true;
    //    }

    //    this.bestemmingValidationMessage = "- Lokatie waar het puin wordt gebroken is nog onvolledig";
    //    this.setBestemmingLocationErrors();
    //    return false;
    //}

    private clearBestemmingLocationErrors() {
        const bestemming = this.puinForm.controls.Bestemming as FormGroup;
        bestemming.controls.afzetAdres1.setErrors(null);
        bestemming.controls.afzetPostcode.setErrors(null);
        bestemming.controls.afzetPlaats.setErrors(null);
    }

    private setBestemmingLocationErrors() {
        const bestemming = this.puinForm.controls.Bestemming as FormGroup;
        this.setMandatoryError(bestemming.controls.afzetAdres1);
        this.setMandatoryError(bestemming.controls.afzetPostcode);
        this.setMandatoryError(bestemming.controls.afzetPlaats);
    }

    private setMandatoryError(control: AbstractControl): void {
        control.setErrors({ required: true, message: "Verplicht veld" });
    }

    isKlantSectionValid(): boolean {
        if (this.technischVerslagData != undefined && !this.technischVerslagData.isValid())
            return false;

        return this.puinForm.controls.KlantContactAchterNaam.valid
            && this.puinForm.controls.KlantContactVoorNaam.valid
            && this.puinForm.controls.KlantContactTelefoon.valid
            && this.puinForm.controls.KlantContactEmail.valid
            && this.klantemailValidationMessage === ""
            && this.puinForm.controls.KlantKenmerk.valid
            && this.puinForm.controls.StartDatumAfvoerPuin.valid;
    }

    private isValid(control: AbstractControl): boolean {
        return control.valid;
    }

    private isBestEmailTelValid(): boolean {
        const bestemming = this.puinForm.controls.Bestemming as FormGroup;
        const bestTel = bestemming.controls.telefoon.value;
        const bestEmail = bestemming.controls.email.value;
        return (bestEmail != null && bestEmail !== undefined && bestTel != null && bestTel !== undefined && bestEmail + bestTel !== "");
    }

    indienen() {
        this.puinForm.controls.lockMultiSave.setValue(true); // this will prevent multiple save clicks
        this.httpPuin.insert(this.puinForm.value)
            .then((puinId: number) => {
                this.showSuccesToast("De gegevens werden opgeslagen als nieuwe LMRP puin aanvraag");
                this.router.navigate(["/puin-lmrp-status"]);
            })
            .catch(error => {
                this.handleError(error);
                if (this.puinForm.controls.FileUploadIDs.value.length > 0) {
                    this.uploadStatus = "clean";
                }
                this.puinForm.controls.lockMultiSave.setValue(false);
            });
    }


}