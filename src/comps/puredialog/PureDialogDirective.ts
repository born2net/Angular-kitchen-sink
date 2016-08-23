import {
    Directive,
    ComponentFactoryResolver,
    ComponentRef,
    ViewContainerRef
} from "@angular/core";
import {PureDialog} from "./PureDialog";

@Directive({
    selector: '[dialogAnchor]'
})
export class PureDialogDirective {
    constructor(private viewContainer: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) {
    }

    createDialog(pureDialog: { new(): PureDialog }): ComponentRef<PureDialog> {
        this.viewContainer.clear();
        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(pureDialog);
        let dialogComponentRef = this.viewContainer.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.close.subscribe(() => {
            dialogComponentRef.destroy();
        });
        return dialogComponentRef;
    }
}