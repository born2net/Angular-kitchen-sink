import {Component} from 'angular2/core';
import {Sliderpanel} from "../../sliderpanel/Sliderpanel";
import {ModalDialog} from "../../modaldialog/ModalDialog";
import {RegisterCaller} from "../../../interfaces/RegisterCaller";
import {CommBroker} from "../../../services/CommBroker";
import {Properties} from "../properties/Properties";
import {Consts} from "../../../Conts";
import {NotesBase} from "./NotesBase";

@Component({
    selector: 'Notes2',
    directives: [ModalDialog],
    template: ` <button type="button" (click)="onPrev($event)" class="btn btn-default btn-sm">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                </button>
                <button type="button" (click)="onNext($event)" class="btn btn-default btn-sm">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                </button>
                <hr/>
                <small>I am notes2 component</small>
                <div class="btn-group" role="group" aria-label="...">
                  <button (click)="openModal()" type="button" class="btn btn-default">Open Modal</button>
                </div>
                <ModalDialog title="My owner is Notes2" content="I am here to serve Notes2" [owner]="me">
                </ModalDialog>
                <ng-content></ng-content>`
})

export class Notes2 extends NotesBase {
    constructor(protected sliderPanel:Sliderpanel, protected commBroker:CommBroker) {
        super(sliderPanel, commBroker);
        this.me = this;
        this.slideLeft = 'notes3';
        this.slideRight = 'notes1';
    }
}


