System.register(['angular2/core', './TodoRemote'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, TodoRemote_1;
    var TodoItem;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (TodoRemote_1_1) {
                TodoRemote_1 = TodoRemote_1_1;
            }],
        execute: function() {
            TodoItem = (function () {
                function TodoItem() {
                    this.editMode = false;
                    this.done = new core_1.EventEmitter();
                    this.edit = new core_1.EventEmitter();
                }
                TodoItem.prototype.doneClicked = function () {
                    this.done.next(this.item);
                };
                TodoItem.prototype.editClicked = function () {
                    this.editMode = !this.editMode;
                    if (this.editMode)
                        return;
                    this.edit.next(this.item);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', TodoRemote_1.TodoItemModel)
                ], TodoItem.prototype, "item", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], TodoItem.prototype, "done", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], TodoItem.prototype, "edit", void 0);
                TodoItem = __decorate([
                    core_1.Component({
                        selector: 'todo-item',
                        template: "\n                <div class=\"view\">\n                    <input [(ngModel)]=\"item.task\" class=\"editInput\" *ngIf=\"editMode\" value=\"{{item.task}}\"/>\n                    <label  *ngIf=\"!editMode\">{{item.task}}</label>\n                    <button (click)=\"doneClicked()\"  class=\"fa fa-minus buttonsDone\"></button>\n                    <button (click)=\"editClicked()\" [ngClass]=\"{'fa-check-square': editMode}\" class=\"fa fa-edit buttonsEdit\"></button>\n                </div>\n    ",
                        styleUrls: ['src/comps/app1/todos/todoitem.css'],
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoItem);
                return TodoItem;
            })();
            exports_1("TodoItem", TodoItem);
        }
    }
});
//# sourceMappingURL=Todoitem.js.map