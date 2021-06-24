import { Component, Inject, ViewChild, ViewEncapsulation, OnInit, EventEmitter, Output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

import { appLabels } from "../../scripts/appLabels";
import { GeneralScripts } from "../../scripts/general.scripts";

import { DomSanitizer } from "@angular/platform-browser";
import { HttpBBRService } from "../../services/http-bbr.service";
import { HttpDossierService } from "../../services/http-dossier.service";
import { HttpKlantService } from "../../services/http-klant.service";
import { HttpTVService } from "../../services/http-tv.service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { BsLocaleService } from "ngx-bootstrap/datepicker";
import { SgsBBRZoekVelden } from "../../scripts/sgsClasses.scripts";
import { ISgsKlantComboListItem, ISgsDossierComboListItem, ISgsBestAardListItem } from "../../scripts/sgsInterfaces.scripts";
import { ITVStatusDefinition } from "../../scripts/interfaces.scripts";

@Component({
    selector: "gw-bbr-zoekuitgebreid",
    templateUrl: "./gw-bbr-zoekuitgebreid.component.html",
    styleUrls: ["./gw-bbr-zoekuitgebreid.component.css"],
    encapsulation: ViewEncapsulation.None
})
export class gwBBRZoekUitgebreidComponent extends GeneralScripts implements OnInit {
    appLabels = appLabels;
    zkForm: FormGroup;

    KlantListItems: ISgsKlantComboListItem[] = null;
    DossierBeheerderListItems: ISgsDossierComboListItem[] = null;
    BestemmingsaardListItems: ISgsBestAardListItem[] = null;
    StatusListItems: ITVStatusDefinition[] = null;

    zoekVelden: SgsBBRZoekVelden = null;
    @Output() searching: EventEmitter<SgsBBRZoekVelden> = new EventEmitter<SgsBBRZoekVelden>();

    constructor(private readonly _toastr: ToastrService,
        private readonly router: Router,
        private readonly fb: FormBuilder,
        private readonly _localeService: BsLocaleService,
        private readonly httpBbr: HttpBBRService,
        private readonly httpDossier: HttpDossierService,
        private readonly httpKlant: HttpKlantService,
        private readonly httpTV: HttpTVService,
        @Inject("BASE_URL") private readonly _baseUrl: string,
        private readonly route: ActivatedRoute,
        private readonly _sanitizer: DomSanitizer) {
        super(_toastr);
    }

    ngOnInit(): void {
        // Needed configuration for the bsDatepicker to accept dd/MM/yyyy formatting
        this._localeService.use("bootstrap-locale-nlbe");

        this.zkForm = this.fb.group({
            Code: [""],
            TvId: [""],
            KlantId: ["-1"],
            DossierBeheerderId: ["-1"],
            StatusId: ["-1"],
            BestemmingsaardId: ["-1"],
            Gefactureerd: ["-1"],
            Straat: [""],
            Postcode: [""],
            Gemeente: [""],
            LambertX: [""],
            LambertY: [""],
            LambertRange: ["-1"],
            VertrekStraat: [""],
            VertrekGemeente: [""],
            datVan: [""],
            datTot: [""]
        });

        this.loadDropdowns();
    }

    loadDropdowns() {
        this.httpKlant.sgsComboListItems()
            .subscribe((lst: ISgsKlantComboListItem[]) => {
                if (lst != null && lst != undefined) {
                    this.KlantListItems = [...lst];
                }
            });

        this.httpDossier.sgsComboListItems()
            .subscribe((lst: ISgsDossierComboListItem[]) => {
                if (lst != null && lst != undefined) {
                    this.DossierBeheerderListItems = [...lst];
                }
            });

        this.httpBbr.sgsBestemmingsaardListItems()
            .subscribe((lst: ISgsBestAardListItem[]) => {
                if (lst != null && lst != undefined) {
                    this.BestemmingsaardListItems = [...lst];
                }
            });

        this.httpTV.StatusDefinitionList(false)
            .subscribe((lst: ITVStatusDefinition[]) => {
                if (lst != null && lst != undefined) {
                    this.StatusListItems = [...lst];
                }
            });
    }

    raiseSearch() {
        this.zoekVelden = new SgsBBRZoekVelden();
        this.zoekVelden.code = this.zkForm.controls.Code.value;
        this.zoekVelden.tvId = this.zkForm.controls.TvId.value;
        this.zoekVelden.klantId = this.zkForm.controls.KlantId.value;
        this.zoekVelden.dossierBeheerderId = this.zkForm.controls.DossierBeheerderId.value;
        this.zoekVelden.statusId = this.zkForm.controls.StatusId.value;
        this.zoekVelden.bestemmingsaardId = this.zkForm.controls.BestemmingsaardId.value;
        this.zoekVelden.gefactureerd = this.zkForm.controls.Gefactureerd.value;
        this.zoekVelden.straat = this.zkForm.controls.Straat.value;
        this.zoekVelden.postcode = this.zkForm.controls.Postcode.value;
        this.zoekVelden.gemeente = this.zkForm.controls.Gemeente.value;
        this.zoekVelden.lambertX = this.zkForm.controls.LambertX.value;
        this.zoekVelden.lambertY = this.zkForm.controls.LambertY.value;
        this.zoekVelden.lambertRange = this.zkForm.controls.LambertRange.value;
        this.zoekVelden.vertrekStraat = this.zkForm.controls.VertrekStraat.value;
        this.zoekVelden.vertrekGemeente = this.zkForm.controls.VertrekGemeente.value;
        this.zoekVelden.datVan = this.zkForm.controls.datVan.value;
        this.zoekVelden.datTot = this.zkForm.controls.datTot.value;

        this.searching.emit(this.zoekVelden);
    }
}