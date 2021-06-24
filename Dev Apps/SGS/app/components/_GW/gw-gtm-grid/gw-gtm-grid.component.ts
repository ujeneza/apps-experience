import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { GeneralScripts } from "../../scripts/general.scripts";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { HttpTVService } from "../../services/http-tv.service";
import { HttpGTMService } from "../../services/http-gtm.service";
import { ISgsTVByStatus, ISgsGTMStatusListItem, ISgsGTMStatus } from "../../scripts/sgsInterfaces.scripts";
import { SgsTVZoekVelden, SgsGTMZoekVelden } from "../../scripts/sgsClasses.scripts";
import { appLabels } from "../../scripts/appLabels";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { AuthenticationService } from "../../services/authentication.service";
import { DatePipe } from "@angular/common";
import { ITVStatusDefinition } from "../../scripts/interfaces.scripts";

@Component({
    selector: "gw-gtm-grid",
    templateUrl: "./gw-gtm-grid.component.html",
    styleUrls: ["./gw-gtm-grid.component.css"]
})

export class gwGTMGridComponent extends GeneralScripts implements OnInit {
    appLabels = appLabels;

    StatusDropdownList: ISgsGTMStatusListItem[] = null;
    StatusList: ISgsGTMStatus[] = null;
    rows: ISgsGTMStatus[] = null;
    temp: any[] = [];
    @ViewChild(DatatableComponent) table: DatatableComponent;

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

    StsForm: FormGroup;

    constructor(private readonly _toastr: ToastrService,
        private readonly fb: FormBuilder,
        private readonly httpGTM: HttpGTMService,
        private readonly httpTV: HttpTVService,
        private readonly router: Router,
        private readonly route: ActivatedRoute,
        private readonly auth: AuthenticationService) {
        super(_toastr);
    }

    ngOnInit(): void {

        this.StsForm = this.fb.group({
            sts: [-1],
            gtmId: [""],
            klant: [""],
            ref: [""],
            herk: [""],
            topCgr: [""],
            indieningsDatum: [""]
        });

        this.loadStatusDropdownList();
    }

    loadStatusDropdownList() {
        this.StatusDropdownList = [
            { "id": 0, "omschrijving": "Alles" },
            { "id": 1, "omschrijving": "Afgerond" },
            { "id": 2, "omschrijving": "Nog niet afgerond" }
        ];

        this.StsForm.patchValue({ sts: (this.NieuweAanvragen ? '2' : '2') });
        this.statusChanged();
    }

    statusChanged() {
        switch (this.StsForm.controls.sts.value) {
            case "-1": // Selecteer
                this.StatusId = -1;
                this.rows = [];
                this.temp = [];
                break;
            //case "0": // Nieuwe Aanvragen 
            //    this.StatusId = 1;
            //    this.NieuweAanvragen = true;
            //    this.loadStatusList();
            //    break;
            default: // Status
                this.StatusId = this.StsForm.controls.sts.value;
                this.NieuweAanvragen = false;
                this.loadStatusList();
                break;
        }
    }

    loadStatusList() {
        this.httpGTM.gwStatusList(this.StatusId, -1).toPromise()
            .then((lst: ISgsGTMStatus[]) => {
                this.rows = lst;
                this.temp = [...lst];
                this.clearFormFields();
            });
    }

    onExtendedSearch(zoekVelden: SgsGTMZoekVelden) {
        this.httpGTM.gwZoekList(zoekVelden).toPromise()
            .then((lst: ISgsGTMStatus[]) => {
                this.rows = lst;
                this.temp = [...lst];
                this.clearFormFields();
            });
    }

    clearFormFields() {
        // Clear all Form Values except sts
        this.StsForm.patchValue({
            technischVerslagID: "",
            naam: "",
            gemeenteOnderzoekslocatie: "",
            indieningsDatum: "",
            statusDatum: "",
            indieningswijze: "",
            gefactureerd: ""
        });
    }

    filter() {
        const gtmId = this.StsForm.controls.gtmId.value;
        const klant = this.StsForm.controls.klant.value.toLowerCase();
        const ref = this.StsForm.controls.ref.value.toLowerCase();
        const herk = this.StsForm.controls.herk.value.toLowerCase();
        const topCgr = this.StsForm.controls.topCgr.value.toLowerCase();
        const indieningsDatum = this.StsForm.controls.indieningsDatum.value;
        const dp = new DatePipe("en-US");

        // filter our data
        const temp = this.temp.filter((row: ISgsGTMStatus) => {
            var indieningsDatumAsString: string | null = null;
            if (indieningsDatum > "") { indieningsDatumAsString = dp.transform(row.indieningsDatum, "dd/MM/yyyy"); }

            return (!gtmId || (!this.isNullOrUndefined(row.grondtransportmeldingId.toString()) && row.grondtransportmeldingId.toString().indexOf(gtmId) !== -1))
                && (!klant || (!this.isNullOrUndefined(row.klant.toLowerCase()) && row.klant.toLowerCase().indexOf(klant) !== -1))
                && (!ref || (!this.isNullOrUndefined(row.klantKenmerk.toLowerCase()) && row.klantKenmerk.toLowerCase().indexOf(ref) !== -1))
                && (!herk || (!this.isNullOrUndefined(row.herkomst.toLowerCase()) && row.herkomst.toLowerCase().indexOf(herk) !== -1))
                && (!topCgr || (!this.isNullOrUndefined(row.topCgr.toLowerCase()) && row.topCgr.toLowerCase().indexOf(topCgr) !== -1))
                && (!indieningsDatum || (!this.isNullOrUndefined(indieningsDatumAsString) && indieningsDatumAsString.indexOf(indieningsDatum) !== -1))
        });

        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }

    getRowClass(row: any) {
        return "ibtn";
    }

    onActivate(event: any) {
        if (event.type === "dblclick") {
            this.linkToGTM(event.row["grondtransportmeldingId"]);
        }
    }

    linkToGTM(gtmId: number) {
        this.router.navigate(["/gw/gtm-edit", gtmId]);  
    }

    deleteGTM(gtmId: number) {
    }

    ToggleExtendedSearch() {
        this.isExtendedSearch = !this.isExtendedSearch;
    }
}