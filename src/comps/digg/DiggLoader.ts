import {Component, Injectable} from "angular2/core";
import {Http} from "angular2/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromArray';
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
        let s:any = this.m_http.get('https://secure.digitalsignage.com/Digg').retry(2);
        s.mergeMap((res)=> {
            let news = JSON.parse(res._body);
            return Observable.fromArray(news);
        }).filter(function (data:IDigg) {
            if (data.title.toLowerCase().indexOf(filter) > -1) {
                return true;
            }
        }).subscribe(function (v:IDigg) {
            diggs.push(v);
        });
    }
}