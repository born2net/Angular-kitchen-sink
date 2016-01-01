import {Component} from "angular2/core";
import {Consts} from "../../Conts";
import {Observable} from "rxjs/Observable";
import {IWeatherItem} from "./IWeather";
import {WeatherService} from "./WeatherService";

@Component({
    selector: 'Weather',
    providers: [WeatherService],
    template: `
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
    private weatherItems: Observable<IWeatherItem[]>;
    //public sort: {field: string, desc: boolean} = {field: null, desc: false};

    constructor(private weatherService:WeatherService) {
        this.weatherItems = weatherService.search('91301/1');
    }
}
