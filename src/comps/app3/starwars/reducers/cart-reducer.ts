import * as CartActions from '../actions/cart-actions';

export default (state = [], action:any = {}) => {
    switch (action.type) {
        case CartActions.ADD_TO_CART:
            return [...state, action.id];
        case CartActions.REMOVE_FROM_CART:
            return state.filter(id => id !== action.id);
        default:
            return state;
    }
};
