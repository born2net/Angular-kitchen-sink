import {Injectable} from 'angular2/core';
import {Http, RequestOptions, URLSearchParams} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/empty'
import 'rxjs/add/observable/empty'
import {IWeatherItem} from "./IWeather";

@Injectable()
export class WeatherService {
    static BASE_URL:string = 'https://secure.digitalsignage.com/Weather/';

    constructor(private http:Http) {
    }

    search(query:string):Observable<any> {
        // if you wish to use ?q=param_here you can use
        //const search:URLSearchParams = new URLSearchParams();
        //search.set('q', query);
        //return this.http.get(`${WeatherService.BASE_URL}`, new RequestOptions({search}))

        // do is a great way to trace for debugging Observables
        return this.http
            .get(`${WeatherService.BASE_URL}${query}`)
            .do(x => {
                console.log(`Weather response: ${x.status}`)
            })
            .map((res:any) => res.json())
            .map((e) => {
                var items:Array<IWeatherItem> = e[0].data.weather;
                return items;
            })
            .catch(function (e) {
                return Observable.empty();
            });
        //.map((item: Array<{item: IWeatherItem}>) => item.map((item: {show: IWeatherItem}));
    }
}