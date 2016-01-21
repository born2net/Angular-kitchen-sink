///<reference path="../../../../typings/app.d.ts"/>

import {Component, Injectable} from "angular2/core";
import {Consts} from "../../../../src/Conts";
import {CommBroker} from "../../../services/CommBroker";
import {Notes1Props} from "../notes/Notes1Props";

@Component({
    selector: 'Properties',
    directives: [Notes1Props],
    template: `
                <h4>Properties</h4>
                <hr/>
                 <ul [ngSwitch]="value">
                  <li *ngSwitchWhen="'notes1'">
                    <Notes1Props></Notes1Props>
                  </li>
                  <li *ngSwitchWhen="'notes2'"><h1>Notes 2</h1></li>
                  <li *ngSwitchWhen="'notes3'"><h1>Notes 3</h1></li>
                  <li *ngSwitchWhen="'notes4'"><h1>Notes 4</h1></li>
                  <li *ngSwitchWhen="'notes5'"><h1>Notes 5</h1></li>
                  <li *ngSwitchWhen="'Digg'"><h1>Digg</h1></li>
                  <li *ngSwitchWhen="'Weather'"><h1>Weather</h1></li>
                  <li *ngSwitchWhen="'Contact'"><h1>Contact</h1></li>
                  <li *ngSwitchWhen="'Logout'"><h1>Logout</h1></li>
                </ul>
                <ng-content></ng-content>
              `
})

export class Properties {
    private value:string;

    constructor(private commBroker:CommBroker) {
        this.commBroker.setService(Consts.Services().Properties, this);
    }

    public setPropView(value) {
        this.value = value;
    }

    ngOnDestroy() {
    }
}
