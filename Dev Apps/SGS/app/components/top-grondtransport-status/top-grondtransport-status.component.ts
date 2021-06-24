import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpBBRService } from "../services/http-bbr.service";
import { HttpGTMService } from "../services/http-gtm.service";
import { ToastrService } from "ngx-toastr";
import { GeneralScripts } from "../scripts/general.scripts";
import { FormGroup, FormBuilder } from "@angular/forms";
import { appLabels } from "../scripts/appLabels";
import { Router } from "@angular/router";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { DatePipe } from "@angular/common";

@Component({
    selector: "top-grondtransport-status",
    templateUrl: "./top-grondtransport-status.component.html",
    styleUrls: ["./top-grondtransport-status.component.css"]
})

export class TopGrondtransportStatusComponent extends GeneralScripts implements OnInit {

    gtmForm: FormGroup;
    appLabels = appLabels;
    rows: any[] = [];
    temp: any[] = [];

    @ViewChild(DatatableComponent) table: DatatableComponent;

    constructor(private readonly bbrRepository: HttpBBRService, private readonly gtmRepository: HttpGTMService, private readonly toastr: ToastrService, private readonly formBuilder: FormBuilder, private readonly router: Router) {
        super(toastr);

        this.gtmForm = this.formBuilder.group({
            grondtransportmeldingID: [""],
            customer: [""],
            cityOfOrigin: [""],
            indieningsDatum: [""]            
        });
    }

    ngOnInit(): void {
        this.gtmRepository.List()
            .then((data : any[])=> {
                this.rows = data;
                this.temp = [...data];
            })
            .catch(() => {
                this.showErrorToast("Fout bij het laden van de gegevens");
            });
    }

    filter() {
        const gtmId = this.gtmForm.controls.grondtransportmeldingID.value;
        const customer = this.gtmForm.controls.customer.value;
        const cityOfOrigin = this.gtmForm.controls.cityOfOrigin.value;
        const indieningsDatum = this.gtmForm.controls.indieningsDatum.value;
        const dp = new DatePipe("en-US");

        // filter our data
        const temp = this.temp.filter((row: any) => {
            var indieningsDatumAsString: string | null = null;
            if (indieningsDatum > "") { indieningsDatumAsString = dp.transform(row.aanvraagDatum, "dd/MM/yyyy"); }

            return (!gtmId || (!this.isNullOrUndefined(row.grondtransportmeldingID) && row.grondtransportmeldingID.toString().indexOf(gtmId) !== -1))
                && (!customer || (!this.isNullOrUndefined(row.customer) && row.customer.toLowerCase().indexOf(customer) !== -1))
                && (!cityOfOrigin || (!this.isNullOrUndefined(row.cityOfOrigin) && row.cityOfOrigin.toLowerCase().indexOf(cityOfOrigin) !== -1))
                && (!indieningsDatum || (!this.isNullOrUndefined(indieningsDatum) && indieningsDatum.indexOf(indieningsDatum) !== -1));
        });

        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }

    onActivate(event: any) {
        if (event.type === "dblclick") {
            this.showGtmDetail(event.row["grondtransportmeldingID"]);
        }
    }

    getRowClass(row: any) {
        return "ibtn";
    }

    showGtmDetail(gtmId: number) {
        this.router.navigate(["/transport-top-cgr-detail", gtmId]);        
    }
}