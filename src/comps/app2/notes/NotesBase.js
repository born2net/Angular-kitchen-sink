System.register(["../../../Conts"], function(exports_1) {
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
                NotesBase.prototype.openModal1 = function () {
                    this.modalDialog.openModal();
                };
                NotesBase.prototype.onPrev = function (event) {
                    this.sliderPanel.slideToPage(this.slideRight, 'right');
                    this.commBroker.getService(Conts_1.Consts.Services().Properties).setPropeView(this.slideRight);
                };
                NotesBase.prototype.onNext = function (event) {
                    this.sliderPanel.slideToPage(this.slideLeft, 'left');
                    this.commBroker.getService(Conts_1.Consts.Services().Properties).setPropeView(this.slideLeft);
                };
                NotesBase.prototype.registerCaller = function (caller) {
                    this.modalDialog = caller;
                };
                return NotesBase;
            })();
            exports_1("NotesBase", NotesBase);
        }
    }
});
//# sourceMappingURL=NotesBase.js.map