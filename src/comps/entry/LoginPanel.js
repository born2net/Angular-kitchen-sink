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
var router_1 = require('angular2/router');
var router_2 = require('angular2/router');
var CommBroker_1 = require("../../services/CommBroker");
var Conts_1 = require("../../Conts");
var router_3 = require("angular2/router");
require('rxjs/add/observable/from');
require('rxjs/add/observable/fromEvent');
require('rxjs/add/operator/map');
require('rxjs/add/operator/bufferCount');
require('rxjs/add/operator/filter');
require('rxjs/add/operator/scan');
require('rxjs/add/operator/do');
require('rxjs/add/observable/range');
var angular2_redux_util_1 = require("angular2-redux-util");
var User = (function () {
    function User(obj) {
        this.id = obj && obj.id || Math.random();
        this.name = obj && obj.name || 'anonymous';
        this.pass = obj && obj.pass || '';
        this.gender = obj && obj.gender || 'male';
    }
    return User;
})();
exports.User = User;
var LoginPanel = (function () {
    function LoginPanel(appStore, router, commBroker) {
        this.appStore = appStore;
        this.commBroker = commBroker;
        this.myRouter = router;
        console.log('this is a test 4');
        var user = commBroker.getValue(Conts_1.Consts.Values().USER_NAME);
        this.user = user || '';
        this.pass = user || '';
        appStore.subscribe(function (objectPath, oldVal, newVal) {
            console.log('%s changed from %s to %s', objectPath, oldVal, newVal);
        }, 'notify', true);
        var ubsub = appStore.subscribe(function (objectPath, oldVal, newVal) {
        }, 'notify.data', false);
        var ubsub = appStore.subscribe(function (state) {
        });
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
    LoginPanel = __decorate([
        core_1.Injectable(),
        core_1.Component({
            selector: 'LoginPanel',
            directives: [router_1.ROUTER_DIRECTIVES, router_2.RouterLink],
            template: "\n                <MyChart></MyChart>\n                <div id=\"appLogin\" style=\"\">\n                  <form class=\"form-signin\" role=\"form\">\n                    <h2 class=\"form-signin-heading\"></h2>\n                    <input #userName id=\"userName\" type=\"text\" value=\"{{user}}\" class=\"form-control\" data-localize=\"username\" placeholder=\"Type anything\" required autofocus>\n                    <input #userPass id=\"userPass\" type=\"password\" value=\"{{pass}}\" class=\"form-control\" data-localize=\"password\" placeholder=\"Type anything\" required>\n                    <label class=\"checkbox\">\n                      <input id=\"rememberMe\" type=\"checkbox\" checked value=\"remember-me\">\n                      <span> Remember me </span></label>\n                    <button id=\"loginButton\" (click)=\"authUser(userName.value, userPass.value)\" class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">\n                      Sign in\n                    </button>\n                    <hr class=\"hrThin\"/>\n                    <a [routerLink]=\"['/ForgotPass', 'ForgotPass']\">Forgot password</a>\n                    <div id=\"languageSelectionLogin\"></div>\n                  </form>\n                </div>\n\n                <!-- <a [routerLink]=\"['/EntryPanelNoId', {id: 123}, 'Route4']\">To forgot pass</a> -->\n                <!-- <a [routerLink]=\"['/App1']\">Direct to App1</a><br/> -->\n                <!-- <a [routerLink]=\"['/App2']\">Direct to App2</a><br/> -->\n                <small>I am Login component and I am inside EntryPanel</small>"
        }), 
        __metadata('design:paramtypes', [angular2_redux_util_1.AppStore, router_3.Router, CommBroker_1.CommBroker])
    ], LoginPanel);
    return LoginPanel;
})();
exports.LoginPanel = LoginPanel;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2VudHJ5L2xvZ2lucGFuZWwudHMiXSwibmFtZXMiOlsiVXNlciIsIlVzZXIuY29uc3RydWN0b3IiLCJMb2dpblBhbmVsIiwiTG9naW5QYW5lbC5jb25zdHJ1Y3RvciIsIkxvZ2luUGFuZWwuYXV0aFVzZXIiLCJMb2dpblBhbmVsLm9uTG9naW4iLCJMb2dpblBhbmVsLmxvZ2luTmFtZSIsIkxvZ2luUGFuZWwudG9TdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBLHFCQUFvQyxlQUFlLENBQUMsQ0FBQTtBQUNwRCx1QkFBZ0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNsRCx1QkFBeUIsaUJBQWlCLENBQUMsQ0FBQTtBQUMzQywyQkFBeUIsMkJBQTJCLENBQUMsQ0FBQTtBQUNyRCxzQkFBcUIsYUFBYSxDQUFDLENBQUE7QUFDbkMsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMsUUFBTywwQkFBMEIsQ0FBQyxDQUFBO0FBQ2xDLFFBQU8sK0JBQStCLENBQUMsQ0FBQTtBQUN2QyxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFDL0IsUUFBTywrQkFBK0IsQ0FBQyxDQUFBO0FBQ3ZDLFFBQU8sMEJBQTBCLENBQUMsQ0FBQTtBQUNsQyxRQUFPLHdCQUF3QixDQUFDLENBQUE7QUFDaEMsUUFBTyxzQkFBc0IsQ0FBQyxDQUFBO0FBQzlCLFFBQU8sMkJBQTJCLENBQUMsQ0FBQTtBQUluQyxvQ0FBdUIscUJBQXFCLENBQUMsQ0FBQTtBQUU3QztJQU1JQSxjQUFZQSxHQUFRQTtRQUNoQkMsSUFBSUEsQ0FBQ0EsRUFBRUEsR0FBR0EsR0FBR0EsSUFBSUEsR0FBR0EsQ0FBQ0EsRUFBRUEsSUFBSUEsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0E7UUFDekNBLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLEdBQUdBLElBQUlBLEdBQUdBLENBQUNBLElBQUlBLElBQUlBLFdBQVdBLENBQUNBO1FBQzNDQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxHQUFH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QUNBO1lBQzNDQSxRQUFRQSxFQUFFQSxta0RBc0JpRUE7U0FDOUVBLENBQUNBOzttQkFnRERBO0lBQURBLGlCQUFDQTtBQUFEQSxDQTNFQSxBQTJFQ0EsSUFBQTtBQS9DWSxrQkFBVSxhQStDdEIsQ0FBQSIsImZpbGUiOiJjb21wcy9lbnRyeS9Mb2dpblBhbmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9hcHAuZC50c1wiIC8+XHJcblxyXG5pbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7Um91dGVyTGlua30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtDb21tQnJva2VyfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvQ29tbUJyb2tlclwiO1xyXG5pbXBvcnQge0NvbnN0c30gZnJvbSBcIi4uLy4uL0NvbnRzXCI7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9mcm9tJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb21FdmVudCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9idWZmZXJDb3VudCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zY2FuJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9yYW5nZSc7XHJcbmltcG9ydCB7U3ViamVjdH0gZnJvbSBcInJ4anMvU3ViamVjdFwiO1xyXG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSBcInJ4anMvc3ViamVjdC9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7QXBwU3RvcmV9IGZyb20gXCJhbmd1bGFyMi1yZWR1eC11dGlsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlciB7XHJcbiAgICBwdWJsaWMgaWQ6c3RyaW5nO1xyXG4gICAgcHVibGljIG5hbWU6c3RyaW5nO1xyXG4gICAgcHVibGljIHBhc3M6c3RyaW5nO1xyXG4gICAgcHVibGljIGdlbmRlcjpzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3Iob2JqPzphbnkpIHtcclxuICAgICAgICB0aGlzLmlkID0gb2JqICYmIG9iai5pZCB8fCBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG9iaiAmJiBvYmoubmFtZSB8fCAnYW5vbnltb3VzJztcclxuICAgICAgICB0aGlzLnBhc3MgPSBvYmogJiYgb2JqLnBhc3MgfHwgJyc7XHJcbiAgICAgICAgdGhpcy5nZW5kZXIgPSBvYmogJiYgb2JqLmdlbmRlciB8fCAnbWFsZSc7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ0xvZ2luUGFuZWwnLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXJMaW5rXSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgICAgICAgICA8TXlDaGFydD48L015Q2hhcnQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYXBwTG9naW5cIiBzdHlsZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm0tc2lnbmluXCIgcm9sZT1cImZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJmb3JtLXNpZ25pbi1oZWFkaW5nXCI+PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI3VzZXJOYW1lIGlkPVwidXNlck5hbWVcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwie3t1c2VyfX1cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGRhdGEtbG9jYWxpemU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiVHlwZSBhbnl0aGluZ1wiIHJlcXVpcmVkIGF1dG9mb2N1cz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI3VzZXJQYXNzIGlkPVwidXNlclBhc3NcIiB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT1cInt7cGFzc319XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBkYXRhLWxvY2FsaXplPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlR5cGUgYW55dGhpbmdcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicmVtZW1iZXJNZVwiIHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQgdmFsdWU9XCJyZW1lbWJlci1tZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IFJlbWVtYmVyIG1lIDwvc3Bhbj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJsb2dpbkJ1dHRvblwiIChjbGljayk9XCJhdXRoVXNlcih1c2VyTmFtZS52YWx1ZSwgdXNlclBhc3MudmFsdWUpXCIgY2xhc3M9XCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFNpZ24gaW5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3M9XCJoclRoaW5cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvRm9yZ290UGFzcycsICdGb3Jnb3RQYXNzJ11cIj5Gb3Jnb3QgcGFzc3dvcmQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImxhbmd1YWdlU2VsZWN0aW9uTG9naW5cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPCEtLSA8YSBbcm91dGVyTGlua109XCJbJy9FbnRyeVBhbmVsTm9JZCcsIHtpZDogMTIzfSwgJ1JvdXRlNCddXCI+VG8gZm9yZ290IHBhc3M8L2E+IC0tPlxyXG4gICAgICAgICAgICAgICAgPCEtLSA8YSBbcm91dGVyTGlua109XCJbJy9BcHAxJ11cIj5EaXJlY3QgdG8gQXBwMTwvYT48YnIvPiAtLT5cclxuICAgICAgICAgICAgICAgIDwhLS0gPGEgW3JvdXRlckxpbmtdPVwiWycvQXBwMiddXCI+RGlyZWN0IHRvIEFwcDI8L2E+PGJyLz4gLS0+XHJcbiAgICAgICAgICAgICAgICA8c21hbGw+SSBhbSBMb2dpbiBjb21wb25lbnQgYW5kIEkgYW0gaW5zaWRlIEVudHJ5UGFuZWw8L3NtYWxsPmBcclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luUGFuZWwge1xyXG4gICAgcHJpdmF0ZSB1c2VyOnN0cmluZztcclxuICAgIHByaXZhdGUgcGFzczpzdHJpbmc7XHJcbiAgICBwcml2YXRlIG15Um91dGVyOlJvdXRlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcFN0b3JlOkFwcFN0b3JlLCByb3V0ZXI6Um91dGVyLCBwcml2YXRlIGNvbW1Ccm9rZXI6Q29tbUJyb2tlcikge1xyXG4gICAgICAgIHRoaXMubXlSb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgaXMgYSB0ZXN0IDQnKTtcclxuICAgICAgICB2YXIgdXNlciA9IGNvbW1Ccm9rZXIuZ2V0VmFsdWUoQ29uc3RzLlZhbHVlcygpLlVTRVJfTkFNRSk7XHJcbiAgICAgICAgdGhpcy51c2VyID0gdXNlciB8fCAnJztcclxuICAgICAgICB0aGlzLnBhc3MgPSB1c2VyIHx8ICcnO1xyXG5cclxuICAgICAgICBhcHBTdG9yZS5zdWJzY3JpYmUoKG9iamVjdFBhdGgsIG9sZFZhbCwgbmV3VmFsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCclcyBjaGFuZ2VkIGZyb20gJXMgdG8gJXMnLCBvYmplY3RQYXRoLCBvbGRWYWwsIG5ld1ZhbClcclxuICAgICAgICB9LCAnbm90aWZ5JywgdHJ1ZSk7XHJcblxyXG4gICAgICAgIHZhciB1YnN1YiA9IGFwcFN0b3JlLnN1YnNjcmliZSgob2JqZWN0UGF0aCwgb2xkVmFsLCBuZXdWYWwpID0+IHtcclxuICAgICAgICB9LCAnbm90aWZ5LmRhdGEnLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIHZhciB1YnN1YiA9IGFwcFN0b3JlLnN1YnNjcmliZSgoc3RhdGUpPT4ge1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhdXRoVXNlcihpX3VzZXI6c3RyaW5nLCBpX3Bhc3M6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLm9uTG9naW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uTG9naW4oKSB7XHJcbiAgICAgICAgYm9vdGJveC5kaWFsb2coe1xyXG4gICAgICAgICAgICBjbG9zZUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlBsZWFzZSB3YWl0LCBBdXRoZW50aWNhdGluZy4uLlwiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIiBcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKGUpPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm15Um91dGVyLm5hdmlnYXRlKFsnL0FwcE1hbmFnZXInXSk7XHJcbiAgICAgICAgICAgIGJvb3Rib3guaGlkZUFsbCgpO1xyXG4gICAgICAgIH0sIDIwMCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBsb2dpbk5hbWUobmFtZTpzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnVzZXIgPSBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
