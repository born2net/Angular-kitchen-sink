import {Component} from "@angular/core";
import {LoginPanel} from "../../../src/comps/entry/LoginPanel";

@Component({
    providers: [LoginPanel],
    selector: 'EntryPanel',
    template: `
                <small>I am entrypanel component and I am inside main App</small>
                <router-outlet></router-outlet>`
})
export class EntryPanel {
}