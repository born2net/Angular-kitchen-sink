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
var angular2_redux_util_1 = require("angular2-redux-util");
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
})(angular2_redux_util_1.Actions);
exports.FilmActions = FilmActions;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDMvc3RhcndhcnMvYWN0aW9ucy9maWxtLWFjdGlvbnMudHMiXSwibmFtZXMiOlsiRmlsbUFjdGlvbnMiLCJGaWxtQWN0aW9ucy5jb25zdHJ1Y3RvciIsIkZpbG1BY3Rpb25zLmZldGNoRmlsbXMiLCJGaWxtQWN0aW9ucy5mZXRjaEZpbG0iLCJGaWxtQWN0aW9ucy5yZXF1ZXN0RmlsbXMiLCJGaWxtQWN0aW9ucy5yZWNlaXZlRmlsbXMiLCJGaWxtQWN0aW9ucy5yZWNlaXZlTnVtYmVyT2ZGaWxtcyIsIkZpbG1BY3Rpb25zLnJlcXVlc3RGaWxtIiwiRmlsbUFjdGlvbnMucmVjZWl2ZUZpbG0iLCJGaWxtQWN0aW9ucy5zZXRDdXJyZW50RmlsbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBbUIsZUFBZSxDQUFDLENBQUE7QUFDbkMscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLG9DQUFzQixxQkFBcUIsQ0FBQyxDQUFBO0FBQzVDLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUVsQixxQkFBYSxHQUFHLGVBQWUsQ0FBQztBQUNoQyxxQkFBYSxHQUFHLGVBQWUsQ0FBQztBQUNoQyxvQkFBWSxHQUFHLGNBQWMsQ0FBQztBQUM5QixvQkFBWSxHQUFHLGNBQWMsQ0FBQztBQUM5QixxQkFBYSxHQUFHLGVBQWUsQ0FBQztBQUNoQywrQkFBdUIsR0FBRyx5QkFBeUIsQ0FBQztBQUNwRCxvQkFBWSxHQUFHLGNBQWMsQ0FBQztBQUUzQyxJQUFNLFFBQVEsR0FBRyw0QkFBNEIsQ0FBQztBQUU5QztJQUNpQ0EsK0JBQU9BO0lBRXBDQSxxQkFBb0JBLEtBQVVBO1FBQzFCQyxpQkFBT0EsQ0FBQ0E7UUFEUUEsVUFBS0EsR0FBTEEsS0FBS0EsQ0FBS0E7SUFFOUJBLENBQUNBO0lBRURELGdDQUFVQSxHQUFWQTtRQUFBRSxpQkFXQ0E7UUFWR0EsTUFBTUEsQ0FBQ0EsVUFBQ0EsUUFBUUE7WUFDWkEsUUFBUUEsQ0FBQ0EsS0FBSUEsQ0FBQ0Es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bUVDQSxFQWxFZ0MsNkJBQU8sRUFrRXZDO0FBbEVZLG1CQUFXLGNBa0V2QixDQUFBIiwiZmlsZSI6ImNvbXBzL2FwcDMvc3RhcndhcnMvYWN0aW9ucy9maWxtLWFjdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHB9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XHJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtBY3Rpb25zfSBmcm9tIFwiYW5ndWxhcjItcmVkdXgtdXRpbFwiO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVRVUVTVF9GSUxNUyA9ICdSRVFVRVNUX0ZJTE1TJztcclxuZXhwb3J0IGNvbnN0IFJFQ0VJVkVfRklMTVMgPSAnUkVDRUlWRV9GSUxNUyc7XHJcbmV4cG9ydCBjb25zdCBSRVFVRVNUX0ZJTE0gPSAnUkVRVUVTVF9GSUxNJztcclxuZXhwb3J0IGNvbnN0IFJFQ0VJVkVfRklMTSA9ICdSRUNFSVZFX0ZJTE0nO1xyXG5leHBvcnQgY29uc3QgQ1VSUkVOVF9GSUxNUyA9ICdDVVJSRU5UX0ZJTE1TJztcclxuZXhwb3J0IGNvbnN0IFJFQ0VJVkVfTlVNQkVSX09GX0ZJTE1TID0gJ1JFQ0VJVkVfTlVNQkVSX09GX0ZJTE1TJztcclxuZXhwb3J0IGNvbnN0IENVUlJFTlRfRklMTSA9ICdDVVJSRU5UX0ZJTE0nO1xyXG5cclxuY29uc3QgQkFTRV9VUkwgPSBcImh0dHA6Ly9zd2FwaS5jby9hcGkvZmlsbXMvXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGaWxtQWN0aW9ucyBleHRlbmRzIEFjdGlvbnMge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6SHR0cCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2hGaWxtcygpIHtcclxuICAgICAgICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHRoaXMucmVxdWVzdEZpbG1zKCkpO1xyXG4gICAgICAgICAgICB2YXIgc3ViID0gdGhpcy5faHR0cC5nZXQoYCR7QkFTRV9VUkx9YClcclxuICAgICAgICAgICAgICAgIC5tYXAocmVzdWx0ID0+IHJlc3VsdC5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAubWFwKGpzb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHRoaXMucmVjZWl2ZUZpbG1zKGpzb24ucmVzdWx0cykpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHRoaXMucmVjZWl2ZU51bWJlck9mRmlsbXMoanNvbi5jb3VudCkpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZT0+c3ViLnVuc3Vic2NyaWJlKCkpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2hGaWxtKGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh0aGlzLnJlcXVlc3RGaWxtKCkpO1xyXG4gICAgICAgICAgICB2YXIgc3ViID0gdGhpcy5faHR0cC5nZXQoYCR7QkFTRV9VUkx9JHtpbmRleCArIDF9L2ApXHJcbiAgICAgICAgICAgICAgICAubWFwKHJlc3VsdCA9PiByZXN1bHQuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLm1hcChqc29uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh0aGlzLnJlY2VpdmVGaWxtKGpzb24pKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGU9PnN1Yi51bnN1YnNjcmliZSgpKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlcXVlc3RGaWxtcygpIHtcclxuICAgICAgICByZXR1cm4ge3R5cGU6IFJFUVVFU1RfRklMTVN9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlY2VpdmVGaWxtcyhmaWxtcykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFQ0VJVkVfRklMTVMsXHJcbiAgICAgICAgICAgIGZpbG1zXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlY2VpdmVOdW1iZXJPZkZpbG1zKGNvdW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdHlwZTogUkVDRUlWRV9OVU1CRVJfT0ZfRklMTVMsXHJcbiAgICAgICAgICAgIGNvdW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlcXVlc3RGaWxtKCkge1xyXG4gICAgICAgIHJldHVybiB7dHlwZTogUkVRVUVTVF9GSUxNfTtcclxuICAgIH1cclxuXHJcbiAgICByZWNlaXZlRmlsbShmaWxtKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdHlwZTogUkVDRUlWRV9GSUxNLFxyXG4gICAgICAgICAgICBmaWxtXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldEN1cnJlbnRGaWxtKGN1cnJlbnRJbmRleCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHR5cGU6IENVUlJFTlRfRklMTSxcclxuICAgICAgICAgICAgY3VycmVudEluZGV4XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
