var CartActions = require('../actions/cart-actions');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (state, action) {
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
};
//# sourceMappingURL=cart-reducer.js.map