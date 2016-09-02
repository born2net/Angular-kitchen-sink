System.register(["../../../../src/Conts"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Conts_1;
    var NotesBase;
    return {
        setters:[
            function (Conts_1_1) {
                Conts_1 = Conts_1_1;
            }],
        execute: function() {
            NotesBase = (function () {
                function NotesBase(sliderPanel, commBroker) {
                    this.sliderPanel = sliderPanel;
                    this.commBroker = commBroker;
                    this.me = this;
                }
                NotesBase.prototype.openModal = function () {
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
            exports_1("NotesBase", NotesBase);
        }
    }
});
//# sourceMappingURL=NotesBase.js.map