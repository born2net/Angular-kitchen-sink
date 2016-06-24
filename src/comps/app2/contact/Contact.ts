import {Component} from "@angular/core";
import {Consts} from "../../../../src/Conts";
import {REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {MailModel} from "../../../models/MailModel";
import {CommBroker} from "../../../services/CommBroker";

@Component({
    selector: 'Contact',
    directives: [REACTIVE_FORM_DIRECTIVES],
    moduleId: __moduleName,
    templateUrl: 'Contact.html',
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
       `]
})

/**
 The Contact component demonstrates the usage of forms.
 Usage is implicit as done purely through the View.

 Suggestion: I recommend you use explicit Form creation via
 manual instance creation of Controls
 **/

export class Contact {

    public user: User = {
        name: 'John',
        address: {
            address1: '11, High Street',
            postcode: '1234'
        }
    }

    public save(form: User, isValid: boolean) {
        alert(`status: ${isValid} ${JSON.stringify(form)}`);

    }


    private contacts = ['Call me', 'Email me', 'Page me (old school)'];
    model = new MailModel(1, 'your name', true, this.contacts[0], 'how can we help you?');
    submitted = false;
    registerForm:FormGroup;

    constructor(private commBroker:CommBroker, private formBuilder:FormBuilder) {
        this.commBroker.getService(Consts.Services().Properties).setPropView('Contact');
    }

    // ngOnInit() {
    //     this.registerForm = this.formBuilder.group({
    //         firstname: [],
    //         lastname: [],
    //         address: this.formBuilder.group({
    //             street: [],
    //             zip: [],
    //             city: []
    //         })
    //     });
    // }

    onChange(event) {
        if (event.target.value.length < 3)
            alert('text too short for subject');
    }
}


export interface User {
    name: string;
    address?: {
        address1?: string;
        postcode?: string;
    }
}