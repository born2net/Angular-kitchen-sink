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
var Tabs = (function () {
    function Tabs() {
        this.tabs = [];
    }
    Tabs.prototype.selectTab = function (tab, event) {
        event.preventDefault;
        _deactivateAllTabs(this.tabs);
        tab.active = true;
        function _deactivateAllTabs(tabs) {
            tabs.forEach(function (tab) { return tab.active = false; });
        }
        return false;
    };
    Tabs.prototype.addTab = function (tab) {
        if (this.tabs.length === 0) {
            tab.active = true;
        }
        this.tabs.push(tab);
    };
    Tabs = __decorate([
        core_1.Component({
            selector: 'tabs',
            template: "\n    <ul class=\"nav nav-tabs\">\n      <li *ngFor=\"#tab of tabs\" (click)=\"selectTab(tab, $event)\" [class.active]=\"tab.active\">\n        <a href=\"#\">{{tab.title}}</a>\n      </li>\n    </ul>\n    <ng-content></ng-content>\n    <small>I am Tabs component</small>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], Tabs);
    return Tabs;
})();
exports.Tabs = Tabs;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL3RhYnMvdGFicy50cyJdLCJuYW1lcyI6WyJUYWJzIiwiVGFicy5jb25zdHJ1Y3RvciIsIlRhYnMuc2VsZWN0VGFiIiwiVGFicy5zZWxlY3RUYWIuX2RlYWN0aXZhdGVBbGxUYWJzIiwiVGFicy5hZGRUYWIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUd4QztJQWdCSUE7UUFDSUMsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsRUFBRUEsQ0FBQ0E7SUFDbkJBLENBQUNBO0lBRU9ELHdCQUFTQSxHQUFqQkEsVUFBa0JBLEdBQUdBLEVBQUVBLEtBQUtBO1FBQ3hCRSxLQUFLQSxDQUFDQSxjQUFjQSxDQUFDQTtRQUNyQkEsa0JBQWtCQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUM5QkEsR0FBR0EsQ0FBQ0EsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDbEJBLDRCQUE0QkEsSUFBVUE7WUFDbENDLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLFVBQUNBLEdBQUdBLElBQUdBLE9BQUFBLEdBQUdBLENBQUNBLE1BQU1BLEdBQUdBLEtBQUtBLEVBQWxCQSxDQUFrQkEsQ0FBQ0EsQ0FBQ0E7UUFDNUNBLENBQUNBO1FBQ0RELE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO0lBQ2pCQSxDQUFDQTtJQU1ERixxQkFBTUEsR0FBTkEsVUFBT0EsR0FBT0E7UUFDVkksRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDekJBLEdBQUdBLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBO1FBQ3RCQSxDQUFDQTtRQUNEQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtJQUN4QkEsQ0FBQ0E7SUF2Q0xKO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxNQUFNQTtZQUNoQkEsUUFBUUEsRUFBRUEsb1JBUVhBO1NBQ0ZBLENBQUNBOzthQTZCREE7SUFBREEsV0FBQ0E7QUFBREEsQ0F4Q0EsQUF3Q0NBLElBQUE7QUE1QlksWUFBSSxPQTRCaEIsQ0FBQSIsImZpbGUiOiJjb21wcy90YWJzL3RhYnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbi8vaW1wb3J0IHtUYWJ9IGZyb20gJ3RhYic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndGFicycsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCI+XHJcbiAgICAgIDxsaSAqbmdGb3I9XCIjdGFiIG9mIHRhYnNcIiAoY2xpY2spPVwic2VsZWN0VGFiKHRhYiwgJGV2ZW50KVwiIFtjbGFzcy5hY3RpdmVdPVwidGFiLmFjdGl2ZVwiPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCI+e3t0YWIudGl0bGV9fTwvYT5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8c21hbGw+SSBhbSBUYWJzIGNvbXBvbmVudDwvc21hbGw+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFicyB7XHJcblxyXG4gICAgdGFiczphbnlbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhYnMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlbGVjdFRhYih0YWIsIGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQ7XHJcbiAgICAgICAgX2RlYWN0aXZhdGVBbGxUYWJzKHRoaXMudGFicyk7XHJcbiAgICAgICAgdGFiLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgZnVuY3Rpb24gX2RlYWN0aXZhdGVBbGxUYWJzKHRhYnM6YW55W10pIHtcclxuICAgICAgICAgICAgdGFicy5mb3JFYWNoKCh0YWIpPT50YWIuYWN0aXZlID0gZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gX2RlYWN0aXZhdGVBbGxUYWJzKCl7XHJcbiAgICAvLyAgIHRoaXMudGFicy5mb3JFYWNoKCh0YWIpPT50YWIuYWN0aXZlID0gZmFsc2UpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGFkZFRhYih0YWI6YW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGFicy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGFiLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGFicy5wdXNoKHRhYik7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
