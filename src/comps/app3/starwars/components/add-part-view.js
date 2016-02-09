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
var AddPartsView = (function () {
    function AddPartsView() {
        this.add = new core_1.EventEmitter();
    }
    AddPartsView.prototype.onSubmit = function ($event, value) {
        $event.preventDefault();
        this.add.next(value);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], AddPartsView.prototype, "add", void 0);
    AddPartsView = __decorate([
        core_1.Component({
            selector: 'add-part',
            template: "\n        <form class=\"form-inline\" (submit)=\"onSubmit($event,name.value);name.value=''\">\n            <div class=\"form-group\">\n                <input #name type=\"text\" class=\"form-control\" placeholder=\"Part Name\" autocomplete=\"off\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-default\">Add</button>\n        </form>\n    ",
            changeDetection: core_1.ChangeDetectionStrategy.CheckOnce
        }), 
        __metadata('design:paramtypes', [])
    ], AddPartsView);
    return AddPartsView;
})();
exports.AddPartsView = AddPartsView;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDMvc3RhcndhcnMvY29tcG9uZW50cy9hZGQtcGFydC12aWV3LnRzIl0sIm5hbWVzIjpbIkFkZFBhcnRzVmlldyIsIkFkZFBhcnRzVmlldy5jb25zdHJ1Y3RvciIsIkFkZFBhcnRzVmlldy5vblN1Ym1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQXVFLGVBRXZFLENBQUMsQ0FGcUY7QUFFdEY7SUFBQUE7UUFjY0MsUUFBR0EsR0FBcUJBLElBQUlBLG1CQUFZQSxFQUFFQSxDQUFDQTtJQU16REEsQ0FBQ0E7SUFKV0QsK0JBQVFBLEdBQWhCQSxVQUFpQkEsTUFBTUEsRUFBRUEsS0FBS0E7UUFDMUJFLE1BQU1BLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBO1FBQ3hCQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtJQUN6QkEsQ0FBQ0E7SUFMREY7UUFBQ0EsYUFBTUEsRUFBRUE7O09BQUNBLDZCQUFHQSxVQUF3Q0E7SUFkekRBO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxVQUFVQTtZQUNwQkEsUUFBUUEsRUFBRUEsaVhBT1RBO1lBQ0RBLGVBQWVBLEVBQUNBLDhCQUF1QkEsQ0FBQ0EsU0FBU0E7U0FDcERBLENBQUNBOztxQkFTREE7SUFBREEsbUJBQUNBO0FBQURBLENBcEJBLEFBb0JDQSxJQUFBO0FBUlksb0JBQVksZUFReEIsQ0FBQSIsImZpbGUiOiJjb21wcy9hcHAzL3N0YXJ3YXJzL2NvbXBvbmVudHMvYWRkLXBhcnQtdmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3l9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYWRkLXBhcnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm0taW5saW5lXCIgKHN1Ym1pdCk9XCJvblN1Ym1pdCgkZXZlbnQsbmFtZS52YWx1ZSk7bmFtZS52YWx1ZT0nJ1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0ICNuYW1lIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlBhcnQgTmFtZVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIj5BZGQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICBgLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOkNoYW5nZURldGVjdGlvblN0cmF0ZWd5LkNoZWNrT25jZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkUGFydHNWaWV3IHtcclxuXHJcbiAgICBAT3V0cHV0KCkgYWRkOkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIHByaXZhdGUgb25TdWJtaXQoJGV2ZW50LCB2YWx1ZSkge1xyXG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuYWRkLm5leHQodmFsdWUpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
