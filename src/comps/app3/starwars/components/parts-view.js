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
                    __metadata('design:type', core_1.EventEmitter)
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
            }());
            exports_1("PartsView", PartsView);
        }
    }
});
