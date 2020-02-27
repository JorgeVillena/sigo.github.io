(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-autorizaciones-autorizaciones-module"], {
        /***/ "./src/app/modules/autorizaciones/Autorizaciones-routing.module.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/modules/autorizaciones/Autorizaciones-routing.module.ts ***!
          \*************************************************************************/
        /*! exports provided: AutorizacionesRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutorizacionesRoutingModule", function () { return AutorizacionesRoutingModule; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
                return (mod && mod.__esModule) ? mod : { "default": mod };
            };
            var routes = [
                {
                    path: 'autorizacion-aprob-online', loadChildren: './pages/autorizacion-aprob-online/crud.module#CrudModule'
                }
            ];
            var AutorizacionesRoutingModule = /** @class */ (function () {
                function AutorizacionesRoutingModule() {
                }
                return AutorizacionesRoutingModule;
            }());
            AutorizacionesRoutingModule = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
                })
            ], AutorizacionesRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/autorizaciones/autorizaciones.module.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/modules/autorizaciones/autorizaciones.module.ts ***!
          \*****************************************************************/
        /*! exports provided: AutorizacionesModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutorizacionesModule", function () { return AutorizacionesModule; });
            /* harmony import */ var _services_json_placeholder_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/json-placeholder.service */ "./src/app/modules/autorizaciones/services/json-placeholder.service.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _Autorizaciones_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Autorizaciones-routing.module */ "./src/app/modules/autorizaciones/Autorizaciones-routing.module.ts");
            /* harmony import */ var _services_autorizacion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/autorizacion.service */ "./src/app/modules/autorizaciones/services/autorizacion.service.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
                return (mod && mod.__esModule) ? mod : { "default": mod };
            };
            var AutorizacionesModule = /** @class */ (function () {
                function AutorizacionesModule() {
                }
                return AutorizacionesModule;
            }());
            AutorizacionesModule = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [],
                    imports: [
                        _Autorizaciones_routing_module__WEBPACK_IMPORTED_MODULE_2__["AutorizacionesRoutingModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    ],
                    providers: [
                        _services_autorizacion_service__WEBPACK_IMPORTED_MODULE_3__["AutorizacionService"],
                        _services_json_placeholder_service__WEBPACK_IMPORTED_MODULE_0__["JsonPlaceholderService"]
                    ]
                })
            ], AutorizacionesModule);
            /***/ 
        }),
        /***/ "./src/app/modules/autorizaciones/services/json-placeholder.service.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/app/modules/autorizaciones/services/json-placeholder.service.ts ***!
          \*****************************************************************************/
        /*! exports provided: JsonPlaceholderService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonPlaceholderService", function () { return JsonPlaceholderService; });
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(k, v);
            };
            var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
                return (mod && mod.__esModule) ? mod : { "default": mod };
            };
            var JsonPlaceholderService = /** @class */ (function () {
                function JsonPlaceholderService(http) {
                    var _this = this;
                    this.http = http;
                    this.url = "https://jsonplaceholder.typicode.com";
                    this.fetchUsers = function () {
                        return _this.http.get(_this.url + "/users");
                    };
                    this.fetchPosts = function (userId) {
                        return _this.http.get(_this.url + "/posts", { params: { userId: userId } });
                    };
                    this.fetchComments = function (postId) {
                        return _this.http.get(_this.url + "/comments", { params: { postId: postId } });
                    };
                }
                return JsonPlaceholderService;
            }());
            JsonPlaceholderService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
            ]; };
            JsonPlaceholderService = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
                __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
            ], JsonPlaceholderService);
            /***/ 
        })
    }]);
//# sourceMappingURL=modules-autorizaciones-autorizaciones-module-es2015.js.map
//# sourceMappingURL=modules-autorizaciones-autorizaciones-module-es5.js.map
//# sourceMappingURL=modules-autorizaciones-autorizaciones-module-es5.js.map