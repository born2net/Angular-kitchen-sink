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
var ModalDialog_1 = require("../../modaldialog/ModalDialog");
var CommBroker_1 = require("../../../services/CommBroker");
var NotesBase_1 = require("./NotesBase");
var Myip_1 = require("../../myip/Myip");
var ng2_bs3_modal_1 = require('ng2-bs3-modal/dist/ng2-bs3-modal');
var TrimmedInput_1 = require("../../trimmedinput/TrimmedInput");
var Notes2 = (function (_super) {
    __extends(Notes2, _super);
    function Notes2(sliderPanel, commBroker) {
        _super.call(this, sliderPanel, commBroker);
        this.sliderPanel = sliderPanel;
        this.commBroker = commBroker;
        this.me = this;
        this.slideLeft = 'notes3';
        this.slideRight = 'notes1';
    }
    Notes2 = __decorate([
        core_1.Component({
            selector: 'Notes2',
            providers: [Myip_1.MyIp],
            directives: [ModalDialog_1.ModalDialog, Myip_1.MyIp, TrimmedInput_1.TrimmedInput, ng2_bs3_modal_1.MODAL_DIRECTIVES],
            template: "\n                <button type=\"button\" (click)=\"onPrev($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-left\"></span>\n                </button>\n                <button type=\"button\" (click)=\"onNext($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-right\"></span>\n                </button>\n                <hr/>\n                <small>I am notes2 component</small>\n                <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n                  <button (click)=\"openModal()\" type=\"button\" class=\"btn btn-default\">Bootstrap 3 wrapped Modal</button>\n                </div>\n                <ModalDialog title=\"My owner is Notes2\" content=\"I am here to serve Notes2\" [owner]=\"me\">\n                </ModalDialog>\n                <hr/>\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"modal.open()\">Bootstrap 3 pure ng2 Modal</button>\n                <modal #modal>\n                    <modal-header [show-close]=\"true\">\n                        <h4 class=\"modal-title\">I'm a pure Angular2 modal!</h4>\n                    </modal-header>\n                    <modal-body>\n                        Hello World!\n                    </modal-body>\n                    <modal-footer [show-default-buttons]=\"true\"></modal-footer>\n                </modal>\n\n                <MyIp></MyIp>\n                <small>Example of @HostBinding / @HostListener print console.log() and add underscores</small>\n                <input type=\"text\" trimmed-input />\n                <ng-content></ng-content>"
        }), 
        __metadata('design:paramtypes', [Sliderpanel_1.Sliderpanel, CommBroker_1.CommBroker])
    ], Notes2);
    return Notes2;
}(NotesBase_1.NotesBase));
exports.Notes2 = Notes2;
//# sourceMappingURL=Notes2.js.map