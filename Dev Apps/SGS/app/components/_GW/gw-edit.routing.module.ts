import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HTTP_INTERCEPTORS } from "@angular/common/http";



// Customer Related


// GW Related

import { gwDossierbeheerderEditComponent } from "../../components/_GW/gw-dossierbeheerder-edit/gw-dossierbeheerder-edit.component";
import { gwGtmEditComponent } from "../../components/_GW/gw-gtm-edit/gw-gtm-edit.component";
import { gwKlantEditComponent } from "../../components/_GW/gw-klant-edit/gw-klant-edit.component";
import { defineLocale } from "ngx-bootstrap/chronos";
import { nlBeLocale } from "ngx-bootstrap/locale";
defineLocale("bootstrap-locale-nlbe", nlBeLocale);


import { gwTvEditComponent } from "../../components/_GW/gw-tv-edit/gw-tv-edit.component";
import { gwEmailComponent } from "../../components/_GW/gw-email/gw-email.component";
import { gwGvtEditComponent } from "../../components/_GW/gw-gvt-edit/gw-gvt-edit.component";
import { gwExportComponent } from "../../components/_GW/gw-export/gw-export.component";

import { gwKwEditComponent } from "../../components/_GW/gw-kw-edit/gw-kw-edit.component";
import { gwPuinLmrpEditComponent } from "../../components/_GW/gw-puin-lmrp-edit/gw-puin-lmrp-edit.component";



import { HttpMailService } from "../../components/services/http-mail.service";
import { EventListenerService } from "../../components/services/event-listener.service";

import { AuthenticationService } from "../services/authentication.service";
import { LoadingAnimationService } from "../services/loading-animation.service";
import { HttpPuinService } from "../services/http-puin.service";
import { HttpTVZoneService } from "../services/http-tvzone.service";
import { HttpTVService } from "../services/http-tv.service";
import { HttpKleineWervenService } from "../services/http-kleinewerven.service";
import { HttpKlantService } from "../services/http-klant.service";
import { HttpGVTService } from "../services/http-gvt.service";
import { HttpGTMService } from "../services/http-gtm.service";
import { HttpFileService } from "../services/http-file.service";
import { HttpDossierService } from "../services/http-dossier.service";
import { HttpBBRService } from "../services/http-bbr.service";
import { HttpInterceptorService } from "../services/http-interceptor.service";



const routes: Routes = [


   { path: "klant-edit/:id", canActivate: [AuthenticationService], component: gwKlantEditComponent, data: { state: "gw-klant-edit/" } },
    { path: "dossierbeheerder-edit/:id", canActivate: [AuthenticationService], component: gwDossierbeheerderEditComponent, data: { state: "dossierbeheerder-edit/" } },
    { path: "gtm-edit/:id", canActivate: [AuthenticationService], component: gwGtmEditComponent, data: { state: "gtm-edit/" } },
    { path: "tv-edit/:id", canActivate: [AuthenticationService], component: gwTvEditComponent, data: { state: "tv-edit/" } },
    { path: "email/:action/:type/:id/:mailId", canActivate: [AuthenticationService], component: gwEmailComponent, data: { state: "email/" } },
    { path: "email/:action/:type/:id/:mailId/:mailFormatType", canActivate: [AuthenticationService], component: gwEmailComponent, data: { state: "email/" } },
    { path: "gvt-edit/:id", canActivate: [AuthenticationService], component: gwGvtEditComponent, data: { state: "gvt-edit/" } },
    { path: "kw-edit/:id", canActivate: [AuthenticationService], component: gwKwEditComponent, data: { state: "kw-edit/" } },
    { path: "puin-lmrp-edit/:id", canActivate: [AuthenticationService], component: gwPuinLmrpEditComponent, data: { state: "gtm-edit/" } },
    { path: "export", canActivate: [AuthenticationService], component: gwExportComponent, data: { state: "export/" } },
];



@NgModule({
    imports: [

        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
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
        LoadingAnimationService,
        EventListenerService, 
        DatePipe
    ]
})
export class GwEditRoutingModule {
}
