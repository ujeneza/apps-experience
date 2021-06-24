import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { GeneralScripts } from "../../scripts/general.scripts";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { HttpBBRService } from "../../services/http-bbr.service";
import { IBBRStatus, IBBRStatusGridRecord } from "../../scripts/interfaces.scripts";
import { ISgsBBRItem } from "../../scripts/sgsInterfaces.scripts";
import { appLabels } from "../../scripts/appLabels";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { AuthenticationService, UserRoles } from "../../services/authentication.service";
import { DatePipe } from "@angular/common";
import { SgsBBRZoekVelden } from "../../scripts/sgsClasses.scripts";

@Component({
    selector: "gw-bbr-grid",
    templateUrl: "./gw-bbr-grid.component.html",
    styleUrls: ["./gw-bbr-grid.component.css"]
})

export class gwBBRGridComponent extends GeneralScripts implements OnInit {
    appLabels = appLabels;


    StatusDropdownList: IBBRStatus[] = null;
    StatusList: ISgsBBRItem[] = null;
    rows: ISgsBBRItem[] = null;
    temp: any[] = [];
    @ViewChild(DatatableComponent) table: DatatableComponent;

    @Input() title = "";
    StatusId: number = 4;
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
        private readonly httpBBR: HttpBBRService,
        private readonly router: Router,
        private readonly route: ActivatedRoute,
        private readonly auth: AuthenticationService) {
        super(_toastr);
    }

    ngOnInit(): void {

        this.StsForm = this.fb.group({
            sts: [-1],
            bbrNummer: [""],
            naam: [""],
            code: [""],
            gem: [""],
            aanvraagDatum: [""],
            statusDatum: [""],
            indieningswijze: [""],
            gefactureerd: [""],
            bbrSts: [""],
            hoev: [""],
            startDatum: [""]
        });

        this.httpBBR.StatusDefinitionList("BBR", this.NieuweAanvragen).toPromise()
            .then((lst: IBBRStatus[]) => {
                if (lst != null && lst != undefined) {
                    this.StatusDropdownList = [...lst];
                }
                this.StsForm.patchValue({ sts: (this.NieuweAanvragen ? '0' : '4') });
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
        this.httpBBR.sgsStatusList(this.StatusId, "T").toPromise()
            .then((lst: ISgsBBRItem[]) => {
                this.rows = lst;
                this.temp = [...lst];
                this.clearFormFields();
            });
    }

    onExtendedSearch(zoekVelden: SgsBBRZoekVelden) {
        this.httpBBR.gwZoekList(zoekVelden).toPromise()
            .then((lst: ISgsBBRItem[]) => {
                this.rows = lst;
                this.temp = [...lst];
                this.clearFormFields();
            });
    }

    clearFormFields() {
        // Clear all Form Values except sts
        this.StsForm.patchValue({
            bbrNummer: "",
            naam: "",
            code: "",
            gem: "",
            aanvraagDatum: "",
            statusDatum: "",
            indieningswijze: "",
            gefactureerd: "",
            bbrSts: "",
            hoev: "",
            startDatum: ""
        });
    }

    filter() {
        const bbrNummer = this.StsForm.controls.bbrNummer.value;
        const naam = this.StsForm.controls.naam.value;
        const code = this.StsForm.controls.code.value;
        const gem = this.StsForm.controls.gem.value;
        const aanvraagDatum = this.StsForm.controls.aanvraagDatum.value;
        const statusDatum = this.StsForm.controls.statusDatum.value;
        const indieningswijze = this.StsForm.controls.indieningswijze.value;
        const gefactureerd = this.StsForm.controls.gefactureerd.value;
        const bbrSts = this.StsForm.controls.bbrSts.value;
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

            return (!bbrNummer || (!this.isNullOrUndefined(row.bbrNummer) && row.bbrNummer.toString().indexOf(bbrNummer) !== -1))
                && (!naam || (!this.isNullOrUndefined(row.naam) && row.naam.toLowerCase().indexOf(naam) !== -1))
                && (!code || (!this.isNullOrUndefined(row.beroepsorganisatiecode) && row.beroepsorganisatiecode.toLowerCase().indexOf(code) !== -1))
                && (!gem || (!this.isNullOrUndefined(row.plaats) && row.plaats.toLowerCase().indexOf(gem) !== -1))
                && (!aanvraagDatum || (!this.isNullOrUndefined(aanvraagDatumAsString) && aanvraagDatumAsString.indexOf(aanvraagDatum) !== -1))
                && (!statusDatum || (!this.isNullOrUndefined(statusDatumAsString) && statusDatumAsString.indexOf(statusDatum) !== -1))
                && (!indieningswijze || (!this.isNullOrUndefined(row.indieningswijze) && row.indieningswijze.toLowerCase().indexOf(indieningswijze) !== -1))
                && (!gefactureerd || (!this.isNullOrUndefined(row.gefactureerd) && row.gefactureerd.toLowerCase().indexOf(gefactureerd) !== -1))
                && (!bbrSts || (!this.isNullOrUndefined(row.status) && row.status.toLowerCase().indexOf(bbrSts) !== -1))
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
            this.linkToBBR(event.row["bbrNummer"]);
        }
    }

    getRowClass(row: any) {
        return "ibtn";
    }

    linkToBBR(bbrId: number) {
        this.router.navigate(["/gw/gvt-edit", bbrId]); 
        //this.router.navigate(["/bodembeheerrapport-detail"], { queryParams: { bbrId: bbrId, bbr: "Final" } });  // => GWBeheer/BBREdit.aspx?BodembeheerRapportID={0} (oude GW)
    }

    deleteBBR(bbrId: number) {
        //
    }

    ToggleExtendedSearch() {
        this.isExtendedSearch = !this.isExtendedSearch;
    }
}