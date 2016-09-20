System.register(['@angular/core', './Minitab'], function(exports_1, context_1) {
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
    var core_1, Minitab_1;
    var Minitabs;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Minitab_1_1) {
                Minitab_1 = Minitab_1_1;
            }],
        execute: function() {
            Minitabs = (function () {
                function Minitabs() {
                    this.toggleClass = false;
                }
                Object.defineProperty(Minitabs.prototype, "style", {
                    set: function (i_style) {
                        this._style = i_style;
                    },
                    enumerable: true,
                    configurable: true
                });
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
                    __metadata('design:type', (typeof (_a = typeof core_1.QueryList !== 'undefined' && core_1.QueryList) === 'function' && _a) || Object)
                ], Minitabs.prototype, "myTabs", void 0);
                __decorate([
                    core_1.Input('style'), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], Minitabs.prototype, "style", null);
                __decorate([
                    core_1.ContentChildren(Minitab_1.Minitab), 
                    __metadata('design:type', (typeof (_b = typeof core_1.QueryList !== 'undefined' && core_1.QueryList) === 'function' && _b) || Object)
                ], Minitabs.prototype, "tabs", void 0);
                Minitabs = __decorate([
                    core_1.Component({
                        selector: 'mini-tabs',
                        styles: ["\n        .accent {\n            background-color: lightgray;\n        }\n    "],
                        template: "\n    <button [ngStyle]=\"_style\" (click)=\"isAccent($event)\">toggle a class style on/off</button>\n    <ul class=\"nav nav-tabs\">\n      <li let tabItem *ngFor=\"let tab of tabs\" (click)=\"selectTab(tab,$event)\" [class.active]=\"tab.active\"\n        [class.accent]=\"toggleClass\">\n        <a href=\"#\">{{tab.title}}</a>\n      </li>\n    </ul>\n    <ng-content></ng-content>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Minitabs);
                return Minitabs;
                var _a, _b;
            }());
            exports_1("Minitabs", Minitabs);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL21pbml0YWJzL01pbmlUYWJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBcUNBO2dCQUFBO29CQXNCWSxnQkFBVyxHQUFXLEtBQUssQ0FBQztnQkFnQ3hDLENBQUM7Z0JBeENHLHNCQUFJLDJCQUFLO3lCQUFULFVBQVUsT0FBYzt3QkFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7b0JBQzFCLENBQUM7OzttQkFBQTtnQkFFRCxxQ0FBa0IsR0FBbEI7Z0JBRUEsQ0FBQztnQkFPRCwyQkFBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7d0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDMUQsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFHRCxxQ0FBa0IsR0FBbEI7b0JBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBRXZCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBRyxJQUFHLE9BQUEsR0FBRyxDQUFDLE1BQU0sRUFBVixDQUFVLENBQUMsQ0FBQztvQkFHckQsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7d0JBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDeEMsQ0FBQztnQkFFRCw0QkFBUyxHQUFULFVBQVUsR0FBVyxFQUFFLEtBQWlCO29CQUVwQyxLQUFLLEdBQUcsS0FBSyxDQUFDLGNBQWMsRUFBRSxHQUFHLElBQUksQ0FBQztvQkFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsTUFBTSxHQUFHLEtBQUssRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO29CQUd2RCxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDdEIsQ0FBQztnQkEzQ0Q7b0JBQUMsbUJBQVksQ0FBQyxTQUFTLENBQUM7O3dEQUFBO2dCQUl4QjtvQkFBQyxZQUFLLENBQUMsT0FBTyxDQUFDOzs7cURBQUE7Z0JBVWY7b0JBQUMsc0JBQWUsQ0FBQyxpQkFBTyxDQUFDOztzREFBQTtnQkF6QzdCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLE1BQU0sRUFBRSxDQUFDLGdGQUlSLENBQUM7d0JBQ0YsUUFBUSxFQUFFLHNZQVNYO3FCQUNGLENBQUM7OzRCQUFBO2dCQXVERixlQUFDOztZQUFELENBdERBLEFBc0RDLElBQUE7WUF0REQsK0JBc0RDLENBQUEiLCJmaWxlIjoiY29tcHMvbWluaXRhYnMvTWluaVRhYnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIEFmdGVyQ29udGVudEluaXQsIFZpZXdDaGlsZHJlbiwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01pbml0YWJ9IGZyb20gJy4vTWluaXRhYic7XHJcblxyXG4vKipcclxuICogIEJlbG93IEkgZGVtb25zdHJhdGUgZHluYW1pYyBjbGFzcyBzZXR1cC5cclxuICpcclxuICogIFlvdSBjYW4gYWxzbyBkbyBbY2xhc3NdPVwiZ2V0Q2xhc3MoKVwiICBhbmQgaXQgd2lsbCBzZXQgYSBzdHJpbmcgb2YgY2xhc3Mgb3IgY2xhc3NlcywgYnV0IHRoaXMgd2lsbCBtZXNzXHJcbiAqICB3aXRoIGFueSBvZiB0aGUgY2xhc3NlcyBvbiB0aGUgZWxlbWVudCBpZiB0aGV5IGFyZSBhbHJlYWR5IHNldC5cclxuICpcclxuICogIE9mdGVuIHlvdSB3aWxsIHdhbnQgdG8gdG9nZ2xlIGEgc2luZ2xlIGNsYXNzLCB3aGljaCB5b3UgY2FuIGRvIGJ5XHJcbiAqICB1c2luZyBhIFtjbGFzcy5jbGFzc05hbWVdIHN5bnRheCBpbiB0aGUgcHJvcGVydHkuXHJcbiAqXHJcbiAqICBhbmQgbW9yZSBleGFtcGxlcyBmb3Igc3R5bGVzOlxyXG4gKlxyXG4gPCEtLSBnZXRDb2xvcigpIHJldHVybnMgYSB2YWxpZCBjb2xvciAtLT5cclxuIDxoMSBbc3R5bGUuY29sb3JdPVwiZ2V0Q29sb3IoKVwiPlRpdGxlPC9oMT5cclxuIDxoMSBbc3R5bGUubGluZS1oZWlnaHQuZW1dPVwiJzInXCI+VGl0bGU8L2gxPlxyXG5cclxuICoqL1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbWluaS10YWJzJyxcclxuICAgIHN0eWxlczogW2BcclxuICAgICAgICAuYWNjZW50IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgICAgIH1cclxuICAgIGBdLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxidXR0b24gW25nU3R5bGVdPVwiX3N0eWxlXCIgKGNsaWNrKT1cImlzQWNjZW50KCRldmVudClcIj50b2dnbGUgYSBjbGFzcyBzdHlsZSBvbi9vZmY8L2J1dHRvbj5cclxuICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtdGFic1wiPlxyXG4gICAgICA8bGkgbGV0IHRhYkl0ZW0gKm5nRm9yPVwibGV0IHRhYiBvZiB0YWJzXCIgKGNsaWNrKT1cInNlbGVjdFRhYih0YWIsJGV2ZW50KVwiIFtjbGFzcy5hY3RpdmVdPVwidGFiLmFjdGl2ZVwiXHJcbiAgICAgICAgW2NsYXNzLmFjY2VudF09XCJ0b2dnbGVDbGFzc1wiPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCI+e3t0YWIudGl0bGV9fTwvYT5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWluaXRhYnMgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuXHJcbiAgICBfc3R5bGU6T2JqZWN0O1xyXG5cclxuICAgIC8vQXMgdGhlIG5hbWUgc3VnZ2VzdHMsIEBDb250ZW50Q2hpbGQgYW5kIEBDb250ZW50Q2hpbGRyZW4gcXVlcmllcyB3aWxsIHJldHVybiBkaXJlY3RpdmVzXHJcbiAgICAvL2V4aXN0aW5nIGluc2lkZSB0aGUgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBlbGVtZW50IG9mIHlvdXIgdmlldyxcclxuICAgIC8vd2hlcmVhcyBAVmlld0NoaWxkIGFuZCBAVmlld0NoaWxkcmVuIG9ubHkgbG9vayBhdCBlbGVtZW50c1xyXG4gICAgLy90aGF0IGFyZSBvbiB5b3VyIHZpZXcgdGVtcGxhdGUgZGlyZWN0bHkgKGkuZS4gdGhlIHNoYWRvdyBkb20pLlxyXG4gICAgLy9oZXJlIHdlIGFyZSB1c2luZyB0aGUgVmlld0NoaWxkcmVuIHRvIGdyYWIgYWxsIGNoaWxkcmVuIHZpYSB0aGUgdGFiSXRlbSBpbmRleFxyXG4gICAgQFZpZXdDaGlsZHJlbigndGFiSXRlbScpXHJcbiAgICBteVRhYnM6UXVlcnlMaXN0PGFueT47XHJcblxyXG4gICAgLy8gYWJpbGl0eSB0byBzdHlsZSBjb21wb25lbnRzIGJ5IHBhc3NpbmcgY3NzXHJcbiAgICBASW5wdXQoJ3N0eWxlJylcclxuICAgIHNldCBzdHlsZShpX3N0eWxlOk9iamVjdCl7XHJcbiAgICAgICAgdGhpcy5fc3R5bGUgPSBpX3N0eWxlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMubXlUYWJzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvZ2dsZUNsYXNzOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBDb250ZW50Q2hpbGRyZW4oTWluaXRhYilcclxuICAgIHRhYnM6UXVlcnlMaXN0PE1pbml0YWI+O1xyXG5cclxuICAgIC8vIGFjY2VzcyBuYXRpdmUgZWxlbWVudHMgdGhyb3VnaCB0aGUgYW5ndWxhciBpbnRlcmZhY2Ugb2YgVmlld0NoaWxkcmVuXHJcbiAgICBpc0FjY2VudCgpIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzID0gIXRoaXMudG9nZ2xlQ2xhc3M7XHJcbiAgICAgICAgdGhpcy5teVRhYnMubWFwKGk9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdteSB0YWJzICcgKyBpLl9hcHBFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnRlbnRDaGlsZHJlbiBhcmUgc2V0XHJcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50YWJzKTtcclxuICAgICAgICAvLyBnZXQgYWxsIGFjdGl2ZSB0YWJzXHJcbiAgICAgICAgbGV0IGFjdGl2ZVRhYnMgPSB0aGlzLnRhYnMuZmlsdGVyKCh0YWIpPT50YWIuYWN0aXZlKTtcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gYWN0aXZlIHRhYiBzZXQsIGFjdGl2YXRlIHRoZSBmaXJzdFxyXG4gICAgICAgIGlmIChhY3RpdmVUYWJzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RUYWIodGhpcy50YWJzLmZpcnN0KTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RUYWIodGFiOk1pbml0YWIsIGV2ZW50PzpNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgLy8gZGVhY3RpdmF0ZSBhbGwgdGFic1xyXG4gICAgICAgIGV2ZW50ID8gZXZlbnQucHJldmVudERlZmF1bHQoKSA6IG51bGw7XHJcbiAgICAgICAgdGhpcy50YWJzLnRvQXJyYXkoKS5mb3JFYWNoKHRhYiA9PiB0YWIuYWN0aXZlID0gZmFsc2UpO1xyXG5cclxuICAgICAgICAvLyBhY3RpdmF0ZSB0aGUgdGFiIHRoZSB1c2VyIGhhcyBjbGlja2VkIG9uLlxyXG4gICAgICAgIHRhYi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
