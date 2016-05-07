/**
 * Created by Tareq Boulakjar. from angulartypescript.com
 */
import {Component} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {DatePicker} from './datepicker';
import * as moment from 'moment';

/*Angular 2 Datepicker Example*/
@Component({
    selector: 'my-app',
    template:`
                <h3>Angular 2 Datepicker Example</h3>
                <div>
                  <p>The current selected date is: <span *ngIf="currentDate">{{ getDate() | date:'fullDate'}}</span></p>
                  <button type="button" class="btn btn-sm btn-info" (click)="setToday()">Set The Current Date (Today)</button>
                  <button type="button" class="btn btn-sm btn-default btn-info" (click)="setADate();">Set this date : 2020-02-02</button>

                  <div style="width: 350px;">
                    <datepicker [(ngModel)]="currentDate" [minDate]="minDate" [showWeeks]="true"></datepicker>
                  </div>

                  <hr />
                  <button type="button" class="btn btn-sm btn-info" (click)="clearTheCurrentDate()">Clear The Current Selected Date !</button>

                </div>

             `,
    styles:[`
                  .full button span {
                    background-color: limegreen;
                    border-radius: 32px;
                    color: black;
                  }
                  .partially button span {
                    background-color: orange;
                    border-radius: 32px;
                    color: black;
                  }

            `],
    directives: [DatePicker, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class Angular2Datepicker {
    public currentDate:Date = new Date();
    private events:Array<any>;
    private tomorrow:Date;
    private afterTomorrow:Date;
    private formats:Array<string> = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY', 'shortDate'];
    private format = this.formats[0];
    private dateOptions:any = {
        formatYear: 'YY',
        startingDay: 1
    };
    private opened:boolean = false;

    constructor() {
        (this.tomorrow = new Date()).setDate(this.tomorrow.getDate() + 1);
        (this.afterTomorrow = new Date()).setDate(this.tomorrow.getDate() + 2);
        this.events = [
            {date: this.tomorrow, status: 'full'},
            {date: this.afterTomorrow, status: 'partially'}
        ];
    }
    //set your date
    private setADate() {
        this.currentDate = moment('2020-02-02', 'YYYY-MM-DD').toDate();
    }
    // get the current selected date
    public getDate():number {
        return this.currentDate && this.currentDate.getTime() || new Date().getTime();
    }
    //set a new value to the current date
    private setToday() {
        this.currentDate = new Date();
    }



    private getDayClass(date:any, mode:string) {
        if (mode === 'day') {
            let dayToCheck = new Date(date).setHours(0, 0, 0, 0);

            for (let i = 0; i < this.events.length; i++) {
                let currentDay = new Date(this.events[i].date).setHours(0, 0, 0, 0);

                if (dayToCheck === currentDay) {
                    return this.events[i].status;
                }
            }
        }

        return '';
    }

    private disabled(date:Date, mode:string):boolean {
        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    }

    private open() {
        this.opened = !this.opened;
    }

    private clearTheCurrentDate() {
        this.currentDate = null;
    }

}