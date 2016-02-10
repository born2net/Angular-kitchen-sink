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
            directives: [ModalDialog_1.ModalDialog, Myip_1.MyIp],
            template: " <button type=\"button\" (click)=\"onPrev($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-left\"></span>\n                </button>\n                <button type=\"button\" (click)=\"onNext($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-right\"></span>\n                </button>\n                <hr/>\n                <small>I am notes2 component</small>\n                <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n                  <button (click)=\"openModal()\" type=\"button\" class=\"btn btn-default\">Open Modal</button>\n                </div>\n                <ModalDialog title=\"My owner is Notes2\" content=\"I am here to serve Notes2\" [owner]=\"me\">\n                </ModalDialog>\n                <MyIp></MyIp>\n                <ng-content></ng-content>"
        }), 
        __metadata('design:paramtypes', [Sliderpanel_1.Sliderpanel, CommBroker_1.CommBroker])
    ], Notes2);
    return Notes2;
})(NotesBase_1.NotesBase);
exports.Notes2 = Notes2;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDIvbm90ZXMvbm90ZXMyLnRzIl0sIm5hbWVzIjpbIk5vdGVzMiIsIk5vdGVzMi5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsNEJBQTBCLCtCQUErQixDQUFDLENBQUE7QUFDMUQsNEJBQTBCLCtCQUErQixDQUFDLENBQUE7QUFDMUQsMkJBQXlCLDhCQUE4QixDQUFDLENBQUE7QUFDeEQsMEJBQXdCLGFBQWEsQ0FBQyxDQUFBO0FBQ3RDLHFCQUFtQixpQkFBaUIsQ0FBQyxDQUFBO0FBRXJDO0lBcUI0QkEsMEJBQVNBO0lBQ2pDQSxnQkFBc0JBLFdBQXVCQSxFQUFZQSxVQUFxQkE7UUFDMUVDLGtCQUFNQSxXQUFXQSxFQUFFQSxVQUFVQSxDQUFDQSxDQUFDQTtRQURiQSxnQkFBV0EsR0FBWEEsV0FBV0EsQ0FBWUE7UUFBWUEsZUFBVUEsR0FBVkEsVUFBVUEsQ0FBV0E7UUFFMUVBLElBQUlBLENBQUNBLEVBQUVBLEdBQUdBLElBQUlBLENBQUNBO1FBQ2ZBLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLFFBQVFBLENBQUNBO1FBQzFCQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxRQUFRQSxDQUFDQTtJQUMvQkEsQ0FBQ0E7SUEzQkxEO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxRQUFRQTtZQUNsQkEsU0FBU0EsRUFBRUEsQ0FBQ0EsV0FBSUEsQ0FBQ0E7WUFDakJBLFVBQVVBLEVBQUVBLENBQUNBLHlCQUFXQSxFQUFFQSxXQUFJQSxDQUFDQTtZQUMvQkEsUUFBUUEsRUFBRUEsODJCQWM0QkE7U0FDekNBLENBQUNBOztlQVNEQTtJQUFEQSxhQUFDQTtBQUFEQSxDQTVCQSxBQTRCQ0EsRUFQMkIscUJBQVMsRUFPcEM7QUFQWSxjQUFNLFNBT2xCLENBQUEiLCJmaWxlIjoiY29tcHMvYXBwMi9ub3Rlcy9Ob3RlczIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7U2xpZGVycGFuZWx9IGZyb20gXCIuLi8uLi9zbGlkZXJwYW5lbC9TbGlkZXJwYW5lbFwiO1xyXG5pbXBvcnQge01vZGFsRGlhbG9nfSBmcm9tIFwiLi4vLi4vbW9kYWxkaWFsb2cvTW9kYWxEaWFsb2dcIjtcclxuaW1wb3J0IHtDb21tQnJva2VyfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvQ29tbUJyb2tlclwiO1xyXG5pbXBvcnQge05vdGVzQmFzZX0gZnJvbSBcIi4vTm90ZXNCYXNlXCI7XHJcbmltcG9ydCB7TXlJcH0gZnJvbSBcIi4uLy4uL215aXAvTXlpcFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ05vdGVzMicsXHJcbiAgICBwcm92aWRlcnM6IFtNeUlwXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtNb2RhbERpYWxvZywgTXlJcF0sXHJcbiAgICB0ZW1wbGF0ZTogYCA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwib25QcmV2KCRldmVudClcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWFycm93LWxlZnRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJvbk5leHQoJGV2ZW50KVwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtYXJyb3ctcmlnaHRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICA8c21hbGw+SSBhbSBub3RlczIgY29tcG9uZW50PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiLi4uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9wZW5Nb2RhbCgpXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCI+T3BlbiBNb2RhbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWxEaWFsb2cgdGl0bGU9XCJNeSBvd25lciBpcyBOb3RlczJcIiBjb250ZW50PVwiSSBhbSBoZXJlIHRvIHNlcnZlIE5vdGVzMlwiIFtvd25lcl09XCJtZVwiPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbERpYWxvZz5cclxuICAgICAgICAgICAgICAgIDxNeUlwPjwvTXlJcD5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5gXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTm90ZXMyIGV4dGVuZHMgTm90ZXNCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzbGlkZXJQYW5lbDpTbGlkZXJwYW5lbCwgcHJvdGVjdGVkIGNvbW1Ccm9rZXI6Q29tbUJyb2tlcikge1xyXG4gICAgICAgIHN1cGVyKHNsaWRlclBhbmVsLCBjb21tQnJva2VyKTtcclxuICAgICAgICB0aGlzLm1lID0gdGhpcztcclxuICAgICAgICB0aGlzLnNsaWRlTGVmdCA9ICdub3RlczMnO1xyXG4gICAgICAgIHRoaXMuc2xpZGVSaWdodCA9ICdub3RlczEnO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
