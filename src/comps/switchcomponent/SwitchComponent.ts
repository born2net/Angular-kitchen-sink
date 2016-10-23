/**
 *  https://coryrylan.com/blog/angular-custom-form-controls-with-reactive-forms-and-ngmodel
 *  ref: http://plnkr.co/edit/Yj93mh5ZnX6ONtaMQPAQ?p=preview
 *
 **/

import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'SwitchComponent',
    moduleId: __moduleName,
    template: `
        <div (click)="switch()" class="switch" [ngClass]="{ 'checked': value }" [attr.title]="label">
          <input type="checkbox" class="switch-input" [value]="value" [attr.checked]="value" [attr.aria-label]="label">
          <span class="switch-label" data-on="On" data-off="Off"></span>
          <span class="switch-handle"></span>
        </div>
    `,
    styleUrls: ['./SwitchComponent.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SwitchComponent),
            multi: true
        }
    ]
})
export class SwitchComponent implements ControlValueAccessor {
    @Input() label = 'switch';
    @Input('value') _value = false;
    onChange: any = () => { };
    onTouched: any = () => { };

    get value() {
        return this._value;
    }

    set value(val) {
        this._value = val;
        this.onChange(val);
        this.onTouched();
    }

    constructor() { }

    registerOnChange(fn) {
        this.onChange = fn;
    }

    writeValue(value) {
        console.log(value);
        if (value) {
            this.value = value;
        }
    }

    registerOnTouched(fn) {
        this.onTouched = fn;
    }

    switch() {
        this.value = !this.value;
    }
}
