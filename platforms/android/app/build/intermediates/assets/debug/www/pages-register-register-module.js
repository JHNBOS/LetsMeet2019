(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

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

module.exports = "ion-header {\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px); }\n\nion-toolbar {\n  --ion-toolbar-background: rgba(255, 255, 255, 0.2);\n  --color: #fff; }\n\nion-back-button {\n  --color: #fff; }\n\nion-content {\n  width: 100%;\n  --background: none;\n  --background: #43cea2;\n  --background: -webkit-linear-gradient(to left, #185a9d, #43cea2);\n  --background: linear-gradient(to left, #185a9d, #43cea2); }\n\nion-grid {\n  width: 100%; }\n\n.form-row {\n  margin-top: 2.5rem;\n  padding: 0;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.2);\n  box-shadow: 0px 3px 3px 1px rgba(0, 0, 0, 0.25); }\n\n.button-row {\n  margin-top: 2rem; }\n\nion-list {\n  margin-right: 0.3rem;\n  margin-left: 0.3rem;\n  --ion-item-background: transparent; }\n\nion-list ion-item {\n    margin: 0.5rem auto;\n    --background: transparent;\n    color: #fff; }\n\nion-list ion-item ion-label {\n      font-weight: 300; }\n\nion-list ion-item ion-input {\n      color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvRDpcXFNvZnR3YXJlIFByb2plY3RzXFxOb2RlLmpzXFxMZXRzTWVldC9zcmNcXGFwcFxccGFnZXNcXHJlZ2lzdGVyXFxyZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBMEI7VUFBMUIsMEJBQTBCLEVBQUE7O0FBRzVCO0VBQ0Usa0RBQXlCO0VBQ3pCLGFBQVEsRUFBQTs7QUFHVjtFQUNFLGFBQVEsRUFBQTs7QUFHVjtFQUNFLFdBQVc7RUFDWCxrQkFBYTtFQUNiLHFCQUFhO0VBQ2IsZ0VBQWE7RUFDYix3REFBYSxFQUFBOztBQUdmO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLCtDQUErQyxFQUFBOztBQUdqRDtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0NBQXNCLEVBQUE7O0FBSHhCO0lBTUksbUJBQW1CO0lBQ25CLHlCQUFhO0lBQ2IsV0FBVyxFQUFBOztBQVJmO01BV00sZ0JBQWdCLEVBQUE7O0FBWHRCO01BZU0sV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAtLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5pb24tYmFjay1idXR0b24ge1xyXG4gIC0tY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjNDNjZWEyO1xyXG4gIC0tYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzE4NWE5ZCwgIzQzY2VhMik7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzE4NWE5ZCwgIzQzY2VhMik7XHJcbn1cclxuXHJcbmlvbi1ncmlkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvcm0tcm93IHtcclxuICBtYXJnaW4tdG9wOiAyLjVyZW07XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDNweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxufVxyXG5cclxuLmJ1dHRvbi1yb3cge1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuICBtYXJnaW4tcmlnaHQ6IDAuM3JlbTtcclxuICBtYXJnaW4tbGVmdDogMC4zcmVtO1xyXG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblxyXG4gIGlvbi1pdGVtIHtcclxuICAgIG1hcmdpbjogMC41cmVtIGF1dG87XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIH1cclxuXHJcbiAgICBpb24taW5wdXQge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

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






var RegisterPage = /** @class */ (function () {
    function RegisterPage(navController, authService, formBuilder, alertCtrl, userService) {
        this.navController = navController;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.userService = userService;
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
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                ]), updateOn: 'blur'
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', {
                validators: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
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
                                                    buttons: ['OK']
                                                })];
                                        case 1:
                                            alert_1 = _a.sent();
                                            return [4 /*yield*/, alert_1.present()];
                                        case 2:
                                            _a.sent();
                                            _a.label = 3;
                                        case 3:
                                            this.navController.navigateBack(['sign-in']);
                                            return [2 /*return*/];
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