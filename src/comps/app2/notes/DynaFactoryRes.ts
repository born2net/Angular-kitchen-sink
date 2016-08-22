/** reference:
 * https://medium.com/@tudorgergely/injecting-components-dynamically-in-angular-2-3d36594d49a0#.e3ig5eks9
 *
 * with ComponentFactoryResolver we must add the DynaFactoryResHelloWorld as an “EntryComponent” property
 * to the main module.
 * We need this so angular knows which components can be lazy loaded in the future and can
 * create factories for them. Otherwise we will get an error of:
 * --- No component factory found for DynaFactoryResHelloWorld ---
 *
 **/

import {
    ComponentFactoryResolver,
    ViewContainerRef,
    Component
} from "@angular/core";
import {DynaFactoryResHelloWorld} from "./DynaFactoryResHelloWorld";
@Component({
    selector: 'DynaFactoryRes',
    template: `
        <button (click)="sayHello()">Say hello</button>
        <h5>Use ComponentFactoryResolver and entryComponents</h5>
        <h5>Hosting component</h5>
    `
})
export class DynaFactoryRes {
    constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) {
    }

    private sayHello() {
        const factory = this.componentFactoryResolver.resolveComponentFactory(DynaFactoryResHelloWorld);
        const ref = this.viewContainerRef.createComponent(factory);
        ref.changeDetectorRef.detectChanges();
    }
}