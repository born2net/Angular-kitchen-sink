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
var Todoitem_1 = require("./Todoitem");
var TodoAction_1 = require("./actions/TodoAction");
var index_1 = require("angular2-redux-util/dist/index");
var TodoService_1 = require("./TodoService");
var TodoList = (function () {
    function TodoList(todoService, todoAction, appStore) {
        var _this = this;
        this.todoService = todoService;
        this.todoAction = todoAction;
        this.appStore = appStore;
        this.newItem = '';
        this.m_dataStore = [];
        this.todoService.loadTodosRemote(function (status) {
            if (status == -1) {
                return;
            }
        });
        appStore.subscribe(function (path, prev, store) {
            _this.m_dataStore = store;
            _this.newItem = '';
        }, 'todos', true);
        this.addItem = todoAction.createDispatcher(appStore, todoAction.addTodo);
        this.removeItem = todoAction.createDispatcher(appStore, todoAction.removeTodo);
        this.editItem = todoAction.createDispatcher(appStore, todoAction.editTodo);
    }
    TodoList = __decorate([
        core_1.Component({
            selector: 'todo-list',
            template: "\n                <section class=\"todoapp\">\n                  <header class=\"header\">\n                    <h1>your to-do's</h1>\n                    <input class=\"new-todo\" placeholder=\"What needs to be done?\"\n                    autofocus [(ngModel)]=\"newItem\" (keyup.enter)=\"addItem(newItem)\">\n                    <button class=\"btn btn-default btn-lg\" (click)=\"addItem(newItem)\">Add todo</button>\n                  </header>\n                  <section class=\"main\">\n                    <ul class=\"todo-list\">\n                      <li *ngFor=\"#item of m_dataStore\">\n                        <todo-item [item]=\"item\" (done)=\"removeItem($event)\" (edit)=\"editItem($event)\">\n                        </todo-item>\n                      </li>\n                    </ul>\n                  </section>\n                </section>\n    ",
            styleUrls: ['../comps/app1/todos/Todolist.css'],
            directives: [Todoitem_1.TodoItem],
        }), 
        __metadata('design:paramtypes', [TodoService_1.TodoService, TodoAction_1.TodoAction, index_1.AppStore])
    ], TodoList);
    return TodoList;
}());
exports.TodoList = TodoList;
//# sourceMappingURL=Todolist.js.map