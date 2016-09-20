System.register(['@angular/core', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var AppManager;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppManager = (function () {
                function AppManager(router) {
                    this.myRouter = router;
                }
                AppManager.prototype.routerOnActivate = function () {
                };
                AppManager.prototype.ngAfterViewInit = function () {
                };
                AppManager.prototype.goToApp1 = function () {
                    var _this = this;
                    setTimeout(function (e) { return _this.myRouter.navigate(['/App1']); }, 500);
                };
                AppManager.prototype.goToApp2 = function () {
                    var _this = this;
                    setTimeout(function (e) { return _this.myRouter.navigate(['/App2']); }, 500);
                };
                AppManager.prototype.goToApp3 = function () {
                    var _this = this;
                    setTimeout(function (e) { return _this.myRouter.navigate(['/App3']); }, 500);
                };
                AppManager = __decorate([
                    core_1.Component({
                        providers: [AppManager],
                        selector: 'AppManager',
                        template: "\n    <div id=\"appEntry\">\n        <small>I am AppManager component</small>\n        <div id=\"appSelector\" class=\"noScroll container\" >\n            <div align=\"center\" style=\"padding-top: 100px\">\n                <button (click)=\"goToApp1(event)\" data-ripple-color=\"black\" type=\"button\" name=\"mailWasp\" class=\"btn btn-default\">\n                <i style=\"margin: 20px; padding: 20px; font-size: 5em\" class=\"fa fa-paper-plane\"></i> <span\n                        data-localize=\"none\"></span>\n                        <small>App 1</small>\n                 </button>\n                <button (click)=\"goToApp2(event)\" data-ripple-color=\"black\" type=\"button\" name=\"everNodes\" class=\"btn btn-default\">\n                <i style=\"margin: 20px; padding: 20px ; font-size: 5em\" class=\"fa fa-rocket\"></i> <span\n                        data-localize=\"none\"></span>\n                        <small>App 2</small>\n                </button>\n\n                <button (click)=\"goToApp3(event)\" data-ripple-color=\"black\" type=\"button\" name=\"everNodes\" class=\"btn btn-default\">\n                <i style=\"margin: 20px; padding: 20px ; font-size: 5em\" class=\"fa fa-film\"></i> <span\n                        data-localize=\"none\"></span>\n                        <small>App 3</small>\n                </button>\n\n            </div>\n        </div>\n        <div id=\"appMailWaspContent\" class=\"noScroll container\" style=\"display: none\">\n        </div>\n        <div id=\"appEverNodesContent\" class=\"noScroll container\" style=\"display: none\">\n        </div>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object])
                ], AppManager);
                return AppManager;
                var _a;
            }());
            exports_1("AppManager", AppManager);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcG1hbmFnZXIvQXBwTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTZDQTtnQkFFSSxvQkFBWSxNQUFhO29CQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztnQkFNM0IsQ0FBQztnQkFFRCxxQ0FBZ0IsR0FBaEI7Z0JBY0EsQ0FBQztnQkFFRCxvQ0FBZSxHQUFmO2dCQUNBLENBQUM7Z0JBRU8sNkJBQVEsR0FBaEI7b0JBQUEsaUJBR0M7b0JBRkcsVUFBVSxDQUFDLFVBQUEsQ0FBQyxJQUFFLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFqQyxDQUFpQyxFQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUV6RCxDQUFDO2dCQUVPLDZCQUFRLEdBQWhCO29CQUFBLGlCQUVDO29CQURHLFVBQVUsQ0FBQyxVQUFBLENBQUMsSUFBRSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBakMsQ0FBaUMsRUFBQyxHQUFHLENBQUMsQ0FBQztnQkFDekQsQ0FBQztnQkFFTyw2QkFBUSxHQUFoQjtvQkFBQSxpQkFFQztvQkFERyxVQUFVLENBQUMsVUFBQSxDQUFDLElBQUUsT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQWpDLENBQWlDLEVBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3pELENBQUM7Z0JBbkZMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO3dCQUN2QixRQUFRLEVBQUUsWUFBWTt3QkFDdEIsUUFBUSxFQUFFLGdtREE2QlQ7cUJBQ0osQ0FBQzs7OEJBQUE7Z0JBbURGLGlCQUFDOztZQUFELENBMUNBLEFBMENDLElBQUE7WUExQ0QsbUNBMENDLENBQUEiLCJmaWxlIjoiY29tcHMvYXBwbWFuYWdlci9BcHBNYW5hZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgcHJvdmlkZXJzOiBbQXBwTWFuYWdlcl0sXHJcbiAgICBzZWxlY3RvcjogJ0FwcE1hbmFnZXInLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgaWQ9XCJhcHBFbnRyeVwiPlxyXG4gICAgICAgIDxzbWFsbD5JIGFtIEFwcE1hbmFnZXIgY29tcG9uZW50PC9zbWFsbD5cclxuICAgICAgICA8ZGl2IGlkPVwiYXBwU2VsZWN0b3JcIiBjbGFzcz1cIm5vU2Nyb2xsIGNvbnRhaW5lclwiID5cclxuICAgICAgICAgICAgPGRpdiBhbGlnbj1cImNlbnRlclwiIHN0eWxlPVwicGFkZGluZy10b3A6IDEwMHB4XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJnb1RvQXBwMShldmVudClcIiBkYXRhLXJpcHBsZS1jb2xvcj1cImJsYWNrXCIgdHlwZT1cImJ1dHRvblwiIG5hbWU9XCJtYWlsV2FzcFwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCI+XHJcbiAgICAgICAgICAgICAgICA8aSBzdHlsZT1cIm1hcmdpbjogMjBweDsgcGFkZGluZzogMjBweDsgZm9udC1zaXplOiA1ZW1cIiBjbGFzcz1cImZhIGZhLXBhcGVyLXBsYW5lXCI+PC9pPiA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWxvY2FsaXplPVwibm9uZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPkFwcCAxPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImdvVG9BcHAyKGV2ZW50KVwiIGRhdGEtcmlwcGxlLWNvbG9yPVwiYmxhY2tcIiB0eXBlPVwiYnV0dG9uXCIgbmFtZT1cImV2ZXJOb2Rlc1wiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCI+XHJcbiAgICAgICAgICAgICAgICA8aSBzdHlsZT1cIm1hcmdpbjogMjBweDsgcGFkZGluZzogMjBweCA7IGZvbnQtc2l6ZTogNWVtXCIgY2xhc3M9XCJmYSBmYS1yb2NrZXRcIj48L2k+IDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtbG9jYWxpemU9XCJub25lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+QXBwIDI8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiZ29Ub0FwcDMoZXZlbnQpXCIgZGF0YS1yaXBwbGUtY29sb3I9XCJibGFja1wiIHR5cGU9XCJidXR0b25cIiBuYW1lPVwiZXZlck5vZGVzXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIj5cclxuICAgICAgICAgICAgICAgIDxpIHN0eWxlPVwibWFyZ2luOiAyMHB4OyBwYWRkaW5nOiAyMHB4IDsgZm9udC1zaXplOiA1ZW1cIiBjbGFzcz1cImZhIGZhLWZpbG1cIj48L2k+IDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtbG9jYWxpemU9XCJub25lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+QXBwIDM8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwiYXBwTWFpbFdhc3BDb250ZW50XCIgY2xhc3M9XCJub1Njcm9sbCBjb250YWluZXJcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwiYXBwRXZlck5vZGVzQ29udGVudFwiIGNsYXNzPVwibm9TY3JvbGwgY29udGFpbmVyXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGBcclxufSlcclxuXHJcbi8vIEFuIGV4YW1wbGUgb2YgaG93IHdlIGNhbiBhbGxvdyBvciBkZW55IGFjY2VzcyB0byBhIFJvdXRlXHJcbi8vIEBDYW5BY3RpdmF0ZSgodG86Q29tcG9uZW50SW5zdHJ1Y3Rpb24sIGZyb206Q29tcG9uZW50SW5zdHJ1Y3Rpb24pID0+IHtcclxuLy8gICAgIGxldCBhdXRoU2VydmljZTpBdXRoU2VydmljZSA9IGFwcElualNlcnZpY2UoKS5nZXQoQXV0aFNlcnZpY2UpO1xyXG4vLyAgICAgcmV0dXJuIGF1dGhTZXJ2aWNlLmNoZWNrQWNjZXNzKHRvLCBmcm9tLCBbJy9Mb2dpbi9Mb2dpbiddKTtcclxuLy8gfSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwTWFuYWdlciB7XHJcbiAgICBwcml2YXRlIG15Um91dGVyOlJvdXRlcjtcclxuICAgIGNvbnN0cnVjdG9yKHJvdXRlcjpSb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLm15Um91dGVyID0gcm91dGVyO1xyXG5cclxuICAgICAgICAvLyBpZiB5b3Ugd2lzaCB0byBzdWJzY3JpYmUgdG8gcm91dGVyIGNhbGxzXHJcbiAgICAgICAgLy90aGlzLm15Um91dGVyLnBhcmVudC5zdWJzY3JpYmUoZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgLy8gICAgY29uc29sZS5sb2coYFJvdXRlICR7ZX1gKTtcclxuICAgICAgICAvL30pO1xyXG4gICAgfVxyXG5cclxuICAgIHJvdXRlck9uQWN0aXZhdGUoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5pZCA9IHRoaXMuX3JvdXRlUGFyYW1zLmdldChcImlkXCIpO1xyXG4gICAgICAgIC8vIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLmlkKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmdhdGVEYXRhTW9kZWwudW5pcXVlX2Rpc3BsYXlfaWQgPSBwYXJzZUludCh0aGlzLmlkKTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMubXlTZXJ2aWNlLmxvYWREYXRhKHRoaXMuaWQpXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ29Ub0FwcDEoKSB7XHJcbiAgICAgICAgc2V0VGltZW91dChlPT50aGlzLm15Um91dGVyLm5hdmlnYXRlKFsnL0FwcDEnXSksNTAwKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnb1RvQXBwMigpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGU9PnRoaXMubXlSb3V0ZXIubmF2aWdhdGUoWycvQXBwMiddKSw1MDApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ29Ub0FwcDMoKSB7XHJcbiAgICAgICAgc2V0VGltZW91dChlPT50aGlzLm15Um91dGVyLm5hdmlnYXRlKFsnL0FwcDMnXSksNTAwKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
