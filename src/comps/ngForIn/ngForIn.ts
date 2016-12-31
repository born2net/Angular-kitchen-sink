// blog: https://medium.com/@jsayol/having-fun-with-angular-extending-ngfor-to-support-for-in-f30c724967ed#.2qwuu3rrj

import {
    Directive, TemplateRef, Input, ChangeDetectorRef, ViewContainerRef,
    IterableDiffers, OnChanges, SimpleChanges, SimpleChange
} from '@angular/core';
import { NgFor } from "@angular/common";
import { NgForRow } from "@angular/common/src/directives/ng_for";

@Directive({
    selector: '[ngFor][ngForIn]'
})
export class NgForIn extends NgFor implements OnChanges {

    @Input() ngForIn: any;

    constructor(viewContainer: ViewContainerRef,
                template: TemplateRef<NgForRow>,
                differs: IterableDiffers,
                cdr: ChangeDetectorRef) {

        super(viewContainer, template, differs, cdr);
    }

    ngOnChanges(changes: SimpleChanges): void {
        if ('ngForIn' in changes) {
            this.ngForOf = Object.keys(this.ngForIn);

            const currentValue: any[] = Object.keys(changes['ngForIn'].currentValue);
            const previousValue: any[] = Object.keys(changes['ngForIn'].previousValue);
            changes['ngForOf'] =  new SimpleChange(previousValue, currentValue);

            super.ngOnChanges(changes);
        }
    }

}