(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-user-manage-user-manage-module"],{

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

module.exports = "ion-avatar {\n  max-width: 200px;\n  max-height: 200px;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto; }\n  ion-avatar img {\n    width: 200px;\n    height: 200px;\n    -o-object-fit: cover;\n       object-fit: cover; }\n  ion-header {\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px); }\n  ion-toolbar {\n  --ion-toolbar-background: rgba(255, 255, 255, 0.2);\n  --color: #fff; }\n  ion-back-button {\n  --color: #fff; }\n  ion-content {\n  width: 100%;\n  --background: none;\n  --background: #43cea2;\n  --background: -webkit-linear-gradient(to left, #185a9d, #43cea2);\n  --background: linear-gradient(to left, #185a9d, #43cea2); }\n  ion-grid {\n  width: 100%; }\n  .form-row {\n  margin-top: 2.5rem;\n  padding: 0;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.2);\n  box-shadow: 0px 3px 3px 1px rgba(0, 0, 0, 0.25); }\n  .button-row {\n  margin-top: 2rem; }\n  ion-list {\n  margin-right: 0.3rem;\n  margin-left: 0.3rem;\n  --ion-item-background: transparent; }\n  ion-list ion-item {\n    margin: 0.5rem auto;\n    --background: transparent;\n    color: #fff; }\n  ion-list ion-item ion-label {\n      font-weight: 300; }\n  ion-list ion-item ion-input {\n      color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcnMvdXNlci1tYW5hZ2UvRDpcXFNvZnR3YXJlIFByb2plY3RzXFxOb2RlLmpzXFxMZXRzTWVldC9zcmNcXGFwcFxccGFnZXNcXHVzZXJzXFx1c2VyLW1hbmFnZVxcdXNlci1tYW5hZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWMsRUFBQTtFQUxoQjtJQVFJLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQWlCO09BQWpCLGlCQUFpQixFQUFBO0VBSXJCO0VBQ0Usa0NBQTBCO1VBQTFCLDBCQUEwQixFQUFBO0VBRzVCO0VBQ0Usa0RBQXlCO0VBQ3pCLGFBQVEsRUFBQTtFQUdWO0VBQ0UsYUFBUSxFQUFBO0VBR1Y7RUFDRSxXQUFXO0VBQ1gsa0JBQWE7RUFDYixxQkFBYTtFQUNiLGdFQUFhO0VBQ2Isd0RBQWEsRUFBQTtFQUdmO0VBQ0UsV0FBVyxFQUFBO0VBR2I7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMsK0NBQStDLEVBQUE7RUFHakQ7RUFDRSxnQkFBZ0IsRUFBQTtFQUdsQjtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0NBQXNCLEVBQUE7RUFIeEI7SUFNSSxtQkFBbUI7SUFDbkIseUJBQWE7SUFDYixXQUFXLEVBQUE7RUFSZjtNQVdNLGdCQUFnQixFQUFBO0VBWHRCO01BZU0sV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlcnMvdXNlci1tYW5hZ2UvdXNlci1tYW5hZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWF2YXRhciB7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxuICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5pb24taGVhZGVyIHtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIC0tY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgLS1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICAtLWJhY2tncm91bmQ6ICM0M2NlYTI7XHJcbiAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMTg1YTlkLCAjNDNjZWEyKTtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMTg1YTlkLCAjNDNjZWEyKTtcclxufVxyXG5cclxuaW9uLWdyaWQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybS1yb3cge1xyXG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG59XHJcblxyXG4uYnV0dG9uLXJvdyB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gIG1hcmdpbi1yaWdodDogMC4zcmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjNyZW07XHJcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgbWFyZ2luOiAwLjVyZW0gYXV0bztcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

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









var UserManagePage = /** @class */ (function () {
    function UserManagePage(router, activatedRoute, platform, formBuilder, _sanitizer, camera, alertCtrl, authenticationService, userService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.platform = platform;
        this.formBuilder = formBuilder;
        this._sanitizer = _sanitizer;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.user = null;
        this.authUser = null;
        this.error_messages = {
            'email': [
                { type: 'required', message: 'Email is required' },
                { type: 'pattern', message: 'Enter a valid email' }
            ],
            'password': [
                { type: 'required', message: 'Password is required' },
                { type: 'minlength', message: 'Password must be at least 5 characters long' },
                { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
            ],
            'firstName': [
                { type: 'required', message: 'First name is required' }
            ],
            'lastName': [
                { type: 'required', message: 'Last name is required' }
            ],
        };
    }
    UserManagePage.prototype.ngOnInit = function () {
        var uid = this.activatedRoute.snapshot.paramMap.get('uid');
        this.getUser(uid);
    };
    UserManagePage.prototype.getUser = function (uid) {
        var _this = this;
        this.authUser = this.authenticationService.getUserAuth();
        this.memberSince = this.authUser.metadata.creationTime;
        this.userService.getUser(uid).subscribe(function (result) { _this.user = result; _this.createFormGroup(); });
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
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
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
            var alert_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.userService.updateUser(this.user).then(function () {
                            // Check if password needs to be updated
                            if (_this.userDetails.controls.new_password.value != '') {
                                _this.authUser.updatePassword(_this.userDetails.controls.new_password.value);
                            }
                        });
                        if (false) {}
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: 'Success',
                                message: 'Profile sucessfully updated!',
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
        });
    };
    UserManagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-manage',
            template: __webpack_require__(/*! ./user-manage.page.html */ "./src/app/pages/users/user-manage/user-manage.page.html"),
            styles: [__webpack_require__(/*! ./user-manage.page.scss */ "./src/app/pages/users/user-manage/user-manage.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
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