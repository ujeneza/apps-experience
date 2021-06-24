import { Component, OnInit, Inject, ViewChild } from "@angular/core";
import { HttpPuinService } from "../services/http-puin.service";

import { appLabels } from "../scripts/appLabels";
import { GeneralScripts } from "../scripts/general.scripts";

import { ToastrService } from "ngx-toastr";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { DatatableComponent } from "@swimlane/ngx-datatable";

export enum PuinAanvragenTypes {
    MobieleBrekerOpDeWerf = "0",
    NieuweLocatie = "1",
    BestaandeLocatie = "2"
}

@Component({
    selector: "puin-lmrp-aanvragen",
    templateUrl: "./puin-lmrp-aanvragen.component.html",
    styleUrls: ["./puin-lmrp-aanvragen.component.css"]
})
/** puin-lmrp-aanvragen component*/
export class PuinLmrpAanvragenComponent extends GeneralScripts implements OnInit {
    puinAanvragenTypes = PuinAanvragenTypes;
    commonLabels = appLabels;
    showGrid: boolean = false;
    showLoadingGrid: boolean = false;

    bestaandeBestemmingForm: FormGroup;

    // ngx-datatable related
    @ViewChild(DatatableComponent) table: DatatableComponent;
    rows = new Array<any>();
    temp = new Array<any>();

    constructor(
        private readonly toastr: ToastrService,
        private readonly router: Router,
        private readonly route: ActivatedRoute,
        private readonly httpPuinService: HttpPuinService,
        private readonly fb: FormBuilder) {
        super(toastr);
    }

    ngOnInit(): void {
        this.bestaandeBestemmingForm = this.fb.group({
            afzetReferentie: [""],
            adres1: [""],
            gemeente: [""]
        });
    }

    loadGrid() {
        this.showGrid = false;
        this.showLoadingGrid = true;
        this.loadBestemmingList();
    }

    loadBestemmingList() {
        this.httpPuinService.getBestemmingsList()
            .then((data: any[]) => {
                this.rows = [...data];
                this.temp = [...data];
                this.showLoadingGrid = false;
                this.showGrid = true;
            })
            .catch(error => {
                    this.handleError(error);
                }
            );
    }

    filter() {
        const afzetReferentie = this.bestaandeBestemmingForm.controls.afzetReferentie.value;
        const adres1 = this.bestaandeBestemmingForm.controls.adres1.value;
        const gemeente = this.bestaandeBestemmingForm.controls.gemeente.value;

        // filter our data
        const temp = this.temp.filter((row: any) => {
            return (!afzetReferentie || (!this.isNullOrUndefined(row.afzetReferentie) && row.afzetReferentie.toString().indexOf(afzetReferentie) !== -1))
                && (!adres1 || (!this.isNullOrUndefined(row.adres1) && row.adres1.toLowerCase().indexOf(adres1) !== -1))
                && (!gemeente || (!this.isNullOrUndefined(row.gemeente) && row.gemeente.toLowerCase().indexOf(gemeente) !== -1));
        });

        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }

    onActivate(event: any) {
        if (event.type === "dblclick") {
            this.routeTo(PuinAanvragenTypes.BestaandeLocatie, event.row["id"]);
        }
    }

    routeTo(aanvraagType: PuinAanvragenTypes, id?: number) {
        if (id == undefined || id == null || id === 0) {
            this.router.navigate(["/puin-lmrp-indienen", aanvraagType]);
        } else {
            this.router.navigate(["/puin-lmrp-indienen", aanvraagType, id]);
        }
    }
}