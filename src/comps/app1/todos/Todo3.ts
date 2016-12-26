import {Component} from "@angular/core";
import {StyleDecorator} from "../../../comps/styledecorator/StyleDecorator";


@StyleDecorator({
    "div": {
        padding: '1em'
    }
})

@Component({
    selector: 'Todo3',
    styleUrls: ['./TodoStatsModel.css'],
    template: ` <div>
                    <h3>I am Todo3 component</h3>
                    <obs-redux></obs-redux>
                </div>
                    `
})

export class Todo3  {
}


