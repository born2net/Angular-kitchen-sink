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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
require('rxjs/add/observable/from');
require('rxjs/add/observable/fromEvent');
require('rxjs/add/operator/buffer');
require('rxjs/add/operator/bufferCount');
require('rxjs/add/operator/delay');
require('rxjs/add/operator/throttleTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/do');
var Lib_1 = require("../../Lib");
var ForgotPass = (function () {
    function ForgotPass() {
        this.clickStream = new core_1.EventEmitter();
        this.disableButton = false;
        this.forgotPassInit();
    }
    ForgotPass.prototype.forgotPassInit = function () {
        var _this = this;
        var doubleClickStream = this.clickStream.buffer(this.clickStream.throttleTime(450)).map(function (e) {
            return e.length;
        }).filter(function (e) {
            Lib_1.Lib.log('total clicks ' + e);
            if (e == 2)
                _this.disableButton = true;
            return e == 2;
        }).delay(2000);
        doubleClickStream.subscribe(function (e) {
            Lib_1.Lib.log('double click');
            _this.disableButton = false;
        });
    };
    ForgotPass.prototype.onForgotPass = function (event) {
        this.clickStream.next('click');
    };
    ForgotPass = __decorate([
        core_1.Component({
            providers: [ForgotPass],
            selector: 'ForgotPass',
            template: "\n                <div>\n                  <form class=\"form-signin\" role=\"form\">\n                    <h2 class=\"form-signin-heading\"></h2>\n                    <button id=\"forgotPassButton\" [disabled]=\"disableButton\" (click)=\"onForgotPass($event)\" class=\"btn btn-lg btn-primary btn-block\">\n                      Forgot password\n                    </button>\n                    <hr class=\"hrThin\"/>\n                    <a [routerLink]=\"['/Login', {id: 'demo_user'}, 'Login']\">Back to login screen</a><br/>\n                    <small>(auto fill user by passing router args)</small>\n                    <div id=\"languageSelectionLogin\"></div>\n                  </form>\n                </div>\n                <!-- <a [routerLink]=\"['/App1']\">And back to Test1</a> -->\n                <br/>\n                <small>ForgotPass component and I am inside EntryPanel</small>",
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], ForgotPass);
    return ForgotPass;
}());
exports.ForgotPass = ForgotPass;
//# sourceMappingURL=ForgotPass.js.map