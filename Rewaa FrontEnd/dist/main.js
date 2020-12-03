(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- nav -->\n<nav class=\"navbar navbar-expand navbar-dark bg-dark\" *ngIf=\"currentUser\">\n    <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link\" routerLink=\"/\">Home</a>\n        <a class=\"nav-item nav-link\" routerLink=\"/createProduct\">create</a>\n        <a class=\"nav-item nav-link\" routerLink=\"/listProducts\">list</a>\n        <a class=\"nav-item nav-link\" (click)=\"logout()\">Logout</a>\n    </div>\n</nav>\n<nav class=\"navbar navbar-expand navbar-dark bg-dark\" *ngIf=\"!currentUser\">\n    <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link\" routerLink=\"/signup\">signup</a>\n    </div>\n</nav>\n\n<!-- main app container -->\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 offset-md-3 mt-5\">\n    <div class=\"card\">\n        <h4 class=\"card-header\">login</h4>\n        <div class=\"card-body\">\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                    <label for=\"username\">Username</label>\n                    <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                    <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                    </div>\n                </div>\n                <button [disabled]=\"loading\" class=\"btn btn-primary\">\n                    <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                    Login\n                </button>\n\n              <a class=\"nav-item nav-link\" routerLink=\"/signup\">dont have account? Signup.</a>\n\n              <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product/create/create.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product/create/create.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 offset-md-3 mt-5\">\n  <div class=\"card\">\n    <h4 class=\"card-header\">Create Product</h4>\n    <div class=\"card-body\">\n      <form [formGroup]=\"productForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"name\">Name</label>\n          <input type=\"text\" formControlName=\"name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" />\n          <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.name.errors.required\">Name is required</div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"description\">description</label>\n          <input type=\"text\" formControlName=\"description\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\" />\n          <div *ngIf=\"submitted && f.description.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.description.errors.required\">description is required</div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"type\">type</label>\n          <input type=\"text\" formControlName=\"type\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.type.errors }\" />\n          <div *ngIf=\"submitted && f.type.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.type.errors.required\">type is required</div>\n          </div>\n        </div>\n\n\n        <div class=\"form-group\">\n          <label for=\"price\">price</label>\n          <input type=\"text\" formControlName=\"price\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.price.errors }\" />\n          <div *ngIf=\"submitted && f.price.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.price.errors.required\">price is required</div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"status\">status</label>\n          <select type=\"text\" formControlName=\"status\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.status.errors }\" >\n            <option value=\"0\">false</option>\n            <option value=\"1\">true</option>\n\n          </select>\n          <div *ngIf=\"submitted && f.status.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.status.errors.required\">status is required</div>\n          </div>\n        </div>\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">\n          <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n          Create\n        </button>\n\n\n        <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product/edit/edit.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product/edit/edit.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 offset-md-3 mt-5\">\n  <div class=\"card\">\n    <h4 class=\"card-header\">Update Product</h4>\n    <div class=\"card-body\">\n      <form [formGroup]=\"productForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"name\">Name</label>\n          <input type=\"text\" formControlName=\"name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" />\n          <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.name.errors.required\">Name is required</div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"description\">description</label>\n          <input type=\"text\" formControlName=\"description\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\" />\n          <div *ngIf=\"submitted && f.description.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.description.errors.required\">description is required</div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"type\">type</label>\n          <input type=\"text\" formControlName=\"type\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.type.errors }\" />\n          <div *ngIf=\"submitted && f.type.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.type.errors.required\">type is required</div>\n          </div>\n        </div>\n\n\n        <div class=\"form-group\">\n          <label for=\"price\">price</label>\n          <input type=\"text\" formControlName=\"price\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.price.errors }\" />\n          <div *ngIf=\"submitted && f.price.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.price.errors.required\">price is required</div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"status\">status</label>\n          <select type=\"text\" formControlName=\"status\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.status.errors }\" >\n            <option value=\"0\">false</option>\n            <option value=\"1\">true</option>\n\n          </select>\n          <div *ngIf=\"submitted && f.status.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.status.errors.required\">status is required</div>\n          </div>\n        </div>\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">\n          <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n          Create\n        </button>\n\n\n        <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product/list/list.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product/list/list.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-4\">\n    <h4 class=\"card-header\">product list</h4>\n    <div class=\"card-body\">\n        <div *ngIf=\"loading\" class=\"spinner-border spinner-border-sm\"></div>\n        <div *ngIf=\"products\">\n          <div class=\"row\">\n\n            <div  class=\"col-md-2\">\n              Id\n            </div>\n            <div  class=\"col-md-2\">\n              Name\n            </div>\n            <div  class=\"col-md-2\">\n              Price\n            </div>\n\n            <div  class=\"col-md-2\">\n              Actions\n            </div>\n\n          </div>\n                    <div *ngFor=\"let product of products\" class=\"row\">\n\n            <div  class=\"col-md-2\">\n              {{product.id}}\n            </div>\n            <div  class=\"col-md-2\">\n              {{product.name}}\n            </div>\n            <div  class=\"col-md-2\">\n              {{product.price}}\n            </div>\n                      <div  class=\"col-md-2\">\n              <button (click)=\"deleteProduct(product.id)\">delete</button>\n              <button (click)=\"editProduct(product.id)\">edit</button>\n              <button (click)=\"viewProduct(product.id)\">viewProduct</button>\n            </div>\n\n\n          </div>\n\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product/view/view.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product/view/view.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-4\">\n    <h4 class=\"card-header\">product list</h4>\n    <div class=\"card-body\">\n        <div *ngIf=\"loading\" class=\"spinner-border spinner-border-sm\"></div>\n        <div *ngIf=\"product\">\n          <div class=\"row\">\n\n            <div  class=\"col-md-6\">\n              Id :               {{product.id}}\n\n            </div>\n            <div  class=\"col-md-6\">\n              Name :               {{product.name}}\n\n            </div>\n            <div  class=\"col-md-6\">\n              Price :               {{product.price}}\n\n            </div>\n\n          </div>\n\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 offset-md-3 mt-5\">\n    <div class=\"card\">\n        <h4 class=\"card-header\">Signup</h4>\n        <div class=\"card-body\">\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                    <label for=\"username\">Username</label>\n                    <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                    <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                    </div>\n                </div>                <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input type=\"email\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n                    <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                    </div>\n                </div>\n                <button [disabled]=\"loading\" class=\"btn btn-primary\">\n                    <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                    Signup\n                </button>\n              <a class=\"nav-item nav-link\" routerLink=\"/login\"> have account? login.</a>\n\n              <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/_helpers/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/_helpers/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");




let AuthGuard = class AuthGuard {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivate(route, state) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
};
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");





let ErrorInterceptor = class ErrorInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload(true);
            }
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: AuthGuard, ErrorInterceptor, JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_helpers/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });

/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_1__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__["JwtInterceptor"]; });






/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");



let JwtInterceptor = class JwtInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        // add authorization header with jwt token if available
        let currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.accessToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.accessToken}`
                }
            });
        }
        return next.handle(request);
    }
};
JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
], JwtInterceptor);



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");






let AuthenticationService = class AuthenticationService {
    constructor(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(username, password) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/auth/signin`, { username, password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
    }
    signup(username, email, password) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/auth/signup`, { email, username, password }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            return user;
        }));
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
};
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AuthenticationService);



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AuthenticationService, ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"]; });

/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.service */ "./src/app/_services/product.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return _product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]; });





/***/ }),

/***/ "./src/app/_services/product.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/product.service.ts ***!
  \**********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/api/products';
    }
    getAll() {
        return this.http.get(this.url);
    }
    create(obj) {
        return this.http.post(this.url, obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            return user;
        }));
    }
    update(id, obj) {
        return this.http.put(this.url + "/" + id, obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            return user;
        }));
    }
    delete(id) {
        return this.http.delete(this.url + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            return user;
        }));
    }
    get(id) {
        return this.http.get(this.url + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            return user;
        }));
    }
};
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ProductService);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");




let AppComponent = class AppComponent {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'app', template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html") }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product */ "./src/app/product/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _app_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/signup/signup.component */ "./src/app/signup/signup.component.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_6__["appRoutingModule"]
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _product__WEBPACK_IMPORTED_MODULE_8__["EditComponent"],
            _product__WEBPACK_IMPORTED_MODULE_8__["ListComponent"],
            _product__WEBPACK_IMPORTED_MODULE_8__["ViewComponent"],
            _product__WEBPACK_IMPORTED_MODULE_8__["CreateComponent"],
            _login__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _app_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"]
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_7__["JwtInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_7__["ErrorInterceptor"], multi: true },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: appRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingModule", function() { return appRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product */ "./src/app/product/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _app_signup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/signup */ "./src/app/signup/index.ts");





const routes = [
    { path: 'listProducts', component: _product__WEBPACK_IMPORTED_MODULE_1__["ListComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: '', component: _product__WEBPACK_IMPORTED_MODULE_1__["ListComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'editProduct/:id', component: _product__WEBPACK_IMPORTED_MODULE_1__["EditComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'viewProduct/:id', component: _product__WEBPACK_IMPORTED_MODULE_1__["ViewComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'createProduct', component: _product__WEBPACK_IMPORTED_MODULE_1__["CreateComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'login', component: _login__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'signup', component: _app_signup__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
const appRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/login/index.ts":
/*!********************************!*\
  !*** ./src/app/login/index.ts ***!
  \********************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");






let LoginComponent = class LoginComponent {
    constructor(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(data => {
            this.router.navigate([this.returnUrl]);
        }, error => {
            this.error = error;
            this.loading = false;
        });
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html") }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/product/create/create.component.ts":
/*!****************************************************!*\
  !*** ./src/app/product/create/create.component.ts ***!
  \****************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let CreateComponent = class CreateComponent {
    constructor(formBuilder, route, router, productService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    ngOnInit() {
        this.productForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.productForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.productForm.invalid) {
            return;
        }
        this.loading = true;
        console.log(this.productForm.value);
        this.productService.create(this.productForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(data => {
            this.router.navigate(['/listProducts']);
        }, error => {
            this.error = error;
            this.loading = false;
        });
    }
};
CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! raw-loader!./create.component.html */ "./node_modules/raw-loader/index.js!./src/app/product/create/create.component.html") }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _app_services__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
], CreateComponent);



/***/ }),

/***/ "./src/app/product/create/index.ts":
/*!*****************************************!*\
  !*** ./src/app/product/create/index.ts ***!
  \*****************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.component */ "./src/app/product/create/create.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return _create_component__WEBPACK_IMPORTED_MODULE_0__["CreateComponent"]; });




/***/ }),

/***/ "./src/app/product/edit/edit.component.ts":
/*!************************************************!*\
  !*** ./src/app/product/edit/edit.component.ts ***!
  \************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let EditComponent = class EditComponent {
    constructor(formBuilder, route, router, productService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.currentId = '';
        this.productForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    // convenience getter for easy access to form fields
    get f() {
        return this.productForm.controls;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.currentId = params['id'];
            this.loading = true;
            this.productService.get(this.currentId).subscribe(products => {
                this.loading = false;
                this.product = products;
                this.f.name.setValue(products['name']);
                this.f.description.setValue(products['description']);
                this.f.type.setValue(products['type']);
                this.f.price.setValue(products['price']);
                this.f.status.setValue(products['status']);
            });
        });
    }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.productForm.invalid) {
            return;
        }
        this.loading = true;
        console.log(this.productForm.value);
        this.productService.update(this.currentId, this.productForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(data => {
            this.router.navigate(['/listProducts']);
        }, error => {
            this.error = error;
            this.loading = false;
        });
    }
};
EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/product/edit/edit.component.html") }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _app_services__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
], EditComponent);



/***/ }),

/***/ "./src/app/product/edit/index.ts":
/*!***************************************!*\
  !*** ./src/app/product/edit/index.ts ***!
  \***************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.component */ "./src/app/product/edit/edit.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return _edit_component__WEBPACK_IMPORTED_MODULE_0__["EditComponent"]; });




/***/ }),

/***/ "./src/app/product/index.ts":
/*!**********************************!*\
  !*** ./src/app/product/index.ts ***!
  \**********************************/
/*! exports provided: ListComponent, CreateComponent, EditComponent, ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ "./src/app/product/list/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return _list__WEBPACK_IMPORTED_MODULE_0__["ListComponent"]; });

/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create */ "./src/app/product/create/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return _create__WEBPACK_IMPORTED_MODULE_1__["CreateComponent"]; });

/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/app/product/edit/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return _edit__WEBPACK_IMPORTED_MODULE_2__["EditComponent"]; });

/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view */ "./src/app/product/view/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return _view__WEBPACK_IMPORTED_MODULE_3__["ViewComponent"]; });







/***/ }),

/***/ "./src/app/product/list/index.ts":
/*!***************************************!*\
  !*** ./src/app/product/list/index.ts ***!
  \***************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.component */ "./src/app/product/list/list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return _list_component__WEBPACK_IMPORTED_MODULE_0__["ListComponent"]; });




/***/ }),

/***/ "./src/app/product/list/list.component.ts":
/*!************************************************!*\
  !*** ./src/app/product/list/list.component.ts ***!
  \************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ListComponent = class ListComponent {
    constructor(route, router, productService) {
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.loading = false;
    }
    ngOnInit() {
        this.loading = true;
        this.productService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(products => {
            this.loading = false;
            this.products = products;
        });
    }
    editProduct(id) {
        this.router.navigate(['/editProduct/' + id]);
    }
    viewProduct(id) {
        console.log(id);
        this.router.navigate(['/viewProduct/' + id]);
    }
    deleteProduct(id) {
        this.productService.delete(id).subscribe(products => {
            this.loading = false;
            this.router.navigate(['/listProducts']);
        });
    }
};
ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/product/list/list.component.html") }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _app_services__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
], ListComponent);



/***/ }),

/***/ "./src/app/product/view/index.ts":
/*!***************************************!*\
  !*** ./src/app/product/view/index.ts ***!
  \***************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.component */ "./src/app/product/view/view.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return _view_component__WEBPACK_IMPORTED_MODULE_0__["ViewComponent"]; });




/***/ }),

/***/ "./src/app/product/view/view.component.ts":
/*!************************************************!*\
  !*** ./src/app/product/view/view.component.ts ***!
  \************************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ViewComponent = class ViewComponent {
    constructor(route, router, productService) {
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.loading = false;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.currentId = params['id'];
            this.loading = true;
            this.productService.get(this.currentId).subscribe(products => {
                this.loading = false;
                this.product = products;
                console.log(products);
            });
        });
    }
    deleteProduct(id) {
        this.productService.delete(id).subscribe(products => {
            this.loading = false;
            this.router.navigate(['/listProducts']);
        });
    }
};
ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! raw-loader!./view.component.html */ "./node_modules/raw-loader/index.js!./src/app/product/view/view.component.html") }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _app_services__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
], ViewComponent);



/***/ }),

/***/ "./src/app/signup/index.ts":
/*!*********************************!*\
  !*** ./src/app/signup/index.ts ***!
  \*********************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.component */ "./src/app/signup/signup.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return _signup_component__WEBPACK_IMPORTED_MODULE_0__["SignupComponent"]; });




/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");





let SignupComponent = class SignupComponent {
    constructor(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.signup(this.f.email.value, this.f.username.value, this.f.password.value)
            .subscribe(data => {
            this.router.navigate(['login']);
        }, error => {
            this.error = error;
            this.loading = false;
        });
    }
};
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html") }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
], SignupComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    apiUrl: 'http://localhost:8080'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/mkhaled/Rewaa Task/rewaa/Rewaa FrontEnd/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map