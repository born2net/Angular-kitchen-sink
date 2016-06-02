System.register(['@angular/core', '@angular/http', "../../../Lib", 'rxjs/add/operator/share', "./TodoStatsModel", "./TodoModel", "angular2-redux-util/dist/index", "./actions/TodoAction"], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, http_1, Lib_1, TodoStatsModel_1, TodoModel_1, index_1, TodoAction_1;
    var url, TodoItemModel, TodoService;
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
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (TodoAction_1_1) {
                TodoAction_1 = TodoAction_1_1;
            }],
        execute: function() {
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
            TodoService = (function () {
                function TodoService(m_todoAction, _http, todoStatsModel, appStore) {
                    this.m_todoAction = m_todoAction;
                    this._http = _http;
                    this.todoStatsModel = todoStatsModel;
                    this.appStore = appStore;
                    this.m_dataStore = { todos: [] };
                    this.m_addTodoDispatch = this.m_todoAction.createDispatcher(this.m_todoAction.addTodoDispatch, this.appStore);
                    this.m_clearTodoDispatch = this.m_todoAction.createDispatcher(this.m_todoAction.clearTodoDispatch, this.appStore);
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
                            var todoModel = new TodoModel_1.TodoModel({ task: data[i]._data.task, modelId: data[i]._data.modelId, order: i });
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
                    __param(0, core_1.Inject(TodoAction_1.TodoAction)), 
                    __metadata('design:paramtypes', [TodoAction_1.TodoAction, http_1.Http, TodoStatsModel_1.default, index_1.AppStore])
                ], TodoService);
                return TodoService;
            }());
            exports_1("TodoService", TodoService);
        }
    }
});
//# sourceMappingURL=TodoService.js.map