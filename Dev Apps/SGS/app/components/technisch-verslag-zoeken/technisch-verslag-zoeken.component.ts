import { Component, OnInit, Inject, ViewChild, Output, EventEmitter } from "@angular/core";
import { GeneralScripts } from "../scripts/general.scripts";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpTVService } from "../services/http-tv.service";
import { ITVSearch } from "../scripts/interfaces.scripts";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { ToastrService } from "ngx-toastr";
import { appLabels } from "../scripts/appLabels";
import * as $ from "jquery";

@Component({
    selector: "technisch-verslag-zoeken",
    templateUrl: "./technisch-verslag-zoeken.component.html",
    styleUrls: ["./technisch-verslag-zoeken.component.css"]
})
export class TechnischVerslagZoekenComponent extends GeneralScripts implements OnInit {
    appLabels = appLabels;

    showNoDataFound = false;
    showHowToSelect = false;
    SearchForm: FormGroup;
    tvFoundRows: any[];
    tvFoundColumns: any[];

    @ViewChild(DatatableComponent) table: DatatableComponent;

    @Output() selected: EventEmitter<number> = new EventEmitter<number>();
    constructor(private readonly _httpTV: HttpTVService, @Inject("BASE_URL") private readonly _baseUrl: string, private readonly fb: FormBuilder, private readonly _toastr: ToastrService) {
        super(_toastr);
    }

    ngOnInit(): void {

        $(document).on("keydown", e => {
            if (e.which === 8 && !$(e.target).is("input, textarea")) {
                e.preventDefault();
            }
        });

        this.SearchForm = this.fb.group({
            SearchKlant: ["", [Validators.required, Validators.maxLength(50), Validators.minLength(3)]],
            SearchStraat: ["", [Validators.required, Validators.maxLength(40), Validators.minLength(3)]],
            SearchGemeente: ["", [Validators.required, Validators.maxLength(40), Validators.minLength(3)]]
        });
        this.tvFoundColumns = [
            { name: "Code", prop: "technischVerslagID", flexGrow: 2, headerClass: "NgxHeader" },
            { name: "Klant", prop: "naam", flexGrow: 5, headerClass: "NgxHeader" },
            { name: "Straat", flexGrow: 5, headerClass: "NgxHeader" },
            { name: "Gemeente", flexGrow: 5, headerClass: "NgxHeader" },
            { name: "Studiebureau", prop: "ebsd", flexGrow: 5, headerClass: "NgxHeader" }
        ];
    }

    getRowClass(row: any) {
        return "ibtn";
    }

    SearchFormIsValid(): boolean {
        return this.SearchForm.valid;
    }

    searchTV() {
        const kl = this.SearchForm.controls.SearchKlant.value;
        const st = this.SearchForm.controls.SearchStraat.value;
        const gm = this.SearchForm.controls.SearchGemeente.value;

        this.showNoDataFound = false;
        this.showHowToSelect = false;

        this._httpTV.SearchList(kl, st, gm).toPromise()
            .then((response: ITVSearch[]) => {
                this.showNoDataFound = response.length === 0;
                this.showHowToSelect = response.length > 0;
                this.tvFoundRows = response;
            })
            .catch(error => {
                this.handleError(error);                
            });
    }

    TVselect(event: any) {
        if (event.type === "dblclick") {
            this.SearchForm.patchValue({
                SearchKlant: "",
                SearchStraat: "",
                SearchGemeente: ""
            });
            this.tvFoundRows = [];
            this.selected.emit(event.row.technischVerslagID);
            (document.getElementById("closeTVzoek") as HTMLElement).click();
        }
    }
}