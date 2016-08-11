import {Component, Injectable} from '@angular/core';
import {ROUTER_DIRECTIVES, UrlTree} from '@angular/router';
import {CommBroker} from "../../services/CommBroker";
import {Consts} from "../../Conts";
import {Router} from "@angular/router";
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/bufferCount';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/range';
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import {AppStore} from "angular2-redux-util";
import * as bootbox from 'bootbox';

export class User {
    public id:string;
    public name:string;
    public pass:string;
    public gender:string;

    constructor(obj?:any) {
        this.id = obj && obj.id || Math.random();
        this.name = obj && obj.name || 'anonymous';
        this.pass = obj && obj.pass || '';
        this.gender = obj && obj.gender || 'male';
    }
}

@Injectable()
@Component({
    selector: 'LoginPanel',
    template: `
                <div id="appLogin" style="">
                  <form class="form-signin" role="form">
                    <h2 class="form-signin-heading"></h2>
                    <input #userName id="userName" type="text" value="{{user}}" class="form-control" data-localize="username" placeholder="Type anything" required autofocus>
                    <input #userPass id="userPass" type="password" value="{{pass}}" class="form-control" data-localize="password" placeholder="Type anything" required>
                    <label class="checkbox">
                      <input id="rememberMe" type="checkbox" checked value="remember-me">
                      <span> Remember me </span></label>
                    <button id="loginButton" (click)="authUser(userName.value, userPass.value)" class="btn btn-lg btn-primary btn-block" type="submit">
                      Sign in
                    </button>
                    <hr class="hrThin"/>
                    <a [routerLink]="['/ForgotPass']">Forgot password</a>
                    <div id="languageSelectionLogin"></div>
                  </form>
                </div>

                <!-- <a [routerLink]="['/EntryPanelNoId', {id: 123}']">To forgot pass</a> -->
                <!-- <a [routerLink]="['/App1']">Direct to App1</a><br/> -->
                <!-- <a [routerLink]="['/App2']">Direct to App2</a><br/> -->
                <small>I am Login component and I am inside EntryPanel</small>`
})
export class LoginPanel {
    private user:string;
    private pass:string;
    private myRouter:Router;
    private unsub:Function;

    constructor(private appStore:AppStore, router:Router, private commBroker:CommBroker) {

        // // const currentUrlTree: UrlTree = router.urlTree;
        // root segment
        // // const root: UrlSegment = currentUrlTree.root;
        // you can get the first child or the list of children of a segment
        // // const firstChild: UrlSegment = currentUrlTree.firstChild(root);
        // matrix parameters of a segment
        // // const params: {[key:string]:string} = firstChild.parameters;
        // // const path: string = firstChild.path;
        // // You can also serialize the tree back into a string.
        // const url: string = router.serializeUrl(currentUrlTree);

        this.myRouter = router;
        var user = commBroker.getValue(Consts.Values().USER_NAME);
        this.user = user || '';
        this.pass = user || '';

        this.unsub = appStore.subscribe((objectPath, oldVal, newVal) => {
            console.log('%s changed from %s to %s', objectPath, oldVal, newVal)
        }, 'notify', true);

        // more examples of subscribing to store
        //
        // useIsEqual is set to true for deep Map equality
        // appStore.subscribe((objectPath, oldVal, newVal) => {
        //     console.log('%s changed from %s to %s', objectPath, oldVal, newVal)
        // }, 'notify', true);
        //
        // useIsEqual is set to false for normal equality
        // var ubsub = appStore.subscribe((objectPath, oldVal, newVal) => {
        // }, 'notify.data', false);
        //
        // with casting
        // this.ubsub = appStore.subscribe((path, prev, value:Map<string,any>) => {
        //     if (value.get('credentials').authenticated)
        //         this.onLogin();
        // }, 'appdb', false);
        //
        // this is a shorthand version which allows you to just receive back the changes
        // this.ubsub = appStore.sub((appdb:Map<string,any>) => {
        //     var status = appdb.get('credentials').get('authenticated');
        //     var user = appdb.get('credentials').get('user');
        //     var pass = appdb.get('credentials').get('pass');
        //     if (status)
        //         this.onLogin();
        // }, 'appdb', false);
        //
        // var ubsub = appStore.subscribe((state)=> {
        // })

    }

    private authUser(i_user:string, i_pass:string){
        this.onLogin();
    }

    private onLogin() {
        bootbox.dialog({
            closeButton: false,
            title: "Please wait, Authenticating...",
            message: " "
        });
        setTimeout((e)=> {
            this.myRouter.navigate(['/AppManager']);
            bootbox.hideAll();
        }, 200);
        event.preventDefault();
        return false;
    }

    public set loginName(name:string) {
        this.user = name;
    }

    toString() {
    }

    // important, be sure to remember to unsubscribe from store subscriptions to prevent leaks
    ngOnDestroy() {
        this.unsub();
    }
}


