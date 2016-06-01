System.register(["zone.js/dist/zone", "zone.js/dist/long-stack-trace-zone", "reflect-metadata", "@angular/router", "@angular/platform-browser-dynamic", "@angular/core", "jspm_packages/github/twbs/bootstrap@3.3.6", "twbs/bootstrap/dist/css/bootstrap.css!", "./styles/style.css!", "./pipes/CharCount", "./services/AuthService", "./services/AppInjService", "@angular/http", "../src/comps/app1/App1", "../src/comps/app2/App2", "../src/comps/app3/App3", "../src/comps/entry/EntryPanel", "../src/comps/appmanager/AppManager", "../src/services/CommBroker", "../src/comps/filemenu/Filemenu", "../src/comps/filemenu/FilemenuItem", "./comps/logo/Logo", "./comps/footer/Footer", "../src/Conts", "./styles/StyleService", "@angular/common", "angular2-redux-util", "./Lib", "rxjs/Observable", "rxjs/add/operator/map", "rxjs/add/operator/debounceTime", "rxjs/add/observable/fromEvent", "./comps/app3/starwars/reducers/parts-reducer", "./comps/app3/starwars/reducers/cart-reducer", "./comps/app3/starwars/reducers/films-reducer", "./comps/app3/starwars/reducers/users-reducer", "./reducers/NotifyReducer", "./reducers/AppdbReducer", "./comps/app1/todos/reducers/TodoReducer", "./actions/AppdbAction", "./comps/welcome/Welcome"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var router_1, platform_browser_dynamic_1, core_1, CharCount_1, AuthService_1, AppInjService_1, http_1, App1_1, App2_1, App3_1, EntryPanel_1, AppManager_1, CommBroker_1, Filemenu_1, FilemenuItem_1, Logo_1, Footer_1, Conts_1, StyleService_1, common_1, angular2_redux_util_1, Lib_1, Observable_1, parts_reducer_1, cart_reducer_1, films_reducer_1, users_reducer_1, NotifyReducer_1, AppdbReducer_1, TodoReducer_1, AppdbAction_1, Welcome_1;
    var App, modules;
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_4) {},
            function (_5) {},
            function (_6) {},
            function (CharCount_1_1) {
                CharCount_1 = CharCount_1_1;
            },
            function (AuthService_1_1) {
                AuthService_1 = AuthService_1_1;
            },
            function (AppInjService_1_1) {
                AppInjService_1 = AppInjService_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (App1_1_1) {
                App1_1 = App1_1_1;
            },
            function (App2_1_1) {
                App2_1 = App2_1_1;
            },
            function (App3_1_1) {
                App3_1 = App3_1_1;
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
            function (Footer_1_1) {
                Footer_1 = Footer_1_1;
            },
            function (Conts_1_1) {
                Conts_1 = Conts_1_1;
            },
            function (StyleService_1_1) {
                StyleService_1 = StyleService_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (angular2_redux_util_1_1) {
                angular2_redux_util_1 = angular2_redux_util_1_1;
            },
            function (Lib_1_1) {
                Lib_1 = Lib_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_7) {},
            function (_8) {},
            function (_9) {},
            function (parts_reducer_1_1) {
                parts_reducer_1 = parts_reducer_1_1;
            },
            function (cart_reducer_1_1) {
                cart_reducer_1 = cart_reducer_1_1;
            },
            function (films_reducer_1_1) {
                films_reducer_1 = films_reducer_1_1;
            },
            function (users_reducer_1_1) {
                users_reducer_1 = users_reducer_1_1;
            },
            function (NotifyReducer_1_1) {
                NotifyReducer_1 = NotifyReducer_1_1;
            },
            function (AppdbReducer_1_1) {
                AppdbReducer_1 = AppdbReducer_1_1;
            },
            function (TodoReducer_1_1) {
                TodoReducer_1 = TodoReducer_1_1;
            },
            function (AppdbAction_1_1) {
                AppdbAction_1 = AppdbAction_1_1;
            },
            function (Welcome_1_1) {
                Welcome_1 = Welcome_1_1;
            }],
        execute: function() {
            App = (function () {
                function App(appStore, commBroker, styleService, appdbAction) {
                    var _this = this;
                    this.appStore = appStore;
                    this.commBroker = commBroker;
                    this.appdbAction = appdbAction;
                    appStore.dispatch(appdbAction.appStartTime());
                    this.m_styleService = styleService;
                    this.commBroker.setService(Conts_1.Consts.Services().App, this);
                    Observable_1.Observable.fromEvent(window, 'resize').debounceTime(250).subscribe(function () {
                        _this.appResized();
                    });
                }
                App.prototype.appResized = function () {
                    var appHeight = document.body.clientHeight;
                    var appWidth = document.body.clientWidth;
                    jQuery(Conts_1.Consts.Elems().APP_NAVIGATOR_EVER).height(appHeight - 115);
                    jQuery(Conts_1.Consts.Elems().APP_NAVIGATOR_WASP).height(appHeight - 115);
                    jQuery(Conts_1.Consts.Clas().CLASS_APP_HEIGHT).height(appHeight - 420);
                    jQuery('#mainPanelWrap').height(appHeight - 115);
                    jQuery('#propPanel').height(appHeight - 130);
                    this.commBroker.setValue(Conts_1.Consts.Values().APP_SIZE, { height: appHeight, width: appWidth });
                    this.commBroker.fire({
                        fromInstance: self,
                        event: Conts_1.Consts.Events().WIN_SIZED,
                        context: '',
                        message: { height: appHeight, width: appWidth }
                    });
                };
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        encapsulation: core_1.ViewEncapsulation.Emulated,
                        providers: [StyleService_1.StyleService, AppdbAction_1.AppdbAction],
                        templateUrl: '/src/App.html',
                        directives: [router_1.ROUTER_DIRECTIVES, Filemenu_1.Filemenu, FilemenuItem_1.FilemenuItem, Logo_1.Logo, Footer_1.Footer]
                    }),
                    router_1.Routes([
                        { path: '/', component: EntryPanel_1.EntryPanel },
                        { path: '/AppManager', component: AppManager_1.AppManager },
                        { path: '/Welcome', component: Welcome_1.Welcome },
                        { path: '/EntryPanelNoId', component: EntryPanel_1.EntryPanel },
                        { path: '/EntryPanel/:id', component: EntryPanel_1.EntryPanel },
                        { path: '/Login', component: EntryPanel_1.EntryPanel },
                        { path: '/ForgotPass', component: EntryPanel_1.EntryPanel },
                        { path: '/App1', component: App1_1.App1 },
                        { path: '/App2', component: App2_1.App2 },
                        { path: '/App3', component: App3_1.App3 }
                    ]), 
                    __metadata('design:paramtypes', [angular2_redux_util_1.AppStore, CommBroker_1.CommBroker, StyleService_1.StyleService, AppdbAction_1.AppdbAction])
                ], App);
                return App;
            }());
            exports_1("App", App);
            modules = [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, http_1.JSONP_PROVIDERS,
                core_1.provide(angular2_redux_util_1.AppStore, { useFactory: Lib_1.Lib.StoreFactory({ notify: NotifyReducer_1.default, appdb: AppdbReducer_1.default, parts: parts_reducer_1.default, cart: cart_reducer_1.default, films: films_reducer_1.default, users: users_reducer_1.default, todos: TodoReducer_1.todos }) }),
                core_1.provide(CommBroker_1.CommBroker, { useClass: CommBroker_1.CommBroker }),
                core_1.provide(AuthService_1.AuthService, { useClass: AuthService_1.AuthService }),
                core_1.provide(core_1.PLATFORM_PIPES, { useValue: CharCount_1.CharCount, multi: true }),
                core_1.provide(Conts_1.Consts, { useClass: Conts_1.Consts }),
                core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })];
            platform_browser_dynamic_1.bootstrap(App, modules).then(function (appRef) {
                AppInjService_1.appInjService(appRef.injector);
            });
            window['hr'] && window['hr'].on('change', function (fileName) {
                if (fileName.indexOf('html') !== -1) {
                    var newBody = document.createElement('body');
                    newBody.appendChild(document.createElement('app'));
                    document.body = newBody;
                    platform_browser_dynamic_1.bootstrap(App, modules).then(function (appRef) {
                        AppInjService_1.appInjService(appRef.injector);
                    });
                }
            });
        }
    }
});
//# sourceMappingURL=App.js.map