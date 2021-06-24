import { Component, OnInit, ViewChild } from "@angular/core";
import { GeneralScripts } from "../scripts/general.scripts";
import { ToastrService } from "ngx-toastr";
import { FormGroup, FormBuilder } from "@angular/forms";
import { HttpPuinService } from "../services/http-puin.service";
import { appLabels } from "../scripts/appLabels";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { Router } from "@angular/router";

@Component({
    selector: "puin-lmrp-status",
    templateUrl: "./puin-lmrp-status.component.html",
    styleUrls: ["./puin-lmrp-status.component.css"]
})

export class PuinLmrpStatusComponent extends GeneralScripts implements OnInit {

    constructor(private readonly toastr: ToastrService, private readonly router: Router, private readonly fb: FormBuilder, private readonly puinService: HttpPuinService) {
        super(toastr);
    }

    @ViewChild(DatatableComponent) grid: DatatableComponent;

    appLabels = appLabels;

    statusForm: FormGroup;

    statusList: any[];
    rows: any[] = [];
    temp: any[] = [];

    ngOnInit(): void {
        this.statusForm = this.fb.group({
            ID: [""],
            StatusID: [""],
            KlantKenmerk: [""],
            Status: [""]
        });

        this.loadStatusDropdownList();

        this.puinService.getAanvraagList()
            .then((data: any[]) => {
                this.temp = [...data];
                this.rows = data;
            }).catch(error => {
                this.handleError(error);
            });
    }

    loadStatusDropdownList() {
        this.puinService.getStatusList()
            .then((list: any[]) => {
                this.statusList = list;
                this.summaries = list;
            }).catch(error => {
                this.handleError(error);
            });
    }

    public summaries: any[];

    statusChanged(value: string) {
        this.statusForm.patchValue({ Status: (value === "-1" ? "" : value) });
        this.filter();
    }

    filter() {
        const id = this.statusForm.controls.ID.value;
        const klantKenmerk = this.statusForm.controls.KlantKenmerk.value;
        const status = this.statusForm.controls.Status.value.toLowerCase();

        // filter our data
        const temp = this.temp.filter(d => 
            ((d.id != null && d.id != undefined && d.id.toString().indexOf(id) !== -1) || !id)
            && ((d.klantKenmerk != null && d.klantKenmerk != undefined && d.klantKenmerk.toLowerCase().indexOf(klantKenmerk) !== -1) || !klantKenmerk)
            && ((d.status != null && d.status != undefined && d.status.toLowerCase().indexOf(status) !== -1) || !status)
            );

        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.grid.offset = 0;
    }

    onActivate(event: any) {
        if (event.type === "dblclick") {
            this.linkToPuin(event.row["id"]);
        }
    }

    linkToPuin(id: number) {
        this.showInfoToast("Under construction");
        //this.router.navigate(["/technisch-verslag-detail", id]);
    }
}