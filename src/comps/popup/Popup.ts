import {Directive, ElementRef} from "@angular/core";

/**
 * Example of directive exporting its instance variable to the entire template it's hosted
 * in via the exportAs property
 * only directives need to exportAs so we can access their internals, see:
 * https://plnkr.co/edit/IlLtBY7Ic9yKiRIpjukf?p=preview
 */
@Directive({
    selector: '[popup]',
    inputs: ['message'],
    exportAs: 'popup',
    host: {
        '(click)': 'displayMessage()'
    }         
})
export class Popup {
    message:String = 'hello';

    constructor(_elementRef:ElementRef) {
        console .log(_elementRef);
    }

    public displayMessage():void {
        alert(this.message);
    }
}