System.register(['@angular/core', '../../../src/comps/entry/ForgotPass', '../../../src/comps/entry/LoginPanel', '@angular/router', "../../services/CommBroker", "../../Conts"], function(exports_1, context_1) {
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
    var core_1, ForgotPass_1, LoginPanel_1, router_1, router_2, CommBroker_1, Conts_1;
    var EntryPanel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ForgotPass_1_1) {
                ForgotPass_1 = ForgotPass_1_1;
            },
            function (LoginPanel_1_1) {
                LoginPanel_1 = LoginPanel_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (CommBroker_1_1) {
                CommBroker_1 = CommBroker_1_1;
            },
            function (Conts_1_1) {
                Conts_1 = Conts_1_1;
            }],
        execute: function() {
            EntryPanel = (function () {
                function EntryPanel(params, commBroker) {
                    if (params.getParam('id') != null) {
                        commBroker.setValue(Conts_1.Consts.Values().USER_NAME, params.getParam('id'));
                    }
                    else {
                        commBroker.setValue(Conts_1.Consts.Values().USER_NAME, 'foo-bar');
                    }
                }
                EntryPanel = __decorate([
                    router_2.Routes([
                        { path: '/Another2', component: LoginPanel_1.LoginPanel },
                        { path: '/Another3', component: ForgotPass_1.ForgotPass },
                        { path: '/ForgotPass', component: ForgotPass_1.ForgotPass },
                        { path: '/Login', component: LoginPanel_1.LoginPanel }
                    ]),
                    core_1.Component({
                        providers: [LoginPanel_1.LoginPanel],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        selector: 'EntryPanel',
                        template: "\n                <!--<a [routerLink]=\"['/App1']\">And back to Test1</a><br/>-->\n                <!--<a [routerLink]=\"['/EntryPanel', {id: 1111}]\">Login {{someId}}</a><br/>-->\n                <!--<a [routerLink]=\"['/EntryPanel', {id: 1111}]\">Forgot pass {{someId}}</a><br/>-->\n                <small>I am entrypanel component and I am inside main App</small>\n                <router-outlet></router-outlet>"
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteSegment, CommBroker_1.CommBroker])
                ], EntryPanel);
                return EntryPanel;
            }());
            exports_1("EntryPanel", EntryPanel);
        }
    }
});
//# sourceMappingURL=EntryPanel.js.map