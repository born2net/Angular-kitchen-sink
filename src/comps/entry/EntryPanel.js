System.register(['@angular/core', '../../../src/comps/entry/LoginPanel', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, LoginPanel_1, router_1;
    var EntryPanel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (LoginPanel_1_1) {
                LoginPanel_1 = LoginPanel_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            EntryPanel = (function () {
                function EntryPanel() {
                }
                EntryPanel = __decorate([
                    core_1.Component({
                        providers: [LoginPanel_1.LoginPanel],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        selector: 'EntryPanel',
                        template: "\n                <small>I am entrypanel component and I am inside main App</small>\n                <router-outlet></router-outlet>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], EntryPanel);
                return EntryPanel;
            }());
            exports_1("EntryPanel", EntryPanel);
        }
    }
});
//# sourceMappingURL=EntryPanel.js.map