import {Component, Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/retry';
import {Observable} from "rxjs/Observable";

export interface IDigg {
    title:string;
    subject:string;
}

@Injectable()
/**
 * This service is a thin wrapper around Http, used to fetch a
 * list of Diggs
 *
 * The service will automatically unwrap the response and return
 * an array of Diggs
 *
 * If the request fails once, the service will indiscriminately
 * retry the request with the same value.
 */
export class DiggLoader {
    private m_http:Http;

    constructor(private http:Http) {
        this.m_http = http;
    }

    loadDiggs(filter:any, diggs:IDigg[]) {
        filter = filter.toLowerCase();

        // Another options is to use jsonp if no CORS support via:
        // jsonp.get('https://secure.digitalsignage.com/Digg?callback=JSONP_CALLBACK').map(res...

        // and another search params and request options:
        // let searchParams = new URLSearchParams();
        // searchParams.set('sort', 'ascending');
        // let options = new RequestOptions({search: searchParams});
        // this.m_http.get('https://secure.digitalsignage.com/Digg', options) .subscribe(response => {
        //     console.log(response.text());
        // });

        let s:any = this.m_http.get('https://secure.digitalsignage.com/Digg').retry(2);
        s.mergeMap((res)=> {
            let news = res.json();
            return Observable.from(news);
        }).filter(function (data:IDigg) {
            if (data.title.toLowerCase().indexOf(filter) > -1) {
                return true;
            }
        }).subscribe(function (v:IDigg) {
            diggs.push(v);
        });
    }
}