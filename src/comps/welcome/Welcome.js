var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var router_1 = require("angular2/router");
var core_1 = require("angular2/core");
var Welcome = (function () {
    function Welcome(params) {
        this.someId = 'App1' + Math.random();
        this.showTypedObjectArg({
            styles1: ['foo', 'bar'],
            styles2: [1, 2]
        });
    }
    Welcome.prototype.showTypedObjectArg = function (_a) {
        var _b = _a === void 0 ? {} : _a, styles1 = _b.styles1, styles2 = _b.styles2;
    };
    Welcome.prototype.ngAfterContentInit = function () {
    };
    Welcome = __decorate([
        core_1.Component({
            styles: ["\n        #routerLinks {\n            padding: 20px;\n        }\n    "],
            template: "\n                <div id=\"routerLinks\">\n                    <h4>Direct router shortcut links:</h4>\n                    <a [routerLink]=\"['/Login', 'Login']\">To Login screen</a><br/>\n                    <a [routerLink]=\"['/Login', {id: 'Sean-Levy'}, 'Login']\">To Login screen with demo user args</a><br/>\n                    <a [routerLink]=\"['/ForgotPass', 'ForgotPass']\">To Forgot Password screen</a><br/>\n                    <a [routerLink]=\"['/AppManager']\">To App manager</a><br/>\n                    <a [routerLink]=\"['/App1']\">To App1</a><br/>\n                    <a [routerLink]=\"['/App2']\">To App2</a><br/>\n                    <a [routerLink]=\"['/App3']\">To App3</a><br/>\n                    <br/><small>I am Welcome component</small>\n                </div>\n                ",
            directives: [router_1.ROUTER_DIRECTIVES, router_1.RouterLink]
        }), 
        __metadata('design:paramtypes', [router_1.RouteParams])
    ], Welcome);
    return Welcome;
})();
exports.Welcome = Welcome;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL3dlbGNvbWUvd2VsY29tZS50cyJdLCJuYW1lcyI6WyJXZWxjb21lIiwiV2VsY29tZS5jb25zdHJ1Y3RvciIsIldlbGNvbWUuc2hvd1R5cGVkT2JqZWN0QXJnIiwiV2VsY29tZS5uZ0FmdGVyQ29udGVudEluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVCQUF5RCxpQkFBaUIsQ0FBQyxDQUFBO0FBQzNFLHFCQUEwQyxlQUFlLENBQUMsQ0FBQTtBQUsxRDtJQXdCSUEsaUJBQVlBLE1BQWtCQTtRQUMxQkMsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0E7UUFLckNBLElBQUlBLENBQUNBLGtCQUFrQkEsQ0FBQ0E7WUFDcEJBLE9BQU9BLEVBQUVBLENBQUNBLEtBQUtBLEVBQUVBLEtBQUtBLENBQUNBO1lBQ3ZCQSxPQUFPQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtTQUNsQkEsQ0FBQ0EsQ0FBQUE7SUFDTkEsQ0FBQ0E7SUFFT0Qsb0NBQWtCQSxHQUExQkEsVUFBMkJBLEVBQWlFQTtpQ0FBRkUsRUFBRUEsT0FBaEVBLE9BQU9BLGVBQUVBLE9BQU9BO0lBRTVDQSxDQUFDQTtJQUdERixvQ0FBa0JBLEdBQWxCQTtJQUNBRyxDQUFDQTtJQTFDTEg7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1BBLE1BQU1BLEVBQUVBLENBQUNBLHVFQUlSQSxDQUFDQTtZQUNGQSxRQUFRQSxFQUFFQSw0eUJBWUdBO1lBQ2JBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFpQkEsRUFBRUEsbUJBQVVBLENBQUNBO1NBQzlDQSxDQUFDQTs7Z0JBNENEQTtJQUFEQSxjQUFDQTtBQUFEQSxDQWhFQSxBQWdFQ0EsSUFBQTtBQTNDWSxlQUFPLFVBMkNuQixDQUFBIiwiZmlsZSI6ImNvbXBzL3dlbGNvbWUvV2VsY29tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlUGFyYW1zLCBSb3V0ZXJMaW5rfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50LCBBZnRlckNvbnRlbnRJbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG4vKipcclxuIEdlbmVyYWwgcm91dGUgbGlua3NcclxuIEBjbGFzcyBXZWxjb21lXHJcbiAqKi9cclxuQENvbXBvbmVudCh7XHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgICAgI3JvdXRlckxpbmtzIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICB9XHJcbiAgICBgXSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicm91dGVyTGlua3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQ+RGlyZWN0IHJvdXRlciBzaG9ydGN1dCBsaW5rczo8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL0xvZ2luJywgJ0xvZ2luJ11cIj5UbyBMb2dpbiBzY3JlZW48L2E+PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9Mb2dpbicsIHtpZDogJ1NlYW4tTGV2eSd9LCAnTG9naW4nXVwiPlRvIExvZ2luIHNjcmVlbiB3aXRoIGRlbW8gdXNlciBhcmdzPC9hPjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvRm9yZ290UGFzcycsICdGb3Jnb3RQYXNzJ11cIj5UbyBGb3Jnb3QgUGFzc3dvcmQgc2NyZWVuPC9hPjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvQXBwTWFuYWdlciddXCI+VG8gQXBwIG1hbmFnZXI8L2E+PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9BcHAxJ11cIj5UbyBBcHAxPC9hPjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvQXBwMiddXCI+VG8gQXBwMjwvYT48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL0FwcDMnXVwiPlRvIEFwcDM8L2E+PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPjxzbWFsbD5JIGFtIFdlbGNvbWUgY29tcG9uZW50PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgUm91dGVyTGlua11cclxufSlcclxuZXhwb3J0IGNsYXNzIFdlbGNvbWUgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuICAgIHByaXZhdGUgc29tZUlkOnN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6Um91dGVQYXJhbXMpIHtcclxuICAgICAgICB0aGlzLnNvbWVJZCA9ICdBcHAxJyArIE1hdGgucmFuZG9tKCk7XHJcblxyXG4gICAgICAgIC8vIGFuIGV4YW1wbGUgb2YgcGFzc2luZyBhIG9wdGlvbmFsLCB0eXBlZCBvYmplY3QgaW5zdGVhZFxyXG4gICAgICAgIC8vIG9mIHVzaW5nIHRoZSBvbGQgd2F5IG9mOiBvcHRzIHx8IG9wdHMgPSB7fSBhbmQgaXQgYXV0byBtYXBzXHJcbiAgICAgICAgLy8gbWF0Y2hpbmcgZmllbGRzXHJcbiAgICAgICAgdGhpcy5zaG93VHlwZWRPYmplY3RBcmcoe1xyXG4gICAgICAgICAgICBzdHlsZXMxOiBbJ2ZvbycsICdiYXInXSwgLy8gb3B0aW9uYWxcclxuICAgICAgICAgICAgc3R5bGVzMjogWzEsIDJdIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dUeXBlZE9iamVjdEFyZyh7c3R5bGVzMSwgc3R5bGVzMn06IHtzdHlsZXMxPzogc3RyaW5nW10sIHN0eWxlczI/OiBudW1iZXJbXX0gPSB7fSkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coc3R5bGVzMSArICcgJyArIHN0eWxlczIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBjb21wb25lbnQgbGlmZSBjeWNsZXMgKiovXHJcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICB9XHJcbiAgICAvL25nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIC8vICAgIGNvbnNvbGUubG9nKDIpO1xyXG4gICAgLy99XHJcbiAgICAvL25nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcclxuICAgIC8vICAgIGNvbnNvbGUubG9nKDMpO1xyXG4gICAgLy99XHJcbiAgICAvL25nT25Jbml0KCkge1xyXG4gICAgLy8gICAgY29uc29sZS5sb2coNCk7XHJcbiAgICAvL31cclxuICAgIC8vbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAvLyAgICBjb25zb2xlLmxvZyg1KTtcclxuICAgIC8vfVxyXG4gICAgLy9uZ0RvQ2hlY2soKSB7XHJcbiAgICAvLyAgICBjb25zb2xlLmxvZyg2KTtcclxuICAgIC8vfVxyXG4gICAgLy9uZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XHJcbiAgICAvLyAgICBjb25zb2xlLmxvZyg3KTtcclxuICAgIC8vfVxyXG4gICAgLy9uZ0FmdGVyVmlld0NoZWNrZWQoKSB7XHJcbiAgICAvLyAgICBjb25zb2xlLmxvZyg4KTtcclxuICAgIC8vfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
