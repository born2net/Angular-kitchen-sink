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
        this.toggleClass = false;
    }
    Minitabs.prototype.ngAfterViewChecked = function () {
    };
    Minitabs.prototype.isAccent = function () {
        this.toggleClass = !this.toggleClass;
        this.myTabs.map(function (i) {
            console.log('my tabs ' + i._appElement.nativeElement);
        });
    };
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
        core_1.ViewChildren('tabItem'), 
        __metadata('design:type', core_1.QueryList)
    ], Minitabs.prototype, "myTabs", void 0);
    __decorate([
        core_1.ContentChildren(Minitab_1.Minitab), 
        __metadata('design:type', core_1.QueryList)
    ], Minitabs.prototype, "tabs", void 0);
    Minitabs = __decorate([
        core_1.Component({
            selector: 'mini-tabs',
            styles: ["\n        .accent {\n            background-color: lightgray;\n        }\n    "],
            template: "\n    <button (click)=\"isAccent($event)\">toggle a class style on/off</button>\n    <ul class=\"nav nav-tabs\">\n      <li #tabItem *ngFor=\"#tab of tabs\" (click)=\"selectTab(tab,$event)\" [class.active]=\"tab.active\"\n        [class.accent]=\"toggleClass\">\n        <a href=\"#\">{{tab.title}}</a>\n      </li>\n    </ul>\n    <ng-content></ng-content>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], Minitabs);
    return Minitabs;
})();
exports.Minitabs = Minitabs;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL21pbml0YWJzL21pbml0YWJzLnRzIl0sIm5hbWVzIjpbIk1pbml0YWJzIiwiTWluaXRhYnMuY29uc3RydWN0b3IiLCJNaW5pdGFicy5uZ0FmdGVyVmlld0NoZWNrZWQiLCJNaW5pdGFicy5pc0FjY2VudCIsIk1pbml0YWJzLm5nQWZ0ZXJDb250ZW50SW5pdCIsIk1pbml0YWJzLnNlbGVjdFRhYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQW9GLGVBQWUsQ0FBQyxDQUFBO0FBQ3BHLHdCQUFzQixXQUFXLENBQUMsQ0FBQTtBQWtCbEM7SUFBQUE7UUFnQ1lDLGdCQUFXQSxHQUFXQSxLQUFLQSxDQUFDQTtJQWdDeENBLENBQUNBO0lBcENHRCxxQ0FBa0JBLEdBQWxCQTtJQUVBRSxDQUFDQTtJQU9ERiwyQkFBUUEsR0FBUkE7UUFDSUcsSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7UUFDckNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLFVBQUFBLENBQUNBO1lBQ2JBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLFVBQVVBLEdBQUdBLENBQUNBLENBQUNBLFdBQVdBLENBQUNBLGFBQWFBLENBQUNBLENBQUNBO1FBQzFEQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNQQSxDQUFDQTtJQUdESCxxQ0FBa0JBLEdBQWxCQTtRQUNJSSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUV2QkEsSUFBSUEsVUFBVUEsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsVUFBQ0EsR0FBR0EsSUFBR0EsT0FBQUEsR0FBR0EsQ0FBQ0EsTUFBTUEsRUFBVkEsQ0FBVUEsQ0FBQ0EsQ0FBQ0E7UUFHckRBLEVBQUVBLENBQUNBLENBQUNBLFVBQVVBLENBQUNBLE1BQU1BLEtBQUtBLENBQUNBLENBQUNBO1lBQ3hCQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtJQUN4Q0EsQ0FBQ0E7SUFFREosNEJBQVNBLEdBQVRBLFVBQVVBLEdBQVdBLEVBQUVBLEtBQWlCQTtRQUVwQ0ssS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0EsY0FBY0EsRUFBRUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDdENBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBLE9BQU9BLENBQUNBLFVBQUFBLEdBQUdBLElBQUlBLE9BQUFBLEdBQUdBLENBQUNBLE1BQU1BLEdBQUdBLEtBQUtBLEVBQWxCQSxDQUFrQkEsQ0FBQ0EsQ0FBQ0E7UUFHdkRBLEdBQUdBLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBO0lBQ3RCQSxDQUFDQTtJQXJDREw7UUFBQ0EsbUJBQVlBLENBQUNBLFNBQVNBLENBQUNBOztPQUN4QkEsNEJBQU1BLFVBQWdCQTtJQU90QkE7UUFBQ0Esc0JBQWVBLENBQUNBLGlCQUFPQSxDQUFDQTs7T0FDekJBLDBCQUFJQSxVQUFvQkE7SUFsQzVCQTtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsV0FBV0E7WUFDckJBLE1BQU1BLEVBQUVBLENBQUNBLGdGQUlSQSxDQUFDQTtZQUNGQSxRQUFRQSxFQUFFQSwyV0FTWEE7U0FDRkEsQ0FBQ0E7O2lCQStDREE7SUFBREEsZUFBQ0E7QUFBREEsQ0FoRUEsQUFnRUNBLElBQUE7QUE5Q1ksZ0JBQVEsV0E4Q3BCLENBQUEiLCJmaWxlIjoiY29tcHMvbWluaXRhYnMvTWluaXRhYnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIEFmdGVyQ29udGVudEluaXQsIFZpZXdDaGlsZHJlbn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7TWluaXRhYn0gZnJvbSAnLi9NaW5pdGFiJztcclxuXHJcbi8qKlxyXG4gKiAgQmVsb3cgSSBkZW1vbnN0cmF0ZSBkeW5hbWljIGNsYXNzIHNldHVwLlxyXG4gKlxyXG4gKiAgWW91IGNhbiBhbHNvIGRvIFtjbGFzc109XCJnZXRDbGFzcygpXCIgIGFuZCBpdCB3aWxsIHNldCBhIHN0cmluZyBvZiBjbGFzcyBvciBjbGFzc2VzLCBidXQgdGhpcyB3aWxsIG1lc3NcclxuICogIHdpdGggYW55IG9mIHRoZSBjbGFzc2VzIG9uIHRoZSBlbGVtZW50IGlmIHRoZXkgYXJlIGFscmVhZHkgc2V0LlxyXG4gKlxyXG4gKiAgT2Z0ZW4geW91IHdpbGwgd2FudCB0byB0b2dnbGUgYSBzaW5nbGUgY2xhc3MsIHdoaWNoIHlvdSBjYW4gZG8gYnlcclxuICogIHVzaW5nIGEgW2NsYXNzLmNsYXNzTmFtZV0gc3ludGF4IGluIHRoZSBwcm9wZXJ0eS5cclxuICpcclxuICogIGFuZCBtb3JlIGV4YW1wbGVzIGZvciBzdHlsZXM6XHJcbiAqXHJcbiA8IS0tIGdldENvbG9yKCkgcmV0dXJucyBhIHZhbGlkIGNvbG9yIC0tPlxyXG4gPGgxIFtzdHlsZS5jb2xvcl09XCJnZXRDb2xvcigpXCI+VGl0bGU8L2gxPlxyXG4gPGgxIFtzdHlsZS5saW5lLWhlaWdodC5lbV09XCInMidcIj5UaXRsZTwvaDE+XHJcblxyXG4gKiovXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtaW5pLXRhYnMnLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgICAgIC5hY2NlbnQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICAgICAgfVxyXG4gICAgYF0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwiaXNBY2NlbnQoJGV2ZW50KVwiPnRvZ2dsZSBhIGNsYXNzIHN0eWxlIG9uL29mZjwvYnV0dG9uPlxyXG4gICAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCI+XHJcbiAgICAgIDxsaSAjdGFiSXRlbSAqbmdGb3I9XCIjdGFiIG9mIHRhYnNcIiAoY2xpY2spPVwic2VsZWN0VGFiKHRhYiwkZXZlbnQpXCIgW2NsYXNzLmFjdGl2ZV09XCJ0YWIuYWN0aXZlXCJcclxuICAgICAgICBbY2xhc3MuYWNjZW50XT1cInRvZ2dsZUNsYXNzXCI+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIj57e3RhYi50aXRsZX19PC9hPlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNaW5pdGFicyBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG5cclxuICAgIC8vQXMgdGhlIG5hbWUgc3VnZ2VzdHMsIEBDb250ZW50Q2hpbGQgYW5kIEBDb250ZW50Q2hpbGRyZW4gcXVlcmllcyB3aWxsIHJldHVybiBkaXJlY3RpdmVzXHJcbiAgICAvL2V4aXN0aW5nIGluc2lkZSB0aGUgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBlbGVtZW50IG9mIHlvdXIgdmlldyxcclxuICAgIC8vd2hlcmVhcyBAVmlld0NoaWxkIGFuZCBAVmlld0NoaWxkcmVuIG9ubHkgbG9vayBhdCBlbGVtZW50c1xyXG4gICAgLy90aGF0IGFyZSBvbiB5b3VyIHZpZXcgdGVtcGxhdGUgZGlyZWN0bHkgKGkuZS4gdGhlIHNoYWRvdyBkb20pLlxyXG4gICAgLy9oZXJlIHdlIGFyZSB1c2luZyB0aGUgVmlld0NoaWxkcmVuIHRvIGdyYWIgYWxsIGNoaWxkcmVuIHZpYSB0aGUgdGFiSXRlbSBpbmRleFxyXG4gICAgQFZpZXdDaGlsZHJlbigndGFiSXRlbScpXHJcbiAgICBteVRhYnM6UXVlcnlMaXN0PGFueT47XHJcblxyXG4gICAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5teVRhYnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdG9nZ2xlQ2xhc3M6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQENvbnRlbnRDaGlsZHJlbihNaW5pdGFiKVxyXG4gICAgdGFiczpRdWVyeUxpc3Q8TWluaXRhYj47XHJcblxyXG4gICAgLy8gYWNjZXNzIG5hdGl2ZSBlbGVtZW50cyB0aHJvdWdoIHRoZSBhbmd1bGFyIGludGVyZmFjZSBvZiBWaWV3Q2hpbGRyZW5cclxuICAgIGlzQWNjZW50KCkge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlQ2xhc3MgPSAhdGhpcy50b2dnbGVDbGFzcztcclxuICAgICAgICB0aGlzLm15VGFicy5tYXAoaT0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ215IHRhYnMgJyArIGkuX2FwcEVsZW1lbnQubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29udGVudENoaWxkcmVuIGFyZSBzZXRcclxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRhYnMpO1xyXG4gICAgICAgIC8vIGdldCBhbGwgYWN0aXZlIHRhYnNcclxuICAgICAgICBsZXQgYWN0aXZlVGFicyA9IHRoaXMudGFicy5maWx0ZXIoKHRhYik9PnRhYi5hY3RpdmUpO1xyXG5cclxuICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyBhY3RpdmUgdGFiIHNldCwgYWN0aXZhdGUgdGhlIGZpcnN0XHJcbiAgICAgICAgaWYgKGFjdGl2ZVRhYnMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdFRhYih0aGlzLnRhYnMuZmlyc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdFRhYih0YWI6TWluaXRhYiwgZXZlbnQ/Ok1vdXNlRXZlbnQpIHtcclxuICAgICAgICAvLyBkZWFjdGl2YXRlIGFsbCB0YWJzXHJcbiAgICAgICAgZXZlbnQgPyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIDogbnVsbDtcclxuICAgICAgICB0aGlzLnRhYnMudG9BcnJheSgpLmZvckVhY2godGFiID0+IHRhYi5hY3RpdmUgPSBmYWxzZSk7XHJcblxyXG4gICAgICAgIC8vIGFjdGl2YXRlIHRoZSB0YWIgdGhlIHVzZXIgaGFzIGNsaWNrZWQgb24uXHJcbiAgICAgICAgdGFiLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
