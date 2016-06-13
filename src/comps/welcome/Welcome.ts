import {ROUTER_DIRECTIVES} from "@angular/router";
import {Component, OnInit} from "@angular/core";
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
                    <a [routerLink]="['/EntryPanelNoId/Login']">To Login screen</a><br/>
                    <a [routerLink]="['/Login', {id: 'Sean-Levy'}, 'Login']">To Login screen with demo user args</a><br/>
                    <a [routerLink]="['/ForgotPass', 'ForgotPass']">To Forgot Password screen</a><br/>
                    <a [routerLink]="['/AppManager']">To App manager</a><br/>
                    <a [routerLink]="['/App1']">To App1</a><br/>
                    <a [routerLink]="['/App2']">To App2</a><br/>
                    <a [routerLink]="['/App3']">To App3</a><br/>
                    <br/><small>I am Welcome component</small>
                </div>
                `,
    directives: [ROUTER_DIRECTIVES]
})
export class Welcome implements OnInit {
    private someId:string;

    //constructor(params:RouteParams) {
    constructor() {
        this.someId = 'App1' + Math.random();

        // an example of passing a optional, typed object instead
        // of using the old way of: opts || opts = {} and it auto maps
        // matching fields
        this.showTypedObjectArg({
            styles1: ['foo', 'bar'], // optional
            styles2: [1, 2] // optional
        })
    }

    private showTypedObjectArg({styles1, styles2}: {styles1?:string[], styles2?:number[]} = {}) {
        //console.log(styles1 + ' ' + styles2);
    }

    ngOnInit() {
    }

    /** component life cycles **/
    //ngOnInit() {
    //    console.log(1);
    //}

    //ngOnDestroy() {
    //    console.log(2);
    //}

    /** The OnChanges hook is called after one or more of our component properties have been changed.
     * The ngOnChanges method receives a parameter which tells which properties have changed
     **/
    // ngOnChanges(changes: {[propName: string]: SimpleChange}): void {
    //     console.log(4);
    // }

    /**
     * There may be times when we just want to do something in case an item was removed or added,
     * or if only a particular property changed, for instance.
     * If we run into one of these scenarios, we can use the DoCheck hook.
     * It’s important to note that the OnChanges hook gets overriden by DoCheck so
     * if we implement both, OnChanges will be ignored.
     */
    //ngDoCheck(changes: {[propName: string]: SimpleChange}): void {
    //    console.log(3);
    //}

    /**
     * The AfterContentChecked is called after the directive check has finished.
     * The check, in this context, is the change detection system check.
     * The other two hooks: AfterViewInit and AfterViewChecked are triggered right after the content ones,
     * right after the view has been fully initialized.
     * Those two hooks are only applicable to components, and not to directives.
     *
     * Also, the AfterXXXInit hooks are only called once during the directive lifecycle,
     * while the AfterXXXChecked hooks are called after every change detection cycle.
     */
    // ngAfterContentInit() {
    //    console.log(5);
    // }

    //ngAfterContentChecked() {
    //    console.log(6);
    //}

    //ngAfterViewInit() {
    //    console.log(7);
    //}

    //ngAfterViewChecked() {
    //    console.log(8);
    //}
}
