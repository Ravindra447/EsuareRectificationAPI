"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_admin_admin-modules_manage-users_manage-users_module_ts"],{

/***/ 1352:
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/admin/admin-modules/manage-users/manage-users-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageUsersRoutingModule": () => (/* binding */ ManageUsersRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _user_components_view_user_view_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-components/view-user/view-user.component */ 9439);
/* harmony import */ var _user_components_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-components/create-user/create-user.component */ 6805);
/* harmony import */ var _user_components_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-components/edit-user/edit-user.component */ 8210);






const routes = [
    {
        path: '',
        redirectTo: 'view-users',
        pathMatch: 'full'
    },
    {
        path: 'view-users',
        component: _user_components_view_user_view_user_component__WEBPACK_IMPORTED_MODULE_0__.ViewUserComponent
    },
    {
        path: 'update-user',
        component: _user_components_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_2__.EditUserComponent
    },
    {
        path: 'add-user',
        component: _user_components_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_1__.CreateUserComponent
    }
];
let ManageUsersRoutingModule = class ManageUsersRoutingModule {
};
ManageUsersRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    })
], ManageUsersRoutingModule);



/***/ }),

/***/ 7020:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/admin/admin-modules/manage-users/manage-users.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageUsersModule": () => (/* binding */ ManageUsersModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _manage_users_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-users-routing.module */ 1352);
/* harmony import */ var _user_components_view_user_view_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-components/view-user/view-user.component */ 9439);
/* harmony import */ var _user_components_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-components/create-user/create-user.component */ 6805);
/* harmony import */ var _user_components_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-components/edit-user/edit-user.component */ 8210);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ 2271);







//shared module

let ManageUsersModule = class ManageUsersModule {
};
ManageUsersModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_user_components_view_user_view_user_component__WEBPACK_IMPORTED_MODULE_1__.ViewUserComponent,
            _user_components_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_2__.CreateUserComponent,
            _user_components_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_3__.EditUserComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _manage_users_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManageUsersRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule
        ]
    })
], ManageUsersModule);



/***/ }),

/***/ 6805:
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/admin/admin-modules/manage-users/user-components/create-user/create-user.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateUserComponent": () => (/* binding */ CreateUserComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _create_user_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-user.component.html?ngResource */ 9315);
/* harmony import */ var _create_user_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-user.component.scss?ngResource */ 4387);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_Titles_Icons_Manage_titles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/Titles-Icons-Manage/titles.service */ 5637);
/* harmony import */ var _services_Titles_Icons_Manage_icons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/Titles-Icons-Manage/icons.service */ 8824);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_API_user_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/API/user-api.service */ 3015);










let CreateUserComponent = class CreateUserComponent {
    constructor(titleService, iconService, _formBuilder, userApiService, router, toastr) {
        this.titleService = titleService;
        this.iconService = iconService;
        this._formBuilder = _formBuilder;
        this.userApiService = userApiService;
        this.router = router;
        this.toastr = toastr;
        this.hide = true;
        this.spinnerloader = false;
        this.userRoles = ['admin', 'user'];
        this.cities = [];
    }
    ngOnInit() {
        this.cities = this.userApiService.cities;
        this.userFormGroup = this._formBuilder.group({
            user_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            user_email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
            user_mobile: [''],
            user_active_status: [true],
            user_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            user_role: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            user_ulb: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
        });
    }
    goBack() {
        window.history.back();
    }
    userOnboardFun() {
        this.spinnerloader = true;
        this.userApiService.createUser(this.userFormGroup.value).subscribe((result) => {
            if (result.success) {
                this.spinnerloader = false;
                this.toastr.success(result.msg);
                this.goBack();
            }
        }, error => {
            this.spinnerloader = false;
            this.toastr.error('Internal server error.');
        });
    }
};
CreateUserComponent.ctorParameters = () => [
    { type: _services_Titles_Icons_Manage_titles_service__WEBPACK_IMPORTED_MODULE_2__.TitlesService },
    { type: _services_Titles_Icons_Manage_icons_service__WEBPACK_IMPORTED_MODULE_3__.IconsService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _services_API_user_api_service__WEBPACK_IMPORTED_MODULE_4__.UserApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService }
];
CreateUserComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-create-user',
        template: _create_user_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_create_user_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CreateUserComponent);



/***/ }),

/***/ 8210:
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/admin/admin-modules/manage-users/user-components/edit-user/edit-user.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditUserComponent": () => (/* binding */ EditUserComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _edit_user_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-user.component.html?ngResource */ 9902);
/* harmony import */ var _edit_user_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-user.component.scss?ngResource */ 7664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_Titles_Icons_Manage_titles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/Titles-Icons-Manage/titles.service */ 5637);
/* harmony import */ var _services_Titles_Icons_Manage_icons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/Titles-Icons-Manage/icons.service */ 8824);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_API_user_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/API/user-api.service */ 3015);
/* harmony import */ var _services_Utils_data_share_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../services/Utils/data-share.service */ 1028);










//datashare service

let EditUserComponent = class EditUserComponent {
    constructor(titleService, iconService, _formBuilder, dataShareService, userApiService, router, toastr) {
        this.titleService = titleService;
        this.iconService = iconService;
        this._formBuilder = _formBuilder;
        this.dataShareService = dataShareService;
        this.userApiService = userApiService;
        this.router = router;
        this.toastr = toastr;
        this.spinnerloader = false;
        this.userRoles = ['admin', 'user'];
        this.cities = [];
    }
    ngOnInit() {
        this.cities = this.userApiService.cities;
        this.userFormGroup = this._formBuilder.group({
            user_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            user_email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            user_mobile: [''],
            user_role: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            _id: ['', []],
            user_ulb: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
        });
        this.userData();
    }
    goBack() {
        window.history.back();
    }
    userUpdateFun() {
        console.log(this.userFormGroup.value);
        this.spinnerloader = true;
        this.userApiService.updateUser(this.userFormGroup.value).subscribe((result) => {
            if (result.success) {
                this.spinnerloader = false;
                this.toastr.info(result.msg);
            }
        }, error => {
            this.spinnerloader = false;
            this.toastr.error('Internal server error.');
        });
    }
    userData() {
        this.dataShareService.currentData.subscribe((data) => {
            if (data === 'no data') {
                this.router.navigate(['esquare/users/view-users']);
            }
            else {
                this.userDetails = data;
                console.log(this.userDetails);
                this.userFormGroup.setValue({
                    user_name: data.user_name,
                    user_email: data.user_email,
                    user_mobile: data.user_mobile,
                    user_role: data.user_role,
                    user_ulb: data.user_ulb,
                    _id: data._id
                });
            }
        });
    }
};
EditUserComponent.ctorParameters = () => [
    { type: _services_Titles_Icons_Manage_titles_service__WEBPACK_IMPORTED_MODULE_2__.TitlesService },
    { type: _services_Titles_Icons_Manage_icons_service__WEBPACK_IMPORTED_MODULE_3__.IconsService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _services_Utils_data_share_service__WEBPACK_IMPORTED_MODULE_5__.DataShareService },
    { type: _services_API_user_api_service__WEBPACK_IMPORTED_MODULE_4__.UserApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService }
];
EditUserComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-edit-user',
        template: _edit_user_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_edit_user_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditUserComponent);



/***/ }),

/***/ 9439:
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/admin/admin-modules/manage-users/user-components/view-user/view-user.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewUserComponent": () => (/* binding */ ViewUserComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _view_user_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-user.component.html?ngResource */ 4112);
/* harmony import */ var _view_user_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-user.component.scss?ngResource */ 4061);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_Titles_Icons_Manage_titles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/Titles-Icons-Manage/titles.service */ 5637);
/* harmony import */ var _services_Titles_Icons_Manage_icons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/Titles-Icons-Manage/icons.service */ 8824);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_API_user_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/API/user-api.service */ 3015);
/* harmony import */ var _services_Utils_data_share_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../services/Utils/data-share.service */ 1028);









//datashare service

let ViewUserComponent = class ViewUserComponent {
    constructor(titleService, iconService, userApiService, dataShareService, router, toastr) {
        this.titleService = titleService;
        this.iconService = iconService;
        this.userApiService = userApiService;
        this.dataShareService = dataShareService;
        this.router = router;
        this.toastr = toastr;
        this.allUsers = [];
        this.spinnerloader = false;
        //ngx-pagination
        this.pageSizeOptions = [5, 10, 25, 100];
        this.p = 1;
    }
    ngOnInit() {
        this.fetchUsers();
    }
    pagination(event) {
        this.p = event;
    }
    editUserFun(item) {
        this.dataShareService.changeData(item);
        this.router.navigate(['esquare/users/update-user']);
    }
    deleteUserFun(item) {
        console.log(item);
        this.spinnerloader = true;
        this.userApiService.deleteUserById(item._id).subscribe((result) => {
            if (result.success) {
                this.allUsers.splice(this.allUsers.findIndex(obj => obj._id === item._id), 1);
                this.spinnerloader = false;
                this.toastr.warning(result.msg);
            }
        }, error => {
            this.spinnerloader = false;
            this.toastr.error('Internal server error.');
        });
    }
    fetchUsers() {
        this.spinnerloader = true;
        this.userApiService.fetchAllusers().subscribe((result) => {
            console.log(result.data);
            if (result.success) {
                this.spinnerloader = false;
                this.allUsers = result.data;
            }
        }, error => {
            this.spinnerloader = false;
            this.toastr.error('Internal server error.');
        });
    }
    updateUserStatus(event, item) {
        console.log(event.checked, item);
        let obj = item;
        obj.user_active_status = event.checked, item;
        this.spinnerloader = true;
        this.userApiService.updateUser(obj).subscribe((result) => {
            if (result.success) {
                this.spinnerloader = false;
                this.toastr.info(result.msg);
            }
        }, error => {
            this.spinnerloader = false;
            this.toastr.error('Internal server error.');
        });
    }
};
ViewUserComponent.ctorParameters = () => [
    { type: _services_Titles_Icons_Manage_titles_service__WEBPACK_IMPORTED_MODULE_2__.TitlesService },
    { type: _services_Titles_Icons_Manage_icons_service__WEBPACK_IMPORTED_MODULE_3__.IconsService },
    { type: _services_API_user_api_service__WEBPACK_IMPORTED_MODULE_4__.UserApiService },
    { type: _services_Utils_data_share_service__WEBPACK_IMPORTED_MODULE_5__.DataShareService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService }
];
ViewUserComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-view-user',
        template: _view_user_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_view_user_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewUserComponent);



/***/ }),

/***/ 3015:
/*!**************************************************!*\
  !*** ./src/app/services/API/user-api.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserApiService": () => (/* binding */ UserApiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _config_api_url_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/api-url.service */ 3350);




let UserApiService = class UserApiService {
    constructor(httpClient, api) {
        this.httpClient = httpClient;
        this.api = api;
        this.cities = [
            {
                district: 'Chittoor',
                city: 'Tirupati'
            },
            {
                district: 'Chittoor',
                city: 'Chittoor'
            },
            {
                district: 'Chittoor',
                city: 'Srikalahasti'
            },
            {
                district: 'Kadapa',
                city: 'Rajampet'
            },
            {
                district: 'Kadapa',
                city: 'Rayachoty'
            },
            {
                district: 'East Godavari',
                city: 'Kakinada'
            },
            {
                district: 'East Godavari',
                city: 'Rajamahedravaram'
            },
            // {
            //   district: 'Krishna',
            //   city: 'Vijayawada'
            // },
            // {
            //   district: 'Guntur',
            //   city: 'Guntur'
            // },
            // {
            //   district: 'Guntur',
            //   city: 'Narasaraopet'
            // },
            // {
            //   district: 'Guntur',
            //   city: 'Chilakaluripeta'
            // },
            // {
            //   district: 'Guntur',
            //   city: 'Sattenapalli'
            // }
        ];
    }
    createUser(userData) {
        return this.httpClient.post(this.api.url + '/create-user', userData);
    }
    fetchAllusers() {
        return this.httpClient.get(this.api.url + '/fetch-all-users');
    }
    deleteUserById(id) {
        return this.httpClient.delete(this.api.url + '/delete-userById/' + id);
    }
    updateUser(userData) {
        return this.httpClient.put(this.api.url + '/update-user', userData);
    }
    //login
    loginAuth(userData) {
        return this.httpClient.post(this.api.url + '/userAuth', userData);
    }
    //change Password
    changePassword(userData) {
        return this.httpClient.post(this.api.url + '/change-password', userData);
    }
    //forgot Password
    forgotPassword(userData) {
        return this.httpClient.post(this.api.url + '/forgot-password', userData);
    }
    fetchCities() {
        return this.cities;
    }
    logout() {
        localStorage.clear();
    }
};
UserApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _config_api_url_service__WEBPACK_IMPORTED_MODULE_0__.ApiUrlService }
];
UserApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], UserApiService);



/***/ }),

/***/ 4387:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/admin/admin-modules/manage-users/user-components/create-user/create-user.component.scss?ngResource ***!
  \****************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtdXNlci5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 7664:
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/admin/admin-modules/manage-users/user-components/edit-user/edit-user.component.scss?ngResource ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXVzZXIuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 4061:
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/admin/admin-modules/manage-users/user-components/view-user/view-user.component.scss?ngResource ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXVzZXIuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 9315:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/admin/admin-modules/manage-users/user-components/create-user/create-user.component.html?ngResource ***!
  \****************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"main-container\">\r\n    <div class=\"card\">\r\n        <div class=\"card-header card-header-primary\">\r\n            <h5 class=\"card-title\">\r\n                <a (click)=\"goBack()\" class=\"{{iconService.fa_icons.back}}\"></a>&nbsp;&nbsp;&nbsp;{{titleService.titles.admin_add_user}}</h5>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <form [formGroup]=\"userFormGroup\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4 col-12\">\r\n                        <mat-form-field class=\"example-full-width\">\r\n                            <input matInput placeholder=\"Name\" autocomplete=\"new-password\" type=\"text\" formControlName=\"user_name\" name=\"user_name\" required>\r\n                            <mat-error *ngIf=\"!userFormGroup.get('user_name').valid\">Enter valid name </mat-error>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-4 col-12\">\r\n                        <mat-form-field class=\"example-full-width\">\r\n                            <input matInput placeholder=\"Email\" type=\"text\" formControlName=\"user_email\" name=\"email\" required>\r\n                            <mat-error *ngIf=\"!userFormGroup.get('user_email').valid\">Enter valid email.</mat-error>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-4 col-12\">\r\n                        <mat-form-field class=\"example-full-width\">\r\n                            <input matInput placeholder=\"Mobile Number\" type=\"text\" formControlName=\"user_mobile\" name=\"mobile\">\r\n                            <mat-error *ngIf=\"!userFormGroup.get('user_mobile').valid\">Enter valid mobile number.</mat-error>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-12 col-12\">\r\n                        <mat-form-field class=\"example-full-width\">\r\n                            <mat-select placeholder=\"select city\" type=\"text\" formControlName=\"user_ulb\" name=\"user_ulb\" >\r\n                                <mat-option *ngFor=\"let option of cities\" [value]=\"option.city\">{{option.city}}</mat-option>\r\n                            </mat-select>\r\n                            <mat-error *ngIf=\"!userFormGroup.get('user_ulb').valid\">select valid ULB. </mat-error>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-6 col-12\">\r\n                        <mat-form-field class=\"example-full-width\">\r\n                            <input matInput placeholder=\"Password\" autocomplete=\"new-password\" [type]=\"hide ? 'password' : 'text'\" formControlName=\"user_password\" name=\"user_password\" required>\r\n                            <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n                                <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                              </button>\r\n                            <mat-error *ngIf=\"!userFormGroup.get('user_password').valid\">Enter valid password.</mat-error>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-6 col-12\">\r\n                        <mat-form-field class=\"example-full-width\">\r\n                            <mat-select placeholder=\"Role\" type=\"text\" formControlName=\"user_role\" name=\"user\" required>\r\n                                <mat-option *ngFor=\"let option of userRoles\" [value]=\"option\">{{option}}</mat-option>\r\n                            </mat-select>\r\n                            <mat-error *ngIf=\"!userFormGroup.get('user_role').valid\">Enter valid user. </mat-error>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-12 stepper-btns\">\r\n                        <button class=\"btn btn-cancel\" (click)=\"goBack()\">Cancel</button>&nbsp;\r\n                        <button type=\"submit\" (click)=\"userOnboardFun()\" [disabled]=\"userFormGroup.invalid\" class=\"btn custom-button pull-right\">Submit</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"loading-indicator\" *ngIf=\"spinnerloader\">\r\n    <mat-spinner mode=\"indeterminate\" color=\"primary\"></mat-spinner>\r\n</div>";

/***/ }),

/***/ 9902:
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/admin/admin-modules/manage-users/user-components/edit-user/edit-user.component.html?ngResource ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"main-container\">\r\n    <div class=\"card\">\r\n        <div class=\"card-header card-header-primary\">\r\n            <h5 class=\"card-title\">\r\n                <a (click)=\"goBack()\" class=\"{{iconService.fa_icons.back}}\"></a>&nbsp;&nbsp;&nbsp;{{titleService.titles.admin_update_user}}</h5>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <form [formGroup]=\"userFormGroup\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6 col-12\">\r\n                        <mat-form-field class=\"example-full-width\">\r\n                            <input matInput placeholder=\"Name\" type=\"text\" formControlName=\"user_name\" name=\"user_name\" required>\r\n                            <mat-error *ngIf=\"!userFormGroup.get('user_name').valid\">Enter valid name </mat-error>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-6 col-12\">\r\n                        <mat-form-field class=\"example-full-width\">\r\n                            <input matInput placeholder=\"Email\" type=\"text\" formControlName=\"user_email\" name=\"email\" readonly required>\r\n                            <mat-error *ngIf=\"!userFormGroup.get('user_email').valid\">Enter valid email.</mat-error>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-12 col-12\">\r\n                        <mat-form-field class=\"example-full-width\">\r\n                            <mat-select placeholder=\"select city\" type=\"text\" formControlName=\"user_ulb\" name=\"user_ulb\" required>\r\n                                <mat-option *ngFor=\"let option of cities\" [value]=\"option.city\">{{option.city}}</mat-option>\r\n                            </mat-select>\r\n                            <mat-error *ngIf=\"!userFormGroup.get('user_ulb').valid\">select valid ULB. </mat-error>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-6 col-12\">\r\n                        <mat-form-field class=\"example-full-width\">\r\n                            <input matInput placeholder=\"Mobile Number\" type=\"text\" formControlName=\"user_mobile\" name=\"mobile\">\r\n                            <mat-error *ngIf=\"!userFormGroup.get('user_mobile').valid\">Enter valid mobile number.</mat-error>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-6 col-12\">\r\n                        <mat-form-field class=\"example-full-width\">\r\n                            <mat-select placeholder=\"Role\" type=\"text\" formControlName=\"user_role\" name=\"user\" required>\r\n                                <mat-option *ngFor=\"let option of userRoles\" [value]=\"option\">{{option}}</mat-option>\r\n                            </mat-select>\r\n                            <mat-error *ngIf=\"!userFormGroup.get('user_role').valid\">Enter valid user. </mat-error>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-12 stepper-btns\">\r\n                        <button class=\"btn btn-cancel\" (click)=\"goBack()\">Cancel</button>&nbsp;\r\n                        <button type=\"submit\" (click)=\"userUpdateFun()\" [disabled]=\"userFormGroup.invalid\" class=\"btn custom-button pull-right\">Update</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"loading-indicator\" *ngIf=\"spinnerloader\">\r\n    <mat-spinner mode=\"indeterminate\" color=\"primary\"></mat-spinner>\r\n</div>";

/***/ }),

/***/ 4112:
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/admin/admin-modules/manage-users/user-components/view-user/view-user.component.html?ngResource ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"main-container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-header-primary\">\r\n                    <h5 class=\"card-title\">{{titleService.titles.admin_manage_user}}</h5>\r\n                    <div class=\"icon add-icon\">\r\n                        <i class=\"{{iconService.fa_icons.plus}}\" aria-hidden=\"true\"\r\n                            matTooltip=\"{{titleService.tooltip.mat_add_user}}\" routerLink=\"/esquare/users/add-user\"></i>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table table-borderless\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Name</th>\r\n                                    <th>email </th>\r\n                                    <th>mobile</th>\r\n                                    <th>ULB</th>\r\n                                    <th>\r\n                                        Status\r\n                                    </th>\r\n                                    <th>Actions</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody *ngFor=\"let item of allUsers | paginate: { itemsPerPage: 10, currentPage: p };\">\r\n                                <!-- | paginate: { itemsPerPage: 10, currentPage: p } -->\r\n                                <tr *ngIf=\"item.user_email!=='mainadmin@gmail.com'\">\r\n                                    <td>{{item.user_name}}</td>\r\n                                    <td>{{item.user_email}}</td>\r\n                                    <td>{{item.user_mobile}}</td>\r\n                                    <td>{{item.user_ulb}}</td>\r\n                                    <td>\r\n                                        <mat-slide-toggle class=\"example-margin\" [checked]=\"item.user_active_status\"\r\n                                            (change)=\"updateUserStatus($event,item)\">\r\n                                        </mat-slide-toggle>\r\n                                    </td>\r\n                                    <td>\r\n                                        <i matTooltip=\"{{titleService.tooltip.mat_view}}\"\r\n                                            class=\"{{iconService.fa_icons.edit}}\"\r\n                                            (click)=\"editUserFun(item)\"></i>&nbsp;&nbsp;\r\n                                        <i matTooltip=\"{{titleService.tooltip.mat_delete}}\"\r\n                                            class=\"{{iconService.fa_icons.delete}}\" (click)=\"deleteUserFun(item)\"></i>\r\n                                    </td>\r\n                                </tr>\r\n\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                    <div align=\"end\" style=\"padding: 0px !important;\" *ngIf=\"allUsers.length>10\">\r\n                        <pagination-controls (pageChange)=\"pagination($event)\" previousLabel=\"\" nextLabel=\"\">\r\n                        </pagination-controls>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"loading-indicator\" *ngIf=\"spinnerloader\">\r\n    <mat-spinner mode=\"indeterminate\" color=\"primary\"></mat-spinner>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_admin_admin-modules_manage-users_manage-users_module_ts.js.map