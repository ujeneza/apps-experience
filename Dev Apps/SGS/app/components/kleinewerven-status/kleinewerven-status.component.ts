import { Component, OnInit, ViewChild } from "@angular/core";
import { GeneralScripts } from "../scripts/general.scripts";
import { ToastrService } from "ngx-toastr";
import { FormGroup, FormBuilder } from "@angular/forms";
import { HttpKleineWervenService } from "../services/http-kleinewerven.service";
import { appLabels } from "../scripts/appLabels";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { Router } from "@angular/router";
import { IKWGridItem } from "../scripts/interfaces.scripts";
import { DatePipe } from "@angular/common";

@Component({
    selector: "kleinewerven-status",
    templateUrl: "./kleinewerven-status.component.html",
    styleUrls: ["./kleinewerven-status.component.css"]
})

export class KleineWervenStatusComponent extends GeneralScripts implements OnInit {

    constructor(private readonly toastr: ToastrService, private readonly router: Router, private readonly fb: FormBuilder, private readonly kwService: HttpKleineWervenService) {
        super(toastr);
    }

    @ViewChild(DatatableComponent) grid: DatatableComponent;

    appLabels = appLabels;

    statusForm: FormGroup;

    statusList: any[];
    rows: IKWGridItem[] = [];
    temp: IKWGridItem[] = [];

    ngOnInit(): void {
        this.statusForm = this.fb.group({
            ID: [""],
            StatusID: [""],
            Ref: [""],
            GW: [""],
            TPT: [""],
            Herk: [""],
            Best: [""],
            Dtm: [""],
            Status: [""]
        });

        this.loadStatusDropdownList();

        this.kwService.getMeldingList()
            .then((data: IKWGridItem[]) => {
                this.temp = [...data];
                this.rows = data;
            }).catch(error => {
                this.handleError(error);
            });
    }

    loadStatusDropdownList() {
        this.kwService.getStatusList()
            .then((list: any[]) => {
                this.statusList = list;
                this.summaries = list;
            }).catch(error => {
                this.handleError(error);
            });
    }

    public summaries: any[];

    statusChanged(value: string) {
        this.statusForm.patchValue({ Status: (value === "-1" ? "" : value) });
        this.filter();
    }

    filter() {
        const id = this.statusForm.controls.ID.value;
        const ref = this.statusForm.controls.Ref.value.toLowerCase();
        const gw = this.statusForm.controls.GW.value.toLowerCase();
        const tpt = this.statusForm.controls.TPT.value.toLowerCase();
        const herk = this.statusForm.controls.Herk.value.toLowerCase();
        const best = this.statusForm.controls.Best.value.toLowerCase();
        const dtm = this.statusForm.controls.Dtm.value;
        const status = this.statusForm.controls.Status.value.toLowerCase();
        const dp = new DatePipe("en-US");

        // filter our data
        const temp = this.temp.filter(function (d: IKWGridItem) {

            var SDtm: string | null = null;
            if (dtm > "") { SDtm = dp.transform(d.startDatum, "dd/MM/yyyy"); }

            return ((d.meldingID != null && d.meldingID != undefined && d.meldingID.toString().indexOf(id) !== -1) || !id)
                && ((d.klantReferentie != null && d.klantReferentie != undefined && d.klantReferentie.toLowerCase().indexOf(ref) !== -1) || !ref)
                && ((d.grondwerker != null && d.grondwerker != undefined && d.grondwerker.toLowerCase().indexOf(gw) !== -1) || !gw)
                && ((d.transporteur != null && d.transporteur != undefined && d.transporteur.toLowerCase().indexOf(tpt) !== -1) || !tpt)
                && ((d.herkomst != null && d.herkomst != undefined && d.herkomst.toLowerCase().indexOf(herk) !== -1) || !herk)
                && ((d.bestemming != null && d.bestemming != undefined && d.bestemming.toLowerCase().indexOf(best) !== -1) || !best)
                && ((d.status != null && d.status != undefined && d.status.toLowerCase().indexOf(status) !== -1) || !status)
                && (!dtm || (SDtm != null && SDtm.indexOf(dtm) !== -1));
        });

        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.grid.offset = 0;
    }

    onActivate(event: any) {
        if (event.type === "dblclick") {
            this.linkToKW(event.row["meldingID"]);
        }
    }

    linkToKW(id: number) {
        this.router.navigate(["/kleinewerven-detail", id]);
    }
}