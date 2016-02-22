import {Component, Host, Input} from "angular2/core";
import {AbstractControl, NgFormModel} from "angular2/common";

@Component({
    selector: 'display-error',
    template: `<div *ngIf="isDisplayed()">
                    <ng-content></ng-content>
               </div>`
})
export class DisplayError  {
    @Input('control')
    controlName:string;
    @Input()
    error:string;

    control:AbstractControl;
    // we inject the form model
    constructor(@Host()
                private formModel:NgFormModel) {

    }

    // we then find the control
    ngOnInit() {
        this.control = this.formModel.form.find(this.controlName);
    }

    // the div in the template will only be added if
    // the control is dirty and has the specified error
    isDisplayed() {
        return this.control.dirty && this .control.hasError(this.error);
    }
}