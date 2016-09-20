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
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
                ], FilmActions);
                return FilmActions;
                var _a;
            }(angular2_redux_util_1.Actions));
            exports_1("FilmActions", FilmActions);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDMvc3RhcndhcnMvYWN0aW9ucy9maWxtLWFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBS2EsYUFBYSxFQUNiLGFBQWEsRUFDYixZQUFZLEVBQ1osWUFBWSxFQUNaLGFBQWEsRUFDYix1QkFBdUIsRUFDdkIsWUFBWSxFQUVuQixRQUFROzs7Ozs7Ozs7Ozs7OztZQVJELDJCQUFBLGFBQWEsR0FBRyxlQUFlLENBQUEsQ0FBQztZQUNoQywyQkFBQSxhQUFhLEdBQUcsZUFBZSxDQUFBLENBQUM7WUFDaEMsMEJBQUEsWUFBWSxHQUFHLGNBQWMsQ0FBQSxDQUFDO1lBQzlCLDBCQUFBLFlBQVksR0FBRyxjQUFjLENBQUEsQ0FBQztZQUM5QiwyQkFBQSxhQUFhLEdBQUcsZUFBZSxDQUFBLENBQUM7WUFDaEMscUNBQUEsdUJBQXVCLEdBQUcseUJBQXlCLENBQUEsQ0FBQztZQUNwRCwwQkFBQSxZQUFZLEdBQUcsY0FBYyxDQUFBLENBQUM7WUFFckMsUUFBUSxHQUFHLDRCQUE0QixDQUFDO1lBRzlDO2dCQUFpQywrQkFBTztnQkFFcEMscUJBQW9CLEtBQVU7b0JBQzFCLGlCQUFPLENBQUM7b0JBRFEsVUFBSyxHQUFMLEtBQUssQ0FBSztnQkFFOUIsQ0FBQztnQkFFRCxnQ0FBVSxHQUFWO29CQUFBLGlCQVdDO29CQVZHLE1BQU0sQ0FBQyxVQUFDLFFBQVE7d0JBQ1osUUFBUSxDQUFDLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO3dCQUM5QixJQUFJLEdBQUcsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFHLFFBQVUsQ0FBQzs2QkFDbEMsR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFiLENBQWEsQ0FBQzs2QkFDNUIsR0FBRyxDQUFDLFVBQUEsSUFBSTs0QkFDTCxRQUFRLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs0QkFDMUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzt3QkFDcEQsQ0FBQyxDQUFDOzZCQUNELFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBRSxPQUFBLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO29CQUN6QyxDQUFDLENBQUM7Z0JBQ04sQ0FBQztnQkFFRCwrQkFBUyxHQUFULFVBQVUsS0FBSztvQkFBZixpQkFVQztvQkFURyxNQUFNLENBQUMsVUFBQyxRQUFRO3dCQUNaLFFBQVEsQ0FBQyxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQzt3QkFDN0IsSUFBSSxHQUFHLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBRyxRQUFRLElBQUcsS0FBSyxHQUFHLENBQUMsT0FBRyxDQUFDOzZCQUMvQyxHQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQWIsQ0FBYSxDQUFDOzZCQUM1QixHQUFHLENBQUMsVUFBQSxJQUFJOzRCQUNMLFFBQVEsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ3JDLENBQUMsQ0FBQzs2QkFDRCxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUUsT0FBQSxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztvQkFDekMsQ0FBQyxDQUFDO2dCQUNOLENBQUM7Z0JBRUQsa0NBQVksR0FBWjtvQkFDSSxNQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBRUQsa0NBQVksR0FBWixVQUFhLEtBQUs7b0JBQ2QsTUFBTSxDQUFDO3dCQUNILElBQUksRUFBRSxhQUFhO3dCQUNuQixPQUFBLEtBQUs7cUJBQ1IsQ0FBQTtnQkFDTCxDQUFDO2dCQUVELDBDQUFvQixHQUFwQixVQUFxQixLQUFLO29CQUN0QixNQUFNLENBQUM7d0JBQ0gsSUFBSSxFQUFFLHVCQUF1Qjt3QkFDN0IsT0FBQSxLQUFLO3FCQUNSLENBQUE7Z0JBQ0wsQ0FBQztnQkFFRCxpQ0FBVyxHQUFYO29CQUNJLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUMsQ0FBQztnQkFDaEMsQ0FBQztnQkFFRCxpQ0FBVyxHQUFYLFVBQVksSUFBSTtvQkFDWixNQUFNLENBQUM7d0JBQ0gsSUFBSSxFQUFFLFlBQVk7d0JBQ2xCLE1BQUEsSUFBSTtxQkFDUCxDQUFBO2dCQUNMLENBQUM7Z0JBRUQsb0NBQWMsR0FBZCxVQUFlLFlBQVk7b0JBQ3ZCLE1BQU0sQ0FBQzt3QkFDSCxJQUFJLEVBQUUsWUFBWTt3QkFDbEIsY0FBQSxZQUFZO3FCQUNmLENBQUE7Z0JBQ0wsQ0FBQztnQkFsRUw7b0JBQUMsaUJBQVUsRUFBRTs7K0JBQUE7Z0JBbUViLGtCQUFDOztZQUFELENBbEVBLEFBa0VDLENBbEVnQyw2QkFBTyxHQWtFdkM7WUFsRUQscUNBa0VDLENBQUEiLCJmaWxlIjoiY29tcHMvYXBwMy9zdGFyd2Fycy9hY3Rpb25zL2ZpbG0tYWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0FjdGlvbnN9IGZyb20gXCJhbmd1bGFyMi1yZWR1eC11dGlsXCI7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRVFVRVNUX0ZJTE1TID0gJ1JFUVVFU1RfRklMTVMnO1xyXG5leHBvcnQgY29uc3QgUkVDRUlWRV9GSUxNUyA9ICdSRUNFSVZFX0ZJTE1TJztcclxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfRklMTSA9ICdSRVFVRVNUX0ZJTE0nO1xyXG5leHBvcnQgY29uc3QgUkVDRUlWRV9GSUxNID0gJ1JFQ0VJVkVfRklMTSc7XHJcbmV4cG9ydCBjb25zdCBDVVJSRU5UX0ZJTE1TID0gJ0NVUlJFTlRfRklMTVMnO1xyXG5leHBvcnQgY29uc3QgUkVDRUlWRV9OVU1CRVJfT0ZfRklMTVMgPSAnUkVDRUlWRV9OVU1CRVJfT0ZfRklMTVMnO1xyXG5leHBvcnQgY29uc3QgQ1VSUkVOVF9GSUxNID0gJ0NVUlJFTlRfRklMTSc7XHJcblxyXG5jb25zdCBCQVNFX1VSTCA9IFwiaHR0cDovL3N3YXBpLmNvL2FwaS9maWxtcy9cIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZpbG1BY3Rpb25zIGV4dGVuZHMgQWN0aW9ucyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDpIdHRwKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaEZpbG1zKCkge1xyXG4gICAgICAgIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2godGhpcy5yZXF1ZXN0RmlsbXMoKSk7XHJcbiAgICAgICAgICAgIHZhciBzdWIgPSB0aGlzLl9odHRwLmdldChgJHtCQVNFX1VSTH1gKVxyXG4gICAgICAgICAgICAgICAgLm1hcChyZXN1bHQgPT4gcmVzdWx0Lmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC5tYXAoanNvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2godGhpcy5yZWNlaXZlRmlsbXMoanNvbi5yZXN1bHRzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2godGhpcy5yZWNlaXZlTnVtYmVyT2ZGaWxtcyhqc29uLmNvdW50KSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShlPT5zdWIudW5zdWJzY3JpYmUoKSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaEZpbG0oaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHRoaXMucmVxdWVzdEZpbG0oKSk7XHJcbiAgICAgICAgICAgIHZhciBzdWIgPSB0aGlzLl9odHRwLmdldChgJHtCQVNFX1VSTH0ke2luZGV4ICsgMX0vYClcclxuICAgICAgICAgICAgICAgIC5tYXAocmVzdWx0ID0+IHJlc3VsdC5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAubWFwKGpzb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHRoaXMucmVjZWl2ZUZpbG0oanNvbikpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZT0+c3ViLnVuc3Vic2NyaWJlKCkpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmVxdWVzdEZpbG1zKCkge1xyXG4gICAgICAgIHJldHVybiB7dHlwZTogUkVRVUVTVF9GSUxNU307XHJcbiAgICB9XHJcblxyXG4gICAgcmVjZWl2ZUZpbG1zKGZpbG1zKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdHlwZTogUkVDRUlWRV9GSUxNUyxcclxuICAgICAgICAgICAgZmlsbXNcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVjZWl2ZU51bWJlck9mRmlsbXMoY291bnQpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0eXBlOiBSRUNFSVZFX05VTUJFUl9PRl9GSUxNUyxcclxuICAgICAgICAgICAgY291bnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVxdWVzdEZpbG0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHt0eXBlOiBSRVFVRVNUX0ZJTE19O1xyXG4gICAgfVxyXG5cclxuICAgIHJlY2VpdmVGaWxtKGZpbG0pIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0eXBlOiBSRUNFSVZFX0ZJTE0sXHJcbiAgICAgICAgICAgIGZpbG1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q3VycmVudEZpbG0oY3VycmVudEluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdHlwZTogQ1VSUkVOVF9GSUxNLFxyXG4gICAgICAgICAgICBjdXJyZW50SW5kZXhcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
