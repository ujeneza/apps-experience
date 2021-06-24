// Modules

import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { TreeModule } from "angular-tree-component";
import { ToastrModule } from "ngx-toastr";
import { TooltipModule, BsDatepickerModule, PopoverModule } from "ngx-bootstrap";
import { FileUploadModule } from "ng2-file-upload";
import { TrimValueAccessorModule } from "ng-trim-value-accessor";




// Other

import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { safeHtml } from "./components/fetchdata/pipe-test.module";
import { defineLocale } from "ngx-bootstrap/chronos";
import { nlBeLocale } from "ngx-bootstrap/locale";
defineLocale("bootstrap-locale-nlbe", nlBeLocale);


// Customer Related Components

import { AppComponent } from "./components/app/app.component";
import { NavMenuComponent } from "./components/navmenu/navmenu.component";

import { HomeComponent } from "./components/home/home.component";
import { FetchDataComponent } from "./components/fetchdata/fetchdata.component";
import { FileUploaderComponent } from "./components/file-uploader/file-uploader.component";

import { ForbiddenComponent } from "./components/forbidden/forbidden.component";
import { ErrorComponent } from "./components/error/error.component";

import { InschrijvenAlsGebruikerComponent } from "./components/inschrijven-als-gebruiker/inschrijven-als-gebruiker.component";
import { BrancheComponent } from "./components/inschrijven-als-gebruiker/branche/branche.component";
import { BeroepsorganisatieComponent } from "./components/inschrijven-als-gebruiker/beroepsorganisatie/beroepsorganisatie.component";

import { AllowOnlyNumbersDirective } from "./components/directives/allowOnlyNumbers.directives";
import { DottedBorderBelowDirective } from "./components/directives/dottedborderBelow.directives";


import { TechnischVerslagDetailComponent } from "./components/technisch-verslag-detail/technisch-verslag-detail.component";
import { TechnischVerslagIndienenComponent } from "./components/technisch-verslag-indienen/technisch-verslag-indienen.component";
import { TechnischVerslagOkComponent } from "./components/technisch-verslag-ok/technisch-verslag-ok.component";
import { TechnischVerslagStatusComponent } from "./components/technisch-verslag-status/technisch-verslag-status.component";
import { TechnischVerslagZoekenComponent } from "./components/technisch-verslag-zoeken/technisch-verslag-zoeken.component";
import { TechnischVerslagZoneRegistratieComponent } from "./components/technisch-verslag-zone-registratie/technisch-verslag-zone-registratie.component";

import { TransportTopCgrMeldenComponent } from "./components/transport-top-cgr-melden/transport-top-cgr-melden.component";
import { TransportTopCgrDetailComponent } from "./components/transport-top-cgr-detail/transport-top-cgr-detail.component";
import { TransportTopCgrVerklaringComponent } from "./components/transport-top-cgr-verklaring/transport-top-cgr-verklaring.component";
import { TransportTopCgrStatusComponent } from "./components/transport-top-cgr-status/transport-top-cgr-status.component";

import { GrondverzettoelatingAanvraagOkComponent } from "./components/grondverzettoelating-aanvraagok/grondverzettoelating-aanvraagok.component";
import { GrondverzettoelatingAanvragenComponent } from "./components/grondverzettoelating-aanvragen/grondverzettoelating-aanvragen.component";
import { GrondverzettoelatingIndienenComponent } from "./components/grondverzettoelating-indienen/grondverzettoelating-indienen.component";
import { GrondverzettoelatingStatusComponent } from "./components/grondverzettoelating-status/grondverzettoelating-status.component";

import { BodembeheerrapportAanvragenComponent } from "./components/bodembeheerrapport-aanvragen/bodembeheerrapport-aanvragen.component";
import { BodembeheerrapportStatusComponent } from "./components/bodembeheerrapport-status/bodembeheerrapport-status.component";
import { BodembeheerrapportDetailComponent } from "./components/bodembeheerrapport-detail/bodembeheerrapport-detail.component";
import { BodembeheerrapportGridComponent } from "./components/bodembeheerrapport-grid/bodembeheerrapport-grid.component";
import { BodembeheerrapportOnlineComponent } from "./components/bodembeheerrapport-online/bodembeheerrapport-online.component";

import { TopGrondtransportStatusComponent } from "./components/top-grondtransport-status/top-grondtransport-status.component";

import { KleineWervenAanvragenComponent } from "./components/kleinewerven-aanvragen/kleinewerven-aanvragen.component";
import { KleineWervenIndienenComponent } from "./components/kleinewerven-indienen/kleinewerven-indienen.component";
import { KleineWervenStatusComponent } from "./components/kleinewerven-status/kleinewerven-status.component";
import { KleineWervenDetailComponent } from "./components/kleinewerven-detail/kleinewerven-detail.component";
import { KleineWervenVerklaringComponent } from "./components/kleinewerven-verklaring/kleinewerven-verklaring.component";

import { PuinLmrpAanvragenComponent } from "./components/puin-lmrp-aanvragen/puin-lmrp-aanvragen.component";
import { PuinLmrpIndienenComponent } from "./components/puin-lmrp-indienen/puin-lmrp-indienen.component";
import { PuinLmrpStatusComponent } from "./components/puin-lmrp-status/puin-lmrp-status.component";
import { PuinTechnischVerslagDataComponent } from "./components/puin-lmrp-indienen/puin-technisch-verslag-data/puin-technisch-verslag-data.component";
import { PuinTechnischVerslagDataItemComponent } from "./components/puin-lmrp-indienen/puin-technisch-verslag-data-item/puin-technisch-verslag-data-item.component";

import { TablePagerComponent } from "./components/table-pager/table-pager.component";
import { KwaliteitenLegendeComponent } from "./components/KwaliteitenLegende/kwaliteiten-legende.component";
import { KwaliteitenLegende2008Component } from "./components/KwaliteitenLegende2008/kwaliteiten-legende2008.component";


// GW Related Components

import { gwHomeComponent } from "./components/_GW/gw-home/gw-home.component";
import { gwBBRGridComponent } from "./components/_GW/gw-bbr-grid/gw-bbr-grid.component";
import { gwBBRZoekUitgebreidComponent } from "./components/_GW/gw-bbr-zoekuitgebreid/gw-bbr-zoekuitgebreid.component";
import { gwDocumentsComponent } from "./components/_GW/gw-documents/gw-documents.component";
import { gwDossierbeheerderEditComponent } from "./components/_GW/gw-dossierbeheerder-edit/gw-dossierbeheerder-edit.component";
import { gwGtmEditComponent } from "./components/_GW/gw-gtm-edit/gw-gtm-edit.component";
import { gwGTMGridComponent } from "./components/_GW/gw-gtm-grid/gw-gtm-grid.component";
import { gwGTMZoekUitgebreidComponent } from "./components/_GW/gw-gtm-zoekuitgebreid/gw-gtm-zoekuitgebreid.component";
import { gwGVTGridComponent } from "./components/_GW/gw-gvt-grid/gw-gvt-grid.component";
import { gwGVTZoekUitgebreidComponent } from "./components/_GW/gw-gvt-zoekuitgebreid/gw-gvt-zoekuitgebreid.component";
import { gwKlantEditComponent } from "./components/_GW/gw-klant-edit/gw-klant-edit.component";
import { gwKlantGridComponent } from "./components/_GW/gw-klant-grid/gw-klant-grid.component";
import { gwKlantWijzGridComponent } from "./components/_GW/gw-klantwijz-grid/gw-klantwijz-grid.component";
import { gwKlantZoekUitgebreidComponent } from "./components/_GW/gw-klant-zoekuitgebreid/gw-klant-zoekuitgebreid.component";
import { gwKWGridComponent } from "./components/_GW/gw-kw-grid/gw-kw-grid.component";
import { gwKWZoekUitgebreidComponent } from "./components/_GW/gw-kw-zoekuitgebreid/gw-kw-zoekuitgebreid.component";
import { gwTVGridComponent } from "./components/_GW/gw-tv-grid/gw-tv-grid.component";
import { gwTVZoekUitgebreidComponent } from "./components/_GW/gw-tv-zoekuitgebreid/gw-tv-zoekuitgebreid.component";
import { gwEmailHistoriekComponent } from "./components/_GW/gw-email-historiek-grid/gw-email-historiek-grid.component";
import { gwTvAfsluitRedenComponent } from "./components/_GW/gw-tv-edit/gw-tv-afsluit-reden/gw-tv-afsluit-reden.component";
import { gwTvEvaluatieComponent } from "./components/_GW/gw-tv-edit/gw-tv-evaluatie/gw-tv-evaluatie.component";
import { gwTvEditComponent } from "./components/_GW/gw-tv-edit/gw-tv-edit.component";
import { gwEmailComponent } from "./components/_GW/gw-email/gw-email.component";
import { gwGvtEditComponent } from "./components/_GW/gw-gvt-edit/gw-gvt-edit.component";
import { gwGvtStudieComponent } from "./components/_GW/gw-gvt-edit/gw-gvt-studie/gw-gvt-studie.component";
import { gwModalGridComponent } from "./components/_GW/gw-modal-grid/gw-modal-grid.component";
import { gwExportComponent } from "./components/_GW/gw-export/gw-export.component";
import { gwExportGridComponent } from "./components/_GW/gw-export-grid/gw-export-grid.component";
import { gwKwEditComponent } from "./components/_GW/gw-kw-edit/gw-kw-edit.component";
import { gwPuinLmrpEditComponent } from "./components/_GW/gw-puin-lmrp-edit/gw-puin-lmrp-edit.component";
import { gwModalPuinComponent } from "./components/_GW/gw-puin-lmrp-edit/gw-modal-puin/gw-modal-puin.component";
import { GwGridModule } from "./components/_GW/gw-grid.module";
import { GwEditModule } from "./components/_GW/gw-edit.module";


// Services
import { LoadingAnimationService } from "./components/services/loading-animation.service";
import { AuthenticationService } from "./components/services/authentication.service";
import { HttpInterceptorService } from "./components/services/http-interceptor.service";
import { HttpBBRService } from "./components/services/http-bbr.service";
import { HttpDossierService } from "./components/services/http-dossier.service";
import { HttpFileService } from "./components/services/http-file.service";
import { HttpGTMService } from "./components/services/http-gtm.service";
import { HttpGVTService } from "./components/services/http-gvt.service";
import { HttpKlantService } from "./components/services/http-klant.service";
import { HttpKleineWervenService } from "./components/services/http-kleinewerven.service";
import { HttpTVService } from "./components/services/http-tv.service";
import { HttpTVZoneService } from "./components/services/http-tvzone.service";
import { HttpPuinService } from "./components/services/http-puin.service";

import { HttpMailService } from "./components/services/http-mail.service";
import { EventListenerService } from "./components/services/event-listener.service";
import { LocalstorageService } from "./components/services/localstorage.service";
import { HttpBestemmingService } from "./components/services/http-bestemming.service";







@
NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        ForbiddenComponent,
        ErrorComponent,
        InschrijvenAlsGebruikerComponent,
        BrancheComponent,
        BeroepsorganisatieComponent,
        FetchDataComponent,
        FileUploaderComponent,
        TechnischVerslagDetailComponent,
        TechnischVerslagIndienenComponent,
        TechnischVerslagOkComponent,
        TechnischVerslagStatusComponent,
        TechnischVerslagZoekenComponent,
        TechnischVerslagZoneRegistratieComponent,
        TransportTopCgrMeldenComponent,
        TransportTopCgrDetailComponent,
        TransportTopCgrVerklaringComponent,
        TransportTopCgrStatusComponent,
        GrondverzettoelatingAanvraagOkComponent,
        GrondverzettoelatingAanvragenComponent,
        GrondverzettoelatingIndienenComponent,
        GrondverzettoelatingStatusComponent,
        BodembeheerrapportAanvragenComponent,
        BodembeheerrapportStatusComponent,
        BodembeheerrapportDetailComponent,
        BodembeheerrapportGridComponent,
        BodembeheerrapportOnlineComponent,
        TopGrondtransportStatusComponent,
        KleineWervenAanvragenComponent,
        KleineWervenIndienenComponent,
        KleineWervenStatusComponent,
        KleineWervenDetailComponent,
        KleineWervenVerklaringComponent,
        PuinLmrpAanvragenComponent,
        PuinLmrpIndienenComponent,
        PuinLmrpStatusComponent,
        PuinTechnischVerslagDataComponent,
        PuinTechnischVerslagDataItemComponent,
        TablePagerComponent,
        KwaliteitenLegendeComponent,
        KwaliteitenLegende2008Component,
        AllowOnlyNumbersDirective,
        DottedBorderBelowDirective,
        safeHtml, 
        //GwEditModule
        //GwEditModule,
        //GwGridModule
        
        
 

        ////GW Related

        //gwKlantGridComponent,
        //gwHomeComponent, 
        //gwBBRGridComponent,
        //gwBBRZoekUitgebreidComponent,
       
        //gwGTMGridComponent,
        //gwGTMZoekUitgebreidComponent,
        //gwGVTGridComponent,
        //gwGVTZoekUitgebreidComponent,
        //gwKlantWijzGridComponent,
        //gwKlantZoekUitgebreidComponent,
        //gwKWGridComponent,
        //gwKWZoekUitgebreidComponent,
        //gwTVGridComponent,
        //gwTVZoekUitgebreidComponent,

         // gwDocumentsComponent,
        //gwEmailHistoriekComponent,
        //gwTvAfsluitRedenComponent, 
        //gwTvEvaluatieComponent,
        //gwTvEditComponent,
        //gwEmailComponent, 
        //gwGvtEditComponent, 
        //gwGvtStudieComponent,
        //gwKwEditComponent,
        //gwModalGridComponent, 
        //gwExportComponent, 
        //gwExportGridComponent,
        //gwPuinLmrpEditComponent,
        //gwModalPuinComponent,
        //gwDossierbeheerderEditComponent,
        //gwGtmEditComponent,
        // gwKlantEditComponent, 
  
    ],
  
    exports: [
        safeHtml,

    ],
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
        ToastrModule.forRoot(),
        RouterModule.forRoot([
            { path: "", redirectTo: "home", pathMatch: "full" },
            { path: "home", component: HomeComponent, data: { state: "home" } },
            { path: "inschrijven-als-gebruiker", component: InschrijvenAlsGebruikerComponent, data: { state: "inschrijven-als-gebruiker" } },
            { path: "inschrijven-als-top-cgr", component: InschrijvenAlsGebruikerComponent, data: { state: "inschrijven-als-top-cgr" } },
            { path: "inschrijven-als-dop", component: InschrijvenAlsGebruikerComponent, data: { state: "inschrijven-als-dop" } },
            { path: "mijn-gegevens-aanpassen", canActivate: [AuthenticationService], component: InschrijvenAlsGebruikerComponent, data: { state: "mijn-gegevens-aanpassen" } },
            { path: "technisch-verslag-indienen", canActivate: [AuthenticationService], component: TechnischVerslagIndienenComponent, data: { state: "technisch-verslag-indienen" } },
            { path: "technisch-verslag-ok", canActivate: [AuthenticationService], component: TechnischVerslagOkComponent, data: { state: "technisch-verslag-ok" } },
            { path: "technisch-verslag-status", canActivate: [AuthenticationService], component: TechnischVerslagStatusComponent, data: { state: "technisch-verslag-status" } },
            { path: "technisch-verslag-zone-registratie", canActivate: [AuthenticationService], component: TechnischVerslagZoneRegistratieComponent, data: { state: "technisch-verslag-zone-registratie" } },
            { path: "technisch-verslag-zone-registratie/:gw/:TvId/:TvZoneId", canActivate: [AuthenticationService], component: TechnischVerslagZoneRegistratieComponent, data: { state: "technisch-verslag-zone-registratie" } },
            { path: "technisch-verslag-zone-registratie/:gw/:TvId", canActivate: [AuthenticationService], component: TechnischVerslagZoneRegistratieComponent, data: { state: "technisch-verslag-zone-registratie" } },
            { path: "technisch-verslag-detail/:id", canActivate: [AuthenticationService], component: TechnischVerslagDetailComponent, data: { state: "technisch-verslag-detail" } },
            { path: "transport-top-cgr-melden", canActivate: [AuthenticationService], component: TransportTopCgrMeldenComponent, data: { state: "transport-top-cgr-melden" } },
            { path: "transport-top-cgr-melden/:regId", canActivate: [AuthenticationService], component: TransportTopCgrMeldenComponent, data: { state: "transport-top-cgr-melden" } },
            { path: "transport-top-cgr-detail/:Id", canActivate: [AuthenticationService], component: TransportTopCgrDetailComponent, data: { state: "transport-top-cgr-detail" } },
            { path: "transport-top-cgr-verklaring/:Id", canActivate: [AuthenticationService], component: TransportTopCgrVerklaringComponent, data: { state: "transport-top-cgr-verklaring" } },
            { path: "transport-top-cgr-status", canActivate: [AuthenticationService], component: TransportTopCgrStatusComponent, data: { state: "transport-top-cgr-status" } },
            { path: "grondverzettoelating-aanvraagok/:BbrId", canActivate: [AuthenticationService], component: GrondverzettoelatingAanvraagOkComponent, data: { state: "grondverzettoelating-aanvraagok" } },
            { path: "grondverzettoelating-aanvragen", canActivate: [AuthenticationService], component: GrondverzettoelatingAanvragenComponent, data: { state: "grondverzettoelating-aanvragen" } },
            { path: "grondverzettoelating-indienen/:TypeId", canActivate: [AuthenticationService], component: GrondverzettoelatingIndienenComponent, data: { state: "grondverzettoelating-indienen" } },
            { path: "grondverzettoelating-indienen/:TypeId/:BestId", canActivate: [AuthenticationService], component: GrondverzettoelatingIndienenComponent, data: { state: "grondverzettoelating-indienen" } },
            { path: "grondverzettoelating-status", canActivate: [AuthenticationService], component: GrondverzettoelatingStatusComponent, data: { state: "grondverzettoelating-status" } },
            { path: "bodembeheerrapport-aanvragen", canActivate: [AuthenticationService], component: BodembeheerrapportAanvragenComponent, data: { state: "bodembeheerrapport-aanvragen" } },
            { path: "bodembeheerrapport-detail", canActivate: [AuthenticationService], component: BodembeheerrapportDetailComponent, data: { state: "bodembeheerrapport-detail" } },
            { path: "bodembeheerrapport-online/:bbrId", canActivate: [AuthenticationService], component: BodembeheerrapportOnlineComponent, data: { state: "bodembeheerrapport-online" } },
            { path: "bodembeheerrapport-status", canActivate: [AuthenticationService], component: BodembeheerrapportStatusComponent, data: { state: "bodembeheerrapport-status" } },            
            { path: "top-grondtransport-status", canActivate: [AuthenticationService], component: TopGrondtransportStatusComponent, data: { state: "top-grondtransport-status" } },
            { path: "kleinewerven-aanvragen", canActivate: [AuthenticationService], component: KleineWervenAanvragenComponent, data: { state: "kleinewerven-aanvragen" } },
            { path: "kleinewerven-indienen/:TypeId", canActivate: [AuthenticationService], component: KleineWervenIndienenComponent, data: { state: "kleinewerven-indienen" } },
            { path: "kleinewerven-status", canActivate: [AuthenticationService], component: KleineWervenStatusComponent, data: { state: "kleinewerven-status" } },
            { path: "kleinewerven-detail/:id", canActivate: [AuthenticationService], component: KleineWervenDetailComponent, data: { state: "kleinewerven-detail" } },
            { path: "kleinewerven-verklaring/:id", canActivate: [AuthenticationService], component: KleineWervenVerklaringComponent, data: { state: "kleinewerven-verklaring" } },
            { path: "puin-lmrp-aanvragen", canActivate: [AuthenticationService], component: PuinLmrpAanvragenComponent, data: { state: "puin-lmrp-aanvragen" } },
            { path: "puin-lmrp-indienen/:IndieningsTypeId", canActivate: [AuthenticationService], component: PuinLmrpIndienenComponent, data: { state: "puin-lmrp-indienen" } },
            { path: "puin-lmrp-indienen/:IndieningsTypeId/:BestaandeBestemmingId", canActivate: [AuthenticationService], component: PuinLmrpIndienenComponent, data: { state: "puin-lmrp-indienen" } },
            { path: "puin-lmrp-status", canActivate: [AuthenticationService], component: PuinLmrpStatusComponent, data: { state: "puin-lmrp-status" } },
            { path: 'gw', loadChildren: './components/_GW/gw-edit.module#GwEditModule'},
             { path: 'gw/home', loadChildren: './components/_GW/gw-grid.module#GwGridModule' },
            //{
            //    path: 'gw',
            //    loadChildren: () => GwEditModule,

            //},
            //{
            //    path: 'gw',
            //    loadChildren: () => GwGridModule,
              
            //},

          // { path: "gw/home", canActivate: [AuthenticationService], component: gwHomeComponent, data: { state: "gw/home" } },
           // { path: 'gw', loadChildren: './components/_GW/gw-grid.module#GwGridModule' },
            //{ path: "gw/klant-edit/:id", canActivate: [AuthenticationService], component: gwKlantEditComponent, data: { state: "gw-klant-edit/" } },
            //{ path: "gw/dossierbeheerder-edit/:id", canActivate: [AuthenticationService], component: gwDossierbeheerderEditComponent, data: { state: "dossierbeheerder-edit/" } },
            //{ path: "gw/gtm-edit/:id", canActivate: [AuthenticationService], component: gwGtmEditComponent, data: { state: "gtm-edit/" } },
            //{ path: "gw/tv-edit/:id", canActivate: [AuthenticationService], component: gwTvEditComponent, data: { state: "tv-edit/" } },
            //{ path: "gw/email/:action/:type/:id/:mailId", canActivate: [AuthenticationService], component: gwEmailComponent, data: { state: "email/" } },
            //{ path: "gw/gvt-edit/:id", canActivate: [AuthenticationService], component: gwGvtEditComponent, data: { state: "gvt-edit/" } },
            //{ path: "gw/kw-edit/:id", canActivate: [AuthenticationService], component: gwKwEditComponent, data: { state: "kw-edit/" } },
            //{ path: "gw/puin-lmrp-edit/:id", canActivate: [AuthenticationService], component: gwPuinLmrpEditComponent, data: { state: "gtm-edit/" } },
            //{ path: "gw/export", canActivate: [AuthenticationService], component: gwExportComponent, data: { state: "export/" } },
            { path: "forbidden", component: ForbiddenComponent, data: { state: "forbidden" } },
            { path: "error", component: ErrorComponent, data: { state: "error" } },
            { path: "**", redirectTo: "home" }
        ])
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
        HttpBestemmingService,
        LocalstorageService,
        LoadingAnimationService,
        EventListenerService 
       
     
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
    
})
export class AppModuleShared {
}
