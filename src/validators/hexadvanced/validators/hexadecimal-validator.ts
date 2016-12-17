import {Directive} from '@angular/core';

import {
  NG_VALIDATORS,
  AbstractControl,
} from '@angular/forms';

@Directive({
  selector: '[hexadecimal][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: HexadecimalValueValidator, multi: true }
  ]
})
export class HexadecimalValueValidator {
  validate(control: AbstractControl): {[validator: string]: string} {
    const expression = /^([0-9a-fA-F]+)$/i;
    if (!control.value) { // the [required] validator will check presence, not us
      return null;
    }

    const value = control.value.trim();
    if (expression.test(value)) {
      return null;
    }

    return {hexadecimal: 'Please enter a hexadecimal value (alphanumeric, 0-9 and A-F)'};
  }
}
