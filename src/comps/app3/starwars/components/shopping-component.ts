import {Component, Inject} from 'angular2/core'
import {CartActions} from "../actions/cart-actions";
import {PartActions} from "../actions/part-actions";
import {PartsView} from "../components/parts-view";
import {CartView} from "../components/cart-view";
import {AddPartsView} from "./add-part-view";
import {createSelector} from 'reselect';
import {AppStore} from "angular2-redux-util";

// select the parts in cart
const partsInCartSelector = createSelector((state:any)=>state.cart, state=>state.parts, (cart, parts) => {
    const partsById = parts.reduce((map, part:any) => (map[part.id] = part) && map, {});
    return cart.map(id => partsById[id]);
});

export interface ICart {
    cart:string[]
}
export interface IPart {
    id:string,
    name:string
}
export interface IAppStore {
    cart:ICart,
    parts: IPart[]

}

@Component({
    selector: 'shopping',
    template: `
        <h3>Parts</h3>
        <add-part (add)="addPart($event)"></add-part>
        <parts [parts]="parts" [partsInCart]="partsInCart" (addToCart)="addPartToCart($event)"></parts>
        <hr/>
        <h3>Cart</h3>
        <cart [parts]="partsInCart" (removeFromCart)="removePartFromCart($event)"></cart>
    `,
    directives: [PartsView, CartView, AddPartsView]
})

export class ShoppingComponent {
    private parts = [];
    private partsInCart = [];
    private addPart;
    private addPartToCart;
    private removePartFromCart;

    constructor(private appStore:AppStore, partActions:PartActions, cartActions:CartActions) {
        this.addPart = partActions.createDispatcher(partActions.addPart, this.appStore);
        this.addPartToCart = cartActions.createDispatcher(cartActions.addToCart, this.appStore);
        this.removePartFromCart = cartActions.createDispatcher(cartActions.removeFromCart, this.appStore);

        this.appStore.subscribe((state:IAppStore) => {
            this.parts = state.parts;
            this.partsInCart = partsInCartSelector(state);
        });
        ShoppingComponent.createInitialSetOfParts(this.appStore, partActions);
    }

    private static createInitialSetOfParts(appStore, partActions) {
        appStore.dispatch(partActions.addPart("Lightsaber"));
        appStore.dispatch(partActions.addPart("X-wing diecast"));
    }
}