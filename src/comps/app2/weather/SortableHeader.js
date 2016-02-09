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
var common_1 = require('angular2/common');
var SortableHeader = (function () {
    function SortableHeader() {
    }
    SortableHeader.prototype.headerClicked = function () {
        if (this.sort.field === this.fieldName) {
            if (this.sort.desc === true) {
                this.sort.desc = false;
                this.sort.field = null;
            }
            else {
                this.sort.desc = true;
            }
        }
        else {
            this.sort.field = this.fieldName;
            this.sort.desc = false;
        }
    };
    __decorate([
        core_1.Input('sortableHeader'), 
        __metadata('design:type', String)
    ], SortableHeader.prototype, "fieldName", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SortableHeader.prototype, "sort", void 0);
    SortableHeader = __decorate([
        core_1.Component({
            selector: 'th[sortableHeader]',
            directives: [common_1.COMMON_DIRECTIVES],
            template: "\n    <div (click)=\"headerClicked()\">\n      <i class=\"fa fa-sort\" [hidden]=\"sort.field === fieldName\"></i>\n      <i class=\"fa fa-sort-asc\" [hidden]=\"sort.field !== fieldName || sort.desc\"></i>\n      <i class=\"fa fa-sort-desc\" [hidden]=\"sort.field !== fieldName || !sort.desc\"></i>\n      <ng-content></ng-content>\n    </div>\n  ",
            styles: ["\n        div {\n          cursor: pointer;\n          width: 80px;\n        }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], SortableHeader);
    return SortableHeader;
})();
exports.SortableHeader = SortableHeader;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDIvd2VhdGhlci9zb3J0YWJsZWhlYWRlci50cyJdLCJuYW1lcyI6WyJTb3J0YWJsZUhlYWRlciIsIlNvcnRhYmxlSGVhZGVyLmNvbnN0cnVjdG9yIiwiU29ydGFibGVIZWFkZXIuaGVhZGVyQ2xpY2tlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUEscUJBQXVDLGVBQWUsQ0FBQyxDQUFBO0FBQ3ZELHVCQUFnQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRWxEO0lBQUFBO0lBeUNBQyxDQUFDQTtJQWRHRCxzQ0FBYUEsR0FBYkE7UUFDSUUsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsS0FBS0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDckNBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLEtBQUtBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO2dCQUMxQkEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsS0FBS0EsQ0FBQ0E7Z0JBQ3ZCQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQTtZQUMzQkEsQ0FBQ0E7WUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ0pBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1lBQzFCQSxDQUFDQTtRQUNMQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNKQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQTtZQUNqQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDM0JBLENBQUNBO0lBQ0xBLENBQUNBO0lBbEJERjtRQUFDQSxZQUFLQSxDQUFDQSxnQkFBZ0JBLENBQUNBOztPQUFDQSxxQ0FBU0EsVUFBU0E7SUFJM0NBO1FBQUNBLFlBQUtBLEVBQUVBOztPQUFDQSxnQ0FBSUEsVUFBaUNBO0lBekJsREE7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLG9CQUFvQkE7WUFDOUJBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFpQkEsQ0FBQ0E7WUFDL0JBLFFBQVFBLEVBQUVBLDRWQU9YQTtZQUNDQSxNQUFNQSxFQUFFQSxDQUFDQSxvRkFLVkEsQ0FBQ0E7U0FDSEEsQ0FBQ0E7O3VCQXdCREE7SUFBREEscUJBQUNBO0FBQURBLENBekNBLEFBeUNDQSxJQUFBO0FBdkJZLHNCQUFjLGlCQXVCMUIsQ0FBQSIsImZpbGUiOiJjb21wcy9hcHAyL3dlYXRoZXIvU29ydGFibGVIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi90eXBpbmdzL2FwcC5kLnRzXCIvPlxyXG5cclxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0NPTU1PTl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3RoW3NvcnRhYmxlSGVhZGVyXScsXHJcbiAgICBkaXJlY3RpdmVzOiBbQ09NTU9OX0RJUkVDVElWRVNdLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgKGNsaWNrKT1cImhlYWRlckNsaWNrZWQoKVwiPlxyXG4gICAgICA8aSBjbGFzcz1cImZhIGZhLXNvcnRcIiBbaGlkZGVuXT1cInNvcnQuZmllbGQgPT09IGZpZWxkTmFtZVwiPjwvaT5cclxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zb3J0LWFzY1wiIFtoaWRkZW5dPVwic29ydC5maWVsZCAhPT0gZmllbGROYW1lIHx8IHNvcnQuZGVzY1wiPjwvaT5cclxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zb3J0LWRlc2NcIiBbaGlkZGVuXT1cInNvcnQuZmllbGQgIT09IGZpZWxkTmFtZSB8fCAhc29ydC5kZXNjXCI+PC9pPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICB9XHJcbiAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNvcnRhYmxlSGVhZGVyIHtcclxuXHJcbiAgICAvLyBtYXAgdGhlIHNvcnRhYmxlSGVhZGVyIGlucHV0IGludG8gYSBsb2NhbCB2YXIgbmFtZWQgZmllbGROYW1lXHJcbiAgICBASW5wdXQoJ3NvcnRhYmxlSGVhZGVyJykgZmllbGROYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgLy8gbm8gbWFwcGluZyBqdXN0IGNyZWF0ZSBsb2NhbCByZWZlcmVuY2Ugc29ydCB3aGljaCBnZXRzIHBhc3NlZCBpblxyXG4gICAgLy8gdGhlIHNvcnQgcG9pbnRzIHRvIHNhbWUgaW5zdGFuY2UgYXMgdGhlIG9uZSBmcm9tIHRoZSBob3N0IGNvbXBvbmVudFxyXG4gICAgQElucHV0KCkgc29ydDoge2ZpZWxkOiBzdHJpbmcsIGRlc2M6IGJvb2xlYW59O1xyXG5cclxuICAgIGhlYWRlckNsaWNrZWQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuc29ydC5maWVsZCA9PT0gdGhpcy5maWVsZE5hbWUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc29ydC5kZXNjID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnQuZGVzYyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0LmZpZWxkID0gbnVsbDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc29ydC5kZXNjID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc29ydC5maWVsZCA9IHRoaXMuZmllbGROYW1lO1xyXG4gICAgICAgICAgICB0aGlzLnNvcnQuZGVzYyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
