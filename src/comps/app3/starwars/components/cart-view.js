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
var CartView = (function () {
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
            template: "\n        <p [class.hidden]=\"parts.length>0\" class=\"text-muted\">Empty :(</p>\n        <table>\n            <tr *ngFor=\"#part of parts\">\n                <td>\n                    <button style=\"margin-right:10px;margin-bottom:3px;margin-top:3px\"\n                        (click)=\"removeFromCart.next(part.id)\">remove\n                    </button>\n                </td>\n                <td>{{part.name}}</td>\n            </tr>\n        </table>\n    ",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], CartView);
    return CartView;
})();
exports.CartView = CartView;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDMvc3RhcndhcnMvY29tcG9uZW50cy9jYXJ0LXZpZXcudHMiXSwibmFtZXMiOlsiQ2FydFZpZXciLCJDYXJ0Vmlldy5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQThFLGVBRTlFLENBQUMsQ0FGNEY7QUFFN0Y7SUFBQUE7UUFtQmFDLFVBQUtBLEdBQUdBLEVBQUVBLENBQUNBO1FBQ1ZBLG1CQUFjQSxHQUFzQkEsSUFBSUEsbUJBQVlBLEVBQUVBLENBQUNBO0lBRXJFQSxDQUFDQTtJQUhHRDtRQUFDQSxZQUFLQSxFQUFFQTs7T0FBQ0EsMkJBQUtBLFVBQU1BO0lBQ3BCQTtRQUFDQSxhQUFNQSxFQUFFQTs7T0FBQ0Esb0NBQWNBLFVBQXlDQTtJQXBCckVBO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxNQUFNQTtZQUNoQkEsUUFBUUEsRUFBRUEsaWRBWVRBO1lBQ0RBLGVBQWVBLEVBQUNBLDhCQUF1QkEsQ0FBQ0EsTUFBTUE7U0FDakRBLENBQUNBOztpQkFNREE7SUFBREEsZUFBQ0E7QUFBREEsQ0F0QkEsQUFzQkNBLElBQUE7QUFMWSxnQkFBUSxXQUtwQixDQUFBIiwiZmlsZSI6ImNvbXBzL2FwcDMvc3RhcndhcnMvY29tcG9uZW50cy9jYXJ0LXZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneX0gZnJvbSAnYW5ndWxhcjIvY29yZSdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjYXJ0JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPHAgW2NsYXNzLmhpZGRlbl09XCJwYXJ0cy5sZW5ndGg+MFwiIGNsYXNzPVwidGV4dC1tdXRlZFwiPkVtcHR5IDooPC9wPlxyXG4gICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgPHRyICpuZ0Zvcj1cIiNwYXJ0IG9mIHBhcnRzXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT1cIm1hcmdpbi1yaWdodDoxMHB4O21hcmdpbi1ib3R0b206M3B4O21hcmdpbi10b3A6M3B4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInJlbW92ZUZyb21DYXJ0Lm5leHQocGFydC5pZClcIj5yZW1vdmVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3twYXJ0Lm5hbWV9fTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgIGAsXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJ0VmlldyB7XHJcblxyXG4gICAgQElucHV0KCkgcGFydHMgPSBbXTtcclxuICAgIEBPdXRwdXQoKSByZW1vdmVGcm9tQ2FydDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
