import {Component, Input} from "@angular/core";
import {Sliderpanel} from "../../sliderpanel/Sliderpanel";
import TodoStatsModel from "./TodoStatsModel";
import {StyleDecorator} from '../../../comps/styledecorator/StyleDecorator';

var backgroundColor = "#FFFFFF",
    lightGray = "#EDEDED",
    padding = "10px";

/**
 * A really cool example of using a custom decorator for a component, see  StyleDecorator source
 * reference: https://github.com/cstefanache/ng2-styler
 * reference: http://www.thatguyjackguy.com/tech/web-component-styling/
 **/
@StyleDecorator({
    "div": {
        padding: '1em'
    }
})

@Component({
    selector: 'Todo2',
    styleUrls: ['./TodoStatsModel.css'],
    host: {
        '[style.background-color]': 'colorInput(color)',
        '[class.show_border]': 'input(show_border)',
        '[class.large]': 'input(large)',
        'style': 'font-size: 1.1em',
        'class': 'some_class_to_add',
    },
    template: ` <div>                     
                     <hr>
                     <button type="button" (click)="onPrev($event)" class="btn btn-default btn-sm">
                    <span class="fa fa-arrow-left "></span>
                    </button>
                    <h5>1. component decorated using a custom @StyleDecorator (padding)</h5>
                     <h5>2. component is passed in style via inputs and evaluates (light class)</h5>
                     <h5>3. component is styled using deep css selector from parent component (border)</h5>
                     <hr/>
                    <small>I am todo2 component</small>
                    <ng-content></ng-content>
                    <div class="update-text">Total To-Do updates from server: {{todoStatModel.updates}}</div>
                    <div class="update-text">Total To-Do reads from server: {{todoStatModel.reads}}</div>
                    <div class="update-text">Total To-Do creates from server: {{todoStatModel.creates}}</div>
                    <div class="update-text">Total To-Do deletes from server: {{todoStatModel.deletes}}</div>
                </div>
                    `
})

export class Todo2 {
    private sliderPanel: Sliderpanel;

    constructor(sliderPanel: Sliderpanel, private todoStatModel: TodoStatsModel) {
        this.sliderPanel = sliderPanel;
    }

    private onPrev(event) {
        this.sliderPanel.slideToPage('todo1', 'right')
    }

    @Input() show_border;
    @Input() large;

    private input (attr) {
        return attr !== undefined;
    }

    @Input() color;
    private myColorValue;


    colorInput (color: string) {
        switch (this.color) {
            case 'blue':
                return '#00ffe1';
            case 'gray':
                return '#efefef';
            default:
                return '#6482d6';
        }
    }
}


