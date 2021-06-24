import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { GeneralScripts } from "../../scripts/general.scripts";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { HttpKlantService } from "../../services/http-klant.service";
import { appLabels } from "../../scripts/appLabels";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { AuthenticationService, UserRoles } from "../../services/authentication.service";
import { DatePipe } from "@angular/common";
import { ISgsKlantWijziging } from "../../scripts/sgsInterfaces.scripts";

@Component({
    selector: "gw-klantwijz-grid",
    templateUrl: "./gw-klantwijz-grid.component.html",
    styleUrls: ["./gw-klantwijz-grid.component.css"]
})

export class gwKlantWijzGridComponent extends GeneralScripts implements OnInit {
    appLabels = appLabels;

    StatusList: ISgsKlantWijziging[] = null;
    private rows: ISgsKlantWijziging[] = null;
    temp: any[] = [];
    @ViewChild(DatatableComponent) table: DatatableComponent;

    isGWUser: boolean | null = null;

    StsForm: FormGroup;

    constructor(private readonly _toastr: ToastrService, private readonly fb: FormBuilder, private readonly httpKlant: HttpKlantService, private readonly router: Router, private readonly route: ActivatedRoute, private readonly auth: AuthenticationService) {
        super(_toastr);
    }

    ngOnInit(): void {

        this.StsForm = this.fb.group({
            sts: [-1],
            klantId: [""],
            anaam: [""],
            vnaam: [""],
            pcode: [""],
            plaats: [""]
        });

        this.auth.getRole().toPromise()
            .then((role: UserRoles) => {
                this.isGWUser = (role !== UserRoles.Klant);
                this.loadStatusList();
            });            
    }

    filter() {
        const klantId = this.StsForm.controls.klantId.value;
        const anaam = this.StsForm.controls.anaam.value;
        const vnaam = this.StsForm.controls.vnaam.value;
        const pcode = this.StsForm.controls.pcode.value;
        const plaats = this.StsForm.controls.plaats.value;

        // filter our data
        const temp = this.temp.filter((row: any) => {
            return (!klantId || (!this.isNullOrUndefined(row.klantID) && row.klantID.toString().indexOf(klantId) !== -1))
                && (!anaam || (!this.isNullOrUndefined(row.achternaam) && row.achternaam.toLowerCase().indexOf(anaam) !== -1))
                && (!vnaam || (!this.isNullOrUndefined(row.voornaam) && row.voornaam.toLowerCase().indexOf(vnaam) !== -1))
                && (!pcode || (!this.isNullOrUndefined(row.postcode) && row.postcode.toLowerCase().indexOf(pcode) !== -1))
                && (!plaats || (!this.isNullOrUndefined(row.plaats) && row.plaats.toLowerCase().indexOf(plaats) !== -1))
        });

        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }

    //loadStatus(type: string) {
    //    this.httpBBR.StatusDefinitionList(this.Type).toPromise()
    //        .then((lst: IBBRStatus[]) => {
    //            if (lst != null && lst != undefined) {
    //                this.StatusList = [...lst];
    //                this.statusChanged();
    //            }
    //        });
    //}

    loadStatusList() {
        this.httpKlant.sgsUnhandledWijzigingen().toPromise()
            .then((lst: ISgsKlantWijziging[]) => {
                this.rows = lst;
                this.temp = [...lst];
            });
    }

    onActivate(event: any) {
        if (event.type === "dblclick") {
            this.linkToKlantWijz(event.row["id"], event.row["klantID"]);
        }
    }

    getRowClass(row: any) {
        return "ibtn";
    }

    linkToKlant(klantId: number) {
        // this.router.navigate(["/technisch-verslag-detail", tvId]);  GWBeheer/KlantEdit.aspx?KlantID={0}
    }

    linkToKlantWijz(Id: number, klantId: number) {
        // this.router.navigate(["/technisch-verslag-detail", tvId]);  // GWBeheer/KlantWijzigingenOverzicht.aspx?RecID={0}&KlantID={1}
    }
}