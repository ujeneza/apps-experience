import { Component, OnInit, ViewChild, Input, SimpleChanges, OnChanges } from "@angular/core";
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
import { HttpFileService } from "../../services/http-file.service";



@Component({
    selector: "gw-export-grid",
    templateUrl: "./gw-export-grid.component.html",
    styleUrls: ["./gw-export-grid.component.css"], 
    providers: [DatePipe]
})

export class gwExportGridComponent extends GeneralScripts implements OnInit, OnChanges  {
    appLabels = appLabels;

    // ngx-datatable related
    rows: any = [];
    @ViewChild(DatatableComponent) z_table: DatatableComponent;

    // email history
    @Input() files: any[];
    @Input() id: number;
    @Input() fileType: string;


    constructor(
        private readonly _toastr: ToastrService,
        private readonly fb: FormBuilder,
        private readonly httpKlant: HttpKlantService,
        private readonly httpFile: HttpFileService,
        private readonly router: Router,
        private readonly route: ActivatedRoute,
        private readonly auth: AuthenticationService,
        private readonly localeService: BsLocaleService) {
        super(_toastr);
    }



    ngOnChanges(changes: SimpleChanges) {
        if (changes['files']) {
            console.log(changes.files.currentValue, 'ffile');
            this.rows = changes.files.currentValue;
        }

    }



    ngOnInit(): void {

        this.localeService.use("bootstrap-locale-nlbe");
        this.loadFiles();

          
    }

    loadFiles() {


        
    }

    getRowClass(row: any) {
        return "ibtn";
    }

    onActivate(event: any) {
        if (event.type === "dblclick") {
            this.showFileWithId(event.row["fileId"]);
        }
    }


        showFileWithId(id: number) {
            //this.httpFile.LoadFileWithoutUserCheck(id).toPromise()
            //    .then((response: any) => {
            //        this.openFile(response);
            //    })
            //    .catch(_ => {
            //        this.showErrorToast("Fout bij het laden van de files");
            //    });
        }
   


  




}


