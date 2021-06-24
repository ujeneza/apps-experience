exports.ids = [3];
exports.modules = {

/***/ 57:
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

/***/ 573:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bodembeheerrapport_grid_bodembeheerrapport_grid_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__ = __webpack_require__(21);
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
            template: __webpack_require__(574),
            styles: [__webpack_require__(575)]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["ToastrService"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__["a" /* AuthenticationService */]])
    ], gwHomeComponent);
    return gwHomeComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__["b" /* GeneralScripts */]));



/***/ }),

/***/ 574:
/***/ (function(module, exports) {

module.exports = "<nav *ngIf=\"PgIndex === -1 && useToolbar\" class=\"navbar navbar-default navbar-fixed-bottom\" style=\"background-color:#CCCCCC;\">\r\n    <div class=\"container-fluid\" style=\"margin: 10px 0px 27px 0px;\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <button type=\"button\" (click)=\"toggleButton(0)\" style=\"margin-left: -5px;\" [ngClass]=\"getButtonClass(btns[0])\">Ontgravingen</button>\r\n                <button type=\"button\" (click)=\"singleButton(0)\" [ngClass]=\"getSingleClass(btns[0])\">&nbsp;</button>\r\n                <button type=\"button\" (click)=\"toggleButton(1)\" [ngClass]=\"getButtonClass(btns[1])\">TV</button>\r\n                <button type=\"button\" (click)=\"singleButton(1)\" [ngClass]=\"getSingleClass(btns[1])\">&nbsp;</button>\r\n                <button type=\"button\" (click)=\"toggleButton(2)\" [ngClass]=\"getButtonClass(btns[2])\">GTM</button>\r\n                <button type=\"button\" (click)=\"singleButton(2)\" [ngClass]=\"getSingleClass(btns[2])\">&nbsp;</button>\r\n                <button type=\"button\" (click)=\"toggleButton(3)\" [ngClass]=\"getButtonClass(btns[3])\">GVT</button>\r\n                <button type=\"button\" (click)=\"singleButton(3)\" [ngClass]=\"getSingleClass(btns[3])\">&nbsp;</button>\r\n                <button type=\"button\" (click)=\"toggleButton(4)\" [ngClass]=\"getButtonClass(btns[4])\">Online Ingevuld</button>\r\n                <button type=\"button\" (click)=\"singleButton(4)\" [ngClass]=\"getSingleClass(btns[4])\">&nbsp;</button>\r\n                <button type=\"button\" (click)=\"toggleButton(5)\" [ngClass]=\"getButtonClass(btns[5])\">Gegevens Aanpassen</button>\r\n                <button type=\"button\" (click)=\"singleButton(5)\" [ngClass]=\"getSingleClass(btns[5])\">&nbsp;</button>\r\n                <button type=\"button\" (click)=\"toggleButton(6)\" [ngClass]=\"getButtonClass(btns[6])\">Klanten</button>\r\n                <button type=\"button\" (click)=\"singleButton(6)\" [ngClass]=\"getSingleClass(btns[6])\">&nbsp;</button>\r\n                <button type=\"button\" (click)=\"toggleButton(7)\" [ngClass]=\"getButtonClass(btns[7])\">BBR</button>\r\n                <button type=\"button\" (click)=\"singleButton(7)\" [ngClass]=\"getSingleClass(btns[7])\">&nbsp;</button>\r\n                <button type=\"button\" (click)=\"toggleButton(8)\" [ngClass]=\"getButtonClass(btns[8])\">Puin</button>\r\n                <button type=\"button\" (click)=\"singleButton(8)\" [ngClass]=\"getSingleClass(btns[8])\">&nbsp;</button>\r\n                <button type=\"button\" (click)=\"toggleButton(-1)\" [ngClass]=\"getButtonClass(allButtonsShown)\">Toon Alles</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<div >\r\n    <div [hidden]=\"!btns[0]\">\r\n        <h4>Kleine Werken</h4>\r\n        <gw-kw-grid></gw-kw-grid>\r\n    </div>\r\n    <div [hidden]=\"!btns[1]\">\r\n        <h4>Technische Verslagen</h4>\r\n        <gw-tv-grid NieuweAanvragen=\"true\" ExtendedSearch=\"true\" [AllowDelete]=\"allowDelete\"></gw-tv-grid>\r\n    </div>\r\n    <div [hidden]=\"!btns[2]\">\r\n        <h4>Grond Transport Meldingen</h4>\r\n        <gw-gtm-grid NieuweAanvragen=\"true\" ExtendedSearch=\"true\" [AllowDelete]=\"allowDelete\"></gw-gtm-grid>\r\n    </div>\r\n    <div [hidden]=\"!btns[3]\">\r\n        <h4>Grond Verzet Toelatingen</h4>\r\n        <gw-gvt-grid NieuweAanvragen=\"true\" ExtendedSearch=\"true\" [AllowDelete]=\"allowDelete\"></gw-gvt-grid>\r\n    </div>\r\n    <div [hidden]=\"!btns[4]\">\r\n        <h4>Upload of Online Ingevuld - VA/OV</h4>\r\n        <bodembeheerrapport-grid isGWStart=\"true\" Type=\"BBR\" [FillType]=\"UPLFillType\" [title]=\"'Bodembeheer rapporten:'\"></bodembeheerrapport-grid>\r\n    </div>\r\n    <div [hidden]=\"!btns[5]\">\r\n        <h4>Vraag tot gegevensaanpassingen</h4>\r\n        <gw-klantwijz-grid></gw-klantwijz-grid>\r\n    </div>\r\n    <div [hidden]=\"!btns[6]\">\r\n        <h4>Nieuwe Klanten</h4>\r\n        <gw-klant-grid isGWStart=\"true\"></gw-klant-grid>\r\n    </div>\r\n    <div [hidden]=\"!btns[7]\">\r\n        <h4>Bodem Beheer Rapporten</h4>\r\n        <gw-bbr-grid NieuweAanvragen=\"false\" ExtendedSearch=\"true\" [AllowDelete]=\"allowDelete\"></gw-bbr-grid>\r\n    </div>\r\n    <div [hidden]=\"!btns[8]\">\r\n        <h4>Puin</h4>\r\n        To Be Developed\r\n    </div>\r\n</div>";

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(576);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "h4 {\r\n    margin-bottom: 0px;\r\n}\r\n.btn-on {\r\n    color: #B0D001 !important;\r\n    border-color: #ddd !important;\r\n    background-color: #017342 !important;\r\n    padding: 5px 10px;\r\n    margin-left: 15px;\r\n}\r\n.btn-off {\r\n    color: #FFFFFF !important;\r\n    border-color: #ddd !important;\r\n    background-color: #FF0000 !important;\r\n    padding: 5px 10px;\r\n    margin-left: 15px;\r\n}\r\n.btn-single-on {\r\n    color: #B0D001 !important;\r\n    border-color: #ddd !important;\r\n    background-color: #017342 !important;\r\n    padding: 5px;\r\n    margin-left: -5px;\r\n}\r\n.btn-single-off {\r\n    color: #017342 !important;\r\n    border-color: #ddd !important;\r\n    background-color: #FF0000 !important;\r\n    padding: 5px;\r\n    margin-left: -5px;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 577:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_bbr_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scripts_appLabels__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_authentication_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(13);
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
            template: __webpack_require__(578),
            styles: [__webpack_require__(579)]
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

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<form [formGroup]=\"StsForm\" class=\"container-fluid paddingTop10px\">\r\n    <div class=\"row\" *ngIf=\"useSearch\">\r\n        <div class=\"col-sm-3\">\r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"ToggleExtendedSearch()\">{{ isExtendedSearch ? 'Enkelvoudig zoeken' : 'Geavanceerd zoeken' }}</button>\r\n        </div>\r\n        <div *ngIf=\"useSearch && !isExtendedSearch\" class=\"col-sm-9\">\r\n            <label class=\"paddingRight10px\">Filter status</label>\r\n            <select formControlName=\"sts\" DottedBorderBelow (change)=\"statusChanged()\">\r\n                <option value=\"-1\">Selecteer</option>\r\n                <option *ngFor=\"let sts of StatusDropdownList\" [value]=\"sts.bbrStatusID\" [innerHTML]=\"sts.status\"></option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"useSearch && isExtendedSearch\">\r\n        <div class=\"col-sm-12\"><gw-bbr-zoekuitgebreid (searching)=\"onExtendedSearch($event)\"></gw-bbr-zoekuitgebreid></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"NgxTable\">\r\n                <p *ngIf=\"forNieuweAanvragen == false\" class=\"pull-left NgxTitle\">{{title}}</p>\r\n                <ngx-datatable #table\r\n                               class=\"bootstrap\"\r\n                               (activate)=\"onActivate($event)\"\r\n                               [rows]=\"rows\"\r\n                               [columnMode]=\"'flex'\"\r\n                               [headerHeight]=\"50\"\r\n                               [footerHeight]=\"40\"\r\n                               [limit]=\"appLabels.tableViewRows\"\r\n                               [rowClass]=\"getRowClass\"\r\n                               [cssClasses]=\"appLabels.iconsCss\"\r\n                               [messages]=\"{totalMessage: appLabels.Total.toLowerCase(), emptyMessage: appLabels.NoDataToDisplay}\"\r\n                               [sorts]=\"[{prop:'bbrNummer', dir:'desc' }]\"\r\n                               [rowHeight]=\"'auto'\">\r\n\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"nietGoedGekeurd\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template></ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <span style=\"color: red\"><b>{{row['nietGoedGekeurd']}}</b></span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"bbrNummer\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Nummer</span>\r\n                            <div><input type=\"text\" formControlName=\"bbrNummer\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <a class=\"pdfLink\" [routerLink]=\"['/bodembeheerrapport-detail']\" [queryParams]=\"{bbr:'Final',bbrId:row['bbrNummer']}\"><label class=\"text\">{{row['bbrNummer']}}</label></a>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"naam\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Klant</span>\r\n                            <div><input type=\"text\" formControlName=\"naam\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span>{{value}}</span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"beroepsorganisatiecode\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Code</span>\r\n                            <input type=\"text\" formControlName=\"code\" class=\"NgxFilterField\" (keyup)=\"filter()\" />\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span>{{value}}</span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" prop=\"plaats\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Gemeente</span>\r\n                            <input type=\"text\" formControlName=\"gem\" class=\"NgxFilterField\" (keyup)=\"filter()\" />\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span>{{value}}</span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"aanvraagDatum\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Datum in</span></div>\r\n                            <div><input type=\"text\" formControlName=\"aanvraagDatum\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date:\"dd/MM/yyyy\"}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"statusDatum\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Datum uit</span></div>\r\n                            <div><input type=\"text\" formControlName=\"statusDatum\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date:\"dd/MM/yyyy\"}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"indieningswijze\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Aanvulplan</span></div>\r\n                            <div><input type=\"text\" formControlName=\"indieningswijze\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"hoeveelheid\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Hoeveelheid</span>\r\n                            <div><input type=\"text\" formControlName=\"hoev\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span>{{row['hoeveelheid']}}</span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"gefactureerd\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Gefact.</span></div>\r\n                            <div><input type=\"text\" formControlName=\"gefactureerd\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"status\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">BBR Status</span></div>\r\n                            <div><input type=\"text\" formControlName=\"bbrSts\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"startDatumGrondwerken\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Start Datum</span></div>\r\n                            <div><input type=\"text\" formControlName=\"startDatum\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date:\"dd/MM/yyyy\"}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"Detail\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img src=\"" + __webpack_require__(14) + "\" class=\"ibtn\" (click)=\"linkToBBR(row['bbrNummer'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column *ngIf=\"canDelete\" [flexGrow]=\"1\" name=\"Detail\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img src=\"" + __webpack_require__(45) + "\" class=\"ibtn\" (click)=\"deleteBBR(row['bbrNummer'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                </ngx-datatable>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>";

/***/ }),

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(580);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwBBRZoekUitgebreidComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scripts_appLabels__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scripts_general_scripts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_http_bbr_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_http_dossier_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_http_klant_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_http_tv_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_datepicker__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__scripts_sgsClasses_scripts__ = __webpack_require__(57);
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
            template: __webpack_require__(582),
            styles: [__webpack_require__(583)],
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

/***/ 582:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"zkForm\" class=\"container-fluid paddingTop30px\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtCode\" class=\"pull-right\">Code</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtCode\" formControlName=\"Code\" AllowOnlyNumbers DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"tvtTvId\" class=\"pull-right\">TV Nummer:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtTvId\" formControlName=\"TvId\" AllowOnlyNumbers DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"ddlKlant\" class=\"pull-right\">Klant</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlKlant\" formControlName=\"KlantId\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let klant of KlantListItems\" [value]=\"klant.klantID\" [innerHTML]=\"klant.naam\"></option>\r\n                </select>\r\n            </div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlDossierBeheerder\" class=\"pull-right\">DossierBeheerder</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlDossierBeheerder\" formControlName=\"DossierBeheerderId\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let dossbeh of DossierBeheerderListItems\" [value]=\"dossbeh.dossierBeheerderID\" [innerHTML]=\"dossbeh.naam\"></option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"ddlStatus\" class=\"pull-right\">Status</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlStatus\" formControlName=\"StatusId\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let sts of StatusListItems\" [value]=\"sts.tvStatusID\" [innerHTML]=\"sts.status\"></option>\r\n                </select>\r\n            </div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlBestemmingsaard\" class=\"pull-right\">Bestemmingsaard</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlBestemmingsaard\" formControlName=\"BestemmingsaardId\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let aard of BestemmingsaardListItems\" [value]=\"aard.bestemmingsAardId\" [innerHTML]=\"aard.bestemmingsAard\"></option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtStraat\" class=\"pull-right\">Bestemming Straat</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtStraat\" formControlName=\"Straat\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlGefactureerd\" class=\"pull-right\">Gefactureerd</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlGefactureerd\" formControlName=\"Gefactureerd\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option value=\"1\">Ja</option>\r\n                    <option value=\"0\">Nee</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtPostcode\" class=\"pull-right\">Bestemming Postcode:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtPostcode\" formControlName=\"Postcode\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"txtGemeente\" class=\"pull-right\">Bestemming Gemeente:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtGemeente\" formControlName=\"Gemeente\" DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtLambertX\" class=\"pull-right\">Bestemming Lambert X (in m)</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtLambertX\" formControlName=\"LambertX\" AllowOnlyNumbers DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlLambertRange\" class=\"pull-right\">Lambert Range:</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlLambertRange\" formControlName=\"LambertRange\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option value=\"1\">1 km</option>\r\n                    <option value=\"3\">3 km</option>\r\n                    <option value=\"5\">5 km</option>\r\n                    <option value=\"10\">10 km</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtLambertX\" class=\"pull-right\">Bestemming Lambert Y (in m)</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtLambertY\" formControlName=\"LambertY\" AllowOnlyNumbers DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-6\">&nbsp;</div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtVStraat\" class=\"pull-right\">TV Straat:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtVStraat\" formControlName=\"VertrekStraat\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"txtVGemeente\" class=\"pull-right\">TV Gemeente:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtVGemeente\" formControlName=\"VertrekGemeente\" DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"dteVan\" class=\"pull-right\">Datum Van:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"dteVan\" formControlName=\"datVan\" class=\"form-control ng-trim-ignore\" bsDatepicker placement=\"top left\" autocomplete=\"off\" DottedBorderBelow [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"dteTot\" class=\"pull-right\">Datum Tot:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"dteTot\" formControlName=\"datTot\" class=\"form-control ng-trim-ignore\" bsDatepicker placement=\"top left\" autocomplete=\"off\" DottedBorderBelow [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4 col-sm-offset-8\"><button type=\"button\" (click)=\"raiseSearch()\" class=\"btn btn-default\">{{appLabels.Send}}</button></div>\r\n        </div>\r\n    </div>\r\n</form>";

/***/ }),

/***/ 583:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(584);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 585:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_tv_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_http_gtm_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scripts_appLabels__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_datatable__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_authentication_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__(13);
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
            template: __webpack_require__(586),
            styles: [__webpack_require__(588)]
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

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<form [formGroup]=\"StsForm\" class=\"container-fluid paddingTop10px\">\r\n    <div class=\"row\" *ngIf=\"useSearch\">\r\n        <div class=\"col-sm-3\">\r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"ToggleExtendedSearch()\">{{ isExtendedSearch ? 'Enkelvoudig zoeken' : 'Geavanceerd zoeken' }}</button>\r\n        </div>\r\n        <div *ngIf=\"useSearch && !isExtendedSearch\" class=\"col-sm-9\">\r\n            <label class=\"paddingRight10px\">Filter status</label>\r\n            <select formControlName=\"sts\" DottedBorderBelow (change)=\"statusChanged()\">\r\n                <option value=\"-1\">Selecteer</option>\r\n                <option *ngFor=\"let sts of StatusDropdownList\" [value]=\"sts.id\" [innerHTML]=\"sts.omschrijving\"></option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"useSearch && isExtendedSearch\">\r\n        <div class=\"col-sm-12\"><gw-gtm-zoekuitgebreid (searching)=\"onExtendedSearch($event)\"></gw-gtm-zoekuitgebreid></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"NgxTable\">\r\n                <p *ngIf=\"forNieuweAanvragen == false\" class=\"pull-left NgxTitle\">{{title}}</p>\r\n                <ngx-datatable #table\r\n                               class=\"bootstrap\"\r\n                               (activate)=\"onActivate($event)\"\r\n                               [rows]=\"rows\"\r\n                               [columnMode]=\"'flex'\"\r\n                               [headerHeight]=\"50\"\r\n                               [footerHeight]=\"40\"\r\n                               [limit]=\"appLabels.tableViewRows\"\r\n                               [rowClass]=\"getRowClass\"\r\n                               [cssClasses]=\"appLabels.iconsCss\"\r\n                               [messages]=\"{totalMessage: appLabels.Total.toLowerCase(), emptyMessage: appLabels.NoDataToDisplay}\"\r\n                               [sorts]=\"[{prop:'grondtransportmeldingId', dir:'desc' }]\"\r\n                               [rowHeight]=\"'auto'\">\r\n\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"afgewerkteGTM\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img *ngIf=\"row['verklaringAfnemerOntvangen'] != null && row['verklaringAfnemerOntvangen'] == true\" src=\"" + __webpack_require__(587) + "\" class=\"ibtn\" (click)=\"linkToGTM(row['grondtransportmeldingId'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"grondtransportmeldingId\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Code</span>\r\n                            <div><input type=\"text\" formControlName=\"gtmId\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <a class=\"pdfLink\" [routerLink]=\"['/transport-top-cgr-detail', row['grondtransportmeldingId']]\"><label class=\"text\">{{row['grondtransportmeldingId']}}</label></a>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"4\" prop=\"klant\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Klant</span>\r\n                            <div><input type=\"text\" formControlName=\"klant\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template><span>{{value}}</span></ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"klantKenmerk\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Klant Ref.</span>\r\n                            <input type=\"text\" formControlName=\"ref\" class=\"NgxFilterField\" (keyup)=\"filter()\" />\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template><span>{{value}}</span></ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"herkomst\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Herkomst</span>\r\n                            <input type=\"text\" formControlName=\"herk\" class=\"NgxFilterField\" (keyup)=\"filter()\" />\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template><span>{{value}}</span></ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"topCgr\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">TOP/CGR</span>\r\n                            <input type=\"text\" formControlName=\"topCgr\" class=\"NgxFilterField\" (keyup)=\"filter()\" />\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template><span>{{value}}</span></ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" name=\"indieningsDatum\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Datum In</span></div>\r\n                            <div><input type=\"text\" formControlName=\"indieningsDatum\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>{{value | date:\"dd/MM/yyyy\"}}</ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"Detail\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img src=\"" + __webpack_require__(14) + "\" class=\"ibtn\" (click)=\"linkToGTM(row['grondtransportmeldingId'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column *ngIf=\"canDelete\" [flexGrow]=\"1\" name=\"Detail\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img src=\"" + __webpack_require__(45) + "\" class=\"ibtn\" (click)=\"deleteGTM(row['grondtransportmeldingId'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                </ngx-datatable>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</form>";

/***/ }),

/***/ 587:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACcklEQVR42mNkwAEsTLSlT5y5+pSBAGDEJsjOzsYR4GVXsnL9nhayDFBUVPTQ1zNYy8fPN+3161f927dvf0a0AUxMTIzlZeULOTg5Yx0dHYGGKXzKzy+o2Lt3z4yPHz/+J2gAFxeXwK1bt+5/+fJFYOrUaQwuLi4MixcvYeDn4117997d1AMHDrzHa4C8nHyMu5v7Yj19PYZNmzYzJCUngbzEcPXKFQYHR4c7iYmJQQcPHryM1QCg85mcnZw2f/3y1Wv7zh0MTx4/YdixYweDiakpQ29PL4OjkyPDo0eP3j1+9Cjrzt07ay9cuPAHxQBxcXGZO0CwetUqdhZmFoZv378xLJi/gKGopIThxfPnDGLi4gyenh4MZ8+eA8XUMWsgQDHAWFfVLz4112HNylXRz58/F9uwaSPD3r17GUJCQhlevHzJsGrlSgZXV1eGnp4eBj5+/i0rV67whRvAyMjAYq4r737m2pMdf//+U5KTlXWcN39+woK5cy0uXbrMGBEVxXBg3z6GrJwchpcvX/7v6OgIu3f/3hq4AdKivBosrKz/Hz579wXI5QfiPyDMzsYmHxoa2gQ0zGb5smUMZuYWDOfOnV2Xn58f8ubNm/+M0JBkNNWR9Thz9cmJf///iwGFWIH4H8wQRkbGf8nJyZFXLlys/v7jx9fHz55avnv3DpTMf4INYGJkYDPUlHU9e+3xESD3I0gIiNmAmBOUsqGYgZWFRYGZmVnox8+f+4DczyBLwAaoy4uYP3/75fOnLz+u4UmxIMO4oC77AKWBYcfIwGigLh10/sbTrUD+D0KZB8NkZiZGRjFhXtnnrz89IlUzCAAAnzDyEareg/MAAAAASUVORK5CYII="

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(589);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".parentTop {\r\n    position: relative;\r\n    display: block;\r\n}\r\n\r\n.childTop {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 200px;\r\n    display: block;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwGTMZoekUitgebreidComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scripts_appLabels__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scripts_general_scripts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_http_klant_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_datepicker__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__scripts_sgsClasses_scripts__ = __webpack_require__(57);
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
            template: __webpack_require__(591),
            styles: [__webpack_require__(592)],
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

/***/ 591:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"zkForm\" class=\"container-fluid paddingTop30px\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\"><label for=\"txtGTMId\" class=\"pull-right\">GTM Id:</label></div>\r\n            <div class=\"col-sm-8\"><input type=\"text\" id=\"txtGTMId\" formControlName=\"GtmId\" AllowOnlyNumbers DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\"><label for=\"dteVan\" class=\"pull-right\">Van:</label></div>\r\n            <div class=\"col-sm-8\"><input type=\"text\" id=\"dteVan\" formControlName=\"datVan\" class=\"form-control ng-trim-ignore\" bsDatepicker placement=\"bottom left\" autocomplete=\"off\" DottedBorderBelow [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\"><label for=\"dteTot\" class=\"pull-right\">Tot:</label></div>\r\n            <div class=\"col-sm-8\"><input type=\"text\" id=\"dteTot\" formControlName=\"datTot\" class=\"form-control ng-trim-ignore\" bsDatepicker placement=\"bottom left\" autocomplete=\"off\" DottedBorderBelow [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\"><label for=\"txtStraat\" class=\"pull-right\">Straat:</label></div>\r\n            <div class=\"col-sm-8\"><input type=\"text\" id=\"txtStraat\" formControlName=\"Straat\" DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\"><label for=\"txtGemeente\" class=\"pull-right\">Gemeente:</label></div>\r\n            <div class=\"col-sm-8\"><input type=\"text\" id=\"txtGemeente\" formControlName=\"Gemeente\" DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\"><label for=\"ddlTop\" class=\"pull-right\">TOP:</label></div>\r\n            <div class=\"dropdown col-sm-8\">\r\n                <select id=\"ddlTop\" formControlName=\"TopId\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let o of bestBedrijfList\" [value]=\"o.id\">{{o.description}}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-8 col-sm-offset-4\"><button type=\"button\" (click)=\"raiseSearch()\" class=\"btn btn-default\">{{appLabels.Send}}</button></div>\r\n        </div>\r\n    </div>\r\n</form>";

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(593);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 594:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_gvt_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scripts_appLabels__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(13);
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
        this.router.navigate(["/bodembeheerrapport-detail"], { queryParams: { bbrId: gvtId } });
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
            template: __webpack_require__(595),
            styles: [__webpack_require__(596)]
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

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<form [formGroup]=\"StsForm\" class=\"container-fluid paddingTop10px\">\r\n    <div class=\"row\" *ngIf=\"useSearch\">\r\n        <div class=\"col-sm-3\">\r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"ToggleExtendedSearch()\">{{ isExtendedSearch ? 'Enkelvoudig zoeken' : 'Geavanceerd zoeken' }}</button>\r\n        </div>\r\n        <div *ngIf=\"useSearch && !isExtendedSearch\" class=\"col-sm-9\">\r\n            <label class=\"paddingRight10px\">Filter status</label>\r\n            <select formControlName=\"sts\" DottedBorderBelow (change)=\"statusChanged()\">\r\n                <option value=\"-1\">Selecteer</option>\r\n                <option *ngFor=\"let sts of StatusDropdownList\" [value]=\"sts.bbrStatusID\" [innerHTML]=\"sts.status\"></option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"useSearch && isExtendedSearch\">\r\n        <div class=\"col-sm-12\"><gw-gvt-zoekuitgebreid (searching)=\"onExtendedSearch($event)\"></gw-gvt-zoekuitgebreid></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"NgxTable\">\r\n                <p *ngIf=\"forNieuweAanvragen == false\" class=\"pull-left NgxTitle\">{{title}}</p>\r\n                <ngx-datatable #table\r\n                               class=\"bootstrap\"\r\n                               (activate)=\"onActivate($event)\"\r\n                               [rows]=\"rows\"\r\n                               [columnMode]=\"'flex'\"\r\n                               [headerHeight]=\"50\"\r\n                               [footerHeight]=\"40\"\r\n                               [limit]=\"appLabels.tableViewRows\"\r\n                               [rowClass]=\"getRowClass\"\r\n                               [cssClasses]=\"appLabels.iconsCss\"\r\n                               [messages]=\"{totalMessage: appLabels.Total.toLowerCase(), emptyMessage: appLabels.NoDataToDisplay}\"\r\n                               [sorts]=\"[{prop:'bbrNummer', dir:'desc' }]\"\r\n                               [rowHeight]=\"'auto'\">\r\n\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"nietGoedGekeurd\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template></ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <span style=\"color: red\"><b>{{row['nietGoedGekeurd']}}</b></span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"bbrNummer\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Nummer</span>\r\n                            <div><input type=\"text\" formControlName=\"gvtNummer\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <a class=\"pdfLink\" [routerLink]=\"['/bodembeheerrapport-detail']\" [queryParams]=\"{bbrId:row['bbrNummer']}\"><label class=\"text\">{{row['bbrNummer']}}</label></a>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"naam\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Klant</span>\r\n                            <div><input type=\"text\" formControlName=\"naam\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span>{{value}}</span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"beroepsorganisatiecode\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Code</span>\r\n                            <input type=\"text\" formControlName=\"code\" class=\"NgxFilterField\" (keyup)=\"filter()\" />\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span>{{value}}</span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" prop=\"plaats\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Gemeente</span>\r\n                            <input type=\"text\" formControlName=\"gem\" class=\"NgxFilterField\" (keyup)=\"filter()\" />\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span>{{value}}</span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"aanvraagDatum\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Datum in</span></div>\r\n                            <div><input type=\"text\" formControlName=\"aanvraagDatum\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date:\"dd/MM/yyyy\"}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"statusDatum\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Datum uit</span></div>\r\n                            <div><input type=\"text\" formControlName=\"statusDatum\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date:\"dd/MM/yyyy\"}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"indieningswijze\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Aanvulplan</span></div>\r\n                            <div><input type=\"text\" formControlName=\"indieningswijze\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"hoeveelheid\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Hoeveelheid</span>\r\n                            <div><input type=\"text\" formControlName=\"hoev\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span>{{row['hoeveelheid']}}</span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"gefactureerd\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Gefact.</span></div>\r\n                            <div><input type=\"text\" formControlName=\"gefactureerd\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"status\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">GVT Status</span></div>\r\n                            <div><input type=\"text\" formControlName=\"gvtSts\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"startDatumGrondwerken\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Start Datum</span></div>\r\n                            <div><input type=\"text\" formControlName=\"startDatum\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date:\"dd/MM/yyyy\"}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"Detail\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img src=\"" + __webpack_require__(14) + "\" class=\"ibtn\" (click)=\"linkToGVT(row['bbrNummer'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column *ngIf=\"canDelete\" [flexGrow]=\"1\" name=\"Detail\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img src=\"" + __webpack_require__(45) + "\" class=\"ibtn\" (click)=\"deleteGVT(row['bbrNummer'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                </ngx-datatable>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>";

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(597);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwGVTZoekUitgebreidComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scripts_appLabels__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scripts_general_scripts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_http_bbr_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_http_dossier_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_http_klant_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_http_tv_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_datepicker__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__scripts_sgsClasses_scripts__ = __webpack_require__(57);
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
            template: __webpack_require__(599),
            styles: [__webpack_require__(600)],
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

/***/ 599:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"zkForm\" class=\"container-fluid paddingTop30px\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtCode\" class=\"pull-right\">Code</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtCode\" formControlName=\"Code\" AllowOnlyNumbers DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"tvtTvId\" class=\"pull-right\">TV Nummer:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtTvId\" formControlName=\"TvId\" AllowOnlyNumbers DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"ddlKlant\" class=\"pull-right\">Klant</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlKlant\" formControlName=\"KlantId\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let klant of KlantListItems\" [value]=\"klant.klantID\" [innerHTML]=\"klant.naam\"></option>\r\n                </select>\r\n            </div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlDossierBeheerder\" class=\"pull-right\">DossierBeheerder</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlDossierBeheerder\" formControlName=\"DossierBeheerderId\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let dossbeh of DossierBeheerderListItems\" [value]=\"dossbeh.dossierBeheerderID\" [innerHTML]=\"dossbeh.naam\"></option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"ddlStatus\" class=\"pull-right\">Status</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlStatus\" formControlName=\"StatusId\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let sts of StatusListItems\" [value]=\"sts.tvStatusID\" [innerHTML]=\"sts.status\"></option>\r\n                </select>\r\n            </div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlBestemmingsaard\" class=\"pull-right\">Bestemmingsaard</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlBestemmingsaard\" formControlName=\"BestemmingsaardId\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let aard of BestemmingsaardListItems\" [value]=\"aard.bestemmingsAardId\" [innerHTML]=\"aard.bestemmingsAard\"></option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtStraat\" class=\"pull-right\">Bestemming Straat</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtStraat\" formControlName=\"Straat\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlGefactureerd\" class=\"pull-right\">Gefactureerd</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlGefactureerd\" formControlName=\"Gefactureerd\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option value=\"1\">Ja</option>\r\n                    <option value=\"0\">Nee</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtPostcode\" class=\"pull-right\">Bestemming Postcode:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtPostcode\" formControlName=\"Postcode\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"txtGemeente\" class=\"pull-right\">Bestemming Gemeente:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtGemeente\" formControlName=\"Gemeente\" DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtLambertX\" class=\"pull-right\">Bestemming Lambert X (in m)</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtLambertX\" formControlName=\"LambertX\" AllowOnlyNumbers DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlLambertRange\" class=\"pull-right\">Lambert Range:</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlLambertRange\" formControlName=\"LambertRange\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option value=\"1\">1 km</option>\r\n                    <option value=\"3\">3 km</option>\r\n                    <option value=\"5\">5 km</option>\r\n                    <option value=\"10\">10 km</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtLambertX\" class=\"pull-right\">Bestemming Lambert Y (in m)</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtLambertY\" formControlName=\"LambertY\" AllowOnlyNumbers DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-6\">&nbsp;</div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtVStraat\" class=\"pull-right\">TV Straat:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtVStraat\" formControlName=\"VertrekStraat\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"txtVGemeente\" class=\"pull-right\">TV Gemeente:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtVGemeente\" formControlName=\"VertrekGemeente\" DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"dteVan\" class=\"pull-right\">Datum Van:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"dteVan\" formControlName=\"datVan\" class=\"form-control ng-trim-ignore\" bsDatepicker placement=\"top left\" autocomplete=\"off\" DottedBorderBelow [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"dteTot\" class=\"pull-right\">Datum Tot:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"dteTot\" formControlName=\"datTot\" class=\"form-control ng-trim-ignore\" bsDatepicker placement=\"top left\" autocomplete=\"off\" DottedBorderBelow [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4 col-sm-offset-8\"><button type=\"button\" (click)=\"raiseSearch()\" class=\"btn btn-default\">{{appLabels.Send}}</button></div>\r\n        </div>\r\n    </div>\r\n</form>";

/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(601);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 602:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_klant_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scripts_appLabels__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_authentication_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(13);
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
            template: __webpack_require__(603),
            styles: [__webpack_require__(604)]
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

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<form [formGroup]=\"StsForm\" class=\"container-fluid paddingTop10px\">\r\n    <div class=\"row\" *ngIf=\"useSearch\">\r\n        <div class=\"col-sm-3\">\r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"ToggleExtendedSearch()\">{{ isExtendedSearch ? 'Enkelvoudig zoeken' : 'Geavanceerd zoeken' }}</button>\r\n        </div>\r\n        <div *ngIf=\"useSearch && !isExtendedSearch\" class=\"col-sm-9\">\r\n            <label class=\"paddingRight10px\">Filter status</label>\r\n            <select formControlName=\"sts\" DottedBorderBelow (change)=\"statusChanged()\">\r\n                <option value=\"-1\">Selecteer</option>\r\n                <option *ngFor=\"let sts of StatusDropdownList\" [value]=\"sts.klantStatusID\" [innerHTML]=\"sts.status\"></option>\r\n            </select>\r\n            <label class=\"paddingRight40px\">Klant Type</label>\r\n            <select formControlName=\"type\" DottedBorderBelow (change)=\"statusChanged()\">\r\n                <option value=\"0\">Alle</option>\r\n                <option value=\"1\">TopCgr</option>\r\n                <option value=\"2\">Dop</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"useSearch && isExtendedSearch\">\r\n        <div class=\"col-sm-12\"><gw-klant-zoekuitgebreid (searching)=\"onExtendedSearch($event)\"></gw-klant-zoekuitgebreid></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"NgxTable\">\r\n                <p class=\"pull-left NgxTitle\">{{title}}</p>\r\n                <ngx-datatable #table\r\n                               class=\"bootstrap\"\r\n                               (activate)=\"onActivate($event)\"\r\n                               [rows]=\"rows\"\r\n                               [columnMode]=\"'flex'\"\r\n                               [headerHeight]=\"50\"\r\n                               [footerHeight]=\"40\"\r\n                               [limit]=\"appLabels.tableViewRows\"\r\n                               [rowClass]=\"getRowClass\"\r\n                               [cssClasses]=\"appLabels.iconsCss\"\r\n                               [messages]=\"{totalMessage: appLabels.Total.toLowerCase(), emptyMessage: appLabels.NoDataToDisplay}\"\r\n                               [sorts]=\"[{prop:'klantID', dir:'desc' }]\"\r\n                               [rowHeight]=\"'auto'\">\r\n\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"klantID\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Klant ID</span>\r\n                            <div><input type=\"text\" formControlName=\"id\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span [routerLink]=\"\" (click)=\"linkToklant(row['klantID'])\"><span>{{row['klantID']}}</span></span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"naam\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Naam</span>\r\n                            <div><input type=\"text\" formControlName=\"naam\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span>{{value}}</span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" prop=\"beroepsorganisatiecode\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Code</span></div>\r\n                            <div><input type=\"text\" formControlName=\"code\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" name=\"inschrijvingsDatum\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Inschrijving</span></div>\r\n                            <div><input type=\"text\" formControlName=\"inschrijvingsDatum\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date:\"dd/MM/yyyy\"}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" name=\"datumActief\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Actief</span></div>\r\n                            <div><input type=\"text\" formControlName=\"datumActief\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date:\"dd/MM/yyyy\"}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"gefactureerd\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Gefact.</span></div>\r\n                            <div><input type=\"text\" formControlName=\"gefactureerd\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" name=\"facturatieStartDatum\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Start Datum</span></div>\r\n                            <div><input type=\"text\" formControlName=\"startDatum\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date:\"dd/MM/yyyy\"}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"Detail\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img src=\"" + __webpack_require__(14) + "\" class=\"ibtn\" (click)=\"linkToKlant(row['klantID'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                </ngx-datatable>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</form>";

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(605);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/***/ }),

/***/ 606:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_klant_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scripts_appLabels__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_authentication_service__ = __webpack_require__(21);
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
            template: __webpack_require__(607),
            styles: [__webpack_require__(608)]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["ToastrService"], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_5__services_http_klant_service__["a" /* HttpKlantService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_8__services_authentication_service__["a" /* AuthenticationService */]])
    ], gwKlantWijzGridComponent);
    return gwKlantWijzGridComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__["b" /* GeneralScripts */]));



/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<form [formGroup]=\"StsForm\" class=\"container-fluid paddingTop10px\">\r\n    <div class=\"row\" *ngIf=\"isGWUser != null\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"NgxTable\">\r\n                <ngx-datatable #table\r\n                               class=\"bootstrap\"\r\n                               (activate)=\"onActivate($event)\"\r\n                               [rows]=\"rows\"\r\n                               [columnMode]=\"'flex'\"\r\n                               [headerHeight]=\"50\"\r\n                               [footerHeight]=\"40\"\r\n                               [limit]=\"appLabels.tableViewRows\"\r\n                               [rowClass]=\"getRowClass\"\r\n                               [cssClasses]=\"appLabels.iconsCss\"\r\n                               [messages]=\"{totalMessage: appLabels.Total.toLowerCase(), emptyMessage: appLabels.NoDataToDisplay}\"\r\n                               [sorts]=\"[{prop:'id', dir:'desc' }]\"\r\n                               [rowHeight]=\"'auto'\">\r\n\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"id\" headerClass=\"NgxHeader\" hidden>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"klantID\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Klant ID</span>\r\n                            <div><input type=\"text\" formControlName=\"klantId\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span [routerLink]=\"\" (click)=\"linkToklant(row['klantID'])\"><span>{{row['klantID']}}</span></span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" prop=\"achternaam\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Achternaam</span>\r\n                            <div><input type=\"text\" formControlName=\"anaam\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span>{{value}}</span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" prop=\"voornaam\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Voornaam</span></div>\r\n                            <div><input type=\"text\" formControlName=\"vnaam\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" prop=\"postcode\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Postcode</span></div>\r\n                            <div><input type=\"text\" formControlName=\"pcode\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" prop=\"plaats\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Plaats</span></div>\r\n                            <div><input type=\"text\" formControlName=\"plaats\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"Detail\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img src=\"" + __webpack_require__(14) + "\" class=\"ibtn\" (click)=\"linkToKlantWijz(row['id'], row['klantID'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                </ngx-datatable>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</form>";

/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(609);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwKlantZoekUitgebreidComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scripts_appLabels__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scripts_general_scripts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_http_klant_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__scripts_sgsClasses_scripts__ = __webpack_require__(57);
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
            template: __webpack_require__(611),
            styles: [__webpack_require__(612)],
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

/***/ 611:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"zkForm\" class=\"container-fluid paddingTop30px\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\"><label for=\"txtKlantId\" class=\"pull-right\">Klant Id:</label></div>\r\n            <div class=\"col-sm-8\"><input type=\"text\" id=\"txtKlantId\" formControlName=\"KlantId\" AllowOnlyNumbers DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\"><label for=\"txtOrganisatie\" class=\"pull-right\">Organisatie:</label></div>\r\n            <div class=\"col-sm-8\"><input type=\"text\" id=\"txtOrganisatie\" formControlName=\"Organisatie\" DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\"><label for=\"txtVoornaam\" class=\"pull-right\">Voornaam:</label></div>\r\n            <div class=\"col-sm-8\"><input type=\"text\" id=\"txtVoornaam\" formControlName=\"Voornaam\" DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\"><label for=\"txtAchternaam\" class=\"pull-right\">Achternaam:</label></div>\r\n            <div class=\"col-sm-8\"><input type=\"text\" id=\"txtAchternaam\" formControlName=\"Achternaam\" DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\"><label for=\"txtStraat\" class=\"pull-right\">Straat:</label></div>\r\n            <div class=\"col-sm-8\"><input type=\"text\" id=\"txtStraat\" formControlName=\"Straat\" DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\"><label for=\"txtGemeente\" class=\"pull-right\">Gemeente:</label></div>\r\n            <div class=\"col-sm-8\"><input type=\"text\" id=\"txtGemeente\" formControlName=\"Gemeente\" DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-8 col-sm-offset-4\"><button type=\"button\" (click)=\"raiseSearch()\" class=\"btn btn-default\">{{appLabels.Send}}</button></div>\r\n        </div>\r\n    </div>\r\n</form>";

/***/ }),

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(613);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 614:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_http_kleinewerven_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scripts_appLabels__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(13);
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
            template: __webpack_require__(615),
            styles: [__webpack_require__(616)]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["ToastrService"], __WEBPACK_IMPORTED_MODULE_7__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_4__services_http_kleinewerven_service__["a" /* HttpKleineWervenService */]])
    ], gwKWGridComponent);
    return gwKWGridComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__["b" /* GeneralScripts */]));



/***/ }),

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<form [formGroup]=\"statusForm\" class=\"container-fluid paddingTop10px\">\r\n    <div class=\"row\" *ngIf=\"useSearch\">\r\n        <div class=\"col-sm-3\">\r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"ToggleExtendedSearch()\">{{ isExtendedSearch ? 'Enkelvoudig zoeken' : 'Geavanceerd zoeken' }}</button>\r\n        </div>\r\n        <div *ngIf=\"useSearch && !isExtendedSearch\" class=\"col-sm-9\">\r\n            <label class=\"paddingRight10px\">Filter status</label>\r\n            <select formControlName=\"sts\" DottedBorderBelow (change)=\"statusChanged()\">\r\n                <option value=\"-1\">Selecteer</option>\r\n                <option *ngFor=\"let sts of statusDropdownList\" [value]=\"sts.id\" [innerHTML]=\"sts.status\"></option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"useSearch && isExtendedSearch\">\r\n        <div class=\"col-sm-12\"><gw-kw-zoekuitgebreid (searching)=\"onExtendedSearch($event)\"></gw-kw-zoekuitgebreid></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"NgxTable\">\r\n                <ngx-datatable #table\r\n                               class=\"bootstrap\"\r\n                               (activate)=\"onActivate($event)\"\r\n                               [rows]=\"rows\"\r\n                               [columnMode]=\"'flex'\"\r\n                               [headerHeight]=\"50\"\r\n                               [footerHeight]=\"40\"\r\n                               [limit]=\"appLabels.tableViewRows\"\r\n                               [cssClasses]=\"appLabels.iconsCss\"\r\n                               [messages]=\"{totalMessage: appLabels.Total.toLowerCase(), emptyMessage: appLabels.NoDataToDisplay}\"\r\n                               [sorts]=\"[{prop:'ID', dir:'desc' }]\"\r\n                               [rowHeight]=\"'auto'\">\r\n\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"meldingID\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Nummer</span>\r\n                            <div><input type=\"text\" formControlName=\"ID\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span [routerLink]=\"\" (click)=\"linkToKW(row['meldingID'])\"><span>{{row['meldingID']}}</span></span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"klantReferentie\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Referentie</span>\r\n                            <div><input type=\"text\" formControlName=\"Ref\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"grondwerker\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Grondwerker</span>\r\n                            <div><input type=\"text\" formControlName=\"GW\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"transporteur\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Transporteur</span>\r\n                            <div><input type=\"text\" formControlName=\"TPT\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"herkomst\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Herkomst</span>\r\n                            <div><input type=\"text\" formControlName=\"Herk\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"bestemming\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Bestemming</span>\r\n                            <div><input type=\"text\" formControlName=\"Best\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"startDatum\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">StartDatum</span></div>\r\n                            <div><input type=\"text\" formControlName=\"Dtm\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date:\"dd/MM/yyyy\"}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"status\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Status</span>\r\n                            <div><input type=\"text\" formControlName=\"Status\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"Detail\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img src=\"" + __webpack_require__(14) + "\" class=\"ibtn\" (click)=\"linkToKW(row['meldingID'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                </ngx-datatable>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</form>";

/***/ }),

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(617);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwKWZoekUitgebreidComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scripts_appLabels__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scripts_general_scripts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_http_dossier_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_http_klant_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_http_tv_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_datepicker__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__scripts_sgsClasses_scripts__ = __webpack_require__(57);
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
            template: __webpack_require__(619),
            styles: [__webpack_require__(620)],
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

/***/ 619:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"zkForm\" class=\"container-fluid paddingTop30px\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"ddlIndiener\" class=\"pull-right\">Klant/Indiener</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlIndiener\" formControlName=\"Indiener\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let klant of IndienerListItems\" [value]=\"klant.klantID\" [innerHTML]=\"klant.naam\"></option>\r\n                </select>\r\n            </div>\r\n            <div class=\"col-sm-2\"><label for=\"chkVerklaringOntvangen\" class=\"pull-right\">Verklaring Ontvangen:</label></div>\r\n            <div class=\"checkbox col-sm-4\"><div class=\"marginTopMin10px marginLeft20px\"><input type=\"checkbox\" id=\"chkVerklaringOntvangen\" class=\"marginBottom0\" formControlName=\"VerklaringOntvangen\" value=\"\" /></div></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtReferentie\" class=\"pull-right\">Referentie:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtReferentie\" formControlName=\"Referentie\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlDossierBeheerder\" class=\"pull-right\">DossierBeheerder</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlDossierBeheerder\" formControlName=\"DossierBeheerder\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let dossbeh of DossierBeheerderListItems\" [value]=\"dossbeh.dossierBeheerderID\" [innerHTML]=\"dossbeh.naam\"></option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4 col-sm-offset-8\"><button type=\"button\" (click)=\"raiseSearch()\" class=\"btn btn-default\">{{appLabels.Send}}</button></div>\r\n        </div>\r\n    </div>\r\n</form>";

/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(621);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 622:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_tv_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scripts_appLabels__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_authentication_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(13);
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
            template: __webpack_require__(623),
            styles: [__webpack_require__(626)]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["ToastrService"], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_5__services_http_tv_service__["a" /* HttpTVService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_8__services_authentication_service__["a" /* AuthenticationService */]])
    ], gwTVGridComponent);
    return gwTVGridComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scripts_general_scripts__["b" /* GeneralScripts */]));



/***/ }),

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<form [formGroup]=\"StsForm\" class=\"container-fluid paddingTop10px\">\r\n    <div class=\"row\" *ngIf=\"useSearch\">\r\n        <div class=\"col-sm-3\">\r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"ToggleExtendedSearch()\">{{ isExtendedSearch ? 'Enkelvoudig zoeken' : 'Geavanceerd zoeken' }}</button>\r\n        </div>\r\n        <div *ngIf=\"useSearch && !isExtendedSearch\" class=\"col-sm-9\">\r\n            <label class=\"paddingRight10px\">Filter status</label>\r\n            <select formControlName=\"sts\" DottedBorderBelow (change)=\"statusChanged()\">\r\n                <option value=\"-1\">Selecteer</option>\r\n                <option *ngFor=\"let sts of StatusDropdownList\" [value]=\"sts.tvStatusID\" [innerHTML]=\"sts.status\"></option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"useSearch && isExtendedSearch\">\r\n        <div class=\"col-sm-12\"><gw-tv-zoekuitgebreid (searching)=\"onExtendedSearch($event)\"></gw-tv-zoekuitgebreid></div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"NgxTable\">\r\n                <p *ngIf=\"forNieuweAanvragen == false\" class=\"pull-left NgxTitle\">{{title}}</p>\r\n                <ngx-datatable #table\r\n                               class=\"bootstrap\"\r\n                               (activate)=\"onActivate($event)\"\r\n                               [rows]=\"rows\"\r\n                               [columnMode]=\"'flex'\"\r\n                               [headerHeight]=\"50\"\r\n                               [footerHeight]=\"40\"\r\n                               [limit]=\"appLabels.tableViewRows\"\r\n                               [rowClass]=\"getRowClass\"\r\n                               [cssClasses]=\"appLabels.iconsCss\"\r\n                               [messages]=\"{totalMessage: appLabels.Total.toLowerCase(), emptyMessage: appLabels.NoDataToDisplay}\"\r\n                               [sorts]=\"[{prop:'technischVerslagID', dir:'desc' }]\"\r\n                               [rowHeight]=\"'auto'\">\r\n\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"Samengesteld\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template></ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img *ngIf=\"row['samengevoegdDoor'] != null && row['samengevoegdDoor'] != ''\" src=\"" + __webpack_require__(624) + "\" class=\"ibtn\" (click)=\"linkToDelete(row['technischVerslagID'])\" />\r\n                            <img *ngIf=\"row['externTV'] != null && row['externTV'] == true\" src=\"" + __webpack_require__(625) + "\" class=\"ibtn\" (click)=\"linkToDelete(row['technischVerslagID'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"technischVerslagID\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">TV Nr.</span>\r\n                            <div><input type=\"text\" formControlName=\"technischVerslagID\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <a *ngIf=\"row['isEvaluatieVlarebo2008'] != null && row['isEvaluatieVlarebo2008'] == true\" class=\"pdfLink\" [routerLink]=\"['/technisch-verslag-detail', row['technischVerslagID']]\"><label class=\"text\">{{row['technischVerslagID']}}</label></a>\r\n                            <a *ngIf=\"row['isEvaluatieVlarebo2008'] == null || row['isEvaluatieVlarebo2008'] == false\" class=\"pdfLink\" [routerLink]=\"['/technisch-verslag-detail', row['technischVerslagID']]\"><label class=\"text\">{{row['technischVerslagID']}}</label></a>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"4\" prop=\"naam\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Naam</span>\r\n                            <div><input type=\"text\" formControlName=\"naam\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span>{{value}}</span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"3\" prop=\"gemeenteOnderzoekslocatie\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <span (click)=\"sort()\" class=\"NgxFilterLabel\">Gemeente Onderzoekslokatie</span>\r\n                            <input type=\"text\" formControlName=\"gemeenteOnderzoekslocatie\" class=\"NgxFilterField\" (keyup)=\"filter()\" />\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <span>{{value}}</span>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" name=\"indieningsDatum\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">IndieningsDatum</span></div>\r\n                            <div><input type=\"text\" formControlName=\"indieningsDatum\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date:\"dd/MM/yyyy\"}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"2\" name=\"statusDatum\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Status Datum</span></div>\r\n                            <div><input type=\"text\" formControlName=\"statusDatum\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                            {{value | date:\"dd/MM/yyyy\"}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"indieningswijze\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Indien.Wijze</span></div>\r\n                            <div><input type=\"text\" formControlName=\"indieningswijze\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" prop=\"gefactureerd\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                            <div><span (click)=\"sort()\" class=\" NgxFilterLabel\">Gefact.</span></div>\r\n                            <div><input type=\"text\" formControlName=\"gefactureerd\" class=\"NgxFilterField\" (keyup)=\"filter()\" /></div>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [flexGrow]=\"1\" name=\"Detail\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img src=\"" + __webpack_require__(14) + "\" class=\"ibtn\" (click)=\"linkToTV(row['technischVerslagID'], row['isEvaluatieVlarebo2008'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column *ngIf=\"canDelete\" [flexGrow]=\"1\" name=\"Detail\" headerClass=\"NgxHeader\">\r\n                        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n                        </ng-template>\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <img src=\"" + __webpack_require__(45) + "\" class=\"ibtn\" (click)=\"deleteTV(row['technischVerslagID'])\" />\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                </ngx-datatable>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</form>";

/***/ }),

/***/ 624:
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,R0lGODlhDwAPAPcAAAAAAA1nCw1tBw1vBwxwCAx1CA54Bgx/BBBtDxNvFhZrFxptGBJ7DRN9CxJ+Dhd8Ch50GClsJCNyIidwJiV0JSx2JzV2NAmHAg6LCAqSBwqVCA6XDBKPCBONDRqLEReWCxCbChGfCRmTCxmYDRmVERqWEB+RFg+qBw6/AhKlCRSqDBivCh2qCRysGBCwCBCyDBe0DhS7BBi1BBq3Ch26DRe5EhizEBuzER+zER+zFSSPGyGSGSOcGCaFIC+ALDOKJzGMJjSMKD2GOiOqFSKwDyKxEyGzFCS4GS+gJTChKAbLAA3DAhHFAxPJAxTJBBjFBx7DDB3FDhnNCx7NCR/CEBnSBRrQCCLJDCLMESTOEyHWByvSEy3UFC7DIEaZOUabPEmWP0uYQFGLS1WOTlSKU1OTUVqWWFiYV1yaVF6sWFS1TVu1VGGQYWCuW3Gsb3aqbnWkdnGpcnKtcHOucXardXardn+3d5a4mZe5mp2/np+/oI7Ch5fDlpfAmJrDm6nEn8LZxun82vH77fL78/X79Pb89PP++fP++vX7+P319vv68/v59v36/P38/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAP8ALAAAAAAPAA8AAAi9AP8JHEiwIEE9FhAQCLAAjsF/ZASssJKlixEHEwqaMUBjCg41SbBE4RCB4IAUTqB4EbQnhpIZDNgIFHPBRo0jYAr1aUGDiAYFAiVg2NFGzp1DgOjMCbKhgMAEHYAEUsSo0aJEiOxkOPDnHwUSHtK4wWMIUJ04P0A0EDjmw4kXOcIQ8tMCBosQEAY+cLGEypdBfG6gkDHizEA0JZ40KbIGiRQmQyoULCPiihYuW6qo8PEwjxATPHT0ePOwNMGAADs="

/***/ }),

/***/ 625:
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,R0lGODlhDwAPAPcAAACAAf///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAADwAPAAAIOwABCBxIsKDBgwgTDgzAcCHDhgAgRhQYwOFEgxUpasT4MGPGiA0/hixY8eNEiSMpinyokqXClzBjygwIADs="

/***/ }),

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(627);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".parentTop {\r\n    position: relative;\r\n    display: block;\r\n}\r\n.childTop {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 200px;\r\n    display: block;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gwTVZoekUitgebreidComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scripts_appLabels__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scripts_general_scripts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_http_bbr_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_http_dossier_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_http_klant_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_http_tv_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_datepicker__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__scripts_sgsClasses_scripts__ = __webpack_require__(57);
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
            template: __webpack_require__(629),
            styles: [__webpack_require__(630)],
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

/***/ 629:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"zkForm\" class=\"container-fluid paddingTop30px\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtCode\" class=\"pull-right\">Code</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtCode\" formControlName=\"Code\" AllowOnlyNumbers DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"chkOvername\" class=\"pull-right\">Overname:</label></div>\r\n            <div class=\"checkbox col-sm-4\"><div class=\"marginTopMin10px marginLeft20px\"><input type=\"checkbox\" id=\"chkOvername\" class=\"marginBottom0\" formControlName=\"Overname\" value=\"\" /></div></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"ddlIndiener\" class=\"pull-right\">Klant/Indiener</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlIndiener\" formControlName=\"Indiener\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let klant of IndienerListItems\" [value]=\"klant.klantID\" [innerHTML]=\"klant.naam\"></option>\r\n                </select>\r\n            </div>\r\n            <div class=\"col-sm-2\"><label for=\"chkSamengevoegd\" class=\"pull-right\">Samengevoegd:</label></div>\r\n            <div class=\"checkbox col-sm-4\"><div class=\"marginTopMin10px marginLeft20px\"><input type=\"checkbox\" id=\"chkSamengevoegd\" class=\"marginBottom0\" formControlName=\"Samengevoegd\" value=\"\" /></div></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtFactuurRef\" class=\"pull-right\">Factuur Referentie Klant:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtFactuurRef\" formControlName=\"FactuurRef\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"txtEBSD\" class=\"pull-right\">Naam EBSD:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtEBSD\" formControlName=\"EBSD\" DottedBorderBelow class=\"form-control\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtAdres\" class=\"pull-right\">Straat en nr:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtAdres\" formControlName=\"Adres\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlIndieningsWijze\" class=\"pull-right\">Indieningswijze</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlIndieningsWijze\" formControlName=\"IndieningsWijze\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let iw of IndieningsWijzeListItems\" [value]=\"iw.indieningswijzeID\" [innerHTML]=\"iw.indieningswijze\"></option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtGemeente\" class=\"pull-right\">Gemeente:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtGemeente\" formControlName=\"Gemeente\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"dteDatum\" class=\"pull-right\">Datum:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"dteDatum\" formControlName=\"Datum\" class=\"form-control ng-trim-ignore\" bsDatepicker placement=\"top left\" autocomplete=\"off\" DottedBorderBelow [bsConfig]=\"{ showWeekNumbers: false }\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtTitel\" class=\"pull-right\">Titel:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtTitel\" formControlName=\"Titel\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlStatus\" class=\"pull-right\">Status</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlStatus\" formControlName=\"Status\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let sts of StatusListItems\" [value]=\"sts.tvStatusID\" [innerHTML]=\"sts.status\"></option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtBeschrijving\" class=\"pull-right\">Beschrijving:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtBeschrijving\" formControlName=\"Beschrijving\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlGefactureerd\" class=\"pull-right\">Gefactureerd</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlGefactureerd\" formControlName=\"Gefactureerd\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option value=\"1\">Ja</option>\r\n                    <option value=\"0\">Nee</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\"><label for=\"txtReferentie\" class=\"pull-right\">Referentie:</label></div>\r\n            <div class=\"col-sm-4\"><input type=\"text\" id=\"txtReferentie\" formControlName=\"Referentie\" DottedBorderBelow class=\"form-control\"></div>\r\n            <div class=\"col-sm-2\"><label for=\"ddlDossierBeheerder\" class=\"pull-right\">DossierBeheerder</label></div>\r\n            <div class=\"dropdown col-sm-4\">\r\n                <select id=\"ddlDossierBeheerder\" formControlName=\"DossierBeheerder\" DottedBorderBelow class=\"width100percent\">\r\n                    <option value=\"-1\">Selecteer</option>\r\n                    <option *ngFor=\"let dossbeh of DossierBeheerderListItems\" [value]=\"dossbeh.dossierBeheerderID\" [innerHTML]=\"dossbeh.naam\"></option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4 col-sm-offset-8\"><button type=\"button\" (click)=\"raiseSearch()\" class=\"btn btn-default\">{{appLabels.Send}}</button></div>\r\n        </div>\r\n    </div>\r\n</form>";

/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(631);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GwGridModule", function() { return GwGridModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_common_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_GW_gw_home_gw_home_component__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_GW_gw_bbr_grid_gw_bbr_grid_component__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_GW_gw_bbr_zoekuitgebreid_gw_bbr_zoekuitgebreid_component__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_GW_gw_gtm_grid_gw_gtm_grid_component__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_GW_gw_gtm_zoekuitgebreid_gw_gtm_zoekuitgebreid_component__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_GW_gw_gvt_grid_gw_gvt_grid_component__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_GW_gw_gvt_zoekuitgebreid_gw_gvt_zoekuitgebreid_component__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_GW_gw_klant_grid_gw_klant_grid_component__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_GW_gw_klantwijz_grid_gw_klantwijz_grid_component__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_GW_gw_klant_zoekuitgebreid_gw_klant_zoekuitgebreid_component__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_GW_gw_kw_grid_gw_kw_grid_component__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_GW_gw_kw_zoekuitgebreid_gw_kw_zoekuitgebreid_component__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_GW_gw_tv_grid_gw_tv_grid_component__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_GW_gw_tv_zoekuitgebreid_gw_tv_zoekuitgebreid_component__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__swimlane_ngx_datatable__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular_tree_component__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular_tree_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_angular_tree_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_bootstrap__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_ngx_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap_chronos__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_bootstrap_locale__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_file_upload__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng_trim_value_accessor__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng_trim_value_accessor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_ng_trim_value_accessor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_http_mail_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_event_listener_service__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_http_interceptor_service__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_authentication_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_http_bbr_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_http_dossier_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_http_file_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_http_gtm_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_http_gvt_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_http_klant_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_http_kleinewerven_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_http_tv_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_http_tvzone_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_http_puin_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_localstorage_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__services_loading_animation_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__gw_grid_routing_module__ = __webpack_require__(746);
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
                // ToastrModule.forRoot(),
                __WEBPACK_IMPORTED_MODULE_42__gw_grid_routing_module__["a" /* GwGridRoutingModule */]
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

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GwGridRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_common_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_GW_gw_home_gw_home_component__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_chronos__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_locale__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_services_http_mail_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_services_event_listener_service__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_authentication_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_loading_animation_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_http_puin_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_http_tvzone_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_http_tv_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_http_kleinewerven_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_http_klant_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_http_gvt_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_http_gtm_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_http_file_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_http_dossier_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_http_bbr_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_http_interceptor_service__ = __webpack_require__(203);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2NyaXB0cy9zZ3NDbGFzc2VzLnNjcmlwdHMudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ob21lL2d3LWhvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctaG9tZS9ndy1ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctaG9tZS9ndy1ob21lLmNvbXBvbmVudC5jc3M/Y2RhYiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWhvbWUvZ3ctaG9tZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctYmJyLWdyaWQvZ3ctYmJyLWdyaWQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctYmJyLWdyaWQvZ3ctYmJyLWdyaWQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1iYnItZ3JpZC9ndy1iYnItZ3JpZC5jb21wb25lbnQuY3NzPzEyYWEiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1iYnItZ3JpZC9ndy1iYnItZ3JpZC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctYmJyLXpvZWt1aXRnZWJyZWlkL2d3LWJici16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1iYnItem9la3VpdGdlYnJlaWQvZ3ctYmJyLXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctYmJyLXpvZWt1aXRnZWJyZWlkL2d3LWJici16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuY3NzP2JhYzQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1iYnItem9la3VpdGdlYnJlaWQvZ3ctYmJyLXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ndG0tZ3JpZC9ndy1ndG0tZ3JpZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ndG0tZ3JpZC9ndy1ndG0tZ3JpZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvaW1hZ2VzL2NoZWNrZXJlZC1mbGFnLWljb24ucG5nIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctZ3RtLWdyaWQvZ3ctZ3RtLWdyaWQuY29tcG9uZW50LmNzcz8yYjIxIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctZ3RtLWdyaWQvZ3ctZ3RtLWdyaWQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWd0bS16b2VrdWl0Z2VicmVpZC9ndy1ndG0tem9la3VpdGdlYnJlaWQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctZ3RtLXpvZWt1aXRnZWJyZWlkL2d3LWd0bS16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWd0bS16b2VrdWl0Z2VicmVpZC9ndy1ndG0tem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzcz9mOGE0Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctZ3RtLXpvZWt1aXRnZWJyZWlkL2d3LWd0bS16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctZ3Z0LWdyaWQvZ3ctZ3Z0LWdyaWQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctZ3Z0LWdyaWQvZ3ctZ3Z0LWdyaWQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ndnQtZ3JpZC9ndy1ndnQtZ3JpZC5jb21wb25lbnQuY3NzPzI3YzkiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ndnQtZ3JpZC9ndy1ndnQtZ3JpZC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctZ3Z0LXpvZWt1aXRnZWJyZWlkL2d3LWd2dC16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ndnQtem9la3VpdGdlYnJlaWQvZ3ctZ3Z0LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctZ3Z0LXpvZWt1aXRnZWJyZWlkL2d3LWd2dC16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuY3NzP2Q5MWQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ndnQtem9la3VpdGdlYnJlaWQvZ3ctZ3Z0LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rbGFudC1ncmlkL2d3LWtsYW50LWdyaWQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta2xhbnQtZ3JpZC9ndy1rbGFudC1ncmlkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta2xhbnQtZ3JpZC9ndy1rbGFudC1ncmlkLmNvbXBvbmVudC5jc3M/NjE3YiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWtsYW50LWdyaWQvZ3cta2xhbnQtZ3JpZC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta2xhbnR3aWp6LWdyaWQvZ3cta2xhbnR3aWp6LWdyaWQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta2xhbnR3aWp6LWdyaWQvZ3cta2xhbnR3aWp6LWdyaWQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rbGFudHdpanotZ3JpZC9ndy1rbGFudHdpanotZ3JpZC5jb21wb25lbnQuY3NzPzlmNmIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rbGFudHdpanotZ3JpZC9ndy1rbGFudHdpanotZ3JpZC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta2xhbnQtem9la3VpdGdlYnJlaWQvZ3cta2xhbnQtem9la3VpdGdlYnJlaWQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta2xhbnQtem9la3VpdGdlYnJlaWQvZ3cta2xhbnQtem9la3VpdGdlYnJlaWQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rbGFudC16b2VrdWl0Z2VicmVpZC9ndy1rbGFudC16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuY3NzP2E1ODUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rbGFudC16b2VrdWl0Z2VicmVpZC9ndy1rbGFudC16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta3ctZ3JpZC9ndy1rdy1ncmlkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWt3LWdyaWQvZ3cta3ctZ3JpZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWt3LWdyaWQvZ3cta3ctZ3JpZC5jb21wb25lbnQuY3NzP2I0MTYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rdy1ncmlkL2d3LWt3LWdyaWQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWt3LXpvZWt1aXRnZWJyZWlkL2d3LWt3LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWt3LXpvZWt1aXRnZWJyZWlkL2d3LWt3LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta3ctem9la3VpdGdlYnJlaWQvZ3cta3ctem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzcz80M2RjIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta3ctem9la3VpdGdlYnJlaWQvZ3cta3ctem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LXR2LWdyaWQvZ3ctdHYtZ3JpZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy10di1ncmlkL2d3LXR2LWdyaWQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2ltYWdlcy9QbHVzLmdpZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvaW1hZ2VzL0diMi5naWYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy10di1ncmlkL2d3LXR2LWdyaWQuY29tcG9uZW50LmNzcz83ZjZiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctdHYtZ3JpZC9ndy10di1ncmlkLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy10di16b2VrdWl0Z2VicmVpZC9ndy10di16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy10di16b2VrdWl0Z2VicmVpZC9ndy10di16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LXR2LXpvZWt1aXRnZWJyZWlkL2d3LXR2LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5jc3M/NjE1ZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LXR2LXpvZWt1aXRnZWJyZWlkL2d3LXR2LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ncmlkLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWdyaWQucm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSxNQUFNO0FBQ047SUFBQTtJQWtCQSxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDOztBQUlELE1BQU07QUFDTjtJQUFBO0lBT0EsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQzs7QUFNRCxNQUFNO0FBQ047SUFBQTtJQWtCQSxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDOztBQUlELFFBQVE7QUFDUjtJQUFBO0lBT0EsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FBQzs7QUFHRCxLQUFLO0FBQ0w7SUFBQTtJQUtBLENBQUM7SUFBRCxzQkFBQztBQUFELENBQUM7O0FBRUQsS0FBSztBQUNMO0lBQUE7SUFpQkEsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakd3RDtBQUNNO0FBQ3BCO0FBQ3NCO0FBQzJCO0FBQ0g7QUFRekY7SUFBcUMsbUNBQWM7SUFzQi9DLHlCQUE2QixPQUFzQixFQUFVLE1BQWMsRUFBbUIsTUFBc0IsRUFBbUIsSUFBMkI7UUFBbEssWUFDSSxrQkFBTSxPQUFPLENBQUMsU0FNakI7UUFQNEIsYUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUFVLFlBQU0sR0FBTixNQUFNLENBQVE7UUFBbUIsWUFBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFBbUIsVUFBSSxHQUFKLElBQUksQ0FBdUI7UUFyQmxLLFVBQUksR0FBYyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDNUUscUJBQWUsR0FBWSxJQUFJLENB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LFFBQVEsRUFBRSxtR0FBc0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO2dCQUMzRSwrRkFBcUI7Z0JBQ3JCLG1GQUFjO2dCQUNkLDJGQUFrQjtnQkFDbEIscUZBQWU7Z0JBQ2YsbUZBQWM7Z0JBQ2QsbUZBQWM7Z0JBQ2QsdUZBQWdCO2dCQUNoQixxR0FBdUI7Z0JBQ3ZCLGlGQUFhO2dCQUNiLHlGQUFpQjtnQkFDakIscUZBQWU7Z0JBQ2YsK0ZBQWU7Z0JBQ2YscUdBQXVCO2dCQUN2Qix5R0FBb0I7Z0JBQ3BCLHlEQUFRO2FBQ1g7U0FDSixDQUFDO09BQ1csbUJBQW1CLENBQy9CO0lBQUQsMEJBQUM7Q0FBQTtBQUQrQiIsImZpbGUiOiIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQkJSXHJcbmV4cG9ydCBjbGFzcyBTZ3NCQlJab2VrVmVsZGVuIHtcclxuICAgIGNvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICB0dklkOiBudW1iZXIgfCBudWxsO1xyXG4gICAga2xhbnRJZDogbnVtYmVyIHwgbnVsbDtcclxuICAgIGRvc3NpZXJCZWhlZXJkZXJJZDogbnVtYmVyIHwgbnVsbDtcclxuICAgIHN0YXR1c0lkOiBudW1iZXIgfCBudWxsO1xyXG4gICAgYmVzdGVtbWluZ3NhYXJkSWQ6IG51bWJlciB8IG51bGw7XHJcbiAgICBnZWZhY3R1cmVlcmQ6IG51bWJlciB8IG51bGw7XHJcbiAgICBzdHJhYXQ6IHN0cmluZztcclxuICAgIHBvc3Rjb2RlOiBzdHJpbmc7XHJcbiAgICBnZW1lZW50ZTogc3RyaW5nO1xyXG4gICAgbGFtYmVydFg6IG51bWJlciB8IG51bGw7XHJcbiAgICBsYW1iZXJ0WTogbnVtYmVyIHwgbnVsbDtcclxuICAgIGxhbWJlcnRSYW5nZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIHZlcnRyZWtTdHJhYXQ6IHN0cmluZztcclxuICAgIHZlcnRyZWtHZW1lZW50ZTogc3RyaW5nO1xyXG4gICAgZGF0VmFuOiBEYXRlIHwgbnVsbDtcclxuICAgIGRhdFRvdDogRGF0ZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gR1RNXHJcbmV4cG9ydCBjbGFzcyBTZ3NHVE1ab2VrVmVsZGVuIHtcclxuICAgIGd0bUlkOiBudW1iZXIgfCBudWxsO1xyXG4gICAgZGF0VmFuOiBEYXRlIHwgbnVsbDtcclxuICAgIGRhdFRvdDogRGF0ZSB8IG51bGw7XHJcbiAgICBzdHJhYXQ6IHN0cmluZztcclxuICAgIGdlbWVlbnRlOiBzdHJpbmc7XHJcbiAgICB0b3BJZDogbnVtYmVyIHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIEdWVFxyXG5leHBvcnQgY2xhc3MgU2dzR1ZUWm9la1ZlbGRlbiB7XHJcbiAgICBjb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgdHZJZDogbnVtYmVyIHwgbnVsbDtcclxuICAgIGtsYW50SWQ6IG51bWJlciB8IG51bGw7XHJcbiAgICBkb3NzaWVyQmVoZWVyZGVySWQ6IG51bWJlciB8IG51bGw7XHJcbiAgICBzdGF0dXNJZDogbnVtYmVyIHwgbnVsbDtcclxuICAgIGJlc3RlbW1pbmdzYWFyZElkOiBudW1iZXIgfCBudWxsO1xyXG4gICAgZ2VmYWN0dXJlZXJkOiBudW1iZXIgfCBudWxsO1xyXG4gICAgc3RyYWF0OiBzdHJpbmc7XHJcbiAgICBwb3N0Y29kZTogc3RyaW5nO1xyXG4gICAgZ2VtZWVudGU6IHN0cmluZztcclxuICAgIGxhbWJlcnRYOiBudW1iZXIgfCBudWxsO1xyXG4gICAgbGFtYmVydFk6IG51bWJlciB8IG51bGw7XHJcbiAgICBsYW1iZXJ0UmFuZ2U6IG51bWJlciB8IG51bGw7XHJcbiAgICB2ZXJ0cmVrU3RyYWF0OiBzdHJpbmc7XHJcbiAgICB2ZXJ0cmVrR2VtZWVudGU6IHN0cmluZztcclxuICAgIGRhdFZhbjogRGF0ZSB8IG51bGw7XHJcbiAgICBkYXRUb3Q6IERhdGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIEtsYW50XHJcbmV4cG9ydCBjbGFzcyBTZ3NLbGFudFpvZWtWZWxkZW4ge1xyXG4gICAga2xhbnRJZDogbnVtYmVyIHwgbnVsbDtcclxuICAgIG9yZ2FuaXNhdGllOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgdm9vcm5hYW06IHN0cmluZyB8IG51bGw7XHJcbiAgICBhY2h0ZXJuYWFtOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgc3RyYWF0OiBzdHJpbmc7XHJcbiAgICBnZW1lZW50ZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuLy8gS1dcclxuZXhwb3J0IGNsYXNzIFNnc0tXWm9la1ZlbGRlbiB7XHJcbiAgICBrbGFudElkOiBudW1iZXIgfCBudWxsO1xyXG4gICAgcmVmZXJlbnRpZTogc3RyaW5nO1xyXG4gICAgdmVya2xhcmluZ29udHZhbmdlbjogYm9vbGVhbiB8IG51bGw7XHJcbiAgICBkb3NzaWVyQmVoZWVyZGVySWQ6IG51bWJlciB8IG51bGw7XHJcbn1cclxuXHJcbi8vIFRWXHJcbmV4cG9ydCBjbGFzcyBTZ3NUVlpvZWtWZWxkZW4ge1xyXG4gICAgdHZJZDogbnVtYmVyIHwgbnVsbDtcclxuICAgIGtsYW50SWQ6IG51bWJlciB8IG51bGw7XHJcbiAgICBmYWN0dXVyUmVmOiBzdHJpbmc7XHJcbiAgICBhZHJlczogc3RyaW5nO1xyXG4gICAgZ2VtZWVudGU6IHN0cmluZztcclxuICAgIHRpdGVsOiBzdHJpbmc7XHJcbiAgICBiZXNjaHJpanZpbmc6IHN0cmluZztcclxuICAgIHJlZmVyZW50aWU6IHN0cmluZztcclxuICAgIG92ZXJuYW1lOiBib29sZWFuIHwgbnVsbDtcclxuICAgIHNhbWVuZ2V2b2VnZDogYm9vbGVhbiB8IG51bGw7XHJcbiAgICBlYnNkOiBzdHJpbmc7XHJcbiAgICBpbmRpZW5pbmdzd2lqemVJZDogbnVtYmVyIHwgbnVsbDtcclxuICAgIGRhdHVtOiBEYXRlIHwgbnVsbDtcclxuICAgIHN0YXR1c0lkOiBudW1iZXIgfCBudWxsO1xyXG4gICAgZ2VmYWN0dXJlZXJkOiBudW1iZXIgfCBudWxsO1xyXG4gICAgZG9zc2llckJlaGVlcmRlcklkOiBudW1iZXIgfCBudWxsO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItcm91dGVyLWxvYWRlci9zcmMhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2NyaXB0cy9zZ3NDbGFzc2VzLnNjcmlwdHMudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBHZW5lcmFsU2NyaXB0cyB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL2dlbmVyYWwuc2NyaXB0c1wiO1xyXG5pbXBvcnQgeyBUb2FzdHJTZXJ2aWNlIH0gZnJvbSBcIm5neC10b2FzdHJcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcywgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGaWxsVHlwZXMgfSBmcm9tIFwiLi4vLi4vYm9kZW1iZWhlZXJyYXBwb3J0LWdyaWQvYm9kZW1iZWhlZXJyYXBwb3J0LWdyaWQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSwgVXNlclJvbGVzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiZ3ctaG9tZVwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZ3ctaG9tZS5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9ndy1ob21lLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBnd0hvbWVDb21wb25lbnQgZXh0ZW5kcyBHZW5lcmFsU2NyaXB0cyBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBidG5zOiBib29sZWFuW10gPSBbZmFsc2UsIHRydWUsIGZhbHNlLCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCBmYWxzZV07XHJcbiAgICBhbGxCdXR0b25zU2hvd246IGJvb2xlYW4gPSB0cnVlOyBcclxuXHJcbiAgICBCQlJGaWxsVHlwZTogRmlsbFR5cGVzID0gRmlsbFR5cGVzLkZvckJick92ZXJ6aWNodDtcclxuICAgIFVQTEZpbGxUeXBlOiBGaWxsVHlwZXMgPSBGaWxsVHlwZXMuRm9yT25saW5lRmlsbGVkT3JVcGxvYWQ7XHJcbiAgICBVUm9sZXM6IFVzZXJSb2xlcztcclxuXHJcbiAgICBpc0dXVXNlcjogYm9vbGVhbiB8IG51bGwgPSBudWxsO1xyXG4gICAgdXNlclJvbGU6IFVzZXJSb2xlcyA9IFVzZXJSb2xlcy5LbGFudDtcclxuICAgIGFsbG93RGVsZXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBQZ0luZGV4OiBudW1iZXIgPSAtMTtcclxuXHJcbiAgICB1c2VUb29sYmFyID0gZmFsc2U7XHJcbiAgICBASW5wdXQoJ2hhc1Rvb2xiYXInKVxyXG4gICAgZ2V0IGhhc1Rvb2xiYXIoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlVG9vbGJhcjtcclxuICAgIH1cclxuICAgIHNldCBoYXNUb29sYmFyKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy51c2VUb29sYmFyID0gXCJcIiArIHZhbHVlICE9PSBcImZhbHNlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfdG9hc3RyOiBUb2FzdHJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJlYWRvbmx5IF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcmVhZG9ubHkgYXV0aDogQXV0aGVudGljYXRpb25TZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIoX3RvYXN0cik7XHJcblxyXG4gICAgICAgIC8vIG5lZWRlZCBpbiBvcmRlciB0byByZXRyaWV2ZSB0aGUgY2hhbmdlZCB1cmwgcXVlcnlwYXJhbXMgb24gYSBwb3N0YmFja1xyXG4gICAgICAgIHRoaXMucm91dGVyLnJvdXRlUmV1c2VTdHJhdGVneS5zaG91bGRSZXVzZVJvdXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzbmFwc2hvdCA9IHRoaXMuX3JvdXRlLnNuYXBzaG90O1xyXG4gICAgICAgIGlmIChzbmFwc2hvdC5xdWVyeVBhcmFtc1tcIlBnXCJdKSB7IHRoaXMuUGdJbmRleCA9IHNuYXBzaG90LnF1ZXJ5UGFyYW1zW1wiUGdcIl0gfTtcclxuXHJcbiAgICAgICAgdGhpcy5hdXRoLmdldFJvbGUoKS50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbigocm9sZTogVXNlclJvbGVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzR1dVc2VyID0gKHJvbGUgIT09IFVzZXJSb2xlcy5LbGFudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJSb2xlID0gcm9sZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0dXVXNlciAmJiB0aGlzLnVzZXJSb2xlID09IFVzZXJSb2xlcy5Hcm9uZHdpanplcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsb3dEZWxldGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTsgICBcclxuXHJcbiAgICAgICAgaWYgKHNuYXBzaG90LnF1ZXJ5UGFyYW1zW1wiVFwiXSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHNuYXBzaG90LnF1ZXJ5UGFyYW1zW1wiVFwiXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIjNcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJCUkZpbGxUeXBlID0gRmlsbFR5cGVzLkZvckFhbnZyYWdlbkJicjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuUGdJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5hbGxCdXR0b25zU2hvd24gPSB0aGlzLmRldGVjdEFsbEJ1dHRvbnNTaG93bigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNpbmdsZUJ1dHRvbih0aGlzLlBnSW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVCdXR0b24oYnRuSW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGlmIChidG5JbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmFsbEJ1dHRvbnNTaG93bikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGksIG4gPSB0aGlzLmJ0bnMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuc1tpXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmJ0bnNbYnRuSW5kZXhdID0gIXRoaXMuYnRuc1tidG5JbmRleF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWxsQnV0dG9uc1Nob3duID0gdGhpcy5kZXRlY3RBbGxCdXR0b25zU2hvd24oKTtcclxuICAgIH1cclxuICAgIHNpbmdsZUJ1dHRvbihidG5JbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgdmFyIGksIG4gPSB0aGlzLmJ0bnMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5idG5zW2ldID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYnRuc1tidG5JbmRleF0gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYWxsQnV0dG9uc1Nob3duID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXRCdXR0b25DbGFzcyhibG5WYWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHJldHVybiBibG5WYWx1ZSA/ICdidG4tb24nIDogJ2J0bi1vZmYnO1xyXG4gICAgfVxyXG4gICAgZ2V0U2luZ2xlQ2xhc3MoYmxuVmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICByZXR1cm4gYmxuVmFsdWUgPyAnYnRuLXNpbmdsZS1vbicgOiAnYnRuLXNpbmdsZS1vZmYnO1xyXG4gICAgfVxyXG4gICAgZGV0ZWN0QWxsQnV0dG9uc1Nob3duKCkge1xyXG4gICAgICAgIHZhciBpLCBuID0gdGhpcy5idG5zLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJ0bnNbaV0gPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi1yb3V0ZXItbG9hZGVyL3NyYyEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctaG9tZS9ndy1ob21lLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8bmF2ICpuZ0lmPVxcXCJQZ0luZGV4ID09PSAtMSAmJiB1c2VUb29sYmFyXFxcIiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1kZWZhdWx0IG5hdmJhci1maXhlZC1ib3R0b21cXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiNDQ0NDQ0M7XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIiBzdHlsZT1cXFwibWFyZ2luOiAxMHB4IDBweCAyN3B4IDBweDtcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwidG9nZ2xlQnV0dG9uKDApXFxcIiBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6IC01cHg7XFxcIiBbbmdDbGFzc109XFxcImdldEJ1dHRvbkNsYXNzKGJ0bnNbMF0pXFxcIj5PbnRncmF2aW5nZW48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcInNpbmdsZUJ1dHRvbigwKVxcXCIgW25nQ2xhc3NdPVxcXCJnZXRTaW5nbGVDbGFzcyhidG5zWzBdKVxcXCI+Jm5ic3A7PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVCdXR0b24oMSlcXFwiIFtuZ0NsYXNzXT1cXFwiZ2V0QnV0dG9uQ2xhc3MoYnRuc1sxXSlcXFwiPlRWPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJzaW5nbGVCdXR0b24oMSlcXFwiIFtuZ0NsYXNzXT1cXFwiZ2V0U2luZ2xlQ2xhc3MoYnRuc1sxXSlcXFwiPiZuYnNwOzwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwidG9nZ2xlQnV0dG9uKDIpXFxcIiBbbmdDbGFzc109XFxcImdldEJ1dHRvbkNsYXNzKGJ0bnNbMl0pXFxcIj5HVE08L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcInNpbmdsZUJ1dHRvbigyKVxcXCIgW25nQ2xhc3NdPVxcXCJnZXRTaW5nbGVDbGFzcyhidG5zWzJdKVxcXCI+Jm5ic3A7PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVCdXR0b24oMylcXFwiIFtuZ0NsYXNzXT1cXFwiZ2V0QnV0dG9uQ2xhc3MoYnRuc1szXSlcXFwiPkdWVDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwic2luZ2xlQnV0dG9uKDMpXFxcIiBbbmdDbGFzc109XFxcImdldFNpbmdsZUNsYXNzKGJ0bnNbM10pXFxcIj4mbmJzcDs8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcInRvZ2dsZUJ1dHRvbig0KVxcXCIgW25nQ2xhc3NdPVxcXCJnZXRCdXR0b25DbGFzcyhidG5zWzRdKVxcXCI+T25saW5lIEluZ2V2dWxkPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJzaW5nbGVCdXR0b24oNClcXFwiIFtuZ0NsYXNzXT1cXFwiZ2V0U2luZ2xlQ2xhc3MoYnRuc1s0XSlcXFwiPiZuYnNwOzwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwidG9nZ2xlQnV0dG9uKDUpXFxcIiBbbmdDbGFzc109XFxcImdldEJ1dHRvbkNsYXNzKGJ0bnNbNV0pXFxcIj5HZWdldmVucyBBYW5wYXNzZW48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcInNpbmdsZUJ1dHRvbig1KVxcXCIgW25nQ2xhc3NdPVxcXCJnZXRTaW5nbGVDbGFzcyhidG5zWzVdKVxcXCI+Jm5ic3A7PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVCdXR0b24oNilcXFwiIFtuZ0NsYXNzXT1cXFwiZ2V0QnV0dG9uQ2xhc3MoYnRuc1s2XSlcXFwiPktsYW50ZW48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcInNpbmdsZUJ1dHRvbig2KVxcXCIgW25nQ2xhc3NdPVxcXCJnZXRTaW5nbGVDbGFzcyhidG5zWzZdKVxcXCI+Jm5ic3A7PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVCdXR0b24oNylcXFwiIFtuZ0NsYXNzXT1cXFwiZ2V0QnV0dG9uQ2xhc3MoYnRuc1s3XSlcXFwiPkJCUjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwic2luZ2xlQnV0dG9uKDcpXFxcIiBbbmdDbGFzc109XFxcImdldFNpbmdsZUNsYXNzKGJ0bnNbN10pXFxcIj4mbmJzcDs8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcInRvZ2dsZUJ1dHRvbig4KVxcXCIgW25nQ2xhc3NdPVxcXCJnZXRCdXR0b25DbGFzcyhidG5zWzhdKVxcXCI+UHVpbjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwic2luZ2xlQnV0dG9uKDgpXFxcIiBbbmdDbGFzc109XFxcImdldFNpbmdsZUNsYXNzKGJ0bnNbOF0pXFxcIj4mbmJzcDs8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcInRvZ2dsZUJ1dHRvbigtMSlcXFwiIFtuZ0NsYXNzXT1cXFwiZ2V0QnV0dG9uQ2xhc3MoYWxsQnV0dG9uc1Nob3duKVxcXCI+VG9vbiBBbGxlczwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvbmF2PlxcclxcbjxkaXYgPlxcclxcbiAgICA8ZGl2IFtoaWRkZW5dPVxcXCIhYnRuc1swXVxcXCI+XFxyXFxuICAgICAgICA8aDQ+S2xlaW5lIFdlcmtlbjwvaDQ+XFxyXFxuICAgICAgICA8Z3cta3ctZ3JpZD48L2d3LWt3LWdyaWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IFtoaWRkZW5dPVxcXCIhYnRuc1sxXVxcXCI+XFxyXFxuICAgICAgICA8aDQ+VGVjaG5pc2NoZSBWZXJzbGFnZW48L2g0PlxcclxcbiAgICAgICAgPGd3LXR2LWdyaWQgTmlldXdlQWFudnJhZ2VuPVxcXCJ0cnVlXFxcIiBFeHRlbmRlZFNlYXJjaD1cXFwidHJ1ZVxcXCIgW0FsbG93RGVsZXRlXT1cXFwiYWxsb3dEZWxldGVcXFwiPjwvZ3ctdHYtZ3JpZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgW2hpZGRlbl09XFxcIiFidG5zWzJdXFxcIj5cXHJcXG4gICAgICAgIDxoND5Hcm9uZCBUcmFuc3BvcnQgTWVsZGluZ2VuPC9oND5cXHJcXG4gICAgICAgIDxndy1ndG0tZ3JpZCBOaWV1d2VBYW52cmFnZW49XFxcInRydWVcXFwiIEV4dGVuZGVkU2VhcmNoPVxcXCJ0cnVlXFxcIiBbQWxsb3dEZWxldGVdPVxcXCJhbGxvd0RlbGV0ZVxcXCI+PC9ndy1ndG0tZ3JpZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgW2hpZGRlbl09XFxcIiFidG5zWzNdXFxcIj5cXHJcXG4gICAgICAgIDxoND5Hcm9uZCBWZXJ6ZXQgVG9lbGF0aW5nZW48L2g0PlxcclxcbiAgICAgICAgPGd3LWd2dC1ncmlkIE5pZXV3ZUFhbnZyYWdlbj1cXFwidHJ1ZVxcXCIgRXh0ZW5kZWRTZWFyY2g9XFxcInRydWVcXFwiIFtBbGxvd0RlbGV0ZV09XFxcImFsbG93RGVsZXRlXFxcIj48L2d3LWd2dC1ncmlkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBbaGlkZGVuXT1cXFwiIWJ0bnNbNF1cXFwiPlxcclxcbiAgICAgICAgPGg0PlVwbG9hZCBvZiBPbmxpbmUgSW5nZXZ1bGQgLSBWQS9PVjwvaDQ+XFxyXFxuICAgICAgICA8Ym9kZW1iZWhlZXJyYXBwb3J0LWdyaWQgaXNHV1N0YXJ0PVxcXCJ0cnVlXFxcIiBUeXBlPVxcXCJCQlJcXFwiIFtGaWxsVHlwZV09XFxcIlVQTEZpbGxUeXBlXFxcIiBbdGl0bGVdPVxcXCInQm9kZW1iZWhlZXIgcmFwcG9ydGVuOidcXFwiPjwvYm9kZW1iZWhlZXJyYXBwb3J0LWdyaWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IFtoaWRkZW5dPVxcXCIhYnRuc1s1XVxcXCI+XFxyXFxuICAgICAgICA8aDQ+VnJhYWcgdG90IGdlZ2V2ZW5zYWFucGFzc2luZ2VuPC9oND5cXHJcXG4gICAgICAgIDxndy1rbGFudHdpanotZ3JpZD48L2d3LWtsYW50d2lqei1ncmlkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBbaGlkZGVuXT1cXFwiIWJ0bnNbNl1cXFwiPlxcclxcbiAgICAgICAgPGg0Pk5pZXV3ZSBLbGFudGVuPC9oND5cXHJcXG4gICAgICAgIDxndy1rbGFudC1ncmlkIGlzR1dTdGFydD1cXFwidHJ1ZVxcXCI+PC9ndy1rbGFudC1ncmlkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBbaGlkZGVuXT1cXFwiIWJ0bnNbN11cXFwiPlxcclxcbiAgICAgICAgPGg0PkJvZGVtIEJlaGVlciBSYXBwb3J0ZW48L2g0PlxcclxcbiAgICAgICAgPGd3LWJici1ncmlkIE5pZXV3ZUFhbnZyYWdlbj1cXFwiZmFsc2VcXFwiIEV4dGVuZGVkU2VhcmNoPVxcXCJ0cnVlXFxcIiBbQWxsb3dEZWxldGVdPVxcXCJhbGxvd0RlbGV0ZVxcXCI+PC9ndy1iYnItZ3JpZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgW2hpZGRlbl09XFxcIiFidG5zWzhdXFxcIj5cXHJcXG4gICAgICAgIDxoND5QdWluPC9oND5cXHJcXG4gICAgICAgIFRvIEJlIERldmVsb3BlZFxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctaG9tZS9ndy1ob21lLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA1NzRcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2d3LWhvbWUuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWhvbWUvZ3ctaG9tZS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA1NzVcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJoNCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXHJcXG59XFxyXFxuLmJ0bi1vbiB7XFxyXFxuICAgIGNvbG9yOiAjQjBEMDAxICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI2RkZCAhaW1wb3J0YW50O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE3MzQyICFpbXBvcnRhbnQ7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXHJcXG59XFxyXFxuLmJ0bi1vZmYge1xcclxcbiAgICBjb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xcclxcbiAgICBib3JkZXItY29sb3I6ICNkZGQgIWltcG9ydGFudDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDAwMCAhaW1wb3J0YW50O1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxyXFxufVxcclxcbi5idG4tc2luZ2xlLW9uIHtcXHJcXG4gICAgY29sb3I6ICNCMEQwMDEgIWltcG9ydGFudDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjZGRkICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTczNDIgIWltcG9ydGFudDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcXHJcXG59XFxyXFxuLmJ0bi1zaW5nbGUtb2ZmIHtcXHJcXG4gICAgY29sb3I6ICMwMTczNDIgIWltcG9ydGFudDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjZGRkICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDAgIWltcG9ydGFudDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctaG9tZS9ndy1ob21lLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDU3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEdlbmVyYWxTY3JpcHRzIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvZ2VuZXJhbC5zY3JpcHRzXCI7XHJcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UgfSBmcm9tIFwibmd4LXRvYXN0clwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEh0dHBCQlJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2h0dHAtYmJyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSUJCUlN0YXR1cywgSUJCUlN0YXR1c0dyaWRSZWNvcmQgfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9pbnRlcmZhY2VzLnNjcmlwdHNcIjtcclxuaW1wb3J0IHsgSVNnc0JCUkl0ZW0gfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9zZ3NJbnRlcmZhY2VzLnNjcmlwdHNcIjtcclxuaW1wb3J0IHsgYXBwTGFiZWxzIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvYXBwTGFiZWxzXCI7XHJcbmltcG9ydCB7IERhdGF0YWJsZUNvbXBvbmVudCB9IGZyb20gXCJAc3dpbWxhbmUvbmd4LWRhdGF0YWJsZVwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UsIFVzZXJSb2xlcyB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBTZ3NCQlJab2VrVmVsZGVuIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvc2dzQ2xhc3Nlcy5zY3JpcHRzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImd3LWJici1ncmlkXCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ndy1iYnItZ3JpZC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9ndy1iYnItZ3JpZC5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgZ3dCQlJHcmlkQ29tcG9uZW50IGV4dGVuZHMgR2VuZXJhbFNjcmlwdHMgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgYXBwTGFiZWxzID0gYXBwTGFiZWxzO1xyXG5cclxuXHJcbiAgICBTdGF0dXNEcm9wZG93bkxpc3Q6IElCQlJTdGF0dXNbXSA9IG51bGw7XHJcbiAgICBTdGF0dXNMaXN0OiBJU2dzQkJSSXRlbVtdID0gbnVsbDtcclxuICAgIHJvd3M6IElTZ3NCQlJJdGVtW10gPSBudWxsO1xyXG4gICAgdGVtcDogYW55W10gPSBbXTtcclxuICAgIEBWaWV3Q2hpbGQoRGF0YXRhYmxlQ29tcG9uZW50KSB0YWJsZTogRGF0YXRhYmxlQ29tcG9uZW50O1xyXG5cclxuICAgIEBJbnB1dCgpIHRpdGxlID0gXCJcIjtcclxuICAgIFN0YXR1c0lkOiBudW1iZXIgPSA0O1xyXG4gICAgaXNFeHRlbmRlZFNlYXJjaDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGZvck5pZXV3ZUFhbnZyYWdlbiA9IHRydWU7XHJcbiAgICBASW5wdXQoJ05pZXV3ZUFhbnZyYWdlbicpXHJcbiAgICBnZXQgTmlldXdlQWFudnJhZ2VuKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvck5pZXV3ZUFhbnZyYWdlbjtcclxuICAgIH1cclxuICAgIHNldCBOaWV1d2VBYW52cmFnZW4odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmZvck5pZXV3ZUFhbnZyYWdlbiA9IFwiXCIgKyB2YWx1ZSAhPT0gXCJmYWxzZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZVNlYXJjaCA9IHRydWU7XHJcbiAgICBASW5wdXQoJ0V4dGVuZGVkU2VhcmNoJylcclxuICAgIGdldCBFeHRlbmRlZFNlYXJjaCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51c2VTZWFyY2g7XHJcbiAgICB9XHJcbiAgICBzZXQgRXh0ZW5kZWRTZWFyY2godmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnVzZVNlYXJjaCA9IFwiXCIgKyB2YWx1ZSAhPT0gXCJmYWxzZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbkRlbGV0ZSA9IGZhbHNlO1xyXG4gICAgQElucHV0KCdBbGxvd0RlbGV0ZScpXHJcbiAgICBnZXQgQWxsb3dEZWxldGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FuRGVsZXRlO1xyXG4gICAgfVxyXG4gICAgc2V0IEFsbG93RGVsZXRlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5jYW5EZWxldGUgPSBcIlwiICsgdmFsdWUgIT09IFwiZmFsc2VcIjtcclxuICAgIH1cclxuXHJcbiAgICBTdHNGb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfdG9hc3RyOiBUb2FzdHJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgaHR0cEJCUjogSHR0cEJCUlNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGF1dGg6IEF1dGhlbnRpY2F0aW9uU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKF90b2FzdHIpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLlN0c0Zvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgICAgICAgc3RzOiBbLTFdLFxyXG4gICAgICAgICAgICBiYnJOdW1tZXI6IFtcIlwiXSxcclxuICAgICAgICAgICAgbmFhbTogW1wiXCJdLFxyXG4gICAgICAgICAgICBjb2RlOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIGdlbTogW1wiXCJdLFxyXG4gICAgICAgICAgICBhYW52cmFhZ0RhdHVtOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIHN0YXR1c0RhdHVtOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIGluZGllbmluZ3N3aWp6ZTogW1wiXCJdLFxyXG4gICAgICAgICAgICBnZWZhY3R1cmVlcmQ6IFtcIlwiXSxcclxuICAgICAgICAgICAgYmJyU3RzOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIGhvZXY6IFtcIlwiXSxcclxuICAgICAgICAgICAgc3RhcnREYXR1bTogW1wiXCJdXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaHR0cEJCUi5TdGF0dXNEZWZpbml0aW9uTGlzdChcIkJCUlwiLCB0aGlzLk5pZXV3ZUFhbnZyYWdlbikudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKGxzdDogSUJCUlN0YXR1c1tdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobHN0ICE9IG51bGwgJiYgbHN0ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU3RhdHVzRHJvcGRvd25MaXN0ID0gWy4uLmxzdF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLlN0c0Zvcm0ucGF0Y2hWYWx1ZSh7IHN0czogKHRoaXMuTmlldXdlQWFudnJhZ2VuID8gJzAnIDogJzQnKSB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzQ2hhbmdlZCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0dXNDaGFuZ2VkKCkge1xyXG4gICAgICAgIHRoaXMuU3RhdHVzSWQgPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuc3RzLnZhbHVlO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5TdHNGb3JtLmNvbnRyb2xzLnN0cy52YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiLTFcIjogLy8gU2VsZWN0ZWVyXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCIwXCI6IC8vIE5pZXV3ZSBBYW52cmFnZW4gXHJcbiAgICAgICAgICAgICAgICB0aGlzLk5pZXV3ZUFhbnZyYWdlbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRTdGF0dXNMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDogLy8gU3RhdHVzXHJcbiAgICAgICAgICAgICAgICB0aGlzLk5pZXV3ZUFhbnZyYWdlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU3RhdHVzTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRTdGF0dXNMaXN0KCkge1xyXG4gICAgICAgIHRoaXMuaHR0cEJCUi5zZ3NTdGF0dXNMaXN0KHRoaXMuU3RhdHVzSWQsIFwiVFwiKS50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbigobHN0OiBJU2dzQkJSSXRlbVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSBsc3Q7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXAgPSBbLi4ubHN0XTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJGb3JtRmllbGRzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRXh0ZW5kZWRTZWFyY2goem9la1ZlbGRlbjogU2dzQkJSWm9la1ZlbGRlbikge1xyXG4gICAgICAgIHRoaXMuaHR0cEJCUi5nd1pvZWtMaXN0KHpvZWtWZWxkZW4pLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKChsc3Q6IElTZ3NCQlJJdGVtW10pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IGxzdDtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcCA9IFsuLi5sc3RdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckZvcm1GaWVsZHMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJGb3JtRmllbGRzKCkge1xyXG4gICAgICAgIC8vIENsZWFyIGFsbCBGb3JtIFZhbHVlcyBleGNlcHQgc3RzXHJcbiAgICAgICAgdGhpcy5TdHNGb3JtLnBhdGNoVmFsdWUoe1xyXG4gICAgICAgICAgICBiYnJOdW1tZXI6IFwiXCIsXHJcbiAgICAgICAgICAgIG5hYW06IFwiXCIsXHJcbiAgICAgICAgICAgIGNvZGU6IFwiXCIsXHJcbiAgICAgICAgICAgIGdlbTogXCJcIixcclxuICAgICAgICAgICAgYWFudnJhYWdEYXR1bTogXCJcIixcclxuICAgICAgICAgICAgc3RhdHVzRGF0dW06IFwiXCIsXHJcbiAgICAgICAgICAgIGluZGllbmluZ3N3aWp6ZTogXCJcIixcclxuICAgICAgICAgICAgZ2VmYWN0dXJlZXJkOiBcIlwiLFxyXG4gICAgICAgICAgICBiYnJTdHM6IFwiXCIsXHJcbiAgICAgICAgICAgIGhvZXY6IFwiXCIsXHJcbiAgICAgICAgICAgIHN0YXJ0RGF0dW06IFwiXCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXIoKSB7XHJcbiAgICAgICAgY29uc3QgYmJyTnVtbWVyID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLmJick51bW1lci52YWx1ZTtcclxuICAgICAgICBjb25zdCBuYWFtID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLm5hYW0udmFsdWU7XHJcbiAgICAgICAgY29uc3QgY29kZSA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5jb2RlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGdlbSA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5nZW0udmFsdWU7XHJcbiAgICAgICAgY29uc3QgYWFudnJhYWdEYXR1bSA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5hYW52cmFhZ0RhdHVtLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHN0YXR1c0RhdHVtID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLnN0YXR1c0RhdHVtLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGluZGllbmluZ3N3aWp6ZSA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5pbmRpZW5pbmdzd2lqemUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZ2VmYWN0dXJlZXJkID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLmdlZmFjdHVyZWVyZC52YWx1ZTtcclxuICAgICAgICBjb25zdCBiYnJTdHMgPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuYmJyU3RzLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGhvZXYgPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuaG9ldi52YWx1ZTtcclxuICAgICAgICBjb25zdCBzdGFydERhdHVtID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLnN0YXJ0RGF0dW0udmFsdWU7XHJcbiAgICAgICAgY29uc3QgZHAgPSBuZXcgRGF0ZVBpcGUoXCJlbi1VU1wiKTtcclxuXHJcbiAgICAgICAgLy8gZmlsdGVyIG91ciBkYXRhXHJcbiAgICAgICAgY29uc3QgdGVtcCA9IHRoaXMudGVtcC5maWx0ZXIoKHJvdzogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBhYW52cmFhZ0RhdHVtQXNTdHJpbmc6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAoYWFudnJhYWdEYXR1bSA+IFwiXCIpIHsgYWFudnJhYWdEYXR1bUFzU3RyaW5nID0gZHAudHJhbnNmb3JtKHJvdy5hYW52cmFhZ0RhdHVtLCBcImRkL01NL3l5eXlcIik7IH1cclxuICAgICAgICAgICAgdmFyIHN0YXR1c0RhdHVtQXNTdHJpbmc6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzRGF0dW0gPiBcIlwiKSB7IHN0YXR1c0RhdHVtQXNTdHJpbmcgPSBkcC50cmFuc2Zvcm0ocm93LnN0YXR1c0RhdHVtLCBcImRkL01NL3l5eXlcIik7IH1cclxuICAgICAgICAgICAgdmFyIHN0YXJ0RGF0dW1Bc1N0cmluZzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChzdGFydERhdHVtID4gXCJcIikgeyBzdGFydERhdHVtQXNTdHJpbmcgPSBkcC50cmFuc2Zvcm0ocm93LnN0YXJ0RGF0dW0sIFwiZGQvTU0veXl5eVwiKTsgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuICghYmJyTnVtbWVyIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChyb3cuYmJyTnVtbWVyKSAmJiByb3cuYmJyTnVtbWVyLnRvU3RyaW5nKCkuaW5kZXhPZihiYnJOdW1tZXIpICE9PSAtMSkpXHJcbiAgICAgICAgICAgICAgICAmJiAoIW5hYW0gfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHJvdy5uYWFtKSAmJiByb3cubmFhbS50b0xvd2VyQ2FzZSgpLmluZGV4T2YobmFhbSkgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghY29kZSB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQocm93LmJlcm9lcHNvcmdhbmlzYXRpZWNvZGUpICYmIHJvdy5iZXJvZXBzb3JnYW5pc2F0aWVjb2RlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihjb2RlKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFnZW0gfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHJvdy5wbGFhdHMpICYmIHJvdy5wbGFhdHMudG9Mb3dlckNhc2UoKS5pbmRleE9mKGdlbSkgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghYWFudnJhYWdEYXR1bSB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQoYWFudnJhYWdEYXR1bUFzU3RyaW5nKSAmJiBhYW52cmFhZ0RhdHVtQXNTdHJpbmcuaW5kZXhPZihhYW52cmFhZ0RhdHVtKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFzdGF0dXNEYXR1bSB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQoc3RhdHVzRGF0dW1Bc1N0cmluZykgJiYgc3RhdHVzRGF0dW1Bc1N0cmluZy5pbmRleE9mKHN0YXR1c0RhdHVtKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFpbmRpZW5pbmdzd2lqemUgfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHJvdy5pbmRpZW5pbmdzd2lqemUpICYmIHJvdy5pbmRpZW5pbmdzd2lqemUudG9Mb3dlckNhc2UoKS5pbmRleE9mKGluZGllbmluZ3N3aWp6ZSkgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghZ2VmYWN0dXJlZXJkIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChyb3cuZ2VmYWN0dXJlZXJkKSAmJiByb3cuZ2VmYWN0dXJlZXJkLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihnZWZhY3R1cmVlcmQpICE9PSAtMSkpXHJcbiAgICAgICAgICAgICAgICAmJiAoIWJiclN0cyB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQocm93LnN0YXR1cykgJiYgcm93LnN0YXR1cy50b0xvd2VyQ2FzZSgpLmluZGV4T2YoYmJyU3RzKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFob2V2IHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChyb3cuaG9ldmVlbGhlaWQpICYmIHJvdy5ob2V2ZWVsaGVpZC50b1N0cmluZygpLmluZGV4T2YoaG9ldikgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghc3RhcnREYXR1bSB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQoc3RhcnREYXR1bUFzU3RyaW5nKSAmJiBzdGFydERhdHVtQXNTdHJpbmcuaW5kZXhPZihzdGFydERhdHVtKSAhPT0gLTEpKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgdGhlIHJvd3NcclxuICAgICAgICB0aGlzLnJvd3MgPSB0ZW1wO1xyXG4gICAgICAgIC8vIFdoZW5ldmVyIHRoZSBmaWx0ZXIgY2hhbmdlcywgYWx3YXlzIGdvIGJhY2sgdG8gdGhlIGZpcnN0IHBhZ2VcclxuICAgICAgICB0aGlzLnRhYmxlLm9mZnNldCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgb25BY3RpdmF0ZShldmVudDogYW55KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IFwiZGJsY2xpY2tcIikge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmtUb0JCUihldmVudC5yb3dbXCJiYnJOdW1tZXJcIl0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRSb3dDbGFzcyhyb3c6IGFueSkge1xyXG4gICAgICAgIHJldHVybiBcImlidG5cIjtcclxuICAgIH1cclxuXHJcbiAgICBsaW5rVG9CQlIoYmJySWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9ib2RlbWJlaGVlcnJhcHBvcnQtZGV0YWlsXCJdLCB7IHF1ZXJ5UGFyYW1zOiB7IGJicklkOiBiYnJJZCwgYmJyOiBcIkZpbmFsXCIgfSB9KTsgIC8vID0+IEdXQmVoZWVyL0JCUkVkaXQuYXNweD9Cb2RlbWJlaGVlclJhcHBvcnRJRD17MH0gKG91ZGUgR1cpXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlQkJSKGJicklkOiBudW1iZXIpIHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG5cclxuICAgIFRvZ2dsZUV4dGVuZGVkU2VhcmNoKCkge1xyXG4gICAgICAgIHRoaXMuaXNFeHRlbmRlZFNlYXJjaCA9ICF0aGlzLmlzRXh0ZW5kZWRTZWFyY2g7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXJvdXRlci1sb2FkZXIvc3JjIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1iYnItZ3JpZC9ndy1iYnItZ3JpZC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gW2Zvcm1Hcm91cF09XFxcIlN0c0Zvcm1cXFwiIGNsYXNzPVxcXCJjb250YWluZXItZmx1aWQgcGFkZGluZ1RvcDEwcHhcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0lmPVxcXCJ1c2VTZWFyY2hcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTNcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiAoY2xpY2spPVxcXCJUb2dnbGVFeHRlbmRlZFNlYXJjaCgpXFxcIj57eyBpc0V4dGVuZGVkU2VhcmNoID8gJ0Vua2Vsdm91ZGlnIHpvZWtlbicgOiAnR2VhdmFuY2VlcmQgem9la2VuJyB9fTwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJ1c2VTZWFyY2ggJiYgIWlzRXh0ZW5kZWRTZWFyY2hcXFwiIGNsYXNzPVxcXCJjb2wtc20tOVxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJwYWRkaW5nUmlnaHQxMHB4XFxcIj5GaWx0ZXIgc3RhdHVzPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8c2VsZWN0IGZvcm1Db250cm9sTmFtZT1cXFwic3RzXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyAoY2hhbmdlKT1cXFwic3RhdHVzQ2hhbmdlZCgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiLTFcXFwiPlNlbGVjdGVlcjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IHN0cyBvZiBTdGF0dXNEcm9wZG93bkxpc3RcXFwiIFt2YWx1ZV09XFxcInN0cy5iYnJTdGF0dXNJRFxcXCIgW2lubmVySFRNTF09XFxcInN0cy5zdGF0dXNcXFwiPjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0lmPVxcXCJ1c2VTZWFyY2ggJiYgaXNFeHRlbmRlZFNlYXJjaFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTJcXFwiPjxndy1iYnItem9la3VpdGdlYnJlaWQgKHNlYXJjaGluZyk9XFxcIm9uRXh0ZW5kZWRTZWFyY2goJGV2ZW50KVxcXCI+PC9ndy1iYnItem9la3VpdGdlYnJlaWQ+PC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJOZ3hUYWJsZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxwICpuZ0lmPVxcXCJmb3JOaWV1d2VBYW52cmFnZW4gPT0gZmFsc2VcXFwiIGNsYXNzPVxcXCJwdWxsLWxlZnQgTmd4VGl0bGVcXFwiPnt7dGl0bGV9fTwvcD5cXHJcXG4gICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUgI3RhYmxlXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJib290c3RyYXBcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhY3RpdmF0ZSk9XFxcIm9uQWN0aXZhdGUoJGV2ZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jvd3NdPVxcXCJyb3dzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29sdW1uTW9kZV09XFxcIidmbGV4J1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2hlYWRlckhlaWdodF09XFxcIjUwXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9vdGVySGVpZ2h0XT1cXFwiNDBcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsaW1pdF09XFxcImFwcExhYmVscy50YWJsZVZpZXdSb3dzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm93Q2xhc3NdPVxcXCJnZXRSb3dDbGFzc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Nzc0NsYXNzZXNdPVxcXCJhcHBMYWJlbHMuaWNvbnNDc3NcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttZXNzYWdlc109XFxcInt0b3RhbE1lc3NhZ2U6IGFwcExhYmVscy5Ub3RhbC50b0xvd2VyQ2FzZSgpLCBlbXB0eU1lc3NhZ2U6IGFwcExhYmVscy5Ob0RhdGFUb0Rpc3BsYXl9XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc29ydHNdPVxcXCJbe3Byb3A6J2Jick51bW1lcicsIGRpcjonZGVzYycgfV1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3dIZWlnaHRdPVxcXCInYXV0bydcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIG5hbWU9XFxcIm5pZXRHb2VkR2VrZXVyZFxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXJvdz1cXFwicm93XFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVxcXCJjb2xvcjogcmVkXFxcIj48Yj57e3Jvd1snbmlldEdvZWRHZWtldXJkJ119fTwvYj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMVxcXCIgcHJvcD1cXFwiYmJyTnVtbWVyXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyTGFiZWxcXFwiPk51bW1lcjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJiYnJOdW1tZXJcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXJvdz1cXFwicm93XFxcIiBsZXQtdmFsdWU9XFxcInZhbHVlXFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJwZGZMaW5rXFxcIiBbcm91dGVyTGlua109XFxcIlsnL2JvZGVtYmVoZWVycmFwcG9ydC1kZXRhaWwnXVxcXCIgW3F1ZXJ5UGFyYW1zXT1cXFwie2JicjonRmluYWwnLGJicklkOnJvd1snYmJyTnVtbWVyJ119XFxcIj48bGFiZWwgY2xhc3M9XFxcInRleHRcXFwiPnt7cm93WydiYnJOdW1tZXInXX19PC9sYWJlbD48L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiM1xcXCIgcHJvcD1cXFwibmFhbVxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckxhYmVsXFxcIj5LbGFudDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJuYWFtXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC12YWx1ZT1cXFwidmFsdWVcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3t2YWx1ZX19PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIHByb3A9XFxcImJlcm9lcHNvcmdhbmlzYXRpZWNvZGVcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJMYWJlbFxcXCI+Q29kZTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiY29kZVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtcm93PVxcXCJyb3dcXFwiIGxldC12YWx1ZT1cXFwidmFsdWVcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3t2YWx1ZX19PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjJcXFwiIHByb3A9XFxcInBsYWF0c1xcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckxhYmVsXFxcIj5HZW1lZW50ZTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiZ2VtXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1yb3c9XFxcInJvd1xcXCIgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3ZhbHVlfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMVxcXCIgbmFtZT1cXFwiYWFudnJhYWdEYXR1bVxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiIE5neEZpbHRlckxhYmVsXFxcIj5EYXR1bSBpbjwvc3Bhbj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJhYW52cmFhZ0RhdHVtXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC12YWx1ZT1cXFwidmFsdWVcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3t2YWx1ZSB8IGRhdGU6XFxcImRkL01NL3l5eXlcXFwifX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBuYW1lPVxcXCJzdGF0dXNEYXR1bVxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiIE5neEZpbHRlckxhYmVsXFxcIj5EYXR1bSB1aXQ8L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwic3RhdHVzRGF0dW1cXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3ZhbHVlIHwgZGF0ZTpcXFwiZGQvTU0veXl5eVxcXCJ9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIHByb3A9XFxcImluZGllbmluZ3N3aWp6ZVxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiIE5neEZpbHRlckxhYmVsXFxcIj5BYW52dWxwbGFuPC9zcGFuPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImluZGllbmluZ3N3aWp6ZVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBwcm9wPVxcXCJob2V2ZWVsaGVpZFxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckxhYmVsXFxcIj5Ib2V2ZWVsaGVpZDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJob2V2XFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1yb3c9XFxcInJvd1xcXCIgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3Jvd1snaG9ldmVlbGhlaWQnXX19PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIHByb3A9XFxcImdlZmFjdHVyZWVyZFxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiIE5neEZpbHRlckxhYmVsXFxcIj5HZWZhY3QuPC9zcGFuPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImdlZmFjdHVyZWVyZFxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIzXFxcIiBwcm9wPVxcXCJzdGF0dXNcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIiBOZ3hGaWx0ZXJMYWJlbFxcXCI+QkJSIFN0YXR1czwvc3Bhbj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJiYnJTdHNcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMVxcXCIgbmFtZT1cXFwic3RhcnREYXR1bUdyb25kd2Vya2VuXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCIgTmd4RmlsdGVyTGFiZWxcXFwiPlN0YXJ0IERhdHVtPC9zcGFuPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcInN0YXJ0RGF0dW1cXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3ZhbHVlIHwgZGF0ZTpcXFwiZGQvTU0veXl5eVxcXCJ9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIG5hbWU9XFxcIkRldGFpbFxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXJvdz1cXFwicm93XFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9pbWFnZXMvaWNvX2VkaXRyZWNvcmQuZ2lmXCIpICsgXCJcXFwiIGNsYXNzPVxcXCJpYnRuXFxcIiAoY2xpY2spPVxcXCJsaW5rVG9CQlIocm93WydiYnJOdW1tZXInXSlcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gKm5nSWY9XFxcImNhbkRlbGV0ZVxcXCIgW2ZsZXhHcm93XT1cXFwiMVxcXCIgbmFtZT1cXFwiRGV0YWlsXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtcm93PVxcXCJyb3dcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uLy4uLy4uLy4uL2ltYWdlcy9pY29fZGVsZXRlLnBuZ1wiKSArIFwiXFxcIiBjbGFzcz1cXFwiaWJ0blxcXCIgKGNsaWNrKT1cXFwiZGVsZXRlQkJSKHJvd1snYmJyTnVtbWVyJ10pXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGU+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9mb3JtPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1iYnItZ3JpZC9ndy1iYnItZ3JpZC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNTc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ndy1iYnItZ3JpZC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctYmJyLWdyaWQvZ3ctYmJyLWdyaWQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNTc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctYmJyLWdyaWQvZ3ctYmJyLWdyaWQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNTgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVG9hc3RyU2VydmljZSB9IGZyb20gXCJuZ3gtdG9hc3RyXCI7XHJcblxyXG5pbXBvcnQgeyBhcHBMYWJlbHMgfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9hcHBMYWJlbHNcIjtcclxuaW1wb3J0IHsgR2VuZXJhbFNjcmlwdHMgfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9nZW5lcmFsLnNjcmlwdHNcIjtcclxuXHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7IEh0dHBCQlJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2h0dHAtYmJyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSHR0cERvc3NpZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2h0dHAtZG9zc2llci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEh0dHBLbGFudFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaHR0cC1rbGFudC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEh0dHBUVlNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaHR0cC10di5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgQnNMb2NhbGVTZXJ2aWNlIH0gZnJvbSBcIm5neC1ib290c3RyYXAvZGF0ZXBpY2tlclwiO1xyXG5pbXBvcnQgeyBTZ3NCQlJab2VrVmVsZGVuIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvc2dzQ2xhc3Nlcy5zY3JpcHRzXCI7XHJcbmltcG9ydCB7IElTZ3NLbGFudENvbWJvTGlzdEl0ZW0sIElTZ3NEb3NzaWVyQ29tYm9MaXN0SXRlbSwgSVNnc0Jlc3RBYXJkTGlzdEl0ZW0gfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9zZ3NJbnRlcmZhY2VzLnNjcmlwdHNcIjtcclxuaW1wb3J0IHsgSVRWU3RhdHVzRGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL2ludGVyZmFjZXMuc2NyaXB0c1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJndy1iYnItem9la3VpdGdlYnJlaWRcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2d3LWJici16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9ndy1iYnItem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzcycpXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIGd3QkJSWm9la1VpdGdlYnJlaWRDb21wb25lbnQgZXh0ZW5kcyBHZW5lcmFsU2NyaXB0cyBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBhcHBMYWJlbHMgPSBhcHBMYWJlbHM7XHJcbiAgICB6a0Zvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgICBLbGFudExpc3RJdGVtczogSVNnc0tsYW50Q29tYm9MaXN0SXRlbVtdID0gbnVsbDtcclxuICAgIERvc3NpZXJCZWhlZXJkZXJMaXN0SXRlbXM6IElTZ3NEb3NzaWVyQ29tYm9MaXN0SXRlbVtdID0gbnVsbDtcclxuICAgIEJlc3RlbW1pbmdzYWFyZExpc3RJdGVtczogSVNnc0Jlc3RBYXJkTGlzdEl0ZW1bXSA9IG51bGw7XHJcbiAgICBTdGF0dXNMaXN0SXRlbXM6IElUVlN0YXR1c0RlZmluaXRpb25bXSA9IG51bGw7XHJcblxyXG4gICAgem9la1ZlbGRlbjogU2dzQkJSWm9la1ZlbGRlbiA9IG51bGw7XHJcbiAgICBAT3V0cHV0KCkgc2VhcmNoaW5nOiBFdmVudEVtaXR0ZXI8U2dzQkJSWm9la1ZlbGRlbj4gPSBuZXcgRXZlbnRFbWl0dGVyPFNnc0JCUlpvZWtWZWxkZW4+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfdG9hc3RyOiBUb2FzdHJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfbG9jYWxlU2VydmljZTogQnNMb2NhbGVTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgaHR0cEJicjogSHR0cEJCUlNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBodHRwRG9zc2llcjogSHR0cERvc3NpZXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgaHR0cEtsYW50OiBIdHRwS2xhbnRTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgaHR0cFRWOiBIdHRwVFZTZXJ2aWNlLFxyXG4gICAgICAgIEBJbmplY3QoXCJCQVNFX1VSTFwiKSBwcml2YXRlIHJlYWRvbmx5IF9iYXNlVXJsOiBzdHJpbmcsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcclxuICAgICAgICBzdXBlcihfdG9hc3RyKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBOZWVkZWQgY29uZmlndXJhdGlvbiBmb3IgdGhlIGJzRGF0ZXBpY2tlciB0byBhY2NlcHQgZGQvTU0veXl5eSBmb3JtYXR0aW5nXHJcbiAgICAgICAgdGhpcy5fbG9jYWxlU2VydmljZS51c2UoXCJib290c3RyYXAtbG9jYWxlLW5sYmVcIik7XHJcblxyXG4gICAgICAgIHRoaXMuemtGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICAgICAgIENvZGU6IFtcIlwiXSxcclxuICAgICAgICAgICAgVHZJZDogW1wiXCJdLFxyXG4gICAgICAgICAgICBLbGFudElkOiBbXCItMVwiXSxcclxuICAgICAgICAgICAgRG9zc2llckJlaGVlcmRlcklkOiBbXCItMVwiXSxcclxuICAgICAgICAgICAgU3RhdHVzSWQ6IFtcIi0xXCJdLFxyXG4gICAgICAgICAgICBCZXN0ZW1taW5nc2FhcmRJZDogW1wiLTFcIl0sXHJcbiAgICAgICAgICAgIEdlZmFjdHVyZWVyZDogW1wiLTFcIl0sXHJcbiAgICAgICAgICAgIFN0cmFhdDogW1wiXCJdLFxyXG4gICAgICAgICAgICBQb3N0Y29kZTogW1wiXCJdLFxyXG4gICAgICAgICAgICBHZW1lZW50ZTogW1wiXCJdLFxyXG4gICAgICAgICAgICBMYW1iZXJ0WDogW1wiXCJdLFxyXG4gICAgICAgICAgICBMYW1iZXJ0WTogW1wiXCJdLFxyXG4gICAgICAgICAgICBMYW1iZXJ0UmFuZ2U6IFtcIi0xXCJdLFxyXG4gICAgICAgICAgICBWZXJ0cmVrU3RyYWF0OiBbXCJcIl0sXHJcbiAgICAgICAgICAgIFZlcnRyZWtHZW1lZW50ZTogW1wiXCJdLFxyXG4gICAgICAgICAgICBkYXRWYW46IFtcIlwiXSxcclxuICAgICAgICAgICAgZGF0VG90OiBbXCJcIl1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkRHJvcGRvd25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZERyb3Bkb3ducygpIHtcclxuICAgICAgICB0aGlzLmh0dHBLbGFudC5zZ3NDb21ib0xpc3RJdGVtcygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGxzdDogSVNnc0tsYW50Q29tYm9MaXN0SXRlbVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobHN0ICE9IG51bGwgJiYgbHN0ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuS2xhbnRMaXN0SXRlbXMgPSBbLi4ubHN0XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaHR0cERvc3NpZXIuc2dzQ29tYm9MaXN0SXRlbXMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChsc3Q6IElTZ3NEb3NzaWVyQ29tYm9MaXN0SXRlbVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobHN0ICE9IG51bGwgJiYgbHN0ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuRG9zc2llckJlaGVlcmRlckxpc3RJdGVtcyA9IFsuLi5sc3RdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5odHRwQmJyLnNnc0Jlc3RlbW1pbmdzYWFyZExpc3RJdGVtcygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGxzdDogSVNnc0Jlc3RBYXJkTGlzdEl0ZW1bXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxzdCAhPSBudWxsICYmIGxzdCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJlc3RlbW1pbmdzYWFyZExpc3RJdGVtcyA9IFsuLi5sc3RdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5odHRwVFYuU3RhdHVzRGVmaW5pdGlvbkxpc3QoZmFsc2UpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGxzdDogSVRWU3RhdHVzRGVmaW5pdGlvbltdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobHN0ICE9IG51bGwgJiYgbHN0ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU3RhdHVzTGlzdEl0ZW1zID0gWy4uLmxzdF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJhaXNlU2VhcmNoKCkge1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbiA9IG5ldyBTZ3NCQlJab2VrVmVsZGVuKCk7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmNvZGUgPSB0aGlzLnprRm9ybS5jb250cm9scy5Db2RlLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi50dklkID0gdGhpcy56a0Zvcm0uY29udHJvbHMuVHZJZC52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4ua2xhbnRJZCA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLktsYW50SWQudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmRvc3NpZXJCZWhlZXJkZXJJZCA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLkRvc3NpZXJCZWhlZXJkZXJJZC52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4uc3RhdHVzSWQgPSB0aGlzLnprRm9ybS5jb250cm9scy5TdGF0dXNJZC52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4uYmVzdGVtbWluZ3NhYXJkSWQgPSB0aGlzLnprRm9ybS5jb250cm9scy5CZXN0ZW1taW5nc2FhcmRJZC52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4uZ2VmYWN0dXJlZXJkID0gdGhpcy56a0Zvcm0uY29udHJvbHMuR2VmYWN0dXJlZXJkLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5zdHJhYXQgPSB0aGlzLnprRm9ybS5jb250cm9scy5TdHJhYXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLnBvc3Rjb2RlID0gdGhpcy56a0Zvcm0uY29udHJvbHMuUG9zdGNvZGUudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmdlbWVlbnRlID0gdGhpcy56a0Zvcm0uY29udHJvbHMuR2VtZWVudGUudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmxhbWJlcnRYID0gdGhpcy56a0Zvcm0uY29udHJvbHMuTGFtYmVydFgudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmxhbWJlcnRZID0gdGhpcy56a0Zvcm0uY29udHJvbHMuTGFtYmVydFkudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmxhbWJlcnRSYW5nZSA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLkxhbWJlcnRSYW5nZS52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4udmVydHJla1N0cmFhdCA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLlZlcnRyZWtTdHJhYXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLnZlcnRyZWtHZW1lZW50ZSA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLlZlcnRyZWtHZW1lZW50ZS52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4uZGF0VmFuID0gdGhpcy56a0Zvcm0uY29udHJvbHMuZGF0VmFuLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5kYXRUb3QgPSB0aGlzLnprRm9ybS5jb250cm9scy5kYXRUb3QudmFsdWU7XHJcblxyXG4gICAgICAgIHRoaXMuc2VhcmNoaW5nLmVtaXQodGhpcy56b2VrVmVsZGVuKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItcm91dGVyLWxvYWRlci9zcmMhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWJici16b2VrdWl0Z2VicmVpZC9ndy1iYnItem9la3VpdGdlYnJlaWQuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxmb3JtIFtmb3JtR3JvdXBdPVxcXCJ6a0Zvcm1cXFwiIGNsYXNzPVxcXCJjb250YWluZXItZmx1aWQgcGFkZGluZ1RvcDMwcHhcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwidHh0Q29kZVxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPkNvZGU8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInR4dENvZGVcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiQ29kZVxcXCIgQWxsb3dPbmx5TnVtYmVycyBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwidHZ0VHZJZFxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPlRWIE51bW1lcjo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInR4dFR2SWRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiVHZJZFxcXCIgQWxsb3dPbmx5TnVtYmVycyBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwiZGRsS2xhbnRcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5LbGFudDwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24gY29sLXNtLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJkZGxLbGFudFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJLbGFudElkXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwid2lkdGgxMDBwZXJjZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIi0xXFxcIj5TZWxlY3RlZXI8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQga2xhbnQgb2YgS2xhbnRMaXN0SXRlbXNcXFwiIFt2YWx1ZV09XFxcImtsYW50LmtsYW50SURcXFwiIFtpbm5lckhUTUxdPVxcXCJrbGFudC5uYWFtXFxcIj48L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcImRkbERvc3NpZXJCZWhlZXJkZXJcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5Eb3NzaWVyQmVoZWVyZGVyPC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93biBjb2wtc20tNFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XFxcImRkbERvc3NpZXJCZWhlZXJkZXJcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiRG9zc2llckJlaGVlcmRlcklkXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwid2lkdGgxMDBwZXJjZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIi0xXFxcIj5TZWxlY3RlZXI8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgZG9zc2JlaCBvZiBEb3NzaWVyQmVoZWVyZGVyTGlzdEl0ZW1zXFxcIiBbdmFsdWVdPVxcXCJkb3NzYmVoLmRvc3NpZXJCZWhlZXJkZXJJRFxcXCIgW2lubmVySFRNTF09XFxcImRvc3NiZWgubmFhbVxcXCI+PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJkZGxTdGF0dXNcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5TdGF0dXM8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duIGNvbC1zbS00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cXFwiZGRsU3RhdHVzXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIlN0YXR1c0lkXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwid2lkdGgxMDBwZXJjZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIi0xXFxcIj5TZWxlY3RlZXI8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgc3RzIG9mIFN0YXR1c0xpc3RJdGVtc1xcXCIgW3ZhbHVlXT1cXFwic3RzLnR2U3RhdHVzSURcXFwiIFtpbm5lckhUTUxdPVxcXCJzdHMuc3RhdHVzXFxcIj48L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcImRkbEJlc3RlbW1pbmdzYWFyZFxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPkJlc3RlbW1pbmdzYWFyZDwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24gY29sLXNtLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJkZGxCZXN0ZW1taW5nc2FhcmRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiQmVzdGVtbWluZ3NhYXJkSWRcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJ3aWR0aDEwMHBlcmNlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiLTFcXFwiPlNlbGVjdGVlcjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCBhYXJkIG9mIEJlc3RlbW1pbmdzYWFyZExpc3RJdGVtc1xcXCIgW3ZhbHVlXT1cXFwiYWFyZC5iZXN0ZW1taW5nc0FhcmRJZFxcXCIgW2lubmVySFRNTF09XFxcImFhcmQuYmVzdGVtbWluZ3NBYXJkXFxcIj48L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcInR4dFN0cmFhdFxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPkJlc3RlbW1pbmcgU3RyYWF0PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0eHRTdHJhYXRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiU3RyYWF0XFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwiZGRsR2VmYWN0dXJlZXJkXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+R2VmYWN0dXJlZXJkPC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93biBjb2wtc20tNFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XFxcImRkbEdlZmFjdHVyZWVyZFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJHZWZhY3R1cmVlcmRcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJ3aWR0aDEwMHBlcmNlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiLTFcXFwiPlNlbGVjdGVlcjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiMVxcXCI+SmE8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIjBcXFwiPk5lZTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwidHh0UG9zdGNvZGVcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5CZXN0ZW1taW5nIFBvc3Rjb2RlOjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwidHh0UG9zdGNvZGVcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiUG9zdGNvZGVcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJ0eHRHZW1lZW50ZVxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPkJlc3RlbW1pbmcgR2VtZWVudGU6PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0eHRHZW1lZW50ZVxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJHZW1lZW50ZVxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcInR4dExhbWJlcnRYXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+QmVzdGVtbWluZyBMYW1iZXJ0IFggKGluIG0pPC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0eHRMYW1iZXJ0WFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJMYW1iZXJ0WFxcXCIgQWxsb3dPbmx5TnVtYmVycyBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwiZGRsTGFtYmVydFJhbmdlXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+TGFtYmVydCBSYW5nZTo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duIGNvbC1zbS00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cXFwiZGRsTGFtYmVydFJhbmdlXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkxhbWJlcnRSYW5nZVxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcIndpZHRoMTAwcGVyY2VudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCItMVxcXCI+U2VsZWN0ZWVyPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCIxXFxcIj4xIGttPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCIzXFxcIj4zIGttPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCI1XFxcIj41IGttPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCIxMFxcXCI+MTAga208L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcInR4dExhbWJlcnRYXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+QmVzdGVtbWluZyBMYW1iZXJ0IFkgKGluIG0pPC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0eHRMYW1iZXJ0WVxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJMYW1iZXJ0WVxcXCIgQWxsb3dPbmx5TnVtYmVycyBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+Jm5ic3A7PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcInR4dFZTdHJhYXRcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5UViBTdHJhYXQ6PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0eHRWU3RyYWF0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIlZlcnRyZWtTdHJhYXRcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJ0eHRWR2VtZWVudGVcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5UViBHZW1lZW50ZTo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInR4dFZHZW1lZW50ZVxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJWZXJ0cmVrR2VtZWVudGVcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJkdGVWYW5cXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5EYXR1bSBWYW46PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJkdGVWYW5cXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiZGF0VmFuXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIG5nLXRyaW0taWdub3JlXFxcIiBic0RhdGVwaWNrZXIgcGxhY2VtZW50PVxcXCJ0b3AgbGVmdFxcXCIgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiIERvdHRlZEJvcmRlckJlbG93IFtic0NvbmZpZ109XFxcInsgc2hvd1dlZWtOdW1iZXJzOiBmYWxzZSB9XFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwiZHRlVG90XFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+RGF0dW0gVG90OjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwiZHRlVG90XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImRhdFRvdFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCBuZy10cmltLWlnbm9yZVxcXCIgYnNEYXRlcGlja2VyIHBsYWNlbWVudD1cXFwidG9wIGxlZnRcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBbYnNDb25maWddPVxcXCJ7IHNob3dXZWVrTnVtYmVyczogZmFsc2UgfVxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTQgY29sLXNtLW9mZnNldC04XFxcIj48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwicmFpc2VTZWFyY2goKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCI+e3thcHBMYWJlbHMuU2VuZH19PC9idXR0b24+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9mb3JtPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1iYnItem9la3VpdGdlYnJlaWQvZ3ctYmJyLXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA1ODJcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2d3LWJici16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctYmJyLXpvZWt1aXRnZWJyZWlkL2d3LWJici16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA1ODNcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1iYnItem9la3VpdGdlYnJlaWQvZ3ctYmJyLXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDU4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEdlbmVyYWxTY3JpcHRzIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvZ2VuZXJhbC5zY3JpcHRzXCI7XHJcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UgfSBmcm9tIFwibmd4LXRvYXN0clwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEh0dHBUVlNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaHR0cC10di5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEh0dHBHVE1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2h0dHAtZ3RtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSVNnc1RWQnlTdGF0dXMsIElTZ3NHVE1TdGF0dXNMaXN0SXRlbSwgSVNnc0dUTVN0YXR1cyB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL3Nnc0ludGVyZmFjZXMuc2NyaXB0c1wiO1xyXG5pbXBvcnQgeyBTZ3NUVlpvZWtWZWxkZW4sIFNnc0dUTVpvZWtWZWxkZW4gfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9zZ3NDbGFzc2VzLnNjcmlwdHNcIjtcclxuaW1wb3J0IHsgYXBwTGFiZWxzIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvYXBwTGFiZWxzXCI7XHJcbmltcG9ydCB7IERhdGF0YWJsZUNvbXBvbmVudCB9IGZyb20gXCJAc3dpbWxhbmUvbmd4LWRhdGF0YWJsZVwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgSVRWU3RhdHVzRGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL2ludGVyZmFjZXMuc2NyaXB0c1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJndy1ndG0tZ3JpZFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZ3ctZ3RtLWdyaWQuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vZ3ctZ3RtLWdyaWQuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIGd3R1RNR3JpZENvbXBvbmVudCBleHRlbmRzIEdlbmVyYWxTY3JpcHRzIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGFwcExhYmVscyA9IGFwcExhYmVscztcclxuXHJcbiAgICBTdGF0dXNEcm9wZG93bkxpc3Q6IElTZ3NHVE1TdGF0dXNMaXN0SXRlbVtdID0gbnVsbDtcclxuICAgIFN0YXR1c0xpc3Q6IElTZ3NHVE1TdGF0dXNbXSA9IG51bGw7XHJcbiAgICByb3dzOiBJU2dzR1RNU3RhdHVzW10gPSBudWxsO1xyXG4gICAgdGVtcDogYW55W10gPSBbXTtcclxuICAgIEBWaWV3Q2hpbGQoRGF0YXRhYmxlQ29tcG9uZW50KSB0YWJsZTogRGF0YXRhYmxlQ29tcG9uZW50O1xyXG5cclxuICAgIEBJbnB1dCgpIHRpdGxlID0gXCJcIjtcclxuICAgIFN0YXR1c0lkOiBudW1iZXIgPSAtMTtcclxuICAgIGlzRXh0ZW5kZWRTZWFyY2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBmb3JOaWV1d2VBYW52cmFnZW4gPSB0cnVlO1xyXG4gICAgQElucHV0KCdOaWV1d2VBYW52cmFnZW4nKVxyXG4gICAgZ2V0IE5pZXV3ZUFhbnZyYWdlbigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JOaWV1d2VBYW52cmFnZW47XHJcbiAgICB9XHJcbiAgICBzZXQgTmlldXdlQWFudnJhZ2VuKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5mb3JOaWV1d2VBYW52cmFnZW4gPSBcIlwiICsgdmFsdWUgIT09IFwiZmFsc2VcIjtcclxuICAgIH1cclxuXHJcbiAgICB1c2VTZWFyY2ggPSB0cnVlO1xyXG4gICAgQElucHV0KCdFeHRlbmRlZFNlYXJjaCcpXHJcbiAgICBnZXQgRXh0ZW5kZWRTZWFyY2goKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlU2VhcmNoO1xyXG4gICAgfVxyXG4gICAgc2V0IEV4dGVuZGVkU2VhcmNoKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy51c2VTZWFyY2ggPSBcIlwiICsgdmFsdWUgIT09IFwiZmFsc2VcIjtcclxuICAgIH1cclxuXHJcbiAgICBjYW5EZWxldGUgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgnQWxsb3dEZWxldGUnKVxyXG4gICAgZ2V0IEFsbG93RGVsZXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbkRlbGV0ZTtcclxuICAgIH1cclxuICAgIHNldCBBbGxvd0RlbGV0ZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuY2FuRGVsZXRlID0gXCJcIiArIHZhbHVlICE9PSBcImZhbHNlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgU3RzRm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX3RvYXN0cjogVG9hc3RyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGZiOiBGb3JtQnVpbGRlcixcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGh0dHBHVE06IEh0dHBHVE1TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgaHR0cFRWOiBIdHRwVFZTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBhdXRoOiBBdXRoZW50aWNhdGlvblNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcihfdG9hc3RyKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5TdHNGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICAgICAgIHN0czogWy0xXSxcclxuICAgICAgICAgICAgZ3RtSWQ6IFtcIlwiXSxcclxuICAgICAgICAgICAga2xhbnQ6IFtcIlwiXSxcclxuICAgICAgICAgICAgcmVmOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIGhlcms6IFtcIlwiXSxcclxuICAgICAgICAgICAgdG9wQ2dyOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIGluZGllbmluZ3NEYXR1bTogW1wiXCJdXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZFN0YXR1c0Ryb3Bkb3duTGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRTdGF0dXNEcm9wZG93bkxpc3QoKSB7XHJcbiAgICAgICAgdGhpcy5TdGF0dXNEcm9wZG93bkxpc3QgPSBbXHJcbiAgICAgICAgICAgIHsgXCJpZFwiOiAwLCBcIm9tc2NocmlqdmluZ1wiOiBcIkFsbGVzXCIgfSxcclxuICAgICAgICAgICAgeyBcImlkXCI6IDEsIFwib21zY2hyaWp2aW5nXCI6IFwiQWZnZXJvbmRcIiB9LFxyXG4gICAgICAgICAgICB7IFwiaWRcIjogMiwgXCJvbXNjaHJpanZpbmdcIjogXCJOb2cgbmlldCBhZmdlcm9uZFwiIH1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICB0aGlzLlN0c0Zvcm0ucGF0Y2hWYWx1ZSh7IHN0czogKHRoaXMuTmlldXdlQWFudnJhZ2VuID8gJzInIDogJzInKSB9KTtcclxuICAgICAgICB0aGlzLnN0YXR1c0NoYW5nZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0dXNDaGFuZ2VkKCkge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5TdHNGb3JtLmNvbnRyb2xzLnN0cy52YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiLTFcIjogLy8gU2VsZWN0ZWVyXHJcbiAgICAgICAgICAgICAgICB0aGlzLlN0YXR1c0lkID0gLTE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vY2FzZSBcIjBcIjogLy8gTmlldXdlIEFhbnZyYWdlbiBcclxuICAgICAgICAgICAgLy8gICAgdGhpcy5TdGF0dXNJZCA9IDE7XHJcbiAgICAgICAgICAgIC8vICAgIHRoaXMuTmlldXdlQWFudnJhZ2VuID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gICAgdGhpcy5sb2FkU3RhdHVzTGlzdCgpO1xyXG4gICAgICAgICAgICAvLyAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDogLy8gU3RhdHVzXHJcbiAgICAgICAgICAgICAgICB0aGlzLlN0YXR1c0lkID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLnN0cy52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuTmlldXdlQWFudnJhZ2VuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRTdGF0dXNMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFN0YXR1c0xpc3QoKSB7XHJcbiAgICAgICAgdGhpcy5odHRwR1RNLmd3U3RhdHVzTGlzdCh0aGlzLlN0YXR1c0lkLCAtMSkudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKGxzdDogSVNnc0dUTVN0YXR1c1tdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSBsc3Q7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXAgPSBbLi4ubHN0XTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJGb3JtRmllbGRzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRXh0ZW5kZWRTZWFyY2goem9la1ZlbGRlbjogU2dzR1RNWm9la1ZlbGRlbikge1xyXG4gICAgICAgIHRoaXMuaHR0cEdUTS5nd1pvZWtMaXN0KHpvZWtWZWxkZW4pLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKChsc3Q6IElTZ3NHVE1TdGF0dXNbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gbHN0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wID0gWy4uLmxzdF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyRm9ybUZpZWxkcygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckZvcm1GaWVsZHMoKSB7XHJcbiAgICAgICAgLy8gQ2xlYXIgYWxsIEZvcm0gVmFsdWVzIGV4Y2VwdCBzdHNcclxuICAgICAgICB0aGlzLlN0c0Zvcm0ucGF0Y2hWYWx1ZSh7XHJcbiAgICAgICAgICAgIHRlY2huaXNjaFZlcnNsYWdJRDogXCJcIixcclxuICAgICAgICAgICAgbmFhbTogXCJcIixcclxuICAgICAgICAgICAgZ2VtZWVudGVPbmRlcnpvZWtzbG9jYXRpZTogXCJcIixcclxuICAgICAgICAgICAgaW5kaWVuaW5nc0RhdHVtOiBcIlwiLFxyXG4gICAgICAgICAgICBzdGF0dXNEYXR1bTogXCJcIixcclxuICAgICAgICAgICAgaW5kaWVuaW5nc3dpanplOiBcIlwiLFxyXG4gICAgICAgICAgICBnZWZhY3R1cmVlcmQ6IFwiXCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXIoKSB7XHJcbiAgICAgICAgY29uc3QgZ3RtSWQgPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuZ3RtSWQudmFsdWU7XHJcbiAgICAgICAgY29uc3Qga2xhbnQgPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMua2xhbnQudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCByZWYgPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMucmVmLnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgaGVyayA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5oZXJrLnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgdG9wQ2dyID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLnRvcENnci52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IGluZGllbmluZ3NEYXR1bSA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5pbmRpZW5pbmdzRGF0dW0udmFsdWU7XHJcbiAgICAgICAgY29uc3QgZHAgPSBuZXcgRGF0ZVBpcGUoXCJlbi1VU1wiKTtcclxuXHJcbiAgICAgICAgLy8gZmlsdGVyIG91ciBkYXRhXHJcbiAgICAgICAgY29uc3QgdGVtcCA9IHRoaXMudGVtcC5maWx0ZXIoKHJvdzogSVNnc0dUTVN0YXR1cykgPT4ge1xyXG4gICAgICAgICAgICB2YXIgaW5kaWVuaW5nc0RhdHVtQXNTdHJpbmc6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAoaW5kaWVuaW5nc0RhdHVtID4gXCJcIikgeyBpbmRpZW5pbmdzRGF0dW1Bc1N0cmluZyA9IGRwLnRyYW5zZm9ybShyb3cuaW5kaWVuaW5nc0RhdHVtLCBcImRkL01NL3l5eXlcIik7IH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoIWd0bUlkIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChyb3cuZ3JvbmR0cmFuc3BvcnRtZWxkaW5nSWQudG9TdHJpbmcoKSkgJiYgcm93Lmdyb25kdHJhbnNwb3J0bWVsZGluZ0lkLnRvU3RyaW5nKCkuaW5kZXhPZihndG1JZCkgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICgha2xhbnQgfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHJvdy5rbGFudC50b0xvd2VyQ2FzZSgpKSAmJiByb3cua2xhbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKGtsYW50KSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFyZWYgfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHJvdy5rbGFudEtlbm1lcmsudG9Mb3dlckNhc2UoKSkgJiYgcm93LmtsYW50S2VubWVyay50b0xvd2VyQ2FzZSgpLmluZGV4T2YocmVmKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFoZXJrIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChyb3cuaGVya29tc3QudG9Mb3dlckNhc2UoKSkgJiYgcm93LmhlcmtvbXN0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihoZXJrKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCF0b3BDZ3IgfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHJvdy50b3BDZ3IudG9Mb3dlckNhc2UoKSkgJiYgcm93LnRvcENnci50b0xvd2VyQ2FzZSgpLmluZGV4T2YodG9wQ2dyKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFpbmRpZW5pbmdzRGF0dW0gfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKGluZGllbmluZ3NEYXR1bUFzU3RyaW5nKSAmJiBpbmRpZW5pbmdzRGF0dW1Bc1N0cmluZy5pbmRleE9mKGluZGllbmluZ3NEYXR1bSkgIT09IC0xKSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIHRoZSByb3dzXHJcbiAgICAgICAgdGhpcy5yb3dzID0gdGVtcDtcclxuICAgICAgICAvLyBXaGVuZXZlciB0aGUgZmlsdGVyIGNoYW5nZXMsIGFsd2F5cyBnbyBiYWNrIHRvIHRoZSBmaXJzdCBwYWdlXHJcbiAgICAgICAgdGhpcy50YWJsZS5vZmZzZXQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJvd0NsYXNzKHJvdzogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIFwiaWJ0blwiO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQWN0aXZhdGUoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGlmIChldmVudC50eXBlID09PSBcImRibGNsaWNrXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5saW5rVG9HVE0oZXZlbnQucm93W1wiZ3JvbmR0cmFuc3BvcnRtZWxkaW5nSWRcIl0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsaW5rVG9HVE0oZ3RtSWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9ndy9ndG0tZWRpdFwiLCBndG1JZF0pOyAgXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlR1RNKGd0bUlkOiBudW1iZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBUb2dnbGVFeHRlbmRlZFNlYXJjaCgpIHtcclxuICAgICAgICB0aGlzLmlzRXh0ZW5kZWRTZWFyY2ggPSAhdGhpcy5pc0V4dGVuZGVkU2VhcmNoO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi1yb3V0ZXItbG9hZGVyL3NyYyEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctZ3RtLWdyaWQvZ3ctZ3RtLWdyaWQuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxmb3JtIFtmb3JtR3JvdXBdPVxcXCJTdHNGb3JtXFxcIiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkIHBhZGRpbmdUb3AxMHB4XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwidXNlU2VhcmNoXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0zXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgKGNsaWNrKT1cXFwiVG9nZ2xlRXh0ZW5kZWRTZWFyY2goKVxcXCI+e3sgaXNFeHRlbmRlZFNlYXJjaCA/ICdFbmtlbHZvdWRpZyB6b2VrZW4nIDogJ0dlYXZhbmNlZXJkIHpvZWtlbicgfX08L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiAqbmdJZj1cXFwidXNlU2VhcmNoICYmICFpc0V4dGVuZGVkU2VhcmNoXFxcIiBjbGFzcz1cXFwiY29sLXNtLTlcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwicGFkZGluZ1JpZ2h0MTBweFxcXCI+RmlsdGVyIHN0YXR1czwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPHNlbGVjdCBmb3JtQ29udHJvbE5hbWU9XFxcInN0c1xcXCIgRG90dGVkQm9yZGVyQmVsb3cgKGNoYW5nZSk9XFxcInN0YXR1c0NoYW5nZWQoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIi0xXFxcIj5TZWxlY3RlZXI8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCBzdHMgb2YgU3RhdHVzRHJvcGRvd25MaXN0XFxcIiBbdmFsdWVdPVxcXCJzdHMuaWRcXFwiIFtpbm5lckhUTUxdPVxcXCJzdHMub21zY2hyaWp2aW5nXFxcIj48L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwidXNlU2VhcmNoICYmIGlzRXh0ZW5kZWRTZWFyY2hcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyXFxcIj48Z3ctZ3RtLXpvZWt1aXRnZWJyZWlkIChzZWFyY2hpbmcpPVxcXCJvbkV4dGVuZGVkU2VhcmNoKCRldmVudClcXFwiPjwvZ3ctZ3RtLXpvZWt1aXRnZWJyZWlkPjwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiTmd4VGFibGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8cCAqbmdJZj1cXFwiZm9yTmlldXdlQWFudnJhZ2VuID09IGZhbHNlXFxcIiBjbGFzcz1cXFwicHVsbC1sZWZ0IE5neFRpdGxlXFxcIj57e3RpdGxlfX08L3A+XFxyXFxuICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlICN0YWJsZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYm9vdHN0cmFwXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYWN0aXZhdGUpPVxcXCJvbkFjdGl2YXRlKCRldmVudClcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3dzXT1cXFwicm93c1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbHVtbk1vZGVdPVxcXCInZmxleCdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtoZWFkZXJIZWlnaHRdPVxcXCI1MFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zvb3RlckhlaWdodF09XFxcIjQwXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGltaXRdPVxcXCJhcHBMYWJlbHMudGFibGVWaWV3Um93c1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jvd0NsYXNzXT1cXFwiZ2V0Um93Q2xhc3NcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjc3NDbGFzc2VzXT1cXFwiYXBwTGFiZWxzLmljb25zQ3NzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWVzc2FnZXNdPVxcXCJ7dG90YWxNZXNzYWdlOiBhcHBMYWJlbHMuVG90YWwudG9Mb3dlckNhc2UoKSwgZW1wdHlNZXNzYWdlOiBhcHBMYWJlbHMuTm9EYXRhVG9EaXNwbGF5fVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NvcnRzXT1cXFwiW3twcm9wOidncm9uZHRyYW5zcG9ydG1lbGRpbmdJZCcsIGRpcjonZGVzYycgfV1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3dIZWlnaHRdPVxcXCInYXV0bydcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIG5hbWU9XFxcImFmZ2V3ZXJrdGVHVE1cXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1yb3c9XFxcInJvd1xcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICpuZ0lmPVxcXCJyb3dbJ3ZlcmtsYXJpbmdBZm5lbWVyT250dmFuZ2VuJ10gIT0gbnVsbCAmJiByb3dbJ3ZlcmtsYXJpbmdBZm5lbWVyT250dmFuZ2VuJ10gPT0gdHJ1ZVxcXCIgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9pbWFnZXMvY2hlY2tlcmVkLWZsYWctaWNvbi5wbmdcIikgKyBcIlxcXCIgY2xhc3M9XFxcImlidG5cXFwiIChjbGljayk9XFxcImxpbmtUb0dUTShyb3dbJ2dyb25kdHJhbnNwb3J0bWVsZGluZ0lkJ10pXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIHByb3A9XFxcImdyb25kdHJhbnNwb3J0bWVsZGluZ0lkXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyTGFiZWxcXFwiPkNvZGU8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiZ3RtSWRcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXJvdz1cXFwicm93XFxcIiBsZXQtdmFsdWU9XFxcInZhbHVlXFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJwZGZMaW5rXFxcIiBbcm91dGVyTGlua109XFxcIlsnL3RyYW5zcG9ydC10b3AtY2dyLWRldGFpbCcsIHJvd1snZ3JvbmR0cmFuc3BvcnRtZWxkaW5nSWQnXV1cXFwiPjxsYWJlbCBjbGFzcz1cXFwidGV4dFxcXCI+e3tyb3dbJ2dyb25kdHJhbnNwb3J0bWVsZGluZ0lkJ119fTwvbGFiZWw+PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjRcXFwiIHByb3A9XFxcImtsYW50XFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyTGFiZWxcXFwiPktsYW50PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImtsYW50XFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC12YWx1ZT1cXFwidmFsdWVcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT48c3Bhbj57e3ZhbHVlfX08L3NwYW4+PC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiM1xcXCIgcHJvcD1cXFwia2xhbnRLZW5tZXJrXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyTGFiZWxcXFwiPktsYW50IFJlZi48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcInJlZlxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtcm93PVxcXCJyb3dcXFwiIGxldC12YWx1ZT1cXFwidmFsdWVcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT48c3Bhbj57e3ZhbHVlfX08L3NwYW4+PC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiM1xcXCIgcHJvcD1cXFwiaGVya29tc3RcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJMYWJlbFxcXCI+SGVya29tc3Q8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImhlcmtcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXJvdz1cXFwicm93XFxcIiBsZXQtdmFsdWU9XFxcInZhbHVlXFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+PHNwYW4+e3t2YWx1ZX19PC9zcGFuPjwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjNcXFwiIHByb3A9XFxcInRvcENnclxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckxhYmVsXFxcIj5UT1AvQ0dSPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJ0b3BDZ3JcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXJvdz1cXFwicm93XFxcIiBsZXQtdmFsdWU9XFxcInZhbHVlXFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+PHNwYW4+e3t2YWx1ZX19PC9zcGFuPjwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjJcXFwiIG5hbWU9XFxcImluZGllbmluZ3NEYXR1bVxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiIE5neEZpbHRlckxhYmVsXFxcIj5EYXR1bSBJbjwvc3Bhbj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJpbmRpZW5pbmdzRGF0dW1cXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPnt7dmFsdWUgfCBkYXRlOlxcXCJkZC9NTS95eXl5XFxcIn19PC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMVxcXCIgbmFtZT1cXFwiRGV0YWlsXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtcm93PVxcXCJyb3dcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uLy4uLy4uLy4uL2ltYWdlcy9pY29fZWRpdHJlY29yZC5naWZcIikgKyBcIlxcXCIgY2xhc3M9XFxcImlidG5cXFwiIChjbGljayk9XFxcImxpbmtUb0dUTShyb3dbJ2dyb25kdHJhbnNwb3J0bWVsZGluZ0lkJ10pXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uICpuZ0lmPVxcXCJjYW5EZWxldGVcXFwiIFtmbGV4R3Jvd109XFxcIjFcXFwiIG5hbWU9XFxcIkRldGFpbFxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXJvdz1cXFwicm93XFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9pbWFnZXMvaWNvX2RlbGV0ZS5wbmdcIikgKyBcIlxcXCIgY2xhc3M9XFxcImlidG5cXFwiIChjbGljayk9XFxcImRlbGV0ZUdUTShyb3dbJ2dyb25kdHJhbnNwb3J0bWVsZGluZ0lkJ10pXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGU+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuPC9mb3JtPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ndG0tZ3JpZC9ndy1ndG0tZ3JpZC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNTg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQVFDQVlBQUFBZjgvOWhBQUFDY2tsRVFWUjQybU5rd0FFc1RMU2xUNXk1K3BTQkFHREVKc2pPenNZUjRHVlhzbkw5bmhheURGQlVWUFRRMXpOWXk4ZlBOKzMxNjFmOTI3ZHZmMGEwQVV4TVRJemxaZVVMT1RnNVl4MGRIWUdHS1h6S3p5K28yTHQzejR5UEh6LytKMmdBRnhlWHdLMWJ0KzUvK2ZKRllPclVhUXd1TGk0TWl4Y3ZZZURuNDExNzk5N2QxQU1IRHJ6SGE0QzhuSHlNdTV2N1lqMTlQWVpObXpZekpDVW5nYnpFY1BYS0ZRWUhSNGM3aVltSlFRY1BIcnlNMVFDZzg1bWNuWncyZi8zeTFXdjd6aDBNVHg0L1lkaXhZd2VEaWFrcFEyOVBMNE9qa3lQRG8wZVAzajErOUNqcnp0MDdheTljdVBBSHhRQnhjWEdaTzBDd2V0VXFkaFptRm9adjM3OHhMSmkvZ0tHb3BJVGh4ZlBuREdMaTRneWVuaDRNWjgrZUE4WFVNV3NnUURIQVdGZlZMejQxMTJITnlsWFJ6NTgvRjl1d2FTUEQzcjE3R1VKQ1FobGV2SHpKc0dybFNnWlhWMWVHbnA0ZUJqNSsvaTByVjY3d2hSdkF5TWpBWXE0cjczN20ycE1kZi8vK1U1S1RsWFdjTjM5K3dvSzVjeTB1WGJyTUdCRVZ4WEJnM3o2R3JKd2NocGN2WC83djZPZ0l1M2YvM2hxNEFkS2l2Qm9zckt6L0h6NTc5d1hJNVFmaVB5RE16c1ltSHhvYTJnUTB6R2I1c21VTVp1WVdET2ZPblYyWG41OGY4dWJObS8rTTBKQmtOTldSOVRoejljbUpmLy8vaXdHRldJSDRIOHdRUmtiR2Y4bkp5WkZYTGx5cy92N2p4OWZIejU1YXZudjNEcFRNZjRJTllHSmtZRFBVbEhVOWUrM3hFU0QzSTBnSWlObUFtQk9Vc3FHWWdaV0ZSWUdabVZub3g4K2YrNERjenlCTHdBYW95NHVZUDMvNzVmT25Meit1NFVteElNTzRvQzc3QUtXQlljZkl3R2lnTGgxMC9zYlRyVUQrRDBLWkI4TmtaaVpHUmpGaFh0bm5yejg5SWxVekNBQUFuekR5RWFyZWcvTUFBQUFBU1VWT1JLNUNZSUk9XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9pbWFnZXMvY2hlY2tlcmVkLWZsYWctaWNvbi5wbmdcbi8vIG1vZHVsZSBpZCA9IDU4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ3ctZ3RtLWdyaWQuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWd0bS1ncmlkL2d3LWd0bS1ncmlkLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDU4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wYXJlbnRUb3Age1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hpbGRUb3Age1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctZ3RtLWdyaWQvZ3ctZ3RtLWdyaWQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNTg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVG9hc3RyU2VydmljZSB9IGZyb20gXCJuZ3gtdG9hc3RyXCI7XHJcblxyXG5pbXBvcnQgeyBhcHBMYWJlbHMgfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9hcHBMYWJlbHNcIjtcclxuaW1wb3J0IHsgR2VuZXJhbFNjcmlwdHMgfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9nZW5lcmFsLnNjcmlwdHNcIjtcclxuXHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7IEh0dHBLbGFudFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaHR0cC1rbGFudC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgQnNMb2NhbGVTZXJ2aWNlIH0gZnJvbSBcIm5neC1ib290c3RyYXAvZGF0ZXBpY2tlclwiO1xyXG5pbXBvcnQgeyBTZ3NHVE1ab2VrVmVsZGVuIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvc2dzQ2xhc3Nlcy5zY3JpcHRzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImd3LWd0bS16b2VrdWl0Z2VicmVpZFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZ3ctZ3RtLXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2d3LWd0bS16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuY3NzJyldLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgZ3dHVE1ab2VrVWl0Z2VicmVpZENvbXBvbmVudCBleHRlbmRzIEdlbmVyYWxTY3JpcHRzIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGFwcExhYmVscyA9IGFwcExhYmVscztcclxuICAgIHprRm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICAgIGJlc3RCZWRyaWpmTGlzdDogYW55W107XHJcbiAgICB6b2VrVmVsZGVuOiBTZ3NHVE1ab2VrVmVsZGVuID0gbnVsbDtcclxuXHJcbiAgICBAT3V0cHV0KCkgc2VhcmNoaW5nOiBFdmVudEVtaXR0ZXI8U2dzR1RNWm9la1ZlbGRlbj4gPSBuZXcgRXZlbnRFbWl0dGVyPFNnc0dUTVpvZWtWZWxkZW4+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfdG9hc3RyOiBUb2FzdHJTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfbG9jYWxlU2VydmljZTogQnNMb2NhbGVTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBodHRwS2xhbnQ6IEh0dHBLbGFudFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBASW5qZWN0KFwiQkFTRV9VUkxcIikgcHJpdmF0ZSByZWFkb25seSBfYmFzZVVybDogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9zYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xyXG4gICAgICAgIHN1cGVyKF90b2FzdHIpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE5lZWRlZCBjb25maWd1cmF0aW9uIGZvciB0aGUgYnNEYXRlcGlja2VyIHRvIGFjY2VwdCBkZC9NTS95eXl5IGZvcm1hdHRpbmdcclxuICAgICAgICB0aGlzLl9sb2NhbGVTZXJ2aWNlLnVzZShcImJvb3RzdHJhcC1sb2NhbGUtbmxiZVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy56a0Zvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgICAgICAgR3RtSWQ6IFtcIlwiXSxcclxuICAgICAgICAgICAgZGF0VmFuOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIGRhdFRvdDogW1wiXCJdLFxyXG4gICAgICAgICAgICBTdHJhYXQ6IFtcIlwiXSxcclxuICAgICAgICAgICAgR2VtZWVudGU6IFtcIlwiXSxcclxuICAgICAgICAgICAgVG9wSWQ6IFtcIi0xXCJdXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaHR0cEtsYW50LlRPUExpc3QoKS50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbigobHN0OiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxzdCAhPSBudWxsICYmIGxzdCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJlc3RCZWRyaWpmTGlzdCA9IGxzdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmFpc2VTZWFyY2goKSB7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuID0gbmV3IFNnc0dUTVpvZWtWZWxkZW4oKTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4uZ3RtSWQgPSB0aGlzLnprRm9ybS5jb250cm9scy5HdG1JZC52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4uZGF0VmFuID0gdGhpcy56a0Zvcm0uY29udHJvbHMuZGF0VmFuLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5kYXRUb3QgPSB0aGlzLnprRm9ybS5jb250cm9scy5kYXRUb3QudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLnN0cmFhdCA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLlN0cmFhdC52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4uZ2VtZWVudGUgPSB0aGlzLnprRm9ybS5jb250cm9scy5HZW1lZW50ZS52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4udG9wSWQgPSB0aGlzLnprRm9ybS5jb250cm9scy5Ub3BJZC52YWx1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWFyY2hpbmcuZW1pdCh0aGlzLnpvZWtWZWxkZW4pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi1yb3V0ZXItbG9hZGVyL3NyYyEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctZ3RtLXpvZWt1aXRnZWJyZWlkL2d3LWd0bS16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gW2Zvcm1Hcm91cF09XFxcInprRm9ybVxcXCIgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZCBwYWRkaW5nVG9wMzBweFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48bGFiZWwgZm9yPVxcXCJ0eHRHVE1JZFxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPkdUTSBJZDo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS04XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInR4dEdUTUlkXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkd0bUlkXFxcIiBBbGxvd09ubHlOdW1iZXJzIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48bGFiZWwgZm9yPVxcXCJkdGVWYW5cXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5WYW46PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJkdGVWYW5cXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiZGF0VmFuXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIG5nLXRyaW0taWdub3JlXFxcIiBic0RhdGVwaWNrZXIgcGxhY2VtZW50PVxcXCJib3R0b20gbGVmdFxcXCIgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiIERvdHRlZEJvcmRlckJlbG93IFtic0NvbmZpZ109XFxcInsgc2hvd1dlZWtOdW1iZXJzOiBmYWxzZSB9XFxcIj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGxhYmVsIGZvcj1cXFwiZHRlVG90XFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+VG90OjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLThcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwiZHRlVG90XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImRhdFRvdFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCBuZy10cmltLWlnbm9yZVxcXCIgYnNEYXRlcGlja2VyIHBsYWNlbWVudD1cXFwiYm90dG9tIGxlZnRcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBbYnNDb25maWddPVxcXCJ7IHNob3dXZWVrTnVtYmVyczogZmFsc2UgfVxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxsYWJlbCBmb3I9XFxcInR4dFN0cmFhdFxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPlN0cmFhdDo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS04XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInR4dFN0cmFhdFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJTdHJhYXRcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48bGFiZWwgZm9yPVxcXCJ0eHRHZW1lZW50ZVxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPkdlbWVlbnRlOjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLThcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwidHh0R2VtZWVudGVcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiR2VtZWVudGVcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48bGFiZWwgZm9yPVxcXCJkZGxUb3BcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5UT1A6PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93biBjb2wtc20tOFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XFxcImRkbFRvcFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJUb3BJZFxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcIndpZHRoMTAwcGVyY2VudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCItMVxcXCI+U2VsZWN0ZWVyPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IG8gb2YgYmVzdEJlZHJpamZMaXN0XFxcIiBbdmFsdWVdPVxcXCJvLmlkXFxcIj57e28uZGVzY3JpcHRpb259fTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOCBjb2wtc20tb2Zmc2V0LTRcXFwiPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJyYWlzZVNlYXJjaCgpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIj57e2FwcExhYmVscy5TZW5kfX08L2J1dHRvbj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Zvcm0+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWd0bS16b2VrdWl0Z2VicmVpZC9ndy1ndG0tem9la3VpdGdlYnJlaWQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDU5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ3ctZ3RtLXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ndG0tem9la3VpdGdlYnJlaWQvZ3ctZ3RtLXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDU5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWd0bS16b2VrdWl0Z2VicmVpZC9ndy1ndG0tem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNTkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgR2VuZXJhbFNjcmlwdHMgfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9nZW5lcmFsLnNjcmlwdHNcIjtcclxuaW1wb3J0IHsgVG9hc3RyU2VydmljZSB9IGZyb20gXCJuZ3gtdG9hc3RyXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgSHR0cEdWVFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaHR0cC1ndnQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBJR1ZUU3RhdHVzIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvaW50ZXJmYWNlcy5zY3JpcHRzXCI7XHJcbmltcG9ydCB7IElTZ3NHVlRJdGVtIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvc2dzSW50ZXJmYWNlcy5zY3JpcHRzXCI7XHJcbmltcG9ydCB7IFNnc0dWVFpvZWtWZWxkZW4gfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9zZ3NDbGFzc2VzLnNjcmlwdHNcIjtcclxuaW1wb3J0IHsgYXBwTGFiZWxzIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvYXBwTGFiZWxzXCI7XHJcbmltcG9ydCB7IERhdGF0YWJsZUNvbXBvbmVudCB9IGZyb20gXCJAc3dpbWxhbmUvbmd4LWRhdGF0YWJsZVwiO1xyXG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiZ3ctZ3Z0LWdyaWRcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2d3LWd2dC1ncmlkLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2d3LWd2dC1ncmlkLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBnd0dWVEdyaWRDb21wb25lbnQgZXh0ZW5kcyBHZW5lcmFsU2NyaXB0cyBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBhcHBMYWJlbHMgPSBhcHBMYWJlbHM7XHJcblxyXG5cclxuICAgIFN0YXR1c0Ryb3Bkb3duTGlzdDogSUdWVFN0YXR1c1tdID0gbnVsbDtcclxuICAgIFN0YXR1c0xpc3Q6IElTZ3NHVlRJdGVtW10gPSBudWxsO1xyXG4gICAgcm93czogSVNnc0dWVEl0ZW1bXSA9IG51bGw7XHJcbiAgICB0ZW1wOiBhbnlbXSA9IFtdO1xyXG4gICAgQFZpZXdDaGlsZChEYXRhdGFibGVDb21wb25lbnQpIHRhYmxlOiBEYXRhdGFibGVDb21wb25lbnQ7XHJcblxyXG4gICAgQElucHV0KCkgdGl0bGUgPSBcIlwiO1xyXG4gICAgU3RhdHVzSWQ6IG51bWJlciA9IDE7XHJcbiAgICBpc0V4dGVuZGVkU2VhcmNoOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgZm9yTmlldXdlQWFudnJhZ2VuID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgnTmlldXdlQWFudnJhZ2VuJylcclxuICAgIGdldCBOaWV1d2VBYW52cmFnZW4oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9yTmlldXdlQWFudnJhZ2VuO1xyXG4gICAgfVxyXG4gICAgc2V0IE5pZXV3ZUFhbnZyYWdlbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuZm9yTmlldXdlQWFudnJhZ2VuID0gXCJcIiArIHZhbHVlICE9PSBcImZhbHNlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlU2VhcmNoID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgnRXh0ZW5kZWRTZWFyY2gnKVxyXG4gICAgZ2V0IEV4dGVuZGVkU2VhcmNoKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVzZVNlYXJjaDtcclxuICAgIH1cclxuICAgIHNldCBFeHRlbmRlZFNlYXJjaCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMudXNlU2VhcmNoID0gXCJcIiArIHZhbHVlICE9PSBcImZhbHNlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgY2FuRGVsZXRlID0gZmFsc2U7XHJcbiAgICBASW5wdXQoJ0FsbG93RGVsZXRlJylcclxuICAgIGdldCBBbGxvd0RlbGV0ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYW5EZWxldGU7XHJcbiAgICB9XHJcbiAgICBzZXQgQWxsb3dEZWxldGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmNhbkRlbGV0ZSA9IFwiXCIgKyB2YWx1ZSAhPT0gXCJmYWxzZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIFN0c0Zvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF90b2FzdHI6IFRvYXN0clNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBodHRwR1ZUOiBIdHRwR1ZUU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XHJcbiAgICAgICAgc3VwZXIoX3RvYXN0cik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuU3RzRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBzdHM6IFstMV0sXHJcbiAgICAgICAgICAgIGd2dE51bW1lcjogW1wiXCJdLFxyXG4gICAgICAgICAgICBuYWFtOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIGNvZGU6IFtcIlwiXSxcclxuICAgICAgICAgICAgZ2VtOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIGFhbnZyYWFnRGF0dW06IFtcIlwiXSxcclxuICAgICAgICAgICAgc3RhdHVzRGF0dW06IFtcIlwiXSxcclxuICAgICAgICAgICAgaW5kaWVuaW5nc3dpanplOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIGdlZmFjdHVyZWVyZDogW1wiXCJdLFxyXG4gICAgICAgICAgICBndnRTdHM6IFtcIlwiXSxcclxuICAgICAgICAgICAgaG9ldjogW1wiXCJdLFxyXG4gICAgICAgICAgICBzdGFydERhdHVtOiBbXCJcIl1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5odHRwR1ZULlN0YXR1c0RlZmluaXRpb25MaXN0KFwiR1ZUXCIsIHRoaXMuTmlldXdlQWFudnJhZ2VuKS50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbigobHN0OiBJR1ZUU3RhdHVzW10pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChsc3QgIT0gbnVsbCAmJiBsc3QgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TdGF0dXNEcm9wZG93bkxpc3QgPSBbLi4ubHN0XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuU3RzRm9ybS5wYXRjaFZhbHVlKHsgc3RzOiAodGhpcy5OaWV1d2VBYW52cmFnZW4gPyAnMCcgOiAnMScpIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNDaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXR1c0NoYW5nZWQoKSB7XHJcbiAgICAgICAgdGhpcy5TdGF0dXNJZCA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5zdHMudmFsdWU7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLlN0c0Zvcm0uY29udHJvbHMuc3RzLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCItMVwiOiAvLyBTZWxlY3RlZXJcclxuICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wID0gW107XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjBcIjogLy8gTmlldXdlIEFhbnZyYWdlbiBcclxuICAgICAgICAgICAgICAgIHRoaXMuTmlldXdlQWFudnJhZ2VuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFN0YXR1c0xpc3QoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAvLyBTdGF0dXNcclxuICAgICAgICAgICAgICAgIHRoaXMuTmlldXdlQWFudnJhZ2VuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRTdGF0dXNMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFN0YXR1c0xpc3QoKSB7XHJcbiAgICAgICAgdGhpcy5odHRwR1ZULnNnc1N0YXR1c0xpc3QodGhpcy5TdGF0dXNJZCwgXCJUXCIpLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKChsc3Q6IElTZ3NHVlRJdGVtW10pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IGxzdDtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcCA9IFsuLi5sc3RdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckZvcm1GaWVsZHMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FeHRlbmRlZFNlYXJjaCh6b2VrVmVsZGVuOiBTZ3NHVlRab2VrVmVsZGVuKSB7XHJcbiAgICAgICAgdGhpcy5odHRwR1ZULmd3Wm9la0xpc3Qoem9la1ZlbGRlbikudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKGxzdDogSVNnc0dWVEl0ZW1bXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gbHN0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wID0gWy4uLmxzdF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyRm9ybUZpZWxkcygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckZvcm1GaWVsZHMoKSB7XHJcbiAgICAgICAgLy8gQ2xlYXIgYWxsIEZvcm0gVmFsdWVzIGV4Y2VwdCBzdHNcclxuICAgICAgICB0aGlzLlN0c0Zvcm0ucGF0Y2hWYWx1ZSh7XHJcbiAgICAgICAgICAgIGd2dE51bW1lcjogXCJcIixcclxuICAgICAgICAgICAgbmFhbTogXCJcIixcclxuICAgICAgICAgICAgY29kZTogXCJcIixcclxuICAgICAgICAgICAgZ2VtOiBcIlwiLFxyXG4gICAgICAgICAgICBhYW52cmFhZ0RhdHVtOiBcIlwiLFxyXG4gICAgICAgICAgICBzdGF0dXNEYXR1bTogXCJcIixcclxuICAgICAgICAgICAgaW5kaWVuaW5nc3dpanplOiBcIlwiLFxyXG4gICAgICAgICAgICBnZWZhY3R1cmVlcmQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGd2dFN0czogXCJcIixcclxuICAgICAgICAgICAgaG9ldjogXCJcIixcclxuICAgICAgICAgICAgc3RhcnREYXR1bTogXCJcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlcigpIHtcclxuICAgICAgICBjb25zdCBndnROdW1tZXIgPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuZ3Z0TnVtbWVyLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IG5hYW0gPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMubmFhbS52YWx1ZTtcclxuICAgICAgICBjb25zdCBjb2RlID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLmNvZGUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZ2VtID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLmdlbS52YWx1ZTtcclxuICAgICAgICBjb25zdCBhYW52cmFhZ0RhdHVtID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLmFhbnZyYWFnRGF0dW0udmFsdWU7XHJcbiAgICAgICAgY29uc3Qgc3RhdHVzRGF0dW0gPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuc3RhdHVzRGF0dW0udmFsdWU7XHJcbiAgICAgICAgY29uc3QgaW5kaWVuaW5nc3dpanplID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLmluZGllbmluZ3N3aWp6ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCBnZWZhY3R1cmVlcmQgPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuZ2VmYWN0dXJlZXJkLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGd2dFN0cyA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5ndnRTdHMudmFsdWU7XHJcbiAgICAgICAgY29uc3QgaG9ldiA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5ob2V2LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0RGF0dW0gPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuc3RhcnREYXR1bS52YWx1ZTtcclxuICAgICAgICBjb25zdCBkcCA9IG5ldyBEYXRlUGlwZShcImVuLVVTXCIpO1xyXG5cclxuICAgICAgICAvLyBmaWx0ZXIgb3VyIGRhdGFcclxuICAgICAgICBjb25zdCB0ZW1wID0gdGhpcy50ZW1wLmZpbHRlcigocm93OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdmFyIGFhbnZyYWFnRGF0dW1Bc1N0cmluZzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChhYW52cmFhZ0RhdHVtID4gXCJcIikgeyBhYW52cmFhZ0RhdHVtQXNTdHJpbmcgPSBkcC50cmFuc2Zvcm0ocm93LmFhbnZyYWFnRGF0dW0sIFwiZGQvTU0veXl5eVwiKTsgfVxyXG4gICAgICAgICAgICB2YXIgc3RhdHVzRGF0dW1Bc1N0cmluZzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChzdGF0dXNEYXR1bSA+IFwiXCIpIHsgc3RhdHVzRGF0dW1Bc1N0cmluZyA9IGRwLnRyYW5zZm9ybShyb3cuc3RhdHVzRGF0dW0sIFwiZGQvTU0veXl5eVwiKTsgfVxyXG4gICAgICAgICAgICB2YXIgc3RhcnREYXR1bUFzU3RyaW5nOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHN0YXJ0RGF0dW0gPiBcIlwiKSB7IHN0YXJ0RGF0dW1Bc1N0cmluZyA9IGRwLnRyYW5zZm9ybShyb3cuc3RhcnREYXR1bSwgXCJkZC9NTS95eXl5XCIpOyB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKCFndnROdW1tZXIgfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHJvdy5iYnJOdW1tZXIpICYmIHJvdy5iYnJOdW1tZXIudG9TdHJpbmcoKS5pbmRleE9mKGd2dE51bW1lcikgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghbmFhbSB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQocm93Lm5hYW0pICYmIHJvdy5uYWFtLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihuYWFtKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFjb2RlIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChyb3cuYmVyb2Vwc29yZ2FuaXNhdGllY29kZSkgJiYgcm93LmJlcm9lcHNvcmdhbmlzYXRpZWNvZGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKGNvZGUpICE9PSAtMSkpXHJcbiAgICAgICAgICAgICAgICAmJiAoIWdlbSB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQocm93LnBsYWF0cykgJiYgcm93LnBsYWF0cy50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZ2VtKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFhYW52cmFhZ0RhdHVtIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChhYW52cmFhZ0RhdHVtQXNTdHJpbmcpICYmIGFhbnZyYWFnRGF0dW1Bc1N0cmluZy5pbmRleE9mKGFhbnZyYWFnRGF0dW0pICE9PSAtMSkpXHJcbiAgICAgICAgICAgICAgICAmJiAoIXN0YXR1c0RhdHVtIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChzdGF0dXNEYXR1bUFzU3RyaW5nKSAmJiBzdGF0dXNEYXR1bUFzU3RyaW5nLmluZGV4T2Yoc3RhdHVzRGF0dW0pICE9PSAtMSkpXHJcbiAgICAgICAgICAgICAgICAmJiAoIWluZGllbmluZ3N3aWp6ZSB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQocm93LmluZGllbmluZ3N3aWp6ZSkgJiYgcm93LmluZGllbmluZ3N3aWp6ZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoaW5kaWVuaW5nc3dpanplKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFnZWZhY3R1cmVlcmQgfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHJvdy5nZWZhY3R1cmVlcmQpICYmIHJvdy5nZWZhY3R1cmVlcmQudG9Mb3dlckNhc2UoKS5pbmRleE9mKGdlZmFjdHVyZWVyZCkgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghZ3Z0U3RzIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChyb3cuc3RhdHVzKSAmJiByb3cuc3RhdHVzLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihndnRTdHMpICE9PSAtMSkpXHJcbiAgICAgICAgICAgICAgICAmJiAoIWhvZXYgfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHJvdy5ob2V2ZWVsaGVpZCkgJiYgcm93LmhvZXZlZWxoZWlkLnRvU3RyaW5nKCkuaW5kZXhPZihob2V2KSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFzdGFydERhdHVtIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChzdGFydERhdHVtQXNTdHJpbmcpICYmIHN0YXJ0RGF0dW1Bc1N0cmluZy5pbmRleE9mKHN0YXJ0RGF0dW0pICE9PSAtMSkpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgcm93c1xyXG4gICAgICAgIHRoaXMucm93cyA9IHRlbXA7XHJcbiAgICAgICAgLy8gV2hlbmV2ZXIgdGhlIGZpbHRlciBjaGFuZ2VzLCBhbHdheXMgZ28gYmFjayB0byB0aGUgZmlyc3QgcGFnZVxyXG4gICAgICAgIHRoaXMudGFibGUub2Zmc2V0ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBvbkFjdGl2YXRlKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJkYmxjbGlja1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlua1RvR1ZUKGV2ZW50LnJvd1tcImd2dE51bW1lclwiXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFJvd0NsYXNzKHJvdzogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIFwiaWJ0blwiO1xyXG4gICAgfVxyXG5cclxuICAgIGxpbmtUb0dWVChndnRJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2JvZGVtYmVoZWVycmFwcG9ydC1kZXRhaWxcIl0sIHsgcXVlcnlQYXJhbXM6IHsgYmJySWQ6IGd2dElkIH0gfSk7IFxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUdWVChndnRJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy9cclxuICAgIH1cclxuXHJcbiAgICBUb2dnbGVFeHRlbmRlZFNlYXJjaCgpIHtcclxuICAgICAgICB0aGlzLmlzRXh0ZW5kZWRTZWFyY2ggPSAhdGhpcy5pc0V4dGVuZGVkU2VhcmNoO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi1yb3V0ZXItbG9hZGVyL3NyYyEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctZ3Z0LWdyaWQvZ3ctZ3Z0LWdyaWQuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxmb3JtIFtmb3JtR3JvdXBdPVxcXCJTdHNGb3JtXFxcIiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkIHBhZGRpbmdUb3AxMHB4XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwidXNlU2VhcmNoXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0zXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgKGNsaWNrKT1cXFwiVG9nZ2xlRXh0ZW5kZWRTZWFyY2goKVxcXCI+e3sgaXNFeHRlbmRlZFNlYXJjaCA/ICdFbmtlbHZvdWRpZyB6b2VrZW4nIDogJ0dlYXZhbmNlZXJkIHpvZWtlbicgfX08L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiAqbmdJZj1cXFwidXNlU2VhcmNoICYmICFpc0V4dGVuZGVkU2VhcmNoXFxcIiBjbGFzcz1cXFwiY29sLXNtLTlcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwicGFkZGluZ1JpZ2h0MTBweFxcXCI+RmlsdGVyIHN0YXR1czwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPHNlbGVjdCBmb3JtQ29udHJvbE5hbWU9XFxcInN0c1xcXCIgRG90dGVkQm9yZGVyQmVsb3cgKGNoYW5nZSk9XFxcInN0YXR1c0NoYW5nZWQoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIi0xXFxcIj5TZWxlY3RlZXI8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCBzdHMgb2YgU3RhdHVzRHJvcGRvd25MaXN0XFxcIiBbdmFsdWVdPVxcXCJzdHMuYmJyU3RhdHVzSURcXFwiIFtpbm5lckhUTUxdPVxcXCJzdHMuc3RhdHVzXFxcIj48L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwidXNlU2VhcmNoICYmIGlzRXh0ZW5kZWRTZWFyY2hcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyXFxcIj48Z3ctZ3Z0LXpvZWt1aXRnZWJyZWlkIChzZWFyY2hpbmcpPVxcXCJvbkV4dGVuZGVkU2VhcmNoKCRldmVudClcXFwiPjwvZ3ctZ3Z0LXpvZWt1aXRnZWJyZWlkPjwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiTmd4VGFibGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8cCAqbmdJZj1cXFwiZm9yTmlldXdlQWFudnJhZ2VuID09IGZhbHNlXFxcIiBjbGFzcz1cXFwicHVsbC1sZWZ0IE5neFRpdGxlXFxcIj57e3RpdGxlfX08L3A+XFxyXFxuICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlICN0YWJsZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYm9vdHN0cmFwXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYWN0aXZhdGUpPVxcXCJvbkFjdGl2YXRlKCRldmVudClcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3dzXT1cXFwicm93c1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbHVtbk1vZGVdPVxcXCInZmxleCdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtoZWFkZXJIZWlnaHRdPVxcXCI1MFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zvb3RlckhlaWdodF09XFxcIjQwXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGltaXRdPVxcXCJhcHBMYWJlbHMudGFibGVWaWV3Um93c1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jvd0NsYXNzXT1cXFwiZ2V0Um93Q2xhc3NcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjc3NDbGFzc2VzXT1cXFwiYXBwTGFiZWxzLmljb25zQ3NzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWVzc2FnZXNdPVxcXCJ7dG90YWxNZXNzYWdlOiBhcHBMYWJlbHMuVG90YWwudG9Mb3dlckNhc2UoKSwgZW1wdHlNZXNzYWdlOiBhcHBMYWJlbHMuTm9EYXRhVG9EaXNwbGF5fVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NvcnRzXT1cXFwiW3twcm9wOidiYnJOdW1tZXInLCBkaXI6J2Rlc2MnIH1dXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm93SGVpZ2h0XT1cXFwiJ2F1dG8nXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBuYW1lPVxcXCJuaWV0R29lZEdla2V1cmRcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1yb3c9XFxcInJvd1xcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cXFwiY29sb3I6IHJlZFxcXCI+PGI+e3tyb3dbJ25pZXRHb2VkR2VrZXVyZCddfX08L2I+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIHByb3A9XFxcImJick51bW1lclxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckxhYmVsXFxcIj5OdW1tZXI8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiZ3Z0TnVtbWVyXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1yb3c9XFxcInJvd1xcXCIgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwicGRmTGlua1xcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9ib2RlbWJlaGVlcnJhcHBvcnQtZGV0YWlsJ11cXFwiIFtxdWVyeVBhcmFtc109XFxcIntiYnJJZDpyb3dbJ2Jick51bW1lciddfVxcXCI+PGxhYmVsIGNsYXNzPVxcXCJ0ZXh0XFxcIj57e3Jvd1snYmJyTnVtbWVyJ119fTwvbGFiZWw+PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjNcXFwiIHByb3A9XFxcIm5hYW1cXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJMYWJlbFxcXCI+S2xhbnQ8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwibmFhbVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtdmFsdWU9XFxcInZhbHVlXFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7dmFsdWV9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBwcm9wPVxcXCJiZXJvZXBzb3JnYW5pc2F0aWVjb2RlXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyTGFiZWxcXFwiPkNvZGU8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImNvZGVcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXJvdz1cXFwicm93XFxcIiBsZXQtdmFsdWU9XFxcInZhbHVlXFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7dmFsdWV9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIyXFxcIiBwcm9wPVxcXCJwbGFhdHNcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJMYWJlbFxcXCI+R2VtZWVudGU8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImdlbVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtcm93PVxcXCJyb3dcXFwiIGxldC12YWx1ZT1cXFwidmFsdWVcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3t2YWx1ZX19PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIG5hbWU9XFxcImFhbnZyYWFnRGF0dW1cXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIiBOZ3hGaWx0ZXJMYWJlbFxcXCI+RGF0dW0gaW48L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiYWFudnJhYWdEYXR1bVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtdmFsdWU9XFxcInZhbHVlXFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dmFsdWUgfCBkYXRlOlxcXCJkZC9NTS95eXl5XFxcIn19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMVxcXCIgbmFtZT1cXFwic3RhdHVzRGF0dW1cXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIiBOZ3hGaWx0ZXJMYWJlbFxcXCI+RGF0dW0gdWl0PC9zcGFuPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcInN0YXR1c0RhdHVtXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC12YWx1ZT1cXFwidmFsdWVcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3t2YWx1ZSB8IGRhdGU6XFxcImRkL01NL3l5eXlcXFwifX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBwcm9wPVxcXCJpbmRpZW5pbmdzd2lqemVcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIiBOZ3hGaWx0ZXJMYWJlbFxcXCI+QWFudnVscGxhbjwvc3Bhbj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJpbmRpZW5pbmdzd2lqemVcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMVxcXCIgcHJvcD1cXFwiaG9ldmVlbGhlaWRcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJMYWJlbFxcXCI+SG9ldmVlbGhlaWQ8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiaG9ldlxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtcm93PVxcXCJyb3dcXFwiIGxldC12YWx1ZT1cXFwidmFsdWVcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3tyb3dbJ2hvZXZlZWxoZWlkJ119fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBwcm9wPVxcXCJnZWZhY3R1cmVlcmRcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIiBOZ3hGaWx0ZXJMYWJlbFxcXCI+R2VmYWN0Ljwvc3Bhbj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJnZWZhY3R1cmVlcmRcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiM1xcXCIgcHJvcD1cXFwic3RhdHVzXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCIgTmd4RmlsdGVyTGFiZWxcXFwiPkdWVCBTdGF0dXM8L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiZ3Z0U3RzXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIG5hbWU9XFxcInN0YXJ0RGF0dW1Hcm9uZHdlcmtlblxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiIE5neEZpbHRlckxhYmVsXFxcIj5TdGFydCBEYXR1bTwvc3Bhbj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJzdGFydERhdHVtXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC12YWx1ZT1cXFwidmFsdWVcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3t2YWx1ZSB8IGRhdGU6XFxcImRkL01NL3l5eXlcXFwifX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBuYW1lPVxcXCJEZXRhaWxcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1yb3c9XFxcInJvd1xcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vLi4vLi4vLi4vaW1hZ2VzL2ljb19lZGl0cmVjb3JkLmdpZlwiKSArIFwiXFxcIiBjbGFzcz1cXFwiaWJ0blxcXCIgKGNsaWNrKT1cXFwibGlua1RvR1ZUKHJvd1snYmJyTnVtbWVyJ10pXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uICpuZ0lmPVxcXCJjYW5EZWxldGVcXFwiIFtmbGV4R3Jvd109XFxcIjFcXFwiIG5hbWU9XFxcIkRldGFpbFxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXJvdz1cXFwicm93XFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9pbWFnZXMvaWNvX2RlbGV0ZS5wbmdcIikgKyBcIlxcXCIgY2xhc3M9XFxcImlidG5cXFwiIChjbGljayk9XFxcImRlbGV0ZUdWVChyb3dbJ2Jick51bW1lciddKVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZm9ybT5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctZ3Z0LWdyaWQvZ3ctZ3Z0LWdyaWQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDU5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ3ctZ3Z0LWdyaWQuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWd2dC1ncmlkL2d3LWd2dC1ncmlkLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDU5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWd2dC1ncmlkL2d3LWd2dC1ncmlkLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDU5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UgfSBmcm9tIFwibmd4LXRvYXN0clwiO1xyXG5cclxuaW1wb3J0IHsgYXBwTGFiZWxzIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvYXBwTGFiZWxzXCI7XHJcbmltcG9ydCB7IEdlbmVyYWxTY3JpcHRzIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvZ2VuZXJhbC5zY3JpcHRzXCI7XHJcblxyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQgeyBIdHRwQkJSU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9odHRwLWJici5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEh0dHBEb3NzaWVyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9odHRwLWRvc3NpZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIdHRwS2xhbnRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2h0dHAta2xhbnQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIdHRwVFZTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2h0dHAtdHYuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEJzTG9jYWxlU2VydmljZSB9IGZyb20gXCJuZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXJcIjtcclxuaW1wb3J0IHsgU2dzR1ZUWm9la1ZlbGRlbiB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL3Nnc0NsYXNzZXMuc2NyaXB0c1wiO1xyXG5pbXBvcnQgeyBJU2dzS2xhbnRDb21ib0xpc3RJdGVtLCBJU2dzRG9zc2llckNvbWJvTGlzdEl0ZW0sIElTZ3NCZXN0QWFyZExpc3RJdGVtIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvc2dzSW50ZXJmYWNlcy5zY3JpcHRzXCI7XHJcbmltcG9ydCB7IElUVlN0YXR1c0RlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9pbnRlcmZhY2VzLnNjcmlwdHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiZ3ctZ3Z0LXpvZWt1aXRnZWJyZWlkXCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ndy1ndnQtem9la3VpdGdlYnJlaWQuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vZ3ctZ3Z0LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5jc3MnKV0sXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBnd0dWVFpvZWtVaXRnZWJyZWlkQ29tcG9uZW50IGV4dGVuZHMgR2VuZXJhbFNjcmlwdHMgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgYXBwTGFiZWxzID0gYXBwTGFiZWxzO1xyXG4gICAgemtGb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gICAgS2xhbnRMaXN0SXRlbXM6IElTZ3NLbGFudENvbWJvTGlzdEl0ZW1bXSA9IG51bGw7XHJcbiAgICBEb3NzaWVyQmVoZWVyZGVyTGlzdEl0ZW1zOiBJU2dzRG9zc2llckNvbWJvTGlzdEl0ZW1bXSA9IG51bGw7XHJcbiAgICBCZXN0ZW1taW5nc2FhcmRMaXN0SXRlbXM6IElTZ3NCZXN0QWFyZExpc3RJdGVtW10gPSBudWxsO1xyXG4gICAgU3RhdHVzTGlzdEl0ZW1zOiBJVFZTdGF0dXNEZWZpbml0aW9uW10gPSBudWxsO1xyXG5cclxuICAgIHpvZWtWZWxkZW46IFNnc0dWVFpvZWtWZWxkZW4gPSBudWxsO1xyXG4gICAgQE91dHB1dCgpIHNlYXJjaGluZzogRXZlbnRFbWl0dGVyPFNnc0dWVFpvZWtWZWxkZW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxTZ3NHVlRab2VrVmVsZGVuPigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX3RvYXN0cjogVG9hc3RyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2xvY2FsZVNlcnZpY2U6IEJzTG9jYWxlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGh0dHBCYnI6IEh0dHBCQlJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgaHR0cERvc3NpZXI6IEh0dHBEb3NzaWVyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGh0dHBLbGFudDogSHR0cEtsYW50U2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGh0dHBUVjogSHR0cFRWU2VydmljZSxcclxuICAgICAgICBASW5qZWN0KFwiQkFTRV9VUkxcIikgcHJpdmF0ZSByZWFkb25seSBfYmFzZVVybDogc3RyaW5nLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX3Nhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XHJcbiAgICAgICAgc3VwZXIoX3RvYXN0cik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gTmVlZGVkIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBic0RhdGVwaWNrZXIgdG8gYWNjZXB0IGRkL01NL3l5eXkgZm9ybWF0dGluZ1xyXG4gICAgICAgIHRoaXMuX2xvY2FsZVNlcnZpY2UudXNlKFwiYm9vdHN0cmFwLWxvY2FsZS1ubGJlXCIpO1xyXG5cclxuICAgICAgICB0aGlzLnprRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBDb2RlOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIFR2SWQ6IFtcIlwiXSxcclxuICAgICAgICAgICAgS2xhbnRJZDogW1wiLTFcIl0sXHJcbiAgICAgICAgICAgIERvc3NpZXJCZWhlZXJkZXJJZDogW1wiLTFcIl0sXHJcbiAgICAgICAgICAgIFN0YXR1c0lkOiBbXCItMVwiXSxcclxuICAgICAgICAgICAgQmVzdGVtbWluZ3NhYXJkSWQ6IFtcIi0xXCJdLFxyXG4gICAgICAgICAgICBHZWZhY3R1cmVlcmQ6IFtcIi0xXCJdLFxyXG4gICAgICAgICAgICBTdHJhYXQ6IFtcIlwiXSxcclxuICAgICAgICAgICAgUG9zdGNvZGU6IFtcIlwiXSxcclxuICAgICAgICAgICAgR2VtZWVudGU6IFtcIlwiXSxcclxuICAgICAgICAgICAgTGFtYmVydFg6IFtcIlwiXSxcclxuICAgICAgICAgICAgTGFtYmVydFk6IFtcIlwiXSxcclxuICAgICAgICAgICAgTGFtYmVydFJhbmdlOiBbXCItMVwiXSxcclxuICAgICAgICAgICAgVmVydHJla1N0cmFhdDogW1wiXCJdLFxyXG4gICAgICAgICAgICBWZXJ0cmVrR2VtZWVudGU6IFtcIlwiXSxcclxuICAgICAgICAgICAgZGF0VmFuOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIGRhdFRvdDogW1wiXCJdXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZERyb3Bkb3ducygpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWREcm9wZG93bnMoKSB7XHJcbiAgICAgICAgdGhpcy5odHRwS2xhbnQuc2dzQ29tYm9MaXN0SXRlbXMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChsc3Q6IElTZ3NLbGFudENvbWJvTGlzdEl0ZW1bXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxzdCAhPSBudWxsICYmIGxzdCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLktsYW50TGlzdEl0ZW1zID0gWy4uLmxzdF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmh0dHBEb3NzaWVyLnNnc0NvbWJvTGlzdEl0ZW1zKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgobHN0OiBJU2dzRG9zc2llckNvbWJvTGlzdEl0ZW1bXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxzdCAhPSBudWxsICYmIGxzdCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkRvc3NpZXJCZWhlZXJkZXJMaXN0SXRlbXMgPSBbLi4ubHN0XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaHR0cEJici5zZ3NCZXN0ZW1taW5nc2FhcmRMaXN0SXRlbXMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChsc3Q6IElTZ3NCZXN0QWFyZExpc3RJdGVtW10pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChsc3QgIT0gbnVsbCAmJiBsc3QgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CZXN0ZW1taW5nc2FhcmRMaXN0SXRlbXMgPSBbLi4ubHN0XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaHR0cFRWLlN0YXR1c0RlZmluaXRpb25MaXN0KGZhbHNlKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChsc3Q6IElUVlN0YXR1c0RlZmluaXRpb25bXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxzdCAhPSBudWxsICYmIGxzdCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlN0YXR1c0xpc3RJdGVtcyA9IFsuLi5sc3RdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByYWlzZVNlYXJjaCgpIHtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4gPSBuZXcgU2dzR1ZUWm9la1ZlbGRlbigpO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5jb2RlID0gdGhpcy56a0Zvcm0uY29udHJvbHMuQ29kZS52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4udHZJZCA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLlR2SWQudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmtsYW50SWQgPSB0aGlzLnprRm9ybS5jb250cm9scy5LbGFudElkLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5kb3NzaWVyQmVoZWVyZGVySWQgPSB0aGlzLnprRm9ybS5jb250cm9scy5Eb3NzaWVyQmVoZWVyZGVySWQudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLnN0YXR1c0lkID0gdGhpcy56a0Zvcm0uY29udHJvbHMuU3RhdHVzSWQudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmJlc3RlbW1pbmdzYWFyZElkID0gdGhpcy56a0Zvcm0uY29udHJvbHMuQmVzdGVtbWluZ3NhYXJkSWQudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmdlZmFjdHVyZWVyZCA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLkdlZmFjdHVyZWVyZC52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4uc3RyYWF0ID0gdGhpcy56a0Zvcm0uY29udHJvbHMuU3RyYWF0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5wb3N0Y29kZSA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLlBvc3Rjb2RlLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5nZW1lZW50ZSA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLkdlbWVlbnRlLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5sYW1iZXJ0WCA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLkxhbWJlcnRYLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5sYW1iZXJ0WSA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLkxhbWJlcnRZLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5sYW1iZXJ0UmFuZ2UgPSB0aGlzLnprRm9ybS5jb250cm9scy5MYW1iZXJ0UmFuZ2UudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLnZlcnRyZWtTdHJhYXQgPSB0aGlzLnprRm9ybS5jb250cm9scy5WZXJ0cmVrU3RyYWF0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi52ZXJ0cmVrR2VtZWVudGUgPSB0aGlzLnprRm9ybS5jb250cm9scy5WZXJ0cmVrR2VtZWVudGUudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmRhdFZhbiA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLmRhdFZhbi52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4uZGF0VG90ID0gdGhpcy56a0Zvcm0uY29udHJvbHMuZGF0VG90LnZhbHVlO1xyXG5cclxuICAgICAgICB0aGlzLnNlYXJjaGluZy5lbWl0KHRoaXMuem9la1ZlbGRlbik7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXJvdXRlci1sb2FkZXIvc3JjIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1ndnQtem9la3VpdGdlYnJlaWQvZ3ctZ3Z0LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybSBbZm9ybUdyb3VwXT1cXFwiemtGb3JtXFxcIiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkIHBhZGRpbmdUb3AzMHB4XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcInR4dENvZGVcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5Db2RlPC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0eHRDb2RlXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkNvZGVcXFwiIEFsbG93T25seU51bWJlcnMgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcInR2dFR2SWRcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5UViBOdW1tZXI6PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0eHRUdklkXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIlR2SWRcXFwiIEFsbG93T25seU51bWJlcnMgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcImRkbEtsYW50XFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+S2xhbnQ8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duIGNvbC1zbS00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cXFwiZGRsS2xhbnRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiS2xhbnRJZFxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcIndpZHRoMTAwcGVyY2VudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCItMVxcXCI+U2VsZWN0ZWVyPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IGtsYW50IG9mIEtsYW50TGlzdEl0ZW1zXFxcIiBbdmFsdWVdPVxcXCJrbGFudC5rbGFudElEXFxcIiBbaW5uZXJIVE1MXT1cXFwia2xhbnQubmFhbVxcXCI+PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJkZGxEb3NzaWVyQmVoZWVyZGVyXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+RG9zc2llckJlaGVlcmRlcjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24gY29sLXNtLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJkZGxEb3NzaWVyQmVoZWVyZGVyXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkRvc3NpZXJCZWhlZXJkZXJJZFxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcIndpZHRoMTAwcGVyY2VudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCItMVxcXCI+U2VsZWN0ZWVyPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IGRvc3NiZWggb2YgRG9zc2llckJlaGVlcmRlckxpc3RJdGVtc1xcXCIgW3ZhbHVlXT1cXFwiZG9zc2JlaC5kb3NzaWVyQmVoZWVyZGVySURcXFwiIFtpbm5lckhUTUxdPVxcXCJkb3NzYmVoLm5hYW1cXFwiPjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwiZGRsU3RhdHVzXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+U3RhdHVzPC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93biBjb2wtc20tNFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XFxcImRkbFN0YXR1c1xcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJTdGF0dXNJZFxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcIndpZHRoMTAwcGVyY2VudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCItMVxcXCI+U2VsZWN0ZWVyPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IHN0cyBvZiBTdGF0dXNMaXN0SXRlbXNcXFwiIFt2YWx1ZV09XFxcInN0cy50dlN0YXR1c0lEXFxcIiBbaW5uZXJIVE1MXT1cXFwic3RzLnN0YXR1c1xcXCI+PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJkZGxCZXN0ZW1taW5nc2FhcmRcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5CZXN0ZW1taW5nc2FhcmQ8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duIGNvbC1zbS00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cXFwiZGRsQmVzdGVtbWluZ3NhYXJkXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkJlc3RlbW1pbmdzYWFyZElkXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwid2lkdGgxMDBwZXJjZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIi0xXFxcIj5TZWxlY3RlZXI8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgYWFyZCBvZiBCZXN0ZW1taW5nc2FhcmRMaXN0SXRlbXNcXFwiIFt2YWx1ZV09XFxcImFhcmQuYmVzdGVtbWluZ3NBYXJkSWRcXFwiIFtpbm5lckhUTUxdPVxcXCJhYXJkLmJlc3RlbW1pbmdzQWFyZFxcXCI+PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJ0eHRTdHJhYXRcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5CZXN0ZW1taW5nIFN0cmFhdDwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwidHh0U3RyYWF0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIlN0cmFhdFxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcImRkbEdlZmFjdHVyZWVyZFxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPkdlZmFjdHVyZWVyZDwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24gY29sLXNtLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJkZGxHZWZhY3R1cmVlcmRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiR2VmYWN0dXJlZXJkXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwid2lkdGgxMDBwZXJjZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIi0xXFxcIj5TZWxlY3RlZXI8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIjFcXFwiPkphPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCIwXFxcIj5OZWU8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcInR4dFBvc3Rjb2RlXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+QmVzdGVtbWluZyBQb3N0Y29kZTo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInR4dFBvc3Rjb2RlXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIlBvc3Rjb2RlXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwidHh0R2VtZWVudGVcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5CZXN0ZW1taW5nIEdlbWVlbnRlOjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwidHh0R2VtZWVudGVcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiR2VtZWVudGVcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJ0eHRMYW1iZXJ0WFxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPkJlc3RlbW1pbmcgTGFtYmVydCBYIChpbiBtKTwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwidHh0TGFtYmVydFhcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiTGFtYmVydFhcXFwiIEFsbG93T25seU51bWJlcnMgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcImRkbExhbWJlcnRSYW5nZVxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPkxhbWJlcnQgUmFuZ2U6PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93biBjb2wtc20tNFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XFxcImRkbExhbWJlcnRSYW5nZVxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJMYW1iZXJ0UmFuZ2VcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJ3aWR0aDEwMHBlcmNlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiLTFcXFwiPlNlbGVjdGVlcjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiMVxcXCI+MSBrbTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiM1xcXCI+MyBrbTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiNVxcXCI+NSBrbTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiMTBcXFwiPjEwIGttPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJ0eHRMYW1iZXJ0WFxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPkJlc3RlbW1pbmcgTGFtYmVydCBZIChpbiBtKTwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwidHh0TGFtYmVydFlcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiTGFtYmVydFlcXFwiIEFsbG93T25seU51bWJlcnMgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPiZuYnNwOzwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJ0eHRWU3RyYWF0XFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+VFYgU3RyYWF0OjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwidHh0VlN0cmFhdFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJWZXJ0cmVrU3RyYWF0XFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwidHh0VkdlbWVlbnRlXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+VFYgR2VtZWVudGU6PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0eHRWR2VtZWVudGVcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiVmVydHJla0dlbWVlbnRlXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwiZHRlVmFuXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+RGF0dW0gVmFuOjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwiZHRlVmFuXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImRhdFZhblxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCBuZy10cmltLWlnbm9yZVxcXCIgYnNEYXRlcGlja2VyIHBsYWNlbWVudD1cXFwidG9wIGxlZnRcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBbYnNDb25maWddPVxcXCJ7IHNob3dXZWVrTnVtYmVyczogZmFsc2UgfVxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcImR0ZVRvdFxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPkRhdHVtIFRvdDo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcImR0ZVRvdFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJkYXRUb3RcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgbmctdHJpbS1pZ25vcmVcXFwiIGJzRGF0ZXBpY2tlciBwbGFjZW1lbnQ9XFxcInRvcCBsZWZ0XFxcIiBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCIgRG90dGVkQm9yZGVyQmVsb3cgW2JzQ29uZmlnXT1cXFwieyBzaG93V2Vla051bWJlcnM6IGZhbHNlIH1cXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00IGNvbC1zbS1vZmZzZXQtOFxcXCI+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcInJhaXNlU2VhcmNoKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiPnt7YXBwTGFiZWxzLlNlbmR9fTwvYnV0dG9uPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZm9ybT5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctZ3Z0LXpvZWt1aXRnZWJyZWlkL2d3LWd2dC16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNTk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ndy1ndnQtem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWd2dC16b2VrdWl0Z2VicmVpZC9ndy1ndnQtem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNjAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctZ3Z0LXpvZWt1aXRnZWJyZWlkL2d3LWd2dC16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2MDFcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBHZW5lcmFsU2NyaXB0cyB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL2dlbmVyYWwuc2NyaXB0c1wiO1xyXG5pbXBvcnQgeyBUb2FzdHJTZXJ2aWNlIH0gZnJvbSBcIm5neC10b2FzdHJcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBIdHRwS2xhbnRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2h0dHAta2xhbnQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBhcHBMYWJlbHMgfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9hcHBMYWJlbHNcIjtcclxuaW1wb3J0IHsgRGF0YXRhYmxlQ29tcG9uZW50IH0gZnJvbSBcIkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSwgVXNlclJvbGVzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IElTZ3NTdGF0dXNHcmlkSXRlbSwgSVNnc0tsYW50U3RhdHVzTGlzdEl0ZW0gfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9zZ3NJbnRlcmZhY2VzLnNjcmlwdHNcIjtcclxuaW1wb3J0IHsgU2dzS2xhbnRab2VrVmVsZGVuIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvc2dzQ2xhc3Nlcy5zY3JpcHRzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImd3LWtsYW50LWdyaWRcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2d3LWtsYW50LWdyaWQuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vZ3cta2xhbnQtZ3JpZC5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgZ3dLbGFudEdyaWRDb21wb25lbnQgZXh0ZW5kcyBHZW5lcmFsU2NyaXB0cyBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBhcHBMYWJlbHMgPSBhcHBMYWJlbHM7XHJcblxyXG4gICAgU3RhdHVzRHJvcGRvd25MaXN0OiBJU2dzS2xhbnRTdGF0dXNMaXN0SXRlbVtdID0gbnVsbDtcclxuICAgIFN0YXR1c0xpc3Q6IElTZ3NTdGF0dXNHcmlkSXRlbVtdID0gbnVsbDtcclxuICAgIHJvd3M6IElTZ3NTdGF0dXNHcmlkSXRlbVtdID0gbnVsbDtcclxuICAgIHRlbXA6IGFueVtdID0gW107XHJcbiAgICBAVmlld0NoaWxkKERhdGF0YWJsZUNvbXBvbmVudCkgdGFibGU6IERhdGF0YWJsZUNvbXBvbmVudDtcclxuXHJcbiAgICBASW5wdXQoKSB0aXRsZSA9IFwiXCI7XHJcbiAgICBTdGF0dXNJZDogbnVtYmVyID0gLTE7XHJcbiAgICBUeXBlSWQ6IG51bWJlciA9IDA7XHJcbiAgICBpc0V4dGVuZGVkU2VhcmNoOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgZm9yTmlldXdlQWFudnJhZ2VuID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgnTmlldXdlQWFudnJhZ2VuJylcclxuICAgIGdldCBOaWV1d2VBYW52cmFnZW4oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9yTmlldXdlQWFudnJhZ2VuO1xyXG4gICAgfVxyXG4gICAgc2V0IE5pZXV3ZUFhbnZyYWdlbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuZm9yTmlldXdlQWFudnJhZ2VuID0gXCJcIiArIHZhbHVlICE9PSBcImZhbHNlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlU2VhcmNoID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgnRXh0ZW5kZWRTZWFyY2gnKVxyXG4gICAgZ2V0IEV4dGVuZGVkU2VhcmNoKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVzZVNlYXJjaDtcclxuICAgIH1cclxuICAgIHNldCBFeHRlbmRlZFNlYXJjaCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMudXNlU2VhcmNoID0gXCJcIiArIHZhbHVlICE9PSBcImZhbHNlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgY2FuRGVsZXRlID0gZmFsc2U7XHJcbiAgICBASW5wdXQoJ0FsbG93RGVsZXRlJylcclxuICAgIGdldCBBbGxvd0RlbGV0ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYW5EZWxldGU7XHJcbiAgICB9XHJcbiAgICBzZXQgQWxsb3dEZWxldGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmNhbkRlbGV0ZSA9IFwiXCIgKyB2YWx1ZSAhPT0gXCJmYWxzZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIFN0c0Zvcm06IEZvcm1Hcm91cDtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfdG9hc3RyOiBUb2FzdHJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgaHR0cEtsYW50OiBIdHRwS2xhbnRTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBhdXRoOiBBdXRoZW50aWNhdGlvblNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcihfdG9hc3RyKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5TdHNGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICAgICAgIHN0czogWzNdLFxyXG4gICAgICAgICAgICB0eXBlOiBbMF0sXHJcbiAgICAgICAgICAgIGlkOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIG5hYW06IFtcIlwiXSxcclxuICAgICAgICAgICAgY29kZTogW1wiXCJdLFxyXG4gICAgICAgICAgICBpbnNjaHJpanZpbmdzRGF0dW06IFtcIlwiXSxcclxuICAgICAgICAgICAgZGF0dW1BY3RpZWY6IFtcIlwiXSxcclxuICAgICAgICAgICAgZ2VmYWN0dXJlZXJkOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIHN0YXJ0RGF0dW06IFtcIlwiXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmh0dHBLbGFudC5zZ3NLbGFudFN0YXR1c0xpc3RJdGVtcygpLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKChsc3Q6IElTZ3NLbGFudFN0YXR1c0xpc3RJdGVtW10pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChsc3QgIT0gbnVsbCAmJiBsc3QgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TdGF0dXNEcm9wZG93bkxpc3QgPSBbLi4ubHN0XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuU3RzRm9ybS5wYXRjaFZhbHVlKHsgc3RzOiAodGhpcy5OaWV1d2VBYW52cmFnZW4gPyAnMScgOiAnMycpIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNDaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXR1c0NoYW5nZWQoKSB7XHJcbiAgICAgICAgdGhpcy5TdGF0dXNJZCA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5zdHMudmFsdWU7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLlN0c0Zvcm0uY29udHJvbHMuc3RzLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCItMVwiOiAvLyBTZWxlY3RlZXJcclxuICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wID0gW107XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDogLy8gU3RhdHVzXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRTdGF0dXNMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFN0YXR1c0xpc3QoKSB7XHJcbiAgICAgICAgdGhpcy5UeXBlSWQgPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMudHlwZS52YWx1ZTtcclxuICAgICAgICB0aGlzLmh0dHBLbGFudC5zZ3NTdGF0dXNHcmlkKHRoaXMuU3RhdHVzSWQsIHRoaXMuVHlwZUlkKS50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbigobHN0OiBJU2dzU3RhdHVzR3JpZEl0ZW1bXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gbHN0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wID0gWy4uLmxzdF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyRm9ybUZpZWxkcygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkV4dGVuZGVkU2VhcmNoKHpvZWtWZWxkZW46IFNnc0tsYW50Wm9la1ZlbGRlbikge1xyXG4gICAgICAgIHRoaXMuaHR0cEtsYW50Lmd3Wm9la0xpc3Qoem9la1ZlbGRlbikudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKGxzdDogSVNnc1N0YXR1c0dyaWRJdGVtW10pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IGxzdDtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcCA9IFsuLi5sc3RdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckZvcm1GaWVsZHMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJGb3JtRmllbGRzKCkge1xyXG4gICAgICAgIC8vIENsZWFyIGFsbCBGb3JtIFZhbHVlcyBleGNlcHQgc3RzXHJcbiAgICAgICAgdGhpcy5TdHNGb3JtLnBhdGNoVmFsdWUoe1xyXG4gICAgICAgICAgICBpZDogXCJcIixcclxuICAgICAgICAgICAgbmFhbTogXCJcIixcclxuICAgICAgICAgICAgY29kZTogXCJcIixcclxuICAgICAgICAgICAgaW5zY2hyaWp2aW5nc0RhdHVtOiBcIlwiLFxyXG4gICAgICAgICAgICBkYXR1bUFjdGllZjogXCJcIixcclxuICAgICAgICAgICAgZ2VmYWN0dXJlZXJkOiBcIlwiLFxyXG4gICAgICAgICAgICBzdGFydERhdHVtOiBcIlwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLmlkLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IG5hYW0gPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMubmFhbS52YWx1ZTtcclxuICAgICAgICBjb25zdCBjb2RlID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLmNvZGUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgaW5zY2hyaWp2aW5nc0RhdHVtID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLmluc2NocmlqdmluZ3NEYXR1bS52YWx1ZTtcclxuICAgICAgICBjb25zdCBkYXR1bUFjdGllZiA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5kYXR1bUFjdGllZi52YWx1ZTtcclxuICAgICAgICBjb25zdCBnZWZhY3R1cmVlcmQgPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuZ2VmYWN0dXJlZXJkLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0RGF0dW0gPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuc3RhcnREYXR1bS52YWx1ZTtcclxuICAgICAgICBjb25zdCBkcCA9IG5ldyBEYXRlUGlwZShcImVuLVVTXCIpO1xyXG5cclxuICAgICAgICAvLyBmaWx0ZXIgb3VyIGRhdGFcclxuICAgICAgICBjb25zdCB0ZW1wID0gdGhpcy50ZW1wLmZpbHRlcigocm93OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdmFyIGluc2NocmlqdmluZ3NEYXR1bUFzU3RyaW5nOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKGluc2NocmlqdmluZ3NEYXR1bSA+IFwiXCIpIHsgaW5zY2hyaWp2aW5nc0RhdHVtQXNTdHJpbmcgPSBkcC50cmFuc2Zvcm0ocm93Lmluc2NocmlqdmluZ3NEYXR1bSwgXCJkZC9NTS95eXl5XCIpOyB9XHJcbiAgICAgICAgICAgIHZhciBkYXR1bUFjdGllZkFzU3RyaW5nOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKGRhdHVtQWN0aWVmID4gXCJcIikgeyBkYXR1bUFjdGllZkFzU3RyaW5nID0gZHAudHJhbnNmb3JtKHJvdy5kYXR1bUFjdGllZiwgXCJkZC9NTS95eXl5XCIpOyB9XHJcbiAgICAgICAgICAgIHZhciBzdGFydERhdHVtQXNTdHJpbmc6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAoc3RhcnREYXR1bSA+IFwiXCIpIHsgc3RhcnREYXR1bUFzU3RyaW5nID0gZHAudHJhbnNmb3JtKHJvdy5mYWN0dXJhdGllU3RhcnREYXR1bSwgXCJkZC9NTS95eXl5XCIpOyB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKCFpZCB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQocm93LmtsYW50SUQpICYmIHJvdy5rbGFudElELnRvU3RyaW5nKCkuaW5kZXhPZihpZCkgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghbmFhbSB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQocm93Lm5hYW0pICYmIHJvdy5uYWFtLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihuYWFtKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFjb2RlIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChyb3cuYmVyb2Vwc29yZ2FuaXNhdGllY29kZSkgJiYgcm93LmJlcm9lcHNvcmdhbmlzYXRpZWNvZGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKGNvZGUpICE9PSAtMSkpXHJcbiAgICAgICAgICAgICAgICAmJiAoIWluc2NocmlqdmluZ3NEYXR1bSB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQoaW5zY2hyaWp2aW5nc0RhdHVtQXNTdHJpbmcpICYmIGluc2NocmlqdmluZ3NEYXR1bUFzU3RyaW5nLmluZGV4T2YoaW5zY2hyaWp2aW5nc0RhdHVtKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFkYXR1bUFjdGllZiB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQoZGF0dW1BY3RpZWZBc1N0cmluZykgJiYgZGF0dW1BY3RpZWZBc1N0cmluZy5pbmRleE9mKGRhdHVtQWN0aWVmKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFnZWZhY3R1cmVlcmQgfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHJvdy5nZWZhY3R1cmVlcmQpICYmIHJvdy5nZWZhY3R1cmVlcmQudG9Mb3dlckNhc2UoKS5pbmRleE9mKGdlZmFjdHVyZWVyZCkgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghc3RhcnREYXR1bSB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQoc3RhcnREYXR1bUFzU3RyaW5nKSAmJiBzdGFydERhdHVtQXNTdHJpbmcuaW5kZXhPZihzdGFydERhdHVtKSAhPT0gLTEpKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgdGhlIHJvd3NcclxuICAgICAgICB0aGlzLnJvd3MgPSB0ZW1wO1xyXG4gICAgICAgIC8vIFdoZW5ldmVyIHRoZSBmaWx0ZXIgY2hhbmdlcywgYWx3YXlzIGdvIGJhY2sgdG8gdGhlIGZpcnN0IHBhZ2VcclxuICAgICAgICB0aGlzLnRhYmxlLm9mZnNldCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgb25BY3RpdmF0ZShldmVudDogYW55KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IFwiZGJsY2xpY2tcIikge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmtUb0tsYW50KGV2ZW50LnJvd1tcImtsYW50SURcIl0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRSb3dDbGFzcyhyb3c6IGFueSkge1xyXG4gICAgICAgIHJldHVybiBcImlidG5cIjtcclxuICAgIH1cclxuXHJcbiAgICBsaW5rVG9LbGFudChJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2d3L2tsYW50LWVkaXQvXCIsSWRdKTsgXHJcbiAgICB9XHJcblxyXG4gICAgVG9nZ2xlRXh0ZW5kZWRTZWFyY2goKSB7XHJcbiAgICAgICAgdGhpcy5pc0V4dGVuZGVkU2VhcmNoID0gIXRoaXMuaXNFeHRlbmRlZFNlYXJjaDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGVudW0gRmlsdGVyVHlwZXMge1xyXG4gICAgQWxsID0gMCxcclxuICAgIFRvcENnciA9IDEsXHJcbiAgICBET1AgPSAyXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi1yb3V0ZXItbG9hZGVyL3NyYyEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta2xhbnQtZ3JpZC9ndy1rbGFudC1ncmlkLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybSBbZm9ybUdyb3VwXT1cXFwiU3RzRm9ybVxcXCIgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZCBwYWRkaW5nVG9wMTBweFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgKm5nSWY9XFxcInVzZVNlYXJjaFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tM1xcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIChjbGljayk9XFxcIlRvZ2dsZUV4dGVuZGVkU2VhcmNoKClcXFwiPnt7IGlzRXh0ZW5kZWRTZWFyY2ggPyAnRW5rZWx2b3VkaWcgem9la2VuJyA6ICdHZWF2YW5jZWVyZCB6b2VrZW4nIH19PC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgKm5nSWY9XFxcInVzZVNlYXJjaCAmJiAhaXNFeHRlbmRlZFNlYXJjaFxcXCIgY2xhc3M9XFxcImNvbC1zbS05XFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcInBhZGRpbmdSaWdodDEwcHhcXFwiPkZpbHRlciBzdGF0dXM8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxzZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVxcXCJzdHNcXFwiIERvdHRlZEJvcmRlckJlbG93IChjaGFuZ2UpPVxcXCJzdGF0dXNDaGFuZ2VkKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCItMVxcXCI+U2VsZWN0ZWVyPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgc3RzIG9mIFN0YXR1c0Ryb3Bkb3duTGlzdFxcXCIgW3ZhbHVlXT1cXFwic3RzLmtsYW50U3RhdHVzSURcXFwiIFtpbm5lckhUTUxdPVxcXCJzdHMuc3RhdHVzXFxcIj48L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcInBhZGRpbmdSaWdodDQwcHhcXFwiPktsYW50IFR5cGU8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxzZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVxcXCJ0eXBlXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyAoY2hhbmdlKT1cXFwic3RhdHVzQ2hhbmdlZCgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiMFxcXCI+QWxsZTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCIxXFxcIj5Ub3BDZ3I8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiMlxcXCI+RG9wPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgKm5nSWY9XFxcInVzZVNlYXJjaCAmJiBpc0V4dGVuZGVkU2VhcmNoXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMlxcXCI+PGd3LWtsYW50LXpvZWt1aXRnZWJyZWlkIChzZWFyY2hpbmcpPVxcXCJvbkV4dGVuZGVkU2VhcmNoKCRldmVudClcXFwiPjwvZ3cta2xhbnQtem9la3VpdGdlYnJlaWQ+PC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJOZ3hUYWJsZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJwdWxsLWxlZnQgTmd4VGl0bGVcXFwiPnt7dGl0bGV9fTwvcD5cXHJcXG4gICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUgI3RhYmxlXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJib290c3RyYXBcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhY3RpdmF0ZSk9XFxcIm9uQWN0aXZhdGUoJGV2ZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jvd3NdPVxcXCJyb3dzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29sdW1uTW9kZV09XFxcIidmbGV4J1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2hlYWRlckhlaWdodF09XFxcIjUwXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9vdGVySGVpZ2h0XT1cXFwiNDBcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsaW1pdF09XFxcImFwcExhYmVscy50YWJsZVZpZXdSb3dzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm93Q2xhc3NdPVxcXCJnZXRSb3dDbGFzc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Nzc0NsYXNzZXNdPVxcXCJhcHBMYWJlbHMuaWNvbnNDc3NcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttZXNzYWdlc109XFxcInt0b3RhbE1lc3NhZ2U6IGFwcExhYmVscy5Ub3RhbC50b0xvd2VyQ2FzZSgpLCBlbXB0eU1lc3NhZ2U6IGFwcExhYmVscy5Ob0RhdGFUb0Rpc3BsYXl9XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc29ydHNdPVxcXCJbe3Byb3A6J2tsYW50SUQnLCBkaXI6J2Rlc2MnIH1dXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm93SGVpZ2h0XT1cXFwiJ2F1dG8nXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBwcm9wPVxcXCJrbGFudElEXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyTGFiZWxcXFwiPktsYW50IElEPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImlkXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1yb3c9XFxcInJvd1xcXCIgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBbcm91dGVyTGlua109XFxcIlxcXCIgKGNsaWNrKT1cXFwibGlua1Rva2xhbnQocm93WydrbGFudElEJ10pXFxcIj48c3Bhbj57e3Jvd1sna2xhbnRJRCddfX08L3NwYW4+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjNcXFwiIHByb3A9XFxcIm5hYW1cXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJMYWJlbFxcXCI+TmFhbTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJuYWFtXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC12YWx1ZT1cXFwidmFsdWVcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3t2YWx1ZX19PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjJcXFwiIHByb3A9XFxcImJlcm9lcHNvcmdhbmlzYXRpZWNvZGVcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIiBOZ3hGaWx0ZXJMYWJlbFxcXCI+Q29kZTwvc3Bhbj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJjb2RlXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjJcXFwiIG5hbWU9XFxcImluc2NocmlqdmluZ3NEYXR1bVxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiIE5neEZpbHRlckxhYmVsXFxcIj5JbnNjaHJpanZpbmc8L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiaW5zY2hyaWp2aW5nc0RhdHVtXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC12YWx1ZT1cXFwidmFsdWVcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3t2YWx1ZSB8IGRhdGU6XFxcImRkL01NL3l5eXlcXFwifX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIyXFxcIiBuYW1lPVxcXCJkYXR1bUFjdGllZlxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiIE5neEZpbHRlckxhYmVsXFxcIj5BY3RpZWY8L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiZGF0dW1BY3RpZWZcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3ZhbHVlIHwgZGF0ZTpcXFwiZGQvTU0veXl5eVxcXCJ9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIHByb3A9XFxcImdlZmFjdHVyZWVyZFxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiIE5neEZpbHRlckxhYmVsXFxcIj5HZWZhY3QuPC9zcGFuPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImdlZmFjdHVyZWVyZFxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIyXFxcIiBuYW1lPVxcXCJmYWN0dXJhdGllU3RhcnREYXR1bVxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiIE5neEZpbHRlckxhYmVsXFxcIj5TdGFydCBEYXR1bTwvc3Bhbj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJzdGFydERhdHVtXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC12YWx1ZT1cXFwidmFsdWVcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3t2YWx1ZSB8IGRhdGU6XFxcImRkL01NL3l5eXlcXFwifX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBuYW1lPVxcXCJEZXRhaWxcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1yb3c9XFxcInJvd1xcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vLi4vLi4vLi4vaW1hZ2VzL2ljb19lZGl0cmVjb3JkLmdpZlwiKSArIFwiXFxcIiBjbGFzcz1cXFwiaWJ0blxcXCIgKGNsaWNrKT1cXFwibGlua1RvS2xhbnQocm93WydrbGFudElEJ10pXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGU+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuPC9mb3JtPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rbGFudC1ncmlkL2d3LWtsYW50LWdyaWQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDYwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ3cta2xhbnQtZ3JpZC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta2xhbnQtZ3JpZC9ndy1rbGFudC1ncmlkLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDYwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWtsYW50LWdyaWQvZ3cta2xhbnQtZ3JpZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2MDVcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBHZW5lcmFsU2NyaXB0cyB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL2dlbmVyYWwuc2NyaXB0c1wiO1xyXG5pbXBvcnQgeyBUb2FzdHJTZXJ2aWNlIH0gZnJvbSBcIm5neC10b2FzdHJcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBIdHRwS2xhbnRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2h0dHAta2xhbnQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBhcHBMYWJlbHMgfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9hcHBMYWJlbHNcIjtcclxuaW1wb3J0IHsgRGF0YXRhYmxlQ29tcG9uZW50IH0gZnJvbSBcIkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSwgVXNlclJvbGVzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IElTZ3NLbGFudFdpanppZ2luZyB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL3Nnc0ludGVyZmFjZXMuc2NyaXB0c1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJndy1rbGFudHdpanotZ3JpZFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZ3cta2xhbnR3aWp6LWdyaWQuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vZ3cta2xhbnR3aWp6LWdyaWQuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIGd3S2xhbnRXaWp6R3JpZENvbXBvbmVudCBleHRlbmRzIEdlbmVyYWxTY3JpcHRzIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGFwcExhYmVscyA9IGFwcExhYmVscztcclxuXHJcbiAgICBTdGF0dXNMaXN0OiBJU2dzS2xhbnRXaWp6aWdpbmdbXSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHJvd3M6IElTZ3NLbGFudFdpanppZ2luZ1tdID0gbnVsbDtcclxuICAgIHRlbXA6IGFueVtdID0gW107XHJcbiAgICBAVmlld0NoaWxkKERhdGF0YWJsZUNvbXBvbmVudCkgdGFibGU6IERhdGF0YWJsZUNvbXBvbmVudDtcclxuXHJcbiAgICBpc0dXVXNlcjogYm9vbGVhbiB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIFN0c0Zvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF90b2FzdHI6IFRvYXN0clNlcnZpY2UsIHByaXZhdGUgcmVhZG9ubHkgZmI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHJlYWRvbmx5IGh0dHBLbGFudDogSHR0cEtsYW50U2VydmljZSwgcHJpdmF0ZSByZWFkb25seSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByZWFkb25seSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcmVhZG9ubHkgYXV0aDogQXV0aGVudGljYXRpb25TZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIoX3RvYXN0cik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuU3RzRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBzdHM6IFstMV0sXHJcbiAgICAgICAgICAgIGtsYW50SWQ6IFtcIlwiXSxcclxuICAgICAgICAgICAgYW5hYW06IFtcIlwiXSxcclxuICAgICAgICAgICAgdm5hYW06IFtcIlwiXSxcclxuICAgICAgICAgICAgcGNvZGU6IFtcIlwiXSxcclxuICAgICAgICAgICAgcGxhYXRzOiBbXCJcIl1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hdXRoLmdldFJvbGUoKS50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbigocm9sZTogVXNlclJvbGVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzR1dVc2VyID0gKHJvbGUgIT09IFVzZXJSb2xlcy5LbGFudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRTdGF0dXNMaXN0KCk7XHJcbiAgICAgICAgICAgIH0pOyAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlcigpIHtcclxuICAgICAgICBjb25zdCBrbGFudElkID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLmtsYW50SWQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgYW5hYW0gPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuYW5hYW0udmFsdWU7XHJcbiAgICAgICAgY29uc3Qgdm5hYW0gPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMudm5hYW0udmFsdWU7XHJcbiAgICAgICAgY29uc3QgcGNvZGUgPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMucGNvZGUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgcGxhYXRzID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLnBsYWF0cy52YWx1ZTtcclxuXHJcbiAgICAgICAgLy8gZmlsdGVyIG91ciBkYXRhXHJcbiAgICAgICAgY29uc3QgdGVtcCA9IHRoaXMudGVtcC5maWx0ZXIoKHJvdzogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoIWtsYW50SWQgfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHJvdy5rbGFudElEKSAmJiByb3cua2xhbnRJRC50b1N0cmluZygpLmluZGV4T2Yoa2xhbnRJZCkgIT09IC0xKSlcclxuICAgICAgICAgICAgICAgICYmICghYW5hYW0gfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHJvdy5hY2h0ZXJuYWFtKSAmJiByb3cuYWNodGVybmFhbS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoYW5hYW0pICE9PSAtMSkpXHJcbiAgICAgICAgICAgICAgICAmJiAoIXZuYWFtIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChyb3cudm9vcm5hYW0pICYmIHJvdy52b29ybmFhbS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yodm5hYW0pICE9PSAtMSkpXHJcbiAgICAgICAgICAgICAgICAmJiAoIXBjb2RlIHx8ICghdGhpcy5pc051bGxPclVuZGVmaW5lZChyb3cucG9zdGNvZGUpICYmIHJvdy5wb3N0Y29kZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YocGNvZGUpICE9PSAtMSkpXHJcbiAgICAgICAgICAgICAgICAmJiAoIXBsYWF0cyB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQocm93LnBsYWF0cykgJiYgcm93LnBsYWF0cy50b0xvd2VyQ2FzZSgpLmluZGV4T2YocGxhYXRzKSAhPT0gLTEpKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgdGhlIHJvd3NcclxuICAgICAgICB0aGlzLnJvd3MgPSB0ZW1wO1xyXG4gICAgICAgIC8vIFdoZW5ldmVyIHRoZSBmaWx0ZXIgY2hhbmdlcywgYWx3YXlzIGdvIGJhY2sgdG8gdGhlIGZpcnN0IHBhZ2VcclxuICAgICAgICB0aGlzLnRhYmxlLm9mZnNldCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy9sb2FkU3RhdHVzKHR5cGU6IHN0cmluZykge1xyXG4gICAgLy8gICAgdGhpcy5odHRwQkJSLlN0YXR1c0RlZmluaXRpb25MaXN0KHRoaXMuVHlwZSkudG9Qcm9taXNlKClcclxuICAgIC8vICAgICAgICAudGhlbigobHN0OiBJQkJSU3RhdHVzW10pID0+IHtcclxuICAgIC8vICAgICAgICAgICAgaWYgKGxzdCAhPSBudWxsICYmIGxzdCAhPSB1bmRlZmluZWQpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgIHRoaXMuU3RhdHVzTGlzdCA9IFsuLi5sc3RdO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNDaGFuZ2VkKCk7XHJcbiAgICAvLyAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICB9KTtcclxuICAgIC8vfVxyXG5cclxuICAgIGxvYWRTdGF0dXNMaXN0KCkge1xyXG4gICAgICAgIHRoaXMuaHR0cEtsYW50LnNnc1VuaGFuZGxlZFdpanppZ2luZ2VuKCkudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKGxzdDogSVNnc0tsYW50V2lqemlnaW5nW10pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IGxzdDtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcCA9IFsuLi5sc3RdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkFjdGl2YXRlKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJkYmxjbGlja1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlua1RvS2xhbnRXaWp6KGV2ZW50LnJvd1tcImlkXCJdLCBldmVudC5yb3dbXCJrbGFudElEXCJdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Um93Q2xhc3Mocm93OiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gXCJpYnRuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgbGlua1RvS2xhbnQoa2xhbnRJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3RlY2huaXNjaC12ZXJzbGFnLWRldGFpbFwiLCB0dklkXSk7ICBHV0JlaGVlci9LbGFudEVkaXQuYXNweD9LbGFudElEPXswfVxyXG4gICAgfVxyXG5cclxuICAgIGxpbmtUb0tsYW50V2lqeihJZDogbnVtYmVyLCBrbGFudElkOiBudW1iZXIpIHtcclxuICAgICAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvdGVjaG5pc2NoLXZlcnNsYWctZGV0YWlsXCIsIHR2SWRdKTsgIC8vIEdXQmVoZWVyL0tsYW50V2lqemlnaW5nZW5PdmVyemljaHQuYXNweD9SZWNJRD17MH0mS2xhbnRJRD17MX1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItcm91dGVyLWxvYWRlci9zcmMhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWtsYW50d2lqei1ncmlkL2d3LWtsYW50d2lqei1ncmlkLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybSBbZm9ybUdyb3VwXT1cXFwiU3RzRm9ybVxcXCIgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZCBwYWRkaW5nVG9wMTBweFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgKm5nSWY9XFxcImlzR1dVc2VyICE9IG51bGxcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJOZ3hUYWJsZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlICN0YWJsZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYm9vdHN0cmFwXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYWN0aXZhdGUpPVxcXCJvbkFjdGl2YXRlKCRldmVudClcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3dzXT1cXFwicm93c1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbHVtbk1vZGVdPVxcXCInZmxleCdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtoZWFkZXJIZWlnaHRdPVxcXCI1MFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zvb3RlckhlaWdodF09XFxcIjQwXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGltaXRdPVxcXCJhcHBMYWJlbHMudGFibGVWaWV3Um93c1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jvd0NsYXNzXT1cXFwiZ2V0Um93Q2xhc3NcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjc3NDbGFzc2VzXT1cXFwiYXBwTGFiZWxzLmljb25zQ3NzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWVzc2FnZXNdPVxcXCJ7dG90YWxNZXNzYWdlOiBhcHBMYWJlbHMuVG90YWwudG9Mb3dlckNhc2UoKSwgZW1wdHlNZXNzYWdlOiBhcHBMYWJlbHMuTm9EYXRhVG9EaXNwbGF5fVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NvcnRzXT1cXFwiW3twcm9wOidpZCcsIGRpcjonZGVzYycgfV1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3dIZWlnaHRdPVxcXCInYXV0bydcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIHByb3A9XFxcImlkXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIiBoaWRkZW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1yb3c9XFxcInJvd1xcXCIgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3ZhbHVlfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBwcm9wPVxcXCJrbGFudElEXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyTGFiZWxcXFwiPktsYW50IElEPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImtsYW50SWRcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXJvdz1cXFwicm93XFxcIiBsZXQtdmFsdWU9XFxcInZhbHVlXFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFtyb3V0ZXJMaW5rXT1cXFwiXFxcIiAoY2xpY2spPVxcXCJsaW5rVG9rbGFudChyb3dbJ2tsYW50SUQnXSlcXFwiPjxzcGFuPnt7cm93WydrbGFudElEJ119fTwvc3Bhbj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMlxcXCIgcHJvcD1cXFwiYWNodGVybmFhbVxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckxhYmVsXFxcIj5BY2h0ZXJuYWFtPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImFuYWFtXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC12YWx1ZT1cXFwidmFsdWVcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3t2YWx1ZX19PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjJcXFwiIHByb3A9XFxcInZvb3JuYWFtXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCIgTmd4RmlsdGVyTGFiZWxcXFwiPlZvb3JuYWFtPC9zcGFuPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcInZuYWFtXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjJcXFwiIHByb3A9XFxcInBvc3Rjb2RlXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCIgTmd4RmlsdGVyTGFiZWxcXFwiPlBvc3Rjb2RlPC9zcGFuPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcInBjb2RlXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjJcXFwiIHByb3A9XFxcInBsYWF0c1xcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiIE5neEZpbHRlckxhYmVsXFxcIj5QbGFhdHM8L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwicGxhYXRzXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIG5hbWU9XFxcIkRldGFpbFxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXJvdz1cXFwicm93XFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9pbWFnZXMvaWNvX2VkaXRyZWNvcmQuZ2lmXCIpICsgXCJcXFwiIGNsYXNzPVxcXCJpYnRuXFxcIiAoY2xpY2spPVxcXCJsaW5rVG9LbGFudFdpanoocm93WydpZCddLCByb3dbJ2tsYW50SUQnXSlcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG48L2Zvcm0+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWtsYW50d2lqei1ncmlkL2d3LWtsYW50d2lqei1ncmlkLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA2MDdcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2d3LWtsYW50d2lqei1ncmlkLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rbGFudHdpanotZ3JpZC9ndy1rbGFudHdpanotZ3JpZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2MDhcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rbGFudHdpanotZ3JpZC9ndy1rbGFudHdpanotZ3JpZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2MDlcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24sIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBUb2FzdHJTZXJ2aWNlIH0gZnJvbSBcIm5neC10b2FzdHJcIjtcclxuXHJcbmltcG9ydCB7IGFwcExhYmVscyB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL2FwcExhYmVsc1wiO1xyXG5pbXBvcnQgeyBHZW5lcmFsU2NyaXB0cyB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL2dlbmVyYWwuc2NyaXB0c1wiO1xyXG5cclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHsgSHR0cEtsYW50U2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9odHRwLWtsYW50LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTZ3NLbGFudFpvZWtWZWxkZW4gfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9zZ3NDbGFzc2VzLnNjcmlwdHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiZ3cta2xhbnQtem9la3VpdGdlYnJlaWRcIixcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2d3LWtsYW50LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2d3LWtsYW50LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5jc3MnKV0sXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBnd0tsYW50Wm9la1VpdGdlYnJlaWRDb21wb25lbnQgZXh0ZW5kcyBHZW5lcmFsU2NyaXB0cyBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBhcHBMYWJlbHMgPSBhcHBMYWJlbHM7XHJcbiAgICB6a0Zvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgICBiZXN0QmVkcmlqZkxpc3Q6IGFueVtdO1xyXG4gICAgem9la1ZlbGRlbjogU2dzS2xhbnRab2VrVmVsZGVuID0gbnVsbDtcclxuXHJcbiAgICBAT3V0cHV0KCkgc2VhcmNoaW5nOiBFdmVudEVtaXR0ZXI8U2dzS2xhbnRab2VrVmVsZGVuPiA9IG5ldyBFdmVudEVtaXR0ZXI8U2dzS2xhbnRab2VrVmVsZGVuPigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX3RvYXN0cjogVG9hc3RyU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGZiOiBGb3JtQnVpbGRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgaHR0cEtsYW50OiBIdHRwS2xhbnRTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgQEluamVjdChcIkJBU0VfVVJMXCIpIHByaXZhdGUgcmVhZG9ubHkgX2Jhc2VVcmw6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcclxuICAgICAgICBzdXBlcihfdG9hc3RyKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnprRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBLbGFudElkOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIE9yZ2FuaXNhdGllOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIFZvb3JuYWFtOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIEFjaHRlcm5hYW06IFtcIlwiXSxcclxuICAgICAgICAgICAgU3RyYWF0OiBbXCJcIl0sXHJcbiAgICAgICAgICAgIEdlbWVlbnRlOiBbXCJcIl1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByYWlzZVNlYXJjaCgpIHtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4gPSBuZXcgU2dzS2xhbnRab2VrVmVsZGVuKCk7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmtsYW50SWQgPSB0aGlzLnprRm9ybS5jb250cm9scy5LbGFudElkLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5vcmdhbmlzYXRpZSA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLk9yZ2FuaXNhdGllLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi52b29ybmFhbSA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLlZvb3JuYWFtLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5hY2h0ZXJuYWFtID0gdGhpcy56a0Zvcm0uY29udHJvbHMuQWNodGVybmFhbS52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4uc3RyYWF0ID0gdGhpcy56a0Zvcm0uY29udHJvbHMuU3RyYWF0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5nZW1lZW50ZSA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLkdlbWVlbnRlLnZhbHVlO1xyXG5cclxuICAgICAgICB0aGlzLnNlYXJjaGluZy5lbWl0KHRoaXMuem9la1ZlbGRlbik7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXJvdXRlci1sb2FkZXIvc3JjIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rbGFudC16b2VrdWl0Z2VicmVpZC9ndy1rbGFudC16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gW2Zvcm1Hcm91cF09XFxcInprRm9ybVxcXCIgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZCBwYWRkaW5nVG9wMzBweFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48bGFiZWwgZm9yPVxcXCJ0eHRLbGFudElkXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+S2xhbnQgSWQ6PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0eHRLbGFudElkXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIktsYW50SWRcXFwiIEFsbG93T25seU51bWJlcnMgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxsYWJlbCBmb3I9XFxcInR4dE9yZ2FuaXNhdGllXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+T3JnYW5pc2F0aWU6PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0eHRPcmdhbmlzYXRpZVxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJPcmdhbmlzYXRpZVxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxsYWJlbCBmb3I9XFxcInR4dFZvb3JuYWFtXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+Vm9vcm5hYW06PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0eHRWb29ybmFhbVxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJWb29ybmFhbVxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxsYWJlbCBmb3I9XFxcInR4dEFjaHRlcm5hYW1cXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5BY2h0ZXJuYWFtOjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLThcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwidHh0QWNodGVybmFhbVxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJBY2h0ZXJuYWFtXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+PGxhYmVsIGZvcj1cXFwidHh0U3RyYWF0XFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+U3RyYWF0OjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLThcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwidHh0U3RyYWF0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIlN0cmFhdFxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxsYWJlbCBmb3I9XFxcInR4dEdlbWVlbnRlXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+R2VtZWVudGU6PC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOFxcXCI+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ0eHRHZW1lZW50ZVxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJHZW1lZW50ZVxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTggY29sLXNtLW9mZnNldC00XFxcIj48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwicmFpc2VTZWFyY2goKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCI+e3thcHBMYWJlbHMuU2VuZH19PC9idXR0b24+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9mb3JtPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rbGFudC16b2VrdWl0Z2VicmVpZC9ndy1rbGFudC16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNjExXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ndy1rbGFudC16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta2xhbnQtem9la3VpdGdlYnJlaWQvZ3cta2xhbnQtem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNjEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta2xhbnQtem9la3VpdGdlYnJlaWQvZ3cta2xhbnQtem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNjEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgR2VuZXJhbFNjcmlwdHMgfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9nZW5lcmFsLnNjcmlwdHNcIjtcclxuaW1wb3J0IHsgVG9hc3RyU2VydmljZSB9IGZyb20gXCJuZ3gtdG9hc3RyXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgSHR0cEtsZWluZVdlcnZlblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaHR0cC1rbGVpbmV3ZXJ2ZW4uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBhcHBMYWJlbHMgfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9hcHBMYWJlbHNcIjtcclxuaW1wb3J0IHsgRGF0YXRhYmxlQ29tcG9uZW50IH0gZnJvbSBcIkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSUtXR3JpZEl0ZW0gfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9pbnRlcmZhY2VzLnNjcmlwdHNcIjtcclxuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFNnc0tXWm9la1ZlbGRlbiB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL3Nnc0NsYXNzZXMuc2NyaXB0c1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJndy1rdy1ncmlkXCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ndy1rdy1ncmlkLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2d3LWt3LWdyaWQuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIGd3S1dHcmlkQ29tcG9uZW50IGV4dGVuZHMgR2VuZXJhbFNjcmlwdHMgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgYXBwTGFiZWxzID0gYXBwTGFiZWxzO1xyXG5cclxuICAgIHN0YXR1c0Ryb3Bkb3duTGlzdDogYW55W107XHJcbiAgICBzdGF0dXNMaXN0OiBJS1dHcmlkSXRlbVtdO1xyXG4gICAgcm93czogSUtXR3JpZEl0ZW1bXSA9IFtdO1xyXG4gICAgdGVtcDogSUtXR3JpZEl0ZW1bXSA9IFtdO1xyXG4gICAgQFZpZXdDaGlsZChEYXRhdGFibGVDb21wb25lbnQpIGdyaWQ6IERhdGF0YWJsZUNvbXBvbmVudDtcclxuXHJcbiAgICBASW5wdXQoKSB0aXRsZSA9IFwiXCI7XHJcbiAgICBTdGF0dXNJZDogbnVtYmVyID0gLTE7XHJcbiAgICBpc0V4dGVuZGVkU2VhcmNoOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgZm9yTmlldXdlQWFudnJhZ2VuID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgnTmlldXdlQWFudnJhZ2VuJylcclxuICAgIGdldCBOaWV1d2VBYW52cmFnZW4oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9yTmlldXdlQWFudnJhZ2VuO1xyXG4gICAgfVxyXG4gICAgc2V0IE5pZXV3ZUFhbnZyYWdlbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuZm9yTmlldXdlQWFudnJhZ2VuID0gXCJcIiArIHZhbHVlICE9PSBcImZhbHNlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlU2VhcmNoID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgnRXh0ZW5kZWRTZWFyY2gnKVxyXG4gICAgZ2V0IEV4dGVuZGVkU2VhcmNoKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVzZVNlYXJjaDtcclxuICAgIH1cclxuICAgIHNldCBFeHRlbmRlZFNlYXJjaCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMudXNlU2VhcmNoID0gXCJcIiArIHZhbHVlICE9PSBcImZhbHNlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgY2FuRGVsZXRlID0gZmFsc2U7XHJcbiAgICBASW5wdXQoJ0FsbG93RGVsZXRlJylcclxuICAgIGdldCBBbGxvd0RlbGV0ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYW5EZWxldGU7XHJcbiAgICB9XHJcbiAgICBzZXQgQWxsb3dEZWxldGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmNhbkRlbGV0ZSA9IFwiXCIgKyB2YWx1ZSAhPT0gXCJmYWxzZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXR1c0Zvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHRvYXN0cjogVG9hc3RyU2VydmljZSwgcHJpdmF0ZSByZWFkb25seSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByZWFkb25seSBmYjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgcmVhZG9ubHkga3dTZXJ2aWNlOiBIdHRwS2xlaW5lV2VydmVuU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKHRvYXN0cik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICAgICAgIHN0czogW1wiLTFcIl0sXHJcbiAgICAgICAgICAgIElEOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIFN0YXR1c0lEOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIFJlZjogW1wiXCJdLFxyXG4gICAgICAgICAgICBHVzogW1wiXCJdLFxyXG4gICAgICAgICAgICBUUFQ6IFtcIlwiXSxcclxuICAgICAgICAgICAgSGVyazogW1wiXCJdLFxyXG4gICAgICAgICAgICBCZXN0OiBbXCJcIl0sXHJcbiAgICAgICAgICAgIER0bTogW1wiXCJdLFxyXG4gICAgICAgICAgICBTdGF0dXM6IFtcIlwiXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmt3U2VydmljZS5nZXRTdGF0dXNMaXN0KClcclxuICAgICAgICAgICAgLnRoZW4oKGxzdDogYW55W10pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChsc3QgIT0gbnVsbCAmJiBsc3QgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNEcm9wZG93bkxpc3QgPSBbLi4ubHN0XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzRm9ybS5wYXRjaFZhbHVlKHsgc3RzOiAodGhpcy5OaWV1d2VBYW52cmFnZW4gPyAnMCcgOiAnLTEnKSB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzQ2hhbmdlZCgpO1xyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdHVzQ2hhbmdlZCgpIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdHVzRm9ybS5jb250cm9scy5zdHMudmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIi0xXCI6IC8vIFNlbGVjdGVlclxyXG4gICAgICAgICAgICAgICAgdGhpcy5TdGF0dXNJZCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXAgPSBbXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAvLyBTdGF0dXNcclxuICAgICAgICAgICAgICAgIHRoaXMuU3RhdHVzSWQgPSB0aGlzLnN0YXR1c0Zvcm0uY29udHJvbHMuc3RzLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU3RhdHVzTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRTdGF0dXNMaXN0KCkge1xyXG4gICAgICAgIHRoaXMua3dTZXJ2aWNlLmd3TWVsZGluZ0xpc3RCeVN0YXR1cyh0aGlzLlN0YXR1c0lkKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YTogSUtXR3JpZEl0ZW1bXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wID0gWy4uLmRhdGFdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJGb3JtRmllbGRzKCk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckZvcm1GaWVsZHMoKSB7XHJcbiAgICAgICAgLy8gQ2xlYXIgYWxsIEZvcm0gVmFsdWVzIGV4Y2VwdCBzdHNcclxuICAgICAgICB0aGlzLnN0YXR1c0Zvcm0ucGF0Y2hWYWx1ZSh7XHJcbiAgICAgICAgICAgIElEOiBcIlwiLFxyXG4gICAgICAgICAgICBTdGF0dXNJRDogXCJcIixcclxuICAgICAgICAgICAgUmVmOiBcIlwiLFxyXG4gICAgICAgICAgICBHVzogXCJcIixcclxuICAgICAgICAgICAgVFBUOiBcIlwiLFxyXG4gICAgICAgICAgICBIZXJrOiBcIlwiLFxyXG4gICAgICAgICAgICBCZXN0OiBcIlwiLFxyXG4gICAgICAgICAgICBEdG06IFwiXCIsXHJcbiAgICAgICAgICAgIFN0YXR1czogXCJcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIFRvZ2dsZUV4dGVuZGVkU2VhcmNoKCkge1xyXG4gICAgICAgIHRoaXMuaXNFeHRlbmRlZFNlYXJjaCA9ICF0aGlzLmlzRXh0ZW5kZWRTZWFyY2g7XHJcbiAgICB9XHJcblxyXG4gICAgb25FeHRlbmRlZFNlYXJjaCh6b2VrVmVsZGVuOiBTZ3NLV1pvZWtWZWxkZW4pIHtcclxuICAgICAgICB0aGlzLmt3U2VydmljZS5nd1pvZWtMaXN0KHpvZWtWZWxkZW4pLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKChsc3Q6IElLV0dyaWRJdGVtW10pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IGxzdDtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcCA9IFsuLi5sc3RdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckZvcm1GaWVsZHMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5zdGF0dXNGb3JtLmNvbnRyb2xzLklELnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHJlZiA9IHRoaXMuc3RhdHVzRm9ybS5jb250cm9scy5SZWYudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBndyA9IHRoaXMuc3RhdHVzRm9ybS5jb250cm9scy5HVy52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IHRwdCA9IHRoaXMuc3RhdHVzRm9ybS5jb250cm9scy5UUFQudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBoZXJrID0gdGhpcy5zdGF0dXNGb3JtLmNvbnRyb2xzLkhlcmsudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBiZXN0ID0gdGhpcy5zdGF0dXNGb3JtLmNvbnRyb2xzLkJlc3QudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBkdG0gPSB0aGlzLnN0YXR1c0Zvcm0uY29udHJvbHMuRHRtLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IHRoaXMuc3RhdHVzRm9ybS5jb250cm9scy5TdGF0dXMudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBkcCA9IG5ldyBEYXRlUGlwZShcImVuLVVTXCIpO1xyXG5cclxuICAgICAgICAvLyBmaWx0ZXIgb3VyIGRhdGFcclxuICAgICAgICBjb25zdCB0ZW1wID0gdGhpcy50ZW1wLmZpbHRlcihmdW5jdGlvbiAoZDogSUtXR3JpZEl0ZW0pIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBTRHRtOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKGR0bSA+IFwiXCIpIHsgU0R0bSA9IGRwLnRyYW5zZm9ybShkLnN0YXJ0RGF0dW0sIFwiZGQvTU0veXl5eVwiKTsgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuICgoZC5tZWxkaW5nSUQgIT0gbnVsbCAmJiBkLm1lbGRpbmdJRCAhPSB1bmRlZmluZWQgJiYgZC5tZWxkaW5nSUQudG9TdHJpbmcoKS5pbmRleE9mKGlkKSAhPT0gLTEpIHx8ICFpZClcclxuICAgICAgICAgICAgICAgICYmICgoZC5rbGFudFJlZmVyZW50aWUgIT0gbnVsbCAmJiBkLmtsYW50UmVmZXJlbnRpZSAhPSB1bmRlZmluZWQgJiYgZC5rbGFudFJlZmVyZW50aWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHJlZikgIT09IC0xKSB8fCAhcmVmKVxyXG4gICAgICAgICAgICAgICAgJiYgKChkLmdyb25kd2Vya2VyICE9IG51bGwgJiYgZC5ncm9uZHdlcmtlciAhPSB1bmRlZmluZWQgJiYgZC5ncm9uZHdlcmtlci50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZ3cpICE9PSAtMSkgfHwgIWd3KVxyXG4gICAgICAgICAgICAgICAgJiYgKChkLnRyYW5zcG9ydGV1ciAhPSBudWxsICYmIGQudHJhbnNwb3J0ZXVyICE9IHVuZGVmaW5lZCAmJiBkLnRyYW5zcG9ydGV1ci50b0xvd2VyQ2FzZSgpLmluZGV4T2YodHB0KSAhPT0gLTEpIHx8ICF0cHQpXHJcbiAgICAgICAgICAgICAgICAmJiAoKGQuaGVya29tc3QgIT0gbnVsbCAmJiBkLmhlcmtvbXN0ICE9IHVuZGVmaW5lZCAmJiBkLmhlcmtvbXN0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihoZXJrKSAhPT0gLTEpIHx8ICFoZXJrKVxyXG4gICAgICAgICAgICAgICAgJiYgKChkLmJlc3RlbW1pbmcgIT0gbnVsbCAmJiBkLmJlc3RlbW1pbmcgIT0gdW5kZWZpbmVkICYmIGQuYmVzdGVtbWluZy50b0xvd2VyQ2FzZSgpLmluZGV4T2YoYmVzdCkgIT09IC0xKSB8fCAhYmVzdClcclxuICAgICAgICAgICAgICAgICYmICgoZC5zdGF0dXMgIT0gbnVsbCAmJiBkLnN0YXR1cyAhPSB1bmRlZmluZWQgJiYgZC5zdGF0dXMudG9Mb3dlckNhc2UoKS5pbmRleE9mKHN0YXR1cykgIT09IC0xKSB8fCAhc3RhdHVzKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFkdG0gfHwgKFNEdG0gIT0gbnVsbCAmJiBTRHRtLmluZGV4T2YoZHRtKSAhPT0gLTEpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIHRoZSByb3dzXHJcbiAgICAgICAgdGhpcy5yb3dzID0gdGVtcDtcclxuICAgICAgICAvLyBXaGVuZXZlciB0aGUgZmlsdGVyIGNoYW5nZXMsIGFsd2F5cyBnbyBiYWNrIHRvIHRoZSBmaXJzdCBwYWdlXHJcbiAgICAgICAgdGhpcy5ncmlkLm9mZnNldCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgb25BY3RpdmF0ZShldmVudDogYW55KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IFwiZGJsY2xpY2tcIikge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmtUb0tXKGV2ZW50LnJvd1tcIm1lbGRpbmdJRFwiXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxpbmtUb0tXKGlkOiBudW1iZXIpIHtcclxuICAgICAgIC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9rbGVpbmV3ZXJ2ZW4tZGV0YWlsXCIsIGlkXSk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2d3L2t3LWVkaXRcIiwgaWRdKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItcm91dGVyLWxvYWRlci9zcmMhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWt3LWdyaWQvZ3cta3ctZ3JpZC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gW2Zvcm1Hcm91cF09XFxcInN0YXR1c0Zvcm1cXFwiIGNsYXNzPVxcXCJjb250YWluZXItZmx1aWQgcGFkZGluZ1RvcDEwcHhcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0lmPVxcXCJ1c2VTZWFyY2hcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTNcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiAoY2xpY2spPVxcXCJUb2dnbGVFeHRlbmRlZFNlYXJjaCgpXFxcIj57eyBpc0V4dGVuZGVkU2VhcmNoID8gJ0Vua2Vsdm91ZGlnIHpvZWtlbicgOiAnR2VhdmFuY2VlcmQgem9la2VuJyB9fTwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJ1c2VTZWFyY2ggJiYgIWlzRXh0ZW5kZWRTZWFyY2hcXFwiIGNsYXNzPVxcXCJjb2wtc20tOVxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJwYWRkaW5nUmlnaHQxMHB4XFxcIj5GaWx0ZXIgc3RhdHVzPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8c2VsZWN0IGZvcm1Db250cm9sTmFtZT1cXFwic3RzXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyAoY2hhbmdlKT1cXFwic3RhdHVzQ2hhbmdlZCgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiLTFcXFwiPlNlbGVjdGVlcjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IHN0cyBvZiBzdGF0dXNEcm9wZG93bkxpc3RcXFwiIFt2YWx1ZV09XFxcInN0cy5pZFxcXCIgW2lubmVySFRNTF09XFxcInN0cy5zdGF0dXNcXFwiPjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0lmPVxcXCJ1c2VTZWFyY2ggJiYgaXNFeHRlbmRlZFNlYXJjaFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTJcXFwiPjxndy1rdy16b2VrdWl0Z2VicmVpZCAoc2VhcmNoaW5nKT1cXFwib25FeHRlbmRlZFNlYXJjaCgkZXZlbnQpXFxcIj48L2d3LWt3LXpvZWt1aXRnZWJyZWlkPjwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiTmd4VGFibGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZSAjdGFibGVcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJvb3RzdHJhcFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFjdGl2YXRlKT1cXFwib25BY3RpdmF0ZSgkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm93c109XFxcInJvd3NcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb2x1bW5Nb2RlXT1cXFwiJ2ZsZXgnXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaGVhZGVySGVpZ2h0XT1cXFwiNTBcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb290ZXJIZWlnaHRdPVxcXCI0MFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xpbWl0XT1cXFwiYXBwTGFiZWxzLnRhYmxlVmlld1Jvd3NcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjc3NDbGFzc2VzXT1cXFwiYXBwTGFiZWxzLmljb25zQ3NzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWVzc2FnZXNdPVxcXCJ7dG90YWxNZXNzYWdlOiBhcHBMYWJlbHMuVG90YWwudG9Mb3dlckNhc2UoKSwgZW1wdHlNZXNzYWdlOiBhcHBMYWJlbHMuTm9EYXRhVG9EaXNwbGF5fVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NvcnRzXT1cXFwiW3twcm9wOidJRCcsIGRpcjonZGVzYycgfV1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3dIZWlnaHRdPVxcXCInYXV0bydcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIHByb3A9XFxcIm1lbGRpbmdJRFxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckxhYmVsXFxcIj5OdW1tZXI8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiSURcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXJvdz1cXFwicm93XFxcIiBsZXQtdmFsdWU9XFxcInZhbHVlXFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFtyb3V0ZXJMaW5rXT1cXFwiXFxcIiAoY2xpY2spPVxcXCJsaW5rVG9LVyhyb3dbJ21lbGRpbmdJRCddKVxcXCI+PHNwYW4+e3tyb3dbJ21lbGRpbmdJRCddfX08L3NwYW4+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIHByb3A9XFxcImtsYW50UmVmZXJlbnRpZVxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckxhYmVsXFxcIj5SZWZlcmVudGllPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIlJlZlxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIzXFxcIiBwcm9wPVxcXCJncm9uZHdlcmtlclxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckxhYmVsXFxcIj5Hcm9uZHdlcmtlcjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJHV1xcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIzXFxcIiBwcm9wPVxcXCJ0cmFuc3BvcnRldXJcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJMYWJlbFxcXCI+VHJhbnNwb3J0ZXVyPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIlRQVFxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIzXFxcIiBwcm9wPVxcXCJoZXJrb21zdFxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckxhYmVsXFxcIj5IZXJrb21zdDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJIZXJrXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjNcXFwiIHByb3A9XFxcImJlc3RlbW1pbmdcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJMYWJlbFxcXCI+QmVzdGVtbWluZzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJCZXN0XFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIG5hbWU9XFxcInN0YXJ0RGF0dW1cXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIiBOZ3hGaWx0ZXJMYWJlbFxcXCI+U3RhcnREYXR1bTwvc3Bhbj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJEdG1cXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3ZhbHVlIHwgZGF0ZTpcXFwiZGQvTU0veXl5eVxcXCJ9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIHByb3A9XFxcInN0YXR1c1xcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckxhYmVsXFxcIj5TdGF0dXM8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiU3RhdHVzXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIG5hbWU9XFxcIkRldGFpbFxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXJvdz1cXFwicm93XFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9pbWFnZXMvaWNvX2VkaXRyZWNvcmQuZ2lmXCIpICsgXCJcXFwiIGNsYXNzPVxcXCJpYnRuXFxcIiAoY2xpY2spPVxcXCJsaW5rVG9LVyhyb3dbJ21lbGRpbmdJRCddKVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbjwvZm9ybT5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3cta3ctZ3JpZC9ndy1rdy1ncmlkLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA2MTVcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2d3LWt3LWdyaWQuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWt3LWdyaWQvZ3cta3ctZ3JpZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2MTZcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rdy1ncmlkL2d3LWt3LWdyaWQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNjE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVG9hc3RyU2VydmljZSB9IGZyb20gXCJuZ3gtdG9hc3RyXCI7XHJcblxyXG5pbXBvcnQgeyBhcHBMYWJlbHMgfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9hcHBMYWJlbHNcIjtcclxuaW1wb3J0IHsgR2VuZXJhbFNjcmlwdHMgfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9nZW5lcmFsLnNjcmlwdHNcIjtcclxuXHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7IEh0dHBEb3NzaWVyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9odHRwLWRvc3NpZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIdHRwS2xhbnRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2h0dHAta2xhbnQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIdHRwVFZTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2h0dHAtdHYuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEJzTG9jYWxlU2VydmljZSB9IGZyb20gXCJuZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXJcIjtcclxuaW1wb3J0IHsgU2dzS1dab2VrVmVsZGVuIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvc2dzQ2xhc3Nlcy5zY3JpcHRzXCI7XHJcbmltcG9ydCB7IElTZ3NLbGFudENvbWJvTGlzdEl0ZW0sIElTZ3NEb3NzaWVyQ29tYm9MaXN0SXRlbSB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL3Nnc0ludGVyZmFjZXMuc2NyaXB0c1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJndy1rdy16b2VrdWl0Z2VicmVpZFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZ3cta3ctem9la3VpdGdlYnJlaWQuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vZ3cta3ctem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzcycpXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIGd3S1dab2VrVWl0Z2VicmVpZENvbXBvbmVudCBleHRlbmRzIEdlbmVyYWxTY3JpcHRzIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGFwcExhYmVscyA9IGFwcExhYmVscztcclxuICAgIHprRm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICAgIEluZGllbmVyTGlzdEl0ZW1zOiBJU2dzS2xhbnRDb21ib0xpc3RJdGVtW10gPSBudWxsO1xyXG4gICAgRG9zc2llckJlaGVlcmRlckxpc3RJdGVtczogSVNnc0Rvc3NpZXJDb21ib0xpc3RJdGVtW10gPSBudWxsO1xyXG5cclxuICAgIHpvZWtWZWxkZW46IFNnc0tXWm9la1ZlbGRlbiA9IG51bGw7XHJcblxyXG4gICAgQE91dHB1dCgpIHNlYXJjaGluZzogRXZlbnRFbWl0dGVyPFNnc0tXWm9la1ZlbGRlbj4gPSBuZXcgRXZlbnRFbWl0dGVyPFNnc0tXWm9la1ZlbGRlbj4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF90b2FzdHI6IFRvYXN0clNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9sb2NhbGVTZXJ2aWNlOiBCc0xvY2FsZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGh0dHBEb3NzaWVyOiBIdHRwRG9zc2llclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGh0dHBLbGFudDogSHR0cEtsYW50U2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgaHR0cFRWOiBIdHRwVFZTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgQEluamVjdChcIkJBU0VfVVJMXCIpIHByaXZhdGUgcmVhZG9ubHkgX2Jhc2VVcmw6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcclxuICAgICAgICBzdXBlcihfdG9hc3RyKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBOZWVkZWQgY29uZmlndXJhdGlvbiBmb3IgdGhlIGJzRGF0ZXBpY2tlciB0byBhY2NlcHQgZGQvTU0veXl5eSBmb3JtYXR0aW5nXHJcbiAgICAgICAgdGhpcy5fbG9jYWxlU2VydmljZS51c2UoXCJib290c3RyYXAtbG9jYWxlLW5sYmVcIik7XHJcblxyXG4gICAgICAgIHRoaXMuemtGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICAgICAgIENvZGU6IFtcIlwiXSxcclxuICAgICAgICAgICAgSW5kaWVuZXI6IFtcIi0xXCJdLFxyXG4gICAgICAgICAgICBWZXJrbGFyaW5nT250dmFuZ2VuOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIFJlZmVyZW50aWU6IFtcIlwiXSxcclxuICAgICAgICAgICAgRG9zc2llckJlaGVlcmRlcjogW1wiLTFcIl1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkRHJvcGRvd25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZERyb3Bkb3ducygpIHtcclxuICAgICAgICB0aGlzLmh0dHBLbGFudC5zZ3NDb21ib0xpc3RJdGVtcygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGxzdDogSVNnc0tsYW50Q29tYm9MaXN0SXRlbVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobHN0ICE9IG51bGwgJiYgbHN0ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuSW5kaWVuZXJMaXN0SXRlbXMgPSBbLi4ubHN0XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaHR0cERvc3NpZXIuc2dzQ29tYm9MaXN0SXRlbXMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChsc3Q6IElTZ3NEb3NzaWVyQ29tYm9MaXN0SXRlbVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobHN0ICE9IG51bGwgJiYgbHN0ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuRG9zc2llckJlaGVlcmRlckxpc3RJdGVtcyA9IFsuLi5sc3RdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByYWlzZVNlYXJjaCgpIHtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4gPSBuZXcgU2dzS1dab2VrVmVsZGVuKCk7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmtsYW50SWQgPSB0aGlzLnprRm9ybS5jb250cm9scy5JbmRpZW5lci52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4ucmVmZXJlbnRpZSA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLlJlZmVyZW50aWUudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLnZlcmtsYXJpbmdvbnR2YW5nZW4gPSB0aGlzLnprRm9ybS5jb250cm9scy5WZXJrbGFyaW5nT250dmFuZ2VuLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5kb3NzaWVyQmVoZWVyZGVySWQgPSB0aGlzLnprRm9ybS5jb250cm9scy5Eb3NzaWVyQmVoZWVyZGVyLnZhbHVlO1xyXG5cclxuICAgICAgICB0aGlzLnNlYXJjaGluZy5lbWl0KHRoaXMuem9la1ZlbGRlbik7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXJvdXRlci1sb2FkZXIvc3JjIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rdy16b2VrdWl0Z2VicmVpZC9ndy1rdy16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gW2Zvcm1Hcm91cF09XFxcInprRm9ybVxcXCIgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZCBwYWRkaW5nVG9wMzBweFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJkZGxJbmRpZW5lclxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPktsYW50L0luZGllbmVyPC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93biBjb2wtc20tNFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XFxcImRkbEluZGllbmVyXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkluZGllbmVyXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwid2lkdGgxMDBwZXJjZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIi0xXFxcIj5TZWxlY3RlZXI8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQga2xhbnQgb2YgSW5kaWVuZXJMaXN0SXRlbXNcXFwiIFt2YWx1ZV09XFxcImtsYW50LmtsYW50SURcXFwiIFtpbm5lckhUTUxdPVxcXCJrbGFudC5uYWFtXFxcIj48L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcImNoa1ZlcmtsYXJpbmdPbnR2YW5nZW5cXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5WZXJrbGFyaW5nIE9udHZhbmdlbjo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNoZWNrYm94IGNvbC1zbS00XFxcIj48ZGl2IGNsYXNzPVxcXCJtYXJnaW5Ub3BNaW4xMHB4IG1hcmdpbkxlZnQyMHB4XFxcIj48aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGlkPVxcXCJjaGtWZXJrbGFyaW5nT250dmFuZ2VuXFxcIiBjbGFzcz1cXFwibWFyZ2luQm90dG9tMFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJWZXJrbGFyaW5nT250dmFuZ2VuXFxcIiB2YWx1ZT1cXFwiXFxcIiAvPjwvZGl2PjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJ0eHRSZWZlcmVudGllXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+UmVmZXJlbnRpZTo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInR4dFJlZmVyZW50aWVcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiUmVmZXJlbnRpZVxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcImRkbERvc3NpZXJCZWhlZXJkZXJcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5Eb3NzaWVyQmVoZWVyZGVyPC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93biBjb2wtc20tNFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XFxcImRkbERvc3NpZXJCZWhlZXJkZXJcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiRG9zc2llckJlaGVlcmRlclxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcIndpZHRoMTAwcGVyY2VudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCItMVxcXCI+U2VsZWN0ZWVyPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IGRvc3NiZWggb2YgRG9zc2llckJlaGVlcmRlckxpc3RJdGVtc1xcXCIgW3ZhbHVlXT1cXFwiZG9zc2JlaC5kb3NzaWVyQmVoZWVyZGVySURcXFwiIFtpbm5lckhUTUxdPVxcXCJkb3NzYmVoLm5hYW1cXFwiPjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNCBjb2wtc20tb2Zmc2V0LThcXFwiPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJyYWlzZVNlYXJjaCgpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIj57e2FwcExhYmVscy5TZW5kfX08L2J1dHRvbj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Zvcm0+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LWt3LXpvZWt1aXRnZWJyZWlkL2d3LWt3LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA2MTlcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2d3LWt3LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rdy16b2VrdWl0Z2VicmVpZC9ndy1rdy16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2MjBcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy1rdy16b2VrdWl0Z2VicmVpZC9ndy1rdy16b2VrdWl0Z2VicmVpZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2MjFcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBHZW5lcmFsU2NyaXB0cyB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL2dlbmVyYWwuc2NyaXB0c1wiO1xyXG5pbXBvcnQgeyBUb2FzdHJTZXJ2aWNlIH0gZnJvbSBcIm5neC10b2FzdHJcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBIdHRwVFZTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2h0dHAtdHYuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBJU2dzVFZCeVN0YXR1cyB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL3Nnc0ludGVyZmFjZXMuc2NyaXB0c1wiO1xyXG5pbXBvcnQgeyBTZ3NUVlpvZWtWZWxkZW4gfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9zZ3NDbGFzc2VzLnNjcmlwdHNcIjtcclxuaW1wb3J0IHsgYXBwTGFiZWxzIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvYXBwTGFiZWxzXCI7XHJcbmltcG9ydCB7IERhdGF0YWJsZUNvbXBvbmVudCB9IGZyb20gXCJAc3dpbWxhbmUvbmd4LWRhdGF0YWJsZVwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgSVRWU3RhdHVzRGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL2ludGVyZmFjZXMuc2NyaXB0c1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJndy10di1ncmlkXCIsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ndy10di1ncmlkLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2d3LXR2LWdyaWQuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIGd3VFZHcmlkQ29tcG9uZW50IGV4dGVuZHMgR2VuZXJhbFNjcmlwdHMgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgYXBwTGFiZWxzID0gYXBwTGFiZWxzO1xyXG5cclxuICAgIFN0YXR1c0Ryb3Bkb3duTGlzdDogSVRWU3RhdHVzRGVmaW5pdGlvbltdID0gbnVsbDtcclxuICAgIFN0YXR1c0xpc3Q6IElTZ3NUVkJ5U3RhdHVzW10gPSBudWxsO1xyXG4gICAgcm93czogSVNnc1RWQnlTdGF0dXNbXSA9IG51bGw7XHJcbiAgICB0ZW1wOiBhbnlbXSA9IFtdO1xyXG4gICAgQFZpZXdDaGlsZChEYXRhdGFibGVDb21wb25lbnQpIHRhYmxlOiBEYXRhdGFibGVDb21wb25lbnQ7XHJcblxyXG4gICAgQElucHV0KCkgdGl0bGUgPSBcIlwiO1xyXG4gICAgU3RhdHVzSWQ6IG51bWJlciA9IC0xO1xyXG4gICAgaXNFeHRlbmRlZFNlYXJjaDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGZvck5pZXV3ZUFhbnZyYWdlbiA9IHRydWU7XHJcbiAgICBASW5wdXQoJ05pZXV3ZUFhbnZyYWdlbicpXHJcbiAgICBnZXQgTmlldXdlQWFudnJhZ2VuKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvck5pZXV3ZUFhbnZyYWdlbjtcclxuICAgIH1cclxuICAgIHNldCBOaWV1d2VBYW52cmFnZW4odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmZvck5pZXV3ZUFhbnZyYWdlbiA9IFwiXCIgKyB2YWx1ZSAhPT0gXCJmYWxzZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZVNlYXJjaCA9IHRydWU7XHJcbiAgICBASW5wdXQoJ0V4dGVuZGVkU2VhcmNoJylcclxuICAgIGdldCBFeHRlbmRlZFNlYXJjaCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51c2VTZWFyY2g7XHJcbiAgICB9XHJcbiAgICBzZXQgRXh0ZW5kZWRTZWFyY2godmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnVzZVNlYXJjaCA9IFwiXCIgKyB2YWx1ZSAhPT0gXCJmYWxzZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbkRlbGV0ZSA9IGZhbHNlO1xyXG4gICAgQElucHV0KCdBbGxvd0RlbGV0ZScpXHJcbiAgICBnZXQgQWxsb3dEZWxldGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FuRGVsZXRlO1xyXG4gICAgfVxyXG4gICAgc2V0IEFsbG93RGVsZXRlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5jYW5EZWxldGUgPSBcIlwiICsgdmFsdWUgIT09IFwiZmFsc2VcIjtcclxuICAgIH1cclxuXHJcbiAgICBTdHNGb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfdG9hc3RyOiBUb2FzdHJTZXJ2aWNlLCBwcml2YXRlIHJlYWRvbmx5IGZiOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSByZWFkb25seSBodHRwVFY6IEh0dHBUVlNlcnZpY2UsIHByaXZhdGUgcmVhZG9ubHkgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcmVhZG9ubHkgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJlYWRvbmx5IGF1dGg6IEF1dGhlbnRpY2F0aW9uU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKF90b2FzdHIpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLlN0c0Zvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgICAgICAgc3RzOiBbLTFdLFxyXG4gICAgICAgICAgICB0ZWNobmlzY2hWZXJzbGFnSUQ6IFtcIlwiXSxcclxuICAgICAgICAgICAgbmFhbTogW1wiXCJdLFxyXG4gICAgICAgICAgICBnZW1lZW50ZU9uZGVyem9la3Nsb2NhdGllOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIGluZGllbmluZ3NEYXR1bTogW1wiXCJdLFxyXG4gICAgICAgICAgICBzdGF0dXNEYXR1bTogW1wiXCJdLFxyXG4gICAgICAgICAgICBpbmRpZW5pbmdzd2lqemU6IFtcIlwiXSxcclxuICAgICAgICAgICAgZ2VmYWN0dXJlZXJkOiBbXCJcIl1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5odHRwVFYuU3RhdHVzRGVmaW5pdGlvbkxpc3QodHJ1ZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgobHN0OiBJVFZTdGF0dXNEZWZpbml0aW9uW10pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChsc3QgIT0gbnVsbCAmJiBsc3QgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TdGF0dXNEcm9wZG93bkxpc3QgPSBbLi4ubHN0XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuU3RzRm9ybS5wYXRjaFZhbHVlKHsgc3RzOiAodGhpcy5OaWV1d2VBYW52cmFnZW4gPyAnMCcgOiAnMScpIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNDaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXR1c0NoYW5nZWQoKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLlN0c0Zvcm0uY29udHJvbHMuc3RzLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCItMVwiOiAvLyBTZWxlY3RlZXJcclxuICAgICAgICAgICAgICAgIHRoaXMuU3RhdHVzSWQgPSAtMTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wID0gW107XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjBcIjogLy8gTmlldXdlIEFhbnZyYWdlbiBcclxuICAgICAgICAgICAgICAgIHRoaXMuU3RhdHVzSWQgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5OaWV1d2VBYW52cmFnZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU3RhdHVzTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IC8vIFN0YXR1c1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TdGF0dXNJZCA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5zdHMudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLk5pZXV3ZUFhbnZyYWdlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU3RhdHVzTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRTdGF0dXNMaXN0KCkge1xyXG4gICAgICAgIHRoaXMuaHR0cFRWLmd3U3RhdHVzTGlzdCh0aGlzLlN0YXR1c0lkLCB0aGlzLk5pZXV3ZUFhbnZyYWdlbikudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKGxzdDogSVNnc1RWQnlTdGF0dXNbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gbHN0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wID0gWy4uLmxzdF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyRm9ybUZpZWxkcygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkV4dGVuZGVkU2VhcmNoKHpvZWtWZWxkZW46IFNnc1RWWm9la1ZlbGRlbikge1xyXG4gICAgICAgIHRoaXMuaHR0cFRWLmd3Wm9la0xpc3Qoem9la1ZlbGRlbikudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKGxzdDogSVNnc1RWQnlTdGF0dXNbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gbHN0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wID0gWy4uLmxzdF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyRm9ybUZpZWxkcygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckZvcm1GaWVsZHMoKSB7XHJcbiAgICAgICAgLy8gQ2xlYXIgYWxsIEZvcm0gVmFsdWVzIGV4Y2VwdCBzdHNcclxuICAgICAgICB0aGlzLlN0c0Zvcm0ucGF0Y2hWYWx1ZSh7XHJcbiAgICAgICAgICAgIHRlY2huaXNjaFZlcnNsYWdJRDogXCJcIixcclxuICAgICAgICAgICAgbmFhbTogXCJcIixcclxuICAgICAgICAgICAgZ2VtZWVudGVPbmRlcnpvZWtzbG9jYXRpZTogXCJcIixcclxuICAgICAgICAgICAgaW5kaWVuaW5nc0RhdHVtOiBcIlwiLFxyXG4gICAgICAgICAgICBzdGF0dXNEYXR1bTogXCJcIixcclxuICAgICAgICAgICAgaW5kaWVuaW5nc3dpanplOiBcIlwiLFxyXG4gICAgICAgICAgICBnZWZhY3R1cmVlcmQ6IFwiXCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXIoKSB7XHJcbiAgICAgICAgY29uc3QgdGVjaG5pc2NoVmVyc2xhZ0lEID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLnRlY2huaXNjaFZlcnNsYWdJRC52YWx1ZTtcclxuICAgICAgICBjb25zdCBuYWFtID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLm5hYW0udmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBHT0wgPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuZ2VtZWVudGVPbmRlcnpvZWtzbG9jYXRpZS52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IGluZGllbmluZ3NEYXR1bSA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5pbmRpZW5pbmdzRGF0dW0udmFsdWU7XHJcbiAgICAgICAgY29uc3Qgc3RhdHVzRGF0dW0gPSB0aGlzLlN0c0Zvcm0uY29udHJvbHMuc3RhdHVzRGF0dW0udmFsdWU7XHJcbiAgICAgICAgY29uc3QgaW5kaWVuaW5nc3dpanplID0gdGhpcy5TdHNGb3JtLmNvbnRyb2xzLmluZGllbmluZ3N3aWp6ZS52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IGdlZmFjdHVyZWVyZCA9IHRoaXMuU3RzRm9ybS5jb250cm9scy5nZWZhY3R1cmVlcmQudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBkcCA9IG5ldyBEYXRlUGlwZShcImVuLVVTXCIpO1xyXG5cclxuICAgICAgICAvLyBmaWx0ZXIgb3VyIGRhdGFcclxuICAgICAgICBjb25zdCB0ZW1wID0gdGhpcy50ZW1wLmZpbHRlcigocm93OiBJU2dzVFZCeVN0YXR1cykgPT4ge1xyXG4gICAgICAgICAgICB2YXIgaW5kaWVuaW5nc0RhdHVtQXNTdHJpbmc6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAoaW5kaWVuaW5nc0RhdHVtID4gXCJcIikgeyBpbmRpZW5pbmdzRGF0dW1Bc1N0cmluZyA9IGRwLnRyYW5zZm9ybShyb3cuaW5kaWVuaW5nc0RhdHVtLCBcImRkL01NL3l5eXlcIik7IH1cclxuICAgICAgICAgICAgdmFyIHN0YXR1c0RhdHVtQXNTdHJpbmc6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzRGF0dW0gPiBcIlwiKSB7IHN0YXR1c0RhdHVtQXNTdHJpbmcgPSBkcC50cmFuc2Zvcm0ocm93LnN0YXR1c0RhdHVtLCBcImRkL01NL3l5eXlcIik7IH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoIXRlY2huaXNjaFZlcnNsYWdJRCB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQocm93LnRlY2huaXNjaFZlcnNsYWdJRC50b1N0cmluZygpKSAmJiByb3cudGVjaG5pc2NoVmVyc2xhZ0lELnRvU3RyaW5nKCkuaW5kZXhPZih0ZWNobmlzY2hWZXJzbGFnSUQpICE9PSAtMSkpXHJcbiAgICAgICAgICAgICAgICAmJiAoIW5hYW0gfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHJvdy5uYWFtLnRvTG93ZXJDYXNlKCkpICYmIHJvdy5uYWFtLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihuYWFtKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFHT0wgfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHJvdy5nZW1lZW50ZU9uZGVyem9la3Nsb2NhdGllLnRvTG93ZXJDYXNlKCkpICYmIHJvdy5nZW1lZW50ZU9uZGVyem9la3Nsb2NhdGllLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihHT0wpICE9PSAtMSkpXHJcbiAgICAgICAgICAgICAgICAmJiAoIWluZGllbmluZ3NEYXR1bSB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQoaW5kaWVuaW5nc0RhdHVtQXNTdHJpbmcpICYmIGluZGllbmluZ3NEYXR1bUFzU3RyaW5nLmluZGV4T2YoaW5kaWVuaW5nc0RhdHVtKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFzdGF0dXNEYXR1bSB8fCAoIXRoaXMuaXNOdWxsT3JVbmRlZmluZWQoc3RhdHVzRGF0dW1Bc1N0cmluZykgJiYgc3RhdHVzRGF0dW1Bc1N0cmluZy5pbmRleE9mKHN0YXR1c0RhdHVtKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFpbmRpZW5pbmdzd2lqemUgfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHJvdy5pbmRpZW5pbmdzd2lqemUudG9Mb3dlckNhc2UoKSkgJiYgcm93LmluZGllbmluZ3N3aWp6ZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoaW5kaWVuaW5nc3dpanplKSAhPT0gLTEpKVxyXG4gICAgICAgICAgICAgICAgJiYgKCFnZWZhY3R1cmVlcmQgfHwgKCF0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHJvdy5nZWZhY3R1cmVlcmQudG9Mb3dlckNhc2UoKSkgJiYgcm93LmdlZmFjdHVyZWVyZC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZ2VmYWN0dXJlZXJkKSAhPT0gLTEpKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgdGhlIHJvd3NcclxuICAgICAgICB0aGlzLnJvd3MgPSB0ZW1wO1xyXG4gICAgICAgIC8vIFdoZW5ldmVyIHRoZSBmaWx0ZXIgY2hhbmdlcywgYWx3YXlzIGdvIGJhY2sgdG8gdGhlIGZpcnN0IHBhZ2VcclxuICAgICAgICB0aGlzLnRhYmxlLm9mZnNldCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Um93Q2xhc3Mocm93OiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gXCJpYnRuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgb25BY3RpdmF0ZShldmVudDogYW55KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IFwiZGJsY2xpY2tcIikge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmtUb1RWKGV2ZW50LnJvd1tcInRlY2huaXNjaFZlcnNsYWdJRFwiXSwgZXZlbnQucm93W1wiaXNFdmFsdWF0aWVWbGFyZWJvMjAwOFwiXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxpbmtUb1RWKHR2SWQ6IG51bWJlciwgaXNWbGFyZWJvMjAwODogYm9vbGVhbiB8IG51bGwpIHtcclxuICAgICAgICBpZiAoaXNWbGFyZWJvMjAwOCkge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJndy90di1lZGl0XCIsIHR2SWRdKTsgIC8vID0+IEdXQmVoZWVyL1RWRWRpdDIwMDguYXNweCAob3VkZSBHVylcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiZ3cvdHYtZWRpdFwiLCB0dklkXSk7ICAvLyA9PiBHV0JlaGVlci9UVkVkaXREZWZhdWx0LmFzcHggKG91ZGUgR1cpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVRWKHR2SWQ6IG51bWJlcikge1xyXG4gICAgfVxyXG5cclxuICAgIFRvZ2dsZUV4dGVuZGVkU2VhcmNoKCkge1xyXG4gICAgICAgIHRoaXMuaXNFeHRlbmRlZFNlYXJjaCA9ICF0aGlzLmlzRXh0ZW5kZWRTZWFyY2g7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXJvdXRlci1sb2FkZXIvc3JjIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL19HVy9ndy10di1ncmlkL2d3LXR2LWdyaWQuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxmb3JtIFtmb3JtR3JvdXBdPVxcXCJTdHNGb3JtXFxcIiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkIHBhZGRpbmdUb3AxMHB4XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwidXNlU2VhcmNoXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0zXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgKGNsaWNrKT1cXFwiVG9nZ2xlRXh0ZW5kZWRTZWFyY2goKVxcXCI+e3sgaXNFeHRlbmRlZFNlYXJjaCA/ICdFbmtlbHZvdWRpZyB6b2VrZW4nIDogJ0dlYXZhbmNlZXJkIHpvZWtlbicgfX08L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiAqbmdJZj1cXFwidXNlU2VhcmNoICYmICFpc0V4dGVuZGVkU2VhcmNoXFxcIiBjbGFzcz1cXFwiY29sLXNtLTlcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwicGFkZGluZ1JpZ2h0MTBweFxcXCI+RmlsdGVyIHN0YXR1czwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPHNlbGVjdCBmb3JtQ29udHJvbE5hbWU9XFxcInN0c1xcXCIgRG90dGVkQm9yZGVyQmVsb3cgKGNoYW5nZSk9XFxcInN0YXR1c0NoYW5nZWQoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIi0xXFxcIj5TZWxlY3RlZXI8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCBzdHMgb2YgU3RhdHVzRHJvcGRvd25MaXN0XFxcIiBbdmFsdWVdPVxcXCJzdHMudHZTdGF0dXNJRFxcXCIgW2lubmVySFRNTF09XFxcInN0cy5zdGF0dXNcXFwiPjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0lmPVxcXCJ1c2VTZWFyY2ggJiYgaXNFeHRlbmRlZFNlYXJjaFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTJcXFwiPjxndy10di16b2VrdWl0Z2VicmVpZCAoc2VhcmNoaW5nKT1cXFwib25FeHRlbmRlZFNlYXJjaCgkZXZlbnQpXFxcIj48L2d3LXR2LXpvZWt1aXRnZWJyZWlkPjwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiTmd4VGFibGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8cCAqbmdJZj1cXFwiZm9yTmlldXdlQWFudnJhZ2VuID09IGZhbHNlXFxcIiBjbGFzcz1cXFwicHVsbC1sZWZ0IE5neFRpdGxlXFxcIj57e3RpdGxlfX08L3A+XFxyXFxuICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlICN0YWJsZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYm9vdHN0cmFwXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYWN0aXZhdGUpPVxcXCJvbkFjdGl2YXRlKCRldmVudClcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3dzXT1cXFwicm93c1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbHVtbk1vZGVdPVxcXCInZmxleCdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtoZWFkZXJIZWlnaHRdPVxcXCI1MFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zvb3RlckhlaWdodF09XFxcIjQwXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGltaXRdPVxcXCJhcHBMYWJlbHMudGFibGVWaWV3Um93c1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jvd0NsYXNzXT1cXFwiZ2V0Um93Q2xhc3NcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjc3NDbGFzc2VzXT1cXFwiYXBwTGFiZWxzLmljb25zQ3NzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWVzc2FnZXNdPVxcXCJ7dG90YWxNZXNzYWdlOiBhcHBMYWJlbHMuVG90YWwudG9Mb3dlckNhc2UoKSwgZW1wdHlNZXNzYWdlOiBhcHBMYWJlbHMuTm9EYXRhVG9EaXNwbGF5fVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NvcnRzXT1cXFwiW3twcm9wOid0ZWNobmlzY2hWZXJzbGFnSUQnLCBkaXI6J2Rlc2MnIH1dXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm93SGVpZ2h0XT1cXFwiJ2F1dG8nXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIxXFxcIiBuYW1lPVxcXCJTYW1lbmdlc3RlbGRcXFwiIGhlYWRlckNsYXNzPVxcXCJOZ3hIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY29sdW1uPVxcXCJjb2x1bW5cXFwiIGxldC1zb3J0PVxcXCJzb3J0Rm5cXFwiIG5neC1kYXRhdGFibGUtaGVhZGVyLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1yb3c9XFxcInJvd1xcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICpuZ0lmPVxcXCJyb3dbJ3NhbWVuZ2V2b2VnZERvb3InXSAhPSBudWxsICYmIHJvd1snc2FtZW5nZXZvZWdkRG9vciddICE9ICcnXFxcIiBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uLy4uLy4uLy4uL2ltYWdlcy9QbHVzLmdpZlwiKSArIFwiXFxcIiBjbGFzcz1cXFwiaWJ0blxcXCIgKGNsaWNrKT1cXFwibGlua1RvRGVsZXRlKHJvd1sndGVjaG5pc2NoVmVyc2xhZ0lEJ10pXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICpuZ0lmPVxcXCJyb3dbJ2V4dGVyblRWJ10gIT0gbnVsbCAmJiByb3dbJ2V4dGVyblRWJ10gPT0gdHJ1ZVxcXCIgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9pbWFnZXMvR2IyLmdpZlwiKSArIFwiXFxcIiBjbGFzcz1cXFwiaWJ0blxcXCIgKGNsaWNrKT1cXFwibGlua1RvRGVsZXRlKHJvd1sndGVjaG5pc2NoVmVyc2xhZ0lEJ10pXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIHByb3A9XFxcInRlY2huaXNjaFZlcnNsYWdJRFxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XFxcInNvcnQoKVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckxhYmVsXFxcIj5UViBOci48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwidGVjaG5pc2NoVmVyc2xhZ0lEXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1yb3c9XFxcInJvd1xcXCIgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cXFwicm93Wydpc0V2YWx1YXRpZVZsYXJlYm8yMDA4J10gIT0gbnVsbCAmJiByb3dbJ2lzRXZhbHVhdGllVmxhcmVibzIwMDgnXSA9PSB0cnVlXFxcIiBjbGFzcz1cXFwicGRmTGlua1xcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy90ZWNobmlzY2gtdmVyc2xhZy1kZXRhaWwnLCByb3dbJ3RlY2huaXNjaFZlcnNsYWdJRCddXVxcXCI+PGxhYmVsIGNsYXNzPVxcXCJ0ZXh0XFxcIj57e3Jvd1sndGVjaG5pc2NoVmVyc2xhZ0lEJ119fTwvbGFiZWw+PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cXFwicm93Wydpc0V2YWx1YXRpZVZsYXJlYm8yMDA4J10gPT0gbnVsbCB8fCByb3dbJ2lzRXZhbHVhdGllVmxhcmVibzIwMDgnXSA9PSBmYWxzZVxcXCIgY2xhc3M9XFxcInBkZkxpbmtcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvdGVjaG5pc2NoLXZlcnNsYWctZGV0YWlsJywgcm93Wyd0ZWNobmlzY2hWZXJzbGFnSUQnXV1cXFwiPjxsYWJlbCBjbGFzcz1cXFwidGV4dFxcXCI+e3tyb3dbJ3RlY2huaXNjaFZlcnNsYWdJRCddfX08L2xhYmVsPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCI0XFxcIiBwcm9wPVxcXCJuYWFtXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyTGFiZWxcXFwiPk5hYW08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwibmFhbVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtdmFsdWU9XFxcInZhbHVlXFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7dmFsdWV9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBbZmxleEdyb3ddPVxcXCIzXFxcIiBwcm9wPVxcXCJnZW1lZW50ZU9uZGVyem9la3Nsb2NhdGllXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cXFwic29ydCgpXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyTGFiZWxcXFwiPkdlbWVlbnRlIE9uZGVyem9la3Nsb2thdGllPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJnZW1lZW50ZU9uZGVyem9la3Nsb2NhdGllXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1yb3c9XFxcInJvd1xcXCIgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3ZhbHVlfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMlxcXCIgbmFtZT1cXFwiaW5kaWVuaW5nc0RhdHVtXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCIgTmd4RmlsdGVyTGFiZWxcXFwiPkluZGllbmluZ3NEYXR1bTwvc3Bhbj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJpbmRpZW5pbmdzRGF0dW1cXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3ZhbHVlIHwgZGF0ZTpcXFwiZGQvTU0veXl5eVxcXCJ9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjJcXFwiIG5hbWU9XFxcInN0YXR1c0RhdHVtXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCIgTmd4RmlsdGVyTGFiZWxcXFwiPlN0YXR1cyBEYXR1bTwvc3Bhbj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJzdGF0dXNEYXR1bVxcXCIgY2xhc3M9XFxcIk5neEZpbHRlckZpZWxkXFxcIiAoa2V5dXApPVxcXCJmaWx0ZXIoKVxcXCIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtdmFsdWU9XFxcInZhbHVlXFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dmFsdWUgfCBkYXRlOlxcXCJkZC9NTS95eXl5XFxcIn19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMVxcXCIgcHJvcD1cXFwiaW5kaWVuaW5nc3dpanplXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCIgTmd4RmlsdGVyTGFiZWxcXFwiPkluZGllbi5XaWp6ZTwvc3Bhbj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJpbmRpZW5pbmdzd2lqemVcXFwiIGNsYXNzPVxcXCJOZ3hGaWx0ZXJGaWVsZFxcXCIgKGtleXVwKT1cXFwiZmlsdGVyKClcXFwiIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW2ZsZXhHcm93XT1cXFwiMVxcXCIgcHJvcD1cXFwiZ2VmYWN0dXJlZXJkXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48c3BhbiAoY2xpY2spPVxcXCJzb3J0KClcXFwiIGNsYXNzPVxcXCIgTmd4RmlsdGVyTGFiZWxcXFwiPkdlZmFjdC48L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiZ2VmYWN0dXJlZXJkXFxcIiBjbGFzcz1cXFwiTmd4RmlsdGVyRmllbGRcXFwiIChrZXl1cCk9XFxcImZpbHRlcigpXFxcIiAvPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIFtmbGV4R3Jvd109XFxcIjFcXFwiIG5hbWU9XFxcIkRldGFpbFxcXCIgaGVhZGVyQ2xhc3M9XFxcIk5neEhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jb2x1bW49XFxcImNvbHVtblxcXCIgbGV0LXNvcnQ9XFxcInNvcnRGblxcXCIgbmd4LWRhdGF0YWJsZS1oZWFkZXItdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXJvdz1cXFwicm93XFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9pbWFnZXMvaWNvX2VkaXRyZWNvcmQuZ2lmXCIpICsgXCJcXFwiIGNsYXNzPVxcXCJpYnRuXFxcIiAoY2xpY2spPVxcXCJsaW5rVG9UVihyb3dbJ3RlY2huaXNjaFZlcnNsYWdJRCddLCByb3dbJ2lzRXZhbHVhdGllVmxhcmVibzIwMDgnXSlcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gKm5nSWY9XFxcImNhbkRlbGV0ZVxcXCIgW2ZsZXhHcm93XT1cXFwiMVxcXCIgbmFtZT1cXFwiRGV0YWlsXFxcIiBoZWFkZXJDbGFzcz1cXFwiTmd4SGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNvbHVtbj1cXFwiY29sdW1uXFxcIiBsZXQtc29ydD1cXFwic29ydEZuXFxcIiBuZ3gtZGF0YXRhYmxlLWhlYWRlci10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtcm93PVxcXCJyb3dcXFwiIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uLy4uLy4uLy4uL2ltYWdlcy9pY29fZGVsZXRlLnBuZ1wiKSArIFwiXFxcIiBjbGFzcz1cXFwiaWJ0blxcXCIgKGNsaWNrKT1cXFwiZGVsZXRlVFYocm93Wyd0ZWNobmlzY2hWZXJzbGFnSUQnXSlcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG48L2Zvcm0+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LXR2LWdyaWQvZ3ctdHYtZ3JpZC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNjIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhEd0FQQVBjQUFBQUFBQTFuQ3cxdEJ3MXZCd3h3Q0F4MUNBNTRCZ3gvQkJCdER4TnZGaFpyRnhwdEdCSjdEUk45Q3hKK0RoZDhDaDUwR0Nsc0pDTnlJaWR3SmlWMEpTeDJKelYyTkFtSEFnNkxDQXFTQndxVkNBNlhEQktQQ0JPTkRScUxFUmVXQ3hDYkNoR2ZDUm1UQ3htWURSbVZFUnFXRUIrUkZnK3FCdzYvQWhLbENSU3FEQml2Q2gycUNSeXNHQkN3Q0JDeURCZTBEaFM3QkJpMUJCcTNDaDI2RFJlNUVoaXpFQnV6RVIrekVSK3pGU1NQR3lHU0dTT2NHQ2FGSUMrQUxET0tKekdNSmpTTUtEMkdPaU9xRlNLd0R5S3hFeUd6RkNTNEdTK2dKVENoS0FiTEFBM0RBaEhGQXhQSkF4VEpCQmpGQng3RERCM0ZEaG5OQ3g3TkNSL0NFQm5TQlJyUUNDTEpEQ0xNRVNUT0V5SFdCeXZTRXkzVUZDN0RJRWFaT1VhYlBFbVdQMHVZUUZHTFMxV09UbFNLVTFPVFVWcVdXRmlZVjF5YVZGNnNXRlMxVFZ1MVZHR1FZV0N1VzNHc2IzYXFibldrZG5HcGNuS3RjSE91Y1hhcmRYYXJkbiszZDVhNG1aZTVtcDIvbnArL29JN0NoNWZEbHBmQW1KckRtNm5FbjhMWnh1bjgydkg3N2ZMNzgvWDc5UGI4OVBQKytmUCsrdlg3K1AzMTl2djY4L3Y1OXYzNi9QMzgvQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQ0g1QkFFQUFQOEFMQUFBQUFBUEFBOEFBQWk5QVA4SkhFaXdJRUU5RmhBUUNMQUFqc0YvWkFTc3NKS2xpeEVIRXdxYU1VQmpDZzQxU2JCRTRSQ0I0SUFVVHFCNEViUW5ocElaRE5nSUZIUEJSbzBqWUFyMWFVR0RpQVlGQWlWZzJORkd6cDFEZ09qTUNiS2hnTUFFSFlBRVVzU28wYUpFaU94a09QRG5Id1VTSHRLNHdXTUlVSjA0UDBBMEVEam13NGtYT2NJUTh0TUNCb3NRRUFZK2NMR0V5cGRCZkc2Z2tESGl6RUEwSlo0MEtiSUdpUlFtUXlvVUxDUGlpaFl1VzZxbzhQRXdqeEFUUEhUMGVQT3dOTUdBQURzPVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvaW1hZ2VzL1BsdXMuZ2lmXG4vLyBtb2R1bGUgaWQgPSA2MjRcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaER3QVBBUGNBQUFDQUFmLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFDd0FBQUFBRHdBUEFBQUlPd0FCQ0J4SXNLREJnd2dURGd6QWNDSERoZ0FnUmhRWXdPRkVneFVwYXNUNE1HUEdpQTAvaGl4WThlTkVpU01waW55b2txWENsekJqeWd3SUFEcz1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2ltYWdlcy9HYjIuZ2lmXG4vLyBtb2R1bGUgaWQgPSA2MjVcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2d3LXR2LWdyaWQuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LXR2LWdyaWQvZ3ctdHYtZ3JpZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2MjZcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucGFyZW50VG9wIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuLmNoaWxkVG9wIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LXR2LWdyaWQvZ3ctdHYtZ3JpZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2Mjdcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24sIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBUb2FzdHJTZXJ2aWNlIH0gZnJvbSBcIm5neC10b2FzdHJcIjtcclxuXHJcbmltcG9ydCB7IGFwcExhYmVscyB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL2FwcExhYmVsc1wiO1xyXG5pbXBvcnQgeyBHZW5lcmFsU2NyaXB0cyB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL2dlbmVyYWwuc2NyaXB0c1wiO1xyXG5cclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHsgSHR0cEJCUlNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaHR0cC1iYnIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIdHRwRG9zc2llclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaHR0cC1kb3NzaWVyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSHR0cEtsYW50U2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9odHRwLWtsYW50LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSHR0cFRWU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9odHRwLXR2LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBCc0xvY2FsZVNlcnZpY2UgfSBmcm9tIFwibmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyXCI7XHJcbmltcG9ydCB7IFNnc1RWWm9la1ZlbGRlbiB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL3Nnc0NsYXNzZXMuc2NyaXB0c1wiO1xyXG5pbXBvcnQgeyBJU2dzS2xhbnRDb21ib0xpc3RJdGVtLCBJU2dzRG9zc2llckNvbWJvTGlzdEl0ZW0gfSBmcm9tIFwiLi4vLi4vc2NyaXB0cy9zZ3NJbnRlcmZhY2VzLnNjcmlwdHNcIjtcclxuaW1wb3J0IHsgSUJCUkluZGllbmluZ3NXaWp6ZSwgSVRWU3RhdHVzRGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi9zY3JpcHRzL2ludGVyZmFjZXMuc2NyaXB0c1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJndy10di16b2VrdWl0Z2VicmVpZFwiLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZ3ctdHYtem9la3VpdGdlYnJlaWQuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vZ3ctdHYtem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzcycpXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIGd3VFZab2VrVWl0Z2VicmVpZENvbXBvbmVudCBleHRlbmRzIEdlbmVyYWxTY3JpcHRzIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGFwcExhYmVscyA9IGFwcExhYmVscztcclxuICAgIHprRm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICAgIEluZGllbmVyTGlzdEl0ZW1zOiBJU2dzS2xhbnRDb21ib0xpc3RJdGVtW10gPSBudWxsO1xyXG4gICAgSW5kaWVuaW5nc1dpanplTGlzdEl0ZW1zOiBJQkJSSW5kaWVuaW5nc1dpanplW10gPSBudWxsO1xyXG4gICAgRG9zc2llckJlaGVlcmRlckxpc3RJdGVtczogSVNnc0Rvc3NpZXJDb21ib0xpc3RJdGVtW10gPSBudWxsO1xyXG4gICAgU3RhdHVzTGlzdEl0ZW1zOiBJVFZTdGF0dXNEZWZpbml0aW9uW10gPSBudWxsO1xyXG5cclxuICAgIHpvZWtWZWxkZW46IFNnc1RWWm9la1ZlbGRlbiA9IG51bGw7XHJcblxyXG4gICAgQE91dHB1dCgpIHNlYXJjaGluZzogRXZlbnRFbWl0dGVyPFNnc1RWWm9la1ZlbGRlbj4gPSBuZXcgRXZlbnRFbWl0dGVyPFNnc1RWWm9la1ZlbGRlbj4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF90b2FzdHI6IFRvYXN0clNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9sb2NhbGVTZXJ2aWNlOiBCc0xvY2FsZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGh0dHBCYnI6IEh0dHBCQlJTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBodHRwRG9zc2llcjogSHR0cERvc3NpZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBodHRwS2xhbnQ6IEh0dHBLbGFudFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGh0dHBUVjogSHR0cFRWU2VydmljZSxcclxuICAgICAgICAgICAgICAgIEBJbmplY3QoXCJCQVNFX1VSTFwiKSBwcml2YXRlIHJlYWRvbmx5IF9iYXNlVXJsOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX3Nhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XHJcbiAgICAgICAgc3VwZXIoX3RvYXN0cik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gTmVlZGVkIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBic0RhdGVwaWNrZXIgdG8gYWNjZXB0IGRkL01NL3l5eXkgZm9ybWF0dGluZ1xyXG4gICAgICAgIHRoaXMuX2xvY2FsZVNlcnZpY2UudXNlKFwiYm9vdHN0cmFwLWxvY2FsZS1ubGJlXCIpO1xyXG5cclxuICAgICAgICB0aGlzLnprRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBDb2RlOiBbXCJcIl0sXHJcbiAgICAgICAgICAgIEluZGllbmVyOiBbXCItMVwiXSxcclxuICAgICAgICAgICAgRmFjdHV1clJlZjogW1wiXCJdLFxyXG4gICAgICAgICAgICBBZHJlczogW1wiXCJdLFxyXG4gICAgICAgICAgICBHZW1lZW50ZTogW1wiXCJdLFxyXG4gICAgICAgICAgICBUaXRlbDogW1wiXCJdLFxyXG4gICAgICAgICAgICBCZXNjaHJpanZpbmc6IFtcIlwiXSxcclxuICAgICAgICAgICAgUmVmZXJlbnRpZTogW1wiXCJdLFxyXG4gICAgICAgICAgICBPdmVybmFtZTogW1wiXCJdLFxyXG4gICAgICAgICAgICBTYW1lbmdldm9lZ2Q6IFtcIlwiXSxcclxuICAgICAgICAgICAgRUJTRDogW1wiXCJdLFxyXG4gICAgICAgICAgICBJbmRpZW5pbmdzV2lqemU6IFtcIi0xXCJdLFxyXG4gICAgICAgICAgICBEYXR1bTogW1wiXCJdLFxyXG4gICAgICAgICAgICBTdGF0dXM6IFtcIi0xXCJdLFxyXG4gICAgICAgICAgICBHZWZhY3R1cmVlcmQ6IFtcIi0xXCJdLFxyXG4gICAgICAgICAgICBEb3NzaWVyQmVoZWVyZGVyOiBbXCItMVwiXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWREcm9wZG93bnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkRHJvcGRvd25zKCkge1xyXG4gICAgICAgIHRoaXMuaHR0cEtsYW50LnNnc0NvbWJvTGlzdEl0ZW1zKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgobHN0OiBJU2dzS2xhbnRDb21ib0xpc3RJdGVtW10pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChsc3QgIT0gbnVsbCAmJiBsc3QgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5JbmRpZW5lckxpc3RJdGVtcyA9IFsuLi5sc3RdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5odHRwRG9zc2llci5zZ3NDb21ib0xpc3RJdGVtcygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGxzdDogSVNnc0Rvc3NpZXJDb21ib0xpc3RJdGVtW10pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChsc3QgIT0gbnVsbCAmJiBsc3QgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Eb3NzaWVyQmVoZWVyZGVyTGlzdEl0ZW1zID0gWy4uLmxzdF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmh0dHBCYnIuc2dzSW5kaWVuaW5nc1dpanplTGlzdEl0ZW1zKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgobHN0OiBJQkJSSW5kaWVuaW5nc1dpanplW10pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChsc3QgIT0gbnVsbCAmJiBsc3QgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5JbmRpZW5pbmdzV2lqemVMaXN0SXRlbXMgPSBbLi4ubHN0XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaHR0cFRWLlN0YXR1c0RlZmluaXRpb25MaXN0KGZhbHNlKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChsc3Q6IElUVlN0YXR1c0RlZmluaXRpb25bXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxzdCAhPSBudWxsICYmIGxzdCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlN0YXR1c0xpc3RJdGVtcyA9IFsuLi5sc3RdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByYWlzZVNlYXJjaCgpIHtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4gPSBuZXcgU2dzVFZab2VrVmVsZGVuKCk7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLnR2SWQgPSB0aGlzLnprRm9ybS5jb250cm9scy5Db2RlLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5rbGFudElkID0gdGhpcy56a0Zvcm0uY29udHJvbHMuSW5kaWVuZXIudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmZhY3R1dXJSZWYgPSB0aGlzLnprRm9ybS5jb250cm9scy5GYWN0dXVyUmVmLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5hZHJlcyA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLkFkcmVzLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5nZW1lZW50ZSA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLkdlbWVlbnRlLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi50aXRlbCA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLlRpdGVsLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5iZXNjaHJpanZpbmcgPSB0aGlzLnprRm9ybS5jb250cm9scy5CZXNjaHJpanZpbmcudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLnJlZmVyZW50aWUgPSB0aGlzLnprRm9ybS5jb250cm9scy5SZWZlcmVudGllLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5vdmVybmFtZSA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLk92ZXJuYW1lLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5zYW1lbmdldm9lZ2QgPSB0aGlzLnprRm9ybS5jb250cm9scy5TYW1lbmdldm9lZ2QudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmVic2QgPSB0aGlzLnprRm9ybS5jb250cm9scy5FQlNELnZhbHVlO1xyXG4gICAgICAgIHRoaXMuem9la1ZlbGRlbi5pbmRpZW5pbmdzd2lqemVJZCA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLkluZGllbmluZ3NXaWp6ZS52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4uZGF0dW0gPSB0aGlzLnprRm9ybS5jb250cm9scy5EYXR1bS52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4uc3RhdHVzSWQgPSB0aGlzLnprRm9ybS5jb250cm9scy5TdGF0dXMudmFsdWU7XHJcbiAgICAgICAgdGhpcy56b2VrVmVsZGVuLmdlZmFjdHVyZWVyZCA9IHRoaXMuemtGb3JtLmNvbnRyb2xzLkdlZmFjdHVyZWVyZC52YWx1ZTtcclxuICAgICAgICB0aGlzLnpvZWtWZWxkZW4uZG9zc2llckJlaGVlcmRlcklkID0gdGhpcy56a0Zvcm0uY29udHJvbHMuRG9zc2llckJlaGVlcmRlci52YWx1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWFyY2hpbmcuZW1pdCh0aGlzLnpvZWtWZWxkZW4pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi1yb3V0ZXItbG9hZGVyL3NyYyEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctdHYtem9la3VpdGdlYnJlaWQvZ3ctdHYtem9la3VpdGdlYnJlaWQuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxmb3JtIFtmb3JtR3JvdXBdPVxcXCJ6a0Zvcm1cXFwiIGNsYXNzPVxcXCJjb250YWluZXItZmx1aWQgcGFkZGluZ1RvcDMwcHhcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwidHh0Q29kZVxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPkNvZGU8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInR4dENvZGVcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiQ29kZVxcXCIgQWxsb3dPbmx5TnVtYmVycyBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwiY2hrT3Zlcm5hbWVcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5PdmVybmFtZTo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNoZWNrYm94IGNvbC1zbS00XFxcIj48ZGl2IGNsYXNzPVxcXCJtYXJnaW5Ub3BNaW4xMHB4IG1hcmdpbkxlZnQyMHB4XFxcIj48aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGlkPVxcXCJjaGtPdmVybmFtZVxcXCIgY2xhc3M9XFxcIm1hcmdpbkJvdHRvbTBcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiT3Zlcm5hbWVcXFwiIHZhbHVlPVxcXCJcXFwiIC8+PC9kaXY+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcImRkbEluZGllbmVyXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+S2xhbnQvSW5kaWVuZXI8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duIGNvbC1zbS00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cXFwiZGRsSW5kaWVuZXJcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiSW5kaWVuZXJcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJ3aWR0aDEwMHBlcmNlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiLTFcXFwiPlNlbGVjdGVlcjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCBrbGFudCBvZiBJbmRpZW5lckxpc3RJdGVtc1xcXCIgW3ZhbHVlXT1cXFwia2xhbnQua2xhbnRJRFxcXCIgW2lubmVySFRNTF09XFxcImtsYW50Lm5hYW1cXFwiPjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwiY2hrU2FtZW5nZXZvZWdkXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+U2FtZW5nZXZvZWdkOjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2hlY2tib3ggY29sLXNtLTRcXFwiPjxkaXYgY2xhc3M9XFxcIm1hcmdpblRvcE1pbjEwcHggbWFyZ2luTGVmdDIwcHhcXFwiPjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgaWQ9XFxcImNoa1NhbWVuZ2V2b2VnZFxcXCIgY2xhc3M9XFxcIm1hcmdpbkJvdHRvbTBcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiU2FtZW5nZXZvZWdkXFxcIiB2YWx1ZT1cXFwiXFxcIiAvPjwvZGl2PjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJ0eHRGYWN0dXVyUmVmXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+RmFjdHV1ciBSZWZlcmVudGllIEtsYW50OjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwidHh0RmFjdHV1clJlZlxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJGYWN0dXVyUmVmXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwidHh0RUJTRFxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPk5hYW0gRUJTRDo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInR4dEVCU0RcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiRUJTRFxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcInR4dEFkcmVzXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+U3RyYWF0IGVuIG5yOjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwidHh0QWRyZXNcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiQWRyZXNcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj48bGFiZWwgZm9yPVxcXCJkZGxJbmRpZW5pbmdzV2lqemVcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5JbmRpZW5pbmdzd2lqemU8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duIGNvbC1zbS00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cXFwiZGRsSW5kaWVuaW5nc1dpanplXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkluZGllbmluZ3NXaWp6ZVxcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcIndpZHRoMTAwcGVyY2VudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCItMVxcXCI+U2VsZWN0ZWVyPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IGl3IG9mIEluZGllbmluZ3NXaWp6ZUxpc3RJdGVtc1xcXCIgW3ZhbHVlXT1cXFwiaXcuaW5kaWVuaW5nc3dpanplSURcXFwiIFtpbm5lckhUTUxdPVxcXCJpdy5pbmRpZW5pbmdzd2lqemVcXFwiPjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwidHh0R2VtZWVudGVcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5HZW1lZW50ZTo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInR4dEdlbWVlbnRlXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkdlbWVlbnRlXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwiZHRlRGF0dW1cXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5EYXR1bTo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcImR0ZURhdHVtXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkRhdHVtXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIG5nLXRyaW0taWdub3JlXFxcIiBic0RhdGVwaWNrZXIgcGxhY2VtZW50PVxcXCJ0b3AgbGVmdFxcXCIgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiIERvdHRlZEJvcmRlckJlbG93IFtic0NvbmZpZ109XFxcInsgc2hvd1dlZWtOdW1iZXJzOiBmYWxzZSB9XFxcIj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwidHh0VGl0ZWxcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5UaXRlbDo8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInR4dFRpdGVsXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIlRpdGVsXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwiZGRsU3RhdHVzXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+U3RhdHVzPC9sYWJlbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93biBjb2wtc20tNFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XFxcImRkbFN0YXR1c1xcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJTdGF0dXNcXFwiIERvdHRlZEJvcmRlckJlbG93IGNsYXNzPVxcXCJ3aWR0aDEwMHBlcmNlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiLTFcXFwiPlNlbGVjdGVlcjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCBzdHMgb2YgU3RhdHVzTGlzdEl0ZW1zXFxcIiBbdmFsdWVdPVxcXCJzdHMudHZTdGF0dXNJRFxcXCIgW2lubmVySFRNTF09XFxcInN0cy5zdGF0dXNcXFwiPjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwidHh0QmVzY2hyaWp2aW5nXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+QmVzY2hyaWp2aW5nOjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwidHh0QmVzY2hyaWp2aW5nXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcIkJlc2NocmlqdmluZ1xcXCIgRG90dGVkQm9yZGVyQmVsb3cgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcImRkbEdlZmFjdHVyZWVyZFxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPkdlZmFjdHVyZWVyZDwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24gY29sLXNtLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJkZGxHZWZhY3R1cmVlcmRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiR2VmYWN0dXJlZXJkXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwid2lkdGgxMDBwZXJjZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIi0xXFxcIj5TZWxlY3RlZXI8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIjFcXFwiPkphPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCIwXFxcIj5OZWU8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPjxsYWJlbCBmb3I9XFxcInR4dFJlZmVyZW50aWVcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5SZWZlcmVudGllOjwvbGFiZWw+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwidHh0UmVmZXJlbnRpZVxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJSZWZlcmVudGllXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+PGxhYmVsIGZvcj1cXFwiZGRsRG9zc2llckJlaGVlcmRlclxcXCIgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPkRvc3NpZXJCZWhlZXJkZXI8L2xhYmVsPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duIGNvbC1zbS00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cXFwiZGRsRG9zc2llckJlaGVlcmRlclxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJEb3NzaWVyQmVoZWVyZGVyXFxcIiBEb3R0ZWRCb3JkZXJCZWxvdyBjbGFzcz1cXFwid2lkdGgxMDBwZXJjZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIi0xXFxcIj5TZWxlY3RlZXI8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgZG9zc2JlaCBvZiBEb3NzaWVyQmVoZWVyZGVyTGlzdEl0ZW1zXFxcIiBbdmFsdWVdPVxcXCJkb3NzYmVoLmRvc3NpZXJCZWhlZXJkZXJJRFxcXCIgW2lubmVySFRNTF09XFxcImRvc3NiZWgubmFhbVxcXCI+PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00IGNvbC1zbS1vZmZzZXQtOFxcXCI+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcInJhaXNlU2VhcmNoKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiPnt7YXBwTGFiZWxzLlNlbmR9fTwvYnV0dG9uPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZm9ybT5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctdHYtem9la3VpdGdlYnJlaWQvZ3ctdHYtem9la3VpdGdlYnJlaWQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDYyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ3ctdHYtem9la3VpdGdlYnJlaWQuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LXR2LXpvZWt1aXRnZWJyZWlkL2d3LXR2LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDYzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvX0dXL2d3LXR2LXpvZWt1aXRnZWJyZWlkL2d3LXR2LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDYzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBHd0VkaXRSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vZ3ctZWRpdC5yb3V0aW5nLm1vZHVsZVwiO1xyXG5cclxuLy8gQ3VzdG9tZXIgUmVsYXRlZFxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOYXZNZW51Q29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRmV0Y2hEYXRhQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZmV0Y2hkYXRhL2ZldGNoZGF0YS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRmlsZVVwbG9hZGVyQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZmlsZS11cGxvYWRlci9maWxlLXVwbG9hZGVyLmNvbXBvbmVudFwiO1xyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBGb3JiaWRkZW5Db21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mb3JiaWRkZW4vZm9yYmlkZGVuLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFcnJvckNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Vycm9yL2Vycm9yLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgSW5zY2hyaWp2ZW5BbHNHZWJydWlrZXJDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9pbnNjaHJpanZlbi1hbHMtZ2VicnVpa2VyL2luc2NocmlqdmVuLWFscy1nZWJydWlrZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEJyYW5jaGVDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9pbnNjaHJpanZlbi1hbHMtZ2VicnVpa2VyL2JyYW5jaGUvYnJhbmNoZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQmVyb2Vwc29yZ2FuaXNhdGllQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaW5zY2hyaWp2ZW4tYWxzLWdlYnJ1aWtlci9iZXJvZXBzb3JnYW5pc2F0aWUvYmVyb2Vwc29yZ2FuaXNhdGllLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgQWxsb3dPbmx5TnVtYmVyc0RpcmVjdGl2ZSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2RpcmVjdGl2ZXMvYWxsb3dPbmx5TnVtYmVycy5kaXJlY3RpdmVzXCI7XHJcbmltcG9ydCB7IERvdHRlZEJvcmRlckJlbG93RGlyZWN0aXZlIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZGlyZWN0aXZlcy9kb3R0ZWRib3JkZXJCZWxvdy5kaXJlY3RpdmVzXCI7XHJcblxyXG5cclxuaW1wb3J0IHsgVGVjaG5pc2NoVmVyc2xhZ0RldGFpbENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RlY2huaXNjaC12ZXJzbGFnLWRldGFpbC90ZWNobmlzY2gtdmVyc2xhZy1kZXRhaWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRlY2huaXNjaFZlcnNsYWdJbmRpZW5lbkNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RlY2huaXNjaC12ZXJzbGFnLWluZGllbmVuL3RlY2huaXNjaC12ZXJzbGFnLWluZGllbmVuLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUZWNobmlzY2hWZXJzbGFnT2tDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90ZWNobmlzY2gtdmVyc2xhZy1vay90ZWNobmlzY2gtdmVyc2xhZy1vay5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVGVjaG5pc2NoVmVyc2xhZ1N0YXR1c0NvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RlY2huaXNjaC12ZXJzbGFnLXN0YXR1cy90ZWNobmlzY2gtdmVyc2xhZy1zdGF0dXMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRlY2huaXNjaFZlcnNsYWdab2VrZW5Db21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90ZWNobmlzY2gtdmVyc2xhZy16b2VrZW4vdGVjaG5pc2NoLXZlcnNsYWctem9la2VuLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUZWNobmlzY2hWZXJzbGFnWm9uZVJlZ2lzdHJhdGllQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdGVjaG5pc2NoLXZlcnNsYWctem9uZS1yZWdpc3RyYXRpZS90ZWNobmlzY2gtdmVyc2xhZy16b25lLXJlZ2lzdHJhdGllLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgVHJhbnNwb3J0VG9wQ2dyTWVsZGVuQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdHJhbnNwb3J0LXRvcC1jZ3ItbWVsZGVuL3RyYW5zcG9ydC10b3AtY2dyLW1lbGRlbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVHJhbnNwb3J0VG9wQ2dyRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdHJhbnNwb3J0LXRvcC1jZ3ItZGV0YWlsL3RyYW5zcG9ydC10b3AtY2dyLWRldGFpbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVHJhbnNwb3J0VG9wQ2dyVmVya2xhcmluZ0NvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RyYW5zcG9ydC10b3AtY2dyLXZlcmtsYXJpbmcvdHJhbnNwb3J0LXRvcC1jZ3ItdmVya2xhcmluZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVHJhbnNwb3J0VG9wQ2dyU3RhdHVzQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdHJhbnNwb3J0LXRvcC1jZ3Itc3RhdHVzL3RyYW5zcG9ydC10b3AtY2dyLXN0YXR1cy5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IEdyb25kdmVyemV0dG9lbGF0aW5nQWFudnJhYWdPa0NvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dyb25kdmVyemV0dG9lbGF0aW5nLWFhbnZyYWFnb2svZ3JvbmR2ZXJ6ZXR0b2VsYXRpbmctYWFudnJhYWdvay5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgR3JvbmR2ZXJ6ZXR0b2VsYXRpbmdBYW52cmFnZW5Db21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ncm9uZHZlcnpldHRvZWxhdGluZy1hYW52cmFnZW4vZ3JvbmR2ZXJ6ZXR0b2VsYXRpbmctYWFudnJhZ2VuLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBHcm9uZHZlcnpldHRvZWxhdGluZ0luZGllbmVuQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ3JvbmR2ZXJ6ZXR0b2VsYXRpbmctaW5kaWVuZW4vZ3JvbmR2ZXJ6ZXR0b2VsYXRpbmctaW5kaWVuZW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEdyb25kdmVyemV0dG9lbGF0aW5nU3RhdHVzQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ3JvbmR2ZXJ6ZXR0b2VsYXRpbmctc3RhdHVzL2dyb25kdmVyemV0dG9lbGF0aW5nLXN0YXR1cy5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IEJvZGVtYmVoZWVycmFwcG9ydEFhbnZyYWdlbkNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2JvZGVtYmVoZWVycmFwcG9ydC1hYW52cmFnZW4vYm9kZW1iZWhlZXJyYXBwb3J0LWFhbnZyYWdlbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQm9kZW1iZWhlZXJyYXBwb3J0U3RhdHVzQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYm9kZW1iZWhlZXJyYXBwb3J0LXN0YXR1cy9ib2RlbWJlaGVlcnJhcHBvcnQtc3RhdHVzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBCb2RlbWJlaGVlcnJhcHBvcnREZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ib2RlbWJlaGVlcnJhcHBvcnQtZGV0YWlsL2JvZGVtYmVoZWVycmFwcG9ydC1kZXRhaWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEJvZGVtYmVoZWVycmFwcG9ydEdyaWRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ib2RlbWJlaGVlcnJhcHBvcnQtZ3JpZC9ib2RlbWJlaGVlcnJhcHBvcnQtZ3JpZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQm9kZW1iZWhlZXJyYXBwb3J0T25saW5lQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYm9kZW1iZWhlZXJyYXBwb3J0LW9ubGluZS9ib2RlbWJlaGVlcnJhcHBvcnQtb25saW5lLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgVG9wR3JvbmR0cmFuc3BvcnRTdGF0dXNDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90b3AtZ3JvbmR0cmFuc3BvcnQtc3RhdHVzL3RvcC1ncm9uZHRyYW5zcG9ydC1zdGF0dXMuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBLbGVpbmVXZXJ2ZW5BYW52cmFnZW5Db21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9rbGVpbmV3ZXJ2ZW4tYWFudnJhZ2VuL2tsZWluZXdlcnZlbi1hYW52cmFnZW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEtsZWluZVdlcnZlbkluZGllbmVuQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMva2xlaW5ld2VydmVuLWluZGllbmVuL2tsZWluZXdlcnZlbi1pbmRpZW5lbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgS2xlaW5lV2VydmVuU3RhdHVzQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMva2xlaW5ld2VydmVuLXN0YXR1cy9rbGVpbmV3ZXJ2ZW4tc3RhdHVzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBLbGVpbmVXZXJ2ZW5EZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9rbGVpbmV3ZXJ2ZW4tZGV0YWlsL2tsZWluZXdlcnZlbi1kZXRhaWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEtsZWluZVdlcnZlblZlcmtsYXJpbmdDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vL2NvbXBvbmVudHMva2xlaW5ld2VydmVuLXZlcmtsYXJpbmcva2xlaW5ld2VydmVuLXZlcmtsYXJpbmcuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBQdWluTG1ycEFhbnZyYWdlbkNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3B1aW4tbG1ycC1hYW52cmFnZW4vcHVpbi1sbXJwLWFhbnZyYWdlbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUHVpbkxtcnBJbmRpZW5lbkNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3B1aW4tbG1ycC1pbmRpZW5lbi9wdWluLWxtcnAtaW5kaWVuZW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFB1aW5MbXJwU3RhdHVzQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcHVpbi1sbXJwLXN0YXR1cy9wdWluLWxtcnAtc3RhdHVzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQdWluVGVjaG5pc2NoVmVyc2xhZ0RhdGFDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wdWluLWxtcnAtaW5kaWVuZW4vcHVpbi10ZWNobmlzY2gtdmVyc2xhZy1kYXRhL3B1aW4tdGVjaG5pc2NoLXZlcnNsYWctZGF0YS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUHVpblRlY2huaXNjaFZlcnNsYWdEYXRhSXRlbUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3B1aW4tbG1ycC1pbmRpZW5lbi9wdWluLXRlY2huaXNjaC12ZXJzbGFnLWRhdGEtaXRlbS9wdWluLXRlY2huaXNjaC12ZXJzbGFnLWRhdGEtaXRlbS5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IFRhYmxlUGFnZXJDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90YWJsZS1wYWdlci90YWJsZS1wYWdlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgS3dhbGl0ZWl0ZW5MZWdlbmRlQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvS3dhbGl0ZWl0ZW5MZWdlbmRlL2t3YWxpdGVpdGVuLWxlZ2VuZGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEt3YWxpdGVpdGVuTGVnZW5kZTIwMDhDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vL2NvbXBvbmVudHMvS3dhbGl0ZWl0ZW5MZWdlbmRlMjAwOC9rd2FsaXRlaXRlbi1sZWdlbmRlMjAwOC5jb21wb25lbnRcIjtcclxuXHJcbi8vIEdXIFJlbGF0ZWRcclxuaW1wb3J0IHsgZ3dIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX0dXL2d3LWhvbWUvZ3ctaG9tZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZ3dCQlJHcmlkQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX0dXL2d3LWJici1ncmlkL2d3LWJici1ncmlkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnd0JCUlpvZWtVaXRnZWJyZWlkQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX0dXL2d3LWJici16b2VrdWl0Z2VicmVpZC9ndy1iYnItem9la3VpdGdlYnJlaWQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3RG9jdW1lbnRzQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX0dXL2d3LWRvY3VtZW50cy9ndy1kb2N1bWVudHMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3RG9zc2llcmJlaGVlcmRlckVkaXRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3ctZG9zc2llcmJlaGVlcmRlci1lZGl0L2d3LWRvc3NpZXJiZWhlZXJkZXItZWRpdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZ3dHdG1FZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX0dXL2d3LWd0bS1lZGl0L2d3LWd0bS1lZGl0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnd0dUTUdyaWRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3ctZ3RtLWdyaWQvZ3ctZ3RtLWdyaWQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3R1RNWm9la1VpdGdlYnJlaWRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3ctZ3RtLXpvZWt1aXRnZWJyZWlkL2d3LWd0bS16b2VrdWl0Z2VicmVpZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZ3dHVlRHcmlkQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX0dXL2d3LWd2dC1ncmlkL2d3LWd2dC1ncmlkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnd0dWVFpvZWtVaXRnZWJyZWlkQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX0dXL2d3LWd2dC16b2VrdWl0Z2VicmVpZC9ndy1ndnQtem9la3VpdGdlYnJlaWQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3S2xhbnRFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX0dXL2d3LWtsYW50LWVkaXQvZ3cta2xhbnQtZWRpdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZ3dLbGFudEdyaWRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3cta2xhbnQtZ3JpZC9ndy1rbGFudC1ncmlkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnd0tsYW50V2lqekdyaWRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3cta2xhbnR3aWp6LWdyaWQvZ3cta2xhbnR3aWp6LWdyaWQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3S2xhbnRab2VrVWl0Z2VicmVpZENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL19HVy9ndy1rbGFudC16b2VrdWl0Z2VicmVpZC9ndy1rbGFudC16b2VrdWl0Z2VicmVpZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZ3dLV0dyaWRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3cta3ctZ3JpZC9ndy1rdy1ncmlkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnd0tXWm9la1VpdGdlYnJlaWRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3cta3ctem9la3VpdGdlYnJlaWQvZ3cta3ctem9la3VpdGdlYnJlaWQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3VFZHcmlkQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX0dXL2d3LXR2LWdyaWQvZ3ctdHYtZ3JpZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZ3dUVlpvZWtVaXRnZWJyZWlkQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX0dXL2d3LXR2LXpvZWt1aXRnZWJyZWlkL2d3LXR2LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnd0VtYWlsSGlzdG9yaWVrQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX0dXL2d3LWVtYWlsLWhpc3Rvcmllay1ncmlkL2d3LWVtYWlsLWhpc3Rvcmllay1ncmlkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnd1R2QWZzbHVpdFJlZGVuQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX0dXL2d3LXR2LWVkaXQvZ3ctdHYtYWZzbHVpdC1yZWRlbi9ndy10di1hZnNsdWl0LXJlZGVuLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnd1R2RXZhbHVhdGllQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX0dXL2d3LXR2LWVkaXQvZ3ctdHYtZXZhbHVhdGllL2d3LXR2LWV2YWx1YXRpZS5jb21wb25lbnRcIjtcclxuXHJcblxyXG5pbXBvcnQgeyBOZ3hEYXRhdGFibGVNb2R1bGUgfSBmcm9tIFwiQHN3aW1sYW5lL25neC1kYXRhdGFibGVcIjtcclxuaW1wb3J0IHsgVHJlZU1vZHVsZSB9IGZyb20gXCJhbmd1bGFyLXRyZWUtY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRvYXN0ck1vZHVsZSB9IGZyb20gXCJuZ3gtdG9hc3RyXCI7XHJcblxyXG5pbXBvcnQgeyBUb29sdGlwTW9kdWxlLCBCc0RhdGVwaWNrZXJNb2R1bGUsIFBvcG92ZXJNb2R1bGUgfSBmcm9tIFwibmd4LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBkZWZpbmVMb2NhbGUgfSBmcm9tIFwibmd4LWJvb3RzdHJhcC9jaHJvbm9zXCI7XHJcbmltcG9ydCB7IG5sQmVMb2NhbGUgfSBmcm9tIFwibmd4LWJvb3RzdHJhcC9sb2NhbGVcIjtcclxuZGVmaW5lTG9jYWxlKFwiYm9vdHN0cmFwLWxvY2FsZS1ubGJlXCIsIG5sQmVMb2NhbGUpO1xyXG5cclxuaW1wb3J0IHsgRmlsZVVwbG9hZE1vZHVsZSB9IGZyb20gXCJuZzItZmlsZS11cGxvYWRcIjtcclxuXHJcbmltcG9ydCB7IFRyaW1WYWx1ZUFjY2Vzc29yTW9kdWxlIH0gZnJvbSBcIm5nLXRyaW0tdmFsdWUtYWNjZXNzb3JcIjtcclxuXHJcbmltcG9ydCB7IGd3VHZFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4vZ3ctdHYtZWRpdC9ndy10di1lZGl0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnd0VtYWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vZ3ctZW1haWwvZ3ctZW1haWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3R3Z0RWRpdENvbXBvbmVudCB9IGZyb20gXCIuL2d3LWd2dC1lZGl0L2d3LWd2dC1lZGl0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnd0d2dFN0dWRpZUNvbXBvbmVudCB9IGZyb20gXCIuL2d3LWd2dC1lZGl0L2d3LWd2dC1zdHVkaWUvZ3ctZ3Z0LXN0dWRpZS5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IGd3RXhwb3J0Q29tcG9uZW50IH0gZnJvbSBcIi4vZ3ctZXhwb3J0L2d3LWV4cG9ydC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZ3dFeHBvcnRHcmlkQ29tcG9uZW50IH0gZnJvbSBcIi4vZ3ctZXhwb3J0LWdyaWQvZ3ctZXhwb3J0LWdyaWQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3S3dFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4vZ3cta3ctZWRpdC9ndy1rdy1lZGl0LmNvbXBvbmVudFwiO1xyXG5cclxuXHJcbmltcG9ydCB7IEh0dHBNYWlsU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLW1haWwuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBzYWZlSHRtbCB9IGZyb20gXCIuLi9mZXRjaGRhdGEvcGlwZS10ZXN0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBFdmVudExpc3RlbmVyU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9ldmVudC1saXN0ZW5lci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGd3UHVpbkxtcnBFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4vZ3ctcHVpbi1sbXJwLWVkaXQvZ3ctcHVpbi1sbXJwLWVkaXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3TW9kYWxHcmlkQ29tcG9uZW50IH0gZnJvbSBcIi4vZ3ctbW9kYWwtZ3JpZC9ndy1tb2RhbC1ncmlkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnd01vZGFsUHVpbkNvbXBvbmVudCB9IGZyb20gXCIuL2d3LXB1aW4tbG1ycC1lZGl0L2d3LW1vZGFsLXB1aW4vZ3ctbW9kYWwtcHVpbi5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IEh0dHBJbnRlcmNlcHRvclNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC1pbnRlcmNlcHRvci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEh0dHBCQlJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtYmJyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSHR0cERvc3NpZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtZG9zc2llci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEh0dHBGaWxlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLWZpbGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIdHRwR1RNU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLWd0bS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEh0dHBHVlRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtZ3Z0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSHR0cEtsYW50U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLWtsYW50LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSHR0cEtsZWluZVdlcnZlblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC1rbGVpbmV3ZXJ2ZW4uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIdHRwVFZTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtdHYuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIdHRwVFZab25lU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLXR2em9uZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEh0dHBQdWluU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLXB1aW4uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBMb2NhbHN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2xvY2Fsc3RvcmFnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IExvYWRpbmdBbmltYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2xvYWRpbmctYW5pbWF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3dHcmlkUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2d3LWdyaWQucm91dGluZy5tb2R1bGVcIjtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBGaWxlVXBsb2FkTW9kdWxlLFxyXG4gICAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgICAgIE5neERhdGF0YWJsZU1vZHVsZSxcclxuICAgICAgICBUcmVlTW9kdWxlLFxyXG4gICAgICAgIFRyaW1WYWx1ZUFjY2Vzc29yTW9kdWxlLFxyXG4gICAgICAgIFRvb2x0aXBNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgICAgIEJzRGF0ZXBpY2tlck1vZHVsZS5mb3JSb290KCksXHJcbiAgICAgICAgUG9wb3Zlck1vZHVsZS5mb3JSb290KCksXHJcbiAgICAgICAvLyBUb2FzdHJNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgICAgIEd3R3JpZFJvdXRpbmdNb2R1bGVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgUm91dGVyTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gR1cgUmVsYXRlZFxyXG5cclxuICAgICAgICBnd0hvbWVDb21wb25lbnQsIFxyXG4gICAgICAgIGd3QkJSR3JpZENvbXBvbmVudCxcclxuICAgICAgICBnd0JCUlpvZWtVaXRnZWJyZWlkQ29tcG9uZW50LCAgICAgIFxyXG4gICAgICAgIGd3R1RNR3JpZENvbXBvbmVudCxcclxuICAgICAgICBnd0dUTVpvZWtVaXRnZWJyZWlkQ29tcG9uZW50LFxyXG4gICAgICAgIGd3R1ZUR3JpZENvbXBvbmVudCxcclxuICAgICAgICBnd0dWVFpvZWtVaXRnZWJyZWlkQ29tcG9uZW50LFxyXG4gICAgICAgIGd3S2xhbnRHcmlkQ29tcG9uZW50LFxyXG4gICAgICAgIGd3S2xhbnRXaWp6R3JpZENvbXBvbmVudCxcclxuICAgICAgICBnd0tsYW50Wm9la1VpdGdlYnJlaWRDb21wb25lbnQsXHJcbiAgICAgICAgZ3dLV0dyaWRDb21wb25lbnQsXHJcbiAgICAgICAgZ3dLV1pvZWtVaXRnZWJyZWlkQ29tcG9uZW50LFxyXG4gICAgICAgIGd3VFZHcmlkQ29tcG9uZW50LFxyXG4gICAgICAgIGd3VFZab2VrVWl0Z2VicmVpZENvbXBvbmVudCxcclxuXHJcblxyXG4gICAgXSxcclxuXHJcblxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogSHR0cEludGVyY2VwdG9yU2VydmljZSwgbXVsdGk6IHRydWUgfSxcclxuICAgICAgICBBdXRoZW50aWNhdGlvblNlcnZpY2UsXHJcbiAgICAgICAgSHR0cEJCUlNlcnZpY2UsXHJcbiAgICAgICAgSHR0cERvc3NpZXJTZXJ2aWNlLFxyXG4gICAgICAgIEh0dHBGaWxlU2VydmljZSxcclxuICAgICAgICBIdHRwR1RNU2VydmljZSxcclxuICAgICAgICBIdHRwR1ZUU2VydmljZSxcclxuICAgICAgICBIdHRwS2xhbnRTZXJ2aWNlLFxyXG4gICAgICAgIEh0dHBLbGVpbmVXZXJ2ZW5TZXJ2aWNlLFxyXG4gICAgICAgIEh0dHBUVlNlcnZpY2UsXHJcbiAgICAgICAgSHR0cFRWWm9uZVNlcnZpY2UsXHJcbiAgICAgICAgSHR0cFB1aW5TZXJ2aWNlLFxyXG4gICAgICAgIEh0dHBNYWlsU2VydmljZSxcclxuICAgICAgICBMb2NhbHN0b3JhZ2VTZXJ2aWNlLFxyXG4gICAgICAgIExvYWRpbmdBbmltYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIEV2ZW50TGlzdGVuZXJTZXJ2aWNlXHJcbiAgICAgXHJcbiAgICBdLCBcclxuIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG4gICBcclxufSlcclxuZXhwb3J0IGNsYXNzIEd3R3JpZE1vZHVsZSB7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi1yb3V0ZXItbG9hZGVyL3NyYyEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctZ3JpZC5tb2R1bGUudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgRGF0ZVBpcGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5cclxuXHJcblxyXG4vLyBDdXN0b21lciBSZWxhdGVkXHJcblxyXG5cclxuLy8gR1cgUmVsYXRlZFxyXG5pbXBvcnQgeyBnd0hvbWVDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3ctaG9tZS9ndy1ob21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnd0JCUkdyaWRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3ctYmJyLWdyaWQvZ3ctYmJyLWdyaWQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3QkJSWm9la1VpdGdlYnJlaWRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3ctYmJyLXpvZWt1aXRnZWJyZWlkL2d3LWJici16b2VrdWl0Z2VicmVpZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZ3dEb2N1bWVudHNDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3ctZG9jdW1lbnRzL2d3LWRvY3VtZW50cy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZ3dEb3NzaWVyYmVoZWVyZGVyRWRpdENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL19HVy9ndy1kb3NzaWVyYmVoZWVyZGVyLWVkaXQvZ3ctZG9zc2llcmJlaGVlcmRlci1lZGl0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnd0d0bUVkaXRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3ctZ3RtLWVkaXQvZ3ctZ3RtLWVkaXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3R1RNR3JpZENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL19HVy9ndy1ndG0tZ3JpZC9ndy1ndG0tZ3JpZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZ3dHVE1ab2VrVWl0Z2VicmVpZENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL19HVy9ndy1ndG0tem9la3VpdGdlYnJlaWQvZ3ctZ3RtLXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnd0dWVEdyaWRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3ctZ3Z0LWdyaWQvZ3ctZ3Z0LWdyaWQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3R1ZUWm9la1VpdGdlYnJlaWRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3ctZ3Z0LXpvZWt1aXRnZWJyZWlkL2d3LWd2dC16b2VrdWl0Z2VicmVpZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZ3dLbGFudEVkaXRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3cta2xhbnQtZWRpdC9ndy1rbGFudC1lZGl0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnd0tsYW50R3JpZENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL19HVy9ndy1rbGFudC1ncmlkL2d3LWtsYW50LWdyaWQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3S2xhbnRXaWp6R3JpZENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL19HVy9ndy1rbGFudHdpanotZ3JpZC9ndy1rbGFudHdpanotZ3JpZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZ3dLbGFudFpvZWtVaXRnZWJyZWlkQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX0dXL2d3LWtsYW50LXpvZWt1aXRnZWJyZWlkL2d3LWtsYW50LXpvZWt1aXRnZWJyZWlkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnd0tXR3JpZENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL19HVy9ndy1rdy1ncmlkL2d3LWt3LWdyaWQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3S1dab2VrVWl0Z2VicmVpZENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL19HVy9ndy1rdy16b2VrdWl0Z2VicmVpZC9ndy1rdy16b2VrdWl0Z2VicmVpZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZ3dUVkdyaWRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3ctdHYtZ3JpZC9ndy10di1ncmlkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnd1RWWm9la1VpdGdlYnJlaWRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3ctdHYtem9la3VpdGdlYnJlaWQvZ3ctdHYtem9la3VpdGdlYnJlaWQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3RW1haWxIaXN0b3JpZWtDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3ctZW1haWwtaGlzdG9yaWVrLWdyaWQvZ3ctZW1haWwtaGlzdG9yaWVrLWdyaWQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3VHZBZnNsdWl0UmVkZW5Db21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3ctdHYtZWRpdC9ndy10di1hZnNsdWl0LXJlZGVuL2d3LXR2LWFmc2x1aXQtcmVkZW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3VHZFdmFsdWF0aWVDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3ctdHYtZWRpdC9ndy10di1ldmFsdWF0aWUvZ3ctdHYtZXZhbHVhdGllLmNvbXBvbmVudFwiO1xyXG5cclxuXHJcbmltcG9ydCB7IE5neERhdGF0YWJsZU1vZHVsZSB9IGZyb20gXCJAc3dpbWxhbmUvbmd4LWRhdGF0YWJsZVwiO1xyXG5pbXBvcnQgeyBUcmVlTW9kdWxlIH0gZnJvbSBcImFuZ3VsYXItdHJlZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVG9hc3RyTW9kdWxlIH0gZnJvbSBcIm5neC10b2FzdHJcIjtcclxuXHJcbmltcG9ydCB7IFRvb2x0aXBNb2R1bGUsIEJzRGF0ZXBpY2tlck1vZHVsZSwgUG9wb3Zlck1vZHVsZSB9IGZyb20gXCJuZ3gtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IGRlZmluZUxvY2FsZSB9IGZyb20gXCJuZ3gtYm9vdHN0cmFwL2Nocm9ub3NcIjtcclxuaW1wb3J0IHsgbmxCZUxvY2FsZSB9IGZyb20gXCJuZ3gtYm9vdHN0cmFwL2xvY2FsZVwiO1xyXG5kZWZpbmVMb2NhbGUoXCJib290c3RyYXAtbG9jYWxlLW5sYmVcIiwgbmxCZUxvY2FsZSk7XHJcblxyXG5pbXBvcnQgeyBGaWxlVXBsb2FkTW9kdWxlIH0gZnJvbSBcIm5nMi1maWxlLXVwbG9hZFwiO1xyXG5cclxuaW1wb3J0IHsgVHJpbVZhbHVlQWNjZXNzb3JNb2R1bGUgfSBmcm9tIFwibmctdHJpbS12YWx1ZS1hY2Nlc3NvclwiO1xyXG5pbXBvcnQgeyBzYWZlSHRtbCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ZldGNoZGF0YS9waXBlLXRlc3QubW9kdWxlXCI7XHJcbmltcG9ydCB7IGd3VHZFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX0dXL2d3LXR2LWVkaXQvZ3ctdHYtZWRpdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZ3dFbWFpbENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL19HVy9ndy1lbWFpbC9ndy1lbWFpbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZ3dHdnRFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX0dXL2d3LWd2dC1lZGl0L2d3LWd2dC1lZGl0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnd0d2dFN0dWRpZUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL19HVy9ndy1ndnQtZWRpdC9ndy1ndnQtc3R1ZGllL2d3LWd2dC1zdHVkaWUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3TW9kYWxHcmlkQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX0dXL2d3LW1vZGFsLWdyaWQvZ3ctbW9kYWwtZ3JpZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZ3dFeHBvcnRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9fR1cvZ3ctZXhwb3J0L2d3LWV4cG9ydC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZ3dFeHBvcnRHcmlkQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX0dXL2d3LWV4cG9ydC1ncmlkL2d3LWV4cG9ydC1ncmlkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnd0t3RWRpdENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL19HVy9ndy1rdy1lZGl0L2d3LWt3LWVkaXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGd3UHVpbkxtcnBFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX0dXL2d3LXB1aW4tbG1ycC1lZGl0L2d3LXB1aW4tbG1ycC1lZGl0LmNvbXBvbmVudFwiO1xyXG5cclxuXHJcbmltcG9ydCB7IGd3TW9kYWxQdWluQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX0dXL2d3LXB1aW4tbG1ycC1lZGl0L2d3LW1vZGFsLXB1aW4vZ3ctbW9kYWwtcHVpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSHR0cE1haWxTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2VydmljZXMvaHR0cC1tYWlsLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRXZlbnRMaXN0ZW5lclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zZXJ2aWNlcy9ldmVudC1saXN0ZW5lci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEFsbG93T25seU51bWJlcnNEaXJlY3RpdmUgfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9hbGxvd09ubHlOdW1iZXJzLmRpcmVjdGl2ZXNcIjtcclxuaW1wb3J0IHsgRG90dGVkQm9yZGVyQmVsb3dEaXJlY3RpdmUgfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9kb3R0ZWRib3JkZXJCZWxvdy5kaXJlY3RpdmVzXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IExvYWRpbmdBbmltYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2xvYWRpbmctYW5pbWF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSHR0cFB1aW5TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtcHVpbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEh0dHBUVlpvbmVTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtdHZ6b25lLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSHR0cFRWU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLXR2LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSHR0cEtsZWluZVdlcnZlblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC1rbGVpbmV3ZXJ2ZW4uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIdHRwS2xhbnRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAta2xhbnQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIdHRwR1ZUU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLWd2dC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEh0dHBHVE1TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtZ3RtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSHR0cEZpbGVTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAtZmlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEh0dHBEb3NzaWVyU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLWRvc3NpZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIdHRwQkJSU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLWJici5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEh0dHBJbnRlcmNlcHRvclNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC1pbnRlcmNlcHRvci5zZXJ2aWNlXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcIlwiLCBjYW5BY3RpdmF0ZTogW0F1dGhlbnRpY2F0aW9uU2VydmljZV0sIGNvbXBvbmVudDogZ3dIb21lQ29tcG9uZW50LCBkYXRhOiB7IHN0YXRlOiBcImd3L2hvbWUvXCIgfSB9LFxyXG5dO1xyXG5cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG5cclxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBSb3V0ZXJNb2R1bGVcclxuICAgIF0sXHJcblxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgIHsgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBIdHRwSW50ZXJjZXB0b3JTZXJ2aWNlLCBtdWx0aTogdHJ1ZSB9LFxyXG4gICAgICAgIEF1dGhlbnRpY2F0aW9uU2VydmljZSxcclxuICAgICAgICBIdHRwQkJSU2VydmljZSxcclxuICAgICAgICBIdHRwRG9zc2llclNlcnZpY2UsXHJcbiAgICAgICAgSHR0cEZpbGVTZXJ2aWNlLFxyXG4gICAgICAgIEh0dHBHVE1TZXJ2aWNlLFxyXG4gICAgICAgIEh0dHBHVlRTZXJ2aWNlLFxyXG4gICAgICAgIEh0dHBLbGFudFNlcnZpY2UsXHJcbiAgICAgICAgSHR0cEtsZWluZVdlcnZlblNlcnZpY2UsXHJcbiAgICAgICAgSHR0cFRWU2VydmljZSxcclxuICAgICAgICBIdHRwVFZab25lU2VydmljZSxcclxuICAgICAgICBIdHRwUHVpblNlcnZpY2UsXHJcbiAgICAgICAgSHR0cE1haWxTZXJ2aWNlLFxyXG4gICAgICAgIExvYWRpbmdBbmltYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIEV2ZW50TGlzdGVuZXJTZXJ2aWNlLCBcclxuICAgICAgICBEYXRlUGlwZVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3dHcmlkUm91dGluZ01vZHVsZSB7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi1yb3V0ZXItbG9hZGVyL3NyYyEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9fR1cvZ3ctZ3JpZC5yb3V0aW5nLm1vZHVsZS50cyJdLCJzb3VyY2VSb290IjoiIn0=