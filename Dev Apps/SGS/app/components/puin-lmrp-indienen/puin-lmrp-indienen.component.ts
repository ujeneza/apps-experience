import { Component, OnInit, ViewChild } from "@angular/core";
import { GeneralScripts } from "../scripts/general.scripts";
import { HttpBBRService } from "../services/http-bbr.service";
import { ToastrService } from "ngx-toastr";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from "@angular/forms";
import { appLabels } from "../scripts/appLabels";
import { IContactInfo, ITVDetail, IPuinIndexTechnischVerslag, IPuinBestInfo } from "../scripts/interfaces.scripts";
import { BsLocaleService } from "ngx-bootstrap/datepicker";
import { PuinAanvragenTypes } from "../puin-lmrp-aanvragen/puin-lmrp-aanvragen.component";
import { HttpPuinService } from "../services/http-puin.service";
import { PuinTechnischVerslagDataComponent } from "./puin-technisch-verslag-data/puin-technisch-verslag-data.component";
import { HttpTVService } from "../services/http-tv.service";
import { AuthenticationService, UserTypes } from "../services/authentication.service";

@Component({
    selector: "puin-lmrp-indienen",
    templateUrl: "./puin-lmrp-indienen.component.html",
    styleUrls: ["./puin-lmrp-indienen.component.css"],
    providers: [PuinTechnischVerslagDataComponent]
})
export class PuinLmrpIndienenComponent extends GeneralScripts implements OnInit {
    appLabels = appLabels;

    // QueryString Parameters
    // TypeId: number = 0;
    // BestId: number = 0;
    title: string = "";
    indieningsTypeId: PuinAanvragenTypes;
    bestaandeBestemmingId: number = 0;

    showAddRemoveOptionForTechnischVerslagBlock = false;

    // Upload Component
    uploadStatus: string = "selection";
    uploadQueueCount: number = 0;

    // Form & Form Validation
    puinForm: FormGroup;

    klantemailValidationMessage: string = "";
    bestemailValidationMessage: string = "";
    bestemmingValidationMessage: string = "";

    isContinued: boolean = false;

    @ViewChild(PuinTechnischVerslagDataComponent) technischVerslagData: PuinTechnischVerslagDataComponent;

    msgOpmerkingen: string = "750 resterend";

    constructor(
        private readonly httpBBR: HttpBBRService,
        private readonly httpPuin: HttpPuinService,
        private readonly httpTvService: HttpTVService,
        private readonly fb: FormBuilder,
        private readonly toastr: ToastrService,
        private readonly router: Router,
        private readonly localeService: BsLocaleService,
        private readonly route: ActivatedRoute,
        private readonly authenticationService: AuthenticationService) {
        super(toastr);
    }

    ngOnInit(): void {
        const snapshot = this.route.snapshot;

        if (snapshot.params["IndieningsTypeId"]) this.indieningsTypeId = snapshot.params["IndieningsTypeId"] as PuinAanvragenTypes;

        if (snapshot.params["BestaandeBestemmingId"]) this.bestaandeBestemmingId = +snapshot.params["BestaandeBestemmingId"];

        // Needed configuration for the bsDatepicker to accept dd/MM/yyyy formatting
        this.localeService.use("bootstrap-locale-nlbe");


        if (this.indieningsTypeId === PuinAanvragenTypes.NieuweLocatie || this.indieningsTypeId === PuinAanvragenTypes.BestaandeLocatie) {
            this.showAddRemoveOptionForTechnischVerslagBlock = (this.authenticationService.userType === UserTypes.Top);
        }

        this.puinForm = this.fb.group({
            TypeID: [this.indieningsTypeId],
            ImmediateRequest: [false],

            KlantContactAchterNaam: ["", [Validators.required, Validators.maxLength(50)]],
            KlantContactVoorNaam: ["", [Validators.required, Validators.maxLength(50)]],
            KlantContactTelefoon: ["", [Validators.required, Validators.maxLength(50)]],
            KlantContactEmail: ["", [Validators.required, Validators.maxLength(50)]],
            KlantKenmerk: ["", [Validators.required, Validators.maxLength(50)]],
            StartDatumAfvoerPuin: ["", [Validators.required]],
            KlantOpmerkingen: ["", Validators.maxLength(750)],

            Bestemming: this.fb.group({
                id: [this.bestaandeBestemmingId],
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
                brekerCertificaatNummer: ["", [Validators.required, Validators.maxLength(50)]]
            }),

            FileUploadIDs: [],
            technischVerslagData: this.fb.array([]),
            lockMultiSave: [false, Validators.pattern("false")]
        });

        this.title = "gecertificeerde producent van gerecycleerde granulaten";

        this.initialiseValueChangeHandlers();

        this.loadContactInfo();
        if (this.bestaandeBestemmingId > 0) {
            this.loadBestemmingInfo();
        }
    }

    setTestData() {
        this.puinForm.controls.KlantOpmerkingen.setValue("KlantOpmerkingen");
        this.puinForm.controls.KlantKenmerk.setValue("KlantKenmerk - uw ref");
        this.puinForm.controls.StartDatumAfvoerPuin.setValue("01/10/2020");

        const bestemming = this.puinForm.controls.Bestemming as FormGroup;
        bestemming.controls.eigenaar.setValue("eigenaar");
        bestemming.controls.adres1.setValue("adres1");
        bestemming.controls.adres2.setValue("adres2");
        bestemming.controls.postcode.setValue("pc");
        bestemming.controls.plaats.setValue("plaats");
        bestemming.controls.contactPersoon.setValue("contactPersoon");
        bestemming.controls.telefoon.setValue("telefoon");
        bestemming.controls.email.setValue("bestemmingemail@email.com");
        bestemming.controls.afzetReferentie.setValue("afzetReferentie");
        bestemming.controls.afzetAdres1.setValue("afzetAdres1");
        bestemming.controls.afzetAdres2.setValue("afzetAdres2");
        bestemming.controls.afzetPostcode.setValue("afzetPc");
        bestemming.controls.afzetPlaats.setValue("afzetPlaats");
        bestemming.controls.brekerCertificaatNummer.setValue("nummer");
    }

    initialiseValueChangeHandlers() {

        const bestemming = this.puinForm.controls.Bestemming as FormGroup;
        bestemming.controls.afzetAdres1.valueChanges.subscribe(e => {
            this.isBestemmingLocationValid();
        });
        bestemming.controls.afzetPostcode.valueChanges.subscribe(e => {
            this.isBestemmingLocationValid();
        });
        bestemming.controls.afzetPlaats.valueChanges.subscribe(e => {
            this.isBestemmingLocationValid();
        });

        this.puinForm.controls.StartDatumAfvoerPuin.valueChanges.subscribe(e => {
            const today = new Date();
            const value = new Date(e);

            today.setHours(0, 0, 0, 0);
            value.setHours(0, 0, 0, 0);

            if (value < today)
                this.showWarningToastWithoutTimeout(appLabels.RegularisatieGVT);
        });

        const emailElement1 = this.puinForm.get("KlantContactEmail");
        if (emailElement1) {
            emailElement1.valueChanges.debounceTime(1000).subscribe(value => {
                this.klantemailValidationMessage = "";
                if ((emailElement1.touched || emailElement1.dirty) && emailElement1.errors) {
                    if (emailElement1.errors.pattern)
                        this.klantemailValidationMessage = "- Emailadres Aanvrager is niet geldig.";
                }
            });
        }

        const emailElement2 = bestemming.get("email");
        if (emailElement2) {
            emailElement2.valueChanges.debounceTime(1000).subscribe(value => {
                this.bestemailValidationMessage = "";
                if ((emailElement2.touched || emailElement2.dirty) && emailElement2.errors) {
                    if (emailElement2.errors.pattern)
                        this.bestemailValidationMessage = "- Emailadres Eigenaar/Exploitant is niet geldig.";
                }
            });
        }

        const opmElement = this.puinForm.get("KlantOpmerkingen");
        if (opmElement) {
            opmElement.valueChanges.subscribe(value => this.msgOpmerkingen = (750 - String(opmElement.value).length) + " resterend");
        }
    }

    loadContactInfo() {
        this.httpBBR.BestemmingContactInfo().toPromise()
            .then((info: IContactInfo) => {
                if (info != null && info != undefined) {
                    this.puinForm.patchValue({
                        KlantContactAchterNaam: info.klantContactAchterNaam,
                        KlantContactVoorNaam: info.klantContactVoorNaam,
                        KlantContactTelefoon: info.klantContactTelefoon,
                        KlantContactEmail: info.klantContactEmail
                    });
                }
            });
    }

    loadBestemmingInfo() {
        this.httpPuin.getBestemming(this.bestaandeBestemmingId)
            .then((info: IPuinBestInfo) => {
                if (info != null && info != undefined) {
                    const bestemming = this.puinForm.controls.Bestemming as FormGroup;
                    bestemming.patchValue({
                        eigenaar: info.eigenaar,
                        adres1: info.adres1,
                        adres2: info.adres2,
                        postcode: info.postcode,
                        plaats: info.plaats,
                        contactPersoon: info.contactPersoon,
                        telefoon: info.telefoon,
                        email: info.email,
                        afzetAdres1: info.afzetAdres1,
                        afzetAdres2: info.afzetAdres2,
                        afzetPostcode: info.afzetPostcode,
                        afzetPlaats: info.afzetPlaats,
                        brekerCertificaatNummer: info.brekerCertificaatNummer
                    });
                }
            });
    }

    tvNumberChanged(tvData: IPuinIndexTechnischVerslag) {
        if (tvData.index !== 0) {
            return;
        }

        if (this.indieningsTypeId === PuinAanvragenTypes.MobieleBrekerOpDeWerf) {
            this.httpTvService.Detail(tvData.tvId).toPromise()
                .then((data: ITVDetail) => {
                    if (data != null && data != undefined) {
                        const bestemming = this.puinForm.controls.Bestemming as FormGroup;
                        bestemming.patchValue({
                            afzetAdres1: data.titel2,
                            afzetPlaats: data.titel3
                        });
                    }
                });
        }
    }

    verder() {
        if (this.isContinued) {
            this.isContinued = false;
            return;
        }

        if (!this.isKlantSectionValid()) {
            return;
        }

        //this.puinForm.controls.technischVerslagData.setValue(tvData);
        console.log(this.puinForm.value);

        this.isContinued = true;
        setTimeout(() => {
            const bestemming = this.puinForm.controls.Bestemming as FormGroup;
            bestemming.controls.afzetAdres1.updateValueAndValidity({ emitEvent: true });
        }); // Trigger the extra location checks

    }



    queueCountChanged(queueLength: number) {
        this.uploadQueueCount = queueLength;
    }
    uploadFiles() {
        this.uploadStatus = "upload";
    }



    isAfbraakBestemmingVisible() {
        return (this.indieningsTypeId === PuinAanvragenTypes.MobieleBrekerOpDeWerf) ? false: true;
    }
 
    allIsValid(): boolean {
        const bestemming = this.puinForm.controls.Bestemming as FormGroup;

        var bln1 = bestemming.valid
        var bln2 = this.isKlantSectionValid()
        var bln3 = this.isValid(bestemming.controls.brekerCertificaatNummer)
        var bln4 = this.isValid(bestemming.controls.eigenaar)
        var bln5 = this.isValid(bestemming.controls.contactPersoon)
        var bln6 = this.isValid(bestemming.controls.email)
        var bln7 = this.bestemailValidationMessage === ""
        var bln8 = this.isBestemmingLocationValid()
        var bln9 = this.isBestEmailTelValid()
        var bln10 = this.puinForm.controls.lockMultiSave.valid;

        return bestemming.valid
            && this.isKlantSectionValid()
            && this.isValid(bestemming.controls.brekerCertificaatNummer)
            && this.isValid(bestemming.controls.eigenaar)
            && this.isValid(bestemming.controls.contactPersoon)
            && this.isValid(bestemming.controls.email)
            && this.bestemailValidationMessage === ""
            && this.isBestemmingLocationValid()
            && this.isBestEmailTelValid()
            && this.puinForm.controls.lockMultiSave.valid;
    }

    isBestemmingLocationValid(): boolean {
        if (this.indieningsTypeId == PuinAanvragenTypes.MobieleBrekerOpDeWerf) {
            this.clearBestemmingLocationErrors();
            this.bestemmingValidationMessage = "";
            return true;
        }

        const bestemming = this.puinForm.controls.Bestemming as FormGroup;
        if (!this.isNullOrWhitespace(bestemming.controls.afzetAdres1.value)
            && !this.isNullOrWhitespace(bestemming.controls.afzetPostcode.value)
            && !this.isNullOrWhitespace(bestemming.controls.afzetPlaats.value)) {
            this.clearBestemmingLocationErrors();
            this.bestemmingValidationMessage = "";
            return true;
        }

        this.bestemmingValidationMessage = "- Lokatie waar het puin wordt gebroken is nog onvolledig";
        this.setBestemmingLocationErrors();
        return false;
    }

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