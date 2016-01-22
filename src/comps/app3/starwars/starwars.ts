///<reference path="../../../../typings/app.d.ts"/>

import {Component, Injector} from "angular2/core";
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {provide} from 'angular2/core';
import thunkMiddleware from "redux-thunk"
import parts from "./reducers/parts-reducer"
import cart from "./reducers/cart-reducer"
import {AppStore} from "angular2-redux";
import {Lib} from "../../../Lib";
import {ShoppingComponent} from "./components/shopping-component";
import {CommBroker} from "../../../services/CommBroker";
import {PartActions} from "./actions/part-actions";
import {CartActions} from "./actions/cart-actions";

@Component({
    selector: 'Starwars',
    directives: [ShoppingComponent],
    template: `<shopping></shopping>`,
    providers: [PartActions, CartActions]
})

export class Starwars {
    private appStore:any;

    constructor(private commBroker:CommBroker) {
        //const createStoreWithMiddleware = compose(applyMiddleware(thunkMiddleware, Lib.LoggerMiddleware), applyDevTools())(createStore);
        //const createStoreWithMiddleware = compose(applyMiddleware(thunkMiddleware, Lib.LoggerMiddleware)())(createStore);
        //const reducers = combineReducers({parts});
        //const reducers = combineReducers({ parts });
        //const applyDevTools = () => 0 ? '' : f => f;

        function logger({ getState }) {
            return (next) => (action) => {
                console.log('will dispatch', action)

                // Call the next dispatch method in the middleware chain.
                let returnValue = next(action)

                console.log('state after dispatch', getState())

                // This will likely be the action itself, unless
                // a middleware further in chain changed it.
                return returnValue
            }
        }

        // Logging middleware (not in use)
        const loggerMiddleware = store => next => action => {
            //console.log("dispatching", action);
            let result = next(action);
            //console.log("next state", store.getState());
            return result
        };

        let createStoreWithMiddleware = applyMiddleware(loggerMiddleware)(createStore)
        let store = createStoreWithMiddleware(parts, cart)
        const reducers = combineReducers({ parts, cart });
        //const appStore = new AppStore(store);
        const appStore = new AppStore(createStoreWithMiddleware(reducers));
        this.commBroker.setService('APPSTORE',appStore);

        //const isDebug = window.location.href.match(/[?&]debug=([^&]+)\b/) && window['devToolsExtension'];
        //const applyDevTools = () => isDebug ? window['devToolsExtension()'] : f => f;
        //const createStoreWithMiddleware = compose(applyMiddleware(thunkMiddleware, Lib.LoggerMiddleware), applyDevTools())(createStore);
        //const reducers = combineReducers({ parts });
        //var store = createStore(parts)


    }
}
