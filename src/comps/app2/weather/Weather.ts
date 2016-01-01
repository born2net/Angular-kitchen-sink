import {Component} from "angular2/core";
import {Consts} from "../../Conts";
import {Observable} from "rxjs/Observable";
import {IWeatherItem} from "./IWeather";
import {WeatherService} from "./WeatherService";
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators, AbstractControl} from 'angular2/common'

@Component({
    selector: 'Weather',
    providers: [WeatherService],
    styles: [`input {margin: 20px; width: 50%}`],
    template: `
    <form [ngFormModel]="weatherForm" (ngSubmit)="$event.preventDefault()">
        <input type="text" class="form-control" placeholder="enter zip code" [ngFormControl]="weatherForm.controls['weatherInput']">
    </form>
    <table class="table">
      <thead>
        <tr>
          <th>day</th>
          <th>icon</th>
          <th>high</th>
          <th>low</th>
        </tr>
      </thead>
      <tbody>
      <!-- no need to subscribe to observable since async does this for us -->
        <tr *ngFor="#item of weatherItems | async">
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

    //public sort: {field: string, desc: boolean} = {field: null, desc: false};

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
            }).subscribe((value:string) => {
                console.log('fetching zip weather : ', value);
                this.weatherItems = this.weatherService.search(`${value}/1`);
            }
        );
    }
}
