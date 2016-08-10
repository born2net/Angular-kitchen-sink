import {Component} from '@angular/core';
import {ForgotPass} from '../../../src/comps/entry/ForgotPass';
import {LoginPanel} from '../../../src/comps/entry/LoginPanel';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {CommBroker} from "../../services/CommBroker";
import {Consts} from "../../Conts";

@Component({
    providers: [LoginPanel],
    directives: [ROUTER_DIRECTIVES],
    selector: 'EntryPanel',
    template: `
                <small>I am entrypanel component and I am inside main App</small>
                <router-outlet></router-outlet>`
})
export class EntryPanel {
}