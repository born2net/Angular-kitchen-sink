import {Component} from 'angular2/core';
import {Sliderpanel} from "../../sliderpanel/Sliderpanel";
import {CommBroker} from "../../../services/CommBroker";
import {NotesBase} from "./NotesBase";
import {Minitab} from "../../minitabs/Minitab";
import {Minitabs} from "../../minitabs/Minitabs";

@Component({
    selector: 'Notes3',
    directives: [Minitab, Minitabs],
    template: ` <button type="button" (click)="onPrev($event)" class="btn btn-default btn-sm">
                    <span class="fa fa-arrow-left"></span>
                </button>
                <button type="button" (click)="onNext($event)" class="btn btn-default btn-sm">
                    <span class="fa fa-arrow-right"></span>
                </button>
                <hr/>
                <small>I am notes3 component</small>
                 <mini-tabs>
                  <mini-tab [tabTitle]="'Tab 1'">Tab 1 Content</mini-tab>
                  <mini-tab tabTitle="Tab 2">Tab 2 Content</mini-tab>
                  <mini-tab tabTitle="Tab 3">Tab 3 Content</mini-tab>
                  <mini-tab tabTitle="Tab 4">Tab 4 Content</mini-tab>
                  <mini-tab tabTitle="Tab 5">Tab 5 Content</mini-tab>
                </mini-tabs>
                <small>I am a Minitab component (@ContentChildren)</small>
                <ng-content></ng-content>`
})

export class Notes3 extends NotesBase {
    constructor(protected sliderPanel:Sliderpanel, protected commBroker:CommBroker) {
        super(sliderPanel, commBroker);
        this.me = this;
        this.slideLeft = 'notes4';
        this.slideRight = 'notes2';
    }
}


