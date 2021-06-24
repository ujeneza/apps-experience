import { Component, OnInit, ViewEncapsulation, ViewChild } from "@angular/core";
import { HttpBBRService } from "../services/http-bbr.service";
import { GeneralScripts } from "../scripts/general.scripts";
import { ToastrService } from "ngx-toastr";
import { appLabels } from "../scripts/appLabels";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";
import { LocalstorageService } from "../services/localstorage.service";
import { DatePipe } from "@angular/common";
import { DatatableComponent } from "@swimlane/ngx-datatable";

@Component({
    selector: "bodembeheerrapport-aanvragen",
    templateUrl: "./bodembeheerrapport-aanvragen.component.html",
    styleUrls: ["./bodembeheerrapport-aanvragen.component.css"],
    encapsulation: ViewEncapsulation.None
})

export class BodembeheerrapportAanvragenComponent extends GeneralScripts implements OnInit {

    bbrForm: FormGroup;
    appLabels = appLabels;
    rows: any[] = [];
    temp: any[] = [];
    userId: number;

    @ViewChild(DatatableComponent) table: DatatableComponent;

    constructor(private readonly repositoryService: HttpBBRService, private readonly localstorageService: LocalstorageService, private readonly formBuilder: FormBuilder, private readonly router: Router, private readonly toastr: ToastrService) {
        super(toastr);
    }

    ngOnInit(): void {
        const logindata = this.localstorageService.getLoginData();
        if (logindata != null) this.userId = logindata.userId;

        this.bbrForm = this.formBuilder.group({
            bbrNummer: [""],
            klantKenmerk: [""],
            projects: [""],
            tvid: [""],
            afzetadres: [""],
            plaats: [""],
            aanvraagDatum: [""],
            status: [""]
        });

        this.repositoryService.TransportListNr3().toPromise()
            .then((data: any[]) => {
                this.rows = data;
                this.temp = [...data];
            })
            .catch(error => {
                this.handleError(error);
            });
    }

    filter() {
        const bbrNr = this.bbrForm.controls.bbrNummer.value;
        const kenmerk = this.bbrForm.controls.klantKenmerk.value;
        const projects = this.bbrForm.controls.projects.value;
        const tvid = this.bbrForm.controls.tvid.value;
        const afzetAdres = this.bbrForm.controls.afzetadres.value;
        const plaats = this.bbrForm.controls.plaats.value;
        const aanvraagDatum = this.bbrForm.controls.aanvraagDatum.value;
        const status = this.bbrForm.controls.status.value;
        const dp = new DatePipe("en-US");

        // filter our data
        const temp = this.temp.filter((row: any) => {
            var aanvraagDatumAsString: string | null = null;
            if (aanvraagDatum > "") { aanvraagDatumAsString = dp.transform(row.aanvraagDatum, "dd/MM/yyyy"); }

            return (!bbrNr || (!this.isNullOrUndefined(row.bbrNummer) && row.bbrNummer.toString().indexOf(bbrNr) !== -1))
                && (!kenmerk || (!this.isNullOrUndefined(row.klantKenmerk) && row.klantKenmerk.toLowerCase().indexOf(kenmerk) !== -1))
                && (!projects || (!this.isNullOrUndefined(row.projects) && row.projects.toLowerCase().indexOf(projects) !== -1))
                && (!tvid || (!this.isNullOrUndefined(row.tvid) && row.tvid.toString().indexOf(tvid) !== -1))
                && (!afzetAdres || (!this.isNullOrUndefined(row.afzetadres) && row.afzetadres.toLowerCase().indexOf(afzetAdres) !== -1))
                && (!plaats || (!this.isNullOrUndefined(row.plaats) && row.plaats.toLowerCase().indexOf(plaats) !== -1))
                && (!aanvraagDatum || (!this.isNullOrUndefined(aanvraagDatumAsString) && aanvraagDatumAsString.indexOf(aanvraagDatum) !== -1))
                && (!status || (!this.isNullOrUndefined(row.status) && row.status.indexOf(status) !== -1));
        });

        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }

    onActivate(event: any) {
        if (event.type === "dblclick") {
            this.showBbrDetail(event.row["bbrNummer"]);
        }
    }

    getRowClass(row: any) {
        return "ibtn";
    }

    showBbrDetail(bbrId: number) {
        this.router.navigate(["/bodembeheerrapport-detail"], { queryParams: { bbrId: bbrId } });
    }

    showTv(tvId: number) {
        this.router.navigate(["/technisch-verslag-detail", tvId]);
    }
}