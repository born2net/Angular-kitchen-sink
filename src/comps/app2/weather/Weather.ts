///<reference path="../../../../typings/app.d.ts"/>

import {Component, ChangeDetectionStrategy} from "angular2/core";
import {Consts} from "../../Conts";
import {IWeatherItem} from "./IWeather";
import {WeatherService} from "./WeatherService";
import {SortableHeader} from "./SortableHeader";
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators, AbstractControl, Control} from 'angular2/common'
import {OrderBy} from "../../../pipes/OrderBy";
import {COMMON_DIRECTIVES} from "angular2/common";
import {RefreshTheme} from "../../../styles/RefreshTheme";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    selector: 'Weather',
    providers: [WeatherService, SortableHeader],
    changeDetection: ChangeDetectionStrategy.OnPushObserve,
    pipes: [OrderBy],
    directives: [COMMON_DIRECTIVES, SortableHeader],
    styles: [`input {margin: 20px; width: 50%}`],
    template: `
    <small>I am a weather component</small>
    <input type="text" placeholder="enter city or zip code" [ngFormControl]="zipControl">
    <table class="table">
      <thead>
        <tr>
          <th>day</th>
          <th>icon</th>
          <th sortableHeader="maxtempF" [sort]="sort">high</th>
          <th sortableHeader="mintempF" [sort]="sort">low</th>
        </tr>
      </thead>
      <tbody>
      <!-- no need to subscribe to observable since async does this for us -->
        <tr *ngFor="#item of weatherItems | async | OrderBy:sort.field:sort.desc">
          <td>{{ item.day }}</td>
          <td><img src="{{ item.iconPath }}" style="width: 40px; height: 40px"/></td>
          <td>{{ item.maxtempF }}</td>
          <td>{{ item.mintempF }}</td>
          <!-- <td [innerHtml]="item.day"></td> -->
        </tr>
      </tbody>
    </table>
  `,
})

export class Weather {
    private weatherItems:Observable<IWeatherItem[]>;
    private zipControl:Control = new Control();

    // the real magic here is that the sort variable is being used in several places
    // including here to set the pipe sorting, in the SortableHeader component to show and hide
    // the header icons, as well as in SortableHeader to change the sort order on header clicks.
    // So we pass the SAME sort var to all SortableHeader directives and all work with it
    // in both displaying and the sorting mechanics
    // we also use changeDetection: ChangeDetectionStrategy.OnPushObserve to make sure we use
    // efficient rendering of the page only when the Observable is changes
    public sort: {field: string, desc: boolean} = {field: null, desc: false};


    constructor(private weatherService:WeatherService) {

        //this.weatherItems = weatherService.search('91301/1');
        this.listenWeatherInput();
    }

    listenWeatherInput() {
        this.weatherItems = this.zipControl.valueChanges
            .debounceTime(100)
            .distinctUntilChanged()
            .filter((zip:string)=> {
                if (zip.length == 5)
                    return true;
                return false;
            }).switchMap(zip => {
                return this.weatherService.search(`${zip}/1`)
            });
    }
}

//}).switchMap((zip:any) => {
//    return this.weatherItems = this.weatherService.search(`${zip}/1`),
//        err => console.log(`onError: ${err}`),
//        () => console.log('onCompleted')

//}).subscribe((value:string) => {
//    console.log('fetching zip weather : ', value);
//    this.weatherItems = this.weatherService.search(`${value}/1`);
//}