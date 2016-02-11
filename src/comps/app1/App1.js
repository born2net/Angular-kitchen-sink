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
            providers: [http_1.HTTP_PROVIDERS, TodoStatsModel_1.default, TodoService_1.TodosService, TodoAction_1.TodoAction],
            templateUrl: '/src/comps/app1/App1.html',
            directives: [router_1.ROUTER_DIRECTIVES, router_2.RouterLink, Menu_1.Menu, MenuItem_1.MenuItem, Sliderpanel_1.Sliderpanel, Digg_1.Digg, contributors_1.Contributors,
                Todos_1.Todos, Todo1_1.Todo1, Todo2_1.Todo2, Todolist_1.TodoList, Todoitem_1.TodoItem, Logout_1.Logout, Settings_1.Settings, Help_1.Help, tabs_1.Tabs, tab_1.Tab]
        }), 
        __metadata('design:paramtypes', [CommBroker_1.CommBroker, router_1.Router])
    ], App1);
    return App1;
})();
exports.App1 = App1;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDEvYXBwMS50cyJdLCJuYW1lcyI6WyJBcHAxIiwiQXBwMS5jb25zdHJ1Y3RvciIsIkFwcDEubmdPbkluaXQiLCJBcHAxLnJvdXRlckNhblJldXNlIiwiQXBwMS5yb3V0ZXJPblJldXNlIiwiQXBwMS5yb3V0ZXJPbkFjdGl2YXRlIiwiQXBwMS5saXN0ZW5NZW51Q2hhbmdlcyIsIkFwcDEucm91dGVyT25EZWFjdGl2YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsdUJBR08saUJBQWlCLENBQUMsQ0FBQTtBQUN6QixxQkFBNkIsZUFBZSxDQUFDLENBQUE7QUFDN0MsdUJBQXNDLGlCQUFpQixDQUFDLENBQUE7QUFDeEQscUJBQW1CLGtCQUFrQixDQUFDLENBQUE7QUFDdEMseUJBQXVCLHNCQUFzQixDQUFDLENBQUE7QUFDOUMsMkJBQXlCLDJCQUEyQixDQUFDLENBQUE7QUFDckQsc0JBQXFCLG9CQUFvQixDQUFDLENBQUE7QUFFMUMsNEJBQTBCLDRCQUE0QixDQUFDLENBQUE7QUFDdkQscUJBQW1CLGNBQWMsQ0FBQyxDQUFBO0FBQ2xDLHFCQUFtQixjQUFjLENBQUMsQ0FBQTtBQUNsQyxvQkFBa0IsYUFBYSxDQUFDLENBQUE7QUFDaEMsdUJBQXFCLGtCQUFrQixDQUFDLENBQUE7QUFDeEMseUJBQXVCLHFCQUFxQixDQUFDLENBQUE7QUFDN0MscUJBQW1CLGFBQWEsQ0FBQyxDQUFBO0FBQ2pDLHNCQUFvQixlQUFlLENBQUMsQ0FBQTtBQUNwQyxzQkFBb0IsZUFBZSxDQUFDLENBQUE7QUFDcEMseUJBQXVCLGtCQUFrQixDQUFDLENBQUE7QUFDMUMseUJBQXVCLGtCQUFrQixDQUFDLENBQUE7QUFDMUMsK0JBQTJCLHdCQUF3QixDQUFDLENBQUE7QUFDcEQsNkJBQTJCLGtDQUFrQyxDQUFDLENBQUE7QUFDOUQsNEJBQTJCLHFCQUFxQixDQUFDLENBQUE7QUFDakQsMkJBQXlCLDRCQUE0QixD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QSxRQUFRQSxFQUFDQTtTQUNyREEsQ0FBQ0E7UUFVREEsZ0JBQVNBLENBQUNBO1lBQ1BBLFNBQVNBLEVBQUVBLENBQUNBLHFCQUFjQSxFQUFFQSx3QkFBY0EsRUFBRUEsMEJBQVlBLEVBQUVBLHVCQUFVQSxDQUFDQTtZQUNyRUEsV0FBV0EsRUFBRUEsMkJBQTJCQTtZQUN4Q0EsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWlCQSxFQUFFQSxtQkFBVUEsRUFBRUEsV0FBSUEsRUFBRUEsbUJBQVFBLEVBQUVBLHlCQUFXQSxFQUFFQSxXQUFJQSxFQUFFQSwyQkFBWUE7Z0JBQ3ZGQSxhQUFLQSxFQUFFQSxhQUFLQSxFQUFFQSxhQUFLQSxFQUFFQSxtQkFBUUEsRUFBRUEsbUJBQVFBLEVBQUVBLGVBQU1BLEVBQUVBLG1CQUFRQSxFQUFFQSxXQUFJQSxFQUFFQSxXQUFJQSxFQUFFQSxTQUFHQSxDQUFDQTtTQUNsRkEsQ0FBQ0E7O2FBOENEQTtJQUFEQSxXQUFDQTtBQUFEQSxDQW5FQSxBQW1FQ0EsSUFBQTtBQTdDWSxZQUFJLE9BNkNoQixDQUFBIiwiZmlsZSI6ImNvbXBzL2FwcDEvQXBwMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtcclxuICAgIFJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZUNvbmZpZywgUm91dGVyLCBPbkFjdGl2YXRlLCBDb21wb25lbnRJbnN0cnVjdGlvbiwgQ2FuUmV1c2UsXHJcbiAgICBPblJldXNlLCBDYW5BY3RpdmF0ZSwgT25EZWFjdGl2YXRlXHJcbn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtIVFRQX1BST1ZJREVSU30gZnJvbSBcImFuZ3VsYXIyL2h0dHBcIjtcclxuaW1wb3J0IHtSb3V0ZXJMaW5rLCBSb3V0ZVBhcmFtc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtNZW51fSBmcm9tIFwiLi4vc2lkZW1lbnUvTWVudVwiO1xyXG5pbXBvcnQge01lbnVJdGVtfSBmcm9tIFwiLi4vc2lkZW1lbnUvTWVudUl0ZW1cIjtcclxuaW1wb3J0IHtDb21tQnJva2VyfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvQ29tbUJyb2tlclwiO1xyXG5pbXBvcnQge0NvbnN0c30gZnJvbSBcIi4uLy4uLy4uL3NyYy9Db250c1wiO1xyXG5pbXBvcnQge0lNZXNzYWdlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvQ29tbUJyb2tlclwiO1xyXG5pbXBvcnQge1NsaWRlcnBhbmVsfSBmcm9tIFwiLi4vc2xpZGVycGFuZWwvU2xpZGVycGFuZWxcIjtcclxuaW1wb3J0IHtEaWdnfSBmcm9tIFwiLi4vZGlnZy9EaWdnXCI7XHJcbmltcG9ydCB7VGFic30gZnJvbSBcIi4uL3RhYnMvdGFic1wiO1xyXG5pbXBvcnQge1RhYn0gZnJvbSBcIi4uL3RhYnMvdGFiXCI7XHJcbmltcG9ydCB7TG9nb3V0fSBmcm9tIFwiLi4vbG9nb3V0L0xvZ291dFwiO1xyXG5pbXBvcnQge1NldHRpbmdzfSBmcm9tIFwiLi9zZXR0aW5ncy9TZXR0aW5nc1wiO1xyXG5pbXBvcnQge0hlbHB9IGZyb20gXCIuL2hlbHAvSGVscFwiO1xyXG5pbXBvcnQge1RvZG8xfSBmcm9tIFwiLi90b2Rvcy9Ub2RvMVwiO1xyXG5pbXBvcnQge1RvZG8yfSBmcm9tIFwiLi90b2Rvcy9Ub2RvMlwiO1xyXG5pbXBvcnQge1RvZG9MaXN0fSBmcm9tIFwiLi90b2Rvcy9Ub2RvbGlzdFwiO1xyXG5pbXBvcnQge1RvZG9JdGVtfSBmcm9tIFwiLi90b2Rvcy9Ub2RvaXRlbVwiO1xyXG5pbXBvcnQgVG9kb1N0YXRzTW9kZWwgZnJvbSBcIi4vdG9kb3MvVG9kb1N0YXRzTW9kZWxcIjtcclxuaW1wb3J0IHtDb250cmlidXRvcnN9IGZyb20gXCIuL2hlbHAvY29udHJpYnV0b3JzL2NvbnRyaWJ1dG9yc1wiO1xyXG5pbXBvcnQge1RvZG9zU2VydmljZX0gZnJvbSBcIi4vdG9kb3MvVG9kb1NlcnZpY2VcIjtcclxuaW1wb3J0IHtUb2RvQWN0aW9ufSBmcm9tIFwiLi90b2Rvcy9hY3Rpb25zL1RvZG9BY3Rpb25cIjtcclxuaW1wb3J0IHtUb2Rvc30gZnJvbSBcIi4vdG9kb3MvVG9kb3NcIjtcclxuXHJcbkBSb3V0ZUNvbmZpZyhbXHJcbiAgICB7cGF0aDogJy9Ub2RvcycsIGNvbXBvbmVudDogVG9kb3MsIGFzOiAnVG9kb3MnLCB1c2VBc0RlZmF1bHQ6IHRydWV9LFxyXG4gICAge3BhdGg6ICcvRGlnZycsIGNvbXBvbmVudDogRGlnZywgYXM6ICdEaWdnJ30sXHJcbiAgICB7cGF0aDogJy9TZXR0aW5ncycsIGNvbXBvbmVudDogU2V0dGluZ3MsIGFzOiAnU2V0dGluZ3MnfSxcclxuICAgIHtwYXRoOiAnL0hlbHAnLCBjb21wb25lbnQ6IEhlbHAsIGFzOiAnSGVscCd9LFxyXG4gICAge3BhdGg6ICcvTG9nb3V0JywgY29tcG9uZW50OiBMb2dvdXQsIGFzOiAnTG9nb3V0J31cclxuXSlcclxuXHJcbi8vQ2FuQWN0aXZhdGUgZXhhbXBsZSBvZiBob3cgdG8gYWxsb3cgY29uZGl0aW9uYWwgcm91dGUgYWNjZXNzIGFmdGVyIDEwbXMgb2YgUHJvbWlzZSByZXNvbHV0aW9uXHJcbi8vQENhbkFjdGl2YXRlKCgpID0+IHtcclxuLy8gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4vLyAgICAgICAgc2V0VGltZW91dChlPT4ge1xyXG4vLyAgICAgICAgICAgIHJlc29sdmUodHJ1ZSlcclxuLy8gICAgICAgIH0sIDEwKVxyXG4vLyAgICB9KVxyXG4vL30pXHJcbkBDb21wb25lbnQoe1xyXG4gICAgcHJvdmlkZXJzOiBbSFRUUF9QUk9WSURFUlMsIFRvZG9TdGF0c01vZGVsLCBUb2Rvc1NlcnZpY2UsIFRvZG9BY3Rpb25dLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcvc3JjL2NvbXBzL2FwcDEvQXBwMS5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgUm91dGVyTGluaywgTWVudSwgTWVudUl0ZW0sIFNsaWRlcnBhbmVsLCBEaWdnLCBDb250cmlidXRvcnMsXHJcbiAgICAgICAgVG9kb3MsIFRvZG8xLCBUb2RvMiwgVG9kb0xpc3QsIFRvZG9JdGVtLCBMb2dvdXQsIFNldHRpbmdzLCBIZWxwLCBUYWJzLCBUYWJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHAxIGltcGxlbWVudHMgT25BY3RpdmF0ZSwgQ2FuUmV1c2UsIE9uUmV1c2UsIE9uRGVhY3RpdmF0ZSB7XHJcbiAgICBwcml2YXRlIHJvdXRlckFjdGl2ZTpib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tbUJyb2tlcjpDb21tQnJva2VyLCBwcml2YXRlIHJvdXRlcjpSb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLmxpc3Rlbk1lbnVDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY29tbUJyb2tlci5nZXRTZXJ2aWNlKENvbnN0cy5TZXJ2aWNlcygpLkFwcCkuYXBwUmVzaXplZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBFeGFtcGxlcyBvbiByb3V0ZXIgbGlmZS1jeWNsZSBob29rcyAqKi9cclxuICAgIHJvdXRlckNhblJldXNlKG5leHQ6Q29tcG9uZW50SW5zdHJ1Y3Rpb24sIHByZXY6Q29tcG9uZW50SW5zdHJ1Y3Rpb24pIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByb3V0ZXJPblJldXNlKHRvOkNvbXBvbmVudEluc3RydWN0aW9uLCBmcm9tOkNvbXBvbmVudEluc3RydWN0aW9uKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0by5wYXJhbXNbJ25hbWUnXSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codG8udXJsUGF0aCA/IHRvLnVybFBhdGggOiAnJyArICcgJyArIGZyb20udXJsUGF0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgcm91dGVyT25BY3RpdmF0ZSh0bzpDb21wb25lbnRJbnN0cnVjdGlvbiwgZnJvbTpDb21wb25lbnRJbnN0cnVjdGlvbikge1xyXG4gICAgICAgIHRoaXMucm91dGVyQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvLyBkZW1vbnN0cmF0ZSBkZWxheSBvbiByb3V0aW5nLCBtYXliZSB0byBsb2FkIHNvbWUgc2VydmVyIGRhdGEgZmlyc3Qgb3Igc2hvdyBsb2FkaW5nIGJhclxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgfSwgMTApXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxpc3Rlbk1lbnVDaGFuZ2VzKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgdW5zdWIgPSBzZWxmLmNvbW1Ccm9rZXIub25FdmVudChDb25zdHMuRXZlbnRzKCkuTUVOVV9TRUxFQ1RJT04pLnN1YnNjcmliZSgoZTpJTWVzc2FnZSk9PiB7XHJcbiAgICAgICAgICAgIGlmICghc2VsZi5yb3V0ZXJBY3RpdmUpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGxldCBzY3JlZW4gPSAoZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgc2VsZi5yb3V0ZXIubmF2aWdhdGUoW2AvQXBwMS8ke3NjcmVlbn1gXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcm91dGVyT25EZWFjdGl2YXRlKG5leHQ6Q29tcG9uZW50SW5zdHJ1Y3Rpb24sIHByZXY6Q29tcG9uZW50SW5zdHJ1Y3Rpb24pIHtcclxuICAgICAgICB0aGlzLnJvdXRlckFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
