console.clear();

import {Component, Output, ViewChild} from "@angular/core";
import {BehaviorSubject, Observable, Subject} from "rxjs/Rx";

@Component({
    selector: 'incrementing-display',
    template: `
  {{(display$ | async)}}
`
})
export class IncrementingDisplay {
    @Output() display$ = new Subject()
        .scan((acc:number) => acc + 1)
}

@Component({
    selector: 'my-toggle-button',
    template: `<button (click)="on$.next($event)">
  <ng-content></ng-content>
</button>`
})
export class ToggleBut {
    constructor(){
        this.on$ =  new BehaviorSubject(true)
            .scan(acc =>!acc);
    }
    @Output() on$;
}

@Component({
    selector: 'StreamButton',
    template: `
        <my-toggle-button #tb>
          {{(tb.on$ | async) ? "ON" : "OFF"}}
        </my-toggle-button>
        <incrementing-display #id></incrementing-display>
    `
})
export class StreamButton {
    @ViewChild('tb') toggleButton;
    @ViewChild('id') incrementingDisplay;

    ngAfterViewInit() {
        this.toggleButton.on$.next(false);
        this.toggleButton.on$
            .switchMap(bool => bool ? Observable.interval(250) : Observable.empty())
            .startWith(0)
            .subscribe(this.incrementingDisplay.display$);
    }
}
