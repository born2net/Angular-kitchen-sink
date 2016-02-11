import {Component} from 'angular2/core';
import {Sliderpanel} from "../../sliderpanel/Sliderpanel";
import {CommBroker} from "../../../services/CommBroker";
import {NotesBase} from "./NotesBase";
import {NotesDetails} from "./NotesDetails";
import {NotesDetailsItems} from "./NotesDetailsItems";

@Component({
    selector: 'Notes4',
    directives: [NotesDetails, NotesDetailsItems],
    template: ` <button type="button" (click)="onPrev($event)" class="btn btn-default btn-sm">
                    <span class="fa fa-arrow-left "></span>
                </button>
                <button type="button" (click)="onNext($event)" class="btn btn-default btn-sm">
                    <span class="fa fa-arrow-right"></span>
                </button>
                <hr/>
                <small>I am notes4 component</small>
                <hr/>
                <button (click)="show = !show">Toggle one item</button>
                <notes-details>
                  <notes-details-item> noted details item 1 </notes-details-item>
                  <notes-details-item *ngIf="show"> noted details item 2 </notes-details-item>
                </notes-details>
                <ng-content></ng-content>`
})

export class Notes4 extends NotesBase {
    show: boolean = true;
    constructor(protected sliderPanel:Sliderpanel, protected commBroker:CommBroker) {
        super(sliderPanel, commBroker);
        this.me = this;
        this.slideLeft = 'notes5';
        this.slideRight = 'notes3';
    }
}


