import { Component, Inject, Injector, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { ToastrService } from "ngx-toastr";

import { appLabels } from "../scripts/appLabels";
import { GeneralScripts } from "../scripts/general.scripts";
import { HttpTVService } from "../services/http-tv.service";
import { HttpTVZoneService } from "../services/http-tvzone.service";

import { IQGebruik, ITVZoneDetail } from "../scripts/interfaces.scripts";

@Component({
    selector: "technisch-verslag-zone-registratie",
    templateUrl: "./technisch-verslag-zone-registratie.component.html",
    styleUrls: ["./technisch-verslag-zone-registratie.component.css"]
})
export class TechnischVerslagZoneRegistratieComponent extends GeneralScripts implements OnInit {
    appLabels = appLabels;

    TvZoneId: number = 0;
    TvId: number = 0;
    IndieningsWijzeId: number = 0;
    isVlarebo2008: boolean = true;
    isGw: string;

    lstBU: IQGebruik[];
    lstBI: IQGebruik[];
    lstBO: IQGebruik[];

    // Form related
    ZForm: FormGroup;

    constructor(private readonly location: Location, private readonly fb: FormBuilder, private readonly toastr: ToastrService, private readonly httpTV: HttpTVService, private readonly httpZone: HttpTVZoneService, private readonly router: Router, private readonly route: ActivatedRoute) {
        super(toastr);
    }

    ngOnInit(): void {
        const snapshot = this.route.snapshot;
  

        if (snapshot.queryParams["TvId"]) {
            this.TvId = +snapshot.queryParams["TvId"];
        } else if (snapshot.params["TvId"]) {
            this.TvId = +snapshot.params["TvId"];
        }
        if (snapshot.queryParams["TvZoneId"]) {
            this.TvZoneId = +snapshot.queryParams["TvZoneId"];
        } else if (snapshot.params["TvZoneId"]) {
            this.TvZoneId = +snapshot.params["TvZoneId"];
        }
        if (snapshot.queryParams["WijzeId"]) {
            this.IndieningsWijzeId = +snapshot.queryParams["WijzeId"];
        } else if (snapshot.params["WijzeId"]) {
            this.IndieningsWijzeId = +snapshot.params["WijzeId"];
        }
        if (snapshot.queryParams["gw"]) {
            this.isGw = snapshot.queryParams["gw"];
        } else if (snapshot.params["gw"]) {
            this.isGw = snapshot.params["gw"];
        }

        // reactive forms using formbuilder technique
        this.ZForm = this.fb.group({
            TVZoneID: [""],
            TechnischVerslagID: [""],
            Beschrijving: ["", Validators.required],
            Hoeveelheid: ["", Validators.required],
            KwaliteitGebruikBuiten: ["", Validators.required],
            KwaliteitGebruikBinnen: ["", Validators.required],
            KwaliteitGebruikBouwstof: ["", Validators.required]
        });
     

        this.validateDropdown(this.ZForm.controls.KwaliteitGebruikBuiten);
        this.validateDropdown(this.ZForm.controls.KwaliteitGebruikBinnen);
        this.validateDropdown(this.ZForm.controls.KwaliteitGebruikBouwstof);
        this.ZForm.controls.KwaliteitGebruikBuiten.valueChanges.subscribe(_ => this.validateDropdown(this.ZForm.controls.KwaliteitGebruikBuiten));
        this.ZForm.controls.KwaliteitGebruikBinnen.valueChanges.subscribe(_ => this.validateDropdown(this.ZForm.controls.KwaliteitGebruikBinnen));
        this.ZForm.controls.KwaliteitGebruikBouwstof.valueChanges.subscribe(_ => this.validateDropdown(this.ZForm.controls.KwaliteitGebruikBouwstof));

        this.httpTV.IsVlarebo2008(this.TvId).toPromise()
            .then((vlarebo2008: boolean) => {

                if (vlarebo2008) {
                    this.loadDropdownData("U8", "I8", "O8");
                }
                else {
                    this.loadDropdownData("BU", "BI", "BO");
                }
            });

        if (this.TvZoneId !== 0) {
            this.loadInitialInfo();
        }
    }

    goBack() {
        switch (this.isGw) {
            case "gwTvEdit":
                this.router.navigate(['/gw/tv-edit', this.TvId]);
                break;
            default:
                this.location.back();
                break;
        }
    }

    validateDropdown(c: any) {
        const control = c as FormControl;
        if (control.value === "" || control.value === "null") {
            control.setErrors({ NotNull: true, message: "Gelieve een waarde te selecteren" });
        } else {
            control.setErrors(null);
        }
    }

    loadDropdownData(buit: string, binn:string, bouw: string) {
        this.httpZone.KwaliteitenGebruiken(buit).toPromise()
            .then((data: IQGebruik[]) => {
                this.lstBU = data;
            });
        this.httpZone.KwaliteitenGebruiken(binn).toPromise()
            .then((data: IQGebruik[]) => {
                this.lstBI = data;
            });
        this.httpZone.KwaliteitenGebruiken(bouw).toPromise()
            .then((data: IQGebruik[]) => {
                this.lstBO = data;
            });
    }

    loadInitialInfo() {
        this.httpZone.List(this.TvZoneId).toPromise()
            .then((data: ITVZoneDetail) => {
                if (data != null && data != undefined) {
                    this.ZForm.patchValue({
                        Beschrijving: data.beschrijving,
                        Hoeveelheid: data.hoeveelheid,
                        KwaliteitGebruikBuiten: data.kguKwaliteitGebruikID,
                        KwaliteitGebruikBinnen: data.kgiKwaliteitGebruikID,
                        KwaliteitGebruikBouwstof: data.kgoKwaliteitGebruikID
                    });
                    if (this.TvId == undefined || this.TvId === 0) {
                        this.TvId = data.technischVerslagID;
                    }
                }
                else {
                    this.showErrorToast("Inladen van initiële formgegevens kon niet worden voltooid");
                }
            })
            .catch(error => {
                this.handleError(error);
            });
    }

    formIsValid(): boolean {
        return this.ZForm.valid;
    }

    // Posting the form data to the MVC backend
    save() {
        this.ZForm.patchValue({
            TechnischVerslagID: this.TvId,
            TVZoneID: this.TvZoneId
        });

        this.httpZone.Save(this.ZForm.value).toPromise()
            .then((tvZoneId: any) => {
                switch (this.isGw) {
                    case "gwTvEdit":
                        this.router.navigate(['/gw/tv-edit', this.TvId]);
                        break;
                    default:
                        this.router.navigate(["/technisch-verslag-ok"], { queryParams: { TvId: this.TvId, WijzeId: this.IndieningsWijzeId } });
                        break;
                }
            })
            .catch(error => {
                this.handleError(error);
            });
    }
}