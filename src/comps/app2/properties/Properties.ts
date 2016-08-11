import {Component, Injectable} from "@angular/core";
import {Consts} from "../../../../src/Conts";
import {CommBroker} from "../../../services/CommBroker";
import {Notes1Props} from "../notes/Notes1Props";

@Component({
    selector: 'Properties',
    template: `      
                <h4>Properties</h4>
                <hr/>
                 <ul [ngSwitch]="value">
                  <li *ngSwitchCase="'notes1'">
                    <Notes1Props></Notes1Props>
                  </li>
                  <li *ngSwitchCase="'notes2'"><h1>Notes 2</h1></li>
                  <li *ngSwitchCase="'notes3'"><h1>Notes 3</h1></li>
                  <li *ngSwitchCase="'notes4'"><h1>Notes 4</h1></li>
                  <li *ngSwitchCase="'notes5'"><h1>Notes 5</h1></li>
                  <li *ngSwitchCase="'Digg'"><h1>Digg</h1></li>
                  <li *ngSwitchCase="'Weather'"><h1>Weather</h1></li>
                  <li *ngSwitchCase="'Contact'"><h1>Contact</h1></li>
                  <li *ngSwitchCase="'Logout'"><h1>Logout</h1></li>
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
