(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-user-new-user-module"],{

/***/ "NDgn":
/*!***************************************************!*\
  !*** ./src/app/pages/new-user/new-user.module.ts ***!
  \***************************************************/
/*! exports provided: NewUserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserModule", function() { return NewUserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _metronic_partials_content_general_general_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_metronic/partials/content/general/general.module */ "93Pz");
/* harmony import */ var _new_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-user.component */ "Vzo8");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-highlightjs */ "OtPg");










class NewUserModule {
}
NewUserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NewUserModule });
NewUserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NewUserModule_Factory(t) { return new (t || NewUserModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _metronic_partials_content_general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"],
            ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__["HighlightModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbNavModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTooltipModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    component: _new_user_component__WEBPACK_IMPORTED_MODULE_4__["NewUserComponent"],
                },
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NewUserModule, { declarations: [_new_user_component__WEBPACK_IMPORTED_MODULE_4__["NewUserComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _metronic_partials_content_general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"],
        ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__["HighlightModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbNavModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTooltipModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewUserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_new_user_component__WEBPACK_IMPORTED_MODULE_4__["NewUserComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _metronic_partials_content_general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"],
                    ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__["HighlightModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbNavModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTooltipModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        {
                            path: '',
                            component: _new_user_component__WEBPACK_IMPORTED_MODULE_4__["NewUserComponent"],
                        },
                    ]),
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Vzo8":
/*!******************************************************!*\
  !*** ./src/app/pages/new-user/new-user.component.ts ***!
  \******************************************************/
/*! exports provided: NewUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserComponent", function() { return NewUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/users.service */ "6Qg2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










function NewUserComponent_option_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const segment_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", segment_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", segment_r6.name, " ");
} }
function NewUserComponent_ng_container_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.cardImageBase64, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function NewUserComponent_ng_template_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 41);
} }
function NewUserComponent_ng_template_89_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const message_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().message;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", message_r8, " ");
} }
function NewUserComponent_ng_template_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NewUserComponent_ng_template_89_ng_container_0_Template, 4, 1, "ng-container", 42);
} if (rf & 2) {
    const control_r7 = ctx.control;
    const validation_r9 = ctx.validation;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", control_r7.hasError(validation_r9) && (control_r7.dirty || control_r7.touched));
} }
const _c0 = function (a2) { return { validation: "required", message: "Nombre es requerido.", control: a2 }; };
const _c1 = function (a2) { return { validation: "minLength", message: "Nombre debe tener al menos 3 caracteres.", control: a2 }; };
const _c2 = function (a2) { return { validation: "maxLength", message: "Nombre debe tener como maximo 50 caracteres", control: a2 }; };
const _c3 = function (a2) { return { validation: "required", message: "Puesto es requerido.", control: a2 }; };
const _c4 = function (a2) { return { validation: "required", message: "Tel\u00E9fono es requerido.", control: a2 }; };
const _c5 = function (a2) { return { validation: "required", message: "Email es requerido.", control: a2 }; };
const _c6 = function (a2) { return { validation: "email", message: "Email debe ser v\u00E1lido", control: a2 }; };
const _c7 = function (a2) { return { validation: "required", message: "Segmento es requerido.", control: a2 }; };
const _c8 = function (a2) { return { validation: "required", message: "Url es requerido.", control: a2 }; };
const _c9 = function (a2) { return { validation: "required", message: "Imagen es requerido.", control: a2 }; };
const _c10 = function (a2) { return { validation: "required", message: "N\u00FAmero de whastapp es requerido.", control: a2 }; };
const _c11 = function (a2) { return { validation: "required", message: "Mensaje de whatsapp es requerido.", control: a2 }; };
class NewUserComponent {
    constructor(usersService, router, formBuilder, _cdr) {
        this.usersService = usersService;
        this.router = router;
        this.formBuilder = formBuilder;
        this._cdr = _cdr;
        this.user = {
            pic: './assets/media/users/default.jpg'
        };
        this.segmentList = [];
        this.segmentUrlName = ' ';
        this.newUserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]),
            position: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]),
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            segment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            whatsappPhone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]),
            whatsappMsg: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Hi! Can you give me more information about', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,])
        });
    }
    ngOnInit() {
        this.getSegments();
    }
    save() {
        this.saveData = {
            userInfo: {
                name: this.newUserForm.get('name').value,
                phone: this.newUserForm.get('phone').value,
                position: this.newUserForm.get('position').value,
                url: this.segmentUrlName + '/' + this.newUserForm.get('url').value + '.html',
                email: this.newUserForm.get('email').value,
                image: this.previewImagePath,
                segment_id: this.newUserForm.get('segment').value.id
            },
            whatsappInfo: {
                phone: this.newUserForm.get('whatsappPhone').value,
                msg: this.newUserForm.get('whatsappMsg').value
            }
        };
        console.log(this.newUserForm);
        this.usersService.createUser(this.saveData).subscribe(response => {
            if (response.status === 1) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Éxito', 'Registro Agregado', 'success');
                this.router.navigate(['/users/']);
            }
            else if (response.error === 'ER_DUP_ENTRY') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Error', 'Ocurrió un problema al guardar al usuario, url ya existe', 'error');
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Error', 'Ocurrió un problema al guardar al usuario', 'error');
            }
        });
    }
    fileChangeEvent(fileInput) {
        this.imageError = null;
        if (fileInput.target.files && fileInput.target.files[0]) {
            // Size Filter Bytes
            const max_size = 20971520;
            const allowed_types = ['image/png', 'image/jpeg'];
            const max_height = 15200;
            const max_width = 25600;
            if (fileInput.target.files[0].size > max_size) {
                this.imageError =
                    'Maximum size allowed is ' + max_size / 1000 + 'Mb';
                return false;
            }
            if (!lodash__WEBPACK_IMPORTED_MODULE_3__["includes"](allowed_types, fileInput.target.files[0].type)) {
                this.imageError = 'Only Images are allowed ( JPG | PNG )';
                return false;
            }
            const reader = new FileReader();
            reader.onload = (e) => {
                const image = new Image();
                image.src = e.target.result;
                image.onload = (rs) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    const img_height = rs.currentTarget['height'];
                    const img_width = rs.currentTarget['width'];
                    if (img_height > max_height && img_width > max_width) {
                        this.imageError =
                            'Maximum dimentions allowed ' +
                                max_height +
                                '*' +
                                max_width +
                                'px';
                        return false;
                    }
                    else {
                        this.newUserForm.get('image').updateValueAndValidity();
                        const imgBase64Path = e.target.result;
                        this.cardImageBase64 = imgBase64Path;
                        yield this.cardImageBase64;
                        this.isImageSaved = true;
                        this.previewImagePath = imgBase64Path;
                        this._cdr.detectChanges();
                    }
                });
            };
            reader.readAsDataURL(fileInput.target.files[0]);
        }
    }
    getSegments() {
        this.usersService.segments().subscribe(response => {
            this.segmentList = response.results;
            this._cdr.detectChanges();
        });
    }
    segmentSelect() {
        this.basicSegment = this.newUserForm.get('segment').value.name;
        this.segmentUrlName = this.basicSegment.replace(/ /g, "-");
        this.segmentUrlName = this.segmentUrlName.toLowerCase();
    }
    navigateToUsers() {
        this.router.navigate(['/users/']);
    }
}
NewUserComponent.ɵfac = function NewUserComponent_Factory(t) { return new (t || NewUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
NewUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NewUserComponent, selectors: [["app-new-user"]], decls: 91, vars: 55, consts: [[3, "formGroup", "ngSubmit"], [1, "row", "mb-5"], [1, "col-lg-6", "col-xl-6"], [1, "boldfont-weight-bolder", "text-dark"], ["title", "Volver", 1, "arrow", "left", "float-left", 3, "click"], [1, "btn", "btn-success", "btn-lg", "float-right", 2, "background-color", "#6AA12A", "border-color", "#6AA12A", 3, "disabled"], [1, "card", "card-custom"], [1, "card-header", "py-3"], [1, "card-title", "align-items-start", "flex-column"], [1, "card-label", "font-weight-bolder", "text-dark"], [1, "form"], [1, "card-body"], [1, "form-group", "row"], [1, "col-xl-2", "col-lg-2", "col-form-label", "font-weight-bold"], [1, "col-lg-5", "col-xl-4"], ["type", "text", "formControlName", "name", 1, "form-control", "form-control-lg", "form-control-solid"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "col-xl-1", "col-lg-1", "col-form-label", "font-weight-bold"], ["type", "text", "formControlName", "position", 1, "form-control", "form-control-lg", "form-control-solid"], ["type", "text", "formControlName", "phone", 1, "form-control", "form-control-lg", "form-control-solid"], ["type", "text", "formControlName", "email", 1, "form-control", "form-control-lg", "form-control-solid"], ["formControlName", "segment", 1, "form-control", "form-control-lg", 3, "change"], ["disabled", "", 3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "col-lg-2", "col-xl-2", "col-form-label", 2, "padding-right", "0px !important", "padding-left", "0px !important"], [1, "col-lg-2", "col-xl-2", 2, "padding-right", "0px !important", "padding-left", "0px !important"], ["type", "text", "formControlName", "url", 1, "form-control", "form-control-lg", "form-control-solid"], [1, "col-lg-1", "col-xl-1", "col-form-label", 2, "padding-right", "0px !important", "padding-left", "0px !important"], [1, "col-xl-3", "col-lg-3", "col-form-label", "font-weight-bold"], [1, "col-lg-9", "col-xl-6"], ["id", "kt_profile_avatar", 1, "image-input", "image-input-outline"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], ["data-action", "change", "data-toggle", "tooltip", "title", "", "data-original-title", "Change avatar", 1, "btn", "btn-xs", "btn-icon", "btn-circle", "btn-white", "btn-hover-text-primary", "btn-shadow"], [1, "fa", "fa-pen", "icon-sm", "text-muted"], ["type", "file", "name", "profile_avatar", "accept", ".png, .jpg, .jpeg", "formControlName", "image", 3, "change"], ["type", "text", "formControlName", "whatsappPhone", 1, "form-control", "form-control-lg", "form-control-solid"], ["id", "exampleFormControlTextarea1", "rows", "8", "formControlName", "whatsappMsg", 1, "form-control", "form-control-lg", "form-control-solid", 2, "resize", "none"], ["formError", ""], [3, "ngValue"], [2, "max-width", "200px", "height", "auto", 3, "src"], ["src", "./assets/media/users/default.jpg", 1, "img-responsive", 2, "max-width", "200px", "height", "auto"], [4, "ngIf"], [1, "fv-plugins-message-container"], [1, "fv-help-block"]], template: function NewUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function NewUserComponent_Template_form_ngSubmit_0_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewUserComponent_Template_i_click_5_listener() { return ctx.navigateToUsers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Crear Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Informacion de la cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Nombre completo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](22, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](23, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](24, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Puesto:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](29, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Tel\u00E9fono:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](35, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Correo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](40, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](41, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Segmento:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function NewUserComponent_Template_select_change_46_listener() { return ctx.segmentSelect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Selecciona el segmento");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, NewUserComponent_option_49_Template, 2, 2, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](50, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "URL:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](57, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, ".html");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Imagen asesor:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, NewUserComponent_ng_container_66_Template, 2, 1, "ng-container", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, NewUserComponent_ng_template_67_Template, 1, 0, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function NewUserComponent_Template_input_change_71_listener($event) { return ctx.fileChangeEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](72, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Mensaje personalizado Whatsapp");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "N\u00FAmero celular:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](83, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Mensaje:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "textarea", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](88, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](89, NewUserComponent_ng_template_89_Template, 1, 1, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](68);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.newUserForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.newUserForm.status === "INVALID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](31, _c0, ctx.newUserForm.controls["name"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](33, _c1, ctx.newUserForm.controls["name"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](35, _c2, ctx.newUserForm.controls["name"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](37, _c3, ctx.newUserForm.controls["position"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](39, _c4, ctx.newUserForm.controls["phone"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](41, _c5, ctx.newUserForm.controls["email"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](43, _c6, ctx.newUserForm.controls["email"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.segmentList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](45, _c7, ctx.newUserForm.controls["segment"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("sbgroup.com.mx/", ctx.segmentUrlName, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](47, _c8, ctx.newUserForm.controls["url"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isImageSaved)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](49, _c9, ctx.newUserForm.controls["image"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](51, _c10, ctx.newUserForm.controls["whatsappPhone"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](53, _c11, ctx.newUserForm.controls["whatsappMsg"]));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: [".arrow[_ngcontent-%COMP%] {\n  border: solid black;\n  border-width: 0 3px 3px 0;\n  display: inline-block;\n  padding: 3px;\n  margin-top: 6px;\n  margin-bottom: auto;\n  cursor: pointer;\n}\n\n.left[_ngcontent-%COMP%] {\n  transform: rotate(135deg);\n  -webkit-transform: rotate(135deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuZXctdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLGlDQUFBO0FBRUYiLCJmaWxlIjoibmV3LXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXJyb3cge1xyXG4gIGJvcmRlcjogc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogM3B4O1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubGVmdCB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NewUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-new-user',
                templateUrl: './new-user.component.html',
                styleUrls: ['./new-user.component.scss']
            }]
    }], function () { return [{ type: _services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=new-user-new-user-module-es2015.js.map