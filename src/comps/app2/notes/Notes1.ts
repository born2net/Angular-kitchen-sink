import {Component, ViewContainerRef} from 'angular2/core';
import {Sliderpanel} from "../../sliderpanel/Sliderpanel";
import {ModalDialog} from "../../modaldialog/ModalDialog";
import {RegisterCaller} from "../../../interfaces/RegisterCaller";
import {CommBroker} from "../../../services/CommBroker";
import {Properties} from "../properties/Properties";
import {Consts} from "../../../Conts";

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

    constructor(private sliderPanel:Sliderpanel, private commBroker:CommBroker) {
        this.me = this;
    }

    registerCaller(caller:any):void {
        this.modalDialog = caller;
    }

    private openModal1() {
        this.modalDialog.openModal();
    }

    private onNext(event) {
        this.sliderPanel.slideToPage('notes2', 'left')
        this.commBroker.getService(Consts.Services().Properties).setPropeView(2);
    }
}
