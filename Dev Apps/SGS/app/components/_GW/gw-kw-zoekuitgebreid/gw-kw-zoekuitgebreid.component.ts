import { Component, Inject, ViewChild, ViewEncapsulation, OnInit, EventEmitter, Output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

import { appLabels } from "../../scripts/appLabels";
import { GeneralScripts } from "../../scripts/general.scripts";

import { DomSanitizer } from "@angular/platform-browser";
import { HttpDossierService } from "../../services/http-dossier.service";
import { HttpKlantService } from "../../services/http-klant.service";
import { HttpTVService } from "../../services/http-tv.service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { BsLocaleService } from "ngx-bootstrap/datepicker";
import { SgsKWZoekVelden } from "../../scripts/sgsClasses.scripts";
import { ISgsKlantComboListItem, ISgsDossierComboListItem } from "../../scripts/sgsInterfaces.scripts";

@Component({
    selector: "gw-kw-zoekuitgebreid",
    templateUrl: "./gw-kw-zoekuitgebreid.component.html",
    styleUrls: ["./gw-kw-zoekuitgebreid.component.css"],
    encapsulation: ViewEncapsulation.None
})
export class gwKWZoekUitgebreidComponent extends GeneralScripts implements OnInit {
    appLabels = appLabels;
    zkForm: FormGroup;

    IndienerListItems: ISgsKlantComboListItem[] = null;
    DossierBeheerderListItems: ISgsDossierComboListItem[] = null;

    zoekVelden: SgsKWZoekVelden = null;

    @Output() searching: EventEmitter<SgsKWZoekVelden> = new EventEmitter<SgsKWZoekVelden>();

    constructor(private readonly _toastr: ToastrService,
                private readonly router: Router,
                private readonly fb: FormBuilder,
                private readonly _localeService: BsLocaleService,
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
            VerklaringOntvangen: [""],
            Referentie: [""],
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
    }

    raiseSearch() {
        this.zoekVelden = new SgsKWZoekVelden();
        this.zoekVelden.klantId = this.zkForm.controls.Indiener.value;
        this.zoekVelden.referentie = this.zkForm.controls.Referentie.value;
        this.zoekVelden.verklaringontvangen = this.zkForm.controls.VerklaringOntvangen.value;
        this.zoekVelden.dossierBeheerderId = this.zkForm.controls.DossierBeheerder.value;

        this.searching.emit(this.zoekVelden);
    }
}