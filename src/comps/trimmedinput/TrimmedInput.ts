import {HostListener, HostBinding, Directive} from 'angular2/core';

@Directive({
    selector: '[trimmed-input]'
})

export class TrimmedInput {

    // more examples
    // @HostBinding('attr.role') role = 'button';
    // @HostListener('mouseenter') onMouseEnter() {...}

    // manually bind into the dom from controller
    @HostBinding() value:string;

    // manually add event listener into the a dom member property
    @HostListener("input", ["$event.target.value"])
    onChange(updatedValue: string) {
        this.value = updatedValue.trim() + '_';
        console.log(this.value)
    }

    constructor(){
        this.value = 'foo';
    }
}


