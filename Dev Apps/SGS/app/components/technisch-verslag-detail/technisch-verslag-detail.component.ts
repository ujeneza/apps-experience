import { Component, Inject, ViewChild, ViewEncapsulation, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

import { appLabels } from "../scripts/appLabels";
import { GeneralScripts } from "../scripts/general.scripts";

import { DomSanitizer } from "@angular/platform-browser";
import { HttpFileService } from "../services/http-file.service";
import { HttpTVService } from "../services/http-tv.service";
import { ITVDetail } from "../scripts/interfaces.scripts";
import { DatatableComponent } from "@swimlane/ngx-datatable";

@Component({
    selector: "technisch-verslag-detail",
    templateUrl: "./technisch-verslag-detail.component.html",
    styleUrls: ["./technisch-verslag-detail.component.css"],
    encapsulation: ViewEncapsulation.None
})
/** technisch-verslag-detail component*/
export class TechnischVerslagDetailComponent extends GeneralScripts implements OnInit {
    commonLabels = appLabels;

    Id: number = 0;
    Detail: ITVDetail;
    isVlarebo2008: boolean = true;

    // ngx-datatable related
    z_rows: any = [];
    g_rows: any = [];
    b_rows: any = [];
    tf_rows: any = [];
    mf_rows: any = [];

    @ViewChild(DatatableComponent) z_table: DatatableComponent;
    @ViewChild(DatatableComponent) g_table: DatatableComponent;
    @ViewChild(DatatableComponent) b_table: DatatableComponent;
    @ViewChild(DatatableComponent) mf_table: DatatableComponent;
    @ViewChild(DatatableComponent) tf_table: DatatableComponent;

    constructor(private readonly router: Router, private readonly _httpFile: HttpFileService, private readonly _httpTV: HttpTVService, @Inject("BASE_URL") private readonly _baseUrl: string, private readonly _toastr: ToastrService, private readonly route: ActivatedRoute, private readonly _sanitizer: DomSanitizer) {
        super(_toastr);
    }

    ngOnInit(): void {
        if (this.route.snapshot.params["id"]) this.Id = this.route.snapshot.params["id"];
        if (this.Id <= 0) return;

        this.loadDetailData();
    }

    loadDetailData() {
        this._httpTV.Detail(this.Id).toPromise()
            .then((data: ITVDetail) => {
                this.Detail = data;
                this.z_rows = [...data.zones];
                this.g_rows = [...data.gtm];
                this.b_rows = [...data.bbr];
                this.tf_rows = [...data.tvFiles];
                this.mf_rows = [...data.mailConformFiles];

                this.isVlarebo2008 = data.isEvaluatieVlarebo2008;
            })
            .catch(error => {
                this.handleError(error);
            });
    }

    onActivate(event: any) {
        if (event.type === "dblclick") {
            this.showFileId(event.row["id"]);
        }
    }

    showFileId(id: number) {
        this._httpFile.LoadFile(id).toPromise()
            .then((response: any) => {
                this.openFile(response);
            })
            .catch(error => {
                this.showWarningToast("Laden bestand mislukt");
            });
    }

    linkToBBR(BBRId: number) {
        this.router.navigate(["/bodembeheerrapport-detail"], { queryParams: { bbrId: BBRId } });
    }

    linkToGTM(GTMId: number) {
        this.router.navigate(["/transport-top-cgr-detail", GTMId]);
    }
}