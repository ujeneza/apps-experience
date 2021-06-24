exports.ids = [2];
exports.modules = {

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bodembeheerrapport_grid_bodembeheerrapport_grid_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__ = __webpack_require__(10);
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






var gwHomeComponent = /** @class */ (function (_super) {
    __extends(gwHomeComponent, _super);
    function gwHomeComponent(_toastr, router, _route, auth) {
        var _this = _super.call(this, _toastr) || this;
        _this._toastr = _toastr;
        _this.router = router;
        _this._route = _route;
        _this.auth = auth;
        _this.btns = [false, true, false, true, true, true, true, true, false];
        _this.allButtonsShown = true;
        _this.BBRFillType = __WEBPACK_IMPORTED_MODULE_4__bodembeheerrapport_grid_bodembeheerrapport_grid_component__["b" /* FillTypes */].ForBbrOverzicht;
        _this.UPLFillType = __WEBPACK_IMPORTED_MODULE_4__bodembeheerrapport_grid_bodembeheerrapport_grid_component__["b" /* FillTypes */].ForOnlineFilledOrUpload;
        _this.isGWUser = null;
        _this.userRole = __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__["b" /* UserRoles */].Klant;
        _this.allowDelete = false;
        _this.PgIndex = -1;
        _this.useToolbar = false;
        // needed in order to retrieve the changed url queryparams on a postback
        _this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        return _this;
    }
    Object.defineProperty(gwHomeComponent.prototype, "hasToolbar", {
        get: function () {
            return this.useToolbar;
        },
        set: function (value) {
            this.useToolbar = "" + value !== "false";
        },
        enumerable: true,
        configurable: true
    });
    gwHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var snapshot = this._route.snapshot;
        if (snapshot.queryParams["Pg"]) {
            this.PgIndex = snapshot.queryParams["Pg"];
        }
        ;
        this.auth.getRole().toPromise()
            .then(function (role) {
            _this.isGWUser = (role !== __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__["b" /* UserRoles */].Klant);
            _this.userRole = role;
            if (_this.isGWUser && _this.userRole == __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__["b" /* UserRoles */].Grondwijzer) {
                _this.allowDelete = true;
            }
        });
        if (snapshot.queryParams["T"]) {
            switch (snapshot.queryParams["T"]) {
                case "3":
                    this.BBRFillType = __WEBPACK_IMPORTED_MODULE_4__bodembeheerrapport_grid_bodembeheerrapport_grid_component__["b" /* FillTypes */].ForAanvragenBbr;
                    break;
            }
        }
        if (this.PgIndex === -1) {
            this.allButtonsShown = this.detectAllButtonsShown();
        }
        else {
            this.singleButton(this.PgIndex);
        }
    };
    gwHomeComponent.prototype.toggleButton = function (btnIndex) {
        if (btnIndex === -1) {
            if (!this.allButtonsShown) {
                var i, n = this.btns.length;
                for (i = 0; i < n; ++i) {
                    this.btns[i] = true;
                }
            }
        }
        else {
            this.btns[btnIndex] = !this.btns[btnIndex];
        }
        this.allButtonsShown = this.detectAllButtonsShown();
    };
    gwHomeComponent.prototype.singleButton = function (btnIndex) {
        var i, n = this.btns.length;
        for (i = 0; i < n; ++i) {
            this.btns[i] = false;
        }
        this.btns[btnIndex] = true;
        this.allButtonsShown = false;
    };
    gwHomeComponent.prototype.getButtonClass = function (blnValue) {
        return blnValue ? 'btn-on' : 'btn-off';
    };
    gwHomeComponent.prototype.getSingleClass = function (blnValue) {
        return blnValue ? 'btn-single-on' : 'btn-single-off';
    };
    gwHomeComponent.prototype.detectAllButtonsShown = function () {
        var i, n = this.btns.length;
        for (i = 0; i < n; ++i) {
            if (this.btns[i] === false)
                return false;
        }
        return true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('hasToolbar'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], gwHomeComponent.prototype, "hasToolbar", null);
    gwHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "gw-home",
            template: __webpack_require__(623),
            styles: [__webpack_require__(624)]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["ToastrService"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__["a" /* AuthenticationService */]])
    ], gwHomeComponent);
    return gwHomeComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__["b" /* GeneralScripts */]));



/***/ }),

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GwGridModule", function() { return GwGridModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_common_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_GW_gw_home_gw_home_component__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_GW_gw_bbr_grid_gw_bbr_grid_component__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_GW_gw_bbr_zoekuitgebreid_gw_bbr_zoekuitgebreid_component__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_GW_gw_gtm_grid_gw_gtm_grid_component__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_GW_gw_gtm_zoekuitgebreid_gw_gtm_zoekuitgebreid_component__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_GW_gw_gvt_grid_gw_gvt_grid_component__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_GW_gw_gvt_zoekuitgebreid_gw_gvt_zoekuitgebreid_component__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_GW_gw_klant_grid_gw_klant_grid_component__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_GW_gw_klantwijz_grid_gw_klantwijz_grid_component__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_GW_gw_klant_zoekuitgebreid_gw_klant_zoekuitgebreid_component__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_GW_gw_kw_grid_gw_kw_grid_component__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_GW_gw_kw_zoekuitgebreid_gw_kw_zoekuitgebreid_component__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_GW_gw_tv_grid_gw_tv_grid_component__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_GW_gw_tv_zoekuitgebreid_gw_tv_zoekuitgebreid_component__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__swimlane_ngx_datatable__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular_tree_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular_tree_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_angular_tree_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_bootstrap__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_ngx_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap_chronos__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_bootstrap_locale__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_file_upload__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng_trim_value_accessor__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng_trim_value_accessor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_ng_trim_value_accessor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_http_mail_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_event_listener_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_http_interceptor_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_authentication_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_http_bbr_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_http_dossier_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_http_file_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_http_gtm_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_http_gvt_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_http_klant_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_http_kleinewerven_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_http_tv_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_http_tvzone_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_http_puin_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_localstorage_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__services_loading_animation_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__gw_grid_routing_module__ = __webpack_require__(683);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// GW Related



















Object(__WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap_chronos__["a" /* defineLocale */])("bootstrap-locale-nlbe", __WEBPACK_IMPORTED_MODULE_23_ngx_bootstrap_locale__["a" /* nlBeLocale */]);



















var GwGridModule = /** @class */ (function () {
    function GwGridModule() {
    }
    GwGridModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_24_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_19__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_20_angular_tree_component__["TreeModule"],
                __WEBPACK_IMPORTED_MODULE_25_ng_trim_value_accessor__["TrimValueAccessorModule"],
                __WEBPACK_IMPORTED_MODULE_21_ngx_bootstrap__["TooltipModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_21_ngx_bootstrap__["BsDatepickerModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_21_ngx_bootstrap__["PopoverModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_42__gw_grid_routing_module__["a" /* GwGridRoutingModule */]
                // ToastrModule.forRoot(),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"]
            ],
            declarations: [
                // GW Related
                __WEBPACK_IMPORTED_MODULE_5__components_GW_gw_home_gw_home_component__["a" /* gwHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_GW_gw_bbr_grid_gw_bbr_grid_component__["a" /* gwBBRGridComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_GW_gw_bbr_zoekuitgebreid_gw_bbr_zoekuitgebreid_component__["a" /* gwBBRZoekUitgebreidComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_GW_gw_gtm_grid_gw_gtm_grid_component__["a" /* gwGTMGridComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_GW_gw_gtm_zoekuitgebreid_gw_gtm_zoekuitgebreid_component__["a" /* gwGTMZoekUitgebreidComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_GW_gw_gvt_grid_gw_gvt_grid_component__["a" /* gwGVTGridComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_GW_gw_gvt_zoekuitgebreid_gw_gvt_zoekuitgebreid_component__["a" /* gwGVTZoekUitgebreidComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_GW_gw_klant_grid_gw_klant_grid_component__["a" /* gwKlantGridComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_GW_gw_klantwijz_grid_gw_klantwijz_grid_component__["a" /* gwKlantWijzGridComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_GW_gw_klant_zoekuitgebreid_gw_klant_zoekuitgebreid_component__["a" /* gwKlantZoekUitgebreidComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_GW_gw_kw_grid_gw_kw_grid_component__["a" /* gwKWGridComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_GW_gw_kw_zoekuitgebreid_gw_kw_zoekuitgebreid_component__["a" /* gwKWZoekUitgebreidComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_GW_gw_tv_grid_gw_tv_grid_component__["a" /* gwTVGridComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_GW_gw_tv_zoekuitgebreid_gw_tv_zoekuitgebreid_component__["a" /* gwTVZoekUitgebreidComponent */],
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["HTTP_INTERCEPTORS"], useClass: __WEBPACK_IMPORTED_MODULE_28__services_http_interceptor_service__["a" /* HttpInterceptorService */], multi: true },
                __WEBPACK_IMPORTED_MODULE_29__services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_30__services_http_bbr_service__["a" /* HttpBBRService */],
                __WEBPACK_IMPORTED_MODULE_31__services_http_dossier_service__["a" /* HttpDossierService */],
                __WEBPACK_IMPORTED_MODULE_32__services_http_file_service__["a" /* HttpFileService */],
                __WEBPACK_IMPORTED_MODULE_33__services_http_gtm_service__["a" /* HttpGTMService */],
                __WEBPACK_IMPORTED_MODULE_34__services_http_gvt_service__["a" /* HttpGVTService */],
                __WEBPACK_IMPORTED_MODULE_35__services_http_klant_service__["a" /* HttpKlantService */],
                __WEBPACK_IMPORTED_MODULE_36__services_http_kleinewerven_service__["a" /* HttpKleineWervenService */],
                __WEBPACK_IMPORTED_MODULE_37__services_http_tv_service__["a" /* HttpTVService */],
                __WEBPACK_IMPORTED_MODULE_38__services_http_tvzone_service__["a" /* HttpTVZoneService */],
                __WEBPACK_IMPORTED_MODULE_39__services_http_puin_service__["a" /* HttpPuinService */],
                __WEBPACK_IMPORTED_MODULE_26__services_http_mail_service__["a" /* HttpMailService */],
                __WEBPACK_IMPORTED_MODULE_40__services_localstorage_service__["a" /* LocalstorageService */],
                __WEBPACK_IMPORTED_MODULE_41__services_loading_animation_service__["a" /* LoadingAnimationService */],
                __WEBPACK_IMPORTED_MODULE_27__services_event_listener_service__["a" /* EventListenerService */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], GwGridModule);
    return GwGridModule;
}());



/***/ }),

/***/ 623:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n\r\n    <nav *ngIf=\"PgIndex === -1 && useToolbar\" class=\"navbar navbar-default navbar-fixed-bottom\" style=\"background-color:#CCCCCC;\">\r\n        <div class=\"container-fluid\" style=\"margin: 10px 0px 27px 0px;\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <button type=\"button\" (click)=\"toggleButton(0)\" style=\"margin-left: -5px;\" [ngClass]=\"getButtonClass(btns[0])\">Ontgravingen</button>\r\n                    <button type=\"button\" (click)=\"singleButton(0)\" [ngClass]=\"getSingleClass(btns[0])\">&nbsp;</button>\r\n                    <button type=\"button\" (click)=\"toggleButton(1)\" [ngClass]=\"getButtonClass(btns[1])\">TV</button>\r\n                    <button type=\"button\" (click)=\"singleButton(1)\" [ngClass]=\"getSingleClass(btns[1])\">&nbsp;</button>\r\n                    <button type=\"button\" (click)=\"toggleButton(2)\" [ngClass]=\"getButtonClass(btns[2])\">GTM</button>\r\n                    <button type=\"button\" (click)=\"singleButton(2)\" [ngClass]=\"getSingleClass(btns[2])\">&nbsp;</button>\r\n                    <button type=\"button\" (click)=\"toggleButton(3)\" [ngClass]=\"getButtonClass(btns[3])\">GVT</button>\r\n                    <button type=\"button\" (click)=\"singleButton(3)\" [ngClass]=\"getSingleClass(btns[3])\">&nbsp;</button>\r\n                    <button type=\"button\" (click)=\"toggleButton(4)\" [ngClass]=\"getButtonClass(btns[4])\">Online Ingevuld</button>\r\n                    <button type=\"button\" (click)=\"singleButton(4)\" [ngClass]=\"getSingleClass(btns[4])\">&nbsp;</button>\r\n                    <button type=\"button\" (click)=\"toggleButton(5)\" [ngClass]=\"getButtonClass(btns[5])\">Gegevens Aanpassen</button>\r\n                    <button type=\"button\" (click)=\"singleButton(5)\" [ngClass]=\"getSingleClass(btns[5])\">&nbsp;</button>\r\n                    <button type=\"button\" (click)=\"toggleButton(6)\" [ngClass]=\"getButtonClass(btns[6])\">Klanten</button>\r\n                    <button type=\"button\" (click)=\"singleButton(6)\" [ngClass]=\"getSingleClass(btns[6])\">&nbsp;</button>\r\n                    <button type=\"button\" (click)=\"toggleButton(7)\" [ngClass]=\"getButtonClass(btns[7])\">BBR</button>\r\n                    <button type=\"button\" (click)=\"singleButton(7)\" [ngClass]=\"getSingleClass(btns[7])\">&nbsp;</button>\r\n                    <button type=\"button\" (click)=\"toggleButton(8)\" [ngClass]=\"getButtonClass(btns[8])\">Puin</button>\r\n                    <button type=\"button\" (click)=\"singleButton(8)\" [ngClass]=\"getSingleClass(btns[8])\">&nbsp;</button>\r\n                    <button type=\"button\" (click)=\"toggleButton(-1)\" [ngClass]=\"getButtonClass(allButtonsShown)\">Toon Alles</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n    <div>\r\n        <div [hidden]=\"!btns[0]\">\r\n            <h4>Kleine Werken</h4>\r\n            <gw-kw-grid></gw-kw-grid>\r\n        </div>\r\n        <div [hidden]=\"!btns[1]\">\r\n            <h4>Technische Verslagen</h4>\r\n            <gw-tv-grid NieuweAanvragen=\"true\" ExtendedSearch=\"true\" [AllowDelete]=\"allowDelete\"></gw-tv-grid>\r\n        </div>\r\n        <div [hidden]=\"!btns[2]\">\r\n            <h4>Grond Transport Meldingen</h4>\r\n            <gw-gtm-grid NieuweAanvragen=\"true\" ExtendedSearch=\"true\" [AllowDelete]=\"allowDelete\"></gw-gtm-grid>\r\n        </div>\r\n        <div [hidden]=\"!btns[3]\">\r\n            <h4>Grond Verzet Toelatingen</h4>\r\n            <gw-gvt-grid NieuweAanvragen=\"true\" ExtendedSearch=\"true\" [AllowDelete]=\"allowDelete\"></gw-gvt-grid>\r\n        </div>\r\n        <div [hidden]=\"!btns[4]\">\r\n            <h4>Upload of Online Ingevuld - VA/OV</h4>\r\n            <bodembeheerrapport-grid isGWStart=\"true\" Type=\"BBR\" [FillType]=\"UPLFillType\" [title]=\"'Bodembeheer rapporten:'\"></bodembeheerrapport-grid>\r\n        </div>\r\n        <div [hidden]=\"!btns[5]\">\r\n            <h4>Vraag tot gegevensaanpassingen</h4>\r\n            <gw-klantwijz-grid></gw-klantwijz-grid>\r\n        </div>\r\n        <div [hidden]=\"!btns[6]\">\r\n            <h4>Nieuwe Klanten</h4>\r\n            <gw-klant-grid isGWStart=\"true\"></gw-klant-grid>\r\n        </div>\r\n        <div [hidden]=\"!btns[7]\">\r\n            <h4>Bodem Beheer Rapporten</h4>\r\n            <gw-bbr-grid NieuweAanvragen=\"false\" ExtendedSearch=\"true\" [AllowDelete]=\"allowDelete\"></gw-bbr-grid>\r\n        </div>\r\n        <div [hidden]=\"!btns[8]\">\r\n            <h4>Puin</h4>\r\n            To Be Developed\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n";

/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(625);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "h4 {\r\n    margin-bottom: 0px;\r\n}\r\n.btn-on {\r\n    color: #B0D001 !important;\r\n    border-color: #ddd !important;\r\n    background-color: #017342 !important;\r\n    padding: 5px 10px;\r\n    margin-left: 15px;\r\n}\r\n.btn-off {\r\n    color: #FFFFFF !important;\r\n    border-color: #ddd !important;\r\n    background-color: #FF0000 !important;\r\n    padding: 5px 10px;\r\n    margin-left: 15px;\r\n}\r\n.btn-single-on {\r\n    color: #B0D001 !important;\r\n    border-color: #ddd !important;\r\n    background-color: #017342 !important;\r\n    padding: 5px;\r\n    margin-left: -5px;\r\n}\r\n.btn-single-off {\r\n    color: #017342 !important;\r\n    border-color: #ddd !important;\r\n    background-color: #FF0000 !important;\r\n    padding: 5px;\r\n    margin-left: -5px;\r\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwBBRGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_bbr_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scripts_appLabels__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_authentication_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__angular_common__);
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










var gwBBRGridComponent = /** @class */ (function (_super) {
    __extends(gwBBRGridComponent, _super);
    function gwBBRGridComponent(_toastr, fb, httpBBR, router, route, auth) {
        var _this = _super.call(this, _toastr) || this;
        _this._toastr = _toastr;
        _this.fb = fb;
        _this.httpBBR = httpBBR;
        _this.router = router;
        _this.route = route;
        _this.auth = auth;
        _this.appLabels = __WEBPACK_IMPORTED_MODULE_6__scripts_appLabels__["a" /* appLabels */];
        _this.StatusDropdownList = null;
        _this.StatusList = null;
        _this.rows = null;
        _this.temp = [];
        _this.title = "";
        _this.StatusId = 4;
        _this.isExtendedSearch = false;
        _this.forNieuweAanvragen = true;
        _this.useSearch = true;
        _this.canDelete = false;
        return _this;
    }
    Object.defineProperty(gwBBRGridComponent.prototype, "NieuweAanvragen", {
        get: function () {
            return this.forNieuweAanvragen;
        },
        set: function (value) {
            this.forNieuweAanvragen = "" + value !== "false";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gwBBRGridComponent.prototype, "ExtendedSearch", {
        get: function () {
            return this.useSearch;
        },
        set: function (value) {
            this.useSearch = "" + value !== "false";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gwBBRGridComponent.prototype, "AllowDelete", {
        get: function () {
            return this.canDelete;
        },
        set: function (value) {
            this.canDelete = "" + value !== "false";
        },
        enumerable: true,
        configurable: true
    });
    gwBBRGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.StsForm = this.fb.group({
            sts: [-1],
            bbrNummer: [""],
            naam: [""],
            code: [""],
            gem: [""],
            aanvraagDatum: [""],
            statusDatum: [""],
            indieningswijze: [""],
            gefactureerd: [""],
            bbrSts: [""],
            hoev: [""],
            startDatum: [""]
        });
        this.httpBBR.StatusDefinitionList("BBR", this.NieuweAanvragen).toPromise()
            .then(function (lst) {
            if (lst != null && lst != undefined) {
                _this.StatusDropdownList = lst.slice();
            }
            _this.StsForm.patchValue({ sts: (_this.NieuweAanvragen ? '0' : '4') });
            _this.statusChanged();
        });
    };
    gwBBRGridComponent.prototype.statusChanged = function () {
        this.StatusId = this.StsForm.controls.sts.value;
        switch (this.StsForm.controls.sts.value) {
            case "-1":// Selecteer
                this.rows = [];
                this.temp = [];
                break;
            case "0":// Nieuwe Aanvragen 
                this.NieuweAanvragen = true;
                this.loadStatusList();
                break;
            default:// Status
                this.NieuweAanvragen = false;
                this.loadStatusList();
                break;
        }
    };
    gwBBRGridComponent.prototype.loadStatusList = function () {
        var _this = this;
        this.httpBBR.sgsStatusList(this.StatusId, "T").toPromise()
            .then(function (lst) {
            _this.rows = lst;
            _this.temp = lst.slice();
            _this.clearFormFields();
        });
    };
    gwBBRGridComponent.prototype.onExtendedSearch = function (zoekVelden) {
        var _this = this;
        this.httpBBR.gwZoekList(zoekVelden).toPromise()
            .then(function (lst) {
            _this.rows = lst;
            _this.temp = lst.slice();
            _this.clearFormFields();
        });
    };
    gwBBRGridComponent.prototype.clearFormFields = function () {
        // Clear all Form Values except sts
        this.StsForm.patchValue({
            bbrNummer: "",
            naam: "",
            code: "",
            gem: "",
            aanvraagDatum: "",
            statusDatum: "",
            indieningswijze: "",
            gefactureerd: "",
            bbrSts: "",
            hoev: "",
            startDatum: ""
        });
    };
    gwBBRGridComponent.prototype.filter = function () {
        var _this = this;
        var bbrNummer = this.StsForm.controls.bbrNummer.value;
        var naam = this.StsForm.controls.naam.value;
        var code = this.StsForm.controls.code.value;
        var gem = this.StsForm.controls.gem.value;
        var aanvraagDatum = this.StsForm.controls.aanvraagDatum.value;
        var statusDatum = this.StsForm.controls.statusDatum.value;
        var indieningswijze = this.StsForm.controls.indieningswijze.value;
        var gefactureerd = this.StsForm.controls.gefactureerd.value;
        var bbrSts = this.StsForm.controls.bbrSts.value;
        var hoev = this.StsForm.controls.hoev.value;
        var startDatum = this.StsForm.controls.startDatum.value;
        var dp = new __WEBPACK_IMPORTED_MODULE_9__angular_common__["DatePipe"]("en-US");
        // filter our data
        var temp = this.temp.filter(function (row) {
            var aanvraagDatumAsString = null;
            if (aanvraagDatum > "") {
                aanvraagDatumAsString = dp.transform(row.aanvraagDatum, "dd/MM/yyyy");
            }
            var statusDatumAsString = null;
            if (statusDatum > "") {
                statusDatumAsString = dp.transform(row.statusDatum, "dd/MM/yyyy");
            }
            var startDatumAsString = null;
            if (startDatum > "") {
                startDatumAsString = dp.transform(row.startDatum, "dd/MM/yyyy");
            }
            return (!bbrNummer || (!_this.isNullOrUndefined(row.bbrNummer) && row.bbrNummer.toString().indexOf(bbrNummer) !== -1))
                && (!naam || (!_this.isNullOrUndefined(row.naam) && row.naam.toLowerCase().indexOf(naam) !== -1))
                && (!code || (!_this.isNullOrUndefined(row.beroepsorganisatiecode) && row.beroepsorganisatiecode.toLowerCase().indexOf(code) !== -1))
                && (!gem || (!_this.isNullOrUndefined(row.plaats) && row.plaats.toLowerCase().indexOf(gem) !== -1))
                && (!aanvraagDatum || (!_this.isNullOrUndefined(aanvraagDatumAsString) && aanvraagDatumAsString.indexOf(aanvraagDatum) !== -1))
                && (!statusDatum || (!_this.isNullOrUndefined(statusDatumAsString) && statusDatumAsString.indexOf(statusDatum) !== -1))
                && (!indieningswijze || (!_this.isNullOrUndefined(row.indieningswijze) && row.indieningswijze.toLowerCase().indexOf(indieningswijze) !== -1))
                && (!gefactureerd || (!_this.isNullOrUndefined(row.gefactureerd) && row.gefactureerd.toLowerCase().indexOf(gefactureerd) !== -1))
                && (!bbrSts || (!_this.isNullOrUndefined(row.status) && row.status.toLowerCase().indexOf(bbrSts) !== -1))
                && (!hoev || (!_this.isNullOrUndefined(row.hoeveelheid) && row.hoeveelheid.toString().indexOf(hoev) !== -1))
                && (!startDatum || (!_this.isNullOrUndefined(startDatumAsString) && startDatumAsString.indexOf(startDatum) !== -1));
        });
        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    gwBBRGridComponent.prototype.onActivate = function (event) {
        if (event.type === "dblclick") {
            this.linkToBBR(event.row["bbrNummer"]);
        }
    };
    gwBBRGridComponent.prototype.getRowClass = function (row) {
        return "ibtn";
    };
    gwBBRGridComponent.prototype.linkToBBR = function (bbrId) {
        this.router.navigate(["/bodembeheerrapport-detail"], { queryParams: { bbrId: bbrId, bbr: "Final" } }); // => GWBeheer/BBREdit.aspx?BodembeheerRapportID={0} (oude GW)
    };
    gwBBRGridComponent.prototype.deleteBBR = function (bbrId) {
        //
    };
    gwBBRGridComponent.prototype.ToggleExtendedSearch = function () {
        this.isExtendedSearch = !this.isExtendedSearch;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__["DatatableComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__["DatatableComponent"])
    ], gwBBRGridComponent.prototype, "table", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], gwBBRGridComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('NieuweAanvragen'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], gwBBRGridComponent.prototype, "NieuweAanvragen", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('ExtendedSearch'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], gwBBRGridComponent.prototype, "ExtendedSearch", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('AllowDelete'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], gwBBRGridComponent.prototype, "AllowDelete", null);
    gwBBRGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "gw-bbr-grid",
            template: __webpack_require__(627),
            styles: [__webpack_require__(628)]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["ToastrService"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_5__services_http_bbr_service__["a" /* HttpBBRService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_8__services_authentication_service__["a" /* AuthenticationService */]])
    ], gwBBRGridComponent);
    return gwBBRGridComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__["b" /* GeneralScripts */]));



/***/ }),

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<form [formGroup]=\"StsForm\" class=\"container-fluid paddingTop10px\">\r\n    <div class=\"row\" *ngIf=\"useSearch\">\r\n        <div class=\"col-sm-3\">\r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"ToggleExtendedSearch()\">{{ isExtendedSearch ? 'Enkelvoudig zoeken' : 'Geavanceerd zoeken' }}</button>\r\n        </div>\r\n        <div *ngIf=\"useSearch && !isExtendedSearch\" class=\"col-sm-9\">\r\n            <label class=\"paddingRight10px\">Filter status</label>\r\n            <select formControlName=\"sts\" DottedBorderBelow (change)=\"statusChanged()\">\r\n                <option value=\"-1\">Selecteer</option>\r\n                <option *ngFor=\"let sts of StatusDropdownList\" [value]=\"sts.bbrStatusID\" [innerHTML]=\"sts.status\"></option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"useSearch && isExtendedSearch\">\r\n        <div class=\"col-sm-12\"><gw-bbr-zoekuitgebreid (searching)=\"onExtendedSearch($event)\"></gw-bbr-zoekuitgebreid></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"NgxTable\">\r\n                <p *ngIf=\"forNieuweAanvragen == false\" class=\"pull-left NgxTitle\">{{title}}</p>\r\n                <ngx-datatable #table\r\n                               class=\"bootstrap\"\r\n                               (activate)=\"onActivate($event)\"\r\n                               [rows]=\"rows\"\r\n                               [columnMode]=\"'flex'\"\r\n                               [headerHeight]=\"50\"\r\n                               [footerHeight]=\"40\"\r\n                               [limit]=\"appLabels.tableViewRows\"\r\n                               [rowClass]=\"getRowClass\"\r\n                               [cssClasses]=\"appLabels.iconsCss\"\r\n                               [messages]=\"{totalMessage: appLabels.Total.toLowerCase(), emptyMessage: appLabels.NoDataToDisplay}\"\r\n                               [sorts]=\"[{prop:'bbrNummer', dir:'desc' }]\"\r\n                               [rowHeight]=\"'auto'\">\r\n\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"nietGoedGekeurd\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template></ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <span style=\"color: red\"><b>{{row['nietGoedGekeurd']}}</b></span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"bbrNummer\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Nummer</span>\r\n                            <div><input type=\"text\" formControlName=\"bbrNummer\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <a class=\"pdfLink\" [routerLink]=\"['/bodembeheerrapport-detail']\" [queryParams]=\"{bbr:'Final',bbrId:row['bbrNummer']}\"><label class=\"text\">{{row['bbrNummer']}}</label></a>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"naam\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Klant</span>\r\n                            <div><input type=\"text\" formControlName=\"naam\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span>{{value}}</span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"beroepsorganisatiecode\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Code</span>\r\n                            <input type=\"text\" formControlName=\"code\" class=\"NgxFilterField\" (keyup)=\"filter()\" />\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span>{{value}}</span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" prop=\"plaats\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Gemeente</span>\r\n                            <input type=\"text\" formControlName=\"gem\" class=\"NgxFilterField\" (keyup)=\"filter()\" />\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span>{{value}}</span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"aanvraagDatum\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Datum in</span></div>\r\n                            <div><input type=\"text\" formControlName=\"aanvraagDatum\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date:\"dd/MM/yyyy\"}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"statusDatum\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Datum uit</span></div>\r\n                            <div><input type=\"text\" formControlName=\"statusDatum\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date:\"dd/MM/yyyy\"}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"indieningswijze\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Aanvulplan</span></div>\r\n                            <div><input type=\"text\" formControlName=\"indieningswijze\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"hoeveelheid\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Hoeveelheid</span>\r\n                            <div><input type=\"text\" formControlName=\"hoev\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span>{{row['hoeveelheid']}}</span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"gefactureerd\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Gefact.</span></div>\r\n                            <div><input type=\"text\" formControlName=\"gefactureerd\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"status\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">BBR Status</span></div>\r\n                            <div><input type=\"text\" formControlName=\"bbrSts\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"startDatumGrondwerken\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Start Datum</span></div>\r\n                            <div><input type=\"text\" formControlName=\"startDatum\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date:\"dd/MM/yyyy\"}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"Detail\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img src=\"" + __webpack_require__(12) + "\" class=\"ibtn\" (click)=\"linkToBBR(row['bbrNummer'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column *ngIf=\"canDelete\" [flexGrow]=\"1\" name=\"Detail\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img src=\"" + __webpack_require__(53) + "\" class=\"ibtn\" (click)=\"deleteBBR(row['bbrNummer'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                </ngx-datatable>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>";

/***/ }),

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(629);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/***/ }),

/***/ 630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwBBRZoekUitgebreidComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scripts_appLabels__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scripts_general_scripts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_http_bbr_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_http_dossier_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_http_klant_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_http_tv_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_datepicker__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__scripts_sgsClasses_scripts__ = __webpack_require__(67);
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













var gwBBRZoekUitgebreidComponent = /** @class */ (function (_super) {
    __extends(gwBBRZoekUitgebreidComponent, _super);
    function gwBBRZoekUitgebreidComponent(_toastr, router, fb, _localeService, httpBbr, httpDossier, httpKlant, httpTV, _baseUrl, route, _sanitizer) {
        var _this = _super.call(this, _toastr) || this;
        _this._toastr = _toastr;
        _this.router = router;
        _this.fb = fb;
        _this._localeService = _localeService;
        _this.httpBbr = httpBbr;
        _this.httpDossier = httpDossier;
        _this.httpKlant = httpKlant;
        _this.httpTV = httpTV;
        _this._baseUrl = _baseUrl;
        _this.route = route;
        _this._sanitizer = _sanitizer;
        _this.appLabels = __WEBPACK_IMPORTED_MODULE_3__scripts_appLabels__["a" /* appLabels */];
        _this.KlantListItems = null;
        _this.DossierBeheerderListItems = null;
        _this.BestemmingsaardListItems = null;
        _this.StatusListItems = null;
        _this.zoekVelden = null;
        _this.searching = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        return _this;
    }
    gwBBRZoekUitgebreidComponent.prototype.ngOnInit = function () {
        // Needed configuration for the bsDatepicker to accept dd/MM/yyyy formatting
        this._localeService.use("bootstrap-locale-nlbe");
        this.zkForm = this.fb.group({
            Code: [""],
            TvId: [""],
            KlantId: ["-1"],
            DossierBeheerderId: ["-1"],
            StatusId: ["-1"],
            BestemmingsaardId: ["-1"],
            Gefactureerd: ["-1"],
            Straat: [""],
            Postcode: [""],
            Gemeente: [""],
            LambertX: [""],
            LambertY: [""],
            LambertRange: ["-1"],
            VertrekStraat: [""],
            VertrekGemeente: [""],
            datVan: [""],
            datTot: [""]
        });
        this.loadDropdowns();
    };
    gwBBRZoekUitgebreidComponent.prototype.loadDropdowns = function () {
        var _this = this;
        this.httpKlant.sgsComboListItems()
            .subscribe(function (lst) {
            if (lst != null && lst != undefined) {
                _this.KlantListItems = lst.slice();
            }
        });
        this.httpDossier.sgsComboListItems()
            .subscribe(function (lst) {
            if (lst != null && lst != undefined) {
                _this.DossierBeheerderListItems = lst.slice();
            }
        });
        this.httpBbr.sgsBestemmingsaardListItems()
            .subscribe(function (lst) {
            if (lst != null && lst != undefined) {
                _this.BestemmingsaardListItems = lst.slice();
            }
        });
        this.httpTV.StatusDefinitionList(false)
            .subscribe(function (lst) {
            if (lst != null && lst != undefined) {
                _this.StatusListItems = lst.slice();
            }
        });
    };
    gwBBRZoekUitgebreidComponent.prototype.raiseSearch = function () {
        this.zoekVelden = new __WEBPACK_IMPORTED_MODULE_12__scripts_sgsClasses_scripts__["a" /* SgsBBRZoekVelden */]();
        this.zoekVelden.code = this.zkForm.controls.Code.value;
        this.zoekVelden.tvId = this.zkForm.controls.TvId.value;
        this.zoekVelden.klantId = this.zkForm.controls.KlantId.value;
        this.zoekVelden.dossierBeheerderId = this.zkForm.controls.DossierBeheerderId.value;
        this.zoekVelden.statusId = this.zkForm.controls.StatusId.value;
        this.zoekVelden.bestemmingsaardId = this.zkForm.controls.BestemmingsaardId.value;
        this.zoekVelden.gefactureerd = this.zkForm.controls.Gefactureerd.value;
        this.zoekVelden.straat = this.zkForm.controls.Straat.value;
        this.zoekVelden.postcode = this.zkForm.controls.Postcode.value;
        this.zoekVelden.gemeente = this.zkForm.controls.Gemeente.value;
        this.zoekVelden.lambertX = this.zkForm.controls.LambertX.value;
        this.zoekVelden.lambertY = this.zkForm.controls.LambertY.value;
        this.zoekVelden.lambertRange = this.zkForm.controls.LambertRange.value;
        this.zoekVelden.vertrekStraat = this.zkForm.controls.VertrekStraat.value;
        this.zoekVelden.vertrekGemeente = this.zkForm.controls.VertrekGemeente.value;
        this.zoekVelden.datVan = this.zkForm.controls.datVan.value;
        this.zoekVelden.datTot = this.zkForm.controls.datTot.value;
        this.searching.emit(this.zoekVelden);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], gwBBRZoekUitgebreidComponent.prototype, "searching", void 0);
    gwBBRZoekUitgebreidComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "gw-bbr-zoekuitgebreid",
            template: __webpack_require__(631),
            styles: [__webpack_require__(632)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __param(8, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])("BASE_URL")),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["ToastrService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_datepicker__["a" /* BsLocaleService */],
            __WEBPACK_IMPORTED_MODULE_6__services_http_bbr_service__["a" /* HttpBBRService */],
            __WEBPACK_IMPORTED_MODULE_7__services_http_dossier_service__["a" /* HttpDossierService */],
            __WEBPACK_IMPORTED_MODULE_8__services_http_klant_service__["a" /* HttpKlantService */],
            __WEBPACK_IMPORTED_MODULE_9__services_http_tv_service__["a" /* HttpTVService */], String, __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["DomSanitizer"]])
    ], gwBBRZoekUitgebreidComponent);
    return gwBBRZoekUitgebreidComponent;
}(__WEBPACK_IMPORTED_MODULE_4__scripts_general_scripts__["b" /* GeneralScripts */]));



/***/ }),

/***/ 631:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"zkForm\" class=\"container-fluid paddingTop30px\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtCode\" class=\"pull-right\">Code</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtCode\" formControlName=\"Code\" AllowOnlyNumbers DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"tvtTvId\" class=\"pull-right\">TV Nummer:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtTvId\" formControlName=\"TvId\" AllowOnlyNumbers DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"ddlKlant\" class=\"pull-right\">Klant</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlKlant\" formControlName=\"KlantId\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let klant of KlantListItems\" [value]=\"klant.klantID\" [innerHTML]=\"klant.naam\"></option>\r\n                </select>\r\n            </div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlDossierBeheerder\" class=\"pull-right\">DossierBeheerder</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlDossierBeheerder\" formControlName=\"DossierBeheerderId\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let dossbeh of DossierBeheerderListItems\" [value]=\"dossbeh.dossierBeheerderID\" [innerHTML]=\"dossbeh.naam\"></option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"ddlStatus\" class=\"pull-right\">Status</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlStatus\" formControlName=\"StatusId\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let sts of StatusListItems\" [value]=\"sts.tvStatusID\" [innerHTML]=\"sts.status\"></option>\r\n                </select>\r\n            </div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlBestemmingsaard\" class=\"pull-right\">Bestemmingsaard</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlBestemmingsaard\" formControlName=\"BestemmingsaardId\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let aard of BestemmingsaardListItems\" [value]=\"aard.bestemmingsAardId\" [innerHTML]=\"aard.bestemmingsAard\"></option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtStraat\" class=\"pull-right\">Bestemming Straat</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtStraat\" formControlName=\"Straat\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlGefactureerd\" class=\"pull-right\">Gefactureerd</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlGefactureerd\" formControlName=\"Gefactureerd\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option value=\"1\">Ja</option>\r\n                    <option value=\"0\">Nee</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtPostcode\" class=\"pull-right\">Bestemming Postcode:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtPostcode\" formControlName=\"Postcode\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"txtGemeente\" class=\"pull-right\">Bestemming Gemeente:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtGemeente\" formControlName=\"Gemeente\" DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtLambertX\" class=\"pull-right\">Bestemming Lambert X (in m)</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtLambertX\" formControlName=\"LambertX\" AllowOnlyNumbers DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlLambertRange\" class=\"pull-right\">Lambert Range:</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlLambertRange\" formControlName=\"LambertRange\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option value=\"1\">1 km</option>\r\n                    <option value=\"3\">3 km</option>\r\n                    <option value=\"5\">5 km</option>\r\n                    <option value=\"10\">10 km</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtLambertX\" class=\"pull-right\">Bestemming Lambert Y (in m)</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtLambertY\" formControlName=\"LambertY\" AllowOnlyNumbers DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-6\">&nbsp;</div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtVStraat\" class=\"pull-right\">TV Straat:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtVStraat\" formControlName=\"VertrekStraat\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"txtVGemeente\" class=\"pull-right\">TV Gemeente:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtVGemeente\" formControlName=\"VertrekGemeente\" DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"dteVan\" class=\"pull-right\">Datum Van:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"dteVan\" formControlName=\"datVan\" class=\"form-control ng-trim-ignore\" bsDatepicker placement=\"top left\" autocomplete=\"off\" DottedBorderBelow [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"dteTot\" class=\"pull-right\">Datum Tot:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"dteTot\" formControlName=\"datTot\" class=\"form-control ng-trim-ignore\" bsDatepicker placement=\"top left\" autocomplete=\"off\" DottedBorderBelow [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4 col-sm-offset-8\"><button type=\"button\" (click)=\"raiseSearch()\" class=\"btn btn-default\">{{appLabels.Send}}</button></div>\r\n        </div>\r\n    </div>\r\n</form>";

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

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwGTMGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_tv_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_http_gtm_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scripts_appLabels__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_datatable__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_authentication_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__angular_common__);
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











var gwGTMGridComponent = /** @class */ (function (_super) {
    __extends(gwGTMGridComponent, _super);
    function gwGTMGridComponent(_toastr, fb, httpGTM, httpTV, router, route, auth) {
        var _this = _super.call(this, _toastr) || this;
        _this._toastr = _toastr;
        _this.fb = fb;
        _this.httpGTM = httpGTM;
        _this.httpTV = httpTV;
        _this.router = router;
        _this.route = route;
        _this.auth = auth;
        _this.appLabels = __WEBPACK_IMPORTED_MODULE_7__scripts_appLabels__["a" /* appLabels */];
        _this.StatusDropdownList = null;
        _this.StatusList = null;
        _this.rows = null;
        _this.temp = [];
        _this.title = "";
        _this.StatusId = -1;
        _this.isExtendedSearch = false;
        _this.forNieuweAanvragen = true;
        _this.useSearch = true;
        _this.canDelete = false;
        return _this;
    }
    Object.defineProperty(gwGTMGridComponent.prototype, "NieuweAanvragen", {
        get: function () {
            return this.forNieuweAanvragen;
        },
        set: function (value) {
            this.forNieuweAanvragen = "" + value !== "false";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gwGTMGridComponent.prototype, "ExtendedSearch", {
        get: function () {
            return this.useSearch;
        },
        set: function (value) {
            this.useSearch = "" + value !== "false";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gwGTMGridComponent.prototype, "AllowDelete", {
        get: function () {
            return this.canDelete;
        },
        set: function (value) {
            this.canDelete = "" + value !== "false";
        },
        enumerable: true,
        configurable: true
    });
    gwGTMGridComponent.prototype.ngOnInit = function () {
        this.StsForm = this.fb.group({
            sts: [-1],
            gtmId: [""],
            klant: [""],
            ref: [""],
            herk: [""],
            topCgr: [""],
            indieningsDatum: [""]
        });
        this.loadStatusDropdownList();
    };
    gwGTMGridComponent.prototype.loadStatusDropdownList = function () {
        this.StatusDropdownList = [
            { "id": 0, "omschrijving": "Alles" },
            { "id": 1, "omschrijving": "Afgerond" },
            { "id": 2, "omschrijving": "Nog niet afgerond" }
        ];
        this.StsForm.patchValue({ sts: (this.NieuweAanvragen ? '2' : '2') });
        this.statusChanged();
    };
    gwGTMGridComponent.prototype.statusChanged = function () {
        switch (this.StsForm.controls.sts.value) {
            case "-1":// Selecteer
                this.StatusId = -1;
                this.rows = [];
                this.temp = [];
                break;
            //case "0": // Nieuwe Aanvragen 
            //    this.StatusId = 1;
            //    this.NieuweAanvragen = true;
            //    this.loadStatusList();
            //    break;
            default:// Status
                this.StatusId = this.StsForm.controls.sts.value;
                this.NieuweAanvragen = false;
                this.loadStatusList();
                break;
        }
    };
    gwGTMGridComponent.prototype.loadStatusList = function () {
        var _this = this;
        this.httpGTM.gwStatusList(this.StatusId, -1).toPromise()
            .then(function (lst) {
            _this.rows = lst;
            _this.temp = lst.slice();
            _this.clearFormFields();
        });
    };
    gwGTMGridComponent.prototype.onExtendedSearch = function (zoekVelden) {
        var _this = this;
        this.httpGTM.gwZoekList(zoekVelden).toPromise()
            .then(function (lst) {
            _this.rows = lst;
            _this.temp = lst.slice();
            _this.clearFormFields();
        });
    };
    gwGTMGridComponent.prototype.clearFormFields = function () {
        // Clear all Form Values except sts
        this.StsForm.patchValue({
            technischVerslagID: "",
            naam: "",
            gemeenteOnderzoekslocatie: "",
            indieningsDatum: "",
            statusDatum: "",
            indieningswijze: "",
            gefactureerd: ""
        });
    };
    gwGTMGridComponent.prototype.filter = function () {
        var _this = this;
        var gtmId = this.StsForm.controls.gtmId.value;
        var klant = this.StsForm.controls.klant.value.toLowerCase();
        var ref = this.StsForm.controls.ref.value.toLowerCase();
        var herk = this.StsForm.controls.herk.value.toLowerCase();
        var topCgr = this.StsForm.controls.topCgr.value.toLowerCase();
        var indieningsDatum = this.StsForm.controls.indieningsDatum.value;
        var dp = new __WEBPACK_IMPORTED_MODULE_10__angular_common__["DatePipe"]("en-US");
        // filter our data
        var temp = this.temp.filter(function (row) {
            var indieningsDatumAsString = null;
            if (indieningsDatum > "") {
                indieningsDatumAsString = dp.transform(row.indieningsDatum, "dd/MM/yyyy");
            }
            return (!gtmId || (!_this.isNullOrUndefined(row.grondtransportmeldingId.toString()) && row.grondtransportmeldingId.toString().indexOf(gtmId) !== -1))
                && (!klant || (!_this.isNullOrUndefined(row.klant.toLowerCase()) && row.klant.toLowerCase().indexOf(klant) !== -1))
                && (!ref || (!_this.isNullOrUndefined(row.klantKenmerk.toLowerCase()) && row.klantKenmerk.toLowerCase().indexOf(ref) !== -1))
                && (!herk || (!_this.isNullOrUndefined(row.herkomst.toLowerCase()) && row.herkomst.toLowerCase().indexOf(herk) !== -1))
                && (!topCgr || (!_this.isNullOrUndefined(row.topCgr.toLowerCase()) && row.topCgr.toLowerCase().indexOf(topCgr) !== -1))
                && (!indieningsDatum || (!_this.isNullOrUndefined(indieningsDatumAsString) && indieningsDatumAsString.indexOf(indieningsDatum) !== -1));
        });
        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    gwGTMGridComponent.prototype.getRowClass = function (row) {
        return "ibtn";
    };
    gwGTMGridComponent.prototype.onActivate = function (event) {
        if (event.type === "dblclick") {
            this.linkToGTM(event.row["grondtransportmeldingId"]);
        }
    };
    gwGTMGridComponent.prototype.linkToGTM = function (gtmId) {
        this.router.navigate(["/gw/gtm-edit", gtmId]);
    };
    gwGTMGridComponent.prototype.deleteGTM = function (gtmId) {
    };
    gwGTMGridComponent.prototype.ToggleExtendedSearch = function () {
        this.isExtendedSearch = !this.isExtendedSearch;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_datatable__["DatatableComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_datatable__["DatatableComponent"])
    ], gwGTMGridComponent.prototype, "table", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], gwGTMGridComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('NieuweAanvragen'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], gwGTMGridComponent.prototype, "NieuweAanvragen", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('ExtendedSearch'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], gwGTMGridComponent.prototype, "ExtendedSearch", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('AllowDelete'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], gwGTMGridComponent.prototype, "AllowDelete", null);
    gwGTMGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "gw-gtm-grid",
            template: __webpack_require__(635),
            styles: [__webpack_require__(637)]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["ToastrService"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_6__services_http_gtm_service__["a" /* HttpGTMService */],
            __WEBPACK_IMPORTED_MODULE_5__services_http_tv_service__["a" /* HttpTVService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_9__services_authentication_service__["a" /* AuthenticationService */]])
    ], gwGTMGridComponent);
    return gwGTMGridComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__["b" /* GeneralScripts */]));



/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<form [formGroup]=\"StsForm\" class=\"container-fluid paddingTop10px\">\r\n    <div class=\"row\" *ngIf=\"useSearch\">\r\n        <div class=\"col-sm-3\">\r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"ToggleExtendedSearch()\">{{ isExtendedSearch ? 'Enkelvoudig zoeken' : 'Geavanceerd zoeken' }}</button>\r\n        </div>\r\n        <div *ngIf=\"useSearch && !isExtendedSearch\" class=\"col-sm-9\">\r\n            <label class=\"paddingRight10px\">Filter status</label>\r\n            <select formControlName=\"sts\" DottedBorderBelow (change)=\"statusChanged()\">\r\n                <option value=\"-1\">Selecteer</option>\r\n                <option *ngFor=\"let sts of StatusDropdownList\" [value]=\"sts.id\" [innerHTML]=\"sts.omschrijving\"></option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"useSearch && isExtendedSearch\">\r\n        <div class=\"col-sm-12\"><gw-gtm-zoekuitgebreid (searching)=\"onExtendedSearch($event)\"></gw-gtm-zoekuitgebreid></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"NgxTable\">\r\n                <p *ngIf=\"forNieuweAanvragen == false\" class=\"pull-left NgxTitle\">{{title}}</p>\r\n                <ngx-datatable #table\r\n                               class=\"bootstrap\"\r\n                               (activate)=\"onActivate($event)\"\r\n                               [rows]=\"rows\"\r\n                               [columnMode]=\"'flex'\"\r\n                               [headerHeight]=\"50\"\r\n                               [footerHeight]=\"40\"\r\n                               [limit]=\"appLabels.tableViewRows\"\r\n                               [rowClass]=\"getRowClass\"\r\n                               [cssClasses]=\"appLabels.iconsCss\"\r\n                               [messages]=\"{totalMessage: appLabels.Total.toLowerCase(), emptyMessage: appLabels.NoDataToDisplay}\"\r\n                               [sorts]=\"[{prop:'grondtransportmeldingId', dir:'desc' }]\"\r\n                               [rowHeight]=\"'auto'\">\r\n\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"afgewerkteGTM\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img *ngIf=\"row['verklaringAfnemerOntvangen'] != null && row['verklaringAfnemerOntvangen'] == true\" src=\"" + __webpack_require__(636) + "\" class=\"ibtn\" (click)=\"linkToGTM(row['grondtransportmeldingId'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"grondtransportmeldingId\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Code</span>\r\n                            <div><input type=\"text\" formControlName=\"gtmId\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <a class=\"pdfLink\" [routerLink]=\"['/transport-top-cgr-detail', row['grondtransportmeldingId']]\"><label class=\"text\">{{row['grondtransportmeldingId']}}</label></a>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"4\" prop=\"klant\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Klant</span>\r\n                            <div><input type=\"text\" formControlName=\"klant\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template><span>{{value}}</span></ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"klantKenmerk\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Klant Ref.</span>\r\n                            <input type=\"text\" formControlName=\"ref\" class=\"NgxFilterField\" (keyup)=\"filter()\" />\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template><span>{{value}}</span></ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"herkomst\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Herkomst</span>\r\n                            <input type=\"text\" formControlName=\"herk\" class=\"NgxFilterField\" (keyup)=\"filter()\" />\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template><span>{{value}}</span></ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"topCgr\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">TOP/CGR</span>\r\n                            <input type=\"text\" formControlName=\"topCgr\" class=\"NgxFilterField\" (keyup)=\"filter()\" />\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template><span>{{value}}</span></ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" name=\"indieningsDatum\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Datum In</span></div>\r\n                            <div><input type=\"text\" formControlName=\"indieningsDatum\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>{{value | date:\"dd/MM/yyyy\"}}</ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"Detail\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img src=\"" + __webpack_require__(12) + "\" class=\"ibtn\" (click)=\"linkToGTM(row['grondtransportmeldingId'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column *ngIf=\"canDelete\" [flexGrow]=\"1\" name=\"Detail\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img src=\"" + __webpack_require__(53) + "\" class=\"ibtn\" (click)=\"deleteGTM(row['grondtransportmeldingId'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                </ngx-datatable>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</form>";

/***/ }),

/***/ 636:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACcklEQVR42mNkwAEsTLSlT5y5+pSBAGDEJsjOzsYR4GVXsnL9nhayDFBUVPTQ1zNYy8fPN+3161f927dvf0a0AUxMTIzlZeULOTg5Yx0dHYGGKXzKzy+o2Lt3z4yPHz/+J2gAFxeXwK1bt+5/+fJFYOrUaQwuLi4MixcvYeDn4117997d1AMHDrzHa4C8nHyMu5v7Yj19PYZNmzYzJCUngbzEcPXKFQYHR4c7iYmJQQcPHryM1QCg85mcnZw2f/3y1Wv7zh0MTx4/YdixYweDiakpQ29PL4OjkyPDo0eP3j1+9Cjrzt07ay9cuPAHxQBxcXGZO0CwetUqdhZmFoZv378xLJi/gKGopIThxfPnDGLi4gyenh4MZ8+eA8XUMWsgQDHAWFfVLz4112HNylXRz58/F9uwaSPD3r17GUJCQhlevHzJsGrlSgZXV1eGnp4eBj5+/i0rV67whRvAyMjAYq4r737m2pMdf//+U5KTlXWcN39+woK5cy0uXbrMGBEVxXBg3z6GrJwchpcvX/7v6OgIu3f/3hq4AdKivBosrKz/Hz579wXI5QfiPyDMzsYmHxoa2gQ0zGb5smUMZuYWDOfOnV2Xn58f8ubNm/+M0JBkNNWR9Thz9cmJf///iwGFWIH4H8wQRkbGf8nJyZFXLlys/v7jx9fHz55avnv3DpTMf4INYGJkYDPUlHU9e+3xESD3I0gIiNmAmBOUsqGYgZWFRYGZmVnox8+f+4DczyBLwAaoy4uYP3/75fOnLz+u4UmxIMO4oC77AKWBYcfIwGigLh10/sbTrUD+D0KZB8NkZiZGRjFhXtnnrz89IlUzCAAAnzDyEareg/MAAAAASUVORK5CYII="

/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(638);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".parentTop {\r\n    position: relative;\r\n    display: block;\r\n}\r\n\r\n.childTop {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 200px;\r\n    display: block;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwGTMZoekUitgebreidComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scripts_appLabels__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scripts_general_scripts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_http_klant_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_datepicker__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__scripts_sgsClasses_scripts__ = __webpack_require__(67);
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










var gwGTMZoekUitgebreidComponent = /** @class */ (function (_super) {
    __extends(gwGTMZoekUitgebreidComponent, _super);
    function gwGTMZoekUitgebreidComponent(_toastr, router, fb, _localeService, httpKlant, _baseUrl, route, _sanitizer) {
        var _this = _super.call(this, _toastr) || this;
        _this._toastr = _toastr;
        _this.router = router;
        _this.fb = fb;
        _this._localeService = _localeService;
        _this.httpKlant = httpKlant;
        _this._baseUrl = _baseUrl;
        _this.route = route;
        _this._sanitizer = _sanitizer;
        _this.appLabels = __WEBPACK_IMPORTED_MODULE_3__scripts_appLabels__["a" /* appLabels */];
        _this.zoekVelden = null;
        _this.searching = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        return _this;
    }
    gwGTMZoekUitgebreidComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Needed configuration for the bsDatepicker to accept dd/MM/yyyy formatting
        this._localeService.use("bootstrap-locale-nlbe");
        this.zkForm = this.fb.group({
            GtmId: [""],
            datVan: [""],
            datTot: [""],
            Straat: [""],
            Gemeente: [""],
            TopId: ["-1"]
        });
        this.httpKlant.TOPList().toPromise()
            .then(function (lst) {
            if (lst != null && lst != undefined) {
                _this.bestBedrijfList = lst;
            }
        });
    };
    gwGTMZoekUitgebreidComponent.prototype.raiseSearch = function () {
        this.zoekVelden = new __WEBPACK_IMPORTED_MODULE_9__scripts_sgsClasses_scripts__["b" /* SgsGTMZoekVelden */]();
        this.zoekVelden.gtmId = this.zkForm.controls.GtmId.value;
        this.zoekVelden.datVan = this.zkForm.controls.datVan.value;
        this.zoekVelden.datTot = this.zkForm.controls.datTot.value;
        this.zoekVelden.straat = this.zkForm.controls.Straat.value;
        this.zoekVelden.gemeente = this.zkForm.controls.Gemeente.value;
        this.zoekVelden.topId = this.zkForm.controls.TopId.value;
        this.searching.emit(this.zoekVelden);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], gwGTMZoekUitgebreidComponent.prototype, "searching", void 0);
    gwGTMZoekUitgebreidComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "gw-gtm-zoekuitgebreid",
            template: __webpack_require__(640),
            styles: [__webpack_require__(641)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])("BASE_URL")),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["ToastrService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_datepicker__["a" /* BsLocaleService */],
            __WEBPACK_IMPORTED_MODULE_6__services_http_klant_service__["a" /* HttpKlantService */], String, __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["DomSanitizer"]])
    ], gwGTMZoekUitgebreidComponent);
    return gwGTMZoekUitgebreidComponent;
}(__WEBPACK_IMPORTED_MODULE_4__scripts_general_scripts__["b" /* GeneralScripts */]));



/***/ }),

/***/ 640:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"zkForm\" class=\"container-fluid paddingTop30px\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\"><label for=\"txtGTMId\" class=\"pull-right\">GTM Id:</label></div>\r\n            <div class=\"col-sm-8\"><input type=\"text\" id=\"txtGTMId\" formControlName=\"GtmId\" AllowOnlyNumbers DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\"><label for=\"dteVan\" class=\"pull-right\">Van:</label></div>\r\n            <div class=\"col-sm-8\"><input type=\"text\" id=\"dteVan\" formControlName=\"datVan\" class=\"form-control ng-trim-ignore\" bsDatepicker placement=\"bottom left\" autocomplete=\"off\" DottedBorderBelow [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\"><label for=\"dteTot\" class=\"pull-right\">Tot:</label></div>\r\n            <div class=\"col-sm-8\"><input type=\"text\" id=\"dteTot\" formControlName=\"datTot\" class=\"form-control ng-trim-ignore\" bsDatepicker placement=\"bottom left\" autocomplete=\"off\" DottedBorderBelow [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\"><label for=\"txtStraat\" class=\"pull-right\">Straat:</label></div>\r\n            <div class=\"col-sm-8\"><input type=\"text\" id=\"txtStraat\" formControlName=\"Straat\" DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\"><label for=\"txtGemeente\" class=\"pull-right\">Gemeente:</label></div>\r\n            <div class=\"col-sm-8\"><input type=\"text\" id=\"txtGemeente\" formControlName=\"Gemeente\" DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\"><label for=\"ddlTop\" class=\"pull-right\">TOP:</label></div>\r\n            <div class=\"dropdown col-sm-8\">\r\n                <select id=\"ddlTop\" formControlName=\"TopId\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let o of bestBedrijfList\" [value]=\"o.id\">{{o.description}}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-8 col-sm-offset-4\"><button type=\"button\" (click)=\"raiseSearch()\" class=\"btn btn-default\">{{appLabels.Send}}</button></div>\r\n        </div>\r\n    </div>\r\n</form>";

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

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwGVTGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_gvt_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scripts_appLabels__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(8);
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









var gwGVTGridComponent = /** @class */ (function (_super) {
    __extends(gwGVTGridComponent, _super);
    function gwGVTGridComponent(_toastr, fb, httpGVT, router, route) {
        var _this = _super.call(this, _toastr) || this;
        _this._toastr = _toastr;
        _this.fb = fb;
        _this.httpGVT = httpGVT;
        _this.router = router;
        _this.route = route;
        _this.appLabels = __WEBPACK_IMPORTED_MODULE_6__scripts_appLabels__["a" /* appLabels */];
        _this.StatusDropdownList = null;
        _this.StatusList = null;
        _this.rows = null;
        _this.temp = [];
        _this.title = "";
        _this.StatusId = 1;
        _this.isExtendedSearch = false;
        _this.forNieuweAanvragen = true;
        _this.useSearch = true;
        _this.canDelete = false;
        return _this;
    }
    Object.defineProperty(gwGVTGridComponent.prototype, "NieuweAanvragen", {
        get: function () {
            return this.forNieuweAanvragen;
        },
        set: function (value) {
            this.forNieuweAanvragen = "" + value !== "false";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gwGVTGridComponent.prototype, "ExtendedSearch", {
        get: function () {
            return this.useSearch;
        },
        set: function (value) {
            this.useSearch = "" + value !== "false";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gwGVTGridComponent.prototype, "AllowDelete", {
        get: function () {
            return this.canDelete;
        },
        set: function (value) {
            this.canDelete = "" + value !== "false";
        },
        enumerable: true,
        configurable: true
    });
    gwGVTGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.StsForm = this.fb.group({
            sts: [-1],
            gvtNummer: [""],
            naam: [""],
            code: [""],
            gem: [""],
            aanvraagDatum: [""],
            statusDatum: [""],
            indieningswijze: [""],
            gefactureerd: [""],
            gvtSts: [""],
            hoev: [""],
            startDatum: [""]
        });
        this.httpGVT.StatusDefinitionList("GVT", this.NieuweAanvragen).toPromise()
            .then(function (lst) {
            if (lst != null && lst != undefined) {
                _this.StatusDropdownList = lst.slice();
            }
            _this.StsForm.patchValue({ sts: (_this.NieuweAanvragen ? '0' : '1') });
            _this.statusChanged();
        });
    };
    gwGVTGridComponent.prototype.statusChanged = function () {
        this.StatusId = this.StsForm.controls.sts.value;
        switch (this.StsForm.controls.sts.value) {
            case "-1":// Selecteer
                this.rows = [];
                this.temp = [];
                break;
            case "0":// Nieuwe Aanvragen 
                this.NieuweAanvragen = true;
                this.loadStatusList();
                break;
            default:// Status
                this.NieuweAanvragen = false;
                this.loadStatusList();
                break;
        }
    };
    gwGVTGridComponent.prototype.loadStatusList = function () {
        var _this = this;
        this.httpGVT.sgsStatusList(this.StatusId, "T").toPromise()
            .then(function (lst) {
            _this.rows = lst;
            _this.temp = lst.slice();
            _this.clearFormFields();
        });
    };
    gwGVTGridComponent.prototype.onExtendedSearch = function (zoekVelden) {
        var _this = this;
        this.httpGVT.gwZoekList(zoekVelden).toPromise()
            .then(function (lst) {
            _this.rows = lst;
            _this.temp = lst.slice();
            _this.clearFormFields();
        });
    };
    gwGVTGridComponent.prototype.clearFormFields = function () {
        // Clear all Form Values except sts
        this.StsForm.patchValue({
            gvtNummer: "",
            naam: "",
            code: "",
            gem: "",
            aanvraagDatum: "",
            statusDatum: "",
            indieningswijze: "",
            gefactureerd: "",
            gvtSts: "",
            hoev: "",
            startDatum: ""
        });
    };
    gwGVTGridComponent.prototype.filter = function () {
        var _this = this;
        var gvtNummer = this.StsForm.controls.gvtNummer.value;
        var naam = this.StsForm.controls.naam.value;
        var code = this.StsForm.controls.code.value;
        var gem = this.StsForm.controls.gem.value;
        var aanvraagDatum = this.StsForm.controls.aanvraagDatum.value;
        var statusDatum = this.StsForm.controls.statusDatum.value;
        var indieningswijze = this.StsForm.controls.indieningswijze.value;
        var gefactureerd = this.StsForm.controls.gefactureerd.value;
        var gvtSts = this.StsForm.controls.gvtSts.value;
        var hoev = this.StsForm.controls.hoev.value;
        var startDatum = this.StsForm.controls.startDatum.value;
        var dp = new __WEBPACK_IMPORTED_MODULE_8__angular_common__["DatePipe"]("en-US");
        // filter our data
        var temp = this.temp.filter(function (row) {
            var aanvraagDatumAsString = null;
            if (aanvraagDatum > "") {
                aanvraagDatumAsString = dp.transform(row.aanvraagDatum, "dd/MM/yyyy");
            }
            var statusDatumAsString = null;
            if (statusDatum > "") {
                statusDatumAsString = dp.transform(row.statusDatum, "dd/MM/yyyy");
            }
            var startDatumAsString = null;
            if (startDatum > "") {
                startDatumAsString = dp.transform(row.startDatum, "dd/MM/yyyy");
            }
            return (!gvtNummer || (!_this.isNullOrUndefined(row.bbrNummer) && row.bbrNummer.toString().indexOf(gvtNummer) !== -1))
                && (!naam || (!_this.isNullOrUndefined(row.naam) && row.naam.toLowerCase().indexOf(naam) !== -1))
                && (!code || (!_this.isNullOrUndefined(row.beroepsorganisatiecode) && row.beroepsorganisatiecode.toLowerCase().indexOf(code) !== -1))
                && (!gem || (!_this.isNullOrUndefined(row.plaats) && row.plaats.toLowerCase().indexOf(gem) !== -1))
                && (!aanvraagDatum || (!_this.isNullOrUndefined(aanvraagDatumAsString) && aanvraagDatumAsString.indexOf(aanvraagDatum) !== -1))
                && (!statusDatum || (!_this.isNullOrUndefined(statusDatumAsString) && statusDatumAsString.indexOf(statusDatum) !== -1))
                && (!indieningswijze || (!_this.isNullOrUndefined(row.indieningswijze) && row.indieningswijze.toLowerCase().indexOf(indieningswijze) !== -1))
                && (!gefactureerd || (!_this.isNullOrUndefined(row.gefactureerd) && row.gefactureerd.toLowerCase().indexOf(gefactureerd) !== -1))
                && (!gvtSts || (!_this.isNullOrUndefined(row.status) && row.status.toLowerCase().indexOf(gvtSts) !== -1))
                && (!hoev || (!_this.isNullOrUndefined(row.hoeveelheid) && row.hoeveelheid.toString().indexOf(hoev) !== -1))
                && (!startDatum || (!_this.isNullOrUndefined(startDatumAsString) && startDatumAsString.indexOf(startDatum) !== -1));
        });
        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    gwGVTGridComponent.prototype.onActivate = function (event) {
        if (event.type === "dblclick") {
            this.linkToGVT(event.row["gvtNummer"]);
        }
    };
    gwGVTGridComponent.prototype.getRowClass = function (row) {
        return "ibtn";
    };
    gwGVTGridComponent.prototype.linkToGVT = function (gvtId) {
        this.router.navigate(["/gw/gvt-edit", gvtId]);
    };
    gwGVTGridComponent.prototype.deleteGVT = function (gvtId) {
        //
    };
    gwGVTGridComponent.prototype.ToggleExtendedSearch = function () {
        this.isExtendedSearch = !this.isExtendedSearch;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__["DatatableComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__["DatatableComponent"])
    ], gwGVTGridComponent.prototype, "table", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], gwGVTGridComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('NieuweAanvragen'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], gwGVTGridComponent.prototype, "NieuweAanvragen", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('ExtendedSearch'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], gwGVTGridComponent.prototype, "ExtendedSearch", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('AllowDelete'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], gwGVTGridComponent.prototype, "AllowDelete", null);
    gwGVTGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "gw-gvt-grid",
            template: __webpack_require__(644),
            styles: [__webpack_require__(645)]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["ToastrService"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_5__services_http_gvt_service__["a" /* HttpGVTService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"]])
    ], gwGVTGridComponent);
    return gwGVTGridComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__["b" /* GeneralScripts */]));



/***/ }),

/***/ 644:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<form [formGroup]=\"StsForm\" class=\"container-fluid paddingTop10px\">\r\n    <div class=\"row\" *ngIf=\"useSearch\">\r\n        <div class=\"col-sm-3\">\r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"ToggleExtendedSearch()\">{{ isExtendedSearch ? 'Enkelvoudig zoeken' : 'Geavanceerd zoeken' }}</button>\r\n        </div>\r\n        <div *ngIf=\"useSearch && !isExtendedSearch\" class=\"col-sm-9\">\r\n            <label class=\"paddingRight10px\">Filter status</label>\r\n            <select formControlName=\"sts\" DottedBorderBelow (change)=\"statusChanged()\">\r\n                <option value=\"-1\">Selecteer</option>\r\n                <option *ngFor=\"let sts of StatusDropdownList\" [value]=\"sts.bbrStatusID\" [innerHTML]=\"sts.status\"></option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"useSearch && isExtendedSearch\">\r\n        <div class=\"col-sm-12\"><gw-gvt-zoekuitgebreid (searching)=\"onExtendedSearch($event)\"></gw-gvt-zoekuitgebreid></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"NgxTable\">\r\n                <p *ngIf=\"forNieuweAanvragen == false\" class=\"pull-left NgxTitle\">{{title}}</p>\r\n                <ngx-datatable #table\r\n                               class=\"bootstrap\"\r\n                               (activate)=\"onActivate($event)\"\r\n                               [rows]=\"rows\"\r\n                               [columnMode]=\"'flex'\"\r\n                               [headerHeight]=\"50\"\r\n                               [footerHeight]=\"40\"\r\n                               [limit]=\"appLabels.tableViewRows\"\r\n                               [rowClass]=\"getRowClass\"\r\n                               [cssClasses]=\"appLabels.iconsCss\"\r\n                               [messages]=\"{totalMessage: appLabels.Total.toLowerCase(), emptyMessage: appLabels.NoDataToDisplay}\"\r\n                               [sorts]=\"[{prop:'bbrNummer', dir:'desc' }]\"\r\n                               [rowHeight]=\"'auto'\">\r\n\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"nietGoedGekeurd\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template></ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <span style=\"color: red\"><b>{{row['nietGoedGekeurd']}}</b></span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"bbrNummer\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Nummer</span>\r\n                            <div><input type=\"text\" formControlName=\"gvtNummer\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <a class=\"pdfLink\" [routerLink]=\"['/bodembeheerrapport-detail']\" [queryParams]=\"{bbrId:row['bbrNummer']}\"><label class=\"text\">{{row['bbrNummer']}}</label></a>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"naam\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Klant</span>\r\n                            <div><input type=\"text\" formControlName=\"naam\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span>{{value}}</span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"beroepsorganisatiecode\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Code</span>\r\n                            <input type=\"text\" formControlName=\"code\" class=\"NgxFilterField\" (keyup)=\"filter()\" />\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span>{{value}}</span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" prop=\"plaats\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Gemeente</span>\r\n                            <input type=\"text\" formControlName=\"gem\" class=\"NgxFilterField\" (keyup)=\"filter()\" />\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span>{{value}}</span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"aanvraagDatum\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Datum in</span></div>\r\n                            <div><input type=\"text\" formControlName=\"aanvraagDatum\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date:\"dd/MM/yyyy\"}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"statusDatum\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Datum uit</span></div>\r\n                            <div><input type=\"text\" formControlName=\"statusDatum\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date:\"dd/MM/yyyy\"}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"indieningswijze\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Aanvulplan</span></div>\r\n                            <div><input type=\"text\" formControlName=\"indieningswijze\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"hoeveelheid\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Hoeveelheid</span>\r\n                            <div><input type=\"text\" formControlName=\"hoev\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span>{{row['hoeveelheid']}}</span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"gefactureerd\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Gefact.</span></div>\r\n                            <div><input type=\"text\" formControlName=\"gefactureerd\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"status\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">GVT Status</span></div>\r\n                            <div><input type=\"text\" formControlName=\"gvtSts\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"startDatumGrondwerken\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Start Datum</span></div>\r\n                            <div><input type=\"text\" formControlName=\"startDatum\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date:\"dd/MM/yyyy\"}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"Detail\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img src=\"" + __webpack_require__(12) + "\" class=\"ibtn\" (click)=\"linkToGVT(row['bbrNummer'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column *ngIf=\"canDelete\" [flexGrow]=\"1\" name=\"Detail\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img src=\"" + __webpack_require__(53) + "\" class=\"ibtn\" (click)=\"deleteGVT(row['bbrNummer'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                </ngx-datatable>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>";

/***/ }),

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(646);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwGVTZoekUitgebreidComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scripts_appLabels__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scripts_general_scripts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_http_bbr_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_http_dossier_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_http_klant_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_http_tv_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_datepicker__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__scripts_sgsClasses_scripts__ = __webpack_require__(67);
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













var gwGVTZoekUitgebreidComponent = /** @class */ (function (_super) {
    __extends(gwGVTZoekUitgebreidComponent, _super);
    function gwGVTZoekUitgebreidComponent(_toastr, router, fb, _localeService, httpBbr, httpDossier, httpKlant, httpTV, _baseUrl, route, _sanitizer) {
        var _this = _super.call(this, _toastr) || this;
        _this._toastr = _toastr;
        _this.router = router;
        _this.fb = fb;
        _this._localeService = _localeService;
        _this.httpBbr = httpBbr;
        _this.httpDossier = httpDossier;
        _this.httpKlant = httpKlant;
        _this.httpTV = httpTV;
        _this._baseUrl = _baseUrl;
        _this.route = route;
        _this._sanitizer = _sanitizer;
        _this.appLabels = __WEBPACK_IMPORTED_MODULE_3__scripts_appLabels__["a" /* appLabels */];
        _this.KlantListItems = null;
        _this.DossierBeheerderListItems = null;
        _this.BestemmingsaardListItems = null;
        _this.StatusListItems = null;
        _this.zoekVelden = null;
        _this.searching = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        return _this;
    }
    gwGVTZoekUitgebreidComponent.prototype.ngOnInit = function () {
        // Needed configuration for the bsDatepicker to accept dd/MM/yyyy formatting
        this._localeService.use("bootstrap-locale-nlbe");
        this.zkForm = this.fb.group({
            Code: [""],
            TvId: [""],
            KlantId: ["-1"],
            DossierBeheerderId: ["-1"],
            StatusId: ["-1"],
            BestemmingsaardId: ["-1"],
            Gefactureerd: ["-1"],
            Straat: [""],
            Postcode: [""],
            Gemeente: [""],
            LambertX: [""],
            LambertY: [""],
            LambertRange: ["-1"],
            VertrekStraat: [""],
            VertrekGemeente: [""],
            datVan: [""],
            datTot: [""]
        });
        this.loadDropdowns();
    };
    gwGVTZoekUitgebreidComponent.prototype.loadDropdowns = function () {
        var _this = this;
        this.httpKlant.sgsComboListItems()
            .subscribe(function (lst) {
            if (lst != null && lst != undefined) {
                _this.KlantListItems = lst.slice();
            }
        });
        this.httpDossier.sgsComboListItems()
            .subscribe(function (lst) {
            if (lst != null && lst != undefined) {
                _this.DossierBeheerderListItems = lst.slice();
            }
        });
        this.httpBbr.sgsBestemmingsaardListItems()
            .subscribe(function (lst) {
            if (lst != null && lst != undefined) {
                _this.BestemmingsaardListItems = lst.slice();
            }
        });
        this.httpTV.StatusDefinitionList(false)
            .subscribe(function (lst) {
            if (lst != null && lst != undefined) {
                _this.StatusListItems = lst.slice();
            }
        });
    };
    gwGVTZoekUitgebreidComponent.prototype.raiseSearch = function () {
        this.zoekVelden = new __WEBPACK_IMPORTED_MODULE_12__scripts_sgsClasses_scripts__["c" /* SgsGVTZoekVelden */]();
        this.zoekVelden.code = this.zkForm.controls.Code.value;
        this.zoekVelden.tvId = this.zkForm.controls.TvId.value;
        this.zoekVelden.klantId = this.zkForm.controls.KlantId.value;
        this.zoekVelden.dossierBeheerderId = this.zkForm.controls.DossierBeheerderId.value;
        this.zoekVelden.statusId = this.zkForm.controls.StatusId.value;
        this.zoekVelden.bestemmingsaardId = this.zkForm.controls.BestemmingsaardId.value;
        this.zoekVelden.gefactureerd = this.zkForm.controls.Gefactureerd.value;
        this.zoekVelden.straat = this.zkForm.controls.Straat.value;
        this.zoekVelden.postcode = this.zkForm.controls.Postcode.value;
        this.zoekVelden.gemeente = this.zkForm.controls.Gemeente.value;
        this.zoekVelden.lambertX = this.zkForm.controls.LambertX.value;
        this.zoekVelden.lambertY = this.zkForm.controls.LambertY.value;
        this.zoekVelden.lambertRange = this.zkForm.controls.LambertRange.value;
        this.zoekVelden.vertrekStraat = this.zkForm.controls.VertrekStraat.value;
        this.zoekVelden.vertrekGemeente = this.zkForm.controls.VertrekGemeente.value;
        this.zoekVelden.datVan = this.zkForm.controls.datVan.value;
        this.zoekVelden.datTot = this.zkForm.controls.datTot.value;
        this.searching.emit(this.zoekVelden);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], gwGVTZoekUitgebreidComponent.prototype, "searching", void 0);
    gwGVTZoekUitgebreidComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "gw-gvt-zoekuitgebreid",
            template: __webpack_require__(648),
            styles: [__webpack_require__(649)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __param(8, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])("BASE_URL")),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["ToastrService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_datepicker__["a" /* BsLocaleService */],
            __WEBPACK_IMPORTED_MODULE_6__services_http_bbr_service__["a" /* HttpBBRService */],
            __WEBPACK_IMPORTED_MODULE_7__services_http_dossier_service__["a" /* HttpDossierService */],
            __WEBPACK_IMPORTED_MODULE_8__services_http_klant_service__["a" /* HttpKlantService */],
            __WEBPACK_IMPORTED_MODULE_9__services_http_tv_service__["a" /* HttpTVService */], String, __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["DomSanitizer"]])
    ], gwGVTZoekUitgebreidComponent);
    return gwGVTZoekUitgebreidComponent;
}(__WEBPACK_IMPORTED_MODULE_4__scripts_general_scripts__["b" /* GeneralScripts */]));



/***/ }),

/***/ 648:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"zkForm\" class=\"container-fluid paddingTop30px\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtCode\" class=\"pull-right\">Code</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtCode\" formControlName=\"Code\" AllowOnlyNumbers DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"tvtTvId\" class=\"pull-right\">TV Nummer:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtTvId\" formControlName=\"TvId\" AllowOnlyNumbers DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"ddlKlant\" class=\"pull-right\">Klant</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlKlant\" formControlName=\"KlantId\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let klant of KlantListItems\" [value]=\"klant.klantID\" [innerHTML]=\"klant.naam\"></option>\r\n                </select>\r\n            </div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlDossierBeheerder\" class=\"pull-right\">DossierBeheerder</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlDossierBeheerder\" formControlName=\"DossierBeheerderId\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let dossbeh of DossierBeheerderListItems\" [value]=\"dossbeh.dossierBeheerderID\" [innerHTML]=\"dossbeh.naam\"></option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"ddlStatus\" class=\"pull-right\">Status</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlStatus\" formControlName=\"StatusId\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let sts of StatusListItems\" [value]=\"sts.tvStatusID\" [innerHTML]=\"sts.status\"></option>\r\n                </select>\r\n            </div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlBestemmingsaard\" class=\"pull-right\">Bestemmingsaard</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlBestemmingsaard\" formControlName=\"BestemmingsaardId\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let aard of BestemmingsaardListItems\" [value]=\"aard.bestemmingsAardId\" [innerHTML]=\"aard.bestemmingsAard\"></option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtStraat\" class=\"pull-right\">Bestemming Straat</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtStraat\" formControlName=\"Straat\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlGefactureerd\" class=\"pull-right\">Gefactureerd</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlGefactureerd\" formControlName=\"Gefactureerd\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option value=\"1\">Ja</option>\r\n                    <option value=\"0\">Nee</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtPostcode\" class=\"pull-right\">Bestemming Postcode:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtPostcode\" formControlName=\"Postcode\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"txtGemeente\" class=\"pull-right\">Bestemming Gemeente:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtGemeente\" formControlName=\"Gemeente\" DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtLambertX\" class=\"pull-right\">Bestemming Lambert X (in m)</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtLambertX\" formControlName=\"LambertX\" AllowOnlyNumbers DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlLambertRange\" class=\"pull-right\">Lambert Range:</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlLambertRange\" formControlName=\"LambertRange\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option value=\"1\">1 km</option>\r\n                    <option value=\"3\">3 km</option>\r\n                    <option value=\"5\">5 km</option>\r\n                    <option value=\"10\">10 km</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtLambertX\" class=\"pull-right\">Bestemming Lambert Y (in m)</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtLambertY\" formControlName=\"LambertY\" AllowOnlyNumbers DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-6\">&nbsp;</div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtVStraat\" class=\"pull-right\">TV Straat:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtVStraat\" formControlName=\"VertrekStraat\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"txtVGemeente\" class=\"pull-right\">TV Gemeente:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtVGemeente\" formControlName=\"VertrekGemeente\" DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"dteVan\" class=\"pull-right\">Datum Van:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"dteVan\" formControlName=\"datVan\" class=\"form-control ng-trim-ignore\" bsDatepicker placement=\"top left\" autocomplete=\"off\" DottedBorderBelow [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"dteTot\" class=\"pull-right\">Datum Tot:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"dteTot\" formControlName=\"datTot\" class=\"form-control ng-trim-ignore\" bsDatepicker placement=\"top left\" autocomplete=\"off\" DottedBorderBelow [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4 col-sm-offset-8\"><button type=\"button\" (click)=\"raiseSearch()\" class=\"btn btn-default\">{{appLabels.Send}}</button></div>\r\n        </div>\r\n    </div>\r\n</form>";

/***/ }),

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(650);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwKlantGridComponent; });
/* unused harmony export FilterTypes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_klant_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scripts_appLabels__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_authentication_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__angular_common__);
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










var gwKlantGridComponent = /** @class */ (function (_super) {
    __extends(gwKlantGridComponent, _super);
    function gwKlantGridComponent(_toastr, fb, httpKlant, router, route, auth) {
        var _this = _super.call(this, _toastr) || this;
        _this._toastr = _toastr;
        _this.fb = fb;
        _this.httpKlant = httpKlant;
        _this.router = router;
        _this.route = route;
        _this.auth = auth;
        _this.appLabels = __WEBPACK_IMPORTED_MODULE_6__scripts_appLabels__["a" /* appLabels */];
        _this.StatusDropdownList = null;
        _this.StatusList = null;
        _this.rows = null;
        _this.temp = [];
        _this.title = "";
        _this.StatusId = -1;
        _this.TypeId = 0;
        _this.isExtendedSearch = false;
        _this.forNieuweAanvragen = true;
        _this.useSearch = true;
        _this.canDelete = false;
        return _this;
    }
    Object.defineProperty(gwKlantGridComponent.prototype, "NieuweAanvragen", {
        get: function () {
            return this.forNieuweAanvragen;
        },
        set: function (value) {
            this.forNieuweAanvragen = "" + value !== "false";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gwKlantGridComponent.prototype, "ExtendedSearch", {
        get: function () {
            return this.useSearch;
        },
        set: function (value) {
            this.useSearch = "" + value !== "false";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gwKlantGridComponent.prototype, "AllowDelete", {
        get: function () {
            return this.canDelete;
        },
        set: function (value) {
            this.canDelete = "" + value !== "false";
        },
        enumerable: true,
        configurable: true
    });
    gwKlantGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.StsForm = this.fb.group({
            sts: [3],
            type: [0],
            id: [""],
            naam: [""],
            code: [""],
            inschrijvingsDatum: [""],
            datumActief: [""],
            gefactureerd: [""],
            startDatum: [""]
        });
        this.httpKlant.sgsKlantStatusListItems().toPromise()
            .then(function (lst) {
            if (lst != null && lst != undefined) {
                _this.StatusDropdownList = lst.slice();
            }
            _this.StsForm.patchValue({ sts: (_this.NieuweAanvragen ? '1' : '3') });
            _this.statusChanged();
        });
    };
    gwKlantGridComponent.prototype.statusChanged = function () {
        this.StatusId = this.StsForm.controls.sts.value;
        switch (this.StsForm.controls.sts.value) {
            case "-1":// Selecteer
                this.rows = [];
                this.temp = [];
                break;
            default:// Status
                this.loadStatusList();
                break;
        }
    };
    gwKlantGridComponent.prototype.loadStatusList = function () {
        var _this = this;
        this.TypeId = this.StsForm.controls.type.value;
        this.httpKlant.sgsStatusGrid(this.StatusId, this.TypeId).toPromise()
            .then(function (lst) {
            _this.rows = lst;
            _this.temp = lst.slice();
            _this.clearFormFields();
        });
    };
    gwKlantGridComponent.prototype.onExtendedSearch = function (zoekVelden) {
        var _this = this;
        this.httpKlant.gwZoekList(zoekVelden).toPromise()
            .then(function (lst) {
            _this.rows = lst;
            _this.temp = lst.slice();
            _this.clearFormFields();
        });
    };
    gwKlantGridComponent.prototype.clearFormFields = function () {
        // Clear all Form Values except sts
        this.StsForm.patchValue({
            id: "",
            naam: "",
            code: "",
            inschrijvingsDatum: "",
            datumActief: "",
            gefactureerd: "",
            startDatum: ""
        });
    };
    gwKlantGridComponent.prototype.filter = function () {
        var _this = this;
        var id = this.StsForm.controls.id.value;
        var naam = this.StsForm.controls.naam.value;
        var code = this.StsForm.controls.code.value;
        var inschrijvingsDatum = this.StsForm.controls.inschrijvingsDatum.value;
        var datumActief = this.StsForm.controls.datumActief.value;
        var gefactureerd = this.StsForm.controls.gefactureerd.value;
        var startDatum = this.StsForm.controls.startDatum.value;
        var dp = new __WEBPACK_IMPORTED_MODULE_9__angular_common__["DatePipe"]("en-US");
        // filter our data
        var temp = this.temp.filter(function (row) {
            var inschrijvingsDatumAsString = null;
            if (inschrijvingsDatum > "") {
                inschrijvingsDatumAsString = dp.transform(row.inschrijvingsDatum, "dd/MM/yyyy");
            }
            var datumActiefAsString = null;
            if (datumActief > "") {
                datumActiefAsString = dp.transform(row.datumActief, "dd/MM/yyyy");
            }
            var startDatumAsString = null;
            if (startDatum > "") {
                startDatumAsString = dp.transform(row.facturatieStartDatum, "dd/MM/yyyy");
            }
            return (!id || (!_this.isNullOrUndefined(row.klantID) && row.klantID.toString().indexOf(id) !== -1))
                && (!naam || (!_this.isNullOrUndefined(row.naam) && row.naam.toLowerCase().indexOf(naam) !== -1))
                && (!code || (!_this.isNullOrUndefined(row.beroepsorganisatiecode) && row.beroepsorganisatiecode.toLowerCase().indexOf(code) !== -1))
                && (!inschrijvingsDatum || (!_this.isNullOrUndefined(inschrijvingsDatumAsString) && inschrijvingsDatumAsString.indexOf(inschrijvingsDatum) !== -1))
                && (!datumActief || (!_this.isNullOrUndefined(datumActiefAsString) && datumActiefAsString.indexOf(datumActief) !== -1))
                && (!gefactureerd || (!_this.isNullOrUndefined(row.gefactureerd) && row.gefactureerd.toLowerCase().indexOf(gefactureerd) !== -1))
                && (!startDatum || (!_this.isNullOrUndefined(startDatumAsString) && startDatumAsString.indexOf(startDatum) !== -1));
        });
        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    gwKlantGridComponent.prototype.onActivate = function (event) {
        if (event.type === "dblclick") {
            this.linkToKlant(event.row["klantID"]);
        }
    };
    gwKlantGridComponent.prototype.getRowClass = function (row) {
        return "ibtn";
    };
    gwKlantGridComponent.prototype.linkToKlant = function (Id) {
        this.router.navigate(["/gw/klant-edit/", Id]);
    };
    gwKlantGridComponent.prototype.ToggleExtendedSearch = function () {
        this.isExtendedSearch = !this.isExtendedSearch;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__["DatatableComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__["DatatableComponent"])
    ], gwKlantGridComponent.prototype, "table", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], gwKlantGridComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('NieuweAanvragen'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], gwKlantGridComponent.prototype, "NieuweAanvragen", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('ExtendedSearch'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], gwKlantGridComponent.prototype, "ExtendedSearch", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('AllowDelete'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], gwKlantGridComponent.prototype, "AllowDelete", null);
    gwKlantGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "gw-klant-grid",
            template: __webpack_require__(652),
            styles: [__webpack_require__(653)]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["ToastrService"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_5__services_http_klant_service__["a" /* HttpKlantService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_8__services_authentication_service__["a" /* AuthenticationService */]])
    ], gwKlantGridComponent);
    return gwKlantGridComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__["b" /* GeneralScripts */]));

var FilterTypes;
(function (FilterTypes) {
    FilterTypes[FilterTypes["All"] = 0] = "All";
    FilterTypes[FilterTypes["TopCgr"] = 1] = "TopCgr";
    FilterTypes[FilterTypes["DOP"] = 2] = "DOP";
})(FilterTypes || (FilterTypes = {}));


/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<form [formGroup]=\"StsForm\" class=\"container-fluid paddingTop10px\">\r\n    <div class=\"row\" *ngIf=\"useSearch\">\r\n        <div class=\"col-sm-3\">\r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"ToggleExtendedSearch()\">{{ isExtendedSearch ? 'Enkelvoudig zoeken' : 'Geavanceerd zoeken' }}</button>\r\n        </div>\r\n        <div *ngIf=\"useSearch && !isExtendedSearch\" class=\"col-sm-9\">\r\n            <label class=\"paddingRight10px\">Filter status</label>\r\n            <select formControlName=\"sts\" DottedBorderBelow (change)=\"statusChanged()\">\r\n                <option value=\"-1\">Selecteer</option>\r\n                <option *ngFor=\"let sts of StatusDropdownList\" [value]=\"sts.klantStatusID\" [innerHTML]=\"sts.status\"></option>\r\n            </select>\r\n            <label class=\"paddingRight40px\">Klant Type</label>\r\n            <select formControlName=\"type\" DottedBorderBelow (change)=\"statusChanged()\">\r\n                <option value=\"0\">Alle</option>\r\n                <option value=\"1\">TopCgr</option>\r\n                <option value=\"2\">Dop</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"useSearch && isExtendedSearch\">\r\n        <div class=\"col-sm-12\"><gw-klant-zoekuitgebreid (searching)=\"onExtendedSearch($event)\"></gw-klant-zoekuitgebreid></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"NgxTable\">\r\n                <p class=\"pull-left NgxTitle\">{{title}}</p>\r\n                <ngx-datatable #table\r\n                               class=\"bootstrap\"\r\n                               (activate)=\"onActivate($event)\"\r\n                               [rows]=\"rows\"\r\n                               [columnMode]=\"'flex'\"\r\n                               [headerHeight]=\"50\"\r\n                               [footerHeight]=\"40\"\r\n                               [limit]=\"appLabels.tableViewRows\"\r\n                               [rowClass]=\"getRowClass\"\r\n                               [cssClasses]=\"appLabels.iconsCss\"\r\n                               [messages]=\"{totalMessage: appLabels.Total.toLowerCase(), emptyMessage: appLabels.NoDataToDisplay}\"\r\n                               [sorts]=\"[{prop:'klantID', dir:'desc' }]\"\r\n                               [rowHeight]=\"'auto'\">\r\n\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"klantID\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Klant ID</span>\r\n                            <div><input type=\"text\" formControlName=\"id\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span [routerLink]=\"\" (click)=\"linkToklant(row['klantID'])\"><span>{{row['klantID']}}</span></span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"naam\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Naam</span>\r\n                            <div><input type=\"text\" formControlName=\"naam\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span>{{value}}</span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" prop=\"beroepsorganisatiecode\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Code</span></div>\r\n                            <div><input type=\"text\" formControlName=\"code\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" name=\"inschrijvingsDatum\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Inschrijving</span></div>\r\n                            <div><input type=\"text\" formControlName=\"inschrijvingsDatum\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date:\"dd/MM/yyyy\"}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" name=\"datumActief\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Actief</span></div>\r\n                            <div><input type=\"text\" formControlName=\"datumActief\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date:\"dd/MM/yyyy\"}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"gefactureerd\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Gefact.</span></div>\r\n                            <div><input type=\"text\" formControlName=\"gefactureerd\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" name=\"facturatieStartDatum\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Start Datum</span></div>\r\n                            <div><input type=\"text\" formControlName=\"startDatum\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date:\"dd/MM/yyyy\"}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"Detail\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img src=\"" + __webpack_require__(12) + "\" class=\"ibtn\" (click)=\"linkToKlant(row['klantID'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                </ngx-datatable>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</form>";

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

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwKlantWijzGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_klant_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scripts_appLabels__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_authentication_service__ = __webpack_require__(10);
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









var gwKlantWijzGridComponent = /** @class */ (function (_super) {
    __extends(gwKlantWijzGridComponent, _super);
    function gwKlantWijzGridComponent(_toastr, fb, httpKlant, router, route, auth) {
        var _this = _super.call(this, _toastr) || this;
        _this._toastr = _toastr;
        _this.fb = fb;
        _this.httpKlant = httpKlant;
        _this.router = router;
        _this.route = route;
        _this.auth = auth;
        _this.appLabels = __WEBPACK_IMPORTED_MODULE_6__scripts_appLabels__["a" /* appLabels */];
        _this.StatusList = null;
        _this.rows = null;
        _this.temp = [];
        _this.isGWUser = null;
        return _this;
    }
    gwKlantWijzGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.StsForm = this.fb.group({
            sts: [-1],
            klantId: [""],
            anaam: [""],
            vnaam: [""],
            pcode: [""],
            plaats: [""]
        });
        this.auth.getRole().toPromise()
            .then(function (role) {
            _this.isGWUser = (role !== __WEBPACK_IMPORTED_MODULE_8__services_authentication_service__["b" /* UserRoles */].Klant);
            _this.loadStatusList();
        });
    };
    gwKlantWijzGridComponent.prototype.filter = function () {
        var _this = this;
        var klantId = this.StsForm.controls.klantId.value;
        var anaam = this.StsForm.controls.anaam.value;
        var vnaam = this.StsForm.controls.vnaam.value;
        var pcode = this.StsForm.controls.pcode.value;
        var plaats = this.StsForm.controls.plaats.value;
        // filter our data
        var temp = this.temp.filter(function (row) {
            return (!klantId || (!_this.isNullOrUndefined(row.klantID) && row.klantID.toString().indexOf(klantId) !== -1))
                && (!anaam || (!_this.isNullOrUndefined(row.achternaam) && row.achternaam.toLowerCase().indexOf(anaam) !== -1))
                && (!vnaam || (!_this.isNullOrUndefined(row.voornaam) && row.voornaam.toLowerCase().indexOf(vnaam) !== -1))
                && (!pcode || (!_this.isNullOrUndefined(row.postcode) && row.postcode.toLowerCase().indexOf(pcode) !== -1))
                && (!plaats || (!_this.isNullOrUndefined(row.plaats) && row.plaats.toLowerCase().indexOf(plaats) !== -1));
        });
        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    //loadStatus(type: string) {
    //    this.httpBBR.StatusDefinitionList(this.Type).toPromise()
    //        .then((lst: IBBRStatus[]) => {
    //            if (lst != null && lst != undefined) {
    //                this.StatusList = [...lst];
    //                this.statusChanged();
    //            }
    //        });
    //}
    gwKlantWijzGridComponent.prototype.loadStatusList = function () {
        var _this = this;
        this.httpKlant.sgsUnhandledWijzigingen().toPromise()
            .then(function (lst) {
            _this.rows = lst;
            _this.temp = lst.slice();
        });
    };
    gwKlantWijzGridComponent.prototype.onActivate = function (event) {
        if (event.type === "dblclick") {
            this.linkToKlantWijz(event.row["id"], event.row["klantID"]);
        }
    };
    gwKlantWijzGridComponent.prototype.getRowClass = function (row) {
        return "ibtn";
    };
    gwKlantWijzGridComponent.prototype.linkToKlant = function (klantId) {
        // this.router.navigate(["/technisch-verslag-detail", tvId]);  GWBeheer/KlantEdit.aspx?KlantID={0}
    };
    gwKlantWijzGridComponent.prototype.linkToKlantWijz = function (Id, klantId) {
        // this.router.navigate(["/technisch-verslag-detail", tvId]);  // GWBeheer/KlantWijzigingenOverzicht.aspx?RecID={0}&KlantID={1}
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__["DatatableComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__["DatatableComponent"])
    ], gwKlantWijzGridComponent.prototype, "table", void 0);
    gwKlantWijzGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "gw-klantwijz-grid",
            template: __webpack_require__(656),
            styles: [__webpack_require__(657)]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["ToastrService"], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_5__services_http_klant_service__["a" /* HttpKlantService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_8__services_authentication_service__["a" /* AuthenticationService */]])
    ], gwKlantWijzGridComponent);
    return gwKlantWijzGridComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__["b" /* GeneralScripts */]));



/***/ }),

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<form [formGroup]=\"StsForm\" class=\"container-fluid paddingTop10px\">\r\n    <div class=\"row\" *ngIf=\"isGWUser != null\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"NgxTable\">\r\n                <ngx-datatable #table\r\n                               class=\"bootstrap\"\r\n                               (activate)=\"onActivate($event)\"\r\n                               [rows]=\"rows\"\r\n                               [columnMode]=\"'flex'\"\r\n                               [headerHeight]=\"50\"\r\n                               [footerHeight]=\"40\"\r\n                               [limit]=\"appLabels.tableViewRows\"\r\n                               [rowClass]=\"getRowClass\"\r\n                               [cssClasses]=\"appLabels.iconsCss\"\r\n                               [messages]=\"{totalMessage: appLabels.Total.toLowerCase(), emptyMessage: appLabels.NoDataToDisplay}\"\r\n                               [sorts]=\"[{prop:'id', dir:'desc' }]\"\r\n                               [rowHeight]=\"'auto'\">\r\n\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"id\" headerClass=\"NgxHeader\" hidden>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"klantID\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Klant ID</span>\r\n                            <div><input type=\"text\" formControlName=\"klantId\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span [routerLink]=\"\" (click)=\"linkToklant(row['klantID'])\"><span>{{row['klantID']}}</span></span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" prop=\"achternaam\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Achternaam</span>\r\n                            <div><input type=\"text\" formControlName=\"anaam\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span>{{value}}</span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" prop=\"voornaam\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Voornaam</span></div>\r\n                            <div><input type=\"text\" formControlName=\"vnaam\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" prop=\"postcode\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Postcode</span></div>\r\n                            <div><input type=\"text\" formControlName=\"pcode\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" prop=\"plaats\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Plaats</span></div>\r\n                            <div><input type=\"text\" formControlName=\"plaats\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"Detail\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img src=\"" + __webpack_require__(12) + "\" class=\"ibtn\" (click)=\"linkToKlantWijz(row['id'], row['klantID'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                </ngx-datatable>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</form>";

/***/ }),

/***/ 657:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(658);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwKlantZoekUitgebreidComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scripts_appLabels__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scripts_general_scripts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_http_klant_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__scripts_sgsClasses_scripts__ = __webpack_require__(67);
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









var gwKlantZoekUitgebreidComponent = /** @class */ (function (_super) {
    __extends(gwKlantZoekUitgebreidComponent, _super);
    function gwKlantZoekUitgebreidComponent(_toastr, router, fb, httpKlant, _baseUrl, route, _sanitizer) {
        var _this = _super.call(this, _toastr) || this;
        _this._toastr = _toastr;
        _this.router = router;
        _this.fb = fb;
        _this.httpKlant = httpKlant;
        _this._baseUrl = _baseUrl;
        _this.route = route;
        _this._sanitizer = _sanitizer;
        _this.appLabels = __WEBPACK_IMPORTED_MODULE_3__scripts_appLabels__["a" /* appLabels */];
        _this.zoekVelden = null;
        _this.searching = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        return _this;
    }
    gwKlantZoekUitgebreidComponent.prototype.ngOnInit = function () {
        this.zkForm = this.fb.group({
            KlantId: [""],
            Organisatie: [""],
            Voornaam: [""],
            Achternaam: [""],
            Straat: [""],
            Gemeente: [""]
        });
    };
    gwKlantZoekUitgebreidComponent.prototype.raiseSearch = function () {
        this.zoekVelden = new __WEBPACK_IMPORTED_MODULE_8__scripts_sgsClasses_scripts__["e" /* SgsKlantZoekVelden */]();
        this.zoekVelden.klantId = this.zkForm.controls.KlantId.value;
        this.zoekVelden.organisatie = this.zkForm.controls.Organisatie.value;
        this.zoekVelden.voornaam = this.zkForm.controls.Voornaam.value;
        this.zoekVelden.achternaam = this.zkForm.controls.Achternaam.value;
        this.zoekVelden.straat = this.zkForm.controls.Straat.value;
        this.zoekVelden.gemeente = this.zkForm.controls.Gemeente.value;
        this.searching.emit(this.zoekVelden);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], gwKlantZoekUitgebreidComponent.prototype, "searching", void 0);
    gwKlantZoekUitgebreidComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "gw-klant-zoekuitgebreid",
            template: __webpack_require__(660),
            styles: [__webpack_require__(661)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])("BASE_URL")),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["ToastrService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_6__services_http_klant_service__["a" /* HttpKlantService */], String, __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["DomSanitizer"]])
    ], gwKlantZoekUitgebreidComponent);
    return gwKlantZoekUitgebreidComponent;
}(__WEBPACK_IMPORTED_MODULE_4__scripts_general_scripts__["b" /* GeneralScripts */]));



/***/ }),

/***/ 660:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"zkForm\" class=\"container-fluid paddingTop30px\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\"><label for=\"txtKlantId\" class=\"pull-right\">Klant Id:</label></div>\r\n            <div class=\"col-sm-8\"><input type=\"text\" id=\"txtKlantId\" formControlName=\"KlantId\" AllowOnlyNumbers DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\"><label for=\"txtOrganisatie\" class=\"pull-right\">Organisatie:</label></div>\r\n            <div class=\"col-sm-8\"><input type=\"text\" id=\"txtOrganisatie\" formControlName=\"Organisatie\" DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\"><label for=\"txtVoornaam\" class=\"pull-right\">Voornaam:</label></div>\r\n            <div class=\"col-sm-8\"><input type=\"text\" id=\"txtVoornaam\" formControlName=\"Voornaam\" DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\"><label for=\"txtAchternaam\" class=\"pull-right\">Achternaam:</label></div>\r\n            <div class=\"col-sm-8\"><input type=\"text\" id=\"txtAchternaam\" formControlName=\"Achternaam\" DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\"><label for=\"txtStraat\" class=\"pull-right\">Straat:</label></div>\r\n            <div class=\"col-sm-8\"><input type=\"text\" id=\"txtStraat\" formControlName=\"Straat\" DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\"><label for=\"txtGemeente\" class=\"pull-right\">Gemeente:</label></div>\r\n            <div class=\"col-sm-8\"><input type=\"text\" id=\"txtGemeente\" formControlName=\"Gemeente\" DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-8 col-sm-offset-4\"><button type=\"button\" (click)=\"raiseSearch()\" class=\"btn btn-default\">{{appLabels.Send}}</button></div>\r\n        </div>\r\n    </div>\r\n</form>";

/***/ }),

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(662);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 662:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwKWGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_http_kleinewerven_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scripts_appLabels__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(8);
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









var gwKWGridComponent = /** @class */ (function (_super) {
    __extends(gwKWGridComponent, _super);
    function gwKWGridComponent(toastr, router, fb, kwService) {
        var _this = _super.call(this, toastr) || this;
        _this.toastr = toastr;
        _this.router = router;
        _this.fb = fb;
        _this.kwService = kwService;
        _this.appLabels = __WEBPACK_IMPORTED_MODULE_5__scripts_appLabels__["a" /* appLabels */];
        _this.rows = [];
        _this.temp = [];
        _this.title = "";
        _this.StatusId = -1;
        _this.isExtendedSearch = false;
        _this.forNieuweAanvragen = true;
        _this.useSearch = true;
        _this.canDelete = false;
        return _this;
    }
    Object.defineProperty(gwKWGridComponent.prototype, "NieuweAanvragen", {
        get: function () {
            return this.forNieuweAanvragen;
        },
        set: function (value) {
            this.forNieuweAanvragen = "" + value !== "false";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gwKWGridComponent.prototype, "ExtendedSearch", {
        get: function () {
            return this.useSearch;
        },
        set: function (value) {
            this.useSearch = "" + value !== "false";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gwKWGridComponent.prototype, "AllowDelete", {
        get: function () {
            return this.canDelete;
        },
        set: function (value) {
            this.canDelete = "" + value !== "false";
        },
        enumerable: true,
        configurable: true
    });
    gwKWGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.statusForm = this.fb.group({
            sts: ["-1"],
            ID: [""],
            StatusID: [""],
            Ref: [""],
            GW: [""],
            TPT: [""],
            Herk: [""],
            Best: [""],
            Dtm: [""],
            Status: [""]
        });
        this.kwService.getStatusList()
            .then(function (lst) {
            if (lst != null && lst != undefined) {
                _this.statusDropdownList = lst.slice();
            }
            _this.statusForm.patchValue({ sts: (_this.NieuweAanvragen ? '0' : '-1') });
            _this.statusChanged();
        }).catch(function (error) {
            _this.handleError(error);
        });
    };
    gwKWGridComponent.prototype.statusChanged = function () {
        switch (this.statusForm.controls.sts.value) {
            case "-1":// Selecteer
                this.StatusId = -1;
                this.rows = [];
                this.temp = [];
                break;
            default:// Status
                this.StatusId = this.statusForm.controls.sts.value;
                this.loadStatusList();
                break;
        }
    };
    gwKWGridComponent.prototype.loadStatusList = function () {
        var _this = this;
        this.kwService.gwMeldingListByStatus(this.StatusId)
            .then(function (data) {
            _this.temp = data.slice();
            _this.rows = data;
            _this.clearFormFields();
        }).catch(function (error) {
            _this.handleError(error);
        });
    };
    gwKWGridComponent.prototype.clearFormFields = function () {
        // Clear all Form Values except sts
        this.statusForm.patchValue({
            ID: "",
            StatusID: "",
            Ref: "",
            GW: "",
            TPT: "",
            Herk: "",
            Best: "",
            Dtm: "",
            Status: ""
        });
    };
    gwKWGridComponent.prototype.ToggleExtendedSearch = function () {
        this.isExtendedSearch = !this.isExtendedSearch;
    };
    gwKWGridComponent.prototype.onExtendedSearch = function (zoekVelden) {
        var _this = this;
        this.kwService.gwZoekList(zoekVelden).toPromise()
            .then(function (lst) {
            _this.rows = lst;
            _this.temp = lst.slice();
            _this.clearFormFields();
        });
    };
    gwKWGridComponent.prototype.filter = function () {
        var id = this.statusForm.controls.ID.value;
        var ref = this.statusForm.controls.Ref.value.toLowerCase();
        var gw = this.statusForm.controls.GW.value.toLowerCase();
        var tpt = this.statusForm.controls.TPT.value.toLowerCase();
        var herk = this.statusForm.controls.Herk.value.toLowerCase();
        var best = this.statusForm.controls.Best.value.toLowerCase();
        var dtm = this.statusForm.controls.Dtm.value;
        var status = this.statusForm.controls.Status.value.toLowerCase();
        var dp = new __WEBPACK_IMPORTED_MODULE_8__angular_common__["DatePipe"]("en-US");
        // filter our data
        var temp = this.temp.filter(function (d) {
            var SDtm = null;
            if (dtm > "") {
                SDtm = dp.transform(d.startDatum, "dd/MM/yyyy");
            }
            return ((d.meldingID != null && d.meldingID != undefined && d.meldingID.toString().indexOf(id) !== -1) || !id)
                && ((d.klantReferentie != null && d.klantReferentie != undefined && d.klantReferentie.toLowerCase().indexOf(ref) !== -1) || !ref)
                && ((d.grondwerker != null && d.grondwerker != undefined && d.grondwerker.toLowerCase().indexOf(gw) !== -1) || !gw)
                && ((d.transporteur != null && d.transporteur != undefined && d.transporteur.toLowerCase().indexOf(tpt) !== -1) || !tpt)
                && ((d.herkomst != null && d.herkomst != undefined && d.herkomst.toLowerCase().indexOf(herk) !== -1) || !herk)
                && ((d.bestemming != null && d.bestemming != undefined && d.bestemming.toLowerCase().indexOf(best) !== -1) || !best)
                && ((d.status != null && d.status != undefined && d.status.toLowerCase().indexOf(status) !== -1) || !status)
                && (!dtm || (SDtm != null && SDtm.indexOf(dtm) !== -1));
        });
        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.grid.offset = 0;
    };
    gwKWGridComponent.prototype.onActivate = function (event) {
        if (event.type === "dblclick") {
            this.linkToKW(event.row["meldingID"]);
        }
    };
    gwKWGridComponent.prototype.linkToKW = function (id) {
        // this.router.navigate(["/kleinewerven-detail", id]);
        this.router.navigate(["/gw/kw-edit", id]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable__["DatatableComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable__["DatatableComponent"])
    ], gwKWGridComponent.prototype, "grid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], gwKWGridComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('NieuweAanvragen'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], gwKWGridComponent.prototype, "NieuweAanvragen", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('ExtendedSearch'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], gwKWGridComponent.prototype, "ExtendedSearch", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('AllowDelete'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], gwKWGridComponent.prototype, "AllowDelete", null);
    gwKWGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "gw-kw-grid",
            template: __webpack_require__(664),
            styles: [__webpack_require__(665)]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["ToastrService"], __WEBPACK_IMPORTED_MODULE_7__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_4__services_http_kleinewerven_service__["a" /* HttpKleineWervenService */]])
    ], gwKWGridComponent);
    return gwKWGridComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__["b" /* GeneralScripts */]));



/***/ }),

/***/ 664:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<form [formGroup]=\"statusForm\" class=\"container-fluid paddingTop10px\">\r\n    <div class=\"row\" *ngIf=\"useSearch\">\r\n        <div class=\"col-sm-3\">\r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"ToggleExtendedSearch()\">{{ isExtendedSearch ? 'Enkelvoudig zoeken' : 'Geavanceerd zoeken' }}</button>\r\n        </div>\r\n        <div *ngIf=\"useSearch && !isExtendedSearch\" class=\"col-sm-9\">\r\n            <label class=\"paddingRight10px\">Filter status</label>\r\n            <select formControlName=\"sts\" DottedBorderBelow (change)=\"statusChanged()\">\r\n                <option value=\"-1\">Selecteer</option>\r\n                <option *ngFor=\"let sts of statusDropdownList\" [value]=\"sts.id\" [innerHTML]=\"sts.status\"></option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"useSearch && isExtendedSearch\">\r\n        <div class=\"col-sm-12\"><gw-kw-zoekuitgebreid (searching)=\"onExtendedSearch($event)\"></gw-kw-zoekuitgebreid></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"NgxTable\">\r\n                <ngx-datatable #table\r\n                               class=\"bootstrap\"\r\n                               (activate)=\"onActivate($event)\"\r\n                               [rows]=\"rows\"\r\n                               [columnMode]=\"'flex'\"\r\n                               [headerHeight]=\"50\"\r\n                               [footerHeight]=\"40\"\r\n                               [limit]=\"appLabels.tableViewRows\"\r\n                               [cssClasses]=\"appLabels.iconsCss\"\r\n                               [messages]=\"{totalMessage: appLabels.Total.toLowerCase(), emptyMessage: appLabels.NoDataToDisplay}\"\r\n                               [sorts]=\"[{prop:'ID', dir:'desc' }]\"\r\n                               [rowHeight]=\"'auto'\">\r\n\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"meldingID\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Nummer</span>\r\n                            <div><input type=\"text\" formControlName=\"ID\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span [routerLink]=\"\" (click)=\"linkToKW(row['meldingID'])\"><span>{{row['meldingID']}}</span></span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"klantReferentie\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Referentie</span>\r\n                            <div><input type=\"text\" formControlName=\"Ref\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"grondwerker\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Grondwerker</span>\r\n                            <div><input type=\"text\" formControlName=\"GW\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"transporteur\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Transporteur</span>\r\n                            <div><input type=\"text\" formControlName=\"TPT\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"herkomst\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Herkomst</span>\r\n                            <div><input type=\"text\" formControlName=\"Herk\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"bestemming\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Bestemming</span>\r\n                            <div><input type=\"text\" formControlName=\"Best\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"startDatum\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">StartDatum</span></div>\r\n                            <div><input type=\"text\" formControlName=\"Dtm\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date:\"dd/MM/yyyy\"}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"status\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Status</span>\r\n                            <div><input type=\"text\" formControlName=\"Status\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"Detail\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img src=\"" + __webpack_require__(12) + "\" class=\"ibtn\" (click)=\"linkToKW(row['meldingID'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                </ngx-datatable>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</form>";

/***/ }),

/***/ 665:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(666);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 666:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwKWZoekUitgebreidComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scripts_appLabels__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scripts_general_scripts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_http_dossier_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_http_klant_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_http_tv_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_datepicker__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__scripts_sgsClasses_scripts__ = __webpack_require__(67);
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












var gwKWZoekUitgebreidComponent = /** @class */ (function (_super) {
    __extends(gwKWZoekUitgebreidComponent, _super);
    function gwKWZoekUitgebreidComponent(_toastr, router, fb, _localeService, httpDossier, httpKlant, httpTV, _baseUrl, route, _sanitizer) {
        var _this = _super.call(this, _toastr) || this;
        _this._toastr = _toastr;
        _this.router = router;
        _this.fb = fb;
        _this._localeService = _localeService;
        _this.httpDossier = httpDossier;
        _this.httpKlant = httpKlant;
        _this.httpTV = httpTV;
        _this._baseUrl = _baseUrl;
        _this.route = route;
        _this._sanitizer = _sanitizer;
        _this.appLabels = __WEBPACK_IMPORTED_MODULE_3__scripts_appLabels__["a" /* appLabels */];
        _this.IndienerListItems = null;
        _this.DossierBeheerderListItems = null;
        _this.zoekVelden = null;
        _this.searching = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        return _this;
    }
    gwKWZoekUitgebreidComponent.prototype.ngOnInit = function () {
        // Needed configuration for the bsDatepicker to accept dd/MM/yyyy formatting
        this._localeService.use("bootstrap-locale-nlbe");
        this.zkForm = this.fb.group({
            Code: [""],
            Indiener: ["-1"],
            VerklaringOntvangen: [""],
            Referentie: [""],
            DossierBeheerder: ["-1"]
        });
        this.loadDropdowns();
    };
    gwKWZoekUitgebreidComponent.prototype.loadDropdowns = function () {
        var _this = this;
        this.httpKlant.sgsComboListItems()
            .subscribe(function (lst) {
            if (lst != null && lst != undefined) {
                _this.IndienerListItems = lst.slice();
            }
        });
        this.httpDossier.sgsComboListItems()
            .subscribe(function (lst) {
            if (lst != null && lst != undefined) {
                _this.DossierBeheerderListItems = lst.slice();
            }
        });
    };
    gwKWZoekUitgebreidComponent.prototype.raiseSearch = function () {
        this.zoekVelden = new __WEBPACK_IMPORTED_MODULE_11__scripts_sgsClasses_scripts__["d" /* SgsKWZoekVelden */]();
        this.zoekVelden.klantId = this.zkForm.controls.Indiener.value;
        this.zoekVelden.referentie = this.zkForm.controls.Referentie.value;
        this.zoekVelden.verklaringontvangen = this.zkForm.controls.VerklaringOntvangen.value;
        this.zoekVelden.dossierBeheerderId = this.zkForm.controls.DossierBeheerder.value;
        this.searching.emit(this.zoekVelden);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], gwKWZoekUitgebreidComponent.prototype, "searching", void 0);
    gwKWZoekUitgebreidComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "gw-kw-zoekuitgebreid",
            template: __webpack_require__(668),
            styles: [__webpack_require__(669)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __param(7, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])("BASE_URL")),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["ToastrService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_datepicker__["a" /* BsLocaleService */],
            __WEBPACK_IMPORTED_MODULE_6__services_http_dossier_service__["a" /* HttpDossierService */],
            __WEBPACK_IMPORTED_MODULE_7__services_http_klant_service__["a" /* HttpKlantService */],
            __WEBPACK_IMPORTED_MODULE_8__services_http_tv_service__["a" /* HttpTVService */], String, __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["DomSanitizer"]])
    ], gwKWZoekUitgebreidComponent);
    return gwKWZoekUitgebreidComponent;
}(__WEBPACK_IMPORTED_MODULE_4__scripts_general_scripts__["b" /* GeneralScripts */]));



/***/ }),

/***/ 668:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"zkForm\" class=\"container-fluid paddingTop30px\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"ddlIndiener\" class=\"pull-right\">Klant/Indiener</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlIndiener\" formControlName=\"Indiener\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let klant of IndienerListItems\" [value]=\"klant.klantID\" [innerHTML]=\"klant.naam\"></option>\r\n                </select>\r\n            </div>\r\n            <div class=\"col-sm-2\"><label for=\"chkVerklaringOntvangen\" class=\"pull-right\">Verklaring Ontvangen:</label></div>\r\n            <div class=\"checkbox col-sm-4\"><div class=\"marginTopMin10px marginLeft20px\"><input type=\"checkbox\" id=\"chkVerklaringOntvangen\" class=\"marginBottom0\" formControlName=\"VerklaringOntvangen\" value=\"\" /></div></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtReferentie\" class=\"pull-right\">Referentie:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtReferentie\" formControlName=\"Referentie\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlDossierBeheerder\" class=\"pull-right\">DossierBeheerder</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlDossierBeheerder\" formControlName=\"DossierBeheerder\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let dossbeh of DossierBeheerderListItems\" [value]=\"dossbeh.dossierBeheerderID\" [innerHTML]=\"dossbeh.naam\"></option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4 col-sm-offset-8\"><button type=\"button\" (click)=\"raiseSearch()\" class=\"btn btn-default\">{{appLabels.Send}}</button></div>\r\n        </div>\r\n    </div>\r\n</form>";

/***/ }),

/***/ 669:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(670);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SgsBBRZoekVelden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SgsGTMZoekVelden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SgsGVTZoekVelden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SgsKlantZoekVelden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SgsKWZoekVelden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SgsTVZoekVelden; });
// BBR
var SgsBBRZoekVelden = /** @class */ (function () {
    function SgsBBRZoekVelden() {
    }
    return SgsBBRZoekVelden;
}());

// GTM
var SgsGTMZoekVelden = /** @class */ (function () {
    function SgsGTMZoekVelden() {
    }
    return SgsGTMZoekVelden;
}());

// GVT
var SgsGVTZoekVelden = /** @class */ (function () {
    function SgsGVTZoekVelden() {
    }
    return SgsGVTZoekVelden;
}());

// Klant
var SgsKlantZoekVelden = /** @class */ (function () {
    function SgsKlantZoekVelden() {
    }
    return SgsKlantZoekVelden;
}());

// KW
var SgsKWZoekVelden = /** @class */ (function () {
    function SgsKWZoekVelden() {
    }
    return SgsKWZoekVelden;
}());

// TV
var SgsTVZoekVelden = /** @class */ (function () {
    function SgsTVZoekVelden() {
    }
    return SgsTVZoekVelden;
}());



/***/ }),

/***/ 670:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwTVGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_tv_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scripts_appLabels__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_authentication_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__angular_common__);
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










var gwTVGridComponent = /** @class */ (function (_super) {
    __extends(gwTVGridComponent, _super);
    function gwTVGridComponent(_toastr, fb, httpTV, router, route, auth) {
        var _this = _super.call(this, _toastr) || this;
        _this._toastr = _toastr;
        _this.fb = fb;
        _this.httpTV = httpTV;
        _this.router = router;
        _this.route = route;
        _this.auth = auth;
        _this.appLabels = __WEBPACK_IMPORTED_MODULE_6__scripts_appLabels__["a" /* appLabels */];
        _this.StatusDropdownList = null;
        _this.StatusList = null;
        _this.rows = null;
        _this.temp = [];
        _this.title = "";
        _this.StatusId = -1;
        _this.isExtendedSearch = false;
        _this.forNieuweAanvragen = true;
        _this.useSearch = true;
        _this.canDelete = false;
        return _this;
    }
    Object.defineProperty(gwTVGridComponent.prototype, "NieuweAanvragen", {
        get: function () {
            return this.forNieuweAanvragen;
        },
        set: function (value) {
            this.forNieuweAanvragen = "" + value !== "false";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gwTVGridComponent.prototype, "ExtendedSearch", {
        get: function () {
            return this.useSearch;
        },
        set: function (value) {
            this.useSearch = "" + value !== "false";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gwTVGridComponent.prototype, "AllowDelete", {
        get: function () {
            return this.canDelete;
        },
        set: function (value) {
            this.canDelete = "" + value !== "false";
        },
        enumerable: true,
        configurable: true
    });
    gwTVGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.StsForm = this.fb.group({
            sts: [-1],
            technischVerslagID: [""],
            naam: [""],
            gemeenteOnderzoekslocatie: [""],
            indieningsDatum: [""],
            statusDatum: [""],
            indieningswijze: [""],
            gefactureerd: [""]
        });
        this.httpTV.StatusDefinitionList(true)
            .subscribe(function (lst) {
            if (lst != null && lst != undefined) {
                _this.StatusDropdownList = lst.slice();
            }
            _this.StsForm.patchValue({ sts: (_this.NieuweAanvragen ? '0' : '1') });
            _this.statusChanged();
        });
    };
    gwTVGridComponent.prototype.statusChanged = function () {
        switch (this.StsForm.controls.sts.value) {
            case "-1":// Selecteer
                this.StatusId = -1;
                this.rows = [];
                this.temp = [];
                break;
            case "0":// Nieuwe Aanvragen 
                this.StatusId = 1;
                this.NieuweAanvragen = true;
                this.loadStatusList();
                break;
            default:// Status
                this.StatusId = this.StsForm.controls.sts.value;
                this.NieuweAanvragen = false;
                this.loadStatusList();
                break;
        }
    };
    gwTVGridComponent.prototype.loadStatusList = function () {
        var _this = this;
        this.httpTV.gwStatusList(this.StatusId, this.NieuweAanvragen).toPromise()
            .then(function (lst) {
            _this.rows = lst;
            _this.temp = lst.slice();
            _this.clearFormFields();
        });
    };
    gwTVGridComponent.prototype.onExtendedSearch = function (zoekVelden) {
        var _this = this;
        this.httpTV.gwZoekList(zoekVelden).toPromise()
            .then(function (lst) {
            _this.rows = lst;
            _this.temp = lst.slice();
            _this.clearFormFields();
        });
    };
    gwTVGridComponent.prototype.clearFormFields = function () {
        // Clear all Form Values except sts
        this.StsForm.patchValue({
            technischVerslagID: "",
            naam: "",
            gemeenteOnderzoekslocatie: "",
            indieningsDatum: "",
            statusDatum: "",
            indieningswijze: "",
            gefactureerd: ""
        });
    };
    gwTVGridComponent.prototype.filter = function () {
        var _this = this;
        var technischVerslagID = this.StsForm.controls.technischVerslagID.value;
        var naam = this.StsForm.controls.naam.value.toLowerCase();
        var GOL = this.StsForm.controls.gemeenteOnderzoekslocatie.value.toLowerCase();
        var indieningsDatum = this.StsForm.controls.indieningsDatum.value;
        var statusDatum = this.StsForm.controls.statusDatum.value;
        var indieningswijze = this.StsForm.controls.indieningswijze.value.toLowerCase();
        var gefactureerd = this.StsForm.controls.gefactureerd.value.toLowerCase();
        var dp = new __WEBPACK_IMPORTED_MODULE_9__angular_common__["DatePipe"]("en-US");
        // filter our data
        var temp = this.temp.filter(function (row) {
            var indieningsDatumAsString = null;
            if (indieningsDatum > "") {
                indieningsDatumAsString = dp.transform(row.indieningsDatum, "dd/MM/yyyy");
            }
            var statusDatumAsString = null;
            if (statusDatum > "") {
                statusDatumAsString = dp.transform(row.statusDatum, "dd/MM/yyyy");
            }
            return (!technischVerslagID || (!_this.isNullOrUndefined(row.technischVerslagID.toString()) && row.technischVerslagID.toString().indexOf(technischVerslagID) !== -1))
                && (!naam || (!_this.isNullOrUndefined(row.naam.toLowerCase()) && row.naam.toLowerCase().indexOf(naam) !== -1))
                && (!GOL || (!_this.isNullOrUndefined(row.gemeenteOnderzoekslocatie.toLowerCase()) && row.gemeenteOnderzoekslocatie.toLowerCase().indexOf(GOL) !== -1))
                && (!indieningsDatum || (!_this.isNullOrUndefined(indieningsDatumAsString) && indieningsDatumAsString.indexOf(indieningsDatum) !== -1))
                && (!statusDatum || (!_this.isNullOrUndefined(statusDatumAsString) && statusDatumAsString.indexOf(statusDatum) !== -1))
                && (!indieningswijze || (!_this.isNullOrUndefined(row.indieningswijze.toLowerCase()) && row.indieningswijze.toLowerCase().indexOf(indieningswijze) !== -1))
                && (!gefactureerd || (!_this.isNullOrUndefined(row.gefactureerd.toLowerCase()) && row.gefactureerd.toLowerCase().indexOf(gefactureerd) !== -1));
        });
        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    gwTVGridComponent.prototype.getRowClass = function (row) {
        return "ibtn";
    };
    gwTVGridComponent.prototype.onActivate = function (event) {
        if (event.type === "dblclick") {
            this.linkToTV(event.row["technischVerslagID"], event.row["isEvaluatieVlarebo2008"]);
        }
    };
    gwTVGridComponent.prototype.linkToTV = function (tvId, isVlarebo2008) {
        if (isVlarebo2008) {
            this.router.navigate(["gw/tv-edit", tvId]); // => GWBeheer/TVEdit2008.aspx (oude GW)
        }
        else {
            this.router.navigate(["gw/tv-edit", tvId]); // => GWBeheer/TVEditDefault.aspx (oude GW)
        }
    };
    gwTVGridComponent.prototype.deleteTV = function (tvId) {
    };
    gwTVGridComponent.prototype.ToggleExtendedSearch = function () {
        this.isExtendedSearch = !this.isExtendedSearch;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__["DatatableComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__["DatatableComponent"])
    ], gwTVGridComponent.prototype, "table", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], gwTVGridComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('NieuweAanvragen'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], gwTVGridComponent.prototype, "NieuweAanvragen", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('ExtendedSearch'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], gwTVGridComponent.prototype, "ExtendedSearch", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('AllowDelete'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], gwTVGridComponent.prototype, "AllowDelete", null);
    gwTVGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "gw-tv-grid",
            template: __webpack_require__(672),
            styles: [__webpack_require__(675)]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["ToastrService"], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_5__services_http_tv_service__["a" /* HttpTVService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_8__services_authentication_service__["a" /* AuthenticationService */]])
    ], gwTVGridComponent);
    return gwTVGridComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__["b" /* GeneralScripts */]));



/***/ }),

/***/ 672:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<form [formGroup]=\"StsForm\" class=\"container-fluid paddingTop10px\">\r\n    <div class=\"row\" *ngIf=\"useSearch\">\r\n        <div class=\"col-sm-3\">\r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"ToggleExtendedSearch()\">{{ isExtendedSearch ? 'Enkelvoudig zoeken' : 'Geavanceerd zoeken' }}</button>\r\n        </div>\r\n        <div *ngIf=\"useSearch && !isExtendedSearch\" class=\"col-sm-9\">\r\n            <label class=\"paddingRight10px\">Filter status</label>\r\n            <select formControlName=\"sts\" DottedBorderBelow (change)=\"statusChanged()\">\r\n                <option value=\"-1\">Selecteer</option>\r\n                <option *ngFor=\"let sts of StatusDropdownList\" [value]=\"sts.tvStatusID\" [innerHTML]=\"sts.status\"></option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"useSearch && isExtendedSearch\">\r\n        <div class=\"col-sm-12\"><gw-tv-zoekuitgebreid (searching)=\"onExtendedSearch($event)\"></gw-tv-zoekuitgebreid></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"NgxTable\">\r\n                <p *ngIf=\"forNieuweAanvragen == false\" class=\"pull-left NgxTitle\">{{title}}</p>\r\n                <ngx-datatable #table\r\n                               class=\"bootstrap\"\r\n                               (activate)=\"onActivate($event)\"\r\n                               [rows]=\"rows\"\r\n                               [columnMode]=\"'flex'\"\r\n                               [headerHeight]=\"50\"\r\n                               [footerHeight]=\"40\"\r\n                               [limit]=\"appLabels.tableViewRows\"\r\n                               [rowClass]=\"getRowClass\"\r\n                               [cssClasses]=\"appLabels.iconsCss\"\r\n                               [messages]=\"{totalMessage: appLabels.Total.toLowerCase(), emptyMessage: appLabels.NoDataToDisplay}\"\r\n                               [sorts]=\"[{prop:'technischVerslagID', dir:'desc' }]\"\r\n                               [rowHeight]=\"'auto'\">\r\n\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"Samengesteld\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template></ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img *ngIf=\"row['samengevoegdDoor'] != null && row['samengevoegdDoor'] != ''\" src=\"" + __webpack_require__(673) + "\" class=\"ibtn\" (click)=\"linkToDelete(row['technischVerslagID'])\" />\r\n                            <img *ngIf=\"row['externTV'] != null && row['externTV'] == true\" src=\"" + __webpack_require__(674) + "\" class=\"ibtn\" (click)=\"linkToDelete(row['technischVerslagID'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"technischVerslagID\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">TV Nr.</span>\r\n                            <div><input type=\"text\" formControlName=\"technischVerslagID\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <a *ngIf=\"row['isEvaluatieVlarebo2008'] != null && row['isEvaluatieVlarebo2008'] == true\" class=\"pdfLink\" [routerLink]=\"['/technisch-verslag-detail', row['technischVerslagID']]\"><label class=\"text\">{{row['technischVerslagID']}}</label></a>\r\n                            <a *ngIf=\"row['isEvaluatieVlarebo2008'] == null || row['isEvaluatieVlarebo2008'] == false\" class=\"pdfLink\" [routerLink]=\"['/technisch-verslag-detail', row['technischVerslagID']]\"><label class=\"text\">{{row['technischVerslagID']}}</label></a>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"4\" prop=\"naam\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Naam</span>\r\n                            <div><input type=\"text\" formControlName=\"naam\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span>{{value}}</span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"gemeenteOnderzoekslocatie\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Gemeente Onderzoekslokatie</span>\r\n                            <input type=\"text\" formControlName=\"gemeenteOnderzoekslocatie\" class=\"NgxFilterField\" (keyup)=\"filter()\" />\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span>{{value}}</span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" name=\"indieningsDatum\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">IndieningsDatum</span></div>\r\n                            <div><input type=\"text\" formControlName=\"indieningsDatum\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date:\"dd/MM/yyyy\"}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" name=\"statusDatum\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Status Datum</span></div>\r\n                            <div><input type=\"text\" formControlName=\"statusDatum\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date:\"dd/MM/yyyy\"}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"indieningswijze\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Indien.Wijze</span></div>\r\n                            <div><input type=\"text\" formControlName=\"indieningswijze\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"gefactureerd\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Gefact.</span></div>\r\n                            <div><input type=\"text\" formControlName=\"gefactureerd\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"Detail\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img src=\"" + __webpack_require__(12) + "\" class=\"ibtn\" (click)=\"linkToTV(row['technischVerslagID'], row['isEvaluatieVlarebo2008'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column *ngIf=\"canDelete\" [flexGrow]=\"1\" name=\"Detail\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img src=\"" + __webpack_require__(53) + "\" class=\"ibtn\" (click)=\"deleteTV(row['technischVerslagID'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                </ngx-datatable>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</form>";

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,R0lGODlhDwAPAPcAAAAAAA1nCw1tBw1vBwxwCAx1CA54Bgx/BBBtDxNvFhZrFxptGBJ7DRN9CxJ+Dhd8Ch50GClsJCNyIidwJiV0JSx2JzV2NAmHAg6LCAqSBwqVCA6XDBKPCBONDRqLEReWCxCbChGfCRmTCxmYDRmVERqWEB+RFg+qBw6/AhKlCRSqDBivCh2qCRysGBCwCBCyDBe0DhS7BBi1BBq3Ch26DRe5EhizEBuzER+zER+zFSSPGyGSGSOcGCaFIC+ALDOKJzGMJjSMKD2GOiOqFSKwDyKxEyGzFCS4GS+gJTChKAbLAA3DAhHFAxPJAxTJBBjFBx7DDB3FDhnNCx7NCR/CEBnSBRrQCCLJDCLMESTOEyHWByvSEy3UFC7DIEaZOUabPEmWP0uYQFGLS1WOTlSKU1OTUVqWWFiYV1yaVF6sWFS1TVu1VGGQYWCuW3Gsb3aqbnWkdnGpcnKtcHOucXardXardn+3d5a4mZe5mp2/np+/oI7Ch5fDlpfAmJrDm6nEn8LZxun82vH77fL78/X79Pb89PP++fP++vX7+P319vv68/v59v36/P38/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAP8ALAAAAAAPAA8AAAi9AP8JHEiwIEE9FhAQCLAAjsF/ZASssJKlixEHEwqaMUBjCg41SbBE4RCB4IAUTqB4EbQnhpIZDNgIFHPBRo0jYAr1aUGDiAYFAiVg2NFGzp1DgOjMCbKhgMAEHYAEUsSo0aJEiOxkOPDnHwUSHtK4wWMIUJ04P0A0EDjmw4kXOcIQ8tMCBosQEAY+cLGEypdBfG6gkDHizEA0JZ40KbIGiRQmQyoULCPiihYuW6qo8PEwjxATPHT0ePOwNMGAADs="

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,R0lGODlhDwAPAPcAAACAAf///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAADwAPAAAIOwABCBxIsKDBgwgTDgzAcCHDhgAgRhQYwOFEgxUpasT4MGPGiA0/hixY8eNEiSMpinyokqXClzBjygwIADs="

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

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".parentTop {\r\n    position: relative;\r\n    display: block;\r\n}\r\n.childTop {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 200px;\r\n    display: block;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwTVZoekUitgebreidComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scripts_appLabels__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scripts_general_scripts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_http_bbr_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_http_dossier_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_http_klant_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_http_tv_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_datepicker__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__scripts_sgsClasses_scripts__ = __webpack_require__(67);
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













var gwTVZoekUitgebreidComponent = /** @class */ (function (_super) {
    __extends(gwTVZoekUitgebreidComponent, _super);
    function gwTVZoekUitgebreidComponent(_toastr, router, fb, _localeService, httpBbr, httpDossier, httpKlant, httpTV, _baseUrl, route, _sanitizer) {
        var _this = _super.call(this, _toastr) || this;
        _this._toastr = _toastr;
        _this.router = router;
        _this.fb = fb;
        _this._localeService = _localeService;
        _this.httpBbr = httpBbr;
        _this.httpDossier = httpDossier;
        _this.httpKlant = httpKlant;
        _this.httpTV = httpTV;
        _this._baseUrl = _baseUrl;
        _this.route = route;
        _this._sanitizer = _sanitizer;
        _this.appLabels = __WEBPACK_IMPORTED_MODULE_3__scripts_appLabels__["a" /* appLabels */];
        _this.IndienerListItems = null;
        _this.IndieningsWijzeListItems = null;
        _this.DossierBeheerderListItems = null;
        _this.StatusListItems = null;
        _this.zoekVelden = null;
        _this.searching = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        return _this;
    }
    gwTVZoekUitgebreidComponent.prototype.ngOnInit = function () {
        // Needed configuration for the bsDatepicker to accept dd/MM/yyyy formatting
        this._localeService.use("bootstrap-locale-nlbe");
        this.zkForm = this.fb.group({
            Code: [""],
            Indiener: ["-1"],
            FactuurRef: [""],
            Adres: [""],
            Gemeente: [""],
            Titel: [""],
            Beschrijving: [""],
            Referentie: [""],
            Overname: [""],
            Samengevoegd: [""],
            EBSD: [""],
            IndieningsWijze: ["-1"],
            Datum: [""],
            Status: ["-1"],
            Gefactureerd: ["-1"],
            DossierBeheerder: ["-1"]
        });
        this.loadDropdowns();
    };
    gwTVZoekUitgebreidComponent.prototype.loadDropdowns = function () {
        var _this = this;
        this.httpKlant.sgsComboListItems()
            .subscribe(function (lst) {
            if (lst != null && lst != undefined) {
                _this.IndienerListItems = lst.slice();
            }
        });
        this.httpDossier.sgsComboListItems()
            .subscribe(function (lst) {
            if (lst != null && lst != undefined) {
                _this.DossierBeheerderListItems = lst.slice();
            }
        });
        this.httpBbr.sgsIndieningsWijzeListItems()
            .subscribe(function (lst) {
            if (lst != null && lst != undefined) {
                _this.IndieningsWijzeListItems = lst.slice();
            }
        });
        this.httpTV.StatusDefinitionList(false)
            .subscribe(function (lst) {
            if (lst != null && lst != undefined) {
                _this.StatusListItems = lst.slice();
            }
        });
    };
    gwTVZoekUitgebreidComponent.prototype.raiseSearch = function () {
        this.zoekVelden = new __WEBPACK_IMPORTED_MODULE_12__scripts_sgsClasses_scripts__["f" /* SgsTVZoekVelden */]();
        this.zoekVelden.tvId = this.zkForm.controls.Code.value;
        this.zoekVelden.klantId = this.zkForm.controls.Indiener.value;
        this.zoekVelden.factuurRef = this.zkForm.controls.FactuurRef.value;
        this.zoekVelden.adres = this.zkForm.controls.Adres.value;
        this.zoekVelden.gemeente = this.zkForm.controls.Gemeente.value;
        this.zoekVelden.titel = this.zkForm.controls.Titel.value;
        this.zoekVelden.beschrijving = this.zkForm.controls.Beschrijving.value;
        this.zoekVelden.referentie = this.zkForm.controls.Referentie.value;
        this.zoekVelden.overname = this.zkForm.controls.Overname.value;
        this.zoekVelden.samengevoegd = this.zkForm.controls.Samengevoegd.value;
        this.zoekVelden.ebsd = this.zkForm.controls.EBSD.value;
        this.zoekVelden.indieningswijzeId = this.zkForm.controls.IndieningsWijze.value;
        this.zoekVelden.datum = this.zkForm.controls.Datum.value;
        this.zoekVelden.statusId = this.zkForm.controls.Status.value;
        this.zoekVelden.gefactureerd = this.zkForm.controls.Gefactureerd.value;
        this.zoekVelden.dossierBeheerderId = this.zkForm.controls.DossierBeheerder.value;
        this.searching.emit(this.zoekVelden);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], gwTVZoekUitgebreidComponent.prototype, "searching", void 0);
    gwTVZoekUitgebreidComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "gw-tv-zoekuitgebreid",
            template: __webpack_require__(678),
            styles: [__webpack_require__(679)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __param(8, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])("BASE_URL")),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["ToastrService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_datepicker__["a" /* BsLocaleService */],
            __WEBPACK_IMPORTED_MODULE_6__services_http_bbr_service__["a" /* HttpBBRService */],
            __WEBPACK_IMPORTED_MODULE_7__services_http_dossier_service__["a" /* HttpDossierService */],
            __WEBPACK_IMPORTED_MODULE_8__services_http_klant_service__["a" /* HttpKlantService */],
            __WEBPACK_IMPORTED_MODULE_9__services_http_tv_service__["a" /* HttpTVService */], String, __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["DomSanitizer"]])
    ], gwTVZoekUitgebreidComponent);
    return gwTVZoekUitgebreidComponent;
}(__WEBPACK_IMPORTED_MODULE_4__scripts_general_scripts__["b" /* GeneralScripts */]));



/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"zkForm\" class=\"container-fluid paddingTop30px\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtCode\" class=\"pull-right\">Code</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtCode\" formControlName=\"Code\" AllowOnlyNumbers DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"chkOvername\" class=\"pull-right\">Overname:</label></div>\r\n            <div class=\"checkbox col-sm-4\"><div class=\"marginTopMin10px marginLeft20px\"><input type=\"checkbox\" id=\"chkOvername\" class=\"marginBottom0\" formControlName=\"Overname\" value=\"\" /></div></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"ddlIndiener\" class=\"pull-right\">Klant/Indiener</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlIndiener\" formControlName=\"Indiener\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let klant of IndienerListItems\" [value]=\"klant.klantID\" [innerHTML]=\"klant.naam\"></option>\r\n                </select>\r\n            </div>\r\n            <div class=\"col-sm-2\"><label for=\"chkSamengevoegd\" class=\"pull-right\">Samengevoegd:</label></div>\r\n            <div class=\"checkbox col-sm-4\"><div class=\"marginTopMin10px marginLeft20px\"><input type=\"checkbox\" id=\"chkSamengevoegd\" class=\"marginBottom0\" formControlName=\"Samengevoegd\" value=\"\" /></div></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtFactuurRef\" class=\"pull-right\">Factuur Referentie Klant:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtFactuurRef\" formControlName=\"FactuurRef\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"txtEBSD\" class=\"pull-right\">Naam EBSD:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtEBSD\" formControlName=\"EBSD\" DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtAdres\" class=\"pull-right\">Straat en nr:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtAdres\" formControlName=\"Adres\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlIndieningsWijze\" class=\"pull-right\">Indieningswijze</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlIndieningsWijze\" formControlName=\"IndieningsWijze\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let iw of IndieningsWijzeListItems\" [value]=\"iw.indieningswijzeID\" [innerHTML]=\"iw.indieningswijze\"></option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtGemeente\" class=\"pull-right\">Gemeente:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtGemeente\" formControlName=\"Gemeente\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"dteDatum\" class=\"pull-right\">Datum:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"dteDatum\" formControlName=\"Datum\" class=\"form-control ng-trim-ignore\" bsDatepicker placement=\"top left\" autocomplete=\"off\" DottedBorderBelow [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtTitel\" class=\"pull-right\">Titel:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtTitel\" formControlName=\"Titel\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlStatus\" class=\"pull-right\">Status</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlStatus\" formControlName=\"Status\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let sts of StatusListItems\" [value]=\"sts.tvStatusID\" [innerHTML]=\"sts.status\"></option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtBeschrijving\" class=\"pull-right\">Beschrijving:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtBeschrijving\" formControlName=\"Beschrijving\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlGefactureerd\" class=\"pull-right\">Gefactureerd</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlGefactureerd\" formControlName=\"Gefactureerd\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option value=\"1\">Ja</option>\r\n                    <option value=\"0\">Nee</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtReferentie\" class=\"pull-right\">Referentie:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtReferentie\" formControlName=\"Referentie\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlDossierBeheerder\" class=\"pull-right\">DossierBeheerder</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlDossierBeheerder\" formControlName=\"DossierBeheerder\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let dossbeh of DossierBeheerderListItems\" [value]=\"dossbeh.dossierBeheerderID\" [innerHTML]=\"dossbeh.naam\"></option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4 col-sm-offset-8\"><button type=\"button\" (click)=\"raiseSearch()\" class=\"btn btn-default\">{{appLabels.Send}}</button></div>\r\n        </div>\r\n    </div>\r\n</form>";

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

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GwGridRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_common_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_GW_gw_home_gw_home_component__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_chronos__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_locale__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_services_http_mail_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_services_event_listener_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_authentication_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_loading_animation_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_http_puin_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_http_tvzone_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_http_tv_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_http_kleinewerven_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_http_klant_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_http_gvt_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_http_gtm_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_http_file_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_http_dossier_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_http_bbr_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_http_interceptor_service__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Customer Related
// GW Related



Object(__WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_chronos__["a" /* defineLocale */])("bootstrap-locale-nlbe", __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_locale__["a" /* nlBeLocale */]);















var routes = [
    { path: "", canActivate: [__WEBPACK_IMPORTED_MODULE_9__services_authentication_service__["a" /* AuthenticationService */]], component: __WEBPACK_IMPORTED_MODULE_4__components_GW_gw_home_gw_home_component__["a" /* gwHomeComponent */], data: { state: "gw/home/" } },
];
var GwGridRoutingModule = /** @class */ (function () {
    function GwGridRoutingModule() {
    }
    GwGridRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["HTTP_INTERCEPTORS"], useClass: __WEBPACK_IMPORTED_MODULE_21__services_http_interceptor_service__["a" /* HttpInterceptorService */], multi: true },
                __WEBPACK_IMPORTED_MODULE_9__services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_20__services_http_bbr_service__["a" /* HttpBBRService */],
                __WEBPACK_IMPORTED_MODULE_19__services_http_dossier_service__["a" /* HttpDossierService */],
                __WEBPACK_IMPORTED_MODULE_18__services_http_file_service__["a" /* HttpFileService */],
                __WEBPACK_IMPORTED_MODULE_17__services_http_gtm_service__["a" /* HttpGTMService */],
                __WEBPACK_IMPORTED_MODULE_16__services_http_gvt_service__["a" /* HttpGVTService */],
                __WEBPACK_IMPORTED_MODULE_15__services_http_klant_service__["a" /* HttpKlantService */],
                __WEBPACK_IMPORTED_MODULE_14__services_http_kleinewerven_service__["a" /* HttpKleineWervenService */],
                __WEBPACK_IMPORTED_MODULE_13__services_http_tv_service__["a" /* HttpTVService */],
                __WEBPACK_IMPORTED_MODULE_12__services_http_tvzone_service__["a" /* HttpTVZoneService */],
                __WEBPACK_IMPORTED_MODULE_11__services_http_puin_service__["a" /* HttpPuinService */],
                __WEBPACK_IMPORTED_MODULE_7__components_services_http_mail_service__["a" /* HttpMailService */],
                __WEBPACK_IMPORTED_MODULE_10__services_loading_animation_service__["a" /* LoadingAnimationService */],
                __WEBPACK_IMPORTED_MODULE_8__components_services_event_listener_service__["a" /* EventListenerService */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]
            ]
        })
    ], GwGridRoutingModule);
    return GwGridRoutingModule;
}());



/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWhvbWUvZ3ctaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ncmlkLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWhvbWUvZ3ctaG9tZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWhvbWUvZ3ctaG9tZS5jb21wb25lbnQuY3NzP2NkYWIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ob21lL2d3LWhvbWUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWJici1ncmlkL2d3LWJici1ncmlkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWJici1ncmlkL2d3LWJici1ncmlkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctYmJyLWdyaWQvZ3ctYmJyLWdyaWQuY29tcG9uZW50LmNzcz8xMmFhIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctYmJyLWdyaWQvZ3ctYmJyLWdyaWQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWJici16b2VrdWl0Z2VicmVpZC9ndy1iYnItem9la3VpdGdlYnJlaWQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctYmJyLXpvZWt1aXRnZWJyZWlkL2d3LWJici16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWJici16b2VrdWl0Z2VicmVpZC9ndy1iYnItem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzcz9iYWM0Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctYmJyLXpvZWt1aXRnZWJyZWlkL2d3LWJici16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctZ3RtLWdyaWQvZ3ctZ3RtLWdyaWQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctZ3RtLWdyaWQvZ3ctZ3RtLWdyaWQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2ltYWdlcy9jaGVja2VyZWQtZmxhZy1pY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWd0bS1ncmlkL2d3LWd0bS1ncmlkLmNvbXBvbmVudC5jc3M/MmIyMSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWd0bS1ncmlkL2d3LWd0bS1ncmlkLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ndG0tem9la3VpdGdlYnJlaWQvZ3ctZ3RtLXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWd0bS16b2VrdWl0Z2VicmVpZC9ndy1ndG0tem9la3VpdGdlYnJlaWQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ndG0tem9la3VpdGdlYnJlaWQvZ3ctZ3RtLXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5jc3M/ZjhhNCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWd0bS16b2VrdWl0Z2VicmVpZC9ndy1ndG0tem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWd2dC1ncmlkL2d3LWd2dC1ncmlkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWd2dC1ncmlkL2d3LWd2dC1ncmlkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctZ3Z0LWdyaWQvZ3ctZ3Z0LWdyaWQuY29tcG9uZW50LmNzcz8yN2M5Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctZ3Z0LWdyaWQvZ3ctZ3Z0LWdyaWQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWd2dC16b2VrdWl0Z2VicmVpZC9ndy1ndnQtem9la3VpdGdlYnJlaWQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctZ3Z0LXpvZWt1aXRnZWJyZWlkL2d3LWd2dC16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWd2dC16b2VrdWl0Z2VicmVpZC9ndy1ndnQtem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzcz9kOTFkIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctZ3Z0LXpvZWt1aXRnZWJyZWlkL2d3LWd2dC16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta2xhbnQtZ3JpZC9ndy1rbGFudC1ncmlkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWtsYW50LWdyaWQvZ3cta2xhbnQtZ3JpZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWtsYW50LWdyaWQvZ3cta2xhbnQtZ3JpZC5jb21wb25lbnQuY3NzPzYxN2IiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rbGFudC1ncmlkL2d3LWtsYW50LWdyaWQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWtsYW50d2lqei1ncmlkL2d3LWtsYW50d2lqei1ncmlkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWtsYW50d2lqei1ncmlkL2d3LWtsYW50d2lqei1ncmlkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta2xhbnR3aWp6LWdyaWQvZ3cta2xhbnR3aWp6LWdyaWQuY29tcG9uZW50LmNzcz85ZjZiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta2xhbnR3aWp6LWdyaWQvZ3cta2xhbnR3aWp6LWdyaWQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWtsYW50LXpvZWt1aXRnZWJyZWlkL2d3LWtsYW50LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWtsYW50LXpvZWt1aXRnZWJyZWlkL2d3LWtsYW50LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta2xhbnQtem9la3VpdGdlYnJlaWQvZ3cta2xhbnQtem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzcz9hNTg1Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta2xhbnQtem9la3VpdGdlYnJlaWQvZ3cta2xhbnQtem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWt3LWdyaWQvZ3cta3ctZ3JpZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rdy1ncmlkL2d3LWt3LWdyaWQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rdy1ncmlkL2d3LWt3LWdyaWQuY29tcG9uZW50LmNzcz9iNDE2Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta3ctZ3JpZC9ndy1rdy1ncmlkLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rdy16b2VrdWl0Z2VicmVpZC9ndy1rdy16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rdy16b2VrdWl0Z2VicmVpZC9ndy1rdy16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWt3LXpvZWt1aXRnZWJyZWlkL2d3LWt3LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5jc3M/NDNkYyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2NyaXB0cy9zZ3NDbGFzc2VzLnNjcmlwdHMudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rdy16b2VrdWl0Z2VicmVpZC9ndy1rdy16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctdHYtZ3JpZC9ndy10di1ncmlkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LXR2LWdyaWQvZ3ctdHYtZ3JpZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvaW1hZ2VzL1BsdXMuZ2lmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9pbWFnZXMvR2IyLmdpZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LXR2LWdyaWQvZ3ctdHYtZ3JpZC5jb21wb25lbnQuY3NzPzdmNmIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy10di1ncmlkL2d3LXR2LWdyaWQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LXR2LXpvZWt1aXRnZWJyZWlkL2d3LXR2LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LXR2LXpvZWt1aXRnZWJyZWlkL2d3LXR2LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctdHYtem9la3VpdGdlYnJlaWQvZ3ctdHYtem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzcz82MTVmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctdHYtem9la3VpdGdlYnJlaWQvZ3ctdHYtem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWdyaWQucm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlEO0FBQ007QUFDcEI7QUFDc0I7QUFDMkI7QUFDSDtBQVF6RjtJQUFxQyxtQ0FBYztJQXNCL0MseUJBQTZCLE9BQXNCLEVBQVUsTUFBYyxFQUFtQixNQUFzQixFQUFtQixJQUEyQjtRQUFsSyxZQUNJLGtCQUFNLE9BQU8sQ0FBQyxTQU1qQjtRQVA0QixhQUFPLEdBQVAsT0FBTyxDQUFlO1FBQVUsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUFtQixZQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUFtQixVQUFJLEdBQUosSUFBSSxDQUF1QjtRQXJCbEssVUFBSSxHQUFjLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1RSxxQkFBZSxHQUFZLElBQUksQ0FBQztRQUVoQyxpQkFBVyxHQUFjLDZHQUFTLENBQUMsZUFBZSxDQUFDO1FBQ25ELGlCQUFXLEdBQWMsNkdBQVMsQ0FBQyx1QkFBdUIsQ0FBQztRQUczRCxjQUFRLEdBQW1CLElBQUksQ0FBQztRQUNoQyxjQUFRLEdBQWMsbUZBQVMsQ0FBQyxLQUFLLENBQUM7UUFDdEMsaUJBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0IsYUFBTyxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBRXJCLGdCQUFVLEdBQUcsS0FBSyxDQUFDO1FBWWYsd0VBQXdFO1FBQ3hFLEtBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLEdBQUc7WUFDOUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDLENBQUM7O0lBQ04sQ0FBQztJQWRELHNCQUFJLHVDQUFVO2FBQWQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO2FBQ0QsVUFBZSxLQUFjO1lBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxHQUFHLEtBQUssS0FBSyxPQUFPLENBQUM7UUFDN0MsQ0FBQzs7O09BSEE7SUFjRCxrQ0FBUSxHQUFSO1FBQUEsaUJBNkJDO1FBNUJHLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztRQUFDLENBQUM7UUFBQSxDQUFDO1FBRTlFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFO2FBQzFCLElBQUksQ0FBQyxVQUFDLElBQWU7WUFDbEIsS0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksS0FBSyxtRkFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNDLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBRXJCLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxRQUFRLElBQUksS0FBSSxDQUFDLFFBQVEsSUFBSSxtRkFBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQzFELEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQzVCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVQLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxLQUFLLEdBQUc7b0JBQ0osSUFBSSxDQUFDLFdBQVcsR0FBRyw2R0FBUyxDQUFDLGVBQWUsQ0FBQztvQkFDN0MsS0FBSyxDQUFDO1lBQ2QsQ0FBQztRQUNMLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ3hELENBQUM7UUFDRCxJQUFJLENBQ0osQ0FBQztZQUNHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLENBQUM7SUFDTCxDQUFDO0lBRUQsc0NBQVksR0FBWixVQUFhLFFBQWdCO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUM1QixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0MsQ0FBQztRQUNELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDeEQsQ0FBQztJQUNELHNDQUFZLEdBQVosVUFBYSxRQUFnQjtRQUN6QixJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFDRCx3Q0FBYyxHQUFkLFVBQWUsUUFBaUI7UUFDNUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDM0MsQ0FBQztJQUNELHdDQUFjLEdBQWQsVUFBZSxRQUFpQjtRQUM1QixNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO0lBQ3pELENBQUM7SUFDRCwrQ0FBcUIsR0FBckI7UUFDSSxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDckIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUM7Z0JBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUM3QyxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBaEZEO1FBREMsNERBQUssQ0FBQyxZQUFZLENBQUM7OztxREFHbkI7SUFqQlEsZUFBZTtRQU4zQixnRUFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLG1CQUFPLENBQUMsR0FBMEIsQ0FBQztZQUM3QyxNQUFNLEVBQUUsQ0FBQyxtQkFBTyxDQUFDLEdBQXlCLENBQUMsQ0FBQztTQUMvQyxDQUFDO3lDQXdCd0MseURBQWEsRUFBa0IsdURBQU0sRUFBMkIsK0RBQWMsRUFBeUIsK0ZBQXFCO09BdEJ6SixlQUFlLENBZ0czQjtJQUFELHNCQUFDO0NBQUEsQ0FoR29DLGdGQUFjLEdBZ0dsRDtBQWhHMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNicUM7QUFDbEI7QUFDbUI7QUFDbkI7QUFDVTtBQWlFekQsYUFBYTtBQUNvRTtBQUNXO0FBQzhCO0FBSTlCO0FBQzhCO0FBQzlCO0FBQzhCO0FBRXhCO0FBQ1k7QUFDa0I7QUFDdkM7QUFDOEI7QUFDOUI7QUFDOEI7QUFNMUQ7QUFDVDtBQUc2QjtBQUM1QjtBQUNIO0FBQ2xELG9GQUFZLENBQUMsdUJBQXVCLEVBQUUseUVBQVUsQ0FBQyxDQUFDO0FBRUM7QUFFYztBQVlEO0FBRVU7QUFLSTtBQUNIO0FBQ2I7QUFDUTtBQUNOO0FBQ0Y7QUFDQTtBQUNJO0FBQ2M7QUFDcEI7QUFDUTtBQUNKO0FBQ087QUFDUztBQUNqQjtBQXVFL0Q7SUFBQTtJQUNBLENBQUM7SUFEWSxZQUFZO1FBaEV4QiwrREFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLDZEQUFZO2dCQUNaLGtFQUFnQjtnQkFDaEIsMkRBQVc7Z0JBQ1gsbUVBQW1CO2dCQUNuQiw0RUFBa0I7Z0JBQ2xCLG1FQUFVO2dCQUNWLGdGQUF1QjtnQkFDdkIsNkRBQWEsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3ZCLGtFQUFrQixDQUFDLE9BQU8sRUFBRTtnQkFDNUIsNkRBQWEsQ0FBQyxPQUFPLEVBQUU7Z0JBRXZCLHFGQUFtQjtnQkFDM0IsMEJBQTBCO2FBQ3JCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLDZEQUFZO2FBQ2Y7WUFDRCxZQUFZLEVBQUU7Z0JBRVYsYUFBYTtnQkFFYixpR0FBZTtnQkFDZiw0R0FBa0I7Z0JBQ2xCLDBJQUE0QjtnQkFDNUIsNEdBQWtCO2dCQUNsQiwwSUFBNEI7Z0JBQzVCLDZHQUFrQjtnQkFDbEIsMklBQTRCO2dCQUM1QixtSEFBb0I7Z0JBQ3BCLCtIQUF3QjtnQkFDeEIsaUpBQThCO2dCQUM5QiwwR0FBaUI7Z0JBQ2pCLHdJQUEyQjtnQkFDM0IsMEdBQWlCO2dCQUNqQix3SUFBMkI7YUFHOUI7WUFHRCxTQUFTLEVBQUU7Z0JBQ1AsRUFBRSxPQUFPLEVBQUUsdUVBQWlCLEVBQUUsUUFBUSxFQUFFLG1HQUFzQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7Z0JBQzdFLGdHQUFxQjtnQkFDckIsbUZBQWM7Z0JBQ2QsMkZBQWtCO2dCQUNsQixxRkFBZTtnQkFDZixtRkFBYztnQkFDZCxtRkFBYztnQkFDZCx1RkFBZ0I7Z0JBQ2hCLHFHQUF1QjtnQkFDdkIsaUZBQWE7Z0JBQ2IseUZBQWlCO2dCQUNqQixxRkFBZTtnQkFDZixxRkFBZTtnQkFDZiw0RkFBbUI7Z0JBQ25CLHFHQUF1QjtnQkFDdkIsK0ZBQW9CO2FBRXZCO1lBQ0QsT0FBTyxFQUFFLENBQUMscUVBQXNCLENBQUM7U0FFcEMsQ0FBQztPQUNXLFlBQVksQ0FDeEI7SUFBRCxtQkFBQztDQUFBO0FBRHdCOzs7Ozs7OztBQ2hOekIsMktBQTJLLGdGQUFnRix5TEFBeUwsc0xBQXNMLDhQQUE4UCwrUEFBK1AsK1BBQStQLDJRQUEyUSw4UUFBOFEsbVFBQW1RLCtQQUErUCxnUUFBZ1EsMC9EOzs7Ozs7OztBQ0Nqb0Y7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0EsNkJBQThCLDJCQUEyQixLQUFLLGFBQWEsa0NBQWtDLHNDQUFzQyw2Q0FBNkMsMEJBQTBCLDBCQUEwQixLQUFLLGNBQWMsa0NBQWtDLHNDQUFzQyw2Q0FBNkMsMEJBQTBCLDBCQUEwQixLQUFLLG9CQUFvQixrQ0FBa0Msc0NBQXNDLDZDQUE2QyxxQkFBcUIsMEJBQTBCLEtBQUsscUJBQXFCLGtDQUFrQyxzQ0FBc0MsNkNBQTZDLHFCQUFxQiwwQkFBMEIsS0FBSzs7QUFFaHpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQb0U7QUFDTDtBQUNwQjtBQUNjO0FBQ0Q7QUFDUztBQUdiO0FBQ1M7QUFDNEI7QUFDOUM7QUFTM0M7SUFBd0Msc0NBQWM7SUEyQ2xELDRCQUE2QixPQUFzQixFQUM5QixFQUFlLEVBQ2YsT0FBdUIsRUFDdkIsTUFBYyxFQUNkLEtBQXFCLEVBQ3JCLElBQTJCO1FBTGhELFlBTUksa0JBQU0sT0FBTyxDQUFDLFNBQ2pCO1FBUDRCLGFBQU8sR0FBUCxPQUFPLENBQWU7UUFDOUIsUUFBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLGFBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLFlBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixVQUFJLEdBQUosSUFBSSxDQUF1QjtRQS9DaEQsZUFBUyxHQUFHLHFFQUFTLENBQUM7UUFHdEIsd0JBQWtCLEdBQWlCLElBQUksQ0FBQztRQUN4QyxnQkFBVSxHQUFrQixJQUFJLENBQUM7UUFDakMsVUFBSSxHQUFrQixJQUFJLENBQUM7UUFDM0IsVUFBSSxHQUFVLEVBQUUsQ0FBQztRQUdSLFdBQUssR0FBRyxFQUFFLENBQUM7UUFDcEIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixzQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFFbEMsd0JBQWtCLEdBQUcsSUFBSSxDQUFDO1FBUzFCLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFTakIsZUFBUyxHQUFHLEtBQUssQ0FBQzs7SUFrQmxCLENBQUM7SUFsQ0Qsc0JBQUksK0NBQWU7YUFBbkI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQ25DLENBQUM7YUFDRCxVQUFvQixLQUFjO1lBQzlCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLEdBQUcsS0FBSyxLQUFLLE9BQU8sQ0FBQztRQUNyRCxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLDhDQUFjO2FBQWxCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzthQUNELFVBQW1CLEtBQWM7WUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLEdBQUcsS0FBSyxLQUFLLE9BQU8sQ0FBQztRQUM1QyxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLDJDQUFXO2FBQWY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDO2FBQ0QsVUFBZ0IsS0FBYztZQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsR0FBRyxLQUFLLEtBQUssT0FBTyxDQUFDO1FBQzVDLENBQUM7OztPQUhBO0lBZ0JELHFDQUFRLEdBQVI7UUFBQSxpQkF5QkM7UUF2QkcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN6QixHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNULFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNmLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNWLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNWLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNULGFBQWEsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNuQixXQUFXLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDakIsZUFBZSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ3JCLFlBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNsQixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDWixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDVixVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDbkIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFNBQVMsRUFBRTthQUNyRSxJQUFJLENBQUMsVUFBQyxHQUFpQjtZQUNwQixFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxLQUFJLENBQUMsa0JBQWtCLEdBQU8sR0FBRyxRQUFDLENBQUM7WUFDdkMsQ0FBQztZQUNELEtBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDckUsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELDBDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDaEQsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdEMsS0FBSyxJQUFJLENBQUUsWUFBWTtnQkFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7Z0JBQ2YsS0FBSyxDQUFDO1lBQ1YsS0FBSyxHQUFHLENBQUUsb0JBQW9CO2dCQUMxQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztnQkFDNUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN0QixLQUFLLENBQUM7WUFDVixRQUFTLFNBQVM7Z0JBQ2QsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEIsS0FBSyxDQUFDO1FBQ2QsQ0FBQztJQUNMLENBQUM7SUFFRCwyQ0FBYyxHQUFkO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRTthQUNyRCxJQUFJLENBQUMsVUFBQyxHQUFrQjtZQUNyQixLQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUNoQixLQUFJLENBQUMsSUFBSSxHQUFPLEdBQUcsUUFBQyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCw2Q0FBZ0IsR0FBaEIsVUFBaUIsVUFBNEI7UUFBN0MsaUJBT0M7UUFORyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLEVBQUU7YUFDMUMsSUFBSSxDQUFDLFVBQUMsR0FBa0I7WUFDckIsS0FBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7WUFDaEIsS0FBSSxDQUFDLElBQUksR0FBTyxHQUFHLFFBQUMsQ0FBQztZQUNyQixLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsNENBQWUsR0FBZjtRQUNJLG1DQUFtQztRQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztZQUNwQixTQUFTLEVBQUUsRUFBRTtZQUNiLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLEVBQUU7WUFDUixHQUFHLEVBQUUsRUFBRTtZQUNQLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFdBQVcsRUFBRSxFQUFFO1lBQ2YsZUFBZSxFQUFFLEVBQUU7WUFDbkIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsTUFBTSxFQUFFLEVBQUU7WUFDVixJQUFJLEVBQUUsRUFBRTtZQUNSLFVBQVUsRUFBRSxFQUFFO1NBQ2pCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxtQ0FBTSxHQUFOO1FBQUEsaUJBd0NDO1FBdkNHLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDeEQsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM5QyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzlDLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDNUMsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUNoRSxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1FBQzVELElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUM7UUFDcEUsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUM5RCxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2xELElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDOUMsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUMxRCxJQUFNLEVBQUUsR0FBRyxJQUFJLHlEQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFakMsa0JBQWtCO1FBQ2xCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBUTtZQUNuQyxJQUFJLHFCQUFxQixHQUFrQixJQUFJLENBQUM7WUFDaEQsRUFBRSxDQUFDLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQUMscUJBQXFCLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQUMsQ0FBQztZQUNsRyxJQUFJLG1CQUFtQixHQUFrQixJQUFJLENBQUM7WUFDOUMsRUFBRSxDQUFDLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQUMsQ0FBQztZQUM1RixJQUFJLGtCQUFrQixHQUFrQixJQUFJLENBQUM7WUFDN0MsRUFBRSxDQUFDLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQUMsQ0FBQztZQUV6RixNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO21CQUM5RyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7bUJBQzdGLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsSUFBSSxHQUFHLENBQUMsc0JBQXNCLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7bUJBQ2pJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzttQkFDL0YsQ0FBQyxDQUFDLGFBQWEsSUFBSSxDQUFDLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLElBQUkscUJBQXFCLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7bUJBQzNILENBQUMsQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO21CQUNuSCxDQUFDLENBQUMsZUFBZSxJQUFJLENBQUMsQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7bUJBQ3pJLENBQUMsQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksR0FBRyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzttQkFDN0gsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO21CQUNyRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7bUJBQ3hHLENBQUMsQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFILENBQUMsQ0FBQyxDQUFDO1FBRUgsa0JBQWtCO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGdFQUFnRTtRQUNoRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELHVDQUFVLEdBQVYsVUFBVyxLQUFVO1FBQ2pCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUMzQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHdDQUFXLEdBQVgsVUFBWSxHQUFRO1FBQ2hCLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVELHNDQUFTLEdBQVQsVUFBVSxLQUFhO1FBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsNEJBQTRCLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFFLDhEQUE4RDtJQUMxSyxDQUFDO0lBRUQsc0NBQVMsR0FBVCxVQUFVLEtBQWE7UUFDbkIsRUFBRTtJQUNOLENBQUM7SUFFRCxpREFBb0IsR0FBcEI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDbkQsQ0FBQztJQTFMOEI7UUFBOUIsZ0VBQVMsQ0FBQywyRUFBa0IsQ0FBQztrQ0FBUSwyRUFBa0I7cURBQUM7SUFFaEQ7UUFBUiw0REFBSyxFQUFFOztxREFBWTtJQU1wQjtRQURDLDREQUFLLENBQUMsaUJBQWlCLENBQUM7Ozs2REFHeEI7SUFPRDtRQURDLDREQUFLLENBQUMsZ0JBQWdCLENBQUM7Ozs0REFHdkI7SUFPRDtRQURDLDREQUFLLENBQUMsYUFBYSxDQUFDOzs7eURBR3BCO0lBcENRLGtCQUFrQjtRQU45QixnRUFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLG1CQUFPLENBQUMsR0FBOEIsQ0FBQztZQUNqRCxNQUFNLEVBQUUsQ0FBQyxtQkFBTyxDQUFDLEdBQTZCLENBQUMsQ0FBQztTQUNuRCxDQUFDO3lDQTZDd0MseURBQWE7WUFDMUIsMkRBQVc7WUFDTixrRkFBYztZQUNmLHVEQUFNO1lBQ1AsK0RBQWM7WUFDZiwrRkFBcUI7T0FoRHZDLGtCQUFrQixDQW1NOUI7SUFBRCx5QkFBQztDQUFBLENBbk11QyxnRkFBYyxHQW1NckQ7QUFuTThCOzs7Ozs7OztBQ3BCL0IsbVJBQW1SLGtFQUFrRSwrNUJBQSs1QixPQUFPLDZuQkFBNm5CLHFGQUFxRixpREFBaUQsOEJBQThCLHVjQUF1Yyx3QkFBd0IsdXpCQUF1ekIsbUNBQW1DLDJCQUEyQixrQkFBa0IsK3NCQUErc0IsT0FBTyxndUJBQWd1QixPQUFPLG10QkFBbXRCLE9BQU8scXVCQUFxdUIsNkJBQTZCLDJ0QkFBMnRCLDZCQUE2QiwreENBQSt4QyxvQkFBb0IsZzFEQUFnMUQsNkJBQTZCLG8wQzs7Ozs7Ozs7QUNDbnJVOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1A4RztBQUNyRDtBQUNkO0FBRVM7QUFDVztBQUVOO0FBQ1E7QUFDUTtBQUNKO0FBQ047QUFDUDtBQUNHO0FBQ1M7QUFVcEU7SUFBa0QsZ0RBQWM7SUFZNUQsc0NBQTZCLE9BQXNCLEVBQzlCLE1BQWMsRUFDZCxFQUFlLEVBQ2YsY0FBK0IsRUFDL0IsT0FBdUIsRUFDdkIsV0FBK0IsRUFDL0IsU0FBMkIsRUFDM0IsTUFBcUIsRUFDRCxRQUFnQixFQUNwQyxLQUFxQixFQUNyQixVQUF3QjtRQVY3QyxZQVdJLGtCQUFNLE9BQU8sQ0FBQyxTQUNqQjtRQVo0QixhQUFPLEdBQVAsT0FBTyxDQUFlO1FBQzlCLFlBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxRQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2Ysb0JBQWMsR0FBZCxjQUFjLENBQWlCO1FBQy9CLGFBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGlCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUMvQixlQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixZQUFNLEdBQU4sTUFBTSxDQUFlO1FBQ0QsY0FBUSxHQUFSLFFBQVEsQ0FBUTtRQUNwQyxXQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixnQkFBVSxHQUFWLFVBQVUsQ0FBYztRQXJCN0MsZUFBUyxHQUFHLHFFQUFTLENBQUM7UUFHdEIsb0JBQWMsR0FBNkIsSUFBSSxDQUFDO1FBQ2hELCtCQUF5QixHQUErQixJQUFJLENBQUM7UUFDN0QsOEJBQXdCLEdBQTJCLElBQUksQ0FBQztRQUN4RCxxQkFBZSxHQUEwQixJQUFJLENBQUM7UUFFOUMsZ0JBQVUsR0FBcUIsSUFBSSxDQUFDO1FBQzFCLGVBQVMsR0FBbUMsSUFBSSwyREFBWSxFQUFvQixDQUFDOztJQWMzRixDQUFDO0lBRUQsK0NBQVEsR0FBUjtRQUNJLDRFQUE0RTtRQUM1RSxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBRWpELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDeEIsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ1YsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ1YsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2Ysa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDMUIsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2hCLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ3pCLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQztZQUNwQixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDWixRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDZCxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDZCxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDZCxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDZCxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDcEIsYUFBYSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ25CLGVBQWUsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNyQixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDWixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDZixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELG9EQUFhLEdBQWI7UUFBQSxpQkE0QkM7UUEzQkcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRTthQUM3QixTQUFTLENBQUMsVUFBQyxHQUE2QjtZQUNyQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxLQUFJLENBQUMsY0FBYyxHQUFPLEdBQUcsUUFBQyxDQUFDO1lBQ25DLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVQLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUU7YUFDL0IsU0FBUyxDQUFDLFVBQUMsR0FBK0I7WUFDdkMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDbEMsS0FBSSxDQUFDLHlCQUF5QixHQUFPLEdBQUcsUUFBQyxDQUFDO1lBQzlDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVQLElBQUksQ0FBQyxPQUFPLENBQUMsMkJBQTJCLEVBQUU7YUFDckMsU0FBUyxDQUFDLFVBQUMsR0FBMkI7WUFDbkMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDbEMsS0FBSSxDQUFDLHdCQUF3QixHQUFPLEdBQUcsUUFBQyxDQUFDO1lBQzdDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVQLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDO2FBQ2xDLFNBQVMsQ0FBQyxVQUFDLEdBQTBCO1lBQ2xDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLEtBQUksQ0FBQyxlQUFlLEdBQU8sR0FBRyxRQUFDLENBQUM7WUFDcEMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELGtEQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksc0ZBQWdCLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUM3RCxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQztRQUNuRixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQy9ELElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDdkUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMzRCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQy9ELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDL0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUMvRCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQy9ELElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDdkUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUN6RSxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDO1FBQzdFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDM0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUUzRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQTlGUztRQUFULDZEQUFNLEVBQUU7a0NBQVksMkRBQVk7bUVBQTBEO0lBVmxGLDRCQUE0QjtRQU54QyxnRUFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxRQUFRLEVBQUUsbUJBQU8sQ0FBQyxHQUF3QyxDQUFDO1lBQzNELE1BQU0sRUFBRSxDQUFDLG1CQUFPLENBQUMsR0FBdUMsQ0FBQyxDQUFDO1lBQzFELGFBQWEsRUFBRSxnRUFBaUIsQ0FBQyxJQUFJO1NBQ3hDLENBQUM7UUFxQk8sd0VBQU0sQ0FBQyxVQUFVLENBQUM7eUNBUmUseURBQWE7WUFDdEIsdURBQU07WUFDViw0REFBVztZQUNDLGtGQUFlO1lBQ3RCLGtGQUFjO1lBQ1YsMEZBQWtCO1lBQ3BCLHNGQUFnQjtZQUNuQixnRkFBYSxVQUVkLCtEQUFjO1lBQ1QsdUVBQVk7T0F0QnBDLDRCQUE0QixDQXlHeEM7SUFBRCxtQ0FBQztDQUFBLENBekdpRCxnRkFBYyxHQXlHL0Q7QUF6R3dDOzs7Ozs7OztBQ3hCekMsNHNMQUE0c0wsODlCQUE4OUIseUJBQXlCLHlWQUF5Vix5QkFBeUIsZ01BQWdNLGdCQUFnQiw0RDs7Ozs7Ozs7QUNDcndPOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUG9FO0FBQ0w7QUFDcEI7QUFDYztBQUNEO0FBQ087QUFDRTtBQUdiO0FBQ1M7QUFDaUI7QUFDbkM7QUFTM0M7SUFBd0Msc0NBQWM7SUEwQ2xELDRCQUE2QixPQUFzQixFQUM5QixFQUFlLEVBQ2YsT0FBdUIsRUFDdkIsTUFBcUIsRUFDckIsTUFBYyxFQUNkLEtBQXFCLEVBQ3JCLElBQTJCO1FBTmhELFlBT0ksa0JBQU0sT0FBTyxDQUFDLFNBQ2pCO1FBUjRCLGFBQU8sR0FBUCxPQUFPLENBQWU7UUFDOUIsUUFBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLGFBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLFlBQU0sR0FBTixNQUFNLENBQWU7UUFDckIsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFVBQUksR0FBSixJQUFJLENBQXVCO1FBL0NoRCxlQUFTLEdBQUcscUVBQVMsQ0FBQztRQUV0Qix3QkFBa0IsR0FBNEIsSUFBSSxDQUFDO1FBQ25ELGdCQUFVLEdBQW9CLElBQUksQ0FBQztRQUNuQyxVQUFJLEdBQW9CLElBQUksQ0FBQztRQUM3QixVQUFJLEdBQVUsRUFBRSxDQUFDO1FBR1IsV0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNwQixjQUFRLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDdEIsc0JBQWdCLEdBQVksS0FBSyxDQUFDO1FBRWxDLHdCQUFrQixHQUFHLElBQUksQ0FBQztRQVMxQixlQUFTLEdBQUcsSUFBSSxDQUFDO1FBU2pCLGVBQVMsR0FBRyxLQUFLLENBQUM7O0lBbUJsQixDQUFDO0lBbkNELHNCQUFJLCtDQUFlO2FBQW5CO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUNuQyxDQUFDO2FBQ0QsVUFBb0IsS0FBYztZQUM5QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxHQUFHLEtBQUssS0FBSyxPQUFPLENBQUM7UUFDckQsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSw4Q0FBYzthQUFsQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFDRCxVQUFtQixLQUFjO1lBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxHQUFHLEtBQUssS0FBSyxPQUFPLENBQUM7UUFDNUMsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSwyQ0FBVzthQUFmO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzthQUNELFVBQWdCLEtBQWM7WUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLEdBQUcsS0FBSyxLQUFLLE9BQU8sQ0FBQztRQUM1QyxDQUFDOzs7T0FIQTtJQWlCRCxxQ0FBUSxHQUFSO1FBRUksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN6QixHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNULEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNYLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNYLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNULElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNWLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNaLGVBQWUsRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUN4QixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsbURBQXNCLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLGtCQUFrQixHQUFHO1lBQ3RCLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFFO1lBQ3BDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFO1lBQ3ZDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxjQUFjLEVBQUUsbUJBQW1CLEVBQUU7U0FDbkQsQ0FBQztRQUVGLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCwwQ0FBYSxHQUFiO1FBQ0ksTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdEMsS0FBSyxJQUFJLENBQUUsWUFBWTtnQkFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7Z0JBQ2YsS0FBSyxDQUFDO1lBQ1YsZ0NBQWdDO1lBQ2hDLHdCQUF3QjtZQUN4QixrQ0FBa0M7WUFDbEMsNEJBQTRCO1lBQzVCLFlBQVk7WUFDWixRQUFTLFNBQVM7Z0JBQ2QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUNoRCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztnQkFDN0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN0QixLQUFLLENBQUM7UUFDZCxDQUFDO0lBQ0wsQ0FBQztJQUVELDJDQUFjLEdBQWQ7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUU7YUFDbkQsSUFBSSxDQUFDLFVBQUMsR0FBb0I7WUFDdkIsS0FBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7WUFDaEIsS0FBSSxDQUFDLElBQUksR0FBTyxHQUFHLFFBQUMsQ0FBQztZQUNyQixLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsNkNBQWdCLEdBQWhCLFVBQWlCLFVBQTRCO1FBQTdDLGlCQU9DO1FBTkcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxFQUFFO2FBQzFDLElBQUksQ0FBQyxVQUFDLEdBQW9CO1lBQ3ZCLEtBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQ2hCLEtBQUksQ0FBQyxJQUFJLEdBQU8sR0FBRyxRQUFDLENBQUM7WUFDckIsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELDRDQUFlLEdBQWY7UUFDSSxtQ0FBbUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7WUFDcEIsa0JBQWtCLEVBQUUsRUFBRTtZQUN0QixJQUFJLEVBQUUsRUFBRTtZQUNSLHlCQUF5QixFQUFFLEVBQUU7WUFDN0IsZUFBZSxFQUFFLEVBQUU7WUFDbkIsV0FBVyxFQUFFLEVBQUU7WUFDZixlQUFlLEVBQUUsRUFBRTtZQUNuQixZQUFZLEVBQUUsRUFBRTtTQUNuQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsbUNBQU0sR0FBTjtRQUFBLGlCQTBCQztRQXpCRyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ2hELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDOUQsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMxRCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzVELElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEUsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQztRQUNwRSxJQUFNLEVBQUUsR0FBRyxJQUFJLDBEQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFakMsa0JBQWtCO1FBQ2xCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBa0I7WUFDN0MsSUFBSSx1QkFBdUIsR0FBa0IsSUFBSSxDQUFDO1lBQ2xELEVBQUUsQ0FBQyxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUFDLHVCQUF1QixHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUFDLENBQUM7WUFFeEcsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsdUJBQXVCLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7bUJBQzdJLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzttQkFDL0csQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO21CQUN6SCxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7bUJBQ25ILENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzttQkFDbkgsQ0FBQyxDQUFDLGVBQWUsSUFBSSxDQUFDLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLHVCQUF1QixDQUFDLElBQUksdUJBQXVCLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUksQ0FBQyxDQUFDLENBQUM7UUFFSCxrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsZ0VBQWdFO1FBQ2hFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsd0NBQVcsR0FBWCxVQUFZLEdBQVE7UUFDaEIsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsdUNBQVUsR0FBVixVQUFXLEtBQVU7UUFDakIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7UUFDekQsQ0FBQztJQUNMLENBQUM7SUFFRCxzQ0FBUyxHQUFULFVBQVUsS0FBYTtRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxzQ0FBUyxHQUFULFVBQVUsS0FBYTtJQUN2QixDQUFDO0lBRUQsaURBQW9CLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQ25ELENBQUM7SUF6SzhCO1FBQTlCLGdFQUFTLENBQUMsMkVBQWtCLENBQUM7a0NBQVEsMkVBQWtCO3FEQUFDO0lBRWhEO1FBQVIsNERBQUssRUFBRTs7cURBQVk7SUFNcEI7UUFEQyw0REFBSyxDQUFDLGlCQUFpQixDQUFDOzs7NkRBR3hCO0lBT0Q7UUFEQyw0REFBSyxDQUFDLGdCQUFnQixDQUFDOzs7NERBR3ZCO0lBT0Q7UUFEQyw0REFBSyxDQUFDLGFBQWEsQ0FBQzs7O3lEQUdwQjtJQW5DUSxrQkFBa0I7UUFOOUIsZ0VBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSxtQkFBTyxDQUFDLEdBQThCLENBQUM7WUFDakQsTUFBTSxFQUFFLENBQUMsbUJBQU8sQ0FBQyxHQUE2QixDQUFDLENBQUM7U0FDbkQsQ0FBQzt5Q0E0Q3dDLHlEQUFhO1lBQzFCLDJEQUFXO1lBQ04sa0ZBQWM7WUFDZixnRkFBYTtZQUNiLHVEQUFNO1lBQ1AsK0RBQWM7WUFDZiwrRkFBcUI7T0FoRHZDLGtCQUFrQixDQWlMOUI7SUFBRCx5QkFBQztDQUFBLENBakx1QyxnRkFBYyxHQWlMckQ7QUFqTDhCOzs7Ozs7OztBQ3JCL0IsbVJBQW1SLGtFQUFrRSw0NUJBQTQ1QixPQUFPLDZuQkFBNm5CLHFGQUFxRixpREFBaUQsNENBQTRDLGkvQ0FBOGdELGdDQUFnQyxpckJBQWlyQixPQUFPLCtwQkFBK3BCLE9BQU8sMHBCQUEwcEIsT0FBTyx5cEJBQXlwQixPQUFPLDZxQkFBNnFCLDZCQUE2Qix3MEM7Ozs7Ozs7QUNBOTdOLGlDQUFpQyx3NUI7Ozs7Ozs7O0FDQ2pDOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBLHFDQUFzQywyQkFBMkIsdUJBQXVCLEtBQUssbUJBQW1CLDJCQUEyQixlQUFlLGdCQUFnQixxQkFBcUIsdUJBQXVCLEtBQUs7O0FBRTNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1A4RztBQUNyRDtBQUNkO0FBRVM7QUFDVztBQUVOO0FBQ1k7QUFDYjtBQUNHO0FBQ1M7QUFRcEU7SUFBa0QsZ0RBQWM7SUFTNUQsc0NBQTZCLE9BQXNCLEVBQ3RCLE1BQWMsRUFDZCxFQUFlLEVBQ2YsY0FBK0IsRUFDL0IsU0FBMkIsRUFDUCxRQUFnQixFQUNwQyxLQUFxQixFQUNyQixVQUF3QjtRQVByRCxZQVFJLGtCQUFNLE9BQU8sQ0FBQyxTQUNqQjtRQVQ0QixhQUFPLEdBQVAsT0FBTyxDQUFlO1FBQ3RCLFlBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxRQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2Ysb0JBQWMsR0FBZCxjQUFjLENBQWlCO1FBQy9CLGVBQVMsR0FBVCxTQUFTLENBQWtCO1FBQ1AsY0FBUSxHQUFSLFFBQVEsQ0FBUTtRQUNwQyxXQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixnQkFBVSxHQUFWLFVBQVUsQ0FBYztRQWZyRCxlQUFTLEdBQUcscUVBQVMsQ0FBQztRQUl0QixnQkFBVSxHQUFxQixJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFtQyxJQUFJLDJEQUFZLEVBQW9CLENBQUM7O0lBVzNGLENBQUM7SUFFRCwrQ0FBUSxHQUFSO1FBQUEsaUJBbUJDO1FBbEJHLDRFQUE0RTtRQUM1RSxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBRWpELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDeEIsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ1gsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ1osTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ1osTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ1osUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ2QsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO1NBQ2hCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFO2FBQy9CLElBQUksQ0FBQyxVQUFDLEdBQVU7WUFDYixFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxLQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQztZQUMvQixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsa0RBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxxRkFBZ0IsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDekQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMzRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzNELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDM0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUMvRCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBRXpELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBNUNTO1FBQVQsNkRBQU0sRUFBRTtrQ0FBWSwyREFBWTttRUFBMEQ7SUFQbEYsNEJBQTRCO1FBTnhDLGdFQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLFFBQVEsRUFBRSxtQkFBTyxDQUFDLEdBQXdDLENBQUM7WUFDM0QsTUFBTSxFQUFFLENBQUMsbUJBQU8sQ0FBQyxHQUF1QyxDQUFDLENBQUM7WUFDMUQsYUFBYSxFQUFFLGdFQUFpQixDQUFDLElBQUk7U0FDeEMsQ0FBQztRQWVlLHdFQUFNLENBQUMsVUFBVSxDQUFDO3lDQUxPLHlEQUFhO1lBQ2QsdURBQU07WUFDViwyREFBVztZQUNDLGlGQUFlO1lBQ3BCLHNGQUFnQixVQUVwQiwrREFBYztZQUNULHVFQUFZO09BaEI1Qyw0QkFBNEIsQ0FvRHhDO0lBQUQsbUNBQUM7Q0FBQSxDQXBEaUQsZ0ZBQWMsR0FvRC9EO0FBcER3Qzs7Ozs7Ozs7QUNuQnpDLDZ5QkFBNnlCLHlCQUF5Qix1WUFBdVkseUJBQXlCLHNrQ0FBc2tDLGVBQWUsbVBBQW1QLGdCQUFnQiw0RDs7Ozs7Ozs7QUNDOWpGOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BvRTtBQUNMO0FBQ3BCO0FBQ2M7QUFDRDtBQUNTO0FBSWI7QUFDUztBQUNsQjtBQVEzQztJQUF3QyxzQ0FBYztJQTJDbEQsNEJBQTZCLE9BQXNCLEVBQzlCLEVBQWUsRUFDZixPQUF1QixFQUN2QixNQUFjLEVBQ2QsS0FBcUI7UUFKMUMsWUFLSSxrQkFBTSxPQUFPLENBQUMsU0FDakI7UUFONEIsYUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUM5QixRQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YsYUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQUssR0FBTCxLQUFLLENBQWdCO1FBOUMxQyxlQUFTLEdBQUcscUVBQVMsQ0FBQztRQUd0Qix3QkFBa0IsR0FBaUIsSUFBSSxDQUFDO1FBQ3hDLGdCQUFVLEdBQWtCLElBQUksQ0FBQztRQUNqQyxVQUFJLEdBQWtCLElBQUksQ0FBQztRQUMzQixVQUFJLEdBQVUsRUFBRSxDQUFDO1FBR1IsV0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNwQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLHNCQUFnQixHQUFZLEtBQUssQ0FBQztRQUVsQyx3QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFTMUIsZUFBUyxHQUFHLElBQUksQ0FBQztRQVNqQixlQUFTLEdBQUcsS0FBSyxDQUFDOztJQWlCbEIsQ0FBQztJQWpDRCxzQkFBSSwrQ0FBZTthQUFuQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDbkMsQ0FBQzthQUNELFVBQW9CLEtBQWM7WUFDOUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsR0FBRyxLQUFLLEtBQUssT0FBTyxDQUFDO1FBQ3JELENBQUM7OztPQUhBO0lBT0Qsc0JBQUksOENBQWM7YUFBbEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDO2FBQ0QsVUFBbUIsS0FBYztZQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsR0FBRyxLQUFLLEtBQUssT0FBTyxDQUFDO1FBQzVDLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksMkNBQVc7YUFBZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFDRCxVQUFnQixLQUFjO1lBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxHQUFHLEtBQUssS0FBSyxPQUFPLENBQUM7UUFDNUMsQ0FBQzs7O09BSEE7SUFlRCxxQ0FBUSxHQUFSO1FBQUEsaUJBeUJDO1FBdkJHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDekIsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDVCxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDZixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDVixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDVixHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDVCxhQUFhLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDbkIsV0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ2pCLGVBQWUsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNyQixZQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDbEIsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ1osSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ1YsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDO1NBQ25CLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxTQUFTLEVBQUU7YUFDckUsSUFBSSxDQUFDLFVBQUMsR0FBaUI7WUFDcEIsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDbEMsS0FBSSxDQUFDLGtCQUFrQixHQUFPLEdBQUcsUUFBQyxDQUFDO1lBQ3ZDLENBQUM7WUFDRCxLQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3JFLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCwwQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLEtBQUssSUFBSSxDQUFFLFlBQVk7Z0JBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUNmLEtBQUssQ0FBQztZQUNWLEtBQUssR0FBRyxDQUFFLG9CQUFvQjtnQkFDMUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEIsS0FBSyxDQUFDO1lBQ1YsUUFBUyxTQUFTO2dCQUNkLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO2dCQUM3QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3RCLEtBQUssQ0FBQztRQUNkLENBQUM7SUFDTCxDQUFDO0lBRUQsMkNBQWMsR0FBZDtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUU7YUFDckQsSUFBSSxDQUFDLFVBQUMsR0FBa0I7WUFDckIsS0FBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7WUFDaEIsS0FBSSxDQUFDLElBQUksR0FBTyxHQUFHLFFBQUMsQ0FBQztZQUNyQixLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsNkNBQWdCLEdBQWhCLFVBQWlCLFVBQTRCO1FBQTdDLGlCQU9DO1FBTkcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxFQUFFO2FBQzFDLElBQUksQ0FBQyxVQUFDLEdBQWtCO1lBQ3JCLEtBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQ2hCLEtBQUksQ0FBQyxJQUFJLEdBQU8sR0FBRyxRQUFDLENBQUM7WUFDckIsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELDRDQUFlLEdBQWY7UUFDSSxtQ0FBbUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7WUFDcEIsU0FBUyxFQUFFLEVBQUU7WUFDYixJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxFQUFFO1lBQ1IsR0FBRyxFQUFFLEVBQUU7WUFDUCxhQUFhLEVBQUUsRUFBRTtZQUNqQixXQUFXLEVBQUUsRUFBRTtZQUNmLGVBQWUsRUFBRSxFQUFFO1lBQ25CLFlBQVksRUFBRSxFQUFFO1lBQ2hCLE1BQU0sRUFBRSxFQUFFO1lBQ1YsSUFBSSxFQUFFLEVBQUU7WUFDUixVQUFVLEVBQUUsRUFBRTtTQUNqQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsbUNBQU0sR0FBTjtRQUFBLGlCQXdDQztRQXZDRyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBQ3hELElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDOUMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM5QyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQzVDLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDaEUsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztRQUM1RCxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDO1FBQ3BFLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDOUQsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNsRCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzlDLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDMUQsSUFBTSxFQUFFLEdBQUcsSUFBSSx5REFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWpDLGtCQUFrQjtRQUNsQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQVE7WUFDbkMsSUFBSSxxQkFBcUIsR0FBa0IsSUFBSSxDQUFDO1lBQ2hELEVBQUUsQ0FBQyxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUFDLHFCQUFxQixHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUFDLENBQUM7WUFDbEcsSUFBSSxtQkFBbUIsR0FBa0IsSUFBSSxDQUFDO1lBQzlDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUFDLENBQUM7WUFDNUYsSUFBSSxrQkFBa0IsR0FBa0IsSUFBSSxDQUFDO1lBQzdDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUFDLENBQUM7WUFFekYsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzttQkFDOUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO21CQUM3RixDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLElBQUksR0FBRyxDQUFDLHNCQUFzQixDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO21CQUNqSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7bUJBQy9GLENBQUMsQ0FBQyxhQUFhLElBQUksQ0FBQyxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO21CQUMzSCxDQUFDLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzttQkFDbkgsQ0FBQyxDQUFDLGVBQWUsSUFBSSxDQUFDLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxHQUFHLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO21CQUN6SSxDQUFDLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7bUJBQzdILENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzttQkFDckcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO21CQUN4RyxDQUFDLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxSCxDQUFDLENBQUMsQ0FBQztRQUVILGtCQUFrQjtRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixnRUFBZ0U7UUFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCx1Q0FBVSxHQUFWLFVBQVcsS0FBVTtRQUNqQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDM0MsQ0FBQztJQUNMLENBQUM7SUFFRCx3Q0FBVyxHQUFYLFVBQVksR0FBUTtRQUNoQixNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxzQ0FBUyxHQUFULFVBQVUsS0FBYTtRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxzQ0FBUyxHQUFULFVBQVUsS0FBYTtRQUNuQixFQUFFO0lBQ04sQ0FBQztJQUVELGlEQUFvQixHQUFwQjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUNuRCxDQUFDO0lBekw4QjtRQUE5QixnRUFBUyxDQUFDLDJFQUFrQixDQUFDO2tDQUFRLDJFQUFrQjtxREFBQztJQUVoRDtRQUFSLDREQUFLLEVBQUU7O3FEQUFZO0lBTXBCO1FBREMsNERBQUssQ0FBQyxpQkFBaUIsQ0FBQzs7OzZEQUd4QjtJQU9EO1FBREMsNERBQUssQ0FBQyxnQkFBZ0IsQ0FBQzs7OzREQUd2QjtJQU9EO1FBREMsNERBQUssQ0FBQyxhQUFhLENBQUM7Ozt5REFHcEI7SUFwQ1Esa0JBQWtCO1FBTjlCLGdFQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsbUJBQU8sQ0FBQyxHQUE4QixDQUFDO1lBQ2pELE1BQU0sRUFBRSxDQUFDLG1CQUFPLENBQUMsR0FBNkIsQ0FBQyxDQUFDO1NBQ25ELENBQUM7eUNBNkN3Qyx5REFBYTtZQUMxQiwyREFBVztZQUNOLGtGQUFjO1lBQ2YsdURBQU07WUFDUCwrREFBYztPQS9DakMsa0JBQWtCLENBa005QjtJQUFELHlCQUFDO0NBQUEsQ0FsTXVDLGdGQUFjLEdBa01yRDtBQWxNOEI7Ozs7Ozs7O0FDbkIvQixtUkFBbVIsa0VBQWtFLCs1QkFBKzVCLE9BQU8sNm5CQUE2bkIscUZBQXFGLGlEQUFpRCw4QkFBOEIsdWNBQXVjLHdCQUF3Qix1ekJBQXV6Qix1QkFBdUIsMkJBQTJCLGtCQUFrQiwrc0JBQStzQixPQUFPLGd1QkFBZ3VCLE9BQU8sbXRCQUFtdEIsT0FBTyxxdUJBQXF1Qiw2QkFBNkIsMnRCQUEydEIsNkJBQTZCLCt4Q0FBK3hDLG9CQUFvQixnMURBQWcxRCw2QkFBNkIsbzBDOzs7Ozs7OztBQ0N2cVU7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUDhHO0FBQ3JEO0FBQ2Q7QUFFUztBQUNXO0FBRU47QUFDUTtBQUNRO0FBQ0o7QUFDTjtBQUNQO0FBQ0c7QUFDUztBQVVwRTtJQUFrRCxnREFBYztJQVk1RCxzQ0FBNkIsT0FBc0IsRUFDOUIsTUFBYyxFQUNkLEVBQWUsRUFDZixjQUErQixFQUMvQixPQUF1QixFQUN2QixXQUErQixFQUMvQixTQUEyQixFQUMzQixNQUFxQixFQUNELFFBQWdCLEVBQ3BDLEtBQXFCLEVBQ3JCLFVBQXdCO1FBVjdDLFlBV0ksa0JBQU0sT0FBTyxDQUFDLFNBQ2pCO1FBWjRCLGFBQU8sR0FBUCxPQUFPLENBQWU7UUFDOUIsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFFBQUUsR0FBRixFQUFFLENBQWE7UUFDZixvQkFBYyxHQUFkLGNBQWMsQ0FBaUI7UUFDL0IsYUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsaUJBQVcsR0FBWCxXQUFXLENBQW9CO1FBQy9CLGVBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLFlBQU0sR0FBTixNQUFNLENBQWU7UUFDRCxjQUFRLEdBQVIsUUFBUSxDQUFRO1FBQ3BDLFdBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLGdCQUFVLEdBQVYsVUFBVSxDQUFjO1FBckI3QyxlQUFTLEdBQUcscUVBQVMsQ0FBQztRQUd0QixvQkFBYyxHQUE2QixJQUFJLENBQUM7UUFDaEQsK0JBQXlCLEdBQStCLElBQUksQ0FBQztRQUM3RCw4QkFBd0IsR0FBMkIsSUFBSSxDQUFDO1FBQ3hELHFCQUFlLEdBQTBCLElBQUksQ0FBQztRQUU5QyxnQkFBVSxHQUFxQixJQUFJLENBQUM7UUFDMUIsZUFBUyxHQUFtQyxJQUFJLDJEQUFZLEVBQW9CLENBQUM7O0lBYzNGLENBQUM7SUFFRCwrQ0FBUSxHQUFSO1FBQ0ksNEVBQTRFO1FBQzVFLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFFakQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN4QixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDVixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDVixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDZixrQkFBa0IsRUFBRSxDQUFDLElBQUksQ0FBQztZQUMxQixRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDaEIsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDekIsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ3BCLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNaLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNkLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNkLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNkLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNkLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQztZQUNwQixhQUFhLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDbkIsZUFBZSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ3JCLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNaLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUNmLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsb0RBQWEsR0FBYjtRQUFBLGlCQTRCQztRQTNCRyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixFQUFFO2FBQzdCLFNBQVMsQ0FBQyxVQUFDLEdBQTZCO1lBQ3JDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLEtBQUksQ0FBQyxjQUFjLEdBQU8sR0FBRyxRQUFDLENBQUM7WUFDbkMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRVAsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRTthQUMvQixTQUFTLENBQUMsVUFBQyxHQUErQjtZQUN2QyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxLQUFJLENBQUMseUJBQXlCLEdBQU8sR0FBRyxRQUFDLENBQUM7WUFDOUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRVAsSUFBSSxDQUFDLE9BQU8sQ0FBQywyQkFBMkIsRUFBRTthQUNyQyxTQUFTLENBQUMsVUFBQyxHQUEyQjtZQUNuQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxLQUFJLENBQUMsd0JBQXdCLEdBQU8sR0FBRyxRQUFDLENBQUM7WUFDN0MsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRVAsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUM7YUFDbEMsU0FBUyxDQUFDLFVBQUMsR0FBMEI7WUFDbEMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDbEMsS0FBSSxDQUFDLGVBQWUsR0FBTyxHQUFHLFFBQUMsQ0FBQztZQUNwQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsa0RBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxzRkFBZ0IsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN2RCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzdELElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDO1FBQ25GLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDL0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7UUFDakYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUN2RSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzNELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDL0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUMvRCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQy9ELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDL0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUN2RSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUM7UUFDN0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMzRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBRTNELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBOUZTO1FBQVQsNkRBQU0sRUFBRTtrQ0FBWSwyREFBWTttRUFBMEQ7SUFWbEYsNEJBQTRCO1FBTnhDLGdFQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLFFBQVEsRUFBRSxtQkFBTyxDQUFDLEdBQXdDLENBQUM7WUFDM0QsTUFBTSxFQUFFLENBQUMsbUJBQU8sQ0FBQyxHQUF1QyxDQUFDLENBQUM7WUFDMUQsYUFBYSxFQUFFLGdFQUFpQixDQUFDLElBQUk7U0FDeEMsQ0FBQztRQXFCTyx3RUFBTSxDQUFDLFVBQVUsQ0FBQzt5Q0FSZSx5REFBYTtZQUN0Qix1REFBTTtZQUNWLDREQUFXO1lBQ0Msa0ZBQWU7WUFDdEIsa0ZBQWM7WUFDViwwRkFBa0I7WUFDcEIsc0ZBQWdCO1lBQ25CLGdGQUFhLFVBRWQsK0RBQWM7WUFDVCx1RUFBWTtPQXRCcEMsNEJBQTRCLENBeUd4QztJQUFELG1DQUFDO0NBQUEsQ0F6R2lELGdGQUFjLEdBeUcvRDtBQXpHd0M7Ozs7Ozs7O0FDeEJ6Qyw0c0xBQTRzTCw4OUJBQTg5Qix5QkFBeUIseVZBQXlWLHlCQUF5QixnTUFBZ00sZ0JBQWdCLDREOzs7Ozs7OztBQ0Nyd087O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQb0U7QUFDTDtBQUNwQjtBQUNjO0FBQ0Q7QUFDYTtBQUNqQjtBQUNTO0FBQzRCO0FBQzlDO0FBVTNDO0lBQTBDLHdDQUFjO0lBNENwRCw4QkFBNkIsT0FBc0IsRUFDOUIsRUFBZSxFQUNmLFNBQTJCLEVBQzNCLE1BQWMsRUFDZCxLQUFxQixFQUNyQixJQUEyQjtRQUxoRCxZQU1JLGtCQUFNLE9BQU8sQ0FBQyxTQUNqQjtRQVA0QixhQUFPLEdBQVAsT0FBTyxDQUFlO1FBQzlCLFFBQUUsR0FBRixFQUFFLENBQWE7UUFDZixlQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsVUFBSSxHQUFKLElBQUksQ0FBdUI7UUFoRGhELGVBQVMsR0FBRyxxRUFBUyxDQUFDO1FBRXRCLHdCQUFrQixHQUE4QixJQUFJLENBQUM7UUFDckQsZ0JBQVUsR0FBeUIsSUFBSSxDQUFDO1FBQ3hDLFVBQUksR0FBeUIsSUFBSSxDQUFDO1FBQ2xDLFVBQUksR0FBVSxFQUFFLENBQUM7UUFHUixXQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGNBQVEsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUN0QixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLHNCQUFnQixHQUFZLEtBQUssQ0FBQztRQUVsQyx3QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFTMUIsZUFBUyxHQUFHLElBQUksQ0FBQztRQVNqQixlQUFTLEdBQUcsS0FBSyxDQUFDOztJQW1CbEIsQ0FBQztJQW5DRCxzQkFBSSxpREFBZTthQUFuQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDbkMsQ0FBQzthQUNELFVBQW9CLEtBQWM7WUFDOUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsR0FBRyxLQUFLLEtBQUssT0FBTyxDQUFDO1FBQ3JELENBQUM7OztPQUhBO0lBT0Qsc0JBQUksZ0RBQWM7YUFBbEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDO2FBQ0QsVUFBbUIsS0FBYztZQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsR0FBRyxLQUFLLEtBQUssT0FBTyxDQUFDO1FBQzVDLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksNkNBQVc7YUFBZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFDRCxVQUFnQixLQUFjO1lBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxHQUFHLEtBQUssS0FBSyxPQUFPLENBQUM7UUFDNUMsQ0FBQzs7O09BSEE7SUFpQkQsdUNBQVEsR0FBUjtRQUFBLGlCQXNCQztRQXBCRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3pCLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNSLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNULEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNSLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNWLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNWLGtCQUFrQixFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ3hCLFdBQVcsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNqQixZQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDbEIsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDO1NBQ25CLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxTQUFTLEVBQUU7YUFDL0MsSUFBSSxDQUFDLFVBQUMsR0FBOEI7WUFDakMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDbEMsS0FBSSxDQUFDLGtCQUFrQixHQUFPLEdBQUcsUUFBQyxDQUFDO1lBQ3ZDLENBQUM7WUFDRCxLQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3JFLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCw0Q0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLEtBQUssSUFBSSxDQUFFLFlBQVk7Z0JBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUNmLEtBQUssQ0FBQztZQUNWLFFBQVMsU0FBUztnQkFDZCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3RCLEtBQUssQ0FBQztRQUNkLENBQUM7SUFDTCxDQUFDO0lBRUQsNkNBQWMsR0FBZDtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsRUFBRTthQUMvRCxJQUFJLENBQUMsVUFBQyxHQUF5QjtZQUM1QixLQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUNoQixLQUFJLENBQUMsSUFBSSxHQUFPLEdBQUcsUUFBQyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCwrQ0FBZ0IsR0FBaEIsVUFBaUIsVUFBOEI7UUFBL0MsaUJBT0M7UUFORyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLEVBQUU7YUFDNUMsSUFBSSxDQUFDLFVBQUMsR0FBeUI7WUFDNUIsS0FBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7WUFDaEIsS0FBSSxDQUFDLElBQUksR0FBTyxHQUFHLFFBQUMsQ0FBQztZQUNyQixLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsOENBQWUsR0FBZjtRQUNJLG1DQUFtQztRQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztZQUNwQixFQUFFLEVBQUUsRUFBRTtZQUNOLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLEVBQUU7WUFDUixrQkFBa0IsRUFBRSxFQUFFO1lBQ3RCLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsVUFBVSxFQUFFLEVBQUU7U0FDakIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHFDQUFNLEdBQU47UUFBQSxpQkFnQ0M7UUEvQkcsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztRQUMxQyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzlDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDOUMsSUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7UUFDMUUsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztRQUM1RCxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQzlELElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDMUQsSUFBTSxFQUFFLEdBQUcsSUFBSSx5REFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWpDLGtCQUFrQjtRQUNsQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQVE7WUFDbkMsSUFBSSwwQkFBMEIsR0FBa0IsSUFBSSxDQUFDO1lBQ3JELEVBQUUsQ0FBQyxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQUMsMEJBQTBCLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFBQyxDQUFDO1lBQ2pILElBQUksbUJBQW1CLEdBQWtCLElBQUksQ0FBQztZQUM5QyxFQUFFLENBQUMsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFBQyxtQkFBbUIsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFBQyxDQUFDO1lBQzVGLElBQUksa0JBQWtCLEdBQWtCLElBQUksQ0FBQztZQUM3QyxFQUFFLENBQUMsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUFDLENBQUM7WUFFbkcsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzttQkFDNUYsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO21CQUM3RixDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLElBQUksR0FBRyxDQUFDLHNCQUFzQixDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO21CQUNqSSxDQUFDLENBQUMsa0JBQWtCLElBQUksQ0FBQyxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLDBCQUEwQixDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7bUJBQy9JLENBQUMsQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO21CQUNuSCxDQUFDLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7bUJBQzdILENBQUMsQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFILENBQUMsQ0FBQyxDQUFDO1FBRUgsa0JBQWtCO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGdFQUFnRTtRQUNoRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELHlDQUFVLEdBQVYsVUFBVyxLQUFVO1FBQ2pCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUMzQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDBDQUFXLEdBQVgsVUFBWSxHQUFRO1FBQ2hCLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVELDBDQUFXLEdBQVgsVUFBWSxFQUFVO1FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsaUJBQWlCLEVBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsbURBQW9CLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQ25ELENBQUM7SUFySzhCO1FBQTlCLGdFQUFTLENBQUMsMkVBQWtCLENBQUM7a0NBQVEsMkVBQWtCO3VEQUFDO0lBRWhEO1FBQVIsNERBQUssRUFBRTs7dURBQVk7SUFPcEI7UUFEQyw0REFBSyxDQUFDLGlCQUFpQixDQUFDOzs7K0RBR3hCO0lBT0Q7UUFEQyw0REFBSyxDQUFDLGdCQUFnQixDQUFDOzs7OERBR3ZCO0lBT0Q7UUFEQyw0REFBSyxDQUFDLGFBQWEsQ0FBQzs7OzJEQUdwQjtJQXBDUSxvQkFBb0I7UUFOaEMsZ0VBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFFBQVEsRUFBRSxtQkFBTyxDQUFDLEdBQWdDLENBQUM7WUFDbkQsTUFBTSxFQUFFLENBQUMsbUJBQU8sQ0FBQyxHQUErQixDQUFDLENBQUM7U0FDckQsQ0FBQzt5Q0E4Q3dDLHlEQUFhO1lBQzFCLDJEQUFXO1lBQ0osc0ZBQWdCO1lBQ25CLHVEQUFNO1lBQ1AsK0RBQWM7WUFDZiwrRkFBcUI7T0FqRHZDLG9CQUFvQixDQTZLaEM7SUFBRCwyQkFBQztDQUFBLENBN0t5QyxnRkFBYyxHQTZLdkQ7QUE3S2dDO0FBK0tqQyxJQUFZLFdBSVg7QUFKRCxXQUFZLFdBQVc7SUFDbkIsMkNBQU87SUFDUCxpREFBVTtJQUNWLDJDQUFPO0FBQ1gsQ0FBQyxFQUpXLFdBQVcsS0FBWCxXQUFXLFFBSXRCOzs7Ozs7OztBQ3RNRCxtUkFBbVIsa0VBQWtFLDR0Q0FBNHRDLE9BQU8sNm5CQUE2bkIscUZBQXFGLGlEQUFpRCw0QkFBNEIsK3ZCQUErdkIsZ0JBQWdCLGd0QkFBZ3RCLE9BQU8sd3lDQUF3eUMsNkJBQTZCLHd0QkFBd3RCLDZCQUE2QiwyeENBQTJ4Qyw2QkFBNkIsNHZCOzs7Ozs7OztBQ0MvcU87O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQb0U7QUFDTDtBQUNwQjtBQUNjO0FBQ0Q7QUFDYTtBQUNqQjtBQUNTO0FBQzRCO0FBVXpGO0lBQThDLDRDQUFjO0lBWXhELGtDQUE2QixPQUFzQixFQUFtQixFQUFlLEVBQW1CLFNBQTJCLEVBQW1CLE1BQWMsRUFBbUIsS0FBcUIsRUFBbUIsSUFBMkI7UUFBMVAsWUFDSSxrQkFBTSxPQUFPLENBQUMsU0FDakI7UUFGNEIsYUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUFtQixRQUFFLEdBQUYsRUFBRSxDQUFhO1FBQW1CLGVBQVMsR0FBVCxTQUFTLENBQWtCO1FBQW1CLFlBQU0sR0FBTixNQUFNLENBQVE7UUFBbUIsV0FBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBbUIsVUFBSSxHQUFKLElBQUksQ0FBdUI7UUFYMVAsZUFBUyxHQUFHLHFFQUFTLENBQUM7UUFFdEIsZ0JBQVUsR0FBeUIsSUFBSSxDQUFDO1FBQ2hDLFVBQUksR0FBeUIsSUFBSSxDQUFDO1FBQzFDLFVBQUksR0FBVSxFQUFFLENBQUM7UUFHakIsY0FBUSxHQUFtQixJQUFJLENBQUM7O0lBTWhDLENBQUM7SUFFRCwyQ0FBUSxHQUFSO1FBQUEsaUJBZ0JDO1FBZEcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN6QixHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNULE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNiLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNYLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNYLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNYLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUNmLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFO2FBQzFCLElBQUksQ0FBQyxVQUFDLElBQWU7WUFDbEIsS0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksS0FBSyxtRkFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNDLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCx5Q0FBTSxHQUFOO1FBQUEsaUJBb0JDO1FBbkJHLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDcEQsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNoRCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ2hELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDaEQsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUVsRCxrQkFBa0I7UUFDbEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFRO1lBQ25DLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7bUJBQ3RHLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzttQkFDM0csQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO21CQUN2RyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7bUJBQ3ZHLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoSCxDQUFDLENBQUMsQ0FBQztRQUVILGtCQUFrQjtRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixnRUFBZ0U7UUFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCw0QkFBNEI7SUFDNUIsOERBQThEO0lBQzlELHdDQUF3QztJQUN4QyxvREFBb0Q7SUFDcEQsNkNBQTZDO0lBQzdDLHVDQUF1QztJQUN2QyxlQUFlO0lBQ2YsYUFBYTtJQUNiLEdBQUc7SUFFSCxpREFBYyxHQUFkO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixFQUFFLENBQUMsU0FBUyxFQUFFO2FBQy9DLElBQUksQ0FBQyxVQUFDLEdBQXlCO1lBQzVCLEtBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQ2hCLEtBQUksQ0FBQyxJQUFJLEdBQU8sR0FBRyxRQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsNkNBQVUsR0FBVixVQUFXLEtBQVU7UUFDakIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDaEUsQ0FBQztJQUNMLENBQUM7SUFFRCw4Q0FBVyxHQUFYLFVBQVksR0FBUTtRQUNoQixNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRCw4Q0FBVyxHQUFYLFVBQVksT0FBZTtRQUN2QixrR0FBa0c7SUFDdEcsQ0FBQztJQUVELGtEQUFlLEdBQWYsVUFBZ0IsRUFBVSxFQUFFLE9BQWU7UUFDdkMsK0hBQStIO0lBQ25JLENBQUM7SUFwRjhCO1FBQTlCLGdFQUFTLENBQUMsMkVBQWtCLENBQUM7a0NBQVEsMkVBQWtCOzJEQUFDO0lBTmhELHdCQUF3QjtRQU5wQyxnRUFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixRQUFRLEVBQUUsbUJBQU8sQ0FBQyxHQUFvQyxDQUFDO1lBQ3ZELE1BQU0sRUFBRSxDQUFDLG1CQUFPLENBQUMsR0FBbUMsQ0FBQyxDQUFDO1NBQ3pELENBQUM7eUNBY3dDLHlEQUFhLEVBQXVCLDJEQUFXLEVBQThCLHNGQUFnQixFQUEyQix1REFBTSxFQUEwQiwrREFBYyxFQUF5QiwrRkFBcUI7T0FaalAsd0JBQXdCLENBMkZwQztJQUFELCtCQUFDO0NBQUEsQ0EzRjZDLGdGQUFjLEdBMkYzRDtBQTNGb0M7Ozs7Ozs7O0FDbEJyQyxxMUJBQXExQixxRkFBcUYsaURBQWlELHVCQUF1Qix3VEFBd1QsT0FBTyw0eEJBQTR4QixnQkFBZ0IsNnRCQUE2dEIsT0FBTyxtNUU7Ozs7Ozs7O0FDQ2owRjs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7O0FDUEE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1A4RztBQUNyRDtBQUNkO0FBRVM7QUFDVztBQUVOO0FBQ1k7QUFDYjtBQUNjO0FBUXRFO0lBQW9ELGtEQUFjO0lBUzlELHdDQUE2QixPQUFzQixFQUN0QixNQUFjLEVBQ2QsRUFBZSxFQUNmLFNBQTJCLEVBQ1AsUUFBZ0IsRUFDcEMsS0FBcUIsRUFDckIsVUFBd0I7UUFOckQsWUFPSSxrQkFBTSxPQUFPLENBQUMsU0FDakI7UUFSNEIsYUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUN0QixZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsUUFBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLGVBQVMsR0FBVCxTQUFTLENBQWtCO1FBQ1AsY0FBUSxHQUFSLFFBQVEsQ0FBUTtRQUNwQyxXQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixnQkFBVSxHQUFWLFVBQVUsQ0FBYztRQWRyRCxlQUFTLEdBQUcscUVBQVMsQ0FBQztRQUl0QixnQkFBVSxHQUF1QixJQUFJLENBQUM7UUFFNUIsZUFBUyxHQUFxQyxJQUFJLDJEQUFZLEVBQXNCLENBQUM7O0lBVS9GLENBQUM7SUFFRCxpREFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN4QixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDYixXQUFXLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDakIsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ2QsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ2hCLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNaLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUNqQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsb0RBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSx1RkFBa0IsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDN0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztRQUNyRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQy9ELElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDbkUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMzRCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBRS9ELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBakNTO1FBQVQsNkRBQU0sRUFBRTtrQ0FBWSwyREFBWTtxRUFBOEQ7SUFQdEYsOEJBQThCO1FBTjFDLGdFQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUseUJBQXlCO1lBQ25DLFFBQVEsRUFBRSxtQkFBTyxDQUFDLEdBQTBDLENBQUM7WUFDN0QsTUFBTSxFQUFFLENBQUMsbUJBQU8sQ0FBQyxHQUF5QyxDQUFDLENBQUM7WUFDNUQsYUFBYSxFQUFFLGdFQUFpQixDQUFDLElBQUk7U0FDeEMsQ0FBQztRQWNlLHdFQUFNLENBQUMsVUFBVSxDQUFDO3lDQUpPLHlEQUFhO1lBQ2QsdURBQU07WUFDViwyREFBVztZQUNKLHNGQUFnQixVQUVwQiwrREFBYztZQUNULHVFQUFZO09BZjVDLDhCQUE4QixDQXlDMUM7SUFBRCxxQ0FBQztDQUFBLENBekNtRCxnRkFBYyxHQXlDakU7QUF6QzBDOzs7Ozs7OztBQ2xCM0Msc3FFQUFzcUUsZ0JBQWdCLDREOzs7Ozs7OztBQ0N0ckU7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUG9FO0FBQ0w7QUFDcEI7QUFDYTtBQUMyQjtBQUMvQjtBQUNTO0FBQ3BCO0FBRUU7QUFTM0M7SUFBdUMscUNBQWM7SUEwQ2pELDJCQUE2QixNQUFxQixFQUFtQixNQUFjLEVBQW1CLEVBQWUsRUFBbUIsU0FBa0M7UUFBMUssWUFDSSxrQkFBTSxNQUFNLENBQUMsU0FDaEI7UUFGNEIsWUFBTSxHQUFOLE1BQU0sQ0FBZTtRQUFtQixZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQW1CLFFBQUUsR0FBRixFQUFFLENBQWE7UUFBbUIsZUFBUyxHQUFULFNBQVMsQ0FBeUI7UUF6QzFLLGVBQVMsR0FBRyxxRUFBUyxDQUFDO1FBSXRCLFVBQUksR0FBa0IsRUFBRSxDQUFDO1FBQ3pCLFVBQUksR0FBa0IsRUFBRSxDQUFDO1FBR2hCLFdBQUssR0FBRyxFQUFFLENBQUM7UUFDcEIsY0FBUSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLHNCQUFnQixHQUFZLEtBQUssQ0FBQztRQUVsQyx3QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFTMUIsZUFBUyxHQUFHLElBQUksQ0FBQztRQVNqQixlQUFTLEdBQUcsS0FBSyxDQUFDOztJQWFsQixDQUFDO0lBN0JELHNCQUFJLDhDQUFlO2FBQW5CO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUNuQyxDQUFDO2FBQ0QsVUFBb0IsS0FBYztZQUM5QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxHQUFHLEtBQUssS0FBSyxPQUFPLENBQUM7UUFDckQsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSw2Q0FBYzthQUFsQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFDRCxVQUFtQixLQUFjO1lBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxHQUFHLEtBQUssS0FBSyxPQUFPLENBQUM7UUFDNUMsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSwwQ0FBVzthQUFmO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzthQUNELFVBQWdCLEtBQWM7WUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLEdBQUcsS0FBSyxLQUFLLE9BQU8sQ0FBQztRQUM1QyxDQUFDOzs7T0FIQTtJQVdELG9DQUFRLEdBQVI7UUFBQSxpQkF3QkM7UUF2QkcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUM1QixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDWCxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDUixRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDZCxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDVCxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDUixHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDVCxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDVixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDVixHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDVCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDZixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRTthQUN6QixJQUFJLENBQUMsVUFBQyxHQUFVO1lBQ2IsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDbEMsS0FBSSxDQUFDLGtCQUFrQixHQUFPLEdBQUcsUUFBQyxDQUFDO1lBQ3ZDLENBQUM7WUFDRCxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3pFLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBSztZQUNWLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQseUNBQWEsR0FBYjtRQUNJLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLEtBQUssSUFBSSxDQUFFLFlBQVk7Z0JBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUNmLEtBQUssQ0FBQztZQUNWLFFBQVMsU0FBUztnQkFDZCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEIsS0FBSyxDQUFDO1FBQ2QsQ0FBQztJQUNMLENBQUM7SUFFRCwwQ0FBYyxHQUFkO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDOUMsSUFBSSxDQUFDLFVBQUMsSUFBbUI7WUFDdEIsS0FBSSxDQUFDLElBQUksR0FBTyxJQUFJLFFBQUMsQ0FBQztZQUN0QixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQUs7WUFDVixLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELDJDQUFlLEdBQWY7UUFDSSxtQ0FBbUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7WUFDdkIsRUFBRSxFQUFFLEVBQUU7WUFDTixRQUFRLEVBQUUsRUFBRTtZQUNaLEdBQUcsRUFBRSxFQUFFO1lBQ1AsRUFBRSxFQUFFLEVBQUU7WUFDTixHQUFHLEVBQUUsRUFBRTtZQUNQLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLEVBQUU7WUFDUixHQUFHLEVBQUUsRUFBRTtZQUNQLE1BQU0sRUFBRSxFQUFFO1NBQ2IsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGdEQUFvQixHQUFwQjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUNuRCxDQUFDO0lBRUQsNENBQWdCLEdBQWhCLFVBQWlCLFVBQTJCO1FBQTVDLGlCQU9DO1FBTkcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxFQUFFO2FBQzVDLElBQUksQ0FBQyxVQUFDLEdBQWtCO1lBQ3JCLEtBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQ2hCLEtBQUksQ0FBQyxJQUFJLEdBQU8sR0FBRyxRQUFDLENBQUM7WUFDckIsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELGtDQUFNLEdBQU47UUFDSSxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQzdDLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0QsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMzRCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzdELElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDL0QsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMvRCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQy9DLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkUsSUFBTSxFQUFFLEdBQUcsSUFBSSx5REFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWpDLGtCQUFrQjtRQUNsQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQWM7WUFFbEQsSUFBSSxJQUFJLEdBQWtCLElBQUksQ0FBQztZQUMvQixFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQUMsQ0FBQztZQUVsRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxTQUFTLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7bUJBQ3ZHLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsZUFBZSxJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO21CQUM5SCxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLFdBQVcsSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzttQkFDaEgsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxZQUFZLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7bUJBQ3JILENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsUUFBUSxJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO21CQUMzRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLFVBQVUsSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzttQkFDakgsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxNQUFNLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7bUJBQ3pHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLENBQUMsQ0FBQyxDQUFDO1FBRUgsa0JBQWtCO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGdFQUFnRTtRQUNoRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELHNDQUFVLEdBQVYsVUFBVyxLQUFVO1FBQ2pCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUMxQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG9DQUFRLEdBQVIsVUFBUyxFQUFVO1FBQ2hCLHNEQUFzRDtRQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFoSzhCO1FBQTlCLGdFQUFTLENBQUMsMkVBQWtCLENBQUM7a0NBQU8sMkVBQWtCO21EQUFDO0lBRS9DO1FBQVIsNERBQUssRUFBRTs7b0RBQVk7SUFNcEI7UUFEQyw0REFBSyxDQUFDLGlCQUFpQixDQUFDOzs7NERBR3hCO0lBT0Q7UUFEQyw0REFBSyxDQUFDLGdCQUFnQixDQUFDOzs7MkRBR3ZCO0lBT0Q7UUFEQyw0REFBSyxDQUFDLGFBQWEsQ0FBQzs7O3dEQUdwQjtJQW5DUSxpQkFBaUI7UUFON0IsZ0VBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxtQkFBTyxDQUFDLEdBQTZCLENBQUM7WUFDaEQsTUFBTSxFQUFFLENBQUMsbUJBQU8sQ0FBQyxHQUE0QixDQUFDLENBQUM7U0FDbEQsQ0FBQzt5Q0E0Q3VDLHlEQUFhLEVBQTJCLHVEQUFNLEVBQXVCLDJEQUFXLEVBQThCLG9HQUF1QjtPQTFDakssaUJBQWlCLENBd0s3QjtJQUFELHdCQUFDO0NBQUEsQ0F4S3NDLGdGQUFjLEdBd0twRDtBQXhLNkI7Ozs7Ozs7O0FDbEI5QixzUkFBc1Isa0VBQWtFLG8zQ0FBbzNDLHFGQUFxRixpREFBaUQsdUJBQXVCLDh2QkFBOHZCLGtCQUFrQixtNUdBQW01Ryw2QkFBNkIsd3hDOzs7Ozs7OztBQ0N6aU07O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQOEc7QUFDckQ7QUFDZDtBQUVTO0FBQ1c7QUFFTjtBQUNnQjtBQUNKO0FBQ047QUFDUDtBQUNHO0FBQ1E7QUFTbkU7SUFBaUQsK0NBQWM7SUFXM0QscUNBQTZCLE9BQXNCLEVBQ3RCLE1BQWMsRUFDZCxFQUFlLEVBQ2YsY0FBK0IsRUFDL0IsV0FBK0IsRUFDL0IsU0FBMkIsRUFDM0IsTUFBcUIsRUFDRCxRQUFnQixFQUNwQyxLQUFxQixFQUNyQixVQUF3QjtRQVRyRCxZQVVJLGtCQUFNLE9BQU8sQ0FBQyxTQUNqQjtRQVg0QixhQUFPLEdBQVAsT0FBTyxDQUFlO1FBQ3RCLFlBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxRQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2Ysb0JBQWMsR0FBZCxjQUFjLENBQWlCO1FBQy9CLGlCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUMvQixlQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixZQUFNLEdBQU4sTUFBTSxDQUFlO1FBQ0QsY0FBUSxHQUFSLFFBQVEsQ0FBUTtRQUNwQyxXQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixnQkFBVSxHQUFWLFVBQVUsQ0FBYztRQW5CckQsZUFBUyxHQUFHLHFFQUFTLENBQUM7UUFHdEIsdUJBQWlCLEdBQTZCLElBQUksQ0FBQztRQUNuRCwrQkFBeUIsR0FBK0IsSUFBSSxDQUFDO1FBRTdELGdCQUFVLEdBQW9CLElBQUksQ0FBQztRQUV6QixlQUFTLEdBQWtDLElBQUksMkRBQVksRUFBbUIsQ0FBQzs7SUFhekYsQ0FBQztJQUVELDhDQUFRLEdBQVI7UUFDSSw0RUFBNEU7UUFDNUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUVqRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3hCLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNWLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQztZQUNoQixtQkFBbUIsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUN6QixVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDaEIsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUM7U0FDM0IsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxtREFBYSxHQUFiO1FBQUEsaUJBY0M7UUFiRyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixFQUFFO2FBQzdCLFNBQVMsQ0FBQyxVQUFDLEdBQTZCO1lBQ3JDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLEtBQUksQ0FBQyxpQkFBaUIsR0FBTyxHQUFHLFFBQUMsQ0FBQztZQUN0QyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFUCxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFO2FBQy9CLFNBQVMsQ0FBQyxVQUFDLEdBQStCO1lBQ3ZDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLEtBQUksQ0FBQyx5QkFBeUIsR0FBTyxHQUFHLFFBQUMsQ0FBQztZQUM5QyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsaURBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxxRkFBZSxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUM5RCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ25FLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO1FBRWpGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBdERTO1FBQVQsNkRBQU0sRUFBRTtrQ0FBWSwyREFBWTtrRUFBd0Q7SUFUaEYsMkJBQTJCO1FBTnZDLGdFQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFFBQVEsRUFBRSxtQkFBTyxDQUFDLEdBQXVDLENBQUM7WUFDMUQsTUFBTSxFQUFFLENBQUMsbUJBQU8sQ0FBQyxHQUFzQyxDQUFDLENBQUM7WUFDekQsYUFBYSxFQUFFLGdFQUFpQixDQUFDLElBQUk7U0FDeEMsQ0FBQztRQW1CZSx3RUFBTSxDQUFDLFVBQVUsQ0FBQzt5Q0FQTyx5REFBYTtZQUNkLHVEQUFNO1lBQ1YsMkRBQVc7WUFDQyxrRkFBZTtZQUNsQiwwRkFBa0I7WUFDcEIsc0ZBQWdCO1lBQ25CLGdGQUFhLFVBRWQsK0RBQWM7WUFDVCx1RUFBWTtPQXBCNUMsMkJBQTJCLENBZ0V2QztJQUFELGtDQUFDO0NBQUEsQ0FoRWdELGdGQUFjLEdBZ0U5RDtBQWhFdUM7Ozs7Ozs7O0FDdEJ4QyxnbkVBQWduRSxnQkFBZ0IsNEQ7Ozs7Ozs7O0FDQ2hvRTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQSxNQUFNO0FBQ047SUFBQTtJQWtCQSxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDOztBQUlELE1BQU07QUFDTjtJQUFBO0lBT0EsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQzs7QUFNRCxNQUFNO0FBQ047SUFBQTtJQWtCQSxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDOztBQUlELFFBQVE7QUFDUjtJQUFBO0lBT0EsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FBQzs7QUFHRCxLQUFLO0FBQ0w7SUFBQTtJQUtBLENBQUM7SUFBRCxzQkFBQztBQUFELENBQUM7O0FBRUQsS0FBSztBQUNMO0lBQUE7SUFpQkEsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7O0FDakdEO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BvRTtBQUNMO0FBQ3BCO0FBQ2M7QUFDRDtBQUNPO0FBR1g7QUFDUztBQUNpQjtBQUNuQztBQVMzQztJQUF1QyxxQ0FBYztJQTBDakQsMkJBQTZCLE9BQXNCLEVBQW1CLEVBQWUsRUFBbUIsTUFBcUIsRUFBbUIsTUFBYyxFQUFtQixLQUFxQixFQUFtQixJQUEyQjtRQUFwUCxZQUNJLGtCQUFNLE9BQU8sQ0FBQyxTQUNqQjtRQUY0QixhQUFPLEdBQVAsT0FBTyxDQUFlO1FBQW1CLFFBQUUsR0FBRixFQUFFLENBQWE7UUFBbUIsWUFBTSxHQUFOLE1BQU0sQ0FBZTtRQUFtQixZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQW1CLFdBQUssR0FBTCxLQUFLLENBQWdCO1FBQW1CLFVBQUksR0FBSixJQUFJLENBQXVCO1FBekNwUCxlQUFTLEdBQUcscUVBQVMsQ0FBQztRQUV0Qix3QkFBa0IsR0FBMEIsSUFBSSxDQUFDO1FBQ2pELGdCQUFVLEdBQXFCLElBQUksQ0FBQztRQUNwQyxVQUFJLEdBQXFCLElBQUksQ0FBQztRQUM5QixVQUFJLEdBQVUsRUFBRSxDQUFDO1FBR1IsV0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNwQixjQUFRLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDdEIsc0JBQWdCLEdBQVksS0FBSyxDQUFDO1FBRWxDLHdCQUFrQixHQUFHLElBQUksQ0FBQztRQVMxQixlQUFTLEdBQUcsSUFBSSxDQUFDO1FBU2pCLGVBQVMsR0FBRyxLQUFLLENBQUM7O0lBYWxCLENBQUM7SUE3QkQsc0JBQUksOENBQWU7YUFBbkI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQ25DLENBQUM7YUFDRCxVQUFvQixLQUFjO1lBQzlCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLEdBQUcsS0FBSyxLQUFLLE9BQU8sQ0FBQztRQUNyRCxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLDZDQUFjO2FBQWxCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzthQUNELFVBQW1CLEtBQWM7WUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLEdBQUcsS0FBSyxLQUFLLE9BQU8sQ0FBQztRQUM1QyxDQUFDOzs7T0FIQTtJQU9ELHNCQUFJLDBDQUFXO2FBQWY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDO2FBQ0QsVUFBZ0IsS0FBYztZQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsR0FBRyxLQUFLLEtBQUssT0FBTyxDQUFDO1FBQzVDLENBQUM7OztPQUhBO0lBV0Qsb0NBQVEsR0FBUjtRQUFBLGlCQXFCQztRQW5CRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3pCLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1Qsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDeEIsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ1YseUJBQXlCLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDL0IsZUFBZSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ3JCLFdBQVcsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNqQixlQUFlLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDckIsWUFBWSxFQUFFLENBQUMsRUFBRSxDQUFDO1NBQ3JCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDO2FBQ2pDLFNBQVMsQ0FBQyxVQUFDLEdBQTBCO1lBQ2xDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLEtBQUksQ0FBQyxrQkFBa0IsR0FBTyxHQUFHLFFBQUMsQ0FBQztZQUN2QyxDQUFDO1lBQ0QsS0FBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNyRSxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQseUNBQWEsR0FBYjtRQUNJLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLEtBQUssSUFBSSxDQUFFLFlBQVk7Z0JBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUNmLEtBQUssQ0FBQztZQUNWLEtBQUssR0FBRyxDQUFFLG9CQUFvQjtnQkFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO2dCQUM1QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3RCLEtBQUssQ0FBQztZQUNWLFFBQVMsU0FBUztnQkFDZCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO2dCQUM3QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3RCLEtBQUssQ0FBQztRQUNkLENBQUM7SUFDTCxDQUFDO0lBRUQsMENBQWMsR0FBZDtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUyxFQUFFO2FBQ3BFLElBQUksQ0FBQyxVQUFDLEdBQXFCO1lBQ3hCLEtBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQ2hCLEtBQUksQ0FBQyxJQUFJLEdBQU8sR0FBRyxRQUFDLENBQUM7WUFDckIsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELDRDQUFnQixHQUFoQixVQUFpQixVQUEyQjtRQUE1QyxpQkFPQztRQU5HLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsRUFBRTthQUN6QyxJQUFJLENBQUMsVUFBQyxHQUFxQjtZQUN4QixLQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUNoQixLQUFJLENBQUMsSUFBSSxHQUFPLEdBQUcsUUFBQyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCwyQ0FBZSxHQUFmO1FBQ0ksbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQ3BCLGtCQUFrQixFQUFFLEVBQUU7WUFDdEIsSUFBSSxFQUFFLEVBQUU7WUFDUix5QkFBeUIsRUFBRSxFQUFFO1lBQzdCLGVBQWUsRUFBRSxFQUFFO1lBQ25CLFdBQVcsRUFBRSxFQUFFO1lBQ2YsZUFBZSxFQUFFLEVBQUU7WUFDbkIsWUFBWSxFQUFFLEVBQUU7U0FDbkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGtDQUFNLEdBQU47UUFBQSxpQkE4QkM7UUE3QkcsSUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7UUFDMUUsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM1RCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEYsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQztRQUNwRSxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1FBQzVELElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEYsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM1RSxJQUFNLEVBQUUsR0FBRyxJQUFJLHlEQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFakMsa0JBQWtCO1FBQ2xCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBbUI7WUFDOUMsSUFBSSx1QkFBdUIsR0FBa0IsSUFBSSxDQUFDO1lBQ2xELEVBQUUsQ0FBQyxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUFDLHVCQUF1QixHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUFDLENBQUM7WUFDeEcsSUFBSSxtQkFBbUIsR0FBa0IsSUFBSSxDQUFDO1lBQzlDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUFDLENBQUM7WUFFNUYsTUFBTSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsSUFBSSxDQUFDLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO21CQUM3SixDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7bUJBQzNHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMseUJBQXlCLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7bUJBQ25KLENBQUMsQ0FBQyxlQUFlLElBQUksQ0FBQyxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO21CQUNuSSxDQUFDLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzttQkFDbkgsQ0FBQyxDQUFDLGVBQWUsSUFBSSxDQUFDLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO21CQUN2SixDQUFDLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEosQ0FBQyxDQUFDLENBQUM7UUFFSCxrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsZ0VBQWdFO1FBQ2hFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsdUNBQVcsR0FBWCxVQUFZLEdBQVE7UUFDaEIsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsc0NBQVUsR0FBVixVQUFXLEtBQVU7UUFDakIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1FBQ3hGLENBQUM7SUFDTCxDQUFDO0lBRUQsb0NBQVEsR0FBUixVQUFTLElBQVksRUFBRSxhQUE2QjtRQUNoRCxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBRSx3Q0FBd0M7UUFDekYsQ0FBQztRQUNELElBQUksQ0FDSixDQUFDO1lBQ0csSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFFLDJDQUEyQztRQUM1RixDQUFDO0lBQ0wsQ0FBQztJQUVELG9DQUFRLEdBQVIsVUFBUyxJQUFZO0lBQ3JCLENBQUM7SUFFRCxnREFBb0IsR0FBcEI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDbkQsQ0FBQztJQTFLOEI7UUFBOUIsZ0VBQVMsQ0FBQywyRUFBa0IsQ0FBQztrQ0FBUSwyRUFBa0I7b0RBQUM7SUFFaEQ7UUFBUiw0REFBSyxFQUFFOztvREFBWTtJQU1wQjtRQURDLDREQUFLLENBQUMsaUJBQWlCLENBQUM7Ozs0REFHeEI7SUFPRDtRQURDLDREQUFLLENBQUMsZ0JBQWdCLENBQUM7OzsyREFHdkI7SUFPRDtRQURDLDREQUFLLENBQUMsYUFBYSxDQUFDOzs7d0RBR3BCO0lBbkNRLGlCQUFpQjtRQU43QixnRUFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLG1CQUFPLENBQUMsR0FBNkIsQ0FBQztZQUNoRCxNQUFNLEVBQUUsQ0FBQyxtQkFBTyxDQUFDLEdBQTRCLENBQUMsQ0FBQztTQUNsRCxDQUFDO3lDQTRDd0MseURBQWEsRUFBdUIsMkRBQVcsRUFBMkIsZ0ZBQWEsRUFBMkIsdURBQU0sRUFBMEIsK0RBQWMsRUFBeUIsK0ZBQXFCO09BMUMzTyxpQkFBaUIsQ0FrTDdCO0lBQUQsd0JBQUM7Q0FBQSxDQWxMc0MsZ0ZBQWMsR0FrTHBEO0FBbEw2Qjs7Ozs7Ozs7QUNwQjlCLG1SQUFtUixrRUFBa0UsNDVCQUE0NUIsT0FBTyw2bkJBQTZuQixxRkFBcUYsaURBQWlELHVDQUF1QywwdURBQXF3RCwyQkFBMkIsNlBBQTZQLDJCQUEyQiw4c0JBQThzQixPQUFPLDh3QkFBOHdCLE9BQU8sZ3ZCQUFndkIsNkJBQTZCLDh0QkFBOHRCLDZCQUE2Qiw4K0U7Ozs7Ozs7QUNBNWtPLGlDQUFpQyxvekM7Ozs7Ozs7QUNBakMsaUNBQWlDLDRuQzs7Ozs7Ozs7QUNDakM7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0EscUNBQXNDLDJCQUEyQix1QkFBdUIsS0FBSyxlQUFlLDJCQUEyQixlQUFlLGdCQUFnQixxQkFBcUIsdUJBQXVCLEtBQUs7O0FBRXZOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1A4RztBQUNyRDtBQUNkO0FBRVM7QUFDVztBQUVOO0FBQ1E7QUFDUTtBQUNKO0FBQ047QUFDUDtBQUNHO0FBQ1E7QUFVbkU7SUFBaUQsK0NBQWM7SUFhM0QscUNBQTZCLE9BQXNCLEVBQ3RCLE1BQWMsRUFDZCxFQUFlLEVBQ2YsY0FBK0IsRUFDL0IsT0FBdUIsRUFDdkIsV0FBK0IsRUFDL0IsU0FBMkIsRUFDM0IsTUFBcUIsRUFDRCxRQUFnQixFQUNwQyxLQUFxQixFQUNyQixVQUF3QjtRQVZyRCxZQVdJLGtCQUFNLE9BQU8sQ0FBQyxTQUNqQjtRQVo0QixhQUFPLEdBQVAsT0FBTyxDQUFlO1FBQ3RCLFlBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxRQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2Ysb0JBQWMsR0FBZCxjQUFjLENBQWlCO1FBQy9CLGFBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGlCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUMvQixlQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixZQUFNLEdBQU4sTUFBTSxDQUFlO1FBQ0QsY0FBUSxHQUFSLFFBQVEsQ0FBUTtRQUNwQyxXQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixnQkFBVSxHQUFWLFVBQVUsQ0FBYztRQXRCckQsZUFBUyxHQUFHLHFFQUFTLENBQUM7UUFHdEIsdUJBQWlCLEdBQTZCLElBQUksQ0FBQztRQUNuRCw4QkFBd0IsR0FBMEIsSUFBSSxDQUFDO1FBQ3ZELCtCQUF5QixHQUErQixJQUFJLENBQUM7UUFDN0QscUJBQWUsR0FBMEIsSUFBSSxDQUFDO1FBRTlDLGdCQUFVLEdBQW9CLElBQUksQ0FBQztRQUV6QixlQUFTLEdBQWtDLElBQUksMkRBQVksRUFBbUIsQ0FBQzs7SUFjekYsQ0FBQztJQUVELDhDQUFRLEdBQVI7UUFDSSw0RUFBNEU7UUFDNUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUVqRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3hCLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNWLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQztZQUNoQixVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDaEIsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ1gsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ2QsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ1gsWUFBWSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ2xCLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNoQixRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDZCxZQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDbEIsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ1YsZUFBZSxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ3ZCLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNYLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztZQUNkLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQztZQUNwQixnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQztTQUMzQixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELG1EQUFhLEdBQWI7UUFBQSxpQkE0QkM7UUEzQkcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRTthQUM3QixTQUFTLENBQUMsVUFBQyxHQUE2QjtZQUNyQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxLQUFJLENBQUMsaUJBQWlCLEdBQU8sR0FBRyxRQUFDLENBQUM7WUFDdEMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRVAsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRTthQUMvQixTQUFTLENBQUMsVUFBQyxHQUErQjtZQUN2QyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxLQUFJLENBQUMseUJBQXlCLEdBQU8sR0FBRyxRQUFDLENBQUM7WUFDOUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRVAsSUFBSSxDQUFDLE9BQU8sQ0FBQywyQkFBMkIsRUFBRTthQUNyQyxTQUFTLENBQUMsVUFBQyxHQUEwQjtZQUNsQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxLQUFJLENBQUMsd0JBQXdCLEdBQU8sR0FBRyxRQUFDLENBQUM7WUFDN0MsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRVAsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUM7YUFDbEMsU0FBUyxDQUFDLFVBQUMsR0FBMEI7WUFDbEMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDbEMsS0FBSSxDQUFDLGVBQWUsR0FBTyxHQUFHLFFBQUMsQ0FBQztZQUNwQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsaURBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxxRkFBZSxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN2RCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQzlELElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDbkUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6RCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQy9ELElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDekQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUN2RSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ25FLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDL0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FB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Z0JBQzNFLCtGQUFxQjtnQkFDckIsbUZBQWM7Z0JBQ2QsMkZBQWtCO2dCQUNsQixxRkFBZTtnQkFDZixtRkFBYztnQkFDZCxtRkFBYztnQkFDZCx1RkFBZ0I7Z0JBQ2hCLHFHQUF1QjtnQkFDdkIsaUZBQWE7Z0JBQ2IseUZBQWlCO2dCQUNqQixxRkFBZTtnQkFDZiwrRkFBZTtnQkFDZixxR0FBdUI7Z0JBQ3ZCLHlHQUFvQjtnQkFDcEIseURBQVE7YUFDWDtTQUNKLENBQUM7T0FDVyxtQkFBbUIsQ0FDL0I7SUFBRCwwQkFBQztDQUFBO0FBRCtCIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBHZW5lcmFsU2NyaXB0cyB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL2dlbmVyYWwuc2NyaXB0c1wiO1xyXG5pbXBvcnQgeyBUb2FzdHJTZXJ2aWNlIH0gZnJvbSBcIm5neC10b2FzdHJcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcywgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGaWxsVHlwZXMgfSBmcm9tIFwiLi4vLi4vYm9kZW1iZWhlZXJyYXBwb3J0LWdyaWQvYm9kZW1iZWhlZXJyYXBwb3J0LWdyaWQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSwgVXNlclJvbGVzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiZ3ctaG9tZVwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZ3ctaG9tZS5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9ndy1ob21lLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBnd0hvbWVDb21wb25lbnQgZXh0ZW5kcyBHZW5lcmFsU2NyaXB0cyBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBidG5zOiBib29sZWFuW10gPSBbZmFsc2UsIHRydWUsIGZhbHNlLCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCBmYWxzZV07XHJcbiAgICBhbGxCdXR0b25zU2hvd246IGJvb2xlYW4gPSB0cnVlOyBcclxuXHJcbiAgICBCQlJGaWxsVHlwZTogRmlsbFR5cGVzID0gRmlsbFR5cGVzLkZvckJick92ZXJ6aWNodDtcclxuICAgIFVQTEZpbGxUeXBlOiBGaWxsVHlwZXMgPSBGaWxsVHlwZXMuRm9yT25saW5lRmlsbGVkT3JVcGxvYWQ7XHJcbiAgICBVUm9sZXM6IFVzZXJSb2xlcztcclxuXHJcbiAgICBpc0dXVXNlcjogYm9vbGVhbiB8IG51bGwgPSBudWxsO1xyXG4gICAgdXNlclJvbGU6IFVzZXJSb2xlcyA9IFVzZXJSb2xlcy5LbGFudDtcclxuICAgIGFsbG93RGVsZXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBQZ0luZGV4OiBudW1iZXIgPSAtMTtcclxuXHJcbiAgICB1c2VUb29sYmFyID0gZmFsc2U7XHJcbiAgICBASW5wdXQoJ2hhc1Rvb2xiYXInKVxyXG4gICAgZ2V0IGhhc1Rvb2xiYXIoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlVG9vbGJhcjtcclxuICAgIH1cclxuICAgIHNldCBoYXNUb29sYmFyKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy51c2VUb29sYmFyID0gXCJcIiArIHZhbHVlICE9PSBcImZhbHNlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfdG9hc3RyOiBUb2FzdHJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJlYWRvbmx5IF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcmVhZG9ubHkgYXV0aDogQXV0aGVudGljYXRpb25TZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIoX3RvYXN0cik7XHJcblxyXG4gICAgICAgIC8vIG5lZWRlZCBpbiBvcmRlciB0byByZXRyaWV2ZSB0aGUgY2hhbmdlZCB1cmwgcXVlcnlwYXJhbXMgb24gYSBwb3N0YmFja1xyXG4gICAgICAgIHRoaXMucm91dGVyLnJvdXRlUmV1c2VTdHJhdGVneS5zaG91bGRSZXVzZVJvdXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzbmFwc2hvdCA9IHRoaXMuX3JvdXRlLnNuYXBzaG90O1xyXG4gICAgICAgIGlmIChzbmFwc2hvdC5xdWVyeVBhcmFtc1tcIlBnXCJdKSB7IHRoaXMuUGdJbmRleCA9IHNuYXBzaG90LnF1ZXJ5UGFyYW1zW1wiUGdcIl0gfTtcclxuXHJcbiAgICAgICAgdGhpcy5hdXRoLmdldFJvbGUoKS50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbigocm9sZTogVXNlclJvbGVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzR1dVc2VyID0gKHJvbGUgIT09IFVzZXJSb2xlcy5LbGFudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJSb2xlID0gcm9sZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0dXVXNlciAmJiB0aGlzLnVzZXJSb2xlID09IFVzZXJSb2xlcy5Hcm9uZHdpanplcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsb3dEZWxldGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTsgICBcclxuXHJcbiAgICAgICAgaWYgKHNuYXBzaG90LnF1ZXJ5UGFyYW1zW1wiVFwiXSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHNuYXBzaG90LnF1ZXJ5UGFyYW1zW1wiVFwiXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIjNcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJCUkZpbGxUeXBlID0gRmlsbFR5cGVzLkZvckFhbnZyYWdlbkJicjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuUGdJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5hbGxCdXR0b25zU2hvd24gPSB0aGlzLmRldGVjdEFsbEJ1dHRvbnNTaG93bigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNpbmdsZUJ1dHRvbih0aGlzLlBnSW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVCdXR0b24oYnRuSW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGlmIChidG5JbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmFsbEJ1dHRvbnNTaG93bikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGksIG4gPSB0aGlzLmJ0bnMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuc1tpXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmJ0bnNbYnRuSW5kZXhdID0gIXRoaXMuYnRuc1tidG5JbmRleF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWxsQnV0dG9uc1Nob3duID0gdGhpcy5kZXRlY3RBbGxCdXR0b25zU2hvd24oKTtcclxuICAgIH1cclxuICAgIHNpbmdsZUJ1dHRvbihidG5JbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgdmFyIGksIG4gPSB0aGlzLmJ0bnMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5idG5zW2ldID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYnRuc1tidG5JbmRleF0gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYWxsQnV0dG9uc1Nob3duID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXRCdXR0b25DbGFzcyhibG5WYWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHJldHVybiBibG5WYWx1ZSA/ICdidG4tb24nIDogJ2J0bi1vZmYnO1xyXG4gICAgfVxyXG4gICAgZ2V0U2luZ2xlQ2xhc3MoYmxuVmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICByZXR1cm4gYmxuVmFsdWUgPyAnYnRuLXNpbmdsZS1vbicgOiAnYnRuLXNpbmdsZS1vZmYnO1xyXG4gICAgfVxyXG4gICAgZGV0ZWN0QWxsQnV0dG9uc1Nob3duKCkge1xyXG4gICAgICAgIHZhciBpLCBuID0gdGhpcy5idG5zLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJ0bnNbaV0gPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi1yb3V0ZXItbG9hZGVyL3NyYyEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctaG9tZS9ndy1ob21lLmNvbXBvbmVudC50cyIsImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEd3RWRpdFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9ndy1lZGl0LnJvdXRpbmcubW9kdWxlXCI7XHJcblxyXG4vLyBDdXN0b21lciBSZWxhdGVkXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE5hdk1lbnVDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGZXRjaERhdGFDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mZXRjaGRhdGEvZmV0Y2hkYXRhLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkZXJDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9maWxlLXVwbG9hZGVyL2ZpbGUtdXBsb2FkZXIuY29tcG9uZW50XCI7XHJcblxyXG5cclxuXHJcbmltcG9ydCB7IEZvcmJpZGRlbkNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ZvcmJpZGRlbi9mb3JiaWRkZW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEVycm9yQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBJbnNjaHJpanZlbkFsc0dlYnJ1aWtlckNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2luc2NocmlqdmVuLWFscy1nZWJydWlrZXIvaW5zY2hyaWp2ZW4tYWxzLWdlYnJ1aWtlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQnJhbmNoZUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2luc2NocmlqdmVuLWFscy1nZWJydWlrZXIvYnJhbmNoZS9icmFuY2hlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBCZXJvZXBzb3JnYW5pc2F0aWVDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9pbnNjaHJpanZlbi1hbHMtZ2VicnVpa2VyL2Jlcm9lcHNvcmdhbmlzYXRpZS9iZXJvZXBzb3JnYW5pc2F0aWUuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBBbGxvd09ubHlOdW1iZXJzRGlyZWN0aXZlIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZGlyZWN0aXZlcy9hbGxvd09ubHlOdW1iZXJzLmRpcmVjdGl2ZXNcIjtcclxuaW1wb3J0IHsgRG90dGVkQm9yZGVyQmVsb3dEaXJlY3RpdmUgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9kaXJlY3RpdmVzL2RvdHRlZGJvcmRlckJlbG93LmRpcmVjdGl2ZXNcIjtcclxuXHJcblxyXG5pbXBvcnQgeyBUZWNobmlzY2hWZXJzbGFnRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdGVjaG5pc2NoLXZlcnNsYWctZGV0YWlsL3RlY2huaXNjaC12ZXJzbGFnLWRldGFpbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVGVjaG5pc2NoVmVyc2xhZ0luZGllbmVuQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdGVjaG5pc2NoLXZlcnNsYWctaW5kaWVuZW4vdGVjaG5pc2NoLXZlcnNsYWctaW5kaWVuZW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRlY2huaXNjaFZlcnNsYWdPa0NvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RlY2huaXNjaC12ZXJzbGFnLW9rL3RlY2huaXNjaC12ZXJzbGFnLW9rLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUZWNobmlzY2hWZXJzbGFnU3RhdHVzQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdGVjaG5pc2NoLXZlcnNsYWctc3RhdHVzL3RlY2huaXNjaC12ZXJzbGFnLXN0YXR1cy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVGVjaG5pc2NoVmVyc2xhZ1pvZWtlbkNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RlY2huaXNjaC12ZXJzbGFnLXpvZWtlbi90ZWNobmlzY2gtdmVyc2xhZy16b2VrZW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRlY2huaXNjaFZlcnNsYWdab25lUmVnaXN0cmF0aWVDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90ZWNobmlzY2gtdmVyc2xhZy16b25lLXJlZ2lzdHJhdGllL3RlY2huaXNjaC12ZXJzbGFnLXpvbmUtcmVnaXN0cmF0aWUuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBUcmFuc3BvcnRUb3BDZ3JNZWxkZW5Db21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90cmFuc3BvcnQtdG9wLWNnci1tZWxkZW4vdHJhbnNwb3J0LXRvcC1jZ3ItbWVsZGVuLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUcmFuc3BvcnRUb3BDZ3JEZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90cmFuc3BvcnQtdG9wLWNnci1kZXRhaWwvdHJhbnNwb3J0LXRvcC1jZ3ItZGV0YWlsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUcmFuc3BvcnRUb3BDZ3JWZXJrbGFyaW5nQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdHJhbnNwb3J0LXRvcC1jZ3ItdmVya2xhcmluZy90cmFuc3BvcnQtdG9wLWNnci12ZXJrbGFyaW5nLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUcmFuc3BvcnRUb3BDZ3JTdGF0dXNDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90cmFuc3BvcnQtdG9wLWNnci1zdGF0dXMvdHJhbnNwb3J0LXRvcC1jZ3Itc3RhdHVzLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgR3JvbmR2ZXJ6ZXR0b2VsYXRpbmdBYW52cmFhZ09rQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ3JvbmR2ZXJ6ZXR0b2VsYXRpbmctYWFudnJhYWdvay9ncm9uZHZlcnpldHRvZWxhdGluZy1hYW52cmFhZ29rLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBHcm9uZHZlcnpldHRvZWxhdGluZ0FhbnZyYWdlbkNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dyb25kdmVyemV0dG9lbGF0aW5nLWFhbnZyYWdlbi9ncm9uZHZlcnpldHRvZWxhdGluZy1hYW52cmFnZW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEdyb25kdmVyemV0dG9lbGF0aW5nSW5kaWVuZW5Db21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ncm9uZHZlcnpldHRvZWxhdGluZy1pbmRpZW5lbi9ncm9uZHZlcnpldHRvZWxhdGluZy1pbmRpZW5lbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgR3JvbmR2ZXJ6ZXR0b2VsYXRpbmdTdGF0dXNDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ncm9uZHZlcnpldHRvZWxhdGluZy1zdGF0dXMvZ3JvbmR2ZXJ6ZXR0b2VsYXRpbmctc3RhdHVzLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgQm9kZW1iZWhlZXJyYXBwb3J0QWFudnJhZ2VuQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYm9kZW1iZWhlZXJyYXBwb3J0LWFhbnZyYWdlbi9ib2RlbWJlaGVlcnJhcHBvcnQtYWFudnJhZ2VuLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBCb2RlbWJlaGVlcnJhcHBvcnRTdGF0dXNDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ib2RlbWJlaGVlcnJhcHBvcnQtc3RhdHVzL2JvZGVtYmVoZWVycmFwcG9ydC1zdGF0dXMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEJvZGVtYmVoZWVycmFwcG9ydERldGFpbENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2JvZGVtYmVoZWVycmFwcG9ydC1kZXRhaWwvYm9kZW1iZWhlZXJyYXBwb3J0LWRldGFpbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQm9kZW1iZWhlZXJyYXBwb3J0R3JpZENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2JvZGVtYmVoZWVycmFwcG9ydC1ncmlkL2JvZGVtYmVoZWVycmFwcG9ydC1ncmlkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBCb2RlbWJlaGVlcnJhcHBvcnRPbmxpbmVDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ib2RlbWJlaGVlcnJhcHBvcnQtb25saW5lL2JvZGVtYmVoZWVycmFwcG9ydC1vbmxpbmUuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBUb3BHcm9uZHRyYW5zcG9ydFN0YXR1c0NvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RvcC1ncm9uZHRyYW5zcG9ydC1zdGF0dXMvdG9wLWdyb25kdHJhbnNwb3J0LXN0YXR1cy5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IEtsZWluZVdlcnZlbkFhbnZyYWdlbkNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2tsZWluZXdlcnZlbi1hYW52cmFnZW4va2xlaW5ld2VydmVuLWFhbnZyYWdlbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgS2xlaW5lV2VydmVuSW5kaWVuZW5Db21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9rbGVpbmV3ZXJ2ZW4taW5kaWVuZW4va2xlaW5ld2VydmVuLWluZGllbmVuLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBLbGVpbmVXZXJ2ZW5TdGF0dXNDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9rbGVpbmV3ZXJ2ZW4tc3RhdHVzL2tsZWluZXdlcnZlbi1zdGF0dXMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEtsZWluZVdlcnZlbkRldGFpbENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2tsZWluZXdlcnZlbi1kZXRhaWwva2xlaW5ld2VydmVuLWRldGFpbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgS2xlaW5lV2VydmVuVmVya2xhcmluZ0NvbXBvbmVudCB9IGZyb20gXCIuLi8uLi8vY29tcG9uZW50cy9rbGVpbmV3ZXJ2ZW4tdmVya2xhcmluZy9rbGVpbmV3ZXJ2ZW4tdmVya2xhcmluZy5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IFB1aW5MbXJwQWFudnJhZ2VuQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcHVpbi1sbXJwLWFhbnZyYWdlbi9wdWluLWxtcnAtYWFudnJhZ2VuLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQdWluTG1ycEluZGllbmVuQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcHVpbi1sbXJwLWluZGllbmVuL3B1aW4tbG1ycC1pbmRpZW5lbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUHVpbkxtcnBTdGF0dXNDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wdWluLWxtcnAtc3RhdHVzL3B1aW4tbG1ycC1zdGF0dXMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFB1aW5UZWNobmlzY2hWZXJzbGFnRGF0YUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3B1aW4tbG1ycC1pbmRpZW5lbi9wdWluLXRlY2huaXNjaC12ZXJzbGFnLWRhdGEvcHVpbi10ZWNobmlzY2gtdmVyc2xhZy1kYXRhLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQdWluVGVjaG5pc2NoVmVyc2xhZ0RhdGFJdGVtQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcHVpbi1sbXJwLWluZGllbmVuL3B1aW4tdGVjaG5pc2NoLXZlcnNsYWctZGF0YS1pdGVtL3B1aW4tdGVjaG5pc2NoLXZlcnNsYWctZGF0YS1pdGVtLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgVGFibGVQYWdlckNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RhYmxlLXBhZ2VyL3RhYmxlLXBhZ2VyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBLd2FsaXRlaXRlbkxlZ2VuZGVDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Ld2FsaXRlaXRlbkxlZ2VuZGUva3dhbGl0ZWl0ZW4tbGVnZW5kZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgS3dhbGl0ZWl0ZW5MZWdlbmRlMjAwOENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi8vY29tcG9uZW50cy9Ld2FsaXRlaXRlbkxlZ2VuZGUyMDA4L2t3YWxpdGVpdGVuLWxlZ2VuZGUyMDA4LmNvbXBvbmVudFwiO1xyXG5cclxuLy8gR1cgUmVsYXRlZFxyXG5pbXBvcnQgeyBnd0hvbWVDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3ctaG9tZS9ndy1ob21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnd0JCUkdyaWRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3ctYmJyLWdyaWQvZ3ctYmJyLWdyaWQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3QkJSWm9la1VpdGdlYnJlaWRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3ctYmJyLXpvZWt1aXRnZWJyZWlkL2d3LWJici16b2VrdWl0Z2VicmVpZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZ3dEb2N1bWVudHNDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3ctZG9jdW1lbnRzL2d3LWRvY3VtZW50cy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZ3dEb3NzaWVyYmVoZWVyZGVyRWRpdENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL19HVy9ndy1kb3NzaWVyYmVoZWVyZGVyLWVkaXQvZ3ctZG9zc2llcmJlaGVlcmRlci1lZGl0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnd0d0bUVkaXRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3ctZ3RtLWVkaXQvZ3ctZ3RtLWVkaXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3R1RNR3JpZENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL19HVy9ndy1ndG0tZ3JpZC9ndy1ndG0tZ3JpZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZ3dHVE1ab2VrVWl0Z2VicmVpZENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL19HVy9ndy1ndG0tem9la3VpdGdlYnJlaWQvZ3ctZ3RtLXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnd0dWVEdyaWRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3ctZ3Z0LWdyaWQvZ3ctZ3Z0LWdyaWQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3R1ZUWm9la1VpdGdlYnJlaWRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3ctZ3Z0LXpvZWt1aXRnZWJyZWlkL2d3LWd2dC16b2VrdWl0Z2VicmVpZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZ3dLbGFudEVkaXRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3cta2xhbnQtZWRpdC9ndy1rbGFudC1lZGl0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnd0tsYW50R3JpZENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL19HVy9ndy1rbGFudC1ncmlkL2d3LWtsYW50LWdyaWQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3S2xhbnRXaWp6R3JpZENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL19HVy9ndy1rbGFudHdpanotZ3JpZC9ndy1rbGFudHdpanotZ3JpZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZ3dLbGFudFpvZWtVaXRnZWJyZWlkQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX0dXL2d3LWtsYW50LXpvZWt1aXRnZWJyZWlkL2d3LWtsYW50LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnd0tXR3JpZENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL19HVy9ndy1rdy1ncmlkL2d3LWt3LWdyaWQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3S1dab2VrVWl0Z2VicmVpZENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL19HVy9ndy1rdy16b2VrdWl0Z2VicmVpZC9ndy1rdy16b2VrdWl0Z2VicmVpZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZ3dUVkdyaWRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3ctdHYtZ3JpZC9ndy10di1ncmlkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnd1RWWm9la1VpdGdlYnJlaWRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3ctdHYtem9la3VpdGdlYnJlaWQvZ3ctdHYtem9la3VpdGdlYnJlaWQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3RW1haWxIaXN0b3JpZWtDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3ctZW1haWwtaGlzdG9yaWVrLWdyaWQvZ3ctZW1haWwtaGlzdG9yaWVrLWdyaWQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3VHZBZnNsdWl0UmVkZW5Db21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3ctdHYtZWRpdC9ndy10di1hZnNsdWl0LXJlZGVuL2d3LXR2LWFmc2x1aXQtcmVkZW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3VHZFdmFsdWF0aWVDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3ctdHYtZWRpdC9ndy10di1ldmFsdWF0aWUvZ3ctdHYtZXZhbHVhdGllLmNvbXBvbmVudFwiO1xyXG5cclxuXHJcbmltcG9ydCB7IE5neERhdGF0YWJsZU1vZHVsZSB9IGZyb20gXCJAc3dpbWxhbmUvbmd4LWRhdGF0YWJsZVwiO1xyXG5pbXBvcnQgeyBUcmVlTW9kdWxlIH0gZnJvbSBcImFuZ3VsYXItdHJlZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVG9hc3RyTW9kdWxlIH0gZnJvbSBcIm5neC10b2FzdHJcIjtcclxuXHJcbmltcG9ydCB7IFRvb2x0aXBNb2R1bGUsIEJzRGF0ZXBpY2tlck1vZHVsZSwgUG9wb3Zlck1vZHVsZSB9IGZyb20gXCJuZ3gtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IGRlZmluZUxvY2FsZSB9IGZyb20gXCJuZ3gtYm9vdHN0cmFwL2Nocm9ub3NcIjtcclxuaW1wb3J0IHsgbmxCZUxvY2FsZSB9IGZyb20gXCJuZ3gtYm9vdHN0cmFwL2xvY2FsZVwiO1xyXG5kZWZpbmVMb2NhbGUoXCJib290c3RyYXAtbG9jYWxlLW5sYmVcIiwgbmxCZUxvY2FsZSk7XHJcblxyXG5pbXBvcnQgeyBGaWxlVXBsb2FkTW9kdWxlIH0gZnJvbSBcIm5nMi1maWxlLXVwbG9hZFwiO1xyXG5cclxuaW1wb3J0IHsgVHJpbVZhbHVlQWNjZXNzb3JNb2R1bGUgfSBmcm9tIFwibmctdHJpbS12YWx1ZS1hY2Nlc3NvclwiO1xyXG5cclxuaW1wb3J0IHsgZ3dUdkVkaXRDb21wb25lbnQgfSBmcm9tIFwiLi9ndy10di1lZGl0L2d3LXR2LWVkaXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3RW1haWxDb21wb25lbnQgfSBmcm9tIFwiLi9ndy1lbWFpbC9ndy1lbWFpbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZ3dHdnRFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4vZ3ctZ3Z0LWVkaXQvZ3ctZ3Z0LWVkaXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3R3Z0U3R1ZGllQ29tcG9uZW50IH0gZnJvbSBcIi4vZ3ctZ3Z0LWVkaXQvZ3ctZ3Z0LXN0dWRpZS9ndy1ndnQtc3R1ZGllLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgZ3dFeHBvcnRDb21wb25lbnQgfSBmcm9tIFwiLi9ndy1leHBvcnQvZ3ctZXhwb3J0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnd0V4cG9ydEdyaWRDb21wb25lbnQgfSBmcm9tIFwiLi9ndy1leHBvcnQtZ3JpZC9ndy1leHBvcnQtZ3JpZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZ3dLd0VkaXRDb21wb25lbnQgfSBmcm9tIFwiLi9ndy1rdy1lZGl0L2d3LWt3LWVkaXQuY29tcG9uZW50XCI7XHJcblxyXG5cclxuaW1wb3J0IHsgSHR0cE1haWxTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtbWFpbC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IHNhZmVIdG1sIH0gZnJvbSBcIi4uL2ZldGNoZGF0YS9waXBlLXRlc3QubW9kdWxlXCI7XHJcbmltcG9ydCB7IEV2ZW50TGlzdGVuZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2V2ZW50LWxpc3RlbmVyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgZ3dQdWluTG1ycEVkaXRDb21wb25lbnQgfSBmcm9tIFwiLi9ndy1wdWluLWxtcnAtZWRpdC9ndy1wdWluLWxtcnAtZWRpdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZ3dNb2RhbEdyaWRDb21wb25lbnQgfSBmcm9tIFwiLi9ndy1tb2RhbC1ncmlkL2d3LW1vZGFsLWdyaWQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3TW9kYWxQdWluQ29tcG9uZW50IH0gZnJvbSBcIi4vZ3ctcHVpbi1sbXJwLWVkaXQvZ3ctbW9kYWwtcHVpbi9ndy1tb2RhbC1wdWluLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgSHR0cEludGVyY2VwdG9yU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLWludGVyY2VwdG9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSHR0cEJCUlNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC1iYnIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIdHRwRG9zc2llclNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC1kb3NzaWVyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSHR0cEZpbGVTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtZmlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEh0dHBHVE1TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtZ3RtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSHR0cEdWVFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC1ndnQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIdHRwS2xhbnRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAta2xhbnQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIdHRwS2xlaW5lV2VydmVuU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLWtsZWluZXdlcnZlbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEh0dHBUVlNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC10di5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEh0dHBUVlpvbmVTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtdHZ6b25lLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSHR0cFB1aW5TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtcHVpbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IExvY2Fsc3RvcmFnZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvbG9jYWxzdG9yYWdlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTG9hZGluZ0FuaW1hdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvbG9hZGluZy1hbmltYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHd0dyaWRSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vZ3ctZ3JpZC5yb3V0aW5nLm1vZHVsZVwiO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBGaWxlVXBsb2FkTW9kdWxlLFxyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgTmd4RGF0YXRhYmxlTW9kdWxlLFxyXG4gICAgICAgIFRyZWVNb2R1bGUsXHJcbiAgICAgICAgVHJpbVZhbHVlQWNjZXNzb3JNb2R1bGUsXHJcbiAgICAgICAgVG9vbHRpcE1vZHVsZS5mb3JSb290KCksXHJcbiAgICAgICAgQnNEYXRlcGlja2VyTW9kdWxlLmZvclJvb3QoKSxcclxuICAgICAgICBQb3BvdmVyTW9kdWxlLmZvclJvb3QoKSxcclxuXHJcbiAgICAgICAgR3dHcmlkUm91dGluZ01vZHVsZVxyXG4vLyBUb2FzdHJNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBSb3V0ZXJNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuXHJcbiAgICAgICAgLy8gR1cgUmVsYXRlZFxyXG5cclxuICAgICAgICBnd0hvbWVDb21wb25lbnQsXHJcbiAgICAgICAgZ3dCQlJHcmlkQ29tcG9uZW50LFxyXG4gICAgICAgIGd3QkJSWm9la1VpdGdlYnJlaWRDb21wb25lbnQsXHJcbiAgICAgICAgZ3dHVE1HcmlkQ29tcG9uZW50LFxyXG4gICAgICAgIGd3R1RNWm9la1VpdGdlYnJlaWRDb21wb25lbnQsXHJcbiAgICAgICAgZ3dHVlRHcmlkQ29tcG9uZW50LFxyXG4gICAgICAgIGd3R1ZUWm9la1VpdGdlYnJlaWRDb21wb25lbnQsXHJcbiAgICAgICAgZ3dLbGFudEdyaWRDb21wb25lbnQsXHJcbiAgICAgICAgZ3dLbGFudFdpanpHcmlkQ29tcG9uZW50LFxyXG4gICAgICAgIGd3S2xhbnRab2VrVWl0Z2VicmVpZENvbXBvbmVudCxcclxuICAgICAgICBnd0tXR3JpZENvbXBvbmVudCxcclxuICAgICAgICBnd0tXWm9la1VpdGdlYnJlaWRDb21wb25lbnQsXHJcbiAgICAgICAgZ3dUVkdyaWRDb21wb25lbnQsXHJcbiAgICAgICAgZ3dUVlpvZWtVaXRnZWJyZWlkQ29tcG9uZW50LFxyXG5cclxuXHJcbiAgICBdLFxyXG5cclxuXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogSHR0cEludGVyY2VwdG9yU2VydmljZSwgbXVsdGk6IHRydWUgfSxcclxuICAgICAgICBBdXRoZW50aWNhdGlvblNlcnZpY2UsXHJcbiAgICAgICAgSHR0cEJCUlNlcnZpY2UsXHJcbiAgICAgICAgSHR0cERvc3NpZXJTZXJ2aWNlLFxyXG4gICAgICAgIEh0dHBGaWxlU2VydmljZSxcclxuICAgICAgICBIdHRwR1RNU2VydmljZSxcclxuICAgICAgICBIdHRwR1ZUU2VydmljZSxcclxuICAgICAgICBIdHRwS2xhbnRTZXJ2aWNlLFxyXG4gICAgICAgIEh0dHBLbGVpbmVXZXJ2ZW5TZXJ2aWNlLFxyXG4gICAgICAgIEh0dHBUVlNlcnZpY2UsXHJcbiAgICAgICAgSHR0cFRWWm9uZVNlcnZpY2UsXHJcbiAgICAgICAgSHR0cFB1aW5TZXJ2aWNlLFxyXG4gICAgICAgIEh0dHBNYWlsU2VydmljZSxcclxuICAgICAgICBMb2NhbHN0b3JhZ2VTZXJ2aWNlLFxyXG4gICAgICAgIExvYWRpbmdBbmltYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIEV2ZW50TGlzdGVuZXJTZXJ2aWNlXHJcblxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIEd3R3JpZE1vZHVsZSB7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi1yb3V0ZXItbG9hZGVyL3NyYyEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctZ3JpZC5tb2R1bGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgIDxuYXYgKm5nSWY9XFxcIlBnSW5kZXggPT09IC0xICYmIHVzZVRvb2xiYXJcXFwiIGNsYXNzPVxcXCJuYXZiYXIgbmF2YmFyLWRlZmF1bHQgbmF2YmFyLWZpeGVkLWJvdHRvbVxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6I0NDQ0NDQztcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIiBzdHlsZT1cXFwibWFyZ2luOiAxMHB4IDBweCAyN3B4IDBweDtcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwidG9nZ2xlQnV0dG9uKDApXFxcIiBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6IC01cHg7XFxcIiBbbmdDbGFzc109XFxcImdldEJ1dHRvbkNsYXNzKGJ0bnNbMF0pXFxcIj5PbnRncmF2aW5nZW48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJzaW5nbGVCdXR0b24oMClcXFwiIFtuZ0NsYXNzXT1cXFwiZ2V0U2luZ2xlQ2xhc3MoYnRuc1swXSlcXFwiPiZuYnNwOzwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcInRvZ2dsZUJ1dHRvbigxKVxcXCIgW25nQ2xhc3NdPVxcXCJnZXRCdXR0b25DbGFzcyhidG5zWzFdKVxcXCI+VFY8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJzaW5nbGVCdXR0b24oMSlcXFwiIFtuZ0NsYXNzXT1cXFwiZ2V0U2luZ2xlQ2xhc3MoYnRuc1sxXSlcXFwiPiZuYnNwOzwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcInRvZ2dsZUJ1dHRvbigyKVxcXCIgW25nQ2xhc3NdPVxcXCJnZXRCdXR0b25DbGFzcyhidG5zWzJdKVxcXCI+R1RNPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwic2luZ2xlQnV0dG9uKDIpXFxcIiBbbmdDbGFzc109XFxcImdldFNpbmdsZUNsYXNzKGJ0bnNbMl0pXFxcIj4mbmJzcDs8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVCdXR0b24oMylcXFwiIFtuZ0NsYXNzXT1cXFwiZ2V0QnV0dG9uQ2xhc3MoYnRuc1szXSlcXFwiPkdWVDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcInNpbmdsZUJ1dHRvbigzKVxcXCIgW25nQ2xhc3NdPVxcXCJnZXRTaW5nbGVDbGFzcyhidG5zWzNdKVxcXCI+Jm5ic3A7PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwidG9nZ2xlQnV0dG9uKDQpXFxcIiBbbmdDbGFzc109XFxcImdldEJ1dHRvbkNsYXNzKGJ0bnNbNF0pXFxcIj5PbmxpbmUgSW5nZXZ1bGQ8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJzaW5nbGVCdXR0b24oNClcXFwiIFtuZ0NsYXNzXT1cXFwiZ2V0U2luZ2xlQ2xhc3MoYnRuc1s0XSlcXFwiPiZuYnNwOzwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcInRvZ2dsZUJ1dHRvbig1KVxcXCIgW25nQ2xhc3NdPVxcXCJnZXRCdXR0b25DbGFzcyhidG5zWzVdKVxcXCI+R2VnZXZlbnMgQWFucGFzc2VuPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwic2luZ2xlQnV0dG9uKDUpXFxcIiBbbmdDbGFzc109XFxcImdldFNpbmdsZUNsYXNzKGJ0bnNbNV0pXFxcIj4mbmJzcDs8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVCdXR0b24oNilcXFwiIFtuZ0NsYXNzXT1cXFwiZ2V0QnV0dG9uQ2xhc3MoYnRuc1s2XSlcXFwiPktsYW50ZW48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJzaW5nbGVCdXR0b24oNilcXFwiIFtuZ0NsYXNzXT1cXFwiZ2V0U2luZ2xlQ2xhc3MoYnRuc1s2XSlcXFwiPiZuYnNwOzwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcInRvZ2dsZUJ1dHRvbig3KVxcXCIgW25nQ2xhc3NdPVxcXCJnZXRCdXR0b25DbGFzcyhidG5zWzddKVxcXCI+QkJSPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwic2luZ2xlQnV0dG9uKDcpXFxcIiBbbmdDbGFzc109XFxcImdldFNpbmdsZUNsYXNzKGJ0bnNbN10pXFxcIj4mbmJzcDs8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVCdXR0b24oOClcXFwiIFtuZ0NsYXNzXT1cXFwiZ2V0QnV0dG9uQ2xhc3MoYnRuc1s4XSlcXFwiPlB1aW48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJzaW5nbGVCdXR0b24oOClcXFwiIFtuZ0NsYXNzXT1cXFwiZ2V0U2luZ2xlQ2xhc3MoYnRuc1s4XSlcXFwiPiZuYnNwOzwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcInRvZ2dsZUJ1dHRvbigtMSlcXFwiIFtuZ0NsYXNzXT1cXFwiZ2V0QnV0dG9uQ2xhc3MoYWxsQnV0dG9uc1Nob3duKVxcXCI+VG9vbiBBbGxlczwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L25hdj5cXHJcXG4gICAgPGRpdj5cXHJcXG4gICAgICAgIDxkaXYgW2hpZGRlbl09XFxcIiFidG5zWzBdXFxcIj5cXHJcXG4gICAgICAgICAgICA8aDQ+S2xlaW5lIFdlcmtlbjwvaDQ+XFxyXFxuICAgICAgICAgICAgPGd3LWt3LWdyaWQ+PC9ndy1rdy1ncmlkPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IFtoaWRkZW5dPVxcXCIhYnRuc1sxXVxcXCI+XFxyXFxuICAgICAgICAgICAgPGg0PlRlY2huaXNjaGUgVmVyc2xhZ2VuPC9oND5cXHJcXG4gICAgICAgICAgICA8Z3ctdHYtZ3JpZCBOaWV1d2VBYW52cmFnZW49XFxcInRydWVcXFwiIEV4dGVuZGVkU2VhcmNoPVxcXCJ0cnVlXFxcIiBbQWxsb3dEZWxldGVdPVxcXCJhbGxvd0RlbGV0ZVxcXCI+PC9ndy10di1ncmlkPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IFtoaWRkZW5dPVxcXCIhYnRuc1syXVxcXCI+XFxyXFxuICAgICAgICAgICAgPGg0Pkdyb25kIFRyYW5zcG9ydCBNZWxkaW5nZW48L2g0PlxcclxcbiAgICAgICAgICAgIDxndy1ndG0tZ3JpZCBOaWV1d2VBYW52cmFnZW49XFxcInRydWVcXFwiIEV4dGVuZGVkU2VhcmNoPVxcXCJ0cnVlXFxcIiBbQWxsb3dEZWxldGVdPVxcXCJhbGxvd0RlbGV0ZVxcXCI+PC9ndy1ndG0tZ3JpZD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBbaGlkZGVuXT1cXFwiIWJ0bnNbM11cXFwiPlxcclxcbiAgICAgICAgICAgIDxoND5Hcm9uZCBWZXJ6ZXQgVG9lbGF0aW5nZW48L2g0PlxcclxcbiAgICAgICAgICAgIDxndy1ndnQtZ3JpZCBOaWV1d2VBYW52cmFnZW49XFxcInRydWVcXFwiIEV4dGVuZGVkU2VhcmNoPVxcXCJ0cnVlXFxcIiBbQWxsb3dEZWxldGVdPVxcXCJhbGxvd0RlbGV0ZVxcXCI+PC9ndy1ndnQtZ3JpZD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBbaGlkZGVuXT1cXFwiIWJ0bnNbNF1cXFwiPlxcclxcbiAgICAgICAgICAgIDxoND5VcGxvYWQgb2YgT25saW5lIEluZ2V2dWxkIC0gVkEvT1Y8L2g0PlxcclxcbiAgICAgICAgICAgIDxib2RlbWJlaGVlcnJhcHBvcnQtZ3JpZCBpc0dXU3RhcnQ9XFxcInRydWVcXFwiIFR5cGU9XFxcIkJCUlxcXCIgW0ZpbGxUeXBlXT1cXFwiVVBMRmlsbFR5cGVcXFwiIFt0aXRsZV09XFxcIidCb2RlbWJlaGVlciByYXBwb3J0ZW46J1xcXCI+PC9ib2RlbWJlaGVlcnJhcHBvcnQtZ3JpZD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBbaGlkZGVuXT1cXFwiIWJ0bnNbNV1cXFwiPlxcclxcbiAgICAgICAgICAgIDxoND5WcmFhZyB0b3QgZ2VnZXZlbnNhYW5wYXNzaW5nZW48L2g0PlxcclxcbiAgICAgICAgICAgIDxndy1rbGFudHdpanotZ3JpZD48L2d3LWtsYW50d2lqei1ncmlkPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IFtoaWRkZW5dPVxcXCIhYnRuc1s2XVxcXCI+XFxyXFxuICAgICAgICAgICAgPGg0Pk5pZXV3ZSBLbGFudGVuPC9oND5cXHJcXG4gICAgICAgICAgICA8Z3cta2xhbnQtZ3JpZCBpc0dXU3RhcnQ9XFxcInRydWVcXFwiPjwvZ3cta2xhbnQtZ3JpZD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBbaGlkZGVuXT1cXFwiIWJ0bnNbN11cXFwiPlxcclxcbiAgICAgICAgICAgIDxoND5Cb2RlbSBCZWhlZXIgUmFwcG9ydGVuPC9oND5cXHJcXG4gICAgICAgICAgICA8Z3ctYmJyLWdyaWQgTmlldXdlQWFudnJhZ2VuPVxcXCJmYWxzZVxcXCIgRXh0ZW5kZWRTZWFyY2g9XFxcInRydWVcXFwiIFtBbGxvd0RlbGV0ZV09XFxcImFsbG93RGVsZXRlXFxcIj48L2d3LWJici1ncmlkPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IFtoaWRkZW5dPVxcXCIhYnRuc1s4XVxcXCI+XFxyXFxuICAgICAgICAgICAgPGg0PlB1aW48L2g0PlxcclxcbiAgICAgICAgICAgIFRvIEJlIERldmVsb3BlZFxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcblxcclxcblxcclxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ob21lL2d3LWhvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDYyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ3ctaG9tZS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctaG9tZS9ndy1ob21lLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDYyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImg0IHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcclxcbn1cXHJcXG4uYnRuLW9uIHtcXHJcXG4gICAgY29sb3I6ICNCMEQwMDEgIWltcG9ydGFudDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjZGRkICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTczNDIgIWltcG9ydGFudDtcXHJcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcbn1cXHJcXG4uYnRuLW9mZiB7XFxyXFxuICAgIGNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI2RkZCAhaW1wb3J0YW50O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDAwICFpbXBvcnRhbnQ7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXHJcXG59XFxyXFxuLmJ0bi1zaW5nbGUtb24ge1xcclxcbiAgICBjb2xvcjogI0IwRDAwMSAhaW1wb3J0YW50O1xcclxcbiAgICBib3JkZXItY29sb3I6ICNkZGQgIWltcG9ydGFudDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxNzM0MiAhaW1wb3J0YW50O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xcclxcbn1cXHJcXG4uYnRuLXNpbmdsZS1vZmYge1xcclxcbiAgICBjb2xvcjogIzAxNzM0MiAhaW1wb3J0YW50O1xcclxcbiAgICBib3JkZXItY29sb3I6ICNkZGQgIWltcG9ydGFudDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDAwMCAhaW1wb3J0YW50O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ob21lL2d3LWhvbWUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNjI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgR2VuZXJhbFNjcmlwdHMgfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9nZW5lcmFsLnNjcmlwdHNcIjtcclxuaW1wb3J0IHsgVG9hc3RyU2VydmljZSB9IGZyb20gXCJuZ3gtdG9hc3RyXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgSHR0cEJCUlNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaHR0cC1iYnIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBJQkJSU3RhdHVzLCBJQkJSU3RhdHVzR3JpZFJlY29yZCB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL2ludGVyZmFjZXMuc2NyaXB0c1wiO1xyXG5pbXBvcnQgeyBJU2dzQkJSSXRlbSB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL3Nnc0ludGVyZmFjZXMuc2NyaXB0c1wiO1xyXG5pbXBvcnQgeyBhcHBMYWJlbHMgfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9hcHBMYWJlbHNcIjtcclxuaW1wb3J0IHsgRGF0YXRhYmxlQ29tcG9uZW50IH0gZnJvbSBcIkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSwgVXNlclJvbGVzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFNnc0JCUlpvZWtWZWxkZW4gfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9zZ3NDbGFzc2VzLnNjcmlwdHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiZ3ctYmJyLWdyaWRcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2d3LWJici1ncmlkLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2d3LWJici1ncmlkLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBnd0JCUkdyaWRDb21wb25lbnQgZXh0ZW5kcyBHZW5lcmFsU2NyaXB0cyBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBhcHBMYWJlbHMgPSBhcHBMYWJlbHM7XHJcblxyXG5cclxuICAgIFN0YXR1c0Ryb3Bkb3duTGlzdDogSUJCUlN0YXR1c1tdID0gbnVsbDtcclxuICAgIFN0YXR1c0xpc3Q6IElTZ3NCQlJJdGVtW10gPSBudWxsO1xyXG4gICAgcm93czogSVNnc0JCUkl0ZW1bXSA9IG51bGw7XHJcbiAgICB0ZW1wOiBhbnlbXSA9IFtdO1xyXG4gICAgQFZpZXdDaGlsZChEYXRhdGFibGVDb21wb25lbnQpIHRhYmxlOiBEYXRhdGFibGVDb21wb25lbnQ7XHJcblxyXG4gICAgQElucHV0KCkgdGl0bGUgPSBcIlwiO1xyXG4gICAgU3RhdHVzSWQ6IG51bWJlciA9IDQ7XHJcbiAgICBpc0V4dGVuZGVkU2VhcmNoOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgZm9yTmlldXdlQWFudnJhZ2VuID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgnTmlldXdlQWFudnJhZ2VuJylcclxuICAgIGdldCBOaWV1d2VBYW52cmFnZW4oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9yTmlldXdlQWFudnJhZ2VuO1xyXG4gICAgfVxyXG4gICAgc2V0IE5pZXV3ZUFhbnZyYWdlbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuZm9yTmlldXdlQWFudnJhZ2VuID0gXCJcIiArIHZhbHVlICE9PSBcImZhbHNlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlU2VhcmNoID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgnRXh0ZW5kZWRTZWFyY2gnKVxyXG4gICAgZ2V0IEV4dGVuZGVkU2VhcmNoKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVzZVNlYXJjaDtcclxuICAgIH1cclxuICAgIHNldCBFeHRlbmRlZFNlYXJjaCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMudXNlU2VhcmNoID0gXCJcIiArIHZhbHVlICE9PSBcImZhbHNlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgY2FuRGVsZXRlID0gZmFsc2U7XHJcbiAgICBASW5wdXQoJ0FsbG93RGVsZXRlJylcclxuICAgIGdldCBBbGxvd0RlbGV0ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYW5EZWxldGU7XHJcbiAgICB9XHJcbiAgICBzZXQgQWxsb3dEZWxldGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmNhbkRlbGV0ZSA9IFwiXCIgKyB2YWx1ZSAhPT0gXCJmYWxzZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIFN0c0Zvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF90b2FzdHI6IFRvYXN0clNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBodHRwQkJSOiBIdHRwQkJSU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgYXV0aDogQXV0aGVudGljYXRpb25TZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIoX3RvYXN0cik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuU3RzRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBzdHM6IFstMV0sXHJcbiAgICAgICAgICAgIGJick51bW1lcjogW1wiXCJdLFxyXG4gICAgICAgICAgICBuYWFtOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIGNvZGU6IFtcIlwiXSxcclxuICAgICAgICAgICAgZ2VtOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIGFhbnZyYWFnRGF0dW06IFtcIlwiXSxcclxuICAgICAgICAgICAgc3RhdHVzRGF0dW06IFtcIlwiXSxcclxuICAgICAgICAgICAgaW5kaWVuaW5nc3dpanplOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIGdlZmFjdHVyZWVyZDogW1wiXCJdLFxyXG4gICAgICAgICAgICBiYnJTdHM6IFtcIlwiXSxcclxuICAgICAgICAgICAgaG9ldjogW1wiXCJdLFxyXG4gICAgICAgICAgICBzdGFydERhdHVtOiBbXCJcIl1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5odHRwQkJSLlN0YXR1c0RlZmluaXRpb25MaXN0KFwiQkJSXCIsIHRoaXMuTmlldXdlQWFudnJhZ2VuKS50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbigobHN0OiBJQkJSU3RhdHVzW10pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChsc3QgIT0gbnVsbCAmJiBsc3QgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TdGF0dXNEcm9wZG93bkxpc3QgPSBbLi4ubHN0XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuU3RzRm9ybS5wYXRjaFZhbHVlKHsgc3RzOiAodGhpcy5OaWV1d2VBYW52cmFnZW4gPyAnMCcgOiAnNCcpIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNDaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXR1c0NoYW5nZWQoKSB7XHJcbiAgICAgICAgdGhpcy5TdGF0dXNJZCA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5zdHMudmFsdWU7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLlN0c0Zvcm0uY29udHJvbHMuc3RzLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCItMVwiOiAvLyBTZWxlY3RlZXJcclxuICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wID0gW107XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjBcIjogLy8gTmlldXdlIEFhbnZyYWdlbiBcclxuICAgICAgICAgICAgICAgIHRoaXMuTmlldXdlQWFudnJhZ2VuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFN0YXR1c0xpc3QoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAvLyBTdGF0dXNcclxuICAgICAgICAgICAgICAgIHRoaXMuTmlldXdlQWFudnJhZ2VuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRTdGF0dXNMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFN0YXR1c0xpc3QoKSB7XHJcbiAgICAgICAgdGhpcy5odHRwQkJSLnNnc1N0YXR1c0xpc3QodGhpcy5TdGF0dXNJZCwgXCJUXCIpLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKChsc3Q6IElTZ3NCQlJJdGVtW10pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IGxzdDtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcCA9IFsuLi5sc3RdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckZvcm1GaWVsZHMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FeHRlbmRlZFNlYXJjaCh6b2VrVmVsZGVuOiBTZ3NCQlJab2VrVmVsZGVuKSB7XHJcbiAgICAgICAgdGhpcy5odHRwQkJSLmd3Wm9la0xpc3Qoem9la1ZlbGRlbikudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKGxzdDogSVNnc0JCUkl0ZW1bXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gbHN0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wID0gWy4uLmxzdF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyRm9ybUZpZWxkcygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckZvcm1GaWVsZHMoKSB7XHJcbiAgICAgICAgLy8gQ2xlYXIgYWxsIEZvcm0gVmFsdWVzIGV4Y2VwdCBzdHNcclxuICAgICAgICB0aGlzLlN0c0Zvcm0ucGF0Y2hWYWx1ZSh7XHJcbiAgICAgICAgICAgIGJick51bW1lcjogXCJcIixcclxuICAgICAgICAgICAgbmFhbTogXCJcIixcclxuICAgICAgICAgICAgY29kZTogXCJcIixcclxuICAgICAgICAgICAgZ2VtOiBcIlwiLFxyXG4gICAgICAgICAgICBhYW52cmFhZ0RhdHVtOiBcIlwiLFxyXG4gICAgICAgICAgICBzdGF0dXNEYXR1bTogXCJcIixcclxuICAgICAgICAgICAgaW5kaWVuaW5nc3dpanplOiBcIlwiLFxyXG4gICAgICAgICAgICBnZWZhY3R1cmVlcmQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGJiclN0czogXCJcIixcclxuICAgICAgICAgICAgaG9ldjogXCJcIixcclxuICAgICAgICAgICAgc3RhcnREYXR1bTogXCJcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlcigpIHtcclxuICAgICAgICBjb25zdCBiYnJOdW1tZXIgPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuYmJyTnVtbWVyLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IG5hYW0gPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMubmFhbS52YWx1ZTtcclxuICAgICAgICBjb25zdCBjb2RlID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLmNvZGUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZ2VtID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLmdlbS52YWx1ZTtcclxuICAgICAgICBjb25zdCBhYW52cmFhZ0RhdHVtID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLmFhbnZyYWFnRGF0dW0udmFsdWU7XHJcbiAgICAgICAgY29uc3Qgc3RhdHVzRGF0dW0gPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuc3RhdHVzRGF0dW0udmFsdWU7XHJcbiAgICAgICAgY29uc3QgaW5kaWVuaW5nc3dpanplID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLmluZGllbmluZ3N3aWp6ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCBnZWZhY3R1cmVlcmQgPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuZ2VmYWN0dXJlZXJkLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGJiclN0cyA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5iYnJTdHMudmFsdWU7XHJcbiAgICAgICAgY29uc3QgaG9ldiA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5ob2V2LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0RGF0dW0gPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuc3RhcnREYXR1bS52YWx1ZTtcclxuICAgICAgICBjb25zdCBkcCA9IG5ldyBEYXRlUGlwZShcImVuLVVTXCIpO1xyXG5cclxuICAgICAgICAvLyBmaWx0ZXIgb3VyIGRhdGFcclxuICAgICAgICBjb25zdCB0ZW1wID0gdGhpcy50ZW1wLmZpbHRlcigocm93OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdmFyIGFhbnZyYWFnRGF0dW1Bc1N0cmluZzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChhYW52cmFhZ0RhdHVtID4gXCJcIikgeyBhYW52cmFhZ0RhdHVtQXNTdHJpbmcgPSBkcC50cmFuc2Zvcm0ocm93LmFhbnZyYWFnRGF0dW0sIFwiZGQvTU0veXl5eVwiKTsgfVxyXG4gICAgICAgICAgICB2YXIgc3RhdHVzRGF0dW1Bc1N0cmluZzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChzdGF0dXNEYXR1bSA+IFwiXCIpIHsgc3RhdHVzRGF0dW1Bc1N0cmluZyA9IGRwLnRyYW5zZm9ybShyb3cuc3RhdHVzRGF0dW0sIFwiZGQvTU0veXl5eVwiKTsgfVxyXG4gICAgICAgICAgICB2YXIgc3RhcnREYXR1bUFzU3RyaW5nOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHN0YXJ0RGF0dW0gPiBcIlwiKSB7IHN0YXJ0RGF0dW1Bc1N0cmluZyA9IGRwLnRyYW5zZm9ybShyb3cuc3RhcnREYXR1bSwgXCJkZC9NTS95eXl5XCIpOyB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKCFiYnJOdW1tZXIgfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHJvdy5iYnJOdW1tZXIpICYmIHJvdy5iYnJOdW1tZXIudG9TdHJpbmcoKS5pbmRleE9mKGJick51bW1lcikgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghbmFhbSB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQocm93Lm5hYW0pICYmIHJvdy5uYWFtLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihuYWFtKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFjb2RlIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChyb3cuYmVyb2Vwc29yZ2FuaXNhdGllY29kZSkgJiYgcm93LmJlcm9lcHNvcmdhbmlzYXRpZWNvZGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKGNvZGUpICE9PSAtMSkpXHJcbiAgICAgICAgICAgICAgICAmJiAoIWdlbSB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQocm93LnBsYWF0cykgJiYgcm93LnBsYWF0cy50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZ2VtKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFhYW52cmFhZ0RhdHVtIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChhYW52cmFhZ0RhdHVtQXNTdHJpbmcpICYmIGFhbnZyYWFnRGF0dW1Bc1N0cmluZy5pbmRleE9mKGFhbnZyYWFnRGF0dW0pICE9PSAtMSkpXHJcbiAgICAgICAgICAgICAgICAmJiAoIXN0YXR1c0RhdHVtIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChzdGF0dXNEYXR1bUFzU3RyaW5nKSAmJiBzdGF0dXNEYXR1bUFzU3RyaW5nLmluZGV4T2Yoc3RhdHVzRGF0dW0pICE9PSAtMSkpXHJcbiAgICAgICAgICAgICAgICAmJiAoIWluZGllbmluZ3N3aWp6ZSB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQocm93LmluZGllbmluZ3N3aWp6ZSkgJiYgcm93LmluZGllbmluZ3N3aWp6ZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoaW5kaWVuaW5nc3dpanplKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFnZWZhY3R1cmVlcmQgfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHJvdy5nZWZhY3R1cmVlcmQpICYmIHJvdy5nZWZhY3R1cmVlcmQudG9Mb3dlckNhc2UoKS5pbmRleE9mKGdlZmFjdHVyZWVyZCkgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghYmJyU3RzIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChyb3cuc3RhdHVzKSAmJiByb3cuc3RhdHVzLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihiYnJTdHMpICE9PSAtMSkpXHJcbiAgICAgICAgICAgICAgICAmJiAoIWhvZXYgfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHJvdy5ob2V2ZWVsaGVpZCkgJiYgcm93LmhvZXZlZWxoZWlkLnRvU3RyaW5nKCkuaW5kZXhPZihob2V2KSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFzdGFydERhdHVtIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChzdGFydERhdHVtQXNTdHJpbmcpICYmIHN0YXJ0RGF0dW1Bc1N0cmluZy5pbmRleE9mKHN0YXJ0RGF0dW0pICE9PSAtMSkpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgcm93c1xyXG4gICAgICAgIHRoaXMucm93cyA9IHRlbXA7XHJcbiAgICAgICAgLy8gV2hlbmV2ZXIgdGhlIGZpbHRlciBjaGFuZ2VzLCBhbHdheXMgZ28gYmFjayB0byB0aGUgZmlyc3QgcGFnZVxyXG4gICAgICAgIHRoaXMudGFibGUub2Zmc2V0ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBvbkFjdGl2YXRlKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJkYmxjbGlja1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlua1RvQkJSKGV2ZW50LnJvd1tcImJick51bW1lclwiXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFJvd0NsYXNzKHJvdzogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIFwiaWJ0blwiO1xyXG4gICAgfVxyXG5cclxuICAgIGxpbmtUb0JCUihiYnJJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2JvZGVtYmVoZWVycmFwcG9ydC1kZXRhaWxcIl0sIHsgcXVlcnlQYXJhbXM6IHsgYmJySWQ6IGJicklkLCBiYnI6IFwiRmluYWxcIiB9IH0pOyAgLy8gPT4gR1dCZWhlZXIvQkJSRWRpdC5hc3B4P0JvZGVtYmVoZWVyUmFwcG9ydElEPXswfSAob3VkZSBHVylcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVCQlIoYmJySWQ6IG51bWJlcikge1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcblxyXG4gICAgVG9nZ2xlRXh0ZW5kZWRTZWFyY2goKSB7XHJcbiAgICAgICAgdGhpcy5pc0V4dGVuZGVkU2VhcmNoID0gIXRoaXMuaXNFeHRlbmRlZFNlYXJjaDtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItcm91dGVyLWxvYWRlci9zcmMhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWJici1ncmlkL2d3LWJici1ncmlkLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybSBbZm9ybUdyb3VwXT1cXFwiU3RzRm9ybVxcXCIgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZCBwYWRkaW5nVG9wMTBweFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgKm5nSWY9XFxcInVzZVNlYXJjaFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tM1xcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIChjbGljayk9XFxcIlRvZ2dsZUV4dGVuZGVkU2VhcmNoKClcXFwiPnt7IGlzRXh0ZW5kZWRTZWFyY2ggPyAnRW5rZWx2b3VkaWcgem9la2VuJyA6ICdHZWF2YW5jZWVyZCB6b2VrZW4nIH19PC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgKm5nSWY9XFxcInVzZVNlYXJjaCAmJiAhaXNFeHRlbmRlZFNlYXJjaFxcXCIgY2xhc3M9XFxcImNvbC1zbS05XFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcInBhZGRpbmdSaWdodDEwcHhcXFwiPkZpbHRlciBzdGF0dXM8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxzZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVxcXCJzdHNcXFwiIERvdHRlZEJvcmRlckJlbG93IChjaGFuZ2UpPVxcXCJzdGF0dXNDaGFuZ2VkKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCItMVxcXCI+U2VsZWN0ZWVyPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgc3RzIG9mIFN0YXR1c0Ryb3Bkb3duTGlzdFxcXCIgW3ZhbHVlXT1cXFwic3RzLmJiclN0YXR1c0lEXFxcIiBbaW5uZXJIVE1MXT1cXFwic3RzLnN0YXR1c1xcXCI+PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgKm5nSWY9XFxcInVzZVNlYXJjaCAmJiBpc0V4dGVuZGVkU2VhcmNoXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMlxcXCI+PGd3LWJici16b2VrdWl0Z2VicmVpZCAoc2VhcmNoaW5nKT1cXFwib25FeHRlbmRlZFNlYXJjaCgkZXZlbnQpXFxcIj48L2d3LWJici16b2VrdWl0Z2VicmVpZD48L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIk5neFRhYmxlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHAgKm5nSWY9XFxcImZvck5pZXV3ZUFhbnZyYWdlbiA9PSBmYWxzZVxcXCIgY2xhc3M9XFxcInB1bGwtbGVmdCBOZ3hUaXRsZVxcXCI+e3t0aXRsZX19PC9wPlxcclxcbiAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZSAjdGFibGVcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJvb3RzdHJhcFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFjdGl2YXRlKT1cXFwib25BY3RpdmF0ZSgkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm93c109XFxcInJvd3NcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb2x1bW5Nb2RlXT1cXFwiJ2ZsZXgnXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaGVhZGVySGVpZ2h0XT1cXFwiNTBcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb290ZXJIZWlnaHRdPVxcXCI0MFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xpbWl0XT1cXFwiYXBwTGFiZWxzLnRhYmxlVmlld1Jvd3NcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3dDbGFzc109XFxcImdldFJvd0NsYXNzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY3NzQ2xhc3Nlc109XFxcImFwcExhYmVscy5pY29uc0Nzc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21lc3NhZ2VzXT1cXFwie3RvdGFsTWVzc2FnZTogYXBwTGFiZWxzLlRvdGFsLnRvTG93ZXJDYXNlKCksIGVtcHR5TWVzc2FnZTogYXBwTGFiZWxzLk5vRGF0YVRvRGlzcGxheX1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzb3J0c109XFxcIlt7cHJvcDonYmJyTnVtbWVyJywgZGlyOidkZXNjJyB9XVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jvd0hlaWdodF09XFxcIidhdXRvJ1xcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMVxcXCIgbmFtZT1cXFwibmlldEdvZWRHZWtldXJkXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtcm93PVxcXCJyb3dcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XFxcImNvbG9yOiByZWRcXFwiPjxiPnt7cm93WyduaWV0R29lZEdla2V1cmQnXX19PC9iPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBwcm9wPVxcXCJiYnJOdW1tZXJcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJMYWJlbFxcXCI+TnVtbWVyPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImJick51bW1lclxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtcm93PVxcXCJyb3dcXFwiIGxldC12YWx1ZT1cXFwidmFsdWVcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcInBkZkxpbmtcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvYm9kZW1iZWhlZXJyYXBwb3J0LWRldGFpbCddXFxcIiBbcXVlcnlQYXJhbXNdPVxcXCJ7YmJyOidGaW5hbCcsYmJySWQ6cm93WydiYnJOdW1tZXInXX1cXFwiPjxsYWJlbCBjbGFzcz1cXFwidGV4dFxcXCI+e3tyb3dbJ2Jick51bW1lciddfX08L2xhYmVsPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIzXFxcIiBwcm9wPVxcXCJuYWFtXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyTGFiZWxcXFwiPktsYW50PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIm5hYW1cXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3ZhbHVlfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMVxcXCIgcHJvcD1cXFwiYmVyb2Vwc29yZ2FuaXNhdGllY29kZVxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckxhYmVsXFxcIj5Db2RlPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJjb2RlXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1yb3c9XFxcInJvd1xcXCIgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3ZhbHVlfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMlxcXCIgcHJvcD1cXFwicGxhYXRzXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyTGFiZWxcXFwiPkdlbWVlbnRlPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJnZW1cXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXJvdz1cXFwicm93XFxcIiBsZXQtdmFsdWU9XFxcInZhbHVlXFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7dmFsdWV9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBuYW1lPVxcXCJhYW52cmFhZ0RhdHVtXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCIgTmd4RmlsdGVyTGFiZWxcXFwiPkRhdHVtIGluPC9zcGFuPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImFhbnZyYWFnRGF0dW1cXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3ZhbHVlIHwgZGF0ZTpcXFwiZGQvTU0veXl5eVxcXCJ9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIG5hbWU9XFxcInN0YXR1c0RhdHVtXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCIgTmd4RmlsdGVyTGFiZWxcXFwiPkRhdHVtIHVpdDwvc3Bhbj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJzdGF0dXNEYXR1bVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtdmFsdWU9XFxcInZhbHVlXFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dmFsdWUgfCBkYXRlOlxcXCJkZC9NTS95eXl5XFxcIn19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMVxcXCIgcHJvcD1cXFwiaW5kaWVuaW5nc3dpanplXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCIgTmd4RmlsdGVyTGFiZWxcXFwiPkFhbnZ1bHBsYW48L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiaW5kaWVuaW5nc3dpanplXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIHByb3A9XFxcImhvZXZlZWxoZWlkXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyTGFiZWxcXFwiPkhvZXZlZWxoZWlkPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImhvZXZcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXJvdz1cXFwicm93XFxcIiBsZXQtdmFsdWU9XFxcInZhbHVlXFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7cm93Wydob2V2ZWVsaGVpZCddfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMVxcXCIgcHJvcD1cXFwiZ2VmYWN0dXJlZXJkXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCIgTmd4RmlsdGVyTGFiZWxcXFwiPkdlZmFjdC48L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiZ2VmYWN0dXJlZXJkXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjNcXFwiIHByb3A9XFxcInN0YXR1c1xcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiIE5neEZpbHRlckxhYmVsXFxcIj5CQlIgU3RhdHVzPC9zcGFuPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImJiclN0c1xcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBuYW1lPVxcXCJzdGFydERhdHVtR3JvbmR3ZXJrZW5cXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIiBOZ3hGaWx0ZXJMYWJlbFxcXCI+U3RhcnQgRGF0dW08L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwic3RhcnREYXR1bVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtdmFsdWU9XFxcInZhbHVlXFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dmFsdWUgfCBkYXRlOlxcXCJkZC9NTS95eXl5XFxcIn19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMVxcXCIgbmFtZT1cXFwiRGV0YWlsXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtcm93PVxcXCJyb3dcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uLy4uLy4uLy4uL2ltYWdlcy9pY29fZWRpdHJlY29yZC5naWZcIikgKyBcIlxcXCIgY2xhc3M9XFxcImlidG5cXFwiIChjbGljayk9XFxcImxpbmtUb0JCUihyb3dbJ2Jick51bW1lciddKVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiAqbmdJZj1cXFwiY2FuRGVsZXRlXFxcIiBbZmxleEdyb3ddPVxcXCIxXFxcIiBuYW1lPVxcXCJEZXRhaWxcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1yb3c9XFxcInJvd1xcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vLi4vLi4vLi4vaW1hZ2VzL2ljb19kZWxldGUucG5nXCIpICsgXCJcXFwiIGNsYXNzPVxcXCJpYnRuXFxcIiAoY2xpY2spPVxcXCJkZWxldGVCQlIocm93WydiYnJOdW1tZXInXSlcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Zvcm0+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWJici1ncmlkL2d3LWJici1ncmlkLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA2Mjdcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2d3LWJici1ncmlkLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1iYnItZ3JpZC9ndy1iYnItZ3JpZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2Mjhcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1iYnItZ3JpZC9ndy1iYnItZ3JpZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2Mjlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24sIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBUb2FzdHJTZXJ2aWNlIH0gZnJvbSBcIm5neC10b2FzdHJcIjtcclxuXHJcbmltcG9ydCB7IGFwcExhYmVscyB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL2FwcExhYmVsc1wiO1xyXG5pbXBvcnQgeyBHZW5lcmFsU2NyaXB0cyB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL2dlbmVyYWwuc2NyaXB0c1wiO1xyXG5cclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHsgSHR0cEJCUlNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaHR0cC1iYnIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIdHRwRG9zc2llclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaHR0cC1kb3NzaWVyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSHR0cEtsYW50U2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9odHRwLWtsYW50LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSHR0cFRWU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9odHRwLXR2LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBCc0xvY2FsZVNlcnZpY2UgfSBmcm9tIFwibmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyXCI7XHJcbmltcG9ydCB7IFNnc0JCUlpvZWtWZWxkZW4gfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9zZ3NDbGFzc2VzLnNjcmlwdHNcIjtcclxuaW1wb3J0IHsgSVNnc0tsYW50Q29tYm9MaXN0SXRlbSwgSVNnc0Rvc3NpZXJDb21ib0xpc3RJdGVtLCBJU2dzQmVzdEFhcmRMaXN0SXRlbSB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL3Nnc0ludGVyZmFjZXMuc2NyaXB0c1wiO1xyXG5pbXBvcnQgeyBJVFZTdGF0dXNEZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvaW50ZXJmYWNlcy5zY3JpcHRzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImd3LWJici16b2VrdWl0Z2VicmVpZFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZ3ctYmJyLXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2d3LWJici16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuY3NzJyldLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgZ3dCQlJab2VrVWl0Z2VicmVpZENvbXBvbmVudCBleHRlbmRzIEdlbmVyYWxTY3JpcHRzIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGFwcExhYmVscyA9IGFwcExhYmVscztcclxuICAgIHprRm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICAgIEtsYW50TGlzdEl0ZW1zOiBJU2dzS2xhbnRDb21ib0xpc3RJdGVtW10gPSBudWxsO1xyXG4gICAgRG9zc2llckJlaGVlcmRlckxpc3RJdGVtczogSVNnc0Rvc3NpZXJDb21ib0xpc3RJdGVtW10gPSBudWxsO1xyXG4gICAgQmVzdGVtbWluZ3NhYXJkTGlzdEl0ZW1zOiBJU2dzQmVzdEFhcmRMaXN0SXRlbVtdID0gbnVsbDtcclxuICAgIFN0YXR1c0xpc3RJdGVtczogSVRWU3RhdHVzRGVmaW5pdGlvbltdID0gbnVsbDtcclxuXHJcbiAgICB6b2VrVmVsZGVuOiBTZ3NCQlJab2VrVmVsZGVuID0gbnVsbDtcclxuICAgIEBPdXRwdXQoKSBzZWFyY2hpbmc6IEV2ZW50RW1pdHRlcjxTZ3NCQlJab2VrVmVsZGVuPiA9IG5ldyBFdmVudEVtaXR0ZXI8U2dzQkJSWm9la1ZlbGRlbj4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF90b2FzdHI6IFRvYXN0clNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGZiOiBGb3JtQnVpbGRlcixcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9sb2NhbGVTZXJ2aWNlOiBCc0xvY2FsZVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBodHRwQmJyOiBIdHRwQkJSU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGh0dHBEb3NzaWVyOiBIdHRwRG9zc2llclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBodHRwS2xhbnQ6IEh0dHBLbGFudFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBodHRwVFY6IEh0dHBUVlNlcnZpY2UsXHJcbiAgICAgICAgQEluamVjdChcIkJBU0VfVVJMXCIpIHByaXZhdGUgcmVhZG9ubHkgX2Jhc2VVcmw6IHN0cmluZyxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9zYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xyXG4gICAgICAgIHN1cGVyKF90b2FzdHIpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE5lZWRlZCBjb25maWd1cmF0aW9uIGZvciB0aGUgYnNEYXRlcGlja2VyIHRvIGFjY2VwdCBkZC9NTS95eXl5IGZvcm1hdHRpbmdcclxuICAgICAgICB0aGlzLl9sb2NhbGVTZXJ2aWNlLnVzZShcImJvb3RzdHJhcC1sb2NhbGUtbmxiZVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy56a0Zvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgICAgICAgQ29kZTogW1wiXCJdLFxyXG4gICAgICAgICAgICBUdklkOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIEtsYW50SWQ6IFtcIi0xXCJdLFxyXG4gICAgICAgICAgICBEb3NzaWVyQmVoZWVyZGVySWQ6IFtcIi0xXCJdLFxyXG4gICAgICAgICAgICBTdGF0dXNJZDogW1wiLTFcIl0sXHJcbiAgICAgICAgICAgIEJlc3RlbW1pbmdzYWFyZElkOiBbXCItMVwiXSxcclxuICAgICAgICAgICAgR2VmYWN0dXJlZXJkOiBbXCItMVwiXSxcclxuICAgICAgICAgICAgU3RyYWF0OiBbXCJcIl0sXHJcbiAgICAgICAgICAgIFBvc3Rjb2RlOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIEdlbWVlbnRlOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIExhbWJlcnRYOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIExhbWJlcnRZOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIExhbWJlcnRSYW5nZTogW1wiLTFcIl0sXHJcbiAgICAgICAgICAgIFZlcnRyZWtTdHJhYXQ6IFtcIlwiXSxcclxuICAgICAgICAgICAgVmVydHJla0dlbWVlbnRlOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIGRhdFZhbjogW1wiXCJdLFxyXG4gICAgICAgICAgICBkYXRUb3Q6IFtcIlwiXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWREcm9wZG93bnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkRHJvcGRvd25zKCkge1xyXG4gICAgICAgIHRoaXMuaHR0cEtsYW50LnNnc0NvbWJvTGlzdEl0ZW1zKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgobHN0OiBJU2dzS2xhbnRDb21ib0xpc3RJdGVtW10pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChsc3QgIT0gbnVsbCAmJiBsc3QgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5LbGFudExpc3RJdGVtcyA9IFsuLi5sc3RdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5odHRwRG9zc2llci5zZ3NDb21ib0xpc3RJdGVtcygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGxzdDogSVNnc0Rvc3NpZXJDb21ib0xpc3RJdGVtW10pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChsc3QgIT0gbnVsbCAmJiBsc3QgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Eb3NzaWVyQmVoZWVyZGVyTGlzdEl0ZW1zID0gWy4uLmxzdF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmh0dHBCYnIuc2dzQmVzdGVtbWluZ3NhYXJkTGlzdEl0ZW1zKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgobHN0OiBJU2dzQmVzdEFhcmRMaXN0SXRlbVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobHN0ICE9IG51bGwgJiYgbHN0ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQmVzdGVtbWluZ3NhYXJkTGlzdEl0ZW1zID0gWy4uLmxzdF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmh0dHBUVi5TdGF0dXNEZWZpbml0aW9uTGlzdChmYWxzZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgobHN0OiBJVFZTdGF0dXNEZWZpbml0aW9uW10pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChsc3QgIT0gbnVsbCAmJiBsc3QgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TdGF0dXNMaXN0SXRlbXMgPSBbLi4ubHN0XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmFpc2VTZWFyY2goKSB7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuID0gbmV3IFNnc0JCUlpvZWtWZWxkZW4oKTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4uY29kZSA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLkNvZGUudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLnR2SWQgPSB0aGlzLnprRm9ybS5jb250cm9scy5UdklkLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5rbGFudElkID0gdGhpcy56a0Zvcm0uY29udHJvbHMuS2xhbnRJZC52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4uZG9zc2llckJlaGVlcmRlcklkID0gdGhpcy56a0Zvcm0uY29udHJvbHMuRG9zc2llckJlaGVlcmRlcklkLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5zdGF0dXNJZCA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLlN0YXR1c0lkLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5iZXN0ZW1taW5nc2FhcmRJZCA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLkJlc3RlbW1pbmdzYWFyZElkLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5nZWZhY3R1cmVlcmQgPSB0aGlzLnprRm9ybS5jb250cm9scy5HZWZhY3R1cmVlcmQudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLnN0cmFhdCA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLlN0cmFhdC52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4ucG9zdGNvZGUgPSB0aGlzLnprRm9ybS5jb250cm9scy5Qb3N0Y29kZS52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4uZ2VtZWVudGUgPSB0aGlzLnprRm9ybS5jb250cm9scy5HZW1lZW50ZS52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4ubGFtYmVydFggPSB0aGlzLnprRm9ybS5jb250cm9scy5MYW1iZXJ0WC52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4ubGFtYmVydFkgPSB0aGlzLnprRm9ybS5jb250cm9scy5MYW1iZXJ0WS52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4ubGFtYmVydFJhbmdlID0gdGhpcy56a0Zvcm0uY29udHJvbHMuTGFtYmVydFJhbmdlLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi52ZXJ0cmVrU3RyYWF0ID0gdGhpcy56a0Zvcm0uY29udHJvbHMuVmVydHJla1N0cmFhdC52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4udmVydHJla0dlbWVlbnRlID0gdGhpcy56a0Zvcm0uY29udHJvbHMuVmVydHJla0dlbWVlbnRlLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5kYXRWYW4gPSB0aGlzLnprRm9ybS5jb250cm9scy5kYXRWYW4udmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmRhdFRvdCA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLmRhdFRvdC52YWx1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWFyY2hpbmcuZW1pdCh0aGlzLnpvZWtWZWxkZW4pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi1yb3V0ZXItbG9hZGVyL3NyYyEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctYmJyLXpvZWt1aXRnZWJyZWlkL2d3LWJici16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gW2Zvcm1Hcm91cF09XFxcInprRm9ybVxcXCIgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZCBwYWRkaW5nVG9wMzBweFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJ0eHRDb2RlXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+Q29kZTwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwidHh0Q29kZVxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJDb2RlXFxcIiBBbGxvd09ubHlOdW1iZXJzIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJ0dnRUdklkXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+VFYgTnVtbWVyOjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwidHh0VHZJZFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJUdklkXFxcIiBBbGxvd09ubHlOdW1iZXJzIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJkZGxLbGFudFxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPktsYW50PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93biBjb2wtc20tNFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XFxcImRkbEtsYW50XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIktsYW50SWRcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJ3aWR0aDEwMHBlcmNlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiLTFcXFwiPlNlbGVjdGVlcjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCBrbGFudCBvZiBLbGFudExpc3RJdGVtc1xcXCIgW3ZhbHVlXT1cXFwia2xhbnQua2xhbnRJRFxcXCIgW2lubmVySFRNTF09XFxcImtsYW50Lm5hYW1cXFwiPjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwiZGRsRG9zc2llckJlaGVlcmRlclxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPkRvc3NpZXJCZWhlZXJkZXI8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duIGNvbC1zbS00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cXFwiZGRsRG9zc2llckJlaGVlcmRlclxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJEb3NzaWVyQmVoZWVyZGVySWRcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJ3aWR0aDEwMHBlcmNlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiLTFcXFwiPlNlbGVjdGVlcjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCBkb3NzYmVoIG9mIERvc3NpZXJCZWhlZXJkZXJMaXN0SXRlbXNcXFwiIFt2YWx1ZV09XFxcImRvc3NiZWguZG9zc2llckJlaGVlcmRlcklEXFxcIiBbaW5uZXJIVE1MXT1cXFwiZG9zc2JlaC5uYWFtXFxcIj48L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcImRkbFN0YXR1c1xcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPlN0YXR1czwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24gY29sLXNtLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJkZGxTdGF0dXNcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiU3RhdHVzSWRcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJ3aWR0aDEwMHBlcmNlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiLTFcXFwiPlNlbGVjdGVlcjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCBzdHMgb2YgU3RhdHVzTGlzdEl0ZW1zXFxcIiBbdmFsdWVdPVxcXCJzdHMudHZTdGF0dXNJRFxcXCIgW2lubmVySFRNTF09XFxcInN0cy5zdGF0dXNcXFwiPjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwiZGRsQmVzdGVtbWluZ3NhYXJkXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+QmVzdGVtbWluZ3NhYXJkPC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93biBjb2wtc20tNFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XFxcImRkbEJlc3RlbW1pbmdzYWFyZFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJCZXN0ZW1taW5nc2FhcmRJZFxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcIndpZHRoMTAwcGVyY2VudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCItMVxcXCI+U2VsZWN0ZWVyPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IGFhcmQgb2YgQmVzdGVtbWluZ3NhYXJkTGlzdEl0ZW1zXFxcIiBbdmFsdWVdPVxcXCJhYXJkLmJlc3RlbW1pbmdzQWFyZElkXFxcIiBbaW5uZXJIVE1MXT1cXFwiYWFyZC5iZXN0ZW1taW5nc0FhcmRcXFwiPjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwidHh0U3RyYWF0XFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+QmVzdGVtbWluZyBTdHJhYXQ8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInR4dFN0cmFhdFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJTdHJhYXRcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJkZGxHZWZhY3R1cmVlcmRcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5HZWZhY3R1cmVlcmQ8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duIGNvbC1zbS00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cXFwiZGRsR2VmYWN0dXJlZXJkXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkdlZmFjdHVyZWVyZFxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcIndpZHRoMTAwcGVyY2VudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCItMVxcXCI+U2VsZWN0ZWVyPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCIxXFxcIj5KYTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiMFxcXCI+TmVlPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJ0eHRQb3N0Y29kZVxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPkJlc3RlbW1pbmcgUG9zdGNvZGU6PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0eHRQb3N0Y29kZVxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJQb3N0Y29kZVxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcInR4dEdlbWVlbnRlXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+QmVzdGVtbWluZyBHZW1lZW50ZTo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInR4dEdlbWVlbnRlXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkdlbWVlbnRlXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwidHh0TGFtYmVydFhcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5CZXN0ZW1taW5nIExhbWJlcnQgWCAoaW4gbSk8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInR4dExhbWJlcnRYXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkxhbWJlcnRYXFxcIiBBbGxvd09ubHlOdW1iZXJzIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJkZGxMYW1iZXJ0UmFuZ2VcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5MYW1iZXJ0IFJhbmdlOjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24gY29sLXNtLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJkZGxMYW1iZXJ0UmFuZ2VcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiTGFtYmVydFJhbmdlXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwid2lkdGgxMDBwZXJjZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIi0xXFxcIj5TZWxlY3RlZXI8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIjFcXFwiPjEga208L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIjNcXFwiPjMga208L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIjVcXFwiPjUga208L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIjEwXFxcIj4xMCBrbTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwidHh0TGFtYmVydFhcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5CZXN0ZW1taW5nIExhbWJlcnQgWSAoaW4gbSk8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInR4dExhbWJlcnRZXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkxhbWJlcnRZXFxcIiBBbGxvd09ubHlOdW1iZXJzIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj4mbmJzcDs8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwidHh0VlN0cmFhdFxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPlRWIFN0cmFhdDo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInR4dFZTdHJhYXRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiVmVydHJla1N0cmFhdFxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcInR4dFZHZW1lZW50ZVxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPlRWIEdlbWVlbnRlOjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwidHh0VkdlbWVlbnRlXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIlZlcnRyZWtHZW1lZW50ZVxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcImR0ZVZhblxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPkRhdHVtIFZhbjo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcImR0ZVZhblxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJkYXRWYW5cXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgbmctdHJpbS1pZ25vcmVcXFwiIGJzRGF0ZXBpY2tlciBwbGFjZW1lbnQ9XFxcInRvcCBsZWZ0XFxcIiBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCIgRG90dGVkQm9yZGVyQmVsb3cgW2JzQ29uZmlnXT1cXFwieyBzaG93V2Vla051bWJlcnM6IGZhbHNlIH1cXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJkdGVUb3RcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5EYXR1bSBUb3Q6PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJkdGVUb3RcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiZGF0VG90XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIG5nLXRyaW0taWdub3JlXFxcIiBic0RhdGVwaWNrZXIgcGxhY2VtZW50PVxcXCJ0b3AgbGVmdFxcXCIgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiIERvdHRlZEJvcmRlckJlbG93IFtic0NvbmZpZ109XFxcInsgc2hvd1dlZWtOdW1iZXJzOiBmYWxzZSB9XFxcIj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNCBjb2wtc20tb2Zmc2V0LThcXFwiPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJyYWlzZVNlYXJjaCgpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIj57e2FwcExhYmVscy5TZW5kfX08L2J1dHRvbj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Zvcm0+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWJici16b2VrdWl0Z2VicmVpZC9ndy1iYnItem9la3VpdGdlYnJlaWQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDYzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ3ctYmJyLXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1iYnItem9la3VpdGdlYnJlaWQvZ3ctYmJyLXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDYzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWJici16b2VrdWl0Z2VicmVpZC9ndy1iYnItem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNjMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgR2VuZXJhbFNjcmlwdHMgfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9nZW5lcmFsLnNjcmlwdHNcIjtcclxuaW1wb3J0IHsgVG9hc3RyU2VydmljZSB9IGZyb20gXCJuZ3gtdG9hc3RyXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgSHR0cFRWU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9odHRwLXR2LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSHR0cEdUTVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaHR0cC1ndG0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBJU2dzVFZCeVN0YXR1cywgSVNnc0dUTVN0YXR1c0xpc3RJdGVtLCBJU2dzR1RNU3RhdHVzIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvc2dzSW50ZXJmYWNlcy5zY3JpcHRzXCI7XHJcbmltcG9ydCB7IFNnc1RWWm9la1ZlbGRlbiwgU2dzR1RNWm9la1ZlbGRlbiB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL3Nnc0NsYXNzZXMuc2NyaXB0c1wiO1xyXG5pbXBvcnQgeyBhcHBMYWJlbHMgfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9hcHBMYWJlbHNcIjtcclxuaW1wb3J0IHsgRGF0YXRhYmxlQ29tcG9uZW50IH0gZnJvbSBcIkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBJVFZTdGF0dXNEZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvaW50ZXJmYWNlcy5zY3JpcHRzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImd3LWd0bS1ncmlkXCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ndy1ndG0tZ3JpZC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9ndy1ndG0tZ3JpZC5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgZ3dHVE1HcmlkQ29tcG9uZW50IGV4dGVuZHMgR2VuZXJhbFNjcmlwdHMgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgYXBwTGFiZWxzID0gYXBwTGFiZWxzO1xyXG5cclxuICAgIFN0YXR1c0Ryb3Bkb3duTGlzdDogSVNnc0dUTVN0YXR1c0xpc3RJdGVtW10gPSBudWxsO1xyXG4gICAgU3RhdHVzTGlzdDogSVNnc0dUTVN0YXR1c1tdID0gbnVsbDtcclxuICAgIHJvd3M6IElTZ3NHVE1TdGF0dXNbXSA9IG51bGw7XHJcbiAgICB0ZW1wOiBhbnlbXSA9IFtdO1xyXG4gICAgQFZpZXdDaGlsZChEYXRhdGFibGVDb21wb25lbnQpIHRhYmxlOiBEYXRhdGFibGVDb21wb25lbnQ7XHJcblxyXG4gICAgQElucHV0KCkgdGl0bGUgPSBcIlwiO1xyXG4gICAgU3RhdHVzSWQ6IG51bWJlciA9IC0xO1xyXG4gICAgaXNFeHRlbmRlZFNlYXJjaDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGZvck5pZXV3ZUFhbnZyYWdlbiA9IHRydWU7XHJcbiAgICBASW5wdXQoJ05pZXV3ZUFhbnZyYWdlbicpXHJcbiAgICBnZXQgTmlldXdlQWFudnJhZ2VuKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvck5pZXV3ZUFhbnZyYWdlbjtcclxuICAgIH1cclxuICAgIHNldCBOaWV1d2VBYW52cmFnZW4odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmZvck5pZXV3ZUFhbnZyYWdlbiA9IFwiXCIgKyB2YWx1ZSAhPT0gXCJmYWxzZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZVNlYXJjaCA9IHRydWU7XHJcbiAgICBASW5wdXQoJ0V4dGVuZGVkU2VhcmNoJylcclxuICAgIGdldCBFeHRlbmRlZFNlYXJjaCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51c2VTZWFyY2g7XHJcbiAgICB9XHJcbiAgICBzZXQgRXh0ZW5kZWRTZWFyY2godmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnVzZVNlYXJjaCA9IFwiXCIgKyB2YWx1ZSAhPT0gXCJmYWxzZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbkRlbGV0ZSA9IGZhbHNlO1xyXG4gICAgQElucHV0KCdBbGxvd0RlbGV0ZScpXHJcbiAgICBnZXQgQWxsb3dEZWxldGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FuRGVsZXRlO1xyXG4gICAgfVxyXG4gICAgc2V0IEFsbG93RGVsZXRlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5jYW5EZWxldGUgPSBcIlwiICsgdmFsdWUgIT09IFwiZmFsc2VcIjtcclxuICAgIH1cclxuXHJcbiAgICBTdHNGb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfdG9hc3RyOiBUb2FzdHJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgaHR0cEdUTTogSHR0cEdUTVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBodHRwVFY6IEh0dHBUVlNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGF1dGg6IEF1dGhlbnRpY2F0aW9uU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKF90b2FzdHIpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLlN0c0Zvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgICAgICAgc3RzOiBbLTFdLFxyXG4gICAgICAgICAgICBndG1JZDogW1wiXCJdLFxyXG4gICAgICAgICAgICBrbGFudDogW1wiXCJdLFxyXG4gICAgICAgICAgICByZWY6IFtcIlwiXSxcclxuICAgICAgICAgICAgaGVyazogW1wiXCJdLFxyXG4gICAgICAgICAgICB0b3BDZ3I6IFtcIlwiXSxcclxuICAgICAgICAgICAgaW5kaWVuaW5nc0RhdHVtOiBbXCJcIl1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkU3RhdHVzRHJvcGRvd25MaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFN0YXR1c0Ryb3Bkb3duTGlzdCgpIHtcclxuICAgICAgICB0aGlzLlN0YXR1c0Ryb3Bkb3duTGlzdCA9IFtcclxuICAgICAgICAgICAgeyBcImlkXCI6IDAsIFwib21zY2hyaWp2aW5nXCI6IFwiQWxsZXNcIiB9LFxyXG4gICAgICAgICAgICB7IFwiaWRcIjogMSwgXCJvbXNjaHJpanZpbmdcIjogXCJBZmdlcm9uZFwiIH0sXHJcbiAgICAgICAgICAgIHsgXCJpZFwiOiAyLCBcIm9tc2NocmlqdmluZ1wiOiBcIk5vZyBuaWV0IGFmZ2Vyb25kXCIgfVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHRoaXMuU3RzRm9ybS5wYXRjaFZhbHVlKHsgc3RzOiAodGhpcy5OaWV1d2VBYW52cmFnZW4gPyAnMicgOiAnMicpIH0pO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzQ2hhbmdlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXR1c0NoYW5nZWQoKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLlN0c0Zvcm0uY29udHJvbHMuc3RzLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCItMVwiOiAvLyBTZWxlY3RlZXJcclxuICAgICAgICAgICAgICAgIHRoaXMuU3RhdHVzSWQgPSAtMTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wID0gW107XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy9jYXNlIFwiMFwiOiAvLyBOaWV1d2UgQWFudnJhZ2VuIFxyXG4gICAgICAgICAgICAvLyAgICB0aGlzLlN0YXR1c0lkID0gMTtcclxuICAgICAgICAgICAgLy8gICAgdGhpcy5OaWV1d2VBYW52cmFnZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyAgICB0aGlzLmxvYWRTdGF0dXNMaXN0KCk7XHJcbiAgICAgICAgICAgIC8vICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAvLyBTdGF0dXNcclxuICAgICAgICAgICAgICAgIHRoaXMuU3RhdHVzSWQgPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuc3RzLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5OaWV1d2VBYW52cmFnZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFN0YXR1c0xpc3QoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2FkU3RhdHVzTGlzdCgpIHtcclxuICAgICAgICB0aGlzLmh0dHBHVE0uZ3dTdGF0dXNMaXN0KHRoaXMuU3RhdHVzSWQsIC0xKS50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbigobHN0OiBJU2dzR1RNU3RhdHVzW10pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IGxzdDtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcCA9IFsuLi5sc3RdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckZvcm1GaWVsZHMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FeHRlbmRlZFNlYXJjaCh6b2VrVmVsZGVuOiBTZ3NHVE1ab2VrVmVsZGVuKSB7XHJcbiAgICAgICAgdGhpcy5odHRwR1RNLmd3Wm9la0xpc3Qoem9la1ZlbGRlbikudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKGxzdDogSVNnc0dUTVN0YXR1c1tdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSBsc3Q7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXAgPSBbLi4ubHN0XTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJGb3JtRmllbGRzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyRm9ybUZpZWxkcygpIHtcclxuICAgICAgICAvLyBDbGVhciBhbGwgRm9ybSBWYWx1ZXMgZXhjZXB0IHN0c1xyXG4gICAgICAgIHRoaXMuU3RzRm9ybS5wYXRjaFZhbHVlKHtcclxuICAgICAgICAgICAgdGVjaG5pc2NoVmVyc2xhZ0lEOiBcIlwiLFxyXG4gICAgICAgICAgICBuYWFtOiBcIlwiLFxyXG4gICAgICAgICAgICBnZW1lZW50ZU9uZGVyem9la3Nsb2NhdGllOiBcIlwiLFxyXG4gICAgICAgICAgICBpbmRpZW5pbmdzRGF0dW06IFwiXCIsXHJcbiAgICAgICAgICAgIHN0YXR1c0RhdHVtOiBcIlwiLFxyXG4gICAgICAgICAgICBpbmRpZW5pbmdzd2lqemU6IFwiXCIsXHJcbiAgICAgICAgICAgIGdlZmFjdHVyZWVyZDogXCJcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlcigpIHtcclxuICAgICAgICBjb25zdCBndG1JZCA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5ndG1JZC52YWx1ZTtcclxuICAgICAgICBjb25zdCBrbGFudCA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5rbGFudC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IHJlZiA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5yZWYudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBoZXJrID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLmhlcmsudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCB0b3BDZ3IgPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMudG9wQ2dyLnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgaW5kaWVuaW5nc0RhdHVtID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLmluZGllbmluZ3NEYXR1bS52YWx1ZTtcclxuICAgICAgICBjb25zdCBkcCA9IG5ldyBEYXRlUGlwZShcImVuLVVTXCIpO1xyXG5cclxuICAgICAgICAvLyBmaWx0ZXIgb3VyIGRhdGFcclxuICAgICAgICBjb25zdCB0ZW1wID0gdGhpcy50ZW1wLmZpbHRlcigocm93OiBJU2dzR1RNU3RhdHVzKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBpbmRpZW5pbmdzRGF0dW1Bc1N0cmluZzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChpbmRpZW5pbmdzRGF0dW0gPiBcIlwiKSB7IGluZGllbmluZ3NEYXR1bUFzU3RyaW5nID0gZHAudHJhbnNmb3JtKHJvdy5pbmRpZW5pbmdzRGF0dW0sIFwiZGQvTU0veXl5eVwiKTsgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuICghZ3RtSWQgfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHJvdy5ncm9uZHRyYW5zcG9ydG1lbGRpbmdJZC50b1N0cmluZygpKSAmJiByb3cuZ3JvbmR0cmFuc3BvcnRtZWxkaW5nSWQudG9TdHJpbmcoKS5pbmRleE9mKGd0bUlkKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFrbGFudCB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQocm93LmtsYW50LnRvTG93ZXJDYXNlKCkpICYmIHJvdy5rbGFudC50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoa2xhbnQpICE9PSAtMSkpXHJcbiAgICAgICAgICAgICAgICAmJiAoIXJlZiB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQocm93LmtsYW50S2VubWVyay50b0xvd2VyQ2FzZSgpKSAmJiByb3cua2xhbnRLZW5tZXJrLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihyZWYpICE9PSAtMSkpXHJcbiAgICAgICAgICAgICAgICAmJiAoIWhlcmsgfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHJvdy5oZXJrb21zdC50b0xvd2VyQ2FzZSgpKSAmJiByb3cuaGVya29tc3QudG9Mb3dlckNhc2UoKS5pbmRleE9mKGhlcmspICE9PSAtMSkpXHJcbiAgICAgICAgICAgICAgICAmJiAoIXRvcENnciB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQocm93LnRvcENnci50b0xvd2VyQ2FzZSgpKSAmJiByb3cudG9wQ2dyLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0b3BDZ3IpICE9PSAtMSkpXHJcbiAgICAgICAgICAgICAgICAmJiAoIWluZGllbmluZ3NEYXR1bSB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQoaW5kaWVuaW5nc0RhdHVtQXNTdHJpbmcpICYmIGluZGllbmluZ3NEYXR1bUFzU3RyaW5nLmluZGV4T2YoaW5kaWVuaW5nc0RhdHVtKSAhPT0gLTEpKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgdGhlIHJvd3NcclxuICAgICAgICB0aGlzLnJvd3MgPSB0ZW1wO1xyXG4gICAgICAgIC8vIFdoZW5ldmVyIHRoZSBmaWx0ZXIgY2hhbmdlcywgYWx3YXlzIGdvIGJhY2sgdG8gdGhlIGZpcnN0IHBhZ2VcclxuICAgICAgICB0aGlzLnRhYmxlLm9mZnNldCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Um93Q2xhc3Mocm93OiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gXCJpYnRuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgb25BY3RpdmF0ZShldmVudDogYW55KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IFwiZGJsY2xpY2tcIikge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmtUb0dUTShldmVudC5yb3dbXCJncm9uZHRyYW5zcG9ydG1lbGRpbmdJZFwiXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxpbmtUb0dUTShndG1JZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2d3L2d0bS1lZGl0XCIsIGd0bUlkXSk7ICBcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVHVE0oZ3RtSWQ6IG51bWJlcikge1xyXG4gICAgfVxyXG5cclxuICAgIFRvZ2dsZUV4dGVuZGVkU2VhcmNoKCkge1xyXG4gICAgICAgIHRoaXMuaXNFeHRlbmRlZFNlYXJjaCA9ICF0aGlzLmlzRXh0ZW5kZWRTZWFyY2g7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXJvdXRlci1sb2FkZXIvc3JjIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ndG0tZ3JpZC9ndy1ndG0tZ3JpZC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gW2Zvcm1Hcm91cF09XFxcIlN0c0Zvcm1cXFwiIGNsYXNzPVxcXCJjb250YWluZXItZmx1aWQgcGFkZGluZ1RvcDEwcHhcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0lmPVxcXCJ1c2VTZWFyY2hcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTNcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiAoY2xpY2spPVxcXCJUb2dnbGVFeHRlbmRlZFNlYXJjaCgpXFxcIj57eyBpc0V4dGVuZGVkU2VhcmNoID8gJ0Vua2Vsdm91ZGlnIHpvZWtlbicgOiAnR2VhdmFuY2VlcmQgem9la2VuJyB9fTwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJ1c2VTZWFyY2ggJiYgIWlzRXh0ZW5kZWRTZWFyY2hcXFwiIGNsYXNzPVxcXCJjb2wtc20tOVxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJwYWRkaW5nUmlnaHQxMHB4XFxcIj5GaWx0ZXIgc3RhdHVzPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8c2VsZWN0IGZvcm1Db250cm9sTmFtZT1cXFwic3RzXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyAoY2hhbmdlKT1cXFwic3RhdHVzQ2hhbmdlZCgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiLTFcXFwiPlNlbGVjdGVlcjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IHN0cyBvZiBTdGF0dXNEcm9wZG93bkxpc3RcXFwiIFt2YWx1ZV09XFxcInN0cy5pZFxcXCIgW2lubmVySFRNTF09XFxcInN0cy5vbXNjaHJpanZpbmdcXFwiPjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0lmPVxcXCJ1c2VTZWFyY2ggJiYgaXNFeHRlbmRlZFNlYXJjaFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTJcXFwiPjxndy1ndG0tem9la3VpdGdlYnJlaWQgKHNlYXJjaGluZyk9XFxcIm9uRXh0ZW5kZWRTZWFyY2goJGV2ZW50KVxcXCI+PC9ndy1ndG0tem9la3VpdGdlYnJlaWQ+PC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJOZ3hUYWJsZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxwICpuZ0lmPVxcXCJmb3JOaWV1d2VBYW52cmFnZW4gPT0gZmFsc2VcXFwiIGNsYXNzPVxcXCJwdWxsLWxlZnQgTmd4VGl0bGVcXFwiPnt7dGl0bGV9fTwvcD5cXHJcXG4gICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUgI3RhYmxlXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJib290c3RyYXBcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhY3RpdmF0ZSk9XFxcIm9uQWN0aXZhdGUoJGV2ZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jvd3NdPVxcXCJyb3dzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29sdW1uTW9kZV09XFxcIidmbGV4J1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2hlYWRlckhlaWdodF09XFxcIjUwXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9vdGVySGVpZ2h0XT1cXFwiNDBcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsaW1pdF09XFxcImFwcExhYmVscy50YWJsZVZpZXdSb3dzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm93Q2xhc3NdPVxcXCJnZXRSb3dDbGFzc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Nzc0NsYXNzZXNdPVxcXCJhcHBMYWJlbHMuaWNvbnNDc3NcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttZXNzYWdlc109XFxcInt0b3RhbE1lc3NhZ2U6IGFwcExhYmVscy5Ub3RhbC50b0xvd2VyQ2FzZSgpLCBlbXB0eU1lc3NhZ2U6IGFwcExhYmVscy5Ob0RhdGFUb0Rpc3BsYXl9XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc29ydHNdPVxcXCJbe3Byb3A6J2dyb25kdHJhbnNwb3J0bWVsZGluZ0lkJywgZGlyOidkZXNjJyB9XVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jvd0hlaWdodF09XFxcIidhdXRvJ1xcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMVxcXCIgbmFtZT1cXFwiYWZnZXdlcmt0ZUdUTVxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXJvdz1cXFwicm93XFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgKm5nSWY9XFxcInJvd1sndmVya2xhcmluZ0FmbmVtZXJPbnR2YW5nZW4nXSAhPSBudWxsICYmIHJvd1sndmVya2xhcmluZ0FmbmVtZXJPbnR2YW5nZW4nXSA9PSB0cnVlXFxcIiBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uLy4uLy4uLy4uL2ltYWdlcy9jaGVja2VyZWQtZmxhZy1pY29uLnBuZ1wiKSArIFwiXFxcIiBjbGFzcz1cXFwiaWJ0blxcXCIgKGNsaWNrKT1cXFwibGlua1RvR1RNKHJvd1snZ3JvbmR0cmFuc3BvcnRtZWxkaW5nSWQnXSlcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMVxcXCIgcHJvcD1cXFwiZ3JvbmR0cmFuc3BvcnRtZWxkaW5nSWRcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJMYWJlbFxcXCI+Q29kZTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJndG1JZFxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtcm93PVxcXCJyb3dcXFwiIGxldC12YWx1ZT1cXFwidmFsdWVcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcInBkZkxpbmtcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvdHJhbnNwb3J0LXRvcC1jZ3ItZGV0YWlsJywgcm93Wydncm9uZHRyYW5zcG9ydG1lbGRpbmdJZCddXVxcXCI+PGxhYmVsIGNsYXNzPVxcXCJ0ZXh0XFxcIj57e3Jvd1snZ3JvbmR0cmFuc3BvcnRtZWxkaW5nSWQnXX19PC9sYWJlbD48L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiNFxcXCIgcHJvcD1cXFwia2xhbnRcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJMYWJlbFxcXCI+S2xhbnQ8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwia2xhbnRcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPjxzcGFuPnt7dmFsdWV9fTwvc3Bhbj48L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIzXFxcIiBwcm9wPVxcXCJrbGFudEtlbm1lcmtcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJMYWJlbFxcXCI+S2xhbnQgUmVmLjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwicmVmXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1yb3c9XFxcInJvd1xcXCIgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPjxzcGFuPnt7dmFsdWV9fTwvc3Bhbj48L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIzXFxcIiBwcm9wPVxcXCJoZXJrb21zdFxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckxhYmVsXFxcIj5IZXJrb21zdDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiaGVya1xcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtcm93PVxcXCJyb3dcXFwiIGxldC12YWx1ZT1cXFwidmFsdWVcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT48c3Bhbj57e3ZhbHVlfX08L3NwYW4+PC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiM1xcXCIgcHJvcD1cXFwidG9wQ2dyXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyTGFiZWxcXFwiPlRPUC9DR1I8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcInRvcENnclxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtcm93PVxcXCJyb3dcXFwiIGxldC12YWx1ZT1cXFwidmFsdWVcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT48c3Bhbj57e3ZhbHVlfX08L3NwYW4+PC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMlxcXCIgbmFtZT1cXFwiaW5kaWVuaW5nc0RhdHVtXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCIgTmd4RmlsdGVyTGFiZWxcXFwiPkRhdHVtIEluPC9zcGFuPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImluZGllbmluZ3NEYXR1bVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtdmFsdWU9XFxcInZhbHVlXFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+e3t2YWx1ZSB8IGRhdGU6XFxcImRkL01NL3l5eXlcXFwifX08L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBuYW1lPVxcXCJEZXRhaWxcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1yb3c9XFxcInJvd1xcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vLi4vLi4vLi4vaW1hZ2VzL2ljb19lZGl0cmVjb3JkLmdpZlwiKSArIFwiXFxcIiBjbGFzcz1cXFwiaWJ0blxcXCIgKGNsaWNrKT1cXFwibGlua1RvR1RNKHJvd1snZ3JvbmR0cmFuc3BvcnRtZWxkaW5nSWQnXSlcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gKm5nSWY9XFxcImNhbkRlbGV0ZVxcXCIgW2ZsZXhHcm93XT1cXFwiMVxcXCIgbmFtZT1cXFwiRGV0YWlsXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtcm93PVxcXCJyb3dcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uLy4uLy4uLy4uL2ltYWdlcy9pY29fZGVsZXRlLnBuZ1wiKSArIFwiXFxcIiBjbGFzcz1cXFwiaWJ0blxcXCIgKGNsaWNrKT1cXFwiZGVsZXRlR1RNKHJvd1snZ3JvbmR0cmFuc3BvcnRtZWxkaW5nSWQnXSlcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG48L2Zvcm0+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWd0bS1ncmlkL2d3LWd0bS1ncmlkLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA2MzVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBUUNBWUFBQUFmOC85aEFBQUNja2xFUVZSNDJtTmt3QUVzVExTbFQ1eTUrcFNCQUdERUpzak96c1lSNEdWWHNuTDluaGF5REZCVVZQVFExek5ZeThmUE4rMzE2MWY5MjdkdmYwYTBBVXhNVEl6bFplVUxPVGc1WXgwZEhZR0dLWHpLenkrbzJMdDN6NHlQSHovK0oyZ0FGeGVYd0sxYnQrNS8rZkpGWU9yVWFRd3VMaTRNaXhjdlllRG40MTE3OTk3ZDFBTUhEcnpIYTRDOG5IeU11NXY3WWoxOVBZWk5tell6SkNVbmdiekVjUFhLRlFZSFI0YzdpWW1KUVFjUEhyeU0xUUNnODVtY25adzJmLzN5MVd2N3poME1UeDQvWWRpeFl3ZURpYWtwUTI5UEw0T2preVBEbzBlUDNqMSs5Q2pyenQwN2F5OWN1UEFIeFFCeGNYR1pPMEN3ZXRVcWRoWm1Gb1p2Mzc4eExKaS9nS0dvcElUaHhmUG5ER0xpNGd5ZW5oNE1aOCtlQThYVU1Xc2dRREhBV0ZmVkx6NDExMkhOeWxYUno1OC9GOXV3YVNQRDNyMTdHVUpDUWhsZXZIekpzR3JsU2daWFYxZUducDRlQmo1Ky9pMHJWNjd3aFJ2QXlNakFZcTRyNzM3bTJwTWRmLy8rVTVLVGxYV2NOMzkrd29LNWN5MHVYYnJNR0JFVnhYQmczejZHckp3Y2hwY3ZYLzd2Nk9nSXUzZi8zaHE0QWRLaXZCb3NyS3ovSHo1Nzl3WEk1UWZpUHlETXpzWW1IeG9hMmdRMHpHYjVzbVVNWnVZV0RPZk9uVjJYbjU4Zjh1Yk5tLytNMEpCa05OV1I5VGh6OWNtSmYvLy9pd0dGV0lINEg4d1FSa2JHZjhuSnlaRlhMbHlzL3Y3ang5Zkh6NTVhdm52M0RwVE1mNElOWUdKa1lEUFVsSFU5ZSszeEVTRDNJMGdJaU5tQW1CT1VzcUdZZ1pXRlJZR1ptVm5veDgrZis0RGN6eUJMd0Fhb3k0dVlQMy83NWZPbkx6K3U0VW14SU1PNG9DNzdBS1dCWWNmSXdHaWdMaDEwL3NiVHJVRCtEMEtaQjhOa1ppWkdSakZoWHRubnJ6ODlJbFV6Q0FBQW56RHlFYXJlZy9NQUFBQUFTVVZPUks1Q1lJST1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2ltYWdlcy9jaGVja2VyZWQtZmxhZy1pY29uLnBuZ1xuLy8gbW9kdWxlIGlkID0gNjM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ndy1ndG0tZ3JpZC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctZ3RtLWdyaWQvZ3ctZ3RtLWdyaWQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNjM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnBhcmVudFRvcCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5jaGlsZFRvcCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ndG0tZ3JpZC9ndy1ndG0tZ3JpZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2Mzhcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24sIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBUb2FzdHJTZXJ2aWNlIH0gZnJvbSBcIm5neC10b2FzdHJcIjtcclxuXHJcbmltcG9ydCB7IGFwcExhYmVscyB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL2FwcExhYmVsc1wiO1xyXG5pbXBvcnQgeyBHZW5lcmFsU2NyaXB0cyB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL2dlbmVyYWwuc2NyaXB0c1wiO1xyXG5cclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHsgSHR0cEtsYW50U2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9odHRwLWtsYW50LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBCc0xvY2FsZVNlcnZpY2UgfSBmcm9tIFwibmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyXCI7XHJcbmltcG9ydCB7IFNnc0dUTVpvZWtWZWxkZW4gfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9zZ3NDbGFzc2VzLnNjcmlwdHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiZ3ctZ3RtLXpvZWt1aXRnZWJyZWlkXCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ndy1ndG0tem9la3VpdGdlYnJlaWQuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vZ3ctZ3RtLXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5jc3MnKV0sXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBnd0dUTVpvZWtVaXRnZWJyZWlkQ29tcG9uZW50IGV4dGVuZHMgR2VuZXJhbFNjcmlwdHMgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgYXBwTGFiZWxzID0gYXBwTGFiZWxzO1xyXG4gICAgemtGb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gICAgYmVzdEJlZHJpamZMaXN0OiBhbnlbXTtcclxuICAgIHpvZWtWZWxkZW46IFNnc0dUTVpvZWtWZWxkZW4gPSBudWxsO1xyXG5cclxuICAgIEBPdXRwdXQoKSBzZWFyY2hpbmc6IEV2ZW50RW1pdHRlcjxTZ3NHVE1ab2VrVmVsZGVuPiA9IG5ldyBFdmVudEVtaXR0ZXI8U2dzR1RNWm9la1ZlbGRlbj4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF90b2FzdHI6IFRvYXN0clNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9sb2NhbGVTZXJ2aWNlOiBCc0xvY2FsZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGh0dHBLbGFudDogSHR0cEtsYW50U2VydmljZSxcclxuICAgICAgICAgICAgICAgIEBJbmplY3QoXCJCQVNFX1VSTFwiKSBwcml2YXRlIHJlYWRvbmx5IF9iYXNlVXJsOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX3Nhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XHJcbiAgICAgICAgc3VwZXIoX3RvYXN0cik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gTmVlZGVkIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBic0RhdGVwaWNrZXIgdG8gYWNjZXB0IGRkL01NL3l5eXkgZm9ybWF0dGluZ1xyXG4gICAgICAgIHRoaXMuX2xvY2FsZVNlcnZpY2UudXNlKFwiYm9vdHN0cmFwLWxvY2FsZS1ubGJlXCIpO1xyXG5cclxuICAgICAgICB0aGlzLnprRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBHdG1JZDogW1wiXCJdLFxyXG4gICAgICAgICAgICBkYXRWYW46IFtcIlwiXSxcclxuICAgICAgICAgICAgZGF0VG90OiBbXCJcIl0sXHJcbiAgICAgICAgICAgIFN0cmFhdDogW1wiXCJdLFxyXG4gICAgICAgICAgICBHZW1lZW50ZTogW1wiXCJdLFxyXG4gICAgICAgICAgICBUb3BJZDogW1wiLTFcIl1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5odHRwS2xhbnQuVE9QTGlzdCgpLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKChsc3Q6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobHN0ICE9IG51bGwgJiYgbHN0ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmVzdEJlZHJpamZMaXN0ID0gbHN0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByYWlzZVNlYXJjaCgpIHtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4gPSBuZXcgU2dzR1RNWm9la1ZlbGRlbigpO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5ndG1JZCA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLkd0bUlkLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5kYXRWYW4gPSB0aGlzLnprRm9ybS5jb250cm9scy5kYXRWYW4udmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmRhdFRvdCA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLmRhdFRvdC52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4uc3RyYWF0ID0gdGhpcy56a0Zvcm0uY29udHJvbHMuU3RyYWF0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5nZW1lZW50ZSA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLkdlbWVlbnRlLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi50b3BJZCA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLlRvcElkLnZhbHVlO1xyXG5cclxuICAgICAgICB0aGlzLnNlYXJjaGluZy5lbWl0KHRoaXMuem9la1ZlbGRlbik7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXJvdXRlci1sb2FkZXIvc3JjIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ndG0tem9la3VpdGdlYnJlaWQvZ3ctZ3RtLXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybSBbZm9ybUdyb3VwXT1cXFwiemtGb3JtXFxcIiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkIHBhZGRpbmdUb3AzMHB4XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxsYWJlbCBmb3I9XFxcInR4dEdUTUlkXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+R1RNIElkOjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLThcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwidHh0R1RNSWRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiR3RtSWRcXFwiIEFsbG93T25seU51bWJlcnMgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxsYWJlbCBmb3I9XFxcImR0ZVZhblxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPlZhbjo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS04XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcImR0ZVZhblxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJkYXRWYW5cXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgbmctdHJpbS1pZ25vcmVcXFwiIGJzRGF0ZXBpY2tlciBwbGFjZW1lbnQ9XFxcImJvdHRvbSBsZWZ0XFxcIiBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCIgRG90dGVkQm9yZGVyQmVsb3cgW2JzQ29uZmlnXT1cXFwieyBzaG93V2Vla051bWJlcnM6IGZhbHNlIH1cXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48bGFiZWwgZm9yPVxcXCJkdGVUb3RcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5Ub3Q6PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJkdGVUb3RcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiZGF0VG90XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIG5nLXRyaW0taWdub3JlXFxcIiBic0RhdGVwaWNrZXIgcGxhY2VtZW50PVxcXCJib3R0b20gbGVmdFxcXCIgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiIERvdHRlZEJvcmRlckJlbG93IFtic0NvbmZpZ109XFxcInsgc2hvd1dlZWtOdW1iZXJzOiBmYWxzZSB9XFxcIj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGxhYmVsIGZvcj1cXFwidHh0U3RyYWF0XFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+U3RyYWF0OjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLThcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwidHh0U3RyYWF0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIlN0cmFhdFxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxsYWJlbCBmb3I9XFxcInR4dEdlbWVlbnRlXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+R2VtZWVudGU6PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0eHRHZW1lZW50ZVxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJHZW1lZW50ZVxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxsYWJlbCBmb3I9XFxcImRkbFRvcFxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPlRPUDo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duIGNvbC1zbS04XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cXFwiZGRsVG9wXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIlRvcElkXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwid2lkdGgxMDBwZXJjZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIi0xXFxcIj5TZWxlY3RlZXI8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgbyBvZiBiZXN0QmVkcmlqZkxpc3RcXFwiIFt2YWx1ZV09XFxcIm8uaWRcXFwiPnt7by5kZXNjcmlwdGlvbn19PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS04IGNvbC1zbS1vZmZzZXQtNFxcXCI+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcInJhaXNlU2VhcmNoKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiPnt7YXBwTGFiZWxzLlNlbmR9fTwvYnV0dG9uPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZm9ybT5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctZ3RtLXpvZWt1aXRnZWJyZWlkL2d3LWd0bS16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNjQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ndy1ndG0tem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWd0bS16b2VrdWl0Z2VicmVpZC9ndy1ndG0tem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNjQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctZ3RtLXpvZWt1aXRnZWJyZWlkL2d3LWd0bS16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2NDJcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBHZW5lcmFsU2NyaXB0cyB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL2dlbmVyYWwuc2NyaXB0c1wiO1xyXG5pbXBvcnQgeyBUb2FzdHJTZXJ2aWNlIH0gZnJvbSBcIm5neC10b2FzdHJcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBIdHRwR1ZUU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9odHRwLWd2dC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IElHVlRTdGF0dXMgfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9pbnRlcmZhY2VzLnNjcmlwdHNcIjtcclxuaW1wb3J0IHsgSVNnc0dWVEl0ZW0gfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9zZ3NJbnRlcmZhY2VzLnNjcmlwdHNcIjtcclxuaW1wb3J0IHsgU2dzR1ZUWm9la1ZlbGRlbiB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL3Nnc0NsYXNzZXMuc2NyaXB0c1wiO1xyXG5pbXBvcnQgeyBhcHBMYWJlbHMgfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9hcHBMYWJlbHNcIjtcclxuaW1wb3J0IHsgRGF0YXRhYmxlQ29tcG9uZW50IH0gZnJvbSBcIkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlXCI7XHJcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJndy1ndnQtZ3JpZFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZ3ctZ3Z0LWdyaWQuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vZ3ctZ3Z0LWdyaWQuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIGd3R1ZUR3JpZENvbXBvbmVudCBleHRlbmRzIEdlbmVyYWxTY3JpcHRzIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGFwcExhYmVscyA9IGFwcExhYmVscztcclxuXHJcblxyXG4gICAgU3RhdHVzRHJvcGRvd25MaXN0OiBJR1ZUU3RhdHVzW10gPSBudWxsO1xyXG4gICAgU3RhdHVzTGlzdDogSVNnc0dWVEl0ZW1bXSA9IG51bGw7XHJcbiAgICByb3dzOiBJU2dzR1ZUSXRlbVtdID0gbnVsbDtcclxuICAgIHRlbXA6IGFueVtdID0gW107XHJcbiAgICBAVmlld0NoaWxkKERhdGF0YWJsZUNvbXBvbmVudCkgdGFibGU6IERhdGF0YWJsZUNvbXBvbmVudDtcclxuXHJcbiAgICBASW5wdXQoKSB0aXRsZSA9IFwiXCI7XHJcbiAgICBTdGF0dXNJZDogbnVtYmVyID0gMTtcclxuICAgIGlzRXh0ZW5kZWRTZWFyY2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBmb3JOaWV1d2VBYW52cmFnZW4gPSB0cnVlO1xyXG4gICAgQElucHV0KCdOaWV1d2VBYW52cmFnZW4nKVxyXG4gICAgZ2V0IE5pZXV3ZUFhbnZyYWdlbigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JOaWV1d2VBYW52cmFnZW47XHJcbiAgICB9XHJcbiAgICBzZXQgTmlldXdlQWFudnJhZ2VuKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5mb3JOaWV1d2VBYW52cmFnZW4gPSBcIlwiICsgdmFsdWUgIT09IFwiZmFsc2VcIjtcclxuICAgIH1cclxuXHJcbiAgICB1c2VTZWFyY2ggPSB0cnVlO1xyXG4gICAgQElucHV0KCdFeHRlbmRlZFNlYXJjaCcpXHJcbiAgICBnZXQgRXh0ZW5kZWRTZWFyY2goKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlU2VhcmNoO1xyXG4gICAgfVxyXG4gICAgc2V0IEV4dGVuZGVkU2VhcmNoKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy51c2VTZWFyY2ggPSBcIlwiICsgdmFsdWUgIT09IFwiZmFsc2VcIjtcclxuICAgIH1cclxuXHJcbiAgICBjYW5EZWxldGUgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgnQWxsb3dEZWxldGUnKVxyXG4gICAgZ2V0IEFsbG93RGVsZXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbkRlbGV0ZTtcclxuICAgIH1cclxuICAgIHNldCBBbGxvd0RlbGV0ZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuY2FuRGVsZXRlID0gXCJcIiArIHZhbHVlICE9PSBcImZhbHNlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgU3RzRm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX3RvYXN0cjogVG9hc3RyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGZiOiBGb3JtQnVpbGRlcixcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGh0dHBHVlQ6IEh0dHBHVlRTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcclxuICAgICAgICBzdXBlcihfdG9hc3RyKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5TdHNGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICAgICAgIHN0czogWy0xXSxcclxuICAgICAgICAgICAgZ3Z0TnVtbWVyOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIG5hYW06IFtcIlwiXSxcclxuICAgICAgICAgICAgY29kZTogW1wiXCJdLFxyXG4gICAgICAgICAgICBnZW06IFtcIlwiXSxcclxuICAgICAgICAgICAgYWFudnJhYWdEYXR1bTogW1wiXCJdLFxyXG4gICAgICAgICAgICBzdGF0dXNEYXR1bTogW1wiXCJdLFxyXG4gICAgICAgICAgICBpbmRpZW5pbmdzd2lqemU6IFtcIlwiXSxcclxuICAgICAgICAgICAgZ2VmYWN0dXJlZXJkOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIGd2dFN0czogW1wiXCJdLFxyXG4gICAgICAgICAgICBob2V2OiBbXCJcIl0sXHJcbiAgICAgICAgICAgIHN0YXJ0RGF0dW06IFtcIlwiXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmh0dHBHVlQuU3RhdHVzRGVmaW5pdGlvbkxpc3QoXCJHVlRcIiwgdGhpcy5OaWV1d2VBYW52cmFnZW4pLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKChsc3Q6IElHVlRTdGF0dXNbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxzdCAhPSBudWxsICYmIGxzdCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlN0YXR1c0Ryb3Bkb3duTGlzdCA9IFsuLi5sc3RdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5TdHNGb3JtLnBhdGNoVmFsdWUoeyBzdHM6ICh0aGlzLk5pZXV3ZUFhbnZyYWdlbiA/ICcwJyA6ICcxJykgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0NoYW5nZWQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdHVzQ2hhbmdlZCgpIHtcclxuICAgICAgICB0aGlzLlN0YXR1c0lkID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLnN0cy52YWx1ZTtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuU3RzRm9ybS5jb250cm9scy5zdHMudmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIi0xXCI6IC8vIFNlbGVjdGVlclxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXAgPSBbXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiMFwiOiAvLyBOaWV1d2UgQWFudnJhZ2VuIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5OaWV1d2VBYW52cmFnZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU3RhdHVzTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IC8vIFN0YXR1c1xyXG4gICAgICAgICAgICAgICAgdGhpcy5OaWV1d2VBYW52cmFnZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFN0YXR1c0xpc3QoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2FkU3RhdHVzTGlzdCgpIHtcclxuICAgICAgICB0aGlzLmh0dHBHVlQuc2dzU3RhdHVzTGlzdCh0aGlzLlN0YXR1c0lkLCBcIlRcIikudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKGxzdDogSVNnc0dWVEl0ZW1bXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gbHN0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wID0gWy4uLmxzdF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyRm9ybUZpZWxkcygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkV4dGVuZGVkU2VhcmNoKHpvZWtWZWxkZW46IFNnc0dWVFpvZWtWZWxkZW4pIHtcclxuICAgICAgICB0aGlzLmh0dHBHVlQuZ3dab2VrTGlzdCh6b2VrVmVsZGVuKS50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbigobHN0OiBJU2dzR1ZUSXRlbVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSBsc3Q7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXAgPSBbLi4ubHN0XTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJGb3JtRmllbGRzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyRm9ybUZpZWxkcygpIHtcclxuICAgICAgICAvLyBDbGVhciBhbGwgRm9ybSBWYWx1ZXMgZXhjZXB0IHN0c1xyXG4gICAgICAgIHRoaXMuU3RzRm9ybS5wYXRjaFZhbHVlKHtcclxuICAgICAgICAgICAgZ3Z0TnVtbWVyOiBcIlwiLFxyXG4gICAgICAgICAgICBuYWFtOiBcIlwiLFxyXG4gICAgICAgICAgICBjb2RlOiBcIlwiLFxyXG4gICAgICAgICAgICBnZW06IFwiXCIsXHJcbiAgICAgICAgICAgIGFhbnZyYWFnRGF0dW06IFwiXCIsXHJcbiAgICAgICAgICAgIHN0YXR1c0RhdHVtOiBcIlwiLFxyXG4gICAgICAgICAgICBpbmRpZW5pbmdzd2lqemU6IFwiXCIsXHJcbiAgICAgICAgICAgIGdlZmFjdHVyZWVyZDogXCJcIixcclxuICAgICAgICAgICAgZ3Z0U3RzOiBcIlwiLFxyXG4gICAgICAgICAgICBob2V2OiBcIlwiLFxyXG4gICAgICAgICAgICBzdGFydERhdHVtOiBcIlwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGd2dE51bW1lciA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5ndnROdW1tZXIudmFsdWU7XHJcbiAgICAgICAgY29uc3QgbmFhbSA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5uYWFtLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuY29kZS52YWx1ZTtcclxuICAgICAgICBjb25zdCBnZW0gPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuZ2VtLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGFhbnZyYWFnRGF0dW0gPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuYWFudnJhYWdEYXR1bS52YWx1ZTtcclxuICAgICAgICBjb25zdCBzdGF0dXNEYXR1bSA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5zdGF0dXNEYXR1bS52YWx1ZTtcclxuICAgICAgICBjb25zdCBpbmRpZW5pbmdzd2lqemUgPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuaW5kaWVuaW5nc3dpanplLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGdlZmFjdHVyZWVyZCA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5nZWZhY3R1cmVlcmQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZ3Z0U3RzID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLmd2dFN0cy52YWx1ZTtcclxuICAgICAgICBjb25zdCBob2V2ID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLmhvZXYudmFsdWU7XHJcbiAgICAgICAgY29uc3Qgc3RhcnREYXR1bSA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5zdGFydERhdHVtLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRwID0gbmV3IERhdGVQaXBlKFwiZW4tVVNcIik7XHJcblxyXG4gICAgICAgIC8vIGZpbHRlciBvdXIgZGF0YVxyXG4gICAgICAgIGNvbnN0IHRlbXAgPSB0aGlzLnRlbXAuZmlsdGVyKChyb3c6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgYWFudnJhYWdEYXR1bUFzU3RyaW5nOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKGFhbnZyYWFnRGF0dW0gPiBcIlwiKSB7IGFhbnZyYWFnRGF0dW1Bc1N0cmluZyA9IGRwLnRyYW5zZm9ybShyb3cuYWFudnJhYWdEYXR1bSwgXCJkZC9NTS95eXl5XCIpOyB9XHJcbiAgICAgICAgICAgIHZhciBzdGF0dXNEYXR1bUFzU3RyaW5nOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHN0YXR1c0RhdHVtID4gXCJcIikgeyBzdGF0dXNEYXR1bUFzU3RyaW5nID0gZHAudHJhbnNmb3JtKHJvdy5zdGF0dXNEYXR1bSwgXCJkZC9NTS95eXl5XCIpOyB9XHJcbiAgICAgICAgICAgIHZhciBzdGFydERhdHVtQXNTdHJpbmc6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAoc3RhcnREYXR1bSA+IFwiXCIpIHsgc3RhcnREYXR1bUFzU3RyaW5nID0gZHAudHJhbnNmb3JtKHJvdy5zdGFydERhdHVtLCBcImRkL01NL3l5eXlcIik7IH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoIWd2dE51bW1lciB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQocm93LmJick51bW1lcikgJiYgcm93LmJick51bW1lci50b1N0cmluZygpLmluZGV4T2YoZ3Z0TnVtbWVyKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFuYWFtIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChyb3cubmFhbSkgJiYgcm93Lm5hYW0udG9Mb3dlckNhc2UoKS5pbmRleE9mKG5hYW0pICE9PSAtMSkpXHJcbiAgICAgICAgICAgICAgICAmJiAoIWNvZGUgfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHJvdy5iZXJvZXBzb3JnYW5pc2F0aWVjb2RlKSAmJiByb3cuYmVyb2Vwc29yZ2FuaXNhdGllY29kZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoY29kZSkgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghZ2VtIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChyb3cucGxhYXRzKSAmJiByb3cucGxhYXRzLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihnZW0pICE9PSAtMSkpXHJcbiAgICAgICAgICAgICAgICAmJiAoIWFhbnZyYWFnRGF0dW0gfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKGFhbnZyYWFnRGF0dW1Bc1N0cmluZykgJiYgYWFudnJhYWdEYXR1bUFzU3RyaW5nLmluZGV4T2YoYWFudnJhYWdEYXR1bSkgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghc3RhdHVzRGF0dW0gfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHN0YXR1c0RhdHVtQXNTdHJpbmcpICYmIHN0YXR1c0RhdHVtQXNTdHJpbmcuaW5kZXhPZihzdGF0dXNEYXR1bSkgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghaW5kaWVuaW5nc3dpanplIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChyb3cuaW5kaWVuaW5nc3dpanplKSAmJiByb3cuaW5kaWVuaW5nc3dpanplLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihpbmRpZW5pbmdzd2lqemUpICE9PSAtMSkpXHJcbiAgICAgICAgICAgICAgICAmJiAoIWdlZmFjdHVyZWVyZCB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQocm93LmdlZmFjdHVyZWVyZCkgJiYgcm93LmdlZmFjdHVyZWVyZC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZ2VmYWN0dXJlZXJkKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFndnRTdHMgfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHJvdy5zdGF0dXMpICYmIHJvdy5zdGF0dXMudG9Mb3dlckNhc2UoKS5pbmRleE9mKGd2dFN0cykgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghaG9ldiB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQocm93LmhvZXZlZWxoZWlkKSAmJiByb3cuaG9ldmVlbGhlaWQudG9TdHJpbmcoKS5pbmRleE9mKGhvZXYpICE9PSAtMSkpXHJcbiAgICAgICAgICAgICAgICAmJiAoIXN0YXJ0RGF0dW0gfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHN0YXJ0RGF0dW1Bc1N0cmluZykgJiYgc3RhcnREYXR1bUFzU3RyaW5nLmluZGV4T2Yoc3RhcnREYXR1bSkgIT09IC0xKSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIHRoZSByb3dzXHJcbiAgICAgICAgdGhpcy5yb3dzID0gdGVtcDtcclxuICAgICAgICAvLyBXaGVuZXZlciB0aGUgZmlsdGVyIGNoYW5nZXMsIGFsd2F5cyBnbyBiYWNrIHRvIHRoZSBmaXJzdCBwYWdlXHJcbiAgICAgICAgdGhpcy50YWJsZS5vZmZzZXQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQWN0aXZhdGUoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGlmIChldmVudC50eXBlID09PSBcImRibGNsaWNrXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5saW5rVG9HVlQoZXZlbnQucm93W1wiZ3Z0TnVtbWVyXCJdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Um93Q2xhc3Mocm93OiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gXCJpYnRuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgbGlua1RvR1ZUKGd2dElkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZ3cvZ3Z0LWVkaXRcIiwgZ3Z0SWRdKTsgXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlR1ZUKGd2dElkOiBudW1iZXIpIHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG5cclxuICAgIFRvZ2dsZUV4dGVuZGVkU2VhcmNoKCkge1xyXG4gICAgICAgIHRoaXMuaXNFeHRlbmRlZFNlYXJjaCA9ICF0aGlzLmlzRXh0ZW5kZWRTZWFyY2g7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXJvdXRlci1sb2FkZXIvc3JjIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ndnQtZ3JpZC9ndy1ndnQtZ3JpZC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gW2Zvcm1Hcm91cF09XFxcIlN0c0Zvcm1cXFwiIGNsYXNzPVxcXCJjb250YWluZXItZmx1aWQgcGFkZGluZ1RvcDEwcHhcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0lmPVxcXCJ1c2VTZWFyY2hcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTNcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiAoY2xpY2spPVxcXCJUb2dnbGVFeHRlbmRlZFNlYXJjaCgpXFxcIj57eyBpc0V4dGVuZGVkU2VhcmNoID8gJ0Vua2Vsdm91ZGlnIHpvZWtlbicgOiAnR2VhdmFuY2VlcmQgem9la2VuJyB9fTwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJ1c2VTZWFyY2ggJiYgIWlzRXh0ZW5kZWRTZWFyY2hcXFwiIGNsYXNzPVxcXCJjb2wtc20tOVxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJwYWRkaW5nUmlnaHQxMHB4XFxcIj5GaWx0ZXIgc3RhdHVzPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8c2VsZWN0IGZvcm1Db250cm9sTmFtZT1cXFwic3RzXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyAoY2hhbmdlKT1cXFwic3RhdHVzQ2hhbmdlZCgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiLTFcXFwiPlNlbGVjdGVlcjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IHN0cyBvZiBTdGF0dXNEcm9wZG93bkxpc3RcXFwiIFt2YWx1ZV09XFxcInN0cy5iYnJTdGF0dXNJRFxcXCIgW2lubmVySFRNTF09XFxcInN0cy5zdGF0dXNcXFwiPjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0lmPVxcXCJ1c2VTZWFyY2ggJiYgaXNFeHRlbmRlZFNlYXJjaFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTJcXFwiPjxndy1ndnQtem9la3VpdGdlYnJlaWQgKHNlYXJjaGluZyk9XFxcIm9uRXh0ZW5kZWRTZWFyY2goJGV2ZW50KVxcXCI+PC9ndy1ndnQtem9la3VpdGdlYnJlaWQ+PC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJOZ3hUYWJsZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxwICpuZ0lmPVxcXCJmb3JOaWV1d2VBYW52cmFnZW4gPT0gZmFsc2VcXFwiIGNsYXNzPVxcXCJwdWxsLWxlZnQgTmd4VGl0bGVcXFwiPnt7dGl0bGV9fTwvcD5cXHJcXG4gICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUgI3RhYmxlXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJib290c3RyYXBcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhY3RpdmF0ZSk9XFxcIm9uQWN0aXZhdGUoJGV2ZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jvd3NdPVxcXCJyb3dzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29sdW1uTW9kZV09XFxcIidmbGV4J1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2hlYWRlckhlaWdodF09XFxcIjUwXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9vdGVySGVpZ2h0XT1cXFwiNDBcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsaW1pdF09XFxcImFwcExhYmVscy50YWJsZVZpZXdSb3dzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm93Q2xhc3NdPVxcXCJnZXRSb3dDbGFzc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Nzc0NsYXNzZXNdPVxcXCJhcHBMYWJlbHMuaWNvbnNDc3NcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttZXNzYWdlc109XFxcInt0b3RhbE1lc3NhZ2U6IGFwcExhYmVscy5Ub3RhbC50b0xvd2VyQ2FzZSgpLCBlbXB0eU1lc3NhZ2U6IGFwcExhYmVscy5Ob0RhdGFUb0Rpc3BsYXl9XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc29ydHNdPVxcXCJbe3Byb3A6J2Jick51bW1lcicsIGRpcjonZGVzYycgfV1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3dIZWlnaHRdPVxcXCInYXV0bydcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIG5hbWU9XFxcIm5pZXRHb2VkR2VrZXVyZFxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXJvdz1cXFwicm93XFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVxcXCJjb2xvcjogcmVkXFxcIj48Yj57e3Jvd1snbmlldEdvZWRHZWtldXJkJ119fTwvYj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMVxcXCIgcHJvcD1cXFwiYmJyTnVtbWVyXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyTGFiZWxcXFwiPk51bW1lcjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJndnROdW1tZXJcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXJvdz1cXFwicm93XFxcIiBsZXQtdmFsdWU9XFxcInZhbHVlXFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJwZGZMaW5rXFxcIiBbcm91dGVyTGlua109XFxcIlsnL2JvZGVtYmVoZWVycmFwcG9ydC1kZXRhaWwnXVxcXCIgW3F1ZXJ5UGFyYW1zXT1cXFwie2JicklkOnJvd1snYmJyTnVtbWVyJ119XFxcIj48bGFiZWwgY2xhc3M9XFxcInRleHRcXFwiPnt7cm93WydiYnJOdW1tZXInXX19PC9sYWJlbD48L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiM1xcXCIgcHJvcD1cXFwibmFhbVxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckxhYmVsXFxcIj5LbGFudDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJuYWFtXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC12YWx1ZT1cXFwidmFsdWVcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3t2YWx1ZX19PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIHByb3A9XFxcImJlcm9lcHNvcmdhbmlzYXRpZWNvZGVcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJMYWJlbFxcXCI+Q29kZTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiY29kZVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtcm93PVxcXCJyb3dcXFwiIGxldC12YWx1ZT1cXFwidmFsdWVcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3t2YWx1ZX19PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjJcXFwiIHByb3A9XFxcInBsYWF0c1xcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckxhYmVsXFxcIj5HZW1lZW50ZTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiZ2VtXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1yb3c9XFxcInJvd1xcXCIgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3ZhbHVlfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMVxcXCIgbmFtZT1cXFwiYWFudnJhYWdEYXR1bVxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiIE5neEZpbHRlckxhYmVsXFxcIj5EYXR1bSBpbjwvc3Bhbj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJhYW52cmFhZ0RhdHVtXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC12YWx1ZT1cXFwidmFsdWVcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3t2YWx1ZSB8IGRhdGU6XFxcImRkL01NL3l5eXlcXFwifX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBuYW1lPVxcXCJzdGF0dXNEYXR1bVxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiIE5neEZpbHRlckxhYmVsXFxcIj5EYXR1bSB1aXQ8L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwic3RhdHVzRGF0dW1cXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3ZhbHVlIHwgZGF0ZTpcXFwiZGQvTU0veXl5eVxcXCJ9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIHByb3A9XFxcImluZGllbmluZ3N3aWp6ZVxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiIE5neEZpbHRlckxhYmVsXFxcIj5BYW52dWxwbGFuPC9zcGFuPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImluZGllbmluZ3N3aWp6ZVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBwcm9wPVxcXCJob2V2ZWVsaGVpZFxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckxhYmVsXFxcIj5Ib2V2ZWVsaGVpZDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJob2V2XFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1yb3c9XFxcInJvd1xcXCIgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3Jvd1snaG9ldmVlbGhlaWQnXX19PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIHByb3A9XFxcImdlZmFjdHVyZWVyZFxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiIE5neEZpbHRlckxhYmVsXFxcIj5HZWZhY3QuPC9zcGFuPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImdlZmFjdHVyZWVyZFxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIzXFxcIiBwcm9wPVxcXCJzdGF0dXNcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIiBOZ3hGaWx0ZXJMYWJlbFxcXCI+R1ZUIFN0YXR1czwvc3Bhbj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJndnRTdHNcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMVxcXCIgbmFtZT1cXFwic3RhcnREYXR1bUdyb25kd2Vya2VuXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCIgTmd4RmlsdGVyTGFiZWxcXFwiPlN0YXJ0IERhdHVtPC9zcGFuPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcInN0YXJ0RGF0dW1cXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3ZhbHVlIHwgZGF0ZTpcXFwiZGQvTU0veXl5eVxcXCJ9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIG5hbWU9XFxcIkRldGFpbFxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXJvdz1cXFwicm93XFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9pbWFnZXMvaWNvX2VkaXRyZWNvcmQuZ2lmXCIpICsgXCJcXFwiIGNsYXNzPVxcXCJpYnRuXFxcIiAoY2xpY2spPVxcXCJsaW5rVG9HVlQocm93WydiYnJOdW1tZXInXSlcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gKm5nSWY9XFxcImNhbkRlbGV0ZVxcXCIgW2ZsZXhHcm93XT1cXFwiMVxcXCIgbmFtZT1cXFwiRGV0YWlsXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtcm93PVxcXCJyb3dcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uLy4uLy4uLy4uL2ltYWdlcy9pY29fZGVsZXRlLnBuZ1wiKSArIFwiXFxcIiBjbGFzcz1cXFwiaWJ0blxcXCIgKGNsaWNrKT1cXFwiZGVsZXRlR1ZUKHJvd1snYmJyTnVtbWVyJ10pXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGU+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9mb3JtPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ndnQtZ3JpZC9ndy1ndnQtZ3JpZC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNjQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ndy1ndnQtZ3JpZC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctZ3Z0LWdyaWQvZ3ctZ3Z0LWdyaWQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNjQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctZ3Z0LWdyaWQvZ3ctZ3Z0LWdyaWQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNjQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVG9hc3RyU2VydmljZSB9IGZyb20gXCJuZ3gtdG9hc3RyXCI7XHJcblxyXG5pbXBvcnQgeyBhcHBMYWJlbHMgfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9hcHBMYWJlbHNcIjtcclxuaW1wb3J0IHsgR2VuZXJhbFNjcmlwdHMgfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9nZW5lcmFsLnNjcmlwdHNcIjtcclxuXHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7IEh0dHBCQlJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2h0dHAtYmJyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSHR0cERvc3NpZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2h0dHAtZG9zc2llci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEh0dHBLbGFudFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaHR0cC1rbGFudC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEh0dHBUVlNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaHR0cC10di5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgQnNMb2NhbGVTZXJ2aWNlIH0gZnJvbSBcIm5neC1ib290c3RyYXAvZGF0ZXBpY2tlclwiO1xyXG5pbXBvcnQgeyBTZ3NHVlRab2VrVmVsZGVuIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvc2dzQ2xhc3Nlcy5zY3JpcHRzXCI7XHJcbmltcG9ydCB7IElTZ3NLbGFudENvbWJvTGlzdEl0ZW0sIElTZ3NEb3NzaWVyQ29tYm9MaXN0SXRlbSwgSVNnc0Jlc3RBYXJkTGlzdEl0ZW0gfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9zZ3NJbnRlcmZhY2VzLnNjcmlwdHNcIjtcclxuaW1wb3J0IHsgSVRWU3RhdHVzRGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL2ludGVyZmFjZXMuc2NyaXB0c1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJndy1ndnQtem9la3VpdGdlYnJlaWRcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2d3LWd2dC16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9ndy1ndnQtem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzcycpXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIGd3R1ZUWm9la1VpdGdlYnJlaWRDb21wb25lbnQgZXh0ZW5kcyBHZW5lcmFsU2NyaXB0cyBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBhcHBMYWJlbHMgPSBhcHBMYWJlbHM7XHJcbiAgICB6a0Zvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgICBLbGFudExpc3RJdGVtczogSVNnc0tsYW50Q29tYm9MaXN0SXRlbVtdID0gbnVsbDtcclxuICAgIERvc3NpZXJCZWhlZXJkZXJMaXN0SXRlbXM6IElTZ3NEb3NzaWVyQ29tYm9MaXN0SXRlbVtdID0gbnVsbDtcclxuICAgIEJlc3RlbW1pbmdzYWFyZExpc3RJdGVtczogSVNnc0Jlc3RBYXJkTGlzdEl0ZW1bXSA9IG51bGw7XHJcbiAgICBTdGF0dXNMaXN0SXRlbXM6IElUVlN0YXR1c0RlZmluaXRpb25bXSA9IG51bGw7XHJcblxyXG4gICAgem9la1ZlbGRlbjogU2dzR1ZUWm9la1ZlbGRlbiA9IG51bGw7XHJcbiAgICBAT3V0cHV0KCkgc2VhcmNoaW5nOiBFdmVudEVtaXR0ZXI8U2dzR1ZUWm9la1ZlbGRlbj4gPSBuZXcgRXZlbnRFbWl0dGVyPFNnc0dWVFpvZWtWZWxkZW4+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfdG9hc3RyOiBUb2FzdHJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfbG9jYWxlU2VydmljZTogQnNMb2NhbGVTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgaHR0cEJicjogSHR0cEJCUlNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBodHRwRG9zc2llcjogSHR0cERvc3NpZXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgaHR0cEtsYW50OiBIdHRwS2xhbnRTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgaHR0cFRWOiBIdHRwVFZTZXJ2aWNlLFxyXG4gICAgICAgIEBJbmplY3QoXCJCQVNFX1VSTFwiKSBwcml2YXRlIHJlYWRvbmx5IF9iYXNlVXJsOiBzdHJpbmcsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcclxuICAgICAgICBzdXBlcihfdG9hc3RyKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBOZWVkZWQgY29uZmlndXJhdGlvbiBmb3IgdGhlIGJzRGF0ZXBpY2tlciB0byBhY2NlcHQgZGQvTU0veXl5eSBmb3JtYXR0aW5nXHJcbiAgICAgICAgdGhpcy5fbG9jYWxlU2VydmljZS51c2UoXCJib290c3RyYXAtbG9jYWxlLW5sYmVcIik7XHJcblxyXG4gICAgICAgIHRoaXMuemtGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICAgICAgIENvZGU6IFtcIlwiXSxcclxuICAgICAgICAgICAgVHZJZDogW1wiXCJdLFxyXG4gICAgICAgICAgICBLbGFudElkOiBbXCItMVwiXSxcclxuICAgICAgICAgICAgRG9zc2llckJlaGVlcmRlcklkOiBbXCItMVwiXSxcclxuICAgICAgICAgICAgU3RhdHVzSWQ6IFtcIi0xXCJdLFxyXG4gICAgICAgICAgICBCZXN0ZW1taW5nc2FhcmRJZDogW1wiLTFcIl0sXHJcbiAgICAgICAgICAgIEdlZmFjdHVyZWVyZDogW1wiLTFcIl0sXHJcbiAgICAgICAgICAgIFN0cmFhdDogW1wiXCJdLFxyXG4gICAgICAgICAgICBQb3N0Y29kZTogW1wiXCJdLFxyXG4gICAgICAgICAgICBHZW1lZW50ZTogW1wiXCJdLFxyXG4gICAgICAgICAgICBMYW1iZXJ0WDogW1wiXCJdLFxyXG4gICAgICAgICAgICBMYW1iZXJ0WTogW1wiXCJdLFxyXG4gICAgICAgICAgICBMYW1iZXJ0UmFuZ2U6IFtcIi0xXCJdLFxyXG4gICAgICAgICAgICBWZXJ0cmVrU3RyYWF0OiBbXCJcIl0sXHJcbiAgICAgICAgICAgIFZlcnRyZWtHZW1lZW50ZTogW1wiXCJdLFxyXG4gICAgICAgICAgICBkYXRWYW46IFtcIlwiXSxcclxuICAgICAgICAgICAgZGF0VG90OiBbXCJcIl1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkRHJvcGRvd25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZERyb3Bkb3ducygpIHtcclxuICAgICAgICB0aGlzLmh0dHBLbGFudC5zZ3NDb21ib0xpc3RJdGVtcygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGxzdDogSVNnc0tsYW50Q29tYm9MaXN0SXRlbVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobHN0ICE9IG51bGwgJiYgbHN0ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuS2xhbnRMaXN0SXRlbXMgPSBbLi4ubHN0XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaHR0cERvc3NpZXIuc2dzQ29tYm9MaXN0SXRlbXMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChsc3Q6IElTZ3NEb3NzaWVyQ29tYm9MaXN0SXRlbVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobHN0ICE9IG51bGwgJiYgbHN0ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuRG9zc2llckJlaGVlcmRlckxpc3RJdGVtcyA9IFsuLi5sc3RdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5odHRwQmJyLnNnc0Jlc3RlbW1pbmdzYWFyZExpc3RJdGVtcygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGxzdDogSVNnc0Jlc3RBYXJkTGlzdEl0ZW1bXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxzdCAhPSBudWxsICYmIGxzdCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJlc3RlbW1pbmdzYWFyZExpc3RJdGVtcyA9IFsuLi5sc3RdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5odHRwVFYuU3RhdHVzRGVmaW5pdGlvbkxpc3QoZmFsc2UpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGxzdDogSVRWU3RhdHVzRGVmaW5pdGlvbltdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobHN0ICE9IG51bGwgJiYgbHN0ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU3RhdHVzTGlzdEl0ZW1zID0gWy4uLmxzdF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJhaXNlU2VhcmNoKCkge1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbiA9IG5ldyBTZ3NHVlRab2VrVmVsZGVuKCk7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmNvZGUgPSB0aGlzLnprRm9ybS5jb250cm9scy5Db2RlLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi50dklkID0gdGhpcy56a0Zvcm0uY29udHJvbHMuVHZJZC52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4ua2xhbnRJZCA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLktsYW50SWQudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmRvc3NpZXJCZWhlZXJkZXJJZCA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLkRvc3NpZXJCZWhlZXJkZXJJZC52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4uc3RhdHVzSWQgPSB0aGlzLnprRm9ybS5jb250cm9scy5TdGF0dXNJZC52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4uYmVzdGVtbWluZ3NhYXJkSWQgPSB0aGlzLnprRm9ybS5jb250cm9scy5CZXN0ZW1taW5nc2FhcmRJZC52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4uZ2VmYWN0dXJlZXJkID0gdGhpcy56a0Zvcm0uY29udHJvbHMuR2VmYWN0dXJlZXJkLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5zdHJhYXQgPSB0aGlzLnprRm9ybS5jb250cm9scy5TdHJhYXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLnBvc3Rjb2RlID0gdGhpcy56a0Zvcm0uY29udHJvbHMuUG9zdGNvZGUudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmdlbWVlbnRlID0gdGhpcy56a0Zvcm0uY29udHJvbHMuR2VtZWVudGUudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmxhbWJlcnRYID0gdGhpcy56a0Zvcm0uY29udHJvbHMuTGFtYmVydFgudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmxhbWJlcnRZID0gdGhpcy56a0Zvcm0uY29udHJvbHMuTGFtYmVydFkudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmxhbWJlcnRSYW5nZSA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLkxhbWJlcnRSYW5nZS52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4udmVydHJla1N0cmFhdCA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLlZlcnRyZWtTdHJhYXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLnZlcnRyZWtHZW1lZW50ZSA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLlZlcnRyZWtHZW1lZW50ZS52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4uZGF0VmFuID0gdGhpcy56a0Zvcm0uY29udHJvbHMuZGF0VmFuLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5kYXRUb3QgPSB0aGlzLnprRm9ybS5jb250cm9scy5kYXRUb3QudmFsdWU7XHJcblxyXG4gICAgICAgIHRoaXMuc2VhcmNoaW5nLmVtaXQodGhpcy56b2VrVmVsZGVuKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItcm91dGVyLWxvYWRlci9zcmMhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWd2dC16b2VrdWl0Z2VicmVpZC9ndy1ndnQtem9la3VpdGdlYnJlaWQuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxmb3JtIFtmb3JtR3JvdXBdPVxcXCJ6a0Zvcm1cXFwiIGNsYXNzPVxcXCJjb250YWluZXItZmx1aWQgcGFkZGluZ1RvcDMwcHhcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwidHh0Q29kZVxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPkNvZGU8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInR4dENvZGVcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiQ29kZVxcXCIgQWxsb3dPbmx5TnVtYmVycyBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwidHZ0VHZJZFxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPlRWIE51bW1lcjo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInR4dFR2SWRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiVHZJZFxcXCIgQWxsb3dPbmx5TnVtYmVycyBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwiZGRsS2xhbnRcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5LbGFudDwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24gY29sLXNtLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJkZGxLbGFudFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJLbGFudElkXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwid2lkdGgxMDBwZXJjZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIi0xXFxcIj5TZWxlY3RlZXI8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQga2xhbnQgb2YgS2xhbnRMaXN0SXRlbXNcXFwiIFt2YWx1ZV09XFxcImtsYW50LmtsYW50SURcXFwiIFtpbm5lckhUTUxdPVxcXCJrbGFudC5uYWFtXFxcIj48L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcImRkbERvc3NpZXJCZWhlZXJkZXJcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5Eb3NzaWVyQmVoZWVyZGVyPC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93biBjb2wtc20tNFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XFxcImRkbERvc3NpZXJCZWhlZXJkZXJcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiRG9zc2llckJlaGVlcmRlcklkXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwid2lkdGgxMDBwZXJjZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIi0xXFxcIj5TZWxlY3RlZXI8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgZG9zc2JlaCBvZiBEb3NzaWVyQmVoZWVyZGVyTGlzdEl0ZW1zXFxcIiBbdmFsdWVdPVxcXCJkb3NzYmVoLmRvc3NpZXJCZWhlZXJkZXJJRFxcXCIgW2lubmVySFRNTF09XFxcImRvc3NiZWgubmFhbVxcXCI+PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJkZGxTdGF0dXNcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5TdGF0dXM8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duIGNvbC1zbS00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cXFwiZGRsU3RhdHVzXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIlN0YXR1c0lkXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwid2lkdGgxMDBwZXJjZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIi0xXFxcIj5TZWxlY3RlZXI8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgc3RzIG9mIFN0YXR1c0xpc3RJdGVtc1xcXCIgW3ZhbHVlXT1cXFwic3RzLnR2U3RhdHVzSURcXFwiIFtpbm5lckhUTUxdPVxcXCJzdHMuc3RhdHVzXFxcIj48L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcImRkbEJlc3RlbW1pbmdzYWFyZFxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPkJlc3RlbW1pbmdzYWFyZDwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24gY29sLXNtLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJkZGxCZXN0ZW1taW5nc2FhcmRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiQmVzdGVtbWluZ3NhYXJkSWRcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJ3aWR0aDEwMHBlcmNlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiLTFcXFwiPlNlbGVjdGVlcjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCBhYXJkIG9mIEJlc3RlbW1pbmdzYWFyZExpc3RJdGVtc1xcXCIgW3ZhbHVlXT1cXFwiYWFyZC5iZXN0ZW1taW5nc0FhcmRJZFxcXCIgW2lubmVySFRNTF09XFxcImFhcmQuYmVzdGVtbWluZ3NBYXJkXFxcIj48L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcInR4dFN0cmFhdFxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPkJlc3RlbW1pbmcgU3RyYWF0PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0eHRTdHJhYXRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiU3RyYWF0XFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwiZGRsR2VmYWN0dXJlZXJkXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+R2VmYWN0dXJlZXJkPC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93biBjb2wtc20tNFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XFxcImRkbEdlZmFjdHVyZWVyZFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJHZWZhY3R1cmVlcmRcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJ3aWR0aDEwMHBlcmNlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiLTFcXFwiPlNlbGVjdGVlcjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiMVxcXCI+SmE8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIjBcXFwiPk5lZTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwidHh0UG9zdGNvZGVcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5CZXN0ZW1taW5nIFBvc3Rjb2RlOjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwidHh0UG9zdGNvZGVcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiUG9zdGNvZGVcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJ0eHRHZW1lZW50ZVxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPkJlc3RlbW1pbmcgR2VtZWVudGU6PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0eHRHZW1lZW50ZVxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJHZW1lZW50ZVxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcInR4dExhbWJlcnRYXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+QmVzdGVtbWluZyBMYW1iZXJ0IFggKGluIG0pPC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0eHRMYW1iZXJ0WFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJMYW1iZXJ0WFxcXCIgQWxsb3dPbmx5TnVtYmVycyBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwiZGRsTGFtYmVydFJhbmdlXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+TGFtYmVydCBSYW5nZTo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duIGNvbC1zbS00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cXFwiZGRsTGFtYmVydFJhbmdlXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkxhbWJlcnRSYW5nZVxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcIndpZHRoMTAwcGVyY2VudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCItMVxcXCI+U2VsZWN0ZWVyPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCIxXFxcIj4xIGttPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCIzXFxcIj4zIGttPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCI1XFxcIj41IGttPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCIxMFxcXCI+MTAga208L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcInR4dExhbWJlcnRYXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+QmVzdGVtbWluZyBMYW1iZXJ0IFkgKGluIG0pPC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0eHRMYW1iZXJ0WVxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJMYW1iZXJ0WVxcXCIgQWxsb3dPbmx5TnVtYmVycyBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+Jm5ic3A7PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcInR4dFZTdHJhYXRcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5UViBTdHJhYXQ6PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0eHRWU3RyYWF0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIlZlcnRyZWtTdHJhYXRcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJ0eHRWR2VtZWVudGVcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5UViBHZW1lZW50ZTo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInR4dFZHZW1lZW50ZVxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJWZXJ0cmVrR2VtZWVudGVcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJkdGVWYW5cXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5EYXR1bSBWYW46PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJkdGVWYW5cXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiZGF0VmFuXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIG5nLXRyaW0taWdub3JlXFxcIiBic0RhdGVwaWNrZXIgcGxhY2VtZW50PVxcXCJ0b3AgbGVmdFxcXCIgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiIERvdHRlZEJvcmRlckJlbG93IFtic0NvbmZpZ109XFxcInsgc2hvd1dlZWtOdW1iZXJzOiBmYWxzZSB9XFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwiZHRlVG90XFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+RGF0dW0gVG90OjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwiZHRlVG90XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImRhdFRvdFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCBuZy10cmltLWlnbm9yZVxcXCIgYnNEYXRlcGlja2VyIHBsYWNlbWVudD1cXFwidG9wIGxlZnRcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBbYnNDb25maWddPVxcXCJ7IHNob3dXZWVrTnVtYmVyczogZmFsc2UgfVxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTQgY29sLXNtLW9mZnNldC04XFxcIj48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwicmFpc2VTZWFyY2goKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCI+e3thcHBMYWJlbHMuU2VuZH19PC9idXR0b24+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9mb3JtPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ndnQtem9la3VpdGdlYnJlaWQvZ3ctZ3Z0LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA2NDhcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2d3LWd2dC16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctZ3Z0LXpvZWt1aXRnZWJyZWlkL2d3LWd2dC16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2NDlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ndnQtem9la3VpdGdlYnJlaWQvZ3ctZ3Z0LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDY1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEdlbmVyYWxTY3JpcHRzIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvZ2VuZXJhbC5zY3JpcHRzXCI7XHJcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UgfSBmcm9tIFwibmd4LXRvYXN0clwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEh0dHBLbGFudFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaHR0cC1rbGFudC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGFwcExhYmVscyB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL2FwcExhYmVsc1wiO1xyXG5pbXBvcnQgeyBEYXRhdGFibGVDb21wb25lbnQgfSBmcm9tIFwiQHN3aW1sYW5lL25neC1kYXRhdGFibGVcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlLCBVc2VyUm9sZXMgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgSVNnc1N0YXR1c0dyaWRJdGVtLCBJU2dzS2xhbnRTdGF0dXNMaXN0SXRlbSB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL3Nnc0ludGVyZmFjZXMuc2NyaXB0c1wiO1xyXG5pbXBvcnQgeyBTZ3NLbGFudFpvZWtWZWxkZW4gfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9zZ3NDbGFzc2VzLnNjcmlwdHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiZ3cta2xhbnQtZ3JpZFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZ3cta2xhbnQtZ3JpZC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9ndy1rbGFudC1ncmlkLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBnd0tsYW50R3JpZENvbXBvbmVudCBleHRlbmRzIEdlbmVyYWxTY3JpcHRzIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGFwcExhYmVscyA9IGFwcExhYmVscztcclxuXHJcbiAgICBTdGF0dXNEcm9wZG93bkxpc3Q6IElTZ3NLbGFudFN0YXR1c0xpc3RJdGVtW10gPSBudWxsO1xyXG4gICAgU3RhdHVzTGlzdDogSVNnc1N0YXR1c0dyaWRJdGVtW10gPSBudWxsO1xyXG4gICAgcm93czogSVNnc1N0YXR1c0dyaWRJdGVtW10gPSBudWxsO1xyXG4gICAgdGVtcDogYW55W10gPSBbXTtcclxuICAgIEBWaWV3Q2hpbGQoRGF0YXRhYmxlQ29tcG9uZW50KSB0YWJsZTogRGF0YXRhYmxlQ29tcG9uZW50O1xyXG5cclxuICAgIEBJbnB1dCgpIHRpdGxlID0gXCJcIjtcclxuICAgIFN0YXR1c0lkOiBudW1iZXIgPSAtMTtcclxuICAgIFR5cGVJZDogbnVtYmVyID0gMDtcclxuICAgIGlzRXh0ZW5kZWRTZWFyY2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBmb3JOaWV1d2VBYW52cmFnZW4gPSB0cnVlO1xyXG4gICAgQElucHV0KCdOaWV1d2VBYW52cmFnZW4nKVxyXG4gICAgZ2V0IE5pZXV3ZUFhbnZyYWdlbigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JOaWV1d2VBYW52cmFnZW47XHJcbiAgICB9XHJcbiAgICBzZXQgTmlldXdlQWFudnJhZ2VuKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5mb3JOaWV1d2VBYW52cmFnZW4gPSBcIlwiICsgdmFsdWUgIT09IFwiZmFsc2VcIjtcclxuICAgIH1cclxuXHJcbiAgICB1c2VTZWFyY2ggPSB0cnVlO1xyXG4gICAgQElucHV0KCdFeHRlbmRlZFNlYXJjaCcpXHJcbiAgICBnZXQgRXh0ZW5kZWRTZWFyY2goKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlU2VhcmNoO1xyXG4gICAgfVxyXG4gICAgc2V0IEV4dGVuZGVkU2VhcmNoKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy51c2VTZWFyY2ggPSBcIlwiICsgdmFsdWUgIT09IFwiZmFsc2VcIjtcclxuICAgIH1cclxuXHJcbiAgICBjYW5EZWxldGUgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgnQWxsb3dEZWxldGUnKVxyXG4gICAgZ2V0IEFsbG93RGVsZXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbkRlbGV0ZTtcclxuICAgIH1cclxuICAgIHNldCBBbGxvd0RlbGV0ZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuY2FuRGVsZXRlID0gXCJcIiArIHZhbHVlICE9PSBcImZhbHNlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgU3RzRm9ybTogRm9ybUdyb3VwO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF90b2FzdHI6IFRvYXN0clNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBodHRwS2xhbnQ6IEh0dHBLbGFudFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGF1dGg6IEF1dGhlbnRpY2F0aW9uU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKF90b2FzdHIpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLlN0c0Zvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgICAgICAgc3RzOiBbM10sXHJcbiAgICAgICAgICAgIHR5cGU6IFswXSxcclxuICAgICAgICAgICAgaWQ6IFtcIlwiXSxcclxuICAgICAgICAgICAgbmFhbTogW1wiXCJdLFxyXG4gICAgICAgICAgICBjb2RlOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIGluc2NocmlqdmluZ3NEYXR1bTogW1wiXCJdLFxyXG4gICAgICAgICAgICBkYXR1bUFjdGllZjogW1wiXCJdLFxyXG4gICAgICAgICAgICBnZWZhY3R1cmVlcmQ6IFtcIlwiXSxcclxuICAgICAgICAgICAgc3RhcnREYXR1bTogW1wiXCJdXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaHR0cEtsYW50LnNnc0tsYW50U3RhdHVzTGlzdEl0ZW1zKCkudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKGxzdDogSVNnc0tsYW50U3RhdHVzTGlzdEl0ZW1bXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxzdCAhPSBudWxsICYmIGxzdCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlN0YXR1c0Ryb3Bkb3duTGlzdCA9IFsuLi5sc3RdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5TdHNGb3JtLnBhdGNoVmFsdWUoeyBzdHM6ICh0aGlzLk5pZXV3ZUFhbnZyYWdlbiA/ICcxJyA6ICczJykgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0NoYW5nZWQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdHVzQ2hhbmdlZCgpIHtcclxuICAgICAgICB0aGlzLlN0YXR1c0lkID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLnN0cy52YWx1ZTtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuU3RzRm9ybS5jb250cm9scy5zdHMudmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIi0xXCI6IC8vIFNlbGVjdGVlclxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXAgPSBbXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAvLyBTdGF0dXNcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFN0YXR1c0xpc3QoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2FkU3RhdHVzTGlzdCgpIHtcclxuICAgICAgICB0aGlzLlR5cGVJZCA9IHRoaXMuU3RzRm9ybS5jb250cm9scy50eXBlLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuaHR0cEtsYW50LnNnc1N0YXR1c0dyaWQodGhpcy5TdGF0dXNJZCwgdGhpcy5UeXBlSWQpLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKChsc3Q6IElTZ3NTdGF0dXNHcmlkSXRlbVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSBsc3Q7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXAgPSBbLi4ubHN0XTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJGb3JtRmllbGRzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRXh0ZW5kZWRTZWFyY2goem9la1ZlbGRlbjogU2dzS2xhbnRab2VrVmVsZGVuKSB7XHJcbiAgICAgICAgdGhpcy5odHRwS2xhbnQuZ3dab2VrTGlzdCh6b2VrVmVsZGVuKS50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbigobHN0OiBJU2dzU3RhdHVzR3JpZEl0ZW1bXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gbHN0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wID0gWy4uLmxzdF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyRm9ybUZpZWxkcygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckZvcm1GaWVsZHMoKSB7XHJcbiAgICAgICAgLy8gQ2xlYXIgYWxsIEZvcm0gVmFsdWVzIGV4Y2VwdCBzdHNcclxuICAgICAgICB0aGlzLlN0c0Zvcm0ucGF0Y2hWYWx1ZSh7XHJcbiAgICAgICAgICAgIGlkOiBcIlwiLFxyXG4gICAgICAgICAgICBuYWFtOiBcIlwiLFxyXG4gICAgICAgICAgICBjb2RlOiBcIlwiLFxyXG4gICAgICAgICAgICBpbnNjaHJpanZpbmdzRGF0dW06IFwiXCIsXHJcbiAgICAgICAgICAgIGRhdHVtQWN0aWVmOiBcIlwiLFxyXG4gICAgICAgICAgICBnZWZhY3R1cmVlcmQ6IFwiXCIsXHJcbiAgICAgICAgICAgIHN0YXJ0RGF0dW06IFwiXCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXIoKSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuaWQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgbmFhbSA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5uYWFtLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuY29kZS52YWx1ZTtcclxuICAgICAgICBjb25zdCBpbnNjaHJpanZpbmdzRGF0dW0gPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuaW5zY2hyaWp2aW5nc0RhdHVtLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRhdHVtQWN0aWVmID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLmRhdHVtQWN0aWVmLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGdlZmFjdHVyZWVyZCA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5nZWZhY3R1cmVlcmQudmFsdWU7XHJcbiAgICAgICAgY29uc3Qgc3RhcnREYXR1bSA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5zdGFydERhdHVtLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRwID0gbmV3IERhdGVQaXBlKFwiZW4tVVNcIik7XHJcblxyXG4gICAgICAgIC8vIGZpbHRlciBvdXIgZGF0YVxyXG4gICAgICAgIGNvbnN0IHRlbXAgPSB0aGlzLnRlbXAuZmlsdGVyKChyb3c6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgaW5zY2hyaWp2aW5nc0RhdHVtQXNTdHJpbmc6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAoaW5zY2hyaWp2aW5nc0RhdHVtID4gXCJcIikgeyBpbnNjaHJpanZpbmdzRGF0dW1Bc1N0cmluZyA9IGRwLnRyYW5zZm9ybShyb3cuaW5zY2hyaWp2aW5nc0RhdHVtLCBcImRkL01NL3l5eXlcIik7IH1cclxuICAgICAgICAgICAgdmFyIGRhdHVtQWN0aWVmQXNTdHJpbmc6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAoZGF0dW1BY3RpZWYgPiBcIlwiKSB7IGRhdHVtQWN0aWVmQXNTdHJpbmcgPSBkcC50cmFuc2Zvcm0ocm93LmRhdHVtQWN0aWVmLCBcImRkL01NL3l5eXlcIik7IH1cclxuICAgICAgICAgICAgdmFyIHN0YXJ0RGF0dW1Bc1N0cmluZzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChzdGFydERhdHVtID4gXCJcIikgeyBzdGFydERhdHVtQXNTdHJpbmcgPSBkcC50cmFuc2Zvcm0ocm93LmZhY3R1cmF0aWVTdGFydERhdHVtLCBcImRkL01NL3l5eXlcIik7IH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoIWlkIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChyb3cua2xhbnRJRCkgJiYgcm93LmtsYW50SUQudG9TdHJpbmcoKS5pbmRleE9mKGlkKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFuYWFtIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChyb3cubmFhbSkgJiYgcm93Lm5hYW0udG9Mb3dlckNhc2UoKS5pbmRleE9mKG5hYW0pICE9PSAtMSkpXHJcbiAgICAgICAgICAgICAgICAmJiAoIWNvZGUgfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHJvdy5iZXJvZXBzb3JnYW5pc2F0aWVjb2RlKSAmJiByb3cuYmVyb2Vwc29yZ2FuaXNhdGllY29kZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoY29kZSkgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghaW5zY2hyaWp2aW5nc0RhdHVtIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChpbnNjaHJpanZpbmdzRGF0dW1Bc1N0cmluZykgJiYgaW5zY2hyaWp2aW5nc0RhdHVtQXNTdHJpbmcuaW5kZXhPZihpbnNjaHJpanZpbmdzRGF0dW0pICE9PSAtMSkpXHJcbiAgICAgICAgICAgICAgICAmJiAoIWRhdHVtQWN0aWVmIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChkYXR1bUFjdGllZkFzU3RyaW5nKSAmJiBkYXR1bUFjdGllZkFzU3RyaW5nLmluZGV4T2YoZGF0dW1BY3RpZWYpICE9PSAtMSkpXHJcbiAgICAgICAgICAgICAgICAmJiAoIWdlZmFjdHVyZWVyZCB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQocm93LmdlZmFjdHVyZWVyZCkgJiYgcm93LmdlZmFjdHVyZWVyZC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZ2VmYWN0dXJlZXJkKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFzdGFydERhdHVtIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChzdGFydERhdHVtQXNTdHJpbmcpICYmIHN0YXJ0RGF0dW1Bc1N0cmluZy5pbmRleE9mKHN0YXJ0RGF0dW0pICE9PSAtMSkpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgcm93c1xyXG4gICAgICAgIHRoaXMucm93cyA9IHRlbXA7XHJcbiAgICAgICAgLy8gV2hlbmV2ZXIgdGhlIGZpbHRlciBjaGFuZ2VzLCBhbHdheXMgZ28gYmFjayB0byB0aGUgZmlyc3QgcGFnZVxyXG4gICAgICAgIHRoaXMudGFibGUub2Zmc2V0ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBvbkFjdGl2YXRlKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJkYmxjbGlja1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlua1RvS2xhbnQoZXZlbnQucm93W1wia2xhbnRJRFwiXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFJvd0NsYXNzKHJvdzogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIFwiaWJ0blwiO1xyXG4gICAgfVxyXG5cclxuICAgIGxpbmtUb0tsYW50KElkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZ3cva2xhbnQtZWRpdC9cIixJZF0pOyBcclxuICAgIH1cclxuXHJcbiAgICBUb2dnbGVFeHRlbmRlZFNlYXJjaCgpIHtcclxuICAgICAgICB0aGlzLmlzRXh0ZW5kZWRTZWFyY2ggPSAhdGhpcy5pc0V4dGVuZGVkU2VhcmNoO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBGaWx0ZXJUeXBlcyB7XHJcbiAgICBBbGwgPSAwLFxyXG4gICAgVG9wQ2dyID0gMSxcclxuICAgIERPUCA9IDJcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXJvdXRlci1sb2FkZXIvc3JjIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rbGFudC1ncmlkL2d3LWtsYW50LWdyaWQuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxmb3JtIFtmb3JtR3JvdXBdPVxcXCJTdHNGb3JtXFxcIiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkIHBhZGRpbmdUb3AxMHB4XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwidXNlU2VhcmNoXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0zXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgKGNsaWNrKT1cXFwiVG9nZ2xlRXh0ZW5kZWRTZWFyY2goKVxcXCI+e3sgaXNFeHRlbmRlZFNlYXJjaCA/ICdFbmtlbHZvdWRpZyB6b2VrZW4nIDogJ0dlYXZhbmNlZXJkIHpvZWtlbicgfX08L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiAqbmdJZj1cXFwidXNlU2VhcmNoICYmICFpc0V4dGVuZGVkU2VhcmNoXFxcIiBjbGFzcz1cXFwiY29sLXNtLTlcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwicGFkZGluZ1JpZ2h0MTBweFxcXCI+RmlsdGVyIHN0YXR1czwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPHNlbGVjdCBmb3JtQ29udHJvbE5hbWU9XFxcInN0c1xcXCIgRG90dGVkQm9yZGVyQmVsb3cgKGNoYW5nZSk9XFxcInN0YXR1c0NoYW5nZWQoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIi0xXFxcIj5TZWxlY3RlZXI8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCBzdHMgb2YgU3RhdHVzRHJvcGRvd25MaXN0XFxcIiBbdmFsdWVdPVxcXCJzdHMua2xhbnRTdGF0dXNJRFxcXCIgW2lubmVySFRNTF09XFxcInN0cy5zdGF0dXNcXFwiPjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwicGFkZGluZ1JpZ2h0NDBweFxcXCI+S2xhbnQgVHlwZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPHNlbGVjdCBmb3JtQ29udHJvbE5hbWU9XFxcInR5cGVcXFwiIERvdHRlZEJvcmRlckJlbG93IChjaGFuZ2UpPVxcXCJzdGF0dXNDaGFuZ2VkKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCIwXFxcIj5BbGxlPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIjFcXFwiPlRvcENncjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCIyXFxcIj5Eb3A8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwidXNlU2VhcmNoICYmIGlzRXh0ZW5kZWRTZWFyY2hcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyXFxcIj48Z3cta2xhbnQtem9la3VpdGdlYnJlaWQgKHNlYXJjaGluZyk9XFxcIm9uRXh0ZW5kZWRTZWFyY2goJGV2ZW50KVxcXCI+PC9ndy1rbGFudC16b2VrdWl0Z2VicmVpZD48L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIk5neFRhYmxlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInB1bGwtbGVmdCBOZ3hUaXRsZVxcXCI+e3t0aXRsZX19PC9wPlxcclxcbiAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZSAjdGFibGVcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJvb3RzdHJhcFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFjdGl2YXRlKT1cXFwib25BY3RpdmF0ZSgkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm93c109XFxcInJvd3NcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb2x1bW5Nb2RlXT1cXFwiJ2ZsZXgnXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaGVhZGVySGVpZ2h0XT1cXFwiNTBcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb290ZXJIZWlnaHRdPVxcXCI0MFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xpbWl0XT1cXFwiYXBwTGFiZWxzLnRhYmxlVmlld1Jvd3NcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3dDbGFzc109XFxcImdldFJvd0NsYXNzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY3NzQ2xhc3Nlc109XFxcImFwcExhYmVscy5pY29uc0Nzc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21lc3NhZ2VzXT1cXFwie3RvdGFsTWVzc2FnZTogYXBwTGFiZWxzLlRvdGFsLnRvTG93ZXJDYXNlKCksIGVtcHR5TWVzc2FnZTogYXBwTGFiZWxzLk5vRGF0YVRvRGlzcGxheX1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzb3J0c109XFxcIlt7cHJvcDona2xhbnRJRCcsIGRpcjonZGVzYycgfV1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3dIZWlnaHRdPVxcXCInYXV0bydcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIHByb3A9XFxcImtsYW50SURcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJMYWJlbFxcXCI+S2xhbnQgSUQ8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiaWRcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXJvdz1cXFwicm93XFxcIiBsZXQtdmFsdWU9XFxcInZhbHVlXFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFtyb3V0ZXJMaW5rXT1cXFwiXFxcIiAoY2xpY2spPVxcXCJsaW5rVG9rbGFudChyb3dbJ2tsYW50SUQnXSlcXFwiPjxzcGFuPnt7cm93WydrbGFudElEJ119fTwvc3Bhbj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiM1xcXCIgcHJvcD1cXFwibmFhbVxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckxhYmVsXFxcIj5OYWFtPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIm5hYW1cXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3ZhbHVlfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMlxcXCIgcHJvcD1cXFwiYmVyb2Vwc29yZ2FuaXNhdGllY29kZVxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiIE5neEZpbHRlckxhYmVsXFxcIj5Db2RlPC9zcGFuPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImNvZGVcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMlxcXCIgbmFtZT1cXFwiaW5zY2hyaWp2aW5nc0RhdHVtXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCIgTmd4RmlsdGVyTGFiZWxcXFwiPkluc2NocmlqdmluZzwvc3Bhbj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJpbnNjaHJpanZpbmdzRGF0dW1cXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3ZhbHVlIHwgZGF0ZTpcXFwiZGQvTU0veXl5eVxcXCJ9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjJcXFwiIG5hbWU9XFxcImRhdHVtQWN0aWVmXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCIgTmd4RmlsdGVyTGFiZWxcXFwiPkFjdGllZjwvc3Bhbj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJkYXR1bUFjdGllZlxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtdmFsdWU9XFxcInZhbHVlXFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dmFsdWUgfCBkYXRlOlxcXCJkZC9NTS95eXl5XFxcIn19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMVxcXCIgcHJvcD1cXFwiZ2VmYWN0dXJlZXJkXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCIgTmd4RmlsdGVyTGFiZWxcXFwiPkdlZmFjdC48L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiZ2VmYWN0dXJlZXJkXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjJcXFwiIG5hbWU9XFxcImZhY3R1cmF0aWVTdGFydERhdHVtXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCIgTmd4RmlsdGVyTGFiZWxcXFwiPlN0YXJ0IERhdHVtPC9zcGFuPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcInN0YXJ0RGF0dW1cXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3ZhbHVlIHwgZGF0ZTpcXFwiZGQvTU0veXl5eVxcXCJ9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIG5hbWU9XFxcIkRldGFpbFxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXJvdz1cXFwicm93XFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9pbWFnZXMvaWNvX2VkaXRyZWNvcmQuZ2lmXCIpICsgXCJcXFwiIGNsYXNzPVxcXCJpYnRuXFxcIiAoY2xpY2spPVxcXCJsaW5rVG9LbGFudChyb3dbJ2tsYW50SUQnXSlcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG48L2Zvcm0+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWtsYW50LWdyaWQvZ3cta2xhbnQtZ3JpZC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNjUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ndy1rbGFudC1ncmlkLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rbGFudC1ncmlkL2d3LWtsYW50LWdyaWQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNjUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta2xhbnQtZ3JpZC9ndy1rbGFudC1ncmlkLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDY1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEdlbmVyYWxTY3JpcHRzIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvZ2VuZXJhbC5zY3JpcHRzXCI7XHJcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UgfSBmcm9tIFwibmd4LXRvYXN0clwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEh0dHBLbGFudFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaHR0cC1rbGFudC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGFwcExhYmVscyB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL2FwcExhYmVsc1wiO1xyXG5pbXBvcnQgeyBEYXRhdGFibGVDb21wb25lbnQgfSBmcm9tIFwiQHN3aW1sYW5lL25neC1kYXRhdGFibGVcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlLCBVc2VyUm9sZXMgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgSVNnc0tsYW50V2lqemlnaW5nIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvc2dzSW50ZXJmYWNlcy5zY3JpcHRzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImd3LWtsYW50d2lqei1ncmlkXCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ndy1rbGFudHdpanotZ3JpZC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9ndy1rbGFudHdpanotZ3JpZC5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgZ3dLbGFudFdpanpHcmlkQ29tcG9uZW50IGV4dGVuZHMgR2VuZXJhbFNjcmlwdHMgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgYXBwTGFiZWxzID0gYXBwTGFiZWxzO1xyXG5cclxuICAgIFN0YXR1c0xpc3Q6IElTZ3NLbGFudFdpanppZ2luZ1tdID0gbnVsbDtcclxuICAgIHByaXZhdGUgcm93czogSVNnc0tsYW50V2lqemlnaW5nW10gPSBudWxsO1xyXG4gICAgdGVtcDogYW55W10gPSBbXTtcclxuICAgIEBWaWV3Q2hpbGQoRGF0YXRhYmxlQ29tcG9uZW50KSB0YWJsZTogRGF0YXRhYmxlQ29tcG9uZW50O1xyXG5cclxuICAgIGlzR1dVc2VyOiBib29sZWFuIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgU3RzRm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX3RvYXN0cjogVG9hc3RyU2VydmljZSwgcHJpdmF0ZSByZWFkb25seSBmYjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgcmVhZG9ubHkgaHR0cEtsYW50OiBIdHRwS2xhbnRTZXJ2aWNlLCBwcml2YXRlIHJlYWRvbmx5IHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJlYWRvbmx5IHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByZWFkb25seSBhdXRoOiBBdXRoZW50aWNhdGlvblNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcihfdG9hc3RyKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5TdHNGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICAgICAgIHN0czogWy0xXSxcclxuICAgICAgICAgICAga2xhbnRJZDogW1wiXCJdLFxyXG4gICAgICAgICAgICBhbmFhbTogW1wiXCJdLFxyXG4gICAgICAgICAgICB2bmFhbTogW1wiXCJdLFxyXG4gICAgICAgICAgICBwY29kZTogW1wiXCJdLFxyXG4gICAgICAgICAgICBwbGFhdHM6IFtcIlwiXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmF1dGguZ2V0Um9sZSgpLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKChyb2xlOiBVc2VyUm9sZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNHV1VzZXIgPSAocm9sZSAhPT0gVXNlclJvbGVzLktsYW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFN0YXR1c0xpc3QoKTtcclxuICAgICAgICAgICAgfSk7ICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGtsYW50SWQgPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMua2xhbnRJZC52YWx1ZTtcclxuICAgICAgICBjb25zdCBhbmFhbSA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5hbmFhbS52YWx1ZTtcclxuICAgICAgICBjb25zdCB2bmFhbSA9IHRoaXMuU3RzRm9ybS5jb250cm9scy52bmFhbS52YWx1ZTtcclxuICAgICAgICBjb25zdCBwY29kZSA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5wY29kZS52YWx1ZTtcclxuICAgICAgICBjb25zdCBwbGFhdHMgPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMucGxhYXRzLnZhbHVlO1xyXG5cclxuICAgICAgICAvLyBmaWx0ZXIgb3VyIGRhdGFcclxuICAgICAgICBjb25zdCB0ZW1wID0gdGhpcy50ZW1wLmZpbHRlcigocm93OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuICgha2xhbnRJZCB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQocm93LmtsYW50SUQpICYmIHJvdy5rbGFudElELnRvU3RyaW5nKCkuaW5kZXhPZihrbGFudElkKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFhbmFhbSB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQocm93LmFjaHRlcm5hYW0pICYmIHJvdy5hY2h0ZXJuYWFtLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihhbmFhbSkgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghdm5hYW0gfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHJvdy52b29ybmFhbSkgJiYgcm93LnZvb3JuYWFtLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih2bmFhbSkgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghcGNvZGUgfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHJvdy5wb3N0Y29kZSkgJiYgcm93LnBvc3Rjb2RlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihwY29kZSkgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghcGxhYXRzIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChyb3cucGxhYXRzKSAmJiByb3cucGxhYXRzLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihwbGFhdHMpICE9PSAtMSkpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgcm93c1xyXG4gICAgICAgIHRoaXMucm93cyA9IHRlbXA7XHJcbiAgICAgICAgLy8gV2hlbmV2ZXIgdGhlIGZpbHRlciBjaGFuZ2VzLCBhbHdheXMgZ28gYmFjayB0byB0aGUgZmlyc3QgcGFnZVxyXG4gICAgICAgIHRoaXMudGFibGUub2Zmc2V0ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvL2xvYWRTdGF0dXModHlwZTogc3RyaW5nKSB7XHJcbiAgICAvLyAgICB0aGlzLmh0dHBCQlIuU3RhdHVzRGVmaW5pdGlvbkxpc3QodGhpcy5UeXBlKS50b1Byb21pc2UoKVxyXG4gICAgLy8gICAgICAgIC50aGVuKChsc3Q6IElCQlJTdGF0dXNbXSkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICBpZiAobHN0ICE9IG51bGwgJiYgbHN0ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgdGhpcy5TdGF0dXNMaXN0ID0gWy4uLmxzdF07XHJcbiAgICAvLyAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0NoYW5nZWQoKTtcclxuICAgIC8vICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgIH0pO1xyXG4gICAgLy99XHJcblxyXG4gICAgbG9hZFN0YXR1c0xpc3QoKSB7XHJcbiAgICAgICAgdGhpcy5odHRwS2xhbnQuc2dzVW5oYW5kbGVkV2lqemlnaW5nZW4oKS50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbigobHN0OiBJU2dzS2xhbnRXaWp6aWdpbmdbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gbHN0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wID0gWy4uLmxzdF07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQWN0aXZhdGUoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGlmIChldmVudC50eXBlID09PSBcImRibGNsaWNrXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5saW5rVG9LbGFudFdpanooZXZlbnQucm93W1wiaWRcIl0sIGV2ZW50LnJvd1tcImtsYW50SURcIl0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRSb3dDbGFzcyhyb3c6IGFueSkge1xyXG4gICAgICAgIHJldHVybiBcImlidG5cIjtcclxuICAgIH1cclxuXHJcbiAgICBsaW5rVG9LbGFudChrbGFudElkOiBudW1iZXIpIHtcclxuICAgICAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvdGVjaG5pc2NoLXZlcnNsYWctZGV0YWlsXCIsIHR2SWRdKTsgIEdXQmVoZWVyL0tsYW50RWRpdC5hc3B4P0tsYW50SUQ9ezB9XHJcbiAgICB9XHJcblxyXG4gICAgbGlua1RvS2xhbnRXaWp6KElkOiBudW1iZXIsIGtsYW50SWQ6IG51bWJlcikge1xyXG4gICAgICAgIC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi90ZWNobmlzY2gtdmVyc2xhZy1kZXRhaWxcIiwgdHZJZF0pOyAgLy8gR1dCZWhlZXIvS2xhbnRXaWp6aWdpbmdlbk92ZXJ6aWNodC5hc3B4P1JlY0lEPXswfSZLbGFudElEPXsxfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi1yb3V0ZXItbG9hZGVyL3NyYyEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta2xhbnR3aWp6LWdyaWQvZ3cta2xhbnR3aWp6LWdyaWQuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxmb3JtIFtmb3JtR3JvdXBdPVxcXCJTdHNGb3JtXFxcIiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkIHBhZGRpbmdUb3AxMHB4XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwiaXNHV1VzZXIgIT0gbnVsbFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIk5neFRhYmxlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUgI3RhYmxlXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJib290c3RyYXBcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhY3RpdmF0ZSk9XFxcIm9uQWN0aXZhdGUoJGV2ZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jvd3NdPVxcXCJyb3dzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29sdW1uTW9kZV09XFxcIidmbGV4J1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2hlYWRlckhlaWdodF09XFxcIjUwXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9vdGVySGVpZ2h0XT1cXFwiNDBcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsaW1pdF09XFxcImFwcExhYmVscy50YWJsZVZpZXdSb3dzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm93Q2xhc3NdPVxcXCJnZXRSb3dDbGFzc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Nzc0NsYXNzZXNdPVxcXCJhcHBMYWJlbHMuaWNvbnNDc3NcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttZXNzYWdlc109XFxcInt0b3RhbE1lc3NhZ2U6IGFwcExhYmVscy5Ub3RhbC50b0xvd2VyQ2FzZSgpLCBlbXB0eU1lc3NhZ2U6IGFwcExhYmVscy5Ob0RhdGFUb0Rpc3BsYXl9XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc29ydHNdPVxcXCJbe3Byb3A6J2lkJywgZGlyOidkZXNjJyB9XVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jvd0hlaWdodF09XFxcIidhdXRvJ1xcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMVxcXCIgcHJvcD1cXFwiaWRcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiIGhpZGRlbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXJvdz1cXFwicm93XFxcIiBsZXQtdmFsdWU9XFxcInZhbHVlXFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dmFsdWV9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIHByb3A9XFxcImtsYW50SURcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJMYWJlbFxcXCI+S2xhbnQgSUQ8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwia2xhbnRJZFxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtcm93PVxcXCJyb3dcXFwiIGxldC12YWx1ZT1cXFwidmFsdWVcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gW3JvdXRlckxpbmtdPVxcXCJcXFwiIChjbGljayk9XFxcImxpbmtUb2tsYW50KHJvd1sna2xhbnRJRCddKVxcXCI+PHNwYW4+e3tyb3dbJ2tsYW50SUQnXX19PC9zcGFuPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIyXFxcIiBwcm9wPVxcXCJhY2h0ZXJuYWFtXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyTGFiZWxcXFwiPkFjaHRlcm5hYW08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiYW5hYW1cXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3ZhbHVlfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMlxcXCIgcHJvcD1cXFwidm9vcm5hYW1cXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIiBOZ3hGaWx0ZXJMYWJlbFxcXCI+Vm9vcm5hYW08L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwidm5hYW1cXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMlxcXCIgcHJvcD1cXFwicG9zdGNvZGVcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIiBOZ3hGaWx0ZXJMYWJlbFxcXCI+UG9zdGNvZGU8L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwicGNvZGVcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMlxcXCIgcHJvcD1cXFwicGxhYXRzXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCIgTmd4RmlsdGVyTGFiZWxcXFwiPlBsYWF0czwvc3Bhbj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJwbGFhdHNcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMVxcXCIgbmFtZT1cXFwiRGV0YWlsXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtcm93PVxcXCJyb3dcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uLy4uLy4uLy4uL2ltYWdlcy9pY29fZWRpdHJlY29yZC5naWZcIikgKyBcIlxcXCIgY2xhc3M9XFxcImlidG5cXFwiIChjbGljayk9XFxcImxpbmtUb0tsYW50V2lqeihyb3dbJ2lkJ10sIHJvd1sna2xhbnRJRCddKVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbjwvZm9ybT5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta2xhbnR3aWp6LWdyaWQvZ3cta2xhbnR3aWp6LWdyaWQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDY1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ3cta2xhbnR3aWp6LWdyaWQuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWtsYW50d2lqei1ncmlkL2d3LWtsYW50d2lqei1ncmlkLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDY1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWtsYW50d2lqei1ncmlkL2d3LWtsYW50d2lqei1ncmlkLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDY1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UgfSBmcm9tIFwibmd4LXRvYXN0clwiO1xyXG5cclxuaW1wb3J0IHsgYXBwTGFiZWxzIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvYXBwTGFiZWxzXCI7XHJcbmltcG9ydCB7IEdlbmVyYWxTY3JpcHRzIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvZ2VuZXJhbC5zY3JpcHRzXCI7XHJcblxyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQgeyBIdHRwS2xhbnRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2h0dHAta2xhbnQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFNnc0tsYW50Wm9la1ZlbGRlbiB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL3Nnc0NsYXNzZXMuc2NyaXB0c1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJndy1rbGFudC16b2VrdWl0Z2VicmVpZFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZ3cta2xhbnQtem9la3VpdGdlYnJlaWQuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vZ3cta2xhbnQtem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzcycpXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIGd3S2xhbnRab2VrVWl0Z2VicmVpZENvbXBvbmVudCBleHRlbmRzIEdlbmVyYWxTY3JpcHRzIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGFwcExhYmVscyA9IGFwcExhYmVscztcclxuICAgIHprRm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICAgIGJlc3RCZWRyaWpmTGlzdDogYW55W107XHJcbiAgICB6b2VrVmVsZGVuOiBTZ3NLbGFudFpvZWtWZWxkZW4gPSBudWxsO1xyXG5cclxuICAgIEBPdXRwdXQoKSBzZWFyY2hpbmc6IEV2ZW50RW1pdHRlcjxTZ3NLbGFudFpvZWtWZWxkZW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxTZ3NLbGFudFpvZWtWZWxkZW4+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfdG9hc3RyOiBUb2FzdHJTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBodHRwS2xhbnQ6IEh0dHBLbGFudFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBASW5qZWN0KFwiQkFTRV9VUkxcIikgcHJpdmF0ZSByZWFkb25seSBfYmFzZVVybDogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9zYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xyXG4gICAgICAgIHN1cGVyKF90b2FzdHIpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuemtGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICAgICAgIEtsYW50SWQ6IFtcIlwiXSxcclxuICAgICAgICAgICAgT3JnYW5pc2F0aWU6IFtcIlwiXSxcclxuICAgICAgICAgICAgVm9vcm5hYW06IFtcIlwiXSxcclxuICAgICAgICAgICAgQWNodGVybmFhbTogW1wiXCJdLFxyXG4gICAgICAgICAgICBTdHJhYXQ6IFtcIlwiXSxcclxuICAgICAgICAgICAgR2VtZWVudGU6IFtcIlwiXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJhaXNlU2VhcmNoKCkge1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbiA9IG5ldyBTZ3NLbGFudFpvZWtWZWxkZW4oKTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4ua2xhbnRJZCA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLktsYW50SWQudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLm9yZ2FuaXNhdGllID0gdGhpcy56a0Zvcm0uY29udHJvbHMuT3JnYW5pc2F0aWUudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLnZvb3JuYWFtID0gdGhpcy56a0Zvcm0uY29udHJvbHMuVm9vcm5hYW0udmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmFjaHRlcm5hYW0gPSB0aGlzLnprRm9ybS5jb250cm9scy5BY2h0ZXJuYWFtLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5zdHJhYXQgPSB0aGlzLnprRm9ybS5jb250cm9scy5TdHJhYXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmdlbWVlbnRlID0gdGhpcy56a0Zvcm0uY29udHJvbHMuR2VtZWVudGUudmFsdWU7XHJcblxyXG4gICAgICAgIHRoaXMuc2VhcmNoaW5nLmVtaXQodGhpcy56b2VrVmVsZGVuKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItcm91dGVyLWxvYWRlci9zcmMhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWtsYW50LXpvZWt1aXRnZWJyZWlkL2d3LWtsYW50LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybSBbZm9ybUdyb3VwXT1cXFwiemtGb3JtXFxcIiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkIHBhZGRpbmdUb3AzMHB4XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxsYWJlbCBmb3I9XFxcInR4dEtsYW50SWRcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5LbGFudCBJZDo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS04XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInR4dEtsYW50SWRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiS2xhbnRJZFxcXCIgQWxsb3dPbmx5TnVtYmVycyBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGxhYmVsIGZvcj1cXFwidHh0T3JnYW5pc2F0aWVcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5PcmdhbmlzYXRpZTo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS04XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInR4dE9yZ2FuaXNhdGllXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIk9yZ2FuaXNhdGllXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGxhYmVsIGZvcj1cXFwidHh0Vm9vcm5hYW1cXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5Wb29ybmFhbTo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS04XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInR4dFZvb3JuYWFtXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIlZvb3JuYWFtXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGxhYmVsIGZvcj1cXFwidHh0QWNodGVybmFhbVxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPkFjaHRlcm5hYW06PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0eHRBY2h0ZXJuYWFtXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkFjaHRlcm5hYW1cXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48bGFiZWwgZm9yPVxcXCJ0eHRTdHJhYXRcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5TdHJhYXQ6PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0eHRTdHJhYXRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiU3RyYWF0XFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGxhYmVsIGZvcj1cXFwidHh0R2VtZWVudGVcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5HZW1lZW50ZTo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS04XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInR4dEdlbWVlbnRlXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkdlbWVlbnRlXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOCBjb2wtc20tb2Zmc2V0LTRcXFwiPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJyYWlzZVNlYXJjaCgpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIj57e2FwcExhYmVscy5TZW5kfX08L2J1dHRvbj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Zvcm0+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWtsYW50LXpvZWt1aXRnZWJyZWlkL2d3LWtsYW50LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA2NjBcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2d3LWtsYW50LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rbGFudC16b2VrdWl0Z2VicmVpZC9ndy1rbGFudC16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2NjFcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rbGFudC16b2VrdWl0Z2VicmVpZC9ndy1rbGFudC16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2NjJcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBHZW5lcmFsU2NyaXB0cyB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL2dlbmVyYWwuc2NyaXB0c1wiO1xyXG5pbXBvcnQgeyBUb2FzdHJTZXJ2aWNlIH0gZnJvbSBcIm5neC10b2FzdHJcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBIdHRwS2xlaW5lV2VydmVuU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9odHRwLWtsZWluZXdlcnZlbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGFwcExhYmVscyB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL2FwcExhYmVsc1wiO1xyXG5pbXBvcnQgeyBEYXRhdGFibGVDb21wb25lbnQgfSBmcm9tIFwiQHN3aW1sYW5lL25neC1kYXRhdGFibGVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBJS1dHcmlkSXRlbSB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL2ludGVyZmFjZXMuc2NyaXB0c1wiO1xyXG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgU2dzS1dab2VrVmVsZGVuIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvc2dzQ2xhc3Nlcy5zY3JpcHRzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImd3LWt3LWdyaWRcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2d3LWt3LWdyaWQuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vZ3cta3ctZ3JpZC5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgZ3dLV0dyaWRDb21wb25lbnQgZXh0ZW5kcyBHZW5lcmFsU2NyaXB0cyBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBhcHBMYWJlbHMgPSBhcHBMYWJlbHM7XHJcblxyXG4gICAgc3RhdHVzRHJvcGRvd25MaXN0OiBhbnlbXTtcclxuICAgIHN0YXR1c0xpc3Q6IElLV0dyaWRJdGVtW107XHJcbiAgICByb3dzOiBJS1dHcmlkSXRlbVtdID0gW107XHJcbiAgICB0ZW1wOiBJS1dHcmlkSXRlbVtdID0gW107XHJcbiAgICBAVmlld0NoaWxkKERhdGF0YWJsZUNvbXBvbmVudCkgZ3JpZDogRGF0YXRhYmxlQ29tcG9uZW50O1xyXG5cclxuICAgIEBJbnB1dCgpIHRpdGxlID0gXCJcIjtcclxuICAgIFN0YXR1c0lkOiBudW1iZXIgPSAtMTtcclxuICAgIGlzRXh0ZW5kZWRTZWFyY2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBmb3JOaWV1d2VBYW52cmFnZW4gPSB0cnVlO1xyXG4gICAgQElucHV0KCdOaWV1d2VBYW52cmFnZW4nKVxyXG4gICAgZ2V0IE5pZXV3ZUFhbnZyYWdlbigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JOaWV1d2VBYW52cmFnZW47XHJcbiAgICB9XHJcbiAgICBzZXQgTmlldXdlQWFudnJhZ2VuKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5mb3JOaWV1d2VBYW52cmFnZW4gPSBcIlwiICsgdmFsdWUgIT09IFwiZmFsc2VcIjtcclxuICAgIH1cclxuXHJcbiAgICB1c2VTZWFyY2ggPSB0cnVlO1xyXG4gICAgQElucHV0KCdFeHRlbmRlZFNlYXJjaCcpXHJcbiAgICBnZXQgRXh0ZW5kZWRTZWFyY2goKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlU2VhcmNoO1xyXG4gICAgfVxyXG4gICAgc2V0IEV4dGVuZGVkU2VhcmNoKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy51c2VTZWFyY2ggPSBcIlwiICsgdmFsdWUgIT09IFwiZmFsc2VcIjtcclxuICAgIH1cclxuXHJcbiAgICBjYW5EZWxldGUgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgnQWxsb3dEZWxldGUnKVxyXG4gICAgZ2V0IEFsbG93RGVsZXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbkRlbGV0ZTtcclxuICAgIH1cclxuICAgIHNldCBBbGxvd0RlbGV0ZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuY2FuRGVsZXRlID0gXCJcIiArIHZhbHVlICE9PSBcImZhbHNlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdHVzRm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgdG9hc3RyOiBUb2FzdHJTZXJ2aWNlLCBwcml2YXRlIHJlYWRvbmx5IHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJlYWRvbmx5IGZiOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSByZWFkb25seSBrd1NlcnZpY2U6IEh0dHBLbGVpbmVXZXJ2ZW5TZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIodG9hc3RyKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN0YXR1c0Zvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgICAgICAgc3RzOiBbXCItMVwiXSxcclxuICAgICAgICAgICAgSUQ6IFtcIlwiXSxcclxuICAgICAgICAgICAgU3RhdHVzSUQ6IFtcIlwiXSxcclxuICAgICAgICAgICAgUmVmOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIEdXOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIFRQVDogW1wiXCJdLFxyXG4gICAgICAgICAgICBIZXJrOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIEJlc3Q6IFtcIlwiXSxcclxuICAgICAgICAgICAgRHRtOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIFN0YXR1czogW1wiXCJdXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMua3dTZXJ2aWNlLmdldFN0YXR1c0xpc3QoKVxyXG4gICAgICAgICAgICAudGhlbigobHN0OiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxzdCAhPSBudWxsICYmIGxzdCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0Ryb3Bkb3duTGlzdCA9IFsuLi5sc3RdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNGb3JtLnBhdGNoVmFsdWUoeyBzdHM6ICh0aGlzLk5pZXV3ZUFhbnZyYWdlbiA/ICcwJyA6ICctMScpIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNDaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0dXNDaGFuZ2VkKCkge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGF0dXNGb3JtLmNvbnRyb2xzLnN0cy52YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiLTFcIjogLy8gU2VsZWN0ZWVyXHJcbiAgICAgICAgICAgICAgICB0aGlzLlN0YXR1c0lkID0gLTE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IC8vIFN0YXR1c1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TdGF0dXNJZCA9IHRoaXMuc3RhdHVzRm9ybS5jb250cm9scy5zdHMudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRTdGF0dXNMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFN0YXR1c0xpc3QoKSB7XHJcbiAgICAgICAgdGhpcy5rd1NlcnZpY2UuZ3dNZWxkaW5nTGlzdEJ5U3RhdHVzKHRoaXMuU3RhdHVzSWQpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhOiBJS1dHcmlkSXRlbVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXAgPSBbLi4uZGF0YV07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckZvcm1GaWVsZHMoKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyRm9ybUZpZWxkcygpIHtcclxuICAgICAgICAvLyBDbGVhciBhbGwgRm9ybSBWYWx1ZXMgZXhjZXB0IHN0c1xyXG4gICAgICAgIHRoaXMuc3RhdHVzRm9ybS5wYXRjaFZhbHVlKHtcclxuICAgICAgICAgICAgSUQ6IFwiXCIsXHJcbiAgICAgICAgICAgIFN0YXR1c0lEOiBcIlwiLFxyXG4gICAgICAgICAgICBSZWY6IFwiXCIsXHJcbiAgICAgICAgICAgIEdXOiBcIlwiLFxyXG4gICAgICAgICAgICBUUFQ6IFwiXCIsXHJcbiAgICAgICAgICAgIEhlcms6IFwiXCIsXHJcbiAgICAgICAgICAgIEJlc3Q6IFwiXCIsXHJcbiAgICAgICAgICAgIER0bTogXCJcIixcclxuICAgICAgICAgICAgU3RhdHVzOiBcIlwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgVG9nZ2xlRXh0ZW5kZWRTZWFyY2goKSB7XHJcbiAgICAgICAgdGhpcy5pc0V4dGVuZGVkU2VhcmNoID0gIXRoaXMuaXNFeHRlbmRlZFNlYXJjaDtcclxuICAgIH1cclxuXHJcbiAgICBvbkV4dGVuZGVkU2VhcmNoKHpvZWtWZWxkZW46IFNnc0tXWm9la1ZlbGRlbikge1xyXG4gICAgICAgIHRoaXMua3dTZXJ2aWNlLmd3Wm9la0xpc3Qoem9la1ZlbGRlbikudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKGxzdDogSUtXR3JpZEl0ZW1bXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gbHN0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wID0gWy4uLmxzdF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyRm9ybUZpZWxkcygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXIoKSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLnN0YXR1c0Zvcm0uY29udHJvbHMuSUQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgcmVmID0gdGhpcy5zdGF0dXNGb3JtLmNvbnRyb2xzLlJlZi52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IGd3ID0gdGhpcy5zdGF0dXNGb3JtLmNvbnRyb2xzLkdXLnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgdHB0ID0gdGhpcy5zdGF0dXNGb3JtLmNvbnRyb2xzLlRQVC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IGhlcmsgPSB0aGlzLnN0YXR1c0Zvcm0uY29udHJvbHMuSGVyay52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IGJlc3QgPSB0aGlzLnN0YXR1c0Zvcm0uY29udHJvbHMuQmVzdC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IGR0bSA9IHRoaXMuc3RhdHVzRm9ybS5jb250cm9scy5EdG0udmFsdWU7XHJcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gdGhpcy5zdGF0dXNGb3JtLmNvbnRyb2xzLlN0YXR1cy52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IGRwID0gbmV3IERhdGVQaXBlKFwiZW4tVVNcIik7XHJcblxyXG4gICAgICAgIC8vIGZpbHRlciBvdXIgZGF0YVxyXG4gICAgICAgIGNvbnN0IHRlbXAgPSB0aGlzLnRlbXAuZmlsdGVyKGZ1bmN0aW9uIChkOiBJS1dHcmlkSXRlbSkge1xyXG5cclxuICAgICAgICAgICAgdmFyIFNEdG06IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAoZHRtID4gXCJcIikgeyBTRHRtID0gZHAudHJhbnNmb3JtKGQuc3RhcnREYXR1bSwgXCJkZC9NTS95eXl5XCIpOyB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKChkLm1lbGRpbmdJRCAhPSBudWxsICYmIGQubWVsZGluZ0lEICE9IHVuZGVmaW5lZCAmJiBkLm1lbGRpbmdJRC50b1N0cmluZygpLmluZGV4T2YoaWQpICE9PSAtMSkgfHwgIWlkKVxyXG4gICAgICAgICAgICAgICAgJiYgKChkLmtsYW50UmVmZXJlbnRpZSAhPSBudWxsICYmIGQua2xhbnRSZWZlcmVudGllICE9IHVuZGVmaW5lZCAmJiBkLmtsYW50UmVmZXJlbnRpZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YocmVmKSAhPT0gLTEpIHx8ICFyZWYpXHJcbiAgICAgICAgICAgICAgICAmJiAoKGQuZ3JvbmR3ZXJrZXIgIT0gbnVsbCAmJiBkLmdyb25kd2Vya2VyICE9IHVuZGVmaW5lZCAmJiBkLmdyb25kd2Vya2VyLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihndykgIT09IC0xKSB8fCAhZ3cpXHJcbiAgICAgICAgICAgICAgICAmJiAoKGQudHJhbnNwb3J0ZXVyICE9IG51bGwgJiYgZC50cmFuc3BvcnRldXIgIT0gdW5kZWZpbmVkICYmIGQudHJhbnNwb3J0ZXVyLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0cHQpICE9PSAtMSkgfHwgIXRwdClcclxuICAgICAgICAgICAgICAgICYmICgoZC5oZXJrb21zdCAhPSBudWxsICYmIGQuaGVya29tc3QgIT0gdW5kZWZpbmVkICYmIGQuaGVya29tc3QudG9Mb3dlckNhc2UoKS5pbmRleE9mKGhlcmspICE9PSAtMSkgfHwgIWhlcmspXHJcbiAgICAgICAgICAgICAgICAmJiAoKGQuYmVzdGVtbWluZyAhPSBudWxsICYmIGQuYmVzdGVtbWluZyAhPSB1bmRlZmluZWQgJiYgZC5iZXN0ZW1taW5nLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihiZXN0KSAhPT0gLTEpIHx8ICFiZXN0KVxyXG4gICAgICAgICAgICAgICAgJiYgKChkLnN0YXR1cyAhPSBudWxsICYmIGQuc3RhdHVzICE9IHVuZGVmaW5lZCAmJiBkLnN0YXR1cy50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc3RhdHVzKSAhPT0gLTEpIHx8ICFzdGF0dXMpXHJcbiAgICAgICAgICAgICAgICAmJiAoIWR0bSB8fCAoU0R0bSAhPSBudWxsICYmIFNEdG0uaW5kZXhPZihkdG0pICE9PSAtMSkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgdGhlIHJvd3NcclxuICAgICAgICB0aGlzLnJvd3MgPSB0ZW1wO1xyXG4gICAgICAgIC8vIFdoZW5ldmVyIHRoZSBmaWx0ZXIgY2hhbmdlcywgYWx3YXlzIGdvIGJhY2sgdG8gdGhlIGZpcnN0IHBhZ2VcclxuICAgICAgICB0aGlzLmdyaWQub2Zmc2V0ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBvbkFjdGl2YXRlKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJkYmxjbGlja1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlua1RvS1coZXZlbnQucm93W1wibWVsZGluZ0lEXCJdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGlua1RvS1coaWQ6IG51bWJlcikge1xyXG4gICAgICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2tsZWluZXdlcnZlbi1kZXRhaWxcIiwgaWRdKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZ3cva3ctZWRpdFwiLCBpZF0pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi1yb3V0ZXItbG9hZGVyL3NyYyEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta3ctZ3JpZC9ndy1rdy1ncmlkLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybSBbZm9ybUdyb3VwXT1cXFwic3RhdHVzRm9ybVxcXCIgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZCBwYWRkaW5nVG9wMTBweFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgKm5nSWY9XFxcInVzZVNlYXJjaFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tM1xcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIChjbGljayk9XFxcIlRvZ2dsZUV4dGVuZGVkU2VhcmNoKClcXFwiPnt7IGlzRXh0ZW5kZWRTZWFyY2ggPyAnRW5rZWx2b3VkaWcgem9la2VuJyA6ICdHZWF2YW5jZWVyZCB6b2VrZW4nIH19PC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgKm5nSWY9XFxcInVzZVNlYXJjaCAmJiAhaXNFeHRlbmRlZFNlYXJjaFxcXCIgY2xhc3M9XFxcImNvbC1zbS05XFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcInBhZGRpbmdSaWdodDEwcHhcXFwiPkZpbHRlciBzdGF0dXM8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxzZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVxcXCJzdHNcXFwiIERvdHRlZEJvcmRlckJlbG93IChjaGFuZ2UpPVxcXCJzdGF0dXNDaGFuZ2VkKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCItMVxcXCI+U2VsZWN0ZWVyPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgc3RzIG9mIHN0YXR1c0Ryb3Bkb3duTGlzdFxcXCIgW3ZhbHVlXT1cXFwic3RzLmlkXFxcIiBbaW5uZXJIVE1MXT1cXFwic3RzLnN0YXR1c1xcXCI+PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgKm5nSWY9XFxcInVzZVNlYXJjaCAmJiBpc0V4dGVuZGVkU2VhcmNoXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMlxcXCI+PGd3LWt3LXpvZWt1aXRnZWJyZWlkIChzZWFyY2hpbmcpPVxcXCJvbkV4dGVuZGVkU2VhcmNoKCRldmVudClcXFwiPjwvZ3cta3ctem9la3VpdGdlYnJlaWQ+PC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJOZ3hUYWJsZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlICN0YWJsZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYm9vdHN0cmFwXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYWN0aXZhdGUpPVxcXCJvbkFjdGl2YXRlKCRldmVudClcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3dzXT1cXFwicm93c1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbHVtbk1vZGVdPVxcXCInZmxleCdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtoZWFkZXJIZWlnaHRdPVxcXCI1MFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zvb3RlckhlaWdodF09XFxcIjQwXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGltaXRdPVxcXCJhcHBMYWJlbHMudGFibGVWaWV3Um93c1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Nzc0NsYXNzZXNdPVxcXCJhcHBMYWJlbHMuaWNvbnNDc3NcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttZXNzYWdlc109XFxcInt0b3RhbE1lc3NhZ2U6IGFwcExhYmVscy5Ub3RhbC50b0xvd2VyQ2FzZSgpLCBlbXB0eU1lc3NhZ2U6IGFwcExhYmVscy5Ob0RhdGFUb0Rpc3BsYXl9XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc29ydHNdPVxcXCJbe3Byb3A6J0lEJywgZGlyOidkZXNjJyB9XVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jvd0hlaWdodF09XFxcIidhdXRvJ1xcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMVxcXCIgcHJvcD1cXFwibWVsZGluZ0lEXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyTGFiZWxcXFwiPk51bW1lcjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJJRFxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtcm93PVxcXCJyb3dcXFwiIGxldC12YWx1ZT1cXFwidmFsdWVcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gW3JvdXRlckxpbmtdPVxcXCJcXFwiIChjbGljayk9XFxcImxpbmtUb0tXKHJvd1snbWVsZGluZ0lEJ10pXFxcIj48c3Bhbj57e3Jvd1snbWVsZGluZ0lEJ119fTwvc3Bhbj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMVxcXCIgcHJvcD1cXFwia2xhbnRSZWZlcmVudGllXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyTGFiZWxcXFwiPlJlZmVyZW50aWU8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiUmVmXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjNcXFwiIHByb3A9XFxcImdyb25kd2Vya2VyXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyTGFiZWxcXFwiPkdyb25kd2Vya2VyPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkdXXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjNcXFwiIHByb3A9XFxcInRyYW5zcG9ydGV1clxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckxhYmVsXFxcIj5UcmFuc3BvcnRldXI8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiVFBUXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjNcXFwiIHByb3A9XFxcImhlcmtvbXN0XFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyTGFiZWxcXFwiPkhlcmtvbXN0PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkhlcmtcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiM1xcXCIgcHJvcD1cXFwiYmVzdGVtbWluZ1xcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckxhYmVsXFxcIj5CZXN0ZW1taW5nPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkJlc3RcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMVxcXCIgbmFtZT1cXFwic3RhcnREYXR1bVxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiIE5neEZpbHRlckxhYmVsXFxcIj5TdGFydERhdHVtPC9zcGFuPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkR0bVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtdmFsdWU9XFxcInZhbHVlXFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dmFsdWUgfCBkYXRlOlxcXCJkZC9NTS95eXl5XFxcIn19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMVxcXCIgcHJvcD1cXFwic3RhdHVzXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyTGFiZWxcXFwiPlN0YXR1czwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJTdGF0dXNcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMVxcXCIgbmFtZT1cXFwiRGV0YWlsXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtcm93PVxcXCJyb3dcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uLy4uLy4uLy4uL2ltYWdlcy9pY29fZWRpdHJlY29yZC5naWZcIikgKyBcIlxcXCIgY2xhc3M9XFxcImlidG5cXFwiIChjbGljayk9XFxcImxpbmtUb0tXKHJvd1snbWVsZGluZ0lEJ10pXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGU+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuPC9mb3JtPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rdy1ncmlkL2d3LWt3LWdyaWQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDY2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ3cta3ctZ3JpZC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta3ctZ3JpZC9ndy1rdy1ncmlkLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDY2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWt3LWdyaWQvZ3cta3ctZ3JpZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2NjZcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24sIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBUb2FzdHJTZXJ2aWNlIH0gZnJvbSBcIm5neC10b2FzdHJcIjtcclxuXHJcbmltcG9ydCB7IGFwcExhYmVscyB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL2FwcExhYmVsc1wiO1xyXG5pbXBvcnQgeyBHZW5lcmFsU2NyaXB0cyB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL2dlbmVyYWwuc2NyaXB0c1wiO1xyXG5cclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHsgSHR0cERvc3NpZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2h0dHAtZG9zc2llci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEh0dHBLbGFudFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaHR0cC1rbGFudC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEh0dHBUVlNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaHR0cC10di5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgQnNMb2NhbGVTZXJ2aWNlIH0gZnJvbSBcIm5neC1ib290c3RyYXAvZGF0ZXBpY2tlclwiO1xyXG5pbXBvcnQgeyBTZ3NLV1pvZWtWZWxkZW4gfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9zZ3NDbGFzc2VzLnNjcmlwdHNcIjtcclxuaW1wb3J0IHsgSVNnc0tsYW50Q29tYm9MaXN0SXRlbSwgSVNnc0Rvc3NpZXJDb21ib0xpc3RJdGVtIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvc2dzSW50ZXJmYWNlcy5zY3JpcHRzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImd3LWt3LXpvZWt1aXRnZWJyZWlkXCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ndy1rdy16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9ndy1rdy16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuY3NzJyldLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgZ3dLV1pvZWtVaXRnZWJyZWlkQ29tcG9uZW50IGV4dGVuZHMgR2VuZXJhbFNjcmlwdHMgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgYXBwTGFiZWxzID0gYXBwTGFiZWxzO1xyXG4gICAgemtGb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gICAgSW5kaWVuZXJMaXN0SXRlbXM6IElTZ3NLbGFudENvbWJvTGlzdEl0ZW1bXSA9IG51bGw7XHJcbiAgICBEb3NzaWVyQmVoZWVyZGVyTGlzdEl0ZW1zOiBJU2dzRG9zc2llckNvbWJvTGlzdEl0ZW1bXSA9IG51bGw7XHJcblxyXG4gICAgem9la1ZlbGRlbjogU2dzS1dab2VrVmVsZGVuID0gbnVsbDtcclxuXHJcbiAgICBAT3V0cHV0KCkgc2VhcmNoaW5nOiBFdmVudEVtaXR0ZXI8U2dzS1dab2VrVmVsZGVuPiA9IG5ldyBFdmVudEVtaXR0ZXI8U2dzS1dab2VrVmVsZGVuPigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX3RvYXN0cjogVG9hc3RyU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGZiOiBGb3JtQnVpbGRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2xvY2FsZVNlcnZpY2U6IEJzTG9jYWxlU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgaHR0cERvc3NpZXI6IEh0dHBEb3NzaWVyU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgaHR0cEtsYW50OiBIdHRwS2xhbnRTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBodHRwVFY6IEh0dHBUVlNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBASW5qZWN0KFwiQkFTRV9VUkxcIikgcHJpdmF0ZSByZWFkb25seSBfYmFzZVVybDogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9zYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xyXG4gICAgICAgIHN1cGVyKF90b2FzdHIpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE5lZWRlZCBjb25maWd1cmF0aW9uIGZvciB0aGUgYnNEYXRlcGlja2VyIHRvIGFjY2VwdCBkZC9NTS95eXl5IGZvcm1hdHRpbmdcclxuICAgICAgICB0aGlzLl9sb2NhbGVTZXJ2aWNlLnVzZShcImJvb3RzdHJhcC1sb2NhbGUtbmxiZVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy56a0Zvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgICAgICAgQ29kZTogW1wiXCJdLFxyXG4gICAgICAgICAgICBJbmRpZW5lcjogW1wiLTFcIl0sXHJcbiAgICAgICAgICAgIFZlcmtsYXJpbmdPbnR2YW5nZW46IFtcIlwiXSxcclxuICAgICAgICAgICAgUmVmZXJlbnRpZTogW1wiXCJdLFxyXG4gICAgICAgICAgICBEb3NzaWVyQmVoZWVyZGVyOiBbXCItMVwiXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWREcm9wZG93bnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkRHJvcGRvd25zKCkge1xyXG4gICAgICAgIHRoaXMuaHR0cEtsYW50LnNnc0NvbWJvTGlzdEl0ZW1zKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgobHN0OiBJU2dzS2xhbnRDb21ib0xpc3RJdGVtW10pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChsc3QgIT0gbnVsbCAmJiBsc3QgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5JbmRpZW5lckxpc3RJdGVtcyA9IFsuLi5sc3RdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5odHRwRG9zc2llci5zZ3NDb21ib0xpc3RJdGVtcygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGxzdDogSVNnc0Rvc3NpZXJDb21ib0xpc3RJdGVtW10pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChsc3QgIT0gbnVsbCAmJiBsc3QgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Eb3NzaWVyQmVoZWVyZGVyTGlzdEl0ZW1zID0gWy4uLmxzdF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJhaXNlU2VhcmNoKCkge1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbiA9IG5ldyBTZ3NLV1pvZWtWZWxkZW4oKTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4ua2xhbnRJZCA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLkluZGllbmVyLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5yZWZlcmVudGllID0gdGhpcy56a0Zvcm0uY29udHJvbHMuUmVmZXJlbnRpZS52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4udmVya2xhcmluZ29udHZhbmdlbiA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLlZlcmtsYXJpbmdPbnR2YW5nZW4udmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmRvc3NpZXJCZWhlZXJkZXJJZCA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLkRvc3NpZXJCZWhlZXJkZXIudmFsdWU7XHJcblxyXG4gICAgICAgIHRoaXMuc2VhcmNoaW5nLmVtaXQodGhpcy56b2VrVmVsZGVuKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItcm91dGVyLWxvYWRlci9zcmMhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWt3LXpvZWt1aXRnZWJyZWlkL2d3LWt3LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybSBbZm9ybUdyb3VwXT1cXFwiemtGb3JtXFxcIiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkIHBhZGRpbmdUb3AzMHB4XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcImRkbEluZGllbmVyXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+S2xhbnQvSW5kaWVuZXI8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duIGNvbC1zbS00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cXFwiZGRsSW5kaWVuZXJcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiSW5kaWVuZXJcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJ3aWR0aDEwMHBlcmNlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiLTFcXFwiPlNlbGVjdGVlcjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCBrbGFudCBvZiBJbmRpZW5lckxpc3RJdGVtc1xcXCIgW3ZhbHVlXT1cXFwia2xhbnQua2xhbnRJRFxcXCIgW2lubmVySFRNTF09XFxcImtsYW50Lm5hYW1cXFwiPjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwiY2hrVmVya2xhcmluZ09udHZhbmdlblxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPlZlcmtsYXJpbmcgT250dmFuZ2VuOjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2hlY2tib3ggY29sLXNtLTRcXFwiPjxkaXYgY2xhc3M9XFxcIm1hcmdpblRvcE1pbjEwcHggbWFyZ2luTGVmdDIwcHhcXFwiPjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgaWQ9XFxcImNoa1ZlcmtsYXJpbmdPbnR2YW5nZW5cXFwiIGNsYXNzPVxcXCJtYXJnaW5Cb3R0b20wXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIlZlcmtsYXJpbmdPbnR2YW5nZW5cXFwiIHZhbHVlPVxcXCJcXFwiIC8+PC9kaXY+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcInR4dFJlZmVyZW50aWVcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5SZWZlcmVudGllOjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwidHh0UmVmZXJlbnRpZVxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJSZWZlcmVudGllXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwiZGRsRG9zc2llckJlaGVlcmRlclxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPkRvc3NpZXJCZWhlZXJkZXI8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duIGNvbC1zbS00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cXFwiZGRsRG9zc2llckJlaGVlcmRlclxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJEb3NzaWVyQmVoZWVyZGVyXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwid2lkdGgxMDBwZXJjZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIi0xXFxcIj5TZWxlY3RlZXI8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgZG9zc2JlaCBvZiBEb3NzaWVyQmVoZWVyZGVyTGlzdEl0ZW1zXFxcIiBbdmFsdWVdPVxcXCJkb3NzYmVoLmRvc3NpZXJCZWhlZXJkZXJJRFxcXCIgW2lubmVySFRNTF09XFxcImRvc3NiZWgubmFhbVxcXCI+PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00IGNvbC1zbS1vZmZzZXQtOFxcXCI+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcInJhaXNlU2VhcmNoKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiPnt7YXBwTGFiZWxzLlNlbmR9fTwvYnV0dG9uPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZm9ybT5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta3ctem9la3VpdGdlYnJlaWQvZ3cta3ctem9la3VpdGdlYnJlaWQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDY2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ3cta3ctem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWt3LXpvZWt1aXRnZWJyZWlkL2d3LWt3LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDY2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvLyBCQlJcclxuZXhwb3J0IGNsYXNzIFNnc0JCUlpvZWtWZWxkZW4ge1xyXG4gICAgY29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIHR2SWQ6IG51bWJlciB8IG51bGw7XHJcbiAgICBrbGFudElkOiBudW1iZXIgfCBudWxsO1xyXG4gICAgZG9zc2llckJlaGVlcmRlcklkOiBudW1iZXIgfCBudWxsO1xyXG4gICAgc3RhdHVzSWQ6IG51bWJlciB8IG51bGw7XHJcbiAgICBiZXN0ZW1taW5nc2FhcmRJZDogbnVtYmVyIHwgbnVsbDtcclxuICAgIGdlZmFjdHVyZWVyZDogbnVtYmVyIHwgbnVsbDtcclxuICAgIHN0cmFhdDogc3RyaW5nO1xyXG4gICAgcG9zdGNvZGU6IHN0cmluZztcclxuICAgIGdlbWVlbnRlOiBzdHJpbmc7XHJcbiAgICBsYW1iZXJ0WDogbnVtYmVyIHwgbnVsbDtcclxuICAgIGxhbWJlcnRZOiBudW1iZXIgfCBudWxsO1xyXG4gICAgbGFtYmVydFJhbmdlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgdmVydHJla1N0cmFhdDogc3RyaW5nO1xyXG4gICAgdmVydHJla0dlbWVlbnRlOiBzdHJpbmc7XHJcbiAgICBkYXRWYW46IERhdGUgfCBudWxsO1xyXG4gICAgZGF0VG90OiBEYXRlIHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBHVE1cclxuZXhwb3J0IGNsYXNzIFNnc0dUTVpvZWtWZWxkZW4ge1xyXG4gICAgZ3RtSWQ6IG51bWJlciB8IG51bGw7XHJcbiAgICBkYXRWYW46IERhdGUgfCBudWxsO1xyXG4gICAgZGF0VG90OiBEYXRlIHwgbnVsbDtcclxuICAgIHN0cmFhdDogc3RyaW5nO1xyXG4gICAgZ2VtZWVudGU6IHN0cmluZztcclxuICAgIHRvcElkOiBudW1iZXIgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gR1ZUXHJcbmV4cG9ydCBjbGFzcyBTZ3NHVlRab2VrVmVsZGVuIHtcclxuICAgIGNvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICB0dklkOiBudW1iZXIgfCBudWxsO1xyXG4gICAga2xhbnRJZDogbnVtYmVyIHwgbnVsbDtcclxuICAgIGRvc3NpZXJCZWhlZXJkZXJJZDogbnVtYmVyIHwgbnVsbDtcclxuICAgIHN0YXR1c0lkOiBudW1iZXIgfCBudWxsO1xyXG4gICAgYmVzdGVtbWluZ3NhYXJkSWQ6IG51bWJlciB8IG51bGw7XHJcbiAgICBnZWZhY3R1cmVlcmQ6IG51bWJlciB8IG51bGw7XHJcbiAgICBzdHJhYXQ6IHN0cmluZztcclxuICAgIHBvc3Rjb2RlOiBzdHJpbmc7XHJcbiAgICBnZW1lZW50ZTogc3RyaW5nO1xyXG4gICAgbGFtYmVydFg6IG51bWJlciB8IG51bGw7XHJcbiAgICBsYW1iZXJ0WTogbnVtYmVyIHwgbnVsbDtcclxuICAgIGxhbWJlcnRSYW5nZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIHZlcnRyZWtTdHJhYXQ6IHN0cmluZztcclxuICAgIHZlcnRyZWtHZW1lZW50ZTogc3RyaW5nO1xyXG4gICAgZGF0VmFuOiBEYXRlIHwgbnVsbDtcclxuICAgIGRhdFRvdDogRGF0ZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gS2xhbnRcclxuZXhwb3J0IGNsYXNzIFNnc0tsYW50Wm9la1ZlbGRlbiB7XHJcbiAgICBrbGFudElkOiBudW1iZXIgfCBudWxsO1xyXG4gICAgb3JnYW5pc2F0aWU6IHN0cmluZyB8IG51bGw7XHJcbiAgICB2b29ybmFhbTogc3RyaW5nIHwgbnVsbDtcclxuICAgIGFjaHRlcm5hYW06IHN0cmluZyB8IG51bGw7XHJcbiAgICBzdHJhYXQ6IHN0cmluZztcclxuICAgIGdlbWVlbnRlOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG4vLyBLV1xyXG5leHBvcnQgY2xhc3MgU2dzS1dab2VrVmVsZGVuIHtcclxuICAgIGtsYW50SWQ6IG51bWJlciB8IG51bGw7XHJcbiAgICByZWZlcmVudGllOiBzdHJpbmc7XHJcbiAgICB2ZXJrbGFyaW5nb250dmFuZ2VuOiBib29sZWFuIHwgbnVsbDtcclxuICAgIGRvc3NpZXJCZWhlZXJkZXJJZDogbnVtYmVyIHwgbnVsbDtcclxufVxyXG5cclxuLy8gVFZcclxuZXhwb3J0IGNsYXNzIFNnc1RWWm9la1ZlbGRlbiB7XHJcbiAgICB0dklkOiBudW1iZXIgfCBudWxsO1xyXG4gICAga2xhbnRJZDogbnVtYmVyIHwgbnVsbDtcclxuICAgIGZhY3R1dXJSZWY6IHN0cmluZztcclxuICAgIGFkcmVzOiBzdHJpbmc7XHJcbiAgICBnZW1lZW50ZTogc3RyaW5nO1xyXG4gICAgdGl0ZWw6IHN0cmluZztcclxuICAgIGJlc2NocmlqdmluZzogc3RyaW5nO1xyXG4gICAgcmVmZXJlbnRpZTogc3RyaW5nO1xyXG4gICAgb3Zlcm5hbWU6IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgc2FtZW5nZXZvZWdkOiBib29sZWFuIHwgbnVsbDtcclxuICAgIGVic2Q6IHN0cmluZztcclxuICAgIGluZGllbmluZ3N3aWp6ZUlkOiBudW1iZXIgfCBudWxsO1xyXG4gICAgZGF0dW06IERhdGUgfCBudWxsO1xyXG4gICAgc3RhdHVzSWQ6IG51bWJlciB8IG51bGw7XHJcbiAgICBnZWZhY3R1cmVlcmQ6IG51bWJlciB8IG51bGw7XHJcbiAgICBkb3NzaWVyQmVoZWVyZGVySWQ6IG51bWJlciB8IG51bGw7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi1yb3V0ZXItbG9hZGVyL3NyYyEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zY3JpcHRzL3Nnc0NsYXNzZXMuc2NyaXB0cy50cyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta3ctem9la3VpdGdlYnJlaWQvZ3cta3ctem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNjcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgR2VuZXJhbFNjcmlwdHMgfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9nZW5lcmFsLnNjcmlwdHNcIjtcclxuaW1wb3J0IHsgVG9hc3RyU2VydmljZSB9IGZyb20gXCJuZ3gtdG9hc3RyXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgSHR0cFRWU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9odHRwLXR2LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSVNnc1RWQnlTdGF0dXMgfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9zZ3NJbnRlcmZhY2VzLnNjcmlwdHNcIjtcclxuaW1wb3J0IHsgU2dzVFZab2VrVmVsZGVuIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvc2dzQ2xhc3Nlcy5zY3JpcHRzXCI7XHJcbmltcG9ydCB7IGFwcExhYmVscyB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL2FwcExhYmVsc1wiO1xyXG5pbXBvcnQgeyBEYXRhdGFibGVDb21wb25lbnQgfSBmcm9tIFwiQHN3aW1sYW5lL25neC1kYXRhdGFibGVcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IElUVlN0YXR1c0RlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9pbnRlcmZhY2VzLnNjcmlwdHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiZ3ctdHYtZ3JpZFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZ3ctdHYtZ3JpZC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9ndy10di1ncmlkLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBnd1RWR3JpZENvbXBvbmVudCBleHRlbmRzIEdlbmVyYWxTY3JpcHRzIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGFwcExhYmVscyA9IGFwcExhYmVscztcclxuXHJcbiAgICBTdGF0dXNEcm9wZG93bkxpc3Q6IElUVlN0YXR1c0RlZmluaXRpb25bXSA9IG51bGw7XHJcbiAgICBTdGF0dXNMaXN0OiBJU2dzVFZCeVN0YXR1c1tdID0gbnVsbDtcclxuICAgIHJvd3M6IElTZ3NUVkJ5U3RhdHVzW10gPSBudWxsO1xyXG4gICAgdGVtcDogYW55W10gPSBbXTtcclxuICAgIEBWaWV3Q2hpbGQoRGF0YXRhYmxlQ29tcG9uZW50KSB0YWJsZTogRGF0YXRhYmxlQ29tcG9uZW50O1xyXG5cclxuICAgIEBJbnB1dCgpIHRpdGxlID0gXCJcIjtcclxuICAgIFN0YXR1c0lkOiBudW1iZXIgPSAtMTtcclxuICAgIGlzRXh0ZW5kZWRTZWFyY2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBmb3JOaWV1d2VBYW52cmFnZW4gPSB0cnVlO1xyXG4gICAgQElucHV0KCdOaWV1d2VBYW52cmFnZW4nKVxyXG4gICAgZ2V0IE5pZXV3ZUFhbnZyYWdlbigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JOaWV1d2VBYW52cmFnZW47XHJcbiAgICB9XHJcbiAgICBzZXQgTmlldXdlQWFudnJhZ2VuKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5mb3JOaWV1d2VBYW52cmFnZW4gPSBcIlwiICsgdmFsdWUgIT09IFwiZmFsc2VcIjtcclxuICAgIH1cclxuXHJcbiAgICB1c2VTZWFyY2ggPSB0cnVlO1xyXG4gICAgQElucHV0KCdFeHRlbmRlZFNlYXJjaCcpXHJcbiAgICBnZXQgRXh0ZW5kZWRTZWFyY2goKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlU2VhcmNoO1xyXG4gICAgfVxyXG4gICAgc2V0IEV4dGVuZGVkU2VhcmNoKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy51c2VTZWFyY2ggPSBcIlwiICsgdmFsdWUgIT09IFwiZmFsc2VcIjtcclxuICAgIH1cclxuXHJcbiAgICBjYW5EZWxldGUgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgnQWxsb3dEZWxldGUnKVxyXG4gICAgZ2V0IEFsbG93RGVsZXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbkRlbGV0ZTtcclxuICAgIH1cclxuICAgIHNldCBBbGxvd0RlbGV0ZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuY2FuRGVsZXRlID0gXCJcIiArIHZhbHVlICE9PSBcImZhbHNlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgU3RzRm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX3RvYXN0cjogVG9hc3RyU2VydmljZSwgcHJpdmF0ZSByZWFkb25seSBmYjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgcmVhZG9ubHkgaHR0cFRWOiBIdHRwVFZTZXJ2aWNlLCBwcml2YXRlIHJlYWRvbmx5IHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJlYWRvbmx5IHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByZWFkb25seSBhdXRoOiBBdXRoZW50aWNhdGlvblNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcihfdG9hc3RyKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5TdHNGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICAgICAgIHN0czogWy0xXSxcclxuICAgICAgICAgICAgdGVjaG5pc2NoVmVyc2xhZ0lEOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIG5hYW06IFtcIlwiXSxcclxuICAgICAgICAgICAgZ2VtZWVudGVPbmRlcnpvZWtzbG9jYXRpZTogW1wiXCJdLFxyXG4gICAgICAgICAgICBpbmRpZW5pbmdzRGF0dW06IFtcIlwiXSxcclxuICAgICAgICAgICAgc3RhdHVzRGF0dW06IFtcIlwiXSxcclxuICAgICAgICAgICAgaW5kaWVuaW5nc3dpanplOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIGdlZmFjdHVyZWVyZDogW1wiXCJdXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaHR0cFRWLlN0YXR1c0RlZmluaXRpb25MaXN0KHRydWUpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGxzdDogSVRWU3RhdHVzRGVmaW5pdGlvbltdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobHN0ICE9IG51bGwgJiYgbHN0ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU3RhdHVzRHJvcGRvd25MaXN0ID0gWy4uLmxzdF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLlN0c0Zvcm0ucGF0Y2hWYWx1ZSh7IHN0czogKHRoaXMuTmlldXdlQWFudnJhZ2VuID8gJzAnIDogJzEnKSB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzQ2hhbmdlZCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0dXNDaGFuZ2VkKCkge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5TdHNGb3JtLmNvbnRyb2xzLnN0cy52YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiLTFcIjogLy8gU2VsZWN0ZWVyXHJcbiAgICAgICAgICAgICAgICB0aGlzLlN0YXR1c0lkID0gLTE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCIwXCI6IC8vIE5pZXV3ZSBBYW52cmFnZW4gXHJcbiAgICAgICAgICAgICAgICB0aGlzLlN0YXR1c0lkID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuTmlldXdlQWFudnJhZ2VuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFN0YXR1c0xpc3QoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAvLyBTdGF0dXNcclxuICAgICAgICAgICAgICAgIHRoaXMuU3RhdHVzSWQgPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuc3RzLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5OaWV1d2VBYW52cmFnZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFN0YXR1c0xpc3QoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2FkU3RhdHVzTGlzdCgpIHtcclxuICAgICAgICB0aGlzLmh0dHBUVi5nd1N0YXR1c0xpc3QodGhpcy5TdGF0dXNJZCwgdGhpcy5OaWV1d2VBYW52cmFnZW4pLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKChsc3Q6IElTZ3NUVkJ5U3RhdHVzW10pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IGxzdDtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcCA9IFsuLi5sc3RdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckZvcm1GaWVsZHMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FeHRlbmRlZFNlYXJjaCh6b2VrVmVsZGVuOiBTZ3NUVlpvZWtWZWxkZW4pIHtcclxuICAgICAgICB0aGlzLmh0dHBUVi5nd1pvZWtMaXN0KHpvZWtWZWxkZW4pLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKChsc3Q6IElTZ3NUVkJ5U3RhdHVzW10pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IGxzdDtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcCA9IFsuLi5sc3RdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckZvcm1GaWVsZHMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJGb3JtRmllbGRzKCkge1xyXG4gICAgICAgIC8vIENsZWFyIGFsbCBGb3JtIFZhbHVlcyBleGNlcHQgc3RzXHJcbiAgICAgICAgdGhpcy5TdHNGb3JtLnBhdGNoVmFsdWUoe1xyXG4gICAgICAgICAgICB0ZWNobmlzY2hWZXJzbGFnSUQ6IFwiXCIsXHJcbiAgICAgICAgICAgIG5hYW06IFwiXCIsXHJcbiAgICAgICAgICAgIGdlbWVlbnRlT25kZXJ6b2Vrc2xvY2F0aWU6IFwiXCIsXHJcbiAgICAgICAgICAgIGluZGllbmluZ3NEYXR1bTogXCJcIixcclxuICAgICAgICAgICAgc3RhdHVzRGF0dW06IFwiXCIsXHJcbiAgICAgICAgICAgIGluZGllbmluZ3N3aWp6ZTogXCJcIixcclxuICAgICAgICAgICAgZ2VmYWN0dXJlZXJkOiBcIlwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHRlY2huaXNjaFZlcnNsYWdJRCA9IHRoaXMuU3RzRm9ybS5jb250cm9scy50ZWNobmlzY2hWZXJzbGFnSUQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgbmFhbSA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5uYWFtLnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgR09MID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLmdlbWVlbnRlT25kZXJ6b2Vrc2xvY2F0aWUudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBpbmRpZW5pbmdzRGF0dW0gPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuaW5kaWVuaW5nc0RhdHVtLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHN0YXR1c0RhdHVtID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLnN0YXR1c0RhdHVtLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGluZGllbmluZ3N3aWp6ZSA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5pbmRpZW5pbmdzd2lqemUudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBnZWZhY3R1cmVlcmQgPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuZ2VmYWN0dXJlZXJkLnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgZHAgPSBuZXcgRGF0ZVBpcGUoXCJlbi1VU1wiKTtcclxuXHJcbiAgICAgICAgLy8gZmlsdGVyIG91ciBkYXRhXHJcbiAgICAgICAgY29uc3QgdGVtcCA9IHRoaXMudGVtcC5maWx0ZXIoKHJvdzogSVNnc1RWQnlTdGF0dXMpID0+IHtcclxuICAgICAgICAgICAgdmFyIGluZGllbmluZ3NEYXR1bUFzU3RyaW5nOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKGluZGllbmluZ3NEYXR1bSA+IFwiXCIpIHsgaW5kaWVuaW5nc0RhdHVtQXNTdHJpbmcgPSBkcC50cmFuc2Zvcm0ocm93LmluZGllbmluZ3NEYXR1bSwgXCJkZC9NTS95eXl5XCIpOyB9XHJcbiAgICAgICAgICAgIHZhciBzdGF0dXNEYXR1bUFzU3RyaW5nOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHN0YXR1c0RhdHVtID4gXCJcIikgeyBzdGF0dXNEYXR1bUFzU3RyaW5nID0gZHAudHJhbnNmb3JtKHJvdy5zdGF0dXNEYXR1bSwgXCJkZC9NTS95eXl5XCIpOyB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKCF0ZWNobmlzY2hWZXJzbGFnSUQgfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHJvdy50ZWNobmlzY2hWZXJzbGFnSUQudG9TdHJpbmcoKSkgJiYgcm93LnRlY2huaXNjaFZlcnNsYWdJRC50b1N0cmluZygpLmluZGV4T2YodGVjaG5pc2NoVmVyc2xhZ0lEKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFuYWFtIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChyb3cubmFhbS50b0xvd2VyQ2FzZSgpKSAmJiByb3cubmFhbS50b0xvd2VyQ2FzZSgpLmluZGV4T2YobmFhbSkgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghR09MIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChyb3cuZ2VtZWVudGVPbmRlcnpvZWtzbG9jYXRpZS50b0xvd2VyQ2FzZSgpKSAmJiByb3cuZ2VtZWVudGVPbmRlcnpvZWtzbG9jYXRpZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoR09MKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFpbmRpZW5pbmdzRGF0dW0gfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKGluZGllbmluZ3NEYXR1bUFzU3RyaW5nKSAmJiBpbmRpZW5pbmdzRGF0dW1Bc1N0cmluZy5pbmRleE9mKGluZGllbmluZ3NEYXR1bSkgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghc3RhdHVzRGF0dW0gfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHN0YXR1c0RhdHVtQXNTdHJpbmcpICYmIHN0YXR1c0RhdHVtQXNTdHJpbmcuaW5kZXhPZihzdGF0dXNEYXR1bSkgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghaW5kaWVuaW5nc3dpanplIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChyb3cuaW5kaWVuaW5nc3dpanplLnRvTG93ZXJDYXNlKCkpICYmIHJvdy5pbmRpZW5pbmdzd2lqemUudG9Mb3dlckNhc2UoKS5pbmRleE9mKGluZGllbmluZ3N3aWp6ZSkgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghZ2VmYWN0dXJlZXJkIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChyb3cuZ2VmYWN0dXJlZXJkLnRvTG93ZXJDYXNlKCkpICYmIHJvdy5nZWZhY3R1cmVlcmQudG9Mb3dlckNhc2UoKS5pbmRleE9mKGdlZmFjdHVyZWVyZCkgIT09IC0xKSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIHRoZSByb3dzXHJcbiAgICAgICAgdGhpcy5yb3dzID0gdGVtcDtcclxuICAgICAgICAvLyBXaGVuZXZlciB0aGUgZmlsdGVyIGNoYW5nZXMsIGFsd2F5cyBnbyBiYWNrIHRvIHRoZSBmaXJzdCBwYWdlXHJcbiAgICAgICAgdGhpcy50YWJsZS5vZmZzZXQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJvd0NsYXNzKHJvdzogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIFwiaWJ0blwiO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQWN0aXZhdGUoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGlmIChldmVudC50eXBlID09PSBcImRibGNsaWNrXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5saW5rVG9UVihldmVudC5yb3dbXCJ0ZWNobmlzY2hWZXJzbGFnSURcIl0sIGV2ZW50LnJvd1tcImlzRXZhbHVhdGllVmxhcmVibzIwMDhcIl0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsaW5rVG9UVih0dklkOiBudW1iZXIsIGlzVmxhcmVibzIwMDg6IGJvb2xlYW4gfCBudWxsKSB7XHJcbiAgICAgICAgaWYgKGlzVmxhcmVibzIwMDgpIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiZ3cvdHYtZWRpdFwiLCB0dklkXSk7ICAvLyA9PiBHV0JlaGVlci9UVkVkaXQyMDA4LmFzcHggKG91ZGUgR1cpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImd3L3R2LWVkaXRcIiwgdHZJZF0pOyAgLy8gPT4gR1dCZWhlZXIvVFZFZGl0RGVmYXVsdC5hc3B4IChvdWRlIEdXKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVUVih0dklkOiBudW1iZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBUb2dnbGVFeHRlbmRlZFNlYXJjaCgpIHtcclxuICAgICAgICB0aGlzLmlzRXh0ZW5kZWRTZWFyY2ggPSAhdGhpcy5pc0V4dGVuZGVkU2VhcmNoO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi1yb3V0ZXItbG9hZGVyL3NyYyEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctdHYtZ3JpZC9ndy10di1ncmlkLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybSBbZm9ybUdyb3VwXT1cXFwiU3RzRm9ybVxcXCIgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZCBwYWRkaW5nVG9wMTBweFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgKm5nSWY9XFxcInVzZVNlYXJjaFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tM1xcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIChjbGljayk9XFxcIlRvZ2dsZUV4dGVuZGVkU2VhcmNoKClcXFwiPnt7IGlzRXh0ZW5kZWRTZWFyY2ggPyAnRW5rZWx2b3VkaWcgem9la2VuJyA6ICdHZWF2YW5jZWVyZCB6b2VrZW4nIH19PC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgKm5nSWY9XFxcInVzZVNlYXJjaCAmJiAhaXNFeHRlbmRlZFNlYXJjaFxcXCIgY2xhc3M9XFxcImNvbC1zbS05XFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcInBhZGRpbmdSaWdodDEwcHhcXFwiPkZpbHRlciBzdGF0dXM8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxzZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVxcXCJzdHNcXFwiIERvdHRlZEJvcmRlckJlbG93IChjaGFuZ2UpPVxcXCJzdGF0dXNDaGFuZ2VkKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCItMVxcXCI+U2VsZWN0ZWVyPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgc3RzIG9mIFN0YXR1c0Ryb3Bkb3duTGlzdFxcXCIgW3ZhbHVlXT1cXFwic3RzLnR2U3RhdHVzSURcXFwiIFtpbm5lckhUTUxdPVxcXCJzdHMuc3RhdHVzXFxcIj48L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwidXNlU2VhcmNoICYmIGlzRXh0ZW5kZWRTZWFyY2hcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyXFxcIj48Z3ctdHYtem9la3VpdGdlYnJlaWQgKHNlYXJjaGluZyk9XFxcIm9uRXh0ZW5kZWRTZWFyY2goJGV2ZW50KVxcXCI+PC9ndy10di16b2VrdWl0Z2VicmVpZD48L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIk5neFRhYmxlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHAgKm5nSWY9XFxcImZvck5pZXV3ZUFhbnZyYWdlbiA9PSBmYWxzZVxcXCIgY2xhc3M9XFxcInB1bGwtbGVmdCBOZ3hUaXRsZVxcXCI+e3t0aXRsZX19PC9wPlxcclxcbiAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZSAjdGFibGVcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJvb3RzdHJhcFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFjdGl2YXRlKT1cXFwib25BY3RpdmF0ZSgkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm93c109XFxcInJvd3NcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb2x1bW5Nb2RlXT1cXFwiJ2ZsZXgnXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaGVhZGVySGVpZ2h0XT1cXFwiNTBcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb290ZXJIZWlnaHRdPVxcXCI0MFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xpbWl0XT1cXFwiYXBwTGFiZWxzLnRhYmxlVmlld1Jvd3NcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3dDbGFzc109XFxcImdldFJvd0NsYXNzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY3NzQ2xhc3Nlc109XFxcImFwcExhYmVscy5pY29uc0Nzc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21lc3NhZ2VzXT1cXFwie3RvdGFsTWVzc2FnZTogYXBwTGFiZWxzLlRvdGFsLnRvTG93ZXJDYXNlKCksIGVtcHR5TWVzc2FnZTogYXBwTGFiZWxzLk5vRGF0YVRvRGlzcGxheX1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzb3J0c109XFxcIlt7cHJvcDondGVjaG5pc2NoVmVyc2xhZ0lEJywgZGlyOidkZXNjJyB9XVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jvd0hlaWdodF09XFxcIidhdXRvJ1xcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMVxcXCIgbmFtZT1cXFwiU2FtZW5nZXN0ZWxkXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtcm93PVxcXCJyb3dcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAqbmdJZj1cXFwicm93WydzYW1lbmdldm9lZ2REb29yJ10gIT0gbnVsbCAmJiByb3dbJ3NhbWVuZ2V2b2VnZERvb3InXSAhPSAnJ1xcXCIgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9pbWFnZXMvUGx1cy5naWZcIikgKyBcIlxcXCIgY2xhc3M9XFxcImlidG5cXFwiIChjbGljayk9XFxcImxpbmtUb0RlbGV0ZShyb3dbJ3RlY2huaXNjaFZlcnNsYWdJRCddKVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAqbmdJZj1cXFwicm93WydleHRlcm5UViddICE9IG51bGwgJiYgcm93WydleHRlcm5UViddID09IHRydWVcXFwiIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vLi4vLi4vLi4vaW1hZ2VzL0diMi5naWZcIikgKyBcIlxcXCIgY2xhc3M9XFxcImlidG5cXFwiIChjbGljayk9XFxcImxpbmtUb0RlbGV0ZShyb3dbJ3RlY2huaXNjaFZlcnNsYWdJRCddKVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBwcm9wPVxcXCJ0ZWNobmlzY2hWZXJzbGFnSURcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJMYWJlbFxcXCI+VFYgTnIuPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcInRlY2huaXNjaFZlcnNsYWdJRFxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtcm93PVxcXCJyb3dcXFwiIGxldC12YWx1ZT1cXFwidmFsdWVcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XFxcInJvd1snaXNFdmFsdWF0aWVWbGFyZWJvMjAwOCddICE9IG51bGwgJiYgcm93Wydpc0V2YWx1YXRpZVZsYXJlYm8yMDA4J10gPT0gdHJ1ZVxcXCIgY2xhc3M9XFxcInBkZkxpbmtcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvdGVjaG5pc2NoLXZlcnNsYWctZGV0YWlsJywgcm93Wyd0ZWNobmlzY2hWZXJzbGFnSUQnXV1cXFwiPjxsYWJlbCBjbGFzcz1cXFwidGV4dFxcXCI+e3tyb3dbJ3RlY2huaXNjaFZlcnNsYWdJRCddfX08L2xhYmVsPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XFxcInJvd1snaXNFdmFsdWF0aWVWbGFyZWJvMjAwOCddID09IG51bGwgfHwgcm93Wydpc0V2YWx1YXRpZVZsYXJlYm8yMDA4J10gPT0gZmFsc2VcXFwiIGNsYXNzPVxcXCJwZGZMaW5rXFxcIiBbcm91dGVyTGlua109XFxcIlsnL3RlY2huaXNjaC12ZXJzbGFnLWRldGFpbCcsIHJvd1sndGVjaG5pc2NoVmVyc2xhZ0lEJ11dXFxcIj48bGFiZWwgY2xhc3M9XFxcInRleHRcXFwiPnt7cm93Wyd0ZWNobmlzY2hWZXJzbGFnSUQnXX19PC9sYWJlbD48L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiNFxcXCIgcHJvcD1cXFwibmFhbVxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckxhYmVsXFxcIj5OYWFtPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIm5hYW1cXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3ZhbHVlfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiM1xcXCIgcHJvcD1cXFwiZ2VtZWVudGVPbmRlcnpvZWtzbG9jYXRpZVxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckxhYmVsXFxcIj5HZW1lZW50ZSBPbmRlcnpvZWtzbG9rYXRpZTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiZ2VtZWVudGVPbmRlcnpvZWtzbG9jYXRpZVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtcm93PVxcXCJyb3dcXFwiIGxldC12YWx1ZT1cXFwidmFsdWVcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3t2YWx1ZX19PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjJcXFwiIG5hbWU9XFxcImluZGllbmluZ3NEYXR1bVxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiIE5neEZpbHRlckxhYmVsXFxcIj5JbmRpZW5pbmdzRGF0dW08L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiaW5kaWVuaW5nc0RhdHVtXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC12YWx1ZT1cXFwidmFsdWVcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3t2YWx1ZSB8IGRhdGU6XFxcImRkL01NL3l5eXlcXFwifX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIyXFxcIiBuYW1lPVxcXCJzdGF0dXNEYXR1bVxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiIE5neEZpbHRlckxhYmVsXFxcIj5TdGF0dXMgRGF0dW08L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwic3RhdHVzRGF0dW1cXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3ZhbHVlIHwgZGF0ZTpcXFwiZGQvTU0veXl5eVxcXCJ9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIHByb3A9XFxcImluZGllbmluZ3N3aWp6ZVxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiIE5neEZpbHRlckxhYmVsXFxcIj5JbmRpZW4uV2lqemU8L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiaW5kaWVuaW5nc3dpanplXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIHByb3A9XFxcImdlZmFjdHVyZWVyZFxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiIE5neEZpbHRlckxhYmVsXFxcIj5HZWZhY3QuPC9zcGFuPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImdlZmFjdHVyZWVyZFxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBuYW1lPVxcXCJEZXRhaWxcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1yb3c9XFxcInJvd1xcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vLi4vLi4vLi4vaW1hZ2VzL2ljb19lZGl0cmVjb3JkLmdpZlwiKSArIFwiXFxcIiBjbGFzcz1cXFwiaWJ0blxcXCIgKGNsaWNrKT1cXFwibGlua1RvVFYocm93Wyd0ZWNobmlzY2hWZXJzbGFnSUQnXSwgcm93Wydpc0V2YWx1YXRpZVZsYXJlYm8yMDA4J10pXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uICpuZ0lmPVxcXCJjYW5EZWxldGVcXFwiIFtmbGV4R3Jvd109XFxcIjFcXFwiIG5hbWU9XFxcIkRldGFpbFxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXJvdz1cXFwicm93XFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9pbWFnZXMvaWNvX2RlbGV0ZS5wbmdcIikgKyBcIlxcXCIgY2xhc3M9XFxcImlidG5cXFwiIChjbGljayk9XFxcImRlbGV0ZVRWKHJvd1sndGVjaG5pc2NoVmVyc2xhZ0lEJ10pXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGU+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuPC9mb3JtPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy10di1ncmlkL2d3LXR2LWdyaWQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDY3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoRHdBUEFQY0FBQUFBQUExbkN3MXRCdzF2Qnd4d0NBeDFDQTU0Qmd4L0JCQnREeE52RmhackZ4cHRHQko3RFJOOUN4SitEaGQ4Q2g1MEdDbHNKQ055SWlkd0ppVjBKU3gySnpWMk5BbUhBZzZMQ0FxU0J3cVZDQTZYREJLUENCT05EUnFMRVJlV0N4Q2JDaEdmQ1JtVEN4bVlEUm1WRVJxV0VCK1JGZytxQnc2L0FoS2xDUlNxREJpdkNoMnFDUnlzR0JDd0NCQ3lEQmUwRGhTN0JCaTFCQnEzQ2gyNkRSZTVFaGl6RUJ1ekVSK3pFUit6RlNTUEd5R1NHU09jR0NhRklDK0FMRE9LSnpHTUpqU01LRDJHT2lPcUZTS3dEeUt4RXlHekZDUzRHUytnSlRDaEtBYkxBQTNEQWhIRkF4UEpBeFRKQkJqRkJ4N0REQjNGRGhuTkN4N05DUi9DRUJuU0JSclFDQ0xKRENMTUVTVE9FeUhXQnl2U0V5M1VGQzdESUVhWk9VYWJQRW1XUDB1WVFGR0xTMVdPVGxTS1UxT1RVVnFXV0ZpWVYxeWFWRjZzV0ZTMVRWdTFWR0dRWVdDdVczR3NiM2FxYm5Xa2RuR3Bjbkt0Y0hPdWNYYXJkWGFyZG4rM2Q1YTRtWmU1bXAyL25wKy9vSTdDaDVmRGxwZkFtSnJEbTZuRW44TFp4dW44MnZINzdmTDc4L1g3OVBiODlQUCsrZlArK3ZYNytQMzE5dnY2OC92NTl2MzYvUDM4L0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUNINUJBRUFBUDhBTEFBQUFBQVBBQThBQUFpOUFQOEpIRWl3SUVFOUZoQVFDTEFBanNGL1pBU3NzSktsaXhFSEV3cWFNVUJqQ2c0MVNiQkU0UkNCNElBVVRxQjRFYlFuaHBJWkROZ0lGSFBCUm8wallBcjFhVUdEaUFZRkFpVmcyTkZHenAxRGdPak1DYktoZ01BRUhZQUVVc1NvMGFKRWlPeGtPUERuSHdVU0h0SzR3V01JVUowNFAwQTBFRGptdzRrWE9jSVE4dE1DQm9zUUVBWStjTEdFeXBkQmZHNmdrREhpekVBMEpaNDBLYklHaVJRbVF5b1VMQ1BpaWhZdVc2cW84UEV3anhBVFBIVDBlUE93Tk1HQUFEcz1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2ltYWdlcy9QbHVzLmdpZlxuLy8gbW9kdWxlIGlkID0gNjczXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhEd0FQQVBjQUFBQ0FBZi8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQ3dBQUFBQUR3QVBBQUFJT3dBQkNCeElzS0RCZ3dnVERnekFjQ0hEaGdBZ1JoUVl3T0ZFZ3hVcGFzVDRNR1BHaUEwL2hpeFk4ZU5FaVNNcGlueW9rcVhDbHpCanlnd0lBRHM9XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9pbWFnZXMvR2IyLmdpZlxuLy8gbW9kdWxlIGlkID0gNjc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ndy10di1ncmlkLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy10di1ncmlkL2d3LXR2LWdyaWQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNjc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnBhcmVudFRvcCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbi5jaGlsZFRvcCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy10di1ncmlkL2d3LXR2LWdyaWQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNjc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVG9hc3RyU2VydmljZSB9IGZyb20gXCJuZ3gtdG9hc3RyXCI7XHJcblxyXG5pbXBvcnQgeyBhcHBMYWJlbHMgfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9hcHBMYWJlbHNcIjtcclxuaW1wb3J0IHsgR2VuZXJhbFNjcmlwdHMgfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9nZW5lcmFsLnNjcmlwdHNcIjtcclxuXHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7IEh0dHBCQlJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2h0dHAtYmJyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSHR0cERvc3NpZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2h0dHAtZG9zc2llci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEh0dHBLbGFudFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaHR0cC1rbGFudC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEh0dHBUVlNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaHR0cC10di5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgQnNMb2NhbGVTZXJ2aWNlIH0gZnJvbSBcIm5neC1ib290c3RyYXAvZGF0ZXBpY2tlclwiO1xyXG5pbXBvcnQgeyBTZ3NUVlpvZWtWZWxkZW4gfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9zZ3NDbGFzc2VzLnNjcmlwdHNcIjtcclxuaW1wb3J0IHsgSVNnc0tsYW50Q29tYm9MaXN0SXRlbSwgSVNnc0Rvc3NpZXJDb21ib0xpc3RJdGVtIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvc2dzSW50ZXJmYWNlcy5zY3JpcHRzXCI7XHJcbmltcG9ydCB7IElCQlJJbmRpZW5pbmdzV2lqemUsIElUVlN0YXR1c0RlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9pbnRlcmZhY2VzLnNjcmlwdHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiZ3ctdHYtem9la3VpdGdlYnJlaWRcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2d3LXR2LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2d3LXR2LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5jc3MnKV0sXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBnd1RWWm9la1VpdGdlYnJlaWRDb21wb25lbnQgZXh0ZW5kcyBHZW5lcmFsU2NyaXB0cyBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBhcHBMYWJlbHMgPSBhcHBMYWJlbHM7XHJcbiAgICB6a0Zvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgICBJbmRpZW5lckxpc3RJdGVtczogSVNnc0tsYW50Q29tYm9MaXN0SXRlbVtdID0gbnVsbDtcclxuICAgIEluZGllbmluZ3NXaWp6ZUxpc3RJdGVtczogSUJCUkluZGllbmluZ3NXaWp6ZVtdID0gbnVsbDtcclxuICAgIERvc3NpZXJCZWhlZXJkZXJMaXN0SXRlbXM6IElTZ3NEb3NzaWVyQ29tYm9MaXN0SXRlbVtdID0gbnVsbDtcclxuICAgIFN0YXR1c0xpc3RJdGVtczogSVRWU3RhdHVzRGVmaW5pdGlvbltdID0gbnVsbDtcclxuXHJcbiAgICB6b2VrVmVsZGVuOiBTZ3NUVlpvZWtWZWxkZW4gPSBudWxsO1xyXG5cclxuICAgIEBPdXRwdXQoKSBzZWFyY2hpbmc6IEV2ZW50RW1pdHRlcjxTZ3NUVlpvZWtWZWxkZW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxTZ3NUVlpvZWtWZWxkZW4+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfdG9hc3RyOiBUb2FzdHJTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfbG9jYWxlU2VydmljZTogQnNMb2NhbGVTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBodHRwQmJyOiBIdHRwQkJSU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgaHR0cERvc3NpZXI6IEh0dHBEb3NzaWVyU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgaHR0cEtsYW50OiBIdHRwS2xhbnRTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBodHRwVFY6IEh0dHBUVlNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBASW5qZWN0KFwiQkFTRV9VUkxcIikgcHJpdmF0ZSByZWFkb25seSBfYmFzZVVybDogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9zYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xyXG4gICAgICAgIHN1cGVyKF90b2FzdHIpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE5lZWRlZCBjb25maWd1cmF0aW9uIGZvciB0aGUgYnNEYXRlcGlja2VyIHRvIGFjY2VwdCBkZC9NTS95eXl5IGZvcm1hdHRpbmdcclxuICAgICAgICB0aGlzLl9sb2NhbGVTZXJ2aWNlLnVzZShcImJvb3RzdHJhcC1sb2NhbGUtbmxiZVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy56a0Zvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgICAgICAgQ29kZTogW1wiXCJdLFxyXG4gICAgICAgICAgICBJbmRpZW5lcjogW1wiLTFcIl0sXHJcbiAgICAgICAgICAgIEZhY3R1dXJSZWY6IFtcIlwiXSxcclxuICAgICAgICAgICAgQWRyZXM6IFtcIlwiXSxcclxuICAgICAgICAgICAgR2VtZWVudGU6IFtcIlwiXSxcclxuICAgICAgICAgICAgVGl0ZWw6IFtcIlwiXSxcclxuICAgICAgICAgICAgQmVzY2hyaWp2aW5nOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIFJlZmVyZW50aWU6IFtcIlwiXSxcclxuICAgICAgICAgICAgT3Zlcm5hbWU6IFtcIlwiXSxcclxuICAgICAgICAgICAgU2FtZW5nZXZvZWdkOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIEVCU0Q6IFtcIlwiXSxcclxuICAgICAgICAgICAgSW5kaWVuaW5nc1dpanplOiBbXCItMVwiXSxcclxuICAgICAgICAgICAgRGF0dW06IFtcIlwiXSxcclxuICAgICAgICAgICAgU3RhdHVzOiBbXCItMVwiXSxcclxuICAgICAgICAgICAgR2VmYWN0dXJlZXJkOiBbXCItMVwiXSxcclxuICAgICAgICAgICAgRG9zc2llckJlaGVlcmRlcjogW1wiLTFcIl1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkRHJvcGRvd25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZERyb3Bkb3ducygpIHtcclxuICAgICAgICB0aGlzLmh0dHBLbGFudC5zZ3NDb21ib0xpc3RJdGVtcygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGxzdDogSVNnc0tsYW50Q29tYm9MaXN0SXRlbVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobHN0ICE9IG51bGwgJiYgbHN0ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuSW5kaWVuZXJMaXN0SXRlbXMgPSBbLi4ubHN0XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaHR0cERvc3NpZXIuc2dzQ29tYm9MaXN0SXRlbXMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChsc3Q6IElTZ3NEb3NzaWVyQ29tYm9MaXN0SXRlbVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobHN0ICE9IG51bGwgJiYgbHN0ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuRG9zc2llckJlaGVlcmRlckxpc3RJdGVtcyA9IFsuLi5sc3RdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5odHRwQmJyLnNnc0luZGllbmluZ3NXaWp6ZUxpc3RJdGVtcygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGxzdDogSUJCUkluZGllbmluZ3NXaWp6ZVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobHN0ICE9IG51bGwgJiYgbHN0ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuSW5kaWVuaW5nc1dpanplTGlzdEl0ZW1zID0gWy4uLmxzdF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmh0dHBUVi5TdGF0dXNEZWZpbml0aW9uTGlzdChmYWxzZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgobHN0OiBJVFZTdGF0dXNEZWZpbml0aW9uW10pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChsc3QgIT0gbnVsbCAmJiBsc3QgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TdGF0dXNMaXN0SXRlbXMgPSBbLi4ubHN0XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmFpc2VTZWFyY2goKSB7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuID0gbmV3IFNnc1RWWm9la1ZlbGRlbigpO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi50dklkID0gdGhpcy56a0Zvcm0uY29udHJvbHMuQ29kZS52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4ua2xhbnRJZCA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLkluZGllbmVyLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5mYWN0dXVyUmVmID0gdGhpcy56a0Zvcm0uY29udHJvbHMuRmFjdHV1clJlZi52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4uYWRyZXMgPSB0aGlzLnprRm9ybS5jb250cm9scy5BZHJlcy52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4uZ2VtZWVudGUgPSB0aGlzLnprRm9ybS5jb250cm9scy5HZW1lZW50ZS52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4udGl0ZWwgPSB0aGlzLnprRm9ybS5jb250cm9scy5UaXRlbC52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4uYmVzY2hyaWp2aW5nID0gdGhpcy56a0Zvcm0uY29udHJvbHMuQmVzY2hyaWp2aW5nLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5yZWZlcmVudGllID0gdGhpcy56a0Zvcm0uY29udHJvbHMuUmVmZXJlbnRpZS52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4ub3Zlcm5hbWUgPSB0aGlzLnprRm9ybS5jb250cm9scy5PdmVybmFtZS52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4uc2FtZW5nZXZvZWdkID0gdGhpcy56a0Zvcm0uY29udHJvbHMuU2FtZW5nZXZvZWdkLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5lYnNkID0gdGhpcy56a0Zvcm0uY29udHJvbHMuRUJTRC52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4uaW5kaWVuaW5nc3dpanplSWQgPSB0aGlzLnprRm9ybS5jb250cm9scy5JbmRpZW5pbmdzV2lqemUudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmRhdHVtID0gdGhpcy56a0Zvcm0uY29udHJvbHMuRGF0dW0udmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLnN0YXR1c0lkID0gdGhpcy56a0Zvcm0uY29udHJvbHMuU3RhdHVzLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5nZWZhY3R1cmVlcmQgPSB0aGlzLnprRm9ybS5jb250cm9scy5HZWZhY3R1cmVlcmQudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmRvc3NpZXJCZWhlZXJkZXJJZCA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLkRvc3NpZXJCZWhlZXJkZXIudmFsdWU7XHJcblxyXG4gICAgICAgIHRoaXMuc2VhcmNoaW5nLmVtaXQodGhpcy56b2VrVmVsZGVuKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItcm91dGVyLWxvYWRlci9zcmMhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LXR2LXpvZWt1aXRnZWJyZWlkL2d3LXR2LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybSBbZm9ybUdyb3VwXT1cXFwiemtGb3JtXFxcIiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkIHBhZGRpbmdUb3AzMHB4XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcInR4dENvZGVcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5Db2RlPC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0eHRDb2RlXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkNvZGVcXFwiIEFsbG93T25seU51bWJlcnMgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcImNoa092ZXJuYW1lXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+T3Zlcm5hbWU6PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjaGVja2JveCBjb2wtc20tNFxcXCI+PGRpdiBjbGFzcz1cXFwibWFyZ2luVG9wTWluMTBweCBtYXJnaW5MZWZ0MjBweFxcXCI+PGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBpZD1cXFwiY2hrT3Zlcm5hbWVcXFwiIGNsYXNzPVxcXCJtYXJnaW5Cb3R0b20wXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIk92ZXJuYW1lXFxcIiB2YWx1ZT1cXFwiXFxcIiAvPjwvZGl2PjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJkZGxJbmRpZW5lclxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPktsYW50L0luZGllbmVyPC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93biBjb2wtc20tNFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XFxcImRkbEluZGllbmVyXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkluZGllbmVyXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwid2lkdGgxMDBwZXJjZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIi0xXFxcIj5TZWxlY3RlZXI8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQga2xhbnQgb2YgSW5kaWVuZXJMaXN0SXRlbXNcXFwiIFt2YWx1ZV09XFxcImtsYW50LmtsYW50SURcXFwiIFtpbm5lckhUTUxdPVxcXCJrbGFudC5uYWFtXFxcIj48L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcImNoa1NhbWVuZ2V2b2VnZFxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPlNhbWVuZ2V2b2VnZDo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNoZWNrYm94IGNvbC1zbS00XFxcIj48ZGl2IGNsYXNzPVxcXCJtYXJnaW5Ub3BNaW4xMHB4IG1hcmdpbkxlZnQyMHB4XFxcIj48aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGlkPVxcXCJjaGtTYW1lbmdldm9lZ2RcXFwiIGNsYXNzPVxcXCJtYXJnaW5Cb3R0b20wXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIlNhbWVuZ2V2b2VnZFxcXCIgdmFsdWU9XFxcIlxcXCIgLz48L2Rpdj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwidHh0RmFjdHV1clJlZlxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPkZhY3R1dXIgUmVmZXJlbnRpZSBLbGFudDo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInR4dEZhY3R1dXJSZWZcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiRmFjdHV1clJlZlxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcInR4dEVCU0RcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5OYWFtIEVCU0Q6PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0eHRFQlNEXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkVCU0RcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJ0eHRBZHJlc1xcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPlN0cmFhdCBlbiBucjo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInR4dEFkcmVzXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkFkcmVzXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwiZGRsSW5kaWVuaW5nc1dpanplXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+SW5kaWVuaW5nc3dpanplPC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93biBjb2wtc20tNFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XFxcImRkbEluZGllbmluZ3NXaWp6ZVxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJJbmRpZW5pbmdzV2lqemVcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJ3aWR0aDEwMHBlcmNlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiLTFcXFwiPlNlbGVjdGVlcjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCBpdyBvZiBJbmRpZW5pbmdzV2lqemVMaXN0SXRlbXNcXFwiIFt2YWx1ZV09XFxcIml3LmluZGllbmluZ3N3aWp6ZUlEXFxcIiBbaW5uZXJIVE1MXT1cXFwiaXcuaW5kaWVuaW5nc3dpanplXFxcIj48L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcInR4dEdlbWVlbnRlXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+R2VtZWVudGU6PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0eHRHZW1lZW50ZVxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJHZW1lZW50ZVxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcImR0ZURhdHVtXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+RGF0dW06PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJkdGVEYXR1bVxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJEYXR1bVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCBuZy10cmltLWlnbm9yZVxcXCIgYnNEYXRlcGlja2VyIHBsYWNlbWVudD1cXFwidG9wIGxlZnRcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBbYnNDb25maWddPVxcXCJ7IHNob3dXZWVrTnVtYmVyczogZmFsc2UgfVxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcInR4dFRpdGVsXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+VGl0ZWw6PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0eHRUaXRlbFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJUaXRlbFxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcImRkbFN0YXR1c1xcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPlN0YXR1czwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24gY29sLXNtLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJkZGxTdGF0dXNcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiU3RhdHVzXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwid2lkdGgxMDBwZXJjZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIi0xXFxcIj5TZWxlY3RlZXI8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgc3RzIG9mIFN0YXR1c0xpc3RJdGVtc1xcXCIgW3ZhbHVlXT1cXFwic3RzLnR2U3RhdHVzSURcXFwiIFtpbm5lckhUTUxdPVxcXCJzdHMuc3RhdHVzXFxcIj48L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcInR4dEJlc2NocmlqdmluZ1xcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPkJlc2NocmlqdmluZzo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInR4dEJlc2NocmlqdmluZ1xcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJCZXNjaHJpanZpbmdcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJkZGxHZWZhY3R1cmVlcmRcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5HZWZhY3R1cmVlcmQ8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duIGNvbC1zbS00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cXFwiZGRsR2VmYWN0dXJlZXJkXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkdlZmFjdHVyZWVyZFxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcIndpZHRoMTAwcGVyY2VudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCItMVxcXCI+U2VsZWN0ZWVyPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCIxXFxcIj5KYTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiMFxcXCI+TmVlPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJ0eHRSZWZlcmVudGllXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+UmVmZXJlbnRpZTo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInR4dFJlZmVyZW50aWVcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiUmVmZXJlbnRpZVxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcImRkbERvc3NpZXJCZWhlZXJkZXJcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5Eb3NzaWVyQmVoZWVyZGVyPC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93biBjb2wtc20tNFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XFxcImRkbERvc3NpZXJCZWhlZXJkZXJcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiRG9zc2llckJlaGVlcmRlclxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcIndpZHRoMTAwcGVyY2VudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCItMVxcXCI+U2VsZWN0ZWVyPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IGRvc3NiZWggb2YgRG9zc2llckJlaGVlcmRlckxpc3RJdGVtc1xcXCIgW3ZhbHVlXT1cXFwiZG9zc2JlaC5kb3NzaWVyQmVoZWVyZGVySURcXFwiIFtpbm5lckhUTUxdPVxcXCJkb3NzYmVoLm5hYW1cXFwiPjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNCBjb2wtc20tb2Zmc2V0LThcXFwiPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJyYWlzZVNlYXJjaCgpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIj57e2FwcExhYmVscy5TZW5kfX08L2J1dHRvbj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Zvcm0+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LXR2LXpvZWt1aXRnZWJyZWlkL2d3LXR2LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA2Nzhcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2d3LXR2LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy10di16b2VrdWl0Z2VicmVpZC9ndy10di16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2Nzlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy10di16b2VrdWl0Z2VicmVpZC9ndy10di16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2ODBcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUsIERhdGVQaXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuXHJcblxyXG5cclxuLy8gQ3VzdG9tZXIgUmVsYXRlZFxyXG5cclxuXHJcbi8vIEdXIFJlbGF0ZWRcclxuaW1wb3J0IHsgZ3dIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX0dXL2d3LWhvbWUvZ3ctaG9tZS5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IGRlZmluZUxvY2FsZSB9IGZyb20gXCJuZ3gtYm9vdHN0cmFwL2Nocm9ub3NcIjtcclxuaW1wb3J0IHsgbmxCZUxvY2FsZSB9IGZyb20gXCJuZ3gtYm9vdHN0cmFwL2xvY2FsZVwiO1xyXG5kZWZpbmVMb2NhbGUoXCJib290c3RyYXAtbG9jYWxlLW5sYmVcIiwgbmxCZUxvY2FsZSk7XHJcblxyXG5cclxuXHJcbmltcG9ydCB7IEh0dHBNYWlsU2VydmljZSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NlcnZpY2VzL2h0dHAtbWFpbC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEV2ZW50TGlzdGVuZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2VydmljZXMvZXZlbnQtbGlzdGVuZXIuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTG9hZGluZ0FuaW1hdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvbG9hZGluZy1hbmltYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIdHRwUHVpblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC1wdWluLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSHR0cFRWWm9uZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC10dnpvbmUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIdHRwVFZTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtdHYuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIdHRwS2xlaW5lV2VydmVuU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLWtsZWluZXdlcnZlbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEh0dHBLbGFudFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC1rbGFudC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEh0dHBHVlRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtZ3Z0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSHR0cEdUTVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC1ndG0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIdHRwRmlsZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC1maWxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSHR0cERvc3NpZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtZG9zc2llci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEh0dHBCQlJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtYmJyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSHR0cEludGVyY2VwdG9yU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLWludGVyY2VwdG9yLnNlcnZpY2VcIjtcclxuXHJcblxyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6IFwiXCIsIGNhbkFjdGl2YXRlOiBbQXV0aGVudGljYXRpb25TZXJ2aWNlXSwgY29tcG9uZW50OiBnd0hvbWVDb21wb25lbnQsIGRhdGE6IHsgc3RhdGU6IFwiZ3cvaG9tZS9cIiB9IH0sXHJcbl07XHJcblxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcblxyXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIFJvdXRlck1vZHVsZVxyXG4gICAgXSxcclxuXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgeyBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6IEh0dHBJbnRlcmNlcHRvclNlcnZpY2UsIG11bHRpOiB0cnVlIH0sXHJcbiAgICAgICAgQXV0aGVudGljYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIEh0dHBCQlJTZXJ2aWNlLFxyXG4gICAgICAgIEh0dHBEb3NzaWVyU2VydmljZSxcclxuICAgICAgICBIdHRwRmlsZVNlcnZpY2UsXHJcbiAgICAgICAgSHR0cEdUTVNlcnZpY2UsXHJcbiAgICAgICAgSHR0cEdWVFNlcnZpY2UsXHJcbiAgICAgICAgSHR0cEtsYW50U2VydmljZSxcclxuICAgICAgICBIdHRwS2xlaW5lV2VydmVuU2VydmljZSxcclxuICAgICAgICBIdHRwVFZTZXJ2aWNlLFxyXG4gICAgICAgIEh0dHBUVlpvbmVTZXJ2aWNlLFxyXG4gICAgICAgIEh0dHBQdWluU2VydmljZSxcclxuICAgICAgICBIdHRwTWFpbFNlcnZpY2UsXHJcbiAgICAgICAgTG9hZGluZ0FuaW1hdGlvblNlcnZpY2UsXHJcbiAgICAgICAgRXZlbnRMaXN0ZW5lclNlcnZpY2UsIFxyXG4gICAgICAgIERhdGVQaXBlXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHd0dyaWRSb3V0aW5nTW9kdWxlIHtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXJvdXRlci1sb2FkZXIvc3JjIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ncmlkLnJvdXRpbmcubW9kdWxlLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==