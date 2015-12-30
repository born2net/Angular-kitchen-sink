"use strict";
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouterLink} from 'angular2/router';


@Component({
    providers: [ForgotPass],
    selector: 'ForgotPass',
    template: `
                <div>
                  <form class="form-signin" role="form">


                    <h2 class="form-signin-heading"></h2>
                    <button id="loginButton" class="btn btn-lg btn-primary btn-block" type="submit">
                      Forgot pass
                    </button>
                    <hr class="hrThin"/>
                    <a [routerLink]="['/Login', {id: 'demo_user'}, 'Login']">Back to login screen</a><br/>
                    <small>(auto fill user by passing router args)</small>
                    <div id="languageSelectionLogin"></div>
                  </form>
                </div>
                <!-- <a [routerLink]="['/App1']">And back to Test1</a> -->
                <br/>
                <small>I am ForgotPass component and I am inside EntryPanel</small>`,
    directives: [ROUTER_DIRECTIVES, RouterLink]
})
export class ForgotPass {
    constructor() {
    }
}


