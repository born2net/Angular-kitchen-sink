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
var Notes4 = (function (_super) {
    __extends(Notes4, _super);
    function Notes4(sliderPanel, commBroker) {
        _super.call(this, sliderPanel, commBroker);
        this.sliderPanel = sliderPanel;
        this.commBroker = commBroker;
        this.me = this;
        this.slideLeft = 'notes5';
        this.slideRight = 'notes3';
    }
    Notes4 = __decorate([
        core_1.Component({
            selector: 'Notes4',
            template: " <button type=\"button\" (click)=\"onPrev($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-left \"></span>\n                </button>\n                <button type=\"button\" (click)=\"onNext($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-right\"></span>\n                </button>\n                <hr/>\n                <small>I am notes4 component</small>\n                <ng-content></ng-content>"
        }), 
        __metadata('design:paramtypes', [Sliderpanel_1.Sliderpanel, CommBroker_1.CommBroker])
    ], Notes4);
    return Notes4;
})(NotesBase_1.NotesBase);
exports.Notes4 = Notes4;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDIvbm90ZXMvbm90ZXM0LnRzIl0sIm5hbWVzIjpbIk5vdGVzNCIsIk5vdGVzNC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsNEJBQTBCLCtCQUErQixDQUFDLENBQUE7QUFDMUQsMkJBQXlCLDhCQUE4QixDQUFDLENBQUE7QUFDeEQsMEJBQXdCLGFBQWEsQ0FBQyxDQUFBO0FBRXRDO0lBYTRCQSwwQkFBU0E7SUFDakNBLGdCQUFzQkEsV0FBdUJBLEVBQVlBLFVBQXFCQTtRQUMxRUMsa0JBQU1BLFdBQVdBLEVBQUVBLFVBQVVBLENBQUNBLENBQUNBO1FBRGJBLGdCQUFXQSxHQUFYQSxXQUFXQSxDQUFZQTtRQUFZQSxlQUFVQSxHQUFWQSxVQUFVQSxDQUFXQTtRQUUxRUEsSUFBSUEsQ0FBQ0EsRUFBRUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDZkEsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsUUFBUUEsQ0FBQ0E7UUFDMUJBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLFFBQVFBLENBQUNBO0lBQy9CQSxDQUFDQTtJQW5CTEQ7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLFFBQVFBO1lBQ2xCQSxRQUFRQSxFQUFFQSx5ZUFRNEJBO1NBQ3pDQSxDQUFDQTs7ZUFTREE7SUFBREEsYUFBQ0E7QUFBREEsQ0FwQkEsQUFvQkNBLEVBUDJCLHFCQUFTLEVBT3BDO0FBUFksY0FBTSxTQU9sQixDQUFBIiwiZmlsZSI6ImNvbXBzL2FwcDIvbm90ZXMvTm90ZXM0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1NsaWRlcnBhbmVsfSBmcm9tIFwiLi4vLi4vc2xpZGVycGFuZWwvU2xpZGVycGFuZWxcIjtcclxuaW1wb3J0IHtDb21tQnJva2VyfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvQ29tbUJyb2tlclwiO1xyXG5pbXBvcnQge05vdGVzQmFzZX0gZnJvbSBcIi4vTm90ZXNCYXNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnTm90ZXM0JyxcclxuICAgIHRlbXBsYXRlOiBgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJvblByZXYoJGV2ZW50KVwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtYXJyb3ctbGVmdCBcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJvbk5leHQoJGV2ZW50KVwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtYXJyb3ctcmlnaHRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICA8c21hbGw+SSBhbSBub3RlczQgY29tcG9uZW50PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5gXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTm90ZXM0IGV4dGVuZHMgTm90ZXNCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzbGlkZXJQYW5lbDpTbGlkZXJwYW5lbCwgcHJvdGVjdGVkIGNvbW1Ccm9rZXI6Q29tbUJyb2tlcikge1xyXG4gICAgICAgIHN1cGVyKHNsaWRlclBhbmVsLCBjb21tQnJva2VyKTtcclxuICAgICAgICB0aGlzLm1lID0gdGhpcztcclxuICAgICAgICB0aGlzLnNsaWRlTGVmdCA9ICdub3RlczUnO1xyXG4gICAgICAgIHRoaXMuc2xpZGVSaWdodCA9ICdub3RlczMnO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
