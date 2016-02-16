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
var Minitab_1 = require('./Minitab');
var Minitabs = (function () {
    function Minitabs() {
    }
    Minitabs.prototype.ngAfterContentInit = function () {
        console.log(this.tabs);
        var activeTabs = this.tabs.filter(function (tab) { return tab.active; });
        if (activeTabs.length === 0)
            this.selectTab(this.tabs.first);
    };
    Minitabs.prototype.selectTab = function (tab, event) {
        event ? event.preventDefault() : null;
        this.tabs.toArray().forEach(function (tab) { return tab.active = false; });
        tab.active = true;
    };
    __decorate([
        core_1.ContentChildren(Minitab_1.Minitab), 
        __metadata('design:type', core_1.QueryList)
    ], Minitabs.prototype, "tabs", void 0);
    Minitabs = __decorate([
        core_1.Component({
            selector: 'mini-tabs',
            template: "\n    <ul class=\"nav nav-tabs\">\n      <li *ngFor=\"#tab of tabs\" (click)=\"selectTab(tab,$event)\" [class.active]=\"tab.active\">\n        <a href=\"#\">{{tab.title}}</a>\n      </li>\n    </ul>\n    <ng-content></ng-content>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], Minitabs);
    return Minitabs;
})();
exports.Minitabs = Minitabs;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL21pbml0YWJzL21pbml0YWJzLnRzIl0sIm5hbWVzIjpbIk1pbml0YWJzIiwiTWluaXRhYnMuY29uc3RydWN0b3IiLCJNaW5pdGFicy5uZ0FmdGVyQ29udGVudEluaXQiLCJNaW5pdGFicy5zZWxlY3RUYWIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUF3RSxlQUFlLENBQUMsQ0FBQTtBQUN4Rix3QkFBd0IsV0FBVyxDQUFDLENBQUE7QUFFcEM7SUFBQUE7SUFtQ0FDLENBQUNBO0lBbkJHRCxxQ0FBa0JBLEdBQWxCQTtRQUNJRSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUV2QkEsSUFBSUEsVUFBVUEsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsVUFBQ0EsR0FBR0EsSUFBR0EsT0FBQUEsR0FBR0EsQ0FBQ0EsTUFBTUEsRUFBVkEsQ0FBVUEsQ0FBQ0EsQ0FBQ0E7UUFHckRBLEVBQUVBLENBQUFBLENBQUNBLFVBQVVBLENBQUNBLE1BQU1BLEtBQUtBLENBQUNBLENBQUNBO1lBQ3ZCQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtJQUN4Q0EsQ0FBQ0E7SUFFREYsNEJBQVNBLEdBQVRBLFVBQVVBLEdBQVlBLEVBQUVBLEtBQWlCQTtRQUVyQ0csS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0EsY0FBY0EsRUFBRUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDdENBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBLE9BQU9BLENBQUNBLFVBQUFBLEdBQUdBLElBQUlBLE9BQUFBLEdBQUdBLENBQUNBLE1BQU1BLEdBQUdBLEtBQUtBLEVBQWxCQSxDQUFrQkEsQ0FBQ0EsQ0FBQ0E7UUFHdkRBLEdBQUdBLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBO0lBQ3RCQSxDQUFDQTtJQXBCREg7UUFBQ0Esc0JBQWVBLENBQUNBLGlCQUFPQSxDQUFDQTs7T0FBQ0EsMEJBQUlBLFVBQXFCQTtJQWJ2REE7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLFdBQVdBO1lBQ3JCQSxRQUFRQSxFQUFDQSwyT0FPVkE7U0FDRkEsQ0FBQ0E7O2lCQXlCREE7SUFBREEsZUFBQ0E7QUFBREEsQ0FuQ0EsQUFtQ0NBLElBQUE7QUF4QlksZ0JBQVEsV0F3QnBCLENBQUEiLCJmaWxlIjoiY29tcHMvbWluaXRhYnMvTWluaXRhYnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBBZnRlckNvbnRlbnRJbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IE1pbml0YWIgfSBmcm9tICcuL01pbml0YWInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ21pbmktdGFicycsXHJcbiAgICB0ZW1wbGF0ZTpgXHJcbiAgICA8dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIj5cclxuICAgICAgPGxpICpuZ0Zvcj1cIiN0YWIgb2YgdGFic1wiIChjbGljayk9XCJzZWxlY3RUYWIodGFiLCRldmVudClcIiBbY2xhc3MuYWN0aXZlXT1cInRhYi5hY3RpdmVcIj5cclxuICAgICAgICA8YSBocmVmPVwiI1wiPnt7dGFiLnRpdGxlfX08L2E+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIE1pbml0YWJzIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihNaW5pdGFiKSB0YWJzOiBRdWVyeUxpc3Q8TWluaXRhYj47XHJcblxyXG4gICAgLy8gY29udGVudENoaWxkcmVuIGFyZSBzZXRcclxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRhYnMpO1xyXG4gICAgICAgIC8vIGdldCBhbGwgYWN0aXZlIHRhYnNcclxuICAgICAgICBsZXQgYWN0aXZlVGFicyA9IHRoaXMudGFicy5maWx0ZXIoKHRhYik9PnRhYi5hY3RpdmUpO1xyXG5cclxuICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyBhY3RpdmUgdGFiIHNldCwgYWN0aXZhdGUgdGhlIGZpcnN0XHJcbiAgICAgICAgaWYoYWN0aXZlVGFicy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0VGFiKHRoaXMudGFicy5maXJzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0VGFiKHRhYjogTWluaXRhYiwgZXZlbnQ/Ok1vdXNlRXZlbnQpe1xyXG4gICAgICAgIC8vIGRlYWN0aXZhdGUgYWxsIHRhYnNcclxuICAgICAgICBldmVudCA/IGV2ZW50LnByZXZlbnREZWZhdWx0KCkgOiBudWxsO1xyXG4gICAgICAgIHRoaXMudGFicy50b0FycmF5KCkuZm9yRWFjaCh0YWIgPT4gdGFiLmFjdGl2ZSA9IGZhbHNlKTtcclxuXHJcbiAgICAgICAgLy8gYWN0aXZhdGUgdGhlIHRhYiB0aGUgdXNlciBoYXMgY2xpY2tlZCBvbi5cclxuICAgICAgICB0YWIuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
