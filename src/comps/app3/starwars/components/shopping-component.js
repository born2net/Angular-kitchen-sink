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
var cart_actions_1 = require("../actions/cart-actions");
var part_actions_1 = require("../actions/part-actions");
var parts_view_1 = require("../components/parts-view");
var cart_view_1 = require("../components/cart-view");
var add_part_view_1 = require("./add-part-view");
var reselect_1 = require('reselect');
var CommBroker_1 = require("../../../../services/CommBroker");
var partsInCartSelector = reselect_1.createSelector(function (state) { return state.cart; }, function (state) { return state.parts; }, function (cart, parts) {
    var partsById = parts.reduce(function (map, part) { return (map[part.id] = part) && map; }, {});
    return cart.map(function (id) { return partsById[id]; });
});
var ShoppingComponent = (function () {
    function ShoppingComponent(commBroker, partActions, cartActions) {
        var _this = this;
        this.parts = [];
        this.partsInCart = [];
        this.appStore = commBroker.getService('APPSTORE');
        this.addPart = partActions.createDispatcher(this.appStore, partActions.addPart);
        this.addPartToCart = cartActions.createDispatcher(this.appStore, cartActions.addToCart);
        this.removePartFromCart = cartActions.createDispatcher(this.appStore, cartActions.removeFromCart);
        this.appStore.subscribe(function (state) {
            _this.parts = state.parts;
            _this.partsInCart = partsInCartSelector(state);
        });
        ShoppingComponent.createInitialSetOfParts(this.appStore, partActions);
    }
    ShoppingComponent.createInitialSetOfParts = function (appStore, partActions) {
        appStore.dispatch(partActions.addPart("Bumper"));
    };
    ShoppingComponent = __decorate([
        core_1.Component({
            selector: 'shopping',
            template: "\n        <h3>Parts</h3>\n        <add-part (add)=\"addPart($event)\"></add-part>\n        <parts [parts]=\"parts\" [partsInCart]=\"partsInCart\" (addToCart)=\"addPartToCart($event)\"></parts>\n        <hr/>\n        <h3>Cart</h3>\n        <cart [parts]=\"partsInCart\" (removeFromCart)=\"removePartFromCart($event)\"></cart>\n    ",
            directives: [parts_view_1.PartsView, cart_view_1.CartView, add_part_view_1.AddPartsView]
        }), 
        __metadata('design:paramtypes', [CommBroker_1.CommBroker, part_actions_1.PartActions, cart_actions_1.CartActions])
    ], ShoppingComponent);
    return ShoppingComponent;
})();
exports.ShoppingComponent = ShoppingComponent;
//# sourceMappingURL=shopping-component.js.map