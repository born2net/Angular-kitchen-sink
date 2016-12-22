import {
    Component,
    ViewContainerRef,
    Inject
} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import {Slideritem} from "./Slideritem";

/**
 @class Sliderpanel
 example: this.slideToPage('campaignNameSelectorView', 'left')
 **/

@Component({
    selector: 'Sliderpanel',
    template: `<ng-content></ng-content>`
})

export class Sliderpanel {
    private el: any;
    private viewContainer: ViewContainerRef;
    private dom: HTMLBodyElement;
    private sliders: Array<any> = [];

    constructor(viewContainer: ViewContainerRef, @Inject(DOCUMENT) private doc) {
        this.dom = doc.body;
        this.viewContainer = viewContainer;
        this.el = viewContainer.element.nativeElement;
    }

    private getElementByClass(element: string) {
        var jq: any = jQuery;
        return jq(this.dom).find('.' + element, this.el)[0];
    }

    private removeAllClassesFrom(elementClass: any, selected?: boolean) {
        var element = this.getElementByClass(elementClass);
        if (selected) {
            jQuery(element).removeClass('selected');
            return;
        }
        jQuery(element).removeClass('left');
        jQuery(element).removeClass('right');
        jQuery(element).removeClass('center');
        jQuery(element).removeClass('transition');
    }

    private addClassesTo(elementClass: any, classesToAdd: string[]) {
        var element = this.getElementByClass(elementClass);
        for (var i = 0; i < classesToAdd.length; i++) {
            jQuery(element).addClass(classesToAdd[i])
        }
    }

    public slideToPage(toClassName: string, i_direction: string): void {
        if (toClassName == 'selected')
            return;
        // Position the new page at the starting position of the animation
        this.removeAllClassesFrom(toClassName);
        this.addClassesTo(toClassName, ["page", i_direction]);
        // Position the new page and the current page at the ending position of their animation with a transition class indicating the duration of the animation and force reflow of page so it renders
        var parent = jQuery(this.getElementByClass(toClassName)).parent();
        var grandparent = jQuery(parent).parent();
        var offsetWidth = jQuery(grandparent).prop('offsetWidth');
        this.removeAllClassesFrom(toClassName);
        this.addClassesTo(toClassName, ['page', 'transition', 'center']);
        this.removeAllClassesFrom('selected');
        this.addClassesTo('selected', ['page', 'transition', i_direction === 'left' ? 'right' : 'left']);
        this.removeAllClassesFrom('selected', true);
        this.addClassesTo(toClassName, ['selected']);
    }

    public addSlider(i_slider) {
        this.sliders.push(i_slider);
    }
}
