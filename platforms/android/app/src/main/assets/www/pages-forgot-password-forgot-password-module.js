(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forgot-password-forgot-password-module"],{

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

/***/ "./src/app/pages/forgot-password/forgot-password.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.module.ts ***!
  \*****************************************************************/
/*! exports provided: ForgotPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/pages/forgot-password/forgot-password.page.ts");







var routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]
    }
];
var ForgotPasswordPageModule = /** @class */ (function () {
    function ForgotPasswordPageModule() {
    }
    ForgotPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
        })
    ], ForgotPasswordPageModule);
    return ForgotPasswordPageModule;
}());



/***/ }),

/***/ "./src/app/pages/forgot-password/forgot-password.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Forgot Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <ion-grid>\n    <ion-row class=\"form-row\">\n      <ion-col>\n        <ion-list>\n          <form novalidate [formGroup]=\"user\">\n            <ion-item>\n              <ion-label position=\"floating\">Email</ion-label>\n              <ion-input type=\"email\" formControlName=\"email\">\n              </ion-input>\n            </ion-item>\n\n            <!-- Email error message -->\n            <ng-container *ngFor=\"let error of error_messages.email\">\n              <div class=\"error\"\n                *ngIf=\"user.get('email').hasError(error.type) && (user.get('email').dirty || user.get('email').touched)\">\n                {{ error.message }}\n              </div>\n            </ng-container>\n\n            <ion-row class=\"button-row\">\n              <ion-col text-center>\n                <ion-button expand=\"full\" fill=\"solid\" color=\"primary\" (click)=\"submit()\">\n                  RESET\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </form>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/forgot-password/forgot-password.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px); }\n\nion-toolbar {\n  --ion-toolbar-background: rgba(255, 255, 255, 0.2);\n  --color: #fff; }\n\nion-back-button {\n  --color: #fff; }\n\nion-content {\n  width: 100%;\n  --background: none;\n  --background: #43cea2;\n  --background: -webkit-linear-gradient(to left, #185a9d, #43cea2);\n  --background: linear-gradient(to left, #185a9d, #43cea2); }\n\nion-grid {\n  width: 100%; }\n\n.form-row {\n  margin-top: 2.5rem;\n  padding: 0;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.2);\n  box-shadow: 0px 3px 3px 1px rgba(0, 0, 0, 0.25); }\n\n.button-row {\n  margin-top: 2rem; }\n\nion-list {\n  margin-right: 0.3rem;\n  margin-left: 0.3rem;\n  --ion-item-background: transparent; }\n\nion-list ion-item {\n    margin: 0.5rem auto;\n    --background: transparent;\n    color: #fff; }\n\nion-list ion-item ion-label {\n      font-weight: 300; }\n\nion-list ion-item ion-input {\n      color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9yZ290LXBhc3N3b3JkL0Q6XFxHaXRcXExldHNNZWV0MjAxOS9zcmNcXGFwcFxccGFnZXNcXGZvcmdvdC1wYXNzd29yZFxcZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUEwQjtVQUExQiwwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxrREFBeUI7RUFDekIsYUFBUSxFQUFBOztBQUdWO0VBQ0UsYUFBUSxFQUFBOztBQUdWO0VBQ0UsV0FBVztFQUNYLGtCQUFhO0VBQ2IscUJBQWE7RUFDYixnRUFBYTtFQUNiLHdEQUFhLEVBQUE7O0FBR2Y7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMsK0NBQStDLEVBQUE7O0FBR2pEO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQ0FBc0IsRUFBQTs7QUFIeEI7SUFNSSxtQkFBbUI7SUFDbkIseUJBQWE7SUFDYixXQUFXLEVBQUE7O0FBUmY7TUFXTSxnQkFBZ0IsRUFBQTs7QUFYdEI7TUFlTSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgLS1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuaW9uLWJhY2stYnV0dG9uIHtcclxuICAtLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gIC0tYmFja2dyb3VuZDogIzQzY2VhMjtcclxuICAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMxODVhOWQsICM0M2NlYTIpO1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMxODVhOWQsICM0M2NlYTIpO1xyXG59XHJcblxyXG5pb24tZ3JpZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtLXJvdyB7XHJcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbn1cclxuXHJcbi5idXR0b24tcm93IHtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDAuM3JlbTtcclxuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICBpb24taXRlbSB7XHJcbiAgICBtYXJnaW46IDAuNXJlbSBhdXRvO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWlucHV0IHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/forgot-password/forgot-password.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.page.ts ***!
  \***************************************************************/
/*! exports provided: ForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return ForgotPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_helpers_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/helpers/authentication.service */ "./src/app/services/helpers/authentication.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(navController, authService, formBuilder, alertCtrl, userService) {
        this.navController = navController;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.userService = userService;
        this.error_messages = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].error_messages;
    }
    ForgotPasswordPage.prototype.ngOnInit = function () {
        this.createFormGroup();
    };
    ForgotPasswordPage.prototype.createFormGroup = function () {
        this.user = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', {
                validators: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].email_regex)
                ]), updateOn: 'blur'
            })
        });
    };
    ForgotPasswordPage.prototype.submit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var email;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        email = this.user.controls.email.value;
                        return [4 /*yield*/, this.authService.sendPasswordResetEmail(email)
                                .then(function (response) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var alert;
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.alertCtrl.create({
                                                header: 'Success',
                                                message: 'An email with further instructions has been sent to this account!',
                                                buttons: [{
                                                        text: 'OK', handler: function () {
                                                            _this.navController.navigateBack(['sign-in']);
                                                        }
                                                    }]
                                            })];
                                        case 1:
                                            alert = _a.sent();
                                            return [4 /*yield*/, alert.present()];
                                        case 2:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ForgotPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.page.html */ "./src/app/pages/forgot-password/forgot-password.page.html"),
            styles: [__webpack_require__(/*! ./forgot-password.page.scss */ "./src/app/pages/forgot-password/forgot-password.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], src_app_services_helpers_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-forgot-password-forgot-password-module.js.map