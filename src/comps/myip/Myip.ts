import {Component} from "@angular/core";
import {Consts} from "../../Conts";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {AsyncSubject} from "rxjs/AsyncSubject";
import {Http} from '@angular/http';

interface IIpAddress {
    ip:string;
}

@Component({
    selector: 'MyIp',
    template: `
                <h3>Your ip address is: {{ipAddress}}</h3>
                <small>I am MyIp component</small>
                <!--
                 This is an example of providing a default template only if one is not provided by consumer of
                 the component's ng-content template 
                -->
                total children in ng-content: {{contentWrap.childNodes.length}}
                <div #contentWrap><ng-content></ng-content></div>
                <div class="timer" *ngIf="contentWrap.childNodes.length === 1">
                  <div class="time"> TOTAL {{contentWrap.childNodes.length}}</div></div>`
})
export class MyIp {
    private ipAddress:string;
    private subject:AsyncSubject<IIpAddress>;

    constructor(private http:Http) {

        // Demonstrates AsyncSubject where the first call will go out to server to grab your
        // ip, but 2nd call (via timeout) will grab it directly from the Subject never needing
        // to hit the server a second time (well unless this whole component gets re-instantiated that is)
        this.getMyIp('https://secure.digitalsignage.com/getIp').subscribe((result) => {
            this.ipAddress = JSON.parse(result._body).ip;
        });

        setTimeout(e=> {
            this.getMyIp('https://secure.digitalsignage.com/getIp').subscribe(result=> {
                this.ipAddress = JSON.parse(result._body).ip;
            });
        }, 2000)
    }

    /**
     Using getMyIp we take advantage of AsyncSubject to retrieve data from server only once
     as your ip does noy change per session. AsyncSubject is kind of like a Promise as it resolves
     once and remembers and emits its last value
     **/
    getMyIp(url) {
        var self = this;
        return Observable.create((observer) => {
            if (!this.subject) {
                this.subject = new AsyncSubject<IIpAddress>();
                self.http.get(url).subscribe((this.subject) as any);
            }
            return this.subject.subscribe(observer);
        });
    }
}

