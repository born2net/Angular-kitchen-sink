import {
    Component,
    ViewContainerRef,
    Inject
} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

/**
 @class Sliderpanel
 example: self.slideToPage('campaignNameSelectorView', 'left')
 **/
@Component({
    selector: 'Sliderpanel',
    template: `<ng-content></ng-content>`
})

export class Sliderpanel {
    private el: any;
    private viewContainer: ViewContainerRef;
    private dom: any;

    constructor(viewContainer: ViewContainerRef, @Inject(DOCUMENT) private doc) {
        var self = this;
        self.dom = doc.body;
        self.viewContainer = viewContainer;
        self.el = viewContainer.element.nativeElement;
    }

    private getElementByClass(className: string): HTMLElement {
        var self = this;
        var res = jQuery(self.dom).find(self.el, '.' + className)[0];
        // var b = jQuery(self.dom).find('.hidden');
        // var res = self.dom.getElementsByClassName(self.el, className);
        // var res = self.dom.getElementsByClassName('left');
        // var res = self.dom.getElementsByClassName(self.el, className)[0];
        return res;
    }

    private removeAllClassesFrom(elementClass: any, selected?: boolean) {
        var self = this;
        var element = self.getElementByClass(elementClass);
        if (selected) {
            jQuery(element).removeClass('selected');
            // self.dom.removeClass(element, 'selected');
            return;
        }
        jQuery(element).removeClass('left');
        jQuery(element).removeClass('right');
        jQuery(element).removeClass('right');
        jQuery(element).removeClass('transition');
        // self.dom.removeClass(element, 'left');
        // self.dom.removeClass(element, 'right');
        // self.dom.removeClass(element, 'right');
        // self.dom.removeClass(element, 'transition');
    }

    private addClassesTo(elementClass: any, classesToAdd: string[]) {
        var self = this;
        var element = self.getElementByClass(elementClass);
        for (var i = 0; i < classesToAdd.length; i++) {
            // self.dom.addClass(element, classesToAdd[i]);
            jQuery(element).addClass(classesToAdd[i])
        }
    }

    public slideToPage(toClassName: string, i_direction: string): void {
        var self = this;
        if (toClassName == 'selected')
            return;
        // Position the new page at the starting position of the animation
        self.removeAllClassesFrom(toClassName);
        self.addClassesTo(toClassName, ["page", i_direction]);
        // Position the new page and the current page at the ending position of their animation with a transition class indicating the duration of the animation and force reflow of page so it renders
        var parent = jQuery(self.getElementByClass(toClassName)).parent();
        // var parent = self.dom.parentElement(self.getElementByClass(toClassName));
        var grandparent = jQuery(parent).parent();
        // var grandparent = self.dom.parentElement(parent);
        var offsetWidth = jQuery(grandparent).prop('offsetWidth');
        // self.dom.getProperty(grandparent, 'offsetWidth');
        self.removeAllClassesFrom(toClassName);
        self.addClassesTo(toClassName, ['page', 'transition', 'center']);
        self.removeAllClassesFrom('selected');
        self.addClassesTo('selected', ['page', 'transition', i_direction === 'left' ? 'right' : 'left']);
        self.removeAllClassesFrom('selected', true);
        self.addClassesTo(toClassName, ['selected']);
    }
}
