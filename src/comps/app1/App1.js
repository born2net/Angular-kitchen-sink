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
var App1 = (function () {
    function App1(params, commBroker, Consts, todoAction, todoService) {
        this.todoAction = todoAction;
        this.todoService = todoService;
        var self = this;
        self.commBroker = commBroker;
        self.screens = {
            todos: true,
            digg: false,
            settings: false,
            help: false,
            logout: false
        };
        self.listenMenuChanges();
    }
    App1.prototype.listenMenuChanges = function () {
        var self = this;
        self.commBroker.onEvent(Conts_1.Consts.Events().MENU_SELECTION).subscribe(function (e) {
            var screen = (e.message).toLowerCase();
            if (!self.screens.hasOwnProperty(screen)) {
                console.log('no screen by the name of ' + screen);
                return;
            }
            for (var screen_1 in self.screens)
                self.screens[screen_1] = false;
            self.screens[screen] = true;
        });
    };
    App1 = __decorate([
        core_1.Component({
            providers: [http_1.HTTP_PROVIDERS, TodoStatsModel_1.default, TodoService_1.TodosService, TodoAction_1.TodoAction],
            templateUrl: '/src/comps/app1/App1.html',
            directives: [router_1.ROUTER_DIRECTIVES, router_2.RouterLink, Menu_1.Menu, MenuItem_1.MenuItem, Sliderpanel_1.Sliderpanel, Digg_1.Digg, contributors_1.Contributors,
                Todo1_1.Todo1, Todo2_1.Todo2, Todolist_1.TodoList, Todoitem_1.TodoItem, Logout_1.Logout, Settings_1.Settings, Help_1.Help, tabs_1.Tabs, tab_1.Tab]
        }), 
        __metadata('design:paramtypes', [router_2.RouteParams, CommBroker_1.CommBroker, Conts_1.Consts, TodoAction_1.TodoAction, TodoService_1.TodosService])
    ], App1);
    return App1;
})();
exports.App1 = App1;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDEvYXBwMS50cyJdLCJuYW1lcyI6WyJBcHAxIiwiQXBwMS5jb25zdHJ1Y3RvciIsIkFwcDEubGlzdGVuTWVudUNoYW5nZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4Qyx1QkFBZ0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNsRCxxQkFBNkIsZUFBZSxDQUFDLENBQUE7QUFDN0MsdUJBQXNDLGlCQUFpQixDQUFDLENBQUE7QUFDeEQscUJBQW1CLGtCQUFrQixDQUFDLENBQUE7QUFDdEMseUJBQXVCLHNCQUFzQixDQUFDLENBQUE7QUFDOUMsMkJBQXlCLDJCQUEyQixDQUFDLENBQUE7QUFDckQsc0JBQXFCLG9CQUFvQixDQUFDLENBQUE7QUFFMUMsNEJBQTBCLDRCQUE0QixDQUFDLENBQUE7QUFDdkQscUJBQW1CLGNBQWMsQ0FBQyxDQUFBO0FBQ2xDLHFCQUFtQixjQUFjLENBQUMsQ0FBQTtBQUNsQyxvQkFBa0IsYUFBYSxDQUFDLENBQUE7QUFDaEMsdUJBQXFCLGtCQUFrQixDQUFDLENBQUE7QUFDeEMseUJBQXVCLHFCQUFxQixDQUFDLENBQUE7QUFDN0MscUJBQW1CLGFBQWEsQ0FBQyxDQUFBO0FBQ2pDLHNCQUFvQixlQUFlLENBQUMsQ0FBQTtBQUNwQyxzQkFBb0IsZUFBZSxDQUFDLENBQUE7QUFDcEMseUJBQXVCLGtCQUFrQixDQUFDLENBQUE7QUFDMUMseUJBQXVCLGtCQUFrQixDQUFDLENBQUE7QUFDMUMsK0JBQTJCLHdCQUF3QixDQUFDLENBQUE7QUFDcEQsNkJBQTJCLGtDQUFrQyxDQUFDLENBQUE7QUFDOUQsNEJBQTJCLHFCQUFxQixDQUFDLENBQUE7QUFDakQsMkJBQXlCLDRCQUE0QixDQUFDLENBQUE7QUFJdEQ7SUFVSUEsY0FBWUEsTUFBa0JBLEVBQUVBLFVBQXFCQSxFQUFFQSxNQUFhQSxFQUFVQSxVQUFxQkEsRUFBVUEsV0FBd0JBO1FBQXZEQyxlQUFVQSxHQUFWQSxVQUFVQSxDQUFXQTtRQUFVQSxnQkFBV0EsR0FBWEEsV0FBV0EsQ0FBYUE7UUFDaklBLElBQUlBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1FBQ2hCQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxVQUFVQSxDQUFDQTtRQUM3QkEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0E7WUFDWEEsS0FBS0EsRUFBRUEsSUFBSUE7WUFDWEEsSUFBSUEsRUFBRUEsS0FBS0E7WUFDWEEsUUFBUUEsRUFBRUEsS0FBS0E7WUFDZkEsSUFBSUEsRUFBRUEsS0FBS0E7WUFDWEEsTUFBTUEsRUFBRUEsS0FBS0E7U0FDaEJBLENBQUNBO1FBQ0ZBLElBQUlBLENBQUNBLGlCQUFpQkEsRUFBRUEsQ0FBQ0E7SUFDN0JBLENBQUNBO0lBRU1ELGdDQUFpQkEsR0FBeEJBO1FBQ0lFLElBQUlBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1FBQ2hCQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxPQUFPQSxDQUFDQSxjQUFNQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxjQUFjQSxDQUFDQSxDQUFDQSxTQUFTQSxDQUFDQSxVQUFDQSxDQUFVQTtZQUN6RUEsSUFBSUEsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0E7WUFDdkNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLGNBQWNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUN2Q0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsMkJBQTJCQSxHQUFHQSxNQUFNQSxDQUFDQSxDQUFDQTtnQkFDbERBLE1BQU1BLENBQUNBO1lBQ1hBLENBQUNBO1lBRURBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLFFBQU1BLElBQUlBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBO2dCQUM1QkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsUUFBTUEsQ0FBQ0EsR0FBR0EsS0FBS0EsQ0FBQ0E7WUFDakNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLElBQUlBLENBQUNBO1FBQ2hDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNQQSxDQUFDQTtJQXBDTEY7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1BBLFNBQVNBLEVBQUVBLENBQUNBLHFCQUFjQSxFQUFFQSx3QkFBY0EsRUFBRUEsMEJBQVlBLEVBQUVBLHVCQUFVQSxDQUFDQTtZQUNyRUEsV0FBV0EsRUFBRUEsMkJBQTJCQTtZQUN4Q0EsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWlCQSxFQUFFQSxtQkFBVUEsRUFBRUEsV0FBSUEsRUFBRUEsbUJBQVFBLEVBQUVBLHlCQUFXQSxFQUFFQSxXQUFJQSxFQUFFQSwyQkFBWUE7Z0JBQ3ZGQSxhQUFLQSxFQUFFQSxhQUFLQSxFQUFFQSxtQkFBUUEsRUFBRUEsbUJBQVFBLEVBQUVBLGVBQU1BLEVBQUVBLG1CQUFRQSxFQUFFQSxXQUFJQSxFQUFFQSxXQUFJQSxFQUFFQSxTQUFHQSxDQUFDQTtTQUMzRUEsQ0FBQ0E7O2FBZ0NEQTtJQUFEQSxXQUFDQTtBQUFEQSxDQXJDQSxBQXFDQ0EsSUFBQTtBQS9CWSxZQUFJLE9BK0JoQixDQUFBIiwiZmlsZSI6ImNvbXBzL2FwcDEvQXBwMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtIVFRQX1BST1ZJREVSU30gZnJvbSBcImFuZ3VsYXIyL2h0dHBcIjtcclxuaW1wb3J0IHtSb3V0ZXJMaW5rLCBSb3V0ZVBhcmFtc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtNZW51fSBmcm9tIFwiLi4vc2lkZW1lbnUvTWVudVwiO1xyXG5pbXBvcnQge01lbnVJdGVtfSBmcm9tIFwiLi4vc2lkZW1lbnUvTWVudUl0ZW1cIjtcclxuaW1wb3J0IHtDb21tQnJva2VyfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvQ29tbUJyb2tlclwiO1xyXG5pbXBvcnQge0NvbnN0c30gZnJvbSBcIi4uLy4uLy4uL3NyYy9Db250c1wiO1xyXG5pbXBvcnQge0lNZXNzYWdlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvQ29tbUJyb2tlclwiO1xyXG5pbXBvcnQge1NsaWRlcnBhbmVsfSBmcm9tIFwiLi4vc2xpZGVycGFuZWwvU2xpZGVycGFuZWxcIjtcclxuaW1wb3J0IHtEaWdnfSBmcm9tIFwiLi4vZGlnZy9EaWdnXCI7XHJcbmltcG9ydCB7VGFic30gZnJvbSBcIi4uL3RhYnMvdGFic1wiO1xyXG5pbXBvcnQge1RhYn0gZnJvbSBcIi4uL3RhYnMvdGFiXCI7XHJcbmltcG9ydCB7TG9nb3V0fSBmcm9tIFwiLi4vbG9nb3V0L0xvZ291dFwiO1xyXG5pbXBvcnQge1NldHRpbmdzfSBmcm9tIFwiLi9zZXR0aW5ncy9TZXR0aW5nc1wiO1xyXG5pbXBvcnQge0hlbHB9IGZyb20gXCIuL2hlbHAvSGVscFwiO1xyXG5pbXBvcnQge1RvZG8xfSBmcm9tIFwiLi90b2Rvcy9Ub2RvMVwiO1xyXG5pbXBvcnQge1RvZG8yfSBmcm9tIFwiLi90b2Rvcy9Ub2RvMlwiO1xyXG5pbXBvcnQge1RvZG9MaXN0fSBmcm9tIFwiLi90b2Rvcy9Ub2RvbGlzdFwiO1xyXG5pbXBvcnQge1RvZG9JdGVtfSBmcm9tIFwiLi90b2Rvcy9Ub2RvaXRlbVwiO1xyXG5pbXBvcnQgVG9kb1N0YXRzTW9kZWwgZnJvbSBcIi4vdG9kb3MvVG9kb1N0YXRzTW9kZWxcIjtcclxuaW1wb3J0IHtDb250cmlidXRvcnN9IGZyb20gXCIuL2hlbHAvY29udHJpYnV0b3JzL2NvbnRyaWJ1dG9yc1wiO1xyXG5pbXBvcnQge1RvZG9zU2VydmljZX0gZnJvbSBcIi4vdG9kb3MvVG9kb1NlcnZpY2VcIjtcclxuaW1wb3J0IHtUb2RvQWN0aW9ufSBmcm9tIFwiLi90b2Rvcy9hY3Rpb25zL1RvZG9BY3Rpb25cIjtcclxuLyoqXHJcbiBBcHBsaWNhdGlvbiAxIGxhenkgbG9hZGVkXHJcbiAqKi9cclxuQENvbXBvbmVudCh7XHJcbiAgICBwcm92aWRlcnM6IFtIVFRQX1BST1ZJREVSUywgVG9kb1N0YXRzTW9kZWwsIFRvZG9zU2VydmljZSwgVG9kb0FjdGlvbl0sXHJcbiAgICB0ZW1wbGF0ZVVybDogJy9zcmMvY29tcHMvYXBwMS9BcHAxLmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXJMaW5rLCBNZW51LCBNZW51SXRlbSwgU2xpZGVycGFuZWwsIERpZ2csIENvbnRyaWJ1dG9ycyxcclxuICAgICAgICBUb2RvMSwgVG9kbzIsIFRvZG9MaXN0LCBUb2RvSXRlbSwgTG9nb3V0LCBTZXR0aW5ncywgSGVscCwgVGFicywgVGFiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwMSB7XHJcbiAgICBwcml2YXRlIHNjcmVlbnM6YW55O1xyXG4gICAgcHJpdmF0ZSBjb21tQnJva2VyOkNvbW1Ccm9rZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zOlJvdXRlUGFyYW1zLCBjb21tQnJva2VyOkNvbW1Ccm9rZXIsIENvbnN0czpDb25zdHMsIHByaXZhdGUgdG9kb0FjdGlvbjpUb2RvQWN0aW9uLCBwcml2YXRlIHRvZG9TZXJ2aWNlOlRvZG9zU2VydmljZSkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBzZWxmLmNvbW1Ccm9rZXIgPSBjb21tQnJva2VyO1xyXG4gICAgICAgIHNlbGYuc2NyZWVucyA9IHtcclxuICAgICAgICAgICAgdG9kb3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRpZ2c6IGZhbHNlLFxyXG4gICAgICAgICAgICBzZXR0aW5nczogZmFsc2UsXHJcbiAgICAgICAgICAgIGhlbHA6IGZhbHNlLFxyXG4gICAgICAgICAgICBsb2dvdXQ6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZWxmLmxpc3Rlbk1lbnVDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxpc3Rlbk1lbnVDaGFuZ2VzKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBzZWxmLmNvbW1Ccm9rZXIub25FdmVudChDb25zdHMuRXZlbnRzKCkuTUVOVV9TRUxFQ1RJT04pLnN1YnNjcmliZSgoZTpJTWVzc2FnZSk9PiB7XHJcbiAgICAgICAgICAgIGxldCBzY3JlZW4gPSAoZS5tZXNzYWdlKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBpZiAoIXNlbGYuc2NyZWVucy5oYXNPd25Qcm9wZXJ0eShzY3JlZW4pKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gc2NyZWVuIGJ5IHRoZSBuYW1lIG9mICcgKyBzY3JlZW4pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBzY3JlZW4gaW4gc2VsZi5zY3JlZW5zKVxyXG4gICAgICAgICAgICAgICAgc2VsZi5zY3JlZW5zW3NjcmVlbl0gPSBmYWxzZTtcclxuICAgICAgICAgICAgc2VsZi5zY3JlZW5zW3NjcmVlbl0gPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
