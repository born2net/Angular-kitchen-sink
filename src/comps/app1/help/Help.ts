import {Component} from "angular2/core";
import {Contributors} from "./contributors/contributors";
import {RefreshTheme} from "../../../styles/RefreshTheme";
import {Alert, Rating} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    selector: 'Help',
    providers: [Contributors],
    directives: [Alert, Rating],
    template: ` <small>I am Help component and using <a href="https://github.com/valor-software/ng2-bootstrap" target="_blank">ng2-bootstrap</a></small>
                <br/>
                <alert type="info">Welcome to Angular2 Bootstrap starter pack!</alert>
                <rating [(ngModel)]="rate" [max]="max" [readonly]="isReadonly" [titles]="['one','two','three']" ></rating>
                <ng-content></ng-content>
                `
})

export class Help extends RefreshTheme {
    constructor(contributors:Contributors) {
        super();
    }
}
