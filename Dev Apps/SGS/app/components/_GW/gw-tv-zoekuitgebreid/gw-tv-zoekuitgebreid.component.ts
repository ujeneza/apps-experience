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
import { SgsTVZoekVelden } from "../../scripts/sgsClasses.scripts";
import { ISgsKlantComboListItem, ISgsDossierComboListItem } from "../../scripts/sgsInterfaces.scripts";
import { IBBRIndieningsWijze, ITVStatusDefinition } from "../../scripts/interfaces.scripts";

@Component({
    selector: "gw-tv-zoekuitgebreid",
    templateUrl: "./gw-tv-zoekuitgebreid.component.html",
    styleUrls: ["./gw-tv-zoekuitgebreid.component.css"],
    encapsulation: ViewEncapsulation.None
})
export class gwTVZoekUitgebreidComponent extends GeneralScripts implements OnInit {
    appLabels = appLabels;
    zkForm: FormGroup;

    IndienerListItems: ISgsKlantComboListItem[] = null;
    IndieningsWijzeListItems: IBBRIndieningsWijze[] = null;
    DossierBeheerderListItems: ISgsDossierComboListItem[] = null;
    StatusListItems: ITVStatusDefinition[] = null;

    zoekVelden: SgsTVZoekVelden = null;

    @Output() searching: EventEmitter<SgsTVZoekVelden> = new EventEmitter<SgsTVZoekVelden>();

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
            Indiener: ["-1"],
            FactuurRef: [""],
            Adres: [""],
            Gemeente: [""],
            Titel: [""],
            Beschrijving: [""],
            Referentie: [""],
            Overname: [""],
            Samengevoegd: [""],
            EBSD: [""],
            IndieningsWijze: ["-1"],
            Datum: [""],
            Status: ["-1"],
            Gefactureerd: ["-1"],
            DossierBeheerder: ["-1"]
        });

        this.loadDropdowns();
    }

    loadDropdowns() {
        this.httpKlant.sgsComboListItems()
            .subscribe((lst: ISgsKlantComboListItem[]) => {
                if (lst != null && lst != undefined) {
                    this.IndienerListItems = [...lst];
                }
            });

        this.httpDossier.sgsComboListItems()
            .subscribe((lst: ISgsDossierComboListItem[]) => {
                if (lst != null && lst != undefined) {
                    this.DossierBeheerderListItems = [...lst];
                }
            });

        this.httpBbr.sgsIndieningsWijzeListItems()
            .subscribe((lst: IBBRIndieningsWijze[]) => {
                if (lst != null && lst != undefined) {
                    this.IndieningsWijzeListItems = [...lst];
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
        this.zoekVelden = new SgsTVZoekVelden();
        this.zoekVelden.tvId = this.zkForm.controls.Code.value;
        this.zoekVelden.klantId = this.zkForm.controls.Indiener.value;
        this.zoekVelden.factuurRef = this.zkForm.controls.FactuurRef.value;
        this.zoekVelden.adres = this.zkForm.controls.Adres.value;
        this.zoekVelden.gemeente = this.zkForm.controls.Gemeente.value;
        this.zoekVelden.titel = this.zkForm.controls.Titel.value;
        this.zoekVelden.beschrijving = this.zkForm.controls.Beschrijving.value;
        this.zoekVelden.referentie = this.zkForm.controls.Referentie.value;
        this.zoekVelden.overname = this.zkForm.controls.Overname.value;
        this.zoekVelden.samengevoegd = this.zkForm.controls.Samengevoegd.value;
        this.zoekVelden.ebsd = this.zkForm.controls.EBSD.value;
        this.zoekVelden.indieningswijzeId = this.zkForm.controls.IndieningsWijze.value;
        this.zoekVelden.datum = this.zkForm.controls.Datum.value;
        this.zoekVelden.statusId = this.zkForm.controls.Status.value;
        this.zoekVelden.gefactureerd = this.zkForm.controls.Gefactureerd.value;
        this.zoekVelden.dossierBeheerderId = this.zkForm.controls.DossierBeheerder.value;

        this.searching.emit(this.zoekVelden);
    }
}