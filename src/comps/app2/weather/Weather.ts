///<reference path="../../../../typings/app.d.ts"/>

import {Component, ChangeDetectionStrategy, Renderer, ViewChild, ElementRef} from "angular2/core";
import {Consts} from "../../../../src/Conts";
import {IWeatherItem} from "./IWeather";
import {WeatherService} from "./WeatherService";
import {SortableHeader} from "./SortableHeader";
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators, AbstractControl, Control} from 'angular2/common'
import {OrderBy} from "../../../pipes/OrderBy";
import {COMMON_DIRECTIVES} from "angular2/common";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/distinctUntilChanged';
import {CommBroker} from "../../../services/CommBroker";

@Component({
    selector: 'Weather',
    providers: [WeatherService, SortableHeader],
    changeDetection: ChangeDetectionStrategy.OnPush,
    pipes: [OrderBy],
    directives: [COMMON_DIRECTIVES, SortableHeader],
    styles: [`input {margin: 20px; width: 50%}`],
    template: `
    <small>I am a weather component</small>
    <input type="text" #anotherWayToGetInput class="form-control" placeholder="enter city or zip code" [ngFormControl]="zipControl">
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
    public sort:{field:string, desc:boolean} = {field: null, desc: false};

    // reference: http://angularjs.blogspot.com/2016/04/5-rookie-mistakes-to-avoid-with-angular.html
    // this is a nice example of getting a reference to a native element (input) just by inserting
    // an ng2 identifier to it (#anotherWayToGetInput)
    @ViewChild('anotherWayToGetInput') myWeatherInput:ElementRef;

    // if you need to access an element not in your view but instead through content projection
    // you can use ContentChildren instead:
    //@ContentChildren('myListInputs') myListInputs: QueryList<ElementRef>;


    // Another great solution is to take advantage of the selector in the
    // @Directive decorator. You simply define a directive that selects for <li> elements,
    // then use IT (the directive) INSIDE your @ContentChildren query to filter all <li> elements down to only those
    // that are content children of the component.
    //
    // ContentChildren and directive (recommended), user code:
    // <my-list>
    //      <li *ngFor="#item of items"> {{item}} </li>
    // </my-list>
    //
    // @Directive({ selector: 'li' })
    // export class ListItem {}
    //
    // The component code:
    // @Component({
    //     selector: 'my-list'
    // })
    // export class MyList implements AfterContentInit {
    //     @ContentChildren(ListItem) items: QueryList<ListItem>; // <--- MAGIC IS HERE, use directive to pull out list
    //
    //     ngAfterContentInit() {
    //         // do something with list items
    //     }
    // }

    constructor(private renderer:Renderer, private weatherService:WeatherService, private commBroker:CommBroker) {
        this.listenWeatherInput();
        this.commBroker.getService(Consts.Services().Properties).setPropView('Weather');
    }

    ngAfterViewInit() {
        this.zipControl.updateValue('91301');

        // now we can access a native input element and set its focus
        setTimeout(()=> {
            this.renderer.invokeElementMethod(this.myWeatherInput.nativeElement, 'focus', [])
        }, 1000);
    }

    listenWeatherInput() {
        return this.weatherItems = this.zipControl.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .filter((zip:string)=> {
                return zip.length > 3;
                // switchMap is really cool as it will both flatMap our Observables
                // as well as it unsubscribes from all previous / pending calls to server and only
                // listen to to newly created Observable
            }).switchMap(zip => {
                return this.weatherService.search(`${zip}/1`)
            })
    }
}
