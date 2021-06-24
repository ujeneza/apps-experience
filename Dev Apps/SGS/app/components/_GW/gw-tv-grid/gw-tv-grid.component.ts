import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { GeneralScripts } from "../../scripts/general.scripts";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { HttpTVService } from "../../services/http-tv.service";
import { ISgsTVByStatus } from "../../scripts/sgsInterfaces.scripts";
import { SgsTVZoekVelden } from "../../scripts/sgsClasses.scripts";
import { appLabels } from "../../scripts/appLabels";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { AuthenticationService } from "../../services/authentication.service";
import { DatePipe } from "@angular/common";
import { ITVStatusDefinition } from "../../scripts/interfaces.scripts";

@Component({
    selector: "gw-tv-grid",
    templateUrl: "./gw-tv-grid.component.html",
    styleUrls: ["./gw-tv-grid.component.css"]
})

export class gwTVGridComponent extends GeneralScripts implements OnInit {
    appLabels = appLabels;

    StatusDropdownList: ITVStatusDefinition[] = null;
    StatusList: ISgsTVByStatus[] = null;
    rows: ISgsTVByStatus[] = null;
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

    constructor(private readonly _toastr: ToastrService, private readonly fb: FormBuilder, private readonly httpTV: HttpTVService, private readonly router: Router, private readonly route: ActivatedRoute, private readonly auth: AuthenticationService) {
        super(_toastr);
    }

    ngOnInit(): void {

        this.StsForm = this.fb.group({
            sts: [-1],
            technischVerslagID: [""],
            naam: [""],
            gemeenteOnderzoekslocatie: [""],
            indieningsDatum: [""],
            statusDatum: [""],
            indieningswijze: [""],
            gefactureerd: [""]
        });

        this.httpTV.StatusDefinitionList(true)
            .subscribe((lst: ITVStatusDefinition[]) => {
                if (lst != null && lst != undefined) {
                    this.StatusDropdownList = [...lst];
                }
                this.StsForm.patchValue({ sts: (this.NieuweAanvragen ? '0' : '1') });
                this.statusChanged();
            });
    }

    statusChanged() {
        switch (this.StsForm.controls.sts.value) {
            case "-1": // Selecteer
                this.StatusId = -1;
                this.rows = [];
                this.temp = [];
                break;
            case "0": // Nieuwe Aanvragen 
                this.StatusId = 1;
                this.NieuweAanvragen = true;
                this.loadStatusList();
                break;
            default: // Status
                this.StatusId = this.StsForm.controls.sts.value;
                this.NieuweAanvragen = false;
                this.loadStatusList();
                break;
        }
    }

    loadStatusList() {
        this.httpTV.gwStatusList(this.StatusId, this.NieuweAanvragen).toPromise()
            .then((lst: ISgsTVByStatus[]) => {
                this.rows = lst;
                this.temp = [...lst];
                this.clearFormFields();
            });
    }

    onExtendedSearch(zoekVelden: SgsTVZoekVelden) {
        this.httpTV.gwZoekList(zoekVelden).toPromise()
            .then((lst: ISgsTVByStatus[]) => {
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
        const technischVerslagID = this.StsForm.controls.technischVerslagID.value;
        const naam = this.StsForm.controls.naam.value.toLowerCase();
        const GOL = this.StsForm.controls.gemeenteOnderzoekslocatie.value.toLowerCase();
        const indieningsDatum = this.StsForm.controls.indieningsDatum.value;
        const statusDatum = this.StsForm.controls.statusDatum.value;
        const indieningswijze = this.StsForm.controls.indieningswijze.value.toLowerCase();
        const gefactureerd = this.StsForm.controls.gefactureerd.value.toLowerCase();
        const dp = new DatePipe("en-US");

        // filter our data
        const temp = this.temp.filter((row: ISgsTVByStatus) => {
            var indieningsDatumAsString: string | null = null;
            if (indieningsDatum > "") { indieningsDatumAsString = dp.transform(row.indieningsDatum, "dd/MM/yyyy"); }
            var statusDatumAsString: string | null = null;
            if (statusDatum > "") { statusDatumAsString = dp.transform(row.statusDatum, "dd/MM/yyyy"); }

            return (!technischVerslagID || (!this.isNullOrUndefined(row.technischVerslagID.toString()) && row.technischVerslagID.toString().indexOf(technischVerslagID) !== -1))
                && (!naam || (!this.isNullOrUndefined(row.naam.toLowerCase()) && row.naam.toLowerCase().indexOf(naam) !== -1))
                && (!GOL || (!this.isNullOrUndefined(row.gemeenteOnderzoekslocatie.toLowerCase()) && row.gemeenteOnderzoekslocatie.toLowerCase().indexOf(GOL) !== -1))
                && (!indieningsDatum || (!this.isNullOrUndefined(indieningsDatumAsString) && indieningsDatumAsString.indexOf(indieningsDatum) !== -1))
                && (!statusDatum || (!this.isNullOrUndefined(statusDatumAsString) && statusDatumAsString.indexOf(statusDatum) !== -1))
                && (!indieningswijze || (!this.isNullOrUndefined(row.indieningswijze.toLowerCase()) && row.indieningswijze.toLowerCase().indexOf(indieningswijze) !== -1))
                && (!gefactureerd || (!this.isNullOrUndefined(row.gefactureerd.toLowerCase()) && row.gefactureerd.toLowerCase().indexOf(gefactureerd) !== -1))
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
            this.linkToTV(event.row["technischVerslagID"], event.row["isEvaluatieVlarebo2008"]);
        }
    }

    linkToTV(tvId: number, isVlarebo2008: boolean | null) {
        if (isVlarebo2008) {
            this.router.navigate(["gw/tv-edit", tvId]);  // => GWBeheer/TVEdit2008.aspx (oude GW)
        }
        else
        {
            this.router.navigate(["gw/tv-edit", tvId]);  // => GWBeheer/TVEditDefault.aspx (oude GW)
        }
    }

    deleteTV(tvId: number) {
    }

    ToggleExtendedSearch() {
        this.isExtendedSearch = !this.isExtendedSearch;
    }
}