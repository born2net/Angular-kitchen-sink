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
                    __metadata('design:paramtypes', [TodoService_1.TodoService, (typeof (_a = typeof angular2_redux_util_1.AppStore !== 'undefined' && angular2_redux_util_1.AppStore) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ApplicationRef !== 'undefined' && core_1.ApplicationRef) === 'function' && _b) || Object])
                ], TodoList);
                return TodoList;
                var _a, _b;
            }());
            exports_1("TodoList", TodoList);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDEvdG9kb3MvVG9kb2xpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5Q0E7Z0JBT0ksa0JBQW9CLFdBQXVCLEVBQVUsUUFBaUIsRUFBVSxNQUFxQjtvQkFQekcsaUJBcUZDO29CQTlFdUIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7b0JBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBUztvQkFBVSxXQUFNLEdBQU4sTUFBTSxDQUFlO29CQU5yRyxZQUFPLEdBQUcsRUFBRSxDQUFDO29CQUNMLGdCQUFXLEdBQU8sRUFBRSxDQUFDO29CQU96QixJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxVQUFDLE1BQWE7d0JBQzNDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBRWYsTUFBTSxDQUFDO3dCQUNYLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7b0JBRUgsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSzt3QkFDakMsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7d0JBQ3pCLEtBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO29CQUN0QixDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUVsQixJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO29CQUMzRSxJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO29CQUNqRixJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUNqRixDQUFDO2dCQUVE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QyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7Z0NBQ25DLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ3hCLENBQUM7d0JBQ0wsQ0FBQyxDQUFDLENBQUM7d0JBQ0gsSUFBSSxPQUFPLEdBQWEsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2pELE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFZLHFCQUFTLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO3dCQUM3RCxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDM0IsQ0FBQztnQkFDTCxDQUFDO2dCQVFELDJCQUFRLEdBQVIsVUFBUyxLQUFLLEVBQUUsSUFBYztvQkFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDN0IsQ0FBQztnQkE5R0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsV0FBVzt3QkFDckIsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSxza0NBbUJUO3dCQUNELE1BQU0sRUFBRSxDQUFDLDJCQUFhLENBQUM7cUJBRTFCLENBQUM7OzRCQUFBO2dCQXNGRixlQUFDOztZQUFELENBckZBLEFBcUZDLElBQUE7WUFyRkQsK0JBcUZDLENBQUEiLCJmaWxlIjoiY29tcHMvYXBwMS90b2Rvcy9Ub2RvbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBBcHBsaWNhdGlvblJlZlxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7VG9kb0l0ZW19IGZyb20gXCIuL1RvZG9pdGVtXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge0FwcFN0b3JlfSBmcm9tIFwiYW5ndWxhcjItcmVkdXgtdXRpbFwiO1xyXG5pbXBvcnQge1RvZG9TZXJ2aWNlfSBmcm9tIFwiLi9Ub2RvU2VydmljZVwiO1xyXG5pbXBvcnQge1RvZG9Nb2RlbH0gZnJvbSBcIi4vVG9kb01vZGVsXCI7XHJcbmltcG9ydCB7TGlzdH0gZnJvbSBcIkltbXV0YWJsZVwiO1xyXG5pbXBvcnQgVG9kb2xpc3RTdHlsZSBmcm9tICcuL1RvZG9saXN0LmNzcyF0ZXh0J1xyXG5cclxudHlwZSBjaGFubmVsVG9kb09ic2VydmFibGUgPSBPYnNlcnZhYmxlPFRvZG9JdGVtPjtcclxudHlwZSBjaGFubmVsVG9kb3NPYnNlcnZhYmxlID0gT2JzZXJ2YWJsZTxBcnJheTxjaGFubmVsVG9kb09ic2VydmFibGU+PjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0b2RvLWxpc3QnLFxyXG4gICAgbW9kdWxlSWQ6IF9fbW9kdWxlTmFtZSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInRvZG9hcHBcIiBzdHlsZT1cImhlaWdodDogNTAwcHhcIj5cclxuICAgICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzcz1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT55b3VyIHRvLWRvJ3M8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cIm5ldy10b2RvXCIgcGxhY2Vob2xkZXI9XCJXaGF0IG5lZWRzIHRvIGJlIGRvbmU/XCJcclxuICAgICAgICAgICAgICAgICAgICBhdXRvZm9jdXMgWyhuZ01vZGVsKV09XCJuZXdJdGVtXCIgKGtleXVwLmVudGVyKT1cImFkZEl0ZW0obmV3SXRlbSlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1sZ1wiIChjbGljayk9XCJhZGRJdGVtKG5ld0l0ZW0pXCI+QWRkIHRvZG88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibWFpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInRvZG8tbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIG1fZGF0YVN0b3JlIHwgc29ydEJ5OyAgbGV0IGk9aW5kZXg7dHJhY2tCeTppZGVudGlmeVwiIG5vZGVMb2dnZXI9XCJ7e2l0ZW19fVwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRvZG8taXRlbSBbaXRlbV09XCJpdGVtXCIgKGRvbmUpPVwicmVtb3ZlSXRlbSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWFrZURyYWdnYWJsZV09XCJpdGVtXCIgbWFrZURyb3BwYWJsZSAoZHJvcHBlZCk9XCJvbkRyb3AoJGV2ZW50LCBpdGVtKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZWRpdCk9XCJlZGl0SXRlbSgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdG9kby1pdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbVG9kb2xpc3RTdHlsZV1cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb2RvTGlzdCB7XHJcbiAgICBuZXdJdGVtID0gJyc7XHJcbiAgICBwcml2YXRlIG1fZGF0YVN0b3JlOmFueSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBhZGRJdGVtOkZ1bmN0aW9uO1xyXG4gICAgcHJpdmF0ZSBlZGl0SXRlbTpGdW5jdGlvbjtcclxuICAgIHByaXZhdGUgcmVtb3ZlSXRlbTpGdW5jdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRvZG9TZXJ2aWNlOlRvZG9TZXJ2aWNlLCBwcml2YXRlIGFwcFN0b3JlOkFwcFN0b3JlLCBwcml2YXRlIGFwcFJlZjpBcHBsaWNhdGlvblJlZikge1xyXG5cclxuICAgICAgICB0aGlzLnRvZG9TZXJ2aWNlLmxvYWRUb2Rvc1JlbW90ZSgoc3RhdHVzOm51bWJlcik9PiB7XHJcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlnbm9yZSBlcnJvcnNcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhcHBTdG9yZS5zdWJzY3JpYmUoKHBhdGgsIHByZXYsIHN0b3JlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubV9kYXRhU3RvcmUgPSBzdG9yZTtcclxuICAgICAgICAgICAgdGhpcy5uZXdJdGVtID0gJyc7XHJcbiAgICAgICAgfSwgJ3RvZG9zJywgdHJ1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkSXRlbSA9IHRvZG9TZXJ2aWNlLmNyZWF0ZURpc3BhdGNoZXIodG9kb1NlcnZpY2UuYWRkVG9kbywgYXBwU3RvcmUpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlSXRlbSA9IHRvZG9TZXJ2aWNlLmNyZWF0ZURpc3BhdGNoZXIodG9kb1NlcnZpY2UucmVtb3ZlVG9kbywgYXBwU3RvcmUpO1xyXG4gICAgICAgIHRoaXMuZWRpdEl0ZW0gPSB0b2RvU2VydmljZS5jcmVhdGVEaXNwYXRjaGVyKHRvZG9TZXJ2aWNlLmVkaXRUb2RvLCBhcHBTdG9yZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ecm9wKHNyYzphbnksIHRyZzpUb2RvTW9kZWwpIHtcclxuICAgICAgICB2YXIgdG9kb3M6TGlzdDxUb2RvTW9kZWw+ID0gdGhpcy5hcHBTdG9yZS5nZXRTdGF0ZSgpLnRvZG9zO1xyXG4gICAgICAgIHZhciB0cmdPcmRlciA9IHRyZy5nZXRLZXkoJ29yZGVyJyk7XHJcbiAgICAgICAgdmFyIHNyY09yZGVyO1xyXG4gICAgICAgIHRvZG9zLmZvckVhY2goKHRvZG86VG9kb01vZGVsKT0+IHtcclxuICAgICAgICAgICAgaWYgKHRvZG8uZ2V0TW9kZWxJZCgpID09IHNyYylcclxuICAgICAgICAgICAgICAgIHNyY09yZGVyID0gcGFyc2VJbnQodG9kby5nZXRLZXkoJ29yZGVyJykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubW92ZVJvdyhzcmNPcmRlciwgdHJnT3JkZXIpO1xyXG4gICAgICAgIC8vIHRoaXMuYXBwUmVmLnRpY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdmVSb3coc3JjLCB0cmcpIHtcclxuICAgICAgICBzcmMgPSBwYXJzZUludChzcmMpO1xyXG4gICAgICAgIHRyZyA9IHBhcnNlSW50KHRyZyk7XHJcbiAgICAgICAgdmFyIHRvZG9zOkxpc3Q8VG9kb01vZGVsPiA9IHRoaXMuYXBwU3RvcmUuZ2V0U3RhdGUoKS50b2RvcztcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0VG9kb01vZGVsQnlPcmRlcihvcmRlcjpudW1iZXIpIHtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gdG9kb3MuZmluZEluZGV4KChpOlRvZG9Nb2RlbCkgPT4gaS5nZXRLZXkoJ29yZGVyJykgPT0gb3JkZXIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdG9kb3MuZ2V0KGluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNyYyA+IHRyZykge1xyXG4gICAgICAgICAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvOlRvZG9Nb2RlbCk9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycjpudW1iZXIgPSBwYXJzZUludCh0b2RvLmdldEtleSgnb3JkZXInKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VyciA+PSB0cmcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2RvID0gdG9kby5zZXRLZXk8VG9kb01vZGVsPihUb2RvTW9kZWwsICdvcmRlcicsIGN1cnIgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICB0b2RvWyd0YXNrJ10gPSB0b2RvLmdldEtleSgndGFzaycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdEl0ZW0odG9kbyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgdG9kb1NyYzpUb2RvTW9kZWwgPSBnZXRUb2RvTW9kZWxCeU9yZGVyKHNyYyk7XHJcbiAgICAgICAgICAgIHRvZG9TcmMgPSB0b2RvU3JjLnNldEtleTxUb2RvTW9kZWw+KFRvZG9Nb2RlbCwgJ29yZGVyJywgdHJnKTtcclxuICAgICAgICAgICAgdG9kb1NyY1sndGFzayddID0gdG9kb1NyYy5nZXRLZXkoJ3Rhc2snKTtcclxuICAgICAgICAgICAgdGhpcy5lZGl0SXRlbSh0b2RvU3JjKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvOlRvZG9Nb2RlbCk9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycjpudW1iZXIgPSBwYXJzZUludCh0b2RvLmdldEtleSgnb3JkZXInKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VyciA8PSB0cmcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2RvID0gdG9kby5zZXRLZXk8VG9kb01vZGVsPihUb2RvTW9kZWwsICdvcmRlcicsIGN1cnIgLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICB0b2RvWyd0YXNrJ10gPSB0b2RvLmdldEtleSgndGFzaycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdEl0ZW0odG9kbyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgdG9kb1NyYzpUb2RvTW9kZWwgPSBnZXRUb2RvTW9kZWxCeU9yZGVyKHNyYyk7XHJcbiAgICAgICAgICAgIHRvZG9TcmMgPSB0b2RvU3JjLnNldEtleTxUb2RvTW9kZWw+KFRvZG9Nb2RlbCwgJ29yZGVyJywgdHJnKTtcclxuICAgICAgICAgICAgdG9kb1NyY1sndGFzayddID0gdG9kb1NyYy5nZXRLZXkoJ3Rhc2snKTtcclxuICAgICAgICAgICAgdGhpcy5lZGl0SXRlbSh0b2RvU3JjKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZG8gd2hhdCBldmVyIGxvZ2ljIHlvdSBuZWVkIHRvIGNvbWUgdXAgd2l0aCB0aGUgdW5pcXVlIGlkZW50aWZpZXJcclxuICAgIC8vIG9mIHlvdXIgaXRlbSBpbiBsb29wLCBpIHdpbGwganVzdCByZXR1cm4gdGhlIG9iamVjdCBpZC5cclxuICAgIC8vIHNlZSBmb3IgbW9yZSBpbmZvOiBodHRwOi8vd3d3LmJlbm5hZGVsLmNvbS9ibG9nLzMwMjAtdW5kZXJzdGFuZGluZy1vYmplY3QtaWRlbnRpdHktd2l0aC1uZ2Zvci1sb29wcy1pbi1hbmd1bGFyLTItYmV0YS0zLmh0bVxyXG4gICAgLy8gYW5kIHNpbmNlIHdlIGFyZSB1c2luZyBvdXIgb3duIGlkIGlkZW50aWZpZXIsIHdlIGNhbiBzZWUgdGhhdCB0aHJvdWdoIHRoZSBub2RlTG9nZ2VyXHJcbiAgICAvLyB2YWx1ZXMgYXJlIGdldHRpbmcgdXBkYXRlZCBhbmQgbm90IHJlLWluc3RhbnRpYXRlZCBhbGwgdGhlIHRpbWUsIHdoaWNoIHdvdWxkIGJlIHRoZSBjYXNlXHJcbiAgICAvLyBpZiB3ZSBkaWRuJ3QgdXNlIHRoZSBpZGVudGlmeSBtZXRob2RcclxuICAgIGlkZW50aWZ5KGluZGV4LCBpdGVtOlRvZG9Nb2RlbCkge1xyXG4gICAgICAgIHJldHVybiBpdGVtLmdldE1vZGVsSWQoKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
