System.register(["rxjs/Observable", "@angular/core", "@angular/router", 'rxjs/add/observable/fromPromise', 'rxjs/add/observable/bindCallback', 'bootbox'], function(exports_1, context_1) {
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
    var Observable_1, core_1, router_1, bootbox;
    var Logout;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (bootbox_1) {
                bootbox = bootbox_1;
            }],
        execute: function() {
            Logout = (function () {
                function Logout(router) {
                    this.router = router;
                    this.allowNavigateAway = true;
                }
                Logout.prototype.onCanDeactivate = function () {
                    this.allowNavigateAway = false;
                    this.router.navigate(['/']);
                };
                Logout.prototype.canDeactivate = function () {
                    if (this.allowNavigateAway) {
                        return true;
                    }
                    var cb = function (result) {
                        if (result) {
                            jQuery('body').fadeOut(3000, function () {
                                window.location.replace("https://github.com/born2net/ng2Boilerplate");
                                return true;
                            });
                        }
                        else {
                            bootbox.hideAll();
                            return false;
                        }
                    };
                    bootbox.confirm("Are you sure you want to logout?", cb);
                    var o = Observable_1.Observable.bindCallback(cb);
                    return o;
                };
                Logout = __decorate([
                    core_1.Component({
                        selector: 'Logout',
                        template: "\n                <h1>Goodbye</h1>\n                <small>I am Logout component</small>\n                <h5>Demo canDeactivate by moving to a new route and locking in canDeactivate on url changes </h5>\n                <button (click)=\"onCanDeactivate($event)\" class=\"btn btn-default\">Logout now</button>\n        "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], Logout);
                return Logout;
            }());
            exports_1("Logout", Logout);
        }
    }
});
//# sourceMappingURL=Logout.js.map