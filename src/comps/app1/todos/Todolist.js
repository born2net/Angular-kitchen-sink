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
                bootbox.alert('problem saving to server');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDEvdG9kb3MvdG9kb2xpc3QudHMiXSwibmFtZXMiOlsiVG9kb0xpc3QiLCJUb2RvTGlzdC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLDRCQUFzRCxlQUFlLENBQUMsQ0FBQTtBQUN0RSx5QkFBdUIsWUFBWSxDQUFDLENBQUE7QUFFcEMsMkJBQXlCLHNCQUFzQixDQUFDLENBQUE7QUFDaEQsc0JBQXVCLGdDQUFnQyxDQUFDLENBQUE7QUFLeEQ7SUE4QklBLGtCQUFvQkEsV0FBd0JBLEVBQVVBLFVBQXFCQSxFQUFVQSxRQUFpQkE7UUE5QjFHQyxpQkFrRENBO1FBcEJ1QkEsZ0JBQVdBLEdBQVhBLFdBQVdBLENBQWFBO1FBQVVBLGVBQVVBLEdBQVZBLFVBQVVBLENBQVdBO1FBQVVBLGFBQVFBLEdBQVJBLFFBQVFBLENBQVNBO1FBTnRHQSxZQUFPQSxHQUFHQSxFQUFFQSxDQUFDQTtRQUNMQSxnQkFBV0EsR0FBT0EsRUFBRUEsQ0FBQ0E7UUFNekJBLFdBQVdBLENBQUNBLE1BQU1BLEdBQUdBLFVBQVVBLENBQUNBO1FBQ2hDQSxVQUFVQSxDQUFDQSxPQUFPQSxHQUFHQSxXQUFXQSxDQUFDQTtRQUVqQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsZUFBZUEsQ0FBQ0EsVUFBQ0EsTUFBYUE7WUFDM0NBLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUNmQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSwwQkFBMEJBLENBQUNBLENBQUNBO2dCQUMxQ0EsTUFBTUEsQ0FBQ0E7WUFDWEEsQ0FBQ0E7UUFDTEEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFFSEEsUUFBUUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsVUFBQ0EsSUFBSUEsRUFBRUEsSUFBSUEsRUFBRUEsS0FBS0E7WUFDakNBLEtBQUlBLENBQUNBLFdBQVdBLEdBQUdBLEtBQUtBLENBQUNBO1lBQ3pCQSxLQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxFQUFFQSxDQUFDQTtRQUN0QkEsQ0FBQ0EsRUFBRUEsT0FBT0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFFbEJBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLFVBQVVBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsUUFBUUEsRUFBRUEsVUFBVUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7UUFDekVBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLFVBQVVBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsUUFBUUEsRUFBRUEsVUFBVUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0E7UUFDL0VBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLFVBQVVBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsUUFBUUEsRUFBRUEsVUFBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7SUFDL0VBLENBQUNBO0lBakRMRDtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsV0FBV0E7WUFDckJBLFFBQVFBLEVBQUVBLHEyQkFpQlRBO1lBQ0RBLFNBQVNBLEVBQUVBLENBQUNBLGtDQUFrQ0EsQ0FBQ0E7WUFDL0NBLFVBQVVBLEVBQUVBLENBQUNBLG1CQUFRQSxDQUFDQTtTQUN6QkEsQ0FBQ0E7O2lCQTRCREE7SUFBREEsZUFBQ0E7QUFBREEsQ0FsREEsQUFrRENBLElBQUE7QUEzQlksZ0JBQVEsV0EyQnBCLENBQUEiLCJmaWxlIjoiY29tcHMvYXBwMS90b2Rvcy9Ub2RvbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtUb2Rvc1NlcnZpY2UsIElEYXRhU3RvcmUsIFRvZG9JdGVtTW9kZWx9IGZyb20gXCIuL1RvZG9TZXJ2aWNlXCI7XHJcbmltcG9ydCB7VG9kb0l0ZW19IGZyb20gXCIuL1RvZG9pdGVtXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge1RvZG9BY3Rpb259IGZyb20gXCIuL2FjdGlvbnMvVG9kb0FjdGlvblwiO1xyXG5pbXBvcnQge0FwcFN0b3JlfSBmcm9tIFwiYW5ndWxhcjItcmVkdXgtdXRpbC9kaXN0L2luZGV4XCI7XHJcblxyXG50eXBlIGNoYW5uZWxUb2RvT2JzZXJ2YWJsZSA9IE9ic2VydmFibGU8VG9kb0l0ZW0+O1xyXG50eXBlIGNoYW5uZWxUb2Rvc09ic2VydmFibGUgPSBPYnNlcnZhYmxlPEFycmF5PGNoYW5uZWxUb2RvT2JzZXJ2YWJsZT4+O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3RvZG8tbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJ0b2RvYXBwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3M9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+eW91ciB0by1kbydzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJuZXctdG9kb1wiIHBsYWNlaG9sZGVyPVwiV2hhdCBuZWVkcyB0byBiZSBkb25lP1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b2ZvY3VzIFsobmdNb2RlbCldPVwibmV3SXRlbVwiIChrZXl1cC5lbnRlcik9XCJhZGRJdGVtKG5ld0l0ZW0pXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tbGdcIiAoY2xpY2spPVwiYWRkSXRlbShuZXdJdGVtKVwiPkFkZCB0b2RvPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIm1haW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJ0b2RvLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCIjaXRlbSBvZiBtX2RhdGFTdG9yZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dG9kby1pdGVtIFtpdGVtXT1cIml0ZW1cIiAoZG9uZSk9XCJyZW1vdmVJdGVtKCRldmVudClcIiAoZWRpdCk9XCJlZGl0SXRlbSgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdG9kby1pdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4uL2NvbXBzL2FwcDEvdG9kb3MvVG9kb2xpc3QuY3NzJ10sXHJcbiAgICBkaXJlY3RpdmVzOiBbVG9kb0l0ZW1dLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9kb0xpc3Qge1xyXG4gICAgbmV3SXRlbSA9ICcnO1xyXG4gICAgcHJpdmF0ZSBtX2RhdGFTdG9yZTphbnkgPSBbXTtcclxuICAgIHByaXZhdGUgYWRkSXRlbTpGdW5jdGlvbjtcclxuICAgIHByaXZhdGUgZWRpdEl0ZW06RnVuY3Rpb247XHJcbiAgICBwcml2YXRlIHJlbW92ZUl0ZW06RnVuY3Rpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0b2RvU2VydmljZTpUb2Rvc1NlcnZpY2UsIHByaXZhdGUgdG9kb0FjdGlvbjpUb2RvQWN0aW9uLCBwcml2YXRlIGFwcFN0b3JlOkFwcFN0b3JlKSB7XHJcbiAgICAgICAgdG9kb1NlcnZpY2UuYWN0aW9uID0gdG9kb0FjdGlvbjtcclxuICAgICAgICB0b2RvQWN0aW9uLnNlcnZpY2UgPSB0b2RvU2VydmljZTtcclxuXHJcbiAgICAgICAgdGhpcy50b2RvU2VydmljZS5sb2FkVG9kb3NSZW1vdGUoKHN0YXR1czpudW1iZXIpPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBib290Ym94LmFsZXJ0KCdwcm9ibGVtIHNhdmluZyB0byBzZXJ2ZXInKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhcHBTdG9yZS5zdWJzY3JpYmUoKHBhdGgsIHByZXYsIHN0b3JlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubV9kYXRhU3RvcmUgPSBzdG9yZTtcclxuICAgICAgICAgICAgdGhpcy5uZXdJdGVtID0gJyc7XHJcbiAgICAgICAgfSwgJ3RvZG9zJywgdHJ1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkSXRlbSA9IHRvZG9BY3Rpb24uY3JlYXRlRGlzcGF0Y2hlcihhcHBTdG9yZSwgdG9kb0FjdGlvbi5hZGRUb2RvKTtcclxuICAgICAgICB0aGlzLnJlbW92ZUl0ZW0gPSB0b2RvQWN0aW9uLmNyZWF0ZURpc3BhdGNoZXIoYXBwU3RvcmUsIHRvZG9BY3Rpb24ucmVtb3ZlVG9kbyk7XHJcbiAgICAgICAgdGhpcy5lZGl0SXRlbSA9IHRvZG9BY3Rpb24uY3JlYXRlRGlzcGF0Y2hlcihhcHBTdG9yZSwgdG9kb0FjdGlvbi5lZGl0VG9kbyk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
