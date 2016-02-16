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
            directives: [ModalDialog_1.ModalDialog, Myip_1.MyIp, ng2_bs3_modal_1.MODAL_DIRECTIVES],
            template: "\n                <button type=\"button\" (click)=\"onPrev($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-left\"></span>\n                </button>\n                <button type=\"button\" (click)=\"onNext($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-right\"></span>\n                </button>\n                <hr/>\n                <small>I am notes2 component</small>\n                <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n                  <button (click)=\"openModal()\" type=\"button\" class=\"btn btn-default\">Bootstrap 3 wrapped Modal</button>\n                </div>\n                <ModalDialog title=\"My owner is Notes2\" content=\"I am here to serve Notes2\" [owner]=\"me\">\n                </ModalDialog>\n                <hr/>\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"modal.open()\">Bootstrap 3 pure ng2 Modal</button>\n                <modal #modal>\n                    <modal-header [show-close]=\"true\">\n                        <h4 class=\"modal-title\">I'm a pure Angular2 modal!</h4>\n                    </modal-header>\n                    <modal-body>\n                        Hello World!\n                    </modal-body>\n                    <modal-footer [show-default-buttons]=\"true\"></modal-footer>\n                </modal>\n\n                <MyIp></MyIp>\n                <ng-content></ng-content>"
        }), 
        __metadata('design:paramtypes', [Sliderpanel_1.Sliderpanel, CommBroker_1.CommBroker])
    ], Notes2);
    return Notes2;
})(NotesBase_1.NotesBase);
exports.Notes2 = Notes2;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDIvbm90ZXMvbm90ZXMyLnRzIl0sIm5hbWVzIjpbIk5vdGVzMiIsIk5vdGVzMi5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsNEJBQTBCLCtCQUErQixDQUFDLENBQUE7QUFDMUQsNEJBQTBCLCtCQUErQixDQUFDLENBQUE7QUFDMUQsMkJBQXlCLDhCQUE4QixDQUFDLENBQUE7QUFDeEQsMEJBQXdCLGFBQWEsQ0FBQyxDQUFBO0FBQ3RDLHFCQUFtQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3JDLDhCQUErQixrQ0FFL0IsQ0FBQyxDQUZnRTtBQUVqRTtJQWtDNEJBLDBCQUFTQTtJQUNqQ0EsZ0JBQXNCQSxXQUF1QkEsRUFBWUEsVUFBcUJBO1FBQzFFQyxrQkFBTUEsV0FBV0EsRUFBRUEsVUFBVUEsQ0FBQ0EsQ0FBQ0E7UUFEYkEsZ0JBQVdBLEdBQVhBLFdBQVdBLENBQVlBO1FBQVlBLGVBQVVBLEdBQVZBLFVBQVVBLENBQVdBO1FBRTFFQSxJQUFJQSxDQUFDQSxFQUFFQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUNmQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxRQUFRQSxDQUFDQTtRQUMxQkEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsUUFBUUEsQ0FBQ0E7SUFDL0JBLENBQUNBO0lBeENMRDtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsUUFBUUE7WUFDbEJBLFNBQVNBLEVBQUVBLENBQUNBLFdBQUlBLENBQUNBO1lBQ2pCQSxVQUFVQSxFQUFFQSxDQUFDQSx5QkFBV0EsRUFBRUEsV0FBSUEsRUFBRUEsZ0NBQWdCQSxDQUFDQTtZQUNqREEsUUFBUUEsRUFBRUEsaTlDQTJCNEJBO1NBQ3pDQSxDQUFDQTs7ZUFTREE7SUFBREEsYUFBQ0E7QUFBREEsQ0F6Q0EsQUF5Q0NBLEVBUDJCLHFCQUFTLEVBT3BDO0FBUFksY0FBTSxTQU9sQixDQUFBIiwiZmlsZSI6ImNvbXBzL2FwcDIvbm90ZXMvTm90ZXMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1NsaWRlcnBhbmVsfSBmcm9tIFwiLi4vLi4vc2xpZGVycGFuZWwvU2xpZGVycGFuZWxcIjtcclxuaW1wb3J0IHtNb2RhbERpYWxvZ30gZnJvbSBcIi4uLy4uL21vZGFsZGlhbG9nL01vZGFsRGlhbG9nXCI7XHJcbmltcG9ydCB7Q29tbUJyb2tlcn0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL0NvbW1Ccm9rZXJcIjtcclxuaW1wb3J0IHtOb3Rlc0Jhc2V9IGZyb20gXCIuL05vdGVzQmFzZVwiO1xyXG5pbXBvcnQge015SXB9IGZyb20gXCIuLi8uLi9teWlwL015aXBcIjtcclxuaW1wb3J0IHtNT0RBTF9ESVJFQ1RJVkVTfSBmcm9tICduZzItYnMzLW1vZGFsL2Rpc3QvbmcyLWJzMy1tb2RhbCdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdOb3RlczInLFxyXG4gICAgcHJvdmlkZXJzOiBbTXlJcF0sXHJcbiAgICBkaXJlY3RpdmVzOiBbTW9kYWxEaWFsb2csIE15SXAsIE1PREFMX0RJUkVDVElWRVNdLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJvblByZXYoJGV2ZW50KVwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtYXJyb3ctbGVmdFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cIm9uTmV4dCgkZXZlbnQpXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1hcnJvdy1yaWdodFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgIDxzbWFsbD5JIGFtIG5vdGVzMiBjb21wb25lbnQ8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCIuLi5cIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib3Blbk1vZGFsKClcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIj5Cb290c3RyYXAgMyB3cmFwcGVkIE1vZGFsPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxNb2RhbERpYWxvZyB0aXRsZT1cIk15IG93bmVyIGlzIE5vdGVzMlwiIGNvbnRlbnQ9XCJJIGFtIGhlcmUgdG8gc2VydmUgTm90ZXMyXCIgW293bmVyXT1cIm1lXCI+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsRGlhbG9nPlxyXG4gICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgKGNsaWNrKT1cIm1vZGFsLm9wZW4oKVwiPkJvb3RzdHJhcCAzIHB1cmUgbmcyIE1vZGFsPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8bW9kYWwgI21vZGFsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtb2RhbC1oZWFkZXIgW3Nob3ctY2xvc2VdPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPkknbSBhIHB1cmUgQW5ndWxhcjIgbW9kYWwhPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8L21vZGFsLWhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8bW9kYWwtYm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSGVsbG8gV29ybGQhXHJcbiAgICAgICAgICAgICAgICAgICAgPC9tb2RhbC1ib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxtb2RhbC1mb290ZXIgW3Nob3ctZGVmYXVsdC1idXR0b25zXT1cInRydWVcIj48L21vZGFsLWZvb3Rlcj5cclxuICAgICAgICAgICAgICAgIDwvbW9kYWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPE15SXA+PC9NeUlwPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBOb3RlczIgZXh0ZW5kcyBOb3Rlc0Jhc2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIHNsaWRlclBhbmVsOlNsaWRlcnBhbmVsLCBwcm90ZWN0ZWQgY29tbUJyb2tlcjpDb21tQnJva2VyKSB7XHJcbiAgICAgICAgc3VwZXIoc2xpZGVyUGFuZWwsIGNvbW1Ccm9rZXIpO1xyXG4gICAgICAgIHRoaXMubWUgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc2xpZGVMZWZ0ID0gJ25vdGVzMyc7XHJcbiAgICAgICAgdGhpcy5zbGlkZVJpZ2h0ID0gJ25vdGVzMSc7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
