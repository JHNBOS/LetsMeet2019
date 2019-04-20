(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sign-in-sign-in-module"],{

/***/ "./src/app/pages/sign-in/sign-in.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.module.ts ***!
  \*************************************************/
/*! exports provided: SignInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-in.page */ "./src/app/pages/sign-in/sign-in.page.ts");







var routes = [
    {
        path: '',
        component: _sign_in_page__WEBPACK_IMPORTED_MODULE_6__["SignInPage"]
    }
];
var SignInPageModule = /** @class */ (function () {
    function SignInPageModule() {
    }
    SignInPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_6__["SignInPage"]]
        })
    ], SignInPageModule);
    return SignInPageModule;
}());



/***/ }),

/***/ "./src/app/pages/sign-in/sign-in.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content fullscreen=\"true\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <h1 class=\"title\" text-center>Let's Meet</h1>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"form-row\">\n      <ion-col>\n        <ion-list>\n          <form novalidate [formGroup]=\"user\">\n\n            <ion-item>\n              <ion-label position=\"floating\">Email</ion-label>\n              <ion-input type=\"email\" formControlName=\"email\">\n              </ion-input>\n            </ion-item>\n\n            <!-- Email error message -->\n            <ng-container *ngFor=\"let error of error_messages.email\">\n              <div class=\"error\"\n                *ngIf=\"user.get('email').hasError(error.type) && (user.get('email').dirty || user.get('email').touched)\">\n                {{ error.message }}\n              </div>\n            </ng-container>\n\n            <ion-item>\n              <ion-label position=\"floating\">Password</ion-label>\n              <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n            </ion-item>\n\n            <!-- Password error message -->\n            <ng-container *ngFor=\"let error of error_messages.password\">\n              <div class=\"error\"\n                *ngIf=\"user.get('password').hasError(error.type) && (user.get('password').dirty || user.get('password').touched)\">\n                {{ error.message }}\n              </div>\n            </ng-container>\n\n            <ion-row class=\"login-button-row\">\n              <ion-col text-center>\n                <ion-button id=\"registerButton\" expand=\"full\" fill=\"solid\" color=\"light\" (click)=\"goToSignUp()\">\n                  SIGN UP\n                </ion-button>\n              </ion-col>\n              <ion-col text-center>\n                <ion-button expand=\"full\" fill=\"solid\" color=\"primary\" (click)=\"submit()\">\n                  SIGN IN\n                </ion-button>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col text-center>\n                <ion-button id=\"resetButton\" expand=\"block\" fill=\"clear\" color=\"light\" (click)=\"goToForgotPass()\">\n                  FORGOT PASSWORD?\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </form>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/sign-in/sign-in.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px); }\n\nion-toolbar {\n  --ion-toolbar-background: rgba(255, 255, 255, 0.2); }\n\nion-content {\n  width: 100%;\n  --background: none;\n  --background: #43cea2;\n  --background: -webkit-linear-gradient(to left, #185a9d, #43cea2);\n  --background: linear-gradient(to left, #185a9d, #43cea2); }\n\n.form-row {\n  margin-top: 2.5rem;\n  padding: 0;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.2);\n  box-shadow: 0px 3px 3px 1px rgba(0, 0, 0, 0.25); }\n\n.title {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 3rem;\n  color: #fff; }\n\n.login-button-row {\n  margin-top: 2rem; }\n\n#resetButton {\n  margin-top: 0.4rem;\n  font-size: 0.7rem; }\n\nion-list {\n  margin-right: 0.3rem;\n  margin-left: 0.3rem;\n  --ion-item-background: transparent; }\n\nion-list ion-item {\n    margin: 0.5rem auto;\n    --background: transparent;\n    color: #fff; }\n\nion-list ion-item ion-label {\n      font-weight: 300; }\n\nion-list ion-item ion-input {\n      color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbi1pbi9EOlxcR2l0XFxMZXRzTWVldDIwMTkvc3JjXFxhcHBcXHBhZ2VzXFxzaWduLWluXFxzaWduLWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUEwQjtVQUExQiwwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxrREFBeUIsRUFBQTs7QUFHM0I7RUFDRSxXQUFXO0VBQ1gsa0JBQWE7RUFDYixxQkFBYTtFQUNiLGdFQUFhO0VBQ2Isd0RBQWEsRUFBQTs7QUFHZjtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLG9DQUFvQztFQUNwQywrQ0FBK0MsRUFBQTs7QUFHakQ7RUFDRSxxQ0FBcUM7RUFDckMsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtDQUFzQixFQUFBOztBQUh4QjtJQU1JLG1CQUFtQjtJQUNuQix5QkFBYTtJQUNiLFdBQVcsRUFBQTs7QUFSZjtNQVdNLGdCQUFnQixFQUFBOztBQVh0QjtNQWVNLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ24taW4vc2lnbi1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gIC0tYmFja2dyb3VuZDogIzQzY2VhMjtcclxuICAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMxODVhOWQsICM0M2NlYTIpO1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMxODVhOWQsICM0M2NlYTIpO1xyXG59XHJcblxyXG4uZm9ybS1yb3cge1xyXG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5sb2dpbi1idXR0b24tcm93IHtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG59XHJcblxyXG4jcmVzZXRCdXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDAuNHJlbTtcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gIG1hcmdpbi1yaWdodDogMC4zcmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjNyZW07XHJcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgbWFyZ2luOiAwLjVyZW0gYXV0bztcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/sign-in/sign-in.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.page.ts ***!
  \***********************************************/
/*! exports provided: SignInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPage", function() { return SignInPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_helpers_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/helpers/authentication.service */ "./src/app/services/helpers/authentication.service.ts");






var SignInPage = /** @class */ (function () {
    function SignInPage(navController, authService, formBuilder, alertCtrl) {
        this.navController = navController;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.error_messages = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].error_messages;
    }
    SignInPage.prototype.ngOnInit = function () {
        this.createFormGroup();
    };
    SignInPage.prototype.createFormGroup = function () {
        this.user = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', {
                validators: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].email_regex)
                ]), updateOn: 'blur'
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', {
                validators: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].password_regex)
                ]), updateOn: 'blur'
            }),
        });
    };
    SignInPage.prototype.goToSignUp = function () {
        this.navController.navigateForward('/register');
    };
    SignInPage.prototype.goToForgotPass = function () {
        this.navController.navigateForward('/forgot-password');
    };
    SignInPage.prototype.submit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var credentials;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        credentials = { email: this.user.controls.email.value, password: this.user.controls.password.value };
                        return [4 /*yield*/, this.authService.signInWithEmail(credentials)
                                .then(function (response) {
                                if (response) {
                                    // Continue to home page
                                    _this.navController.navigateForward('/home');
                                }
                            }, function (rejected) { throw rejected; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SignInPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.page.html */ "./src/app/pages/sign-in/sign-in.page.html"),
            styles: [__webpack_require__(/*! ./sign-in.page.scss */ "./src/app/pages/sign-in/sign-in.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _services_helpers_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], SignInPage);
    return SignInPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-sign-in-sign-in-module.js.map