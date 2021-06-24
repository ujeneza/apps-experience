import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter } from "@angular/core";
import { GeneralScripts } from "../../../scripts/general.scripts";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, FormControl, Validators, FormArray, AbstractControl, NgControl } from "@angular/forms";
import { HttpKlantService } from "../../../services/http-klant.service";
import { BsLocaleService } from "ngx-bootstrap/datepicker";
import { appLabels } from "../../../scripts/appLabels";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { AuthenticationService, UserRoles } from "../../../services/authentication.service";
import { DatePipe } from "@angular/common";
import { ISgsStatusGridItem, ISgsGTMVolumes, sgsTvJoinedData, EvaluatieFormErrors, ISgsGeologischeBeschrijving, ISgsprimaireOppervlakte } from "../../../scripts/sgsInterfaces.scripts";
import { DomSanitizer } from "@angular/platform-browser";
import { GeopuntScripts } from "../../../scripts/geopunt.scripts";
import { FilterTypes } from "../../gw-klant-grid/gw-klant-grid.component";
import { Directive, ElementRef, Injectable, Injector, Renderer2, forwardRef } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subject } from "rxjs/Subject";
import { HttpTVService } from "../../../services/http-tv.service";





@Component({
    selector: "gw-tv-evaluatie",
    templateUrl: "./gw-tv-evaluatie.component.html",
    styleUrls: ["./gw-tv-evaluatie.component.css"],
    providers: [DatePipe]

})

export class gwTvEvaluatieComponent extends GeneralScripts implements OnInit, OnChanges {
    evaluatieForm: FormGroup;
    @Input() tvId: number;
    @Input() data: sgsTvJoinedData;
    @Input() selectedStatus: number;
    @Input() totalHoeveelheid: number;
    @Input() dossierBeheerderID: number;
    @Input() isComformiteitMailSend: number;
    @Input() isSaving: number;
    tvJoinedData: sgsTvJoinedData;
    @Output() besluitConclusion: EventEmitter<number> = new EventEmitter<number>();
    @Output() evaluatieFormErrors: EventEmitter<EvaluatieFormErrors> = new EventEmitter<EvaluatieFormErrors>();
    @Output() evaluatieFormValues: EventEmitter<sgsTvJoinedData> = new EventEmitter<sgsTvJoinedData>();
    @Output() canSendComformietMail: EventEmitter<boolean> = new EventEmitter<boolean>();

    // dropdown
    geoBeschrevingListItems: ISgsGeologischeBeschrijving[];
    primaireOppervlakteListItems: ISgsprimaireOppervlakte[];


    // validations
    positivebesluitMessage: string;
    vlareboVolumeErrorMessage: string;
    totalHoeveelheidErrorMessage: string;
    dossierBeheerderIDErrorMessage: string;
    besluitSelected: number;


    constructor(
        private readonly _toastr: ToastrService,
        private readonly fb: FormBuilder,
        private readonly httpKlant: HttpKlantService,
        private readonly httpTv: HttpTVService,
        private readonly router: Router,
        private readonly route: ActivatedRoute,
        private readonly auth: AuthenticationService,
        private readonly sanitizer: DomSanitizer,
        private readonly datePipe: DatePipe,
        private readonly localeService: BsLocaleService,
        private _renderer: Renderer2, private _elementRef: ElementRef, ) {
        super(_toastr);

    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['data']) {
            this.tvJoinedData = changes.data.currentValue;
            this.initialiseForm();
            this.loadEntity();
        }

        if (changes['selectedStatus']) {
            if (changes.selectedStatus.currentValue == undefined) return;
            this.selectedStatus = changes.selectedStatus.currentValue;
            let val = 2;
            switch (changes.selectedStatus.currentValue) {
                case 1:
                    val = 3;
                    break;
                case 4:
                    val = 1;
                    break;
            } 
            this.evaluatieForm.patchValue({
                checkConclusion: val
            })
        }

        if (changes['totalHoeveelheid']) {

            this.vlareboVolumeErrorMessage =
                ((Number(this.evaluatieForm.get("checkB_Typ_02_Volume").value) !== changes.totalHoeveelheid.currentValue)
                    && this.evaluatieForm.get("checkB_Typ_02_Volume").valid) ? "- De Vlarebo volume is niet gelijk aan  Deelvolume total hoeveelheid" : '';
            this.totalHoeveelheidErrorMessage = (changes.totalHoeveelheid.currentValue === 0) ? "- Deelvolume is vereist" : "";
        }

        if (changes['dossierBeheerderID']) {
            this.dossierBeheerderIDErrorMessage = (Number(changes.dossierBeheerderID.currentValue)) ? "" : "- DossierBeheerder is vereist";
            this.isBesluitDisabled();
        }

        if (changes['isSaving']) {
            console.log(changes.isSaving.currentValue, "changes.isSaving.currentValue")
            if (changes.isSaving.currentValue == undefined) return;
            if (this.isSaving === 0) {
                document.getElementById("checkConclusionNOK").removeAttribute('disabled');
                document.getElementById("checkConclusionNVT").removeAttribute('disabled');
                this.isBesluitDisabled();
            } else {
                document.getElementById("checkConclusionOK").setAttribute("disabled", "true");
                document.getElementById("checkConclusionNOK").setAttribute("disabled", "true");
                document.getElementById("checkConclusionNVT").setAttribute("disabled", "true");
            }
        }

    }


    ngOnInit(): void {
        this.localeService.use("bootstrap-locale-nlbe");
        this.formOnInit();

    }

    formOnInit() {
        this.initialiseForm();
        this.loadDropdowns();
    }

    initialiseForm() {
        this.evaluatieForm = this.fb.group({
            checkA_01: ["", [Validators.required]],
            checkB_01: [""],
            //Administratief onderzoek
            checkB_Adm_01_Adres: [""],
            checkB_Adm_02_LCoord: [""],
            checkB_Adm_03_Kad: [""],
            //  checkB_Adm_04_IdentInit: [""], // field not shown on the old view
            checkB_Adm_05_BestemTyp: [""],
            checkB_Adm_06_VermeldLigging: [""],
            //Historisch onderzoek
            checkB_His_01_terrein: [""],
            checkB_His_02_Vlarebo: [""],
            checkB_His_03_Vlarem: [""],
            checkB_His_03B_Lozing: [""], // new field

            checkB_His_04_Organolep: [""],
            checkB_His_05_Voormalig: [""],
            checkB_His_06_Aanvullend: [""],
            //Reden / type grondverzet
            checkB_Typ_01_Algemeen: [""],
            checkB_Typ_02_Volume: ["", [Validators.required]],
            checkB_Typ_02B_VlaremaVolume: [""], // new field
            checkB_Typ_03_Diepte: [""], // Database allows for decimal values
            //checkB_Typ_04_Lenge: [""],// Database allows for decimal values

            checkB_PosBesluit_01_Voorstudie: ["", [Validators.required]],

            checkC_01: [""],
            //Type Strategie
            checkC_Typ_01_BouwPrj: [""],
            checkC_Typ_02_LijnTrj: [""],
            checkC_Typ_03_Hopen: [""],
            checkC_Typ_04_HopenAnder: [""],
            checkC_Typ_05_Deels: [""],

            checkC_Typ_06_OnbevLineair: [""],
            checkC_Typ_07_OnbevBreder: [""],
            checkC_Typ_08_OnbevGracht: [""],
            checkC_Typ_09_BevaarMonster: [""],

            //Bemonstering
            checkC_Mon_01B_MinStrategie: [""], // new field
            checkC_Mon_02_Verdacht: [""],
            checkC_Mon_03_Datum: ["", [Validators.required]],
            checkC_Mon_04_Verslag: [""],
            //Analyses
            checkC_Ana_01_Correct: [""],
            checkC_Ana_02_Voldoende: [""],
            checkC_Ana_03_Verdacht: [""],
            checkC_Ana_04_SAP: [""],
            checkC_Ana_04B_PCB: [""],
            checkC_Ana_05_ntGekend: [""],
            checkC_Ana_05B_SAPWater: [""],
            checkC_Ana_06_Bijkomend: [""],
            checkC_Ana_07_Schud: [""],
            checkC_Ana_08_ErkendLab: [""],
            checkC_Ana_09_CMA: [""],
            checkC_Ana_10_Cert: [""],

            checkC_PosBesluit_01_Strat: ["", [Validators.required]],

            checkD_01: [""],
            // Evaluatie
            checkD_Eval_01_NormPrm: [""],
            checkD_Eval_02_NtNormPrm: [""],
            checkD_Eval_03_pH: [""],
            checkD_Eval_04_toetsTbl: [""],
            checkD_Eval_05_toetsing: [""],
            checkD_Eval_06_ToetsMeth: [""],
            checkD_Eval_07_Herbruik: [""],
            checkD_Eval_08_BodemVrmdMat: [""],
            checkD_Eval_09_Asbest: [""], // new field
            //Correcte afbakening kadastrale werkzone(s)
            // checkD_Eval_Kad_00: [""],  // field not shown on the old view
            // checkD_Eval_Kad_01_Perceel: [""],  // field not shown on the old view
            checkD_Eval_Kad_02_heterog: [""],
            checkD_Eval_Kad_03_Homog: [""],
            checkD_Eval_Kad_04_Waterloop: [""],
            //Bijkomende richtlijnen opgesteld
            checkD_Eval_Rich_01_Grondwater: [""],
            checkD_Eval_Rich_02_Bemaling: [""],
            checkD_Eval_Rich_03_Blootst: [""],
            checkD_Eval_Rich_04_TssTijds: [""],
            checkD_Eval_Rich_05_Milieu: [""], // new field
            checkD_Eval_Rich_06_Voorw: [""], // new field

            checkD_Eval_11_PosBesluit: ["", [Validators.required]],

            checkE_ZoneringsPlan: ["", [Validators.required]],
            checkF_OpmetingsTabel: ["", [Validators.required]],

            checkG_VolTabel: [""], // new field
            checkH_FotoRep: [""], // new field
            checkI_Bouwplan: [""], // new field
            checkJ_VolBerek: [""], // new field
            checkK_InfoVorige: [""], // new field
            checkL_Delfstof: [""], // new field
            checkL_Delfstof_view: [""], // new field
            checkL_GeologischeBeschrijvingID: [""], // new field
            checkL_PrimaireOppDelfstofID: [""], // new field
            checkL_Volume: [""], // new field

            checkConclusionView: [""], // new field
            checkConclusion: [""] // new field
        });
        // this.isBesluitDisabled();
        this.positivebesluitHandler();

    }


    // load data 
    loadDropdowns() {
        this.httpTv.gwGeologischeBeschrijving().toPromise().
            then((lst: ISgsGeologischeBeschrijving[]) => {
                this.geoBeschrevingListItems = [...lst];
            });

        this.httpTv.gwPrimaireOppervlakte().toPromise().
            then((lst: ISgsprimaireOppervlakte[]) => {
                this.primaireOppervlakteListItems = [...lst];
            });


    }

    loadEntity() {

        if (this.tvJoinedData) {

            this.evaluatieForm.patchValue({
                checkA_01: this.checkBoxDefaultValue(this.tvJoinedData.checkA_01),
                checkB_01: this.checkBoxDefaultValue(this.tvJoinedData.checkB_01),
                //Administratief onderzoek
                checkB_Adm_01_Adres: this.checkBoxDefaultValue(this.tvJoinedData.checkB_Adm_01_Adres),
                checkB_Adm_02_LCoord: this.checkBoxDefaultValue(this.tvJoinedData.checkB_Adm_02_LCoord),
                checkB_Adm_03_Kad: this.checkBoxDefaultValue(this.tvJoinedData.checkB_Adm_03_Kad),
                checkB_Adm_04_IdentInit: this.tvJoinedData.checkB_Adm_04_IdentInit, // field not shown on the old view
                checkB_Adm_05_BestemTyp: this.checkBoxDefaultValue(this.tvJoinedData.checkB_Adm_05_BestemTyp),
                checkB_Adm_06_VermeldLigging: this.checkBoxDefaultValue(this.tvJoinedData.checkB_Adm_06_VermeldLigging),
                //Historisch onderzoek
                checkB_His_01_terrein: this.checkBoxDefaultValue(this.tvJoinedData.checkB_His_01_terrein),
                checkB_His_02_Vlarebo: this.checkBoxDefaultValue(this.tvJoinedData.checkB_His_02_Vlarebo),
                checkB_His_03_Vlarem: this.checkBoxDefaultValue(this.tvJoinedData.checkB_His_03_Vlarem),
                checkB_His_04_Organolep: this.checkBoxDefaultValue(this.tvJoinedData.checkB_His_04_Organolep),
                checkB_His_05_Voormalig: this.checkBoxDefaultValue(this.tvJoinedData.checkB_His_05_Voormalig),
                checkB_His_06_Aanvullend: this.checkBoxDefaultValue(this.tvJoinedData.checkB_His_06_Aanvullend),
                //Reden / type grondverzet
                checkB_Typ_01_Algemeen: this.checkBoxDefaultValue(this.tvJoinedData.checkB_Typ_01_Algemeen),
                checkB_Typ_02_Volume: this.tvJoinedData.checkB_Typ_02_Volume,
                checkB_Typ_03_Diepte: this.tvJoinedData.checkB_Typ_03_Diepte,
                //  checkB_Typ_04_Lenge: this.tvJoinedData.checkB_Typ_04_Lenge,

                checkB_PosBesluit_01_Voorstudie: this.checkBoxDefaultValue(this.tvJoinedData.checkB_PosBesluit_01_Voorstudie),

                checkC_01: this.checkBoxDefaultValue(this.tvJoinedData.checkC_PosBesluit_01_Strat),
                //Type Strategie
                checkC_Typ_01_BouwPrj: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Typ_01_BouwPrj),
                checkC_Typ_02_LijnTrj: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Typ_02_LijnTrj),
                checkC_Typ_03_Hopen: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Typ_03_Hopen),
                checkC_Typ_04_HopenAnder: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Typ_04_HopenAnder),
                checkC_Typ_05_Deels: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Typ_05_Deels),
                //Bemonstering
                checkC_Mon_01_voldoende: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Mon_01_voldoende),
                checkC_Mon_02_Verdacht: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Mon_02_Verdacht),
                checkC_Mon_03_Datum: this.datePipe.transform(this.tvJoinedData.checkC_Mon_03_Datum, "dd/MM/yyyy"),
                checkC_Mon_04_Verslag: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Mon_04_Verslag),
                //Analyses
                checkC_Ana_01_Correct: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Ana_01_Correct),
                checkC_Ana_02_Voldoende: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Ana_02_Voldoende),
                checkC_Ana_03_Verdacht: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Ana_03_Verdacht),
                checkC_Ana_04_SAP: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Ana_04_SAP),
                checkC_Ana_05_ntGekend: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Ana_05_ntGekend),
                checkC_Ana_06_Bijkomend: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Ana_06_Bijkomend),
                checkC_Ana_07_Schud: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Ana_06_Bijkomend),
                checkC_Ana_08_ErkendLab: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Ana_08_ErkendLab),
                checkC_Ana_09_CMA: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Ana_09_CMA),
                checkC_Ana_10_Cert: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Ana_10_Cert),

                checkC_PosBesluit_01_Strat: this.checkBoxDefaultValue(this.tvJoinedData.checkC_PosBesluit_01_Strat),

                checkD_01: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_11_PosBesluit),
                // Evaluatie
                checkD_Eval_01_NormPrm: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_01_NormPrm),
                checkD_Eval_02_NtNormPrm: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_02_NtNormPrm),
                checkD_Eval_03_pH: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_03_pH),
                checkD_Eval_04_toetsTbl: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_04_toetsTbl),
                checkD_Eval_05_toetsing: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_05_toetsing),
                checkD_Eval_06_ToetsMeth: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_06_ToetsMeth),
                checkD_Eval_07_Herbruik: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_07_Herbruik),
                checkD_Eval_08_BodemVrmdMat: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_08_BodemVrmdMat),
                //Correcte afbakening kadastrale werkzone(s)
                //checkD_Eval_Kad_00: this.tvJoinedData.checkD_Eval_Kad_00,  // field not shown on the old view
                // checkD_Eval_Kad_01_Perceel: this.tvJoinedData.checkD_Eval_Kad_01_Perceel,  // field not shown on the old view
                checkD_Eval_Kad_02_heterog: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_Kad_02_heterog),
                checkD_Eval_Kad_03_Homog: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_Kad_03_Homog),
                //Bijkomende richtlijnen opgesteld
                checkD_Eval_Rich_01_Grondwater: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_Rich_01_Grondwater),
                checkD_Eval_Rich_02_Bemaling: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_Rich_02_Bemaling),
                checkD_Eval_Rich_03_Blootst: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_Rich_03_Blootst),
                checkD_Eval_Rich_04_TssTijds: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_Rich_04_TssTijds),
                checkD_Eval_11_PosBesluit: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_11_PosBesluit),

                checkE_ZoneringsPlan: this.checkBoxDefaultValue(this.tvJoinedData.checkE_ZoneringsPlan),
                checkF_OpmetingsTabel: this.checkBoxDefaultValue(this.tvJoinedData.checkF_OpmetingsTabel),
                checkConclusionView: this.checkBoxDefaultValue(this.tvJoinedData.checkConclusion),
                checkConclusion: this.checkBoxDefaultValue(this.tvJoinedData.checkConclusion),

                // New fields 2019
                checkB_His_03B_Lozing: this.checkBoxDefaultValue(this.tvJoinedData.checkB_His_03B_Lozing),
                checkB_Typ_02B_VlaremaVolume: this.checkBoxDefaultValue(this.tvJoinedData.checkB_Typ_02B_VlaremaVolume),
                checkC_Mon_01B_MinStrategie: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Mon_01B_MinStrategie),
                checkC_Ana_04B_PCB: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Ana_04B_PCB),
                checkC_Ana_05B_SAPWater: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Ana_05B_SAPWater),
                checkD_Eval_09_Asbest: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_09_Asbest),
                checkD_Eval_Kad_04_Waterloop: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_Kad_04_Waterloop),
                checkD_Eval_Rich_05_Milieu: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_Rich_05_Milieu),
                checkD_Eval_Rich_06_Voorw: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_Rich_06_Voorw),
                checkG_VolTabel: this.checkBoxDefaultValue(this.tvJoinedData.checkG_VolTabel),
                checkH_FotoRep: this.checkBoxDefaultValue(this.tvJoinedData.checkH_FotoRep),
                checkI_Bouwplan: this.checkBoxDefaultValue(this.tvJoinedData.checkI_Bouwplan),
                checkJ_VolBerek: this.checkBoxDefaultValue(this.tvJoinedData.checkJ_VolBerek),
                checkK_InfoVorige: this.checkBoxDefaultValue(this.tvJoinedData.checkK_InfoVorige),
                checkL_Delfstof: this.checkBoxDefaultValue(this.tvJoinedData.checkL_Delfstof),
                checkL_GeologischeBeschrijvingID: this.tvJoinedData.checkL_GeologischeBeschrijvingID,
                checkL_PrimaireOppDelfstofID: this.tvJoinedData.checkL_PrimaireOppDelfstofID,
                checkL_Volume: this.tvJoinedData.checkL_Volume,
                checkC_Typ_06_OnbevLineair: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Typ_06_OnbevLineair),
                checkC_Typ_07_OnbevBreder: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Typ_07_OnbevBreder),
                checkC_Typ_08_OnbevGracht: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Typ_08_OnbevGracht),
                checkC_Typ_09_BevaarMonster: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Typ_09_BevaarMonster),
            });
        }

        this.evaluatieForm.getError("");

    }



    // business rules and errors handling
    positivebesluitHandler() {
        this.evaluatieForm.get('checkB_PosBesluit_01_Voorstudie').valueChanges.debounceTime(1000).subscribe(val => {
            this.evaluatieForm.patchValue({
                checkB_01: val
            });
        });
        this.evaluatieForm.get('checkC_PosBesluit_01_Strat').valueChanges.debounceTime(1000).subscribe(val => {
            this.evaluatieForm.patchValue({
                checkC_01: val
            });
        });
        this.evaluatieForm.get('checkD_Eval_11_PosBesluit').valueChanges.debounceTime(1000).subscribe(val => {
            this.evaluatieForm.patchValue({
                checkD_01: val
            });
        });
        this.evaluatieForm.get('checkL_Delfstof').valueChanges.debounceTime(1000).subscribe(val => {
            this.evaluatieForm.patchValue({
                checkL_Delfstof_view: val
            });
        });

        this.evaluatieForm.get('checkConclusion').valueChanges.subscribe(val => {
            this.evaluatieForm.patchValue({
                checkConclusionView: val
            });
            this.besluitConclusion.emit(val);
            this.besluitSelected = val;
        });

        this.evaluatieForm.get("checkB_Typ_02_Volume").valueChanges.debounceTime(1000).subscribe(val => {
            this.vlareboVolumeErrorMessage =
                ((Number(val) !== this.totalHoeveelheid)
                    && this.evaluatieForm.get("checkB_Typ_02_Volume").valid) ? "- De Vlarebo volume is niet gelijk aan  Deelvolume total hoeveelheid" : '';
        });




        this.evaluatieForm.valueChanges.debounceTime(1000).subscribe(val => {
            const A = (this.errorMessageGeneratePositiveBesluit(this.evaluatieForm.get("checkA_01").value) === true) ? "" : "A" + " ";
            const B = (this.errorMessageGeneratePositiveBesluit(this.evaluatieForm.get("checkB_PosBesluit_01_Voorstudie").value) === true) ? "" : "B" + " ";
            const C = (this.errorMessageGeneratePositiveBesluit(this.evaluatieForm.get("checkC_PosBesluit_01_Strat").value) === true) ? "" : "C" + " ";
            const D = (this.errorMessageGeneratePositiveBesluit(this.evaluatieForm.get("checkD_Eval_11_PosBesluit").value) === true) ? "" : "D" + " ";
            const E = (this.errorMessageGeneratePositiveBesluit(this.evaluatieForm.get("checkE_ZoneringsPlan").value) === true) ? "" : "E" + " ";
            const F = (this.errorMessageGeneratePositiveBesluit(this.evaluatieForm.get("checkF_OpmetingsTabel").value) === true) ? "" : "F" + " ";
            const G = (this.errorMessageGeneratePositiveBesluit(this.evaluatieForm.get("checkG_VolTabel").value) === true) ? "" : "G" + " ";
            const H = (this.errorMessageGeneratePositiveBesluit(this.evaluatieForm.get("checkH_FotoRep").value) === true) ? "" : "H" + " ";
            const I = (this.errorMessageGeneratePositiveBesluit(this.evaluatieForm.get("checkI_Bouwplan").value) === true) ? "" : "I" + " ";
            const J = (this.errorMessageGeneratePositiveBesluit(this.evaluatieForm.get("checkJ_VolBerek").value) === true) ? "" : "J" + " ";
            const K = (this.errorMessageGeneratePositiveBesluit(this.evaluatieForm.get("checkK_InfoVorige").value) === true) ? "" : "K" + " ";
            const L = (this.errorMessageGeneratePositiveBesluit(this.evaluatieForm.get("checkL_Delfstof").value) === true) ? "" : "L" + " ";


            this.positivebesluitMessage = (A || B || C || D || E || F || G || H || I || J || K || L) ? "- U moet een besluit invullen voor " + A + B + C + D + E + F + G + H + I + J + K + L : '';


            const evaluatieErrors: EvaluatieFormErrors = {
                datumDemonsteringErrorMessage: (this.evaluatieForm.get("checkC_Mon_03_Datum").valid) ? null : "- Datum bemonstering is vereist.",
                volumeErrorMessage: (this.evaluatieForm.get("checkB_Typ_02_Volume").valid) ? null : "- Volume VLAREBO is vereist.",
                vlareboVolume: Number(this.evaluatieForm.get("checkB_Typ_02_Volume").value),
                isBesluit: this.canSelectBesluit()
            } as EvaluatieFormErrors;

            this.isBesluitDisabled();

            this.evaluatieFormErrors.emit(evaluatieErrors);
            this.evaluatieFormValues.emit(this.getEvaluatieFormValues());



        });
    }

    canSelectBesluit() {
        return this.evaluatieForm.valid &&
            this.positivebesluitMessage === '' &&
            this.vlareboVolumeErrorMessage === '' &&
            this.dossierBeheerderIDErrorMessage === '' &&
            this.evaluatieForm.get("checkB_Typ_02_Volume").valid
    }

    isConformiteit() {
        return this.canSelectBesluit() &&
            this.besluitSelected === 1
    }

    sendConformiteitEmail() {
        this.canSendComformietMail.emit(true);
    }

    errorMessageGeneratePositiveBesluit(value: number) {
        if (value === 1) return true
    }

    checkBoxDefaultValue(check: any) {
        const value = (!check) ? 3 : check;
        return value;
    }

    isBesluitDisabled() {
        if (this.besluitSelected !== null) {
            if (!this.canSelectBesluit()) {
                document.getElementById("checkConclusionOK").setAttribute("disabled", "true");
                document.getElementById("checkConclusionNOK").removeAttribute('disabled');
                document.getElementById("checkConclusionNVT").removeAttribute('disabled');
             
                if (Number(this.evaluatieForm.get("checkConclusion").value) === 1) {
                    this.evaluatieForm.patchValue({ checkConclusion: 3});
                }
            } else {
                document.getElementById("checkConclusionOK").removeAttribute('disabled');
                document.getElementById("checkConclusionNOK").setAttribute("disabled", "true");
                document.getElementById("checkConclusionNVT").setAttribute("disabled", "true");
                if (Number(this.evaluatieForm.get("checkConclusion").value) !== 1) {
                    this.evaluatieForm.patchValue({ checkConclusion: 1});
                }
            };
        } else {
            return
        }

    }

    // get Data
    getEvaluatieFormValues() {
        const evaluatieFormValues: sgsTvJoinedData = {
            checkA_01: this.evaluatieForm.value.checkA_01,
            checkB_01: this.evaluatieForm.value.checkC_PosBesluit_01_Strat,
            //Administratief onderzoek
            checkB_Adm_01_Adres: this.evaluatieForm.value.checkB_Adm_01_Adres,
            checkB_Adm_02_LCoord: this.evaluatieForm.value.checkB_Adm_02_LCoord,
            checkB_Adm_03_Kad: this.evaluatieForm.value.checkB_Adm_03_Kad,
            checkB_Adm_04_IdentInit: null, // field not shown on the old view
            checkB_Adm_05_BestemTyp: this.evaluatieForm.value.checkB_Adm_05_BestemTyp,
            checkB_Adm_06_VermeldLigging: this.evaluatieForm.value.checkB_Adm_06_VermeldLigging,
            //Historisch onderzoek
            checkB_His_01_terrein: this.evaluatieForm.value.checkB_His_01_terrein,
            checkB_His_02_Vlarebo: this.evaluatieForm.value.checkB_His_02_Vlarebo,
            checkB_His_03_Vlarem: this.evaluatieForm.value.checkB_His_03_Vlarem,
            checkB_His_04_Organolep: this.evaluatieForm.value.checkB_His_04_Organolep,
            checkB_His_05_Voormalig: this.evaluatieForm.value.checkB_His_05_Voormalig,
            checkB_His_06_Aanvullend: this.evaluatieForm.value.checkB_His_06_Aanvullend,
            //Reden / type grondverzet
            checkB_Typ_01_Algemeen: this.evaluatieForm.value.checkB_Typ_01_Algemeen,
            checkB_Typ_02_Volume: this.evaluatieForm.value.checkB_Typ_02_Volume,
            checkB_Typ_03_Diepte: this.evaluatieForm.value.checkB_Typ_03_Diepte,
            checkB_Typ_04_Lenge: this.evaluatieForm.value.checkB_Typ_04_Lenge,

            checkB_PosBesluit_01_Voorstudie: this.evaluatieForm.value.checkB_PosBesluit_01_Voorstudie,


            //Type Strategie
            checkC_Typ_01_BouwPrj: this.evaluatieForm.value.checkC_Typ_01_BouwPrj,
            checkC_Typ_02_LijnTrj: this.evaluatieForm.value.checkC_Typ_02_LijnTrj,
            checkC_Typ_03_Hopen: this.evaluatieForm.value.checkC_Typ_03_Hopen,
            checkC_Typ_04_HopenAnder: this.evaluatieForm.value.checkC_Typ_04_HopenAnder,
            checkC_Typ_05_Deels: this.evaluatieForm.value.checkC_Typ_05_Deels,
            //Bemonstering
            checkC_Mon_01_voldoende: this.evaluatieForm.value.checkC_Mon_01_voldoende,
            checkC_Mon_02_Verdacht: this.evaluatieForm.value.checkC_Mon_02_Verdacht,
            checkC_Mon_03_Datum: this.stringToDate(this.evaluatieForm.value.checkC_Mon_03_Datum),
            checkC_Mon_04_Verslag: this.evaluatieForm.value.checkC_Mon_04_Verslag,
            //Analyses
            checkC_Ana_01_Correct: this.evaluatieForm.value.checkC_Ana_01_Correct,
            checkC_Ana_02_Voldoende: this.evaluatieForm.value.checkC_Ana_02_Voldoende,
            checkC_Ana_03_Verdacht: this.evaluatieForm.value.checkC_Ana_03_Verdacht,
            checkC_Ana_04_SAP: this.evaluatieForm.value.checkC_Ana_04_SAP,
            checkC_Ana_05_ntGekend: this.evaluatieForm.value.checkC_Ana_05_ntGekend,
            checkC_Ana_06_Bijkomend: this.evaluatieForm.value.checkC_Ana_06_Bijkomend,
            checkC_Ana_07_Schud: this.evaluatieForm.value.checkC_Ana_06_Bijkomend,
            checkC_Ana_08_ErkendLab: this.evaluatieForm.value.checkC_Ana_08_ErkendLab,
            checkC_Ana_09_CMA: this.evaluatieForm.value.checkC_Ana_09_CMA,
            checkC_Ana_10_Cert: this.evaluatieForm.value.checkC_Ana_10_Cert,

            checkC_PosBesluit_01_Strat: this.evaluatieForm.value.checkC_PosBesluit_01_Strat,


            // Evaluatie
            checkD_Eval_01_NormPrm: this.evaluatieForm.value.checkD_Eval_01_NormPrm,
            checkD_Eval_02_NtNormPrm: this.evaluatieForm.value.checkD_Eval_02_NtNormPrm,
            checkD_Eval_03_pH: this.evaluatieForm.value.checkD_Eval_03_pH,
            checkD_Eval_04_toetsTbl: this.evaluatieForm.value.checkD_Eval_04_toetsTbl,
            checkD_Eval_05_toetsing: this.evaluatieForm.value.checkD_Eval_05_toetsing,
            checkD_Eval_06_ToetsMeth: this.evaluatieForm.value.checkD_Eval_06_ToetsMeth,
            checkD_Eval_07_Herbruik: this.evaluatieForm.value.checkD_Eval_07_Herbruik,
            checkD_Eval_08_BodemVrmdMat: this.evaluatieForm.value.checkD_Eval_08_BodemVrmdMat,
            //Correcte afbakening kadastrale werkzone(s)
            //checkD_Eval_Kad_00: this.tvJoinedData.checkD_Eval_Kad_00,  // field not shown on the old view
            //checkD_Eval_Kad_01_Perceel: this.tvJoinedData.checkD_Eval_Kad_01_Perceel,  // field not shown on the old view
            checkD_Eval_Kad_02_heterog: this.evaluatieForm.value.checkD_Eval_Kad_02_heterog,
            checkD_Eval_Kad_03_Homog: this.evaluatieForm.value.checkD_Eval_Kad_03_Homog,
            //Bijkomende richtlijnen opgesteld
            checkD_Eval_Rich_01_Grondwater: this.evaluatieForm.value.checkD_Eval_Rich_01_Grondwater,
            checkD_Eval_Rich_02_Bemaling: this.evaluatieForm.value.checkD_Eval_Rich_02_Bemaling,
            checkD_Eval_Rich_03_Blootst: this.evaluatieForm.value.checkD_Eval_Rich_03_Blootst,
            checkD_Eval_Rich_04_TssTijds: this.evaluatieForm.value.checkD_Eval_Rich_04_TssTijds,
            checkD_Eval_11_PosBesluit: this.evaluatieForm.value.checkD_Eval_11_PosBesluit,

            checkE_ZoneringsPlan: this.evaluatieForm.value.checkE_ZoneringsPlan,
            checkF_OpmetingsTabel: this.evaluatieForm.value.checkF_OpmetingsTabel,

            checkConclusion: this.evaluatieForm.value.checkConclusion,

            // New fields 2019
            checkB_His_03B_Lozing: this.evaluatieForm.value.checkB_His_03B_Lozing,
            checkB_Typ_02B_VlaremaVolume: this.evaluatieForm.value.checkB_Typ_02B_VlaremaVolume,
            checkC_Mon_01B_MinStrategie: this.evaluatieForm.value.checkC_Mon_01B_MinStrategie,
            checkC_Ana_04B_PCB: this.evaluatieForm.value.checkC_Ana_04B_PCB,
            checkC_Ana_05B_SAPWater: this.evaluatieForm.value.checkC_Ana_05B_SAPWater,
            checkD_Eval_09_Asbest: this.evaluatieForm.value.checkD_Eval_09_Asbest,
            checkD_Eval_Kad_04_Waterloop: this.evaluatieForm.value.checkD_Eval_Kad_04_Waterloop,
            checkD_Eval_Rich_05_Milieu: this.evaluatieForm.value.checkD_Eval_Rich_05_Milieu,
            checkD_Eval_Rich_06_Voorw: this.evaluatieForm.value.checkD_Eval_Rich_06_Voorw,
            checkG_VolTabel: this.evaluatieForm.value.checkG_VolTabel,
            checkH_FotoRep: this.evaluatieForm.value.checkH_FotoRep,
            checkI_Bouwplan: this.evaluatieForm.value.checkI_Bouwplan,
            checkJ_VolBerek: this.evaluatieForm.value.checkJ_VolBerek,
            checkK_InfoVorige: this.evaluatieForm.value.checkK_InfoVorige,
            checkL_Delfstof: this.evaluatieForm.value.checkL_Delfstof,
            checkL_GeologischeBeschrijvingID: this.evaluatieForm.value.checkL_GeologischeBeschrijvingID,
            checkL_PrimaireOppDelfstofID: this.evaluatieForm.value.checkL_PrimaireOppDelfstofID,
            checkL_Volume: this.evaluatieForm.value.checkL_Volume,
            checkC_Typ_06_OnbevLineair: this.evaluatieForm.value.checkC_Typ_06_OnbevLineair,
            checkC_Typ_07_OnbevBreder: this.evaluatieForm.value.checkC_Typ_07_OnbevBreder,
            checkC_Typ_08_OnbevGracht: this.evaluatieForm.value.checkC_Typ_08_OnbevGracht,
            checkC_Typ_09_BevaarMonster: this.evaluatieForm.value.checkC_Typ_09_BevaarMonster,
        } as sgsTvJoinedData;
        return evaluatieFormValues;
    }
}


