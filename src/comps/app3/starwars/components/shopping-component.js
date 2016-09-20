System.register(['@angular/core', "../actions/cart-actions", "../actions/part-actions", 'reselect', "angular2-redux-util"], function(exports_1, context_1) {
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
    var core_1, cart_actions_1, part_actions_1, reselect_1, angular2_redux_util_1;
    var partsInCartSelector, ShoppingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cart_actions_1_1) {
                cart_actions_1 = cart_actions_1_1;
            },
            function (part_actions_1_1) {
                part_actions_1 = part_actions_1_1;
            },
            function (reselect_1_1) {
                reselect_1 = reselect_1_1;
            },
            function (angular2_redux_util_1_1) {
                angular2_redux_util_1 = angular2_redux_util_1_1;
            }],
        execute: function() {
            partsInCartSelector = reselect_1.createSelector(function (state) { return state.cart; }, function (state) { return state.parts; }, function (cart, parts) {
                var partsById = parts.reduce(function (map, part) { return (map[part.id] = part) && map; }, {});
                return cart.map(function (id) { return partsById[id]; });
            });
            ShoppingComponent = (function () {
                function ShoppingComponent(appStore, partActions, cartActions) {
                    var _this = this;
                    this.appStore = appStore;
                    this.parts = [];
                    this.partsInCart = [];
                    this.addPart = partActions.createDispatcher(partActions.addPart, this.appStore);
                    this.addPartToCart = cartActions.createDispatcher(cartActions.addToCart, this.appStore);
                    this.removePartFromCart = cartActions.createDispatcher(cartActions.removeFromCart, this.appStore);
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
                        template: "\n        <h3>Parts</h3>\n        <add-part (add)=\"addPart($event)\"></add-part>\n        <parts [parts]=\"parts\" [partsInCart]=\"partsInCart\" (addToCart)=\"addPartToCart($event)\"></parts>\n        <hr/>\n        <h3>Cart</h3>\n        <cart [parts]=\"partsInCart\" (removeFromCart)=\"removePartFromCart($event)\"></cart>\n    "
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof angular2_redux_util_1.AppStore !== 'undefined' && angular2_redux_util_1.AppStore) === 'function' && _a) || Object, part_actions_1.PartActions, cart_actions_1.CartActions])
                ], ShoppingComponent);
                return ShoppingComponent;
                var _a;
            }());
            exports_1("ShoppingComponent", ShoppingComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDMvc3RhcndhcnMvY29tcG9uZW50cy9zaG9wcGluZy1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztRQVVNLG1CQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUFuQixtQkFBbUIsR0FBRyx5QkFBYyxDQUFDLFVBQUMsS0FBUyxJQUFHLE9BQUEsS0FBSyxDQUFDLElBQUksRUFBVixDQUFVLEVBQUUsVUFBQSxLQUFLLElBQUUsT0FBQSxLQUFLLENBQUMsS0FBSyxFQUFYLENBQVcsRUFBRSxVQUFDLElBQUksRUFBRSxLQUFLO2dCQUNoRyxJQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBRyxFQUFFLElBQVEsSUFBSyxPQUFBLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQTVCLENBQTRCLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ3BGLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFiLENBQWEsQ0FBQyxDQUFDO1lBQ3pDLENBQUMsQ0FBQyxDQUFDO1lBMkJIO2dCQU9JLDJCQUFvQixRQUFpQixFQUFFLFdBQXVCLEVBQUUsV0FBdUI7b0JBUDNGLGlCQXVCQztvQkFoQnVCLGFBQVEsR0FBUixRQUFRLENBQVM7b0JBTjdCLFVBQUssR0FBRyxFQUFFLENBQUM7b0JBQ1gsZ0JBQVcsR0FBRyxFQUFFLENBQUM7b0JBTXJCLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNoRixJQUFJLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDeEYsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFFbEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFlO3dCQUNwQyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7d0JBQ3pCLEtBQUksQ0FBQyxXQUFXLEdBQUcsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2xELENBQUMsQ0FBQyxDQUFDO29CQUNILGlCQUFpQixDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBQzFFLENBQUM7Z0JBRWMseUNBQXVCLEdBQXRDLFVBQXVDLFFBQVEsRUFBRSxXQUFXO29CQUN4RCxRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztvQkFDckQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztnQkFDN0QsQ0FBQztnQkFsQ0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsVUFBVTt3QkFDcEIsUUFBUSxFQUFFLDZVQU9UO3FCQUNKLENBQUM7O3FDQUFBO2dCQXlCRix3QkFBQzs7WUFBRCxDQXZCQSxBQXVCQyxJQUFBO1lBdkJELGlEQXVCQyxDQUFBIiwiZmlsZSI6ImNvbXBzL2FwcDMvc3RhcndhcnMvY29tcG9uZW50cy9zaG9wcGluZy1jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQge0NhcnRBY3Rpb25zfSBmcm9tIFwiLi4vYWN0aW9ucy9jYXJ0LWFjdGlvbnNcIjtcclxuaW1wb3J0IHtQYXJ0QWN0aW9uc30gZnJvbSBcIi4uL2FjdGlvbnMvcGFydC1hY3Rpb25zXCI7XHJcbmltcG9ydCB7UGFydHNWaWV3fSBmcm9tIFwiLi4vY29tcG9uZW50cy9wYXJ0cy12aWV3XCI7XHJcbmltcG9ydCB7Q2FydFZpZXd9IGZyb20gXCIuLi9jb21wb25lbnRzL2NhcnQtdmlld1wiO1xyXG5pbXBvcnQge0FkZFBhcnRzVmlld30gZnJvbSBcIi4vYWRkLXBhcnQtdmlld1wiO1xyXG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XHJcbmltcG9ydCB7QXBwU3RvcmV9IGZyb20gXCJhbmd1bGFyMi1yZWR1eC11dGlsXCI7XHJcblxyXG4vLyBzZWxlY3QgdGhlIHBhcnRzIGluIGNhcnRcclxuY29uc3QgcGFydHNJbkNhcnRTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKChzdGF0ZTphbnkpPT5zdGF0ZS5jYXJ0LCBzdGF0ZT0+c3RhdGUucGFydHMsIChjYXJ0LCBwYXJ0cykgPT4ge1xyXG4gICAgY29uc3QgcGFydHNCeUlkID0gcGFydHMucmVkdWNlKChtYXAsIHBhcnQ6YW55KSA9PiAobWFwW3BhcnQuaWRdID0gcGFydCkgJiYgbWFwLCB7fSk7XHJcbiAgICByZXR1cm4gY2FydC5tYXAoaWQgPT4gcGFydHNCeUlkW2lkXSk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2FydCB7XHJcbiAgICBjYXJ0OnN0cmluZ1tdXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJUGFydCB7XHJcbiAgICBpZDpzdHJpbmcsXHJcbiAgICBuYW1lOnN0cmluZ1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFwcFN0b3JlIHtcclxuICAgIGNhcnQ6SUNhcnQsXHJcbiAgICBwYXJ0czogSVBhcnRbXVxyXG5cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3Nob3BwaW5nJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGgzPlBhcnRzPC9oMz5cclxuICAgICAgICA8YWRkLXBhcnQgKGFkZCk9XCJhZGRQYXJ0KCRldmVudClcIj48L2FkZC1wYXJ0PlxyXG4gICAgICAgIDxwYXJ0cyBbcGFydHNdPVwicGFydHNcIiBbcGFydHNJbkNhcnRdPVwicGFydHNJbkNhcnRcIiAoYWRkVG9DYXJ0KT1cImFkZFBhcnRUb0NhcnQoJGV2ZW50KVwiPjwvcGFydHM+XHJcbiAgICAgICAgPGhyLz5cclxuICAgICAgICA8aDM+Q2FydDwvaDM+XHJcbiAgICAgICAgPGNhcnQgW3BhcnRzXT1cInBhcnRzSW5DYXJ0XCIgKHJlbW92ZUZyb21DYXJ0KT1cInJlbW92ZVBhcnRGcm9tQ2FydCgkZXZlbnQpXCI+PC9jYXJ0PlxyXG4gICAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNob3BwaW5nQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgcGFydHMgPSBbXTtcclxuICAgIHByaXZhdGUgcGFydHNJbkNhcnQgPSBbXTtcclxuICAgIHByaXZhdGUgYWRkUGFydDtcclxuICAgIHByaXZhdGUgYWRkUGFydFRvQ2FydDtcclxuICAgIHByaXZhdGUgcmVtb3ZlUGFydEZyb21DYXJ0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwU3RvcmU6QXBwU3RvcmUsIHBhcnRBY3Rpb25zOlBhcnRBY3Rpb25zLCBjYXJ0QWN0aW9uczpDYXJ0QWN0aW9ucykge1xyXG4gICAgICAgIHRoaXMuYWRkUGFydCA9IHBhcnRBY3Rpb25zLmNyZWF0ZURpc3BhdGNoZXIocGFydEFjdGlvbnMuYWRkUGFydCwgdGhpcy5hcHBTdG9yZSk7XHJcbiAgICAgICAgdGhpcy5hZGRQYXJ0VG9DYXJ0ID0gY2FydEFjdGlvbnMuY3JlYXRlRGlzcGF0Y2hlcihjYXJ0QWN0aW9ucy5hZGRUb0NhcnQsIHRoaXMuYXBwU3RvcmUpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlUGFydEZyb21DYXJ0ID0gY2FydEFjdGlvbnMuY3JlYXRlRGlzcGF0Y2hlcihjYXJ0QWN0aW9ucy5yZW1vdmVGcm9tQ2FydCwgdGhpcy5hcHBTdG9yZSk7XHJcblxyXG4gICAgICAgIHRoaXMuYXBwU3RvcmUuc3Vic2NyaWJlKChzdGF0ZTpJQXBwU3RvcmUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0cyA9IHN0YXRlLnBhcnRzO1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRzSW5DYXJ0ID0gcGFydHNJbkNhcnRTZWxlY3RvcihzdGF0ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgU2hvcHBpbmdDb21wb25lbnQuY3JlYXRlSW5pdGlhbFNldE9mUGFydHModGhpcy5hcHBTdG9yZSwgcGFydEFjdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGNyZWF0ZUluaXRpYWxTZXRPZlBhcnRzKGFwcFN0b3JlLCBwYXJ0QWN0aW9ucykge1xyXG4gICAgICAgIGFwcFN0b3JlLmRpc3BhdGNoKHBhcnRBY3Rpb25zLmFkZFBhcnQoXCJMaWdodHNhYmVyXCIpKTtcclxuICAgICAgICBhcHBTdG9yZS5kaXNwYXRjaChwYXJ0QWN0aW9ucy5hZGRQYXJ0KFwiWC13aW5nIGRpZWNhc3RcIikpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
