System.register(["@angular/core"], function(exports_1, context_1) {
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
    var core_1;
    var Welcome;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Welcome = (function () {
                function Welcome() {
                    this.someId = 'App1' + Math.random();
                    this.showTypedObjectArg({
                        styles1: ['foo', 'bar'],
                        styles2: [1, 2]
                    });
                }
                Welcome.prototype.showTypedObjectArg = function (_a) {
                    var _b = _a === void 0 ? {} : _a, styles1 = _b.styles1, styles2 = _b.styles2;
                };
                Welcome.prototype.ngOnInit = function () {
                };
                Welcome = __decorate([
                    core_1.Component({
                        styles: ["\n        #routerLinks {\n            padding: 20px;\n        }\n    "],
                        template: "\n                <div id=\"routerLinks\">\n                    <h4>Direct router shortcut links:</h4>\n                    <a [routerLink]=\"['/EntryPanelNoId/Login']\">To Login screen</a><br/>\n                    <a [routerLink]=\"['/Login', {id: 'Sean-Levy'}, 'Login']\">To Login screen with demo user args</a><br/>\n                    <a [routerLink]=\"['/ForgotPass']\">To Forgot Password screen</a><br/>\n                    <a [routerLink]=\"['/AppManager']\">To App manager</a><br/>\n                    <a [routerLink]=\"['/App1']\">To App1</a><br/>\n                    <a [routerLink]=\"['/App2']\">To App2</a><br/>\n                    <a [routerLink]=\"['/App3']\">To App3</a><br/>\n                    <br/><small>I am Welcome component</small>\n                </div>\n                "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Welcome);
                return Welcome;
            }());
            exports_1("Welcome", Welcome);
        }
    }
});
