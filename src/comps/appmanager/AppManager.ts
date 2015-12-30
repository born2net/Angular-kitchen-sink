import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouterLink, Router} from 'angular2/router';

@Component({
    providers: [AppManager],
    selector: 'AppManager',
    template: `
    <div id="appEntry">
        <small>I am AppManager component</small>
        <div id="appSelector" class="noScroll container" >
            <div align="center" style="padding-top: 100px">
                <button (click)="goToApp1(event)" type="button" name="mailWasp" class="btn btn-default"><i
                        style="margin: 20px; padding: 20px; font-size: 5em" class="fa fa-paper-plane"></i> <span
                        data-localize="none"></span>
                        <small>App 1</small>
                 </button>
                <button (click)="goToApp2(event)" type="button" name="everNodes" class="btn btn-default"><i
                        style="margin: 20px; padding: 20px ; font-size: 5em" class="fa fa-rocket"></i> <span
                        data-localize="none"></span>
                        <small>App 2</small>
                </button>

            </div>
        </div>
        <div id="appMailWaspContent" class="noScroll container" style="display: none">
        </div>
        <div id="appEverNodesContent" class="noScroll container" style="display: none">
        </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES, RouterLink]
})
export class AppManager {
    private myRouter:Router;
    constructor(router:Router) {
        this.myRouter = router;
        //this.myRouter.parent.subscribe(function(e){
        //    console.log(`Route ${e}`);
        //});
    }

    private goToApp1() {
        this.myRouter.navigate(['/App1']);
    }

    private goToApp2() {
        this.myRouter.navigate(['/App2']);
    }
}


