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
require('rxjs/add/observable/from');
require('rxjs/add/observable/fromEvent');
require('rxjs/add/operator/buffer');
require('rxjs/add/operator/bufferCount');
require('rxjs/add/operator/delay');
require('rxjs/add/operator/throttleTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/do');
var Lib_1 = require("../../Lib");
var ForgotPass = (function () {
    function ForgotPass() {
        this.clickStream = new core_1.EventEmitter();
        this.disableButton = false;
        this.forgotPassInit();
    }
    ForgotPass.prototype.forgotPassInit = function () {
        var _this = this;
        var doubleClickStream = this.clickStream.buffer(this.clickStream.throttleTime(450)).map(function (e) {
            return e.length;
        }).filter(function (e) {
            Lib_1.Lib.log('total clicks ' + e);
            if (e == 2)
                _this.disableButton = true;
            return e == 2;
        }).delay(2000);
        doubleClickStream.subscribe(function (e) {
            Lib_1.Lib.log('double click');
            _this.disableButton = false;
        });
    };
    ForgotPass.prototype.onForgotPass = function (event) {
        this.clickStream.next('click');
    };
    ForgotPass = __decorate([
        core_1.Component({
            providers: [ForgotPass],
            selector: 'ForgotPass',
            template: "\n                <div>\n                  <form class=\"form-signin\" role=\"form\">\n                    <h2 class=\"form-signin-heading\"></h2>\n                    <button id=\"forgotPassButton\" [disabled]=\"disableButton\" (click)=\"onForgotPass($event)\" class=\"btn btn-lg btn-primary btn-block\">\n                      Forgot password\n                    </button>\n                    <hr class=\"hrThin\"/>\n                    <a [routerLink]=\"['/Login', {id: 'demo_user'}, 'Login']\">Back to login screen</a><br/>\n                    <small>(auto fill user by passing router args)</small>\n                    <div id=\"languageSelectionLogin\"></div>\n                  </form>\n                </div>\n                <!-- <a [routerLink]=\"['/App1']\">And back to Test1</a> -->\n                <br/>\n                <small>ForgotPass component and I am inside EntryPanel</small>",
            directives: [router_1.ROUTER_DIRECTIVES, router_2.RouterLink]
        }), 
        __metadata('design:paramtypes', [])
    ], ForgotPass);
    return ForgotPass;
})();
exports.ForgotPass = ForgotPass;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2VudHJ5L2ZvcmdvdHBhc3MudHMiXSwibmFtZXMiOlsiRm9yZ290UGFzcyIsIkZvcmdvdFBhc3MuY29uc3RydWN0b3IiLCJGb3Jnb3RQYXNzLmZvcmdvdFBhc3NJbml0IiwiRm9yZ290UGFzcy5vbkZvcmdvdFBhc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBLHFCQUFzQyxlQUFlLENBQUMsQ0FBQTtBQUN0RCx1QkFBZ0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNsRCx1QkFBeUIsaUJBQWlCLENBQUMsQ0FBQTtBQUMzQyxRQUFPLDBCQUEwQixDQUFDLENBQUE7QUFDbEMsUUFBTywrQkFBK0IsQ0FBQyxDQUFBO0FBQ3ZDLFFBQU8sMEJBQTBCLENBQUMsQ0FBQTtBQUNsQyxRQUFPLCtCQUErQixDQUFDLENBQUE7QUFDdkMsUUFBTyx5QkFBeUIsQ0FBQyxDQUFBO0FBQ2pDLFFBQU8sZ0NBQWdDLENBQUMsQ0FBQTtBQUN4QyxRQUFPLHdDQUF3QyxDQUFDLENBQUE7QUFDaEQsUUFBTyxzQkFBc0IsQ0FBQyxDQUFBO0FBRTlCLG9CQUFrQixXQUFXLENBQUMsQ0FBQTtBQUU5QjtJQXlCSUE7UUFIUUMsZ0JBQVdBLEdBQXFCQSxJQUFJQSxtQkFBWUEsRUFBRUEsQ0FBQ0E7UUFDbkRBLGtCQUFhQSxHQUFXQSxLQUFLQSxDQUFDQTtRQUdsQ0EsSUFBSUEsQ0FBQ0EsY0FBY0EsRUFBRUEsQ0FBQ0E7SUFDMUJBLENBQUNBO0lBS09ELG1DQUFjQSxHQUF0QkE7UUFBQUUsaUJBYUNBO1FBWkdBLElBQUlBLGlCQUFpQkEsR0FBR0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsVUFBQ0EsQ0FBQ0E7WUFDdEZBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLE1BQU1BLENBQUFBO1FBQ25CQSxDQUFDQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxVQUFDQSxDQUFLQTtZQUNaQSxTQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxlQUFlQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM3QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ1BBLEtBQUlBLENBQUNBLGFBQWFBLEdBQUdBLElBQUlBLENBQUNBO1lBQzlCQSxNQUFNQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFBQTtRQUNqQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDZkEsaUJBQWlCQSxDQUFDQSxTQUFTQSxDQUFDQSxVQUFBQSxDQUFDQTtZQUN6QkEsU0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQ0E7WUFDeEJBLEtBQUlBLENBQUNBLGFBQWFBLEdBQUdBLEtBQUtBLENBQUNBO1FBQy9CQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNQQSxDQUFDQTtJQUVPRixpQ0FBWUEsR0FBcEJBLFVBQXFCQSxLQUFLQTtRQUN0QkcsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7SUFDbkNBLENBQUNBO0lBakRMSDtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDUEEsU0FBU0EsRUFBRUEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7WUFDdkJBLFFBQVFBLEVBQUVBLFlBQVlBO1lBQ3RCQSxRQUFRQSxFQUFFQSxzNEJBZWlFQTtZQUMzRUEsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWlCQSxFQUFFQSxtQkFBVUEsQ0FBQ0E7U0FDOUNBLENBQUNBOzttQkE4QkRBO0lBQURBLGlCQUFDQTtBQUFEQSxDQWxEQSxBQWtEQ0EsSUFBQTtBQTdCWSxrQkFBVSxhQTZCdEIsQ0FBQSIsImZpbGUiOiJjb21wcy9lbnRyeS9Gb3Jnb3RQYXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9hcHAuZC50c1wiLz5cclxuXHJcbmltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQge1JvdXRlckxpbmt9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9mcm9tJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb21FdmVudCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvYnVmZmVyJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9idWZmZXJDb3VudCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGVsYXknO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3Rocm90dGxlVGltZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGlzdGluY3RVbnRpbENoYW5nZWQnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7TGlifSBmcm9tIFwiLi4vLi4vTGliXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHByb3ZpZGVyczogW0ZvcmdvdFBhc3NdLFxyXG4gICAgc2VsZWN0b3I6ICdGb3Jnb3RQYXNzJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm0tc2lnbmluXCIgcm9sZT1cImZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJmb3JtLXNpZ25pbi1oZWFkaW5nXCI+PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZm9yZ290UGFzc0J1dHRvblwiIFtkaXNhYmxlZF09XCJkaXNhYmxlQnV0dG9uXCIgKGNsaWNrKT1cIm9uRm9yZ290UGFzcygkZXZlbnQpXCIgY2xhc3M9XCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRm9yZ290IHBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzPVwiaHJUaGluXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL0xvZ2luJywge2lkOiAnZGVtb191c2VyJ30sICdMb2dpbiddXCI+QmFjayB0byBsb2dpbiBzY3JlZW48L2E+PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8c21hbGw+KGF1dG8gZmlsbCB1c2VyIGJ5IHBhc3Npbmcgcm91dGVyIGFyZ3MpPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibGFuZ3VhZ2VTZWxlY3Rpb25Mb2dpblwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwhLS0gPGEgW3JvdXRlckxpbmtdPVwiWycvQXBwMSddXCI+QW5kIGJhY2sgdG8gVGVzdDE8L2E+IC0tPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIDxzbWFsbD5Gb3Jnb3RQYXNzIGNvbXBvbmVudCBhbmQgSSBhbSBpbnNpZGUgRW50cnlQYW5lbDwvc21hbGw+YCxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgUm91dGVyTGlua11cclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcmdvdFBhc3Mge1xyXG4gICAgcHJpdmF0ZSBjbGlja1N0cmVhbTpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIHByaXZhdGUgZGlzYWJsZUJ1dHRvbjpib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5mb3Jnb3RQYXNzSW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQW4gZXhhbXBsZSBvZiBhIGN1c3RvbSBldmVudCB1c2luZyBPYnNlcnZhYmxlIGFuZCBkb3VibGUgY2xpY2sgdGhlIExvZ291dCBidXR0b25cclxuICAgICAqKi9cclxuICAgIHByaXZhdGUgZm9yZ290UGFzc0luaXQoKXtcclxuICAgICAgICB2YXIgZG91YmxlQ2xpY2tTdHJlYW0gPSB0aGlzLmNsaWNrU3RyZWFtLmJ1ZmZlcih0aGlzLmNsaWNrU3RyZWFtLnRocm90dGxlVGltZSg0NTApKS5tYXAoKGUpPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZS5sZW5ndGhcclxuICAgICAgICB9KS5maWx0ZXIoKGU6YW55KT0+IHtcclxuICAgICAgICAgICAgTGliLmxvZygndG90YWwgY2xpY2tzICcgKyBlKTtcclxuICAgICAgICAgICAgaWYgKGUgPT0gMilcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZUJ1dHRvbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiBlID09IDJcclxuICAgICAgICB9KS5kZWxheSgyMDAwKTtcclxuICAgICAgICBkb3VibGVDbGlja1N0cmVhbS5zdWJzY3JpYmUoZT0+IHtcclxuICAgICAgICAgICAgTGliLmxvZygnZG91YmxlIGNsaWNrJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZUJ1dHRvbiA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Gb3Jnb3RQYXNzKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5jbGlja1N0cmVhbS5uZXh0KCdjbGljaycpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
