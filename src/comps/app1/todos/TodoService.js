System.register(["@angular/core", "@angular/http", "../../../Lib", "rxjs/add/operator/share", "./TodoStatsModel", "./TodoModel", "angular2-redux-util", "../../../services/CommBroker"], function(exports_1, context_1) {
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
    var core_1, http_1, Lib_1, TodoStatsModel_1, TodoModel_1, angular2_redux_util_1, CommBroker_1;
    var ADD_TODO, REMOVE_TODO, EDIT_TODO, CLEAR_TODOS, url, TodoItemModel, TodoService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Lib_1_1) {
                Lib_1 = Lib_1_1;
            },
            function (_1) {},
            function (TodoStatsModel_1_1) {
                TodoStatsModel_1 = TodoStatsModel_1_1;
            },
            function (TodoModel_1_1) {
                TodoModel_1 = TodoModel_1_1;
            },
            function (angular2_redux_util_1_1) {
                angular2_redux_util_1 = angular2_redux_util_1_1;
            },
            function (CommBroker_1_1) {
                CommBroker_1 = CommBroker_1_1;
            }],
        execute: function() {
            exports_1("ADD_TODO", ADD_TODO = 'ADD_TODO');
            exports_1("REMOVE_TODO", REMOVE_TODO = 'REMOVE_TODO');
            exports_1("EDIT_TODO", EDIT_TODO = 'EDIT_TODO');
            exports_1("CLEAR_TODOS", CLEAR_TODOS = 'CLEAR_TODOS');
            url = 'http://secure.digitalsignage.com';
            TodoItemModel = (function () {
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
            exports_1("TodoItemModel", TodoItemModel);
            TodoService = (function (_super) {
                __extends(TodoService, _super);
                function TodoService(_http, todoStatsModel, appStore) {
                    _super.call(this);
                    this._http = _http;
                    this.todoStatsModel = todoStatsModel;
                    this.appStore = appStore;
                    this.newOrderNumber = 9999;
                    this.m_dataStore = { todos: [] };
                    this.m_addTodoDispatch = this.createDispatcher(this.addTodoDispatch, this.appStore);
                    this.m_clearTodoDispatch = this.createDispatcher(this.clearTodoDispatch, this.appStore);
                }
                TodoService.prototype.factoryTodoService = function () {
                    var injector = core_1.ReflectiveInjector.resolveAndCreate([
                        TodoService,
                        TodoStatsModel_1.default,
                        { provide: CommBroker_1.CommBroker, useClass: CommBroker_1.CommBroker },
                        { provide: angular2_redux_util_1.AppStore, useValue: this.appStore }
                    ]);
                    return injector.get(TodoService);
                };
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
                            var todoModel = new TodoModel_1.TodoModel({
                                task: data[i]._data.task,
                                modelId: data[i]._data.modelId,
                                order: i
                            });
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
                TodoService.prototype.addTodo = function (task, id) {
                    var _this = this;
                    return function (dispatch) {
                        var modelId = id || _.uniqueId();
                        var todoModel = new TodoModel_1.TodoModel({
                            task: task,
                            modelId: modelId,
                            order: _this.newOrderNumber++
                        });
                        _this.saveTodoRemote(todoModel, function (status) {
                            if (status == -1) {
                                bootbox.alert('problem saving to server 1');
                                return;
                            }
                            dispatch(_this.addTodoDispatch(todoModel));
                        });
                    };
                };
                TodoService.prototype.addTodoDispatch = function (todoModel) {
                    return {
                        type: ADD_TODO,
                        todoModel: todoModel
                    };
                };
                TodoService.prototype.clearTodoDispatch = function () {
                    return { type: CLEAR_TODOS };
                };
                TodoService.prototype.removeTodo = function (todoModel) {
                    var _this = this;
                    return function (dispatch) {
                        _this.removeTodoRemote(todoModel, function (status) {
                            if (status == -1) {
                                bootbox.alert('problem saving to server 2');
                                return;
                            }
                            dispatch(_this.removeTodoDispatch(todoModel));
                        });
                    };
                };
                TodoService.prototype.removeTodoDispatch = function (todoModel) {
                    return {
                        type: REMOVE_TODO,
                        modelId: todoModel.getKey('modelId')
                    };
                };
                TodoService.prototype.editTodo = function (todoModel) {
                    var _this = this;
                    return function (dispatch) {
                        dispatch(_this.editTodoDispatch(todoModel));
                        dispatch(_this.editTodoOrderDispatch(todoModel));
                        _this.editTodoRemote(todoModel, function (status) {
                            if (status == -1) {
                                bootbox.alert('problem saving to server 3');
                                return;
                            }
                        });
                    };
                };
                TodoService.prototype.editTodoDispatch = function (todoModel) {
                    return {
                        type: EDIT_TODO,
                        modelId: todoModel.getKey('modelId'),
                        key: 'task',
                        value: todoModel['task']
                    };
                };
                TodoService.prototype.editTodoOrderDispatch = function (todoModel) {
                    return {
                        type: EDIT_TODO,
                        modelId: todoModel.getKey('modelId'),
                        key: 'order',
                        value: todoModel.getKey('order')
                    };
                };
                TodoService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, TodoStatsModel_1.default, angular2_redux_util_1.AppStore])
                ], TodoService);
                return TodoService;
            }(angular2_redux_util_1.Actions));
            exports_1("TodoService", TodoService);
        }
    }
});
