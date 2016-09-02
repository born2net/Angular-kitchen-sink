import {Component, ViewContainerRef, Inject} from '@angular/core';
import {BrowserDomAdapter} from '@angular/platform-browser/src/browser/browser_adapter';
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
    private el:any;
    private viewContainer:ViewContainerRef;
    private dom = new BrowserDomAdapter();
    private dom2:any;

    constructor(viewContainer:ViewContainerRef, @Inject(DOCUMENT) private doc) {
        var self = this;
        self.viewContainer = viewContainer;
        self.el = viewContainer.element.nativeElement;
        self.dom2 = doc.body;
    }

    private getElementByClass(element:string) {
        var self = this;
        var a = self.dom.getElementsByClassName(self.el, element)[0];
        var b = jQuery(self.dom2).find('.'+element,self.el)[0];
        return a;
        //return self.dom.getElementsByClassName(self.el, element)[0];
    }

    private removeAllClassesFrom(elementClass:any, selected?:boolean) {
        var self = this;
        var element = self.getElementByClass(elementClass);
        if (selected){
            jQuery(element).removeClass('selected');
            return;
        }
        jQuery(element).removeClass('left');
        jQuery(element).removeClass('right');
        jQuery(element).removeClass('center');
        jQuery(element).removeClass('transition');
    }

    private addClassesTo(elementClass:any, classesToAdd:string[]) {
        var self = this;
        var element = self.getElementByClass(elementClass);
        for (var i = 0; i < classesToAdd.length; i++) {
            self.dom.addClass(element, classesToAdd[i]);
        }
    }

    public slideToPage(toClassName:string, i_direction:string):void {
        var self = this;
        if (toClassName == 'selected')
            return;
        // Position the new page at the starting position of the animation
        self.removeAllClassesFrom(toClassName);
        self.addClassesTo(toClassName, ["page", i_direction]);
        // Position the new page and the current page at the ending position of their animation with a transition class indicating the duration of the animation and force reflow of page so it renders
        var parent = self.dom.parentElement(self.getElementByClass(toClassName));
        var grandparent = self.dom.parentElement(parent);
        self.dom.getProperty(grandparent, 'offsetWidth');
        self.removeAllClassesFrom(toClassName);
        self.addClassesTo(toClassName, ['page', 'transition', 'center']);
        self.removeAllClassesFrom('selected');
        self.addClassesTo('selected', ['page', 'transition', i_direction === 'left' ? 'right' : 'left']);
        self.removeAllClassesFrom('selected',true);
        self.addClassesTo(toClassName, ['selected']);
    }
}
