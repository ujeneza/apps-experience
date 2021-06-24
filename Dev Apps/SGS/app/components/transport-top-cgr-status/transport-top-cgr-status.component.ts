import { Component, OnInit, Inject, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { DatePipe } from "@angular/common";
//import { HttpClient } from "@angular/common/http";
import { HttpGVTService } from "../services/http-gvt.service";
import { IGVTEntity } from "../scripts/interfaces.scripts";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { GeneralScripts } from "../scripts/general.scripts";
import { LocalstorageService } from "../services/localstorage.service";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { appLabels } from "../scripts/appLabels";


@Component({
    selector: "transport-top-cgr-status",
    templateUrl: "./transport-top-cgr-status.component.html",
    styleUrls: ["./transport-top-cgr-status.component.css"]
})
/** transport-top-cgr-status component*/

export class TransportTopCgrStatusComponent extends GeneralScripts implements OnInit {
    @ViewChild(DatatableComponent) table: DatatableComponent;
    FForm: FormGroup;
    trows: any[];
    temprows: any = [];
    userId: number;
    appLabels = appLabels;

    constructor(private readonly router: Router,
        //private readonly _http: HttpClient,
        private readonly httpGVT: HttpGVTService,
        @Inject("BASE_URL") private readonly _baseUrl: string,
        private readonly toastr: ToastrService,
        private readonly localstorageService: LocalstorageService,
        private readonly fb: FormBuilder) {
        super(toastr);
    }

    ngOnInit() {
        const d = this.localstorageService.getLoginData();
        if (d != null) this.userId = d.userId;

        this.FForm = this.fb.group({
            werkelijkeHoeveelheid: ["-1"],
            grondtransportmeldingID: [""],
            referentie: [""],
            adres: [""],
            technischVerslagID: [""],
            organisatie: [""],
            indieningsDatum: [""]
        });

        this.httpGVT.List().toPromise()
            .then(
                (data: any) => {
                    this.temprows = [...data];
                    this.trows = data;
                })
            .catch(error => {
                this.handleError(error);
            });
    }

    Filter() {
        const grondtransportmeldingId = this.FForm.controls.grondtransportmeldingID.value.toLowerCase();
        const referentie = this.FForm.controls.referentie.value.toLowerCase();
        const technischVerslagId = this.FForm.controls.technischVerslagID.value.toLowerCase();
        const adres = this.FForm.controls.adres.value.toLowerCase();
        const organisatie = this.FForm.controls.organisatie.value.toLowerCase();
        const indieningsDatum = this.FForm.controls.indieningsDatum.value.toLowerCase();
        const werkelijkeHoeveelheidType = this.FForm.controls.werkelijkeHoeveelheid.value;
        const dp = new DatePipe("en-US");
        // filter our data
        const temp = this.temprows.filter((r: any) => {
            var indieningsDatumAsString: string | null = null;
            if (indieningsDatum > "") { indieningsDatumAsString = dp.transform(r.indieningsDatum, "dd/MM/yyyy"); }
            return ((!referentie || (r.referentie != null && r.referentie.toLowerCase().indexOf(referentie) !== -1)) &&
                (!grondtransportmeldingId || (r.grondtransportmeldingID != null && r.grondtransportmeldingID.toString().indexOf(grondtransportmeldingId) !== -1)) &&
                (!technischVerslagId || (r.technischVerslagID != null && r.technischVerslagID.toString().indexOf(technischVerslagId) !== -1)) &&
                (!adres || (r.adres != null && r.adres.toLowerCase().indexOf(adres) !== -1)) &&
                (!organisatie || (r.organisatie != null && r.organisatie.toLowerCase().indexOf(organisatie) !== -1)) &&
                (!indieningsDatum || (indieningsDatumAsString != null && indieningsDatumAsString.indexOf(indieningsDatum) !== -1)) &&
                (!werkelijkeHoeveelheidType || (werkelijkeHoeveelheidType === "-1" && r.werkelijkeHoeveelheid >= 0) ||  (werkelijkeHoeveelheidType === "0" && r.werkelijkeHoeveelheid === 0) || (werkelijkeHoeveelheidType === "1" && r.werkelijkeHoeveelheid > 0))
            );
        });
        // update the rows
        this.trows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }

    getRowClass(row: any) {
        return "ibtn";
    }

    onActivate(event: any) {
        if (event.type === "dblclick") {
            this.showGTM(event.row["grondtransportmeldingID"]);
        }
    }

    showGTM(gtmId: number) {
        this.router.navigate(["/transport-top-cgr-detail", gtmId]);
    }

    showTV(tvId: number) {
        this.router.navigate(["/technisch-verslag-detail", tvId]);
    }

}

