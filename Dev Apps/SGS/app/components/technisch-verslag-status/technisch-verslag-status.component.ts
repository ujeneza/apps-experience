import { Component, ViewChild, ViewEncapsulation, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

import { ToastrService } from "ngx-toastr";

import { appLabels } from "../scripts/appLabels";
import { GeneralScripts } from "../scripts/general.scripts";
import { HttpTVService } from "../services/http-tv.service";
import { ITVStatus, ITVStatusDefinition } from "../scripts/interfaces.scripts";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { DatePipe } from "@angular/common";

@Component({
    selector: "technisch-verslag-status",
    templateUrl: "./technisch-verslag-status.component.html",
    styleUrls: ['./technisch-verslag-status.component.css'],

    // You must set ViewEncapsulation to None, otherwise the ngx-datatable will not find your local css styles, but instead search for styles globally
    encapsulation: ViewEncapsulation.None
})
/** technisch-verslag-status component*/
export class TechnischVerslagStatusComponent extends GeneralScripts implements OnInit {
    appLabels = appLabels;

    /** technisch-verslag-status ctor */
    StsForm: FormGroup;

    StatusDropdownList: ITVStatusDefinition[] = null;

    // ngx-datatable related
    rows: ITVStatus[] = [];
    temp: ITVStatus[] = [];

    @ViewChild(DatatableComponent) table: DatatableComponent;


    constructor(private readonly router: Router, private readonly toastr: ToastrService, private readonly fb: FormBuilder, private readonly _httpTV: HttpTVService) {
        super(toastr);
    }

    ngOnInit(): void {
        this.StsForm = this.fb.group({
            Nr: [""],
            Kenmerk: [""],
            Ref: [""],
            Lig: [""],
            Dtm: [""],
            Sts: [""],
            stsDDL: ["-1"]
        });

        this.loadStatusDropdownList();

        this._httpTV.StatusList().toPromise()
            .then((data: ITVStatus[]) => {
                // ngx-datatable related
                this.temp = [...data];
                this.rows = data;
            }).catch(error => {
                this.handleError(error);
            });
    }

    loadStatusDropdownList() {
        this._httpTV.StatusDefinitionList(false)
            .subscribe((lst: ITVStatusDefinition[]) => {
                if (lst != null && lst != undefined) {
                    this.StatusDropdownList = [...lst];
                }
            });
    }

    statusChanged() {
        this.StsForm.patchValue({ Sts: (this.StsForm.controls.stsDDL.value == -1 ? '' : this.StsForm.controls.stsDDL.value) });
        this.Filter();
    }

    Filter() {
        const nr = this.StsForm.controls.Nr.value;
        const kenmerk = this.StsForm.controls.Kenmerk.value.toLowerCase();
        const ref = this.StsForm.controls.Ref.value.toLowerCase();
        const lig = this.StsForm.controls.Lig.value.toLowerCase();
        const dtm = this.StsForm.controls.Dtm.value;
        const sts = this.StsForm.controls.Sts.value.toLowerCase();
        const dp = new DatePipe("en-US");

        // filter our data
        const temp = this.temp.filter(function (d: ITVStatus) {

            var SDtm: string | null = null;
            if (dtm > "") { SDtm = dp.transform(d.indieningsDatum, "dd/MM/yyyy"); }

            return (!nr || (d.technischVerslagID != null && d.technischVerslagID.toString().indexOf(nr) !== -1))
                && ((d.kenmerk != null && d.kenmerk != undefined && d.kenmerk.toLowerCase().indexOf(kenmerk) !== -1) || !kenmerk)
                && ((d.factuurReferentieKlant != null && d.factuurReferentieKlant != undefined && d.factuurReferentieKlant.toLowerCase().indexOf(ref) !== -1) || !ref)
                && ((d.ligging != null && d.ligging != undefined && d.ligging.toLowerCase().indexOf(lig) !== -1) || !lig)
                && ((d.status != null && d.status != undefined && d.status.toLowerCase().indexOf(sts) !== -1) || !sts)
                && (!dtm || (SDtm != null && SDtm.indexOf(dtm) !== -1));
        });

        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }

    onActivate(event: any) {
        if (event.type === "dblclick") {
            this.linkTo(event.row["technischVerslagID"]);
        }
    }

    getRowClass(row: ITVStatus) {
        return "ibtn";
    }

    getCellClass({ row, column, value }: any): any {
        return {
            'NgxCell': value === "test"
        };
    }

    linkTo(id: number) {
        this.router.navigate(["../technisch-verslag-detail", id]);
    }

}