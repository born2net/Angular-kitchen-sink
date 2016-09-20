System.register(['@angular/core', "../../services/CommBroker", "../../Conts", "@angular/router", 'rxjs/add/observable/from', 'rxjs/add/observable/fromEvent', 'rxjs/add/operator/map', 'rxjs/add/operator/bufferCount', 'rxjs/add/operator/filter', 'rxjs/add/operator/scan', 'rxjs/add/operator/do', 'rxjs/add/observable/range', "angular2-redux-util", 'bootbox'], function(exports_1, context_1) {
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
    var core_1, CommBroker_1, Conts_1, router_1, angular2_redux_util_1, bootbox;
    var User, LoginPanel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (CommBroker_1_1) {
                CommBroker_1 = CommBroker_1_1;
            },
            function (Conts_1_1) {
                Conts_1 = Conts_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (_6) {},
            function (_7) {},
            function (_8) {},
            function (angular2_redux_util_1_1) {
                angular2_redux_util_1 = angular2_redux_util_1_1;
            },
            function (bootbox_1) {
                bootbox = bootbox_1;
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
            }());
            exports_1("User", User);
            LoginPanel = (function () {
                function LoginPanel(appStore, router, commBroker) {
                    this.appStore = appStore;
                    this.commBroker = commBroker;
                    this.myRouter = router;
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
                        template: "\n                <div id=\"appLogin\" style=\"\">\n                  <form class=\"form-signin\" role=\"form\">\n                    <h2 class=\"form-signin-heading\"></h2>\n                    <input #userName id=\"userName\" type=\"text\" value=\"{{user}}\" class=\"form-control\" data-localize=\"username\" placeholder=\"Type anything\" required autofocus>\n                    <input #userPass id=\"userPass\" type=\"password\" value=\"{{pass}}\" class=\"form-control\" data-localize=\"password\" placeholder=\"Type anything\" required>\n                    <label class=\"checkbox\">\n                      <input id=\"rememberMe\" type=\"checkbox\" checked value=\"remember-me\">\n                      <span> Remember me </span></label>\n                    <button id=\"loginButton\" (click)=\"authUser(userName.value, userPass.value)\" class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">\n                      Sign in\n                    </button>\n                    <hr class=\"hrThin\"/>\n                    <a [routerLink]=\"['/ForgotPass']\">Forgot password</a>\n                    <div id=\"languageSelectionLogin\"></div>\n                  </form>\n                </div>\n\n                <!-- <a [routerLink]=\"['/EntryPanelNoId', {id: 123}']\">To forgot pass</a> -->\n                <!-- <a [routerLink]=\"['/App1']\">Direct to App1</a><br/> -->\n                <!-- <a [routerLink]=\"['/App2']\">Direct to App2</a><br/> -->\n                <small>I am Login component and I am inside EntryPanel</small>"
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof angular2_redux_util_1.AppStore !== 'undefined' && angular2_redux_util_1.AppStore) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, CommBroker_1.CommBroker])
                ], LoginPanel);
                return LoginPanel;
                var _a, _b;
            }());
            exports_1("LoginPanel", LoginPanel);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2VudHJ5L0xvZ2luUGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWtCQTtnQkFNSSxjQUFZLEdBQVE7b0JBQ2hCLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUN6QyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLFdBQVcsQ0FBQztvQkFDM0MsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDO2dCQUM5QyxDQUFDO2dCQUNMLFdBQUM7WUFBRCxDQVpBLEFBWUMsSUFBQTtZQVpELHVCQVlDLENBQUE7WUE0QkQ7Z0JBTUksb0JBQW9CLFFBQWlCLEVBQUUsTUFBYSxFQUFVLFVBQXFCO29CQUEvRCxhQUFRLEdBQVIsUUFBUSxDQUFTO29CQUF5QixlQUFVLEdBQVYsVUFBVSxDQUFXO29CQWEvRSxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztvQkFDdkIsSUFBSSxJQUFJLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxjQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzFELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO29CQUV2QixJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU07d0JBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQTtvQkFDdkUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkErQnZCLENBQUM7Z0JBRU8sNkJBQVEsR0FBaEIsVUFBaUIsTUFBYSxFQUFFLE1BQWE7b0JBQ3pDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDbkIsQ0FBQztnQkFFTyw0QkFBTyxHQUFmO29CQUFBLGlCQVlDO29CQVhHLE9BQU8sQ0FBQyxNQUFNLENBQUM7d0JBQ1gsV0FBVyxFQUFFLEtBQUs7d0JBQ2xCLEtBQUssRUFBRSxnQ0FBZ0M7d0JBQ3ZDLE9BQU8sRUFBRSxHQUFHO3FCQUNmLENBQUMsQ0FBQztvQkFDSCxVQUFVLENBQUMsVUFBQyxDQUFDO3dCQUNULEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzt3QkFDeEMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUN0QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ1IsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN2QixNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNqQixDQUFDO2dCQUVELHNCQUFXLGlDQUFTO3lCQUFwQixVQUFxQixJQUFXO3dCQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDckIsQ0FBQzs7O21CQUFBO2dCQUVELDZCQUFRLEdBQVI7Z0JBQ0EsQ0FBQztnQkFHRCxnQ0FBVyxHQUFYO29CQUNJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDakIsQ0FBQztnQkFqSEw7b0JBQUMsaUJBQVUsRUFBRTtvQkFDWixnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUUsdWdEQXFCaUU7cUJBQzlFLENBQUM7OzhCQUFBO2dCQXlGRixpQkFBQzs7WUFBRCxDQXhGQSxBQXdGQyxJQUFBO1lBeEZELG1DQXdGQyxDQUFBIiwiZmlsZSI6ImNvbXBzL2VudHJ5L0xvZ2luUGFuZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29tbUJyb2tlcn0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL0NvbW1Ccm9rZXJcIjtcclxuaW1wb3J0IHtDb25zdHN9IGZyb20gXCIuLi8uLi9Db250c1wiO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZnJvbSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9mcm9tRXZlbnQnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvYnVmZmVyQ291bnQnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2ZpbHRlcic7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc2Nhbic7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvcmFuZ2UnO1xyXG5pbXBvcnQge1N1YmplY3R9IGZyb20gXCJyeGpzL1N1YmplY3RcIjtcclxuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHtBcHBTdG9yZX0gZnJvbSBcImFuZ3VsYXIyLXJlZHV4LXV0aWxcIjtcclxuaW1wb3J0ICogYXMgYm9vdGJveCBmcm9tICdib290Ym94JztcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyIHtcclxuICAgIHB1YmxpYyBpZDpzdHJpbmc7XHJcbiAgICBwdWJsaWMgbmFtZTpzdHJpbmc7XHJcbiAgICBwdWJsaWMgcGFzczpzdHJpbmc7XHJcbiAgICBwdWJsaWMgZ2VuZGVyOnN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvYmo/OmFueSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBvYmogJiYgb2JqLmlkIHx8IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gb2JqICYmIG9iai5uYW1lIHx8ICdhbm9ueW1vdXMnO1xyXG4gICAgICAgIHRoaXMucGFzcyA9IG9iaiAmJiBvYmoucGFzcyB8fCAnJztcclxuICAgICAgICB0aGlzLmdlbmRlciA9IG9iaiAmJiBvYmouZ2VuZGVyIHx8ICdtYWxlJztcclxuICAgIH1cclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnTG9naW5QYW5lbCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImFwcExvZ2luXCIgc3R5bGU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJmb3JtLXNpZ25pblwiIHJvbGU9XCJmb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiZm9ybS1zaWduaW4taGVhZGluZ1wiPjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0ICN1c2VyTmFtZSBpZD1cInVzZXJOYW1lXCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cInt7dXNlcn19XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBkYXRhLWxvY2FsaXplPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIlR5cGUgYW55dGhpbmdcIiByZXF1aXJlZCBhdXRvZm9jdXM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0ICN1c2VyUGFzcyBpZD1cInVzZXJQYXNzXCIgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9XCJ7e3Bhc3N9fVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgZGF0YS1sb2NhbGl6ZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJUeXBlIGFueXRoaW5nXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInJlbWVtYmVyTWVcIiB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkIHZhbHVlPVwicmVtZW1iZXItbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBSZW1lbWJlciBtZSA8L3NwYW4+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwibG9naW5CdXR0b25cIiAoY2xpY2spPVwiYXV0aFVzZXIodXNlck5hbWUudmFsdWUsIHVzZXJQYXNzLnZhbHVlKVwiIGNsYXNzPVwiYnRuIGJ0bi1sZyBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTaWduIGluXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzPVwiaHJUaGluXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL0ZvcmdvdFBhc3MnXVwiPkZvcmdvdCBwYXNzd29yZDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibGFuZ3VhZ2VTZWxlY3Rpb25Mb2dpblwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8IS0tIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL0VudHJ5UGFuZWxOb0lkJywge2lkOiAxMjN9J11cIj5UbyBmb3Jnb3QgcGFzczwvYT4gLS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL0FwcDEnXVwiPkRpcmVjdCB0byBBcHAxPC9hPjxici8+IC0tPlxyXG4gICAgICAgICAgICAgICAgPCEtLSA8YSBbcm91dGVyTGlua109XCJbJy9BcHAyJ11cIj5EaXJlY3QgdG8gQXBwMjwvYT48YnIvPiAtLT5cclxuICAgICAgICAgICAgICAgIDxzbWFsbD5JIGFtIExvZ2luIGNvbXBvbmVudCBhbmQgSSBhbSBpbnNpZGUgRW50cnlQYW5lbDwvc21hbGw+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5QYW5lbCB7XHJcbiAgICBwcml2YXRlIHVzZXI6c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBwYXNzOnN0cmluZztcclxuICAgIHByaXZhdGUgbXlSb3V0ZXI6Um91dGVyO1xyXG4gICAgcHJpdmF0ZSB1bnN1YjpGdW5jdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcFN0b3JlOkFwcFN0b3JlLCByb3V0ZXI6Um91dGVyLCBwcml2YXRlIGNvbW1Ccm9rZXI6Q29tbUJyb2tlcikge1xyXG5cclxuICAgICAgICAvLyAvLyBjb25zdCBjdXJyZW50VXJsVHJlZTogVXJsVHJlZSA9IHJvdXRlci51cmxUcmVlO1xyXG4gICAgICAgIC8vIHJvb3Qgc2VnbWVudFxyXG4gICAgICAgIC8vIC8vIGNvbnN0IHJvb3Q6IFVybFNlZ21lbnQgPSBjdXJyZW50VXJsVHJlZS5yb290O1xyXG4gICAgICAgIC8vIHlvdSBjYW4gZ2V0IHRoZSBmaXJzdCBjaGlsZCBvciB0aGUgbGlzdCBvZiBjaGlsZHJlbiBvZiBhIHNlZ21lbnRcclxuICAgICAgICAvLyAvLyBjb25zdCBmaXJzdENoaWxkOiBVcmxTZWdtZW50ID0gY3VycmVudFVybFRyZWUuZmlyc3RDaGlsZChyb290KTtcclxuICAgICAgICAvLyBtYXRyaXggcGFyYW1ldGVycyBvZiBhIHNlZ21lbnRcclxuICAgICAgICAvLyAvLyBjb25zdCBwYXJhbXM6IHtba2V5OnN0cmluZ106c3RyaW5nfSA9IGZpcnN0Q2hpbGQucGFyYW1ldGVycztcclxuICAgICAgICAvLyAvLyBjb25zdCBwYXRoOiBzdHJpbmcgPSBmaXJzdENoaWxkLnBhdGg7XHJcbiAgICAgICAgLy8gLy8gWW91IGNhbiBhbHNvIHNlcmlhbGl6ZSB0aGUgdHJlZSBiYWNrIGludG8gYSBzdHJpbmcuXHJcbiAgICAgICAgLy8gY29uc3QgdXJsOiBzdHJpbmcgPSByb3V0ZXIuc2VyaWFsaXplVXJsKGN1cnJlbnRVcmxUcmVlKTtcclxuXHJcbiAgICAgICAgdGhpcy5teVJvdXRlciA9IHJvdXRlcjtcclxuICAgICAgICB2YXIgdXNlciA9IGNvbW1Ccm9rZXIuZ2V0VmFsdWUoQ29uc3RzLlZhbHVlcygpLlVTRVJfTkFNRSk7XHJcbiAgICAgICAgdGhpcy51c2VyID0gdXNlciB8fCAnJztcclxuICAgICAgICB0aGlzLnBhc3MgPSB1c2VyIHx8ICcnO1xyXG5cclxuICAgICAgICB0aGlzLnVuc3ViID0gYXBwU3RvcmUuc3Vic2NyaWJlKChvYmplY3RQYXRoLCBvbGRWYWwsIG5ld1ZhbCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnJXMgY2hhbmdlZCBmcm9tICVzIHRvICVzJywgb2JqZWN0UGF0aCwgb2xkVmFsLCBuZXdWYWwpXHJcbiAgICAgICAgfSwgJ25vdGlmeScsIHRydWUpO1xyXG5cclxuICAgICAgICAvLyBtb3JlIGV4YW1wbGVzIG9mIHN1YnNjcmliaW5nIHRvIHN0b3JlXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyB1c2VJc0VxdWFsIGlzIHNldCB0byB0cnVlIGZvciBkZWVwIE1hcCBlcXVhbGl0eVxyXG4gICAgICAgIC8vIGFwcFN0b3JlLnN1YnNjcmliZSgob2JqZWN0UGF0aCwgb2xkVmFsLCBuZXdWYWwpID0+IHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJyVzIGNoYW5nZWQgZnJvbSAlcyB0byAlcycsIG9iamVjdFBhdGgsIG9sZFZhbCwgbmV3VmFsKVxyXG4gICAgICAgIC8vIH0sICdub3RpZnknLCB0cnVlKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIHVzZUlzRXF1YWwgaXMgc2V0IHRvIGZhbHNlIGZvciBub3JtYWwgZXF1YWxpdHlcclxuICAgICAgICAvLyB2YXIgdWJzdWIgPSBhcHBTdG9yZS5zdWJzY3JpYmUoKG9iamVjdFBhdGgsIG9sZFZhbCwgbmV3VmFsKSA9PiB7XHJcbiAgICAgICAgLy8gfSwgJ25vdGlmeS5kYXRhJywgZmFsc2UpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gd2l0aCBjYXN0aW5nXHJcbiAgICAgICAgLy8gdGhpcy51YnN1YiA9IGFwcFN0b3JlLnN1YnNjcmliZSgocGF0aCwgcHJldiwgdmFsdWU6TWFwPHN0cmluZyxhbnk+KSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmICh2YWx1ZS5nZXQoJ2NyZWRlbnRpYWxzJykuYXV0aGVudGljYXRlZClcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMub25Mb2dpbigpO1xyXG4gICAgICAgIC8vIH0sICdhcHBkYicsIGZhbHNlKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIHRoaXMgaXMgYSBzaG9ydGhhbmQgdmVyc2lvbiB3aGljaCBhbGxvd3MgeW91IHRvIGp1c3QgcmVjZWl2ZSBiYWNrIHRoZSBjaGFuZ2VzXHJcbiAgICAgICAgLy8gdGhpcy51YnN1YiA9IGFwcFN0b3JlLnN1YigoYXBwZGI6TWFwPHN0cmluZyxhbnk+KSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHZhciBzdGF0dXMgPSBhcHBkYi5nZXQoJ2NyZWRlbnRpYWxzJykuZ2V0KCdhdXRoZW50aWNhdGVkJyk7XHJcbiAgICAgICAgLy8gICAgIHZhciB1c2VyID0gYXBwZGIuZ2V0KCdjcmVkZW50aWFscycpLmdldCgndXNlcicpO1xyXG4gICAgICAgIC8vICAgICB2YXIgcGFzcyA9IGFwcGRiLmdldCgnY3JlZGVudGlhbHMnKS5nZXQoJ3Bhc3MnKTtcclxuICAgICAgICAvLyAgICAgaWYgKHN0YXR1cylcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMub25Mb2dpbigpO1xyXG4gICAgICAgIC8vIH0sICdhcHBkYicsIGZhbHNlKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIHZhciB1YnN1YiA9IGFwcFN0b3JlLnN1YnNjcmliZSgoc3RhdGUpPT4ge1xyXG4gICAgICAgIC8vIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXV0aFVzZXIoaV91c2VyOnN0cmluZywgaV9wYXNzOnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5vbkxvZ2luKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkxvZ2luKCkge1xyXG4gICAgICAgIGJvb3Rib3guZGlhbG9nKHtcclxuICAgICAgICAgICAgY2xvc2VCdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJQbGVhc2Ugd2FpdCwgQXV0aGVudGljYXRpbmcuLi5cIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCIgXCJcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRUaW1lb3V0KChlKT0+IHtcclxuICAgICAgICAgICAgdGhpcy5teVJvdXRlci5uYXZpZ2F0ZShbJy9BcHBNYW5hZ2VyJ10pO1xyXG4gICAgICAgICAgICBib290Ym94LmhpZGVBbGwoKTtcclxuICAgICAgICB9LCAyMDApO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgbG9naW5OYW1lKG5hbWU6c3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy51c2VyID0gbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpbXBvcnRhbnQsIGJlIHN1cmUgdG8gcmVtZW1iZXIgdG8gdW5zdWJzY3JpYmUgZnJvbSBzdG9yZSBzdWJzY3JpcHRpb25zIHRvIHByZXZlbnQgbGVha3NcclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMudW5zdWIoKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
