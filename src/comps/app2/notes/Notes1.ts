import {Component, ViewContainerRef} from 'angular2/core';
import {Consts} from "../../Conts";
import {Sliderpanel} from "../../sliderpanel/Sliderpanel";
import {Properties} from "../properties/Properties";
import {ModalDialog} from "../../modaldialog/ModalDialog";
import {RegisterCaller} from "../../../interfaces/RegisterCaller";

@Component({
    selector: 'Notes1',
    directives: [ModalDialog],
    template: ` <button type="button" (click)="onNext($event)" class="btn btn-default btn-sm goNext">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                </button>
                <small>I am notes1 component</small>
                <div class="btn-group" role="group" aria-label="...">
                  <button (click)="openModal1()" type="button" class="btn btn-default">Open Modal</button>
                </div>
                <ModalDialog title="My owner is Notes1" content="I am here to serve Notes1" [owner]="me">
                </ModalDialog>
                <ng-content></ng-content>`
})

export class Notes1 implements RegisterCaller {
    private modalDialog:ModalDialog;
    private me:Notes1;
    constructor(private sliderPanel:Sliderpanel, private properties:Properties) {
        this.me = this;
    }

    registerCaller(caller:any):void {
        this.modalDialog = caller;
    }

    private openModal1(){
        this.modalDialog.openModal();
    }

    private onNext(event) {
        this.sliderPanel.slideToPage('notes2','left')
    }
}
