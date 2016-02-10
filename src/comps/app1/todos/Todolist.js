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
var TodoService_1 = require("./TodoService");
var Todoitem_1 = require("./Todoitem");
var TodoAction_1 = require("./actions/TodoAction");
var index_1 = require("angular2-redux-util/dist/index");
var TodoList = (function () {
    function TodoList(todoService, todoAction, appStore) {
        var _this = this;
        this.todoService = todoService;
        this.todoAction = todoAction;
        this.appStore = appStore;
        this.newItem = '';
        this.m_dataStore = [];
        todoService.action = todoAction;
        todoAction.service = todoService;
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
        __metadata('design:paramtypes', [TodoService_1.TodosService, TodoAction_1.TodoAction, index_1.AppStore])
    ], TodoList);
    return TodoList;
})();
exports.TodoList = TodoList;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDEvdG9kb3MvdG9kb2xpc3QudHMiXSwibmFtZXMiOlsiVG9kb0xpc3QiLCJUb2RvTGlzdC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLDRCQUFzRCxlQUFlLENBQUMsQ0FBQTtBQUN0RSx5QkFBdUIsWUFBWSxDQUFDLENBQUE7QUFFcEMsMkJBQXlCLHNCQUFzQixDQUFDLENBQUE7QUFDaEQsc0JBQXVCLGdDQUFnQyxDQUFDLENBQUE7QUFLeEQ7SUE4QklBLGtCQUFvQkEsV0FBd0JBLEVBQVVBLFVBQXFCQSxFQUFVQSxRQUFpQkE7UUE5QjFHQyxpQkFpRENBO1FBbkJ1QkEsZ0JBQVdBLEdBQVhBLFdBQVdBLENBQWFBO1FBQVVBLGVBQVVBLEdBQVZBLFVBQVVBLENBQVdBO1FBQVVBLGFBQVFBLEdBQVJBLFFBQVFBLENBQVNBO1FBTnRHQSxZQUFPQSxHQUFHQSxFQUFFQSxDQUFDQTtRQUNMQSxnQkFBV0EsR0FBT0EsRUFBRUEsQ0FBQ0E7UUFNekJBLFdBQVdBLENBQUNBLE1BQU1BLEdBQUdBLFVBQVVBLENBQUNBO1FBQ2hDQSxVQUFVQSxDQUFDQSxPQUFPQSxHQUFHQSxXQUFXQSxDQUFDQTtRQUVqQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsZUFBZUEsQ0FBQ0EsVUFBQ0EsTUFBYUE7WUFDM0NBLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUNmQSxNQUFNQSxDQUFDQTtZQUNYQSxDQUFDQTtRQUNMQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUVIQSxRQUFRQSxDQUFDQSxTQUFTQSxDQUFDQSxVQUFDQSxJQUFJQSxFQUFFQSxJQUFJQSxFQUFFQSxLQUFLQTtZQUNqQ0EsS0FBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsS0FBS0EsQ0FBQ0E7WUFDekJBLEtBQUlBLENBQUNBLE9BQU9BLEdBQUdBLEVBQUVBLENBQUNBO1FBQ3RCQSxDQUFDQSxFQUFFQSxPQUFPQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUVsQkEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsVUFBVUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxRQUFRQSxFQUFFQSxVQUFVQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtRQUN6RUEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsVUFBVUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxRQUFRQSxFQUFFQSxVQUFVQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTtRQUMvRUEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsVUFBVUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxRQUFRQSxFQUFFQSxVQUFVQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtJQUMvRUEsQ0FBQ0E7SUFoRExEO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxXQUFXQTtZQUNyQkEsUUFBUUEsRUFBRUEscTJCQWlCVEE7WUFDREEsU0FBU0EsRUFBRUEsQ0FBQ0Esa0NBQWtDQSxDQUFDQTtZQUMvQ0EsVUFBVUEsRUFBRUEsQ0FBQ0EsbUJBQVFBLENBQUNBO1NBQ3pCQSxDQUFDQTs7aUJBMkJEQTtJQUFEQSxlQUFDQTtBQUFEQSxDQWpEQSxBQWlEQ0EsSUFBQTtBQTFCWSxnQkFBUSxXQTBCcEIsQ0FBQSIsImZpbGUiOiJjb21wcy9hcHAxL3RvZG9zL1RvZG9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1RvZG9zU2VydmljZSwgSURhdGFTdG9yZSwgVG9kb0l0ZW1Nb2RlbH0gZnJvbSBcIi4vVG9kb1NlcnZpY2VcIjtcclxuaW1wb3J0IHtUb2RvSXRlbX0gZnJvbSBcIi4vVG9kb2l0ZW1cIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7VG9kb0FjdGlvbn0gZnJvbSBcIi4vYWN0aW9ucy9Ub2RvQWN0aW9uXCI7XHJcbmltcG9ydCB7QXBwU3RvcmV9IGZyb20gXCJhbmd1bGFyMi1yZWR1eC11dGlsL2Rpc3QvaW5kZXhcIjtcclxuXHJcbnR5cGUgY2hhbm5lbFRvZG9PYnNlcnZhYmxlID0gT2JzZXJ2YWJsZTxUb2RvSXRlbT47XHJcbnR5cGUgY2hhbm5lbFRvZG9zT2JzZXJ2YWJsZSA9IE9ic2VydmFibGU8QXJyYXk8Y2hhbm5lbFRvZG9PYnNlcnZhYmxlPj47XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndG9kby1saXN0JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInRvZG9hcHBcIj5cclxuICAgICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzcz1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT55b3VyIHRvLWRvJ3M8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cIm5ldy10b2RvXCIgcGxhY2Vob2xkZXI9XCJXaGF0IG5lZWRzIHRvIGJlIGRvbmU/XCJcclxuICAgICAgICAgICAgICAgICAgICBhdXRvZm9jdXMgWyhuZ01vZGVsKV09XCJuZXdJdGVtXCIgKGtleXVwLmVudGVyKT1cImFkZEl0ZW0obmV3SXRlbSlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1sZ1wiIChjbGljayk9XCJhZGRJdGVtKG5ld0l0ZW0pXCI+QWRkIHRvZG88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibWFpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInRvZG8tbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cIiNpdGVtIG9mIG1fZGF0YVN0b3JlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0b2RvLWl0ZW0gW2l0ZW1dPVwiaXRlbVwiIChkb25lKT1cInJlbW92ZUl0ZW0oJGV2ZW50KVwiIChlZGl0KT1cImVkaXRJdGVtKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90b2RvLWl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgIGAsXHJcbiAgICBzdHlsZVVybHM6IFsnLi4vY29tcHMvYXBwMS90b2Rvcy9Ub2RvbGlzdC5jc3MnXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtUb2RvSXRlbV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb2RvTGlzdCB7XHJcbiAgICBuZXdJdGVtID0gJyc7XHJcbiAgICBwcml2YXRlIG1fZGF0YVN0b3JlOmFueSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBhZGRJdGVtOkZ1bmN0aW9uO1xyXG4gICAgcHJpdmF0ZSBlZGl0SXRlbTpGdW5jdGlvbjtcclxuICAgIHByaXZhdGUgcmVtb3ZlSXRlbTpGdW5jdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRvZG9TZXJ2aWNlOlRvZG9zU2VydmljZSwgcHJpdmF0ZSB0b2RvQWN0aW9uOlRvZG9BY3Rpb24sIHByaXZhdGUgYXBwU3RvcmU6QXBwU3RvcmUpIHtcclxuICAgICAgICB0b2RvU2VydmljZS5hY3Rpb24gPSB0b2RvQWN0aW9uO1xyXG4gICAgICAgIHRvZG9BY3Rpb24uc2VydmljZSA9IHRvZG9TZXJ2aWNlO1xyXG5cclxuICAgICAgICB0aGlzLnRvZG9TZXJ2aWNlLmxvYWRUb2Rvc1JlbW90ZSgoc3RhdHVzOm51bWJlcik9PiB7XHJcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhcHBTdG9yZS5zdWJzY3JpYmUoKHBhdGgsIHByZXYsIHN0b3JlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubV9kYXRhU3RvcmUgPSBzdG9yZTtcclxuICAgICAgICAgICAgdGhpcy5uZXdJdGVtID0gJyc7XHJcbiAgICAgICAgfSwgJ3RvZG9zJywgdHJ1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkSXRlbSA9IHRvZG9BY3Rpb24uY3JlYXRlRGlzcGF0Y2hlcihhcHBTdG9yZSwgdG9kb0FjdGlvbi5hZGRUb2RvKTtcclxuICAgICAgICB0aGlzLnJlbW92ZUl0ZW0gPSB0b2RvQWN0aW9uLmNyZWF0ZURpc3BhdGNoZXIoYXBwU3RvcmUsIHRvZG9BY3Rpb24ucmVtb3ZlVG9kbyk7XHJcbiAgICAgICAgdGhpcy5lZGl0SXRlbSA9IHRvZG9BY3Rpb24uY3JlYXRlRGlzcGF0Y2hlcihhcHBTdG9yZSwgdG9kb0FjdGlvbi5lZGl0VG9kbyk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
