///<reference path="../../../typings/app.d.ts" />

import {Component, Injectable} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouterLink} from 'angular2/router';
import {CommBroker} from "../../services/CommBroker";
import {Consts} from "../../Conts";
import {Router} from "angular2/router";
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/bufferCount';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/range';
import {Subject} from "rxjs/subject";
import {BehaviorSubject} from "rxjs/subject/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import {Lib} from "../../Lib";


export class User {
    public id:string;
    public name:string;
    public pass:string;
    public gender:string;

    constructor(obj?:any) {
        this.id = obj && obj.id || Math.random();
        this.name = obj && obj.name || 'anonymous';
        this.pass = obj && obj.pass || '';
        this.gender = obj && obj.gender || 'male';
    }
}

@Injectable()
@Component({
    selector: 'LoginPanel',
    directives: [ROUTER_DIRECTIVES, RouterLink],
    template: `
                <div id="appLogin" style="">
                  <form class="form-signin" role="form">
                    <h2 class="form-signin-heading"></h2>
                    <input id="userName" type="text" value="{{user}}" class="form-control" data-localize="username" placeholder="Type anything" required autofocus>
                    <input id="userPass" type="password" value="{{pass}}" class="form-control" data-localize="password" placeholder="Type anything" required>
                    <label class="checkbox">
                      <input id="rememberMe" type="checkbox" checked value="remember-me">
                      <span data-localize="rememberMe"> Remember me </span></label>
                    <button id="loginButton" (click)="onLogin($event)" class="btn btn-lg btn-primary btn-block" type="submit">
                      Sign in
                    </button>
                    <hr class="hrThin"/>
                    <a [routerLink]="['/ForgotPass', 'ForgotPass']">Forgot password</a>
                    <div id="languageSelectionLogin"></div>
                  </form>
                </div>

                <!-- <a [routerLink]="['/EntryPanelNoId', {id: 123}, 'Route4']">To forgot pass</a> -->
                <!-- <a [routerLink]="['/App1']">Direct to App1</a><br/> -->
                <!-- <a [routerLink]="['/App2']">Direct to App2</a><br/> -->
                <small>I am Login component and I am inside EntryPanel</small>`
})
export class LoginPanel {
    private user:string;
    private pass:string;
    private myRouter:Router;

    constructor(router:Router, commBroker:CommBroker) {
        this.myRouter = router;
        var user = commBroker.getValue(Consts.Values().USER_NAME);
        this.user = user || '';
        this.pass = user || '';

        //this.exampleRx1();
        //this.exampleRx2();
    }

    /**
     * An example of using RX Subject
     create a Subject (BehaviorSubject means we will can send and listen to streams on the same object
     nd since it's Behavior, attached subscribers will always receive current userr.
     Null means we start empty
     **/
    exampleRx1() {
        let userStream:BehaviorSubject<User> = new BehaviorSubject<User>(null);
        userStream.do((e)=>console.log(e));

        userStream.filter((user:User) => {
            return user && user.gender == 'male';
        }).subscribe((user:User) => {
            console.log('male gender ' + user.name);
        });

        userStream.subscribe((user:User) => {
            if (user == null)
                return;
            console.log(`user registered ${user.name} ${user.id}`)
        });

        userStream.next(new User({name: 'Sean'}));
        userStream.next(new User({name: 'John'}));
        userStream.next(new User({name: 'Nelly', pass: 'aaa', gender: 'female'}))
        userStream.next(new User({name: 'Nadine', pass: 'bbb', gender: 'female'}))

        // Create a stream of all users.
        // The type User[] is the same as Array<User>. Another way of writing the same thing
        // would be: Rx.Observable<Array<User>>. When we define the type of messages to be
        // Rx.Observable<User[]> we mean that this stream emits an Array (of Users), not
        // individual User.
        let usersStream:Observable<User[]> = new Observable<User[]>(observer => {
            console.log(observer)
        });
        usersStream.subscribe(e=>console.log(e))

        var source = userStream.scan(function (acc:any, x:User) {
            return acc + x;
        }, []);
        source.subscribe(x=>console.log(`scan ${x}`));
    }

    /**
     * In this example we push users into userStream1 and have it come out in userStream2
     * as userStream2 subscribes into userStream1 and userStream3 output
     **/
    exampleRx2() {

        let userStream1:Subject<User> = new Subject<User>(null);
        let userStream2:Subject<User> = new Subject<User>(null);

        userStream1.subscribe(userStream2);
        userStream2.subscribe((x)=> {
            console.log(x);
        });
        var userStream3:Observable<User> = Observable.create(function (observer) {
            observer.next(new User({name: 'Peggy', gender: 'female'}));
        });

        userStream1.next(new User({name: 'Sean'}));
        userStream1.next(new User({name: 'Larry'}));
        userStream3.subscribe(userStream2);

        var userObject:{ [key: string]: User } = {'new_user': new User()};
    }

    private onLogin(event) {
        console.log(`doing some fake async auth for ${this.user}`);
        bootbox.dialog({
            closeButton: false,
            title: "Please wait, Authenticating...",
            message: " "
        });
        setTimeout((e)=> {
            this.myRouter.navigate(['/AppManager']);
            bootbox.hideAll();
        }, 2000);
        event.preventDefault();
        return false;
    }

    public set loginName(name:string) {
        this.user = name;
    }

    toString() {
    }
}


