System.register(["@angular/core", "angular2-redux-util", "../TodoModel", "../../../../models/StoreModel", "../TodoService", "@angular/http", "../TodoStatsModel", "../../../../services/CommBroker", 'bootbox'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
    var core_1, angular2_redux_util_1, TodoModel_1, StoreModel_1, TodoService_1, http_1, TodoStatsModel_1, CommBroker_1, bootbox;
    var ADD_TODO, REMOVE_TODO, EDIT_TODO, CLEAR_TODOS, TodoAction;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_redux_util_1_1) {
                angular2_redux_util_1 = angular2_redux_util_1_1;
            },
            function (TodoModel_1_1) {
                TodoModel_1 = TodoModel_1_1;
            },
            function (StoreModel_1_1) {
                StoreModel_1 = StoreModel_1_1;
            },
            function (TodoService_1_1) {
                TodoService_1 = TodoService_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (TodoStatsModel_1_1) {
                TodoStatsModel_1 = TodoStatsModel_1_1;
            },
            function (CommBroker_1_1) {
                CommBroker_1 = CommBroker_1_1;
            },
            function (bootbox_1) {
                bootbox = bootbox_1;
            }],
        execute: function() {
            exports_1("ADD_TODO", ADD_TODO = 'ADD_TODO');
            exports_1("REMOVE_TODO", REMOVE_TODO = 'REMOVE_TODO');
            exports_1("EDIT_TODO", EDIT_TODO = 'EDIT_TODO');
            exports_1("CLEAR_TODOS", CLEAR_TODOS = 'CLEAR_TODOS');
            TodoAction = (function (_super) {
                __extends(TodoAction, _super);
                function TodoAction(appStore) {
                    _super.call(this);
                    this.appStore = appStore;
                    this.newOrderNumber = 9999;
                }
                TodoAction.prototype.factoryTodoService = function () {
                    if (this.service)
                        return this.service;
                    var injector = core_1.ReflectiveInjector.resolveAndCreate([
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
                        var todoModel = new TodoModel_1.TodoModel({ task: task, modelId: modelId, order: _this.newOrderNumber++ });
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
                    return { type: ADD_TODO, todoModel: todoModel };
                };
                TodoAction.prototype.clearTodoDispatch = function () {
                    return { type: CLEAR_TODOS };
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
                    return { type: REMOVE_TODO, modelId: todoModel.getKey('modelId') };
                };
                TodoAction.prototype.editTodo = function (todoModel) {
                    var _this = this;
                    this.factoryTodoService();
                    return function (dispatch) {
                        dispatch(_this.editTodoDispatch(todoModel));
                        dispatch(_this.editTodoOrderDispatch(todoModel));
                        _this.service.editTodoRemote(todoModel, function (status) {
                            if (status == -1) {
                                bootbox.alert('problem saving to server 3');
                                return;
                            }
                        });
                    };
                };
                TodoAction.prototype.editTodoDispatch = function (todoModel) {
                    return { type: EDIT_TODO, modelId: todoModel.getKey('modelId'), key: 'task', value: todoModel['task'] };
                };
                TodoAction.prototype.editTodoOrderDispatch = function (todoModel) {
                    return { type: EDIT_TODO, modelId: todoModel.getKey('modelId'), key: 'order', value: todoModel.getKey('order') };
                };
                TodoAction = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [angular2_redux_util_1.AppStore])
                ], TodoAction);
                return TodoAction;
            }(angular2_redux_util_1.Actions));
            exports_1("TodoAction", TodoAction);
        }
    }
});
//# sourceMappingURL=TodoAction.js.map