System.register(["@angular/http", "@angular/core", "angular2-redux-util", 'rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
    var http_1, core_1, angular2_redux_util_1;
    var REQUEST_FILMS, RECEIVE_FILMS, REQUEST_FILM, RECEIVE_FILM, CURRENT_FILMS, RECEIVE_NUMBER_OF_FILMS, CURRENT_FILM, BASE_URL, FilmActions;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_redux_util_1_1) {
                angular2_redux_util_1 = angular2_redux_util_1_1;
            },
            function (_1) {}],
        execute: function() {
            exports_1("REQUEST_FILMS", REQUEST_FILMS = 'REQUEST_FILMS');
            exports_1("RECEIVE_FILMS", RECEIVE_FILMS = 'RECEIVE_FILMS');
            exports_1("REQUEST_FILM", REQUEST_FILM = 'REQUEST_FILM');
            exports_1("RECEIVE_FILM", RECEIVE_FILM = 'RECEIVE_FILM');
            exports_1("CURRENT_FILMS", CURRENT_FILMS = 'CURRENT_FILMS');
            exports_1("RECEIVE_NUMBER_OF_FILMS", RECEIVE_NUMBER_OF_FILMS = 'RECEIVE_NUMBER_OF_FILMS');
            exports_1("CURRENT_FILM", CURRENT_FILM = 'CURRENT_FILM');
            BASE_URL = "http://swapi.co/api/films/";
            FilmActions = (function (_super) {
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
                    return { type: REQUEST_FILMS };
                };
                FilmActions.prototype.receiveFilms = function (films) {
                    return {
                        type: RECEIVE_FILMS,
                        films: films
                    };
                };
                FilmActions.prototype.receiveNumberOfFilms = function (count) {
                    return {
                        type: RECEIVE_NUMBER_OF_FILMS,
                        count: count
                    };
                };
                FilmActions.prototype.requestFilm = function () {
                    return { type: REQUEST_FILM };
                };
                FilmActions.prototype.receiveFilm = function (film) {
                    return {
                        type: RECEIVE_FILM,
                        film: film
                    };
                };
                FilmActions.prototype.setCurrentFilm = function (currentIndex) {
                    return {
                        type: CURRENT_FILM,
                        currentIndex: currentIndex
                    };
                };
                FilmActions = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], FilmActions);
                return FilmActions;
            }(angular2_redux_util_1.Actions));
            exports_1("FilmActions", FilmActions);
        }
    }
});
