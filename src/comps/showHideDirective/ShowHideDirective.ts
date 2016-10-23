import {
    Directive,
    Input
} from '@angular/core';
import {
    TemplateRef,
    ViewContainerRef
} from '@angular/core';


@Directive({
    selector: '[showHideDirective]'
})

export class ShowHideDirective {

    public show(){
        this.viewContainer.createEmbeddedView(this.templateRef);
    }

    public hide(){
        this.viewContainer.clear();
    }

    @Input()
    set showHideDirective(i_value) {
        if (i_value) {
            this.show();
        } else {
            this.hide();
        }
    }

    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {
    }


}

