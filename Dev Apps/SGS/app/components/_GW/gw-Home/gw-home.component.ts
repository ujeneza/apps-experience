import { Component, OnInit, Input } from "@angular/core";
import { GeneralScripts } from "../../scripts/general.scripts";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FillTypes } from "../../bodembeheerrapport-grid/bodembeheerrapport-grid.component";
import { AuthenticationService, UserRoles } from "../../services/authentication.service";

@Component({
    selector: "gw-home",
    templateUrl: "./gw-home.component.html",
    styleUrls: ["./gw-home.component.css"]
})

export class gwHomeComponent extends GeneralScripts implements OnInit {
    btns: boolean[] = [false, true, false, true, true, true, true, true, false];
    allButtonsShown: boolean = true; 

    BBRFillType: FillTypes = FillTypes.ForBbrOverzicht;
    UPLFillType: FillTypes = FillTypes.ForOnlineFilledOrUpload;
    URoles: UserRoles;

    isGWUser: boolean | null = null;
    userRole: UserRoles = UserRoles.Klant;
    allowDelete: boolean = false;
    PgIndex: number = -1;

    useToolbar = false;
    @Input('hasToolbar')
    get hasToolbar(): boolean {
        return this.useToolbar;
    }
    set hasToolbar(value: boolean) {
        this.useToolbar = "" + value !== "false";
    }

    constructor(private readonly _toastr: ToastrService, private router: Router, private readonly _route: ActivatedRoute, private readonly auth: AuthenticationService) {
        super(_toastr);

        // needed in order to retrieve the changed url queryparams on a postback
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }

    ngOnInit(): void {
        const snapshot = this._route.snapshot;
        if (snapshot.queryParams["Pg"]) { this.PgIndex = snapshot.queryParams["Pg"] };

        this.auth.getRole().toPromise()
            .then((role: UserRoles) => {
                this.isGWUser = (role !== UserRoles.Klant);
                this.userRole = role;

                if (this.isGWUser && this.userRole == UserRoles.Grondwijzer) {
                    this.allowDelete = true;
                }
            });   

        if (snapshot.queryParams["T"]) {
            switch (snapshot.queryParams["T"]) {
                case "3":
                    this.BBRFillType = FillTypes.ForAanvragenBbr;
                    break;
            }
        }

        if (this.PgIndex === -1) {
            this.allButtonsShown = this.detectAllButtonsShown();
        }
        else
        {
            this.singleButton(this.PgIndex);
        }
    }

    toggleButton(btnIndex: number) {
        if (btnIndex === -1) {
            if (!this.allButtonsShown) {
                var i, n = this.btns.length;
                for (i = 0; i < n; ++i) {
                    this.btns[i] = true;
                }
            }
        } else {
            this.btns[btnIndex] = !this.btns[btnIndex];
        }
        this.allButtonsShown = this.detectAllButtonsShown();
    }
    singleButton(btnIndex: number) {
        var i, n = this.btns.length;
        for (i = 0; i < n; ++i) {
            this.btns[i] = false;
        }
        this.btns[btnIndex] = true;
        this.allButtonsShown = false;
    }
    getButtonClass(blnValue: boolean) {
        return blnValue ? 'btn-on' : 'btn-off';
    }
    getSingleClass(blnValue: boolean) {
        return blnValue ? 'btn-single-on' : 'btn-single-off';
    }
    detectAllButtonsShown() {
        var i, n = this.btns.length;
        for (i = 0; i < n; ++i) {
            if (this.btns[i] === false) return false;
        }
        return true;
    }
}