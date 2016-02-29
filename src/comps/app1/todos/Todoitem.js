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
var TodoService_1 = require('./TodoService');
var TodoItem = (function () {
    function TodoItem() {
        this.editMode = false;
        this.done = new core_1.EventEmitter();
        this.edit = new core_1.EventEmitter();
    }
    Object.defineProperty(TodoItem.prototype, "item", {
        set: function (value) {
            this._item = value;
        },
        enumerable: true,
        configurable: true
    });
    TodoItem.prototype.doneClicked = function () {
        this.done.next(this._item);
    };
    TodoItem.prototype.editClicked = function () {
        this.editMode = !this.editMode;
        if (this.editMode)
            return;
        this.edit.next(this._item);
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
            template: "\n                <div class=\"view\">\n                    <input [(ngModel)]=\"_item.task\" class=\"editInput\" *ngIf=\"editMode\" value=\"{{_item.task}}\"/>\n                    <label  *ngIf=\"!editMode\">{{_item.getKey('task')}}</label>\n                    <button (click)=\"doneClicked()\"  class=\"fa fa-minus buttonsDone\"></button>\n                    <button (click)=\"editClicked()\" [ngClass]=\"{'fa-check-square': editMode}\" class=\"fa fa-edit buttonsEdit\"></button>\n                </div>\n    ",
            styleUrls: ['../comps/app1/todos/Todoitem.css'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], TodoItem);
    return TodoItem;
})();
exports.TodoItem = TodoItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDEvdG9kb3MvdG9kb2l0ZW0udHMiXSwibmFtZXMiOlsiVG9kb0l0ZW0iLCJUb2RvSXRlbS5jb25zdHJ1Y3RvciIsIlRvZG9JdGVtLml0ZW0iLCJUb2RvSXRlbS5kb25lQ2xpY2tlZCIsIlRvZG9JdGVtLmVkaXRDbGlja2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBOEUsZUFBZSxDQUFDLENBQUE7QUFDOUYsNEJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBRzVDO0lBQUFBO1FBY1lDLGFBQVFBLEdBQUdBLEtBQUtBLENBQUNBO1FBVXpCQSxTQUFJQSxHQUFHQSxJQUFJQSxtQkFBWUEsRUFBRUEsQ0FBQ0E7UUFFMUJBLFNBQUlBLEdBQUdBLElBQUlBLG1CQUFZQSxFQUFFQSxDQUFDQTtJQVk5QkEsQ0FBQ0E7SUFwQkdELHNCQUNJQSwwQkFBSUE7YUFEUkEsVUFDU0EsS0FBbUJBO1lBQ3hCRSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQTtRQUN2QkEsQ0FBQ0E7OztPQUFBRjtJQU9EQSw4QkFBV0EsR0FBWEE7UUFDSUcsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7SUFDL0JBLENBQUNBO0lBRURILDhCQUFXQSxHQUFYQTtRQUNJSSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQTtRQUMvQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7WUFDZEEsTUFBTUEsQ0FBQ0E7UUFDWEEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7SUFDL0JBLENBQUNBO0lBbkJESjtRQUFDQSxZQUFLQSxFQUFFQTs7O09BQ0pBLDBCQUFJQSxRQUVQQTtJQUVEQTtRQUFDQSxhQUFNQSxFQUFFQTs7T0FDVEEsMEJBQUlBLFVBQXNCQTtJQUMxQkE7UUFBQ0EsYUFBTUEsRUFBRUE7O09BQ1RBLDBCQUFJQSxVQUFzQkE7SUExQjlCQTtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsV0FBV0E7WUFDckJBLFFBQVFBLEVBQUVBLG1nQkFPVEE7WUFDREEsU0FBU0EsRUFBRUEsQ0FBQ0Esa0NBQWtDQSxDQUFDQTtZQUMvQ0EsZUFBZUEsRUFBRUEsOEJBQXVCQSxDQUFDQSxNQUFNQTtTQUNsREEsQ0FBQ0E7O2lCQTBCREE7SUFBREEsZUFBQ0E7QUFBREEsQ0F0Q0EsQUFzQ0NBLElBQUE7QUF6QlksZ0JBQVEsV0F5QnBCLENBQUEiLCJmaWxlIjoiY29tcHMvYXBwMS90b2Rvcy9Ub2RvaXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtUb2RvSXRlbU1vZGVsfSBmcm9tICcuL1RvZG9TZXJ2aWNlJztcclxuLy9pbXBvcnQgJy4vVG9kb2l0ZW0uY3NzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0b2RvLWl0ZW0nLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aWV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFsobmdNb2RlbCldPVwiX2l0ZW0udGFza1wiIGNsYXNzPVwiZWRpdElucHV0XCIgKm5nSWY9XCJlZGl0TW9kZVwiIHZhbHVlPVwie3tfaXRlbS50YXNrfX1cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cIiFlZGl0TW9kZVwiPnt7X2l0ZW0uZ2V0S2V5KCd0YXNrJyl9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiZG9uZUNsaWNrZWQoKVwiICBjbGFzcz1cImZhIGZhLW1pbnVzIGJ1dHRvbnNEb25lXCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiZWRpdENsaWNrZWQoKVwiIFtuZ0NsYXNzXT1cInsnZmEtY2hlY2stc3F1YXJlJzogZWRpdE1vZGV9XCIgY2xhc3M9XCJmYSBmYS1lZGl0IGJ1dHRvbnNFZGl0XCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBzdHlsZVVybHM6IFsnLi4vY29tcHMvYXBwMS90b2Rvcy9Ub2RvaXRlbS5jc3MnXSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb2RvSXRlbSB7XHJcbiAgICBwcml2YXRlIGVkaXRNb2RlID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9pdGVtOlRvZG9JdGVtTW9kZWw7XHJcblxyXG4gICAgLy8gZGVtb25zdHJhdGUgaW50ZXJjZXB0aW5nIGEgc2V0IGlucHV0IGluIGNhc2UgeW91IHdhbnQgdG8gbW9kaWZ5IGRhdGFcclxuICAgIEBJbnB1dCgpXHJcbiAgICBzZXQgaXRlbSh2YWx1ZTpUb2RvSXRlbU1vZGVsKSB7XHJcbiAgICAgICAgdGhpcy5faXRlbSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgZG9uZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgZWRpdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBkb25lQ2xpY2tlZCgpIHtcclxuICAgICAgICB0aGlzLmRvbmUubmV4dCh0aGlzLl9pdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBlZGl0Q2xpY2tlZCgpIHtcclxuICAgICAgICB0aGlzLmVkaXRNb2RlID0gIXRoaXMuZWRpdE1vZGU7XHJcbiAgICAgICAgaWYgKHRoaXMuZWRpdE1vZGUpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB0aGlzLmVkaXQubmV4dCh0aGlzLl9pdGVtKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
