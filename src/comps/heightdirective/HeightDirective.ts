import {Directive, ElementRef, EventEmitter, Output, OnInit} from "@angular/core";

@Directive({
    selector: "[HeightDirective]",
    host: {
        '(window:resize)': 'onResize($event)',
    },
})
export class HeightDirective implements OnInit {
    @Output() resizing = new EventEmitter<number>(false);

    constructor(
        private el: ElementRef
    ) {
    }

    ngOnInit() {
        this.onResize(null);
    }

    private onResize(e: any) {
        let height = this.el.nativeElement.clientHeight;
        // console.log("Element height", this.el.nativeElement.clientHeight);
        this.resizing.emit(height); // removed due to stack overflow
    }
}