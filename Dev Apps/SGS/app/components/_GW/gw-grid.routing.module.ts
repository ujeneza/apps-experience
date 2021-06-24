import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HTTP_INTERCEPTORS } from "@angular/common/http";



// Customer Related


// GW Related
import { gwHomeComponent } from "../../components/_GW/gw-home/gw-home.component";

import { defineLocale } from "ngx-bootstrap/chronos";
import { nlBeLocale } from "ngx-bootstrap/locale";
defineLocale("bootstrap-locale-nlbe", nlBeLocale);



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
    { path: "", canActivate: [AuthenticationService], component: gwHomeComponent, data: { state: "gw/home/" } },
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
export class GwGridRoutingModule {
}
