import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { GeneralScripts } from "../../scripts/general.scripts";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, FormControl, Validators, FormArray, AbstractControl } from "@angular/forms";
import { HttpKlantService } from "../../services/http-klant.service";
import { BsLocaleService } from "ngx-bootstrap/datepicker";
import { appLabels } from "../../scripts/appLabels";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { AuthenticationService, UserRoles } from "../../services/authentication.service";
import { DatePipe } from "@angular/common";
import { sgsVolumes } from "../../scripts/sgsInterfaces.scripts";
import { DomSanitizer } from "@angular/platform-browser";
import { GeopuntScripts } from "../../scripts/geopunt.scripts";
import { FilterTypes } from "../gw-klant-grid/gw-klant-grid.component";

import { fileTypes, HttpFileService } from "../../services/http-file.service";
import {IFile } from "../../scripts/interfaces.scripts";
import { DocumentTypes } from "../gw-documents/gw-documents.component";
import { EmailHistoriekTypes } from "../gw-email-historiek-grid/gw-email-historiek-grid.component";


@Component({
    selector: "gw-gtm-edit",
    templateUrl: "./gw-gtm-edit.component.html",
    styleUrls: ["./gw-gtm-edit.component.css"], 
    providers: [DatePipe]
})

export class gwGtmEditComponent extends GeneralScripts implements OnInit {
    gtmForm: FormGroup;
    state = "";
    pageTitle = "";
    gegevensVanHetTerreinTitle = "";
    isForMijnGegevensAanpassen = false;
    buttonText = "";
    lidnummerBouwunieText = "Lidnummer bij koepel-organisatie";
    hasPendingChanges = false;
    showPasswordErrorMessage = false;

    actionSucceeded = false;
    actionSucceededMessage = "";
    msgGebruik: string = "500 resterend";
    // gtm data

    gtmId: number;
    gtmVolumes: FormArray;
    gtmData: any;
    @ViewChild(DatatableComponent) table: DatatableComponent;


    // gw-Documents
    gwDocumentType: DocumentTypes = DocumentTypes.GrondTransportMelding;
    canSendNewEmail: boolean = true;
    emailHistoriekType: EmailHistoriekTypes = EmailHistoriekTypes.gwGtmEdit;

    // upload file
    private uploadedIDs: number[] = [];
    uploadStatus: string = "selection";

    // email 
    klantContactEmailID: number = 40;

    constructor(
        private readonly _toastr: ToastrService,
        private readonly fb: FormBuilder,
        private readonly router: Router,
        private readonly route: ActivatedRoute,
        private readonly auth: AuthenticationService,
        private readonly sanitizer: DomSanitizer,
        private readonly localeService: BsLocaleService) {
        super(_toastr);
    }

    ngOnInit(): void {
        this.formOnInit();
        // Needed configuration for the bsDatepicker to accept dd/MM/yyyy formatting
        this.localeService.use("bootstrap-locale-nlbe");

        var snapshot = this.route.snapshot;
        this.gtmId = -1;
        if (snapshot.params["id"]) this.gtmId = +snapshot.params["id"];
          
    }

    formOnInit() {
        this.initialiseForm();
        
    }

    initialiseForm() {
        this.gtmForm = this.fb.group({
           // grondtransportmeldingId: ["", [Validators.required]],
           // klant: ["", [Validators.required]],
            klantContactAchternaam: ["", [Validators.required, Validators.maxLength(50)]],
            klantContactVoornaam: ["", [Validators.required, Validators.maxLength(50)]],
            klantContactTelefoon: ["", [Validators.required, Validators.maxLength(50)]],
            klantContactEmail: ["", [Validators.required, Validators.maxLength(50), Validators.pattern("^([\\w+-.%]+@[\\w-.]+\\.[A-Za-z]{2,4};?)+$")]],
            klantKenmerk: ["", [Validators.required, Validators.maxLength(50)]],
            //technischVerslagId:[],
            //tvTitelTechnischVerslag: ["", [Validators.required]],
            //tvStraatOnderzoeksLocatie: ["", [Validators.required]],
            //tvGemeenteOnderzoeksLocatie: ["", [Validators.required]],
            adres: ["", [Validators.required, Validators.maxLength(50)]],
            postcode: ["", [Validators.required, Validators.maxLength(50)]],
            plaats: ["", [Validators.required, Validators.maxLength(50)]],
            inrichtingLX: ["", [Validators.required,Validators.maxLength(6), Validators.min(20000), Validators.max(280000)]],
            inrichtingLY: ["", [Validators.required,Validators.maxLength(6), Validators.min(150000), Validators.max(250000)]],
            // add text on the Dom 
            topOrganisatie: [""],
            topStraat: [{ value: "", disabled: true }, [,Validators.maxLength(50)]],
            topPostcode: [{ value: "", disabled: true }, [Validators.maxLength(50)]],
            topGemeente: [{ value: "", disabled: true }, [Validators.maxLength(50)]],
            grondtransportmeldingGebruik: [""],
            transportAanvangDatum: [""],
            transportEindeDatum: [""],
            remarkVaOnline: [""],
            afgravingsplanOntvangen: [""],
            verklaringAfnemerOntvangen: [""],
            gefactureerd: [""],
            interneOpmerking: [""],


            gtmVolumes: this.fb.array([])

        });
        this.gtmVolumes = this.gtmForm.get("gtmVolumes") as FormArray;
    }


    createGtmVolume(vol: sgsVolumes): FormGroup {
        return this.fb.group({
            tvZoneNr: [vol.tvZoneNr],
            beschrijving: [vol.beschrijving],
            kgbuOmschrijving: [vol.kgbuOmschrijving],
            kgbiOmschrijving: [vol.kgbiOmschrijving],
            kgboOmschrijving: [vol.kgboOmschrijving],
            hoeveelheid: [vol.hoeveelheid],
            werkelijkeHoeveelheid: [null, [Validators.maxLength(7)]],
            grondtransportmeldingZoneID: [vol.grondtransportmeldingZoneID],
            tvZoneId: [vol.tvZoneId]
        });

    }

// errors handling









    sendData(fileIDs: number[]) {
        if (fileIDs != null) {
            this.uploadedIDs = [...fileIDs];
          //  this.tvForm.patchValue({ uploadedIDs: this.uploadedIDs });
        }

        //   const klantFormValues: IKlantPoco = this.getformValues();
        //this.httpKlant.sgsSave(klantFormValues).toPromise()
        //    .then((docId: any) => {
        //        this.showSuccesToast("De gegevens werden opgeslagen");
        //        this.router.navigate(["/gw-klant-grid"]);
        //    })
        //    .catch(error => {
        //        this.handleError(error);
        //        console.log(error, "error");
        //        if (this.uploadedIDs.length > 0) {
        //            this.uploadStatus = "clean";
        //        }
        //    });


    }

    save() {
        // Upload the files first if any
        this.uploadStatus = "upload";
        // gw-documents component will trigger sendData with the ids of the uploaded files
    }

    sendNewEmail() {
        this.router.navigate(['gw/email',"new", this.emailHistoriekType, this.gtmId]);
    }


    toGeopunt() {
        const x = this.gtmForm.controls.inrichtingLX.value;
        const y = this.gtmForm.controls.inrichtingLY.value;
        const street = this.gtmForm.controls.adres.value;
        const city = this.gtmForm.controls.plaats.value;

        const geopunt = new GeopuntScripts(this.sanitizer);
        const url = geopunt.getGeopuntUrl(x, y, street, city);
        window.open(url);
    }

 
}
