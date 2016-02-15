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
var http_1 = require('angular2/http');
var Lib_1 = require("../../../Lib");
require('rxjs/add/operator/share');
var TodoStatsModel_1 = require("./TodoStatsModel");
var TodoModel_1 = require("./TodoModel");
var index_1 = require("angular2-redux-util/dist/index");
var TodoAction_1 = require("./actions/TodoAction");
var url = 'http://secure.digitalsignage.com';
var TodoItemModel = (function () {
    function TodoItemModel(text, id) {
        this.task = text;
        this.id = id || Lib_1.Lib.guid();
    }
    Object.defineProperty(TodoItemModel.prototype, "text", {
        get: function () {
            console.log('getting value for task', this.task);
            return this.task;
        },
        set: function (value) {
            this.task = value;
        },
        enumerable: true,
        configurable: true
    });
    TodoItemModel.prototype.getTask = function () {
        return this.task;
    };
    return TodoItemModel;
}());
exports.TodoItemModel = TodoItemModel;
var TodoService = (function () {
    function TodoService(m_todoAction, _http, todoStatsModel, appStore) {
        this.m_todoAction = m_todoAction;
        this._http = _http;
        this.todoStatsModel = todoStatsModel;
        this.appStore = appStore;
        this.m_dataStore = { todos: [] };
        this.m_addTodoDispatch = this.m_todoAction.createDispatcher(this.appStore, this.m_todoAction.addTodoDispatch);
        this.m_clearTodoDispatch = this.m_todoAction.createDispatcher(this.appStore, this.m_todoAction.clearTodoDispatch);
    }
    TodoService.prototype.saveTodoRemote = function (todo, cb) {
        this.todoStatsModel.creates++;
        var sendData = JSON.stringify(todo);
        this._http.post(url + "/todos", sendData)
            .map(function (response) { return response.json(); }).subscribe(function (sendData) {
            cb(1);
        }, function (error) {
            console.log('Could not create todo.');
            cb(-1);
        });
    };
    TodoService.prototype.loadTodosRemote = function (cb) {
        var _this = this;
        this.m_clearTodoDispatch();
        this.todoStatsModel.reads++;
        console.log(url + "/todos");
        this._http.get(url + "/todos").map(function (response) { return response.json(); }).subscribe(function (data) {
            try {
                data = JSON.parse(data);
                cb(1);
            }
            catch (e) {
                cb(-1);
                return;
            }
            for (var i in data) {
                var todoModel = new TodoModel_1.TodoModel({ task: data[i]._data.task, modelId: data[i]._data.modelId });
                _this.m_addTodoDispatch(todoModel);
            }
        }, function (error) { return console.log("Could not load todos " + error); });
    };
    TodoService.prototype.removeTodoRemote = function (todoModel, cb) {
        this.todoStatsModel.deletes++;
        var modelId = todoModel.getKey('modelId');
        this._http.delete(url + "/todos/" + modelId).subscribe(function (response) {
            if (response.status == 200) {
                cb(1);
            }
            else {
                cb(-1);
            }
        }, function (error) { return console.log('Could not delete todo.'); });
    };
    TodoService.prototype.editTodoRemote = function (todoModel, cb) {
        this.todoStatsModel.updates++;
        var modelId = todoModel.getKey('modelId');
        var data = JSON.stringify(todoModel);
        this._http.put(url + "/todos/" + modelId, data).subscribe(function (response) {
            if (response.status == 200) {
                cb(1);
            }
            else {
                cb(-1);
            }
        }, function (error) { return console.log('Could not update todo.'); });
    };
    TodoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [TodoAction_1.TodoAction, http_1.Http, TodoStatsModel_1.default, index_1.AppStore])
    ], TodoService);
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=TodoService.js.map