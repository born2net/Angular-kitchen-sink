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
                        template: "     \n                <button type=\"button\" (click)=\"onPrev($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-left\"></span>\n                </button>\n                <button type=\"button\" (click)=\"onNext($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-right\"></span>\n                </button>\n                <hr/>\n                <small>I am notes2 component</small>\n                <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n                  <button (click)=\"openModal()\" type=\"button\" class=\"btn btn-default\">Bootstrap 3 wrapped Modal</button>\n                </div>\n                <ModalDialog title=\"My owner is Notes2\" content=\"I am here to serve Notes2\" [owner]=\"me\">\n                </ModalDialog>\n                <hr/>\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"modal.open()\">Bootstrap 3 pure ng2 Modal</button>\n                <!--<modal #modal>-->\n                    <!--<modal-header [show-close]=\"true\">-->\n                        <!--<h4 class=\"modal-title\">I'm a pure Angular2 modal!</h4>-->\n                    <!--</modal-header>-->\n                    <!--<modal-body>-->\n                        <!--Hello World!-->\n                    <!--</modal-body>-->\n                    <!--<modal-footer [show-default-buttons]=\"true\"></modal-footer>-->\n                <!--</modal>-->\n                <hr/>\n                <div dialogAnchor></div>\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"openDialogBox()\">Pure ng2 Modal</button>\n                <hr/>\n                <MyIp>\n                    <!-- remove entire snippet including this comment to have component inject default template -->\n                    <hr/>\n                      <div>\n                          <h4>Example of providing a default ng-content template if not provided by the consumer of the component</h4>\n                      </div>\n                    <hr/>\n                </MyIp>\n                <small>Example of @HostBinding / @HostListener print console.log() and add underscores</small>\n                <input type=\"text\" trimmed-input />\n                <hr/>\n                <h5>Press enter to jump to next input</h5>\n                <input (keyup.enter)=\"next.focus()\">\n                <input #next>\n                "
                    }), 
                    __metadata('design:paramtypes', [Sliderpanel_1.Sliderpanel, CommBroker_1.CommBroker])
                ], Notes2);
                return Notes2;
            }(NotesBase_1.NotesBase));
            exports_1("Notes2", Notes2);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDIvbm90ZXMvTm90ZXMyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUErREE7Z0JBQTRCLDBCQUFTO2dCQUNqQyxnQkFBc0IsV0FBd0IsRUFBWSxVQUFzQjtvQkFDNUUsa0JBQU0sV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO29CQURiLGdCQUFXLEdBQVgsV0FBVyxDQUFhO29CQUFZLGVBQVUsR0FBVixVQUFVLENBQVk7b0JBRTVFLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO29CQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO29CQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztnQkFDL0IsQ0FBQztnQkFLRCw4QkFBYSxHQUFiO29CQUNJLElBQUksVUFBVSxHQUE0QixJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLHVCQUFVLENBQUMsQ0FBQztvQkFDNUYsVUFBVSxDQUFDO3dCQUNQLFVBQVUsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQ3hDLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQTtnQkFFWCxDQUFDO2dCQVREO29CQUFDLGdCQUFTLENBQUMseUNBQW1CLENBQUM7O21FQUFBO2dCQTFEbkM7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsU0FBUyxFQUFFLENBQUMsV0FBSSxDQUFDO3dCQUNqQixlQUFlLEVBQUUsQ0FBQyx1QkFBVSxDQUFDO3dCQUM3QixRQUFRLEVBQUUsMDVFQTJDRztxQkFDaEIsQ0FBQzs7MEJBQUE7Z0JBb0JGLGFBQUM7WUFBRCxDQWxCQSxBQWtCQyxDQWxCMkIscUJBQVMsR0FrQnBDO1lBbEJELDJCQWtCQyxDQUFBIiwiZmlsZSI6ImNvbXBzL2FwcDIvbm90ZXMvTm90ZXMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIFZpZXdDaGlsZCxcclxuICAgIENvbXBvbmVudFJlZlxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7U2xpZGVycGFuZWx9IGZyb20gXCIuLi8uLi9zbGlkZXJwYW5lbC9TbGlkZXJwYW5lbFwiO1xyXG5pbXBvcnQge0NvbW1Ccm9rZXJ9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9Db21tQnJva2VyXCI7XHJcbmltcG9ydCB7Tm90ZXNCYXNlfSBmcm9tIFwiLi9Ob3Rlc0Jhc2VcIjtcclxuaW1wb3J0IHtNeUlwfSBmcm9tIFwiLi4vLi4vbXlpcC9NeWlwXCI7XHJcbmltcG9ydCB7UHVyZURpYWxvZ30gZnJvbSBcIi4uLy4uL3B1cmVkaWFsb2cvUHVyZURpYWxvZ1wiO1xyXG5pbXBvcnQge1B1cmVEaWFsb2dEaXJlY3RpdmV9IGZyb20gXCIuLi8uLi9wdXJlZGlhbG9nL1B1cmVEaWFsb2dEaXJlY3RpdmVcIjtcclxuLy8gaW1wb3J0IHtNT0RBTF9ESVJFQ1RJVkVTfSBmcm9tIFwibmcyLWJzMy1tb2RhbC1ib3JuMm5ldC9uZzItYnMzLW1vZGFsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnTm90ZXMyJyxcclxuICAgIHByb3ZpZGVyczogW015SXBdLFxyXG4gICAgZW50cnlDb21wb25lbnRzOiBbUHVyZURpYWxvZ10sXHJcbiAgICB0ZW1wbGF0ZTogYCAgICAgXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwib25QcmV2KCRldmVudClcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWFycm93LWxlZnRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJvbk5leHQoJGV2ZW50KVwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtYXJyb3ctcmlnaHRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICA8c21hbGw+SSBhbSBub3RlczIgY29tcG9uZW50PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiLi4uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9wZW5Nb2RhbCgpXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCI+Qm9vdHN0cmFwIDMgd3JhcHBlZCBNb2RhbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWxEaWFsb2cgdGl0bGU9XCJNeSBvd25lciBpcyBOb3RlczJcIiBjb250ZW50PVwiSSBhbSBoZXJlIHRvIHNlcnZlIE5vdGVzMlwiIFtvd25lcl09XCJtZVwiPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbERpYWxvZz5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIChjbGljayk9XCJtb2RhbC5vcGVuKClcIj5Cb290c3RyYXAgMyBwdXJlIG5nMiBNb2RhbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPCEtLTxtb2RhbCAjbW9kYWw+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLTxtb2RhbC1oZWFkZXIgW3Nob3ctY2xvc2VdPVwidHJ1ZVwiPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5JJ20gYSBwdXJlIEFuZ3VsYXIyIG1vZGFsITwvaDQ+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLTwvbW9kYWwtaGVhZGVyPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08bW9kYWwtYm9keT4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLUhlbGxvIFdvcmxkIS0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08L21vZGFsLWJvZHk+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLTxtb2RhbC1mb290ZXIgW3Nob3ctZGVmYXVsdC1idXR0b25zXT1cInRydWVcIj48L21vZGFsLWZvb3Rlcj4tLT5cclxuICAgICAgICAgICAgICAgIDwhLS08L21vZGFsPi0tPlxyXG4gICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgZGlhbG9nQW5jaG9yPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiAoY2xpY2spPVwib3BlbkRpYWxvZ0JveCgpXCI+UHVyZSBuZzIgTW9kYWw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICA8TXlJcD5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIHJlbW92ZSBlbnRpcmUgc25pcHBldCBpbmNsdWRpbmcgdGhpcyBjb21tZW50IHRvIGhhdmUgY29tcG9uZW50IGluamVjdCBkZWZhdWx0IHRlbXBsYXRlIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5FeGFtcGxlIG9mIHByb3ZpZGluZyBhIGRlZmF1bHQgbmctY29udGVudCB0ZW1wbGF0ZSBpZiBub3QgcHJvdmlkZWQgYnkgdGhlIGNvbnN1bWVyIG9mIHRoZSBjb21wb25lbnQ8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgIDwvTXlJcD5cclxuICAgICAgICAgICAgICAgIDxzbWFsbD5FeGFtcGxlIG9mIEBIb3N0QmluZGluZyAvIEBIb3N0TGlzdGVuZXIgcHJpbnQgY29uc29sZS5sb2coKSBhbmQgYWRkIHVuZGVyc2NvcmVzPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHRyaW1tZWQtaW5wdXQgLz5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICA8aDU+UHJlc3MgZW50ZXIgdG8ganVtcCB0byBuZXh0IGlucHV0PC9oNT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCAoa2V5dXAuZW50ZXIpPVwibmV4dC5mb2N1cygpXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgI25leHQ+XHJcbiAgICAgICAgICAgICAgICBgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTm90ZXMyIGV4dGVuZHMgTm90ZXNCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzbGlkZXJQYW5lbDogU2xpZGVycGFuZWwsIHByb3RlY3RlZCBjb21tQnJva2VyOiBDb21tQnJva2VyKSB7XHJcbiAgICAgICAgc3VwZXIoc2xpZGVyUGFuZWwsIGNvbW1Ccm9rZXIpO1xyXG4gICAgICAgIHRoaXMubWUgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc2xpZGVMZWZ0ID0gJ25vdGVzMyc7XHJcbiAgICAgICAgdGhpcy5zbGlkZVJpZ2h0ID0gJ25vdGVzMSc7XHJcbiAgICB9XHJcblxyXG4gICAgQFZpZXdDaGlsZChQdXJlRGlhbG9nRGlyZWN0aXZlKVxyXG4gICAgcHVyZURpYWxvZ0RpcmVjdGl2ZTogUHVyZURpYWxvZ0RpcmVjdGl2ZTtcclxuXHJcbiAgICBvcGVuRGlhbG9nQm94KCkge1xyXG4gICAgICAgIHZhciBwdXJlRGlhbG9nOkNvbXBvbmVudFJlZjxQdXJlRGlhbG9nPiA9IHRoaXMucHVyZURpYWxvZ0RpcmVjdGl2ZS5jcmVhdGVEaWFsb2coUHVyZURpYWxvZyk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICBwdXJlRGlhbG9nLmluc3RhbmNlLm9uQ2xpY2tlZEV4aXQoKTtcclxuICAgICAgICB9LDMwMDApXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
