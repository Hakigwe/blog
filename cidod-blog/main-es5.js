function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/api.service.ts":
  /*!********************************!*\
    !*** ./src/app/api.service.ts ***!
    \********************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ApiService = /*#__PURE__*/function () {
      function ApiService(http) {
        _classCallCheck(this, ApiService);

        this.http = http;
      }

      _createClass(ApiService, [{
        key: "getApi",
        value: function getApi() {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl);
        }
      }]);

      return ApiService;
    }();

    ApiService.ɵfac = function ApiService_Factory(t) {
      return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiService,
      factory: ApiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _excerpt_excerpt_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./excerpt/excerpt.component */
    "./src/app/excerpt/excerpt.component.ts");
    /* harmony import */


    var _blog_showcase_blog_showcase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./blog-showcase/blog-showcase.component */
    "./src/app/blog-showcase/blog-showcase.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _blog_showcase_blog_showcase_component__WEBPACK_IMPORTED_MODULE_1__["BlogShowcaseComponent"]
    }, {
      path: ':id',
      component: _excerpt_excerpt_component__WEBPACK_IMPORTED_MODULE_0__["ExcerptComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _hero_hero_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./hero/hero.component */
    "./src/app/hero/hero.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _blog_footer_blog_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./blog-footer/blog-footer.component */
    "./src/app/blog-footer/blog-footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'cidod-blog';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-hero");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-blog-footer");
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _hero_hero_component__WEBPACK_IMPORTED_MODULE_2__["HeroComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _blog_footer_blog_footer_component__WEBPACK_IMPORTED_MODULE_4__["BlogFooterComponent"]],
      styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"Raleway\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxoYWtpZ1xcRGVza3RvcFxcQ3Jvd24gSW50ZXJhY3RpdmVcXGNpZG9kLWJsb2cvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0NBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxufSIsIioge1xuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _hero_hero_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./hero/hero.component */
    "./src/app/hero/hero.component.ts");
    /* harmony import */


    var _blog_showcase_blog_showcase_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./blog-showcase/blog-showcase.component */
    "./src/app/blog-showcase/blog-showcase.component.ts");
    /* harmony import */


    var _blog_footer_blog_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./blog-footer/blog-footer.component */
    "./src/app/blog-footer/blog-footer.component.ts");
    /* harmony import */


    var _blog_showcase_blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./blog-showcase/blog-post/blog-post.component */
    "./src/app/blog-showcase/blog-post/blog-post.component.ts");
    /* harmony import */


    var _blog_showcase_promo_promo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./blog-showcase/promo/promo.component */
    "./src/app/blog-showcase/promo/promo.component.ts");
    /* harmony import */


    var _blog_showcase_feature_feature_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./blog-showcase/feature/feature.component */
    "./src/app/blog-showcase/feature/feature.component.ts");
    /* harmony import */


    var _blog_page_blog_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./blog-page/blog-page.component */
    "./src/app/blog-page/blog-page.component.ts");
    /* harmony import */


    var _excerpt_excerpt_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./excerpt/excerpt.component */
    "./src/app/excerpt/excerpt.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _hero_hero_component__WEBPACK_IMPORTED_MODULE_6__["HeroComponent"], _blog_showcase_blog_showcase_component__WEBPACK_IMPORTED_MODULE_7__["BlogShowcaseComponent"], _blog_footer_blog_footer_component__WEBPACK_IMPORTED_MODULE_8__["BlogFooterComponent"], _blog_showcase_blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_9__["BlogPostComponent"], _blog_showcase_promo_promo_component__WEBPACK_IMPORTED_MODULE_10__["PromoComponent"], _blog_showcase_feature_feature_component__WEBPACK_IMPORTED_MODULE_11__["FeatureComponent"], _blog_page_blog_page_component__WEBPACK_IMPORTED_MODULE_12__["BlogPageComponent"], _excerpt_excerpt_component__WEBPACK_IMPORTED_MODULE_13__["ExcerptComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _hero_hero_component__WEBPACK_IMPORTED_MODULE_6__["HeroComponent"], _blog_showcase_blog_showcase_component__WEBPACK_IMPORTED_MODULE_7__["BlogShowcaseComponent"], _blog_footer_blog_footer_component__WEBPACK_IMPORTED_MODULE_8__["BlogFooterComponent"], _blog_showcase_blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_9__["BlogPostComponent"], _blog_showcase_promo_promo_component__WEBPACK_IMPORTED_MODULE_10__["PromoComponent"], _blog_showcase_feature_feature_component__WEBPACK_IMPORTED_MODULE_11__["FeatureComponent"], _blog_page_blog_page_component__WEBPACK_IMPORTED_MODULE_12__["BlogPageComponent"], _excerpt_excerpt_component__WEBPACK_IMPORTED_MODULE_13__["ExcerptComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/blog-footer/blog-footer.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/blog-footer/blog-footer.component.ts ***!
    \******************************************************/

  /*! exports provided: BlogFooterComponent */

  /***/
  function srcAppBlogFooterBlogFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogFooterComponent", function () {
      return BlogFooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BlogFooterComponent = /*#__PURE__*/function () {
      function BlogFooterComponent() {
        _classCallCheck(this, BlogFooterComponent);
      }

      _createClass(BlogFooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BlogFooterComponent;
    }();

    BlogFooterComponent.ɵfac = function BlogFooterComponent_Factory(t) {
      return new (t || BlogFooterComponent)();
    };

    BlogFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogFooterComponent,
      selectors: [["app-blog-footer"]],
      decls: 55,
      vars: 0,
      consts: [[1, "footer"], [1, "container"], [1, "footer_content"], ["src", "../../assets/CICOD.png", "alt", "", "srcset", "", 1, "footer_content_logo"], ["id", "links1", 1, "footer_content_links"], [1, "footer_content_links_header"], [1, "nav-item"], ["href", "#", 1, "nav-link", "footer_content_links_link"], ["id", "links2", 1, "footer_content_links"], [1, "footer_content_links"], [1, "bottom"], [1, "bottom_content"], [1, "bottom_content_ul"], ["href", "#", 1, "nav-link"], [1, "bottom_content_name"]],
      template: function BlogFooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Customer Order Management");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Inventory Management System");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Workflow Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Unified Collections Gateway ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Bundles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "CICOD Merchant");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Call To Shop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "CICOD Map");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Support");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Privacy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Terms of use");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Security");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\xA9 Crown Interactive 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".footer[_ngcontent-%COMP%] {\n  background: #f0f1f3;\n}\n.footer_content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-items: flex-start;\n  justify-content: space-between;\n  padding: 3rem;\n}\n.footer_content_logo[_ngcontent-%COMP%] {\n  padding-top: -3rem;\n}\n.footer_content_links[_ngcontent-%COMP%] {\n  list-style: none;\n  line-height: 0.5px;\n  font-size: 0.75rem;\n  color: #666;\n  text-align: left;\n}\n.footer_content_links_header[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  padding: 0.5rem 1rem;\n  font-weight: 500;\n}\n.footer_content_links_link[_ngcontent-%COMP%] {\n  color: #666;\n}\n.bottom_content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: auto;\n  max-height: 10vh;\n  padding: 3rem 2rem;\n}\n.bottom_content_name[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.bottom_content_ul[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n}\n.bottom_content_ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 0.75rem;\n}\n@media only screen and (max-width: 400px) {\n  .footer_content[_ngcontent-%COMP%] {\n    justify-content: center;\n    align-content: center;\n    flex-direction: column;\n  }\n  .footer_content_logo[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n  }\n  .footer_content_links_link[_ngcontent-%COMP%] {\n    line-height: 1rem;\n  }\n\n  .bottom_content[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    padding: 1rem 1rem;\n    flex-direction: column;\n    justify-content: center;\n    align-content: center;\n  }\n}\n@media only screen and (max-width: 900px) {\n  .footer_content[_ngcontent-%COMP%] {\n    justify-content: center;\n    align-content: center;\n    flex-direction: column;\n  }\n  .footer_content_logo[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n  }\n\n  .bottom_content[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    padding: 1rem 1rem;\n    flex-direction: column;\n    justify-content: center;\n    align-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy1mb290ZXIvQzpcXFVzZXJzXFxoYWtpZ1xcRGVza3RvcFxcQ3Jvd24gSW50ZXJhY3RpdmVcXGNpZG9kLWJsb2cvc3JjXFxhcHBcXGJsb2ctZm9vdGVyXFxibG9nLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYmxvZy1mb290ZXIvYmxvZy1mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBQTtBQ0FKO0FERUk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBQ0FSO0FERVE7RUFDSSxrQkFBQTtBQ0FaO0FESUk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNGUjtBREtRO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNIWjtBRE1RO0VBQ0ksV0FBQTtBQ0paO0FEVUk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDUFI7QURTUTtFQUNJLGtCQUFBO0FDUFo7QURVUTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQ1JaO0FEV2dCO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDVHBCO0FEbUJBO0VBRVE7SUFDSSx1QkFBQTtJQUNBLHFCQUFBO0lBQ0Esc0JBQUE7RUNqQlY7RURtQlU7SUFDSSxtQkFBQTtFQ2pCZDtFRHFCYztJQUNBLGlCQUFBO0VDbkJkOztFRDBCSztJQUNJLGdCQUFBO0lBQ0Esa0JBQUE7SUFDSCxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EscUJBQUE7RUN2Qk47QUFDRjtBRDhCQTtFQUVRO0lBQ0ksdUJBQUE7SUFDQSxxQkFBQTtJQUNBLHNCQUFBO0VDN0JWO0VEK0JVO0lBQ0ksbUJBQUE7RUM3QmQ7O0VEbUNLO0lBQ0ksZ0JBQUE7SUFDQSxrQkFBQTtJQUNILHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxxQkFBQTtFQ2hDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYmxvZy1mb290ZXIvYmxvZy1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHsgIFxyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQwLCAyNDEsIDI0Myk7XHJcbiAgICBcclxuICAgICZfY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBwYWRkaW5nOiAzcmVtO1xyXG5cclxuICAgICAgICAmX2xvZ28ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogLTNyZW07XHJcbiAgICAgICAgfVxyXG4gICAgIFxyXG5cclxuICAgICZfbGlua3Mge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDAuNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0OyA7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgICZfaGVhZGVyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfbGluayB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIH1cclxufVxyXG4uYm90dG9tIHtcclxuICAgICZfY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTB2aDtcclxuICAgICAgICBwYWRkaW5nOiAzcmVtIDJyZW07XHJcblxyXG4gICAgICAgICZfbmFtZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfdWwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG5cclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAuZm9vdGVyIHtcclxuICAgICAgICAmX2NvbnRlbnQge1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgICAgJl9sb2dvIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICZfbGlua3Mge1xyXG4gICAgICAgICAgICAgICAgJl9saW5rIHtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5ib3R0b20ge1xyXG4gICAgICAgJl9jb250ZW50IHtcclxuICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgIC5mb290ZXIge1xyXG4gICAgICAgICZfY29udGVudCB7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgICAmX2xvZ28ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYm90dG9tIHtcclxuICAgICAgICZfY29udGVudCB7XHJcbiAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDFyZW07XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgIH1cclxuICAgIH1cclxuIiwiLmZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICNmMGYxZjM7XG59XG4uZm9vdGVyX2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAzcmVtO1xufVxuLmZvb3Rlcl9jb250ZW50X2xvZ28ge1xuICBwYWRkaW5nLXRvcDogLTNyZW07XG59XG4uZm9vdGVyX2NvbnRlbnRfbGlua3Mge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBsaW5lLWhlaWdodDogMC41cHg7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgY29sb3I6ICM2NjY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uZm9vdGVyX2NvbnRlbnRfbGlua3NfaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5mb290ZXJfY29udGVudF9saW5rc19saW5rIHtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5ib3R0b21fY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXgtaGVpZ2h0OiAxMHZoO1xuICBwYWRkaW5nOiAzcmVtIDJyZW07XG59XG4uYm90dG9tX2NvbnRlbnRfbmFtZSB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbn1cbi5ib3R0b21fY29udGVudF91bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uYm90dG9tX2NvbnRlbnRfdWwgbGkgYSB7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDAuNzVyZW07XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLmZvb3Rlcl9jb250ZW50IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuZm9vdGVyX2NvbnRlbnRfbG9nbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxuICAuZm9vdGVyX2NvbnRlbnRfbGlua3NfbGluayB7XG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gIH1cblxuICAuYm90dG9tX2NvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgcGFkZGluZzogMXJlbSAxcmVtO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5mb290ZXJfY29udGVudCB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmZvb3Rlcl9jb250ZW50X2xvZ28ge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cblxuICAuYm90dG9tX2NvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgcGFkZGluZzogMXJlbSAxcmVtO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog-footer',
          templateUrl: './blog-footer.component.html',
          styleUrls: ['./blog-footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/blog-page/blog-page.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/blog-page/blog-page.component.ts ***!
    \**************************************************/

  /*! exports provided: BlogPageComponent */

  /***/
  function srcAppBlogPageBlogPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogPageComponent", function () {
      return BlogPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../api.service */
    "./src/app/api.service.ts");

    var BlogPageComponent = /*#__PURE__*/function () {
      function BlogPageComponent(apiService) {
        _classCallCheck(this, BlogPageComponent);

        this.apiService = apiService;
        this.blogData = [];
      }

      _createClass(BlogPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var resp = this.apiService.getApi();
          resp.subscribe(function (data) {
            for (var i = 0; i <= 7; i++) {
              _this.blogData.push(data[i]);
            }

            console.log(_this.blogData);
          });
        }
      }]);

      return BlogPageComponent;
    }();

    BlogPageComponent.ɵfac = function BlogPageComponent_Factory(t) {
      return new (t || BlogPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
    };

    BlogPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogPageComponent,
      selectors: [["app-blog-page"]],
      decls: 1,
      vars: 0,
      template: function BlogPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " -->\n");
        }
      },
      styles: [".page[_ngcontent-%COMP%] {\n  margin: 3rem auto;\n}\n.page_header[_ngcontent-%COMP%] {\n  margin: auto;\n  display: flex;\n  justify-content: space-between;\n}\n.page_header_link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #666666;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy1wYWdlL0M6XFxVc2Vyc1xcaGFraWdcXERlc2t0b3BcXENyb3duIEludGVyYWN0aXZlXFxjaWRvZC1ibG9nL3NyY1xcYXBwXFxibG9nLXBhZ2VcXGJsb2ctcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYmxvZy1wYWdlL2Jsb2ctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0o7QURDSTtFQUNRLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNDWjtBREVnQjtFQUNJLGNBQUE7RUFDSixxQkFBQTtBQ0FoQiIsImZpbGUiOiJzcmMvYXBwL2Jsb2ctcGFnZS9ibG9nLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZSB7XHJcbiAgICBtYXJnaW46IDNyZW0gYXV0bztcclxuXHJcbiAgICAmX2hlYWRlciB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAgICAgJl9saW5rIHtcclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICBcclxuICAgIH1cclxufSIsIi5wYWdlIHtcbiAgbWFyZ2luOiAzcmVtIGF1dG87XG59XG4ucGFnZV9oZWFkZXIge1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5wYWdlX2hlYWRlcl9saW5rIGEge1xuICBjb2xvcjogIzY2NjY2NjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog-page',
          templateUrl: './blog-page.component.html',
          styleUrls: ['./blog-page.component.scss']
        }]
      }], function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/blog-showcase/blog-post/blog-post.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/blog-showcase/blog-post/blog-post.component.ts ***!
    \****************************************************************/

  /*! exports provided: BlogPostComponent */

  /***/
  function srcAppBlogShowcaseBlogPostBlogPostComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogPostComponent", function () {
      return BlogPostComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var BlogPostComponent = /*#__PURE__*/function () {
      function BlogPostComponent() {
        _classCallCheck(this, BlogPostComponent);

        this.id = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isTrue = 1;
      }

      _createClass(BlogPostComponent, [{
        key: "onBlogChosen",
        value: function onBlogChosen() {
          this.id.emit(this.isTrue);
          console.log('was clicked!');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BlogPostComponent;
    }();

    BlogPostComponent.ɵfac = function BlogPostComponent_Factory(t) {
      return new (t || BlogPostComponent)();
    };

    BlogPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogPostComponent,
      selectors: [["app-blog-post"]],
      inputs: {
        Blogs: "Blogs"
      },
      outputs: {
        id: "id"
      },
      decls: 15,
      vars: 3,
      consts: [[1, "container"], ["id", "blogbox", 1, "", 3, "ngStyle"], ["blogbox", ""], ["id", "blogbox_img", "alt", "", 3, "src"], ["id", "blogbox_header", 1, ""], ["id", "blogbox_p", 1, ""], ["id", "blogbox_footer"], ["id", "blogbox_footer_btn", 1, "btn", "btn-outline-secondary"], ["id", "blogbox_footer_text"]],
      template: function BlogPostComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "read more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Workflow Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.Blogs.blogImg[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Blogs.blogName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Blogs.blogContent);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
      styles: ["a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #562C87;\n}\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n#blogbox[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  max-width: 30rem;\n  max-height: 40rem;\n  align-items: center;\n  border: 1px transparent;\n  box-shadow: 5px 5px 10px 3px #eeeded;\n  margin: auto;\n  margin-bottom: 5rem;\n  border-radius: 7px;\n}\n#blogbox[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n#blogbox_img[_ngcontent-%COMP%] {\n  align-self: center;\n  max-height: 200vh;\n  max-width: 100%;\n  margin: auto;\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n}\n#blogbox_header[_ngcontent-%COMP%] {\n  padding: 1rem 3rem;\n}\n#blogbox_p[_ngcontent-%COMP%] {\n  max-height: 10rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 1rem 3rem;\n}\n#blogbox_footer[_ngcontent-%COMP%] {\n  padding: 1rem 3rem;\n  margin-bottom: 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n#blogbox_footer_btn[_ngcontent-%COMP%] {\n  border: 1px solid #666;\n  background-color: #ffffff;\n  border-radius: 50px;\n  padding: 7px 10px;\n  color: #666;\n}\n#blogbox_footer_text[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  color: #562C87;\n}\n@media only screen and (max-width: 150px) {\n  #blogbox_header[_ngcontent-%COMP%] {\n    font-size: 0.5rem;\n  }\n  #blogbox_[_ngcontent-%COMP%]   footer_button[_ngcontent-%COMP%] {\n    font-size: 0.25rem;\n    width: 50%;\n  }\n}\n@media only screen and (max-width: 300px) {\n  #blogbox_p[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media only screen and (max-width: 600px) {\n  #blogbox[_ngcontent-%COMP%] {\n    align-content: center;\n    justify-content: center;\n    width: 100%;\n  }\n  #blogbox_header[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  #blogbox_p[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  #blogbox_img[_ngcontent-%COMP%] {\n    display: none;\n  }\n  #blogbox_footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: center;\n    align-content: center;\n  }\n  #blogbox_footer_btn[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n  #blogbox_footer_text[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy1zaG93Y2FzZS9ibG9nLXBvc3QvQzpcXFVzZXJzXFxoYWtpZ1xcRGVza3RvcFxcQ3Jvd24gSW50ZXJhY3RpdmVcXGNpZG9kLWJsb2cvc3JjXFxhcHBcXGJsb2ctc2hvd2Nhc2VcXGJsb2ctcG9zdFxcYmxvZy1wb3N0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ibG9nLXNob3djYXNlL2Jsb2ctcG9zdC9ibG9nLXBvc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUNDSjtBREFJO0VBQ0ksZUFBQTtBQ0VSO0FERUE7RUFDSSxzQkFBQTtFQUNELGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDSCxrQkFBQTtBQ0NBO0FESUc7RUFDSSxzQkFBQTtBQ0ZQO0FESUc7RUFDSyxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO0FDRlI7QURJSTtFQUNJLGtCQUFBO0FDRlI7QURNSTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDSlI7QURPSTtFQUNJLGtCQUFBO0VBQ0MsbUJBQUE7RUFDQSxhQUFBO0VBQ0QsOEJBQUE7RUFDQSxtQkFBQTtBQ0xSO0FETVE7RUFDSSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNKWjtBRE9RO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDTFo7QURXQTtFQUVRO0lBQ0ksaUJBQUE7RUNUVjtFRGFVO0lBQ0ksa0JBQUE7SUFDQSxVQUFBO0VDWGQ7QUFDRjtBRGdCQTtFQUVRO0lBQ0ksYUFBQTtFQ2ZWO0FBQ0Y7QURrQkE7RUFDSTtJQUNJLHFCQUFBO0lBQ0EsdUJBQUE7SUFDQSxXQUFBO0VDaEJOO0VEa0JNO0lBQ0ksa0JBQUE7RUNoQlY7RURtQk07SUFDSSxrQkFBQTtFQ2pCVjtFRG1CTTtJQUNJLGFBQUE7RUNqQlY7RURvQk07SUFDSSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EscUJBQUE7RUNsQlY7RURvQlU7SUFDSSxVQUFBO0VDbEJkO0VEcUJVO0lBQ0ksYUFBQTtFQ25CZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYmxvZy1zaG93Y2FzZS9ibG9nLXBvc3QvYmxvZy1wb3N0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzU2MkM4NztcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuI2Jsb2dib3gge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgZGlzcGxheTogZmxleDtcclxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgbWF4LXdpZHRoOiAzMHJlbTtcclxuICAgbWF4LWhlaWdodDogNDByZW07XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIGJvcmRlcjogMXB4IHRyYW5zcGFyZW50O1xyXG4gICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggM3B4ICByZ2IoMjM4LCAyMzcsIDIzNyk7IFxyXG4gICBtYXJnaW46IGF1dG87XHJcbiAgIG1hcmdpbi1ib3R0b206IDVyZW07XHJcbmJvcmRlci1yYWRpdXM6IDdweDtcclxuXHJcblxyXG4gIFxyXG5cclxuICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICB9XHJcbiAgICZfaW1nIHtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMjAwdmg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duOztcclxuICAgICB9XHJcbiAgICAmX2hlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbSAzcmVtO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAmX3Age1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwcmVtO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbSAzcmVtO1xyXG4gICAgfVxyXG5cclxuICAgICZfZm9vdGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtIDNyZW07XHJcbiAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgJl9idG4ge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNjY2O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA3cHggMTBweDtcclxuICAgICAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmX3RleHQge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogIzU2MkM4NztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1MHB4KSB7XHJcbiAgICAjYmxvZ2JveCB7XHJcbiAgICAgICAgJl9oZWFkZXIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IC41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJl8gZm9vdGVyIHtcclxuICAgICAgICAgICAgJl9idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuMjVyZW07XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XHJcbiAgICAjYmxvZ2JveCB7XHJcbiAgICAgICAgJl9wIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgI2Jsb2dib3gge1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgJl9oZWFkZXIge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmX3Age1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfaW1nIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfZm9vdGVyIHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICZfYnRuIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICZfdGV4dCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM1NjJDODc7XG59XG5hOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jYmxvZ2JveCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC13aWR0aDogMzByZW07XG4gIG1heC1oZWlnaHQ6IDQwcmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDNweCAjZWVlZGVkO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cbiNibG9nYm94IC5jb250YWluZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuI2Jsb2dib3hfaW1nIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXgtaGVpZ2h0OiAyMDB2aDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XG59XG4jYmxvZ2JveF9oZWFkZXIge1xuICBwYWRkaW5nOiAxcmVtIDNyZW07XG59XG4jYmxvZ2JveF9wIHtcbiAgbWF4LWhlaWdodDogMTByZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBwYWRkaW5nOiAxcmVtIDNyZW07XG59XG4jYmxvZ2JveF9mb290ZXIge1xuICBwYWRkaW5nOiAxcmVtIDNyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNibG9nYm94X2Zvb3Rlcl9idG4ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjY2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nOiA3cHggMTBweDtcbiAgY29sb3I6ICM2NjY7XG59XG4jYmxvZ2JveF9mb290ZXJfdGV4dCB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGNvbG9yOiAjNTYyQzg3O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1MHB4KSB7XG4gICNibG9nYm94X2hlYWRlciB7XG4gICAgZm9udC1zaXplOiAwLjVyZW07XG4gIH1cbiAgI2Jsb2dib3hfIGZvb3Rlcl9idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMC4yNXJlbTtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XG4gICNibG9nYm94X3Age1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgI2Jsb2dib3gge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAjYmxvZ2JveF9oZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAjYmxvZ2JveF9wIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgI2Jsb2dib3hfaW1nIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICNibG9nYm94X2Zvb3RlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgI2Jsb2dib3hfZm9vdGVyX2J0biB7XG4gICAgd2lkdGg6IDc1JTtcbiAgfVxuICAjYmxvZ2JveF9mb290ZXJfdGV4dCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogPostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog-post',
          templateUrl: './blog-post.component.html',
          styleUrls: ['./blog-post.component.scss']
        }]
      }], function () {
        return [];
      }, {
        Blogs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/blog-showcase/blog-showcase.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/blog-showcase/blog-showcase.component.ts ***!
    \**********************************************************/

  /*! exports provided: BlogShowcaseComponent */

  /***/
  function srcAppBlogShowcaseBlogShowcaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogShowcaseComponent", function () {
      return BlogShowcaseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _feature_feature_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./feature/feature.component */
    "./src/app/blog-showcase/feature/feature.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); // import { environment } from './../../environments/environment';
    // import { HttpClient } from '@angular/common/http';


    var _c0 = function _c0(a1) {
      return ["/", a1];
    };

    function BlogShowcaseComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "read more");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Workflow Manager");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var blog_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", blog_r1.blogImg[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blog_r1.blogName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blog_r1.blogContent);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, i_r2));
      }
    }

    var BlogShowcaseComponent = /*#__PURE__*/function () {
      function BlogShowcaseComponent(api) {
        _classCallCheck(this, BlogShowcaseComponent);

        this.api = api;
        this.Blogs = [];
        this.resp = this.api.getApi();
      }

      _createClass(BlogShowcaseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.resp.subscribe(function (data) {
            var index = data.length;

            for (var i = 0; i <= index - 1; i++) {
              _this2.Blogs.push(data[i]);
            }

            console.log(index);
          });
        }
      }, {
        key: "getIdnumber",
        value: function getIdnumber(data) {
          console.log(data);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return BlogShowcaseComponent;
    }();

    BlogShowcaseComponent.ɵfac = function BlogShowcaseComponent_Factory(t) {
      return new (t || BlogShowcaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
    };

    BlogShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogShowcaseComponent,
      selectors: [["app-blog-showcase"]],
      decls: 6,
      vars: 1,
      consts: [[1, ""], [1, "col-sm-10", "m-auto", "py-5"], ["id", "gridbox", 1, "col-sm-11", "m-auto"], ["class", "posts", 4, "ngFor", "ngForOf"], [1, "posts"], [1, "container"], ["id", "blogbox", 1, "", 3, "ngStyle"], ["blogbox", ""], ["id", "blogbox_img", "alt", "", 3, "src"], ["id", "blogbox_header", 1, ""], ["id", "blogbox_p", 1, ""], ["id", "blogbox_footer"], ["id", "blogbox_footer_btn", 1, "btn", "btn-outline-secondary", 3, "routerLink"], ["id", "blogbox_footer_text"]],
      template: function BlogShowcaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-feature");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BlogShowcaseComponent_div_5_Template, 16, 6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Blogs);
        }
      },
      directives: [_feature_feature_component__WEBPACK_IMPORTED_MODULE_2__["FeatureComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      styles: ["#gridbox[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: 3fr 3fr;\n}\n\n@media only screen and (max-width: 1000px) {\n  #gridbox[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n  }\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #562C87;\n}\n\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n#blogbox[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  max-width: 30rem;\n  max-height: 40rem;\n  align-items: center;\n  border: 1px transparent;\n  box-shadow: 5px 5px 10px 3px #eeeded;\n  margin: auto;\n  margin-bottom: 5rem;\n  border-radius: 7px;\n}\n\n#blogbox[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n#blogbox_img[_ngcontent-%COMP%] {\n  align-self: center;\n  max-height: 200vh;\n  max-width: 100%;\n  margin: auto;\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n}\n\n#blogbox_header[_ngcontent-%COMP%] {\n  padding: 1rem 3rem;\n}\n\n#blogbox_p[_ngcontent-%COMP%] {\n  max-height: 10rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 1rem 3rem;\n}\n\n#blogbox_footer[_ngcontent-%COMP%] {\n  padding: 1rem 3rem;\n  margin-bottom: 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n#blogbox_footer_btn[_ngcontent-%COMP%] {\n  border: 1px solid #666;\n  background-color: #ffffff;\n  border-radius: 50px;\n  padding: 7px 10px;\n  color: #666;\n}\n\n#blogbox_footer_text[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  color: #562C87;\n}\n\n@media only screen and (max-width: 150px) {\n  #blogbox_header[_ngcontent-%COMP%] {\n    font-size: 0.5rem;\n  }\n  #blogbox_[_ngcontent-%COMP%]   footer_button[_ngcontent-%COMP%] {\n    font-size: 0.25rem;\n    width: 50%;\n  }\n}\n\n@media only screen and (max-width: 300px) {\n  #blogbox_p[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  #blogbox[_ngcontent-%COMP%] {\n    align-content: center;\n    justify-content: center;\n    width: 100%;\n  }\n  #blogbox_header[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  #blogbox_p[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  #blogbox_img[_ngcontent-%COMP%] {\n    display: none;\n  }\n  #blogbox_footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: center;\n    align-content: center;\n  }\n  #blogbox_footer_btn[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n  #blogbox_footer_text[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy1zaG93Y2FzZS9DOlxcVXNlcnNcXGhha2lnXFxEZXNrdG9wXFxDcm93biBJbnRlcmFjdGl2ZVxcY2lkb2QtYmxvZy9zcmNcXGFwcFxcYmxvZy1zaG93Y2FzZVxcYmxvZy1zaG93Y2FzZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYmxvZy1zaG93Y2FzZS9ibG9nLXNob3djYXNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNDSjs7QURHQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsV0FBQTtFQ0FOO0FBQ0Y7O0FESUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUNGSjs7QURHSTtFQUNJLGVBQUE7QUNEUjs7QURLQTtFQUNJLHNCQUFBO0VBQ0QsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNILGtCQUFBO0FDRkE7O0FET0c7RUFDSSxzQkFBQTtBQ0xQOztBRE9HO0VBQ0ssa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtBQ0xSOztBRE9JO0VBQ0ksa0JBQUE7QUNMUjs7QURTSTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDUFI7O0FEVUk7RUFDSSxrQkFBQTtFQUNDLG1CQUFBO0VBQ0EsYUFBQTtFQUNELDhCQUFBO0VBQ0EsbUJBQUE7QUNSUjs7QURTUTtFQUNJLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ1BaOztBRFVRO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDUlo7O0FEY0E7RUFFUTtJQUNJLGlCQUFBO0VDWlY7RURnQlU7SUFDSSxrQkFBQTtJQUNBLFVBQUE7RUNkZDtBQUNGOztBRG1CQTtFQUVRO0lBQ0ksYUFBQTtFQ2xCVjtBQUNGOztBRHFCQTtFQUNJO0lBQ0kscUJBQUE7SUFDQSx1QkFBQTtJQUNBLFdBQUE7RUNuQk47RURxQk07SUFDSSxrQkFBQTtFQ25CVjtFRHNCTTtJQUNJLGtCQUFBO0VDcEJWO0VEc0JNO0lBQ0ksYUFBQTtFQ3BCVjtFRHVCTTtJQUNJLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxxQkFBQTtFQ3JCVjtFRHVCVTtJQUNJLFVBQUE7RUNyQmQ7RUR3QlU7SUFDSSxhQUFBO0VDdEJkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ibG9nLXNob3djYXNlL2Jsb2ctc2hvd2Nhc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZ3JpZGJveCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDNmcjtcclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAjZ3JpZGJveCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICB9XHJcbn1cclxuXHJcblxyXG5hIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjNTYyQzg3O1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4jYmxvZ2JveCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICBtYXgtd2lkdGg6IDMwcmVtO1xyXG4gICBtYXgtaGVpZ2h0OiA0MHJlbTtcclxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgYm9yZGVyOiAxcHggdHJhbnNwYXJlbnQ7XHJcbiAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCAzcHggIHJnYigyMzgsIDIzNywgMjM3KTsgXHJcbiAgIG1hcmdpbjogYXV0bztcclxuICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcclxuYm9yZGVyLXJhZGl1czogN3B4O1xyXG5cclxuXHJcbiAgXHJcblxyXG4gICAuY29udGFpbmVyIHtcclxuICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgIH1cclxuICAgJl9pbWcge1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAyMDB2aDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IHNjYWxlLWRvd247O1xyXG4gICAgIH1cclxuICAgICZfaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtIDNyZW07XHJcblxyXG4gICAgfVxyXG5cclxuICAgICZfcCB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTByZW07XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICBwYWRkaW5nOiAxcmVtIDNyZW07XHJcbiAgICB9XHJcblxyXG4gICAgJl9mb290ZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gM3JlbTtcclxuICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAmX2J0biB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM2NjY7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDdweCAxMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfdGV4dCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNTYyQzg3O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTUwcHgpIHtcclxuICAgICNibG9nYm94IHtcclxuICAgICAgICAmX2hlYWRlciB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmXyBmb290ZXIge1xyXG4gICAgICAgICAgICAmX2J1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC4yNXJlbTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcclxuICAgICNibG9nYm94IHtcclxuICAgICAgICAmX3Age1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAjYmxvZ2JveCB7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAmX2hlYWRlciB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfcCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9pbWcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJl9mb290ZXIge1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgJl9idG4ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJl90ZXh0IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIjZ3JpZGJveCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDNmcjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgI2dyaWRib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM1NjJDODc7XG59XG5hOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jYmxvZ2JveCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC13aWR0aDogMzByZW07XG4gIG1heC1oZWlnaHQ6IDQwcmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDNweCAjZWVlZGVkO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cbiNibG9nYm94IC5jb250YWluZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuI2Jsb2dib3hfaW1nIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXgtaGVpZ2h0OiAyMDB2aDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XG59XG4jYmxvZ2JveF9oZWFkZXIge1xuICBwYWRkaW5nOiAxcmVtIDNyZW07XG59XG4jYmxvZ2JveF9wIHtcbiAgbWF4LWhlaWdodDogMTByZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBwYWRkaW5nOiAxcmVtIDNyZW07XG59XG4jYmxvZ2JveF9mb290ZXIge1xuICBwYWRkaW5nOiAxcmVtIDNyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNibG9nYm94X2Zvb3Rlcl9idG4ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjY2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nOiA3cHggMTBweDtcbiAgY29sb3I6ICM2NjY7XG59XG4jYmxvZ2JveF9mb290ZXJfdGV4dCB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGNvbG9yOiAjNTYyQzg3O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1MHB4KSB7XG4gICNibG9nYm94X2hlYWRlciB7XG4gICAgZm9udC1zaXplOiAwLjVyZW07XG4gIH1cbiAgI2Jsb2dib3hfIGZvb3Rlcl9idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMC4yNXJlbTtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XG4gICNibG9nYm94X3Age1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgI2Jsb2dib3gge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAjYmxvZ2JveF9oZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAjYmxvZ2JveF9wIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgI2Jsb2dib3hfaW1nIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICNibG9nYm94X2Zvb3RlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgI2Jsb2dib3hfZm9vdGVyX2J0biB7XG4gICAgd2lkdGg6IDc1JTtcbiAgfVxuICAjYmxvZ2JveF9mb290ZXJfdGV4dCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog-showcase',
          templateUrl: './blog-showcase.component.html',
          styleUrls: ['./blog-showcase.component.scss']
        }]
      }], function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/blog-showcase/feature/feature.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/blog-showcase/feature/feature.component.ts ***!
    \************************************************************/

  /*! exports provided: FeatureComponent */

  /***/
  function srcAppBlogShowcaseFeatureFeatureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeatureComponent", function () {
      return FeatureComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FeatureComponent = /*#__PURE__*/function () {
      function FeatureComponent() {
        _classCallCheck(this, FeatureComponent);
      }

      _createClass(FeatureComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FeatureComponent;
    }();

    FeatureComponent.ɵfac = function FeatureComponent_Factory(t) {
      return new (t || FeatureComponent)();
    };

    FeatureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FeatureComponent,
      selectors: [["app-feature"]],
      decls: 13,
      vars: 0,
      consts: [[1, ""], ["id", "flex", 1, "m-auto", "feature"], ["type", "text", "placeholder", "Search", 1, "feature_search"], [1, "dropdown", "feature_select"], ["data-toggle", "dropdown", 1, "btn", "dropdown-toggle"], [1, "dropdown-menu"], ["href", "", 1, "dropdown-item"]],
      template: function FeatureComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "All Categories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Installation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Support");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".feature[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin: auto;\n}\n.feature_search[_ngcontent-%COMP%] {\n  padding: 0.7rem 0.5rem;\n  padding-left: 2rem;\n  color: #666;\n  border: 1px solid #bbb;\n  width: 10rem;\n  background: url('Group3.png') no-repeat 93%;\n  background-size: 7%;\n}\n.feature_select[_ngcontent-%COMP%] {\n  padding: 0.7rem 0.25rem;\n  padding-left: 2rem;\n  color: #666;\n  border: 1px solid #bbb;\n  border-radius: 5px;\n  width: 13rem;\n}\n@media only screen and (max-width: 500px) {\n  .feature[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    margin: auto;\n    justify-content: space-between;\n    align-items: center;\n    align-content: center;\n  }\n  .feature_search[_ngcontent-%COMP%] {\n    margin: 1rem auto;\n    align-self: center;\n    width: 15rem;\n  }\n  .feature_select[_ngcontent-%COMP%] {\n    margin: 1rem auto;\n    width: 13rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy1zaG93Y2FzZS9mZWF0dXJlL0M6XFxVc2Vyc1xcaGFraWdcXERlc2t0b3BcXENyb3duIEludGVyYWN0aXZlXFxjaWRvZC1ibG9nL3NyY1xcYXBwXFxibG9nLXNob3djYXNlXFxmZWF0dXJlXFxmZWF0dXJlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ibG9nLXNob3djYXNlL2ZlYXR1cmUvZmVhdHVyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQUk7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7QUNFUjtBRENJO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0NSO0FER0E7RUFDSTtJQUNJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLFlBQUE7SUFDQSw4QkFBQTtJQUNBLG1CQUFBO0lBQ0EscUJBQUE7RUNBTjtFREVNO0lBQ0ksaUJBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7RUNBVjtFRElNO0lBQ0ksaUJBQUE7SUFDQSxZQUFBO0VDRlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Jsb2ctc2hvd2Nhc2UvZmVhdHVyZS9mZWF0dXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZlYXR1cmUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICAmX3NlYXJjaCB7XHJcbiAgICAgICAgcGFkZGluZzogMC43cmVtIDAuNXJlbTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDJyZW07O1xyXG4gICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiYmI7XHJcbiAgICAgICAgd2lkdGg6IDEwcmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvR3JvdXAzLnBuZykgbm8tcmVwZWF0IDkzJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDclO1xyXG4gICAgfVxyXG5cclxuICAgICZfc2VsZWN0IHtcclxuICAgICAgICBwYWRkaW5nOiAwLjdyZW0gMC4yNXJlbTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbiAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JiYjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgd2lkdGg6IDEzcmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAuZmVhdHVyZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgICZfc2VhcmNoIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDE1cmVtO1xyXG4gICAgICAgIDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfc2VsZWN0IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgICAgICAgICAgIHdpZHRoOiAxM3JlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIi5mZWF0dXJlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IGF1dG87XG59XG4uZmVhdHVyZV9zZWFyY2gge1xuICBwYWRkaW5nOiAwLjdyZW0gMC41cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gIGNvbG9yOiAjNjY2O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xuICB3aWR0aDogMTByZW07XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvR3JvdXAzLnBuZykgbm8tcmVwZWF0IDkzJTtcbiAgYmFja2dyb3VuZC1zaXplOiA3JTtcbn1cbi5mZWF0dXJlX3NlbGVjdCB7XG4gIHBhZGRpbmc6IDAuN3JlbSAwLjI1cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gIGNvbG9yOiAjNjY2O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxM3JlbTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuZmVhdHVyZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmZlYXR1cmVfc2VhcmNoIHtcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgd2lkdGg6IDE1cmVtO1xuICB9XG4gIC5mZWF0dXJlX3NlbGVjdCB7XG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XG4gICAgd2lkdGg6IDEzcmVtO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeatureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-feature',
          templateUrl: './feature.component.html',
          styleUrls: ['./feature.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/blog-showcase/promo/promo.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/blog-showcase/promo/promo.component.ts ***!
    \********************************************************/

  /*! exports provided: PromoComponent */

  /***/
  function srcAppBlogShowcasePromoPromoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PromoComponent", function () {
      return PromoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PromoComponent = /*#__PURE__*/function () {
      function PromoComponent() {
        _classCallCheck(this, PromoComponent);
      }

      _createClass(PromoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PromoComponent;
    }();

    PromoComponent.ɵfac = function PromoComponent_Factory(t) {
      return new (t || PromoComponent)();
    };

    PromoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PromoComponent,
      selectors: [["app-promo"]],
      decls: 11,
      vars: 0,
      consts: [[1, "promo"], [1, "container"], [1, "promo_content"], [1, "promo_content_header"], [1, "special"], [1, "promo_content_p"], ["href", "#", 1, "btn", "promo_content_btn"]],
      template: function PromoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Start Your ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "30 Days Free Trial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " One of the many reasons your business needs CICOD's Workflow Manager is the efficacy and simplicity it provides With CICOD;s Workflow Manager you can easily assign work orders to your ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Get Started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".promo[_ngcontent-%COMP%] {\n  background: #a4242d;\n  max-height: 100vh;\n  margin: 3rem auto;\n}\n.promo_content[_ngcontent-%COMP%] {\n  padding: 2rem 12rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: #ffffff;\n}\n.promo_content_header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1rem;\n}\n.promo_content_header[_ngcontent-%COMP%]   .special[_ngcontent-%COMP%] {\n  color: #fcb71c;\n  display: block;\n  text-align: center;\n}\n.promo_content_p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.promo_content_btn[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 7px 30px;\n  border-radius: 50px;\n  color: #a4242d;\n  font-weight: 500;\n  font-size: large;\n  margin-top: 1rem;\n}\n@media only screen and (max-width: 300px) {\n  .promo[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media only screen and (max-width: 800px) {\n  .promo_content[_ngcontent-%COMP%] {\n    padding: 2rem 0rem;\n    justify-content: center;\n    align-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy1zaG93Y2FzZS9wcm9tby9DOlxcVXNlcnNcXGhha2lnXFxEZXNrdG9wXFxDcm93biBJbnRlcmFjdGl2ZVxcY2lkb2QtYmxvZy9zcmNcXGFwcFxcYmxvZy1zaG93Y2FzZVxccHJvbW9cXHByb21vLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ibG9nLXNob3djYXNlL3Byb21vL3Byb21vLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0o7QURDSTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQ1I7QURDUTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNDWjtBRENZO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0NoQjtBRElTO0VBQ0ksa0JBQUE7QUNGYjtBREtTO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0hiO0FEWUE7RUFDSTtJQUNJLGFBQUE7RUNUTjtBQUNGO0FEWUE7RUFFUTtJQUNJLGtCQUFBO0lBQ0EsdUJBQUE7SUFDQSxxQkFBQTtFQ1hWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ibG9nLXNob3djYXNlL3Byb21vL3Byb21vLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb21vIHtcclxuICAgIGJhY2tncm91bmQ6ICNhNDI0MmQ7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1hcmdpbjogM3JlbSBhdXRvO1xyXG5cclxuICAgICZfY29udGVudHtcclxuICAgICAgICBwYWRkaW5nOiAycmVtIDEycmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG5cclxuICAgICAgICAmX2hlYWRlciB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbiAgICAgICAgICAgIC5zcGVjaWFsIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmNiNzFjO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgJl9wIHtcclxuICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgJl9idG4ge1xyXG4gICAgICAgICAgICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgICAgICAgICAgcGFkZGluZzogN3B4IDMwcHg7XHJcbiAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICAgY29sb3I6ICNhNDI0MmQ7XHJcbiAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5cclxuXHJcbiAgICBcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gICAgLnByb21vIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAucHJvbW8ge1xyXG4gICAgICAgICZfY29udGVudCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMHJlbTtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIucHJvbW8ge1xuICBiYWNrZ3JvdW5kOiAjYTQyNDJkO1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luOiAzcmVtIGF1dG87XG59XG4ucHJvbW9fY29udGVudCB7XG4gIHBhZGRpbmc6IDJyZW0gMTJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLnByb21vX2NvbnRlbnRfaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLnByb21vX2NvbnRlbnRfaGVhZGVyIC5zcGVjaWFsIHtcbiAgY29sb3I6ICNmY2I3MWM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucHJvbW9fY29udGVudF9wIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnByb21vX2NvbnRlbnRfYnRuIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogN3B4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGNvbG9yOiAjYTQyNDJkO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IGxhcmdlO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XG4gIC5wcm9tbyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAucHJvbW9fY29udGVudCB7XG4gICAgcGFkZGluZzogMnJlbSAwcmVtO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PromoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-promo',
          templateUrl: './promo.component.html',
          styleUrls: ['./promo.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/excerpt/excerpt.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/excerpt/excerpt.component.ts ***!
    \**********************************************/

  /*! exports provided: ExcerptComponent */

  /***/
  function srcAppExcerptExcerptComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExcerptComponent", function () {
      return ExcerptComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../api.service */
    "./src/app/api.service.ts");

    var ExcerptComponent = /*#__PURE__*/function () {
      function ExcerptComponent(route, api) {
        _classCallCheck(this, ExcerptComponent);

        this.route = route;
        this.api = api;
      }

      _createClass(ExcerptComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          var index;
          this.route.params.subscribe(function (params) {
            index = params.id;
          });
          var resp = this.api.getApi();
          this.subscription = resp.subscribe(function (data) {
            _this3.Blog = data[index];
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }]);

      return ExcerptComponent;
    }();

    ExcerptComponent.ɵfac = function ExcerptComponent_Factory(t) {
      return new (t || ExcerptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]));
    };

    ExcerptComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExcerptComponent,
      selectors: [["app-excerpt"]],
      decls: 40,
      vars: 7,
      consts: [[1, "container"], [1, "row"], [1, "col-sm-12", "page_header"], [1, "page_header_link"], ["routerLink", "/", "routerLinkActive", "active"], [1, "col-sm-12", "page_heading"], [1, "page_heading_title"], [1, "col-sm-12"], [1, "page_heading_thumbnails"], [1, "page_heading_thumbnails_socials"], ["src", "../../assets/Group 201.png", "alt", ""], ["src", "../../assets/Group 202.png", "alt", ""], ["src", "../../assets/Group 203.png", "alt", ""], ["src", "../../assets/Group 204.png", "alt", ""], [1, "page_heading_thumbnails_author"], [1, "page_heading_thumbnails_author_profile"], ["src", "../../assets/Ellipse 8.png", "alt", ""], [1, "page_heading_thumbnails_author_name"], [1, "page_content"], [1, "page_content_img"], ["alt", "", 3, "src"], [1, "page_content_paragraph"]],
      template: function ExcerptComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "BACK TO BLOG");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Workflow Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "December 29, 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.Blog.blogName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Blog.authorName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.Blog.blogImg[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.Blog.authorName, " ", ctx.Blog.blogContent[0], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.Blog.blogImg[2], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.Blog.blogContent[1], " ");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: [".page_header[_ngcontent-%COMP%] {\n  margin: 1.5rem auto;\n  display: flex;\n  justify-content: space-between;\n}\n.page_heading_title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n.page_heading_thumbnails[_ngcontent-%COMP%] {\n  margin: 2rem auto;\n  display: flex;\n  justify-content: space-between;\n}\n.page_heading_thumbnails_socials[_ngcontent-%COMP%] {\n  display: flex;\n}\n.page_heading_thumbnails_socials[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n.page_heading_thumbnails_author[_ngcontent-%COMP%] {\n  display: flex;\n}\n.page_heading_thumbnails_author_profile[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n.page_heading_thumbnails_author_name[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: none;\n  font-weight: bold;\n}\n.page_content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n}\n.page_content_img[_ngcontent-%COMP%] {\n  margin: 2rem auto;\n}\n.page_content_paragraph[_ngcontent-%COMP%] {\n  margin: 2rem auto;\n  text-align: justify;\n  font-size: 1.5rem;\n  line-height: 1.5;\n}\n@media only screen and (max-width: 150px) {\n  .page_header[_ngcontent-%COMP%] {\n    margin: 1.5rem auto;\n    display: flex;\n    justify-content: space-between;\n  }\n  .page_heading_title[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .page_heading_thumbnails[_ngcontent-%COMP%] {\n    margin: 2rem auto;\n    display: flex;\n    justify-content: space-between;\n  }\n  .page_heading_thumbnails_socials[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .page_heading_thumbnails_socials[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-right: 1rem;\n  }\n  .page_heading_thumbnails_author[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .page_heading_thumbnails_author_profile[_ngcontent-%COMP%] {\n    margin-right: 1rem;\n  }\n  .page_heading_thumbnails_author_name[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n    font-style: none;\n    font-weight: bold;\n  }\n  .page_content[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n  }\n  .page_content_img[_ngcontent-%COMP%] {\n    margin: 2rem auto;\n  }\n  .page_content_paragraph[_ngcontent-%COMP%] {\n    margin: 2rem auto;\n    text-align: justify;\n    font-size: 1.5rem;\n    line-height: 1.5;\n  }\n}\n@media only screen and (max-width: 800px) {\n  .page_header[_ngcontent-%COMP%] {\n    margin: 1.5rem auto;\n    display: flex;\n    justify-content: space-between;\n  }\n  .page_heading_title[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .page_heading_thumbnails[_ngcontent-%COMP%] {\n    margin: 2rem auto;\n    display: flex;\n    flex-direction: column-reverse;\n    justify-content: space-between;\n  }\n  .page_heading_thumbnails_socials[_ngcontent-%COMP%] {\n    display: flex;\n    margin-bottom: 2rem;\n  }\n  .page_heading_thumbnails_socials[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-right: 1rem;\n  }\n  .page_heading_thumbnails_author[_ngcontent-%COMP%] {\n    display: flex;\n    margin-bottom: 2rem;\n  }\n  .page_heading_thumbnails_author_profile[_ngcontent-%COMP%] {\n    margin-right: 1rem;\n  }\n  .page_heading_thumbnails_author_name[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n    font-style: none;\n    font-weight: bold;\n  }\n  .page_content[_ngcontent-%COMP%] {\n    max-width: 95%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n  }\n  .page_content_img[_ngcontent-%COMP%] {\n    max-width: 95%;\n    margin: 2rem auto;\n  }\n  .page_content_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 95%;\n    max-height: 50vh;\n    margin: auto;\n  }\n  .page_content_paragraph[_ngcontent-%COMP%] {\n    max-width: 95%;\n    margin: 2rem auto;\n    text-align: justify;\n    font-size: 1.5rem;\n    line-height: 1.5;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhjZXJwdC9DOlxcVXNlcnNcXGhha2lnXFxEZXNrdG9wXFxDcm93biBJbnRlcmFjdGl2ZVxcY2lkb2QtYmxvZy9zcmNcXGFwcFxcZXhjZXJwdFxcZXhjZXJwdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZXhjZXJwdC9leGNlcnB0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNEUjtBRE1RO0VBQ0ksaUJBQUE7QUNKWjtBRE9RO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNMWjtBRE1ZO0VBQ0ksYUFBQTtBQ0poQjtBREtnQjtFQUNJLGtCQUFBO0FDSHBCO0FETVk7RUFDSSxhQUFBO0FDSmhCO0FES2dCO0VBQ0ksa0JBQUE7QUNIcEI7QURNb0I7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDSnhCO0FEV0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNUUjtBRFVRO0VBQ0ksaUJBQUE7QUNSWjtBRFdTO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNUYjtBRGVBO0VBR1E7SUFDSSxtQkFBQTtJQUNBLGFBQUE7SUFDQSw4QkFBQTtFQ2RWO0VEbUJVO0lBQ0ksaUJBQUE7RUNqQmQ7RURvQlU7SUFDSSxpQkFBQTtJQUNBLGFBQUE7SUFDQSw4QkFBQTtFQ2xCZDtFRG1CYztJQUNJLGFBQUE7RUNqQmxCO0VEa0JrQjtJQUNJLGtCQUFBO0VDaEJ0QjtFRG1CYztJQUNJLGFBQUE7RUNqQmxCO0VEa0JrQjtJQUNJLGtCQUFBO0VDaEJ0QjtFRG1Cc0I7SUFDSSxnQkFBQTtJQUNBLGlCQUFBO0VDakIxQjtFRHdCTTtJQUNJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7SUFDQSxxQkFBQTtFQ3RCVjtFRHVCVTtJQUNJLGlCQUFBO0VDckJkO0VEd0JXO0lBQ0ksaUJBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RUN0QmY7QUFDRjtBRDZCQTtFQUdRO0lBQ0ksbUJBQUE7SUFDQSxhQUFBO0lBQ0EsOEJBQUE7RUM3QlY7RURrQ1U7SUFDSSxpQkFBQTtFQ2hDZDtFRG1DVTtJQUNJLGlCQUFBO0lBQ0EsYUFBQTtJQUNBLDhCQUFBO0lBQ0EsOEJBQUE7RUNqQ2Q7RURrQ2M7SUFDSSxhQUFBO0lBQ0EsbUJBQUE7RUNoQ2xCO0VEaUNrQjtJQUNJLGtCQUFBO0VDL0J0QjtFRGtDYztJQUNJLGFBQUE7SUFDQSxtQkFBQTtFQ2hDbEI7RURpQ2tCO0lBQ0ksa0JBQUE7RUMvQnRCO0VEa0NzQjtJQUNJLGdCQUFBO0lBQ0EsaUJBQUE7RUNoQzFCO0VEdUNNO0lBQ0ksY0FBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7SUFDQSxxQkFBQTtFQ3JDVjtFRHNDVTtJQUNJLGNBQUE7SUFDQSxpQkFBQTtFQ3BDZDtFRHFDYztJQUNJLGNBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7RUNuQ2xCO0VEdUNXO0lBQ0ksY0FBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0VDckNmO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9leGNlcnB0L2V4Y2VycHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZSB7XHJcblxyXG4gICAgJl9oZWFkZXIge1xyXG4gICAgICAgIG1hcmdpbjogMS41cmVtIGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcblxyXG4gICAgJl9oZWFkaW5nIHtcclxuXHJcbiAgICAgICAgJl90aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJl90aHVtYm5haWxzIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAycmVtIGF1dG87XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgJl9zb2NpYWxzIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX2F1dGhvciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgJl9wcm9maWxlIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmX25hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIGVte1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgJl9pbWcge1xyXG4gICAgICAgICAgICBtYXJnaW46IDJyZW0gYXV0bztcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgJl9wYXJhZ3JhcGgge1xyXG4gICAgICAgICAgICAgbWFyZ2luOiAycmVtIGF1dG87XHJcbiAgICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1MHB4KSB7XHJcbiAgICAucGFnZSB7XHJcblxyXG4gICAgICAgICZfaGVhZGVyIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAxLjVyZW0gYXV0bztcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICZfaGVhZGluZyB7XHJcbiAgICBcclxuICAgICAgICAgICAgJl90aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICZfdGh1bWJuYWlscyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDJyZW0gYXV0bztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAmX3NvY2lhbHMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZfYXV0aG9yIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICZfcHJvZmlsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJl9uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAmX2NvbnRlbnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAmX2ltZyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDJyZW0gYXV0bztcclxuICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgJl9wYXJhZ3JhcGgge1xyXG4gICAgICAgICAgICAgICAgIG1hcmdpbjogMnJlbSBhdXRvO1xyXG4gICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLnBhZ2Uge1xyXG5cclxuICAgICAgICAmX2hlYWRlciB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMS41cmVtIGF1dG87XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAmX2hlYWRpbmcge1xyXG4gICAgXHJcbiAgICAgICAgICAgICZfdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAmX3RodW1ibmFpbHMge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAycmVtIGF1dG87XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgJl9zb2NpYWxzIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZfYXV0aG9yIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgJl9wcm9maWxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmX25hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICZfY29udGVudCB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogOTUlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAmX2ltZyB7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDk1JTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMnJlbSBhdXRvO1xyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDk1JTtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MHZoO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgJl9wYXJhZ3JhcGgge1xyXG4gICAgICAgICAgICAgICAgIG1heC13aWR0aDogOTUlO1xyXG4gICAgICAgICAgICAgICAgIG1hcmdpbjogMnJlbSBhdXRvO1xyXG4gICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5wYWdlX2hlYWRlciB7XG4gIG1hcmdpbjogMS41cmVtIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5wYWdlX2hlYWRpbmdfdGl0bGUge1xuICBmb250LXNpemU6IDIuNXJlbTtcbn1cbi5wYWdlX2hlYWRpbmdfdGh1bWJuYWlscyB7XG4gIG1hcmdpbjogMnJlbSBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ucGFnZV9oZWFkaW5nX3RodW1ibmFpbHNfc29jaWFscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucGFnZV9oZWFkaW5nX3RodW1ibmFpbHNfc29jaWFscyBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG4ucGFnZV9oZWFkaW5nX3RodW1ibmFpbHNfYXV0aG9yIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5wYWdlX2hlYWRpbmdfdGh1bWJuYWlsc19hdXRob3JfcHJvZmlsZSB7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cbi5wYWdlX2hlYWRpbmdfdGh1bWJuYWlsc19hdXRob3JfbmFtZSBlbSB7XG4gIGZvbnQtc3R5bGU6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnBhZ2VfY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG4ucGFnZV9jb250ZW50X2ltZyB7XG4gIG1hcmdpbjogMnJlbSBhdXRvO1xufVxuLnBhZ2VfY29udGVudF9wYXJhZ3JhcGgge1xuICBtYXJnaW46IDJyZW0gYXV0bztcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTUwcHgpIHtcbiAgLnBhZ2VfaGVhZGVyIHtcbiAgICBtYXJnaW46IDEuNXJlbSBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIC5wYWdlX2hlYWRpbmdfdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG4gIC5wYWdlX2hlYWRpbmdfdGh1bWJuYWlscyB7XG4gICAgbWFyZ2luOiAycmVtIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgLnBhZ2VfaGVhZGluZ190aHVtYm5haWxzX3NvY2lhbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLnBhZ2VfaGVhZGluZ190aHVtYm5haWxzX3NvY2lhbHMgaW1nIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIH1cbiAgLnBhZ2VfaGVhZGluZ190aHVtYm5haWxzX2F1dGhvciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAucGFnZV9oZWFkaW5nX3RodW1ibmFpbHNfYXV0aG9yX3Byb2ZpbGUge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgfVxuICAucGFnZV9oZWFkaW5nX3RodW1ibmFpbHNfYXV0aG9yX25hbWUgZW0ge1xuICAgIGZvbnQtc3R5bGU6IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLnBhZ2VfY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB9XG4gIC5wYWdlX2NvbnRlbnRfaW1nIHtcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcbiAgfVxuICAucGFnZV9jb250ZW50X3BhcmFncmFwaCB7XG4gICAgbWFyZ2luOiAycmVtIGF1dG87XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5wYWdlX2hlYWRlciB7XG4gICAgbWFyZ2luOiAxLjVyZW0gYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuICAucGFnZV9oZWFkaW5nX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuICAucGFnZV9oZWFkaW5nX3RodW1ibmFpbHMge1xuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuICAucGFnZV9oZWFkaW5nX3RodW1ibmFpbHNfc29jaWFscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB9XG4gIC5wYWdlX2hlYWRpbmdfdGh1bWJuYWlsc19zb2NpYWxzIGltZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICB9XG4gIC5wYWdlX2hlYWRpbmdfdGh1bWJuYWlsc19hdXRob3Ige1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxuICAucGFnZV9oZWFkaW5nX3RodW1ibmFpbHNfYXV0aG9yX3Byb2ZpbGUge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgfVxuICAucGFnZV9oZWFkaW5nX3RodW1ibmFpbHNfYXV0aG9yX25hbWUgZW0ge1xuICAgIGZvbnQtc3R5bGU6IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLnBhZ2VfY29udGVudCB7XG4gICAgbWF4LXdpZHRoOiA5NSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB9XG4gIC5wYWdlX2NvbnRlbnRfaW1nIHtcbiAgICBtYXgtd2lkdGg6IDk1JTtcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcbiAgfVxuICAucGFnZV9jb250ZW50X2ltZyBpbWcge1xuICAgIG1heC13aWR0aDogOTUlO1xuICAgIG1heC1oZWlnaHQ6IDUwdmg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG4gIC5wYWdlX2NvbnRlbnRfcGFyYWdyYXBoIHtcbiAgICBtYXgtd2lkdGg6IDk1JTtcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExcerptComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-excerpt',
          templateUrl: './excerpt.component.html',
          styleUrls: ['./excerpt.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/hero/hero.component.ts":
  /*!****************************************!*\
    !*** ./src/app/hero/hero.component.ts ***!
    \****************************************/

  /*! exports provided: HeroComponent */

  /***/
  function srcAppHeroHeroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeroComponent", function () {
      return HeroComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeroComponent = /*#__PURE__*/function () {
      function HeroComponent() {
        _classCallCheck(this, HeroComponent);
      }

      _createClass(HeroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeroComponent;
    }();

    HeroComponent.ɵfac = function HeroComponent_Factory(t) {
      return new (t || HeroComponent)();
    };

    HeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeroComponent,
      selectors: [["app-hero"]],
      decls: 9,
      vars: 0,
      consts: [[1, "showcase"], [1, ""], [1, "container"], [1, "col-lg-8", "m-auto", "showcase_content"], [1, "showcase_content_paragraph"], ["type", "text", "placeholder", "Enter your email address", 1, "showcase_content_input"], [1, "showcase_content_button", "btn"]],
      template: function HeroComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Get the Knowledge and inspiration you need to expand your business, straight to your inbox.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "SUSCRIBE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".showcase[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  max-height: 200vh;\n  background: url('Base.png') center center/cover;\n}\n.showcase_content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-column: 1fr;\n  grid-gap: 1rem;\n}\n.showcase_content_paragraph[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  color: #ffffff;\n  max-width: 50rem;\n  font-weight: bold;\n  font-size: 1.5rem;\n}\n.showcase_content_input[_ngcontent-%COMP%] {\n  width: 50%;\n  border: 1px solid transparent;\n  border-radius: 3px;\n  padding: 0.7rem;\n}\n.showcase_content_button[_ngcontent-%COMP%] {\n  background: #2f2c7d;\n  color: #ffffff;\n  width: 30%;\n  border-radius: 25px;\n  margin-bottom: 3rem;\n}\n@media only screen and (max-width: 250px) {\n  .showcase[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    background-color: blue;\n    justify-content: center;\n    align-content: center;\n    max-height: 200vh;\n  }\n  .showcase_content[_ngcontent-%COMP%] {\n    margin-top: 2rem;\n    width: 95%;\n    text-align: center;\n  }\n  .showcase_content_input[_ngcontent-%COMP%] {\n    width: 95%;\n    text-align: center;\n  }\n  .showcase_content_button[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n}\n@media only screen and (min-width: 251px) and (max-width: 470px) {\n  .showcase[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-content: center;\n    height: 100vh;\n  }\n  .showcase_content[_ngcontent-%COMP%] {\n    width: 95%;\n    text-align: center;\n  }\n  .showcase_content_paragraph[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  .showcase_content_input[_ngcontent-%COMP%] {\n    width: 95%;\n    text-align: center;\n  }\n  .showcase_content_button[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n}\n@media only screen and (max-width: 900px) and (orientation: landscape) {\n  .showcase[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-content: center;\n    max-height: 120vh;\n  }\n  .showcase_content[_ngcontent-%COMP%] {\n    width: 95%;\n    text-align: center;\n  }\n  .showcase_content_paragraph[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .showcase_content_input[_ngcontent-%COMP%] {\n    width: 95%;\n    text-align: center;\n  }\n  .showcase_content_button[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyby9DOlxcVXNlcnNcXGhha2lnXFxEZXNrdG9wXFxDcm93biBJbnRlcmFjdGl2ZVxcY2lkb2QtYmxvZy9zcmNcXGFwcFxcaGVyb1xcaGVyby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVyby9oZXJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNKLGlCQUFBO0VBQ0EsK0NBQUE7QUNDSjtBREFJO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0VSO0FERFE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNHWjtBREFRO0VBQ0ksVUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRVo7QURDUTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDQ1o7QURRQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtJQUNBLHFCQUFBO0lBQ0EsaUJBQUE7RUNMTjtFRE1NO0lBQ0ksZ0JBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7RUNKVjtFREtVO0lBQ0ksVUFBQTtJQUNBLGtCQUFBO0VDSGQ7RURNVTtJQUNJLFVBQUE7RUNKZDtBQUNGO0FEUUE7RUFDSTtJQUNJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EscUJBQUE7SUFDQSxhQUFBO0VDTk47RURPTTtJQUNJLFVBQUE7SUFDQSxrQkFBQTtFQ0xWO0VETVU7SUFDSSxrQkFBQTtFQ0pkO0VETVU7SUFDSSxVQUFBO0lBQ0Esa0JBQUE7RUNKZDtFRE9VO0lBQ0ksVUFBQTtFQ0xkO0FBQ0Y7QURpQkE7RUFDSTtJQUNJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EscUJBQUE7SUFDQSxpQkFBQTtFQ2ZOO0VEZ0JNO0lBQ0ksVUFBQTtJQUNBLGtCQUFBO0VDZFY7RURlVTtJQUNJLGVBQUE7RUNiZDtFRGVVO0lBQ0ksVUFBQTtJQUNBLGtCQUFBO0VDYmQ7RURnQlU7SUFDSSxVQUFBO0VDZGQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hlcm8vaGVyby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgbWF4LWhlaWdodDogMjAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9CYXNlLnBuZycpIGNlbnRlciBjZW50ZXIvY292ZXI7XHJcbiAgICAmX2NvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDFmcjtcclxuICAgICAgICBncmlkLWdhcDogMXJlbTsgICBcclxuICAgICAgICAmX3BhcmFncmFwaCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwcmVtIDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJl9pbnB1dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuN3JlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfYnV0dG9uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzJmMmM3ZDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbi8vIHNtYWxsIHNjcmVlbnMgbWVkaWEgcXVlcnlcclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjUwcHgpIHtcclxuICAgIC5zaG93Y2FzZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDIwMHZoO1xyXG4gICAgICAgICZfY29udGVudCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgJl9pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmX2J1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjUxcHgpIGFuZCAobWF4LXdpZHRoOiA0NzBweCkge1xyXG4gICAgLnNob3djYXNlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgJl9jb250ZW50IHtcclxuICAgICAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAmX3BhcmFncmFwaCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNzVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmX2J1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ3MXB4KSBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIC5zaG93Y2FzZSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgIC5zaG93Y2FzZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMjB2aDtcclxuICAgICAgICAmX2NvbnRlbnQge1xyXG4gICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICZfcGFyYWdyYXBoIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX2lucHV0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICZfYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiIsIi5zaG93Y2FzZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIG1heC1oZWlnaHQ6IDIwMHZoO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvQmFzZS5wbmdcIikgY2VudGVyIGNlbnRlci9jb3Zlcjtcbn1cbi5zaG93Y2FzZV9jb250ZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1jb2x1bW46IDFmcjtcbiAgZ3JpZC1nYXA6IDFyZW07XG59XG4uc2hvd2Nhc2VfY29udGVudF9wYXJhZ3JhcGgge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWF4LXdpZHRoOiA1MHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuLnNob3djYXNlX2NvbnRlbnRfaW5wdXQge1xuICB3aWR0aDogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAwLjdyZW07XG59XG4uc2hvd2Nhc2VfY29udGVudF9idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMmYyYzdkO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDMwJTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNTBweCkge1xuICAuc2hvd2Nhc2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXgtaGVpZ2h0OiAyMDB2aDtcbiAgfVxuICAuc2hvd2Nhc2VfY29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICB3aWR0aDogOTUlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuc2hvd2Nhc2VfY29udGVudF9pbnB1dCB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLnNob3djYXNlX2NvbnRlbnRfYnV0dG9uIHtcbiAgICB3aWR0aDogOTUlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDI1MXB4KSBhbmQgKG1heC13aWR0aDogNDcwcHgpIHtcbiAgLnNob3djYXNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cbiAgLnNob3djYXNlX2NvbnRlbnQge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5zaG93Y2FzZV9jb250ZW50X3BhcmFncmFwaCB7XG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICB9XG4gIC5zaG93Y2FzZV9jb250ZW50X2lucHV0IHtcbiAgICB3aWR0aDogOTUlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuc2hvd2Nhc2VfY29udGVudF9idXR0b24ge1xuICAgIHdpZHRoOiA5NSU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAuc2hvd2Nhc2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgbWF4LWhlaWdodDogMTIwdmg7XG4gIH1cbiAgLnNob3djYXNlX2NvbnRlbnQge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5zaG93Y2FzZV9jb250ZW50X3BhcmFncmFwaCB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG4gIC5zaG93Y2FzZV9jb250ZW50X2lucHV0IHtcbiAgICB3aWR0aDogOTUlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuc2hvd2Nhc2VfY29udGVudF9idXR0b24ge1xuICAgIHdpZHRoOiA5NSU7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-hero',
          templateUrl: './hero.component.html',
          styleUrls: ['./hero.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onHamburger",
        value: function onHamburger() {
          var x = document.getElementById('navMenu');

          if (x.className === 'nav') {
            x.className += ' responsive';
          } else {
            x.className = 'nav';
          }
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 31,
      vars: 0,
      consts: [["id", "navbar", 1, "py-3", "navbar"], [1, "flex"], ["href", "#", 1, "navbar-brand"], ["src", "../../assets/CICOD.png", "id", "navbar_logo", "alt", ""], ["href", "javascript:void(0)", 1, "hamburger", 3, "click"], [1, "fas", "fa-bars", "fa-2x"], ["id", "navMenu", 1, "nav"], [1, "nav-item"], ["href", "#", 1, "nav-link", "link-color"], ["href", "#", "id", "navbar-button", 1, "nav-link", "link-color"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_4_listener() {
            return ctx.onHamburger();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Pricing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Affiliates");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Industry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Support");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Get Started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".link-color[_ngcontent-%COMP%] {\n  color: #564D4D;\n}\n.link-color[_ngcontent-%COMP%]:hover {\n  color: #a7272d;\n}\n.link-color[_ngcontent-%COMP%]:active {\n  color: #a7272d;\n}\n#navbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n}\n#navbar[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n#navbar[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%] {\n  display: none;\n}\n#navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  align-items: center;\n}\n#navbar_logo[_ngcontent-%COMP%] {\n  height: 3rem;\n}\n#navbar-button[_ngcontent-%COMP%] {\n  background: #a7272d;\n  border: 1px transparent;\n  border-radius: 50px;\n  padding: 0.25rem 0.75rem;\n  color: #ffffff;\n}\n@media only screen and (max-width: 900px) {\n  #navbar[_ngcontent-%COMP%] {\n    display: block;\n  }\n  #navbar[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%] {\n    color: #666;\n    text-decoration: none;\n  }\n  #navbar[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]:hover {\n    color: #a7272d;\n  }\n  #navbar-button[_ngcontent-%COMP%] {\n    border-radius: 0px;\n    background-color: #ffffff;\n    color: #666;\n  }\n  #navbar[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%] {\n    display: block;\n  }\n  #navbar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    display: none;\n    flex-direction: column;\n  }\n  #navbar[_ngcontent-%COMP%]   .nav.responsive[_ngcontent-%COMP%] {\n    display: block;\n  }\n  #navbar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: block;\n    border-bottom: 1px dotted #ddd;\n    margin: 1rem;\n    padding: 2rem auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0M6XFxVc2Vyc1xcaGFraWdcXERlc2t0b3BcXENyb3duIEludGVyYWN0aXZlXFxjaWRvZC1ibG9nL3NyY1xcYXBwXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjtBREFJO0VBQVUsY0FBQTtBQ0dkO0FERkk7RUFBVyxjQUFBO0FDS2Y7QURGQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQ0tBO0FESEE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0tKO0FERkE7RUFDSSxhQUFBO0FDSUo7QUREQTtFQUNJLG1CQUFBO0FDR0o7QURBSTtFQUNJLFlBQUE7QUNFUjtBRENJO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FDQ1I7QURHQTtFQUNBO0lBa0JJLGNBQUE7RUNqQkY7RURDRTtJQUNJLFdBQUE7SUFDQSxxQkFBQTtFQ0NOO0VEQ007SUFDSSxjQUFBO0VDQ1Y7RURJRTtJQUNJLGtCQUFBO0lBQ0EseUJBQUE7SUFDQSxXQUFBO0VDRk47RURNSTtJQUNFLGNBQUE7RUNKTjtFRE9FO0lBQ0ksZ0JBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7RUNMTjtFRE9HO0lBQ0ksY0FBQTtFQ0xQO0VEUU07SUFDSSxjQUFBO0lBQ0EsOEJBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUNOVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW5rLWNvbG9yIHtcclxuICAgIGNvbG9yOiAjNTY0RDREO1xyXG4gICAgJjpob3ZlciB7IGNvbG9yOiAjYTcyNzJkO31cclxuICAgICY6YWN0aXZlIHsgY29sb3I6ICNhNzI3MmQgfVxyXG59XHJcblxyXG4jbmF2YmFyIHtcclxuZGlzcGxheTogZmxleDtcclxuYWxpZ24tY29udGVudDogY2VudGVyO1xyXG5cclxuLmZsZXgge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oYW1idXJnZXJ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4gICAgJl9sb2dve1xyXG4gICAgICAgIGhlaWdodDogM3JlbTtcclxuICAgIH1cclxuXHJcbiAgICAmLWJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2E3MjcyZDtcclxuICAgICAgICBib3JkZXI6IDFweCB0cmFuc3BhcmVudCA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiAgYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiNuYXZiYXIge1xyXG5cclxuICAgIC5oYW1idXJnZXIge1xyXG4gICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYTcyNzJkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgJi1idXR0b257XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIC5oYW1idXJnZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXZ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICYucmVzcG9uc2l2ZSB7XHJcbiAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICB9XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjZGRkO1xyXG4gICAgICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gYXV0bzsgICBcclxuICAgICAgICAgICAgIH1cclxuICAgIH1cclxufVxyXG4gIFxyXG5cclxufVxyXG4iLCIubGluay1jb2xvciB7XG4gIGNvbG9yOiAjNTY0RDREO1xufVxuLmxpbmstY29sb3I6aG92ZXIge1xuICBjb2xvcjogI2E3MjcyZDtcbn1cbi5saW5rLWNvbG9yOmFjdGl2ZSB7XG4gIGNvbG9yOiAjYTcyNzJkO1xufVxuXG4jbmF2YmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuI25hdmJhciAuZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNuYXZiYXIgLmhhbWJ1cmdlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4jbmF2YmFyIHVsIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNuYXZiYXJfbG9nbyB7XG4gIGhlaWdodDogM3JlbTtcbn1cbiNuYXZiYXItYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogI2E3MjcyZDtcbiAgYm9yZGVyOiAxcHggdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgI25hdmJhciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgI25hdmJhciAuaGFtYnVyZ2VyIHtcbiAgICBjb2xvcjogIzY2NjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgI25hdmJhciAuaGFtYnVyZ2VyOmhvdmVyIHtcbiAgICBjb2xvcjogI2E3MjcyZDtcbiAgfVxuICAjbmF2YmFyLWJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgY29sb3I6ICM2NjY7XG4gIH1cbiAgI25hdmJhciAuaGFtYnVyZ2VyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAjbmF2YmFyIC5uYXYge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gICNuYXZiYXIgLm5hdi5yZXNwb25zaXZlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAjbmF2YmFyIC5uYXYgbGkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgI2RkZDtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgcGFkZGluZzogMnJlbSBhdXRvO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: 'http://localhost:3000/Blogs'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\hakig\Desktop\Crown Interactive\cidod-blog\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map