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
var Minitab_1 = require("../../minitabs/Minitab");
var Minitabs_1 = require("../../minitabs/Minitabs");
var Notes3 = (function (_super) {
    __extends(Notes3, _super);
    function Notes3(sliderPanel, commBroker) {
        _super.call(this, sliderPanel, commBroker);
        this.sliderPanel = sliderPanel;
        this.commBroker = commBroker;
        this.me = this;
        this.slideLeft = 'notes4';
        this.slideRight = 'notes2';
    }
    Notes3 = __decorate([
        core_1.Component({
            selector: 'Notes3',
            directives: [Minitab_1.Minitab, Minitabs_1.Minitabs],
            template: " <button type=\"button\" (click)=\"onPrev($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-left\"></span>\n                </button>\n                <button type=\"button\" (click)=\"onNext($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-right\"></span>\n                </button>\n                <hr/>\n                <small>I am notes3 component</small>\n                 <mini-tabs>\n                  <mini-tab [tabTitle]=\"'Tab 1'\">Tab 1 Content</mini-tab>\n                  <mini-tab tabTitle=\"Tab 2\">Tab 2 Content</mini-tab>\n                  <mini-tab tabTitle=\"Tab 3\">Tab 3 Content</mini-tab>\n                  <mini-tab tabTitle=\"Tab 4\">Tab 4 Content</mini-tab>\n                  <mini-tab tabTitle=\"Tab 5\">Tab 5 Content</mini-tab>\n                </mini-tabs>\n                <small>I am a Minitab component (@ContentChildren)</small>\n                <ng-content></ng-content>"
        }), 
        __metadata('design:paramtypes', [Sliderpanel_1.Sliderpanel, CommBroker_1.CommBroker])
    ], Notes3);
    return Notes3;
})(NotesBase_1.NotesBase);
exports.Notes3 = Notes3;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDIvbm90ZXMvbm90ZXMzLnRzIl0sIm5hbWVzIjpbIk5vdGVzMyIsIk5vdGVzMy5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsNEJBQTBCLCtCQUErQixDQUFDLENBQUE7QUFDMUQsMkJBQXlCLDhCQUE4QixDQUFDLENBQUE7QUFDeEQsMEJBQXdCLGFBQWEsQ0FBQyxDQUFBO0FBQ3RDLHdCQUFzQix3QkFBd0IsQ0FBQyxDQUFBO0FBQy9DLHlCQUF1Qix5QkFBeUIsQ0FBQyxDQUFBO0FBRWpEO0lBc0I0QkEsMEJBQVNBO0lBQ2pDQSxnQkFBc0JBLFdBQXVCQSxFQUFZQSxVQUFxQkE7UUFDMUVDLGtCQUFNQSxXQUFXQSxFQUFFQSxVQUFVQSxDQUFDQSxDQUFDQTtRQURiQSxnQkFBV0EsR0FBWEEsV0FBV0EsQ0FBWUE7UUFBWUEsZUFBVUEsR0FBVkEsVUFBVUEsQ0FBV0E7UUFFMUVBLElBQUlBLENBQUNBLEVBQUVBLEdBQUdBLElBQUlBLENBQUNBO1FBQ2ZBLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLFFBQVFBLENBQUNBO1FBQzFCQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxRQUFRQSxDQUFDQTtJQUMvQkEsQ0FBQ0E7SUE1QkxEO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxRQUFRQTtZQUNsQkEsVUFBVUEsRUFBRUEsQ0FBQ0EsaUJBQU9BLEVBQUVBLG1CQUFRQSxDQUFDQTtZQUMvQkEsUUFBUUEsRUFBRUEsaStCQWdCNEJBO1NBQ3pDQSxDQUFDQTs7ZUFTREE7SUFBREEsYUFBQ0E7QUFBREEsQ0E3QkEsQUE2QkNBLEVBUDJCLHFCQUFTLEVBT3BDO0FBUFksY0FBTSxTQU9sQixDQUFBIiwiZmlsZSI6ImNvbXBzL2FwcDIvbm90ZXMvTm90ZXMzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1NsaWRlcnBhbmVsfSBmcm9tIFwiLi4vLi4vc2xpZGVycGFuZWwvU2xpZGVycGFuZWxcIjtcclxuaW1wb3J0IHtDb21tQnJva2VyfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvQ29tbUJyb2tlclwiO1xyXG5pbXBvcnQge05vdGVzQmFzZX0gZnJvbSBcIi4vTm90ZXNCYXNlXCI7XHJcbmltcG9ydCB7TWluaXRhYn0gZnJvbSBcIi4uLy4uL21pbml0YWJzL01pbml0YWJcIjtcclxuaW1wb3J0IHtNaW5pdGFic30gZnJvbSBcIi4uLy4uL21pbml0YWJzL01pbml0YWJzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnTm90ZXMzJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtNaW5pdGFiLCBNaW5pdGFic10sXHJcbiAgICB0ZW1wbGF0ZTogYCA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwib25QcmV2KCRldmVudClcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWFycm93LWxlZnRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJvbk5leHQoJGV2ZW50KVwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtYXJyb3ctcmlnaHRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICA8c21hbGw+SSBhbSBub3RlczMgY29tcG9uZW50PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICA8bWluaS10YWJzPlxyXG4gICAgICAgICAgICAgICAgICA8bWluaS10YWIgW3RhYlRpdGxlXT1cIidUYWIgMSdcIj5UYWIgMSBDb250ZW50PC9taW5pLXRhYj5cclxuICAgICAgICAgICAgICAgICAgPG1pbmktdGFiIHRhYlRpdGxlPVwiVGFiIDJcIj5UYWIgMiBDb250ZW50PC9taW5pLXRhYj5cclxuICAgICAgICAgICAgICAgICAgPG1pbmktdGFiIHRhYlRpdGxlPVwiVGFiIDNcIj5UYWIgMyBDb250ZW50PC9taW5pLXRhYj5cclxuICAgICAgICAgICAgICAgICAgPG1pbmktdGFiIHRhYlRpdGxlPVwiVGFiIDRcIj5UYWIgNCBDb250ZW50PC9taW5pLXRhYj5cclxuICAgICAgICAgICAgICAgICAgPG1pbmktdGFiIHRhYlRpdGxlPVwiVGFiIDVcIj5UYWIgNSBDb250ZW50PC9taW5pLXRhYj5cclxuICAgICAgICAgICAgICAgIDwvbWluaS10YWJzPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsPkkgYW0gYSBNaW5pdGFiIGNvbXBvbmVudCAoQENvbnRlbnRDaGlsZHJlbik8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBOb3RlczMgZXh0ZW5kcyBOb3Rlc0Jhc2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIHNsaWRlclBhbmVsOlNsaWRlcnBhbmVsLCBwcm90ZWN0ZWQgY29tbUJyb2tlcjpDb21tQnJva2VyKSB7XHJcbiAgICAgICAgc3VwZXIoc2xpZGVyUGFuZWwsIGNvbW1Ccm9rZXIpO1xyXG4gICAgICAgIHRoaXMubWUgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc2xpZGVMZWZ0ID0gJ25vdGVzNCc7XHJcbiAgICAgICAgdGhpcy5zbGlkZVJpZ2h0ID0gJ25vdGVzMic7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
