System.register(["@angular/core", "../../sliderpanel/Sliderpanel", "../../../services/CommBroker", "./NotesBase", "../../myip/Myip", "../../puredialog/PureDialog", "../../puredialog/PureDialogDirective"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
    var core_1, Sliderpanel_1, CommBroker_1, NotesBase_1, Myip_1, PureDialog_1, PureDialogDirective_1;
    var Notes2;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Sliderpanel_1_1) {
                Sliderpanel_1 = Sliderpanel_1_1;
            },
            function (CommBroker_1_1) {
                CommBroker_1 = CommBroker_1_1;
            },
            function (NotesBase_1_1) {
                NotesBase_1 = NotesBase_1_1;
            },
            function (Myip_1_1) {
                Myip_1 = Myip_1_1;
            },
            function (PureDialog_1_1) {
                PureDialog_1 = PureDialog_1_1;
            },
            function (PureDialogDirective_1_1) {
                PureDialogDirective_1 = PureDialogDirective_1_1;
            }],
        execute: function() {
            Notes2 = (function (_super) {
                __extends(Notes2, _super);
                function Notes2(sliderPanel, commBroker) {
                    _super.call(this, sliderPanel, commBroker);
                    this.sliderPanel = sliderPanel;
                    this.commBroker = commBroker;
                    this.me = this;
                    this.slideLeft = 'notes3';
                    this.slideRight = 'notes1';
                }
                Notes2.prototype.openDialogBox = function () {
                    var pureDialog = this.pureDialogDirective.createDialog(PureDialog_1.PureDialog);
                    setTimeout(function () {
                        pureDialog.instance.onClickedExit();
                    }, 3000);
                };
                __decorate([
                    core_1.ViewChild(PureDialogDirective_1.PureDialogDirective), 
                    __metadata('design:type', PureDialogDirective_1.PureDialogDirective)
                ], Notes2.prototype, "pureDialogDirective", void 0);
                Notes2 = __decorate([
                    core_1.Component({
                        selector: 'Notes2',
                        providers: [Myip_1.MyIp],
                        entryComponents: [PureDialog_1.PureDialog],
                        template: "     \n                <button type=\"button\" (click)=\"onPrev($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-left\"></span>\n                </button>\n                <button type=\"button\" (click)=\"onNext($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-right\"></span>\n                </button>\n                <hr/>\n                <small>I am notes2 component</small>\n                <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n                  <button (click)=\"openModal()\" type=\"button\" class=\"btn btn-default\">Bootstrap 3 wrapped Modal</button>\n                </div>\n                <ModalDialog title=\"My owner is Notes2\" content=\"I am here to serve Notes2\" [owner]=\"me\">\n                </ModalDialog>\n                <hr/>\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"modal.open()\">Bootstrap 3 pure ng2 Modal</button>\n                <modal #modal>\n                    <modal-header [show-close]=\"true\">\n                        <h4 class=\"modal-title\">I'm a pure Angular2 modal!</h4>\n                    </modal-header>\n                    <modal-body>\n                        Hello World!\n                    </modal-body>\n                    <modal-footer [show-default-buttons]=\"true\"></modal-footer>\n                </modal>\n                <hr/>\n                <div dialogAnchor></div>\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"openDialogBox()\">Pure ng2 Modal</button>\n                <hr/>\n                <MyIp>\n                    <!-- remove entire snippet including this comment to have component inject default template -->\n                    <hr/>\n                      <div>\n                          <h4>Example of providing a default ng-content template if not provided by the consumer of the component</h4>\n                      </div>\n                    <hr/>\n                </MyIp>\n                <small>Example of @HostBinding / @HostListener print console.log() and add underscores</small>\n                <input type=\"text\" trimmed-input />\n                <hr/>\n                <h5>Press enter to jump to next input</h5>\n                <input (keyup.enter)=\"next.focus()\">\n                <input #next>\n                "
                    }), 
                    __metadata('design:paramtypes', [Sliderpanel_1.Sliderpanel, CommBroker_1.CommBroker])
                ], Notes2);
                return Notes2;
            }(NotesBase_1.NotesBase));
            exports_1("Notes2", Notes2);
        }
    }
});
//# sourceMappingURL=Notes2.js.map