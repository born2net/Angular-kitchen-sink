import {ROUTER_DIRECTIVES, RouteParams, RouterLink} from "angular2/router";
import {Component, AfterContentInit} from "angular2/core";
/**
 General route links
 @class Welcome
 **/
@Component({
    styles: [`
        #routerLinks {
            padding: 20px;
        }
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
export class Welcome implements AfterContentInit {
    private someId:string;

    constructor(params:RouteParams) {
        this.someId = 'App1' + Math.random();

        // an example of passing a optional, typed object instead
        // of using the old way of: opts || opts = {} and it auto maps
        // matching fields
        this.showTypedObjectArg({
            styles1: ['foo', 'bar'], // optional
            styles2: [1, 2] // optional
        })
    }

    private showTypedObjectArg({styles1, styles2}: {styles1?: string[], styles2?: number[]} = {}) {
        //console.log(styles1 + ' ' + styles2);
    }

    /** component life cycles **/
    ngAfterContentInit() {
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
}
