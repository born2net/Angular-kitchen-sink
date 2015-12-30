import {Component} from "angular2/core";
import {Consts} from "../../Conts";
import {Sliderpanel} from "../../sliderpanel/Sliderpanel";
import {ModalDialog} from "../../modaldialog/ModalDialog";
import {RegisterCaller} from "../../../interfaces/registerCaller";

@Component({
    selector: 'Notes2',
    directives: [ModalDialog],
    template: ` <button type="button" (click)="onPrev($event)" class="btn btn-default btn-sm">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                </button>
                <button type="button" (click)="onNext($event)" class="btn btn-default btn-sm">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                </button>
                <small>I am notes1 component</small>
                <div class="btn-group" role="group" aria-label="...">
                  <button (click)="openModal1()" type="button" class="btn btn-default">Open Modal</button>
                  <button type="button" class="btn btn-default">Open Modal</button>
                  <button type="button" class="btn btn-default">Open Modal</button>
                </div>
                <ModalDialog title="My owner is Notes2" content="I am here to serve Notes2" [owner]="me">
                </ModalDialog>
                <ng-content></ng-content>`
})

export class Notes2 implements RegisterCaller {
    private sliderPanel:Sliderpanel;
    private modalDialog:ModalDialog;
    private me:Notes2;

    constructor(sliderPanel:Sliderpanel) {
        this.sliderPanel = sliderPanel;
        this.me = this;
    }

    registerCaller(caller:any):void {
        this.modalDialog = caller;
    }

    private openModal1(){
        this.modalDialog.openModal();
    }

    private onPrev(event) {
        this.sliderPanel.slideToPage('notes1', 'right')
    }

    private onNext(event) {
        this.sliderPanel.slideToPage('notes3', 'left')
    }


}


