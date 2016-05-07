"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
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
}());
exports.Todos = Todos;
//# sourceMappingURL=Todos.js.map