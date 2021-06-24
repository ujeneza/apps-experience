import { Component, OnInit } from "@angular/core";
import { GeneralScripts } from "../scripts/general.scripts";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute } from "@angular/router";
import { FillTypes } from "../bodembeheerrapport-grid/bodembeheerrapport-grid.component";

@Component({
    selector: "grondverzettoelating-status",
    templateUrl: "./grondverzettoelating-status.component.html",
    styleUrls: ["./grondverzettoelating-status.component.css"]
})

export class GrondverzettoelatingStatusComponent extends GeneralScripts implements OnInit {
    GVTFillType: FillTypes = FillTypes.Normal;

    constructor(private readonly toastr: ToastrService, private readonly route: ActivatedRoute) {
        super(toastr);
    }

    ngOnInit(): void {
        const snapshot = this.route.snapshot;
        if (snapshot.queryParams["FillType"]) this.GVTFillType = snapshot.queryParams["FillType"];
    }
}