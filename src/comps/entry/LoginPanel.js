///<reference path="../../../typings/app.d.ts" />
System.register(['angular2/core', 'angular2/router', "../../services/CommBroker", "../../Conts", "angular2/router"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, router_2, CommBroker_1, Conts_1, router_3;
    var LoginPanel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
            },
            function (router_3_1) {
                router_3 = router_3_1;
            }],
        execute: function() {
            LoginPanel = (function () {
                function LoginPanel(router, commBroker) {
                    this.myRouter = router;
                    var user = commBroker.getValue(Conts_1.Consts.Values().USER_NAME);
                    this.user = user || '';
                    this.pass = user || '';
                }
                LoginPanel.prototype.onLogin = function (event) {
                    var _this = this;
                    console.log("doing some fake async auth for " + this.user);
                    bootbox.dialog({
                        closeButton: false,
                        title: "Please wait, Authenticating...",
                        message: " "
                    });
                    setTimeout(function (e) {
                        _this.myRouter.navigate(['/AppManager']);
                        bootbox.hideAll();
                    }, 2000);
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
                LoginPanel = __decorate([
                    core_1.Injectable(),
                    core_1.Component({
                        selector: 'LoginPanel',
                        directives: [router_1.ROUTER_DIRECTIVES, router_2.RouterLink],
                        template: "\n                <div id=\"appLogin\" style=\"\">\n                  <form class=\"form-signin\" role=\"form\">\n                    <h2 class=\"form-signin-heading\"></h2>\n                    <input id=\"userName\" type=\"text\" value=\"{{user}}\" class=\"form-control\" data-localize=\"username\" placeholder=\"Type anything\" required autofocus>\n                    <input id=\"userPass\" type=\"password\" value=\"{{pass}}\" class=\"form-control\" data-localize=\"password\" placeholder=\"Type anything\" required>\n                    <label class=\"checkbox\">\n                      <input id=\"rememberMe\" type=\"checkbox\" checked value=\"remember-me\">\n                      <span data-localize=\"rememberMe\"> Remember me </span></label>\n                    <button id=\"loginButton\" (click)=\"onLogin($event)\" class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">\n                      Sign in\n                    </button>\n                    <hr class=\"hrThin\"/>\n                    <a [routerLink]=\"['/ForgotPass', 'ForgotPass']\">Forgot password</a>\n                    <div id=\"languageSelectionLogin\"></div>\n                  </form>\n                </div>\n                <!-- <a [routerLink]=\"['/EntryPanelNoId', {id: 123}, 'Route4']\">To forgot pass</a> -->\n                <!-- <a [routerLink]=\"['/App1']\">Direct to App1</a><br/> -->\n                <!-- <a [routerLink]=\"['/App2']\">Direct to App2</a><br/> -->\n                <small>I am Login component and I am inside EntryPanel</small>"
                    }), 
                    __metadata('design:paramtypes', [router_3.Router, CommBroker_1.CommBroker])
                ], LoginPanel);
                return LoginPanel;
            })();
            exports_1("LoginPanel", LoginPanel);
        }
    }
});
//# sourceMappingURL=LoginPanel.js.map