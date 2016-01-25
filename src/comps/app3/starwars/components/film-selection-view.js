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
//# sourceMappingURL=film-selection-view.js.map