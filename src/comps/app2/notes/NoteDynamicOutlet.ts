import {
    Component,
    ComponentFactory,
    ComponentResolver,
    ViewContainerRef,
    Directive,
    ComponentMetadata,
    Input,
    ReflectiveInjector
} from "@angular/core";


export function createComponentFactory(resolver:ComponentResolver, metadata:ComponentMetadata):Promise<ComponentFactory<any>> {
    const cmpClass = class NoteDynamicOutlet {
    };
    const decoratedCmp = Component(metadata)(cmpClass);
    return resolver.resolveComponent(decoratedCmp);
}

/**
 *
 * Dynamic Component Creation in Angular 2
 *  insert HTML fragments into the component in runtime
 *  essentially creating the view template dynamically from a string: template: this.src
 *
 * Decorators are just function
 * You can create a component by using Component and ComponentResolver
 * You can load a component by using ViewContainerRef and ComponentFactory
 *
 * ref: http://blog.lacolaco.net/post/dynamic-component-creation-in-angular-2/
 *
 **/
@Directive({
    selector: 'dynamic-html-outlet',
})
export class NoteDynamicOutlet {
    @Input() src:string;

    constructor(private vcRef:ViewContainerRef, private resolver:ComponentResolver) {
    }

    ngOnChanges() {
        if (!this.src) return;

        const metadata = new ComponentMetadata({
            selector: 'dynamic-html',
            template: this.src,
        });
        createComponentFactory(this.resolver, metadata)
            .then(factory => {
                const injector = ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);
                this.vcRef.createComponent(factory, 0, injector, []);
            });
    }
}
