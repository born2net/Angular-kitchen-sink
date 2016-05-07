"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var browser_adapter_1 = require('@angular/platform-browser/src/browser/browser_adapter');
var Sliderpanel = (function () {
    function Sliderpanel(viewContainer) {
        this.dom = new browser_adapter_1.BrowserDomAdapter();
        var self = this;
        self.viewContainer = viewContainer;
        self.el = viewContainer.element.nativeElement;
    }
    Sliderpanel.prototype.getElementByClass = function (element) {
        var self = this;
        return self.dom.getElementsByClassName(self.el, element)[0];
    };
    Sliderpanel.prototype.removeAllClassesFrom = function (elementClass, selected) {
        var self = this;
        var element = self.getElementByClass(elementClass);
        if (selected) {
            self.dom.removeClass(element, 'selected');
            return;
        }
        self.dom.removeClass(element, 'left');
        self.dom.removeClass(element, 'right');
        self.dom.removeClass(element, 'center');
        self.dom.removeClass(element, 'transition');
    };
    Sliderpanel.prototype.addClassesTo = function (elementClass, classesToAdd) {
        var self = this;
        var element = self.getElementByClass(elementClass);
        for (var i = 0; i < classesToAdd.length; i++) {
            self.dom.addClass(element, classesToAdd[i]);
        }
    };
    Sliderpanel.prototype.slideToPage = function (toClassName, i_direction) {
        var self = this;
        if (toClassName == 'selected')
            return;
        self.removeAllClassesFrom(toClassName);
        self.addClassesTo(toClassName, ["page", i_direction]);
        var parent = self.dom.parentElement(self.getElementByClass(toClassName));
        var grandparent = self.dom.parentElement(parent);
        self.dom.getProperty(grandparent, 'offsetWidth');
        self.removeAllClassesFrom(toClassName);
        self.addClassesTo(toClassName, ['page', 'transition', 'center']);
        self.removeAllClassesFrom('selected');
        self.addClassesTo('selected', ['page', 'transition', i_direction === 'left' ? 'right' : 'left']);
        self.removeAllClassesFrom('selected', true);
        self.addClassesTo(toClassName, ['selected']);
    };
    Sliderpanel = __decorate([
        core_1.Component({
            selector: 'Sliderpanel',
            template: "<ng-content></ng-content>"
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef])
    ], Sliderpanel);
    return Sliderpanel;
}());
exports.Sliderpanel = Sliderpanel;
//# sourceMappingURL=Sliderpanel.js.map