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
var Minitab = (function () {
    function Minitab() {
        this.active = false;
    }
    __decorate([
        core_1.Input('tabTitle'), 
        __metadata('design:type', String)
    ], Minitab.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Minitab.prototype, "active", void 0);
    Minitab = __decorate([
        core_1.Component({
            selector: 'mini-tab',
            styles: ["\n    .pane{\n      padding: 1em;\n    }\n  "],
            template: "\n    <div [hidden]=\"!active\" class=\"pane\">\n      <ng-content></ng-content>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], Minitab);
    return Minitab;
})();
exports.Minitab = Minitab;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL21pbml0YWJzL21pbml0YWIudHMiXSwibmFtZXMiOlsiTWluaXRhYiIsIk1pbml0YWIuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUFpQyxlQUFlLENBQUMsQ0FBQTtBQUVqRDtJQUFBQTtRQWVhQyxXQUFNQSxHQUFHQSxLQUFLQSxDQUFDQTtJQUM1QkEsQ0FBQ0E7SUFGR0Q7UUFBQ0EsWUFBS0EsQ0FBQ0EsVUFBVUEsQ0FBQ0E7O09BQUNBLDBCQUFLQSxVQUFTQTtJQUNqQ0E7UUFBQ0EsWUFBS0EsRUFBRUE7O09BQUNBLDJCQUFNQSxVQUFTQTtJQWY1QkE7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLFVBQVVBO1lBQ3BCQSxNQUFNQSxFQUFFQSxDQUFDQSw4Q0FJVkEsQ0FBQ0E7WUFDQUEsUUFBUUEsRUFBRUEsa0dBSVhBO1NBQ0ZBLENBQUNBOztnQkFJREE7SUFBREEsY0FBQ0E7QUFBREEsQ0FoQkEsQUFnQkNBLElBQUE7QUFIWSxlQUFPLFVBR25CLENBQUEiLCJmaWxlIjoiY29tcHMvbWluaXRhYnMvTWluaXRhYi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtaW5pLXRhYicsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAucGFuZXtcclxuICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgfVxyXG4gIGBdLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgW2hpZGRlbl09XCIhYWN0aXZlXCIgY2xhc3M9XCJwYW5lXCI+XHJcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIE1pbml0YWIge1xyXG4gICAgQElucHV0KCd0YWJUaXRsZScpIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBhY3RpdmUgPSBmYWxzZTtcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
