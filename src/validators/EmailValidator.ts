import {Directive, forwardRef} from '@angular/core';
import {NgControl, NG_VALIDATORS} from '@angular/forms';

function validateEmailFactory() {
    return (c: NgControl) => {
        let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        return EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    };
}

// rc.4
//provide (NG_VALIDATORS, {useExisting: forwardRef(() => EmailValidator),  multi: true  })

@Directive({
    selector: '[validateEmail][ngControl],[validateEmail][ngModel],[validateEmail][ngFormControl]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => EmailValidator), multi: true
        }
    ]
})
export class EmailValidator {

    validator: Function;

    constructor() {
        this.validator = validateEmailFactory();
    }

    validate(c: NgControl) {
        return this.validator(c);
    }
}