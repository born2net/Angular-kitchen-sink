System.register(['@angular/core', './TodoService'], function(exports_1, context_1) {
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
    var core_1, TodoService_1;
    var TodoItem;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (TodoService_1_1) {
                TodoService_1 = TodoService_1_1;
            }],
        execute: function() {
            TodoItem = (function () {
                function TodoItem(differs) {
                    this.editMode = false;
                    this.done = new core_1.EventEmitter();
                    this.edit = new core_1.EventEmitter();
                    this.differ = differs.find([]).create(null);
                }
                TodoItem.prototype.ngDoCheck = function () {
                    var changes = this.differ.diff(this._item);
                    if (changes) {
                        changes.forEachAddedItem(function (r) { return console.log('added', r); });
                        changes.forEachRemovedItem(function (r) { return console.log('removed', r); });
                        changes.forEachChangedItem(function (r) { return console.log('changed', r); });
                    }
                };
                Object.defineProperty(TodoItem.prototype, "item", {
                    set: function (value) {
                        this._item = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                TodoItem.prototype.doneClicked = function () {
                    this.done.emit(this._item);
                };
                TodoItem.prototype.editClicked = function () {
                    this.editMode = !this.editMode;
                    if (this.editMode)
                        return;
                    this.edit.emit(this._item);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', TodoService_1.TodoItemModel), 
                    __metadata('design:paramtypes', [TodoService_1.TodoItemModel])
                ], TodoItem.prototype, "item", null);
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
                        template: "\n                <div class=\"view\">\n                    <input [(ngModel)]=\"_item.task\" class=\"editInput\" *ngIf=\"editMode\" value=\"{{_item.task}}\"/>\n                    <label  *ngIf=\"!editMode\">{{_item.getKey('task')}}</label>\n                    <button (click)=\"doneClicked()\"  class=\"fa fa-minus buttonsDone\"></button>\n                    <button (click)=\"editClicked()\" [ngClass]=\"{'fa-check-square': editMode}\" class=\"fa fa-edit buttonsEdit\"></button>\n                    <button style=\"position: relative; left: -80px; top: -62px\" class=\"pull-right fa fa-arrows-v buttonsEdit\"></button>\n                </div>\n    ",
                        styleUrls: ['../comps/app1/todos/Todoitem.css'],
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush
                    }), 
                    __metadata('design:paramtypes', [core_1.KeyValueDiffers])
                ], TodoItem);
                return TodoItem;
            }());
            exports_1("TodoItem", TodoItem);
        }
    }
});
//# sourceMappingURL=Todoitem.js.map