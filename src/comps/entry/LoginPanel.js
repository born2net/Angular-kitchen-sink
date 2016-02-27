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
var bootbox = require('bootbox');
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
            directives: [router_1.ROUTER_DIRECTIVES, router_2.RouterLink],
            template: "\n                <MyChart></MyChart>\n                <div id=\"appLogin\" style=\"\">\n                  <form class=\"form-signin\" role=\"form\">\n                    <h2 class=\"form-signin-heading\"></h2>\n                    <input #userName id=\"userName\" type=\"text\" value=\"{{user}}\" class=\"form-control\" data-localize=\"username\" placeholder=\"Type anything\" required autofocus>\n                    <input #userPass id=\"userPass\" type=\"password\" value=\"{{pass}}\" class=\"form-control\" data-localize=\"password\" placeholder=\"Type anything\" required>\n                    <label class=\"checkbox\">\n                      <input id=\"rememberMe\" type=\"checkbox\" checked value=\"remember-me\">\n                      <span> Remember me </span></label>\n                    <button id=\"loginButton\" (click)=\"authUser(userName.value, userPass.value)\" class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">\n                      Sign in\n                    </button>\n                    <hr class=\"hrThin\"/>\n                    <a [routerLink]=\"['/ForgotPass', 'ForgotPass']\">Forgot password</a>\n                    <div id=\"languageSelectionLogin\"></div>\n                  </form>\n                </div>\n\n                <!-- <a [routerLink]=\"['/EntryPanelNoId', {id: 123}, 'Route4']\">To forgot pass</a> -->\n                <!-- <a [routerLink]=\"['/App1']\">Direct to App1</a><br/> -->\n                <!-- <a [routerLink]=\"['/App2']\">Direct to App2</a><br/> -->\n                <small>I am Login component and I am inside EntryPanel</small>"
        }), 
        __metadata('design:paramtypes', [angular2_redux_util_1.AppStore, router_3.Router, CommBroker_1.CommBroker])
    ], LoginPanel);
    return LoginPanel;
})();
exports.LoginPanel = LoginPanel;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2VudHJ5L2xvZ2lucGFuZWwudHMiXSwibmFtZXMiOlsiVXNlciIsIlVzZXIuY29uc3RydWN0b3IiLCJMb2dpblBhbmVsIiwiTG9naW5QYW5lbC5jb25zdHJ1Y3RvciIsIkxvZ2luUGFuZWwuYXV0aFVzZXIiLCJMb2dpblBhbmVsLm9uTG9naW4iLCJMb2dpblBhbmVsLmxvZ2luTmFtZSIsIkxvZ2luUGFuZWwudG9TdHJpbmciLCJMb2dpblBhbmVsLm5nT25EZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQSxxQkFBb0MsZUFBZSxDQUFDLENBQUE7QUFDcEQsdUJBQWdDLGlCQUFpQixDQUFDLENBQUE7QUFDbEQsdUJBQXlCLGlCQUFpQixDQUFDLENBQUE7QUFDM0MsMkJBQXlCLDJCQUEyQixDQUFDLENBQUE7QUFDckQsc0JBQXFCLGFBQWEsQ0FBQyxDQUFBO0FBQ25DLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLFFBQU8sMEJBQTBCLENBQUMsQ0FBQTtBQUNsQyxRQUFPLCtCQUErQixDQUFDLENBQUE7QUFDdkMsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBQy9CLFFBQU8sK0JBQStCLENBQUMsQ0FBQTtBQUN2QyxRQUFPLDBCQUEwQixDQUFDLENBQUE7QUFDbEMsUUFBTyx3QkFBd0IsQ0FBQyxDQUFBO0FBQ2hDLFFBQU8sc0JBQXNCLENBQUMsQ0FBQTtBQUM5QixRQUFPLDJCQUEyQixDQUFDLENBQUE7QUFJbkMsb0NBQXVCLHFCQUFxQixDQUFDLENBQUE7QUFFN0MsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRWpDO0lBTUlBLGNBQVlBLEdBQVFBO1FBQ2hCQyxJQUFJQSxDQUFDQSxFQUFFQSxHQUFHQSxHQUFHQSxJQUFJQSxHQUFHQSxDQUFDQSxFQUFFQSxJQUFJQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTtRQUN6Q0EsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsR0FBR0EsSUFBSUEs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SUFBREEsaUJBQUNBO0FBQURBLENBekdBLEFBeUdDQSxJQUFBO0FBN0VZLGtCQUFVLGFBNkV0QixDQUFBIiwiZmlsZSI6ImNvbXBzL2VudHJ5L0xvZ2luUGFuZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL2FwcC5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCB7Q29tcG9uZW50LCBJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtSb3V0ZXJMaW5rfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQge0NvbW1Ccm9rZXJ9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9Db21tQnJva2VyXCI7XHJcbmltcG9ydCB7Q29uc3RzfSBmcm9tIFwiLi4vLi4vQ29udHNcIjtcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb20nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZnJvbUV2ZW50JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2J1ZmZlckNvdW50JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXInO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3NjYW4nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3JhbmdlJztcclxuaW1wb3J0IHtTdWJqZWN0fSBmcm9tIFwicnhqcy9TdWJqZWN0XCI7XHJcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tIFwicnhqcy9zdWJqZWN0L0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHtBcHBTdG9yZX0gZnJvbSBcImFuZ3VsYXIyLXJlZHV4LXV0aWxcIjtcclxuXHJcbnZhciBib290Ym94ID0gcmVxdWlyZSgnYm9vdGJveCcpO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXIge1xyXG4gICAgcHVibGljIGlkOnN0cmluZztcclxuICAgIHB1YmxpYyBuYW1lOnN0cmluZztcclxuICAgIHB1YmxpYyBwYXNzOnN0cmluZztcclxuICAgIHB1YmxpYyBnZW5kZXI6c3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG9iaj86YW55KSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IG9iaiAmJiBvYmouaWQgfHwgTWF0aC5yYW5kb20oKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBvYmogJiYgb2JqLm5hbWUgfHwgJ2Fub255bW91cyc7XHJcbiAgICAgICAgdGhpcy5wYXNzID0gb2JqICYmIG9iai5wYXNzIHx8ICcnO1xyXG4gICAgICAgIHRoaXMuZ2VuZGVyID0gb2JqICYmIG9iai5nZW5kZXIgfHwgJ21hbGUnO1xyXG4gICAgfVxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdMb2dpblBhbmVsJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgUm91dGVyTGlua10sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgICAgICAgICAgPE15Q2hhcnQ+PC9NeUNoYXJ0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImFwcExvZ2luXCIgc3R5bGU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJmb3JtLXNpZ25pblwiIHJvbGU9XCJmb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiZm9ybS1zaWduaW4taGVhZGluZ1wiPjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0ICN1c2VyTmFtZSBpZD1cInVzZXJOYW1lXCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cInt7dXNlcn19XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBkYXRhLWxvY2FsaXplPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIlR5cGUgYW55dGhpbmdcIiByZXF1aXJlZCBhdXRvZm9jdXM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0ICN1c2VyUGFzcyBpZD1cInVzZXJQYXNzXCIgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9XCJ7e3Bhc3N9fVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgZGF0YS1sb2NhbGl6ZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJUeXBlIGFueXRoaW5nXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInJlbWVtYmVyTWVcIiB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkIHZhbHVlPVwicmVtZW1iZXItbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBSZW1lbWJlciBtZSA8L3NwYW4+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwibG9naW5CdXR0b25cIiAoY2xpY2spPVwiYXV0aFVzZXIodXNlck5hbWUudmFsdWUsIHVzZXJQYXNzLnZhbHVlKVwiIGNsYXNzPVwiYnRuIGJ0bi1sZyBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTaWduIGluXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzPVwiaHJUaGluXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL0ZvcmdvdFBhc3MnLCAnRm9yZ290UGFzcyddXCI+Rm9yZ290IHBhc3N3b3JkPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsYW5ndWFnZVNlbGVjdGlvbkxvZ2luXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gPGEgW3JvdXRlckxpbmtdPVwiWycvRW50cnlQYW5lbE5vSWQnLCB7aWQ6IDEyM30sICdSb3V0ZTQnXVwiPlRvIGZvcmdvdCBwYXNzPC9hPiAtLT5cclxuICAgICAgICAgICAgICAgIDwhLS0gPGEgW3JvdXRlckxpbmtdPVwiWycvQXBwMSddXCI+RGlyZWN0IHRvIEFwcDE8L2E+PGJyLz4gLS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL0FwcDInXVwiPkRpcmVjdCB0byBBcHAyPC9hPjxici8+IC0tPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsPkkgYW0gTG9naW4gY29tcG9uZW50IGFuZCBJIGFtIGluc2lkZSBFbnRyeVBhbmVsPC9zbWFsbD5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpblBhbmVsIHtcclxuICAgIHByaXZhdGUgdXNlcjpzdHJpbmc7XHJcbiAgICBwcml2YXRlIHBhc3M6c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBteVJvdXRlcjpSb3V0ZXI7XHJcbiAgICBwcml2YXRlIHVuc3ViOkZ1bmN0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwU3RvcmU6QXBwU3RvcmUsIHJvdXRlcjpSb3V0ZXIsIHByaXZhdGUgY29tbUJyb2tlcjpDb21tQnJva2VyKSB7XHJcbiAgICAgICAgdGhpcy5teVJvdXRlciA9IHJvdXRlcjtcclxuICAgICAgICBjb25zb2xlLmxvZygndGhpcyBpcyBhIHRlc3QgNCcpO1xyXG4gICAgICAgIHZhciB1c2VyID0gY29tbUJyb2tlci5nZXRWYWx1ZShDb25zdHMuVmFsdWVzKCkuVVNFUl9OQU1FKTtcclxuICAgICAgICB0aGlzLnVzZXIgPSB1c2VyIHx8ICcnO1xyXG4gICAgICAgIHRoaXMucGFzcyA9IHVzZXIgfHwgJyc7XHJcblxyXG4gICAgICAgIHRoaXMudW5zdWIgPSBhcHBTdG9yZS5zdWJzY3JpYmUoKG9iamVjdFBhdGgsIG9sZFZhbCwgbmV3VmFsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCclcyBjaGFuZ2VkIGZyb20gJXMgdG8gJXMnLCBvYmplY3RQYXRoLCBvbGRWYWwsIG5ld1ZhbClcclxuICAgICAgICB9LCAnbm90aWZ5JywgdHJ1ZSk7XHJcblxyXG4gICAgICAgIC8vIG1vcmUgZXhhbXBsZXMgb2Ygc3Vic2NyaWJpbmcgdG8gc3RvcmVcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIHVzZUlzRXF1YWwgaXMgc2V0IHRvIHRydWUgZm9yIGRlZXAgTWFwIGVxdWFsaXR5XHJcbiAgICAgICAgLy8gYXBwU3RvcmUuc3Vic2NyaWJlKChvYmplY3RQYXRoLCBvbGRWYWwsIG5ld1ZhbCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnJXMgY2hhbmdlZCBmcm9tICVzIHRvICVzJywgb2JqZWN0UGF0aCwgb2xkVmFsLCBuZXdWYWwpXHJcbiAgICAgICAgLy8gfSwgJ25vdGlmeScsIHRydWUpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gdXNlSXNFcXVhbCBpcyBzZXQgdG8gZmFsc2UgZm9yIG5vcm1hbCBlcXVhbGl0eVxyXG4gICAgICAgIC8vIHZhciB1YnN1YiA9IGFwcFN0b3JlLnN1YnNjcmliZSgob2JqZWN0UGF0aCwgb2xkVmFsLCBuZXdWYWwpID0+IHtcclxuICAgICAgICAvLyB9LCAnbm90aWZ5LmRhdGEnLCBmYWxzZSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyB3aXRoIGNhc3RpbmdcclxuICAgICAgICAvLyB0aGlzLnVic3ViID0gYXBwU3RvcmUuc3Vic2NyaWJlKChwYXRoLCBwcmV2LCB2YWx1ZTpNYXA8c3RyaW5nLGFueT4pID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKHZhbHVlLmdldCgnY3JlZGVudGlhbHMnKS5hdXRoZW50aWNhdGVkKVxyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5vbkxvZ2luKCk7XHJcbiAgICAgICAgLy8gfSwgJ2FwcGRiJywgZmFsc2UpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gdGhpcyBpcyBhIHNob3J0aGFuZCB2ZXJzaW9uIHdoaWNoIGFsbG93cyB5b3UgdG8ganVzdCByZWNlaXZlIGJhY2sgdGhlIGNoYW5nZXNcclxuICAgICAgICAvLyB0aGlzLnVic3ViID0gYXBwU3RvcmUuc3ViKChhcHBkYjpNYXA8c3RyaW5nLGFueT4pID0+IHtcclxuICAgICAgICAvLyAgICAgdmFyIHN0YXR1cyA9IGFwcGRiLmdldCgnY3JlZGVudGlhbHMnKS5nZXQoJ2F1dGhlbnRpY2F0ZWQnKTtcclxuICAgICAgICAvLyAgICAgdmFyIHVzZXIgPSBhcHBkYi5nZXQoJ2NyZWRlbnRpYWxzJykuZ2V0KCd1c2VyJyk7XHJcbiAgICAgICAgLy8gICAgIHZhciBwYXNzID0gYXBwZGIuZ2V0KCdjcmVkZW50aWFscycpLmdldCgncGFzcycpO1xyXG4gICAgICAgIC8vICAgICBpZiAoc3RhdHVzKVxyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5vbkxvZ2luKCk7XHJcbiAgICAgICAgLy8gfSwgJ2FwcGRiJywgZmFsc2UpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gdmFyIHVic3ViID0gYXBwU3RvcmUuc3Vic2NyaWJlKChzdGF0ZSk9PiB7XHJcbiAgICAgICAgLy8gfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhdXRoVXNlcihpX3VzZXI6c3RyaW5nLCBpX3Bhc3M6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLm9uTG9naW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uTG9naW4oKSB7XHJcbiAgICAgICAgYm9vdGJveC5kaWFsb2coe1xyXG4gICAgICAgICAgICBjbG9zZUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlBsZWFzZSB3YWl0LCBBdXRoZW50aWNhdGluZy4uLlwiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIiBcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKGUpPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm15Um91dGVyLm5hdmlnYXRlKFsnL0FwcE1hbmFnZXInXSk7XHJcbiAgICAgICAgICAgIGJvb3Rib3guaGlkZUFsbCgpO1xyXG4gICAgICAgIH0sIDIwMCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBsb2dpbk5hbWUobmFtZTpzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnVzZXIgPSBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGltcG9ydGFudCwgYmUgc3VyZSB0byByZW1lbWJlciB0byB1bnN1YnNjcmliZSBmcm9tIHN0b3JlIHN1YnNjcmlwdGlvbnMgdG8gcHJldmVudCBsZWFrc1xyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy51bnN1YigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
