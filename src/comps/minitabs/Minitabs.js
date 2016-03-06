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
var core_1 = require('angular2/core');
var Minitab_1 = require('./Minitab');
var Minitabs = (function () {
    function Minitabs() {
        this.toggleClass = false;
    }
    Object.defineProperty(Minitabs.prototype, "style", {
        set: function (i_style) {
            this._style = i_style;
        },
        enumerable: true,
        configurable: true
    });
    Minitabs.prototype.ngAfterViewChecked = function () {
    };
    Minitabs.prototype.isAccent = function () {
        this.toggleClass = !this.toggleClass;
        this.myTabs.map(function (i) {
            console.log('my tabs ' + i._appElement.nativeElement);
        });
    };
    Minitabs.prototype.ngAfterContentInit = function () {
        console.log(this.tabs);
        var activeTabs = this.tabs.filter(function (tab) { return tab.active; });
        if (activeTabs.length === 0)
            this.selectTab(this.tabs.first);
    };
    Minitabs.prototype.selectTab = function (tab, event) {
        event ? event.preventDefault() : null;
        this.tabs.toArray().forEach(function (tab) { return tab.active = false; });
        tab.active = true;
    };
    __decorate([
        core_1.ViewChildren('tabItem'), 
        __metadata('design:type', core_1.QueryList)
    ], Minitabs.prototype, "myTabs", void 0);
    __decorate([
        core_1.Input('style'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], Minitabs.prototype, "style", null);
    __decorate([
        core_1.ContentChildren(Minitab_1.Minitab), 
        __metadata('design:type', core_1.QueryList)
    ], Minitabs.prototype, "tabs", void 0);
    Minitabs = __decorate([
        core_1.Component({
            selector: 'mini-tabs',
            styles: ["\n        .accent {\n            background-color: lightgray;\n        }\n    "],
            template: "\n    <button [ngStyle]=\"_style\" (click)=\"isAccent($event)\">toggle a class style on/off</button>\n    <ul class=\"nav nav-tabs\">\n      <li #tabItem *ngFor=\"#tab of tabs\" (click)=\"selectTab(tab,$event)\" [class.active]=\"tab.active\"\n        [class.accent]=\"toggleClass\">\n        <a href=\"#\">{{tab.title}}</a>\n      </li>\n    </ul>\n    <ng-content></ng-content>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], Minitabs);
    return Minitabs;
}());
exports.Minitabs = Minitabs;
//# sourceMappingURL=Minitabs.js.map