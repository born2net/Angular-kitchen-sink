import {Injectable, Injector} from '@angular/core';
import {Router} from "@angular/router";
import {appInjService} from "./AppInjService";
import Map = Immutable.Map;
import * as Immutable from "immutable";
import {ToastsManager} from "ng2-toastr";

export enum FlagsAuth {
    AuthPass,
    AuthFailEnterprise,
    WrongPass,
    NotEnterprise,
    Enterprise
}

@Injectable()
export class AuthService {

    constructor(public toastr: ToastsManager){

    }
    private ubsub:()=>void;
    private m_authenticated:boolean = false;

    // public checkAccess(to:ComponentInstruction, from:ComponentInstruction, target = ['/Login/Login']):Promise<any> {
    public checkAccess():Promise<any> {
        let injector:Injector = appInjService();
        let router:Router = injector.get(Router);
        let target = ['/Login/Login'];

        // since this is just an example app we will always set m_authenticated to true, but
        // here you will want to add some server side auth logic
        // set value to false to see what happens when a user auth is rejected
        // and the router will default back to the login screen... cool stuff!
        // this.m_authenticated = false;
        this.m_authenticated = true;
        if (this.m_authenticated)
            return Promise.resolve(true);

        // here is an example of auth that failed and we nabigate to default route
        // and resolve false so a calling component's @CanActivate will not load
        if (!this.m_authenticated) {
            this.toastr.error('Sorry user or password are incorrect');
            router.navigate(target);
            return Promise.resolve(false);
        }

        // some more sample code of possibilities
        // return new Promise((resolve) => {
        //     var credentials = this.localStorage.getItem('remember_me');
        //     var user = credentials.u;
        //     var pass = credentials.p;
        //     var remember = credentials.r;
        //
        //     this.appdbAction.createDispatcher(this.appdbAction.authenticateUser)(user, pass, remember);
        //
        //     this.m_pendingNotify = (status) => {
        //         resolve(status);
        //         if (!status) {
        //             router.navigate(target);
        //             resolve(false);
        //         }
        //     }
        // });
    }


    ngOnDestroy() {
        this.ubsub();
    }
}