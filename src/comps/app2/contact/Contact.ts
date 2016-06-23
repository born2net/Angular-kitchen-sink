import {Component} from "@angular/core";
import {Consts} from "../../../../src/Conts";
import {REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {MailModel} from "../../../models/MailModel";
import {CommBroker} from "../../../services/CommBroker";

@Component({
    selector: 'Contact',
    directives: [REACTIVE_FORM_DIRECTIVES],
    styles: [`
            .ng-invalid {
              border-left: 5px solid #a94442; /* red */
           }
           .ng-valid[required] {
                  border-left: 5px solid #42A948; /* green */
           }
           .form-control {
                width: 20%;
           }
       `],
    template: `
                <small>I am Contact component</small>
                <ng-content></ng-content>
                <div class="container">
                  <div [hidden]="submitted">
                    <h1>TO DO: Update form to RC.X</h1>
                    
                    <form [formGroup]="registerForm">
                      <label>Firstname:</label>
                      <input type="text" formControlName="firstname">
                    
                      <label>Lastname:</label>
                      <input type="text" formControlName="lastname">
                    
                     <fieldset formGroupName="address">
                          <label>Street:</label>
                          <input type="text" formControlName="street">
                        
                          <label>Zip:</label>
                          <input type="text" formControlName="zip">
                        
                          <label>City:</label>
                          <input type="text" formControlName="city">
                       </fieldset>
                      <button type="submit">Submit</button>
                    </form>
                 </div>
                 </div>

                    <!-- special tx to ng2-book via http://blog.ng-book.com/the-ultimate-guide-to-forms-in-angular-2/ -->

                    <!-- Importing FORM_DIRECTIVES automatically binds form to ngForm (which is a ControlGroup) and ngSubmit for us -->
                    <!-- To create a new ControlGroup and Controls implicitly use: -->
                    <!--  -->
                    <!-- ngForm and -->
                    <!-- ngControl -->
                    <!-- But to bind to an existing ControlGroup and Controls use: -->
                    <!--  -->
                    <!-- ngFormModel and -->
                    <!-- ngFormControl -->

                    <!--<form (ngSubmit)="onSubmit(contactForm.value)" #contactForm="ngForm">-->
                      <!--<div class="form-group">-->
                        <!--<label for="name">Name</label>-->
                        <!--<input type="text" class="form-control" required [(ngModel)]="model.name" (change)="onChange($event)" ngControl="name" #name="ngForm">-->
                        <!--<div [hidden]="name.valid" class="alert alert-danger">-->
                          <!--Name is required  field-->
                        <!--</div>-->
                      <!--</div>-->
                      <!--<div class="form-group">-->
                        <!--<label for="subject">Subject</label>-->
                        <!--<input type="text" class="form-control" (change)="onChange($event)" [(ngModel)]="model.subject" ngControl="subject" >-->
                      <!--</div>-->
                      <!--<div class="form-group">-->
                        <!--<label for="contactMethod">How should we contact you?</label>-->
                        <!--<select class="form-control" required (change)="onChange($event)" [(ngModel)]="model.contactMethod" ngControl="contactMethod" #contactMethod="ngForm" >-->
                          <!--<option *ngFor="let p of contacts" [value]="p">-->
                            <!--{{p}}-->
                          <!--</option>-->
                        <!--</select>-->
                        <!--<div [hidden]="contactMethod.valid" class="alert alert-danger">-->
                          <!--contact method is required-->
                        <!--</div>-->
                      <!--</div>-->
                      <!--<label class="pull-left">-->
                      <!--</label>-->
                      <!--<br/>-->
                      <!--<br/>-->
                      <!--<button type="submit" class="btn btn-default" [disabled]="!contactForm.form.valid">Submit</button>-->
                    <!--</form>-->
                  <!--</div>-->
                  <!--<div [hidden]="!submitted">-->
                    <!--<h2>You submitted the following:</h2>-->
                    <!--<div class="row">-->
                      <!--<div class="col-xs-3">Name</div>-->
                      <!--<div class="col-xs-9  pull-left">{{ model.name }}</div>-->
                    <!--</div>-->
                    <!--<div class="row">-->
                      <!--<div class="col-xs-3">Subject</div>-->
                      <!--<div class="col-xs-9 pull-left">{{ model.subject }}</div>-->
                    <!--</div>-->
                    <!--<div class="row">-->
                      <!--<div class="col-xs-3">Power</div>-->
                      <!--<div class="col-xs-9 pull-left">{{ model.contactMethod }}</div>-->
                    <!--</div>-->
                    <!--<div class="row">-->
                      <!--<div class="col-xs-3">Gender Male</div>-->
                      <!--<div class="col-xs-9 pull-left">{{ model.male }}</div>-->
                    <!--</div>-->
                    <!--<br>-->
                    <!--<button class="btn btn-default" (click)="submitted=false">Edit</button>-->
                  <!--</div>-->
                <!--</div>-->
                `
})

/**
 The Contact component demonstrates the usage of forms.
 Usage is implicit as done purely through the View.

 Suggestion: I recommend you use explicit Form creation via
 manual instance creation of Controls (inputs) and ControlGroup (Form) as it's a lot
 more flexible, see Notes1.ts for sample code
 **/
export class Contact {
    private contacts = ['Call me', 'Email me', 'Page me (old school)'];
    model = new MailModel(1, 'your name', true, this.contacts[0], 'how can we help you?');
    submitted = false;
    registerForm: FormGroup;
    constructor(private commBroker:CommBroker, private formBuilder: FormBuilder){
        this.commBroker.getService(Consts.Services().Properties).setPropView('Contact');
    }
    onSubmit(event) {
        console.log(event);
        if (event.contactMethod.indexOf('Page') > -1) {
            alert('Paging is really old, get a cell phone');
            this.submitted = false;
            return;
        }

        this.submitted = true;
    }
    ;
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstname: [],
            lastname: [],
            address: this.formBuilder.group({
                street: [],
                zip: [],
                city: []
            })
        });
    }

    onChange(event) {
        if (event.target.value.length < 3)
            alert('text too short for subject');
    }
}
