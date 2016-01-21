import {Component} from 'angular2/core';
import {Sliderpanel} from "../../sliderpanel/Sliderpanel";
import {ModalDialog} from "../../modaldialog/ModalDialog";
import {IRegisterCaller} from "../../../interfaces/IRegisterCaller";
import {CommBroker} from "../../../services/CommBroker";
import {Consts} from "../../../../src/Conts";

export class NotesBase implements IRegisterCaller {
    protected modalDialog:ModalDialog;
    protected me:any;
    protected slideLeft:any;
    protected slideRight:any;

    constructor(protected sliderPanel:Sliderpanel, protected commBroker:CommBroker) {
        this.me = this;
    }

    protected openModal(){
        this.modalDialog.openModal();
    }

    protected onPrev(event) {
        this.sliderPanel.slideToPage(this.slideRight, 'right');
        this.commBroker.getService(Consts.Services().Properties).setPropView(this.slideRight);
    }

    protected onNext(event) {
        this.sliderPanel.slideToPage(this.slideLeft, 'left');
        this.commBroker.getService(Consts.Services().Properties).setPropView(this.slideLeft);
    }

    public registerCaller(caller:any):void {
        this.modalDialog = caller;
    }
}


