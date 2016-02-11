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
var Sliderpanel_1 = require("../../sliderpanel/Sliderpanel");
var Todo1 = (function () {
    function Todo1(sliderPanel) {
        this.sliderPanel = sliderPanel;
    }
    Todo1.prototype.onNext = function (event) {
        this.sliderPanel.slideToPage('todo2', 'left');
    };
    Todo1 = __decorate([
        core_1.Component({
            selector: 'Todo1',
            template: " <button type=\"button\" (click)=\"onNext($event)\" class=\"btn btn-default btn-sm goNext\">\n                    <span class=\"fa fa-arrow-right\"></span>\n                </button>\n                <small>I am todo1 component</small>\n                <ng-content></ng-content>\n                "
        }), 
        __metadata('design:paramtypes', [Sliderpanel_1.Sliderpanel])
    ], Todo1);
    return Todo1;
})();
exports.Todo1 = Todo1;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDEvdG9kb3MvdG9kbzEudHMiXSwibmFtZXMiOlsiVG9kbzEiLCJUb2RvMS5jb25zdHJ1Y3RvciIsIlRvZG8xLm9uTmV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLDRCQUEwQiwrQkFBK0IsQ0FBQyxDQUFBO0FBRTFEO0lBY0lBLGVBQVlBLFdBQXVCQTtRQUMvQkMsSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsV0FBV0EsQ0FBQ0E7SUFDbkNBLENBQUNBO0lBRU9ELHNCQUFNQSxHQUFkQSxVQUFlQSxLQUFLQTtRQUNoQkUsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsT0FBT0EsRUFBRUEsTUFBTUEsQ0FBQ0EsQ0FBQUE7SUFDakRBLENBQUNBO0lBcEJMRjtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsT0FBT0E7WUFDakJBLFFBQVFBLEVBQUVBLDBTQUtHQTtTQUVoQkEsQ0FBQ0E7O2NBWURBO0lBQURBLFlBQUNBO0FBQURBLENBckJBLEFBcUJDQSxJQUFBO0FBVlksYUFBSyxRQVVqQixDQUFBIiwiZmlsZSI6ImNvbXBzL2FwcDEvdG9kb3MvVG9kbzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtTbGlkZXJwYW5lbH0gZnJvbSBcIi4uLy4uL3NsaWRlcnBhbmVsL1NsaWRlcnBhbmVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnVG9kbzEnLFxyXG4gICAgdGVtcGxhdGU6IGAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cIm9uTmV4dCgkZXZlbnQpXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIGdvTmV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtYXJyb3ctcmlnaHRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbD5JIGFtIHRvZG8xIGNvbXBvbmVudDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICBgXHJcblxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRvZG8xIHtcclxuICAgIHByaXZhdGUgc2xpZGVyUGFuZWw6U2xpZGVycGFuZWw7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2xpZGVyUGFuZWw6U2xpZGVycGFuZWwpIHtcclxuICAgICAgICB0aGlzLnNsaWRlclBhbmVsID0gc2xpZGVyUGFuZWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbk5leHQoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNsaWRlclBhbmVsLnNsaWRlVG9QYWdlKCd0b2RvMicsICdsZWZ0JylcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
