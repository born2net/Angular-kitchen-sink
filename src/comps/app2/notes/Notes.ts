import {Component} from "angular2/core";
import {Consts} from "../../Conts";
import {Properties} from "../properties/Properties";

@Component({
    selector: 'Notes',
    providers: [Properties],
    template: `<ng-content></ng-content>`
})

export class Notes {
    constructor(private properties:Properties) {
        console.log(properties);
    }


}
