import {Directive, Input, ElementRef} from '@angular/core';
import {StoreModel} from "../../models/StoreModel";

@Directive({
    selector: '[makeDraggable]'
})
export class MakeDraggable {
    @Input('makeDraggable') data:StoreModel;

    constructor(private _elementRef:ElementRef) {
    }

    ngOnInit() {
        // Get the current element
        let el = this._elementRef.nativeElement.querySelector('div');
        if (!el)
            return
        // Set the draggable attribute to the element
        el.draggable = 'true';

        // Set up the dragstart event and add the drag-src CSS class
        // to change the visual appearance. Set the current todo as the data
        // payload by stringifying the object first
        el.addEventListener('dragstart', (e) => {
            console.log('Start');
            el.classList.add('drag-src')
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text', this.data.getKey('modelId'));
        });

        // Remove the drag-src class
        el.addEventListener('dragend', (e) => {
            e.preventDefault();
            el.classList.remove('drag-src')
        });
    }
}
