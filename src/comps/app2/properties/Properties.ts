import {Component, Injectable} from "angular2/core";
import {Consts} from "src/Conts";
import {ttt} from "../../ttt";

@Component({
    selector: 'Properties',
    template: `
                 <ul [ngSwitch]="value">
                  <li *ngSwitchWhen="1">is 1111111111111</li>
                  <li *ngSwitchWhen="2"><h1>dDDDD</h1>is 2dd</li>
                  <li *ngSwitchWhen="3">
                  <div style="height:  400px ;overflow-y: scroll">
                  <h1>3333333333333333333333333</h1>

                  </div>
                  </li>
                  <li *ngSwitchWhen="4">is 4</li>
                </ul>
                <button (click)="onClick()">Click me</button>
                <ng-content></ng-content>
              `
})

export class Properties {
    private value:any;
    public c:number;
    public u:number;

    constructor() {
        this.u = Math.random()
        console.log('prop is ' + this.u);
        this.value = 1;
        this.c = 1;
    }

    public onClick(){
        this.c++;
        this.value = this.c;
        console.log(this.c + ' ' + this.u)
    }

    ngOnDestroy() {
    }
}
