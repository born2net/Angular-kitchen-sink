/**
 * Credits to: https://www.ng-book.com/2/ ng2-book
 **/

import {
    Component,
    Directive,
    Input,
    ChangeDetectorRef,
    ViewRef,
    ViewContainerRef,
    TemplateRef,
    DoCheck,
    IterableDiffers,
    IterableDiffer,
} from '@angular/core';


@Directive({
    selector: '[ngBookIf]',
    inputs: ['ngBookIf']
})
class NgBookIf {
    constructor(private viewContainer:ViewContainerRef, private template:TemplateRef<any>) {
    }

    set ngBookIf(condition) {
        if (condition) {
            this.viewContainer.createEmbeddedView(this.template);
        } else {
            this.viewContainer.clear();
        }
    }
}

@Component({
    selector: 'template-sample-app',
    template: `
  <button class="ui primary button" (click)="toggle()">
    Toggle
  </button>

  <div *ngBookIf="display">
    The message is displayed
  </div>

  `
})
export class IfTemplateSampleApp {
    display:boolean;

    constructor() {
        this.display = true;
    }

    toggle() {
        this.display = !this.display;
    }
}


