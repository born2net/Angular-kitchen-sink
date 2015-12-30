import {Component} from "angular2/core";
import {Consts} from "../../Conts";
import {Sliderpanel} from "../../sliderpanel/Sliderpanel";

@Component({
    selector: 'Notes1',
    template: ` <button type="button" (click)="onNext($event)" class="btn btn-default btn-sm goNext">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                </button>
                <small>I am notes1 component</small>
                <ng-content></ng-content>`
})

export class Notes1 {
    private sliderPanel:Sliderpanel;
    constructor(sliderPanel:Sliderpanel) {
        this.sliderPanel = sliderPanel;
    }

    private onNext(event) {
        this.sliderPanel.slideToPage('notes2','left')
    }
}
