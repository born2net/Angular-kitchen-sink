///<reference path="../../../../typings/app.d.ts"/>

import {Component} from "angular2/core";
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import * as thunk from 'redux-thunk';
import parts from "./reducers/parts-reducer"
import cart from "./reducers/cart-reducer"
import films from "./reducers/films-reducer"
import users from "./reducers/users-reducer"
import {AppStore, LoggerMiddleware} from "angular2-redux-util";
import {ShoppingComponent} from "./components/shopping-component";
import {CommBroker} from "../../../services/CommBroker";
import {PartActions} from "./actions/part-actions";
import {CartActions} from "./actions/cart-actions";
import * as Consts from "./StoreConsts";
import {AdminComponent} from "./components/admin-component";
import {FilmsComponent} from "./components/films-component";
import {UserActions} from "./actions/user-actions";
import {FilmActions} from "./actions/film-actions";

const appStoreFactory = () => {
    const reducers = combineReducers({parts, cart, films, users});
    const middlewareEnhancer = applyMiddleware(<any>thunk, LoggerMiddleware); // to enable logger
    const isDebug = window.devToolsExtension;
    const applyDevTools = () => isDebug ? window.devToolsExtension() : f => f;
    const enhancers = compose(middlewareEnhancer, applyDevTools());
    const createStoreWithEnhancers = enhancers(createStore);
    const reduxAppStore = createStoreWithEnhancers(reducers);
    return new AppStore(reduxAppStore);
};

@Component({
    selector: 'Starwars',
    directives: [ShoppingComponent, AdminComponent, FilmsComponent],
    template: ` <div class="row">
            <div class="col-md-6">
                <admin></admin>
            </div>
            <div class="col-md-6">
                <shopping></shopping>
                <hr/>
                <films-component></films-component>
            </div>
        </div>`,
    providers: [PartActions, CartActions, PartActions, UserActions, FilmActions]
})

export class Starwars {
    constructor(private commBroker:CommBroker) {
        var reduxAppStore = appStoreFactory();
        this.commBroker.setService(Consts.APP_STORE, reduxAppStore);
    }
}
