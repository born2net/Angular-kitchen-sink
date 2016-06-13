System.register(['@angular/core', '@angular/router', "@angular/http", "../sidemenu/Menu", "../sidemenu/MenuItem", "../../services/CommBroker", "../../../src/Conts", "../sliderpanel/Sliderpanel", "../digg/Digg", "../tabs/tabs", "../tabs/tab", "../logout/Logout", "./settings/Settings", "./help/Help", "./todos/Todo1", "./todos/Todo2", "./todos/Todolist", "./todos/Todoitem", "./todos/TodoStatsModel", "./help/contributors/contributors", "./todos/TodoService", "./todos/actions/TodoAction", "./todos/Todos"], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, Menu_1, MenuItem_1, CommBroker_1, Conts_1, Sliderpanel_1, Digg_1, tabs_1, tab_1, Logout_1, Settings_1, Help_1, Todo1_1, Todo2_1, Todolist_1, Todoitem_1, TodoStatsModel_1, contributors_1, TodoService_1, TodoAction_1, Todos_1;
    var App1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Menu_1_1) {
                Menu_1 = Menu_1_1;
            },
            function (MenuItem_1_1) {
                MenuItem_1 = MenuItem_1_1;
            },
            function (CommBroker_1_1) {
                CommBroker_1 = CommBroker_1_1;
            },
            function (Conts_1_1) {
                Conts_1 = Conts_1_1;
            },
            function (Sliderpanel_1_1) {
                Sliderpanel_1 = Sliderpanel_1_1;
            },
            function (Digg_1_1) {
                Digg_1 = Digg_1_1;
            },
            function (tabs_1_1) {
                tabs_1 = tabs_1_1;
            },
            function (tab_1_1) {
                tab_1 = tab_1_1;
            },
            function (Logout_1_1) {
                Logout_1 = Logout_1_1;
            },
            function (Settings_1_1) {
                Settings_1 = Settings_1_1;
            },
            function (Help_1_1) {
                Help_1 = Help_1_1;
            },
            function (Todo1_1_1) {
                Todo1_1 = Todo1_1_1;
            },
            function (Todo2_1_1) {
                Todo2_1 = Todo2_1_1;
            },
            function (Todolist_1_1) {
                Todolist_1 = Todolist_1_1;
            },
            function (Todoitem_1_1) {
                Todoitem_1 = Todoitem_1_1;
            },
            function (TodoStatsModel_1_1) {
                TodoStatsModel_1 = TodoStatsModel_1_1;
            },
            function (contributors_1_1) {
                contributors_1 = contributors_1_1;
            },
            function (TodoService_1_1) {
                TodoService_1 = TodoService_1_1;
            },
            function (TodoAction_1_1) {
                TodoAction_1 = TodoAction_1_1;
            },
            function (Todos_1_1) {
                Todos_1 = Todos_1_1;
            }],
        execute: function() {
            App1 = (function () {
                function App1(commBroker, router) {
                    this.commBroker = commBroker;
                    this.router = router;
                    this.listenMenuChanges();
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
                        providers: [http_1.HTTP_PROVIDERS, TodoStatsModel_1.default, TodoService_1.TodoService, TodoAction_1.TodoAction],
                        templateUrl: '/src/comps/app1/App1.html',
                        directives: [router_1.ROUTER_DIRECTIVES, Menu_1.Menu, MenuItem_1.MenuItem, Sliderpanel_1.Sliderpanel, Digg_1.Digg, contributors_1.Contributors,
                            Todos_1.Todos, Todo1_1.Todo1, Todo2_1.Todo2, Todolist_1.TodoList, Todoitem_1.TodoItem, Logout_1.Logout, Settings_1.Settings, tabs_1.Tabs, tab_1.Tab, Help_1.Help]
                    }), 
                    __metadata('design:paramtypes', [CommBroker_1.CommBroker, router_1.Router])
                ], App1);
                return App1;
            }());
            exports_1("App1", App1);
        }
    }
});
//# sourceMappingURL=App1.js.map