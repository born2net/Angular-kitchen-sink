import {Component, Injectable} from 'angular2/core';
import {Observer} from "rxjs/Observer";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/share';
import {Subject} from "rxjs/Subject";

/**

 CommBroker is a React type Mediator injectable service provider

 Examples
 ============
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
 **/


export interface IMessage {
    fromInstance: any,
    event: string,
    context: any,
    message: any
}

// create an alias type just so it's easier to associate
type SubjectMessage = Subject<IMessage>;
type SubjectMessages = Subject<Array<SubjectMessage>>;

@Injectable()
export class CommBroker {
    private streamMessages:Subject<IMessage>;
    private services:string[];
    private randomName:number = Math.random();

    constructor() {
        var self = this;
        self.services = [];
        self.streamMessages = new Subject() as SubjectMessage;

        // we use share as a shorthand for publish() which converts cold to hot
        // observable as well as connect() / refCount()
        // when connected references moves from 0 to 1
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

    public toString() {
        return 'CommBroker ' + this.randomName; // to test uniqueness
    }

    /**
     With fire we push a stream of IMessages into our stream.
     @method fire
     @params IMessage
     **/
    public fire(iMessage:IMessage):void {
        var self = this;
        self.streamMessages.next(iMessage);
    }

    public onEvent(event:string) {
        var self = this;
        return self.streamMessages.filter((e)=> {
            return e.event == event;
        })
    }

    public onInstance(instance:any) {
        var self = this;
        return self.streamMessages.filter((e)=> {
            return e.fromInstance == instance;
        })
    }

    public onInstanceAndEvent(instance:any, event:string) {
        var self = this;
        return self.streamMessages.filter((e)=> {
            return e.fromInstance == instance && e.event == event
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
