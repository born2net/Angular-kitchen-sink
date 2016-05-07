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
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/do');
require('rxjs/add/operator/filter');
require('rxjs/add/operator/share');
var Subject_1 = require("rxjs/Subject");
var CommBroker = (function () {
    function CommBroker() {
        this.randomName = Math.random();
        var self = this;
        self.services = [];
        self.streamMessages = new Subject_1.Subject();
        self.streamMessages.share();
        document['commBroker'] = this;
    }
    CommBroker.prototype.toString = function () {
        return 'CommBroker ' + this.randomName;
    };
    CommBroker.prototype.fire = function (iMessage) {
        var self = this;
        self.streamMessages.next(iMessage);
    };
    CommBroker.prototype.onEvent = function (event) {
        var self = this;
        return self.streamMessages.filter(function (e) {
            return e.event == event;
        });
    };
    CommBroker.prototype.onInstance = function (instance) {
        var self = this;
        return self.streamMessages.filter(function (e) {
            return e.fromInstance == instance;
        });
    };
    CommBroker.prototype.onInstanceAndEvent = function (instance, event) {
        var self = this;
        return self.streamMessages.filter(function (e) {
            return e.fromInstance == instance && e.event == event;
        });
    };
    CommBroker.prototype.setService = function (i_name, i_service) {
        this.services[i_name] = i_service;
    };
    CommBroker.prototype.getService = function (i_name) {
        if (i_name == undefined) {
            return undefined;
        }
        if (this.services[i_name]) {
            return this.services[i_name];
        }
        else {
            return undefined;
        }
    };
    CommBroker.prototype.getAllServices = function () {
        return this.services;
    };
    CommBroker.prototype.clearServices = function () {
        var self = this;
        self.services = undefined;
    };
    CommBroker.prototype.setValue = function (i_name, i_value, i_fireEvent) {
        var self = this;
        this.services[i_name] = i_value;
        if (i_fireEvent) {
            var msg = {
                fromInstance: self,
                event: i_fireEvent,
                context: null,
                message: { name: i_name, value: i_value }
            };
            self.fire(msg);
        }
    };
    CommBroker.prototype.getValue = function (i_name) {
        if (this.services[i_name]) {
            return this.services[i_name];
        }
        else {
            return undefined;
        }
    };
    CommBroker = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CommBroker);
    return CommBroker;
}());
exports.CommBroker = CommBroker;
//# sourceMappingURL=CommBroker.js.map