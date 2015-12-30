import {Component} from "angular2/core";
import {Consts} from "../../Conts";
import {NgForm} from 'angular2/common'

export class MailModel {
    constructor(public id:number,
                public name:string,
                public male:boolean,
                public power:string,
                public alterEgo?:string) {
    }
}

@Component({
    selector: 'Contact',
    styles: [`.ng-valid[required] {
          border-left: 5px solid #42A948; /* green */
        }
        .form-control {
            width: 20%;
        }

        .ng-invalid {
          border-left: 5px solid #a94442; /* red */
       }`],
    template: `
                <small>I am Contact component</small>
                <ng-content></ng-content>
                <div class="container">
                  <div [hidden]="submitted">
                    <h1>Contact form</h1>
                    <form (ngSubmit)="onSubmit()" #heroForm="ngForm">
                      <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" required
                          [(ngModel)]="model.name"
                          (change)="onChange($event)"
                            ngControl="name"  #name="ngForm" >
                        <div [hidden]="name.valid" class="alert alert-danger">
                          Name is required
                        </div>
                      </div>

                      <div class="form-group">
                        <label for="alterEgo">Subject</label>
                        <input type="text" class="form-control"
                        (change)="onChange($event)"
                          [(ngModel)]="model.alterEgo"
                            ngControl="alterEgo" >
                      </div>

                      <div class="form-group">
                        <label for="power">How should we contact you?</label>
                        <select class="form-control" required
                        (change)="onChange($event)"
                          [(ngModel)]="model.power"
                            ngControl="power" #power="ngForm" >
                          <option *ngFor="#p of contacts" [value]="p">
                            {{p}}
                          </option>
                        </select>
                        <div [hidden]="power.valid" class="alert alert-danger">
                          Power is required
                        </div>
                      </div>
                      <label class="pull-left">
                      </label>
                      <br/>
                      <br/>


                      <button type="submit" class="btn btn-default"
                              [disabled]="!heroForm.form.valid">Submit</button>
                    </form>
                  </div>

                  <div [hidden]="!submitted">
                    <h2>You submitted the following:</h2>
                    <div class="row">
                      <div class="col-xs-3">Name</div>
                      <div class="col-xs-9  pull-left">{{ model.name }}</div>
                    </div>
                    <div class="row">
                      <div class="col-xs-3">Subject</div>
                      <div class="col-xs-9 pull-left">{{ model.alterEgo }}</div>
                    </div>
                    <div class="row">
                      <div class="col-xs-3">Power</div>
                      <div class="col-xs-9 pull-left">{{ model.power }}</div>
                    </div>
                    <div class="row">
                      <div class="col-xs-3">Gender Male</div>
                      <div class="col-xs-9 pull-left">{{ model.male }}</div>
                    </div>
                    <br>
                    <button class="btn btn-default" (click)="submitted=false">Edit</button>
                  </div>
                </div>
                `
})

export class Contact {
    private contacts = ['Call me', 'Email me', 'Page me (old school)'];
    model = new MailModel(1, 'your name', true, this.contacts[0], 'how can we help you?');
    submitted = false;
    onSubmit() {
        this.submitted = true;
    }

    onChange(event){

    }
}
