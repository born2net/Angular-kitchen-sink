import {NgControl} from "@angular/forms";

interface ValidationResult {
    [key:string]:boolean;
}

export default function NameTakenValidator(control:NgControl):Promise<ValidationResult> {
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
