import { Component, Inject, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from "@angular/forms";
import { GeneralScripts } from "../scripts/general.scripts";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";
import { appLabels } from "../scripts/appLabels";
import { BsLocaleService } from "ngx-bootstrap/datepicker";
import { DatePipe } from "@angular/common";
import { HttpGTMService } from "../services/http-gtm.service";
import { HttpTVService } from "../services/http-tv.service";
import { ValidateDateNoLessThan, ValidateDateNoHigherThan } from "../scripts/validator.scripts"
import { Location } from "@angular/common";
//import localeBe from '@angular/common/locales/be';

@Component({
    selector: "transport-top-cgr-verklaring",
    templateUrl: "./transport-top-cgr-verklaring.component.html",
    styleUrls: ["./transport-top-cgr-verklaring.component.css"],
    //encapsulation: ViewEncapsulation.None
})

export class TransportTopCgrVerklaringComponent extends GeneralScripts implements OnInit {

    appLabels = appLabels;
    RForm: FormGroup;
    Id: number = 0;
    vac: any[] = [];
    vacZones: any[];
    hasData: boolean = false;
    isAfgerond: boolean = false;
    zones: FormArray;
    zz: any[] = [];
    datePipe = new DatePipe("en-US");
    inSending: boolean = false;
    isVlarebo2008: boolean = true;

    constructor(private readonly router: Router, private readonly _httpTV: HttpTVService, private readonly _httpGTM: HttpGTMService, private readonly _http: HttpClient, @Inject("BASE_URL") private readonly _baseUrl: string, private readonly fb: FormBuilder, private readonly _toastr: ToastrService, private readonly route: ActivatedRoute, private readonly _localeService: BsLocaleService, private readonly location: Location) {
        super(_toastr);
        //registerLocaleData(localeBe);
    }

    ngOnInit(): void {
        this._localeService.use("bootstrap-locale-nlbe");
        //Get Id
        if (this.route.snapshot.params["Id"]) this.Id = this.route.snapshot.params["Id"];
        if (this.Id === 0) {
            this.showErrorToast("No Id received");
            return;
        }
        //
        this.RForm = this.fb.group({
            StartDate: [""],
            EndDate: [""],
            Remark: ["", [Validators.maxLength(500)]],
            sendOK: [false, [Validators.pattern("true")]],
            Zones: this.fb.array([])
        });
        //

        this.RForm.controls.StartDate.setValidators([Validators.required, ValidateDateNoHigherThan(), ValidateDateNoHigherThan("'Datum start' is later dan 'datum einde'", this.RForm.controls.EndDate)]);
        this.RForm.controls.EndDate.setValidators([Validators.required, ValidateDateNoHigherThan(), ValidateDateNoLessThan("'Datum einde' is voor 'datum start'",this.RForm.controls.StartDate)]);

        this.RForm.controls.StartDate.valueChanges.subscribe(_ => { this.RForm.controls.EndDate.updateValueAndValidity({ emitEvent: false }); });
        this.RForm.controls.EndDate.valueChanges.subscribe(_ => { this.RForm.controls.StartDate.updateValueAndValidity({ emitEvent: false }); });

        this.initFormData();
        this.zones = this.RForm.get("Zones") as FormArray;
    }

   createZone(): FormGroup {
        return this.fb.group({
            realQuantity: [""],
            gtmNumber: [""],
            tvCode: [""],
            gtmCode: [""],
        });
    }

    initFormData() {
        //let params = new HttpParams();
        //params = params.append("GTMId", this.Id.toString());
        //this._http.get(this._baseUrl + "api/TransportTopCgrMelden/GetVAC", { params: params })
        this._httpGTM.VerklaringAfnemerDetail(this.Id)
            .subscribe(
                (data: any) => {
                    this.vac = data.vac;
                    this.vacZones = data.vacZones;
                    this.hasData = data.hasData;
                    this.isAfgerond = data.isAfgerond;
                    if (this.hasData) {
                        this.RForm.patchValue({
                            StartDate: this.datePipe.transform(data.vacZones[0].startDate, "dd/MM/yyyy"),
                            EndDate: this.datePipe.transform(data.vacZones[0].endDate, "dd/MM/yyyy"),
                            Remark: data.vacZones[0].remark
                        });
                    }
                    for (var i = 0; i < data.vacZones.length; i++) {
                        this.zones.push(this.createZone());
                        (this.zones.controls[i] as FormGroup).patchValue({
                            realQuantity: data.vacZones[i].realQuantity, gtmNumber: data.vacZones[i].gtmNumber, tvCode: data.vacZones[i].tvCode, gtmCode: data.vacZones[i].gtmCode
                        });
                        this.zz[data.vacZones[i].gtmCode] = data.vacZones[i].realQuantity;
                    }

                    if (data.technischVerslagId == null) {
                        this.isVlarebo2008 = true;
                    } else {
                        this._httpTV.IsVlarebo2008(data.technischVerslagId).toPromise()
                            .then((data: boolean) => {
                                this.isVlarebo2008 = data;
                            })
                            .catch(error => {
                                this.showErrorToast("Laden data mislukt : " + error.error);
                            });
                    }
                },
                error => { this.showWarningToast((error.status === 500 && error.error && error.error > "") ? error.error : error.message); }
            );
    }

    isVolumesValid(): boolean {
        if (this.zones == null || this.zones == undefined || this.zones.length === 0) return true;

        let i: number;
        for (i = 0; i < this.zones.controls.length; i++) {
            const zone = this.zones.controls[i] as FormGroup;
            if (this.isNullOrUndefined(zone.controls.realQuantity.value) || zone.controls.realQuantity.value == '')
                continue;

            const hoev = Number(zone.controls.realQuantity.value);
            if (hoev >= 0)
                return true;
        }

        return false;
    }

    RFormIsValid(): boolean {
        return this.RForm.valid && this.isVolumesValid();
    }

    back() {
        //this.router.navigate(["/transport-top-cgr-detail", this.Id]);
        this.location.back();
    }

    sendFormData() {
        this.inSending = true;
        //const headers = new HttpHeaders().set("content-type", "application/json");
        //const body = JSON.stringify(this.RForm.value);
        //const params = new HttpParams();
        //this._http.post(this._baseUrl + "api/TransportTopCgrMelden/Verklaring", body, { headers: headers, params: params })
        this._httpGTM.InsertVerklaringAfnemer(this.RForm.value)
            .subscribe((data: any) => {
                this.back();
            },
                error => {
                    this.inSending = false;
                    this.showWarningToast(appLabels.SendFail + ": " + (error.status == 500 && error.error && error.error > "") ? error.error : error.message);
                });
    }

}

