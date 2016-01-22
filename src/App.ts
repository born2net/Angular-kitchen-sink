///<reference path="../typings/app.d.ts"/>

require("bootstrap-webpack");
require("bootbox");
require("font-awesome-webpack");
require("./styles/style.css");
require("./styles/fonts/Raleway.woff2");
require('underscore');

//import {enableProdMode} from 'angular2/core';
//import {AsyncRoute} from "angular2/router";
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from "angular2/http";
import {App1} from '../src/comps/app1/App1';
import {App2} from '../src/comps/app2/App2';
import {App3} from '../src/comps/app3/App3';
import {Component, provide, ViewEncapsulation, AfterContentInit} from 'angular2/core';
import {EntryPanel} from '../src/comps/entry/EntryPanel';
import {AppManager} from '../src/comps/appmanager/AppManager';
import {CommBroker} from '../src/services/CommBroker';
import {Filemenu} from "../src/comps/filemenu/Filemenu";
import {FilemenuItem} from "../src/comps/filemenu/FilemenuItem";
import {Logo} from "./comps/logo/Logo";
import {RefreshTheme} from "./styles/RefreshTheme";
import {Consts} from "../src/Conts";
import {StyleService} from "./styles/StyleService";
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {LocationStrategy, RouteParams, RouterLink, HashLocationStrategy, RouteConfig} from 'angular2/router';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';

/**
 General route links
 @class Welcome
 **/
@Component({
    styles: [`
        #routerLinks {
            padding: 20px;
        };
    `],
    template: `
                <div id="routerLinks">
                    <h4>Direct router shortcut links:</h4>
                    <a [routerLink]="['/Login', 'Login']">To Login screen</a><br/>
                    <a [routerLink]="['/Login', {id: 'Sean-Levy'}, 'Login']">To Login screen with demo user args</a><br/>
                    <a [routerLink]="['/ForgotPass', 'ForgotPass']">To Forgot Password screen</a><br/>
                    <a [routerLink]="['/AppManager']">To App manager</a><br/>
                    <a [routerLink]="['/App1']">To App1</a><br/>
                    <a [routerLink]="['/App2']">To App2</a><br/>
                    <a [routerLink]="['/App3']">To App3</a><br/>
                    <br/><small>I am Welcome component</small>
                </div>
                `,
    directives: [ROUTER_DIRECTIVES, RouterLink]
})
export class Welcome {
    private someId:string;

    constructor(params:RouteParams) {
        this.someId = 'App1' + Math.random();
    }
}

/**
 Load async components for router
 @class ComponentHelper
 **/
//class ComponentHelper {
//    static LoadComponentAsync(name:string, path:string) {
//        //return System.import(path).then(c => c[name]);
//    }
//}

/**
 Main application that's kicked off by ng2 bootstrap
 @class App
 **/
@Component({
    encapsulation: ViewEncapsulation.Emulated,
    providers: [StyleService],
    selector: 'app',
    template: require('./App.html'),
    directives: [ROUTER_DIRECTIVES, RouterLink, Filemenu, FilemenuItem, Logo]
})
@RouteConfig([
    {path: "/", name: "root", redirectTo: ["/EntryPanelNoId/Login"], useAsDefault: true},
    {path: '/AppManager', component: AppManager, as: 'AppManager'},
    {path: '/Welcome', component: Welcome, as: 'Welcome'},
    {path: '/EntryPanelNoId/...', component: EntryPanel, as: 'EntryPanelNoId'},
    {path: '/EntryPanel/:id/...', component: EntryPanel, as: 'EntryPanel'},
    {path: '/Login/...', component: EntryPanel, as: 'Login'},
    {path: '/ForgotPass/...', component: EntryPanel, as: 'ForgotPass'},
    {path: '/App1', component: App1, as: 'App1'},
    {path: '/App2', component: App2, as: 'App2'},
    {path: '/App3', component: App3, as: 'App3'},
    //new AsyncRoute({
    //    path: '/App1',
    //    loader: () => ComponentHelper.LoadComponentAsync('App1', 'src/comps/app1/App1'),
    //    name: 'App1'
    //}),
    //new AsyncRoute({
    //    path: '/App2',
    //    loader: () => ComponentHelper.LoadComponentAsync('App2', 'src/comps/app2/App2'),
    //    name: 'App2'
    //})
])
//@RefreshTheme('polymer')
export class App extends RefreshTheme implements AfterContentInit {
    private m_commBroker:CommBroker;
    private m_styleService:StyleService;

    constructor(commBroker:CommBroker, styleService:StyleService) {
        super();
        this.m_styleService = styleService;
        this.m_commBroker = commBroker;
        this.m_commBroker.setService(Consts.Services().App, this);

        Observable.fromEvent(window, 'resize').debounceTime(250).subscribe(()=> {
            this.appResized();
        });

        // an example of passing a optional, typed object instead
        // of using the old way of: opts || opts = {} and it auto maps
        // matching fields
        this.showTypedObjectArg({
            styles1: ['foo','bar'], // optional
            styles2: [1,2] // optional
        })
    }

    private showTypedObjectArg({styles1, styles2}: {styles1?: string[], styles2?: number[]} = {}){
        //console.log(styles1 + ' ' + styles2);
    }

    // component life cycles
    ngAfterContentInit() {
        this.appResized();
    }
    //ngAfterViewInit() {
    //    console.log(2);
    //}
    //ngAfterContentChecked() {
    //    console.log(3);
    //}
    //ngOnInit() {
    //    console.log(4);
    //}
    //ngOnDestroy() {
    //    console.log(5);
    //}
    //ngDoCheck() {
    //    console.log(6);
    //}
    //ngOnChanges(changes) {
    //    console.log(7);
    //}
    //ngAfterViewChecked() {
    //    console.log(8);
    //}

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
        jQuery(Consts.Clas().CLASS_APP_HEIGHT).height(appHeight - 220);
        jQuery('#mainPanelWrap').height(appHeight - 115);
        jQuery('#propPanel').height(appHeight - 130);

        this.m_commBroker.setValue(Consts.Values().APP_SIZE, {height: appHeight, width: appWidth});

        this.m_commBroker.fire({
            fromInstance: self,
            event: Consts.Events().WIN_SIZED,
            context: '',
            message: {height: appHeight, width: appWidth}
        })
    }
}

//enableProdMode();

bootstrap(App, [ROUTER_PROVIDERS, HTTP_PROVIDERS,
    provide(CommBroker, {useClass: CommBroker}),
    provide(Consts, {useClass: Consts}),
    provide(LocationStrategy, {useClass: HashLocationStrategy})]);
