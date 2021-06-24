import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { GeneralScripts } from "../../scripts/general.scripts";
import { ToastrService } from "ngx-toastr";
import { FormGroup, FormBuilder } from "@angular/forms";
import { HttpKleineWervenService } from "../../services/http-kleinewerven.service";
import { appLabels } from "../../scripts/appLabels";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { Router } from "@angular/router";
import { IKWGridItem } from "../../scripts/interfaces.scripts";
import { DatePipe } from "@angular/common";
import { SgsKWZoekVelden } from "../../scripts/sgsClasses.scripts";

@Component({
    selector: "gw-kw-grid",
    templateUrl: "./gw-kw-grid.component.html",
    styleUrls: ["./gw-kw-grid.component.css"]
})

export class gwKWGridComponent extends GeneralScripts implements OnInit {
    appLabels = appLabels;

    statusDropdownList: any[];
    statusList: IKWGridItem[];
    rows: IKWGridItem[] = [];
    temp: IKWGridItem[] = [];
    @ViewChild(DatatableComponent) grid: DatatableComponent;

    @Input() title = "";
    StatusId: number = -1;
    isExtendedSearch: boolean = false;

    forNieuweAanvragen = true;
    @Input('NieuweAanvragen')
    get NieuweAanvragen(): boolean {
        return this.forNieuweAanvragen;
    }
    set NieuweAanvragen(value: boolean) {
        this.forNieuweAanvragen = "" + value !== "false";
    }

    useSearch = true;
    @Input('ExtendedSearch')
    get ExtendedSearch(): boolean {
        return this.useSearch;
    }
    set ExtendedSearch(value: boolean) {
        this.useSearch = "" + value !== "false";
    }

    canDelete = false;
    @Input('AllowDelete')
    get AllowDelete(): boolean {
        return this.canDelete;
    }
    set AllowDelete(value: boolean) {
        this.canDelete = "" + value !== "false";
    }

    statusForm: FormGroup;

    constructor(private readonly toastr: ToastrService, private readonly router: Router, private readonly fb: FormBuilder, private readonly kwService: HttpKleineWervenService) {
        super(toastr);
    }

    ngOnInit(): void {
        this.statusForm = this.fb.group({
            sts: ["-1"],
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

        this.kwService.getStatusList()
            .then((lst: any[]) => {
                if (lst != null && lst != undefined) {
                    this.statusDropdownList = [...lst];
                }
                this.statusForm.patchValue({ sts: (this.NieuweAanvragen ? '0' : '-1') });
                this.statusChanged();
            }).catch(error => {
                this.handleError(error);
            });
    }

    statusChanged() {
        switch (this.statusForm.controls.sts.value) {
            case "-1": // Selecteer
                this.StatusId = -1;
                this.rows = [];
                this.temp = [];
                break;
            default: // Status
                this.StatusId = this.statusForm.controls.sts.value;
                this.loadStatusList();
                break;
        }
    }

    loadStatusList() {
        this.kwService.gwMeldingListByStatus(this.StatusId)
            .then((data: IKWGridItem[]) => {
                this.temp = [...data];
                this.rows = data;
                this.clearFormFields();
            }).catch(error => {
                this.handleError(error);
            });
    }

    clearFormFields() {
        // Clear all Form Values except sts
        this.statusForm.patchValue({
            ID: "",
            StatusID: "",
            Ref: "",
            GW: "",
            TPT: "",
            Herk: "",
            Best: "",
            Dtm: "",
            Status: ""
        });
    }

    ToggleExtendedSearch() {
        this.isExtendedSearch = !this.isExtendedSearch;
    }

    onExtendedSearch(zoekVelden: SgsKWZoekVelden) {
        this.kwService.gwZoekList(zoekVelden).toPromise()
            .then((lst: IKWGridItem[]) => {
                this.rows = lst;
                this.temp = [...lst];
                this.clearFormFields();
            });
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
       // this.router.navigate(["/kleinewerven-detail", id]);
        this.router.navigate(["/gw/kw-edit", id]);
    }
}