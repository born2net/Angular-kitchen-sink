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
    var REQUEST_USERS, RECEIVE_USERS, CURRENT_USER, SET_FILM_FILTER, UserActions;
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
            exports_1("REQUEST_USERS", REQUEST_USERS = 'REQUEST_USERS');
            exports_1("RECEIVE_USERS", RECEIVE_USERS = 'RECEIVE_USERS');
            exports_1("CURRENT_USER", CURRENT_USER = 'CURRENT_USER');
            exports_1("SET_FILM_FILTER", SET_FILM_FILTER = 'SET_FILM_FILTER');
            UserActions = (function (_super) {
                __extends(UserActions, _super);
                function UserActions(_http) {
                    _super.call(this);
                    this._http = _http;
                }
                UserActions.prototype.fetchUsers = function () {
                    var _this = this;
                    var BASE_URL = "http://swapi.co/api/people/";
                    return function (dispatch) {
                        dispatch(_this.requestUsers());
                        var sub = _this._http.get("" + BASE_URL)
                            .map(function (result) { return result.json(); })
                            .map(function (json) { return json.results; })
                            .map(function (result) { return dispatch(_this.receiveUsers(result)); })
                            .subscribe(function (e) { return sub.unsubscribe(); });
                    };
                };
                UserActions.prototype.requestUsers = function () {
                    return { type: REQUEST_USERS };
                };
                UserActions.prototype.receiveUsers = function (users) {
                    return {
                        type: RECEIVE_USERS,
                        users: users,
                        updated: Date.now()
                    };
                };
                UserActions.prototype.setCurrentUser = function (current) {
                    return {
                        type: CURRENT_USER,
                        current: current
                    };
                };
                UserActions.prototype.setFilmFilter = function (filmFilter) {
                    return {
                        type: SET_FILM_FILTER,
                        filmFilter: filmFilter
                    };
                };
                UserActions = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
                ], UserActions);
                return UserActions;
                var _a;
            }(angular2_redux_util_1.Actions));
            exports_1("UserActions", UserActions);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDMvc3RhcndhcnMvYWN0aW9ucy91c2VyLWFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBS2EsYUFBYSxFQUNiLGFBQWEsRUFDYixZQUFZLEVBQ1osZUFBZTs7Ozs7Ozs7Ozs7Ozs7WUFIZiwyQkFBQSxhQUFhLEdBQUcsZUFBZSxDQUFBLENBQUM7WUFDaEMsMkJBQUEsYUFBYSxHQUFHLGVBQWUsQ0FBQSxDQUFDO1lBQ2hDLDBCQUFBLFlBQVksR0FBRyxjQUFjLENBQUEsQ0FBQztZQUM5Qiw2QkFBQSxlQUFlLEdBQUcsaUJBQWlCLENBQUEsQ0FBQztZQUdqRDtnQkFBaUMsK0JBQU87Z0JBRXBDLHFCQUFvQixLQUFVO29CQUMxQixpQkFBTyxDQUFDO29CQURRLFVBQUssR0FBTCxLQUFLLENBQUs7Z0JBRTlCLENBQUM7Z0JBRUQsZ0NBQVUsR0FBVjtvQkFBQSxpQkFVQztvQkFURyxJQUFNLFFBQVEsR0FBVSw2QkFBNkIsQ0FBQztvQkFDdEQsTUFBTSxDQUFDLFVBQUMsUUFBUTt3QkFDWixRQUFRLENBQUMsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7d0JBQzlCLElBQUksR0FBRyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUcsUUFBVSxDQUFDOzZCQUNsQyxHQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQWIsQ0FBYSxDQUFDOzZCQUM1QixHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsT0FBTyxFQUFaLENBQVksQ0FBQzs2QkFDekIsR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFLLE9BQUEsUUFBUSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQzs2QkFDbkQsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFFLE9BQUEsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7b0JBQ3pDLENBQUMsQ0FBQztnQkFDTixDQUFDO2dCQUVELGtDQUFZLEdBQVo7b0JBQ0ksTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBQyxDQUFDO2dCQUNqQyxDQUFDO2dCQUVELGtDQUFZLEdBQVosVUFBYSxLQUFLO29CQUNkLE1BQU0sQ0FBQzt3QkFDSCxJQUFJLEVBQUUsYUFBYTt3QkFDbkIsT0FBQSxLQUFLO3dCQUNMLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO3FCQUN0QixDQUFBO2dCQUNMLENBQUM7Z0JBRUQsb0NBQWMsR0FBZCxVQUFlLE9BQU87b0JBQ2xCLE1BQU0sQ0FBQzt3QkFDSCxJQUFJLEVBQUUsWUFBWTt3QkFDbEIsU0FBQSxPQUFPO3FCQUNWLENBQUE7Z0JBQ0wsQ0FBQztnQkFFRCxtQ0FBYSxHQUFiLFVBQWMsVUFBVTtvQkFDcEIsTUFBTSxDQUFDO3dCQUNILElBQUksRUFBRSxlQUFlO3dCQUNyQixVQUFVLEVBQUUsVUFBVTtxQkFDekIsQ0FBQTtnQkFDTCxDQUFDO2dCQTNDTDtvQkFBQyxpQkFBVSxFQUFFOzsrQkFBQTtnQkE0Q2Isa0JBQUM7O1lBQUQsQ0EzQ0EsQUEyQ0MsQ0EzQ2dDLDZCQUFPLEdBMkN2QztZQTNDRCxxQ0EyQ0MsQ0FBQSIsImZpbGUiOiJjb21wcy9hcHAzL3N0YXJ3YXJzL2FjdGlvbnMvdXNlci1hY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7QWN0aW9uc30gZnJvbSBcImFuZ3VsYXIyLXJlZHV4LXV0aWxcIjtcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfVVNFUlMgPSAnUkVRVUVTVF9VU0VSUyc7XHJcbmV4cG9ydCBjb25zdCBSRUNFSVZFX1VTRVJTID0gJ1JFQ0VJVkVfVVNFUlMnO1xyXG5leHBvcnQgY29uc3QgQ1VSUkVOVF9VU0VSID0gJ0NVUlJFTlRfVVNFUic7XHJcbmV4cG9ydCBjb25zdCBTRVRfRklMTV9GSUxURVIgPSAnU0VUX0ZJTE1fRklMVEVSJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJBY3Rpb25zIGV4dGVuZHMgQWN0aW9ucyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDpIdHRwKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaFVzZXJzKCkge1xyXG4gICAgICAgIGNvbnN0IEJBU0VfVVJMOnN0cmluZyA9IFwiaHR0cDovL3N3YXBpLmNvL2FwaS9wZW9wbGUvXCI7XHJcbiAgICAgICAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh0aGlzLnJlcXVlc3RVc2VycygpKTtcclxuICAgICAgICAgICAgdmFyIHN1YiA9IHRoaXMuX2h0dHAuZ2V0KGAke0JBU0VfVVJMfWApXHJcbiAgICAgICAgICAgICAgICAubWFwKHJlc3VsdCA9PiByZXN1bHQuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLm1hcChqc29uID0+IGpzb24ucmVzdWx0cylcclxuICAgICAgICAgICAgICAgIC5tYXAocmVzdWx0ID0+ICBkaXNwYXRjaCh0aGlzLnJlY2VpdmVVc2VycyhyZXN1bHQpKSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZT0+c3ViLnVuc3Vic2NyaWJlKCkpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmVxdWVzdFVzZXJzKCkge1xyXG4gICAgICAgIHJldHVybiB7dHlwZTogUkVRVUVTVF9VU0VSU307XHJcbiAgICB9XHJcblxyXG4gICAgcmVjZWl2ZVVzZXJzKHVzZXJzKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdHlwZTogUkVDRUlWRV9VU0VSUyxcclxuICAgICAgICAgICAgdXNlcnMsXHJcbiAgICAgICAgICAgIHVwZGF0ZWQ6IERhdGUubm93KClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q3VycmVudFVzZXIoY3VycmVudCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHR5cGU6IENVUlJFTlRfVVNFUixcclxuICAgICAgICAgICAgY3VycmVudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRGaWxtRmlsdGVyKGZpbG1GaWx0ZXIpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0eXBlOiBTRVRfRklMTV9GSUxURVIsXHJcbiAgICAgICAgICAgIGZpbG1GaWx0ZXI6IGZpbG1GaWx0ZXJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
