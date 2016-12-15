import {Http, Request, RequestOptionsArgs, Response, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import * as _ from "lodash";
import {Injectable, Optional} from "@angular/core";
import {Observer} from "rxjs";

@Injectable()
export class UserService {
    public getAuthToken(): string {
        return 'this is authToken'
    }
}

export enum NotifyServiceTypes {
    GET,
    POST,
    REQUEST,
    PUT,
    DELETE,
    RECEIVED_REPLY,
    ERROR
}

@Injectable()
export class NotifyService {
    constructor() {
        this.announce$ = new Observable(i_prod => {
            this.prod = i_prod;
        })
        this.announce$.share().subscribe();

        /** example of how to subscribe externally into this class service **/
        // this.noify().subscribe((d: {notifyServiceType: string, response?: Response}): any => {
        //     console.log(d.notifyServiceType, d.response);
        // })
    }

    private prod: Observer<any>;
    private announce$: Observable<any>;

    public announce(i_type, i_response?: Response): void {
        this.prod.next({notifyServiceType: i_type, response: i_response})
    }

    public noify(): Observable<any> {
        return this.announce$;
    }
}

@Injectable()
export class HttpAuth {

    private readonly authToken: string = 'X-Auth-Token';

    constructor(private http: Http, private userService: UserService, @Optional() private notifyService: NotifyService) {
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        if (this.notifyService)
            this.notifyService.announce(NotifyServiceTypes.REQUEST)
        return this.intercept(this.http.request(url, this.getRequestOptionArgs(options)));
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        if (this.notifyService)
            this.notifyService.announce(NotifyServiceTypes.GET)
        return this.intercept(this.http.get(url, this.getRequestOptionArgs(options)));
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        if (this.notifyService)
            this.notifyService.announce(NotifyServiceTypes.POST)
        return this.intercept(this.http.post(url, body, this.getRequestOptionArgs(options)));
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        if (this.notifyService)
            this.notifyService.announce(NotifyServiceTypes.PUT)
        return this.intercept(this.http.put(url, body, this.getRequestOptionArgs(options)));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        if (this.notifyService)
            this.notifyService.announce(NotifyServiceTypes.DELETE)
        return this.intercept(this.http.delete(url, options));
    }

    getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
        options = !!options ? Object.assign({}, options) : {};
        let headers = options.headers || new Headers();
        if (headers.keys().indexOf(this.authToken) === -1) {
            headers.append(this.authToken, this.userService.getAuthToken())
        }
        headers.append('Content-Type', 'application/json');
        options.headers = headers;
        return options;

        // if (options == null) {
        //     options = new RequestOptions();
        // }
        // if (options.headers == null) {
        //     options.headers = new Headers();
        // }
        // options.headers.append('Content-Type', 'application/json');
        // return options;
    }

    intercept(observable: Observable<Response>): Observable<Response> {
        return observable.catch((err, source) => {
            if (this.notifyService)
                this.notifyService.announce(NotifyServiceTypes.ERROR, err)
            if (err.status == 401 && !_.endsWith(err.url, 'api/auth/login')) {
                return Observable.empty();
            } else {
                return Observable.throw(err);
            }
        }).do((response: Response) => {
            if (this.notifyService)
                this.notifyService.announce(NotifyServiceTypes.RECEIVED_REPLY, response)
        });

    }
}

// bootstrap(MyApp, [
//     HTTP_PROVIDERS,
//     ROUTER_PROVIDERS,
//     provide(LocationStrategy, { useClass: HashLocationStrategy }),
//     provide(Http, {
//         useFactory: (xhrBackend: XHRBackend, requestOptions: RequestOptions, router: Router) => new HttpInterceptor(xhrBackend, requestOptions, router),
//         deps: [XHRBackend, RequestOptions, Router]
//     })
// ])
//     .catch(err => console.error(err));
