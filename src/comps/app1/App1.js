"use strict";
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
}());
exports.App1 = App1;
//# sourceMappingURL=App1.js.map