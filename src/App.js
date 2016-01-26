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
var RefreshTheme_1 = require("./styles/RefreshTheme");
var Conts_1 = require("../src/Conts");
var StyleService_1 = require("./styles/StyleService");
var router_1 = require('angular2/router');
var router_2 = require('angular2/router');
var Observable_1 = require("rxjs/Observable");
require('rxjs/add/operator/map');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/observable/fromEvent');
var Welcome = (function () {
    function Welcome(params) {
        this.someId = 'App1' + Math.random();
    }
    Welcome = __decorate([
        core_1.Component({
            styles: ["\n        #routerLinks {\n            padding: 20px;\n        }\n    "],
            template: "\n                <div id=\"routerLinks\">\n                    <h4>Direct router shortcut links:</h4>\n                    <a [routerLink]=\"['/Login', 'Login']\">To Login screen</a><br/>\n                    <a [routerLink]=\"['/Login', {id: 'Sean-Levy'}, 'Login']\">To Login screen with demo user args</a><br/>\n                    <a [routerLink]=\"['/ForgotPass', 'ForgotPass']\">To Forgot Password screen</a><br/>\n                    <a [routerLink]=\"['/AppManager']\">To App manager</a><br/>\n                    <a [routerLink]=\"['/App1']\">To App1</a><br/>\n                    <a [routerLink]=\"['/App2']\">To App2</a><br/>\n                    <a [routerLink]=\"['/App3']\">To App3</a><br/>\n                    <br/><small>I am Welcome component</small>\n                </div>\n                ",
            directives: [router_1.ROUTER_DIRECTIVES, router_2.RouterLink]
        }), 
        __metadata('design:paramtypes', [router_2.RouteParams])
    ], Welcome);
    return Welcome;
})();
exports.Welcome = Welcome;
var App = (function (_super) {
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
            template: require('./App.html'),
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
            { path: '/App1', component: App1_1.App1, as: 'App1' },
            { path: '/App2', component: App2_1.App2, as: 'App2' },
            { path: '/App3', component: App3_1.App3, as: 'App3' },
        ]), 
        __metadata('design:paramtypes', [CommBroker_1.CommBroker, StyleService_1.StyleService])
    ], App);
    return App;
})(RefreshTheme_1.RefreshTheme);
exports.App = App;
browser_1.bootstrap(App, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS,
    core_1.provide(CommBroker_1.CommBroker, { useClass: CommBroker_1.CommBroker }),
    core_1.provide(Conts_1.Consts, { useClass: Conts_1.Consts }),
    core_1.provide(router_2.LocationStrategy, { useClass: router_2.HashLocationStrategy })]);
//# sourceMappingURL=App.js.map