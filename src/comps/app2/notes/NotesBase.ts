import {Component} from 'angular2/core';
import {Sliderpanel} from "../../sliderpanel/Sliderpanel";
import {ModalDialog} from "../../modaldialog/ModalDialog";
import {RegisterCaller} from "../../../interfaces/RegisterCaller";
import {CommBroker} from "../../../services/CommBroker";
import {Properties} from "../properties/Properties";
import {Consts} from "../../../Conts";

export class NotesBase implements RegisterCaller {
    protected modalDialog:ModalDialog;
    protected me:any;
    protected slideLeft:any;
    protected slideRight:any;

    constructor(protected sliderPanel:Sliderpanel, protected commBroker:CommBroker) {
        this.me = this;
    }

    protected openModal1(){
        this.modalDialog.openModal();
    }

    protected onPrev(event) {
        this.sliderPanel.slideToPage(this.slideRight, 'right');
        this.commBroker.getService(Consts.Services().Properties).setPropeView(this.slideRight);
    }

    protected onNext(event) {
        this.sliderPanel.slideToPage(this.slideLeft, 'left');
        this.commBroker.getService(Consts.Services().Properties).setPropeView(this.slideLeft);
    }

    public registerCaller(caller:any):void {
        this.modalDialog = caller;
    }
}


