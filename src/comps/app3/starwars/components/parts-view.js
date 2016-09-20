System.register(['@angular/core', 'reselect'], function(exports_1, context_1) {
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
    var core_1, reselect_1;
    var partsInCartLookupSelector, PartsView;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (reselect_1_1) {
                reselect_1 = reselect_1_1;
            }],
        execute: function() {
            partsInCartLookupSelector = reselect_1.createSelector(function (changeRecord) { return changeRecord.partsInCart.currentValue; }, function (partsInCart) {
                var red = partsInCart.reduce(function (map, part) { return (map[part.id] = true) && map; }, {});
                return red;
            });
            PartsView = (function () {
                function PartsView() {
                    this.parts = [];
                    this.partsInCart = [];
                    this.partsInCartLookup = {};
                    this.addToCart = new core_1.EventEmitter();
                }
                PartsView.prototype.ngOnChanges = function (changeRecord) {
                    this.partsInCartLookup = partsInCartLookupSelector(changeRecord);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PartsView.prototype, "parts", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PartsView.prototype, "partsInCart", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
                ], PartsView.prototype, "addToCart", void 0);
                PartsView = __decorate([
                    core_1.Component({
                        selector: 'parts',
                        template: "\n        <table>\n            <tr *ngFor=\"let part of parts\">\n                <td>\n                    <button style=\"margin-right:10px;margin-bottom:3px;margin-top:3px\"\n                        [disabled]=\"partsInCartLookup[part.id]\"\n                        (click)=\"addToCart.emit(part.id)\">add\n                    </button>\n                </td>\n                <td>{{part.name}}</td>\n            </tr>\n        </table>\n    ",
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush
                    }), 
                    __metadata('design:paramtypes', [])
                ], PartsView);
                return PartsView;
                var _a;
            }());
            exports_1("PartsView", PartsView);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDMvc3RhcndhcnMvY29tcG9uZW50cy9wYXJ0cy12aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7UUFNTSx5QkFBeUI7Ozs7Ozs7Ozs7WUFBekIseUJBQXlCLEdBQUcseUJBQWMsQ0FBQyxVQUFDLFlBQWdCLElBQUssT0FBQSxZQUFZLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBckMsQ0FBcUMsRUFDeEcsVUFBQyxXQUFlO2dCQUNaLElBQUksR0FBRyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFHLEVBQUUsSUFBUSxJQUFLLE9BQUEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBNUIsQ0FBNEIsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDbEYsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNmLENBQUMsQ0FBQyxDQUFDO1lBbUJQO2dCQUFBO29CQUVJLFVBQUssR0FBRyxFQUFFLENBQUM7b0JBRVgsZ0JBQVcsR0FBRyxFQUFFLENBQUM7b0JBQ2pCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztvQkFHdkIsY0FBUyxHQUFxQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztnQkFNckQsQ0FBQztnQkFKRywrQkFBVyxHQUFYLFVBQVksWUFBK0M7b0JBQ3ZELElBQUksQ0FBQyxpQkFBaUIsR0FBRyx5QkFBeUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDckUsQ0FBQztnQkFYRDtvQkFBQyxZQUFLLEVBQUU7O3dEQUFBO2dCQUVSO29CQUFDLFlBQUssRUFBRTs7OERBQUE7Z0JBSVI7b0JBQUMsYUFBTSxFQUFFOzs0REFBQTtnQkF4QmI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsT0FBTzt3QkFDakIsUUFBUSxFQUFFLCtiQVlUO3dCQUNELGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO3FCQUNsRCxDQUFDOzs2QkFBQTtnQkFlRixnQkFBQzs7WUFBRCxDQWRBLEFBY0MsSUFBQTtZQWRELGlDQWNDLENBQUEiLCJmaWxlIjoiY29tcHMvYXBwMy9zdGFyd2Fycy9jb21wb25lbnRzL3BhcnRzLXZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi8uLi90eXBpbmdzL2FwcC5kLnRzXCIvPlxyXG5cclxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5cclxuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xyXG5cclxuY29uc3QgcGFydHNJbkNhcnRMb29rdXBTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKChjaGFuZ2VSZWNvcmQ6YW55KSA9PiBjaGFuZ2VSZWNvcmQucGFydHNJbkNhcnQuY3VycmVudFZhbHVlLFxyXG4gICAgKHBhcnRzSW5DYXJ0OmFueSkgPT4ge1xyXG4gICAgICAgIHZhciByZWQgPSBwYXJ0c0luQ2FydC5yZWR1Y2UoKG1hcCwgcGFydDphbnkpID0+IChtYXBbcGFydC5pZF0gPSB0cnVlKSAmJiBtYXAsIHt9KTtcclxuICAgICAgICByZXR1cm4gcmVkO1xyXG4gICAgfSk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncGFydHMnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgcGFydCBvZiBwYXJ0c1wiPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9XCJtYXJnaW4tcmlnaHQ6MTBweDttYXJnaW4tYm90dG9tOjNweDttYXJnaW4tdG9wOjNweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJwYXJ0c0luQ2FydExvb2t1cFtwYXJ0LmlkXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJhZGRUb0NhcnQuZW1pdChwYXJ0LmlkKVwiPmFkZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57e3BhcnQubmFtZX19PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgYCxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYXJ0c1ZpZXcgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gICAgQElucHV0KClcclxuICAgIHBhcnRzID0gW107XHJcbiAgICBASW5wdXQoKVxyXG4gICAgcGFydHNJbkNhcnQgPSBbXTtcclxuICAgIHBhcnRzSW5DYXJ0TG9va3VwID0ge307XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBhZGRUb0NhcnQ6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlUmVjb3JkOntbcHJvcE5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZX0pIHtcclxuICAgICAgICB0aGlzLnBhcnRzSW5DYXJ0TG9va3VwID0gcGFydHNJbkNhcnRMb29rdXBTZWxlY3RvcihjaGFuZ2VSZWNvcmQpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
