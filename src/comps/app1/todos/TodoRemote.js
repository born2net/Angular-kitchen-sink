System.register(['angular2/core', 'angular2/http', "../../../Lib", 'rxjs/add/operator/share', "./TodoStatsModel"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Lib_1, TodoStatsModel_1;
    var url, TodoItemModel, TodosService;
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
            })();
            exports_1("TodoItemModel", TodoItemModel);
            TodosService = (function () {
                function TodosService(_http, todoStatsModel) {
                    this._http = _http;
                    this.todoStatsModel = todoStatsModel;
                    var self = this;
                    this.m_dataStore = { todos: [] };
                    this.loadTodos();
                }
                TodosService.prototype.addItem = function (newItem) {
                    var todo = new TodoItemModel(newItem);
                    this.m_dataStore.todos.push(todo);
                    this.createTodo(todo);
                };
                TodosService.prototype.removeItem = function (item) {
                    var index = this.m_dataStore.todos.indexOf(item);
                    this.m_dataStore.todos.splice(index, 1);
                    this.deleteTodo(item);
                };
                TodosService.prototype.editItem = function (item) {
                    var index = this.m_dataStore.todos.indexOf(item);
                    this.m_dataStore.todos[index].text = item.getTask();
                    this.updateTodo(item);
                };
                TodosService.prototype.getDataStore = function () {
                    return this.m_dataStore;
                };
                TodosService.prototype.loadTodos = function () {
                    var self = this;
                    this.todoStatsModel.reads++;
                    var channel = this._http.get(url + "/todos").map(function (response) { return response.json(); }).subscribe(function (data) {
                        try {
                            data = JSON.parse(data);
                        }
                        catch (e) {
                            channel.unsubscribe();
                            return;
                        }
                        for (var i in data) {
                            var todoItem = new TodoItemModel(data[i].task, data[i].id);
                            self.m_dataStore.todos.push(todoItem);
                        }
                        channel.unsubscribe();
                    }, function (error) { return console.log("Could not load todos " + error); });
                };
                TodosService.prototype.createTodo = function (todo) {
                    this.todoStatsModel.creates++;
                    var sendData = JSON.stringify(todo);
                    var channel = this._http.post(url + "/todos", sendData)
                        .map(function (response) { return response.json(); }).subscribe(function (sendData) {
                        channel.unsubscribe();
                    }, function (error) { return console.log('Could not create todo.'); });
                };
                TodosService.prototype.updateTodo = function (todo) {
                    this.todoStatsModel.updates++;
                    var channel = this._http.put(url + "/todos/" + todo.id, JSON.stringify(todo))
                        .map(function (response) { return response.json(); }).subscribe(function (data) {
                        channel.unsubscribe();
                    }, function (error) { return console.log('Could not update todo.'); });
                };
                TodosService.prototype.deleteTodo = function (todo) {
                    var _this = this;
                    this.todoStatsModel.deletes++;
                    var channel = this._http.delete(url + "/todos/" + todo.id).subscribe(function (response) {
                        _this.m_dataStore.todos.forEach(function (t, index) {
                            if (t.id === todo.id) {
                                _this.m_dataStore.todos.splice(index, 1);
                            }
                        });
                        channel.unsubscribe();
                    }, function (error) { return console.log('Could not delete todo.'); });
                };
                TodosService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, TodoStatsModel_1.default])
                ], TodosService);
                return TodosService;
            })();
            exports_1("TodosService", TodosService);
        }
    }
});
//# sourceMappingURL=TodoRemote.js.map