import { Component, Inject, ViewChild, ViewEncapsulation, OnInit, EventEmitter, Output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

import { appLabels } from "../../scripts/appLabels";
import { GeneralScripts } from "../../scripts/general.scripts";

import { DomSanitizer } from "@angular/platform-browser";
import { HttpKlantService } from "../../services/http-klant.service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { SgsKlantZoekVelden } from "../../scripts/sgsClasses.scripts";

@Component({
    selector: "gw-klant-zoekuitgebreid",
    templateUrl: "./gw-klant-zoekuitgebreid.component.html",
    styleUrls: ["./gw-klant-zoekuitgebreid.component.css"],
    encapsulation: ViewEncapsulation.None
})
export class gwKlantZoekUitgebreidComponent extends GeneralScripts implements OnInit {
    appLabels = appLabels;
    zkForm: FormGroup;

    bestBedrijfList: any[];
    zoekVelden: SgsKlantZoekVelden = null;

    @Output() searching: EventEmitter<SgsKlantZoekVelden> = new EventEmitter<SgsKlantZoekVelden>();

    constructor(private readonly _toastr: ToastrService,
                private readonly router: Router,
                private readonly fb: FormBuilder,
                private readonly httpKlant: HttpKlantService,
                @Inject("BASE_URL") private readonly _baseUrl: string,
                private readonly route: ActivatedRoute,
                private readonly _sanitizer: DomSanitizer) {
        super(_toastr);
    }

    ngOnInit(): void {
        this.zkForm = this.fb.group({
            KlantId: [""],
            Organisatie: [""],
            Voornaam: [""],
            Achternaam: [""],
            Straat: [""],
            Gemeente: [""]
        });
    }

    raiseSearch() {
        this.zoekVelden = new SgsKlantZoekVelden();
        this.zoekVelden.klantId = this.zkForm.controls.KlantId.value;
        this.zoekVelden.organisatie = this.zkForm.controls.Organisatie.value;
        this.zoekVelden.voornaam = this.zkForm.controls.Voornaam.value;
        this.zoekVelden.achternaam = this.zkForm.controls.Achternaam.value;
        this.zoekVelden.straat = this.zkForm.controls.Straat.value;
        this.zoekVelden.gemeente = this.zkForm.controls.Gemeente.value;

        this.searching.emit(this.zoekVelden);
    }
}