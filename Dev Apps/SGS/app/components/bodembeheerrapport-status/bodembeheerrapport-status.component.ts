import { Component, OnInit } from "@angular/core";
import { GeneralScripts } from "../scripts/general.scripts";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute } from "@angular/router";
import { FillTypes } from "../bodembeheerrapport-grid/bodembeheerrapport-grid.component";

@Component({
    selector: "bodembeheerrapport-status",
    templateUrl: "./bodembeheerrapport-status.component.html",
    styleUrls: ["./bodembeheerrapport-status.component.css"]
})

export class BodembeheerrapportStatusComponent extends GeneralScripts implements OnInit {
    BBRFillType: FillTypes = FillTypes.ForBbrOverzicht;

    constructor(private readonly _toastr: ToastrService, private readonly _route: ActivatedRoute) {
        super(_toastr);
    }

    ngOnInit(): void {
        const snapshot = this._route.snapshot;

        if (snapshot.queryParams["T"]) {
            switch (snapshot.queryParams["T"]) {
                case "3":
                    this.BBRFillType = FillTypes.ForAanvragenBbr;
                    break;
            }
        }
    }
}