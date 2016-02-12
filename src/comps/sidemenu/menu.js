var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var CommBroker_1 = require("../../services/CommBroker");
var Conts_1 = require("../../Conts");
var Menu = (function () {
    function Menu(commBroker) {
        this.m_hidden = false;
        this.m_items = [];
        this.m_commBroker = commBroker;
        this.listenWinResize();
    }
    Menu.prototype.listenWinResize = function () {
        var _this = this;
        var self = this;
        self.m_commBroker.onEvent(Conts_1.Consts.Events().WIN_SIZED).subscribe(function (e) {
            if (e.message.width < Conts_1.Consts.Values().MENU_MIN_ICON_SHOW) {
                _this.m_hidden = true;
            }
            else {
                _this.m_hidden = false;
            }
        });
    };
    Menu.prototype.listenMenuSelected = function (event) {
        var text = event.target.nodeName.toLocaleLowerCase() == 'li' ? jQuery(event.target).find('span').text() : jQuery(event.target).closest('li').find('span').text();
        event.preventDefault();
        this.m_commBroker.fire({
            fromInstance: self,
            event: Conts_1.Consts.Events().MENU_SELECTION,
            context: null,
            message: text
        });
        return false;
    };
    Menu.prototype.addMenuItem = function (i_item) {
        this.m_items.push(i_item);
    };
    Menu = __decorate([
        core_1.Component({
            selector: 'Menu',
            inputs: ['fontAwesome:fontAwesome'],
            styles: ["\n    .appMenu {\n      background: #3e3f48;\n    }\n  "],
            template: "\n        <section id=\"appNavigatorWasp\" (click)=\"listenMenuSelected($event)\" class=\"appMenu hidden-xs hidden-sm hidden-md col-lg-1\">\n         <li *ngFor=\"#item of m_items\" data-ripple-color=\"white\" class=\"btn btn-default list-group-item\">\n            <i class=\"navicons fa {{item.localFontAwesome}}\" [hidden]=\"m_hidden\">\n            </i>\n            <span>{{item.localTabTitle}}</span>\n          </li>\n      </section>\n    "
        }), 
        __metadata('design:paramtypes', [CommBroker_1.CommBroker])
    ], Menu);
    return Menu;
})();
exports.Menu = Menu;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL3NpZGVtZW51L21lbnUudHMiXSwibmFtZXMiOlsiTWVudSIsIk1lbnUuY29uc3RydWN0b3IiLCJNZW51Lmxpc3RlbldpblJlc2l6ZSIsIk1lbnUubGlzdGVuTWVudVNlbGVjdGVkIiwiTWVudS5hZGRNZW51SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUEscUJBQW9DLGVBQWUsQ0FBQyxDQUFBO0FBRXBELDJCQUF5QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3JELHNCQUFxQixhQUFhLENBQUMsQ0FBQTtBQUduQztJQXdCSUEsY0FBWUEsVUFBcUJBO1FBQzdCQyxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxLQUFLQSxDQUFDQTtRQUN0QkEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFDbEJBLElBQUlBLENBQUNBLFlBQVlBLEdBQUdBLFVBQVVBLENBQUNBO1FBQy9CQSxJQUFJQSxDQUFDQSxlQUFlQSxFQUFFQSxDQUFDQTtJQUUzQkEsQ0FBQ0E7SUFFT0QsOEJBQWVBLEdBQXZCQTtRQUFBRSxpQkFTQ0E7UUFSR0EsSUFBSUEsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDaEJBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLGNBQU1BLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLFNBQVNBLENBQUNBLFVBQUNBLENBQVVBO1lBQ3RFQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxHQUFHQSxjQUFNQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxrQkFBa0JBLENBQUNBLENBQUFBLENBQUNBO2dCQUN0REEsS0FBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0E7WUFDekJBLENBQUNBO1lBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNKQSxLQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxLQUFLQSxDQUFDQTtZQUMxQkEsQ0FBQ0E7UUFDTEEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDUEEsQ0FBQ0E7SUFFT0YsaUNBQWtCQSxHQUExQkEsVUFBMkJBLEtBQUtBO1FBQzVCRyxJQUFJQSxJQUFJQSxHQUFHQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxpQkFBaUJBLEVBQUVBLElBQUlBLElBQUlBLEdBQUdBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLElBQUlBLEVBQUVBLEdBQUdBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBO1FBQ2pLQSxLQUFLQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtRQUN2QkEsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7WUFDbkJBLFlBQVlBLEVBQUVBLElBQUlBO1lBQ2xCQSxLQUFLQSxFQUFFQSxjQUFNQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxjQUFjQTtZQUNyQ0EsT0FBT0EsRUFBRUEsSUFBSUE7WUFDYkEsT0FBT0EsRUFBRUEsSUFBSUE7U0FDaEJBLENBQUNBLENBQUNBO1FBQ0hBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO0lBQ2pCQSxDQUFDQTtJQUVNSCwwQkFBV0EsR0FBbEJBLFVBQW1CQSxNQUFlQTtRQUM5QkksSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7SUFDOUJBLENBQUNBO0lBekRMSjtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsTUFBTUE7WUFDaEJBLE1BQU1BLEVBQUVBLENBQUNBLHlCQUF5QkEsQ0FBQ0E7WUFDbkNBLE1BQU1BLEVBQUVBLENBQUNBLHlEQUlWQSxDQUFDQTtZQUNBQSxRQUFRQSxFQUFFQSxpY0FRVEE7U0FDSkEsQ0FBQ0E7O2FBeUNEQTtJQUFEQSxXQUFDQTtBQUFEQSxDQTFEQSxBQTBEQ0EsSUFBQTtBQXZDWSxZQUFJLE9BdUNoQixDQUFBIiwiZmlsZSI6ImNvbXBzL3NpZGVtZW51L01lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL2FwcC5kLnRzXCIvPlxyXG5cclxuaW1wb3J0IHtDb21wb25lbnQsIEluamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7TWVudUl0ZW19IGZyb20gXCIuL01lbnVJdGVtXCI7XHJcbmltcG9ydCB7Q29tbUJyb2tlcn0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL0NvbW1Ccm9rZXJcIjtcclxuaW1wb3J0IHtDb25zdHN9IGZyb20gXCIuLi8uLi9Db250c1wiO1xyXG5pbXBvcnQge0lNZXNzYWdlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvQ29tbUJyb2tlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ01lbnUnLFxyXG4gICAgaW5wdXRzOiBbJ2ZvbnRBd2Vzb21lOmZvbnRBd2Vzb21lJ10sXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAuYXBwTWVudSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMzZTNmNDg7XHJcbiAgICB9XHJcbiAgYF0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxzZWN0aW9uIGlkPVwiYXBwTmF2aWdhdG9yV2FzcFwiIChjbGljayk9XCJsaXN0ZW5NZW51U2VsZWN0ZWQoJGV2ZW50KVwiIGNsYXNzPVwiYXBwTWVudSBoaWRkZW4teHMgaGlkZGVuLXNtIGhpZGRlbi1tZCBjb2wtbGctMVwiPlxyXG4gICAgICAgICA8bGkgKm5nRm9yPVwiI2l0ZW0gb2YgbV9pdGVtc1wiIGRhdGEtcmlwcGxlLWNvbG9yPVwid2hpdGVcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJuYXZpY29ucyBmYSB7e2l0ZW0ubG9jYWxGb250QXdlc29tZX19XCIgW2hpZGRlbl09XCJtX2hpZGRlblwiPlxyXG4gICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgIDxzcGFuPnt7aXRlbS5sb2NhbFRhYlRpdGxlfX08L3NwYW4+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICBgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTWVudSB7XHJcbiAgICBwcml2YXRlIG1faXRlbXM6TWVudUl0ZW1bXTtcclxuICAgIHByaXZhdGUgbV9jb21tQnJva2VyOkNvbW1Ccm9rZXI7XHJcbiAgICBwcml2YXRlIG1faGlkZGVuOmJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29tbUJyb2tlcjpDb21tQnJva2VyKSB7XHJcbiAgICAgICAgdGhpcy5tX2hpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubV9pdGVtcyA9IFtdO1xyXG4gICAgICAgIHRoaXMubV9jb21tQnJva2VyID0gY29tbUJyb2tlcjtcclxuICAgICAgICB0aGlzLmxpc3RlbldpblJlc2l6ZSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxpc3RlbldpblJlc2l6ZSgpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgc2VsZi5tX2NvbW1Ccm9rZXIub25FdmVudChDb25zdHMuRXZlbnRzKCkuV0lOX1NJWkVEKS5zdWJzY3JpYmUoKGU6SU1lc3NhZ2UpPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5tZXNzYWdlLndpZHRoIDwgQ29uc3RzLlZhbHVlcygpLk1FTlVfTUlOX0lDT05fU0hPVyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1faGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbGlzdGVuTWVudVNlbGVjdGVkKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIHRleHQgPSBldmVudC50YXJnZXQubm9kZU5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PSAnbGknID8galF1ZXJ5KGV2ZW50LnRhcmdldCkuZmluZCgnc3BhbicpLnRleHQoKSA6IGpRdWVyeShldmVudC50YXJnZXQpLmNsb3Nlc3QoJ2xpJykuZmluZCgnc3BhbicpLnRleHQoKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMubV9jb21tQnJva2VyLmZpcmUoe1xyXG4gICAgICAgICAgICBmcm9tSW5zdGFuY2U6IHNlbGYsXHJcbiAgICAgICAgICAgIGV2ZW50OiBDb25zdHMuRXZlbnRzKCkuTUVOVV9TRUxFQ1RJT04sXHJcbiAgICAgICAgICAgIGNvbnRleHQ6IG51bGwsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IHRleHRcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZE1lbnVJdGVtKGlfaXRlbTpNZW51SXRlbSk6dm9pZCB7XHJcbiAgICAgICAgdGhpcy5tX2l0ZW1zLnB1c2goaV9pdGVtKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
