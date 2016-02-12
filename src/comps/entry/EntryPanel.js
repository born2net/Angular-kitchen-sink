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
var ForgotPass_1 = require('../../../src/comps/entry/ForgotPass');
var LoginPanel_1 = require('../../../src/comps/entry/LoginPanel');
var router_1 = require('angular2/router');
var router_2 = require('angular2/router');
var CommBroker_1 = require("../../services/CommBroker");
var Conts_1 = require("../../Conts");
var EntryPanel = (function () {
    function EntryPanel(params, commBroker) {
        if (params.get('id') != null) {
            commBroker.setValue(Conts_1.Consts.Values().USER_NAME, params.get('id'));
        }
        else {
            commBroker.setValue(Conts_1.Consts.Values().USER_NAME, 'foo-bar');
        }
    }
    EntryPanel = __decorate([
        router_2.RouteConfig([
            { path: '/Another2', component: LoginPanel_1.LoginPanel, as: 'Route3' },
            { path: '/Another3', component: ForgotPass_1.ForgotPass, as: 'Route4' },
            { path: '/ForgotPass', component: ForgotPass_1.ForgotPass, as: 'ForgotPass' },
            { path: '/Login', component: LoginPanel_1.LoginPanel, as: 'Login' }
        ]),
        core_1.Component({
            providers: [LoginPanel_1.LoginPanel],
            directives: [router_1.ROUTER_DIRECTIVES, router_2.RouterLink],
            selector: 'EntryPanel',
            template: "\n                <!--<a [routerLink]=\"['/App1']\">And back to Test1</a><br/>-->\n                <!--<a [routerLink]=\"['/EntryPanel', {id: 1111}, 'Route3']\">Login {{someId}}</a><br/>-->\n                <!--<a [routerLink]=\"['/EntryPanel', {id: 1111}, 'Route4']\">Forgot pass {{someId}}</a><br/>-->\n                <small>I am entrypanel component and I am inside main App</small>\n                <router-outlet></router-outlet>"
        }), 
        __metadata('design:paramtypes', [router_2.RouteParams, CommBroker_1.CommBroker])
    ], EntryPanel);
    return EntryPanel;
}());
exports.EntryPanel = EntryPanel;
//# sourceMappingURL=EntryPanel.js.map