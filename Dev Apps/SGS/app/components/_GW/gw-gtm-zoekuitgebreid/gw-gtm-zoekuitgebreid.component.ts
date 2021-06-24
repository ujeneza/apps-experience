import { Component, Inject, ViewChild, ViewEncapsulation, OnInit, EventEmitter, Output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

import { appLabels } from "../../scripts/appLabels";
import { GeneralScripts } from "../../scripts/general.scripts";

import { DomSanitizer } from "@angular/platform-browser";
import { HttpKlantService } from "../../services/http-klant.service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { BsLocaleService } from "ngx-bootstrap/datepicker";
import { SgsGTMZoekVelden } from "../../scripts/sgsClasses.scripts";

@Component({
    selector: "gw-gtm-zoekuitgebreid",
    templateUrl: "./gw-gtm-zoekuitgebreid.component.html",
    styleUrls: ["./gw-gtm-zoekuitgebreid.component.css"],
    encapsulation: ViewEncapsulation.None
})
export class gwGTMZoekUitgebreidComponent extends GeneralScripts implements OnInit {
    appLabels = appLabels;
    zkForm: FormGroup;

    bestBedrijfList: any[];
    zoekVelden: SgsGTMZoekVelden = null;

    @Output() searching: EventEmitter<SgsGTMZoekVelden> = new EventEmitter<SgsGTMZoekVelden>();

    constructor(private readonly _toastr: ToastrService,
                private readonly router: Router,
                private readonly fb: FormBuilder,
                private readonly _localeService: BsLocaleService,
                private readonly httpKlant: HttpKlantService,
                @Inject("BASE_URL") private readonly _baseUrl: string,
                private readonly route: ActivatedRoute,
                private readonly _sanitizer: DomSanitizer) {
        super(_toastr);
    }

    ngOnInit(): void {
        // Needed configuration for the bsDatepicker to accept dd/MM/yyyy formatting
        this._localeService.use("bootstrap-locale-nlbe");

        this.zkForm = this.fb.group({
            GtmId: [""],
            datVan: [""],
            datTot: [""],
            Straat: [""],
            Gemeente: [""],
            TopId: ["-1"]
        });

        this.httpKlant.TOPList().toPromise()
            .then((lst: any[]) => {
                if (lst != null && lst != undefined) {
                    this.bestBedrijfList = lst;
                }
            });
    }

    raiseSearch() {
        this.zoekVelden = new SgsGTMZoekVelden();
        this.zoekVelden.gtmId = this.zkForm.controls.GtmId.value;
        this.zoekVelden.datVan = this.zkForm.controls.datVan.value;
        this.zoekVelden.datTot = this.zkForm.controls.datTot.value;
        this.zoekVelden.straat = this.zkForm.controls.Straat.value;
        this.zoekVelden.gemeente = this.zkForm.controls.Gemeente.value;
        this.zoekVelden.topId = this.zkForm.controls.TopId.value;

        this.searching.emit(this.zoekVelden);
    }
}