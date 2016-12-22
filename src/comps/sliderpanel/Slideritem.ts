import {Component, ChangeDetectionStrategy, ViewContainerRef, ChangeDetectorRef, Input} from "@angular/core";
import {Sliderpanel} from "./Sliderpanel";

@Component({
    selector: 'Slideritem',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
                    <button *ngIf="fromDirection" type="button" (click)="onPrev($event)" class="btn btn-default btn-sm">
                        <span class="fa fa-arrow-left "></span>
                    </button>
                    
                    <button *ngIf="toDirection" type="button" (click)="onNext($event)" class="btn btn-default btn-sm">
                        <span class="fa fa-arrow-right"></span>
                    </button>                
                        
                <ng-content></ng-content>
    `,
})
export class Slideritem {

    constructor(private viewContainer: ViewContainerRef, protected sliderPanel: Sliderpanel) {
        this.viewContainer.element.nativeElement.classList.add('page');
        this.sliderPanel.addSlider(this);
    }

    @Input() toDirection: 'left' | 'right';
    @Input() fromDirection: 'left' | 'right';
    @Input() to: string;
    @Input() from: string;

    public addClass(i_className) {
        this.viewContainer.element.nativeElement.classList.add(i_className);
    }

    public hasClass(i_className) {
        this.viewContainer.element.nativeElement.classList.contains(i_className);
    }

    public getNative() {
        return this.viewContainer.element.nativeElement;
    }

    public removeClass(i_className) {
        this.viewContainer.element.nativeElement.classList.remove(i_className);
    }

    protected slideTo(to: string, direction: string) {
        this.sliderPanel.slideToPage(to, direction)
    }

    private onNext(event) {
        this.slideTo(this.to, this.toDirection);
    }

    private onPrev(event) {
        this.slideTo(this.from, this.fromDirection);
    }
}

