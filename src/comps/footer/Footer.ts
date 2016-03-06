import {Directive, HostListener, HostBinding} from "angular2/core";

@Directive({
    selector: 'a[data-footer]'
})
export class Footer {
    @HostListener('mouseover', ['$event.target'])
    onClick(link) {
        console.log("Let's go to Github...");
        return false;
    }

    // moore examples
    // @HostBinding('attr.role') role = 'button';
    // @HostListener('mouseenter') onMouseEnter() {...}

    // @HostBinding()
    // value:string;
    //
    // @HostListener('input', ['$event.target.value'])
    // onValueUpdate(updatedValue:string) {
    //     this.value = updatedValue.trim();
    // }


}