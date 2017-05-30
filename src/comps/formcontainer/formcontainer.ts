import {Component, ContentChild, Directive, Optional} from "@angular/core";
import {NgControl} from "@angular/forms";

@Directive({
    selector: '[form-container-textbox]'
})
export class FormContainerTextBox {
    // create a member named control on this directive so we can access it from the outside
    constructor(@Optional() public control:NgControl){
    }
}

@Component({
    selector: 'form-container',
    styles: [`
            .has-error {
                background-color: red;
            }
    `],
    template: `
        <ng-content></ng-content>
        <label [class.has-error]="input?.control.invalid">status</label>
    `,
})
export class FormContainer {

    @ContentChild(FormContainerTextBox) input;
}

