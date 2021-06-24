import { Component, OnInit } from "@angular/core";
import { GeneralScripts } from "../scripts/general.scripts";

import { ToastrService } from "ngx-toastr";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "kleinewerven-aanvragen",
    templateUrl: "./kleinewerven-aanvragen.component.html",
    styleUrls: ["./kleinewerven-aanvragen.component.css"]
})
/** kleinewerven-aanvragen component*/
export class KleineWervenAanvragenComponent extends GeneralScripts implements OnInit {
    TvId: number | null = null;

    constructor(
        private readonly _toastr: ToastrService,
        private readonly router: Router,
        private readonly route: ActivatedRoute) {
        super(_toastr);
    }

    ngOnInit(): void {
        if (this.route.snapshot.params["TvId"]) this.TvId = this.route.snapshot.params["TvId"];
    }
    routeTo(KwType: number) {
        (!this.TvId == null) ? this.router.navigate(["/kleinewerven-indienen", KwType], { queryParams: { TvId: this.TvId } }) : this.router.navigate(["/kleinewerven-indienen", KwType]);
    }
}