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
                        template: "     \n                <button type=\"button\" (click)=\"onPrev($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-left\"></span>\n                </button>\n                <button type=\"button\" (click)=\"onNext($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-right\"></span>\n                </button>\n                <hr/>\n                <small>I am notes2 component</small>\n                <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n                  <button (click)=\"openModal()\" type=\"button\" class=\"btn btn-default\">Bootstrap 3 wrapped Modal</button>\n                </div>\n                <ModalDialog title=\"My owner is Notes2\" content=\"I am here to serve Notes2\" [owner]=\"me\">\n                </ModalDialog>\n                <hr/>\n                <!--<button type=\"button\" class=\"btn btn-default\" (click)=\"modal.open()\">Bootstrap 3 pure ng2 Modal</button>-->\n                <!--<modal #modal>-->\n                    <!--<modal-header [show-close]=\"true\">-->\n                        <!--<h4 class=\"modal-title\">I'm a pure Angular2 modal!</h4>-->\n                    <!--</modal-header>-->\n                    <!--<modal-body>-->\n                        <!--Hello World!-->\n                    <!--</modal-body>-->\n                    <!--<modal-footer [show-default-buttons]=\"true\"></modal-footer>-->\n                <!--</modal>-->\n                <hr/>\n                <div dialogAnchor></div>\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"openDialogBox()\">Pure ng2 Modal</button>\n                <hr/>\n                <MyIp>\n                    <!-- remove entire snippet including this comment to have component inject default template -->\n                    <hr/>\n                      <div>\n                          <h4>Example of providing a default ng-content template if not provided by the consumer of the component</h4>\n                      </div>\n                    <hr/>\n                </MyIp>\n                <small>Example of @HostBinding / @HostListener print console.log() and add underscores</small>\n                <input type=\"text\" trimmed-input />\n                <hr/>\n                <h5>Press enter to jump to next input</h5>\n                <input (keyup.enter)=\"next.focus()\">\n                <input #next>\n                "
                    }), 
                    __metadata('design:paramtypes', [Sliderpanel_1.Sliderpanel, CommBroker_1.CommBroker])
                ], Notes2);
                return Notes2;
            }(NotesBase_1.NotesBase));
            exports_1("Notes2", Notes2);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDIvbm90ZXMvTm90ZXMyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUErREE7Z0JBQTRCLDBCQUFTO2dCQUNqQyxnQkFBc0IsV0FBd0IsRUFBWSxVQUFzQjtvQkFDNUUsa0JBQU0sV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO29CQURiLGdCQUFXLEdBQVgsV0FBVyxDQUFhO29CQUFZLGVBQVUsR0FBVixVQUFVLENBQVk7b0JBRTVFLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO29CQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO29CQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztnQkFDL0IsQ0FBQztnQkFLRCw4QkFBYSxHQUFiO29CQUNJLElBQUksVUFBVSxHQUE0QixJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLHVCQUFVLENBQUMsQ0FBQztvQkFDNUYsVUFBVSxDQUFDO3dCQUNQLFVBQVUsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQ3hDLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQTtnQkFFWCxDQUFDO2dCQVREO29CQUFDLGdCQUFTLENBQUMseUNBQW1CLENBQUM7O21FQUFBO2dCQTFEbkM7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsU0FBUyxFQUFFLENBQUMsV0FBSSxDQUFDO3dCQUNqQixlQUFlLEVBQUUsQ0FBQyx1QkFBVSxDQUFDO3dCQUM3QixRQUFRLEVBQUUsaTZFQTJDRztxQkFDaEIsQ0FBQzs7MEJBQUE7Z0JBb0JGLGFBQUM7WUFBRCxDQWxCQSxBQWtCQyxDQWxCMkIscUJBQVMsR0FrQnBDO1lBbEJELDJCQWtCQyxDQUFBIiwiZmlsZSI6ImNvbXBzL2FwcDIvbm90ZXMvTm90ZXMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIFZpZXdDaGlsZCxcclxuICAgIENvbXBvbmVudFJlZlxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7U2xpZGVycGFuZWx9IGZyb20gXCIuLi8uLi9zbGlkZXJwYW5lbC9TbGlkZXJwYW5lbFwiO1xyXG5pbXBvcnQge0NvbW1Ccm9rZXJ9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9Db21tQnJva2VyXCI7XHJcbmltcG9ydCB7Tm90ZXNCYXNlfSBmcm9tIFwiLi9Ob3Rlc0Jhc2VcIjtcclxuaW1wb3J0IHtNeUlwfSBmcm9tIFwiLi4vLi4vbXlpcC9NeWlwXCI7XHJcbmltcG9ydCB7UHVyZURpYWxvZ30gZnJvbSBcIi4uLy4uL3B1cmVkaWFsb2cvUHVyZURpYWxvZ1wiO1xyXG5pbXBvcnQge1B1cmVEaWFsb2dEaXJlY3RpdmV9IGZyb20gXCIuLi8uLi9wdXJlZGlhbG9nL1B1cmVEaWFsb2dEaXJlY3RpdmVcIjtcclxuLy8gaW1wb3J0IHtNT0RBTF9ESVJFQ1RJVkVTfSBmcm9tIFwibmcyLWJzMy1tb2RhbC1ib3JuMm5ldC9uZzItYnMzLW1vZGFsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnTm90ZXMyJyxcclxuICAgIHByb3ZpZGVyczogW015SXBdLFxyXG4gICAgZW50cnlDb21wb25lbnRzOiBbUHVyZURpYWxvZ10sXHJcbiAgICB0ZW1wbGF0ZTogYCAgICAgXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwib25QcmV2KCRldmVudClcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWFycm93LWxlZnRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJvbk5leHQoJGV2ZW50KVwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtYXJyb3ctcmlnaHRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICA8c21hbGw+SSBhbSBub3RlczIgY29tcG9uZW50PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiLi4uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9wZW5Nb2RhbCgpXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCI+Qm9vdHN0cmFwIDMgd3JhcHBlZCBNb2RhbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWxEaWFsb2cgdGl0bGU9XCJNeSBvd25lciBpcyBOb3RlczJcIiBjb250ZW50PVwiSSBhbSBoZXJlIHRvIHNlcnZlIE5vdGVzMlwiIFtvd25lcl09XCJtZVwiPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbERpYWxvZz5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICA8IS0tPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiAoY2xpY2spPVwibW9kYWwub3BlbigpXCI+Qm9vdHN0cmFwIDMgcHVyZSBuZzIgTW9kYWw8L2J1dHRvbj4tLT5cclxuICAgICAgICAgICAgICAgIDwhLS08bW9kYWwgI21vZGFsPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08bW9kYWwtaGVhZGVyIFtzaG93LWNsb3NlXT1cInRydWVcIj4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+SSdtIGEgcHVyZSBBbmd1bGFyMiBtb2RhbCE8L2g0Pi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08L21vZGFsLWhlYWRlcj4tLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPG1vZGFsLWJvZHk+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1IZWxsbyBXb3JsZCEtLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPC9tb2RhbC1ib2R5Pi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08bW9kYWwtZm9vdGVyIFtzaG93LWRlZmF1bHQtYnV0dG9uc109XCJ0cnVlXCI+PC9tb2RhbC1mb290ZXI+LS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tPC9tb2RhbD4tLT5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGRpYWxvZ0FuY2hvcj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgKGNsaWNrKT1cIm9wZW5EaWFsb2dCb3goKVwiPlB1cmUgbmcyIE1vZGFsPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgPE15SXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSByZW1vdmUgZW50aXJlIHNuaXBwZXQgaW5jbHVkaW5nIHRoaXMgY29tbWVudCB0byBoYXZlIGNvbXBvbmVudCBpbmplY3QgZGVmYXVsdCB0ZW1wbGF0ZSAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+RXhhbXBsZSBvZiBwcm92aWRpbmcgYSBkZWZhdWx0IG5nLWNvbnRlbnQgdGVtcGxhdGUgaWYgbm90IHByb3ZpZGVkIGJ5IHRoZSBjb25zdW1lciBvZiB0aGUgY29tcG9uZW50PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICA8L015SXA+XHJcbiAgICAgICAgICAgICAgICA8c21hbGw+RXhhbXBsZSBvZiBASG9zdEJpbmRpbmcgLyBASG9zdExpc3RlbmVyIHByaW50IGNvbnNvbGUubG9nKCkgYW5kIGFkZCB1bmRlcnNjb3Jlczwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB0cmltbWVkLWlucHV0IC8+XHJcbiAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgPGg1PlByZXNzIGVudGVyIHRvIGp1bXAgdG8gbmV4dCBpbnB1dDwvaDU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgKGtleXVwLmVudGVyKT1cIm5leHQuZm9jdXMoKVwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0ICNuZXh0PlxyXG4gICAgICAgICAgICAgICAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE5vdGVzMiBleHRlbmRzIE5vdGVzQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc2xpZGVyUGFuZWw6IFNsaWRlcnBhbmVsLCBwcm90ZWN0ZWQgY29tbUJyb2tlcjogQ29tbUJyb2tlcikge1xyXG4gICAgICAgIHN1cGVyKHNsaWRlclBhbmVsLCBjb21tQnJva2VyKTtcclxuICAgICAgICB0aGlzLm1lID0gdGhpcztcclxuICAgICAgICB0aGlzLnNsaWRlTGVmdCA9ICdub3RlczMnO1xyXG4gICAgICAgIHRoaXMuc2xpZGVSaWdodCA9ICdub3RlczEnO1xyXG4gICAgfVxyXG5cclxuICAgIEBWaWV3Q2hpbGQoUHVyZURpYWxvZ0RpcmVjdGl2ZSlcclxuICAgIHB1cmVEaWFsb2dEaXJlY3RpdmU6IFB1cmVEaWFsb2dEaXJlY3RpdmU7XHJcblxyXG4gICAgb3BlbkRpYWxvZ0JveCgpIHtcclxuICAgICAgICB2YXIgcHVyZURpYWxvZzpDb21wb25lbnRSZWY8UHVyZURpYWxvZz4gPSB0aGlzLnB1cmVEaWFsb2dEaXJlY3RpdmUuY3JlYXRlRGlhbG9nKFB1cmVEaWFsb2cpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgcHVyZURpYWxvZy5pbnN0YW5jZS5vbkNsaWNrZWRFeGl0KCk7XHJcbiAgICAgICAgfSwzMDAwKVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
