import {Component} from "@angular/core";
import {Consts} from "../../../../src/Conts";
import {FormGroup} from "@angular/forms";
import {MailModel} from "../../../models/MailModel";
import {CommBroker} from "../../../services/CommBroker";
import  ContactTemplate from './Contact.html!text';

@Component({
    selector: 'Contact',
    moduleId: __moduleName,
    template: ContactTemplate,
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

 this is a template-driven approach which allows us to build forms with very little code
 to use reactive approach see Notes1 component

 Suggestion: I recommend you use explicit Form creation via
 manual instance creation of Controls

 ref::
 http://blog.thoughtram.io/angular/2016/03/21/template-driven-forms-in-angular-2.html
 http://blog.thoughtram.io/angular/2016/06/22/model-driven-forms-in-angular-2.html

 **/

export class Contact {

    constructor(private commBroker:CommBroker) {
        this.commBroker.getService(Consts.Services().Properties).setPropView('Contact');
    }

    public user:User = {
        name: 'John',
        address: {
            address1: '11, High Street',
            postcode: '1234'
        }
    }

    public save(form:User, isValid:boolean) {
        alert(`status: ${isValid} ${JSON.stringify(form)}`);

    }

    private contacts = ['Call me', 'Email me', 'Page me (old school)'];
    model = new MailModel(1, 'your name', true, this.contacts[0], 'how can we help you?');
    submitted = false;
    registerForm:FormGroup;


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
    name:string;
    address?:{
        address1?:string;
        postcode?:string;
    }
}