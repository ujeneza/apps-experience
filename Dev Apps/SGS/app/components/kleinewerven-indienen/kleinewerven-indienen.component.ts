import { Component, OnInit } from "@angular/core";
import { GeneralScripts } from "../scripts/general.scripts";
import { IKlantPoco } from "../scripts/interfaces.scripts";
import { appLabels } from "../scripts/appLabels";

import { ToastrService } from "ngx-toastr";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, AbstractControl } from "@angular/forms";
import { GeopuntScripts } from "../scripts/geopunt.scripts";
import { DomSanitizer } from "@angular/platform-browser";
import { BsLocaleService } from "ngx-bootstrap/datepicker";

import { HttpKlantService } from "../services/http-klant.service";
import { HttpKleineWervenService } from "../services/http-kleinewerven.service";

@Component({
    selector: "kleinewerven-indienen",
    templateUrl: "./kleinewerven-indienen.component.html",
    styleUrls: ["./kleinewerven-indienen.component.css"]
})
/** kleinewerven-indienen component*/
export class KleineWervenIndienenComponent extends GeneralScripts implements OnInit {
    appLabels = appLabels;

    // QueryString Parameters
    TypeId: number | null = null;

    KWForm: FormGroup;

    isEigenGrondwerker: boolean = false;
    isEigenTransport: boolean = false;
    isHerContainerBedrijf: boolean = false;
    isBestContainerBedrijf: boolean = false;

    bestBedrijfList: any[];

    gwEmailValidationMessage: string = "";
    tptEmailValidationMessage: string = "";
    invalidDOPLokatie: boolean = false;
    invalidDOPKadaster: boolean = false;
    invalidDOPLambert: boolean = false;
    invalidHerkomstLokatie: boolean = false;
    invalidHerkomstKadaster: boolean = false;
    invalidHerkomstLambert: boolean = false;
    isHerkomstValid: boolean = false;
    isDOPValid: boolean = false;
    isTOPValid: boolean = false;

    constructor(
        private readonly _toastr: ToastrService,
        private readonly httpKlant: HttpKlantService,
        private readonly httpKW: HttpKleineWervenService,
        private readonly router: Router,
        private readonly fb: FormBuilder,
        private readonly route: ActivatedRoute,
        private readonly localeService: BsLocaleService,
        private readonly sanitizer: DomSanitizer) {
        super(_toastr);
    }

    ngOnInit(): void {
        var snapshot = this.route.snapshot;

        if (snapshot.params["TypeId"]) this.TypeId = +snapshot.params["TypeId"];

        this.localeService.use("bootstrap-locale-nlbe");

        this.KWForm = this.fb.group({
            gwCtcEigenGrondwerken: [false],
            gwCtcFirmaNaam: ["", [Validators.required, Validators.maxLength(50)]],
            gwCtcAchterNaam: ["", [Validators.required, Validators.maxLength(50)]],
            gwCtcVoorNaam: ["", [Validators.required, Validators.maxLength(50)]],
            gwCtcTelefoon: ["", [Validators.required, Validators.maxLength(50)]],
            gwCtcEmail: ["", [Validators.required, Validators.pattern("^([\\w+-.%]+@[\\w-.]+\\.[A-Za-z]{2,4};?)+$"), Validators.maxLength(50)]],
            gwCtcStraat1: ["", Validators.maxLength(50)],
            gwCtcStraat2: ["", Validators.maxLength(50)],
            gwCtcPostCode: ["", Validators.maxLength(50)],
            gwCtcGemeente: ["", Validators.maxLength(50)],
            tptCtcEigenTransport: [false],
            tptCtcFirmaNaam: ["", [Validators.required, Validators.maxLength(50)]],
            tptCtcAchterNaam: ["", [Validators.required, Validators.maxLength(50)]],
            tptCtcVoorNaam: ["", [Validators.required, Validators.maxLength(50)]],
            tptCtcTelefoon: ["", [Validators.required, Validators.maxLength(50)]],
            tptCtcEmail: ["", [Validators.required, Validators.pattern("^([\\w+-.%]+@[\\w-.]+\\.[A-Za-z]{2,4};?)+$"), Validators.maxLength(50)]],
            tptCtcStraat1: ["", Validators.maxLength(50)],
            tptCtcStraat2: ["", Validators.maxLength(50)],
            tptCtcPostCode: ["", Validators.maxLength(50)],
            tptCtcGemeente: ["", Validators.maxLength(50)],
            herIsContainerBedrijf: [false],
            herFirmaNaam: ["", Validators.maxLength(50)],
            herIsContainerPark: [false],
            herExplAdres1: ["", Validators.maxLength(100)],
            herExplAdres2: ["", Validators.maxLength(100)],
            herExplPostcode: ["", Validators.maxLength(10)],
            herExplGemeente: ["", Validators.maxLength(50)],
            herKadGemeente: ["", Validators.maxLength(30)],
            herKadAfdNummer: [null],
            herKadSectie: ["", Validators.maxLength(1)],
            herKadNummers: ["", Validators.maxLength(50)],
            herLambertX: [null, [Validators.min(20000), Validators.max(280000)]],
            herLambertY: [null, [Validators.min(150000), Validators.max(250000)]],
            bestIsContainerBedrijf: [false],
            bestFirmaNaam: ["", Validators.maxLength(50)],
            bestIsContainerPark: [false],
            bestExplAdres1: ["", Validators.maxLength(100)],
            bestExplAdres2: ["", Validators.maxLength(100)],
            bestExplPostcode: ["", Validators.maxLength(10)],
            bestExplGemeente: ["", Validators.maxLength(50)],
            bestKadGemeente: ["", Validators.maxLength(30)],
            bestKadAfdNummer: [null],
            bestKadSectie: ["", Validators.maxLength(1)],
            bestKadNummers: ["", Validators.maxLength(50)],
            bestLambertX: ["", [Validators.min(20000), Validators.max(280000)]],
            bestLambertY: ["", [Validators.min(150000), Validators.max(250000)]],
            bestBedrijfId: [null],
            Referentie: ["", [Validators.required, Validators.maxLength(50)]],
            GeplandVolume: ["", [Validators.required, Validators.max(249)]],
            GeplandeStartDatum: ["", Validators.required],
            lockMultiSave: [false, Validators.pattern("false")]
        });

        this.initialiseValueChangeHandlers();

        this.httpKlant.TOPList().toPromise()
            .then((lst: any[]) => {
                if (lst != null && lst != undefined) {
                    this.bestBedrijfList = lst;
                }
            });
    }

    initialiseValueChangeHandlers() {
        const gwEmail = this.KWForm.get("gwCtcEmail");
        if (gwEmail) {
            gwEmail.valueChanges.debounceTime(1000).subscribe(value => {
                this.gwEmailValidationMessage = "";
                if ((gwEmail.touched || gwEmail.dirty) && gwEmail.errors) {
                    if (gwEmail.errors.pattern)
                        this.gwEmailValidationMessage = "- Emailadres Grondwerker is niet geldig.";
                }
            });
        }
        const tptEmail = this.KWForm.get("tptCtcEmail");
        if (tptEmail) {
            tptEmail.valueChanges.debounceTime(1000).subscribe(value => {
                this.tptEmailValidationMessage = "";
                if ((tptEmail.touched || tptEmail.dirty) && tptEmail.errors) {
                    if (tptEmail.errors.pattern)
                        this.tptEmailValidationMessage = "- Emailadres Transporteur is niet geldig.";
                }
            });
        }

        this.KWForm.controls.GeplandeStartDatum.valueChanges.subscribe(e => {
            const today = new Date();
            const value = new Date(e);

            today.setHours(0, 0, 0, 0);
            value.setHours(0, 0, 0, 0);

            if (value < today)
                this.showWarningToastWithoutTimeout(appLabels.RegularisatieGVT);
        });


        // Herkomst Lokatie Fields
        this.KWForm.controls.herExplAdres1.valueChanges.subscribe(e => {
            this.isHerkomstLocationValid();
        });
        this.KWForm.controls.herExplPostcode.valueChanges.subscribe(e => {
            this.isHerkomstLocationValid();
        });
        this.KWForm.controls.herExplGemeente.valueChanges.subscribe(e => {
            this.isHerkomstLocationValid();
        });


        this.KWForm.controls.herKadGemeente.valueChanges.subscribe(e => {
            this.isHerkomstKadasterValid();
        });
        this.KWForm.controls.herKadAfdNummer.valueChanges.subscribe(e => {
            this.isHerkomstKadasterValid();
        });
        this.KWForm.controls.herKadSectie.valueChanges.subscribe(e => {
            this.isHerkomstKadasterValid();
        });
        this.KWForm.controls.herKadNummers.valueChanges.subscribe(e => {
            this.isHerkomstKadasterValid();
        });


        this.KWForm.controls.herLambertX.valueChanges.subscribe(e => {
            this.isHerkomstLambertValid();
        });
        this.KWForm.controls.herLambertY.valueChanges.subscribe(e => {
            this.isHerkomstLambertValid();
        });


        // DOP Lokatie Fields
        this.KWForm.controls.bestExplAdres1.valueChanges.subscribe(e => {
            this.isDOPLocationValid();
        });
        this.KWForm.controls.bestExplPostcode.valueChanges.subscribe(e => {
            this.isDOPLocationValid();
        });
        this.KWForm.controls.bestExplGemeente.valueChanges.subscribe(e => {
            this.isDOPLocationValid();
        });


        this.KWForm.controls.bestKadGemeente.valueChanges.subscribe(e => {
            this.isDOPKadasterValid();
        });
        this.KWForm.controls.bestKadAfdNummer.valueChanges.subscribe(e => {
            this.isDOPKadasterValid();
        });
        this.KWForm.controls.bestKadSectie.valueChanges.subscribe(e => {
            this.isDOPKadasterValid();
        });
        this.KWForm.controls.bestKadNummers.valueChanges.subscribe(e => {
            this.isDOPKadasterValid();
        });


        this.KWForm.controls.bestLambertX.valueChanges.subscribe(e => {
            this.isDOPLambertValid();
        });
        this.KWForm.controls.bestLambertY.valueChanges.subscribe(e => {
            this.isDOPLambertValid();
        });
    }

    chkGwCtcChanged() {
        this.isEigenGrondwerker = this.KWForm.controls.gwCtcEigenGrondwerken.value;
        this.KWForm.patchValue({
            gwCtcFirmaNaam: "",
            gwCtcAchterNaam: "",
            gwCtcVoorNaam: "",
            gwCtcTelefoon: "",
            gwCtcEmail: "",
            gwCtcStraat1: "",
            gwCtcStraat2: "",
            gwCtcPostCode: "",
            gwCtcGemeente: ""
        });
    }

    chkTptCtcChanged() {
        this.isEigenTransport = this.KWForm.controls.tptCtcEigenTransport.value;
        this.KWForm.patchValue({
            tptCtcFirmaNaam: "",
            tptCtcAchterNaam: "",
            tptCtcVoorNaam: "",
            tptCtcTelefoon: "",
            tptCtcEmail: "",
            tptCtcStraat1: "",
            tptCtcStraat2: "",
            tptCtcPostCode: "",
            tptCtcGemeente: ""
        });
    }

    chkHerContainerBedrijfChanged() {
        this.isHerContainerBedrijf = this.KWForm.controls.herIsContainerBedrijf.value;
    }

    chkBestContainerBedrijfChanged() {
        this.isBestContainerBedrijf = this.KWForm.controls.bestIsContainerBedrijf.value;
    }

    toHerGeopunt() {
        const x = this.KWForm.controls.herLambertX.value;
        const y = this.KWForm.controls.herLambertY.value;
        const street = this.KWForm.controls.herExplAdres1.value;
        const city = this.KWForm.controls.herExplGemeente.value;
        this.openGeoPunt(x, y, street, city);
    }

    toBestGeopunt() {
        const x = this.KWForm.controls.bestLambertX.value;
        const y = this.KWForm.controls.bestLambertY.value;
        const street = this.KWForm.controls.bestExplAdres1.value;
        const city = this.KWForm.controls.bestExplGemeente.value;
        this.openGeoPunt(x, y, street, city);
    }

    openGeoPunt(x: string, y: string, street: string, city: string) {
        const geopunt = new GeopuntScripts(this.sanitizer);
        const url = geopunt.getGeopuntUrl(x, y, street, city);
        window.open(url);
    }

    ddlBestBedrijfChanged() {
        this.isTOPLocationValid();

        this.httpKlant.PocoEntity(this.KWForm.controls.bestBedrijfId.value).toPromise()
            .then((poco: IKlantPoco) => {
                if (poco != null) {
                    this.KWForm.patchValue({
                        bestExplAdres1: poco.adres1,
                        bestExplAdres2: poco.adres2,
                        bestExplPostcode: poco.postcode,
                        bestExplGemeente: poco.plaats
                    });
                }
            });
    }

    isGrondwerkerValid(): boolean {
        if (this.isEigenGrondwerker) return true;

        return this.KWForm.controls.gwCtcFirmaNaam.valid
            && this.KWForm.controls.gwCtcAchterNaam.valid
            && this.KWForm.controls.gwCtcVoorNaam.valid
            && this.KWForm.controls.gwCtcTelefoon.valid
            && this.KWForm.controls.gwCtcEmail.valid
    }

    isTransporteurValid(): boolean {
        if (this.isEigenTransport) return true;

        return this.KWForm.controls.tptCtcFirmaNaam.valid
            && this.KWForm.controls.tptCtcAchterNaam.valid
            && this.KWForm.controls.tptCtcVoorNaam.valid
            && this.KWForm.controls.tptCtcTelefoon.valid
            && this.KWForm.controls.tptCtcEmail.valid
    }

    isHerkomstLocationValid(): boolean {
        var Adres = this.KWForm.controls.herExplAdres1;
        var PostCode = this.KWForm.controls.herExplPostcode;
        var Gemeente = this.KWForm.controls.herExplGemeente;

        this.isHerkomstValid = false;
        if (!this.isNullOrWhitespace(Adres.value) && !this.isNullOrWhitespace(PostCode.value) && !this.isNullOrWhitespace(Gemeente.value)        ) {
            this.isHerkomstValid = true;
        //}

        //if ((!this.isNullOrWhitespace(Adres.value) && !this.isNullOrWhitespace(PostCode.value) && !this.isNullOrWhitespace(Gemeente.value)) ||
        //    (this.isNullOrWhitespace(Adres.value) && this.isNullOrWhitespace(PostCode.value) && this.isNullOrWhitespace(Gemeente.value))
        //) {
            Adres.setErrors(null);
            PostCode.setErrors(null);
            Gemeente.setErrors(null);
            Adres.updateValueAndValidity({ emitEvent: false });
            PostCode.updateValueAndValidity({ emitEvent: false });
            Gemeente.updateValueAndValidity({ emitEvent: false });
            this.invalidHerkomstLokatie = false;
            return true;
        }

        this.setMandatoryError(Adres);
        this.setMandatoryError(PostCode);
        this.setMandatoryError(Gemeente);

        this.invalidHerkomstLokatie = true;

        return false;
    }

    isTOPLocationValid(): boolean {
        var v = this.KWForm.controls.bestBedrijfId.value;
        this.isTOPValid = !(v == null || v == "0");
        return this.isTOPValid;
    }

    isDOPLocationValid(): boolean {
        var Adres = this.KWForm.controls.bestExplAdres1;
        var PostCode = this.KWForm.controls.bestExplPostcode;
        var Gemeente = this.KWForm.controls.bestExplGemeente;

        this.isDOPValid = false;
        if (!this.isNullOrWhitespace(Adres.value) && !this.isNullOrWhitespace(PostCode.value) && !this.isNullOrWhitespace(Gemeente.value)) {
            this.isDOPValid = true;
        //}

        //if ((!this.isNullOrWhitespace(Adres.value) && !this.isNullOrWhitespace(PostCode.value) && !this.isNullOrWhitespace(Gemeente.value)) ||
        //    (this.isNullOrWhitespace(Adres.value) && this.isNullOrWhitespace(PostCode.value) && this.isNullOrWhitespace(Gemeente.value))
        //) {
            Adres.setErrors(null);
            PostCode.setErrors(null);
            Gemeente.setErrors(null);
            Adres.updateValueAndValidity({ emitEvent: false });
            PostCode.updateValueAndValidity({ emitEvent: false });
            Gemeente.updateValueAndValidity({ emitEvent: false });
            this.invalidDOPLokatie = false;
            return true;
        }

        this.setMandatoryError(Adres);
        this.setMandatoryError(PostCode);
        this.setMandatoryError(Gemeente);

        this.invalidDOPLokatie = true;

        return false;
    }

    isHerkomstKadasterValid(): boolean {
        var KadGemeente = this.KWForm.controls.herKadGemeente;
        var KadSectie = this.KWForm.controls.herKadSectie;
        var KadNummers = this.KWForm.controls.herKadNummers;
        var KadAfdNummer = this.KWForm.controls.herKadAfdNummer;

        if ((!this.isNullOrWhitespace(KadGemeente.value) && !this.isNullOrWhitespace(KadSectie.value) && !this.isNullOrWhitespace(KadNummers.value) && !this.isNullOrWhitespace(KadAfdNummer.value)) ||
            (this.isNullOrWhitespace(KadGemeente.value) && this.isNullOrWhitespace(KadSectie.value) && this.isNullOrWhitespace(KadNummers.value) && this.isNullOrWhitespace(KadAfdNummer.value))
        ) {
            KadGemeente.setErrors(null);
            KadSectie.setErrors(null);
            KadNummers.setErrors(null);
            KadAfdNummer.setErrors(null);
            KadGemeente.updateValueAndValidity({ emitEvent: false });
            KadSectie.updateValueAndValidity({ emitEvent: false });
            KadNummers.updateValueAndValidity({ emitEvent: false });
            KadAfdNummer.updateValueAndValidity({ emitEvent: false });
            this.invalidHerkomstKadaster = false;
            return true;
        }

        this.setMandatoryError(KadGemeente);
        this.setMandatoryError(KadSectie);
        this.setMandatoryError(KadNummers);
        this.setMandatoryError(KadAfdNummer);

        if (!this.isNullOrWhitespace(KadGemeente.value) || !this.isNullOrWhitespace(KadSectie.value) || !this.isNullOrWhitespace(KadNummers.value) || !this.isNullOrWhitespace(KadAfdNummer.value)) {
            this.invalidHerkomstKadaster = true;
        }

        return false;
    }


    isDOPKadasterValid(): boolean {
        var KadGemeente = this.KWForm.controls.bestKadGemeente;
        var KadSectie = this.KWForm.controls.bestKadSectie;
        var KadNummers = this.KWForm.controls.bestKadNummers;
        var KadAfdNummer = this.KWForm.controls.bestKadAfdNummer;

        if ((!this.isNullOrWhitespace(KadGemeente.value) && !this.isNullOrWhitespace(KadSectie.value) && !this.isNullOrWhitespace(KadNummers.value) && !this.isNullOrWhitespace(KadAfdNummer.value)) ||
            (this.isNullOrWhitespace(KadGemeente.value) && this.isNullOrWhitespace(KadSectie.value) && this.isNullOrWhitespace(KadNummers.value) && this.isNullOrWhitespace(KadAfdNummer.value))
        ) {
            KadGemeente.setErrors(null);
            KadSectie.setErrors(null);
            KadNummers.setErrors(null);
            KadAfdNummer.setErrors(null);
            KadGemeente.updateValueAndValidity({ emitEvent: false });
            KadSectie.updateValueAndValidity({ emitEvent: false });
            KadNummers.updateValueAndValidity({ emitEvent: false });
            KadAfdNummer.updateValueAndValidity({ emitEvent: false });
            this.invalidDOPKadaster = false;
            return true;
        }

        this.setMandatoryError(KadGemeente);
        this.setMandatoryError(KadSectie);
        this.setMandatoryError(KadNummers);
        this.setMandatoryError(KadAfdNummer);

        if (!this.isNullOrWhitespace(KadGemeente.value) || !this.isNullOrWhitespace(KadSectie.value) || !this.isNullOrWhitespace(KadNummers.value) || !this.isNullOrWhitespace(KadAfdNummer.value)) {
            this.invalidDOPKadaster = true;
        }

        return false;
    }

    isHerkomstLambertValid(): boolean {
        var LambertX = this.KWForm.controls.herLambertX;
        var LambertY = this.KWForm.controls.herLambertY;

        if (!this.isNullOrWhitespace(LambertX.value) && !this.isNullOrWhitespace(LambertY.value) ||
            this.isNullOrWhitespace(LambertX.value) && this.isNullOrWhitespace(LambertY.value)) {
            LambertX.setErrors(null);
            LambertY.setErrors(null);
            LambertX.updateValueAndValidity({ emitEvent: false });
            LambertY.updateValueAndValidity({ emitEvent: false });
            this.invalidHerkomstLambert = false;
            return true;
        }

        this.setMandatoryError(LambertX);
        this.setMandatoryError(LambertY);

        if (!this.isNullOrWhitespace(LambertX.value) || !this.isNullOrWhitespace(LambertY.value)) {
                this.invalidHerkomstLambert = true;
        }

        return false;
    }

    isDOPLambertValid(): boolean {
        var LambertX = this.KWForm.controls.bestLambertX;
        var LambertY = this.KWForm.controls.bestLambertY;

        if (!this.isNullOrWhitespace(LambertX.value) && !this.isNullOrWhitespace(LambertY.value) ||
            this.isNullOrWhitespace(LambertX.value) && this.isNullOrWhitespace(LambertY.value)) {
            LambertX.setErrors(null);
            LambertY.setErrors(null);
            LambertX.updateValueAndValidity({ emitEvent: false });
            LambertY.updateValueAndValidity({ emitEvent: false });
            this.invalidDOPLambert = false;
            return true;
        }

        this.setMandatoryError(LambertX);
        this.setMandatoryError(LambertY);

        if (!this.isNullOrWhitespace(LambertX.value) || !this.isNullOrWhitespace(LambertY.value)) {
            this.invalidDOPLambert = true;
        }

        return false;
    }

    private setMandatoryError(control: AbstractControl): void {
        if (control == undefined) return;
        control.setErrors({ required: true, message: "Verplicht veld" });
    }

    isReferentieValid(): boolean {
        return this.KWForm.controls.GeplandeStartDatum.valid
            && this.KWForm.controls.GeplandVolume.valid
            && this.KWForm.controls.Referentie.valid;
    }

    formIsValid() {
        return this.isGrondwerkerValid()
            && this.isTransporteurValid()
            && this.isHerkomstLocationValid()
            && (this.TypeId === 2 ? this.isDOPLocationValid() : this.isTOPLocationValid())
            && this.isReferentieValid()
            && this.KWForm.controls.lockMultiSave.valid;
    }

    send() {
        this.KWForm.controls.lockMultiSave.setValue(true); // this will prevent multiple save clicks

        this.httpKW.Insert(this.KWForm.value).toPromise()
            .then((kwId: number) => {
                this.showSuccesToast("De gegevens werden opgeslagen als een nieuwe Kleine Werven Melding met identificatie nummer " + kwId);
                this.router.navigate(["/kleinewerven-status"]);
            })
            .catch(error => {
                this.handleError(error);
                this.KWForm.controls.lockMultiSave.setValue(false); 
            });
    }
}