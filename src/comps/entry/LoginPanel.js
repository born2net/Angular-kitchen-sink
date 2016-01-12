System.register(['angular2/core', 'angular2/router', "../../services/CommBroker", "../../Conts", "angular2/router", 'rxjs/add/observable/from', 'rxjs/add/observable/fromEvent', 'rxjs/add/operator/map', 'rxjs/add/operator/bufferCount', 'rxjs/add/operator/filter', 'rxjs/add/operator/scan', 'rxjs/add/operator/do', 'rxjs/add/observable/range', "rxjs/Subject", "rxjs/subject/BehaviorSubject", "rxjs/Observable"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, router_2, CommBroker_1, Conts_1, router_3, Subject_1, BehaviorSubject_1, Observable_1;
    var User, LoginPanel;
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
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (_6) {},
            function (_7) {},
            function (_8) {},
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (BehaviorSubject_1_1) {
                BehaviorSubject_1 = BehaviorSubject_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            User = (function () {
                function User(obj) {
                    this.id = obj && obj.id || Math.random();
                    this.name = obj && obj.name || 'anonymous';
                    this.pass = obj && obj.pass || '';
                    this.gender = obj && obj.gender || 'male';
                }
                return User;
            })();
            exports_1("User", User);
            LoginPanel = (function () {
                function LoginPanel(router, commBroker) {
                    this.myRouter = router;
                    var user = commBroker.getValue(Conts_1.Consts.Values().USER_NAME);
                    this.user = user || '';
                    this.pass = user || '';
                }
                LoginPanel.prototype.exampleRx1 = function () {
                    var userStream = new BehaviorSubject_1.BehaviorSubject(null);
                    userStream.do(function (e) { return console.log(e); });
                    userStream.filter(function (user) {
                        return user && user.gender == 'male';
                    }).subscribe(function (user) {
                        console.log('male gender ' + user.name);
                    });
                    userStream.subscribe(function (user) {
                        if (user == null)
                            return;
                        console.log("user registered " + user.name + " " + user.id);
                    });
                    userStream.next(new User({ name: 'Sean' }));
                    userStream.next(new User({ name: 'John' }));
                    userStream.next(new User({ name: 'Nelly', pass: 'aaa', gender: 'female' }));
                    userStream.next(new User({ name: 'Nadine', pass: 'bbb', gender: 'female' }));
                    var usersStream = new Observable_1.Observable(function (observer) {
                        console.log(observer);
                    });
                    usersStream.subscribe(function (e) { return console.log(e); });
                    var source = userStream.scan(function (acc, x) {
                        return acc + x;
                    }, []);
                    source.subscribe(function (x) { return console.log("scan " + x); });
                };
                LoginPanel.prototype.exampleRx2 = function () {
                    var userStream1 = new Subject_1.Subject(null);
                    var userStream2 = new Subject_1.Subject(null);
                    userStream1.subscribe(userStream2);
                    userStream2.subscribe(function (x) {
                        console.log(x);
                    });
                    var userStream3 = Observable_1.Observable.create(function (observer) {
                        observer.next(new User({ name: 'Peggy', gender: 'female' }));
                    });
                    userStream1.next(new User({ name: 'Sean' }));
                    userStream1.next(new User({ name: 'Larry' }));
                    userStream3.subscribe(userStream2);
                    var userObject = { 'new_user': new User() };
                };
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
                        template: "\n                <div id=\"appLogin\" style=\"\">\n                  <form class=\"form-signin\" role=\"form\">\n                    <h2 class=\"form-signin-heading\"></h2>\n                    <input id=\"userName\" type=\"text\" value=\"{{user}}\" class=\"form-control\" data-localize=\"username\" placeholder=\"Type anything\" required autofocus>\n                    <input id=\"userPass\" type=\"password\" value=\"{{pass}}\" class=\"form-control\" data-localize=\"password\" placeholder=\"Type anything\" required>\n                    <label class=\"checkbox\">\n                      <input id=\"rememberMe\" type=\"checkbox\" checked value=\"remember-me\">\n                      <span> Remember me </span></label>\n                    <button id=\"loginButton\" (click)=\"onLogin($event)\" class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">\n                      Sign in\n                    </button>\n                    <hr class=\"hrThin\"/>\n                    <a [routerLink]=\"['/ForgotPass', 'ForgotPass']\">Forgot password</a>\n                    <div id=\"languageSelectionLogin\"></div>\n                  </form>\n                </div>\n\n                <!-- <a [routerLink]=\"['/EntryPanelNoId', {id: 123}, 'Route4']\">To forgot pass</a> -->\n                <!-- <a [routerLink]=\"['/App1']\">Direct to App1</a><br/> -->\n                <!-- <a [routerLink]=\"['/App2']\">Direct to App2</a><br/> -->\n                <small>I am Login component and I am inside EntryPanel</small>"
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