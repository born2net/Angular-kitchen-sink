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
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var router_2 = require('angular2/router');
var CommBroker_1 = require("../../services/CommBroker");
var Conts_1 = require("../../Conts");
var router_3 = require("angular2/router");
require('rxjs/add/observable/from');
require('rxjs/add/observable/fromEvent');
require('rxjs/add/operator/map');
require('rxjs/add/operator/bufferCount');
require('rxjs/add/operator/filter');
require('rxjs/add/operator/scan');
require('rxjs/add/operator/do');
require('rxjs/add/observable/range');
var angular2_redux_util_1 = require("angular2-redux-util");
var bootbox = require('bootbox');
var User = (function () {
    function User(obj) {
        this.id = obj && obj.id || Math.random();
        this.name = obj && obj.name || 'anonymous';
        this.pass = obj && obj.pass || '';
        this.gender = obj && obj.gender || 'male';
    }
    return User;
}());
exports.User = User;
var LoginPanel = (function () {
    function LoginPanel(appStore, router, commBroker) {
        this.appStore = appStore;
        this.commBroker = commBroker;
        this.myRouter = router;
        console.log('this is a test 4');
        var user = commBroker.getValue(Conts_1.Consts.Values().USER_NAME);
        this.user = user || '';
        this.pass = user || '';
        this.unsub = appStore.subscribe(function (objectPath, oldVal, newVal) {
            console.log('%s changed from %s to %s', objectPath, oldVal, newVal);
        }, 'notify', true);
    }
    LoginPanel.prototype.authUser = function (i_user, i_pass) {
        this.onLogin();
    };
    LoginPanel.prototype.onLogin = function () {
        var _this = this;
        bootbox.dialog({
            closeButton: false,
            title: "Please wait, Authenticating...",
            message: " "
        });
        setTimeout(function (e) {
            _this.myRouter.navigate(['/AppManager']);
            bootbox.hideAll();
        }, 200);
        event.preventDefault();
        return false;
    };
    Object.defineProperty(LoginPanel.prototype, "loginName", {
        set: function (name) {
            this.user = name;
        },
        enumerable: true,
        configurable: true
    });
    LoginPanel.prototype.toString = function () {
    };
    LoginPanel.prototype.ngOnDestroy = function () {
        this.unsub();
    };
    LoginPanel = __decorate([
        core_1.Injectable(),
        core_1.Component({
            selector: 'LoginPanel',
            directives: [router_1.ROUTER_DIRECTIVES, router_2.RouterLink],
            template: "\n                <MyChart></MyChart>\n                <div id=\"appLogin\" style=\"\">\n                  <form class=\"form-signin\" role=\"form\">\n                    <h2 class=\"form-signin-heading\"></h2>\n                    <input #userName id=\"userName\" type=\"text\" value=\"{{user}}\" class=\"form-control\" data-localize=\"username\" placeholder=\"Type anything\" required autofocus>\n                    <input #userPass id=\"userPass\" type=\"password\" value=\"{{pass}}\" class=\"form-control\" data-localize=\"password\" placeholder=\"Type anything\" required>\n                    <label class=\"checkbox\">\n                      <input id=\"rememberMe\" type=\"checkbox\" checked value=\"remember-me\">\n                      <span> Remember me </span></label>\n                    <button id=\"loginButton\" (click)=\"authUser(userName.value, userPass.value)\" class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">\n                      Sign in\n                    </button>\n                    <hr class=\"hrThin\"/>\n                    <a [routerLink]=\"['/ForgotPass', 'ForgotPass']\">Forgot password</a>\n                    <div id=\"languageSelectionLogin\"></div>\n                  </form>\n                </div>\n\n                <!-- <a [routerLink]=\"['/EntryPanelNoId', {id: 123}, 'Route4']\">To forgot pass</a> -->\n                <!-- <a [routerLink]=\"['/App1']\">Direct to App1</a><br/> -->\n                <!-- <a [routerLink]=\"['/App2']\">Direct to App2</a><br/> -->\n                <small>I am Login component and I am inside EntryPanel</small>"
        }), 
        __metadata('design:paramtypes', [angular2_redux_util_1.AppStore, router_3.Router, CommBroker_1.CommBroker])
    ], LoginPanel);
    return LoginPanel;
}());
exports.LoginPanel = LoginPanel;
//# sourceMappingURL=LoginPanel.js.map