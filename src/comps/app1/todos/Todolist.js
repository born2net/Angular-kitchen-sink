System.register(['angular2/core', "./TodoRemote", "./Todoitem"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, TodoRemote_1, Todoitem_1;
    var TodoList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (TodoRemote_1_1) {
                TodoRemote_1 = TodoRemote_1_1;
            },
            function (Todoitem_1_1) {
                Todoitem_1 = Todoitem_1_1;
            }],
        execute: function() {
            TodoList = (function () {
                function TodoList(todoService) {
                    this.todoService = todoService;
                    this.newItem = '';
                    this.m_dataStore = todoService.getDataStore();
                }
                TodoList.prototype.addItem = function () {
                    if (this.newItem.length == 0)
                        return;
                    this.todoService.addItem(this.newItem);
                    this.newItem = '';
                };
                TodoList.prototype.removeItem = function (item) {
                    this.todoService.removeItem(item);
                };
                TodoList.prototype.editItem = function (item) {
                    this.todoService.editItem(item);
                };
                TodoList = __decorate([
                    core_1.Component({
                        selector: 'todo-list',
                        template: "\n                <section class=\"todoapp\">\n                  <header class=\"header\">\n                    <h1>your to-do's</h1>\n                    <input class=\"new-todo\" placeholder=\"What needs to be done?\"\n                    autofocus [(ngModel)]=\"newItem\" (keyup.enter)=\"addItem()\">\n                    <button class=\"add\" (click)=\"addItem()\">Add</button>\n                  </header>\n                  <section class=\"main\">\n                    <ul class=\"todo-list\">\n                      <li *ngFor=\"#item of m_dataStore.todos\">\n                        <todo-item [item]=\"item\" (done)=\"removeItem($event)\" (edit)=\"editItem($event)\">\n                        </todo-item>\n                      </li>\n                    </ul>\n                  </section>\n                </section>\n    ",
                        styleUrls: ['src/comps/app1/todos/todolist.css'],
                        directives: [Todoitem_1.TodoItem],
                        providers: [TodoRemote_1.TodosService]
                    }), 
                    __metadata('design:paramtypes', [TodoRemote_1.TodosService])
                ], TodoList);
                return TodoList;
            })();
            exports_1("TodoList", TodoList);
        }
    }
});
//# sourceMappingURL=todolist.js.map