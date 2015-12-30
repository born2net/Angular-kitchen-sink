import {Component, Injectable} from "angular2/core";
import {Consts} from "src/Conts";
import {CommBroker} from "../../../services/CommBroker";

@Component({
    selector: 'Properties',
    template: `
                <h1>Properties</h1>
                 <ul [ngSwitch]="value">
                  <li *ngSwitchWhen="1"><h1>Notes 1</h1></li>
                  <li *ngSwitchWhen="2"><h1>Notes 2</h1></li>
                  <li *ngSwitchWhen="3"><h1>Notes 3</h1></li>
                  <li *ngSwitchWhen="4"><h1>Notes 4</h1></li>
                </ul>
                <ng-content></ng-content>
              `
})

export class Properties {
    private value:any;

    constructor(private commBroker:CommBroker) {
        this.value = 1;
        this.commBroker.setService(Consts.Services().Properties, this);
    }

    public setPropeView(value) {
        this.value = value;
    }

    ngOnDestroy() {
    }
}
