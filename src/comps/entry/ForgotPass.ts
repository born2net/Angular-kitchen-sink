///<reference path="../../../typings/app.d.ts"/>

import {Component, EventEmitter} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouterLink} from 'angular2/router';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/buffer';
import 'rxjs/add/operator/bufferCount';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import {Observable} from "rxjs/Observable";
import {Lib} from "../../Lib";

@Component({
    providers: [ForgotPass],
    selector: 'ForgotPass',
    template: `
                <div>
                  <form class="form-signin" role="form">
                    <h2 class="form-signin-heading"></h2>
                    <button id="forgotPassButton" [disabled]="disableButton" (click)="onForgotPass($event)" class="btn btn-lg btn-primary btn-block">
                      Forgot password
                    </button>
                    <hr class="hrThin"/>
                    <a [routerLink]="['/Login', {id: 'demo_user'}, 'Login']">Back to login screen</a><br/>
                    <small>(auto fill user by passing router args)</small>
                    <div id="languageSelectionLogin"></div>
                  </form>
                </div>
                <!-- <a [routerLink]="['/App1']">And back to Test1</a> -->
                <br/>
                <small>ForgotPass component and I am inside EntryPanel</small>`,
    directives: [ROUTER_DIRECTIVES, RouterLink]
})
export class ForgotPass {
    private clickStream:EventEmitter<any> = new EventEmitter();
    private disableButton:boolean = false;

    constructor() {
        this.forgotPassInit();
    }

    /**
     * An example of a custom event using Observable and double click the Logout button
     **/
    private forgotPassInit(){
        var doubleClickStream = this.clickStream.buffer(this.clickStream.throttleTime(450)).map((e)=> {
            return e.length
        }).filter((e:any)=> {
            Lib.log('total clicks ' + e);
            if (e == 2)
                this.disableButton = true;
            return e == 2
        }).delay(2000);
        doubleClickStream.subscribe(e=> {
            Lib.log('double click');
            this.disableButton = false;
        });
    }

    private onForgotPass(event) {
        this.clickStream.next('click');
    }
}


