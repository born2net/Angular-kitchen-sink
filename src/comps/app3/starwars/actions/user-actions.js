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
exports.REQUEST_USERS = 'REQUEST_USERS';
exports.RECEIVE_USERS = 'RECEIVE_USERS';
exports.CURRENT_USER = 'CURRENT_USER';
exports.SET_FILM_FILTER = 'SET_FILM_FILTER';
var UserActions = (function (_super) {
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
        return { type: exports.REQUEST_USERS };
    };
    UserActions.prototype.receiveUsers = function (users) {
        return {
            type: exports.RECEIVE_USERS,
            users: users,
            updated: Date.now()
        };
    };
    UserActions.prototype.setCurrentUser = function (current) {
        return {
            type: exports.CURRENT_USER,
            current: current
        };
    };
    UserActions.prototype.setFilmFilter = function (filmFilter) {
        return {
            type: exports.SET_FILM_FILTER,
            filmFilter: filmFilter
        };
    };
    UserActions = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserActions);
    return UserActions;
})(angular2_redux_util_1.Actions);
exports.UserActions = UserActions;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDMvc3RhcndhcnMvYWN0aW9ucy91c2VyLWFjdGlvbnMudHMiXSwibmFtZXMiOlsiVXNlckFjdGlvbnMiLCJVc2VyQWN0aW9ucy5jb25zdHJ1Y3RvciIsIlVzZXJBY3Rpb25zLmZldGNoVXNlcnMiLCJVc2VyQWN0aW9ucy5yZXF1ZXN0VXNlcnMiLCJVc2VyQWN0aW9ucy5yZWNlaXZlVXNlcnMiLCJVc2VyQWN0aW9ucy5zZXRDdXJyZW50VXNlciIsIlVzZXJBY3Rpb25zLnNldEZpbG1GaWx0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUJBQW1CLGVBQWUsQ0FBQyxDQUFBO0FBQ25DLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxvQ0FBc0IscUJBQXFCLENBQUMsQ0FBQTtBQUM1QyxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFFbEIscUJBQWEsR0FBRyxlQUFlLENBQUM7QUFDaEMscUJBQWEsR0FBRyxlQUFlLENBQUM7QUFDaEMsb0JBQVksR0FBRyxjQUFjLENBQUM7QUFDOUIsdUJBQWUsR0FBRyxpQkFBaUIsQ0FBQztBQUVqRDtJQUNpQ0EsK0JBQU9BO0lBRXBDQSxxQkFBb0JBLEtBQVVBO1FBQzFCQyxpQkFBT0EsQ0FBQ0E7UUFEUUEsVUFBS0EsR0FBTEEsS0FBS0EsQ0FBS0E7SUFFOUJBLENBQUNBO0lBRURELGdDQUFVQSxHQUFWQTtRQUFBRSxpQkFVQ0E7UUFUR0EsSUFBTUEsUUFBUUEsR0FBVUEsNkJBQTZCQSxDQUFDQTtRQUN0REEsTUFBTUEsQ0FBQ0EsVUFBQ0EsUUFBUUE7WUFDWkEsUUFBUUEsQ0FBQ0EsS0FBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7WUFDOUJBLElBQUlBLEdBQUdBLEdBQUdBLEtBQUlBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEtBQUdBLFFBQVVBLENBQUNBO2lCQUNsQ0EsR0FBR0EsQ0FBQ0EsVUFBQUEsTUFBTUEsSUFBSUEsT0FBQUEsTUFBTUEsQ0FBQ0EsSUFBSUEsRUFBRUEsRUFBYkEsQ0FBYUEsQ0FBQ0E7aUJBQzVCQSxHQUFHQSxDQUFDQSxVQUFBQSxJQUFJQSxJQUFJQSxPQUFBQSxJQUFJQSxDQUFDQSxPQUFPQSxFQUFaQSxDQUFZQSxDQUFDQTtpQkFDekJBLEdBQUdBLENBQUNBLFVBQUFBLE1BQU1BLElBQUtBLE9BQUFBLFFBQVFBLENBQUNBLEtBQUlBLENBQUNBLFlBQVlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLEVBQW5DQSxDQUFtQ0EsQ0FBQ0E7aUJBQ25EQSxTQUFTQSxDQUFDQSxVQUFBQSxDQUFDQSxJQUFFQSxPQUFBQSxHQUFHQSxDQUFDQSxXQUFXQSxFQUFFQSxFQUFqQkEsQ0FBaUJBLENBQUNBLENBQUNBO1FBQ3pDQSxDQUFDQSxDQUFDQTtJQUNOQSxDQUFDQTtJQUVERixrQ0FBWUEsR0FBWkE7UUFDSUcsTUFBTUEsQ0FBQ0EsRUFBQ0EsSUFBSUEsRUFBRUEscUJBQWFBLEVBQUNBLENBQUNBO0lBQ2pDQSxDQUFDQTtJQUVESCxrQ0FBWUEsR0FBWkEsVUFBYUEsS0FBS0E7UUFDZEksTUFBTUEsQ0FBQ0E7WUFDSEEsSUFBSUEsRUFBRUEscUJBQWFBO1lBQ25CQSxPQUFBQSxLQUFLQTtZQUNMQSxPQUFPQSxFQUFFQSxJQUFJQSxDQUFDQSxHQUFHQSxFQUFFQTtTQUN0QkEsQ0FBQUE7SUFDTEEsQ0FBQ0E7SUFFREosb0NBQWNBLEdBQWRBLFVBQWVBLE9BQU9BO1FBQ2xCSyxNQUFNQSxDQUFDQTtZQUNIQSxJQUFJQSxFQUFFQSxvQkFBWUE7WUFDbEJBLFNBQUFBLE9BQU9BO1NBQ1ZBLENBQUFBO0lBQ0xBLENBQUNBO0lBRURMLG1DQUFhQSxHQUFiQSxVQUFjQSxVQUFVQTtRQUNwQk0sTUFBTUEsQ0FBQ0E7WUFDSEEsSUFBSUEsRUFBRUEsdUJBQWVBO1lBQ3JCQSxVQUFVQSxFQUFFQSxVQUFVQTtTQUN6QkEsQ0FBQUE7SUFDTEEsQ0FBQ0E7SUEzQ0xOO1FBQUNBLGlCQUFVQSxFQUFFQTs7b0JBNENaQTtJQUFEQSxrQkFBQ0E7QUFBREEsQ0E1Q0EsQUE0Q0NBLEVBM0NnQyw2QkFBTyxFQTJDdkM7QUEzQ1ksbUJBQVcsY0EyQ3ZCLENBQUEiLCJmaWxlIjoiY29tcHMvYXBwMy9zdGFyd2Fycy9hY3Rpb25zL3VzZXItYWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cH0gZnJvbSBcImFuZ3VsYXIyL2h0dHBcIjtcclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge0FjdGlvbnN9IGZyb20gXCJhbmd1bGFyMi1yZWR1eC11dGlsXCI7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRVFVRVNUX1VTRVJTID0gJ1JFUVVFU1RfVVNFUlMnO1xyXG5leHBvcnQgY29uc3QgUkVDRUlWRV9VU0VSUyA9ICdSRUNFSVZFX1VTRVJTJztcclxuZXhwb3J0IGNvbnN0IENVUlJFTlRfVVNFUiA9ICdDVVJSRU5UX1VTRVInO1xyXG5leHBvcnQgY29uc3QgU0VUX0ZJTE1fRklMVEVSID0gJ1NFVF9GSUxNX0ZJTFRFUic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyQWN0aW9ucyBleHRlbmRzIEFjdGlvbnMge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6SHR0cCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2hVc2VycygpIHtcclxuICAgICAgICBjb25zdCBCQVNFX1VSTDpzdHJpbmcgPSBcImh0dHA6Ly9zd2FwaS5jby9hcGkvcGVvcGxlL1wiO1xyXG4gICAgICAgIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2godGhpcy5yZXF1ZXN0VXNlcnMoKSk7XHJcbiAgICAgICAgICAgIHZhciBzdWIgPSB0aGlzLl9odHRwLmdldChgJHtCQVNFX1VSTH1gKVxyXG4gICAgICAgICAgICAgICAgLm1hcChyZXN1bHQgPT4gcmVzdWx0Lmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC5tYXAoanNvbiA9PiBqc29uLnJlc3VsdHMpXHJcbiAgICAgICAgICAgICAgICAubWFwKHJlc3VsdCA9PiAgZGlzcGF0Y2godGhpcy5yZWNlaXZlVXNlcnMocmVzdWx0KSkpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGU9PnN1Yi51bnN1YnNjcmliZSgpKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlcXVlc3RVc2VycygpIHtcclxuICAgICAgICByZXR1cm4ge3R5cGU6IFJFUVVFU1RfVVNFUlN9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlY2VpdmVVc2Vycyh1c2Vycykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFQ0VJVkVfVVNFUlMsXHJcbiAgICAgICAgICAgIHVzZXJzLFxyXG4gICAgICAgICAgICB1cGRhdGVkOiBEYXRlLm5vdygpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldEN1cnJlbnRVc2VyKGN1cnJlbnQpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0eXBlOiBDVVJSRU5UX1VTRVIsXHJcbiAgICAgICAgICAgIGN1cnJlbnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RmlsbUZpbHRlcihmaWxtRmlsdGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdHlwZTogU0VUX0ZJTE1fRklMVEVSLFxyXG4gICAgICAgICAgICBmaWxtRmlsdGVyOiBmaWxtRmlsdGVyXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
