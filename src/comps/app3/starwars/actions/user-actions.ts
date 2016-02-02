import {Http} from "angular2/http";
import {Injectable} from "angular2/core";
import {Actions} from "angular2-redux-util";
import 'rxjs/add/operator/map';

export const REQUEST_USERS = 'REQUEST_USERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const CURRENT_USER = 'CURRENT_USER';
export const SET_FILM_FILTER = 'SET_FILM_FILTER';

@Injectable()
export class UserActions extends Actions {

    constructor(private _http:Http) {
        super();
    }

    fetchUsers() {
        const BASE_URL:string = "http://swapi.co/api/people/";
        return (dispatch) => {
            dispatch(this.requestUsers());
            var sub = this._http.get(`${BASE_URL}`)
                .map(result => result.json())
                .map(json => json.results)
                .map(result =>  dispatch(this.receiveUsers(result)))
                .subscribe(e=>sub.unsubscribe());
        };
    }

    requestUsers() {
        return {type: REQUEST_USERS};
    }

    receiveUsers(users) {
        return {
            type: RECEIVE_USERS,
            users,
            updated: Date.now()
        }
    }

    setCurrentUser(current) {
        return {
            type: CURRENT_USER,
            current
        }
    }

    setFilmFilter(filmFilter) {
        return {
            type: SET_FILM_FILTER,
            filmFilter: filmFilter
        }
    }
}
