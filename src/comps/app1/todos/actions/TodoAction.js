"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var angular2_redux_util_1 = require("angular2-redux-util");
var TodoModel_1 = require("../TodoModel");
var StoreModel_1 = require("../../../../models/StoreModel");
var TodoService_1 = require("../TodoService");
var http_1 = require("angular2/http");
var TodoStatsModel_1 = require("../TodoStatsModel");
var CommBroker_1 = require("../../../../services/CommBroker");
exports.ADD_TODO = 'ADD_TODO';
exports.REMOVE_TODO = 'REMOVE_TODO';
exports.EDIT_TODO = 'EDIT_TODO';
exports.CLEAR_TODOS = 'CLEAR_TODOS';
var bootbox = require('bootbox');
var TodoAction = (function (_super) {
    __extends(TodoAction, _super);
    function TodoAction(appStore) {
        _super.call(this);
        this.appStore = appStore;
    }
    TodoAction.prototype.factoryTodoService = function () {
        if (this.service)
            return this.service;
        var injector = core_1.Injector.resolveAndCreate([
            TodoService_1.TodoService,
            TodoAction,
            http_1.HTTP_PROVIDERS,
            TodoStatsModel_1.default,
            core_1.provide(CommBroker_1.CommBroker, { useClass: CommBroker_1.CommBroker }),
            core_1.provide(angular2_redux_util_1.AppStore, { useValue: this.appStore })
        ]);
        this.service = injector.get(TodoService_1.TodoService);
        return this.service;
    };
    TodoAction.prototype.addTodo = function (task, id) {
        var _this = this;
        this.factoryTodoService();
        return function (dispatch) {
            var modelId = id || StoreModel_1.StoreModel.UniqueId();
            var todoModel = new TodoModel_1.TodoModel({ task: task, modelId: modelId });
            _this.service.saveTodoRemote(todoModel, function (status) {
                if (status == -1) {
                    bootbox.alert('problem saving to server 1');
                    return;
                }
                dispatch(_this.addTodoDispatch(todoModel));
            });
        };
    };
    TodoAction.prototype.addTodoDispatch = function (todoModel) {
        return { type: exports.ADD_TODO, todoModel: todoModel };
    };
    TodoAction.prototype.clearTodoDispatch = function () {
        return { type: exports.CLEAR_TODOS };
    };
    TodoAction.prototype.removeTodo = function (todoModel) {
        var _this = this;
        this.factoryTodoService();
        return function (dispatch) {
            _this.service.removeTodoRemote(todoModel, function (status) {
                if (status == -1) {
                    bootbox.alert('problem saving to server 2');
                    return;
                }
                dispatch(_this.removeTodoDispatch(todoModel));
            });
        };
    };
    TodoAction.prototype.removeTodoDispatch = function (todoModel) {
        return { type: exports.REMOVE_TODO, modelId: todoModel.getKey('modelId') };
    };
    TodoAction.prototype.editTodo = function (todoModel) {
        var _this = this;
        this.factoryTodoService();
        return function (dispatch) {
            dispatch(_this.editTodoDispatch(todoModel));
            _this.service.editTodoRemote(todoModel, function (status) {
                if (status == -1) {
                    bootbox.alert('problem saving to server 3');
                    return;
                }
            });
        };
    };
    TodoAction.prototype.editTodoDispatch = function (todoModel) {
        return { type: exports.EDIT_TODO, modelId: todoModel.getKey('modelId'), key: 'task', value: todoModel['task'] };
    };
    TodoAction = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_redux_util_1.AppStore])
    ], TodoAction);
    return TodoAction;
}(angular2_redux_util_1.Actions));
exports.TodoAction = TodoAction;
//# sourceMappingURL=TodoAction.js.map