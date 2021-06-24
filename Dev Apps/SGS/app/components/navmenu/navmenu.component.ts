import { Component, AfterViewInit, OnDestroy, OnInit } from "@angular/core";
import { AuthenticationService, ILoginData, UserTypes, UserRoles } from "../services/authentication.service";
import { LoadingAnimationService } from "../services/loading-animation.service"
import { Subscription } from "rxjs/Subscription";
import { LocalstorageService } from "../services/localstorage.service";
import { Router } from "@angular/router";
import * as $ from "jquery";
import { fakeAsync } from "@angular/core/testing";

@Component({
    selector: "nav-menu",
    templateUrl: "./navmenu.component.html",
    styleUrls: ["./timer.min.css", "./navmenu.component.css"]
})
export class NavMenuComponent implements OnInit, AfterViewInit, OnDestroy {
    userIsLoggedIn = false;
    gwIsLoggedIn = false;
    showLoadingAnimation = false;

    showTechnischVerslag = false;
    showTransportTopCgr = false;  
    showGrondverzettoelating = false;    
    showBodembeheerrapport = false;
    showAfvoerPuin = false;
    showKleineWerven = false;

    showTopGrondtransportmelding = false;

    validateLoginDataSubscription: Subscription;
    userIsLoggedInSubscription: Subscription;
    loadingAnimationSubscription: Subscription;

    constructor(private readonly router: Router, private readonly localstorageService: LocalstorageService, private readonly authenticationService: AuthenticationService, private readonly loadingAnimationService: LoadingAnimationService) {
        this.validateLoginDataSubscription = authenticationService.getLoginDataChecked().subscribe(
            logindata => { this.setGui(logindata);
        });
        this.userIsLoggedInSubscription = authenticationService.getUserIsLoggedIn().subscribe(
            logindata => { this.setGui(logindata);
        });
        this.loadingAnimationSubscription = loadingAnimationService.getShowLoading().subscribe(
            show => { this.showLoadingAnimation = show; }
        );
    }

    ngOnInit(): void {
        if (this.authenticationService.jwtToken == null || this.authenticationService.jwtToken === "") {
            this.authenticationService.RestoreToken(this.router.url, false);
        }
        var logindata = this.localstorageService.getLoginData();
        this.setGui(logindata);
    }

    closeNavbar() {
        if ($(".navbar-collapse").hasClass("in")) {
            $(".navbar-toggle:visible").click();
        }
    }
    ngAfterViewInit(): void {
        $(".navbar-collapse ul li a").click(() => {
            this.closeNavbar();
        });
    }

    private setGui(logindata: ILoginData | null) {
        if (logindata == null) {
            logindata = this.localstorageService.getLoginData() as ILoginData;
        }

        if (logindata === null || logindata.userRole == UserRoles.Unassigned) {
            this.userIsLoggedIn = false;
            this.gwIsLoggedIn = false;
            this.showTechnischVerslag = false;
            this.showTransportTopCgr = false;
            this.showGrondverzettoelating = false;
            this.showBodembeheerrapport = false;
            this.showAfvoerPuin = false;
            this.showKleineWerven = false;
            this.showTopGrondtransportmelding = false;        
            return;
        }

        if (logindata.userRole == UserRoles.Klant) {
            this.userIsLoggedIn = true; // Hieronder instellen voor TOP en DOP afhankelijk van wat mogelijk moet zijn
            this.showTechnischVerslag = (logindata.userType === UserTypes.User) || (logindata.userType === UserTypes.Top);
            this.showTransportTopCgr = (logindata.userType === UserTypes.User) || (logindata.userType === UserTypes.Top);
            this.showGrondverzettoelating = (logindata.userType === UserTypes.User) || (logindata.userType === UserTypes.Top);
            this.showBodembeheerrapport = (logindata.userType === UserTypes.User) || (logindata.userType === UserTypes.Top);
            this.showAfvoerPuin = (logindata.userType === UserTypes.User) || (logindata.userType === UserTypes.Top);
            this.showKleineWerven = (logindata.userType === UserTypes.User) || (logindata.userType === UserTypes.Top);
            this.showTopGrondtransportmelding = (logindata.userType === UserTypes.Top);
        } else {
            this.gwIsLoggedIn = true;
        }
    }

    ngOnDestroy(): void {
        this.validateLoginDataSubscription.unsubscribe();
        this.userIsLoggedInSubscription.unsubscribe();
        this.loadingAnimationSubscription.unsubscribe();
    }

    logout(): void {
        this.gwIsLoggedIn = false;
        this.localstorageService.clearLoginData();
        this.authenticationService.logout();
        this.router.navigateByUrl("/home");
    }
}
