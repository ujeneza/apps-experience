import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges, Output, EventEmitter } from "@angular/core";
import { GeneralScripts } from "../../../scripts/general.scripts";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, } from "@angular/forms";
import { HttpKlantService } from "../../../services/http-klant.service";
import { BsLocaleService } from "ngx-bootstrap/datepicker";
import { appLabels } from "../../../scripts/appLabels";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { AuthenticationService, UserRoles } from "../../../services/authentication.service";
import { DatePipe } from "@angular/common";
import { sgsTvJoinedData } from "../../../scripts/sgsInterfaces.scripts";
import { DomSanitizer } from "@angular/platform-browser";
import { GeopuntScripts } from "../../../scripts/geopunt.scripts";
import { FilterTypes } from "../../gw-klant-grid/gw-klant-grid.component";

@Component({
    selector: "gw-tv-afsluit-reden",
    templateUrl: "./gw-tv-afsluit-reden.component.html",
    styleUrls: ["./gw-tv-afsluit-reden.component.css"], 
    providers: [DatePipe]
})

export class gwTvAfsluitRedenComponent extends GeneralScripts implements OnInit, OnChanges {
    afsluitRedenForm: FormGroup;
    @Input() tvId: number;
    @Input() data: sgsTvJoinedData;
    tvJoinedData: sgsTvJoinedData;
    @Output() afluitenFormValues: EventEmitter<any> = new EventEmitter<any>()



    constructor(
        private readonly _toastr: ToastrService,
        private readonly fb: FormBuilder,
        private readonly route: ActivatedRoute,
        private readonly auth: AuthenticationService,
        private readonly sanitizer: DomSanitizer,
        private readonly localeService: BsLocaleService,
    ) {
        super(_toastr);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['data']) {
            this.tvJoinedData = changes.data.currentValue;
            this.formOnInit();
        }
    }

    ngOnInit(): void {
        this.localeService.use("bootstrap-locale-nlbe");
        this.formOnInit();
    }

    formOnInit() {
        this.initialiseForm();
        this.loadEntity()
    }

    initialiseForm() {  
        this.afsluitRedenForm = this.fb.group({
            afsluitRedenAfvoerNaarBrusselWallonie: [""],
            afsluitRedenAfvoerNaarBrusselWallonieVolume: [""],
            afsluitRedenToegepastZonderGvtBinnenDeWerf: [""],
            afsluitRedenToegepastZonderGvtBinnenDeWerfVolume: [""],
            afsluitRedenToegepastZonderGvtBuitenDeWerf: [""],
            afsluitRedenToegepastZonderGvtBuitenDeWerfVolume: [""],
            afsluitRedenAfgezeefdPuinTop: [""],
            afsluitRedenAfgezeefdPuinTopVolume: [""],
            afsluitRedenMinvolumeVanaf10pWegensNietUitgevoerd: [""],
            afsluitRedenMinvolumeVanaf10pWegensNietUitgevoerdVolume: [""],
            afsluitRedenMeervolumeVanaf10p: [""],
            afsluitRedenMeervolumeVanaf10pVolume: [""],
            afsluitRedenDeelsViaGb: [""],
            afsluitRedenDeelsViaGbVolume: [""],
            afsluitRedenDeelsOpDeWerfGeblevenVoorDeBouwheer: [""],
            afsluitRedenDeelsOpDeWerfGeblevenVoorDeBouwheerVolume: [""],
            afsluitRedenOverschattingInTv: [""],
            afsluitRedenOverschattingInTvVolume: [""],
            afsluitRedenZoneVoorGebruikTerPlaatse: [""],
            afsluitRedenZoneVoorGebruikTerPlaatseVolume: [""],
            afsluitRedenGtmNaarTopNieuwTv: [""],
            afsluitRedenGtmNaarTopNieuwTvVolume: [""],
            afsluitRedenGtmNaarCofETopCgr: [""],
            afsluitRedenGtmNaarCofETopCgrVolume: [""],
            afsluitRedenGedeelteNietDoorLidGwUitgevoerd: [""],
            afsluitRedenGedeelteNietDoorLidGwUitgevoerdVolume: [""],
            afsluitRedenBbrsGeweigerd: [""],
            afsluitRedenBbrsGeweigerdVolume: [""],
            afsluitRedenSamengevoegd: [""],
            afsluitRedenSamengevoegdVolume: [""],
            afsluitRedenNietGekend: [""],
            afsluitRedenNietGekendVolume: [""],
            afsluitRedenOverige: [""],
            afsluitRedenOverigeVolume: [""],

        });
        this.formChangeHandler();
     
    }


    loadEntity() {
        if (this.tvJoinedData) {
            this.afsluitRedenForm.patchValue({
                afsluitRedenAfvoerNaarBrusselWallonie: this.tvJoinedData.afsluitRedenAfvoerNaarBrusselWallonie,
                afsluitRedenAfvoerNaarBrusselWallonieVolume: this.tvJoinedData.afsluitRedenAfvoerNaarBrusselWallonieVolume,
                afsluitRedenToegepastZonderGvtBinnenDeWerf: this.tvJoinedData.afsluitRedenToegepastZonderGvtBinnenDeWerf,
                afsluitRedenToegepastZonderGvtBinnenDeWerfVolume: this.tvJoinedData.afsluitRedenToegepastZonderGvtBinnenDeWerfVolume,
                afsluitRedenToegepastZonderGvtBuitenDeWerf: this.tvJoinedData.afsluitRedenToegepastZonderGvtBuitenDeWerf,
                afsluitRedenToegepastZonderGvtBuitenDeWerfVolume: this.tvJoinedData.afsluitRedenToegepastZonderGvtBuitenDeWerfVolume,
                afsluitRedenAfgezeefdPuinTop: this.tvJoinedData.afsluitRedenAfgezeefdPuinTop,
                afsluitRedenAfgezeefdPuinTopVolume: this.tvJoinedData.afsluitRedenAfgezeefdPuinTopVolume,
                afsluitRedenMinvolumeVanaf10pWegensNietUitgevoerd: this.tvJoinedData.afsluitRedenMinvolumeVanaf10pWegensNietUitgevoerd,
                afsluitRedenMinvolumeVanaf10pWegensNietUitgevoerdVolume: this.tvJoinedData.afsluitRedenMinvolumeVanaf10pWegensNietUitgevoerdVolume,
                afsluitRedenMeervolumeVanaf10p: this.tvJoinedData.afsluitRedenMeervolumeVanaf10p,
                afsluitRedenMeervolumeVanaf10pVolume: this.tvJoinedData.afsluitRedenMeervolumeVanaf10pVolume,
                afsluitRedenDeelsViaGb: this.tvJoinedData.afsluitRedenDeelsViaGb,
                afsluitRedenDeelsViaGbVolume: this.tvJoinedData.afsluitRedenDeelsViaGbVolume,
                afsluitRedenDeelsOpDeWerfGeblevenVoorDeBouwheer: this.tvJoinedData.afsluitRedenDeelsOpDeWerfGeblevenVoorDeBouwheer,
                afsluitRedenDeelsOpDeWerfGeblevenVoorDeBouwheerVolume: this.tvJoinedData.afsluitRedenDeelsOpDeWerfGeblevenVoorDeBouwheerVolume,
                afsluitRedenOverschattingInTv: this.tvJoinedData.afsluitRedenOverschattingInTv,
                afsluitRedenOverschattingInTvVolume: this.tvJoinedData.afsluitRedenOverschattingInTvVolume,
                afsluitRedenZoneVoorGebruikTerPlaatse: this.tvJoinedData.afsluitRedenZoneVoorGebruikTerPlaatse,
                afsluitRedenZoneVoorGebruikTerPlaatseVolume: this.tvJoinedData.afsluitRedenZoneVoorGebruikTerPlaatseVolume,
                afsluitRedenGtmNaarTopNieuwTv: this.tvJoinedData.afsluitRedenGtmNaarTopNieuwTv,
                afsluitRedenGtmNaarTopNieuwTvVolume: this.tvJoinedData.afsluitRedenGtmNaarTopNieuwTvVolume,
                afsluitRedenGtmNaarCofETopCgr: this.tvJoinedData.afsluitRedenGtmNaarCofETopCgr,
                afsluitRedenGtmNaarCofETopCgrVolume: this.tvJoinedData.afsluitRedenGtmNaarCofETopCgrVolume,
                afsluitRedenGedeelteNietDoorLidGwUitgevoerd: this.tvJoinedData.afsluitRedenGedeelteNietDoorLidGwUitgevoerd,
                afsluitRedenGedeelteNietDoorLidGwUitgevoerdVolume: this.tvJoinedData.afsluitRedenGedeelteNietDoorLidGwUitgevoerdVolume,
                afsluitRedenBbrsGeweigerd: this.tvJoinedData.afsluitRedenBbrsGeweigerd,
                afsluitRedenBbrsGeweigerdVolume: this.tvJoinedData.afsluitRedenBbrsGeweigerdVolume,
                afsluitRedenSamengevoegd: this.tvJoinedData.afsluitRedenSamengevoegd,
                afsluitRedenSamengevoegdVolume: this.tvJoinedData.afsluitRedenSamengevoegdVolume,
                afsluitRedenNietGekend: this.tvJoinedData.afsluitRedenNietGekend,
                afsluitRedenNietGekendVolume: this.tvJoinedData.afsluitRedenNietGekendVolume,
                afsluitRedenOverige: this.tvJoinedData.afsluitRedenOverige,
                afsluitRedenOverigeVolume: this.tvJoinedData.afsluitRedenOverigeVolume

            })
        }
       
    }

    formChangeHandler() {
        this.afsluitRedenForm.valueChanges.debounceTime(1000).subscribe(val => {
            this.afluitenFormValues.emit(this.afsluitRedenForm.value);
        });
    }

}
