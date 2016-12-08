import {NgModule, ANALYZE_FOR_ENTRY_COMPONENTS} from "@angular/core";

/**
 * Demonstrate the usage of importing a module and informing angular it will use dynamic component (i.e.: a component that will be created vi:a ComponentFactoryResolver)
 * so angular knows to include it in the build we don't need to mess with entryComponents in main app.ts
 *
 * this is compatible with both JIT and AOT
 *
 * reference: https://www.youtube.com/watch?v=ZqGvilzDbac
 */


@NgModule({})
export class ModuleExample {
    static withComponents(components:Array<any>) {
        return {
            ngModule: ModuleExample,
            providers: [
                {provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true}
            ]
        }

    }
}

