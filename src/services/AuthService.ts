import {Injectable, Injector} from 'angular2/core';
import {Router, ComponentInstruction} from "angular2/router";
import {appInjService} from "./AppInjService";
import Map = Immutable.Map;
var bootbox = require('bootbox');

export enum FlagsAuth {
    AuthPass,
    AuthFailEnterprise,
    WrongPass,
    NotEnterprise,
    Enterprise
}

@Injectable()
export class AuthService {
    private ubsub:()=>void;
    private m_authenticated:boolean = false;

    public checkAccess(to:ComponentInstruction, from:ComponentInstruction, target = ['/Login/Login']):Promise<any> {
        let injector:Injector = appInjService();
        let router:Router = injector.get(Router);

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
            bootbox.alert('Sorry user or password are incorrect');
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