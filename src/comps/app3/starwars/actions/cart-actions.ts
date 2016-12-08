import {Injectable} from "@angular/core";
import {Actions, AppStore} from "angular2-redux-util";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

@Injectable()
export class CartActions extends Actions {
    constructor(i_appStore: AppStore) {
        super(i_appStore);

    }

    addToCart(id) {
        return {type: ADD_TO_CART, id};
    };

    removeFromCart(id) {
        return {type: REMOVE_FROM_CART, id};
    };

}
