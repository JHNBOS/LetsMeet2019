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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Let's Meet</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <ion-list>\n    <ion-item button>\n      <ion-avatar slot=\"start\">\n        <img src=\"../../../assets/shapes.svg\">\n      </ion-avatar>\n\n      <ion-label text-wrap>\n        <h3>Group Name</h3>\n        <small>Last Edited: 2019-01-01</small>\n      </ion-label>\n\n      <ion-icon slot=\"end\" name=\"arrow-dropright\"></ion-icon>\n    </ion-item>\n\n    <ion-item button>\n      <ion-avatar slot=\"start\">\n        <img src=\"../../../assets/shapes.svg\">\n      </ion-avatar>\n\n      <ion-label text-wrap>\n        <h3>Group Name</h3>\n        <small>Last Edited: 2019-01-01</small>\n      </ion-label>\n\n      <ion-icon slot=\"end\" name=\"arrow-dropright\"></ion-icon>\n    </ion-item>\n\n    <ion-item button>\n      <ion-avatar slot=\"start\">\n        <img src=\"../../../assets/shapes.svg\">\n      </ion-avatar>\n\n      <ion-label text-wrap>\n        <h3>Group Name</h3>\n        <small>Last Edited: 2019-01-01</small>\n      </ion-label>\n\n      <ion-icon slot=\"end\" name=\"arrow-dropright\"></ion-icon>\n    </ion-item>\n\n    <ion-item button>\n      <ion-avatar slot=\"start\">\n        <img src=\"../../../assets/shapes.svg\">\n      </ion-avatar>\n\n      <ion-label text-wrap>\n        <h3>Group Name</h3>\n        <small>Last Edited: 2019-01-01</small>\n      </ion-label>\n\n      <ion-icon slot=\"end\" name=\"arrow-dropright\"></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/groups/groups.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/groups/groups.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px); }\n\nion-toolbar {\n  --ion-toolbar-background: rgba(255, 255, 255, 0.2);\n  --color: #fff; }\n\nion-back-button {\n  --color: #fff; }\n\nion-content {\n  width: 100%;\n  --background: none;\n  --background: #43cea2;\n  --background: -webkit-linear-gradient(to left, #185a9d, #43cea2);\n  --background: linear-gradient(to left, #185a9d, #43cea2); }\n\nion-list {\n  --ion-item-background: rgba(255, 255, 255, 0.05); }\n\nion-list ion-item {\n    --color: #fff; }\n\nion-list ion-icon {\n    color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ3JvdXBzL0Q6XFxTb2Z0d2FyZSBQcm9qZWN0c1xcTm9kZS5qc1xcTGV0c01lZXQvc3JjXFxhcHBcXHBhZ2VzXFxncm91cHNcXGdyb3Vwcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBMEI7VUFBMUIsMEJBQTBCLEVBQUE7O0FBRzVCO0VBQ0Usa0RBQXlCO0VBQ3pCLGFBQVEsRUFBQTs7QUFHVjtFQUNFLGFBQVEsRUFBQTs7QUFHVjtFQUNFLFdBQVc7RUFDWCxrQkFBYTtFQUNiLHFCQUFhO0VBQ2IsZ0VBQWE7RUFDYix3REFBYSxFQUFBOztBQUdmO0VBQ0UsZ0RBQXNCLEVBQUE7O0FBRHhCO0lBSUksYUFBUSxFQUFBOztBQUpaO0lBUUksV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ3JvdXBzL2dyb3Vwcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIC0tY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgLS1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICAtLWJhY2tncm91bmQ6ICM0M2NlYTI7XHJcbiAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMTg1YTlkLCAjNDNjZWEyKTtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMTg1YTlkLCAjNDNjZWEyKTtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcclxuXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1jb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG4gIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxufVxyXG4iXX0= */"

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



var GroupsPage = /** @class */ (function () {
    function GroupsPage(router) {
        this.router = router;
    }
    GroupsPage.prototype.ngOnInit = function () {
    };
    GroupsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-groups',
            template: __webpack_require__(/*! ./groups.page.html */ "./src/app/pages/groups/groups.page.html"),
            styles: [__webpack_require__(/*! ./groups.page.scss */ "./src/app/pages/groups/groups.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GroupsPage);
    return GroupsPage;
}());



/***/ })

}]);
//# sourceMappingURL=groups-groups-module.js.map