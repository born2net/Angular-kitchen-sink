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
import {FORM_DIRECTIVES, FormBuilder, ControlGroup} from 'angular2/common'

@Component({
    selector: 'Notes1',
    directives: [ModalDialog, FORM_DIRECTIVES],
    pipes: [CharCount],
    styles: [`.ng-valid[required] {
          border-left: 5px solid #42A948; /* green */
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

        .ng-invalid {
          border-left: 5px solid #a94442; /* red */
       }`],
    template: ` <button type="button" (click)="onNext($event)" class="btn btn-default btn-sm goNext">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                </button>
                <hr/>
                <small>I am notes1 component</small>
                <hr/>
                <h1>Notes 1</h1>
                <div class="container">
                  <div [hidden]="submitted">

                    <!-- create a form and bind it directly to the ControlGroup we created manually instantiated in the controller below (i.e.: notesForm) -->
                    <!-- this is different from what we did in Contact.ts where we had Angualar automatically create a control group for us -->
                    <!-- and we just created a local variable their-->

                    <!-- To create a new ControlGroup and Controls implicitly use: -->
                    <!--  -->
                    <!-- ngForm and -->
                    <!-- ngControl -->
                    <!-- But to bind to an existing ControlGroup and Controls use: -->
                    <!--  -->
                    <!-- ngFormModel and -->
                    <!-- ngFormControl -->

                    <form [ngFormModel]="notesForm" (ngSubmit)="onSubmit(notesForm.value)">
                      <div class="form-group">
                        <label for="name">Enter your notes</label>
                        <!-- bind the textarea control to our manually created notesTextArea control -->
                        <textarea id="notesArea" type="text" class="form-control" [ngFormControl]="notesForm.controls['notesTextArea']" required [(ngModel)]="model.name" (change)="onChange($event)"></textarea>
                        <span>Total characters via Pipes: {{model.name | CharCount}}</span>
                        <br/>
                      </div>
                      <br/>
                      <button type="submit" class="btn btn-default" [disabled]="!notesForm.status">Submit</button>
                    </form>
                  </div>
                </div>
                `
})

export class Notes1 extends NotesBase {

    private notesForm:ControlGroup;

    constructor(fb:FormBuilder, protected sliderPanel:Sliderpanel, protected commBroker:CommBroker) {
        super(sliderPanel, commBroker);
        this.slideLeft = 'notes2';

        this.notesForm = fb.group({
            'notesTextArea': ['enter text here']
        })

    }
    model = new MailModel(0, 'enter your text to add to notes here', true, '', '');
    onSubmit(event) {
        bootbox.alert(`sent ${event.notesTextArea}`);
    }

    onChange(event) {
        if (event.target.value.length < 3)
            alert('text too short for subject');
    }
}
