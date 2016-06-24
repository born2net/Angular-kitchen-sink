import {Component, Input, Inject, forwardRef, Host} from "@angular/core";
import {REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl} from "@angular/forms";


@Component({
    selector: 'display-error',
    providers: [REACTIVE_FORM_DIRECTIVES],
    template: `<div *ngIf="isDisplayed()">
                    <ng-content></ng-content>
               </div>`
})
export class DisplayError {
    @Input('control')
    controlName:string;
    @Input()
    error:string;

    control:any;
    // we inject the form model
    // constructor(@Inject(forwardRef(() => FormGroup)) private formModel:FormGroup) {
    // constructor(@Host() @Inject(forwardRef(() => FormGroup)) private formModel:FormGroup) {
    constructor(@Host() private formModel:FormControl) {
        console.log(formModel);
    }

    // we then find the control
    ngOnInit() {
        this.control = this.formModel.find(this.controlName);
    }

    // the div in the template will only be added if
    // the control is dirty and has the specified error
    isDisplayed() {
        return this.control.dirty && this .control.hasError(this.error);
    }
}