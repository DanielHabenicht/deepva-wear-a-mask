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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, DetectionState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetectionState", function() { return DetectionState; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/__ivy_ngcc__/fesm2015/ngx-webcam.js");








function AppComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u25CF No Connection to Server ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Are you wearing a mask?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_webcam_10_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "webcam", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("initError", function AppComponent_webcam_10_Template_webcam_initError_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.handleInitError($event); })("imageCapture", function AppComponent_webcam_10_Template_webcam_imageCapture_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.capturedImage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", ctx_r2.innerWidth / 2)("height", ctx_r2.innerHeight / 2)("allowCameraSwitch", true)("trigger", ctx_r2.captureImageObservable);
} }
function AppComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const face_r12 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r3.getStyle(face_r12.box));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](face_r12.conf);
} }
function AppComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please activate the camera in your browser settings. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Looking for people... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "style", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " .st0 { fill-rule: evenodd; clip-rule: evenodd; } ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "style", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " .st0 { fill-rule: evenodd; clip-rule: evenodd; } ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@openClose", undefined);
} }
function AppComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Thanks for wearing a face mask! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@openClose", undefined);
} }
function AppComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Whoops, you forgot to put on you face mask! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@openClose", undefined);
} }
function AppComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 28);
} }
class AppComponent {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.debug = !src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production;
        this.faces = [];
        this.detectionState = DetectionState.neutral;
        this.detectionStateEnum = DetectionState;
        this.imageDimensions = null;
        this.innerWidth = 0;
        this.innerHeight = 0;
        this.captureImageObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this.captureImageTrigger = observer;
        });
        this.isHidden = false;
        // document.addEventListener('visibilitychange', () => {
        //   if (document.hidden) {
        //     this.isHidden = true;
        //   } else {
        //     this.isHidden = false;
        //   }
        // });
    }
    onResize(event) {
        this.innerWidth = window.innerWidth;
        this.innerHeight = window.innerHeight;
        // this.imageDimensions = null;
    }
    ngOnInit() {
        this.innerWidth = window.innerWidth;
        this.innerHeight = window.innerHeight;
        this.capture();
    }
    handleInitError(error) {
        this.detectionState = DetectionState.cameraDeactivated;
        if (error.mediaStreamError &&
            error.mediaStreamError.name === 'NotAllowedError') {
            console.warn('Camera access was not allowed by user!');
        }
    }
    capture() {
        setTimeout(() => {
            var _a;
            if (!this.isHidden) {
                (_a = this.captureImageTrigger) === null || _a === void 0 ? void 0 : _a.next('');
            }
            this.capture();
        }, 500);
    }
    capturedImage(event) {
        if (this.imageDimensions == null) {
            var image = document.createElement('img');
            image.addEventListener('load', () => {
                this.imageDimensions = {
                    width: image.width,
                    heigth: image.height,
                };
                console.log(this.imageDimensions);
            });
            image.src = event.imageAsDataUrl;
        }
        this.analyzeImage(event.imageAsBase64);
    }
    analyzeImage(image) {
        this.httpClient
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/mask', {
            image: image,
        })
            .subscribe((result) => {
            if (result.faces.length === 0) {
                this.detectionState = DetectionState.neutral;
            }
            else if (result.faces[0].mask === true) {
                this.detectionState = DetectionState.hasMask;
            }
            else if (result.faces[0].mask === false) {
                this.detectionState = DetectionState.noMask;
            }
            this.faces = result.faces;
            console.log(this.faces[0].box.xmin, this.faces[0].box.ymin);
            // console.log(result);
        }, (err) => {
            this.detectionState = DetectionState.noConnection;
            this.faces = [];
        });
    }
    getStyle(box) {
        return {
            left: (this.imageDimensions ? this.imageDimensions.width : 0) -
                box.xmin -
                (this.imageDimensions ? this.imageDimensions.width / 2 : 0) +
                'px',
            top: box.ymin + 'px',
            width: box.xmax - box.xmin + 'px',
            height: box.ymax - box.ymin + 'px',
        };
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function AppComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 18, vars: 10, consts: [["id", "logos"], ["src", "assets/t-systems-logo.svg"], ["src", "assets/deep-va-logo.svg"], ["id", "claim", "src", "assets/t-systems-claim.svg"], ["id", "main-content", 1, "base-background"], ["id", "noConnection", 4, "ngIf"], ["id", "title", 4, "ngIf"], [1, "overlay-container"], ["id", "video", 3, "width", "height", "allowCameraSwitch", "trigger", "initError", "imageCapture", 4, "ngIf"], [1, "box-container"], ["class", "face-box", 3, "ngStyle", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "message", 4, "ngIf"], ["id", "debug", 4, "ngIf"], ["id", "noConnection"], ["id", "title"], ["id", "video", 3, "width", "height", "allowCameraSwitch", "trigger", "initError", "imageCapture"], [1, "face-box", 3, "ngStyle"], [2, "color", "white"], [1, "message"], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 101.61 122.88", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 101.61 122.88"], ["type", "text/css"], ["d", "M56.92,54.1c-0.4-0.27-0.51-0.82-0.24-1.22c0.27-0.4,0.82-0.51,1.22-0.24c0.67,0.45,1.8,0.69,3,0.67 c1.13-0.02,2.27-0.27,3.09-0.8c0.41-0.26,0.95-0.14,1.21,0.27c0.26,0.41,0.14,0.95-0.27,1.21c-1.11,0.71-2.58,1.05-4.01,1.07 C59.4,55.09,57.89,54.75,56.92,54.1L56.92,54.1z M28.4,86.88l0.05,0.04c1.22-1.13,2.69-2.6,4-4.2c1.25-1.53,2.35-3.18,2.92-4.74 l-0.09-0.14c-1.65-1.65-3.17-3.6-4.56-5.81c-1.54-2.45-2.94-5.22-4.19-8.28c-0.56-0.17-1.08-0.37-1.58-0.6 c-0.71-0.33-1.36-0.73-1.96-1.18c-1.74-1.33-2.89-3.15-3.56-5.15c-0.74-2.23-0.88-4.7-0.58-6.97c0.16-1.17,0.48-2.18,0.97-3.04 c0.52-0.91,1.21-1.63,2.07-2.18c0.25-0.16,0.54-0.23,0.81-0.2c-0.48-2.51-0.41-4.91-0.31-7.73c0.27-7.37,2.14-13.26,7.94-18.37 c8.76-7.71,26.1-8.38,35.75-1.74c1.43,0.99,2.76,2.15,3.96,3.53c3.92,4.49,7.4,14.35,7.33,20.43c-0.02,1.41-0.24,2.84-0.73,4.29 c-0.02,0.14-0.05,0.3-0.09,0.48c1.06,0.67,1.89,1.48,2.49,2.4c0.9,1.38,1.3,2.97,1.2,4.64c-0.09,1.61-0.64,3.3-1.64,4.94 c-1.16,1.91-2.93,3.78-5.3,5.39c-1.97,4.59-4.69,9.19-7.96,12.96c-0.4,0.79-0.83,1.53-1.31,2.23c0.75,3.04,3.69,6.41,5.77,8.78 l0.16,0.18c7.34,2.19,14.28,5.6,19.86,13.08c5.21,6.99,7.62,14.88,11.78,22.92c-34.81,0-67.94,0.01-101.27,0 c-0.73-5.42-0.26-6.11,1.46-11.26C6.54,97.33,12.5,95.68,28.4,86.88L28.4,86.88z M36.94,80.07c-0.65,1.2-1.49,2.39-2.42,3.52 c-1.22,1.49-2.58,2.87-3.76,3.99c4.14,4.04,11.29,5.97,18.47,5.93c7.2-0.04,14.39-2.06,18.54-5.91l0,0l-0.01-0.01 c-1.78-2.04-4.16-4.76-5.43-7.52c-1.46,1.6-3.13,2.87-4.93,3.81c-2.35,1.23-4.92,1.89-7.49,1.96c-2.58,0.07-5.17-0.46-7.56-1.62 C40.38,83.26,38.53,81.88,36.94,80.07L36.94,80.07z M41.43,2.51c5.75-3.9,12.3-3.04,17.71,1.09c1.42,1.09,2.64,2.42,3.6,4.04 c0.82,1.38,2.25,4.2-0.42,4.63c-1.05,0.17-2.91-1.27-4.33-1.73c-1.83-0.59-3.72-0.97-5.58-1.17c-3.49-0.37-6.92-0.08-9.86,0.74 c-1.6,0.44-3.15,0.98-4.64,1.67c-0.7,0.32-2.11,1.26-2.5,0.05C34.5,9.03,39.36,3.91,41.43,2.51L41.43,2.51z M23.34,46.87 l-0.03,0.02c-0.49,0.31-0.88,0.73-1.18,1.25c-0.32,0.56-0.54,1.25-0.65,2.08c-0.25,1.9-0.14,3.94,0.47,5.77 c0.51,1.52,1.37,2.89,2.65,3.87c0.45,0.35,0.94,0.65,1.47,0.89c0.54,0.25,1.12,0.46,1.75,0.61c0.44,0.1,0.77,0.41,0.93,0.8l0,0 c0.97,2.43,2.02,4.66,3.16,6.69c-0.26-1.51-0.43-3.13-0.47-4.86c0-0.07,0-0.14,0.01-0.21l-4.8-10.49 c-0.59-0.91-1.14-1.83-1.65-2.76C24.27,49.23,23.73,48.03,23.34,46.87L23.34,46.87z M36.59,75.38c0.47,0.51,0.96,0.98,1.46,1.43 c1.99,1.79,3.95,3.05,5.86,3.86c3.52,1.48,6.92,1.39,10.07,0.23c3.24-1.19,6.26-3.52,8.92-6.47c0.29-0.32,0.57-0.64,0.85-0.97 c1.05-2.48,1.67-5.41,1.71-8.76c-5.26-2.56-10.53-3.59-15.79-3.46c-5.13,0.13-10.27,1.36-15.42,3.36 c-0.03,0.27-0.16,0.53-0.36,0.72C34.17,69.37,35.14,72.71,36.59,75.38L36.59,75.38z M67.62,67.99c1.3-2.15,2.44-4.41,3.38-6.67 c0.12-0.29,0.34-0.52,0.6-0.66c2.14-1.43,3.73-3.06,4.73-4.72c0.76-1.26,1.18-2.53,1.25-3.71c0.06-1.11-0.19-2.15-0.77-3.03 c-0.31-0.47-0.71-0.9-1.21-1.28c-0.74,1.69-1.86,3.77-3.27,5.95l-4.5,10.07v0h0C67.86,65.36,67.78,66.71,67.62,67.99L67.62,67.99z M65.96,62.3l4.79-10.71v-9.02c-6.25-2.89-10.34-9.25-12.42-18.82c-2.49,18.2-24.84,17.42-30.46,20.74v5.76l5.55,12.12 c5.38-2.08,10.78-3.37,16.19-3.51C55.06,58.71,60.51,59.74,65.96,62.3L65.96,62.3z M33.75,54.1c-0.4-0.27-0.51-0.82-0.24-1.22 c0.27-0.4,0.82-0.51,1.22-0.24c0.68,0.46,1.83,0.72,3.05,0.71c1.14-0.01,2.32-0.25,3.23-0.78c0.42-0.24,0.96-0.1,1.2,0.32 c0.24,0.42,0.1,0.96-0.32,1.2c-1.19,0.69-2.68,1.01-4.11,1.01C36.23,55.11,34.72,54.75,33.75,54.1L33.75,54.1z M33,49 c-0.4,0.28-0.95,0.19-1.23-0.21c-0.28-0.4-0.19-0.95,0.21-1.23c1.66-1.17,3.35-1.78,5.08-1.78c1.73-0.01,3.46,0.58,5.19,1.78 c0.4,0.28,0.5,0.82,0.22,1.22s-0.82,0.5-1.22,0.22c-1.43-0.99-2.83-1.47-4.19-1.47C35.71,47.55,34.35,48.04,33,49L33,49z M57.71,49 c-0.4,0.28-0.95,0.19-1.23-0.21c-0.28-0.4-0.19-0.95,0.21-1.23c1.66-1.17,3.35-1.78,5.08-1.78c1.73-0.01,3.46,0.58,5.19,1.78 c0.4,0.28,0.5,0.82,0.22,1.22c-0.28,0.4-0.82,0.5-1.22,0.22c-1.43-0.99-2.83-1.47-4.19-1.47C60.43,47.55,59.07,48.04,57.71,49 L57.71,49z", 1, "st0"], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 122.88 116.38", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 122.88 116.38"], ["d", "M44.59,81.2c6.76,14.1,27.27,14.6,33.74,0.08c-1.77-1.79-3.08-3.7-4.38-5.61c-0.21-0.31-0.43-0.62-0.64-0.94 c-3.13,2.48-6.92,4.06-11.86,4.05c-5.33-0.01-9.35-2.05-12.64-5.06c-0.2-0.18-0.39-0.36-0.58-0.55c-0.47,1.31-1.07,2.88-1.71,4.34 C45.9,78.93,45.23,80.25,44.59,81.2L44.59,81.2z M80.24,79.72c7.22,5.1,24.78,6.33,31.52,10.09c2.24,1.25,4.26,2.84,5.89,4.99 c3.39,4.48,10.33,20.74-0.92,21.6H6.17c-11.25-0.86-4.32-17.12-0.92-21.6c1.63-2.15,3.65-3.74,5.89-4.99 c6.72-3.75,24.21-4.98,31.46-10.05c0.53-0.8,1.11-1.97,1.66-3.23c0.83-1.9,1.59-3.98,2.08-5.4c-2.03-2.39-3.77-5.09-5.44-7.74 l-5.5-8.74c-2.01-3-3.06-5.74-3.12-7.99c-0.03-1.06,0.15-2.02,0.54-2.86c0.41-0.88,1.04-1.62,1.89-2.2 c0.4-0.27,0.84-0.49,1.33-0.68c-0.36-4.74-0.49-10.72-0.26-15.72c0.12-1.19,0.35-2.37,0.68-3.56c1.41-5.02,4.93-9.06,9.29-11.84 c2.4-1.53,5.04-2.69,7.79-3.47c1.74-0.49-1.49-6.08,0.32-6.26c8.73-0.9,22.86,7.07,28.95,13.67c3.05,3.3,4.97,7.68,5.38,13.48 l-0.34,14.27v0c1.52,0.46,2.5,1.43,2.9,3c0.44,1.73-0.04,4.18-1.51,7.51l0,0c-0.03,0.06-0.06,0.12-0.09,0.18l-6.27,10.32 c-2.3,3.79-4.64,7.59-7.69,10.6c0.27,0.39,0.55,0.8,0.82,1.2c1.24,1.82,2.49,3.64,4.1,5.27C80.15,79.6,80.2,79.66,80.24,79.72 L80.24,79.72z M67.99,46.39c-0.45-0.3-0.58-0.92-0.27-1.37c0.3-0.45,0.92-0.58,1.37-0.27c0.54,0.36,1.48,0.56,2.47,0.54 c0.94-0.02,1.88-0.22,2.56-0.65c0.46-0.29,1.07-0.16,1.37,0.3c0.29,0.46,0.16,1.07-0.3,1.37c-1,0.64-2.32,0.94-3.59,0.96 C70.23,47.28,68.87,46.97,67.99,46.39L67.99,46.39z M46.74,56.49c4.88-1.88,9.77-3.04,14.68-3.17c4.9-0.13,9.81,0.79,14.71,3.05 l6.1-13.5l1.82-8.07c-15.74,2.48-27.51-9.21-44.15-2.34l1.18,10.9L46.74,56.49L46.74,56.49z M83.96,44.33L78.01,57.5 c-0.01,0.03-0.03,0.06-0.04,0.08c0.05,0.12,0.08,0.26,0.08,0.39h0c0.04,3.11-0.41,5.88-1.25,8.28c1.19-1.72,2.31-3.55,3.42-5.37 l6.19-10.2c1.15-2.63,1.58-4.4,1.31-5.43c-0.16-0.62-0.84-0.92-1.99-0.98c-0.25-0.01-0.5-0.01-0.75-0.01 c-0.28,0.01-0.57,0.03-0.87,0.05C84.06,44.33,84.01,44.33,83.96,44.33L83.96,44.33z M46.01,65.57c-0.68-2.21-1.09-4.72-1.17-7.55 c0-0.11,0.01-0.22,0.04-0.32l-6.13-14.21c-1,0.09-1.77,0.33-2.32,0.7c-0.36,0.24-0.62,0.55-0.79,0.92 c-0.19,0.41-0.28,0.9-0.26,1.47c0.05,1.67,0.92,3.86,2.62,6.38l0.02,0.04l0,0l5.5,8.74C44.32,63.02,45.15,64.31,46.01,65.57 L46.01,65.57z M61.46,55.5c-4.79,0.12-9.6,1.3-14.42,3.2c0.44,8.41,4.11,13.58,8.71,15.8c0.48,0.23,0.97,0.43,1.47,0.6 c1.29,0.37,2.7,0.58,4.23,0.58c0.77,0,1.5-0.04,2.2-0.13c1.33-0.24,2.64-0.69,3.87-1.33c4.64-2.43,8.25-7.71,8.34-15.57 C71.06,56.32,66.26,55.38,61.46,55.5L61.46,55.5z M47.92,46.39c-0.45-0.3-0.58-0.92-0.27-1.37c0.3-0.45,0.92-0.58,1.37-0.27 c0.56,0.37,1.5,0.58,2.51,0.58c0.95-0.01,1.93-0.21,2.68-0.64c0.47-0.27,1.08-0.11,1.35,0.36c0.27,0.47,0.11,1.08-0.36,1.35 c-1.07,0.62-2.4,0.9-3.67,0.91C50.15,47.3,48.8,46.97,47.92,46.39L47.92,46.39z M47.52,41.96c-0.45,0.32-1.06,0.21-1.38-0.23 c-0.32-0.45-0.21-1.06,0.23-1.38c1.47-1.04,2.98-1.58,4.53-1.59c1.54-0.01,3.09,0.51,4.63,1.58c0.45,0.31,0.56,0.93,0.25,1.38 c-0.31,0.45-0.93,0.56-1.38,0.25c-1.2-0.83-2.37-1.23-3.5-1.23C49.79,40.75,48.66,41.16,47.52,41.96L47.52,41.96z M68.94,41.96 c-0.45,0.32-1.06,0.21-1.38-0.23c-0.32-0.45-0.21-1.06,0.23-1.38c1.47-1.04,2.98-1.58,4.53-1.59c1.54-0.01,3.09,0.51,4.63,1.58 c0.45,0.31,0.56,0.93,0.25,1.38c-0.31,0.45-0.93,0.56-1.38,0.25c-1.2-0.83-2.37-1.23-3.5-1.23C71.2,40.75,70.07,41.16,68.94,41.96 L68.94,41.96z", 1, "st0"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 64.001 64"], ["d", "M24.223,52.32c-1.061,0-2.078-0.422-2.829-1.172L4.309,34.062c-1.562-1.562-1.562-4.095,0-5.656 c1.563-1.562,4.096-1.562,5.657,0l14.257,14.257l29.811-29.812c1.562-1.562,4.095-1.562,5.657,0c1.562,1.562,1.562,4.095,0,5.656 l-32.64,32.641C26.301,51.898,25.284,52.32,24.223,52.32z"], ["d", "M53.602,47.97L37.658,32.027L53.6,16.085c1.562-1.562,1.562-4.095,0-5.656 c-1.562-1.562-4.095-1.562-5.657,0L32.001,26.37L16.059,10.427c-1.562-1.562-4.095-1.562-5.657,0c-1.562,1.561-1.562,4.095,0,5.656 l15.943,15.943L10.399,47.972c-1.562,1.562-1.562,4.095,0,5.656c0.781,0.781,1.805,1.172,2.829,1.172 c1.024,0,2.047-0.391,2.829-1.172l15.945-15.945l15.943,15.943c0.781,0.781,1.805,1.172,2.829,1.172 c1.024,0,2.047-0.391,2.829-1.172C55.164,52.065,55.164,49.531,53.602,47.97z"], ["id", "debug"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AppComponent_div_7_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AppComponent_div_8_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AppComponent_webcam_10_Template, 1, 4, "webcam", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AppComponent_div_12_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AppComponent_div_13_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AppComponent_div_14_Template, 14, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AppComponent_div_15_Template, 5, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AppComponent_div_16_Template, 5, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AppComponent_div_17_Template, 1, 0, "div", 13);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@background", ctx.detectionState);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.detectionState == ctx.detectionStateEnum.noConnection);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.detectionState != ctx.detectionStateEnum.cameraDeactivated);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.detectionState != ctx.detectionStateEnum.cameraDeactivated);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.faces);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.detectionState == ctx.detectionStateEnum.cameraDeactivated);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.detectionState != ctx.detectionStateEnum.hasMask && ctx.detectionState != ctx.detectionStateEnum.noMask);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.detectionState == ctx.detectionStateEnum.hasMask);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.detectionState == ctx.detectionStateEnum.noMask);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.debug);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_webcam__WEBPACK_IMPORTED_MODULE_6__["WebcamComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#logos[_ngcontent-%COMP%] {\n  background-color: #e20074;\n  display: flex;\n  width: 100vw;\n  height: 5vh;\n  align-items: center;\n  justify-content: space-between;\n  padding: 2vh 0;\n  box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.15);\n  z-index: 1;\n}\n\n#logos[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  height: 5vh;\n  align-items: center;\n}\n\n#logos[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 4vh;\n  width: auto;\n  margin: 0 20px;\n}\n\n#logos[_ngcontent-%COMP%]   #claim[_ngcontent-%COMP%] {\n  height: 2vh;\n}\n\n#main-content[_ngcontent-%COMP%] {\n  height: 95vh;\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  flex-flow: column;\n}\n\n#main-content[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%] {\n  color: #fff;\n  line-height: 4vh;\n  font-size: 4vh;\n  margin: 4vh;\n}\n\n#main-content[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  margin-top: 2vh;\n  color: #fff;\n  line-height: 3vh;\n  font-size: 3vh;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  font-weight: 700;\n}\n\n#main-content[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 3vw;\n  fill: #fff;\n}\n\n#debug[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0px;\n}\n\n.box-container[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 0;\n  width: 0;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.box-container[_ngcontent-%COMP%]   .face-box[_ngcontent-%COMP%] {\n  border: red 1px solid;\n  position: relative;\n}\n\n.overlay-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n#noConnection[_ngcontent-%COMP%] {\n  position: fixed;\n  color: red;\n  background: white;\n  padding: 3px;\n  top: 50%;\n  z-index: 10;\n  font-size: 3vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSx5QkNQUTtFRFFSLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsMkNBQUE7RUFDQSxVQUFBO0FBREY7O0FBRUU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQUo7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFBSjs7QUFHRTtFQUNFLFdBQUE7QUFESjs7QUFLQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFGRjs7QUFJRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBRko7O0FBS0U7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFLSTtFQUNFLFVBQUE7RUFDQSxVQUFBO0FBSE47O0FBUUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQUxGOztBQVFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQUxGOztBQU9FO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQUxKOztBQVNBO0VBQ0Usa0JBQUE7QUFORjs7QUFTQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBTkYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vY29sb3JzLnNjc3NcIjtcblxuOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNsb2dvcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWdlbnRhO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogNXZoO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDJ2aCAwO1xuICBib3gtc2hhZG93OiAwIDJweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICB6LWluZGV4OiAxO1xuICBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA1dmg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBpbWcge1xuICAgIGhlaWdodDogNHZoO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbjogMCAyMHB4O1xuICB9XG5cbiAgI2NsYWltIHtcbiAgICBoZWlnaHQ6IDJ2aDtcbiAgfVxufVxuXG4jbWFpbi1jb250ZW50IHtcbiAgaGVpZ2h0OiA5NXZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuXG4gICN0aXRsZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbGluZS1oZWlnaHQ6IDR2aDtcbiAgICBmb250LXNpemU6IDR2aDtcbiAgICBtYXJnaW46IDR2aDtcbiAgfVxuXG4gIC5tZXNzYWdlIHtcbiAgICBtYXJnaW4tdG9wOiAydmg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbGluZS1oZWlnaHQ6IDN2aDtcbiAgICBmb250LXNpemU6IDN2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcblxuICAgIHN2ZyB7XG4gICAgICB3aWR0aDogM3Z3O1xuICAgICAgZmlsbDogI2ZmZjtcbiAgICB9XG4gIH1cbn1cblxuI2RlYnVnIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDBweDtcbn1cblxuLmJveC1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcblxuICAuZmFjZS1ib3gge1xuICAgIGJvcmRlcjogcmVkIDFweCBzb2xpZDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbn1cblxuLm92ZXJsYXktY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jbm9Db25uZWN0aW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBjb2xvcjogcmVkO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogM3B4O1xuICB0b3A6IDUwJTtcbiAgei1pbmRleDogMTA7XG4gIGZvbnQtc2l6ZTogM3ZoO1xufVxuIiwiJHJlZDogI2Q5MDAwMDtcbiRncmVlbjogIzQ2YTgwMDtcbiRibHVlOiAjMDA5ZGUwO1xuJG1hZ2VudGE6ICNlMjAwNzQ7XG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('openClose', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
                ]),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('background', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hasMask', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    'background-color': 'var(--green)',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('noMask', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    'background-color': 'var(--red)',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('neutral', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    'background-color': 'var(--blue)',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('noConnection', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    'background-color': 'var(--blue)',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('hasMask => noMask', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            'background-position': '0 0',
                            'background-size': '100% 300%',
                            'background-image': 'linear-gradient(-20deg, var(--red) 50%, var(--green) 50%)',
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            'background-size': '100% 300%',
                            'background-image': 'linear-gradient(-20deg, var(--red) 50%, var(--green) 50%)',
                            'background-position': '0 100%',
                        }),
                    ])),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('noMask => hasMask', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            'background-position': '0 0',
                            'background-size': '100% 300%',
                            'background-image': 'linear-gradient(-20deg, var(--green) 50%, var(--red) 50%)',
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            'background-size': '100% 300%',
                            'background-image': 'linear-gradient(-20deg, var(--green) 50%, var(--red) 50%)',
                            'background-position': '0 100%',
                        }),
                    ])),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('noMask => neutral', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            'background-position': '0 0',
                            'background-size': '100% 300%',
                            'background-image': 'linear-gradient(-20deg, var(--blue) 50%, var(--red) 50%)',
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            'background-size': '100% 300%',
                            'background-image': 'linear-gradient(-20deg, var(--blue) 50%, var(--red) 50%)',
                            'background-position': '0 100%',
                        }),
                    ])),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('hasMask => neutral', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            'background-position': '0 0',
                            'background-size': '100% 300%',
                            'background-image': 'linear-gradient(-20deg, var(--blue) 50%, var(--green) 50%)',
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            'background-size': '100% 300%',
                            'background-image': 'linear-gradient(-20deg, var(--blue) 50%, var(--green) 50%)',
                            'background-position': '0 100%',
                        }),
                    ])),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('neutral => hasMask', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            'background-position': '0 0',
                            'background-size': '100% 300%',
                            'background-image': 'linear-gradient(-20deg, var(--green) 50%, var(--blue) 50%)',
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            'background-size': '100% 300%',
                            'background-image': 'linear-gradient(-20deg, var(--green) 50%, var(--blue) 50%)',
                            'background-position': '0 100%',
                        }),
                    ])),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('neutral => noMask', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            'background-position': '0 0',
                            'background-size': '100% 300%',
                            'background-image': 'linear-gradient(-20deg, var(--red) 50%, var(--blue) 50%)',
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            'background-size': '100% 300%',
                            'background-image': 'linear-gradient(-20deg, var(--red) 50%, var(--blue) 50%)',
                            'background-position': '0 100%',
                        }),
                    ])),
                ]),
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('openClose', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
                        ]),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('background', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hasMask', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            'background-color': 'var(--green)',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('noMask', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            'background-color': 'var(--red)',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('neutral', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            'background-color': 'var(--blue)',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('noConnection', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            'background-color': 'var(--blue)',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('hasMask => noMask', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                    'background-position': '0 0',
                                    'background-size': '100% 300%',
                                    'background-image': 'linear-gradient(-20deg, var(--red) 50%, var(--green) 50%)',
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                    'background-size': '100% 300%',
                                    'background-image': 'linear-gradient(-20deg, var(--red) 50%, var(--green) 50%)',
                                    'background-position': '0 100%',
                                }),
                            ])),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('noMask => hasMask', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                    'background-position': '0 0',
                                    'background-size': '100% 300%',
                                    'background-image': 'linear-gradient(-20deg, var(--green) 50%, var(--red) 50%)',
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                    'background-size': '100% 300%',
                                    'background-image': 'linear-gradient(-20deg, var(--green) 50%, var(--red) 50%)',
                                    'background-position': '0 100%',
                                }),
                            ])),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('noMask => neutral', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                    'background-position': '0 0',
                                    'background-size': '100% 300%',
                                    'background-image': 'linear-gradient(-20deg, var(--blue) 50%, var(--red) 50%)',
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                    'background-size': '100% 300%',
                                    'background-image': 'linear-gradient(-20deg, var(--blue) 50%, var(--red) 50%)',
                                    'background-position': '0 100%',
                                }),
                            ])),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('hasMask => neutral', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                    'background-position': '0 0',
                                    'background-size': '100% 300%',
                                    'background-image': 'linear-gradient(-20deg, var(--blue) 50%, var(--green) 50%)',
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                    'background-size': '100% 300%',
                                    'background-image': 'linear-gradient(-20deg, var(--blue) 50%, var(--green) 50%)',
                                    'background-position': '0 100%',
                                }),
                            ])),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('neutral => hasMask', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                    'background-position': '0 0',
                                    'background-size': '100% 300%',
                                    'background-image': 'linear-gradient(-20deg, var(--green) 50%, var(--blue) 50%)',
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                    'background-size': '100% 300%',
                                    'background-image': 'linear-gradient(-20deg, var(--green) 50%, var(--blue) 50%)',
                                    'background-position': '0 100%',
                                }),
                            ])),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('neutral => noMask', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                    'background-position': '0 0',
                                    'background-size': '100% 300%',
                                    'background-image': 'linear-gradient(-20deg, var(--red) 50%, var(--blue) 50%)',
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                    'background-size': '100% 300%',
                                    'background-image': 'linear-gradient(-20deg, var(--red) 50%, var(--blue) 50%)',
                                    'background-position': '0 100%',
                                }),
                            ])),
                        ]),
                    ]),
                ],
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, { onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();
var DetectionState;
(function (DetectionState) {
    DetectionState[DetectionState["cameraDeactivated"] = 0] = "cameraDeactivated";
    DetectionState["noConnection"] = "noConnection";
    DetectionState["neutral"] = "neutral";
    DetectionState["hasMask"] = "hasMask";
    DetectionState["noMask"] = "noMask";
})(DetectionState || (DetectionState = {}));


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/__ivy_ngcc__/fesm2015/ngx-webcam.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            ngx_webcam__WEBPACK_IMPORTED_MODULE_4__["WebcamModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        ngx_webcam__WEBPACK_IMPORTED_MODULE_4__["WebcamModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    ngx_webcam__WEBPACK_IMPORTED_MODULE_4__["WebcamModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            }]
    }], null, null); })();


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
    /**
     * Base Url without trailing slash
     */
    baseUrl: 'http://localhost:4200',
    production: 'true'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/deepva-wear-a-mask/deepva-wear-a-mask/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map