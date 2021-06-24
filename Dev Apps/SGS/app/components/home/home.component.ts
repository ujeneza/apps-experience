import { Component, OnDestroy, OnInit } from "@angular/core";
import { AuthenticationService, UserRoles, ILoginData } from "../services/authentication.service";
import { LocalstorageService } from "../services/localstorage.service";
import { Subscription } from "rxjs/Subscription";
import { ToastrService } from "ngx-toastr";
import { GeneralScripts } from "../scripts/general.scripts";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
    selector: "home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})

export class HomeComponent extends GeneralScripts implements OnInit, OnDestroy {

    showLogin = true;
    isGWLoggedIn = false;

    validateLoginDataSubscription: Subscription;
    userIsLoggedInSubscription: Subscription;

    loginForm = new FormGroup({
        username: new FormControl("", Validators.maxLength(50)),
        password: new FormControl("", Validators.maxLength(50))
    });

    constructor(private readonly authenticationService: AuthenticationService,
        private readonly localstorageService: LocalstorageService,
        private router: Router,
        private readonly _route: ActivatedRoute,
        private readonly toastr: ToastrService) {
        super(toastr);
        
        this.validateLoginDataSubscription = authenticationService.getLoginDataChecked().subscribe(logindata => {
            if (logindata == null || logindata.userRole == UserRoles.Unassigned) {
                this.showLogin = true;
                this.localstorageService.clearLoginData();
                this.loginForm.controls.username.setValue("");
                this.loginForm.controls.password.setValue("");
            } else {
                this.isGWLoggedIn = (logindata.userRole == UserRoles.Klant) ? false : true;
                this.showLogin = false;
                this.showMessage(logindata);
                this.redirectToGwHomePage();
            }
        });
        this.userIsLoggedInSubscription = authenticationService.getUserIsLoggedIn().subscribe(logindata => {
            if (logindata == null || logindata.userRole == UserRoles.Unassigned) {
                this.showLogin = true;
                this.localstorageService.clearLoginData();
                this.loginForm.controls.username.setValue("");
                this.loginForm.controls.password.setValue("");
                this.showErrorToast("Login mislukt");
            } else {
                this.isGWLoggedIn = (logindata.userRole == UserRoles.Klant) ? false : true;
                this.showLogin = false;
                this.localstorageService.setLoginData(logindata);
                this.showMessage(logindata);
                this.redirectToGwHomePage();
            }
        });
    }

    ngOnInit(): void {
        const logindata = this.localstorageService.getLoginData();
        this.authenticationService.checkLoginData(logindata);
        if (this.isNullOrWhitespace(this.authenticationService.jwtToken)) {
        } else {
            this.showLogin = false;
        }
        this.redirectToGwHomePage();
    }
    ngOnDestroy(): void {
        this.validateLoginDataSubscription.unsubscribe();
        this.userIsLoggedInSubscription.unsubscribe();
    }

    showMessage(logindata: ILoginData) {
        if (!this.isGWLoggedIn) {
            this.showInfoToast("Welkom " + logindata.userName);
        } else {
            const snapshot = this._route.snapshot;
            if (snapshot.queryParams["Pg"] == undefined) { this.showInfoToast("Welkom " + logindata.userName) };
        }
    }

    login() {
        const username = this.loginForm.controls.username.value;
        const password = this.loginForm.controls.password.value;
        this.authenticationService.login(username, password);
    }

    redirectToGwHomePage() {
        if (this.isGWLoggedIn && !this.showLogin) {
            this.router.navigate(["/gw", "home"]);
        }
    }
}
