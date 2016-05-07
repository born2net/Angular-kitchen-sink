import {Directive, ElementRef} from '@angular/core'

/**
 * Example of directive exporting its instance variable to the entire template it's hosted
 * in via the exportAs property
 */
@Directive({
    selector: ' [ popup ] ',
    inputs: ['message'],
    exportAs: 'popup',
    host: {
        '(click)': 'displayMessage()'
    }
})
class Popup {
    message:String;

    constructor(_elementRef:ElementRef) {
        console .log(_elementRef);
    }

    displayMessage():void {
        alert(this.message);
    }
}