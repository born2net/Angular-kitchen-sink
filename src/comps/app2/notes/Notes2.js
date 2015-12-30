System.register(['angular2/core', "../../sliderpanel/Sliderpanel", "../../modaldialog/ModalDialog", "../../../services/CommBroker", "./NotesBase"], function(exports_1) {
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
    var core_1, Sliderpanel_1, ModalDialog_1, CommBroker_1, NotesBase_1;
    var Notes2;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Sliderpanel_1_1) {
                Sliderpanel_1 = Sliderpanel_1_1;
            },
            function (ModalDialog_1_1) {
                ModalDialog_1 = ModalDialog_1_1;
            },
            function (CommBroker_1_1) {
                CommBroker_1 = CommBroker_1_1;
            },
            function (NotesBase_1_1) {
                NotesBase_1 = NotesBase_1_1;
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
                Notes2 = __decorate([
                    core_1.Component({
                        selector: 'Notes2',
                        directives: [ModalDialog_1.ModalDialog],
                        template: " <button type=\"button\" (click)=\"onPrev($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n                </button>\n                <button type=\"button\" (click)=\"onNext($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"glyphicon glyphicon-chevron-right\"></span>\n                </button>\n                <small>I am notes2 component</small>\n                <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n                  <button (click)=\"openModal()\" type=\"button\" class=\"btn btn-default\">Open Modal</button>\n                </div>\n                <ModalDialog title=\"My owner is Notes2\" content=\"I am here to serve Notes2\" [owner]=\"me\">\n                </ModalDialog>\n                <ng-content></ng-content>"
                    }), 
                    __metadata('design:paramtypes', [Sliderpanel_1.Sliderpanel, CommBroker_1.CommBroker])
                ], Notes2);
                return Notes2;
            })(NotesBase_1.NotesBase);
            exports_1("Notes2", Notes2);
        }
    }
});
//# sourceMappingURL=Notes2.js.map