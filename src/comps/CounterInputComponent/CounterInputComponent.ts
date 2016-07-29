import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

/** Form custom counter component compatible with both template and model forms
    References:
        http://almerosteyn.com/2016/04/linkup-custom-control-to-ngcontrol-ngmodel
        http://blog.thoughtram.io/angular/2016/07/27/custom-form-controls-in-angular-2.html
**/

export function createCounterRangeValidator(maxValue, minValue) {
    return (c: FormControl) => {
        let err = {
            rangeError: {
                given: c.value,
                max: maxValue || 10,
                min: minValue || 0
            }
        };

        return (c.value > +maxValue || c.value < +minValue) ? err: null;
    }
}

@Component({
    selector: 'counter-input',
    template: `
        <div (click)="$event.preventDefault()">
            <button (click)="increase()">+</button> {{counterValue}} <button (click)="decrease()">-</button>
        </div>
  `,
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CounterInputComponent), multi: true },
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => CounterInputComponent), multi: true }
    ]
})
export class CounterInputComponent implements ControlValueAccessor {

    counterValue = 0;
    propagateChange:any = () => {};
    validateFn:any = () => {};

    @Input() counterRangeMax;
    @Input() counterRangeMin;

    ngOnInit() {
        this.validateFn = createCounterRangeValidator(this.counterRangeMax, this.counterRangeMin);
    }

    writeValue(value) {
        if (value) {
            this.counterValue = value;
        }
    }

    registerOnChange(fn) {
        this.propagateChange = fn;
    }

    registerOnTouched() {}

    increase() {
        this.counterValue++;
        this.propagateChange(this.counterValue);
    }

    decrease() {
        this.counterValue--;
        this.propagateChange(this.counterValue);
    }

    validate(c: FormControl) {
        return this.validateFn(c);
    }
}