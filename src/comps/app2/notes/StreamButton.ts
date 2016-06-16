console.clear();

import {Component, Output, ViewChild} from "@angular/core";
import {BehaviorSubject, Observable, Subject} from "rxjs/Rx";

@Component({
    selector: 'toggle-button',
    template: `<button (click)="on$.next($event)">
  <ng-content></ng-content>
</button>`
})
export class ToggleButton {
    @Output() on$ = new BehaviorSubject(true)
        .scan(acc =>!acc);
}

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
    selector: 'StreamButton',
    directives: [ToggleButton, IncrementingDisplay],
    template: `
<toggle-button #tb>
  {{(tb.on$ | async) ? "ON" : "OFF"}}
</toggle-button>
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
