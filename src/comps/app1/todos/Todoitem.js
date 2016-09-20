System.register(['@angular/core', './TodoService', './Todoitem.css!text'], function(exports_1, context_1) {
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
    var core_1, TodoService_1, Todoitem_css_text_1;
    var TodoItem;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (TodoService_1_1) {
                TodoService_1 = TodoService_1_1;
            },
            function (Todoitem_css_text_1_1) {
                Todoitem_css_text_1 = Todoitem_css_text_1_1;
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
                        moduleId: __moduleName,
                        template: "\n                <div class=\"view\">\n                    <input [(ngModel)]=\"_item.task\" class=\"editInput\" *ngIf=\"editMode\" value=\"{{_item.task}}\"/>\n                    <label  *ngIf=\"!editMode\">{{_item.getKey('task')}}</label>\n                    <button (click)=\"doneClicked()\"  class=\"fa fa-minus buttonsDone\"></button>\n                    <button (click)=\"editClicked()\" [ngClass]=\"{'fa-check-square': editMode}\" class=\"fa fa-edit buttonsEdit\"></button>\n                    <button style=\"position: relative; left: -80px; top: -62px\" class=\"pull-right fa fa-arrows-v buttonsEdit\"></button>\n                </div>\n    ",
                        styles: [Todoitem_css_text_1.default],
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof core_1.KeyValueDiffers !== 'undefined' && core_1.KeyValueDiffers) === 'function' && _a) || Object])
                ], TodoItem);
                return TodoItem;
                var _a;
            }());
            exports_1("TodoItem", TodoItem);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDEvdG9kb3MvVG9kb2l0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF3QkE7Z0JBRUksa0JBQVksT0FBd0I7b0JBa0I1QixhQUFRLEdBQUcsS0FBSyxDQUFDO29CQVV6QixTQUFJLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7b0JBRTFCLFNBQUksR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztvQkE3QnRCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hELENBQUM7Z0JBTUQsNEJBQVMsR0FBVDtvQkFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzNDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQ1YsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQzt3QkFDdkQsT0FBTyxDQUFDLGtCQUFrQixDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQzt3QkFDM0QsT0FBTyxDQUFDLGtCQUFrQixDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztvQkFDL0QsQ0FBQztnQkFDTCxDQUFDO2dCQVFELHNCQUFJLDBCQUFJO3lCQUFSLFVBQVMsS0FBbUI7d0JBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO29CQUN2QixDQUFDOzs7bUJBQUE7Z0JBT0QsOEJBQVcsR0FBWDtvQkFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQy9CLENBQUM7Z0JBRUQsOEJBQVcsR0FBWDtvQkFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztvQkFDL0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzt3QkFDZCxNQUFNLENBQUM7b0JBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMvQixDQUFDO2dCQW5CRDtvQkFBQyxZQUFLLEVBQUU7OztvREFBQTtnQkFLUjtvQkFBQyxhQUFNLEVBQUU7O3NEQUFBO2dCQUVUO29CQUFDLGFBQU0sRUFBRTs7c0RBQUE7Z0JBOUNiO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUUsZ3BCQVFUO3dCQUNELE1BQU0sRUFBRSxDQUFDLDJCQUFnQixDQUFDO3dCQUMxQixlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtxQkFDbEQsQ0FBQzs7NEJBQUE7Z0JBNkNGLGVBQUM7O1lBQUQsQ0E1Q0EsQUE0Q0MsSUFBQTtZQTVDRCwrQkE0Q0MsQ0FBQSIsImZpbGUiOiJjb21wcy9hcHAxL3RvZG9zL1RvZG9pdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgS2V5VmFsdWVEaWZmZXJzLFxyXG4gICAgS2V5VmFsdWVEaWZmZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtUb2RvSXRlbU1vZGVsfSBmcm9tICcuL1RvZG9TZXJ2aWNlJztcclxuaW1wb3J0IFRvZG9JdGVtVGVtcGxhdGUgZnJvbSAnLi9Ub2RvaXRlbS5jc3MhdGV4dCc7XHJcblxyXG4vL2ltcG9ydCAnLi9Ub2RvaXRlbS5jc3MnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3RvZG8taXRlbScsXHJcbiAgICBtb2R1bGVJZDogX19tb2R1bGVOYW1lLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aWV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFsobmdNb2RlbCldPVwiX2l0ZW0udGFza1wiIGNsYXNzPVwiZWRpdElucHV0XCIgKm5nSWY9XCJlZGl0TW9kZVwiIHZhbHVlPVwie3tfaXRlbS50YXNrfX1cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsICAqbmdJZj1cIiFlZGl0TW9kZVwiPnt7X2l0ZW0uZ2V0S2V5KCd0YXNrJyl9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiZG9uZUNsaWNrZWQoKVwiICBjbGFzcz1cImZhIGZhLW1pbnVzIGJ1dHRvbnNEb25lXCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiZWRpdENsaWNrZWQoKVwiIFtuZ0NsYXNzXT1cInsnZmEtY2hlY2stc3F1YXJlJzogZWRpdE1vZGV9XCIgY2xhc3M9XCJmYSBmYS1lZGl0IGJ1dHRvbnNFZGl0XCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTsgbGVmdDogLTgwcHg7IHRvcDogLTYycHhcIiBjbGFzcz1cInB1bGwtcmlnaHQgZmEgZmEtYXJyb3dzLXYgYnV0dG9uc0VkaXRcIj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW1RvZG9JdGVtVGVtcGxhdGVdLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvZG9JdGVtIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMpIHtcclxuICAgICAgICB0aGlzLmRpZmZlciA9IGRpZmZlcnMuZmluZChbXSkuY3JlYXRlKG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlIEtleVZhbHVlRGlmZmVycyB0byBnZW5lcmF0ZSBLZXlWYWx1ZUNoYW5nZVJlY29yZCBvZiBlYWNoIGNoYW5nZVxyXG4gICAgICogdXNpbmcgdGhlIG5nRG9DaGVjayBsaWZlIGN5Y2xlIGhvb2tcclxuICAgICAqL1xyXG4gICAgbmdEb0NoZWNrKCkge1xyXG4gICAgICAgIHZhciBjaGFuZ2VzID0gdGhpcy5kaWZmZXIuZGlmZih0aGlzLl9pdGVtKTtcclxuICAgICAgICBpZiAoY2hhbmdlcykge1xyXG4gICAgICAgICAgICBjaGFuZ2VzLmZvckVhY2hBZGRlZEl0ZW0ociA9PiBjb25zb2xlLmxvZygnYWRkZWQnLCByKSk7XHJcbiAgICAgICAgICAgIGNoYW5nZXMuZm9yRWFjaFJlbW92ZWRJdGVtKHIgPT4gY29uc29sZS5sb2coJ3JlbW92ZWQnLCByKSk7XHJcbiAgICAgICAgICAgIGNoYW5nZXMuZm9yRWFjaENoYW5nZWRJdGVtKHIgPT4gY29uc29sZS5sb2coJ2NoYW5nZWQnLCByKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGlmZmVyOktleVZhbHVlRGlmZmVyO1xyXG4gICAgcHJpdmF0ZSBlZGl0TW9kZSA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfaXRlbTpUb2RvSXRlbU1vZGVsO1xyXG5cclxuICAgIC8vIGRlbW9uc3RyYXRlIGludGVyY2VwdGluZyBhIHNldCBpbnB1dCBpbiBjYXNlIHlvdSB3YW50IHRvIG1vZGlmeSBkYXRhXHJcbiAgICBASW5wdXQoKVxyXG4gICAgc2V0IGl0ZW0odmFsdWU6VG9kb0l0ZW1Nb2RlbCkge1xyXG4gICAgICAgIHRoaXMuX2l0ZW0gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIGRvbmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KClcclxuICAgIGVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgZG9uZUNsaWNrZWQoKSB7XHJcbiAgICAgICAgdGhpcy5kb25lLmVtaXQodGhpcy5faXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgZWRpdENsaWNrZWQoKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0TW9kZSA9ICF0aGlzLmVkaXRNb2RlO1xyXG4gICAgICAgIGlmICh0aGlzLmVkaXRNb2RlKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdGhpcy5lZGl0LmVtaXQodGhpcy5faXRlbSk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
