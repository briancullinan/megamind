webpackJsonp(["auth.module"],{

/***/ "../../../../../src/app/auth/auth.module.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModuleNgFactory", function() { return AuthModuleNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_module__ = __webpack_require__("../../../../../src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_tooltip_typings_index_ngfactory__ = __webpack_require__("../../../material/tooltip/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_material_dialog_typings_index_ngfactory__ = __webpack_require__("../../../material/dialog/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logout_logout_component_ngfactory__ = __webpack_require__("../../../../../src/app/auth/logout/logout.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component_ngfactory__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reset_password_reset_password_component_ngfactory__ = __webpack_require__("../../../../../src/app/auth/reset-password/reset-password.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forgot_password_forgot_password_component_ngfactory__ = __webpack_require__("../../../../../src/app/auth/forgot-password/forgot-password.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_cdk_platform__ = __webpack_require__("../../../cdk/esm5/platform.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_core__ = __webpack_require__("../../../material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_cdk_bidi__ = __webpack_require__("../../../cdk/esm5/bidi.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_cdk_a11y__ = __webpack_require__("../../../cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_cdk_scrolling__ = __webpack_require__("../../../cdk/esm5/scrolling.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_cdk_overlay__ = __webpack_require__("../../../cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_cdk_observers__ = __webpack_require__("../../../cdk/esm5/observers.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_material_menu__ = __webpack_require__("../../../material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_material_tooltip__ = __webpack_require__("../../../material/esm5/tooltip.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_material_autocomplete__ = __webpack_require__("../../../material/esm5/autocomplete.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__core_dialog_guard__ = __webpack_require__("../../../../../src/app/core/dialog-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_cdk_portal__ = __webpack_require__("../../../cdk/esm5/portal.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_material_sidenav__ = __webpack_require__("../../../material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__angular_material_checkbox__ = __webpack_require__("../../../material/esm5/checkbox.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__angular_cdk_accordion__ = __webpack_require__("../../../cdk/esm5/accordion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__angular_material_expansion__ = __webpack_require__("../../../material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__angular_material_progress_spinner__ = __webpack_require__("../../../material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__angular_material_slider__ = __webpack_require__("../../../material/esm5/slider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__logout_logout_component__ = __webpack_require__("../../../../../src/app/auth/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__login_login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__reset_password_reset_password_component__ = __webpack_require__("../../../../../src/app/auth/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__forgot_password_forgot_password_component__ = __webpack_require__("../../../../../src/app/auth/forgot-password/forgot-password.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 















































var AuthModuleNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcmf"](__WEBPACK_IMPORTED_MODULE_1__auth_module__["a" /* AuthModule */], [], function (_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmod"]([__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵCodegenComponentFactoryResolver"], [[8, [__WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_tooltip_typings_index_ngfactory__["a" /* TooltipComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_material_dialog_typings_index_ngfactory__["a" /* MatDialogContainerNgFactory */], __WEBPACK_IMPORTED_MODULE_4__logout_logout_component_ngfactory__["a" /* LogoutComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_5__login_login_component_ngfactory__["a" /* LoginComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_6__reset_password_reset_password_component_ngfactory__["a" /* ResetPasswordComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_7__forgot_password_forgot_password_component_ngfactory__["a" /* ForgotPasswordComponentNgFactory */]]], [3, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModuleRef"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_8__angular_common__["m" /* NgLocalization */], __WEBPACK_IMPORTED_MODULE_8__angular_common__["l" /* NgLocaleLocalization */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"], [2, __WEBPACK_IMPORTED_MODULE_8__angular_common__["t" /* ɵa */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_9__angular_forms__["w" /* ɵi */], __WEBPACK_IMPORTED_MODULE_9__angular_forms__["w" /* ɵi */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_9__angular_forms__["e" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_9__angular_forms__["e" /* FormBuilder */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["h" /* HttpXsrfTokenExtractor */], __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["m" /* ɵg */], [__WEBPACK_IMPORTED_MODULE_8__angular_common__["d" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["PLATFORM_ID"], __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["k" /* ɵe */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["n" /* ɵh */], __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["n" /* ɵh */], [__WEBPACK_IMPORTED_MODULE_10__angular_common_http__["h" /* HttpXsrfTokenExtractor */], __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["l" /* ɵf */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HTTP_INTERCEPTORS */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_10__angular_common_http__["n" /* ɵh */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["j" /* ɵd */], __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["j" /* ɵd */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](6144, __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["i" /* XhrFactory */], null, [__WEBPACK_IMPORTED_MODULE_10__angular_common_http__["j" /* ɵd */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["g" /* HttpXhrBackend */], __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["g" /* HttpXhrBackend */], [__WEBPACK_IMPORTED_MODULE_10__angular_common_http__["i" /* XhrFactory */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](6144, __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpBackend */], null, [__WEBPACK_IMPORTED_MODULE_10__angular_common_http__["g" /* HttpXhrBackend */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["f" /* HttpHandler */], __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["o" /* ɵinterceptingHandler */], [__WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpBackend */], [2, __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HTTP_INTERCEPTORS */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["c" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["c" /* HttpClient */], [__WEBPACK_IMPORTED_MODULE_10__angular_common_http__["f" /* HttpHandler */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_11__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_11__angular_cdk_platform__["a" /* Platform */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["d" /* ErrorStateMatcher */], __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["d" /* ErrorStateMatcher */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](6144, __WEBPACK_IMPORTED_MODULE_13__angular_cdk_bidi__["b" /* DIR_DOCUMENT */], null, [__WEBPACK_IMPORTED_MODULE_8__angular_common__["d" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_13__angular_cdk_bidi__["c" /* Directionality */], __WEBPACK_IMPORTED_MODULE_13__angular_cdk_bidi__["c" /* Directionality */], [[2, __WEBPACK_IMPORTED_MODULE_13__angular_cdk_bidi__["b" /* DIR_DOCUMENT */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_14__angular_cdk_a11y__["j" /* InteractivityChecker */], __WEBPACK_IMPORTED_MODULE_14__angular_cdk_a11y__["j" /* InteractivityChecker */], [__WEBPACK_IMPORTED_MODULE_11__angular_cdk_platform__["a" /* Platform */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_14__angular_cdk_a11y__["i" /* FocusTrapFactory */], __WEBPACK_IMPORTED_MODULE_14__angular_cdk_a11y__["i" /* FocusTrapFactory */], [__WEBPACK_IMPORTED_MODULE_14__angular_cdk_a11y__["j" /* InteractivityChecker */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_8__angular_common__["d" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](136192, __WEBPACK_IMPORTED_MODULE_14__angular_cdk_a11y__["e" /* AriaDescriber */], __WEBPACK_IMPORTED_MODULE_14__angular_cdk_a11y__["c" /* ARIA_DESCRIBER_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_14__angular_cdk_a11y__["e" /* AriaDescriber */]], __WEBPACK_IMPORTED_MODULE_8__angular_common__["d" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_14__angular_cdk_a11y__["n" /* LiveAnnouncer */], __WEBPACK_IMPORTED_MODULE_14__angular_cdk_a11y__["m" /* LIVE_ANNOUNCER_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_14__angular_cdk_a11y__["n" /* LiveAnnouncer */]], [2, __WEBPACK_IMPORTED_MODULE_14__angular_cdk_a11y__["k" /* LIVE_ANNOUNCER_ELEMENT_TOKEN */]], __WEBPACK_IMPORTED_MODULE_8__angular_common__["d" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_14__angular_cdk_a11y__["h" /* FocusMonitor */], __WEBPACK_IMPORTED_MODULE_14__angular_cdk_a11y__["f" /* FOCUS_MONITOR_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_14__angular_cdk_a11y__["h" /* FocusMonitor */]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_11__angular_cdk_platform__["a" /* Platform */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_15__angular_cdk_scrolling__["d" /* ScrollDispatcher */], __WEBPACK_IMPORTED_MODULE_15__angular_cdk_scrolling__["b" /* SCROLL_DISPATCHER_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_15__angular_cdk_scrolling__["d" /* ScrollDispatcher */]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_11__angular_cdk_platform__["a" /* Platform */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_15__angular_cdk_scrolling__["g" /* ViewportRuler */], __WEBPACK_IMPORTED_MODULE_15__angular_cdk_scrolling__["f" /* VIEWPORT_RULER_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_15__angular_cdk_scrolling__["g" /* ViewportRuler */]], __WEBPACK_IMPORTED_MODULE_11__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_16__angular_cdk_overlay__["g" /* ScrollStrategyOptions */], __WEBPACK_IMPORTED_MODULE_16__angular_cdk_overlay__["g" /* ScrollStrategyOptions */], [__WEBPACK_IMPORTED_MODULE_15__angular_cdk_scrolling__["d" /* ScrollDispatcher */], __WEBPACK_IMPORTED_MODULE_15__angular_cdk_scrolling__["g" /* ViewportRuler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_16__angular_cdk_overlay__["d" /* OverlayContainer */], __WEBPACK_IMPORTED_MODULE_16__angular_cdk_overlay__["i" /* ɵa */], [[3, __WEBPACK_IMPORTED_MODULE_16__angular_cdk_overlay__["d" /* OverlayContainer */]], __WEBPACK_IMPORTED_MODULE_8__angular_common__["d" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_16__angular_cdk_overlay__["m" /* ɵh */], __WEBPACK_IMPORTED_MODULE_16__angular_cdk_overlay__["m" /* ɵh */], [__WEBPACK_IMPORTED_MODULE_15__angular_cdk_scrolling__["g" /* ViewportRuler */], __WEBPACK_IMPORTED_MODULE_8__angular_common__["d" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_16__angular_cdk_overlay__["e" /* OverlayKeyboardDispatcher */], __WEBPACK_IMPORTED_MODULE_16__angular_cdk_overlay__["l" /* ɵf */], [[3, __WEBPACK_IMPORTED_MODULE_16__angular_cdk_overlay__["e" /* OverlayKeyboardDispatcher */]], __WEBPACK_IMPORTED_MODULE_8__angular_common__["d" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_16__angular_cdk_overlay__["b" /* Overlay */], __WEBPACK_IMPORTED_MODULE_16__angular_cdk_overlay__["b" /* Overlay */], [__WEBPACK_IMPORTED_MODULE_16__angular_cdk_overlay__["g" /* ScrollStrategyOptions */], __WEBPACK_IMPORTED_MODULE_16__angular_cdk_overlay__["d" /* OverlayContainer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_16__angular_cdk_overlay__["m" /* ɵh */], __WEBPACK_IMPORTED_MODULE_16__angular_cdk_overlay__["e" /* OverlayKeyboardDispatcher */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_8__angular_common__["d" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_16__angular_cdk_overlay__["j" /* ɵc */], __WEBPACK_IMPORTED_MODULE_16__angular_cdk_overlay__["k" /* ɵd */], [__WEBPACK_IMPORTED_MODULE_16__angular_cdk_overlay__["b" /* Overlay */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_17__angular_material_select__["a" /* MAT_SELECT_SCROLL_STRATEGY */], __WEBPACK_IMPORTED_MODULE_17__angular_material_select__["b" /* MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY */], [__WEBPACK_IMPORTED_MODULE_16__angular_cdk_overlay__["b" /* Overlay */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_18__angular_material_icon__["c" /* MatIconRegistry */], __WEBPACK_IMPORTED_MODULE_18__angular_material_icon__["a" /* ICON_REGISTRY_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_18__angular_material_icon__["c" /* MatIconRegistry */]], [2, __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["c" /* HttpClient */]], __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["c" /* DomSanitizer */], [2, __WEBPACK_IMPORTED_MODULE_8__angular_common__["d" /* DOCUMENT */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_20__angular_cdk_observers__["b" /* MutationObserverFactory */], __WEBPACK_IMPORTED_MODULE_20__angular_cdk_observers__["b" /* MutationObserverFactory */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_21__angular_material_menu__["b" /* MAT_MENU_SCROLL_STRATEGY */], __WEBPACK_IMPORTED_MODULE_21__angular_material_menu__["d" /* ɵc20 */], [__WEBPACK_IMPORTED_MODULE_16__angular_cdk_overlay__["b" /* Overlay */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_22__angular_material_tooltip__["b" /* MAT_TOOLTIP_SCROLL_STRATEGY */], __WEBPACK_IMPORTED_MODULE_22__angular_material_tooltip__["c" /* MAT_TOOLTIP_SCROLL_STRATEGY_PROVIDER_FACTORY */], [__WEBPACK_IMPORTED_MODULE_16__angular_cdk_overlay__["b" /* Overlay */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_23__angular_material_dialog__["b" /* MAT_DIALOG_SCROLL_STRATEGY */], __WEBPACK_IMPORTED_MODULE_23__angular_material_dialog__["c" /* MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY */], [__WEBPACK_IMPORTED_MODULE_16__angular_cdk_overlay__["b" /* Overlay */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_23__angular_material_dialog__["d" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_23__angular_material_dialog__["d" /* MatDialog */], [__WEBPACK_IMPORTED_MODULE_16__angular_cdk_overlay__["b" /* Overlay */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], [2, __WEBPACK_IMPORTED_MODULE_8__angular_common__["g" /* Location */]], [2, __WEBPACK_IMPORTED_MODULE_23__angular_material_dialog__["a" /* MAT_DIALOG_DEFAULT_OPTIONS */]], __WEBPACK_IMPORTED_MODULE_23__angular_material_dialog__["b" /* MAT_DIALOG_SCROLL_STRATEGY */], [3, __WEBPACK_IMPORTED_MODULE_23__angular_material_dialog__["d" /* MatDialog */]], __WEBPACK_IMPORTED_MODULE_16__angular_cdk_overlay__["d" /* OverlayContainer */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_24__angular_cdk_collections__["c" /* UniqueSelectionDispatcher */], __WEBPACK_IMPORTED_MODULE_24__angular_cdk_collections__["d" /* ɵa */], [[3, __WEBPACK_IMPORTED_MODULE_24__angular_cdk_collections__["c" /* UniqueSelectionDispatcher */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_25__angular_material_autocomplete__["a" /* MAT_AUTOCOMPLETE_SCROLL_STRATEGY */], __WEBPACK_IMPORTED_MODULE_25__angular_material_autocomplete__["b" /* MAT_AUTOCOMPLETE_SCROLL_STRATEGY_PROVIDER_FACTORY */], [__WEBPACK_IMPORTED_MODULE_16__angular_cdk_overlay__["b" /* Overlay */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["f" /* HAMMER_GESTURE_CONFIG */], __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["e" /* GestureConfig */], [[2, __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["i" /* MAT_HAMMER_OPTIONS */]], [2, __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["n" /* MatCommonModule */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_26__ngx_translate_core__["f" /* TranslateLoader */], __WEBPACK_IMPORTED_MODULE_27__core_core_module__["a" /* HttpClientLoaderFactory */], [__WEBPACK_IMPORTED_MODULE_10__angular_common_http__["c" /* HttpClient */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_26__ngx_translate_core__["c" /* TranslateCompiler */], __WEBPACK_IMPORTED_MODULE_26__ngx_translate_core__["e" /* TranslateFakeCompiler */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_26__ngx_translate_core__["h" /* TranslateParser */], __WEBPACK_IMPORTED_MODULE_26__ngx_translate_core__["d" /* TranslateDefaultParser */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_26__ngx_translate_core__["b" /* MissingTranslationHandler */], __WEBPACK_IMPORTED_MODULE_26__ngx_translate_core__["a" /* FakeMissingTranslationHandler */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_26__ngx_translate_core__["m" /* ɵa */], __WEBPACK_IMPORTED_MODULE_26__ngx_translate_core__["m" /* ɵa */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_26__ngx_translate_core__["j" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_26__ngx_translate_core__["j" /* TranslateService */], [__WEBPACK_IMPORTED_MODULE_26__ngx_translate_core__["m" /* ɵa */], __WEBPACK_IMPORTED_MODULE_26__ngx_translate_core__["f" /* TranslateLoader */], __WEBPACK_IMPORTED_MODULE_26__ngx_translate_core__["c" /* TranslateCompiler */], __WEBPACK_IMPORTED_MODULE_26__ngx_translate_core__["h" /* TranslateParser */], __WEBPACK_IMPORTED_MODULE_26__ngx_translate_core__["b" /* MissingTranslationHandler */], __WEBPACK_IMPORTED_MODULE_26__ngx_translate_core__["k" /* USE_DEFAULT_LANG */], __WEBPACK_IMPORTED_MODULE_26__ngx_translate_core__["l" /* USE_STORE */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_28__core_dialog_guard__["a" /* DialogGuard */], __WEBPACK_IMPORTED_MODULE_28__core_dialog_guard__["a" /* DialogGuard */], [__WEBPACK_IMPORTED_MODULE_23__angular_material_dialog__["d" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_26__ngx_translate_core__["j" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_29__angular_router__["l" /* Router */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_8__angular_common__["c" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_8__angular_common__["c" /* CommonModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_9__angular_forms__["u" /* ɵba */], __WEBPACK_IMPORTED_MODULE_9__angular_forms__["u" /* ɵba */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_9__angular_forms__["i" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_9__angular_forms__["i" /* FormsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_9__angular_forms__["r" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_9__angular_forms__["r" /* ReactiveFormsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_26__ngx_translate_core__["g" /* TranslateModule */], __WEBPACK_IMPORTED_MODULE_26__ngx_translate_core__["g" /* TranslateModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_29__angular_router__["n" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_29__angular_router__["n" /* RouterModule */], [[2, __WEBPACK_IMPORTED_MODULE_29__angular_router__["s" /* ɵa */]], [2, __WEBPACK_IMPORTED_MODULE_29__angular_router__["l" /* Router */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["e" /* HttpClientXsrfModule */], __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["e" /* HttpClientXsrfModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["d" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["d" /* HttpClientModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_11__angular_cdk_platform__["b" /* PlatformModule */], __WEBPACK_IMPORTED_MODULE_11__angular_cdk_platform__["b" /* PlatformModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_30__angular_material_form_field__["c" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_30__angular_material_form_field__["c" /* MatFormFieldModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_31__angular_material_input__["c" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_31__angular_material_input__["c" /* MatInputModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_13__angular_cdk_bidi__["a" /* BidiModule */], __WEBPACK_IMPORTED_MODULE_13__angular_cdk_bidi__["a" /* BidiModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](256, __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["f" /* MATERIAL_SANITY_CHECKS */], true, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["n" /* MatCommonModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["n" /* MatCommonModule */], [[2, __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["f" /* MATERIAL_SANITY_CHECKS */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["y" /* MatRippleModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["y" /* MatRippleModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["w" /* MatPseudoCheckboxModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["w" /* MatPseudoCheckboxModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["u" /* MatOptionModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material_core__["u" /* MatOptionModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_14__angular_cdk_a11y__["a" /* A11yModule */], __WEBPACK_IMPORTED_MODULE_14__angular_cdk_a11y__["a" /* A11yModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_32__angular_material_button__["d" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_32__angular_material_button__["d" /* MatButtonModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_33__angular_cdk_portal__["g" /* PortalModule */], __WEBPACK_IMPORTED_MODULE_33__angular_cdk_portal__["g" /* PortalModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_15__angular_cdk_scrolling__["c" /* ScrollDispatchModule */], __WEBPACK_IMPORTED_MODULE_15__angular_cdk_scrolling__["c" /* ScrollDispatchModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_16__angular_cdk_overlay__["f" /* OverlayModule */], __WEBPACK_IMPORTED_MODULE_16__angular_cdk_overlay__["f" /* OverlayModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_17__angular_material_select__["c" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_17__angular_material_select__["c" /* MatSelectModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_34__angular_material_card__["e" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_34__angular_material_card__["e" /* MatCardModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_35__angular_material_sidenav__["h" /* MatSidenavModule */], __WEBPACK_IMPORTED_MODULE_35__angular_material_sidenav__["h" /* MatSidenavModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_18__angular_material_icon__["b" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_18__angular_material_icon__["b" /* MatIconModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_36__angular_material_toolbar__["a" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_36__angular_material_toolbar__["a" /* MatToolbarModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_20__angular_cdk_observers__["c" /* ObserversModule */], __WEBPACK_IMPORTED_MODULE_20__angular_cdk_observers__["c" /* ObserversModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_37__angular_material_checkbox__["a" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_37__angular_material_checkbox__["a" /* MatCheckboxModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_21__angular_material_menu__["c" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_21__angular_material_menu__["c" /* MatMenuModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_22__angular_material_tooltip__["d" /* MatTooltipModule */], __WEBPACK_IMPORTED_MODULE_22__angular_material_tooltip__["d" /* MatTooltipModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_23__angular_material_dialog__["f" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_23__angular_material_dialog__["f" /* MatDialogModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_38__angular_cdk_accordion__["c" /* CdkAccordionModule */], __WEBPACK_IMPORTED_MODULE_38__angular_cdk_accordion__["c" /* CdkAccordionModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_39__angular_material_expansion__["a" /* MatExpansionModule */], __WEBPACK_IMPORTED_MODULE_39__angular_material_expansion__["a" /* MatExpansionModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_40__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_40__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_25__angular_material_autocomplete__["d" /* MatAutocompleteModule */], __WEBPACK_IMPORTED_MODULE_25__angular_material_autocomplete__["d" /* MatAutocompleteModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_41__angular_material_slider__["b" /* MatSliderModule */], __WEBPACK_IMPORTED_MODULE_41__angular_material_slider__["b" /* MatSliderModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_42__angular_material_tabs__["j" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_42__angular_material_tabs__["j" /* MatTabsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_27__core_core_module__["b" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_27__core_core_module__["b" /* SharedModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_1__auth_module__["a" /* AuthModule */], __WEBPACK_IMPORTED_MODULE_1__auth_module__["a" /* AuthModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](256, __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["k" /* ɵe */], "XSRF-TOKEN", []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](256, __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["l" /* ɵf */], "X-XSRF-TOKEN", []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](256, __WEBPACK_IMPORTED_MODULE_35__angular_material_sidenav__["a" /* MAT_DRAWER_DEFAULT_AUTOSIZE */], false, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](256, __WEBPACK_IMPORTED_MODULE_21__angular_material_menu__["a" /* MAT_MENU_DEFAULT_OPTIONS */], { overlapTrigger: true, xPosition: "after", yPosition: "below" }, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](256, __WEBPACK_IMPORTED_MODULE_22__angular_material_tooltip__["a" /* MAT_TOOLTIP_DEFAULT_OPTIONS */], { showDelay: 0, hideDelay: 0, touchendHideDelay: 1500 }, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](256, __WEBPACK_IMPORTED_MODULE_26__ngx_translate_core__["l" /* USE_STORE */], undefined, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](256, __WEBPACK_IMPORTED_MODULE_26__ngx_translate_core__["k" /* USE_DEFAULT_LANG */], undefined, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_29__angular_router__["j" /* ROUTES */], function () { return [[{ path: "logout", component: __WEBPACK_IMPORTED_MODULE_43__logout_logout_component__["a" /* LogoutComponent */], data: { roles: ["anonymous", "user"] } }, { path: "", component: __WEBPACK_IMPORTED_MODULE_44__login_login_component__["a" /* LoginComponent */] }, { path: "login", component: __WEBPACK_IMPORTED_MODULE_44__login_login_component__["a" /* LoginComponent */] }, { path: "register", component: __WEBPACK_IMPORTED_MODULE_44__login_login_component__["a" /* LoginComponent */] }, { path: "reset/:Email", component: __WEBPACK_IMPORTED_MODULE_45__reset_password_reset_password_component__["a" /* ResetPasswordComponent */] }, { path: "forgot", component: __WEBPACK_IMPORTED_MODULE_46__forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */] }]]; }, [])]); });



/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export COMPONENTS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reset_password_reset_password_component__ = __webpack_require__("../../../../../src/app/auth/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_password_forgot_password_component__ = __webpack_require__("../../../../../src/app/auth/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logout_logout_component__ = __webpack_require__("../../../../../src/app/auth/logout/logout.component.ts");




var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */],
    __WEBPACK_IMPORTED_MODULE_3__logout_logout_component__["a" /* LogoutComponent */],
    __WEBPACK_IMPORTED_MODULE_1__reset_password_reset_password_component__["a" /* ResetPasswordComponent */],
    __WEBPACK_IMPORTED_MODULE_2__forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */]
];
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    return AuthModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/forgot-password/forgot-password.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_ForgotPasswordComponent */
/* unused harmony export View_ForgotPasswordComponent_0 */
/* unused harmony export View_ForgotPasswordComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forgot_password_component_scss_shim_ngstyle__ = __webpack_require__("../../../../../src/app/auth/forgot-password/forgot-password.component.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_card_typings_index_ngfactory__ = __webpack_require__("../../../material/card/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_angular_material_form_field_typings_index_ngfactory__ = __webpack_require__("../../../material/form-field/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_core__ = __webpack_require__("../../../material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_cdk_platform__ = __webpack_require__("../../../cdk/esm5/platform.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__node_modules_angular_material_button_typings_index_ngfactory__ = __webpack_require__("../../../material/button/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_cdk_a11y__ = __webpack_require__("../../../cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__forgot_password_component__ = __webpack_require__("../../../../../src/app/auth/forgot-password/forgot-password.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

















var styles_ForgotPasswordComponent = [__WEBPACK_IMPORTED_MODULE_0__forgot_password_component_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_ForgotPasswordComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_ForgotPasswordComponent, data: {} });

function View_ForgotPasswordComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 62, "mat-card", [["class", "contain mat-card"]], null, null, null, __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_card_typings_index_ngfactory__["b" /* View_MatCard_0 */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_card_typings_index_ngfactory__["a" /* RenderType_MatCard */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_card__["a" /* MatCard */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](3, 0, null, 0, 58, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 5).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 5).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](4, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["v" /* ɵbf */], [], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](5, 4210688, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["p" /* NgForm */], [[8, null], [8, null]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* ControlContainer */], null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["p" /* NgForm */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](7, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["o" /* NgControlStatusGroup */], [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* ControlContainer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](9, 0, null, null, 3, "mat-card-title", [["class", "mat-card-title"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](10, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_card__["f" /* MatCardTitle */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](11, null, ["", ""])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["i" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["j" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](14, 0, null, null, 22, "mat-input-container", [["class", "mat-input-container mat-form-field"]], [[2, "mat-input-invalid", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-focused", null], [2, "mat-primary", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, __WEBPACK_IMPORTED_MODULE_6__node_modules_angular_material_form_field_typings_index_ngfactory__["b" /* View_MatFormField_0 */], __WEBPACK_IMPORTED_MODULE_6__node_modules_angular_material_form_field_typings_index_ngfactory__["a" /* RenderType_MatFormField */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](15, 7389184, null, 7, __WEBPACK_IMPORTED_MODULE_7__angular_material_form_field__["a" /* MatFormField */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"], [2, __WEBPACK_IMPORTED_MODULE_8__angular_material_core__["j" /* MAT_LABEL_GLOBAL_OPTIONS */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 1, { _control: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 2, { _placeholderChild: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 3, { _labelChild: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 4, { _errorChildren: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 5, { _hintChildren: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 6, { _prefixChildren: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 7, { _suffixChildren: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 1, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](24, 0, null, 1, 11, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["maxlength", "50"], ["name", "signupEmail"], ["type", "email"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [8, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [8, "readOnly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 25)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 25).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 25)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 25)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("blur" === en)) {
        var pd_4 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 33)._focusChanged(false) !== false);
        ad = (pd_4 && ad);
    } if (("focus" === en)) {
        var pd_5 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 33)._focusChanged(true) !== false);
        ad = (pd_5 && ad);
    } if (("input" === en)) {
        var pd_6 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 33)._onInput() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.email = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](25, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](26, 540672, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* MaxLengthValidator */], [], { maxlength: [0, "maxlength"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* NG_VALIDATORS */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* MaxLengthValidator */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](29, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["q" /* NgModel */], [[2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* ControlContainer */]], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* NG_VALIDATORS */]], [8, null], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"], model: [1, "model"], options: [2, "options"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpod"](30, { standalone: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["m" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["q" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](32, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["n" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["m" /* NgControl */]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](33, 933888, null, 0, __WEBPACK_IMPORTED_MODULE_9__angular_material_input__["b" /* MatInput */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_10__angular_cdk_platform__["a" /* Platform */], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["m" /* NgControl */]], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["p" /* NgForm */]], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* FormGroupDirective */]], __WEBPACK_IMPORTED_MODULE_8__angular_material_core__["d" /* ErrorStateMatcher */], [8, null]], { placeholder: [0, "placeholder"], type: [1, "type"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["i" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["j" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, [[1, 4]], __WEBPACK_IMPORTED_MODULE_7__angular_material_form_field__["b" /* MatFormFieldControl */], null, [__WEBPACK_IMPORTED_MODULE_9__angular_material_input__["b" /* MatInput */]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 1, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](38, 0, null, null, 22, "mat-card-actions", [["class", "mat-card-actions"]], [[2, "mat-card-actions-align-end", null]], null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](39, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_card__["b" /* MatCardActions */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](41, 0, null, null, 4, "button", [["class", "mat-raised-button"], ["color", "primary"], ["id", "nextPage"], ["mat-raised-button", ""], ["type", "submit"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onNext() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_11__node_modules_angular_material_button_typings_index_ngfactory__["d" /* View_MatButton_0 */], __WEBPACK_IMPORTED_MODULE_11__node_modules_angular_material_button_typings_index_ngfactory__["b" /* RenderType_MatButton */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](42, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_material_button__["b" /* MatButton */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_10__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_13__angular_cdk_a11y__["h" /* FocusMonitor */]], { color: [0, "color"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](43, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_material_button__["e" /* MatRaisedButtonCssMatStyler */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](44, 0, ["\n                ", "\n            "])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["i" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["j" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](47, 0, null, null, 5, "a", [["class", "mat-button"], ["mat-button", ""], ["routerLink", "../register"]], [[1, "target", 0], [8, "href", 4], [1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 48).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 49)._haltDisabledEvents($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_11__node_modules_angular_material_button_typings_index_ngfactory__["c" /* View_MatAnchor_0 */], __WEBPACK_IMPORTED_MODULE_11__node_modules_angular_material_button_typings_index_ngfactory__["a" /* RenderType_MatAnchor */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](48, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_14__angular_router__["m" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_14__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_14__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_15__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](49, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_material_button__["a" /* MatAnchor */], [__WEBPACK_IMPORTED_MODULE_10__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_13__angular_cdk_a11y__["h" /* FocusMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](50, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_material_button__["c" /* MatButtonCssMatStyler */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](51, 0, ["", ""])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["i" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["j" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](54, 0, null, null, 5, "a", [["class", "mat-button"], ["mat-button", ""], ["routerLink", "../login"]], [[1, "target", 0], [8, "href", 4], [1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 55).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 56)._haltDisabledEvents($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_11__node_modules_angular_material_button_typings_index_ngfactory__["c" /* View_MatAnchor_0 */], __WEBPACK_IMPORTED_MODULE_11__node_modules_angular_material_button_typings_index_ngfactory__["a" /* RenderType_MatAnchor */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](55, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_14__angular_router__["m" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_14__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_14__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_15__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](56, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_material_button__["a" /* MatAnchor */], [__WEBPACK_IMPORTED_MODULE_10__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_13__angular_cdk_a11y__["h" /* FocusMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](57, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_material_button__["c" /* MatButtonCssMatStyler */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](58, 0, ["", ""])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["i" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["j" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_42 = "50"; _ck(_v, 26, 0, currVal_42); var currVal_43 = "signupEmail"; var currVal_44 = _co.email; var currVal_45 = _ck(_v, 30, 0, true); _ck(_v, 29, 0, currVal_43, currVal_44, currVal_45); var currVal_46 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵinlineInterpolate"](1, "", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 33, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 34).transform("AUTH.FORGOTPASSWORD.EMAIL")), ""); var currVal_47 = "email"; _ck(_v, 33, 0, currVal_46, currVal_47); var currVal_50 = "primary"; _ck(_v, 42, 0, currVal_50); var currVal_57 = "../register"; _ck(_v, 48, 0, currVal_57); var currVal_64 = "../login"; _ck(_v, 55, 0, currVal_64); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 7).ngClassUntouched; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 7).ngClassTouched; var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 7).ngClassPristine; var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 7).ngClassDirty; var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 7).ngClassValid; var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 7).ngClassInvalid; var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 7).ngClassPending; _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 11, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 12).transform("AUTH.FORGOTPASSWORD.TITLE")); _ck(_v, 11, 0, currVal_7); var currVal_8 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15)._control.errorState; var currVal_9 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15)._control.errorState; var currVal_10 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15)._canLabelFloat; var currVal_11 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15)._shouldLabelFloat(); var currVal_12 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15)._hideControlPlaceholder(); var currVal_13 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15)._control.disabled; var currVal_14 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15)._control.focused; var currVal_15 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15).color == "primary"); var currVal_16 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15).color == "accent"); var currVal_17 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15).color == "warn"); var currVal_18 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15)._shouldForward("untouched"); var currVal_19 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15)._shouldForward("touched"); var currVal_20 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15)._shouldForward("pristine"); var currVal_21 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15)._shouldForward("dirty"); var currVal_22 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15)._shouldForward("valid"); var currVal_23 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15)._shouldForward("invalid"); var currVal_24 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15)._shouldForward("pending"); _ck(_v, 14, 1, [currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24]); var currVal_25 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 26).maxlength ? __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 26).maxlength : null); var currVal_26 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 32).ngClassUntouched; var currVal_27 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 32).ngClassTouched; var currVal_28 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 32).ngClassPristine; var currVal_29 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 32).ngClassDirty; var currVal_30 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 32).ngClassValid; var currVal_31 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 32).ngClassInvalid; var currVal_32 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 32).ngClassPending; var currVal_33 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 33)._isServer; var currVal_34 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 33).id; var currVal_35 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 33).placeholder; var currVal_36 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 33).disabled; var currVal_37 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 33).required; var currVal_38 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 33).readonly; var currVal_39 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 33)._ariaDescribedby || null); var currVal_40 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 33).errorState; var currVal_41 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 33).required.toString(); _ck(_v, 24, 1, [currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41]); var currVal_48 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 39).align === "end"); _ck(_v, 38, 0, currVal_48); var currVal_49 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 42).disabled || null); _ck(_v, 41, 0, currVal_49); var currVal_51 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 44, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 45).transform("AUTH.FORGOTPASSWORD.NEXT")); _ck(_v, 44, 0, currVal_51); var currVal_52 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 48).target; var currVal_53 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 48).href; var currVal_54 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 49).disabled ? (0 - 1) : 0); var currVal_55 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 49).disabled || null); var currVal_56 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 49).disabled.toString(); _ck(_v, 47, 0, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56); var currVal_58 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 51, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 52).transform("AUTH.FORGOTPASSWORD.REGISTER")); _ck(_v, 51, 0, currVal_58); var currVal_59 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 55).target; var currVal_60 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 55).href; var currVal_61 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 56).disabled ? (0 - 1) : 0); var currVal_62 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 56).disabled || null); var currVal_63 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 56).disabled.toString(); _ck(_v, 54, 0, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63); var currVal_65 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 58, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 59).transform("AUTH.FORGOTPASSWORD.LOGIN")); _ck(_v, 58, 0, currVal_65); }); }
function View_ForgotPasswordComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "bc-forgot", [], null, null, null, View_ForgotPasswordComponent_0, RenderType_ForgotPasswordComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_16__forgot_password_component__["a" /* ForgotPasswordComponent */], [__WEBPACK_IMPORTED_MODULE_14__angular_router__["l" /* Router */]], null, null)], null, null); }
var ForgotPasswordComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("bc-forgot", __WEBPACK_IMPORTED_MODULE_16__forgot_password_component__["a" /* ForgotPasswordComponent */], View_ForgotPasswordComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/auth/forgot-password/forgot-password.component.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".contain[_ngcontent-%COMP%] {\n  text-align: center; }"];



/***/ }),

/***/ "../../../../../src/app/auth/forgot-password/forgot-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);


var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(router) {
        this.router = router;
        this.error = '';
    }
    ForgotPasswordComponent.prototype.onNext = function () {
        var authx = __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]();
        authx.sendPasswordResetEmail(this.email)
            .then(function () {
            alert(' Email sent');
        }, function (error) {
            alert(error);
        });
    };
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_LoginComponent */
/* unused harmony export View_LoginComponent_0 */
/* unused harmony export View_LoginComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component_scss_shim_ngstyle__ = __webpack_require__("../../../../../src/app/auth/login/login.component.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_material_form_field_typings_index_ngfactory__ = __webpack_require__("../../../material/form-field/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_core__ = __webpack_require__("../../../material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_cdk_platform__ = __webpack_require__("../../../cdk/esm5/platform.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__register_form_register_form_component_ngfactory__ = __webpack_require__("../../../../../src/app/auth/register-form/register-form.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__register_form_register_form_component__ = __webpack_require__("../../../../../src/app/auth/register-form/register-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_material_button_typings_index_ngfactory__ = __webpack_require__("../../../material/button/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_cdk_a11y__ = __webpack_require__("../../../cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__node_modules_angular_material_card_typings_index_ngfactory__ = __webpack_require__("../../../material/card/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




















var styles_LoginComponent = [__WEBPACK_IMPORTED_MODULE_0__login_component_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_LoginComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_LoginComponent, data: {} });

function View_LoginComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 2, "h3", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](1, null, ["\n            ", "\n        "])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["i" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["j" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 1, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).transform("AUTH.LOGIN.TITLE")); _ck(_v, 1, 0, currVal_0); }); }
function View_LoginComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 2, "h3", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](1, null, ["\n            ", "\n        "])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["i" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["j" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 1, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).transform("AUTH.LOGIN.REGISTERTITLE")); _ck(_v, 1, 0, currVal_0); }); }
function View_LoginComponent_4(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 22, "mat-input-container", [["class", "mat-input-container mat-form-field"]], [[2, "mat-input-invalid", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-focused", null], [2, "mat-primary", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_material_form_field_typings_index_ngfactory__["b" /* View_MatFormField_0 */], __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_material_form_field_typings_index_ngfactory__["a" /* RenderType_MatFormField */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 7389184, null, 7, __WEBPACK_IMPORTED_MODULE_4__angular_material_form_field__["a" /* MatFormField */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"], [2, __WEBPACK_IMPORTED_MODULE_5__angular_material_core__["j" /* MAT_LABEL_GLOBAL_OPTIONS */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 1, { _control: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 2, { _placeholderChild: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 3, { _labelChild: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 4, { _errorChildren: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 5, { _hintChildren: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 6, { _prefixChildren: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 7, { _suffixChildren: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 1, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](10, 0, null, 1, 11, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["maxlength", "100"], ["name", "signupEmail"], ["required", ""], ["type", "email"]], [[1, "required", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [8, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [8, "readOnly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 11)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 11).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 11)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 11)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("blur" === en)) {
        var pd_4 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19)._focusChanged(false) !== false);
        ad = (pd_4 && ad);
    } if (("focus" === en)) {
        var pd_5 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19)._focusChanged(true) !== false);
        ad = (pd_5 && ad);
    } if (("input" === en)) {
        var pd_6 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19)._onInput() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.email = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](11, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](12, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["s" /* RequiredValidator */], [], { required: [0, "required"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](13, 540672, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["j" /* MaxLengthValidator */], [], { maxlength: [0, "maxlength"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["k" /* NG_VALIDATORS */], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["s" /* RequiredValidator */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["j" /* MaxLengthValidator */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](16, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["q" /* NgModel */], [[2, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* ControlContainer */]], [2, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["k" /* NG_VALIDATORS */]], [8, null], [2, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["m" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["q" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](18, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["n" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["m" /* NgControl */]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](19, 933888, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_material_input__["b" /* MatInput */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_8__angular_cdk_platform__["a" /* Platform */], [2, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["m" /* NgControl */]], [2, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["p" /* NgForm */]], [2, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* FormGroupDirective */]], __WEBPACK_IMPORTED_MODULE_5__angular_material_core__["d" /* ErrorStateMatcher */], [8, null]], { placeholder: [0, "placeholder"], required: [1, "required"], type: [2, "type"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["i" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["j" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, [[1, 4]], __WEBPACK_IMPORTED_MODULE_4__angular_material_form_field__["b" /* MatFormFieldControl */], null, [__WEBPACK_IMPORTED_MODULE_7__angular_material_input__["b" /* MatInput */]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 1, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_35 = ""; _ck(_v, 12, 0, currVal_35); var currVal_36 = "100"; _ck(_v, 13, 0, currVal_36); var currVal_37 = "signupEmail"; var currVal_38 = _co.email; _ck(_v, 16, 0, currVal_37, currVal_38); var currVal_39 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵinlineInterpolate"](1, "", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 19, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 20).transform("AUTH.LOGIN.EMAIL")), ""); var currVal_40 = ""; var currVal_41 = "email"; _ck(_v, 19, 0, currVal_39, currVal_40, currVal_41); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._control.errorState; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._control.errorState; var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._canLabelFloat; var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._shouldLabelFloat(); var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._hideControlPlaceholder(); var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._control.disabled; var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._control.focused; var currVal_7 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).color == "primary"); var currVal_8 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).color == "accent"); var currVal_9 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).color == "warn"); var currVal_10 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._shouldForward("untouched"); var currVal_11 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._shouldForward("touched"); var currVal_12 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._shouldForward("pristine"); var currVal_13 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._shouldForward("dirty"); var currVal_14 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._shouldForward("valid"); var currVal_15 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._shouldForward("invalid"); var currVal_16 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._shouldForward("pending"); _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16]); var currVal_17 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 12).required ? "" : null); var currVal_18 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 13).maxlength ? __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 13).maxlength : null); var currVal_19 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 18).ngClassUntouched; var currVal_20 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 18).ngClassTouched; var currVal_21 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 18).ngClassPristine; var currVal_22 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 18).ngClassDirty; var currVal_23 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 18).ngClassValid; var currVal_24 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 18).ngClassInvalid; var currVal_25 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 18).ngClassPending; var currVal_26 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19)._isServer; var currVal_27 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19).id; var currVal_28 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19).placeholder; var currVal_29 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19).disabled; var currVal_30 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19).required; var currVal_31 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19).readonly; var currVal_32 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19)._ariaDescribedby || null); var currVal_33 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19).errorState; var currVal_34 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19).required.toString(); _ck(_v, 10, 1, [currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34]); }); }
function View_LoginComponent_5(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 22, "mat-input-container", [["class", "mat-input-container mat-form-field"]], [[2, "mat-input-invalid", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-focused", null], [2, "mat-primary", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_material_form_field_typings_index_ngfactory__["b" /* View_MatFormField_0 */], __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_material_form_field_typings_index_ngfactory__["a" /* RenderType_MatFormField */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 7389184, null, 7, __WEBPACK_IMPORTED_MODULE_4__angular_material_form_field__["a" /* MatFormField */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"], [2, __WEBPACK_IMPORTED_MODULE_5__angular_material_core__["j" /* MAT_LABEL_GLOBAL_OPTIONS */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 8, { _control: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 9, { _placeholderChild: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 10, { _labelChild: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 11, { _errorChildren: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 12, { _hintChildren: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 13, { _prefixChildren: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 14, { _suffixChildren: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 1, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](10, 0, null, 1, 11, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["length", "40"], ["matInput", ""], ["maxlength", "25"], ["name", "signupPassword"], ["required", ""], ["type", "password"]], [[1, "required", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [8, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [8, "readOnly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 11)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 11).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 11)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 11)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("blur" === en)) {
        var pd_4 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19)._focusChanged(false) !== false);
        ad = (pd_4 && ad);
    } if (("focus" === en)) {
        var pd_5 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19)._focusChanged(true) !== false);
        ad = (pd_5 && ad);
    } if (("input" === en)) {
        var pd_6 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19)._onInput() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.password = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](11, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](12, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["s" /* RequiredValidator */], [], { required: [0, "required"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](13, 540672, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["j" /* MaxLengthValidator */], [], { maxlength: [0, "maxlength"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["k" /* NG_VALIDATORS */], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["s" /* RequiredValidator */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["j" /* MaxLengthValidator */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](16, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["q" /* NgModel */], [[2, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* ControlContainer */]], [2, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["k" /* NG_VALIDATORS */]], [8, null], [2, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["m" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["q" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](18, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["n" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["m" /* NgControl */]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](19, 933888, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_material_input__["b" /* MatInput */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_8__angular_cdk_platform__["a" /* Platform */], [2, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["m" /* NgControl */]], [2, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["p" /* NgForm */]], [2, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* FormGroupDirective */]], __WEBPACK_IMPORTED_MODULE_5__angular_material_core__["d" /* ErrorStateMatcher */], [8, null]], { placeholder: [0, "placeholder"], required: [1, "required"], type: [2, "type"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["i" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["j" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, [[8, 4]], __WEBPACK_IMPORTED_MODULE_4__angular_material_form_field__["b" /* MatFormFieldControl */], null, [__WEBPACK_IMPORTED_MODULE_7__angular_material_input__["b" /* MatInput */]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 1, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_35 = ""; _ck(_v, 12, 0, currVal_35); var currVal_36 = "25"; _ck(_v, 13, 0, currVal_36); var currVal_37 = "signupPassword"; var currVal_38 = _co.password; _ck(_v, 16, 0, currVal_37, currVal_38); var currVal_39 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵinlineInterpolate"](1, "", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 19, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 20).transform("AUTH.LOGIN.PASSWORD")), ""); var currVal_40 = ""; var currVal_41 = "password"; _ck(_v, 19, 0, currVal_39, currVal_40, currVal_41); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._control.errorState; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._control.errorState; var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._canLabelFloat; var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._shouldLabelFloat(); var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._hideControlPlaceholder(); var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._control.disabled; var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._control.focused; var currVal_7 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).color == "primary"); var currVal_8 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).color == "accent"); var currVal_9 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).color == "warn"); var currVal_10 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._shouldForward("untouched"); var currVal_11 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._shouldForward("touched"); var currVal_12 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._shouldForward("pristine"); var currVal_13 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._shouldForward("dirty"); var currVal_14 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._shouldForward("valid"); var currVal_15 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._shouldForward("invalid"); var currVal_16 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._shouldForward("pending"); _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16]); var currVal_17 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 12).required ? "" : null); var currVal_18 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 13).maxlength ? __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 13).maxlength : null); var currVal_19 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 18).ngClassUntouched; var currVal_20 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 18).ngClassTouched; var currVal_21 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 18).ngClassPristine; var currVal_22 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 18).ngClassDirty; var currVal_23 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 18).ngClassValid; var currVal_24 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 18).ngClassInvalid; var currVal_25 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 18).ngClassPending; var currVal_26 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19)._isServer; var currVal_27 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19).id; var currVal_28 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19).placeholder; var currVal_29 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19).disabled; var currVal_30 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19).required; var currVal_31 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19).readonly; var currVal_32 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19)._ariaDescribedby || null); var currVal_33 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19).errorState; var currVal_34 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19).required.toString(); _ck(_v, 10, 1, [currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34]); }); }
function View_LoginComponent_6(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "bc-register-form", [], null, null, null, __WEBPACK_IMPORTED_MODULE_9__register_form_register_form_component_ngfactory__["b" /* View_RegisterFormComponent_0 */], __WEBPACK_IMPORTED_MODULE_9__register_form_register_form_component_ngfactory__["a" /* RenderType_RegisterFormComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 573440, null, 0, __WEBPACK_IMPORTED_MODULE_10__register_form_register_form_component__["a" /* RegisterFormComponent */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__["a" /* AngularFireAuth */]], null, null)], null, null); }
function View_LoginComponent_7(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](1, null, ["", ""])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["i" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["j" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 1, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).transform("AUTH.LOGIN.ERRORFORGOT")); _ck(_v, 1, 0, currVal_0); }); }
function View_LoginComponent_8(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](1, null, ["", ""])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["i" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["j" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 1, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).transform("AUTH.LOGIN.ERRORALREADYREGISTERED")); _ck(_v, 1, 0, currVal_0); }); }
function View_LoginComponent_9(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](1, null, ["", ""])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["i" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["j" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 1, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).transform("AUTH.LOGIN.ERRORPASSWORD")); _ck(_v, 1, 0, currVal_0); }); }
function View_LoginComponent_10(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](1, null, ["", ""])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["i" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["j" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 1, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).transform("AUTH.LOGIN.ERRORINCORRECT")); _ck(_v, 1, 0, currVal_0); }); }
function View_LoginComponent_11(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](1, null, ["", ""])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["i" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["j" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 1, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).transform("AUTH.LOGIN.ERRORINCOMPLETE")); _ck(_v, 1, 0, currVal_0); }); }
function View_LoginComponent_12(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](1, null, ["", ""])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["i" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["j" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 1, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).transform("AUTH.LOGIN.ERRORREGISTER")); _ck(_v, 1, 0, currVal_0); }); }
function View_LoginComponent_13(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](1, null, ["", ""])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["i" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["j" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 1, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).transform("AUTH.LOGIN.ERROR")); _ck(_v, 1, 0, currVal_0); }); }
function View_LoginComponent_14(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](1, null, ["", ""])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["i" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["j" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 1, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).transform("AUTH.LOGIN.ERROREMAIL")); _ck(_v, 1, 0, currVal_0); }); }
function View_LoginComponent_15(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 4, "button", [["class", "mat-raised-button"], ["color", "primary"], ["id", "signupSubmit"], ["mat-raised-button", ""], ["type", "submit"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onLogin() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_material_button_typings_index_ngfactory__["d" /* View_MatButton_0 */], __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_material_button_typings_index_ngfactory__["b" /* RenderType_MatButton */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_material_button__["b" /* MatButton */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_8__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_14__angular_cdk_a11y__["h" /* FocusMonitor */]], { color: [0, "color"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](2, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_material_button__["e" /* MatRaisedButtonCssMatStyler */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](3, 0, ["\n                ", "\n            "])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["i" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["j" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]])], function (_ck, _v) { var currVal_1 = "primary"; _ck(_v, 1, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).disabled || null); _ck(_v, 0, 0, currVal_0); var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 3, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 4).transform("AUTH.LOGIN.LOGIN")); _ck(_v, 3, 0, currVal_2); }); }
function View_LoginComponent_16(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 7, "a", [["class", "mat-button"], ["mat-button", ""]], [[1, "target", 0], [8, "href", 4], [1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 4)._haltDisabledEvents($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_material_button_typings_index_ngfactory__["c" /* View_MatAnchor_0 */], __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_material_button_typings_index_ngfactory__["a" /* RenderType_MatAnchor */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_15__angular_router__["m" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_15__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_15__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_16__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpod"](2, { redirectUrl: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpad"](3, 2), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](4, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_material_button__["a" /* MatAnchor */], [__WEBPACK_IMPORTED_MODULE_8__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_14__angular_cdk_a11y__["h" /* FocusMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](5, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_material_button__["c" /* MatButtonCssMatStyler */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](6, 0, ["\n                ", ""])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["i" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["j" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]])], function (_ck, _v) { var currVal_5 = _ck(_v, 3, 0, "../register", _ck(_v, 2, 0, "/subscriptions/cart")); _ck(_v, 1, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).target; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).href; var currVal_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 4).disabled ? (0 - 1) : 0); var currVal_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 4).disabled || null); var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 4).disabled.toString(); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 6, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 7).transform("AUTH.LOGIN.REGISTER")); _ck(_v, 6, 0, currVal_6); }); }
function View_LoginComponent_17(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 5, "a", [["class", "mat-button"], ["mat-button", ""], ["routerLink", "../forgot"]], [[1, "target", 0], [8, "href", 4], [1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2)._haltDisabledEvents($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_material_button_typings_index_ngfactory__["c" /* View_MatAnchor_0 */], __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_material_button_typings_index_ngfactory__["a" /* RenderType_MatAnchor */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_15__angular_router__["m" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_15__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_15__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_16__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](2, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_material_button__["a" /* MatAnchor */], [__WEBPACK_IMPORTED_MODULE_8__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_14__angular_cdk_a11y__["h" /* FocusMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](3, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_material_button__["c" /* MatButtonCssMatStyler */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](4, 0, ["\n                ", ""])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["i" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["j" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]])], function (_ck, _v) { var currVal_5 = "../forgot"; _ck(_v, 1, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).target; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).href; var currVal_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).disabled ? (0 - 1) : 0); var currVal_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).disabled || null); var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).disabled.toString(); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 4, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 5).transform("AUTH.LOGIN.FORGOT")); _ck(_v, 4, 0, currVal_6); }); }
function View_LoginComponent_18(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 4, "button", [["class", "mat-raised-button"], ["color", "primary"], ["mat-raised-button", ""], ["type", "submit"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onRegister() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_material_button_typings_index_ngfactory__["d" /* View_MatButton_0 */], __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_material_button_typings_index_ngfactory__["b" /* RenderType_MatButton */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_material_button__["b" /* MatButton */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_8__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_14__angular_cdk_a11y__["h" /* FocusMonitor */]], { color: [0, "color"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](2, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_material_button__["e" /* MatRaisedButtonCssMatStyler */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](3, 0, ["\n                ", "\n            "])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["i" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["j" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]])], function (_ck, _v) { var currVal_1 = "primary"; _ck(_v, 1, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).disabled || null); _ck(_v, 0, 0, currVal_0); var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 3, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 4).transform("AUTH.LOGIN.REGISTERSUBMIT")); _ck(_v, 3, 0, currVal_2); }); }
function View_LoginComponent_19(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 7, "a", [["class", "mat-button"], ["mat-button", ""]], [[1, "target", 0], [8, "href", 4], [1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 4)._haltDisabledEvents($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_material_button_typings_index_ngfactory__["c" /* View_MatAnchor_0 */], __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_material_button_typings_index_ngfactory__["a" /* RenderType_MatAnchor */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_15__angular_router__["m" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_15__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_15__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_16__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpod"](2, { redirectUrl: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpad"](3, 2), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](4, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_material_button__["a" /* MatAnchor */], [__WEBPACK_IMPORTED_MODULE_8__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_14__angular_cdk_a11y__["h" /* FocusMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](5, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_material_button__["c" /* MatButtonCssMatStyler */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](6, 0, ["\n                ", ""])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["i" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["j" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]])], function (_ck, _v) { var currVal_5 = _ck(_v, 3, 0, "../login", _ck(_v, 2, 0, "/subscriptions/cart")); _ck(_v, 1, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).target; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).href; var currVal_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 4).disabled ? (0 - 1) : 0); var currVal_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 4).disabled || null); var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 4).disabled.toString(); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 6, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 7).transform("AUTH.LOGIN.ALREADYHAVEACCOUNT")); _ck(_v, 6, 0, currVal_6); }); }
function View_LoginComponent_20(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 4, "button", [["class", "mat-raised-button"], ["mat-raised-button", ""]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.dialog.closeAll() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_material_button_typings_index_ngfactory__["d" /* View_MatButton_0 */], __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_material_button_typings_index_ngfactory__["b" /* RenderType_MatButton */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_material_button__["b" /* MatButton */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_8__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_14__angular_cdk_a11y__["h" /* FocusMonitor */]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](2, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_material_button__["e" /* MatRaisedButtonCssMatStyler */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](3, 0, ["\n                ", "\n            "])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["i" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["j" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).disabled || null); _ck(_v, 0, 0, currVal_0); var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 3, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 4).transform("AUTH.LOGIN.CANCEL")); _ck(_v, 3, 0, currVal_1); }); }
function View_LoginComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 85, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["v" /* ɵbf */], [], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](2, 4210688, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["p" /* NgForm */], [[8, null], [8, null]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* ControlContainer */], null, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["p" /* NgForm */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](4, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["o" /* NgControlStatusGroup */], [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* ControlContainer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_2)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](7, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_16__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_3)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](10, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_16__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](12, 0, null, null, 2, "h4", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](13, null, ["", ""])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["i" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["j" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](16, 0, null, null, 13, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](17, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_17__angular_material_card__["c" /* MatCardContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_4)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](20, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_16__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](22, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_5)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](25, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_16__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_6)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](28, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_16__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](31, 0, null, null, 53, "mat-card-actions", [["class", "mat-card-actions"]], [[2, "mat-card-actions-align-end", null]], null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](32, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_17__angular_material_card__["b" /* MatCardActions */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](34, 0, null, null, 25, "span", [["class", "alert alert-danger"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_7)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](37, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_16__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_8)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](40, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_16__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_9)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](43, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_16__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_10)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](46, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_16__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_11)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](49, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_16__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_12)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](52, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_16__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_13)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](55, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_16__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_14)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](58, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_16__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](61, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_15)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](64, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_16__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_16)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](67, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_16__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](68, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_17)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](71, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_16__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_18)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](74, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_16__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](76, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_19)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](79, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_16__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](80, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_20)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](83, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_16__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = ((_co.router.url.indexOf("register") == (0 - 1)) && !_co.isRegister); _ck(_v, 7, 0, currVal_7); var currVal_8 = ((_co.router.url.indexOf("register") > (0 - 1)) || _co.isRegister); _ck(_v, 10, 0, currVal_8); var currVal_10 = _co.isLogin; _ck(_v, 20, 0, currVal_10); var currVal_11 = _co.isLogin; _ck(_v, 25, 0, currVal_11); var currVal_12 = _co.isRegister; _ck(_v, 28, 0, currVal_12); var currVal_14 = (_co.message === "FORGOT"); _ck(_v, 37, 0, currVal_14); var currVal_15 = (_co.message === "ALREADYREGISTERED"); _ck(_v, 40, 0, currVal_15); var currVal_16 = (_co.message === "PASSWORD"); _ck(_v, 43, 0, currVal_16); var currVal_17 = (_co.message === "INCORRECT"); _ck(_v, 46, 0, currVal_17); var currVal_18 = (_co.message === "INCOMPLETE"); _ck(_v, 49, 0, currVal_18); var currVal_19 = (_co.message === "REGISTERERROR"); _ck(_v, 52, 0, currVal_19); var currVal_20 = (_co.message === "ERROR"); _ck(_v, 55, 0, currVal_20); var currVal_21 = (_co.message === "EMAIL"); _ck(_v, 58, 0, currVal_21); var currVal_22 = _co.isLogin; _ck(_v, 64, 0, currVal_22); var currVal_23 = _co.isLogin; _ck(_v, 67, 0, currVal_23); var currVal_24 = _co.isLogin; _ck(_v, 71, 0, currVal_24); var currVal_25 = _co.isRegister; _ck(_v, 74, 0, currVal_25); var currVal_26 = _co.isRegister; _ck(_v, 79, 0, currVal_26); var currVal_27 = (!_co.isLogin && !_co.isRegister); _ck(_v, 83, 0, currVal_27); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 4).ngClassUntouched; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 4).ngClassTouched; var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 4).ngClassPristine; var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 4).ngClassDirty; var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 4).ngClassValid; var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 4).ngClassInvalid; var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 4).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_9 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 13, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 14).transform("AUTH.LOGIN.SUBTITLE")); _ck(_v, 13, 0, currVal_9); var currVal_13 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 32).align === "end"); _ck(_v, 31, 0, currVal_13); }); }
function View_LoginComponent_21(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 12, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](1, null, ["\n        ", "\n        "])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpod"](2, { first: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["i" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["j" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](4, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](6, 0, null, null, 5, "a", [["class", "mat-raised-button"], ["mat-raised-button", ""], ["routerLink", "/auth/logout"]], [[1, "target", 0], [8, "href", 4], [1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 7).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 8)._haltDisabledEvents($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_material_button_typings_index_ngfactory__["c" /* View_MatAnchor_0 */], __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_material_button_typings_index_ngfactory__["a" /* RenderType_MatAnchor */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](7, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_15__angular_router__["m" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_15__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_15__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_16__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](8, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_material_button__["a" /* MatAnchor */], [__WEBPACK_IMPORTED_MODULE_8__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_14__angular_cdk_a11y__["h" /* FocusMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](9, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_material_button__["e" /* MatRaisedButtonCssMatStyler */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](10, 0, ["\n            ", "\n        "])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["i" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["j" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "]))], function (_ck, _v) { var currVal_6 = "/auth/logout"; _ck(_v, 7, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 1, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3).transform("AUTH.LOGIN.ALREADYLOGGED", _ck(_v, 2, 0, _co.auth.displayName))); _ck(_v, 1, 0, currVal_0); var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 7).target; var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 7).href; var currVal_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 8).disabled ? (0 - 1) : 0); var currVal_4 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 8).disabled || null); var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 8).disabled.toString(); _ck(_v, 6, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_7 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 10, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 11).transform("AUTH.LOGIN.LOGOUT")); _ck(_v, 10, 0, currVal_7); }); }
function View_LoginComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 8, "mat-card", [["class", "contain mat-card"]], null, null, null, __WEBPACK_IMPORTED_MODULE_18__node_modules_angular_material_card_typings_index_ngfactory__["b" /* View_MatCard_0 */], __WEBPACK_IMPORTED_MODULE_18__node_modules_angular_material_card_typings_index_ngfactory__["a" /* RenderType_MatCard */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_17__angular_material_card__["a" /* MatCard */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, 0, 1, null, View_LoginComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](4, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_16__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, 0, 1, null, View_LoginComponent_21)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](7, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_16__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.fireAuth.auth.currentUser; _ck(_v, 4, 0, currVal_0); var currVal_1 = _co.fireAuth.auth.currentUser; _ck(_v, 7, 0, currVal_1); }, null); }
function View_LoginComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "bc-login-page", [], null, null, null, View_LoginComponent_0, RenderType_LoginComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 4243456, null, 0, __WEBPACK_IMPORTED_MODULE_19__login_component__["a" /* LoginComponent */], [__WEBPACK_IMPORTED_MODULE_15__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__["a" /* AngularFireAuth */]], null, null)], null, null); }
var LoginComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("bc-login-page", __WEBPACK_IMPORTED_MODULE_19__login_component__["a" /* LoginComponent */], View_LoginComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["[mat-dialog-title][_ngcontent-%COMP%] {\n  text-align: center; }\n\nmat-dialog-actions[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0 auto;\n  display: block;\n  width: 100%; }\n\n.contain[_ngcontent-%COMP%] {\n  text-align: center; }\n\nh3[_ngcontent-%COMP%] {\n  margin-top: 0; }"];



/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_let__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/let.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, ref, fireAuth) {
        this.router = router;
        this.ref = ref;
        this.fireAuth = fireAuth;
        this.isLogin = false;
        this.isRegister = false;
        if (this.router.url.indexOf('register') > -1) {
            this.isRegister = true;
            this.isLogin = false;
        }
        else {
            this.isRegister = false;
            this.isLogin = true;
        }
    }
    LoginComponent.prototype.ngAfterViewInit = function () {
        if (this.router.url.indexOf('forgot') > -1) {
            this.communicateError('FORGOT');
        }
        if (this.router.url.indexOf('redirectUrl') > -1) {
            this.redirectUrl = decodeURIComponent(this.router.url.substr(this.router.url.indexOf('redirectUrl')
                + 'redirectUrl='.length));
        }
    };
    LoginComponent.prototype.onRegister = function () {
        this.fireAuth.auth.createUserWithEmailAndPassword(this.email, this.password);
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        try {
            this.fireAuth.auth.signInWithEmailAndPassword(this.email, this.password)
                .catch(function (e) { return _this.communicateError('Error logging in: ' + e.toString()); });
        }
        catch (e) {
            this.communicateError('Error logging in: ' + e.toString());
        }
    };
    LoginComponent.prototype.loginGoogle = function () {
        this.fireAuth.auth.signInWithRedirect(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider());
    };
    LoginComponent.prototype.loginTwitter = function () {
        this.fireAuth.auth.signInWithRedirect(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].TwitterAuthProvider());
    };
    LoginComponent.prototype.loginFacebook = function () {
        this.fireAuth.auth.signInWithRedirect(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].FacebookAuthProvider());
    };
    LoginComponent.prototype.communicateError = function (msg) {
        this.message = msg;
        this.ref.detectChanges();
    };
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/logout/logout.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_LogoutComponent */
/* unused harmony export View_LogoutComponent_0 */
/* unused harmony export View_LogoutComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logout_component__ = __webpack_require__("../../../../../src/app/auth/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_LogoutComponent = [];
var RenderType_LogoutComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcrt"]({ encapsulation: 2, styles: styles_LogoutComponent, data: {} });

function View_LogoutComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [], null, null); }
function View_LogoutComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "bc-logout", [], null, null, null, View_LogoutComponent_0, RenderType_LogoutComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_1__logout_component__["a" /* LogoutComponent */], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["l" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LogoutComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵccf"]("bc-logout", __WEBPACK_IMPORTED_MODULE_1__logout_component__["a" /* LogoutComponent */], View_LogoutComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/auth/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");


var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(router) {
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/'], { replaceUrl: true });
    };
    return LogoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/register-form/register-form.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_RegisterFormComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_RegisterFormComponent_0;
/* unused harmony export View_RegisterFormComponent_Host_0 */
/* unused harmony export RegisterFormComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register_form_component_scss_shim_ngstyle__ = __webpack_require__("../../../../../src/app/auth/register-form/register-form.component.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_form_field_typings_index_ngfactory__ = __webpack_require__("../../../material/form-field/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_core__ = __webpack_require__("../../../material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_cdk_platform__ = __webpack_require__("../../../cdk/esm5/platform.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__register_form_component__ = __webpack_require__("../../../../../src/app/auth/register-form/register-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 












var styles_RegisterFormComponent = [__WEBPACK_IMPORTED_MODULE_0__register_form_component_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_RegisterFormComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_RegisterFormComponent, data: {} });

function View_RegisterFormComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 22, "mat-input-container", [["class", "mat-input-container mat-form-field"]], [[2, "mat-input-invalid", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-focused", null], [2, "mat-primary", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_form_field_typings_index_ngfactory__["b" /* View_MatFormField_0 */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_form_field_typings_index_ngfactory__["a" /* RenderType_MatFormField */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 7389184, null, 7, __WEBPACK_IMPORTED_MODULE_3__angular_material_form_field__["a" /* MatFormField */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"], [2, __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["j" /* MAT_LABEL_GLOBAL_OPTIONS */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 15, { _control: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 16, { _placeholderChild: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 17, { _labelChild: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 18, { _errorChildren: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 19, { _hintChildren: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 20, { _prefixChildren: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 21, { _suffixChildren: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 1, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](10, 0, null, 1, 11, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["maxlength", "50"], ["name", "email"], ["required", ""], ["type", "email"]], [[1, "required", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [8, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [8, "readOnly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 11)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 11).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 11)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 11)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("blur" === en)) {
        var pd_4 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19)._focusChanged(false) !== false);
        ad = (pd_4 && ad);
    } if (("focus" === en)) {
        var pd_5 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19)._focusChanged(true) !== false);
        ad = (pd_5 && ad);
    } if (("input" === en)) {
        var pd_6 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19)._onInput() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.email = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](11, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](12, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["s" /* RequiredValidator */], [], { required: [0, "required"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](13, 540672, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* MaxLengthValidator */], [], { maxlength: [0, "maxlength"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* NG_VALIDATORS */], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["s" /* RequiredValidator */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* MaxLengthValidator */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](16, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["q" /* NgModel */], [[8, null], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* NG_VALIDATORS */]], [8, null], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["m" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["q" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](18, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["m" /* NgControl */]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](19, 933888, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_material_input__["b" /* MatInput */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_7__angular_cdk_platform__["a" /* Platform */], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["m" /* NgControl */]], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["p" /* NgForm */]], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* FormGroupDirective */]], __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["d" /* ErrorStateMatcher */], [8, null]], { placeholder: [0, "placeholder"], required: [1, "required"], type: [2, "type"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["i" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["j" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, [[15, 4]], __WEBPACK_IMPORTED_MODULE_3__angular_material_form_field__["b" /* MatFormFieldControl */], null, [__WEBPACK_IMPORTED_MODULE_6__angular_material_input__["b" /* MatInput */]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 1, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_35 = ""; _ck(_v, 12, 0, currVal_35); var currVal_36 = "50"; _ck(_v, 13, 0, currVal_36); var currVal_37 = "email"; var currVal_38 = _co.email; _ck(_v, 16, 0, currVal_37, currVal_38); var currVal_39 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵinlineInterpolate"](1, "", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 19, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 20).transform("AUTH.REGISTERFORM.EMAIL")), ""); var currVal_40 = ""; var currVal_41 = "email"; _ck(_v, 19, 0, currVal_39, currVal_40, currVal_41); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._control.errorState; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._control.errorState; var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._canLabelFloat; var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._shouldLabelFloat(); var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._hideControlPlaceholder(); var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._control.disabled; var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._control.focused; var currVal_7 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).color == "primary"); var currVal_8 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).color == "accent"); var currVal_9 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).color == "warn"); var currVal_10 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._shouldForward("untouched"); var currVal_11 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._shouldForward("touched"); var currVal_12 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._shouldForward("pristine"); var currVal_13 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._shouldForward("dirty"); var currVal_14 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._shouldForward("valid"); var currVal_15 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._shouldForward("invalid"); var currVal_16 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._shouldForward("pending"); _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16]); var currVal_17 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 12).required ? "" : null); var currVal_18 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 13).maxlength ? __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 13).maxlength : null); var currVal_19 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 18).ngClassUntouched; var currVal_20 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 18).ngClassTouched; var currVal_21 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 18).ngClassPristine; var currVal_22 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 18).ngClassDirty; var currVal_23 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 18).ngClassValid; var currVal_24 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 18).ngClassInvalid; var currVal_25 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 18).ngClassPending; var currVal_26 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19)._isServer; var currVal_27 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19).id; var currVal_28 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19).placeholder; var currVal_29 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19).disabled; var currVal_30 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19).required; var currVal_31 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19).readonly; var currVal_32 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19)._ariaDescribedby || null); var currVal_33 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19).errorState; var currVal_34 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19).required.toString(); _ck(_v, 10, 1, [currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34]); }); }
function View_RegisterFormComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 0, "br", [], null, null, null, null, null))], null, null); }
function View_RegisterFormComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 22, "mat-input-container", [["class", "mat-input-container mat-form-field"]], [[2, "mat-input-invalid", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-focused", null], [2, "mat-primary", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_form_field_typings_index_ngfactory__["b" /* View_MatFormField_0 */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_form_field_typings_index_ngfactory__["a" /* RenderType_MatFormField */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 7389184, null, 7, __WEBPACK_IMPORTED_MODULE_3__angular_material_form_field__["a" /* MatFormField */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"], [2, __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["j" /* MAT_LABEL_GLOBAL_OPTIONS */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 22, { _control: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 23, { _placeholderChild: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 24, { _labelChild: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 25, { _errorChildren: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 26, { _hintChildren: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 27, { _prefixChildren: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 28, { _suffixChildren: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 1, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](10, 0, null, 1, 11, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["maxlength", "50"], ["name", "password"], ["required", ""], ["type", "password"]], [[1, "required", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [8, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [8, "readOnly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 11)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 11).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 11)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 11)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("blur" === en)) {
        var pd_4 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19)._focusChanged(false) !== false);
        ad = (pd_4 && ad);
    } if (("focus" === en)) {
        var pd_5 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19)._focusChanged(true) !== false);
        ad = (pd_5 && ad);
    } if (("input" === en)) {
        var pd_6 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19)._onInput() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.password = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](11, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](12, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["s" /* RequiredValidator */], [], { required: [0, "required"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](13, 540672, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* MaxLengthValidator */], [], { maxlength: [0, "maxlength"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* NG_VALIDATORS */], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["s" /* RequiredValidator */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* MaxLengthValidator */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](16, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["q" /* NgModel */], [[8, null], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* NG_VALIDATORS */]], [8, null], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["m" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["q" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](18, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["m" /* NgControl */]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](19, 933888, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_material_input__["b" /* MatInput */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_7__angular_cdk_platform__["a" /* Platform */], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["m" /* NgControl */]], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["p" /* NgForm */]], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* FormGroupDirective */]], __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["d" /* ErrorStateMatcher */], [8, null]], { placeholder: [0, "placeholder"], required: [1, "required"], type: [2, "type"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["i" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["j" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, [[22, 4]], __WEBPACK_IMPORTED_MODULE_3__angular_material_form_field__["b" /* MatFormFieldControl */], null, [__WEBPACK_IMPORTED_MODULE_6__angular_material_input__["b" /* MatInput */]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 1, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_35 = ""; _ck(_v, 12, 0, currVal_35); var currVal_36 = "50"; _ck(_v, 13, 0, currVal_36); var currVal_37 = "password"; var currVal_38 = _co.password; _ck(_v, 16, 0, currVal_37, currVal_38); var currVal_39 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵinlineInterpolate"](1, "", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 19, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 20).transform("AUTH.REGISTERFORM.PASSWORD")), ""); var currVal_40 = ""; var currVal_41 = "password"; _ck(_v, 19, 0, currVal_39, currVal_40, currVal_41); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._control.errorState; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._control.errorState; var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._canLabelFloat; var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._shouldLabelFloat(); var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._hideControlPlaceholder(); var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._control.disabled; var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._control.focused; var currVal_7 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).color == "primary"); var currVal_8 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).color == "accent"); var currVal_9 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1).color == "warn"); var currVal_10 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._shouldForward("untouched"); var currVal_11 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._shouldForward("touched"); var currVal_12 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._shouldForward("pristine"); var currVal_13 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._shouldForward("dirty"); var currVal_14 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._shouldForward("valid"); var currVal_15 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._shouldForward("invalid"); var currVal_16 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 1)._shouldForward("pending"); _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16]); var currVal_17 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 12).required ? "" : null); var currVal_18 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 13).maxlength ? __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 13).maxlength : null); var currVal_19 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 18).ngClassUntouched; var currVal_20 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 18).ngClassTouched; var currVal_21 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 18).ngClassPristine; var currVal_22 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 18).ngClassDirty; var currVal_23 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 18).ngClassValid; var currVal_24 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 18).ngClassInvalid; var currVal_25 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 18).ngClassPending; var currVal_26 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19)._isServer; var currVal_27 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19).id; var currVal_28 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19).placeholder; var currVal_29 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19).disabled; var currVal_30 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19).required; var currVal_31 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19).readonly; var currVal_32 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19)._ariaDescribedby || null); var currVal_33 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19).errorState; var currVal_34 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 19).required.toString(); _ck(_v, 10, 1, [currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34]); }); }
function View_RegisterFormComponent_4(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 0, "br", [], null, null, null, null, null))], null, null); }
function View_RegisterFormComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 89, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 22, "mat-input-container", [["class", "mat-input-container mat-form-field"]], [[2, "mat-input-invalid", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-focused", null], [2, "mat-primary", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_form_field_typings_index_ngfactory__["b" /* View_MatFormField_0 */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_form_field_typings_index_ngfactory__["a" /* RenderType_MatFormField */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](3, 7389184, null, 7, __WEBPACK_IMPORTED_MODULE_3__angular_material_form_field__["a" /* MatFormField */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"], [2, __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["j" /* MAT_LABEL_GLOBAL_OPTIONS */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 1, { _control: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 2, { _placeholderChild: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 3, { _labelChild: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 4, { _errorChildren: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 5, { _hintChildren: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 6, { _prefixChildren: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 7, { _suffixChildren: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 1, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](12, 0, null, 1, 11, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["maxlength", "50"], ["name", "firstName"], ["required", ""], ["type", "text"]], [[1, "required", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [8, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [8, "readOnly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 13)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 13).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 13)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 13)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("blur" === en)) {
        var pd_4 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 21)._focusChanged(false) !== false);
        ad = (pd_4 && ad);
    } if (("focus" === en)) {
        var pd_5 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 21)._focusChanged(true) !== false);
        ad = (pd_5 && ad);
    } if (("input" === en)) {
        var pd_6 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 21)._onInput() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.displayName = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](13, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](14, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["s" /* RequiredValidator */], [], { required: [0, "required"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](15, 540672, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* MaxLengthValidator */], [], { maxlength: [0, "maxlength"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* NG_VALIDATORS */], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["s" /* RequiredValidator */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* MaxLengthValidator */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](18, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["q" /* NgModel */], [[8, null], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* NG_VALIDATORS */]], [8, null], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["m" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["q" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](20, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["m" /* NgControl */]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](21, 933888, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_material_input__["b" /* MatInput */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_7__angular_cdk_platform__["a" /* Platform */], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["m" /* NgControl */]], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["p" /* NgForm */]], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* FormGroupDirective */]], __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["d" /* ErrorStateMatcher */], [8, null]], { placeholder: [0, "placeholder"], required: [1, "required"], type: [2, "type"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["i" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["j" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, [[1, 4]], __WEBPACK_IMPORTED_MODULE_3__angular_material_form_field__["b" /* MatFormFieldControl */], null, [__WEBPACK_IMPORTED_MODULE_6__angular_material_input__["b" /* MatInput */]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 1, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](26, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](28, 0, null, null, 22, "mat-input-container", [["class", "mat-input-container mat-form-field"]], [[2, "mat-input-invalid", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-focused", null], [2, "mat-primary", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_form_field_typings_index_ngfactory__["b" /* View_MatFormField_0 */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_form_field_typings_index_ngfactory__["a" /* RenderType_MatFormField */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](29, 7389184, null, 7, __WEBPACK_IMPORTED_MODULE_3__angular_material_form_field__["a" /* MatFormField */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"], [2, __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["j" /* MAT_LABEL_GLOBAL_OPTIONS */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 8, { _control: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 9, { _placeholderChild: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 10, { _labelChild: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 11, { _errorChildren: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 12, { _hintChildren: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 13, { _prefixChildren: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 14, { _suffixChildren: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 1, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](38, 0, null, 1, 11, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["maxlength", "50"], ["name", "lastName"], ["required", ""], ["type", "text"]], [[1, "required", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [8, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [8, "readOnly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 39)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 39).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 39)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 39)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("blur" === en)) {
        var pd_4 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 47)._focusChanged(false) !== false);
        ad = (pd_4 && ad);
    } if (("focus" === en)) {
        var pd_5 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 47)._focusChanged(true) !== false);
        ad = (pd_5 && ad);
    } if (("input" === en)) {
        var pd_6 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 47)._onInput() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.displayName = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](39, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](40, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["s" /* RequiredValidator */], [], { required: [0, "required"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](41, 540672, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* MaxLengthValidator */], [], { maxlength: [0, "maxlength"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* NG_VALIDATORS */], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["s" /* RequiredValidator */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* MaxLengthValidator */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](44, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["q" /* NgModel */], [[8, null], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* NG_VALIDATORS */]], [8, null], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["m" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["q" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](46, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["m" /* NgControl */]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](47, 933888, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_material_input__["b" /* MatInput */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_7__angular_cdk_platform__["a" /* Platform */], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["m" /* NgControl */]], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["p" /* NgForm */]], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* FormGroupDirective */]], __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["d" /* ErrorStateMatcher */], [8, null]], { placeholder: [0, "placeholder"], required: [1, "required"], type: [2, "type"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["i" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["j" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, [[8, 4]], __WEBPACK_IMPORTED_MODULE_3__angular_material_form_field__["b" /* MatFormFieldControl */], null, [__WEBPACK_IMPORTED_MODULE_6__angular_material_input__["b" /* MatInput */]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 1, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](52, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_RegisterFormComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](55, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_9__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_RegisterFormComponent_2)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](58, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_9__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_RegisterFormComponent_3)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](61, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_9__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_RegisterFormComponent_4)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](64, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_9__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](66, 0, null, null, 22, "mat-input-container", [["class", "mat-input-container mat-form-field"]], [[2, "mat-input-invalid", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-focused", null], [2, "mat-primary", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_form_field_typings_index_ngfactory__["b" /* View_MatFormField_0 */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_form_field_typings_index_ngfactory__["a" /* RenderType_MatFormField */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](67, 7389184, null, 7, __WEBPACK_IMPORTED_MODULE_3__angular_material_form_field__["a" /* MatFormField */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"], [2, __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["j" /* MAT_LABEL_GLOBAL_OPTIONS */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 29, { _control: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 30, { _placeholderChild: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 31, { _labelChild: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 32, { _errorChildren: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 33, { _hintChildren: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 34, { _prefixChildren: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 35, { _suffixChildren: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 1, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](76, 0, null, 1, 11, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["length", "40"], ["matInput", ""], ["maxlength", "25"], ["name", "phoneNumber"], ["required", ""], ["type", "tel"]], [[1, "required", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [8, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [8, "readOnly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 77)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 77).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 77)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 77)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("blur" === en)) {
        var pd_4 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 85)._focusChanged(false) !== false);
        ad = (pd_4 && ad);
    } if (("focus" === en)) {
        var pd_5 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 85)._focusChanged(true) !== false);
        ad = (pd_5 && ad);
    } if (("input" === en)) {
        var pd_6 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 85)._onInput() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.phoneNumber = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](77, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](78, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["s" /* RequiredValidator */], [], { required: [0, "required"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](79, 540672, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* MaxLengthValidator */], [], { maxlength: [0, "maxlength"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* NG_VALIDATORS */], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["s" /* RequiredValidator */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* MaxLengthValidator */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](82, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["q" /* NgModel */], [[8, null], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* NG_VALIDATORS */]], [8, null], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["m" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["q" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](84, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["n" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["m" /* NgControl */]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](85, 933888, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_material_input__["b" /* MatInput */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_7__angular_cdk_platform__["a" /* Platform */], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["m" /* NgControl */]], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["p" /* NgForm */]], [2, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* FormGroupDirective */]], __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["d" /* ErrorStateMatcher */], [8, null]], { placeholder: [0, "placeholder"], required: [1, "required"], type: [2, "type"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["i" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["j" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, [[29, 4]], __WEBPACK_IMPORTED_MODULE_3__angular_material_form_field__["b" /* MatFormFieldControl */], null, [__WEBPACK_IMPORTED_MODULE_6__angular_material_input__["b" /* MatInput */]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 1, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_35 = ""; _ck(_v, 14, 0, currVal_35); var currVal_36 = "50"; _ck(_v, 15, 0, currVal_36); var currVal_37 = "firstName"; var currVal_38 = _co.displayName; _ck(_v, 18, 0, currVal_37, currVal_38); var currVal_39 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵinlineInterpolate"](1, "", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 21, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 22).transform("AUTH.REGISTERFORM.FIRST")), ""); var currVal_40 = ""; var currVal_41 = "text"; _ck(_v, 21, 0, currVal_39, currVal_40, currVal_41); var currVal_77 = ""; _ck(_v, 40, 0, currVal_77); var currVal_78 = "50"; _ck(_v, 41, 0, currVal_78); var currVal_79 = "lastName"; var currVal_80 = _co.displayName; _ck(_v, 44, 0, currVal_79, currVal_80); var currVal_81 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵinlineInterpolate"](1, "", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 47, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 48).transform("AUTH.REGISTERFORM.LAST")), ""); var currVal_82 = ""; var currVal_83 = "text"; _ck(_v, 47, 0, currVal_81, currVal_82, currVal_83); var currVal_84 = !_co.hideEmail; _ck(_v, 55, 0, currVal_84); var currVal_85 = !_co.hideEmail; _ck(_v, 58, 0, currVal_85); var currVal_86 = !_co.hidePassword; _ck(_v, 61, 0, currVal_86); var currVal_87 = !_co.hidePassword; _ck(_v, 64, 0, currVal_87); var currVal_123 = ""; _ck(_v, 78, 0, currVal_123); var currVal_124 = "25"; _ck(_v, 79, 0, currVal_124); var currVal_125 = "phoneNumber"; var currVal_126 = _co.phoneNumber; _ck(_v, 82, 0, currVal_125, currVal_126); var currVal_127 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵinlineInterpolate"](1, "", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 85, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 86).transform("AUTH.REGISTERFORM.PHONE")), ""); var currVal_128 = ""; var currVal_129 = "tel"; _ck(_v, 85, 0, currVal_127, currVal_128, currVal_129); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3)._control.errorState; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3)._control.errorState; var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3)._canLabelFloat; var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3)._shouldLabelFloat(); var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3)._hideControlPlaceholder(); var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3)._control.disabled; var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3)._control.focused; var currVal_7 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3).color == "primary"); var currVal_8 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3).color == "accent"); var currVal_9 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3).color == "warn"); var currVal_10 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3)._shouldForward("untouched"); var currVal_11 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3)._shouldForward("touched"); var currVal_12 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3)._shouldForward("pristine"); var currVal_13 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3)._shouldForward("dirty"); var currVal_14 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3)._shouldForward("valid"); var currVal_15 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3)._shouldForward("invalid"); var currVal_16 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 3)._shouldForward("pending"); _ck(_v, 2, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16]); var currVal_17 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 14).required ? "" : null); var currVal_18 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15).maxlength ? __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15).maxlength : null); var currVal_19 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 20).ngClassUntouched; var currVal_20 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 20).ngClassTouched; var currVal_21 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 20).ngClassPristine; var currVal_22 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 20).ngClassDirty; var currVal_23 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 20).ngClassValid; var currVal_24 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 20).ngClassInvalid; var currVal_25 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 20).ngClassPending; var currVal_26 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 21)._isServer; var currVal_27 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 21).id; var currVal_28 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 21).placeholder; var currVal_29 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 21).disabled; var currVal_30 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 21).required; var currVal_31 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 21).readonly; var currVal_32 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 21)._ariaDescribedby || null); var currVal_33 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 21).errorState; var currVal_34 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 21).required.toString(); _ck(_v, 12, 1, [currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34]); var currVal_42 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29)._control.errorState; var currVal_43 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29)._control.errorState; var currVal_44 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29)._canLabelFloat; var currVal_45 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29)._shouldLabelFloat(); var currVal_46 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29)._hideControlPlaceholder(); var currVal_47 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29)._control.disabled; var currVal_48 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29)._control.focused; var currVal_49 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29).color == "primary"); var currVal_50 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29).color == "accent"); var currVal_51 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29).color == "warn"); var currVal_52 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29)._shouldForward("untouched"); var currVal_53 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29)._shouldForward("touched"); var currVal_54 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29)._shouldForward("pristine"); var currVal_55 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29)._shouldForward("dirty"); var currVal_56 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29)._shouldForward("valid"); var currVal_57 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29)._shouldForward("invalid"); var currVal_58 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 29)._shouldForward("pending"); _ck(_v, 28, 1, [currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58]); var currVal_59 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 40).required ? "" : null); var currVal_60 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 41).maxlength ? __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 41).maxlength : null); var currVal_61 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 46).ngClassUntouched; var currVal_62 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 46).ngClassTouched; var currVal_63 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 46).ngClassPristine; var currVal_64 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 46).ngClassDirty; var currVal_65 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 46).ngClassValid; var currVal_66 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 46).ngClassInvalid; var currVal_67 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 46).ngClassPending; var currVal_68 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 47)._isServer; var currVal_69 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 47).id; var currVal_70 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 47).placeholder; var currVal_71 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 47).disabled; var currVal_72 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 47).required; var currVal_73 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 47).readonly; var currVal_74 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 47)._ariaDescribedby || null); var currVal_75 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 47).errorState; var currVal_76 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 47).required.toString(); _ck(_v, 38, 1, [currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76]); var currVal_88 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 67)._control.errorState; var currVal_89 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 67)._control.errorState; var currVal_90 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 67)._canLabelFloat; var currVal_91 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 67)._shouldLabelFloat(); var currVal_92 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 67)._hideControlPlaceholder(); var currVal_93 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 67)._control.disabled; var currVal_94 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 67)._control.focused; var currVal_95 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 67).color == "primary"); var currVal_96 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 67).color == "accent"); var currVal_97 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 67).color == "warn"); var currVal_98 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 67)._shouldForward("untouched"); var currVal_99 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 67)._shouldForward("touched"); var currVal_100 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 67)._shouldForward("pristine"); var currVal_101 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 67)._shouldForward("dirty"); var currVal_102 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 67)._shouldForward("valid"); var currVal_103 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 67)._shouldForward("invalid"); var currVal_104 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 67)._shouldForward("pending"); _ck(_v, 66, 1, [currVal_88, currVal_89, currVal_90, currVal_91, currVal_92, currVal_93, currVal_94, currVal_95, currVal_96, currVal_97, currVal_98, currVal_99, currVal_100, currVal_101, currVal_102, currVal_103, currVal_104]); var currVal_105 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 78).required ? "" : null); var currVal_106 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 79).maxlength ? __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 79).maxlength : null); var currVal_107 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 84).ngClassUntouched; var currVal_108 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 84).ngClassTouched; var currVal_109 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 84).ngClassPristine; var currVal_110 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 84).ngClassDirty; var currVal_111 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 84).ngClassValid; var currVal_112 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 84).ngClassInvalid; var currVal_113 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 84).ngClassPending; var currVal_114 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 85)._isServer; var currVal_115 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 85).id; var currVal_116 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 85).placeholder; var currVal_117 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 85).disabled; var currVal_118 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 85).required; var currVal_119 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 85).readonly; var currVal_120 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 85)._ariaDescribedby || null); var currVal_121 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 85).errorState; var currVal_122 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 85).required.toString(); _ck(_v, 76, 1, [currVal_105, currVal_106, currVal_107, currVal_108, currVal_109, currVal_110, currVal_111, currVal_112, currVal_113, currVal_114, currVal_115, currVal_116, currVal_117, currVal_118, currVal_119, currVal_120, currVal_121, currVal_122]); }); }
function View_RegisterFormComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "bc-register-form", [], null, null, null, View_RegisterFormComponent_0, RenderType_RegisterFormComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 573440, null, 0, __WEBPACK_IMPORTED_MODULE_10__register_form_component__["a" /* RegisterFormComponent */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__["a" /* AngularFireAuth */]], null, null)], null, null); }
var RegisterFormComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("bc-register-form", __WEBPACK_IMPORTED_MODULE_10__register_form_component__["a" /* RegisterFormComponent */], View_RegisterFormComponent_Host_0, { hideEmail: "hideEmail", hidePassword: "hidePassword" }, {}, []);



/***/ }),

/***/ "../../../../../src/app/auth/register-form/register-form.component.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];



/***/ }),

/***/ "../../../../../src/app/auth/reset-password/reset-password.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_ResetPasswordComponent */
/* unused harmony export View_ResetPasswordComponent_0 */
/* unused harmony export View_ResetPasswordComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reset_password_component_scss_shim_ngstyle__ = __webpack_require__("../../../../../src/app/auth/reset-password/reset-password.component.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_card_typings_index_ngfactory__ = __webpack_require__("../../../material/card/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_angular_material_form_field_typings_index_ngfactory__ = __webpack_require__("../../../material/form-field/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_core__ = __webpack_require__("../../../material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_cdk_platform__ = __webpack_require__("../../../cdk/esm5/platform.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__node_modules_angular_material_button_typings_index_ngfactory__ = __webpack_require__("../../../material/button/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_cdk_a11y__ = __webpack_require__("../../../cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__reset_password_component__ = __webpack_require__("../../../../../src/app/auth/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

















var styles_ResetPasswordComponent = [__WEBPACK_IMPORTED_MODULE_0__reset_password_component_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_ResetPasswordComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_ResetPasswordComponent, data: {} });

function View_ResetPasswordComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 59, "mat-card", [["class", "contain mat-card"]], null, null, null, __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_card_typings_index_ngfactory__["b" /* View_MatCard_0 */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_card_typings_index_ngfactory__["a" /* RenderType_MatCard */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_card__["a" /* MatCard */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](3, 0, null, 0, 55, "form", [["action", "#"], ["class", "form-signin"], ["method", "POST"], ["novalidate", ""], ["role", "form"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 5).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 5).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](4, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["v" /* ɵbf */], [], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](5, 4210688, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["p" /* NgForm */], [[8, null], [8, null]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* ControlContainer */], null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["p" /* NgForm */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](7, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["o" /* NgControlStatusGroup */], [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* ControlContainer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](9, 0, null, null, 3, "mat-card-title", [["class", "mat-card-title"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](10, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_card__["f" /* MatCardTitle */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](11, null, ["", ""])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["i" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["j" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](14, 0, null, null, 9, "input", [["id", "verificationCode"], ["maxlength", "50"], ["type", "hidden"]], [[8, "placeholder", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 15)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.verificationCode = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](15, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](16, 540672, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* MaxLengthValidator */], [], { maxlength: [0, "maxlength"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* NG_VALIDATORS */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* MaxLengthValidator */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](19, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["q" /* NgModel */], [[2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* ControlContainer */]], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* NG_VALIDATORS */]], [8, null], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["l" /* NG_VALUE_ACCESSOR */]]], { model: [0, "model"], options: [1, "options"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpod"](20, { standalone: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["m" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["q" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](22, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["n" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["m" /* NgControl */]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["i" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["j" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](25, 0, null, null, 22, "mat-input-container", [["class", "mat-input-container mat-form-field"]], [[2, "mat-input-invalid", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-focused", null], [2, "mat-primary", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, __WEBPACK_IMPORTED_MODULE_6__node_modules_angular_material_form_field_typings_index_ngfactory__["b" /* View_MatFormField_0 */], __WEBPACK_IMPORTED_MODULE_6__node_modules_angular_material_form_field_typings_index_ngfactory__["a" /* RenderType_MatFormField */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](26, 7389184, null, 7, __WEBPACK_IMPORTED_MODULE_7__angular_material_form_field__["a" /* MatFormField */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"], [2, __WEBPACK_IMPORTED_MODULE_8__angular_material_core__["j" /* MAT_LABEL_GLOBAL_OPTIONS */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 1, { _control: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 2, { _placeholderChild: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](335544320, 3, { _labelChild: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 4, { _errorChildren: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 5, { _hintChildren: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 6, { _prefixChildren: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 7, { _suffixChildren: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 1, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](35, 0, null, 1, 11, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["id", "newPassword"], ["length", "40"], ["matInput", ""], ["maxlength", "25"], ["type", "password"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [8, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [8, "readOnly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 36)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 36).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 36)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 36)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("blur" === en)) {
        var pd_4 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 44)._focusChanged(false) !== false);
        ad = (pd_4 && ad);
    } if (("focus" === en)) {
        var pd_5 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 44)._focusChanged(true) !== false);
        ad = (pd_5 && ad);
    } if (("input" === en)) {
        var pd_6 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 44)._onInput() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.password = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](36, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](37, 540672, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* MaxLengthValidator */], [], { maxlength: [0, "maxlength"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* NG_VALIDATORS */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* MaxLengthValidator */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](40, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["q" /* NgModel */], [[2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* ControlContainer */]], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* NG_VALIDATORS */]], [8, null], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["l" /* NG_VALUE_ACCESSOR */]]], { model: [0, "model"], options: [1, "options"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpod"](41, { standalone: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["m" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["q" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](43, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["n" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["m" /* NgControl */]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](44, 933888, null, 0, __WEBPACK_IMPORTED_MODULE_9__angular_material_input__["b" /* MatInput */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_10__angular_cdk_platform__["a" /* Platform */], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["m" /* NgControl */]], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["p" /* NgForm */]], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* FormGroupDirective */]], __WEBPACK_IMPORTED_MODULE_8__angular_material_core__["d" /* ErrorStateMatcher */], [8, null]], { id: [0, "id"], placeholder: [1, "placeholder"], type: [2, "type"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["i" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["j" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, [[1, 4]], __WEBPACK_IMPORTED_MODULE_7__angular_material_form_field__["b" /* MatFormFieldControl */], null, [__WEBPACK_IMPORTED_MODULE_9__angular_material_input__["b" /* MatInput */]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 1, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](49, 0, null, null, 8, "mat-card-actions", [["class", "mat-card-actions"]], [[2, "mat-card-actions-align-end", null]], null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](50, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_card__["b" /* MatCardActions */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](52, 0, null, null, 4, "button", [["class", "mat-raised-button"], ["color", "primary"], ["id", "signupSubmit"], ["mat-raised-button", ""], ["type", "submit"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.resetPassword() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_11__node_modules_angular_material_button_typings_index_ngfactory__["d" /* View_MatButton_0 */], __WEBPACK_IMPORTED_MODULE_11__node_modules_angular_material_button_typings_index_ngfactory__["b" /* RenderType_MatButton */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](53, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_material_button__["b" /* MatButton */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_10__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_13__angular_cdk_a11y__["h" /* FocusMonitor */]], { color: [0, "color"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](54, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_material_button__["e" /* MatRaisedButtonCssMatStyler */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](55, 0, ["\n                ", "\n            "])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["i" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["j" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, 0, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_17 = "50"; _ck(_v, 16, 0, currVal_17); var currVal_18 = _co.verificationCode; var currVal_19 = _ck(_v, 20, 0, true); _ck(_v, 19, 0, currVal_18, currVal_19); var currVal_54 = "25"; _ck(_v, 37, 0, currVal_54); var currVal_55 = _co.password; var currVal_56 = _ck(_v, 41, 0, true); _ck(_v, 40, 0, currVal_55, currVal_56); var currVal_57 = "newPassword"; var currVal_58 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵinlineInterpolate"](1, "", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 44, 1, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 45).transform("AUTH.RESETPASSWORD.PASSWORD")), ""); var currVal_59 = "password"; _ck(_v, 44, 0, currVal_57, currVal_58, currVal_59); var currVal_62 = "primary"; _ck(_v, 53, 0, currVal_62); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 7).ngClassUntouched; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 7).ngClassTouched; var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 7).ngClassPristine; var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 7).ngClassDirty; var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 7).ngClassValid; var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 7).ngClassInvalid; var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 7).ngClassPending; _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 11, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 12).transform("AUTH.RESETPASSWORD.TITLE")); _ck(_v, 11, 0, currVal_7); var currVal_8 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵinlineInterpolate"](1, "", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 14, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 23).transform("AUTH.RESETPASSWORD.CODE")), ""); var currVal_9 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 16).maxlength ? __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 16).maxlength : null); var currVal_10 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 22).ngClassUntouched; var currVal_11 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 22).ngClassTouched; var currVal_12 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 22).ngClassPristine; var currVal_13 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 22).ngClassDirty; var currVal_14 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 22).ngClassValid; var currVal_15 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 22).ngClassInvalid; var currVal_16 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 22).ngClassPending; _ck(_v, 14, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16); var currVal_20 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 26)._control.errorState; var currVal_21 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 26)._control.errorState; var currVal_22 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 26)._canLabelFloat; var currVal_23 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 26)._shouldLabelFloat(); var currVal_24 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 26)._hideControlPlaceholder(); var currVal_25 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 26)._control.disabled; var currVal_26 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 26)._control.focused; var currVal_27 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 26).color == "primary"); var currVal_28 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 26).color == "accent"); var currVal_29 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 26).color == "warn"); var currVal_30 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 26)._shouldForward("untouched"); var currVal_31 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 26)._shouldForward("touched"); var currVal_32 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 26)._shouldForward("pristine"); var currVal_33 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 26)._shouldForward("dirty"); var currVal_34 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 26)._shouldForward("valid"); var currVal_35 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 26)._shouldForward("invalid"); var currVal_36 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 26)._shouldForward("pending"); _ck(_v, 25, 1, [currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36]); var currVal_37 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 37).maxlength ? __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 37).maxlength : null); var currVal_38 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 43).ngClassUntouched; var currVal_39 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 43).ngClassTouched; var currVal_40 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 43).ngClassPristine; var currVal_41 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 43).ngClassDirty; var currVal_42 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 43).ngClassValid; var currVal_43 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 43).ngClassInvalid; var currVal_44 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 43).ngClassPending; var currVal_45 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 44)._isServer; var currVal_46 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 44).id; var currVal_47 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 44).placeholder; var currVal_48 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 44).disabled; var currVal_49 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 44).required; var currVal_50 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 44).readonly; var currVal_51 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 44)._ariaDescribedby || null); var currVal_52 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 44).errorState; var currVal_53 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 44).required.toString(); _ck(_v, 35, 1, [currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53]); var currVal_60 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 50).align === "end"); _ck(_v, 49, 0, currVal_60); var currVal_61 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 53).disabled || null); _ck(_v, 52, 0, currVal_61); var currVal_63 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 55, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 56).transform("AUTH.RESETPASSWORD.SUBMIT")); _ck(_v, 55, 0, currVal_63); }); }
function View_ResetPasswordComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "bc-reset", [], null, null, null, View_ResetPasswordComponent_0, RenderType_ResetPasswordComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_14__reset_password_component__["a" /* ResetPasswordComponent */], [__WEBPACK_IMPORTED_MODULE_15__angular_router__["l" /* Router */], __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_15__angular_router__["a" /* ActivatedRoute */]], null, null)], null, null); }
var ResetPasswordComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("bc-reset", __WEBPACK_IMPORTED_MODULE_14__reset_password_component__["a" /* ResetPasswordComponent */], View_ResetPasswordComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/auth/reset-password/reset-password.component.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".contain[_ngcontent-%COMP%] {\n  text-align: center; }"];



/***/ }),

/***/ "../../../../../src/app/auth/reset-password/reset-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");


var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(router, fireAuth, route) {
        var _this = this;
        this.router = router;
        this.fireAuth = fireAuth;
        this.route = route;
        this.error = '';
        this.route.params.subscribe(function (params) {
            _this.email = params['email'];
        });
        this.route.queryParams.subscribe(function (params) {
            _this.code = params['code'];
            _this.handleParams(params);
        });
    }
    ResetPasswordComponent.prototype.handleParams = function (params) {
        this.actionCode = params['oobCode'];
        switch (params['mode']) {
            case 'resetPassword':
                // Display reset password handler and UI.
                this.handleResetPassword();
                break;
            case 'recoverEmail':
                // Display email recovery handler and UI.
                this.handleRecoverEmail();
                break;
            case 'verifyEmail':
                // Display email verification handler and UI.
                this.handleVerifyEmail();
                break;
            default:
        }
    };
    ResetPasswordComponent.prototype.resetPassword = function () {
        this.fireAuth.auth.confirmPasswordReset(this.actionCode, this.password).then(function (resp) {
            // Password reset has been confirmed and new password updated.
            // TODO: Display a link back to the app, or sign-in the user directly
            // if the page belongs to the same domain as the app:
            // auth.signInWithEmailAndPassword(accountEmail, newPassword);
        });
    };
    ResetPasswordComponent.prototype.handleResetPassword = function () {
        var _this = this;
        // Verify the password reset code is valid.
        this.fireAuth.auth.verifyPasswordResetCode(this.actionCode).then(function (accountEmail) {
            _this.email = accountEmail;
            // TODO: Show the reset screen with the user's email and ask the user for
            // the new password.
            // Save the new password.
        }).catch(function (error) {
            // Invalid or expired action code. Ask user to try to reset the password
            // again.
            console.log(error);
        });
    };
    ResetPasswordComponent.prototype.handleRecoverEmail = function () {
        var _this = this;
        // Confirm the action code is valid.
        this.fireAuth.auth.checkActionCode(this.actionCode).then(function (info) {
            // Get the restored email address.
            _this.email = info['data']['email'];
            // Revert to the old email.
            return _this.fireAuth.auth.applyActionCode(_this.actionCode);
        });
    };
    ResetPasswordComponent.prototype.handleVerifyEmail = function () {
        // Try to apply the email verification code.
        this.fireAuth.auth.applyActionCode(this.actionCode).then(function (resp) {
            // Email address has been verified.
            // TODO: Display a confirmation message to the user.
            // You could also provide the user with a link back to the app.
        });
    };
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "../../../../@firebase/messaging/dist/esm/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["registerMessaging"] = registerMessaging;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_controllers_window_controller__ = __webpack_require__("../../../../@firebase/messaging/dist/esm/src/controllers/window-controller.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_controllers_sw_controller__ = __webpack_require__("../../../../@firebase/messaging/dist/esm/src/controllers/sw-controller.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firebase_app__ = __webpack_require__("../../../../@firebase/app/dist/esm/index.js");
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




function registerMessaging(instance) {
    var messagingName = 'messaging';
    var factoryMethod = function (app) {
        if (self && 'ServiceWorkerGlobalScope' in self) {
            return new __WEBPACK_IMPORTED_MODULE_1__src_controllers_sw_controller__["a" /* default */](app);
        }
        // Assume we are in the window context.
        return new __WEBPACK_IMPORTED_MODULE_0__src_controllers_window_controller__["a" /* default */](app);
    };
    var namespaceExports = {
        // no-inline
        Messaging: __WEBPACK_IMPORTED_MODULE_0__src_controllers_window_controller__["a" /* default */]
    };
    instance.INTERNAL.registerService(messagingName, factoryMethod, namespaceExports);
}
registerMessaging(__WEBPACK_IMPORTED_MODULE_2__firebase_app__["firebase"]);

//# sourceMappingURL=index.js.map


/***/ }),

/***/ "../../../../@firebase/messaging/dist/esm/src/controllers/controller-interface.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_util__ = __webpack_require__("../../../../@firebase/util/dist/cjs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__firebase_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_errors__ = __webpack_require__("../../../../@firebase/messaging/dist/esm/src/models/errors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_token_manager__ = __webpack_require__("../../../../@firebase/messaging/dist/esm/src/models/token-manager.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_notification_permission__ = __webpack_require__("../../../../@firebase/messaging/dist/esm/src/models/notification-permission.js");
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





var SENDER_ID_OPTION_NAME = 'messagingSenderId';
var ControllerInterface = /** @class */ (function () {
    /**
     * An interface of the Messaging Service API
     * @param {!firebase.app.App} app
     */
    function ControllerInterface(app) {
        var _this = this;
        this.errorFactory_ = new __WEBPACK_IMPORTED_MODULE_0__firebase_util__["ErrorFactory"]('messaging', 'Messaging', __WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].map);
        if (!app.options[SENDER_ID_OPTION_NAME] ||
            typeof app.options[SENDER_ID_OPTION_NAME] !== 'string') {
            throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.BAD_SENDER_ID);
        }
        this.messagingSenderId_ = app.options[SENDER_ID_OPTION_NAME];
        this.tokenManager_ = new __WEBPACK_IMPORTED_MODULE_2__models_token_manager__["a" /* default */]();
        this.app = app;
        this.INTERNAL = {};
        this.INTERNAL.delete = function () { return _this.delete; };
    }
    /**
     * @export
     * @return {Promise<string> | Promise<null>} Returns a promise that
     * resolves to an FCM token.
     */
    ControllerInterface.prototype.getToken = function () {
        var _this = this;
        // Check with permissions
        var currentPermission = this.getNotificationPermission_();
        if (currentPermission !== __WEBPACK_IMPORTED_MODULE_3__models_notification_permission__["a" /* default */].granted) {
            if (currentPermission === __WEBPACK_IMPORTED_MODULE_3__models_notification_permission__["a" /* default */].denied) {
                return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.NOTIFICATIONS_BLOCKED));
            }
            // We must wait for permission to be granted
            return Promise.resolve(null);
        }
        return this.getSWRegistration_().then(function (registration) {
            return _this.tokenManager_
                .getSavedToken(_this.messagingSenderId_, registration)
                .then(function (token) {
                if (token) {
                    return token;
                }
                return _this.tokenManager_.createToken(_this.messagingSenderId_, registration);
            });
        });
    };
    /**
     * This method deletes tokens that the token manager looks after and then
     * unregisters the push subscription if it exists.
     * @export
     * @param {string} token
     * @return {Promise<void>}
     */
    ControllerInterface.prototype.deleteToken = function (token) {
        var _this = this;
        return this.tokenManager_.deleteToken(token).then(function () {
            return _this.getSWRegistration_()
                .then(function (registration) {
                if (registration) {
                    return registration.pushManager.getSubscription();
                }
            })
                .then(function (subscription) {
                if (subscription) {
                    return subscription.unsubscribe();
                }
            });
        });
    };
    ControllerInterface.prototype.getSWRegistration_ = function () {
        throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.SHOULD_BE_INHERITED);
    };
    //
    // The following methods should only be available in the window.
    //
    ControllerInterface.prototype.requestPermission = function () {
        throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.AVAILABLE_IN_WINDOW);
    };
    /**
     * @export
     * @param {!ServiceWorkerRegistration} registration
     */
    ControllerInterface.prototype.useServiceWorker = function (registration) {
        throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.AVAILABLE_IN_WINDOW);
    };
    /**
     * @export
     * @param {!firebase.Observer|function(*)} nextOrObserver
     * @param {function(!Error)=} optError
     * @param {function()=} optCompleted
     * @return {!function()}
     */
    ControllerInterface.prototype.onMessage = function (nextOrObserver, optError, optCompleted) {
        throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.AVAILABLE_IN_WINDOW);
    };
    /**
     * @export
     * @param {!firebase.Observer|function()} nextOrObserver An observer object
     * or a function triggered on token refresh.
     * @param {function(!Error)=} optError Optional A function
     * triggered on token refresh error.
     * @param {function()=} optCompleted Optional function triggered when the
     * observer is removed.
     * @return {!function()} The unsubscribe function for the observer.
     */
    ControllerInterface.prototype.onTokenRefresh = function (nextOrObserver, optError, optCompleted) {
        throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.AVAILABLE_IN_WINDOW);
    };
    //
    // The following methods are used by the service worker only.
    //
    /**
     * @export
     * @param {function(Object)} callback
     */
    ControllerInterface.prototype.setBackgroundMessageHandler = function (callback) {
        throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.AVAILABLE_IN_SW);
    };
    //
    // The following methods are used by the service themselves and not exposed
    // publicly or not expected to be used by developers.
    //
    /**
     * This method is required to adhere to the Firebase interface.
     * It closes any currently open indexdb database connections.
     */
    ControllerInterface.prototype.delete = function () {
        return this.tokenManager_.closeDatabase();
    };
    /**
     * Returns the current Notification Permission state.
     * @private
     * @return {string} The currenct permission state.
     */
    ControllerInterface.prototype.getNotificationPermission_ = function () {
        return Notification.permission;
    };
    /**
     * @protected
     * @returns {TokenManager}
     */
    ControllerInterface.prototype.getTokenManager = function () {
        return this.tokenManager_;
    };
    return ControllerInterface;
}());
/* harmony default export */ __webpack_exports__["a"] = (ControllerInterface);

//# sourceMappingURL=controller-interface.js.map


/***/ }),

/***/ "../../../../@firebase/messaging/dist/esm/src/controllers/sw-controller.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controller_interface__ = __webpack_require__("../../../../@firebase/messaging/dist/esm/src/controllers/controller-interface.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_errors__ = __webpack_require__("../../../../@firebase/messaging/dist/esm/src/models/errors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_worker_page_message__ = __webpack_require__("../../../../@firebase/messaging/dist/esm/src/models/worker-page-message.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_fcm_details__ = __webpack_require__("../../../../@firebase/messaging/dist/esm/src/models/fcm-details.js");
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var FCM_MSG = 'FCM_MSG';
var SWController = /** @class */ (function (_super) {
    __extends(SWController, _super);
    function SWController(app) {
        var _this = _super.call(this, app) || this;
        self.addEventListener('push', function (e) { return _this.onPush_(e); }, false);
        self.addEventListener('pushsubscriptionchange', function (e) { return _this.onSubChange_(e); }, false);
        self.addEventListener('notificationclick', function (e) { return _this.onNotificationClick_(e); }, false);
        /**
         * @private
         * @type {function(Object)|null}
         */
        _this.bgMessageHandler_ = null;
        return _this;
    }
    /**
     * A handler for push events that shows notifications based on the content of
     * the payload.
     *
     * The payload must be a JSON-encoded Object with a `notification` key. The
     * value of the `notification` property will be used as the NotificationOptions
     * object passed to showNotification. Additionally, the `title` property of the
     * notification object will be used as the title.
     *
     * If there is no notification data in the payload then no notification will be
     * shown.
     * @private
     */
    SWController.prototype.onPush_ = function (event) {
        var _this = this;
        var msgPayload;
        try {
            msgPayload = event.data.json();
        }
        catch (err) {
            // Not JSON so not an FCM message
            return;
        }
        var handleMsgPromise = this.hasVisibleClients_().then(function (hasVisibleClients) {
            if (hasVisibleClients) {
                // Do not need to show a notification.
                if (msgPayload.notification || _this.bgMessageHandler_) {
                    // Send to page
                    return _this.sendMessageToWindowClients_(msgPayload);
                }
                return;
            }
            var notificationDetails = _this.getNotificationData_(msgPayload);
            if (notificationDetails) {
                var notificationTitle = notificationDetails.title || '';
                return self.registration.showNotification(notificationTitle, notificationDetails);
            }
            else if (_this.bgMessageHandler_) {
                return _this.bgMessageHandler_(msgPayload);
            }
        });
        event.waitUntil(handleMsgPromise);
    };
    /**
     * @private
     */
    SWController.prototype.onSubChange_ = function (event) {
        var _this = this;
        var promiseChain = this.getToken().then(function (token) {
            if (!token) {
                // We can't resubscribe if we don't have an FCM token for this scope.
                throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.NO_FCM_TOKEN_FOR_RESUBSCRIBE);
            }
            var tokenDetails = null;
            var tokenManager = _this.getTokenManager();
            return tokenManager
                .getTokenDetailsFromToken(token)
                .then(function (details) {
                tokenDetails = details;
                if (!tokenDetails) {
                    throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.INVALID_SAVED_TOKEN);
                }
                // Attempt to get a new subscription
                return self.registration.pushManager.subscribe(__WEBPACK_IMPORTED_MODULE_3__models_fcm_details__["a" /* default */].SUBSCRIPTION_OPTIONS);
            })
                .then(function (newSubscription) {
                // Send new subscription to FCM.
                return tokenManager.subscribeToFCM(tokenDetails.fcmSenderId, newSubscription, tokenDetails.fcmPushSet);
            })
                .catch(function (err) {
                // The best thing we can do is log this to the terminal so
                // developers might notice the error.
                return tokenManager.deleteToken(tokenDetails.fcmToken).then(function () {
                    throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.UNABLE_TO_RESUBSCRIBE, {
                        message: err
                    });
                });
            });
        });
        event.waitUntil(promiseChain);
    };
    /**
     * @private
     */
    SWController.prototype.onNotificationClick_ = function (event) {
        var _this = this;
        if (!(event.notification &&
            event.notification.data &&
            event.notification.data[FCM_MSG])) {
            // Not an FCM notification, do nothing.
            return;
        }
        // Prevent other listeners from receiving the event
        event.stopImmediatePropagation();
        event.notification.close();
        var msgPayload = event.notification.data[FCM_MSG];
        var clickAction = msgPayload['notification']['click_action'];
        if (!clickAction) {
            // Nothing to do.
            return;
        }
        var promiseChain = this.getWindowClient_(clickAction)
            .then(function (windowClient) {
            if (!windowClient) {
                // Unable to find window client so need to open one.
                return self.clients.openWindow(clickAction);
            }
            return windowClient;
        })
            .then(function (windowClient) {
            if (!windowClient) {
                // Window Client will not be returned if it's for a third party origin.
                return;
            }
            // Delete notification data from payload before sending to the page.
            var notificationData = msgPayload['notification'];
            delete msgPayload['notification'];
            var internalMsg = __WEBPACK_IMPORTED_MODULE_2__models_worker_page_message__["a" /* default */].createNewMsg(__WEBPACK_IMPORTED_MODULE_2__models_worker_page_message__["a" /* default */].TYPES_OF_MSG.NOTIFICATION_CLICKED, msgPayload);
            // Attempt to send a message to the client to handle the data
            // Is affected by: https://github.com/slightlyoff/ServiceWorker/issues/728
            return _this.attemptToMessageClient_(windowClient, internalMsg);
        });
        event.waitUntil(promiseChain);
    };
    /**
     * @private
     * @param {Object} msgPayload
     * @return {NotificationOptions|undefined}
     */
    SWController.prototype.getNotificationData_ = function (msgPayload) {
        if (!msgPayload) {
            return;
        }
        if (typeof msgPayload.notification !== 'object') {
            return;
        }
        var notificationInformation = Object.assign({}, msgPayload.notification);
        // Put the message payload under FCM_MSG name so we can identify the
        // notification as being an FCM notification vs a notification from
        // somewhere else (i.e. normal web push or developer generated
        // notification).
        notificationInformation['data'] = (_a = {},
            _a[FCM_MSG] = msgPayload,
            _a);
        return notificationInformation;
        var _a;
    };
    /**
     * Calling setBackgroundMessageHandler will opt in to some specific
     * behaviours.
     * 1.) If a notification doesn't need to be shown due to a window already
     * being visible, then push messages will be sent to the page.
     * 2.) If a notification needs to be shown, and the message contains no
     * notification data this method will be called
     * and the promise it returns will be passed to event.waitUntil.
     * If you do not set this callback then all push messages will let and the
     * developer can handle them in a their own 'push' event callback
     * @export
     * @param {function(Object)} callback The callback to be called when a push
     * message is received and a notification must be shown. The callback will
     * be given the data from the push message.
     */
    SWController.prototype.setBackgroundMessageHandler = function (callback) {
        if (callback && typeof callback !== 'function') {
            throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.BG_HANDLER_FUNCTION_EXPECTED);
        }
        this.bgMessageHandler_ = callback;
    };
    /**
     * @private
     * @param {string} url The URL to look for when focusing a client.
     * @return {Object} Returns an existing window client or a newly opened
     * WindowClient.
     */
    SWController.prototype.getWindowClient_ = function (url) {
        // Use URL to normalize the URL when comparing to windowClients.
        // This at least handles whether to include trailing slashes or not
        var parsedURL = new URL(url).href;
        return self.clients
            .matchAll({
            type: 'window',
            includeUncontrolled: true
        })
            .then(function (clientList) {
            var suitableClient = null;
            for (var i = 0; i < clientList.length; i++) {
                var parsedClientUrl = new URL(clientList[i].url).href;
                if (parsedClientUrl === parsedURL) {
                    suitableClient = clientList[i];
                    break;
                }
            }
            if (suitableClient) {
                suitableClient.focus();
                return suitableClient;
            }
        });
    };
    /**
     * This message will attempt to send the message to a window client.
     * @private
     * @param {Object} client The WindowClient to send the message to.
     * @param {Object} message The message to send to the client.
     * @returns {Promise} Returns a promise that resolves after sending the
     * message. This does not guarantee that the message was successfully
     * received.
     */
    SWController.prototype.attemptToMessageClient_ = function (client, message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!client) {
                return reject(_this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.NO_WINDOW_CLIENT_TO_MSG));
            }
            client.postMessage(message);
            resolve();
        });
    };
    /**
     * @private
     * @returns {Promise<boolean>} If there is currently a visible WindowClient,
     * this method will resolve to true, otherwise false.
     */
    SWController.prototype.hasVisibleClients_ = function () {
        return self.clients
            .matchAll({
            type: 'window',
            includeUncontrolled: true
        })
            .then(function (clientList) {
            return clientList.some(function (client) { return client.visibilityState === 'visible'; });
        });
    };
    /**
     * @private
     * @param {Object} msgPayload The data from the push event that should be sent
     * to all available pages.
     * @returns {Promise} Returns a promise that resolves once the message
     * has been sent to all WindowClients.
     */
    SWController.prototype.sendMessageToWindowClients_ = function (msgPayload) {
        var _this = this;
        return self.clients
            .matchAll({
            type: 'window',
            includeUncontrolled: true
        })
            .then(function (clientList) {
            var internalMsg = __WEBPACK_IMPORTED_MODULE_2__models_worker_page_message__["a" /* default */].createNewMsg(__WEBPACK_IMPORTED_MODULE_2__models_worker_page_message__["a" /* default */].TYPES_OF_MSG.PUSH_MSG_RECEIVED, msgPayload);
            return Promise.all(clientList.map(function (client) {
                return _this.attemptToMessageClient_(client, internalMsg);
            }));
        });
    };
    /**
     * This will register the default service worker and return the registration.
     * @private
     * @return {Promise<!ServiceWorkerRegistration>} The service worker
     * registration to be used for the push service.
     */
    SWController.prototype.getSWRegistration_ = function () {
        return Promise.resolve(self.registration);
    };
    return SWController;
}(__WEBPACK_IMPORTED_MODULE_0__controller_interface__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (SWController);

//# sourceMappingURL=sw-controller.js.map


/***/ }),

/***/ "../../../../@firebase/messaging/dist/esm/src/controllers/window-controller.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controller_interface__ = __webpack_require__("../../../../@firebase/messaging/dist/esm/src/controllers/controller-interface.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_errors__ = __webpack_require__("../../../../@firebase/messaging/dist/esm/src/models/errors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_worker_page_message__ = __webpack_require__("../../../../@firebase/messaging/dist/esm/src/models/worker-page-message.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_default_sw__ = __webpack_require__("../../../../@firebase/messaging/dist/esm/src/models/default-sw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_notification_permission__ = __webpack_require__("../../../../@firebase/messaging/dist/esm/src/models/notification-permission.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__firebase_util__ = __webpack_require__("../../../../@firebase/util/dist/cjs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__firebase_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__firebase_util__);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var WindowController = /** @class */ (function (_super) {
    __extends(WindowController, _super);
    /**
     * A service that provides a MessagingService instance.
     * @param {!firebase.app.App} app
     */
    function WindowController(app) {
        var _this = _super.call(this, app) || this;
        _this.messageObserver_ = null;
        _this.onMessage_ = Object(__WEBPACK_IMPORTED_MODULE_5__firebase_util__["createSubscribe"])(function (observer) {
            _this.messageObserver_ = observer;
        });
        _this.tokenRefreshObserver_ = null;
        _this.onTokenRefresh_ = Object(__WEBPACK_IMPORTED_MODULE_5__firebase_util__["createSubscribe"])(function (observer) {
            _this.tokenRefreshObserver_ = observer;
        });
        _this.setupSWMessageListener_();
        return _this;
    }
    /**
     * This method returns an FCM token if it can be generated.
     * The return promise will reject if the browser doesn't support
     * FCM, if permission is denied for notifications or it's not
     * possible to generate a token.
     * @export
     * @return {Promise<string> | Promise<null>} Returns a promise the
     * resolves to an FCM token or null if permission isn't granted.
     */
    WindowController.prototype.getToken = function () {
        var _this = this;
        // Check that the required API's are available
        if (!this.isSupported_()) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.UNSUPPORTED_BROWSER));
        }
        return this.manifestCheck_().then(function () {
            return _super.prototype.getToken.call(_this);
        });
    };
    /**
     * The method checks that a manifest is defined and has the correct GCM
     * sender ID.
     * @private
     * @return {Promise} Returns a promise that resolves if the manifest matches
     * our required sender ID
     */
    WindowController.prototype.manifestCheck_ = function () {
        var _this = this;
        if (this.manifestCheckPromise_) {
            return this.manifestCheckPromise_;
        }
        var manifestTag = document.querySelector('link[rel="manifest"]');
        if (!manifestTag) {
            this.manifestCheckPromise_ = Promise.resolve();
        }
        else {
            this.manifestCheckPromise_ = fetch(manifestTag.href)
                .then(function (response) {
                return response.json();
            })
                .catch(function () {
                // If the download or parsing fails allow check.
                // We only want to error if we KNOW that the gcm_sender_id is incorrect.
                return Promise.resolve();
            })
                .then(function (manifestContent) {
                if (!manifestContent) {
                    return;
                }
                if (!manifestContent['gcm_sender_id']) {
                    return;
                }
                if (manifestContent['gcm_sender_id'] !== '103953800507') {
                    throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.INCORRECT_GCM_SENDER_ID);
                }
            });
        }
        return this.manifestCheckPromise_;
    };
    /**
     * Request permission if it is not currently granted
     * @export
     * @returns {Promise} Resolves if the permission was granted, otherwise
     * rejects
     */
    WindowController.prototype.requestPermission = function () {
        var _this = this;
        if (Notification.permission === __WEBPACK_IMPORTED_MODULE_4__models_notification_permission__["a" /* default */].granted) {
            return Promise.resolve();
        }
        return new Promise(function (resolve, reject) {
            var managePermissionResult = function (result) {
                if (result === __WEBPACK_IMPORTED_MODULE_4__models_notification_permission__["a" /* default */].granted) {
                    return resolve();
                }
                else if (result === __WEBPACK_IMPORTED_MODULE_4__models_notification_permission__["a" /* default */].denied) {
                    return reject(_this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.PERMISSION_BLOCKED));
                }
                else {
                    return reject(_this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.PERMISSION_DEFAULT));
                }
            };
            // The Notification.requestPermission API was changed to
            // return a promise so now have to handle both in case
            // browsers stop support callbacks for promised version
            var permissionPromise = Notification.requestPermission(function (result) {
                if (permissionPromise) {
                    // Let the promise manage this
                    return;
                }
                managePermissionResult(result);
            });
            if (permissionPromise) {
                // Prefer the promise version as it's the future API.
                permissionPromise.then(managePermissionResult);
            }
        });
    };
    /**
     * This method allows a developer to override the default service worker and
     * instead use a custom service worker.
     * @export
     * @param {!ServiceWorkerRegistration} registration The service worker
     * registration that should be used to receive the push messages.
     */
    WindowController.prototype.useServiceWorker = function (registration) {
        if (!(registration instanceof ServiceWorkerRegistration)) {
            throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.SW_REGISTRATION_EXPECTED);
        }
        if (typeof this.registrationToUse_ !== 'undefined') {
            throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.USE_SW_BEFORE_GET_TOKEN);
        }
        this.registrationToUse_ = registration;
    };
    /**
     * @export
     * @param {!firebase.Observer|function(*)} nextOrObserver An observer object
     * or a function triggered on message.
     * @param {function(!Error)=} optError Optional A function triggered on
     * message error.
     * @param {function()=} optCompleted Optional function triggered when the
     * observer is removed.
     * @return {!function()} The unsubscribe function for the observer.
     */
    WindowController.prototype.onMessage = function (nextOrObserver, optError, optCompleted) {
        return this.onMessage_(nextOrObserver, optError, optCompleted);
    };
    /**
     * @export
     * @param {!firebase.Observer|function()} nextOrObserver An observer object
     * or a function triggered on token refresh.
     * @param {function(!Error)=} optError Optional A function
     * triggered on token refresh error.
     * @param {function()=} optCompleted Optional function triggered when the
     * observer is removed.
     * @return {!function()} The unsubscribe function for the observer.
     */
    WindowController.prototype.onTokenRefresh = function (nextOrObserver, optError, optCompleted) {
        return this.onTokenRefresh_(nextOrObserver, optError, optCompleted);
    };
    /**
     * Given a registration, wait for the service worker it relates to
     * become activer
     * @private
     * @param  {ServiceWorkerRegistration} registration Registration to wait
     * for service worker to become active
     * @return {Promise<!ServiceWorkerRegistration>} Wait for service worker
     * registration to become active
     */
    WindowController.prototype.waitForRegistrationToActivate_ = function (registration) {
        var _this = this;
        var serviceWorker = registration.installing || registration.waiting || registration.active;
        return new Promise(function (resolve, reject) {
            if (!serviceWorker) {
                // This is a rare scenario but has occured in firefox
                reject(_this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.NO_SW_IN_REG));
                return;
            }
            // Because the Promise function is called on next tick there is a
            // small chance that the worker became active or redundant already.
            if (serviceWorker.state === 'activated') {
                resolve(registration);
                return;
            }
            if (serviceWorker.state === 'redundant') {
                reject(_this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.SW_REG_REDUNDANT));
                return;
            }
            var stateChangeListener = function () {
                if (serviceWorker.state === 'activated') {
                    resolve(registration);
                }
                else if (serviceWorker.state === 'redundant') {
                    reject(_this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.SW_REG_REDUNDANT));
                }
                else {
                    // Return early and wait to next state change
                    return;
                }
                serviceWorker.removeEventListener('statechange', stateChangeListener);
            };
            serviceWorker.addEventListener('statechange', stateChangeListener);
        });
    };
    /**
     * This will regiater the default service worker and return the registration
     * @private
     * @return {Promise<!ServiceWorkerRegistration>} The service worker
     * registration to be used for the push service.
     */
    WindowController.prototype.getSWRegistration_ = function () {
        var _this = this;
        if (this.registrationToUse_) {
            return this.waitForRegistrationToActivate_(this.registrationToUse_);
        }
        // Make the registration null so we know useServiceWorker will not
        // use a new service worker as registrationToUse_ is no longer undefined
        this.registrationToUse_ = null;
        return navigator.serviceWorker
            .register(__WEBPACK_IMPORTED_MODULE_3__models_default_sw__["a" /* default */].path, {
            scope: __WEBPACK_IMPORTED_MODULE_3__models_default_sw__["a" /* default */].scope
        })
            .catch(function (err) {
            throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.FAILED_DEFAULT_REGISTRATION, {
                browserErrorMessage: err.message
            });
        })
            .then(function (registration) {
            return _this.waitForRegistrationToActivate_(registration).then(function () {
                _this.registrationToUse_ = registration;
                // We update after activation due to an issue with Firefox v49 where
                // a race condition occassionally causes the service work to not
                // install
                registration.update();
                return registration;
            });
        });
    };
    /**
     * This method will set up a message listener to handle
     * events from the service worker that should trigger
     * events in the page.
     *
     * @private
     */
    WindowController.prototype.setupSWMessageListener_ = function () {
        var _this = this;
        if (!('serviceWorker' in navigator)) {
            return;
        }
        navigator.serviceWorker.addEventListener('message', function (event) {
            if (!event.data || !event.data[__WEBPACK_IMPORTED_MODULE_2__models_worker_page_message__["a" /* default */].PARAMS.TYPE_OF_MSG]) {
                // Not a message from FCM
                return;
            }
            var workerPageMessage = event.data;
            switch (workerPageMessage[__WEBPACK_IMPORTED_MODULE_2__models_worker_page_message__["a" /* default */].PARAMS.TYPE_OF_MSG]) {
                case __WEBPACK_IMPORTED_MODULE_2__models_worker_page_message__["a" /* default */].TYPES_OF_MSG.PUSH_MSG_RECEIVED:
                case __WEBPACK_IMPORTED_MODULE_2__models_worker_page_message__["a" /* default */].TYPES_OF_MSG.NOTIFICATION_CLICKED:
                    var pushMessage = workerPageMessage[__WEBPACK_IMPORTED_MODULE_2__models_worker_page_message__["a" /* default */].PARAMS.DATA];
                    _this.messageObserver_.next(pushMessage);
                    break;
                default:
                    // Noop.
                    break;
            }
        }, false);
    };
    /**
     * Checks to see if the required API's are valid or not.
     * @private
     * @return {boolean} Returns true if the desired APIs are available.
     */
    WindowController.prototype.isSupported_ = function () {
        return ('serviceWorker' in navigator &&
            'PushManager' in window &&
            'Notification' in window &&
            'fetch' in window &&
            ServiceWorkerRegistration.prototype.hasOwnProperty('showNotification') &&
            PushSubscription.prototype.hasOwnProperty('getKey'));
    };
    return WindowController;
}(__WEBPACK_IMPORTED_MODULE_0__controller_interface__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (WindowController);

//# sourceMappingURL=window-controller.js.map


/***/ }),

/***/ "../../../../@firebase/messaging/dist/esm/src/helpers/array-buffer-to-base64.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function toBase64(arrayBuffer) {
    var uint8Version = new Uint8Array(arrayBuffer);
    return window.btoa(String.fromCharCode.apply(null, uint8Version));
}
/* harmony default export */ __webpack_exports__["a"] = (function (arrayBuffer) {
    var base64String = toBase64(arrayBuffer);
    return base64String
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
});;

//# sourceMappingURL=array-buffer-to-base64.js.map


/***/ }),

/***/ "../../../../@firebase/messaging/dist/esm/src/models/default-sw.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* harmony default export */ __webpack_exports__["a"] = ({
    path: '/firebase-messaging-sw.js',
    scope: '/firebase-cloud-messaging-push-scope'
});

//# sourceMappingURL=default-sw.js.map


/***/ }),

/***/ "../../../../@firebase/messaging/dist/esm/src/models/errors.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var CODES = {
    AVAILABLE_IN_WINDOW: 'only-available-in-window',
    AVAILABLE_IN_SW: 'only-available-in-sw',
    SHOULD_BE_INHERITED: 'should-be-overriden',
    BAD_SENDER_ID: 'bad-sender-id',
    INCORRECT_GCM_SENDER_ID: 'incorrect-gcm-sender-id',
    PERMISSION_DEFAULT: 'permission-default',
    PERMISSION_BLOCKED: 'permission-blocked',
    UNSUPPORTED_BROWSER: 'unsupported-browser',
    NOTIFICATIONS_BLOCKED: 'notifications-blocked',
    FAILED_DEFAULT_REGISTRATION: 'failed-serviceworker-registration',
    SW_REGISTRATION_EXPECTED: 'sw-registration-expected',
    GET_SUBSCRIPTION_FAILED: 'get-subscription-failed',
    INVALID_SAVED_TOKEN: 'invalid-saved-token',
    SW_REG_REDUNDANT: 'sw-reg-redundant',
    TOKEN_SUBSCRIBE_FAILED: 'token-subscribe-failed',
    TOKEN_SUBSCRIBE_NO_TOKEN: 'token-subscribe-no-token',
    TOKEN_SUBSCRIBE_NO_PUSH_SET: 'token-subscribe-no-push-set',
    USE_SW_BEFORE_GET_TOKEN: 'use-sw-before-get-token',
    INVALID_DELETE_TOKEN: 'invalid-delete-token',
    DELETE_TOKEN_NOT_FOUND: 'delete-token-not-found',
    DELETE_SCOPE_NOT_FOUND: 'delete-scope-not-found',
    BG_HANDLER_FUNCTION_EXPECTED: 'bg-handler-function-expected',
    NO_WINDOW_CLIENT_TO_MSG: 'no-window-client-to-msg',
    UNABLE_TO_RESUBSCRIBE: 'unable-to-resubscribe',
    NO_FCM_TOKEN_FOR_RESUBSCRIBE: 'no-fcm-token-for-resubscribe',
    FAILED_TO_DELETE_TOKEN: 'failed-to-delete-token',
    NO_SW_IN_REG: 'no-sw-in-reg',
    BAD_SCOPE: 'bad-scope',
    BAD_VAPID_KEY: 'bad-vapid-key',
    BAD_SUBSCRIPTION: 'bad-subscription',
    BAD_TOKEN: 'bad-token',
    BAD_PUSH_SET: 'bad-push-set',
    FAILED_DELETE_VAPID_KEY: 'failed-delete-vapid-key'
};
var ERROR_MAP = (_a = {},
    _a[CODES.AVAILABLE_IN_WINDOW] = 'This method is available in a Window context.',
    _a[CODES.AVAILABLE_IN_SW] = 'This method is available in a service worker ' + 'context.',
    _a[CODES.SHOULD_BE_INHERITED] = 'This method should be overriden by ' + 'extended classes.',
    _a[CODES.BAD_SENDER_ID] = "Please ensure that 'messagingSenderId' is set " +
        'correctly in the options passed into firebase.initializeApp().',
    _a[CODES.PERMISSION_DEFAULT] = 'The required permissions were not granted and ' + 'dismissed instead.',
    _a[CODES.PERMISSION_BLOCKED] = 'The required permissions were not granted and ' + 'blocked instead.',
    _a[CODES.UNSUPPORTED_BROWSER] = "This browser doesn't support the API's " +
        'required to use the firebase SDK.',
    _a[CODES.NOTIFICATIONS_BLOCKED] = 'Notifications have been blocked.',
    _a[CODES.FAILED_DEFAULT_REGISTRATION] = 'We are unable to register the ' +
        'default service worker. {$browserErrorMessage}',
    _a[CODES.SW_REGISTRATION_EXPECTED] = 'A service worker registration was the ' + 'expected input.',
    _a[CODES.GET_SUBSCRIPTION_FAILED] = 'There was an error when trying to get ' +
        'any existing Push Subscriptions.',
    _a[CODES.INVALID_SAVED_TOKEN] = 'Unable to access details of the saved token.',
    _a[CODES.SW_REG_REDUNDANT] = 'The service worker being used for push was made ' + 'redundant.',
    _a[CODES.TOKEN_SUBSCRIBE_FAILED] = 'A problem occured while subscribing the ' + 'user to FCM: {$message}',
    _a[CODES.TOKEN_SUBSCRIBE_NO_TOKEN] = 'FCM returned no token when subscribing ' + 'the user to push.',
    _a[CODES.TOKEN_SUBSCRIBE_NO_PUSH_SET] = 'FCM returned an invalid response ' + 'when getting an FCM token.',
    _a[CODES.USE_SW_BEFORE_GET_TOKEN] = 'You must call useServiceWorker() before ' +
        'calling getToken() to ensure your service worker is used.',
    _a[CODES.INVALID_DELETE_TOKEN] = 'You must pass a valid token into ' +
        'deleteToken(), i.e. the token from getToken().',
    _a[CODES.DELETE_TOKEN_NOT_FOUND] = 'The deletion attempt for token could not ' +
        'be performed as the token was not found.',
    _a[CODES.DELETE_SCOPE_NOT_FOUND] = 'The deletion attempt for service worker ' +
        'scope could not be performed as the scope was not found.',
    _a[CODES.BG_HANDLER_FUNCTION_EXPECTED] = 'The input to ' + 'setBackgroundMessageHandler() must be a function.',
    _a[CODES.NO_WINDOW_CLIENT_TO_MSG] = 'An attempt was made to message a ' + 'non-existant window client.',
    _a[CODES.UNABLE_TO_RESUBSCRIBE] = 'There was an error while re-subscribing ' +
        'the FCM token for push messaging. Will have to resubscribe the ' +
        'user on next visit. {$message}',
    _a[CODES.NO_FCM_TOKEN_FOR_RESUBSCRIBE] = 'Could not find an FCM token ' +
        'and as a result, unable to resubscribe. Will have to resubscribe the ' +
        'user on next visit.',
    _a[CODES.FAILED_TO_DELETE_TOKEN] = 'Unable to delete the currently saved token.',
    _a[CODES.NO_SW_IN_REG] = 'Even though the service worker registration was ' +
        'successful, there was a problem accessing the service worker itself.',
    _a[CODES.INCORRECT_GCM_SENDER_ID] = "Please change your web app manifest's " +
        "'gcm_sender_id' value to '103953800507' to use Firebase messaging.",
    _a[CODES.BAD_SCOPE] = 'The service worker scope must be a string with at ' +
        'least one character.',
    _a[CODES.BAD_VAPID_KEY] = 'The public VAPID key must be a string with at ' + 'least one character.',
    _a[CODES.BAD_SUBSCRIPTION] = 'The subscription must be a valid ' + 'PushSubscription.',
    _a[CODES.BAD_TOKEN] = 'The FCM Token used for storage / lookup was not ' +
        'a valid token string.',
    _a[CODES.BAD_PUSH_SET] = 'The FCM push set used for storage / lookup was not ' +
        'not a valid push set string.',
    _a[CODES.FAILED_DELETE_VAPID_KEY] = 'The VAPID key could not be deleted.',
    _a);
/* harmony default export */ __webpack_exports__["a"] = ({
    codes: CODES,
    map: ERROR_MAP
});
var _a;

//# sourceMappingURL=errors.js.map


/***/ }),

/***/ "../../../../@firebase/messaging/dist/esm/src/models/fcm-details.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var FCM_APPLICATION_SERVER_KEY = [
    0x04,
    0x33,
    0x94,
    0xf7,
    0xdf,
    0xa1,
    0xeb,
    0xb1,
    0xdc,
    0x03,
    0xa2,
    0x5e,
    0x15,
    0x71,
    0xdb,
    0x48,
    0xd3,
    0x2e,
    0xed,
    0xed,
    0xb2,
    0x34,
    0xdb,
    0xb7,
    0x47,
    0x3a,
    0x0c,
    0x8f,
    0xc4,
    0xcc,
    0xe1,
    0x6f,
    0x3c,
    0x8c,
    0x84,
    0xdf,
    0xab,
    0xb6,
    0x66,
    0x3e,
    0xf2,
    0x0c,
    0xd4,
    0x8b,
    0xfe,
    0xe3,
    0xf9,
    0x76,
    0x2f,
    0x14,
    0x1c,
    0x63,
    0x08,
    0x6a,
    0x6f,
    0x2d,
    0xb1,
    0x1a,
    0x95,
    0xb0,
    0xce,
    0x37,
    0xc0,
    0x9c,
    0x6e
];
var SUBSCRIPTION_DETAILS = {
    userVisibleOnly: true,
    applicationServerKey: new Uint8Array(FCM_APPLICATION_SERVER_KEY)
};
/* harmony default export */ __webpack_exports__["a"] = ({
    ENDPOINT: 'https://fcm.googleapis.com',
    APPLICATION_SERVER_KEY: FCM_APPLICATION_SERVER_KEY,
    SUBSCRIPTION_OPTIONS: SUBSCRIPTION_DETAILS
});

//# sourceMappingURL=fcm-details.js.map


/***/ }),

/***/ "../../../../@firebase/messaging/dist/esm/src/models/notification-permission.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* harmony default export */ __webpack_exports__["a"] = ({
    granted: 'granted',
    default: 'default',
    denied: 'denied'
});

//# sourceMappingURL=notification-permission.js.map


/***/ }),

/***/ "../../../../@firebase/messaging/dist/esm/src/models/token-manager.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_util__ = __webpack_require__("../../../../@firebase/util/dist/cjs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__firebase_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__errors__ = __webpack_require__("../../../../@firebase/messaging/dist/esm/src/models/errors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_array_buffer_to_base64__ = __webpack_require__("../../../../@firebase/messaging/dist/esm/src/helpers/array-buffer-to-base64.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fcm_details__ = __webpack_require__("../../../../@firebase/messaging/dist/esm/src/models/fcm-details.js");
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





var FCM_TOKEN_OBJ_STORE = 'fcm_token_object_Store';
var FCM_TOKEN_DETAILS_DB_VERSION = 1;
var TokenManager = /** @class */ (function () {
    function TokenManager() {
        this.errorFactory_ = new __WEBPACK_IMPORTED_MODULE_0__firebase_util__["ErrorFactory"]('messaging', 'Messaging', __WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].map);
        this.openDbPromise_ = null;
    }
    /**
     * Get the indexedDB as a promsie.
     * @private
     * @return {Promise<IDBDatabase>} The IndexedDB database
     */
    TokenManager.prototype.openDatabase_ = function () {
        if (this.openDbPromise_) {
            return this.openDbPromise_;
        }
        this.openDbPromise_ = new Promise(function (resolve, reject) {
            var request = indexedDB.open(TokenManager.DB_NAME, FCM_TOKEN_DETAILS_DB_VERSION);
            request.onerror = function (event) {
                reject(event.target.error);
            };
            request.onsuccess = function (event) {
                resolve(event.target.result);
            };
            request.onupgradeneeded = function (event) {
                var db = event.target.result;
                var objectStore = db.createObjectStore(FCM_TOKEN_OBJ_STORE, {
                    keyPath: 'swScope'
                });
                // Make sure the sender ID can be searched
                objectStore.createIndex('fcmSenderId', 'fcmSenderId', {
                    unique: false
                });
                objectStore.createIndex('fcmToken', 'fcmToken', {
                    unique: true
                });
            };
        });
        return this.openDbPromise_;
    };
    /**
     * Close the currently open database.
     * @return {Promise<?>} Returns the result of the promise chain.
     */
    TokenManager.prototype.closeDatabase = function () {
        var _this = this;
        if (this.openDbPromise_) {
            return this.openDbPromise_.then(function (db) {
                db.close();
                _this.openDbPromise_ = null;
            });
        }
        return Promise.resolve();
    };
    /**
     * Given a token, this method will look up the details in indexedDB.
     * @public
     * @param {string} fcmToken
     * @return {Promise<Object>} The details associated with that token.
     */
    TokenManager.prototype.getTokenDetailsFromToken = function (fcmToken) {
        return this.openDatabase_().then(function (db) {
            return new Promise(function (resolve, reject) {
                var transaction = db.transaction([FCM_TOKEN_OBJ_STORE]);
                var objectStore = transaction.objectStore(FCM_TOKEN_OBJ_STORE);
                var index = objectStore.index('fcmToken');
                var request = index.get(fcmToken);
                request.onerror = function (event) {
                    reject(event.target.error);
                };
                request.onsuccess = function (event) {
                    resolve(event.target.result);
                };
            });
        });
    };
    TokenManager.prototype.getTokenDetailsFromSWScope_ = function (swScope) {
        return this.openDatabase_().then(function (db) {
            return new Promise(function (resolve, reject) {
                var transaction = db.transaction([FCM_TOKEN_OBJ_STORE]);
                var objectStore = transaction.objectStore(FCM_TOKEN_OBJ_STORE);
                var scopeRequest = objectStore.get(swScope);
                scopeRequest.onerror = function (event) {
                    reject(event.target.error);
                };
                scopeRequest.onsuccess = function (event) {
                    resolve(event.target.result);
                };
            });
        });
    };
    TokenManager.prototype.getAllTokenDetailsForSenderId_ = function (senderId) {
        return this.openDatabase_().then(function (db) {
            return new Promise(function (resolve, reject) {
                var transaction = db.transaction([FCM_TOKEN_OBJ_STORE]);
                var objectStore = transaction.objectStore(FCM_TOKEN_OBJ_STORE);
                var senderIdTokens = [];
                var cursorRequest = objectStore.openCursor();
                cursorRequest.onerror = function (event) {
                    reject(event.target.error);
                };
                cursorRequest.onsuccess = function (event) {
                    var cursor = event.target.result;
                    if (cursor) {
                        if (cursor.value['fcmSenderId'] === senderId) {
                            senderIdTokens.push(cursor.value);
                        }
                        cursor.continue();
                    }
                    else {
                        resolve(senderIdTokens);
                    }
                };
            });
        });
    };
    /**
     * Given a PushSubscription and messagingSenderId, get an FCM token.
     * @public
     * @param  {string} senderId The 'messagingSenderId' to tie the token to.
     * @param  {PushSubscription} subscription The PushSusbcription to "federate".
     * @param  {string=} pushSet If defined this will swap the subscription for
     * matching FCM token.
     * @return {Promise<!Object>} Returns the FCM token to be used in place
     * of the PushSubscription.
     */
    TokenManager.prototype.subscribeToFCM = function (senderId, subscription, pushSet) {
        var _this = this;
        var p256dh = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_array_buffer_to_base64__["a" /* default */])(subscription['getKey']('p256dh'));
        var auth = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_array_buffer_to_base64__["a" /* default */])(subscription['getKey']('auth'));
        var fcmSubscribeBody = "authorized_entity=" + senderId + "&" +
            ("endpoint=" + subscription.endpoint + "&") +
            ("encryption_key=" + p256dh + "&") +
            ("encryption_auth=" + auth);
        if (pushSet) {
            fcmSubscribeBody += "&pushSet=" + pushSet;
        }
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var subscribeOptions = {
            method: 'POST',
            headers: headers,
            body: fcmSubscribeBody
        };
        return fetch(__WEBPACK_IMPORTED_MODULE_3__fcm_details__["a" /* default */].ENDPOINT + '/fcm/connect/subscribe', subscribeOptions)
            .then(function (response) { return response.json(); })
            .then(function (response) {
            var fcmTokenResponse = response;
            if (fcmTokenResponse['error']) {
                var message = fcmTokenResponse['error']['message'];
                throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.TOKEN_SUBSCRIBE_FAILED, {
                    message: message
                });
            }
            if (!fcmTokenResponse['token']) {
                throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.TOKEN_SUBSCRIBE_NO_TOKEN);
            }
            if (!fcmTokenResponse['pushSet']) {
                throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.TOKEN_SUBSCRIBE_NO_PUSH_SET);
            }
            return {
                token: fcmTokenResponse['token'],
                pushSet: fcmTokenResponse['pushSet']
            };
        });
    };
    /**
     * Checks the that fields in the PushSubscription are equivalent to the
     * details stores in the masterTokenDetails.
     * @private
     * @param  {PushSubscription} subscription The push subscription we expect
     * the master token to match.
     * @param  {Object}  masterTokenDetails The saved details we wish to compare
     * with the PushSubscription
     * @return {boolean} true if the subscription and token details are
     * equivalent.
     */
    TokenManager.prototype.isSameSubscription_ = function (subscription, masterTokenDetails) {
        // getKey() isn't defined in the PushSubscription externs file, hence
        // subscription['getKey']('<key name>').
        return (subscription.endpoint === masterTokenDetails['endpoint'] &&
            Object(__WEBPACK_IMPORTED_MODULE_2__helpers_array_buffer_to_base64__["a" /* default */])(subscription['getKey']('auth')) ===
                masterTokenDetails['auth'] &&
            Object(__WEBPACK_IMPORTED_MODULE_2__helpers_array_buffer_to_base64__["a" /* default */])(subscription['getKey']('p256dh')) ===
                masterTokenDetails['p256dh']);
    };
    /**
     * Save the details for the fcm token for re-use at a later date.
     * @private
     * @param  {string} senderId The 'messagingSenderId' used for this project
     * @param  {ServiceWorkerRegistration} swRegistration The service worker
     * used to subscribe the user for web push
     * @param  {PushSubscription} subscription The push subscription passed to
     * FCM for the current token.
     * @param  {string} fcmToken The FCM token currently used on this
     * device.
     * @param  {string} fcmPushSet The FCM push tied to the fcm token.
     * @return {Promise<void>}
     */
    TokenManager.prototype.saveTokenDetails_ = function (senderId, swRegistration, subscription, fcmToken, fcmPushSet) {
        var details = {
            swScope: swRegistration.scope,
            endpoint: subscription.endpoint,
            auth: Object(__WEBPACK_IMPORTED_MODULE_2__helpers_array_buffer_to_base64__["a" /* default */])(subscription['getKey']('auth')),
            p256dh: Object(__WEBPACK_IMPORTED_MODULE_2__helpers_array_buffer_to_base64__["a" /* default */])(subscription['getKey']('p256dh')),
            fcmToken: fcmToken,
            fcmPushSet: fcmPushSet,
            fcmSenderId: senderId
        };
        return this.openDatabase_().then(function (db) {
            return new Promise(function (resolve, reject) {
                var transaction = db.transaction([FCM_TOKEN_OBJ_STORE], 'readwrite');
                var objectStore = transaction.objectStore(FCM_TOKEN_OBJ_STORE);
                var request = objectStore.put(details);
                request.onerror = function (event) {
                    reject(event.target.error);
                };
                request.onsuccess = function (event) {
                    resolve();
                };
            });
        });
    };
    /**
     * Returns the saved FCM Token if one is available and still valid,
     * otherwise `null` is returned.
     * @param {string} senderId This should be the sender ID associated with the
     * FCM Token being retrieved.
     * @param {ServiceWorkerRegistration} swRegistration Registration to be used
     * to subscribe the user to push.
     * @return {Promise<string> | Promise} Returns the saved FCM Token if
     * avilable and valid.
     * @export
     */
    TokenManager.prototype.getSavedToken = function (senderId, swRegistration) {
        var _this = this;
        if (!(swRegistration instanceof ServiceWorkerRegistration)) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.SW_REGISTRATION_EXPECTED));
        }
        if (typeof senderId !== 'string' || senderId.length === 0) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.BAD_SENDER_ID));
        }
        return this.getAllTokenDetailsForSenderId_(senderId)
            .then(function (allTokenDetails) {
            if (allTokenDetails.length === 0) {
                return;
            }
            var index = allTokenDetails.findIndex(function (tokenDetails) {
                return (swRegistration.scope === tokenDetails['swScope'] &&
                    senderId === tokenDetails['fcmSenderId']);
            });
            if (index === -1) {
                return;
            }
            return allTokenDetails[index];
        })
            .then(function (tokenDetails) {
            if (!tokenDetails) {
                return;
            }
            return swRegistration.pushManager
                .getSubscription()
                .catch(function (err) {
                throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.GET_SUBSCRIPTION_FAILED);
            })
                .then(function (subscription) {
                if (subscription &&
                    _this.isSameSubscription_(subscription, tokenDetails)) {
                    return tokenDetails['fcmToken'];
                }
            });
        });
    };
    /**
     * Creates a new FCM token.
     */
    TokenManager.prototype.createToken = function (senderId, swRegistration) {
        var _this = this;
        if (typeof senderId !== 'string' || senderId.length === 0) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.BAD_SENDER_ID));
        }
        if (!(swRegistration instanceof ServiceWorkerRegistration)) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.SW_REGISTRATION_EXPECTED));
        }
        // Check for existing subscription first
        var subscription;
        var fcmTokenDetails;
        return swRegistration.pushManager
            .getSubscription()
            .then(function (subscription) {
            if (subscription) {
                return subscription;
            }
            return swRegistration.pushManager.subscribe(__WEBPACK_IMPORTED_MODULE_3__fcm_details__["a" /* default */].SUBSCRIPTION_OPTIONS);
        })
            .then(function (sub) {
            subscription = sub;
            return _this.subscribeToFCM(senderId, subscription);
        })
            .then(function (tokenDetails) {
            fcmTokenDetails = tokenDetails;
            return _this.saveTokenDetails_(senderId, swRegistration, subscription, fcmTokenDetails['token'], fcmTokenDetails['pushSet']);
        })
            .then(function () { return fcmTokenDetails['token']; });
    };
    /**
     * This method deletes details of the current FCM token.
     * It's returning a promise in case we need to move to an async
     * method for deleting at a later date.
     * @param {string} token Token to be deleted
     * @return {Promise<Object>} Resolves once the FCM token details have been
     * deleted and returns the deleted details.
     */
    TokenManager.prototype.deleteToken = function (token) {
        var _this = this;
        if (typeof token !== 'string' || token.length === 0) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.INVALID_DELETE_TOKEN));
        }
        return this.getTokenDetailsFromToken(token).then(function (details) {
            if (!details) {
                throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.DELETE_TOKEN_NOT_FOUND);
            }
            return _this.openDatabase_().then(function (db) {
                return new Promise(function (resolve, reject) {
                    var transaction = db.transaction([FCM_TOKEN_OBJ_STORE], 'readwrite');
                    var objectStore = transaction.objectStore(FCM_TOKEN_OBJ_STORE);
                    var request = objectStore.delete(details['swScope']);
                    request.onerror = function (event) {
                        reject(event.target.error);
                    };
                    request.onsuccess = function (event) {
                        if (event.target.result === 0) {
                            reject(_this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.FAILED_TO_DELETE_TOKEN));
                            return;
                        }
                        resolve(details);
                    };
                });
            });
        });
    };
    return TokenManager;
}());
/* harmony default export */ __webpack_exports__["a"] = (TokenManager);

//# sourceMappingURL=token-manager.js.map


/***/ }),

/***/ "../../../../@firebase/messaging/dist/esm/src/models/worker-page-message.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// These fields are strings to prevent closure from thinking goog.getMsg
// should be used to initialise the values
var PARAMS = {
    TYPE_OF_MSG: 'firebase-messaging-msg-type',
    DATA: 'firebase-messaging-msg-data'
};
// This value isn't using the TYPE_OF_MSG short hand as closure
// expects the variable to be defined via goog.getMsg
var msgType = {
    PUSH_MSG_RECEIVED: 'push-msg-received',
    NOTIFICATION_CLICKED: 'notification-clicked'
};
var createNewMsg = function (msgType, msgData) {
    var message = (_a = {},
        _a[PARAMS.TYPE_OF_MSG] = msgType,
        _a[PARAMS.DATA] = msgData,
        _a);
    return message;
    var _a;
};
/* harmony default export */ __webpack_exports__["a"] = ({
    PARAMS: PARAMS,
    TYPES_OF_MSG: msgType,
    createNewMsg: createNewMsg
});

//# sourceMappingURL=worker-page-message.js.map


/***/ }),

/***/ "../../../../@firebase/storage/dist/esm/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["registerStorage"] = registerStorage;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_app__ = __webpack_require__("../../../../@firebase/app/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_implementation_string__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_implementation_taskenums__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/taskenums.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_implementation_xhriopool__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/xhriopool.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_reference__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/reference.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_service__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/service.js");
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







/**
 * Type constant for Firebase Storage.
 */
var STORAGE_TYPE = 'storage';
function factory(app, unused, opt_url) {
    return new __WEBPACK_IMPORTED_MODULE_5__src_service__["a" /* Service */](app, new __WEBPACK_IMPORTED_MODULE_3__src_implementation_xhriopool__["a" /* XhrIoPool */](), opt_url);
}
function registerStorage(instance) {
    var namespaceExports = {
        // no-inline
        TaskState: __WEBPACK_IMPORTED_MODULE_2__src_implementation_taskenums__["c" /* TaskState */],
        TaskEvent: __WEBPACK_IMPORTED_MODULE_2__src_implementation_taskenums__["b" /* TaskEvent */],
        StringFormat: __WEBPACK_IMPORTED_MODULE_1__src_implementation_string__["a" /* StringFormat */],
        Storage: __WEBPACK_IMPORTED_MODULE_5__src_service__["a" /* Service */],
        Reference: __WEBPACK_IMPORTED_MODULE_4__src_reference__["a" /* Reference */]
    };
    instance.INTERNAL.registerService(STORAGE_TYPE, factory, namespaceExports, undefined, 
    // Allow multiple storage instances per app.
    true);
}
registerStorage(__WEBPACK_IMPORTED_MODULE_0__firebase_app__["default"]);

//# sourceMappingURL=index.js.map


/***/ }),

/***/ "../../../../@firebase/storage/dist/esm/src/implementation/args.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["g"] = validate;
/* unused harmony export ArgSpec */
/* unused harmony export and_ */
/* harmony export (immutable) */ __webpack_exports__["e"] = stringSpec;
/* harmony export (immutable) */ __webpack_exports__["f"] = uploadDataSpec;
/* harmony export (immutable) */ __webpack_exports__["b"] = metadataSpec;
/* harmony export (immutable) */ __webpack_exports__["c"] = nonNegativeNumberSpec;
/* harmony export (immutable) */ __webpack_exports__["a"] = looseObjectSpec;
/* harmony export (immutable) */ __webpack_exports__["d"] = nullFunctionSpec;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/error.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__metadata__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/metadata.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/type.js");
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/**
 * @param name Name of the function.
 * @param specs Argument specs.
 * @param passed The actual arguments passed to the function.
 * @throws {fbs.Error} If the arguments are invalid.
 */
function validate(name, specs, passed) {
    var minArgs = specs.length;
    var maxArgs = specs.length;
    for (var i = 0; i < specs.length; i++) {
        if (specs[i].optional) {
            minArgs = i;
            break;
        }
    }
    var validLength = minArgs <= passed.length && passed.length <= maxArgs;
    if (!validLength) {
        throw __WEBPACK_IMPORTED_MODULE_0__error__["g" /* invalidArgumentCount */](minArgs, maxArgs, name, passed.length);
    }
    for (var i = 0; i < passed.length; i++) {
        try {
            specs[i].validator(passed[i]);
        }
        catch (e) {
            if (e instanceof Error) {
                throw __WEBPACK_IMPORTED_MODULE_0__error__["f" /* invalidArgument */](i, name, e.message);
            }
            else {
                throw __WEBPACK_IMPORTED_MODULE_0__error__["f" /* invalidArgument */](i, name, e);
            }
        }
    }
}
/**
 * @struct
 */
var ArgSpec = /** @class */ (function () {
    function ArgSpec(validator, opt_optional) {
        var self = this;
        this.validator = function (p) {
            if (self.optional && !__WEBPACK_IMPORTED_MODULE_2__type__["c" /* isJustDef */](p)) {
                return;
            }
            validator(p);
        };
        this.optional = !!opt_optional;
    }
    return ArgSpec;
}());

function and_(v1, v2) {
    return function (p) {
        v1(p);
        v2(p);
    };
}
function stringSpec(opt_validator, opt_optional) {
    function stringValidator(p) {
        if (!__WEBPACK_IMPORTED_MODULE_2__type__["j" /* isString */](p)) {
            throw 'Expected string.';
        }
    }
    var validator;
    if (opt_validator) {
        validator = and_(stringValidator, opt_validator);
    }
    else {
        validator = stringValidator;
    }
    return new ArgSpec(validator, opt_optional);
}
function uploadDataSpec() {
    function validator(p) {
        var valid = p instanceof Uint8Array ||
            p instanceof ArrayBuffer ||
            (__WEBPACK_IMPORTED_MODULE_2__type__["e" /* isNativeBlobDefined */]() && p instanceof Blob);
        if (!valid) {
            throw 'Expected Blob or File.';
        }
    }
    return new ArgSpec(validator);
}
function metadataSpec(opt_optional) {
    return new ArgSpec(__WEBPACK_IMPORTED_MODULE_1__metadata__["c" /* metadataValidator */], opt_optional);
}
function nonNegativeNumberSpec() {
    function validator(p) {
        var valid = __WEBPACK_IMPORTED_MODULE_2__type__["h" /* isNumber */](p) && p >= 0;
        if (!valid) {
            throw 'Expected a number 0 or greater.';
        }
    }
    return new ArgSpec(validator);
}
function looseObjectSpec(opt_validator, opt_optional) {
    function validator(p) {
        var isLooseObject = p === null || (__WEBPACK_IMPORTED_MODULE_2__type__["a" /* isDef */](p) && p instanceof Object);
        if (!isLooseObject) {
            throw 'Expected an Object.';
        }
        if (opt_validator !== undefined && opt_validator !== null) {
            opt_validator(p);
        }
    }
    return new ArgSpec(validator, opt_optional);
}
function nullFunctionSpec(opt_optional) {
    function validator(p) {
        var valid = p === null || __WEBPACK_IMPORTED_MODULE_2__type__["b" /* isFunction */](p);
        if (!valid) {
            throw 'Expected a Function.';
        }
    }
    return new ArgSpec(validator, opt_optional);
}

//# sourceMappingURL=args.js.map


/***/ }),

/***/ "../../../../@firebase/storage/dist/esm/src/implementation/array.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = contains;
/* harmony export (immutable) */ __webpack_exports__["a"] = clone;
/* harmony export (immutable) */ __webpack_exports__["c"] = remove;
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns true if the object is contained in the array (compared with ===).
 * @template T
 */
function contains(array, elem) {
    return array.indexOf(elem) !== -1;
}
/**
 * Returns a shallow copy of the array or array-like object (e.g. arguments).
 * @template T
 */
function clone(arraylike) {
    return Array.prototype.slice.call(arraylike);
}
/**
 * Removes the given element from the given array, if it is contained.
 * Directly modifies the passed-in array.
 * @template T
 */
function remove(array, elem) {
    var i = array.indexOf(elem);
    if (i !== -1) {
        array.splice(i, 1);
    }
}

//# sourceMappingURL=array.js.map


/***/ }),

/***/ "../../../../@firebase/storage/dist/esm/src/implementation/async.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = async;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__promise_external__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/promise_external.js");
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Method for invoking a callback asynchronously.
 */

/**
 * Returns a function that invokes f with its arguments asynchronously as a
 * microtask, i.e. as soon as possible after the current script returns back
 * into browser code.
 */
function async(f) {
    return function () {
        var argsToForward = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            argsToForward[_i] = arguments[_i];
        }
        __WEBPACK_IMPORTED_MODULE_0__promise_external__["c" /* resolve */](true).then(function () {
            f.apply(null, argsToForward);
        });
    };
}

//# sourceMappingURL=async.js.map


/***/ }),

/***/ "../../../../@firebase/storage/dist/esm/src/implementation/authwrapper.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthWrapper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/error.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__failrequest__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/failrequest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/location.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__promise_external__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/promise_external.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__requestmap__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/requestmap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__type__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/type.js");







/**
 * @param app If null, getAuthToken always resolves with null.
 * @param service The storage service associated with this auth wrapper.
 *     Untyped to avoid circular type dependencies.
 * @struct
 */
var AuthWrapper = /** @class */ (function () {
    function AuthWrapper(app, maker, requestMaker, service, pool) {
        this.bucket_ = null;
        this.deleted_ = false;
        this.app_ = app;
        if (this.app_ !== null) {
            var options = this.app_.options;
            if (__WEBPACK_IMPORTED_MODULE_6__type__["a" /* isDef */](options)) {
                this.bucket_ = AuthWrapper.extractBucket_(options);
            }
        }
        this.storageRefMaker_ = maker;
        this.requestMaker_ = requestMaker;
        this.pool_ = pool;
        this.service_ = service;
        this.maxOperationRetryTime_ = __WEBPACK_IMPORTED_MODULE_0__constants__["d" /* defaultMaxOperationRetryTime */];
        this.maxUploadRetryTime_ = __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* defaultMaxUploadRetryTime */];
        this.requestMap_ = new __WEBPACK_IMPORTED_MODULE_5__requestmap__["a" /* RequestMap */]();
    }
    AuthWrapper.extractBucket_ = function (config) {
        var bucketString = config[__WEBPACK_IMPORTED_MODULE_0__constants__["c" /* configOption */]] || null;
        if (bucketString == null) {
            return null;
        }
        var loc = __WEBPACK_IMPORTED_MODULE_3__location__["a" /* Location */].makeFromBucketSpec(bucketString);
        return loc.bucket;
    };
    AuthWrapper.prototype.getAuthToken = function () {
        // TODO(andysoto): remove ifDef checks after firebase-app implements stubs
        // (b/28673818).
        if (this.app_ !== null &&
            __WEBPACK_IMPORTED_MODULE_6__type__["a" /* isDef */](this.app_.INTERNAL) &&
            __WEBPACK_IMPORTED_MODULE_6__type__["a" /* isDef */](this.app_.INTERNAL.getToken)) {
            return this.app_.INTERNAL.getToken().then(function (response) {
                if (response !== null) {
                    return response.accessToken;
                }
                else {
                    return null;
                }
            }, function (_error) {
                return null;
            });
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_4__promise_external__["c" /* resolve */](null);
        }
    };
    AuthWrapper.prototype.bucket = function () {
        if (this.deleted_) {
            throw __WEBPACK_IMPORTED_MODULE_1__error__["b" /* appDeleted */]();
        }
        else {
            return this.bucket_;
        }
    };
    /**
     * The service associated with this auth wrapper. Untyped to avoid circular
     * type dependencies.
     */
    AuthWrapper.prototype.service = function () {
        return this.service_;
    };
    /**
     * Returns a new firebaseStorage.Reference object referencing this AuthWrapper
     * at the given Location.
     * @param loc The Location.
     * @return Actually a firebaseStorage.Reference, typing not allowed
     *     because of circular dependency problems.
     */
    AuthWrapper.prototype.makeStorageReference = function (loc) {
        return this.storageRefMaker_(this, loc);
    };
    AuthWrapper.prototype.makeRequest = function (requestInfo, authToken) {
        if (!this.deleted_) {
            var request = this.requestMaker_(requestInfo, authToken, this.pool_);
            this.requestMap_.addRequest(request);
            return request;
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_2__failrequest__["a" /* FailRequest */](__WEBPACK_IMPORTED_MODULE_1__error__["b" /* appDeleted */]());
        }
    };
    /**
     * Stop running requests and prevent more from being created.
     */
    AuthWrapper.prototype.deleteApp = function () {
        this.deleted_ = true;
        this.app_ = null;
        this.requestMap_.clear();
    };
    AuthWrapper.prototype.maxUploadRetryTime = function () {
        return this.maxUploadRetryTime_;
    };
    AuthWrapper.prototype.setMaxUploadRetryTime = function (time) {
        this.maxUploadRetryTime_ = time;
    };
    AuthWrapper.prototype.maxOperationRetryTime = function () {
        return this.maxOperationRetryTime_;
    };
    AuthWrapper.prototype.setMaxOperationRetryTime = function (time) {
        this.maxOperationRetryTime_ = time;
    };
    return AuthWrapper;
}());


//# sourceMappingURL=authwrapper.js.map


/***/ }),

/***/ "../../../../@firebase/storage/dist/esm/src/implementation/backoff.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = start;
/* harmony export (immutable) */ __webpack_exports__["b"] = stop;
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @param f May be invoked
 *     before the function returns.
 * @param callback Get all the arguments passed to the function
 *     passed to f, including the initial boolean.
 */
function start(f, callback, timeout) {
    // TODO(andysoto): make this code cleaner (probably refactor into an actual
    // type instead of a bunch of functions with state shared in the closure)
    var waitSeconds = 1;
    // Would type this as "number" but that doesn't work for Node so ¯\_(ツ)_/¯
    var timeoutId = null;
    var hitTimeout = false;
    var cancelState = 0;
    function canceled() {
        return cancelState === 2;
    }
    var triggeredCallback = false;
    function triggerCallback() {
        if (!triggeredCallback) {
            triggeredCallback = true;
            callback.apply(null, arguments);
        }
    }
    function callWithDelay(millis) {
        timeoutId = setTimeout(function () {
            timeoutId = null;
            f(handler, canceled());
        }, millis);
    }
    function handler(success) {
        var var_args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            var_args[_i - 1] = arguments[_i];
        }
        if (triggeredCallback) {
            return;
        }
        if (success) {
            triggerCallback.apply(null, arguments);
            return;
        }
        var mustStop = canceled() || hitTimeout;
        if (mustStop) {
            triggerCallback.apply(null, arguments);
            return;
        }
        if (waitSeconds < 64) {
            /* TODO(andysoto): don't back off so quickly if we know we're offline. */
            waitSeconds *= 2;
        }
        var waitMillis;
        if (cancelState === 1) {
            cancelState = 2;
            waitMillis = 0;
        }
        else {
            waitMillis = (waitSeconds + Math.random()) * 1000;
        }
        callWithDelay(waitMillis);
    }
    var stopped = false;
    function stop(wasTimeout) {
        if (stopped) {
            return;
        }
        stopped = true;
        if (triggeredCallback) {
            return;
        }
        if (timeoutId !== null) {
            if (!wasTimeout) {
                cancelState = 2;
            }
            clearTimeout(timeoutId);
            callWithDelay(0);
        }
        else {
            if (!wasTimeout) {
                cancelState = 1;
            }
        }
    }
    callWithDelay(0);
    setTimeout(function () {
        hitTimeout = true;
        stop(true);
    }, timeout);
    return stop;
}
/**
 * Stops the retry loop from repeating.
 * If the function is currently "in between" retries, it is invoked immediately
 * with the second parameter as "true". Otherwise, it will be invoked once more
 * after the current invocation finishes iff the current invocation would have
 * triggered another retry.
 */
function stop(id) {
    id(false);
}

//# sourceMappingURL=backoff.js.map


/***/ }),

/***/ "../../../../@firebase/storage/dist/esm/src/implementation/blob.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FbsBlob; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fs__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/fs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__string__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/type.js");
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @file Provides a Blob-like wrapper for various binary types (including the
 * native Blob type). This makes it possible to upload types like ArrayBuffers,
 * making uploads possible in environments without the native Blob type.
 */




/**
 * @param opt_elideCopy If true, doesn't copy mutable input data
 *     (e.g. Uint8Arrays). Pass true only if you know the objects will not be
 *     modified after this blob's construction.
 */
var FbsBlob = /** @class */ (function () {
    function FbsBlob(data, opt_elideCopy) {
        var size = 0;
        var blobType = '';
        if (__WEBPACK_IMPORTED_MODULE_2__type__["d" /* isNativeBlob */](data)) {
            this.data_ = data;
            size = data.size;
            blobType = data.type;
        }
        else if (data instanceof ArrayBuffer) {
            if (opt_elideCopy) {
                this.data_ = new Uint8Array(data);
            }
            else {
                this.data_ = new Uint8Array(data.byteLength);
                this.data_.set(new Uint8Array(data));
            }
            size = this.data_.length;
        }
        else if (data instanceof Uint8Array) {
            if (opt_elideCopy) {
                this.data_ = data;
            }
            else {
                this.data_ = new Uint8Array(data.length);
                this.data_.set(data);
            }
            size = data.length;
        }
        this.size_ = size;
        this.type_ = blobType;
    }
    FbsBlob.prototype.size = function () {
        return this.size_;
    };
    FbsBlob.prototype.type = function () {
        return this.type_;
    };
    FbsBlob.prototype.slice = function (startByte, endByte) {
        if (__WEBPACK_IMPORTED_MODULE_2__type__["d" /* isNativeBlob */](this.data_)) {
            var realBlob = this.data_;
            var sliced = __WEBPACK_IMPORTED_MODULE_0__fs__["b" /* sliceBlob */](realBlob, startByte, endByte);
            if (sliced === null) {
                return null;
            }
            return new FbsBlob(sliced);
        }
        else {
            var slice = new Uint8Array(this.data_.buffer, startByte, endByte - startByte);
            return new FbsBlob(slice, true);
        }
    };
    FbsBlob.getBlob = function () {
        var var_args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            var_args[_i] = arguments[_i];
        }
        if (__WEBPACK_IMPORTED_MODULE_2__type__["e" /* isNativeBlobDefined */]()) {
            var blobby = var_args.map(function (val) {
                if (val instanceof FbsBlob) {
                    return val.data_;
                }
                else {
                    return val;
                }
            });
            return new FbsBlob(__WEBPACK_IMPORTED_MODULE_0__fs__["a" /* getBlob */].apply(null, blobby));
        }
        else {
            var uint8Arrays = var_args.map(function (val) {
                if (__WEBPACK_IMPORTED_MODULE_2__type__["j" /* isString */](val)) {
                    return __WEBPACK_IMPORTED_MODULE_1__string__["b" /* dataFromString */](__WEBPACK_IMPORTED_MODULE_1__string__["a" /* StringFormat */].RAW, val).data;
                }
                else {
                    // Blobs don't exist, so this has to be a Uint8Array.
                    return val.data_;
                }
            });
            var finalLength_1 = 0;
            uint8Arrays.forEach(function (array) {
                finalLength_1 += array.byteLength;
            });
            var merged_1 = new Uint8Array(finalLength_1);
            var index_1 = 0;
            uint8Arrays.forEach(function (array) {
                for (var i = 0; i < array.length; i++) {
                    merged_1[index_1++] = array[i];
                }
            });
            return new FbsBlob(merged_1, true);
        }
    };
    FbsBlob.prototype.uploadData = function () {
        return this.data_;
    };
    return FbsBlob;
}());


//# sourceMappingURL=blob.js.map


/***/ }),

/***/ "../../../../@firebase/storage/dist/esm/src/implementation/constants.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return domainBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return downloadBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return apiBaseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return apiUploadBaseUrl; });
/* unused harmony export setDomainBase */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return configOption; });
/* unused harmony export shortMaxOperationRetryTime */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defaultMaxOperationRetryTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return defaultMaxUploadRetryTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return minSafeInteger; });
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Constants used in the Firebase Storage library.
 */
/**
 * Domain and scheme for API calls.
 */
var domainBase = 'https://firebasestorage.googleapis.com';
/**
 * Domain and scheme for object downloads.
 */
var downloadBase = 'https://firebasestorage.googleapis.com';
/**
 * Base URL for non-upload calls to the API.
 */
var apiBaseUrl = '/v0';
/**
 * Base URL for upload calls to the API.
 */
var apiUploadBaseUrl = '/v0';
function setDomainBase(domainBase) {
    domainBase = domainBase;
}
var configOption = 'storageBucket';
/**
 * 1 minute
 */
var shortMaxOperationRetryTime = 1 * 60 * 1000;
/**
 * 2 minutes
 */
var defaultMaxOperationRetryTime = 2 * 60 * 1000;
/**
 * 10 minutes
 */
var defaultMaxUploadRetryTime = 10 * 60 * 100;
/**
 * This is the value of Number.MIN_SAFE_INTEGER, which is not well supported
 * enough for us to use it directly.
 */
var minSafeInteger = -9007199254740991;

//# sourceMappingURL=constants.js.map


/***/ }),

/***/ "../../../../@firebase/storage/dist/esm/src/implementation/error.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FirebaseStorageError */
/* unused harmony export errors */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Code; });
/* unused harmony export prependCode */
/* harmony export (immutable) */ __webpack_exports__["s"] = unknown;
/* harmony export (immutable) */ __webpack_exports__["m"] = objectNotFound;
/* unused harmony export bucketNotFound */
/* unused harmony export projectNotFound */
/* harmony export (immutable) */ __webpack_exports__["n"] = quotaExceeded;
/* harmony export (immutable) */ __webpack_exports__["q"] = unauthenticated;
/* harmony export (immutable) */ __webpack_exports__["r"] = unauthorized;
/* harmony export (immutable) */ __webpack_exports__["o"] = retryLimitExceeded;
/* unused harmony export invalidChecksum */
/* harmony export (immutable) */ __webpack_exports__["c"] = canceled;
/* unused harmony export invalidEventName */
/* harmony export (immutable) */ __webpack_exports__["k"] = invalidUrl;
/* harmony export (immutable) */ __webpack_exports__["h"] = invalidDefaultBucket;
/* unused harmony export noDefaultBucket */
/* harmony export (immutable) */ __webpack_exports__["d"] = cannotSliceBlob;
/* harmony export (immutable) */ __webpack_exports__["p"] = serverFileWrongSize;
/* harmony export (immutable) */ __webpack_exports__["l"] = noDownloadURL;
/* harmony export (immutable) */ __webpack_exports__["f"] = invalidArgument;
/* harmony export (immutable) */ __webpack_exports__["g"] = invalidArgumentCount;
/* harmony export (immutable) */ __webpack_exports__["b"] = appDeleted;
/* harmony export (immutable) */ __webpack_exports__["j"] = invalidRootOperation;
/* harmony export (immutable) */ __webpack_exports__["i"] = invalidFormat;
/* harmony export (immutable) */ __webpack_exports__["e"] = internalError;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/constants.js");
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var FirebaseStorageError = /** @class */ (function () {
    function FirebaseStorageError(code, message) {
        this.code_ = prependCode(code);
        this.message_ = 'Firebase Storage: ' + message;
        this.serverResponse_ = null;
        this.name_ = 'FirebaseError';
    }
    FirebaseStorageError.prototype.codeProp = function () {
        return this.code;
    };
    FirebaseStorageError.prototype.codeEquals = function (code) {
        return prependCode(code) === this.codeProp();
    };
    FirebaseStorageError.prototype.serverResponseProp = function () {
        return this.serverResponse_;
    };
    FirebaseStorageError.prototype.setServerResponseProp = function (serverResponse) {
        this.serverResponse_ = serverResponse;
    };
    Object.defineProperty(FirebaseStorageError.prototype, "name", {
        get: function () {
            return this.name_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseStorageError.prototype, "code", {
        get: function () {
            return this.code_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseStorageError.prototype, "message", {
        get: function () {
            return this.message_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseStorageError.prototype, "serverResponse", {
        get: function () {
            return this.serverResponse_;
        },
        enumerable: true,
        configurable: true
    });
    return FirebaseStorageError;
}());

var errors = {};
var Code = {
    // Shared between all platforms
    UNKNOWN: 'unknown',
    OBJECT_NOT_FOUND: 'object-not-found',
    BUCKET_NOT_FOUND: 'bucket-not-found',
    PROJECT_NOT_FOUND: 'project-not-found',
    QUOTA_EXCEEDED: 'quota-exceeded',
    UNAUTHENTICATED: 'unauthenticated',
    UNAUTHORIZED: 'unauthorized',
    RETRY_LIMIT_EXCEEDED: 'retry-limit-exceeded',
    INVALID_CHECKSUM: 'invalid-checksum',
    CANCELED: 'canceled',
    // JS specific
    INVALID_EVENT_NAME: 'invalid-event-name',
    INVALID_URL: 'invalid-url',
    INVALID_DEFAULT_BUCKET: 'invalid-default-bucket',
    NO_DEFAULT_BUCKET: 'no-default-bucket',
    CANNOT_SLICE_BLOB: 'cannot-slice-blob',
    SERVER_FILE_WRONG_SIZE: 'server-file-wrong-size',
    NO_DOWNLOAD_URL: 'no-download-url',
    INVALID_ARGUMENT: 'invalid-argument',
    INVALID_ARGUMENT_COUNT: 'invalid-argument-count',
    APP_DELETED: 'app-deleted',
    INVALID_ROOT_OPERATION: 'invalid-root-operation',
    INVALID_FORMAT: 'invalid-format',
    INTERNAL_ERROR: 'internal-error'
};
function prependCode(code) {
    return 'storage/' + code;
}
function unknown() {
    var message = 'An unknown error occurred, please check the error payload for ' +
        'server response.';
    return new FirebaseStorageError(Code.UNKNOWN, message);
}
function objectNotFound(path) {
    return new FirebaseStorageError(Code.OBJECT_NOT_FOUND, "Object '" + path + "' does not exist.");
}
function bucketNotFound(bucket) {
    return new FirebaseStorageError(Code.BUCKET_NOT_FOUND, "Bucket '" + bucket + "' does not exist.");
}
function projectNotFound(project) {
    return new FirebaseStorageError(Code.PROJECT_NOT_FOUND, "Project '" + project + "' does not exist.");
}
function quotaExceeded(bucket) {
    return new FirebaseStorageError(Code.QUOTA_EXCEEDED, "Quota for bucket '" +
        bucket +
        "' exceeded, please view quota on " +
        'https://firebase.google.com/pricing/.');
}
function unauthenticated() {
    var message = 'User is not authenticated, please authenticate using Firebase ' +
        'Authentication and try again.';
    return new FirebaseStorageError(Code.UNAUTHENTICATED, message);
}
function unauthorized(path) {
    return new FirebaseStorageError(Code.UNAUTHORIZED, "User does not have permission to access '" + path + "'.");
}
function retryLimitExceeded() {
    return new FirebaseStorageError(Code.RETRY_LIMIT_EXCEEDED, 'Max retry time for operation exceeded, please try again.');
}
function invalidChecksum(path, checksum, calculated) {
    return new FirebaseStorageError(Code.INVALID_CHECKSUM, "Uploaded/downloaded object '" +
        path +
        "' has checksum '" +
        checksum +
        "' which does not match '" +
        calculated +
        "'. Please retry the upload/download.");
}
function canceled() {
    return new FirebaseStorageError(Code.CANCELED, 'User canceled the upload/download.');
}
function invalidEventName(name) {
    return new FirebaseStorageError(Code.INVALID_EVENT_NAME, "Invalid event name '" + name + "'.");
}
function invalidUrl(url) {
    return new FirebaseStorageError(Code.INVALID_URL, "Invalid URL '" + url + "'.");
}
function invalidDefaultBucket(bucket) {
    return new FirebaseStorageError(Code.INVALID_DEFAULT_BUCKET, "Invalid default bucket '" + bucket + "'.");
}
function noDefaultBucket() {
    return new FirebaseStorageError(Code.NO_DEFAULT_BUCKET, 'No default bucket ' +
        "found. Did you set the '" +
        __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* configOption */] +
        "' property when initializing the app?");
}
function cannotSliceBlob() {
    return new FirebaseStorageError(Code.CANNOT_SLICE_BLOB, 'Cannot slice blob for upload. Please retry the upload.');
}
function serverFileWrongSize() {
    return new FirebaseStorageError(Code.SERVER_FILE_WRONG_SIZE, 'Server recorded incorrect upload file size, please retry the upload.');
}
function noDownloadURL() {
    return new FirebaseStorageError(Code.NO_DOWNLOAD_URL, 'The given file does not have any download URLs.');
}
function invalidArgument(index, fnName, message) {
    return new FirebaseStorageError(Code.INVALID_ARGUMENT, 'Invalid argument in `' + fnName + '` at index ' + index + ': ' + message);
}
function invalidArgumentCount(argMin, argMax, fnName, real) {
    var countPart;
    var plural;
    if (argMin === argMax) {
        countPart = argMin;
        plural = argMin === 1 ? 'argument' : 'arguments';
    }
    else {
        countPart = 'between ' + argMin + ' and ' + argMax;
        plural = 'arguments';
    }
    return new FirebaseStorageError(Code.INVALID_ARGUMENT_COUNT, 'Invalid argument count in `' +
        fnName +
        '`: Expected ' +
        countPart +
        ' ' +
        plural +
        ', received ' +
        real +
        '.');
}
function appDeleted() {
    return new FirebaseStorageError(Code.APP_DELETED, 'The Firebase app was deleted.');
}
/**
 * @param name The name of the operation that was invalid.
 */
function invalidRootOperation(name) {
    return new FirebaseStorageError(Code.INVALID_ROOT_OPERATION, "The operation '" +
        name +
        "' cannot be performed on a root reference, create a non-root " +
        "reference using child, such as .child('file.png').");
}
/**
 * @param format The format that was not valid.
 * @param message A message describing the format violation.
 */
function invalidFormat(format, message) {
    return new FirebaseStorageError(Code.INVALID_FORMAT, "String does not match format '" + format + "': " + message);
}
/**
 * @param message A message describing the internal error.
 */
function internalError(message) {
    throw new FirebaseStorageError(Code.INTERNAL_ERROR, 'Internal error: ' + message);
}

//# sourceMappingURL=error.js.map


/***/ }),

/***/ "../../../../@firebase/storage/dist/esm/src/implementation/failrequest.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FailRequest; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__promise_external__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/promise_external.js");

/**
 * A request whose promise always fails.
 * @struct
 * @template T
 */
var FailRequest = /** @class */ (function () {
    function FailRequest(error) {
        this.promise_ = __WEBPACK_IMPORTED_MODULE_0__promise_external__["b" /* reject */](error);
    }
    /** @inheritDoc */
    FailRequest.prototype.getPromise = function () {
        return this.promise_;
    };
    /** @inheritDoc */
    FailRequest.prototype.cancel = function (appDelete) {
        if (appDelete === void 0) { appDelete = false; }
    };
    return FailRequest;
}());


//# sourceMappingURL=failrequest.js.map


/***/ }),

/***/ "../../../../@firebase/storage/dist/esm/src/implementation/fs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getBlob;
/* harmony export (immutable) */ __webpack_exports__["b"] = sliceBlob;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__type__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/type.js");

function getBlobBuilder() {
    if (typeof BlobBuilder !== 'undefined') {
        return BlobBuilder;
    }
    else if (typeof WebKitBlobBuilder !== 'undefined') {
        return WebKitBlobBuilder;
    }
    else {
        return undefined;
    }
}
/**
 * Concatenates one or more values together and converts them to a Blob.
 *
 * @param var_args The values that will make up the resulting blob.
 * @return The blob.
 */
function getBlob() {
    var var_args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        var_args[_i] = arguments[_i];
    }
    var BlobBuilder = getBlobBuilder();
    if (BlobBuilder !== undefined) {
        var bb = new BlobBuilder();
        for (var i = 0; i < var_args.length; i++) {
            bb.append(var_args[i]);
        }
        return bb.getBlob();
    }
    else {
        if (__WEBPACK_IMPORTED_MODULE_0__type__["e" /* isNativeBlobDefined */]()) {
            return new Blob(var_args);
        }
        else {
            throw Error("This browser doesn't seem to support creating Blobs");
        }
    }
}
/**
 * Slices the blob. The returned blob contains data from the start byte
 * (inclusive) till the end byte (exclusive). Negative indices cannot be used.
 *
 * @param blob The blob to be sliced.
 * @param start Index of the starting byte.
 * @param end Index of the ending byte.
 * @return The blob slice or null if not supported.
 */
function sliceBlob(blob, start, end) {
    if (blob.webkitSlice) {
        return blob.webkitSlice(start, end);
    }
    else if (blob.mozSlice) {
        return blob.mozSlice(start, end);
    }
    else if (blob.slice) {
        return blob.slice(start, end);
    }
    return null;
}

//# sourceMappingURL=fs.js.map


/***/ }),

/***/ "../../../../@firebase/storage/dist/esm/src/implementation/json.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = jsonObjectOrNull;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__type__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/type.js");
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Returns the Object resulting from parsing the given JSON, or null if the
 * given string does not represent a JSON object.
 */
function jsonObjectOrNull(s) {
    var obj;
    try {
        obj = JSON.parse(s);
    }
    catch (e) {
        return null;
    }
    if (__WEBPACK_IMPORTED_MODULE_0__type__["f" /* isNonArrayObject */](obj)) {
        return obj;
    }
    else {
        return null;
    }
}

//# sourceMappingURL=json.js.map


/***/ }),

/***/ "../../../../@firebase/storage/dist/esm/src/implementation/location.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Location; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/error.js");
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Functionality related to the parsing/composition of bucket/
 * object location.
 */

/**
 * @struct
 */
var Location = /** @class */ (function () {
    function Location(bucket, path) {
        this.bucket = bucket;
        this.path_ = path;
    }
    Object.defineProperty(Location.prototype, "path", {
        get: function () {
            return this.path_;
        },
        enumerable: true,
        configurable: true
    });
    Location.prototype.fullServerUrl = function () {
        var encode = encodeURIComponent;
        return '/b/' + encode(this.bucket) + '/o/' + encode(this.path);
    };
    Location.prototype.bucketOnlyServerUrl = function () {
        var encode = encodeURIComponent;
        return '/b/' + encode(this.bucket) + '/o';
    };
    Location.makeFromBucketSpec = function (bucketString) {
        var bucketLocation;
        try {
            bucketLocation = Location.makeFromUrl(bucketString);
        }
        catch (e) {
            // Not valid URL, use as-is. This lets you put bare bucket names in
            // config.
            return new Location(bucketString, '');
        }
        if (bucketLocation.path === '') {
            return bucketLocation;
        }
        else {
            throw __WEBPACK_IMPORTED_MODULE_0__error__["h" /* invalidDefaultBucket */](bucketString);
        }
    };
    Location.makeFromUrl = function (url) {
        var location = null;
        var bucketDomain = '([A-Za-z0-9.\\-]+)';
        function gsModify(loc) {
            if (loc.path.charAt(loc.path.length - 1) === '/') {
                loc.path_ = loc.path_.slice(0, -1);
            }
        }
        var gsPath = '(/(.*))?$';
        var path = '(/([^?#]*).*)?$';
        var gsRegex = new RegExp('^gs://' + bucketDomain + gsPath, 'i');
        var gsIndices = { bucket: 1, path: 3 };
        function httpModify(loc) {
            loc.path_ = decodeURIComponent(loc.path);
        }
        var version = 'v[A-Za-z0-9_]+';
        var httpRegex = new RegExp('^https?://firebasestorage\\.googleapis\\.com/' +
            version +
            '/b/' +
            bucketDomain +
            '/o' +
            path, 'i');
        var httpIndices = { bucket: 1, path: 3 };
        var groups = [
            { regex: gsRegex, indices: gsIndices, postModify: gsModify },
            { regex: httpRegex, indices: httpIndices, postModify: httpModify }
        ];
        for (var i = 0; i < groups.length; i++) {
            var group = groups[i];
            var captures = group.regex.exec(url);
            if (captures) {
                var bucketValue = captures[group.indices.bucket];
                var pathValue = captures[group.indices.path];
                if (!pathValue) {
                    pathValue = '';
                }
                location = new Location(bucketValue, pathValue);
                group.postModify(location);
                break;
            }
        }
        if (location == null) {
            throw __WEBPACK_IMPORTED_MODULE_0__error__["k" /* invalidUrl */](url);
        }
        return location;
    };
    return Location;
}());


//# sourceMappingURL=location.js.map


/***/ }),

/***/ "../../../../@firebase/storage/dist/esm/src/implementation/metadata.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export noXform_ */
/* unused harmony export Mapping */
/* unused harmony export xformPath */
/* harmony export (immutable) */ __webpack_exports__["b"] = getMappings;
/* unused harmony export addRef */
/* unused harmony export fromResource */
/* harmony export (immutable) */ __webpack_exports__["a"] = fromResourceString;
/* harmony export (immutable) */ __webpack_exports__["d"] = toResourceString;
/* harmony export (immutable) */ __webpack_exports__["c"] = metadataValidator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__json__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/json.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__location__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/location.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__path__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/path.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__type__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/type.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__url__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/url.js");
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





function noXform_(metadata, value) {
    return value;
}
/**
 * @struct
 */
var Mapping = /** @class */ (function () {
    function Mapping(server, opt_local, opt_writable, opt_xform) {
        this.server = server;
        this.local = opt_local || server;
        this.writable = !!opt_writable;
        this.xform = opt_xform || noXform_;
    }
    return Mapping;
}());

var mappings_ = null;
function xformPath(fullPath) {
    var valid = __WEBPACK_IMPORTED_MODULE_3__type__["j" /* isString */](fullPath);
    if (!valid || fullPath.length < 2) {
        return fullPath;
    }
    else {
        fullPath = fullPath;
        return __WEBPACK_IMPORTED_MODULE_2__path__["b" /* lastComponent */](fullPath);
    }
}
function getMappings() {
    if (mappings_) {
        return mappings_;
    }
    var mappings = [];
    mappings.push(new Mapping('bucket'));
    mappings.push(new Mapping('generation'));
    mappings.push(new Mapping('metageneration'));
    mappings.push(new Mapping('name', 'fullPath', true));
    function mappingsXformPath(metadata, fullPath) {
        return xformPath(fullPath);
    }
    var nameMapping = new Mapping('name');
    nameMapping.xform = mappingsXformPath;
    mappings.push(nameMapping);
    /**
     * Coerces the second param to a number, if it is defined.
     */
    function xformSize(metadata, size) {
        if (__WEBPACK_IMPORTED_MODULE_3__type__["a" /* isDef */](size)) {
            return +size;
        }
        else {
            return size;
        }
    }
    var sizeMapping = new Mapping('size');
    sizeMapping.xform = xformSize;
    mappings.push(sizeMapping);
    mappings.push(new Mapping('timeCreated'));
    mappings.push(new Mapping('updated'));
    mappings.push(new Mapping('md5Hash', null, true));
    mappings.push(new Mapping('cacheControl', null, true));
    mappings.push(new Mapping('contentDisposition', null, true));
    mappings.push(new Mapping('contentEncoding', null, true));
    mappings.push(new Mapping('contentLanguage', null, true));
    mappings.push(new Mapping('contentType', null, true));
    mappings.push(new Mapping('metadata', 'customMetadata', true));
    /**
     * Transforms a comma-separated string of tokens into a list of download
     * URLs.
     */
    function xformTokens(metadata, tokens) {
        var valid = __WEBPACK_IMPORTED_MODULE_3__type__["j" /* isString */](tokens) && tokens.length > 0;
        if (!valid) {
            // This can happen if objects are uploaded through GCS and retrieved
            // through list, so we don't want to throw an Error.
            return [];
        }
        var encode = encodeURIComponent;
        var tokensList = tokens.split(',');
        var urls = tokensList.map(function (token) {
            var bucket = metadata['bucket'];
            var path = metadata['fullPath'];
            var urlPart = '/b/' + encode(bucket) + '/o/' + encode(path);
            var base = __WEBPACK_IMPORTED_MODULE_4__url__["a" /* makeDownloadUrl */](urlPart);
            var queryString = __WEBPACK_IMPORTED_MODULE_4__url__["c" /* makeQueryString */]({
                alt: 'media',
                token: token
            });
            return base + queryString;
        });
        return urls;
    }
    mappings.push(new Mapping('downloadTokens', 'downloadURLs', false, xformTokens));
    mappings_ = mappings;
    return mappings_;
}
function addRef(metadata, authWrapper) {
    function generateRef() {
        var bucket = metadata['bucket'];
        var path = metadata['fullPath'];
        var loc = new __WEBPACK_IMPORTED_MODULE_1__location__["a" /* Location */](bucket, path);
        return authWrapper.makeStorageReference(loc);
    }
    Object.defineProperty(metadata, 'ref', { get: generateRef });
}
function fromResource(authWrapper, resource, mappings) {
    var metadata = {};
    metadata['type'] = 'file';
    var len = mappings.length;
    for (var i = 0; i < len; i++) {
        var mapping = mappings[i];
        metadata[mapping.local] = mapping.xform(metadata, resource[mapping.server]);
    }
    addRef(metadata, authWrapper);
    return metadata;
}
function fromResourceString(authWrapper, resourceString, mappings) {
    var obj = __WEBPACK_IMPORTED_MODULE_0__json__["a" /* jsonObjectOrNull */](resourceString);
    if (obj === null) {
        return null;
    }
    var resource = obj;
    return fromResource(authWrapper, resource, mappings);
}
function toResourceString(metadata, mappings) {
    var resource = {};
    var len = mappings.length;
    for (var i = 0; i < len; i++) {
        var mapping = mappings[i];
        if (mapping.writable) {
            resource[mapping.server] = metadata[mapping.local];
        }
    }
    return JSON.stringify(resource);
}
function metadataValidator(p) {
    var validType = p && __WEBPACK_IMPORTED_MODULE_3__type__["i" /* isObject */](p);
    if (!validType) {
        throw 'Expected Metadata object.';
    }
    for (var key in p) {
        var val = p[key];
        if (key === 'customMetadata') {
            if (!__WEBPACK_IMPORTED_MODULE_3__type__["i" /* isObject */](val)) {
                throw 'Expected object for \'customMetadata\' mapping.';
            }
        }
        else {
            if (__WEBPACK_IMPORTED_MODULE_3__type__["g" /* isNonNullObject */](val)) {
                throw "Mapping for '" + key + "' cannot be an object.";
            }
        }
    }
}

//# sourceMappingURL=metadata.js.map


/***/ }),

/***/ "../../../../@firebase/storage/dist/esm/src/implementation/object.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export contains */
/* harmony export (immutable) */ __webpack_exports__["b"] = forEach;
/* harmony export (immutable) */ __webpack_exports__["a"] = clone;
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Contains methods for working with objects.
 */
function contains(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
function forEach(obj, f) {
    for (var key in obj) {
        if (contains(obj, key)) {
            f(key, obj[key]);
        }
    }
}
function clone(obj) {
    if (obj == null) {
        return {};
    }
    var c = {};
    forEach(obj, function (key, val) {
        c[key] = val;
    });
    return c;
}

//# sourceMappingURL=object.js.map


/***/ }),

/***/ "../../../../@firebase/storage/dist/esm/src/implementation/observer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Observer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__type__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/type.js");
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @struct
 */
var Observer = /** @class */ (function () {
    function Observer(nextOrObserver, opt_error, opt_complete) {
        var asFunctions = __WEBPACK_IMPORTED_MODULE_0__type__["b" /* isFunction */](nextOrObserver) ||
            __WEBPACK_IMPORTED_MODULE_0__type__["a" /* isDef */](opt_error) ||
            __WEBPACK_IMPORTED_MODULE_0__type__["a" /* isDef */](opt_complete);
        if (asFunctions) {
            this.next = nextOrObserver;
            this.error = opt_error || null;
            this.complete = opt_complete || null;
        }
        else {
            var observer = nextOrObserver;
            this.next = observer.next || null;
            this.error = observer.error || null;
            this.complete = observer.complete || null;
        }
    }
    return Observer;
}());


//# sourceMappingURL=observer.js.map


/***/ }),

/***/ "../../../../@firebase/storage/dist/esm/src/implementation/path.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = parent;
/* harmony export (immutable) */ __webpack_exports__["a"] = child;
/* harmony export (immutable) */ __webpack_exports__["b"] = lastComponent;
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Contains helper methods for manipulating paths.
 */
/**
 * @return Null if the path is already at the root.
 */
function parent(path) {
    if (path.length == 0) {
        return null;
    }
    var index = path.lastIndexOf('/');
    if (index === -1) {
        return '';
    }
    var newPath = path.slice(0, index);
    return newPath;
}
function child(path, childPath) {
    var canonicalChildPath = childPath
        .split('/')
        .filter(function (component) {
        return component.length > 0;
    })
        .join('/');
    if (path.length === 0) {
        return canonicalChildPath;
    }
    else {
        return path + '/' + canonicalChildPath;
    }
}
/**
 * Returns the last component of a path.
 * '/foo/bar' -> 'bar'
 * '/foo/bar/baz/' -> 'baz/'
 * '/a' -> 'a'
 */
function lastComponent(path) {
    var index = path.lastIndexOf('/', path.length - 2);
    if (index === -1) {
        return path;
    }
    else {
        return path.slice(index + 1);
    }
}

//# sourceMappingURL=path.js.map


/***/ }),

/***/ "../../../../@firebase/storage/dist/esm/src/implementation/promise_external.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = make;
/* harmony export (immutable) */ __webpack_exports__["c"] = resolve;
/* harmony export (immutable) */ __webpack_exports__["b"] = reject;
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Implements the promise abstraction interface for external
 * (public SDK) packaging, which just passes through to the firebase-app impl.
 */
/**
 * @template T
 * @param {function((function(T): void),
 *                  (function(!Error): void))} resolver
 */
function make(resolver) {
    return new Promise(resolver);
}
/**
 * @template T
 */
function resolve(value) {
    return Promise.resolve(value);
}
function reject(error) {
    return Promise.reject(error);
}

//# sourceMappingURL=promise_external.js.map


/***/ }),

/***/ "../../../../@firebase/storage/dist/esm/src/implementation/request.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RequestEndStatus */
/* unused harmony export addAuthHeader_ */
/* unused harmony export addVersionHeader_ */
/* harmony export (immutable) */ __webpack_exports__["a"] = makeRequest;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_app__ = __webpack_require__("../../../../@firebase/app/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backoff__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/backoff.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/error.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__object__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__promise_external__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/promise_external.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__type__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/type.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__url__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/url.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__xhrio__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/xhrio.js");
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Defines methods used to actually send HTTP requests from
 * abstract representations.
 */









/**
 * @struct
 * @template T
 */
var NetworkRequest = /** @class */ (function () {
    function NetworkRequest(url, method, headers, body, successCodes, additionalRetryCodes, callback, errorCallback, timeout, progressCallback, pool) {
        this.pendingXhr_ = null;
        this.backoffId_ = null;
        this.resolve_ = null;
        this.reject_ = null;
        this.canceled_ = false;
        this.appDelete_ = false;
        this.url_ = url;
        this.method_ = method;
        this.headers_ = headers;
        this.body_ = body;
        this.successCodes_ = successCodes.slice();
        this.additionalRetryCodes_ = additionalRetryCodes.slice();
        this.callback_ = callback;
        this.errorCallback_ = errorCallback;
        this.progressCallback_ = progressCallback;
        this.timeout_ = timeout;
        this.pool_ = pool;
        var self = this;
        this.promise_ = __WEBPACK_IMPORTED_MODULE_5__promise_external__["a" /* make */](function (resolve, reject) {
            self.resolve_ = resolve;
            self.reject_ = reject;
            self.start_();
        });
    }
    /**
     * Actually starts the retry loop.
     */
    NetworkRequest.prototype.start_ = function () {
        var self = this;
        function doTheRequest(backoffCallback, canceled) {
            if (canceled) {
                backoffCallback(false, new RequestEndStatus(false, null, true));
                return;
            }
            var xhr = self.pool_.createXhrIo();
            self.pendingXhr_ = xhr;
            function progressListener(progressEvent) {
                var loaded = progressEvent.loaded;
                var total = progressEvent.lengthComputable ? progressEvent.total : -1;
                if (self.progressCallback_ !== null) {
                    self.progressCallback_(loaded, total);
                }
            }
            if (self.progressCallback_ !== null) {
                xhr.addUploadProgressListener(progressListener);
            }
            xhr
                .send(self.url_, self.method_, self.body_, self.headers_)
                .then(function (xhr) {
                if (self.progressCallback_ !== null) {
                    xhr.removeUploadProgressListener(progressListener);
                }
                self.pendingXhr_ = null;
                xhr = xhr;
                var hitServer = xhr.getErrorCode() === __WEBPACK_IMPORTED_MODULE_8__xhrio__["a" /* ErrorCode */].NO_ERROR;
                var status = xhr.getStatus();
                if (!hitServer || self.isRetryStatusCode_(status)) {
                    var wasCanceled = xhr.getErrorCode() === __WEBPACK_IMPORTED_MODULE_8__xhrio__["a" /* ErrorCode */].ABORT;
                    backoffCallback(false, new RequestEndStatus(false, null, wasCanceled));
                    return;
                }
                var successCode = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* contains */](self.successCodes_, status);
                backoffCallback(true, new RequestEndStatus(successCode, xhr));
            });
        }
        /**
         * @param requestWentThrough True if the request eventually went
         *     through, false if it hit the retry limit or was canceled.
         */
        function backoffDone(requestWentThrough, status) {
            var resolve = self.resolve_;
            var reject = self.reject_;
            var xhr = status.xhr;
            if (status.wasSuccessCode) {
                try {
                    var result = self.callback_(xhr, xhr.getResponseText());
                    if (__WEBPACK_IMPORTED_MODULE_6__type__["c" /* isJustDef */](result)) {
                        resolve(result);
                    }
                    else {
                        resolve();
                    }
                }
                catch (e) {
                    reject(e);
                }
            }
            else {
                if (xhr !== null) {
                    var err = __WEBPACK_IMPORTED_MODULE_3__error__["s" /* unknown */]();
                    err.setServerResponseProp(xhr.getResponseText());
                    if (self.errorCallback_) {
                        reject(self.errorCallback_(xhr, err));
                    }
                    else {
                        reject(err);
                    }
                }
                else {
                    if (status.canceled) {
                        var err = self.appDelete_
                            ? __WEBPACK_IMPORTED_MODULE_3__error__["b" /* appDeleted */]()
                            : __WEBPACK_IMPORTED_MODULE_3__error__["c" /* canceled */]();
                        reject(err);
                    }
                    else {
                        var err = __WEBPACK_IMPORTED_MODULE_3__error__["o" /* retryLimitExceeded */]();
                        reject(err);
                    }
                }
            }
        }
        if (this.canceled_) {
            backoffDone(false, new RequestEndStatus(false, null, true));
        }
        else {
            this.backoffId_ = __WEBPACK_IMPORTED_MODULE_2__backoff__["a" /* start */](doTheRequest, backoffDone, this.timeout_);
        }
    };
    /** @inheritDoc */
    NetworkRequest.prototype.getPromise = function () {
        return this.promise_;
    };
    /** @inheritDoc */
    NetworkRequest.prototype.cancel = function (appDelete) {
        this.canceled_ = true;
        this.appDelete_ = appDelete || false;
        if (this.backoffId_ !== null) {
            __WEBPACK_IMPORTED_MODULE_2__backoff__["b" /* stop */](this.backoffId_);
        }
        if (this.pendingXhr_ !== null) {
            this.pendingXhr_.abort();
        }
    };
    NetworkRequest.prototype.isRetryStatusCode_ = function (status) {
        // The codes for which to retry came from this page:
        // https://cloud.google.com/storage/docs/exponential-backoff
        var isFiveHundredCode = status >= 500 && status < 600;
        var extraRetryCodes = [
            // Request Timeout: web server didn't receive full request in time.
            408,
            // Too Many Requests: you're getting rate-limited, basically.
            429
        ];
        var isExtraRetryCode = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* contains */](extraRetryCodes, status);
        var isRequestSpecificRetryCode = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* contains */](this.additionalRetryCodes_, status);
        return isFiveHundredCode || isExtraRetryCode || isRequestSpecificRetryCode;
    };
    return NetworkRequest;
}());
/**
 * A collection of information about the result of a network request.
 * @param opt_canceled Defaults to false.
 * @struct
 */
var RequestEndStatus = /** @class */ (function () {
    function RequestEndStatus(wasSuccessCode, xhr, opt_canceled) {
        this.wasSuccessCode = wasSuccessCode;
        this.xhr = xhr;
        this.canceled = !!opt_canceled;
    }
    return RequestEndStatus;
}());

function addAuthHeader_(headers, authToken) {
    if (authToken !== null && authToken.length > 0) {
        headers['Authorization'] = 'Firebase ' + authToken;
    }
}
function addVersionHeader_(headers) {
    var number = typeof __WEBPACK_IMPORTED_MODULE_0__firebase_app__["default"] !== 'undefined' ? __WEBPACK_IMPORTED_MODULE_0__firebase_app__["default"].SDK_VERSION : 'AppManager';
    headers['X-Firebase-Storage-Version'] = 'webjs/' + number;
}
/**
 * @template T
 */
function makeRequest(requestInfo, authToken, pool) {
    var queryPart = __WEBPACK_IMPORTED_MODULE_7__url__["c" /* makeQueryString */](requestInfo.urlParams);
    var url = requestInfo.url + queryPart;
    var headers = __WEBPACK_IMPORTED_MODULE_4__object__["a" /* clone */](requestInfo.headers);
    addAuthHeader_(headers, authToken);
    addVersionHeader_(headers);
    return new NetworkRequest(url, requestInfo.method, headers, requestInfo.body, requestInfo.successCodes, requestInfo.additionalRetryCodes, requestInfo.handler, requestInfo.errorHandler, requestInfo.timeout, requestInfo.progressCallback, pool);
}

//# sourceMappingURL=request.js.map


/***/ }),

/***/ "../../../../@firebase/storage/dist/esm/src/implementation/requestinfo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestInfo; });
var RequestInfo = /** @class */ (function () {
    function RequestInfo(url, method, 
        /**
         * Returns the value with which to resolve the request's promise. Only called
         * if the request is successful. Throw from this function to reject the
         * returned Request's promise with the thrown error.
         * Note: The XhrIo passed to this function may be reused after this callback
         * returns. Do not keep a reference to it in any way.
         */
        handler, timeout) {
        this.url = url;
        this.method = method;
        this.handler = handler;
        this.timeout = timeout;
        this.urlParams = {};
        this.headers = {};
        this.body = null;
        this.errorHandler = null;
        /**
         * Called with the current number of bytes uploaded and total size (-1 if not
         * computable) of the request body (i.e. used to report upload progress).
         */
        this.progressCallback = null;
        this.successCodes = [200];
        this.additionalRetryCodes = [];
    }
    return RequestInfo;
}());


//# sourceMappingURL=requestinfo.js.map


/***/ }),

/***/ "../../../../@firebase/storage/dist/esm/src/implementation/requestmap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestMap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__object__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/constants.js");
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * @struct
 */
var RequestMap = /** @class */ (function () {
    function RequestMap() {
        this.map_ = {};
        this.id_ = __WEBPACK_IMPORTED_MODULE_1__constants__["h" /* minSafeInteger */];
    }
    /**
     * Registers the given request with this map.
     * The request is unregistered when it completes.
     * @param r The request to register.
     */
    RequestMap.prototype.addRequest = function (r) {
        var id = this.id_;
        this.id_++;
        this.map_[id] = r;
        var self = this;
        function unmap() {
            delete self.map_[id];
        }
        r.getPromise().then(unmap, unmap);
    };
    /**
     * Cancels all registered requests.
     */
    RequestMap.prototype.clear = function () {
        __WEBPACK_IMPORTED_MODULE_0__object__["b" /* forEach */](this.map_, function (key, val) {
            if (val) {
                val.cancel(true);
            }
        });
        this.map_ = {};
    };
    return RequestMap;
}());


//# sourceMappingURL=requestmap.js.map


/***/ }),

/***/ "../../../../@firebase/storage/dist/esm/src/implementation/requests.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export handlerCheck */
/* unused harmony export metadataHandler */
/* unused harmony export sharedErrorHandler */
/* unused harmony export objectErrorHandler */
/* harmony export (immutable) */ __webpack_exports__["e"] = getMetadata;
/* harmony export (immutable) */ __webpack_exports__["i"] = updateMetadata;
/* harmony export (immutable) */ __webpack_exports__["d"] = deleteObject;
/* unused harmony export determineContentType_ */
/* unused harmony export metadataForUpload_ */
/* harmony export (immutable) */ __webpack_exports__["g"] = multipartUpload;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumableUploadStatus; });
/* unused harmony export checkResumeHeader_ */
/* harmony export (immutable) */ __webpack_exports__["c"] = createResumableUpload;
/* harmony export (immutable) */ __webpack_exports__["f"] = getResumableUploadStatus;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return resumableUploadChunkSize; });
/* harmony export (immutable) */ __webpack_exports__["b"] = continueResumableUpload;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blob__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/blob.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/error.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__metadata__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/metadata.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__object__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__requestinfo__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/requestinfo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__type__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/type.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__url__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/url.js");
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








/**
 * Throws the UNKNOWN FirebaseStorageError if cndn is false.
 */
function handlerCheck(cndn) {
    if (!cndn) {
        throw __WEBPACK_IMPORTED_MODULE_2__error__["s" /* unknown */]();
    }
}
function metadataHandler(authWrapper, mappings) {
    function handler(xhr, text) {
        var metadata = __WEBPACK_IMPORTED_MODULE_3__metadata__["a" /* fromResourceString */](authWrapper, text, mappings);
        handlerCheck(metadata !== null);
        return metadata;
    }
    return handler;
}
function sharedErrorHandler(location) {
    function errorHandler(xhr, err) {
        var newErr;
        if (xhr.getStatus() === 401) {
            newErr = __WEBPACK_IMPORTED_MODULE_2__error__["q" /* unauthenticated */]();
        }
        else {
            if (xhr.getStatus() === 402) {
                newErr = __WEBPACK_IMPORTED_MODULE_2__error__["n" /* quotaExceeded */](location.bucket);
            }
            else {
                if (xhr.getStatus() === 403) {
                    newErr = __WEBPACK_IMPORTED_MODULE_2__error__["r" /* unauthorized */](location.path);
                }
                else {
                    newErr = err;
                }
            }
        }
        newErr.setServerResponseProp(err.serverResponseProp());
        return newErr;
    }
    return errorHandler;
}
function objectErrorHandler(location) {
    var shared = sharedErrorHandler(location);
    function errorHandler(xhr, err) {
        var newErr = shared(xhr, err);
        if (xhr.getStatus() === 404) {
            newErr = __WEBPACK_IMPORTED_MODULE_2__error__["m" /* objectNotFound */](location.path);
        }
        newErr.setServerResponseProp(err.serverResponseProp());
        return newErr;
    }
    return errorHandler;
}
function getMetadata(authWrapper, location, mappings) {
    var urlPart = location.fullServerUrl();
    var url = __WEBPACK_IMPORTED_MODULE_7__url__["b" /* makeNormalUrl */](urlPart);
    var method = 'GET';
    var timeout = authWrapper.maxOperationRetryTime();
    var requestInfo = new __WEBPACK_IMPORTED_MODULE_5__requestinfo__["a" /* RequestInfo */](url, method, metadataHandler(authWrapper, mappings), timeout);
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function updateMetadata(authWrapper, location, metadata, mappings) {
    var urlPart = location.fullServerUrl();
    var url = __WEBPACK_IMPORTED_MODULE_7__url__["b" /* makeNormalUrl */](urlPart);
    var method = 'PATCH';
    var body = __WEBPACK_IMPORTED_MODULE_3__metadata__["d" /* toResourceString */](metadata, mappings);
    var headers = { 'Content-Type': 'application/json; charset=utf-8' };
    var timeout = authWrapper.maxOperationRetryTime();
    var requestInfo = new __WEBPACK_IMPORTED_MODULE_5__requestinfo__["a" /* RequestInfo */](url, method, metadataHandler(authWrapper, mappings), timeout);
    requestInfo.headers = headers;
    requestInfo.body = body;
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function deleteObject(authWrapper, location) {
    var urlPart = location.fullServerUrl();
    var url = __WEBPACK_IMPORTED_MODULE_7__url__["b" /* makeNormalUrl */](urlPart);
    var method = 'DELETE';
    var timeout = authWrapper.maxOperationRetryTime();
    function handler(xhr, text) { }
    var requestInfo = new __WEBPACK_IMPORTED_MODULE_5__requestinfo__["a" /* RequestInfo */](url, method, handler, timeout);
    requestInfo.successCodes = [200, 204];
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function determineContentType_(metadata, blob) {
    return ((metadata && metadata['contentType']) ||
        (blob && blob.type()) ||
        'application/octet-stream');
}
function metadataForUpload_(location, blob, opt_metadata) {
    var metadata = __WEBPACK_IMPORTED_MODULE_4__object__["a" /* clone */](opt_metadata);
    metadata['fullPath'] = location.path;
    metadata['size'] = blob.size();
    if (!metadata['contentType']) {
        metadata['contentType'] = determineContentType_(null, blob);
    }
    return metadata;
}
function multipartUpload(authWrapper, location, mappings, blob, opt_metadata) {
    var urlPart = location.bucketOnlyServerUrl();
    var headers = {
        'X-Goog-Upload-Protocol': 'multipart'
    };
    function genBoundary() {
        var str = '';
        for (var i = 0; i < 2; i++) {
            str =
                str +
                    Math.random()
                        .toString()
                        .slice(2);
        }
        return str;
    }
    var boundary = genBoundary();
    headers['Content-Type'] = 'multipart/related; boundary=' + boundary;
    var metadata = metadataForUpload_(location, blob, opt_metadata);
    var metadataString = __WEBPACK_IMPORTED_MODULE_3__metadata__["d" /* toResourceString */](metadata, mappings);
    var preBlobPart = '--' +
        boundary +
        '\r\n' +
        'Content-Type: application/json; charset=utf-8\r\n\r\n' +
        metadataString +
        '\r\n--' +
        boundary +
        '\r\n' +
        'Content-Type: ' +
        metadata['contentType'] +
        '\r\n\r\n';
    var postBlobPart = '\r\n--' + boundary + '--';
    var body = __WEBPACK_IMPORTED_MODULE_1__blob__["a" /* FbsBlob */].getBlob(preBlobPart, blob, postBlobPart);
    if (body === null) {
        throw __WEBPACK_IMPORTED_MODULE_2__error__["d" /* cannotSliceBlob */]();
    }
    var urlParams = { name: metadata['fullPath'] };
    var url = __WEBPACK_IMPORTED_MODULE_7__url__["d" /* makeUploadUrl */](urlPart);
    var method = 'POST';
    var timeout = authWrapper.maxUploadRetryTime();
    var requestInfo = new __WEBPACK_IMPORTED_MODULE_5__requestinfo__["a" /* RequestInfo */](url, method, metadataHandler(authWrapper, mappings), timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.headers = headers;
    requestInfo.body = body.uploadData();
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * @param current The number of bytes that have been uploaded so far.
 * @param total The total number of bytes in the upload.
 * @param opt_finalized True if the server has finished the upload.
 * @param opt_metadata The upload metadata, should
 *     only be passed if opt_finalized is true.
 * @struct
 */
var ResumableUploadStatus = /** @class */ (function () {
    function ResumableUploadStatus(current, total, finalized, metadata) {
        this.current = current;
        this.total = total;
        this.finalized = !!finalized;
        this.metadata = metadata || null;
    }
    return ResumableUploadStatus;
}());

function checkResumeHeader_(xhr, opt_allowed) {
    var status;
    try {
        status = xhr.getResponseHeader('X-Goog-Upload-Status');
    }
    catch (e) {
        handlerCheck(false);
    }
    var allowed = opt_allowed || ['active'];
    handlerCheck(__WEBPACK_IMPORTED_MODULE_0__array__["b" /* contains */](allowed, status));
    return status;
}
function createResumableUpload(authWrapper, location, mappings, blob, opt_metadata) {
    var urlPart = location.bucketOnlyServerUrl();
    var metadata = metadataForUpload_(location, blob, opt_metadata);
    var urlParams = { name: metadata['fullPath'] };
    var url = __WEBPACK_IMPORTED_MODULE_7__url__["d" /* makeUploadUrl */](urlPart);
    var method = 'POST';
    var headers = {
        'X-Goog-Upload-Protocol': 'resumable',
        'X-Goog-Upload-Command': 'start',
        'X-Goog-Upload-Header-Content-Length': blob.size(),
        'X-Goog-Upload-Header-Content-Type': metadata['contentType'],
        'Content-Type': 'application/json; charset=utf-8'
    };
    var body = __WEBPACK_IMPORTED_MODULE_3__metadata__["d" /* toResourceString */](metadata, mappings);
    var timeout = authWrapper.maxUploadRetryTime();
    function handler(xhr, text) {
        checkResumeHeader_(xhr);
        var url;
        try {
            url = xhr.getResponseHeader('X-Goog-Upload-URL');
        }
        catch (e) {
            handlerCheck(false);
        }
        handlerCheck(__WEBPACK_IMPORTED_MODULE_6__type__["j" /* isString */](url));
        return url;
    }
    var requestInfo = new __WEBPACK_IMPORTED_MODULE_5__requestinfo__["a" /* RequestInfo */](url, method, handler, timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.headers = headers;
    requestInfo.body = body;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * @param url From a call to fbs.requests.createResumableUpload.
 */
function getResumableUploadStatus(authWrapper, location, url, blob) {
    var headers = { 'X-Goog-Upload-Command': 'query' };
    function handler(xhr, text) {
        var status = checkResumeHeader_(xhr, ['active', 'final']);
        var sizeString;
        try {
            sizeString = xhr.getResponseHeader('X-Goog-Upload-Size-Received');
        }
        catch (e) {
            handlerCheck(false);
        }
        var size = parseInt(sizeString, 10);
        handlerCheck(!isNaN(size));
        return new ResumableUploadStatus(size, blob.size(), status === 'final');
    }
    var method = 'POST';
    var timeout = authWrapper.maxUploadRetryTime();
    var requestInfo = new __WEBPACK_IMPORTED_MODULE_5__requestinfo__["a" /* RequestInfo */](url, method, handler, timeout);
    requestInfo.headers = headers;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * Any uploads via the resumable upload API must transfer a number of bytes
 * that is a multiple of this number.
 */
var resumableUploadChunkSize = 256 * 1024;
/**
 * @param url From a call to fbs.requests.createResumableUpload.
 * @param chunkSize Number of bytes to upload.
 * @param opt_status The previous status.
 *     If not passed or null, we start from the beginning.
 * @throws fbs.Error If the upload is already complete, the passed in status
 *     has a final size inconsistent with the blob, or the blob cannot be sliced
 *     for upload.
 */
function continueResumableUpload(location, authWrapper, url, blob, chunkSize, mappings, opt_status, opt_progressCallback) {
    // TODO(andysoto): standardize on internal asserts
    // assert(!(opt_status && opt_status.finalized));
    var status = new ResumableUploadStatus(0, 0);
    if (opt_status) {
        status.current = opt_status.current;
        status.total = opt_status.total;
    }
    else {
        status.current = 0;
        status.total = blob.size();
    }
    if (blob.size() !== status.total) {
        throw __WEBPACK_IMPORTED_MODULE_2__error__["p" /* serverFileWrongSize */]();
    }
    var bytesLeft = status.total - status.current;
    var bytesToUpload = bytesLeft;
    if (chunkSize > 0) {
        bytesToUpload = Math.min(bytesToUpload, chunkSize);
    }
    var startByte = status.current;
    var endByte = startByte + bytesToUpload;
    var uploadCommand = bytesToUpload === bytesLeft ? 'upload, finalize' : 'upload';
    var headers = {
        'X-Goog-Upload-Command': uploadCommand,
        'X-Goog-Upload-Offset': status.current
    };
    var body = blob.slice(startByte, endByte);
    if (body === null) {
        throw __WEBPACK_IMPORTED_MODULE_2__error__["d" /* cannotSliceBlob */]();
    }
    function handler(xhr, text) {
        // TODO(andysoto): Verify the MD5 of each uploaded range:
        // the 'x-range-md5' header comes back with status code 308 responses.
        // We'll only be able to bail out though, because you can't re-upload a
        // range that you previously uploaded.
        var uploadStatus = checkResumeHeader_(xhr, ['active', 'final']);
        var newCurrent = status.current + bytesToUpload;
        var size = blob.size();
        var metadata;
        if (uploadStatus === 'final') {
            metadata = metadataHandler(authWrapper, mappings)(xhr, text);
        }
        else {
            metadata = null;
        }
        return new ResumableUploadStatus(newCurrent, size, uploadStatus === 'final', metadata);
    }
    var method = 'POST';
    var timeout = authWrapper.maxUploadRetryTime();
    var requestInfo = new __WEBPACK_IMPORTED_MODULE_5__requestinfo__["a" /* RequestInfo */](url, method, handler, timeout);
    requestInfo.headers = headers;
    requestInfo.body = body.uploadData();
    requestInfo.progressCallback = opt_progressCallback || null;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}

//# sourceMappingURL=requests.js.map


/***/ }),

/***/ "../../../../@firebase/storage/dist/esm/src/implementation/string.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StringFormat; });
/* harmony export (immutable) */ __webpack_exports__["c"] = formatValidator;
/* unused harmony export StringData */
/* harmony export (immutable) */ __webpack_exports__["b"] = dataFromString;
/* unused harmony export utf8Bytes_ */
/* unused harmony export percentEncodedBytes_ */
/* unused harmony export base64Bytes_ */
/* unused harmony export dataURLBytes_ */
/* unused harmony export dataURLContentType_ */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/error.js");
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var StringFormat = {
    RAW: 'raw',
    BASE64: 'base64',
    BASE64URL: 'base64url',
    DATA_URL: 'data_url'
};
function formatValidator(stringFormat) {
    switch (stringFormat) {
        case StringFormat.RAW:
        case StringFormat.BASE64:
        case StringFormat.BASE64URL:
        case StringFormat.DATA_URL:
            return;
        default:
            throw 'Expected one of the event types: [' +
                StringFormat.RAW +
                ', ' +
                StringFormat.BASE64 +
                ', ' +
                StringFormat.BASE64URL +
                ', ' +
                StringFormat.DATA_URL +
                '].';
    }
}
/**
 * @struct
 */
var StringData = /** @class */ (function () {
    function StringData(data, opt_contentType) {
        this.data = data;
        this.contentType = opt_contentType || null;
    }
    return StringData;
}());

function dataFromString(format, string) {
    switch (format) {
        case StringFormat.RAW:
            return new StringData(utf8Bytes_(string));
        case StringFormat.BASE64:
        case StringFormat.BASE64URL:
            return new StringData(base64Bytes_(format, string));
        case StringFormat.DATA_URL:
            return new StringData(dataURLBytes_(string), dataURLContentType_(string));
    }
    // assert(false);
    throw __WEBPACK_IMPORTED_MODULE_0__error__["s" /* unknown */]();
}
function utf8Bytes_(string) {
    var b = [];
    for (var i = 0; i < string.length; i++) {
        var c = string.charCodeAt(i);
        if (c <= 127) {
            b.push(c);
        }
        else {
            if (c <= 2047) {
                b.push(192 | (c >> 6), 128 | (c & 63));
            }
            else {
                if ((c & 64512) == 55296) {
                    // The start of a surrogate pair.
                    var valid = i < string.length - 1 &&
                        (string.charCodeAt(i + 1) & 64512) == 56320;
                    if (!valid) {
                        // The second surrogate wasn't there.
                        b.push(239, 191, 189);
                    }
                    else {
                        var hi = c;
                        var lo = string.charCodeAt(++i);
                        c = 65536 | ((hi & 1023) << 10) | (lo & 1023);
                        b.push(240 | (c >> 18), 128 | ((c >> 12) & 63), 128 | ((c >> 6) & 63), 128 | (c & 63));
                    }
                }
                else {
                    if ((c & 64512) == 56320) {
                        // Invalid low surrogate.
                        b.push(239, 191, 189);
                    }
                    else {
                        b.push(224 | (c >> 12), 128 | ((c >> 6) & 63), 128 | (c & 63));
                    }
                }
            }
        }
    }
    return new Uint8Array(b);
}
function percentEncodedBytes_(string) {
    var decoded;
    try {
        decoded = decodeURIComponent(string);
    }
    catch (e) {
        throw __WEBPACK_IMPORTED_MODULE_0__error__["i" /* invalidFormat */](StringFormat.DATA_URL, 'Malformed data URL.');
    }
    return utf8Bytes_(decoded);
}
function base64Bytes_(format, string) {
    switch (format) {
        case StringFormat.BASE64: {
            var hasMinus = string.indexOf('-') !== -1;
            var hasUnder = string.indexOf('_') !== -1;
            if (hasMinus || hasUnder) {
                var invalidChar = hasMinus ? '-' : '_';
                throw __WEBPACK_IMPORTED_MODULE_0__error__["i" /* invalidFormat */](format, "Invalid character '" +
                    invalidChar +
                    "' found: is it base64url encoded?");
            }
            break;
        }
        case StringFormat.BASE64URL: {
            var hasPlus = string.indexOf('+') !== -1;
            var hasSlash = string.indexOf('/') !== -1;
            if (hasPlus || hasSlash) {
                var invalidChar = hasPlus ? '+' : '/';
                throw __WEBPACK_IMPORTED_MODULE_0__error__["i" /* invalidFormat */](format, "Invalid character '" + invalidChar + "' found: is it base64 encoded?");
            }
            string = string.replace(/-/g, '+').replace(/_/g, '/');
            break;
        }
    }
    var bytes;
    try {
        bytes = atob(string);
    }
    catch (e) {
        throw __WEBPACK_IMPORTED_MODULE_0__error__["i" /* invalidFormat */](format, 'Invalid character found');
    }
    var array = new Uint8Array(bytes.length);
    for (var i = 0; i < bytes.length; i++) {
        array[i] = bytes.charCodeAt(i);
    }
    return array;
}
/**
 * @struct
 */
var DataURLParts = /** @class */ (function () {
    function DataURLParts(dataURL) {
        this.base64 = false;
        this.contentType = null;
        var matches = dataURL.match(/^data:([^,]+)?,/);
        if (matches === null) {
            throw __WEBPACK_IMPORTED_MODULE_0__error__["i" /* invalidFormat */](StringFormat.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
        }
        var middle = matches[1] || null;
        if (middle != null) {
            this.base64 = endsWith(middle, ';base64');
            this.contentType = this.base64
                ? middle.substring(0, middle.length - ';base64'.length)
                : middle;
        }
        this.rest = dataURL.substring(dataURL.indexOf(',') + 1);
    }
    return DataURLParts;
}());
function dataURLBytes_(string) {
    var parts = new DataURLParts(string);
    if (parts.base64) {
        return base64Bytes_(StringFormat.BASE64, parts.rest);
    }
    else {
        return percentEncodedBytes_(parts.rest);
    }
}
function dataURLContentType_(string) {
    var parts = new DataURLParts(string);
    return parts.contentType;
}
function endsWith(s, end) {
    var longEnough = s.length >= end.length;
    if (!longEnough) {
        return false;
    }
    return s.substring(s.length - end.length) === end;
}

//# sourceMappingURL=string.js.map


/***/ }),

/***/ "../../../../@firebase/storage/dist/esm/src/implementation/taskenums.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TaskEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InternalTaskState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TaskState; });
/* harmony export (immutable) */ __webpack_exports__["d"] = taskStateFromInternalTaskState;
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var TaskEvent = {
    /** Triggered whenever the task changes or progress is updated. */
    STATE_CHANGED: 'state_changed'
};
var InternalTaskState = {
    RUNNING: 'running',
    PAUSING: 'pausing',
    PAUSED: 'paused',
    SUCCESS: 'success',
    CANCELING: 'canceling',
    CANCELED: 'canceled',
    ERROR: 'error'
};
var TaskState = {
    /** The task is currently transferring data. */
    RUNNING: 'running',
    /** The task was paused by the user. */
    PAUSED: 'paused',
    /** The task completed successfully. */
    SUCCESS: 'success',
    /** The task was canceled. */
    CANCELED: 'canceled',
    /** The task failed with an error. */
    ERROR: 'error'
};
function taskStateFromInternalTaskState(state) {
    switch (state) {
        case InternalTaskState.RUNNING:
        case InternalTaskState.PAUSING:
        case InternalTaskState.CANCELING:
            return TaskState.RUNNING;
        case InternalTaskState.PAUSED:
            return TaskState.PAUSED;
        case InternalTaskState.SUCCESS:
            return TaskState.SUCCESS;
        case InternalTaskState.CANCELED:
            return TaskState.CANCELED;
        case InternalTaskState.ERROR:
            return TaskState.ERROR;
        default:
            // TODO(andysoto): assert(false);
            return TaskState.ERROR;
    }
}

//# sourceMappingURL=taskenums.js.map


/***/ }),

/***/ "../../../../@firebase/storage/dist/esm/src/implementation/type.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isDef;
/* harmony export (immutable) */ __webpack_exports__["c"] = isJustDef;
/* harmony export (immutable) */ __webpack_exports__["b"] = isFunction;
/* harmony export (immutable) */ __webpack_exports__["i"] = isObject;
/* harmony export (immutable) */ __webpack_exports__["g"] = isNonNullObject;
/* harmony export (immutable) */ __webpack_exports__["f"] = isNonArrayObject;
/* harmony export (immutable) */ __webpack_exports__["j"] = isString;
/* harmony export (immutable) */ __webpack_exports__["h"] = isNumber;
/* harmony export (immutable) */ __webpack_exports__["d"] = isNativeBlob;
/* harmony export (immutable) */ __webpack_exports__["e"] = isNativeBlobDefined;
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @return False if the object is undefined or null, true otherwise.
 */
function isDef(p) {
    return p != null;
}
function isJustDef(p) {
    return p !== void 0;
}
function isFunction(p) {
    return typeof p === 'function';
}
function isObject(p) {
    return typeof p === 'object';
}
function isNonNullObject(p) {
    return isObject(p) && p !== null;
}
function isNonArrayObject(p) {
    return isObject(p) && !Array.isArray(p);
}
function isString(p) {
    return typeof p === 'string' || p instanceof String;
}
function isNumber(p) {
    return typeof p === 'number' || p instanceof Number;
}
function isNativeBlob(p) {
    return isNativeBlobDefined() && p instanceof Blob;
}
function isNativeBlobDefined() {
    return typeof Blob !== 'undefined';
}

//# sourceMappingURL=type.js.map


/***/ }),

/***/ "../../../../@firebase/storage/dist/esm/src/implementation/url.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = makeNormalUrl;
/* harmony export (immutable) */ __webpack_exports__["a"] = makeDownloadUrl;
/* harmony export (immutable) */ __webpack_exports__["d"] = makeUploadUrl;
/* harmony export (immutable) */ __webpack_exports__["c"] = makeQueryString;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__object__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/object.js");
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Functions to create and manipulate URLs for the server API.
 */


function makeNormalUrl(urlPart) {
    return __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* domainBase */] + __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* apiBaseUrl */] + urlPart;
}
function makeDownloadUrl(urlPart) {
    return __WEBPACK_IMPORTED_MODULE_0__constants__["g" /* downloadBase */] + __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* apiBaseUrl */] + urlPart;
}
function makeUploadUrl(urlPart) {
    return __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* domainBase */] + __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* apiUploadBaseUrl */] + urlPart;
}
function makeQueryString(params) {
    var encode = encodeURIComponent;
    var queryPart = '?';
    __WEBPACK_IMPORTED_MODULE_1__object__["b" /* forEach */](params, function (key, val) {
        var nextPart = encode(key) + '=' + encode(val);
        queryPart = queryPart + nextPart + '&';
    });
    // Chop off the extra '&' or '?' on the end
    queryPart = queryPart.slice(0, -1);
    return queryPart;
}

//# sourceMappingURL=url.js.map


/***/ }),

/***/ "../../../../@firebase/storage/dist/esm/src/implementation/xhrio.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorCode; });
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @enum{number}
 */
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["NO_ERROR"] = 0] = "NO_ERROR";
    ErrorCode[ErrorCode["NETWORK_ERROR"] = 1] = "NETWORK_ERROR";
    ErrorCode[ErrorCode["ABORT"] = 2] = "ABORT";
})(ErrorCode || (ErrorCode = {}));

//# sourceMappingURL=xhrio.js.map


/***/ }),

/***/ "../../../../@firebase/storage/dist/esm/src/implementation/xhrio_network.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkXhrIo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/error.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__object__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__promise_external__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/promise_external.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__type__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/type.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__xhrio__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/xhrio.js");
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





/**
 * We use this instead of goog.net.XhrIo because goog.net.XhrIo is hyuuuuge and
 * doesn't work in React Native on Android.
 */
var NetworkXhrIo = /** @class */ (function () {
    function NetworkXhrIo() {
        var _this = this;
        this.sent_ = false;
        this.xhr_ = new XMLHttpRequest();
        this.errorCode_ = __WEBPACK_IMPORTED_MODULE_4__xhrio__["a" /* ErrorCode */].NO_ERROR;
        this.sendPromise_ = __WEBPACK_IMPORTED_MODULE_2__promise_external__["a" /* make */](function (resolve, reject) {
            _this.xhr_.addEventListener('abort', function (event) {
                _this.errorCode_ = __WEBPACK_IMPORTED_MODULE_4__xhrio__["a" /* ErrorCode */].ABORT;
                resolve(_this);
            });
            _this.xhr_.addEventListener('error', function (event) {
                _this.errorCode_ = __WEBPACK_IMPORTED_MODULE_4__xhrio__["a" /* ErrorCode */].NETWORK_ERROR;
                resolve(_this);
            });
            _this.xhr_.addEventListener('load', function (event) {
                resolve(_this);
            });
        });
    }
    /**
     * @override
     */
    NetworkXhrIo.prototype.send = function (url, method, opt_body, opt_headers) {
        var _this = this;
        if (this.sent_) {
            throw __WEBPACK_IMPORTED_MODULE_0__error__["e" /* internalError */]('cannot .send() more than once');
        }
        this.sent_ = true;
        this.xhr_.open(method, url, true);
        if (__WEBPACK_IMPORTED_MODULE_3__type__["a" /* isDef */](opt_headers)) {
            var headers = opt_headers;
            __WEBPACK_IMPORTED_MODULE_1__object__["b" /* forEach */](headers, function (key, val) {
                _this.xhr_.setRequestHeader(key, val.toString());
            });
        }
        if (__WEBPACK_IMPORTED_MODULE_3__type__["a" /* isDef */](opt_body)) {
            this.xhr_.send(opt_body);
        }
        else {
            this.xhr_.send();
        }
        return this.sendPromise_;
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getErrorCode = function () {
        if (!this.sent_) {
            throw __WEBPACK_IMPORTED_MODULE_0__error__["e" /* internalError */]('cannot .getErrorCode() before sending');
        }
        return this.errorCode_;
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getStatus = function () {
        if (!this.sent_) {
            throw __WEBPACK_IMPORTED_MODULE_0__error__["e" /* internalError */]('cannot .getStatus() before sending');
        }
        try {
            return this.xhr_.status;
        }
        catch (e) {
            return -1;
        }
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getResponseText = function () {
        if (!this.sent_) {
            throw __WEBPACK_IMPORTED_MODULE_0__error__["e" /* internalError */]('cannot .getResponseText() before sending');
        }
        return this.xhr_.responseText;
    };
    /**
     * Aborts the request.
     * @override
     */
    NetworkXhrIo.prototype.abort = function () {
        this.xhr_.abort();
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getResponseHeader = function (header) {
        return this.xhr_.getResponseHeader(header);
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.addUploadProgressListener = function (listener) {
        if (__WEBPACK_IMPORTED_MODULE_3__type__["a" /* isDef */](this.xhr_.upload)) {
            this.xhr_.upload.addEventListener('progress', listener);
        }
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.removeUploadProgressListener = function (listener) {
        if (__WEBPACK_IMPORTED_MODULE_3__type__["a" /* isDef */](this.xhr_.upload)) {
            this.xhr_.upload.removeEventListener('progress', listener);
        }
    };
    return NetworkXhrIo;
}());


//# sourceMappingURL=xhrio_network.js.map


/***/ }),

/***/ "../../../../@firebase/storage/dist/esm/src/implementation/xhriopool.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XhrIoPool; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__xhrio_network__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/xhrio_network.js");
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Factory-like class for creating XhrIo instances.
 */
var XhrIoPool = /** @class */ (function () {
    function XhrIoPool() {
    }
    XhrIoPool.prototype.createXhrIo = function () {
        return new __WEBPACK_IMPORTED_MODULE_0__xhrio_network__["a" /* NetworkXhrIo */]();
    };
    return XhrIoPool;
}());


//# sourceMappingURL=xhriopool.js.map


/***/ }),

/***/ "../../../../@firebase/storage/dist/esm/src/reference.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reference; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__implementation_args__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/args.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__implementation_blob__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/blob.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__implementation_error__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/error.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__implementation_location__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/location.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__implementation_metadata__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/metadata.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__implementation_object__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__implementation_path__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/path.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__implementation_requests__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/requests.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__implementation_string__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__implementation_type__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/type.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__task__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/task.js");
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Defines the Firebase Storage Reference class.
 */












/**
 * Provides methods to interact with a bucket in the Firebase Storage service.
 * @param location An fbs.location, or the URL at
 *     which to base this object, in one of the following forms:
 *         gs://<bucket>/<object-path>
 *         http[s]://firebasestorage.googleapis.com/
 *                     <api-version>/b/<bucket>/o/<object-path>
 *     Any query or fragment strings will be ignored in the http[s]
 *     format. If no value is passed, the storage object will use a URL based on
 *     the project ID of the base firebase.App instance.
 */
var Reference = /** @class */ (function () {
    function Reference(authWrapper, location) {
        this.authWrapper = authWrapper;
        if (location instanceof __WEBPACK_IMPORTED_MODULE_3__implementation_location__["a" /* Location */]) {
            this.location = location;
        }
        else {
            this.location = __WEBPACK_IMPORTED_MODULE_3__implementation_location__["a" /* Location */].makeFromUrl(location);
        }
    }
    /**
     * @return The URL for the bucket and path this object references,
     *     in the form gs://<bucket>/<object-path>
     * @override
     */
    Reference.prototype.toString = function () {
        __WEBPACK_IMPORTED_MODULE_0__implementation_args__["g" /* validate */]('toString', [], arguments);
        return 'gs://' + this.location.bucket + '/' + this.location.path;
    };
    Reference.prototype.newRef = function (authWrapper, location) {
        return new Reference(authWrapper, location);
    };
    Reference.prototype.mappings = function () {
        return __WEBPACK_IMPORTED_MODULE_4__implementation_metadata__["b" /* getMappings */]();
    };
    /**
     * @return A reference to the object obtained by
     *     appending childPath, removing any duplicate, beginning, or trailing
     *     slashes.
     */
    Reference.prototype.child = function (childPath) {
        __WEBPACK_IMPORTED_MODULE_0__implementation_args__["g" /* validate */]('child', [__WEBPACK_IMPORTED_MODULE_0__implementation_args__["e" /* stringSpec */]()], arguments);
        var newPath = __WEBPACK_IMPORTED_MODULE_6__implementation_path__["a" /* child */](this.location.path, childPath);
        var location = new __WEBPACK_IMPORTED_MODULE_3__implementation_location__["a" /* Location */](this.location.bucket, newPath);
        return this.newRef(this.authWrapper, location);
    };
    Object.defineProperty(Reference.prototype, "parent", {
        /**
         * @return A reference to the parent of the
         *     current object, or null if the current object is the root.
         */
        get: function () {
            var newPath = __WEBPACK_IMPORTED_MODULE_6__implementation_path__["c" /* parent */](this.location.path);
            if (newPath === null) {
                return null;
            }
            var location = new __WEBPACK_IMPORTED_MODULE_3__implementation_location__["a" /* Location */](this.location.bucket, newPath);
            return this.newRef(this.authWrapper, location);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "root", {
        /**
         * @return An reference to the root of this
         *     object's bucket.
         */
        get: function () {
            var location = new __WEBPACK_IMPORTED_MODULE_3__implementation_location__["a" /* Location */](this.location.bucket, '');
            return this.newRef(this.authWrapper, location);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "bucket", {
        get: function () {
            return this.location.bucket;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "fullPath", {
        get: function () {
            return this.location.path;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "name", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_6__implementation_path__["b" /* lastComponent */](this.location.path);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "storage", {
        get: function () {
            return this.authWrapper.service();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Uploads a blob to this object's location.
     * @param data The blob to upload.
     * @return An UploadTask that lets you control and
     *     observe the upload.
     */
    Reference.prototype.put = function (data, metadata) {
        if (metadata === void 0) { metadata = null; }
        __WEBPACK_IMPORTED_MODULE_0__implementation_args__["g" /* validate */]('put', [__WEBPACK_IMPORTED_MODULE_0__implementation_args__["f" /* uploadDataSpec */](), __WEBPACK_IMPORTED_MODULE_0__implementation_args__["b" /* metadataSpec */](true)], arguments);
        this.throwIfRoot_('put');
        return new __WEBPACK_IMPORTED_MODULE_10__task__["a" /* UploadTask */](this, this.authWrapper, this.location, this.mappings(), new __WEBPACK_IMPORTED_MODULE_1__implementation_blob__["a" /* FbsBlob */](data), metadata);
    };
    /**
     * Uploads a string to this object's location.
     * @param string The string to upload.
     * @param opt_format The format of the string to upload.
     * @return An UploadTask that lets you control and
     *     observe the upload.
     */
    Reference.prototype.putString = function (string, format, opt_metadata) {
        if (format === void 0) { format = __WEBPACK_IMPORTED_MODULE_8__implementation_string__["a" /* StringFormat */].RAW; }
        __WEBPACK_IMPORTED_MODULE_0__implementation_args__["g" /* validate */]('putString', [
            __WEBPACK_IMPORTED_MODULE_0__implementation_args__["e" /* stringSpec */](),
            __WEBPACK_IMPORTED_MODULE_0__implementation_args__["e" /* stringSpec */](__WEBPACK_IMPORTED_MODULE_8__implementation_string__["c" /* formatValidator */], true),
            __WEBPACK_IMPORTED_MODULE_0__implementation_args__["b" /* metadataSpec */](true)
        ], arguments);
        this.throwIfRoot_('putString');
        var data = __WEBPACK_IMPORTED_MODULE_8__implementation_string__["b" /* dataFromString */](format, string);
        var metadata = __WEBPACK_IMPORTED_MODULE_5__implementation_object__["a" /* clone */](opt_metadata);
        if (!__WEBPACK_IMPORTED_MODULE_9__implementation_type__["a" /* isDef */](metadata['contentType']) && __WEBPACK_IMPORTED_MODULE_9__implementation_type__["a" /* isDef */](data.contentType)) {
            metadata['contentType'] = data.contentType;
        }
        return new __WEBPACK_IMPORTED_MODULE_10__task__["a" /* UploadTask */](this, this.authWrapper, this.location, this.mappings(), new __WEBPACK_IMPORTED_MODULE_1__implementation_blob__["a" /* FbsBlob */](data.data, true), metadata);
    };
    /**
     * Deletes the object at this location.
     * @return A promise that resolves if the deletion succeeds.
     */
    Reference.prototype.delete = function () {
        __WEBPACK_IMPORTED_MODULE_0__implementation_args__["g" /* validate */]('delete', [], arguments);
        this.throwIfRoot_('delete');
        var self = this;
        return this.authWrapper.getAuthToken().then(function (authToken) {
            var requestInfo = __WEBPACK_IMPORTED_MODULE_7__implementation_requests__["d" /* deleteObject */](self.authWrapper, self.location);
            return self.authWrapper.makeRequest(requestInfo, authToken).getPromise();
        });
    };
    /**
     *     A promise that resolves with the metadata for this object. If this
     *     object doesn't exist or metadata cannot be retreived, the promise is
     *     rejected.
     */
    Reference.prototype.getMetadata = function () {
        __WEBPACK_IMPORTED_MODULE_0__implementation_args__["g" /* validate */]('getMetadata', [], arguments);
        this.throwIfRoot_('getMetadata');
        var self = this;
        return this.authWrapper.getAuthToken().then(function (authToken) {
            var requestInfo = __WEBPACK_IMPORTED_MODULE_7__implementation_requests__["e" /* getMetadata */](self.authWrapper, self.location, self.mappings());
            return self.authWrapper.makeRequest(requestInfo, authToken).getPromise();
        });
    };
    /**
     * Updates the metadata for this object.
     * @param metadata The new metadata for the object.
     *     Only values that have been explicitly set will be changed. Explicitly
     *     setting a value to null will remove the metadata.
     * @return A promise that resolves
     *     with the new metadata for this object.
     *     @see firebaseStorage.Reference.prototype.getMetadata
     */
    Reference.prototype.updateMetadata = function (metadata) {
        __WEBPACK_IMPORTED_MODULE_0__implementation_args__["g" /* validate */]('updateMetadata', [__WEBPACK_IMPORTED_MODULE_0__implementation_args__["b" /* metadataSpec */]()], arguments);
        this.throwIfRoot_('updateMetadata');
        var self = this;
        return this.authWrapper.getAuthToken().then(function (authToken) {
            var requestInfo = __WEBPACK_IMPORTED_MODULE_7__implementation_requests__["i" /* updateMetadata */](self.authWrapper, self.location, metadata, self.mappings());
            return self.authWrapper.makeRequest(requestInfo, authToken).getPromise();
        });
    };
    /**
     * @return A promise that resolves with the download
     *     URL for this object.
     */
    Reference.prototype.getDownloadURL = function () {
        __WEBPACK_IMPORTED_MODULE_0__implementation_args__["g" /* validate */]('getDownloadURL', [], arguments);
        this.throwIfRoot_('getDownloadURL');
        return this.getMetadata().then(function (metadata) {
            var url = metadata['downloadURLs'][0];
            if (__WEBPACK_IMPORTED_MODULE_9__implementation_type__["a" /* isDef */](url)) {
                return url;
            }
            else {
                throw __WEBPACK_IMPORTED_MODULE_2__implementation_error__["l" /* noDownloadURL */]();
            }
        });
    };
    Reference.prototype.throwIfRoot_ = function (name) {
        if (this.location.path === '') {
            throw __WEBPACK_IMPORTED_MODULE_2__implementation_error__["j" /* invalidRootOperation */](name);
        }
    };
    return Reference;
}());


//# sourceMappingURL=reference.js.map


/***/ }),

/***/ "../../../../@firebase/storage/dist/esm/src/service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* unused harmony export ServiceInternals */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__implementation_args__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/args.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__implementation_authwrapper__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/authwrapper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__implementation_location__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/location.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__implementation_promise_external__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/promise_external.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__implementation_request__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/request.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reference__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/reference.js");
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






/**
 * A service that provides firebaseStorage.Reference instances.
 * @param opt_url gs:// url to a custom Storage Bucket
 *
 * @struct
 */
var Service = /** @class */ (function () {
    function Service(app, pool, url) {
        this.bucket_ = null;
        function maker(authWrapper, loc) {
            return new __WEBPACK_IMPORTED_MODULE_5__reference__["a" /* Reference */](authWrapper, loc);
        }
        this.authWrapper_ = new __WEBPACK_IMPORTED_MODULE_1__implementation_authwrapper__["a" /* AuthWrapper */](app, maker, __WEBPACK_IMPORTED_MODULE_4__implementation_request__["a" /* makeRequest */], this, pool);
        this.app_ = app;
        if (url != null) {
            this.bucket_ = __WEBPACK_IMPORTED_MODULE_2__implementation_location__["a" /* Location */].makeFromBucketSpec(url);
        }
        else {
            var authWrapperBucket = this.authWrapper_.bucket();
            if (authWrapperBucket != null) {
                this.bucket_ = new __WEBPACK_IMPORTED_MODULE_2__implementation_location__["a" /* Location */](authWrapperBucket, '');
            }
        }
        this.internals_ = new ServiceInternals(this);
    }
    /**
     * Returns a firebaseStorage.Reference for the given path in the default
     * bucket.
     */
    Service.prototype.ref = function (path) {
        function validator(path) {
            if (/^[A-Za-z]+:\/\//.test(path)) {
                throw 'Expected child path but got a URL, use refFromURL instead.';
            }
        }
        __WEBPACK_IMPORTED_MODULE_0__implementation_args__["g" /* validate */]('ref', [__WEBPACK_IMPORTED_MODULE_0__implementation_args__["e" /* stringSpec */](validator, true)], arguments);
        if (this.bucket_ == null) {
            throw new Error('No Storage Bucket defined in Firebase Options.');
        }
        var ref = new __WEBPACK_IMPORTED_MODULE_5__reference__["a" /* Reference */](this.authWrapper_, this.bucket_);
        if (path != null) {
            return ref.child(path);
        }
        else {
            return ref;
        }
    };
    /**
     * Returns a firebaseStorage.Reference object for the given absolute URL,
     * which must be a gs:// or http[s]:// URL.
     */
    Service.prototype.refFromURL = function (url) {
        function validator(p) {
            if (!/^[A-Za-z]+:\/\//.test(p)) {
                throw 'Expected full URL but got a child path, use ref instead.';
            }
            try {
                __WEBPACK_IMPORTED_MODULE_2__implementation_location__["a" /* Location */].makeFromUrl(p);
            }
            catch (e) {
                throw 'Expected valid full URL but got an invalid one.';
            }
        }
        __WEBPACK_IMPORTED_MODULE_0__implementation_args__["g" /* validate */]('refFromURL', [__WEBPACK_IMPORTED_MODULE_0__implementation_args__["e" /* stringSpec */](validator, false)], arguments);
        return new __WEBPACK_IMPORTED_MODULE_5__reference__["a" /* Reference */](this.authWrapper_, url);
    };
    Object.defineProperty(Service.prototype, "maxUploadRetryTime", {
        get: function () {
            return this.authWrapper_.maxUploadRetryTime();
        },
        enumerable: true,
        configurable: true
    });
    Service.prototype.setMaxUploadRetryTime = function (time) {
        __WEBPACK_IMPORTED_MODULE_0__implementation_args__["g" /* validate */]('setMaxUploadRetryTime', [__WEBPACK_IMPORTED_MODULE_0__implementation_args__["c" /* nonNegativeNumberSpec */]()], arguments);
        this.authWrapper_.setMaxUploadRetryTime(time);
    };
    Object.defineProperty(Service.prototype, "maxOperationRetryTime", {
        get: function () {
            return this.authWrapper_.maxOperationRetryTime();
        },
        enumerable: true,
        configurable: true
    });
    Service.prototype.setMaxOperationRetryTime = function (time) {
        __WEBPACK_IMPORTED_MODULE_0__implementation_args__["g" /* validate */]('setMaxOperationRetryTime', [__WEBPACK_IMPORTED_MODULE_0__implementation_args__["c" /* nonNegativeNumberSpec */]()], arguments);
        this.authWrapper_.setMaxOperationRetryTime(time);
    };
    Object.defineProperty(Service.prototype, "app", {
        get: function () {
            return this.app_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Service.prototype, "INTERNAL", {
        get: function () {
            return this.internals_;
        },
        enumerable: true,
        configurable: true
    });
    return Service;
}());

/**
 * @struct
 */
var ServiceInternals = /** @class */ (function () {
    function ServiceInternals(service) {
        this.service_ = service;
    }
    /**
     * Called when the associated app is deleted.
     * @see {!fbs.AuthWrapper.prototype.deleteApp}
     */
    ServiceInternals.prototype.delete = function () {
        this.service_.authWrapper_.deleteApp();
        return __WEBPACK_IMPORTED_MODULE_3__implementation_promise_external__["c" /* resolve */](undefined);
    };
    return ServiceInternals;
}());


//# sourceMappingURL=service.js.map


/***/ }),

/***/ "../../../../@firebase/storage/dist/esm/src/task.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadTask; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/taskenums.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__implementation_observer__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/observer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tasksnapshot__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/tasksnapshot.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__implementation_args__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/args.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__implementation_array__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__implementation_async__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__implementation_error__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/error.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__implementation_promise_external__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/promise_external.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__implementation_requests__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/requests.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__implementation_type__ = __webpack_require__("../../../../@firebase/storage/dist/esm/src/implementation/type.js");
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Defines types for interacting with blob transfer tasks.
 */












/**
 * Represents a blob being uploaded. Can be used to pause/resume/cancel the
 * upload and manage callbacks for various events.
 */
var UploadTask = /** @class */ (function () {
    /**
     * @param ref The firebaseStorage.Reference object this task came
     *     from, untyped to avoid cyclic dependencies.
     * @param blob The blob to upload.
     */
    function UploadTask(ref, authWrapper, location, mappings, blob, metadata) {
        if (metadata === void 0) { metadata = null; }
        var _this = this;
        this.transferred_ = 0;
        this.needToFetchStatus_ = false;
        this.needToFetchMetadata_ = false;
        this.observers_ = [];
        this.error_ = null;
        this.uploadUrl_ = null;
        this.request_ = null;
        this.chunkMultiplier_ = 1;
        this.resolve_ = null;
        this.reject_ = null;
        this.ref_ = ref;
        this.authWrapper_ = authWrapper;
        this.location_ = location;
        this.blob_ = blob;
        this.metadata_ = metadata;
        this.mappings_ = mappings;
        this.resumable_ = this.shouldDoResumable_(this.blob_);
        this.state_ = __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].RUNNING;
        this.errorHandler_ = function (error) {
            _this.request_ = null;
            _this.chunkMultiplier_ = 1;
            if (error.codeEquals(__WEBPACK_IMPORTED_MODULE_6__implementation_error__["a" /* Code */].CANCELED)) {
                _this.needToFetchStatus_ = true;
                _this.completeTransitions_();
            }
            else {
                _this.error_ = error;
                _this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].ERROR);
            }
        };
        this.metadataErrorHandler_ = function (error) {
            _this.request_ = null;
            if (error.codeEquals(__WEBPACK_IMPORTED_MODULE_6__implementation_error__["a" /* Code */].CANCELED)) {
                _this.completeTransitions_();
            }
            else {
                _this.error_ = error;
                _this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].ERROR);
            }
        };
        this.promise_ = __WEBPACK_IMPORTED_MODULE_7__implementation_promise_external__["a" /* make */](function (resolve, reject) {
            _this.resolve_ = resolve;
            _this.reject_ = reject;
            _this.start_();
        });
        // Prevent uncaught rejections on the internal promise from bubbling out
        // to the top level with a dummy handler.
        this.promise_.then(null, function () { });
    }
    UploadTask.prototype.makeProgressCallback_ = function () {
        var _this = this;
        var sizeBefore = this.transferred_;
        return function (loaded, total) {
            _this.updateProgress_(sizeBefore + loaded);
        };
    };
    UploadTask.prototype.shouldDoResumable_ = function (blob) {
        return blob.size() > 256 * 1024;
    };
    UploadTask.prototype.start_ = function () {
        if (this.state_ !== __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].RUNNING) {
            // This can happen if someone pauses us in a resume callback, for example.
            return;
        }
        if (this.request_ !== null) {
            return;
        }
        if (this.resumable_) {
            if (this.uploadUrl_ === null) {
                this.createResumable_();
            }
            else {
                if (this.needToFetchStatus_) {
                    this.fetchStatus_();
                }
                else {
                    if (this.needToFetchMetadata_) {
                        // Happens if we miss the metadata on upload completion.
                        this.fetchMetadata_();
                    }
                    else {
                        this.continueUpload_();
                    }
                }
            }
        }
        else {
            this.oneShotUpload_();
        }
    };
    UploadTask.prototype.resolveToken_ = function (callback) {
        var _this = this;
        this.authWrapper_.getAuthToken().then(function (authToken) {
            switch (_this.state_) {
                case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].RUNNING:
                    callback(authToken);
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].CANCELING:
                    _this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].CANCELED);
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].PAUSING:
                    _this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].PAUSED);
                    break;
                default:
            }
        });
    };
    // TODO(andysoto): assert false
    UploadTask.prototype.createResumable_ = function () {
        var _this = this;
        this.resolveToken_(function (authToken) {
            var requestInfo = __WEBPACK_IMPORTED_MODULE_8__implementation_requests__["c" /* createResumableUpload */](_this.authWrapper_, _this.location_, _this.mappings_, _this.blob_, _this.metadata_);
            var createRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);
            _this.request_ = createRequest;
            createRequest.getPromise().then(function (url) {
                _this.request_ = null;
                _this.uploadUrl_ = url;
                _this.needToFetchStatus_ = false;
                _this.completeTransitions_();
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.fetchStatus_ = function () {
        var _this = this;
        // TODO(andysoto): assert(this.uploadUrl_ !== null);
        var url = this.uploadUrl_;
        this.resolveToken_(function (authToken) {
            var requestInfo = __WEBPACK_IMPORTED_MODULE_8__implementation_requests__["f" /* getResumableUploadStatus */](_this.authWrapper_, _this.location_, url, _this.blob_);
            var statusRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);
            _this.request_ = statusRequest;
            statusRequest.getPromise().then(function (status) {
                status = status;
                _this.request_ = null;
                _this.updateProgress_(status.current);
                _this.needToFetchStatus_ = false;
                if (status.finalized) {
                    _this.needToFetchMetadata_ = true;
                }
                _this.completeTransitions_();
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.continueUpload_ = function () {
        var _this = this;
        var chunkSize = __WEBPACK_IMPORTED_MODULE_8__implementation_requests__["h" /* resumableUploadChunkSize */] * this.chunkMultiplier_;
        var status = new __WEBPACK_IMPORTED_MODULE_8__implementation_requests__["a" /* ResumableUploadStatus */](this.transferred_, this.blob_.size());
        // TODO(andysoto): assert(this.uploadUrl_ !== null);
        var url = this.uploadUrl_;
        this.resolveToken_(function (authToken) {
            var requestInfo;
            try {
                requestInfo = __WEBPACK_IMPORTED_MODULE_8__implementation_requests__["b" /* continueResumableUpload */](_this.location_, _this.authWrapper_, url, _this.blob_, chunkSize, _this.mappings_, status, _this.makeProgressCallback_());
            }
            catch (e) {
                _this.error_ = e;
                _this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].ERROR);
                return;
            }
            var uploadRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);
            _this.request_ = uploadRequest;
            uploadRequest
                .getPromise()
                .then(function (newStatus) {
                _this.increaseMultiplier_();
                _this.request_ = null;
                _this.updateProgress_(newStatus.current);
                if (newStatus.finalized) {
                    _this.metadata_ = newStatus.metadata;
                    _this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].SUCCESS);
                }
                else {
                    _this.completeTransitions_();
                }
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.increaseMultiplier_ = function () {
        var currentSize = __WEBPACK_IMPORTED_MODULE_8__implementation_requests__["h" /* resumableUploadChunkSize */] * this.chunkMultiplier_;
        // Max chunk size is 32M.
        if (currentSize < 32 * 1024 * 1024) {
            this.chunkMultiplier_ *= 2;
        }
    };
    UploadTask.prototype.fetchMetadata_ = function () {
        var _this = this;
        this.resolveToken_(function (authToken) {
            var requestInfo = __WEBPACK_IMPORTED_MODULE_8__implementation_requests__["e" /* getMetadata */](_this.authWrapper_, _this.location_, _this.mappings_);
            var metadataRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);
            _this.request_ = metadataRequest;
            metadataRequest.getPromise().then(function (metadata) {
                _this.request_ = null;
                _this.metadata_ = metadata;
                _this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].SUCCESS);
            }, _this.metadataErrorHandler_);
        });
    };
    UploadTask.prototype.oneShotUpload_ = function () {
        var _this = this;
        this.resolveToken_(function (authToken) {
            var requestInfo = __WEBPACK_IMPORTED_MODULE_8__implementation_requests__["g" /* multipartUpload */](_this.authWrapper_, _this.location_, _this.mappings_, _this.blob_, _this.metadata_);
            var multipartRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);
            _this.request_ = multipartRequest;
            multipartRequest.getPromise().then(function (metadata) {
                _this.request_ = null;
                _this.metadata_ = metadata;
                _this.updateProgress_(_this.blob_.size());
                _this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].SUCCESS);
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.updateProgress_ = function (transferred) {
        var old = this.transferred_;
        this.transferred_ = transferred;
        // A progress update can make the "transferred" value smaller (e.g. a
        // partial upload not completed by server, after which the "transferred"
        // value may reset to the value at the beginning of the request).
        if (this.transferred_ !== old) {
            this.notifyObservers_();
        }
    };
    UploadTask.prototype.transition_ = function (state) {
        if (this.state_ === state) {
            return;
        }
        switch (state) {
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].CANCELING:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING);
                this.state_ = state;
                if (this.request_ !== null) {
                    this.request_.cancel();
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].PAUSING:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING);
                this.state_ = state;
                if (this.request_ !== null) {
                    this.request_.cancel();
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].RUNNING:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSED ||
                //        this.state_ === InternalTaskState.PAUSING);
                var wasPaused = this.state_ === __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].PAUSED;
                this.state_ = state;
                if (wasPaused) {
                    this.notifyObservers_();
                    this.start_();
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].PAUSED:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSING);
                this.state_ = state;
                this.notifyObservers_();
                break;
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].CANCELED:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSED ||
                //        this.state_ === InternalTaskState.CANCELING);
                this.error_ = __WEBPACK_IMPORTED_MODULE_6__implementation_error__["c" /* canceled */]();
                this.state_ = state;
                this.notifyObservers_();
                break;
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].ERROR:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING ||
                //        this.state_ === InternalTaskState.CANCELING);
                this.state_ = state;
                this.notifyObservers_();
                break;
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].SUCCESS:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING ||
                //        this.state_ === InternalTaskState.CANCELING);
                this.state_ = state;
                this.notifyObservers_();
                break;
        }
    };
    UploadTask.prototype.completeTransitions_ = function () {
        switch (this.state_) {
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].PAUSING:
                this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].PAUSED);
                break;
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].CANCELING:
                this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].CANCELED);
                break;
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].RUNNING:
                this.start_();
                break;
            default:
                // TODO(andysoto): assert(false);
                break;
        }
    };
    Object.defineProperty(UploadTask.prototype, "snapshot", {
        get: function () {
            var externalState = __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["d" /* taskStateFromInternalTaskState */](this.state_);
            return new __WEBPACK_IMPORTED_MODULE_2__tasksnapshot__["a" /* UploadTaskSnapshot */](this.transferred_, this.blob_.size(), externalState, this.metadata_, this, this.ref_);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds a callback for an event.
     * @param type The type of event to listen for.
     */
    UploadTask.prototype.on = function (type, nextOrObserver, error, completed) {
        if (nextOrObserver === void 0) { nextOrObserver = undefined; }
        if (error === void 0) { error = undefined; }
        if (completed === void 0) { completed = undefined; }
        function typeValidator(_p) {
            if (type !== __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["b" /* TaskEvent */].STATE_CHANGED) {
                throw "Expected one of the event types: [" + __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["b" /* TaskEvent */].STATE_CHANGED + "].";
            }
        }
        var nextOrObserverMessage = 'Expected a function or an Object with one of ' +
            '`next`, `error`, `complete` properties.';
        var nextValidator = __WEBPACK_IMPORTED_MODULE_3__implementation_args__["d" /* nullFunctionSpec */](true).validator;
        var observerValidator = __WEBPACK_IMPORTED_MODULE_3__implementation_args__["a" /* looseObjectSpec */](null, true).validator;
        function nextOrObserverValidator(p) {
            try {
                nextValidator(p);
                return;
            }
            catch (e) { }
            try {
                observerValidator(p);
                var anyDefined = __WEBPACK_IMPORTED_MODULE_9__implementation_type__["c" /* isJustDef */](p['next']) ||
                    __WEBPACK_IMPORTED_MODULE_9__implementation_type__["c" /* isJustDef */](p['error']) ||
                    __WEBPACK_IMPORTED_MODULE_9__implementation_type__["c" /* isJustDef */](p['complete']);
                if (!anyDefined) {
                    throw '';
                }
                return;
            }
            catch (e) {
                throw nextOrObserverMessage;
            }
        }
        var specs = [
            __WEBPACK_IMPORTED_MODULE_3__implementation_args__["e" /* stringSpec */](typeValidator),
            __WEBPACK_IMPORTED_MODULE_3__implementation_args__["a" /* looseObjectSpec */](nextOrObserverValidator, true),
            __WEBPACK_IMPORTED_MODULE_3__implementation_args__["d" /* nullFunctionSpec */](true),
            __WEBPACK_IMPORTED_MODULE_3__implementation_args__["d" /* nullFunctionSpec */](true)
        ];
        __WEBPACK_IMPORTED_MODULE_3__implementation_args__["g" /* validate */]('on', specs, arguments);
        var self = this;
        function makeBinder(specs) {
            function binder(nextOrObserver, error, opt_complete) {
                if (specs !== null) {
                    __WEBPACK_IMPORTED_MODULE_3__implementation_args__["g" /* validate */]('on', specs, arguments);
                }
                var observer = new __WEBPACK_IMPORTED_MODULE_1__implementation_observer__["a" /* Observer */](nextOrObserver, error, completed);
                self.addObserver_(observer);
                return function () {
                    self.removeObserver_(observer);
                };
            }
            return binder;
        }
        function binderNextOrObserverValidator(p) {
            if (p === null) {
                throw nextOrObserverMessage;
            }
            nextOrObserverValidator(p);
        }
        var binderSpecs = [
            __WEBPACK_IMPORTED_MODULE_3__implementation_args__["a" /* looseObjectSpec */](binderNextOrObserverValidator),
            __WEBPACK_IMPORTED_MODULE_3__implementation_args__["d" /* nullFunctionSpec */](true),
            __WEBPACK_IMPORTED_MODULE_3__implementation_args__["d" /* nullFunctionSpec */](true)
        ];
        var typeOnly = !(__WEBPACK_IMPORTED_MODULE_9__implementation_type__["c" /* isJustDef */](nextOrObserver) ||
            __WEBPACK_IMPORTED_MODULE_9__implementation_type__["c" /* isJustDef */](error) ||
            __WEBPACK_IMPORTED_MODULE_9__implementation_type__["c" /* isJustDef */](completed));
        if (typeOnly) {
            return makeBinder(binderSpecs);
        }
        else {
            return makeBinder(null)(nextOrObserver, error, completed);
        }
    };
    /**
     * This object behaves like a Promise, and resolves with its snapshot data
     * when the upload completes.
     * @param onFulfilled The fulfillment callback. Promise chaining works as normal.
     * @param onRejected The rejection callback.
     */
    UploadTask.prototype.then = function (onFulfilled, onRejected) {
        // These casts are needed so that TypeScript can infer the types of the
        // resulting Promise.
        return this.promise_.then(onFulfilled, onRejected);
    };
    /**
     * Equivalent to calling `then(null, onRejected)`.
     */
    UploadTask.prototype.catch = function (onRejected) {
        return this.then(null, onRejected);
    };
    /**
     * Adds the given observer.
     */
    UploadTask.prototype.addObserver_ = function (observer) {
        this.observers_.push(observer);
        this.notifyObserver_(observer);
    };
    /**
     * Removes the given observer.
     */
    UploadTask.prototype.removeObserver_ = function (observer) {
        __WEBPACK_IMPORTED_MODULE_4__implementation_array__["c" /* remove */](this.observers_, observer);
    };
    UploadTask.prototype.notifyObservers_ = function () {
        var _this = this;
        this.finishPromise_();
        var observers = __WEBPACK_IMPORTED_MODULE_4__implementation_array__["a" /* clone */](this.observers_);
        observers.forEach(function (observer) {
            _this.notifyObserver_(observer);
        });
    };
    UploadTask.prototype.finishPromise_ = function () {
        if (this.resolve_ !== null) {
            var triggered = true;
            switch (__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["d" /* taskStateFromInternalTaskState */](this.state_)) {
                case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["c" /* TaskState */].SUCCESS:
                    Object(__WEBPACK_IMPORTED_MODULE_5__implementation_async__["a" /* async */])(this.resolve_.bind(null, this.snapshot))();
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["c" /* TaskState */].CANCELED:
                case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["c" /* TaskState */].ERROR:
                    var toCall = this.reject_;
                    Object(__WEBPACK_IMPORTED_MODULE_5__implementation_async__["a" /* async */])(toCall.bind(null, this.error_))();
                    break;
                default:
                    triggered = false;
                    break;
            }
            if (triggered) {
                this.resolve_ = null;
                this.reject_ = null;
            }
        }
    };
    UploadTask.prototype.notifyObserver_ = function (observer) {
        var externalState = __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["d" /* taskStateFromInternalTaskState */](this.state_);
        switch (externalState) {
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["c" /* TaskState */].RUNNING:
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["c" /* TaskState */].PAUSED:
                if (observer.next !== null) {
                    Object(__WEBPACK_IMPORTED_MODULE_5__implementation_async__["a" /* async */])(observer.next.bind(observer, this.snapshot))();
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["c" /* TaskState */].SUCCESS:
                if (observer.complete !== null) {
                    Object(__WEBPACK_IMPORTED_MODULE_5__implementation_async__["a" /* async */])(observer.complete.bind(observer))();
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["c" /* TaskState */].CANCELED:
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["c" /* TaskState */].ERROR:
                if (observer.error !== null) {
                    Object(__WEBPACK_IMPORTED_MODULE_5__implementation_async__["a" /* async */])(observer.error.bind(observer, this.error_))();
                }
                break;
            default:
                // TODO(andysoto): assert(false);
                if (observer.error !== null) {
                    Object(__WEBPACK_IMPORTED_MODULE_5__implementation_async__["a" /* async */])(observer.error.bind(observer, this.error_))();
                }
        }
    };
    /**
     * Resumes a paused task. Has no effect on a currently running or failed task.
     * @return True if the operation took effect, false if ignored.
     */
    UploadTask.prototype.resume = function () {
        __WEBPACK_IMPORTED_MODULE_3__implementation_args__["g" /* validate */]('resume', [], arguments);
        var valid = this.state_ === __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].PAUSED ||
            this.state_ === __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].PAUSING;
        if (valid) {
            this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].RUNNING);
        }
        return valid;
    };
    /**
     * Pauses a currently running task. Has no effect on a paused or failed task.
     * @return True if the operation took effect, false if ignored.
     */
    UploadTask.prototype.pause = function () {
        __WEBPACK_IMPORTED_MODULE_3__implementation_args__["g" /* validate */]('pause', [], arguments);
        var valid = this.state_ === __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].RUNNING;
        if (valid) {
            this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].PAUSING);
        }
        return valid;
    };
    /**
     * Cancels a currently running or paused task. Has no effect on a complete or
     * failed task.
     * @return True if the operation took effect, false if ignored.
     */
    UploadTask.prototype.cancel = function () {
        __WEBPACK_IMPORTED_MODULE_3__implementation_args__["g" /* validate */]('cancel', [], arguments);
        var valid = this.state_ === __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].RUNNING ||
            this.state_ === __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].PAUSING;
        if (valid) {
            this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].CANCELING);
        }
        return valid;
    };
    return UploadTask;
}());


//# sourceMappingURL=task.js.map


/***/ }),

/***/ "../../../../@firebase/storage/dist/esm/src/tasksnapshot.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadTaskSnapshot; });
var UploadTaskSnapshot = /** @class */ (function () {
    function UploadTaskSnapshot(bytesTransferred, totalBytes, state, metadata, task, ref) {
        this.bytesTransferred = bytesTransferred;
        this.totalBytes = totalBytes;
        this.state = state;
        this.metadata = metadata;
        this.task = task;
        this.ref = ref;
    }
    Object.defineProperty(UploadTaskSnapshot.prototype, "downloadURL", {
        get: function () {
            if (this.metadata !== null) {
                var urls = this.metadata['downloadURLs'];
                if (urls != null && urls[0] != null) {
                    return urls[0];
                }
                else {
                    return null;
                }
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    return UploadTaskSnapshot;
}());


//# sourceMappingURL=tasksnapshot.js.map


/***/ }),

/***/ "../../../../firebase/index.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var firebase = __webpack_require__("../../../../firebase/app/index.js");
__webpack_require__("../../../../firebase/auth/index.js");
__webpack_require__("../../../../firebase/database/index.js");
__webpack_require__("../../../../firebase/messaging/index.js");
__webpack_require__("../../../../firebase/storage/index.js");

module.exports = firebase;


/***/ }),

/***/ "../../../../firebase/messaging/index.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

__webpack_require__("../../../../@firebase/messaging/dist/esm/index.js");


/***/ }),

/***/ "../../../../firebase/storage/index.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

__webpack_require__("../../../../@firebase/storage/dist/esm/index.js");


/***/ }),

/***/ "../../../material/card/typings/index.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MatCardModuleNgFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_MatCard; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_MatCard_0;
/* unused harmony export View_MatCard_Host_0 */
/* unused harmony export MatCardNgFactory */
/* unused harmony export RenderType_MatCardHeader */
/* unused harmony export View_MatCardHeader_0 */
/* unused harmony export View_MatCardHeader_Host_0 */
/* unused harmony export MatCardHeaderNgFactory */
/* unused harmony export RenderType_MatCardTitleGroup */
/* unused harmony export View_MatCardTitleGroup_0 */
/* unused harmony export View_MatCardTitleGroup_Host_0 */
/* unused harmony export MatCardTitleGroupNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_bidi__ = __webpack_require__("../../../cdk/esm5/bidi.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_core__ = __webpack_require__("../../../material/esm5/core.es5.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var MatCardModuleNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcmf"](__WEBPACK_IMPORTED_MODULE_1__angular_material_card__["e" /* MatCardModule */], [], function (_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmod"]([__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModuleRef"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](6144, __WEBPACK_IMPORTED_MODULE_2__angular_cdk_bidi__["b" /* DIR_DOCUMENT */], null, [__WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_2__angular_cdk_bidi__["c" /* Directionality */], __WEBPACK_IMPORTED_MODULE_2__angular_cdk_bidi__["c" /* Directionality */], [[2, __WEBPACK_IMPORTED_MODULE_2__angular_cdk_bidi__["b" /* DIR_DOCUMENT */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_2__angular_cdk_bidi__["a" /* BidiModule */], __WEBPACK_IMPORTED_MODULE_2__angular_cdk_bidi__["a" /* BidiModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](256, __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["f" /* MATERIAL_SANITY_CHECKS */], true, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["n" /* MatCommonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["n" /* MatCommonModule */], [[2, __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["f" /* MATERIAL_SANITY_CHECKS */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_1__angular_material_card__["e" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material_card__["e" /* MatCardModule */], [])]); });

var styles_MatCard = [".mat-card{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:24px;border-radius:2px}.mat-card:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-card .mat-divider{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider{left:auto;right:0}.mat-card .mat-divider.mat-divider-inset{position:static;margin:0}@media screen and (-ms-high-contrast:active){.mat-card{outline:solid 1px}}.mat-card-flat{box-shadow:none}.mat-card-actions,.mat-card-content,.mat-card-subtitle,.mat-card-title{display:block;margin-bottom:16px}.mat-card-actions{margin-left:-16px;margin-right:-16px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 48px);margin:0 -24px 16px -24px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-footer{display:block;margin:0 -24px -24px -24px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button{margin:0 4px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header-text{margin:0 8px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0}.mat-card-lg-image,.mat-card-md-image,.mat-card-sm-image{margin:-8px 0}.mat-card-title-group{display:flex;justify-content:space-between;margin:0 -8px}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}@media (max-width:600px){.mat-card{padding:24px 16px}.mat-card-actions{margin-left:-8px;margin-right:-8px}.mat-card-image{width:calc(100% + 32px);margin:16px -16px}.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}.mat-card-header{margin:-8px 0 0 0}.mat-card-footer{margin-left:-16px;margin-right:-16px}}.mat-card-content>:first-child,.mat-card>:first-child{margin-top:0}.mat-card-content>:last-child:not(.mat-card-footer),.mat-card>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-24px}.mat-card>.mat-card-actions:last-child{margin-bottom:-16px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child{margin-left:0;margin-right:0}.mat-card-subtitle:not(:first-child),.mat-card-title:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"];
var RenderType_MatCard = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcrt"]({ encapsulation: 2, styles: styles_MatCard, data: {} });

function View_MatCard_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](2, [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵncd"](null, 0), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵncd"](null, 1)], null, null); }
function View_MatCard_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "mat-card", [["class", "mat-card"]], null, null, null, View_MatCard_0, RenderType_MatCard)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_material_card__["a" /* MatCard */], [], null, null)], null, null); }
var MatCardNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵccf"]("mat-card", __WEBPACK_IMPORTED_MODULE_1__angular_material_card__["a" /* MatCard */], View_MatCard_Host_0, {}, {}, ["*", "mat-card-footer"]);

var styles_MatCardHeader = [];
var RenderType_MatCardHeader = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcrt"]({ encapsulation: 2, styles: styles_MatCardHeader, data: {} });

function View_MatCardHeader_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](2, [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵncd"](null, 0), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](1, 0, null, null, 1, "div", [["class", "mat-card-header-text"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵncd"](null, 1), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵncd"](null, 2)], null, null); }
function View_MatCardHeader_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "mat-card-header", [["class", "mat-card-header"]], null, null, null, View_MatCardHeader_0, RenderType_MatCardHeader)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_material_card__["d" /* MatCardHeader */], [], null, null)], null, null); }
var MatCardHeaderNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵccf"]("mat-card-header", __WEBPACK_IMPORTED_MODULE_1__angular_material_card__["d" /* MatCardHeader */], View_MatCardHeader_Host_0, {}, {}, ["[mat-card-avatar], [matCardAvatar]", "mat-card-title, mat-card-subtitle, [mat-card-title], [mat-card-subtitle]", "*"]);

var styles_MatCardTitleGroup = [];
var RenderType_MatCardTitleGroup = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcrt"]({ encapsulation: 2, styles: styles_MatCardTitleGroup, data: {} });

function View_MatCardTitleGroup_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](2, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵncd"](null, 0), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵncd"](null, 1), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵncd"](null, 2)], null, null); }
function View_MatCardTitleGroup_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "mat-card-title-group", [["class", "mat-card-title-group"]], null, null, null, View_MatCardTitleGroup_0, RenderType_MatCardTitleGroup)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_material_card__["g" /* MatCardTitleGroup */], [], null, null)], null, null); }
var MatCardTitleGroupNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵccf"]("mat-card-title-group", __WEBPACK_IMPORTED_MODULE_1__angular_material_card__["g" /* MatCardTitleGroup */], View_MatCardTitleGroup_Host_0, {}, {}, ["mat-card-title, mat-card-subtitle, [mat-card-title], [mat-card-subtitle]", "img", "*"]);



/***/ })

});
//# sourceMappingURL=auth.module.chunk.js.map