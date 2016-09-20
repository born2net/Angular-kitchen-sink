System.register(["@angular/core"], function(exports_1, context_1) {
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
    var core_1;
    var Welcome;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Welcome = (function () {
                function Welcome() {
                    this.someId = 'App1' + Math.random();
                    this.showTypedObjectArg({
                        styles1: ['foo', 'bar'],
                        styles2: [1, 2]
                    });
                }
                Welcome.prototype.showTypedObjectArg = function (_a) {
                    var _b = _a === void 0 ? {} : _a, styles1 = _b.styles1, styles2 = _b.styles2;
                };
                Welcome.prototype.ngOnInit = function () {
                };
                Welcome = __decorate([
                    core_1.Component({
                        styles: ["\n        #routerLinks {\n            padding: 20px;\n        }\n    "],
                        template: "\n                <div id=\"routerLinks\">\n                    <h4>Direct router shortcut links:</h4>\n                    <a [routerLink]=\"['/EntryPanelNoId/Login']\">To Login screen</a><br/>\n                    <a [routerLink]=\"['/Login', {id: 'Sean-Levy'}, 'Login']\">To Login screen with demo user args</a><br/>\n                    <a [routerLink]=\"['/ForgotPass']\">To Forgot Password screen</a><br/>\n                    <a [routerLink]=\"['/AppManager']\">To App manager</a><br/>\n                    <a [routerLink]=\"['/App1']\">To App1</a><br/>\n                    <a [routerLink]=\"['/App2']\">To App2</a><br/>\n                    <a [routerLink]=\"['/App3']\">To App3</a><br/>\n                    <br/><small>I am Welcome component</small>\n                </div>\n                "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Welcome);
                return Welcome;
            }());
            exports_1("Welcome", Welcome);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL3dlbGNvbWUvV2VsY29tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXlCQTtnQkFJSTtvQkFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBS3JDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQzt3QkFDcEIsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQzt3QkFDdkIsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztxQkFDbEIsQ0FBQyxDQUFBO2dCQUNOLENBQUM7Z0JBRU8sb0NBQWtCLEdBQTFCLFVBQTJCLEVBQStEO3dCQUEvRCw0QkFBK0QsRUFBOUQsb0JBQU8sRUFBRSxvQkFBTztnQkFFNUMsQ0FBQztnQkFFRCwwQkFBUSxHQUFSO2dCQUNBLENBQUM7Z0JBekNMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsTUFBTSxFQUFFLENBQUMsdUVBSVIsQ0FBQzt3QkFDRixRQUFRLEVBQUUsb3lCQVlHO3FCQUNoQixDQUFDOzsyQkFBQTtnQkErRUYsY0FBQztZQUFELENBOUVBLEFBOEVDLElBQUE7WUE5RUQsNkJBOEVDLENBQUEiLCJmaWxlIjoiY29tcHMvd2VsY29tZS9XZWxjb21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuLyoqXHJcbiBHZW5lcmFsIHJvdXRlIGxpbmtzXHJcbiBAY2xhc3MgV2VsY29tZVxyXG4gKiovXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgICAgICNyb3V0ZXJMaW5rcyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgYF0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInJvdXRlckxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0PkRpcmVjdCByb3V0ZXIgc2hvcnRjdXQgbGlua3M6PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9FbnRyeVBhbmVsTm9JZC9Mb2dpbiddXCI+VG8gTG9naW4gc2NyZWVuPC9hPjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvTG9naW4nLCB7aWQ6ICdTZWFuLUxldnknfSwgJ0xvZ2luJ11cIj5UbyBMb2dpbiBzY3JlZW4gd2l0aCBkZW1vIHVzZXIgYXJnczwvYT48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL0ZvcmdvdFBhc3MnXVwiPlRvIEZvcmdvdCBQYXNzd29yZCBzY3JlZW48L2E+PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9BcHBNYW5hZ2VyJ11cIj5UbyBBcHAgbWFuYWdlcjwvYT48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL0FwcDEnXVwiPlRvIEFwcDE8L2E+PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9BcHAyJ11cIj5UbyBBcHAyPC9hPjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvQXBwMyddXCI+VG8gQXBwMzwvYT48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+PHNtYWxsPkkgYW0gV2VsY29tZSBjb21wb25lbnQ8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXZWxjb21lIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHByaXZhdGUgc29tZUlkOnN0cmluZztcclxuXHJcbiAgICAvL2NvbnN0cnVjdG9yKHBhcmFtczpSb3V0ZVBhcmFtcykge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zb21lSWQgPSAnQXBwMScgKyBNYXRoLnJhbmRvbSgpO1xyXG5cclxuICAgICAgICAvLyBhbiBleGFtcGxlIG9mIHBhc3NpbmcgYSBvcHRpb25hbCwgdHlwZWQgb2JqZWN0IGluc3RlYWRcclxuICAgICAgICAvLyBvZiB1c2luZyB0aGUgb2xkIHdheSBvZjogb3B0cyB8fCBvcHRzID0ge30gYW5kIGl0IGF1dG8gbWFwc1xyXG4gICAgICAgIC8vIG1hdGNoaW5nIGZpZWxkc1xyXG4gICAgICAgIHRoaXMuc2hvd1R5cGVkT2JqZWN0QXJnKHtcclxuICAgICAgICAgICAgc3R5bGVzMTogWydmb28nLCAnYmFyJ10sIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgICAgIHN0eWxlczI6IFsxLCAyXSAvLyBvcHRpb25hbFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93VHlwZWRPYmplY3RBcmcoe3N0eWxlczEsIHN0eWxlczJ9OiB7c3R5bGVzMT86c3RyaW5nW10sIHN0eWxlczI/Om51bWJlcltdfSA9IHt9KSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhzdHlsZXMxICsgJyAnICsgc3R5bGVzMik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIGNvbXBvbmVudCBsaWZlIGN5Y2xlcyAqKi9cclxuICAgIC8vbmdPbkluaXQoKSB7XHJcbiAgICAvLyAgICBjb25zb2xlLmxvZygxKTtcclxuICAgIC8vfVxyXG5cclxuICAgIC8vbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAvLyAgICBjb25zb2xlLmxvZygyKTtcclxuICAgIC8vfVxyXG5cclxuICAgIC8qKiBUaGUgT25DaGFuZ2VzIGhvb2sgaXMgY2FsbGVkIGFmdGVyIG9uZSBvciBtb3JlIG9mIG91ciBjb21wb25lbnQgcHJvcGVydGllcyBoYXZlIGJlZW4gY2hhbmdlZC5cclxuICAgICAqIFRoZSBuZ09uQ2hhbmdlcyBtZXRob2QgcmVjZWl2ZXMgYSBwYXJhbWV0ZXIgd2hpY2ggdGVsbHMgd2hpY2ggcHJvcGVydGllcyBoYXZlIGNoYW5nZWRcclxuICAgICAqKi9cclxuICAgIC8vIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHtbcHJvcE5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZX0pOiB2b2lkIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyg0KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZXJlIG1heSBiZSB0aW1lcyB3aGVuIHdlIGp1c3Qgd2FudCB0byBkbyBzb21ldGhpbmcgaW4gY2FzZSBhbiBpdGVtIHdhcyByZW1vdmVkIG9yIGFkZGVkLFxyXG4gICAgICogb3IgaWYgb25seSBhIHBhcnRpY3VsYXIgcHJvcGVydHkgY2hhbmdlZCwgZm9yIGluc3RhbmNlLlxyXG4gICAgICogSWYgd2UgcnVuIGludG8gb25lIG9mIHRoZXNlIHNjZW5hcmlvcywgd2UgY2FuIHVzZSB0aGUgRG9DaGVjayBob29rLlxyXG4gICAgICogSXTigJlzIGltcG9ydGFudCB0byBub3RlIHRoYXQgdGhlIE9uQ2hhbmdlcyBob29rIGdldHMgb3ZlcnJpZGVuIGJ5IERvQ2hlY2sgc29cclxuICAgICAqIGlmIHdlIGltcGxlbWVudCBib3RoLCBPbkNoYW5nZXMgd2lsbCBiZSBpZ25vcmVkLlxyXG4gICAgICpcclxuICAgICAqIGdyZWF0IGFydGljbGUgb24gd3JpdGluZyBjdXN0b20gbG9naWMgd2hlbiB0aGluZ3MgY2hhbmdlXHJcbiAgICAgKiBodHRwOi8vdGVyb3BhLmluZm8vYmxvZy8yMDE2LzAzLzA2L3dyaXRpbmctYW4tYW5ndWxhci0yLXRlbXBsYXRlLWRpcmVjdGl2ZS5odG1sXHJcbiAgICAgKi9cclxuICAgIC8vbmdEb0NoZWNrKGNoYW5nZXM6IHtbcHJvcE5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZX0pOiB2b2lkIHtcclxuICAgIC8vICAgIGNvbnNvbGUubG9nKDMpO1xyXG4gICAgLy99XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgQWZ0ZXJDb250ZW50Q2hlY2tlZCBpcyBjYWxsZWQgYWZ0ZXIgdGhlIGRpcmVjdGl2ZSBjaGVjayBoYXMgZmluaXNoZWQuXHJcbiAgICAgKiBUaGUgY2hlY2ssIGluIHRoaXMgY29udGV4dCwgaXMgdGhlIGNoYW5nZSBkZXRlY3Rpb24gc3lzdGVtIGNoZWNrLlxyXG4gICAgICogVGhlIG90aGVyIHR3byBob29rczogQWZ0ZXJWaWV3SW5pdCBhbmQgQWZ0ZXJWaWV3Q2hlY2tlZCBhcmUgdHJpZ2dlcmVkIHJpZ2h0IGFmdGVyIHRoZSBjb250ZW50IG9uZXMsXHJcbiAgICAgKiByaWdodCBhZnRlciB0aGUgdmlldyBoYXMgYmVlbiBmdWxseSBpbml0aWFsaXplZC5cclxuICAgICAqIFRob3NlIHR3byBob29rcyBhcmUgb25seSBhcHBsaWNhYmxlIHRvIGNvbXBvbmVudHMsIGFuZCBub3QgdG8gZGlyZWN0aXZlcy5cclxuICAgICAqXHJcbiAgICAgKiBBbHNvLCB0aGUgQWZ0ZXJYWFhJbml0IGhvb2tzIGFyZSBvbmx5IGNhbGxlZCBvbmNlIGR1cmluZyB0aGUgZGlyZWN0aXZlIGxpZmVjeWNsZSxcclxuICAgICAqIHdoaWxlIHRoZSBBZnRlclhYWENoZWNrZWQgaG9va3MgYXJlIGNhbGxlZCBhZnRlciBldmVyeSBjaGFuZ2UgZGV0ZWN0aW9uIGN5Y2xlLlxyXG4gICAgICovXHJcbiAgICAvLyBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICAvLyAgICBjb25zb2xlLmxvZyg1KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvL25nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcclxuICAgIC8vICAgIGNvbnNvbGUubG9nKDYpO1xyXG4gICAgLy99XHJcblxyXG4gICAgLy9uZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAvLyAgICBjb25zb2xlLmxvZyg3KTtcclxuICAgIC8vfVxyXG5cclxuICAgIC8vbmdBZnRlclZpZXdDaGVja2VkKCkge1xyXG4gICAgLy8gICAgY29uc29sZS5sb2coOCk7XHJcbiAgICAvL31cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
