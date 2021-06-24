import { Component, OnInit, Inject } from "@angular/core";

import { appLabels } from "../scripts/appLabels";
import { GeneralScripts } from "../scripts/general.scripts";

import { ToastrService } from "ngx-toastr";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "grondverzettoelating-aanvraagok",
    templateUrl: "./grondverzettoelating-aanvraagok.component.html",
    styleUrls: ["./grondverzettoelating-aanvraagok.component.css"]
})
/** grondverzettoelating-aanvragen component*/
export class GrondverzettoelatingAanvraagOkComponent extends GeneralScripts implements OnInit {
    // QueryString Parameter
    BbrId: number = 0;

    commonLabels = appLabels;

    constructor(@Inject("BASE_URL") private readonly _baseUrl: string, private readonly _toastr: ToastrService, private readonly _route: ActivatedRoute) {
        super(_toastr);
    }

    ngOnInit(): void {
        this._route.params.subscribe(params => { if (params["BbrId"]) this.BbrId = +params["BbrId"] });
        if (this.BbrId <= 0) return;
    }
}