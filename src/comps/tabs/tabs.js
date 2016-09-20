System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var Tabs;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Tabs = (function () {
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
                        template: "\n    <ul class=\"nav nav-tabs\">\n      <li *ngFor=\"let tab of tabs\" (click)=\"selectTab(tab, $event)\" [class.active]=\"tab.active\">\n        <a href=\"#\">{{tab.title}}</a>\n      </li>\n    </ul>\n    <ng-content></ng-content>\n    <small>I am Tabs component</small>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Tabs);
                return Tabs;
            }());
            exports_1("Tabs", Tabs);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL3RhYnMvdGFicy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVBO2dCQUlJO29CQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUNuQixDQUFDO2dCQUVPLHdCQUFTLEdBQWpCLFVBQWtCLEdBQUcsRUFBRSxLQUFLO29CQUN4QixLQUFLLENBQUMsY0FBYyxDQUFDO29CQUNyQixrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzlCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUNsQiw0QkFBNEIsSUFBVTt3QkFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsSUFBRyxPQUFBLEdBQUcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxFQUFsQixDQUFrQixDQUFDLENBQUM7b0JBQzVDLENBQUM7b0JBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDakIsQ0FBQztnQkFNRCxxQkFBTSxHQUFOLFVBQU8sR0FBTztvQkFDVixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN6QixHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDdEIsQ0FBQztvQkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDeEIsQ0FBQztnQkF2Q0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsTUFBTTt3QkFDaEIsUUFBUSxFQUFFLHVSQVFYO3FCQUNGLENBQUM7O3dCQUFBO2dCQTZCRixXQUFDO1lBQUQsQ0E1QkEsQUE0QkMsSUFBQTtZQTVCRCx1QkE0QkMsQ0FBQSIsImZpbGUiOiJjb21wcy90YWJzL3RhYnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8vaW1wb3J0IHtUYWJ9IGZyb20gJ3RhYic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndGFicycsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCI+XHJcbiAgICAgIDxsaSAqbmdGb3I9XCJsZXQgdGFiIG9mIHRhYnNcIiAoY2xpY2spPVwic2VsZWN0VGFiKHRhYiwgJGV2ZW50KVwiIFtjbGFzcy5hY3RpdmVdPVwidGFiLmFjdGl2ZVwiPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCI+e3t0YWIudGl0bGV9fTwvYT5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8c21hbGw+SSBhbSBUYWJzIGNvbXBvbmVudDwvc21hbGw+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFicyB7XHJcblxyXG4gICAgdGFiczphbnlbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhYnMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlbGVjdFRhYih0YWIsIGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQ7XHJcbiAgICAgICAgX2RlYWN0aXZhdGVBbGxUYWJzKHRoaXMudGFicyk7XHJcbiAgICAgICAgdGFiLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgZnVuY3Rpb24gX2RlYWN0aXZhdGVBbGxUYWJzKHRhYnM6YW55W10pIHtcclxuICAgICAgICAgICAgdGFicy5mb3JFYWNoKCh0YWIpPT50YWIuYWN0aXZlID0gZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gX2RlYWN0aXZhdGVBbGxUYWJzKCl7XHJcbiAgICAvLyAgIHRoaXMudGFicy5mb3JFYWNoKCh0YWIpPT50YWIuYWN0aXZlID0gZmFsc2UpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGFkZFRhYih0YWI6YW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGFicy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGFiLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGFicy5wdXNoKHRhYik7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
