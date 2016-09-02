import {NgControl} from '@angular/forms'

export default function StartCapValidator(control: NgControl): { [s: string]: boolean } {
    if (!control.value.match(/^[A-Z]/)) {
        return {notCapped: true};
    } else {
        return null;
    }
}
