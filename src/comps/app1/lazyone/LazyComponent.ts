import {
    Component,
    ChangeDetectionStrategy
} from "@angular/core";

@Component({
    selector: 'orderDetails',
    moduleId: __moduleName,
    templateUrl: 'LazyComponent.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class LazyComponent {
    public rating:number;

    constructor() {
        console.log('LazyLoading on every navigation ' + Math.random());
        this.rating = 0;
    }
}