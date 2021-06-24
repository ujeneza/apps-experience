import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { GeneralScripts } from "../../scripts/general.scripts";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { HttpKlantService } from "../../services/http-klant.service";
import { appLabels } from "../../scripts/appLabels";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { AuthenticationService, UserRoles } from "../../services/authentication.service";
import { DatePipe } from "@angular/common";
import { ISgsStatusGridItem, ISgsKlantStatusListItem } from "../../scripts/sgsInterfaces.scripts";
import { SgsKlantZoekVelden } from "../../scripts/sgsClasses.scripts";

@Component({
    selector: "gw-klant-grid",
    templateUrl: "./gw-klant-grid.component.html",
    styleUrls: ["./gw-klant-grid.component.css"]
})

export class gwKlantGridComponent extends GeneralScripts implements OnInit {
    appLabels = appLabels;

    StatusDropdownList: ISgsKlantStatusListItem[] = null;
    StatusList: ISgsStatusGridItem[] = null;
    rows: ISgsStatusGridItem[] = null;
    temp: any[] = [];
    @ViewChild(DatatableComponent) table: DatatableComponent;

    @Input() title = "";
    StatusId: number = -1;
    TypeId: number = 0;
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
        private readonly httpKlant: HttpKlantService,
        private readonly router: Router,
        private readonly route: ActivatedRoute,
        private readonly auth: AuthenticationService) {
        super(_toastr);
    }

    ngOnInit(): void {

        this.StsForm = this.fb.group({
            sts: [3],
            type: [0],
            id: [""],
            naam: [""],
            code: [""],
            inschrijvingsDatum: [""],
            datumActief: [""],
            gefactureerd: [""],
            startDatum: [""]
        });

        this.httpKlant.sgsKlantStatusListItems().toPromise()
            .then((lst: ISgsKlantStatusListItem[]) => {
                if (lst != null && lst != undefined) {
                    this.StatusDropdownList = [...lst];
                }
                this.StsForm.patchValue({ sts: (this.NieuweAanvragen ? '1' : '3') });
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
            default: // Status
                this.loadStatusList();
                break;
        }
    }

    loadStatusList() {
        this.TypeId = this.StsForm.controls.type.value;
        this.httpKlant.sgsStatusGrid(this.StatusId, this.TypeId).toPromise()
            .then((lst: ISgsStatusGridItem[]) => {
                this.rows = lst;
                this.temp = [...lst];
                this.clearFormFields();
            });
    }

    onExtendedSearch(zoekVelden: SgsKlantZoekVelden) {
        this.httpKlant.gwZoekList(zoekVelden).toPromise()
            .then((lst: ISgsStatusGridItem[]) => {
                this.rows = lst;
                this.temp = [...lst];
                this.clearFormFields();
            });
    }

    clearFormFields() {
        // Clear all Form Values except sts
        this.StsForm.patchValue({
            id: "",
            naam: "",
            code: "",
            inschrijvingsDatum: "",
            datumActief: "",
            gefactureerd: "",
            startDatum: ""
        });
    }

    filter() {
        const id = this.StsForm.controls.id.value;
        const naam = this.StsForm.controls.naam.value;
        const code = this.StsForm.controls.code.value;
        const inschrijvingsDatum = this.StsForm.controls.inschrijvingsDatum.value;
        const datumActief = this.StsForm.controls.datumActief.value;
        const gefactureerd = this.StsForm.controls.gefactureerd.value;
        const startDatum = this.StsForm.controls.startDatum.value;
        const dp = new DatePipe("en-US");

        // filter our data
        const temp = this.temp.filter((row: any) => {
            var inschrijvingsDatumAsString: string | null = null;
            if (inschrijvingsDatum > "") { inschrijvingsDatumAsString = dp.transform(row.inschrijvingsDatum, "dd/MM/yyyy"); }
            var datumActiefAsString: string | null = null;
            if (datumActief > "") { datumActiefAsString = dp.transform(row.datumActief, "dd/MM/yyyy"); }
            var startDatumAsString: string | null = null;
            if (startDatum > "") { startDatumAsString = dp.transform(row.facturatieStartDatum, "dd/MM/yyyy"); }

            return (!id || (!this.isNullOrUndefined(row.klantID) && row.klantID.toString().indexOf(id) !== -1))
                && (!naam || (!this.isNullOrUndefined(row.naam) && row.naam.toLowerCase().indexOf(naam) !== -1))
                && (!code || (!this.isNullOrUndefined(row.beroepsorganisatiecode) && row.beroepsorganisatiecode.toLowerCase().indexOf(code) !== -1))
                && (!inschrijvingsDatum || (!this.isNullOrUndefined(inschrijvingsDatumAsString) && inschrijvingsDatumAsString.indexOf(inschrijvingsDatum) !== -1))
                && (!datumActief || (!this.isNullOrUndefined(datumActiefAsString) && datumActiefAsString.indexOf(datumActief) !== -1))
                && (!gefactureerd || (!this.isNullOrUndefined(row.gefactureerd) && row.gefactureerd.toLowerCase().indexOf(gefactureerd) !== -1))
                && (!startDatum || (!this.isNullOrUndefined(startDatumAsString) && startDatumAsString.indexOf(startDatum) !== -1))
        });

        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }

    onActivate(event: any) {
        if (event.type === "dblclick") {
            this.linkToKlant(event.row["klantID"]);
        }
    }

    getRowClass(row: any) {
        return "ibtn";
    }

    linkToKlant(Id: number) {
        this.router.navigate(["/gw/klant-edit/",Id]); 
    }

    ToggleExtendedSearch() {
        this.isExtendedSearch = !this.isExtendedSearch;
    }
}

export enum FilterTypes {
    All = 0,
    TopCgr = 1,
    DOP = 2
}
