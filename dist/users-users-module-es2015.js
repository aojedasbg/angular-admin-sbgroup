(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"],{

/***/ "+P1L":
/*!*********************************************!*\
  !*** ./src/app/pages/users/users.module.ts ***!
  \*********************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _metronic_partials_content_general_general_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_metronic/partials/content/general/general.module */ "93Pz");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users.component */ "Ag98");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-highlightjs */ "OtPg");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "njyG");











class UsersModule {
}
UsersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UsersModule });
UsersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UsersModule_Factory(t) { return new (t || UsersModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _metronic_partials_content_general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"],
            ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__["HighlightModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbNavModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTooltipModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTablesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    component: _users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"],
                },
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UsersModule, { declarations: [_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _metronic_partials_content_general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"],
        ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__["HighlightModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbNavModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTooltipModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTablesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _metronic_partials_content_general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"],
                    ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__["HighlightModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbNavModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTooltipModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTablesModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        {
                            path: '',
                            component: _users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"],
                        },
                    ]),
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Ag98":
/*!************************************************!*\
  !*** ./src/app/pages/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/users.service */ "6Qg2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");









class UsersComponent {
    constructor(usersService, router, renderer) {
        this.usersService = usersService;
        this.router = router;
        this.renderer = renderer;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.usersList = [];
        this.dtOptions = {};
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }
    ngAfterViewInit() {
        this.dtTrigger.next();
    }
    ngOnInit() {
        this.dtOptions = {
            language: {
                lengthMenu: 'Mostrar _MENU_ registros por página',
                zeroRecords: 'Registros no encontrados',
                info: 'Mostrando página _PAGE_ de _PAGES_',
                infoEmpty: 'Registros no encontrados',
                infoFiltered: '(Filtrando de _MAX_ registros totales)',
                search: 'Buscar',
                paginate: {
                    previous: 'Anterior',
                    next: 'Siguiente',
                    first: 'Primero',
                    last: 'Último'
                }
            },
            ajax: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].sysConfig.apiUrl + 'client-side/users',
            columns: [{
                    title: 'Nombre',
                    data: 'name'
                }, {
                    title: 'Puesto',
                    data: 'position'
                }, {
                    title: 'Teléfono',
                    data: 'phone'
                }, {
                    title: 'Correo electrónico',
                    data: 'email'
                }, {
                    title: 'Segmento',
                    data: 'segment_name',
                }, {
                    title: 'Acciones',
                    render(data, type, full) {
                        return '<button id="editBtn" type="button" class="btn btn-primary btn-sm mr-2 edit"><i class="fas fa-edit edit" style="padding-left:5px;" ></i></button><button type="button" id="deleteBtn" class="btn btn-danger btn-sm mr-2"><i class="fa fa-times" style="padding-left:5px;"></i></button>';
                    }
                }
            ],
            rowCallback: (row, data, index) => {
                const self = this;
                $('#editBtn', row).on('click', () => {
                    this.rowUserId = data.id;
                    this.editUserNav(this.rowUserId);
                });
                $('#deleteBtn', row).on('click', () => {
                    this.rowUserId = data.id;
                    this.deleteUsr(this.rowUserId);
                });
                return row;
            }
        };
    }
    getUsers() {
        this.usersService.users().subscribe(response => {
            this.usersList = response.results;
        });
    }
    editUserNav(userId) {
        this.router.navigate(['/edit-user', userId]);
    }
    deleteUsr(user_id) {
        const data = {
            user_id: user_id
        };
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'Confirmar',
            text: "Esta seguro de borrar este usuario?",
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#6AA12A',
            cancelButtonColor: '#383838',
            confirmButtonText: 'Si',
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed === true) {
                this.usersService.deleteUser(data).subscribe(response => {
                    console.log(response);
                    this.rerender();
                    if (response.status === 1) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Eliminado', 'Usuario eliminado', 'success');
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Error', 'Algo ocurrio al eliminar el registro', 'error');
                    }
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.close();
            }
        });
    }
    rerender() {
        this.dtElement.dtInstance.then((dtInstance) => {
            // Destroy the table first
            dtInstance.destroy();
            // Call the dtTrigger to rerender again
            this.dtTrigger.next();
        });
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], viewQuery: function UsersComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, decls: 8, vars: 2, consts: [[1, "row", "mb-5"], [1, "col-lg-6", "col-xl-6"], ["routerLink", "/new-user", 1, "btn", "btn-success", "btn-lg", "float-right", 2, "background-color", "#6AA12A", "border-color", "#6AA12A"], [1, "card"], [1, "card-body"], ["datatable", "", 1, "table", "table-striped", "table-bordered", 3, "dtOptions", "dtTrigger"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nuevo cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-users',
                templateUrl: './users.component.html',
                styleUrls: ['./users.component.scss']
            }]
    }], function () { return [{ type: _services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"], { static: false }]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=users-users-module-es2015.js.map