import { Component, Inject, Injector, OnInit } from "@angular/core";
import { AbstractControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { ToastrService } from "ngx-toastr";
import "rxjs/add/operator/debounceTime";

import { appLabels } from "../scripts/appLabels";
import { GeneralScripts } from "../scripts/general.scripts";
import { HttpTVService } from "../services/http-tv.service";

import { BsLocaleService } from "ngx-bootstrap/datepicker";
import { ValidateDateNoHigherThan } from "../scripts/validator.scripts";
import { IContactInfo } from "../scripts/interfaces.scripts";

@Component({
    selector: "technisch-verslag-indienen",
    templateUrl: "./technisch-verslag-indienen.component.html",
    styleUrls: ["./technisch-verslag-indienen.component.css"]
})
export class TechnischVerslagIndienenComponent extends GeneralScripts implements OnInit {
    appLabels = appLabels;

    // Form related
    TVForm: FormGroup;
    emailValidationMessage: string = "";

    private uploadedIDs: number[] = [];
    uploadStatus: string = "selection";
    uploadQueueCount: number = 0;

    constructor(@Inject("BASE_URL") private readonly _baseUrl: string, private readonly _injector: Injector, private readonly fb: FormBuilder, private _toastr: ToastrService, private readonly _httpTV: HttpTVService, private _router: Router, private readonly _localeService: BsLocaleService) {
        super(_toastr);
    }

    ngOnInit(): void {
        // Needed configuration for the bsDatepicker to accept dd/MM/yyyy formatting
        this._localeService.use("bootstrap-locale-nlbe");

        // reactive forms using formbuilder technique
        this.TVForm = this.fb.group({
            KlantContactAchterNaam: ["", [Validators.required, Validators.maxLength(50)]],
            KlantContactVoorNaam: ["", [Validators.required, Validators.maxLength(50)]],
            KlantContactTelefoon: ["", [Validators.required, Validators.maxLength(50)]],
            KlantContactEmail: ["", [Validators.required, Validators.pattern("^([\\w+-.%]+@[\\w-.]+\\.[A-Za-z]{2,4};?)+$"), Validators.maxLength(50)]],
            Titel: ["", [Validators.required, Validators.maxLength(40)]],
            Titel2: ["", Validators.maxLength(40)],
            Titel3: ["", Validators.maxLength(40)],
            Kenmerk: ["", [Validators.required, Validators.maxLength(50)]],
            TVDatum: ["", [Validators.required, ValidateDateNoHigherThan()]],
            EBSD: ["", Validators.maxLength(50)],
            FactuurReferentieKlant: ["", [Validators.required, Validators.maxLength(100)]],
            ExternTV: [false],
            ExternTVReference: ["", Validators.maxLength(50)],
            ExternTvGeldigTotDatum: [""],
            IndieningswijzeID: ["-1", Validators.required],
            lockMultiSave: [false, Validators.pattern("false")],
            UploadedIDs: []
        });

        // only catch validation event when user stopped typing the previous character one second ago, and no new character was entered in the textbox
        const emailElement = this.TVForm.get("KlantContactEmail");
        if (emailElement) {
            emailElement.valueChanges.debounceTime(1000).subscribe(value => this.validateEmail(emailElement));
        }

        this.TVForm.controls.ExternTvGeldigTotDatum.valueChanges.subscribe(e => {
            const today = new Date();
            const value = new Date(e);

            today.setHours(0, 0, 0, 0);
            value.setHours(0, 0, 0, 0);

            if (value < today)
                this.showWarningToastWithoutTimeout(appLabels.ConformverklaringVervallen);
        });

        this.loadContactInfo();
    }


    // custom validation handlers
    validateEmail(c: AbstractControl): void {
        this.emailValidationMessage = "";
        if ((c.touched || c.dirty) && c.errors) {
            if (c.errors.pattern)
                this.emailValidationMessage = "- Emailadres is niet geldig.";
        }
    }

    loadContactInfo() {
        this._httpTV.ContactInfo().toPromise()
            .then((info: IContactInfo) => {
                if (info == null || info === undefined) {
                    return;
                }

                this.TVForm.patchValue({
                    EBSD: info.ebsd,
                    KlantContactAchterNaam: info.klantContactAchterNaam,
                    KlantContactVoorNaam: info.klantContactVoorNaam,
                    KlantContactTelefoon: info.klantContactTelefoon,
                    KlantContactEmail: info.klantContactEmail
                });
            }).catch(error => {
                this.handleError(error);
            });
    }

    // file-upload handlers
    queueCountChanged(queueLength: number) {
        this.uploadQueueCount = queueLength;
    }

    filesUploaded(fileIDs: number[]) {
        this.uploadedIDs = [...fileIDs];
        this.sendFormData();
    }

    chkExternTVChanged() {
        if (this.TVForm.controls.ExternTV.value === false)
            this.TVForm.patchValue({ ExternTVReference: '' });
    }

    formIsValid(): boolean {
        if (this.TVForm.controls.IndieningswijzeID.value === "-1")
            return false;


        let isValid: boolean = this.TVForm.controls.IndieningswijzeID.value === "1" ? this.TVForm.valid && this.uploadQueueCount > 0 : this.TVForm.valid;
        isValid = this.TVForm.controls.ExternTV.value === true ? isValid && this.TVForm.controls.ExternTVReference.value !== "" : isValid;
        if (isValid) {
            isValid = this.TVForm.controls.lockMultiSave.valid;
        }
        return isValid;
    }

    // Posting the form data to the MVC backend
    create() {
        // Upload Files (if any)
        if (this.TVForm.controls.IndieningswijzeID.value === "1") {
            // Initialise Array & Upload the Files
            this.uploadedIDs.length = 0;
            this.uploadStatus = "upload";
        }
        else {
            this.sendFormData();
        }
    }

    sendFormData() {
        this.TVForm.controls.lockMultiSave.setValue(true); // this will prevent multiple save clicks

        // use patchValue i.o. setValue, because setValue expects values for all the form's elements i.o. just a few
        this.TVForm.patchValue({ UploadedIDs: this.uploadedIDs });

        this._httpTV.Insert(this.TVForm.value).toPromise()
            .then((docId: any) => {
                this.showSuccesToast("De gegevens werden opgeslagen als nieuw Technisch Verslag");
                this._router.navigate(["/technisch-verslag-ok"], { queryParams: { TvId: docId, WijzeId: this.TVForm.controls.IndieningswijzeID.value } });
            })
            .catch(error => {
                this.handleError(error);                
                if (this.uploadedIDs.length > 0) {
                    this.uploadStatus = "clean";
                }
                this.TVForm.controls.lockMultiSave.setValue(false); // this will prevent multiple save clicks
            });
    }
}