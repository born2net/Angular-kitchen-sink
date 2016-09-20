System.register(['@angular/core', 'rxjs/add/observable/from', 'rxjs/add/observable/fromEvent', 'rxjs/add/operator/buffer', 'rxjs/add/operator/bufferCount', 'rxjs/add/operator/delay', 'rxjs/add/operator/throttleTime', 'rxjs/add/operator/distinctUntilChanged', 'rxjs/add/operator/do', "../../Lib"], function(exports_1, context_1) {
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
    var core_1, Lib_1;
    var ForgotPass;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (_6) {},
            function (_7) {},
            function (_8) {},
            function (Lib_1_1) {
                Lib_1 = Lib_1_1;
            }],
        execute: function() {
            ForgotPass = (function () {
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
                    this.clickStream.emit('click');
                };
                ForgotPass = __decorate([
                    core_1.Component({
                        providers: [ForgotPass],
                        selector: 'ForgotPass',
                        template: "\n                <div>\n                  <form class=\"form-signin\" role=\"form\">\n                    <h2 class=\"form-signin-heading\"></h2>\n                    <button id=\"forgotPassButton\" [disabled]=\"disableButton\" (click)=\"onForgotPass($event)\" class=\"btn btn-lg btn-primary btn-block\">\n                      Forgot password\n                    </button>\n                    <hr class=\"hrThin\"/>\n                    <a [routerLink]=\"['/Login', {id: 'demo_user'}, 'Login']\">Back to login screen</a><br/>\n                    <small>(auto fill user by passing router args)</small>\n                    <div id=\"languageSelectionLogin\"></div>\n                  </form>\n                </div>\n                <!-- <a [routerLink]=\"['/App1']\">And back to Test1</a> -->\n                <br/>\n                <small>ForgotPass component and I am inside EntryPanel</small>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ForgotPass);
                return ForgotPass;
            }());
            exports_1("ForgotPass", ForgotPass);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2VudHJ5L0ZvcmdvdFBhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWtDQTtnQkFJSTtvQkFIUSxnQkFBVyxHQUFxQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztvQkFDbkQsa0JBQWEsR0FBVyxLQUFLLENBQUM7b0JBR2xDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDMUIsQ0FBQztnQkFLTyxtQ0FBYyxHQUF0QjtvQkFBQSxpQkFhQztvQkFaRyxJQUFJLGlCQUFpQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQzt3QkFDdEYsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUE7b0JBQ25CLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUs7d0JBQ1osU0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQzdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ1AsS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7d0JBQzlCLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBO29CQUNqQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2YsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQzt3QkFDekIsU0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQzt3QkFDeEIsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7b0JBQy9CLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBRU8saUNBQVksR0FBcEIsVUFBcUIsS0FBSztvQkFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ25DLENBQUM7Z0JBaERMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO3dCQUN2QixRQUFRLEVBQUUsWUFBWTt3QkFDdEIsUUFBUSxFQUFFLHM0QkFlaUU7cUJBQzlFLENBQUM7OzhCQUFBO2dCQThCRixpQkFBQztZQUFELENBN0JBLEFBNkJDLElBQUE7WUE3QkQsbUNBNkJDLENBQUEiLCJmaWxlIjoiY29tcHMvZW50cnkvRm9yZ290UGFzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYXBwLmQudHNcIi8+XHJcblxyXG5pbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb20nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZnJvbUV2ZW50JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9idWZmZXInO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2J1ZmZlckNvdW50JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWxheSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdGhyb3R0bGVUaW1lJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kaXN0aW5jdFVudGlsQ2hhbmdlZCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHtMaWJ9IGZyb20gXCIuLi8uLi9MaWJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgcHJvdmlkZXJzOiBbRm9yZ290UGFzc10sXHJcbiAgICBzZWxlY3RvcjogJ0ZvcmdvdFBhc3MnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybS1zaWduaW5cIiByb2xlPVwiZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImZvcm0tc2lnbmluLWhlYWRpbmdcIj48L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJmb3Jnb3RQYXNzQnV0dG9uXCIgW2Rpc2FibGVkXT1cImRpc2FibGVCdXR0b25cIiAoY2xpY2spPVwib25Gb3Jnb3RQYXNzKCRldmVudClcIiBjbGFzcz1cImJ0biBidG4tbGcgYnRuLXByaW1hcnkgYnRuLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBGb3Jnb3QgcGFzc3dvcmRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3M9XCJoclRoaW5cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvTG9naW4nLCB7aWQ6ICdkZW1vX3VzZXInfSwgJ0xvZ2luJ11cIj5CYWNrIHRvIGxvZ2luIHNjcmVlbjwvYT48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbD4oYXV0byBmaWxsIHVzZXIgYnkgcGFzc2luZyByb3V0ZXIgYXJncyk8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsYW5ndWFnZVNlbGVjdGlvbkxvZ2luXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPCEtLSA8YSBbcm91dGVyTGlua109XCJbJy9BcHAxJ11cIj5BbmQgYmFjayB0byBUZXN0MTwvYT4gLS0+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsPkZvcmdvdFBhc3MgY29tcG9uZW50IGFuZCBJIGFtIGluc2lkZSBFbnRyeVBhbmVsPC9zbWFsbD5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3Jnb3RQYXNzIHtcclxuICAgIHByaXZhdGUgY2xpY2tTdHJlYW06RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBwcml2YXRlIGRpc2FibGVCdXR0b246Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZm9yZ290UGFzc0luaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFuIGV4YW1wbGUgb2YgYSBjdXN0b20gZXZlbnQgdXNpbmcgT2JzZXJ2YWJsZSBhbmQgZG91YmxlIGNsaWNrIHRoZSBMb2dvdXQgYnV0dG9uXHJcbiAgICAgKiovXHJcbiAgICBwcml2YXRlIGZvcmdvdFBhc3NJbml0KCl7XHJcbiAgICAgICAgdmFyIGRvdWJsZUNsaWNrU3RyZWFtID0gdGhpcy5jbGlja1N0cmVhbS5idWZmZXIodGhpcy5jbGlja1N0cmVhbS50aHJvdHRsZVRpbWUoNDUwKSkubWFwKChlKT0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGUubGVuZ3RoXHJcbiAgICAgICAgfSkuZmlsdGVyKChlOmFueSk9PiB7XHJcbiAgICAgICAgICAgIExpYi5sb2coJ3RvdGFsIGNsaWNrcyAnICsgZSk7XHJcbiAgICAgICAgICAgIGlmIChlID09IDIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVCdXR0b24gPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gZSA9PSAyXHJcbiAgICAgICAgfSkuZGVsYXkoMjAwMCk7XHJcbiAgICAgICAgZG91YmxlQ2xpY2tTdHJlYW0uc3Vic2NyaWJlKGU9PiB7XHJcbiAgICAgICAgICAgIExpYi5sb2coJ2RvdWJsZSBjbGljaycpO1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVCdXR0b24gPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uRm9yZ290UGFzcyhldmVudCkge1xyXG4gICAgICAgIHRoaXMuY2xpY2tTdHJlYW0uZW1pdCgnY2xpY2snKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
