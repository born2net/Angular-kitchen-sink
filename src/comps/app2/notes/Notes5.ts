import {Component} from "angular2/core";
import {Consts} from "../../Conts";
import {Sliderpanel} from "../../sliderpanel/Sliderpanel";

@Component({
    selector: 'Notes5',
    template: ` <button type="button" (click)="onPrev($event)" class="btn btn-default btn-sm">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                    </button>
                    <small>I am notes5 component</small>
                <ng-content></ng-content>`
})

export class Notes5 {
    private sliderPanel:Sliderpanel;

    constructor(sliderPanel:Sliderpanel) {
        this.sliderPanel = sliderPanel;
    }

    private onPrev(event) {
        this.sliderPanel.slideToPage('notes4', 'right')
    }
}


