"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_core_core_module_ts"],{

/***/ 1674:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/core/core-components/change-password/change-password.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordComponent": () => (/* binding */ ChangePasswordComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _change_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password.component.html?ngResource */ 4663);
/* harmony import */ var _change_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password.component.scss?ngResource */ 18);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _Services_Titles_Icons_Manage_titles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Services/Titles-Icons-Manage/titles.service */ 7151);
/* harmony import */ var _Services_Titles_Icons_Manage_icons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Services/Titles-Icons-Manage/icons.service */ 171);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _Services_API_user_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Services/API/user-api.service */ 6467);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 4817);










let ChangePasswordComponent = class ChangePasswordComponent {
    constructor(dialogRef, titleService, _formBuilder, userApiService, iconService, toastr) {
        this.dialogRef = dialogRef;
        this.titleService = titleService;
        this._formBuilder = _formBuilder;
        this.userApiService = userApiService;
        this.iconService = iconService;
        this.toastr = toastr;
        this.spinnerloader = false;
    }
    ngOnInit() {
        this.changePasswordFormGroup = this._formBuilder.group({
            old_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            user_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            user_email: [JSON.parse(localStorage.getItem('userDetails')).user_email]
        });
    }
    onNoClick() {
        this.dialogRef.close();
    }
    changePassFun() {
        console.log(this.changePasswordFormGroup.value);
        this.spinnerloader = true;
        this.userApiService.changePassword(this.changePasswordFormGroup.value).subscribe((result) => {
            if (result.success) {
                this.spinnerloader = false;
                this.toastr.success(result.msg);
                this.changePasswordFormGroup.markAsPristine();
                this.changePasswordFormGroup.markAsUntouched();
                this.changePasswordFormGroup.reset();
                // localStorage.setItem('userDetails',JSON.stringify(result.data));
                this.onNoClick();
            }
            else {
                this.spinnerloader = false;
                this.toastr.error(result.msg);
                this.errorMsg = result.msg;
                setInterval(() => {
                    this.errorMsg = '';
                }, 5000);
            }
        }, error => {
            this.spinnerloader = false;
            this.toastr.error('Internal server error.');
        });
    }
};
ChangePasswordComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef },
    { type: _Services_Titles_Icons_Manage_titles_service__WEBPACK_IMPORTED_MODULE_2__.TitlesService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _Services_API_user_api_service__WEBPACK_IMPORTED_MODULE_4__.UserApiService },
    { type: _Services_Titles_Icons_Manage_icons_service__WEBPACK_IMPORTED_MODULE_3__.IconsService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService }
];
ChangePasswordComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-change-password',
        template: _change_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_change_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChangePasswordComponent);



/***/ }),

/***/ 7210:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/core/core-components/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordComponent": () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _forgot_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.component.html?ngResource */ 8808);
/* harmony import */ var _forgot_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.component.scss?ngResource */ 1347);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _Services_Titles_Icons_Manage_titles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Services/Titles-Icons-Manage/titles.service */ 7151);
/* harmony import */ var _Services_Titles_Icons_Manage_icons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Services/Titles-Icons-Manage/icons.service */ 171);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _Services_API_user_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Services/API/user-api.service */ 6467);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);










let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(titleService, _formBuilder, userApiService, iconService, router, toastr) {
        this.titleService = titleService;
        this._formBuilder = _formBuilder;
        this.userApiService = userApiService;
        this.iconService = iconService;
        this.router = router;
        this.toastr = toastr;
        this.hide = true;
        this.spinnerloader = false;
    }
    ngOnInit() {
        this.forgotPasswordFormGroup = this._formBuilder.group({
            user_email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
            user_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
    }
    onNoClick() {
        this.router.navigateByUrl('login');
    }
    forgotPassFun() {
        console.log(this.forgotPasswordFormGroup.value);
        this.spinnerloader = true;
        this.userApiService.forgotPassword(this.forgotPasswordFormGroup.value).subscribe((result) => {
            if (result.success) {
                this.spinnerloader = false;
                this.toastr.success(result.msg);
                this.forgotPasswordFormGroup.markAsPristine();
                this.forgotPasswordFormGroup.markAsUntouched();
                this.forgotPasswordFormGroup.reset();
                this.onNoClick();
            }
            else {
                this.spinnerloader = false;
                this.toastr.error(result.msg);
                this.errorMsg = result.msg;
                setInterval(() => {
                    this.errorMsg = '';
                }, 5000);
            }
        }, error => {
            this.spinnerloader = false;
            this.toastr.error('Internal server error.');
        });
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: _Services_Titles_Icons_Manage_titles_service__WEBPACK_IMPORTED_MODULE_2__.TitlesService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _Services_API_user_api_service__WEBPACK_IMPORTED_MODULE_4__.UserApiService },
    { type: _Services_Titles_Icons_Manage_icons_service__WEBPACK_IMPORTED_MODULE_3__.IconsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService }
];
ForgotPasswordComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-forgot-password',
        template: _forgot_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forgot_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForgotPasswordComponent);



/***/ }),

/***/ 1867:
/*!***********************************************************************!*\
  !*** ./src/app/modules/core/core-components/login/login.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component.html?ngResource */ 3824);
/* harmony import */ var _login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.scss?ngResource */ 8281);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _Services_API_user_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Services/API/user-api.service */ 6467);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_Titles_Icons_Manage_titles_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/Titles-Icons-Manage/titles.service */ 5637);
/* harmony import */ var _services_Titles_Icons_Manage_icons_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/Titles-Icons-Manage/icons.service */ 8824);










let LoginComponent = class LoginComponent {
    constructor(_formBuilder, userApiService, titleService, iconService, toastr, router) {
        this._formBuilder = _formBuilder;
        this.userApiService = userApiService;
        this.titleService = titleService;
        this.iconService = iconService;
        this.toastr = toastr;
        this.router = router;
        this.hide = true;
        this.showDownloadBtn = false;
        this.spinnerloader = false;
    }
    ngOnInit() {
        this.loginFormGroup = this._formBuilder.group({
            user_email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
            user_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
        });
    }
    loginFun() {
        this.spinnerloader = true;
        this.userApiService.loginAuth(this.loginFormGroup.value).subscribe((result) => {
            if (result.success) {
                this.spinnerloader = false;
                this.toastr.success(result.msg);
                let obj = {
                    user_email: result.data.user_email,
                    user_role: result.data.user_role,
                    user_id: result.data.user_id,
                    user_ulb: result.data.user_ulb
                };
                localStorage.setItem('userDetails', JSON.stringify(obj));
                this.router.navigateByUrl('esquare');
            }
            else {
                this.spinnerloader = false;
                this.toastr.error(result.msg);
                this.errorMsg = result.msg;
                setInterval(() => {
                    this.errorMsg = '';
                }, 5000);
            }
        }, error => {
            this.spinnerloader = false;
            this.toastr.error('Internal server error.');
        });
    }
    forgotPassword() {
        this.router.navigateByUrl('forgot-password');
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _Services_API_user_api_service__WEBPACK_IMPORTED_MODULE_2__.UserApiService },
    { type: _services_Titles_Icons_Manage_titles_service__WEBPACK_IMPORTED_MODULE_3__.TitlesService },
    { type: _services_Titles_Icons_Manage_icons_service__WEBPACK_IMPORTED_MODULE_4__.IconsService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-login',
        template: _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginComponent);



/***/ }),

/***/ 9013:
/*!*****************************************************!*\
  !*** ./src/app/modules/core/core-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreRoutingModule": () => (/* binding */ CoreRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _core_components_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-components/login/login.component */ 1867);
/* harmony import */ var _core_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-components/change-password/change-password.component */ 1674);
/* harmony import */ var _core_components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core-components/forgot-password/forgot-password.component */ 7210);






const routes = [
    {
        path: 'login',
        component: _core_components_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
    },
    {
        path: 'forgot-password',
        component: _core_components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__.ForgotPasswordComponent
    },
    {
        path: 'change-password',
        component: _core_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__.ChangePasswordComponent
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
];
let CoreRoutingModule = class CoreRoutingModule {
};
CoreRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    })
], CoreRoutingModule);



/***/ }),

/***/ 7396:
/*!*********************************************!*\
  !*** ./src/app/modules/core/core.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _core_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-routing.module */ 9013);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 2271);
/* harmony import */ var _core_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core-components/login/login.component */ 1867);
/* harmony import */ var _core_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core-components/change-password/change-password.component */ 1674);
/* harmony import */ var _core_components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core-components/forgot-password/forgot-password.component */ 7210);




//shared module




let CoreModule = class CoreModule {
};
CoreModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_core_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _core_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__.ChangePasswordComponent, _core_components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__.ForgotPasswordComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _core_routing_module__WEBPACK_IMPORTED_MODULE_0__.CoreRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule
        ]
    })
], CoreModule);



/***/ }),

/***/ 18:
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/core/core-components/change-password/change-password.component.scss?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 1347:
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/core/core-components/forgot-password/forgot-password.component.scss?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 8281:
/*!************************************************************************************!*\
  !*** ./src/app/modules/core/core-components/login/login.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 4663:
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/core/core-components/change-password/change-password.component.html?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"col-12 text-center\">\r\n    <img src=\"../../../../../assets/manas_logo.png\" alt=\"\" class=\"login-logo\">\r\n    <!-- <i class=\"material-icons logo\">local_library</i> -->\r\n</div>\r\n<div class=\"card dialog\">\r\n    <div class=\"card-header card-header-primary\">\r\n        <h5 class=\"card-title\">{{titleService.titles.change_password}}</h5>\r\n        <div class=\"icon add-icon\">\r\n            <i class=\"{{iconService.fa_icons.remove}}\" aria-hidden=\"true\" matTooltip=\"{{titleService.tooltip.mat_close}}\" (click)=\"onNoClick()\"></i>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <form [formGroup]=\"changePasswordFormGroup\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12 col-12\">\r\n                    <mat-form-field class=\"example-full-width\">\r\n                        <input matInput placeholder=\"Old Password\" autocomplete=\"new-password\" type=\"password\" formControlName=\"old_password\" name=\"old_password\" required>\r\n                        <mat-error *ngIf=\"!changePasswordFormGroup.get('old_password').valid\">Enter valid password.</mat-error>\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-12 col-12\">\r\n                    <mat-form-field class=\"example-full-width\">\r\n                        <input matInput placeholder=\"New Password\" autocomplete=\"new-password\" type=\"password\" formControlName=\"user_password\" name=\"user_password\" required>\r\n                        <mat-error *ngIf=\"!changePasswordFormGroup.get('user_password').valid\">Enter valid password.</mat-error>\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-12 col-12\" style=\"margin-top: 10px;\">\r\n                    <div class=\"form-group\">\r\n                        <mat-error>{{errorMsg}}</mat-error>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <button type=\"submit\" (click)=\"changePassFun()\" [disabled]=\"changePasswordFormGroup.invalid\" class=\"btn custom-button  pull-right\">{{titleService.btn.update}}</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n<div class=\"loading-indicator\" *ngIf=\"spinnerloader\">\r\n    <mat-spinner mode=\"indeterminate\" color=\"primary\"></mat-spinner>\r\n</div>";

/***/ }),

/***/ 8808:
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/core/core-components/forgot-password/forgot-password.component.html?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"row\">\r\n        <div class=\"col-6\">\r\n            <img src=\"../../../../../assets/assets/eesl-logo.png\" width=\"100\" height=\"50\" alt=\"\">\r\n        </div>\r\n        <div class=\"col-6\" align=\"end\">\r\n            <img src=\"../.././../../../assets/assets/municipality_logo.png\" width=\"60\" height=\"50\" alt=\"\">\r\n        </div>\r\n        <div class=\"col-12\" style=\"margin-top: 50px;\">\r\n            <h1 class=\"text-center\" style=\"font-weight: 700; color: #5f0a87 ;\">COMPLAINT HANDLING SYSTEM</h1>\r\n        </div>\r\n        <div class=\"col-12 offset-md-3 col-md-6\">\r\n            <div class=\"card\" style=\"margin-top: 50px;\">\r\n                <div class=\"card-header card-header-primary\">\r\n                    <h5 class=\"card-title\">Update Password</h5>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <form [formGroup]=\"forgotPasswordFormGroup\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12 col-12\">\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                    <input matInput placeholder=\"Email\" autocomplete=\"new-password\" type=\"text\"\r\n                                        formControlName=\"user_email\" name=\"user_email\" required>\r\n                                    <mat-error *ngIf=\"!forgotPasswordFormGroup.get('user_email').valid\">Enter valid\r\n                                        email </mat-error>\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div class=\"col-md-12 col-12\">\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                    <input matInput placeholder=\"New Password\" autocomplete=\"new-password\"\r\n                                        [type]=\"hide ? 'password' : 'text'\" formControlName=\"user_password\"\r\n                                        name=\"user_password\" required>\r\n                                    <button mat-icon-button matSuffix (click)=\"hide = !hide\"\r\n                                        [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n                                        <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                                    </button>\r\n                                    <mat-error *ngIf=\"!forgotPasswordFormGroup.get('user_password').valid\">Enter valid\r\n                                        password.</mat-error>\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div class=\"col-md-12 col-12\" style=\"margin-top: 10px;\">\r\n                                <div class=\"form-group\">\r\n                                    <mat-error>{{errorMsg}}</mat-error>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-12\">\r\n                                <button type=\"submit\" (click)=\"forgotPassFun()\"\r\n                                    [disabled]=\"forgotPasswordFormGroup.invalid\"\r\n                                    class=\"btn custom-button  pull-right\">{{titleService.btn.update}}</button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"loading-indicator\" *ngIf=\"spinnerloader\">\r\n    <mat-spinner mode=\"indeterminate\" color=\"primary\"></mat-spinner>\r\n</div>";

/***/ }),

/***/ 3824:
/*!************************************************************************************!*\
  !*** ./src/app/modules/core/core-components/login/login.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-6\">\n      <img src=\"../../../../../assets/assets/eesl-logo.png\" width=\"100\" height=\"50\" alt=\"\">\n    </div>\n    <div class=\"col-6\" align=\"end\">\n      <img src=\"../../../../../assets/assets/municipality_logo.png\" width=\"60\" height=\"50\" alt=\"\">\n    </div>\n    <div class=\"col-12\" style=\"margin-top: 50px;\">\n      <h1 class=\"text-center\" style=\"font-weight: 700; color: #5f0a87 ;\">COMPLAINT HANDLING SYSTEM</h1>\n    </div>\n    <div class=\"col-12 offset-md-3 col-md-6\">\n      <div class=\"card\" style=\"margin-top: 50px;\">\n        <div class=\"card-header card-header-primary\">\n          <h5 class=\"card-title\">Login</h5>\n        </div>\n        <div class=\"card-body\">\n          <form [formGroup]=\"loginFormGroup\">\n            <div class=\"row\">\n              <div class=\"col-md-12 col-12\">\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput placeholder=\"Email\" autocomplete=\"new-password\" type=\"text\"\n                    formControlName=\"user_email\" name=\"user_email\" required>\n                  <mat-error *ngIf=\"!loginFormGroup.get('user_email').valid\">Enter valid email </mat-error>\n                </mat-form-field>\n              </div>\n              <div class=\"col-md-12 col-12\">\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput placeholder=\"Password\" autocomplete=\"new-password\" [type]=\"hide ? 'password' : 'text'\"\n                    formControlName=\"user_password\" name=\"user_password\" required>\n                    <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n                      <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                    </button>\n                  <mat-error *ngIf=\"!loginFormGroup.get('user_password').valid\">Enter valid password.</mat-error>\n                </mat-form-field>\n              </div>\n              <div class=\"col-md-12 col-12\" style=\"margin-top: 10px;\">\n                <div class=\"form-group\">\n                  <p class=\"forgotPass pull-right\" (click)=\"forgotPassword()\">Forgot Password?</p>\n                </div>\n              </div>\n              <div class=\"col-md-12 col-12\" style=\"margin-top: 10px;\">\n                <div class=\"form-group\">\n                  <mat-error>{{errorMsg}}</mat-error>\n                </div>\n              </div>\n              <div class=\"col-md-12 text-center\">\n                <button type=\"submit\" (click)=\"loginFun()\" [disabled]=\"loginFormGroup.invalid\"\n                  class=\"btn custom-button\">{{titleService.btn.login}}</button>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"loading-indicator\" *ngIf=\"spinnerloader\">\n  <mat-spinner mode=\"indeterminate\" color=\"primary\"></mat-spinner>\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_core_core_module_ts.js.map