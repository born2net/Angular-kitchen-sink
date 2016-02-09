import {Directive, HostListener} from "angular2/core";

@Directive({
    selector: 'a[data-footer]'
})
export class Footer {
    @HostListener('mouseover', ['$event.target'])
    onClick(link) {
        console.log("Let's go to Github...");
        return false;
    }
}