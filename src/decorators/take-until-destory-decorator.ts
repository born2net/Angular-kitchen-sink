// ref: https://github.com/NetanelBasal/angular2-take-until-destroy

// usage:
// import TakeUntilDestroy from "angular2-take-until-destroy";
//
// @Component({
//     selector: 'app-inbox',
//     templateUrl: './inbox.component.html'
// })
// @TakeUntilDestroy
// export class InboxComponent {
//     componentDestroy;
//     constructor( ) {
//         const timer$ = Observable.interval(1000)
//             .takeUntil(this.componentDestroy())
//             .subscribe(val => console.log(val))
//     }
//
//     ngOnDestroy() {
//         // You can also do whatever you need here
//     }
//
// }

import { Subject } from "rxjs/Subject";
export function TakeUntilDestroy(constructor) {
    var original = constructor.prototype.ngOnDestroy;
    var subject;
    constructor.prototype.componentDestroy = function () {
        subject = new Subject();
        return subject.asObservable();
    };
    constructor.prototype.ngOnDestroy = function () {
        original && typeof original === 'function' && original.apply(this, arguments);
        subject.next('ngOnDestroy');
        subject.unsubscribe();
    };
}