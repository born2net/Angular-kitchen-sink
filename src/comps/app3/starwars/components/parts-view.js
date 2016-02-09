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
var reselect_1 = require('reselect');
var partsInCartLookupSelector = reselect_1.createSelector(function (changeRecord) { return changeRecord.partsInCart.currentValue; }, function (partsInCart) {
    var red = partsInCart.reduce(function (map, part) { return (map[part.id] = true) && map; }, {});
    return red;
});
var PartsView = (function () {
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
        __metadata('design:type', core_1.EventEmitter)
    ], PartsView.prototype, "addToCart", void 0);
    PartsView = __decorate([
        core_1.Component({
            selector: 'parts',
            template: "\n        <table>\n            <tr *ngFor=\"#part of parts\">\n                <td>\n                    <button style=\"margin-right:10px;margin-bottom:3px;margin-top:3px\"\n                        [disabled]=\"partsInCartLookup[part.id]\"\n                        (click)=\"addToCart.next(part.id)\">add\n                    </button>\n                </td>\n                <td>{{part.name}}</td>\n            </tr>\n        </table>\n    ",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], PartsView);
    return PartsView;
})();
exports.PartsView = PartsView;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDMvc3RhcndhcnMvY29tcG9uZW50cy9wYXJ0cy12aWV3LnRzIl0sIm5hbWVzIjpbIlBhcnRzVmlldyIsIlBhcnRzVmlldy5jb25zdHJ1Y3RvciIsIlBhcnRzVmlldy5uZ09uQ2hhbmdlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUEscUJBQXVHLGVBRXZHLENBQUMsQ0FGcUg7QUFFdEgseUJBQTZCLFVBQVUsQ0FBQyxDQUFBO0FBRXhDLElBQU0seUJBQXlCLEdBQUcseUJBQWMsQ0FBQyxVQUFDLFlBQWdCLElBQUssT0FBQSxZQUFZLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBckMsQ0FBcUMsRUFDeEcsVUFBQyxXQUFlO0lBQ1osSUFBSSxHQUFHLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQUcsRUFBRSxJQUFRLElBQUssT0FBQSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxFQUE1QixDQUE0QixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2xGLE1BQU0sQ0FBQyxHQUFHLENBQUM7QUFDZixDQUFDLENBQUMsQ0FBQztBQUVQO0lBQUFBO1FBbUJJQyxVQUFLQSxHQUFHQSxFQUFFQSxDQUFDQTtRQUVYQSxnQkFBV0EsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFDakJBLHNCQUFpQkEsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFHdkJBLGNBQVNBLEdBQXFCQSxJQUFJQSxtQkFBWUEsRUFBRUEsQ0FBQ0E7SUFLckRBLENBQUNBO0lBSEdELCtCQUFXQSxHQUFYQSxVQUFZQSxZQUErQ0E7UUFDdkRFLElBQUlBLENBQUNBLGlCQUFpQkEsR0FBR0EseUJBQXlCQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQTtJQUNyRUEsQ0FBQ0E7SUFYREY7UUFBQ0EsWUFBS0EsRUFBRUE7O09BQ1JBLDRCQUFLQSxVQUFNQTtJQUNYQTtRQUFDQSxZQUFLQSxFQUFFQTs7T0FDUkEsa0NBQVdBLFVBQU1BO0lBR2pCQTtRQUFDQSxhQUFNQSxFQUFFQTs7T0FDVEEsZ0NBQVNBLFVBQXdDQTtJQXpCckRBO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxPQUFPQTtZQUNqQkEsUUFBUUEsRUFBRUEsNGJBWVRBO1lBQ0RBLGVBQWVBLEVBQUVBLDhCQUF1QkEsQ0FBQ0EsTUFBTUE7U0FDbERBLENBQUNBOztrQkFjREE7SUFBREEsZ0JBQUNBO0FBQURBLENBOUJBLEFBOEJDQSxJQUFBO0FBYlksaUJBQVMsWUFhckIsQ0FBQSIsImZpbGUiOiJjb21wcy9hcHAzL3N0YXJ3YXJzL2NvbXBvbmVudHMvcGFydHMtdmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy4uLy4uL3R5cGluZ3MvYXBwLmQudHNcIi8+XHJcblxyXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2V9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnXHJcblxyXG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XHJcblxyXG5jb25zdCBwYXJ0c0luQ2FydExvb2t1cFNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoKGNoYW5nZVJlY29yZDphbnkpID0+IGNoYW5nZVJlY29yZC5wYXJ0c0luQ2FydC5jdXJyZW50VmFsdWUsXHJcbiAgICAocGFydHNJbkNhcnQ6YW55KSA9PiB7XHJcbiAgICAgICAgdmFyIHJlZCA9IHBhcnRzSW5DYXJ0LnJlZHVjZSgobWFwLCBwYXJ0OmFueSkgPT4gKG1hcFtwYXJ0LmlkXSA9IHRydWUpICYmIG1hcCwge30pO1xyXG4gICAgICAgIHJldHVybiByZWQ7XHJcbiAgICB9KTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwYXJ0cycsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgPHRyICpuZ0Zvcj1cIiNwYXJ0IG9mIHBhcnRzXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT1cIm1hcmdpbi1yaWdodDoxMHB4O21hcmdpbi1ib3R0b206M3B4O21hcmdpbi10b3A6M3B4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cInBhcnRzSW5DYXJ0TG9va3VwW3BhcnQuaWRdXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImFkZFRvQ2FydC5uZXh0KHBhcnQuaWQpXCI+YWRkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPnt7cGFydC5uYW1lfX08L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICBgLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhcnRzVmlldyBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgcGFydHMgPSBbXTtcclxuICAgIEBJbnB1dCgpXHJcbiAgICBwYXJ0c0luQ2FydCA9IFtdO1xyXG4gICAgcGFydHNJbkNhcnRMb29rdXAgPSB7fTtcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIGFkZFRvQ2FydDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VSZWNvcmQ6e1twcm9wTmFtZTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlfSkge1xyXG4gICAgICAgIHRoaXMucGFydHNJbkNhcnRMb29rdXAgPSBwYXJ0c0luQ2FydExvb2t1cFNlbGVjdG9yKGNoYW5nZVJlY29yZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
