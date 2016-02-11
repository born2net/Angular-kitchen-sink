import {Component} from 'angular2/core';
import {Sliderpanel} from "../../sliderpanel/Sliderpanel";
import {ModalDialog} from "../../modaldialog/ModalDialog";
import {CommBroker} from "../../../services/CommBroker";
import {NotesBase} from "./NotesBase";
import {MyIp} from "../../myip/Myip";
import {MODAL_DIRECTIVES} from 'ng2-bs3-modal/dist/ng2-bs3-modal'

@Component({
    selector: 'Notes2',
    providers: [MyIp],
    directives: [ModalDialog, MyIp, MODAL_DIRECTIVES],
    template: `
                <button type="button" (click)="onPrev($event)" class="btn btn-default btn-sm">
                    <span class="fa fa-arrow-left"></span>
                </button>
                <button type="button" (click)="onNext($event)" class="btn btn-default btn-sm">
                    <span class="fa fa-arrow-right"></span>
                </button>
                <hr/>
                <small>I am notes2 component</small>
                <div class="btn-group" role="group" aria-label="...">
                  <button (click)="openModal()" type="button" class="btn btn-default">Bootstrap 3 wrapped Modal</button>
                </div>
                <ModalDialog title="My owner is Notes2" content="I am here to serve Notes2" [owner]="me">
                </ModalDialog>
                <hr/>
                <button type="button" class="btn btn-default" (click)="modal.open()">Bootstrap 3 pure ng2 Modal</button>
                <modal #modal>
                    <modal-header [show-close]="true">
                        <h4 class="modal-title">I'm a pure Angular2 modal!</h4>
                    </modal-header>
                    <modal-body>
                        Hello World!
                    </modal-body>
                    <modal-footer [show-default-buttons]="true"></modal-footer>
                </modal>

                <MyIp></MyIp>
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


