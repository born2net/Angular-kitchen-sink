import {Component, Injectable} from 'angular2/core';
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/do';

export interface IMessage {
    fromInstance: any,
    event: string,
    context: any,
    message: any
}

// create an alias type just so it's easier to associate
type ObservableMessage = Observable<IMessage>;
type ObservableMessages = Observable<Array<ObservableMessage>>;
type streamObserver = Observer<IMessage>;

@Injectable()
export class CommBroker {
    private stream:streamObserver; // we push messages into the observer stream
    private channel:ObservableMessage; // we operate (i.e.: filter) and subscribe (listen) on the observable channel that's linked to the stream
    private intervalHandler:any;
    private bufferedMessages:IMessage[];
    private services:string[];
    private randomName:number = Math.random();

    constructor() {
        var self = this;
        self.bufferedMessages = [];
        self.services = [];
        self.channel = new Observable(observer => {
            self.stream = observer;
            /** possible operations on stream are: **/
            //self.stream.next(msg);
            //observer.error('boom');
            //observer.complete('done');
        }).share();

        // this is the only global member we expose
        document['commBroker'] = this;
    }

    private examples() {
        var self = this;

        self.onEvent('click').subscribe((e:IMessage)=> {
            console.log('I heard a click');
        });

        // won't work, event != jump
        self.onEvent('jump').subscribe((e:IMessage)=> {
            console.log('I heard a click');
        });

        // wont work, this != self
        self.onInstance(null).subscribe((e:IMessage)=> {
            console.log('XYZ#$%^& should never come here...');
        });

        self.onInstanceAndEvent(this, 'click').subscribe((e:IMessage)=> {
            console.log(`I heard you commBroker on event click ` + e.message);
        });

        self.onInstanceAndEvent(self, 'click').first().subscribe((e:IMessage)=> {
            var commBroker:CommBroker = e.fromInstance;
            console.log(`just one ${e.event} from ${commBroker.toString()}`);
        });

        self.onInstanceAndEvent(self, 'click').subscribe((e:IMessage) => {
            console.log(`handle success: rx ${e.event}`)
        }, (e) => {
            console.log(`handle error ${e}`)
        }, () => {
            console.log(`handle complete`)
        });

        // before stream ready
        var msg1:IMessage = {
            fromInstance: self,
            event: 'click',
            context: 1,
            message: 'before stream is ready'
        };
        self.fire(msg1);

        // after stream ready
        setTimeout(function () {
            var msg2:IMessage = {
                fromInstance: self,
                event: 'click',
                context: 2,
                message: 'after stream is ready'
            };
            self.fire(msg2);
        }, 2000)
    }

    public toString() {
        return 'CommBroker ' + this.randomName;
    }

    /**
     With fire we push a stream of IMessages into our channel. However to prevent racing condition
     since 'self.channel = new Observable(observer => {....' at the top of CommBroker is an async operation,
     we must buffer all incoming messages until our stream is ready, once it is, we begin pushing all
     buffered messages down the pipe, after we are done, we no longer need to buffer incoming messages
     as the stream is now open.
     @method fire
     @params IMessage
     **/
    public fire(iMessage:IMessage):void {
        var self = this;
        if (self.stream != undefined) {
            self.stream.next(iMessage);
            return;
        }

        self.bufferedMessages.push(iMessage)

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
        }, 500)
    }

    public onEvent(event:string) {
        var self = this;
        return self.channel.filter((e)=> {
            if (e.event == event) {
                return true;
            } else {
                return false;
            }
        })
    }

    public onInstance(instance:any) {
        var self = this;
        return self.channel.filter((e)=> {
            if (e.fromInstance == instance) {
                return true;
            } else {
                return false;
            }
        })
    }

    public onInstanceAndEvent(instance:any, event:string) {
        var self = this;
        return self.channel.filter((e)=> {
            if (e.fromInstance == instance && e.event == event) {
                return true;
            } else {
                return false;
            }
        })
    }

    /**
     Register a service  that others can query.
     @method setService
     @param {String} i_name
     @param {Object} i_service
     @return none
     **/
    setService(i_name, i_service) {
        this.services[i_name] = i_service;
        //this.fire(Backbone.EVENTS['SERVICE_REGISTERED'], this, null, {name: i_name, service: i_service})
    }

    /**
     Get a registered service.
     @method getService
     @param {String} i_name
     @return {Object} services member
     **/
    getService(i_name):any {
        if (i_name == undefined) {
            //log('cant get set undefined service ' + i_name);
            return undefined;
        }
        if (this.services[i_name]) {
            return this.services[i_name]
        } else {
            return undefined;
        }
    }

    /**
     Expose all services and data members.
     @method getAllServices
     @return {Object} services
     **/
    getAllServices() {
        return this.services;
    }

    /**
     Clear all current registered services
     @method clearServices
     **/
    clearServices() {
        var self = this;
        // delete self.services;
        self.services = undefined;
    }

    /**
     Register a data member that others can query.
     @method setValue
     @param {String} i_name
     @param {Object} i_value
     @param {Event} i_fireEvent
     @return none
     **/
    setValue(i_name:any, i_value:any, i_fireEvent?:string):void {
        var self = this;
        this.services[i_name] = i_value;
        if (i_fireEvent) {
            var msg:IMessage = {
                fromInstance: self,
                event: i_fireEvent,
                context: null,
                message: {name: i_name, value: i_value}
            };
            self.fire(msg);
        }
    }

    /**
     Get a registered data member.
     @method getValue
     @param {String} i_name
     @return {Object} m_services member
     **/
    getValue(i_name):any {
        if (this.services[i_name]) {
            return this.services[i_name]
        } else {
            return undefined;
        }
    }

}
