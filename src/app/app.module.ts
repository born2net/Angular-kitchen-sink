import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {AppComponent} from './app.component';
import {AppStore} from "angular2-redux-util";
import {applyMiddleware, createStore, compose, combineReducers} from "redux";
import thunkMiddleware from 'redux-thunk';
import 'hammerjs';
import notify from '../reducers/NotifyReducer'
import sample_reducer from '../reducers/SampleReducer'
import parts from "../comps/app3/starwars/reducers/parts-reducer";
import cart from "../comps/app3/starwars/reducers/cart-reducer";
import films from "../comps/app3/starwars/reducers/films-reducer";
import users from "../comps/app3/starwars/reducers/users-reducer";
import appdb from "../reducers/AppdbReducer";
// import {todos} from "./comps/app1/todos/reducers/TodoReducer";
import {MyComp} from "./sample2";
import {LocalStorage} from "../services/LocalStorage";


import {NgReduxModule, DevToolsExtension, NgRedux, select} from 'ng2-redux'
import {MsLibModule} from "ng-mslib/dist/mslib.module";
import {ToastModule} from "ng2-toastr";
import {SampleActions} from "../actions/SampleActions"; //toggle



var providing = [{
    provide: AppStore, useFactory: (ngRedux: NgRedux<any>, devTools: DevToolsExtension) => {
        const reducers = combineReducers({parts, cart, films, users, appdb, notify, sample_reducer});
        const middlewareEnhancer = applyMiddleware(<any>thunkMiddleware);
        const applyDevTools = () => devTools.isEnabled() ? devTools.enhancer : f => f;
        const enhancers: any = compose(middlewareEnhancer, applyDevTools);
        const store = createStore(reducers, enhancers);
        ngRedux.provideStore(store);
        return new AppStore(store);
    }, deps: [NgRedux, DevToolsExtension]
}, {
    provide: "OFFLINE_ENV",
    useValue: false
},  {
    provide: LocalStorage,
    useClass: LocalStorage
},{
    provide: SampleActions,
    useClass: SampleActions
},];

@NgModule({
    declarations: [
        AppComponent,
        MyComp
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        ToastModule,
        MsLibModule.forRoot(),
        NgReduxModule.forRoot(), //toggle
        MaterialModule.forRoot()
    ],
    providers: [providing],
    bootstrap: [AppComponent]
})
export class AppModule {
}

