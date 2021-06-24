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
import { ISgsStatusGridItem, ISgsGTMVolumes, sgsTvJoinedData, SgsGvtJoinedData } from "../../../scripts/sgsInterfaces.scripts";
import { DomSanitizer } from "@angular/platform-browser";
import { GeopuntScripts } from "../../../scripts/geopunt.scripts";
import { FilterTypes } from "../../gw-klant-grid/gw-klant-grid.component";
import { Directive, ElementRef, Injectable, Injector, Renderer2, forwardRef } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subject } from "rxjs/Subject";





@Component({
    selector: "gw-gvt-studie",
    templateUrl: "./gw-gvt-studie.component.html",
    styleUrls: ["./gw-gvt-studie.component.css"],
    providers: [DatePipe]

})

export class gwGvtStudieComponent extends GeneralScripts implements OnInit, OnChanges {
    gvtStudieForm: FormGroup;

    @Input() data: SgsGvtJoinedData;
    @Output() studieFormValues: EventEmitter<SgsGvtJoinedData> = new EventEmitter<SgsGvtJoinedData>();

    gvtJoinedData: SgsGvtJoinedData;
 



    constructor(
        private readonly _toastr: ToastrService,
        private readonly fb: FormBuilder,
        private readonly httpKlant: HttpKlantService,
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
            this.gvtJoinedData = changes.data.currentValue;
            this.initialiseForm();
            this.loadEntity();
        }


    }


    ngOnInit(): void {
        this.localeService.use("bootstrap-locale-nlbe");
        this.formOnInit();

    }

    formOnInit() {
        this.initialiseForm();
    }

    initialiseForm() {
        this.gvtStudieForm = this.fb.group({
            studieOntvangendeGrondOK: [""],
            studieDetail1: [""],
            studieDetail2: [""],
            studieDetail3: [""],
            studieDetail4: [""],
            studieDetail5: [""],
            studieDetail6: [""],
            studieDetail7: [""],
            studieDetail8: [""],
            studieDetail9: [""],
            studieDetail10: [""],
            studieDetail11: [""],
            studieDetail12: [""],
            studieDetail13: [""],
            studieDetail14: [""],
            studieDetail15: [""],
            studieDetail16: [""],
            studieDetail17: [""],
        });

        this.initialiseValueChangeHandlers();
    }


    loadEntity() {
        if (!this.gvtJoinedData) return;
        this.gvtStudieForm.patchValue({
            studieOntvangendeGrondOK: this.gvtJoinedData.studieOntvangendeGrondOK,
            studieDetail1: this.gvtJoinedData.studieDetail1,
            studieDetail2: this.gvtJoinedData.studieDetail2,
            studieDetail3: this.gvtJoinedData.studieDetail3,
            studieDetail4: this.gvtJoinedData.studieDetail4,
            studieDetail5: this.gvtJoinedData.studieDetail5,
            studieDetail6: this.gvtJoinedData.studieDetail6,
            studieDetail7: this.gvtJoinedData.studieDetail7,
            studieDetail8: this.gvtJoinedData.studieDetail8,
            studieDetail9: this.gvtJoinedData.studieDetail9,
            studieDetail10: this.gvtJoinedData.studieDetail10,
            studieDetail11: this.gvtJoinedData.studieDetail11,
            studieDetail12: this.gvtJoinedData.studieDetail12,
            studieDetail13: this.gvtJoinedData.studieDetail13,
            studieDetail14: this.gvtJoinedData.studieDetail14,
            studieDetail15: this.gvtJoinedData.studieDetail15,
            studieDetail16: this.gvtJoinedData.studieDetail16,
            studieDetail17: this.gvtJoinedData.studieDetail17,
        })




    }

    // business rules and errors handling

    initialiseValueChangeHandlers() {
        this.gvtStudieForm.get("studieDetail17").valueChanges.subscribe(item => {
            this.gvtStudieForm.patchValue({
                studieOntvangendeGrondOK: item
            })
        });

        this.gvtStudieForm.valueChanges.debounceTime(2000).subscribe(item => {
            this.studieFormValues.emit(item);
        });
    }




    getStudieData() {
      
    }

   


}


