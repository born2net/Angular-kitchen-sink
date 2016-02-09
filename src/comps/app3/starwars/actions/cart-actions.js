var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var angular2_redux_util_1 = require("angular2-redux-util");
exports.ADD_TO_CART = "ADD_TO_CART";
exports.REMOVE_FROM_CART = "REMOVE_FROM_CART";
var CartActions = (function (_super) {
    __extends(CartActions, _super);
    function CartActions() {
        _super.apply(this, arguments);
    }
    CartActions.prototype.addToCart = function (id) {
        return { type: exports.ADD_TO_CART, id: id };
    };
    ;
    CartActions.prototype.removeFromCart = function (id) {
        return { type: exports.REMOVE_FROM_CART, id: id };
    };
    ;
    CartActions = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CartActions);
    return CartActions;
})(angular2_redux_util_1.Actions);
exports.CartActions = CartActions;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDMvc3RhcndhcnMvYWN0aW9ucy9jYXJ0LWFjdGlvbnMudHMiXSwibmFtZXMiOlsiQ2FydEFjdGlvbnMiLCJDYXJ0QWN0aW9ucy5jb25zdHJ1Y3RvciIsIkNhcnRBY3Rpb25zLmFkZFRvQ2FydCIsIkNhcnRBY3Rpb25zLnJlbW92ZUZyb21DYXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxvQ0FBc0IscUJBQXFCLENBQUMsQ0FBQTtBQUUvQixtQkFBVyxHQUFHLGFBQWEsQ0FBQztBQUM1Qix3QkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQztBQUVuRDtJQUNpQ0EsK0JBQU9BO0lBRHhDQTtRQUNpQ0MsOEJBQU9BO0lBVXhDQSxDQUFDQTtJQVJHRCwrQkFBU0EsR0FBVEEsVUFBVUEsRUFBRUE7UUFDUkUsTUFBTUEsQ0FBQ0EsRUFBQ0EsSUFBSUEsRUFBRUEsbUJBQVdBLEVBQUVBLElBQUFBLEVBQUVBLEVBQUNBLENBQUNBO0lBQ25DQSxDQUFDQTs7SUFFREYsb0NBQWNBLEdBQWRBLFVBQWVBLEVBQUVBO1FBQ2JHLE1BQU1BLENBQUNBLEVBQUNBLElBQUlBLEVBQUVBLHdCQUFnQkEsRUFBRUEsSUFBQUEsRUFBRUEsRUFBQ0EsQ0FBQ0E7SUFDeENBLENBQUNBOztJQVRMSDtRQUFDQSxpQkFBVUEsRUFBRUE7O29CQVdaQTtJQUFEQSxrQkFBQ0E7QUFBREEsQ0FYQSxBQVdDQSxFQVZnQyw2QkFBTyxFQVV2QztBQVZZLG1CQUFXLGNBVXZCLENBQUEiLCJmaWxlIjoiY29tcHMvYXBwMy9zdGFyd2Fycy9hY3Rpb25zL2NhcnQtYWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtBY3Rpb25zfSBmcm9tIFwiYW5ndWxhcjItcmVkdXgtdXRpbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9UT19DQVJUID0gXCJBRERfVE9fQ0FSVFwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZST01fQ0FSVCA9IFwiUkVNT1ZFX0ZST01fQ0FSVFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2FydEFjdGlvbnMgZXh0ZW5kcyBBY3Rpb25zIHtcclxuXHJcbiAgICBhZGRUb0NhcnQoaWQpIHtcclxuICAgICAgICByZXR1cm4ge3R5cGU6IEFERF9UT19DQVJULCBpZH07XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbW92ZUZyb21DYXJ0KGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHt0eXBlOiBSRU1PVkVfRlJPTV9DQVJULCBpZH07XHJcbiAgICB9O1xyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
