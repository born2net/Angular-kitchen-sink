///<reference path="../../../../typings/app.d.ts"/>

import {Component, Injector} from "angular2/core";
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {provide} from 'angular2/core';
import * as thunk from 'redux-thunk';
import parts from "./reducers/parts-reducer"
import cart from "./reducers/cart-reducer"
import films from "./reducers/films-reducer"
import users from "./reducers/users-reducer"
import {AppStore} from "angular2-redux";
import {ShoppingComponent} from "./components/shopping-component";
import {CommBroker} from "../../../services/CommBroker";
import {PartActions} from "./actions/part-actions";
import {CartActions} from "./actions/cart-actions";
import {Lib} from "../../../Lib";
import * as Consts from "./StoreConsts";
import {AdminComponent} from "./components/admin-component";
import {FilmsComponent} from "./components/films-component";
import {UserActions} from "./actions/user-actions";
import {FilmActions} from "./actions/film-actions";

// https://babeljs.io/repl/

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
        const isDebug = window.location.href.match(/[?&]debug=([^&]+)\b/) || true && window.devToolsExtension;
        const applyDevTools = () => isDebug ? window.devToolsExtension() : f => f;
        const createStoreWithMiddleware = compose(applyMiddleware(<any> thunk, Lib.loggerMiddleware),  applyDevTools())(createStore);
        const reducers = combineReducers({parts, cart, films, users});
        const appStore = new AppStore(createStoreWithMiddleware(reducers));
        this.commBroker.setService(Consts.APP_STORE, appStore);
    }
}
