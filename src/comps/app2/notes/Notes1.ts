///<reference path="../../../../typings/app.d.ts"/>

import {Component} from 'angular2/core';
import {Sliderpanel} from "../../sliderpanel/Sliderpanel";
import {ModalDialog} from "../../modaldialog/ModalDialog";
import {RegisterCaller} from "../../../interfaces/RegisterCaller";
import {CommBroker} from "../../../services/CommBroker";
import {Properties} from "../properties/Properties";
import {Consts} from "../../../Conts";
import {NotesBase} from "./NotesBase";
import {MailModel} from "../contact/Contact";
import {CharCount} from "../../../pipes/CharCount";
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators, AbstractControl} from 'angular2/common'
import StartCapValidator from "../../../validators/StartCapValidator";

@Component({
    selector: 'Notes1',
    directives: [ModalDialog, FORM_DIRECTIVES],
    pipes: [CharCount],
    styles: [`
               .ng-valid[required] {
                  border-left: 5px solid #42A948; /* green */
                }
                .ng-invalid {
                  border-left: 5px solid #a94442; /* red */
                }
                .form-control {
                    width: 20%;
                }
                #totalChar {
                   border: none;
                }
                #summary {
                    width: 20%;
                }
                #notesArea {
                   width: 50%;
                   height: 200px;
                }
                .panelColorError {
                   background-color: #ffe4e4;
                }

       `],
    template: ` <button type="button" (click)="onNext($event)" class="btn btn-default btn-sm goNext">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                </button>
                <hr/>
                <small>I am notes1 component</small>
                <hr/>
                <h1>Notes 1</h1>
                <div class="container">
                  <div [hidden]="submitted">

                    <!-- special tx to ng2-book via http://blog.ng-book.com/the-ultimate-guide-to-forms-in-angular-2/ -->

                    <!-- create a form and bind it directly to the ControlGroup we created manually instantiated in the controller below (i.e.: notesForm) -->
                    <!-- this is different from what we did in Contact.ts where we had Angualar automatically create a control group for us -->
                    <!-- and we just created a local variable their-->

                    <!-- To create a new ControlGroup and Controls implicitly use (used here in Contact.ts): -->
                    <!--  -->
                    <!-- ngForm and -->
                    <!-- ngControl -->
                    <!-- But to bind to an existing ControlGroup and Controls use explicitly via FormBuilder (used in this component): -->
                    <!--  -->
                    <!-- ngFormModel and -->
                    <!-- ngFormControl -->

                    <div [class.panelColorError]="!notesForm.valid">
                        <form [ngFormModel]="notesForm" (ngSubmit)="onSubmit(notesForm.value)">
                          <div class="form-group">
                            <input type="text" class="form-control" required [ngFormControl]="notesForm.controls['userName']">
                              <div *ngIf="!userName.valid" class="alert alert-warning alert-dismissible" role="alert">
                                  <strong>Warning!</strong> are you a robot?
                              </div>
                            <label for="name">Enter your notes</label>

                            <!-- bind the textarea control to our manually created notesTextArea control -->
                            <textarea id="notesArea" type="text" class="form-control"
                                [ngFormControl]="notesForm.controls['notesTextArea']" required
                                [(ngModel)]="model.name" (change)="onChange($event)"></textarea>
                            <div *ngIf="notesTextArea.hasError('notCapped') && notesTextArea.touched" class="alert alert-warning alert-dismissible" role="alert">
                               <strong>Warning!</strong> Must start with first capital letter
                            </div>
                            <div *ngIf="!notesForm.valid && notesTextArea.touched" class="alert alert-warning alert-dismissible" role="alert">
                                <strong>Warning!</strong> something is not right with the form
                            </div>
                            <span>Total characters via Pipes: {{model.name | CharCount}}</span>
                            <br/>
                          </div>
                          <br/>
                          <button type="submit" class="btn btn-default" [disabled]="!notesForm.valid">Submit</button>
                       </form>
                    </div>

                `
})

/**
 The first Note1 slider component in a series of sliders / notes.
 Demonstrates the usage of explicit form configuration.
 **/
export class Notes1 extends NotesBase {

    private notesForm:ControlGroup;
    private notesTextArea:AbstractControl;
    private userName:AbstractControl;
    private model:MailModel;
    private mapModel:Map<any, any>; // demonstrates map although we are not using it for anything


    constructor(fb:FormBuilder, protected sliderPanel:Sliderpanel, protected commBroker:CommBroker) {
        super(sliderPanel, commBroker);
        this.slideLeft = 'notes2';

        this.notesForm = fb.group({
            'userName': ['user name', Validators.required],
            'notesTextArea': ['enter text here',
                Validators.compose([
                    Validators.required,
                    StartCapValidator])]
        });

        // gran an instance of our notesTextControl from the from
        this.notesTextArea = this.notesForm.controls['notesTextArea'];
        this.userName = this.notesForm.controls['userName'];

        this.model = new MailModel(0, '', true, '', '');

        // Demonstrate usage of Map
        this.mapModel = new Map();
        this.mapModel.set('my name', 'Sean Levy');
        //console.log(this.mapModel.get('my name'));
    }

    onSubmit(event) {
        bootbox.alert(`sent ${event.notesTextArea}`);
    }

    onChange(event) {
        if (event.target.value.length < 3)
            console.log('text too short for subject');
    }
}
