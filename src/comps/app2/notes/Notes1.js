System.register(['angular2/core', "../../sliderpanel/Sliderpanel", "../properties/Properties", "../../modaldialog/ModalDialog"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Sliderpanel_1, Properties_1, ModalDialog_1;
    var Notes1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Sliderpanel_1_1) {
                Sliderpanel_1 = Sliderpanel_1_1;
            },
            function (Properties_1_1) {
                Properties_1 = Properties_1_1;
            },
            function (ModalDialog_1_1) {
                ModalDialog_1 = ModalDialog_1_1;
            }],
        execute: function() {
            Notes1 = (function () {
                function Notes1(sliderPanel, properties) {
                    this.sliderPanel = sliderPanel;
                    this.properties = properties;
                    this.me = this;
                }
                Notes1.prototype.registerCaller = function (caller) {
                    this.modalDialog = caller;
                };
                Notes1.prototype.openModal1 = function () {
                    this.modalDialog.openModal();
                };
                Notes1.prototype.onNext = function (event) {
                    this.sliderPanel.slideToPage('notes2', 'left');
                };
                Notes1 = __decorate([
                    core_1.Component({
                        selector: 'Notes1',
                        directives: [ModalDialog_1.ModalDialog],
                        template: " <button type=\"button\" (click)=\"onNext($event)\" class=\"btn btn-default btn-sm goNext\">\n                    <span class=\"glyphicon glyphicon-chevron-right\"></span>\n                </button>\n                <small>I am notes1 component</small>\n                <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n                  <button (click)=\"openModal1()\" type=\"button\" class=\"btn btn-default\">Open Modal</button>\n                </div>\n                <ModalDialog title=\"My owner is Notes1\" content=\"I am here to serve Notes1\" [owner]=\"me\">\n                </ModalDialog>\n                <ng-content></ng-content>"
                    }), 
                    __metadata('design:paramtypes', [Sliderpanel_1.Sliderpanel, Properties_1.Properties])
                ], Notes1);
                return Notes1;
            })();
            exports_1("Notes1", Notes1);
        }
    }
});
//# sourceMappingURL=Notes1.js.map