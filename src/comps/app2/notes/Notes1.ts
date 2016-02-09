///<reference path="../../../../typings/app.d.ts"/>

import {Component} from 'angular2/core';
import {Sliderpanel} from "../../sliderpanel/Sliderpanel";
import {ModalDialog} from "../../modaldialog/ModalDialog";
import {CommBroker} from "../../../services/CommBroker";
import {Consts} from "../../../../src/Conts";
import {NotesBase} from "./NotesBase";
import {MailModel} from "../../../models/MailModel";
import {CharCount} from "../../../pipes/CharCount";
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators, AbstractControl} from 'angular2/common'
import StartCapValidator from "../../../validators/StartCapValidator";
import NameTakenValidator from "../../../validators/NameTakenValidator";

@Component({
    selector: 'Notes1',
    directives: [ModalDialog, FORM_DIRECTIVES],
    templateUrl: '/src/comps/app2/notes/Notes1.html',
    styleUrls: ['../comps/app2/notes/Notes1.css'],
    pipes: [CharCount]
})

/**
 The first Note1 slider component in a series of sliders / notes.
 Demonstrates the usage of explicit form configuration.
 **/
export class Notes1 extends NotesBase {

    private notesForm:ControlGroup;
    private notesTextArea:AbstractControl;
    private userName:AbstractControl;
    private phone:AbstractControl;
    private login:AbstractControl;
    private model:MailModel;
    private mapModel:Map<any, any>; // demonstrates map although we are not using it for anything


    constructor(fb:FormBuilder, protected sliderPanel:Sliderpanel, protected commBroker:CommBroker) {
        super(sliderPanel, commBroker);
        this.slideLeft = 'notes2';

        this.notesForm = fb.group({
            'userName': ['', Validators.required],
            'phone': ['(xxx)-xxxx-xxx', Validators.minLength(10)],
            'notesTextArea': ['enter text here',
                Validators.compose([
                    Validators.required,
                    StartCapValidator])],
            'login': ['',
                Validators.compose([
                    Validators.required,
                    StartCapValidator]), NameTakenValidator]
        });

        // map to instances from form
        this.notesTextArea = this.notesForm.controls['notesTextArea'];
        this.userName = this.notesForm.controls['userName'];
        this.login = this.notesForm.controls['login'];
        this.phone = this.notesForm.controls['phone'];

        this.model = new MailModel(0, '', true, '', '');

        // unrelated, demonstrate usage of Map
        this.mapModel = new Map();
        this.mapModel.set('my name', 'Sean Levy');
        //console.log(this.mapModel.get('my name'));

        this.observeNameChange();
        this.observeFormChange();

        this.commBroker.getService(Consts.Services().Properties).setPropView('notes1')
    }

    /**
     * Listen to observable emitted events from name control
     * use one of the many RX operators debounceTime to control
     * the number of events emitted per milliseconds
     **/
    observeNameChange() {
        this.userName.valueChanges.debounceTime(100).subscribe(
            (value:string) => {
                console.log('name changed, notified via observable: ', value);
            }
        );
    }

    observeFormChange() {
        this.notesForm.valueChanges.debounceTime(100).subscribe(
            (value:string) => {
                console.log('forum changed, notified via observable: ', value);
            }
        );
    }

    onSubmit(event) {
        bootbox.alert(`sent ${event.notesTextArea}`);
    }

    onChange(event) {
        if (event.target.value.length < 3)
            console.log('text too short for subject');
    }
}
