///<reference path="../../../typings/jquery/jquery.d.ts" />
System.register(['angular2/core', 'angular2/platform/browser'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1;
    var ModalDialog;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            ModalDialog = (function () {
                function ModalDialog(viewContainer) {
                    this.dom = new browser_1.BrowserDomAdapter();
                    this.viewContainer = viewContainer;
                    this.el = this.viewContainer.element.nativeElement;
                }
                ModalDialog.prototype.ngAfterViewInit = function () {
                    this.owner.registerCaller(this);
                };
                ModalDialog.prototype.openModal = function () {
                    var modal = this.dom.getElementsByClassName(this.el, 'modal')[0];
                    jQuery(modal).modal();
                };
                ModalDialog = __decorate([
                    core_1.Component({
                        selector: 'ModalDialog',
                        inputs: ['title:title', 'content:content', 'owner:owner'],
                        styles: ["\n            .modal-dialog {\n                width: 100%;\n                height: 100%;\n                padding: 0;\n            }\n\n            .modal-content {\n                height: 100%;\n                border-radius: 0;\n            }\n    "],
                        encapsulation: core_1.ViewEncapsulation.Emulated,
                        template: "\n         <div class=\"modal modal-static fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n             aria-hidden=\"true\">\n            <div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button id=\"toggleProperties\" type=\"button\" class=\"close\" data-dismiss=\"modal\"\n                                aria-hidden=\"true\">&times;</button>\n                        <h4 class=\"modal-title\" id=\"myModalLabel\" data-localize=\"ModalTitle\">{{title}}</h4>\n                    </div>\n                    <div class=\"modal-body\">\n                        {{content}}\n                        <ng-content></ng-content>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" data-localize=\"close\">Close</button>\n                        <button type=\"button\" class=\"btn btn-primary\" data-localize=\"saveChanges\">Save changes</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [core_1.ViewContainerRef])
                ], ModalDialog);
                return ModalDialog;
            })();
            exports_1("ModalDialog", ModalDialog);
        }
    }
});
//# sourceMappingURL=ModalDialog.js.map