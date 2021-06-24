import { Component, Inject, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from "@angular/forms";
import { GeneralScripts } from "../scripts/general.scripts";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute } from "@angular/router";
import { BsLocaleService } from "ngx-bootstrap/datepicker";
import { ValidateEmailOrEmpty } from "../scripts/validator.scripts";
import { appLabels } from "../scripts/appLabels";
import { UserTypes, AuthenticationService } from "../services/authentication.service";
import { DomSanitizer } from "@angular/platform-browser";
import { GeopuntScripts } from "../scripts/geopunt.scripts";

export const RoutePath = { // TODO get this in the route and not a hardcoded string in the route
    InschrijvenAlsGebruiker: "inschrijven-als-gebruiker",
    InschrijvenAlsTopCgr: "inschrijven-als-top-cgr",
    InschrijvenAlsDop: "inschrijven-als-dop",
    MijnGegevensAanpassen: "mijn-gegevens-aanpassen"
};

@Component({
    selector: "inschrijven-als-gebruiker",
    templateUrl: "./inschrijven-als-gebruiker.component.html",
    styleUrls: ["./inschrijven-als-gebruiker.component.css"]
})
export class InschrijvenAlsGebruikerComponent extends GeneralScripts implements OnInit {

    state = "";
    pageTitle = "";
    gegevensVanHetTerreinTitle = "";
    userType = UserTypes.NotLoggedIn;
    userTypes = UserTypes;
    isForMijnGegevensAanpassen = false;
    buttonText = "";
    lidnummerBouwunieText = "Lidnummer bij koepel-organisatie";
    hasPendingChanges = false;
    showPasswordErrorMessage = false;

    actionSucceeded = false;
    actionSucceededMessage = "";

    inschrijvenForm: FormGroup;
    loginSpecialCharactersMessage: string = "";
    pwd1SpecialCharactersMessage: string = "";
    pwd2SpecialCharactersMessage: string = "";
    loadedLogin: string = "";

    constructor(private readonly http: HttpClient,
        @Inject("BASE_URL") private readonly baseUrl: string,
        private readonly toastr: ToastrService,
        private readonly fb: FormBuilder,
        private readonly route: ActivatedRoute,
        private readonly localeService: BsLocaleService,
        private readonly authenticationService: AuthenticationService,
        private readonly sanitizer: DomSanitizer) {
        super(toastr);

        this.hasPendingChanges = false;
        this.isForMijnGegevensAanpassen = false;

        this.state = this.route.snapshot.data["state"];
    }

    ngOnInit() {
        this.inschrijvenForm = this.fb.group({
            klantID: ["0"],
            voornaam: [""],
            achternaam: ["", Validators.required],
            functie: [""],
            geslacht: [""],
            organisatie: [""],
            brancheID: [1],
            btwNummer: [""],
            idKaartNummer: [""],
            beroepsorganisatieID: [],
            lidnummerBouwunie: [""],
            adres1: ["", Validators.required],
            adres2: [""],
            postcode: ["", Validators.required],
            plaats: ["", Validators.required],
            land: [""],
            telefoon: [""],
            fax: [""],
            email: ["", Validators.required],
            factuurAdres1: [""],
            factuurAdres2: [""],
            factuurPostcode: [""],
            factuurPlaats: [""],
            factuurLand: [""],
            inrichtingStraat: [""],
            inrichtingStraat2: [""],
            inrichtingPostcode: [""],
            inrichtingGemeente: [""],
            inrichtingBestemmingstype: [""],
            inrichtingKadastraleGegevens: [""],
            inrichtingLX: ["", [Validators.min(20000), Validators.max(280000)]],
            inrichtingLY: ["", [Validators.min(150000), Validators.max(250000)]],
            inrichtingDatumMilieuvergunning: [],
            inrichtingVergunningverlenendeInstantie: [""],
            inrichtingDatumBouwvergunning: [],
            inrichtingHoeveelheidGrond: [],
            login: ["", [Validators.minLength(3), Validators.required]],
            paswoord: ["", [Validators.maxLength(50)]],
            herhaalPaswoord: ["", [Validators.maxLength(50)]],
            agrees: [false, Validators.pattern("true")],
            aannemerLidNummer: [""],
            aannemerEmail: ["", ValidateEmailOrEmpty()]
        });

        if (this.state === RoutePath.InschrijvenAlsGebruiker) {
            this.pageTitle = "Aanvraag tot lidmaatschap, gebruiker";
            this.inschrijvenForm.controls.brancheID.setValue(1);
            this.userType = UserTypes.User;
            this.buttonText = appLabels.Send;
        } else if (this.state === RoutePath.InschrijvenAlsTopCgr) {
            this.pageTitle = "Aanvraag tot lidmaatschap, TOP/CGR";
            this.gegevensVanHetTerreinTitle = "Gegevens van het terrein waar de grond wordt opgeslagen";
            this.inschrijvenForm.controls.brancheID.setValue(29);
            this.userType = UserTypes.Top;
            this.buttonText = appLabels.Send;
        } else if (this.state === RoutePath.InschrijvenAlsDop) {
            this.pageTitle = "Aanvraag tot lidmaatschap, DOP";
            this.gegevensVanHetTerreinTitle = "Gegevens van het terrein";
            this.userType = UserTypes.Dop;
            this.buttonText = appLabels.Send;
        } else if (this.state === RoutePath.MijnGegevensAanpassen) {
            this.pageTitle = "Mijn gegevens aanpassen";
            this.gegevensVanHetTerreinTitle = "Gegevens van het terrein";
            this.isForMijnGegevensAanpassen = true;
            this.userType = this.authenticationService.userType;
            this.buttonText = appLabels.Update;
            this.inschrijvenForm.controls.btwNummer.disable();
            this.inschrijvenForm.controls.paswoord.setValidators(Validators.compose([Validators.minLength(6), Validators.required]));
            this.inschrijvenForm.controls.paswoord.valueChanges.subscribe(() => this.checkPasswords());
            this.inschrijvenForm.controls.herhaalPaswoord.setValidators(Validators.compose([Validators.minLength(6), Validators.required]));
            this.inschrijvenForm.controls.herhaalPaswoord.valueChanges.subscribe(() => this.checkPasswords());
            this.checkChangesAndLoadExistingData();
        }

        this.localeService.use("bootstrap-locale-nlbe");

        //var date = new Date('2017-12-01T00:00:00');
        const date = new Date();
        date.setHours(12, 0, 0, 0);
        this.inschrijvenForm.controls.inrichtingDatumMilieuvergunning.setValue(date);
        this.inschrijvenForm.controls.inrichtingDatumBouwvergunning.setValue(date);

        this.initialiseValueChangeHandlers();
    }

    initialiseValueChangeHandlers() {
        const ctlLogin = this.inschrijvenForm.get("login");
        if (ctlLogin) {
            ctlLogin.valueChanges.debounceTime(700).subscribe(value => {
                this.loginSpecialCharactersMessage = (this.invalidLogin(value) == true) ? "Login mag geen speciale tekens bevatten" : "";
            });
        }
        const ctlPwd1 = this.inschrijvenForm.get("paswoord");
        if (ctlPwd1) {
            ctlPwd1.valueChanges.debounceTime(700).subscribe(value => {
                this.pwd1SpecialCharactersMessage = (this.invalidLogin(value) == true) ? "Paswoord mag geen speciale tekens bevatten" : "";
            });
        }
        const ctlPwd2 = this.inschrijvenForm.get("herhaalPaswoord");
        if (ctlPwd2) {
            ctlPwd2.valueChanges.debounceTime(700).subscribe(value => {
                this.pwd2SpecialCharactersMessage = (this.invalidLogin(value) == true) ? "Herhaal Paswoord mag geen speciale tekens bevatten" : "";
            });
        }
    }
    
    invalidLogin(entry: string): boolean {
        const pattern = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);
        if (pattern.test(entry)) {
            return true;
        }
        else {
            return false;
        }
    }

    isInschrijvenFormValid() {
        var bln01 = this.inschrijvenForm.controls.achternaam.valid;
        var bln02 = this.inschrijvenForm.controls.adres1.valid;
        var bln03 = this.inschrijvenForm.controls.postcode.valid;
        var bln04 = this.inschrijvenForm.controls.plaats.valid;
        var bln05 = this.inschrijvenForm.controls.email.valid;
        var bln06 = this.inschrijvenForm.controls.inrichtingLX.valid;
        var bln07 = this.inschrijvenForm.controls.inrichtingLY.valid;
        var bln08 = this.inschrijvenForm.controls.login.valid;
        var bln09 = this.inschrijvenForm.controls.paswoord.valid;
        var bln10 = this.inschrijvenForm.controls.herhaalPaswoord.valid;
        var bln11 = this.inschrijvenForm.controls.agrees.valid;
        var bln12 = this.inschrijvenForm.controls.aannemerEmail.valid;

        return (this.loginSpecialCharactersMessage === '' && this.pwd1SpecialCharactersMessage === '' && this.pwd2SpecialCharactersMessage === '' && this.inschrijvenForm.valid)
    }

    setTestData() {
        this.inschrijvenForm.controls.achternaam.setValue("achternaam");
        this.inschrijvenForm.controls.adres1.setValue("adres1");
        this.inschrijvenForm.controls.postcode.setValue("postcode");
        this.inschrijvenForm.controls.plaats.setValue("plaats");
        this.inschrijvenForm.controls.email.setValue("email@email");
        this.inschrijvenForm.controls.login.setValue("wantedlogin");
    }

    checkChangesAndLoadExistingData() {
        const hasPendingChanges = this.http.get(this.baseUrl + "api/Inschrijvingen/CustomerHasUnapprovedWantedChanges").toPromise();

        hasPendingChanges
            .then((hasChanges: boolean) => {
                if (hasChanges) {
                    this.hasPendingChanges = true;
                    return;
                }
                else
                    this.loadExistingData();
            })
            .catch(error => {
                this.handleError(error);
            });
    }

    loadExistingData() {
        this.http.get(this.baseUrl + "api/Inschrijvingen/GetUserDataForUpdate").toPromise()
            .then(data => {
                this.inschrijvenForm.patchValue(data);
                this.inschrijvenForm.controls.herhaalPaswoord.setValue(this.inschrijvenForm.controls.paswoord.value);
                this.loadedLogin = this.inschrijvenForm.controls.login.value;
            })
            .catch(error => {
                this.handleError(error);
            });
    }

    checkPasswords() {
        if (this.inschrijvenForm.controls.paswoord.value !== this.inschrijvenForm.controls.herhaalPaswoord.value) {
            this.inschrijvenForm.controls.paswoord.setErrors({ NoMatch: true, message: "Paswoord komt niet overeen met herhaal paswoord" });
            this.inschrijvenForm.controls.herhaalPaswoord.setErrors({ NoMatch: true, message: "Herhaal paswoord komt niet overeen met paswoord" });
            this.showPasswordErrorMessage = true;
            return;
        }
        this.showPasswordErrorMessage = false;
        this.inschrijvenForm.controls.paswoord.setErrors(null);
        this.inschrijvenForm.controls.herhaalPaswoord.setErrors(null);
        this.inschrijvenForm.controls.paswoord.updateValueAndValidity({ emitEvent: false });
        this.inschrijvenForm.controls.herhaalPaswoord.updateValueAndValidity({ emitEvent: false });
    }

    get klantIDControl() {
        return this.inschrijvenForm.get("klantID");
    }


    onBeroepsorganisatieChange(value: number) {
        if (value === 3) {
            this.inschrijvenForm.controls.lidnummerBouwunie.setValue("");
            this.inschrijvenForm.controls.lidnummerBouwunie.disable();
            this.inschrijvenForm.controls.lidnummerBouwunie.clearValidators();
            this.lidnummerBouwunieText = "Lidnummer bij koepel-organisatie";
        } else {
            this.inschrijvenForm.controls.lidnummerBouwunie.enable();
            this.inschrijvenForm.controls.lidnummerBouwunie.setValidators(Validators.required);
            this.lidnummerBouwunieText = "* Lidnummer bij koepel-organisatie";
        }
        this.inschrijvenForm.controls.lidnummerBouwunie.updateValueAndValidity();
    }

    loginOnBlur() {
        if (this.loadedLogin != "" && this.inschrijvenForm.controls.login.value == this.loadedLogin) {
            return;
        }

        const headers = new HttpHeaders().set("content-type", "application/json");
        const body = {
            isForMijnGegevensAanpassen: this.isForMijnGegevensAanpassen,
            login: this.inschrijvenForm.controls.login.value
        };

        this.http.post(this.baseUrl + "api/Inschrijvingen/IsLoginAvailable", body, { headers }).toPromise()
            .then(loginIsAvailable => {
                if (!loginIsAvailable) { this.showWarningToast("The wanted username is already in use"); }
            })
            .catch(error => {
                this.handleError(error);
            });
    }

    existingRegistrationOnBlur() {
        const aannemerLidNummer = this.inschrijvenForm.controls.aannemerLidNummer;
        const aannemerEmail = this.inschrijvenForm.controls.aannemerEmail;

        if (this.isNullOrWhitespace(aannemerLidNummer.value) && this.isNullOrWhitespace(aannemerEmail.value)) {
            aannemerLidNummer.setErrors(null);
            aannemerEmail.setErrors(null);
            return;
        }

        if (this.isNullOrWhitespace(aannemerLidNummer.value)) {
            aannemerLidNummer.setErrors({ 'mag niet leeg zijn': true });
            return;
        }
        if (this.isNullOrWhitespace(aannemerEmail.value)) {
            aannemerEmail.setErrors({ 'mag niet leeg zijn': true });
            return;
        }

        if (!aannemerEmail.valid) {
            return;
        }

        // Check in DB
        const headers = new HttpHeaders().set("content-type", "application/json");
        const body = {
            aannemerLidNummer: aannemerLidNummer.value,
            aannemerEmail: aannemerEmail.value
        };

        this.http.post(this.baseUrl + "api/Inschrijvingen/IsExistingContractorValid", body, { headers }).toPromise()
            .then(existingContractorValid => {
                if (existingContractorValid) {
                    aannemerLidNummer.setErrors(null);
                    aannemerEmail.setErrors(null);
                } else {
                    aannemerLidNummer.setErrors({ 'verkeerd': true });
                    aannemerEmail.setErrors({ 'verkeerd': true });
                    this.showWarningToast("Ongeldige combinatie van lidnummer en email voor reeds ingeschreven aannemer");
                }
            })
            .catch(error => {
                aannemerLidNummer.setErrors({ 'verkeerd': true });
                aannemerEmail.setErrors({ 'verkeerd': true });
                this.handleError(error);
            });
    }

    toGeopunt() {
        const x = this.inschrijvenForm.controls.inrichtingLX.value;
        const y = this.inschrijvenForm.controls.inrichtingLY.value;
        const street = this.inschrijvenForm.controls.inrichtingStraat.value;
        const city = this.inschrijvenForm.controls.inrichtingGemeente.value;

        const geopunt = new GeopuntScripts(this.sanitizer);
        const url = geopunt.getGeopuntUrl(x, y, street, city);

        window.open(url);
    }

    send() {
        this.inschrijvenForm.controls.agrees.setValue(false); // to disable the button, this will prevent multiple clicks
        let url: string;
        if (this.isForMijnGegevensAanpassen) {
            url = this.baseUrl + "api/Inschrijvingen/SaveCustomerWantedChanges";
            this.inschrijvenForm.controls.btwNummer.enable();
        }
        else
        {
            url = this.baseUrl + "api/Inschrijvingen/InsertNewCustomer";
        }

        const headers = new HttpHeaders().set("content-type", "application/json");
        const body = this.inschrijvenForm.value;

        this.http.post(url, body, { headers }).toPromise()
            .then(() => {
                this.actionSucceededMessage = this.getSucceedMessage();
                this.actionSucceeded = true;
                this.showSuccesToast(this.getSucceedToastMessage());
            })
            .catch(error => {
                this.handleError(error, this.getErrorToastMessage() + ":");
            });
    }

    private getSucceedMessage(): string {
        if (this.isForMijnGegevensAanpassen)
            return this.getSucceededMessageDataChanged();

        if (this.inschrijvenForm.controls.brancheID.value === 23) // Eenmalig gebruiker
            return this.getSucceededMessageOneTimeUser();

        return this.getSucceededMessageUser();
    }
    private getSucceededMessageOneTimeUser(): string {
        return "Er wordt u een email toegezonden met daarin uw gebruikersnaam en paswoord.\n" +
            "Met uw gebruikersnaam en paswoord kunt u van onze diensten gebruik maken\n" +
            "alsook de stand van zaken van uw lopende projecten opvragen.\n" +
            "\n" +
            "U kunt ons uiteraard steeds contacteren voor meer informatie.\n" +
            "\n" +
            "Met vriendelijke groeten,\n" +
            appLabels.ManagerName +
            "\n" +
            appLabels.ManagerTitle +
            "\n" +
            appLabels.CompanyName;

    }
    private getSucceededMessageUser(): string {
        return "Er wordt u per e-mail een contract toegezonden.\n" +
            "Zodra Grondwijzer vzw uw ondertekend contract ontvangen heeft (per post, fax of e-mail), wordt u een paswoord per e-mail overgemaakt.\n" +
            "Met uw gebruikersnaam en paswoord kunt u van onze diensten gebruik maken alsook de stand van zaken van uw lopende projecten opvragen.\n" +
            "\n" +
            "U kunt ons uiteraard steeds contacteren voor meer informatie.\n" +
            "\n" +
            "Met vriendelijke groeten,\n" +
            appLabels.ManagerName +
            "\n" +
            appLabels.ManagerTitle +
            "\n" +
            appLabels.CompanyName;

    }
    private getSucceededMessageDataChanged(): string {
        return "Uw wijzigingen zijn opgeslagen, maar worden pas actief wanneer deze zijn goedgekeurd door Grondwijzer.\n" +
            "U ontvangt later een e-mail of de wijzigingen al dan niet zijn goedgekeurd.\n" +
            "\n" +
            "Met vriendelijke groeten,\n" +
            appLabels.ManagerName +
            "\n" +
            appLabels.ManagerTitle +
            "\n" +
            appLabels.CompanyName;
    }

    private getSucceedToastMessage(): string {
        if (this.isForMijnGegevensAanpassen)
            return "De aanvraag tot wijziging van uw gegevens is ingediend";

        return "De gegevens zijn opgeslagen";
    }

    private getErrorToastMessage(): string {
        if (this.isForMijnGegevensAanpassen)
            return "Aanpassen mislukt";

        return "Opslaan mislukt";
    }
}