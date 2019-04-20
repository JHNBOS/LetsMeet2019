(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-user-details-user-details-module"],{

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

module.exports = "<ion-content class=\"ion-padding\" *ngIf=\"user\" fullscreen=\"true\">\n\t<ion-row>\n\t\t<ion-col text-center align-self-center>\n\t\t\t<ion-avatar>\n\t\t\t\t<img [src]=\"_sanitizer.bypassSecurityTrustResourceUrl(user.avatar)\" />\n\t\t\t</ion-avatar>\n\t\t\t<h2>{{ user.firstName }} {{ user.lastName }}</h2>\n\t\t\t<small>Member since {{ memberSince | date: 'MMMM dd, yyyy' }}</small>\n\t\t</ion-col>\n\t</ion-row>\n\n\t<ion-row class=\"ion-margin-top\" text-center>\n\t\t<ion-col>\n\t\t\t<ion-list>\n\t\t\t\t<ion-item detail (click)=\"navigateToManage()\">\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t\tUser Details\n\t\t\t\t\t</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item detail (click)=\"navigateToContacts()\">\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t\tContacts\n\t\t\t\t\t</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</ion-list>\n\t\t</ion-col>\n\t</ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/users/user-details/user-details.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/users/user-details/user-details.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-avatar {\n  max-width: 200px;\n  max-height: 200px;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto; }\n  ion-avatar img {\n    width: 200px;\n    height: 200px;\n    -o-object-fit: cover;\n       object-fit: cover; }\n  ion-content {\n  width: 100%;\n  --background: none;\n  --background: #43cea2;\n  --background: -webkit-linear-gradient(to left, #185a9d, #43cea2);\n  --background: linear-gradient(to left, #185a9d, #43cea2); }\n  ion-grid {\n  width: 100%; }\n  h2,\nsmall {\n  color: #fff; }\n  ion-list {\n  margin-right: 0.3rem;\n  margin-left: 0.3rem;\n  --ion-item-background: transparent; }\n  ion-list ion-item {\n    margin: 0.5rem auto;\n    --background: transparent;\n    color: #fff; }\n  ion-list ion-item ion-label {\n      font-weight: 300; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcnMvdXNlci1kZXRhaWxzL0Q6XFxHaXRcXExldHNNZWV0MjAxOS9zcmNcXGFwcFxccGFnZXNcXHVzZXJzXFx1c2VyLWRldGFpbHNcXHVzZXItZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYyxFQUFBO0VBTGhCO0lBUUksWUFBWTtJQUNaLGFBQWE7SUFDYixvQkFBaUI7T0FBakIsaUJBQWlCLEVBQUE7RUFJckI7RUFDRSxXQUFXO0VBQ1gsa0JBQWE7RUFDYixxQkFBYTtFQUNiLGdFQUFhO0VBQ2Isd0RBQWEsRUFBQTtFQUdmO0VBQ0UsV0FBVyxFQUFBO0VBR2I7O0VBRUUsV0FBVyxFQUFBO0VBR2I7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtDQUFzQixFQUFBO0VBSHhCO0lBTUksbUJBQW1CO0lBQ25CLHlCQUFhO0lBQ2IsV0FBVyxFQUFBO0VBUmY7TUFXTSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJzL3VzZXItZGV0YWlscy91c2VyLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWF2YXRhciB7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxuICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gIC0tYmFja2dyb3VuZDogIzQzY2VhMjtcclxuICAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMxODVhOWQsICM0M2NlYTIpO1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMxODVhOWQsICM0M2NlYTIpO1xyXG59XHJcblxyXG5pb24tZ3JpZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmgyLFxyXG5zbWFsbCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuICBtYXJnaW4tcmlnaHQ6IDAuM3JlbTtcclxuICBtYXJnaW4tbGVmdDogMC4zcmVtO1xyXG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblxyXG4gIGlvbi1pdGVtIHtcclxuICAgIG1hcmdpbjogMC41cmVtIGF1dG87XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

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
    };
    UserDetailsPage.prototype.ionViewWillEnter = function () {
        this.getUser();
    };
    UserDetailsPage.prototype.navigateToManage = function () {
        this.router.navigate(['user-manage']);
    };
    UserDetailsPage.prototype.navigateToContacts = function () {
        this.router.navigate(['contacts']);
    };
    UserDetailsPage.prototype.getUser = function () {
        var _this = this;
        var authUser = this.authenticationService.getUserAuth();
        this.memberSince = authUser.metadata.creationTime;
        this.userService.getUser(authUser.uid).subscribe(function (result) { return (_this.user = result); });
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