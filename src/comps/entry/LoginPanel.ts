///<reference path="../../../typings/app.d.ts" />

import {Component, Injectable} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouterLink} from 'angular2/router';
import {CommBroker} from "../../services/CommBroker";
import {Consts} from "../../Conts";
import {Router} from "angular2/router";

@Injectable()
@Component({
    selector: 'LoginPanel',
    directives: [ROUTER_DIRECTIVES, RouterLink],
    template: `
                <div id="appLogin" style="">
                  <form class="form-signin" role="form">
                    <h2 class="form-signin-heading"></h2>
                    <input id="userName" type="text" value="{{user}}" class="form-control" data-localize="username" placeholder="Type anything" required autofocus>
                    <input id="userPass" type="password" value="{{pass}}" class="form-control" data-localize="password" placeholder="Type anything" required>
                    <label class="checkbox">
                      <input id="rememberMe" type="checkbox" checked value="remember-me">
                      <span data-localize="rememberMe"> Remember me </span></label>
                    <button id="loginButton" (click)="onLogin($event)" class="btn btn-lg btn-primary btn-block" type="submit">
                      Sign in
                    </button>
                    <hr class="hrThin"/>
                    <a [routerLink]="['/ForgotPass', 'ForgotPass']">Forgot password</a>
                    <div id="languageSelectionLogin"></div>
                  </form>
                </div>

                <!-- <a [routerLink]="['/EntryPanelNoId', {id: 123}, 'Route4']">To forgot pass</a> -->
                <!-- <a [routerLink]="['/App1']">Direct to App1</a><br/> -->
                <!-- <a [routerLink]="['/App2']">Direct to App2</a><br/> -->
                <small>I am Login component and I am inside EntryPanel</small>`
})
export class LoginPanel {
    private user:string;
    private pass:string;
    private myRouter:Router;

    constructor(router:Router, commBroker:CommBroker) {
        this.myRouter = router;
        var user = commBroker.getValue(Consts.Values().USER_NAME);
        this.user = user || '';
        this.pass = user || '';
    }

    ngAfterViewInit() {
        //jQuery.material.init();
    }

    private onLogin(event) {
        console.log(`doing some fake async auth for ${this.user}`);
        bootbox.dialog({
            closeButton: false,
            title: "Please wait, Authenticating...",
            message: " "
        });
        setTimeout((e)=> {
            this.myRouter.navigate(['/AppManager']);
            bootbox.hideAll();
        }, 2000);
        event.preventDefault();
        return false;
    }

    public set loginName(name:string) {
        this.user = name;
    }

    toString() {
    }
}


