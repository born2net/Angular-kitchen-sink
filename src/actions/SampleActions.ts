import {
    Injectable,
    Inject
} from "@angular/core";
import {
    Actions,
    AppStore
} from "angular2-redux-util";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/merge";
import "rxjs/add/operator/debounceTime";
import {Observable} from "rxjs/Observable";

export const APP_INIT = 'APP_INIT';
export const SERVERS_STATUS = 'SERVERS_STATUS';
export const GENERAL_STATUS = 'GENERAL_STATUS';
export const PING = 'PING';
export const PONG = 'PONG';

export enum AuthState {
    FAIL,
    PASS,
    TWO_FACTOR
}


@Injectable()
export class SampleActions {
    constructor(@Inject('OFFLINE_ENV') private offlineEnv, private appStore: AppStore, private _http: Http) {
    }

    public initAppDb() {
        return {
            type: APP_INIT,
            value: Date.now()
        };
    }


    public serverStatus() {
        return (dispatch) => {
            this._http.get(`https://secure.digitalsignage.com/msPingServersGuest`)
                .map(result => {
                    result = result.json();
                    dispatch({
                        type: SERVERS_STATUS,
                        payload: result
                    });
                }).subscribe();
            return;
        };
    }

}


export const pingEpic = action$ =>
    action$.ofType(PING)
        .delay(1000)
        .do(() => {
            console.log('ping');
        })
        .mapTo({type: PONG});

export const pongEpic2 = action$ =>
    action$.ofType(PONG)
        .delay(1000)
        .do(() => {
            console.log('pong');
        })
        .mapTo({type: PING});