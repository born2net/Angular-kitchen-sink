/**
 * Created by Tareq Boulakjar. from angulartypescript.com
 */
import {Component} from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import {Progress} from './progress.directive';
import {Bar} from './bar.component';
import {Progressbar} from './progressbar.component';
/*Angular 2 Progressbar Example*/
@Component({
    selector: 'my-app',
    template:`
                <h4>Angular 2 Progressbar Example</h4>
                <progressbar class="progress-striped" value="55" type="warning" max="200">55%</progressbar>

                <hr/>
                <h4>Angular 2 Dynamic Progressbar Example</h4>
                <button type="button" class="btn btn-sm btn-default" (click)="generateNewProgressValues()">Generate New Values</button>

                <progressbar [animate]="false" [max]="max" [value]="currentValue">
                <span style="color:white; white-space:nowrap;">{{currentValue}} / {{max}}</span>
                </progressbar>

                <hr/>
                <h4>Angular 2 Progressbar With Animation Example</h4>
                <progressbar [animate]="true" [value]="currentValue" [type]="type"><b>{{currentValue}}%</b></progressbar>

                <hr/>
                <h4>Angular 2 Stacked Progressbar Example</h4>
                <h3>
                  <button type="button" class="btn btn-sm btn-primary" (click)="generateStackedValues()">Stacked Values</button>
                </h3>
                <bs-progress>
                  <bar *ngFor="#stacked of stackedValues" [value]="stacked.value" [type]="stacked?.type">
                    <span [hidden]="stacked.value < 5">{{stacked?.value}}%</span>
                  </bar>
                </bs-progress>
             `,
    directives: [Progress, Bar, Progressbar,CORE_DIRECTIVES],
})
export class Angular2Progressbar {

    public max:number = 200;
    public currentValue:number;
    public type:string;
    
    public stackedValues:any[] = [];

    constructor() {
        this.generateNewProgressValues();
        this.generateStackedValues();
    }

    private generateNewProgressValues() {
        let value = Math.floor((Math.random() * 100) + 1);
        let type:string;

        if (value < 20) {
            type = 'success';
        } else if (value < 40) {
            type = 'info';
        } else if (value < 60) {
            type = 'warning';
        } else {
            type = 'danger';
        }
        this.currentValue = value;
        this.type = type;
    };

    private generateStackedValues() {
        let types = ['success', 'info', 'warning', 'danger'];

        this.stackedValues = [];
        let total = 0;
        for (let i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
            let index = Math.floor((Math.random() * 4));
            let value = Math.floor((Math.random() * 30) + 1);
            total += value;
            this.stackedValues.push({
                value: value,
                max: value,
                type: types[index]
            });
        }
    };
}