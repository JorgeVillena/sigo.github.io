var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-autorizacion-aprob-online-crud-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/components/forms/form-buscar-aut-online/form-buscar-aut-online.component.html": 
        /*!********************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/components/forms/form-buscar-aut-online/form-buscar-aut-online.component.html ***!
          \********************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<siu-data-grid-form-filter\r\n  (on-submit)=\"HandleSubmit()\"\r\n  (on-new)=\"HandleClickNuevo()\"\r\n  (on-reset)=\"HandleLimpiar()\"\r\n  [formGroup]=\"form\"\r\n>\r\n\r\n  <siu-form-field\r\n    label=\"Nombre\"\r\n    controlName=\"name\"\r\n    [formGroupParent]=\"form\"\r\n  ></siu-form-field>\r\n\r\n  <siu-form-field\r\n    label=\"Apellidos\"\r\n    [formGroupParent]=\"form\"\r\n    controlName=\"surname\"\r\n  ></siu-form-field>\r\n\r\n  <siu-form-field\r\n    label=\"Email\"\r\n    [formGroupParent]=\"form\"\r\n    controlName=\"email\"\r\n  ></siu-form-field>\r\n\r\n  <siu-form-field\r\n    variant=\"datepicker\"\r\n    label=\"Fecha de Nacimiento\"\r\n    [formGroupParent]=\"form\"\r\n    controlName=\"birthday\"\r\n  ></siu-form-field>\r\n\r\n</siu-data-grid-form-filter>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/components/forms/form-persona/form-persona.component.html": 
        /*!************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/components/forms/form-persona/form-persona.component.html ***!
          \************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"state$ | async as state\">\r\n\r\n  <siu-modal-form-container\r\n    [title]=\"state.title\"\r\n    [loading]=\"state.isLoading\"\r\n    [formGroup]=\"form\"\r\n    (on-submit)=\"handleSubmit()\"\r\n    (on-dismiss)=\"handleClose()\"\r\n    [msgErrors]=\"state.error\"\r\n    [formType]=\"state.type\"\r\n  >\r\n    <div class=\"grid\">\r\n      <siu-form-field\r\n        label=\"Nombre\"\r\n        controlName=\"name\"\r\n        [disabled]=\"state.isLoading\"\r\n        [formGroupParent]=\"form\"\r\n        [msgValidations]=\"msgValidations.name\"\r\n        [readonly]=\"state.type==formType.CONSULTAR\"\r\n      ></siu-form-field>\r\n\r\n      <siu-form-field\r\n        variant=\"multiline\"\r\n        label=\"Apellidos\"\r\n        controlName=\"surname\"\r\n        [disabled]=\"state.isLoading\"\r\n        [formGroupParent]=\"form\"\r\n        [msgValidations]=\"msgValidations.surname\"\r\n        [readonly]=\"state.type==formType.CONSULTAR\"\r\n      ></siu-form-field>\r\n\r\n      <siu-form-field\r\n        label=\"Email\"\r\n        controlName=\"email\"\r\n        [disabled]=\"state.isLoading\"\r\n        [formGroupParent]=\"form\"\r\n        [msgValidations]=\"msgValidations.email\"\r\n        [readonly]=\"state.type==formType.CONSULTAR\"\r\n      ></siu-form-field>\r\n\r\n      <siu-form-field\r\n        label=\"Telefono\"\r\n        controlName=\"phone\"\r\n        [disabled]=\"state.isLoading\"\r\n        [formGroupParent]=\"form\"\r\n        [msgValidations]=\"msgValidations.phone\"\r\n        [readonly]=\"state.type==formType.CONSULTAR\"\r\n      ></siu-form-field>\r\n\r\n      <siu-form-field\r\n        label=\"Dirección\"\r\n        controlName=\"address\"\r\n        [disabled]=\"state.isLoading\"\r\n        [formGroupParent]=\"form\"\r\n        [msgValidations]=\"msgValidations.address\"\r\n        [readonly]=\"state.type==formType.CONSULTAR\"\r\n      ></siu-form-field>\r\n\r\n      <siu-form-field\r\n        variant=\"datepicker\"\r\n        label=\"Fecha de Nacimiento\"\r\n        controlName=\"birthday\"\r\n        [disabled]=\"state.isLoading\"\r\n        [formGroupParent]=\"form\"\r\n        [msgValidations]=\"msgValidations.address\"\r\n        [readonly]=\"state.type==formType.CONSULTAR\"\r\n      ></siu-form-field>\r\n\r\n    </div>\r\n  </siu-modal-form-container>\r\n\r\n</ng-container>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/container/crud.component.html": 
        /*!********************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/container/crud.component.html ***!
          \********************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"state$ | async as state\">\r\n\r\n  <siu-page-title text=\"Gestión de Autorizaciones con Aprobación en Linea\"></siu-page-title>\r\n\r\n  <app-form-buscar-aut-online (on-click-nuevo)=\"handleClickNuevo()\"></app-form-buscar-aut-online>\r\n\r\n  <siu-data-grid\r\n    [loading]=\"state.gridPersonas.isLoading\"\r\n    [source]=\"state.gridPersonas.source\"\r\n    [definition]=\"state.gridPersonas.definition\"\r\n    (on-load-data)=\"handleLoadData($event)\"\r\n    (on-click-button)=\"handleClickButton($event)\"\r\n  >\r\n  </siu-data-grid>\r\n</ng-container>\r\n");
            /***/ 
        }),
        /***/ "./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/components/forms/form-buscar-aut-online/form-buscar-aut-online.component.scss": 
        /*!******************************************************************************************************************************************************!*\
          !*** ./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/components/forms/form-buscar-aut-online/form-buscar-aut-online.component.scss ***!
          \******************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0b3JpemFjaW9uZXMvcGFnZXMvYXV0b3JpemFjaW9uLWFwcm9iLW9ubGluZS9jb21wb25lbnRzL2Zvcm1zL2Zvcm0tYnVzY2FyLWF1dC1vbmxpbmUvZm9ybS1idXNjYXItYXV0LW9ubGluZS5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/components/forms/form-buscar-aut-online/form-buscar-aut-online.component.ts": 
        /*!****************************************************************************************************************************************************!*\
          !*** ./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/components/forms/form-buscar-aut-online/form-buscar-aut-online.component.ts ***!
          \****************************************************************************************************************************************************/
        /*! exports provided: FormBuscarAutorizacionOnlineComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBuscarAutorizacionOnlineComponent", function () { return FormBuscarAutorizacionOnlineComponent; });
            /* harmony import */ var _store_crud_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../store/crud.store */ "./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/store/crud.store.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
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
            var FormBuscarAutorizacionOnlineComponent = /** @class */ (function () {
                function FormBuscarAutorizacionOnlineComponent(formBuilder, store) {
                    var _this = this;
                    this.formBuilder = formBuilder;
                    this.store = store;
                    //readonly state$ = this.store.
                    this.onClickNuevoEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.buildForm = function () {
                        _this.form = _this.formBuilder.group({
                            name: [null],
                            surname: [null],
                            email: [null],
                            birthday: [null]
                        });
                    };
                    this.HandleSubmit = function () {
                        _this.store.actionGridPersonas.setValueFormBuscar(_this.form.value);
                        _this.store.actionGridPersonas.asyncFetchPersons();
                    };
                    this.HandleLimpiar = function () {
                        _this.form.reset();
                        _this.store.actionGridPersonas.resetFormBuscar();
                        _this.store.actionGridPersonas.asyncFetchPersons();
                    };
                    this.HandleClickNuevo = function () {
                        _this.onClickNuevoEvent.emit();
                    };
                }
                FormBuscarAutorizacionOnlineComponent.prototype.ngOnInit = function () {
                    this.buildForm();
                };
                return FormBuscarAutorizacionOnlineComponent;
            }());
            FormBuscarAutorizacionOnlineComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
                { type: _store_crud_store__WEBPACK_IMPORTED_MODULE_0__["CrudStore"] }
            ]; };
            __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])('on-click-nuevo'),
                __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
            ], FormBuscarAutorizacionOnlineComponent.prototype, "onClickNuevoEvent", void 0);
            FormBuscarAutorizacionOnlineComponent = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'app-form-buscar-aut-online',
                    template: __importDefault(__webpack_require__(/*! raw-loader!./form-buscar-aut-online.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/components/forms/form-buscar-aut-online/form-buscar-aut-online.component.html")).default,
                    styles: [__importDefault(__webpack_require__(/*! ./form-buscar-aut-online.component.scss */ "./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/components/forms/form-buscar-aut-online/form-buscar-aut-online.component.scss")).default]
                }),
                __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _store_crud_store__WEBPACK_IMPORTED_MODULE_0__["CrudStore"]])
            ], FormBuscarAutorizacionOnlineComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/components/forms/form-persona/form-persona.component.sass": 
        /*!**********************************************************************************************************************************!*\
          !*** ./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/components/forms/form-persona/form-persona.component.sass ***!
          \**********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0b3JpemFjaW9uZXMvcGFnZXMvYXV0b3JpemFjaW9uLWFwcm9iLW9ubGluZS9jb21wb25lbnRzL2Zvcm1zL2Zvcm0tcGVyc29uYS9mb3JtLXBlcnNvbmEuY29tcG9uZW50LnNhc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/components/forms/form-persona/form-persona.component.ts": 
        /*!********************************************************************************************************************************!*\
          !*** ./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/components/forms/form-persona/form-persona.component.ts ***!
          \********************************************************************************************************************************/
        /*! exports provided: FormPersonaComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPersonaComponent", function () { return FormPersonaComponent; });
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _siu_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @siu/shared */ "./src/app/shared/src/public-api.ts");
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
            var FormPersonaComponent = /** @class */ (function () {
                function FormPersonaComponent(dialogRef, formBuilder, toast, alert) {
                    var _this = this;
                    this.dialogRef = dialogRef;
                    this.formBuilder = formBuilder;
                    this.toast = toast;
                    this.alert = alert;
                    this.formType = _siu_shared__WEBPACK_IMPORTED_MODULE_4__["FormType"];
                    this.subscribeToState = function () {
                        var subs1 = _this.crudStore.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x.modalPersona.persona; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])()).subscribe(function (x) {
                            _this.form.patchValue(x);
                        });
                        _this.subscriptions = [subs1];
                    };
                    this.buildForm = function () {
                        var persona = _this.crudStore.state.modalPersona.persona;
                        _this.form = _this.formBuilder.group({
                            name: [persona.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
                            surname: [persona.surname, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
                            //gender: [ persona.gender, [ Validators.required ] ],
                            email: [persona.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
                            phone: [persona.phone, []],
                            address: [persona.address, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
                            birthday: [persona.birthday, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
                        });
                    };
                    this.buildValidations = function () {
                        _this.msgValidations = {
                            name: [
                                { name: 'required', message: 'El campo es requerido' }
                            ],
                            surname: [
                                { name: 'required', message: 'Apellidos es requerido' }
                            ],
                            gender: [
                                { name: 'required', message: 'Genero es requerido' }
                            ],
                            email: [
                                { name: 'required', message: 'El email es requerido' },
                                { name: 'email', message: 'El email no es válido' }
                            ],
                            address: [
                                { name: 'required', message: 'Dirección es requerido' }
                            ],
                            birthday: [
                                { name: 'required', message: 'Fecha de nacimiento es requerido' }
                            ]
                        };
                    };
                    this.handleSubmit = function () {
                        Object(_siu_shared__WEBPACK_IMPORTED_MODULE_4__["ValidateFormFields"])(_this.form);
                        if (!_this.form.valid)
                            return false;
                        _this.crudStore.actionModalPersonas.asyncSavePerson(_this.form.value).then(function () {
                            _this.crudStore.actionGridPersonas.asyncFetchPersons();
                            _this.toast.success('Persona guardada!');
                            _this.dialogRef.close();
                        });
                    };
                    this.handleClose = function () {
                        if (_this.crudStore.state.modalPersona.type != _siu_shared__WEBPACK_IMPORTED_MODULE_4__["FormType"].CONSULTAR) {
                            _this.alert.open('Se va a cerrar el formulario ¿Continuar?', null, { confirm: true }).then(function (confirm) {
                                if (confirm) {
                                    _this.dialogRef.close();
                                }
                            });
                        }
                        else {
                            _this.dialogRef.close();
                        }
                    };
                }
                FormPersonaComponent.prototype.ngOnInit = function () {
                    this.state$ = this.crudStore.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x.modalPersona; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
                    this.buildForm();
                    this.buildValidations();
                    var type = this.crudStore.state.modalPersona.type;
                    if (type == _siu_shared__WEBPACK_IMPORTED_MODULE_4__["FormType"].EDITAR || type == _siu_shared__WEBPACK_IMPORTED_MODULE_4__["FormType"].CONSULTAR) {
                        this.crudStore.actionModalPersonas.asyncGetPerson(this.crudStore.state.modalPersona.idPersona);
                    }
                    this.subscribeToState();
                };
                FormPersonaComponent.prototype.ngOnDestroy = function () {
                    //Called once, before the instance is destroyed.
                    //Add 'implements OnDestroy' to the class.
                    this.subscriptions.forEach(function (x) {
                        x.unsubscribe();
                    });
                };
                return FormPersonaComponent;
            }());
            FormPersonaComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] },
                { type: _siu_shared__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
                { type: _siu_shared__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }
            ]; };
            FormPersonaComponent = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-form-persona',
                    template: __importDefault(__webpack_require__(/*! raw-loader!./form-persona.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/components/forms/form-persona/form-persona.component.html")).default,
                    styles: [__importDefault(__webpack_require__(/*! ./form-persona.component.sass */ "./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/components/forms/form-persona/form-persona.component.sass")).default]
                }),
                __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"], _siu_shared__WEBPACK_IMPORTED_MODULE_4__["ToastService"], _siu_shared__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
            ], FormPersonaComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/container/crud.component.sass": 
        /*!******************************************************************************************************!*\
          !*** ./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/container/crud.component.sass ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0b3JpemFjaW9uZXMvcGFnZXMvYXV0b3JpemFjaW9uLWFwcm9iLW9ubGluZS9jb250YWluZXIvY3J1ZC5jb21wb25lbnQuc2FzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/container/crud.component.ts": 
        /*!****************************************************************************************************!*\
          !*** ./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/container/crud.component.ts ***!
          \****************************************************************************************************/
        /*! exports provided: CrudComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudComponent", function () { return CrudComponent; });
            /* harmony import */ var _components_forms_form_persona_form_persona_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/forms/form-persona/form-persona.component */ "./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/components/forms/form-persona/form-persona.component.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _store_crud_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/crud.store */ "./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/store/crud.store.ts");
            /* harmony import */ var _siu_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @siu/shared */ "./src/app/shared/src/public-api.ts");
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
            var CrudComponent = /** @class */ (function () {
                function CrudComponent(crudStore, dialog, alert) {
                    var _this = this;
                    this.crudStore = crudStore;
                    this.dialog = dialog;
                    this.alert = alert;
                    this.state$ = this.crudStore.state$;
                    this.openModalUpdate = function (id) {
                        _this.crudStore.actionModalPersonas.setModalEditar(id);
                        var dialogRef = _this.dialog.openSM(_components_forms_form_persona_form_persona_component__WEBPACK_IMPORTED_MODULE_0__["FormPersonaComponent"]);
                        dialogRef.componentInstance.crudStore = _this.crudStore;
                        dialogRef.afterClosed().subscribe(function () {
                            _this.crudStore.actionModalPersonas.resetModalPersona();
                        });
                    };
                    this.handleClickNuevo = function () {
                        var dialogRef = _this.dialog.openSM(_components_forms_form_persona_form_persona_component__WEBPACK_IMPORTED_MODULE_0__["FormPersonaComponent"]);
                        dialogRef.componentInstance.crudStore = _this.crudStore;
                        dialogRef.afterClosed().subscribe(function () {
                            _this.crudStore.actionModalPersonas.resetModalPersona();
                        });
                    };
                    this.openModalConsultar = function (id) {
                        _this.crudStore.actionModalPersonas.setModalConsultar(id);
                        var dialogRef = _this.dialog.openSM(_components_forms_form_persona_form_persona_component__WEBPACK_IMPORTED_MODULE_0__["FormPersonaComponent"], { disableClose: false });
                        dialogRef.componentInstance.crudStore = _this.crudStore;
                        dialogRef.afterClosed().subscribe(function () {
                            _this.crudStore.actionModalPersonas.resetModalPersona();
                        });
                    };
                    this.handleLoadData = function (e) {
                        console.log(e);
                        _this.crudStore.actionGridPersonas.asyncFetchPersons({
                            page: e.page,
                            pageSize: e.pageSize,
                            orderBy: e.orderBy,
                            orderDir: e.orderDir
                        });
                    };
                    this.deletePerson = function (id) {
                        _this.alert.open('Va eliminar el registro seleccionado ¿Continuar?', null, { confirm: true }).then(function (confirm) {
                            if (confirm) {
                                _this.crudStore.actionGridPersonas.asyncDeletePerson(id).then(function () {
                                    _this.alert.open('Registro eliminado', null, { icon: 'success' });
                                    _this.crudStore.actionGridPersonas.asyncFetchPersons();
                                });
                            }
                        });
                    };
                    this.handleClickButton = function (e) {
                        switch (e.action) {
                            case 'CONSULTAR':
                                _this.openModalConsultar(e.item._id);
                                break;
                            case 'EDITAR':
                                _this.openModalUpdate(e.item._id);
                                break;
                            case 'ELIMINAR':
                                _this.deletePerson(e.item._id);
                                break;
                        }
                    };
                }
                CrudComponent.prototype.ngOnInit = function () {
                    this.crudStore.actionGridPersonas.asyncFetchPersons();
                };
                return CrudComponent;
            }());
            CrudComponent.ctorParameters = function () { return [
                { type: _store_crud_store__WEBPACK_IMPORTED_MODULE_2__["CrudStore"] },
                { type: _siu_shared__WEBPACK_IMPORTED_MODULE_3__["DialogService"] },
                { type: _siu_shared__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }
            ]; };
            CrudComponent = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-crud',
                    template: __importDefault(__webpack_require__(/*! raw-loader!./crud.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/container/crud.component.html")).default,
                    providers: [
                        _store_crud_store__WEBPACK_IMPORTED_MODULE_2__["CrudStore"]
                    ],
                    styles: [__importDefault(__webpack_require__(/*! ./crud.component.sass */ "./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/container/crud.component.sass")).default]
                }),
                __metadata("design:paramtypes", [_store_crud_store__WEBPACK_IMPORTED_MODULE_2__["CrudStore"], _siu_shared__WEBPACK_IMPORTED_MODULE_3__["DialogService"], _siu_shared__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
            ], CrudComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/crud-routing.module.ts": 
        /*!***********************************************************************************************!*\
          !*** ./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/crud-routing.module.ts ***!
          \***********************************************************************************************/
        /*! exports provided: CrudRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudRoutingModule", function () { return CrudRoutingModule; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _container_crud_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container/crud.component */ "./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/container/crud.component.ts");
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
                    path: '', component: _container_crud_component__WEBPACK_IMPORTED_MODULE_2__["CrudComponent"]
                }
            ];
            var CrudRoutingModule = /** @class */ (function () {
                function CrudRoutingModule() {
                }
                return CrudRoutingModule;
            }());
            CrudRoutingModule = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
                })
            ], CrudRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/crud.module.ts": 
        /*!***************************************************************************************!*\
          !*** ./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/crud.module.ts ***!
          \***************************************************************************************/
        /*! exports provided: CrudModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudModule", function () { return CrudModule; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _crud_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crud-routing.module */ "./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/crud-routing.module.ts");
            /* harmony import */ var _container_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container/crud.component */ "./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/container/crud.component.ts");
            /* harmony import */ var _components_forms_form_persona_form_persona_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/forms/form-persona/form-persona.component */ "./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/components/forms/form-persona/form-persona.component.ts");
            /* harmony import */ var _components_forms_form_buscar_aut_online_form_buscar_aut_online_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/forms/form-buscar-aut-online/form-buscar-aut-online.component */ "./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/components/forms/form-buscar-aut-online/form-buscar-aut-online.component.ts");
            /* harmony import */ var _siu_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @siu/shared */ "./src/app/shared/src/public-api.ts");
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
            var CrudModule = /** @class */ (function () {
                function CrudModule() {
                }
                return CrudModule;
            }());
            CrudModule = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
                    declarations: [
                        _container_crud_component__WEBPACK_IMPORTED_MODULE_3__["CrudComponent"],
                        _components_forms_form_persona_form_persona_component__WEBPACK_IMPORTED_MODULE_4__["FormPersonaComponent"],
                        _components_forms_form_buscar_aut_online_form_buscar_aut_online_component__WEBPACK_IMPORTED_MODULE_5__["FormBuscarAutorizacionOnlineComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        _crud_routing_module__WEBPACK_IMPORTED_MODULE_2__["CrudRoutingModule"],
                        _siu_shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
                    ],
                    entryComponents: [
                        _components_forms_form_persona_form_persona_component__WEBPACK_IMPORTED_MODULE_4__["FormPersonaComponent"]
                    ]
                })
            ], CrudModule);
            /***/ 
        }),
        /***/ "./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/store/actions/grid-personas.action.ts": 
        /*!**************************************************************************************************************!*\
          !*** ./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/store/actions/grid-personas.action.ts ***!
          \**************************************************************************************************************/
        /*! exports provided: CrudGridPersonasActions */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudGridPersonasActions", function () { return CrudGridPersonasActions; });
            /* harmony import */ var _crud_store_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../crud.store.model */ "./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/store/crud.store.model.ts");
            /* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutability-helper */ "./node_modules/immutability-helper/index.js");
            /* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_1__);
            var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
                return (mod && mod.__esModule) ? mod : { "default": mod };
            };
            var CrudGridPersonasActions = /** @class */ (function () {
                function CrudGridPersonasActions(getState, setState, autorizacionService) {
                    var _this = this;
                    this.getState = getState;
                    this.setState = setState;
                    this.autorizacionService = autorizacionService;
                    this.fetchPersonsBegin = function () {
                        var state = _this.getState();
                        _this.setState(Object.assign({}, state, { isLoading: true, error: null }));
                    };
                    this.fetchPersonsSuccess = function (items, total, page, pageSize, orderBy, orderByDir) {
                        var state = _this.getState();
                        var new_state = immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(state, {
                            isLoading: { $set: false },
                            source: {
                                items: { $set: items },
                                total: { $set: total },
                                page: { $set: page },
                                pageSize: { $set: pageSize },
                                orderBy: { $set: orderBy },
                                orderDir: { $set: orderByDir }
                            },
                        });
                        _this.setState(new_state);
                    };
                    this.fetchPersonsError = function (error) {
                        var state = _this.getState();
                        var new_state = immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(state, {
                            isLoading: { $set: false },
                            error: { $set: error },
                            source: { items: { $set: [] } }
                        });
                        _this.setState(new_state);
                    };
                    this.setValueFormBuscar = function (value) {
                        var state = _this.getState();
                        _this.setState(Object.assign({}, state, { formBuscar: value }));
                    };
                    this.resetFormBuscar = function () {
                        var state = _this.getState();
                        _this.setState(Object.assign({}, state, { formBuscar: Object(_crud_store_model__WEBPACK_IMPORTED_MODULE_0__["buildNewFormBuscarPersonas"])() }));
                    };
                    this.deletePersonBegin = function () {
                        _this.setState(Object.assign({}, _this.getState(), { isLoading: true }));
                    };
                    this.deletePersonSuccess = function () {
                        _this.setState(Object.assign({}, _this.getState(), { isLoading: false }));
                    };
                    this.deletePersonError = function () {
                        _this.setState(Object.assign({}, _this.getState(), { isLoading: false }));
                    };
                    //====================================================
                    // ACCIONES ASINCRONAS
                    //====================================================
                    this.asyncFetchPersons = function (pageRequest, filters) {
                        if (pageRequest === void 0) { pageRequest = {
                            page: _this.getState().source.page,
                            pageSize: _this.getState().source.pageSize,
                            orderBy: _this.getState().source.orderBy,
                            orderDir: _this.getState().source.orderDir,
                        }; }
                        if (filters === void 0) { filters = _this.getState().formBuscar; }
                        _this.fetchPersonsBegin();
                        _this.autorizacionService.fetchPersons(pageRequest, filters).subscribe(function (x) {
                            _this.fetchPersonsSuccess(x.persons, x.total, pageRequest.page, pageRequest.pageSize, pageRequest.orderBy, pageRequest.orderDir);
                        }, function (error) {
                            _this.fetchPersonsError(error);
                        });
                    };
                    this.asyncDeletePerson = function (id) {
                        return new Promise(function (resolve, reject) {
                            _this.deletePersonBegin();
                            _this.autorizacionService.deletePerson(id).subscribe(function () {
                                _this.deletePersonSuccess();
                                resolve();
                            }, function (error) {
                                _this.deletePersonError();
                            });
                        });
                    };
                }
                return CrudGridPersonasActions;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/store/actions/modal-persona.action.ts": 
        /*!**************************************************************************************************************!*\
          !*** ./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/store/actions/modal-persona.action.ts ***!
          \**************************************************************************************************************/
        /*! exports provided: CrudModalPersonaActions */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudModalPersonaActions", function () { return CrudModalPersonaActions; });
            /* harmony import */ var _siu_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @siu/shared */ "./src/app/shared/src/public-api.ts");
            /* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutability-helper */ "./node_modules/immutability-helper/index.js");
            /* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _crud_store_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crud.store.model */ "./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/store/crud.store.model.ts");
            var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
                return (mod && mod.__esModule) ? mod : { "default": mod };
            };
            var CrudModalPersonaActions = /** @class */ (function () {
                function CrudModalPersonaActions(getState, setState, autorizacionService) {
                    var _this = this;
                    this.getState = getState;
                    this.setState = setState;
                    this.autorizacionService = autorizacionService;
                    this.getPersonStart = function () {
                        var state = _this.getState();
                        _this.setState(Object.assign({}, state, { isLoading: true, error: null }));
                    };
                    this.getPersonSuccess = function (value) {
                        var state = _this.getState();
                        var newState = immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(state, {
                            isLoading: { $set: false },
                            persona: { $set: value }
                        });
                        _this.setState(newState);
                    };
                    this.getPersonError = function (error) {
                        var state = _this.getState();
                        var newState = immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(state, {
                            isLoading: { $set: false },
                            error: { $set: error }
                        });
                        _this.setState(newState);
                    };
                    this.setValueFormPersona = function (newValue) {
                        var state = _this.getState();
                        var newState = immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(state, {
                            persona: { $set: newValue }
                        });
                        _this.setState(newState);
                    };
                    this.resetModalPersona = function () {
                        _this.setState(Object(_crud_store_model__WEBPACK_IMPORTED_MODULE_2__["buildNewModalPersona"])());
                    };
                    this.savePersonSuccess = function () {
                        var state = _this.getState();
                        _this.setState(Object.assign({}, state, { isLoading: false, error: null }));
                    };
                    this.savePersonError = function (error) {
                        var state = _this.getState();
                        _this.setState(Object.assign({}, state, { isLoading: false, error: error }));
                    };
                    this.setModalConsultar = function (id) {
                        var state = _this.getState();
                        _this.setState(Object.assign({}, state, { title: 'Consultar Persona', idPersona: id, type: _siu_shared__WEBPACK_IMPORTED_MODULE_0__["FormType"].CONSULTAR }));
                    };
                    this.setModalEditar = function (id) {
                        var state = _this.getState();
                        _this.setState(Object.assign({}, state, { title: 'Editar Persona', idPersona: id, type: _siu_shared__WEBPACK_IMPORTED_MODULE_0__["FormType"].EDITAR }));
                    };
                    //====================================================
                    // ACCIONES ASINCRONAS
                    //====================================================
                    this.asyncGetPerson = function (id) {
                        _this.getPersonStart();
                        _this.autorizacionService.getPerson(id).subscribe(function (x) {
                            _this.getPersonSuccess(x);
                        }, function (error) {
                            _this.getPersonError(error);
                        });
                    };
                    this.asyncSavePerson = function (person) {
                        return new Promise(function (resolve, reject) {
                            _this.getPersonStart();
                            _this.autorizacionService.savePerson(person).subscribe(function (response) {
                                _this.savePersonSuccess();
                                resolve();
                            }, function (error) {
                                _this.savePersonError(error.errors);
                            });
                        });
                    };
                }
                return CrudModalPersonaActions;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/store/crud.store.model.ts": 
        /*!**************************************************************************************************!*\
          !*** ./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/store/crud.store.model.ts ***!
          \**************************************************************************************************/
        /*! exports provided: buildNewFormBuscarPersonas, buildNewPersona, buildNewModalPersona, CrudStoreModel */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildNewFormBuscarPersonas", function () { return buildNewFormBuscarPersonas; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildNewPersona", function () { return buildNewPersona; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildNewModalPersona", function () { return buildNewModalPersona; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudStoreModel", function () { return CrudStoreModel; });
            /* harmony import */ var _siu_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @siu/shared */ "./src/app/shared/src/public-api.ts");
            var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
                return (mod && mod.__esModule) ? mod : { "default": mod };
            };
            var buildNewFormBuscarPersonas = function () { return ({
                name: null,
                surname: null,
                email: null,
                age: null
            }); };
            var buildNewPersona = function () { return ({
                _id: null,
                guid: null,
                name: null,
                surname: null,
                gender: null,
                email: null,
                phone: null,
                address: null,
                birthday: null,
                age: null
            }); };
            var buildNewModalPersona = function () { return ({
                title: 'Registrar Persona',
                error: null,
                isLoading: false,
                type: _siu_shared__WEBPACK_IMPORTED_MODULE_0__["FormType"].REGISTRAR,
                persona: buildNewPersona(),
                idPersona: null
            }); };
            var CrudStoreModel = /** @class */ (function () {
                function CrudStoreModel() {
                    this.modalPersona = buildNewModalPersona();
                    this.gridPersonas = {
                        formBuscar: buildNewFormBuscarPersonas(),
                        isLoading: false,
                        error: null,
                        definition: {
                            columns: [
                                { label: 'Nombre', field: 'name' },
                                { label: 'Apellidos', field: 'surname' },
                                { label: 'Email', field: 'email' },
                                { label: 'Age', field: 'age' },
                                { label: 'F. Nacimiento', field: 'birthday', isDatetime: true },
                                {
                                    label: 'Acciones', field: 'buttons', buttons: [
                                        _siu_shared__WEBPACK_IMPORTED_MODULE_0__["BuildGridButton"].CONSULTAR(),
                                        _siu_shared__WEBPACK_IMPORTED_MODULE_0__["BuildGridButton"].EDITAR(),
                                        _siu_shared__WEBPACK_IMPORTED_MODULE_0__["BuildGridButton"].ELIMINAR(),
                                    ]
                                }
                            ]
                        },
                        source: {
                            items: [],
                            page: 1,
                            pageSize: 10,
                            total: 0,
                            orderBy: null,
                            orderDir: null
                        }
                    };
                }
                return CrudStoreModel;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/store/crud.store.ts": 
        /*!********************************************************************************************!*\
          !*** ./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/store/crud.store.ts ***!
          \********************************************************************************************/
        /*! exports provided: CrudStore */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudStore", function () { return CrudStore; });
            /* harmony import */ var _crud_store_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crud.store.model */ "./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/store/crud.store.model.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_core_store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/store/store */ "./src/app/core/store/store.ts");
            /* harmony import */ var _actions_modal_persona_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions/modal-persona.action */ "./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/store/actions/modal-persona.action.ts");
            /* harmony import */ var _actions_grid_personas_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions/grid-personas.action */ "./src/app/modules/autorizaciones/pages/autorizacion-aprob-online/store/actions/grid-personas.action.ts");
            /* harmony import */ var _services_autorizacion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/autorizacion.service */ "./src/app/modules/autorizaciones/services/autorizacion.service.ts");
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
            var CrudStore = /** @class */ (function (_super) {
                __extends(CrudStore, _super);
                function CrudStore(autorizacionService) {
                    var _this = _super.call(this, new _crud_store_model__WEBPACK_IMPORTED_MODULE_0__["CrudStoreModel"]()) || this;
                    _this.autorizacionService = autorizacionService;
                    _this.actionModalPersonas = new _actions_modal_persona_action__WEBPACK_IMPORTED_MODULE_3__["CrudModalPersonaActions"](_this.buildScopedGetState('modalPersona'), _this.buildScopedSetState('modalPersona'), autorizacionService);
                    _this.actionGridPersonas = new _actions_grid_personas_action__WEBPACK_IMPORTED_MODULE_4__["CrudGridPersonasActions"](_this.buildScopedGetState('gridPersonas'), _this.buildScopedSetState('gridPersonas'), autorizacionService);
                    return _this;
                }
                return CrudStore;
            }(_app_core_store_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
            CrudStore.ctorParameters = function () { return [
                { type: _services_autorizacion_service__WEBPACK_IMPORTED_MODULE_5__["AutorizacionService"] }
            ]; };
            CrudStore = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
                __metadata("design:paramtypes", [_services_autorizacion_service__WEBPACK_IMPORTED_MODULE_5__["AutorizacionService"]])
            ], CrudStore);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-autorizacion-aprob-online-crud-module-es2015.js.map
//# sourceMappingURL=pages-autorizacion-aprob-online-crud-module-es5.js.map
//# sourceMappingURL=pages-autorizacion-aprob-online-crud-module-es5.js.map