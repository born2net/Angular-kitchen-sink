System.register(['angular2/core', "rxjs/Observable", 'rxjs/add/operator/share', 'rxjs/add/operator/catch', 'rxjs/add/operator/filter', 'rxjs/add/operator/first', 'rxjs/add/operator/do'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Observable_1;
    var CommBroker;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {}],
        execute: function() {
            CommBroker = (function () {
                function CommBroker() {
                    this.randomName = Math.random();
                    var self = this;
                    self.bufferedMessages = [];
                    self.services = [];
                    self.channel = new Observable_1.Observable(function (observer) {
                        self.stream = observer;
                        /** possible operations on stream are: **/
                        //self.stream.next(msg);
                        //observer.error('boom');
                        //observer.complete('done');
                    }).share();
                    // this is the only global member we expose
                    document['commBroker'] = this;
                }
                CommBroker.prototype.examples = function () {
                    var self = this;
                    self.onEvent('click').subscribe(function (e) {
                        console.log('I heard a click');
                    });
                    // won't work, event != jump
                    self.onEvent('jump').subscribe(function (e) {
                        console.log('I heard a click');
                    });
                    // wont work, this != self
                    self.onInstance(null).subscribe(function (e) {
                        console.log('XYZ#$%^& should never come here...');
                    });
                    self.onInstanceAndEvent(this, 'click').subscribe(function (e) {
                        console.log("I heard you commBroker on event click " + e.message);
                    });
                    self.onInstanceAndEvent(self, 'click').first().subscribe(function (e) {
                        var commBroker = e.fromInstance;
                        console.log("just one " + e.event + " from " + commBroker.toString());
                    });
                    self.onInstanceAndEvent(self, 'click').subscribe(function (e) {
                        console.log("handle success: rx " + e.event);
                    }, function (e) {
                        console.log("handle error " + e);
                    }, function () {
                        console.log("handle complete");
                    });
                    // before stream ready
                    var msg1 = {
                        fromInstance: self,
                        event: 'click',
                        context: 1,
                        message: 'before stream is ready'
                    };
                    self.fire(msg1);
                    // after stream ready
                    setTimeout(function () {
                        var msg2 = {
                            fromInstance: self,
                            event: 'click',
                            context: 2,
                            message: 'after stream is ready'
                        };
                        self.fire(msg2);
                    }, 2000);
                };
                CommBroker.prototype.toString = function () {
                    return 'CommBroker ' + this.randomName;
                };
                /**
                 With fire we push a stream of IMessages into our channel. However to prevent racing condition
                 since 'self.channel = new Observable(observer => {....' at the top of CommBroker is an async operation,
                 we must buffer all incoming messages until our stream is ready, once it is, we begin pushing all
                 buffered messages down the pipe, after we are done, we no longer need to buffer incoming messages
                 as the stream is now open.
                 @method fire
                 @params IMessage
                 **/
                CommBroker.prototype.fire = function (iMessage) {
                    var self = this;
                    if (self.stream != undefined) {
                        self.stream.next(iMessage);
                        return;
                    }
                    self.bufferedMessages.push(iMessage);
                    // if buffering is already taking place, no need for a new one
                    if (self.intervalHandler)
                        return;
                    // if stream is not available yet, buffer messages until it's ready
                    self.intervalHandler = setInterval(function () {
                        if (self.stream != undefined) {
                            window.clearInterval(self.intervalHandler);
                            for (var i = 0; i < self.bufferedMessages.length; i++) {
                                self.stream.next(iMessage);
                            }
                            self.bufferedMessages = undefined;
                        }
                    }, 500);
                };
                CommBroker.prototype.onEvent = function (event) {
                    var self = this;
                    return self.channel.filter(function (e) {
                        if (e.event == event) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    });
                };
                CommBroker.prototype.onInstance = function (instance) {
                    var self = this;
                    return self.channel.filter(function (e) {
                        if (e.fromInstance == instance) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    });
                };
                CommBroker.prototype.onInstanceAndEvent = function (instance, event) {
                    var self = this;
                    return self.channel.filter(function (e) {
                        if (e.fromInstance == instance && e.event == event) {
                            return true;
                        }
                        else {
                            return false;
                        }
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
                    //this.fire(Backbone.EVENTS['SERVICE_REGISTERED'], this, null, {name: i_name, service: i_service})
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