///<reference path="../../../../typings/app.d.ts"/>

import {Component, Injector} from "angular2/core";
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {provide} from 'angular2/core';
import thunkMiddleware from "redux-thunk"
import parts from "./reducers/parts-reducer"
import cart from "./reducers/cart-reducer"
import {AppStore} from "angular2-redux";
import {ShoppingComponent} from "./components/shopping-component";
import {CommBroker} from "../../../services/CommBroker";
import {PartActions} from "./actions/part-actions";
import {CartActions} from "./actions/cart-actions";
import {Lib} from "../../../Lib";

// https://babeljs.io/repl/

@Component({
    selector: 'Starwars',
    directives: [ShoppingComponent],
    template: `<shopping></shopping>`,
    providers: [PartActions, CartActions]
})

export class Starwars {
    constructor(private commBroker:CommBroker) {
        let createStoreWithMiddleware = applyMiddleware(Lib.loggerMiddleware)(createStore);
        const reducers = combineReducers({ parts, cart });
        const appStore = new AppStore(createStoreWithMiddleware(reducers));
        this.commBroker.setService('APPSTORE',appStore);
    }
}
