/**
 *  Custom HTTP class extending the default ng2 Http service and using Observables
 *
 *  credit to: http://restlet.com/blog/2016/04/18/interacting-efficiently-with-a-restful-service-with-angular2-and-rxjs-part-3/
 **/

import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import {
    RequestOptionsArgs, RequestOptions, ConnectionBackend, Http, HTTP_PROVIDERS, Request,
    Response
} from "@angular/http";

@Injectable()
export class CustomHttp extends Http {
    constructor(private backend:ConnectionBackend, private defaultOptions:RequestOptions, private errorService:ErrorNotifierService) {
        super(backend, defaultOptions);
    }

    request(url:string | Request, options?:RequestOptionsArgs):Observable<any> {
        console.log('Before the request...');
        return super.request(url, options)
            .retryWhen(error => error.delay(500))
            .timeout(2000, 'Timeout has occurred')
            .catch((err) => {
                if (err.status === 400 || err.status === 422) {
                    return Observable.throw(err);
                } else {
                    this.errorService.notifyError(err);
                }
            })
            .finally(() => {
                console.log('After the request...');
            });
    }

    get(url:string, options?:RequestOptionsArgs):Observable<any> {
        console.log('Before the request...');
        return super.get(url, options)
            .catch((err) => {
                console.log('On received an error...');
                return Observable.throw(err);
            })
            .finally(() => {
                console.log('After the request...');
            });
    }
}

export class ErrorNotifierService {
    private errorObservable:Observable<any>;
    private errorObserver:Observer<any>;

    constructor() {
        this.errorObservable = Observable.create((observer:Observer<any>) => {
            this.errorObserver = observer;
        }).share();
    }

    notifyError(error:any) {
        this.errorObserver.next(error);
    }

    onError(callback:(err:any) => void) {
        this.errorObservable.subscribe(callback);
    }
}

/**
 * To Bootstrap the custom HTTP service at
 * the startup of the application append
 * the following code:
 **/
// bootstrap(AppComponent, [
//     HTTP_PROVIDERS,
//     provide(Http, {
//         useFactory: (backend:XHRBackend, defaultOptions:RequestOptions,
//                      errorService:ErrorNotifierService) => {
//             return new CustomHttp(backend, defaultOptions, errorService);
//         },
//         deps: [XHRBackend, RequestOptions, ErrorNotifierService]
//     }),
//     ErrorNotifierService
// ]);