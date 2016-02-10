"use strict";
var Conts_1 = require("../../../../src/Conts");
var NotesBase = (function () {
    function NotesBase(sliderPanel, commBroker) {
        this.sliderPanel = sliderPanel;
        this.commBroker = commBroker;
        this.me = this;
    }
    NotesBase.prototype.openModal = function () {
        this.modalDialog.openModal();
    };
    NotesBase.prototype.onPrev = function (event) {
        this.sliderPanel.slideToPage(this.slideRight, 'right');
        this.commBroker.getService(Conts_1.Consts.Services().Properties).setPropView(this.slideRight);
    };
    NotesBase.prototype.onNext = function (event) {
        this.sliderPanel.slideToPage(this.slideLeft, 'left');
        this.commBroker.getService(Conts_1.Consts.Services().Properties).setPropView(this.slideLeft);
    };
    NotesBase.prototype.registerCaller = function (caller) {
        this.modalDialog = caller;
    };
    return NotesBase;
}());
exports.NotesBase = NotesBase;
//# sourceMappingURL=NotesBase.js.map