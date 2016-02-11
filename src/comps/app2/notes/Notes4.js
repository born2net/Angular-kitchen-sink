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
var CommBroker_1 = require("../../../services/CommBroker");
var NotesBase_1 = require("./NotesBase");
var NotesDetails_1 = require("./NotesDetails");
var NotesDetailsItems_1 = require("./NotesDetailsItems");
var Notes4 = (function (_super) {
    __extends(Notes4, _super);
    function Notes4(sliderPanel, commBroker) {
        _super.call(this, sliderPanel, commBroker);
        this.sliderPanel = sliderPanel;
        this.commBroker = commBroker;
        this.show = true;
        this.me = this;
        this.slideLeft = 'notes5';
        this.slideRight = 'notes3';
    }
    Notes4 = __decorate([
        core_1.Component({
            selector: 'Notes4',
            directives: [NotesDetails_1.NotesDetails, NotesDetailsItems_1.NotesDetailsItems],
            template: " <button type=\"button\" (click)=\"onPrev($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-left \"></span>\n                </button>\n                <button type=\"button\" (click)=\"onNext($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-right\"></span>\n                </button>\n                <hr/>\n                <small>I am notes4 component</small>\n                <hr/>\n                <button (click)=\"show = !show\">Toggle one item</button>\n                <notes-details>\n                  <notes-details-item> noted details item 1 </notes-details-item>\n                  <notes-details-item *ngIf=\"show\"> noted details item 2 </notes-details-item>\n                </notes-details>\n                <ng-content></ng-content>"
        }), 
        __metadata('design:paramtypes', [Sliderpanel_1.Sliderpanel, CommBroker_1.CommBroker])
    ], Notes4);
    return Notes4;
})(NotesBase_1.NotesBase);
exports.Notes4 = Notes4;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDIvbm90ZXMvbm90ZXM0LnRzIl0sIm5hbWVzIjpbIk5vdGVzNCIsIk5vdGVzNC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsNEJBQTBCLCtCQUErQixDQUFDLENBQUE7QUFDMUQsMkJBQXlCLDhCQUE4QixDQUFDLENBQUE7QUFDeEQsMEJBQXdCLGFBQWEsQ0FBQyxDQUFBO0FBQ3RDLDZCQUEyQixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzVDLGtDQUFnQyxxQkFBcUIsQ0FBQyxDQUFBO0FBRXREO0lBb0I0QkEsMEJBQVNBO0lBRWpDQSxnQkFBc0JBLFdBQXVCQSxFQUFZQSxVQUFxQkE7UUFDMUVDLGtCQUFNQSxXQUFXQSxFQUFFQSxVQUFVQSxDQUFDQSxDQUFDQTtRQURiQSxnQkFBV0EsR0FBWEEsV0FBV0EsQ0FBWUE7UUFBWUEsZUFBVUEsR0FBVkEsVUFBVUEsQ0FBV0E7UUFEOUVBLFNBQUlBLEdBQVlBLElBQUlBLENBQUNBO1FBR2pCQSxJQUFJQSxDQUFDQSxFQUFFQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUNmQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxRQUFRQSxDQUFDQTtRQUMxQkEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsUUFBUUEsQ0FBQ0E7SUFDL0JBLENBQUNBO0lBM0JMRDtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsUUFBUUE7WUFDbEJBLFVBQVVBLEVBQUVBLENBQUNBLDJCQUFZQSxFQUFFQSxxQ0FBaUJBLENBQUNBO1lBQzdDQSxRQUFRQSxFQUFFQSxtMEJBYzRCQTtTQUN6Q0EsQ0FBQ0E7O2VBVURBO0lBQURBLGFBQUNBO0FBQURBLENBNUJBLEFBNEJDQSxFQVIyQixxQkFBUyxFQVFwQztBQVJZLGNBQU0sU0FRbEIsQ0FBQSIsImZpbGUiOiJjb21wcy9hcHAyL25vdGVzL05vdGVzNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtTbGlkZXJwYW5lbH0gZnJvbSBcIi4uLy4uL3NsaWRlcnBhbmVsL1NsaWRlcnBhbmVsXCI7XHJcbmltcG9ydCB7Q29tbUJyb2tlcn0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL0NvbW1Ccm9rZXJcIjtcclxuaW1wb3J0IHtOb3Rlc0Jhc2V9IGZyb20gXCIuL05vdGVzQmFzZVwiO1xyXG5pbXBvcnQge05vdGVzRGV0YWlsc30gZnJvbSBcIi4vTm90ZXNEZXRhaWxzXCI7XHJcbmltcG9ydCB7Tm90ZXNEZXRhaWxzSXRlbXN9IGZyb20gXCIuL05vdGVzRGV0YWlsc0l0ZW1zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnTm90ZXM0JyxcclxuICAgIGRpcmVjdGl2ZXM6IFtOb3Rlc0RldGFpbHMsIE5vdGVzRGV0YWlsc0l0ZW1zXSxcclxuICAgIHRlbXBsYXRlOiBgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJvblByZXYoJGV2ZW50KVwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtYXJyb3ctbGVmdCBcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJvbk5leHQoJGV2ZW50KVwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtYXJyb3ctcmlnaHRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICA8c21hbGw+SSBhbSBub3RlczQgY29tcG9uZW50PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJzaG93ID0gIXNob3dcIj5Ub2dnbGUgb25lIGl0ZW08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxub3Rlcy1kZXRhaWxzPlxyXG4gICAgICAgICAgICAgICAgICA8bm90ZXMtZGV0YWlscy1pdGVtPiBub3RlZCBkZXRhaWxzIGl0ZW0gMSA8L25vdGVzLWRldGFpbHMtaXRlbT5cclxuICAgICAgICAgICAgICAgICAgPG5vdGVzLWRldGFpbHMtaXRlbSAqbmdJZj1cInNob3dcIj4gbm90ZWQgZGV0YWlscyBpdGVtIDIgPC9ub3Rlcy1kZXRhaWxzLWl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L25vdGVzLWRldGFpbHM+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE5vdGVzNCBleHRlbmRzIE5vdGVzQmFzZSB7XHJcbiAgICBzaG93OiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzbGlkZXJQYW5lbDpTbGlkZXJwYW5lbCwgcHJvdGVjdGVkIGNvbW1Ccm9rZXI6Q29tbUJyb2tlcikge1xyXG4gICAgICAgIHN1cGVyKHNsaWRlclBhbmVsLCBjb21tQnJva2VyKTtcclxuICAgICAgICB0aGlzLm1lID0gdGhpcztcclxuICAgICAgICB0aGlzLnNsaWRlTGVmdCA9ICdub3RlczUnO1xyXG4gICAgICAgIHRoaXMuc2xpZGVSaWdodCA9ICdub3RlczMnO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
