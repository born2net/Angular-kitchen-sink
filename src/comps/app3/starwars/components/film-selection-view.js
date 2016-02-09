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
var FilmSelectionView = (function () {
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
        this.current.next(item);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FilmSelectionView.prototype, "count", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FilmSelectionView.prototype, "current", void 0);
    FilmSelectionView = __decorate([
        core_1.Component({
            selector: 'film-selection',
            template: "\n        <button type=\"button\"\n            *ngFor=\"#item of list\"\n            class=\"vehicle-selection\"\n            [ngClass]=\"{'btn-primary':item==currentSelection}\"\n            (click)=\"select(item)\"\n            >\n            {{item+1}}\n        </button>\n    ",
            styles: ["\n        .vehicle-selection {\n            margin-right:8px;\n        }\n    "],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], FilmSelectionView);
    return FilmSelectionView;
})();
exports.FilmSelectionView = FilmSelectionView;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDMvc3RhcndhcnMvY29tcG9uZW50cy9maWxtLXNlbGVjdGlvbi12aWV3LnRzIl0sIm5hbWVzIjpbIkZpbG1TZWxlY3Rpb25WaWV3IiwiRmlsbVNlbGVjdGlvblZpZXcuY29uc3RydWN0b3IiLCJGaWxtU2VsZWN0aW9uVmlldy5uZ09uQ2hhbmdlcyIsIkZpbG1TZWxlY3Rpb25WaWV3LnNlbGVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQXlGLGVBRXpGLENBQUMsQ0FGdUc7QUFFeEc7SUFBQUE7UUFzQklDLFVBQUtBLEdBQUdBLENBQUNBLENBQUNBO1FBRVZBLFlBQU9BLEdBQXFCQSxJQUFJQSxtQkFBWUEsRUFBRUEsQ0FBQ0E7UUFFdkNBLHFCQUFnQkEsR0FBR0EsSUFBSUEsQ0FBQ0E7SUFhcENBLENBQUNBO0lBVkdELHVDQUFXQSxHQUFYQTtRQUNJRSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxDQUFDQSxHQUFHQSxLQUFLQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxFQUFFQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxVQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxJQUFLQSxPQUFBQSxLQUFLQSxFQUFMQSxDQUFLQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQTtJQUN0R0EsQ0FBQ0E7SUFFT0Ysa0NBQU1BLEdBQWRBLFVBQWVBLElBQUlBO1FBQ2ZHLElBQUlBLENBQUNBLGdCQUFnQkEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDN0JBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0lBQzVCQSxDQUFDQTtJQWZESDtRQUFDQSxZQUFLQSxFQUFFQTs7T0FDUkEsb0NBQUtBLFVBQUtBO0lBQ1ZBO1FBQUNBLGFBQU1BLEVBQUVBOztPQUNUQSxzQ0FBT0EsVUFBd0NBO0lBeEJuREE7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLGdCQUFnQkE7WUFDMUJBLFFBQVFBLEVBQUVBLDBSQVNUQTtZQUNEQSxNQUFNQSxFQUFFQSxDQUFDQSxnRkFJUkEsQ0FBQ0E7WUFDRkEsZUFBZUEsRUFBRUEsOEJBQXVCQSxDQUFDQSxNQUFNQTtTQUNsREEsQ0FBQ0E7OzBCQXFCREE7SUFBREEsd0JBQUNBO0FBQURBLENBdkNBLEFBdUNDQSxJQUFBO0FBcEJZLHlCQUFpQixvQkFvQjdCLENBQUEiLCJmaWxlIjoiY29tcHMvYXBwMy9zdGFyd2Fycy9jb21wb25lbnRzL2ZpbG0tc2VsZWN0aW9uLXZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzfSBmcm9tICdhbmd1bGFyMi9jb3JlJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2ZpbG0tc2VsZWN0aW9uJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgKm5nRm9yPVwiI2l0ZW0gb2YgbGlzdFwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwidmVoaWNsZS1zZWxlY3Rpb25cIlxyXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7J2J0bi1wcmltYXJ5JzppdGVtPT1jdXJyZW50U2VsZWN0aW9ufVwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3QoaXRlbSlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt7aXRlbSsxfX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgICAgLnZlaGljbGUtc2VsZWN0aW9uIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjhweDtcclxuICAgICAgICB9XHJcbiAgICBgXSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWxtU2VsZWN0aW9uVmlldyBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGNvdW50ID0gMDtcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgY3VycmVudDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBwcml2YXRlIGN1cnJlbnRTZWxlY3Rpb24gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBsaXN0O1xyXG5cclxuICAgIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgICAgIHRoaXMubGlzdCA9ICh0aGlzLmNvdW50ID4gMCA/IEFycmF5LmFwcGx5KG51bGwsIEFycmF5KHRoaXMuY291bnQpKS5tYXAoKHgsIGluZGV4KSA9PiBpbmRleCkgOiBbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZWxlY3QoaXRlbSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNlbGVjdGlvbiA9IGl0ZW07XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Lm5leHQoaXRlbSk7XHJcbiAgICB9XHJcblxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
