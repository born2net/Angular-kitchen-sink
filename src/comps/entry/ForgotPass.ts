import {Component, EventEmitter} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouterLink} from 'angular2/router';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/buffer';
import 'rxjs/add/operator/bufferCount';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    providers: [ForgotPass],
    selector: 'ForgotPass',
    template: `
                <div>
                  <form class="form-signin" role="form">


                    <h2 class="form-signin-heading"></h2>
                    <button id="loginButton" [disabled]="disableButton" (click)="forgotPass($event)" class="btn btn-lg btn-primary btn-block">
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

    // example of a custom event using Observable and click event
    constructor() {
        this.clickStream.throttleTime(100)
            .map((e)=> {
                this.disableButton = true;
                return e;
            }).delay(1000).map(e=>this.disableButton = false)
            .subscribe(
                function (x) {
                    console.log('Double clicked');
                },
                function (err) {
                    console.log('Error: ' + err);
                },
                function () {
                    console.log('Completed');
                });
    }

    private forgotPass(event) {
        this.clickStream.next('click');

        //this.clickStream.buffer(() => this.clickStream.throttleTime(250))
        //this.ee.buffer(()=> this.ee.throttle(250))
        //this.ee.subscribe(e => console.log('aaaa'));
    }
}


