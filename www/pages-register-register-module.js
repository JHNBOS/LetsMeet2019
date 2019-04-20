(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

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

/***/ "./src/app/pages/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/pages/register/register.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Sign Up</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <ion-grid>\n    <ion-row class=\"form-row\">\n      <ion-col>\n        <ion-list>\n          <form novalidate [formGroup]=\"user\">\n\n            <ion-item>\n              <ion-label position=\"floating\">First Name</ion-label>\n              <ion-input type=\"text\" formControlName=\"firstName\">\n              </ion-input>\n            </ion-item>\n\n            <!-- First name error message -->\n            <ng-container *ngFor=\"let error of error_messages.firstName\">\n              <div class=\"error\"\n                *ngIf=\"user.get('firstName').hasError(error.type) && (user.get('firstName').dirty || user.get('firstName').touched)\">\n                {{ error.message }}\n              </div>\n            </ng-container>\n\n            <ion-item>\n              <ion-label position=\"floating\">Last Name</ion-label>\n              <ion-input type=\"text\" formControlName=\"lastName\">\n              </ion-input>\n            </ion-item>\n\n            <!-- Last name error message -->\n            <ng-container *ngFor=\"let error of error_messages.lastName\">\n              <div class=\"error\"\n                *ngIf=\"user.get('lastName').hasError(error.type) && (user.get('lastName').dirty || user.get('lastName').touched)\">\n                {{ error.message }}\n              </div>\n            </ng-container>\n\n            <ion-item>\n              <ion-label position=\"floating\">Email</ion-label>\n              <ion-input type=\"email\" formControlName=\"email\">\n              </ion-input>\n            </ion-item>\n\n            <!-- Email error message -->\n            <ng-container *ngFor=\"let error of error_messages.email\">\n              <div class=\"error\"\n                *ngIf=\"user.get('email').hasError(error.type) && (user.get('email').dirty || user.get('email').touched)\">\n                {{ error.message }}\n              </div>\n            </ng-container>\n\n            <ion-item>\n              <ion-label position=\"floating\">Password</ion-label>\n              <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n            </ion-item>\n\n            <!-- Password error message -->\n            <ng-container *ngFor=\"let error of error_messages.password\">\n              <div class=\"error\"\n                *ngIf=\"user.get('password').hasError(error.type) && (user.get('password').dirty || user.get('password').touched)\">\n                {{ error.message }}\n              </div>\n            </ng-container>\n\n            <ion-row class=\"button-row\">\n              <ion-col text-center>\n                <ion-button expand=\"full\" fill=\"solid\" color=\"primary\" (click)=\"submit()\">\n                  SIGN UP\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </form>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/register/register.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px); }\n\nion-toolbar {\n  --ion-toolbar-background: rgba(255, 255, 255, 0.2);\n  --color: #fff; }\n\nion-back-button {\n  --color: #fff; }\n\nion-content {\n  width: 100%;\n  --background: none;\n  --background: #43cea2;\n  --background: -webkit-linear-gradient(to left, #185a9d, #43cea2);\n  --background: linear-gradient(to left, #185a9d, #43cea2); }\n\nion-grid {\n  width: 100%; }\n\n.form-row {\n  margin-top: 2.5rem;\n  padding: 0;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.2);\n  box-shadow: 0px 3px 3px 1px rgba(0, 0, 0, 0.25); }\n\n.button-row {\n  margin-top: 2rem; }\n\nion-list {\n  margin-right: 0.3rem;\n  margin-left: 0.3rem;\n  --ion-item-background: transparent; }\n\nion-list ion-item {\n    margin: 0.5rem auto;\n    --background: transparent;\n    color: #fff; }\n\nion-list ion-item ion-label {\n      font-weight: 300; }\n\nion-list ion-item ion-input {\n      color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvRDpcXEdpdFxcTGV0c01lZXQyMDE5L3NyY1xcYXBwXFxwYWdlc1xccmVnaXN0ZXJcXHJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUEwQjtVQUExQiwwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxrREFBeUI7RUFDekIsYUFBUSxFQUFBOztBQUdWO0VBQ0UsYUFBUSxFQUFBOztBQUdWO0VBQ0UsV0FBVztFQUNYLGtCQUFhO0VBQ2IscUJBQWE7RUFDYixnRUFBYTtFQUNiLHdEQUFhLEVBQUE7O0FBR2Y7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMsK0NBQStDLEVBQUE7O0FBR2pEO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQ0FBc0IsRUFBQTs7QUFIeEI7SUFNSSxtQkFBbUI7SUFDbkIseUJBQWE7SUFDYixXQUFXLEVBQUE7O0FBUmY7TUFXTSxnQkFBZ0IsRUFBQTs7QUFYdEI7TUFlTSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIC0tY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgLS1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICAtLWJhY2tncm91bmQ6ICM0M2NlYTI7XHJcbiAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMTg1YTlkLCAjNDNjZWEyKTtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMTg1YTlkLCAjNDNjZWEyKTtcclxufVxyXG5cclxuaW9uLWdyaWQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybS1yb3cge1xyXG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG59XHJcblxyXG4uYnV0dG9uLXJvdyB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gIG1hcmdpbi1yaWdodDogMC4zcmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjNyZW07XHJcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgbWFyZ2luOiAwLjVyZW0gYXV0bztcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/register/register.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_helpers_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/helpers/authentication.service */ "./src/app/services/helpers/authentication.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







var RegisterPage = /** @class */ (function () {
    function RegisterPage(navController, authService, formBuilder, alertCtrl, userService) {
        this.navController = navController;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.userService = userService;
        this.error_messages = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].error_messages;
    }
    RegisterPage.prototype.ngOnInit = function () {
        this.createFormGroup();
    };
    RegisterPage.prototype.createFormGroup = function () {
        this.user = this.formBuilder.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', {
                validators: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]), updateOn: 'blur'
            }),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', {
                validators: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]), updateOn: 'blur'
            }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', {
                validators: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].email_regex)
                ]), updateOn: 'blur'
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', {
                validators: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].password_regex)
                ]), updateOn: 'blur'
            }),
        });
    };
    RegisterPage.prototype.submit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var credentials;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        credentials = { email: this.user.controls.email.value, password: this.user.controls.password.value };
                        return [4 /*yield*/, this.authService.signUp(credentials)
                                .then(function (response) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var showAlert, alert_1;
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            showAlert = false;
                                            // Create user in database
                                            if (response) {
                                                this.createUser(response.user.uid).then(function (result) { return showAlert = result; });
                                            }
                                            if (!showAlert) return [3 /*break*/, 3];
                                            return [4 /*yield*/, this.alertCtrl.create({
                                                    header: 'Success',
                                                    message: 'Sign up was successful!',
                                                    buttons: [{
                                                            text: 'OK', handler: function () {
                                                                _this.navController.navigateBack(['sign-in']);
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
                            }); }, function (rejected) { throw rejected; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.createUser = function (uid) {
        var newUser = {
            uid: uid,
            email: this.user.controls.email.value,
            color: '',
            avatar: '',
            firstName: this.user.controls.firstName.value,
            lastName: this.user.controls.lastName.value
        };
        return this.userService.addUser(newUser);
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/pages/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], src_app_services_helpers_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-register-register-module.js.map