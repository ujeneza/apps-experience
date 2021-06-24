import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { GeneralScripts } from "../scripts/general.scripts";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { HttpBBRService } from "../services/http-bbr.service";
import { IBBRStatus, IBBRStatusGridRecord } from "../scripts/interfaces.scripts";
import { appLabels } from "../scripts/appLabels";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { AuthenticationService, UserRoles } from "../services/authentication.service";
import { DatePipe } from "@angular/common";

@Component({
    selector: "bodembeheerrapport-grid",
    templateUrl: "./bodembeheerrapport-grid.component.html",
    styleUrls: ["./bodembeheerrapport-grid.component.css"]
})

export class BodembeheerrapportGridComponent extends GeneralScripts implements OnInit {
    appLabels = appLabels;

    StatusList: IBBRStatus[] = null;
    private rows: IBBRStatusGridRecord[] = null;
    temp: any[] = [];
    @ViewChild(DatatableComponent) table: DatatableComponent;

    @Input() title = "";
    @Input("Type") Type: string = "GVT";
    @Input("FillType") FillType: FillTypes = FillTypes.Normal;
    isGWUser: boolean | null = null;

    forGWStart = true;
    @Input('isGWStart')
    get isGWStart(): boolean {
        return this.forGWStart;
    }
    set isGWStart(value: boolean) {
        this.forGWStart = "" + value !== "false";
    }

    userRoles = UserRoles;
    fillTypes = FillTypes;
    userRole: UserRoles = UserRoles.Klant;

    StsForm: FormGroup;

    constructor(private readonly _toastr: ToastrService, private readonly fb: FormBuilder, private readonly httpBBR: HttpBBRService, private readonly router: Router, private readonly route: ActivatedRoute, private readonly auth: AuthenticationService) {
        super(_toastr);
    }

    ngOnInit(): void {

        this.StsForm = this.fb.group({
            sts: [-1],
            bbrNummer: [""],
            klantKenmerk: [""],
            tvid: [""],
            afzetadres: [""],
            plaats: [""],
            aanvraagDatum: [""],
            status: [""],
            fileType: [""]
        });

        this.auth.getRole().toPromise()
            .then((role: UserRoles) => {
                this.userRole = role;
                this.isGWUser = (role !== UserRoles.Klant);

                switch (this.FillType) {
                    case FillTypes.Normal:
                        this.loadStatusCombo(this.Type);
                        break;
                    case FillTypes.ForBbrOverzicht:
                        this.loadStatusCombo("BBR");
                        break;
                    default:
                        this.statusChanged();
                }
            });            
    }

    filter() {
        const bbrNr = this.StsForm.controls.bbrNummer.value;
        const kenmerk = this.StsForm.controls.klantKenmerk.value;
        const tvid = this.StsForm.controls.tvid.value;
        const afzetadres = this.StsForm.controls.afzetadres.value;
        const plaats = this.StsForm.controls.plaats.value;
        const aanvraagDatum = this.StsForm.controls.aanvraagDatum.value;
        const status = this.StsForm.controls.status.value;
        const fileType = this.StsForm.controls.fileType.value;
        const dp = new DatePipe("en-US");

        // filter our data
        const temp = this.temp.filter((row: any) => {
            var aanvraagDatumAsString: string | null = null;
            if (aanvraagDatum > "") { aanvraagDatumAsString = dp.transform(row.aanvraagDatum, "dd/MM/yyyy"); }

            return (!bbrNr || (!this.isNullOrUndefined(row.bbrNummer) && row.bbrNummer.toString().indexOf(bbrNr) !== -1))
                && (!kenmerk || (!this.isNullOrUndefined(row.klantKenmerk) && row.klantKenmerk.toLowerCase().indexOf(kenmerk) !== -1))
                && (!tvid || (!this.isNullOrUndefined(row.tvid) && row.tvid.toString().indexOf(tvid) !== -1))
                && (!afzetadres || (!this.isNullOrUndefined(row.afzetadres) && row.afzetadres.toLowerCase().indexOf(afzetadres) !== -1))
                && (!plaats || (!this.isNullOrUndefined(row.plaats) && row.plaats.toLowerCase().indexOf(plaats) !== -1))
                && (!aanvraagDatum || (!this.isNullOrUndefined(aanvraagDatumAsString) && aanvraagDatumAsString.indexOf(aanvraagDatum) !== -1))
                && (!status || (!this.isNullOrUndefined(row.status) && row.status.indexOf(status) !== -1))
                && (!fileType || (!this.isNullOrUndefined(row.fileType) && row.fileType.toLowerCase().indexOf(fileType) !== -1));
        });

        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }

    loadStatusCombo(type: string) {
        this.httpBBR.StatusDefinitionList(this.Type, false).toPromise()
            .then((lst: IBBRStatus[]) => {
                if (lst != null && lst != undefined) {
                    this.StatusList = [...lst];
                    this.statusChanged();
                }
            });
    }

    statusChanged() {
        let sts: number = +this.StsForm.controls.sts.value;
        if (sts === -1) {
            switch (this.Type) {
                case "GVT":
                    sts = -2;
                    break;
                case "BBR":
                    sts = -3;
                    break;
            }
        }
        switch (this.FillType) {
            case FillTypes.Normal:
            case FillTypes.ForBbrOverzicht:
            case FillTypes.ForAanvragenBbr:
                this.fillGrid(this.FillType === FillTypes.ForAanvragenBbr ? 3 : sts);
                break;
            case FillTypes.ForOnlineFilledOrUpload:
                this.fillOnlineFilledOrUpload();
                break;
            case FillTypes.ForAangevraagdeBbr:
                this.fillAangevraagdeBbr();
                break;
        }
    }

    fillGrid(sts: number) {
        this.httpBBR.TransportListNrAsInt(sts).toPromise()
            .then((lst: IBBRStatusGridRecord[]) => {
                this.rows = lst;
                this.temp = [...lst];
            });
    }

    fillOnlineFilledOrUpload() {
        this.httpBBR.FilledOrUploadList().toPromise()
            .then((lst: IBBRStatusGridRecord[]) => {
                this.rows = lst;
                this.temp = [...lst];
            });
    }

    fillAangevraagdeBbr() {
        this.httpBBR.StatusList(4, "T").toPromise()
            .then((lst: IBBRStatusGridRecord[]) => {
                this.rows = lst;
                this.temp = [...lst];
            });
    }

    onActivate(event: any) {
        if (event.type === "dblclick") {
            this.linkToBBR(event.row["bbrNummer"]);
        }
    }

    getRowClass(row: IBBRStatusGridRecord) {
        return "ibtn";
    }

    linkToBBR(bbrId: number) {
        if (this.isGWUser) {
            alert("link needed to BBR Detail for " + bbrId.toString());
            if (this.FillType === FillTypes.ForOnlineFilledOrUpload && bbrId.toString().startsWith("4")) {
                // GWBeheer/GTMEdit.aspx?GrondtransportMeldingID={0}
            } else {
                switch (this.Type) {
                    case "GVT":
                        // BBREdit.aspx?BodembeheerRapportID={0}
                        break;
                    case "BBR":
                        // BBREditFinaal.aspx?BodembeheerRapportID={0}
                        break;
                }
            }
        } else {
            switch (this.Type) {
                case "GVT":
                    // BBRDetail.aspx?BodembeheerRapportID={0}
                    this.router.navigate(["/bodembeheerrapport-detail"], { queryParams: { bbrId: bbrId } });
                    break;
                case "BBR":
                    // BBRDetail.aspx?BodembeheerRapportID={0}&BBR=Final
                    this.router.navigate(["/bodembeheerrapport-detail"], { queryParams: { bbrId: bbrId, bbr: "Final" } });
                    break;
            }
        }
    }

    linkToTV(tvId: number) {
        this.router.navigate(["/technisch-verslag-detail", tvId]);
    }
}

export enum FillTypes {
    Normal = 0,
    ForOnlineFilledOrUpload = 1,
    ForAangevraagdeBbr = 2,
    ForBbrOverzicht = 3,
    ForAanvragenBbr = 4
}
