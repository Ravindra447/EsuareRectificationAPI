"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_admin_admin_module_ts"],{

/***/ 4401:
/*!***********************************************************************!*\
  !*** ./src/app/modules/admin/admin-components/main/main.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.component.html?ngResource */ 2191);
/* harmony import */ var _main_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.component.scss?ngResource */ 494);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let MainComponent = class MainComponent {
    constructor() { }
    ngOnInit() { }
};
MainComponent.ctorParameters = () => [];
MainComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-main',
        template: _main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_main_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MainComponent);



/***/ }),

/***/ 7069:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/admin/admin-components/side-nav/side-nav.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideNavComponent": () => (/* binding */ SideNavComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _side_nav_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side-nav.component.html?ngResource */ 2786);
/* harmony import */ var _side_nav_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-nav.component.scss?ngResource */ 3519);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9128);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_nav_bar_side_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/nav-bar/side-nav.service */ 2710);








//side nav service

let SideNavComponent = class SideNavComponent {
    constructor(breakpointObserver, dialog, router, navService) {
        this.breakpointObserver = breakpointObserver;
        this.dialog = dialog;
        this.router = router;
        this.navService = navService;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__.Breakpoints.Handset)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(result => result.matches), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.shareReplay)());
        this.menuItems = [];
    }
    ngOnInit() {
        this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
        this.fetchNav();
    }
    fetchNav() {
        if (this.userDetails)
            this.getSideNavbarItems();
        else
            this.router.navigateByUrl('login');
    }
    getSideNavbarItems() {
        this.menuItems = this.navService.getSideNavbarItems();
        if (this.userDetails.user_role === 'super_admin') {
            this.menuItems.map(item => {
                if (item.nav_path === 'users' || item.nav_path === 'settings') {
                    item.nav_isAccess = true;
                }
            });
        }
        else {
            this.menuItems.map(item => {
                if (item.nav_path === 'users' || item.nav_path === 'settings') {
                    item.nav_isAccess = false;
                }
            });
        }
    }
    closeSideNav() {
        // if(this.router.url==='/esquare/home')
        // if (this.drawer._mode == 'over') {
        this.drawer.close();
        // }
    }
    logoutFun() {
        localStorage.clear();
        this.getSideNavbarItems();
        this.router.navigateByUrl('login');
    }
};
SideNavComponent.ctorParameters = () => [
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__.BreakpointObserver },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _services_nav_bar_side_nav_service__WEBPACK_IMPORTED_MODULE_2__.SideNavService }
];
SideNavComponent.propDecorators = {
    drawer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['drawer',] }]
};
SideNavComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-side-nav',
        template: _side_nav_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_side_nav_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SideNavComponent);



/***/ }),

/***/ 8134:
/*!*******************************************************!*\
  !*** ./src/app/modules/admin/admin-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminRoutingModule": () => (/* binding */ AdminRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _admin_components_main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-components/main/main.component */ 4401);




const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: _admin_components_main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../home/home.module */ 4882)).then(home => home.HomeModule)
            },
            {
                path: 'rectification',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_admin_admin-modules_rectification_rectification_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../admin/admin-modules/rectification/rectification.module */ 8013)).then(recti => recti.RectificationModule)
            },
            {
                path: 'users',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_admin_admin-modules_manage-users_manage-users_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../admin/admin-modules/manage-users/manage-users.module */ 7020)).then(user => user.ManageUsersModule)
            },
            {
                path: 'settings',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_settings_settings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../settings/settings.module */ 3402)).then(settings => settings.SettingsModule)
            },
        ]
    }
];
let AdminRoutingModule = class AdminRoutingModule {
};
AdminRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AdminRoutingModule);



/***/ }),

/***/ 7442:
/*!***********************************************!*\
  !*** ./src/app/modules/admin/admin.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminModule": () => (/* binding */ AdminModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-routing.module */ 8134);
/* harmony import */ var _admin_components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-components/side-nav/side-nav.component */ 7069);
/* harmony import */ var _admin_components_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-components/main/main.component */ 4401);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 2271);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 4817);






//shared module


let AdminModule = class AdminModule {
};
AdminModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_admin_components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_1__.SideNavComponent, _admin_components_main_main_component__WEBPACK_IMPORTED_MODULE_2__.MainComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrModule
        ]
    })
], AdminModule);



/***/ }),

/***/ 2710:
/*!******************************************************!*\
  !*** ./src/app/services/nav-bar/side-nav.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": () => (/* binding */ ROUTES),
/* harmony export */   "SideNavService": () => (/* binding */ SideNavService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);



const ROUTES = [
    { nav_id: 1, nav_path: 'home', nav_title: 'Home', nav_icon: 'dashboard', nav_isAccess: true },
    { nav_id: 2, nav_path: 'rectification', nav_title: 'Rectifications', nav_icon: 'category', nav_isAccess: true },
    { nav_id: 3, nav_path: 'users', nav_title: 'Manage Users', nav_icon: 'manage_accounts', nav_isAccess: false },
    { nav_id: 4, nav_path: 'settings', nav_title: 'Settings', nav_icon: 'settings_suggest', nav_isAccess: false },
];
let SideNavService = class SideNavService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getSideNavbarItems() {
        return ROUTES;
    }
};
SideNavService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
SideNavService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], SideNavService);



/***/ }),

/***/ 494:
/*!************************************************************************************!*\
  !*** ./src/app/modules/admin/admin-components/main/main.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 3519:
/*!********************************************************************************************!*\
  !*** ./src/app/modules/admin/admin-components/side-nav/side-nav.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlLW5hdi5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 2191:
/*!************************************************************************************!*\
  !*** ./src/app/modules/admin/admin-components/main/main.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<app-side-nav></app-side-nav>";

/***/ }),

/***/ 2786:
/*!********************************************************************************************!*\
  !*** ./src/app/modules/admin/admin-components/side-nav/side-nav.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n    <!-- [opened]=\"(isHandset$ | async) === true\" -->\n    <mat-sidenav #drawer class=\"sidenav\" fixedInViewport [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n        [mode]=\"(isHandset$ | async) ? 'over' : 'side'\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-12 text-center\">\n                    <img class=\"dashboard-logo pull-left\" src=\"../../../../../assets/eesl-logo.png\" alt=\"\">\n                    <img class=\"dashboard-logo pull-right\" src=\"../.././../../../assets/assets/municipality_logo.png\" alt=\"\">\n                </div>\n                <!-- <div class=\"col-12\">\n                  <h2 class=\"logo-header\">Esquare Rectification</h2>\n              </div> -->\n            </div>\n        </div>\n        <hr>\n        <mat-nav-list class=\"nav-link\">\n            <div *ngFor=\"let menuItem of menuItems\">\n                <a *ngIf=\"menuItem.nav_isAccess\" mat-list-item [routerLink]=\"[menuItem.nav_path]\"\n                    (click)=\"closeSideNav()\" routerLinkActive=\"active\">\n                    <i class=\"material-icons\">{{menuItem.nav_icon}}</i>\n                    <p class=\"nav-text\">{{menuItem.nav_title}}</p>\n                </a>\n            </div>\n        </mat-nav-list>\n    </mat-sidenav>\n    <mat-sidenav-content>\n        <mat-toolbar class=\"home-toolbar\">\n            <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\">\n                <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n            </button>\n            <!-- <span *ngIf=\"isHandset$ | async\">Manasa</span> -->\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <div class=\"navbar-wrapper col-6\">\n                    </div>\n                    <div class=\"navbar-icons col-6 ml-auto\" align=\"end\">\n                        <button mat-icon-button class=\"toolbar-logout-icon\" (click)=\"logoutFun()\">\n                            <mat-icon matTooltip=\"Logout\">power_settings_new</mat-icon>\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </mat-toolbar>\n        <!-- Add Content Here -->\n        <div class=\"main-content\">\n            <router-outlet></router-outlet>\n        </div>\n        <app-footer></app-footer>\n    </mat-sidenav-content>\n</mat-sidenav-container>";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_admin_admin_module_ts.js.map