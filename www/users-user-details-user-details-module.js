(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-user-details-user-details-module"],{

/***/ "./src/app/pages/users/user-details/user-details.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/users/user-details/user-details.module.ts ***!
  \*****************************************************************/
/*! exports provided: UserDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsPageModule", function() { return UserDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-details.page */ "./src/app/pages/users/user-details/user-details.page.ts");







var routes = [
    {
        path: '',
        component: _user_details_page__WEBPACK_IMPORTED_MODULE_6__["UserDetailsPage"]
    }
];
var UserDetailsPageModule = /** @class */ (function () {
    function UserDetailsPageModule() {
    }
    UserDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_user_details_page__WEBPACK_IMPORTED_MODULE_6__["UserDetailsPage"]]
        })
    ], UserDetailsPageModule);
    return UserDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/users/user-details/user-details.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/users/user-details/user-details.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"ion-padding\" *ngIf=\"user\" fullscreen=\"true\">\n\t<ion-row>\n\t\t<ion-col text-center align-self-center>\n\t\t\t<ion-avatar>\n\t\t\t\t<img [src]=\"_sanitizer.bypassSecurityTrustResourceUrl(user.avatar)\" />\n\t\t\t</ion-avatar>\n\t\t\t<h2>{{ user.firstName }} {{ user.lastName }}</h2>\n\t\t\t<small>Member since {{ memberSince | date: 'MMMM dd, yyyy' }}</small>\n\t\t</ion-col>\n\t</ion-row>\n\n\t<ion-row class=\"ion-margin-top\" text-center>\n\t\t<ion-col>\n\t\t\t<ion-list>\n\t\t\t\t<ion-item detail (click)=\"navigateToManage()\">\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t\tUser Details\n\t\t\t\t\t</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</ion-list>\n\t\t</ion-col>\n\t</ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/users/user-details/user-details.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/users/user-details/user-details.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-avatar {\n  max-width: 200px;\n  max-height: 200px;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto; }\n  ion-avatar img {\n    width: 200px;\n    height: 200px;\n    -o-object-fit: cover;\n       object-fit: cover; }\n  ion-content {\n  width: 100%;\n  --background: none;\n  --background: #43cea2;\n  --background: -webkit-linear-gradient(to left, #185a9d, #43cea2);\n  --background: linear-gradient(to left, #185a9d, #43cea2); }\n  ion-grid {\n  width: 100%; }\n  h2,\nsmall {\n  color: #fff; }\n  ion-list {\n  margin-right: 0.3rem;\n  margin-left: 0.3rem;\n  --ion-item-background: transparent; }\n  ion-list ion-item {\n    margin: 0.5rem auto;\n    --background: transparent;\n    color: #fff; }\n  ion-list ion-item ion-label {\n      font-weight: 300; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcnMvdXNlci1kZXRhaWxzL0Q6XFxTb2Z0d2FyZSBQcm9qZWN0c1xcTm9kZS5qc1xcTGV0c01lZXQvc3JjXFxhcHBcXHBhZ2VzXFx1c2Vyc1xcdXNlci1kZXRhaWxzXFx1c2VyLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWMsRUFBQTtFQUxoQjtJQVFJLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQWlCO09BQWpCLGlCQUFpQixFQUFBO0VBSXJCO0VBQ0UsV0FBVztFQUNYLGtCQUFhO0VBQ2IscUJBQWE7RUFDYixnRUFBYTtFQUNiLHdEQUFhLEVBQUE7RUFHZjtFQUNFLFdBQVcsRUFBQTtFQUdiOztFQUVFLFdBQVcsRUFBQTtFQUdiO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQ0FBc0IsRUFBQTtFQUh4QjtJQU1JLG1CQUFtQjtJQUNuQix5QkFBYTtJQUNiLFdBQVcsRUFBQTtFQVJmO01BV00sZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2Vycy91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hdmF0YXIge1xyXG4gIG1heC13aWR0aDogMjAwcHg7XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICAtLWJhY2tncm91bmQ6ICM0M2NlYTI7XHJcbiAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMTg1YTlkLCAjNDNjZWEyKTtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMTg1YTlkLCAjNDNjZWEyKTtcclxufVxyXG5cclxuaW9uLWdyaWQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5oMixcclxuc21hbGwge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDAuM3JlbTtcclxuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICBpb24taXRlbSB7XHJcbiAgICBtYXJnaW46IDAuNXJlbSBhdXRvO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/users/user-details/user-details.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/users/user-details/user-details.page.ts ***!
  \***************************************************************/
/*! exports provided: UserDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsPage", function() { return UserDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_helpers_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/helpers/authentication.service */ "./src/app/services/helpers/authentication.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");






var UserDetailsPage = /** @class */ (function () {
    function UserDetailsPage(router, authenticationService, userService, _sanitizer) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this._sanitizer = _sanitizer;
        this.user = null;
    }
    UserDetailsPage.prototype.ngOnInit = function () {
        this.getUser();
    };
    UserDetailsPage.prototype.navigateToManage = function () {
        this.router.navigateByUrl("/manage/" + this.user.uid);
    };
    UserDetailsPage.prototype.getUser = function () {
        var _this = this;
        var userId = this.authenticationService.getUID();
        this.memberSince = this.authenticationService.getUserAuth().metadata.creationTime;
        this.userService.getUser(userId).subscribe(function (result) { return (_this.user = result); });
    };
    UserDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! ./user-details.page.html */ "./src/app/pages/users/user-details/user-details.page.html"),
            styles: [__webpack_require__(/*! ./user-details.page.scss */ "./src/app/pages/users/user-details/user-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_helpers_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], UserDetailsPage);
    return UserDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=users-user-details-user-details-module.js.map