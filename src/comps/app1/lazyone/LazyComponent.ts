import {
    Component,
    ChangeDetectionStrategy
} from "@angular/core";

@Component({
    selector: 'orderDetails',
    moduleId: __moduleName,
    template: `
                <h2>Hello world, I was lazzzzzzy loaded...</h2>
                <h3>Examples for lazy loading: </h3>
                <h4><a href="http://plnkr.co/edit/mXSjnUtN7CM6ZqtOicE2?p=preview">plnkr 1</a></h4>
                <h4><a href="http://plnkr.co/edit/TU73YA7kD7ZMyD8wEsUd?p=preview">plnkr 2</a></h4>
                <hr/>
                <h5><a href="https://angular.io/docs/ts/latest/guide/ngmodule.html">read the for modules docs</a></h5>
                <h5><a href="https://angular.io/docs/ts/latest/guide/router.html">read the for router docs</a></h5>
            `,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class LazyComponent {
    constructor() {
    }

}