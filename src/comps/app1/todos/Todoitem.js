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
        __metadata('design:type', TodoService_1.TodoItemModel)
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
            template: "\n                <div class=\"view\">\n                    <input [(ngModel)]=\"item.task\" class=\"editInput\" *ngIf=\"editMode\" value=\"{{item.task}}\"/>\n                    <label  *ngIf=\"!editMode\">{{item.getKey('task')}}</label>\n                    <button (click)=\"doneClicked()\"  class=\"fa fa-minus buttonsDone\"></button>\n                    <button (click)=\"editClicked()\" [ngClass]=\"{'fa-check-square': editMode}\" class=\"fa fa-edit buttonsEdit\"></button>\n                </div>\n    ",
            styleUrls: ['../comps/app1/todos/Todoitem.css'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], TodoItem);
    return TodoItem;
})();
exports.TodoItem = TodoItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDEvdG9kb3MvdG9kb2l0ZW0udHMiXSwibmFtZXMiOlsiVG9kb0l0ZW0iLCJUb2RvSXRlbS5jb25zdHJ1Y3RvciIsIlRvZG9JdGVtLmRvbmVDbGlja2VkIiwiVG9kb0l0ZW0uZWRpdENsaWNrZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUE4RSxlQUFlLENBQUMsQ0FBQTtBQUM5Riw0QkFBNEIsZUFBZSxDQUFDLENBQUE7QUFHNUM7SUFBQUE7UUFjWUMsYUFBUUEsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFLekJBLFNBQUlBLEdBQUdBLElBQUlBLG1CQUFZQSxFQUFFQSxDQUFDQTtRQUUxQkEsU0FBSUEsR0FBR0EsSUFBSUEsbUJBQVlBLEVBQUVBLENBQUNBO0lBWTlCQSxDQUFDQTtJQVZHRCw4QkFBV0EsR0FBWEE7UUFDSUUsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFDOUJBLENBQUNBO0lBRURGLDhCQUFXQSxHQUFYQTtRQUNJRyxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQTtRQUMvQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7WUFDZEEsTUFBTUEsQ0FBQ0E7UUFDWEEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFDOUJBLENBQUNBO0lBaEJESDtRQUFDQSxZQUFLQSxFQUFFQTs7T0FDUkEsMEJBQUlBLFVBQWVBO0lBQ25CQTtRQUFDQSxhQUFNQSxFQUFFQTs7T0FDVEEsMEJBQUlBLFVBQXNCQTtJQUMxQkE7UUFBQ0EsYUFBTUEsRUFBRUE7O09BQ1RBLDBCQUFJQSxVQUFzQkE7SUFyQjlCQTtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsV0FBV0E7WUFDckJBLFFBQVFBLEVBQUVBLGdnQkFPVEE7WUFDREEsU0FBU0EsRUFBRUEsQ0FBQ0Esa0NBQWtDQSxDQUFDQTtZQUMvQ0EsZUFBZUEsRUFBRUEsOEJBQXVCQSxDQUFDQSxNQUFNQTtTQUNsREEsQ0FBQ0E7O2lCQXFCREE7SUFBREEsZUFBQ0E7QUFBREEsQ0FqQ0EsQUFpQ0NBLElBQUE7QUFwQlksZ0JBQVEsV0FvQnBCLENBQUEiLCJmaWxlIjoiY29tcHMvYXBwMS90b2Rvcy9Ub2RvaXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtUb2RvSXRlbU1vZGVsfSBmcm9tICcuL1RvZG9TZXJ2aWNlJztcclxuLy9pbXBvcnQgJy4vVG9kb2l0ZW0uY3NzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0b2RvLWl0ZW0nLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aWV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFsobmdNb2RlbCldPVwiaXRlbS50YXNrXCIgY2xhc3M9XCJlZGl0SW5wdXRcIiAqbmdJZj1cImVkaXRNb2RlXCIgdmFsdWU9XCJ7e2l0ZW0udGFza319XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCAgKm5nSWY9XCIhZWRpdE1vZGVcIj57e2l0ZW0uZ2V0S2V5KCd0YXNrJyl9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiZG9uZUNsaWNrZWQoKVwiICBjbGFzcz1cImZhIGZhLW1pbnVzIGJ1dHRvbnNEb25lXCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiZWRpdENsaWNrZWQoKVwiIFtuZ0NsYXNzXT1cInsnZmEtY2hlY2stc3F1YXJlJzogZWRpdE1vZGV9XCIgY2xhc3M9XCJmYSBmYS1lZGl0IGJ1dHRvbnNFZGl0XCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBzdHlsZVVybHM6IFsnLi4vY29tcHMvYXBwMS90b2Rvcy9Ub2RvaXRlbS5jc3MnXSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb2RvSXRlbSB7XHJcbiAgICBwcml2YXRlIGVkaXRNb2RlID0gZmFsc2U7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGl0ZW06VG9kb0l0ZW1Nb2RlbDtcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgZG9uZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgZWRpdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBkb25lQ2xpY2tlZCgpIHtcclxuICAgICAgICB0aGlzLmRvbmUubmV4dCh0aGlzLml0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGVkaXRDbGlja2VkKCkge1xyXG4gICAgICAgIHRoaXMuZWRpdE1vZGUgPSAhdGhpcy5lZGl0TW9kZTtcclxuICAgICAgICBpZiAodGhpcy5lZGl0TW9kZSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuZWRpdC5uZXh0KHRoaXMuaXRlbSk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
