import { Component, OnInit, Inject, ViewChild } from "@angular/core";
import { HttpBBRService } from "../services/http-bbr.service";

import { appLabels } from "../scripts/appLabels";
import { GeneralScripts } from "../scripts/general.scripts";

import { ToastrService } from "ngx-toastr";
import { Router, ActivatedRoute } from "@angular/router";
import { IGvtBestemming } from "../scripts/interfaces.scripts";
import { FormGroup, FormBuilder } from "@angular/forms";
import { DatatableComponent } from "@swimlane/ngx-datatable";

@Component({
    selector: "grondverzettoelating-aanvragen",
    templateUrl: "./grondverzettoelating-aanvragen.component.html",
    styleUrls: ["./grondverzettoelating-aanvragen.component.css"]
})
/** grondverzettoelating-aanvragen component*/
export class GrondverzettoelatingAanvragenComponent extends GeneralScripts implements OnInit {
    commonLabels = appLabels;
    showGrid: boolean = false;
    showLoadingGrid: boolean = false;

    TvId: number | null = null;
    OriginPage: string = "nav";

    bestaandeBestemmingForm: FormGroup;

    // ngx-datatable related
    @ViewChild(DatatableComponent) table: DatatableComponent;
    rows: IGvtBestemming[] = [];
    temp: IGvtBestemming[] = [];

    constructor(
        private readonly httpBBR: HttpBBRService,
        private readonly _toastr: ToastrService,
        private readonly router: Router,
        private readonly route: ActivatedRoute,
        private readonly fb: FormBuilder) {
        super(_toastr);
    }

    ngOnInit(): void {
        if (this.route.snapshot.params["TvId"]) this.TvId = this.route.snapshot.params["TvId"];
        if (this.TvId == null) {
            if (this.route.snapshot.queryParams["TvId"]) this.TvId = this.route.snapshot.queryParams["TvId"];
        }
        if (this.route.snapshot.queryParams["OP"]) this.OriginPage = this.route.snapshot.queryParams["OP"];

        this.bestaandeBestemmingForm = this.fb.group({
            adres: [""],
            plaats: [""],
            lambert: [""]
        });
    }

    loadGrid() {
        this.showGrid = false;
        this.showLoadingGrid = true;
        this.loadBestemmingList();
    }

    loadBestemmingList() {
        this.httpBBR.BestemmingBbrList().toPromise()
            .then((data: IGvtBestemming[]) => {
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
        const adres = this.bestaandeBestemmingForm.controls.adres.value;
        const plaats = this.bestaandeBestemmingForm.controls.plaats.value;
        const lambert = this.bestaandeBestemmingForm.controls.lambert.value;

        // filter our data
        const temp = this.temp.filter((row: any) => {
            return (!adres || (!this.isNullOrUndefined(row.adres) && row.adres.toString().indexOf(adres) !== -1))
                && (!plaats || (!this.isNullOrUndefined(row.plaats) && row.plaats.toLowerCase().indexOf(plaats) !== -1))
                && (!lambert || (!this.isNullOrUndefined(row.lambert) && row.lambert.toLowerCase().indexOf(lambert) !== -1));
        });

        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }

    onActivate(event: any) {
        if (event.type === "dblclick") {
            this.routeTo(2, event.row["bestemmingID"]);
        }
    }

    routeTo(GVTType: number, id?: number) {
        if (id == undefined || id == null || id === 0) {
            (!this.TvId == null) ? this.router.navigate(["/grondverzettoelating-indienen", GVTType], { queryParams: { TvId: this.TvId, OP: this.OriginPage } }) : this.router.navigate(["/grondverzettoelating-indienen", GVTType], { queryParams: { OP: this.OriginPage } });
        } else {
            (!this.TvId == null) ? this.router.navigate(["/grondverzettoelating-indienen", GVTType, id], { queryParams: { TvId: this.TvId, OP: this.OriginPage } }) : this.router.navigate(["/grondverzettoelating-indienen", GVTType, id], { queryParams: { OP: this.OriginPage } });
        }
    }
}