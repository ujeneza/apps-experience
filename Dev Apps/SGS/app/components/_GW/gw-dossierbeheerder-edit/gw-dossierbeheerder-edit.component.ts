import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { GeneralScripts } from "../../scripts/general.scripts";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import {FormGroup, FormBuilder, FormControl,Validators } from "@angular/forms";
import { HttpKlantService } from "../../services/http-klant.service";
import { BsLocaleService } from "ngx-bootstrap/datepicker";
import { appLabels } from "../../scripts/appLabels";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { AuthenticationService, UserRoles } from "../../services/authentication.service";
import { DatePipe } from "@angular/common";
import { ISgsStatusGridItem, ISgsDossierBeheerder } from "../../scripts/sgsInterfaces.scripts";
import { HttpDossierService } from "../../services/http-dossier.service";

@Component({
    selector: "gw-dossierbeheerder-edit",
    templateUrl: "./gw-dossierbeheerder-edit.component.html",
    styleUrls: ["./gw-dossierbeheerder-edit.component.css"]
})

export class gwDossierbeheerderEditComponent extends GeneralScripts implements OnInit {
   dossierbeheerderForm: FormGroup;


    // Upload Component
    private uploadedIDs: number[] = [];
    uploadStatus: string = "selection";
    uploadQueueCount: number = 0;

    // data
    dossierbeheerderId: number;


    constructor(
        private readonly _toastr: ToastrService,
        private readonly fb: FormBuilder,
   
        private readonly router: Router,
        private readonly route: ActivatedRoute,
        private readonly httpDossier: HttpDossierService,
        private readonly localeService: BsLocaleService) {
        super(_toastr);
    }

    ngOnInit(): void {
        const snapshot = this.route.snapshot;
        if (snapshot.params["id"]) this.dossierbeheerderId = +snapshot.params["id"];
        this.loadData(this.dossierbeheerderId);
        this.formOnInit();

        this.localeService.use("bootstrap-locale-nlbe");


          
    }

    formOnInit() {
        this.dossierbeheerderForm = new FormGroup({
            aanspreektitel: new FormControl(null, {
                validators: [Validators.required]
            }),
            voornaam: new FormControl(null, {
                validators: [Validators.required]
            }),
            achternaam: new FormControl(null, {
                validators: [Validators.required]
            }),
            telefoon: new FormControl(null, {
                validators: [Validators.required]
            }),
            email: new FormControl(null, {
                validators: [Validators.required]
            }),
            login: new FormControl(null, {
                validators: [Validators.required]
            }),
            paswoord: new FormControl(null, {
                validators: [Validators.required]
            }),
            handtekeningIds: new FormControl(null, {
                validators: [Validators.required]
            }),
            administrator: new FormControl(null, {
                validators: [Validators.required]
            }),
            diensthoofd: new FormControl(null, {
                validators: [Validators.required]
            }),
            contributor: new FormControl(null, {
                validators: [Validators.required]
            }),
            active: new FormControl(null, {
                validators: [Validators.required]
            }),
        });



    }

    // load data
    loadData(id: number) {
        if (this.dossierbeheerderId === (-1 || '-1')) return;

        this.httpDossier.sgsMailById(id).toPromise()
            .then((response: ISgsDossierBeheerder) => {
                this.dossierbeheerderForm.patchValue({
                    aanspreektitel: null,
                    voornaam:response.voornaam,
                    achternaam:response.achternaam,
                    email:response.email,
                    login: response.login,
                    paswoord: response.paswoord,
                    handtekeningIds: null,
                    administrator: null,
                    diensthoofd: null,
                    contributor:null,
                    active: response.isActive,
                })
            })
            .catch(_ => {
                this.showErrorToast("Fout bij het laden van de mail");
            });


    }

 

  


}
