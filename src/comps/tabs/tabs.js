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
var Tabs = (function () {
    function Tabs() {
        this.tabs = [];
    }
    Tabs.prototype.selectTab = function (tab, event) {
        event.preventDefault;
        _deactivateAllTabs(this.tabs);
        tab.active = true;
        function _deactivateAllTabs(tabs) {
            tabs.forEach(function (tab) { return tab.active = false; });
        }
        return false;
    };
    Tabs.prototype.addTab = function (tab) {
        if (this.tabs.length === 0) {
            tab.active = true;
        }
        this.tabs.push(tab);
    };
    Tabs = __decorate([
        core_1.Component({
            selector: 'tabs',
            template: "\n    <ul class=\"nav nav-tabs\">\n      <li *ngFor=\"let tab of tabs\" (click)=\"selectTab(tab, $event)\" [class.active]=\"tab.active\">\n        <a href=\"#\">{{tab.title}}</a>\n      </li>\n    </ul>\n    <ng-content></ng-content>\n    <small>I am Tabs component</small>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], Tabs);
    return Tabs;
}());
exports.Tabs = Tabs;
//# sourceMappingURL=tabs.js.map