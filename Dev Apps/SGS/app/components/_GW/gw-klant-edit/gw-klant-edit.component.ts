import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { GeneralScripts } from "../../scripts/general.scripts";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from "@angular/forms";
import { HttpFileService } from "../../services/http-file.service";
import { HttpKlantService } from "../../services/http-klant.service";
import { BsLocaleService } from "ngx-bootstrap/datepicker";
import { appLabels } from "../../scripts/appLabels";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { AuthenticationService, UserRoles } from "../../services/authentication.service";
import { DatePipe } from "@angular/common";
import { ISgsStatusGridItem, ISgsBeroepsorganisatieListItem, ISgsBrancheListItem, ISgsKlantStatusListItem, ISgsKlantEmailHistory } from "../../scripts/sgsInterfaces.scripts";
import { IKlantPoco, IFile } from "../../scripts/interfaces.scripts";
import { GeopuntScripts } from "../../scripts/geopunt.scripts";
import { DomSanitizer } from "@angular/platform-browser";
import { fileTypes } from "../../services/http-file.service";
import { DATE } from "ngx-bootstrap/chronos/units/constants";
import { DocumentTypes } from "../gw-documents/gw-documents.component";
import { EmailHistoriekTypes } from "../gw-email-historiek-grid/gw-email-historiek-grid.component";

@Component({
    selector: "gw-klant-edit",
    templateUrl: "./gw-klant-edit.component.html",
    styleUrls: ["./gw-klant-edit.component.css"],
    providers: [DatePipe]
})

export class gwKlantEditComponent extends GeneralScripts implements OnInit {
    klantForm: FormGroup;
    state = "";
    pageTitle = "";
    gegevensVanHetTerreinTitle = "";
    isForMijnGegevensAanpassen = false;
    buttonText = "";
    nullItem: null;
    lidnummerBouwunieText = "Lidnummer bij koepel-organisatie";
    hasPendingChanges = false;
    showPasswordErrorMessage = false;

    klantId: number;
    BeroepsorganisatieListItems: ISgsBeroepsorganisatieListItem[];
    BrancheListItems: ISgsBrancheListItem[];
    KlantStatusListItems: ISgsKlantStatusListItem[];
    userFiles: IFile[] = [];

    private uploadedIDs: number[] = [];
    uploadStatus: string = "selection";

    actionSucceeded = false;
    actionSucceededMessage = "";
    msgGebruik: string = "500 resterend";

    // gw-Documents
    gwDocumentType: DocumentTypes = DocumentTypes.Klant;
    canSendNewEmail: boolean = true;
    emailHistoriekType: EmailHistoriekTypes = EmailHistoriekTypes.gwKlantEdit;
    refreshDocumentsNeeded: boolean = false;
    isSaving: number;

    //email details
    klant: IKlantPoco;

    LoginValidationMessage = "";


    constructor(
        private readonly _toastr: ToastrService,
        private readonly fb: FormBuilder,
        private readonly httpFile: HttpFileService,
        private readonly httpKlant: HttpKlantService,
        private readonly sanitizer: DomSanitizer,
        private readonly router: Router,
        private readonly route: ActivatedRoute,
        private readonly datePipe: DatePipe,
        private readonly auth: AuthenticationService,
        private readonly localeService: BsLocaleService) {
        super(_toastr);
    }

    ngOnInit(): void {
        this.formOnInit();
        // Needed configuration for the bsDatepicker to accept dd/MM/yyyy formatting : done
        this.localeService.use("bootstrap-locale-nlbe");
      
    }

    // initial loading
    formOnInit() {
        const snapshot = this.route.snapshot;
        this.klantId = -1;
        if (snapshot.params["id"]) this.klantId = +snapshot.params["id"];
        this.loadEntity();
        this.initialiseForm();
        this.loadDropdowns();
    }

    initialiseForm() {
        this.klantForm = this.fb.group({
            KlantNr: [{ value: "", disabled: true }, [Validators.maxLength(50)]],
            voornaam: ["", [Validators.maxLength(50)]],
            achternaam: ["", Validators.compose([Validators.required, Validators.maxLength(50)])],
            geslacht: [""],
            functie: ["", [Validators.maxLength(50)]],
            organisatie: ["", [Validators.maxLength(50)]],
            btwNummer: ["", [Validators.maxLength(50)]],
            idkaartNummer: ["", [Validators.maxLength(50)]],
            beroepsorganisatieID: [""],
            lidnummerBouwunie: ["", [Validators.maxLength(20)]],
            lidnummerBouwunieok: [""],
            brancheID: [""],
            ebsdDetails: ["", [Validators.maxLength(1000)]],
            lidNummerAannemer: ["", [Validators.min(100001), Validators.max(999999)]],
            usedEmail: [{ value: "", disabled: true }],
            adres1: ["", [Validators.required, Validators.maxLength(100)]],
            adres2: ["", [Validators.maxLength(100)]],
            postcode: ["", [Validators.required, Validators.maxLength(10)]],
            plaats: ["", [Validators.required, Validators.maxLength(50)]],
            land: ["", [Validators.maxLength(50)]],
            factuurAdres1: ["", [Validators.maxLength(100)]],
            factuurAdres2: ["", [Validators.maxLength(100)]],
            factuurPostcode: ["", [Validators.maxLength(10)]],
            factuurPlaats: ["", [Validators.maxLength(50)]],
            factuurLand: ["", [Validators.maxLength(50)]],
            inrichtingStraat: ["", [Validators.maxLength(100)]],
            inrichtingStraat2: ["", [Validators.maxLength(100)]],
            inrichtingPostcode: ["", [Validators.maxLength(10)]],
            inrichtingGemeente: ["", [Validators.maxLength(50)]],
            inrichtingBestemmingstype: ["", [Validators.maxLength(50)]],
            inrichtingKadastraleGegevens: ["", [Validators.maxLength(50)]],
            inrichtingLX: ["", [Validators.min(20000), Validators.max(280000)]],
            inrichtingLY: ["", [Validators.min(150000), Validators.max(250000)]],
            inrichtingDatumMilieuvergunning: [""],
            inrichtingVergunningverlenendeInstantie: ["", [Validators.maxLength(50)]],
            inrichtingDatumBouwvergunning: [""],
            inrichtingHoeveelheidGrond: ["", [Validators.maxLength(50)]],
            telefoon: ["", [Validators.maxLength(50)]],
            fax: ["", [Validators.maxLength(50)]],
            email: ["", [Validators.required, Validators.maxLength(50), Validators.pattern("^([\\w+-.%]+@[\\w-.]+\\.[A-Za-z]{2,4};?)+$")]],
            login: ["", [Validators.required, Validators.maxLength(50), this.invalidLogin]],
            paswoord: ["", [Validators.required, Validators.maxLength(50)]],
            KlantStatusID: [""],
            isGwCustomer: [""],
            isVisibleForCustomers: [""],
            facturatieStartDatum: [""],
            gefactureerd: [""],
            uploadedIDs: []
        });


        this.initialiseValueChangeHandlers();
    }

    initialiseValueChangeHandlers() {
        const ctlLogin = this.klantForm.get("login");
        if (ctlLogin) {
            ctlLogin.valueChanges.debounceTime(700).subscribe(value => {
                this.invalidServerLogin(value, this.klantId);
            });
        }
    }

    loadDropdowns() {
        this.httpKlant.sgsBeroepsorganisatieListItems().toPromise()
            .then((lst: ISgsBeroepsorganisatieListItem[]) => {
                this.BeroepsorganisatieListItems = [...lst];
            });
        this.httpKlant.sgsBrancheListItems().toPromise()
            .then((lst: ISgsBrancheListItem[]) => {
                this.BrancheListItems = [...lst];
            });
        this.httpKlant.sgsKlantStatusListItems().toPromise()
            .then((lst: ISgsKlantStatusListItem[]) => {
                this.KlantStatusListItems = [...lst];
            });
    }

    loadEntity() {
        if (this.klantId === -1) {
            this.klantForm.patchValue({
                KlantNr: this.klantId
            });
            return;
        }

        // Load data to edit
        this.httpKlant.sgsKlantPoco(this.klantId).toPromise()
            .then((klant: IKlantPoco) => {
                if (!klant) {
                    this.showWarningToast("De klant bestaat niet")
                    return;
                };

                this.klant = klant;
                this.klantForm.patchValue({
                    KlantNr: klant.klantID,
                    voornaam: klant.voornaam,
                    achternaam: klant.achternaam,
                    geslacht: klant.geslacht,
                    functie: klant.functie,
                    organisatie: klant.organisatie,
                    btwNummer: klant.btwNummer,
                    idkaartNummer: klant.idkaartNummer,
                    beroepsorganisatieID: klant.beroepsorganisatieID,
                    lidnummerBouwunie: klant.lidnummerBouwunie,
                    lidnummerBouwunieok: klant.lidNummerBouwUnieIsOk,
                    brancheID: klant.brancheID,
                    ebsdDetails: klant.ebsdDetails,
                    lidNummerAannemer: klant.aannemerLidNummer,
                    adres1: klant.adres1,
                    adres2: klant.adres2,
                    postcode: klant.postcode,
                    plaats: klant.plaats,
                    land: klant.land,
                    factuurAdres1: klant.factuurAdres1,
                    factuurAdres2: klant.factuurAdres2,
                    factuurPostcode: klant.factuurPostcode,
                    factuurPlaats: klant.factuurPlaats,
                    factuurLand: klant.factuurLand,
                    inrichtingStraat: klant.inrichtingStraat,
                    inrichtingStraat2: klant.inrichtingStraat2,
                    inrichtingPostcode: klant.inrichtingPostcode,
                    inrichtingGemeente: klant.inrichtingGemeente,
                    inrichtingBestemmingstype: klant.inrichtingBestemmingstype,
                    inrichtingKadastraleGegevens: klant.inrichtingKadastraleGegevens,
                    inrichtingLX: klant.inrichtingLX,
                    inrichtingLY: klant.inrichtingLY,
                    inrichtingDatumMilieuvergunning: this.datePipe.transform(klant.inrichtingDatumMilieuvergunning, "dd/MM/yyyy"),
                    inrichtingVergunningverlenendeInstantie: klant.inrichtingVergunningverlenendeInstantie,
                    inrichtingDatumBouwvergunning: this.datePipe.transform(klant.inrichtingDatumBouwvergunning, "dd/MM/yyyy"),
                    inrichtingHoeveelheidGrond: klant.inrichtingHoeveelheidGrond,
                    telefoon: klant.telefoon,
                    fax: klant.fax,
                    email: klant.email,
                    login: klant.login,
                    paswoord: klant.paswoord,
                    KlantStatusID: klant.klantStatusID,
                    isGwCustomer: klant.isGwCustomer,
                    isVisibleForCustomers: klant.isVisibleForCustomers,
                    facturatieStartDatum: this.datePipe.transform(klant.facturatieStartDatum, "dd/MM/yyyy"),
                    gefactureerd: klant.gefactureerd
                });
                

                // Load the used email adresses in the textbox
              
                this.httpKlant.sgsKlantUsedEmails(this.klantId).toPromise()
                    .then((emails: string[]) => {
                        if (emails != null && emails.length > 0) {
                            var txt = '';
                            emails.forEach(function (mail) {
                                txt += (txt === '') ? mail : '\r\n' + mail;
                            });
                            this.klantForm.patchValue({
                                usedEmail: txt
                            });
                        }
                    });


            });
    }

 



    //showFileWithId(id: number) {
    //    this.httpFile.LoadFileWithoutUserCheck(id).toPromise()
    //        .then((response: any) => {
    //            this.openFile(response);
    //        })
    //        .catch(_ => {
    //            this.showErrorToast("Fout bij het laden van de files");
    //        });
    //}

    // form validation

    invalidLogin(control: AbstractControl) {
        const pattern = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);
        if (pattern.test(control.value)) {
            return { invalidLogin: true }
        }
        else
        {
            return null;
        }
    }


    invalidServerLogin(login: string, klantid: number) {
        if (login === '') {
            this.LoginValidationMessage = "";
            return;
        }

        this.httpKlant.sgsKlantLogin(login).toPromise()
            .then((id: number) => {
                this.LoginValidationMessage = (id > 0 && id !== klantid) ? "Deze loginnaam is reeds in gebruik" : "";
            });
    };



    isKlantFormValid() {
        return (this.LoginValidationMessage === '' && this.klantForm.valid)
    }

    uploadFiles(fileIDs: number[]) {
        this.isSaving = 1;
        if (fileIDs != null) {
            this.httpFile.moveFilesFromTempToFinalLocationForKlant(this.klantId, this.klantId, [...fileIDs]).toPromise().then((docId: any) => {
                //this.ngOnInit();
                this.showSuccesToast("De bestanden werden opgeladen");
                this.isSaving = 0;
                this.refreshDocumentsNeeded = true;
            })
                .catch(error => {
                    this.handleError(error);
                    if (this.uploadedIDs.length > 0) {
                        this.uploadStatus = "clean";
                    }
                    this.isSaving = 0;
                });
        }
    }

    // Posting the form data to the MVC backend
    save() {
        const klantFormValues: IKlantPoco = this.getformValues();
        this.httpKlant.sgsSave(klantFormValues).toPromise()
            .then((docId: any) => {
                this.showSuccesToast("De gegevens werden opgeslagen");
                this.router.navigate(["/gw-klant-grid"]);
            })
            .catch(error => {
                this.handleError(error);
                if (this.uploadedIDs.length > 0) {
                    this.uploadStatus = "clean";
                }
            });


    }

    private getformValues() {
        const klantFormvalues: IKlantPoco = {
            klantID: this.klant.klantID,
            voornaam: this.klantForm.value.voornaam,
            achternaam: this.klantForm.value.achternaam,
            functie: this.klantForm.value.functie,
            organisatie: this.klantForm.value.organisatie,
            adres1: this.klantForm.value.adres1,
            adres2: this.klantForm.value.adres2,
            postcode: this.klantForm.value.postcode,
            plaats: this.klantForm.value.plaats,
            land: this.klantForm.value.land,
            factuurAdres1: this.klantForm.value.factuurAdres1,
            factuurAdres2: this.klantForm.value.factuurAdres2,
            factuurPostcode: this.klantForm.value.factuurPostcode,
            factuurLand: this.klantForm.value.factuurLand,
            factuurPlaats: this.klantForm.value.factuurPlaats,
            telefoon: this.klantForm.value.telefoon,
            fax: this.klantForm.value.fax,
            email: this.klantForm.value.email,
            login: this.klantForm.value.login,
            paswoord: this.klantForm.value.paswoord,
            contractOK: null,
            btwNummer: this.klantForm.value.btwNummer,
            idkaartNummer: this.klantForm.value.idkaartNummer,
            lidnummerBouwunie: this.klantForm.value.lidnummerBouwunie,
            geslacht: this.klantForm.value.geslacht,
            factuurExportDatum: null,
            inschrijvingsDatum: null,
            brancheID: this.klantForm.value.brancheID,
            beroepsorganisatieID: this.klantForm.value.beroepsorganisatieID,
            klantStatusID: this.klantForm.value.KlantStatusID,
            lidNummerBouwUnieIsOk: this.klantForm.value.lidnummerBouwunieok,
            datumActief: null,
            gefactureerd: this.klantForm.value.gefactureerd,
            fk_Klant_Contractor: this.klantForm.value.lidNummerAannemer,
            inrichtingStraat: this.klantForm.value.inrichtingStraat,
            inrichtingStraat2: this.klantForm.value.inrichtingStraat2,
            inrichtingPostcode: this.klantForm.value.inrichtingPostcode,
            inrichtingGemeente: this.klantForm.value.inrichtingGemeente,
            inrichtingBestemmingstype: this.klantForm.value.inrichtingBestemmingstype,
            inrichtingKadastraleGegevens: this.klantForm.value.inrichtingKadastraleGegevens,
            inrichtingLX: this.klantForm.value.inrichtingLX,
            inrichtingLY: this.klantForm.value.inrichtingLY,
            inrichtingDatumMilieuvergunning: this.stringToDate(this.klantForm.value.inrichtingDatumMilieuvergunning),
            inrichtingVergunningverlenendeInstantie: this.klantForm.value.inrichtingVergunningverlenendeInstantie,
            inrichtingDatumBouwvergunning: this.stringToDate(this.klantForm.value.inrichtingDatumBouwvergunning),
            inrichtingHoeveelheidGrond: this.klantForm.value.inrichtingHoeveelheidGrond,
            facturatieStartDatum: this.stringToDate(this.klantForm.value.facturatieStartDatum),
            ebsdDetails: this.klantForm.value.ebsdDetails,
            isGwCustomer: this.klantForm.value.isGwCustomer,
            isVisibleForCustomers: this.klantForm.value.isVisibleForCustomers,
            uploadedIDs: this.uploadedIDs,
        } as IKlantPoco;
        return klantFormvalues;
    }

    // handling to the other component

    sendPaswoordEmail() {
        this.router.navigate(["gw/email", "new", this.emailHistoriekType.toString(), this.klantId, -1, "paswoord"]);
    }

    toGeopunt() {
        const x = this.klantForm.controls.inrichtingLX.value;
        const y = this.klantForm.controls.inrichtingLY.value;
        const street = this.klantForm.controls.inrichtingStraat.value;
        const city = this.klantForm.controls.inrichtingGemeente.value;

        const geopunt = new GeopuntScripts(this.sanitizer);
        const url = geopunt.getGeopuntUrl(x, y, street, city);

        window.open(url);
    }

  
}
