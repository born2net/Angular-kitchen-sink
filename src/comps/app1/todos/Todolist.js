System.register(["@angular/core", "angular2-redux-util", "./TodoService", "./TodoModel", './Todolist.css!text'], function(exports_1, context_1) {
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
    var core_1, angular2_redux_util_1, TodoService_1, TodoModel_1, Todolist_css_text_1;
    var TodoList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_redux_util_1_1) {
                angular2_redux_util_1 = angular2_redux_util_1_1;
            },
            function (TodoService_1_1) {
                TodoService_1 = TodoService_1_1;
            },
            function (TodoModel_1_1) {
                TodoModel_1 = TodoModel_1_1;
            },
            function (Todolist_css_text_1_1) {
                Todolist_css_text_1 = Todolist_css_text_1_1;
            }],
        execute: function() {
            TodoList = (function () {
                function TodoList(todoService, appStore, appRef) {
                    var _this = this;
                    this.todoService = todoService;
                    this.appStore = appStore;
                    this.appRef = appRef;
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
                    this.addItem = todoService.createDispatcher(todoService.addTodo, appStore);
                    this.removeItem = todoService.createDispatcher(todoService.removeTodo, appStore);
                    this.editItem = todoService.createDispatcher(todoService.editTodo, appStore);
                }
                TodoList.prototype.onDrop = function (src, trg) {
                    var todos = this.appStore.getState().todos;
                    var trgOrder = trg.getKey('order');
                    var srcOrder;
                    todos.forEach(function (todo) {
                        if (todo.getModelId() == src)
                            srcOrder = parseInt(todo.getKey('order'));
                    });
                    this.moveRow(srcOrder, trgOrder);
                };
                TodoList.prototype.moveRow = function (src, trg) {
                    var _this = this;
                    src = parseInt(src);
                    trg = parseInt(trg);
                    var todos = this.appStore.getState().todos;
                    function getTodoModelByOrder(order) {
                        var index = todos.findIndex(function (i) { return i.getKey('order') == order; });
                        return todos.get(index);
                    }
                    if (src > trg) {
                        todos.forEach(function (todo) {
                            var curr = parseInt(todo.getKey('order'));
                            if (curr >= trg) {
                                todo = todo.setKey(TodoModel_1.TodoModel, 'order', curr + 1);
                                todo['task'] = todo.getKey('task');
                                _this.editItem(todo);
                            }
                        });
                        var todoSrc = getTodoModelByOrder(src);
                        todoSrc = todoSrc.setKey(TodoModel_1.TodoModel, 'order', trg);
                        todoSrc['task'] = todoSrc.getKey('task');
                        this.editItem(todoSrc);
                    }
                    else {
                        todos.forEach(function (todo) {
                            var curr = parseInt(todo.getKey('order'));
                            if (curr <= trg) {
                                todo = todo.setKey(TodoModel_1.TodoModel, 'order', curr - 1);
                                todo['task'] = todo.getKey('task');
                                _this.editItem(todo);
                            }
                        });
                        var todoSrc = getTodoModelByOrder(src);
                        todoSrc = todoSrc.setKey(TodoModel_1.TodoModel, 'order', trg);
                        todoSrc['task'] = todoSrc.getKey('task');
                        this.editItem(todoSrc);
                    }
                };
                TodoList.prototype.identify = function (index, item) {
                    return item.getModelId();
                };
                TodoList = __decorate([
                    core_1.Component({
                        selector: 'todo-list',
                        moduleId: __moduleName,
                        template: "\n                <section class=\"todoapp\" style=\"height: 500px\">\n                  <header class=\"header\">\n                    <h1>your to-do's</h1>\n                    <input class=\"new-todo\" placeholder=\"What needs to be done?\"\n                    autofocus [(ngModel)]=\"newItem\" (keyup.enter)=\"addItem(newItem)\">\n                    <button class=\"btn btn-default btn-lg\" (click)=\"addItem(newItem)\">Add todo</button>\n                  </header>\n                  <section class=\"main\">\n                    <ul class=\"todo-list\">\n                      <li *ngFor=\"let item of m_dataStore | sortBy;  let i=index;trackBy:identify\" nodeLogger=\"{{item}}\"> \n                        <todo-item [item]=\"item\" (done)=\"removeItem($event)\"\n                             [makeDraggable]=\"item\" makeDroppable (dropped)=\"onDrop($event, item)\"\n                            (edit)=\"editItem($event)\">\n                        </todo-item>\n                      </li>\n                    </ul>\n                  </section>\n                </section>\n    ",
                        styles: [Todolist_css_text_1.default]
                    }), 
                    __metadata('design:paramtypes', [TodoService_1.TodoService, angular2_redux_util_1.AppStore, core_1.ApplicationRef])
                ], TodoList);
                return TodoList;
            }());
            exports_1("TodoList", TodoList);
        }
    }
});
