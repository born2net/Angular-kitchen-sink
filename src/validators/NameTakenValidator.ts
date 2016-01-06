///<reference path="../../typings/app.d.ts"/>

import {Control} from 'angular2/common'

interface ValidationResult {
    [key:string]:boolean;
}

export default function NameTakenValidator(control:Control):Promise<ValidationResult> {
    let q = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (control.value === 'Sean') {
                resolve({"taken": true});
            } else {
                resolve(null);
            }
        }, 1000)
    });
    return q;
}
