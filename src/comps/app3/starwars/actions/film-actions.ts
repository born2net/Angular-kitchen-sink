import {Http} from "angular2/http";
import {Injectable} from "angular2/core";
import {Actions} from "angular2-redux-util";
import 'rxjs/add/operator/map';

export const REQUEST_FILMS = 'REQUEST_FILMS';
export const RECEIVE_FILMS = 'RECEIVE_FILMS';
export const REQUEST_FILM = 'REQUEST_FILM';
export const RECEIVE_FILM = 'RECEIVE_FILM';
export const CURRENT_FILMS = 'CURRENT_FILMS';
export const RECEIVE_NUMBER_OF_FILMS = 'RECEIVE_NUMBER_OF_FILMS';
export const CURRENT_FILM = 'CURRENT_FILM';

const BASE_URL = "http://swapi.co/api/films/";

@Injectable()
export class FilmActions extends Actions {

    constructor(private _http:Http) {
        super();
    }

    fetchFilms() {
        return (dispatch) => {
            dispatch(this.requestFilms());
            var sub = this._http.get(`${BASE_URL}`)
                .map(result => result.json())
                .map(json => {
                    dispatch(this.receiveFilms(json.results));
                    dispatch(this.receiveNumberOfFilms(json.count));
                })
                .subscribe(e=>sub.unsubscribe());
        };
    }

    fetchFilm(index) {
        return (dispatch) => {
            dispatch(this.requestFilm());
            var sub = this._http.get(`${BASE_URL}${index + 1}/`)
                .map(result => result.json())
                .map(json => {
                    dispatch(this.receiveFilm(json));
                })
                .subscribe(e=>sub.unsubscribe());
        };
    }

    requestFilms() {
        return {type: REQUEST_FILMS};
    }

    receiveFilms(films) {
        return {
            type: RECEIVE_FILMS,
            films
        }
    }

    receiveNumberOfFilms(count) {
        return {
            type: RECEIVE_NUMBER_OF_FILMS,
            count
        }
    }

    requestFilm() {
        return {type: REQUEST_FILM};
    }

    receiveFilm(film) {
        return {
            type: RECEIVE_FILM,
            film
        }
    }

    setCurrentFilm(currentIndex) {
        return {
            type: CURRENT_FILM,
            currentIndex
        }
    }
}
