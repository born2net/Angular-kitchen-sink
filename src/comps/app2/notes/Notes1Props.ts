import {Component} from "@angular/core";

@Component({
    selector: 'Notes1Props',
    template: `
                <h1>Notes 1</h1>
                <small>I am notes1 properties component</small>
              `
})

export class Notes1Props {
    private value:string;

    constructor() {
    }
}
