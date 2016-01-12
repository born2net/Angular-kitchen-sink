import {Component} from "angular2/core";
import {Consts} from "../../Conts";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {AsyncSubject} from "rxjs/subject/AsyncSubject";
import {Http} from 'angular2/http';
//import {JSONP_PROVIDERS, Jsonp} from 'angular2/http';

interface IIpAddress {
    ip: string;
}

@Component({
    selector: 'MyIp',
    //providers: [JSONP_PROVIDERS], // if you want to use Jsonp instead
    template: `
                <h3>Your ip address is: {{ipAddress}}</h3>
                <small>I am MyIp component</small>
                <ng-content></ng-content>
    `
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

