System.register(['angular2/platform/browser', 'angular2/core', 'src/comps/entry/EntryPanel', 'src/comps/appmanager/AppManager', 'src/services/CommBroker', "src/comps/filemenu/Filemenu", "src/comps/filemenu/FilemenuItem", "./comps/logo/Logo", "./styles/RefreshTheme", "src/Conts", "./styles/StyleService", 'angular2/router', "angular2/router", "angular2/http", "rxjs/Observable", 'rxjs/add/operator/map', 'rxjs/add/operator/debounceTime', 'rxjs/add/observable/fromEvent'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, EntryPanel_1, AppManager_1, CommBroker_1, Filemenu_1, FilemenuItem_1, Logo_1, RefreshTheme_1, Conts_1, StyleService_1, router_1, router_2, router_3, http_1, Observable_1;
    var Welcome, ComponentHelper, App;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (EntryPanel_1_1) {
                EntryPanel_1 = EntryPanel_1_1;
            },
            function (AppManager_1_1) {
                AppManager_1 = AppManager_1_1;
            },
            function (CommBroker_1_1) {
                CommBroker_1 = CommBroker_1_1;
            },
            function (Filemenu_1_1) {
                Filemenu_1 = Filemenu_1_1;
            },
            function (FilemenuItem_1_1) {
                FilemenuItem_1 = FilemenuItem_1_1;
            },
            function (Logo_1_1) {
                Logo_1 = Logo_1_1;
            },
            function (RefreshTheme_1_1) {
                RefreshTheme_1 = RefreshTheme_1_1;
            },
            function (Conts_1_1) {
                Conts_1 = Conts_1_1;
            },
            function (StyleService_1_1) {
                StyleService_1 = StyleService_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (router_3_1) {
                router_3 = router_3_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {}],
        execute: function() {
            Welcome = (function () {
                function Welcome(params) {
                    this.someId = 'App1' + Math.random();
                }
                Welcome = __decorate([
                    core_1.Component({
                        styles: ["\n        #routerLinks {\n            padding: 20px;\n        };\n    "],
                        template: "\n                <div id=\"routerLinks\">\n                    <h4>Direct router shortcut links:</h4>\n                    <a [routerLink]=\"['/Login', 'Login']\">To Login screen</a><br/>\n                    <a [routerLink]=\"['/Login', {id: 'Sean-Levy'}, 'Login']\">To Login screen with demo user args</a><br/>\n                    <a [routerLink]=\"['/ForgotPass', 'ForgotPass']\">To Forgot Password screen</a><br/>\n                    <a [routerLink]=\"['/AppManager']\">To App manager</a><br/>\n                    <a [routerLink]=\"['/App1']\">To App1 (Lazy loading async)</a><br/>\n                    <a [routerLink]=\"['/App2']\">To App2 (Lazy loading async)</a><br/>\n                    <br/><small>I am Welcome component</small>\n                </div>\n                ",
                        directives: [router_1.ROUTER_DIRECTIVES, router_2.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [router_2.RouteParams])
                ], Welcome);
                return Welcome;
            })();
            exports_1("Welcome", Welcome);
            ComponentHelper = (function () {
                function ComponentHelper() {
                }
                ComponentHelper.LoadComponentAsync = function (name, path) {
                    return System.import(path).then(function (c) { return c[name]; });
                };
                return ComponentHelper;
            })();
            App = (function (_super) {
                __extends(App, _super);
                function App(commBroker, styleService) {
                    var _this = this;
                    _super.call(this);
                    this.m_styleService = styleService;
                    this.m_commBroker = commBroker;
                    this.m_commBroker.setService(Conts_1.Consts.Services().App, this);
                    Observable_1.Observable.fromEvent(window, 'resize').debounceTime(250).subscribe(function () {
                        _this.appResized();
                    });
                    this.showTypedObjectArg({
                        styles1: ['foo', 'bar'],
                        styles2: [1, 2]
                    });
                }
                App.prototype.showTypedObjectArg = function (_a) {
                    var _b = _a === void 0 ? {} : _a, styles1 = _b.styles1, styles2 = _b.styles2;
                };
                App.prototype.ngAfterContentInit = function () {
                    this.appResized();
                };
                App.prototype.appResized = function () {
                    var appHeight = document.body.clientHeight;
                    var appWidth = document.body.clientWidth;
                    jQuery(Conts_1.Consts.Elems().APP_NAVIGATOR_EVER).height(appHeight - 115);
                    jQuery(Conts_1.Consts.Elems().APP_NAVIGATOR_WASP).height(appHeight - 115);
                    jQuery(Conts_1.Consts.Clas().CLASS_APP_HEIGHT).height(appHeight - 220);
                    jQuery('#mainPanelWrap').height(appHeight - 115);
                    jQuery('#propPanel').height(appHeight - 130);
                    this.m_commBroker.setValue(Conts_1.Consts.Values().APP_SIZE, { height: appHeight, width: appWidth });
                    this.m_commBroker.fire({
                        fromInstance: self,
                        event: Conts_1.Consts.Events().WIN_SIZED,
                        context: '',
                        message: { height: appHeight, width: appWidth }
                    });
                };
                App = __decorate([
                    core_1.Component({
                        encapsulation: core_1.ViewEncapsulation.Emulated,
                        providers: [StyleService_1.StyleService],
                        selector: 'app',
                        templateUrl: './src/App.html',
                        directives: [router_1.ROUTER_DIRECTIVES, router_2.RouterLink, Filemenu_1.Filemenu, FilemenuItem_1.FilemenuItem, Logo_1.Logo]
                    }),
                    router_2.RouteConfig([
                        { path: "/", name: "root", redirectTo: ["/EntryPanelNoId/Login"], useAsDefault: true },
                        { path: '/AppManager', component: AppManager_1.AppManager, as: 'AppManager' },
                        { path: '/Welcome', component: Welcome, as: 'Welcome' },
                        { path: '/EntryPanelNoId/...', component: EntryPanel_1.EntryPanel, as: 'EntryPanelNoId' },
                        { path: '/EntryPanel/:id/...', component: EntryPanel_1.EntryPanel, as: 'EntryPanel' },
                        { path: '/Login/...', component: EntryPanel_1.EntryPanel, as: 'Login' },
                        { path: '/ForgotPass/...', component: EntryPanel_1.EntryPanel, as: 'ForgotPass' },
                        new router_3.AsyncRoute({
                            path: '/App1',
                            loader: function () { return ComponentHelper.LoadComponentAsync('App1', 'src/comps/app1/App1'); },
                            name: 'App1'
                        }),
                        new router_3.AsyncRoute({
                            path: '/App2',
                            loader: function () { return ComponentHelper.LoadComponentAsync('App2', 'src/comps/app2/App2'); },
                            name: 'App2'
                        })
                    ]), 
                    __metadata('design:paramtypes', [CommBroker_1.CommBroker, StyleService_1.StyleService])
                ], App);
                return App;
            })(RefreshTheme_1.RefreshTheme);
            exports_1("App", App);
            browser_1.bootstrap(App, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS,
                core_1.provide(CommBroker_1.CommBroker, { useClass: CommBroker_1.CommBroker }),
                core_1.provide(Conts_1.Consts, { useClass: Conts_1.Consts }),
                core_1.provide(router_2.LocationStrategy, { useClass: router_2.HashLocationStrategy })]);
        }
    }
});
//# sourceMappingURL=App.js.map