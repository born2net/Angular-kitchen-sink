import {Component, Input, Inject, forwardRef, Host} from "@angular/core";
import {FormGroup, FormControl} from "@angular/forms";


@Component({
    selector: 'display-error',
    template: `<div *ngIf="isDisplayed()">
                    <ng-content></ng-content>
               </div>`
})
export class DisplayError {
    @Input('formGroup')
    formGroup:FormGroup;
    @Input('control')
    controlName:string;
    @Input()
    error:string;

    control:any;
    // we inject the form model
    // constructor(@Inject(forwardRef(() => FormGroup)) private formModel:FormGroup) {
    // constructor(@Host() @Inject(forwardRef(() => FormGroup)) private formModel:FormGroup) {

    // broken in new forms rc.3 so changed to passing in formGroup instead
    // constructor(@Host() private formModel:FormGroup) {
    //     console.log(FormGroup);
    // }

    // we then find the control
    ngOnInit() {
        this.control = this.formGroup.find(this.controlName);
    }

    // the div in the template will only be added if
    // the control is dirty and has the specified error
    isDisplayed() {
        return this.control.dirty && this .control.hasError(this.error);
    }
}