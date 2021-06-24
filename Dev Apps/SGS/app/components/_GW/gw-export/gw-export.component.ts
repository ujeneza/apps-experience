import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { GeneralScripts } from "../../scripts/general.scripts";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import {FormGroup, FormBuilder, FormControl,Validators } from "@angular/forms";
import { HttpKlantService } from "../../services/http-klant.service";
import { BsLocaleService } from "ngx-bootstrap/datepicker";
import { appLabels } from "../../scripts/appLabels";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { AuthenticationService, UserRoles } from "../../services/authentication.service";
import { DatePipe } from "@angular/common";
import { ISgsStatusGridItem } from "../../scripts/sgsInterfaces.scripts";
import { IFile } from "../../scripts/interfaces.scripts";

const data: IFile[] = [
    { id: 1, fileName: "name 1", type: 1 },
    { id: 2, fileName: "name 2", type: 2 },
    { id: 3, fileName: "name 3", type: 3 },
    { id: 4, fileName: "name 4", type: 4},
    { id: 5, fileName: "name 5", type: 5 },
]

@Component({
    selector: "gw-export",
    templateUrl: "./gw-export.component.html",
    styleUrls: ["./gw-export.component.css"], 
    providers: [DatePipe]
})

export class gwExportComponent extends GeneralScripts implements OnInit {


    data: any[] = data

    constructor(
        private readonly _toastr: ToastrService,
        private readonly fb: FormBuilder,
        private readonly httpKlant: HttpKlantService,
        private readonly router: Router,
        private readonly route: ActivatedRoute,
        private readonly auth: AuthenticationService,
        private readonly localeService: BsLocaleService) {
        super(_toastr);
    }

    ngOnInit(): void {

        this.localeService.use("bootstrap-locale-nlbe");


          
    }





  




}
