(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["groups-add-group-add-group-module"],{

/***/ "./src/app/pages/groups/add-group/add-group.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/groups/add-group/add-group.module.ts ***!
  \************************************************************/
/*! exports provided: AddGroupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGroupPageModule", function() { return AddGroupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_group_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-group.page */ "./src/app/pages/groups/add-group/add-group.page.ts");







var routes = [
    {
        path: '',
        component: _add_group_page__WEBPACK_IMPORTED_MODULE_6__["AddGroupPage"]
    }
];
var AddGroupPageModule = /** @class */ (function () {
    function AddGroupPageModule() {
    }
    AddGroupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_group_page__WEBPACK_IMPORTED_MODULE_6__["AddGroupPage"]]
        })
    ], AddGroupPageModule);
    return AddGroupPageModule;
}());



/***/ }),

/***/ "./src/app/pages/groups/add-group/add-group.page.html":
/*!************************************************************!*\
  !*** ./src/app/pages/groups/add-group/add-group.page.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Create Group</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" fullscreen=\"true\">\n  <ion-row class=\"form-row\" *ngIf=\"groupDetails\">\n    <ion-col>\n      <ion-list>\n        <form novalidate [formGroup]=\"groupDetails\">\n\n          <ion-item>\n            <ion-label position=\"floating\">Group Name</ion-label>\n            <ion-input type=\"text\" formControlName=\"groupName\">\n            </ion-input>\n          </ion-item>\n\n          <!-- Group name error message -->\n          <ng-container *ngFor=\"let error of error_messages.groupName\">\n            <div class=\"error\"\n              *ngIf=\"groupDetails.get('groupName').hasError(error.type) && (groupDetails.get('groupName').dirty || groupDetails.get('groupName').touched)\">\n              {{ error.message }}\n            </div>\n          </ng-container>\n\n          <ion-row class=\"button-row\">\n            <ion-col text-center>\n              <ion-button expand=\"full\" fill=\"solid\" color=\"primary\" (click)=\"submit()\">\n                CREATE\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/groups/add-group/add-group.page.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/groups/add-group/add-group.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px); }\n\nion-toolbar {\n  --ion-toolbar-background: rgba(255, 255, 255, 0.2);\n  --color: #fff; }\n\nion-back-button {\n  --color: #fff; }\n\nion-content {\n  width: 100%;\n  --background: none;\n  --background: #43cea2;\n  --background: -webkit-linear-gradient(to left, #185a9d, #43cea2);\n  --background: linear-gradient(to left, #185a9d, #43cea2); }\n\nion-grid {\n  width: 100%; }\n\n.form-row {\n  margin-top: 2.5rem;\n  padding: 0;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.2);\n  box-shadow: 0px 3px 3px 1px rgba(0, 0, 0, 0.25); }\n\n.button-row {\n  margin-top: 2rem; }\n\nion-list {\n  margin-right: 0.3rem;\n  margin-left: 0.3rem;\n  --ion-item-background: transparent; }\n\nion-list ion-item {\n    margin: 0.5rem auto;\n    --background: transparent;\n    color: #fff; }\n\nion-list ion-item ion-label {\n      font-weight: 300; }\n\nion-list ion-item ion-input {\n      color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ3JvdXBzL2FkZC1ncm91cC9EOlxcR2l0XFxMZXRzTWVldDIwMTkvc3JjXFxhcHBcXHBhZ2VzXFxncm91cHNcXGFkZC1ncm91cFxcYWRkLWdyb3VwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUEwQjtVQUExQiwwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxrREFBeUI7RUFDekIsYUFBUSxFQUFBOztBQUdWO0VBQ0UsYUFBUSxFQUFBOztBQUdWO0VBQ0UsV0FBVztFQUNYLGtCQUFhO0VBQ2IscUJBQWE7RUFDYixnRUFBYTtFQUNiLHdEQUFhLEVBQUE7O0FBR2Y7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMsK0NBQStDLEVBQUE7O0FBR2pEO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQ0FBc0IsRUFBQTs7QUFIeEI7SUFNSSxtQkFBbUI7SUFDbkIseUJBQWE7SUFDYixXQUFXLEVBQUE7O0FBUmY7TUFXTSxnQkFBZ0IsRUFBQTs7QUFYdEI7TUFlTSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ncm91cHMvYWRkLWdyb3VwL2FkZC1ncm91cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIC0tY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgLS1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICAtLWJhY2tncm91bmQ6ICM0M2NlYTI7XHJcbiAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMTg1YTlkLCAjNDNjZWEyKTtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMTg1YTlkLCAjNDNjZWEyKTtcclxufVxyXG5cclxuaW9uLWdyaWQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybS1yb3cge1xyXG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG59XHJcblxyXG4uYnV0dG9uLXJvdyB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gIG1hcmdpbi1yaWdodDogMC4zcmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjNyZW07XHJcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgbWFyZ2luOiAwLjVyZW0gYXV0bztcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/groups/add-group/add-group.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/groups/add-group/add-group.page.ts ***!
  \**********************************************************/
/*! exports provided: AddGroupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGroupPage", function() { return AddGroupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_group_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var src_app_services_helpers_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/helpers/authentication.service */ "./src/app/services/helpers/authentication.service.ts");
/* harmony import */ var src_app_services_models_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/models/group */ "./src/app/services/models/group.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");









var AddGroupPage = /** @class */ (function () {
    function AddGroupPage(router, platform, formBuilder, alertCtrl, authenticationService, groupService) {
        this.router = router;
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.authenticationService = authenticationService;
        this.groupService = groupService;
        this.error_messages = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].error_messages;
    }
    AddGroupPage.prototype.ngOnInit = function () {
    };
    AddGroupPage.prototype.ionViewWillEnter = function () {
        this.getUser();
        this.createFormGroup();
    };
    AddGroupPage.prototype.getUser = function () {
        this.authUser = this.authenticationService.getUserAuth();
    };
    AddGroupPage.prototype.createFormGroup = function () {
        this.groupDetails = this.formBuilder.group({
            groupName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', {
                validators: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]), updateOn: 'blur'
            })
        });
    };
    AddGroupPage.prototype.submit = function () {
        var _this = this;
        var group = new src_app_services_models_group__WEBPACK_IMPORTED_MODULE_7__["Group"]();
        group.name = this.groupDetails.controls.groupName.value;
        group.createdBy = this.authUser.uid;
        this.groupService.addGroup(group).then(function (result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // Add user to group
                if (typeof result !== 'boolean') {
                    this.addUserToGroup(result.id);
                }
                return [2 /*return*/];
            });
        }); });
    };
    AddGroupPage.prototype.addUserToGroup = function (id) {
        var _this = this;
        this.groupService.addMember(id, this.authUser.uid).then(function (result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var alert_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!result) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: 'Success',
                                message: 'Group was sucessfully created!',
                                buttons: ['OK']
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        this.router.navigate(['home']);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    AddGroupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-group',
            template: __webpack_require__(/*! ./add-group.page.html */ "./src/app/pages/groups/add-group/add-group.page.html"),
            styles: [__webpack_require__(/*! ./add-group.page.scss */ "./src/app/pages/groups/add-group/add-group.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            src_app_services_helpers_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            src_app_services_group_service__WEBPACK_IMPORTED_MODULE_5__["GroupService"]])
    ], AddGroupPage);
    return AddGroupPage;
}());



/***/ }),

/***/ "./src/app/services/models/group.ts":
/*!******************************************!*\
  !*** ./src/app/services/models/group.ts ***!
  \******************************************/
/*! exports provided: Group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
var Group = /** @class */ (function () {
    function Group() {
    }
    return Group;
}());



/***/ })

}]);
//# sourceMappingURL=groups-add-group-add-group-module.js.map