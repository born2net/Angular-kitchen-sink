import {Component} from "@angular/core";
import {LoginPanel} from "../../../src/comps/entry/LoginPanel";
import {ROUTER_DIRECTIVES} from "@angular/router";

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