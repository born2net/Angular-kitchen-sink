import {Component} from "angular2/core";
import {Sliderpanel} from "../../sliderpanel/Sliderpanel";

@Component({
    selector: 'Todo1',
    template: ` <button type="button" (click)="onNext($event)" class="btn btn-default btn-sm goNext">
                    <span class="fa fa-arrow-right"></span>
                </button>
                <small>I am todo1 component</small>
                <ng-content></ng-content>
                `

})

export class Todo1 {
    private sliderPanel:Sliderpanel;

    constructor(sliderPanel:Sliderpanel) {
        this.sliderPanel = sliderPanel;
    }

    private onNext(event) {
        this.sliderPanel.slideToPage('todo2', 'left')
    }
}
