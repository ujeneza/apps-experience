import { Component, Inject, OnInit, ViewEncapsulation, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import { GeneralScripts } from "../scripts/general.scripts";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";
import { appLabels } from "../scripts/appLabels";
import { BsLocaleService } from "ngx-bootstrap/datepicker";
import { ValidateDateNoLessThan, ValidateDateNoHigherThan } from "../scripts/validator.scripts";

import { DomSanitizer } from "@angular/platform-browser";
import { GeopuntScripts } from "../scripts/geopunt.scripts";

import { HttpKlantService } from "../services/http-klant.service";
import { HttpGTMService } from "../services/http-gtm.service";
import { HttpTVZoneService } from "../services/http-tvzone.service";
//import { ITVStatus } from "../scripts/interfaces.scripts";


@Component({
    selector: "transport-top-cgr-melden",
    templateUrl: "./transport-top-cgr-melden.component.html",
    styleUrls: ["./transport-top-cgr-melden.component.css"],
    encapsulation: ViewEncapsulation.None
})
/** transport-top-cgr-melden component*/
export class TransportTopCgrMeldenComponent extends GeneralScripts implements OnInit {
    appLabels = appLabels;
    RForm: FormGroup;
    initData: any;
    topcgrlist: any[];
    tglist: any[];
    zones: FormArray;
    isTechnischVerslagVlarebo2008: boolean;
    regId: number = 0;
    inSending: boolean = false;

    testiets = true;

    constructor(private readonly router: Router,
        private readonly _http: HttpClient,
        private readonly _httpKlant: HttpKlantService,
        private readonly _httpGTM: HttpGTMService,
        private readonly _httpZone: HttpTVZoneService,
        @Inject("BASE_URL") private readonly _baseUrl: string,
        private readonly fb: FormBuilder,
        private readonly _toastr: ToastrService,
        private readonly route: ActivatedRoute,
        private readonly _localeService: BsLocaleService,
        private readonly sanitizer: DomSanitizer) {
        super(_toastr);
    }

    ngOnInit(): void {
        this._localeService.use("bootstrap-locale-nlbe");
        this.route.params.subscribe(params => { if (params["regId"]) this.regId = params["regId"] });
        if (this.regId > 0) return;//Show save success screen

        //Main form
        this.RForm = this.fb.group({
            KlantContactAchternaam: ["", [Validators.required, Validators.maxLength(50)]],
            KlantContactVoornaam: ["", [Validators.required, Validators.maxLength(50)]],
            KlantContactTelefoon: ["", [Validators.required, Validators.maxLength(50)]],
            KlantContactEmail: ["", [Validators.required, Validators.maxLength(50)]],
            KlantKenmerk: ["", [Validators.required, Validators.maxLength(50)]],

            TopCrgId: ["", Validators.required],
            GrondtransportmeldingGebruikId: [{ value: "" }, Validators.required],
            TransportAanvangDatum: [""],
            TransportEindeDatum: [""],

            TechnischVerslagID: [{ value: "", disabled: false }, Validators.required],

            Adres: [{ value: "", disabled: true }, [Validators.required, Validators.maxLength(50)]],
            Postcode: [{ value: "", disabled: true }, [Validators.required, Validators.maxLength(10)]],
            Plaats: [{ value: "", disabled: true }, [Validators.required, Validators.maxLength(50)]],
            LX: [{ value: "", disabled: true }, [Validators.required, Validators.min(20000), Validators.max(280000)]],
            LY: [{ value: "", disabled: true }, [Validators.required, Validators.min(150000), Validators.max(250000)]],

            TVbeschikbaar: ["1"],
            TopStraat: [{ value: "", disabled: true }],
            TopStraat2: [{ value: "", disabled: true }],
            TopPostcode: [{ value: "", disabled: true }],
            TopGemeente: [{ value: "", disabled: true }],

            lockMultiSave: [false, Validators.pattern("false")],
            Zones: this.fb.array([])
        });

        this.RForm.controls.TransportAanvangDatum.setValidators([Validators.required, ValidateDateNoHigherThan("Verwachte datum aanvang transport kan niet na de verwachte datum einde transport liggen", this.RForm.controls.TransportEindeDatum)]);
        this.RForm.controls.TransportEindeDatum.setValidators([ValidateDateNoLessThan("Verwachte datum einde transport kan niet voor verwachte datum aanvang transport liggen", this.RForm.controls.TransportAanvangDatum)]);

        this.initFormData();
        this.setHandlers();
        this.zones = this.RForm.get("Zones") as FormArray;

    }

    //Subordinte zones table
    createZone(): FormGroup {
        return this.fb.group({
            beschrijving: ["", [Validators.required, Validators.maxLength(500)]],
            technischVerslagZoneID: [""],
            x: [""],
            y: [""],
            z: [""],
            saldo: [""],
            hoeveelheid: [""]
        });
    }

    initFormData() {
        //Fill main form default values
        //this._http.get(this._baseUrl + "api/TransportTopCgrMelden/getDefaults")
        this._httpGTM.KlantContactInfo().toPromise()
            .then(
                (data: any) => {
                    this.RForm.patchValue({
                        KlantContactAchternaam: data.klantContactAchternaam,
                        KlantContactVoornaam: data.klantContactVoornaam,
                        KlantContactTelefoon: data.klantContactTelefoon,
                        KlantContactEmail: data.klantContactEmail
                    });
                })
            .catch(
                error => { this.showWarningToast(error.message); }
            );
        //Fill main form dropdowns
        //this._http.get(this._baseUrl + "api/TransportTopCgrMelden/GetTopCGRlist")
        this._httpGTM.TopCgrList().toPromise()
            .then(
                (data: any) => {
                    this.topcgrlist = data;
                })
            .catch(
                error => { this.showWarningToast(error.message); }
            );
        //this._http.get(this._baseUrl + "api/TransportTopCgrMelden/GetGrondtransportmeldingGebruikList")
        this._httpGTM.GebruikList().toPromise()
            .then(
                (data: any) => {
                    this.tglist = data;
                    this.RForm.patchValue({ GrondtransportmeldingGebruikId: 1 });
                })
            .catch(
                error => { this.showWarningToast(error.message); }
            );
    }

    setHandlers() {
        //Dropdowns valueChanges handlers
        this.RForm.controls["TVbeschikbaar"].valueChanges.subscribe(
            (selectedValue) => {
                this.clearZone();
                if (selectedValue === "1") {
                    this.RForm.controls["Adres"].disable();
                    this.RForm.controls["Postcode"].disable();
                    this.RForm.controls["Plaats"].disable();
                    this.RForm.controls["LX"].disable();
                    this.RForm.controls["LY"].disable();
                    this.RForm.controls["TechnischVerslagID"].enable();
                    this.RForm.controls["TechnischVerslagID"].enable();
                } else {
                    this.RForm.patchValue({ TechnischVerslagID: null });
                    this.RForm.controls["Adres"].enable();
                    this.RForm.controls["Postcode"].enable();
                    this.RForm.controls["Plaats"].enable();
                    this.RForm.controls["LX"].enable();
                    this.RForm.controls["LY"].enable();
                    this.RForm.controls["TechnischVerslagID"].disable();
                    this.addZone();
                }
            }
        );
        this.RForm.controls["TopCrgId"].valueChanges.subscribe(
            (selectedValue) => {
                if (selectedValue === "") {
                    this.RForm.patchValue({
                        TopStraat: "",
                        TopStraat2: "",
                        TopPostcode: "",
                        TopGemeente: ""
                    });
                } else {
                    //let params = new HttpParams();
                    //params = params.append("topCGRId", this.RForm.controls["TopCrgId"].value);
                    //this._http.get(this._baseUrl + "api/TransportTopCgrMelden/GetTopCGR", { params: params })
                    this._httpKlant.PocoEntity(this.RForm.controls["TopCrgId"].value)
                        .subscribe(
                            (data: any) => {
                                this.RForm.patchValue({
                                    TopStraat: data.inrichtingStraat,
                                    TopStraat2: data.inrichtingStraat2,
                                    TopPostcode: data.inrichtingPostcode,
                                    TopGemeente: data.inrichtingGemeente
                                });
                            },
                            error => { this.showWarningToast(error.message); }
                        );
                }
            }
        );

        this.RForm.controls.TransportAanvangDatum.valueChanges.subscribe(e => {
            const today = new Date();
            const value = new Date(e);

            today.setHours(0, 0, 0, 0);
            value.setHours(0, 0, 0, 0);

            if (value < today)
                this.showWarningToastWithoutTimeout(appLabels.RegularisatieTopCgr);
        });
    }


    //Zones-related functions
    clearZone() {
        while (this.zones.length !== 0) { this.zones.removeAt(0) }
    }

    addZone() {
        this.zones.push(this.createZone());
    }
    delZone(ind: number) {
        this.zones.removeAt(ind);
        if (this.zones.length === 0 && this.RForm.controls["TVbeschikbaar"].value != "1") this.addZone();
    }

    fillTVzones() {
        this.clearZone();

        this._httpZone.FillTVZones(this.RForm.controls["TechnischVerslagID"].value).toPromise()
            .then(
                (data: any) => {
                    for (let i = 0; i < data.zones.length; i++) {
                        this.addZone();
                        (this.zones.controls[i] as FormGroup).patchValue({
                            beschrijving: data.zones[i].beschrijving, x: data.zones[i].kguCode, y: data.zones[i].kgiCode, z: data.zones[i].kgoCode, saldo: data.zones[i].saldo,
                            technischVerslagZoneID: data.zones[i].tvZoneID
                        });
                        this.isTechnischVerslagVlarebo2008 = data.isTechnischVerslagVlarebo2008;
                    }
                })
            .catch(error => {
                this.showWarningToast((error.status === 500 && error.error && error.error > "") ? error.error : error.message);
            }
            );
    }

    //Validation

    isVolumesValid(): boolean {
        if (this.zones == null || this.zones == undefined || this.zones.length === 0) return true;

        let i: number;
        for (i = 0; i < this.zones.controls.length; i++) {
            const zone = this.zones.controls[i] as FormGroup;
            if (this.isNullOrUndefined(zone.controls.hoeveelheid.value) || zone.controls.hoeveelheid.value == '')
                continue;

            const hoev = Number(zone.controls.hoeveelheid.value);
            if (hoev >= 0)
                return true;
        }

        return false;
    }

    TransportEindeDatumValidate() {
        setTimeout((RForm: FormGroup) => { RForm.controls["TransportEindeDatum"].updateValueAndValidity() }, 10, this.RForm);
    }

    RFormIsValid(): boolean {

        const invalid = new Array<string>();
        const controls = this.RForm.controls;
        for (const name in controls) {
            if (controls[name].invalid) {
                invalid.push(name);
            }
        }

        const zones = this.RForm.get("Zones") as FormArray;
        for (var i = 0; i < zones.length-1; i++) {
            const zone = (this.zones.controls[i] as FormGroup).controls;            
            for (const name in zone) {
                if (zone[name].invalid) {
                    invalid.push("zone " + i + " " + name);
                }
            }
        }
        
        

        return this.RForm.valid && this.zones.length > 0 && this.isVolumesValid() && this.RForm.controls.lockMultiSave.valid;
    }

    //TV Search modal form

    onTVSelected(id: number) {
        this.RForm.patchValue({ TechnischVerslagID: id });
        this.fillTVzones();
    }

    toGeopunt() {
        const x = this.RForm.controls.LX.value;
        const y = this.RForm.controls.LY.value;
        const street = this.RForm.controls.Adres.value;
        const city = this.RForm.controls.Plaats.value;

        const geopunt = new GeopuntScripts(this.sanitizer);
        const url = geopunt.getGeopuntUrl(x, y, street, city);

        window.open(url);
    }

    //Data submit
    sendFormData() {
        if (this.regId > 0) return;
        this.inSending = true;
        this.RForm.controls.lockMultiSave.setValue(true); // this will prevent multiple save clicks

        this._httpGTM.Insert(this.RForm.value).toPromise()
            .then((regId: any) => {
                this.router.navigate([regId], { relativeTo: this.route });
            })
            .catch(error => {
                this.inSending = false;
                this.RForm.controls.lockMultiSave.setValue(false); 
                this.showWarningToast(appLabels.SendFail + ": " + (error.status === 500 && error.error && error.error > "") ? error.error : error.message);
            });
    }

    GTMoverview() {
        this.router.navigate(["/transport-top-cgr-detail", this.regId]);
    }

    testPDF() {
        this._http.get(this._baseUrl + "api/TransportTopCgrMelden/testPDF")
            .subscribe(
                (data: any) => {

                },
                error => {
                    this.showWarningToast((error.status === 500 && error.error && error.error > "") ? error.error : error.message);
                });
    }
}

