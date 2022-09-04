"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_home_home_module_ts"],{

/***/ 7726:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/home/home-components/mainpage/mainpage.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainpageComponent": () => (/* binding */ MainpageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _mainpage_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainpage.component.html?ngResource */ 8736);
/* harmony import */ var _mainpage_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainpage.component.scss?ngResource */ 4848);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_API_Settings_ulb_urls_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/API/Settings/ulb-urls.service */ 7705);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/pipes/safe.pipe */ 7505);







let MainpageComponent = class MainpageComponent {
    constructor(apiService, toastr) {
        this.apiService = apiService;
        this.toastr = toastr;
        this.spinnerloader = false;
        this.ulbURLSData = [];
        this.ulbUrl = '';
    }
    ngOnInit() {
        this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
        this.getULBURLsFun();
    }
    getULBURLsFun() {
        this.spinnerloader = true;
        this.apiService.fetchAllUlbURLs().subscribe((result) => {
            if (result.success) {
                if (this.userDetails.user_role === 'super_admin') {
                    this.ulbURLSData = result.data;
                    this.ulbUrl = this.ulbURLSData.length > 0 ? result.data[0].ulb_url : '';
                }
                else {
                    this.ulbURLSData = result.data.filter((item) => {
                        return item.ulb_name.toLowerCase() == this.userDetails.user_ulb.toLowerCase();
                    });
                    this.ulbUrl = this.ulbURLSData.length > 0 ? this.ulbURLSData[0].ulb_url : '';
                }
                this.spinnerloader = false;
            }
        }, error => {
            this.spinnerloader = false;
            this.toastr.error('Internal server error.');
        });
    }
    fetchURL() {
    }
};
MainpageComponent.ctorParameters = () => [
    { type: _services_API_Settings_ulb_urls_service__WEBPACK_IMPORTED_MODULE_2__.UlbUrlsService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService }
];
MainpageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-mainpage',
        template: _mainpage_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [_services_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_3__.SafePipe],
        styles: [_mainpage_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MainpageComponent);



/***/ }),

/***/ 4601:
/*!*****************************************************!*\
  !*** ./src/app/modules/home/home-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoutingModule": () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_components_mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-components/mainpage/mainpage.component */ 7726);




const routes = [
    {
        path: '',
        component: _home_components_mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_0__.MainpageComponent
    },
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomeRoutingModule);



/***/ }),

/***/ 4882:
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 4601);
/* harmony import */ var _home_components_mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-components/mainpage/mainpage.component */ 7726);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 2271);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 4817);





//shared module


let HomeModule = class HomeModule {
};
HomeModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_home_components_mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_1__.MainpageComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrModule
        ]
    })
], HomeModule);



/***/ }),

/***/ 4848:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/home/home-components/mainpage/mainpage.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWlucGFnZS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 8736:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/home/home-components/mainpage/mainpage.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<div *ngIf=\"ulbURLSData.length>0\">\n  <iframe [src]=\"ulbUrl | safe\" height=\"900\" width=\"100%\" target=\"_self\"></iframe>\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_home_home_module_ts.js.map