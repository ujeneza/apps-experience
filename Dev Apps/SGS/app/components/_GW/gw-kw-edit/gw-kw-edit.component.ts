import { Component, OnInit, ViewChild } from "@angular/core";
import { GeneralScripts } from "../../scripts/general.scripts";
import { IKWDetail } from "../../scripts/interfaces.scripts";
import { appLabels } from "../../scripts/appLabels";

import { ToastrService } from "ngx-toastr";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { GeopuntScripts } from "../../scripts/geopunt.scripts";
import { DomSanitizer } from "@angular/platform-browser";
import { BsLocaleService } from "ngx-bootstrap/datepicker";

import { HttpKleineWervenService } from "../../services/http-kleinewerven.service";


import { HttpBBRService } from "../../services/http-bbr.service";
import { fileTypes, HttpFileService } from "../../services/http-file.service";
import { FileUploaderComponent } from "../../file-uploader/file-uploader.component";
import { Location, DatePipe } from "@angular/common";
import { DocumentTypes } from "../gw-documents/gw-documents.component";
import { EmailHistoriekTypes } from "../gw-email-historiek-grid/gw-email-historiek-grid.component";





@Component({
    selector: "gw-kw-edit",
    templateUrl: "./gw-kw-edit.component.html",
    styleUrls: ["./gw-kw-edit.component.css"],
    providers: [DatePipe]
})
/** kleinewerven-indienen component*/
export class gwKwEditComponent extends GeneralScripts implements OnInit {

    @ViewChild("fileUploader") fileUploader: FileUploaderComponent;

    appLabels = appLabels;
    kw: IKWDetail;
    kwID: number = 0;
    bbrId:number = 0;
    grondtransportmeldingIsVisible: boolean = false;
    kadastraleGegevensVisible: boolean = false;
    lambertCoordinatenVisible: boolean = false;

    // validation 
    invalidHerkomstLambert: boolean = false;
    invalidDOPLambert: boolean = false;
    invalidHerkomstKadaster: boolean = false;
    invalidDOPKadaster: boolean = false;

    isHerContainerBedrijf: boolean = false;
    isBestContainerBedrijf: boolean = false;
    invalidHerkomstLokatie: boolean = false;
    isHerkomstValid: boolean = false;
    isDOPValid: boolean = false;
    invalidDOPLokatie: boolean = false;

    // upload documents
    private uploadedIDs: number[] = [];
    uploadStatus: string = "selection";
    uploadQueueCount: number = 0;
    existingFiles: any = [];

    // gw-Documents
    gwDocumentType: DocumentTypes = DocumentTypes.KleineWerken;
    canSendNewEmail: boolean = true;
    emailHistoriekType: EmailHistoriekTypes = EmailHistoriekTypes.gwKwEdit;

    terugVisible = true;
    waitingMessageVisible = false;

    kwForm: FormGroup;
    volForm: FormGroup;

    deelvolumes: any[];



    constructor(private readonly bbrRepositoryService: HttpBBRService,
        private readonly fileRepositoryService: HttpFileService,
        private readonly httpKW: HttpKleineWervenService, 
        private readonly sanitizer: DomSanitizer,
        private readonly toastrr: ToastrService,
        private readonly fb: FormBuilder,
        private readonly localeService: BsLocaleService,
        private readonly route: ActivatedRoute,
        private readonly location: Location,
        private readonly datePipe: DatePipe,
        private readonly router: Router) {
        super(toastrr);
    }

    ngOnInit(): void {
        this.localeService.use("bootstrap-locale-nlbe");

        if (this.route.snapshot.params["id"]) {
            this.kwID = this.route.snapshot.params["id"];
            this.loadData(this.route.snapshot.params["id"]);

        }

        
        
        this.initializeForm();
        this.errorValidationhandler();


    }

    initializeForm() {
        this.kwForm = this.fb.group({
            kleineWervenMeldingID: [""],
            isEigenGrondwerker: [""],
            kleineWervenGrondwerkerPartijID: [""],
            isEigenTransporteur: [""],
            kleineWervenTranporteurPartijID: [""],
            kleineWervenHerkomstLokatieID: [""],
            kleineWervenBestemmingLokatieID: [""],
            kleineWervenTopLokatieID: [""],
            klantID: [""],
            klantReferentie: [""],
            geplandVolume: [""],
            geplandeStartDatum: [""],
            werkelijkVolume: ["", [Validators.required]],
            werkelijkeStartDatum: ["", [Validators.required]],
            werkelijkeEindDatum: ["", [Validators.required]],
            wervenVerklaringOntvangen: [""],
            emailSend: [""],
            creatieDatum: [""],
            statusID: [""],

            status: [{value:"", disabled:true}],
            isTop: [""],



            klantVoornaam: [""],
            klantAchternaam: [""],
            klantFunctie: [""],
            klantOrganisatie: [""],
            klantAdres1: [""],
            klantAdres2: [""],
            klantPostCode: [""],
            klantPlaats: [""],
            klantLand: [""],
            klantTelefoon: [""],
            klantEmail: [""],

            herkAdres1: [""],
            herkAdres2: [""],
            herkAfzetAdres1: [""],
            herkAfzetAdres2: [""],
            herkAfzetPlaats: [""],
            herkAfzetPostCode: [""],
            herkBeschrijving: [""],
            herkContactPersoon: [""],
            herkContainerBedrijfNaam: [""],
            herkEigenaar: [""],
            herkEmail: [""],
            herkExplAdres1: [""],
            herkExplAdres2: [""],
            herkExplPlaats: [""],
            herkExplPostcode: [""],
            herkIsContainerBedrijf: [""],
            herkIsContainerPark: [""],
            herkKadAfdeling: [""],
            herkKadAfdelingsNr: [""],
            herkKadBisNr: [""],
            herkKadExponent1: [""],
            herkKadExponent2: [""],
            herkKadGrondNr: [""],
            herkKadNummers: [""],
            herkKadSectie: ["", Validators.maxLength(1)],
            herkKleineWervenLokatieType: [""],
            herkLX1: ["", [Validators.maxLength(6), Validators.min(20000), Validators.max(280000)]],
            herkLY1: ["", [Validators.maxLength(6), Validators.min(150000), Validators.max(250000)]],
            herkOpmerkingen: [""],
            herkPlaats: [""],
            herkPostcode: [""],
            herkTelefoon: [""],

            herkAdresCode: [""],
            herkKadCode: [""],
            herkLambCode: [""],
            bestAdresCode: [""],
            bestKadCode: [""],
            bestLambCode: [""],

            bestAchternaam: [""],
            bestAdres1: [""],
            bestAdres2: [""],
            bestAfzetAdres1: [""],
            bestAfzetAdres2: [""],
            bestAfzetPlaats: [""],
            bestAfzetPostCode: [""],
            bestBtwNummer: [""],
            bestContactPersoon: [""],
            bestContainerBedrijfNaam: [""],
            bestEigenaar: [""],
            bestEmail: [""],
            bestExplAdres1: [""],
            bestExplAdres2: [""],
            bestExplPlaats: [""],
            bestExplPostcode: [""],
            bestFaktuurAdres1: [""],
            bestFaktuurAdres2: [""],
            bestFaktuurLand: [""],
            bestFaktuurPlaats: [""],
            bestFaktuurPostcode: [""],
            bestFunctie: [""],
            bestIsContainerBedrijf: [""],
            bestIsContainerPark: [""],
            bestKadAfdeling: [""],
            bestKadAfdelingsNr: [""],
            bestKadBisNr: [""],
            bestKadExponent1: [""],
            bestKadExponent2: [""],
            bestKadGrondNr: [""],
            bestKadNummers: [""],
            bestKadSectie: ["", Validators.maxLength(1)],
            bestKleineWervenLokatieType: [""],
            bestLX1: ["", [Validators.maxLength(6), Validators.min(20000), Validators.max(280000)]],
            bestLY1: ["", [Validators.maxLength(6), Validators.min(150000), Validators.max(250000)]],
            bestOpmerkingen: [""],
            bestOrganisatie: [""],
            bestPlaats: [""],
            bestPostcode: [""],
            bestTelefoon: [""],
            bestVoornaam: [""],

            gwAchternaam: ["", [Validators.required]],
            gwEmail: ["", [Validators.required, Validators.pattern("^([\\w+-.%]+@[\\w-.]+\\.[A-Za-z]{2,4};?)+$")]],
            gwFirmaNaam: ["", [Validators.required]],
            gwKleineWervenPartijType: [""],
            gwPlaats: [""],
            gwPostcode: [""],
            gwStraat1: [""],
            gwStraat2: [""],
            gwTelefoon: ["", [Validators.required]],
            gwVoornaam: ["", [Validators.required]],

            tptAchternaam: ["", [Validators.required]],
            tptEmail: ["", [Validators.required, Validators.pattern("^([\\w+-.%]+@[\\w-.]+\\.[A-Za-z]{2,4};?)+$")]],
            tptFirmaNaam: ["", [Validators.required]],
            tptKleineWervenPartijType: [""],
            tptPlaats: [""],
            tptPostcode: [""],
            tptStraat1: [""],
            tptStraat2: [""],
            tptTelefoon: ["", [Validators.required]],
            tptVoornaam: ["", [Validators.required]],

            //sendOK: [false, Validators.pattern("true")],
        });
    }


    errorValidationhandler() {
        // lambert
        this.kwForm.controls.herkLX1.valueChanges.subscribe(e => {
            this.isHerkomstLambertValid();
        });
        this.kwForm.controls.herkLY1.valueChanges.subscribe(e => {
            this.isHerkomstLambertValid();
        });
        this.kwForm.controls.bestLX1.valueChanges.subscribe(e => {
            this.isDOPLambertValid();
        });
        this.kwForm.controls.bestLY1.valueChanges.subscribe(e => {
            this.isDOPLambertValid();
        });

        // besteming kadastral gegevens
        this.kwForm.controls.bestKadAfdeling.valueChanges.subscribe(e => {
            this.isDOPKadasterValid();
        });
        this.kwForm.controls.bestKadAfdelingsNr.valueChanges.subscribe(e => {
            this.isDOPKadasterValid();
        });
        this.kwForm.controls.bestKadSectie.valueChanges.subscribe(e => {
            this.isDOPKadasterValid();
        });
        this.kwForm.controls.bestKadNummers.valueChanges.subscribe(e => {
            this.isDOPKadasterValid();
        });
         // Herkomsf kadastral gegevens
        this.kwForm.controls.herkKadAfdeling.valueChanges.subscribe(e => {
            this.isHerkomstKadasterValid();
        });
        this.kwForm.controls.herkKadAfdelingsNr.valueChanges.subscribe(e => {
            this.isHerkomstKadasterValid();
        });
        this.kwForm.controls.herkKadSectie.valueChanges.subscribe(e => {
            this.isHerkomstKadasterValid();
        });
        this.kwForm.controls.herkKadNummers.valueChanges.subscribe(e => {
            this.isHerkomstKadasterValid();
        });

      
        // container 
        this.kwForm.controls.bestIsContainerBedrijf.valueChanges.subscribe(e => {
            this.isBestContainerBedrijf = e;
        });

        this.kwForm.controls.herkIsContainerBedrijf.valueChanges.subscribe(e => {
            this.isHerContainerBedrijf = e;
        });

        // locatie validation

        this.kwForm.controls.bestAdres1.valueChanges.subscribe(e => {
            this.isDOPLocationValid();
        });
        this.kwForm.controls.bestPostcode.valueChanges.subscribe(e => {
            this.isDOPLocationValid();
        });
        this.kwForm.controls.bestPlaats.valueChanges.subscribe(e => {
            this.isDOPLocationValid();
        });

        this.kwForm.controls.herkAdres1.valueChanges.subscribe(e => {
            this.isHerkomstLocationValid();
        });
        this.kwForm.controls.herkPostcode.valueChanges.subscribe(e => {
            this.isHerkomstLocationValid();
        });
        this.kwForm.controls.herkPlaats.valueChanges.subscribe(e => {
            this.isHerkomstLocationValid();
        });

        //others validations


    }



    // lambert validatie check

    isHerkomstLambertValid(): boolean {
        const LambertX = this.kwForm.controls.herkLX1;
        const LambertY = this.kwForm.controls.herkLY1;

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
        var LambertX = this.kwForm.controls.bestLX1;
        var LambertY = this.kwForm.controls.bestLY1;

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

    // Kadastral gegevens check
    isHerkomstKadasterValid(): boolean {
        var KadGemeente = this.kwForm.controls.herkKadAfdeling;
        var KadSectie = this.kwForm.controls.herkKadSectie;
        var KadNummers = this.kwForm.controls.herkKadNummers;
        var KadAfdNummer = this.kwForm.controls.herkKadAfdelingsNr;

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
        var KadGemeente = this.kwForm.controls.bestKadAfdeling;
        var KadSectie = this.kwForm.controls.bestKadSectie;
        var KadNummers = this.kwForm.controls.bestKadNummers;
        var KadAfdNummer = this.kwForm.controls.bestKadAfdelingsNr;

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

    // locatie gegevent check
    isDOPLocationValid(): boolean {
        var Adres = this.kwForm.controls.bestAdres1;
        var PostCode = this.kwForm.controls.bestPostcode;
        var Gemeente = this.kwForm.controls.bestPlaats;

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

    isHerkomstLocationValid(): boolean {
        var Adres = this.kwForm.controls.herkAdres1;
        var PostCode = this.kwForm.controls.herkPostcode;
        var Gemeente = this.kwForm.controls.herkPlaats;

        this.isHerkomstValid = false;
        if (!this.isNullOrWhitespace(Adres.value) && !this.isNullOrWhitespace(PostCode.value) && !this.isNullOrWhitespace(Gemeente.value)) {
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


    // GrondWerker and transporteur disabled
    isGrondWerkerDisabled() {
        if (this.kw !== null && this.kw.isEigenGrondwerker === true) {
            this.kwForm.get("gwAchternaam").disable();
            this.kwForm.get("gwEmail").disable();
            this.kwForm.get("gwFirmaNaam").disable();
            this.kwForm.get("gwPlaats").disable();
            this.kwForm.get("gwPostcode").disable();
            this.kwForm.get("gwStraat1").disable();
            this.kwForm.get("gwStraat2").disable();
            this.kwForm.get("gwTelefoon").disable();
            this.kwForm.get("gwVoornaam").disable();
        }
        else {
            this.kwForm.get("gwAchternaam").enable();
            this.kwForm.get("gwEmail").enable();
            this.kwForm.get("gwFirmaNaam").enable();
            this.kwForm.get("gwPlaats").enable();
            this.kwForm.get("gwPostcode").enable();
            this.kwForm.get("gwStraat1").enable();
            this.kwForm.get("gwStraat2").enable();
            this.kwForm.get("gwTelefoon").enable();
            this.kwForm.get("gwVoornaam").enable();
        }
    }

    isTranspoteurWerkerDisabled() {
        if (this.kw !==null && this.kw.isEigenTransporteur === true) {
            this.kwForm.get("tptAchternaam").disable();
            this.kwForm.get("tptEmail").disable();
            this.kwForm.get("tptFirmaNaam").disable();
            this.kwForm.get("tptPlaats").disable();
            this.kwForm.get("tptPostcode").disable();
            this.kwForm.get("tptStraat1").disable();
            this.kwForm.get("tptStraat2").disable();
            this.kwForm.get("tptTelefoon").disable();
            this.kwForm.get("tptVoornaam").disable();
        }
        else {
            this.kwForm.get("tptAchternaam").enable();
            this.kwForm.get("tptEmail").enable();
            this.kwForm.get("tptFirmaNaam").enable();
            this.kwForm.get("tptPlaats").enable();
            this.kwForm.get("tptPostcode").enable();
            this.kwForm.get("tptStraat1").enable();
            this.kwForm.get("tptStraat2").enable();
            this.kwForm.get("tptTelefoon").enable();
            this.kwForm.get("tptVoornaam").enable();
        }
    }





    private setMandatoryError(control: AbstractControl): void {
        if (control == undefined) return;
        control.setErrors({ required: true, message: "Verplicht veld" });
    }


    // need confirmation from Daniel that the below validation are required or not
    //StartDatumValidation() {
    //    setTimeout((kwForm: FormGroup) => { kwForm.controls["werkelijkeStartDatum"].updateValueAndValidity() }, 10, this.kwForm);
    //}


    //EindDatumValidation() {
    //    setTimeout((kwForm: FormGroup) => { kwForm.controls["werkelijkeEindDatum"].updateValueAndValidity() }, 10, this.kwForm);
    //}

        //werkelijkeStartDatum() {
    //    //var today = new Date();
    //    //this.volForm = this.fb.group({
    //    //    KleineWervenMeldingId: [""],
    //    //    WerkelijkeStartDatum: [""],
    //    //    WerkelijkeEindDatum: [""],
    //    //    WerkelijkeAfsluitDatum: [today],
    //    //    WerkelijkVolume: ["", Validators.required],
    //    //    sendOK: [false, Validators.pattern("true")],
    //    //});


    //    this.kwForm.controls.werkelijkVolume.valueChanges.subscribe(e => {
    //        if (Number(e) <= 0) {
    //            this.kwForm.controls.werkelijkeStartDatum.clearValidators();
    //            this.kwForm.controls.werkelijkeEindDatum.clearValidators();
    //            this.kwForm.controls.werkelijkeStartDatum.updateValueAndValidity({ emitEvent: false });
    //            this.kwForm.controls.werkelijkeEindDatum.updateValueAndValidity({ emitEvent: false });
    //            return;
    //        }

    //        this.kwForm.controls.werkelijkeStartDatum.setValidators([ValidateRequired("'Datum van' is verplicht wanneer er een hoeveelheid is ingevuld'"), ValidateDateNoHigherThan(), ValidateDateNoHigherThan("'Datum van' is later dan 'datum tot'", this.kwForm.controls.werkelijkeEindDatum)]);
    //        this.kwForm.controls.werkelijkeEindDatum.setValidators([ValidateRequired("'Datum tot' is verplicht wanneer er een hoeveelheid is ingevuld'"), ValidateDateNoHigherThan(), ValidateDateNoLessThan("'Datum tot' is voor 'datum van'", this.kwForm.controls.werkelijkeStartDatum)]);
    //        this.kwForm.controls.werkelijkeStartDatum.updateValueAndValidity({ emitEvent: false });
    //        this.kwForm.controls.werkelijkeEindDatum.updateValueAndValidity({ emitEvent: false });
    //    });

    //    this.kwForm.controls.werkelijkeStartDatum.valueChanges.subscribe(_ => { this.kwForm.controls.werkelijkeEindDatum.updateValueAndValidity({ emitEvent: false }); });
    //    this.kwForm.controls.werkelijkeEindDatum.valueChanges.subscribe(_ => { this.kwForm.controls.werkelijkeStartDatum.updateValueAndValidity({ emitEvent: false }); });


    //}

    // get date

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
                        geplandeStartDatum: this.datePipe.transform(dtl.geplandeStartDatum, " dd / MM / yyyy"),
                        werkelijkVolume: dtl.werkelijkVolume,
                        werkelijkeStartDatum: this.datePipe.transform(dtl.werkelijkeStartDatum, " dd / MM / yyyy"),
                        werkelijkeEindDatum: this.datePipe.transform(dtl.werkelijkeEindDatum, " dd / MM / yyyy"),
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
                        tptVoornaam: dtl.tptVoornaam,
                        uploadedIDs: []
                    });
                }
                this.isGrondWerkerDisabled();
                this.isTranspoteurWerkerDisabled();
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






    // sendData files


    save() {
        this.uploadStatus = "upload";
    }



    sendData(fileIDs: number[]) {
        if (fileIDs != null) {
            this.uploadedIDs = [...fileIDs];
            this.kwForm.patchValue({ uploadedIDs: this.uploadedIDs });
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








    // Email verznding handler
    mailOntvangstVerklaring() {
        const klantContactEmail = this.kwForm.controls.klantContactEmail.value;
        if (this.isNullOrWhitespace(klantContactEmail))
            return;

        this.bbrRepositoryService.SendLegeOntvangstVerklaringMail(this.kw.kleineWervenMeldingID, "be.grondwijzer@sgs.com").toPromise()
            .then(() => {
                this.showSuccesToast(`De ontvangstverklaring is verstuurd naar ${klantContactEmail}`);
            })
            .catch(() => {
                this.showErrorToast("Probleem bij het versturen van de mail");
            });
    }

    ontvangstVerklaringOnlineInvullen() {
        this.router.navigate(["/bodembeheerrapport-online", this.kw.kleineWervenMeldingID]);
    }

    ontvangstVerklaringOnlineBekijken() {
        this.router.navigate(["/bodembeheerrapport-online", this.kw.kleineWervenMeldingID]);
    }


    // geopunt
    toGeopuntBestemming() {
        const x = this.kwForm.controls.bestLX1.value;
        const y = this.kwForm.controls.bestLY1.value;
        const street = this.kwForm.controls.bestAdres1.value;
        const city = this.kwForm.controls.bestPlaats.value;

        const geopunt = new GeopuntScripts(this.sanitizer);
        const url = geopunt.getGeopuntUrl(x, y, street, city);
        window.open(url);
    }

    toGeopuntHerkomst() {
        const x = this.kwForm.controls.herkLX1.value;
        const y = this.kwForm.controls.herkLY1.value;
        const street = this.kwForm.controls.herkAdres1.value;
        const city = this.kwForm.controls.herkPlaats.value;

        const geopunt = new GeopuntScripts(this.sanitizer);
        const url = geopunt.getGeopuntUrl(x, y, street, city);
        window.open(url);
    }
}