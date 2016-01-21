import {Component} from 'angular2/core';
import {Sliderpanel} from "../../sliderpanel/Sliderpanel";
import {CommBroker} from "../../../services/CommBroker";
import {NotesBase} from "./NotesBase";

@Component({
    selector: 'Notes5',
    template: `<button type="button" (click)="onPrev($event)" class="btn btn-default btn-sm">
                    <span class="fa fa-arrow-left "></span>
                </button>
                <hr/>
                <small>I am notes5 component</small>
                <ng-content></ng-content>`
})

export class Notes5 extends NotesBase {
    constructor(protected sliderPanel:Sliderpanel, protected commBroker:CommBroker) {
        super(sliderPanel, commBroker);
        this.me = this;
        this.slideRight = 'notes4';
    }
}


