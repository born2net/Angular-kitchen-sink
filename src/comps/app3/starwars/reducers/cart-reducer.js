System.register(['../actions/cart-actions'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CartActions;
    return {
        setters:[
            function (CartActions_1) {
                CartActions = CartActions_1;
            }],
        execute: function() {
            exports_1("default",function (state, action) {
                if (state === void 0) { state = []; }
                if (action === void 0) { action = {}; }
                switch (action.type) {
                    case CartActions.ADD_TO_CART:
                        return state.concat([action.id]);
                    case CartActions.REMOVE_FROM_CART:
                        return state.filter(function (id) { return id !== action.id; });
                    default:
                        return state;
                }
            });
        }
    }
});
//# sourceMappingURL=cart-reducer.js.map