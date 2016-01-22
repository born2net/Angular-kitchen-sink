import * as CartActions from '../actions/cart-actions';
import {ICart} from "../components/shopping-component";

export default (state:ICart[] = [], action:any = {}) => {
    switch (action.type) {
        case CartActions.ADD_TO_CART:
            return [...state, action.id];
        case CartActions.REMOVE_FROM_CART:
            return state.filter(id => id !== action.id);
        default:
            return state;
    }
};
