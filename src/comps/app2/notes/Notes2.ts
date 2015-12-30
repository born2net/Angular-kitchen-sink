import {Component} from "angular2/core";
import {Consts} from "../../Conts";
import {Sliderpanel} from "../../sliderpanel/Sliderpanel";

@Component({
    selector: 'Notes2',
    template: ` <button type="button" (click)="onPrev($event)" class="btn btn-default btn-sm">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                    </button>
                    <button type="button" (click)="onNext($event)" class="btn btn-default btn-sm">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                </button>
                <small>I am notes2 component</small>
                <ng-content></ng-content>`
})

export class Notes2 {
    private sliderPanel:Sliderpanel;

    constructor(sliderPanel:Sliderpanel) {
        this.sliderPanel = sliderPanel;
    }

    private onPrev(event) {
        this.sliderPanel.slideToPage('notes1', 'right')
    }

    private onNext(event) {
        this.sliderPanel.slideToPage('notes3', 'left')
    }


}


