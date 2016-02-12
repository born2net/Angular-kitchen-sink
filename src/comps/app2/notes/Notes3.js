"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var Sliderpanel_1 = require("../../sliderpanel/Sliderpanel");
var CommBroker_1 = require("../../../services/CommBroker");
var NotesBase_1 = require("./NotesBase");
var Minitab_1 = require("../../minitabs/Minitab");
var Minitabs_1 = require("../../minitabs/Minitabs");
var Notes3 = (function (_super) {
    __extends(Notes3, _super);
    function Notes3(sliderPanel, commBroker) {
        _super.call(this, sliderPanel, commBroker);
        this.sliderPanel = sliderPanel;
        this.commBroker = commBroker;
        this.me = this;
        this.slideLeft = 'notes4';
        this.slideRight = 'notes2';
    }
    Notes3 = __decorate([
        core_1.Component({
            selector: 'Notes3',
            directives: [Minitab_1.Minitab, Minitabs_1.Minitabs],
            template: " <button type=\"button\" (click)=\"onPrev($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-left\"></span>\n                </button>\n                <button type=\"button\" (click)=\"onNext($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-right\"></span>\n                </button>\n                <hr/>\n                <small>I am notes3 component</small>\n                 <mini-tabs>\n                  <mini-tab [tabTitle]=\"'Tab 1'\">Tab 1 Content</mini-tab>\n                  <mini-tab tabTitle=\"Tab 2\">Tab 2 Content</mini-tab>\n                  <mini-tab tabTitle=\"Tab 3\">Tab 3 Content</mini-tab>\n                  <mini-tab tabTitle=\"Tab 4\">Tab 4 Content</mini-tab>\n                  <mini-tab tabTitle=\"Tab 5\">Tab 5 Content</mini-tab>\n                </mini-tabs>\n                <small>I am a Minitab component (@ContentChildren)</small>\n                <ng-content></ng-content>"
        }), 
        __metadata('design:paramtypes', [Sliderpanel_1.Sliderpanel, CommBroker_1.CommBroker])
    ], Notes3);
    return Notes3;
}(NotesBase_1.NotesBase));
exports.Notes3 = Notes3;
//# sourceMappingURL=Notes3.js.map