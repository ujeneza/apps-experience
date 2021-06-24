import { Component, Inject, forwardRef, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GeneralScripts } from "../../scripts/general.scripts";
import { AuthenticationService, UserTypes } from "../../services/authentication.service";
import { NG_VALUE_ACCESSOR } from "@angular/forms";


@Component({
    selector: "inschrijven-branche",
    templateUrl: "./branche.component.html",
    styleUrls: ["./branche.component.css"],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => BrancheComponent),
            multi: true
        }
    ]
})

export class BrancheComponent extends GeneralScripts implements OnInit {

    @Input("userType") typeeee: UserTypes;

    selectedValue: any;
    branches: any;

    onChange: any = () => { };
    onTouched: any = () => { };

    constructor(private readonly http: HttpClient, @Inject("BASE_URL") private readonly baseUrl: string, private readonly authenticationService: AuthenticationService) {
        super(null);              
    }

    ngOnInit(): void {        
        let url:string;
        if (this.typeeee === UserTypes.User) {
            url = this.baseUrl + "api/Inschrijvingen/GetBrancheForNormal";
        } else if (this.typeeee === UserTypes.Top) {
            url = this.baseUrl + "api/Inschrijvingen/GetBrancheForTop";
        } else if (this.typeeee === UserTypes.Dop) {
            url = this.baseUrl + "api/Inschrijvingen/GetBrancheForDop";
        } else if (this.typeeee === UserTypes.NotLoggedIn) {
            return;
        } else {
            throw new Error("Invalid type");
        }

        this.http.get(url)
            .subscribe(result => {
                this.branches = result;
            },
            error => {
                this.handleError(error);
            });
    }


    writeValue(value: any) {
        this.selectedValue = value;
    }

    registerOnChange(fn: any) {
        this.onChange = () => {
            fn(this.selectedValue);
        }
    }

    registerOnTouched(fn: any) {
        this.onTouched = fn;
    }
}