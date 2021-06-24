import { Injectable, Injector, Inject } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse, HttpClient } from "@angular/common/http";
import { AuthenticationService, ILoginData } from "../services/authentication.service";
import { LoadingAnimationService } from "./loading-animation.service";
import { Router } from "@angular/router";
import { LocalstorageService } from "../services/localstorage.service";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

    constructor(private readonly router: Router, private readonly injector: Injector, private readonly localstorageService: LocalstorageService, private readonly loadingAnimationService: LoadingAnimationService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loadingAnimationService.showLoading();
        const auth = this.injector.get(AuthenticationService);

        if (auth.jwtToken === "") {
            var data = this.localstorageService.getLoginData() as ILoginData;
            if (data != null) {
                auth.userId = data.userId;
                auth.jwtToken = data.token;
                auth.userType = data.userType;
                auth.userRole = data.userRole;
            }
        }        

        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${auth.jwtToken}`,
                "Cache-Control": "no-cache",
                Pragma: "no-cache"
            }
        });

        return next.handle(req).do(evt => {
            if (evt instanceof HttpResponse) {
                //console.log('---> status:', evt.status);
                //console.log('---> filter:', req.params.get('filter'));
            }
        },
            (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401) {
                        this.loadingAnimationService.hideLoading();
                        auth.logout();
                        this.router.navigateByUrl("/home");                    
                    } else {
                        this.loadingAnimationService.hideLoading();
                    }
                }
            },
            () => {
                this.loadingAnimationService.hideLoading();
            });
    }
}