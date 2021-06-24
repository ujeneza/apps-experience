import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { GwEditRoutingModule } from "./gw-edit.routing.module";

// Customer Related

// GW Related


import { gwDossierbeheerderEditComponent } from "../../components/_GW/gw-dossierbeheerder-edit/gw-dossierbeheerder-edit.component";
import { gwGtmEditComponent } from "../../components/_GW/gw-gtm-edit/gw-gtm-edit.component";

import { gwKlantEditComponent } from "../../components/_GW/gw-klant-edit/gw-klant-edit.component";

import { gwEmailHistoriekComponent } from "../../components/_GW/gw-email-historiek-grid/gw-email-historiek-grid.component";
import { gwTvAfsluitRedenComponent } from "../../components/_GW/gw-tv-edit/gw-tv-afsluit-reden/gw-tv-afsluit-reden.component";
import { gwTvEvaluatieComponent } from "../../components/_GW/gw-tv-edit/gw-tv-evaluatie/gw-tv-evaluatie.component";


import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { TreeModule } from "angular-tree-component";


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
import { gwExportGridComponent } from "./gw-export-grid/gw-export-grid.component";//
//import { gwKwEditComponent } from "./gw-kw-edit/gw-kw-edit.component";


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
import { gwDocumentsComponent } from "./gw-documents/gw-documents.component";
import { gwFileUploaderComponent } from "./gw-file-uploader/gw-file-uploader.component";
import { gwKwEditComponent } from "./gw-kw-edit/gw-kw-edit.component";
import { AllowOnlyNumbersDirective } from "./gw-directives/allowOnlyNumbers.directives";
import { DottedBorderBelowDirective } from "./gw-directives/dottedBorderBelow.directives";
import { AppModuleShared } from "../../app.module.shared";
import { HttpBestemmingService } from "../services/http-bestemming.service";






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
        // ToastrModule.forRoot(),
        GwEditRoutingModule,

    ],
    exports: [
        RouterModule
    ],
    declarations: [

        //GW Related

        //gwBBRGridComponent,
        //gwBBRZoekUitgebreidComponent,
        //gwDocumentsComponent,
        //gwGTMGridComponent,
        //gwGTMZoekUitgebreidComponent,
        //gwGVTGridComponent,
        //gwGVTZoekUitgebreidComponent,
        //gwKlantGridComponent,
        //gwKlantWijzGridComponent,
        //gwKlantZoekUitgebreidComponent,
        //gwKWGridComponent,
        //gwKWZoekUitgebreidComponent,
        //gwTVGridComponent,
        //gwTVZoekUitgebreidComponent,


        //gwHomeComponent, 
        gwDossierbeheerderEditComponent,
        gwGtmEditComponent,
        gwKlantEditComponent,
        gwEmailHistoriekComponent,
        gwTvAfsluitRedenComponent,
        gwTvEvaluatieComponent,
        gwTvEditComponent,
        gwEmailComponent,
        gwGvtEditComponent,
        gwGvtStudieComponent,
        gwKwEditComponent,
        gwModalGridComponent,
        gwExportComponent,
        gwExportGridComponent,
        gwPuinLmrpEditComponent,
        gwModalPuinComponent,
        gwDocumentsComponent,
        gwFileUploaderComponent,
        DottedBorderBelowDirective, 
        AllowOnlyNumbersDirective


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
        EventListenerService,

    ],
    //schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class GwEditModule {
}
