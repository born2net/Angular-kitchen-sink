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
var Notes5 = (function (_super) {
    __extends(Notes5, _super);
    function Notes5(sliderPanel, commBroker) {
        _super.call(this, sliderPanel, commBroker);
        this.sliderPanel = sliderPanel;
        this.commBroker = commBroker;
        this.me = this;
        this.slideRight = 'notes4';
    }
    Notes5 = __decorate([
        core_1.Component({
            selector: 'Notes5',
            template: "<button type=\"button\" (click)=\"onPrev($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-left \"></span>\n                </button>\n                <hr/>\n                <small>I am notes5 component</small>\n                <ng-content></ng-content>"
        }), 
        __metadata('design:paramtypes', [Sliderpanel_1.Sliderpanel, CommBroker_1.CommBroker])
    ], Notes5);
    return Notes5;
})(NotesBase_1.NotesBase);
exports.Notes5 = Notes5;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDIvbm90ZXMvbm90ZXM1LnRzIl0sIm5hbWVzIjpbIk5vdGVzNSIsIk5vdGVzNS5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsNEJBQTBCLCtCQUErQixDQUFDLENBQUE7QUFDMUQsMkJBQXlCLDhCQUE4QixDQUFDLENBQUE7QUFDeEQsMEJBQXdCLGFBQWEsQ0FBQyxDQUFBO0FBRXRDO0lBVTRCQSwwQkFBU0E7SUFDakNBLGdCQUFzQkEsV0FBdUJBLEVBQVlBLFVBQXFCQTtRQUMxRUMsa0JBQU1BLFdBQVdBLEVBQUVBLFVBQVVBLENBQUNBLENBQUNBO1FBRGJBLGdCQUFXQSxHQUFYQSxXQUFXQSxDQUFZQTtRQUFZQSxlQUFVQSxHQUFWQSxVQUFVQSxDQUFXQTtRQUUxRUEsSUFBSUEsQ0FBQ0EsRUFBRUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDZkEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsUUFBUUEsQ0FBQ0E7SUFDL0JBLENBQUNBO0lBZkxEO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxRQUFRQTtZQUNsQkEsUUFBUUEsRUFBRUEsd1NBSzRCQTtTQUN6Q0EsQ0FBQ0E7O2VBUURBO0lBQURBLGFBQUNBO0FBQURBLENBaEJBLEFBZ0JDQSxFQU4yQixxQkFBUyxFQU1wQztBQU5ZLGNBQU0sU0FNbEIsQ0FBQSIsImZpbGUiOiJjb21wcy9hcHAyL25vdGVzL05vdGVzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtTbGlkZXJwYW5lbH0gZnJvbSBcIi4uLy4uL3NsaWRlcnBhbmVsL1NsaWRlcnBhbmVsXCI7XHJcbmltcG9ydCB7Q29tbUJyb2tlcn0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL0NvbW1Ccm9rZXJcIjtcclxuaW1wb3J0IHtOb3Rlc0Jhc2V9IGZyb20gXCIuL05vdGVzQmFzZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ05vdGVzNScsXHJcbiAgICB0ZW1wbGF0ZTogYDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJvblByZXYoJGV2ZW50KVwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtYXJyb3ctbGVmdCBcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICA8c21hbGw+SSBhbSBub3RlczUgY29tcG9uZW50PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5gXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTm90ZXM1IGV4dGVuZHMgTm90ZXNCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzbGlkZXJQYW5lbDpTbGlkZXJwYW5lbCwgcHJvdGVjdGVkIGNvbW1Ccm9rZXI6Q29tbUJyb2tlcikge1xyXG4gICAgICAgIHN1cGVyKHNsaWRlclBhbmVsLCBjb21tQnJva2VyKTtcclxuICAgICAgICB0aGlzLm1lID0gdGhpcztcclxuICAgICAgICB0aGlzLnNsaWRlUmlnaHQgPSAnbm90ZXM0JztcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
