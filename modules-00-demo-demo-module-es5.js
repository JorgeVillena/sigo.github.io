(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-00-demo-demo-module"], {
        /***/ "./src/app/modules/00-demo/demo-routing.module.ts": 
        /*!********************************************************!*\
          !*** ./src/app/modules/00-demo/demo-routing.module.ts ***!
          \********************************************************/
        /*! exports provided: DemoRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoRoutingModule", function () { return DemoRoutingModule; });
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
                    path: 'tablas', loadChildren: './pages/tablas/tablas.module#TablasModule'
                },
                {
                    path: 'botones', loadChildren: './pages/botones/botones.module#BotonesModule'
                },
                {
                    path: 'crud', loadChildren: './pages/crud/crud.module#CrudModule'
                },
                {
                    path: 'tree-picker', loadChildren: './pages/tree-picker/tree-picker.module#TreePickerModule'
                },
                {
                    path: 'forms', loadChildren: './pages/forms/forms.module#FormsModule'
                }
            ];
            var DemoRoutingModule = /** @class */ (function () {
                function DemoRoutingModule() {
                }
                return DemoRoutingModule;
            }());
            DemoRoutingModule = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
                })
            ], DemoRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/00-demo/demo.module.ts": 
        /*!************************************************!*\
          !*** ./src/app/modules/00-demo/demo.module.ts ***!
          \************************************************/
        /*! exports provided: DemoModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoModule", function () { return DemoModule; });
            /* harmony import */ var _services_json_placeholder_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/json-placeholder.service */ "./src/app/modules/00-demo/services/json-placeholder.service.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _demo_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demo-routing.module */ "./src/app/modules/00-demo/demo-routing.module.ts");
            /* harmony import */ var _services_person_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/person.service */ "./src/app/modules/00-demo/services/person.service.ts");
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
            var DemoModule = /** @class */ (function () {
                function DemoModule() {
                }
                return DemoModule;
            }());
            DemoModule = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [],
                    imports: [
                        _demo_routing_module__WEBPACK_IMPORTED_MODULE_2__["DemoRoutingModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
                    ],
                    providers: [
                        _services_person_service__WEBPACK_IMPORTED_MODULE_3__["PersonService"],
                        _services_json_placeholder_service__WEBPACK_IMPORTED_MODULE_0__["JsonPlaceholderService"]
                    ]
                })
            ], DemoModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=modules-00-demo-demo-module-es2015.js.map
//# sourceMappingURL=modules-00-demo-demo-module-es5.js.map
//# sourceMappingURL=modules-00-demo-demo-module-es5.js.map