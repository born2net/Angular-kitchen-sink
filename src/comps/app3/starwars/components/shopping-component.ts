import {Component, Inject} from 'angular2/core'
import {AppStore} from "angular2-redux";
import {CartActions} from "../actions/cart-actions";
import {PartActions} from "../actions/part-actions";
import {PartsView} from "../components/parts-view";
import {CartView} from "../components/cart-view";
import {AddPartsView} from "./add-part-view";
import {createSelector} from 'reselect';
import {CommBroker} from "../../../../services/CommBroker";

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
    private appStore;
    private addPart;
    private addPartToCart;
    private removePartFromCart;

    constructor(commBroker:CommBroker, partActions:PartActions, cartActions:CartActions) {
        this.appStore = commBroker.getService('APPSTORE');
        this.addPart = partActions.createDispatcher(this.appStore, partActions.addPart);
        this.addPartToCart = cartActions.createDispatcher(this.appStore, cartActions.addToCart);
        this.removePartFromCart = cartActions.createDispatcher(this.appStore, cartActions.removeFromCart);

        this.appStore.subscribe((state:IAppStore) => {
            this.parts = state.parts;
            this.partsInCart = partsInCartSelector(state);
        });
        ShoppingComponent.createInitialSetOfParts(this.appStore, partActions);
    }

    private static createInitialSetOfParts(appStore, partActions) {
        appStore.dispatch(partActions.addPart("Bumper"));
        appStore.dispatch(partActions.addPart("MP3 Player"));
        appStore.dispatch(partActions.addPart("Mirror"));
        appStore.dispatch(partActions.addPart("Hood"));
    }
}