import {
    Directive,
    Input,
    Output,
    EventEmitter,
    ElementRef,
    NgZone
} from "@angular/core";
/**
 *
 * Catch an event and run it while by passing the Angular change detection
 *
 * reference: https://medium.com/@NetanelBasal/angular-2-escape-from-change-detection-317b3b44906b#.u4yh1257d
 *
 * Usage: <button outSideEventHandler (handler)="reportAnalytics($event, 'Action')">Report to analytics</button>
 */

@Directive({
    selector: '[outSideEventHandler]'
})
class OutSideEventHandlerDirective {

    @Input() event: string = 'click';
    @Output('handler') emitter = new EventEmitter();
    private _handler: Function;
    constructor(private _ngZone: NgZone, private el: ElementRef) {}

    ngOnInit() {
        this._ngZone.runOutsideAngular(() => {
            const nativeElement = this.el.nativeElement;
            this._handler = $event => {
                this.emitter.emit($event);
            }


            nativeElement.addEventListener(this.event, this._handler, false);
        });
    }

    ngOnDestory() {
        this.el.nativeElement.removeEventListener(this.event, this._handler);
    }
}