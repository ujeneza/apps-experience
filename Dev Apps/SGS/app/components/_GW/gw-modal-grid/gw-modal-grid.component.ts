import { Component, OnInit, Inject, ViewChild, Output, EventEmitter } from "@angular/core";
import { GeneralScripts } from "../../scripts/general.scripts";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpTVService } from "../../services/http-tv.service";
import { ITVSearch } from "../../scripts/interfaces.scripts";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { ToastrService } from "ngx-toastr";
import { appLabels } from "../../scripts/appLabels";
import * as $ from "jquery";

@Component({
    selector: "gw-modal-grid",
    templateUrl: "./gw-modal-grid.component.html",
    styleUrls: ["./gw-modal-grid.component.css"]
})
export class gwModalGridComponent extends GeneralScripts implements OnInit {
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



    gtmSelect(event: any) {
            this.selected.emit(event.row.technischVerslagID);
            (document.getElementById("closeTVzoek") as HTMLElement).click();
    }
}