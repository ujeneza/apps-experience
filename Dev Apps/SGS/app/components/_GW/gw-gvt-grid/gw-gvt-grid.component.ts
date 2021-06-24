import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { GeneralScripts } from "../../scripts/general.scripts";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { HttpGVTService } from "../../services/http-gvt.service";
import { IGVTStatus } from "../../scripts/interfaces.scripts";
import { ISgsGVTItem } from "../../scripts/sgsInterfaces.scripts";
import { SgsGVTZoekVelden } from "../../scripts/sgsClasses.scripts";
import { appLabels } from "../../scripts/appLabels";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { DatePipe } from "@angular/common";

@Component({
    selector: "gw-gvt-grid",
    templateUrl: "./gw-gvt-grid.component.html",
    styleUrls: ["./gw-gvt-grid.component.css"]
})

export class gwGVTGridComponent extends GeneralScripts implements OnInit {
    appLabels = appLabels;


    StatusDropdownList: IGVTStatus[] = null;
    StatusList: ISgsGVTItem[] = null;
    rows: ISgsGVTItem[] = null;
    temp: any[] = [];
    @ViewChild(DatatableComponent) table: DatatableComponent;

    @Input() title = "";
    StatusId: number = 1;
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

    StsForm: FormGroup;

    constructor(private readonly _toastr: ToastrService,
        private readonly fb: FormBuilder,
        private readonly httpGVT: HttpGVTService,
        private readonly router: Router,
        private readonly route: ActivatedRoute) {
        super(_toastr);
    }

    ngOnInit(): void {

        this.StsForm = this.fb.group({
            sts: [-1],
            gvtNummer: [""],
            naam: [""],
            code: [""],
            gem: [""],
            aanvraagDatum: [""],
            statusDatum: [""],
            indieningswijze: [""],
            gefactureerd: [""],
            gvtSts: [""],
            hoev: [""],
            startDatum: [""]
        });

        this.httpGVT.StatusDefinitionList("GVT", this.NieuweAanvragen).toPromise()
            .then((lst: IGVTStatus[]) => {
                if (lst != null && lst != undefined) {
                    this.StatusDropdownList = [...lst];
                }
                this.StsForm.patchValue({ sts: (this.NieuweAanvragen ? '0' : '1') });
                this.statusChanged();
            });
    }

    statusChanged() {
        this.StatusId = this.StsForm.controls.sts.value;
        switch (this.StsForm.controls.sts.value) {
            case "-1": // Selecteer
                this.rows = [];
                this.temp = [];
                break;
            case "0": // Nieuwe Aanvragen 
                this.NieuweAanvragen = true;
                this.loadStatusList();
                break;
            default: // Status
                this.NieuweAanvragen = false;
                this.loadStatusList();
                break;
        }
    }

    loadStatusList() {
        this.httpGVT.sgsStatusList(this.StatusId, "T").toPromise()
            .then((lst: ISgsGVTItem[]) => {
                this.rows = lst;
                this.temp = [...lst];
                this.clearFormFields();
            });
    }

    onExtendedSearch(zoekVelden: SgsGVTZoekVelden) {
        this.httpGVT.gwZoekList(zoekVelden).toPromise()
            .then((lst: ISgsGVTItem[]) => {
                this.rows = lst;
                this.temp = [...lst];
                this.clearFormFields();
            });
    }

    clearFormFields() {
        // Clear all Form Values except sts
        this.StsForm.patchValue({
            gvtNummer: "",
            naam: "",
            code: "",
            gem: "",
            aanvraagDatum: "",
            statusDatum: "",
            indieningswijze: "",
            gefactureerd: "",
            gvtSts: "",
            hoev: "",
            startDatum: ""
        });
    }

    filter() {
        const gvtNummer = this.StsForm.controls.gvtNummer.value;
        const naam = this.StsForm.controls.naam.value;
        const code = this.StsForm.controls.code.value;
        const gem = this.StsForm.controls.gem.value;
        const aanvraagDatum = this.StsForm.controls.aanvraagDatum.value;
        const statusDatum = this.StsForm.controls.statusDatum.value;
        const indieningswijze = this.StsForm.controls.indieningswijze.value;
        const gefactureerd = this.StsForm.controls.gefactureerd.value;
        const gvtSts = this.StsForm.controls.gvtSts.value;
        const hoev = this.StsForm.controls.hoev.value;
        const startDatum = this.StsForm.controls.startDatum.value;
        const dp = new DatePipe("en-US");

        // filter our data
        const temp = this.temp.filter((row: any) => {
            var aanvraagDatumAsString: string | null = null;
            if (aanvraagDatum > "") { aanvraagDatumAsString = dp.transform(row.aanvraagDatum, "dd/MM/yyyy"); }
            var statusDatumAsString: string | null = null;
            if (statusDatum > "") { statusDatumAsString = dp.transform(row.statusDatum, "dd/MM/yyyy"); }
            var startDatumAsString: string | null = null;
            if (startDatum > "") { startDatumAsString = dp.transform(row.startDatum, "dd/MM/yyyy"); }

            return (!gvtNummer || (!this.isNullOrUndefined(row.bbrNummer) && row.bbrNummer.toString().indexOf(gvtNummer) !== -1))
                && (!naam || (!this.isNullOrUndefined(row.naam) && row.naam.toLowerCase().indexOf(naam) !== -1))
                && (!code || (!this.isNullOrUndefined(row.beroepsorganisatiecode) && row.beroepsorganisatiecode.toLowerCase().indexOf(code) !== -1))
                && (!gem || (!this.isNullOrUndefined(row.plaats) && row.plaats.toLowerCase().indexOf(gem) !== -1))
                && (!aanvraagDatum || (!this.isNullOrUndefined(aanvraagDatumAsString) && aanvraagDatumAsString.indexOf(aanvraagDatum) !== -1))
                && (!statusDatum || (!this.isNullOrUndefined(statusDatumAsString) && statusDatumAsString.indexOf(statusDatum) !== -1))
                && (!indieningswijze || (!this.isNullOrUndefined(row.indieningswijze) && row.indieningswijze.toLowerCase().indexOf(indieningswijze) !== -1))
                && (!gefactureerd || (!this.isNullOrUndefined(row.gefactureerd) && row.gefactureerd.toLowerCase().indexOf(gefactureerd) !== -1))
                && (!gvtSts || (!this.isNullOrUndefined(row.status) && row.status.toLowerCase().indexOf(gvtSts) !== -1))
                && (!hoev || (!this.isNullOrUndefined(row.hoeveelheid) && row.hoeveelheid.toString().indexOf(hoev) !== -1))
                && (!startDatum || (!this.isNullOrUndefined(startDatumAsString) && startDatumAsString.indexOf(startDatum) !== -1))
        });

        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }

    onActivate(event: any) {
        if (event.type === "dblclick") {
            this.linkToGVT(event.row["gvtNummer"]);
        }
    }

    getRowClass(row: any) {
        return "ibtn";
    }

    linkToGVT(gvtId: number) {
        this.router.navigate(["/gw/gvt-edit", gvtId]); 
    }

    deleteGVT(gvtId: number) {
        //
    }

    ToggleExtendedSearch() {
        this.isExtendedSearch = !this.isExtendedSearch;
    }
}