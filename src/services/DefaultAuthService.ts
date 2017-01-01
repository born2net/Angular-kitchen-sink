// to use it which will override the RequestOptions with DefaultRequestOptions and append token on every http call:
// blog: https://netbasal.com/last-quick-tip-for-2016-how-to-send-jwt-with-every-request-in-angular-90f3b192edaa#.82yrt5nxd
//
// @NgModule({
//     ...
//         providers: [requestOptionsProvider]
//     ...
// })
// export class AppModule { }


import {Injectable} from "@angular/core";
import {BaseRequestOptions, RequestOptions} from "@angular/http";
import {AuthService} from "./AuthService";

@Injectable()
export class DefaultAuthService extends BaseRequestOptions {

    constructor(private auth:AuthService) {
        super();
        this.headers.set('Authorization', `Bearer 123`);
    }
}

export const requestOptionsProvider = {provide: RequestOptions, useClass: DefaultAuthService};

