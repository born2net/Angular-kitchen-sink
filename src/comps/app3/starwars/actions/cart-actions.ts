import {Injectable} from "angular2/core";
import {Actions} from "angular2-redux-util";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

@Injectable()
export class CartActions extends Actions {

    addToCart(id) {
        return {type: ADD_TO_CART, id};
    };

    removeFromCart(id) {
        return {type: REMOVE_FROM_CART, id};
    };

}
