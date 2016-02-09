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
var angular2_redux_util_1 = require("angular2-redux-util");
var partsInCartSelector = reselect_1.createSelector(function (state) { return state.cart; }, function (state) { return state.parts; }, function (cart, parts) {
    var partsById = parts.reduce(function (map, part) { return (map[part.id] = part) && map; }, {});
    return cart.map(function (id) { return partsById[id]; });
});
var ShoppingComponent = (function () {
    function ShoppingComponent(appStore, partActions, cartActions) {
        var _this = this;
        this.appStore = appStore;
        this.parts = [];
        this.partsInCart = [];
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
        appStore.dispatch(partActions.addPart("Lightsaber"));
        appStore.dispatch(partActions.addPart("X-wing diecast"));
    };
    ShoppingComponent = __decorate([
        core_1.Component({
            selector: 'shopping',
            template: "\n        <h3>Parts</h3>\n        <add-part (add)=\"addPart($event)\"></add-part>\n        <parts [parts]=\"parts\" [partsInCart]=\"partsInCart\" (addToCart)=\"addPartToCart($event)\"></parts>\n        <hr/>\n        <h3>Cart</h3>\n        <cart [parts]=\"partsInCart\" (removeFromCart)=\"removePartFromCart($event)\"></cart>\n    ",
            directives: [parts_view_1.PartsView, cart_view_1.CartView, add_part_view_1.AddPartsView]
        }), 
        __metadata('design:paramtypes', [angular2_redux_util_1.AppStore, part_actions_1.PartActions, cart_actions_1.CartActions])
    ], ShoppingComponent);
    return ShoppingComponent;
})();
exports.ShoppingComponent = ShoppingComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDMvc3RhcndhcnMvY29tcG9uZW50cy9zaG9wcGluZy1jb21wb25lbnQudHMiXSwibmFtZXMiOlsiU2hvcHBpbmdDb21wb25lbnQiLCJTaG9wcGluZ0NvbXBvbmVudC5jb25zdHJ1Y3RvciIsIlNob3BwaW5nQ29tcG9uZW50LmNyZWF0ZUluaXRpYWxTZXRPZlBhcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFDaEMsQ0FBQyxDQUQ4QztBQUMvQyw2QkFBMEIseUJBQXlCLENBQUMsQ0FBQTtBQUNwRCw2QkFBMEIseUJBQXlCLENBQUMsQ0FBQTtBQUNwRCwyQkFBd0IsMEJBQTBCLENBQUMsQ0FBQTtBQUNuRCwwQkFBdUIseUJBQXlCLENBQUMsQ0FBQTtBQUNqRCw4QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3Qyx5QkFBNkIsVUFBVSxDQUFDLENBQUE7QUFDeEMsb0NBQXVCLHFCQUFxQixDQUFDLENBQUE7QUFHN0MsSUFBTSxtQkFBbUIsR0FBRyx5QkFBYyxDQUFDLFVBQUMsS0FBUyxJQUFHLE9BQUEsS0FBSyxDQUFDLElBQUksRUFBVixDQUFVLEVBQUUsVUFBQSxLQUFLLElBQUUsT0FBQSxLQUFLLENBQUMsS0FBSyxFQUFYLENBQVcsRUFBRSxVQUFDLElBQUksRUFBRSxLQUFLO0lBQ2hHLElBQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFHLEVBQUUsSUFBUSxJQUFLLE9BQUEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBNUIsQ0FBNEIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNwRixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBYixDQUFhLENBQUMsQ0FBQztBQUN6QyxDQUFDLENBQUMsQ0FBQztBQWVIO0lBb0JJQSwyQkFBb0JBLFFBQWlCQSxFQUFFQSxXQUF1QkEsRUFBRUEsV0FBdUJBO1FBcEIzRkMsaUJBb0NDQTtRQWhCdUJBLGFBQVFBLEdBQVJBLFFBQVFBLENBQVNBO1FBTjdCQSxVQUFLQSxHQUFHQSxFQUFFQSxDQUFDQTtRQUNYQSxnQkFBV0EsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFNckJBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLFdBQVdBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsRUFBRUEsV0FBV0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7UUFDaEZBLElBQUlBLENBQUNBLGFBQWFBLEdBQUdBLFdBQVdBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsRUFBRUEsV0FBV0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7UUFDeEZBLElBQUlBLENBQUNBLGtCQUFrQkEsR0FBR0EsV0FBV0EsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxFQUFFQSxXQUFXQSxDQUFDQSxjQUFjQSxDQUFDQSxDQUFDQTtRQUVsR0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsVUFBQ0EsS0FBZUE7WUFDcENBLEtBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEtBQUtBLENBQUNBLEtBQUtBLENBQUNBO1lBQ3pCQSxLQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxtQkFBbUJBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1FBQ2xEQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNIQSxpQkFBaUJBLENBQUNBLHVCQUF1QkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsRUFBRUEsV0FBV0EsQ0FBQ0EsQ0FBQ0E7SUFDMUVBLENBQUNBO0lBRWNELHlDQUF1QkEsR0FBdENBLFVBQXVDQSxRQUFRQSxFQUFFQSxXQUFXQTtRQUN4REUsUUFBUUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDckRBLFFBQVFBLENBQUNBLFFBQVFBLENBQUNBLFdBQVdBLENBQUNBLE9BQU9BLENBQUNBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDN0RBLENBQUNBO0lBbkNMRjtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsVUFBVUE7WUFDcEJBLFFBQVFBLEVBQUVBLDZVQU9UQTtZQUNEQSxVQUFVQSxFQUFFQSxDQUFDQSxzQkFBU0EsRUFBRUEsb0JBQVFBLEVBQUVBLDRCQUFZQSxDQUFDQTtTQUNsREEsQ0FBQ0E7OzBCQXlCREE7SUFBREEsd0JBQUNBO0FBQURBLENBcENBLEFBb0NDQSxJQUFBO0FBdkJZLHlCQUFpQixvQkF1QjdCLENBQUEiLCJmaWxlIjoiY29tcHMvYXBwMy9zdGFyd2Fycy9jb21wb25lbnRzL3Nob3BwaW5nLWNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3R9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnXHJcbmltcG9ydCB7Q2FydEFjdGlvbnN9IGZyb20gXCIuLi9hY3Rpb25zL2NhcnQtYWN0aW9uc1wiO1xyXG5pbXBvcnQge1BhcnRBY3Rpb25zfSBmcm9tIFwiLi4vYWN0aW9ucy9wYXJ0LWFjdGlvbnNcIjtcclxuaW1wb3J0IHtQYXJ0c1ZpZXd9IGZyb20gXCIuLi9jb21wb25lbnRzL3BhcnRzLXZpZXdcIjtcclxuaW1wb3J0IHtDYXJ0Vmlld30gZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FydC12aWV3XCI7XHJcbmltcG9ydCB7QWRkUGFydHNWaWV3fSBmcm9tIFwiLi9hZGQtcGFydC12aWV3XCI7XHJcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcclxuaW1wb3J0IHtBcHBTdG9yZX0gZnJvbSBcImFuZ3VsYXIyLXJlZHV4LXV0aWxcIjtcclxuXHJcbi8vIHNlbGVjdCB0aGUgcGFydHMgaW4gY2FydFxyXG5jb25zdCBwYXJ0c0luQ2FydFNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoKHN0YXRlOmFueSk9PnN0YXRlLmNhcnQsIHN0YXRlPT5zdGF0ZS5wYXJ0cywgKGNhcnQsIHBhcnRzKSA9PiB7XHJcbiAgICBjb25zdCBwYXJ0c0J5SWQgPSBwYXJ0cy5yZWR1Y2UoKG1hcCwgcGFydDphbnkpID0+IChtYXBbcGFydC5pZF0gPSBwYXJ0KSAmJiBtYXAsIHt9KTtcclxuICAgIHJldHVybiBjYXJ0Lm1hcChpZCA9PiBwYXJ0c0J5SWRbaWRdKTtcclxufSk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDYXJ0IHtcclxuICAgIGNhcnQ6c3RyaW5nW11cclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJ0IHtcclxuICAgIGlkOnN0cmluZyxcclxuICAgIG5hbWU6c3RyaW5nXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJQXBwU3RvcmUge1xyXG4gICAgY2FydDpJQ2FydCxcclxuICAgIHBhcnRzOiBJUGFydFtdXHJcblxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc2hvcHBpbmcnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8aDM+UGFydHM8L2gzPlxyXG4gICAgICAgIDxhZGQtcGFydCAoYWRkKT1cImFkZFBhcnQoJGV2ZW50KVwiPjwvYWRkLXBhcnQ+XHJcbiAgICAgICAgPHBhcnRzIFtwYXJ0c109XCJwYXJ0c1wiIFtwYXJ0c0luQ2FydF09XCJwYXJ0c0luQ2FydFwiIChhZGRUb0NhcnQpPVwiYWRkUGFydFRvQ2FydCgkZXZlbnQpXCI+PC9wYXJ0cz5cclxuICAgICAgICA8aHIvPlxyXG4gICAgICAgIDxoMz5DYXJ0PC9oMz5cclxuICAgICAgICA8Y2FydCBbcGFydHNdPVwicGFydHNJbkNhcnRcIiAocmVtb3ZlRnJvbUNhcnQpPVwicmVtb3ZlUGFydEZyb21DYXJ0KCRldmVudClcIj48L2NhcnQ+XHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogW1BhcnRzVmlldywgQ2FydFZpZXcsIEFkZFBhcnRzVmlld11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0NvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIHBhcnRzID0gW107XHJcbiAgICBwcml2YXRlIHBhcnRzSW5DYXJ0ID0gW107XHJcbiAgICBwcml2YXRlIGFkZFBhcnQ7XHJcbiAgICBwcml2YXRlIGFkZFBhcnRUb0NhcnQ7XHJcbiAgICBwcml2YXRlIHJlbW92ZVBhcnRGcm9tQ2FydDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcFN0b3JlOkFwcFN0b3JlLCBwYXJ0QWN0aW9uczpQYXJ0QWN0aW9ucywgY2FydEFjdGlvbnM6Q2FydEFjdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmFkZFBhcnQgPSBwYXJ0QWN0aW9ucy5jcmVhdGVEaXNwYXRjaGVyKHRoaXMuYXBwU3RvcmUsIHBhcnRBY3Rpb25zLmFkZFBhcnQpO1xyXG4gICAgICAgIHRoaXMuYWRkUGFydFRvQ2FydCA9IGNhcnRBY3Rpb25zLmNyZWF0ZURpc3BhdGNoZXIodGhpcy5hcHBTdG9yZSwgY2FydEFjdGlvbnMuYWRkVG9DYXJ0KTtcclxuICAgICAgICB0aGlzLnJlbW92ZVBhcnRGcm9tQ2FydCA9IGNhcnRBY3Rpb25zLmNyZWF0ZURpc3BhdGNoZXIodGhpcy5hcHBTdG9yZSwgY2FydEFjdGlvbnMucmVtb3ZlRnJvbUNhcnQpO1xyXG5cclxuICAgICAgICB0aGlzLmFwcFN0b3JlLnN1YnNjcmliZSgoc3RhdGU6SUFwcFN0b3JlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGFydHMgPSBzdGF0ZS5wYXJ0cztcclxuICAgICAgICAgICAgdGhpcy5wYXJ0c0luQ2FydCA9IHBhcnRzSW5DYXJ0U2VsZWN0b3Ioc3RhdGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFNob3BwaW5nQ29tcG9uZW50LmNyZWF0ZUluaXRpYWxTZXRPZlBhcnRzKHRoaXMuYXBwU3RvcmUsIHBhcnRBY3Rpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBjcmVhdGVJbml0aWFsU2V0T2ZQYXJ0cyhhcHBTdG9yZSwgcGFydEFjdGlvbnMpIHtcclxuICAgICAgICBhcHBTdG9yZS5kaXNwYXRjaChwYXJ0QWN0aW9ucy5hZGRQYXJ0KFwiTGlnaHRzYWJlclwiKSk7XHJcbiAgICAgICAgYXBwU3RvcmUuZGlzcGF0Y2gocGFydEFjdGlvbnMuYWRkUGFydChcIlgtd2luZyBkaWVjYXN0XCIpKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
