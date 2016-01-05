import {Component} from "angular2/core";
import {Consts} from "../../../Conts";
import {Contributors} from "./contributors/contributors";
import {RefreshTheme} from "../../../styles/RefreshTheme";

@Component({
    selector: 'Help',
    providers: [Contributors],
    template: ` <small>I am Help component</small>
                <ng-content></ng-content>
                `
})

export class Help extends RefreshTheme {
    constructor(contributors:Contributors) {
        super();
    }
}
