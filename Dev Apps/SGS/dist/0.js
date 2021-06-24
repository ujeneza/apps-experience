exports.ids = [0];
exports.modules = {

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GwEditModule", function() { return GwEditModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_common_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gw_edit_routing_module__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_GW_gw_dossierbeheerder_edit_gw_dossierbeheerder_edit_component__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_GW_gw_gtm_edit_gw_gtm_edit_component__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_GW_gw_klant_edit_gw_klant_edit_component__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_GW_gw_email_historiek_grid_gw_email_historiek_grid_component__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_GW_gw_tv_edit_gw_tv_afsluit_reden_gw_tv_afsluit_reden_component__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_GW_gw_tv_edit_gw_tv_evaluatie_gw_tv_evaluatie_component__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__swimlane_ngx_datatable__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular_tree_component__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular_tree_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular_tree_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_chronos__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap_locale__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_file_upload__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng_trim_value_accessor__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng_trim_value_accessor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_ng_trim_value_accessor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__gw_tv_edit_gw_tv_edit_component__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__gw_email_gw_email_component__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__gw_gvt_edit_gw_gvt_edit_component__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__gw_gvt_edit_gw_gvt_studie_gw_gvt_studie_component__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__gw_export_gw_export_component__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__gw_export_grid_gw_export_grid_component__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_http_mail_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_event_listener_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__gw_puin_lmrp_edit_gw_puin_lmrp_edit_component__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__gw_modal_grid_gw_modal_grid_component__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__gw_puin_lmrp_edit_gw_modal_puin_gw_modal_puin_component__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_http_interceptor_service__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_authentication_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_http_bbr_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_http_dossier_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_http_file_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_http_gtm_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_http_gvt_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_http_klant_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_http_kleinewerven_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_http_tv_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_http_tvzone_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__services_http_puin_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__services_localstorage_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__services_loading_animation_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__gw_documents_gw_documents_component__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__gw_file_uploader_gw_file_uploader_component__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__gw_kw_edit_gw_kw_edit_component__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__gw_directives_allowOnlyNumbers_directives__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__gw_directives_dottedBorderBelow_directives__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__services_http_bestemming_service__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Customer Related
// GW Related











Object(__WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_chronos__["a" /* defineLocale */])("bootstrap-locale-nlbe", __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap_locale__["a" /* nlBeLocale */]);







 //
//import { gwKwEditComponent } from "./gw-kw-edit/gw-kw-edit.component";

























var GwEditModule = /** @class */ (function () {
    function GwEditModule() {
    }
    GwEditModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_17_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_12__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_13_angular_tree_component__["TreeModule"],
                __WEBPACK_IMPORTED_MODULE_18_ng_trim_value_accessor__["TrimValueAccessorModule"],
                __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap__["TooltipModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap__["BsDatepickerModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap__["PopoverModule"].forRoot(),
                // ToastrModule.forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__gw_edit_routing_module__["a" /* GwEditRoutingModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"]
            ],
            declarations: [
                //GW Related
                //gwBBRGridComponent,
                //gwBBRZoekUitgebreidComponent,
                //gwDocumentsComponent,
                //gwGTMGridComponent,
                //gwGTMZoekUitgebreidComponent,
                //gwGVTGridComponent,
                //gwGVTZoekUitgebreidComponent,
                //gwKlantGridComponent,
                //gwKlantWijzGridComponent,
                //gwKlantZoekUitgebreidComponent,
                //gwKWGridComponent,
                //gwKWZoekUitgebreidComponent,
                //gwTVGridComponent,
                //gwTVZoekUitgebreidComponent,
                //gwHomeComponent, 
                __WEBPACK_IMPORTED_MODULE_6__components_GW_gw_dossierbeheerder_edit_gw_dossierbeheerder_edit_component__["a" /* gwDossierbeheerderEditComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_GW_gw_gtm_edit_gw_gtm_edit_component__["a" /* gwGtmEditComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_GW_gw_klant_edit_gw_klant_edit_component__["a" /* gwKlantEditComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_GW_gw_email_historiek_grid_gw_email_historiek_grid_component__["b" /* gwEmailHistoriekComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_GW_gw_tv_edit_gw_tv_afsluit_reden_gw_tv_afsluit_reden_component__["a" /* gwTvAfsluitRedenComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_GW_gw_tv_edit_gw_tv_evaluatie_gw_tv_evaluatie_component__["a" /* gwTvEvaluatieComponent */],
                __WEBPACK_IMPORTED_MODULE_19__gw_tv_edit_gw_tv_edit_component__["a" /* gwTvEditComponent */],
                __WEBPACK_IMPORTED_MODULE_20__gw_email_gw_email_component__["a" /* gwEmailComponent */],
                __WEBPACK_IMPORTED_MODULE_21__gw_gvt_edit_gw_gvt_edit_component__["a" /* gwGvtEditComponent */],
                __WEBPACK_IMPORTED_MODULE_22__gw_gvt_edit_gw_gvt_studie_gw_gvt_studie_component__["a" /* gwGvtStudieComponent */],
                __WEBPACK_IMPORTED_MODULE_46__gw_kw_edit_gw_kw_edit_component__["a" /* gwKwEditComponent */],
                __WEBPACK_IMPORTED_MODULE_28__gw_modal_grid_gw_modal_grid_component__["a" /* gwModalGridComponent */],
                __WEBPACK_IMPORTED_MODULE_23__gw_export_gw_export_component__["a" /* gwExportComponent */],
                __WEBPACK_IMPORTED_MODULE_24__gw_export_grid_gw_export_grid_component__["a" /* gwExportGridComponent */],
                __WEBPACK_IMPORTED_MODULE_27__gw_puin_lmrp_edit_gw_puin_lmrp_edit_component__["a" /* gwPuinLmrpEditComponent */],
                __WEBPACK_IMPORTED_MODULE_29__gw_puin_lmrp_edit_gw_modal_puin_gw_modal_puin_component__["a" /* gwModalPuinComponent */],
                __WEBPACK_IMPORTED_MODULE_44__gw_documents_gw_documents_component__["b" /* gwDocumentsComponent */],
                __WEBPACK_IMPORTED_MODULE_45__gw_file_uploader_gw_file_uploader_component__["a" /* gwFileUploaderComponent */],
                __WEBPACK_IMPORTED_MODULE_48__gw_directives_dottedBorderBelow_directives__["a" /* DottedBorderBelowDirective */],
                __WEBPACK_IMPORTED_MODULE_47__gw_directives_allowOnlyNumbers_directives__["a" /* AllowOnlyNumbersDirective */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["HTTP_INTERCEPTORS"], useClass: __WEBPACK_IMPORTED_MODULE_30__services_http_interceptor_service__["a" /* HttpInterceptorService */], multi: true },
                __WEBPACK_IMPORTED_MODULE_31__services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_32__services_http_bbr_service__["a" /* HttpBBRService */],
                __WEBPACK_IMPORTED_MODULE_33__services_http_dossier_service__["a" /* HttpDossierService */],
                __WEBPACK_IMPORTED_MODULE_34__services_http_file_service__["a" /* HttpFileService */],
                __WEBPACK_IMPORTED_MODULE_35__services_http_gtm_service__["a" /* HttpGTMService */],
                __WEBPACK_IMPORTED_MODULE_36__services_http_gvt_service__["a" /* HttpGVTService */],
                __WEBPACK_IMPORTED_MODULE_37__services_http_klant_service__["a" /* HttpKlantService */],
                __WEBPACK_IMPORTED_MODULE_38__services_http_kleinewerven_service__["a" /* HttpKleineWervenService */],
                __WEBPACK_IMPORTED_MODULE_39__services_http_tv_service__["a" /* HttpTVService */],
                __WEBPACK_IMPORTED_MODULE_40__services_http_tvzone_service__["a" /* HttpTVZoneService */],
                __WEBPACK_IMPORTED_MODULE_41__services_http_puin_service__["a" /* HttpPuinService */],
                __WEBPACK_IMPORTED_MODULE_25__services_http_mail_service__["a" /* HttpMailService */],
                __WEBPACK_IMPORTED_MODULE_49__services_http_bestemming_service__["a" /* HttpBestemmingService */],
                __WEBPACK_IMPORTED_MODULE_42__services_localstorage_service__["a" /* LocalstorageService */],
                __WEBPACK_IMPORTED_MODULE_43__services_loading_animation_service__["a" /* LoadingAnimationService */],
                __WEBPACK_IMPORTED_MODULE_26__services_event_listener_service__["a" /* EventListenerService */],
            ],
        })
    ], GwEditModule);
    return GwEditModule;
}());



/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return gwEmailHistoriekComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailHistoriekTypes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_klant_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_datepicker__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scripts_appLabels__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_datatable__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_authentication_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_http_mail_service__ = __webpack_require__(200);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var gwEmailHistoriekComponent = /** @class */ (function (_super) {
    __extends(gwEmailHistoriekComponent, _super);
    function gwEmailHistoriekComponent(_toastr, fb, httpKlant, router, httpMail, route, auth, sanitizer, localeService) {
        var _this = _super.call(this, _toastr) || this;
        _this._toastr = _toastr;
        _this.fb = fb;
        _this.httpKlant = httpKlant;
        _this.router = router;
        _this.httpMail = httpMail;
        _this.route = route;
        _this.auth = auth;
        _this.sanitizer = sanitizer;
        _this.localeService = localeService;
        _this.appLabels = __WEBPACK_IMPORTED_MODULE_7__scripts_appLabels__["a" /* appLabels */];
        // ngx-datatable related
        _this.rows = [];
        _this.sendingNewMail = true;
        _this.ViewEmail = "view";
        _this.isnewEmail = false;
        _this.toIdMail = -1;
        return _this;
    }
    Object.defineProperty(gwEmailHistoriekComponent.prototype, "canSendNewEmail", {
        get: function () {
            return this.sendingNewMail;
        },
        set: function (value) {
            this.sendingNewMail = "" + value !== "false";
        },
        enumerable: true,
        configurable: true
    });
    gwEmailHistoriekComponent.prototype.ngOnChanges = function (changes) {
        if (changes['toId']) {
            if (changes.toId.currentValue !== null) {
                this.toIdMail = changes.toId.currentValue;
            }
            else {
            }
        }
    };
    gwEmailHistoriekComponent.prototype.ngOnInit = function () {
        this.loadDtgMail();
    };
    gwEmailHistoriekComponent.prototype.loadDtgMail = function () {
        var _this = this;
        this.httpMail.sgsGetMails(this.id, this.emailHistoriekType.toString()).toPromise()
            .then(function (response) {
            _this.rows = response.slice();
        })
            .catch(function (error) {
            console.log(error, "error");
        });
    };
    gwEmailHistoriekComponent.prototype.getRowClass = function (row) {
        return "ibtn";
    };
    gwEmailHistoriekComponent.prototype.onActivate = function (event) {
        if (event.type === "dblclick") {
            this.viewEmail(event.row["emailID"]);
        }
    };
    gwEmailHistoriekComponent.prototype.viewEmail = function (emailID) {
        this.action = "view";
        this.router.navigate(['gw/email', this.action, this.emailHistoriekType.toString(), this.id, emailID,]);
    };
    gwEmailHistoriekComponent.prototype.sendNewEmail = function () {
        this.action = "new";
        this.router.navigate(['gw/email', this.action, this.emailHistoriekType.toString(), this.id, this.toIdMail]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_datatable__["DatatableComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_datatable__["DatatableComponent"])
    ], gwEmailHistoriekComponent.prototype, "z_table", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], gwEmailHistoriekComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], gwEmailHistoriekComponent.prototype, "emailHistoriekType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], gwEmailHistoriekComponent.prototype, "toId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('canSendNewEmail'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], gwEmailHistoriekComponent.prototype, "canSendNewEmail", null);
    gwEmailHistoriekComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "gw-email-historiek-grid",
            template: __webpack_require__(631),
            styles: [__webpack_require__(632)]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["ToastrService"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_5__services_http_klant_service__["a" /* HttpKlantService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_11__services_http_mail_service__["a" /* HttpMailService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_9__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["DomSanitizer"],
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_datepicker__["a" /* BsLocaleService */]])
    ], gwEmailHistoriekComponent);
    return gwEmailHistoriekComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__["b" /* GeneralScripts */]));

var EmailHistoriekTypes;
(function (EmailHistoriekTypes) {
    EmailHistoriekTypes["None"] = "None";
    EmailHistoriekTypes["gwBbrEdit"] = "gwBbrEdit";
    EmailHistoriekTypes["gwGtmEdit"] = "gwGtmEdit";
    EmailHistoriekTypes["gwGvtEdit"] = "gwGvtEdit";
    EmailHistoriekTypes["gwKlantEdit"] = "gwKlantEdit";
    EmailHistoriekTypes["gwKwEdit"] = "gwKwEdit";
    EmailHistoriekTypes["gwPuinEdit"] = "gwPuinEdit";
    EmailHistoriekTypes["gwTvEdit"] = "gwTvEdit";
})(EmailHistoriekTypes || (EmailHistoriekTypes = {}));


/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return gwDocumentsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentTypes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_http_file_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_klant_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__gw_email_historiek_grid_gw_email_historiek_grid_component__ = __webpack_require__(614);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var gwDocumentsComponent = /** @class */ (function (_super) {
    __extends(gwDocumentsComponent, _super);
    function gwDocumentsComponent(_toastr, httpFile, httpKlant, sanitizer, router, route, datePipe, auth) {
        var _this = _super.call(this, _toastr) || this;
        _this._toastr = _toastr;
        _this.httpFile = httpFile;
        _this.httpKlant = httpKlant;
        _this.sanitizer = sanitizer;
        _this.router = router;
        _this.route = route;
        _this.datePipe = datePipe;
        _this.auth = auth;
        // Input Parameters
        _this.id = -1;
        _this.parentUploading = false;
        _this.sendingNewMail = true;
        _this.ShowDocuments = true;
        _this.ShowMails = true;
        _this.DoRefresh = false;
        _this._status = "selection";
        // Output Parameter
        _this.uploadingFiles = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.userFiles = [];
        _this.isLoading = true;
        _this.uploadStatus = "selection";
        _this.uploadedIDs = [];
        _this.uploadQueueCount = 0;
        return _this;
    }
    Object.defineProperty(gwDocumentsComponent.prototype, "uploadByParent", {
        get: function () {
            return this.parentUploading;
        },
        set: function (value) {
            this.parentUploading = "" + value !== "false";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gwDocumentsComponent.prototype, "canSendNewEmail", {
        get: function () {
            return this.sendingNewMail;
        },
        set: function (value) {
            this.sendingNewMail = "" + value !== "false";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gwDocumentsComponent.prototype, "showDocuments", {
        get: function () {
            return this.ShowDocuments;
        },
        set: function (value) {
            this.ShowDocuments = "" + value !== "false";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gwDocumentsComponent.prototype, "showMails", {
        get: function () {
            return this.ShowMails;
        },
        set: function (value) {
            this.ShowMails = "" + value !== "false";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gwDocumentsComponent.prototype, "refreshNeeded", {
        get: function () {
            return this.DoRefresh;
        },
        set: function (value) {
            this.DoRefresh = "" + value !== "false";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gwDocumentsComponent.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (value) {
            this._status = value;
            switch (value) {
                case "upload":
                    if (this.uploadQueueCount > 0) {
                        this.uploadedIDs.length = 0;
                        this.uploadStatus = "upload";
                        // This will be catched in filesUploaded()
                    }
                    else {
                        this.status = "selection";
                        this.uploadStatus = "selection";
                        this.uploadingFiles.emit(null);
                    }
                    break;
                case "clean":
                    if (this.uploadedIDs.length > 0) {
                        this.uploadStatus = "clean";
                    }
                    this.status = "selection";
                    this.uploadStatus = "selection";
                    break;
                default:
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    gwDocumentsComponent.prototype.ngOnChanges = function (changes) {
        if (changes['refreshNeeded']) {
            if (this.refreshNeeded) {
                this.ngOnInit();
                this.uploadStatus = "clean";
                this.refreshNeeded = false;
            }
        }
    };
    gwDocumentsComponent.prototype.ngOnInit = function () {
        if (this.ShowDocuments === false && this.ShowMails === false)
            this.isLoading = false;
        this.loadDocuments();
    };
    gwDocumentsComponent.prototype.loadDocuments = function () {
        var _this = this;
        switch (this.documentType) {
            case DocumentTypes.AanvraagLRMP:
                break;
            case DocumentTypes.BodemBeheerRapport:
                break;
            case DocumentTypes.GrondTransportMelding:
                this.uploadFileType = __WEBPACK_IMPORTED_MODULE_4__services_http_file_service__["b" /* fileTypes */].GwExtraFilesGtmEdit;
                this.filetypes = [
                    __WEBPACK_IMPORTED_MODULE_4__services_http_file_service__["b" /* fileTypes */].GwExtraFilesGtmEdit
                ];
                break;
            case DocumentTypes.GrondVerzetToelating:
                this.uploadFileType = __WEBPACK_IMPORTED_MODULE_4__services_http_file_service__["b" /* fileTypes */].GwExtraFilesBbrEdit;
                this.filetypes = [
                    __WEBPACK_IMPORTED_MODULE_4__services_http_file_service__["b" /* fileTypes */].GwExtraFilesBbrEdit,
                    __WEBPACK_IMPORTED_MODULE_4__services_http_file_service__["b" /* fileTypes */].GwExtraFilesBbrEditFinaal,
                    __WEBPACK_IMPORTED_MODULE_4__services_http_file_service__["b" /* fileTypes */].UserUploadOntvangstVerklaring,
                    __WEBPACK_IMPORTED_MODULE_4__services_http_file_service__["b" /* fileTypes */].UserOnlineFilledOntvangstVerklaring,
                    __WEBPACK_IMPORTED_MODULE_4__services_http_file_service__["b" /* fileTypes */].MailTransportVerklaring
                ];
                break;
            case DocumentTypes.Klant:
                this.uploadFileType = __WEBPACK_IMPORTED_MODULE_4__services_http_file_service__["b" /* fileTypes */].GwExtraFilesKlant;
                this.filetypes = [
                    __WEBPACK_IMPORTED_MODULE_4__services_http_file_service__["b" /* fileTypes */].KlantContract,
                    __WEBPACK_IMPORTED_MODULE_4__services_http_file_service__["b" /* fileTypes */].GwExtraFilesKlant
                ];
                break;
            case DocumentTypes.KleineWerken:
                var filetypes = [
                    __WEBPACK_IMPORTED_MODULE_4__services_http_file_service__["b" /* fileTypes */].MailVervoerDocumentKW,
                    __WEBPACK_IMPORTED_MODULE_4__services_http_file_service__["b" /* fileTypes */].MailKleineWervenMelding
                ];
                this.httpFile.ListWithoutBlobMultipleTypes(filetypes, this.id).toPromise().then(function (files) {
                    if (files != null && files.length > 0) {
                        _this.userFiles = files.slice();
                    }
                });
                break;
            case DocumentTypes.TechnischVerslag:
                this.uploadFileType = __WEBPACK_IMPORTED_MODULE_4__services_http_file_service__["b" /* fileTypes */].GwExtraFilesTv;
                this.filetypes = [
                    __WEBPACK_IMPORTED_MODULE_4__services_http_file_service__["b" /* fileTypes */].TechnischVerslag,
                    __WEBPACK_IMPORTED_MODULE_4__services_http_file_service__["b" /* fileTypes */].GwExtraFilesTv,
                    __WEBPACK_IMPORTED_MODULE_4__services_http_file_service__["b" /* fileTypes */].GwMailConformNietConformVerklaring
                ];
                break;
            default:
                return;
        }
        this.httpFile.multipleListFilesByTypeAndDocument(this.filetypes, this.id).toPromise()
            .then(function (files) {
            if (files != null && files.length > 0) {
                _this.userFiles = files.slice();
            }
            _this.isLoading = false;
        });
    };
    gwDocumentsComponent.prototype.showFileWithId = function (id) {
        var _this = this;
        this.httpFile.LoadFileWithoutUserCheck(id).toPromise()
            .then(function (response) {
            _this.openFile(response);
        })
            .catch(function (_) {
            _this.showErrorToast("Fout bij het laden van de files");
        });
    };
    // file-upload handlers
    gwDocumentsComponent.prototype.queueCountChanged = function (queueLength) {
        this.uploadQueueCount = queueLength;
    };
    gwDocumentsComponent.prototype.filesUploaded = function (fileIDs) {
        this.uploadedIDs = fileIDs.slice();
        // emit the uploaded IDs !!
        this.uploadingFiles.emit(this.uploadedIDs);
        this.uploadStatus = "selection";
    };
    gwDocumentsComponent.prototype.upload = function () {
        this.uploadedIDs.length = 0;
        this.uploadStatus = "upload";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], gwDocumentsComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], gwDocumentsComponent.prototype, "documentType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], gwDocumentsComponent.prototype, "emailHistoriekType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('uploadByParent'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], gwDocumentsComponent.prototype, "uploadByParent", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('canSendNewEmail'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], gwDocumentsComponent.prototype, "canSendNewEmail", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showDocuments'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], gwDocumentsComponent.prototype, "showDocuments", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showMails'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], gwDocumentsComponent.prototype, "showMails", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('refreshNeeded'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], gwDocumentsComponent.prototype, "refreshNeeded", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('status'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], gwDocumentsComponent.prototype, "status", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], gwDocumentsComponent.prototype, "uploadingFiles", void 0);
    gwDocumentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "gw-documents",
            template: __webpack_require__(634),
            styles: [__webpack_require__(635)]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["ToastrService"],
            __WEBPACK_IMPORTED_MODULE_4__services_http_file_service__["a" /* HttpFileService */],
            __WEBPACK_IMPORTED_MODULE_5__services_http_klant_service__["a" /* HttpKlantService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["DomSanitizer"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_7__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__["a" /* AuthenticationService */]])
    ], gwDocumentsComponent);
    return gwDocumentsComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__["b" /* GeneralScripts */]));

var DocumentTypes;
(function (DocumentTypes) {
    DocumentTypes["None"] = "None";
    DocumentTypes["AanvraagLRMP"] = "AanvraagLRMP";
    DocumentTypes["BodemBeheerRapport"] = "BodemBeheerRapport";
    DocumentTypes["GrondTransportMelding"] = "GrondTransportMelding";
    DocumentTypes["GrondVerzetToelating"] = "GrondVerzetToelating";
    DocumentTypes["Klant"] = "Klant";
    DocumentTypes["KleineWerken"] = "KleineWerken";
    DocumentTypes["TechnischVerslag"] = "TechnischVerslag";
})(DocumentTypes || (DocumentTypes = {}));


/***/ }),

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwDossierbeheerderEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_datepicker__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_http_dossier_service__ = __webpack_require__(199);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var gwDossierbeheerderEditComponent = /** @class */ (function (_super) {
    __extends(gwDossierbeheerderEditComponent, _super);
    function gwDossierbeheerderEditComponent(_toastr, fb, router, route, httpDossier, localeService) {
        var _this = _super.call(this, _toastr) || this;
        _this._toastr = _toastr;
        _this.fb = fb;
        _this.router = router;
        _this.route = route;
        _this.httpDossier = httpDossier;
        _this.localeService = localeService;
        // Upload Component
        _this.uploadedIDs = [];
        _this.uploadStatus = "selection";
        _this.uploadQueueCount = 0;
        return _this;
    }
    gwDossierbeheerderEditComponent.prototype.ngOnInit = function () {
        var snapshot = this.route.snapshot;
        if (snapshot.params["id"])
            this.dossierbeheerderId = +snapshot.params["id"];
        this.loadData(this.dossierbeheerderId);
        this.formOnInit();
        this.localeService.use("bootstrap-locale-nlbe");
    };
    gwDossierbeheerderEditComponent.prototype.formOnInit = function () {
        this.dossierbeheerderForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
            aanspreektitel: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](null, {
                validators: [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]
            }),
            voornaam: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](null, {
                validators: [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]
            }),
            achternaam: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](null, {
                validators: [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]
            }),
            telefoon: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](null, {
                validators: [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]
            }),
            email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](null, {
                validators: [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]
            }),
            login: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](null, {
                validators: [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]
            }),
            paswoord: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](null, {
                validators: [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]
            }),
            handtekeningIds: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](null, {
                validators: [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]
            }),
            administrator: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](null, {
                validators: [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]
            }),
            diensthoofd: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](null, {
                validators: [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]
            }),
            contributor: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](null, {
                validators: [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]
            }),
            active: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](null, {
                validators: [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]
            }),
        });
    };
    // load data
    gwDossierbeheerderEditComponent.prototype.loadData = function (id) {
        var _this = this;
        if (this.dossierbeheerderId === (-1 || '-1'))
            return;
        this.httpDossier.sgsMailById(id).toPromise()
            .then(function (response) {
            _this.dossierbeheerderForm.patchValue({
                aanspreektitel: null,
                voornaam: response.voornaam,
                achternaam: response.achternaam,
                email: response.email,
                login: response.login,
                paswoord: response.paswoord,
                handtekeningIds: null,
                administrator: null,
                diensthoofd: null,
                contributor: null,
                active: response.isActive,
            });
        })
            .catch(function (_) {
            _this.showErrorToast("Fout bij het laden van de mail");
        });
    };
    gwDossierbeheerderEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "gw-dossierbeheerder-edit",
            template: __webpack_require__(628),
            styles: [__webpack_require__(629)]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["ToastrService"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_6__services_http_dossier_service__["a" /* HttpDossierService */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_datepicker__["a" /* BsLocaleService */]])
    ], gwDossierbeheerderEditComponent);
    return gwDossierbeheerderEditComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__["b" /* GeneralScripts */]));



/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwGtmEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_datepicker__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_authentication_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__scripts_geopunt_scripts__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__gw_documents_gw_documents_component__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__gw_email_historiek_grid_gw_email_historiek_grid_component__ = __webpack_require__(614);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var gwGtmEditComponent = /** @class */ (function (_super) {
    __extends(gwGtmEditComponent, _super);
    function gwGtmEditComponent(_toastr, fb, router, route, auth, sanitizer, localeService) {
        var _this = _super.call(this, _toastr) || this;
        _this._toastr = _toastr;
        _this.fb = fb;
        _this.router = router;
        _this.route = route;
        _this.auth = auth;
        _this.sanitizer = sanitizer;
        _this.localeService = localeService;
        _this.state = "";
        _this.pageTitle = "";
        _this.gegevensVanHetTerreinTitle = "";
        _this.isForMijnGegevensAanpassen = false;
        _this.buttonText = "";
        _this.lidnummerBouwunieText = "Lidnummer bij koepel-organisatie";
        _this.hasPendingChanges = false;
        _this.showPasswordErrorMessage = false;
        _this.actionSucceeded = false;
        _this.actionSucceededMessage = "";
        _this.msgGebruik = "500 resterend";
        // gw-Documents
        _this.gwDocumentType = __WEBPACK_IMPORTED_MODULE_11__gw_documents_gw_documents_component__["a" /* DocumentTypes */].GrondTransportMelding;
        _this.canSendNewEmail = true;
        _this.emailHistoriekType = __WEBPACK_IMPORTED_MODULE_12__gw_email_historiek_grid_gw_email_historiek_grid_component__["a" /* EmailHistoriekTypes */].gwGtmEdit;
        // upload file
        _this.uploadedIDs = [];
        _this.uploadStatus = "selection";
        // email 
        _this.klantContactEmailID = 40;
        return _this;
    }
    gwGtmEditComponent.prototype.ngOnInit = function () {
        this.formOnInit();
        // Needed configuration for the bsDatepicker to accept dd/MM/yyyy formatting
        this.localeService.use("bootstrap-locale-nlbe");
        var snapshot = this.route.snapshot;
        this.gtmId = -1;
        if (snapshot.params["id"])
            this.gtmId = +snapshot.params["id"];
    };
    gwGtmEditComponent.prototype.formOnInit = function () {
        this.initialiseForm();
    };
    gwGtmEditComponent.prototype.initialiseForm = function () {
        this.gtmForm = this.fb.group({
            // grondtransportmeldingId: ["", [Validators.required]],
            // klant: ["", [Validators.required]],
            klantContactAchternaam: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            klantContactVoornaam: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            klantContactTelefoon: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            klantContactEmail: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern("^([\\w+-.%]+@[\\w-.]+\\.[A-Za-z]{2,4};?)+$")]],
            klantKenmerk: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            //technischVerslagId:[],
            //tvTitelTechnischVerslag: ["", [Validators.required]],
            //tvStraatOnderzoeksLocatie: ["", [Validators.required]],
            //tvGemeenteOnderzoeksLocatie: ["", [Validators.required]],
            adres: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            postcode: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            plaats: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            inrichtingLX: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(6), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].min(20000), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].max(280000)]],
            inrichtingLY: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(6), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].min(150000), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].max(250000)]],
            // add text on the Dom 
            topOrganisatie: [""],
            topStraat: [{ value: "", disabled: true }, [, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            topPostcode: [{ value: "", disabled: true }, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            topGemeente: [{ value: "", disabled: true }, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            grondtransportmeldingGebruik: [""],
            transportAanvangDatum: [""],
            transportEindeDatum: [""],
            remarkVaOnline: [""],
            afgravingsplanOntvangen: [""],
            verklaringAfnemerOntvangen: [""],
            gefactureerd: [""],
            interneOpmerking: [""],
            gtmVolumes: this.fb.array([])
        });
        this.gtmVolumes = this.gtmForm.get("gtmVolumes");
    };
    gwGtmEditComponent.prototype.createGtmVolume = function (vol) {
        return this.fb.group({
            tvZoneNr: [vol.tvZoneNr],
            beschrijving: [vol.beschrijving],
            kgbuOmschrijving: [vol.kgbuOmschrijving],
            kgbiOmschrijving: [vol.kgbiOmschrijving],
            kgboOmschrijving: [vol.kgboOmschrijving],
            hoeveelheid: [vol.hoeveelheid],
            werkelijkeHoeveelheid: [null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(7)]],
            grondtransportmeldingZoneID: [vol.grondtransportmeldingZoneID],
            tvZoneId: [vol.tvZoneId]
        });
    };
    // errors handling
    gwGtmEditComponent.prototype.sendData = function (fileIDs) {
        if (fileIDs != null) {
            this.uploadedIDs = fileIDs.slice();
            //  this.tvForm.patchValue({ uploadedIDs: this.uploadedIDs });
        }
        //   const klantFormValues: IKlantPoco = this.getformValues();
        //this.httpKlant.sgsSave(klantFormValues).toPromise()
        //    .then((docId: any) => {
        //        this.showSuccesToast("De gegevens werden opgeslagen");
        //        this.router.navigate(["/gw-klant-grid"]);
        //    })
        //    .catch(error => {
        //        this.handleError(error);
        //        console.log(error, "error");
        //        if (this.uploadedIDs.length > 0) {
        //            this.uploadStatus = "clean";
        //        }
        //    });
    };
    gwGtmEditComponent.prototype.save = function () {
        // Upload the files first if any
        this.uploadStatus = "upload";
        // gw-documents component will trigger sendData with the ids of the uploaded files
    };
    gwGtmEditComponent.prototype.sendNewEmail = function () {
        this.router.navigate(['gw/email', "new", this.emailHistoriekType, this.gtmId]);
    };
    gwGtmEditComponent.prototype.toGeopunt = function () {
        var x = this.gtmForm.controls.inrichtingLX.value;
        var y = this.gtmForm.controls.inrichtingLY.value;
        var street = this.gtmForm.controls.adres.value;
        var city = this.gtmForm.controls.plaats.value;
        var geopunt = new __WEBPACK_IMPORTED_MODULE_10__scripts_geopunt_scripts__["a" /* GeopuntScripts */](this.sanitizer);
        var url = geopunt.getGeopuntUrl(x, y, street, city);
        window.open(url);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable__["DatatableComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable__["DatatableComponent"])
    ], gwGtmEditComponent.prototype, "table", void 0);
    gwGtmEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "gw-gtm-edit",
            template: __webpack_require__(637),
            styles: [__webpack_require__(638)],
            providers: [__WEBPACK_IMPORTED_MODULE_8__angular_common__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["ToastrService"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_7__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["DomSanitizer"],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_datepicker__["a" /* BsLocaleService */]])
    ], gwGtmEditComponent);
    return gwGtmEditComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__["b" /* GeneralScripts */]));



/***/ }),

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwKlantEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_file_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_http_klant_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_datepicker__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_authentication_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__scripts_geopunt_scripts__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__gw_documents_gw_documents_component__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__gw_email_historiek_grid_gw_email_historiek_grid_component__ = __webpack_require__(614);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var gwKlantEditComponent = /** @class */ (function (_super) {
    __extends(gwKlantEditComponent, _super);
    function gwKlantEditComponent(_toastr, fb, httpFile, httpKlant, sanitizer, router, route, datePipe, auth, localeService) {
        var _this = _super.call(this, _toastr) || this;
        _this._toastr = _toastr;
        _this.fb = fb;
        _this.httpFile = httpFile;
        _this.httpKlant = httpKlant;
        _this.sanitizer = sanitizer;
        _this.router = router;
        _this.route = route;
        _this.datePipe = datePipe;
        _this.auth = auth;
        _this.localeService = localeService;
        _this.state = "";
        _this.pageTitle = "";
        _this.gegevensVanHetTerreinTitle = "";
        _this.isForMijnGegevensAanpassen = false;
        _this.buttonText = "";
        _this.lidnummerBouwunieText = "Lidnummer bij koepel-organisatie";
        _this.hasPendingChanges = false;
        _this.showPasswordErrorMessage = false;
        _this.userFiles = [];
        _this.uploadedIDs = [];
        _this.uploadStatus = "selection";
        _this.actionSucceeded = false;
        _this.actionSucceededMessage = "";
        _this.msgGebruik = "500 resterend";
        // gw-Documents
        _this.gwDocumentType = __WEBPACK_IMPORTED_MODULE_12__gw_documents_gw_documents_component__["a" /* DocumentTypes */].Klant;
        _this.canSendNewEmail = true;
        _this.emailHistoriekType = __WEBPACK_IMPORTED_MODULE_13__gw_email_historiek_grid_gw_email_historiek_grid_component__["a" /* EmailHistoriekTypes */].gwKlantEdit;
        _this.refreshDocumentsNeeded = false;
        _this.LoginValidationMessage = "";
        return _this;
    }
    gwKlantEditComponent.prototype.ngOnInit = function () {
        this.formOnInit();
        // Needed configuration for the bsDatepicker to accept dd/MM/yyyy formatting : done
        this.localeService.use("bootstrap-locale-nlbe");
    };
    // initial loading
    gwKlantEditComponent.prototype.formOnInit = function () {
        var snapshot = this.route.snapshot;
        this.klantId = -1;
        if (snapshot.params["id"])
            this.klantId = +snapshot.params["id"];
        this.loadEntity();
        this.initialiseForm();
        this.loadDropdowns();
    };
    gwKlantEditComponent.prototype.initialiseForm = function () {
        this.klantForm = this.fb.group({
            KlantNr: [{ value: "", disabled: true }, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            voornaam: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            achternaam: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)])],
            geslacht: [""],
            functie: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            organisatie: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            btwNummer: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            idkaartNummer: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            beroepsorganisatieID: [""],
            lidnummerBouwunie: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(20)]],
            lidnummerBouwunieok: [""],
            brancheID: [""],
            ebsdDetails: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(1000)]],
            lidNummerAannemer: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].min(100001), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].max(999999)]],
            usedEmail: [{ value: "", disabled: true }],
            adres1: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(100)]],
            adres2: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(100)]],
            postcode: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(10)]],
            plaats: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            land: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            factuurAdres1: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(100)]],
            factuurAdres2: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(100)]],
            factuurPostcode: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(10)]],
            factuurPlaats: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            factuurLand: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            inrichtingStraat: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(100)]],
            inrichtingStraat2: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(100)]],
            inrichtingPostcode: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(10)]],
            inrichtingGemeente: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            inrichtingBestemmingstype: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            inrichtingKadastraleGegevens: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            inrichtingLX: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].min(20000), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].max(280000)]],
            inrichtingLY: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].min(150000), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].max(250000)]],
            inrichtingDatumMilieuvergunning: [""],
            inrichtingVergunningverlenendeInstantie: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            inrichtingDatumBouwvergunning: [""],
            inrichtingHoeveelheidGrond: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            telefoon: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            fax: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            email: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern("^([\\w+-.%]+@[\\w-.]+\\.[A-Za-z]{2,4};?)+$")]],
            login: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50), this.invalidLogin]],
            paswoord: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            KlantStatusID: [""],
            isGwCustomer: [""],
            isVisibleForCustomers: [""],
            facturatieStartDatum: [""],
            gefactureerd: [""],
            uploadedIDs: []
        });
        this.initialiseValueChangeHandlers();
    };
    gwKlantEditComponent.prototype.initialiseValueChangeHandlers = function () {
        var _this = this;
        var ctlLogin = this.klantForm.get("login");
        if (ctlLogin) {
            ctlLogin.valueChanges.debounceTime(700).subscribe(function (value) {
                _this.invalidServerLogin(value, _this.klantId);
            });
        }
    };
    gwKlantEditComponent.prototype.loadDropdowns = function () {
        var _this = this;
        this.httpKlant.sgsBeroepsorganisatieListItems().toPromise()
            .then(function (lst) {
            _this.BeroepsorganisatieListItems = lst.slice();
        });
        this.httpKlant.sgsBrancheListItems().toPromise()
            .then(function (lst) {
            _this.BrancheListItems = lst.slice();
        });
        this.httpKlant.sgsKlantStatusListItems().toPromise()
            .then(function (lst) {
            _this.KlantStatusListItems = lst.slice();
        });
    };
    gwKlantEditComponent.prototype.loadEntity = function () {
        var _this = this;
        if (this.klantId === -1) {
            this.klantForm.patchValue({
                KlantNr: this.klantId
            });
            return;
        }
        // Load data to edit
        this.httpKlant.sgsKlantPoco(this.klantId).toPromise()
            .then(function (klant) {
            if (!klant) {
                _this.showWarningToast("De klant bestaat niet");
                return;
            }
            ;
            _this.klant = klant;
            _this.klantForm.patchValue({
                KlantNr: klant.klantID,
                voornaam: klant.voornaam,
                achternaam: klant.achternaam,
                geslacht: klant.geslacht,
                functie: klant.functie,
                organisatie: klant.organisatie,
                btwNummer: klant.btwNummer,
                idkaartNummer: klant.idkaartNummer,
                beroepsorganisatieID: klant.beroepsorganisatieID,
                lidnummerBouwunie: klant.lidnummerBouwunie,
                lidnummerBouwunieok: klant.lidNummerBouwUnieIsOk,
                brancheID: klant.brancheID,
                ebsdDetails: klant.ebsdDetails,
                lidNummerAannemer: klant.aannemerLidNummer,
                adres1: klant.adres1,
                adres2: klant.adres2,
                postcode: klant.postcode,
                plaats: klant.plaats,
                land: klant.land,
                factuurAdres1: klant.factuurAdres1,
                factuurAdres2: klant.factuurAdres2,
                factuurPostcode: klant.factuurPostcode,
                factuurPlaats: klant.factuurPlaats,
                factuurLand: klant.factuurLand,
                inrichtingStraat: klant.inrichtingStraat,
                inrichtingStraat2: klant.inrichtingStraat2,
                inrichtingPostcode: klant.inrichtingPostcode,
                inrichtingGemeente: klant.inrichtingGemeente,
                inrichtingBestemmingstype: klant.inrichtingBestemmingstype,
                inrichtingKadastraleGegevens: klant.inrichtingKadastraleGegevens,
                inrichtingLX: klant.inrichtingLX,
                inrichtingLY: klant.inrichtingLY,
                inrichtingDatumMilieuvergunning: _this.datePipe.transform(klant.inrichtingDatumMilieuvergunning, "dd/MM/yyyy"),
                inrichtingVergunningverlenendeInstantie: klant.inrichtingVergunningverlenendeInstantie,
                inrichtingDatumBouwvergunning: _this.datePipe.transform(klant.inrichtingDatumBouwvergunning, "dd/MM/yyyy"),
                inrichtingHoeveelheidGrond: klant.inrichtingHoeveelheidGrond,
                telefoon: klant.telefoon,
                fax: klant.fax,
                email: klant.email,
                login: klant.login,
                paswoord: klant.paswoord,
                KlantStatusID: klant.klantStatusID,
                isGwCustomer: klant.isGwCustomer,
                isVisibleForCustomers: klant.isVisibleForCustomers,
                facturatieStartDatum: _this.datePipe.transform(klant.facturatieStartDatum, "dd/MM/yyyy"),
                gefactureerd: klant.gefactureerd
            });
            // Load the used email adresses in the textbox
            _this.httpKlant.sgsKlantUsedEmails(_this.klantId).toPromise()
                .then(function (emails) {
                if (emails != null && emails.length > 0) {
                    var txt = '';
                    emails.forEach(function (mail) {
                        txt += (txt === '') ? mail : '\r\n' + mail;
                    });
                    _this.klantForm.patchValue({
                        usedEmail: txt
                    });
                }
            });
        });
    };
    //showFileWithId(id: number) {
    //    this.httpFile.LoadFileWithoutUserCheck(id).toPromise()
    //        .then((response: any) => {
    //            this.openFile(response);
    //        })
    //        .catch(_ => {
    //            this.showErrorToast("Fout bij het laden van de files");
    //        });
    //}
    // form validation
    gwKlantEditComponent.prototype.invalidLogin = function (control) {
        var pattern = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);
        if (pattern.test(control.value)) {
            return { invalidLogin: true };
        }
        else {
            return null;
        }
    };
    gwKlantEditComponent.prototype.invalidServerLogin = function (login, klantid) {
        var _this = this;
        if (login === '') {
            this.LoginValidationMessage = "";
            return;
        }
        this.httpKlant.sgsKlantLogin(login).toPromise()
            .then(function (id) {
            _this.LoginValidationMessage = (id > 0 && id !== klantid) ? "Deze loginnaam is reeds in gebruik" : "";
        });
    };
    ;
    gwKlantEditComponent.prototype.isKlantFormValid = function () {
        return (this.LoginValidationMessage === '' && this.klantForm.valid);
    };
    gwKlantEditComponent.prototype.uploadFiles = function (fileIDs) {
        var _this = this;
        this.isSaving = 1;
        if (fileIDs != null) {
            this.httpFile.moveFilesFromTempToFinalLocationForKlant(this.klantId, this.klantId, fileIDs.slice()).toPromise().then(function (docId) {
                //this.ngOnInit();
                _this.showSuccesToast("De bestanden werden opgeladen");
                _this.isSaving = 0;
                _this.refreshDocumentsNeeded = true;
            })
                .catch(function (error) {
                _this.handleError(error);
                if (_this.uploadedIDs.length > 0) {
                    _this.uploadStatus = "clean";
                }
                _this.isSaving = 0;
            });
        }
    };
    // Posting the form data to the MVC backend
    gwKlantEditComponent.prototype.save = function () {
        var _this = this;
        var klantFormValues = this.getformValues();
        this.httpKlant.sgsSave(klantFormValues).toPromise()
            .then(function (docId) {
            _this.showSuccesToast("De gegevens werden opgeslagen");
            _this.router.navigate(["/gw-klant-grid"]);
        })
            .catch(function (error) {
            _this.handleError(error);
            if (_this.uploadedIDs.length > 0) {
                _this.uploadStatus = "clean";
            }
        });
    };
    gwKlantEditComponent.prototype.getformValues = function () {
        var klantFormvalues = {
            klantID: this.klant.klantID,
            voornaam: this.klantForm.value.voornaam,
            achternaam: this.klantForm.value.achternaam,
            functie: this.klantForm.value.functie,
            organisatie: this.klantForm.value.organisatie,
            adres1: this.klantForm.value.adres1,
            adres2: this.klantForm.value.adres2,
            postcode: this.klantForm.value.postcode,
            plaats: this.klantForm.value.plaats,
            land: this.klantForm.value.land,
            factuurAdres1: this.klantForm.value.factuurAdres1,
            factuurAdres2: this.klantForm.value.factuurAdres2,
            factuurPostcode: this.klantForm.value.factuurPostcode,
            factuurLand: this.klantForm.value.factuurLand,
            factuurPlaats: this.klantForm.value.factuurPlaats,
            telefoon: this.klantForm.value.telefoon,
            fax: this.klantForm.value.fax,
            email: this.klantForm.value.email,
            login: this.klantForm.value.login,
            paswoord: this.klantForm.value.paswoord,
            contractOK: null,
            btwNummer: this.klantForm.value.btwNummer,
            idkaartNummer: this.klantForm.value.idkaartNummer,
            lidnummerBouwunie: this.klantForm.value.lidnummerBouwunie,
            geslacht: this.klantForm.value.geslacht,
            factuurExportDatum: null,
            inschrijvingsDatum: null,
            brancheID: this.klantForm.value.brancheID,
            beroepsorganisatieID: this.klantForm.value.beroepsorganisatieID,
            klantStatusID: this.klantForm.value.KlantStatusID,
            lidNummerBouwUnieIsOk: this.klantForm.value.lidnummerBouwunieok,
            datumActief: null,
            gefactureerd: this.klantForm.value.gefactureerd,
            fk_Klant_Contractor: this.klantForm.value.lidNummerAannemer,
            inrichtingStraat: this.klantForm.value.inrichtingStraat,
            inrichtingStraat2: this.klantForm.value.inrichtingStraat2,
            inrichtingPostcode: this.klantForm.value.inrichtingPostcode,
            inrichtingGemeente: this.klantForm.value.inrichtingGemeente,
            inrichtingBestemmingstype: this.klantForm.value.inrichtingBestemmingstype,
            inrichtingKadastraleGegevens: this.klantForm.value.inrichtingKadastraleGegevens,
            inrichtingLX: this.klantForm.value.inrichtingLX,
            inrichtingLY: this.klantForm.value.inrichtingLY,
            inrichtingDatumMilieuvergunning: this.stringToDate(this.klantForm.value.inrichtingDatumMilieuvergunning),
            inrichtingVergunningverlenendeInstantie: this.klantForm.value.inrichtingVergunningverlenendeInstantie,
            inrichtingDatumBouwvergunning: this.stringToDate(this.klantForm.value.inrichtingDatumBouwvergunning),
            inrichtingHoeveelheidGrond: this.klantForm.value.inrichtingHoeveelheidGrond,
            facturatieStartDatum: this.stringToDate(this.klantForm.value.facturatieStartDatum),
            ebsdDetails: this.klantForm.value.ebsdDetails,
            isGwCustomer: this.klantForm.value.isGwCustomer,
            isVisibleForCustomers: this.klantForm.value.isVisibleForCustomers,
            uploadedIDs: this.uploadedIDs,
        };
        return klantFormvalues;
    };
    // handling to the other component
    gwKlantEditComponent.prototype.sendPaswoordEmail = function () {
        this.router.navigate(["gw/email", "new", this.emailHistoriekType.toString(), this.klantId, -1, "paswoord"]);
    };
    gwKlantEditComponent.prototype.toGeopunt = function () {
        var x = this.klantForm.controls.inrichtingLX.value;
        var y = this.klantForm.controls.inrichtingLY.value;
        var street = this.klantForm.controls.inrichtingStraat.value;
        var city = this.klantForm.controls.inrichtingGemeente.value;
        var geopunt = new __WEBPACK_IMPORTED_MODULE_10__scripts_geopunt_scripts__["a" /* GeopuntScripts */](this.sanitizer);
        var url = geopunt.getGeopuntUrl(x, y, street, city);
        window.open(url);
    };
    gwKlantEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "gw-klant-edit",
            template: __webpack_require__(640),
            styles: [__webpack_require__(641)],
            providers: [__WEBPACK_IMPORTED_MODULE_9__angular_common__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["ToastrService"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_5__services_http_file_service__["a" /* HttpFileService */],
            __WEBPACK_IMPORTED_MODULE_6__services_http_klant_service__["a" /* HttpKlantService */],
            __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["DomSanitizer"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_9__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_8__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_datepicker__["a" /* BsLocaleService */]])
    ], gwKlantEditComponent);
    return gwKlantEditComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__["b" /* GeneralScripts */]));



/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwTvEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_klant_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_datepicker__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_authentication_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__scripts_geopunt_scripts__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__gw_documents_gw_documents_component__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_http_tv_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_http_dossier_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_http_file_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_http_tvzone_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_http_gvt_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__gw_email_historiek_grid_gw_email_historiek_grid_component__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_event_listener_service__ = __webpack_require__(201);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../gw-grid.module.ts" />





















var gwTvEditComponent = /** @class */ (function (_super) {
    __extends(gwTvEditComponent, _super);
    function gwTvEditComponent(_toastr, fb, httpTv, httpDossier, httpFile, httpTvZone, httpGvt, httpKlant, eventListenerService, router, route, auth, sanitizer, datePipe, localeService, el, location, renderer) {
        var _this = _super.call(this, _toastr) || this;
        _this._toastr = _toastr;
        _this.fb = fb;
        _this.httpTv = httpTv;
        _this.httpDossier = httpDossier;
        _this.httpFile = httpFile;
        _this.httpTvZone = httpTvZone;
        _this.httpGvt = httpGvt;
        _this.httpKlant = httpKlant;
        _this.eventListenerService = eventListenerService;
        _this.router = router;
        _this.route = route;
        _this.auth = auth;
        _this.sanitizer = sanitizer;
        _this.datePipe = datePipe;
        _this.localeService = localeService;
        _this.el = el;
        _this.location = location;
        _this.renderer = renderer;
        _this.totalHoeveelheid = 0;
        // to clean up => check if they are required
        _this.lidnummerBouwunieText = "Lidnummer bij koepel-organisatie";
        _this.hasPendingChanges = false;
        _this.showPasswordErrorMessage = false;
        _this.actionSucceeded = false;
        _this.actionSucceededMessage = "";
        _this.msgGebruik = "500 resterend";
        // upload documents
        _this.uploadedIDs = [];
        _this.uploadStatus = "selection";
        _this.refreshDocumentsNeeded = false;
        // gw-Documents
        _this.gwDocumentType = __WEBPACK_IMPORTED_MODULE_12__gw_documents_gw_documents_component__["a" /* DocumentTypes */].TechnischVerslag;
        _this.canSendNewEmail = true;
        _this.emailHistoriekType = __WEBPACK_IMPORTED_MODULE_18__gw_email_historiek_grid_gw_email_historiek_grid_component__["a" /* EmailHistoriekTypes */].gwTvEdit;
        // validations and errors handling
        _this.isAfsluitRedenVolume = false;
        _this.isAfsluitRedenDetails = false;
        _this.isTopCgrSelected = false;
        return _this;
    }
    gwTvEditComponent.prototype.ngOnInit = function () {
        this.localeService.use("bootstrap-locale-nlbe");
        var snapshot = this.route.snapshot;
        this.tvId = -1;
        if (snapshot.params["id"])
            this.tvId = +snapshot.params["id"];
        this.formOnInit();
    };
    gwTvEditComponent.prototype.formOnInit = function () {
        this.loadEntity();
        this.loadIsConformiteitMailSend();
        this.initialiseForm();
        this.loadDropdowns();
        this.loadTvVolumes();
        this.initialiseValueChangeHandlers();
        this.getMailData();
    };
    gwTvEditComponent.prototype.initialiseForm = function () {
        this.tvForm = this.fb.group({
            isAfgesloten: [""],
            technischVerslagAfsluitRedenID: [""],
            afsluitRedenVolume: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            // add afsluitRedenBijzonderheden
            // displaying data not need to be in  the form
            // technischVerslagID: [""],
            // klant: [""],
            // klantContact: [""],
            referentieKlant: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(100)]],
            titel: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(40)]],
            onderzoekslocatie_straat: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(40)]],
            onderzoekslocatie_gemeente: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(40)]],
            beschrijving: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            grondverzetTypeID: [""],
            referentie: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            tvDatum: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            werfOpvolgingZonderGvt: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(750)]],
            isTopCgr: [],
            onderzoekslocatieBetreftTopCgr: [""],
            isBewerktGemengd: [],
            centraalPuntLX: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(6), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].min(20000), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].max(280000)]],
            centraalPuntLY: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(6), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].min(150000), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].max(250000)]],
            bestemmingsTypeID: [""],
            bodemsaneringsdeskundige: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            dossierBeheerderID: [""],
            isPubliekBeschikbaar: [],
            isExternTV: [],
            externTvGeldigTot: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(100)]],
            interneOpmerking: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(750)]],
            opmerkingen: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(8000)]],
            statusID: [""],
            isGefactureerd: [],
            dataAanvullingen: [""],
            updateStatusDatum: [""],
            uploadedIDs: []
        });
    };
    // load data 
    gwTvEditComponent.prototype.loadDropdowns = function () {
        var _this = this;
        this.httpTv.StatusDefinitionList(false).toPromise().
            then(function (lst) {
            _this.tvStatusListItems = lst.slice();
        });
        this.httpDossier.sgsComboListItems().toPromise().
            then(function (lst) {
            _this.dossierbeheerderListItems = lst.slice();
        });
        this.httpTv.gwAfsluitReden().toPromise().
            then(function (lst) {
            _this.afsluitRedenListItems = lst.slice();
        });
        this.httpGvt.gwGrondVerzetTypes().toPromise().
            then(function (lst) {
            _this.grondVerzetTypesListItems = lst.slice();
        });
        this.httpKlant.gwsTopCgrLocatie(1, true).toPromise().
            then(function (lst) {
            _this.topCgrLocatieListItems = lst.slice();
        });
    };
    gwTvEditComponent.prototype.loadEntity = function () {
        var _this = this;
        if (this.tvId === -1) {
            return;
        }
        // Load data to edit
        this.httpTv.sgsTVJoinedData(this.tvId).subscribe(function (tvJoinedData) {
            _this.tvJoinedData = tvJoinedData;
            if (!tvJoinedData)
                return;
            _this.tvForm.patchValue({
                isAfgesloten: tvJoinedData.isAfgesloten,
                technischVerslagAfsluitRedenID: tvJoinedData.technischVerslagAfsluitRedenID,
                afsluitRedenVolume: tvJoinedData.afsluitRedenVolume,
                referentieKlant: tvJoinedData.referentieKlant,
                titel: tvJoinedData.titel,
                onderzoekslocatie_straat: tvJoinedData.onderzoekslocatie_straat,
                onderzoekslocatie_gemeente: tvJoinedData.onderzoekslocatie_gemeente,
                beschrijving: tvJoinedData.beschrijving,
                grondverzetTypeID: tvJoinedData.grondverzetTypeID,
                referentie: tvJoinedData.referentie,
                tvDatum: _this.datePipe.transform(tvJoinedData.tvDatum, "dd/MM/yyyy"),
                werfOpvolgingZonderGvt: tvJoinedData.werfOpvolgingZonderGvt,
                isTopCgr: tvJoinedData.isTopCgr,
                onderzoekslocatieBetreftTopCgr: tvJoinedData.onderzoekslocatieBetreftTopCgr,
                isBewerktGemengd: tvJoinedData.isBewerktGemengd,
                centraalPuntLX: tvJoinedData.centraalPuntLX,
                centraalPuntLY: tvJoinedData.centraalPuntLY,
                bestemmingsTypeID: tvJoinedData.bestemmingsTypeID,
                bodemsaneringsdeskundige: tvJoinedData.bodemsaneringsdeskundige,
                dossierBeheerderID: tvJoinedData.dossierBeheerderID,
                isPubliekBeschikbaar: tvJoinedData.isPubliekBeschikbaar,
                isExternTV: tvJoinedData.isExternTV,
                externTvGeldigTot: _this.datePipe.transform(tvJoinedData.externTvGeldigTot, "dd/MM/yyyy"),
                interneOpmerking: tvJoinedData.interneOpmerking,
                opmerkingen: tvJoinedData.opmerkingen,
                statusID: tvJoinedData.statusID,
                isGefactureerd: tvJoinedData.isGefactureerd,
                dataAanvullingen: tvJoinedData.dataAanvullingen,
                updateStatusDatum: null,
            });
        });
    };
    gwTvEditComponent.prototype.loadIsConformiteitMailSend = function () {
        var _this = this;
        this.httpTv.sgsIsEmailSend(this.tvId).toPromise().
            then(function (isSent) {
            _this.isConformiteitMailSend = (isSent === true) ? 1 : 0;
        });
    };
    // deelvolumes
    gwTvEditComponent.prototype.loadTvVolumes = function () {
        var _this = this;
        this.totalHoeveelheid = 0;
        this.httpTvZone.ListByTVId(this.tvId).toPromise()
            .then(function (lst) {
            _this.tvVolumes = lst.slice();
            _this.tvVolumes.forEach(function (item) {
                _this.totalHoeveelheid += item.hoeveelheid;
            });
        });
    };
    gwTvEditComponent.prototype.addTvVolumes = function () {
        this.router.navigate(['/technisch-verslag-zone-registratie', 'gwTvEdit', this.tvId]);
    };
    gwTvEditComponent.prototype.editTvVolume = function (tvZoneId) {
        this.router.navigate(['/technisch-verslag-zone-registratie', 'gwTvEdit', this.tvId, tvZoneId]);
    };
    gwTvEditComponent.prototype.deleteTvVolume = function (tvZoneId) {
        var _this = this;
        this.httpTvZone.Delete(tvZoneId).toPromise().then(function (item) {
            _this.loadTvVolumes();
            _this.showSuccesToast("De gegevens werden opgeslagen als nieuw Technisch Verslag");
            _this.totalHoeveelheid = 0;
        }).catch(function (error) {
            _this.handleError(error);
        });
    };
    // errors handling and business rules
    gwTvEditComponent.prototype.initialiseValueChangeHandlers = function () {
        var _this = this;
        this.tvForm.get("technischVerslagAfsluitRedenID").valueChanges.subscribe(function (value) {
            var val = Number(value);
            switch (val) {
                case 1:
                    _this.isAfsluitRedenVolume = true;
                    _this.isAfsluitRedenDetails = false;
                    break;
                case 2:
                    _this.isAfsluitRedenVolume = true;
                    _this.isAfsluitRedenDetails = false;
                    break;
                case 3:
                    _this.isAfsluitRedenVolume = false;
                    _this.isAfsluitRedenDetails = false;
                    break;
                case 4:
                    _this.isAfsluitRedenVolume = false;
                    _this.isAfsluitRedenDetails = true;
                    break;
                default:
                    _this.isAfsluitRedenVolume = false;
                    _this.isAfsluitRedenDetails = false;
            }
        });
        this.tvForm.get("isTopCgr").valueChanges.debounceTime(1000).subscribe(function (value) {
            if (value === true) {
                _this.isTopCgrSelected = true;
                _this.tvForm.get("onderzoekslocatieBetreftTopCgr").setValidators([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]);
                _this.tvForm.get("onderzoekslocatieBetreftTopCgr").updateValueAndValidity();
            }
            else {
                _this.isTopCgrSelected = false;
                _this.tvForm.get("onderzoekslocatieBetreftTopCgr").setValidators([]);
                _this.tvForm.get("onderzoekslocatieBetreftTopCgr").updateValueAndValidity();
            }
        });
        this.tvForm.get("statusID").valueChanges.debounceTime(1000).subscribe(function (value) {
            // send status ID to evaluatie component
            switch (value) {
                case 1:
                case 3:
                case 4:
                    _this.selectedStatus = value;
                    break;
                default:
                    _this.currentStatusId = _this.tvForm.get("statusID").value;
                    return;
            }
            _this.currentStatusId = _this.tvForm.get("statusID").value;
        });
        this.tvForm.get("dossierBeheerderID").valueChanges.debounceTime(1000).subscribe(function (value) {
            _this.dossierBeheerderID = value;
        });
    };
    gwTvEditComponent.prototype.triggerBesluitChange = function (besluitConclusion) {
        var _this = this;
        if (this.evaluatieFormValues == undefined || besluitConclusion == undefined || this == undefined || this.tvJoinedData == undefined) {
            return;
        }
        // need to review the way "this isSaving" is implemented!!!!! 
        // meaning we are creating a loop between "triggerbesluit()" and the ngonchange in evaluatie component. 
        // we need to keep our functions simples
        // //this.isSaving = 1;
        //let besluit = this.tvForm.get("statusID").value;
        //            switch (besluitConclusion) {
        //                case 1:
        //                    besluit = 4;
        //                    break;
        //                case 2:
        //                    besluit = 3;
        //                    break;
        //                case 3:
        //                    besluit = 1;
        //                    break;
        //                default:
        //                    this.currentStatusId = this.tvForm.get("statusID").value;
        //                    return;
        //            }
        //            this.tvForm.patchValue({
        //                statusID: besluit
        //            });
        //            this.evaluatieFormValues.checkConclusion = besluitConclusion;
        //            this.currentStatusId = this.tvForm.get("statusID").value;
        //             // Make sure uploads, changes to Dossierbeheerder, etc. are saved as well
        //            if (!this.afsluitenFormValues) this.afsluitenFormValues = this.afsluitenRedenInit();
        //            let tvFormValues: sgsTvJoinedData = { ...this.getTvFormValues(), ...this.afsluitenFormValues, ...this.evaluatieFormValues };
        //            this.httpTv.sgsSaveTVJoinedData(tvFormValues).toPromise().then((docId: any) => {
        //                this.loadIsConformiteitMailSend();
        //                this.isSaving = 0;
        //            })
        //            .catch(error => {
        //                this.handleError(error);
        //               // this.isSaving = 0;
        //            });
        this.httpTv.sgsPersistConclusionChange(this.tvId, besluitConclusion).toPromise().
            then(function (isPersisted) {
            if (isPersisted) {
                var besluit = _this.tvForm.get("statusID").value;
                switch (besluitConclusion) {
                    case 1:
                        besluit = 4;
                        break;
                    case 2:
                        besluit = 3;
                        break;
                    case 3:
                        besluit = 1;
                        break;
                    default:
                        _this.currentStatusId = _this.tvForm.get("statusID").value;
                        return;
                }
                _this.tvForm.patchValue({
                    statusID: besluit
                });
                _this.evaluatieFormValues.checkConclusion = besluitConclusion;
                _this.currentStatusId = _this.tvForm.get("statusID").value;
                // Make sure uploads, changes to Dossierbeheerder, etc. are saved as well
                if (!_this.afsluitenFormValues)
                    _this.afsluitenFormValues = _this.afsluitenRedenInit();
                var tvFormValues = __assign({}, _this.getTvFormValues(), _this.afsluitenFormValues, _this.evaluatieFormValues);
                _this.httpTv.sgsSaveTVJoinedData(tvFormValues).toPromise().then(function (docId) {
                    _this.loadIsConformiteitMailSend();
                    _this.isSaving = 0;
                })
                    .catch(function (error) {
                    _this.handleError(error);
                    _this.isSaving = 0;
                });
            }
            else {
                _this.isSaving = 0;
            }
        });
    };
    gwTvEditComponent.prototype.evaluationFormErrorMessages = function (el) {
        this.datumDemonsteringErrorMessage = (el.datumDemonsteringErrorMessage !== null) ? el.datumDemonsteringErrorMessage : "";
        if (el.isBesluit !== true) {
            this.tvStatusListItemsCurrent = this.tvStatusListItems.filter(function (el) { return el.tvStatusID !== 4; });
        }
        else {
            this.tvStatusListItemsCurrent = this.tvStatusListItems.filter(function (el) { return el.tvStatusID === 4; });
        }
    };
    gwTvEditComponent.prototype.isConfomiteitMail = function () {
        return (this.positivebesluitMessage === '' &&
            Number(this.currentStatusId) === 4);
    };
    gwTvEditComponent.prototype.isDeelVolume = function () {
        return this.totalHoeveelheid !== 0;
    };
    gwTvEditComponent.prototype.sendConformiteitEmail = function (canComformiteitMail) {
        var _this = this;
        if (canComformiteitMail === true) {
            if (!this.afsluitenFormValues)
                this.afsluitenFormValues = this.afsluitenRedenInit();
            var tvFormValues = __assign({}, this.getTvFormValues(), this.afsluitenFormValues, this.evaluatieFormValues);
            this.httpTv.sgsSaveTVJoinedData(tvFormValues).toPromise().then(function (docId) {
                _this.ngOnInit();
                _this.showSuccesToast("De gegevens werden opgeslagen");
                if (_this.tvJoinedData.dossierBeheerderID !== null) {
                    _this.router.navigate(['gw/email', "new", _this.emailHistoriekType.toString(), _this.tvId, -1, "comformiteit"]);
                }
                else {
                    _this.showErrorToast("dossier not fount");
                }
            })
                .catch(function (error) {
                _this.handleError(error);
            });
        }
    };
    gwTvEditComponent.prototype.isTvFormValid = function () {
        return (this.tvForm.valid &&
            this.datumDemonsteringErrorMessage === "");
    };
    gwTvEditComponent.prototype.uploadFiles = function (fileIDs) {
        var _this = this;
        this.isSaving = 1;
        if (fileIDs != null) {
            this.httpFile.moveFilesFromTempToFinalLocationForKlant(this.tvId, this.tvJoinedData.klantId, fileIDs.slice()).toPromise().then(function (docId) {
                //this.ngOnInit();
                _this.showSuccesToast("De bestanden werden opgeladen");
                _this.isSaving = 0;
                _this.refreshDocumentsNeeded = true;
            })
                .catch(function (error) {
                _this.handleError(error);
                if (_this.uploadedIDs.length > 0) {
                    _this.uploadStatus = "clean";
                }
                _this.isSaving = 0;
            });
        }
    };
    gwTvEditComponent.prototype.save = function () {
        var _this = this;
        if (!this.afsluitenFormValues)
            this.afsluitenFormValues = this.afsluitenRedenInit();
        var tvFormValues = __assign({}, this.getTvFormValues(), this.afsluitenFormValues, this.evaluatieFormValues);
        this.httpTv.sgsSaveTVJoinedData(tvFormValues).toPromise().then(function (docId) {
            if (_this.tvForm.value.updateStatusDatum === true) {
                _this.httpTv.sgsSetEmailSend(_this.tvId, 0).toPromise().then(function (docId) {
                    _this.isConformiteitMailSend = 0;
                    _this.tvForm.patchValue({ updateStatusDatum: null });
                });
            }
            _this.showSuccesToast("De gegevens werden opgeslagen");
            _this.uploadStatus = "selection";
            _this.isSaving = 0;
        })
            .catch(function (error) {
            _this.handleError(error);
            if (_this.uploadedIDs.length > 0) {
                _this.uploadStatus = "clean";
            }
            _this.isSaving = 0;
        });
    };
    // listening data from other components
    gwTvEditComponent.prototype.getMailData = function () {
        this.eventListenerService.mailDataToTvChanged.subscribe(function (item) {
            console.log(item, "data from mail");
        });
    };
    // geopunt
    gwTvEditComponent.prototype.toGeopunt = function () {
        var x = this.tvForm.controls.centraalPuntLX.value;
        var y = this.tvForm.controls.centraalPuntLY.value;
        var geopunt = new __WEBPACK_IMPORTED_MODULE_11__scripts_geopunt_scripts__["a" /* GeopuntScripts */](this.sanitizer);
        var url = geopunt.getGeopuntUrl(x, y, null, null);
        window.open(url);
    };
    // othes || reusable components
    gwTvEditComponent.prototype.afsluitenRedenInit = function () {
        var afsluitenReden = {
            afsluitRedenAfvoerNaarBrusselWallonie: this.tvJoinedData.afsluitRedenAfvoerNaarBrusselWallonie,
            afsluitRedenAfvoerNaarBrusselWallonieVolume: this.tvJoinedData.afsluitRedenAfvoerNaarBrusselWallonieVolume,
            afsluitRedenToegepastZonderGvtBinnenDeWerf: this.tvJoinedData.afsluitRedenToegepastZonderGvtBinnenDeWerf,
            afsluitRedenToegepastZonderGvtBinnenDeWerfVolume: this.tvJoinedData.afsluitRedenToegepastZonderGvtBinnenDeWerfVolume,
            afsluitRedenToegepastZonderGvtBuitenDeWerf: this.tvJoinedData.afsluitRedenToegepastZonderGvtBuitenDeWerf,
            afsluitRedenToegepastZonderGvtBuitenDeWerfVolume: this.tvJoinedData.afsluitRedenToegepastZonderGvtBuitenDeWerfVolume,
            afsluitRedenAfgezeefdPuinTop: this.tvJoinedData.afsluitRedenAfgezeefdPuinTop,
            afsluitRedenAfgezeefdPuinTopVolume: this.tvJoinedData.afsluitRedenAfgezeefdPuinTopVolume,
            afsluitRedenMinvolumeVanaf10pWegensNietUitgevoerd: this.tvJoinedData.afsluitRedenMinvolumeVanaf10pWegensNietUitgevoerd,
            afsluitRedenMinvolumeVanaf10pWegensNietUitgevoerdVolume: this.tvJoinedData.afsluitRedenMinvolumeVanaf10pWegensNietUitgevoerdVolume,
            afsluitRedenMeervolumeVanaf10p: this.tvJoinedData.afsluitRedenMeervolumeVanaf10p,
            afsluitRedenMeervolumeVanaf10pVolume: this.tvJoinedData.afsluitRedenMeervolumeVanaf10pVolume,
            afsluitRedenDeelsViaGb: this.tvJoinedData.afsluitRedenDeelsViaGb,
            afsluitRedenDeelsViaGbVolume: this.tvJoinedData.afsluitRedenDeelsViaGbVolume,
            afsluitRedenDeelsOpDeWerfGeblevenVoorDeBouwheer: this.tvJoinedData.afsluitRedenDeelsOpDeWerfGeblevenVoorDeBouwheer,
            afsluitRedenDeelsOpDeWerfGeblevenVoorDeBouwheerVolume: this.tvJoinedData.afsluitRedenDeelsOpDeWerfGeblevenVoorDeBouwheerVolume,
            afsluitRedenOverschattingInTv: this.tvJoinedData.afsluitRedenOverschattingInTv,
            afsluitRedenOverschattingInTvVolume: this.tvJoinedData.afsluitRedenOverschattingInTvVolume,
            afsluitRedenZoneVoorGebruikTerPlaatse: this.tvJoinedData.afsluitRedenZoneVoorGebruikTerPlaatse,
            afsluitRedenZoneVoorGebruikTerPlaatseVolume: this.tvJoinedData.afsluitRedenZoneVoorGebruikTerPlaatseVolume,
            afsluitRedenGtmNaarTopNieuwTv: this.tvJoinedData.afsluitRedenGtmNaarTopNieuwTv,
            afsluitRedenGtmNaarTopNieuwTvVolume: this.tvJoinedData.afsluitRedenGtmNaarTopNieuwTvVolume,
            afsluitRedenGtmNaarCofETopCgr: this.tvJoinedData.afsluitRedenGtmNaarCofETopCgr,
            afsluitRedenGtmNaarCofETopCgrVolume: this.tvJoinedData.afsluitRedenGtmNaarCofETopCgrVolume,
            afsluitRedenGedeelteNietDoorLidGwUitgevoerd: this.tvJoinedData.afsluitRedenGedeelteNietDoorLidGwUitgevoerd,
            afsluitRedenGedeelteNietDoorLidGwUitgevoerdVolume: this.tvJoinedData.afsluitRedenGedeelteNietDoorLidGwUitgevoerdVolume,
            afsluitRedenBbrsGeweigerd: this.tvJoinedData.afsluitRedenBbrsGeweigerd,
            afsluitRedenBbrsGeweigerdVolume: this.tvJoinedData.afsluitRedenBbrsGeweigerdVolume,
            afsluitRedenSamengevoegd: this.tvJoinedData.afsluitRedenSamengevoegd,
            afsluitRedenSamengevoegdVolume: this.tvJoinedData.afsluitRedenSamengevoegdVolume,
            afsluitRedenNietGekend: this.tvJoinedData.afsluitRedenNietGekend,
            afsluitRedenNietGekendVolume: this.tvJoinedData.afsluitRedenNietGekendVolume,
            afsluitRedenOverige: this.tvJoinedData.afsluitRedenOverige,
            afsluitRedenOverigeVolume: this.tvJoinedData.afsluitRedenOverigeVolume,
            afsluitRedenVolume: this.tvJoinedData.afsluitRedenVolume
        };
        return afsluitenReden;
    };
    gwTvEditComponent.prototype.getTvFormValues = function () {
        var statusMap = new Map([[1, "In behandeling"], [2, "Naar OVAM"], [3, "Afgekeurd"], [4, "Goedgekeurd"],]);
        var tvFormValue = {
            isAfgesloten: this.tvForm.value.isAfgesloten,
            technischVerslagAfsluitRedenID: this.tvForm.value.technischVerslagAfsluitRedenID,
            afsluitRedenVolume: this.tvForm.value.afsluitRedenVolume,
            referentieKlant: this.tvForm.value.referentieKlant,
            titel: this.tvForm.value.titel,
            onderzoekslocatie_straat: this.tvForm.value.onderzoekslocatie_straat,
            onderzoekslocatie_gemeente: this.tvForm.value.onderzoekslocatie_gemeente,
            beschrijving: this.tvForm.value.beschrijving,
            grondverzetTypeID: this.tvForm.value.grondverzetTypeID,
            referentie: this.tvForm.value.referentie,
            tvDatum: this.stringToDate(this.tvForm.value.tvDatum),
            werfOpvolgingZonderGvt: this.tvForm.value.werfOpvolgingZonderGvt,
            isTopCgr: this.tvForm.value.isTopCgr,
            onderzoekslocatieBetreftTopCgr: this.tvForm.value.onderzoekslocatieBetreftTopCgr,
            isBewerktGemengd: this.tvForm.value.isBewerktGemengd,
            centraalPuntLX: this.tvForm.value.centraalPuntLX,
            centraalPuntLY: this.tvForm.value.centraalPuntLY,
            bestemmingsTypeID: this.tvForm.value.bestemmingsTypeID,
            bodemsaneringsdeskundige: this.tvForm.value.bodemsaneringsdeskundige,
            dossierBeheerderID: this.tvForm.value.dossierBeheerderID,
            isPubliekBeschikbaar: this.tvForm.value.isPubliekBeschikbaar,
            isExternTV: this.tvForm.value.isExternTV,
            externTvGeldigTot: this.stringToDate(this.tvForm.value.externTvGeldigTot),
            interneOpmerking: this.tvForm.value.interneOpmerking,
            opmerkingen: this.tvForm.value.opmerkingen,
            statusID: this.tvForm.value.statusID,
            isGefactureerd: this.tvForm.value.isGefactureerd,
            dataAanvullingen: this.tvForm.value.dataAanvullingen,
            achternaam: this.tvJoinedData.achternaam,
            adres1: this.tvJoinedData.adres1,
            adres2: this.tvJoinedData.adres2,
            fax: this.tvJoinedData.fax,
            flow: this.tvJoinedData.flow,
            functie: this.tvJoinedData.functie,
            indieningsDatum: this.tvJoinedData.indieningsDatum,
            indieningswijzeID: this.tvJoinedData.indieningswijzeID,
            isEvaluatieVlarebo2008: this.tvJoinedData.isEvaluatieVlarebo2008,
            klantId: this.tvJoinedData.klantId,
            land: this.tvJoinedData.land,
            organisatie: this.tvJoinedData.organisatie,
            plaats: this.tvJoinedData.plaats,
            postcode: this.tvJoinedData.postcode,
            samengevoegdDoor: this.tvJoinedData.samengevoegdDoor,
            status: statusMap.get(this.tvForm.value.statusID),
            technischVerslagID: this.tvJoinedData.technischVerslagID,
            telefoon: this.tvJoinedData.telefoon,
            voornaam: this.tvJoinedData.voornaam,
            werfOpvolging: this.tvJoinedData.werfOpvolging,
            statusDatum: (this.tvForm.value.updateStatusDatum === true) ? new Date() : null
        };
        return tvFormValue;
    };
    gwTvEditComponent.prototype.getEvaluatieFormValues = function (formValues) {
        this.evaluatieFormValues = formValues;
    };
    gwTvEditComponent.prototype.getAsluitenFormValues = function (formValues) {
        if (formValues) {
            this.afsluitenFormValues = formValues;
        }
        else {
            this.afsluitenFormValues = this.afsluitenRedenInit();
        }
    };
    /////////////////////////////////////////////////
    // error handling
    /////////////////////////////////////////////////
    gwTvEditComponent.prototype.handleError = function (errorObject, prefix) {
        if (prefix === void 0) { prefix = ""; }
        var error = errorObject;
        if (error === null || error === undefined) {
            this.showErrorToast("Er is een fout opgetreden bij de communicatie met de api");
            return;
        }
        if (error.status === 0) {
            this.showErrorToast("Er is een fout opgetreden bij de communicatie met de api");
            return;
        }
        if (error.status === 401) {
            this.showErrorToast("U bent niet (meer) ingelogged of uw sessie is verlopen, gelieve opnieuw in te loggen");
            return;
        }
        if (error.status === 403) {
            this.showErrorToast("U heeft geen rechten tot deze functie");
            return;
        }
        var message = (error.error === null || error.error === undefined) ? error.message : error.error;
        if (prefix !== "")
            message = prefix + message;
        this.showErrorToast(message);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__["DatatableComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__["DatatableComponent"])
    ], gwTvEditComponent.prototype, "table", void 0);
    gwTvEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "gw-tv-edit",
            template: __webpack_require__(643),
            styles: [__webpack_require__(644)],
            providers: [__WEBPACK_IMPORTED_MODULE_9__angular_common__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["ToastrService"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_13__services_http_tv_service__["a" /* HttpTVService */],
            __WEBPACK_IMPORTED_MODULE_14__services_http_dossier_service__["a" /* HttpDossierService */],
            __WEBPACK_IMPORTED_MODULE_15__services_http_file_service__["a" /* HttpFileService */],
            __WEBPACK_IMPORTED_MODULE_16__services_http_tvzone_service__["a" /* HttpTVZoneService */],
            __WEBPACK_IMPORTED_MODULE_17__services_http_gvt_service__["a" /* HttpGVTService */],
            __WEBPACK_IMPORTED_MODULE_5__services_http_klant_service__["a" /* HttpKlantService */],
            __WEBPACK_IMPORTED_MODULE_19__services_event_listener_service__["a" /* EventListenerService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_8__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["DomSanitizer"],
            __WEBPACK_IMPORTED_MODULE_9__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_datepicker__["a" /* BsLocaleService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_9__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
    ], gwTvEditComponent);
    return gwTvEditComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__["b" /* GeneralScripts */]));



/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwEmailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_http_file_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_klant_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_http_mail_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_http_dossier_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_http_gtm_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_event_listener_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_http_tv_service__ = __webpack_require__(25);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var gwEmailComponent = /** @class */ (function (_super) {
    __extends(gwEmailComponent, _super);
    function gwEmailComponent(fb, _toastr, httpFile, httpMail, httpDossier, httpGtm, httpTv, eventListenerService, httpKlant, sanitizer, router, route, datePipe, localeService, auth) {
        var _this = _super.call(this, _toastr) || this;
        _this.fb = fb;
        _this._toastr = _toastr;
        _this.httpFile = httpFile;
        _this.httpMail = httpMail;
        _this.httpDossier = httpDossier;
        _this.httpGtm = httpGtm;
        _this.httpTv = httpTv;
        _this.eventListenerService = eventListenerService;
        _this.httpKlant = httpKlant;
        _this.sanitizer = sanitizer;
        _this.router = router;
        _this.route = route;
        _this.datePipe = datePipe;
        _this.localeService = localeService;
        _this.auth = auth;
        _this.uploadType = __WEBPACK_IMPORTED_MODULE_4__services_http_file_service__["b" /* fileTypes */].GwMailExtraAttachment;
        _this.mailFormatType = "";
        _this.fileId = -1;
        _this.canHiddenDatum = false;
        _this.canHiddenUpload = false;
        // upload documents
        _this.uploadedIDs = [];
        _this.uploadStatus = "selection";
        _this.uploadQueueCount = 0;
        // mail generation
        _this.newLine = "\r\n";
        _this.doubleLines = "\r\n \r\n";
        _this.tripleLines = "\r\n \r\n \r\n";
        _this.aanhef = "Geachte Heer, Mevrouw";
        _this.groeten = "Met vriendelijke groeten," + _this.doubleLines + "Grondwijzer vzw";
        // validation
        _this.isConfirmiteit = false;
        return _this;
    }
    gwEmailComponent.prototype.ngOnInit = function () {
        var snapshot = this.route.snapshot;
        if (snapshot.params["action"])
            this.action = snapshot.params["action"];
        if (snapshot.params["id"])
            this.parentId = +snapshot.params["id"];
        if (snapshot.params["mailId"])
            this.mailId = snapshot.params["mailId"];
        if (snapshot.params["mailFormatType"])
            this.mailFormatType = snapshot.params["mailFormatType"];
        if (snapshot.params["type"])
            this.pageType = snapshot.params["type"];
        this.localeService.use("bootstrap-locale-nlbe");
        this.formOnInit();
    };
    gwEmailComponent.prototype.formOnInit = function () {
        this.initialiseForm();
        this.loadEntity();
    };
    gwEmailComponent.prototype.initialiseForm = function () {
        this.emailForm = this.fb.group({
            id: [this.parentId],
            type: [this.pageType],
            from: ["", [__WEBPACK_IMPORTED_MODULE_9__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_9__angular_forms__["Validators"].pattern("^([\\w+-.%]+@[\\w-.]+\\.[A-Za-z]{2,4};?)+$")]],
            to: ["", [__WEBPACK_IMPORTED_MODULE_9__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_9__angular_forms__["Validators"].pattern("^([\\w+-.%]+@[\\w-.]+\\.[A-Za-z]{2,4};?)+$")]],
            cc: ["", [__WEBPACK_IMPORTED_MODULE_9__angular_forms__["Validators"].pattern("^([\\w+-.%]+@[\\w-.]+\\.[A-Za-z]{2,4};?)+$")]],
            subject: ["", [__WEBPACK_IMPORTED_MODULE_9__angular_forms__["Validators"].required]],
            body: [""],
            datum: [{ value: "", disabled: true }],
            uploadedIDs: []
        });
    };
    // load data
    gwEmailComponent.prototype.loadEntity = function () {
        var _this = this;
        if (this.action === "view") {
            // load email ID
            this.canHiddenDatum = true;
            this.canHiddenUpload = true;
            this.emailForm.disable();
            this.httpMail.sgsGetMailById(this.mailId).toPromise().then(function (response) {
                _this.mailData = response;
                _this.emailForm.patchValue({
                    from: response.dossierBeheerder,
                    to: response.to,
                    cc: response.cc,
                    datum: _this.dateToString(response.datum),
                    subject: response.subject,
                    body: response.body,
                });
            }).catch(function (_) {
                _this.showErrorToast("Fout bij het laden van de mail");
            });
        }
        else {
            this.emailForm.get("from").disable();
            // get logged user mail for the field From
            this.httpDossier.sgsMailUserLoggedIn().toPromise()
                .then(function (response) {
                _this.emailForm.patchValue({
                    from: response.email,
                });
            })
                .catch(function (_) {
                _this.showErrorToast("Fout bij het laden van de mail");
            });
            // data for other fields
            this.httpMail.sgsGetMailData(this.parentId, this.pageType).toPromise()
                .then(function (response) {
                _this.mailGenerator(response);
            })
                .catch(function (_) {
                _this.mailGenerator(null);
            });
            this.canHiddenDatum = false;
            this.canHiddenUpload = false;
        }
    };
    // generate default emails
    gwEmailComponent.prototype.mailGenerator = function (data) {
        switch (this.pageType) {
            case "gwTvEdit":
                (this.mailFormatType === "comformiteit") ? this.generaTvEmail(data) : this.generaTvNewEmail(data);
                break;
            case "gwKlantEdit":
                (this.mailFormatType === "paswoord") ? this.generateKlantMail(data) : this.generateKlantNewMail(data);
                break;
            case "gwGtmEdit":
                this.generateGtmMail(data);
                // this.generateGtmNewMail(data);
                break;
            case "gwGvtEdit":
                this.generateVerklaringAfnemerMail(data);
                // this.generaGvtNewEmail(data);
                //  this.generateGvtMail(data);
                break;
            case "gwPuinLmrpEdit":
                this.generatePuinNewMail(data);
                // this.generatePuinMail(data);
                break;
            case "gwKwEdit":
                this.generateKwMail(data);
                break;
            default:
                break;
        }
    };
    gwEmailComponent.prototype.generaTvNewEmail = function (data) {
        var body = this.aanhef + this.doubleLines + "" + this.tripleLines + this.groeten;
        var mailBody = {
            to: (data) ? data.klantContactEmail : "",
            subject: "Technisch Verslag " + this.parentId,
            body: body
        };
        this.patchMailData(mailBody);
    };
    ;
    gwEmailComponent.prototype.generaTvEmail = function (data) {
        var conformVerklaring = (data.statusID === 3) ? "iet-conformverklaring" :
            (data.statusID === 4) ? "Conformiteitsverklaring" :
                "Technisch Verslag ";
        var content = this.doubleLines
            + "Hierbij vindt u het resultaat van de beoordeling van het door u overgemaakte technisch verslag met uw kenmerk "
            + data.factuurReferentieKlant
            + ", betreffende de onderzoekslocatie: " + this.doubleLines
            + data.titel2 + " " + this.newLine
            + data.titel3 + this.doubleLines
            + "Het Technisch Verslag werd door Grondwijzer vzw beoordeeld als zijnde " + this.newLine
            + "voldoende om de conformiteit van de uit te graven bodem met de voorwaarden voor het beoogde gebruik te kunnen attesteren." + this.doubleLines
            + "De " + conformVerklaring + " is bijgevoegd als attachment in deze e-mail." + this.doubleLines
            + "Wij vertrouwen erop u hiermee voldoende te hebben geïnformeerd."
            + this.tripleLines;
        var body = this.aanhef + content + this.groeten;
        var mailBody = {
            to: data.klantContactEmail,
            subject: conformVerklaring + " " + this.parentId,
            body: body
        };
        this.patchMailData(mailBody);
    };
    ;
    gwEmailComponent.prototype.generaGvtNewEmail = function (data) {
        var content = "";
        var body = this.aanhef + content + this.groeten;
        var mailBody = {
            to: data.klantContactEmail,
            subject: "Technisch Verslag " + this.parentId,
            body: body
        };
        this.patchMailData(mailBody);
    };
    gwEmailComponent.prototype.generateVerklaringAfnemerMail = function (data) {
        var content = this.doubleLines
            + "De locatie waar de grond wordt aangebracht die u wil uitgraven, kan niet worden verduidelijkt met behulp van een" + this.newLine
            + " aanvulplan." + this.doubleLines
            + "Wij zenden u in plaats daarvan een afnemersverklaring die aan ons dient te worden overgemaakt, " + this.newLine
            + "ondertekend door de ontvanger van de grond." + this.doubleLines
            + "Bijkomend vragen wij een kopie van de milieuvergunning of bodemsaneringsproject (indien beschikbaar) en een " + this.newLine
            + "overzichtsplan van het terrein." + this.doubleLines
            + "Na ontvangst van de nodige documenten zal uw aanvraag door ons worden behandeld." + this.doubleLines
            + "Indien u meer informatie wenst, kan u uiteraard met ons contact opnemen."
            + this.doubleLines;
        var body = this.aanhef + content + this.groeten;
        var mailBody = {
            to: data.klantContactEmail,
            subject: "Afnemersverklaring ivm.goedkeuring bestemming/transport " + this.parentId,
            body: body
        };
        this.patchMailData(mailBody);
    };
    gwEmailComponent.prototype.generateGvtMail = function (data) {
        var content = null;
        var subject = null;
        var bestemmingAdres = (data.bestemmingsAardID !== 1) ? data.afzetAdres1 : data.bestemmingsBeschrijving + ", " + data.afzetAdres1;
        var dechets = (data.bestemmingsAardID === 1) ? " en een situatieschets" : null;
        var binnenOfBuitenKwz = (data.kadastraleWerkzone === 1) ? " binnen de kadastrale werkzone" :
            (data.kadastraleWerkzone === 2) ? " buiten de kadastrale werkzone" :
                "";
        if (data.bBRStatusID === 2) {
            subject = "Weigering Transport " + this.parentId;
            content = "Uw aanvraag voor een Bodembeheerrapport is bij Grondwijzer geregistreerd."
                + "Op basis van de aan ons verstrekte gegevens en onze evaluatie is gebleken dat de betreffende uitgegraven grond in het kader van Vlarebo niet kan worden toegepast op de door U aangegeven bestemming." + this.newLine;
            +"Op basis van deze evaluatie sturen wij U een "
                + '"Weigering Grondverzettoelating"'
                + " met daarin opgenomen de reden(en) van de weigering.";
        }
        else if (data.bBRStatusID === 3) {
            subject = "Grondverzettoelating " + this.parentId;
            content = '"Uw aanvraag voor een "' + '"Grondverzettoelating"' + this.newLine
                + " met uw referentie " + '"' + data.klantKenmerk + '"' + this.newLine
                + " en bestemming " + bestemmingAdres + " " + data.afzetPlaats + " is bij Grondwijzer geregistreerd." + this.doubleLines
                + "Op basis van de aan ons verstrekte gegevens en onze evaluatie is gebleken dat " + this.newLine
                + "de betreffende uitgegraven grond in het kader van Vlarebo kan worden toegepast " + this.newLine
                + "op de door U aangegeven bestemming." + this.newLine
                + "Op basis van deze evaluatie sturen wij u een " + '"Grondverzettoelating"' + this.newLine
                + "en de benodigde transportdocumenten." + this.doubleLines
                + "Voor het vervoer voor eigen rekening wordt gebruik gemaakt van het door " + this.newLine
                + "Grondwijzer verschafte vervoersdocument. Bij " + this.newLine
                + "vervoer voor derden wordt gebruik gemaakt van de officiële vrachtbrieven (CMR e.a.)." + this.newLine
                + "Deze documenten worden bewaard gedurende een termijn van 5 jaar en op eenvoudige vraag van Grondwijzer VZW aan Grondwijzer " + this.newLine
                + "VZW overgemaakt." + this.doubleLines
                + "Na het beëindigen van alle transporten dient u ons nog de ingevulde en ondertekende ontvangstverklaring"
                + dechets + this.doubleLines
                + "U vindt in bijlage de Grondverzettoelating in pdf-formaat."
                + this.doubleLines;
        }
        else if (data.bBRStatusID === 4) {
            subject = "ontvangstverklaring " + this.parentId;
            content = "Betreft:" + " \t" + "Beëindiging van transporten" + "\t" + "Goedkeuring Transport" + "\t" + "met nummer " + this.parentId + this.doubleLines
                + "Wij hebben geconstateerd dat de transporten die hebben plaatsgevonden onder " + this.newLine
                + "bovenvermelde " + '"Goedkeuring voor Transport"' + "door u officieel zijn beëindigd. " + this.newLine
                + "Om u vervolgens het definitieve bodembeheerrapport te kunnen toesturen hebben wij " + this.newLine
                + "van u nog een ingevulde ontvangstverklaring en bijbehorende situatieschets nodig. Een model " + this.newLine
                + "ontvangstverklaring wordt u meegestuurd met dit bericht. Gelieve die verklaring verder in te vullen " + this.newLine
                + "en de juiste hoeveelheden die in werkelijkheid zijn vervoerd hierop aan te geven. " + this.newLine
                + "Zodra wij uw stukken hebben ontvangen, zullen wij u – onder voorbehoud van een positieve beoordeling – " + this.newLine
                + "u zo spoedig mogelijk het aangevraagde bodembeheerrapport toesturen."
                + this.doubleLines;
        }
        else if (data.bBRStatusID === 5) {
            subject = "Weigering Bodembeheer Rapport " + this.parentId;
            content = "Helaas kunnnen wij niet overgaan tot het afgeven van het finale bodembeheerrapport met onze referentie" + '"' + this.parentId + '".' + this.doubleLines
                + "Voor meer details verwijzen wij U naar het bijgevoegde document." + this.doubleLines
                + "Zijn er vragen of opmerkingen dan kunt U contact opnemen met ondergetekende.";
        }
        else if (data.bBRStatusID === 6) {
            subject = "Goedkeuring Bodembeheer Rapport " + this.parentId;
            content = this.doubleLines
                + "Bijgaand doe ik U hierbij het officiële bodembeheerrapport met onze referentie - " + this.parentId + "-"
                + '" en uw referentie "' + data.klantKenmerk + " " + binnenOfBuitenKwz + ", "
                + bestemmingAdres + ", " + data.afzetPlaats + " toekomen." + this.doubleLines
                + "Zijn er vragen of opmerkingen dan kunt U contact opnemen met ondergetekende." + this.doubleLines
                + "Wij danken U voor het ons gestelde vertrouwen en zijn U bij een volgende gelegenheid graag weer van dienst."
                + this.doubleLines;
        }
        var body = this.aanhef + content + this.groeten;
        var mailData = {
            to: data.klantContactEmail,
            subject: subject,
            body: body
        };
        this.patchMailData(mailData);
    };
    gwEmailComponent.prototype.generateKlantNewMail = function (data) {
        // in old code: "generateFreeMail()"
        var body = this.aanhef + this.doubleLines + "" + this.tripleLines + this.groeten;
        var mailBody = {
            to: data.email,
            subject: "",
            body: body
        };
        this.patchMailData(mailBody);
    };
    gwEmailComponent.prototype.generateKlantMail = function (data) {
        var registratie = "";
        if (data.registratieCode >= 13 && data.registratieCode <= 15 && data.klantStatusID === 5) {
            registratie = "  Vanaf nu bent u kandidaat R-TOP. Na een positief verloop van de acceptatieprocedure en een locatiebezoek wordt u actief gezet in ons systeem kan gebruik worden gemaakt van onze diensten.";
        }
        else if (data.registratieCode === 16 && data.klantStatusID === 6) {
            registratie = "  Vanaf nu bent u kandidaat TOP en/of CGR voor een Grondwijzer erkenning. Na en positief verloop van de procedure in  de toelatingsperiode zal de officiële erkenning als GW-TOP vzw volgen. Bent u reeds in bezit van een erkenning dan wordt een versnelde procedure gevolgd.";
        }
        else if (data.registratieCode === 17 && data.klantStatusID === 6) {
            registratie = "  Vanaf nu bent u kandidaat TOP en/of CGR voor een Grondwijzer erkenning. Na en positief verloop van de procedure in  de toelatingsperiode zal de officiële erkenning van als GW-TOP en die van de Minister volgen. De erkenning van de Minister verkrijgt u  na een  positief advies van OVAM. Bent u reeds in bezit van een erkenning dan wordt een versnelde procedure gevolgd.";
        }
        else if (data.registratieCode < 0) {
            registratie = "  Vanaf nu bent u bij Grondwijzer geregistreerd als DOP.";
        }
        var content = this.doubleLines
            + "Wij hebben uw ondertekend contract ontvangen, waarvoor onze dank."
            + registratie + this.newLine
            + "Uw gebruikersnaam en paswoord voor de Grondwijzer website zijn:" + this.doubleLines
            + "Gebruikersnaam: " + data.login + this.newLine
            + "Paswoord: " + data.paswoord + this.doubleLines
            + "Met uw gebruikersnaam en paswoord kunt u inloggen op onze website en vrij gebruik maken van onze diensten. Zo kunt u alle handelingen elektronisch verrichten en 24 uur per dag de stand van zaken van uw lopende projecten raadplegen." + this.newLine
            + "Uiteraard kunt u ons ook steeds contacteren mocht u vragen of opmerkingen hebben." + this.newLine
            + this.doubleLines;
        var body = this.aanhef + content + this.groeten;
        var mailBody = {
            to: data.email,
            subject: "Grondwijzer paswoord",
            body: body
        };
        this.patchMailData(mailBody);
    };
    gwEmailComponent.prototype.generateGtmNewMail = function (data) {
        var body = this.aanhef + this.doubleLines + "" + this.tripleLines + this.groeten;
        var mailBody = {
            to: data.klantContactEmail,
            subject: "GrondTransportMelding " + this.parentId,
            body: body
        };
        this.patchMailData(mailBody);
    };
    gwEmailComponent.prototype.generateGtmMail = function (data) {
        var _this = this;
        var hoevelheid = 0;
        this.httpGtm.gwGTMWerkelijkeHoeveelheid(this.parentId).toPromise()
            .then(function (response) {
            hoevelheid = response;
        })
            .catch(function (_) {
            _this.showErrorToast("Fout bij het laden van de GTM hoevelheid");
        });
        var content = this.doubleLines
            + "Via deze mail informeren wij u dat wij de verklaring afnemer hebben ontvangen met daarop de werkelijk afgevoerde hoeveelheid bodem." + this.newLine
            + "Grondwijzer heeft voor dit dossier een totale hoeveelheid afgevoerde bodem geregistreerd van " + hoevelheid + " m³." + this.newLine
            + "De registratie van deze Grondtransportmelding bij Grondwijzer vzw is hiermee compleet. " + this.newLine
            + this.doubleLines;
        var body = this.aanhef + content + this.groeten;
        var mailBody = {
            to: data.klantContactEmail,
            subject: "Grond Transport Melding " + this.parentId,
            body: body
        };
        this.patchMailData(mailBody);
    };
    gwEmailComponent.prototype.generatePuinNewMail = function (data) {
        var body = this.aanhef + this.doubleLines + "" + this.tripleLines + this.groeten;
        var mailBody = {
            to: data.klantContactEmail,
            subject: "Puin Lmrp " + this.parentId,
            body: body
        };
        this.patchMailData(mailBody);
    };
    gwEmailComponent.prototype.generatePuinMail = function (data) {
    };
    gwEmailComponent.prototype.generateKwMail = function (data) {
    };
    gwEmailComponent.prototype.patchMailData = function (data) {
        this.emailForm.patchValue({
            to: data.to,
            cc: "",
            subject: data.subject,
            body: data.body,
        });
    };
    // file-upload handlers
    gwEmailComponent.prototype.queueCountChanged = function (queueLength) {
        this.uploadQueueCount = queueLength;
    };
    gwEmailComponent.prototype.filesUploaded = function (fileIDs) {
        this.uploadedIDs = fileIDs.slice();
        this.setSharedData();
    };
    // send data
    gwEmailComponent.prototype.send = function () {
        // Upload Files (if any)
        if (this.uploadQueueCount > 0) {
            // Initialise Array & Upload the Files
            this.uploadedIDs.length = 0;
            this.uploadStatus = "upload";
        }
        else {
            this.setSharedData();
        }
    };
    // share defaultData
    gwEmailComponent.prototype.setSharedData = function () {
        if (this.uploadedIDs != null) {
            this.emailForm.patchValue({ uploadedIDs: this.uploadedIDs });
        }
        switch (this.pageType) {
            case "gwTvEdit":
                (this.mailFormatType === "comformiteit") ? this.saveTvComformiteitMail() : this.saveStandardMail();
                break;
            case "gwKlantEdit":
                this.saveStandardMail();
                break;
            case "gwGtmEdit":
                break;
            case "gwGvtEdit":
                break;
            case "gwPuinLmrpEdit":
                break;
            case "gwKwEdit":
                break;
            default:
                break;
        }
    };
    // file handler
    gwEmailComponent.prototype.downloadFile = function (id) {
        var _this = this;
        this.httpFile.LoadFileWithoutUserCheck(id).toPromise()
            .then(function (response) {
            _this.openFile(response);
        })
            .catch(function (_) {
            _this.showErrorToast("Fout bij het laden van de files");
        });
    };
    gwEmailComponent.prototype.back = function () {
        switch (this.pageType) {
            case "gwTvEdit":
                this.router.navigate(['/gw/tv-edit', this.parentId]);
                break;
            case "gwKlantEdit":
                this.router.navigate(['/gw/klant-edit', this.parentId]);
                break;
            case "gwGtmEdit":
                this.router.navigate(['/gw/gtm-edit', this.parentId]);
                break;
            case "gwGvtEdit":
                this.router.navigate(['/gw/gvt-edit', this.parentId]);
                break;
            case "gwPuinLmrpEdit":
                this.router.navigate(['/gw/puin-lmrp-edit', this.parentId]);
                break;
            case "gwkwEdit":
                this.router.navigate(['/gw/kw-edit', this.parentId]);
                break;
            default:
                break;
        }
    };
    // save http
    gwEmailComponent.prototype.saveStandardMail = function () {
        var _this = this;
        this.httpMail.sgsSave(this.emailForm.value).toPromise()
            .then(function (response) {
            _this.showSuccesToast("Mail saved successfully");
            _this.back();
        })
            .catch(function (_) {
            _this.showErrorToast("Fout bij het saving van het mail");
        });
    };
    gwEmailComponent.prototype.saveTvComformiteitMail = function () {
        var _this = this;
        this.httpTv.sgsSaveComformiteitMail(this.emailForm.value).toPromise()
            .then(function (response) {
            _this.showSuccesToast("Mail saved successfully");
            _this.back();
        })
            .catch(function (_) {
            _this.showErrorToast("Fout bij het saving van het  mail");
        });
    };
    gwEmailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "gw-email",
            template: __webpack_require__(646),
            styles: [__webpack_require__(647)],
            providers: [__WEBPACK_IMPORTED_MODULE_7__angular_common__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["ToastrService"],
            __WEBPACK_IMPORTED_MODULE_4__services_http_file_service__["a" /* HttpFileService */],
            __WEBPACK_IMPORTED_MODULE_11__services_http_mail_service__["a" /* HttpMailService */],
            __WEBPACK_IMPORTED_MODULE_12__services_http_dossier_service__["a" /* HttpDossierService */],
            __WEBPACK_IMPORTED_MODULE_13__services_http_gtm_service__["a" /* HttpGTMService */],
            __WEBPACK_IMPORTED_MODULE_15__services_http_tv_service__["a" /* HttpTVService */],
            __WEBPACK_IMPORTED_MODULE_14__services_event_listener_service__["a" /* EventListenerService */],
            __WEBPACK_IMPORTED_MODULE_5__services_http_klant_service__["a" /* HttpKlantService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["DomSanitizer"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_7__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap__["BsLocaleService"],
            __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__["a" /* AuthenticationService */]])
    ], gwEmailComponent);
    return gwEmailComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__["b" /* GeneralScripts */]));



/***/ }),

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwGvtEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_klant_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_datepicker__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_authentication_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__scripts_geopunt_scripts__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__gw_documents_gw_documents_component__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_http_tvzone_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__gw_email_historiek_grid_gw_email_historiek_grid_component__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_http_gvt_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_http_bbr_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_http_dossier_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_http_bestemming_service__ = __webpack_require__(208);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var gwGvtEditComponent = /** @class */ (function (_super) {
    __extends(gwGvtEditComponent, _super);
    function gwGvtEditComponent(_toastr, fb, router, route, httpGvt, httpBBR, httpDossier, httpBestemming, httpKlant, httpZone, auth, sanitizer, datePipe, localeService) {
        var _this = _super.call(this, _toastr) || this;
        _this._toastr = _toastr;
        _this.fb = fb;
        _this.router = router;
        _this.route = route;
        _this.httpGvt = httpGvt;
        _this.httpBBR = httpBBR;
        _this.httpDossier = httpDossier;
        _this.httpBestemming = httpBestemming;
        _this.httpKlant = httpKlant;
        _this.httpZone = httpZone;
        _this.auth = auth;
        _this.sanitizer = sanitizer;
        _this.datePipe = datePipe;
        _this.localeService = localeService;
        _this.actionSucceeded = false;
        _this.actionSucceededMessage = "";
        // upload file
        _this.uploadedIDs = [];
        _this.uploadStatus = "selection";
        // gw-Documents
        _this.gwDocumentType = __WEBPACK_IMPORTED_MODULE_11__gw_documents_gw_documents_component__["a" /* DocumentTypes */].GrondVerzetToelating;
        _this.canSendNewEmail = true;
        _this.emailHistoriekType = __WEBPACK_IMPORTED_MODULE_13__gw_email_historiek_grid_gw_email_historiek_grid_component__["a" /* EmailHistoriekTypes */].gwGvtEdit;
        _this.klantContactEmailId = 40;
        _this.totalHoeveelheid = 0;
        _this.isBBR = true;
        return _this;
    }
    gwGvtEditComponent.prototype.ngOnInit = function () {
        var snapshot = this.route.snapshot;
        this.gvtId = -1;
        if (snapshot.params["id"])
            this.gvtId = +snapshot.params["id"];
        // Needed configuration for the bsDatepicker to accept dd/MM/yyyy formatting
        this.localeService.use("bootstrap-locale-nlbe");
        this.formOnInit();
    };
    gwGvtEditComponent.prototype.formOnInit = function () {
        this.loadEntity();
        this.loadGvtVolumes(this.gvtId);
        this.loadDropdowns();
        this.initialiseForm();
    };
    gwGvtEditComponent.prototype.initialiseForm = function () {
        this.gvtForm = this.fb.group({
            klantContactAchterNaam: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            klantContactVoorNaam: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            klantContactTelefoon: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            klantContactEmail: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern("^([\\w+-.%]+@[\\w-.]+\\.[A-Za-z]{2,4};?)+$")]],
            klantKenmerk: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            eigenaar: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            adres1: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(100)]],
            adres2: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(100)]],
            postcode: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(10)]],
            plaats: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            contactPersoon: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            telefoon: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            email: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern("^([\\w+-.%]+@[\\w-.]+\\.[A-Za-z]{2,4};?)+$")]],
            aanvraagDatum: [""],
            ontvangstDatumTransportVerklaring: [""],
            afzetAdres1: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(100)]],
            afzetAdres2: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(100)]],
            afzetPostcode: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(10)]],
            afzetPlaats: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(50)]],
            bestemmingsAardID: [""],
            bestemmingDopID: [""],
            bestemmingsBeschrijving: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(100)]],
            bijkomendeOmschrijvingBestemming: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(100)]],
            maximaleVerontreinigingsgraad: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(100)]],
            kadastraleWerkzone: [""],
            categorieID: [""],
            gebruikTerrein: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(500)]],
            kadAfdeling: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(30)]],
            kadAfdelingsNr: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].min(0), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].max(99999)]],
            kadSectie: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(1), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern("^[a-zA-Z]{1}$")]],
            kadNummers: [""],
            lX1: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(6), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].min(20000), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].max(280000)]],
            lY1: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(6), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].min(150000), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].max(250000)]],
            havenBedrijf: [""],
            studieBestemmingID: [""],
            ebsd: [""],
            rapportNummer: [""],
            rapportDatum: [""],
            toekenningKadOk: [""],
            toekomstigGebruik: [""],
            bestemmingsTypeID: [""],
            bestemmingGewestplan: [""],
            defAanwijzingBestemming: [""],
            tvid: [{ value: "", disabled: true }],
            grondtransportmeldingID: [{ value: "", disabled: true }],
            dossierbeheerderID: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            datumEindGrondverzet: [""],
            datumStartGrondverzet: [""],
            aangevoerdeHoeveelheid: [""],
            transportVerklaringOK: [""],
            opmerkingenTV: [{ value: "", disabled: true }, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(8000)]],
            opmerkingenKlant: [{ value: "", disabled: true }, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(8000)]],
            interneOpmerkingGTM: [{ value: "", disabled: true }, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(750)]],
            opmerkingen: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(8000)]],
            interneOpmerking: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(8000)]],
            geschiktVoorWerfbezoek: [""],
            startDatumGrondwerken: [""],
            besluitUitgegravenGrond: [""],
            actueleMilieuvergunningBeschikbaar: [""],
            bbrStatusID: [""],
            gvtVolumes: this.fb.array([])
        });
        this.gvtVolumes = this.gvtForm.get("gvtVolumes");
        this.initialValuesHandler();
    };
    // deelVolume
    gwGvtEditComponent.prototype.createGvtVolume = function (vol) {
        return this.fb.group({
            tvZoneNr: [vol.tvZoneNr],
            tvZoneID: [vol.tvZoneID],
            beschrijving: [vol.beschrijving],
            kgbuOmschrijving: [vol.kgbuOmschrijving],
            kgbiOmschrijving: [vol.kgbiOmschrijving],
            kgboOmschrijving: [vol.kgboOmschrijving],
            geplandGebruik: [vol.geplandGebruik, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].min(0), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].max(999999)]],
            beschikbaar: [vol.beschikbaar],
            werkelijkeHoeveelheid: [vol.werkelijkeHoeveelheid],
            bbrTVZoneToepassingCode: [vol.bbrTVZoneToepassingCode],
            akkoord: [vol.akkoord],
            technischVerslagZoneID: [vol.technischVerslagZoneID],
            // others
            technischVerslagID: [vol.technischVerslagID],
            kadastraleGegevens: [vol.kadastraleGegevens],
            lx1: [vol.lx1],
            ly1: [vol.ly1],
            gebruik1: [vol.gebruik1],
            gebruik2: [vol.gebruik2],
            gebruik3: [vol.gebruik3],
            gebruik4: [vol.gebruik4],
            gebruik5: [vol.gebruik5],
            gebruik6: [vol.gebruik6],
            gebruik7: [vol.gebruik7],
            gebruik8: [vol.gebruik8],
            gebruik9: [vol.gebruik9],
            gebruik10: [vol.gebruik10],
            gebruik11: [vol.gebruik11],
            gebruik12: [vol.gebruik12],
            gebruik13: [vol.gebruik13],
            gebruik14: [vol.gebruik14],
            gebruik15: [vol.gebruik15],
            gebruik16: [vol.gebruik16],
            gehalteMaterialen: [vol.gehalteMaterialen],
            gehalteStenen: [vol.gehalteStenen],
            id: [vol.id],
            saldo: [vol.saldo],
            bodemBeheerRapportID: [vol.bodemBeheerRapportID],
            hoeveelheidGemeld: [vol.hoeveelheidGemeld],
        });
    };
    gwGvtEditComponent.prototype.loadGvtVolumes = function (gvtId) {
        var _this = this;
        this.httpBBR.sgsGetDeelvolume(gvtId).toPromise()
            .then(function (data) {
            if (data != null && data.length > 0) {
                data.forEach(function (vol) {
                    _this.gvtVolumes.push(_this.createGvtVolume(vol));
                });
            }
        })
            .catch(function (error) {
            _this.handleError(error);
        });
    };
    // errors handling
    gwGvtEditComponent.prototype.initialValuesHandler = function () {
        var _this = this;
        this.gvtForm.get("havenBedrijf").valueChanges.debounceTime(500).subscribe(function (item) {
            _this.isHavenBedrijfChecked = (item === true) ? true : false;
        });
        this.gvtForm.get("gvtVolumes").valueChanges.subscribe(function (data) {
            _this.totalHoeveelheid = 0;
            if (data != null && data.length > 0) {
                data.forEach(function (vol) {
                    _this.totalHoeveelheid += Number(vol.werkelijkeHoeveelheid);
                });
            }
        });
    };
    gwGvtEditComponent.prototype.emailToHavenbedrijf = function () {
        console.log(this.getDeelvolume(), "deelvoulum");
    };
    gwGvtEditComponent.prototype.openGtmToCopy = function () {
        console.log("open pop");
    };
    // load entity
    gwGvtEditComponent.prototype.loadDropdowns = function () {
        var _this = this;
        this.httpBBR.sgsTransportListItem(this.gvtId).toPromise().
            then(function (lst) {
            _this.gvtTransportListItems = lst.slice();
            //empty
            console.log(_this.gvtTransportListItems, "this.gvtTransportListItems");
        });
        this.httpDossier.sgsComboListItems().toPromise().
            then(function (lst) {
            _this.dossierbeheerderItems = lst.slice();
        });
        this.httpBestemming.sgsBestemmingListItems().toPromise().
            then(function (lst) {
            _this.bestemmingItems = lst.slice();
        });
        this.httpKlant.gwsTopCgrLocatie(2, true).toPromise().
            then(function (lst) {
            _this.dopItems = lst.slice();
        });
        this.httpBBR.sgsCategorieListItem().toPromise().
            then(function (lst) {
            _this.categorieListItems = lst.slice();
        });
        this.httpBBR.sgsBBRsStatusListItem(this.gvtId).toPromise().
            then(function (lst) {
            _this.statusListItems = lst.slice();
        });
        this.httpBestemming.sgsTypeListItems().toPromise().
            then(function (lst) {
            _this.typeListItems = lst.slice();
        });
        this.httpBestemming.sgsStudieListItems().toPromise().
            then(function (lst) {
            _this.studieListItems = lst.slice();
        });
    };
    gwGvtEditComponent.prototype.loadEntity = function () {
        var _this = this;
        if (this.gvtId === -1) {
            return;
        }
        this.httpBBR.sgsGetBBRJoinedData(this.gvtId).toPromise()
            .then(function (bbr) {
            if (!bbr) {
                _this.showWarningToast("De BBR bestaat niet");
                return;
            }
            ;
            console.log(bbr, "bbr data");
            _this.gvtData = bbr;
            if (_this.gvtData.bestemmingID) {
                _this.httpBBR.sgsOpgeletListItem(_this.gvtData.bestemmingID).toPromise().
                    then(function (lst) {
                    _this.opgeletListItems = lst.slice();
                    console.log(_this.opgeletListItems, "   this.opgeletListItems");
                });
            }
            _this.gvtForm.patchValue({
                klantContactAchterNaam: _this.gvtData.klantContactAchterNaam,
                klantContactVoorNaam: _this.gvtData.klantContactVoorNaam,
                klantContactTelefoon: _this.gvtData.klantContactTelefoon,
                klantContactEmail: _this.gvtData.klantContactEmail,
                klantKenmerk: _this.gvtData.klantKenmerk,
                eigenaar: _this.gvtData.eigenaar,
                adres1: _this.gvtData.adres1,
                adres2: _this.gvtData.adres2,
                postcode: _this.gvtData.postcode,
                plaats: _this.gvtData.plaats,
                contactPersoon: _this.gvtData.contactPersoon,
                telefoon: _this.gvtData.telefoon,
                email: _this.gvtData.email,
                aanvraagDatum: _this.datePipe.transform(_this.gvtData.aanvraagDatum, "dd/MM/yyyy"),
                ontvangstDatumTransportVerklaring: _this.datePipe.transform(_this.gvtData.ontvangstDatumTransportVerklaring, "dd/MM/yyyy"),
                afzetAdres1: _this.gvtData.afzetAdres1,
                afzetAdres2: _this.gvtData.afzetAdres2,
                afzetPostcode: _this.gvtData.afzetPostcode,
                afzetPlaats: _this.gvtData.afzetPlaats,
                bestemmingsAardID: _this.gvtData.bestemmingsAardID,
                bestemmingDopID: _this.gvtData.bestemmingDopID,
                bestemmingsBeschrijving: _this.gvtData.bestemmingsBeschrijving,
                bijkomendeOmschrijvingBestemming: _this.gvtData.bijkomendeOmschrijvingBestemming,
                maximaleVerontreinigingsgraad: _this.gvtData.maximaleVerontreinigingsgraad,
                kadastraleWerkzone: _this.gvtData.kadastraleWerkzone,
                categorieID: _this.gvtData.categorieID,
                gebruikTerrein: _this.gvtData.gebruikTerrein,
                kadAfdeling: _this.gvtData.kadAfdeling,
                kadAfdelingsNr: _this.gvtData.kadAfdelingsNr,
                kadSectie: _this.gvtData.kadSectie,
                kadNummers: _this.gvtData.kadNummers,
                lX1: _this.gvtData.lX1,
                lY1: _this.gvtData.lY1,
                // havenBedrijf: [""],
                studieBestemmingID: _this.gvtData.studieBestemmingID,
                ebsd: _this.gvtData.ebsd,
                rapportNummer: _this.gvtData.rapportNummer,
                rapportDatum: _this.datePipe.transform(_this.gvtData.rapportDatum, "dd/MM/yyyy"),
                toekenningKadOk: _this.gvtData.toekenningKadOk,
                toekomstigGebruik: _this.gvtData.toekomstigGebruik,
                bestemmingsTypeID: _this.gvtData.bestemmingsTypeID,
                bestemmingGewestplan: _this.gvtData.bestemmingGewestplan,
                defAanwijzingBestemming: _this.gvtData.defAanwijzingBestemming,
                tvid: _this.gvtData.tvid,
                grondtransportmeldingID: _this.gvtData.grondtransportmeldingID,
                dossierbeheerderID: _this.gvtData.dossierbeheerderID,
                datumEindGrondverzet: _this.datePipe.transform(_this.gvtData.datumEindGrondverzet, "dd/MM/yyyy"),
                datumStartGrondverzet: _this.datePipe.transform(_this.gvtData.datumStartGrondverzet, "dd/MM/yyyy"),
                aangevoerdeHoeveelheid: _this.gvtData.aangevoerdeHoeveelheid,
                transportVerklaringOK: _this.gvtData.transportVerklaringOK,
                opmerkingenTV: _this.gvtData.opmerkingenTV,
                opmerkingenKlant: _this.gvtData.opmerkingenKlant,
                interneOpmerkingGTM: _this.gvtData.interneOpmerkingGTM,
                opmerkingen: _this.gvtData.opmerkingen,
                interneOpmerking: _this.gvtData.interneOpmerking,
                geschiktVoorWerfbezoek: _this.gvtData.geschiktVoorWerfbezoek,
                startDatumGrondwerken: _this.datePipe.transform(_this.gvtData.startDatumGrondwerken, "dd/MM/yyyy"),
                besluitUitgegravenGrond: _this.gvtData.besluitUitgegravenGrond,
                // actueleMilieuvergunningBeschikbaar: this.gvtData.actueleMilieuvergunningBeschikbaar,
                bbrStatusID: _this.gvtData.bbrStatusID,
            });
        }).catch(function (error) {
            _this.showErrorToast(error);
        });
    };
    gwGvtEditComponent.prototype.navigateToOpgelet = function (item) {
        this.router.navigate(['/gw', 'gvt-edit', item]);
        this.ngOnInit();
    };
    gwGvtEditComponent.prototype.sendData = function (fileIDs) {
        if (fileIDs != null) {
            this.uploadedIDs = fileIDs.slice();
            //  this.gvtUpload.patchValue({ uploadedIDs: this.uploadedIDs });
        }
        var gvtFormvalues = __assign({}, this.getGvtFormValues(), this.gvtStudieValue, this.getDeelvolume());
        console.log(gvtFormvalues, "gvtFormvalues");
        //   const klantFormValues: IKlantPoco = this.getformValues();
        //this.httpKlant.sgsSave(klantFormValues).toPromise()
        //    .then((docId: any) => {
        //        this.showSuccesToast("De gegevens werden opgeslagen");
        //        this.router.navigate(["/gw-klant-grid"]);
        //    })
        //    .catch(error => {
        //        this.handleError(error);
        //        console.log(error, "error");
        //        if (this.uploadedIDs.length > 0) {
        //            this.uploadStatus = "clean";
        //        }
        //    });
    };
    gwGvtEditComponent.prototype.save = function () {
        var _this = this;
        var gvtFormvalues = __assign({}, this.getGvtFormValues(), this.gvtStudieValue, this.getDeelvolume());
        this.httpBBR.sgsSaveGvtJoinedData(gvtFormvalues).toPromise().then(function (docId) {
            _this.showSuccesToast("De gegevens werden opgeslagen");
            _this.uploadStatus = "selection";
        })
            .catch(function (error) {
            _this.handleError(error);
            if (_this.uploadedIDs.length > 0) {
                _this.uploadStatus = "clean";
            }
        });
        console.log(gvtFormvalues, "gvtFormvalues");
    };
    gwGvtEditComponent.prototype.saveUpload = function () {
        // Upload the files first if any
        this.uploadStatus = "upload";
        // gw-documents component will trigger sendData with the ids of the uploaded files
    };
    gwGvtEditComponent.prototype.toGeopunt = function () {
        var x = this.gvtForm.controls.lX1.value;
        var y = this.gvtForm.controls.lY1.value;
        //const street = this.gvtForm.controls.inrichtingStraat.value;
        //const city = this.gvtForm.controls.inrichtingGemeente.value;
        var geopunt = new __WEBPACK_IMPORTED_MODULE_10__scripts_geopunt_scripts__["a" /* GeopuntScripts */](this.sanitizer);
        var url = geopunt.getGeopuntUrl(x, y, null, null);
        window.open(url);
    };
    // copy the GTM
    gwGvtEditComponent.prototype.onGtmSelected = function (value) {
    };
    // get values from studie
    gwGvtEditComponent.prototype.getGvtFormValues = function () {
        var gvtFromValues = {
            klantContactAchterNaam: this.gvtForm.value.klantContactAchterNaam,
            klantContactVoorNaam: this.gvtForm.value.klantContactVoorNaam,
            klantContactTelefoon: this.gvtForm.value.klantContactTelefoon,
            klantContactEmail: this.gvtForm.value.klantContactEmail,
            klantKenmerk: this.gvtForm.value.klantKenmerk,
            eigenaar: this.gvtForm.value.eigenaar,
            adres1: this.gvtForm.value.adres1,
            adres2: this.gvtForm.value.adres2,
            postcode: this.gvtForm.value.postcode,
            plaats: this.gvtForm.value.plaats,
            contactPersoon: this.gvtForm.value.contactPersoon,
            telefoon: this.gvtForm.value.telefoon,
            email: this.gvtForm.value.email,
            aanvraagDatum: this.stringToDate(this.gvtForm.value.aanvraagDatum),
            ontvangstDatumTransportVerklaring: this.stringToDate(this.gvtForm.value.ontvangstDatumTransportVerklaring),
            afzetAdres1: this.gvtForm.value.afzetAdres1,
            afzetAdres2: this.gvtForm.value.afzetAdres2,
            afzetPostcode: this.gvtForm.value.afzetPostcode,
            afzetPlaats: this.gvtForm.value.afzetPlaats,
            bestemmingsAardID: this.gvtForm.value.bestemmingsAardID,
            bestemmingDopID: this.gvtForm.value.bestemmingDopID,
            bestemmingsBeschrijving: this.gvtForm.value.bestemmingsBeschrijving,
            bijkomendeOmschrijvingBestemming: this.gvtForm.value.bijkomendeOmschrijvingBestemming,
            maximaleVerontreinigingsgraad: this.gvtForm.value.maximaleVerontreinigingsgraad,
            kadastraleWerkzone: this.gvtForm.value.kadastraleWerkzone,
            categorieID: this.gvtForm.value.categorieID,
            gebruikTerrein: this.gvtForm.value.gebruikTerrein,
            kadAfdeling: this.gvtForm.value.kadAfdeling,
            kadAfdelingsNr: this.gvtForm.value.kadAfdelingsNr,
            kadSectie: this.gvtForm.value.kadSectie,
            kadNummers: this.gvtForm.value.kadNummers,
            lX1: this.gvtForm.value.lX1,
            lY1: this.gvtForm.value.lY1,
            //havenBedrijf: this.gvtForm.value.havenBedrijf,
            studieBestemmingID: this.gvtForm.value.studieBestemmingID,
            ebsd: this.gvtForm.value.ebsd,
            rapportNummer: this.gvtForm.value.rapportNummer,
            rapportDatum: this.stringToDate(this.gvtForm.value.rapportDatum),
            toekenningKadOk: this.gvtForm.value.toekenningKadOk,
            toekomstigGebruik: this.gvtForm.value.toekomstigGebruik,
            bestemmingsTypeID: this.gvtForm.value.bestemmingsTypeID,
            bestemmingGewestplan: this.gvtForm.value.bestemmingGewestplan,
            defAanwijzingBestemming: this.gvtForm.value.defAanwijzingBestemming,
            tvid: this.gvtForm.value.tvid,
            grondtransportmeldingID: this.gvtForm.value.grondtransportmeldingID,
            dossierbeheerderID: this.gvtForm.value.dossierbeheerderID,
            datumEindGrondverzet: this.stringToDate(this.gvtForm.value.datumEindGrondverzet),
            datumStartGrondverzet: this.stringToDate(this.gvtForm.value.datumStartGrondverzet),
            aangevoerdeHoeveelheid: this.gvtForm.value.aangevoerdeHoeveelheid,
            transportVerklaringOK: this.gvtForm.value.transportVerklaringOK,
            opmerkingenTV: this.gvtForm.value.opmerkingenTV,
            opmerkingenKlant: this.gvtForm.value.opmerkingenKlant,
            interneOpmerkingGTM: this.gvtForm.value.interneOpmerkingGTM,
            opmerkingen: this.gvtForm.value.opmerkingen,
            interneOpmerking: this.gvtForm.value.interneOpmerking,
            geschiktVoorWerfbezoek: this.gvtForm.value.geschiktVoorWerfbezoek,
            startDatumGrondwerken: this.stringToDate(this.gvtForm.value.startDatumGrondwerken),
            besluitUitgegravenGrond: this.gvtForm.value.besluitUitgegravenGrond,
            actueleMilieuvergunningBeschikbaar: this.gvtForm.value.actueleMilieuvergunningBeschikbaar,
            bbrStatusID: this.gvtForm.value.bbrStatusID,
            // fields not used in the form
            aanvulPlanOntvangen: this.gvtData.aanvulPlanOntvangen,
            afnemersverklaringOntvangen: this.gvtData.afnemersverklaringOntvangen,
            afnemersverklaringOntvangenDatum: this.gvtData.afnemersverklaringOntvangenDatum,
            afnemersVerklaringToesturen: this.gvtData.afnemersVerklaringToesturen,
            bbrGefactureerd: this.gvtData.bbrGefactureerd,
            besluitStudieBouwStof: this.gvtData.besluitStudieBouwStof,
            bestemmingID: this.gvtData.bestemmingID,
            bestemmingsAard: this.gvtData.bestemmingsAard,
            bestemmingsAardId: this.gvtData.bestemmingsAardId,
            betalingOK: this.gvtData.betalingOK,
            bijzonderPlanAanleg: this.gvtData.bijzonderPlanAanleg,
            bodemBeheerRapportID: this.gvtData.bodemBeheerRapportID,
            bpaOK: this.gvtData.bpaOK,
            datumBBRHerinnering: this.gvtData.datumBBRHerinnering,
            dossierbeheerderID_BBR: this.gvtData.dossierbeheerderID_BBR,
            emailSend: this.gvtData.emailSend,
            factuurExportDatum: this.gvtData.factuurExportDatum,
            finaalBBRAfgeven: this.gvtData.finaalBBRAfgeven,
            finalEmailSend: this.gvtData.finalEmailSend,
            finaleOpmerkingen: this.gvtData.finaleOpmerkingen,
            fysiekeScheiding: this.gvtData.fysiekeScheiding,
            gewestPlanOK: this.gvtData.gewestPlanOK,
            goedkeuringTransportGefactureerd: this.gvtData.goedkeuringTransportGefactureerd,
            indieningswijzeAanvulplan: this.gvtData.indieningswijzeAanvulplan,
            klantContact: this.gvtData.klantContact,
            klantID: this.gvtData.klantID,
            klantNaam: this.gvtData.klantNaam,
            lijstBestemmingenBeschikbaar: this.gvtData.lijstBestemmingenBeschikbaar,
            situatieSchetsOK: this.gvtData.situatieSchetsOK,
            statusDatum: this.gvtData.statusDatum,
            statusDatumBBR: this.gvtData.statusDatumBBR,
            statusDescription: this.gvtData.statusDescription,
            studieBestemming: this.gvtData.studieBestemming,
            studieBouwstof: this.gvtData.studieBouwstof,
            studieBouwstofDatum: this.gvtData.studieBouwstofDatum,
            studieBouwstofEBSD: this.gvtData.studieBouwstofEBSD,
            studieBouwstofNummer: this.gvtData.studieBouwstofNummer,
            toepassingAls: this.gvtData.toepassingAls,
            tvStatusID: this.gvtData.tvStatusID,
            werfOpvolging: this.gvtData.werfOpvolging,
            zintuiglijkeWaarnemingenOK: this.gvtData.zintuiglijkeWaarnemingenOK,
            bbrNummer: this.gvtData.bbrNummer,
        };
        return gvtFromValues;
    };
    gwGvtEditComponent.prototype.getDeelvolume = function () {
        return this.gvtForm.get("gvtVolumes").value;
    };
    gwGvtEditComponent.prototype.getStudieValues = function (item) {
        this.gvtStudieValue = item;
    };
    gwGvtEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "gw-gvt-edit",
            template: __webpack_require__(649),
            styles: [__webpack_require__(650)],
            providers: [__WEBPACK_IMPORTED_MODULE_8__angular_common__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["ToastrService"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_14__services_http_gvt_service__["a" /* HttpGVTService */],
            __WEBPACK_IMPORTED_MODULE_15__services_http_bbr_service__["a" /* HttpBBRService */],
            __WEBPACK_IMPORTED_MODULE_16__services_http_dossier_service__["a" /* HttpDossierService */],
            __WEBPACK_IMPORTED_MODULE_17__services_http_bestemming_service__["a" /* HttpBestemmingService */],
            __WEBPACK_IMPORTED_MODULE_5__services_http_klant_service__["a" /* HttpKlantService */],
            __WEBPACK_IMPORTED_MODULE_12__services_http_tvzone_service__["a" /* HttpTVZoneService */],
            __WEBPACK_IMPORTED_MODULE_7__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["DomSanitizer"],
            __WEBPACK_IMPORTED_MODULE_8__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_datepicker__["a" /* BsLocaleService */]])
    ], gwGvtEditComponent);
    return gwGvtEditComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__["b" /* GeneralScripts */]));



/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwExportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_klant_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_datepicker__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_authentication_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__angular_common__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var data = [
    { id: 1, fileName: "name 1", type: 1 },
    { id: 2, fileName: "name 2", type: 2 },
    { id: 3, fileName: "name 3", type: 3 },
    { id: 4, fileName: "name 4", type: 4 },
    { id: 5, fileName: "name 5", type: 5 },
];
var gwExportComponent = /** @class */ (function (_super) {
    __extends(gwExportComponent, _super);
    function gwExportComponent(_toastr, fb, httpKlant, router, route, auth, localeService) {
        var _this = _super.call(this, _toastr) || this;
        _this._toastr = _toastr;
        _this.fb = fb;
        _this.httpKlant = httpKlant;
        _this.router = router;
        _this.route = route;
        _this.auth = auth;
        _this.localeService = localeService;
        _this.data = data;
        return _this;
    }
    gwExportComponent.prototype.ngOnInit = function () {
        this.localeService.use("bootstrap-locale-nlbe");
    };
    gwExportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "gw-export",
            template: __webpack_require__(652),
            styles: [__webpack_require__(653)],
            providers: [__WEBPACK_IMPORTED_MODULE_8__angular_common__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["ToastrService"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_5__services_http_klant_service__["a" /* HttpKlantService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_7__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_datepicker__["a" /* BsLocaleService */]])
    ], gwExportComponent);
    return gwExportComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__["b" /* GeneralScripts */]));



/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwKwEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scripts_appLabels__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scripts_geopunt_scripts__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_datepicker__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_http_kleinewerven_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_http_bbr_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_http_file_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__file_uploader_file_uploader_component__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__gw_documents_gw_documents_component__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__gw_email_historiek_grid_gw_email_historiek_grid_component__ = __webpack_require__(614);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var gwKwEditComponent = /** @class */ (function (_super) {
    __extends(gwKwEditComponent, _super);
    function gwKwEditComponent(bbrRepositoryService, fileRepositoryService, httpKW, sanitizer, toastrr, fb, localeService, route, location, datePipe, router) {
        var _this = _super.call(this, toastrr) || this;
        _this.bbrRepositoryService = bbrRepositoryService;
        _this.fileRepositoryService = fileRepositoryService;
        _this.httpKW = httpKW;
        _this.sanitizer = sanitizer;
        _this.toastrr = toastrr;
        _this.fb = fb;
        _this.localeService = localeService;
        _this.route = route;
        _this.location = location;
        _this.datePipe = datePipe;
        _this.router = router;
        _this.appLabels = __WEBPACK_IMPORTED_MODULE_2__scripts_appLabels__["a" /* appLabels */];
        _this.kwID = 0;
        _this.bbrId = 0;
        _this.grondtransportmeldingIsVisible = false;
        _this.kadastraleGegevensVisible = false;
        _this.lambertCoordinatenVisible = false;
        // validation 
        _this.invalidHerkomstLambert = false;
        _this.invalidDOPLambert = false;
        _this.invalidHerkomstKadaster = false;
        _this.invalidDOPKadaster = false;
        _this.isHerContainerBedrijf = false;
        _this.isBestContainerBedrijf = false;
        _this.invalidHerkomstLokatie = false;
        _this.isHerkomstValid = false;
        _this.isDOPValid = false;
        _this.invalidDOPLokatie = false;
        // upload documents
        _this.uploadedIDs = [];
        _this.uploadStatus = "selection";
        _this.uploadQueueCount = 0;
        _this.existingFiles = [];
        // gw-Documents
        _this.gwDocumentType = __WEBPACK_IMPORTED_MODULE_14__gw_documents_gw_documents_component__["a" /* DocumentTypes */].KleineWerken;
        _this.canSendNewEmail = true;
        _this.emailHistoriekType = __WEBPACK_IMPORTED_MODULE_15__gw_email_historiek_grid_gw_email_historiek_grid_component__["a" /* EmailHistoriekTypes */].gwKwEdit;
        _this.terugVisible = true;
        _this.waitingMessageVisible = false;
        return _this;
    }
    gwKwEditComponent.prototype.ngOnInit = function () {
        this.localeService.use("bootstrap-locale-nlbe");
        if (this.route.snapshot.params["id"]) {
            this.kwID = this.route.snapshot.params["id"];
            this.loadData(this.route.snapshot.params["id"]);
        }
        this.initializeForm();
        this.errorValidationhandler();
    };
    gwKwEditComponent.prototype.initializeForm = function () {
        this.kwForm = this.fb.group({
            kleineWervenMeldingID: [""],
            isEigenGrondwerker: [""],
            kleineWervenGrondwerkerPartijID: [""],
            isEigenTransporteur: [""],
            kleineWervenTranporteurPartijID: [""],
            kleineWervenHerkomstLokatieID: [""],
            kleineWervenBestemmingLokatieID: [""],
            kleineWervenTopLokatieID: [""],
            klantID: [""],
            klantReferentie: [""],
            geplandVolume: [""],
            geplandeStartDatum: [""],
            werkelijkVolume: ["", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            werkelijkeStartDatum: ["", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            werkelijkeEindDatum: ["", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            wervenVerklaringOntvangen: [""],
            emailSend: [""],
            creatieDatum: [""],
            statusID: [""],
            status: [{ value: "", disabled: true }],
            isTop: [""],
            klantVoornaam: [""],
            klantAchternaam: [""],
            klantFunctie: [""],
            klantOrganisatie: [""],
            klantAdres1: [""],
            klantAdres2: [""],
            klantPostCode: [""],
            klantPlaats: [""],
            klantLand: [""],
            klantTelefoon: [""],
            klantEmail: [""],
            herkAdres1: [""],
            herkAdres2: [""],
            herkAfzetAdres1: [""],
            herkAfzetAdres2: [""],
            herkAfzetPlaats: [""],
            herkAfzetPostCode: [""],
            herkBeschrijving: [""],
            herkContactPersoon: [""],
            herkContainerBedrijfNaam: [""],
            herkEigenaar: [""],
            herkEmail: [""],
            herkExplAdres1: [""],
            herkExplAdres2: [""],
            herkExplPlaats: [""],
            herkExplPostcode: [""],
            herkIsContainerBedrijf: [""],
            herkIsContainerPark: [""],
            herkKadAfdeling: [""],
            herkKadAfdelingsNr: [""],
            herkKadBisNr: [""],
            herkKadExponent1: [""],
            herkKadExponent2: [""],
            herkKadGrondNr: [""],
            herkKadNummers: [""],
            herkKadSectie: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(1)],
            herkKleineWervenLokatieType: [""],
            herkLX1: ["", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(6), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].min(20000), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].max(280000)]],
            herkLY1: ["", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(6), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].min(150000), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].max(250000)]],
            herkOpmerkingen: [""],
            herkPlaats: [""],
            herkPostcode: [""],
            herkTelefoon: [""],
            herkAdresCode: [""],
            herkKadCode: [""],
            herkLambCode: [""],
            bestAdresCode: [""],
            bestKadCode: [""],
            bestLambCode: [""],
            bestAchternaam: [""],
            bestAdres1: [""],
            bestAdres2: [""],
            bestAfzetAdres1: [""],
            bestAfzetAdres2: [""],
            bestAfzetPlaats: [""],
            bestAfzetPostCode: [""],
            bestBtwNummer: [""],
            bestContactPersoon: [""],
            bestContainerBedrijfNaam: [""],
            bestEigenaar: [""],
            bestEmail: [""],
            bestExplAdres1: [""],
            bestExplAdres2: [""],
            bestExplPlaats: [""],
            bestExplPostcode: [""],
            bestFaktuurAdres1: [""],
            bestFaktuurAdres2: [""],
            bestFaktuurLand: [""],
            bestFaktuurPlaats: [""],
            bestFaktuurPostcode: [""],
            bestFunctie: [""],
            bestIsContainerBedrijf: [""],
            bestIsContainerPark: [""],
            bestKadAfdeling: [""],
            bestKadAfdelingsNr: [""],
            bestKadBisNr: [""],
            bestKadExponent1: [""],
            bestKadExponent2: [""],
            bestKadGrondNr: [""],
            bestKadNummers: [""],
            bestKadSectie: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(1)],
            bestKleineWervenLokatieType: [""],
            bestLX1: ["", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(6), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].min(20000), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].max(280000)]],
            bestLY1: ["", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(6), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].min(150000), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].max(250000)]],
            bestOpmerkingen: [""],
            bestOrganisatie: [""],
            bestPlaats: [""],
            bestPostcode: [""],
            bestTelefoon: [""],
            bestVoornaam: [""],
            gwAchternaam: ["", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            gwEmail: ["", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].pattern("^([\\w+-.%]+@[\\w-.]+\\.[A-Za-z]{2,4};?)+$")]],
            gwFirmaNaam: ["", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            gwKleineWervenPartijType: [""],
            gwPlaats: [""],
            gwPostcode: [""],
            gwStraat1: [""],
            gwStraat2: [""],
            gwTelefoon: ["", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            gwVoornaam: ["", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            tptAchternaam: ["", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            tptEmail: ["", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].pattern("^([\\w+-.%]+@[\\w-.]+\\.[A-Za-z]{2,4};?)+$")]],
            tptFirmaNaam: ["", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            tptKleineWervenPartijType: [""],
            tptPlaats: [""],
            tptPostcode: [""],
            tptStraat1: [""],
            tptStraat2: [""],
            tptTelefoon: ["", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            tptVoornaam: ["", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
        });
    };
    gwKwEditComponent.prototype.errorValidationhandler = function () {
        var _this = this;
        // lambert
        this.kwForm.controls.herkLX1.valueChanges.subscribe(function (e) {
            _this.isHerkomstLambertValid();
        });
        this.kwForm.controls.herkLY1.valueChanges.subscribe(function (e) {
            _this.isHerkomstLambertValid();
        });
        this.kwForm.controls.bestLX1.valueChanges.subscribe(function (e) {
            _this.isDOPLambertValid();
        });
        this.kwForm.controls.bestLY1.valueChanges.subscribe(function (e) {
            _this.isDOPLambertValid();
        });
        // besteming kadastral gegevens
        this.kwForm.controls.bestKadAfdeling.valueChanges.subscribe(function (e) {
            _this.isDOPKadasterValid();
        });
        this.kwForm.controls.bestKadAfdelingsNr.valueChanges.subscribe(function (e) {
            _this.isDOPKadasterValid();
        });
        this.kwForm.controls.bestKadSectie.valueChanges.subscribe(function (e) {
            _this.isDOPKadasterValid();
        });
        this.kwForm.controls.bestKadNummers.valueChanges.subscribe(function (e) {
            _this.isDOPKadasterValid();
        });
        // Herkomsf kadastral gegevens
        this.kwForm.controls.herkKadAfdeling.valueChanges.subscribe(function (e) {
            _this.isHerkomstKadasterValid();
        });
        this.kwForm.controls.herkKadAfdelingsNr.valueChanges.subscribe(function (e) {
            _this.isHerkomstKadasterValid();
        });
        this.kwForm.controls.herkKadSectie.valueChanges.subscribe(function (e) {
            _this.isHerkomstKadasterValid();
        });
        this.kwForm.controls.herkKadNummers.valueChanges.subscribe(function (e) {
            _this.isHerkomstKadasterValid();
        });
        // container 
        this.kwForm.controls.bestIsContainerBedrijf.valueChanges.subscribe(function (e) {
            _this.isBestContainerBedrijf = e;
        });
        this.kwForm.controls.herkIsContainerBedrijf.valueChanges.subscribe(function (e) {
            _this.isHerContainerBedrijf = e;
        });
        // locatie validation
        this.kwForm.controls.bestAdres1.valueChanges.subscribe(function (e) {
            _this.isDOPLocationValid();
        });
        this.kwForm.controls.bestPostcode.valueChanges.subscribe(function (e) {
            _this.isDOPLocationValid();
        });
        this.kwForm.controls.bestPlaats.valueChanges.subscribe(function (e) {
            _this.isDOPLocationValid();
        });
        this.kwForm.controls.herkAdres1.valueChanges.subscribe(function (e) {
            _this.isHerkomstLocationValid();
        });
        this.kwForm.controls.herkPostcode.valueChanges.subscribe(function (e) {
            _this.isHerkomstLocationValid();
        });
        this.kwForm.controls.herkPlaats.valueChanges.subscribe(function (e) {
            _this.isHerkomstLocationValid();
        });
        //others validations
    };
    // lambert validatie check
    gwKwEditComponent.prototype.isHerkomstLambertValid = function () {
        var LambertX = this.kwForm.controls.herkLX1;
        var LambertY = this.kwForm.controls.herkLY1;
        if (!this.isNullOrWhitespace(LambertX.value) && !this.isNullOrWhitespace(LambertY.value) ||
            this.isNullOrWhitespace(LambertX.value) && this.isNullOrWhitespace(LambertY.value)) {
            LambertX.setErrors(null);
            LambertY.setErrors(null);
            LambertX.updateValueAndValidity({ emitEvent: false });
            LambertY.updateValueAndValidity({ emitEvent: false });
            this.invalidHerkomstLambert = false;
            return true;
        }
        this.setMandatoryError(LambertX);
        this.setMandatoryError(LambertY);
        if (!this.isNullOrWhitespace(LambertX.value) || !this.isNullOrWhitespace(LambertY.value)) {
            this.invalidHerkomstLambert = true;
        }
        return false;
    };
    gwKwEditComponent.prototype.isDOPLambertValid = function () {
        var LambertX = this.kwForm.controls.bestLX1;
        var LambertY = this.kwForm.controls.bestLY1;
        if (!this.isNullOrWhitespace(LambertX.value) && !this.isNullOrWhitespace(LambertY.value) ||
            this.isNullOrWhitespace(LambertX.value) && this.isNullOrWhitespace(LambertY.value)) {
            LambertX.setErrors(null);
            LambertY.setErrors(null);
            LambertX.updateValueAndValidity({ emitEvent: false });
            LambertY.updateValueAndValidity({ emitEvent: false });
            this.invalidDOPLambert = false;
            return true;
        }
        this.setMandatoryError(LambertX);
        this.setMandatoryError(LambertY);
        if (!this.isNullOrWhitespace(LambertX.value) || !this.isNullOrWhitespace(LambertY.value)) {
            this.invalidDOPLambert = true;
        }
        return false;
    };
    // Kadastral gegevens check
    gwKwEditComponent.prototype.isHerkomstKadasterValid = function () {
        var KadGemeente = this.kwForm.controls.herkKadAfdeling;
        var KadSectie = this.kwForm.controls.herkKadSectie;
        var KadNummers = this.kwForm.controls.herkKadNummers;
        var KadAfdNummer = this.kwForm.controls.herkKadAfdelingsNr;
        if ((!this.isNullOrWhitespace(KadGemeente.value) && !this.isNullOrWhitespace(KadSectie.value) && !this.isNullOrWhitespace(KadNummers.value) && !this.isNullOrWhitespace(KadAfdNummer.value)) ||
            (this.isNullOrWhitespace(KadGemeente.value) && this.isNullOrWhitespace(KadSectie.value) && this.isNullOrWhitespace(KadNummers.value) && this.isNullOrWhitespace(KadAfdNummer.value))) {
            KadGemeente.setErrors(null);
            KadSectie.setErrors(null);
            KadNummers.setErrors(null);
            KadAfdNummer.setErrors(null);
            KadGemeente.updateValueAndValidity({ emitEvent: false });
            KadSectie.updateValueAndValidity({ emitEvent: false });
            KadNummers.updateValueAndValidity({ emitEvent: false });
            KadAfdNummer.updateValueAndValidity({ emitEvent: false });
            this.invalidHerkomstKadaster = false;
            return true;
        }
        this.setMandatoryError(KadGemeente);
        this.setMandatoryError(KadSectie);
        this.setMandatoryError(KadNummers);
        this.setMandatoryError(KadAfdNummer);
        if (!this.isNullOrWhitespace(KadGemeente.value) || !this.isNullOrWhitespace(KadSectie.value) || !this.isNullOrWhitespace(KadNummers.value) || !this.isNullOrWhitespace(KadAfdNummer.value)) {
            this.invalidHerkomstKadaster = true;
        }
        return false;
    };
    gwKwEditComponent.prototype.isDOPKadasterValid = function () {
        var KadGemeente = this.kwForm.controls.bestKadAfdeling;
        var KadSectie = this.kwForm.controls.bestKadSectie;
        var KadNummers = this.kwForm.controls.bestKadNummers;
        var KadAfdNummer = this.kwForm.controls.bestKadAfdelingsNr;
        if ((!this.isNullOrWhitespace(KadGemeente.value) && !this.isNullOrWhitespace(KadSectie.value) && !this.isNullOrWhitespace(KadNummers.value) && !this.isNullOrWhitespace(KadAfdNummer.value)) ||
            (this.isNullOrWhitespace(KadGemeente.value) && this.isNullOrWhitespace(KadSectie.value) && this.isNullOrWhitespace(KadNummers.value) && this.isNullOrWhitespace(KadAfdNummer.value))) {
            KadGemeente.setErrors(null);
            KadSectie.setErrors(null);
            KadNummers.setErrors(null);
            KadAfdNummer.setErrors(null);
            KadGemeente.updateValueAndValidity({ emitEvent: false });
            KadSectie.updateValueAndValidity({ emitEvent: false });
            KadNummers.updateValueAndValidity({ emitEvent: false });
            KadAfdNummer.updateValueAndValidity({ emitEvent: false });
            this.invalidDOPKadaster = false;
            return true;
        }
        this.setMandatoryError(KadGemeente);
        this.setMandatoryError(KadSectie);
        this.setMandatoryError(KadNummers);
        this.setMandatoryError(KadAfdNummer);
        if (!this.isNullOrWhitespace(KadGemeente.value) || !this.isNullOrWhitespace(KadSectie.value) || !this.isNullOrWhitespace(KadNummers.value) || !this.isNullOrWhitespace(KadAfdNummer.value)) {
            this.invalidDOPKadaster = true;
        }
        return false;
    };
    // locatie gegevent check
    gwKwEditComponent.prototype.isDOPLocationValid = function () {
        var Adres = this.kwForm.controls.bestAdres1;
        var PostCode = this.kwForm.controls.bestPostcode;
        var Gemeente = this.kwForm.controls.bestPlaats;
        this.isDOPValid = false;
        if (!this.isNullOrWhitespace(Adres.value) && !this.isNullOrWhitespace(PostCode.value) && !this.isNullOrWhitespace(Gemeente.value)) {
            this.isDOPValid = true;
            //}
            //if ((!this.isNullOrWhitespace(Adres.value) && !this.isNullOrWhitespace(PostCode.value) && !this.isNullOrWhitespace(Gemeente.value)) ||
            //    (this.isNullOrWhitespace(Adres.value) && this.isNullOrWhitespace(PostCode.value) && this.isNullOrWhitespace(Gemeente.value))
            //) {
            Adres.setErrors(null);
            PostCode.setErrors(null);
            Gemeente.setErrors(null);
            Adres.updateValueAndValidity({ emitEvent: false });
            PostCode.updateValueAndValidity({ emitEvent: false });
            Gemeente.updateValueAndValidity({ emitEvent: false });
            this.invalidDOPLokatie = false;
            return true;
        }
        this.setMandatoryError(Adres);
        this.setMandatoryError(PostCode);
        this.setMandatoryError(Gemeente);
        this.invalidDOPLokatie = true;
        return false;
    };
    gwKwEditComponent.prototype.isHerkomstLocationValid = function () {
        var Adres = this.kwForm.controls.herkAdres1;
        var PostCode = this.kwForm.controls.herkPostcode;
        var Gemeente = this.kwForm.controls.herkPlaats;
        this.isHerkomstValid = false;
        if (!this.isNullOrWhitespace(Adres.value) && !this.isNullOrWhitespace(PostCode.value) && !this.isNullOrWhitespace(Gemeente.value)) {
            this.isHerkomstValid = true;
            //}
            //if ((!this.isNullOrWhitespace(Adres.value) && !this.isNullOrWhitespace(PostCode.value) && !this.isNullOrWhitespace(Gemeente.value)) ||
            //    (this.isNullOrWhitespace(Adres.value) && this.isNullOrWhitespace(PostCode.value) && this.isNullOrWhitespace(Gemeente.value))
            //) {
            Adres.setErrors(null);
            PostCode.setErrors(null);
            Gemeente.setErrors(null);
            Adres.updateValueAndValidity({ emitEvent: false });
            PostCode.updateValueAndValidity({ emitEvent: false });
            Gemeente.updateValueAndValidity({ emitEvent: false });
            this.invalidHerkomstLokatie = false;
            return true;
        }
        this.setMandatoryError(Adres);
        this.setMandatoryError(PostCode);
        this.setMandatoryError(Gemeente);
        this.invalidHerkomstLokatie = true;
        return false;
    };
    // GrondWerker and transporteur disabled
    gwKwEditComponent.prototype.isGrondWerkerDisabled = function () {
        if (this.kw !== null && this.kw.isEigenGrondwerker === true) {
            this.kwForm.get("gwAchternaam").disable();
            this.kwForm.get("gwEmail").disable();
            this.kwForm.get("gwFirmaNaam").disable();
            this.kwForm.get("gwPlaats").disable();
            this.kwForm.get("gwPostcode").disable();
            this.kwForm.get("gwStraat1").disable();
            this.kwForm.get("gwStraat2").disable();
            this.kwForm.get("gwTelefoon").disable();
            this.kwForm.get("gwVoornaam").disable();
        }
        else {
            this.kwForm.get("gwAchternaam").enable();
            this.kwForm.get("gwEmail").enable();
            this.kwForm.get("gwFirmaNaam").enable();
            this.kwForm.get("gwPlaats").enable();
            this.kwForm.get("gwPostcode").enable();
            this.kwForm.get("gwStraat1").enable();
            this.kwForm.get("gwStraat2").enable();
            this.kwForm.get("gwTelefoon").enable();
            this.kwForm.get("gwVoornaam").enable();
        }
    };
    gwKwEditComponent.prototype.isTranspoteurWerkerDisabled = function () {
        if (this.kw !== null && this.kw.isEigenTransporteur === true) {
            this.kwForm.get("tptAchternaam").disable();
            this.kwForm.get("tptEmail").disable();
            this.kwForm.get("tptFirmaNaam").disable();
            this.kwForm.get("tptPlaats").disable();
            this.kwForm.get("tptPostcode").disable();
            this.kwForm.get("tptStraat1").disable();
            this.kwForm.get("tptStraat2").disable();
            this.kwForm.get("tptTelefoon").disable();
            this.kwForm.get("tptVoornaam").disable();
        }
        else {
            this.kwForm.get("tptAchternaam").enable();
            this.kwForm.get("tptEmail").enable();
            this.kwForm.get("tptFirmaNaam").enable();
            this.kwForm.get("tptPlaats").enable();
            this.kwForm.get("tptPostcode").enable();
            this.kwForm.get("tptStraat1").enable();
            this.kwForm.get("tptStraat2").enable();
            this.kwForm.get("tptTelefoon").enable();
            this.kwForm.get("tptVoornaam").enable();
        }
    };
    gwKwEditComponent.prototype.setMandatoryError = function (control) {
        if (control == undefined)
            return;
        control.setErrors({ required: true, message: "Verplicht veld" });
    };
    // need confirmation from Daniel that the below validation are required or not
    //StartDatumValidation() {
    //    setTimeout((kwForm: FormGroup) => { kwForm.controls["werkelijkeStartDatum"].updateValueAndValidity() }, 10, this.kwForm);
    //}
    //EindDatumValidation() {
    //    setTimeout((kwForm: FormGroup) => { kwForm.controls["werkelijkeEindDatum"].updateValueAndValidity() }, 10, this.kwForm);
    //}
    //werkelijkeStartDatum() {
    //    //var today = new Date();
    //    //this.volForm = this.fb.group({
    //    //    KleineWervenMeldingId: [""],
    //    //    WerkelijkeStartDatum: [""],
    //    //    WerkelijkeEindDatum: [""],
    //    //    WerkelijkeAfsluitDatum: [today],
    //    //    WerkelijkVolume: ["", Validators.required],
    //    //    sendOK: [false, Validators.pattern("true")],
    //    //});
    //    this.kwForm.controls.werkelijkVolume.valueChanges.subscribe(e => {
    //        if (Number(e) <= 0) {
    //            this.kwForm.controls.werkelijkeStartDatum.clearValidators();
    //            this.kwForm.controls.werkelijkeEindDatum.clearValidators();
    //            this.kwForm.controls.werkelijkeStartDatum.updateValueAndValidity({ emitEvent: false });
    //            this.kwForm.controls.werkelijkeEindDatum.updateValueAndValidity({ emitEvent: false });
    //            return;
    //        }
    //        this.kwForm.controls.werkelijkeStartDatum.setValidators([ValidateRequired("'Datum van' is verplicht wanneer er een hoeveelheid is ingevuld'"), ValidateDateNoHigherThan(), ValidateDateNoHigherThan("'Datum van' is later dan 'datum tot'", this.kwForm.controls.werkelijkeEindDatum)]);
    //        this.kwForm.controls.werkelijkeEindDatum.setValidators([ValidateRequired("'Datum tot' is verplicht wanneer er een hoeveelheid is ingevuld'"), ValidateDateNoHigherThan(), ValidateDateNoLessThan("'Datum tot' is voor 'datum van'", this.kwForm.controls.werkelijkeStartDatum)]);
    //        this.kwForm.controls.werkelijkeStartDatum.updateValueAndValidity({ emitEvent: false });
    //        this.kwForm.controls.werkelijkeEindDatum.updateValueAndValidity({ emitEvent: false });
    //    });
    //    this.kwForm.controls.werkelijkeStartDatum.valueChanges.subscribe(_ => { this.kwForm.controls.werkelijkeEindDatum.updateValueAndValidity({ emitEvent: false }); });
    //    this.kwForm.controls.werkelijkeEindDatum.valueChanges.subscribe(_ => { this.kwForm.controls.werkelijkeStartDatum.updateValueAndValidity({ emitEvent: false }); });
    //}
    // get date
    gwKwEditComponent.prototype.loadData = function (id) {
        var _this = this;
        this.httpKW.getDetail(id).toPromise()
            .then(function (dtl) {
            _this.kw = dtl;
            if (dtl != null) {
                _this.kwForm.patchValue({
                    kleineWervenMeldingID: dtl.kleineWervenMeldingID,
                    isEigenGrondwerker: dtl.isEigenGrondwerker,
                    kleineWervenGrondwerkerPartijID: dtl.kleineWervenGrondwerkerPartijID,
                    isEigenTransporteur: dtl.isEigenTransporteur,
                    kleineWervenTranporteurPartijID: dtl.kleineWervenTranporteurPartijID,
                    kleineWervenHerkomstLokatieID: dtl.kleineWervenHerkomstLokatieID,
                    kleineWervenBestemmingLokatieID: dtl.kleineWervenBestemmingLokatieID,
                    kleineWervenTopLokatieID: dtl.kleineWervenTopLokatieID,
                    klantID: dtl.klantID,
                    klantReferentie: dtl.klantReferentie,
                    geplandVolume: dtl.geplandVolume,
                    geplandeStartDatum: _this.datePipe.transform(dtl.geplandeStartDatum, " dd / MM / yyyy"),
                    werkelijkVolume: dtl.werkelijkVolume,
                    werkelijkeStartDatum: _this.datePipe.transform(dtl.werkelijkeStartDatum, " dd / MM / yyyy"),
                    werkelijkeEindDatum: _this.datePipe.transform(dtl.werkelijkeEindDatum, " dd / MM / yyyy"),
                    wervenVerklaringOntvangen: dtl.wervenVerklaringOntvangen,
                    emailSend: dtl.emailSend,
                    creatieDatum: dtl.creatieDatum,
                    statusID: dtl.statusID,
                    status: dtl.status,
                    isTop: dtl.isTop,
                    klantVoornaam: dtl.klantVoornaam,
                    klantAchternaam: dtl.klantAchternaam,
                    klantFunctie: dtl.klantFunctie,
                    klantOrganisatie: dtl.klantOrganisatie,
                    klantAdres1: dtl.klantAdres1,
                    klantAdres2: dtl.klantAdres2,
                    klantPostCode: dtl.klantPostCode,
                    klantPlaats: dtl.klantPlaats,
                    klantLand: dtl.klantLand,
                    klantTelefoon: dtl.klantTelefoon,
                    klantEmail: dtl.klantEmail,
                    herkAdres1: dtl.herkAdres1,
                    herkAdres2: dtl.herkAdres2,
                    herkAfzetAdres1: dtl.herkAfzetAdres1,
                    herkAfzetAdres2: dtl.bestAfzetAdres2,
                    herkAfzetPlaats: dtl.herkAfzetPlaats,
                    herkAfzetPostCode: dtl.herkAfzetPostCode,
                    herkBeschrijving: dtl.herkBeschrijving,
                    herkContactPersoon: dtl.herkContactPersoon,
                    herkContainerBedrijfNaam: dtl.herkContainerBedrijfNaam,
                    herkEigenaar: dtl.herkEigenaar,
                    herkEmail: dtl.herkEmail,
                    herkExplAdres1: dtl.herkExplAdres1,
                    herkExplAdres2: dtl.herkExplAdres2,
                    herkExplPlaats: dtl.herkExplPlaats,
                    herkExplPostcode: dtl.herkExplPostcode,
                    herkIsContainerBedrijf: dtl.herkIsContainerBedrijf,
                    herkIsContainerPark: dtl.herkIsContainerPark,
                    herkKadAfdeling: dtl.herkKadAfdeling,
                    herkKadAfdelingsNr: dtl.herkKadAfdelingsNr,
                    herkKadBisNr: dtl.herkKadBisNr,
                    herkKadExponent1: dtl.herkKadExponent1,
                    herkKadExponent2: dtl.herkKadExponent2,
                    herkKadGrondNr: dtl.herkKadGrondNr,
                    herkKadNummers: dtl.herkKadNummers,
                    herkKadSectie: dtl.herkKadSectie,
                    herkKleineWervenLokatieType: dtl.herkKleineWervenLokatieType,
                    herkLX1: dtl.herkLX1,
                    herkLY1: dtl.herkLY1,
                    herkOpmerkingen: dtl.herkOpmerkingen,
                    herkPlaats: dtl.herkPlaats,
                    herkPostcode: dtl.herkPostcode,
                    herkTelefoon: dtl.herkTelefoon,
                    herAdresCode: dtl.herkAdresCode,
                    herKadCode: dtl.herkKadCode,
                    herLambCode: dtl.herkLambCode,
                    bestAdresCode: dtl.bestAdresCode,
                    bestKadCode: dtl.bestKadCode,
                    bestLambCode: dtl.bestLambCode,
                    bestAchternaam: dtl.bestAchternaam,
                    bestAdres1: dtl.bestAdres1,
                    bestAdres2: dtl.bestAdres2,
                    bestAfzetAdres1: dtl.bestAfzetAdres1,
                    bestAfzetAdres2: dtl.bestAfzetAdres2,
                    bestAfzetPlaats: dtl.bestAfzetPlaats,
                    bestAfzetPostCode: dtl.bestAfzetPostCode,
                    bestBtwNummer: dtl.bestBtwNummer,
                    bestContactPersoon: dtl.bestContactPersoon,
                    bestContainerBedrijfNaam: dtl.bestContainerBedrijfNaam,
                    bestEigenaar: dtl.bestEigenaar,
                    bestEmail: dtl.bestEmail,
                    bestExplAdres1: dtl.bestExplAdres1,
                    bestExplAdres2: dtl.bestExplAdres2,
                    bestExplPlaats: dtl.bestExplPlaats,
                    bestExplPostcode: dtl.bestExplPostcode,
                    bestFaktuurAdres1: dtl.bestFaktuurAdres1,
                    bestFaktuurAdres2: dtl.bestFaktuurAdres2,
                    bestFaktuurLand: dtl.bestFaktuurLand,
                    bestFaktuurPlaats: dtl.bestFaktuurPlaats,
                    bestFaktuurPostcode: dtl.bestFaktuurPostcode,
                    bestFunctie: dtl.bestFunctie,
                    bestIsContainerBedrijf: dtl.bestIsContainerBedrijf,
                    bestIsContainerPark: dtl.bestIsContainerPark,
                    bestKadAfdeling: dtl.bestKadAfdeling,
                    bestKadAfdelingsNr: dtl.bestKadAfdelingsNr,
                    bestKadBisNr: dtl.bestKadBisNr,
                    bestKadExponent1: dtl.bestKadExponent1,
                    bestKadExponent2: dtl.bestKadExponent2,
                    bestKadGrondNr: dtl.bestKadGrondNr,
                    bestKadNummers: dtl.bestKadNummers,
                    bestKadSectie: dtl.bestKadSectie,
                    bestKleineWervenLokatieType: dtl.bestKleineWervenLokatieType,
                    bestLX1: dtl.bestLX1,
                    bestLY1: dtl.bestLY1,
                    bestOpmerkingen: dtl.bestOpmerkingen,
                    bestOrganisatie: dtl.bestOrganisatie,
                    bestPlaats: dtl.bestPlaats,
                    bestPostcode: dtl.bestPostcode,
                    bestTelefoon: dtl.bestTelefoon,
                    bestVoornaam: dtl.bestVoornaam,
                    gwAchternaam: dtl.gwAchternaam,
                    gwEmail: dtl.gwEmail,
                    gwFirmaNaam: dtl.gwFirmaNaam,
                    gwKleineWervenPartijType: dtl.gwKleineWervenPartijType,
                    gwPlaats: dtl.gwPlaats,
                    gwPostcode: dtl.gwPostcode,
                    gwStraat1: dtl.gwStraat1,
                    gwStraat2: dtl.gwStraat2,
                    gwTelefoon: dtl.gwTelefoon,
                    gwVoornaam: dtl.gwVoornaam,
                    tptAchternaam: dtl.tptAchternaam,
                    tptEmail: dtl.tptEmail,
                    tptFirmaNaam: dtl.tptFirmaNaam,
                    tptKleineWervenPartijType: dtl.tptKleineWervenPartijType,
                    tptPlaats: dtl.tptPlaats,
                    tptPostcode: dtl.tptPostcode,
                    tptStraat1: dtl.tptStraat1,
                    tptStraat2: dtl.tptStraat2,
                    tptTelefoon: dtl.tptTelefoon,
                    tptVoornaam: dtl.tptVoornaam,
                    uploadedIDs: []
                });
            }
            _this.isGrondWerkerDisabled();
            _this.isTranspoteurWerkerDisabled();
        });
    };
    gwKwEditComponent.prototype.send = function () {
        var _this = this;
        this.terugVisible = false;
        this.waitingMessageVisible = true;
        this.volForm.patchValue({ KleineWervenMeldingId: this.kwID });
        this.httpKW.Verklaring(this.volForm.value).toPromise()
            .then(function () {
            _this.terugVisible = true;
            _this.waitingMessageVisible = false;
            _this.showSuccesToast("De kleine ontgraving verklaring is aangemaakt");
            _this.router.navigate(["/kleinewerven-detail", _this.kwID]);
        })
            .catch(function () {
            _this.terugVisible = true;
            _this.waitingMessageVisible = false;
            _this.showErrorToast("Probleem bij het aanmaken van de kleine ontgraving verklaring");
        });
    };
    gwKwEditComponent.prototype.goBack = function () {
        this.location.back();
    };
    // sendData files
    gwKwEditComponent.prototype.save = function () {
        this.uploadStatus = "upload";
    };
    gwKwEditComponent.prototype.sendData = function (fileIDs) {
        if (fileIDs != null) {
            this.uploadedIDs = fileIDs.slice();
            this.kwForm.patchValue({ uploadedIDs: this.uploadedIDs });
        }
        //if (!this.afsluitenFormValues) this.afsluitenFormValues = this.afsluitenRedenInit();
        //let tvFormValues: sgsTvJoinedData = { ...this.getTvFormValues(), ...this.afsluitenFormValues, ...this.evaluatieFormValues };
        //this.httpTv.sgsSaveTVJoinedData(tvFormValues).toPromise().then((docId: any) => {
        //    console.log(docId, "docId");
        //    this.showSuccesToast("De gegevens werden opgeslagen");
        //    this.router.navigate(["/gw-tv-grid"]);
        //})
        //    .catch(error => {
        //        this.handleError(error);
        //        console.log(error, "error");
        //        if (this.uploadedIDs.length > 0) {
        //            this.uploadStatus = "clean";
        //        }
        //    });
    };
    // Email verznding handler
    gwKwEditComponent.prototype.mailOntvangstVerklaring = function () {
        var _this = this;
        var klantContactEmail = this.kwForm.controls.klantContactEmail.value;
        if (this.isNullOrWhitespace(klantContactEmail))
            return;
        this.bbrRepositoryService.SendLegeOntvangstVerklaringMail(this.kw.kleineWervenMeldingID, "be.grondwijzer@sgs.com").toPromise()
            .then(function () {
            _this.showSuccesToast("De ontvangstverklaring is verstuurd naar " + klantContactEmail);
        })
            .catch(function () {
            _this.showErrorToast("Probleem bij het versturen van de mail");
        });
    };
    gwKwEditComponent.prototype.ontvangstVerklaringOnlineInvullen = function () {
        this.router.navigate(["/bodembeheerrapport-online", this.kw.kleineWervenMeldingID]);
    };
    gwKwEditComponent.prototype.ontvangstVerklaringOnlineBekijken = function () {
        this.router.navigate(["/bodembeheerrapport-online", this.kw.kleineWervenMeldingID]);
    };
    // geopunt
    gwKwEditComponent.prototype.toGeopuntBestemming = function () {
        var x = this.kwForm.controls.bestLX1.value;
        var y = this.kwForm.controls.bestLY1.value;
        var street = this.kwForm.controls.bestAdres1.value;
        var city = this.kwForm.controls.bestPlaats.value;
        var geopunt = new __WEBPACK_IMPORTED_MODULE_6__scripts_geopunt_scripts__["a" /* GeopuntScripts */](this.sanitizer);
        var url = geopunt.getGeopuntUrl(x, y, street, city);
        window.open(url);
    };
    gwKwEditComponent.prototype.toGeopuntHerkomst = function () {
        var x = this.kwForm.controls.herkLX1.value;
        var y = this.kwForm.controls.herkLY1.value;
        var street = this.kwForm.controls.herkAdres1.value;
        var city = this.kwForm.controls.herkPlaats.value;
        var geopunt = new __WEBPACK_IMPORTED_MODULE_6__scripts_geopunt_scripts__["a" /* GeopuntScripts */](this.sanitizer);
        var url = geopunt.getGeopuntUrl(x, y, street, city);
        window.open(url);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("fileUploader"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_12__file_uploader_file_uploader_component__["a" /* FileUploaderComponent */])
    ], gwKwEditComponent.prototype, "fileUploader", void 0);
    gwKwEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "gw-kw-edit",
            template: __webpack_require__(655),
            styles: [__webpack_require__(656)],
            providers: [__WEBPACK_IMPORTED_MODULE_13__angular_common__["DatePipe"]]
        })
        /** kleinewerven-indienen component*/
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__services_http_bbr_service__["a" /* HttpBBRService */],
            __WEBPACK_IMPORTED_MODULE_11__services_http_file_service__["a" /* HttpFileService */],
            __WEBPACK_IMPORTED_MODULE_9__services_http_kleinewerven_service__["a" /* HttpKleineWervenService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["DomSanitizer"],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["ToastrService"],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_datepicker__["a" /* BsLocaleService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_13__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_13__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]])
    ], gwKwEditComponent);
    return gwKwEditComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__["b" /* GeneralScripts */]));



/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwPuinLmrpEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_bbr_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scripts_appLabels__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_datepicker__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_http_puin_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_http_tv_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_authentication_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__puin_lmrp_indienen_puin_technisch_verslag_data_puin_technisch_verslag_data_component__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__gw_documents_gw_documents_component__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__gw_email_historiek_grid_gw_email_historiek_grid_component__ = __webpack_require__(614);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var gwPuinLmrpEditComponent = /** @class */ (function (_super) {
    __extends(gwPuinLmrpEditComponent, _super);
    function gwPuinLmrpEditComponent(httpBBR, httpPuin, httpTv, fb, toastr, router, localeService, route, authenticationService) {
        var _this = _super.call(this, toastr) || this;
        _this.httpBBR = httpBBR;
        _this.httpPuin = httpPuin;
        _this.httpTv = httpTv;
        _this.fb = fb;
        _this.toastr = toastr;
        _this.router = router;
        _this.localeService = localeService;
        _this.route = route;
        _this.authenticationService = authenticationService;
        _this.appLabels = __WEBPACK_IMPORTED_MODULE_6__scripts_appLabels__["a" /* appLabels */];
        _this.title = "";
        _this.klantemailValidationMessage = "";
        _this.bestemailValidationMessage = "";
        _this.bestemmingValidationMessage = "";
        _this.goedgekeurdValidationMessage = "";
        // upload documents
        _this.uploadedIDs = [];
        _this.uploadStatus = "selection";
        // gw-Documents
        _this.gwDocumentType = __WEBPACK_IMPORTED_MODULE_13__gw_documents_gw_documents_component__["a" /* DocumentTypes */].AanvraagLRMP;
        _this.canSendNewEmail = true;
        _this.emailHistoriekType = __WEBPACK_IMPORTED_MODULE_14__gw_email_historiek_grid_gw_email_historiek_grid_component__["a" /* EmailHistoriekTypes */].gwPuinEdit;
        _this.msgOpmerkingen = "750 resterend";
        return _this;
    }
    gwPuinLmrpEditComponent.prototype.ngOnInit = function () {
        if (this.route.snapshot.params["id"]) {
            this.puinId = this.route.snapshot.params["id"];
            this.loadData(this.route.snapshot.params["id"]);
        }
        this.localeService.use("bootstrap-locale-nlbe");
        this.loadDropdowns();
        //  const snapshot = this.route.snapshot;
        //if (snapshot.params["IndieningsTypeId"]) this.indieningsTypeId = snapshot.params["IndieningsTypeId"] as PuinAanvragenTypes;
        //if (snapshot.params["BestaandeBestemmingId"]) this.bestaandeBestemmingId = +snapshot.params["BestaandeBestemmingId"];
        // Needed configuration for the bsDatepicker to accept dd/MM/yyyy formatting
        //if (this.indieningsTypeId === PuinAanvragenTypes.NieuweLocatie || this.indieningsTypeId === PuinAanvragenTypes.BestaandeLocatie) {
        //    this.showAddRemoveOptionForTechnischVerslagBlock = (this.authenticationService.userType === UserTypes.Top);
        //}
        this.puinForm = this.fb.group({
            //TypeID: [this.indieningsTypeId],
            //ImmediateRequest: [false],
            klantContactAchterNaam: ["", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(50)]],
            klantContactVoorNaam: ["", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(50)]],
            klantContactTelefoon: ["", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(50)]],
            klantContactEmail: ["", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(50)]],
            klantKenmerk: ["", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(50)]],
            startDatumAfvoerPuin: ["", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            klantOpmerkingen: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(750)],
            // id: [this.bestaandeBestemmingId],
            eigenaar: ["", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(50)]],
            adres1: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(100)],
            adres2: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(100)],
            postcode: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(10)],
            plaats: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(50)],
            contactPersoon: ["", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(50)]],
            telefoon: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(50)],
            email: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(50)],
            afzetReferentie: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(50)],
            afzetAdres1: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(100)],
            afzetAdres2: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(100)],
            afzetPostcode: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(10)],
            afzetPlaats: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(50)],
            brekerCertificaatNummer: ["", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(50)]],
            // new fields
            uitspraakAbsest: [""],
            check_uitspraak_absest: [""],
            uitspraatStorendeStoffen: [""],
            check_uitspraat_storende_stoffen: [""],
            opmerkingen: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(750)],
            statusID: [""],
            uploadedIDs: [],
        });
        this.title = "gecertificeerde producent van gerecycleerde granulaten";
        this.initialiseValueChangeHandlers();
        //this.loadContactInfo();
        //if (this.bestaandeBestemmingId > 0) {
        //    this.loadBestemmingInfo();
        //}
    };
    // validations and errors
    gwPuinLmrpEditComponent.prototype.initialiseValueChangeHandlers = function () {
        var _this = this;
        var opmElement = this.puinForm.get("KlantOpmerkingen");
        if (opmElement) {
            opmElement.valueChanges.subscribe(function (value) { return _this.msgOpmerkingen = (750 - String(opmElement.value).length) + " resterend"; });
        }
        this.canSendNewEmail = (this.puinForm.get("statusID").value === "") ? true : false; // to test when get value from backend if required?
        this.puinForm.get("statusID").valueChanges.debounceTime(1000).subscribe(function (val) {
            _this.canSendNewEmail = (val !== "4") ? true : false;
        });
        this.puinForm.valueChanges.debounceTime(1000).subscribe(function (val) {
            if (Number(val.statusID) === 4) {
                var absetMessage = (val.check_uitspraak_absest !== 1) ? "Uitspraak absest" : null;
                var stoffenMessage = (val.check_uitspraat_storende_stoffen !== 1) ? "itspraak storende stoffen" : null;
                _this.goedgekeurdValidationMessage = (absetMessage !== null || stoffenMessage) ? " U moet een positive besluit invullen voor" + (absetMessage || stoffenMessage) : "";
                console.log(_this.goedgekeurdValidationMessage, " this.goedgekeurdValidationMessage");
            }
        });
    };
    gwPuinLmrpEditComponent.prototype.onUitspraakAbsestSelected = function (value) {
        this.puinForm.patchValue({
            uitspraakAbsest: value,
        });
    };
    gwPuinLmrpEditComponent.prototype.onUitspraatStorendeStoffenSelected = function (value) {
        this.puinForm.patchValue({
            uitspraatStorendeStoffen: value,
        });
    };
    // load data
    gwPuinLmrpEditComponent.prototype.loadDropdowns = function () {
        var _this = this;
        this.httpTv.StatusDefinitionList(false).toPromise().
            then(function (lst) {
            _this.statusListItems = lst.slice();
        });
    };
    gwPuinLmrpEditComponent.prototype.loadData = function (id) {
    };
    // save data
    gwPuinLmrpEditComponent.prototype.save = function () {
        this.uploadStatus = "upload";
    };
    gwPuinLmrpEditComponent.prototype.sendData = function (fileIDs) {
        if (fileIDs != null) {
            this.uploadedIDs = fileIDs.slice();
            this.puinForm.patchValue({ uploadedIDs: this.uploadedIDs });
        }
        //if (!this.afsluitenFormValues) this.afsluitenFormValues = this.afsluitenRedenInit();
        //let tvFormValues: sgsTvJoinedData = { ...this.getTvFormValues(), ...this.afsluitenFormValues, ...this.evaluatieFormValues };
        //this.httpTv.sgsSaveTVJoinedData(tvFormValues).toPromise().then((docId: any) => {
        //    console.log(docId, "docId");
        //    this.showSuccesToast("De gegevens werden opgeslagen");
        //    this.router.navigate(["/gw-tv-grid"]);
        //})
        //    .catch(error => {
        //        this.handleError(error);
        //        console.log(error, "error");
        //        if (this.uploadedIDs.length > 0) {
        //            this.uploadStatus = "clean";
        //        }
        //    });
    };
    gwPuinLmrpEditComponent.prototype.sendNewEmail = function () {
        this.router.navigate(['gw/email', this.emailHistoriekType, this.puinId]);
    };
    //isAfbraakBestemmingVisible() {
    //    return (this.indieningsTypeId === PuinAanvragenTypes.MobieleBrekerOpDeWerf) ? false : true;
    //}
    gwPuinLmrpEditComponent.prototype.allIsValid = function () {
        var bestemming = this.puinForm.controls.Bestemming;
        var bln1 = bestemming.valid;
        var bln2 = this.isKlantSectionValid();
        var bln3 = this.isValid(bestemming.controls.brekerCertificaatNummer);
        var bln4 = this.isValid(bestemming.controls.eigenaar);
        var bln5 = this.isValid(bestemming.controls.contactPersoon);
        var bln6 = this.isValid(bestemming.controls.email);
        var bln7 = this.bestemailValidationMessage === "";
        // var bln8 = this.isBestemmingLocationValid()
        var bln9 = this.isBestEmailTelValid();
        var bln10 = this.puinForm.controls.lockMultiSave.valid;
        return bestemming.valid
            && this.isKlantSectionValid()
            && this.isValid(bestemming.controls.brekerCertificaatNummer)
            && this.isValid(bestemming.controls.eigenaar)
            && this.isValid(bestemming.controls.contactPersoon)
            && this.isValid(bestemming.controls.email)
            && this.bestemailValidationMessage === ""
            //  && this.isBestemmingLocationValid()
            && this.isBestEmailTelValid()
            && this.puinForm.controls.lockMultiSave.valid;
    };
    //isBestemmingLocationValid(): boolean {
    //    if (this.indieningsTypeId == PuinAanvragenTypes.MobieleBrekerOpDeWerf) {
    //        this.clearBestemmingLocationErrors();
    //        this.bestemmingValidationMessage = "";
    //        return true;
    //    }
    //    const bestemming = this.puinForm.controls.Bestemming as FormGroup;
    //    if (!this.isNullOrWhitespace(bestemming.controls.afzetAdres1.value)
    //        && !this.isNullOrWhitespace(bestemming.controls.afzetPostcode.value)
    //        && !this.isNullOrWhitespace(bestemming.controls.afzetPlaats.value)) {
    //        this.clearBestemmingLocationErrors();
    //        this.bestemmingValidationMessage = "";
    //        return true;
    //    }
    //    this.bestemmingValidationMessage = "- Lokatie waar het puin wordt gebroken is nog onvolledig";
    //    this.setBestemmingLocationErrors();
    //    return false;
    //}
    gwPuinLmrpEditComponent.prototype.clearBestemmingLocationErrors = function () {
        var bestemming = this.puinForm.controls.Bestemming;
        bestemming.controls.afzetAdres1.setErrors(null);
        bestemming.controls.afzetPostcode.setErrors(null);
        bestemming.controls.afzetPlaats.setErrors(null);
    };
    gwPuinLmrpEditComponent.prototype.setBestemmingLocationErrors = function () {
        var bestemming = this.puinForm.controls.Bestemming;
        this.setMandatoryError(bestemming.controls.afzetAdres1);
        this.setMandatoryError(bestemming.controls.afzetPostcode);
        this.setMandatoryError(bestemming.controls.afzetPlaats);
    };
    gwPuinLmrpEditComponent.prototype.setMandatoryError = function (control) {
        control.setErrors({ required: true, message: "Verplicht veld" });
    };
    gwPuinLmrpEditComponent.prototype.isKlantSectionValid = function () {
        if (this.technischVerslagData != undefined && !this.technischVerslagData.isValid())
            return false;
        return this.puinForm.controls.KlantContactAchterNaam.valid
            && this.puinForm.controls.KlantContactVoorNaam.valid
            && this.puinForm.controls.KlantContactTelefoon.valid
            && this.puinForm.controls.KlantContactEmail.valid
            && this.klantemailValidationMessage === ""
            && this.puinForm.controls.KlantKenmerk.valid
            && this.puinForm.controls.StartDatumAfvoerPuin.valid;
    };
    gwPuinLmrpEditComponent.prototype.isValid = function (control) {
        return control.valid;
    };
    gwPuinLmrpEditComponent.prototype.isBestEmailTelValid = function () {
        var bestemming = this.puinForm.controls.Bestemming;
        var bestTel = bestemming.controls.telefoon.value;
        var bestEmail = bestemming.controls.email.value;
        return (bestEmail != null && bestEmail !== undefined && bestTel != null && bestTel !== undefined && bestEmail + bestTel !== "");
    };
    gwPuinLmrpEditComponent.prototype.indienen = function () {
        var _this = this;
        this.puinForm.controls.lockMultiSave.setValue(true); // this will prevent multiple save clicks
        this.httpPuin.insert(this.puinForm.value)
            .then(function (puinId) {
            _this.showSuccesToast("De gegevens werden opgeslagen als nieuwe LMRP puin aanvraag");
            _this.router.navigate(["/puin-lmrp-status"]);
        })
            .catch(function (error) {
            _this.handleError(error);
            if (_this.puinForm.controls.FileUploadIDs.value.length > 0) {
                _this.uploadStatus = "clean";
            }
            _this.puinForm.controls.lockMultiSave.setValue(false);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_11__puin_lmrp_indienen_puin_technisch_verslag_data_puin_technisch_verslag_data_component__["a" /* PuinTechnischVerslagDataComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11__puin_lmrp_indienen_puin_technisch_verslag_data_puin_technisch_verslag_data_component__["a" /* PuinTechnischVerslagDataComponent */])
    ], gwPuinLmrpEditComponent.prototype, "technischVerslagData", void 0);
    gwPuinLmrpEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "gw-puin-lmrp-edit",
            template: __webpack_require__(658),
            styles: [__webpack_require__(659)],
            providers: [__WEBPACK_IMPORTED_MODULE_12__angular_common__["DatePipe"]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_http_bbr_service__["a" /* HttpBBRService */],
            __WEBPACK_IMPORTED_MODULE_8__services_http_puin_service__["a" /* HttpPuinService */],
            __WEBPACK_IMPORTED_MODULE_9__services_http_tv_service__["a" /* HttpTVService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["ToastrService"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_datepicker__["a" /* BsLocaleService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_10__services_authentication_service__["a" /* AuthenticationService */]])
    ], gwPuinLmrpEditComponent);
    return gwPuinLmrpEditComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__["b" /* GeneralScripts */]));



/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GwEditRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_common_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_GW_gw_dossierbeheerder_edit_gw_dossierbeheerder_edit_component__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_GW_gw_gtm_edit_gw_gtm_edit_component__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_GW_gw_klant_edit_gw_klant_edit_component__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_chronos__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_locale__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_GW_gw_tv_edit_gw_tv_edit_component__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_GW_gw_email_gw_email_component__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_GW_gw_gvt_edit_gw_gvt_edit_component__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_GW_gw_export_gw_export_component__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_GW_gw_kw_edit_gw_kw_edit_component__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_GW_gw_puin_lmrp_edit_gw_puin_lmrp_edit_component__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_services_http_mail_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_services_event_listener_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_authentication_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_loading_animation_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_http_puin_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_http_tvzone_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_http_tv_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_http_kleinewerven_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_http_klant_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_http_gvt_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_http_gtm_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_http_file_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_http_dossier_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_http_bbr_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_http_interceptor_service__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Customer Related
// GW Related





Object(__WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_chronos__["a" /* defineLocale */])("bootstrap-locale-nlbe", __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_locale__["a" /* nlBeLocale */]);





















var routes = [
    { path: "klant-edit/:id", canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_authentication_service__["a" /* AuthenticationService */]], component: __WEBPACK_IMPORTED_MODULE_6__components_GW_gw_klant_edit_gw_klant_edit_component__["a" /* gwKlantEditComponent */], data: { state: "gw-klant-edit/" } },
    { path: "dossierbeheerder-edit/:id", canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_authentication_service__["a" /* AuthenticationService */]], component: __WEBPACK_IMPORTED_MODULE_4__components_GW_gw_dossierbeheerder_edit_gw_dossierbeheerder_edit_component__["a" /* gwDossierbeheerderEditComponent */], data: { state: "dossierbeheerder-edit/" } },
    { path: "gtm-edit/:id", canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_authentication_service__["a" /* AuthenticationService */]], component: __WEBPACK_IMPORTED_MODULE_5__components_GW_gw_gtm_edit_gw_gtm_edit_component__["a" /* gwGtmEditComponent */], data: { state: "gtm-edit/" } },
    { path: "tv-edit/:id", canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_authentication_service__["a" /* AuthenticationService */]], component: __WEBPACK_IMPORTED_MODULE_9__components_GW_gw_tv_edit_gw_tv_edit_component__["a" /* gwTvEditComponent */], data: { state: "tv-edit/" } },
    { path: "email/:action/:type/:id/:mailId", canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_authentication_service__["a" /* AuthenticationService */]], component: __WEBPACK_IMPORTED_MODULE_10__components_GW_gw_email_gw_email_component__["a" /* gwEmailComponent */], data: { state: "email/" } },
    { path: "email/:action/:type/:id/:mailId/:mailFormatType", canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_authentication_service__["a" /* AuthenticationService */]], component: __WEBPACK_IMPORTED_MODULE_10__components_GW_gw_email_gw_email_component__["a" /* gwEmailComponent */], data: { state: "email/" } },
    { path: "gvt-edit/:id", canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_authentication_service__["a" /* AuthenticationService */]], component: __WEBPACK_IMPORTED_MODULE_11__components_GW_gw_gvt_edit_gw_gvt_edit_component__["a" /* gwGvtEditComponent */], data: { state: "gvt-edit/" } },
    { path: "kw-edit/:id", canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_authentication_service__["a" /* AuthenticationService */]], component: __WEBPACK_IMPORTED_MODULE_13__components_GW_gw_kw_edit_gw_kw_edit_component__["a" /* gwKwEditComponent */], data: { state: "kw-edit/" } },
    { path: "puin-lmrp-edit/:id", canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_authentication_service__["a" /* AuthenticationService */]], component: __WEBPACK_IMPORTED_MODULE_14__components_GW_gw_puin_lmrp_edit_gw_puin_lmrp_edit_component__["a" /* gwPuinLmrpEditComponent */], data: { state: "gtm-edit/" } },
    { path: "export", canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_authentication_service__["a" /* AuthenticationService */]], component: __WEBPACK_IMPORTED_MODULE_12__components_GW_gw_export_gw_export_component__["a" /* gwExportComponent */], data: { state: "export/" } },
];
var GwEditRoutingModule = /** @class */ (function () {
    function GwEditRoutingModule() {
    }
    GwEditRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["HTTP_INTERCEPTORS"], useClass: __WEBPACK_IMPORTED_MODULE_29__services_http_interceptor_service__["a" /* HttpInterceptorService */], multi: true },
                __WEBPACK_IMPORTED_MODULE_17__services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_28__services_http_bbr_service__["a" /* HttpBBRService */],
                __WEBPACK_IMPORTED_MODULE_27__services_http_dossier_service__["a" /* HttpDossierService */],
                __WEBPACK_IMPORTED_MODULE_26__services_http_file_service__["a" /* HttpFileService */],
                __WEBPACK_IMPORTED_MODULE_25__services_http_gtm_service__["a" /* HttpGTMService */],
                __WEBPACK_IMPORTED_MODULE_24__services_http_gvt_service__["a" /* HttpGVTService */],
                __WEBPACK_IMPORTED_MODULE_23__services_http_klant_service__["a" /* HttpKlantService */],
                __WEBPACK_IMPORTED_MODULE_22__services_http_kleinewerven_service__["a" /* HttpKleineWervenService */],
                __WEBPACK_IMPORTED_MODULE_21__services_http_tv_service__["a" /* HttpTVService */],
                __WEBPACK_IMPORTED_MODULE_20__services_http_tvzone_service__["a" /* HttpTVZoneService */],
                __WEBPACK_IMPORTED_MODULE_19__services_http_puin_service__["a" /* HttpPuinService */],
                __WEBPACK_IMPORTED_MODULE_15__components_services_http_mail_service__["a" /* HttpMailService */],
                __WEBPACK_IMPORTED_MODULE_18__services_loading_animation_service__["a" /* LoadingAnimationService */],
                __WEBPACK_IMPORTED_MODULE_16__components_services_event_listener_service__["a" /* EventListenerService */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]
            ]
        })
    ], GwEditRoutingModule);
    return GwEditRoutingModule;
}());



/***/ }),

/***/ 628:
/***/ (function(module, exports) {

module.exports = "<h4>Dossierbeheerders detail</h4>\r\n<form [formGroup]=\"dossierbeheerderForm\" class=\"container-fluid paddingTop10px\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">* Aanspreektitel</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" formControlName=\"aanspreektitel\" maxlength=\"50\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label for=\"txtVoornaam\" class=\"pull-right\">* Voornaam</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" id=\"txtVoornaam\" formControlName=\"voornaam\" maxlength=\"50\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label for=\"txtAchternaam\" class=\"pull-right\">* Achternaam</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" id=\"txtAchternaam\" formControlName=\"achternaam\" maxlength=\"50\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Telefoon</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"telefoon\" class=\"form-control\" maxlength=\"100\"></div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">E-mail</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"email\" class=\"form-control\" maxlength=\"100\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Login</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"login\" class=\"form-control\" maxlength=\"100\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Paswoord</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"paswoord\" class=\"form-control\" maxlength=\"100\"></div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">*Handtekening</label></div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-8 col-sm-offset-3\">\r\n            <label><input type=\"checkbox\" formControlName=\"administrator\" value=\"\">Administrator</label>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-8 col-sm-offset-3\">\r\n            <label><input type=\"checkbox\" formControlName=\"diensthoofd\" value=\"\">Diensthoofd</label>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-8 col-sm-offset-3\">\r\n            <label><input type=\"checkbox\" formControlName=\"contributor\" value=\"\">Contributor</label>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-8 col-sm-offset-3\">\r\n            <label><input type=\"checkbox\" formControlName=\"active\" value=\"\">Active</label>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</form>\r\n<div class=\"paddingBottom40px\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-8 col-sm-offset-3\">\r\n            <button type=\"button\" [disabled]=\"!dossierbeheerderForm.valid\" class=\"btn btn-default\" >Send Data</button>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(630);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".setTop {\r\n    align-items: flex-start;\r\n}\r\n\r\n.setArea {\r\n    border: 1px solid #DADADA;\r\n}\r\n\r\n\r\n.locationBorderBottom {\r\n    border-bottom: 1px solid #7faa2a;\r\n}\r\n\r\n\r\n.controlWidth {\r\n    width: 100%;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<div class=\"row\" *ngIf=\"sendingNewMail\">\r\n    <div class=\"col-sm-8 col-sm-offset-3\"><label> <a (click)=\"sendNewEmail()\"> Send new e-mail </a> </label></div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-sm-8 col-sm-offset-3\">\r\n        <div class=\"NgxTable\">\r\n            <ngx-datatable #table\r\n                           class=\"bootstrap\"\r\n                           (activate)=\"onActivate($event)\"\r\n                           [rows]=\"rows\"\r\n                           [columnMode]=\"'flex'\"\r\n                           [headerHeight]=\"25\"\r\n                           [footerHeight]=\"40\"\r\n                           [limit]=\"appLabels.tableViewRows\"\r\n                           [rowClass]=\"getRowClass\"\r\n                           [cssClasses]=\"appLabels.iconsCss\"\r\n                           [messages]=\"{totalMessage: appLabels.Total.toLowerCase(), emptyMessage: appLabels.NoDataToDisplay}\"\r\n                           [sorts]=\"[{prop:'datum', dir:'desc' }]\"\r\n                           [rowHeight]=\"'auto'\">\r\n\r\n                <ngx-datatable-column [flexGrow]=\"2\" name=\"datum\" headerClass=\"NgxHeader\">\r\n                    <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Datum</span></div>\r\n                    </ng-template>\r\n                    <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                        {{value | date:\"dd/MM/yyyy\"}}\r\n                    </ng-template>\r\n                </ngx-datatable-column>\r\n                <ngx-datatable-column [flexGrow]=\"3\" prop=\"subject\" headerClass=\"NgxHeader\">\r\n                    <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        <span (click)=\"sort()\" class=\"NgxFilterLabel\">Email</span>\r\n                    </ng-template>\r\n                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                        {{value}}\r\n                    </ng-template>\r\n                </ngx-datatable-column>\r\n\r\n                <ngx-datatable-column [flexGrow]=\"1\" prop=\"emailID\" headerClass=\"NgxHeader\">\r\n                    <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        <span (click)=\"sort()\" class=\"NgxFilterLabel\">Details</span>\r\n                    </ng-template>\r\n                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                        <img src=\"" + __webpack_require__(15) + "\" (click)=\"viewEmail(row['emailID'])\" />\r\n                    </ng-template>\r\n                </ngx-datatable-column>\r\n\r\n            </ngx-datatable>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(633);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".setTop {\r\n    align-items: flex-start;\r\n}\r\n\r\n.setArea {\r\n    border: 1px solid #DADADA;\r\n}\r\n\r\n\r\n.locationBorderBottom {\r\n    border-bottom: 1px solid #7faa2a;\r\n}\r\n\r\n\r\n.controlWidth {\r\n    width: 100%;\r\n}\r\n\r\n.emailVersturen:hover {\r\n    text-decoration: underline;\r\n    color: #337ab7;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 634:
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"ShowDocuments === true\">\r\n    <div class=\"row\">\r\n        <h5 class=\"col-sm-11\">Bestanden</h5>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"isLoading === true\">\r\n        <div class=\"col-sm-8 col-sm-offset-3\">\r\n            is loading ...\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-8 col-sm-offset-3\">\r\n            <div *ngFor=\"let file of userFiles;\">\r\n                <a [routerLink]=\"\" *ngIf=\"file.fileName.indexOf('.msg') <= 0\" (click)=\"showFileWithId(file.id)\" class=\"pdfLink\">\r\n                    <label>{{file.fileName}}</label>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <gw-file-uploader [fileType]=\"uploadFileType\"\r\n                      [status]=\"uploadStatus\"\r\n                      (uploaded)=\"filesUploaded($event)\"\r\n                      (inQueue)=\"queueCountChanged($event)\">\r\n    </gw-file-uploader>\r\n    <div class=\"row\" *ngIf=\"!parentUploading\">\r\n        <div class=\"col-sm-8 col-sm-offset-3\">\r\n            <button type=\"button\" (click)=\"upload()\" [disabled]=\"uploadQueueCount == 0\" class=\"btn btn-default\">UPLOAD</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"ShowMails === true\">\r\n    <div class=\"row\">\r\n        <h5 class=\"col-sm-11\">E-mail Historiek</h5>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"isLoading === true\">\r\n        <div class=\"col-sm-8 col-sm-offset-3\">\r\n            is loading ...\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-8 col-sm-offset-3\">\r\n            <div *ngFor=\"let file of userFiles;\">\r\n                <a [routerLink]=\"\" *ngIf=\"file.fileName.indexOf('.msg') > 0\" (click)=\"showFileWithId(file.id)\" class=\"pdfLink\">\r\n                    <label>{{file.fileName}}</label>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <br />\r\n    <div>\r\n        <gw-email-historiek-grid [id]=\"id\"\r\n                                 [emailHistoriekType]=\"emailHistoriekType\"\r\n                                 [canSendNewEmail]=\"sendingNewEmail\">\r\n        </gw-email-historiek-grid>\r\n    </div>\r\n</div>\r\n\r\n\r\n";

/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(636);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".setTop {\r\n    align-items: flex-start;\r\n}\r\n\r\n.setArea {\r\n    border: 1px solid #DADADA;\r\n}\r\n\r\n\r\n.locationBorderBottom {\r\n    border-bottom: 1px solid #7faa2a;\r\n}\r\n\r\n\r\n.controlWidth {\r\n    width: 100%;\r\n}\r\n\r\n.emailVersturen:hover {\r\n    text-decoration: underline;\r\n    color: #337ab7;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 637:
/***/ (function(module, exports) {

module.exports = "<h4>GTM details</h4>\r\n<form [formGroup]=\"gtmForm\" class=\"container-fluid paddingTop10px\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-11\"><h5>Grondtransportmelding</h5></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Nummer</label></div>\r\n        <div class=\"col-sm-8\"><label>{{gtmData?.grondtransportmeldingId}}</label></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Klant</label></div>\r\n        <div class=\"col-sm-8\"> <label>{{gtmData?.organisatie}} </label> <a *ngIf=\"gtmData?.klantId\" [routerLink]=\"['/gw/klant-edit', 1]\" routerLinkActive=\"active-link\">({{gtmData?.klantId}})</a></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"></div>\r\n        <div class=\"col-sm-4\"> <label>Tel:{{gtmData?.telefoon}}</label> </div>\r\n        <div class=\"col-sm-4\"> <label>Fax:{{gtmData?.fax}}</label></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <h6 class=\"col-sm-3 pull-right\">Contactpersoon:</h6>\r\n        <!--<div class=\"col-sm-3\"><label class=\"pull-right\">Contactpersoon:</label></div>-->\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"gtmForm.get('klantContactAchternaam').errors\">* Achternaam</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" formControlName=\"klantContactAchternaam\" maxlength=\"50\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"gtmForm.get('klantContactVoornaam').errors\">* Voornaam</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" formControlName=\"klantContactVoornaam\" maxlength=\"50\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"gtmForm.get('klantContactTelefoon').errors\">* Telefoon </label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" formControlName=\"klantContactTelefoon\" maxlength=\"50\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"gtmForm.get('klantContactEmail').errors\">* Email </label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" formControlName=\"klantContactEmail\" maxlength=\"50\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"gtmForm.get('klantKenmerk').errors\">* Referentie</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" formControlName=\"klantKenmerk\" maxlength=\"50\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n\r\n    <!-- section 1 Herkomst -->\r\n\r\n    <div class=\"row\">\r\n        <h5 class=\"col-sm-11\">Herkomst uitgegraven bodem</h5>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Nummer Technisch Verslag </label></div>\r\n        <div class=\"col-sm-8\"><a [routerLink]=\"['/gw/tv-edit', 1]\" routerLinkActive=\"active-link\">({{gtmData?.technischVerslagId}})</a></div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Titel Technisch Verslag</label></div>\r\n        <div class=\"col-sm-8\"><label>{{gtmData?.tvTitelTechnischVerslag}}</label></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Straat&nbsp;onderzoekslocatie r</label></div>\r\n        <div class=\"col-sm-8\"><label>{{gtmData?.tvStraatOnderzoeksLocatie}}</label></div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Gemeente onderzoekslocatie</label></div>\r\n        <div class=\"col-sm-8\"><label>{{gtmData?.tvGemeenteOnderzoeksLocatie}}</label></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"gtmForm.get('postcode').errors\">* Straat en nr</label></div>\r\n        <div class=\"col-sm-8\"><input DottedBorderBelow formControlName=\"adres\" type=\"text\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"gtmForm.get('postcode').errors\">* Postcode</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"postcode\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"gtmForm.get('plaats').errors\">* Gemeente</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"plaats\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">* Lambert-coördinaten centraal punt</label></div>\r\n        <div class=\"col-sm-2\">\r\n            <div class=\"row\">\r\n                <label for=\"LX\" class=\"col-sm-2\" [class.validationHint]=\"gtmForm.get('inrichtingLX').errors\">X </label>\r\n                <div class=\"col-sm-10\">\r\n                    <input type=\"text\" DottedBorderBelow formControlName=\"inrichtingLX\" class=\"form-control\" AllowOnlyNumbers tooltip=\"De X-coördinaat moet tussen 20000 en 280000 liggen\" placement=\"top\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n            <div class=\"row\">\r\n                <label for=\"LY\" class=\"col-sm-2\" [class.validationHint]=\"gtmForm.get('inrichtingLY').errors\">Y </label>\r\n                <div class=\"col-sm-10\">\r\n                    <input type=\"text\" DottedBorderBelow formControlName=\"inrichtingLY\" class=\"form-control\" AllowOnlyNumbers tooltip=\"De Y-coördinaat moet tussen 150000 en 250000 liggen\" placement=\"top\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- add link and text to LX and LY -->\r\n\r\n    <div class=\"row\">\r\n        <h5 class=\"col-sm-11\">Deelvolumes</h5>\r\n    </div>\r\n    <div>\r\n        <div class=\"row setTop paddingTop10px\">\r\n            <div class=\"col-sm-3\"><label class=\"pull-right\">Onderzochte deelvolumes</label></div>\r\n\r\n            <div class=\"col-sm-8\">\r\n                <table class=\"GWTable\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th style=\"width:20px\">Nr.</th>\r\n                            <th>Beschrijving</th>\r\n                            <th style=\"text-align: center\">(X)</th>\r\n                            <th style=\"text-align: center\">(Y)</th>\r\n                            <th style=\"text-align: center\">(Z)</th>\r\n                            <th>Geplande hoeveelheid(m³)</th>\r\n                            <th>Gepland gebruik (m³)</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody formArrayName=\"gtmVolumes\">\r\n                        <tr *ngFor=\"let z of gtmVolumes.controls; let i = index;\" [formGroupName]=\"i\">\r\n                            <td><input type=\"hidden\" value=\"{{z.get('tvZoneId').value}}\" />{{z.controls[\"tvZoneNr\"].value}}</td>\r\n                            <td><label class=\"pull-left\">{{z.get('beschrijving').value}}</label></td>\r\n                            <td style=\"text-align: center\">{{z.get('kgbuOmschrijving').value}}</td>\r\n                            <td style=\"text-align: center\">{{z.get('kgbiOmschrijving').value}}</td>\r\n                            <td style=\"text-align: center\">{{z.get('kgboOmschrijving').value}}</td>\r\n                            <td align='right'>{{z.get('hoeveelheid').value}}</td>\r\n                            <td>\r\n                                <input type=\"text\" class=\"form-control\" formControlName=\"werkelijkeHoeveelheid\" DottedBorderBelow AllowOnlyNumbers>\r\n                                <label class=\"validationHint\">Bent u zeker dat u meer wil opgeven dan {{z.get('werkelijkeHoeveelheid').value}}, nl. meer dan het beschikbare saldo</label>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n                <label class=\"pull-left\">Vul in deze tabel de hoeveelheid in van geplande gebruik op de nieuwe bestemming.</label>\r\n                <br />\r\n                <label class=\"pull-left\">Indien uit de gegevens ingevuld bij deze bestemmingsaanvraag, de locatie niet duidelijk genoeg is (bvb. geen huisnummer, Lambertcoördinaten en geen kadastrale gegevens), dan behoudt Grondwijzer het recht een aanvulplan te vragen om de afzetlocatie te verduidelijken.</label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Adding table hier and the input for werkelijkeHoeveelheid -->\r\n    <div class=\"row\">\r\n        <h5 class=\"col-sm-11\">Bestemming</h5>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Naam bedrijf</label></div>\r\n        <div class=\"col-sm-8\">\r\n            <select class=\"controlWidth\" DottedBorderBelow formControlName=\"topOrganisatie\">\r\n                <option value=\"-1\">get data</option>\r\n                <option value=\"0\">get data</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Straat en nr </label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"topStraat\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Postcode</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"topPostcode\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Gemeente</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"topGemeente\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Toepassing/Gebruike</label></div>\r\n        <div class=\"col-sm-8\">\r\n            <select class=\"controlWidth\" DottedBorderBelow formControlName=\"grondtransportmeldingGebruik\">\r\n                <option value=\"-1\">get data</option>\r\n                <option value=\"0\">get data</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\"> Verwachte datum aanvang transport</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"transportAanvangDatum\" class=\"form-control ng-trim-ignore\" tooltip=\"(bv. 31/1/2004)\" bsDatepicker placement=\"top left\" autocomplete=\"off\" [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\"> Verwachte datum&nbsp;einde transport</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"transportEindeDatum\" class=\"form-control ng-trim-ignore\" tooltip=\"(bv. 31/1/2004)\" bsDatepicker placement=\"top left\" autocomplete=\"off\" [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n    </div>\r\n\r\n    <div class=\"row setTop paddingTop10px\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Opmerking bij online VA</label></div>\r\n        <div class=\"col-sm-8\"><textarea formControlName=\"remarkVaOnline\" tooltip=\"Dit veld is automatisch ingevuld door de VA online\" placement=\"top\" rows=\"4\" cols=\"50\" maxlength=\"500\" class=\"form-control setArea\"></textarea></div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <h5 class=\"col-sm-11\">Tracering</h5>\r\n    </div>\r\n    <!-- Adding table hier -->\r\n\r\n    <div class=\"row\">\r\n        <h5 class=\"col-sm-11\">Extra</h5>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Beoordeling</label></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-8 col-sm-offset-3\">\r\n            <label><input type=\"checkbox\" formControlName=\"afgravingsplanOntvangen\" value=\"\"> Afgravingsplan - voorzover nodig - ontvangen</label>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-8 col-sm-offset-3\">\r\n            <label><input type=\"checkbox\" formControlName=\"verklaringAfnemerOntvangen\" value=\"\">  Verklaring van afnemer ontvangen</label>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-8 col-sm-offset-3\">\r\n            <label><input type=\"checkbox\" formControlName=\"gefactureerd\" value=\"\"> Gefactureerd</label>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row setTop paddingTop10px\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Interne opmerking</label></div>\r\n        <div class=\"col-sm-8\"><textarea formControlName=\"interneOpmerking\" rows=\"4\" cols=\"50\" maxlength=\"500\" class=\"form-control setArea\"></textarea></div>\r\n\r\n    </div>\r\n\r\n    <div [hidden]=\"gtmForm.valid\">\r\n        <div class=\"row setTop paddingTop10px\">\r\n            <div class=\"col-sm-8 col-sm-offset-3 validation\">\r\n                <div *ngIf=\"(gtmForm.get('klantContactAchternaam').touched || gtmForm.get('klantContactAchternaam').dirty) &&!gtmForm.get('klantContactAchternaam').valid\" [hidden]=\"!gtmForm.controls['klantContactAchternaam'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Achternaam is vereist.</label></div>\r\n                <div *ngIf=\"(gtmForm.get('klantContactVoornaam').touched || gtmForm.get('klantContactVoornaam').dirty) &&!gtmForm.get('klantContactVoornaam').valid\" [hidden]=\"!gtmForm.controls['klantContactVoornaam'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Voornaam is vereist.</label></div>\r\n                <div *ngIf=\"(gtmForm.get('klantContactTelefoon').touched || gtmForm.get('klantContactTelefoon').dirty) &&!gtmForm.get('klantContactTelefoon').valid\" [hidden]=\"!gtmForm.controls['klantContactTelefoon'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Telefoon is vereist.</label></div>\r\n                <div *ngIf=\"(gtmForm.get('klantKenmerk').touched || gtmForm.get('klantKenmerk').dirty) &&!gtmForm.get('klantKenmerk').valid\" [hidden]=\"!gtmForm.controls['klantKenmerk'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Referentie is vereist.</label></div>\r\n                <div *ngIf=\"(gtmForm.get('adres').touched || gtmForm.get('adres').dirty) &&!gtmForm.get('adres').valid\" [hidden]=\"!gtmForm.controls['adres'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Straat en nr is vereist.</label></div>\r\n                <div *ngIf=\"(gtmForm.get('postcode').touched || gtmForm.get('postcode').dirty) &&!gtmForm.get('postcode').valid\" [hidden]=\"!gtmForm.controls['postcode'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Postcode is vereist.</label></div>\r\n                <div *ngIf=\"(gtmForm.get('plaats').touched || gtmForm.get('plaats').dirty) &&!gtmForm.get('plaats').valid\" [hidden]=\"!gtmForm.controls['plaats'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Gemeente is vereist.</label></div>\r\n                <div *ngIf=\"(gtmForm.get('inrichtingLX').touched || gtmForm.get('inrichtingLX').dirty) && !gtmForm.get('inrichtingLX').valid\" [hidden]=\"!gtmForm.controls['inrichtingLX'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Lambert coördinaat X is vereist.</label></div>\r\n                <div *ngIf=\"(gtmForm.get('inrichtingLX').touched || gtmForm.get('inrichtingLX').dirty) && !gtmForm.get('inrichtingLX').valid\" [hidden]=\"!gtmForm.controls['inrichtingLX'].errors.min\" class=\"col-sm-8\"><label class=\"validation\">- Lambert coördinaat X dient min. 20000 te zijn.</label></div>\r\n                <div *ngIf=\"(gtmForm.get('inrichtingLX').touched || gtmForm.get('inrichtingLX').dirty) && !gtmForm.get('inrichtingLX').valid\" [hidden]=\"!gtmForm.controls['inrichtingLX'].errors.max\" class=\"col-sm-8\"><label class=\"validation\">- Lambert coördinaat X mag max. 280000 zijn.</label></div>\r\n                <div *ngIf=\"(gtmForm.get('inrichtingLY').touched || gtmForm.get('inrichtingLY').dirty) && !gtmForm.get('inrichtingLY').valid\" [hidden]=\"!gtmForm.controls['inrichtingLY'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Lambert coördinaat Y is vereist.</label></div>\r\n                <div *ngIf=\"(gtmForm.get('inrichtingLY').touched || gtmForm.get('inrichtingLY').dirty) && !gtmForm.get('inrichtingLY').valid\" [hidden]=\"!gtmForm.controls['inrichtingLY'].errors.min\" class=\"col-sm-8\"><label class=\"validation\">- Lambert coördinaat Y dient min. 150000 te zijn.</label></div>\r\n                <div *ngIf=\"(gtmForm.get('inrichtingLY').touched || gtmForm.get('inrichtingLY').dirty) && !gtmForm.get('inrichtingLY').valid\" [hidden]=\"!gtmForm.controls['inrichtingLY'].errors.max\" class=\"col-sm-8\"><label class=\"validation\">- Lambert coördinaat Y mag max. 250000 zijn.</label></div>\r\n                <div *ngIf=\"(gtmForm.get('klantContactEmail').touched || gtmForm.get('klantContactEmail').dirty) && !gtmForm.get('klantContactEmail').valid\" [hidden]=\"!gtmForm.controls['klantContactEmail'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">-Email  is vereist.</label></div>\r\n                <div *ngIf=\"(gtmForm.get('klantContactEmail').touched || gtmForm.get('klantContactEmail').dirty) && !gtmForm.get('klantContactEmail').valid\" [hidden]=\"!gtmForm.controls['klantContactEmail'].errors.pattern\" class=\"col-sm-8\"><label class=\"validation\">-Emailadres is niet geldig.</label></div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"paddingBottom40px\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-8 col-sm-offset-3\">\r\n                <button type=\"button\" [disabled]=\"!gtmForm.valid\" (click)=\"save()\" class=\"btn btn-default\">Send Data</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <gw-documents [id]=\"gtmId\"\r\n                  [documentType]=\"gwDocumentType\"\r\n                  [emailHistoriekType]=\"emailHistoriekType\"  \r\n                  [canSendNewEmail]=\"canSendNewEmail\"\r\n                  [status]=\"uploadStatus\"\r\n                  (uploadingFiles)=\"sendData($event)\">\r\n    </gw-documents>\r\n\r\n\r\n\r\n    <!--<gw-email-historiek-grid [id]=\"gtmId\"\r\n                             [emailType]=\"emailType\"\r\n                             [canSendNewEmail]=\"canSendNewEmail\"></gw-email-historiek-grid>-->\r\n\r\n</form>\r\n";

/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(639);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".setTop {\r\n    align-items: flex-start;\r\n}\r\n\r\n.setArea {\r\n    border: 1px solid #DADADA;\r\n}\r\n\r\n\r\n.locationBorderBottom {\r\n    border-bottom: 1px solid #7faa2a;\r\n}\r\n\r\n\r\n.controlWidth {\r\n    width: 100%;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 640:
/***/ (function(module, exports) {

module.exports = "<h4>Klanten overzicht</h4>\r\n<form [formGroup]=\"klantForm\" class=\"container-fluid paddingTop10px\">\r\n\r\n    <!-- Klant gegevens -->\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-11\"><h5>Klant Aanvrager Gegevens</h5></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label for=\"txtKlantNr\" class=\"pull-right\">Klantnummer</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" id=\"txtKlantNr\" formControlName=\"KlantNr\" maxlength=\"50\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Voornaam</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" formControlName=\"voornaam\" maxlength=\"50\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"klantForm.controls['achternaam']?.errors\">* Achternaam</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" formControlName=\"achternaam\" maxlength=\"50\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label for=\"ddlGeslacht\" class=\"pull-right\">Geslacht</label></div>\r\n        <div class=\"col-sm-8\">\r\n            <select id=\"ddlGeslacht\" class=\"controlWidth\" DottedBorderBelow formControlName=\"geslacht\">\r\n                <option value=\"m\">Man</option>\r\n                <option value=\"v\">Vrouw</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Functie</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" formControlName=\"functie\" maxlength=\"50\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Naam bedrijf/instelling </label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" formControlName=\"organisatie\" maxlength=\"50\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">BTW nummer (voor organisaties) </label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" formControlName=\"btwNummer\" maxlength=\"50\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Nr. identiteitskaart (voor particulieren) </label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" formControlName=\"idkaartNummer\" maxlength=\"50\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Lid bij koepel-organisatie</label></div>\r\n        <div class=\"col-sm-8\">\r\n            <select class=\"controlWidth\" DottedBorderBelow formControlName=\"beroepsorganisatieID\">\r\n                <option [value]=\"nullItem\"></option>\r\n                <option *ngFor=\"let o of BeroepsorganisatieListItems\" [value]=\"o.beroepsorganisatieID\">{{o.beroepsorganisatie}}</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Lidnummer koepel-organisatie </label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" formControlName=\"lidnummerBouwunie\" maxlength=\"20\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Lidnummer van Bouwunie is geldig </label></div>\r\n        <div class=\"col-sm-8\">\r\n            <select value=\"0\" class=\"controlWidth\" DottedBorderBelow formControlName=\"lidnummerBouwunieok\">\r\n                <option value=\"-1\">Ja</option>\r\n                <option value=\"0\">Nee</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Branche/hoedanigheid </label></div>\r\n        <div class=\"col-sm-8\">\r\n            <select class=\"controlWidth\" DottedBorderBelow formControlName=\"brancheID\">\r\n                <option [value]=\"nullItem\"></option>\r\n                <option *ngFor=\"let o of BrancheListItems\" [value]=\"o.brancheID\">{{o.branche}}</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row setTop paddingTop10px\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">EBDS Details<br>(Indien ingevuld verschijnt de EBSD in de lijst op het web)</label></div>\r\n        <div class=\"col-sm-8\"><textarea formControlName=\"ebsdDetails\" rows=\"4\" cols=\"50\" maxlength=\"1000\" class=\"form-control setArea\"></textarea></div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"klantForm.controls['lidNummerAannemer']?.errors\">Lidnummer van registratie als aannemer</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" formControlName=\"lidNummerAannemer\" AllowOnlyNumbers DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <h5 class=\"col-sm-11\">Reeds gebruikte email adressen</h5>\r\n    </div>\r\n    <div class=\"row setTop paddingTop10px\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">E-mails</label></div>\r\n        <div class=\"col-sm-8\"><textarea formControlName=\"usedEmail\" rows=\"4\" cols=\"50\" class=\"form-control setArea\"></textarea></div>\r\n\r\n    </div>\r\n\r\n    <!-- Address -->\r\n    <div class=\"row\">\r\n        <h5 class=\"col-sm-11\">Adres</h5>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"klantForm.controls['adres1']?.errors\">*  Straat en nr</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" formControlName=\"adres1\" DottedBorderBelow class=\"form-control\" maxlength=\"100\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Straat en nr (vervolg)</label></div>\r\n        <div class=\"col-sm-8\"><input DottedBorderBelow formControlName=\"adres2\" type=\"text\" class=\"form-control\" maxlength=\"100\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"klantForm.get('postcode').errors\">* Postcode</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"postcode\" class=\"form-control\" maxlength=\"10\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"klantForm.get('plaats').errors\">* Gemeente</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"plaats\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Land</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"land\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n\r\n\r\n    <!-- Facturatie-adres -->\r\n    <div class=\"row\">\r\n        <h5 class=\"col-sm-11\">Facturatie-adres (indien verschillend van vorig adres)</h5>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Straat en nr</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"factuurAdres1\" class=\"form-control\" maxlength=\"100\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Straat en nr (vervolg)</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"factuurAdres2\" class=\"form-control\" maxlength=\"100\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Postcode</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"factuurPostcode\" class=\"form-control\" maxlength=\"10\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Gemeente</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"factuurPlaats\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Land</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"factuurLand\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n\r\n    <!-- gegevens inrichting  -->\r\n\r\n    <div class=\"row\">\r\n        <h5 class=\"col-sm-11\"> Aanvullende gegevens inrichting</h5>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Straat en nr</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"inrichtingStraat\" class=\"form-control\" maxlength=\"100\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Straat en nr (vervolg)</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"inrichtingStraat2\" class=\"form-control\" maxlength=\"100\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Postcode</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"inrichtingPostcode\" class=\"form-control\" maxlength=\"10\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Gemeente</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"inrichtingGemeente\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Bestemmingstype ontvangende locatie</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"inrichtingBestemmingstype\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Kadastrale gegevens</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"inrichtingKadastraleGegevens\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Lambert-coördinaten centraal punt</label></div>\r\n        <div class=\"col-sm-2\">\r\n            <div class=\"row\">\r\n                <label for=\"LX\" class=\"col-sm-2\" [class.validationHint]=\"klantForm.get('inrichtingLX').errors\">X </label>\r\n                <div class=\"col-sm-10\">\r\n                    <input type=\"text\" DottedBorderBelow formControlName=\"inrichtingLX\" class=\"form-control\" AllowOnlyNumbers tooltip=\"De X-coördinaat moet tussen 20000 en 280000 liggen\" placement=\"top\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n            <div class=\"row\">\r\n                <label for=\"LY\" class=\"col-sm-2\" [class.validationHint]=\"klantForm.get('inrichtingLY').errors\">Y </label>\r\n                <div class=\"col-sm-10\">\r\n                    <input type=\"text\" DottedBorderBelow formControlName=\"inrichtingLY\" class=\"form-control\" AllowOnlyNumbers tooltip=\"De Y-coördinaat moet tussen 150000 en 250000 liggen\" placement=\"top\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-8 col-sm-offset-3\"><label>Als u de Lambert coördinaten niet kent kan u ze op de volgende website opzoeken:<a href=\"#\" (click)=\"$event.preventDefault();toGeopunt()\">www.geopunt.be</a></label></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Datum verleende milieuvergunning</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"inrichtingDatumMilieuvergunning\" class=\"form-control ng-trim-ignore\" tooltip=\"(bv. 31/1/2004)\" bsDatepicker placement=\"top left\" autocomplete=\"off\" [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Naam vergunningverlenende instantie</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"inrichtingVergunningverlenendeInstantie\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Datum bouwvergunning</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"inrichtingDatumBouwvergunning\" class=\"form-control ng-trim-ignore\" tooltip=\"(bv. 31/1/2004)\" bsDatepicker placement=\"top left\" autocomplete=\"off\" [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Capaciteit van de inrichting (m³)</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"number\" AllowOnlyNumbers DottedBorderBelow formControlName=\"inrichtingHoeveelheidGrond\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <h5 class=\"col-sm-11\">Gebruikersinformatie</h5>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Telefoon</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"telefoon\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Fax</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"fax\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"klantForm.get('email').errors\">* E-mail</label></div>\r\n        <div class=\"col-sm-3\"><input type=\"text\" DottedBorderBelow formControlName=\"email\" class=\"form-control\" maxlength=\"50\"></div>\r\n        <div class=\"col-sm-5\" *ngIf=\"klantForm.get('email').value && !klantForm.get('email').errors\">\r\n            <label class=\"pull-left\"><a (click)=\"sendPaswoordEmail()\"> Paswoord gegevens mailen</a></label>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"klantForm.get('login').errors || LoginValidationMessage != ''\">* Gebruikersnaam</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"login\" class=\"form-control\" maxlength=\"50\" [ngClass]=\"{'dotted-border-below-hint':LoginValidationMessage != ''}\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"klantForm.get('paswoord').errors\">* Paswoord</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"paswoord\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Status </label></div>\r\n        <div class=\"col-sm-8\">\r\n            <select class=\"controlWidth\" DottedBorderBelow formControlName=\"KlantStatusID\">\r\n                <option [value]=\"nullItem\"></option>\r\n                <option *ngFor=\"let o of KlantStatusListItems\" [value]=\"o.klantStatusID\">{{o.status}}</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-8 col-sm-offset-3\">\r\n            <label><input type=\"checkbox\" formControlName=\"isGwCustomer\" value=\"\">Is klant bij GW</label>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-8 col-sm-offset-3\">\r\n            <label><input type=\"checkbox\" formControlName=\"isVisibleForCustomers\" value=\"\">Is zichtbaar voor andere klanten</label>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"klantForm.get('facturatieStartDatum').errors\"> Startdatum facturatie :<br>(indien klant aangesloten bij andere organisatie</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"facturatieStartDatum\" class=\"form-control ng-trim-ignore\" tooltip=\"(bv. 31/01/2004)\" bsDatepicker placement=\"top left\" autocomplete=\"off\" [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-8 col-sm-offset-3\">\r\n            <label><input type=\"checkbox\" formControlName=\"gefactureerd\" value=\"\">  Gefactureerd</label>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <h5 class=\"col-sm-11\">Bewaren klantgegevens</h5>\r\n    </div>\r\n    <div [hidden]=\"isKlantFormValid()\">\r\n        <div class=\"row setTop paddingTop10px\">\r\n            <div class=\"col-sm-8 col-sm-offset-3 validation\">\r\n                <div *ngIf=\"(klantForm.get('achternaam').touched || klantForm.get('achternaam').dirty) &&!klantForm.get('achternaam').valid\" [hidden]=\"!klantForm.controls['achternaam'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Achternaam is vereist.</label></div>\r\n                <div *ngIf=\"(klantForm.get('lidNummerAannemer').touched || klantForm.get('lidNummerAannemer').dirty) && !klantForm.get('lidNummerAannemer').valid\" [hidden]=\"!klantForm.controls['lidNummerAannemer'].errors.min\" class=\"col-sm-8 validation\"><label class=\"validation\">-Lidnummer van registratie als aannemer dient min. 100000 te zijn.</label></div>\r\n                <div *ngIf=\"(klantForm.get('lidNummerAannemer').touched || klantForm.get('lidNummerAannemer').dirty) && !klantForm.get('lidNummerAannemer').valid\" [hidden]=\"!klantForm.controls['lidNummerAannemer'].errors.max\" class=\"col-sm-8 validation\"><label class=\"validation\">-Lidnummer van registratie als aannemer mag max. 999999 zijn.</label></div>\r\n                <div *ngIf=\"(klantForm.get('adres1').touched || klantForm.get('adres1').dirty) &&!klantForm.get('adres1').valid\" [hidden]=\"!klantForm.controls['adres1'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Straat en nr is vereist.</label></div>\r\n                <div *ngIf=\"(klantForm.get('postcode').touched || klantForm.get('postcode').dirty) &&!klantForm.get('postcode').valid\" [hidden]=\"!klantForm.controls['postcode'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Postcode is vereist.</label></div>\r\n                <div *ngIf=\"(klantForm.get('plaats').touched || klantForm.get('plaats').dirty) &&!klantForm.get('plaats').valid\" [hidden]=\"!klantForm.controls['plaats'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Gemeente is vereist.</label></div>\r\n                <div *ngIf=\"(klantForm.get('inrichtingLX').touched || klantForm.get('inrichtingLX').dirty) && !klantForm.get('inrichtingLX').valid\" [hidden]=\"!klantForm.controls['inrichtingLX'].errors.min\" class=\"col-sm-8\"><label class=\"validation\">- Lambert coördinaat X dient min. 20000 te zijn.</label></div>\r\n                <div *ngIf=\"(klantForm.get('inrichtingLX').touched || klantForm.get('inrichtingLX').dirty) && !klantForm.get('inrichtingLX').valid\" [hidden]=\"!klantForm.controls['inrichtingLX'].errors.max\" class=\"col-sm-8\"><label class=\"validation\">- Lambert coördinaat X mag max. 280000 zijn.</label></div>\r\n                <div *ngIf=\"(klantForm.get('inrichtingLY').touched || klantForm.get('inrichtingLY').dirty) && !klantForm.get('inrichtingLY').valid\" [hidden]=\"!klantForm.controls['inrichtingLY'].errors.min\" class=\"col-sm-8\"><label class=\"validation\">- Lambert coördinaat Y dient min. 150000 te zijn.</label></div>\r\n                <div *ngIf=\"(klantForm.get('inrichtingLY').touched || klantForm.get('inrichtingLY').dirty) && !klantForm.get('inrichtingLY').valid\" [hidden]=\"!klantForm.controls['inrichtingLY'].errors.max\" class=\"col-sm-8\"><label class=\"validation\">- Lambert coördinaat Y mag max. 250000 zijn.</label></div>\r\n                <div *ngIf=\"(klantForm.get('email').touched || klantForm.get('email').dirty) && !klantForm.get('email').valid\" [hidden]=\"!klantForm.controls['email'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">-Email Aanvrager is vereist.</label></div>\r\n                <div *ngIf=\"(klantForm.get('email').touched || klantForm.get('email').dirty) && !klantForm.get('email').valid\" [hidden]=\"!klantForm.controls['email'].errors.pattern\" class=\"col-sm-8\"><label class=\"validation\">-Emailadres is niet geldig.</label></div>\r\n                <div *ngIf=\"(klantForm.get('login').touched || klantForm.get('login').dirty) && !klantForm.get('login').valid\" [hidden]=\"!klantForm.controls['login'].errors?.required\" class=\"col-sm-8\"><label class=\"validation\">-Gebruikersnaam is vereist.</label></div>\r\n                <div *ngIf=\"(klantForm.get('paswoord').touched || klantForm.get('paswoord').dirty) && !klantForm.get('paswoord').valid\" [hidden]=\"!klantForm.controls['paswoord'].errors?.required\" class=\"col-sm-8\"><label class=\"validation\">-Paswoord is vereist.</label></div>\r\n                <div *ngIf=\"LoginValidationMessage != ''\" class=\"col-sm-8\"><label class=\"validation\">{{LoginValidationMessage}}</label></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"paddingBottom40px\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-8 col-sm-offset-3\">\r\n                <button type=\"button\" [disabled]=\"!isKlantFormValid()\" (click)=\"save()\" class=\"btn btn-default\">Send Data</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <gw-documents [id]=\"klantId\"\r\n                  [documentType]=\"gwDocumentType\"\r\n                  [emailHistoriekType]=\"emailHistoriekType\"\r\n                  [canSendNewEmail]=\"canSendNewEmail\"\r\n                  [status]=\"uploadStatus\"\r\n                  [uploadByParent]=\"false\"\r\n                  [refreshNeeded]=\"refreshDocumentsNeeded\"\r\n                  [showDocuments]=\"true\"\r\n                  [showMails]=\"true\"\r\n                  (uploadingFiles)=\"uploadFiles($event)\">\r\n    </gw-documents>\r\n\r\n\r\n</form>\r\n";

/***/ }),

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(642);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".setTop {\r\n    align-items: flex-start;\r\n}\r\n\r\n.setArea {\r\n    border: 1px solid #DADADA;\r\n}\r\n\r\n\r\n.locationBorderBottom {\r\n    border-bottom: 1px solid #7faa2a;\r\n}\r\n\r\n\r\n.controlWidth {\r\n    width: 100%;\r\n}\r\n\r\n.emailVersturen:hover {\r\n    text-decoration: underline;\r\n    color: #337ab7;\r\n}\r\n\r\n.dotted-border-below-hint {\r\n    color: #cc0000;\r\n    border-bottom: 1px !important;\r\n    border-bottom-style: dotted !important;\r\n    border-bottom-color: #cc0000 !important;\r\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<h4>Technisch verslag details</h4>\r\n<form [formGroup]=\"tvForm\" class=\"container-fluid paddingTop10px\">\r\n    <div class=\"row\">\r\n        <h5 class=\"col-sm-11\">Technisch verslag detail in behandeling </h5>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-8 col-sm-offset-3\">\r\n            <label><input type=\"checkbox\" formControlName=\"isAfgesloten\" value=\"\">Is Afgesloten</label>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Reden Afsluiting</label></div>\r\n        <div class=\"col-sm-8\">\r\n            <select class=\"controlWidth\" DottedBorderBelow formControlName=\"technischVerslagAfsluitRedenID\">\r\n                <option value=\"\">Selecteer</option>\r\n                <option *ngFor=\"let o of afsluitRedenListItems\" [value]=\"o.id\">{{o.description}}</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"isAfsluitRedenDetails\">\r\n        <div class=\"col-sm-8 col-sm-offset-3\">\r\n            <gw-tv-afsluit-reden [data]=\"tvJoinedData\"\r\n                                 (afluitenFormValues)=\"getAsluitenFormValues($event)\"\r\n                                 [tvId]=\"tvId\"></gw-tv-afsluit-reden>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"isAfsluitRedenVolume\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Volume (m³)</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow AllowOnlyNumbers  formControlName=\"afsluitRedenVolume\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Nummer</label></div>\r\n        <div class=\"col-sm-8\"><label>{{tvJoinedData?.technischVerslagID}}</label></div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Klant</label></div>\r\n        <div class=\"col-sm-8\"> <label *ngIf=\"tvJoinedData?.organisatie\">{{tvJoinedData?.organisatie}} <a *ngIf=\"tvJoinedData?.klantId\" [routerLink]=\"['/gw/klant-edit',tvJoinedData?.klantId]\" routerLinkActive=\"active-link\">({{tvJoinedData?.klantId}})</a></label></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"></div>\r\n        <div class=\"col-sm-8\"> <label>Tel:{{tvJoinedData?.telefoon}}</label> </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"></div>\r\n        <div class=\"col-sm-8\"> <label>Fax:{{tvJoinedData?.fax}}</label></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Referentie klant</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"referentieKlant\" class=\"form-control\" maxlength=\"100\"></div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Titel</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"titel\" class=\"form-control\" maxlength=\"40\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"tvForm.get('onderzoekslocatie_straat').errors\">* Straat onderzoekslocatie</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"onderzoekslocatie_straat\" class=\"form-control\" maxlength=\"40\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"tvForm.get('onderzoekslocatie_gemeente').errors\">* Gemeente onderzoekslocatie</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"onderzoekslocatie_gemeente\" class=\"form-control\" maxlength=\"40\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Beschrijving</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"beschrijving\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Grondverzettype</label></div>\r\n        <div class=\"col-sm-8\">\r\n            <select class=\"controlWidth\" DottedBorderBelow formControlName=\"grondverzetTypeID\">\r\n                <option value=\"\">Selecteer</option>\r\n                <option *ngFor=\"let o of grondVerzetTypesListItems\" [value]=\"o.id\">{{o.type}}</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\"> Referentie</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"referentie\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"tvForm.get('tvDatum').errors\">* Datum Technisch Verslag</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"tvDatum\" class=\"form-control ng-trim-ignore\" tooltip=\"(bv. 31/01/2004)\" bsDatepicker placement=\"top left\" autocomplete=\"off\" [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n    </div>\r\n    <div class=\"row setTop paddingTop10px\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Opdrachtgever coördinaten (werfopvolging zonder GVT)</label></div>\r\n        <div class=\"col-sm-8\"><textarea formControlName=\"werfOpvolgingZonderGvt\" rows=\"4\" cols=\"50\" maxlength=\"750\" class=\"form-control setArea\"></textarea></div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-8 col-sm-offset-3\">\r\n            <label [class.validationHint]=\"tvForm.get('onderzoekslocatieBetreftTopCgr').errors\">\r\n                <input type=\"checkbox\" formControlName=\"isTopCgr\" value=\"\">\r\n                <label [class.validationHint]=\"tvForm.get('onderzoekslocatieBetreftTopCgr').errors\" *ngIf=\"isTopCgrSelected\">*</label> Locatie is een TOP/CGR\r\n            </label>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"isTopCgrSelected\">\r\n        <div class=\"col-sm-8 col-sm-offset-3\">\r\n            <select class=\"controlWidth\" DottedBorderBelow formControlName=\"onderzoekslocatieBetreftTopCgr\" [ngClass]=\"{'dotted-border-below-hint':tvForm.get('onderzoekslocatieBetreftTopCgr').errors}\">\r\n                <option value=\"\">Selecteer</option>\r\n                <option *ngFor=\"let o of topCgrLocatieListItems\" [value]=\"o.klantID\">{{o.organisatie}}</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-8 col-sm-offset-3\">\r\n            <label><input type=\"checkbox\" formControlName=\"isBewerktGemengd\" value=\"\">Grond is bewerkt of gemengd</label>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Lambert-coördinaten centraal punt</label></div>\r\n        <div class=\"col-sm-2\">\r\n            <div class=\"row\">\r\n                <label for=\"LX\" class=\"col-sm-2\" [class.validationHint]=\"tvForm.get('centraalPuntLX').errors\">X </label>\r\n                <div class=\"col-sm-10\">\r\n                    <input type=\"text\" DottedBorderBelow formControlName=\"centraalPuntLX\" class=\"form-control\" AllowOnlyNumbers tooltip=\"De X-coördinaat moet tussen 20000 en 280000 liggen\" placement=\"top\" maxlength=\"6\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n            <div class=\"row\">\r\n                <label for=\"LY\" class=\"col-sm-2\" [class.validationHint]=\"tvForm.get('centraalPuntLY').errors\">Y </label>\r\n                <div class=\"col-sm-10\">\r\n                    <input type=\"text\" DottedBorderBelow formControlName=\"centraalPuntLY\" class=\"form-control\" AllowOnlyNumbers tooltip=\"De Y-coördinaat moet tussen 150000 en 250000 liggen\" placement=\"top\" maxlength=\"6\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-8 col-sm-offset-3\"><label>Als u de Lambert coördinaten niet kent kan u ze op de volgende website opzoeken:<a href=\"#\" (click)=\"$event.preventDefault();toGeopunt()\">www.geopunt.be</a></label></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">BestemmingsType onderzoekslocatie</label></div>\r\n        <div class=\"col-sm-8\">\r\n            <select class=\"controlWidth\" DottedBorderBelow formControlName=\"bestemmingsTypeID\">\r\n                <option value=\"\">Selecteer</option>\r\n                <option value=\"1\">1</option>\r\n                <option value=\"2\">2</option>\r\n                <option value=\"3\">3</option>\r\n                <option value=\"4\">4</option>\r\n                <option value=\"5\">5</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\"> Erkend Bodem- saneringsdeskundige</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"bodemsaneringsdeskundige\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\"> Dossierbeheerder</label></div>\r\n        <div class=\"col-sm-8\">\r\n            <select class=\"controlWidth\" DottedBorderBelow formControlName=\"dossierBeheerderID\" [ngClass]=\"{'dotted-border-below-hint':tvForm.get('dossierBeheerderID').errors}\">\r\n                <option value=\"\">Selecteer</option>\r\n                <option *ngFor=\"let o of dossierbeheerderListItems\" [value]=\"o.dossierBeheerderID\">{{o.naam}}</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-8 col-sm-offset-3\">\r\n            <label><input type=\"checkbox\" formControlName=\"isPubliekBeschikbaar\" value=\"\">Publiek beschikbaar</label>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-8 col-sm-offset-3\">\r\n            <label>\r\n                <input type=\"checkbox\" formControlName=\"isExternTV\" value=\"\">TV beoordeeld door andere bodem-<br>\r\n                beheersorganisatie: (conformiteitsattest<br>\r\n                wordt opgestuurd)\r\n            </label>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Extern TV geldig tot</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"externTvGeldigTot\" class=\"form-control ng-trim-ignore\" tooltip=\"(bv. 31/01/2004)\" bsDatepicker placement=\"top left\" autocomplete=\"off\" [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n    </div>\r\n    <div class=\"row setTop paddingTop10px\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Interne opmerking</label></div>\r\n        <div class=\"col-sm-8\"><textarea formControlName=\"interneOpmerking\" rows=\"4\" cols=\"50\" maxlength=\"750\" class=\"form-control setArea\"></textarea></div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-8 col-sm-offset-3\">\r\n            <gw-tv-evaluatie [data]=\"tvJoinedData\"\r\n                             [selectedStatus]=\"selectedStatus\"\r\n                             [totalHoeveelheid] =\"totalHoeveelheid\"\r\n                             [dossierBeheerderID]=\"dossierBeheerderID\"\r\n                             [isComformiteitMailSend] =\"isConformiteitMailSend\"\r\n                             [isSaving] =\"isSaving\"\r\n                             (besluitConclusion)=\"triggerBesluitChange($event)\"\r\n                             (evaluatieFormErrors)=\"evaluationFormErrorMessages($event)\"\r\n                             (evaluatieFormValues)=\"getEvaluatieFormValues($event)\"\r\n                             (canSendComformietMail)=\"sendConformiteitEmail($event)\"\r\n                             [tvId]=\"tvId\">\r\n            </gw-tv-evaluatie>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row setTop paddingTop10px\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Opmerkingen</label></div>\r\n        <div class=\"col-sm-8\"><textarea formControlName=\"opmerkingen\" rows=\"4\" cols=\"50\"  maxlength=\"8000\" class=\"form-control setArea\"></textarea></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Status</label></div>\r\n        <div class=\"col-sm-8\">\r\n            <select class=\"controlWidth\" DottedBorderBelow formControlName=\"statusID\">\r\n                <option *ngFor=\"let o of tvStatusListItemsCurrent\" [value]=\"o.tvStatusID\">{{o.status}}</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-8 col-sm-offset-3\">\r\n            <label><input type=\"checkbox\" formControlName=\"isGefactureerd\" value=\"\">Gefactureerd</label>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\"> Data aanvullingen</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"dataAanvullingen\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-8 col-sm-offset-3\">\r\n            <label *ngIf=\"evaluatieFormValues?.checkConclusion == 1\"><input type=\"checkbox\" formControlName=\"updateStatusDatum\" value=\"\">Update status datum</label>\r\n        </div>\r\n\r\n    </div>\r\n    <div [hidden]=\"isTvFormValid()\">\r\n        <div class=\"row setTop paddingTop10px\">\r\n            <div class=\"col-sm-8 col-sm-offset-3 validation\">\r\n                <div *ngIf=\"(tvForm.get('onderzoekslocatie_straat').touched || tvForm.get('onderzoekslocatie_straat').dirty) &&!tvForm.get('onderzoekslocatie_straat').valid\" [hidden]=\"!tvForm.controls['onderzoekslocatie_straat'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Straat onderzoekslocatie is vereist.</label></div>\r\n                <div *ngIf=\"(tvForm.get('onderzoekslocatie_gemeente').touched || tvForm.get('onderzoekslocatie_gemeente').dirty) &&!tvForm.get('onderzoekslocatie_gemeente').valid\" [hidden]=\"!tvForm.controls['onderzoekslocatie_gemeente'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Gemeente onderzoekslocatie is vereist.</label></div>\r\n                <div *ngIf=\"(tvForm.get('tvDatum').touched || tvForm.get('tvDatum').dirty) &&!tvForm.get('tvDatum').valid\" [hidden]=\"!tvForm.controls['tvDatum'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Datum Technisch Verslag is vereist.</label></div>\r\n                <div *ngIf=\"!tvForm.get('onderzoekslocatieBetreftTopCgr').valid\" [hidden]=\"!tvForm.controls['onderzoekslocatieBetreftTopCgr'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Selecteer een TOP/CGR locatie.</label></div>\r\n                <div *ngIf=\"(tvForm.get('centraalPuntLX').touched || tvForm.get('centraalPuntLX').dirty) && !tvForm.get('centraalPuntLX').valid\" [hidden]=\"!tvForm.controls['centraalPuntLX'].errors.min\" class=\"col-sm-8\"><label class=\"validation\">- Lambert coördinaat X dient min. 20000 te zijn.</label></div>\r\n                <div *ngIf=\"(tvForm.get('centraalPuntLX').touched || tvForm.get('centraalPuntLX').dirty) && !tvForm.get('centraalPuntLX').valid\" [hidden]=\"!tvForm.controls['centraalPuntLX'].errors.max\" class=\"col-sm-8\"><label class=\"validation\">- Lambert coördinaat X mag max. 280000 zijn.</label></div>\r\n                <div *ngIf=\"(tvForm.get('centraalPuntLY').touched || tvForm.get('centraalPuntLY').dirty) && !tvForm.get('centraalPuntLY').valid\" [hidden]=\"!tvForm.controls['centraalPuntLY'].errors.min\" class=\"col-sm-8\"><label class=\"validation\">- Lambert coördinaat Y dient min. 150000 te zijn.</label></div>\r\n                <div *ngIf=\"(tvForm.get('centraalPuntLY').touched || tvForm.get('centraalPuntLY').dirty) && !tvForm.get('centraalPuntLY').valid\" [hidden]=\"!tvForm.controls['centraalPuntLY'].errors.max\" class=\"col-sm-8\"><label class=\"validation\">- Lambert coördinaat Y mag max. 250000 zijn.</label></div>\r\n                <div *ngIf=\"datumDemonsteringErrorMessage != ''\" class=\"col-sm-8\"><label class=\"validation\">{{datumDemonsteringErrorMessage}}</label></div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"paddingBottom40px\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-8 col-sm-offset-3\">\r\n                <button type=\"button\" [disabled]=\"!isTvFormValid() || isSaving===1\" (click)=\"save()\" class=\"btn btn-default\">OPSLAAN TV + BEOORDELING</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"row\">\r\n        <h5 class=\"col-sm-11\">Onderzochte deelvolume(s)</h5>\r\n    </div>\r\n\r\n    <div>\r\n        <div class=\"row setTop paddingTop10px\">\r\n            <div class=\"col-sm-3\"><label class=\"pull-right\">Onderzochte deelvolumes</label></div>\r\n\r\n            <div class=\"col-sm-8\">\r\n                <table class=\"GWTable\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th style=\"width:20px\">Nr.</th>\r\n                            <th>Beschrijving</th>\r\n                            <th style=\"text-align: center\">(X)</th>\r\n                            <th style=\"text-align: center\">(Y)</th>\r\n                            <th style=\"text-align: center\">(Z)</th>\r\n                            <th>Hoeveelheid(m³)</th>\r\n                            <th></th>\r\n                            <th></th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let z of tvVolumes\">\r\n                            <td>{{z.id}}</td>\r\n                            <td><label class=\"pull-left\">{{z.beschrijving}}</label></td>\r\n                            <td style=\"text-align: center\">{{z.kgbuOmschrijving}}</td>\r\n                            <td style=\"text-align: center\">{{z.kgbiOmschrijving}}</td>\r\n                            <td style=\"text-align: center\">{{z.kgboOmschrijving}}</td>\r\n                            <td align='right'>{{z.hoeveelheid}}</td>\r\n                            <td align='right' (click)=\"editTvVolume(z.tvZoneID)\"> <img src=\"" + __webpack_require__(15) + "\" class=\"ibtn\" /></td>\r\n                            <td align='right' (click)=\"deleteTvVolume(z.tvZoneID)\"> <img src=\"" + __webpack_require__(82) + "\" class=\"ibtn\" /></td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n\r\n\r\n\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3 \"><label class=\"pull-right boldItem\">Total hoeveelheid:</label></div>\r\n        <div class=\"col-sm-8\">\r\n            <label class=\"boldItem\">{{totalHoeveelheid}}</label>\r\n        </div>\r\n    </div>\r\n    <div class=\"paddingBottom40px\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-8 col-sm-offset-3 pull-right\">\r\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"addTvVolumes()\">NIEUW DEELVOLUME</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <h5 class=\"col-sm-11\">Tracering</h5>\r\n    </div>\r\n\r\n    <gw-documents [id]=\"tvId\"\r\n                  [documentType]=\"gwDocumentType\"\r\n                  [uploadByParent]=\"false\"\r\n                  [refreshNeeded]=\"refreshDocumentsNeeded\"\r\n                  [emailHistoriekType]=\"emailHistoriekType\"\r\n                  [showDocuments]=\"true\"\r\n                  [showMails]=\"true\"\r\n                  [canSendNewEmail]=\"canSendNewEmail\"\r\n                  [status]=\"uploadStatus\"\r\n                  (uploadingFiles)=\"uploadFiles($event)\">\r\n    </gw-documents>\r\n</form>\r\n\r\n";

/***/ }),

/***/ 644:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(645);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".setTop {\r\n    align-items: flex-start;\r\n}\r\n\r\n.setArea {\r\n    border: 1px solid #DADADA;\r\n}\r\n\r\n\r\n.locationBorderBottom {\r\n    border-bottom: 1px solid #7faa2a;\r\n}\r\n\r\n\r\n.controlWidth {\r\n    width: 100%;\r\n}\r\n\r\n.boldItem {\r\n    font-weight:bold;\r\n}\r\n\r\n.emailVersturen:hover {\r\n    text-decoration: underline;\r\n    color: #337ab7;\r\n}\r\n\r\n.dotted-border-below-hint {\r\n\r\n    border-bottom: 1px !important;\r\n    border-bottom-style: dotted !important;\r\n    border-bottom-color: #cc0000 !important;\r\n}", ""]);

// exports


/***/ }),

/***/ 646:
/***/ (function(module, exports) {

module.exports = "<h4>New email</h4>\r\n<form [formGroup]=\"emailForm\" class=\"container-fluid paddingTop10px\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"emailForm.controls['from']?.errors\">* From</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"from\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"emailForm.controls['to']?.errors\">* To</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"to\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"emailForm.controls['cc']?.errors\">CC</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"cc\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"emailForm.controls['subject']?.errors\">* Subject</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"subject\" class=\"form-control\" ></div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"canHiddenDatum\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Datum</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"datum\" class=\"form-control ng-trim-ignore\" tooltip=\"(bv. 31/01/2004)\" bsDatepicker placement=\"top left\" autocomplete=\"off\" [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n    </div>\r\n    <div class=\"row setTop paddingTop10px\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Body</label></div>\r\n        <div class=\"col-sm-8\">\r\n            <textarea formControlName=\"body\" rows=\"12\" cols=\"50\" class=\"form-control setArea\">Some default value</textarea>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Attachment</label></div>\r\n        <div class=\"col-sm-8\"> <label> {{mailData?.attachment}}</label></div>\r\n    </div>\r\n\r\n    <div [hidden]=\"emailForm.valid\">\r\n        <div class=\"row setTop paddingTop10px\">\r\n            <div class=\"col-sm-8 col-sm-offset-3 validation\">\r\n                <div *ngIf=\"(emailForm.get('from').touched || emailForm.get('from').dirty) && !emailForm.get('from').valid\" [hidden]=\"!emailForm.controls['from'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- From is vereist.</label></div>\r\n                <div *ngIf=\"(emailForm.get('from').touched || emailForm.get('from').dirty) && !emailForm.get('from').valid\" [hidden]=\"!emailForm.controls['from'].errors.pattern\" class=\"col-sm-8\"><label class=\"validation\">- From is een ongeldig emailadres.</label></div>\r\n                <div *ngIf=\"(emailForm.get('to').touched || emailForm.get('to').dirty) && !emailForm.get('to').valid\" [hidden]=\"!emailForm.controls['to'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- To is vereist.</label></div>\r\n                <div *ngIf=\"(emailForm.get('to').touched || emailForm.get('to').dirty) && !emailForm.get('to').valid\" [hidden]=\"!emailForm.controls['to'].errors.pattern\" class=\"col-sm-8\"><label class=\"validation\">- To is een ongeldig emailadres.</label></div>\r\n                <div *ngIf=\"(emailForm.get('cc').touched || emailForm.get('cc').dirty) && !emailForm.get('cc').valid\" [hidden]=\"!emailForm.controls['cc'].errors.pattern\" class=\"col-sm-8\"><label class=\"validation\">- Cc is een ongeldig emailadres.</label></div>\r\n                <div *ngIf=\"(emailForm.get('subject').touched || emailForm.get('subject').dirty) && !emailForm.get('subject').valid\" [hidden]=\"!emailForm.controls['subject'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Subject is vereist.</label></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"paddingBottom40px\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4 col-sm-offset-3\">\r\n                <button type=\"button\" (click)=\"back()\" class=\"btn btn-default\">ANNULEREN</button>\r\n            </div>\r\n            <div class=\"col-sm-4 col-sm-offset-3\">\r\n                <button type=\"button\" [disabled]=\"!emailForm.valid\" (click)=\"send()\" class=\"btn btn-default\">VERSTUREN</button>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <gw-file-uploader *ngIf=\"!canHiddenUpload\"\r\n                      [fileType]=\"uploadType\"\r\n                      [status]=\"uploadStatus\"\r\n                      (uploaded)=\"filesUploaded($event)\"\r\n                      (inQueue)=\"queueCountChanged($event)\">\r\n    </gw-file-uploader>\r\n\r\n\r\n\r\n</form>\r\n";

/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(648);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".setTop {\r\n    align-items: flex-start;\r\n}\r\n\r\n.setArea {\r\n    border: 1px solid #DADADA;\r\n}\r\n\r\n\r\n.locationBorderBottom {\r\n    border-bottom: 1px solid #7faa2a;\r\n}\r\n\r\n\r\n.controlWidth {\r\n    width: 100%;\r\n}\r\n\r\n.emailVersturen:hover {\r\n    text-decoration: underline;\r\n    color: #337ab7;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<h4>GVT details</h4>\r\n<form [formGroup]=\"gvtForm\" class=\"container-fluid paddingTop10px\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-11\"><h5>Klant</h5></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Klant</label></div>\r\n        <div class=\"col-sm-8\"> <label>{{gvtData?.klantNaam}} </label> <a *ngIf=\"gvtData?.klantID\" [routerLink]=\"['/gw/klant-edit',gvtData?.klantID]\" routerLinkActive=\"active-link\">({{gvtData?.klantID}})</a></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"></div>\r\n        <div class=\"col-sm-8\"> <label>{{gvtData?.klantContact}}</label> </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n        <h6 class=\"col-sm-3 pull-right\">Aanvrager</h6>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"gvtForm.get('klantContactAchterNaam').errors\">* Achternaam</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" formControlName=\"klantContactAchterNaam\" maxlength=\"50\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"gvtForm.get('klantContactVoorNaam').errors\">* Voornaam</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" formControlName=\"klantContactVoorNaam\" maxlength=\"50\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"gvtForm.get('klantContactTelefoon').errors\">* Telefoon </label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" formControlName=\"klantContactTelefoon\" maxlength=\"50\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"gvtForm.get('klantContactEmail').errors\">* Email </label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" formControlName=\"klantContactEmail\" maxlength=\"50\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"gvtForm.get('klantKenmerk').errors\">* Referentie</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" formControlName=\"klantKenmerk\" maxlength=\"50\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"row\">\r\n        <h5 class=\"col-sm-11\">Bestemming</h5>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"opgeletListItems?.length\">\r\n        <div class=\"card  col-sm-8 col-sm-offset-3\">\r\n            <div class=\"card-body\">\r\n                <h6 class=\"card-title\">Opgelet!</h6>\r\n                <div><label class=\"card-text\">Deze bestemming wordt in volgende Bodembeheer rapporten gebruikt</label> </div>\r\n                <div><label> <a *ngFor=\"let item of opgeletListItems\" (click)=\"navigateToOpgelet(item)\">{{item}} </a> </label></div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <h6 class=\"col-sm-3 pull-right\">Eigenaar of Exploitant</h6>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Naam</label></div>\r\n        <div class=\"col-sm-8\"><input DottedBorderBelow formControlName=\"eigenaar\" type=\"text\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Straat en nr</label></div>\r\n        <div class=\"col-sm-8\"><input DottedBorderBelow formControlName=\"adres1\" type=\"text\" class=\"form-control\" maxlength=\"100\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Straat en nr&nbsp;(vervolg)</label></div>\r\n        <div class=\"col-sm-8\"><input DottedBorderBelow formControlName=\"adres2\" type=\"text\" class=\"form-control\" maxlength=\"100\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Postcode</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"postcode\" class=\"form-control\" maxlength=\"10\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Gemeente</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"plaats\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Contactpersoon</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"contactPersoon\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Telefoon</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"telefoon\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"gvtForm.get('email').errors\">Email</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"email\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\">\r\n            <label class=\"pull-right\">Datum aanvraag </label>\r\n        </div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"aanvraagDatum\" class=\"form-control ng-trim-ignore\" tooltip=\"(bv. 31/1/2004)\" bsDatepicker placement=\"top left\" autocomplete=\"off\" [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\">\r\n            <label class=\"pull-right\">\r\n                Datum ontvangst eindverklaring en situatietekening\r\n            </label>\r\n        </div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"ontvangstDatumTransportVerklaring\" class=\"form-control ng-trim-ignore\" tooltip=\"(bv. 31/1/2004)\" bsDatepicker placement=\"top left\" autocomplete=\"off\" [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <h6 class=\"col-sm-3 pull-right\">Locatie waar de grond wordt afgezet</h6>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Straat en nr</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"afzetAdres1\" class=\"form-control\" maxlength=\"100\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Straat en nr&nbsp;(vervolg)</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"afzetAdres2\" class=\"form-control\" maxlength=\"100\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Postcode</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"afzetPostcode\" class=\"form-control\" maxlength=\"10\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Gemeente</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"afzetPlaats\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right bold\">Aard van bestemming</label></div>\r\n        <div class=\"col-sm-8\">\r\n            <select class=\"controlWidth\" DottedBorderBelow formControlName=\"bestemmingsAardID\">\r\n                <option value=\"\">Selecteer</option>\r\n                <option *ngFor=\"let o of bestemmingItems\" [value]=\"o.bestemmingsAardId\">{{o.bestemmingsAard}}</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\"> Selecteer DOP</label></div>\r\n        <div class=\"col-sm-8\">\r\n            <select class=\"controlWidth\" DottedBorderBelow formControlName=\"bestemmingDopID\">\r\n                <option value=\"\">Selecteer</option>\r\n                <option *ngFor=\"let o of dopItems\" [value]=\"o.klantID\">{{o.achternaam}}</option>\r\n\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\"> Omschrijving toepassing</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"bestemmingsBeschrijving\" class=\"form-control\" maxlength=\"100\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Bijkomende omschrijving</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"bijkomendeOmschrijvingBestemming\" class=\"form-control\" maxlength=\"100\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">  Maximale graad van vervuiling</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"maximaleVerontreinigingsgraad\" class=\"form-control\" maxlength=\"100\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\"> Gebruik vindt plaats binnen/buiten kadastrale werkzone</label></div>\r\n        <div class=\"col-sm-8\">\r\n            <select class=\"controlWidth\" DottedBorderBelow formControlName=\"kadastraleWerkzone\">\r\n                <option value=\"\">Selecteer</option>\r\n                <option value=\"1\">Binnen de werf</option>\r\n                <option value=\"2\">Buiten de werf</option>\r\n                <option value=\"4\">Buiten de werf (kleine hoeveelheden)</option>\r\n                <option value=\"3\">Buiten het Vlaams gewest</option>\r\n\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right bold\">Categorie</label></div>\r\n        <div class=\"col-sm-8\">\r\n            <select class=\"controlWidth\" DottedBorderBelow formControlName=\"categorieID\">\r\n                <option value=\"\">Selecteer</option>\r\n                <option *ngFor=\"let o of categorieListItems\" [value]=\"o.id\">{{o.description}}</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row setTop paddingTop10px\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\"> Gebruik terrein na toepassing</label></div>\r\n        <div class=\"col-sm-8\"><textarea formControlName=\"gebruikTerrein\" rows=\"4\" cols=\"50\" maxlength=\"500\" class=\"form-control setArea\"></textarea></div>\r\n\r\n    </div>\r\n    <div class=\"row\">\r\n        <h6 class=\"col-sm-3 pull-right\">Kadastrale gegevens</h6>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Gemeente</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"kadAfdeling\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Afdelingsnr (indien bekend:)</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"kadAfdelingsNr\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"gvtForm.get('kadSectie').errors\">Sectie</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"kadSectie\" class=\"form-control\" maxlength=\"1\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\"> Nummers</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"kadNummers\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">* Lambert-coördinaten centraal punt</label></div>\r\n        <div class=\"col-sm-2\">\r\n            <div class=\"row\">\r\n                <label for=\"LX\" class=\"col-sm-2\" [class.validationHint]=\"gvtForm.get('lX1').errors\">X </label>\r\n                <div class=\"col-sm-10\">\r\n                    <input type=\"text\" DottedBorderBelow formControlName=\"lX1\" class=\"form-control\" AllowOnlyNumbers tooltip=\"De X-coördinaat moet tussen 20000 en 280000 liggen\" placement=\"top\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n            <div class=\"row\">\r\n                <label for=\"LY\" class=\"col-sm-2\" [class.validationHint]=\"gvtForm.get('lY1').errors\">Y </label>\r\n                <div class=\"col-sm-10\">\r\n                    <input type=\"text\" DottedBorderBelow formControlName=\"lY1\" class=\"form-control\" AllowOnlyNumbers tooltip=\"De Y-coördinaat moet tussen 150000 en 250000 liggen\" placement=\"top\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-8 col-sm-offset-3\"><label>Als u de Lambert coördinaten niet kent kan u ze op de volgende website opzoeken:<a href=\"#\" (click)=\"$event.preventDefault();toGeopunt()\">www.geopunt.be</a></label></div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-4 col-sm-offset-3 \">\r\n            <label><input type=\"checkbox\" formControlName=\"havenBedrijf\" value=\"\"> Locatie is eigendom van het havenbedrijf</label>\r\n        </div>\r\n        <div class=\"col-sm-4 pull-right\">\r\n            <button type=\"button\" [disabled]=\"!isHavenBedrijfChecked\" class=\"btn btn-default\" (click)=\"emailToHavenbedrijf()\">Verstuur de mail naar het havenbedrijf</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-8 col-sm-offset-3\">\r\n            <label> Message to display after sending email</label>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n        <h5 class=\"col-sm-11\"> Studie ontvangende bodem</h5>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Studie ontvangende grond</label></div>\r\n        <div class=\"col-sm-8\">\r\n            <select class=\"controlWidth\" DottedBorderBelow formControlName=\"studieBestemmingID\">\r\n                <option value=\"\">Selecteer</option>\r\n                <option *ngFor=\"let o of studieListItems\" [value]=\"o.studieBestemmingID\">{{o.studieBestemming}}</option>\r\n            </select>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\"> Naam erkend bodemsaneringsdeskundige</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"ebsd\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Rapportnummer bodemsaneringsdeskundige</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"rapportNummer\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\">\r\n            <label class=\"pull-right\"> Rapportdatum<br> bodemsaneringsdeskundige </label>\r\n        </div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"rapportDatum\" class=\"form-control ng-trim-ignore\" tooltip=\"(bv. 31/1/2004)\" bsDatepicker placement=\"top left\" autocomplete=\"off\" [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <h5 class=\"col-sm-11\"> Beoordeling</h5>\r\n    </div>\r\n    <div class=\" row\">\r\n        <div class=\"col-sm-3\">\r\n            <label class=\"pull-right\">Toekenning Kadastrale werkzone akkoord</label>\r\n        </div>\r\n        <div class=\"col-sm-8\">\r\n            <div class=\"form-check form-check-inline col-sm-2\">\r\n                <input class=\"form-check-input\" id=\"kadToekenningJa\" name=\"toekenningKadOk\" type=\"radio\" [value]=\"true\" formControlName=\"toekenningKadOk\" />\r\n                <label class=\"form-check-label\" for=\"kadToekenningJa\">Ja </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline col-sm-2\">\r\n                <input class=\"form-check-input\" id=\"kadToekenningNee\" name=\"toekenningKadOk\" type=\"radio\" [value]=\"false\" formControlName=\"toekenningKadOk\" />\r\n                <label class=\"form-check-label\" for=\"kadToekenningNee\">Nee </label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\"> Toekomstig gebruik</label></div>\r\n        <div class=\"col-sm-8\">\r\n            <select class=\"controlWidth\" DottedBorderBelow formControlName=\"toekomstigGebruik\">\r\n                <option value=\"0\">0</option>\r\n                <option value=\"1\">1</option>\r\n                <option value=\"2\">2</option>\r\n                <option value=\"3\">3</option>\r\n                <option value=\"4\">4</option>\r\n                <option value=\"5\">5</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Zone op gewestplan</label></div>\r\n        <div class=\"col-sm-8\">\r\n            <select class=\"controlWidth\" DottedBorderBelow formControlName=\"bestemmingsTypeID\">\r\n                <option value=\"\">Selecteer</option>\r\n                <option *ngFor=\"let o of typeListItems\" [value]=\"o.bestemmingsTypeID\"> ({{o.bestemmingsType}}) {{o.bestemming}}</option>\r\n            </select>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Bestemming Gewestplan</label></div>\r\n        <div class=\"col-sm-8\">\r\n            <select class=\"controlWidth\" DottedBorderBelow formControlName=\"bestemmingGewestplan\">\r\n                <option value=\"0\">0</option>\r\n                <option value=\"1\">1</option>\r\n                <option value=\"2\">2</option>\r\n                <option value=\"3\">3 </option>\r\n\r\n                <option value=\"4\">4</option>\r\n                <option value=\"5\">5</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Definitieve aanwijzing bestemming</label></div>\r\n        <div class=\"col-sm-8\">\r\n            <select class=\"controlWidth\" DottedBorderBelow formControlName=\"defAanwijzingBestemming\">\r\n                <option value=\"0\">0</option>\r\n                <option value=\"1\">1</option>\r\n                <option value=\"2\">2</option>\r\n                <option value=\"3\">3</option>\r\n                <option value=\"4\">4</option>\r\n                <option value=\"5\">5</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n\r\n    <!--studie-->\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-11 paddingRight0px paddingLeft0\">\r\n            <gw-gvt-studie [data]=\"gvtData\"\r\n                          (studieFormValues)=\"getStudieValues($event)\"></gw-gvt-studie>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n    <!--<div class=\"row\">\r\n        <div class=\"checkbox col-sm-8 col-sm-offset-3\">\r\n\r\n        </div>\r\n    </div>-->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Nr. Technisch Verslag</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"tvid\" class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\"> Nr. Grondtransportmelding</label></div>\r\n        <div class=\"col-sm-4\"><input type=\"text\" DottedBorderBelow formControlName=\"grondtransportmeldingID\" class=\"form-control\"></div>\r\n        <div class=\"col-sm-4\">\r\n            <button type=\"button\" class=\"btn btn-default marginTop10px\" data-toggle=\"modal\" data-target=\"#selectedGTM\">GTM koppelen</button>\r\n        </div>\r\n        <!--<div class=\"col-sm-4\"> <a (click)=\"openGtmToCopy()\">GTM koppelen</a></div>\r\n         <button type=\"button\" class=\"btn btn-default marginTop10px\" data-toggle=\"modal\" data-target=\"#TVzoek\" [attr.disabled]=\"TvId!==0?'':null\">Opzoeken Nummer</button>\r\n\r\n        -->\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">DossierBeheerder</label></div>\r\n        <div class=\"col-sm-8\">\r\n            <select class=\"controlWidth\" DottedBorderBelow formControlName=\"dossierbeheerderID\">\r\n                <option value=\"\">Selecteer</option>\r\n                <option *ngFor=\"let o of dossierbeheerderItems\" [value]=\"o.dossierBeheerderID\">{{o.naam}}</option>\r\n\r\n\r\n            </select>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\">\r\n            <label class=\"pull-right\"> Datum start grondverzet </label>\r\n        </div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"datumStartGrondverzet\" class=\"form-control ng-trim-ignore\" tooltip=\"(bv. 31/1/2004)\" bsDatepicker placement=\"top left\" autocomplete=\"off\" [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\">\r\n            <label class=\"pull-right\">\r\n                Datum einde grondverzet\r\n            </label>\r\n        </div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"datumEindGrondverzet\" class=\"form-control ng-trim-ignore\" tooltip=\"(bv. 31/1/2004)\" bsDatepicker placement=\"top left\" autocomplete=\"off\" [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\"> Aangevoerde hoeveelheid </label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"aangevoerdeHoeveelheid\" class=\"form-control\" AllowOnlyNumbers maxlength=\"50\"></div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n        <h5 class=\"col-sm-11\">\r\n            Deelvolumes\r\n        </h5>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"row setTop paddingTop10px\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" *ngIf=\"!isBBR\">Deelvolumes</label> <label class=\"pull-right\" *ngIf=\"isBBR\">overzicht grondverzet  </label></div>\r\n\r\n        <div class=\"col-sm-8\">\r\n            <table class=\"GWTable\">\r\n                <thead>\r\n                    <tr>\r\n                        <th style=\"width:20px\">Nr.</th>\r\n                        <th *ngIf=\"!isBBR\">Beschrijving <img src=\"" + __webpack_require__(15) + "\" class=\"ibtn pull-right\" /></th>\r\n                        <th style=\"text-align: center\">(X)</th>\r\n                        <th style=\"text-align: center\">(Y)</th>\r\n                        <th style=\"text-align: center\">(Z)</th>\r\n                        <th *ngIf=\"!isBBR\">Aanvraag (m³) <img src=\"" + __webpack_require__(15) + "\" class=\"ibtn pull-right\" /></th>\r\n                        <th *ngIf=\"isBBR\">Hoeveelheid aangevraagd (m³)</th>\r\n                        <th *ngIf=\"isBBR\">Werkelijke hoeveelheid (m³)  <img src=\"" + __webpack_require__(15) + "\" class=\"ibtn pull-right\" /></th>\r\n                        <th *ngIf=\"!isBBR\">Beschikbaar (m³)</th>\r\n                        <th *ngIf=\"!isBBR\">Akkoord</th>\r\n\r\n                    </tr>\r\n                </thead>\r\n                <tbody formArrayName=\"gvtVolumes\">\r\n                    <tr *ngFor=\"let z of gvtVolumes.controls; let i = index;\" [formGroupName]=\"i\">\r\n                        <td><input type=\"hidden\" value=\"{{z.get('tvZoneID').value}}\" />{{z.controls[\"tvZoneNr\"].value}}</td>\r\n                        <td *ngIf=\"!isBBR\">\r\n                            <label class=\"pull-left\">{{z.get('beschrijving').value}}</label>\r\n                            <select class=\"pull-right\" DottedBorderBelow formControlName=\"bbrTVZoneToepassingCode\">\r\n                                <option value=\"1\">Bodem</option>\r\n                                <option value=\"2\">Niet vormgegevens bouwstof</option>\r\n                                <option value=\"3\">Vormgegevens bouwstof</option>\r\n                            </select>\r\n\r\n                        </td>\r\n\r\n                        <td style=\"text-align: center\">{{z.get('kgbuOmschrijving').value}}</td>\r\n                        <td style=\"text-align: center\">{{z.get('kgbiOmschrijving').value}}</td>\r\n                        <td style=\"text-align: center\">{{z.get('kgboOmschrijving').value}}</td>\r\n                        <td style=\"text-align: center\" *ngIf=\"!isBBR\">\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"geplandGebruik\" DottedBorderBelow AllowOnlyNumbers>\r\n                            <!--<label class=\"validationHint\">Bent u zeker dat u meer wil opgeven dan {{z.get('geplandGebruik').value}}, nl. meer dan het beschikbare saldo</label>-->\r\n                        </td>\r\n                        <td style=\"text-align: center\" *ngIf=\"isBBR\">  {{z.get('geplandGebruik').value}} </td>\r\n                        <td style=\"text-align: center\" *ngIf=\"isBBR\">\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"werkelijkeHoeveelheid\" DottedBorderBelow AllowOnlyNumbers>\r\n                            <!--<label class=\"validationHint\">Bent u zeker dat u meer wil opgeven dan {{z.get('werkelijkeHoeveelheid').value}}, nl. meer dan het beschikbare saldo</label>-->\r\n                        </td>\r\n                        <td style=\"text-align: center\" *ngIf=\"!isBBR\">{{z.get('beschikbaar').value}}</td>\r\n                        <td style=\"text-align: center\" *ngIf=\"!isBBR\">\r\n                            <input type=\"checkbox\" formControlName=\"akkoord\" value=\"\">\r\n\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"row\" *ngIf=\"isBBR\">\r\n        <div class=\"col-sm-3 \"><label class=\"pull-right bold\">Total hoeveelheid:</label></div>\r\n        <div class=\"col-sm-8\">\r\n            <label class=\"boldItem\">{{totalHoeveelheid}}</label>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <h5 class=\"col-sm-11\">Tracering</h5>\r\n    </div>\r\n    <!-- Adding table hier -->\r\n\r\n    <div class=\"row\">\r\n        <h5 class=\"col-sm-11\">Beoordeling </h5>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-8 col-sm-offset-3\">\r\n            <label><input type=\"checkbox\" formControlName=\"transportVerklaringOK\" value=\"\">Eindverklaring</label>\r\n        </div>\r\n    </div>\r\n    <div class=\"row setTop paddingTop10px\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Opmerking TV</label></div>\r\n        <div class=\"col-sm-8\"><textarea formControlName=\"opmerkingenTV\" rows=\"4\" cols=\"50\" maxlength=\"8000\" class=\"form-control setArea\"></textarea></div>\r\n    </div>\r\n    <div class=\"row setTop paddingTop10px\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\"> Opmerking klant</label></div>\r\n        <div class=\"col-sm-8\"><textarea formControlName=\"opmerkingenKlant\" rows=\"4\" cols=\"50\" maxlength=\"8000\" class=\"form-control setArea\"></textarea></div>\r\n    </div>\r\n    <div class=\"row setTop paddingTop10px\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\"> Interne opmerking GVT</label></div>\r\n        <div class=\"col-sm-8\"><textarea formControlName=\"interneOpmerkingGTM\" rows=\"4\" cols=\"50\" maxlength=\"750\" class=\"form-control setArea\"></textarea></div>\r\n    </div>\r\n\r\n    <div class=\"row setTop paddingTop10px\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Opmerkingen</label></div>\r\n        <div class=\"col-sm-8\"><textarea formControlName=\"opmerkingen\" rows=\"4\" cols=\"50\" maxlength=\"8000\" class=\"form-control setArea\"></textarea></div>\r\n    </div>\r\n    <div class=\"row setTop paddingTop10px\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\"> Interne opmerking GTM</label></div>\r\n        <div class=\"col-sm-8\"><textarea formControlName=\"interneOpmerking\" rows=\"4\" cols=\"50\" maxlength=\"8000\" class=\"form-control setArea\"></textarea></div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-8 col-sm-offset-3\">\r\n            <label><input type=\"checkbox\" formControlName=\"geschiktVoorWerfbezoek\" value=\"\">Geschikt voor werfbezoek</label>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\"> Vermoedelijke startdatum grondwerken</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"startDatumGrondwerken\" class=\"form-control ng-trim-ignore\" tooltip=\"(bv. 31/1/2004)\" bsDatepicker placement=\"top left\" autocomplete=\"off\" [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <h6 class=\"col-sm-3 pull-right\">Besluit</h6>\r\n    </div>\r\n    <div class=\" row\">\r\n        <div class=\"col-sm-3\">\r\n            <label class=\"pull-right\">Toekenning Kadastrale werkzone akkoord</label>\r\n        </div>\r\n        <div class=\"col-sm-8\">\r\n            <div class=\"form-check form-check-inline col-sm-2\">\r\n                <input class=\"form-check-input\" id=\"besluitUitgegravenGrondOk\" name=\"besluitUitgegravenGrond\" type=\"radio\" [value]=\"1\" formControlName=\"besluitUitgegravenGrond\" />\r\n                <label class=\"form-check-label\" for=\"actueleMilieuvergunningBeschikbaarOk\">ok </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline col-sm-2\">\r\n                <input class=\"form-check-input\" id=\"besluitUitgegravenGrondNok\" name=\"besluitUitgegravenGrond\" type=\"radio\" [value]=\"0\" formControlName=\"besluitUitgegravenGrond\" />\r\n                <label class=\"form-check-label\" for=\"besluitUitgegravenGrondNok\">nok </label>\r\n            </div>\r\n            <div class=\"form-check form-check-inline col-sm-2\">\r\n                <input class=\"form-check-input\" id=\"besluitUitgegravenGrondNvt\" name=\"besluitUitgegravenGrond\" type=\"radio\" [value]=\"2\" formControlName=\"besluitUitgegravenGrond\" />\r\n                <label class=\"form-check-label\" for=\"besluitUitgegravenGrondNvt\">n.v.t </label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Status</label></div>\r\n        <div class=\"col-sm-8\">\r\n            <select class=\"controlWidth\" DottedBorderBelow formControlName=\"bbrStatusID\">\r\n                <option value=\"\">Selecteer</option>\r\n                <option *ngFor=\"let o of statusListItems\" [value]=\"o.bbrStatusID\">{{o.status}}</option>\r\n\r\n\r\n            </select>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div [hidden]=\"gvtForm.valid\">\r\n        <div class=\"row setTop paddingTop10px\">\r\n            <div class=\"col-sm-8 col-sm-offset-3 validation\">\r\n                <div *ngIf=\"(gvtForm.get('klantContactAchterNaam').touched || gvtForm.get('klantContactAchterNaam').dirty) &&!gvtForm.get('klantContactAchterNaam').valid\" [hidden]=\"!gvtForm.controls['klantContactAchterNaam'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Achternaam is vereist.</label></div>\r\n                <div *ngIf=\"(gvtForm.get('klantContactVoorNaam').touched || gvtForm.get('klantContactVoorNaam').dirty) &&!gvtForm.get('klantContactVoorNaam').valid\" [hidden]=\"!gvtForm.controls['klantContactVoorNaam'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Voornaam is vereist.</label></div>\r\n                <div *ngIf=\"(gvtForm.get('klantContactTelefoon').touched || gvtForm.get('klantContactTelefoon').dirty) &&!gvtForm.get('klantContactTelefoon').valid\" [hidden]=\"!gvtForm.controls['klantContactTelefoon'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Telefoon is vereist.</label></div>\r\n                <div *ngIf=\"(gvtForm.get('klantKenmerk').touched || gvtForm.get('klantKenmerk').dirty) &&!gvtForm.get('klantKenmerk').valid\" [hidden]=\"!gvtForm.controls['klantKenmerk'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Referentie is vereist.</label></div>\r\n                <div *ngIf=\"(gvtForm.get('lX1').touched || gvtForm.get('lX1').dirty) && !gvtForm.get('lX1').valid\" [hidden]=\"!gvtForm.controls['lX1'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Lambert coördinaat X is vereist.</label></div>\r\n                <div *ngIf=\"(gvtForm.get('lX1').touched || gvtForm.get('lX1').dirty) && !gvtForm.get('lX1').valid\" [hidden]=\"!gvtForm.controls['lX1'].errors.min\" class=\"col-sm-8\"><label class=\"validation\">- Lambert coördinaat X dient min. 20000 te zijn.</label></div>\r\n                <div *ngIf=\"(gvtForm.get('lX1').touched || gvtForm.get('lX1').dirty) && !gvtForm.get('lX1').valid\" [hidden]=\"!gvtForm.controls['lX1'].errors.max\" class=\"col-sm-8\"><label class=\"validation\">- Lambert coördinaat X mag max. 280000 zijn.</label></div>\r\n                <div *ngIf=\"(gvtForm.get('lY1').touched || gvtForm.get('lY1').dirty) && !gvtForm.get('lY1').valid\" [hidden]=\"!gvtForm.controls['lY1'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Lambert coördinaat Y is vereist.</label></div>\r\n                <div *ngIf=\"(gvtForm.get('lY1').touched || gvtForm.get('lY1').dirty) && !gvtForm.get('lY1').valid\" [hidden]=\"!gvtForm.controls['lY1'].errors.min\" class=\"col-sm-8\"><label class=\"validation\">- Lambert coördinaat Y dient min. 150000 te zijn.</label></div>\r\n                <div *ngIf=\"(gvtForm.get('lY1').touched || gvtForm.get('lY1').dirty) && !gvtForm.get('lY1').valid\" [hidden]=\"!gvtForm.controls['lY1'].errors.max\" class=\"col-sm-8\"><label class=\"validation\">- Lambert coördinaat Y mag max. 250000 zijn.</label></div>\r\n                <div *ngIf=\"(gvtForm.get('klantContactEmail').touched || gvtForm.get('klantContactEmail').dirty) && !gvtForm.get('klantContactEmail').valid\" [hidden]=\"!gvtForm.controls['klantContactEmail'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">-Email  is vereist.</label></div>\r\n                <div *ngIf=\"(gvtForm.get('klantContactEmail').touched || gvtForm.get('klantContactEmail').dirty) && !gvtForm.get('klantContactEmail').valid\" [hidden]=\"!gvtForm.controls['klantContactEmail'].errors.pattern\" class=\"col-sm-8\"><label class=\"validation\">-Emailadres is niet geldig.</label></div>\r\n                <div *ngIf=\"(gvtForm.get('email').touched || gvtForm.get('email').dirty) && !gvtForm.get('email').valid\" [hidden]=\"!gvtForm.controls['email'].errors.pattern\" class=\"col-sm-8\"><label class=\"validation\">-Emailadres is niet geldig.</label></div>\r\n                <div *ngIf=\"(gvtForm.get('kadSectie').touched || gvtForm.get('kadSectie').dirty) && !gvtForm.get('kadSectie').valid\" [hidden]=\"!gvtForm.controls['kadSectie'].errors.pattern\" class=\"col-sm-8\"><label class=\"validation\">-A..Z.</label></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"paddingBottom40px\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-8 col-sm-offset-3\">\r\n                <button type=\"button\" [disabled]=\"!gvtForm.valid\" (click)=\"save()\" class=\"btn btn-default\">Opslaan</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <gw-documents [id]=\"gvtId\"\r\n                  [documentType]=\"gwDocumentType\"\r\n                  [emailHistoriekType]=\"emailHistoriekType\"\r\n                  [canSendNewEmail]=\"canSendNewEmail\"\r\n                  [status]=\"uploadStatus\"\r\n                  (uploadingFiles)=\"sendData($event)\">\r\n    </gw-documents>\r\n\r\n\r\n\r\n\r\n    <!--<gw-email-historiek-grid [id]=\"gvtId\"\r\n                             [emailType]=\"emailType\"\r\n                             [canSendNewEmail]=\"canSendNewEmail\"></gw-email-historiek-grid>-->\r\n\r\n</form>\r\n<div class=\"modal fade\" id=\"selectedGTM\" role=\"dialog\">\r\n    <gw-modal-grid (selected)=\"onGtmSelected($event)\"></gw-modal-grid>\r\n</div>\r\n";

/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(651);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".setTop {\r\n    align-items: flex-start;\r\n}\r\n\r\n.setArea {\r\n    border: 1px solid #DADADA;\r\n}\r\n\r\n\r\n.locationBorderBottom {\r\n    border-bottom: 1px solid #7faa2a;\r\n}\r\n\r\n\r\n.controlWidth {\r\n    width: 100%;\r\n}\r\n\r\n.bold{\r\n    font-weight:bold;\r\n}\r\n\r\n\r\n", ""]);

// exports


/***/ }),

/***/ 652:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid paddingTop10px\">\r\n    <!-- Default panel contents -->\r\n  \r\n        <div class=\"row\">\r\n            <div class=\"col-sm-5  pull-left\"><button type=\"button\" class=\"btn btn-default\">Reload all</button></div>\r\n        </div>\r\n      \r\n  \r\n    <div class=\"paddingTop0 paddingBottom0\" >\r\n        <gw-export-grid [files] =\"data\"></gw-export-grid>\r\n    </div>\r\n\r\n\r\n</div>";

/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(654);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".setTop {\r\n    align-items: flex-start;\r\n}\r\n\r\n.setArea {\r\n    border: 1px solid #DADADA;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.controlWidth {\r\n    width: 100%;\r\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ 655:
/***/ (function(module, exports) {

module.exports = "<h4>Detail Kleine Werken</h4>\r\n<form [formGroup]=\"kwForm\" class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Kleine Werken Nummer</label></div>\r\n        <div class=\"col-sm-8\"><label>{{kw?.kleineWervenMeldingID}}</label></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Uw Referentie</label></div>\r\n        <div class=\"col-sm-8\"><label>{{kw?.klantReferentie}}</label></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <h5 class=\"col-sm-11\">Grondwerker</h5>\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"kwForm.controls['gwFirmaNaam']?.errors\">* Firmanaam</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"gwFirmaNaam\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"kwForm.controls['gwAchternaam']?.errors\">* Achternaam</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"gwAchternaam\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"kwForm.controls['gwVoornaam']?.errors\">* Voornaam</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"gwVoornaam\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"kwForm.controls['gwTelefoon']?.errors\">* Telefoon</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"gwTelefoon\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"kwForm.controls['gwEmail']?.errors\">* Email</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"gwEmail\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Straat</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"gwStraat1\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">&nbsp;</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"gwStraat2\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Postcode</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"gwPostcode\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Plaats</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"gwPlaats\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <h5 class=\"col-sm-11\">Transporteur</h5>\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"kwForm.controls['tptFirmaNaam']?.errors\">* Firmanaam</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"tptFirmaNaam\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"kwForm.controls['tptAchternaam']?.errors\">* Achternaam</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"tptAchternaam\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"kwForm.controls['tptVoornaam']?.errors\">* Voornaam</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"tptVoornaam\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"kwForm.controls['tptTelefoon']?.errors\">* Telefoon</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"tptTelefoon\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"kwForm.controls['tptEmail']?.errors\">* Email</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"tptEmail\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Straat</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"tptStraat1\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">&nbsp;</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"tptStraat2\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Postcode</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"tptPostcode\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Plaats</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"tptPlaats\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <h5 class=\"col-sm-11\">Herkomst</h5>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Container Bedrijf</label></div>\r\n        <div class=\"col-sm-8\"><label>{{kw?.herkContainerBedrijfNaam}} {{kw?.herkIsContainerPark == true ? '(gezamenlijk container-/recyclagepark)' : ''}}</label></div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><input type=\"checkbox\" id=\"chkHerContainerBedrijf\" formControlName=\"herkIsContainerBedrijf\" DottedBorderBelow class=\"pull-right\"></div>\r\n        <div class=\"col-sm-8\"><label for=\"chkHerContainerBedrijf\" class=\"pull-left\"> De herkomst betreft een containerbedrijf</label></div>\r\n    </div>\r\n    <div *ngIf=\"isHerContainerBedrijf === true\" class=\"row\">\r\n        <div class=\"col-sm-3\"><label for=\"txtHerFirmaNaam\" class=\"pull-right\">Firmanaam:</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" id=\"txtHerFirmaNaam\" formControlName=\"herkContainerBedrijfNaam\" maxlength=\"50\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><input type=\"checkbox\" id=\"chkHerContainerPark\" formControlName=\"herkIsContainerPark\" DottedBorderBelow class=\"pull-right\"></div>\r\n        <div class=\"col-sm-8\"><label for=\"chkHerContainerPark\" class=\"pull-left\"> De herkomst betreft een gemeentelijk container-/recyclagepark</label></div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-8 col-sm-offset-3\">\r\n            <h6 class=\"locationBorderBottom\">Via Lokatie gegevens</h6>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Straat en Nummer</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"herkAdres1\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Straat en Nummer (vervolg)</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"herkAdres2\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Postcode</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"herkPostcode\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Gemeente</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"herkPlaats\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-8 col-sm-offset-3\">\r\n            <h6 class=\"paddingTop20px locationBorderBottom\">Via kadastrale gegevens</h6>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"kwForm.controls['herkKadAfdeling']?.errors\">Gemeente</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"herkKadAfdeling\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"kwForm.controls['herkKadAfdelingsNr']?.errors\">Afdelingsnummer</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"herkKadAfdelingsNr\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"kwForm.controls['herkKadSectie']?.errors\">Sectie</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"herkKadSectie\" class=\"form-control\" maxlength=\"1\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"kwForm.controls['herkKadNummers']?.errors\">Nummer(s)</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"herkKadNummers\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-8 col-sm-offset-3\">\r\n            <h6 class=\"paddingTop20px locationBorderBottom\">Via coördinaten (centrale punt aanvulling)</h6>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Lambert-coördinaten centraal punt</label></div>\r\n        <div class=\"col-sm-2\">\r\n            <div class=\"row\">\r\n                <label for=\"LX\" class=\"col-sm-2\" [class.validationHint]=\"kwForm.get('herkLX1').errors\">X </label>\r\n                <div class=\"col-sm-10\">\r\n                    <input type=\"text\" DottedBorderBelow formControlName=\"herkLX1\" class=\"form-control\" AllowOnlyNumbers tooltip=\"De X-coördinaat moet tussen 20000 en 280000 liggen\" placement=\"top\" maxlength=\"6\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n            <div class=\"row\">\r\n                <label for=\"LY\" class=\"col-sm-2\" [class.validationHint]=\"kwForm.get('herkLY1').errors\">Y </label>\r\n                <div class=\"col-sm-10\">\r\n                    <input type=\"text\" DottedBorderBelow formControlName=\"herkLY1\" class=\"form-control\" AllowOnlyNumbers tooltip=\"De Y-coördinaat moet tussen 150000 en 250000 liggen\" placement=\"top\" maxlength=\"6\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-8 col-sm-offset-3\"><label>Als u de Lambert coördinaten niet kent kan u ze op de volgende website opzoeken:<a href=\"#\" (click)=\"$event.preventDefault();toGeopuntHerkomst()\">www.geopunt.be</a></label></div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n        <h5 class=\"col-sm-11\">Bestemming {{kw?.isTop == true ? '(TOP)' : ''}}</h5>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><input type=\"checkbox\" id=\"chkBestContainerBedrijf\" formControlName=\"bestIsContainerBedrijf\" DottedBorderBelow class=\"pull-right\"></div>\r\n        <div class=\"col-sm-8\"><label for=\"chkBestContainerBedrijf\" class=\"pull-left\"> De bestemming betreft een containerbedrijf</label></div>\r\n    </div>\r\n    <div *ngIf=\"isBestContainerBedrijf === true\" class=\"row\">\r\n        <div class=\"col-sm-3\"><label for=\"txtBestFirmaNaam\" class=\"pull-right\">Firmanaam:</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" id=\"txtBestFirmaNaam\" formControlName=\"bestContainerBedrijfNaam\" maxlength=\"50\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><input type=\"checkbox\" id=\"chkBestContainerPark\" formControlName=\"bestIsContainerPark\" DottedBorderBelow class=\"pull-right\"></div>\r\n        <div class=\"col-sm-8\"><label for=\"chkBestContainerPark\" class=\"pull-left\"> De bestemming betreft een gemeentelijk container-/recyclagepark</label></div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-8 col-sm-offset-3\">\r\n            <h6 class=\"locationBorderBottom\">Via Lokatie gegevens</h6>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Organisatie</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"bestOrganisatie\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Straat en Nummer</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"bestAdres1\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Straat en Nummer (vervolg)</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"bestAdres2\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Postcode</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"bestPostcode\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Gemeente</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"bestPlaats\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-8 col-sm-offset-3\">\r\n            <h6 class=\"paddingTop20px locationBorderBottom\">Via kadastrale gegevens</h6>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"kwForm.controls['bestKadAfdeling']?.errors\">Gemeente</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"bestKadAfdeling\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"kwForm.controls['bestKadAfdelingsNr']?.errors\">Afdelingsnummer</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"bestKadAfdelingsNr\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"kwForm.controls['bestKadSectie']?.errors\">Sectie</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"bestKadSectie\" class=\"form-control\" maxlength=\"1\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"kwForm.controls['bestKadNummers']?.errors\">Nummer(s)</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"bestKadNummers\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-8 col-sm-offset-3\">\r\n            <h6 class=\"paddingTop20px locationBorderBottom\">Via coördinaten (centrale punt aanvulling)</h6>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Lambert-coördinaten centraal punt</label></div>\r\n        <div class=\"col-sm-2\">\r\n            <div class=\"row\">\r\n                <label for=\"LX\" class=\"col-sm-2\" [class.validationHint]=\"kwForm.get('bestLX1').errors\">X </label>\r\n                <div class=\"col-sm-10\">\r\n                    <input type=\"text\" DottedBorderBelow formControlName=\"bestLX1\" class=\"form-control\" AllowOnlyNumbers tooltip=\"De X-coördinaat moet tussen 20000 en 280000 liggen\" placement=\"top\" maxlength=\"6\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n            <div class=\"row\">\r\n                <label for=\"LY\" class=\"col-sm-2\" [class.validationHint]=\"kwForm.get('bestLY1').errors\">Y </label>\r\n                <div class=\"col-sm-10\">\r\n                    <input type=\"text\" DottedBorderBelow formControlName=\"bestLY1\" class=\"form-control\" AllowOnlyNumbers tooltip=\"De Y-coördinaat moet tussen 150000 en 250000 liggen\" placement=\"top\" maxlength=\"6\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-8 col-sm-offset-3\"><label>Als u de Lambert coördinaten niet kent kan u ze op de volgende website opzoeken:<a href=\"#\" (click)=\"$event.preventDefault();toGeopuntBestemming()\">www.geopunt.be</a></label></div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <h5 class=\"col-sm-11\">Afgevoerd Volume</h5>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Vooropgestelde Transport Datum</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" formControlName=\"geplandeStartDatum\" class=\"form-control ng-trim-ignore controlWidth\" bsDatepicker placement=\"top left\" DottedBorderBelow autocomplete=\"off\" [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n\r\n        <!--<div class=\"col-sm-8\"><label>{{kw?.geplandeStartDatum | date:\"dd/MM/yyyy\"}}</label></div>-->\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Vooropgestelde Volume</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"geplandVolume\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"row setTop paddingTop10px\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\" [class.validationHint]=\"kwForm.controls['werkelijkeStartDatum']?.errors\">* Werkelijke Startdatum transport</label></div>\r\n        <!--<div class=\"col-sm-8\"><input type=\"text\"  formControlName=\"werkelijkeStartDatum\" class=\"form-control ng-trim-ignore controlWidth\" bsDatepicker placement=\"top left\" DottedBorderBelow autocomplete=\"off\" [bsConfig]=\"{ showWeekNumbers: false }\" (bsValueChange)=\"EindDatumValidation()\"></div>-->\r\n        <div class=\"col-sm-8\"><input type=\"text\" formControlName=\"werkelijkeStartDatum\" class=\"form-control ng-trim-ignore controlWidth\" bsDatepicker placement=\"top left\" DottedBorderBelow autocomplete=\"off\" [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n    </div>\r\n    <div class=\"row setTop paddingTop10px\">\r\n        <div class=\"col-sm-3\"><label for=\"txtEindDatum\" class=\"pull-right\" [class.validationHint]=\"kwForm.controls['werkelijkeEindDatum']?.errors\">* Werkelijke Einddatum transport</label></div>\r\n        <!--<div class=\"col-sm-8\"><input type=\"text\" id=\"txtEindDatum\" formControlName=\"werkelijkeEindDatum\" class=\"form-control ng-trim-ignore controlWidth\" bsDatepicker placement=\"top left\" DottedBorderBelow autocomplete=\"off\" [bsConfig]=\"{ showWeekNumbers: false }\" (bsValueChange)=\"StartDatumValidation()\"></div>-->\r\n        <div class=\"col-sm-8\"><input type=\"text\" id=\"txtEindDatum\" formControlName=\"werkelijkeEindDatum\" class=\"form-control ng-trim-ignore controlWidth\" bsDatepicker placement=\"top left\" DottedBorderBelow autocomplete=\"off\" [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label for=\"txtVolume\" class=\"pull-right\" [class.validationHint]=\"kwForm.controls['werkelijkVolume']?.errors\">* Werkelijk Volume</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" id=\"txtVolume\" formControlName=\"werkelijkVolume\" DottedBorderBelow AllowOnlyNumbers class=\"form-control\"></div>\r\n    </div>\r\n    <!--<div class=\"row\">\r\n        <div class=\"col-sm-3\"></div>\r\n        <div class=\"col-sm-8\">\r\n            <label>\r\n                <input type=\"checkbox\" formControlName=\"sendOK\" [class.validationHint]=\"kwForm.controls['sendOK'].errors\">\r\n                Ondergetekende verklaart hierbij de aangegeven partij grond in de aangegeven periode naar de opgegeven bestemming gevoerd te hebben.\r\n            </label>\r\n        </div>\r\n    </div>-->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Status</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"status\" class=\"form-control\" maxlength=\"50\"></div>\r\n    </div>\r\n\r\n    <div [hidden]=\"kwForm.valid\">\r\n        <div class=\"row setTop paddingTop10px\">\r\n            <div class=\"col-sm-8 col-sm-offset-3 validation\">\r\n                <div *ngIf=\"(kwForm.get('gwFirmaNaam').touched || kwForm.get('gwFirmaNaam').dirty) && !kwForm.get('gwFirmaNaam').valid\" [hidden]=\"!kwForm.controls['gwFirmaNaam'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Grondwerker Firmanaam is vereist.</label></div>\r\n                <div *ngIf=\"(kwForm.get('gwAchternaam').touched || kwForm.get('gwAchternaam').dirty) && !kwForm.get('gwAchternaam').valid\" [hidden]=\"!kwForm.controls['gwAchternaam'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Grondwerker Achternaam is vereist.</label></div>\r\n                <div *ngIf=\"(kwForm.get('gwVoornaam').touched || kwForm.get('gwVoornaam').dirty) && !kwForm.get('gwVoornaam').valid\" [hidden]=\"!kwForm.controls['gwVoornaam'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Grondwerker Voornaam is vereist.</label></div>\r\n                <div *ngIf=\"(kwForm.get('gwTelefoon').touched || kwForm.get('gwTelefoon').dirty) && !kwForm.get('gwTelefoon').valid\" [hidden]=\"!kwForm.controls['gwTelefoon'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Grondwerker Telefoon is vereist.</label></div>\r\n                <div *ngIf=\"(kwForm.get('gwEmail').touched || kwForm.get('gwEmail').dirty) && !kwForm.get('gwEmail').valid\" [hidden]=\"!kwForm.controls['gwEmail'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Grondwerker Email is vereist.</label></div>\r\n                <div *ngIf=\"(kwForm.get('gwEmail').touched || kwForm.get('gwEmail').dirty) && !kwForm.get('gwEmail').valid\" [hidden]=\"!kwForm.controls['gwEmail'].errors.pattern\" class=\"col-sm-8\"><label class=\"validation\">- Emailadres Grondwerker is niet geldig.</label></div>\r\n\r\n                <div *ngIf=\"(kwForm.get('tptFirmaNaam').touched || kwForm.get('tptFirmaNaam').dirty) && !kwForm.get('tptFirmaNaam').valid\" [hidden]=\"!kwForm.controls['tptFirmaNaam'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Transporteur Firmanaam is vereist.</label></div>\r\n                <div *ngIf=\"(kwForm.get('tptAchternaam').touched || kwForm.get('tptAchternaam').dirty) && !kwForm.get('tptAchternaam').valid\" [hidden]=\"!kwForm.controls['tptAchternaam'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Transporteur Achternaam is vereist.</label></div>\r\n                <div *ngIf=\"(kwForm.get('tptVoornaam').touched || kwForm.get('tptVoornaam').dirty) && !kwForm.get('tptVoornaam').valid\" [hidden]=\"!kwForm.controls['tptVoornaam'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Transporteur Voornaam is vereist.</label></div>\r\n                <div *ngIf=\"(kwForm.get('tptTelefoon').touched || kwForm.get('tptTelefoon').dirty) && !kwForm.get('tptTelefoon').valid\" [hidden]=\"!kwForm.controls['tptTelefoon'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Transporteur Telefoon is vereist.</label></div>\r\n                <div *ngIf=\"(kwForm.get('tptEmail').touched || kwForm.get('tptEmail').dirty) && !kwForm.get('tptEmail').valid\" [hidden]=\"!kwForm.controls['tptEmail'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Transporteur Email is vereist.</label></div>\r\n                <div *ngIf=\"(kwForm.get('tptEmail').touched || kwForm.get('tptEmail').dirty) && !kwForm.get('tptEmail').valid\" [hidden]=\"!kwForm.controls['tptEmail'].errors.pattern\" class=\"col-sm-8\"><label class=\"validation\">- Emailadres Transporteur is niet geldig.</label></div>\r\n\r\n                <div *ngIf=\"(kwForm.get('bestLX1').touched || kwForm.get('bestLX1').dirty) && !kwForm.get('bestLX1').valid\" [hidden]=\"!kwForm.controls['bestLX1'].errors.min\" class=\"col-sm-8\"><label class=\"validation\">- Lambert coördinaat X dient min. 20000 te zijn.</label></div>\r\n                <div *ngIf=\"(kwForm.get('bestLX1').touched || kwForm.get('bestLX1').dirty) && !kwForm.get('bestLX1').valid\" [hidden]=\"!kwForm.controls['bestLX1'].errors.max\" class=\"col-sm-8\"><label class=\"validation\">- Lambert coördinaat X mag max. 280000 zijn.</label></div>\r\n                <div *ngIf=\"(kwForm.get('bestLY1').touched || kwForm.get('bestLY1').dirty) && !kwForm.get('bestLY1').valid\" [hidden]=\"!kwForm.controls['bestLY1'].errors.min\" class=\"col-sm-8\"><label class=\"validation\">- Lambert coördinaat Y dient min. 150000 te zijn.</label></div>\r\n                <div *ngIf=\"(kwForm.get('bestLY1').touched || kwForm.get('bestLY1').dirty) && !kwForm.get('bestLY1').valid\" [hidden]=\"!kwForm.controls['bestLY1'].errors.max\" class=\"col-sm-8\"><label class=\"validation\">- Lambert coördinaat Y mag max. 250000 zijn.</label></div>\r\n                <div *ngIf=\"invalidDOPLambert\" class=\"col-sm-8\"><label class=\"validation\">De bestemming lambert gegevens werden slechts gedeeltelijk aangevuld</label></div>\r\n                <div *ngIf=\"invalidHerkomstKadaster\" class=\"col-sm-8\"><label class=\"validation\">De herkomst kadastrale gegevens werden slechts gedeeltelijk aangevuld</label></div>\r\n                <div *ngIf=\"invalidHerkomstLokatie\" class=\"col-sm-8\"><label class=\"validation\">De herkomst lokatie gegevens werden slechts gedeeltelijk aangevuld</label></div>\r\n                <div *ngIf=\"!isHerkomstValid\" class=\"col-sm-8\"><label class=\"validation\">Opgave van de herkomst lokatie is vereist</label></div>\r\n\r\n                <div *ngIf=\"(kwForm.get('herkLX1').touched || kwForm.get('herkLX1').dirty) && !kwForm.get('herkLX1').valid\" [hidden]=\"!kwForm.controls['herkLX1'].errors.min\" class=\"col-sm-8\"><label class=\"validation\">- Lambert coördinaat X dient min. 20000 te zijn.</label></div>\r\n                <div *ngIf=\"(kwForm.get('herkLX1').touched || kwForm.get('herkLX1').dirty) && !kwForm.get('herkLX1').valid\" [hidden]=\"!kwForm.controls['herkLX1'].errors.max\" class=\"col-sm-8\"><label class=\"validation\">- Lambert coördinaat X mag max. 280000 zijn.</label></div>\r\n                <div *ngIf=\"(kwForm.get('herkLY1').touched || kwForm.get('herkLY1').dirty) && !kwForm.get('herkLY1').valid\" [hidden]=\"!kwForm.controls['herkLY1'].errors.min\" class=\"col-sm-8\"><label class=\"validation\">- Lambert coördinaat Y dient min. 150000 te zijn.</label></div>\r\n                <div *ngIf=\"(kwForm.get('herkLY1').touched || kwForm.get('herkLY1').dirty) && !kwForm.get('herkLY1').valid\" [hidden]=\"!kwForm.controls['herkLY1'].errors.max\" class=\"col-sm-8\"><label class=\"validation\">- Lambert coördinaat Y mag max. 250000 zijn.</label></div>\r\n                <div *ngIf=\"invalidHerkomstLambert\" class=\"col-sm-8\"><label class=\"validation\">De herkomst lambert gegevens werden slechts gedeeltelijk aangevuld</label></div>\r\n                <div *ngIf=\"invalidDOPKadaster\" class=\"col-sm-8\"><label class=\"validation\">De bestemming kadastrale gegevens werden slechts gedeeltelijk aangevuld</label></div>\r\n                <div *ngIf=\"invalidDOPLambert\" class=\"col-sm-8\"><label class=\"validation\">De bestemming lambert gegevens werden slechts gedeeltelijk aangevuld</label></div>\r\n                <div *ngIf=\"!isDOPValid\" class=\"col-sm-8\"><label class=\"validation\">Opgave lokatie van bestemming is vereist</label></div>\r\n\r\n                <div *ngIf=\"(kwForm.get('werkelijkeStartDatum').touched || kwForm.get('werkelijkeStartDatum').dirty) && !kwForm.get('werkelijkeStartDatum').valid\" [hidden]=\"!kwForm.controls['werkelijkeStartDatum'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Werkelijke StartDatum is vereist.</label></div>\r\n                <div *ngIf=\"(kwForm.get('werkelijkeEindDatum').touched || kwForm.get('werkelijkeEindDatum').dirty) && !kwForm.get('werkelijkeEindDatum').valid\" [hidden]=\"!kwForm.controls['werkelijkeEindDatum'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Werkelijke Eind datum is vereist.</label></div>\r\n                <div *ngIf=\"(kwForm.get('werkelijkVolume').touched || kwForm.get('werkelijkVolume').dirty) && !kwForm.get('werkelijkVolume').valid\" [hidden]=\"!kwForm.controls['werkelijkVolume'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Werkelijk Volume is vereist.</label></div>\r\n                <!--<div *ngIf=\"(kwForm.get('werkelijkeStartDatum').touched || kwForm.get('werkelijkeStartDatum').dirty) && !kwForm.get('werkelijkeStartDatum').valid\" [hidden]=\"!kwForm.controls['werkelijkeStartDatum'].errors || kwForm.controls['werkelijkeStartDatum'].value < kwForm.controls['werkelijkeEindDatum'].value\" class=\"col-sm-8\"><label class=\"validation\">- Werkelijke Start datum kan niet voorbij de Werkelijke Eind datum liggen.</label></div>\r\n                <div *ngIf=\"(kwForm.get('werkelijkeEindDatum').touched || kwForm.get('werkelijkeEindDatum').dirty) && !kwForm.get('werkelijkeEindDatum').valid\" [hidden]=\"!kwForm.controls['werkelijkeEindDatum'].errors || kwForm.controls['werkelijkeStartDatum'].value < kwForm.controls['werkelijkeEindDatum'].value\" class=\"col-sm-8\"><label class=\"validation\">- Werkelijke Eind datum kan niet eerder ingesteld worden dan de Werkelijke Start Datum.</label></div>\r\n                <div *ngIf=\"(kwForm.get('werkelijkeEindDatum').touched || kwForm.get('werkelijkeEindDatum').dirty) && !kwForm.get('werkelijkeEindDatum').valid\" [hidden]=\"!kwForm.controls['werkelijkeEindDatum'].errors || kwForm.controls['werkelijkeEindDatum'].value <= kwForm.controls['werkelijkeAfsluitDatum'].value\" class=\"col-sm-8\"><label class=\"validation\">- Werkelijke Eind datum kan niet voorbij de afsluit datum (vandaag) worden ingesteld.</label></div>-->\r\n\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <!--<div class=\"row\">\r\n        <h5 class=\"col-sm-11\">Documenten</h5>\r\n    </div>\r\n    <div class=\"row, NgxTable\" *ngIf=\"pdfrows!=null && pdfrows.length > 0\">\r\n        <div class=\"col-sm-8 col-sm-offset-3\" *ngFor=\"let r of pdfrows;\">\r\n            <a [routerLink]=\"\" (click)=\"showFileId(r.id)\" class=\"pdfLink\"><label><u>{{r.fileName}}</u></label></a>\r\n        </div>\r\n    </div>-->\r\n\r\n    <gw-documents [id]=\"kwID\"\r\n                  [documentType]=\"gwDocumentType\"\r\n                  [emailHistoriekType]=\"emailHistoriekType\"  \r\n                  [canSendNewEmail]=\"canSendNewEmail\"\r\n                  [status]=\"uploadStatus\"\r\n                  (uploadingFiles)=\"sendData($event)\">\r\n    </gw-documents>\r\n\r\n\r\n    <!--<gw-email-historiek-grid [id]=\"kwID\"\r\n                             [emailType]=\"emailType\"\r\n                             [canSendNewEmail]=\"canSendNewEmail\"></gw-email-historiek-grid>-->\r\n\r\n\r\n</form>";

/***/ }),

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(657);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 657:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".setTop {\r\n    align-items: flex-start;\r\n}\r\n\r\n.setArea {\r\n    border: 1px solid #DADADA;\r\n}\r\n\r\n\r\n.locationBorderBottom {\r\n    border-bottom: 1px solid #7faa2a;\r\n}\r\n\r\n\r\n.controlWidth {\r\n    width: 100%;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 658:
/***/ (function(module, exports) {

module.exports = "\r\n<h4>Aanvraag verklaring LMRP-Puin</h4>\r\n<form [formGroup]=\"puinForm\" class=\"container-fluid paddingTop10px\">\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-11\"><h5>Klant Aanvrager Gegevens</h5></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label for=\"txtKlantContactAchterNaam\" class=\"pull-right\" [class.validationHint]=\"puinForm.get('klantContactAchterNaam')?.errors\">* Familienaam</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" id=\"txtKlantContactAchterNaam\" formControlName=\"klantContactAchterNaam\" maxlength=\"50\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label for=\"txtKlantContactVoorNaam\" class=\"pull-right\" [class.validationHint]=\"puinForm.get('klantContactVoorNaam').errors\">* Naam</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" id=\"txtKlantContactVoorNaam\" formControlName=\"klantContactVoorNaam\" maxlength=\"50\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label for=\"txtKlantContactTelefoon\" class=\"pull-right\" [class.validationHint]=\"puinForm.get('klantContactTelefoon').errors\">* Telefoon / Gsm</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" id=\"txtKlantContactTelefoon\" formControlName=\"klantContactTelefoon\" maxlength=\"50\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label for=\"txtKlantContactEmail\" class=\"pull-right\" [class.validationHint]=\"puinForm.get('klantContactEmail')?.errors\">* Email</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" id=\"txtKlantContactEmail\" email formControlName=\"klantContactEmail\" maxlength=\"50\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label for=\"txtKlantKenmerk\" class=\"pull-right\" [class.validationHint]=\"puinForm.get('klantKenmerk').errors\">* Uw Referentie</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" id=\"txtKlantKenmerk\" formControlName=\"klantKenmerk\" maxlength=\"50\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n\r\n    <!--<div class=\"row\">\r\n        <div class=\"col-sm-11\"><h5>Herkomst uitgezeefd puin</h5></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-8 col-sm-offset-3\"><label class=\"pull-left\">Geef de herkomst van het uitgezeefde puin aan op basis van het Technisch Verslag, en de hoeveelheden die u wenst te breken.</label></div>\r\n    </div>-->\r\n    <!--<puintechnischverslagdata [parentForm]=\"puinForm\"\r\n                              [showAddRemoveOptions]=\"showAddRemoveOptionForTechnischVerslagBlock\"\r\n                              [indieningsTypeId]=\"indieningsTypeId\"\r\n                              (technischVerslagNumberChanged)=\"tvNumberChanged($event)\"></puintechnischverslagdata>\r\n\r\n    <div class=\"row setTop paddingTop10px\">\r\n        <div class=\"col-sm-3\"><label for=\"txtStartDatum\" class=\"pull-right\" [class.validationHint]=\"puinForm.controls['StartDatumAfvoerPuin']?.errors\">* Vermoedelijke startdatum afvoer puin</label></div>\r\n        <div class=\"col-sm-3\"><input type=\"text\" id=\"txtStartDatum\" formControlName=\"StartDatumAfvoerPuin\" class=\"form-control ng-trim-ignore controlWidth\" bsDatepicker placement=\"top left\" DottedBorderBelow autocomplete=\"off\" [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n    </div>\r\n    <div [hidden]=\"isKlantSectionValid()\">\r\n        <div class=\"row setTop paddingTop10px\">\r\n            <div class=\"col-sm-8 col-sm-offset-3 validation\">\r\n                <div *ngIf=\"(puinForm.get('KlantContactAchterNaam').touched || puinForm.get('KlantContactAchterNaam').dirty) && !puinForm.get('KlantContactAchterNaam').valid\" [hidden]=\"!puinForm.controls['KlantContactAchterNaam'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Familienaam is vereist.</label></div>\r\n                <div *ngIf=\"(puinForm.get('KlantContactVoorNaam').touched || puinForm.get('KlantContactVoorNaam').dirty) && !puinForm.get('KlantContactVoorNaam').valid\" [hidden]=\"!puinForm.controls['KlantContactVoorNaam'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Naam is vereist.</label></div>\r\n                <div *ngIf=\"(puinForm.get('KlantContactTelefoon').touched || puinForm.get('KlantContactTelefoon').dirty) && !puinForm.get('KlantContactTelefoon').valid\" [hidden]=\"!puinForm.controls['KlantContactTelefoon'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Telefoon is vereist.</label></div>\r\n                <div *ngIf=\"(puinForm.get('KlantContactEmail').touched || puinForm.get('KlantContactEmail').dirty) && !puinForm.get('KlantContactEmail').valid\" [hidden]=\"!puinForm.controls['KlantContactEmail'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Email Aanvrager is vereist.</label></div>\r\n                <div *ngIf=\"klantemailValidationMessage\" class=\"col-sm-8\"><label class=\"validation\">{{klantemailValidationMessage}}</label></div>\r\n                <div *ngIf=\"(puinForm.get('StartDatumAfvoerPuin').touched || puinForm.get('StartDatumAfvoerPuin').dirty) && !puinForm.get('StartDatumAfvoerPuin').valid\" [hidden]=\"!puinForm.controls['StartDatumAfvoerPuin'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Start Datum is vereist.</label></div>\r\n                <div *ngIf=\"puinForm.get('StartDatumAfvoerPuin').errors && puinForm.get('StartDatumAfvoerPuin').dirty && puinForm.get('StartDatumAfvoerPuin').errors.DateLessThanToday\" class=\"col-sm-8\"><label class=\"validation\">- StartDatum kan niet ingesteld worden op een datum in het verleden.</label></div>\r\n            </div>\r\n        </div>\r\n    </div>-->\r\n\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-11\"><h5>Bestemming - {{title}}</h5></div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label for=\"txtEigenaar\" class=\"pull-right\" [class.validationHint]=\"puinForm.get('eigenaar').errors\">* Naam</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" id=\"txtEigenaar\" formControlName=\"eigenaar\" maxlength=\"50\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label for=\"txtAdres1\" class=\"pull-right\">Straat en nummer</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" id=\"txtAdres1\" formControlName=\"adres1\" maxlength=\"100\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label for=\"txtAdres2\" class=\"pull-right\">Straat en nummer (vervolg)</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" id=\"txtAdres2\" formControlName=\"adres2\" maxlength=\"100\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label for=\"txtPostcode\" class=\"pull-right\">Postcode</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" id=\"txtPostcode\" formControlName=\"postcode\" maxlength=\"10\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label for=\"txtGemeente\" class=\"pull-right\">Gemeente</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" id=\"txtGemeente\" formControlName=\"plaats\" maxlength=\"50\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label for=\"txtContactPersoon\" class=\"pull-right\" [class.validationHint]=\"puinForm.get('contactPersoon').errors\">* ContactPersoon</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" id=\"txtContactPersoon\" formControlName=\"contactPersoon\" maxlength=\"50\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label for=\"txtTelefoon\" class=\"pull-right\">Telefoon</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" id=\"txtTelefoon\" formControlName=\"telefoon\" maxlength=\"50\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label for=\"txtEmail\" class=\"pull-right\">Email</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" id=\"txtEmail\" formControlName=\"email\" maxlength=\"50\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-8 col-sm-offset-3\"><label class=\"pull-left\">(Voor Eigenaar/Exploitant is telefoon of email verplicht)</label></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label for=\"txtCertificaatNummerBestemming\" class=\"pull-right\" [class.validationHint]=\"puinForm.get('brekerCertificaatNummer').errors\">* Nummer certificaat</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" id=\"txtCertificaatNummerBestemming\" formControlName=\"brekerCertificaatNummer\" maxlength=\"50\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-10 col-sm-offset-1\">\r\n            <h6>Lokatie waar het puin wordt gebroken</h6>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label for=\"txtafzetReferentie\" class=\"pull-right\">Referentie</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" id=\"txtafzetReferentie\" formControlName=\"afzetReferentie\" maxlength=\"50\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label for=\"txtExplAdres1\" class=\"pull-right\" [class.validationHint]=\"puinForm.get('afzetAdres1').errors\">Straat en nummer</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" id=\"txtExplAdres1\" formControlName=\"afzetAdres1\" maxlength=\"100\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label for=\"txtExplAdres2\" class=\"pull-right\">Straat en nummer (vervolg)</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" id=\"txtExplAdres2\" formControlName=\"afzetAdres2\" maxlength=\"100\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label for=\"txtExplPostcode\" class=\"pull-right\" [class.validationHint]=\"puinForm.get('afzetPostcode').errors\">Postcode</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" id=\"txtExplPostcode\" formControlName=\"afzetPostcode\" maxlength=\"10\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label for=\"txtExplGemeente\" class=\"pull-right\" [class.validationHint]=\"puinForm.get('afzetPlaats').errors\">Gemeente</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" id=\"txtExplGemeente\" formControlName=\"afzetPlaats\" maxlength=\"50\" DottedBorderBelow class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-8 col-sm-offset-3\"><label class=\"pull-left\" [class.validationHint]=\"puinForm.get('afzetPlaats').errors\">('Straat en nummer' en postcode en gemeente is verplicht)</label></div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-10 col-sm-offset-1\"><h6>Aanvullende Gegevens</h6></div>\r\n    </div>\r\n    <div class=\"row setTop paddingTop10px\">\r\n        <div class=\"col-sm-3\"><label for=\"txtOpmerkingen\" class=\"pull-right\">Klant opmerkingen</label></div>\r\n        <div class=\"col-sm-8\"><textarea id=\"txtOpmerkingen\" formControlName=\"klantOpmerkingen\" rows=\"4\" cols=\"50\" maxlength=\"750\" class=\"form-control setArea\"></textarea></div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <h5 class=\"col-sm-11\">Deelvolumes</h5>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <h5 class=\"col-sm-11\">Evaluatie</h5>\r\n    </div>\r\n\r\n    <div class=\"row  setTop paddingTop10px\">\r\n\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Uitspraak absest</label></div>\r\n\r\n\r\n        <div class=\"col-sm-5\">\r\n            <textarea formControlName=\"uitspraakAbsest\" rows=\"7\" cols=\"50\" maxlength=\"750\" class=\"form-control setArea\"></textarea>\r\n        </div>\r\n\r\n        <div class=\"form-check form-check-inline col-sm-1\">\r\n            <input class=\"form-check-input\" name=\"check_uitspraak_absest\" type=\"radio\" [value]=\"1\" formControlName=\"check_uitspraak_absest\" />\r\n            <label class=\"form-check-label\" for=\"actueleMilieuvergunningBeschikbaarNvt\">Ok</label>\r\n        </div>\r\n        <div class=\"form-check form-check-inline col-sm-1\">\r\n            <input class=\"form-check-input\" name=\"check_uitspraak_absest\" type=\"radio\" [value]=\"2\" formControlName=\"check_uitspraak_absest\" />\r\n            <label class=\"form-check-label\" for=\"actueleMilieuvergunningBeschikbaarNvt\">Nok</label>\r\n        </div>\r\n        <div class=\"form-check form-check-inline col-sm-1\">\r\n            <input class=\"form-check-input\" name=\"check_uitspraak_absest\" type=\"radio\" [value]=\"3\" formControlName=\"check_uitspraak_absest\" />\r\n            <label class=\"form-check-label\" for=\"actueleMilieuvergunningBeschikbaarNvt\">Nvt</label>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-5 col-sm-offset-3\">\r\n            <button type=\"button\" style=\"vertical-align:middle\" class=\"btn btn-default marginTop10px pull-right\" data-toggle=\"modal\" data-target=\"#selectedUitSpraaktAbsest\"><span>Absest evaluatie</span> </button>\r\n        </div>\r\n    </div>\r\n    <div class=\"row  setTop paddingTop10px\">\r\n\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Uitspraak storende stoffen</label></div>\r\n\r\n        <div class=\"col-sm-5\"><textarea formControlName=\"uitspraatStorendeStoffen\" rows=\"7\" cols=\"50\" maxlength=\"750\" class=\"form-control setArea\"></textarea></div>\r\n\r\n        <div class=\"form-check form-check-inline col-sm-1\">\r\n            <input class=\"form-check-input\" name=\"check_uitspraat_storende_stoffen\" type=\"radio\" [value]=\"1\" formControlName=\"check_uitspraat_storende_stoffen\" />\r\n            <label class=\"form-check-label\" for=\"actueleMilieuvergunningBeschikbaarNvt\">Ok</label>\r\n        </div>\r\n        <div class=\"form-check form-check-inline col-sm-1\">\r\n            <input class=\"form-check-input\" name=\"check_uitspraat_storende_stoffen\" type=\"radio\" [value]=\"2\" formControlName=\"check_uitspraat_storende_stoffen\" />\r\n            <label class=\"form-check-label\" for=\"actueleMilieuvergunningBeschikbaarNvt\">Nok</label>\r\n        </div>\r\n        <div class=\"form-check form-check-inline col-sm-1\">\r\n            <input class=\"form-check-input\" name=\"check_uitspraat_storende_stoffen\" type=\"radio\" [value]=\"3\" formControlName=\"check_uitspraat_storende_stoffen\" />\r\n            <label class=\"form-check-label\" for=\"actueleMilieuvergunningBeschikbaarNvt\">Nvt</label>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-5 col-sm-offset-3\">\r\n            <button type=\"button\" style=\"vertical-align:middle\" class=\"btn btn-default marginTop10px pull-right\" data-toggle=\"modal\" data-target=\"#selectedUitSpraaktStorendeStoffen\"><span>Absest evaluatie</span> </button>\r\n        </div>\r\n    </div>\r\n    <div class=\"row setTop paddingTop10px\">\r\n        <div class=\"col-sm-3\"><label for=\"txtOpmerkingen\" class=\"pull-right\">Internal opmerkingen</label></div>\r\n        <div class=\"col-sm-8\"><textarea id=\"txtOpmerkingen\" formControlName=\"opmerkingen\" rows=\"4\" cols=\"50\" maxlength=\"750\" class=\"form-control setArea\"></textarea></div>\r\n    </div>\r\n    <div class=\"row setTop paddingTop10px\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-right\">Status</label></div>\r\n        <div class=\"col-sm-8\">\r\n            <select class=\"controlWidth\" DottedBorderBelow formControlName=\"statusID\">\r\n                <!--<option [value]=\"1\">Goedgekeurd</option>\r\n                <option [value]=\"2\"></option>\r\n                <option [value]=\"3\"></option>-->\r\n                <option *ngFor=\"let o of statusListItems\" [value]=\"o.tvStatusID\">{{o.status}}</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <!--<div [hidden]=\"allIsValid()\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-8 col-sm-offset-3 validation\">\r\n                <div *ngIf=\"(puinForm.get(eigenaar).touched || puinForm.get(eigenaar).dirty) && !puinForm.get(eigenaar).valid\" [hidden]=\"!puinForm.get(eigenaar).errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Naam Eigenaar/Exploitant is vereist.</label></div>\r\n                <div *ngIf=\"(puinForm.get(contactPersoon).touched || puinForm.get(contactPersoon).dirty) && !puinForm.get(contactPersoon).valid\" [hidden]=\"!puinForm.get(contactPersoon).errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Eigenaar/Exploitant Contact Persoon is vereist.</label></div>\r\n                <div *ngIf=\"(puinForm.get(brekerCertificaatNummer).touched || puinForm.get(brekerCertificaatNummer).dirty) && !puinForm.get(brekerCertificaatNummer).valid\" [hidden]=\"!puinForm.get(brekerCertificaatNummer).errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Breker Cerificaat Nummer is vereist.</label></div>\r\n\r\n                <div *ngIf=\"bestemailValidationMessage\" class=\"col-sm-8\"><label class=\"validation\">{{bestemailValidationMessage}}</label></div>\r\n                <div *ngIf=\"bestemmingValidationMessage\" class=\"col-sm-8\"><label class=\"validation\">{{bestemmingValidationMessage}}</label></div>\r\n            </div>\r\n        </div>\r\n    </div>-->\r\n    <!--<div class=\"row\">\r\n        <div class=\"col-sm-8 col-sm-offset-3\">\r\n            <div><label class=\"pull-left\">(Gelieve de verplichte velden op te geven aub)</label></div>\r\n        </div>\r\n    </div>\r\n    </div>\r\n    <div class=\"row paddingTop10px\">\r\n        <div class=\"col-sm-8 col-sm-offset-3\">\r\n            <button type=\"button\" class=\"btn btn-default pull-left\" [disabled]=\"!allIsValid()\" (click)=\"indienen()\">Aanvraag Indienen</button>\r\n        </div>\r\n    </div>-->\r\n    \r\n\r\n\r\n    <gw-documents [id]=\"puinId\"\r\n                  [documentType]=\"gwDocumentType\"\r\n                  [emailHistoriekType]=\"emailHistoriekType\"  \r\n                  [canSendNewEmail]=\"canSendNewEmail\"\r\n                  [status]=\"uploadStatus\"\r\n                  (uploadingFiles)=\"sendData($event)\">\r\n    </gw-documents>\r\n\r\n    <div class=\"row\">\r\n        <h5 class=\"col-sm-11\">E-mail Historiek</h5>\r\n    </div>\r\n\r\n    <!--<gw-email-historiek-grid [id]=\"puinId\"\r\n                             [emailType]=\"emailType\"\r\n                             [canSendNewEmail]=\"canSendNewEmail\"></gw-email-historiek-grid>-->\r\n\r\n\r\n\r\n</form>\r\n<div class=\"modal fade\" id=\"selectedUitSpraaktAbsest\" role=\"dialog\">\r\n    <gw-modal-puin (selected)=\"onUitspraakAbsestSelected($event)\"></gw-modal-puin>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"selectedUitSpraaktStorendeStoffen\" role=\"dialog\">\r\n    <gw-modal-puin (selected)=\"onUitspraatStorendeStoffenSelected($event)\"></gw-modal-puin>\r\n</div>";

/***/ }),

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(660);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".setTop {\r\n    align-items: flex-start;\r\n}\r\n\r\n.setArea {\r\n    border: 1px solid #DADADA;\r\n}\r\n\r\n\r\n.locationBorderBottom {\r\n    border-bottom: 1px solid #7faa2a;\r\n}\r\n\r\n\r\n.controlWidth {\r\n    width: 100%;\r\n}\r\n\r\n/*.openModal {\r\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\r\n}*/\r\n\r\n.openModal {\r\n    display: inline-block;\r\n    border-radius: 4px;\r\n    background-color: #017342;\r\n    border: none;\r\n    color: #B0D001;\r\n    text-align: center;\r\n    font-size: 12px;\r\n    padding: 5px;\r\n    width: 50px;\r\n    transition: all 0.5s;\r\n    cursor: pointer;\r\n    margin: 5px;\r\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\r\n}\r\n\r\n .openModal span {\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    position: relative;\r\n    transition: 0.5s;\r\n }\r\n\r\n    .openModal span:after {\r\n        content: '\\BB';\r\n        position: absolute;\r\n        opacity: 0;\r\n        top: 0;\r\n        right: -10px;\r\n        transition: 0.5s;\r\n    }\r\n\r\n    .openModal:hover span {\r\n        padding-right: 10px;\r\n    }\r\n\r\n        .openModal:hover span:after {\r\n            opacity: 1;\r\n            right: 0;\r\n        }\r\n", ""]);

// exports


/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwTvAfsluitRedenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_datepicker__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var gwTvAfsluitRedenComponent = /** @class */ (function (_super) {
    __extends(gwTvAfsluitRedenComponent, _super);
    function gwTvAfsluitRedenComponent(_toastr, fb, route, auth, sanitizer, localeService) {
        var _this = _super.call(this, _toastr) || this;
        _this._toastr = _toastr;
        _this.fb = fb;
        _this.route = route;
        _this.auth = auth;
        _this.sanitizer = sanitizer;
        _this.localeService = localeService;
        _this.afluitenFormValues = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        return _this;
    }
    gwTvAfsluitRedenComponent.prototype.ngOnChanges = function (changes) {
        if (changes['data']) {
            this.tvJoinedData = changes.data.currentValue;
            this.formOnInit();
        }
    };
    gwTvAfsluitRedenComponent.prototype.ngOnInit = function () {
        this.localeService.use("bootstrap-locale-nlbe");
        this.formOnInit();
    };
    gwTvAfsluitRedenComponent.prototype.formOnInit = function () {
        this.initialiseForm();
        this.loadEntity();
    };
    gwTvAfsluitRedenComponent.prototype.initialiseForm = function () {
        this.afsluitRedenForm = this.fb.group({
            afsluitRedenAfvoerNaarBrusselWallonie: [""],
            afsluitRedenAfvoerNaarBrusselWallonieVolume: [""],
            afsluitRedenToegepastZonderGvtBinnenDeWerf: [""],
            afsluitRedenToegepastZonderGvtBinnenDeWerfVolume: [""],
            afsluitRedenToegepastZonderGvtBuitenDeWerf: [""],
            afsluitRedenToegepastZonderGvtBuitenDeWerfVolume: [""],
            afsluitRedenAfgezeefdPuinTop: [""],
            afsluitRedenAfgezeefdPuinTopVolume: [""],
            afsluitRedenMinvolumeVanaf10pWegensNietUitgevoerd: [""],
            afsluitRedenMinvolumeVanaf10pWegensNietUitgevoerdVolume: [""],
            afsluitRedenMeervolumeVanaf10p: [""],
            afsluitRedenMeervolumeVanaf10pVolume: [""],
            afsluitRedenDeelsViaGb: [""],
            afsluitRedenDeelsViaGbVolume: [""],
            afsluitRedenDeelsOpDeWerfGeblevenVoorDeBouwheer: [""],
            afsluitRedenDeelsOpDeWerfGeblevenVoorDeBouwheerVolume: [""],
            afsluitRedenOverschattingInTv: [""],
            afsluitRedenOverschattingInTvVolume: [""],
            afsluitRedenZoneVoorGebruikTerPlaatse: [""],
            afsluitRedenZoneVoorGebruikTerPlaatseVolume: [""],
            afsluitRedenGtmNaarTopNieuwTv: [""],
            afsluitRedenGtmNaarTopNieuwTvVolume: [""],
            afsluitRedenGtmNaarCofETopCgr: [""],
            afsluitRedenGtmNaarCofETopCgrVolume: [""],
            afsluitRedenGedeelteNietDoorLidGwUitgevoerd: [""],
            afsluitRedenGedeelteNietDoorLidGwUitgevoerdVolume: [""],
            afsluitRedenBbrsGeweigerd: [""],
            afsluitRedenBbrsGeweigerdVolume: [""],
            afsluitRedenSamengevoegd: [""],
            afsluitRedenSamengevoegdVolume: [""],
            afsluitRedenNietGekend: [""],
            afsluitRedenNietGekendVolume: [""],
            afsluitRedenOverige: [""],
            afsluitRedenOverigeVolume: [""],
        });
        this.formChangeHandler();
    };
    gwTvAfsluitRedenComponent.prototype.loadEntity = function () {
        if (this.tvJoinedData) {
            this.afsluitRedenForm.patchValue({
                afsluitRedenAfvoerNaarBrusselWallonie: this.tvJoinedData.afsluitRedenAfvoerNaarBrusselWallonie,
                afsluitRedenAfvoerNaarBrusselWallonieVolume: this.tvJoinedData.afsluitRedenAfvoerNaarBrusselWallonieVolume,
                afsluitRedenToegepastZonderGvtBinnenDeWerf: this.tvJoinedData.afsluitRedenToegepastZonderGvtBinnenDeWerf,
                afsluitRedenToegepastZonderGvtBinnenDeWerfVolume: this.tvJoinedData.afsluitRedenToegepastZonderGvtBinnenDeWerfVolume,
                afsluitRedenToegepastZonderGvtBuitenDeWerf: this.tvJoinedData.afsluitRedenToegepastZonderGvtBuitenDeWerf,
                afsluitRedenToegepastZonderGvtBuitenDeWerfVolume: this.tvJoinedData.afsluitRedenToegepastZonderGvtBuitenDeWerfVolume,
                afsluitRedenAfgezeefdPuinTop: this.tvJoinedData.afsluitRedenAfgezeefdPuinTop,
                afsluitRedenAfgezeefdPuinTopVolume: this.tvJoinedData.afsluitRedenAfgezeefdPuinTopVolume,
                afsluitRedenMinvolumeVanaf10pWegensNietUitgevoerd: this.tvJoinedData.afsluitRedenMinvolumeVanaf10pWegensNietUitgevoerd,
                afsluitRedenMinvolumeVanaf10pWegensNietUitgevoerdVolume: this.tvJoinedData.afsluitRedenMinvolumeVanaf10pWegensNietUitgevoerdVolume,
                afsluitRedenMeervolumeVanaf10p: this.tvJoinedData.afsluitRedenMeervolumeVanaf10p,
                afsluitRedenMeervolumeVanaf10pVolume: this.tvJoinedData.afsluitRedenMeervolumeVanaf10pVolume,
                afsluitRedenDeelsViaGb: this.tvJoinedData.afsluitRedenDeelsViaGb,
                afsluitRedenDeelsViaGbVolume: this.tvJoinedData.afsluitRedenDeelsViaGbVolume,
                afsluitRedenDeelsOpDeWerfGeblevenVoorDeBouwheer: this.tvJoinedData.afsluitRedenDeelsOpDeWerfGeblevenVoorDeBouwheer,
                afsluitRedenDeelsOpDeWerfGeblevenVoorDeBouwheerVolume: this.tvJoinedData.afsluitRedenDeelsOpDeWerfGeblevenVoorDeBouwheerVolume,
                afsluitRedenOverschattingInTv: this.tvJoinedData.afsluitRedenOverschattingInTv,
                afsluitRedenOverschattingInTvVolume: this.tvJoinedData.afsluitRedenOverschattingInTvVolume,
                afsluitRedenZoneVoorGebruikTerPlaatse: this.tvJoinedData.afsluitRedenZoneVoorGebruikTerPlaatse,
                afsluitRedenZoneVoorGebruikTerPlaatseVolume: this.tvJoinedData.afsluitRedenZoneVoorGebruikTerPlaatseVolume,
                afsluitRedenGtmNaarTopNieuwTv: this.tvJoinedData.afsluitRedenGtmNaarTopNieuwTv,
                afsluitRedenGtmNaarTopNieuwTvVolume: this.tvJoinedData.afsluitRedenGtmNaarTopNieuwTvVolume,
                afsluitRedenGtmNaarCofETopCgr: this.tvJoinedData.afsluitRedenGtmNaarCofETopCgr,
                afsluitRedenGtmNaarCofETopCgrVolume: this.tvJoinedData.afsluitRedenGtmNaarCofETopCgrVolume,
                afsluitRedenGedeelteNietDoorLidGwUitgevoerd: this.tvJoinedData.afsluitRedenGedeelteNietDoorLidGwUitgevoerd,
                afsluitRedenGedeelteNietDoorLidGwUitgevoerdVolume: this.tvJoinedData.afsluitRedenGedeelteNietDoorLidGwUitgevoerdVolume,
                afsluitRedenBbrsGeweigerd: this.tvJoinedData.afsluitRedenBbrsGeweigerd,
                afsluitRedenBbrsGeweigerdVolume: this.tvJoinedData.afsluitRedenBbrsGeweigerdVolume,
                afsluitRedenSamengevoegd: this.tvJoinedData.afsluitRedenSamengevoegd,
                afsluitRedenSamengevoegdVolume: this.tvJoinedData.afsluitRedenSamengevoegdVolume,
                afsluitRedenNietGekend: this.tvJoinedData.afsluitRedenNietGekend,
                afsluitRedenNietGekendVolume: this.tvJoinedData.afsluitRedenNietGekendVolume,
                afsluitRedenOverige: this.tvJoinedData.afsluitRedenOverige,
                afsluitRedenOverigeVolume: this.tvJoinedData.afsluitRedenOverigeVolume
            });
        }
    };
    gwTvAfsluitRedenComponent.prototype.formChangeHandler = function () {
        var _this = this;
        this.afsluitRedenForm.valueChanges.debounceTime(1000).subscribe(function (val) {
            _this.afluitenFormValues.emit(_this.afsluitRedenForm.value);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], gwTvAfsluitRedenComponent.prototype, "tvId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], gwTvAfsluitRedenComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], gwTvAfsluitRedenComponent.prototype, "afluitenFormValues", void 0);
    gwTvAfsluitRedenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "gw-tv-afsluit-reden",
            template: __webpack_require__(662),
            styles: [__webpack_require__(663)],
            providers: [__WEBPACK_IMPORTED_MODULE_7__angular_common__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["ToastrService"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["DomSanitizer"],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_datepicker__["a" /* BsLocaleService */]])
    ], gwTvAfsluitRedenComponent);
    return gwTvAfsluitRedenComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__["b" /* GeneralScripts */]));



/***/ }),

/***/ 662:
/***/ (function(module, exports) {

module.exports = "\r\n<form [formGroup]=\"afsluitRedenForm\" class=\"container-fluid paddingTop10px\">\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-4\">\r\n            <h6>Bijzonderheden</h6>\r\n        </div>\r\n        <div class=\"col-sm-4\"> <h6>Volume (m³)</h6></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-4\">\r\n            <label><input type=\"checkbox\" formControlName=\"afsluitRedenAfvoerNaarBrusselWallonie\" value=\"\">Afvoer naar Brussel/Wallonië/...</label>\r\n        </div>\r\n        <div class=\"col-sm-4\"><input type=\"text\" DottedBorderBelow formControlName=\"afsluitRedenAfvoerNaarBrusselWallonieVolume\" class=\"form-control\" maxlength=\"50\" AllowOnlyNumbers></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-4\">\r\n            <label><input type=\"checkbox\" formControlName=\"afsluitRedenToegepastZonderGvtBinnenDeWerf\" value=\"\">Toegepast zonder GVT binnen de werf</label>\r\n        </div>\r\n        <div class=\"col-sm-4\"><input type=\"text\" DottedBorderBelow formControlName=\"afsluitRedenToegepastZonderGvtBinnenDeWerfVolume\" class=\"form-control\" maxlength=\"50\" AllowOnlyNumbers></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-4\">\r\n            <label><input type=\"checkbox\" formControlName=\"afsluitRedenToegepastZonderGvtBuitenDeWerf\" value=\"\">Toegepast zonder GVT buiten de werf\" </label>\r\n        </div>\r\n        <div class=\"col-sm-4\"><input type=\"text\" DottedBorderBelow formControlName=\"afsluitRedenToegepastZonderGvtBuitenDeWerfVolume\" class=\"form-control\" maxlength=\"50\" AllowOnlyNumbers></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-4\">\r\n            <label><input type=\"checkbox\" formControlName=\"afsluitRedenAfgezeefdPuinTop\" value=\"\">Afgezeefd puin (TOP)</label>\r\n        </div>\r\n        <div class=\"col-sm-4\"><input type=\"text\" DottedBorderBelow formControlName=\"afsluitRedenAfgezeefdPuinTopVolume\" class=\"form-control\" maxlength=\"50\" AllowOnlyNumbers></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-4\">\r\n            <label><input type=\"checkbox\" formControlName=\"afsluitRedenMinvolumeVanaf10pWegensNietUitgevoerd\" value=\"\">Minvolume vanaf 10% (wegens niet uitgevoerd)</label>\r\n        </div>\r\n        <div class=\"col-sm-4\"><input type=\"text\" DottedBorderBelow formControlName=\"afsluitRedenMinvolumeVanaf10pWegensNietUitgevoerdVolume\" class=\"form-control\" maxlength=\"50\" AllowOnlyNumbers></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-4\">\r\n            <label><input type=\"checkbox\" formControlName=\"afsluitRedenMeervolumeVanaf10p\" value=\"\">Meervolume vanaf 10%</label>\r\n        </div>\r\n        <div class=\"col-sm-4\"><input type=\"text\" DottedBorderBelow formControlName=\"afsluitRedenMeervolumeVanaf10pVolume\" class=\"form-control\" maxlength=\"50\" AllowOnlyNumbers></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-4\">\r\n            <label><input type=\"checkbox\" formControlName=\"afsluitRedenDeelsViaGb\" value=\"\">Deels via GB\"</label>\r\n        </div>\r\n        <div class=\"col-sm-4\"><input type=\"text\" DottedBorderBelow formControlName=\"afsluitRedenDeelsViaGbVolume\" class=\"form-control\" maxlength=\"50\" AllowOnlyNumbers></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-4\">\r\n            <label><input type=\"checkbox\" formControlName=\"afsluitRedenDeelsOpDeWerfGeblevenVoorDeBouwheer\" value=\"\">Deels op de werf gebleven voor de bouwheer</label>\r\n        </div>\r\n        <div class=\"col-sm-4\"><input type=\"text\" DottedBorderBelow formControlName=\"afsluitRedenDeelsOpDeWerfGeblevenVoorDeBouwheerVolume\" class=\"form-control\" maxlength=\"50\" AllowOnlyNumbers></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-4\">\r\n            <label><input type=\"checkbox\" formControlName=\"afsluitRedenOverschattingInTv\" value=\"\">Overschatting in TV</label>\r\n        </div>\r\n        <div class=\"col-sm-4\"><input type=\"text\" DottedBorderBelow formControlName=\"afsluitRedenOverschattingInTvVolume\" class=\"form-control\" maxlength=\"50\" AllowOnlyNumbers></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-4\">\r\n            <label><input type=\"checkbox\" formControlName=\"afsluitRedenZoneVoorGebruikTerPlaatse\" value=\"\">Zone voor gebruik ter plaatse</label>\r\n        </div>\r\n        <div class=\"col-sm-4\"><input type=\"text\" DottedBorderBelow formControlName=\"afsluitRedenZoneVoorGebruikTerPlaatseVolume\" class=\"form-control\" maxlength=\"50\" AllowOnlyNumbers></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-4\">\r\n            <label><input type=\"checkbox\" formControlName=\"afsluitRedenGtmNaarTopNieuwTv\" value=\"\">GTM naar TOP + nieuw TV</label>\r\n        </div>\r\n        <div class=\"col-sm-4\"><input type=\"text\" DottedBorderBelow formControlName=\"afsluitRedenGtmNaarTopNieuwTvVolume\" class=\"form-control\" maxlength=\"50\" AllowOnlyNumbers></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-4\">\r\n            <label><input type=\"checkbox\" formControlName=\"afsluitRedenGtmNaarCofETopCgr\" value=\"\">GTM naar C of E TOP/CGR</label>\r\n        </div>\r\n        <div class=\"col-sm-4\"><input type=\"text\" DottedBorderBelow formControlName=\"afsluitRedenGtmNaarCofETopCgrVolume\" class=\"form-control\" maxlength=\"50\" AllowOnlyNumbers></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-4\">\r\n            <label><input type=\"checkbox\" formControlName=\"afsluitRedenGedeelteNietDoorLidGwUitgevoerd\" value=\"\">Gedeelte niet door lid GW uitgevoerd</label>\r\n        </div>\r\n        <div class=\"col-sm-4\"><input type=\"text\" DottedBorderBelow formControlName=\"afsluitRedenGedeelteNietDoorLidGwUitgevoerdVolume\" class=\"form-control\" maxlength=\"50\" AllowOnlyNumbers></div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-4\">\r\n            <label><input type=\"checkbox\" formControlName=\"afsluitRedenBbrsGeweigerd\" value=\"\">BBR's geweigerd</label>\r\n        </div>\r\n        <div class=\"col-sm-4\"><input type=\"text\" DottedBorderBelow formControlName=\"afsluitRedenBbrsGeweigerdVolume\" class=\"form-control\" maxlength=\"50\" AllowOnlyNumbers></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-4\">\r\n            <label><input type=\"checkbox\" formControlName=\"afsluitRedenSamengevoegd\" value=\"\">Samengevoegd</label>\r\n        </div>\r\n        <div class=\"col-sm-4\"><input type=\"text\" DottedBorderBelow formControlName=\"afsluitRedenSamengevoegdVolume\" class=\"form-control\" maxlength=\"50\" AllowOnlyNumbers></div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-4\">\r\n            <label><input type=\"checkbox\" formControlName=\"afsluitRedenNietGekend\" value=\"\">Niet gekend</label>\r\n        </div>\r\n        <div class=\"col-sm-4\"><input type=\"text\" DottedBorderBelow formControlName=\"afsluitRedenNietGekendVolume\" class=\"form-control\" maxlength=\"50\" AllowOnlyNumbers></div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"checkbox col-sm-4\">\r\n            <label><input type=\"checkbox\" formControlName=\"afsluitRedenOverige\" value=\"\">Overige</label>\r\n        </div>\r\n        <div class=\"col-sm-4\"><input type=\"text\" DottedBorderBelow formControlName=\"afsluitRedenOverigeVolume\" class=\"form-control\" maxlength=\"50\" AllowOnlyNumbers></div>\r\n    </div>\r\n\r\n</form>\r\n\r\n";

/***/ }),

/***/ 663:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(664);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 664:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".setTop {\r\n    align-items: flex-start;\r\n}\r\n\r\n.setArea {\r\n    border: 1px solid #DADADA;\r\n}\r\n\r\n\r\n.locationBorderBottom {\r\n    border-bottom: 1px solid #7faa2a;\r\n}\r\n\r\n\r\n.controlWidth {\r\n    width: 100%;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwTvEvaluatieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_klant_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_datepicker__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_authentication_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_http_tv_service__ = __webpack_require__(25);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var gwTvEvaluatieComponent = /** @class */ (function (_super) {
    __extends(gwTvEvaluatieComponent, _super);
    function gwTvEvaluatieComponent(_toastr, fb, httpKlant, httpTv, router, route, auth, sanitizer, datePipe, localeService, _renderer, _elementRef) {
        var _this = _super.call(this, _toastr) || this;
        _this._toastr = _toastr;
        _this.fb = fb;
        _this.httpKlant = httpKlant;
        _this.httpTv = httpTv;
        _this.router = router;
        _this.route = route;
        _this.auth = auth;
        _this.sanitizer = sanitizer;
        _this.datePipe = datePipe;
        _this.localeService = localeService;
        _this._renderer = _renderer;
        _this._elementRef = _elementRef;
        _this.besluitConclusion = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.evaluatieFormErrors = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.evaluatieFormValues = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.canSendComformietMail = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        return _this;
    }
    gwTvEvaluatieComponent.prototype.ngOnChanges = function (changes) {
        if (changes['data']) {
            this.tvJoinedData = changes.data.currentValue;
            this.initialiseForm();
            this.loadEntity();
        }
        if (changes['selectedStatus']) {
            if (changes.selectedStatus.currentValue == undefined)
                return;
            this.selectedStatus = changes.selectedStatus.currentValue;
            var val = 2;
            switch (changes.selectedStatus.currentValue) {
                case 1:
                    val = 3;
                    break;
                case 4:
                    val = 1;
                    break;
            }
            this.evaluatieForm.patchValue({
                checkConclusion: val
            });
        }
        if (changes['totalHoeveelheid']) {
            this.vlareboVolumeErrorMessage =
                ((Number(this.evaluatieForm.get("checkB_Typ_02_Volume").value) !== changes.totalHoeveelheid.currentValue)
                    && this.evaluatieForm.get("checkB_Typ_02_Volume").valid) ? "- De Vlarebo volume is niet gelijk aan  Deelvolume total hoeveelheid" : '';
            this.totalHoeveelheidErrorMessage = (changes.totalHoeveelheid.currentValue === 0) ? "- Deelvolume is vereist" : "";
        }
        if (changes['dossierBeheerderID']) {
            this.dossierBeheerderIDErrorMessage = (Number(changes.dossierBeheerderID.currentValue)) ? "" : "- DossierBeheerder is vereist";
            this.isBesluitDisabled();
        }
        if (changes['isSaving']) {
            console.log(changes.isSaving.currentValue, "changes.isSaving.currentValue");
            if (changes.isSaving.currentValue == undefined)
                return;
            if (this.isSaving === 0) {
                document.getElementById("checkConclusionNOK").removeAttribute('disabled');
                document.getElementById("checkConclusionNVT").removeAttribute('disabled');
                this.isBesluitDisabled();
            }
            else {
                document.getElementById("checkConclusionOK").setAttribute("disabled", "true");
                document.getElementById("checkConclusionNOK").setAttribute("disabled", "true");
                document.getElementById("checkConclusionNVT").setAttribute("disabled", "true");
            }
        }
    };
    gwTvEvaluatieComponent.prototype.ngOnInit = function () {
        this.localeService.use("bootstrap-locale-nlbe");
        this.formOnInit();
    };
    gwTvEvaluatieComponent.prototype.formOnInit = function () {
        this.initialiseForm();
        this.loadDropdowns();
    };
    gwTvEvaluatieComponent.prototype.initialiseForm = function () {
        this.evaluatieForm = this.fb.group({
            checkA_01: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            checkB_01: [""],
            //Administratief onderzoek
            checkB_Adm_01_Adres: [""],
            checkB_Adm_02_LCoord: [""],
            checkB_Adm_03_Kad: [""],
            //  checkB_Adm_04_IdentInit: [""], // field not shown on the old view
            checkB_Adm_05_BestemTyp: [""],
            checkB_Adm_06_VermeldLigging: [""],
            //Historisch onderzoek
            checkB_His_01_terrein: [""],
            checkB_His_02_Vlarebo: [""],
            checkB_His_03_Vlarem: [""],
            checkB_His_03B_Lozing: [""],
            checkB_His_04_Organolep: [""],
            checkB_His_05_Voormalig: [""],
            checkB_His_06_Aanvullend: [""],
            //Reden / type grondverzet
            checkB_Typ_01_Algemeen: [""],
            checkB_Typ_02_Volume: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            checkB_Typ_02B_VlaremaVolume: [""],
            checkB_Typ_03_Diepte: [""],
            //checkB_Typ_04_Lenge: [""],// Database allows for decimal values
            checkB_PosBesluit_01_Voorstudie: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            checkC_01: [""],
            //Type Strategie
            checkC_Typ_01_BouwPrj: [""],
            checkC_Typ_02_LijnTrj: [""],
            checkC_Typ_03_Hopen: [""],
            checkC_Typ_04_HopenAnder: [""],
            checkC_Typ_05_Deels: [""],
            checkC_Typ_06_OnbevLineair: [""],
            checkC_Typ_07_OnbevBreder: [""],
            checkC_Typ_08_OnbevGracht: [""],
            checkC_Typ_09_BevaarMonster: [""],
            //Bemonstering
            checkC_Mon_01B_MinStrategie: [""],
            checkC_Mon_02_Verdacht: [""],
            checkC_Mon_03_Datum: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            checkC_Mon_04_Verslag: [""],
            //Analyses
            checkC_Ana_01_Correct: [""],
            checkC_Ana_02_Voldoende: [""],
            checkC_Ana_03_Verdacht: [""],
            checkC_Ana_04_SAP: [""],
            checkC_Ana_04B_PCB: [""],
            checkC_Ana_05_ntGekend: [""],
            checkC_Ana_05B_SAPWater: [""],
            checkC_Ana_06_Bijkomend: [""],
            checkC_Ana_07_Schud: [""],
            checkC_Ana_08_ErkendLab: [""],
            checkC_Ana_09_CMA: [""],
            checkC_Ana_10_Cert: [""],
            checkC_PosBesluit_01_Strat: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            checkD_01: [""],
            // Evaluatie
            checkD_Eval_01_NormPrm: [""],
            checkD_Eval_02_NtNormPrm: [""],
            checkD_Eval_03_pH: [""],
            checkD_Eval_04_toetsTbl: [""],
            checkD_Eval_05_toetsing: [""],
            checkD_Eval_06_ToetsMeth: [""],
            checkD_Eval_07_Herbruik: [""],
            checkD_Eval_08_BodemVrmdMat: [""],
            checkD_Eval_09_Asbest: [""],
            //Correcte afbakening kadastrale werkzone(s)
            // checkD_Eval_Kad_00: [""],  // field not shown on the old view
            // checkD_Eval_Kad_01_Perceel: [""],  // field not shown on the old view
            checkD_Eval_Kad_02_heterog: [""],
            checkD_Eval_Kad_03_Homog: [""],
            checkD_Eval_Kad_04_Waterloop: [""],
            //Bijkomende richtlijnen opgesteld
            checkD_Eval_Rich_01_Grondwater: [""],
            checkD_Eval_Rich_02_Bemaling: [""],
            checkD_Eval_Rich_03_Blootst: [""],
            checkD_Eval_Rich_04_TssTijds: [""],
            checkD_Eval_Rich_05_Milieu: [""],
            checkD_Eval_Rich_06_Voorw: [""],
            checkD_Eval_11_PosBesluit: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            checkE_ZoneringsPlan: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            checkF_OpmetingsTabel: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            checkG_VolTabel: [""],
            checkH_FotoRep: [""],
            checkI_Bouwplan: [""],
            checkJ_VolBerek: [""],
            checkK_InfoVorige: [""],
            checkL_Delfstof: [""],
            checkL_Delfstof_view: [""],
            checkL_GeologischeBeschrijvingID: [""],
            checkL_PrimaireOppDelfstofID: [""],
            checkL_Volume: [""],
            checkConclusionView: [""],
            checkConclusion: [""] // new field
        });
        // this.isBesluitDisabled();
        this.positivebesluitHandler();
    };
    // load data 
    gwTvEvaluatieComponent.prototype.loadDropdowns = function () {
        var _this = this;
        this.httpTv.gwGeologischeBeschrijving().toPromise().
            then(function (lst) {
            _this.geoBeschrevingListItems = lst.slice();
        });
        this.httpTv.gwPrimaireOppervlakte().toPromise().
            then(function (lst) {
            _this.primaireOppervlakteListItems = lst.slice();
        });
    };
    gwTvEvaluatieComponent.prototype.loadEntity = function () {
        if (this.tvJoinedData) {
            this.evaluatieForm.patchValue({
                checkA_01: this.checkBoxDefaultValue(this.tvJoinedData.checkA_01),
                checkB_01: this.checkBoxDefaultValue(this.tvJoinedData.checkB_01),
                //Administratief onderzoek
                checkB_Adm_01_Adres: this.checkBoxDefaultValue(this.tvJoinedData.checkB_Adm_01_Adres),
                checkB_Adm_02_LCoord: this.checkBoxDefaultValue(this.tvJoinedData.checkB_Adm_02_LCoord),
                checkB_Adm_03_Kad: this.checkBoxDefaultValue(this.tvJoinedData.checkB_Adm_03_Kad),
                checkB_Adm_04_IdentInit: this.tvJoinedData.checkB_Adm_04_IdentInit,
                checkB_Adm_05_BestemTyp: this.checkBoxDefaultValue(this.tvJoinedData.checkB_Adm_05_BestemTyp),
                checkB_Adm_06_VermeldLigging: this.checkBoxDefaultValue(this.tvJoinedData.checkB_Adm_06_VermeldLigging),
                //Historisch onderzoek
                checkB_His_01_terrein: this.checkBoxDefaultValue(this.tvJoinedData.checkB_His_01_terrein),
                checkB_His_02_Vlarebo: this.checkBoxDefaultValue(this.tvJoinedData.checkB_His_02_Vlarebo),
                checkB_His_03_Vlarem: this.checkBoxDefaultValue(this.tvJoinedData.checkB_His_03_Vlarem),
                checkB_His_04_Organolep: this.checkBoxDefaultValue(this.tvJoinedData.checkB_His_04_Organolep),
                checkB_His_05_Voormalig: this.checkBoxDefaultValue(this.tvJoinedData.checkB_His_05_Voormalig),
                checkB_His_06_Aanvullend: this.checkBoxDefaultValue(this.tvJoinedData.checkB_His_06_Aanvullend),
                //Reden / type grondverzet
                checkB_Typ_01_Algemeen: this.checkBoxDefaultValue(this.tvJoinedData.checkB_Typ_01_Algemeen),
                checkB_Typ_02_Volume: this.tvJoinedData.checkB_Typ_02_Volume,
                checkB_Typ_03_Diepte: this.tvJoinedData.checkB_Typ_03_Diepte,
                //  checkB_Typ_04_Lenge: this.tvJoinedData.checkB_Typ_04_Lenge,
                checkB_PosBesluit_01_Voorstudie: this.checkBoxDefaultValue(this.tvJoinedData.checkB_PosBesluit_01_Voorstudie),
                checkC_01: this.checkBoxDefaultValue(this.tvJoinedData.checkC_PosBesluit_01_Strat),
                //Type Strategie
                checkC_Typ_01_BouwPrj: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Typ_01_BouwPrj),
                checkC_Typ_02_LijnTrj: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Typ_02_LijnTrj),
                checkC_Typ_03_Hopen: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Typ_03_Hopen),
                checkC_Typ_04_HopenAnder: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Typ_04_HopenAnder),
                checkC_Typ_05_Deels: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Typ_05_Deels),
                //Bemonstering
                checkC_Mon_01_voldoende: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Mon_01_voldoende),
                checkC_Mon_02_Verdacht: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Mon_02_Verdacht),
                checkC_Mon_03_Datum: this.datePipe.transform(this.tvJoinedData.checkC_Mon_03_Datum, "dd/MM/yyyy"),
                checkC_Mon_04_Verslag: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Mon_04_Verslag),
                //Analyses
                checkC_Ana_01_Correct: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Ana_01_Correct),
                checkC_Ana_02_Voldoende: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Ana_02_Voldoende),
                checkC_Ana_03_Verdacht: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Ana_03_Verdacht),
                checkC_Ana_04_SAP: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Ana_04_SAP),
                checkC_Ana_05_ntGekend: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Ana_05_ntGekend),
                checkC_Ana_06_Bijkomend: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Ana_06_Bijkomend),
                checkC_Ana_07_Schud: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Ana_06_Bijkomend),
                checkC_Ana_08_ErkendLab: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Ana_08_ErkendLab),
                checkC_Ana_09_CMA: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Ana_09_CMA),
                checkC_Ana_10_Cert: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Ana_10_Cert),
                checkC_PosBesluit_01_Strat: this.checkBoxDefaultValue(this.tvJoinedData.checkC_PosBesluit_01_Strat),
                checkD_01: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_11_PosBesluit),
                // Evaluatie
                checkD_Eval_01_NormPrm: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_01_NormPrm),
                checkD_Eval_02_NtNormPrm: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_02_NtNormPrm),
                checkD_Eval_03_pH: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_03_pH),
                checkD_Eval_04_toetsTbl: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_04_toetsTbl),
                checkD_Eval_05_toetsing: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_05_toetsing),
                checkD_Eval_06_ToetsMeth: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_06_ToetsMeth),
                checkD_Eval_07_Herbruik: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_07_Herbruik),
                checkD_Eval_08_BodemVrmdMat: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_08_BodemVrmdMat),
                //Correcte afbakening kadastrale werkzone(s)
                //checkD_Eval_Kad_00: this.tvJoinedData.checkD_Eval_Kad_00,  // field not shown on the old view
                // checkD_Eval_Kad_01_Perceel: this.tvJoinedData.checkD_Eval_Kad_01_Perceel,  // field not shown on the old view
                checkD_Eval_Kad_02_heterog: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_Kad_02_heterog),
                checkD_Eval_Kad_03_Homog: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_Kad_03_Homog),
                //Bijkomende richtlijnen opgesteld
                checkD_Eval_Rich_01_Grondwater: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_Rich_01_Grondwater),
                checkD_Eval_Rich_02_Bemaling: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_Rich_02_Bemaling),
                checkD_Eval_Rich_03_Blootst: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_Rich_03_Blootst),
                checkD_Eval_Rich_04_TssTijds: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_Rich_04_TssTijds),
                checkD_Eval_11_PosBesluit: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_11_PosBesluit),
                checkE_ZoneringsPlan: this.checkBoxDefaultValue(this.tvJoinedData.checkE_ZoneringsPlan),
                checkF_OpmetingsTabel: this.checkBoxDefaultValue(this.tvJoinedData.checkF_OpmetingsTabel),
                checkConclusionView: this.checkBoxDefaultValue(this.tvJoinedData.checkConclusion),
                checkConclusion: this.checkBoxDefaultValue(this.tvJoinedData.checkConclusion),
                // New fields 2019
                checkB_His_03B_Lozing: this.checkBoxDefaultValue(this.tvJoinedData.checkB_His_03B_Lozing),
                checkB_Typ_02B_VlaremaVolume: this.checkBoxDefaultValue(this.tvJoinedData.checkB_Typ_02B_VlaremaVolume),
                checkC_Mon_01B_MinStrategie: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Mon_01B_MinStrategie),
                checkC_Ana_04B_PCB: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Ana_04B_PCB),
                checkC_Ana_05B_SAPWater: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Ana_05B_SAPWater),
                checkD_Eval_09_Asbest: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_09_Asbest),
                checkD_Eval_Kad_04_Waterloop: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_Kad_04_Waterloop),
                checkD_Eval_Rich_05_Milieu: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_Rich_05_Milieu),
                checkD_Eval_Rich_06_Voorw: this.checkBoxDefaultValue(this.tvJoinedData.checkD_Eval_Rich_06_Voorw),
                checkG_VolTabel: this.checkBoxDefaultValue(this.tvJoinedData.checkG_VolTabel),
                checkH_FotoRep: this.checkBoxDefaultValue(this.tvJoinedData.checkH_FotoRep),
                checkI_Bouwplan: this.checkBoxDefaultValue(this.tvJoinedData.checkI_Bouwplan),
                checkJ_VolBerek: this.checkBoxDefaultValue(this.tvJoinedData.checkJ_VolBerek),
                checkK_InfoVorige: this.checkBoxDefaultValue(this.tvJoinedData.checkK_InfoVorige),
                checkL_Delfstof: this.checkBoxDefaultValue(this.tvJoinedData.checkL_Delfstof),
                checkL_GeologischeBeschrijvingID: this.tvJoinedData.checkL_GeologischeBeschrijvingID,
                checkL_PrimaireOppDelfstofID: this.tvJoinedData.checkL_PrimaireOppDelfstofID,
                checkL_Volume: this.tvJoinedData.checkL_Volume,
                checkC_Typ_06_OnbevLineair: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Typ_06_OnbevLineair),
                checkC_Typ_07_OnbevBreder: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Typ_07_OnbevBreder),
                checkC_Typ_08_OnbevGracht: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Typ_08_OnbevGracht),
                checkC_Typ_09_BevaarMonster: this.checkBoxDefaultValue(this.tvJoinedData.checkC_Typ_09_BevaarMonster),
            });
        }
        this.evaluatieForm.getError("");
    };
    // business rules and errors handling
    gwTvEvaluatieComponent.prototype.positivebesluitHandler = function () {
        var _this = this;
        this.evaluatieForm.get('checkB_PosBesluit_01_Voorstudie').valueChanges.debounceTime(1000).subscribe(function (val) {
            _this.evaluatieForm.patchValue({
                checkB_01: val
            });
        });
        this.evaluatieForm.get('checkC_PosBesluit_01_Strat').valueChanges.debounceTime(1000).subscribe(function (val) {
            _this.evaluatieForm.patchValue({
                checkC_01: val
            });
        });
        this.evaluatieForm.get('checkD_Eval_11_PosBesluit').valueChanges.debounceTime(1000).subscribe(function (val) {
            _this.evaluatieForm.patchValue({
                checkD_01: val
            });
        });
        this.evaluatieForm.get('checkL_Delfstof').valueChanges.debounceTime(1000).subscribe(function (val) {
            _this.evaluatieForm.patchValue({
                checkL_Delfstof_view: val
            });
        });
        this.evaluatieForm.get('checkConclusion').valueChanges.subscribe(function (val) {
            _this.evaluatieForm.patchValue({
                checkConclusionView: val
            });
            _this.besluitConclusion.emit(val);
            _this.besluitSelected = val;
        });
        this.evaluatieForm.get("checkB_Typ_02_Volume").valueChanges.debounceTime(1000).subscribe(function (val) {
            _this.vlareboVolumeErrorMessage =
                ((Number(val) !== _this.totalHoeveelheid)
                    && _this.evaluatieForm.get("checkB_Typ_02_Volume").valid) ? "- De Vlarebo volume is niet gelijk aan  Deelvolume total hoeveelheid" : '';
        });
        this.evaluatieForm.valueChanges.debounceTime(1000).subscribe(function (val) {
            var A = (_this.errorMessageGeneratePositiveBesluit(_this.evaluatieForm.get("checkA_01").value) === true) ? "" : "A" + " ";
            var B = (_this.errorMessageGeneratePositiveBesluit(_this.evaluatieForm.get("checkB_PosBesluit_01_Voorstudie").value) === true) ? "" : "B" + " ";
            var C = (_this.errorMessageGeneratePositiveBesluit(_this.evaluatieForm.get("checkC_PosBesluit_01_Strat").value) === true) ? "" : "C" + " ";
            var D = (_this.errorMessageGeneratePositiveBesluit(_this.evaluatieForm.get("checkD_Eval_11_PosBesluit").value) === true) ? "" : "D" + " ";
            var E = (_this.errorMessageGeneratePositiveBesluit(_this.evaluatieForm.get("checkE_ZoneringsPlan").value) === true) ? "" : "E" + " ";
            var F = (_this.errorMessageGeneratePositiveBesluit(_this.evaluatieForm.get("checkF_OpmetingsTabel").value) === true) ? "" : "F" + " ";
            var G = (_this.errorMessageGeneratePositiveBesluit(_this.evaluatieForm.get("checkG_VolTabel").value) === true) ? "" : "G" + " ";
            var H = (_this.errorMessageGeneratePositiveBesluit(_this.evaluatieForm.get("checkH_FotoRep").value) === true) ? "" : "H" + " ";
            var I = (_this.errorMessageGeneratePositiveBesluit(_this.evaluatieForm.get("checkI_Bouwplan").value) === true) ? "" : "I" + " ";
            var J = (_this.errorMessageGeneratePositiveBesluit(_this.evaluatieForm.get("checkJ_VolBerek").value) === true) ? "" : "J" + " ";
            var K = (_this.errorMessageGeneratePositiveBesluit(_this.evaluatieForm.get("checkK_InfoVorige").value) === true) ? "" : "K" + " ";
            var L = (_this.errorMessageGeneratePositiveBesluit(_this.evaluatieForm.get("checkL_Delfstof").value) === true) ? "" : "L" + " ";
            _this.positivebesluitMessage = (A || B || C || D || E || F || G || H || I || J || K || L) ? "- U moet een besluit invullen voor " + A + B + C + D + E + F + G + H + I + J + K + L : '';
            var evaluatieErrors = {
                datumDemonsteringErrorMessage: (_this.evaluatieForm.get("checkC_Mon_03_Datum").valid) ? null : "- Datum bemonstering is vereist.",
                volumeErrorMessage: (_this.evaluatieForm.get("checkB_Typ_02_Volume").valid) ? null : "- Volume VLAREBO is vereist.",
                vlareboVolume: Number(_this.evaluatieForm.get("checkB_Typ_02_Volume").value),
                isBesluit: _this.canSelectBesluit()
            };
            _this.isBesluitDisabled();
            _this.evaluatieFormErrors.emit(evaluatieErrors);
            _this.evaluatieFormValues.emit(_this.getEvaluatieFormValues());
        });
    };
    gwTvEvaluatieComponent.prototype.canSelectBesluit = function () {
        return this.evaluatieForm.valid &&
            this.positivebesluitMessage === '' &&
            this.vlareboVolumeErrorMessage === '' &&
            this.dossierBeheerderIDErrorMessage === '' &&
            this.evaluatieForm.get("checkB_Typ_02_Volume").valid;
    };
    gwTvEvaluatieComponent.prototype.isConformiteit = function () {
        return this.canSelectBesluit() &&
            this.besluitSelected === 1;
    };
    gwTvEvaluatieComponent.prototype.sendConformiteitEmail = function () {
        this.canSendComformietMail.emit(true);
    };
    gwTvEvaluatieComponent.prototype.errorMessageGeneratePositiveBesluit = function (value) {
        if (value === 1)
            return true;
    };
    gwTvEvaluatieComponent.prototype.checkBoxDefaultValue = function (check) {
        var value = (!check) ? 3 : check;
        return value;
    };
    gwTvEvaluatieComponent.prototype.isBesluitDisabled = function () {
        if (this.besluitSelected !== null) {
            if (!this.canSelectBesluit()) {
                document.getElementById("checkConclusionOK").setAttribute("disabled", "true");
                document.getElementById("checkConclusionNOK").removeAttribute('disabled');
                document.getElementById("checkConclusionNVT").removeAttribute('disabled');
                if (Number(this.evaluatieForm.get("checkConclusion").value) === 1) {
                    this.evaluatieForm.patchValue({ checkConclusion: 3 });
                }
            }
            else {
                document.getElementById("checkConclusionOK").removeAttribute('disabled');
                document.getElementById("checkConclusionNOK").setAttribute("disabled", "true");
                document.getElementById("checkConclusionNVT").setAttribute("disabled", "true");
                if (Number(this.evaluatieForm.get("checkConclusion").value) !== 1) {
                    this.evaluatieForm.patchValue({ checkConclusion: 1 });
                }
            }
            ;
        }
        else {
            return;
        }
    };
    // get Data
    gwTvEvaluatieComponent.prototype.getEvaluatieFormValues = function () {
        var evaluatieFormValues = {
            checkA_01: this.evaluatieForm.value.checkA_01,
            checkB_01: this.evaluatieForm.value.checkC_PosBesluit_01_Strat,
            //Administratief onderzoek
            checkB_Adm_01_Adres: this.evaluatieForm.value.checkB_Adm_01_Adres,
            checkB_Adm_02_LCoord: this.evaluatieForm.value.checkB_Adm_02_LCoord,
            checkB_Adm_03_Kad: this.evaluatieForm.value.checkB_Adm_03_Kad,
            checkB_Adm_04_IdentInit: null,
            checkB_Adm_05_BestemTyp: this.evaluatieForm.value.checkB_Adm_05_BestemTyp,
            checkB_Adm_06_VermeldLigging: this.evaluatieForm.value.checkB_Adm_06_VermeldLigging,
            //Historisch onderzoek
            checkB_His_01_terrein: this.evaluatieForm.value.checkB_His_01_terrein,
            checkB_His_02_Vlarebo: this.evaluatieForm.value.checkB_His_02_Vlarebo,
            checkB_His_03_Vlarem: this.evaluatieForm.value.checkB_His_03_Vlarem,
            checkB_His_04_Organolep: this.evaluatieForm.value.checkB_His_04_Organolep,
            checkB_His_05_Voormalig: this.evaluatieForm.value.checkB_His_05_Voormalig,
            checkB_His_06_Aanvullend: this.evaluatieForm.value.checkB_His_06_Aanvullend,
            //Reden / type grondverzet
            checkB_Typ_01_Algemeen: this.evaluatieForm.value.checkB_Typ_01_Algemeen,
            checkB_Typ_02_Volume: this.evaluatieForm.value.checkB_Typ_02_Volume,
            checkB_Typ_03_Diepte: this.evaluatieForm.value.checkB_Typ_03_Diepte,
            checkB_Typ_04_Lenge: this.evaluatieForm.value.checkB_Typ_04_Lenge,
            checkB_PosBesluit_01_Voorstudie: this.evaluatieForm.value.checkB_PosBesluit_01_Voorstudie,
            //Type Strategie
            checkC_Typ_01_BouwPrj: this.evaluatieForm.value.checkC_Typ_01_BouwPrj,
            checkC_Typ_02_LijnTrj: this.evaluatieForm.value.checkC_Typ_02_LijnTrj,
            checkC_Typ_03_Hopen: this.evaluatieForm.value.checkC_Typ_03_Hopen,
            checkC_Typ_04_HopenAnder: this.evaluatieForm.value.checkC_Typ_04_HopenAnder,
            checkC_Typ_05_Deels: this.evaluatieForm.value.checkC_Typ_05_Deels,
            //Bemonstering
            checkC_Mon_01_voldoende: this.evaluatieForm.value.checkC_Mon_01_voldoende,
            checkC_Mon_02_Verdacht: this.evaluatieForm.value.checkC_Mon_02_Verdacht,
            checkC_Mon_03_Datum: this.stringToDate(this.evaluatieForm.value.checkC_Mon_03_Datum),
            checkC_Mon_04_Verslag: this.evaluatieForm.value.checkC_Mon_04_Verslag,
            //Analyses
            checkC_Ana_01_Correct: this.evaluatieForm.value.checkC_Ana_01_Correct,
            checkC_Ana_02_Voldoende: this.evaluatieForm.value.checkC_Ana_02_Voldoende,
            checkC_Ana_03_Verdacht: this.evaluatieForm.value.checkC_Ana_03_Verdacht,
            checkC_Ana_04_SAP: this.evaluatieForm.value.checkC_Ana_04_SAP,
            checkC_Ana_05_ntGekend: this.evaluatieForm.value.checkC_Ana_05_ntGekend,
            checkC_Ana_06_Bijkomend: this.evaluatieForm.value.checkC_Ana_06_Bijkomend,
            checkC_Ana_07_Schud: this.evaluatieForm.value.checkC_Ana_06_Bijkomend,
            checkC_Ana_08_ErkendLab: this.evaluatieForm.value.checkC_Ana_08_ErkendLab,
            checkC_Ana_09_CMA: this.evaluatieForm.value.checkC_Ana_09_CMA,
            checkC_Ana_10_Cert: this.evaluatieForm.value.checkC_Ana_10_Cert,
            checkC_PosBesluit_01_Strat: this.evaluatieForm.value.checkC_PosBesluit_01_Strat,
            // Evaluatie
            checkD_Eval_01_NormPrm: this.evaluatieForm.value.checkD_Eval_01_NormPrm,
            checkD_Eval_02_NtNormPrm: this.evaluatieForm.value.checkD_Eval_02_NtNormPrm,
            checkD_Eval_03_pH: this.evaluatieForm.value.checkD_Eval_03_pH,
            checkD_Eval_04_toetsTbl: this.evaluatieForm.value.checkD_Eval_04_toetsTbl,
            checkD_Eval_05_toetsing: this.evaluatieForm.value.checkD_Eval_05_toetsing,
            checkD_Eval_06_ToetsMeth: this.evaluatieForm.value.checkD_Eval_06_ToetsMeth,
            checkD_Eval_07_Herbruik: this.evaluatieForm.value.checkD_Eval_07_Herbruik,
            checkD_Eval_08_BodemVrmdMat: this.evaluatieForm.value.checkD_Eval_08_BodemVrmdMat,
            //Correcte afbakening kadastrale werkzone(s)
            //checkD_Eval_Kad_00: this.tvJoinedData.checkD_Eval_Kad_00,  // field not shown on the old view
            //checkD_Eval_Kad_01_Perceel: this.tvJoinedData.checkD_Eval_Kad_01_Perceel,  // field not shown on the old view
            checkD_Eval_Kad_02_heterog: this.evaluatieForm.value.checkD_Eval_Kad_02_heterog,
            checkD_Eval_Kad_03_Homog: this.evaluatieForm.value.checkD_Eval_Kad_03_Homog,
            //Bijkomende richtlijnen opgesteld
            checkD_Eval_Rich_01_Grondwater: this.evaluatieForm.value.checkD_Eval_Rich_01_Grondwater,
            checkD_Eval_Rich_02_Bemaling: this.evaluatieForm.value.checkD_Eval_Rich_02_Bemaling,
            checkD_Eval_Rich_03_Blootst: this.evaluatieForm.value.checkD_Eval_Rich_03_Blootst,
            checkD_Eval_Rich_04_TssTijds: this.evaluatieForm.value.checkD_Eval_Rich_04_TssTijds,
            checkD_Eval_11_PosBesluit: this.evaluatieForm.value.checkD_Eval_11_PosBesluit,
            checkE_ZoneringsPlan: this.evaluatieForm.value.checkE_ZoneringsPlan,
            checkF_OpmetingsTabel: this.evaluatieForm.value.checkF_OpmetingsTabel,
            checkConclusion: this.evaluatieForm.value.checkConclusion,
            // New fields 2019
            checkB_His_03B_Lozing: this.evaluatieForm.value.checkB_His_03B_Lozing,
            checkB_Typ_02B_VlaremaVolume: this.evaluatieForm.value.checkB_Typ_02B_VlaremaVolume,
            checkC_Mon_01B_MinStrategie: this.evaluatieForm.value.checkC_Mon_01B_MinStrategie,
            checkC_Ana_04B_PCB: this.evaluatieForm.value.checkC_Ana_04B_PCB,
            checkC_Ana_05B_SAPWater: this.evaluatieForm.value.checkC_Ana_05B_SAPWater,
            checkD_Eval_09_Asbest: this.evaluatieForm.value.checkD_Eval_09_Asbest,
            checkD_Eval_Kad_04_Waterloop: this.evaluatieForm.value.checkD_Eval_Kad_04_Waterloop,
            checkD_Eval_Rich_05_Milieu: this.evaluatieForm.value.checkD_Eval_Rich_05_Milieu,
            checkD_Eval_Rich_06_Voorw: this.evaluatieForm.value.checkD_Eval_Rich_06_Voorw,
            checkG_VolTabel: this.evaluatieForm.value.checkG_VolTabel,
            checkH_FotoRep: this.evaluatieForm.value.checkH_FotoRep,
            checkI_Bouwplan: this.evaluatieForm.value.checkI_Bouwplan,
            checkJ_VolBerek: this.evaluatieForm.value.checkJ_VolBerek,
            checkK_InfoVorige: this.evaluatieForm.value.checkK_InfoVorige,
            checkL_Delfstof: this.evaluatieForm.value.checkL_Delfstof,
            checkL_GeologischeBeschrijvingID: this.evaluatieForm.value.checkL_GeologischeBeschrijvingID,
            checkL_PrimaireOppDelfstofID: this.evaluatieForm.value.checkL_PrimaireOppDelfstofID,
            checkL_Volume: this.evaluatieForm.value.checkL_Volume,
            checkC_Typ_06_OnbevLineair: this.evaluatieForm.value.checkC_Typ_06_OnbevLineair,
            checkC_Typ_07_OnbevBreder: this.evaluatieForm.value.checkC_Typ_07_OnbevBreder,
            checkC_Typ_08_OnbevGracht: this.evaluatieForm.value.checkC_Typ_08_OnbevGracht,
            checkC_Typ_09_BevaarMonster: this.evaluatieForm.value.checkC_Typ_09_BevaarMonster,
        };
        return evaluatieFormValues;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], gwTvEvaluatieComponent.prototype, "tvId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], gwTvEvaluatieComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], gwTvEvaluatieComponent.prototype, "selectedStatus", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], gwTvEvaluatieComponent.prototype, "totalHoeveelheid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], gwTvEvaluatieComponent.prototype, "dossierBeheerderID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], gwTvEvaluatieComponent.prototype, "isComformiteitMailSend", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], gwTvEvaluatieComponent.prototype, "isSaving", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], gwTvEvaluatieComponent.prototype, "besluitConclusion", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], gwTvEvaluatieComponent.prototype, "evaluatieFormErrors", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], gwTvEvaluatieComponent.prototype, "evaluatieFormValues", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], gwTvEvaluatieComponent.prototype, "canSendComformietMail", void 0);
    gwTvEvaluatieComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "gw-tv-evaluatie",
            template: __webpack_require__(666),
            styles: [__webpack_require__(667)],
            providers: [__WEBPACK_IMPORTED_MODULE_8__angular_common__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["ToastrService"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_5__services_http_klant_service__["a" /* HttpKlantService */],
            __WEBPACK_IMPORTED_MODULE_10__services_http_tv_service__["a" /* HttpTVService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_7__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["DomSanitizer"],
            __WEBPACK_IMPORTED_MODULE_8__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_datepicker__["a" /* BsLocaleService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], gwTvEvaluatieComponent);
    return gwTvEvaluatieComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__["b" /* GeneralScripts */]));



/***/ }),

/***/ 666:
/***/ (function(module, exports) {

module.exports = "\r\n<form [formGroup]=\"evaluatieForm\" class=\"container-fluid paddingTop10px\">\r\n\r\n    <div class=\"row\">\r\n        <h6 class=\"col-sm-8\">Evaluatie (volgens Vlarebo 2008)</h6>\r\n        <h6 class=\"col-sm-1\">Ok</h6>\r\n        <h6 class=\"col-sm-1\">Nok</h6>\r\n        <h6 class=\"col-sm-1\">Nvt</h6>\r\n\r\n    </div>\r\n    <!-- A.Het technisch verslag is opgesteld door een EBSD-->\r\n    <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading panelHeaderSize\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-8\">\r\n                    <label>  A. Het technisch verslag is opgesteld door een EBSD</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"checkA_01\" type=\"radio\" [value]=\"1\" formControlName=\"checkA_01\" />\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"checkA_01\" type=\"radio\" [value]=\"2\" formControlName=\"checkA_01\" />\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"checkA_01\" type=\"radio\" [value]=\"3\" formControlName=\"checkA_01\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div id=\"accordion\">\r\n        <!-- B.Voorstudie-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading panelHeaderSize expandablePanel\" id=\"headingVoorstudie\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 collapsed pointer\" tooltip=\"klik om te openen\" data-toggle=\"collapse\" data-target=\"#collapseVoorstudie\" aria-controls=\"collapseVoorstudie\">\r\n                        <label> <i class=\"fa fa-ellipsis-v\"></i> B. Voorstudie</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_01\" type=\"radio\" [value]=\"1\" formControlName=\"checkB_01\" [attr.disabled]=\"true\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_01\" type=\"radio\" [value]=\"2\" formControlName=\"checkB_01\" [attr.disabled]=\"true\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_01\" type=\"radio\" [value]=\"3\" formControlName=\"checkB_01\" [attr.disabled]=\"true\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"panel-body collapse multi-collapse\" id=\"collapseVoorstudie\" aria-labelledby=\"headingVoorstudie\" data-parent=\"#accordion\">\r\n\r\n                <!-- Administratief onderzoek -->\r\n\r\n                <h6>Administratief onderzoek</h6>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8\">\r\n                        <label>Identificatie grond: Adres</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_Adm_01_Adres\" type=\"radio\" [value]=\"1\" formControlName=\"checkB_Adm_01_Adres\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_Adm_01_Adres\" type=\"radio\" [value]=\"2\" formControlName=\"checkB_Adm_01_Adres\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_Adm_01_Adres\" type=\"radio\" [value]=\"3\" formControlName=\"checkB_Adm_01_Adres\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Identificatie grond: Lambert-coördinaten</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_Adm_02_LCoord\" type=\"radio\" [value]=\"1\" formControlName=\"checkB_Adm_02_LCoord\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_Adm_02_LCoord\" type=\"radio\" [value]=\"2\" formControlName=\"checkB_Adm_02_LCoord\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_Adm_02_LCoord\" type=\"radio\" [value]=\"3\" formControlName=\"checkB_Adm_02_LCoord\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Identificatie grond:Kadastrale gegevens</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_Adm_03_Kad\" type=\"radio\" [value]=\"1\" formControlName=\"checkB_Adm_03_Kad\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_Adm_03_Kad\" type=\"radio\" [value]=\"2\" formControlName=\"checkB_Adm_03_Kad\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_Adm_03_Kad\" type=\"radio\" [value]=\"3\" formControlName=\"checkB_Adm_03_Kad\" />\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Bestemmingstype</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_Adm_05_BestemTyp\" type=\"radio\" [value]=\"1\" formControlName=\"checkB_Adm_05_BestemTyp\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_Adm_05_BestemTyp\" type=\"radio\" [value]=\"2\" formControlName=\"checkB_Adm_05_BestemTyp\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_Adm_05_BestemTyp\" type=\"radio\" [value]=\"3\" formControlName=\"checkB_Adm_05_BestemTyp\" />\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Vermelding ligging waterwingebied of beschermingszone</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_Adm_06_VermeldLigging\" type=\"radio\" [value]=\"1\" formControlName=\"checkB_Adm_06_VermeldLigging\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_Adm_06_VermeldLigging\" type=\"radio\" [value]=\"2\" formControlName=\"checkB_Adm_06_VermeldLigging\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_Adm_06_VermeldLigging\" type=\"radio\" [value]=\"3\" formControlName=\"checkB_Adm_06_VermeldLigging\" />\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <!-- Historisch onderzoek -->\r\n\r\n                <h6>Historisch onderzoek</h6>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Historiek terrein</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_His_01_terrein\" type=\"radio\" [value]=\"1\" formControlName=\"checkB_His_01_terrein\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_His_01_terrein\" type=\"radio\" [value]=\"2\" formControlName=\"checkB_His_01_terrein\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_His_01_terrein\" type=\"radio\" [value]=\"3\" formControlName=\"checkB_His_01_terrein\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Vlarebo-activiteiten (huidig en voormalig)</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_His_02_Vlarebo\" type=\"radio\" [value]=\"1\" formControlName=\"checkB_His_02_Vlarebo\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_His_02_Vlarebo\" type=\"radio\" [value]=\"2\" formControlName=\"checkB_His_02_Vlarebo\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_His_02_Vlarebo\" type=\"radio\" [value]=\"3\" formControlName=\"checkB_His_02_Vlarebo\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Vlarem-activiteiten (huidig en voormalig)</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_His_03_Vlarem\" type=\"radio\" [value]=\"1\" formControlName=\"checkB_His_03_Vlarem\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_His_03_Vlarem\" type=\"radio\" [value]=\"2\" formControlName=\"checkB_His_03_Vlarem\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_His_03_Vlarem\" type=\"radio\" [value]=\"3\" formControlName=\"checkB_His_03_Vlarem\" />\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Omschrijving lozingspunten</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_His_03B_Lozing\" type=\"radio\" [value]=\"1\" formControlName=\"checkB_His_03B_Lozing\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_His_03B_Lozing\" type=\"radio\" [value]=\"2\" formControlName=\"checkB_His_03B_Lozing\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_His_03B_Lozing\" type=\"radio\" [value]=\"3\" formControlName=\"checkB_His_03B_Lozing\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Organoleptische waarnemingen</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_His_04_Organolep\" type=\"radio\" [value]=\"1\" formControlName=\"checkB_His_04_Organolep\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_His_04_Organolep\" type=\"radio\" [value]=\"2\" formControlName=\"checkB_His_04_Organolep\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_His_04_Organolep\" type=\"radio\" [value]=\"3\" formControlName=\"checkB_His_04_Organolep\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Omschrijving voormalige bodemonderzoeken</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_His_05_Voormalig\" type=\"radio\" [value]=\"1\" formControlName=\"checkB_His_05_Voormalig\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_His_05_Voormalig\" type=\"radio\" [value]=\"2\" formControlName=\"checkB_His_05_Voormalig\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_His_05_Voormalig\" type=\"radio\" [value]=\"3\" formControlName=\"checkB_His_05_Voormalig\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Vermelding aanleiding tot aanvullende parameters</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_His_06_Aanvullend\" type=\"radio\" [value]=\"1\" formControlName=\"checkB_His_06_Aanvullend\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_His_06_Aanvullend\" type=\"radio\" [value]=\"2\" formControlName=\"checkB_His_06_Aanvullend\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_His_06_Aanvullend\" type=\"radio\" [value]=\"3\" formControlName=\"checkB_His_06_Aanvullend\" />\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- Reden / type grondverzet -->\r\n                <h6>Reden / type grondverzetk</h6>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Algemene beschrijving</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_Typ_01_Algemeen\" type=\"radio\" [value]=\"1\" formControlName=\"checkB_Typ_01_Algemeen\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_Typ_01_Algemeen\" type=\"radio\" [value]=\"2\" formControlName=\"checkB_Typ_01_Algemeen\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_Typ_01_Algemeen\" type=\"radio\" [value]=\"3\" formControlName=\"checkB_Typ_01_Algemeen\" />\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label class=\"positiefBesluit\">Positief besluit m.b.t. voorstudie</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_PosBesluit_01_Voorstudie\" type=\"radio\" [value]=\"1\" formControlName=\"checkB_PosBesluit_01_Voorstudie\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_PosBesluit_01_Voorstudie\" type=\"radio\" [value]=\"2\" formControlName=\"checkB_PosBesluit_01_Voorstudie\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkB_PosBesluit_01_Voorstudie\" type=\"radio\" [value]=\"3\" formControlName=\"checkB_PosBesluit_01_Voorstudie\" />\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n        <!-- C.Onderzoeksstrategie-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading panelHeaderSize expandablePanel\" id=\"headingOnderzoeksstrategie\">\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 pointer\" tooltip=\"klik om te openen\" data-toggle=\"collapse\" data-target=\"#collapseOnderzoeksstrategie\" aria-controls=\"collapseOnderzoeksstrategie\">\r\n                        <label> C.Onderzoeksstrategie</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_01\" type=\"radio\" [value]=\"1\" [attr.disabled]=\"true\" formControlName=\"checkC_01\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_01\" type=\"radio\" [value]=\"2\" [attr.disabled]=\"true\" formControlName=\"checkC_01\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_01\" type=\"radio\" [value]=\"3\" [attr.disabled]=\"true\" formControlName=\"checkC_01\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"panel-body collapse multi-collapse\" id=\"collapseOnderzoeksstrategie\" aria-labelledby=\"headingOnderzoeksstrategie\" data-parent=\"#accordion\">\r\n\r\n                <!-- Type Strategie-->\r\n\r\n                <h6>Type Strategie</h6>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Bouwprojecten</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Typ_01_BouwPrj\" type=\"radio\" [value]=\"1\" formControlName=\"checkC_Typ_01_BouwPrj\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Typ_01_BouwPrj\" type=\"radio\" [value]=\"2\" formControlName=\"checkC_Typ_01_BouwPrj\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Typ_01_BouwPrj\" type=\"radio\" [value]=\"3\" formControlName=\"checkC_Typ_01_BouwPrj\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Lijntrajecten</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Typ_02_LijnTrj\" type=\"radio\" [value]=\"1\" formControlName=\"checkC_Typ_02_LijnTrj\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Typ_02_LijnTrj\" type=\"radio\" [value]=\"2\" formControlName=\"checkC_Typ_02_LijnTrj\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Typ_02_LijnTrj\" type=\"radio\" [value]=\"3\" formControlName=\"checkC_Typ_02_LijnTrj\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Hopen uitgegraven bodem gekende herkomste</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Typ_03_Hopen\" type=\"radio\" [value]=\"1\" formControlName=\"checkC_Typ_03_Hopen\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Typ_03_Hopen\" type=\"radio\" [value]=\"2\" formControlName=\"checkC_Typ_03_Hopen\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Typ_03_Hopen\" type=\"radio\" [value]=\"3\" formControlName=\"checkC_Typ_03_Hopen\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Andere hopen uitgegraven bodem</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Typ_04_HopenAnder\" type=\"radio\" [value]=\"1\" formControlName=\"checkC_Typ_04_HopenAnder\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Typ_04_HopenAnder\" type=\"radio\" [value]=\"2\" formControlName=\"checkC_Typ_04_HopenAnder\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Typ_04_HopenAnder\" type=\"radio\" [value]=\"3\" formControlName=\"checkC_Typ_04_HopenAnder\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Gedeeltelijk binnen zone voor gebruik ter plaatsee</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Typ_05_Deels\" type=\"radio\" [value]=\"1\" formControlName=\"checkC_Typ_05_Deels\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Typ_05_Deels\" type=\"radio\" [value]=\"2\" formControlName=\"checkC_Typ_05_Deels\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Typ_05_Deels\" type=\"radio\" [value]=\"3\" formControlName=\"checkC_Typ_05_Deels\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <label>ONBEVAARBARE WATERLOPEN:</label>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Lineaire waterlopen</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Typ_06_OnbevLineair\" type=\"radio\" [value]=\"1\" formControlName=\"checkC_Typ_06_OnbevLineair\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Typ_06_OnbevLineair\" type=\"radio\" [value]=\"2\" formControlName=\"checkC_Typ_06_OnbevLineair\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Typ_06_OnbevLineair\" type=\"radio\" [value]=\"3\" formControlName=\"checkC_Typ_06_OnbevLineair\" />\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Bredere (niet-lineaire) </label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Typ_07_OnbevBreder\" type=\"radio\" [value]=\"1\" formControlName=\"checkC_Typ_07_OnbevBreder\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Typ_07_OnbevBreder\" type=\"radio\" [value]=\"2\" formControlName=\"checkC_Typ_07_OnbevBreder\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Typ_07_OnbevBreder\" type=\"radio\" [value]=\"3\" formControlName=\"checkC_Typ_07_OnbevBreder\" />\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Grachten en niet geklasseerde waterlopen </label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Typ_08_OnbevGracht\" type=\"radio\" [value]=\"1\" formControlName=\"checkC_Typ_08_OnbevGracht\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Typ_08_OnbevGracht\" type=\"radio\" [value]=\"2\" formControlName=\"checkC_Typ_08_OnbevGracht\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Typ_08_OnbevGracht\" type=\"radio\" [value]=\"3\" formControlName=\"checkC_Typ_08_OnbevGracht\" />\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <label>BEVAARBARE WATERLOPEN:</label>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Monstername ikv lagunering (verder te bekijken) </label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Typ_09_BevaarMonster\" type=\"radio\" [value]=\"1\" formControlName=\"checkC_Typ_09_BevaarMonster\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Typ_09_BevaarMonster\" type=\"radio\" [value]=\"2\" formControlName=\"checkC_Typ_09_BevaarMonster\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Typ_09_BevaarMonster\" type=\"radio\" [value]=\"3\" formControlName=\"checkC_Typ_09_BevaarMonster\" />\r\n                    </div>\r\n\r\n                </div>\r\n\r\n\r\n\r\n                <!-- Bemonstering-->\r\n                <h6>Bemonstering</h6>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Voldaan aan minimale strategie</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Mon_01B_MinStrategie\" type=\"radio\" [value]=\"1\" formControlName=\"checkC_Mon_01B_MinStrategie\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Mon_01B_MinStrategie\" type=\"radio\" [value]=\"2\" formControlName=\"checkC_Mon_01B_MinStrategie\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Mon_01B_MinStrategie\" type=\"radio\" [value]=\"3\" formControlName=\"checkC_Mon_01B_MinStrategie\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Verdachte punten bijkomend afzonderlijk bemonsterd</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Mon_02_Verdacht\" type=\"radio\" [value]=\"1\" formControlName=\"checkC_Mon_02_Verdacht\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Mon_02_Verdacht\" type=\"radio\" [value]=\"2\" formControlName=\"checkC_Mon_02_Verdacht\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Mon_02_Verdacht\" type=\"radio\" [value]=\"3\" formControlName=\"checkC_Mon_02_Verdacht\" />\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Monsternameverslag aanwezig</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Mon_04_Verslag\" type=\"radio\" [value]=\"1\" formControlName=\"checkC_Mon_04_Verslag\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Mon_04_Verslag\" type=\"radio\" [value]=\"2\" formControlName=\"checkC_Mon_04_Verslag\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Mon_04_Verslag\" type=\"radio\" [value]=\"3\" formControlName=\"checkC_Mon_04_Verslag\" />\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <!-- Analyses-->\r\n\r\n                <h6>Analyses</h6>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Bodemlagen correct weerhouden</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Ana_01_Correct\" type=\"radio\" [value]=\"1\" formControlName=\"checkC_Ana_01_Correct\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Ana_01_Correct\" type=\"radio\" [value]=\"2\" formControlName=\"checkC_Ana_01_Correct\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Ana_01_Correct\" type=\"radio\" [value]=\"3\" formControlName=\"checkC_Ana_01_Correct\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Aantal analyses voldoende per bodemlaag</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Ana_02_Voldoende\" type=\"radio\" [value]=\"1\" formControlName=\"checkC_Ana_02_Voldoende\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Ana_02_Voldoende\" type=\"radio\" [value]=\"2\" formControlName=\"checkC_Ana_02_Voldoende\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Ana_02_Voldoende\" type=\"radio\" [value]=\"3\" formControlName=\"checkC_Ana_02_Voldoende\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Verdachte punten afzonderlijk geanalyseerd</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Ana_03_Verdacht\" type=\"radio\" [value]=\"1\" formControlName=\"checkC_Ana_03_Verdacht\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Ana_03_Verdacht\" type=\"radio\" [value]=\"2\" formControlName=\"checkC_Ana_03_Verdacht\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Ana_03_Verdacht\" type=\"radio\" [value]=\"3\" formControlName=\"checkC_Ana_03_Verdacht\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>SAP-pakket bodem uitgevoerd</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Ana_04_SAP\" type=\"radio\" [value]=\"1\" formControlName=\"checkC_Ana_04_SAP\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Ana_04_SAP\" type=\"radio\" [value]=\"2\" formControlName=\"checkC_Ana_04_SAP\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Ana_04_SAP\" type=\"radio\" [value]=\"3\" formControlName=\"checkC_Ana_04_SAP\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>PCB bij wegenis</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Ana_04B_PCB\" type=\"radio\" [value]=\"1\" formControlName=\"checkC_Ana_04B_PCB\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Ana_04B_PCB\" type=\"radio\" [value]=\"2\" formControlName=\"checkC_Ana_04B_PCB\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Ana_04B_PCB\" type=\"radio\" [value]=\"3\" formControlName=\"checkC_Ana_04B_PCB\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Analysepakket niet-gekende herkomst uitgevoerd</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Ana_05_ntGekend\" type=\"radio\" [value]=\"1\" formControlName=\"checkC_Ana_05_ntGekend\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Ana_05_ntGekend\" type=\"radio\" [value]=\"2\" formControlName=\"checkC_Ana_05_ntGekend\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Ana_05_ntGekend\" type=\"radio\" [value]=\"3\" formControlName=\"checkC_Ana_05_ntGekend\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>SAP-pakket waterbodem uitgevoerd</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Ana_05B_SAPWater\" type=\"radio\" [value]=\"1\" formControlName=\"checkC_Ana_05B_SAPWater\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Ana_05B_SAPWater\" type=\"radio\" [value]=\"2\" formControlName=\"checkC_Ana_05B_SAPWater\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Ana_05B_SAPWater\" type=\"radio\" [value]=\"3\" formControlName=\"checkC_Ana_05B_SAPWater\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Bijkomende verdachte stoffen geanalyseerd</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Ana_06_Bijkomend\" type=\"radio\" [value]=\"1\" formControlName=\"checkC_Ana_06_Bijkomend\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Ana_06_Bijkomend\" type=\"radio\" [value]=\"2\" formControlName=\"checkC_Ana_06_Bijkomend\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Ana_06_Bijkomend\" type=\"radio\" [value]=\"3\" formControlName=\"checkC_Ana_06_Bijkomend\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Schud/kolomproef uitgevoerd</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Ana_07_Schud\" type=\"radio\" [value]=\"1\" formControlName=\"checkC_Ana_07_Schud\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Ana_07_Schud\" type=\"radio\" [value]=\"2\" formControlName=\"checkC_Ana_07_Schud\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Ana_07_Schud\" type=\"radio\" [value]=\"3\" formControlName=\"checkC_Ana_07_Schud\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Analyses uitgevoerd door erkend laboratorium</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Ana_08_ErkendLab\" type=\"radio\" [value]=\"1\" formControlName=\"checkC_Ana_08_ErkendLab\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Ana_08_ErkendLab\" type=\"radio\" [value]=\"2\" formControlName=\"checkC_Ana_08_ErkendLab\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Ana_08_ErkendLab\" type=\"radio\" [value]=\"3\" formControlName=\"checkC_Ana_08_ErkendLab\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Analyses uitgevoerd volgens CMA</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Ana_09_CMA\" type=\"radio\" [value]=\"1\" formControlName=\"checkC_Ana_09_CMA\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Ana_09_CMA\" type=\"radio\" [value]=\"2\" formControlName=\"checkC_Ana_09_CMA\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Ana_09_CMA\" type=\"radio\" [value]=\"3\" formControlName=\"checkC_Ana_09_CMA\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Analysecertificaten aanwezig</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Ana_10_Cert\" type=\"radio\" [value]=\"1\" formControlName=\"checkC_Ana_10_Cert\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Ana_10_Cert\" type=\"radio\" [value]=\"2\" formControlName=\"checkC_Ana_10_Cert\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_Ana_10_Cert\" type=\"radio\" [value]=\"3\" formControlName=\"checkC_Ana_10_Cert\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label class=\"positiefBesluit\">Positief besluit m.b.t. strategie en monsterneming</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_PosBesluit_01_Strat\" type=\"radio\" [value]=\"1\" formControlName=\"checkC_PosBesluit_01_Strat\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_PosBesluit_01_Strat\" type=\"radio\" [value]=\"2\" formControlName=\"checkC_PosBesluit_01_Strat\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkC_PosBesluit_01_Strat\" type=\"radio\" [value]=\"3\" formControlName=\"checkC_PosBesluit_01_Strat\" />\r\n                    </div>\r\n                </div>\r\n\r\n\r\n\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <!-- D.Interpretatie en evaluatie-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading panelHeaderSize expandablePanel\" id=\"headingInterpEval\">\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 pointer\" tooltip=\"klik om te openen\" data-toggle=\"collapse\" data-target=\"#collapseInterpEval\" aria-controls=\"collapseInterpEval\">\r\n                        <label> D.Interpretatie en evaluatie</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_01\" type=\"radio\" [value]=\"1\" [attr.disabled]=\"true\" formControlName=\"checkD_01\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_01\" type=\"radio\" [value]=\"2\" [attr.disabled]=\"true\" formControlName=\"checkD_01\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_01\" type=\"radio\" [value]=\"3\" [attr.disabled]=\"true\" formControlName=\"checkD_01\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"panel-body collapse multi-collapse\" id=\"collapseInterpEval\" aria-labelledby=\"headingInterpEval\" data-parent=\"#accordion\">\r\n                <!-- Evaluatie-->\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Enkel genormeerde parameters</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_01_NormPrm\" type=\"radio\" [value]=\"1\" formControlName=\"checkD_Eval_01_NormPrm\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_01_NormPrm\" type=\"radio\" [value]=\"2\" formControlName=\"checkD_Eval_01_NormPrm\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_01_NormPrm\" type=\"radio\" [value]=\"3\" formControlName=\"checkD_Eval_01_NormPrm\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Toetsingskader niet-genormeerde parameters</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_02_NtNormPrm\" type=\"radio\" [value]=\"1\" formControlName=\"checkD_Eval_02_NtNormPrm\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_02_NtNormPrm\" type=\"radio\" [value]=\"2\" formControlName=\"checkD_Eval_02_NtNormPrm\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_02_NtNormPrm\" type=\"radio\" [value]=\"3\" formControlName=\"checkD_Eval_02_NtNormPrm\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Evaluatie pH</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_03_pH\" type=\"radio\" [value]=\"1\" formControlName=\"checkD_Eval_03_pH\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_03_pH\" type=\"radio\" [value]=\"2\" formControlName=\"checkD_Eval_03_pH\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_03_pH\" type=\"radio\" [value]=\"3\" formControlName=\"checkD_Eval_03_pH\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Toetsingstabellen aanwezig</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_04_toetsTbl\" type=\"radio\" [value]=\"1\" formControlName=\"checkD_Eval_04_toetsTbl\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_04_toetsTbl\" type=\"radio\" [value]=\"2\" formControlName=\"checkD_Eval_04_toetsTbl\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_04_toetsTbl\" type=\"radio\" [value]=\"3\" formControlName=\"checkD_Eval_04_toetsTbl\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Correcte toetsingen</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_05_toetsing\" type=\"radio\" [value]=\"1\" formControlName=\"checkD_Eval_05_toetsing\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_05_toetsing\" type=\"radio\" [value]=\"2\" formControlName=\"checkD_Eval_05_toetsing\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_05_toetsing\" type=\"radio\" [value]=\"3\" formControlName=\"checkD_Eval_05_toetsing\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Correcte relatieve toetsing</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_06_ToetsMeth\" type=\"radio\" [value]=\"1\" formControlName=\"checkD_Eval_06_ToetsMeth\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_06_ToetsMeth\" type=\"radio\" [value]=\"2\" formControlName=\"checkD_Eval_06_ToetsMeth\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_06_ToetsMeth\" type=\"radio\" [value]=\"3\" formControlName=\"checkD_Eval_06_ToetsMeth\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Correcte DAEB</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_07_Herbruik\" type=\"radio\" [value]=\"1\" formControlName=\"checkD_Eval_07_Herbruik\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_07_Herbruik\" type=\"radio\" [value]=\"2\" formControlName=\"checkD_Eval_07_Herbruik\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_07_Herbruik\" type=\"radio\" [value]=\"3\" formControlName=\"checkD_Eval_07_Herbruik\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Uitspraak over gehalte stenen en bodemvreemde materialen</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_08_BodemVrmdMat\" type=\"radio\" [value]=\"1\" formControlName=\"checkD_Eval_08_BodemVrmdMat\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_08_BodemVrmdMat\" type=\"radio\" [value]=\"2\" formControlName=\"checkD_Eval_08_BodemVrmdMat\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_08_BodemVrmdMat\" type=\"radio\" [value]=\"3\" formControlName=\"checkD_Eval_08_BodemVrmdMat\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Uitspraak over asbest</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_09_Asbest\" type=\"radio\" [value]=\"1\" formControlName=\"checkD_Eval_09_Asbest\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_09_Asbest\" type=\"radio\" [value]=\"2\" formControlName=\"checkD_Eval_09_Asbest\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_09_Asbest\" type=\"radio\" [value]=\"3\" formControlName=\"checkD_Eval_09_Asbest\" />\r\n                    </div>\r\n                </div>\r\n\r\n\r\n\r\n                <!-- Correcte afbakening kadastrale werkzone(s)-->\r\n\r\n                <h6>Correcte afbakening kadastrale werkzone(s)</h6>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Hypothese heterogene verontreiniging</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_Kad_02_heterog\" type=\"radio\" [value]=\"1\" formControlName=\"checkD_Eval_Kad_02_heterog\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_Kad_02_heterog\" type=\"radio\" [value]=\"2\" formControlName=\"checkD_Eval_Kad_02_heterog\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_Kad_02_heterog\" type=\"radio\" [value]=\"3\" formControlName=\"checkD_Eval_Kad_02_heterog\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Hypothese homogene verontreiniging</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_Kad_03_Homog\" type=\"radio\" [value]=\"1\" formControlName=\"checkD_Eval_Kad_03_Homog\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_Kad_03_Homog\" type=\"radio\" [value]=\"2\" formControlName=\"checkD_Eval_Kad_03_Homog\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_Kad_03_Homog\" type=\"radio\" [value]=\"3\" formControlName=\"checkD_Eval_Kad_03_Homog\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Evaluatie waterloop en 5-meterstrook</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_Kad_04_Waterloop\" type=\"radio\" [value]=\"1\" formControlName=\"checkD_Eval_Kad_04_Waterloop\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_Kad_04_Waterloop\" type=\"radio\" [value]=\"2\" formControlName=\"checkD_Eval_Kad_04_Waterloop\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_Kad_04_Waterloop\" type=\"radio\" [value]=\"3\" formControlName=\"checkD_Eval_Kad_04_Waterloop\" />\r\n                    </div>\r\n                </div>\r\n\r\n                <h6>Bijkomende richtlijnen opgesteld</h6>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Bemaling</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_Rich_02_Bemaling\" type=\"radio\" [value]=\"1\" formControlName=\"checkD_Eval_Rich_02_Bemaling\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_Rich_02_Bemaling\" type=\"radio\" [value]=\"2\" formControlName=\"checkD_Eval_Rich_02_Bemaling\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_Rich_02_Bemaling\" type=\"radio\" [value]=\"3\" formControlName=\"checkD_Eval_Rich_02_Bemaling\" />\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Tussentijdse opslag</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_Rich_04_TssTijds\" type=\"radio\" [value]=\"1\" formControlName=\"checkD_Eval_Rich_04_TssTijds\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_Rich_04_TssTijds\" type=\"radio\" [value]=\"2\" formControlName=\"checkD_Eval_Rich_04_TssTijds\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_Rich_04_TssTijds\" type=\"radio\" [value]=\"3\" formControlName=\"checkD_Eval_Rich_04_TssTijds\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Milieukundige begeleiding</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_Rich_05_Milieu\" type=\"radio\" [value]=\"1\" formControlName=\"checkD_Eval_Rich_05_Milieu\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_Rich_05_Milieu\" type=\"radio\" [value]=\"2\" formControlName=\"checkD_Eval_Rich_05_Milieu\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_Rich_05_Milieu\" type=\"radio\" [value]=\"3\" formControlName=\"checkD_Eval_Rich_05_Milieu\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label>Voorwaarden gebruik mits CvGP</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_Rich_06_Voorw\" type=\"radio\" [value]=\"1\" formControlName=\"checkD_Eval_Rich_06_Voorw\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_Rich_06_Voorw\" type=\"radio\" [value]=\"2\" formControlName=\"checkD_Eval_Rich_06_Voorw\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_Rich_06_Voorw\" type=\"radio\" [value]=\"3\" formControlName=\"checkD_Eval_Rich_06_Voorw\" />\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8 \">\r\n                        <label class=\"positiefBesluit\">Positief besluit m.b.t. analyses en toetsing</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_11_PosBesluit\" type=\"radio\" [value]=\"1\" formControlName=\"checkD_Eval_11_PosBesluit\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_11_PosBesluit\" type=\"radio\" [value]=\"2\" formControlName=\"checkD_Eval_11_PosBesluit\" />\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline col-sm-1\">\r\n                        <input class=\"form-check-input\" name=\"checkD_Eval_11_PosBesluit\" type=\"radio\" [value]=\"3\" formControlName=\"checkD_Eval_11_PosBesluit\" />\r\n                    </div>\r\n                </div>\r\n\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <!-- E. Correct zoneringsplan - selectieve uitgraving uitvoerbaar-->\r\n    <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading panelHeaderSize\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-8\">\r\n                    <label> E. Correct zoneringsplan - selectieve uitgraving uitvoerbaar</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"checkE_ZoneringsPlan\" type=\"radio\" [value]=\"1\" formControlName=\"checkE_ZoneringsPlan\" />\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"checkE_ZoneringsPlan\" type=\"radio\" [value]=\"2\" formControlName=\"checkE_ZoneringsPlan\" />\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"checkE_ZoneringsPlan\" type=\"radio\" [value]=\"3\" formControlName=\"checkE_ZoneringsPlan\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- F. Correcte opmetingstabel-->\r\n    <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading panelHeaderSize\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-8\">\r\n                    <label>  F. Correcte opmetingstabel</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"checkF_OpmetingsTabel\" type=\"radio\" [value]=\"1\" formControlName=\"checkF_OpmetingsTabel\" />\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"checkF_OpmetingsTabel\" type=\"radio\" [value]=\"2\" formControlName=\"checkF_OpmetingsTabel\" />\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"checkF_OpmetingsTabel\" type=\"radio\" [value]=\"3\" formControlName=\"checkF_OpmetingsTabel\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- G  H I J K L -->\r\n    <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading panelHeaderSize\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-8\">\r\n                    <label>  G. Volumebalans</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"checkG_VolTabel\" type=\"radio\" [value]=\"1\" formControlName=\"checkG_VolTabel\" />\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"checkG_VolTabel\" type=\"radio\" [value]=\"2\" formControlName=\"checkG_VolTabel\" />\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"checkG_VolTabel\" type=\"radio\" [value]=\"3\" formControlName=\"checkG_VolTabel\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading panelHeaderSize\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-8\">\r\n                    <label>  H. Fotoreportage</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"checkH_FotoRep\" type=\"radio\" [value]=\"1\" formControlName=\"checkH_FotoRep\" />\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"checkH_FotoRep\" type=\"radio\" [value]=\"2\" formControlName=\"checkH_FotoRep\" />\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"checkH_FotoRep\" type=\"radio\" [value]=\"3\" formControlName=\"checkH_FotoRep\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading panelHeaderSize\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-8\">\r\n                    <label> I. Bouwplannen</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"checkI_Bouwplan\" type=\"radio\" [value]=\"1\" formControlName=\"checkI_Bouwplan\" />\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"checkI_Bouwplan\" type=\"radio\" [value]=\"2\" formControlName=\"checkI_Bouwplan\" />\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"checkI_Bouwplan\" type=\"radio\" [value]=\"3\" formControlName=\"checkI_Bouwplan\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading panelHeaderSize\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-8\">\r\n                    <label> J. Volumeberekeningen</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"checkJ_VolBerek\" type=\"radio\" [value]=\"1\" formControlName=\"checkJ_VolBerek\" />\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"checkJ_VolBerek\" type=\"radio\" [value]=\"2\" formControlName=\"checkJ_VolBerek\" />\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"checkJ_VolBerek\" type=\"radio\" [value]=\"3\" formControlName=\"checkJ_VolBerek\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading panelHeaderSize\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-8\">\r\n                    <label> K. Info vorige onderzoeken</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"checkK_InfoVorige\" type=\"radio\" [value]=\"1\" formControlName=\"checkK_InfoVorige\" />\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"checkK_InfoVorige\" type=\"radio\" [value]=\"2\" formControlName=\"checkK_InfoVorige\" />\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"checkK_InfoVorige\" type=\"radio\" [value]=\"3\" formControlName=\"checkK_InfoVorige\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading panelHeaderSize expandablePanel\" id=\"headingDelfStof\">\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-8 pointer\" tooltip=\"klik om te openen\" data-toggle=\"collapse\" data-target=\"#collapseDelfStof\" aria-controls=\"collapseDelfStof\">\r\n                    <label>L. Delfstoffentoets</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"checkL_Delfstof_view\" type=\"radio\" [value]=\"1\" formControlName=\"checkL_Delfstof_view\" [attr.disabled]=\"true\" />\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"checkL_Delfstof_view\" type=\"radio\" [value]=\"2\" formControlName=\"checkL_Delfstof_view\" [attr.disabled]=\"true\" />\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"checkL_Delfstof_view\" type=\"radio\" [value]=\"3\" formControlName=\"checkL_Delfstof_view\" [attr.disabled]=\"true\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"panel-body collapse\" id=\"collapseDelfStof\" aria-labelledby=\"headingHeadingDelfStof\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-3\"><label class=\"pull-left\">Geologische beschrijving</label></div>\r\n                <div class=\"col-sm-8\">\r\n                    <select class=\"controlWidth\" DottedBorderBelow formControlName=\"checkL_GeologischeBeschrijvingID\">\r\n                        <option value=\"\">Selecteer</option>\r\n                        <option *ngFor=\"let o of geoBeschrevingListItems\" [value]=\"o.id\">{{o.omschrijving}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-3\"><label class=\"pull-left\">overeenkomstige primaire oppervlaktedelfstof</label></div>\r\n                <div class=\"col-sm-8\">\r\n                    <select class=\"controlWidth\" DottedBorderBelow formControlName=\"checkL_PrimaireOppDelfstofID\">\r\n                        <option value=\"\">Selecteer</option>\r\n                        <option *ngFor=\"let o of primaireOppervlakteListItems\" [value]=\"o.id\">{{o.omschrijving}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-8\"><label class=\"pull-left\">Volume</label></div>\r\n                <div class=\"col-sm-3\"><input type=\"text\" formControlName=\"checkL_Volume\" maxlength=\"50\" DottedBorderBelow AllowOnlyNumbers class=\"form-control\"></div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-8 \">\r\n                    <label class=\"positiefBesluit\">Positief besluit m.b.t. delfstoffentoets</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"checkL_Delfstof\" type=\"radio\" [value]=\"1\" formControlName=\"checkL_Delfstof\" />\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"checkL_Delfstof\" type=\"radio\" [value]=\"2\" formControlName=\"checkL_Delfstof\" />\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"checkL_Delfstof\" type=\"radio\" [value]=\"3\" formControlName=\"checkL_Delfstof\" />\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n    <!-- Besluit-->\r\n\r\n    <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading panelHeaderSize expandablePanel\" id=\"headingBesluit\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-8 pointer\" tooltip=\"klik om te openen\" data-toggle=\"collapse\" aria-expanded=\"true\" data-target=\"#collapseBesluit\" aria-controls=\"collapseBesluit\">\r\n                    <label>Besluit</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"checkConclusionView\" type=\"radio\" [value]=\"1\" formControlName=\"checkConclusionView\" [attr.disabled]=\"true\" />\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"checkConclusionView\" type=\"radio\" [value]=\"2\" formControlName=\"checkConclusionView\" [attr.disabled]=\"true\" />\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"checkConclusionView\" type=\"radio\" [value]=\"3\" formControlName=\"checkConclusionView\" [attr.disabled]=\"true\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"panel-body collapse show\" id=\"collapseBesluit\" aria-labelledby=\"headingheadingBesluit\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-8 \">\r\n                    <label>Globale beoordeling technisch verslag rechtvaardigt het afgeven van een conformiteitsverklaring</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" id=\"checkConclusionOK\" name=\"checkConclusion\" type=\"radio\" [value]=\"1\" formControlName=\"checkConclusion\" />\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" id=\"checkConclusionNOK\" name=\"checkConclusion\" type=\"radio\" [value]=\"2\" formControlName=\"checkConclusion\" />\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" id=\"checkConclusionNVT\" name=\"checkConclusion\" type=\"radio\" [value]=\"3\" formControlName=\"checkConclusion\" />\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"!canSelectBesluit()\">\r\n                <div class=\"row\">\r\n                    <div *ngIf=\"!evaluatieForm.get('checkB_Typ_02_Volume').valid\" [hidden]=\"!evaluatieForm.controls['checkB_Typ_02_Volume'].errors.required\" class=\"col-sm-8\"><label class=\"validation\">- Volume VLAREBO (m3) is vereist.</label></div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div *ngIf=\"totalHoeveelheidErrorMessage != ''\" class=\"col-sm-8\"><label class=\"validation\">{{totalHoeveelheidErrorMessage}}</label></div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div *ngIf=\"vlareboVolumeErrorMessage != ''\" class=\"col-sm-8\"><label class=\"validation\">{{vlareboVolumeErrorMessage}}</label></div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div *ngIf=\"positivebesluitMessage != ''\" class=\"col-sm-8\"><label class=\"validation\">{{positivebesluitMessage}}</label></div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div *ngIf=\"dossierBeheerderIDErrorMessage != ''\" class=\"col-sm-8\"><label class=\"validation\">{{dossierBeheerderIDErrorMessage}}</label></div>\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"isConformiteit()\">\r\n                <div class=\"row\">\r\n                    <div *ngIf=\"isComformiteitMailSend == 0\" class=\"col-sm-8\"><label> <a (click)=\"sendConformiteitEmail()\"> Send Conformiteit email </a> </label></div>\r\n                    <div *ngIf=\"isComformiteitMailSend == 1\" class=\"col-sm-8\"><label>Comformiteit email werd reeds verzonden</label></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-left\" [class.validationHint]=\"evaluatieForm.get('checkB_Typ_02_Volume').errors\">* Volume VLAREBO (m3)</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" formControlName=\"checkB_Typ_02_Volume\" maxlength=\"50\" DottedBorderBelow AllowOnlyNumbers class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-left\">Volume VLAREMA (m3)</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" formControlName=\"checkB_Typ_02B_VlaremaVolume\" maxlength=\"50\" DottedBorderBelow AllowOnlyNumbers class=\"form-control\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-left\">Diepte (m-mv))</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"number\" step=\"0.01\" DottedBorderBelow formControlName=\"checkB_Typ_03_Diepte\" maxlength=\"50\" class=\"form-control\"></div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <!--<div class=\"row\">\r\n        <div class=\"col-sm-3\"><label class=\"pull-left\">Lengte traject (m)</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"number\" step=\"0.01\" DottedBorderBelow formControlName=\"checkB_Typ_04_Lenge\" maxlength=\"50\" class=\"form-control\"></div>\r\n    </div>-->\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3 \"><label [class.validationHint]=\"evaluatieForm.get('checkC_Mon_03_Datum').errors\">* Datum bemonstering</label></div>\r\n        <div class=\"col-sm-8\"><input type=\"text\" DottedBorderBelow formControlName=\"checkC_Mon_03_Datum\" class=\"form-control ng-trim-ignore\" tooltip=\"(bv. 31/1/2004)\" bsDatepicker placement=\"top left\" autocomplete=\"off\" [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n</form>\r\n\r\n";

/***/ }),

/***/ 667:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(668);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".setTop {\r\n    align-items: flex-start;\r\n}\r\n\r\n.setArea {\r\n    border: 1px solid #DADADA;\r\n}\r\n\r\n\r\n.locationBorderBottom {\r\n    border-bottom: 1px solid #7faa2a;\r\n}\r\n\r\n\r\n.controlWidth {\r\n    width: 100%;\r\n}\r\n\r\n.paneldefault {\r\n    border-color: #017342 !important;\r\n}\r\n.form-check{\r\nmargin-left:0.5rem;\r\n}\r\n\r\n.panelHeaderSize {\r\n    position:relative;\r\n    padding-bottom: 2px;\r\n    padding-top: 2px;\r\n\r\n}\r\n\r\n    .expandablePanel:hover {\r\n        position: relative;\r\n        padding-bottom: 2px;\r\n        padding-top: 2px;\r\n        color: white;\r\n        background-color: rgba(127, 170, 42,0.2);\r\n    }\r\n\r\n\r\n\r\n.positiefBesluit{\r\n    color:royalblue;\r\n    font-weight:bold;\r\n}\r\n\r\ncomformiteitLabel {\r\n    font-size: 12px;\r\n    font-weight: normal;\r\n    margin-bottom: 2px;\r\n    margin-top: 2px;\r\n    color: royalblue !important;\r\n}\r\n\r\ninput::-webkit-outer-spin-button,\r\ninput::-webkit-inner-spin-button {\r\n    /* display: none; <- Crashes Chrome on hover */\r\n    -webkit-appearance: none;\r\n    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */\r\n}\r\n\r\ninput[type=number] {\r\n    -moz-appearance: textfield; /* Firefox */\r\n}\r\n\r\n.pointer {\r\n    cursor: pointer;\r\n}", ""]);

// exports


/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwGvtStudieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_klant_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_datepicker__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_authentication_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var gwGvtStudieComponent = /** @class */ (function (_super) {
    __extends(gwGvtStudieComponent, _super);
    function gwGvtStudieComponent(_toastr, fb, httpKlant, router, route, auth, sanitizer, datePipe, localeService, _renderer, _elementRef) {
        var _this = _super.call(this, _toastr) || this;
        _this._toastr = _toastr;
        _this.fb = fb;
        _this.httpKlant = httpKlant;
        _this.router = router;
        _this.route = route;
        _this.auth = auth;
        _this.sanitizer = sanitizer;
        _this.datePipe = datePipe;
        _this.localeService = localeService;
        _this._renderer = _renderer;
        _this._elementRef = _elementRef;
        _this.studieFormValues = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        return _this;
    }
    gwGvtStudieComponent.prototype.ngOnChanges = function (changes) {
        if (changes['data']) {
            this.gvtJoinedData = changes.data.currentValue;
            this.initialiseForm();
            this.loadEntity();
        }
    };
    gwGvtStudieComponent.prototype.ngOnInit = function () {
        this.localeService.use("bootstrap-locale-nlbe");
        this.formOnInit();
    };
    gwGvtStudieComponent.prototype.formOnInit = function () {
        this.initialiseForm();
    };
    gwGvtStudieComponent.prototype.initialiseForm = function () {
        this.gvtStudieForm = this.fb.group({
            studieOntvangendeGrondOK: [""],
            studieDetail1: [""],
            studieDetail2: [""],
            studieDetail3: [""],
            studieDetail4: [""],
            studieDetail5: [""],
            studieDetail6: [""],
            studieDetail7: [""],
            studieDetail8: [""],
            studieDetail9: [""],
            studieDetail10: [""],
            studieDetail11: [""],
            studieDetail12: [""],
            studieDetail13: [""],
            studieDetail14: [""],
            studieDetail15: [""],
            studieDetail16: [""],
            studieDetail17: [""],
        });
        this.initialiseValueChangeHandlers();
    };
    gwGvtStudieComponent.prototype.loadEntity = function () {
        if (!this.gvtJoinedData)
            return;
        this.gvtStudieForm.patchValue({
            studieOntvangendeGrondOK: this.gvtJoinedData.studieOntvangendeGrondOK,
            studieDetail1: this.gvtJoinedData.studieDetail1,
            studieDetail2: this.gvtJoinedData.studieDetail2,
            studieDetail3: this.gvtJoinedData.studieDetail3,
            studieDetail4: this.gvtJoinedData.studieDetail4,
            studieDetail5: this.gvtJoinedData.studieDetail5,
            studieDetail6: this.gvtJoinedData.studieDetail6,
            studieDetail7: this.gvtJoinedData.studieDetail7,
            studieDetail8: this.gvtJoinedData.studieDetail8,
            studieDetail9: this.gvtJoinedData.studieDetail9,
            studieDetail10: this.gvtJoinedData.studieDetail10,
            studieDetail11: this.gvtJoinedData.studieDetail11,
            studieDetail12: this.gvtJoinedData.studieDetail12,
            studieDetail13: this.gvtJoinedData.studieDetail13,
            studieDetail14: this.gvtJoinedData.studieDetail14,
            studieDetail15: this.gvtJoinedData.studieDetail15,
            studieDetail16: this.gvtJoinedData.studieDetail16,
            studieDetail17: this.gvtJoinedData.studieDetail17,
        });
    };
    // business rules and errors handling
    gwGvtStudieComponent.prototype.initialiseValueChangeHandlers = function () {
        var _this = this;
        this.gvtStudieForm.get("studieDetail17").valueChanges.subscribe(function (item) {
            _this.gvtStudieForm.patchValue({
                studieOntvangendeGrondOK: item
            });
        });
        this.gvtStudieForm.valueChanges.debounceTime(2000).subscribe(function (item) {
            _this.studieFormValues.emit(item);
        });
    };
    gwGvtStudieComponent.prototype.getStudieData = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], gwGvtStudieComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], gwGvtStudieComponent.prototype, "studieFormValues", void 0);
    gwGvtStudieComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "gw-gvt-studie",
            template: __webpack_require__(670),
            styles: [__webpack_require__(671)],
            providers: [__WEBPACK_IMPORTED_MODULE_8__angular_common__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["ToastrService"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_5__services_http_klant_service__["a" /* HttpKlantService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_7__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["DomSanitizer"],
            __WEBPACK_IMPORTED_MODULE_8__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_datepicker__["a" /* BsLocaleService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], gwGvtStudieComponent);
    return gwGvtStudieComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__["b" /* GeneralScripts */]));



/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<form [formGroup]=\"gvtStudieForm\" class=\"container-fluid paddingTop10px paddingStudieForm \">\r\n\r\n\r\n\r\n\r\n    <div class=\"panel panel-default panelStudie\">\r\n        <div class=\"panel-heading panelHeaderSize expandablePanel\" id=\"headingBesluit\">\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-8 pointer\" data-toggle=\"collapse\" tooltip=\"klik om te openen\" data-target=\"#collapseBesluit\" aria-controls=\"collapseBesluit\">\r\n                    <label> Studie ontvangende&nbsp;bodem</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieOntvangendeGrondOK\" type=\"radio\" [value]=\"1\" formControlName=\"studieOntvangendeGrondOK\" [attr.disabled]=\"true\" />\r\n                    <label class=\"form-check-label\">Ja </label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieOntvangendeGrondOK\" type=\"radio\" [value]=\"2\" formControlName=\"studieOntvangendeGrondOK\" [attr.disabled]=\"true\" />\r\n                    <label class=\"form-check-label\">Nee </label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieOntvangendeGrondOK\" type=\"radio\" [value]=\"3\" formControlName=\"studieOntvangendeGrondOK\" [attr.disabled]=\"true\" />\r\n                    <label class=\"form-check-label\">n.v.t </label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"panel-body collapse\" id=\"collapseBesluit\" aria-labelledby=\"headingheadingBesluit\">\r\n\r\n            <h6>Locatie</h6>\r\n\r\n            <div class=\" row\">\r\n                <div class=\"col-sm-8 \">\r\n\r\n                    <label>\r\n                        straat/gemeente onderzoekslocatie komt overeen met plaats&nbsp; van voorgenomen\r\n                        aanvulling<br>\r\n                        Omlijning van de werkzone van de aanvullingszone:<br>\r\n                        Representatieve monstername m.b.t. de aanvullingszone\r\n                    </label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail1\" type=\"radio\" [value]=\"1\" formControlName=\"studieDetail1\" />\r\n                    <label class=\"form-check-label\">Ja</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail1\" type=\"radio\" [value]=\"2\" formControlName=\"studieDetail1\" />\r\n                    <label class=\"form-check-label\">Nee</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail1\" type=\"radio\" [value]=\"3\" formControlName=\"studieDetail1\" />\r\n                    <label class=\"form-check-label\">n.v.t</label>\r\n                </div>\r\n            </div>\r\n            <h6>Expertise </h6>\r\n\r\n            <div class=\" row\">\r\n                <div class=\"col-sm-8 \">\r\n                    <label>  Onderzoek uitgevoerd door EBSD</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail2\" type=\"radio\" [value]=\"1\" formControlName=\"studieDetail2\" />\r\n                    <label class=\"form-check-label\">Ja</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail2\" type=\"radio\" [value]=\"2\" formControlName=\"studieDetail2\" />\r\n                    <label class=\"form-check-label\">Nee</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail2\" type=\"radio\" [value]=\"3\" formControlName=\"studieDetail2\" />\r\n                    <label class=\"form-check-label\">n.v.t</label>\r\n                </div>\r\n            </div>\r\n\r\n            <h6>Aard van onderzoek en conclusies van EBSD</h6>\r\n\r\n            <div class=\" row\">\r\n                <div class=\"col-sm-8 \">\r\n                    <label>  1. Aanrijkingsonderzoek van ontvangende bodem</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail3\" type=\"radio\" [value]=\"1\" formControlName=\"studieDetail3\" />\r\n                    <label class=\"form-check-label\">Ja</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail3\" type=\"radio\" [value]=\"2\" formControlName=\"studieDetail3\" />\r\n                    <label class=\"form-check-label\">Nee</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail3\" type=\"radio\" [value]=\"3\" formControlName=\"studieDetail3\" />\r\n                    <label class=\"form-check-label\">n.v.t</label>\r\n                </div>\r\n            </div>\r\n            <div class=\" row\">\r\n                <div class=\"col-sm-8 \">\r\n                    <label> - Ontvangende bodem bevat hogere concentraties</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail4\" type=\"radio\" [value]=\"1\" formControlName=\"studieDetail4\" />\r\n                    <label class=\"form-check-label\">Ja</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail4\" type=\"radio\" [value]=\"2\" formControlName=\"studieDetail4\" />\r\n                    <label class=\"form-check-label\">Nee</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail4\" type=\"radio\" [value]=\"3\" formControlName=\"studieDetail4\" />\r\n                    <label class=\"form-check-label\">n.v.t</label>\r\n                </div>\r\n            </div>\r\n            <div class=\" row\">\r\n                <div class=\"col-sm-8 \">\r\n                    <label> - Besluit EBSD dat grondverzet kan worden toegestaan</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail5\" type=\"radio\" [value]=\"1\" formControlName=\"studieDetail5\" />\r\n                    <label class=\"form-check-label\">Ja</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail5\" type=\"radio\" [value]=\"2\" formControlName=\"studieDetail5\" />\r\n                    <label class=\"form-check-label\">Nee</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail5\" type=\"radio\" [value]=\"3\" formControlName=\"studieDetail5\" />\r\n                    <label class=\"form-check-label\">n.v.t</label>\r\n                </div>\r\n            </div>\r\n            <div class=\" row\">\r\n                <div class=\"col-sm-8 \">\r\n                    <label>\r\n                        2. Herzien procedure voor de beoordeling van het gebruik van grond in opvullingen\r\n                        en terreinverhogingen, studie vlg. standaard VITO\r\n                    </label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail6\" type=\"radio\" [value]=\"1\" formControlName=\"studieDetail6\" />\r\n                    <label class=\"form-check-label\">Ja</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail6\" type=\"radio\" [value]=\"2\" formControlName=\"studieDetail6\" />\r\n                    <label class=\"form-check-label\">Nee</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail6\" type=\"radio\" [value]=\"3\" formControlName=\"studieDetail6\" />\r\n                    <label class=\"form-check-label\">n.v.t</label>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\" row\">\r\n                <div class=\"col-sm-8 \">\r\n                    <label>  - grondwaterverontreiniging niet aannemelijk</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail7\" type=\"radio\" [value]=\"1\" formControlName=\"studieDetail7\" />\r\n                    <label class=\"form-check-label\">Ja</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail7\" type=\"radio\" [value]=\"2\" formControlName=\"studieDetail7\" />\r\n                    <label class=\"form-check-label\">Nee</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail7\" type=\"radio\" [value]=\"3\" formControlName=\"studieDetail7\" />\r\n                    <label class=\"form-check-label\">n.v.t</label>\r\n                </div>\r\n            </div>\r\n            <div class=\" row\">\r\n                <div class=\"col-sm-8 \">\r\n                    <label> - extra risico door mogelijke blootstelling niet aannemelijk</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail8\" type=\"radio\" [value]=\"1\" formControlName=\"studieDetail8\" />\r\n                    <label class=\"form-check-label\">Ja</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail8\" type=\"radio\" [value]=\"2\" formControlName=\"studieDetail8\" />\r\n                    <label class=\"form-check-label\">Nee</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail8\" type=\"radio\" [value]=\"3\" formControlName=\"studieDetail8\" />\r\n                    <label class=\"form-check-label\">n.v.t</label>\r\n                </div>\r\n            </div>\r\n            <div class=\" row\">\r\n                <div class=\"col-sm-8 \">\r\n                    <label>   - evaluatie milieukenmerken ontvangende bodem op basis van ontvangende grond</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail9\" type=\"radio\" [value]=\"1\" formControlName=\"studieDetail9\" />\r\n                    <label class=\"form-check-label\">Ja</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail9\" type=\"radio\" [value]=\"2\" formControlName=\"studieDetail9\" />\r\n                    <label class=\"form-check-label\">Nee</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail9\" type=\"radio\" [value]=\"3\" formControlName=\"studieDetail9\" />\r\n                    <label class=\"form-check-label\">n.v.t</label>\r\n                </div>\r\n            </div>\r\n            <div class=\" row\">\r\n                <div class=\"col-sm-8 \">\r\n                    <label>  - rekening gehouden met plaatselijke omstandigheden en toekomstig gebruik</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail10\" type=\"radio\" [value]=\"1\" formControlName=\"studieDetail10\" />\r\n                    <label class=\"form-check-label\">Ja</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail10\" type=\"radio\" [value]=\"2\" formControlName=\"studieDetail10\" />\r\n                    <label class=\"form-check-label\">Nee</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail10\" type=\"radio\" [value]=\"3\" formControlName=\"studieDetail10\" />\r\n                    <label class=\"form-check-label\">n.v.t</label>\r\n                </div>\r\n            </div>\r\n            <div class=\" row\">\r\n                <div class=\"col-sm-8 \">\r\n                    <label> - toetsingswijze per stofgroep</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail11\" type=\"radio\" [value]=\"1\" formControlName=\"studieDetail11\" />\r\n                    <label class=\"form-check-label\">Ja</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail11\" type=\"radio\" [value]=\"2\" formControlName=\"studieDetail11\" />\r\n                    <label class=\"form-check-label\">Nee</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail11\" type=\"radio\" [value]=\"3\" formControlName=\"studieDetail11\" />\r\n                    <label class=\"form-check-label\">n.v.t</label>\r\n                </div>\r\n            </div>\r\n            <div class=\" row\">\r\n                <div class=\"col-sm-8 \">\r\n                    <label>\r\n                        - toetsingswijze per stof (voor uitloogbare stoffen, indien conc. &gt; voorwaarden\r\n                        voor vrij gebruik\r\n                    </label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail12\" type=\"radio\" [value]=\"1\" formControlName=\"studieDetail12\" />\r\n                    <label class=\"form-check-label\">Ja</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail12\" type=\"radio\" [value]=\"2\" formControlName=\"studieDetail12\" />\r\n                    <label class=\"form-check-label\">Nee</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail12\" type=\"radio\" [value]=\"3\" formControlName=\"studieDetail12\" />\r\n                    <label class=\"form-check-label\">n.v.t</label>\r\n                </div>\r\n            </div>\r\n            <div class=\" row\">\r\n                <div class=\"col-sm-8 \">\r\n                    <label>  - verhoging conc. in het grondwater &lt; maximale aanvaarde toename</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail13\" type=\"radio\" [value]=\"1\" formControlName=\"studieDetail13\" />\r\n                    <label class=\"form-check-label\">Ja</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail13\" type=\"radio\" [value]=\"2\" formControlName=\"studieDetail13\" />\r\n                    <label class=\"form-check-label\">Nee</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail13\" type=\"radio\" [value]=\"3\" formControlName=\"studieDetail13\" />\r\n                    <label class=\"form-check-label\">n.v.t</label>\r\n                </div>\r\n            </div>\r\n            <div class=\" row\">\r\n                <div class=\"col-sm-8 \">\r\n                    <label>\r\n                        - bij reeds aangerijkte grondwaters treedt geen verder toename of overschreiding\r\n                        van de grondwatersanering op\r\n                    </label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail14\" type=\"radio\" [value]=\"1\" formControlName=\"studieDetail14\" />\r\n                    <label class=\"form-check-label\">Ja</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail14\" type=\"radio\" [value]=\"2\" formControlName=\"studieDetail14\" />\r\n                    <label class=\"form-check-label\">Nee</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail14\" type=\"radio\" [value]=\"3\" formControlName=\"studieDetail14\" />\r\n                    <label class=\"form-check-label\">n.v.t</label>\r\n                </div>\r\n            </div>\r\n            <div class=\" row\">\r\n                <div class=\"col-sm-8 \">\r\n                    <label> - besluit EBSD dat grondverzet kan worden toegestaan</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail15\" type=\"radio\" [value]=\"1\" formControlName=\"studieDetail15\" />\r\n                    <label class=\"form-check-label\">Ja</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail15\" type=\"radio\" [value]=\"2\" formControlName=\"studieDetail15\" />\r\n                    <label class=\"form-check-label\">Nee</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail15\" type=\"radio\" [value]=\"3\" formControlName=\"studieDetail15\" />\r\n                    <label class=\"form-check-label\">n.v.t</label>\r\n                </div>\r\n            </div>\r\n            <div class=\" row\">\r\n                <div class=\"col-sm-8 \">\r\n                    <label> 3. Maatwerk studie omdat sprake is van groeven, graverijen en putten</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail16\" type=\"radio\" [value]=\"1\" formControlName=\"studieDetail16\" />\r\n                    <label class=\"form-check-label\">Ja</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail16\" type=\"radio\" [value]=\"2\" formControlName=\"studieDetail16\" />\r\n                    <label class=\"form-check-label\">Nee</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail16\" type=\"radio\" [value]=\"3\" formControlName=\"studieDetail16\" />\r\n                    <label class=\"form-check-label\">n.v.t</label>\r\n                </div>\r\n\r\n\r\n\r\n\r\n            </div>\r\n            <h6>Besluit</h6>\r\n            <div class=\" row\">\r\n                <div class=\"col-sm-8 \">\r\n                    <label class=\"positiefBesluit\"> Op basis van de volledigheid van de uitgevoerde studie kan grondverzet worden toegestaan.</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail17\" type=\"radio\" [value]=\"1\" formControlName=\"studieDetail17\"/>\r\n                    <label class=\"form-check-label\">Ja</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail17\" type=\"radio\" [value]=\"2\" formControlName=\"studieDetail17\"/>\r\n                    <label class=\"form-check-label\">Nee</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline col-sm-1\">\r\n                    <input class=\"form-check-input\" name=\"studieDetail17\" type=\"radio\" [value]=\"3\" formControlName=\"studieDetail17\"/>\r\n                    <label class=\"form-check-label\">n.v.t</label>\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n       \r\n    </div>\r\n   \r\n\r\n\r\n</form>\r\n";

/***/ }),

/***/ 671:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(672);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 672:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".setTop {\r\n    align-items: flex-start;\r\n}\r\n\r\n.setArea {\r\n    border: 1px solid #DADADA;\r\n}\r\n\r\n\r\n.locationBorderBottom {\r\n    border-bottom: 1px solid #7faa2a;\r\n}\r\n\r\n\r\n.controlWidth {\r\n    width: 100%;\r\n}\r\n\r\n.paneldefault {\r\n    border-color: #017342 !important;\r\n}\r\n.form-check{\r\nmargin-left:0.5rem;\r\n}\r\n\r\n.panelHeaderSize {\r\n    position:relative;\r\n    padding-bottom: 2px;\r\n    padding-top: 2px;\r\n\r\n}\r\n\r\n    .expandablePanel:hover {\r\n        position: relative;\r\n        padding-bottom: 2px;\r\n        padding-top: 2px;\r\n        color: white;\r\n        background-color: rgba(127, 170, 42,0.2);\r\n    }\r\n\r\n.panelStudie{\r\n    padding:0 !important;\r\n}\r\n\r\n.positiefBesluit {\r\n    color: royalblue;\r\n    font-weight: bold;\r\n}\r\n\r\ninput::-webkit-outer-spin-button,\r\ninput::-webkit-inner-spin-button {\r\n    /* display: none; <- Crashes Chrome on hover */\r\n    -webkit-appearance: none;\r\n    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */\r\n}\r\n\r\ninput[type=number] {\r\n    -moz-appearance: textfield; /* Firefox */\r\n}\r\n\r\n.pointer {\r\n    cursor: pointer;\r\n}\r\n\r\n.paddingStudieForm {\r\n    padding-left: 0 !important;\r\n    padding-right: 0 !important;\r\n}", ""]);

// exports


/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwExportGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_klant_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_datepicker__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scripts_appLabels__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_datatable__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_authentication_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_http_file_service__ = __webpack_require__(42);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var gwExportGridComponent = /** @class */ (function (_super) {
    __extends(gwExportGridComponent, _super);
    function gwExportGridComponent(_toastr, fb, httpKlant, httpFile, router, route, auth, localeService) {
        var _this = _super.call(this, _toastr) || this;
        _this._toastr = _toastr;
        _this.fb = fb;
        _this.httpKlant = httpKlant;
        _this.httpFile = httpFile;
        _this.router = router;
        _this.route = route;
        _this.auth = auth;
        _this.localeService = localeService;
        _this.appLabels = __WEBPACK_IMPORTED_MODULE_7__scripts_appLabels__["a" /* appLabels */];
        // ngx-datatable related
        _this.rows = [];
        return _this;
    }
    gwExportGridComponent.prototype.ngOnChanges = function (changes) {
        if (changes['files']) {
            console.log(changes.files.currentValue, 'ffile');
            this.rows = changes.files.currentValue;
        }
    };
    gwExportGridComponent.prototype.ngOnInit = function () {
        this.localeService.use("bootstrap-locale-nlbe");
        this.loadFiles();
    };
    gwExportGridComponent.prototype.loadFiles = function () {
    };
    gwExportGridComponent.prototype.getRowClass = function (row) {
        return "ibtn";
    };
    gwExportGridComponent.prototype.onActivate = function (event) {
        if (event.type === "dblclick") {
            this.showFileWithId(event.row["fileId"]);
        }
    };
    gwExportGridComponent.prototype.showFileWithId = function (id) {
        //this.httpFile.LoadFileWithoutUserCheck(id).toPromise()
        //    .then((response: any) => {
        //        this.openFile(response);
        //    })
        //    .catch(_ => {
        //        this.showErrorToast("Fout bij het laden van de files");
        //    });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_datatable__["DatatableComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_datatable__["DatatableComponent"])
    ], gwExportGridComponent.prototype, "z_table", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], gwExportGridComponent.prototype, "files", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], gwExportGridComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], gwExportGridComponent.prototype, "fileType", void 0);
    gwExportGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "gw-export-grid",
            template: __webpack_require__(674),
            styles: [__webpack_require__(675)],
            providers: [__WEBPACK_IMPORTED_MODULE_10__angular_common__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["ToastrService"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_5__services_http_klant_service__["a" /* HttpKlantService */],
            __WEBPACK_IMPORTED_MODULE_11__services_http_file_service__["a" /* HttpFileService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_9__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_datepicker__["a" /* BsLocaleService */]])
    ], gwExportGridComponent);
    return gwExportGridComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__["b" /* GeneralScripts */]));



/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n        <div class=\"NgxTable\">\r\n            <ngx-datatable #table\r\n                           class=\"bootstrap\"\r\n                           (activate)=\"onActivate($event)\"\r\n                           [rows]=\"rows\"\r\n                           [columnMode]=\"'flex'\"\r\n                           [headerHeight]=\"25\"\r\n                           [footerHeight]=\"25\"\r\n                           [limit]=\"appLabels.tableViewRows\"\r\n                           [rowClass]=\"getRowClass\"\r\n                           [cssClasses]=\"appLabels.iconsCss\"\r\n                           [messages]=\"{totalMessage: appLabels.Total.toLowerCase(), emptyMessage: appLabels.NoDataToDisplay}\"\r\n                           [rowHeight]=\"'auto'\">\r\n\r\n                <!--[sorts]=\"[{prop:'fileName', dir:'desc' }]\"-->\r\n\r\n                <ngx-datatable-column [flexGrow]=\"1\" prop=\"id\" headerClass=\"NgxHeader\">\r\n                    <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        <span (click)=\"sort()\" class=\"NgxFilterLabel \"></span>\r\n                    </ng-template>\r\n                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                        <div   style=\"text-align: center\"><button type=\"button\" (click)=\"showFileWithId(row['id'])\" class=\"btn btn-default btnLoad\">Export</button></div>\r\n                    </ng-template>\r\n                </ngx-datatable-column>\r\n\r\n                <ngx-datatable-column [flexGrow]=\"15\" prop=\"fileName\" headerClass=\"NgxHeader\">\r\n                    <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template >\r\n                        \r\n                        <div  (click)=\"sort()\"   class=\"NgxFilterLabel\"> Title</div>\r\n                    </ng-template>\r\n                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                        {{value}} \r\n                    </ng-template>\r\n                </ngx-datatable-column>\r\n            </ngx-datatable>\r\n        </div>\r\n\r\n";

/***/ }),

/***/ 675:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(676);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 676:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".setTop {\r\n    align-items: flex-start;\r\n}\r\n\r\n.setArea {\r\n    border: 1px solid #DADADA;\r\n}\r\n\r\n\r\n.locationBorderBottom {\r\n    border-bottom: 1px solid #7faa2a;\r\n}\r\n\r\n\r\n.controlWidth {\r\n    width: 100%;\r\n}\r\n\r\n.btnLoad {\r\n    padding-bottom: 3px !important;\r\n    padding-top: 3px !important;\r\n    margin-top: 3px !important;\r\n    margin-bottom: 3px !important;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwModalGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http_tv_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scripts_appLabels__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var gwModalGridComponent = /** @class */ (function (_super) {
    __extends(gwModalGridComponent, _super);
    function gwModalGridComponent(_httpTV, _baseUrl, fb, _toastr) {
        var _this = _super.call(this, _toastr) || this;
        _this._httpTV = _httpTV;
        _this._baseUrl = _baseUrl;
        _this.fb = fb;
        _this._toastr = _toastr;
        _this.appLabels = __WEBPACK_IMPORTED_MODULE_6__scripts_appLabels__["a" /* appLabels */];
        _this.showNoDataFound = false;
        _this.showHowToSelect = false;
        _this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        return _this;
    }
    gwModalGridComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_7_jquery__(document).on("keydown", function (e) {
            if (e.which === 8 && !__WEBPACK_IMPORTED_MODULE_7_jquery__(e.target).is("input, textarea")) {
                e.preventDefault();
            }
        });
        this.tvFoundColumns = [
            { name: "Code", prop: "technischVerslagID", flexGrow: 2, headerClass: "NgxHeader" },
            { name: "Klant", prop: "naam", flexGrow: 5, headerClass: "NgxHeader" },
            { name: "Straat", flexGrow: 5, headerClass: "NgxHeader" },
            { name: "Gemeente", flexGrow: 5, headerClass: "NgxHeader" },
            { name: "Studiebureau", prop: "ebsd", flexGrow: 5, headerClass: "NgxHeader" }
        ];
    };
    gwModalGridComponent.prototype.getRowClass = function (row) {
        return "ibtn";
    };
    gwModalGridComponent.prototype.gtmSelect = function (event) {
        this.selected.emit(event.row.technischVerslagID);
        document.getElementById("closeTVzoek").click();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable__["DatatableComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable__["DatatableComponent"])
    ], gwModalGridComponent.prototype, "table", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], gwModalGridComponent.prototype, "selected", void 0);
    gwModalGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "gw-modal-grid",
            template: __webpack_require__(678),
            styles: [__webpack_require__(679)]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])("BASE_URL")),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_http_tv_service__["a" /* HttpTVService */], String, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["ToastrService"]])
    ], gwModalGridComponent);
    return gwModalGridComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__["b" /* GeneralScripts */]));



/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog modal-lg\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n            <h4 class=\"modal-title\">Selecteer een GTM om te koppelen </h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n           \r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-11\">\r\n                        <div class=\"NgxTable\">\r\n                            <ngx-datatable #table\r\n                                           class=\"bootstrap\"\r\n                                           [rows]=\"tvFoundRows\"\r\n                                           [columns]=\"tvFoundColumns\"\r\n                                           [columnMode]=\"'flex'\"\r\n                                           [footerHeight]=\"40\"\r\n                                           [limit]=\"15\"\r\n                                           [cssClasses]=\"appLabels.iconsCss\"\r\n                                           [rowClass]=\"getRowClass\"\r\n                                           [rowHeight]=\"'auto'\"\r\n                                           [messages]=\"{totalMessage: appLabels.Total.toLowerCase(), emptyMessage: appLabels.NoDataToDisplay}\"\r\n                                           [sorts]=\"[{prop:'technischVerslagID', dir:'asc' }]\"\r\n                                           (activate)=\"gtmSelect($event)\">\r\n                            </ngx-datatable>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" id=\"closeTVzoek\" class=\"btn btn-default\" data-dismiss=\"modal\">{{appLabels.Close}}</button>\r\n        </div>\r\n    </div>\r\n\r\n</div>";

/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(680);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".extraMargin {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.lessMargin {\r\n    margin-top: 10px;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwModalPuinComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http_tv_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scripts_appLabels__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var gwModalPuinComponent = /** @class */ (function (_super) {
    __extends(gwModalPuinComponent, _super);
    function gwModalPuinComponent(_httpTV, _baseUrl, fb, _toastr) {
        var _this = _super.call(this, _toastr) || this;
        _this._httpTV = _httpTV;
        _this._baseUrl = _baseUrl;
        _this.fb = fb;
        _this._toastr = _toastr;
        _this.appLabels = __WEBPACK_IMPORTED_MODULE_6__scripts_appLabels__["a" /* appLabels */];
        _this.showNoDataFound = false;
        _this.showHowToSelect = false;
        _this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        return _this;
    }
    gwModalPuinComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_7_jquery__(document).on("keydown", function (e) {
            if (e.which === 8 && !__WEBPACK_IMPORTED_MODULE_7_jquery__(e.target).is("input, textarea")) {
                e.preventDefault();
            }
        });
        this.data = [
            { id: 1, name: "Op basis van voorstudie, terreinbezoek en veldwaarnemingen heeft de erkende bodemsaneringsdeskundige besloten dat asbestanalyses niet noodzakelijk zijn." },
            { id: 2, name: "De erkende bodemsaneringsdeskundige heeft asbestanalyses uitgevoerd waaruit is gebleken dat de concentratie in de grove fractie (concentratie van het S monster (= fractie > 20mm), " },
            { id: 3, name: "De bemonsteringen i.k.v. het technisch verslag dateren van vóór het in voege treden van de Code van Goede Praktijk Gebruik bodemmaterialen - Leidraad asbest. De erkende " },
            { id: 4, name: "De bemonsteringen i.k.v. het technisch verslag dateren van vóór het in voege treden van de Code van Goede Praktijk Gebruik bodemmaterialen - Leidraad asbest. De erkende " },
            { id: 5, name: "De staalname i.k.v. het technisch verslag vond plaats na zeving. Het afgezeefde puin werd i.k.v. het technisch verslag afzonderlijk beoordeeld waarna de erkende " },
            { id: 6, name: "De staalname i.k.v. het technisch verslag vond plaats vóór zeving. De partij werd in zijn totaliteit beoordeeld waarna de erkende bodemsaneringsdeskundige heeft besloten dat er geen asbestverdacht materiaal kon worden vastgesteld." },
            { id: 7, name: "De staalname i.k.v. het technisch verslag vond plaats vóór zeving. De partij werd in zijn totaliteit beoordeeld waarna besloten werd dat er geen asbestverdacht materiaal kon worden vastgesteld." },
            { id: 8, name: "De staalname i.k.v. het technisch verslag vond plaats na zeving. Het afgezeefde puin werd i.k.v. het technisch verslag afzonderlijk beoordeeld waarna besloten werd dat er geen " },
        ];
    };
    gwModalPuinComponent.prototype.getRowClass = function (row) {
        return "ibtn";
    };
    gwModalPuinComponent.prototype.uitspraakSelect = function (event) {
        if (event.type === "dblclick") {
            this.selected.emit(event);
            document.getElementById("closeTVzoek").click();
        }
        else {
            this.selected.emit(event);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable__["DatatableComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable__["DatatableComponent"])
    ], gwModalPuinComponent.prototype, "table", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], gwModalPuinComponent.prototype, "selected", void 0);
    gwModalPuinComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "gw-modal-puin",
            template: __webpack_require__(682),
            styles: [__webpack_require__(683)]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])("BASE_URL")),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_http_tv_service__["a" /* HttpTVService */], String, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["ToastrService"]])
    ], gwModalPuinComponent);
    return gwModalPuinComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__["b" /* GeneralScripts */]));



/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog modal-lg\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n            <h4 class=\"modal-title\">Selecteer een uitspraak </h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n\r\n            <!--<div class=\"breadcrumb\" *ngFor=\" let o of data\">\r\n                <a class=\"breadcrumb-item \" aria-current=\"page\" (click)=\"uitspraakSelect(o.name)\">{{o.name}}</a>\r\n            </div>-->\r\n\r\n            <div class=\"panel panel-default\"  *ngFor=\" let o of data\">\r\n                <div class=\"panel-heading\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-10\">\r\n                            <label>  {{o.name}}</label>\r\n                        </div>\r\n                        <div class=\"form-check form-check-inline col-sm-1\">\r\n                            <input class=\"form-check-input\" name=\"checkA_01\" type=\"radio\" (click)=\"uitspraakSelect(o.name)\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" id=\"closeTVzoek\" class=\"btn btn-default\" data-dismiss=\"modal\">{{appLabels.Close}}</button>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n";

/***/ }),

/***/ 683:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(684);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 684:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".extraMargin {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.lessMargin {\r\n    margin-top: 10px;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwFileUploaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scripts_appLabels__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_http_file_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_authentication_service__ = __webpack_require__(34);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var gwFileUploaderComponent = /** @class */ (function (_super) {
    __extends(gwFileUploaderComponent, _super);
    function gwFileUploaderComponent(_httpFile, _baseUrl, _injector, fb, _toastr) {
        var _this = _super.call(this, _toastr) || this;
        _this._httpFile = _httpFile;
        _this._baseUrl = _baseUrl;
        _this._injector = _injector;
        _this.fb = fb;
        _this._toastr = _toastr;
        _this.uploaded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.inQueue = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.moveToFinalDestinationSucceeded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.appLabels = __WEBPACK_IMPORTED_MODULE_4__scripts_appLabels__["a" /* appLabels */];
        _this.uploadToTempApiUrl = _this._baseUrl + "api/Files/UploadToTempTableAsync";
        _this.col1 = "col-sm-3";
        _this.col2 = "col-sm-5";
        // ng2-File-Upload related
        _this.uploader = new __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__["FileUploader"]({
            url: _this.uploadToTempApiUrl,
            maxFileSize: __WEBPACK_IMPORTED_MODULE_4__scripts_appLabels__["a" /* appLabels */].maxFileSize
        });
        _this.hasBaseDropZoneOver = false;
        _this.uploadedIDs = [];
        return _this;
    }
    Object.defineProperty(gwFileUploaderComponent.prototype, "uplStatus", {
        set: function (value) {
            if (this.FForm) {
                if (!(value === "upload" || value === "clean"))
                    value = "selection";
                this.FForm.patchValue({ uploadStatus: value });
            }
        },
        enumerable: true,
        configurable: true
    });
    gwFileUploaderComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    gwFileUploaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.fullWidth) {
            this.col1 = "col-sm-4";
            this.col2 = "col-sm-7";
        }
        this.FForm = this.fb.group({
            uploadStatus: "selection"
        });
        // uploader does not pass through http interceptor, so you need to add the auth token to its header
        var auth = this._injector.get(__WEBPACK_IMPORTED_MODULE_7__services_authentication_service__["a" /* AuthenticationService */]);
        var uplHeader = [];
        uplHeader.push({ name: "Authorization", value: "Bearer " + auth.jwtToken });
        uplHeader.push({ name: "FileType", value: this.uplType });
        var uploadOptions = { headers: uplHeader };
        this.uploader.setOptions(uploadOptions);
        this.uploader.onErrorItem = function (item, response, status, headers) { return _this.onErrorItem(item, response, status, headers); };
        this.uploader.onSuccessItem = function (item, response, status, headers) { return _this.onSuccessItem(item, response, status, headers); };
        this.uploader.onBeforeUploadItem = function (file) { return file.withCredentials = false; };
        this.uploader.onAfterAddingFile = function () { return _this.emitQueueLength(); };
        var statusElement = this.FForm.get("uploadStatus");
        if (statusElement) {
            statusElement.valueChanges.subscribe(function (value) {
                switch (value) {
                    case "upload":
                        _this.uploader.uploadAll();
                        _this.uploadedIDs = [];
                        break;
                    case "clean":
                        _this.deleteUploadedFiles();
                        break;
                    case "selection":
                        break;
                }
            });
        }
    };
    gwFileUploaderComponent.prototype.emitQueueLength = function () {
        this.inQueue.emit(this.uploader.queue.length);
    };
    // ng2-file-upload response handler for each individual file's succeeded upload
    gwFileUploaderComponent.prototype.onSuccessItem = function (item, response, status, headers) {
        var data = JSON.parse(response); //success server response
        this.uploadedIDs.push(data.uploadId);
        // only when the last async has completed send the form data
        if (this.uploadedIDs.length !== this.uploader.queue.length)
            return;
        var ids = this.uploadedIDs.slice();
        this.uploaded.emit(ids);
    };
    // ng2-file-upload response handler for each individual file's failed upload
    gwFileUploaderComponent.prototype.onErrorItem = function (item, response, status, headers) {
        this.uploader.cancelAll();
        this.uploader.clearQueue();
        this.deleteUploadedFiles();
        this.showWarningToast(response);
    };
    gwFileUploaderComponent.prototype.deleteUploadedFiles = function () {
        var _this = this;
        if (this.uploadedIDs.length <= 0)
            return;
        this._httpFile.deleteUploadedFiles(JSON.stringify(this.uploadedIDs))
            .subscribe(function (response) {
            _this.uploadedIDs = [];
            _this.uploader.clearQueue();
        });
    };
    gwFileUploaderComponent.prototype.uploadFiles = function () {
        this.uploader.uploadAll();
        this.uploadedIDs = [];
    };
    gwFileUploaderComponent.prototype.clearQueue = function () {
        this.uploadedIDs = [];
        this.uploader.clearQueue();
        this.FForm.patchValue({ uploadStatus: "selection" });
    };
    gwFileUploaderComponent.prototype.moveFilesToFinalLocation = function (documentId) {
        var _this = this;
        if (this.uploadedIDs.length <= 0)
            return;
        this._httpFile.moveFilesFromTempToFinalLocation(documentId, this.uploadedIDs)
            .toPromise()
            .then(function () {
            _this.uploadedIDs = [];
            _this.uploader.clearQueue();
            _this.FForm.patchValue({ uploadStatus: "selection" });
            _this.moveToFinalDestinationSucceeded.emit(true);
        })
            .catch(function () {
            _this.uploadedIDs = [];
            _this.uploader.clearQueue();
            _this.FForm.patchValue({ uploadStatus: "selection" });
            _this.moveToFinalDestinationSucceeded.emit(false);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("status"),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], gwFileUploaderComponent.prototype, "uplStatus", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("fileType"),
        __metadata("design:type", String)
    ], gwFileUploaderComponent.prototype, "uplType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("hasSendButton"),
        __metadata("design:type", Boolean)
    ], gwFileUploaderComponent.prototype, "hasSendButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("fullWidth"),
        __metadata("design:type", Boolean)
    ], gwFileUploaderComponent.prototype, "fullWidth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], gwFileUploaderComponent.prototype, "uploaded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], gwFileUploaderComponent.prototype, "inQueue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], gwFileUploaderComponent.prototype, "moveToFinalDestinationSucceeded", void 0);
    gwFileUploaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "gw-file-uploader",
            template: __webpack_require__(686),
            styles: [__webpack_require__(687)]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])("BASE_URL")),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_http_file_service__["a" /* HttpFileService */], String, __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["ToastrService"]])
    ], gwFileUploaderComponent);
    return gwFileUploaderComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__["b" /* GeneralScripts */]));



/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = "<div class=\"row setTop\">\r\n    <div class=\"col-sm-3\" *ngIf=\"!fullWidth\"></div>\r\n    <div class=\"{{col1}}\">\r\n        <div>\r\n            <h5 class=\"h5Correctie\">Bestanden slepen of selecteren</h5>\r\n\r\n            <div ng2FileDrop\r\n                 [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\r\n                 (fileOver)=\"fileOverBase($event)\"\r\n                 [uploader]=\"uploader\"\r\n                 class=\"well\">\r\n                Sleep je bestanden hierin\r\n            </div>\r\n            <div>\r\n                <button type=\"button\" (click)=\"gwFiles.click()\" class=\"btn btn-default\" style=\"width: 100%;\" [disabled]=\"uploader.isUploading\">Bestand(en) selecteren ...</button>\r\n                <button type=\"button\" (click)=\"uploadFiles()\" class=\"btn btn-default marginTop10px\" style=\"width: 100%;\" [disabled]=\"!uploader.queue.length || uploader.isUploading\" *ngIf=\"hasSendButton\">Bestand(en) opslaan</button>\r\n            </div>\r\n            <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple class=\"TVupload\" style=\"display:none;\" #gwFiles /><br />\r\n        </div>\r\n    </div>\r\n    <div class=\"{{col2}}\">\r\n        <div>\r\n            <h5 class=\"h5Correctie\">Upload wachtrij - wachtrij lengte: {{ uploader?.queue?.length }}</h5>\r\n            <table class=\"table\">\r\n                <thead>\r\n                    <tr>\r\n                        <th width=\"50%\">Naam</th>\r\n                        <th *ngIf=\"uploader.options.isHTML5\">Grootte</th>\r\n                        <th *ngIf=\"uploader.options.isHTML5\">Progressie</th>\r\n                        <th>Status</th>\r\n                        <th>Acties</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of uploader.queue\">\r\n                        <td><strong>{{ item?.file?.name }}</strong></td>\r\n                        <td *ngIf=\"uploader.options.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\r\n                        <td *ngIf=\"uploader.options.isHTML5\">\r\n                            <div class=\"progress\" style=\"margin-bottom: 0;\">\r\n                                <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"text-center\">\r\n                            <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\r\n                            <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\r\n                            <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\r\n                        </td>\r\n                        <td nowrap>\r\n                            <button type=\"button\" class=\"btn btn-warning btn-xs\"\r\n                                    (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\r\n                                <span class=\"glyphicon glyphicon-ban-circle\"></span>Annuleren\r\n                            </button>\r\n                            <button type=\"button\" class=\"btn btn-danger btn-xs\"\r\n                                    (click)=\"item.remove(); emitQueueLength();\">\r\n                                <span class=\"glyphicon glyphicon-trash\"></span>Verwijderen\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n            <div>\r\n                <div>\r\n                    Bestanden in de wachtrij:\r\n                    <div class=\"progress\" style=\"\">\r\n                        <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\r\n                    </div>\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-warning btn-s\"\r\n                        (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\r\n                    <span class=\"glyphicon glyphicon-ban-circle\"></span>&nbsp;{{appLabels.CancelAll}}\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-danger btn-s\"\r\n                        (click)=\"uploader.clearQueue(); ; emitQueueLength();\" [disabled]=\"!uploader.queue.length\">\r\n                    <span class=\"glyphicon glyphicon-trash\"></span>&nbsp;{{appLabels.DeleteAll}}\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ }),

/***/ 687:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(688);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 688:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".h5Correctie {\r\n    margin-left: 0px;\r\n}\r\n\r\n.setTop {\r\n    align-items: flex-start;\r\n}", ""]);

// exports


/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllowOnlyNumbersDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllowOnlyNumbersDirective = /** @class */ (function () {
    function AllowOnlyNumbersDirective(el, control) {
        this.el = el;
        this.control = control;
        this.OnlyNumber = true;
        this.Minimum = null;
        this.Maximum = null;
    }
    AllowOnlyNumbersDirective.prototype.onKeyDown = function (event) {
        if (!this.OnlyNumber) {
            return;
        }
        var e = event;
        //if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
        //    // Allow: Ctrl+A
        //    (e.keyCode === 65 && e.ctrlKey) ||
        //    // Allow: Ctrl+V
        //    (e.keyCode === 86 && e.ctrlKey) ||
        //    // Allow: Ctrl+C
        //    (e.keyCode === 67 && e.ctrlKey) ||
        //    // Allow: Ctrl+X
        //    (e.keyCode === 88 && e.ctrlKey) ||
        //    // Allow: home, end, left, right
        //    (e.keyCode >= 35 && e.keyCode <= 39)) {
        //    // let it happen, don't do anything
        //    return;
        //}
        if ([46, 8, 9].indexOf(e.keyCode) !== -1 || // delete en backspace en tab
            // Allow: Ctrl+A
            (e.keyCode === 65 && e.ctrlKey) ||
            // Allow: Ctrl+V
            (e.keyCode === 86 && e.ctrlKey) ||
            // Allow: Ctrl+C
            (e.keyCode === 67 && e.ctrlKey) ||
            // Allow: Ctrl+X
            (e.keyCode === 88 && e.ctrlKey) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].indexOf(e.key) === -1) {
            e.preventDefault();
        }
    };
    AllowOnlyNumbersDirective.prototype.onPaste = function (event) {
        if (!this.OnlyNumber) {
            return;
        }
        var control = this.control.control;
        var el = this.el;
        var setValue = this.setValue;
        setTimeout(function () {
            var data = el.nativeElement.value;
            var numericData = data.replace(/\D/g, "");
            if (data.length !== numericData.length) {
                setValue(control, el, numericData);
            }
        }, 0);
    };
    AllowOnlyNumbersDirective.prototype.onBlur = function (event) {
        var data;
        var value;
        if (this.Minimum != null) {
            data = this.el.nativeElement.value;
            value = parseInt(data);
            if (value < this.Minimum && this.control.control != null) {
                this.control.control.setErrors({ 'belowMin': true });
                //this.setValue(this.control.control, this.el, this.Minimum);
            }
        }
        if (this.Maximum != null) {
            data = this.el.nativeElement.value;
            value = parseInt(data);
            if (value > this.Maximum && this.control.control != null) {
                this.control.control.setErrors({ 'aboveMax': true });
                //this.setValue(this.control.control, this.el, this.Maximum);
            }
        }
    };
    AllowOnlyNumbersDirective.prototype.setValue = function (control, el, value) {
        if (control != null)
            //control.setValue(value); 
            //VM: changed to patchValue (setvalue doesn't work)
            control.patchValue(value);
        else
            el.nativeElement.value = value;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AllowOnlyNumbersDirective.prototype, "OnlyNumber", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], AllowOnlyNumbersDirective.prototype, "Minimum", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], AllowOnlyNumbersDirective.prototype, "Maximum", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("keydown", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AllowOnlyNumbersDirective.prototype, "onKeyDown", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("paste", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AllowOnlyNumbersDirective.prototype, "onPaste", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("blur", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AllowOnlyNumbersDirective.prototype, "onBlur", null);
    AllowOnlyNumbersDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: "[AllowOnlyNumbers]"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgControl"]])
    ], AllowOnlyNumbersDirective);
    return AllowOnlyNumbersDirective;
}());



/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DottedBorderBelowDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scripts_general_scripts__ = __webpack_require__(3);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DottedBorderBelowDirective = /** @class */ (function (_super) {
    __extends(DottedBorderBelowDirective, _super);
    function DottedBorderBelowDirective(el, renderer, control) {
        var _this = _super.call(this, null) || this;
        _this.el = el;
        _this.renderer = renderer;
        _this.control = control;
        return _this;
    }
    DottedBorderBelowDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.addRemoveClass(this.control.value);
        if (this.control.valueChanges == null)
            return;
        this.control.valueChanges.subscribe(function (value) {
            _this.addRemoveClass(value);
        });
    };
    DottedBorderBelowDirective.prototype.addRemoveClass = function (value) {
        if (this.isNullOrWhitespace(value)) {
            this.renderer.addClass(this.el.nativeElement, "dotted-border-below");
        }
        else {
            this.renderer.removeClass(this.el.nativeElement, "dotted-border-below");
        }
    };
    DottedBorderBelowDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: "[DottedBorderBelow]"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgControl"]])
    ], DottedBorderBelowDirective);
    return DottedBorderBelowDirective;
}(__WEBPACK_IMPORTED_MODULE_2__scripts_general_scripts__["b" /* GeneralScripts */]));



/***/ })

};;