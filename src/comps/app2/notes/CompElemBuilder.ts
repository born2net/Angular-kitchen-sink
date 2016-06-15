import {Component, ElementRef, Renderer } from '@angular/core';

@Component({
    selector: 'CompElemBuilder',
    template:`
    <div>the input was created dynamically</div>
  `
})
export class CompElemBuilder {
    ngAfterViewInit(){
        this.renderer.createElement(this.elRef.nativeElement, 'input', null);
    }

    constructor(
        public renderer:Renderer,
        public elRef:ElementRef
    ){}
}
