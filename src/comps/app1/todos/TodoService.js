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
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, TodoStatsModel_1.default, (typeof (_b = typeof angular2_redux_util_1.AppStore !== 'undefined' && angular2_redux_util_1.AppStore) === 'function' && _b) || Object])
                ], TodoService);
                return TodoService;
                var _a, _b;
            }(angular2_redux_util_1.Actions));
            exports_1("TodoService", TodoService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDEvdG9kb3MvVG9kb1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBOENhLFFBQVEsRUFDUixXQUFXLEVBQ1gsU0FBUyxFQUNULFdBQVcsRUFJbEIsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFQSSxzQkFBQSxRQUFRLEdBQUcsVUFBVSxDQUFBLENBQUM7WUFDdEIseUJBQUEsV0FBVyxHQUFHLGFBQWEsQ0FBQSxDQUFDO1lBQzVCLHVCQUFBLFNBQVMsR0FBRyxXQUFXLENBQUEsQ0FBQztZQUN4Qix5QkFBQSxXQUFXLEdBQUcsYUFBYSxDQUFBLENBQUM7WUFJbkMsR0FBRyxHQUFXLGtDQUFrQyxDQUFDO1lBRXZEO2dCQUlJLHVCQUFZLElBQVksRUFBRSxFQUFXO29CQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDakIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksU0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUMvQixDQUFDO2dCQUVELHNCQUFJLCtCQUFJO3lCQUFSO3dCQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNqRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztvQkFDckIsQ0FBQzt5QkFFRCxVQUFTLEtBQUs7d0JBQ1YsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7b0JBQ3RCLENBQUM7OzttQkFKQTtnQkFNRCwrQkFBTyxHQUFQO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNyQixDQUFDO2dCQUNMLG9CQUFDO1lBQUQsQ0FyQkEsQUFxQkMsSUFBQTtZQXJCRCx5Q0FxQkMsQ0FBQTtZQU9EO2dCQUFpQywrQkFBTztnQkFNcEMscUJBQW9CLEtBQVcsRUFBVSxjQUE4QixFQUFVLFFBQWtCO29CQUMvRixpQkFBTyxDQUFDO29C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QyxTQUFTLEVBQUUsVUFBQyxNQUFjOzRCQUMxQyxFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQztnQ0FDNUMsTUFBTSxDQUFDOzRCQUNYLENBQUM7d0JBQ0wsQ0FBQyxDQUFDLENBQUM7b0JBQ1AsQ0FBQyxDQUFBO2dCQUNMLENBQUM7Z0JBRU0sc0NBQWdCLEdBQXZCLFVBQXdCLFNBQW9CO29CQUN4QyxNQUFNLENBQUM7d0JBQ0gsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsT0FBTyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO3dCQUNwQyxHQUFHLEVBQUUsTUFBTTt3QkFDWCxLQUFLLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQztxQkFDM0IsQ0FBQztnQkFDTixDQUFDO2dCQUVNLDJDQUFxQixHQUE1QixVQUE2QixTQUFvQjtvQkFDN0MsTUFBTSxDQUFDO3dCQUNILElBQUksRUFBRSxTQUFTO3dCQUNmLE9BQU8sRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQzt3QkFDcEMsR0FBRyxFQUFFLE9BQU87d0JBQ1osS0FBSyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO3FCQUNuQyxDQUFDO2dCQUNOLENBQUM7Z0JBdktMO29CQUFDLGlCQUFVLEVBQUU7OytCQUFBO2dCQXdLYixrQkFBQzs7WUFBRCxDQXZLQSxBQXVLQyxDQXZLZ0MsNkJBQU8sR0F1S3ZDO1lBdktELHFDQXVLQyxDQUFBIiwiZmlsZSI6ImNvbXBzL2FwcDEvdG9kb3MvVG9kb1NlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQW4gZXhhbXBsZSBvZiBob3cgdG8gcHJvdmlkZSBhIHNlcnZpY2UgbWFudWFsbHkgdGhhdCBkZXBlbmRzIG9uIG90aGVyIHNlcnZpY2VzXHJcbiBhcyB3ZWxsIGFzIGV4YW1wbGUgb2YgZmFjdG9yeSwgdXNlIHByb3ZpZGVyczogWyAuLi4gd2hlbiBpbnNpZGUgYSBjb21wb25lbnRcclxuIG9yIHZpYSBhIHB1cmUgcHJvdmlkZSAoLi4uIGlmIG5vdCFcclxuXHJcbiB3aGlsZSB0aGlzIG1heSBub3QgYmUgdGhlIGJlc3Qgd2F5IHRvIGFyY2hpdGVjdCB5b3VyIGFwcGxpY2F0aW9uLCB3ZSBzdGlsbCB1c2VcclxuIGl0IGhlcmUgYXMgY29kZSBzYW1wbGU6XHJcblxyXG4gZXhhbXBsZXMgMSB2aWEgY29tcG9uZW50IGRlY29yYXRpb246XHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuIHByb3ZpZGVyczogW1xyXG4gcHJvdmlkZSAoVG9kb1NlcnZpY2UsIHtcclxuICAgICAgICAgICAgICAgIHVzZUZhY3Rvcnk6ICh0b2RvQWN0aW9uLCBodHRwLCB0b2RvU3RhdHNNb2RlbCwgYXBwU3RvcmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHRvZG9BY3Rpb24oVG9kb0FjdGlvbiwgaHR0cCwgdG9kb1N0YXRzTW9kZWwsIGFwcFN0b3JlKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRlcHM6IFtUb2RvQWN0aW9uLCBIdHRwLCBUb2RvU3RhdHNNb2RlbCwgQXBwU3RvcmVdXHJcbiAgICAgICAgICAgIH0pXHJcbiBdXHJcblxyXG4gZXhhbXBsZXMgMiBpbiBjb250cm9sbGVyXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuIHZhciBwID0gcHJvdmlkZSAoVG9kb1NlcnZpY2UsIHtcclxuICAgICAgICAgICAgdXNlRmFjdG9yeTogKHRvZG9BY3Rpb24sIGh0dHAsIHRvZG9TdGF0c01vZGVsLCBhcHBTdG9yZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyB0b2RvQWN0aW9uKFRvZG9BY3Rpb24sIGh0dHAsIHRvZG9TdGF0c01vZGVsLCBhcHBTdG9yZSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVwczogW1RvZG9BY3Rpb24sIFRvZG9TdGF0c01vZGVsLCBBcHBTdG9yZV1cclxuICAgICAgICB9KVxyXG5cclxuIGV4YW1wbGVzIDMgaW4gY29udHJvbGxlclxyXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAqKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBJbmplY3RhYmxlLFxyXG4gICAgUmVmbGVjdGl2ZUluamVjdG9yXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge0xpYn0gZnJvbSBcIi4uLy4uLy4uL0xpYlwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9zaGFyZVwiO1xyXG5pbXBvcnQgVG9kb1N0YXRzTW9kZWwgZnJvbSBcIi4vVG9kb1N0YXRzTW9kZWxcIjtcclxuaW1wb3J0IHtUb2RvTW9kZWx9IGZyb20gXCIuL1RvZG9Nb2RlbFwiO1xyXG5pbXBvcnQge1xyXG4gICAgQXBwU3RvcmUsXHJcbiAgICBBY3Rpb25zXHJcbn0gZnJvbSBcImFuZ3VsYXIyLXJlZHV4LXV0aWxcIjtcclxuaW1wb3J0IHtDb21tQnJva2VyfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvQ29tbUJyb2tlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9UT0RPID0gJ0FERF9UT0RPJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9UT0RPID0gJ1JFTU9WRV9UT0RPJztcclxuZXhwb3J0IGNvbnN0IEVESVRfVE9ETyA9ICdFRElUX1RPRE8nO1xyXG5leHBvcnQgY29uc3QgQ0xFQVJfVE9ET1MgPSAnQ0xFQVJfVE9ET1MnO1xyXG5cclxuLy8gZGVidWcgc2VydmVyXHJcbi8vY29uc3QgdXJsOnN0cmluZyA9ICdodHRwOi8vc2VjdXJlLmRpZ2l0YWxzaWduYWdlLmNvbTo4MDgwJztcclxuY29uc3QgdXJsOiBzdHJpbmcgPSAnaHR0cDovL3NlY3VyZS5kaWdpdGFsc2lnbmFnZS5jb20nO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRvZG9JdGVtTW9kZWwge1xyXG4gICAgcHJpdmF0ZSB0YXNrOiBTdHJpbmc7XHJcbiAgICBwcml2YXRlIGlkOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGV4dDogU3RyaW5nLCBpZD86IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudGFzayA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkIHx8IExpYi5ndWlkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRleHQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dldHRpbmcgdmFsdWUgZm9yIHRhc2snLCB0aGlzLnRhc2spO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhc2s7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHRleHQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnRhc2sgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUYXNrKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhc2s7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFTdG9yZSB7XHJcbiAgICB0b2RvczogQXJyYXk8VG9kb0l0ZW1Nb2RlbD5cclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVG9kb1NlcnZpY2UgZXh0ZW5kcyBBY3Rpb25zIHtcclxuICAgIHByaXZhdGUgbV9kYXRhU3RvcmU6IElEYXRhU3RvcmU7XHJcbiAgICBwcml2YXRlIG1fYWRkVG9kb0Rpc3BhdGNoOiBGdW5jdGlvbjtcclxuICAgIHByaXZhdGUgbV9jbGVhclRvZG9EaXNwYXRjaDogRnVuY3Rpb247XHJcbiAgICBwcml2YXRlIG5ld09yZGVyTnVtYmVyOiBudW1iZXIgPSA5OTk5XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCwgcHJpdmF0ZSB0b2RvU3RhdHNNb2RlbDogVG9kb1N0YXRzTW9kZWwsIHByaXZhdGUgYXBwU3RvcmU6IEFwcFN0b3JlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm1fZGF0YVN0b3JlID0ge3RvZG9zOiBbXX07XHJcbiAgICAgICAgdGhpcy5tX2FkZFRvZG9EaXNwYXRjaCA9IHRoaXMuY3JlYXRlRGlzcGF0Y2hlcih0aGlzLmFkZFRvZG9EaXNwYXRjaCwgdGhpcy5hcHBTdG9yZSk7XHJcbiAgICAgICAgdGhpcy5tX2NsZWFyVG9kb0Rpc3BhdGNoID0gdGhpcy5jcmVhdGVEaXNwYXRjaGVyKHRoaXMuY2xlYXJUb2RvRGlzcGF0Y2gsIHRoaXMuYXBwU3RvcmUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIGZhY3RvcnlUb2RvU2VydmljZVxyXG4gICAgICogIGV4YW1wbGUgb2YgdG9kbyBzZXJ2aWNlIGNyZWF0b3JcclxuICAgICAqIEByZXR1cm5zIHthbnl9XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZmFjdG9yeVRvZG9TZXJ2aWNlKCk6VG9kb1NlcnZpY2Uge1xyXG4gICAgICAgIHZhciBpbmplY3RvciA9IFJlZmxlY3RpdmVJbmplY3Rvci5yZXNvbHZlQW5kQ3JlYXRlKFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBUb2RvU2VydmljZSxcclxuICAgICAgICAgICAgICAgIFRvZG9TdGF0c01vZGVsLFxyXG4gICAgICAgICAgICAgICAge3Byb3ZpZGU6IENvbW1Ccm9rZXIsIHVzZUNsYXNzOiBDb21tQnJva2VyfSxcclxuICAgICAgICAgICAgICAgIHtwcm92aWRlOiBBcHBTdG9yZSwgdXNlVmFsdWU6IHRoaXMuYXBwU3RvcmV9XHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgIHJldHVybiBpbmplY3Rvci5nZXQoVG9kb1NlcnZpY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzYXZlVG9kb1JlbW90ZSh0b2RvOiBUb2RvTW9kZWwsIGNiOiAoc3RhdHVzOiBudW1iZXIpPT52b2lkKSB7XHJcbiAgICAgICAgdGhpcy50b2RvU3RhdHNNb2RlbC5jcmVhdGVzKys7XHJcbiAgICAgICAgbGV0IHNlbmREYXRhID0gSlNPTi5zdHJpbmdpZnkodG9kbyk7XHJcbiAgICAgICAgdGhpcy5faHR0cC5wb3N0KGAke3VybH0vdG9kb3NgLCBzZW5kRGF0YSlcclxuICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnN1YnNjcmliZShzZW5kRGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGNiKDEpO1xyXG4gICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvdWxkIG5vdCBjcmVhdGUgdG9kby4nKTtcclxuICAgICAgICAgICAgY2IoLTEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkVG9kb3NSZW1vdGUoY2I6IChzdGF0dXM6IG51bWJlcik9PnZvaWQpIHtcclxuICAgICAgICB0aGlzLm1fY2xlYXJUb2RvRGlzcGF0Y2goKTtcclxuICAgICAgICB0aGlzLnRvZG9TdGF0c01vZGVsLnJlYWRzKys7XHJcbiAgICAgICAgdGhpcy5faHR0cC5nZXQoYCR7dXJsfS90b2Rvc2ApLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgY2IoMSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNiKC0xKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0b2RvTW9kZWw6IFRvZG9Nb2RlbCA9IG5ldyBUb2RvTW9kZWwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2s6IGRhdGFbaV0uX2RhdGEudGFzayxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbElkOiBkYXRhW2ldLl9kYXRhLm1vZGVsSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXI6IGlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2FkZFRvZG9EaXNwYXRjaCh0b2RvTW9kZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZXJyb3IgPT4gY29uc29sZS5sb2coYENvdWxkIG5vdCBsb2FkIHRvZG9zICR7ZXJyb3J9YCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVUb2RvUmVtb3RlKHRvZG9Nb2RlbDogVG9kb01vZGVsLCBjYjogKHN0YXR1czogbnVtYmVyKT0+dm9pZCkge1xyXG4gICAgICAgIHRoaXMudG9kb1N0YXRzTW9kZWwuZGVsZXRlcysrO1xyXG4gICAgICAgIHZhciBtb2RlbElkID0gdG9kb01vZGVsLmdldEtleSgnbW9kZWxJZCcpO1xyXG4gICAgICAgIHRoaXMuX2h0dHAuZGVsZXRlKGAke3VybH0vdG9kb3MvJHttb2RlbElkfWApLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBjYigxKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2IoLTEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZXJyb3IgPT4gY29uc29sZS5sb2coJ0NvdWxkIG5vdCBkZWxldGUgdG9kby4nKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVkaXRUb2RvUmVtb3RlKHRvZG9Nb2RlbDogVG9kb01vZGVsLCBjYjogKHN0YXR1czogbnVtYmVyKT0+dm9pZCkge1xyXG4gICAgICAgIHRoaXMudG9kb1N0YXRzTW9kZWwudXBkYXRlcysrO1xyXG4gICAgICAgIHZhciBtb2RlbElkID0gdG9kb01vZGVsLmdldEtleSgnbW9kZWxJZCcpO1xyXG4gICAgICAgIHZhciBkYXRhID0gSlNPTi5zdHJpbmdpZnkodG9kb01vZGVsKTtcclxuICAgICAgICB0aGlzLl9odHRwLnB1dChgJHt1cmx9L3RvZG9zLyR7bW9kZWxJZH1gLCBkYXRhKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgY2IoMSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNiKC0xKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIGVycm9yID0+IGNvbnNvbGUubG9nKCdDb3VsZCBub3QgdXBkYXRlIHRvZG8uJykpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRUb2RvKHRhc2s6IHN0cmluZywgaWQ/OiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBtb2RlbElkID0gaWQgfHwgXy51bmlxdWVJZCgpO1xyXG4gICAgICAgICAgICB2YXIgdG9kb01vZGVsOiBUb2RvTW9kZWwgPSBuZXcgVG9kb01vZGVsKHtcclxuICAgICAgICAgICAgICAgIHRhc2ssXHJcbiAgICAgICAgICAgICAgICBtb2RlbElkLFxyXG4gICAgICAgICAgICAgICAgb3JkZXI6IHRoaXMubmV3T3JkZXJOdW1iZXIrK1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5zYXZlVG9kb1JlbW90ZSh0b2RvTW9kZWwsIChzdGF0dXM6IG51bWJlcik9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9vdGJveC5hbGVydCgncHJvYmxlbSBzYXZpbmcgdG8gc2VydmVyIDEnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL2Rpc3BhdGNoKHt0eXBlOiBBRERfVE9ETywgdG9kb01vZGVsOiB0b2RvTW9kZWx9KTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHRoaXMuYWRkVG9kb0Rpc3BhdGNoKHRvZG9Nb2RlbCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZFRvZG9EaXNwYXRjaCh0b2RvTW9kZWw6IFRvZG9Nb2RlbCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9UT0RPLFxyXG4gICAgICAgICAgICB0b2RvTW9kZWw6IHRvZG9Nb2RlbFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyVG9kb0Rpc3BhdGNoKCkge1xyXG4gICAgICAgIHJldHVybiB7dHlwZTogQ0xFQVJfVE9ET1N9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVUb2RvKHRvZG9Nb2RlbDogVG9kb01vZGVsKSB7XHJcbiAgICAgICAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZVRvZG9SZW1vdGUodG9kb01vZGVsLCAoc3RhdHVzOiBudW1iZXIpPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvb3Rib3guYWxlcnQoJ3Byb2JsZW0gc2F2aW5nIHRvIHNlcnZlciAyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2godGhpcy5yZW1vdmVUb2RvRGlzcGF0Y2godG9kb01vZGVsKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlVG9kb0Rpc3BhdGNoKHRvZG9Nb2RlbDogVG9kb01vZGVsKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1RPRE8sXHJcbiAgICAgICAgICAgIG1vZGVsSWQ6IHRvZG9Nb2RlbC5nZXRLZXkoJ21vZGVsSWQnKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVkaXRUb2RvKHRvZG9Nb2RlbDogVG9kb01vZGVsKSB7XHJcbiAgICAgICAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh0aGlzLmVkaXRUb2RvRGlzcGF0Y2godG9kb01vZGVsKSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHRoaXMuZWRpdFRvZG9PcmRlckRpc3BhdGNoKHRvZG9Nb2RlbCkpO1xyXG4gICAgICAgICAgICB0aGlzLmVkaXRUb2RvUmVtb3RlKHRvZG9Nb2RlbCwgKHN0YXR1czogbnVtYmVyKT0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBib290Ym94LmFsZXJ0KCdwcm9ibGVtIHNhdmluZyB0byBzZXJ2ZXIgMycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlZGl0VG9kb0Rpc3BhdGNoKHRvZG9Nb2RlbDogVG9kb01vZGVsKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdHlwZTogRURJVF9UT0RPLFxyXG4gICAgICAgICAgICBtb2RlbElkOiB0b2RvTW9kZWwuZ2V0S2V5KCdtb2RlbElkJyksXHJcbiAgICAgICAgICAgIGtleTogJ3Rhc2snLFxyXG4gICAgICAgICAgICB2YWx1ZTogdG9kb01vZGVsWyd0YXNrJ11cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlZGl0VG9kb09yZGVyRGlzcGF0Y2godG9kb01vZGVsOiBUb2RvTW9kZWwpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0eXBlOiBFRElUX1RPRE8sXHJcbiAgICAgICAgICAgIG1vZGVsSWQ6IHRvZG9Nb2RlbC5nZXRLZXkoJ21vZGVsSWQnKSxcclxuICAgICAgICAgICAga2V5OiAnb3JkZXInLFxyXG4gICAgICAgICAgICB2YWx1ZTogdG9kb01vZGVsLmdldEtleSgnb3JkZXInKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
