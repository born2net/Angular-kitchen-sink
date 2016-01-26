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
//# sourceMappingURL=parts-view.js.map