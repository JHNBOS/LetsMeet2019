(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contacts-contacts-module"],{

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

/***/ "./src/app/pages/contacts/contacts.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/contacts/contacts.module.ts ***!
  \***************************************************/
/*! exports provided: ContactsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPageModule", function() { return ContactsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contacts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contacts.page */ "./src/app/pages/contacts/contacts.page.ts");







var routes = [
    {
        path: '',
        component: _contacts_page__WEBPACK_IMPORTED_MODULE_6__["ContactsPage"]
    }
];
var ContactsPageModule = /** @class */ (function () {
    function ContactsPageModule() {
    }
    ContactsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_contacts_page__WEBPACK_IMPORTED_MODULE_6__["ContactsPage"]]
        })
    ], ContactsPageModule);
    return ContactsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/contacts/contacts.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/contacts/contacts.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Contacts</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <ion-list>\n    <ion-item button *ngFor=\"let contact of contacts\">\n      <ion-avatar slot=\"start\">\n        <img [src]=\"_sanitizer.bypassSecurityTrustResourceUrl(contact.avatar)\">\n      </ion-avatar>\n\n      <ion-label text-wrap>\n        <h3>{{ contact.name }}</h3>\n        <small>{{ contact.email }}</small>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"light\" (click)=\"showPrompt()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/contacts/contacts.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/contacts/contacts.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px); }\n\nion-toolbar {\n  --ion-toolbar-background: rgba(255, 255, 255, 0.2);\n  --color: #fff; }\n\nion-back-button {\n  --color: #fff; }\n\nion-content {\n  width: 100%;\n  --background: none;\n  --background: #43cea2;\n  --background: -webkit-linear-gradient(to left, #185a9d, #43cea2);\n  --background: linear-gradient(to left, #185a9d, #43cea2); }\n\nion-list {\n  --ion-item-background: rgba(255, 255, 255, 0.05); }\n\nion-list ion-item {\n    --color: #fff; }\n\nion-list ion-icon {\n    color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdHMvRDpcXEdpdFxcTGV0c01lZXQyMDE5L3NyY1xcYXBwXFxwYWdlc1xcY29udGFjdHNcXGNvbnRhY3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUEwQjtVQUExQiwwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxrREFBeUI7RUFDekIsYUFBUSxFQUFBOztBQUdWO0VBQ0UsYUFBUSxFQUFBOztBQUdWO0VBQ0UsV0FBVztFQUNYLGtCQUFhO0VBQ2IscUJBQWE7RUFDYixnRUFBYTtFQUNiLHdEQUFhLEVBQUE7O0FBR2Y7RUFDRSxnREFBc0IsRUFBQTs7QUFEeEI7SUFJSSxhQUFRLEVBQUE7O0FBSlo7SUFRSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb250YWN0cy9jb250YWN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIC0tY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgLS1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICAtLWJhY2tncm91bmQ6ICM0M2NlYTI7XHJcbiAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMTg1YTlkLCAjNDNjZWEyKTtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMTg1YTlkLCAjNDNjZWEyKTtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcclxuXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1jb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG4gIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/contacts/contacts.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/contacts/contacts.page.ts ***!
  \*************************************************/
/*! exports provided: ContactsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPage", function() { return ContactsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/contact.service */ "./src/app/services/contact.service.ts");






var ContactsPage = /** @class */ (function () {
    function ContactsPage(router, contactService, alertController, _sanitizer) {
        this.router = router;
        this.contactService = contactService;
        this.alertController = alertController;
        this._sanitizer = _sanitizer;
        this.authUser = null;
        this.contacts = null;
    }
    ContactsPage.prototype.ngOnInit = function () {
    };
    ContactsPage.prototype.ionViewWillEnter = function () {
        this.getContacts();
    };
    ContactsPage.prototype.getContacts = function () {
        var _this = this;
        this.contactService.getContacts().subscribe(function (result) { return _this.contacts = result; });
    };
    ContactsPage.prototype.showPrompt = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Add Contact',
                            message: 'Please enter email address of the contact you would like to add.',
                            inputs: [
                                {
                                    name: 'contactEmail',
                                    type: 'email',
                                    id: 'contactEmail',
                                    placeholder: 'Email'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary'
                                }, {
                                    text: 'OK',
                                    handler: function (data) {
                                        var contactEmail = data.contactEmail;
                                        _this.contactService.addContactByEmail(contactEmail).then(function (response) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                            var errorAlert;
                                            var _this = this;
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        if (!(response == false)) return [3 /*break*/, 3];
                                                        alert.dismiss();
                                                        return [4 /*yield*/, this.alertController.create({
                                                                header: 'Error',
                                                                message: 'No user found matching this email!',
                                                                buttons: [{ text: 'OK', handler: function () { return _this.router.navigate(['contacts']); } }]
                                                            })];
                                                    case 1:
                                                        errorAlert = _a.sent();
                                                        return [4 /*yield*/, errorAlert.present()];
                                                    case 2:
                                                        _a.sent();
                                                        return [3 /*break*/, 4];
                                                    case 3:
                                                        alert.dismiss();
                                                        this.router.navigate(['contacts']);
                                                        _a.label = 4;
                                                    case 4: return [2 /*return*/];
                                                }
                                            });
                                        }); });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ContactsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contacts.page.html */ "./src/app/pages/contacts/contacts.page.html"),
            styles: [__webpack_require__(/*! ./contacts.page.scss */ "./src/app/pages/contacts/contacts.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_5__["ContactService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], ContactsPage);
    return ContactsPage;
}());



/***/ }),

/***/ "./src/app/services/contact.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/contact.service.ts ***!
  \*********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _helpers_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/authentication.service */ "./src/app/services/helpers/authentication.service.ts");
/* harmony import */ var _models_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/contact */ "./src/app/services/models/contact.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");







var ContactService = /** @class */ (function () {
    function ContactService(afs, authenticationService, userService) {
        this.afs = afs;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.authUser = this.authenticationService.getUserAuth();
        this.contactCollection = this.afs.collection('users').doc(this.authUser.uid).collection('contacts');
        this.contacts = this.contactCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
    }
    ContactService.prototype.getContacts = function () {
        return this.contacts;
    };
    ContactService.prototype.getContact = function (id) {
        return this.contactCollection.doc(id).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (contact) { return contact; }));
    };
    ContactService.prototype.addContact = function (contact) {
        var _this = this;
        return this.contactCollection.doc(contact.id)
            .set({
            id: contact.id,
            name: contact.name,
            email: contact.email,
            avatar: contact.avatar
        })
            .then(function () { return true; })
            .catch(function (error) {
            _this.handleError(error);
            return false;
        });
    };
    ContactService.prototype.addContactByEmail = function (email) {
        var _this = this;
        return this.userService.getUserByEmail(email).then(function (response) {
            if (response != null) {
                var contactUser = response;
                var contact = new _models_contact__WEBPACK_IMPORTED_MODULE_5__["Contact"]();
                // Set properties
                contact.email = email;
                contact.avatar = contactUser.avatar;
                contact.name = contactUser.firstName + ' ' + contactUser.lastName;
                contact.id = contactUser.uid;
                return _this.contactCollection.doc(contact.id)
                    .set({
                    id: contact.id,
                    name: contact.name,
                    email: contact.email,
                    avatar: contact.avatar
                })
                    .then(function () { return true; });
            }
            return false;
        }).catch(function (error) {
            _this.handleError(error);
            return false;
        });
    };
    ContactService.prototype.updateContact = function (contact) {
        var _this = this;
        return this.contactCollection.doc(contact.id)
            .set({
            id: contact.id,
            name: contact.name,
            email: contact.email,
            avatar: contact.avatar
        })
            .then(function () { return true; })
            .catch(function (error) {
            _this.handleError(error);
            return false;
        });
    };
    ContactService.prototype.deleteContact = function (id) {
        return this.contactCollection.doc(id).delete();
    };
    ContactService.prototype.handleError = function (error) {
        throw error;
    };
    ContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _helpers_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/services/models/contact.ts":
/*!********************************************!*\
  !*** ./src/app/services/models/contact.ts ***!
  \********************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
var Contact = /** @class */ (function () {
    function Contact() {
    }
    return Contact;
}());



/***/ })

}]);
//# sourceMappingURL=contacts-contacts-module.js.map