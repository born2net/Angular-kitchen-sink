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
                    __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object])
                ], Logout);
                return Logout;
                var _a;
            }());
            exports_1("Logout", Logout);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2xvZ291dC9Mb2dvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWdCQTtnQkFDSSxnQkFBb0IsTUFBYTtvQkFBYixXQUFNLEdBQU4sTUFBTSxDQUFPO29CQUd6QixzQkFBaUIsR0FBVyxJQUFJLENBQUM7Z0JBRnpDLENBQUM7Z0JBSU8sZ0NBQWUsR0FBdkI7b0JBQ0ksSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztvQkFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO2dCQUMvQixDQUFDO2dCQUVNLDhCQUFhLEdBQXBCO29CQUVJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7d0JBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ2hCLENBQUM7b0JBQ0QsSUFBSSxFQUFFLEdBQUcsVUFBQyxNQUFNO3dCQUNaLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7NEJBQ1QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7Z0NBQ3pCLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7Z0NBQ3RFLE1BQU0sQ0FBQyxJQUFJLENBQUM7NEJBQ2hCLENBQUMsQ0FBQyxDQUFDO3dCQUNQLENBQUM7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ0osT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDOzRCQUNsQixNQUFNLENBQUMsS0FBSyxDQUFDO3dCQUNqQixDQUFDO29CQUNMLENBQUMsQ0FBQTtvQkFDRCxPQUFPLENBQUMsT0FBTyxDQUFDLGtDQUFrQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUN4RCxJQUFJLENBQUMsR0FBRyx1QkFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQTtvQkFDbkMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDYixDQUFDO2dCQXhDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsa1VBS0w7cUJBQ1IsQ0FBQzs7MEJBQUE7Z0JBaUNGLGFBQUM7O1lBQUQsQ0EvQkEsQUErQkMsSUFBQTtZQS9CRCwyQkErQkMsQ0FBQSIsImZpbGUiOiJjb21wcy9sb2dvdXQvTG9nb3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZnJvbVByb21pc2UnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvYmluZENhbGxiYWNrJztcclxuaW1wb3J0ICogYXMgYm9vdGJveCBmcm9tICdib290Ym94JztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ0xvZ291dCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgICAgICAgICAgPGgxPkdvb2RieWU8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsPkkgYW0gTG9nb3V0IGNvbXBvbmVudDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICA8aDU+RGVtbyBjYW5EZWFjdGl2YXRlIGJ5IG1vdmluZyB0byBhIG5ldyByb3V0ZSBhbmQgbG9ja2luZyBpbiBjYW5EZWFjdGl2YXRlIG9uIHVybCBjaGFuZ2VzIDwvaDU+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvbkNhbkRlYWN0aXZhdGUoJGV2ZW50KVwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCI+TG9nb3V0IG5vdzwvYnV0dG9uPlxyXG4gICAgICAgIGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dvdXQge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6Um91dGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhbGxvd05hdmlnYXRlQXdheTpib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBwcml2YXRlIG9uQ2FuRGVhY3RpdmF0ZSgpIHtcclxuICAgICAgICB0aGlzLmFsbG93TmF2aWdhdGVBd2F5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhbkRlYWN0aXZhdGUoKTphbnkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hbGxvd05hdmlnYXRlQXdheSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNiID0gKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJ2JvZHknKS5mYWRlT3V0KDMwMDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcImh0dHBzOi8vZ2l0aHViLmNvbS9ib3JuMm5ldC9uZzJCb2lsZXJwbGF0ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYm9vdGJveC5oaWRlQWxsKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYm9vdGJveC5jb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGxvZ291dD9cIiwgY2IpO1xyXG4gICAgICAgIGxldCBvID0gT2JzZXJ2YWJsZS5iaW5kQ2FsbGJhY2soY2IpXHJcbiAgICAgICAgcmV0dXJuIG87XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
