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
        this.someValue = '999';
        this.someValue = 'FooBar';
        var self = this;
        this.slideLeft = 'notes5';
        this.slideRight = 'notes3';
    }
    Notes4.prototype.getContent = function (user) {
        return user;
    };
    Notes4.prototype.itemDetailsClicked = function (event) {
        alert(event);
    };
    Notes4 = __decorate([
        core_1.Component({
            selector: 'Notes4',
            directives: [NotesDetails_1.NotesDetails, NotesDetailsItems_1.NotesDetailsItems],
            template: " <button type=\"button\" (click)=\"onPrev($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-left \"></span>\n                </button>\n                <button type=\"button\" (click)=\"onNext($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-right\"></span>\n                </button>\n                <hr/>\n                <small>I am notes4 component</small>\n                <hr/>\n                <button (click)=\"show = !show\">Toggle one item</button>\n                <notes-details>\n                  <notes-details-item [content]=\"getContent\" [myValue]=\"'One'\"\n                        (select)=\"itemDetailsClicked($event)\"> noted details item 1 </notes-details-item>\n                  <notes-details-item [content]=\"getContent\" [myValue]=\"'Two'\"\n                        (select)=\"itemDetailsClicked($event)\" *ngIf=\"show\"> noted details item 2 </notes-details-item>\n                </notes-details>\n                <ng-content></ng-content>"
        }), 
        __metadata('design:paramtypes', [Sliderpanel_1.Sliderpanel, CommBroker_1.CommBroker])
    ], Notes4);
    return Notes4;
})(NotesBase_1.NotesBase);
exports.Notes4 = Notes4;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDIvbm90ZXMvbm90ZXM0LnRzIl0sIm5hbWVzIjpbIk5vdGVzNCIsIk5vdGVzNC5jb25zdHJ1Y3RvciIsIk5vdGVzNC5nZXRDb250ZW50IiwiTm90ZXM0Lml0ZW1EZXRhaWxzQ2xpY2tlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsNEJBQTBCLCtCQUErQixDQUFDLENBQUE7QUFDMUQsMkJBQXlCLDhCQUE4QixDQUFDLENBQUE7QUFDeEQsMEJBQXdCLGFBQWEsQ0FBQyxDQUFBO0FBQ3RDLDZCQUEyQixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzVDLGtDQUFnQyxxQkFBcUIsQ0FBQyxDQUFBO0FBT3REO0lBc0I0QkEsMEJBQVNBO0lBSWpDQSxnQkFBc0JBLFdBQXVCQSxFQUFZQSxVQUFxQkE7UUFDMUVDLGtCQUFNQSxXQUFXQSxFQUFFQSxVQUFVQSxDQUFDQSxDQUFDQTtRQURiQSxnQkFBV0EsR0FBWEEsV0FBV0EsQ0FBWUE7UUFBWUEsZUFBVUEsR0FBVkEsVUFBVUEsQ0FBV0E7UUFIdEVBLFNBQUlBLEdBQVdBLElBQUlBLENBQUNBO1FBQ3BCQSxjQUFTQSxHQUFPQSxLQUFLQSxDQUFDQTtRQUkxQkEsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsUUFBUUEsQ0FBQ0E7UUFDMUJBLElBQUlBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1FBQ2hCQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxRQUFRQSxDQUFDQTtRQUMxQkEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsUUFBUUEsQ0FBQ0E7SUFFL0JBLENBQUNBO0lBRURELDJCQUFVQSxHQUFWQSxVQUFXQSxJQUFJQTtRQUNYRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtJQUNoQkEsQ0FBQ0E7SUFFREYsbUNBQWtCQSxHQUFsQkEsVUFBbUJBLEtBQUtBO1FBQ3BCRyxLQUFLQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtJQUNqQkEsQ0FBQ0E7SUF6Q0xIO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxRQUFRQTtZQUNsQkEsVUFBVUEsRUFBRUEsQ0FBQ0EsMkJBQVlBLEVBQUVBLHFDQUFpQkEsQ0FBQ0E7WUFDN0NBLFFBQVFBLEVBQUVBLCtoQ0FnQjRCQTtTQUN6Q0EsQ0FBQ0E7O2VBc0JEQTtJQUFEQSxhQUFDQTtBQUFEQSxDQTFDQSxBQTBDQ0EsRUFwQjJCLHFCQUFTLEVBb0JwQztBQXBCWSxjQUFNLFNBb0JsQixDQUFBIiwiZmlsZSI6ImNvbXBzL2FwcDIvbm90ZXMvTm90ZXM0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1NsaWRlcnBhbmVsfSBmcm9tIFwiLi4vLi4vc2xpZGVycGFuZWwvU2xpZGVycGFuZWxcIjtcclxuaW1wb3J0IHtDb21tQnJva2VyfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvQ29tbUJyb2tlclwiO1xyXG5pbXBvcnQge05vdGVzQmFzZX0gZnJvbSBcIi4vTm90ZXNCYXNlXCI7XHJcbmltcG9ydCB7Tm90ZXNEZXRhaWxzfSBmcm9tIFwiLi9Ob3Rlc0RldGFpbHNcIjtcclxuaW1wb3J0IHtOb3Rlc0RldGFpbHNJdGVtc30gZnJvbSBcIi4vTm90ZXNEZXRhaWxzSXRlbXNcIjtcclxuXHJcblxyXG4vKipcclxuICogIEFtb25nIG90aGVyIHRoaW5ncywgdGhpcyBjbGFzcyBkZW1vbnN0cmF0ZXMgaG93IHRvIHBhc3MgYSBtZXRob2QgdG8gYSBjb21wb25lbnRcclxuICogIGFuZCB0aGF0IGNvbXBvbmVudCBjYWxsIGl0OiBbY29udGVudF09XCJnZXRDb250ZW50XCJcclxuICoqL1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnTm90ZXM0JyxcclxuICAgIGRpcmVjdGl2ZXM6IFtOb3Rlc0RldGFpbHMsIE5vdGVzRGV0YWlsc0l0ZW1zXSxcclxuICAgIHRlbXBsYXRlOiBgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJvblByZXYoJGV2ZW50KVwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtYXJyb3ctbGVmdCBcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJvbk5leHQoJGV2ZW50KVwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtYXJyb3ctcmlnaHRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICA8c21hbGw+SSBhbSBub3RlczQgY29tcG9uZW50PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJzaG93ID0gIXNob3dcIj5Ub2dnbGUgb25lIGl0ZW08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxub3Rlcy1kZXRhaWxzPlxyXG4gICAgICAgICAgICAgICAgICA8bm90ZXMtZGV0YWlscy1pdGVtIFtjb250ZW50XT1cImdldENvbnRlbnRcIiBbbXlWYWx1ZV09XCInT25lJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzZWxlY3QpPVwiaXRlbURldGFpbHNDbGlja2VkKCRldmVudClcIj4gbm90ZWQgZGV0YWlscyBpdGVtIDEgPC9ub3Rlcy1kZXRhaWxzLWl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxub3Rlcy1kZXRhaWxzLWl0ZW0gW2NvbnRlbnRdPVwiZ2V0Q29udGVudFwiIFtteVZhbHVlXT1cIidUd28nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHNlbGVjdCk9XCJpdGVtRGV0YWlsc0NsaWNrZWQoJGV2ZW50KVwiICpuZ0lmPVwic2hvd1wiPiBub3RlZCBkZXRhaWxzIGl0ZW0gMiA8L25vdGVzLWRldGFpbHMtaXRlbT5cclxuICAgICAgICAgICAgICAgIDwvbm90ZXMtZGV0YWlscz5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5gXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTm90ZXM0IGV4dGVuZHMgTm90ZXNCYXNlIHtcclxuICAgIHByaXZhdGUgc2hvdzpib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgc29tZVZhbHVlOmFueSA9ICc5OTknO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzbGlkZXJQYW5lbDpTbGlkZXJwYW5lbCwgcHJvdGVjdGVkIGNvbW1Ccm9rZXI6Q29tbUJyb2tlcikge1xyXG4gICAgICAgIHN1cGVyKHNsaWRlclBhbmVsLCBjb21tQnJva2VyKTtcclxuICAgICAgICB0aGlzLnNvbWVWYWx1ZSA9ICdGb29CYXInO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLnNsaWRlTGVmdCA9ICdub3RlczUnO1xyXG4gICAgICAgIHRoaXMuc2xpZGVSaWdodCA9ICdub3RlczMnO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRDb250ZW50KHVzZXIpOnN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaXRlbURldGFpbHNDbGlja2VkKGV2ZW50KSB7XHJcbiAgICAgICAgYWxlcnQoZXZlbnQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
