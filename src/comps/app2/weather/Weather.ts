///<reference path="../../../../typings/app.d.ts"/>

import {Component, ChangeDetectionStrategy} from "angular2/core";
import {Consts} from "../../Conts";
import {Observable} from "rxjs/Observable";
import {IWeatherItem} from "./IWeather";
import {WeatherService} from "./WeatherService";
import {SortableHeader} from "./SortableHeader";
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators, AbstractControl} from 'angular2/common'
import {OrderBy} from "../../../pipes/OrderBy";
import {COMMON_DIRECTIVES} from "angular2/common";
import {RefreshTheme} from "../../../styles/RefreshTheme";

@Component({
    selector: 'Weather',
    providers: [WeatherService, SortableHeader],
    changeDetection: ChangeDetectionStrategy.OnPushObserve,
    pipes: [OrderBy],
    directives: [COMMON_DIRECTIVES, SortableHeader],
    styles: [`input {margin: 20px; width: 50%}`],
    template: `
    <small>I am a weather component</small>
    <form [ngFormModel]="weatherForm" (submit)="$event.preventDefault()">
        <input type="text" class="form-control" placeholder="enter city or zip code" [ngFormControl]="weatherForm.controls['weatherInput']">
    </form>
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
    private weatherForm:ControlGroup;
    private weatherInput:AbstractControl;
    private weatherItems:Observable<IWeatherItem[]>;

    // the real magic here is that the sort variable is being used in several places
    // including here to set the pipe sorting, in the SortableHeader component to show and hide
    // the header icons, as well as in SortableHeader to change the sort order on header clicks.
    // So we pass the SAME sort var to all SortableHeader directives and all work with it
    // in both displaying and the sorting mechanics
    // we also use changeDetection: ChangeDetectionStrategy.OnPushObserve to make sure we use
    // efficient rendering of the page only when the Observable is changes
    public sort: {field: string, desc: boolean} = {field: null, desc: false};

    constructor(private weatherService:WeatherService, private fb:FormBuilder) {
        this.weatherForm = fb.group({
            'weatherInput': ['']
        });
        this.weatherInput = this.weatherForm.controls['weatherInput'];
        this.weatherItems = weatherService.search('91301/1');
        this.listenWeatherInput();
    }

    listenWeatherInput() {
        this.weatherInput.valueChanges
            .debounceTime(100)
            .filter((zip:string)=> {
                if (zip.length == 5)
                    return true;
                return false;
            }).subscribe(
            value => this.weatherItems = this.weatherService.search(`${value}/1`),
            err => console.log(`onError: ${err}`),
            () => console.log('onCompleted')
        );
    }
}


//}).subscribe((value:string) => {
//    console.log('fetching zip weather : ', value);
//    this.weatherItems = this.weatherService.search(`${value}/1`);
//}