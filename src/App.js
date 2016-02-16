"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('bootstrap');
require('zone.js/dist/zone.min.js');
require("reflect-metadata");
require('twbs/bootstrap/css/bootstrap.css!');
require('./styles/style.css!');
var browser_1 = require('angular2/platform/browser');
var http_1 = require("angular2/http");
var App1_1 = require('../src/comps/app1/App1');
var App2_1 = require('../src/comps/app2/App2');
var App3_1 = require('../src/comps/app3/App3');
var core_1 = require('angular2/core');
var EntryPanel_1 = require('../src/comps/entry/EntryPanel');
var AppManager_1 = require('../src/comps/appmanager/AppManager');
var CommBroker_1 = require('../src/services/CommBroker');
var Filemenu_1 = require("../src/comps/filemenu/Filemenu");
var FilemenuItem_1 = require("../src/comps/filemenu/FilemenuItem");
var Logo_1 = require("./comps/logo/Logo");
var Footer_1 = require("./comps/footer/Footer");
var Conts_1 = require("../src/Conts");
var StyleService_1 = require("./styles/StyleService");
var router_1 = require('angular2/router');
var router_2 = require('angular2/router');
var angular2_redux_util_1 = require("angular2-redux-util");
var Lib_1 = require("./Lib");
var Observable_1 = require("rxjs/Observable");
require('rxjs/add/operator/map');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/observable/fromEvent');
var parts_reducer_1 = require("./comps/app3/starwars/reducers/parts-reducer");
var cart_reducer_1 = require("./comps/app3/starwars/reducers/cart-reducer");
var films_reducer_1 = require("./comps/app3/starwars/reducers/films-reducer");
var users_reducer_1 = require("./comps/app3/starwars/reducers/users-reducer");
var NotifyReducer_1 = require("./reducers/NotifyReducer");
var AppdbReducer_1 = require("./reducers/AppdbReducer");
var TodoReducer_1 = require("./comps/app1/todos/reducers/TodoReducer");
var AppdbAction_1 = require("./actions/AppdbAction");
var Welcome_1 = require("./comps/welcome/Welcome");
var App = (function () {
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
            directives: [router_1.ROUTER_DIRECTIVES, router_2.RouterLink, Filemenu_1.Filemenu, FilemenuItem_1.FilemenuItem, Logo_1.Logo, Footer_1.Footer]
        }),
        router_2.RouteConfig([
            { path: "/", name: "root", redirectTo: ["/EntryPanelNoId/Login"], useAsDefault: true },
            { path: '/AppManager', component: AppManager_1.AppManager, as: 'AppManager' },
            { path: '/Welcome', component: Welcome_1.Welcome, as: 'Welcome' },
            { path: '/EntryPanelNoId/...', component: EntryPanel_1.EntryPanel, as: 'EntryPanelNoId' },
            { path: '/EntryPanel/:id/...', component: EntryPanel_1.EntryPanel, as: 'EntryPanel' },
            { path: '/Login/...', component: EntryPanel_1.EntryPanel, as: 'Login' },
            { path: '/ForgotPass/...', component: EntryPanel_1.EntryPanel, as: 'ForgotPass' },
            { path: '/App1/...', component: App1_1.App1, as: 'App1' },
            { path: '/App2', component: App2_1.App2, as: 'App2' },
            { path: '/App3', component: App3_1.App3, as: 'App3' },
        ]), 
        __metadata('design:paramtypes', [angular2_redux_util_1.AppStore, CommBroker_1.CommBroker, StyleService_1.StyleService, AppdbAction_1.AppdbAction])
    ], App);
    return App;
}());
exports.App = App;
browser_1.bootstrap(App, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, http_1.JSONP_PROVIDERS,
    core_1.provide(angular2_redux_util_1.AppStore, { useFactory: Lib_1.Lib.StoreFactory({ notify: NotifyReducer_1.default, appdb: AppdbReducer_1.default, parts: parts_reducer_1.default, cart: cart_reducer_1.default, films: films_reducer_1.default, users: users_reducer_1.default, todos: TodoReducer_1.todos }) }),
    core_1.provide(CommBroker_1.CommBroker, { useClass: CommBroker_1.CommBroker }),
    core_1.provide(Conts_1.Consts, { useClass: Conts_1.Consts }),
    core_1.provide(router_2.LocationStrategy, { useClass: router_2.HashLocationStrategy })]);
//# sourceMappingURL=App.js.map