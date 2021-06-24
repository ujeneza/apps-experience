import { Component, ViewChild, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { ToastrService } from "ngx-toastr";

import { appLabels } from "../scripts/appLabels";
import { GeneralScripts } from "../scripts/general.scripts";
import { HttpKlantService } from "../services/http-klant.service";
import { HttpTVService } from "../services/http-tv.service";
import { HttpTVZoneService } from "../services/http-tvzone.service";
import { ITVStatus, ITVZone, IBranche } from "../scripts/interfaces.scripts";
import { DatatableComponent } from "@swimlane/ngx-datatable";

@Component({
    selector: "technisch-verslag-ok",
    templateUrl: "./technisch-verslag-ok.component.html",
    styleUrls: ['./technisch-verslag-ok.component.css']
})
/** technisch-verslag-ok component*/
export class TechnischVerslagOkComponent extends GeneralScripts implements OnInit {
    appLabels = appLabels;

    BrancheId: number | null;
    TvId: number | null;
    IndieningsWijzeId: number | null;
    is2008: boolean = false;
    showGrid: boolean = true;
    showBBR: boolean = false;

    // ngx-datatable related
    rows: ITVZone[] = [];

    @ViewChild(DatatableComponent) table: DatatableComponent;


    constructor(private readonly router: Router, private readonly route: ActivatedRoute, private readonly _toastr: ToastrService, private readonly _httpTV: HttpTVService, private readonly _httpZone: HttpTVZoneService, private readonly _httpKlant: HttpKlantService) {
        super(_toastr);
    }

    ngOnInit(): void {
        if (this.route.snapshot.queryParams["TvId"]) this.TvId = this.route.snapshot.queryParams["TvId"];
        if (this.route.snapshot.queryParams["WijzeId"]) this.IndieningsWijzeId = this.route.snapshot.queryParams["WijzeId"];
        if (this.TvId <= 0) return;
        if (this.IndieningsWijzeId <= 0) return;

        this.checkIs2008(this.TvId);

        this._httpKlant.BrancheEntity().toPromise()
            .then((data: IBranche) => {
                if (data) this.BrancheId = data.brancheID;

                if (!data || data.guiType === 0 || data.guiType === 3) {
                    this.showGrid = false;
                } else {
                    this.fillZones();
                }
            }).catch(error => {
                this.handleError(error);
            });
    }

    private checkIs2008(tvId: number) {
        this._httpTV.IsVlarebo2008(tvId)
            .subscribe((data: boolean) => {
                this.is2008 = data;
            });
    }

    private fillZones() {
        this._httpZone.ListByTVId(this.TvId).toPromise()
            .then((data: ITVZone[]) => {
                this.rows = data;
                if (data && data.length > 0 && this.BrancheId !== 22) {
                    this.showBBR = true;
                }
            })
            .catch(error => {
                this.handleError(error);
            });
    }

    onActivate(event: any) {
        if (event.type === "dblclick") {
            this.linkEdit(event.row["tvZoneID"]);
        }
    }

    getRowClass(row: ITVZone) {
        return "ibtn";
    }

    getCellClass({ row, column, value }: any): any {
        return {
            'NgxCell': value === "test"
        };
    }

    linkDelete(id: number) {
        this._httpZone.Delete(id).toPromise()
            .then((data: any) => {
                this.fillZones();
            })
            .catch(error => {
                this.handleError(error);
            });
    }

    linkEdit(id: number) {
        this.router.navigate(["/technisch-verslag-zone-registratie"], { queryParams: { TvId: this.TvId, TvZoneId: id, WijzeId: this.IndieningsWijzeId } });
    }

    linkToOverzicht() {
        this.router.navigate(["/technisch-verslag-status"]);
    }

    linkToNieuwDeelvolume() {
        this.router.navigate(["/technisch-verslag-zone-registratie"], { queryParams: { TvId: this.TvId, WijzeId: this.IndieningsWijzeId } });
    }

    linkToGVT() {
        this.router.navigate(["/grondverzettoelating-aanvragen"], { queryParams: { TvId: this.TvId, OP: 'tv' } });
    }
}