import {Component, ViewContainerRef} from "angular2/core";

@Component({
    selector: 'Notes',
    template: `<ng-content></ng-content>`
})

export class Notes {
    constructor() {
    }
}
