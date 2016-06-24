/**
 * License MIT
 **/

import "zone.js/dist/zone";
import "zone.js/dist/long-stack-trace-zone";
import "reflect-metadata";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component, ViewEncapsulation, PLATFORM_PIPES, ComponentRef, enableProdMode} from "@angular/core";
import "twbs/bootstrap";
import "twbs/bootstrap/dist/css/bootstrap.css!";
import "./styles/style.css!";
import {CharCount} from "./pipes/CharCount";
import {AuthService} from "./services/AuthService";
import {appInjService} from "./services/AppInjService";
import {HTTP_PROVIDERS, JSONP_PROVIDERS} from "@angular/http";
import {CommBroker} from "../src/services/CommBroker";
import {Filemenu} from "../src/comps/filemenu/Filemenu";
import {FilemenuItem} from "../src/comps/filemenu/FilemenuItem";
import {Logo} from "./comps/logo/Logo";
import {Footer} from "./comps/footer/Footer";
import {Consts} from "../src/Conts";
import {StyleService} from "./styles/StyleService";
import {AppStore} from "angular2-redux-util";
import {Lib} from "./Lib";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/observable/fromEvent";
import parts from "./comps/app3/starwars/reducers/parts-reducer";
import cart from "./comps/app3/starwars/reducers/cart-reducer";
import films from "./comps/app3/starwars/reducers/films-reducer";
import users from "./comps/app3/starwars/reducers/users-reducer";
import notify from "./reducers/NotifyReducer";
import appdb from "./reducers/AppdbReducer";
import {todos} from "./comps/app1/todos/reducers/TodoReducer";
import {AppdbAction} from "./actions/AppdbAction";
import {APP_ROUTER_PROVIDERS} from "./App.routes";
import {LogoutDeactivate} from "./comps/logout/LogoutDeactivate";

/**
 Main application bootstrap
 @class App
 **/
@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.Emulated,
    providers: [StyleService, AppdbAction],
    templateUrl: '/src/App.html',
    directives: [ROUTER_DIRECTIVES, Filemenu, FilemenuItem, Logo, Footer]
})

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

var modules = [HTTP_PROVIDERS, APP_ROUTER_PROVIDERS, JSONP_PROVIDERS,
    disableDeprecatedForms(),
    provideForms(),
    {provide: AppStore, useFactory: Lib.StoreFactory({notify, appdb, parts, cart, films, users, todos})},
    {provide: CommBroker, useClass: CommBroker},
    {provide: AuthService, useClass: AuthService},
    {provide: LogoutDeactivate, useClass: LogoutDeactivate},
    {provide: PLATFORM_PIPES, useValue: CharCount, multi: true},
    {provide: Consts, useClass: Consts}];

if (!Lib.DevMode())
    enableProdMode();

bootstrap(App, modules).then((appRef:ComponentRef<any>) => {
        appInjService(appRef.injector);
    }
);
window['hr'] && window['hr'].on('change', (fileName) => {
    if (fileName.indexOf('html') !== -1) {
        var newBody = document.createElement('body')
        newBody.appendChild(document.createElement('app'))
        document.body = newBody;
        bootstrap(App, modules).then((appRef:ComponentRef<any>) => {
            appInjService(appRef.injector);
        });
    }
})



