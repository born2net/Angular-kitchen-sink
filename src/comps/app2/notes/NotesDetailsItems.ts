import {Component, Output, EventEmitter, Input, NgZone, ChangeDetectionStrategy} from 'angular2/core';
import {TimeInterval} from "rxjs/Rx.KitchenSink";

@Component({
    selector: 'notes-details-item',
    changeDetection: ChangeDetectionStrategy.CheckAlways,
    template: `<br/>
    <button (click)="onClick()">click me</button>
    <p>content from parent is: {{content(random)}}</p>
    <ng-content></ng-content>`
})
export class NotesDetailsItems {
    @Output()
    select:EventEmitter<any> = new EventEmitter();
    @Input()
    content:((any)=>string);
    @Input()
    myValue:string = 'val';

    private random:any;

    constructor(private zone:NgZone) {
        this.random = Math.random();
        this.zone.run(() => {
            console.log('force update zone UI');
        });
    }

    onClick() {
        this.select.emit(this.myValue);
    }

    ngOnDestroy() {
    }
}