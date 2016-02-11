///<reference path="../typings/app.d.ts"/>

//import {enableProdMode} from 'angular2/core';
// import 'zone.js/dist/zone.min.js';
import "reflect-metadata";
import 'twbs/bootstrap/css/bootstrap.css!';
import './styles/style.css!';
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS, JSONP_PROVIDERS} from "angular2/http";
import {App1} from '../src/comps/app1/App1';
import {App2} from '../src/comps/app2/App2';
import {App3} from '../src/comps/app3/App3';
import {Component, provide, ViewEncapsulation} from 'angular2/core';
import {EntryPanel} from '../src/comps/entry/EntryPanel';
import {AppManager} from '../src/comps/appmanager/AppManager';
import {CommBroker} from '../src/services/CommBroker';
import {Filemenu} from "../src/comps/filemenu/Filemenu";
import {FilemenuItem} from "../src/comps/filemenu/FilemenuItem";
import {Logo} from "./comps/logo/Logo";
import {Footer} from "./comps/footer/Footer";
import {Consts} from "../src/Conts";
import {StyleService} from "./styles/StyleService";
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, AsyncRoute} from 'angular2/router';
import {LocationStrategy, RouteParams, RouterLink, HashLocationStrategy, RouteConfig} from 'angular2/router';
import {AppStore} from "angular2-redux-util";
import {Lib} from "./Lib";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import parts from "./comps/app3/starwars/reducers/parts-reducer"
import cart from "./comps/app3/starwars/reducers/cart-reducer"
import films from "./comps/app3/starwars/reducers/films-reducer"
import users from "./comps/app3/starwars/reducers/users-reducer"
import notify from "./reducers/NotifyReducer"
import appdb from "./reducers/AppdbReducer"
import {todos} from "./comps/app1/todos/reducers/TodoReducer"
import {AppdbAction} from "./actions/AppdbAction";
import {Welcome} from "./comps/welcome/Welcome";

/**
 Main application bootstrap
 @class App
 **/
@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.Emulated,
    providers: [StyleService, AppdbAction],
    templateUrl: '/src/App.html',
    directives: [ROUTER_DIRECTIVES, RouterLink, Filemenu, FilemenuItem, Logo, Footer]
})
@RouteConfig([
    {path: "/", name: "root", redirectTo: ["/EntryPanelNoId/Login"], useAsDefault: true},
    {path: '/AppManager', component: AppManager, as: 'AppManager'},
    {path: '/Welcome', component: Welcome, as: 'Welcome'},
    {path: '/EntryPanelNoId/...', component: EntryPanel, as: 'EntryPanelNoId'},
    {path: '/EntryPanel/:id/...', component: EntryPanel, as: 'EntryPanel'},
    {path: '/Login/...', component: EntryPanel, as: 'Login'},
    {path: '/ForgotPass/...', component: EntryPanel, as: 'ForgotPass'},
    {path: '/App1/...', component: App1, as: 'App1'},
    {path: '/App2', component: App2, as: 'App2'},
    {path: '/App3', component: App3, as: 'App3'},
    //new AsyncRoute({
    //    path: '/App1',
    //    loader: () => Lib.LoadComponentAsync('App1', '../comps/app1/App1'),
    //    name: 'App1'
    //}), /*systemjs*/
    //new AsyncRoute({
    //    path: '/App2',
    //    loader: () => Lib.LoadComponentAsync('App2', '../comps/app2/App2'),
    //    name: 'App2'
    //})

])
export class App {
    private m_styleService:StyleService;

    constructor(private appStore:AppStore, private commBroker:CommBroker, styleService:StyleService, private appdbAction:AppdbAction) {
        appStore.dispatch(appdbAction.appStartTime());
        this.m_styleService = styleService;
        this.commBroker.setService(Consts.Services().App, this);
        Observable.fromEvent(window, 'resize').debounceTime(250).subscribe(()=> {
            this.appResized();
        });
    }

    /**
     On application resize deal with height changes
     @method appResized
     **/
    public appResized():void {
        var appHeight = document.body.clientHeight;
        var appWidth = document.body.clientWidth;
        //console.log('resized ' + appHeight);
        jQuery(Consts.Elems().APP_NAVIGATOR_EVER).height(appHeight - 115);
        jQuery(Consts.Elems().APP_NAVIGATOR_WASP).height(appHeight - 115);
        jQuery(Consts.Clas().CLASS_APP_HEIGHT).height(appHeight - 420);
        jQuery('#mainPanelWrap').height(appHeight - 115);
        jQuery('#propPanel').height(appHeight - 130);

        this.commBroker.setValue(Consts.Values().APP_SIZE, {height: appHeight, width: appWidth});

        this.commBroker.fire({
            fromInstance: self,
            event: Consts.Events().WIN_SIZED,
            context: '',
            message: {height: appHeight, width: appWidth}
        })
    }
}

//enableProdMode();
bootstrap(App, [ROUTER_PROVIDERS, HTTP_PROVIDERS, JSONP_PROVIDERS,
    provide(AppStore, {useFactory: Lib.StoreFactory({notify, appdb, parts, cart, films, users, todos})}),
    provide(CommBroker, {useClass: CommBroker}),
    provide(Consts, {useClass: Consts}),
    provide(LocationStrategy, {useClass: HashLocationStrategy})]);


/** global libraries, can't live with'em can't with live without'em **/
window['jQuery'] = require('jquery');
window['bootbox'] = require('bootbox');
window['_'] = require('underscore');
window['Highcharts'] = require('highcharts');
window['immutable'] = require('immutable');
require('bootstrap');