/**
 * Created by Tareq Boulakjar. from angulartypescript.com
 */
import {Component} from '@angular/core';
import {CORE_DIRECTIVES } from '@angular/common';
import {REACTIVE_FORM_DIRECTIVES, FormGroup, Validators, FormControl, FormBuilder} from "@angular/forms";
import {ButtonCheckbox} from './button-checkbox.component';
import {ButtonRadio} from './button-radio.component';
/*Angular 2 Button*/
@Component({
    selector: 'my-app',
    template:`
                    <h3>Switch Button (toggle)</h3>
                    <p class="card card-block card-header"><b>{{switchButtonModel}}</b></p>
                    <button type="button" class="btn btn-primary"
                            [(ngModel)]="switchButtonModel" btnCheckbox
                            btnCheckboxTrue="1" btnCheckboxFalse="0">
                      Switch Button
                    </button>
                    
                    <h3>Checkbox Set</h3>
                    <p class="card card-block card-header">
                    BMW: <span style="color: red">{{checkButtonModel.bmw}}</span>
                    Audi: <span style="color: red">{{checkButtonModel.audi}}</span>
                    Volkswagen: <span style="color: red">{{checkButtonModel.volkswagen}}</span>
                    </p>
                    <div class="btn-group">
                      <label class="btn btn-primary" [(ngModel)]="checkButtonModel.bmw"  btnCheckbox>BMW</label>
                      <label class="btn btn-primary" [(ngModel)]="checkButtonModel.audi" btnCheckbox>Audi</label>
                      <label class="btn btn-primary" [(ngModel)]="checkButtonModel.volkswagen" btnCheckbox>Volkswagen</label>
                    </div>

                    <h3>Radio Button</h3>
                    <p class="card card-block card-header"><span style="color: red">{{radioButtonModel || 'No Value Selected !'}}</span></p>
                    <div class="btn-group">
                      <label class="btn btn-primary" [(ngModel)]="radioButtonModel" btnRadio="Porsche">Porsche</label>
                      <label class="btn btn-primary" [(ngModel)]="radioButtonModel" btnRadio="Maserati">Maserati</label>
                      <label class="btn btn-primary" [(ngModel)]="radioButtonModel" btnRadio="Opel">Opel</label>
                    </div>

                    <h3>Radio Button with Uncheckable option (ctrl + click)</h3>
                    <div class="btn-group">
                      <label class="btn btn-success" [(ngModel)]="radioButtonModel" btnRadio="Porsche" uncheckable>Porsche</label>
                      <label class="btn btn-success" [(ngModel)]="radioButtonModel" btnRadio="Maserati"uncheckable>Maserati</label>
                      <label class="btn btn-success" [(ngModel)]="radioButtonModel" btnRadio="Opel" uncheckable>Opel</label>
                    </div>

             `,
    directives: [ ButtonCheckbox, ButtonRadio, CORE_DIRECTIVES, REACTIVE_FORM_DIRECTIVES ]
})
export class Angular2Button {
    //Switch button or toggle button contains 1 or 0
    private switchButtonModel:string = '1';
    //Radio button contains one value from a set of pre defined values
    private radioButtonModel:string = 'Maserati';
    //Set multiple values
    public checkButtonModel:any = {bmw: false, audi: true, volkswagen: false};
}