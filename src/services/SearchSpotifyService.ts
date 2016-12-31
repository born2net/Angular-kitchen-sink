// reference: http://blog.rangle.io/recipes-for-redux/

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {ActionsObservable} from "redux-observable";
// import Action = Redux.Action;

export interface IPayloadAction  {
    payload?: any;
}

@Injectable()
export class SearchEpic {
    constructor(private http: Http) {
    }

    searchSpotify = (action$: ActionsObservable<IPayloadAction>) => {
        return action$.ofType('SEARCH_SPOTIFY')
            .debounceTime(500)
            .mergeMap(({payload}) => {
                const {term, type} = payload;
                const url = `https://api.spotify.com/v1/search?q=${term}&type=${type}`;
                return this.http
                    .get(url)
                    .map((res) => ({type: 'SEARCH_RESULTS', payload: res.json()}))
                    .takeUntil(action$.ofType('SEARCH_CANCELLED'))
                    .catch((err: any, b: any) => {
                        return Observable.of({type: 'SEARCH_ERROR', payload: err});
                    })
            })
    }
}