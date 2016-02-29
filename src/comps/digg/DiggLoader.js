"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var http_1 = require("angular2/http");
require('rxjs/add/operator/map');
require('rxjs/add/observable/fromArray');
require('rxjs/add/operator/mergeMap');
require('rxjs/add/operator/retry');
var Observable_1 = require("rxjs/Observable");
var DiggLoader = (function () {
    function DiggLoader(http) {
        this.http = http;
        this.m_http = http;
    }
    DiggLoader.prototype.loadDiggs = function (filter, diggs) {
        filter = filter.toLowerCase();
        var s = this.m_http.get('https://secure.digitalsignage.com/Digg').retry(2);
        s.mergeMap(function (res) {
            var news = res.json();
            return Observable_1.Observable.fromArray(news);
        }).filter(function (data) {
            if (data.title.toLowerCase().indexOf(filter) > -1) {
                return true;
            }
        }).subscribe(function (v) {
            diggs.push(v);
        });
    };
    DiggLoader = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DiggLoader);
    return DiggLoader;
}());
exports.DiggLoader = DiggLoader;
//# sourceMappingURL=DiggLoader.js.map