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
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/do');
var AsyncSubject_1 = require("rxjs/AsyncSubject");
var http_1 = require('angular2/http');
var MyIp = (function () {
    function MyIp(http) {
        var _this = this;
        this.http = http;
        this.getMyIp('https://secure.digitalsignage.com/getIp').subscribe(function (result) {
            _this.ipAddress = JSON.parse(result._body).ip;
        });
        setTimeout(function (e) {
            _this.getMyIp('https://secure.digitalsignage.com/getIp').subscribe(function (result) {
                _this.ipAddress = JSON.parse(result._body).ip;
            });
        }, 2000);
    }
    MyIp.prototype.getMyIp = function (url) {
        var _this = this;
        var self = this;
        return Observable_1.Observable.create(function (observer) {
            if (!_this.subject) {
                _this.subject = new AsyncSubject_1.AsyncSubject();
                self.http.get(url).subscribe((_this.subject));
            }
            return _this.subject.subscribe(observer);
        });
    };
    MyIp = __decorate([
        core_1.Component({
            selector: 'MyIp',
            template: "\n                <h3>Your ip address is: {{ipAddress}}</h3>\n                <small>I am MyIp component</small>\n                <ng-content></ng-content>\n    "
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MyIp);
    return MyIp;
}());
exports.MyIp = MyIp;
//# sourceMappingURL=Myip.js.map