System.register(["@angular/core", "@angular/router", "../../services/CommBroker", "../../../src/Conts", "./todos/TodoStatsModel", "./todos/TodoService", './App1.html!text'], function(exports_1, context_1) {
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
    var core_1, router_1, CommBroker_1, Conts_1, TodoStatsModel_1, TodoService_1, App1_html_text_1;
    var App1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (CommBroker_1_1) {
                CommBroker_1 = CommBroker_1_1;
            },
            function (Conts_1_1) {
                Conts_1 = Conts_1_1;
            },
            function (TodoStatsModel_1_1) {
                TodoStatsModel_1 = TodoStatsModel_1_1;
            },
            function (TodoService_1_1) {
                TodoService_1 = TodoService_1_1;
            },
            function (App1_html_text_1_1) {
                App1_html_text_1 = App1_html_text_1_1;
            }],
        execute: function() {
            App1 = (function () {
                function App1(commBroker, router) {
                    this.commBroker = commBroker;
                    this.router = router;
                    this.listenMenuChanges();
                    router.navigate(['/App1/Todos']);
                }
                App1.prototype.ngOnInit = function () {
                    this.routerActive = true;
                    this.commBroker.getService(Conts_1.Consts.Services().App).appResized();
                };
                App1.prototype.listenMenuChanges = function () {
                    var self = this;
                    var unsub = self.commBroker.onEvent(Conts_1.Consts.Events().MENU_SELECTION).subscribe(function (e) {
                        if (!self.routerActive)
                            return;
                        var screen = (e.message);
                        self.router.navigate([("/App1/" + screen)]);
                    });
                };
                App1 = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        providers: [TodoStatsModel_1.default, TodoService_1.TodoService],
                        template: App1_html_text_1.default
                    }), 
                    __metadata('design:paramtypes', [CommBroker_1.CommBroker, (typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object])
                ], App1);
                return App1;
                var _a;
            }());
            exports_1("App1", App1);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDEvQXBwMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWtCQTtnQkFHSSxjQUFvQixVQUFxQixFQUFVLE1BQWE7b0JBQTVDLGVBQVUsR0FBVixVQUFVLENBQVc7b0JBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBTztvQkFDNUQsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7b0JBR3pCLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxDQUFDO2dCQUVELHVCQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLGNBQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDbkUsQ0FBQztnQkFzQk0sZ0NBQWlCLEdBQXhCO29CQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDaEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsY0FBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQVU7d0JBQ3JGLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzs0QkFDbkIsTUFBTSxDQUFDO3dCQUNYLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVMsTUFBTSxDQUFFLENBQUMsQ0FBQyxDQUFDO29CQUM5QyxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQWpETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixTQUFTLEVBQUUsQ0FBQyx3QkFBYyxFQUFFLHlCQUFXLENBQUM7d0JBQ3hDLFFBQVEsRUFBRSx3QkFBWTtxQkFFekIsQ0FBQzs7d0JBQUE7Z0JBaURGLFdBQUM7O1lBQUQsQ0FoREEsQUFnREMsSUFBQTtZQWhERCx1QkFnREMsQ0FBQSIsImZpbGUiOiJjb21wcy9hcHAxL0FwcDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtcclxuICAgIENvbW1Ccm9rZXIsXHJcbiAgICBJTWVzc2FnZVxyXG59IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9Db21tQnJva2VyXCI7XHJcbmltcG9ydCB7Q29uc3RzfSBmcm9tIFwiLi4vLi4vLi4vc3JjL0NvbnRzXCI7XHJcbmltcG9ydCBUb2RvU3RhdHNNb2RlbCBmcm9tIFwiLi90b2Rvcy9Ub2RvU3RhdHNNb2RlbFwiO1xyXG5pbXBvcnQge1RvZG9TZXJ2aWNlfSBmcm9tIFwiLi90b2Rvcy9Ub2RvU2VydmljZVwiO1xyXG5pbXBvcnQgQXBwMVRlbXBsYXRlIGZyb20gJy4vQXBwMS5odG1sIXRleHQnXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogX19tb2R1bGVOYW1lLFxyXG4gICAgcHJvdmlkZXJzOiBbVG9kb1N0YXRzTW9kZWwsIFRvZG9TZXJ2aWNlXSxcclxuICAgIHRlbXBsYXRlOiBBcHAxVGVtcGxhdGVcclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHAxIHtcclxuICAgIHByaXZhdGUgcm91dGVyQWN0aXZlOmJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21tQnJva2VyOkNvbW1Ccm9rZXIsIHByaXZhdGUgcm91dGVyOlJvdXRlcikge1xyXG4gICAgICAgIHRoaXMubGlzdGVuTWVudUNoYW5nZXMoKTtcclxuXHJcbiAgICAgICAgLy8gcmVkaXJlY3QgdG8gVG8gZG8nc1xyXG4gICAgICAgIHJvdXRlci5uYXZpZ2F0ZShbJy9BcHAxL1RvZG9zJ10pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNvbW1Ccm9rZXIuZ2V0U2VydmljZShDb25zdHMuU2VydmljZXMoKS5BcHApLmFwcFJlc2l6ZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogRXhhbXBsZXMgb24gcm91dGVyIGxpZmUtY3ljbGUgaG9va3MgKiovXHJcbiAgICAvLyByb3V0ZXJDYW5SZXVzZShuZXh0OkNvbXBvbmVudEluc3RydWN0aW9uLCBwcmV2OkNvbXBvbmVudEluc3RydWN0aW9uKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gcm91dGVyT25SZXVzZShzZWdtZW50OlJvdXRlU2VnbWVudCwgdHJlZTpUcmVlPFJvdXRlU2VnbWVudD4pIHtcclxuICAgIC8vICAgICAgY29uc29sZS5sb2coc2VnbWVudCk7XHJcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2codG8udXJsUGF0aCA/IHRvLnVybFBhdGggOiAnJyArICcgJyArIGZyb20udXJsUGF0aCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gcm91dGVyT25BY3RpdmF0ZShzZWdtZW50OlJvdXRlU2VnbWVudCwgdHJlZTpUcmVlPFJvdXRlU2VnbWVudD4pIHtcclxuICAgIC8vICAgICB0aGlzLnJvdXRlckFjdGl2ZSA9IHRydWU7XHJcbiAgICAvLyAgICAgLy8gZGVtb25zdHJhdGUgZGVsYXkgb24gcm91dGluZywgbWF5YmUgdG8gbG9hZCBzb21lIHNlcnZlciBkYXRhIGZpcnN0IG9yIHNob3cgbG9hZGluZyBiYXJcclxuICAgIC8vICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgIC8vICAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgIC8vICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xyXG4gICAgLy8gICAgICAgICB9LCAzMDAwKVxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHB1YmxpYyBsaXN0ZW5NZW51Q2hhbmdlcygpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHVuc3ViID0gc2VsZi5jb21tQnJva2VyLm9uRXZlbnQoQ29uc3RzLkV2ZW50cygpLk1FTlVfU0VMRUNUSU9OKS5zdWJzY3JpYmUoKGU6SU1lc3NhZ2UpPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNlbGYucm91dGVyQWN0aXZlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBsZXQgc2NyZWVuID0gKGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHNlbGYucm91dGVyLm5hdmlnYXRlKFtgL0FwcDEvJHtzY3JlZW59YF0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJvdXRlck9uRGVhY3RpdmF0ZShuZXh0OkNvbXBvbmVudEluc3RydWN0aW9uLCBwcmV2OkNvbXBvbmVudEluc3RydWN0aW9uKSB7XHJcbiAgICAvLyAgICAgdGhpcy5yb3V0ZXJBY3RpdmUgPSBmYWxzZTtcclxuICAgIC8vIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
