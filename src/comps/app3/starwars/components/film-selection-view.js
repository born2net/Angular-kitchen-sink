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
    var FilmSelectionView;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FilmSelectionView = (function () {
                function FilmSelectionView() {
                    this.count = 0;
                    this.current = new core_1.EventEmitter();
                    this.currentSelection = null;
                }
                FilmSelectionView.prototype.ngOnChanges = function () {
                    this.list = (this.count > 0 ? Array.apply(null, Array(this.count)).map(function (x, index) { return index; }) : []);
                };
                FilmSelectionView.prototype.select = function (item) {
                    this.currentSelection = item;
                    this.current.emit(item);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FilmSelectionView.prototype, "count", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
                ], FilmSelectionView.prototype, "current", void 0);
                FilmSelectionView = __decorate([
                    core_1.Component({
                        selector: 'film-selection',
                        template: "\n        <button type=\"button\"\n            *ngFor=\"let item of list\"\n            class=\"vehicle-selection\"\n            [ngClass]=\"{'btn-primary':item==currentSelection}\"\n            (click)=\"select(item)\"\n            >\n            {{item+1}}\n        </button>\n    ",
                        styles: ["\n        .vehicle-selection {\n            margin-right:8px;\n        }\n    "],
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush
                    }), 
                    __metadata('design:paramtypes', [])
                ], FilmSelectionView);
                return FilmSelectionView;
                var _a;
            }());
            exports_1("FilmSelectionView", FilmSelectionView);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDMvc3RhcndhcnMvY29tcG9uZW50cy9maWxtLXNlbGVjdGlvbi12aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBcUJBO2dCQUFBO29CQUdJLFVBQUssR0FBRyxDQUFDLENBQUM7b0JBRVYsWUFBTyxHQUFxQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztvQkFFdkMscUJBQWdCLEdBQUcsSUFBSSxDQUFDO2dCQWFwQyxDQUFDO2dCQVZHLHVDQUFXLEdBQVg7b0JBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLEVBQUUsS0FBSyxJQUFLLE9BQUEsS0FBSyxFQUFMLENBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUN0RyxDQUFDO2dCQUVPLGtDQUFNLEdBQWQsVUFBZSxJQUFJO29CQUNmLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7b0JBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM1QixDQUFDO2dCQWZEO29CQUFDLFlBQUssRUFBRTs7Z0VBQUE7Z0JBRVI7b0JBQUMsYUFBTSxFQUFFOztrRUFBQTtnQkF2QmI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixRQUFRLEVBQUUsNlJBU1Q7d0JBQ0QsTUFBTSxFQUFFLENBQUMsZ0ZBSVIsQ0FBQzt3QkFDRixlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtxQkFDbEQsQ0FBQzs7cUNBQUE7Z0JBcUJGLHdCQUFDOztZQUFELENBcEJBLEFBb0JDLElBQUE7WUFwQkQsaURBb0JDLENBQUEiLCJmaWxlIjoiY29tcHMvYXBwMy9zdGFyd2Fycy9jb21wb25lbnRzL2ZpbG0tc2VsZWN0aW9uLXZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2ZpbG0tc2VsZWN0aW9uJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgbGlzdFwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwidmVoaWNsZS1zZWxlY3Rpb25cIlxyXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7J2J0bi1wcmltYXJ5JzppdGVtPT1jdXJyZW50U2VsZWN0aW9ufVwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3QoaXRlbSlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt7aXRlbSsxfX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgICAgLnZlaGljbGUtc2VsZWN0aW9uIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjhweDtcclxuICAgICAgICB9XHJcbiAgICBgXSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWxtU2VsZWN0aW9uVmlldyBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGNvdW50ID0gMDtcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgY3VycmVudDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBwcml2YXRlIGN1cnJlbnRTZWxlY3Rpb24gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBsaXN0O1xyXG5cclxuICAgIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgICAgIHRoaXMubGlzdCA9ICh0aGlzLmNvdW50ID4gMCA/IEFycmF5LmFwcGx5KG51bGwsIEFycmF5KHRoaXMuY291bnQpKS5tYXAoKHgsIGluZGV4KSA9PiBpbmRleCkgOiBbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZWxlY3QoaXRlbSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNlbGVjdGlvbiA9IGl0ZW07XHJcbiAgICAgICAgdGhpcy5jdXJyZW50LmVtaXQoaXRlbSk7XHJcbiAgICB9XHJcblxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
