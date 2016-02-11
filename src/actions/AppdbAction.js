var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var angular2_redux_util_1 = require("angular2-redux-util");
exports.APP_START_TIME = 'APP_START_TIME';
var AppdbAction = (function (_super) {
    __extends(AppdbAction, _super);
    function AppdbAction() {
        _super.apply(this, arguments);
    }
    AppdbAction.prototype.appStartTime = function () {
        return { type: exports.APP_START_TIME, value: Date.now() };
    };
    AppdbAction = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AppdbAction);
    return AppdbAction;
})(angular2_redux_util_1.Actions);
exports.AppdbAction = AppdbAction;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvYXBwZGJhY3Rpb24udHMiXSwibmFtZXMiOlsiQXBwZGJBY3Rpb24iLCJBcHBkYkFjdGlvbi5jb25zdHJ1Y3RvciIsIkFwcGRiQWN0aW9uLmFwcFN0YXJ0VGltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsb0NBQXNCLHFCQUFxQixDQUFDLENBQUE7QUFFL0Isc0JBQWMsR0FBRyxnQkFBZ0IsQ0FBQztBQUkvQztJQUNpQ0EsK0JBQU9BO0lBRHhDQTtRQUNpQ0MsOEJBQU9BO0lBS3hDQSxDQUFDQTtJQUhVRCxrQ0FBWUEsR0FBbkJBO1FBQ0lFLE1BQU1BLENBQUNBLEVBQUNBLElBQUlBLEVBQUVBLHNCQUFjQSxFQUFFQSxLQUFLQSxFQUFFQSxJQUFJQSxDQUFDQSxHQUFHQSxFQUFFQSxFQUFDQSxDQUFDQTtJQUNyREEsQ0FBQ0E7SUFMTEY7UUFBQ0EsaUJBQVVBLEVBQUVBOztvQkFNWkE7SUFBREEsa0JBQUNBO0FBQURBLENBTkEsQUFNQ0EsRUFMZ0MsNkJBQU8sRUFLdkM7QUFMWSxtQkFBVyxjQUt2QixDQUFBIiwiZmlsZSI6ImFjdGlvbnMvQXBwZGJBY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7QWN0aW9uc30gZnJvbSBcImFuZ3VsYXIyLXJlZHV4LXV0aWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBUFBfU1RBUlRfVElNRSA9ICdBUFBfU1RBUlRfVElNRSc7XHJcblxyXG4vKiogZ2xvYmFsIGFwcGxpY2F0aW9uIGFjdGlvbnMgZGVmaW5lZCBoZXJlICoqL1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXBwZGJBY3Rpb24gZXh0ZW5kcyBBY3Rpb25zIHtcclxuXHJcbiAgICBwdWJsaWMgYXBwU3RhcnRUaW1lKCkge1xyXG4gICAgICAgIHJldHVybiB7dHlwZTogQVBQX1NUQVJUX1RJTUUsIHZhbHVlOiBEYXRlLm5vdygpfTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
