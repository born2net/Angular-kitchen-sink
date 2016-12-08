import {Component, ViewContainerRef} from "@angular/core";

@Component({
    selector: 'Notes',
    template: `<ng-content></ng-content>`
})

export class Notes {
    constructor() {
    }
}
