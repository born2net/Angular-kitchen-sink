import {Component} from "angular2/core";
import {Properties} from "./app2/properties/Properties";

@Component({
    selector: 'ttt',
    template: `<h1>HHHHHH</h1>`
})

export class ttt {
    constructor(properties:Properties) {
        console.log('child ' + properties.u);
    }
}
