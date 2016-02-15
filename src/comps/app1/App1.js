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
var http_1 = require("angular2/http");
var router_2 = require('angular2/router');
var Menu_1 = require("../sidemenu/Menu");
var MenuItem_1 = require("../sidemenu/MenuItem");
var CommBroker_1 = require("../../services/CommBroker");
var Conts_1 = require("../../../src/Conts");
var Sliderpanel_1 = require("../sliderpanel/Sliderpanel");
var Digg_1 = require("../digg/Digg");
var tabs_1 = require("../tabs/tabs");
var tab_1 = require("../tabs/tab");
var Logout_1 = require("../logout/Logout");
var Settings_1 = require("./settings/Settings");
var Help_1 = require("./help/Help");
var Todo1_1 = require("./todos/Todo1");
var Todo2_1 = require("./todos/Todo2");
var Todolist_1 = require("./todos/Todolist");
var Todoitem_1 = require("./todos/Todoitem");
var TodoStatsModel_1 = require("./todos/TodoStatsModel");
var contributors_1 = require("./help/contributors/contributors");
var TodoService_1 = require("./todos/TodoService");
var TodoAction_1 = require("./todos/actions/TodoAction");
var Todos_1 = require("./todos/Todos");
var App1 = (function () {
    function App1(commBroker, router) {
        this.commBroker = commBroker;
        this.router = router;
        this.listenMenuChanges();
    }
    App1.prototype.ngOnInit = function () {
        this.routerActive = true;
        this.commBroker.getService(Conts_1.Consts.Services().App).appResized();
    };
    App1.prototype.routerCanReuse = function (next, prev) {
        return true;
    };
    App1.prototype.routerOnReuse = function (to, from) {
    };
    App1.prototype.routerOnActivate = function (to, from) {
        this.routerActive = true;
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(true);
            }, 10);
        });
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
    App1.prototype.routerOnDeactivate = function (next, prev) {
        this.routerActive = false;
    };
    App1 = __decorate([
        router_1.RouteConfig([
            { path: '/Todos', component: Todos_1.Todos, as: 'Todos', useAsDefault: true },
            { path: '/Digg', component: Digg_1.Digg, as: 'Digg' },
            { path: '/Settings', component: Settings_1.Settings, as: 'Settings' },
            { path: '/Help', component: Help_1.Help, as: 'Help' },
            { path: '/Logout', component: Logout_1.Logout, as: 'Logout' }
        ]),
        core_1.Component({
            providers: [http_1.HTTP_PROVIDERS, TodoStatsModel_1.default, TodoService_1.TodoService, TodoAction_1.TodoAction],
            templateUrl: '/src/comps/app1/App1.html',
            directives: [router_1.ROUTER_DIRECTIVES, router_2.RouterLink, Menu_1.Menu, MenuItem_1.MenuItem, Sliderpanel_1.Sliderpanel, Digg_1.Digg, contributors_1.Contributors,
                Todos_1.Todos, Todo1_1.Todo1, Todo2_1.Todo2, Todolist_1.TodoList, Todoitem_1.TodoItem, Logout_1.Logout, Settings_1.Settings, Help_1.Help, tabs_1.Tabs, tab_1.Tab]
        }), 
        __metadata('design:paramtypes', [CommBroker_1.CommBroker, router_1.Router])
    ], App1);
    return App1;
})();
exports.App1 = App1;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDEvYXBwMS50cyJdLCJuYW1lcyI6WyJBcHAxIiwiQXBwMS5jb25zdHJ1Y3RvciIsIkFwcDEubmdPbkluaXQiLCJBcHAxLnJvdXRlckNhblJldXNlIiwiQXBwMS5yb3V0ZXJPblJldXNlIiwiQXBwMS5yb3V0ZXJPbkFjdGl2YXRlIiwiQXBwMS5saXN0ZW5NZW51Q2hhbmdlcyIsIkFwcDEucm91dGVyT25EZWFjdGl2YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsdUJBR08saUJBQWlCLENBQUMsQ0FBQTtBQUN6QixxQkFBNkIsZUFBZSxDQUFDLENBQUE7QUFDN0MsdUJBQXNDLGlCQUFpQixDQUFDLENBQUE7QUFDeEQscUJBQW1CLGtCQUFrQixDQUFDLENBQUE7QUFDdEMseUJBQXVCLHNCQUFzQixDQUFDLENBQUE7QUFDOUMsMkJBQXlCLDJCQUEyQixDQUFDLENBQUE7QUFDckQsc0JBQXFCLG9CQUFvQixDQUFDLENBQUE7QUFFMUMsNEJBQTBCLDRCQUE0QixDQUFDLENBQUE7QUFDdkQscUJBQW1CLGNBQWMsQ0FBQyxDQUFBO0FBQ2xDLHFCQUFtQixjQUFjLENBQUMsQ0FBQTtBQUNsQyxvQkFBa0IsYUFBYSxDQUFDLENBQUE7QUFDaEMsdUJBQXFCLGtCQUFrQixDQUFDLENBQUE7QUFDeEMseUJBQXVCLHFCQUFxQixDQUFDLENBQUE7QUFDN0MscUJBQW1CLGFBQWEsQ0FBQyxDQUFBO0FBQ2pDLHNCQUFvQixlQUFlLENBQUMsQ0FBQTtBQUNwQyxzQkFBb0IsZUFBZSxDQUFDLENBQUE7QUFDcEMseUJBQXVCLGtCQUFrQixDQUFDLENBQUE7QUFDMUMseUJBQXVCLGtCQUFrQixDQUFDLENBQUE7QUFDMUMsK0JBQTJCLHdCQUF3QixDQUFDLENBQUE7QUFDcEQsNkJBQTJCLGtDQUFrQyxDQUFDLENBQUE7QUFDOUQsNEJBQTBCLHFCQUFxQixDQUFDLENBQUE7QUFDaEQsMkJBQXlCLDRCQUE0QixD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QSxRQUFRQSxFQUFDQTtTQUNyREEsQ0FBQ0E7UUFVREEsZ0JBQVNBLENBQUNBO1lBQ1BBLFNBQVNBLEVBQUVBLENBQUNBLHFCQUFjQSxFQUFFQSx3QkFBY0EsRUFBRUEseUJBQVdBLEVBQUVBLHVCQUFVQSxDQUFDQTtZQUNwRUEsV0FBV0EsRUFBRUEsMkJBQTJCQTtZQUN4Q0EsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWlCQSxFQUFFQSxtQkFBVUEsRUFBRUEsV0FBSUEsRUFBRUEsbUJBQVFBLEVBQUVBLHlCQUFXQSxFQUFFQSxXQUFJQSxFQUFFQSwyQkFBWUE7Z0JBQ3ZGQSxhQUFLQSxFQUFFQSxhQUFLQSxFQUFFQSxhQUFLQSxFQUFFQSxtQkFBUUEsRUFBRUEsbUJBQVFBLEVBQUVBLGVBQU1BLEVBQUVBLG1CQUFRQSxFQUFFQSxXQUFJQSxFQUFFQSxXQUFJQSxFQUFFQSxTQUFHQSxDQUFDQTtTQUNsRkEsQ0FBQ0E7O2FBOENEQTtJQUFEQSxXQUFDQTtBQUFEQSxDQW5FQSxBQW1FQ0EsSUFBQTtBQTdDWSxZQUFJLE9BNkNoQixDQUFBIiwiZmlsZSI6ImNvbXBzL2FwcDEvQXBwMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtcclxuICAgIFJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZUNvbmZpZywgUm91dGVyLCBPbkFjdGl2YXRlLCBDb21wb25lbnRJbnN0cnVjdGlvbiwgQ2FuUmV1c2UsXHJcbiAgICBPblJldXNlLCBDYW5BY3RpdmF0ZSwgT25EZWFjdGl2YXRlXHJcbn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtIVFRQX1BST1ZJREVSU30gZnJvbSBcImFuZ3VsYXIyL2h0dHBcIjtcclxuaW1wb3J0IHtSb3V0ZXJMaW5rLCBSb3V0ZVBhcmFtc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtNZW51fSBmcm9tIFwiLi4vc2lkZW1lbnUvTWVudVwiO1xyXG5pbXBvcnQge01lbnVJdGVtfSBmcm9tIFwiLi4vc2lkZW1lbnUvTWVudUl0ZW1cIjtcclxuaW1wb3J0IHtDb21tQnJva2VyfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvQ29tbUJyb2tlclwiO1xyXG5pbXBvcnQge0NvbnN0c30gZnJvbSBcIi4uLy4uLy4uL3NyYy9Db250c1wiO1xyXG5pbXBvcnQge0lNZXNzYWdlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvQ29tbUJyb2tlclwiO1xyXG5pbXBvcnQge1NsaWRlcnBhbmVsfSBmcm9tIFwiLi4vc2xpZGVycGFuZWwvU2xpZGVycGFuZWxcIjtcclxuaW1wb3J0IHtEaWdnfSBmcm9tIFwiLi4vZGlnZy9EaWdnXCI7XHJcbmltcG9ydCB7VGFic30gZnJvbSBcIi4uL3RhYnMvdGFic1wiO1xyXG5pbXBvcnQge1RhYn0gZnJvbSBcIi4uL3RhYnMvdGFiXCI7XHJcbmltcG9ydCB7TG9nb3V0fSBmcm9tIFwiLi4vbG9nb3V0L0xvZ291dFwiO1xyXG5pbXBvcnQge1NldHRpbmdzfSBmcm9tIFwiLi9zZXR0aW5ncy9TZXR0aW5nc1wiO1xyXG5pbXBvcnQge0hlbHB9IGZyb20gXCIuL2hlbHAvSGVscFwiO1xyXG5pbXBvcnQge1RvZG8xfSBmcm9tIFwiLi90b2Rvcy9Ub2RvMVwiO1xyXG5pbXBvcnQge1RvZG8yfSBmcm9tIFwiLi90b2Rvcy9Ub2RvMlwiO1xyXG5pbXBvcnQge1RvZG9MaXN0fSBmcm9tIFwiLi90b2Rvcy9Ub2RvbGlzdFwiO1xyXG5pbXBvcnQge1RvZG9JdGVtfSBmcm9tIFwiLi90b2Rvcy9Ub2RvaXRlbVwiO1xyXG5pbXBvcnQgVG9kb1N0YXRzTW9kZWwgZnJvbSBcIi4vdG9kb3MvVG9kb1N0YXRzTW9kZWxcIjtcclxuaW1wb3J0IHtDb250cmlidXRvcnN9IGZyb20gXCIuL2hlbHAvY29udHJpYnV0b3JzL2NvbnRyaWJ1dG9yc1wiO1xyXG5pbXBvcnQge1RvZG9TZXJ2aWNlfSBmcm9tIFwiLi90b2Rvcy9Ub2RvU2VydmljZVwiO1xyXG5pbXBvcnQge1RvZG9BY3Rpb259IGZyb20gXCIuL3RvZG9zL2FjdGlvbnMvVG9kb0FjdGlvblwiO1xyXG5pbXBvcnQge1RvZG9zfSBmcm9tIFwiLi90b2Rvcy9Ub2Rvc1wiO1xyXG5cclxuQFJvdXRlQ29uZmlnKFtcclxuICAgIHtwYXRoOiAnL1RvZG9zJywgY29tcG9uZW50OiBUb2RvcywgYXM6ICdUb2RvcycsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXHJcbiAgICB7cGF0aDogJy9EaWdnJywgY29tcG9uZW50OiBEaWdnLCBhczogJ0RpZ2cnfSxcclxuICAgIHtwYXRoOiAnL1NldHRpbmdzJywgY29tcG9uZW50OiBTZXR0aW5ncywgYXM6ICdTZXR0aW5ncyd9LFxyXG4gICAge3BhdGg6ICcvSGVscCcsIGNvbXBvbmVudDogSGVscCwgYXM6ICdIZWxwJ30sXHJcbiAgICB7cGF0aDogJy9Mb2dvdXQnLCBjb21wb25lbnQ6IExvZ291dCwgYXM6ICdMb2dvdXQnfVxyXG5dKVxyXG5cclxuLy9DYW5BY3RpdmF0ZSBleGFtcGxlIG9mIGhvdyB0byBhbGxvdyBjb25kaXRpb25hbCByb3V0ZSBhY2Nlc3MgYWZ0ZXIgMTBtcyBvZiBQcm9taXNlIHJlc29sdXRpb25cclxuLy9AQ2FuQWN0aXZhdGUoKCkgPT4ge1xyXG4vLyAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbi8vICAgICAgICBzZXRUaW1lb3V0KGU9PiB7XHJcbi8vICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKVxyXG4vLyAgICAgICAgfSwgMTApXHJcbi8vICAgIH0pXHJcbi8vfSlcclxuQENvbXBvbmVudCh7XHJcbiAgICBwcm92aWRlcnM6IFtIVFRQX1BST1ZJREVSUywgVG9kb1N0YXRzTW9kZWwsIFRvZG9TZXJ2aWNlLCBUb2RvQWN0aW9uXSxcclxuICAgIHRlbXBsYXRlVXJsOiAnL3NyYy9jb21wcy9hcHAxL0FwcDEuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlckxpbmssIE1lbnUsIE1lbnVJdGVtLCBTbGlkZXJwYW5lbCwgRGlnZywgQ29udHJpYnV0b3JzLFxyXG4gICAgICAgIFRvZG9zLCBUb2RvMSwgVG9kbzIsIFRvZG9MaXN0LCBUb2RvSXRlbSwgTG9nb3V0LCBTZXR0aW5ncywgSGVscCwgVGFicywgVGFiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwMSBpbXBsZW1lbnRzIE9uQWN0aXZhdGUsIENhblJldXNlLCBPblJldXNlLCBPbkRlYWN0aXZhdGUge1xyXG4gICAgcHJpdmF0ZSByb3V0ZXJBY3RpdmU6Ym9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbW1Ccm9rZXI6Q29tbUJyb2tlciwgcHJpdmF0ZSByb3V0ZXI6Um91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5NZW51Q2hhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNvbW1Ccm9rZXIuZ2V0U2VydmljZShDb25zdHMuU2VydmljZXMoKS5BcHApLmFwcFJlc2l6ZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogRXhhbXBsZXMgb24gcm91dGVyIGxpZmUtY3ljbGUgaG9va3MgKiovXHJcbiAgICByb3V0ZXJDYW5SZXVzZShuZXh0OkNvbXBvbmVudEluc3RydWN0aW9uLCBwcmV2OkNvbXBvbmVudEluc3RydWN0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcm91dGVyT25SZXVzZSh0bzpDb21wb25lbnRJbnN0cnVjdGlvbiwgZnJvbTpDb21wb25lbnRJbnN0cnVjdGlvbikge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codG8ucGFyYW1zWyduYW1lJ10pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRvLnVybFBhdGggPyB0by51cmxQYXRoIDogJycgKyAnICcgKyBmcm9tLnVybFBhdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJvdXRlck9uQWN0aXZhdGUodG86Q29tcG9uZW50SW5zdHJ1Y3Rpb24sIGZyb206Q29tcG9uZW50SW5zdHJ1Y3Rpb24pIHtcclxuICAgICAgICB0aGlzLnJvdXRlckFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy8gZGVtb25zdHJhdGUgZGVsYXkgb24gcm91dGluZywgbWF5YmUgdG8gbG9hZCBzb21lIHNlcnZlciBkYXRhIGZpcnN0IG9yIHNob3cgbG9hZGluZyBiYXJcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0sIDEwKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsaXN0ZW5NZW51Q2hhbmdlcygpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHVuc3ViID0gc2VsZi5jb21tQnJva2VyLm9uRXZlbnQoQ29uc3RzLkV2ZW50cygpLk1FTlVfU0VMRUNUSU9OKS5zdWJzY3JpYmUoKGU6SU1lc3NhZ2UpPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNlbGYucm91dGVyQWN0aXZlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBsZXQgc2NyZWVuID0gKGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHNlbGYucm91dGVyLm5hdmlnYXRlKFtgL0FwcDEvJHtzY3JlZW59YF0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJvdXRlck9uRGVhY3RpdmF0ZShuZXh0OkNvbXBvbmVudEluc3RydWN0aW9uLCBwcmV2OkNvbXBvbmVudEluc3RydWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJBY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
