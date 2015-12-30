System.register(['angular2/core', 'angular2/router'], function(exports_1) {
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
    var core_1, router_1, router_2;
    var ForgotPass;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            }],
        execute: function() {
            ForgotPass = (function () {
                function ForgotPass() {
                }
                ForgotPass = __decorate([
                    core_1.Component({
                        providers: [ForgotPass],
                        selector: 'ForgotPass',
                        template: "\n                <div>\n                  <form class=\"form-signin\" role=\"form\">\n\n\n                    <h2 class=\"form-signin-heading\"></h2>\n                    <button id=\"loginButton\" class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">\n                      Forgot pass\n                    </button>\n                    <hr class=\"hrThin\"/>\n                    <a [routerLink]=\"['/Login', {id: 'demo_user'}, 'Login']\">Back to login screen</a><br/>\n                    <small>(auto fill user by passing router args)</small>\n                    <div id=\"languageSelectionLogin\"></div>\n                  </form>\n                </div>\n                <!-- <a [routerLink]=\"['/App1']\">And back to Test1</a> -->\n                <br/>\n                <small>I am ForgotPass component and I am inside EntryPanel</small>",
                        directives: [router_1.ROUTER_DIRECTIVES, router_2.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ForgotPass);
                return ForgotPass;
            })();
            exports_1("ForgotPass", ForgotPass);
        }
    }
});
//# sourceMappingURL=ForgotPass.js.map