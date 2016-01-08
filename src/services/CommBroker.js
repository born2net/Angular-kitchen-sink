System.register(['angular2/core', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/do', 'rxjs/add/operator/filter', 'rxjs/add/operator/share', "rxjs/Subject"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Subject_1;
    var CommBroker;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            CommBroker = (function () {
                function CommBroker() {
                    this.randomName = Math.random();
                    var self = this;
                    self.services = [];
                    self.streamMessages = new Subject_1.Subject();
                    self.streamMessages.share();
                    // if we wish to use a unidirectional stream we can convert to Observable instead of subject
                    //self.stream = new Observable(trigger => {
                    //    trigger.next(msg);
                    //    trigger.error('boom');
                    //    trigger.complete('done');
                    //}).share();
                    // this is the only global member we expose
                    document['commBroker'] = this;
                }
                CommBroker.prototype.toString = function () {
                    return 'CommBroker ' + this.randomName; // to test uniqueness
                };
                /**
                 With fire we push a stream of IMessages into our stream.
                 @method fire
                 @params IMessage
                 **/
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
                /**
                 Register a service  that others can query.
                 @method setService
                 @param {String} i_name
                 @param {Object} i_service
                 @return none
                 **/
                CommBroker.prototype.setService = function (i_name, i_service) {
                    this.services[i_name] = i_service;
                };
                /**
                 Get a registered service.
                 @method getService
                 @param {String} i_name
                 @return {Object} services member
                 **/
                CommBroker.prototype.getService = function (i_name) {
                    if (i_name == undefined) {
                        //log('cant get set undefined service ' + i_name);
                        return undefined;
                    }
                    if (this.services[i_name]) {
                        return this.services[i_name];
                    }
                    else {
                        return undefined;
                    }
                };
                /**
                 Expose all services and data members.
                 @method getAllServices
                 @return {Object} services
                 **/
                CommBroker.prototype.getAllServices = function () {
                    return this.services;
                };
                /**
                 Clear all current registered services
                 @method clearServices
                 **/
                CommBroker.prototype.clearServices = function () {
                    var self = this;
                    // delete self.services;
                    self.services = undefined;
                };
                /**
                 Register a data member that others can query.
                 @method setValue
                 @param {String} i_name
                 @param {Object} i_value
                 @param {Event} i_fireEvent
                 @return none
                 **/
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
                /**
                 Get a registered data member.
                 @method getValue
                 @param {String} i_name
                 @return {Object} m_services member
                 **/
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
            })();
            exports_1("CommBroker", CommBroker);
        }
    }
});
//# sourceMappingURL=CommBroker.js.map