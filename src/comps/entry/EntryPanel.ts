import {Component} from '@angular/core';
import {ForgotPass} from '../../../src/comps/entry/ForgotPass';
import {LoginPanel} from '../../../src/comps/entry/LoginPanel';
import {ROUTER_DIRECTIVES, RouteSegment} from '@angular/router';
import {Routes} from '@angular/router';
import {CommBroker} from "../../services/CommBroker";
import {Consts} from "../../Conts";


@Routes([
    {path: '/Another2', component: LoginPanel},
    {path: '/Another3', component: ForgotPass},
    {path: '/ForgotPass', component: ForgotPass},
    {path: '/Login', component: LoginPanel}
])
@Component({
    providers: [LoginPanel],
    directives: [ROUTER_DIRECTIVES],
    selector: 'EntryPanel',
    template: `
                <!--<a [routerLink]="['/App1']">And back to Test1</a><br/>-->
                <!--<a [routerLink]="['/EntryPanel', {id: 1111}]">Login {{someId}}</a><br/>-->
                <!--<a [routerLink]="['/EntryPanel', {id: 1111}]">Forgot pass {{someId}}</a><br/>-->
                <small>I am entrypanel component and I am inside main App</small>
                <router-outlet></router-outlet>`
})
export class EntryPanel {
    constructor(params:RouteSegment, commBroker:CommBroker) {
        if (params.getParam('id') != null) {
            commBroker.setValue(Consts.Values().USER_NAME, params.getParam('id'));
        } else {
            commBroker.setValue(Consts.Values().USER_NAME, 'foo-bar');
        }

    }
}