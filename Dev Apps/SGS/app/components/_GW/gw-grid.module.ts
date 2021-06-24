import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { GwEditRoutingModule } from "./gw-edit.routing.module";

// Customer Related
import { AppComponent } from "../../components/app/app.component";
import { NavMenuComponent } from "../../components/navmenu/navmenu.component";

import { HomeComponent } from "../../components/home/home.component";
import { FetchDataComponent } from "../../components/fetchdata/fetchdata.component";
import { FileUploaderComponent } from "../../components/file-uploader/file-uploader.component";



import { ForbiddenComponent } from "../../components/forbidden/forbidden.component";
import { ErrorComponent } from "../../components/error/error.component";

import { InschrijvenAlsGebruikerComponent } from "../../components/inschrijven-als-gebruiker/inschrijven-als-gebruiker.component";
import { BrancheComponent } from "../../components/inschrijven-als-gebruiker/branche/branche.component";
import { BeroepsorganisatieComponent } from "../../components/inschrijven-als-gebruiker/beroepsorganisatie/beroepsorganisatie.component";

import { AllowOnlyNumbersDirective } from "../../components/directives/allowOnlyNumbers.directives";
import { DottedBorderBelowDirective } from "../../components/directives/dottedborderBelow.directives";


import { TechnischVerslagDetailComponent } from "../../components/technisch-verslag-detail/technisch-verslag-detail.component";
import { TechnischVerslagIndienenComponent } from "../../components/technisch-verslag-indienen/technisch-verslag-indienen.component";
import { TechnischVerslagOkComponent } from "../../components/technisch-verslag-ok/technisch-verslag-ok.component";
import { TechnischVerslagStatusComponent } from "../../components/technisch-verslag-status/technisch-verslag-status.component";
import { TechnischVerslagZoekenComponent } from "../../components/technisch-verslag-zoeken/technisch-verslag-zoeken.component";
import { TechnischVerslagZoneRegistratieComponent } from "../../components/technisch-verslag-zone-registratie/technisch-verslag-zone-registratie.component";

import { TransportTopCgrMeldenComponent } from "../../components/transport-top-cgr-melden/transport-top-cgr-melden.component";
import { TransportTopCgrDetailComponent } from "../../components/transport-top-cgr-detail/transport-top-cgr-detail.component";
import { TransportTopCgrVerklaringComponent } from "../../components/transport-top-cgr-verklaring/transport-top-cgr-verklaring.component";
import { TransportTopCgrStatusComponent } from "../../components/transport-top-cgr-status/transport-top-cgr-status.component";

import { GrondverzettoelatingAanvraagOkComponent } from "../../components/grondverzettoelating-aanvraagok/grondverzettoelating-aanvraagok.component";
import { GrondverzettoelatingAanvragenComponent } from "../../components/grondverzettoelating-aanvragen/grondverzettoelating-aanvragen.component";
import { GrondverzettoelatingIndienenComponent } from "../../components/grondverzettoelating-indienen/grondverzettoelating-indienen.component";
import { GrondverzettoelatingStatusComponent } from "../../components/grondverzettoelating-status/grondverzettoelating-status.component";

import { BodembeheerrapportAanvragenComponent } from "../../components/bodembeheerrapport-aanvragen/bodembeheerrapport-aanvragen.component";
import { BodembeheerrapportStatusComponent } from "../../components/bodembeheerrapport-status/bodembeheerrapport-status.component";
import { BodembeheerrapportDetailComponent } from "../../components/bodembeheerrapport-detail/bodembeheerrapport-detail.component";
import { BodembeheerrapportGridComponent } from "../../components/bodembeheerrapport-grid/bodembeheerrapport-grid.component";
import { BodembeheerrapportOnlineComponent } from "../../components/bodembeheerrapport-online/bodembeheerrapport-online.component";

import { TopGrondtransportStatusComponent } from "../../components/top-grondtransport-status/top-grondtransport-status.component";

import { KleineWervenAanvragenComponent } from "../../components/kleinewerven-aanvragen/kleinewerven-aanvragen.component";
import { KleineWervenIndienenComponent } from "../../components/kleinewerven-indienen/kleinewerven-indienen.component";
import { KleineWervenStatusComponent } from "../../components/kleinewerven-status/kleinewerven-status.component";
import { KleineWervenDetailComponent } from "../../components/kleinewerven-detail/kleinewerven-detail.component";
import { KleineWervenVerklaringComponent } from "../..//components/kleinewerven-verklaring/kleinewerven-verklaring.component";

import { PuinLmrpAanvragenComponent } from "../../components/puin-lmrp-aanvragen/puin-lmrp-aanvragen.component";
import { PuinLmrpIndienenComponent } from "../../components/puin-lmrp-indienen/puin-lmrp-indienen.component";
import { PuinLmrpStatusComponent } from "../../components/puin-lmrp-status/puin-lmrp-status.component";
import { PuinTechnischVerslagDataComponent } from "../../components/puin-lmrp-indienen/puin-technisch-verslag-data/puin-technisch-verslag-data.component";
import { PuinTechnischVerslagDataItemComponent } from "../../components/puin-lmrp-indienen/puin-technisch-verslag-data-item/puin-technisch-verslag-data-item.component";

import { TablePagerComponent } from "../../components/table-pager/table-pager.component";
import { KwaliteitenLegendeComponent } from "../../components/KwaliteitenLegende/kwaliteiten-legende.component";
import { KwaliteitenLegende2008Component } from "../..//components/KwaliteitenLegende2008/kwaliteiten-legende2008.component";

// GW Related
import { gwHomeComponent } from "../../components/_GW/gw-home/gw-home.component";
import { gwBBRGridComponent } from "../../components/_GW/gw-bbr-grid/gw-bbr-grid.component";
import { gwBBRZoekUitgebreidComponent } from "../../components/_GW/gw-bbr-zoekuitgebreid/gw-bbr-zoekuitgebreid.component";
import { gwDocumentsComponent } from "../../components/_GW/gw-documents/gw-documents.component";
import { gwDossierbeheerderEditComponent } from "../../components/_GW/gw-dossierbeheerder-edit/gw-dossierbeheerder-edit.component";
import { gwGtmEditComponent } from "../../components/_GW/gw-gtm-edit/gw-gtm-edit.component";
import { gwGTMGridComponent } from "../../components/_GW/gw-gtm-grid/gw-gtm-grid.component";
import { gwGTMZoekUitgebreidComponent } from "../../components/_GW/gw-gtm-zoekuitgebreid/gw-gtm-zoekuitgebreid.component";
import { gwGVTGridComponent } from "../../components/_GW/gw-gvt-grid/gw-gvt-grid.component";
import { gwGVTZoekUitgebreidComponent } from "../../components/_GW/gw-gvt-zoekuitgebreid/gw-gvt-zoekuitgebreid.component";
import { gwKlantEditComponent } from "../../components/_GW/gw-klant-edit/gw-klant-edit.component";
import { gwKlantGridComponent } from "../../components/_GW/gw-klant-grid/gw-klant-grid.component";
import { gwKlantWijzGridComponent } from "../../components/_GW/gw-klantwijz-grid/gw-klantwijz-grid.component";
import { gwKlantZoekUitgebreidComponent } from "../../components/_GW/gw-klant-zoekuitgebreid/gw-klant-zoekuitgebreid.component";
import { gwKWGridComponent } from "../../components/_GW/gw-kw-grid/gw-kw-grid.component";
import { gwKWZoekUitgebreidComponent } from "../../components/_GW/gw-kw-zoekuitgebreid/gw-kw-zoekuitgebreid.component";
import { gwTVGridComponent } from "../../components/_GW/gw-tv-grid/gw-tv-grid.component";
import { gwTVZoekUitgebreidComponent } from "../../components/_GW/gw-tv-zoekuitgebreid/gw-tv-zoekuitgebreid.component";
import { gwEmailHistoriekComponent } from "../../components/_GW/gw-email-historiek-grid/gw-email-historiek-grid.component";
import { gwTvAfsluitRedenComponent } from "../../components/_GW/gw-tv-edit/gw-tv-afsluit-reden/gw-tv-afsluit-reden.component";
import { gwTvEvaluatieComponent } from "../../components/_GW/gw-tv-edit/gw-tv-evaluatie/gw-tv-evaluatie.component";


import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { TreeModule } from "angular-tree-component";
import { ToastrModule } from "ngx-toastr";

import { TooltipModule, BsDatepickerModule, PopoverModule } from "ngx-bootstrap";
import { defineLocale } from "ngx-bootstrap/chronos";
import { nlBeLocale } from "ngx-bootstrap/locale";
defineLocale("bootstrap-locale-nlbe", nlBeLocale);

import { FileUploadModule } from "ng2-file-upload";

import { TrimValueAccessorModule } from "ng-trim-value-accessor";

import { gwTvEditComponent } from "./gw-tv-edit/gw-tv-edit.component";
import { gwEmailComponent } from "./gw-email/gw-email.component";
import { gwGvtEditComponent } from "./gw-gvt-edit/gw-gvt-edit.component";
import { gwGvtStudieComponent } from "./gw-gvt-edit/gw-gvt-studie/gw-gvt-studie.component";

import { gwExportComponent } from "./gw-export/gw-export.component";
import { gwExportGridComponent } from "./gw-export-grid/gw-export-grid.component";
import { gwKwEditComponent } from "./gw-kw-edit/gw-kw-edit.component";


import { HttpMailService } from "../services/http-mail.service";
import { safeHtml } from "../fetchdata/pipe-test.module";
import { EventListenerService } from "../services/event-listener.service";
import { gwPuinLmrpEditComponent } from "./gw-puin-lmrp-edit/gw-puin-lmrp-edit.component";
import { gwModalGridComponent } from "./gw-modal-grid/gw-modal-grid.component";
import { gwModalPuinComponent } from "./gw-puin-lmrp-edit/gw-modal-puin/gw-modal-puin.component";

import { HttpInterceptorService } from "../services/http-interceptor.service";
import { AuthenticationService } from "../services/authentication.service";
import { HttpBBRService } from "../services/http-bbr.service";
import { HttpDossierService } from "../services/http-dossier.service";
import { HttpFileService } from "../services/http-file.service";
import { HttpGTMService } from "../services/http-gtm.service";
import { HttpGVTService } from "../services/http-gvt.service";
import { HttpKlantService } from "../services/http-klant.service";
import { HttpKleineWervenService } from "../services/http-kleinewerven.service";
import { HttpTVService } from "../services/http-tv.service";
import { HttpTVZoneService } from "../services/http-tvzone.service";
import { HttpPuinService } from "../services/http-puin.service";
import { LocalstorageService } from "../services/localstorage.service";
import { LoadingAnimationService } from "../services/loading-animation.service";
import { GwGridRoutingModule } from "./gw-grid.routing.module";






@NgModule({
    imports: [
        CommonModule,
        FileUploadModule,
        FormsModule,
        ReactiveFormsModule,
        NgxDatatableModule,
        TreeModule,
        TrimValueAccessorModule,
        TooltipModule.forRoot(),
        BsDatepickerModule.forRoot(),
        PopoverModule.forRoot(),

        GwGridRoutingModule
// ToastrModule.forRoot(),
    ],
    exports: [
        RouterModule
    ],
    declarations: [

        // GW Related

        gwHomeComponent,
        gwBBRGridComponent,
        gwBBRZoekUitgebreidComponent,
        gwGTMGridComponent,
        gwGTMZoekUitgebreidComponent,
        gwGVTGridComponent,
        gwGVTZoekUitgebreidComponent,
        gwKlantGridComponent,
        gwKlantWijzGridComponent,
        gwKlantZoekUitgebreidComponent,
        gwKWGridComponent,
        gwKWZoekUitgebreidComponent,
        gwTVGridComponent,
        gwTVZoekUitgebreidComponent,


    ],


    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
        AuthenticationService,
        HttpBBRService,
        HttpDossierService,
        HttpFileService,
        HttpGTMService,
        HttpGVTService,
        HttpKlantService,
        HttpKleineWervenService,
        HttpTVService,
        HttpTVZoneService,
        HttpPuinService,
        HttpMailService,
        LocalstorageService,
        LoadingAnimationService,
        EventListenerService

    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class GwGridModule {
}
