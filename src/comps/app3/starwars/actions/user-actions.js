"use strict";
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
}(angular2_redux_util_1.Actions));
exports.UserActions = UserActions;
//# sourceMappingURL=user-actions.js.map