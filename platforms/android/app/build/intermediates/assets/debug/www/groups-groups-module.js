(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["groups-groups-module"],{

/***/ "./src/app/pages/groups/groups.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/groups/groups.module.ts ***!
  \***********************************************/
/*! exports provided: GroupsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsPageModule", function() { return GroupsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _groups_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./groups.page */ "./src/app/pages/groups/groups.page.ts");







var routes = [
    {
        path: '',
        component: _groups_page__WEBPACK_IMPORTED_MODULE_6__["GroupsPage"]
    }
];
var GroupsPageModule = /** @class */ (function () {
    function GroupsPageModule() {
    }
    GroupsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_groups_page__WEBPACK_IMPORTED_MODULE_6__["GroupsPage"]]
        })
    ], GroupsPageModule);
    return GroupsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/groups/groups.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/groups/groups.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Let's Meet</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <ion-list>\n    <ion-item button>\n      <ion-avatar slot=\"start\">\n        <img src=\"../../../assets/shapes.svg\">\n      </ion-avatar>\n\n      <ion-label text-wrap>\n        <h3>Group Name</h3>\n        <small>Last Edited: 2019-01-01</small>\n      </ion-label>\n\n      <ion-icon slot=\"end\" name=\"arrow-dropright\"></ion-icon>\n    </ion-item>\n\n    <ion-item button>\n      <ion-avatar slot=\"start\">\n        <img src=\"../../../assets/shapes.svg\">\n      </ion-avatar>\n\n      <ion-label text-wrap>\n        <h3>Group Name</h3>\n        <small>Last Edited: 2019-01-01</small>\n      </ion-label>\n\n      <ion-icon slot=\"end\" name=\"arrow-dropright\"></ion-icon>\n    </ion-item>\n\n    <ion-item button>\n      <ion-avatar slot=\"start\">\n        <img src=\"../../../assets/shapes.svg\">\n      </ion-avatar>\n\n      <ion-label text-wrap>\n        <h3>Group Name</h3>\n        <small>Last Edited: 2019-01-01</small>\n      </ion-label>\n\n      <ion-icon slot=\"end\" name=\"arrow-dropright\"></ion-icon>\n    </ion-item>\n\n    <ion-item button>\n      <ion-avatar slot=\"start\">\n        <img src=\"../../../assets/shapes.svg\">\n      </ion-avatar>\n\n      <ion-label text-wrap>\n        <h3>Group Name</h3>\n        <small>Last Edited: 2019-01-01</small>\n      </ion-label>\n\n      <ion-icon slot=\"end\" name=\"arrow-dropright\"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"light\" (click)=\"navigateToAdd()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/groups/groups.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/groups/groups.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px); }\n\nion-toolbar {\n  --ion-toolbar-background: rgba(255, 255, 255, 0.2);\n  --color: #fff; }\n\nion-back-button {\n  --color: #fff; }\n\nion-content {\n  width: 100%;\n  --background: none;\n  --background: #43cea2;\n  --background: -webkit-linear-gradient(to left, #185a9d, #43cea2);\n  --background: linear-gradient(to left, #185a9d, #43cea2); }\n\nion-list {\n  --ion-item-background: rgba(255, 255, 255, 0.05); }\n\nion-list ion-item {\n    --color: #fff; }\n\nion-list ion-icon {\n    color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ3JvdXBzL0Q6XFxHaXRcXExldHNNZWV0MjAxOS9zcmNcXGFwcFxccGFnZXNcXGdyb3Vwc1xcZ3JvdXBzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUEwQjtVQUExQiwwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxrREFBeUI7RUFDekIsYUFBUSxFQUFBOztBQUdWO0VBQ0UsYUFBUSxFQUFBOztBQUdWO0VBQ0UsV0FBVztFQUNYLGtCQUFhO0VBQ2IscUJBQWE7RUFDYixnRUFBYTtFQUNiLHdEQUFhLEVBQUE7O0FBR2Y7RUFDRSxnREFBc0IsRUFBQTs7QUFEeEI7SUFJSSxhQUFRLEVBQUE7O0FBSlo7SUFRSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ncm91cHMvZ3JvdXBzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgLS1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuaW9uLWJhY2stYnV0dG9uIHtcclxuICAtLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gIC0tYmFja2dyb3VuZDogIzQzY2VhMjtcclxuICAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMxODVhOWQsICM0M2NlYTIpO1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMxODVhOWQsICM0M2NlYTIpO1xyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xyXG5cclxuICBpb24taXRlbSB7XHJcbiAgICAtLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/groups/groups.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/groups/groups.page.ts ***!
  \*********************************************/
/*! exports provided: GroupsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsPage", function() { return GroupsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_group_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/group.service */ "./src/app/services/group.service.ts");




var GroupsPage = /** @class */ (function () {
    function GroupsPage(router, groupService) {
        this.router = router;
        this.groupService = groupService;
        this.groups = null;
    }
    GroupsPage.prototype.ngOnInit = function () {
    };
    GroupsPage.prototype.ionViewWillEnter = function () {
    };
    GroupsPage.prototype.getGroups = function () {
        var _this = this;
        this.groupService.getGroups().subscribe(function (result) { return _this.groups = result; });
    };
    GroupsPage.prototype.navigateToAdd = function () {
        this.router.navigate(['add-group']);
    };
    GroupsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-groups',
            template: __webpack_require__(/*! ./groups.page.html */ "./src/app/pages/groups/groups.page.html"),
            styles: [__webpack_require__(/*! ./groups.page.scss */ "./src/app/pages/groups/groups.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_group_service__WEBPACK_IMPORTED_MODULE_3__["GroupService"]])
    ], GroupsPage);
    return GroupsPage;
}());



/***/ })

}]);
//# sourceMappingURL=groups-groups-module.js.map