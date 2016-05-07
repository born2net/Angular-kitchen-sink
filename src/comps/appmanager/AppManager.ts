import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {Router} from '@angular/router';
import {appInjService} from "../../services/AppInjService";
import {AuthService} from "../../services/AuthService";

@Component({
    providers: [AppManager],
    selector: 'AppManager',
    template: `
    <div id="appEntry">
        <small>I am AppManager component</small>
        <div id="appSelector" class="noScroll container" >
            <div align="center" style="padding-top: 100px">
                <button (click)="goToApp1(event)" data-ripple-color="black" type="button" name="mailWasp" class="btn btn-default">
                <i style="margin: 20px; padding: 20px; font-size: 5em" class="fa fa-paper-plane"></i> <span
                        data-localize="none"></span>
                        <small>App 1</small>
                 </button>
                <button (click)="goToApp2(event)" data-ripple-color="black" type="button" name="everNodes" class="btn btn-default">
                <i style="margin: 20px; padding: 20px ; font-size: 5em" class="fa fa-rocket"></i> <span
                        data-localize="none"></span>
                        <small>App 2</small>
                </button>

                <button (click)="goToApp3(event)" data-ripple-color="black" type="button" name="everNodes" class="btn btn-default">
                <i style="margin: 20px; padding: 20px ; font-size: 5em" class="fa fa-film"></i> <span
                        data-localize="none"></span>
                        <small>App 3</small>
                </button>

            </div>
        </div>
        <div id="appMailWaspContent" class="noScroll container" style="display: none">
        </div>
        <div id="appEverNodesContent" class="noScroll container" style="display: none">
        </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})

// An example of how we can allow or deny access to a Route
// @CanActivate((to:ComponentInstruction, from:ComponentInstruction) => {
//     let authService:AuthService = appInjService().get(AuthService);
//     return authService.checkAccess(to, from, ['/Login/Login']);
// })


export class AppManager {
    private myRouter:Router;
    constructor(router:Router) {
        this.myRouter = router;

        // if you wish to subscribe to router calls
        //this.myRouter.parent.subscribe(function(e){
        //    console.log(`Route ${e}`);
        //});
    }

    routerOnActivate() {
        // this.id = this._routeParams.get("id");
        // return new Promise((resolve, reject) => {
        //     if (this.id) {
        //         this.gateDataModel.unique_display_id = parseInt(this.id);
        //         this.myService.loadData(this.id)
        //             .subscribe(response => {
        //                 console.log(response);
        //                 resolve();
        //             });
        //     } else {
        //         resolve();
        //     }
        // });
    }

    ngAfterViewInit() {
    }

    private goToApp1() {
        setTimeout(e=>this.myRouter.navigate(['/App1']),500);

    }

    private goToApp2() {
        setTimeout(e=>this.myRouter.navigate(['/App2']),500);
    }

    private goToApp3() {
        setTimeout(e=>this.myRouter.navigate(['/App3']),500);
    }
}


