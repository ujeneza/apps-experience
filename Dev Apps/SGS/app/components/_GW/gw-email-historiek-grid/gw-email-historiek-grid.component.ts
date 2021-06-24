import { Component, OnInit, ViewChild, Input, SimpleChanges, OnChanges } from "@angular/core";
import { GeneralScripts } from "../../scripts/general.scripts";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, FormControl, Validators, FormArray, AbstractControl } from "@angular/forms";
import { HttpKlantService } from "../../services/http-klant.service";
import { BsLocaleService } from "ngx-bootstrap/datepicker";
import { appLabels } from "../../scripts/appLabels";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { AuthenticationService, UserRoles } from "../../services/authentication.service";
import { DatePipe } from "@angular/common";
import { DomSanitizer } from "@angular/platform-browser";
import { isgsMailHistory } from "../../scripts/sgsInterfaces.scripts";
import { HttpMailService } from "../../services/http-mail.service";


@Component({
    selector: "gw-email-historiek-grid",
    templateUrl: "./gw-email-historiek-grid.component.html",
    styleUrls: ["./gw-email-historiek-grid.component.css"]
})

export class gwEmailHistoriekComponent extends GeneralScripts implements OnInit, OnChanges {
    appLabels = appLabels;

    // ngx-datatable related
    rows: isgsMailHistory[] = [];
    @ViewChild(DatatableComponent) z_table: DatatableComponent;

    // email history
    @Input() id: number;
    @Input() emailHistoriekType: EmailHistoriekTypes;
    @Input() toId: number;

    sendingNewMail = true;
    @Input('canSendNewEmail')
    get canSendNewEmail(): boolean {
        return this.sendingNewMail;
    }
    set canSendNewEmail(value: boolean) {
        this.sendingNewMail = "" + value !== "false";
    }

    ViewEmail = "view";
    isnewEmail: boolean = false;
    action: string;
    toIdMail: number = -1;



    constructor(
        private readonly _toastr: ToastrService,
        private readonly fb: FormBuilder,
        private readonly httpKlant: HttpKlantService,
        private readonly router: Router,
        private readonly httpMail: HttpMailService,
        private readonly route: ActivatedRoute,
        private readonly auth: AuthenticationService,
        private readonly sanitizer: DomSanitizer,
        private readonly localeService: BsLocaleService) {
        super(_toastr);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['toId']) {
            if (changes.toId.currentValue !==null) {

                this.toIdMail = changes.toId.currentValue
            } else {

            }
        }

    }

    ngOnInit(): void {
        this.loadDtgMail();
    }

    loadDtgMail() {
        this.httpMail.sgsGetMails(this.id, this.emailHistoriekType.toString()).toPromise()
            .then((response: isgsMailHistory[]) => {
                this.rows = [...response];
            })
            .catch(error => {
                console.log(error, "error");
            });
    }


    getRowClass(row: any) {
        return "ibtn";
    }

    onActivate(event: any) {
        if (event.type === "dblclick") {
            this.viewEmail(event.row["emailID"]);
        }
    }

    viewEmail(emailID: any) {
        this.action = "view";
        this.router.navigate(['gw/email', this.action, this.emailHistoriekType.toString(), this.id, emailID,]);
    }

    sendNewEmail() {
        this.action = "new";
        this.router.navigate(['gw/email', this.action, this.emailHistoriekType.toString(), this.id, this.toIdMail]);
    }
}

export enum EmailHistoriekTypes {
    None = "None",
    gwBbrEdit = "gwBbrEdit",
    gwGtmEdit = "gwGtmEdit",
    gwGvtEdit = "gwGvtEdit",
    gwKlantEdit = "gwKlantEdit",
    gwKwEdit = "gwKwEdit",
    gwPuinEdit = "gwPuinEdit",
    gwTvEdit = "gwTvEdit"
}

