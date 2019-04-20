(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-user-manage-user-manage-module"],{

/***/ "./node_modules/angularfire2/firestore/index.js":
/*!******************************************************!*\
  !*** ./node_modules/angularfire2/firestore/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi93cmFwcGVyL3NyYy9maXJlc3RvcmUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw2Q0FBd0MifQ==

/***/ }),

/***/ "./src/app/pages/users/user-manage/user-manage.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/users/user-manage/user-manage.module.ts ***!
  \***************************************************************/
/*! exports provided: UserManagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagePageModule", function() { return UserManagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_manage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-manage.page */ "./src/app/pages/users/user-manage/user-manage.page.ts");







var routes = [
    {
        path: '',
        component: _user_manage_page__WEBPACK_IMPORTED_MODULE_6__["UserManagePage"]
    }
];
var UserManagePageModule = /** @class */ (function () {
    function UserManagePageModule() {
    }
    UserManagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_user_manage_page__WEBPACK_IMPORTED_MODULE_6__["UserManagePage"]]
        })
    ], UserManagePageModule);
    return UserManagePageModule;
}());



/***/ }),

/***/ "./src/app/pages/users/user-manage/user-manage.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/users/user-manage/user-manage.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Manage Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" *ngIf=\"user\" fullscreen=\"true\">\n  <ion-row>\n    <ion-col text-center align-self-center>\n      <ion-avatar (click)=\"uploadAvatar()\">\n        <img [src]=\"_sanitizer.bypassSecurityTrustResourceUrl(user.avatar)\" />\n      </ion-avatar>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"form-row\" *ngIf=\"userDetails\">\n    <ion-col>\n      <ion-list>\n        <form novalidate [formGroup]=\"userDetails\">\n\n          <ion-item>\n            <ion-label position=\"floating\">First Name</ion-label>\n            <ion-input type=\"text\" formControlName=\"firstName\">\n            </ion-input>\n          </ion-item>\n\n          <!-- First name error message -->\n          <ng-container *ngFor=\"let error of error_messages.firstName\">\n            <div class=\"error\"\n              *ngIf=\"userDetails.get('firstName').hasError(error.type) && (userDetails.get('firstName').dirty || userDetails.get('firstName').touched)\">\n              {{ error.message }}\n            </div>\n          </ng-container>\n\n          <ion-item>\n            <ion-label position=\"floating\">Last Name</ion-label>\n            <ion-input type=\"text\" formControlName=\"lastName\">\n            </ion-input>\n          </ion-item>\n\n          <!-- Last name error message -->\n          <ng-container *ngFor=\"let error of error_messages.lastName\">\n            <div class=\"error\"\n              *ngIf=\"userDetails.get('lastName').hasError(error.type) && (userDetails.get('lastName').dirty || userDetails.get('lastName').touched)\">\n              {{ error.message }}\n            </div>\n          </ng-container>\n\n          <ion-item>\n            <ion-label position=\"floating\">Email</ion-label>\n            <ion-input type=\"email\" formControlName=\"email\" readonly=\"true\">\n            </ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"floating\">New Password</ion-label>\n            <ion-input type=\"password\" formControlName=\"new_password\"></ion-input>\n          </ion-item>\n\n          <!-- Password error message -->\n          <ng-container *ngFor=\"let error of error_messages.password\">\n            <div class=\"error\"\n              *ngIf=\"userDetails.get('new_password').hasError(error.type) && (userDetails.get('new_password').dirty || userDetails.get('new_password').touched)\">\n              {{ error.message }}\n            </div>\n          </ng-container>\n\n          <ion-row class=\"button-row\">\n            <ion-col text-center>\n              <ion-button expand=\"full\" fill=\"solid\" color=\"primary\" (click)=\"submit()\">\n                SAVE\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/users/user-manage/user-manage.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/users/user-manage/user-manage.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-avatar {\n  max-width: 200px;\n  max-height: 200px;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto; }\n  ion-avatar img {\n    width: 200px;\n    height: 200px;\n    -o-object-fit: cover;\n       object-fit: cover; }\n  ion-header {\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px); }\n  ion-toolbar {\n  --ion-toolbar-background: rgba(255, 255, 255, 0.2);\n  --color: #fff; }\n  ion-back-button {\n  --color: #fff; }\n  ion-content {\n  width: 100%;\n  --background: none;\n  --background: #43cea2;\n  --background: -webkit-linear-gradient(to left, #185a9d, #43cea2);\n  --background: linear-gradient(to left, #185a9d, #43cea2); }\n  ion-grid {\n  width: 100%; }\n  .form-row {\n  margin-top: 2.5rem;\n  padding: 0;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.2);\n  box-shadow: 0px 3px 3px 1px rgba(0, 0, 0, 0.25); }\n  .button-row {\n  margin-top: 2rem; }\n  ion-list {\n  margin-right: 0.3rem;\n  margin-left: 0.3rem;\n  --ion-item-background: transparent; }\n  ion-list ion-item {\n    margin: 0.5rem auto;\n    --background: transparent;\n    color: #fff; }\n  ion-list ion-item ion-label {\n      font-weight: 300; }\n  ion-list ion-item ion-input {\n      color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcnMvdXNlci1tYW5hZ2UvRDpcXEdpdFxcTGV0c01lZXQyMDE5L3NyY1xcYXBwXFxwYWdlc1xcdXNlcnNcXHVzZXItbWFuYWdlXFx1c2VyLW1hbmFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYyxFQUFBO0VBTGhCO0lBUUksWUFBWTtJQUNaLGFBQWE7SUFDYixvQkFBaUI7T0FBakIsaUJBQWlCLEVBQUE7RUFJckI7RUFDRSxrQ0FBMEI7VUFBMUIsMEJBQTBCLEVBQUE7RUFHNUI7RUFDRSxrREFBeUI7RUFDekIsYUFBUSxFQUFBO0VBR1Y7RUFDRSxhQUFRLEVBQUE7RUFHVjtFQUNFLFdBQVc7RUFDWCxrQkFBYTtFQUNiLHFCQUFhO0VBQ2IsZ0VBQWE7RUFDYix3REFBYSxFQUFBO0VBR2Y7RUFDRSxXQUFXLEVBQUE7RUFHYjtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLG9DQUFvQztFQUNwQywrQ0FBK0MsRUFBQTtFQUdqRDtFQUNFLGdCQUFnQixFQUFBO0VBR2xCO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQ0FBc0IsRUFBQTtFQUh4QjtJQU1JLG1CQUFtQjtJQUNuQix5QkFBYTtJQUNiLFdBQVcsRUFBQTtFQVJmO01BV00sZ0JBQWdCLEVBQUE7RUFYdEI7TUFlTSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2Vycy91c2VyLW1hbmFnZS91c2VyLW1hbmFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYXZhdGFyIHtcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1oZWFkZXIge1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgLS1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuaW9uLWJhY2stYnV0dG9uIHtcclxuICAtLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gIC0tYmFja2dyb3VuZDogIzQzY2VhMjtcclxuICAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMxODVhOWQsICM0M2NlYTIpO1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMxODVhOWQsICM0M2NlYTIpO1xyXG59XHJcblxyXG5pb24tZ3JpZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtLXJvdyB7XHJcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbn1cclxuXHJcbi5idXR0b24tcm93IHtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDAuM3JlbTtcclxuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICBpb24taXRlbSB7XHJcbiAgICBtYXJnaW46IDAuNXJlbSBhdXRvO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWlucHV0IHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/users/user-manage/user-manage.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/users/user-manage/user-manage.page.ts ***!
  \*************************************************************/
/*! exports provided: UserManagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagePage", function() { return UserManagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_helpers_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/helpers/authentication.service */ "./src/app/services/helpers/authentication.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");










var UserManagePage = /** @class */ (function () {
    function UserManagePage(router, platform, formBuilder, _sanitizer, camera, alertCtrl, authenticationService, userService) {
        this.router = router;
        this.platform = platform;
        this.formBuilder = formBuilder;
        this._sanitizer = _sanitizer;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.user = null;
        this.authUser = null;
        this.error_messages = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].error_messages;
    }
    UserManagePage.prototype.ngOnInit = function () {
    };
    UserManagePage.prototype.ionViewWillEnter = function () {
        this.getUser();
    };
    UserManagePage.prototype.getUser = function () {
        var _this = this;
        this.authUser = this.authenticationService.getUserAuth();
        this.memberSince = this.authUser.metadata.creationTime;
        this.userService.getUser(this.authUser.uid).subscribe(function (result) { _this.user = result; _this.createFormGroup(); });
    };
    UserManagePage.prototype.createFormGroup = function () {
        this.userDetails = this.formBuilder.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.user.firstName, {
                validators: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]), updateOn: 'blur'
            }),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.user.lastName, {
                validators: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]), updateOn: 'blur'
            }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.authUser.email, { validators: [] }),
            new_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', {
                validators: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].password_regex)
                ]), updateOn: 'blur'
            }),
        });
    };
    UserManagePage.prototype.uploadAvatar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var options;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                options = {
                    quality: 80,
                    destinationType: this.camera.DestinationType.DATA_URL,
                    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                    allowEdit: true,
                    correctOrientation: true
                };
                this.platform.ready().then(function () {
                    if (_this.platform.is('cordova')) {
                        _this.camera.getPicture(options).then(function (imageData) {
                            var base64Image = "data:image/jpeg;base64," + imageData;
                            _this.user.avatar = base64Image;
                        }, function (error) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var alert;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                                            header: 'Error',
                                            message: 'Could not upload image. Please try again!',
                                            buttons: ['OK']
                                        })];
                                    case 1:
                                        alert = _a.sent();
                                        return [4 /*yield*/, alert.present()];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    UserManagePage.prototype.submit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var showSuccess, alert_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        showSuccess = false;
                        this.user.firstName = this.userDetails.controls.firstName.value;
                        this.user.lastName = this.userDetails.controls.lastName.value;
                        this.userService.updateUser(this.user).then(function (result) {
                            showSuccess = result;
                            // Check if password needs to be updated
                            if (_this.userDetails.controls.new_password.value != '') {
                                _this.authUser.updatePassword(_this.userDetails.controls.new_password.value);
                            }
                        });
                        if (!showSuccess) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: 'Success',
                                message: 'Profile sucessfully updated!',
                                buttons: [{
                                        text: 'OK', handler: function () {
                                            _this.router.navigate(['home']);
                                        }
                                    }]
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserManagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-manage',
            template: __webpack_require__(/*! ./user-manage.page.html */ "./src/app/pages/users/user-manage/user-manage.page.html"),
            styles: [__webpack_require__(/*! ./user-manage.page.scss */ "./src/app/pages/users/user-manage/user-manage.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            src_app_services_helpers_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]])
    ], UserManagePage);
    return UserManagePage;
}());



/***/ })

}]);
//# sourceMappingURL=users-user-manage-user-manage-module.js.map