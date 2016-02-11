var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var Sliderpanel_1 = require("../../sliderpanel/Sliderpanel");
var Todo1_1 = require("./Todo1");
var Todo2_1 = require("./Todo2");
var Todolist_1 = require("./Todolist");
var Todos = (function () {
    function Todos() {
    }
    Todos = __decorate([
        core_1.Component({
            selector: 'Todos',
            directives: [Sliderpanel_1.Sliderpanel, Todo1_1.Todo1, Todo2_1.Todo2, Todolist_1.TodoList],
            template: "\n        <br/>\n        <br/>\n        <br/>\n        <br/>\n        <Sliderpanel>\n            <div class=\"campaignSlider noScroll\">\n              <Todo1 class=\"page center todo1 selected\">\n                <div class=\"yScroll\">\n                  <hr/>\n                  <h3>To do sample application with remote server save</h3>\n                  <h5>uses your ip address as unique token and keeps data on server for 2 days</h5>\n                  <hr/>\n                  <todo-list>\n                  </todo-list>\n                </div>\n              </Todo1>\n              <Todo2 class=\"page right todo2\">\n                <hr/>\n                <h3>To do remote server statistics</h3>\n                <h5>display your total CRUD operations to remote node server</h5>\n                <hr/>\n              </Todo2>\n            </div>\n          </Sliderpanel>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Todos);
    return Todos;
})();
exports.Todos = Todos;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDEvdG9kb3MvdG9kb3MudHMiXSwibmFtZXMiOlsiVG9kb3MiLCJUb2Rvcy5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLDRCQUEwQiwrQkFBK0IsQ0FBQyxDQUFBO0FBQzFELHNCQUFvQixTQUFTLENBQUMsQ0FBQTtBQUM5QixzQkFBb0IsU0FBUyxDQUFDLENBQUE7QUFDOUIseUJBQXVCLFlBQVksQ0FBQyxDQUFBO0FBRXBDO0lBZ0NJQTtJQUNBQyxDQUFDQTtJQWpDTEQ7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLE9BQU9BO1lBQ2pCQSxVQUFVQSxFQUFFQSxDQUFDQSx5QkFBV0EsRUFBRUEsYUFBS0EsRUFBRUEsYUFBS0EsRUFBRUEsbUJBQVFBLENBQUNBO1lBQ2pEQSxRQUFRQSxFQUFFQSwwM0JBeUJUQTtTQUNKQSxDQUFDQTs7Y0FLREE7SUFBREEsWUFBQ0E7QUFBREEsQ0FsQ0EsQUFrQ0NBLElBQUE7QUFIWSxhQUFLLFFBR2pCLENBQUEiLCJmaWxlIjoiY29tcHMvYXBwMS90b2Rvcy9Ub2Rvcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge1NsaWRlcnBhbmVsfSBmcm9tIFwiLi4vLi4vc2xpZGVycGFuZWwvU2xpZGVycGFuZWxcIjtcclxuaW1wb3J0IHtUb2RvMX0gZnJvbSBcIi4vVG9kbzFcIjtcclxuaW1wb3J0IHtUb2RvMn0gZnJvbSBcIi4vVG9kbzJcIjtcclxuaW1wb3J0IHtUb2RvTGlzdH0gZnJvbSBcIi4vVG9kb2xpc3RcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdUb2RvcycsXHJcbiAgICBkaXJlY3RpdmVzOiBbU2xpZGVycGFuZWwsIFRvZG8xLCBUb2RvMiwgVG9kb0xpc3RdLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxTbGlkZXJwYW5lbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbXBhaWduU2xpZGVyIG5vU2Nyb2xsXCI+XHJcbiAgICAgICAgICAgICAgPFRvZG8xIGNsYXNzPVwicGFnZSBjZW50ZXIgdG9kbzEgc2VsZWN0ZWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ5U2Nyb2xsXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICAgIDxoMz5UbyBkbyBzYW1wbGUgYXBwbGljYXRpb24gd2l0aCByZW1vdGUgc2VydmVyIHNhdmU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8aDU+dXNlcyB5b3VyIGlwIGFkZHJlc3MgYXMgdW5pcXVlIHRva2VuIGFuZCBrZWVwcyBkYXRhIG9uIHNlcnZlciBmb3IgMiBkYXlzPC9oNT5cclxuICAgICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgICAgPHRvZG8tbGlzdD5cclxuICAgICAgICAgICAgICAgICAgPC90b2RvLWxpc3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L1RvZG8xPlxyXG4gICAgICAgICAgICAgIDxUb2RvMiBjbGFzcz1cInBhZ2UgcmlnaHQgdG9kbzJcIj5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICA8aDM+VG8gZG8gcmVtb3RlIHNlcnZlciBzdGF0aXN0aWNzPC9oMz5cclxuICAgICAgICAgICAgICAgIDxoNT5kaXNwbGF5IHlvdXIgdG90YWwgQ1JVRCBvcGVyYXRpb25zIHRvIHJlbW90ZSBub2RlIHNlcnZlcjwvaDU+XHJcbiAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgIDwvVG9kbzI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9TbGlkZXJwYW5lbD5cclxuICAgIGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUb2RvcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
