"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
require("rxjs/add/operator/mergeMap");
require("rxjs/add/operator/merge");
require("rxjs/add/operator/debounceTime");
exports.APP_INIT = 'APP_INIT';
exports.SERVERS_STATUS = 'SERVERS_STATUS';
var AuthState;
(function (AuthState) {
    AuthState[AuthState["FAIL"] = 0] = "FAIL";
    AuthState[AuthState["PASS"] = 1] = "PASS";
    AuthState[AuthState["TWO_FACTOR"] = 2] = "TWO_FACTOR";
})(AuthState = exports.AuthState || (exports.AuthState = {}));
var SampleActions = (function () {
    function SampleActions(offlineEnv, appStore, _http) {
        this.offlineEnv = offlineEnv;
        this.appStore = appStore;
        this._http = _http;
    }
    SampleActions.prototype.initAppDb = function () {
        return {
            type: exports.APP_INIT,
            value: Date.now()
        };
    };
    SampleActions.prototype.serverStatus = function () {
        var _this = this;
        return function (dispatch) {
            _this._http.get("https://secure.digitalsignage.com/msPingServersGuest")
                .map(function (result) {
                result = result.json();
                dispatch({
                    type: exports.SERVERS_STATUS,
                    payload: result
                });
            }).subscribe();
            return;
        };
    };
    return SampleActions;
}());
SampleActions = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject('OFFLINE_ENV'))
], SampleActions);
exports.SampleActions = SampleActions;
