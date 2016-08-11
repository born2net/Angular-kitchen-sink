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
    var CartView;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CartView = (function () {
                function CartView() {
                    this.parts = [];
                    this.removeFromCart = new core_1.EventEmitter();
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], CartView.prototype, "parts", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], CartView.prototype, "removeFromCart", void 0);
                CartView = __decorate([
                    core_1.Component({
                        selector: 'cart',
                        template: "\n        <p [class.hidden]=\"parts.length>0\" class=\"text-muted\">Empty :(</p>\n        <table>\n            <tr *ngFor=\"let part of parts\">\n                <td>\n                    <button style=\"margin-right:10px;margin-bottom:3px;margin-top:3px\"\n                        (click)=\"removeFromCart.emit(part.id)\">remove\n                    </button>\n                </td>\n                <td>{{part.name}}</td>\n            </tr>\n        </table>\n    ",
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush
                    }), 
                    __metadata('design:paramtypes', [])
                ], CartView);
                return CartView;
            }());
            exports_1("CartView", CartView);
        }
    }
});
//# sourceMappingURL=cart-view.js.map