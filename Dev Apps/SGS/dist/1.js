exports.ids = [1];
exports.modules = {

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GwGridModule", function() { return GwGridModule; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_GW_gw_home_gw_home_component__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_GW_gw_bbr_grid_gw_bbr_grid_component__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_GW_gw_bbr_zoekuitgebreid_gw_bbr_zoekuitgebreid_component__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_GW_gw_gtm_grid_gw_gtm_grid_component__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_GW_gw_gtm_zoekuitgebreid_gw_gtm_zoekuitgebreid_component__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_GW_gw_gvt_grid_gw_gvt_grid_component__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_GW_gw_gvt_zoekuitgebreid_gw_gvt_zoekuitgebreid_component__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_GW_gw_klant_grid_gw_klant_grid_component__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_GW_gw_klantwijz_grid_gw_klantwijz_grid_component__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_GW_gw_klant_zoekuitgebreid_gw_klant_zoekuitgebreid_component__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_GW_gw_kw_grid_gw_kw_grid_component__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_GW_gw_kw_zoekuitgebreid_gw_kw_zoekuitgebreid_component__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_GW_gw_tv_grid_gw_tv_grid_component__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_GW_gw_tv_zoekuitgebreid_gw_tv_zoekuitgebreid_component__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__swimlane_ngx_datatable__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular_tree_component__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular_tree_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_angular_tree_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_bootstrap__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_ngx_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap_chronos__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_bootstrap_locale__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_file_upload__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng_trim_value_accessor__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng_trim_value_accessor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_ng_trim_value_accessor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_http_mail_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_event_listener_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_http_interceptor_service__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_authentication_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_http_bbr_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_http_dossier_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_http_file_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_http_gtm_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_http_gvt_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_http_klant_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_http_kleinewerven_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_http_tv_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_http_tvzone_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_http_puin_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_localstorage_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__services_loading_animation_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__gw_grid_routing_module__ = __webpack_require__(749);
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

/***/ 616:
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

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bodembeheerrapport_grid_bodembeheerrapport_grid_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__ = __webpack_require__(34);
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
            template: __webpack_require__(691),
            styles: [__webpack_require__(692)]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["ToastrService"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__["a" /* AuthenticationService */]])
    ], gwHomeComponent);
    return gwHomeComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__["b" /* GeneralScripts */]));



/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n\r\n    <nav *ngIf=\"PgIndex === -1 && useToolbar\" class=\"navbar navbar-default navbar-fixed-bottom\" style=\"background-color:#CCCCCC;\">\r\n        <div class=\"container-fluid\" style=\"margin: 10px 0px 27px 0px;\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <button type=\"button\" (click)=\"toggleButton(0)\" style=\"margin-left: -5px;\" [ngClass]=\"getButtonClass(btns[0])\">Ontgravingen</button>\r\n                    <button type=\"button\" (click)=\"singleButton(0)\" [ngClass]=\"getSingleClass(btns[0])\">&nbsp;</button>\r\n                    <button type=\"button\" (click)=\"toggleButton(1)\" [ngClass]=\"getButtonClass(btns[1])\">TV</button>\r\n                    <button type=\"button\" (click)=\"singleButton(1)\" [ngClass]=\"getSingleClass(btns[1])\">&nbsp;</button>\r\n                    <button type=\"button\" (click)=\"toggleButton(2)\" [ngClass]=\"getButtonClass(btns[2])\">GTM</button>\r\n                    <button type=\"button\" (click)=\"singleButton(2)\" [ngClass]=\"getSingleClass(btns[2])\">&nbsp;</button>\r\n                    <button type=\"button\" (click)=\"toggleButton(3)\" [ngClass]=\"getButtonClass(btns[3])\">GVT</button>\r\n                    <button type=\"button\" (click)=\"singleButton(3)\" [ngClass]=\"getSingleClass(btns[3])\">&nbsp;</button>\r\n                    <button type=\"button\" (click)=\"toggleButton(4)\" [ngClass]=\"getButtonClass(btns[4])\">Online Ingevuld</button>\r\n                    <button type=\"button\" (click)=\"singleButton(4)\" [ngClass]=\"getSingleClass(btns[4])\">&nbsp;</button>\r\n                    <button type=\"button\" (click)=\"toggleButton(5)\" [ngClass]=\"getButtonClass(btns[5])\">Gegevens Aanpassen</button>\r\n                    <button type=\"button\" (click)=\"singleButton(5)\" [ngClass]=\"getSingleClass(btns[5])\">&nbsp;</button>\r\n                    <button type=\"button\" (click)=\"toggleButton(6)\" [ngClass]=\"getButtonClass(btns[6])\">Klanten</button>\r\n                    <button type=\"button\" (click)=\"singleButton(6)\" [ngClass]=\"getSingleClass(btns[6])\">&nbsp;</button>\r\n                    <button type=\"button\" (click)=\"toggleButton(7)\" [ngClass]=\"getButtonClass(btns[7])\">BBR</button>\r\n                    <button type=\"button\" (click)=\"singleButton(7)\" [ngClass]=\"getSingleClass(btns[7])\">&nbsp;</button>\r\n                    <button type=\"button\" (click)=\"toggleButton(8)\" [ngClass]=\"getButtonClass(btns[8])\">Puin</button>\r\n                    <button type=\"button\" (click)=\"singleButton(8)\" [ngClass]=\"getSingleClass(btns[8])\">&nbsp;</button>\r\n                    <button type=\"button\" (click)=\"toggleButton(-1)\" [ngClass]=\"getButtonClass(allButtonsShown)\">Toon Alles</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n    <div>\r\n        <div [hidden]=\"!btns[0]\">\r\n            <h4>Kleine Werken</h4>\r\n            <gw-kw-grid></gw-kw-grid>\r\n        </div>\r\n        <div [hidden]=\"!btns[1]\">\r\n            <h4>Technische Verslagen</h4>\r\n            <gw-tv-grid NieuweAanvragen=\"true\" ExtendedSearch=\"true\" [AllowDelete]=\"allowDelete\"></gw-tv-grid>\r\n        </div>\r\n        <div [hidden]=\"!btns[2]\">\r\n            <h4>Grond Transport Meldingen</h4>\r\n            <gw-gtm-grid NieuweAanvragen=\"false\" ExtendedSearch=\"true\" [AllowDelete]=\"allowDelete\"></gw-gtm-grid>\r\n        </div>\r\n        <div [hidden]=\"!btns[3]\">\r\n            <h4>Grond Verzet Toelatingen</h4>\r\n            <gw-gvt-grid NieuweAanvragen=\"false\" ExtendedSearch=\"true\" [AllowDelete]=\"allowDelete\"></gw-gvt-grid>\r\n        </div>\r\n        <div [hidden]=\"!btns[4]\">\r\n            <h4>Upload of Online Ingevuld - VA/OV</h4>\r\n            <bodembeheerrapport-grid isGWStart=\"true\" Type=\"BBR\" [FillType]=\"UPLFillType\" [title]=\"'Bodembeheer rapporten:'\"></bodembeheerrapport-grid>\r\n        </div>\r\n        <div [hidden]=\"!btns[5]\">\r\n            <h4>Vraag tot gegevensaanpassingen</h4>\r\n            <gw-klantwijz-grid></gw-klantwijz-grid>\r\n        </div>\r\n        <div [hidden]=\"!btns[6]\">\r\n            <h4>Nieuwe Klanten</h4>\r\n            <gw-klant-grid isGWStart=\"true\"></gw-klant-grid>\r\n        </div>\r\n        <div [hidden]=\"!btns[7]\">\r\n            <h4>Bodem Beheer Rapporten</h4>\r\n            <gw-bbr-grid NieuweAanvragen=\"false\" ExtendedSearch=\"true\" [AllowDelete]=\"allowDelete\"></gw-bbr-grid>\r\n        </div>\r\n        <div [hidden]=\"!btns[8]\">\r\n            <h4>Puin</h4>\r\n            To Be Developed\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n";

/***/ }),

/***/ 692:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(693);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 693:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "h4 {\r\n    margin-bottom: 0px;\r\n}\r\n.btn-on {\r\n    color: #B0D001 !important;\r\n    border-color: #ddd !important;\r\n    background-color: #017342 !important;\r\n    padding: 5px 10px;\r\n    margin-left: 15px;\r\n}\r\n.btn-off {\r\n    color: #FFFFFF !important;\r\n    border-color: #ddd !important;\r\n    background-color: #FF0000 !important;\r\n    padding: 5px 10px;\r\n    margin-left: 15px;\r\n}\r\n.btn-single-on {\r\n    color: #B0D001 !important;\r\n    border-color: #ddd !important;\r\n    background-color: #017342 !important;\r\n    padding: 5px;\r\n    margin-left: -5px;\r\n}\r\n.btn-single-off {\r\n    color: #017342 !important;\r\n    border-color: #ddd !important;\r\n    background-color: #FF0000 !important;\r\n    padding: 5px;\r\n    margin-left: -5px;\r\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwBBRGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_bbr_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scripts_appLabels__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_authentication_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(14);
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
        this.router.navigate(["/gw/gvt-edit", bbrId]);
        //this.router.navigate(["/bodembeheerrapport-detail"], { queryParams: { bbrId: bbrId, bbr: "Final" } });  // => GWBeheer/BBREdit.aspx?BodembeheerRapportID={0} (oude GW)
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
            template: __webpack_require__(695),
            styles: [__webpack_require__(696)]
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

/***/ 695:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<form [formGroup]=\"StsForm\" class=\"container-fluid paddingTop10px\">\r\n    <div class=\"row\" *ngIf=\"useSearch\">\r\n        <div class=\"col-sm-3\">\r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"ToggleExtendedSearch()\">{{ isExtendedSearch ? 'Enkelvoudig zoeken' : 'Geavanceerd zoeken' }}</button>\r\n        </div>\r\n        <div *ngIf=\"useSearch && !isExtendedSearch\" class=\"col-sm-9\">\r\n            <label class=\"paddingRight10px\">Filter status</label>\r\n            <select formControlName=\"sts\" DottedBorderBelow (change)=\"statusChanged()\">\r\n                <option value=\"-1\">Selecteer</option>\r\n                <option *ngFor=\"let sts of StatusDropdownList\" [value]=\"sts.bbrStatusID\" [innerHTML]=\"sts.status\"></option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"useSearch && isExtendedSearch\">\r\n        <div class=\"col-sm-12\"><gw-bbr-zoekuitgebreid (searching)=\"onExtendedSearch($event)\"></gw-bbr-zoekuitgebreid></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"NgxTable\">\r\n                <p *ngIf=\"forNieuweAanvragen == false\" class=\"pull-left NgxTitle\">{{title}}</p>\r\n                <ngx-datatable #table\r\n                               class=\"bootstrap\"\r\n                               (activate)=\"onActivate($event)\"\r\n                               [rows]=\"rows\"\r\n                               [columnMode]=\"'flex'\"\r\n                               [headerHeight]=\"50\"\r\n                               [footerHeight]=\"40\"\r\n                               [limit]=\"appLabels.tableViewRows\"\r\n                               [rowClass]=\"getRowClass\"\r\n                               [cssClasses]=\"appLabels.iconsCss\"\r\n                               [messages]=\"{totalMessage: appLabels.Total.toLowerCase(), emptyMessage: appLabels.NoDataToDisplay}\"\r\n                               [sorts]=\"[{prop:'bbrNummer', dir:'desc' }]\"\r\n                               [rowHeight]=\"'auto'\">\r\n\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"nietGoedGekeurd\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template></ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <span style=\"color: red\"><b>{{row['nietGoedGekeurd']}}</b></span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"bbrNummer\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Nummer</span>\r\n                            <div><input type=\"text\" formControlName=\"bbrNummer\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <a class=\"pdfLink\" [routerLink]=\"['/bodembeheerrapport-detail']\" [queryParams]=\"{bbr:'Final',bbrId:row['bbrNummer']}\"><label class=\"text\">{{row['bbrNummer']}}</label></a>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"naam\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Klant</span>\r\n                            <div><input type=\"text\" formControlName=\"naam\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span>{{value}}</span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"beroepsorganisatiecode\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Code</span>\r\n                            <input type=\"text\" formControlName=\"code\" class=\"NgxFilterField\" (keyup)=\"filter()\" />\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span>{{value}}</span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" prop=\"plaats\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Gemeente</span>\r\n                            <input type=\"text\" formControlName=\"gem\" class=\"NgxFilterField\" (keyup)=\"filter()\" />\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span>{{value}}</span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"aanvraagDatum\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Datum in</span></div>\r\n                            <div><input type=\"text\" formControlName=\"aanvraagDatum\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date:\"dd/MM/yyyy\"}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"statusDatum\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Datum uit</span></div>\r\n                            <div><input type=\"text\" formControlName=\"statusDatum\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date:\"dd/MM/yyyy\"}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"indieningswijze\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Aanvulplan</span></div>\r\n                            <div><input type=\"text\" formControlName=\"indieningswijze\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"hoeveelheid\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Hoeveelheid</span>\r\n                            <div><input type=\"text\" formControlName=\"hoev\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span>{{row['hoeveelheid']}}</span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"gefactureerd\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Gefact.</span></div>\r\n                            <div><input type=\"text\" formControlName=\"gefactureerd\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"status\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">BBR Status</span></div>\r\n                            <div><input type=\"text\" formControlName=\"bbrSts\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"startDatumGrondwerken\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Start Datum</span></div>\r\n                            <div><input type=\"text\" formControlName=\"startDatum\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date:\"dd/MM/yyyy\"}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"Detail\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img src=\"" + __webpack_require__(15) + "\" class=\"ibtn\" (click)=\"linkToBBR(row['bbrNummer'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column *ngIf=\"canDelete\" [flexGrow]=\"1\" name=\"Detail\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img src=\"" + __webpack_require__(82) + "\" class=\"ibtn\" (click)=\"deleteBBR(row['bbrNummer'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                </ngx-datatable>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>";

/***/ }),

/***/ 696:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(697);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 697:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwBBRZoekUitgebreidComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scripts_appLabels__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scripts_general_scripts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_http_bbr_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_http_dossier_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_http_klant_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_http_tv_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_datepicker__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__scripts_sgsClasses_scripts__ = __webpack_require__(616);
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
            template: __webpack_require__(699),
            styles: [__webpack_require__(700)],
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

/***/ 699:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"zkForm\" class=\"container-fluid paddingTop30px\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtCode\" class=\"pull-right\">Code</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtCode\" formControlName=\"Code\" AllowOnlyNumbers DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"tvtTvId\" class=\"pull-right\">TV Nummer:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtTvId\" formControlName=\"TvId\" AllowOnlyNumbers DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"ddlKlant\" class=\"pull-right\">Klant</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlKlant\" formControlName=\"KlantId\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let klant of KlantListItems\" [value]=\"klant.klantID\" [innerHTML]=\"klant.naam\"></option>\r\n                </select>\r\n            </div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlDossierBeheerder\" class=\"pull-right\">DossierBeheerder</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlDossierBeheerder\" formControlName=\"DossierBeheerderId\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let dossbeh of DossierBeheerderListItems\" [value]=\"dossbeh.dossierBeheerderID\" [innerHTML]=\"dossbeh.naam\"></option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"ddlStatus\" class=\"pull-right\">Status</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlStatus\" formControlName=\"StatusId\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let sts of StatusListItems\" [value]=\"sts.tvStatusID\" [innerHTML]=\"sts.status\"></option>\r\n                </select>\r\n            </div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlBestemmingsaard\" class=\"pull-right\">Bestemmingsaard</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlBestemmingsaard\" formControlName=\"BestemmingsaardId\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let aard of BestemmingsaardListItems\" [value]=\"aard.bestemmingsAardId\" [innerHTML]=\"aard.bestemmingsAard\"></option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtStraat\" class=\"pull-right\">Bestemming Straat</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtStraat\" formControlName=\"Straat\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlGefactureerd\" class=\"pull-right\">Gefactureerd</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlGefactureerd\" formControlName=\"Gefactureerd\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option value=\"1\">Ja</option>\r\n                    <option value=\"0\">Nee</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtPostcode\" class=\"pull-right\">Bestemming Postcode:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtPostcode\" formControlName=\"Postcode\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"txtGemeente\" class=\"pull-right\">Bestemming Gemeente:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtGemeente\" formControlName=\"Gemeente\" DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtLambertX\" class=\"pull-right\">Bestemming Lambert X (in m)</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtLambertX\" formControlName=\"LambertX\" AllowOnlyNumbers DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlLambertRange\" class=\"pull-right\">Lambert Range:</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlLambertRange\" formControlName=\"LambertRange\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option value=\"1\">1 km</option>\r\n                    <option value=\"3\">3 km</option>\r\n                    <option value=\"5\">5 km</option>\r\n                    <option value=\"10\">10 km</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtLambertX\" class=\"pull-right\">Bestemming Lambert Y (in m)</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtLambertY\" formControlName=\"LambertY\" AllowOnlyNumbers DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-6\">&nbsp;</div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtVStraat\" class=\"pull-right\">TV Straat:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtVStraat\" formControlName=\"VertrekStraat\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"txtVGemeente\" class=\"pull-right\">TV Gemeente:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtVGemeente\" formControlName=\"VertrekGemeente\" DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"dteVan\" class=\"pull-right\">Datum Van:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"dteVan\" formControlName=\"datVan\" class=\"form-control ng-trim-ignore\" bsDatepicker placement=\"top left\" autocomplete=\"off\" DottedBorderBelow [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"dteTot\" class=\"pull-right\">Datum Tot:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"dteTot\" formControlName=\"datTot\" class=\"form-control ng-trim-ignore\" bsDatepicker placement=\"top left\" autocomplete=\"off\" DottedBorderBelow [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4 col-sm-offset-8\"><button type=\"button\" (click)=\"raiseSearch()\" class=\"btn btn-default\">{{appLabels.Send}}</button></div>\r\n        </div>\r\n    </div>\r\n</form>";

/***/ }),

/***/ 700:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(701);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwGTMGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_tv_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_http_gtm_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scripts_appLabels__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_datatable__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_authentication_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__(14);
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
            template: __webpack_require__(703),
            styles: [__webpack_require__(705)]
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

/***/ 703:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<form [formGroup]=\"StsForm\" class=\"container-fluid paddingTop10px\">\r\n    <div class=\"row\" *ngIf=\"useSearch\">\r\n        <div class=\"col-sm-3\">\r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"ToggleExtendedSearch()\">{{ isExtendedSearch ? 'Enkelvoudig zoeken' : 'Geavanceerd zoeken' }}</button>\r\n        </div>\r\n        <div *ngIf=\"useSearch && !isExtendedSearch\" class=\"col-sm-9\">\r\n            <label class=\"paddingRight10px\">Filter status</label>\r\n            <select formControlName=\"sts\" DottedBorderBelow (change)=\"statusChanged()\">\r\n                <option value=\"-1\">Selecteer</option>\r\n                <option *ngFor=\"let sts of StatusDropdownList\" [value]=\"sts.id\" [innerHTML]=\"sts.omschrijving\"></option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"useSearch && isExtendedSearch\">\r\n        <div class=\"col-sm-12\"><gw-gtm-zoekuitgebreid (searching)=\"onExtendedSearch($event)\"></gw-gtm-zoekuitgebreid></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"NgxTable\">\r\n                <p *ngIf=\"forNieuweAanvragen == false\" class=\"pull-left NgxTitle\">{{title}}</p>\r\n                <ngx-datatable #table\r\n                               class=\"bootstrap\"\r\n                               (activate)=\"onActivate($event)\"\r\n                               [rows]=\"rows\"\r\n                               [columnMode]=\"'flex'\"\r\n                               [headerHeight]=\"50\"\r\n                               [footerHeight]=\"40\"\r\n                               [limit]=\"appLabels.tableViewRows\"\r\n                               [rowClass]=\"getRowClass\"\r\n                               [cssClasses]=\"appLabels.iconsCss\"\r\n                               [messages]=\"{totalMessage: appLabels.Total.toLowerCase(), emptyMessage: appLabels.NoDataToDisplay}\"\r\n                               [sorts]=\"[{prop:'grondtransportmeldingId', dir:'desc' }]\"\r\n                               [rowHeight]=\"'auto'\">\r\n\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"afgewerkteGTM\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img *ngIf=\"row['verklaringAfnemerOntvangen'] != null && row['verklaringAfnemerOntvangen'] == true\" src=\"" + __webpack_require__(704) + "\" class=\"ibtn\" (click)=\"linkToGTM(row['grondtransportmeldingId'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"grondtransportmeldingId\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Code</span>\r\n                            <div><input type=\"text\" formControlName=\"gtmId\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <a class=\"pdfLink\" [routerLink]=\"['/transport-top-cgr-detail', row['grondtransportmeldingId']]\"><label class=\"text\">{{row['grondtransportmeldingId']}}</label></a>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"4\" prop=\"klant\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Klant</span>\r\n                            <div><input type=\"text\" formControlName=\"klant\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template><span>{{value}}</span></ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"klantKenmerk\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Klant Ref.</span>\r\n                            <input type=\"text\" formControlName=\"ref\" class=\"NgxFilterField\" (keyup)=\"filter()\" />\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template><span>{{value}}</span></ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"herkomst\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Herkomst</span>\r\n                            <input type=\"text\" formControlName=\"herk\" class=\"NgxFilterField\" (keyup)=\"filter()\" />\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template><span>{{value}}</span></ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"topCgr\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">TOP/CGR</span>\r\n                            <input type=\"text\" formControlName=\"topCgr\" class=\"NgxFilterField\" (keyup)=\"filter()\" />\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template><span>{{value}}</span></ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" name=\"indieningsDatum\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Datum In</span></div>\r\n                            <div><input type=\"text\" formControlName=\"indieningsDatum\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>{{value | date:\"dd/MM/yyyy\"}}</ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"Detail\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img src=\"" + __webpack_require__(15) + "\" class=\"ibtn\" (click)=\"linkToGTM(row['grondtransportmeldingId'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column *ngIf=\"canDelete\" [flexGrow]=\"1\" name=\"Detail\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img src=\"" + __webpack_require__(82) + "\" class=\"ibtn\" (click)=\"deleteGTM(row['grondtransportmeldingId'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                </ngx-datatable>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</form>";

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACcklEQVR42mNkwAEsTLSlT5y5+pSBAGDEJsjOzsYR4GVXsnL9nhayDFBUVPTQ1zNYy8fPN+3161f927dvf0a0AUxMTIzlZeULOTg5Yx0dHYGGKXzKzy+o2Lt3z4yPHz/+J2gAFxeXwK1bt+5/+fJFYOrUaQwuLi4MixcvYeDn4117997d1AMHDrzHa4C8nHyMu5v7Yj19PYZNmzYzJCUngbzEcPXKFQYHR4c7iYmJQQcPHryM1QCg85mcnZw2f/3y1Wv7zh0MTx4/YdixYweDiakpQ29PL4OjkyPDo0eP3j1+9Cjrzt07ay9cuPAHxQBxcXGZO0CwetUqdhZmFoZv378xLJi/gKGopIThxfPnDGLi4gyenh4MZ8+eA8XUMWsgQDHAWFfVLz4112HNylXRz58/F9uwaSPD3r17GUJCQhlevHzJsGrlSgZXV1eGnp4eBj5+/i0rV67whRvAyMjAYq4r737m2pMdf//+U5KTlXWcN39+woK5cy0uXbrMGBEVxXBg3z6GrJwchpcvX/7v6OgIu3f/3hq4AdKivBosrKz/Hz579wXI5QfiPyDMzsYmHxoa2gQ0zGb5smUMZuYWDOfOnV2Xn58f8ubNm/+M0JBkNNWR9Thz9cmJf///iwGFWIH4H8wQRkbGf8nJyZFXLlys/v7jx9fHz55avnv3DpTMf4INYGJkYDPUlHU9e+3xESD3I0gIiNmAmBOUsqGYgZWFRYGZmVnox8+f+4DczyBLwAaoy4uYP3/75fOnLz+u4UmxIMO4oC77AKWBYcfIwGigLh10/sbTrUD+D0KZB8NkZiZGRjFhXtnnrz89IlUzCAAAnzDyEareg/MAAAAASUVORK5CYII="

/***/ }),

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(706);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".parentTop {\r\n    position: relative;\r\n    display: block;\r\n}\r\n\r\n.childTop {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 200px;\r\n    display: block;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwGTMZoekUitgebreidComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scripts_appLabels__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scripts_general_scripts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_http_klant_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_datepicker__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__scripts_sgsClasses_scripts__ = __webpack_require__(616);
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
            template: __webpack_require__(708),
            styles: [__webpack_require__(709)],
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

/***/ 708:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"zkForm\" class=\"container-fluid paddingTop30px\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\"><label for=\"txtGTMId\" class=\"pull-right\">GTM Id:</label></div>\r\n            <div class=\"col-sm-8\"><input type=\"text\" id=\"txtGTMId\" formControlName=\"GtmId\" AllowOnlyNumbers DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\"><label for=\"dteVan\" class=\"pull-right\">Van:</label></div>\r\n            <div class=\"col-sm-8\"><input type=\"text\" id=\"dteVan\" formControlName=\"datVan\" class=\"form-control ng-trim-ignore\" bsDatepicker placement=\"bottom left\" autocomplete=\"off\" DottedBorderBelow [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\"><label for=\"dteTot\" class=\"pull-right\">Tot:</label></div>\r\n            <div class=\"col-sm-8\"><input type=\"text\" id=\"dteTot\" formControlName=\"datTot\" class=\"form-control ng-trim-ignore\" bsDatepicker placement=\"bottom left\" autocomplete=\"off\" DottedBorderBelow [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\"><label for=\"txtStraat\" class=\"pull-right\">Straat:</label></div>\r\n            <div class=\"col-sm-8\"><input type=\"text\" id=\"txtStraat\" formControlName=\"Straat\" DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\"><label for=\"txtGemeente\" class=\"pull-right\">Gemeente:</label></div>\r\n            <div class=\"col-sm-8\"><input type=\"text\" id=\"txtGemeente\" formControlName=\"Gemeente\" DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\"><label for=\"ddlTop\" class=\"pull-right\">TOP:</label></div>\r\n            <div class=\"dropdown col-sm-8\">\r\n                <select id=\"ddlTop\" formControlName=\"TopId\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let o of bestBedrijfList\" [value]=\"o.id\">{{o.description}}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-8 col-sm-offset-4\"><button type=\"button\" (click)=\"raiseSearch()\" class=\"btn btn-default\">{{appLabels.Send}}</button></div>\r\n        </div>\r\n    </div>\r\n</form>";

/***/ }),

/***/ 709:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(710);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 710:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwGVTGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_gvt_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scripts_appLabels__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__);
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
            template: __webpack_require__(712),
            styles: [__webpack_require__(713)]
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

/***/ 712:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<form [formGroup]=\"StsForm\" class=\"container-fluid paddingTop10px\">\r\n    <div class=\"row\" *ngIf=\"useSearch\">\r\n        <div class=\"col-sm-3\">\r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"ToggleExtendedSearch()\">{{ isExtendedSearch ? 'Enkelvoudig zoeken' : 'Geavanceerd zoeken' }}</button>\r\n        </div>\r\n        <div *ngIf=\"useSearch && !isExtendedSearch\" class=\"col-sm-9\">\r\n            <label class=\"paddingRight10px\">Filter status</label>\r\n            <select formControlName=\"sts\" DottedBorderBelow (change)=\"statusChanged()\">\r\n                <option value=\"-1\">Selecteer</option>\r\n                <option *ngFor=\"let sts of StatusDropdownList\" [value]=\"sts.bbrStatusID\" [innerHTML]=\"sts.status\"></option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"useSearch && isExtendedSearch\">\r\n        <div class=\"col-sm-12\"><gw-gvt-zoekuitgebreid (searching)=\"onExtendedSearch($event)\"></gw-gvt-zoekuitgebreid></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"NgxTable\">\r\n                <p *ngIf=\"forNieuweAanvragen == false\" class=\"pull-left NgxTitle\">{{title}}</p>\r\n                <ngx-datatable #table\r\n                               class=\"bootstrap\"\r\n                               (activate)=\"onActivate($event)\"\r\n                               [rows]=\"rows\"\r\n                               [columnMode]=\"'flex'\"\r\n                               [headerHeight]=\"50\"\r\n                               [footerHeight]=\"40\"\r\n                               [limit]=\"appLabels.tableViewRows\"\r\n                               [rowClass]=\"getRowClass\"\r\n                               [cssClasses]=\"appLabels.iconsCss\"\r\n                               [messages]=\"{totalMessage: appLabels.Total.toLowerCase(), emptyMessage: appLabels.NoDataToDisplay}\"\r\n                               [sorts]=\"[{prop:'bbrNummer', dir:'desc' }]\"\r\n                               [rowHeight]=\"'auto'\">\r\n\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"nietGoedGekeurd\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template></ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <span style=\"color: red\"><b>{{row['nietGoedGekeurd']}}</b></span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"bbrNummer\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Nummer</span>\r\n                            <div><input type=\"text\" formControlName=\"gvtNummer\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <a class=\"pdfLink\" [routerLink]=\"['/bodembeheerrapport-detail']\" [queryParams]=\"{bbrId:row['bbrNummer']}\"><label class=\"text\">{{row['bbrNummer']}}</label></a>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"naam\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Klant</span>\r\n                            <div><input type=\"text\" formControlName=\"naam\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span>{{value}}</span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"beroepsorganisatiecode\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Code</span>\r\n                            <input type=\"text\" formControlName=\"code\" class=\"NgxFilterField\" (keyup)=\"filter()\" />\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span>{{value}}</span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" prop=\"plaats\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Gemeente</span>\r\n                            <input type=\"text\" formControlName=\"gem\" class=\"NgxFilterField\" (keyup)=\"filter()\" />\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span>{{value}}</span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"aanvraagDatum\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Datum in</span></div>\r\n                            <div><input type=\"text\" formControlName=\"aanvraagDatum\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date:\"dd/MM/yyyy\"}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"statusDatum\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Datum uit</span></div>\r\n                            <div><input type=\"text\" formControlName=\"statusDatum\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date:\"dd/MM/yyyy\"}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"indieningswijze\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Aanvulplan</span></div>\r\n                            <div><input type=\"text\" formControlName=\"indieningswijze\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"hoeveelheid\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Hoeveelheid</span>\r\n                            <div><input type=\"text\" formControlName=\"hoev\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span>{{row['hoeveelheid']}}</span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"gefactureerd\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Gefact.</span></div>\r\n                            <div><input type=\"text\" formControlName=\"gefactureerd\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"status\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">GVT Status</span></div>\r\n                            <div><input type=\"text\" formControlName=\"gvtSts\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"startDatumGrondwerken\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Start Datum</span></div>\r\n                            <div><input type=\"text\" formControlName=\"startDatum\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date:\"dd/MM/yyyy\"}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"Detail\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img src=\"" + __webpack_require__(15) + "\" class=\"ibtn\" (click)=\"linkToGVT(row['bbrNummer'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column *ngIf=\"canDelete\" [flexGrow]=\"1\" name=\"Detail\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img src=\"" + __webpack_require__(82) + "\" class=\"ibtn\" (click)=\"deleteGVT(row['bbrNummer'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                </ngx-datatable>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>";

/***/ }),

/***/ 713:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(714);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 714:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwGVTZoekUitgebreidComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scripts_appLabels__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scripts_general_scripts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_http_bbr_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_http_dossier_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_http_klant_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_http_tv_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_datepicker__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__scripts_sgsClasses_scripts__ = __webpack_require__(616);
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
            template: __webpack_require__(716),
            styles: [__webpack_require__(717)],
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

/***/ 716:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"zkForm\" class=\"container-fluid paddingTop30px\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtCode\" class=\"pull-right\">Code</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtCode\" formControlName=\"Code\" AllowOnlyNumbers DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"tvtTvId\" class=\"pull-right\">TV Nummer:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtTvId\" formControlName=\"TvId\" AllowOnlyNumbers DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"ddlKlant\" class=\"pull-right\">Klant</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlKlant\" formControlName=\"KlantId\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let klant of KlantListItems\" [value]=\"klant.klantID\" [innerHTML]=\"klant.naam\"></option>\r\n                </select>\r\n            </div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlDossierBeheerder\" class=\"pull-right\">DossierBeheerder</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlDossierBeheerder\" formControlName=\"DossierBeheerderId\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let dossbeh of DossierBeheerderListItems\" [value]=\"dossbeh.dossierBeheerderID\" [innerHTML]=\"dossbeh.naam\"></option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"ddlStatus\" class=\"pull-right\">Status</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlStatus\" formControlName=\"StatusId\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let sts of StatusListItems\" [value]=\"sts.tvStatusID\" [innerHTML]=\"sts.status\"></option>\r\n                </select>\r\n            </div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlBestemmingsaard\" class=\"pull-right\">Bestemmingsaard</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlBestemmingsaard\" formControlName=\"BestemmingsaardId\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let aard of BestemmingsaardListItems\" [value]=\"aard.bestemmingsAardId\" [innerHTML]=\"aard.bestemmingsAard\"></option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtStraat\" class=\"pull-right\">Bestemming Straat</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtStraat\" formControlName=\"Straat\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlGefactureerd\" class=\"pull-right\">Gefactureerd</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlGefactureerd\" formControlName=\"Gefactureerd\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option value=\"1\">Ja</option>\r\n                    <option value=\"0\">Nee</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtPostcode\" class=\"pull-right\">Bestemming Postcode:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtPostcode\" formControlName=\"Postcode\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"txtGemeente\" class=\"pull-right\">Bestemming Gemeente:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtGemeente\" formControlName=\"Gemeente\" DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtLambertX\" class=\"pull-right\">Bestemming Lambert X (in m)</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtLambertX\" formControlName=\"LambertX\" AllowOnlyNumbers DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlLambertRange\" class=\"pull-right\">Lambert Range:</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlLambertRange\" formControlName=\"LambertRange\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option value=\"1\">1 km</option>\r\n                    <option value=\"3\">3 km</option>\r\n                    <option value=\"5\">5 km</option>\r\n                    <option value=\"10\">10 km</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtLambertX\" class=\"pull-right\">Bestemming Lambert Y (in m)</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtLambertY\" formControlName=\"LambertY\" AllowOnlyNumbers DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-6\">&nbsp;</div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtVStraat\" class=\"pull-right\">TV Straat:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtVStraat\" formControlName=\"VertrekStraat\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"txtVGemeente\" class=\"pull-right\">TV Gemeente:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtVGemeente\" formControlName=\"VertrekGemeente\" DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"dteVan\" class=\"pull-right\">Datum Van:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"dteVan\" formControlName=\"datVan\" class=\"form-control ng-trim-ignore\" bsDatepicker placement=\"top left\" autocomplete=\"off\" DottedBorderBelow [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"dteTot\" class=\"pull-right\">Datum Tot:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"dteTot\" formControlName=\"datTot\" class=\"form-control ng-trim-ignore\" bsDatepicker placement=\"top left\" autocomplete=\"off\" DottedBorderBelow [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4 col-sm-offset-8\"><button type=\"button\" (click)=\"raiseSearch()\" class=\"btn btn-default\">{{appLabels.Send}}</button></div>\r\n        </div>\r\n    </div>\r\n</form>";

/***/ }),

/***/ 717:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(718);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwKlantGridComponent; });
/* unused harmony export FilterTypes */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scripts_appLabels__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_authentication_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(14);
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
            template: __webpack_require__(720),
            styles: [__webpack_require__(721)]
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

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<form [formGroup]=\"StsForm\" class=\"container-fluid paddingTop10px\">\r\n    <div class=\"row\" *ngIf=\"useSearch\">\r\n        <div class=\"col-sm-3\">\r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"ToggleExtendedSearch()\">{{ isExtendedSearch ? 'Enkelvoudig zoeken' : 'Geavanceerd zoeken' }}</button>\r\n        </div>\r\n        <div *ngIf=\"useSearch && !isExtendedSearch\" class=\"col-sm-9\">\r\n            <label class=\"paddingRight10px\">Filter status</label>\r\n            <select formControlName=\"sts\" DottedBorderBelow (change)=\"statusChanged()\">\r\n                <option value=\"-1\">Selecteer</option>\r\n                <option *ngFor=\"let sts of StatusDropdownList\" [value]=\"sts.klantStatusID\" [innerHTML]=\"sts.status\"></option>\r\n            </select>\r\n            <label class=\"paddingRight40px\">Klant Type</label>\r\n            <select formControlName=\"type\" DottedBorderBelow (change)=\"statusChanged()\">\r\n                <option value=\"0\">Alle</option>\r\n                <option value=\"1\">TopCgr</option>\r\n                <option value=\"2\">Dop</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"useSearch && isExtendedSearch\">\r\n        <div class=\"col-sm-12\"><gw-klant-zoekuitgebreid (searching)=\"onExtendedSearch($event)\"></gw-klant-zoekuitgebreid></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"NgxTable\">\r\n                <p class=\"pull-left NgxTitle\">{{title}}</p>\r\n                <ngx-datatable #table\r\n                               class=\"bootstrap\"\r\n                               (activate)=\"onActivate($event)\"\r\n                               [rows]=\"rows\"\r\n                               [columnMode]=\"'flex'\"\r\n                               [headerHeight]=\"50\"\r\n                               [footerHeight]=\"40\"\r\n                               [limit]=\"appLabels.tableViewRows\"\r\n                               [rowClass]=\"getRowClass\"\r\n                               [cssClasses]=\"appLabels.iconsCss\"\r\n                               [messages]=\"{totalMessage: appLabels.Total.toLowerCase(), emptyMessage: appLabels.NoDataToDisplay}\"\r\n                               [sorts]=\"[{prop:'klantID', dir:'desc' }]\"\r\n                               [rowHeight]=\"'auto'\">\r\n\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"klantID\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Klant ID</span>\r\n                            <div><input type=\"text\" formControlName=\"id\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span [routerLink]=\"\" (click)=\"linkToklant(row['klantID'])\"><span>{{row['klantID']}}</span></span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"naam\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Naam</span>\r\n                            <div><input type=\"text\" formControlName=\"naam\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span>{{value}}</span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" prop=\"beroepsorganisatiecode\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Code</span></div>\r\n                            <div><input type=\"text\" formControlName=\"code\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" name=\"inschrijvingsDatum\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Inschrijving</span></div>\r\n                            <div><input type=\"text\" formControlName=\"inschrijvingsDatum\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date:\"dd/MM/yyyy\"}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" name=\"datumActief\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Actief</span></div>\r\n                            <div><input type=\"text\" formControlName=\"datumActief\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date:\"dd/MM/yyyy\"}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"gefactureerd\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Gefact.</span></div>\r\n                            <div><input type=\"text\" formControlName=\"gefactureerd\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" name=\"facturatieStartDatum\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Start Datum</span></div>\r\n                            <div><input type=\"text\" formControlName=\"startDatum\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date:\"dd/MM/yyyy\"}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"Detail\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img src=\"" + __webpack_require__(15) + "\" class=\"ibtn\" (click)=\"linkToKlant(row['klantID'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                </ngx-datatable>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</form>";

/***/ }),

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(722);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwKlantWijzGridComponent; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scripts_appLabels__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_authentication_service__ = __webpack_require__(34);
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
            template: __webpack_require__(724),
            styles: [__webpack_require__(725)]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["ToastrService"], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_5__services_http_klant_service__["a" /* HttpKlantService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_8__services_authentication_service__["a" /* AuthenticationService */]])
    ], gwKlantWijzGridComponent);
    return gwKlantWijzGridComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__["b" /* GeneralScripts */]));



/***/ }),

/***/ 724:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<form [formGroup]=\"StsForm\" class=\"container-fluid paddingTop10px\">\r\n    <div class=\"row\" *ngIf=\"isGWUser != null\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"NgxTable\">\r\n                <ngx-datatable #table\r\n                               class=\"bootstrap\"\r\n                               (activate)=\"onActivate($event)\"\r\n                               [rows]=\"rows\"\r\n                               [columnMode]=\"'flex'\"\r\n                               [headerHeight]=\"50\"\r\n                               [footerHeight]=\"40\"\r\n                               [limit]=\"appLabels.tableViewRows\"\r\n                               [rowClass]=\"getRowClass\"\r\n                               [cssClasses]=\"appLabels.iconsCss\"\r\n                               [messages]=\"{totalMessage: appLabels.Total.toLowerCase(), emptyMessage: appLabels.NoDataToDisplay}\"\r\n                               [sorts]=\"[{prop:'id', dir:'desc' }]\"\r\n                               [rowHeight]=\"'auto'\">\r\n\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"id\" headerClass=\"NgxHeader\" hidden>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"klantID\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Klant ID</span>\r\n                            <div><input type=\"text\" formControlName=\"klantId\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span [routerLink]=\"\" (click)=\"linkToklant(row['klantID'])\"><span>{{row['klantID']}}</span></span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" prop=\"achternaam\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Achternaam</span>\r\n                            <div><input type=\"text\" formControlName=\"anaam\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span>{{value}}</span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" prop=\"voornaam\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Voornaam</span></div>\r\n                            <div><input type=\"text\" formControlName=\"vnaam\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" prop=\"postcode\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Postcode</span></div>\r\n                            <div><input type=\"text\" formControlName=\"pcode\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" prop=\"plaats\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Plaats</span></div>\r\n                            <div><input type=\"text\" formControlName=\"plaats\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"Detail\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img src=\"" + __webpack_require__(15) + "\" class=\"ibtn\" (click)=\"linkToKlantWijz(row['id'], row['klantID'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                </ngx-datatable>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</form>";

/***/ }),

/***/ 725:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(726);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 726:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwKlantZoekUitgebreidComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scripts_appLabels__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scripts_general_scripts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_http_klant_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__scripts_sgsClasses_scripts__ = __webpack_require__(616);
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
            template: __webpack_require__(728),
            styles: [__webpack_require__(729)],
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

/***/ 728:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"zkForm\" class=\"container-fluid paddingTop30px\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\"><label for=\"txtKlantId\" class=\"pull-right\">Klant Id:</label></div>\r\n            <div class=\"col-sm-8\"><input type=\"text\" id=\"txtKlantId\" formControlName=\"KlantId\" AllowOnlyNumbers DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\"><label for=\"txtOrganisatie\" class=\"pull-right\">Organisatie:</label></div>\r\n            <div class=\"col-sm-8\"><input type=\"text\" id=\"txtOrganisatie\" formControlName=\"Organisatie\" DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\"><label for=\"txtVoornaam\" class=\"pull-right\">Voornaam:</label></div>\r\n            <div class=\"col-sm-8\"><input type=\"text\" id=\"txtVoornaam\" formControlName=\"Voornaam\" DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\"><label for=\"txtAchternaam\" class=\"pull-right\">Achternaam:</label></div>\r\n            <div class=\"col-sm-8\"><input type=\"text\" id=\"txtAchternaam\" formControlName=\"Achternaam\" DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\"><label for=\"txtStraat\" class=\"pull-right\">Straat:</label></div>\r\n            <div class=\"col-sm-8\"><input type=\"text\" id=\"txtStraat\" formControlName=\"Straat\" DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\"><label for=\"txtGemeente\" class=\"pull-right\">Gemeente:</label></div>\r\n            <div class=\"col-sm-8\"><input type=\"text\" id=\"txtGemeente\" formControlName=\"Gemeente\" DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-8 col-sm-offset-4\"><button type=\"button\" (click)=\"raiseSearch()\" class=\"btn btn-default\">{{appLabels.Send}}</button></div>\r\n        </div>\r\n    </div>\r\n</form>";

/***/ }),

/***/ 729:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(730);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 730:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwKWGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_http_kleinewerven_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scripts_appLabels__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__angular_router__);
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
            template: __webpack_require__(732),
            styles: [__webpack_require__(733)]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["ToastrService"], __WEBPACK_IMPORTED_MODULE_7__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_4__services_http_kleinewerven_service__["a" /* HttpKleineWervenService */]])
    ], gwKWGridComponent);
    return gwKWGridComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__["b" /* GeneralScripts */]));



/***/ }),

/***/ 732:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<form [formGroup]=\"statusForm\" class=\"container-fluid paddingTop10px\">\r\n    <div class=\"row\" *ngIf=\"useSearch\">\r\n        <div class=\"col-sm-3\">\r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"ToggleExtendedSearch()\">{{ isExtendedSearch ? 'Enkelvoudig zoeken' : 'Geavanceerd zoeken' }}</button>\r\n        </div>\r\n        <div *ngIf=\"useSearch && !isExtendedSearch\" class=\"col-sm-9\">\r\n            <label class=\"paddingRight10px\">Filter status</label>\r\n            <select formControlName=\"sts\" DottedBorderBelow (change)=\"statusChanged()\">\r\n                <option value=\"-1\">Selecteer</option>\r\n                <option *ngFor=\"let sts of statusDropdownList\" [value]=\"sts.id\" [innerHTML]=\"sts.status\"></option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"useSearch && isExtendedSearch\">\r\n        <div class=\"col-sm-12\"><gw-kw-zoekuitgebreid (searching)=\"onExtendedSearch($event)\"></gw-kw-zoekuitgebreid></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"NgxTable\">\r\n                <ngx-datatable #table\r\n                               class=\"bootstrap\"\r\n                               (activate)=\"onActivate($event)\"\r\n                               [rows]=\"rows\"\r\n                               [columnMode]=\"'flex'\"\r\n                               [headerHeight]=\"50\"\r\n                               [footerHeight]=\"40\"\r\n                               [limit]=\"appLabels.tableViewRows\"\r\n                               [cssClasses]=\"appLabels.iconsCss\"\r\n                               [messages]=\"{totalMessage: appLabels.Total.toLowerCase(), emptyMessage: appLabels.NoDataToDisplay}\"\r\n                               [sorts]=\"[{prop:'ID', dir:'desc' }]\"\r\n                               [rowHeight]=\"'auto'\">\r\n\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"meldingID\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Nummer</span>\r\n                            <div><input type=\"text\" formControlName=\"ID\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span [routerLink]=\"\" (click)=\"linkToKW(row['meldingID'])\"><span>{{row['meldingID']}}</span></span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"klantReferentie\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Referentie</span>\r\n                            <div><input type=\"text\" formControlName=\"Ref\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"grondwerker\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Grondwerker</span>\r\n                            <div><input type=\"text\" formControlName=\"GW\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"transporteur\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Transporteur</span>\r\n                            <div><input type=\"text\" formControlName=\"TPT\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"herkomst\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Herkomst</span>\r\n                            <div><input type=\"text\" formControlName=\"Herk\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"bestemming\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Bestemming</span>\r\n                            <div><input type=\"text\" formControlName=\"Best\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"startDatum\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">StartDatum</span></div>\r\n                            <div><input type=\"text\" formControlName=\"Dtm\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date:\"dd/MM/yyyy\"}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"status\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Status</span>\r\n                            <div><input type=\"text\" formControlName=\"Status\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"Detail\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img src=\"" + __webpack_require__(15) + "\" class=\"ibtn\" (click)=\"linkToKW(row['meldingID'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                </ngx-datatable>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</form>";

/***/ }),

/***/ 733:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(734);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 734:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwKWZoekUitgebreidComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scripts_appLabels__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scripts_general_scripts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_http_dossier_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_http_klant_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_http_tv_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_datepicker__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__scripts_sgsClasses_scripts__ = __webpack_require__(616);
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
            template: __webpack_require__(736),
            styles: [__webpack_require__(737)],
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

/***/ 736:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"zkForm\" class=\"container-fluid paddingTop30px\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"ddlIndiener\" class=\"pull-right\">Klant/Indiener</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlIndiener\" formControlName=\"Indiener\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let klant of IndienerListItems\" [value]=\"klant.klantID\" [innerHTML]=\"klant.naam\"></option>\r\n                </select>\r\n            </div>\r\n            <div class=\"col-sm-2\"><label for=\"chkVerklaringOntvangen\" class=\"pull-right\">Verklaring Ontvangen:</label></div>\r\n            <div class=\"checkbox col-sm-4\"><div class=\"marginTopMin10px marginLeft20px\"><input type=\"checkbox\" id=\"chkVerklaringOntvangen\" class=\"marginBottom0\" formControlName=\"VerklaringOntvangen\" value=\"\" /></div></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtReferentie\" class=\"pull-right\">Referentie:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtReferentie\" formControlName=\"Referentie\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlDossierBeheerder\" class=\"pull-right\">DossierBeheerder</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlDossierBeheerder\" formControlName=\"DossierBeheerder\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let dossbeh of DossierBeheerderListItems\" [value]=\"dossbeh.dossierBeheerderID\" [innerHTML]=\"dossbeh.naam\"></option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4 col-sm-offset-8\"><button type=\"button\" (click)=\"raiseSearch()\" class=\"btn btn-default\">{{appLabels.Send}}</button></div>\r\n        </div>\r\n    </div>\r\n</form>";

/***/ }),

/***/ 737:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(738);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 738:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwTVGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_tv_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scripts_appLabels__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_authentication_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(14);
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
            template: __webpack_require__(740),
            styles: [__webpack_require__(743)]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["ToastrService"], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_5__services_http_tv_service__["a" /* HttpTVService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_8__services_authentication_service__["a" /* AuthenticationService */]])
    ], gwTVGridComponent);
    return gwTVGridComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__["b" /* GeneralScripts */]));



/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<form [formGroup]=\"StsForm\" class=\"container-fluid paddingTop10px\">\r\n    <div class=\"row\" *ngIf=\"useSearch\">\r\n        <div class=\"col-sm-3\">\r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"ToggleExtendedSearch()\">{{ isExtendedSearch ? 'Enkelvoudig zoeken' : 'Geavanceerd zoeken' }}</button>\r\n        </div>\r\n        <div *ngIf=\"useSearch && !isExtendedSearch\" class=\"col-sm-9\">\r\n            <label class=\"paddingRight10px\">Filter status</label>\r\n            <select formControlName=\"sts\" DottedBorderBelow (change)=\"statusChanged()\">\r\n                <option value=\"-1\">Selecteer</option>\r\n                <option *ngFor=\"let sts of StatusDropdownList\" [value]=\"sts.tvStatusID\" [innerHTML]=\"sts.status\"></option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"useSearch && isExtendedSearch\">\r\n        <div class=\"col-sm-12\"><gw-tv-zoekuitgebreid (searching)=\"onExtendedSearch($event)\"></gw-tv-zoekuitgebreid></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"NgxTable\">\r\n                <p *ngIf=\"forNieuweAanvragen == false\" class=\"pull-left NgxTitle\">{{title}}</p>\r\n                <ngx-datatable #table\r\n                               class=\"bootstrap\"\r\n                               (activate)=\"onActivate($event)\"\r\n                               [rows]=\"rows\"\r\n                               [columnMode]=\"'flex'\"\r\n                               [headerHeight]=\"50\"\r\n                               [footerHeight]=\"40\"\r\n                               [limit]=\"appLabels.tableViewRows\"\r\n                               [rowClass]=\"getRowClass\"\r\n                               [cssClasses]=\"appLabels.iconsCss\"\r\n                               [messages]=\"{totalMessage: appLabels.Total.toLowerCase(), emptyMessage: appLabels.NoDataToDisplay}\"\r\n                               [sorts]=\"[{prop:'technischVerslagID', dir:'desc' }]\"\r\n                               [rowHeight]=\"'auto'\">\r\n\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"Samengesteld\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template></ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img *ngIf=\"row['samengevoegdDoor'] != null && row['samengevoegdDoor'] != ''\" src=\"" + __webpack_require__(741) + "\" class=\"ibtn\" (click)=\"linkToDelete(row['technischVerslagID'])\" />\r\n                            <img *ngIf=\"row['externTV'] != null && row['externTV'] == true\" src=\"" + __webpack_require__(742) + "\" class=\"ibtn\" (click)=\"linkToDelete(row['technischVerslagID'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"technischVerslagID\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">TV Nr.</span>\r\n                            <div><input type=\"text\" formControlName=\"technischVerslagID\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <a *ngIf=\"row['isEvaluatieVlarebo2008'] != null && row['isEvaluatieVlarebo2008'] == true\" class=\"pdfLink\" [routerLink]=\"['/technisch-verslag-detail', row['technischVerslagID']]\"><label class=\"text\">{{row['technischVerslagID']}}</label></a>\r\n                            <a *ngIf=\"row['isEvaluatieVlarebo2008'] == null || row['isEvaluatieVlarebo2008'] == false\" class=\"pdfLink\" [routerLink]=\"['/technisch-verslag-detail', row['technischVerslagID']]\"><label class=\"text\">{{row['technischVerslagID']}}</label></a>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"4\" prop=\"naam\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Naam</span>\r\n                            <div><input type=\"text\" formControlName=\"naam\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span>{{value}}</span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"gemeenteOnderzoekslocatie\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Gemeente Onderzoekslokatie</span>\r\n                            <input type=\"text\" formControlName=\"gemeenteOnderzoekslocatie\" class=\"NgxFilterField\" (keyup)=\"filter()\" />\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span>{{value}}</span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" name=\"indieningsDatum\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">IndieningsDatum</span></div>\r\n                            <div><input type=\"text\" formControlName=\"indieningsDatum\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date:\"dd/MM/yyyy\"}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" name=\"statusDatum\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Status Datum</span></div>\r\n                            <div><input type=\"text\" formControlName=\"statusDatum\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date:\"dd/MM/yyyy\"}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"indieningswijze\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Indien.Wijze</span></div>\r\n                            <div><input type=\"text\" formControlName=\"indieningswijze\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"gefactureerd\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Gefact.</span></div>\r\n                            <div><input type=\"text\" formControlName=\"gefactureerd\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"Detail\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img src=\"" + __webpack_require__(15) + "\" class=\"ibtn\" (click)=\"linkToTV(row['technischVerslagID'], row['isEvaluatieVlarebo2008'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column *ngIf=\"canDelete\" [flexGrow]=\"1\" name=\"Detail\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        </ng-template>\r\n                        <ng-template  let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img src=\"" + __webpack_require__(82) + "\" class=\"ibtn\" (click)=\"deleteTV(row['technischVerslagID'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                </ngx-datatable>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</form>";

/***/ }),

/***/ 741:
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,R0lGODlhDwAPAPcAAAAAAA1nCw1tBw1vBwxwCAx1CA54Bgx/BBBtDxNvFhZrFxptGBJ7DRN9CxJ+Dhd8Ch50GClsJCNyIidwJiV0JSx2JzV2NAmHAg6LCAqSBwqVCA6XDBKPCBONDRqLEReWCxCbChGfCRmTCxmYDRmVERqWEB+RFg+qBw6/AhKlCRSqDBivCh2qCRysGBCwCBCyDBe0DhS7BBi1BBq3Ch26DRe5EhizEBuzER+zER+zFSSPGyGSGSOcGCaFIC+ALDOKJzGMJjSMKD2GOiOqFSKwDyKxEyGzFCS4GS+gJTChKAbLAA3DAhHFAxPJAxTJBBjFBx7DDB3FDhnNCx7NCR/CEBnSBRrQCCLJDCLMESTOEyHWByvSEy3UFC7DIEaZOUabPEmWP0uYQFGLS1WOTlSKU1OTUVqWWFiYV1yaVF6sWFS1TVu1VGGQYWCuW3Gsb3aqbnWkdnGpcnKtcHOucXardXardn+3d5a4mZe5mp2/np+/oI7Ch5fDlpfAmJrDm6nEn8LZxun82vH77fL78/X79Pb89PP++fP++vX7+P319vv68/v59v36/P38/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAP8ALAAAAAAPAA8AAAi9AP8JHEiwIEE9FhAQCLAAjsF/ZASssJKlixEHEwqaMUBjCg41SbBE4RCB4IAUTqB4EbQnhpIZDNgIFHPBRo0jYAr1aUGDiAYFAiVg2NFGzp1DgOjMCbKhgMAEHYAEUsSo0aJEiOxkOPDnHwUSHtK4wWMIUJ04P0A0EDjmw4kXOcIQ8tMCBosQEAY+cLGEypdBfG6gkDHizEA0JZ40KbIGiRQmQyoULCPiihYuW6qo8PEwjxATPHT0ePOwNMGAADs="

/***/ }),

/***/ 742:
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,R0lGODlhDwAPAPcAAACAAf///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAADwAPAAAIOwABCBxIsKDBgwgTDgzAcCHDhgAgRhQYwOFEgxUpasT4MGPGiA0/hixY8eNEiSMpinyokqXClzBjygwIADs="

/***/ }),

/***/ 743:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(744);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 744:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".parentTop {\r\n    position: relative;\r\n    display: block;\r\n}\r\n.childTop {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 200px;\r\n    display: block;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwTVZoekUitgebreidComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scripts_appLabels__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scripts_general_scripts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_http_bbr_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_http_dossier_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_http_klant_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_http_tv_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_datepicker__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__scripts_sgsClasses_scripts__ = __webpack_require__(616);
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
            template: __webpack_require__(746),
            styles: [__webpack_require__(747)],
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

/***/ 746:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"zkForm\" class=\"container-fluid paddingTop30px\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtCode\" class=\"pull-right\">Code</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtCode\" formControlName=\"Code\" AllowOnlyNumbers DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"chkOvername\" class=\"pull-right\">Overname:</label></div>\r\n            <div class=\"checkbox col-sm-4\"><div class=\"marginTopMin10px marginLeft20px\"><input type=\"checkbox\" id=\"chkOvername\" class=\"marginBottom0\" formControlName=\"Overname\" value=\"\" /></div></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"ddlIndiener\" class=\"pull-right\">Klant/Indiener</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlIndiener\" formControlName=\"Indiener\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let klant of IndienerListItems\" [value]=\"klant.klantID\" [innerHTML]=\"klant.naam\"></option>\r\n                </select>\r\n            </div>\r\n            <div class=\"col-sm-2\"><label for=\"chkSamengevoegd\" class=\"pull-right\">Samengevoegd:</label></div>\r\n            <div class=\"checkbox col-sm-4\"><div class=\"marginTopMin10px marginLeft20px\"><input type=\"checkbox\" id=\"chkSamengevoegd\" class=\"marginBottom0\" formControlName=\"Samengevoegd\" value=\"\" /></div></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtFactuurRef\" class=\"pull-right\">Factuur Referentie Klant:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtFactuurRef\" formControlName=\"FactuurRef\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"txtEBSD\" class=\"pull-right\">Naam EBSD:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtEBSD\" formControlName=\"EBSD\" DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtAdres\" class=\"pull-right\">Straat en nr:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtAdres\" formControlName=\"Adres\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlIndieningsWijze\" class=\"pull-right\">Indieningswijze</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlIndieningsWijze\" formControlName=\"IndieningsWijze\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let iw of IndieningsWijzeListItems\" [value]=\"iw.indieningswijzeID\" [innerHTML]=\"iw.indieningswijze\"></option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtGemeente\" class=\"pull-right\">Gemeente:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtGemeente\" formControlName=\"Gemeente\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"dteDatum\" class=\"pull-right\">Datum:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"dteDatum\" formControlName=\"Datum\" class=\"form-control ng-trim-ignore\" bsDatepicker placement=\"top left\" autocomplete=\"off\" DottedBorderBelow [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtTitel\" class=\"pull-right\">Titel:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtTitel\" formControlName=\"Titel\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlStatus\" class=\"pull-right\">Status</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlStatus\" formControlName=\"Status\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let sts of StatusListItems\" [value]=\"sts.tvStatusID\" [innerHTML]=\"sts.status\"></option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtBeschrijving\" class=\"pull-right\">Beschrijving:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtBeschrijving\" formControlName=\"Beschrijving\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlGefactureerd\" class=\"pull-right\">Gefactureerd</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlGefactureerd\" formControlName=\"Gefactureerd\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option value=\"1\">Ja</option>\r\n                    <option value=\"0\">Nee</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtReferentie\" class=\"pull-right\">Referentie:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtReferentie\" formControlName=\"Referentie\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlDossierBeheerder\" class=\"pull-right\">DossierBeheerder</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlDossierBeheerder\" formControlName=\"DossierBeheerder\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let dossbeh of DossierBeheerderListItems\" [value]=\"dossbeh.dossierBeheerderID\" [innerHTML]=\"dossbeh.naam\"></option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4 col-sm-offset-8\"><button type=\"button\" (click)=\"raiseSearch()\" class=\"btn btn-default\">{{appLabels.Send}}</button></div>\r\n        </div>\r\n    </div>\r\n</form>";

/***/ }),

/***/ 747:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(748);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 748:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GwGridRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_common_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_GW_gw_home_gw_home_component__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_chronos__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_locale__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_services_http_mail_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_services_event_listener_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_authentication_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_loading_animation_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_http_puin_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_http_tvzone_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_http_tv_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_http_kleinewerven_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_http_klant_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_http_gvt_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_http_gtm_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_http_file_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_http_dossier_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_http_bbr_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_http_interceptor_service__ = __webpack_require__(204);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWdyaWQubW9kdWxlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zY3JpcHRzL3Nnc0NsYXNzZXMuc2NyaXB0cy50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWhvbWUvZ3ctaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ob21lL2d3LWhvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ob21lL2d3LWhvbWUuY29tcG9uZW50LmNzcz9jZGFiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctaG9tZS9ndy1ob21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1iYnItZ3JpZC9ndy1iYnItZ3JpZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1iYnItZ3JpZC9ndy1iYnItZ3JpZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWJici1ncmlkL2d3LWJici1ncmlkLmNvbXBvbmVudC5jc3M/MTJhYSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWJici1ncmlkL2d3LWJici1ncmlkLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1iYnItem9la3VpdGdlYnJlaWQvZ3ctYmJyLXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWJici16b2VrdWl0Z2VicmVpZC9ndy1iYnItem9la3VpdGdlYnJlaWQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1iYnItem9la3VpdGdlYnJlaWQvZ3ctYmJyLXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5jc3M/YmFjNCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWJici16b2VrdWl0Z2VicmVpZC9ndy1iYnItem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWd0bS1ncmlkL2d3LWd0bS1ncmlkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWd0bS1ncmlkL2d3LWd0bS1ncmlkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9pbWFnZXMvY2hlY2tlcmVkLWZsYWctaWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ndG0tZ3JpZC9ndy1ndG0tZ3JpZC5jb21wb25lbnQuY3NzPzJiMjEiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ndG0tZ3JpZC9ndy1ndG0tZ3JpZC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctZ3RtLXpvZWt1aXRnZWJyZWlkL2d3LWd0bS16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ndG0tem9la3VpdGdlYnJlaWQvZ3ctZ3RtLXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctZ3RtLXpvZWt1aXRnZWJyZWlkL2d3LWd0bS16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuY3NzP2Y4YTQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ndG0tem9la3VpdGdlYnJlaWQvZ3ctZ3RtLXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ndnQtZ3JpZC9ndy1ndnQtZ3JpZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ndnQtZ3JpZC9ndy1ndnQtZ3JpZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWd2dC1ncmlkL2d3LWd2dC1ncmlkLmNvbXBvbmVudC5jc3M/MjdjOSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWd2dC1ncmlkL2d3LWd2dC1ncmlkLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ndnQtem9la3VpdGdlYnJlaWQvZ3ctZ3Z0LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWd2dC16b2VrdWl0Z2VicmVpZC9ndy1ndnQtem9la3VpdGdlYnJlaWQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ndnQtem9la3VpdGdlYnJlaWQvZ3ctZ3Z0LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5jc3M/ZDkxZCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWd2dC16b2VrdWl0Z2VicmVpZC9ndy1ndnQtem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWtsYW50LWdyaWQvZ3cta2xhbnQtZ3JpZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rbGFudC1ncmlkL2d3LWtsYW50LWdyaWQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rbGFudC1ncmlkL2d3LWtsYW50LWdyaWQuY29tcG9uZW50LmNzcz82MTdiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta2xhbnQtZ3JpZC9ndy1rbGFudC1ncmlkLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rbGFudHdpanotZ3JpZC9ndy1rbGFudHdpanotZ3JpZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rbGFudHdpanotZ3JpZC9ndy1rbGFudHdpanotZ3JpZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWtsYW50d2lqei1ncmlkL2d3LWtsYW50d2lqei1ncmlkLmNvbXBvbmVudC5jc3M/OWY2YiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWtsYW50d2lqei1ncmlkL2d3LWtsYW50d2lqei1ncmlkLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rbGFudC16b2VrdWl0Z2VicmVpZC9ndy1rbGFudC16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rbGFudC16b2VrdWl0Z2VicmVpZC9ndy1rbGFudC16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWtsYW50LXpvZWt1aXRnZWJyZWlkL2d3LWtsYW50LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5jc3M/YTU4NSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWtsYW50LXpvZWt1aXRnZWJyZWlkL2d3LWtsYW50LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rdy1ncmlkL2d3LWt3LWdyaWQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta3ctZ3JpZC9ndy1rdy1ncmlkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta3ctZ3JpZC9ndy1rdy1ncmlkLmNvbXBvbmVudC5jc3M/YjQxNiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWt3LWdyaWQvZ3cta3ctZ3JpZC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta3ctem9la3VpdGdlYnJlaWQvZ3cta3ctem9la3VpdGdlYnJlaWQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta3ctem9la3VpdGdlYnJlaWQvZ3cta3ctem9la3VpdGdlYnJlaWQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rdy16b2VrdWl0Z2VicmVpZC9ndy1rdy16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuY3NzPzQzZGMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rdy16b2VrdWl0Z2VicmVpZC9ndy1rdy16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctdHYtZ3JpZC9ndy10di1ncmlkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LXR2LWdyaWQvZ3ctdHYtZ3JpZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvaW1hZ2VzL1BsdXMuZ2lmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9pbWFnZXMvR2IyLmdpZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LXR2LWdyaWQvZ3ctdHYtZ3JpZC5jb21wb25lbnQuY3NzPzdmNmIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy10di1ncmlkL2d3LXR2LWdyaWQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LXR2LXpvZWt1aXRnZWJyZWlkL2d3LXR2LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LXR2LXpvZWt1aXRnZWJyZWlkL2d3LXR2LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctdHYtem9la3VpdGdlYnJlaWQvZ3ctdHYtem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzcz82MTVmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctdHYtem9la3VpdGdlYnJlaWQvZ3ctdHYtem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWdyaWQucm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUU7QUFDbEI7QUFDbUI7QUFDbkI7QUFDVTtBQWlFekQsYUFBYTtBQUNvRTtBQUNXO0FBQzhCO0FBSTlCO0FBQzhCO0FBQzlCO0FBQzhCO0FBRXhCO0FBQ1k7QUFDa0I7QUFDdkM7QUFDOEI7QUFDOUI7QUFDOEI7QUFNMUQ7QUFDVDtBQUc2QjtBQUM1QjtBQUNIO0FBQ2xELG9GQUFZLENBQUMsdUJBQXVCLEVBQUUseUVBQVUsQ0FBQyxDQUFDO0FBRUM7QUFFYztBQVlEO0FBRVU7QUFLSTtBQUNIO0FBQ2I7QUFDUTtBQUNOO0FBQ0Y7QUFDQTtBQUNJO0FBQ2M7QUFDcEI7QUFDUTtBQUNKO0FBQ087QUFDUztBQUNqQjtBQXVFL0Q7SUFBQTtJQUNBLENBQUM7SUFEWSxZQUFZO1FBaEV4QiwrREFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLDZEQUFZO2dCQUNaLGtFQUFnQjtnQkFDaEIsMkRBQVc7Z0JBQ1gsbUVBQW1CO2dCQUNuQiw0RUFBa0I7Z0JBQ2xCLG1FQUFVO2dCQUNWLGdGQUF1QjtnQkFDdkIsNkRBQWEsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3ZCLGtFQUFrQixDQUFDLE9BQU8sRUFBRTtnQkFDNUIsNkRBQWEsQ0FBQyxPQUFPLEVBQUU7Z0JBRXZCLHFGQUFtQjtnQkFDM0IsMEJBQTBCO2FBQ3JCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLDZEQUFZO2FBQ2Y7WUFDRCxZQUFZLEVBQUU7Z0JBRVYsYUFBYTtnQkFFYixpR0FBZTtnQkFDZiw0R0FBa0I7Z0JBQ2xCLDBJQUE0QjtnQkFDNUIsNEdBQWtCO2dCQUNsQiww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ZSxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN2RCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQzlELElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDbkUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6RCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQy9ELElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDekQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUN2RSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ25FLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDL0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUN2RSxJQUFJLENBQUMsVUFBVSxDQUFDLElB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RkFBYztnQkFDZCxtRkFBYztnQkFDZCx1RkFBZ0I7Z0JBQ2hCLHFHQUF1QjtnQkFDdkIsaUZBQWE7Z0JBQ2IseUZBQWlCO2dCQUNqQixxRkFBZTtnQkFDZiwrRkFBZTtnQkFDZixxR0FBdUI7Z0JBQ3ZCLHlHQUFvQjtnQkFDcEIseURBQVE7YUFDWDtTQUNKLENBQUM7T0FDVyxtQkFBbUIsQ0FDL0I7SUFBRCwwQkFBQztDQUFBO0FBRCtCIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBHd0VkaXRSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vZ3ctZWRpdC5yb3V0aW5nLm1vZHVsZVwiO1xyXG5cclxuLy8gQ3VzdG9tZXIgUmVsYXRlZFxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOYXZNZW51Q29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRmV0Y2hEYXRhQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZmV0Y2hkYXRhL2ZldGNoZGF0YS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRmlsZVVwbG9hZGVyQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZmlsZS11cGxvYWRlci9maWxlLXVwbG9hZGVyLmNvbXBvbmVudFwiO1xyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBGb3JiaWRkZW5Db21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mb3JiaWRkZW4vZm9yYmlkZGVuLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFcnJvckNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Vycm9yL2Vycm9yLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgSW5zY2hyaWp2ZW5BbHNHZWJydWlrZXJDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9pbnNjaHJpanZlbi1hbHMtZ2VicnVpa2VyL2luc2NocmlqdmVuLWFscy1nZWJydWlrZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEJyYW5jaGVDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9pbnNjaHJpanZlbi1hbHMtZ2VicnVpa2VyL2JyYW5jaGUvYnJhbmNoZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQmVyb2Vwc29yZ2FuaXNhdGllQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaW5zY2hyaWp2ZW4tYWxzLWdlYnJ1aWtlci9iZXJvZXBzb3JnYW5pc2F0aWUvYmVyb2Vwc29yZ2FuaXNhdGllLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgQWxsb3dPbmx5TnVtYmVyc0RpcmVjdGl2ZSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2RpcmVjdGl2ZXMvYWxsb3dPbmx5TnVtYmVycy5kaXJlY3RpdmVzXCI7XHJcbmltcG9ydCB7IERvdHRlZEJvcmRlckJlbG93RGlyZWN0aXZlIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZGlyZWN0aXZlcy9kb3R0ZWRib3JkZXJCZWxvdy5kaXJlY3RpdmVzXCI7XHJcblxyXG5cclxuaW1wb3J0IHsgVGVjaG5pc2NoVmVyc2xhZ0RldGFpbENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RlY2huaXNjaC12ZXJzbGFnLWRldGFpbC90ZWNobmlzY2gtdmVyc2xhZy1kZXRhaWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRlY2huaXNjaFZlcnNsYWdJbmRpZW5lbkNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RlY2huaXNjaC12ZXJzbGFnLWluZGllbmVuL3RlY2huaXNjaC12ZXJzbGFnLWluZGllbmVuLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUZWNobmlzY2hWZXJzbGFnT2tDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90ZWNobmlzY2gtdmVyc2xhZy1vay90ZWNobmlzY2gtdmVyc2xhZy1vay5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVGVjaG5pc2NoVmVyc2xhZ1N0YXR1c0NvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RlY2huaXNjaC12ZXJzbGFnLXN0YXR1cy90ZWNobmlzY2gtdmVyc2xhZy1zdGF0dXMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRlY2huaXNjaFZlcnNsYWdab2VrZW5Db21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90ZWNobmlzY2gtdmVyc2xhZy16b2VrZW4vdGVjaG5pc2NoLXZlcnNsYWctem9la2VuLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUZWNobmlzY2hWZXJzbGFnWm9uZVJlZ2lzdHJhdGllQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdGVjaG5pc2NoLXZlcnNsYWctem9uZS1yZWdpc3RyYXRpZS90ZWNobmlzY2gtdmVyc2xhZy16b25lLXJlZ2lzdHJhdGllLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgVHJhbnNwb3J0VG9wQ2dyTWVsZGVuQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdHJhbnNwb3J0LXRvcC1jZ3ItbWVsZGVuL3RyYW5zcG9ydC10b3AtY2dyLW1lbGRlbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVHJhbnNwb3J0VG9wQ2dyRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdHJhbnNwb3J0LXRvcC1jZ3ItZGV0YWlsL3RyYW5zcG9ydC10b3AtY2dyLWRldGFpbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVHJhbnNwb3J0VG9wQ2dyVmVya2xhcmluZ0NvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RyYW5zcG9ydC10b3AtY2dyLXZlcmtsYXJpbmcvdHJhbnNwb3J0LXRvcC1jZ3ItdmVya2xhcmluZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVHJhbnNwb3J0VG9wQ2dyU3RhdHVzQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdHJhbnNwb3J0LXRvcC1jZ3Itc3RhdHVzL3RyYW5zcG9ydC10b3AtY2dyLXN0YXR1cy5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IEdyb25kdmVyemV0dG9lbGF0aW5nQWFudnJhYWdPa0NvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dyb25kdmVyemV0dG9lbGF0aW5nLWFhbnZyYWFnb2svZ3JvbmR2ZXJ6ZXR0b2VsYXRpbmctYWFudnJhYWdvay5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgR3JvbmR2ZXJ6ZXR0b2VsYXRpbmdBYW52cmFnZW5Db21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ncm9uZHZlcnpldHRvZWxhdGluZy1hYW52cmFnZW4vZ3JvbmR2ZXJ6ZXR0b2VsYXRpbmctYWFudnJhZ2VuLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBHcm9uZHZlcnpldHRvZWxhdGluZ0luZGllbmVuQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ3JvbmR2ZXJ6ZXR0b2VsYXRpbmctaW5kaWVuZW4vZ3JvbmR2ZXJ6ZXR0b2VsYXRpbmctaW5kaWVuZW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEdyb25kdmVyemV0dG9lbGF0aW5nU3RhdHVzQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ3JvbmR2ZXJ6ZXR0b2VsYXRpbmctc3RhdHVzL2dyb25kdmVyemV0dG9lbGF0aW5nLXN0YXR1cy5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IEJvZGVtYmVoZWVycmFwcG9ydEFhbnZyYWdlbkNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2JvZGVtYmVoZWVycmFwcG9ydC1hYW52cmFnZW4vYm9kZW1iZWhlZXJyYXBwb3J0LWFhbnZyYWdlbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQm9kZW1iZWhlZXJyYXBwb3J0U3RhdHVzQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYm9kZW1iZWhlZXJyYXBwb3J0LXN0YXR1cy9ib2RlbWJlaGVlcnJhcHBvcnQtc3RhdHVzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBCb2RlbWJlaGVlcnJhcHBvcnREZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ib2RlbWJlaGVlcnJhcHBvcnQtZGV0YWlsL2JvZGVtYmVoZWVycmFwcG9ydC1kZXRhaWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEJvZGVtYmVoZWVycmFwcG9ydEdyaWRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ib2RlbWJlaGVlcnJhcHBvcnQtZ3JpZC9ib2RlbWJlaGVlcnJhcHBvcnQtZ3JpZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQm9kZW1iZWhlZXJyYXBwb3J0T25saW5lQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYm9kZW1iZWhlZXJyYXBwb3J0LW9ubGluZS9ib2RlbWJlaGVlcnJhcHBvcnQtb25saW5lLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgVG9wR3JvbmR0cmFuc3BvcnRTdGF0dXNDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90b3AtZ3JvbmR0cmFuc3BvcnQtc3RhdHVzL3RvcC1ncm9uZHRyYW5zcG9ydC1zdGF0dXMuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBLbGVpbmVXZXJ2ZW5BYW52cmFnZW5Db21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9rbGVpbmV3ZXJ2ZW4tYWFudnJhZ2VuL2tsZWluZXdlcnZlbi1hYW52cmFnZW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEtsZWluZVdlcnZlbkluZGllbmVuQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMva2xlaW5ld2VydmVuLWluZGllbmVuL2tsZWluZXdlcnZlbi1pbmRpZW5lbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgS2xlaW5lV2VydmVuU3RhdHVzQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMva2xlaW5ld2VydmVuLXN0YXR1cy9rbGVpbmV3ZXJ2ZW4tc3RhdHVzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBLbGVpbmVXZXJ2ZW5EZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9rbGVpbmV3ZXJ2ZW4tZGV0YWlsL2tsZWluZXdlcnZlbi1kZXRhaWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEtsZWluZVdlcnZlblZlcmtsYXJpbmdDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vL2NvbXBvbmVudHMva2xlaW5ld2VydmVuLXZlcmtsYXJpbmcva2xlaW5ld2VydmVuLXZlcmtsYXJpbmcuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBQdWluTG1ycEFhbnZyYWdlbkNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3B1aW4tbG1ycC1hYW52cmFnZW4vcHVpbi1sbXJwLWFhbnZyYWdlbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUHVpbkxtcnBJbmRpZW5lbkNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3B1aW4tbG1ycC1pbmRpZW5lbi9wdWluLWxtcnAtaW5kaWVuZW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFB1aW5MbXJwU3RhdHVzQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcHVpbi1sbXJwLXN0YXR1cy9wdWluLWxtcnAtc3RhdHVzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQdWluVGVjaG5pc2NoVmVyc2xhZ0RhdGFDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wdWluLWxtcnAtaW5kaWVuZW4vcHVpbi10ZWNobmlzY2gtdmVyc2xhZy1kYXRhL3B1aW4tdGVjaG5pc2NoLXZlcnNsYWctZGF0YS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUHVpblRlY2huaXNjaFZlcnNsYWdEYXRhSXRlbUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3B1aW4tbG1ycC1pbmRpZW5lbi9wdWluLXRlY2huaXNjaC12ZXJzbGFnLWRhdGEtaXRlbS9wdWluLXRlY2huaXNjaC12ZXJzbGFnLWRhdGEtaXRlbS5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IFRhYmxlUGFnZXJDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90YWJsZS1wYWdlci90YWJsZS1wYWdlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgS3dhbGl0ZWl0ZW5MZWdlbmRlQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvS3dhbGl0ZWl0ZW5MZWdlbmRlL2t3YWxpdGVpdGVuLWxlZ2VuZGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEt3YWxpdGVpdGVuTGVnZW5kZTIwMDhDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vL2NvbXBvbmVudHMvS3dhbGl0ZWl0ZW5MZWdlbmRlMjAwOC9rd2FsaXRlaXRlbi1sZWdlbmRlMjAwOC5jb21wb25lbnRcIjtcclxuXHJcbi8vIEdXIFJlbGF0ZWRcclxuaW1wb3J0IHsgZ3dIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX0dXL2d3LWhvbWUvZ3ctaG9tZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZ3dCQlJHcmlkQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX0dXL2d3LWJici1ncmlkL2d3LWJici1ncmlkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnd0JCUlpvZWtVaXRnZWJyZWlkQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX0dXL2d3LWJici16b2VrdWl0Z2VicmVpZC9ndy1iYnItem9la3VpdGdlYnJlaWQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3RG9jdW1lbnRzQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX0dXL2d3LWRvY3VtZW50cy9ndy1kb2N1bWVudHMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3RG9zc2llcmJlaGVlcmRlckVkaXRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3ctZG9zc2llcmJlaGVlcmRlci1lZGl0L2d3LWRvc3NpZXJiZWhlZXJkZXItZWRpdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZ3dHdG1FZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX0dXL2d3LWd0bS1lZGl0L2d3LWd0bS1lZGl0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnd0dUTUdyaWRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3ctZ3RtLWdyaWQvZ3ctZ3RtLWdyaWQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3R1RNWm9la1VpdGdlYnJlaWRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3ctZ3RtLXpvZWt1aXRnZWJyZWlkL2d3LWd0bS16b2VrdWl0Z2VicmVpZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZ3dHVlRHcmlkQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX0dXL2d3LWd2dC1ncmlkL2d3LWd2dC1ncmlkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnd0dWVFpvZWtVaXRnZWJyZWlkQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX0dXL2d3LWd2dC16b2VrdWl0Z2VicmVpZC9ndy1ndnQtem9la3VpdGdlYnJlaWQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3S2xhbnRFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX0dXL2d3LWtsYW50LWVkaXQvZ3cta2xhbnQtZWRpdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZ3dLbGFudEdyaWRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3cta2xhbnQtZ3JpZC9ndy1rbGFudC1ncmlkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnd0tsYW50V2lqekdyaWRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3cta2xhbnR3aWp6LWdyaWQvZ3cta2xhbnR3aWp6LWdyaWQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3S2xhbnRab2VrVWl0Z2VicmVpZENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL19HVy9ndy1rbGFudC16b2VrdWl0Z2VicmVpZC9ndy1rbGFudC16b2VrdWl0Z2VicmVpZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZ3dLV0dyaWRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3cta3ctZ3JpZC9ndy1rdy1ncmlkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnd0tXWm9la1VpdGdlYnJlaWRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3cta3ctem9la3VpdGdlYnJlaWQvZ3cta3ctem9la3VpdGdlYnJlaWQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3VFZHcmlkQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX0dXL2d3LXR2LWdyaWQvZ3ctdHYtZ3JpZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZ3dUVlpvZWtVaXRnZWJyZWlkQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX0dXL2d3LXR2LXpvZWt1aXRnZWJyZWlkL2d3LXR2LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnd0VtYWlsSGlzdG9yaWVrQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX0dXL2d3LWVtYWlsLWhpc3Rvcmllay1ncmlkL2d3LWVtYWlsLWhpc3Rvcmllay1ncmlkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnd1R2QWZzbHVpdFJlZGVuQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX0dXL2d3LXR2LWVkaXQvZ3ctdHYtYWZzbHVpdC1yZWRlbi9ndy10di1hZnNsdWl0LXJlZGVuLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnd1R2RXZhbHVhdGllQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX0dXL2d3LXR2LWVkaXQvZ3ctdHYtZXZhbHVhdGllL2d3LXR2LWV2YWx1YXRpZS5jb21wb25lbnRcIjtcclxuXHJcblxyXG5pbXBvcnQgeyBOZ3hEYXRhdGFibGVNb2R1bGUgfSBmcm9tIFwiQHN3aW1sYW5lL25neC1kYXRhdGFibGVcIjtcclxuaW1wb3J0IHsgVHJlZU1vZHVsZSB9IGZyb20gXCJhbmd1bGFyLXRyZWUtY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRvYXN0ck1vZHVsZSB9IGZyb20gXCJuZ3gtdG9hc3RyXCI7XHJcblxyXG5pbXBvcnQgeyBUb29sdGlwTW9kdWxlLCBCc0RhdGVwaWNrZXJNb2R1bGUsIFBvcG92ZXJNb2R1bGUgfSBmcm9tIFwibmd4LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBkZWZpbmVMb2NhbGUgfSBmcm9tIFwibmd4LWJvb3RzdHJhcC9jaHJvbm9zXCI7XHJcbmltcG9ydCB7IG5sQmVMb2NhbGUgfSBmcm9tIFwibmd4LWJvb3RzdHJhcC9sb2NhbGVcIjtcclxuZGVmaW5lTG9jYWxlKFwiYm9vdHN0cmFwLWxvY2FsZS1ubGJlXCIsIG5sQmVMb2NhbGUpO1xyXG5cclxuaW1wb3J0IHsgRmlsZVVwbG9hZE1vZHVsZSB9IGZyb20gXCJuZzItZmlsZS11cGxvYWRcIjtcclxuXHJcbmltcG9ydCB7IFRyaW1WYWx1ZUFjY2Vzc29yTW9kdWxlIH0gZnJvbSBcIm5nLXRyaW0tdmFsdWUtYWNjZXNzb3JcIjtcclxuXHJcbmltcG9ydCB7IGd3VHZFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4vZ3ctdHYtZWRpdC9ndy10di1lZGl0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnd0VtYWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vZ3ctZW1haWwvZ3ctZW1haWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3R3Z0RWRpdENvbXBvbmVudCB9IGZyb20gXCIuL2d3LWd2dC1lZGl0L2d3LWd2dC1lZGl0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnd0d2dFN0dWRpZUNvbXBvbmVudCB9IGZyb20gXCIuL2d3LWd2dC1lZGl0L2d3LWd2dC1zdHVkaWUvZ3ctZ3Z0LXN0dWRpZS5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IGd3RXhwb3J0Q29tcG9uZW50IH0gZnJvbSBcIi4vZ3ctZXhwb3J0L2d3LWV4cG9ydC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZ3dFeHBvcnRHcmlkQ29tcG9uZW50IH0gZnJvbSBcIi4vZ3ctZXhwb3J0LWdyaWQvZ3ctZXhwb3J0LWdyaWQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3S3dFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4vZ3cta3ctZWRpdC9ndy1rdy1lZGl0LmNvbXBvbmVudFwiO1xyXG5cclxuXHJcbmltcG9ydCB7IEh0dHBNYWlsU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLW1haWwuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBzYWZlSHRtbCB9IGZyb20gXCIuLi9mZXRjaGRhdGEvcGlwZS10ZXN0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBFdmVudExpc3RlbmVyU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9ldmVudC1saXN0ZW5lci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGd3UHVpbkxtcnBFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4vZ3ctcHVpbi1sbXJwLWVkaXQvZ3ctcHVpbi1sbXJwLWVkaXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3TW9kYWxHcmlkQ29tcG9uZW50IH0gZnJvbSBcIi4vZ3ctbW9kYWwtZ3JpZC9ndy1tb2RhbC1ncmlkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnd01vZGFsUHVpbkNvbXBvbmVudCB9IGZyb20gXCIuL2d3LXB1aW4tbG1ycC1lZGl0L2d3LW1vZGFsLXB1aW4vZ3ctbW9kYWwtcHVpbi5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IEh0dHBJbnRlcmNlcHRvclNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC1pbnRlcmNlcHRvci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEh0dHBCQlJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtYmJyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSHR0cERvc3NpZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtZG9zc2llci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEh0dHBGaWxlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLWZpbGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIdHRwR1RNU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLWd0bS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEh0dHBHVlRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtZ3Z0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSHR0cEtsYW50U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLWtsYW50LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSHR0cEtsZWluZVdlcnZlblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC1rbGVpbmV3ZXJ2ZW4uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIdHRwVFZTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtdHYuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIdHRwVFZab25lU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLXR2em9uZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEh0dHBQdWluU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLXB1aW4uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBMb2NhbHN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2xvY2Fsc3RvcmFnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IExvYWRpbmdBbmltYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2xvYWRpbmctYW5pbWF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3dHcmlkUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2d3LWdyaWQucm91dGluZy5tb2R1bGVcIjtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgRmlsZVVwbG9hZE1vZHVsZSxcclxuICAgICAgICBGb3Jtc01vZHVsZSxcclxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgICAgIE5neERhdGF0YWJsZU1vZHVsZSxcclxuICAgICAgICBUcmVlTW9kdWxlLFxyXG4gICAgICAgIFRyaW1WYWx1ZUFjY2Vzc29yTW9kdWxlLFxyXG4gICAgICAgIFRvb2x0aXBNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgICAgIEJzRGF0ZXBpY2tlck1vZHVsZS5mb3JSb290KCksXHJcbiAgICAgICAgUG9wb3Zlck1vZHVsZS5mb3JSb290KCksXHJcblxyXG4gICAgICAgIEd3R3JpZFJvdXRpbmdNb2R1bGVcclxuLy8gVG9hc3RyTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgUm91dGVyTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcblxyXG4gICAgICAgIC8vIEdXIFJlbGF0ZWRcclxuXHJcbiAgICAgICAgZ3dIb21lQ29tcG9uZW50LFxyXG4gICAgICAgIGd3QkJSR3JpZENvbXBvbmVudCxcclxuICAgICAgICBnd0JCUlpvZWtVaXRnZWJyZWlkQ29tcG9uZW50LFxyXG4gICAgICAgIGd3R1RNR3JpZENvbXBvbmVudCxcclxuICAgICAgICBnd0dUTVpvZWtVaXRnZWJyZWlkQ29tcG9uZW50LFxyXG4gICAgICAgIGd3R1ZUR3JpZENvbXBvbmVudCxcclxuICAgICAgICBnd0dWVFpvZWtVaXRnZWJyZWlkQ29tcG9uZW50LFxyXG4gICAgICAgIGd3S2xhbnRHcmlkQ29tcG9uZW50LFxyXG4gICAgICAgIGd3S2xhbnRXaWp6R3JpZENvbXBvbmVudCxcclxuICAgICAgICBnd0tsYW50Wm9la1VpdGdlYnJlaWRDb21wb25lbnQsXHJcbiAgICAgICAgZ3dLV0dyaWRDb21wb25lbnQsXHJcbiAgICAgICAgZ3dLV1pvZWtVaXRnZWJyZWlkQ29tcG9uZW50LFxyXG4gICAgICAgIGd3VFZHcmlkQ29tcG9uZW50LFxyXG4gICAgICAgIGd3VFZab2VrVWl0Z2VicmVpZENvbXBvbmVudCxcclxuXHJcblxyXG4gICAgXSxcclxuXHJcblxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgeyBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6IEh0dHBJbnRlcmNlcHRvclNlcnZpY2UsIG11bHRpOiB0cnVlIH0sXHJcbiAgICAgICAgQXV0aGVudGljYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIEh0dHBCQlJTZXJ2aWNlLFxyXG4gICAgICAgIEh0dHBEb3NzaWVyU2VydmljZSxcclxuICAgICAgICBIdHRwRmlsZVNlcnZpY2UsXHJcbiAgICAgICAgSHR0cEdUTVNlcnZpY2UsXHJcbiAgICAgICAgSHR0cEdWVFNlcnZpY2UsXHJcbiAgICAgICAgSHR0cEtsYW50U2VydmljZSxcclxuICAgICAgICBIdHRwS2xlaW5lV2VydmVuU2VydmljZSxcclxuICAgICAgICBIdHRwVFZTZXJ2aWNlLFxyXG4gICAgICAgIEh0dHBUVlpvbmVTZXJ2aWNlLFxyXG4gICAgICAgIEh0dHBQdWluU2VydmljZSxcclxuICAgICAgICBIdHRwTWFpbFNlcnZpY2UsXHJcbiAgICAgICAgTG9jYWxzdG9yYWdlU2VydmljZSxcclxuICAgICAgICBMb2FkaW5nQW5pbWF0aW9uU2VydmljZSxcclxuICAgICAgICBFdmVudExpc3RlbmVyU2VydmljZVxyXG5cclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHd0dyaWRNb2R1bGUge1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWdyaWQubW9kdWxlLnRzIiwiLy8gQkJSXHJcbmV4cG9ydCBjbGFzcyBTZ3NCQlJab2VrVmVsZGVuIHtcclxuICAgIGNvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICB0dklkOiBudW1iZXIgfCBudWxsO1xyXG4gICAga2xhbnRJZDogbnVtYmVyIHwgbnVsbDtcclxuICAgIGRvc3NpZXJCZWhlZXJkZXJJZDogbnVtYmVyIHwgbnVsbDtcclxuICAgIHN0YXR1c0lkOiBudW1iZXIgfCBudWxsO1xyXG4gICAgYmVzdGVtbWluZ3NhYXJkSWQ6IG51bWJlciB8IG51bGw7XHJcbiAgICBnZWZhY3R1cmVlcmQ6IG51bWJlciB8IG51bGw7XHJcbiAgICBzdHJhYXQ6IHN0cmluZztcclxuICAgIHBvc3Rjb2RlOiBzdHJpbmc7XHJcbiAgICBnZW1lZW50ZTogc3RyaW5nO1xyXG4gICAgbGFtYmVydFg6IG51bWJlciB8IG51bGw7XHJcbiAgICBsYW1iZXJ0WTogbnVtYmVyIHwgbnVsbDtcclxuICAgIGxhbWJlcnRSYW5nZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIHZlcnRyZWtTdHJhYXQ6IHN0cmluZztcclxuICAgIHZlcnRyZWtHZW1lZW50ZTogc3RyaW5nO1xyXG4gICAgZGF0VmFuOiBEYXRlIHwgbnVsbDtcclxuICAgIGRhdFRvdDogRGF0ZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gR1RNXHJcbmV4cG9ydCBjbGFzcyBTZ3NHVE1ab2VrVmVsZGVuIHtcclxuICAgIGd0bUlkOiBudW1iZXIgfCBudWxsO1xyXG4gICAgZGF0VmFuOiBEYXRlIHwgbnVsbDtcclxuICAgIGRhdFRvdDogRGF0ZSB8IG51bGw7XHJcbiAgICBzdHJhYXQ6IHN0cmluZztcclxuICAgIGdlbWVlbnRlOiBzdHJpbmc7XHJcbiAgICB0b3BJZDogbnVtYmVyIHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIEdWVFxyXG5leHBvcnQgY2xhc3MgU2dzR1ZUWm9la1ZlbGRlbiB7XHJcbiAgICBjb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgdHZJZDogbnVtYmVyIHwgbnVsbDtcclxuICAgIGtsYW50SWQ6IG51bWJlciB8IG51bGw7XHJcbiAgICBkb3NzaWVyQmVoZWVyZGVySWQ6IG51bWJlciB8IG51bGw7XHJcbiAgICBzdGF0dXNJZDogbnVtYmVyIHwgbnVsbDtcclxuICAgIGJlc3RlbW1pbmdzYWFyZElkOiBudW1iZXIgfCBudWxsO1xyXG4gICAgZ2VmYWN0dXJlZXJkOiBudW1iZXIgfCBudWxsO1xyXG4gICAgc3RyYWF0OiBzdHJpbmc7XHJcbiAgICBwb3N0Y29kZTogc3RyaW5nO1xyXG4gICAgZ2VtZWVudGU6IHN0cmluZztcclxuICAgIGxhbWJlcnRYOiBudW1iZXIgfCBudWxsO1xyXG4gICAgbGFtYmVydFk6IG51bWJlciB8IG51bGw7XHJcbiAgICBsYW1iZXJ0UmFuZ2U6IG51bWJlciB8IG51bGw7XHJcbiAgICB2ZXJ0cmVrU3RyYWF0OiBzdHJpbmc7XHJcbiAgICB2ZXJ0cmVrR2VtZWVudGU6IHN0cmluZztcclxuICAgIGRhdFZhbjogRGF0ZSB8IG51bGw7XHJcbiAgICBkYXRUb3Q6IERhdGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLyBLbGFudFxyXG5leHBvcnQgY2xhc3MgU2dzS2xhbnRab2VrVmVsZGVuIHtcclxuICAgIGtsYW50SWQ6IG51bWJlciB8IG51bGw7XHJcbiAgICBvcmdhbmlzYXRpZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIHZvb3JuYWFtOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgYWNodGVybmFhbTogc3RyaW5nIHwgbnVsbDtcclxuICAgIHN0cmFhdDogc3RyaW5nO1xyXG4gICAgZ2VtZWVudGU6IHN0cmluZztcclxufVxyXG5cclxuXHJcbi8vIEtXXHJcbmV4cG9ydCBjbGFzcyBTZ3NLV1pvZWtWZWxkZW4ge1xyXG4gICAga2xhbnRJZDogbnVtYmVyIHwgbnVsbDtcclxuICAgIHJlZmVyZW50aWU6IHN0cmluZztcclxuICAgIHZlcmtsYXJpbmdvbnR2YW5nZW46IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgZG9zc2llckJlaGVlcmRlcklkOiBudW1iZXIgfCBudWxsO1xyXG59XHJcblxyXG4vLyBUVlxyXG5leHBvcnQgY2xhc3MgU2dzVFZab2VrVmVsZGVuIHtcclxuICAgIHR2SWQ6IG51bWJlciB8IG51bGw7XHJcbiAgICBrbGFudElkOiBudW1iZXIgfCBudWxsO1xyXG4gICAgZmFjdHV1clJlZjogc3RyaW5nO1xyXG4gICAgYWRyZXM6IHN0cmluZztcclxuICAgIGdlbWVlbnRlOiBzdHJpbmc7XHJcbiAgICB0aXRlbDogc3RyaW5nO1xyXG4gICAgYmVzY2hyaWp2aW5nOiBzdHJpbmc7XHJcbiAgICByZWZlcmVudGllOiBzdHJpbmc7XHJcbiAgICBvdmVybmFtZTogYm9vbGVhbiB8IG51bGw7XHJcbiAgICBzYW1lbmdldm9lZ2Q6IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgZWJzZDogc3RyaW5nO1xyXG4gICAgaW5kaWVuaW5nc3dpanplSWQ6IG51bWJlciB8IG51bGw7XHJcbiAgICBkYXR1bTogRGF0ZSB8IG51bGw7XHJcbiAgICBzdGF0dXNJZDogbnVtYmVyIHwgbnVsbDtcclxuICAgIGdlZmFjdHVyZWVyZDogbnVtYmVyIHwgbnVsbDtcclxuICAgIGRvc3NpZXJCZWhlZXJkZXJJZDogbnVtYmVyIHwgbnVsbDtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NjcmlwdHMvc2dzQ2xhc3Nlcy5zY3JpcHRzLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgR2VuZXJhbFNjcmlwdHMgfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9nZW5lcmFsLnNjcmlwdHNcIjtcclxuaW1wb3J0IHsgVG9hc3RyU2VydmljZSB9IGZyb20gXCJuZ3gtdG9hc3RyXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRmlsbFR5cGVzIH0gZnJvbSBcIi4uLy4uL2JvZGVtYmVoZWVycmFwcG9ydC1ncmlkL2JvZGVtYmVoZWVycmFwcG9ydC1ncmlkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UsIFVzZXJSb2xlcyB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImd3LWhvbWVcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2d3LWhvbWUuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vZ3ctaG9tZS5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgZ3dIb21lQ29tcG9uZW50IGV4dGVuZHMgR2VuZXJhbFNjcmlwdHMgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgYnRuczogYm9vbGVhbltdID0gW2ZhbHNlLCB0cnVlLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2VdO1xyXG4gICAgYWxsQnV0dG9uc1Nob3duOiBib29sZWFuID0gdHJ1ZTsgXHJcblxyXG4gICAgQkJSRmlsbFR5cGU6IEZpbGxUeXBlcyA9IEZpbGxUeXBlcy5Gb3JCYnJPdmVyemljaHQ7XHJcbiAgICBVUExGaWxsVHlwZTogRmlsbFR5cGVzID0gRmlsbFR5cGVzLkZvck9ubGluZUZpbGxlZE9yVXBsb2FkO1xyXG4gICAgVVJvbGVzOiBVc2VyUm9sZXM7XHJcblxyXG4gICAgaXNHV1VzZXI6IGJvb2xlYW4gfCBudWxsID0gbnVsbDtcclxuICAgIHVzZXJSb2xlOiBVc2VyUm9sZXMgPSBVc2VyUm9sZXMuS2xhbnQ7XHJcbiAgICBhbGxvd0RlbGV0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgUGdJbmRleDogbnVtYmVyID0gLTE7XHJcblxyXG4gICAgdXNlVG9vbGJhciA9IGZhbHNlO1xyXG4gICAgQElucHV0KCdoYXNUb29sYmFyJylcclxuICAgIGdldCBoYXNUb29sYmFyKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVzZVRvb2xiYXI7XHJcbiAgICB9XHJcbiAgICBzZXQgaGFzVG9vbGJhcih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMudXNlVG9vbGJhciA9IFwiXCIgKyB2YWx1ZSAhPT0gXCJmYWxzZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX3RvYXN0cjogVG9hc3RyU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByZWFkb25seSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJlYWRvbmx5IGF1dGg6IEF1dGhlbnRpY2F0aW9uU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKF90b2FzdHIpO1xyXG5cclxuICAgICAgICAvLyBuZWVkZWQgaW4gb3JkZXIgdG8gcmV0cmlldmUgdGhlIGNoYW5nZWQgdXJsIHF1ZXJ5cGFyYW1zIG9uIGEgcG9zdGJhY2tcclxuICAgICAgICB0aGlzLnJvdXRlci5yb3V0ZVJldXNlU3RyYXRlZ3kuc2hvdWxkUmV1c2VSb3V0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc25hcHNob3QgPSB0aGlzLl9yb3V0ZS5zbmFwc2hvdDtcclxuICAgICAgICBpZiAoc25hcHNob3QucXVlcnlQYXJhbXNbXCJQZ1wiXSkgeyB0aGlzLlBnSW5kZXggPSBzbmFwc2hvdC5xdWVyeVBhcmFtc1tcIlBnXCJdIH07XHJcblxyXG4gICAgICAgIHRoaXMuYXV0aC5nZXRSb2xlKCkudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKHJvbGU6IFVzZXJSb2xlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0dXVXNlciA9IChyb2xlICE9PSBVc2VyUm9sZXMuS2xhbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyUm9sZSA9IHJvbGU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNHV1VzZXIgJiYgdGhpcy51c2VyUm9sZSA9PSBVc2VyUm9sZXMuR3JvbmR3aWp6ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbG93RGVsZXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7ICAgXHJcblxyXG4gICAgICAgIGlmIChzbmFwc2hvdC5xdWVyeVBhcmFtc1tcIlRcIl0pIHtcclxuICAgICAgICAgICAgc3dpdGNoIChzbmFwc2hvdC5xdWVyeVBhcmFtc1tcIlRcIl0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CQlJGaWxsVHlwZSA9IEZpbGxUeXBlcy5Gb3JBYW52cmFnZW5CYnI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLlBnSW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsQnV0dG9uc1Nob3duID0gdGhpcy5kZXRlY3RBbGxCdXR0b25zU2hvd24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zaW5nbGVCdXR0b24odGhpcy5QZ0luZGV4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlQnV0dG9uKGJ0bkluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoYnRuSW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5hbGxCdXR0b25zU2hvd24pIHtcclxuICAgICAgICAgICAgICAgIHZhciBpLCBuID0gdGhpcy5idG5zLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bnNbaV0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5idG5zW2J0bkluZGV4XSA9ICF0aGlzLmJ0bnNbYnRuSW5kZXhdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFsbEJ1dHRvbnNTaG93biA9IHRoaXMuZGV0ZWN0QWxsQnV0dG9uc1Nob3duKCk7XHJcbiAgICB9XHJcbiAgICBzaW5nbGVCdXR0b24oYnRuSW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHZhciBpLCBuID0gdGhpcy5idG5zLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuc1tpXSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJ0bnNbYnRuSW5kZXhdID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFsbEJ1dHRvbnNTaG93biA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0QnV0dG9uQ2xhc3MoYmxuVmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICByZXR1cm4gYmxuVmFsdWUgPyAnYnRuLW9uJyA6ICdidG4tb2ZmJztcclxuICAgIH1cclxuICAgIGdldFNpbmdsZUNsYXNzKGJsblZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgcmV0dXJuIGJsblZhbHVlID8gJ2J0bi1zaW5nbGUtb24nIDogJ2J0bi1zaW5nbGUtb2ZmJztcclxuICAgIH1cclxuICAgIGRldGVjdEFsbEJ1dHRvbnNTaG93bigpIHtcclxuICAgICAgICB2YXIgaSwgbiA9IHRoaXMuYnRucy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5idG5zW2ldID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWhvbWUvZ3ctaG9tZS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgIDxuYXYgKm5nSWY9XFxcIlBnSW5kZXggPT09IC0xICYmIHVzZVRvb2xiYXJcXFwiIGNsYXNzPVxcXCJuYXZiYXIgbmF2YmFyLWRlZmF1bHQgbmF2YmFyLWZpeGVkLWJvdHRvbVxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6I0NDQ0NDQztcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIiBzdHlsZT1cXFwibWFyZ2luOiAxMHB4IDBweCAyN3B4IDBweDtcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwidG9nZ2xlQnV0dG9uKDApXFxcIiBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6IC01cHg7XFxcIiBbbmdDbGFzc109XFxcImdldEJ1dHRvbkNsYXNzKGJ0bnNbMF0pXFxcIj5PbnRncmF2aW5nZW48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJzaW5nbGVCdXR0b24oMClcXFwiIFtuZ0NsYXNzXT1cXFwiZ2V0U2luZ2xlQ2xhc3MoYnRuc1swXSlcXFwiPiZuYnNwOzwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcInRvZ2dsZUJ1dHRvbigxKVxcXCIgW25nQ2xhc3NdPVxcXCJnZXRCdXR0b25DbGFzcyhidG5zWzFdKVxcXCI+VFY8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJzaW5nbGVCdXR0b24oMSlcXFwiIFtuZ0NsYXNzXT1cXFwiZ2V0U2luZ2xlQ2xhc3MoYnRuc1sxXSlcXFwiPiZuYnNwOzwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcInRvZ2dsZUJ1dHRvbigyKVxcXCIgW25nQ2xhc3NdPVxcXCJnZXRCdXR0b25DbGFzcyhidG5zWzJdKVxcXCI+R1RNPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwic2luZ2xlQnV0dG9uKDIpXFxcIiBbbmdDbGFzc109XFxcImdldFNpbmdsZUNsYXNzKGJ0bnNbMl0pXFxcIj4mbmJzcDs8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVCdXR0b24oMylcXFwiIFtuZ0NsYXNzXT1cXFwiZ2V0QnV0dG9uQ2xhc3MoYnRuc1szXSlcXFwiPkdWVDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcInNpbmdsZUJ1dHRvbigzKVxcXCIgW25nQ2xhc3NdPVxcXCJnZXRTaW5nbGVDbGFzcyhidG5zWzNdKVxcXCI+Jm5ic3A7PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwidG9nZ2xlQnV0dG9uKDQpXFxcIiBbbmdDbGFzc109XFxcImdldEJ1dHRvbkNsYXNzKGJ0bnNbNF0pXFxcIj5PbmxpbmUgSW5nZXZ1bGQ8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJzaW5nbGVCdXR0b24oNClcXFwiIFtuZ0NsYXNzXT1cXFwiZ2V0U2luZ2xlQ2xhc3MoYnRuc1s0XSlcXFwiPiZuYnNwOzwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcInRvZ2dsZUJ1dHRvbig1KVxcXCIgW25nQ2xhc3NdPVxcXCJnZXRCdXR0b25DbGFzcyhidG5zWzVdKVxcXCI+R2VnZXZlbnMgQWFucGFzc2VuPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwic2luZ2xlQnV0dG9uKDUpXFxcIiBbbmdDbGFzc109XFxcImdldFNpbmdsZUNsYXNzKGJ0bnNbNV0pXFxcIj4mbmJzcDs8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVCdXR0b24oNilcXFwiIFtuZ0NsYXNzXT1cXFwiZ2V0QnV0dG9uQ2xhc3MoYnRuc1s2XSlcXFwiPktsYW50ZW48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJzaW5nbGVCdXR0b24oNilcXFwiIFtuZ0NsYXNzXT1cXFwiZ2V0U2luZ2xlQ2xhc3MoYnRuc1s2XSlcXFwiPiZuYnNwOzwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcInRvZ2dsZUJ1dHRvbig3KVxcXCIgW25nQ2xhc3NdPVxcXCJnZXRCdXR0b25DbGFzcyhidG5zWzddKVxcXCI+QkJSPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwic2luZ2xlQnV0dG9uKDcpXFxcIiBbbmdDbGFzc109XFxcImdldFNpbmdsZUNsYXNzKGJ0bnNbN10pXFxcIj4mbmJzcDs8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVCdXR0b24oOClcXFwiIFtuZ0NsYXNzXT1cXFwiZ2V0QnV0dG9uQ2xhc3MoYnRuc1s4XSlcXFwiPlB1aW48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJzaW5nbGVCdXR0b24oOClcXFwiIFtuZ0NsYXNzXT1cXFwiZ2V0U2luZ2xlQ2xhc3MoYnRuc1s4XSlcXFwiPiZuYnNwOzwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcInRvZ2dsZUJ1dHRvbigtMSlcXFwiIFtuZ0NsYXNzXT1cXFwiZ2V0QnV0dG9uQ2xhc3MoYWxsQnV0dG9uc1Nob3duKVxcXCI+VG9vbiBBbGxlczwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L25hdj5cXHJcXG4gICAgPGRpdj5cXHJcXG4gICAgICAgIDxkaXYgW2hpZGRlbl09XFxcIiFidG5zWzBdXFxcIj5cXHJcXG4gICAgICAgICAgICA8aDQ+S2xlaW5lIFdlcmtlbjwvaDQ+XFxyXFxuICAgICAgICAgICAgPGd3LWt3LWdyaWQ+PC9ndy1rdy1ncmlkPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IFtoaWRkZW5dPVxcXCIhYnRuc1sxXVxcXCI+XFxyXFxuICAgICAgICAgICAgPGg0PlRlY2huaXNjaGUgVmVyc2xhZ2VuPC9oND5cXHJcXG4gICAgICAgICAgICA8Z3ctdHYtZ3JpZCBOaWV1d2VBYW52cmFnZW49XFxcInRydWVcXFwiIEV4dGVuZGVkU2VhcmNoPVxcXCJ0cnVlXFxcIiBbQWxsb3dEZWxldGVdPVxcXCJhbGxvd0RlbGV0ZVxcXCI+PC9ndy10di1ncmlkPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IFtoaWRkZW5dPVxcXCIhYnRuc1syXVxcXCI+XFxyXFxuICAgICAgICAgICAgPGg0Pkdyb25kIFRyYW5zcG9ydCBNZWxkaW5nZW48L2g0PlxcclxcbiAgICAgICAgICAgIDxndy1ndG0tZ3JpZCBOaWV1d2VBYW52cmFnZW49XFxcImZhbHNlXFxcIiBFeHRlbmRlZFNlYXJjaD1cXFwidHJ1ZVxcXCIgW0FsbG93RGVsZXRlXT1cXFwiYWxsb3dEZWxldGVcXFwiPjwvZ3ctZ3RtLWdyaWQ+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgW2hpZGRlbl09XFxcIiFidG5zWzNdXFxcIj5cXHJcXG4gICAgICAgICAgICA8aDQ+R3JvbmQgVmVyemV0IFRvZWxhdGluZ2VuPC9oND5cXHJcXG4gICAgICAgICAgICA8Z3ctZ3Z0LWdyaWQgTmlldXdlQWFudnJhZ2VuPVxcXCJmYWxzZVxcXCIgRXh0ZW5kZWRTZWFyY2g9XFxcInRydWVcXFwiIFtBbGxvd0RlbGV0ZV09XFxcImFsbG93RGVsZXRlXFxcIj48L2d3LWd2dC1ncmlkPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IFtoaWRkZW5dPVxcXCIhYnRuc1s0XVxcXCI+XFxyXFxuICAgICAgICAgICAgPGg0PlVwbG9hZCBvZiBPbmxpbmUgSW5nZXZ1bGQgLSBWQS9PVjwvaDQ+XFxyXFxuICAgICAgICAgICAgPGJvZGVtYmVoZWVycmFwcG9ydC1ncmlkIGlzR1dTdGFydD1cXFwidHJ1ZVxcXCIgVHlwZT1cXFwiQkJSXFxcIiBbRmlsbFR5cGVdPVxcXCJVUExGaWxsVHlwZVxcXCIgW3RpdGxlXT1cXFwiJ0JvZGVtYmVoZWVyIHJhcHBvcnRlbjonXFxcIj48L2JvZGVtYmVoZWVycmFwcG9ydC1ncmlkPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IFtoaWRkZW5dPVxcXCIhYnRuc1s1XVxcXCI+XFxyXFxuICAgICAgICAgICAgPGg0PlZyYWFnIHRvdCBnZWdldmVuc2FhbnBhc3NpbmdlbjwvaDQ+XFxyXFxuICAgICAgICAgICAgPGd3LWtsYW50d2lqei1ncmlkPjwvZ3cta2xhbnR3aWp6LWdyaWQ+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgW2hpZGRlbl09XFxcIiFidG5zWzZdXFxcIj5cXHJcXG4gICAgICAgICAgICA8aDQ+TmlldXdlIEtsYW50ZW48L2g0PlxcclxcbiAgICAgICAgICAgIDxndy1rbGFudC1ncmlkIGlzR1dTdGFydD1cXFwidHJ1ZVxcXCI+PC9ndy1rbGFudC1ncmlkPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IFtoaWRkZW5dPVxcXCIhYnRuc1s3XVxcXCI+XFxyXFxuICAgICAgICAgICAgPGg0PkJvZGVtIEJlaGVlciBSYXBwb3J0ZW48L2g0PlxcclxcbiAgICAgICAgICAgIDxndy1iYnItZ3JpZCBOaWV1d2VBYW52cmFnZW49XFxcImZhbHNlXFxcIiBFeHRlbmRlZFNlYXJjaD1cXFwidHJ1ZVxcXCIgW0FsbG93RGVsZXRlXT1cXFwiYWxsb3dEZWxldGVcXFwiPjwvZ3ctYmJyLWdyaWQ+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgW2hpZGRlbl09XFxcIiFidG5zWzhdXFxcIj5cXHJcXG4gICAgICAgICAgICA8aDQ+UHVpbjwvaDQ+XFxyXFxuICAgICAgICAgICAgVG8gQmUgRGV2ZWxvcGVkXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWhvbWUvZ3ctaG9tZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNjkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ndy1ob21lLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ob21lL2d3LWhvbWUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNjkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaDQge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxyXFxufVxcclxcbi5idG4tb24ge1xcclxcbiAgICBjb2xvcjogI0IwRDAwMSAhaW1wb3J0YW50O1xcclxcbiAgICBib3JkZXItY29sb3I6ICNkZGQgIWltcG9ydGFudDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxNzM0MiAhaW1wb3J0YW50O1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxyXFxufVxcclxcbi5idG4tb2ZmIHtcXHJcXG4gICAgY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjZGRkICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDAgIWltcG9ydGFudDtcXHJcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcbn1cXHJcXG4uYnRuLXNpbmdsZS1vbiB7XFxyXFxuICAgIGNvbG9yOiAjQjBEMDAxICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI2RkZCAhaW1wb3J0YW50O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE3MzQyICFpbXBvcnRhbnQ7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XFxyXFxufVxcclxcbi5idG4tc2luZ2xlLW9mZiB7XFxyXFxuICAgIGNvbG9yOiAjMDE3MzQyICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI2RkZCAhaW1wb3J0YW50O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDAwICFpbXBvcnRhbnQ7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XFxyXFxufVxcclxcblxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWhvbWUvZ3ctaG9tZS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2OTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBHZW5lcmFsU2NyaXB0cyB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL2dlbmVyYWwuc2NyaXB0c1wiO1xyXG5pbXBvcnQgeyBUb2FzdHJTZXJ2aWNlIH0gZnJvbSBcIm5neC10b2FzdHJcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBIdHRwQkJSU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9odHRwLWJici5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IElCQlJTdGF0dXMsIElCQlJTdGF0dXNHcmlkUmVjb3JkIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvaW50ZXJmYWNlcy5zY3JpcHRzXCI7XHJcbmltcG9ydCB7IElTZ3NCQlJJdGVtIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvc2dzSW50ZXJmYWNlcy5zY3JpcHRzXCI7XHJcbmltcG9ydCB7IGFwcExhYmVscyB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL2FwcExhYmVsc1wiO1xyXG5pbXBvcnQgeyBEYXRhdGFibGVDb21wb25lbnQgfSBmcm9tIFwiQHN3aW1sYW5lL25neC1kYXRhdGFibGVcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlLCBVc2VyUm9sZXMgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgU2dzQkJSWm9la1ZlbGRlbiB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL3Nnc0NsYXNzZXMuc2NyaXB0c1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJndy1iYnItZ3JpZFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZ3ctYmJyLWdyaWQuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vZ3ctYmJyLWdyaWQuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIGd3QkJSR3JpZENvbXBvbmVudCBleHRlbmRzIEdlbmVyYWxTY3JpcHRzIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGFwcExhYmVscyA9IGFwcExhYmVscztcclxuXHJcblxyXG4gICAgU3RhdHVzRHJvcGRvd25MaXN0OiBJQkJSU3RhdHVzW10gPSBudWxsO1xyXG4gICAgU3RhdHVzTGlzdDogSVNnc0JCUkl0ZW1bXSA9IG51bGw7XHJcbiAgICByb3dzOiBJU2dzQkJSSXRlbVtdID0gbnVsbDtcclxuICAgIHRlbXA6IGFueVtdID0gW107XHJcbiAgICBAVmlld0NoaWxkKERhdGF0YWJsZUNvbXBvbmVudCkgdGFibGU6IERhdGF0YWJsZUNvbXBvbmVudDtcclxuXHJcbiAgICBASW5wdXQoKSB0aXRsZSA9IFwiXCI7XHJcbiAgICBTdGF0dXNJZDogbnVtYmVyID0gNDtcclxuICAgIGlzRXh0ZW5kZWRTZWFyY2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBmb3JOaWV1d2VBYW52cmFnZW4gPSB0cnVlO1xyXG4gICAgQElucHV0KCdOaWV1d2VBYW52cmFnZW4nKVxyXG4gICAgZ2V0IE5pZXV3ZUFhbnZyYWdlbigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JOaWV1d2VBYW52cmFnZW47XHJcbiAgICB9XHJcbiAgICBzZXQgTmlldXdlQWFudnJhZ2VuKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5mb3JOaWV1d2VBYW52cmFnZW4gPSBcIlwiICsgdmFsdWUgIT09IFwiZmFsc2VcIjtcclxuICAgIH1cclxuXHJcbiAgICB1c2VTZWFyY2ggPSB0cnVlO1xyXG4gICAgQElucHV0KCdFeHRlbmRlZFNlYXJjaCcpXHJcbiAgICBnZXQgRXh0ZW5kZWRTZWFyY2goKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlU2VhcmNoO1xyXG4gICAgfVxyXG4gICAgc2V0IEV4dGVuZGVkU2VhcmNoKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy51c2VTZWFyY2ggPSBcIlwiICsgdmFsdWUgIT09IFwiZmFsc2VcIjtcclxuICAgIH1cclxuXHJcbiAgICBjYW5EZWxldGUgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgnQWxsb3dEZWxldGUnKVxyXG4gICAgZ2V0IEFsbG93RGVsZXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbkRlbGV0ZTtcclxuICAgIH1cclxuICAgIHNldCBBbGxvd0RlbGV0ZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuY2FuRGVsZXRlID0gXCJcIiArIHZhbHVlICE9PSBcImZhbHNlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgU3RzRm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX3RvYXN0cjogVG9hc3RyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGZiOiBGb3JtQnVpbGRlcixcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGh0dHBCQlI6IEh0dHBCQlJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBhdXRoOiBBdXRoZW50aWNhdGlvblNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcihfdG9hc3RyKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5TdHNGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICAgICAgIHN0czogWy0xXSxcclxuICAgICAgICAgICAgYmJyTnVtbWVyOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIG5hYW06IFtcIlwiXSxcclxuICAgICAgICAgICAgY29kZTogW1wiXCJdLFxyXG4gICAgICAgICAgICBnZW06IFtcIlwiXSxcclxuICAgICAgICAgICAgYWFudnJhYWdEYXR1bTogW1wiXCJdLFxyXG4gICAgICAgICAgICBzdGF0dXNEYXR1bTogW1wiXCJdLFxyXG4gICAgICAgICAgICBpbmRpZW5pbmdzd2lqemU6IFtcIlwiXSxcclxuICAgICAgICAgICAgZ2VmYWN0dXJlZXJkOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIGJiclN0czogW1wiXCJdLFxyXG4gICAgICAgICAgICBob2V2OiBbXCJcIl0sXHJcbiAgICAgICAgICAgIHN0YXJ0RGF0dW06IFtcIlwiXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmh0dHBCQlIuU3RhdHVzRGVmaW5pdGlvbkxpc3QoXCJCQlJcIiwgdGhpcy5OaWV1d2VBYW52cmFnZW4pLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKChsc3Q6IElCQlJTdGF0dXNbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxzdCAhPSBudWxsICYmIGxzdCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlN0YXR1c0Ryb3Bkb3duTGlzdCA9IFsuLi5sc3RdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5TdHNGb3JtLnBhdGNoVmFsdWUoeyBzdHM6ICh0aGlzLk5pZXV3ZUFhbnZyYWdlbiA/ICcwJyA6ICc0JykgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0NoYW5nZWQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdHVzQ2hhbmdlZCgpIHtcclxuICAgICAgICB0aGlzLlN0YXR1c0lkID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLnN0cy52YWx1ZTtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuU3RzRm9ybS5jb250cm9scy5zdHMudmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIi0xXCI6IC8vIFNlbGVjdGVlclxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXAgPSBbXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiMFwiOiAvLyBOaWV1d2UgQWFudnJhZ2VuIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5OaWV1d2VBYW52cmFnZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU3RhdHVzTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IC8vIFN0YXR1c1xyXG4gICAgICAgICAgICAgICAgdGhpcy5OaWV1d2VBYW52cmFnZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFN0YXR1c0xpc3QoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2FkU3RhdHVzTGlzdCgpIHtcclxuICAgICAgICB0aGlzLmh0dHBCQlIuc2dzU3RhdHVzTGlzdCh0aGlzLlN0YXR1c0lkLCBcIlRcIikudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKGxzdDogSVNnc0JCUkl0ZW1bXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gbHN0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wID0gWy4uLmxzdF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyRm9ybUZpZWxkcygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkV4dGVuZGVkU2VhcmNoKHpvZWtWZWxkZW46IFNnc0JCUlpvZWtWZWxkZW4pIHtcclxuICAgICAgICB0aGlzLmh0dHBCQlIuZ3dab2VrTGlzdCh6b2VrVmVsZGVuKS50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbigobHN0OiBJU2dzQkJSSXRlbVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSBsc3Q7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXAgPSBbLi4ubHN0XTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJGb3JtRmllbGRzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyRm9ybUZpZWxkcygpIHtcclxuICAgICAgICAvLyBDbGVhciBhbGwgRm9ybSBWYWx1ZXMgZXhjZXB0IHN0c1xyXG4gICAgICAgIHRoaXMuU3RzRm9ybS5wYXRjaFZhbHVlKHtcclxuICAgICAgICAgICAgYmJyTnVtbWVyOiBcIlwiLFxyXG4gICAgICAgICAgICBuYWFtOiBcIlwiLFxyXG4gICAgICAgICAgICBjb2RlOiBcIlwiLFxyXG4gICAgICAgICAgICBnZW06IFwiXCIsXHJcbiAgICAgICAgICAgIGFhbnZyYWFnRGF0dW06IFwiXCIsXHJcbiAgICAgICAgICAgIHN0YXR1c0RhdHVtOiBcIlwiLFxyXG4gICAgICAgICAgICBpbmRpZW5pbmdzd2lqemU6IFwiXCIsXHJcbiAgICAgICAgICAgIGdlZmFjdHVyZWVyZDogXCJcIixcclxuICAgICAgICAgICAgYmJyU3RzOiBcIlwiLFxyXG4gICAgICAgICAgICBob2V2OiBcIlwiLFxyXG4gICAgICAgICAgICBzdGFydERhdHVtOiBcIlwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGJick51bW1lciA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5iYnJOdW1tZXIudmFsdWU7XHJcbiAgICAgICAgY29uc3QgbmFhbSA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5uYWFtLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuY29kZS52YWx1ZTtcclxuICAgICAgICBjb25zdCBnZW0gPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuZ2VtLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGFhbnZyYWFnRGF0dW0gPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuYWFudnJhYWdEYXR1bS52YWx1ZTtcclxuICAgICAgICBjb25zdCBzdGF0dXNEYXR1bSA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5zdGF0dXNEYXR1bS52YWx1ZTtcclxuICAgICAgICBjb25zdCBpbmRpZW5pbmdzd2lqemUgPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuaW5kaWVuaW5nc3dpanplLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGdlZmFjdHVyZWVyZCA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5nZWZhY3R1cmVlcmQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgYmJyU3RzID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLmJiclN0cy52YWx1ZTtcclxuICAgICAgICBjb25zdCBob2V2ID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLmhvZXYudmFsdWU7XHJcbiAgICAgICAgY29uc3Qgc3RhcnREYXR1bSA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5zdGFydERhdHVtLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRwID0gbmV3IERhdGVQaXBlKFwiZW4tVVNcIik7XHJcblxyXG4gICAgICAgIC8vIGZpbHRlciBvdXIgZGF0YVxyXG4gICAgICAgIGNvbnN0IHRlbXAgPSB0aGlzLnRlbXAuZmlsdGVyKChyb3c6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgYWFudnJhYWdEYXR1bUFzU3RyaW5nOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKGFhbnZyYWFnRGF0dW0gPiBcIlwiKSB7IGFhbnZyYWFnRGF0dW1Bc1N0cmluZyA9IGRwLnRyYW5zZm9ybShyb3cuYWFudnJhYWdEYXR1bSwgXCJkZC9NTS95eXl5XCIpOyB9XHJcbiAgICAgICAgICAgIHZhciBzdGF0dXNEYXR1bUFzU3RyaW5nOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHN0YXR1c0RhdHVtID4gXCJcIikgeyBzdGF0dXNEYXR1bUFzU3RyaW5nID0gZHAudHJhbnNmb3JtKHJvdy5zdGF0dXNEYXR1bSwgXCJkZC9NTS95eXl5XCIpOyB9XHJcbiAgICAgICAgICAgIHZhciBzdGFydERhdHVtQXNTdHJpbmc6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAoc3RhcnREYXR1bSA+IFwiXCIpIHsgc3RhcnREYXR1bUFzU3RyaW5nID0gZHAudHJhbnNmb3JtKHJvdy5zdGFydERhdHVtLCBcImRkL01NL3l5eXlcIik7IH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoIWJick51bW1lciB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQocm93LmJick51bW1lcikgJiYgcm93LmJick51bW1lci50b1N0cmluZygpLmluZGV4T2YoYmJyTnVtbWVyKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFuYWFtIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChyb3cubmFhbSkgJiYgcm93Lm5hYW0udG9Mb3dlckNhc2UoKS5pbmRleE9mKG5hYW0pICE9PSAtMSkpXHJcbiAgICAgICAgICAgICAgICAmJiAoIWNvZGUgfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHJvdy5iZXJvZXBzb3JnYW5pc2F0aWVjb2RlKSAmJiByb3cuYmVyb2Vwc29yZ2FuaXNhdGllY29kZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoY29kZSkgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghZ2VtIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChyb3cucGxhYXRzKSAmJiByb3cucGxhYXRzLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihnZW0pICE9PSAtMSkpXHJcbiAgICAgICAgICAgICAgICAmJiAoIWFhbnZyYWFnRGF0dW0gfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKGFhbnZyYWFnRGF0dW1Bc1N0cmluZykgJiYgYWFudnJhYWdEYXR1bUFzU3RyaW5nLmluZGV4T2YoYWFudnJhYWdEYXR1bSkgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghc3RhdHVzRGF0dW0gfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHN0YXR1c0RhdHVtQXNTdHJpbmcpICYmIHN0YXR1c0RhdHVtQXNTdHJpbmcuaW5kZXhPZihzdGF0dXNEYXR1bSkgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghaW5kaWVuaW5nc3dpanplIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChyb3cuaW5kaWVuaW5nc3dpanplKSAmJiByb3cuaW5kaWVuaW5nc3dpanplLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihpbmRpZW5pbmdzd2lqemUpICE9PSAtMSkpXHJcbiAgICAgICAgICAgICAgICAmJiAoIWdlZmFjdHVyZWVyZCB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQocm93LmdlZmFjdHVyZWVyZCkgJiYgcm93LmdlZmFjdHVyZWVyZC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZ2VmYWN0dXJlZXJkKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFiYnJTdHMgfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHJvdy5zdGF0dXMpICYmIHJvdy5zdGF0dXMudG9Mb3dlckNhc2UoKS5pbmRleE9mKGJiclN0cykgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghaG9ldiB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQocm93LmhvZXZlZWxoZWlkKSAmJiByb3cuaG9ldmVlbGhlaWQudG9TdHJpbmcoKS5pbmRleE9mKGhvZXYpICE9PSAtMSkpXHJcbiAgICAgICAgICAgICAgICAmJiAoIXN0YXJ0RGF0dW0gfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHN0YXJ0RGF0dW1Bc1N0cmluZykgJiYgc3RhcnREYXR1bUFzU3RyaW5nLmluZGV4T2Yoc3RhcnREYXR1bSkgIT09IC0xKSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIHRoZSByb3dzXHJcbiAgICAgICAgdGhpcy5yb3dzID0gdGVtcDtcclxuICAgICAgICAvLyBXaGVuZXZlciB0aGUgZmlsdGVyIGNoYW5nZXMsIGFsd2F5cyBnbyBiYWNrIHRvIHRoZSBmaXJzdCBwYWdlXHJcbiAgICAgICAgdGhpcy50YWJsZS5vZmZzZXQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQWN0aXZhdGUoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGlmIChldmVudC50eXBlID09PSBcImRibGNsaWNrXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5saW5rVG9CQlIoZXZlbnQucm93W1wiYmJyTnVtbWVyXCJdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Um93Q2xhc3Mocm93OiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gXCJpYnRuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgbGlua1RvQkJSKGJicklkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZ3cvZ3Z0LWVkaXRcIiwgYmJySWRdKTsgXHJcbiAgICAgICAgLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvYm9kZW1iZWhlZXJyYXBwb3J0LWRldGFpbFwiXSwgeyBxdWVyeVBhcmFtczogeyBiYnJJZDogYmJySWQsIGJicjogXCJGaW5hbFwiIH0gfSk7ICAvLyA9PiBHV0JlaGVlci9CQlJFZGl0LmFzcHg/Qm9kZW1iZWhlZXJSYXBwb3J0SUQ9ezB9IChvdWRlIEdXKVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUJCUihiYnJJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy9cclxuICAgIH1cclxuXHJcbiAgICBUb2dnbGVFeHRlbmRlZFNlYXJjaCgpIHtcclxuICAgICAgICB0aGlzLmlzRXh0ZW5kZWRTZWFyY2ggPSAhdGhpcy5pc0V4dGVuZGVkU2VhcmNoO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctYmJyLWdyaWQvZ3ctYmJyLWdyaWQuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxmb3JtIFtmb3JtR3JvdXBdPVxcXCJTdHNGb3JtXFxcIiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkIHBhZGRpbmdUb3AxMHB4XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwidXNlU2VhcmNoXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0zXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgKGNsaWNrKT1cXFwiVG9nZ2xlRXh0ZW5kZWRTZWFyY2goKVxcXCI+e3sgaXNFeHRlbmRlZFNlYXJjaCA/ICdFbmtlbHZvdWRpZyB6b2VrZW4nIDogJ0dlYXZhbmNlZXJkIHpvZWtlbicgfX08L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiAqbmdJZj1cXFwidXNlU2VhcmNoICYmICFpc0V4dGVuZGVkU2VhcmNoXFxcIiBjbGFzcz1cXFwiY29sLXNtLTlcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwicGFkZGluZ1JpZ2h0MTBweFxcXCI+RmlsdGVyIHN0YXR1czwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPHNlbGVjdCBmb3JtQ29udHJvbE5hbWU9XFxcInN0c1xcXCIgRG90dGVkQm9yZGVyQmVsb3cgKGNoYW5nZSk9XFxcInN0YXR1c0NoYW5nZWQoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIi0xXFxcIj5TZWxlY3RlZXI8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCBzdHMgb2YgU3RhdHVzRHJvcGRvd25MaXN0XFxcIiBbdmFsdWVdPVxcXCJzdHMuYmJyU3RhdHVzSURcXFwiIFtpbm5lckhUTUxdPVxcXCJzdHMuc3RhdHVzXFxcIj48L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwidXNlU2VhcmNoICYmIGlzRXh0ZW5kZWRTZWFyY2hcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyXFxcIj48Z3ctYmJyLXpvZWt1aXRnZWJyZWlkIChzZWFyY2hpbmcpPVxcXCJvbkV4dGVuZGVkU2VhcmNoKCRldmVudClcXFwiPjwvZ3ctYmJyLXpvZWt1aXRnZWJyZWlkPjwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiTmd4VGFibGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8cCAqbmdJZj1cXFwiZm9yTmlldXdlQWFudnJhZ2VuID09IGZhbHNlXFxcIiBjbGFzcz1cXFwicHVsbC1sZWZ0IE5neFRpdGxlXFxcIj57e3RpdGxlfX08L3A+XFxyXFxuICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlICN0YWJsZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYm9vdHN0cmFwXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYWN0aXZhdGUpPVxcXCJvbkFjdGl2YXRlKCRldmVudClcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3dzXT1cXFwicm93c1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbHVtbk1vZGVdPVxcXCInZmxleCdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtoZWFkZXJIZWlnaHRdPVxcXCI1MFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zvb3RlckhlaWdodF09XFxcIjQwXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGltaXRdPVxcXCJhcHBMYWJlbHMudGFibGVWaWV3Um93c1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jvd0NsYXNzXT1cXFwiZ2V0Um93Q2xhc3NcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjc3NDbGFzc2VzXT1cXFwiYXBwTGFiZWxzLmljb25zQ3NzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWVzc2FnZXNdPVxcXCJ7dG90YWxNZXNzYWdlOiBhcHBMYWJlbHMuVG90YWwudG9Mb3dlckNhc2UoKSwgZW1wdHlNZXNzYWdlOiBhcHBMYWJlbHMuTm9EYXRhVG9EaXNwbGF5fVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NvcnRzXT1cXFwiW3twcm9wOidiYnJOdW1tZXInLCBkaXI6J2Rlc2MnIH1dXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm93SGVpZ2h0XT1cXFwiJ2F1dG8nXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBuYW1lPVxcXCJuaWV0R29lZEdla2V1cmRcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1yb3c9XFxcInJvd1xcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cXFwiY29sb3I6IHJlZFxcXCI+PGI+e3tyb3dbJ25pZXRHb2VkR2VrZXVyZCddfX08L2I+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIHByb3A9XFxcImJick51bW1lclxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckxhYmVsXFxcIj5OdW1tZXI8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiYmJyTnVtbWVyXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1yb3c9XFxcInJvd1xcXCIgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwicGRmTGlua1xcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9ib2RlbWJlaGVlcnJhcHBvcnQtZGV0YWlsJ11cXFwiIFtxdWVyeVBhcmFtc109XFxcIntiYnI6J0ZpbmFsJyxiYnJJZDpyb3dbJ2Jick51bW1lciddfVxcXCI+PGxhYmVsIGNsYXNzPVxcXCJ0ZXh0XFxcIj57e3Jvd1snYmJyTnVtbWVyJ119fTwvbGFiZWw+PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjNcXFwiIHByb3A9XFxcIm5hYW1cXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJMYWJlbFxcXCI+S2xhbnQ8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwibmFhbVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtdmFsdWU9XFxcInZhbHVlXFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7dmFsdWV9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBwcm9wPVxcXCJiZXJvZXBzb3JnYW5pc2F0aWVjb2RlXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyTGFiZWxcXFwiPkNvZGU8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImNvZGVcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXJvdz1cXFwicm93XFxcIiBsZXQtdmFsdWU9XFxcInZhbHVlXFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7dmFsdWV9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIyXFxcIiBwcm9wPVxcXCJwbGFhdHNcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJMYWJlbFxcXCI+R2VtZWVudGU8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImdlbVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtcm93PVxcXCJyb3dcXFwiIGxldC12YWx1ZT1cXFwidmFsdWVcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3t2YWx1ZX19PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIG5hbWU9XFxcImFhbnZyYWFnRGF0dW1cXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIiBOZ3hGaWx0ZXJMYWJlbFxcXCI+RGF0dW0gaW48L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiYWFudnJhYWdEYXR1bVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtdmFsdWU9XFxcInZhbHVlXFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dmFsdWUgfCBkYXRlOlxcXCJkZC9NTS95eXl5XFxcIn19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMVxcXCIgbmFtZT1cXFwic3RhdHVzRGF0dW1cXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIiBOZ3hGaWx0ZXJMYWJlbFxcXCI+RGF0dW0gdWl0PC9zcGFuPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcInN0YXR1c0RhdHVtXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC12YWx1ZT1cXFwidmFsdWVcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3t2YWx1ZSB8IGRhdGU6XFxcImRkL01NL3l5eXlcXFwifX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBwcm9wPVxcXCJpbmRpZW5pbmdzd2lqemVcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIiBOZ3hGaWx0ZXJMYWJlbFxcXCI+QWFudnVscGxhbjwvc3Bhbj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJpbmRpZW5pbmdzd2lqemVcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMVxcXCIgcHJvcD1cXFwiaG9ldmVlbGhlaWRcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJMYWJlbFxcXCI+SG9ldmVlbGhlaWQ8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiaG9ldlxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtcm93PVxcXCJyb3dcXFwiIGxldC12YWx1ZT1cXFwidmFsdWVcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3tyb3dbJ2hvZXZlZWxoZWlkJ119fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBwcm9wPVxcXCJnZWZhY3R1cmVlcmRcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIiBOZ3hGaWx0ZXJMYWJlbFxcXCI+R2VmYWN0Ljwvc3Bhbj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJnZWZhY3R1cmVlcmRcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiM1xcXCIgcHJvcD1cXFwic3RhdHVzXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCIgTmd4RmlsdGVyTGFiZWxcXFwiPkJCUiBTdGF0dXM8L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiYmJyU3RzXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIG5hbWU9XFxcInN0YXJ0RGF0dW1Hcm9uZHdlcmtlblxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiIE5neEZpbHRlckxhYmVsXFxcIj5TdGFydCBEYXR1bTwvc3Bhbj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJzdGFydERhdHVtXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC12YWx1ZT1cXFwidmFsdWVcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3t2YWx1ZSB8IGRhdGU6XFxcImRkL01NL3l5eXlcXFwifX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBuYW1lPVxcXCJEZXRhaWxcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1yb3c9XFxcInJvd1xcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vLi4vLi4vLi4vaW1hZ2VzL2ljb19lZGl0cmVjb3JkLmdpZlwiKSArIFwiXFxcIiBjbGFzcz1cXFwiaWJ0blxcXCIgKGNsaWNrKT1cXFwibGlua1RvQkJSKHJvd1snYmJyTnVtbWVyJ10pXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uICpuZ0lmPVxcXCJjYW5EZWxldGVcXFwiIFtmbGV4R3Jvd109XFxcIjFcXFwiIG5hbWU9XFxcIkRldGFpbFxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXJvdz1cXFwicm93XFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9pbWFnZXMvaWNvX2RlbGV0ZS5wbmdcIikgKyBcIlxcXCIgY2xhc3M9XFxcImlidG5cXFwiIChjbGljayk9XFxcImRlbGV0ZUJCUihyb3dbJ2Jick51bW1lciddKVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZm9ybT5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctYmJyLWdyaWQvZ3ctYmJyLWdyaWQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDY5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ3ctYmJyLWdyaWQuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWJici1ncmlkL2d3LWJici1ncmlkLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDY5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWJici1ncmlkL2d3LWJici1ncmlkLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDY5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UgfSBmcm9tIFwibmd4LXRvYXN0clwiO1xyXG5cclxuaW1wb3J0IHsgYXBwTGFiZWxzIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvYXBwTGFiZWxzXCI7XHJcbmltcG9ydCB7IEdlbmVyYWxTY3JpcHRzIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvZ2VuZXJhbC5zY3JpcHRzXCI7XHJcblxyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQgeyBIdHRwQkJSU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9odHRwLWJici5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEh0dHBEb3NzaWVyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9odHRwLWRvc3NpZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIdHRwS2xhbnRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2h0dHAta2xhbnQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIdHRwVFZTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2h0dHAtdHYuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEJzTG9jYWxlU2VydmljZSB9IGZyb20gXCJuZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXJcIjtcclxuaW1wb3J0IHsgU2dzQkJSWm9la1ZlbGRlbiB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL3Nnc0NsYXNzZXMuc2NyaXB0c1wiO1xyXG5pbXBvcnQgeyBJU2dzS2xhbnRDb21ib0xpc3RJdGVtLCBJU2dzRG9zc2llckNvbWJvTGlzdEl0ZW0sIElTZ3NCZXN0QWFyZExpc3RJdGVtIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvc2dzSW50ZXJmYWNlcy5zY3JpcHRzXCI7XHJcbmltcG9ydCB7IElUVlN0YXR1c0RlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9pbnRlcmZhY2VzLnNjcmlwdHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiZ3ctYmJyLXpvZWt1aXRnZWJyZWlkXCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ndy1iYnItem9la3VpdGdlYnJlaWQuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vZ3ctYmJyLXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5jc3MnKV0sXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBnd0JCUlpvZWtVaXRnZWJyZWlkQ29tcG9uZW50IGV4dGVuZHMgR2VuZXJhbFNjcmlwdHMgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgYXBwTGFiZWxzID0gYXBwTGFiZWxzO1xyXG4gICAgemtGb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gICAgS2xhbnRMaXN0SXRlbXM6IElTZ3NLbGFudENvbWJvTGlzdEl0ZW1bXSA9IG51bGw7XHJcbiAgICBEb3NzaWVyQmVoZWVyZGVyTGlzdEl0ZW1zOiBJU2dzRG9zc2llckNvbWJvTGlzdEl0ZW1bXSA9IG51bGw7XHJcbiAgICBCZXN0ZW1taW5nc2FhcmRMaXN0SXRlbXM6IElTZ3NCZXN0QWFyZExpc3RJdGVtW10gPSBudWxsO1xyXG4gICAgU3RhdHVzTGlzdEl0ZW1zOiBJVFZTdGF0dXNEZWZpbml0aW9uW10gPSBudWxsO1xyXG5cclxuICAgIHpvZWtWZWxkZW46IFNnc0JCUlpvZWtWZWxkZW4gPSBudWxsO1xyXG4gICAgQE91dHB1dCgpIHNlYXJjaGluZzogRXZlbnRFbWl0dGVyPFNnc0JCUlpvZWtWZWxkZW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxTZ3NCQlJab2VrVmVsZGVuPigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX3RvYXN0cjogVG9hc3RyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2xvY2FsZVNlcnZpY2U6IEJzTG9jYWxlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGh0dHBCYnI6IEh0dHBCQlJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgaHR0cERvc3NpZXI6IEh0dHBEb3NzaWVyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGh0dHBLbGFudDogSHR0cEtsYW50U2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGh0dHBUVjogSHR0cFRWU2VydmljZSxcclxuICAgICAgICBASW5qZWN0KFwiQkFTRV9VUkxcIikgcHJpdmF0ZSByZWFkb25seSBfYmFzZVVybDogc3RyaW5nLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX3Nhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XHJcbiAgICAgICAgc3VwZXIoX3RvYXN0cik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gTmVlZGVkIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBic0RhdGVwaWNrZXIgdG8gYWNjZXB0IGRkL01NL3l5eXkgZm9ybWF0dGluZ1xyXG4gICAgICAgIHRoaXMuX2xvY2FsZVNlcnZpY2UudXNlKFwiYm9vdHN0cmFwLWxvY2FsZS1ubGJlXCIpO1xyXG5cclxuICAgICAgICB0aGlzLnprRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBDb2RlOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIFR2SWQ6IFtcIlwiXSxcclxuICAgICAgICAgICAgS2xhbnRJZDogW1wiLTFcIl0sXHJcbiAgICAgICAgICAgIERvc3NpZXJCZWhlZXJkZXJJZDogW1wiLTFcIl0sXHJcbiAgICAgICAgICAgIFN0YXR1c0lkOiBbXCItMVwiXSxcclxuICAgICAgICAgICAgQmVzdGVtbWluZ3NhYXJkSWQ6IFtcIi0xXCJdLFxyXG4gICAgICAgICAgICBHZWZhY3R1cmVlcmQ6IFtcIi0xXCJdLFxyXG4gICAgICAgICAgICBTdHJhYXQ6IFtcIlwiXSxcclxuICAgICAgICAgICAgUG9zdGNvZGU6IFtcIlwiXSxcclxuICAgICAgICAgICAgR2VtZWVudGU6IFtcIlwiXSxcclxuICAgICAgICAgICAgTGFtYmVydFg6IFtcIlwiXSxcclxuICAgICAgICAgICAgTGFtYmVydFk6IFtcIlwiXSxcclxuICAgICAgICAgICAgTGFtYmVydFJhbmdlOiBbXCItMVwiXSxcclxuICAgICAgICAgICAgVmVydHJla1N0cmFhdDogW1wiXCJdLFxyXG4gICAgICAgICAgICBWZXJ0cmVrR2VtZWVudGU6IFtcIlwiXSxcclxuICAgICAgICAgICAgZGF0VmFuOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIGRhdFRvdDogW1wiXCJdXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZERyb3Bkb3ducygpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWREcm9wZG93bnMoKSB7XHJcbiAgICAgICAgdGhpcy5odHRwS2xhbnQuc2dzQ29tYm9MaXN0SXRlbXMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChsc3Q6IElTZ3NLbGFudENvbWJvTGlzdEl0ZW1bXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxzdCAhPSBudWxsICYmIGxzdCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLktsYW50TGlzdEl0ZW1zID0gWy4uLmxzdF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmh0dHBEb3NzaWVyLnNnc0NvbWJvTGlzdEl0ZW1zKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgobHN0OiBJU2dzRG9zc2llckNvbWJvTGlzdEl0ZW1bXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxzdCAhPSBudWxsICYmIGxzdCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkRvc3NpZXJCZWhlZXJkZXJMaXN0SXRlbXMgPSBbLi4ubHN0XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaHR0cEJici5zZ3NCZXN0ZW1taW5nc2FhcmRMaXN0SXRlbXMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChsc3Q6IElTZ3NCZXN0QWFyZExpc3RJdGVtW10pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChsc3QgIT0gbnVsbCAmJiBsc3QgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CZXN0ZW1taW5nc2FhcmRMaXN0SXRlbXMgPSBbLi4ubHN0XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaHR0cFRWLlN0YXR1c0RlZmluaXRpb25MaXN0KGZhbHNlKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChsc3Q6IElUVlN0YXR1c0RlZmluaXRpb25bXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxzdCAhPSBudWxsICYmIGxzdCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlN0YXR1c0xpc3RJdGVtcyA9IFsuLi5sc3RdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByYWlzZVNlYXJjaCgpIHtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4gPSBuZXcgU2dzQkJSWm9la1ZlbGRlbigpO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5jb2RlID0gdGhpcy56a0Zvcm0uY29udHJvbHMuQ29kZS52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4udHZJZCA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLlR2SWQudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmtsYW50SWQgPSB0aGlzLnprRm9ybS5jb250cm9scy5LbGFudElkLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5kb3NzaWVyQmVoZWVyZGVySWQgPSB0aGlzLnprRm9ybS5jb250cm9scy5Eb3NzaWVyQmVoZWVyZGVySWQudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLnN0YXR1c0lkID0gdGhpcy56a0Zvcm0uY29udHJvbHMuU3RhdHVzSWQudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmJlc3RlbW1pbmdzYWFyZElkID0gdGhpcy56a0Zvcm0uY29udHJvbHMuQmVzdGVtbWluZ3NhYXJkSWQudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmdlZmFjdHVyZWVyZCA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLkdlZmFjdHVyZWVyZC52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4uc3RyYWF0ID0gdGhpcy56a0Zvcm0uY29udHJvbHMuU3RyYWF0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5wb3N0Y29kZSA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLlBvc3Rjb2RlLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5nZW1lZW50ZSA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLkdlbWVlbnRlLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5sYW1iZXJ0WCA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLkxhbWJlcnRYLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5sYW1iZXJ0WSA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLkxhbWJlcnRZLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5sYW1iZXJ0UmFuZ2UgPSB0aGlzLnprRm9ybS5jb250cm9scy5MYW1iZXJ0UmFuZ2UudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLnZlcnRyZWtTdHJhYXQgPSB0aGlzLnprRm9ybS5jb250cm9scy5WZXJ0cmVrU3RyYWF0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi52ZXJ0cmVrR2VtZWVudGUgPSB0aGlzLnprRm9ybS5jb250cm9scy5WZXJ0cmVrR2VtZWVudGUudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmRhdFZhbiA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLmRhdFZhbi52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4uZGF0VG90ID0gdGhpcy56a0Zvcm0uY29udHJvbHMuZGF0VG90LnZhbHVlO1xyXG5cclxuICAgICAgICB0aGlzLnNlYXJjaGluZy5lbWl0KHRoaXMuem9la1ZlbGRlbik7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1iYnItem9la3VpdGdlYnJlaWQvZ3ctYmJyLXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybSBbZm9ybUdyb3VwXT1cXFwiemtGb3JtXFxcIiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkIHBhZGRpbmdUb3AzMHB4XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcInR4dENvZGVcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5Db2RlPC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0eHRDb2RlXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkNvZGVcXFwiIEFsbG93T25seU51bWJlcnMgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcInR2dFR2SWRcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5UViBOdW1tZXI6PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0eHRUdklkXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIlR2SWRcXFwiIEFsbG93T25seU51bWJlcnMgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcImRkbEtsYW50XFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+S2xhbnQ8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duIGNvbC1zbS00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cXFwiZGRsS2xhbnRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiS2xhbnRJZFxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcIndpZHRoMTAwcGVyY2VudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCItMVxcXCI+U2VsZWN0ZWVyPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IGtsYW50IG9mIEtsYW50TGlzdEl0ZW1zXFxcIiBbdmFsdWVdPVxcXCJrbGFudC5rbGFudElEXFxcIiBbaW5uZXJIVE1MXT1cXFwia2xhbnQubmFhbVxcXCI+PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJkZGxEb3NzaWVyQmVoZWVyZGVyXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+RG9zc2llckJlaGVlcmRlcjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24gY29sLXNtLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJkZGxEb3NzaWVyQmVoZWVyZGVyXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkRvc3NpZXJCZWhlZXJkZXJJZFxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcIndpZHRoMTAwcGVyY2VudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCItMVxcXCI+U2VsZWN0ZWVyPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IGRvc3NiZWggb2YgRG9zc2llckJlaGVlcmRlckxpc3RJdGVtc1xcXCIgW3ZhbHVlXT1cXFwiZG9zc2JlaC5kb3NzaWVyQmVoZWVyZGVySURcXFwiIFtpbm5lckhUTUxdPVxcXCJkb3NzYmVoLm5hYW1cXFwiPjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwiZGRsU3RhdHVzXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+U3RhdHVzPC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93biBjb2wtc20tNFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XFxcImRkbFN0YXR1c1xcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJTdGF0dXNJZFxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcIndpZHRoMTAwcGVyY2VudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCItMVxcXCI+U2VsZWN0ZWVyPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IHN0cyBvZiBTdGF0dXNMaXN0SXRlbXNcXFwiIFt2YWx1ZV09XFxcInN0cy50dlN0YXR1c0lEXFxcIiBbaW5uZXJIVE1MXT1cXFwic3RzLnN0YXR1c1xcXCI+PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJkZGxCZXN0ZW1taW5nc2FhcmRcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5CZXN0ZW1taW5nc2FhcmQ8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duIGNvbC1zbS00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cXFwiZGRsQmVzdGVtbWluZ3NhYXJkXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkJlc3RlbW1pbmdzYWFyZElkXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwid2lkdGgxMDBwZXJjZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIi0xXFxcIj5TZWxlY3RlZXI8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgYWFyZCBvZiBCZXN0ZW1taW5nc2FhcmRMaXN0SXRlbXNcXFwiIFt2YWx1ZV09XFxcImFhcmQuYmVzdGVtbWluZ3NBYXJkSWRcXFwiIFtpbm5lckhUTUxdPVxcXCJhYXJkLmJlc3RlbW1pbmdzQWFyZFxcXCI+PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJ0eHRTdHJhYXRcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5CZXN0ZW1taW5nIFN0cmFhdDwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwidHh0U3RyYWF0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIlN0cmFhdFxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcImRkbEdlZmFjdHVyZWVyZFxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPkdlZmFjdHVyZWVyZDwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24gY29sLXNtLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJkZGxHZWZhY3R1cmVlcmRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiR2VmYWN0dXJlZXJkXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwid2lkdGgxMDBwZXJjZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIi0xXFxcIj5TZWxlY3RlZXI8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIjFcXFwiPkphPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCIwXFxcIj5OZWU8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcInR4dFBvc3Rjb2RlXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+QmVzdGVtbWluZyBQb3N0Y29kZTo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInR4dFBvc3Rjb2RlXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIlBvc3Rjb2RlXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwidHh0R2VtZWVudGVcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5CZXN0ZW1taW5nIEdlbWVlbnRlOjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwidHh0R2VtZWVudGVcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiR2VtZWVudGVcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJ0eHRMYW1iZXJ0WFxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPkJlc3RlbW1pbmcgTGFtYmVydCBYIChpbiBtKTwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwidHh0TGFtYmVydFhcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiTGFtYmVydFhcXFwiIEFsbG93T25seU51bWJlcnMgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcImRkbExhbWJlcnRSYW5nZVxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPkxhbWJlcnQgUmFuZ2U6PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93biBjb2wtc20tNFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XFxcImRkbExhbWJlcnRSYW5nZVxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJMYW1iZXJ0UmFuZ2VcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJ3aWR0aDEwMHBlcmNlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiLTFcXFwiPlNlbGVjdGVlcjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiMVxcXCI+MSBrbTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiM1xcXCI+MyBrbTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiNVxcXCI+NSBrbTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiMTBcXFwiPjEwIGttPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJ0eHRMYW1iZXJ0WFxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPkJlc3RlbW1pbmcgTGFtYmVydCBZIChpbiBtKTwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwidHh0TGFtYmVydFlcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiTGFtYmVydFlcXFwiIEFsbG93T25seU51bWJlcnMgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPiZuYnNwOzwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJ0eHRWU3RyYWF0XFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+VFYgU3RyYWF0OjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwidHh0VlN0cmFhdFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJWZXJ0cmVrU3RyYWF0XFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwidHh0VkdlbWVlbnRlXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+VFYgR2VtZWVudGU6PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0eHRWR2VtZWVudGVcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiVmVydHJla0dlbWVlbnRlXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwiZHRlVmFuXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+RGF0dW0gVmFuOjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwiZHRlVmFuXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImRhdFZhblxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCBuZy10cmltLWlnbm9yZVxcXCIgYnNEYXRlcGlja2VyIHBsYWNlbWVudD1cXFwidG9wIGxlZnRcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBbYnNDb25maWddPVxcXCJ7IHNob3dXZWVrTnVtYmVyczogZmFsc2UgfVxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcImR0ZVRvdFxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPkRhdHVtIFRvdDo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcImR0ZVRvdFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJkYXRUb3RcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgbmctdHJpbS1pZ25vcmVcXFwiIGJzRGF0ZXBpY2tlciBwbGFjZW1lbnQ9XFxcInRvcCBsZWZ0XFxcIiBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCIgRG90dGVkQm9yZGVyQmVsb3cgW2JzQ29uZmlnXT1cXFwieyBzaG93V2Vla051bWJlcnM6IGZhbHNlIH1cXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00IGNvbC1zbS1vZmZzZXQtOFxcXCI+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcInJhaXNlU2VhcmNoKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiPnt7YXBwTGFiZWxzLlNlbmR9fTwvYnV0dG9uPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZm9ybT5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctYmJyLXpvZWt1aXRnZWJyZWlkL2d3LWJici16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNjk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ndy1iYnItem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWJici16b2VrdWl0Z2VicmVpZC9ndy1iYnItem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNzAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctYmJyLXpvZWt1aXRnZWJyZWlkL2d3LWJici16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA3MDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBHZW5lcmFsU2NyaXB0cyB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL2dlbmVyYWwuc2NyaXB0c1wiO1xyXG5pbXBvcnQgeyBUb2FzdHJTZXJ2aWNlIH0gZnJvbSBcIm5neC10b2FzdHJcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBIdHRwVFZTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2h0dHAtdHYuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIdHRwR1RNU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9odHRwLWd0bS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IElTZ3NUVkJ5U3RhdHVzLCBJU2dzR1RNU3RhdHVzTGlzdEl0ZW0sIElTZ3NHVE1TdGF0dXMgfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9zZ3NJbnRlcmZhY2VzLnNjcmlwdHNcIjtcclxuaW1wb3J0IHsgU2dzVFZab2VrVmVsZGVuLCBTZ3NHVE1ab2VrVmVsZGVuIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvc2dzQ2xhc3Nlcy5zY3JpcHRzXCI7XHJcbmltcG9ydCB7IGFwcExhYmVscyB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL2FwcExhYmVsc1wiO1xyXG5pbXBvcnQgeyBEYXRhdGFibGVDb21wb25lbnQgfSBmcm9tIFwiQHN3aW1sYW5lL25neC1kYXRhdGFibGVcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IElUVlN0YXR1c0RlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9pbnRlcmZhY2VzLnNjcmlwdHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiZ3ctZ3RtLWdyaWRcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2d3LWd0bS1ncmlkLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2d3LWd0bS1ncmlkLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBnd0dUTUdyaWRDb21wb25lbnQgZXh0ZW5kcyBHZW5lcmFsU2NyaXB0cyBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBhcHBMYWJlbHMgPSBhcHBMYWJlbHM7XHJcblxyXG4gICAgU3RhdHVzRHJvcGRvd25MaXN0OiBJU2dzR1RNU3RhdHVzTGlzdEl0ZW1bXSA9IG51bGw7XHJcbiAgICBTdGF0dXNMaXN0OiBJU2dzR1RNU3RhdHVzW10gPSBudWxsO1xyXG4gICAgcm93czogSVNnc0dUTVN0YXR1c1tdID0gbnVsbDtcclxuICAgIHRlbXA6IGFueVtdID0gW107XHJcbiAgICBAVmlld0NoaWxkKERhdGF0YWJsZUNvbXBvbmVudCkgdGFibGU6IERhdGF0YWJsZUNvbXBvbmVudDtcclxuXHJcbiAgICBASW5wdXQoKSB0aXRsZSA9IFwiXCI7XHJcbiAgICBTdGF0dXNJZDogbnVtYmVyID0gLTE7XHJcbiAgICBpc0V4dGVuZGVkU2VhcmNoOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgZm9yTmlldXdlQWFudnJhZ2VuID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgnTmlldXdlQWFudnJhZ2VuJylcclxuICAgIGdldCBOaWV1d2VBYW52cmFnZW4oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9yTmlldXdlQWFudnJhZ2VuO1xyXG4gICAgfVxyXG4gICAgc2V0IE5pZXV3ZUFhbnZyYWdlbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuZm9yTmlldXdlQWFudnJhZ2VuID0gXCJcIiArIHZhbHVlICE9PSBcImZhbHNlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlU2VhcmNoID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgnRXh0ZW5kZWRTZWFyY2gnKVxyXG4gICAgZ2V0IEV4dGVuZGVkU2VhcmNoKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVzZVNlYXJjaDtcclxuICAgIH1cclxuICAgIHNldCBFeHRlbmRlZFNlYXJjaCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMudXNlU2VhcmNoID0gXCJcIiArIHZhbHVlICE9PSBcImZhbHNlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgY2FuRGVsZXRlID0gZmFsc2U7XHJcbiAgICBASW5wdXQoJ0FsbG93RGVsZXRlJylcclxuICAgIGdldCBBbGxvd0RlbGV0ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYW5EZWxldGU7XHJcbiAgICB9XHJcbiAgICBzZXQgQWxsb3dEZWxldGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmNhbkRlbGV0ZSA9IFwiXCIgKyB2YWx1ZSAhPT0gXCJmYWxzZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIFN0c0Zvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF90b2FzdHI6IFRvYXN0clNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBodHRwR1RNOiBIdHRwR1RNU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGh0dHBUVjogSHR0cFRWU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgYXV0aDogQXV0aGVudGljYXRpb25TZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIoX3RvYXN0cik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuU3RzRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBzdHM6IFstMV0sXHJcbiAgICAgICAgICAgIGd0bUlkOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIGtsYW50OiBbXCJcIl0sXHJcbiAgICAgICAgICAgIHJlZjogW1wiXCJdLFxyXG4gICAgICAgICAgICBoZXJrOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIHRvcENncjogW1wiXCJdLFxyXG4gICAgICAgICAgICBpbmRpZW5pbmdzRGF0dW06IFtcIlwiXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRTdGF0dXNEcm9wZG93bkxpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkU3RhdHVzRHJvcGRvd25MaXN0KCkge1xyXG4gICAgICAgIHRoaXMuU3RhdHVzRHJvcGRvd25MaXN0ID0gW1xyXG4gICAgICAgICAgICB7IFwiaWRcIjogMCwgXCJvbXNjaHJpanZpbmdcIjogXCJBbGxlc1wiIH0sXHJcbiAgICAgICAgICAgIHsgXCJpZFwiOiAxLCBcIm9tc2NocmlqdmluZ1wiOiBcIkFmZ2Vyb25kXCIgfSxcclxuICAgICAgICAgICAgeyBcImlkXCI6IDIsIFwib21zY2hyaWp2aW5nXCI6IFwiTm9nIG5pZXQgYWZnZXJvbmRcIiB9XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgdGhpcy5TdHNGb3JtLnBhdGNoVmFsdWUoeyBzdHM6ICh0aGlzLk5pZXV3ZUFhbnZyYWdlbiA/ICcyJyA6ICcyJykgfSk7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNDaGFuZ2VkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdHVzQ2hhbmdlZCgpIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuU3RzRm9ybS5jb250cm9scy5zdHMudmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIi0xXCI6IC8vIFNlbGVjdGVlclxyXG4gICAgICAgICAgICAgICAgdGhpcy5TdGF0dXNJZCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXAgPSBbXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvL2Nhc2UgXCIwXCI6IC8vIE5pZXV3ZSBBYW52cmFnZW4gXHJcbiAgICAgICAgICAgIC8vICAgIHRoaXMuU3RhdHVzSWQgPSAxO1xyXG4gICAgICAgICAgICAvLyAgICB0aGlzLk5pZXV3ZUFhbnZyYWdlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vICAgIHRoaXMubG9hZFN0YXR1c0xpc3QoKTtcclxuICAgICAgICAgICAgLy8gICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IC8vIFN0YXR1c1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TdGF0dXNJZCA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5zdHMudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLk5pZXV3ZUFhbnZyYWdlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU3RhdHVzTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRTdGF0dXNMaXN0KCkge1xyXG4gICAgICAgIHRoaXMuaHR0cEdUTS5nd1N0YXR1c0xpc3QodGhpcy5TdGF0dXNJZCwgLTEpLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKChsc3Q6IElTZ3NHVE1TdGF0dXNbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gbHN0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wID0gWy4uLmxzdF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyRm9ybUZpZWxkcygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkV4dGVuZGVkU2VhcmNoKHpvZWtWZWxkZW46IFNnc0dUTVpvZWtWZWxkZW4pIHtcclxuICAgICAgICB0aGlzLmh0dHBHVE0uZ3dab2VrTGlzdCh6b2VrVmVsZGVuKS50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbigobHN0OiBJU2dzR1RNU3RhdHVzW10pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IGxzdDtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcCA9IFsuLi5sc3RdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckZvcm1GaWVsZHMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJGb3JtRmllbGRzKCkge1xyXG4gICAgICAgIC8vIENsZWFyIGFsbCBGb3JtIFZhbHVlcyBleGNlcHQgc3RzXHJcbiAgICAgICAgdGhpcy5TdHNGb3JtLnBhdGNoVmFsdWUoe1xyXG4gICAgICAgICAgICB0ZWNobmlzY2hWZXJzbGFnSUQ6IFwiXCIsXHJcbiAgICAgICAgICAgIG5hYW06IFwiXCIsXHJcbiAgICAgICAgICAgIGdlbWVlbnRlT25kZXJ6b2Vrc2xvY2F0aWU6IFwiXCIsXHJcbiAgICAgICAgICAgIGluZGllbmluZ3NEYXR1bTogXCJcIixcclxuICAgICAgICAgICAgc3RhdHVzRGF0dW06IFwiXCIsXHJcbiAgICAgICAgICAgIGluZGllbmluZ3N3aWp6ZTogXCJcIixcclxuICAgICAgICAgICAgZ2VmYWN0dXJlZXJkOiBcIlwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGd0bUlkID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLmd0bUlkLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGtsYW50ID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLmtsYW50LnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgcmVmID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLnJlZi52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IGhlcmsgPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuaGVyay52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IHRvcENnciA9IHRoaXMuU3RzRm9ybS5jb250cm9scy50b3BDZ3IudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBpbmRpZW5pbmdzRGF0dW0gPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuaW5kaWVuaW5nc0RhdHVtLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRwID0gbmV3IERhdGVQaXBlKFwiZW4tVVNcIik7XHJcblxyXG4gICAgICAgIC8vIGZpbHRlciBvdXIgZGF0YVxyXG4gICAgICAgIGNvbnN0IHRlbXAgPSB0aGlzLnRlbXAuZmlsdGVyKChyb3c6IElTZ3NHVE1TdGF0dXMpID0+IHtcclxuICAgICAgICAgICAgdmFyIGluZGllbmluZ3NEYXR1bUFzU3RyaW5nOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKGluZGllbmluZ3NEYXR1bSA+IFwiXCIpIHsgaW5kaWVuaW5nc0RhdHVtQXNTdHJpbmcgPSBkcC50cmFuc2Zvcm0ocm93LmluZGllbmluZ3NEYXR1bSwgXCJkZC9NTS95eXl5XCIpOyB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKCFndG1JZCB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQocm93Lmdyb25kdHJhbnNwb3J0bWVsZGluZ0lkLnRvU3RyaW5nKCkpICYmIHJvdy5ncm9uZHRyYW5zcG9ydG1lbGRpbmdJZC50b1N0cmluZygpLmluZGV4T2YoZ3RtSWQpICE9PSAtMSkpXHJcbiAgICAgICAgICAgICAgICAmJiAoIWtsYW50IHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChyb3cua2xhbnQudG9Mb3dlckNhc2UoKSkgJiYgcm93LmtsYW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihrbGFudCkgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghcmVmIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChyb3cua2xhbnRLZW5tZXJrLnRvTG93ZXJDYXNlKCkpICYmIHJvdy5rbGFudEtlbm1lcmsudG9Mb3dlckNhc2UoKS5pbmRleE9mKHJlZikgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghaGVyayB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQocm93LmhlcmtvbXN0LnRvTG93ZXJDYXNlKCkpICYmIHJvdy5oZXJrb21zdC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoaGVyaykgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghdG9wQ2dyIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChyb3cudG9wQ2dyLnRvTG93ZXJDYXNlKCkpICYmIHJvdy50b3BDZ3IudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRvcENncikgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghaW5kaWVuaW5nc0RhdHVtIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChpbmRpZW5pbmdzRGF0dW1Bc1N0cmluZykgJiYgaW5kaWVuaW5nc0RhdHVtQXNTdHJpbmcuaW5kZXhPZihpbmRpZW5pbmdzRGF0dW0pICE9PSAtMSkpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgcm93c1xyXG4gICAgICAgIHRoaXMucm93cyA9IHRlbXA7XHJcbiAgICAgICAgLy8gV2hlbmV2ZXIgdGhlIGZpbHRlciBjaGFuZ2VzLCBhbHdheXMgZ28gYmFjayB0byB0aGUgZmlyc3QgcGFnZVxyXG4gICAgICAgIHRoaXMudGFibGUub2Zmc2V0ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSb3dDbGFzcyhyb3c6IGFueSkge1xyXG4gICAgICAgIHJldHVybiBcImlidG5cIjtcclxuICAgIH1cclxuXHJcbiAgICBvbkFjdGl2YXRlKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJkYmxjbGlja1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlua1RvR1RNKGV2ZW50LnJvd1tcImdyb25kdHJhbnNwb3J0bWVsZGluZ0lkXCJdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGlua1RvR1RNKGd0bUlkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZ3cvZ3RtLWVkaXRcIiwgZ3RtSWRdKTsgIFxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUdUTShndG1JZDogbnVtYmVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgVG9nZ2xlRXh0ZW5kZWRTZWFyY2goKSB7XHJcbiAgICAgICAgdGhpcy5pc0V4dGVuZGVkU2VhcmNoID0gIXRoaXMuaXNFeHRlbmRlZFNlYXJjaDtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWd0bS1ncmlkL2d3LWd0bS1ncmlkLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybSBbZm9ybUdyb3VwXT1cXFwiU3RzRm9ybVxcXCIgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZCBwYWRkaW5nVG9wMTBweFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgKm5nSWY9XFxcInVzZVNlYXJjaFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tM1xcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIChjbGljayk9XFxcIlRvZ2dsZUV4dGVuZGVkU2VhcmNoKClcXFwiPnt7IGlzRXh0ZW5kZWRTZWFyY2ggPyAnRW5rZWx2b3VkaWcgem9la2VuJyA6ICdHZWF2YW5jZWVyZCB6b2VrZW4nIH19PC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgKm5nSWY9XFxcInVzZVNlYXJjaCAmJiAhaXNFeHRlbmRlZFNlYXJjaFxcXCIgY2xhc3M9XFxcImNvbC1zbS05XFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcInBhZGRpbmdSaWdodDEwcHhcXFwiPkZpbHRlciBzdGF0dXM8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxzZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVxcXCJzdHNcXFwiIERvdHRlZEJvcmRlckJlbG93IChjaGFuZ2UpPVxcXCJzdGF0dXNDaGFuZ2VkKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCItMVxcXCI+U2VsZWN0ZWVyPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgc3RzIG9mIFN0YXR1c0Ryb3Bkb3duTGlzdFxcXCIgW3ZhbHVlXT1cXFwic3RzLmlkXFxcIiBbaW5uZXJIVE1MXT1cXFwic3RzLm9tc2NocmlqdmluZ1xcXCI+PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgKm5nSWY9XFxcInVzZVNlYXJjaCAmJiBpc0V4dGVuZGVkU2VhcmNoXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMlxcXCI+PGd3LWd0bS16b2VrdWl0Z2VicmVpZCAoc2VhcmNoaW5nKT1cXFwib25FeHRlbmRlZFNlYXJjaCgkZXZlbnQpXFxcIj48L2d3LWd0bS16b2VrdWl0Z2VicmVpZD48L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIk5neFRhYmxlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHAgKm5nSWY9XFxcImZvck5pZXV3ZUFhbnZyYWdlbiA9PSBmYWxzZVxcXCIgY2xhc3M9XFxcInB1bGwtbGVmdCBOZ3hUaXRsZVxcXCI+e3t0aXRsZX19PC9wPlxcclxcbiAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZSAjdGFibGVcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJvb3RzdHJhcFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFjdGl2YXRlKT1cXFwib25BY3RpdmF0ZSgkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm93c109XFxcInJvd3NcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb2x1bW5Nb2RlXT1cXFwiJ2ZsZXgnXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaGVhZGVySGVpZ2h0XT1cXFwiNTBcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb290ZXJIZWlnaHRdPVxcXCI0MFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xpbWl0XT1cXFwiYXBwTGFiZWxzLnRhYmxlVmlld1Jvd3NcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3dDbGFzc109XFxcImdldFJvd0NsYXNzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY3NzQ2xhc3Nlc109XFxcImFwcExhYmVscy5pY29uc0Nzc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21lc3NhZ2VzXT1cXFwie3RvdGFsTWVzc2FnZTogYXBwTGFiZWxzLlRvdGFsLnRvTG93ZXJDYXNlKCksIGVtcHR5TWVzc2FnZTogYXBwTGFiZWxzLk5vRGF0YVRvRGlzcGxheX1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzb3J0c109XFxcIlt7cHJvcDonZ3JvbmR0cmFuc3BvcnRtZWxkaW5nSWQnLCBkaXI6J2Rlc2MnIH1dXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm93SGVpZ2h0XT1cXFwiJ2F1dG8nXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBuYW1lPVxcXCJhZmdld2Vya3RlR1RNXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtcm93PVxcXCJyb3dcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAqbmdJZj1cXFwicm93Wyd2ZXJrbGFyaW5nQWZuZW1lck9udHZhbmdlbiddICE9IG51bGwgJiYgcm93Wyd2ZXJrbGFyaW5nQWZuZW1lck9udHZhbmdlbiddID09IHRydWVcXFwiIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vLi4vLi4vLi4vaW1hZ2VzL2NoZWNrZXJlZC1mbGFnLWljb24ucG5nXCIpICsgXCJcXFwiIGNsYXNzPVxcXCJpYnRuXFxcIiAoY2xpY2spPVxcXCJsaW5rVG9HVE0ocm93Wydncm9uZHRyYW5zcG9ydG1lbGRpbmdJZCddKVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBwcm9wPVxcXCJncm9uZHRyYW5zcG9ydG1lbGRpbmdJZFxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckxhYmVsXFxcIj5Db2RlPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImd0bUlkXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1yb3c9XFxcInJvd1xcXCIgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwicGRmTGlua1xcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy90cmFuc3BvcnQtdG9wLWNnci1kZXRhaWwnLCByb3dbJ2dyb25kdHJhbnNwb3J0bWVsZGluZ0lkJ11dXFxcIj48bGFiZWwgY2xhc3M9XFxcInRleHRcXFwiPnt7cm93Wydncm9uZHRyYW5zcG9ydG1lbGRpbmdJZCddfX08L2xhYmVsPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCI0XFxcIiBwcm9wPVxcXCJrbGFudFxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckxhYmVsXFxcIj5LbGFudDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJrbGFudFxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtdmFsdWU9XFxcInZhbHVlXFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+PHNwYW4+e3t2YWx1ZX19PC9zcGFuPjwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjNcXFwiIHByb3A9XFxcImtsYW50S2VubWVya1xcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckxhYmVsXFxcIj5LbGFudCBSZWYuPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJyZWZcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXJvdz1cXFwicm93XFxcIiBsZXQtdmFsdWU9XFxcInZhbHVlXFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+PHNwYW4+e3t2YWx1ZX19PC9zcGFuPjwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjNcXFwiIHByb3A9XFxcImhlcmtvbXN0XFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyTGFiZWxcXFwiPkhlcmtvbXN0PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJoZXJrXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1yb3c9XFxcInJvd1xcXCIgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPjxzcGFuPnt7dmFsdWV9fTwvc3Bhbj48L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIzXFxcIiBwcm9wPVxcXCJ0b3BDZ3JcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJMYWJlbFxcXCI+VE9QL0NHUjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwidG9wQ2dyXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1yb3c9XFxcInJvd1xcXCIgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPjxzcGFuPnt7dmFsdWV9fTwvc3Bhbj48L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIyXFxcIiBuYW1lPVxcXCJpbmRpZW5pbmdzRGF0dW1cXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIiBOZ3hGaWx0ZXJMYWJlbFxcXCI+RGF0dW0gSW48L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiaW5kaWVuaW5nc0RhdHVtXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC12YWx1ZT1cXFwidmFsdWVcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT57e3ZhbHVlIHwgZGF0ZTpcXFwiZGQvTU0veXl5eVxcXCJ9fTwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIG5hbWU9XFxcIkRldGFpbFxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXJvdz1cXFwicm93XFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9pbWFnZXMvaWNvX2VkaXRyZWNvcmQuZ2lmXCIpICsgXCJcXFwiIGNsYXNzPVxcXCJpYnRuXFxcIiAoY2xpY2spPVxcXCJsaW5rVG9HVE0ocm93Wydncm9uZHRyYW5zcG9ydG1lbGRpbmdJZCddKVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiAqbmdJZj1cXFwiY2FuRGVsZXRlXFxcIiBbZmxleEdyb3ddPVxcXCIxXFxcIiBuYW1lPVxcXCJEZXRhaWxcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1yb3c9XFxcInJvd1xcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vLi4vLi4vLi4vaW1hZ2VzL2ljb19kZWxldGUucG5nXCIpICsgXCJcXFwiIGNsYXNzPVxcXCJpYnRuXFxcIiAoY2xpY2spPVxcXCJkZWxldGVHVE0ocm93Wydncm9uZHRyYW5zcG9ydG1lbGRpbmdJZCddKVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbjwvZm9ybT5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctZ3RtLWdyaWQvZ3ctZ3RtLWdyaWQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDcwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFRQ0FZQUFBQWY4LzloQUFBQ2NrbEVRVlI0Mm1Oa3dBRXNUTFNsVDV5NStwU0JBR0RFSnNqT3pzWVI0R1ZYc25MOW5oYXlERkJVVlBUUTF6Tll5OGZQTiszMTYxZjkyN2R2ZjBhMEFVeE1USXpsWmVVTE9UZzVZeDBkSFlHR0tYekt6eStvMkx0M3o0eVBIei8rSjJnQUZ4ZVh3SzFidCs1LytmSkZZT3JVYVF3dUxpNE1peGN2WWVEbjQxMTc5OTdkMUFNSERyekhhNEM4bkh5TXU1djdZajE5UFlaTm16WXpKQ1VuZ2J6RWNQWEtGUVlIUjRjN2lZbUpRUWNQSHJ5TTFRQ2c4NW1jblp3MmYvM3kxV3Y3emgwTVR4NC9ZZGl4WXdlRGlha3BRMjlQTDRPamt5UERvMGVQM2oxKzlDanJ6dDA3YXk5Y3VQQUh4UUJ4Y1hHWk8wQ3dldFVxZGhabUZvWnYzNzh4TEppL2dLR29wSVRoeGZQbkRHTGk0Z3llbmg0TVo4K2VBOFhVTVdzZ1FESEFXRmZWTHo0MTEySE55bFhSejU4L0Y5dXdhU1BEM3IxN0dVSkNRaGxldkh6SnNHcmxTZ1pYVjFlR25wNGVCajUrL2kwclY2N3doUnZBeU1qQVlxNHI3MzdtMnBNZGYvLytVNUtUbFhXY04zOSt3b0s1Y3kwdVhick1HQkVWeFhCZzN6NkdySndjaHBjdlgvN3Y2T2dJdTNmLzNocTRBZEtpdkJvc3JLei9IejU3OXdYSTVRZmlQeURNenNZbUh4b2EyZ1EwekdiNXNtVU1adVlXRE9mT25WMlhuNThmOHViTm0vK00wSkJrTk5XUjlUaHo5Y21KZi8vL2l3R0ZXSUg0SDh3UVJrYkdmOG5KeVpGWExseXMvdjdqeDlmSHo1NWF2bnYzRHBUTWY0SU5ZR0prWURQVWxIVTllKzN4RVNEM0kwZ0lpTm1BbUJPVXNxR1lnWldGUllHWm1Wbm94OCtmKzREY3p5Qkx3QWFveTR1WVAzLzc1Zk9uTHordTRVbXhJTU80b0M3N0FLV0JZY2ZJd0dpZ0xoMTAvc2JUclVEK0QwS1pCOE5rWmlaR1JqRmhYdG5ucno4OUlsVXpDQUFBbnpEeUVhcmVnL01BQUFBQVNVVk9SSzVDWUlJPVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvaW1hZ2VzL2NoZWNrZXJlZC1mbGFnLWljb24ucG5nXG4vLyBtb2R1bGUgaWQgPSA3MDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2d3LWd0bS1ncmlkLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ndG0tZ3JpZC9ndy1ndG0tZ3JpZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA3MDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucGFyZW50VG9wIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmNoaWxkVG9wIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWd0bS1ncmlkL2d3LWd0bS1ncmlkLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDcwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UgfSBmcm9tIFwibmd4LXRvYXN0clwiO1xyXG5cclxuaW1wb3J0IHsgYXBwTGFiZWxzIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvYXBwTGFiZWxzXCI7XHJcbmltcG9ydCB7IEdlbmVyYWxTY3JpcHRzIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvZ2VuZXJhbC5zY3JpcHRzXCI7XHJcblxyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQgeyBIdHRwS2xhbnRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2h0dHAta2xhbnQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEJzTG9jYWxlU2VydmljZSB9IGZyb20gXCJuZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXJcIjtcclxuaW1wb3J0IHsgU2dzR1RNWm9la1ZlbGRlbiB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL3Nnc0NsYXNzZXMuc2NyaXB0c1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJndy1ndG0tem9la3VpdGdlYnJlaWRcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2d3LWd0bS16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9ndy1ndG0tem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzcycpXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIGd3R1RNWm9la1VpdGdlYnJlaWRDb21wb25lbnQgZXh0ZW5kcyBHZW5lcmFsU2NyaXB0cyBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBhcHBMYWJlbHMgPSBhcHBMYWJlbHM7XHJcbiAgICB6a0Zvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgICBiZXN0QmVkcmlqZkxpc3Q6IGFueVtdO1xyXG4gICAgem9la1ZlbGRlbjogU2dzR1RNWm9la1ZlbGRlbiA9IG51bGw7XHJcblxyXG4gICAgQE91dHB1dCgpIHNlYXJjaGluZzogRXZlbnRFbWl0dGVyPFNnc0dUTVpvZWtWZWxkZW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxTZ3NHVE1ab2VrVmVsZGVuPigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX3RvYXN0cjogVG9hc3RyU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGZiOiBGb3JtQnVpbGRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2xvY2FsZVNlcnZpY2U6IEJzTG9jYWxlU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgaHR0cEtsYW50OiBIdHRwS2xhbnRTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgQEluamVjdChcIkJBU0VfVVJMXCIpIHByaXZhdGUgcmVhZG9ubHkgX2Jhc2VVcmw6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcclxuICAgICAgICBzdXBlcihfdG9hc3RyKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBOZWVkZWQgY29uZmlndXJhdGlvbiBmb3IgdGhlIGJzRGF0ZXBpY2tlciB0byBhY2NlcHQgZGQvTU0veXl5eSBmb3JtYXR0aW5nXHJcbiAgICAgICAgdGhpcy5fbG9jYWxlU2VydmljZS51c2UoXCJib290c3RyYXAtbG9jYWxlLW5sYmVcIik7XHJcblxyXG4gICAgICAgIHRoaXMuemtGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICAgICAgIEd0bUlkOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIGRhdFZhbjogW1wiXCJdLFxyXG4gICAgICAgICAgICBkYXRUb3Q6IFtcIlwiXSxcclxuICAgICAgICAgICAgU3RyYWF0OiBbXCJcIl0sXHJcbiAgICAgICAgICAgIEdlbWVlbnRlOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIFRvcElkOiBbXCItMVwiXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmh0dHBLbGFudC5UT1BMaXN0KCkudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKGxzdDogYW55W10pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChsc3QgIT0gbnVsbCAmJiBsc3QgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iZXN0QmVkcmlqZkxpc3QgPSBsc3Q7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJhaXNlU2VhcmNoKCkge1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbiA9IG5ldyBTZ3NHVE1ab2VrVmVsZGVuKCk7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmd0bUlkID0gdGhpcy56a0Zvcm0uY29udHJvbHMuR3RtSWQudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmRhdFZhbiA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLmRhdFZhbi52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4uZGF0VG90ID0gdGhpcy56a0Zvcm0uY29udHJvbHMuZGF0VG90LnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5zdHJhYXQgPSB0aGlzLnprRm9ybS5jb250cm9scy5TdHJhYXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmdlbWVlbnRlID0gdGhpcy56a0Zvcm0uY29udHJvbHMuR2VtZWVudGUudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLnRvcElkID0gdGhpcy56a0Zvcm0uY29udHJvbHMuVG9wSWQudmFsdWU7XHJcblxyXG4gICAgICAgIHRoaXMuc2VhcmNoaW5nLmVtaXQodGhpcy56b2VrVmVsZGVuKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWd0bS16b2VrdWl0Z2VicmVpZC9ndy1ndG0tem9la3VpdGdlYnJlaWQuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxmb3JtIFtmb3JtR3JvdXBdPVxcXCJ6a0Zvcm1cXFwiIGNsYXNzPVxcXCJjb250YWluZXItZmx1aWQgcGFkZGluZ1RvcDMwcHhcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGxhYmVsIGZvcj1cXFwidHh0R1RNSWRcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5HVE0gSWQ6PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0eHRHVE1JZFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJHdG1JZFxcXCIgQWxsb3dPbmx5TnVtYmVycyBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGxhYmVsIGZvcj1cXFwiZHRlVmFuXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+VmFuOjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLThcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwiZHRlVmFuXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImRhdFZhblxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCBuZy10cmltLWlnbm9yZVxcXCIgYnNEYXRlcGlja2VyIHBsYWNlbWVudD1cXFwiYm90dG9tIGxlZnRcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBbYnNDb25maWddPVxcXCJ7IHNob3dXZWVrTnVtYmVyczogZmFsc2UgfVxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxsYWJlbCBmb3I9XFxcImR0ZVRvdFxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPlRvdDo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS04XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcImR0ZVRvdFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJkYXRUb3RcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgbmctdHJpbS1pZ25vcmVcXFwiIGJzRGF0ZXBpY2tlciBwbGFjZW1lbnQ9XFxcImJvdHRvbSBsZWZ0XFxcIiBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCIgRG90dGVkQm9yZGVyQmVsb3cgW2JzQ29uZmlnXT1cXFwieyBzaG93V2Vla051bWJlcnM6IGZhbHNlIH1cXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48bGFiZWwgZm9yPVxcXCJ0eHRTdHJhYXRcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5TdHJhYXQ6PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0eHRTdHJhYXRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiU3RyYWF0XFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGxhYmVsIGZvcj1cXFwidHh0R2VtZWVudGVcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5HZW1lZW50ZTo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS04XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInR4dEdlbWVlbnRlXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkdlbWVlbnRlXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGxhYmVsIGZvcj1cXFwiZGRsVG9wXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+VE9QOjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24gY29sLXNtLThcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJkZGxUb3BcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiVG9wSWRcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJ3aWR0aDEwMHBlcmNlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiLTFcXFwiPlNlbGVjdGVlcjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCBvIG9mIGJlc3RCZWRyaWpmTGlzdFxcXCIgW3ZhbHVlXT1cXFwiby5pZFxcXCI+e3tvLmRlc2NyaXB0aW9ufX08L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTggY29sLXNtLW9mZnNldC00XFxcIj48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwicmFpc2VTZWFyY2goKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCI+e3thcHBMYWJlbHMuU2VuZH19PC9idXR0b24+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9mb3JtPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ndG0tem9la3VpdGdlYnJlaWQvZ3ctZ3RtLXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA3MDhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2d3LWd0bS16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctZ3RtLXpvZWt1aXRnZWJyZWlkL2d3LWd0bS16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA3MDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ndG0tem9la3VpdGdlYnJlaWQvZ3ctZ3RtLXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDcxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEdlbmVyYWxTY3JpcHRzIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvZ2VuZXJhbC5zY3JpcHRzXCI7XHJcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UgfSBmcm9tIFwibmd4LXRvYXN0clwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEh0dHBHVlRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2h0dHAtZ3Z0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSUdWVFN0YXR1cyB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL2ludGVyZmFjZXMuc2NyaXB0c1wiO1xyXG5pbXBvcnQgeyBJU2dzR1ZUSXRlbSB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL3Nnc0ludGVyZmFjZXMuc2NyaXB0c1wiO1xyXG5pbXBvcnQgeyBTZ3NHVlRab2VrVmVsZGVuIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvc2dzQ2xhc3Nlcy5zY3JpcHRzXCI7XHJcbmltcG9ydCB7IGFwcExhYmVscyB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL2FwcExhYmVsc1wiO1xyXG5pbXBvcnQgeyBEYXRhdGFibGVDb21wb25lbnQgfSBmcm9tIFwiQHN3aW1sYW5lL25neC1kYXRhdGFibGVcIjtcclxuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImd3LWd2dC1ncmlkXCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ndy1ndnQtZ3JpZC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9ndy1ndnQtZ3JpZC5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgZ3dHVlRHcmlkQ29tcG9uZW50IGV4dGVuZHMgR2VuZXJhbFNjcmlwdHMgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgYXBwTGFiZWxzID0gYXBwTGFiZWxzO1xyXG5cclxuXHJcbiAgICBTdGF0dXNEcm9wZG93bkxpc3Q6IElHVlRTdGF0dXNbXSA9IG51bGw7XHJcbiAgICBTdGF0dXNMaXN0OiBJU2dzR1ZUSXRlbVtdID0gbnVsbDtcclxuICAgIHJvd3M6IElTZ3NHVlRJdGVtW10gPSBudWxsO1xyXG4gICAgdGVtcDogYW55W10gPSBbXTtcclxuICAgIEBWaWV3Q2hpbGQoRGF0YXRhYmxlQ29tcG9uZW50KSB0YWJsZTogRGF0YXRhYmxlQ29tcG9uZW50O1xyXG5cclxuICAgIEBJbnB1dCgpIHRpdGxlID0gXCJcIjtcclxuICAgIFN0YXR1c0lkOiBudW1iZXIgPSAxO1xyXG4gICAgaXNFeHRlbmRlZFNlYXJjaDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGZvck5pZXV3ZUFhbnZyYWdlbiA9IHRydWU7XHJcbiAgICBASW5wdXQoJ05pZXV3ZUFhbnZyYWdlbicpXHJcbiAgICBnZXQgTmlldXdlQWFudnJhZ2VuKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvck5pZXV3ZUFhbnZyYWdlbjtcclxuICAgIH1cclxuICAgIHNldCBOaWV1d2VBYW52cmFnZW4odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmZvck5pZXV3ZUFhbnZyYWdlbiA9IFwiXCIgKyB2YWx1ZSAhPT0gXCJmYWxzZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZVNlYXJjaCA9IHRydWU7XHJcbiAgICBASW5wdXQoJ0V4dGVuZGVkU2VhcmNoJylcclxuICAgIGdldCBFeHRlbmRlZFNlYXJjaCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51c2VTZWFyY2g7XHJcbiAgICB9XHJcbiAgICBzZXQgRXh0ZW5kZWRTZWFyY2godmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnVzZVNlYXJjaCA9IFwiXCIgKyB2YWx1ZSAhPT0gXCJmYWxzZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbkRlbGV0ZSA9IGZhbHNlO1xyXG4gICAgQElucHV0KCdBbGxvd0RlbGV0ZScpXHJcbiAgICBnZXQgQWxsb3dEZWxldGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FuRGVsZXRlO1xyXG4gICAgfVxyXG4gICAgc2V0IEFsbG93RGVsZXRlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5jYW5EZWxldGUgPSBcIlwiICsgdmFsdWUgIT09IFwiZmFsc2VcIjtcclxuICAgIH1cclxuXHJcbiAgICBTdHNGb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfdG9hc3RyOiBUb2FzdHJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgaHR0cEdWVDogSHR0cEdWVFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG4gICAgICAgIHN1cGVyKF90b2FzdHIpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLlN0c0Zvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgICAgICAgc3RzOiBbLTFdLFxyXG4gICAgICAgICAgICBndnROdW1tZXI6IFtcIlwiXSxcclxuICAgICAgICAgICAgbmFhbTogW1wiXCJdLFxyXG4gICAgICAgICAgICBjb2RlOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIGdlbTogW1wiXCJdLFxyXG4gICAgICAgICAgICBhYW52cmFhZ0RhdHVtOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIHN0YXR1c0RhdHVtOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIGluZGllbmluZ3N3aWp6ZTogW1wiXCJdLFxyXG4gICAgICAgICAgICBnZWZhY3R1cmVlcmQ6IFtcIlwiXSxcclxuICAgICAgICAgICAgZ3Z0U3RzOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIGhvZXY6IFtcIlwiXSxcclxuICAgICAgICAgICAgc3RhcnREYXR1bTogW1wiXCJdXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaHR0cEdWVC5TdGF0dXNEZWZpbml0aW9uTGlzdChcIkdWVFwiLCB0aGlzLk5pZXV3ZUFhbnZyYWdlbikudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKGxzdDogSUdWVFN0YXR1c1tdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobHN0ICE9IG51bGwgJiYgbHN0ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU3RhdHVzRHJvcGRvd25MaXN0ID0gWy4uLmxzdF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLlN0c0Zvcm0ucGF0Y2hWYWx1ZSh7IHN0czogKHRoaXMuTmlldXdlQWFudnJhZ2VuID8gJzAnIDogJzEnKSB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzQ2hhbmdlZCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0dXNDaGFuZ2VkKCkge1xyXG4gICAgICAgIHRoaXMuU3RhdHVzSWQgPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuc3RzLnZhbHVlO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5TdHNGb3JtLmNvbnRyb2xzLnN0cy52YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiLTFcIjogLy8gU2VsZWN0ZWVyXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCIwXCI6IC8vIE5pZXV3ZSBBYW52cmFnZW4gXHJcbiAgICAgICAgICAgICAgICB0aGlzLk5pZXV3ZUFhbnZyYWdlbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRTdGF0dXNMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDogLy8gU3RhdHVzXHJcbiAgICAgICAgICAgICAgICB0aGlzLk5pZXV3ZUFhbnZyYWdlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU3RhdHVzTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRTdGF0dXNMaXN0KCkge1xyXG4gICAgICAgIHRoaXMuaHR0cEdWVC5zZ3NTdGF0dXNMaXN0KHRoaXMuU3RhdHVzSWQsIFwiVFwiKS50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbigobHN0OiBJU2dzR1ZUSXRlbVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSBsc3Q7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXAgPSBbLi4ubHN0XTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJGb3JtRmllbGRzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRXh0ZW5kZWRTZWFyY2goem9la1ZlbGRlbjogU2dzR1ZUWm9la1ZlbGRlbikge1xyXG4gICAgICAgIHRoaXMuaHR0cEdWVC5nd1pvZWtMaXN0KHpvZWtWZWxkZW4pLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKChsc3Q6IElTZ3NHVlRJdGVtW10pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IGxzdDtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcCA9IFsuLi5sc3RdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckZvcm1GaWVsZHMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJGb3JtRmllbGRzKCkge1xyXG4gICAgICAgIC8vIENsZWFyIGFsbCBGb3JtIFZhbHVlcyBleGNlcHQgc3RzXHJcbiAgICAgICAgdGhpcy5TdHNGb3JtLnBhdGNoVmFsdWUoe1xyXG4gICAgICAgICAgICBndnROdW1tZXI6IFwiXCIsXHJcbiAgICAgICAgICAgIG5hYW06IFwiXCIsXHJcbiAgICAgICAgICAgIGNvZGU6IFwiXCIsXHJcbiAgICAgICAgICAgIGdlbTogXCJcIixcclxuICAgICAgICAgICAgYWFudnJhYWdEYXR1bTogXCJcIixcclxuICAgICAgICAgICAgc3RhdHVzRGF0dW06IFwiXCIsXHJcbiAgICAgICAgICAgIGluZGllbmluZ3N3aWp6ZTogXCJcIixcclxuICAgICAgICAgICAgZ2VmYWN0dXJlZXJkOiBcIlwiLFxyXG4gICAgICAgICAgICBndnRTdHM6IFwiXCIsXHJcbiAgICAgICAgICAgIGhvZXY6IFwiXCIsXHJcbiAgICAgICAgICAgIHN0YXJ0RGF0dW06IFwiXCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXIoKSB7XHJcbiAgICAgICAgY29uc3QgZ3Z0TnVtbWVyID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLmd2dE51bW1lci52YWx1ZTtcclxuICAgICAgICBjb25zdCBuYWFtID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLm5hYW0udmFsdWU7XHJcbiAgICAgICAgY29uc3QgY29kZSA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5jb2RlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGdlbSA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5nZW0udmFsdWU7XHJcbiAgICAgICAgY29uc3QgYWFudnJhYWdEYXR1bSA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5hYW52cmFhZ0RhdHVtLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHN0YXR1c0RhdHVtID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLnN0YXR1c0RhdHVtLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGluZGllbmluZ3N3aWp6ZSA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5pbmRpZW5pbmdzd2lqemUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZ2VmYWN0dXJlZXJkID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLmdlZmFjdHVyZWVyZC52YWx1ZTtcclxuICAgICAgICBjb25zdCBndnRTdHMgPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuZ3Z0U3RzLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGhvZXYgPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuaG9ldi52YWx1ZTtcclxuICAgICAgICBjb25zdCBzdGFydERhdHVtID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLnN0YXJ0RGF0dW0udmFsdWU7XHJcbiAgICAgICAgY29uc3QgZHAgPSBuZXcgRGF0ZVBpcGUoXCJlbi1VU1wiKTtcclxuXHJcbiAgICAgICAgLy8gZmlsdGVyIG91ciBkYXRhXHJcbiAgICAgICAgY29uc3QgdGVtcCA9IHRoaXMudGVtcC5maWx0ZXIoKHJvdzogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBhYW52cmFhZ0RhdHVtQXNTdHJpbmc6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAoYWFudnJhYWdEYXR1bSA+IFwiXCIpIHsgYWFudnJhYWdEYXR1bUFzU3RyaW5nID0gZHAudHJhbnNmb3JtKHJvdy5hYW52cmFhZ0RhdHVtLCBcImRkL01NL3l5eXlcIik7IH1cclxuICAgICAgICAgICAgdmFyIHN0YXR1c0RhdHVtQXNTdHJpbmc6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzRGF0dW0gPiBcIlwiKSB7IHN0YXR1c0RhdHVtQXNTdHJpbmcgPSBkcC50cmFuc2Zvcm0ocm93LnN0YXR1c0RhdHVtLCBcImRkL01NL3l5eXlcIik7IH1cclxuICAgICAgICAgICAgdmFyIHN0YXJ0RGF0dW1Bc1N0cmluZzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChzdGFydERhdHVtID4gXCJcIikgeyBzdGFydERhdHVtQXNTdHJpbmcgPSBkcC50cmFuc2Zvcm0ocm93LnN0YXJ0RGF0dW0sIFwiZGQvTU0veXl5eVwiKTsgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuICghZ3Z0TnVtbWVyIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChyb3cuYmJyTnVtbWVyKSAmJiByb3cuYmJyTnVtbWVyLnRvU3RyaW5nKCkuaW5kZXhPZihndnROdW1tZXIpICE9PSAtMSkpXHJcbiAgICAgICAgICAgICAgICAmJiAoIW5hYW0gfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHJvdy5uYWFtKSAmJiByb3cubmFhbS50b0xvd2VyQ2FzZSgpLmluZGV4T2YobmFhbSkgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghY29kZSB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQocm93LmJlcm9lcHNvcmdhbmlzYXRpZWNvZGUpICYmIHJvdy5iZXJvZXBzb3JnYW5pc2F0aWVjb2RlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihjb2RlKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFnZW0gfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHJvdy5wbGFhdHMpICYmIHJvdy5wbGFhdHMudG9Mb3dlckNhc2UoKS5pbmRleE9mKGdlbSkgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghYWFudnJhYWdEYXR1bSB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQoYWFudnJhYWdEYXR1bUFzU3RyaW5nKSAmJiBhYW52cmFhZ0RhdHVtQXNTdHJpbmcuaW5kZXhPZihhYW52cmFhZ0RhdHVtKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFzdGF0dXNEYXR1bSB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQoc3RhdHVzRGF0dW1Bc1N0cmluZykgJiYgc3RhdHVzRGF0dW1Bc1N0cmluZy5pbmRleE9mKHN0YXR1c0RhdHVtKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFpbmRpZW5pbmdzd2lqemUgfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHJvdy5pbmRpZW5pbmdzd2lqemUpICYmIHJvdy5pbmRpZW5pbmdzd2lqemUudG9Mb3dlckNhc2UoKS5pbmRleE9mKGluZGllbmluZ3N3aWp6ZSkgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghZ2VmYWN0dXJlZXJkIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChyb3cuZ2VmYWN0dXJlZXJkKSAmJiByb3cuZ2VmYWN0dXJlZXJkLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihnZWZhY3R1cmVlcmQpICE9PSAtMSkpXHJcbiAgICAgICAgICAgICAgICAmJiAoIWd2dFN0cyB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQocm93LnN0YXR1cykgJiYgcm93LnN0YXR1cy50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZ3Z0U3RzKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFob2V2IHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChyb3cuaG9ldmVlbGhlaWQpICYmIHJvdy5ob2V2ZWVsaGVpZC50b1N0cmluZygpLmluZGV4T2YoaG9ldikgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghc3RhcnREYXR1bSB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQoc3RhcnREYXR1bUFzU3RyaW5nKSAmJiBzdGFydERhdHVtQXNTdHJpbmcuaW5kZXhPZihzdGFydERhdHVtKSAhPT0gLTEpKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgdGhlIHJvd3NcclxuICAgICAgICB0aGlzLnJvd3MgPSB0ZW1wO1xyXG4gICAgICAgIC8vIFdoZW5ldmVyIHRoZSBmaWx0ZXIgY2hhbmdlcywgYWx3YXlzIGdvIGJhY2sgdG8gdGhlIGZpcnN0IHBhZ2VcclxuICAgICAgICB0aGlzLnRhYmxlLm9mZnNldCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgb25BY3RpdmF0ZShldmVudDogYW55KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IFwiZGJsY2xpY2tcIikge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmtUb0dWVChldmVudC5yb3dbXCJndnROdW1tZXJcIl0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRSb3dDbGFzcyhyb3c6IGFueSkge1xyXG4gICAgICAgIHJldHVybiBcImlidG5cIjtcclxuICAgIH1cclxuXHJcbiAgICBsaW5rVG9HVlQoZ3Z0SWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9ndy9ndnQtZWRpdFwiLCBndnRJZF0pOyBcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVHVlQoZ3Z0SWQ6IG51bWJlcikge1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcblxyXG4gICAgVG9nZ2xlRXh0ZW5kZWRTZWFyY2goKSB7XHJcbiAgICAgICAgdGhpcy5pc0V4dGVuZGVkU2VhcmNoID0gIXRoaXMuaXNFeHRlbmRlZFNlYXJjaDtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWd2dC1ncmlkL2d3LWd2dC1ncmlkLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybSBbZm9ybUdyb3VwXT1cXFwiU3RzRm9ybVxcXCIgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZCBwYWRkaW5nVG9wMTBweFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgKm5nSWY9XFxcInVzZVNlYXJjaFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tM1xcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIChjbGljayk9XFxcIlRvZ2dsZUV4dGVuZGVkU2VhcmNoKClcXFwiPnt7IGlzRXh0ZW5kZWRTZWFyY2ggPyAnRW5rZWx2b3VkaWcgem9la2VuJyA6ICdHZWF2YW5jZWVyZCB6b2VrZW4nIH19PC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgKm5nSWY9XFxcInVzZVNlYXJjaCAmJiAhaXNFeHRlbmRlZFNlYXJjaFxcXCIgY2xhc3M9XFxcImNvbC1zbS05XFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcInBhZGRpbmdSaWdodDEwcHhcXFwiPkZpbHRlciBzdGF0dXM8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxzZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVxcXCJzdHNcXFwiIERvdHRlZEJvcmRlckJlbG93IChjaGFuZ2UpPVxcXCJzdGF0dXNDaGFuZ2VkKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCItMVxcXCI+U2VsZWN0ZWVyPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgc3RzIG9mIFN0YXR1c0Ryb3Bkb3duTGlzdFxcXCIgW3ZhbHVlXT1cXFwic3RzLmJiclN0YXR1c0lEXFxcIiBbaW5uZXJIVE1MXT1cXFwic3RzLnN0YXR1c1xcXCI+PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgKm5nSWY9XFxcInVzZVNlYXJjaCAmJiBpc0V4dGVuZGVkU2VhcmNoXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMlxcXCI+PGd3LWd2dC16b2VrdWl0Z2VicmVpZCAoc2VhcmNoaW5nKT1cXFwib25FeHRlbmRlZFNlYXJjaCgkZXZlbnQpXFxcIj48L2d3LWd2dC16b2VrdWl0Z2VicmVpZD48L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIk5neFRhYmxlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHAgKm5nSWY9XFxcImZvck5pZXV3ZUFhbnZyYWdlbiA9PSBmYWxzZVxcXCIgY2xhc3M9XFxcInB1bGwtbGVmdCBOZ3hUaXRsZVxcXCI+e3t0aXRsZX19PC9wPlxcclxcbiAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZSAjdGFibGVcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJvb3RzdHJhcFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFjdGl2YXRlKT1cXFwib25BY3RpdmF0ZSgkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm93c109XFxcInJvd3NcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb2x1bW5Nb2RlXT1cXFwiJ2ZsZXgnXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaGVhZGVySGVpZ2h0XT1cXFwiNTBcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb290ZXJIZWlnaHRdPVxcXCI0MFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xpbWl0XT1cXFwiYXBwTGFiZWxzLnRhYmxlVmlld1Jvd3NcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3dDbGFzc109XFxcImdldFJvd0NsYXNzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY3NzQ2xhc3Nlc109XFxcImFwcExhYmVscy5pY29uc0Nzc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21lc3NhZ2VzXT1cXFwie3RvdGFsTWVzc2FnZTogYXBwTGFiZWxzLlRvdGFsLnRvTG93ZXJDYXNlKCksIGVtcHR5TWVzc2FnZTogYXBwTGFiZWxzLk5vRGF0YVRvRGlzcGxheX1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzb3J0c109XFxcIlt7cHJvcDonYmJyTnVtbWVyJywgZGlyOidkZXNjJyB9XVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jvd0hlaWdodF09XFxcIidhdXRvJ1xcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMVxcXCIgbmFtZT1cXFwibmlldEdvZWRHZWtldXJkXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtcm93PVxcXCJyb3dcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XFxcImNvbG9yOiByZWRcXFwiPjxiPnt7cm93WyduaWV0R29lZEdla2V1cmQnXX19PC9iPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBwcm9wPVxcXCJiYnJOdW1tZXJcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJMYWJlbFxcXCI+TnVtbWVyPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImd2dE51bW1lclxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtcm93PVxcXCJyb3dcXFwiIGxldC12YWx1ZT1cXFwidmFsdWVcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcInBkZkxpbmtcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvYm9kZW1iZWhlZXJyYXBwb3J0LWRldGFpbCddXFxcIiBbcXVlcnlQYXJhbXNdPVxcXCJ7YmJySWQ6cm93WydiYnJOdW1tZXInXX1cXFwiPjxsYWJlbCBjbGFzcz1cXFwidGV4dFxcXCI+e3tyb3dbJ2Jick51bW1lciddfX08L2xhYmVsPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIzXFxcIiBwcm9wPVxcXCJuYWFtXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyTGFiZWxcXFwiPktsYW50PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIm5hYW1cXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3ZhbHVlfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMVxcXCIgcHJvcD1cXFwiYmVyb2Vwc29yZ2FuaXNhdGllY29kZVxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckxhYmVsXFxcIj5Db2RlPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJjb2RlXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1yb3c9XFxcInJvd1xcXCIgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3ZhbHVlfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMlxcXCIgcHJvcD1cXFwicGxhYXRzXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyTGFiZWxcXFwiPkdlbWVlbnRlPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJnZW1cXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXJvdz1cXFwicm93XFxcIiBsZXQtdmFsdWU9XFxcInZhbHVlXFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7dmFsdWV9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBuYW1lPVxcXCJhYW52cmFhZ0RhdHVtXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCIgTmd4RmlsdGVyTGFiZWxcXFwiPkRhdHVtIGluPC9zcGFuPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImFhbnZyYWFnRGF0dW1cXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3ZhbHVlIHwgZGF0ZTpcXFwiZGQvTU0veXl5eVxcXCJ9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIG5hbWU9XFxcInN0YXR1c0RhdHVtXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCIgTmd4RmlsdGVyTGFiZWxcXFwiPkRhdHVtIHVpdDwvc3Bhbj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJzdGF0dXNEYXR1bVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtdmFsdWU9XFxcInZhbHVlXFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dmFsdWUgfCBkYXRlOlxcXCJkZC9NTS95eXl5XFxcIn19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMVxcXCIgcHJvcD1cXFwiaW5kaWVuaW5nc3dpanplXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCIgTmd4RmlsdGVyTGFiZWxcXFwiPkFhbnZ1bHBsYW48L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiaW5kaWVuaW5nc3dpanplXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIHByb3A9XFxcImhvZXZlZWxoZWlkXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyTGFiZWxcXFwiPkhvZXZlZWxoZWlkPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImhvZXZcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXJvdz1cXFwicm93XFxcIiBsZXQtdmFsdWU9XFxcInZhbHVlXFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7cm93Wydob2V2ZWVsaGVpZCddfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMVxcXCIgcHJvcD1cXFwiZ2VmYWN0dXJlZXJkXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCIgTmd4RmlsdGVyTGFiZWxcXFwiPkdlZmFjdC48L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiZ2VmYWN0dXJlZXJkXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjNcXFwiIHByb3A9XFxcInN0YXR1c1xcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiIE5neEZpbHRlckxhYmVsXFxcIj5HVlQgU3RhdHVzPC9zcGFuPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImd2dFN0c1xcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBuYW1lPVxcXCJzdGFydERhdHVtR3JvbmR3ZXJrZW5cXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIiBOZ3hGaWx0ZXJMYWJlbFxcXCI+U3RhcnQgRGF0dW08L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwic3RhcnREYXR1bVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtdmFsdWU9XFxcInZhbHVlXFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dmFsdWUgfCBkYXRlOlxcXCJkZC9NTS95eXl5XFxcIn19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMVxcXCIgbmFtZT1cXFwiRGV0YWlsXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtcm93PVxcXCJyb3dcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uLy4uLy4uLy4uL2ltYWdlcy9pY29fZWRpdHJlY29yZC5naWZcIikgKyBcIlxcXCIgY2xhc3M9XFxcImlidG5cXFwiIChjbGljayk9XFxcImxpbmtUb0dWVChyb3dbJ2Jick51bW1lciddKVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiAqbmdJZj1cXFwiY2FuRGVsZXRlXFxcIiBbZmxleEdyb3ddPVxcXCIxXFxcIiBuYW1lPVxcXCJEZXRhaWxcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1yb3c9XFxcInJvd1xcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vLi4vLi4vLi4vaW1hZ2VzL2ljb19kZWxldGUucG5nXCIpICsgXCJcXFwiIGNsYXNzPVxcXCJpYnRuXFxcIiAoY2xpY2spPVxcXCJkZWxldGVHVlQocm93WydiYnJOdW1tZXInXSlcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Zvcm0+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWd2dC1ncmlkL2d3LWd2dC1ncmlkLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA3MTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2d3LWd2dC1ncmlkLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ndnQtZ3JpZC9ndy1ndnQtZ3JpZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA3MTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ndnQtZ3JpZC9ndy1ndnQtZ3JpZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA3MTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24sIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBUb2FzdHJTZXJ2aWNlIH0gZnJvbSBcIm5neC10b2FzdHJcIjtcclxuXHJcbmltcG9ydCB7IGFwcExhYmVscyB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL2FwcExhYmVsc1wiO1xyXG5pbXBvcnQgeyBHZW5lcmFsU2NyaXB0cyB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL2dlbmVyYWwuc2NyaXB0c1wiO1xyXG5cclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHsgSHR0cEJCUlNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaHR0cC1iYnIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIdHRwRG9zc2llclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaHR0cC1kb3NzaWVyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSHR0cEtsYW50U2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9odHRwLWtsYW50LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSHR0cFRWU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9odHRwLXR2LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBCc0xvY2FsZVNlcnZpY2UgfSBmcm9tIFwibmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyXCI7XHJcbmltcG9ydCB7IFNnc0dWVFpvZWtWZWxkZW4gfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9zZ3NDbGFzc2VzLnNjcmlwdHNcIjtcclxuaW1wb3J0IHsgSVNnc0tsYW50Q29tYm9MaXN0SXRlbSwgSVNnc0Rvc3NpZXJDb21ib0xpc3RJdGVtLCBJU2dzQmVzdEFhcmRMaXN0SXRlbSB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL3Nnc0ludGVyZmFjZXMuc2NyaXB0c1wiO1xyXG5pbXBvcnQgeyBJVFZTdGF0dXNEZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvaW50ZXJmYWNlcy5zY3JpcHRzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImd3LWd2dC16b2VrdWl0Z2VicmVpZFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZ3ctZ3Z0LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2d3LWd2dC16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuY3NzJyldLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgZ3dHVlRab2VrVWl0Z2VicmVpZENvbXBvbmVudCBleHRlbmRzIEdlbmVyYWxTY3JpcHRzIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGFwcExhYmVscyA9IGFwcExhYmVscztcclxuICAgIHprRm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICAgIEtsYW50TGlzdEl0ZW1zOiBJU2dzS2xhbnRDb21ib0xpc3RJdGVtW10gPSBudWxsO1xyXG4gICAgRG9zc2llckJlaGVlcmRlckxpc3RJdGVtczogSVNnc0Rvc3NpZXJDb21ib0xpc3RJdGVtW10gPSBudWxsO1xyXG4gICAgQmVzdGVtbWluZ3NhYXJkTGlzdEl0ZW1zOiBJU2dzQmVzdEFhcmRMaXN0SXRlbVtdID0gbnVsbDtcclxuICAgIFN0YXR1c0xpc3RJdGVtczogSVRWU3RhdHVzRGVmaW5pdGlvbltdID0gbnVsbDtcclxuXHJcbiAgICB6b2VrVmVsZGVuOiBTZ3NHVlRab2VrVmVsZGVuID0gbnVsbDtcclxuICAgIEBPdXRwdXQoKSBzZWFyY2hpbmc6IEV2ZW50RW1pdHRlcjxTZ3NHVlRab2VrVmVsZGVuPiA9IG5ldyBFdmVudEVtaXR0ZXI8U2dzR1ZUWm9la1ZlbGRlbj4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF90b2FzdHI6IFRvYXN0clNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGZiOiBGb3JtQnVpbGRlcixcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9sb2NhbGVTZXJ2aWNlOiBCc0xvY2FsZVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBodHRwQmJyOiBIdHRwQkJSU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGh0dHBEb3NzaWVyOiBIdHRwRG9zc2llclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBodHRwS2xhbnQ6IEh0dHBLbGFudFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBodHRwVFY6IEh0dHBUVlNlcnZpY2UsXHJcbiAgICAgICAgQEluamVjdChcIkJBU0VfVVJMXCIpIHByaXZhdGUgcmVhZG9ubHkgX2Jhc2VVcmw6IHN0cmluZyxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9zYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xyXG4gICAgICAgIHN1cGVyKF90b2FzdHIpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE5lZWRlZCBjb25maWd1cmF0aW9uIGZvciB0aGUgYnNEYXRlcGlja2VyIHRvIGFjY2VwdCBkZC9NTS95eXl5IGZvcm1hdHRpbmdcclxuICAgICAgICB0aGlzLl9sb2NhbGVTZXJ2aWNlLnVzZShcImJvb3RzdHJhcC1sb2NhbGUtbmxiZVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy56a0Zvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgICAgICAgQ29kZTogW1wiXCJdLFxyXG4gICAgICAgICAgICBUdklkOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIEtsYW50SWQ6IFtcIi0xXCJdLFxyXG4gICAgICAgICAgICBEb3NzaWVyQmVoZWVyZGVySWQ6IFtcIi0xXCJdLFxyXG4gICAgICAgICAgICBTdGF0dXNJZDogW1wiLTFcIl0sXHJcbiAgICAgICAgICAgIEJlc3RlbW1pbmdzYWFyZElkOiBbXCItMVwiXSxcclxuICAgICAgICAgICAgR2VmYWN0dXJlZXJkOiBbXCItMVwiXSxcclxuICAgICAgICAgICAgU3RyYWF0OiBbXCJcIl0sXHJcbiAgICAgICAgICAgIFBvc3Rjb2RlOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIEdlbWVlbnRlOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIExhbWJlcnRYOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIExhbWJlcnRZOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIExhbWJlcnRSYW5nZTogW1wiLTFcIl0sXHJcbiAgICAgICAgICAgIFZlcnRyZWtTdHJhYXQ6IFtcIlwiXSxcclxuICAgICAgICAgICAgVmVydHJla0dlbWVlbnRlOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIGRhdFZhbjogW1wiXCJdLFxyXG4gICAgICAgICAgICBkYXRUb3Q6IFtcIlwiXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWREcm9wZG93bnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkRHJvcGRvd25zKCkge1xyXG4gICAgICAgIHRoaXMuaHR0cEtsYW50LnNnc0NvbWJvTGlzdEl0ZW1zKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgobHN0OiBJU2dzS2xhbnRDb21ib0xpc3RJdGVtW10pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChsc3QgIT0gbnVsbCAmJiBsc3QgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5LbGFudExpc3RJdGVtcyA9IFsuLi5sc3RdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5odHRwRG9zc2llci5zZ3NDb21ib0xpc3RJdGVtcygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGxzdDogSVNnc0Rvc3NpZXJDb21ib0xpc3RJdGVtW10pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChsc3QgIT0gbnVsbCAmJiBsc3QgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Eb3NzaWVyQmVoZWVyZGVyTGlzdEl0ZW1zID0gWy4uLmxzdF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmh0dHBCYnIuc2dzQmVzdGVtbWluZ3NhYXJkTGlzdEl0ZW1zKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgobHN0OiBJU2dzQmVzdEFhcmRMaXN0SXRlbVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobHN0ICE9IG51bGwgJiYgbHN0ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQmVzdGVtbWluZ3NhYXJkTGlzdEl0ZW1zID0gWy4uLmxzdF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmh0dHBUVi5TdGF0dXNEZWZpbml0aW9uTGlzdChmYWxzZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgobHN0OiBJVFZTdGF0dXNEZWZpbml0aW9uW10pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChsc3QgIT0gbnVsbCAmJiBsc3QgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TdGF0dXNMaXN0SXRlbXMgPSBbLi4ubHN0XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmFpc2VTZWFyY2goKSB7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuID0gbmV3IFNnc0dWVFpvZWtWZWxkZW4oKTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4uY29kZSA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLkNvZGUudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLnR2SWQgPSB0aGlzLnprRm9ybS5jb250cm9scy5UdklkLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5rbGFudElkID0gdGhpcy56a0Zvcm0uY29udHJvbHMuS2xhbnRJZC52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4uZG9zc2llckJlaGVlcmRlcklkID0gdGhpcy56a0Zvcm0uY29udHJvbHMuRG9zc2llckJlaGVlcmRlcklkLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5zdGF0dXNJZCA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLlN0YXR1c0lkLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5iZXN0ZW1taW5nc2FhcmRJZCA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLkJlc3RlbW1pbmdzYWFyZElkLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5nZWZhY3R1cmVlcmQgPSB0aGlzLnprRm9ybS5jb250cm9scy5HZWZhY3R1cmVlcmQudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLnN0cmFhdCA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLlN0cmFhdC52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4ucG9zdGNvZGUgPSB0aGlzLnprRm9ybS5jb250cm9scy5Qb3N0Y29kZS52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4uZ2VtZWVudGUgPSB0aGlzLnprRm9ybS5jb250cm9scy5HZW1lZW50ZS52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4ubGFtYmVydFggPSB0aGlzLnprRm9ybS5jb250cm9scy5MYW1iZXJ0WC52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4ubGFtYmVydFkgPSB0aGlzLnprRm9ybS5jb250cm9scy5MYW1iZXJ0WS52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4ubGFtYmVydFJhbmdlID0gdGhpcy56a0Zvcm0uY29udHJvbHMuTGFtYmVydFJhbmdlLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi52ZXJ0cmVrU3RyYWF0ID0gdGhpcy56a0Zvcm0uY29udHJvbHMuVmVydHJla1N0cmFhdC52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4udmVydHJla0dlbWVlbnRlID0gdGhpcy56a0Zvcm0uY29udHJvbHMuVmVydHJla0dlbWVlbnRlLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5kYXRWYW4gPSB0aGlzLnprRm9ybS5jb250cm9scy5kYXRWYW4udmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmRhdFRvdCA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLmRhdFRvdC52YWx1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWFyY2hpbmcuZW1pdCh0aGlzLnpvZWtWZWxkZW4pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctZ3Z0LXpvZWt1aXRnZWJyZWlkL2d3LWd2dC16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gW2Zvcm1Hcm91cF09XFxcInprRm9ybVxcXCIgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZCBwYWRkaW5nVG9wMzBweFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJ0eHRDb2RlXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+Q29kZTwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwidHh0Q29kZVxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJDb2RlXFxcIiBBbGxvd09ubHlOdW1iZXJzIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJ0dnRUdklkXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+VFYgTnVtbWVyOjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwidHh0VHZJZFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJUdklkXFxcIiBBbGxvd09ubHlOdW1iZXJzIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJkZGxLbGFudFxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPktsYW50PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93biBjb2wtc20tNFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XFxcImRkbEtsYW50XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIktsYW50SWRcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJ3aWR0aDEwMHBlcmNlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiLTFcXFwiPlNlbGVjdGVlcjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCBrbGFudCBvZiBLbGFudExpc3RJdGVtc1xcXCIgW3ZhbHVlXT1cXFwia2xhbnQua2xhbnRJRFxcXCIgW2lubmVySFRNTF09XFxcImtsYW50Lm5hYW1cXFwiPjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwiZGRsRG9zc2llckJlaGVlcmRlclxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPkRvc3NpZXJCZWhlZXJkZXI8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duIGNvbC1zbS00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cXFwiZGRsRG9zc2llckJlaGVlcmRlclxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJEb3NzaWVyQmVoZWVyZGVySWRcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJ3aWR0aDEwMHBlcmNlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiLTFcXFwiPlNlbGVjdGVlcjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCBkb3NzYmVoIG9mIERvc3NpZXJCZWhlZXJkZXJMaXN0SXRlbXNcXFwiIFt2YWx1ZV09XFxcImRvc3NiZWguZG9zc2llckJlaGVlcmRlcklEXFxcIiBbaW5uZXJIVE1MXT1cXFwiZG9zc2JlaC5uYWFtXFxcIj48L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcImRkbFN0YXR1c1xcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPlN0YXR1czwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24gY29sLXNtLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJkZGxTdGF0dXNcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiU3RhdHVzSWRcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJ3aWR0aDEwMHBlcmNlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiLTFcXFwiPlNlbGVjdGVlcjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCBzdHMgb2YgU3RhdHVzTGlzdEl0ZW1zXFxcIiBbdmFsdWVdPVxcXCJzdHMudHZTdGF0dXNJRFxcXCIgW2lubmVySFRNTF09XFxcInN0cy5zdGF0dXNcXFwiPjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwiZGRsQmVzdGVtbWluZ3NhYXJkXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+QmVzdGVtbWluZ3NhYXJkPC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93biBjb2wtc20tNFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XFxcImRkbEJlc3RlbW1pbmdzYWFyZFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJCZXN0ZW1taW5nc2FhcmRJZFxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcIndpZHRoMTAwcGVyY2VudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCItMVxcXCI+U2VsZWN0ZWVyPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IGFhcmQgb2YgQmVzdGVtbWluZ3NhYXJkTGlzdEl0ZW1zXFxcIiBbdmFsdWVdPVxcXCJhYXJkLmJlc3RlbW1pbmdzQWFyZElkXFxcIiBbaW5uZXJIVE1MXT1cXFwiYWFyZC5iZXN0ZW1taW5nc0FhcmRcXFwiPjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwidHh0U3RyYWF0XFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+QmVzdGVtbWluZyBTdHJhYXQ8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInR4dFN0cmFhdFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJTdHJhYXRcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJkZGxHZWZhY3R1cmVlcmRcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5HZWZhY3R1cmVlcmQ8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duIGNvbC1zbS00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cXFwiZGRsR2VmYWN0dXJlZXJkXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkdlZmFjdHVyZWVyZFxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcIndpZHRoMTAwcGVyY2VudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCItMVxcXCI+U2VsZWN0ZWVyPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCIxXFxcIj5KYTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiMFxcXCI+TmVlPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJ0eHRQb3N0Y29kZVxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPkJlc3RlbW1pbmcgUG9zdGNvZGU6PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0eHRQb3N0Y29kZVxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJQb3N0Y29kZVxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcInR4dEdlbWVlbnRlXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+QmVzdGVtbWluZyBHZW1lZW50ZTo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInR4dEdlbWVlbnRlXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkdlbWVlbnRlXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwidHh0TGFtYmVydFhcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5CZXN0ZW1taW5nIExhbWJlcnQgWCAoaW4gbSk8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInR4dExhbWJlcnRYXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkxhbWJlcnRYXFxcIiBBbGxvd09ubHlOdW1iZXJzIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJkZGxMYW1iZXJ0UmFuZ2VcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5MYW1iZXJ0IFJhbmdlOjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24gY29sLXNtLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJkZGxMYW1iZXJ0UmFuZ2VcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiTGFtYmVydFJhbmdlXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwid2lkdGgxMDBwZXJjZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIi0xXFxcIj5TZWxlY3RlZXI8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIjFcXFwiPjEga208L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIjNcXFwiPjMga208L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIjVcXFwiPjUga208L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIjEwXFxcIj4xMCBrbTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwidHh0TGFtYmVydFhcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5CZXN0ZW1taW5nIExhbWJlcnQgWSAoaW4gbSk8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInR4dExhbWJlcnRZXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkxhbWJlcnRZXFxcIiBBbGxvd09ubHlOdW1iZXJzIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj4mbmJzcDs8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwidHh0VlN0cmFhdFxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPlRWIFN0cmFhdDo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInR4dFZTdHJhYXRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiVmVydHJla1N0cmFhdFxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcInR4dFZHZW1lZW50ZVxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPlRWIEdlbWVlbnRlOjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwidHh0VkdlbWVlbnRlXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIlZlcnRyZWtHZW1lZW50ZVxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcImR0ZVZhblxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPkRhdHVtIFZhbjo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcImR0ZVZhblxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJkYXRWYW5cXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgbmctdHJpbS1pZ25vcmVcXFwiIGJzRGF0ZXBpY2tlciBwbGFjZW1lbnQ9XFxcInRvcCBsZWZ0XFxcIiBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCIgRG90dGVkQm9yZGVyQmVsb3cgW2JzQ29uZmlnXT1cXFwieyBzaG93V2Vla051bWJlcnM6IGZhbHNlIH1cXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJkdGVUb3RcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5EYXR1bSBUb3Q6PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJkdGVUb3RcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiZGF0VG90XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIG5nLXRyaW0taWdub3JlXFxcIiBic0RhdGVwaWNrZXIgcGxhY2VtZW50PVxcXCJ0b3AgbGVmdFxcXCIgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiIERvdHRlZEJvcmRlckJlbG93IFtic0NvbmZpZ109XFxcInsgc2hvd1dlZWtOdW1iZXJzOiBmYWxzZSB9XFxcIj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNCBjb2wtc20tb2Zmc2V0LThcXFwiPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJyYWlzZVNlYXJjaCgpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIj57e2FwcExhYmVscy5TZW5kfX08L2J1dHRvbj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Zvcm0+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWd2dC16b2VrdWl0Z2VicmVpZC9ndy1ndnQtem9la3VpdGdlYnJlaWQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDcxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ3ctZ3Z0LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ndnQtem9la3VpdGdlYnJlaWQvZ3ctZ3Z0LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDcxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWd2dC16b2VrdWl0Z2VicmVpZC9ndy1ndnQtem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNzE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgR2VuZXJhbFNjcmlwdHMgfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9nZW5lcmFsLnNjcmlwdHNcIjtcclxuaW1wb3J0IHsgVG9hc3RyU2VydmljZSB9IGZyb20gXCJuZ3gtdG9hc3RyXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgSHR0cEtsYW50U2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9odHRwLWtsYW50LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgYXBwTGFiZWxzIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvYXBwTGFiZWxzXCI7XHJcbmltcG9ydCB7IERhdGF0YWJsZUNvbXBvbmVudCB9IGZyb20gXCJAc3dpbWxhbmUvbmd4LWRhdGF0YWJsZVwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UsIFVzZXJSb2xlcyB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBJU2dzU3RhdHVzR3JpZEl0ZW0sIElTZ3NLbGFudFN0YXR1c0xpc3RJdGVtIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvc2dzSW50ZXJmYWNlcy5zY3JpcHRzXCI7XHJcbmltcG9ydCB7IFNnc0tsYW50Wm9la1ZlbGRlbiB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL3Nnc0NsYXNzZXMuc2NyaXB0c1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJndy1rbGFudC1ncmlkXCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ndy1rbGFudC1ncmlkLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2d3LWtsYW50LWdyaWQuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIGd3S2xhbnRHcmlkQ29tcG9uZW50IGV4dGVuZHMgR2VuZXJhbFNjcmlwdHMgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgYXBwTGFiZWxzID0gYXBwTGFiZWxzO1xyXG5cclxuICAgIFN0YXR1c0Ryb3Bkb3duTGlzdDogSVNnc0tsYW50U3RhdHVzTGlzdEl0ZW1bXSA9IG51bGw7XHJcbiAgICBTdGF0dXNMaXN0OiBJU2dzU3RhdHVzR3JpZEl0ZW1bXSA9IG51bGw7XHJcbiAgICByb3dzOiBJU2dzU3RhdHVzR3JpZEl0ZW1bXSA9IG51bGw7XHJcbiAgICB0ZW1wOiBhbnlbXSA9IFtdO1xyXG4gICAgQFZpZXdDaGlsZChEYXRhdGFibGVDb21wb25lbnQpIHRhYmxlOiBEYXRhdGFibGVDb21wb25lbnQ7XHJcblxyXG4gICAgQElucHV0KCkgdGl0bGUgPSBcIlwiO1xyXG4gICAgU3RhdHVzSWQ6IG51bWJlciA9IC0xO1xyXG4gICAgVHlwZUlkOiBudW1iZXIgPSAwO1xyXG4gICAgaXNFeHRlbmRlZFNlYXJjaDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGZvck5pZXV3ZUFhbnZyYWdlbiA9IHRydWU7XHJcbiAgICBASW5wdXQoJ05pZXV3ZUFhbnZyYWdlbicpXHJcbiAgICBnZXQgTmlldXdlQWFudnJhZ2VuKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvck5pZXV3ZUFhbnZyYWdlbjtcclxuICAgIH1cclxuICAgIHNldCBOaWV1d2VBYW52cmFnZW4odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmZvck5pZXV3ZUFhbnZyYWdlbiA9IFwiXCIgKyB2YWx1ZSAhPT0gXCJmYWxzZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZVNlYXJjaCA9IHRydWU7XHJcbiAgICBASW5wdXQoJ0V4dGVuZGVkU2VhcmNoJylcclxuICAgIGdldCBFeHRlbmRlZFNlYXJjaCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51c2VTZWFyY2g7XHJcbiAgICB9XHJcbiAgICBzZXQgRXh0ZW5kZWRTZWFyY2godmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnVzZVNlYXJjaCA9IFwiXCIgKyB2YWx1ZSAhPT0gXCJmYWxzZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbkRlbGV0ZSA9IGZhbHNlO1xyXG4gICAgQElucHV0KCdBbGxvd0RlbGV0ZScpXHJcbiAgICBnZXQgQWxsb3dEZWxldGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FuRGVsZXRlO1xyXG4gICAgfVxyXG4gICAgc2V0IEFsbG93RGVsZXRlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5jYW5EZWxldGUgPSBcIlwiICsgdmFsdWUgIT09IFwiZmFsc2VcIjtcclxuICAgIH1cclxuXHJcbiAgICBTdHNGb3JtOiBGb3JtR3JvdXA7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX3RvYXN0cjogVG9hc3RyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGZiOiBGb3JtQnVpbGRlcixcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGh0dHBLbGFudDogSHR0cEtsYW50U2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgYXV0aDogQXV0aGVudGljYXRpb25TZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIoX3RvYXN0cik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuU3RzRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBzdHM6IFszXSxcclxuICAgICAgICAgICAgdHlwZTogWzBdLFxyXG4gICAgICAgICAgICBpZDogW1wiXCJdLFxyXG4gICAgICAgICAgICBuYWFtOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIGNvZGU6IFtcIlwiXSxcclxuICAgICAgICAgICAgaW5zY2hyaWp2aW5nc0RhdHVtOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIGRhdHVtQWN0aWVmOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIGdlZmFjdHVyZWVyZDogW1wiXCJdLFxyXG4gICAgICAgICAgICBzdGFydERhdHVtOiBbXCJcIl1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5odHRwS2xhbnQuc2dzS2xhbnRTdGF0dXNMaXN0SXRlbXMoKS50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbigobHN0OiBJU2dzS2xhbnRTdGF0dXNMaXN0SXRlbVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobHN0ICE9IG51bGwgJiYgbHN0ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU3RhdHVzRHJvcGRvd25MaXN0ID0gWy4uLmxzdF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLlN0c0Zvcm0ucGF0Y2hWYWx1ZSh7IHN0czogKHRoaXMuTmlldXdlQWFudnJhZ2VuID8gJzEnIDogJzMnKSB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzQ2hhbmdlZCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0dXNDaGFuZ2VkKCkge1xyXG4gICAgICAgIHRoaXMuU3RhdHVzSWQgPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuc3RzLnZhbHVlO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5TdHNGb3JtLmNvbnRyb2xzLnN0cy52YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiLTFcIjogLy8gU2VsZWN0ZWVyXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IC8vIFN0YXR1c1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU3RhdHVzTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRTdGF0dXNMaXN0KCkge1xyXG4gICAgICAgIHRoaXMuVHlwZUlkID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLnR5cGUudmFsdWU7XHJcbiAgICAgICAgdGhpcy5odHRwS2xhbnQuc2dzU3RhdHVzR3JpZCh0aGlzLlN0YXR1c0lkLCB0aGlzLlR5cGVJZCkudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKGxzdDogSVNnc1N0YXR1c0dyaWRJdGVtW10pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IGxzdDtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcCA9IFsuLi5sc3RdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckZvcm1GaWVsZHMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FeHRlbmRlZFNlYXJjaCh6b2VrVmVsZGVuOiBTZ3NLbGFudFpvZWtWZWxkZW4pIHtcclxuICAgICAgICB0aGlzLmh0dHBLbGFudC5nd1pvZWtMaXN0KHpvZWtWZWxkZW4pLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKChsc3Q6IElTZ3NTdGF0dXNHcmlkSXRlbVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSBsc3Q7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXAgPSBbLi4ubHN0XTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJGb3JtRmllbGRzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyRm9ybUZpZWxkcygpIHtcclxuICAgICAgICAvLyBDbGVhciBhbGwgRm9ybSBWYWx1ZXMgZXhjZXB0IHN0c1xyXG4gICAgICAgIHRoaXMuU3RzRm9ybS5wYXRjaFZhbHVlKHtcclxuICAgICAgICAgICAgaWQ6IFwiXCIsXHJcbiAgICAgICAgICAgIG5hYW06IFwiXCIsXHJcbiAgICAgICAgICAgIGNvZGU6IFwiXCIsXHJcbiAgICAgICAgICAgIGluc2NocmlqdmluZ3NEYXR1bTogXCJcIixcclxuICAgICAgICAgICAgZGF0dW1BY3RpZWY6IFwiXCIsXHJcbiAgICAgICAgICAgIGdlZmFjdHVyZWVyZDogXCJcIixcclxuICAgICAgICAgICAgc3RhcnREYXR1bTogXCJcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlcigpIHtcclxuICAgICAgICBjb25zdCBpZCA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5pZC52YWx1ZTtcclxuICAgICAgICBjb25zdCBuYWFtID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLm5hYW0udmFsdWU7XHJcbiAgICAgICAgY29uc3QgY29kZSA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5jb2RlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGluc2NocmlqdmluZ3NEYXR1bSA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5pbnNjaHJpanZpbmdzRGF0dW0udmFsdWU7XHJcbiAgICAgICAgY29uc3QgZGF0dW1BY3RpZWYgPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuZGF0dW1BY3RpZWYudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZ2VmYWN0dXJlZXJkID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLmdlZmFjdHVyZWVyZC52YWx1ZTtcclxuICAgICAgICBjb25zdCBzdGFydERhdHVtID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLnN0YXJ0RGF0dW0udmFsdWU7XHJcbiAgICAgICAgY29uc3QgZHAgPSBuZXcgRGF0ZVBpcGUoXCJlbi1VU1wiKTtcclxuXHJcbiAgICAgICAgLy8gZmlsdGVyIG91ciBkYXRhXHJcbiAgICAgICAgY29uc3QgdGVtcCA9IHRoaXMudGVtcC5maWx0ZXIoKHJvdzogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBpbnNjaHJpanZpbmdzRGF0dW1Bc1N0cmluZzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChpbnNjaHJpanZpbmdzRGF0dW0gPiBcIlwiKSB7IGluc2NocmlqdmluZ3NEYXR1bUFzU3RyaW5nID0gZHAudHJhbnNmb3JtKHJvdy5pbnNjaHJpanZpbmdzRGF0dW0sIFwiZGQvTU0veXl5eVwiKTsgfVxyXG4gICAgICAgICAgICB2YXIgZGF0dW1BY3RpZWZBc1N0cmluZzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChkYXR1bUFjdGllZiA+IFwiXCIpIHsgZGF0dW1BY3RpZWZBc1N0cmluZyA9IGRwLnRyYW5zZm9ybShyb3cuZGF0dW1BY3RpZWYsIFwiZGQvTU0veXl5eVwiKTsgfVxyXG4gICAgICAgICAgICB2YXIgc3RhcnREYXR1bUFzU3RyaW5nOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHN0YXJ0RGF0dW0gPiBcIlwiKSB7IHN0YXJ0RGF0dW1Bc1N0cmluZyA9IGRwLnRyYW5zZm9ybShyb3cuZmFjdHVyYXRpZVN0YXJ0RGF0dW0sIFwiZGQvTU0veXl5eVwiKTsgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuICghaWQgfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHJvdy5rbGFudElEKSAmJiByb3cua2xhbnRJRC50b1N0cmluZygpLmluZGV4T2YoaWQpICE9PSAtMSkpXHJcbiAgICAgICAgICAgICAgICAmJiAoIW5hYW0gfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHJvdy5uYWFtKSAmJiByb3cubmFhbS50b0xvd2VyQ2FzZSgpLmluZGV4T2YobmFhbSkgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghY29kZSB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQocm93LmJlcm9lcHNvcmdhbmlzYXRpZWNvZGUpICYmIHJvdy5iZXJvZXBzb3JnYW5pc2F0aWVjb2RlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihjb2RlKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFpbnNjaHJpanZpbmdzRGF0dW0gfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKGluc2NocmlqdmluZ3NEYXR1bUFzU3RyaW5nKSAmJiBpbnNjaHJpanZpbmdzRGF0dW1Bc1N0cmluZy5pbmRleE9mKGluc2NocmlqdmluZ3NEYXR1bSkgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghZGF0dW1BY3RpZWYgfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKGRhdHVtQWN0aWVmQXNTdHJpbmcpICYmIGRhdHVtQWN0aWVmQXNTdHJpbmcuaW5kZXhPZihkYXR1bUFjdGllZikgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghZ2VmYWN0dXJlZXJkIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChyb3cuZ2VmYWN0dXJlZXJkKSAmJiByb3cuZ2VmYWN0dXJlZXJkLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihnZWZhY3R1cmVlcmQpICE9PSAtMSkpXHJcbiAgICAgICAgICAgICAgICAmJiAoIXN0YXJ0RGF0dW0gfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHN0YXJ0RGF0dW1Bc1N0cmluZykgJiYgc3RhcnREYXR1bUFzU3RyaW5nLmluZGV4T2Yoc3RhcnREYXR1bSkgIT09IC0xKSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIHRoZSByb3dzXHJcbiAgICAgICAgdGhpcy5yb3dzID0gdGVtcDtcclxuICAgICAgICAvLyBXaGVuZXZlciB0aGUgZmlsdGVyIGNoYW5nZXMsIGFsd2F5cyBnbyBiYWNrIHRvIHRoZSBmaXJzdCBwYWdlXHJcbiAgICAgICAgdGhpcy50YWJsZS5vZmZzZXQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQWN0aXZhdGUoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGlmIChldmVudC50eXBlID09PSBcImRibGNsaWNrXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5saW5rVG9LbGFudChldmVudC5yb3dbXCJrbGFudElEXCJdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Um93Q2xhc3Mocm93OiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gXCJpYnRuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgbGlua1RvS2xhbnQoSWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9ndy9rbGFudC1lZGl0L1wiLElkXSk7IFxyXG4gICAgfVxyXG5cclxuICAgIFRvZ2dsZUV4dGVuZGVkU2VhcmNoKCkge1xyXG4gICAgICAgIHRoaXMuaXNFeHRlbmRlZFNlYXJjaCA9ICF0aGlzLmlzRXh0ZW5kZWRTZWFyY2g7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEZpbHRlclR5cGVzIHtcclxuICAgIEFsbCA9IDAsXHJcbiAgICBUb3BDZ3IgPSAxLFxyXG4gICAgRE9QID0gMlxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWtsYW50LWdyaWQvZ3cta2xhbnQtZ3JpZC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gW2Zvcm1Hcm91cF09XFxcIlN0c0Zvcm1cXFwiIGNsYXNzPVxcXCJjb250YWluZXItZmx1aWQgcGFkZGluZ1RvcDEwcHhcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0lmPVxcXCJ1c2VTZWFyY2hcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTNcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiAoY2xpY2spPVxcXCJUb2dnbGVFeHRlbmRlZFNlYXJjaCgpXFxcIj57eyBpc0V4dGVuZGVkU2VhcmNoID8gJ0Vua2Vsdm91ZGlnIHpvZWtlbicgOiAnR2VhdmFuY2VlcmQgem9la2VuJyB9fTwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJ1c2VTZWFyY2ggJiYgIWlzRXh0ZW5kZWRTZWFyY2hcXFwiIGNsYXNzPVxcXCJjb2wtc20tOVxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJwYWRkaW5nUmlnaHQxMHB4XFxcIj5GaWx0ZXIgc3RhdHVzPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8c2VsZWN0IGZvcm1Db250cm9sTmFtZT1cXFwic3RzXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyAoY2hhbmdlKT1cXFwic3RhdHVzQ2hhbmdlZCgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiLTFcXFwiPlNlbGVjdGVlcjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IHN0cyBvZiBTdGF0dXNEcm9wZG93bkxpc3RcXFwiIFt2YWx1ZV09XFxcInN0cy5rbGFudFN0YXR1c0lEXFxcIiBbaW5uZXJIVE1MXT1cXFwic3RzLnN0YXR1c1xcXCI+PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJwYWRkaW5nUmlnaHQ0MHB4XFxcIj5LbGFudCBUeXBlPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8c2VsZWN0IGZvcm1Db250cm9sTmFtZT1cXFwidHlwZVxcXCIgRG90dGVkQm9yZGVyQmVsb3cgKGNoYW5nZSk9XFxcInN0YXR1c0NoYW5nZWQoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIjBcXFwiPkFsbGU8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiMVxcXCI+VG9wQ2dyPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIjJcXFwiPkRvcDwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0lmPVxcXCJ1c2VTZWFyY2ggJiYgaXNFeHRlbmRlZFNlYXJjaFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTJcXFwiPjxndy1rbGFudC16b2VrdWl0Z2VicmVpZCAoc2VhcmNoaW5nKT1cXFwib25FeHRlbmRlZFNlYXJjaCgkZXZlbnQpXFxcIj48L2d3LWtsYW50LXpvZWt1aXRnZWJyZWlkPjwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiTmd4VGFibGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwicHVsbC1sZWZ0IE5neFRpdGxlXFxcIj57e3RpdGxlfX08L3A+XFxyXFxuICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlICN0YWJsZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYm9vdHN0cmFwXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYWN0aXZhdGUpPVxcXCJvbkFjdGl2YXRlKCRldmVudClcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3dzXT1cXFwicm93c1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbHVtbk1vZGVdPVxcXCInZmxleCdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtoZWFkZXJIZWlnaHRdPVxcXCI1MFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zvb3RlckhlaWdodF09XFxcIjQwXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGltaXRdPVxcXCJhcHBMYWJlbHMudGFibGVWaWV3Um93c1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jvd0NsYXNzXT1cXFwiZ2V0Um93Q2xhc3NcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjc3NDbGFzc2VzXT1cXFwiYXBwTGFiZWxzLmljb25zQ3NzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWVzc2FnZXNdPVxcXCJ7dG90YWxNZXNzYWdlOiBhcHBMYWJlbHMuVG90YWwudG9Mb3dlckNhc2UoKSwgZW1wdHlNZXNzYWdlOiBhcHBMYWJlbHMuTm9EYXRhVG9EaXNwbGF5fVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NvcnRzXT1cXFwiW3twcm9wOidrbGFudElEJywgZGlyOidkZXNjJyB9XVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jvd0hlaWdodF09XFxcIidhdXRvJ1xcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMVxcXCIgcHJvcD1cXFwia2xhbnRJRFxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckxhYmVsXFxcIj5LbGFudCBJRDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJpZFxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtcm93PVxcXCJyb3dcXFwiIGxldC12YWx1ZT1cXFwidmFsdWVcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gW3JvdXRlckxpbmtdPVxcXCJcXFwiIChjbGljayk9XFxcImxpbmtUb2tsYW50KHJvd1sna2xhbnRJRCddKVxcXCI+PHNwYW4+e3tyb3dbJ2tsYW50SUQnXX19PC9zcGFuPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIzXFxcIiBwcm9wPVxcXCJuYWFtXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyTGFiZWxcXFwiPk5hYW08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwibmFhbVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtdmFsdWU9XFxcInZhbHVlXFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7dmFsdWV9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIyXFxcIiBwcm9wPVxcXCJiZXJvZXBzb3JnYW5pc2F0aWVjb2RlXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCIgTmd4RmlsdGVyTGFiZWxcXFwiPkNvZGU8L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiY29kZVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIyXFxcIiBuYW1lPVxcXCJpbnNjaHJpanZpbmdzRGF0dW1cXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIiBOZ3hGaWx0ZXJMYWJlbFxcXCI+SW5zY2hyaWp2aW5nPC9zcGFuPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImluc2NocmlqdmluZ3NEYXR1bVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtdmFsdWU9XFxcInZhbHVlXFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dmFsdWUgfCBkYXRlOlxcXCJkZC9NTS95eXl5XFxcIn19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMlxcXCIgbmFtZT1cXFwiZGF0dW1BY3RpZWZcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIiBOZ3hGaWx0ZXJMYWJlbFxcXCI+QWN0aWVmPC9zcGFuPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImRhdHVtQWN0aWVmXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC12YWx1ZT1cXFwidmFsdWVcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3t2YWx1ZSB8IGRhdGU6XFxcImRkL01NL3l5eXlcXFwifX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBwcm9wPVxcXCJnZWZhY3R1cmVlcmRcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIiBOZ3hGaWx0ZXJMYWJlbFxcXCI+R2VmYWN0Ljwvc3Bhbj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJnZWZhY3R1cmVlcmRcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMlxcXCIgbmFtZT1cXFwiZmFjdHVyYXRpZVN0YXJ0RGF0dW1cXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIiBOZ3hGaWx0ZXJMYWJlbFxcXCI+U3RhcnQgRGF0dW08L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwic3RhcnREYXR1bVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtdmFsdWU9XFxcInZhbHVlXFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dmFsdWUgfCBkYXRlOlxcXCJkZC9NTS95eXl5XFxcIn19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMVxcXCIgbmFtZT1cXFwiRGV0YWlsXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtcm93PVxcXCJyb3dcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uLy4uLy4uLy4uL2ltYWdlcy9pY29fZWRpdHJlY29yZC5naWZcIikgKyBcIlxcXCIgY2xhc3M9XFxcImlidG5cXFwiIChjbGljayk9XFxcImxpbmtUb0tsYW50KHJvd1sna2xhbnRJRCddKVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbjwvZm9ybT5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta2xhbnQtZ3JpZC9ndy1rbGFudC1ncmlkLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA3MjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2d3LWtsYW50LWdyaWQuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWtsYW50LWdyaWQvZ3cta2xhbnQtZ3JpZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA3MjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rbGFudC1ncmlkL2d3LWtsYW50LWdyaWQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNzIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgR2VuZXJhbFNjcmlwdHMgfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9nZW5lcmFsLnNjcmlwdHNcIjtcclxuaW1wb3J0IHsgVG9hc3RyU2VydmljZSB9IGZyb20gXCJuZ3gtdG9hc3RyXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgSHR0cEtsYW50U2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9odHRwLWtsYW50LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgYXBwTGFiZWxzIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvYXBwTGFiZWxzXCI7XHJcbmltcG9ydCB7IERhdGF0YWJsZUNvbXBvbmVudCB9IGZyb20gXCJAc3dpbWxhbmUvbmd4LWRhdGF0YWJsZVwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UsIFVzZXJSb2xlcyB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBJU2dzS2xhbnRXaWp6aWdpbmcgfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9zZ3NJbnRlcmZhY2VzLnNjcmlwdHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiZ3cta2xhbnR3aWp6LWdyaWRcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2d3LWtsYW50d2lqei1ncmlkLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2d3LWtsYW50d2lqei1ncmlkLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBnd0tsYW50V2lqekdyaWRDb21wb25lbnQgZXh0ZW5kcyBHZW5lcmFsU2NyaXB0cyBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBhcHBMYWJlbHMgPSBhcHBMYWJlbHM7XHJcblxyXG4gICAgU3RhdHVzTGlzdDogSVNnc0tsYW50V2lqemlnaW5nW10gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSByb3dzOiBJU2dzS2xhbnRXaWp6aWdpbmdbXSA9IG51bGw7XHJcbiAgICB0ZW1wOiBhbnlbXSA9IFtdO1xyXG4gICAgQFZpZXdDaGlsZChEYXRhdGFibGVDb21wb25lbnQpIHRhYmxlOiBEYXRhdGFibGVDb21wb25lbnQ7XHJcblxyXG4gICAgaXNHV1VzZXI6IGJvb2xlYW4gfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBTdHNGb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfdG9hc3RyOiBUb2FzdHJTZXJ2aWNlLCBwcml2YXRlIHJlYWRvbmx5IGZiOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSByZWFkb25seSBodHRwS2xhbnQ6IEh0dHBLbGFudFNlcnZpY2UsIHByaXZhdGUgcmVhZG9ubHkgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcmVhZG9ubHkgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJlYWRvbmx5IGF1dGg6IEF1dGhlbnRpY2F0aW9uU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKF90b2FzdHIpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLlN0c0Zvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgICAgICAgc3RzOiBbLTFdLFxyXG4gICAgICAgICAgICBrbGFudElkOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIGFuYWFtOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIHZuYWFtOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIHBjb2RlOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIHBsYWF0czogW1wiXCJdXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYXV0aC5nZXRSb2xlKCkudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKHJvbGU6IFVzZXJSb2xlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0dXVXNlciA9IChyb2xlICE9PSBVc2VyUm9sZXMuS2xhbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU3RhdHVzTGlzdCgpO1xyXG4gICAgICAgICAgICB9KTsgICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXIoKSB7XHJcbiAgICAgICAgY29uc3Qga2xhbnRJZCA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5rbGFudElkLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGFuYWFtID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLmFuYWFtLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHZuYWFtID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLnZuYWFtLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHBjb2RlID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLnBjb2RlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHBsYWF0cyA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5wbGFhdHMudmFsdWU7XHJcblxyXG4gICAgICAgIC8vIGZpbHRlciBvdXIgZGF0YVxyXG4gICAgICAgIGNvbnN0IHRlbXAgPSB0aGlzLnRlbXAuZmlsdGVyKChyb3c6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKCFrbGFudElkIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChyb3cua2xhbnRJRCkgJiYgcm93LmtsYW50SUQudG9TdHJpbmcoKS5pbmRleE9mKGtsYW50SWQpICE9PSAtMSkpXHJcbiAgICAgICAgICAgICAgICAmJiAoIWFuYWFtIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChyb3cuYWNodGVybmFhbSkgJiYgcm93LmFjaHRlcm5hYW0udG9Mb3dlckNhc2UoKS5pbmRleE9mKGFuYWFtKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCF2bmFhbSB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQocm93LnZvb3JuYWFtKSAmJiByb3cudm9vcm5hYW0udG9Mb3dlckNhc2UoKS5pbmRleE9mKHZuYWFtKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFwY29kZSB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQocm93LnBvc3Rjb2RlKSAmJiByb3cucG9zdGNvZGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHBjb2RlKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFwbGFhdHMgfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHJvdy5wbGFhdHMpICYmIHJvdy5wbGFhdHMudG9Mb3dlckNhc2UoKS5pbmRleE9mKHBsYWF0cykgIT09IC0xKSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIHRoZSByb3dzXHJcbiAgICAgICAgdGhpcy5yb3dzID0gdGVtcDtcclxuICAgICAgICAvLyBXaGVuZXZlciB0aGUgZmlsdGVyIGNoYW5nZXMsIGFsd2F5cyBnbyBiYWNrIHRvIHRoZSBmaXJzdCBwYWdlXHJcbiAgICAgICAgdGhpcy50YWJsZS5vZmZzZXQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vbG9hZFN0YXR1cyh0eXBlOiBzdHJpbmcpIHtcclxuICAgIC8vICAgIHRoaXMuaHR0cEJCUi5TdGF0dXNEZWZpbml0aW9uTGlzdCh0aGlzLlR5cGUpLnRvUHJvbWlzZSgpXHJcbiAgICAvLyAgICAgICAgLnRoZW4oKGxzdDogSUJCUlN0YXR1c1tdKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgIGlmIChsc3QgIT0gbnVsbCAmJiBsc3QgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICB0aGlzLlN0YXR1c0xpc3QgPSBbLi4ubHN0XTtcclxuICAgIC8vICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzQ2hhbmdlZCgpO1xyXG4gICAgLy8gICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgfSk7XHJcbiAgICAvL31cclxuXHJcbiAgICBsb2FkU3RhdHVzTGlzdCgpIHtcclxuICAgICAgICB0aGlzLmh0dHBLbGFudC5zZ3NVbmhhbmRsZWRXaWp6aWdpbmdlbigpLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKChsc3Q6IElTZ3NLbGFudFdpanppZ2luZ1tdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSBsc3Q7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXAgPSBbLi4ubHN0XTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25BY3RpdmF0ZShldmVudDogYW55KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IFwiZGJsY2xpY2tcIikge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmtUb0tsYW50V2lqeihldmVudC5yb3dbXCJpZFwiXSwgZXZlbnQucm93W1wia2xhbnRJRFwiXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFJvd0NsYXNzKHJvdzogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIFwiaWJ0blwiO1xyXG4gICAgfVxyXG5cclxuICAgIGxpbmtUb0tsYW50KGtsYW50SWQ6IG51bWJlcikge1xyXG4gICAgICAgIC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi90ZWNobmlzY2gtdmVyc2xhZy1kZXRhaWxcIiwgdHZJZF0pOyAgR1dCZWhlZXIvS2xhbnRFZGl0LmFzcHg/S2xhbnRJRD17MH1cclxuICAgIH1cclxuXHJcbiAgICBsaW5rVG9LbGFudFdpanooSWQ6IG51bWJlciwga2xhbnRJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3RlY2huaXNjaC12ZXJzbGFnLWRldGFpbFwiLCB0dklkXSk7ICAvLyBHV0JlaGVlci9LbGFudFdpanppZ2luZ2VuT3ZlcnppY2h0LmFzcHg/UmVjSUQ9ezB9JktsYW50SUQ9ezF9XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rbGFudHdpanotZ3JpZC9ndy1rbGFudHdpanotZ3JpZC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gW2Zvcm1Hcm91cF09XFxcIlN0c0Zvcm1cXFwiIGNsYXNzPVxcXCJjb250YWluZXItZmx1aWQgcGFkZGluZ1RvcDEwcHhcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0lmPVxcXCJpc0dXVXNlciAhPSBudWxsXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiTmd4VGFibGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZSAjdGFibGVcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJvb3RzdHJhcFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFjdGl2YXRlKT1cXFwib25BY3RpdmF0ZSgkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm93c109XFxcInJvd3NcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb2x1bW5Nb2RlXT1cXFwiJ2ZsZXgnXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaGVhZGVySGVpZ2h0XT1cXFwiNTBcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb290ZXJIZWlnaHRdPVxcXCI0MFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xpbWl0XT1cXFwiYXBwTGFiZWxzLnRhYmxlVmlld1Jvd3NcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3dDbGFzc109XFxcImdldFJvd0NsYXNzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY3NzQ2xhc3Nlc109XFxcImFwcExhYmVscy5pY29uc0Nzc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21lc3NhZ2VzXT1cXFwie3RvdGFsTWVzc2FnZTogYXBwTGFiZWxzLlRvdGFsLnRvTG93ZXJDYXNlKCksIGVtcHR5TWVzc2FnZTogYXBwTGFiZWxzLk5vRGF0YVRvRGlzcGxheX1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzb3J0c109XFxcIlt7cHJvcDonaWQnLCBkaXI6J2Rlc2MnIH1dXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm93SGVpZ2h0XT1cXFwiJ2F1dG8nXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBwcm9wPVxcXCJpZFxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCIgaGlkZGVuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtcm93PVxcXCJyb3dcXFwiIGxldC12YWx1ZT1cXFwidmFsdWVcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3t2YWx1ZX19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMVxcXCIgcHJvcD1cXFwia2xhbnRJRFxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckxhYmVsXFxcIj5LbGFudCBJRDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJrbGFudElkXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1yb3c9XFxcInJvd1xcXCIgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBbcm91dGVyTGlua109XFxcIlxcXCIgKGNsaWNrKT1cXFwibGlua1Rva2xhbnQocm93WydrbGFudElEJ10pXFxcIj48c3Bhbj57e3Jvd1sna2xhbnRJRCddfX08L3NwYW4+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjJcXFwiIHByb3A9XFxcImFjaHRlcm5hYW1cXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJMYWJlbFxcXCI+QWNodGVybmFhbTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJhbmFhbVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtdmFsdWU9XFxcInZhbHVlXFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7dmFsdWV9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIyXFxcIiBwcm9wPVxcXCJ2b29ybmFhbVxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiIE5neEZpbHRlckxhYmVsXFxcIj5Wb29ybmFhbTwvc3Bhbj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJ2bmFhbVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIyXFxcIiBwcm9wPVxcXCJwb3N0Y29kZVxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiIE5neEZpbHRlckxhYmVsXFxcIj5Qb3N0Y29kZTwvc3Bhbj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJwY29kZVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIyXFxcIiBwcm9wPVxcXCJwbGFhdHNcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIiBOZ3hGaWx0ZXJMYWJlbFxcXCI+UGxhYXRzPC9zcGFuPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcInBsYWF0c1xcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBuYW1lPVxcXCJEZXRhaWxcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1yb3c9XFxcInJvd1xcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vLi4vLi4vLi4vaW1hZ2VzL2ljb19lZGl0cmVjb3JkLmdpZlwiKSArIFwiXFxcIiBjbGFzcz1cXFwiaWJ0blxcXCIgKGNsaWNrKT1cXFwibGlua1RvS2xhbnRXaWp6KHJvd1snaWQnXSwgcm93WydrbGFudElEJ10pXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGU+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuPC9mb3JtPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rbGFudHdpanotZ3JpZC9ndy1rbGFudHdpanotZ3JpZC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNzI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ndy1rbGFudHdpanotZ3JpZC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta2xhbnR3aWp6LWdyaWQvZ3cta2xhbnR3aWp6LWdyaWQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNzI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta2xhbnR3aWp6LWdyaWQvZ3cta2xhbnR3aWp6LWdyaWQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNzI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVG9hc3RyU2VydmljZSB9IGZyb20gXCJuZ3gtdG9hc3RyXCI7XHJcblxyXG5pbXBvcnQgeyBhcHBMYWJlbHMgfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9hcHBMYWJlbHNcIjtcclxuaW1wb3J0IHsgR2VuZXJhbFNjcmlwdHMgfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9nZW5lcmFsLnNjcmlwdHNcIjtcclxuXHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7IEh0dHBLbGFudFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaHR0cC1rbGFudC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU2dzS2xhbnRab2VrVmVsZGVuIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvc2dzQ2xhc3Nlcy5zY3JpcHRzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImd3LWtsYW50LXpvZWt1aXRnZWJyZWlkXCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ndy1rbGFudC16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9ndy1rbGFudC16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuY3NzJyldLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgZ3dLbGFudFpvZWtVaXRnZWJyZWlkQ29tcG9uZW50IGV4dGVuZHMgR2VuZXJhbFNjcmlwdHMgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgYXBwTGFiZWxzID0gYXBwTGFiZWxzO1xyXG4gICAgemtGb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gICAgYmVzdEJlZHJpamZMaXN0OiBhbnlbXTtcclxuICAgIHpvZWtWZWxkZW46IFNnc0tsYW50Wm9la1ZlbGRlbiA9IG51bGw7XHJcblxyXG4gICAgQE91dHB1dCgpIHNlYXJjaGluZzogRXZlbnRFbWl0dGVyPFNnc0tsYW50Wm9la1ZlbGRlbj4gPSBuZXcgRXZlbnRFbWl0dGVyPFNnc0tsYW50Wm9la1ZlbGRlbj4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF90b2FzdHI6IFRvYXN0clNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGh0dHBLbGFudDogSHR0cEtsYW50U2VydmljZSxcclxuICAgICAgICAgICAgICAgIEBJbmplY3QoXCJCQVNFX1VSTFwiKSBwcml2YXRlIHJlYWRvbmx5IF9iYXNlVXJsOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX3Nhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XHJcbiAgICAgICAgc3VwZXIoX3RvYXN0cik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy56a0Zvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgICAgICAgS2xhbnRJZDogW1wiXCJdLFxyXG4gICAgICAgICAgICBPcmdhbmlzYXRpZTogW1wiXCJdLFxyXG4gICAgICAgICAgICBWb29ybmFhbTogW1wiXCJdLFxyXG4gICAgICAgICAgICBBY2h0ZXJuYWFtOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIFN0cmFhdDogW1wiXCJdLFxyXG4gICAgICAgICAgICBHZW1lZW50ZTogW1wiXCJdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmFpc2VTZWFyY2goKSB7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuID0gbmV3IFNnc0tsYW50Wm9la1ZlbGRlbigpO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5rbGFudElkID0gdGhpcy56a0Zvcm0uY29udHJvbHMuS2xhbnRJZC52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4ub3JnYW5pc2F0aWUgPSB0aGlzLnprRm9ybS5jb250cm9scy5PcmdhbmlzYXRpZS52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4udm9vcm5hYW0gPSB0aGlzLnprRm9ybS5jb250cm9scy5Wb29ybmFhbS52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4uYWNodGVybmFhbSA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLkFjaHRlcm5hYW0udmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLnN0cmFhdCA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLlN0cmFhdC52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4uZ2VtZWVudGUgPSB0aGlzLnprRm9ybS5jb250cm9scy5HZW1lZW50ZS52YWx1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWFyY2hpbmcuZW1pdCh0aGlzLnpvZWtWZWxkZW4pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta2xhbnQtem9la3VpdGdlYnJlaWQvZ3cta2xhbnQtem9la3VpdGdlYnJlaWQuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxmb3JtIFtmb3JtR3JvdXBdPVxcXCJ6a0Zvcm1cXFwiIGNsYXNzPVxcXCJjb250YWluZXItZmx1aWQgcGFkZGluZ1RvcDMwcHhcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGxhYmVsIGZvcj1cXFwidHh0S2xhbnRJZFxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPktsYW50IElkOjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLThcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwidHh0S2xhbnRJZFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJLbGFudElkXFxcIiBBbGxvd09ubHlOdW1iZXJzIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48bGFiZWwgZm9yPVxcXCJ0eHRPcmdhbmlzYXRpZVxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPk9yZ2FuaXNhdGllOjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLThcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwidHh0T3JnYW5pc2F0aWVcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiT3JnYW5pc2F0aWVcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48bGFiZWwgZm9yPVxcXCJ0eHRWb29ybmFhbVxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPlZvb3JuYWFtOjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLThcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwidHh0Vm9vcm5hYW1cXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiVm9vcm5hYW1cXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48bGFiZWwgZm9yPVxcXCJ0eHRBY2h0ZXJuYWFtXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+QWNodGVybmFhbTo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS04XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInR4dEFjaHRlcm5hYW1cXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiQWNodGVybmFhbVxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxsYWJlbCBmb3I9XFxcInR4dFN0cmFhdFxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPlN0cmFhdDo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS04XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInR4dFN0cmFhdFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJTdHJhYXRcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48bGFiZWwgZm9yPVxcXCJ0eHRHZW1lZW50ZVxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPkdlbWVlbnRlOjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLThcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwidHh0R2VtZWVudGVcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiR2VtZWVudGVcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS04IGNvbC1zbS1vZmZzZXQtNFxcXCI+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcInJhaXNlU2VhcmNoKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiPnt7YXBwTGFiZWxzLlNlbmR9fTwvYnV0dG9uPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZm9ybT5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta2xhbnQtem9la3VpdGdlYnJlaWQvZ3cta2xhbnQtem9la3VpdGdlYnJlaWQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDcyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ3cta2xhbnQtem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWtsYW50LXpvZWt1aXRnZWJyZWlkL2d3LWtsYW50LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDcyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWtsYW50LXpvZWt1aXRnZWJyZWlkL2d3LWtsYW50LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDczMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEdlbmVyYWxTY3JpcHRzIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvZ2VuZXJhbC5zY3JpcHRzXCI7XHJcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UgfSBmcm9tIFwibmd4LXRvYXN0clwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEh0dHBLbGVpbmVXZXJ2ZW5TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2h0dHAta2xlaW5ld2VydmVuLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgYXBwTGFiZWxzIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvYXBwTGFiZWxzXCI7XHJcbmltcG9ydCB7IERhdGF0YWJsZUNvbXBvbmVudCB9IGZyb20gXCJAc3dpbWxhbmUvbmd4LWRhdGF0YWJsZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IElLV0dyaWRJdGVtIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvaW50ZXJmYWNlcy5zY3JpcHRzXCI7XHJcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBTZ3NLV1pvZWtWZWxkZW4gfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9zZ3NDbGFzc2VzLnNjcmlwdHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiZ3cta3ctZ3JpZFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZ3cta3ctZ3JpZC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9ndy1rdy1ncmlkLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBnd0tXR3JpZENvbXBvbmVudCBleHRlbmRzIEdlbmVyYWxTY3JpcHRzIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGFwcExhYmVscyA9IGFwcExhYmVscztcclxuXHJcbiAgICBzdGF0dXNEcm9wZG93bkxpc3Q6IGFueVtdO1xyXG4gICAgc3RhdHVzTGlzdDogSUtXR3JpZEl0ZW1bXTtcclxuICAgIHJvd3M6IElLV0dyaWRJdGVtW10gPSBbXTtcclxuICAgIHRlbXA6IElLV0dyaWRJdGVtW10gPSBbXTtcclxuICAgIEBWaWV3Q2hpbGQoRGF0YXRhYmxlQ29tcG9uZW50KSBncmlkOiBEYXRhdGFibGVDb21wb25lbnQ7XHJcblxyXG4gICAgQElucHV0KCkgdGl0bGUgPSBcIlwiO1xyXG4gICAgU3RhdHVzSWQ6IG51bWJlciA9IC0xO1xyXG4gICAgaXNFeHRlbmRlZFNlYXJjaDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGZvck5pZXV3ZUFhbnZyYWdlbiA9IHRydWU7XHJcbiAgICBASW5wdXQoJ05pZXV3ZUFhbnZyYWdlbicpXHJcbiAgICBnZXQgTmlldXdlQWFudnJhZ2VuKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvck5pZXV3ZUFhbnZyYWdlbjtcclxuICAgIH1cclxuICAgIHNldCBOaWV1d2VBYW52cmFnZW4odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmZvck5pZXV3ZUFhbnZyYWdlbiA9IFwiXCIgKyB2YWx1ZSAhPT0gXCJmYWxzZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZVNlYXJjaCA9IHRydWU7XHJcbiAgICBASW5wdXQoJ0V4dGVuZGVkU2VhcmNoJylcclxuICAgIGdldCBFeHRlbmRlZFNlYXJjaCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51c2VTZWFyY2g7XHJcbiAgICB9XHJcbiAgICBzZXQgRXh0ZW5kZWRTZWFyY2godmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnVzZVNlYXJjaCA9IFwiXCIgKyB2YWx1ZSAhPT0gXCJmYWxzZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbkRlbGV0ZSA9IGZhbHNlO1xyXG4gICAgQElucHV0KCdBbGxvd0RlbGV0ZScpXHJcbiAgICBnZXQgQWxsb3dEZWxldGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FuRGVsZXRlO1xyXG4gICAgfVxyXG4gICAgc2V0IEFsbG93RGVsZXRlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5jYW5EZWxldGUgPSBcIlwiICsgdmFsdWUgIT09IFwiZmFsc2VcIjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0dXNGb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSB0b2FzdHI6IFRvYXN0clNlcnZpY2UsIHByaXZhdGUgcmVhZG9ubHkgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcmVhZG9ubHkgZmI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHJlYWRvbmx5IGt3U2VydmljZTogSHR0cEtsZWluZVdlcnZlblNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcih0b2FzdHIpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBzdHM6IFtcIi0xXCJdLFxyXG4gICAgICAgICAgICBJRDogW1wiXCJdLFxyXG4gICAgICAgICAgICBTdGF0dXNJRDogW1wiXCJdLFxyXG4gICAgICAgICAgICBSZWY6IFtcIlwiXSxcclxuICAgICAgICAgICAgR1c6IFtcIlwiXSxcclxuICAgICAgICAgICAgVFBUOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIEhlcms6IFtcIlwiXSxcclxuICAgICAgICAgICAgQmVzdDogW1wiXCJdLFxyXG4gICAgICAgICAgICBEdG06IFtcIlwiXSxcclxuICAgICAgICAgICAgU3RhdHVzOiBbXCJcIl1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5rd1NlcnZpY2UuZ2V0U3RhdHVzTGlzdCgpXHJcbiAgICAgICAgICAgIC50aGVuKChsc3Q6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobHN0ICE9IG51bGwgJiYgbHN0ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzRHJvcGRvd25MaXN0ID0gWy4uLmxzdF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0Zvcm0ucGF0Y2hWYWx1ZSh7IHN0czogKHRoaXMuTmlldXdlQWFudnJhZ2VuID8gJzAnIDogJy0xJykgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0NoYW5nZWQoKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXR1c0NoYW5nZWQoKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXR1c0Zvcm0uY29udHJvbHMuc3RzLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCItMVwiOiAvLyBTZWxlY3RlZXJcclxuICAgICAgICAgICAgICAgIHRoaXMuU3RhdHVzSWQgPSAtMTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wID0gW107XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDogLy8gU3RhdHVzXHJcbiAgICAgICAgICAgICAgICB0aGlzLlN0YXR1c0lkID0gdGhpcy5zdGF0dXNGb3JtLmNvbnRyb2xzLnN0cy52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFN0YXR1c0xpc3QoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2FkU3RhdHVzTGlzdCgpIHtcclxuICAgICAgICB0aGlzLmt3U2VydmljZS5nd01lbGRpbmdMaXN0QnlTdGF0dXModGhpcy5TdGF0dXNJZClcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGE6IElLV0dyaWRJdGVtW10pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcCA9IFsuLi5kYXRhXTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyRm9ybUZpZWxkcygpO1xyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJGb3JtRmllbGRzKCkge1xyXG4gICAgICAgIC8vIENsZWFyIGFsbCBGb3JtIFZhbHVlcyBleGNlcHQgc3RzXHJcbiAgICAgICAgdGhpcy5zdGF0dXNGb3JtLnBhdGNoVmFsdWUoe1xyXG4gICAgICAgICAgICBJRDogXCJcIixcclxuICAgICAgICAgICAgU3RhdHVzSUQ6IFwiXCIsXHJcbiAgICAgICAgICAgIFJlZjogXCJcIixcclxuICAgICAgICAgICAgR1c6IFwiXCIsXHJcbiAgICAgICAgICAgIFRQVDogXCJcIixcclxuICAgICAgICAgICAgSGVyazogXCJcIixcclxuICAgICAgICAgICAgQmVzdDogXCJcIixcclxuICAgICAgICAgICAgRHRtOiBcIlwiLFxyXG4gICAgICAgICAgICBTdGF0dXM6IFwiXCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBUb2dnbGVFeHRlbmRlZFNlYXJjaCgpIHtcclxuICAgICAgICB0aGlzLmlzRXh0ZW5kZWRTZWFyY2ggPSAhdGhpcy5pc0V4dGVuZGVkU2VhcmNoO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRXh0ZW5kZWRTZWFyY2goem9la1ZlbGRlbjogU2dzS1dab2VrVmVsZGVuKSB7XHJcbiAgICAgICAgdGhpcy5rd1NlcnZpY2UuZ3dab2VrTGlzdCh6b2VrVmVsZGVuKS50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbigobHN0OiBJS1dHcmlkSXRlbVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSBsc3Q7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXAgPSBbLi4ubHN0XTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJGb3JtRmllbGRzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlcigpIHtcclxuICAgICAgICBjb25zdCBpZCA9IHRoaXMuc3RhdHVzRm9ybS5jb250cm9scy5JRC52YWx1ZTtcclxuICAgICAgICBjb25zdCByZWYgPSB0aGlzLnN0YXR1c0Zvcm0uY29udHJvbHMuUmVmLnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgZ3cgPSB0aGlzLnN0YXR1c0Zvcm0uY29udHJvbHMuR1cudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCB0cHQgPSB0aGlzLnN0YXR1c0Zvcm0uY29udHJvbHMuVFBULnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgaGVyayA9IHRoaXMuc3RhdHVzRm9ybS5jb250cm9scy5IZXJrLnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgYmVzdCA9IHRoaXMuc3RhdHVzRm9ybS5jb250cm9scy5CZXN0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgZHRtID0gdGhpcy5zdGF0dXNGb3JtLmNvbnRyb2xzLkR0bS52YWx1ZTtcclxuICAgICAgICBjb25zdCBzdGF0dXMgPSB0aGlzLnN0YXR1c0Zvcm0uY29udHJvbHMuU3RhdHVzLnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgZHAgPSBuZXcgRGF0ZVBpcGUoXCJlbi1VU1wiKTtcclxuXHJcbiAgICAgICAgLy8gZmlsdGVyIG91ciBkYXRhXHJcbiAgICAgICAgY29uc3QgdGVtcCA9IHRoaXMudGVtcC5maWx0ZXIoZnVuY3Rpb24gKGQ6IElLV0dyaWRJdGVtKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgU0R0bTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChkdG0gPiBcIlwiKSB7IFNEdG0gPSBkcC50cmFuc2Zvcm0oZC5zdGFydERhdHVtLCBcImRkL01NL3l5eXlcIik7IH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoKGQubWVsZGluZ0lEICE9IG51bGwgJiYgZC5tZWxkaW5nSUQgIT0gdW5kZWZpbmVkICYmIGQubWVsZGluZ0lELnRvU3RyaW5nKCkuaW5kZXhPZihpZCkgIT09IC0xKSB8fCAhaWQpXHJcbiAgICAgICAgICAgICAgICAmJiAoKGQua2xhbnRSZWZlcmVudGllICE9IG51bGwgJiYgZC5rbGFudFJlZmVyZW50aWUgIT0gdW5kZWZpbmVkICYmIGQua2xhbnRSZWZlcmVudGllLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihyZWYpICE9PSAtMSkgfHwgIXJlZilcclxuICAgICAgICAgICAgICAgICYmICgoZC5ncm9uZHdlcmtlciAhPSBudWxsICYmIGQuZ3JvbmR3ZXJrZXIgIT0gdW5kZWZpbmVkICYmIGQuZ3JvbmR3ZXJrZXIudG9Mb3dlckNhc2UoKS5pbmRleE9mKGd3KSAhPT0gLTEpIHx8ICFndylcclxuICAgICAgICAgICAgICAgICYmICgoZC50cmFuc3BvcnRldXIgIT0gbnVsbCAmJiBkLnRyYW5zcG9ydGV1ciAhPSB1bmRlZmluZWQgJiYgZC50cmFuc3BvcnRldXIudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRwdCkgIT09IC0xKSB8fCAhdHB0KVxyXG4gICAgICAgICAgICAgICAgJiYgKChkLmhlcmtvbXN0ICE9IG51bGwgJiYgZC5oZXJrb21zdCAhPSB1bmRlZmluZWQgJiYgZC5oZXJrb21zdC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoaGVyaykgIT09IC0xKSB8fCAhaGVyaylcclxuICAgICAgICAgICAgICAgICYmICgoZC5iZXN0ZW1taW5nICE9IG51bGwgJiYgZC5iZXN0ZW1taW5nICE9IHVuZGVmaW5lZCAmJiBkLmJlc3RlbW1pbmcudG9Mb3dlckNhc2UoKS5pbmRleE9mKGJlc3QpICE9PSAtMSkgfHwgIWJlc3QpXHJcbiAgICAgICAgICAgICAgICAmJiAoKGQuc3RhdHVzICE9IG51bGwgJiYgZC5zdGF0dXMgIT0gdW5kZWZpbmVkICYmIGQuc3RhdHVzLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzdGF0dXMpICE9PSAtMSkgfHwgIXN0YXR1cylcclxuICAgICAgICAgICAgICAgICYmICghZHRtIHx8IChTRHRtICE9IG51bGwgJiYgU0R0bS5pbmRleE9mKGR0bSkgIT09IC0xKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgcm93c1xyXG4gICAgICAgIHRoaXMucm93cyA9IHRlbXA7XHJcbiAgICAgICAgLy8gV2hlbmV2ZXIgdGhlIGZpbHRlciBjaGFuZ2VzLCBhbHdheXMgZ28gYmFjayB0byB0aGUgZmlyc3QgcGFnZVxyXG4gICAgICAgIHRoaXMuZ3JpZC5vZmZzZXQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQWN0aXZhdGUoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGlmIChldmVudC50eXBlID09PSBcImRibGNsaWNrXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5saW5rVG9LVyhldmVudC5yb3dbXCJtZWxkaW5nSURcIl0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsaW5rVG9LVyhpZDogbnVtYmVyKSB7XHJcbiAgICAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIva2xlaW5ld2VydmVuLWRldGFpbFwiLCBpZF0pO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9ndy9rdy1lZGl0XCIsIGlkXSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rdy1ncmlkL2d3LWt3LWdyaWQuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxmb3JtIFtmb3JtR3JvdXBdPVxcXCJzdGF0dXNGb3JtXFxcIiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkIHBhZGRpbmdUb3AxMHB4XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwidXNlU2VhcmNoXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0zXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgKGNsaWNrKT1cXFwiVG9nZ2xlRXh0ZW5kZWRTZWFyY2goKVxcXCI+e3sgaXNFeHRlbmRlZFNlYXJjaCA/ICdFbmtlbHZvdWRpZyB6b2VrZW4nIDogJ0dlYXZhbmNlZXJkIHpvZWtlbicgfX08L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiAqbmdJZj1cXFwidXNlU2VhcmNoICYmICFpc0V4dGVuZGVkU2VhcmNoXFxcIiBjbGFzcz1cXFwiY29sLXNtLTlcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwicGFkZGluZ1JpZ2h0MTBweFxcXCI+RmlsdGVyIHN0YXR1czwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPHNlbGVjdCBmb3JtQ29udHJvbE5hbWU9XFxcInN0c1xcXCIgRG90dGVkQm9yZGVyQmVsb3cgKGNoYW5nZSk9XFxcInN0YXR1c0NoYW5nZWQoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIi0xXFxcIj5TZWxlY3RlZXI8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCBzdHMgb2Ygc3RhdHVzRHJvcGRvd25MaXN0XFxcIiBbdmFsdWVdPVxcXCJzdHMuaWRcXFwiIFtpbm5lckhUTUxdPVxcXCJzdHMuc3RhdHVzXFxcIj48L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwidXNlU2VhcmNoICYmIGlzRXh0ZW5kZWRTZWFyY2hcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyXFxcIj48Z3cta3ctem9la3VpdGdlYnJlaWQgKHNlYXJjaGluZyk9XFxcIm9uRXh0ZW5kZWRTZWFyY2goJGV2ZW50KVxcXCI+PC9ndy1rdy16b2VrdWl0Z2VicmVpZD48L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIk5neFRhYmxlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUgI3RhYmxlXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJib290c3RyYXBcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhY3RpdmF0ZSk9XFxcIm9uQWN0aXZhdGUoJGV2ZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jvd3NdPVxcXCJyb3dzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29sdW1uTW9kZV09XFxcIidmbGV4J1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2hlYWRlckhlaWdodF09XFxcIjUwXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9vdGVySGVpZ2h0XT1cXFwiNDBcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsaW1pdF09XFxcImFwcExhYmVscy50YWJsZVZpZXdSb3dzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY3NzQ2xhc3Nlc109XFxcImFwcExhYmVscy5pY29uc0Nzc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21lc3NhZ2VzXT1cXFwie3RvdGFsTWVzc2FnZTogYXBwTGFiZWxzLlRvdGFsLnRvTG93ZXJDYXNlKCksIGVtcHR5TWVzc2FnZTogYXBwTGFiZWxzLk5vRGF0YVRvRGlzcGxheX1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzb3J0c109XFxcIlt7cHJvcDonSUQnLCBkaXI6J2Rlc2MnIH1dXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm93SGVpZ2h0XT1cXFwiJ2F1dG8nXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBwcm9wPVxcXCJtZWxkaW5nSURcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJMYWJlbFxcXCI+TnVtbWVyPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIklEXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1yb3c9XFxcInJvd1xcXCIgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBbcm91dGVyTGlua109XFxcIlxcXCIgKGNsaWNrKT1cXFwibGlua1RvS1cocm93WydtZWxkaW5nSUQnXSlcXFwiPjxzcGFuPnt7cm93WydtZWxkaW5nSUQnXX19PC9zcGFuPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBwcm9wPVxcXCJrbGFudFJlZmVyZW50aWVcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJMYWJlbFxcXCI+UmVmZXJlbnRpZTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJSZWZcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiM1xcXCIgcHJvcD1cXFwiZ3JvbmR3ZXJrZXJcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJMYWJlbFxcXCI+R3JvbmR3ZXJrZXI8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiR1dcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiM1xcXCIgcHJvcD1cXFwidHJhbnNwb3J0ZXVyXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyTGFiZWxcXFwiPlRyYW5zcG9ydGV1cjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJUUFRcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiM1xcXCIgcHJvcD1cXFwiaGVya29tc3RcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJMYWJlbFxcXCI+SGVya29tc3Q8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiSGVya1xcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIzXFxcIiBwcm9wPVxcXCJiZXN0ZW1taW5nXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyTGFiZWxcXFwiPkJlc3RlbW1pbmc8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiQmVzdFxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBuYW1lPVxcXCJzdGFydERhdHVtXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCIgTmd4RmlsdGVyTGFiZWxcXFwiPlN0YXJ0RGF0dW08L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiRHRtXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC12YWx1ZT1cXFwidmFsdWVcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3t2YWx1ZSB8IGRhdGU6XFxcImRkL01NL3l5eXlcXFwifX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBwcm9wPVxcXCJzdGF0dXNcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJMYWJlbFxcXCI+U3RhdHVzPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIlN0YXR1c1xcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBuYW1lPVxcXCJEZXRhaWxcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1yb3c9XFxcInJvd1xcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vLi4vLi4vLi4vaW1hZ2VzL2ljb19lZGl0cmVjb3JkLmdpZlwiKSArIFwiXFxcIiBjbGFzcz1cXFwiaWJ0blxcXCIgKGNsaWNrKT1cXFwibGlua1RvS1cocm93WydtZWxkaW5nSUQnXSlcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG48L2Zvcm0+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWt3LWdyaWQvZ3cta3ctZ3JpZC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNzMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ndy1rdy1ncmlkLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rdy1ncmlkL2d3LWt3LWdyaWQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNzMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta3ctZ3JpZC9ndy1rdy1ncmlkLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDczNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UgfSBmcm9tIFwibmd4LXRvYXN0clwiO1xyXG5cclxuaW1wb3J0IHsgYXBwTGFiZWxzIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvYXBwTGFiZWxzXCI7XHJcbmltcG9ydCB7IEdlbmVyYWxTY3JpcHRzIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvZ2VuZXJhbC5zY3JpcHRzXCI7XHJcblxyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQgeyBIdHRwRG9zc2llclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaHR0cC1kb3NzaWVyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSHR0cEtsYW50U2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9odHRwLWtsYW50LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSHR0cFRWU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9odHRwLXR2LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBCc0xvY2FsZVNlcnZpY2UgfSBmcm9tIFwibmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyXCI7XHJcbmltcG9ydCB7IFNnc0tXWm9la1ZlbGRlbiB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL3Nnc0NsYXNzZXMuc2NyaXB0c1wiO1xyXG5pbXBvcnQgeyBJU2dzS2xhbnRDb21ib0xpc3RJdGVtLCBJU2dzRG9zc2llckNvbWJvTGlzdEl0ZW0gfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9zZ3NJbnRlcmZhY2VzLnNjcmlwdHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiZ3cta3ctem9la3VpdGdlYnJlaWRcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2d3LWt3LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2d3LWt3LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5jc3MnKV0sXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBnd0tXWm9la1VpdGdlYnJlaWRDb21wb25lbnQgZXh0ZW5kcyBHZW5lcmFsU2NyaXB0cyBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBhcHBMYWJlbHMgPSBhcHBMYWJlbHM7XHJcbiAgICB6a0Zvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgICBJbmRpZW5lckxpc3RJdGVtczogSVNnc0tsYW50Q29tYm9MaXN0SXRlbVtdID0gbnVsbDtcclxuICAgIERvc3NpZXJCZWhlZXJkZXJMaXN0SXRlbXM6IElTZ3NEb3NzaWVyQ29tYm9MaXN0SXRlbVtdID0gbnVsbDtcclxuXHJcbiAgICB6b2VrVmVsZGVuOiBTZ3NLV1pvZWtWZWxkZW4gPSBudWxsO1xyXG5cclxuICAgIEBPdXRwdXQoKSBzZWFyY2hpbmc6IEV2ZW50RW1pdHRlcjxTZ3NLV1pvZWtWZWxkZW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxTZ3NLV1pvZWtWZWxkZW4+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfdG9hc3RyOiBUb2FzdHJTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfbG9jYWxlU2VydmljZTogQnNMb2NhbGVTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBodHRwRG9zc2llcjogSHR0cERvc3NpZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBodHRwS2xhbnQ6IEh0dHBLbGFudFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGh0dHBUVjogSHR0cFRWU2VydmljZSxcclxuICAgICAgICAgICAgICAgIEBJbmplY3QoXCJCQVNFX1VSTFwiKSBwcml2YXRlIHJlYWRvbmx5IF9iYXNlVXJsOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX3Nhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XHJcbiAgICAgICAgc3VwZXIoX3RvYXN0cik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gTmVlZGVkIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBic0RhdGVwaWNrZXIgdG8gYWNjZXB0IGRkL01NL3l5eXkgZm9ybWF0dGluZ1xyXG4gICAgICAgIHRoaXMuX2xvY2FsZVNlcnZpY2UudXNlKFwiYm9vdHN0cmFwLWxvY2FsZS1ubGJlXCIpO1xyXG5cclxuICAgICAgICB0aGlzLnprRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBDb2RlOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIEluZGllbmVyOiBbXCItMVwiXSxcclxuICAgICAgICAgICAgVmVya2xhcmluZ09udHZhbmdlbjogW1wiXCJdLFxyXG4gICAgICAgICAgICBSZWZlcmVudGllOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIERvc3NpZXJCZWhlZXJkZXI6IFtcIi0xXCJdXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZERyb3Bkb3ducygpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWREcm9wZG93bnMoKSB7XHJcbiAgICAgICAgdGhpcy5odHRwS2xhbnQuc2dzQ29tYm9MaXN0SXRlbXMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChsc3Q6IElTZ3NLbGFudENvbWJvTGlzdEl0ZW1bXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxzdCAhPSBudWxsICYmIGxzdCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkluZGllbmVyTGlzdEl0ZW1zID0gWy4uLmxzdF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmh0dHBEb3NzaWVyLnNnc0NvbWJvTGlzdEl0ZW1zKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgobHN0OiBJU2dzRG9zc2llckNvbWJvTGlzdEl0ZW1bXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxzdCAhPSBudWxsICYmIGxzdCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkRvc3NpZXJCZWhlZXJkZXJMaXN0SXRlbXMgPSBbLi4ubHN0XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmFpc2VTZWFyY2goKSB7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuID0gbmV3IFNnc0tXWm9la1ZlbGRlbigpO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5rbGFudElkID0gdGhpcy56a0Zvcm0uY29udHJvbHMuSW5kaWVuZXIudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLnJlZmVyZW50aWUgPSB0aGlzLnprRm9ybS5jb250cm9scy5SZWZlcmVudGllLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi52ZXJrbGFyaW5nb250dmFuZ2VuID0gdGhpcy56a0Zvcm0uY29udHJvbHMuVmVya2xhcmluZ09udHZhbmdlbi52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4uZG9zc2llckJlaGVlcmRlcklkID0gdGhpcy56a0Zvcm0uY29udHJvbHMuRG9zc2llckJlaGVlcmRlci52YWx1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWFyY2hpbmcuZW1pdCh0aGlzLnpvZWtWZWxkZW4pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta3ctem9la3VpdGdlYnJlaWQvZ3cta3ctem9la3VpdGdlYnJlaWQuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxmb3JtIFtmb3JtR3JvdXBdPVxcXCJ6a0Zvcm1cXFwiIGNsYXNzPVxcXCJjb250YWluZXItZmx1aWQgcGFkZGluZ1RvcDMwcHhcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwiZGRsSW5kaWVuZXJcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5LbGFudC9JbmRpZW5lcjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24gY29sLXNtLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJkZGxJbmRpZW5lclxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJJbmRpZW5lclxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcIndpZHRoMTAwcGVyY2VudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCItMVxcXCI+U2VsZWN0ZWVyPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IGtsYW50IG9mIEluZGllbmVyTGlzdEl0ZW1zXFxcIiBbdmFsdWVdPVxcXCJrbGFudC5rbGFudElEXFxcIiBbaW5uZXJIVE1MXT1cXFwia2xhbnQubmFhbVxcXCI+PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJjaGtWZXJrbGFyaW5nT250dmFuZ2VuXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+VmVya2xhcmluZyBPbnR2YW5nZW46PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjaGVja2JveCBjb2wtc20tNFxcXCI+PGRpdiBjbGFzcz1cXFwibWFyZ2luVG9wTWluMTBweCBtYXJnaW5MZWZ0MjBweFxcXCI+PGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBpZD1cXFwiY2hrVmVya2xhcmluZ09udHZhbmdlblxcXCIgY2xhc3M9XFxcIm1hcmdpbkJvdHRvbTBcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiVmVya2xhcmluZ09udHZhbmdlblxcXCIgdmFsdWU9XFxcIlxcXCIgLz48L2Rpdj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwidHh0UmVmZXJlbnRpZVxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPlJlZmVyZW50aWU6PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0eHRSZWZlcmVudGllXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIlJlZmVyZW50aWVcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJkZGxEb3NzaWVyQmVoZWVyZGVyXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+RG9zc2llckJlaGVlcmRlcjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24gY29sLXNtLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJkZGxEb3NzaWVyQmVoZWVyZGVyXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkRvc3NpZXJCZWhlZXJkZXJcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJ3aWR0aDEwMHBlcmNlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiLTFcXFwiPlNlbGVjdGVlcjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCBkb3NzYmVoIG9mIERvc3NpZXJCZWhlZXJkZXJMaXN0SXRlbXNcXFwiIFt2YWx1ZV09XFxcImRvc3NiZWguZG9zc2llckJlaGVlcmRlcklEXFxcIiBbaW5uZXJIVE1MXT1cXFwiZG9zc2JlaC5uYWFtXFxcIj48L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTQgY29sLXNtLW9mZnNldC04XFxcIj48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwicmFpc2VTZWFyY2goKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCI+e3thcHBMYWJlbHMuU2VuZH19PC9idXR0b24+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9mb3JtPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rdy16b2VrdWl0Z2VicmVpZC9ndy1rdy16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNzM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ndy1rdy16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta3ctem9la3VpdGdlYnJlaWQvZ3cta3ctem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNzM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta3ctem9la3VpdGdlYnJlaWQvZ3cta3ctem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNzM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgR2VuZXJhbFNjcmlwdHMgfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9nZW5lcmFsLnNjcmlwdHNcIjtcclxuaW1wb3J0IHsgVG9hc3RyU2VydmljZSB9IGZyb20gXCJuZ3gtdG9hc3RyXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgSHR0cFRWU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9odHRwLXR2LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSVNnc1RWQnlTdGF0dXMgfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9zZ3NJbnRlcmZhY2VzLnNjcmlwdHNcIjtcclxuaW1wb3J0IHsgU2dzVFZab2VrVmVsZGVuIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvc2dzQ2xhc3Nlcy5zY3JpcHRzXCI7XHJcbmltcG9ydCB7IGFwcExhYmVscyB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL2FwcExhYmVsc1wiO1xyXG5pbXBvcnQgeyBEYXRhdGFibGVDb21wb25lbnQgfSBmcm9tIFwiQHN3aW1sYW5lL25neC1kYXRhdGFibGVcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IElUVlN0YXR1c0RlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9pbnRlcmZhY2VzLnNjcmlwdHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiZ3ctdHYtZ3JpZFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZ3ctdHYtZ3JpZC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9ndy10di1ncmlkLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBnd1RWR3JpZENvbXBvbmVudCBleHRlbmRzIEdlbmVyYWxTY3JpcHRzIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGFwcExhYmVscyA9IGFwcExhYmVscztcclxuXHJcbiAgICBTdGF0dXNEcm9wZG93bkxpc3Q6IElUVlN0YXR1c0RlZmluaXRpb25bXSA9IG51bGw7XHJcbiAgICBTdGF0dXNMaXN0OiBJU2dzVFZCeVN0YXR1c1tdID0gbnVsbDtcclxuICAgIHJvd3M6IElTZ3NUVkJ5U3RhdHVzW10gPSBudWxsO1xyXG4gICAgdGVtcDogYW55W10gPSBbXTtcclxuICAgIEBWaWV3Q2hpbGQoRGF0YXRhYmxlQ29tcG9uZW50KSB0YWJsZTogRGF0YXRhYmxlQ29tcG9uZW50O1xyXG5cclxuICAgIEBJbnB1dCgpIHRpdGxlID0gXCJcIjtcclxuICAgIFN0YXR1c0lkOiBudW1iZXIgPSAtMTtcclxuICAgIGlzRXh0ZW5kZWRTZWFyY2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBmb3JOaWV1d2VBYW52cmFnZW4gPSB0cnVlO1xyXG4gICAgQElucHV0KCdOaWV1d2VBYW52cmFnZW4nKVxyXG4gICAgZ2V0IE5pZXV3ZUFhbnZyYWdlbigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JOaWV1d2VBYW52cmFnZW47XHJcbiAgICB9XHJcbiAgICBzZXQgTmlldXdlQWFudnJhZ2VuKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5mb3JOaWV1d2VBYW52cmFnZW4gPSBcIlwiICsgdmFsdWUgIT09IFwiZmFsc2VcIjtcclxuICAgIH1cclxuXHJcbiAgICB1c2VTZWFyY2ggPSB0cnVlO1xyXG4gICAgQElucHV0KCdFeHRlbmRlZFNlYXJjaCcpXHJcbiAgICBnZXQgRXh0ZW5kZWRTZWFyY2goKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlU2VhcmNoO1xyXG4gICAgfVxyXG4gICAgc2V0IEV4dGVuZGVkU2VhcmNoKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy51c2VTZWFyY2ggPSBcIlwiICsgdmFsdWUgIT09IFwiZmFsc2VcIjtcclxuICAgIH1cclxuXHJcbiAgICBjYW5EZWxldGUgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgnQWxsb3dEZWxldGUnKVxyXG4gICAgZ2V0IEFsbG93RGVsZXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbkRlbGV0ZTtcclxuICAgIH1cclxuICAgIHNldCBBbGxvd0RlbGV0ZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuY2FuRGVsZXRlID0gXCJcIiArIHZhbHVlICE9PSBcImZhbHNlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgU3RzRm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX3RvYXN0cjogVG9hc3RyU2VydmljZSwgcHJpdmF0ZSByZWFkb25seSBmYjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgcmVhZG9ubHkgaHR0cFRWOiBIdHRwVFZTZXJ2aWNlLCBwcml2YXRlIHJlYWRvbmx5IHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJlYWRvbmx5IHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByZWFkb25seSBhdXRoOiBBdXRoZW50aWNhdGlvblNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcihfdG9hc3RyKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5TdHNGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICAgICAgIHN0czogWy0xXSxcclxuICAgICAgICAgICAgdGVjaG5pc2NoVmVyc2xhZ0lEOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIG5hYW06IFtcIlwiXSxcclxuICAgICAgICAgICAgZ2VtZWVudGVPbmRlcnpvZWtzbG9jYXRpZTogW1wiXCJdLFxyXG4gICAgICAgICAgICBpbmRpZW5pbmdzRGF0dW06IFtcIlwiXSxcclxuICAgICAgICAgICAgc3RhdHVzRGF0dW06IFtcIlwiXSxcclxuICAgICAgICAgICAgaW5kaWVuaW5nc3dpanplOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIGdlZmFjdHVyZWVyZDogW1wiXCJdXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaHR0cFRWLlN0YXR1c0RlZmluaXRpb25MaXN0KHRydWUpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGxzdDogSVRWU3RhdHVzRGVmaW5pdGlvbltdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobHN0ICE9IG51bGwgJiYgbHN0ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU3RhdHVzRHJvcGRvd25MaXN0ID0gWy4uLmxzdF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLlN0c0Zvcm0ucGF0Y2hWYWx1ZSh7IHN0czogKHRoaXMuTmlldXdlQWFudnJhZ2VuID8gJzAnIDogJzEnKSB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzQ2hhbmdlZCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0dXNDaGFuZ2VkKCkge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5TdHNGb3JtLmNvbnRyb2xzLnN0cy52YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiLTFcIjogLy8gU2VsZWN0ZWVyXHJcbiAgICAgICAgICAgICAgICB0aGlzLlN0YXR1c0lkID0gLTE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCIwXCI6IC8vIE5pZXV3ZSBBYW52cmFnZW4gXHJcbiAgICAgICAgICAgICAgICB0aGlzLlN0YXR1c0lkID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuTmlldXdlQWFudnJhZ2VuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFN0YXR1c0xpc3QoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAvLyBTdGF0dXNcclxuICAgICAgICAgICAgICAgIHRoaXMuU3RhdHVzSWQgPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuc3RzLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5OaWV1d2VBYW52cmFnZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFN0YXR1c0xpc3QoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2FkU3RhdHVzTGlzdCgpIHtcclxuICAgICAgICB0aGlzLmh0dHBUVi5nd1N0YXR1c0xpc3QodGhpcy5TdGF0dXNJZCwgdGhpcy5OaWV1d2VBYW52cmFnZW4pLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKChsc3Q6IElTZ3NUVkJ5U3RhdHVzW10pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IGxzdDtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcCA9IFsuLi5sc3RdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckZvcm1GaWVsZHMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FeHRlbmRlZFNlYXJjaCh6b2VrVmVsZGVuOiBTZ3NUVlpvZWtWZWxkZW4pIHtcclxuICAgICAgICB0aGlzLmh0dHBUVi5nd1pvZWtMaXN0KHpvZWtWZWxkZW4pLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKChsc3Q6IElTZ3NUVkJ5U3RhdHVzW10pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IGxzdDtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcCA9IFsuLi5sc3RdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckZvcm1GaWVsZHMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJGb3JtRmllbGRzKCkge1xyXG4gICAgICAgIC8vIENsZWFyIGFsbCBGb3JtIFZhbHVlcyBleGNlcHQgc3RzXHJcbiAgICAgICAgdGhpcy5TdHNGb3JtLnBhdGNoVmFsdWUoe1xyXG4gICAgICAgICAgICB0ZWNobmlzY2hWZXJzbGFnSUQ6IFwiXCIsXHJcbiAgICAgICAgICAgIG5hYW06IFwiXCIsXHJcbiAgICAgICAgICAgIGdlbWVlbnRlT25kZXJ6b2Vrc2xvY2F0aWU6IFwiXCIsXHJcbiAgICAgICAgICAgIGluZGllbmluZ3NEYXR1bTogXCJcIixcclxuICAgICAgICAgICAgc3RhdHVzRGF0dW06IFwiXCIsXHJcbiAgICAgICAgICAgIGluZGllbmluZ3N3aWp6ZTogXCJcIixcclxuICAgICAgICAgICAgZ2VmYWN0dXJlZXJkOiBcIlwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHRlY2huaXNjaFZlcnNsYWdJRCA9IHRoaXMuU3RzRm9ybS5jb250cm9scy50ZWNobmlzY2hWZXJzbGFnSUQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgbmFhbSA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5uYWFtLnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgR09MID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLmdlbWVlbnRlT25kZXJ6b2Vrc2xvY2F0aWUudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBpbmRpZW5pbmdzRGF0dW0gPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuaW5kaWVuaW5nc0RhdHVtLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHN0YXR1c0RhdHVtID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLnN0YXR1c0RhdHVtLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGluZGllbmluZ3N3aWp6ZSA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5pbmRpZW5pbmdzd2lqemUudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBnZWZhY3R1cmVlcmQgPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuZ2VmYWN0dXJlZXJkLnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgZHAgPSBuZXcgRGF0ZVBpcGUoXCJlbi1VU1wiKTtcclxuXHJcbiAgICAgICAgLy8gZmlsdGVyIG91ciBkYXRhXHJcbiAgICAgICAgY29uc3QgdGVtcCA9IHRoaXMudGVtcC5maWx0ZXIoKHJvdzogSVNnc1RWQnlTdGF0dXMpID0+IHtcclxuICAgICAgICAgICAgdmFyIGluZGllbmluZ3NEYXR1bUFzU3RyaW5nOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKGluZGllbmluZ3NEYXR1bSA+IFwiXCIpIHsgaW5kaWVuaW5nc0RhdHVtQXNTdHJpbmcgPSBkcC50cmFuc2Zvcm0ocm93LmluZGllbmluZ3NEYXR1bSwgXCJkZC9NTS95eXl5XCIpOyB9XHJcbiAgICAgICAgICAgIHZhciBzdGF0dXNEYXR1bUFzU3RyaW5nOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHN0YXR1c0RhdHVtID4gXCJcIikgeyBzdGF0dXNEYXR1bUFzU3RyaW5nID0gZHAudHJhbnNmb3JtKHJvdy5zdGF0dXNEYXR1bSwgXCJkZC9NTS95eXl5XCIpOyB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKCF0ZWNobmlzY2hWZXJzbGFnSUQgfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHJvdy50ZWNobmlzY2hWZXJzbGFnSUQudG9TdHJpbmcoKSkgJiYgcm93LnRlY2huaXNjaFZlcnNsYWdJRC50b1N0cmluZygpLmluZGV4T2YodGVjaG5pc2NoVmVyc2xhZ0lEKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFuYWFtIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChyb3cubmFhbS50b0xvd2VyQ2FzZSgpKSAmJiByb3cubmFhbS50b0xvd2VyQ2FzZSgpLmluZGV4T2YobmFhbSkgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghR09MIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChyb3cuZ2VtZWVudGVPbmRlcnpvZWtzbG9jYXRpZS50b0xvd2VyQ2FzZSgpKSAmJiByb3cuZ2VtZWVudGVPbmRlcnpvZWtzbG9jYXRpZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoR09MKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFpbmRpZW5pbmdzRGF0dW0gfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKGluZGllbmluZ3NEYXR1bUFzU3RyaW5nKSAmJiBpbmRpZW5pbmdzRGF0dW1Bc1N0cmluZy5pbmRleE9mKGluZGllbmluZ3NEYXR1bSkgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghc3RhdHVzRGF0dW0gfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHN0YXR1c0RhdHVtQXNTdHJpbmcpICYmIHN0YXR1c0RhdHVtQXNTdHJpbmcuaW5kZXhPZihzdGF0dXNEYXR1bSkgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghaW5kaWVuaW5nc3dpanplIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChyb3cuaW5kaWVuaW5nc3dpanplLnRvTG93ZXJDYXNlKCkpICYmIHJvdy5pbmRpZW5pbmdzd2lqemUudG9Mb3dlckNhc2UoKS5pbmRleE9mKGluZGllbmluZ3N3aWp6ZSkgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghZ2VmYWN0dXJlZXJkIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChyb3cuZ2VmYWN0dXJlZXJkLnRvTG93ZXJDYXNlKCkpICYmIHJvdy5nZWZhY3R1cmVlcmQudG9Mb3dlckNhc2UoKS5pbmRleE9mKGdlZmFjdHVyZWVyZCkgIT09IC0xKSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIHRoZSByb3dzXHJcbiAgICAgICAgdGhpcy5yb3dzID0gdGVtcDtcclxuICAgICAgICAvLyBXaGVuZXZlciB0aGUgZmlsdGVyIGNoYW5nZXMsIGFsd2F5cyBnbyBiYWNrIHRvIHRoZSBmaXJzdCBwYWdlXHJcbiAgICAgICAgdGhpcy50YWJsZS5vZmZzZXQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJvd0NsYXNzKHJvdzogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIFwiaWJ0blwiO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQWN0aXZhdGUoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGlmIChldmVudC50eXBlID09PSBcImRibGNsaWNrXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5saW5rVG9UVihldmVudC5yb3dbXCJ0ZWNobmlzY2hWZXJzbGFnSURcIl0sIGV2ZW50LnJvd1tcImlzRXZhbHVhdGllVmxhcmVibzIwMDhcIl0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsaW5rVG9UVih0dklkOiBudW1iZXIsIGlzVmxhcmVibzIwMDg6IGJvb2xlYW4gfCBudWxsKSB7XHJcbiAgICAgICAgaWYgKGlzVmxhcmVibzIwMDgpIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiZ3cvdHYtZWRpdFwiLCB0dklkXSk7ICAvLyA9PiBHV0JlaGVlci9UVkVkaXQyMDA4LmFzcHggKG91ZGUgR1cpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImd3L3R2LWVkaXRcIiwgdHZJZF0pOyAgLy8gPT4gR1dCZWhlZXIvVFZFZGl0RGVmYXVsdC5hc3B4IChvdWRlIEdXKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVUVih0dklkOiBudW1iZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBUb2dnbGVFeHRlbmRlZFNlYXJjaCgpIHtcclxuICAgICAgICB0aGlzLmlzRXh0ZW5kZWRTZWFyY2ggPSAhdGhpcy5pc0V4dGVuZGVkU2VhcmNoO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctdHYtZ3JpZC9ndy10di1ncmlkLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybSBbZm9ybUdyb3VwXT1cXFwiU3RzRm9ybVxcXCIgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZCBwYWRkaW5nVG9wMTBweFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgKm5nSWY9XFxcInVzZVNlYXJjaFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tM1xcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIChjbGljayk9XFxcIlRvZ2dsZUV4dGVuZGVkU2VhcmNoKClcXFwiPnt7IGlzRXh0ZW5kZWRTZWFyY2ggPyAnRW5rZWx2b3VkaWcgem9la2VuJyA6ICdHZWF2YW5jZWVyZCB6b2VrZW4nIH19PC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgKm5nSWY9XFxcInVzZVNlYXJjaCAmJiAhaXNFeHRlbmRlZFNlYXJjaFxcXCIgY2xhc3M9XFxcImNvbC1zbS05XFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcInBhZGRpbmdSaWdodDEwcHhcXFwiPkZpbHRlciBzdGF0dXM8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxzZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVxcXCJzdHNcXFwiIERvdHRlZEJvcmRlckJlbG93IChjaGFuZ2UpPVxcXCJzdGF0dXNDaGFuZ2VkKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCItMVxcXCI+U2VsZWN0ZWVyPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgc3RzIG9mIFN0YXR1c0Ryb3Bkb3duTGlzdFxcXCIgW3ZhbHVlXT1cXFwic3RzLnR2U3RhdHVzSURcXFwiIFtpbm5lckhUTUxdPVxcXCJzdHMuc3RhdHVzXFxcIj48L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwidXNlU2VhcmNoICYmIGlzRXh0ZW5kZWRTZWFyY2hcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyXFxcIj48Z3ctdHYtem9la3VpdGdlYnJlaWQgKHNlYXJjaGluZyk9XFxcIm9uRXh0ZW5kZWRTZWFyY2goJGV2ZW50KVxcXCI+PC9ndy10di16b2VrdWl0Z2VicmVpZD48L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIk5neFRhYmxlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHAgKm5nSWY9XFxcImZvck5pZXV3ZUFhbnZyYWdlbiA9PSBmYWxzZVxcXCIgY2xhc3M9XFxcInB1bGwtbGVmdCBOZ3hUaXRsZVxcXCI+e3t0aXRsZX19PC9wPlxcclxcbiAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZSAjdGFibGVcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJvb3RzdHJhcFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFjdGl2YXRlKT1cXFwib25BY3RpdmF0ZSgkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm93c109XFxcInJvd3NcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb2x1bW5Nb2RlXT1cXFwiJ2ZsZXgnXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaGVhZGVySGVpZ2h0XT1cXFwiNTBcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb290ZXJIZWlnaHRdPVxcXCI0MFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xpbWl0XT1cXFwiYXBwTGFiZWxzLnRhYmxlVmlld1Jvd3NcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3dDbGFzc109XFxcImdldFJvd0NsYXNzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY3NzQ2xhc3Nlc109XFxcImFwcExhYmVscy5pY29uc0Nzc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21lc3NhZ2VzXT1cXFwie3RvdGFsTWVzc2FnZTogYXBwTGFiZWxzLlRvdGFsLnRvTG93ZXJDYXNlKCksIGVtcHR5TWVzc2FnZTogYXBwTGFiZWxzLk5vRGF0YVRvRGlzcGxheX1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzb3J0c109XFxcIlt7cHJvcDondGVjaG5pc2NoVmVyc2xhZ0lEJywgZGlyOidkZXNjJyB9XVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jvd0hlaWdodF09XFxcIidhdXRvJ1xcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMVxcXCIgbmFtZT1cXFwiU2FtZW5nZXN0ZWxkXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtcm93PVxcXCJyb3dcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAqbmdJZj1cXFwicm93WydzYW1lbmdldm9lZ2REb29yJ10gIT0gbnVsbCAmJiByb3dbJ3NhbWVuZ2V2b2VnZERvb3InXSAhPSAnJ1xcXCIgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9pbWFnZXMvUGx1cy5naWZcIikgKyBcIlxcXCIgY2xhc3M9XFxcImlidG5cXFwiIChjbGljayk9XFxcImxpbmtUb0RlbGV0ZShyb3dbJ3RlY2huaXNjaFZlcnNsYWdJRCddKVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAqbmdJZj1cXFwicm93WydleHRlcm5UViddICE9IG51bGwgJiYgcm93WydleHRlcm5UViddID09IHRydWVcXFwiIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vLi4vLi4vLi4vaW1hZ2VzL0diMi5naWZcIikgKyBcIlxcXCIgY2xhc3M9XFxcImlidG5cXFwiIChjbGljayk9XFxcImxpbmtUb0RlbGV0ZShyb3dbJ3RlY2huaXNjaFZlcnNsYWdJRCddKVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBwcm9wPVxcXCJ0ZWNobmlzY2hWZXJzbGFnSURcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJMYWJlbFxcXCI+VFYgTnIuPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcInRlY2huaXNjaFZlcnNsYWdJRFxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtcm93PVxcXCJyb3dcXFwiIGxldC12YWx1ZT1cXFwidmFsdWVcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XFxcInJvd1snaXNFdmFsdWF0aWVWbGFyZWJvMjAwOCddICE9IG51bGwgJiYgcm93Wydpc0V2YWx1YXRpZVZsYXJlYm8yMDA4J10gPT0gdHJ1ZVxcXCIgY2xhc3M9XFxcInBkZkxpbmtcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvdGVjaG5pc2NoLXZlcnNsYWctZGV0YWlsJywgcm93Wyd0ZWNobmlzY2hWZXJzbGFnSUQnXV1cXFwiPjxsYWJlbCBjbGFzcz1cXFwidGV4dFxcXCI+e3tyb3dbJ3RlY2huaXNjaFZlcnNsYWdJRCddfX08L2xhYmVsPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XFxcInJvd1snaXNFdmFsdWF0aWVWbGFyZWJvMjAwOCddID09IG51bGwgfHwgcm93Wydpc0V2YWx1YXRpZVZsYXJlYm8yMDA4J10gPT0gZmFsc2VcXFwiIGNsYXNzPVxcXCJwZGZMaW5rXFxcIiBbcm91dGVyTGlua109XFxcIlsnL3RlY2huaXNjaC12ZXJzbGFnLWRldGFpbCcsIHJvd1sndGVjaG5pc2NoVmVyc2xhZ0lEJ11dXFxcIj48bGFiZWwgY2xhc3M9XFxcInRleHRcXFwiPnt7cm93Wyd0ZWNobmlzY2hWZXJzbGFnSUQnXX19PC9sYWJlbD48L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiNFxcXCIgcHJvcD1cXFwibmFhbVxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckxhYmVsXFxcIj5OYWFtPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIm5hYW1cXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3ZhbHVlfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiM1xcXCIgcHJvcD1cXFwiZ2VtZWVudGVPbmRlcnpvZWtzbG9jYXRpZVxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckxhYmVsXFxcIj5HZW1lZW50ZSBPbmRlcnpvZWtzbG9rYXRpZTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiZ2VtZWVudGVPbmRlcnpvZWtzbG9jYXRpZVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtcm93PVxcXCJyb3dcXFwiIGxldC12YWx1ZT1cXFwidmFsdWVcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3t2YWx1ZX19PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjJcXFwiIG5hbWU9XFxcImluZGllbmluZ3NEYXR1bVxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiIE5neEZpbHRlckxhYmVsXFxcIj5JbmRpZW5pbmdzRGF0dW08L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiaW5kaWVuaW5nc0RhdHVtXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC12YWx1ZT1cXFwidmFsdWVcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3t2YWx1ZSB8IGRhdGU6XFxcImRkL01NL3l5eXlcXFwifX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIyXFxcIiBuYW1lPVxcXCJzdGF0dXNEYXR1bVxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiIE5neEZpbHRlckxhYmVsXFxcIj5TdGF0dXMgRGF0dW08L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwic3RhdHVzRGF0dW1cXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3ZhbHVlIHwgZGF0ZTpcXFwiZGQvTU0veXl5eVxcXCJ9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIHByb3A9XFxcImluZGllbmluZ3N3aWp6ZVxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiIE5neEZpbHRlckxhYmVsXFxcIj5JbmRpZW4uV2lqemU8L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiaW5kaWVuaW5nc3dpanplXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIHByb3A9XFxcImdlZmFjdHVyZWVyZFxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiIE5neEZpbHRlckxhYmVsXFxcIj5HZWZhY3QuPC9zcGFuPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImdlZmFjdHVyZWVyZFxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBuYW1lPVxcXCJEZXRhaWxcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1yb3c9XFxcInJvd1xcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vLi4vLi4vLi4vaW1hZ2VzL2ljb19lZGl0cmVjb3JkLmdpZlwiKSArIFwiXFxcIiBjbGFzcz1cXFwiaWJ0blxcXCIgKGNsaWNrKT1cXFwibGlua1RvVFYocm93Wyd0ZWNobmlzY2hWZXJzbGFnSUQnXSwgcm93Wydpc0V2YWx1YXRpZVZsYXJlYm8yMDA4J10pXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uICpuZ0lmPVxcXCJjYW5EZWxldGVcXFwiIFtmbGV4R3Jvd109XFxcIjFcXFwiIG5hbWU9XFxcIkRldGFpbFxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgIGxldC1yb3c9XFxcInJvd1xcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vLi4vLi4vLi4vaW1hZ2VzL2ljb19kZWxldGUucG5nXCIpICsgXCJcXFwiIGNsYXNzPVxcXCJpYnRuXFxcIiAoY2xpY2spPVxcXCJkZWxldGVUVihyb3dbJ3RlY2huaXNjaFZlcnNsYWdJRCddKVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbjwvZm9ybT5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctdHYtZ3JpZC9ndy10di1ncmlkLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA3NDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaER3QVBBUGNBQUFBQUFBMW5DdzF0QncxdkJ3eHdDQXgxQ0E1NEJneC9CQkJ0RHhOdkZoWnJGeHB0R0JKN0RSTjlDeEorRGhkOENoNTBHQ2xzSkNOeUlpZHdKaVYwSlN4Mkp6VjJOQW1IQWc2TENBcVNCd3FWQ0E2WERCS1BDQk9ORFJxTEVSZVdDeENiQ2hHZkNSbVRDeG1ZRFJtVkVScVdFQitSRmcrcUJ3Ni9BaEtsQ1JTcURCaXZDaDJxQ1J5c0dCQ3dDQkN5REJlMERoUzdCQmkxQkJxM0NoMjZEUmU1RWhpekVCdXpFUit6RVIrekZTU1BHeUdTR1NPY0dDYUZJQytBTERPS0p6R01KalNNS0QyR09pT3FGU0t3RHlLeEV5R3pGQ1M0R1MrZ0pUQ2hLQWJMQUEzREFoSEZBeFBKQXhUSkJCakZCeDdEREIzRkRobk5DeDdOQ1IvQ0VCblNCUnJRQ0NMSkRDTE1FU1RPRXlIV0J5dlNFeTNVRkM3RElFYVpPVWFiUEVtV1AwdVlRRkdMUzFXT1RsU0tVMU9UVVZxV1dGaVlWMXlhVkY2c1dGUzFUVnUxVkdHUVlXQ3VXM0dzYjNhcWJuV2tkbkdwY25LdGNIT3VjWGFyZFhhcmRuKzNkNWE0bVplNW1wMi9ucCsvb0k3Q2g1ZkRscGZBbUpyRG02bkVuOExaeHVuODJ2SDc3Zkw3OC9YNzlQYjg5UFArK2ZQKyt2WDcrUDMxOXZ2NjgvdjU5djM2L1AzOC9BQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFDSDVCQUVBQVA4QUxBQUFBQUFQQUE4QUFBaTlBUDhKSEVpd0lFRTlGaEFRQ0xBQWpzRi9aQVNzc0pLbGl4RUhFd3FhTVVCakNnNDFTYkJFNFJDQjRJQVVUcUI0RWJRbmhwSVpETmdJRkhQQlJvMGpZQXIxYVVHRGlBWUZBaVZnMk5GR3pwMURnT2pNQ2JLaGdNQUVIWUFFVXNTbzBhSkVpT3hrT1BEbkh3VVNIdEs0d1dNSVVKMDRQMEEwRURqbXc0a1hPY0lROHRNQ0Jvc1FFQVkrY0xHRXlwZEJmRzZna0RIaXpFQTBKWjQwS2JJR2lSUW1ReW9VTENQaWloWXVXNnFvOFBFd2p4QVRQSFQwZVBPd05NR0FBRHM9XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9pbWFnZXMvUGx1cy5naWZcbi8vIG1vZHVsZSBpZCA9IDc0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoRHdBUEFQY0FBQUNBQWYvLy93QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUN3QUFBQUFEd0FQQUFBSU93QUJDQnhJc0tEQmd3Z1REZ3pBY0NIRGhnQWdSaFFZd09GRWd4VXBhc1Q0TUdQR2lBMC9oaXhZOGVORWlTTXBpbnlva3FYQ2x6Qmp5Z3dJQURzPVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvaW1hZ2VzL0diMi5naWZcbi8vIG1vZHVsZSBpZCA9IDc0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ3ctdHYtZ3JpZC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctdHYtZ3JpZC9ndy10di1ncmlkLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDc0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wYXJlbnRUb3Age1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG4uY2hpbGRUb3Age1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctdHYtZ3JpZC9ndy10di1ncmlkLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDc0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UgfSBmcm9tIFwibmd4LXRvYXN0clwiO1xyXG5cclxuaW1wb3J0IHsgYXBwTGFiZWxzIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvYXBwTGFiZWxzXCI7XHJcbmltcG9ydCB7IEdlbmVyYWxTY3JpcHRzIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvZ2VuZXJhbC5zY3JpcHRzXCI7XHJcblxyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQgeyBIdHRwQkJSU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9odHRwLWJici5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEh0dHBEb3NzaWVyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9odHRwLWRvc3NpZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIdHRwS2xhbnRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2h0dHAta2xhbnQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIdHRwVFZTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2h0dHAtdHYuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEJzTG9jYWxlU2VydmljZSB9IGZyb20gXCJuZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXJcIjtcclxuaW1wb3J0IHsgU2dzVFZab2VrVmVsZGVuIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvc2dzQ2xhc3Nlcy5zY3JpcHRzXCI7XHJcbmltcG9ydCB7IElTZ3NLbGFudENvbWJvTGlzdEl0ZW0sIElTZ3NEb3NzaWVyQ29tYm9MaXN0SXRlbSB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL3Nnc0ludGVyZmFjZXMuc2NyaXB0c1wiO1xyXG5pbXBvcnQgeyBJQkJSSW5kaWVuaW5nc1dpanplLCBJVFZTdGF0dXNEZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvaW50ZXJmYWNlcy5zY3JpcHRzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImd3LXR2LXpvZWt1aXRnZWJyZWlkXCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ndy10di16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9ndy10di16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuY3NzJyldLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgZ3dUVlpvZWtVaXRnZWJyZWlkQ29tcG9uZW50IGV4dGVuZHMgR2VuZXJhbFNjcmlwdHMgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgYXBwTGFiZWxzID0gYXBwTGFiZWxzO1xyXG4gICAgemtGb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gICAgSW5kaWVuZXJMaXN0SXRlbXM6IElTZ3NLbGFudENvbWJvTGlzdEl0ZW1bXSA9IG51bGw7XHJcbiAgICBJbmRpZW5pbmdzV2lqemVMaXN0SXRlbXM6IElCQlJJbmRpZW5pbmdzV2lqemVbXSA9IG51bGw7XHJcbiAgICBEb3NzaWVyQmVoZWVyZGVyTGlzdEl0ZW1zOiBJU2dzRG9zc2llckNvbWJvTGlzdEl0ZW1bXSA9IG51bGw7XHJcbiAgICBTdGF0dXNMaXN0SXRlbXM6IElUVlN0YXR1c0RlZmluaXRpb25bXSA9IG51bGw7XHJcblxyXG4gICAgem9la1ZlbGRlbjogU2dzVFZab2VrVmVsZGVuID0gbnVsbDtcclxuXHJcbiAgICBAT3V0cHV0KCkgc2VhcmNoaW5nOiBFdmVudEVtaXR0ZXI8U2dzVFZab2VrVmVsZGVuPiA9IG5ldyBFdmVudEVtaXR0ZXI8U2dzVFZab2VrVmVsZGVuPigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX3RvYXN0cjogVG9hc3RyU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGZiOiBGb3JtQnVpbGRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2xvY2FsZVNlcnZpY2U6IEJzTG9jYWxlU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgaHR0cEJicjogSHR0cEJCUlNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGh0dHBEb3NzaWVyOiBIdHRwRG9zc2llclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGh0dHBLbGFudDogSHR0cEtsYW50U2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgaHR0cFRWOiBIdHRwVFZTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgQEluamVjdChcIkJBU0VfVVJMXCIpIHByaXZhdGUgcmVhZG9ubHkgX2Jhc2VVcmw6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcclxuICAgICAgICBzdXBlcihfdG9hc3RyKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBOZWVkZWQgY29uZmlndXJhdGlvbiBmb3IgdGhlIGJzRGF0ZXBpY2tlciB0byBhY2NlcHQgZGQvTU0veXl5eSBmb3JtYXR0aW5nXHJcbiAgICAgICAgdGhpcy5fbG9jYWxlU2VydmljZS51c2UoXCJib290c3RyYXAtbG9jYWxlLW5sYmVcIik7XHJcblxyXG4gICAgICAgIHRoaXMuemtGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICAgICAgIENvZGU6IFtcIlwiXSxcclxuICAgICAgICAgICAgSW5kaWVuZXI6IFtcIi0xXCJdLFxyXG4gICAgICAgICAgICBGYWN0dXVyUmVmOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIEFkcmVzOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIEdlbWVlbnRlOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIFRpdGVsOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIEJlc2NocmlqdmluZzogW1wiXCJdLFxyXG4gICAgICAgICAgICBSZWZlcmVudGllOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIE92ZXJuYW1lOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIFNhbWVuZ2V2b2VnZDogW1wiXCJdLFxyXG4gICAgICAgICAgICBFQlNEOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIEluZGllbmluZ3NXaWp6ZTogW1wiLTFcIl0sXHJcbiAgICAgICAgICAgIERhdHVtOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIFN0YXR1czogW1wiLTFcIl0sXHJcbiAgICAgICAgICAgIEdlZmFjdHVyZWVyZDogW1wiLTFcIl0sXHJcbiAgICAgICAgICAgIERvc3NpZXJCZWhlZXJkZXI6IFtcIi0xXCJdXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZERyb3Bkb3ducygpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWREcm9wZG93bnMoKSB7XHJcbiAgICAgICAgdGhpcy5odHRwS2xhbnQuc2dzQ29tYm9MaXN0SXRlbXMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChsc3Q6IElTZ3NLbGFudENvbWJvTGlzdEl0ZW1bXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxzdCAhPSBudWxsICYmIGxzdCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkluZGllbmVyTGlzdEl0ZW1zID0gWy4uLmxzdF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmh0dHBEb3NzaWVyLnNnc0NvbWJvTGlzdEl0ZW1zKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgobHN0OiBJU2dzRG9zc2llckNvbWJvTGlzdEl0ZW1bXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxzdCAhPSBudWxsICYmIGxzdCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkRvc3NpZXJCZWhlZXJkZXJMaXN0SXRlbXMgPSBbLi4ubHN0XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaHR0cEJici5zZ3NJbmRpZW5pbmdzV2lqemVMaXN0SXRlbXMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChsc3Q6IElCQlJJbmRpZW5pbmdzV2lqemVbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxzdCAhPSBudWxsICYmIGxzdCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkluZGllbmluZ3NXaWp6ZUxpc3RJdGVtcyA9IFsuLi5sc3RdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5odHRwVFYuU3RhdHVzRGVmaW5pdGlvbkxpc3QoZmFsc2UpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGxzdDogSVRWU3RhdHVzRGVmaW5pdGlvbltdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobHN0ICE9IG51bGwgJiYgbHN0ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU3RhdHVzTGlzdEl0ZW1zID0gWy4uLmxzdF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJhaXNlU2VhcmNoKCkge1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbiA9IG5ldyBTZ3NUVlpvZWtWZWxkZW4oKTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4udHZJZCA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLkNvZGUudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmtsYW50SWQgPSB0aGlzLnprRm9ybS5jb250cm9scy5JbmRpZW5lci52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4uZmFjdHV1clJlZiA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLkZhY3R1dXJSZWYudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmFkcmVzID0gdGhpcy56a0Zvcm0uY29udHJvbHMuQWRyZXMudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmdlbWVlbnRlID0gdGhpcy56a0Zvcm0uY29udHJvbHMuR2VtZWVudGUudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLnRpdGVsID0gdGhpcy56a0Zvcm0uY29udHJvbHMuVGl0ZWwudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmJlc2NocmlqdmluZyA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLkJlc2NocmlqdmluZy52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4ucmVmZXJlbnRpZSA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLlJlZmVyZW50aWUudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLm92ZXJuYW1lID0gdGhpcy56a0Zvcm0uY29udHJvbHMuT3Zlcm5hbWUudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLnNhbWVuZ2V2b2VnZCA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLlNhbWVuZ2V2b2VnZC52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4uZWJzZCA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLkVCU0QudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmluZGllbmluZ3N3aWp6ZUlkID0gdGhpcy56a0Zvcm0uY29udHJvbHMuSW5kaWVuaW5nc1dpanplLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5kYXR1bSA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLkRhdHVtLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5zdGF0dXNJZCA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLlN0YXR1cy52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4uZ2VmYWN0dXJlZXJkID0gdGhpcy56a0Zvcm0uY29udHJvbHMuR2VmYWN0dXJlZXJkLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5kb3NzaWVyQmVoZWVyZGVySWQgPSB0aGlzLnprRm9ybS5jb250cm9scy5Eb3NzaWVyQmVoZWVyZGVyLnZhbHVlO1xyXG5cclxuICAgICAgICB0aGlzLnNlYXJjaGluZy5lbWl0KHRoaXMuem9la1ZlbGRlbik7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy10di16b2VrdWl0Z2VicmVpZC9ndy10di16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gW2Zvcm1Hcm91cF09XFxcInprRm9ybVxcXCIgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZCBwYWRkaW5nVG9wMzBweFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJ0eHRDb2RlXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+Q29kZTwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwidHh0Q29kZVxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJDb2RlXFxcIiBBbGxvd09ubHlOdW1iZXJzIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJjaGtPdmVybmFtZVxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPk92ZXJuYW1lOjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2hlY2tib3ggY29sLXNtLTRcXFwiPjxkaXYgY2xhc3M9XFxcIm1hcmdpblRvcE1pbjEwcHggbWFyZ2luTGVmdDIwcHhcXFwiPjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgaWQ9XFxcImNoa092ZXJuYW1lXFxcIiBjbGFzcz1cXFwibWFyZ2luQm90dG9tMFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJPdmVybmFtZVxcXCIgdmFsdWU9XFxcIlxcXCIgLz48L2Rpdj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwiZGRsSW5kaWVuZXJcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5LbGFudC9JbmRpZW5lcjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24gY29sLXNtLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJkZGxJbmRpZW5lclxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJJbmRpZW5lclxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcIndpZHRoMTAwcGVyY2VudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCItMVxcXCI+U2VsZWN0ZWVyPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IGtsYW50IG9mIEluZGllbmVyTGlzdEl0ZW1zXFxcIiBbdmFsdWVdPVxcXCJrbGFudC5rbGFudElEXFxcIiBbaW5uZXJIVE1MXT1cXFwia2xhbnQubmFhbVxcXCI+PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJjaGtTYW1lbmdldm9lZ2RcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5TYW1lbmdldm9lZ2Q6PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjaGVja2JveCBjb2wtc20tNFxcXCI+PGRpdiBjbGFzcz1cXFwibWFyZ2luVG9wTWluMTBweCBtYXJnaW5MZWZ0MjBweFxcXCI+PGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBpZD1cXFwiY2hrU2FtZW5nZXZvZWdkXFxcIiBjbGFzcz1cXFwibWFyZ2luQm90dG9tMFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJTYW1lbmdldm9lZ2RcXFwiIHZhbHVlPVxcXCJcXFwiIC8+PC9kaXY+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcInR4dEZhY3R1dXJSZWZcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5GYWN0dXVyIFJlZmVyZW50aWUgS2xhbnQ6PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0eHRGYWN0dXVyUmVmXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkZhY3R1dXJSZWZcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJ0eHRFQlNEXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+TmFhbSBFQlNEOjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwidHh0RUJTRFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJFQlNEXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwidHh0QWRyZXNcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5TdHJhYXQgZW4gbnI6PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0eHRBZHJlc1xcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJBZHJlc1xcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcImRkbEluZGllbmluZ3NXaWp6ZVxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPkluZGllbmluZ3N3aWp6ZTwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24gY29sLXNtLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJkZGxJbmRpZW5pbmdzV2lqemVcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiSW5kaWVuaW5nc1dpanplXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwid2lkdGgxMDBwZXJjZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIi0xXFxcIj5TZWxlY3RlZXI8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgaXcgb2YgSW5kaWVuaW5nc1dpanplTGlzdEl0ZW1zXFxcIiBbdmFsdWVdPVxcXCJpdy5pbmRpZW5pbmdzd2lqemVJRFxcXCIgW2lubmVySFRNTF09XFxcIml3LmluZGllbmluZ3N3aWp6ZVxcXCI+PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJ0eHRHZW1lZW50ZVxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPkdlbWVlbnRlOjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwidHh0R2VtZWVudGVcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiR2VtZWVudGVcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJkdGVEYXR1bVxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPkRhdHVtOjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwiZHRlRGF0dW1cXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiRGF0dW1cXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgbmctdHJpbS1pZ25vcmVcXFwiIGJzRGF0ZXBpY2tlciBwbGFjZW1lbnQ9XFxcInRvcCBsZWZ0XFxcIiBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCIgRG90dGVkQm9yZGVyQmVsb3cgW2JzQ29uZmlnXT1cXFwieyBzaG93V2Vla051bWJlcnM6IGZhbHNlIH1cXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJ0eHRUaXRlbFxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPlRpdGVsOjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwidHh0VGl0ZWxcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiVGl0ZWxcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJkZGxTdGF0dXNcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5TdGF0dXM8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duIGNvbC1zbS00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cXFwiZGRsU3RhdHVzXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIlN0YXR1c1xcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcIndpZHRoMTAwcGVyY2VudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCItMVxcXCI+U2VsZWN0ZWVyPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IHN0cyBvZiBTdGF0dXNMaXN0SXRlbXNcXFwiIFt2YWx1ZV09XFxcInN0cy50dlN0YXR1c0lEXFxcIiBbaW5uZXJIVE1MXT1cXFwic3RzLnN0YXR1c1xcXCI+PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJ0eHRCZXNjaHJpanZpbmdcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5CZXNjaHJpanZpbmc6PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0eHRCZXNjaHJpanZpbmdcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiQmVzY2hyaWp2aW5nXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwiZGRsR2VmYWN0dXJlZXJkXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+R2VmYWN0dXJlZXJkPC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93biBjb2wtc20tNFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XFxcImRkbEdlZmFjdHVyZWVyZFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJHZWZhY3R1cmVlcmRcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJ3aWR0aDEwMHBlcmNlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiLTFcXFwiPlNlbGVjdGVlcjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiMVxcXCI+SmE8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIjBcXFwiPk5lZTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwidHh0UmVmZXJlbnRpZVxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPlJlZmVyZW50aWU6PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0eHRSZWZlcmVudGllXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIlJlZmVyZW50aWVcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJkZGxEb3NzaWVyQmVoZWVyZGVyXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+RG9zc2llckJlaGVlcmRlcjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24gY29sLXNtLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJkZGxEb3NzaWVyQmVoZWVyZGVyXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkRvc3NpZXJCZWhlZXJkZXJcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJ3aWR0aDEwMHBlcmNlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiLTFcXFwiPlNlbGVjdGVlcjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCBkb3NzYmVoIG9mIERvc3NpZXJCZWhlZXJkZXJMaXN0SXRlbXNcXFwiIFt2YWx1ZV09XFxcImRvc3NiZWguZG9zc2llckJlaGVlcmRlcklEXFxcIiBbaW5uZXJIVE1MXT1cXFwiZG9zc2JlaC5uYWFtXFxcIj48L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTQgY29sLXNtLW9mZnNldC04XFxcIj48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwicmFpc2VTZWFyY2goKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCI+e3thcHBMYWJlbHMuU2VuZH19PC9idXR0b24+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9mb3JtPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy10di16b2VrdWl0Z2VicmVpZC9ndy10di16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNzQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ndy10di16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctdHYtem9la3VpdGdlYnJlaWQvZ3ctdHYtem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNzQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctdHYtem9la3VpdGdlYnJlaWQvZ3ctdHYtem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNzQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBEYXRlUGlwZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcblxyXG5cclxuXHJcbi8vIEN1c3RvbWVyIFJlbGF0ZWRcclxuXHJcblxyXG4vLyBHVyBSZWxhdGVkXHJcbmltcG9ydCB7IGd3SG9tZUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL19HVy9ndy1ob21lL2d3LWhvbWUuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBkZWZpbmVMb2NhbGUgfSBmcm9tIFwibmd4LWJvb3RzdHJhcC9jaHJvbm9zXCI7XHJcbmltcG9ydCB7IG5sQmVMb2NhbGUgfSBmcm9tIFwibmd4LWJvb3RzdHJhcC9sb2NhbGVcIjtcclxuZGVmaW5lTG9jYWxlKFwiYm9vdHN0cmFwLWxvY2FsZS1ubGJlXCIsIG5sQmVMb2NhbGUpO1xyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBIdHRwTWFpbFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zZXJ2aWNlcy9odHRwLW1haWwuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBFdmVudExpc3RlbmVyU2VydmljZSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NlcnZpY2VzL2V2ZW50LWxpc3RlbmVyLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IExvYWRpbmdBbmltYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2xvYWRpbmctYW5pbWF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSHR0cFB1aW5TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtcHVpbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEh0dHBUVlpvbmVTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtdHZ6b25lLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSHR0cFRWU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLXR2LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSHR0cEtsZWluZVdlcnZlblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC1rbGVpbmV3ZXJ2ZW4uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIdHRwS2xhbnRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAta2xhbnQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIdHRwR1ZUU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLWd2dC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEh0dHBHVE1TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtZ3RtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSHR0cEZpbGVTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtZmlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEh0dHBEb3NzaWVyU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLWRvc3NpZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIdHRwQkJSU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLWJici5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEh0dHBJbnRlcmNlcHRvclNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC1pbnRlcmNlcHRvci5zZXJ2aWNlXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcIlwiLCBjYW5BY3RpdmF0ZTogW0F1dGhlbnRpY2F0aW9uU2VydmljZV0sIGNvbXBvbmVudDogZ3dIb21lQ29tcG9uZW50LCBkYXRhOiB7IHN0YXRlOiBcImd3L2hvbWUvXCIgfSB9LFxyXG5dO1xyXG5cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG5cclxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBSb3V0ZXJNb2R1bGVcclxuICAgIF0sXHJcblxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgIHsgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBIdHRwSW50ZXJjZXB0b3JTZXJ2aWNlLCBtdWx0aTogdHJ1ZSB9LFxyXG4gICAgICAgIEF1dGhlbnRpY2F0aW9uU2VydmljZSxcclxuICAgICAgICBIdHRwQkJSU2VydmljZSxcclxuICAgICAgICBIdHRwRG9zc2llclNlcnZpY2UsXHJcbiAgICAgICAgSHR0cEZpbGVTZXJ2aWNlLFxyXG4gICAgICAgIEh0dHBHVE1TZXJ2aWNlLFxyXG4gICAgICAgIEh0dHBHVlRTZXJ2aWNlLFxyXG4gICAgICAgIEh0dHBLbGFudFNlcnZpY2UsXHJcbiAgICAgICAgSHR0cEtsZWluZVdlcnZlblNlcnZpY2UsXHJcbiAgICAgICAgSHR0cFRWU2VydmljZSxcclxuICAgICAgICBIdHRwVFZab25lU2VydmljZSxcclxuICAgICAgICBIdHRwUHVpblNlcnZpY2UsXHJcbiAgICAgICAgSHR0cE1haWxTZXJ2aWNlLFxyXG4gICAgICAgIExvYWRpbmdBbmltYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIEV2ZW50TGlzdGVuZXJTZXJ2aWNlLCBcclxuICAgICAgICBEYXRlUGlwZVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3dHcmlkUm91dGluZ01vZHVsZSB7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctZ3JpZC5yb3V0aW5nLm1vZHVsZS50cyJdLCJzb3VyY2VSb290IjoiIn0=