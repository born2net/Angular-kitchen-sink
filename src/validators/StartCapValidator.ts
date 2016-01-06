import {Control} from 'angular2/common'

export default function StartCapValidator(control: Control): { [s: string]: boolean } {
    if (!control.value.match(/^[A-Z]/)) {
        return {notCapped: true};
    } else {
        return null;
    }
}
