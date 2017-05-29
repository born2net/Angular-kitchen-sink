import { Component, Input, ChangeDetectionStrategy, ElementRef, Renderer } from '@angular/core';
import { Http, Response } from '@angular/http';
@Component({
    selector: 'svg-icon',
    template: `<ng-content></ng-content>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
    @Input()
    set name(val: string) {
        this.loadSvg(val);
    }
    @Input() alt: string;
    constructor(
        private http: Http,
        private renderer: Renderer,
        private elementRef: ElementRef) { }
    loadSvg(val: string) {
        this.http.get(`assets/${val}.svg`)
            .subscribe(
                res => {
                    // get our element and clean it out
                    const element = this.elementRef.nativeElement;
                    element.innerHTML = '';
                    // get response and build svg element
                    const response = res.text();
                    const parser = new DOMParser();
                    const svg = parser.parseFromString(response, 'image/svg+xml');
                    // insert the svg result
                    this.renderer.projectNodes(element, [svg.documentElement]);
                },
                err => { console.error(err); });
    }
}