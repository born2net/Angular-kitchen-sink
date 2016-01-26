var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require("angular2/http");
var core_1 = require("angular2/core");
var angular2_redux_1 = require("angular2-redux");
require('rxjs/add/operator/map');
exports.REQUEST_FILMS = 'REQUEST_FILMS';
exports.RECEIVE_FILMS = 'RECEIVE_FILMS';
exports.REQUEST_FILM = 'REQUEST_FILM';
exports.RECEIVE_FILM = 'RECEIVE_FILM';
exports.CURRENT_FILMS = 'CURRENT_FILMS';
exports.RECEIVE_NUMBER_OF_FILMS = 'RECEIVE_NUMBER_OF_FILMS';
exports.CURRENT_FILM = 'CURRENT_FILM';
var BASE_URL = "http://swapi.co/api/films/";
var FilmActions = (function (_super) {
    __extends(FilmActions, _super);
    function FilmActions(_http) {
        _super.call(this);
        this._http = _http;
    }
    FilmActions.prototype.fetchFilms = function () {
        var _this = this;
        return function (dispatch) {
            dispatch(_this.requestFilms());
            var sub = _this._http.get("" + BASE_URL)
                .map(function (result) { return result.json(); })
                .map(function (json) {
                dispatch(_this.receiveFilms(json.results));
                dispatch(_this.receiveNumberOfFilms(json.count));
            })
                .subscribe(function (e) { return sub.unsubscribe(); });
        };
    };
    FilmActions.prototype.fetchFilm = function (index) {
        var _this = this;
        return function (dispatch) {
            dispatch(_this.requestFilm());
            var sub = _this._http.get("" + BASE_URL + (index + 1) + "/")
                .map(function (result) { return result.json(); })
                .map(function (json) {
                dispatch(_this.receiveFilm(json));
            })
                .subscribe(function (e) { return sub.unsubscribe(); });
        };
    };
    FilmActions.prototype.requestFilms = function () {
        return { type: exports.REQUEST_FILMS };
    };
    FilmActions.prototype.receiveFilms = function (films) {
        return {
            type: exports.RECEIVE_FILMS,
            films: films
        };
    };
    FilmActions.prototype.receiveNumberOfFilms = function (count) {
        return {
            type: exports.RECEIVE_NUMBER_OF_FILMS,
            count: count
        };
    };
    FilmActions.prototype.requestFilm = function () {
        return { type: exports.REQUEST_FILM };
    };
    FilmActions.prototype.receiveFilm = function (film) {
        return {
            type: exports.RECEIVE_FILM,
            film: film
        };
    };
    FilmActions.prototype.setCurrentFilm = function (currentIndex) {
        return {
            type: exports.CURRENT_FILM,
            currentIndex: currentIndex
        };
    };
    FilmActions = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FilmActions);
    return FilmActions;
})(angular2_redux_1.Actions);
exports.FilmActions = FilmActions;
//# sourceMappingURL=film-actions.js.map