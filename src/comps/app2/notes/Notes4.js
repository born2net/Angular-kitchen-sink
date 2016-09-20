System.register(['@angular/core', "../../sliderpanel/Sliderpanel", "../../../services/CommBroker", "./NotesBase"], function(exports_1, context_1) {
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
    var core_1, Sliderpanel_1, CommBroker_1, NotesBase_1;
    var Notes4;
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
            }],
        execute: function() {
            Notes4 = (function (_super) {
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
                        template: " <button type=\"button\" (click)=\"onPrev($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-left \"></span>\n                </button>\n                <button type=\"button\" (click)=\"onNext($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-right\"></span>\n                </button>\n                <hr/>\n                <small>I am notes4 component</small>\n                <hr/>\n                <button (click)=\"show = !show\">Toggle one item</button>\n                <notes-details>\n                  <notes-details-item [content]=\"getContent\" [myValue]=\"'One'\"\n                        (select)=\"itemDetailsClicked($event)\"> noted details item 1 </notes-details-item>\n                  <notes-details-item [content]=\"getContent\" [myValue]=\"'Two'\"\n                        (select)=\"itemDetailsClicked($event)\" *ngIf=\"show\"> noted details item 2 </notes-details-item>\n                </notes-details>\n                <ng-content></ng-content>"
                    }), 
                    __metadata('design:paramtypes', [Sliderpanel_1.Sliderpanel, CommBroker_1.CommBroker])
                ], Notes4);
                return Notes4;
            }(NotesBase_1.NotesBase));
            exports_1("Notes4", Notes4);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDIvbm90ZXMvTm90ZXM0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQ0E7Z0JBQTRCLDBCQUFTO2dCQUlqQyxnQkFBc0IsV0FBdUIsRUFBWSxVQUFxQjtvQkFDMUUsa0JBQU0sV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO29CQURiLGdCQUFXLEdBQVgsV0FBVyxDQUFZO29CQUFZLGVBQVUsR0FBVixVQUFVLENBQVc7b0JBSHRFLFNBQUksR0FBVyxJQUFJLENBQUM7b0JBQ3BCLGNBQVMsR0FBTyxLQUFLLENBQUM7b0JBSTFCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO29CQUMxQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO29CQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztnQkFFL0IsQ0FBQztnQkFFRCwyQkFBVSxHQUFWLFVBQVcsSUFBSTtvQkFDWCxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNoQixDQUFDO2dCQUVELG1DQUFrQixHQUFsQixVQUFtQixLQUFLO29CQUNwQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2pCLENBQUM7Z0JBeENMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSwraENBZ0I0QjtxQkFDekMsQ0FBQzs7MEJBQUE7Z0JBc0JGLGFBQUM7WUFBRCxDQXBCQSxBQW9CQyxDQXBCMkIscUJBQVMsR0FvQnBDO1lBcEJELDJCQW9CQyxDQUFBIiwiZmlsZSI6ImNvbXBzL2FwcDIvbm90ZXMvTm90ZXM0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1NsaWRlcnBhbmVsfSBmcm9tIFwiLi4vLi4vc2xpZGVycGFuZWwvU2xpZGVycGFuZWxcIjtcclxuaW1wb3J0IHtDb21tQnJva2VyfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvQ29tbUJyb2tlclwiO1xyXG5pbXBvcnQge05vdGVzQmFzZX0gZnJvbSBcIi4vTm90ZXNCYXNlXCI7XHJcbmltcG9ydCB7Tm90ZXNEZXRhaWxzfSBmcm9tIFwiLi9Ob3Rlc0RldGFpbHNcIjtcclxuaW1wb3J0IHtOb3Rlc0RldGFpbHNJdGVtc30gZnJvbSBcIi4vTm90ZXNEZXRhaWxzSXRlbXNcIjtcclxuXHJcblxyXG4vKipcclxuICogIEFtb25nIG90aGVyIHRoaW5ncywgdGhpcyBjbGFzcyBkZW1vbnN0cmF0ZXMgaG93IHRvIHBhc3MgYSBtZXRob2QgdG8gYSBjb21wb25lbnRcclxuICogIGFuZCB0aGF0IGNvbXBvbmVudCBjYWxsIGl0OiBbY29udGVudF09XCJnZXRDb250ZW50XCJcclxuICoqL1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnTm90ZXM0JyxcclxuICAgIHRlbXBsYXRlOiBgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJvblByZXYoJGV2ZW50KVwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtYXJyb3ctbGVmdCBcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJvbk5leHQoJGV2ZW50KVwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtYXJyb3ctcmlnaHRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICA8c21hbGw+SSBhbSBub3RlczQgY29tcG9uZW50PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJzaG93ID0gIXNob3dcIj5Ub2dnbGUgb25lIGl0ZW08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxub3Rlcy1kZXRhaWxzPlxyXG4gICAgICAgICAgICAgICAgICA8bm90ZXMtZGV0YWlscy1pdGVtIFtjb250ZW50XT1cImdldENvbnRlbnRcIiBbbXlWYWx1ZV09XCInT25lJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzZWxlY3QpPVwiaXRlbURldGFpbHNDbGlja2VkKCRldmVudClcIj4gbm90ZWQgZGV0YWlscyBpdGVtIDEgPC9ub3Rlcy1kZXRhaWxzLWl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxub3Rlcy1kZXRhaWxzLWl0ZW0gW2NvbnRlbnRdPVwiZ2V0Q29udGVudFwiIFtteVZhbHVlXT1cIidUd28nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHNlbGVjdCk9XCJpdGVtRGV0YWlsc0NsaWNrZWQoJGV2ZW50KVwiICpuZ0lmPVwic2hvd1wiPiBub3RlZCBkZXRhaWxzIGl0ZW0gMiA8L25vdGVzLWRldGFpbHMtaXRlbT5cclxuICAgICAgICAgICAgICAgIDwvbm90ZXMtZGV0YWlscz5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5gXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTm90ZXM0IGV4dGVuZHMgTm90ZXNCYXNlIHtcclxuICAgIHByaXZhdGUgc2hvdzpib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgc29tZVZhbHVlOmFueSA9ICc5OTknO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzbGlkZXJQYW5lbDpTbGlkZXJwYW5lbCwgcHJvdGVjdGVkIGNvbW1Ccm9rZXI6Q29tbUJyb2tlcikge1xyXG4gICAgICAgIHN1cGVyKHNsaWRlclBhbmVsLCBjb21tQnJva2VyKTtcclxuICAgICAgICB0aGlzLnNvbWVWYWx1ZSA9ICdGb29CYXInO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLnNsaWRlTGVmdCA9ICdub3RlczUnO1xyXG4gICAgICAgIHRoaXMuc2xpZGVSaWdodCA9ICdub3RlczMnO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRDb250ZW50KHVzZXIpOnN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaXRlbURldGFpbHNDbGlja2VkKGV2ZW50KSB7XHJcbiAgICAgICAgYWxlcnQoZXZlbnQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
