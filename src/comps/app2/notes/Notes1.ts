import {Component} from "@angular/core";
import {Sliderpanel} from "../../sliderpanel/Sliderpanel";
import {ModalDialog} from "../../modaldialog/ModalDialog";
import {CommBroker} from "../../../services/CommBroker";
import {Consts} from "../../../../src/Conts";
import {NotesBase} from "./NotesBase";
import {MailModel} from "../../../models/MailModel";
import {REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import StartCapValidator from "../../../validators/StartCapValidator";
import NameTakenValidator from "../../../validators/NameTakenValidator";
import {DisplayError} from "../../displayerror/DisplayError";
import * as bootbox from "bootbox";


@Component({
    selector: 'Notes1',
    moduleId: __moduleName,
    directives: [ModalDialog, REACTIVE_FORM_DIRECTIVES, DisplayError],
    templateUrl: 'Notes1.html',
    styleUrls: ['Notes1.css']
})

/**
 The first Note1 slider component in a series of sliders / notes.
 Demonstrates the usage of explicit form configuration.
 **/
export class Notes1 extends NotesBase {

    private notesForm:FormGroup;
    private notesTextArea:FormGroup;
    private userName:FormGroup;
    private reference:FormGroup;
    private phone:FormGroup;
    private birthdate:FormGroup;
    private login:FormGroup;
    private model:MailModel;
    private mapModel:Map<any, any>; // demonstrates map although we are not using it for anything


    constructor(fb:FormBuilder, protected sliderPanel:Sliderpanel, protected commBroker:CommBroker) {
        super(sliderPanel, commBroker);
        this.slideLeft = 'notes2';

        // 'reference': ['', Validators.required],

        this.notesForm = fb.group({
            'userName': ['', Validators.required],
            'phone': ['(xxx)-xxxx-xxx', Validators.minLength(10)],
            'birthdate': ['', [Validators.required, this.isOldEnough]],
            'notesTextArea': ['enter text here', [Validators.required, StartCapValidator]],
            'login': ['', [Validators.required, StartCapValidator], NameTakenValidator]
        });

        // map to instances from form
        this.notesTextArea = this.notesForm.controls['notesTextArea'] as FormGroup;
        this.userName = this.notesForm.controls['userName'] as FormGroup;
        this.reference = this.notesForm.controls['reference']  as FormGroup;
        this.login = this.notesForm.controls['login']  as FormGroup;
        this.phone = this.notesForm.controls['phone']  as FormGroup;
        this.birthdate = this.notesForm.controls['birthdate']  as FormGroup;
        this.model = new MailModel(0, '', true, '', '');

        // unrelated, demonstrate usage of Map
        this.mapModel = new Map();
        this.mapModel.set('my name', 'Sean Levy');
        //console.log(this.mapModel.get('my name'));

        this.observeNameChange();
        this.observeFormChange();

        this.commBroker.getService(Consts.Services().Properties).setPropView('notes1')
    }

    isOldEnough(control:FormControl):any {
        if (!control.value) {
            return null;
        }
        let birthDatePlus18 = new Date(control.value);
        let year = birthDatePlus18.getFullYear();
        if (year < 1925)
            return {notValid: true};

        birthDatePlus18.setFullYear(birthDatePlus18.getFullYear() + 18);
        return birthDatePlus18 < new Date() ? null : {tooYoung: true};
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

