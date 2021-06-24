import { Component, OnInit, Inject, ViewChild, Output, EventEmitter } from "@angular/core";
import { GeneralScripts } from "../../../scripts/general.scripts";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpTVService } from "../../../services/http-tv.service";
import { ITVSearch } from "../../../scripts/interfaces.scripts";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { ToastrService } from "ngx-toastr";
import { appLabels } from "../../../scripts/appLabels";
import * as $ from "jquery";

@Component({
    selector: "gw-modal-puin",
    templateUrl: "./gw-modal-puin.component.html",
    styleUrls: ["./gw-modal-puin.component.css"]
})
export class gwModalPuinComponent extends GeneralScripts implements OnInit {
    appLabels = appLabels;

    showNoDataFound = false;
    showHowToSelect = false;

    data: Uitspraak[];


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

        this.data = [
            { id: 1, name: "Op basis van voorstudie, terreinbezoek en veldwaarnemingen heeft de erkende bodemsaneringsdeskundige besloten dat asbestanalyses niet noodzakelijk zijn." },
            { id: 2, name: "De erkende bodemsaneringsdeskundige heeft asbestanalyses uitgevoerd waaruit is gebleken dat de concentratie in de grove fractie (concentratie van het S monster (= fractie > 20mm), " },
            { id: 3, name: "De bemonsteringen i.k.v. het technisch verslag dateren van vóór het in voege treden van de Code van Goede Praktijk Gebruik bodemmaterialen - Leidraad asbest. De erkende " },
            { id: 4, name: "De bemonsteringen i.k.v. het technisch verslag dateren van vóór het in voege treden van de Code van Goede Praktijk Gebruik bodemmaterialen - Leidraad asbest. De erkende " },
            { id: 5, name: "De staalname i.k.v. het technisch verslag vond plaats na zeving. Het afgezeefde puin werd i.k.v. het technisch verslag afzonderlijk beoordeeld waarna de erkende " },
            { id: 6, name: "De staalname i.k.v. het technisch verslag vond plaats vóór zeving. De partij werd in zijn totaliteit beoordeeld waarna de erkende bodemsaneringsdeskundige heeft besloten dat er geen asbestverdacht materiaal kon worden vastgesteld." },
            { id: 7, name: "De staalname i.k.v. het technisch verslag vond plaats vóór zeving. De partij werd in zijn totaliteit beoordeeld waarna besloten werd dat er geen asbestverdacht materiaal kon worden vastgesteld." },
            { id: 8, name: "De staalname i.k.v. het technisch verslag vond plaats na zeving. Het afgezeefde puin werd i.k.v. het technisch verslag afzonderlijk beoordeeld waarna besloten werd dat er geen " },

        ]

    }


    getRowClass(row: any) {
        return "ibtn";
    }



    uitspraakSelect(event: any) {
        if (event.type === "dblclick") {
            this.selected.emit(event);
            (document.getElementById("closeTVzoek") as HTMLElement).click();
        } else {
            this.selected.emit(event);
        }
    }




}

export interface Uitspraak {
    id: number;
    name: string;
}