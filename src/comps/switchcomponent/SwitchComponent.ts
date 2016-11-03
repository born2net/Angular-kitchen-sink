/**
 *  https://coryrylan.com/blog/angular-custom-form-controls-with-reactive-forms-and-ngmodel
 *  ref: http://plnkr.co/edit/Yj93mh5ZnX6ONtaMQPAQ?p=preview
 *
 **/

import {
    Component,
    Input,
    forwardRef
} from '@angular/core';
import {
    ControlValueAccessor,
    NG_VALUE_ACCESSOR
} from '@angular/forms';

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
    styles: [`
.switch {
    position: relative;
    display: inline-block;
    vertical-align: top;
    width: 80px;
    height: 30px;
    padding: 3px;
    background-color: none;
    cursor: pointer;
    overflow: visible;
}

.switch-input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
}

.switch-label {
    position: relative;
    display: block;
    height: inherit;
    font-size: 16px;
    font-weight: normal;
    text-transform: uppercase;
    background: #ccc;
    border-radius: 4px;
    transition: 0.15s ease-out;
    transition-property: opacity background;
    color: #2d2d2d;
}

.switch-label::before, .switch-label::after {
    position: absolute;
    top: 50%;
    margin-top: -.5em;
    line-height: 1;
    transition: inherit;
}

.switch-label::before {
    content: attr(data-off);
    right: 11px;
    color: #fff;
}

.switch-label::after {
    content: attr(data-on);
    left: 11px;
    color: #fff;
    opacity: 0;
}

.switch-handle {
    position: absolute;
    top: 9px;
    left: 12px;
    width: 18px;
    height: 18px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 1px 1px 5px #2d2d2d;
    transition: left 0.15s ease-out;
}

.checked .switch-label {
    background: #4CAF50;
    box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.5), inset 0 0 3px rgba(0, 0, 0, 0.15);
}

.checked .switch-label::before {
    opacity: 0;
}

.checked .switch-label::after {
    opacity: 1;
}

.checked .switch-handle {
    left: 50px;
    box-shadow: -1px 1px 5px rgba(45, 45, 45, 0.41);
}
`],
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
    onChange: any = () => {
    };
    onTouched: any = () => {
    };

    get value() {
        return this._value;
    }

    set value(val) {
        this._value = val;
        this.onChange(val);
        this.onTouched();
    }

    constructor() {
    }

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
