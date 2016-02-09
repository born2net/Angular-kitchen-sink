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
var browser_1 = require('angular2/platform/browser');
var router_1 = require("angular2/router");
var CommBroker_1 = require("../../services/CommBroker");
var Conts_1 = require("../../Conts");
var Filemenu = (function () {
    function Filemenu(viewContainer, router, commBroker) {
        this.dom = new browser_1.BrowserDomAdapter();
        var self = this;
        self.m_commBroker = commBroker;
        self.m_items = [];
        self.m_renderedItems = [];
        self.viewContainer = viewContainer;
        self.el = viewContainer.element.nativeElement;
        self.m_fileMenuWrap = self.dom.getElementsByClassName(self.el, 'm_fileMenuWrap');
        router.subscribe(function (currentRoute) {
            self.m_renderedItems = [];
            for (var item in self.m_items) {
                if (self.m_items[item]['app'] == currentRoute)
                    self.m_renderedItems.push(self.m_items[item]);
            }
            if (self.m_renderedItems.length == 0) {
                jQuery(self.m_fileMenuWrap).fadeOut('slow', function () {
                    self.dom.setStyle(self.el, 'opacity', '0');
                });
            }
            else {
                jQuery(self.m_fileMenuWrap).fadeIn('slow', function () {
                    self.dom.setStyle(self.el, 'opacity', '1');
                });
                var app = self.m_commBroker.getService(Conts_1.Consts.Services().App);
                app.appResized();
            }
        });
        jQuery('.navbar-nav').css({
            display: 'block'
        });
    }
    Filemenu.prototype.listenMenuSelected = function (event) {
        this.m_commBroker.fire({
            fromInstance: self,
            event: Conts_1.Consts.Events().MENU_SELECTION,
            context: null,
            message: event.target.text
        });
        event.preventDefault();
        return false;
    };
    Filemenu.prototype.addFileMenuItem = function (i_item) {
        this.m_items.push(i_item);
    };
    Filemenu = __decorate([
        core_1.Component({
            selector: 'Filemenu',
            inputs: ['appPrefix'],
            template: "\n        <div>\n             <div class=\"m_fileMenuWrap\">\n                <ul class=\"nav navbar-nav\" >\n                <li id=\"commonFileMenu\" class=\"hidden-lg\" dropdown>\n                  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Navigatior<b class=\"caret\"></b></a>\n                  <ul class=\"dropdown-menu\">\n                  <li class=\"divider\"></li>\n                    <li *ngFor=\"#item of m_renderedItems\" (click)=\"listenMenuSelected($event)\">\n                       <a href=\"#\">{{item.title}}</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                  </ul>\n                </li>\n              </ul>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, router_1.Router, CommBroker_1.CommBroker])
    ], Filemenu);
    return Filemenu;
})();
exports.Filemenu = Filemenu;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2ZpbGVtZW51L2ZpbGVtZW51LnRzIl0sIm5hbWVzIjpbIkZpbGVtZW51IiwiRmlsZW1lbnUuY29uc3RydWN0b3IiLCJGaWxlbWVudS5saXN0ZW5NZW51U2VsZWN0ZWQiLCJGaWxlbWVudS5hZGRGaWxlTWVudUl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBLHFCQUEwQyxlQUFlLENBQUMsQ0FBQTtBQUMxRCx3QkFBZ0MsMkJBQTJCLENBQUMsQ0FBQTtBQUU1RCx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN2QywyQkFBeUIsMkJBQTJCLENBQUMsQ0FBQTtBQUNyRCxzQkFBcUIsYUFBYSxDQUFDLENBQUE7QUFRbkM7SUErQklBLGtCQUFZQSxhQUE4QkEsRUFBRUEsTUFBYUEsRUFBRUEsVUFBcUJBO1FBRnhFQyxRQUFHQSxHQUFHQSxJQUFJQSwyQkFBaUJBLEVBQUVBLENBQUNBO1FBR2xDQSxJQUFJQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUNoQkEsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0EsVUFBVUEsQ0FBQ0E7UUFDL0JBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLEVBQUVBLENBQUNBO1FBQ2xCQSxJQUFJQSxDQUFDQSxlQUFlQSxHQUFHQSxFQUFFQSxDQUFDQTtRQUMxQkEsSUFBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsYUFBYUEsQ0FBQ0E7UUFDbkNBLElBQUlBLENBQUNBLEVBQUVBLEdBQUdBLGFBQWFBLENBQUNBLE9BQU9BLENBQUNBLGFBQWFBLENBQUNBO1FBQzlDQSxJQUFJQSxDQUFDQSxjQUFjQSxHQUFHQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxzQkFBc0JBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLEVBQUVBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0E7UUFFakZBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBLFVBQVVBLFlBQVlBO1lBQ25DLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1lBQzFCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksWUFBWSxDQUFDO29CQUMxQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdEQsQ0FBQztZQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtvQkFFeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQy9DLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtvQkFFdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQy9DLENBQUMsQ0FBQyxDQUFDO2dCQUVILElBQUksR0FBRyxHQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLGNBQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbEUsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3JCLENBQUM7UUFFTCxDQUFDLENBQUNBLENBQUNBO1FBRUhBLE1BQU1BLENBQUNBLGFBQWFBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBO1lBQ3RCQSxPQUFPQSxFQUFFQSxPQUFPQTtTQUNuQkEsQ0FBQ0EsQ0FBQ0E7SUFnQlBBLENBQUNBO0lBWU9ELHFDQUFrQkEsR0FBMUJBLFVBQTJCQSxLQUFLQTtRQUM1QkUsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7WUFDbkJBLFlBQVlBLEVBQUVBLElBQUlBO1lBQ2xCQSxLQUFLQSxFQUFFQSxjQUFNQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxjQUFjQTtZQUNyQ0EsT0FBT0EsRUFBRUEsSUFBSUE7WUFDYkEsT0FBT0EsRUFBRUEsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUE7U0FDN0JBLENBQUNBLENBQUNBO1FBQ0hBLEtBQUtBLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBO1FBQ3ZCQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQTtJQUNqQkEsQ0FBQ0E7SUFFTUYsa0NBQWVBLEdBQXRCQSxVQUF1QkEsTUFBbUJBO1FBQ3RDRyxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtJQUM5QkEsQ0FBQ0E7SUExR0xIO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxVQUFVQTtZQUNwQkEsTUFBTUEsRUFBRUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7WUFDckJBLFFBQVFBLEVBQUVBLHl1QkFpQlRBO1NBQ0pBLENBQUNBOztpQkFzRkRBO0lBQURBLGVBQUNBO0FBQURBLENBM0dBLEFBMkdDQSxJQUFBO0FBckZZLGdCQUFRLFdBcUZwQixDQUFBIiwiZmlsZSI6ImNvbXBzL2ZpbGVtZW51L0ZpbGVtZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9hcHAuZC50c1wiIC8+XHJcblxyXG5pbXBvcnQge0NvbXBvbmVudCwgVmlld0NvbnRhaW5lclJlZn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7QnJvd3NlckRvbUFkYXB0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xyXG5pbXBvcnQge0ZpbGVtZW51SXRlbX0gZnJvbSBcIi4vRmlsZW1lbnVJdGVtXCI7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XHJcbmltcG9ydCB7Q29tbUJyb2tlcn0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL0NvbW1Ccm9rZXJcIjtcclxuaW1wb3J0IHtDb25zdHN9IGZyb20gXCIuLi8uLi9Db250c1wiO1xyXG5pbXBvcnQge0FwcH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9BcHBcIjtcclxuXHJcbi8qKlxyXG4gRmlsZW1lbnUgbWFuYWdlcyB0aGUgdG9wIGhlYWRlciBmaWxlIG1lbnUgcGVyIGFwcGxpY2F0aW9uIGFzIGl0IG11dGF0ZXMgaXQncyBjb250ZW50IGRlcGVuZGluZ1xyXG4gb24gd2hpY2ggQXBwIGhhcyBsb2FkZWRcclxuIEBjbGFzcyBGaWxlbWVudVxyXG4gKiovXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdGaWxlbWVudScsXHJcbiAgICBpbnB1dHM6IFsnYXBwUHJlZml4J10sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibV9maWxlTWVudVdyYXBcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXZiYXItbmF2XCIgPlxyXG4gICAgICAgICAgICAgICAgPGxpIGlkPVwiY29tbW9uRmlsZU1lbnVcIiBjbGFzcz1cImhpZGRlbi1sZ1wiIGRyb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPk5hdmlnYXRpb3I8YiBjbGFzcz1cImNhcmV0XCI+PC9iPjwvYT5cclxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJkaXZpZGVyXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwiI2l0ZW0gb2YgbV9yZW5kZXJlZEl0ZW1zXCIgKGNsaWNrKT1cImxpc3Rlbk1lbnVTZWxlY3RlZCgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj57e2l0ZW0udGl0bGV9fTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEZpbGVtZW51IHtcclxuICAgIHByaXZhdGUgbV9pdGVtczpGaWxlbWVudUl0ZW1bXTtcclxuICAgIHByaXZhdGUgbV9yZW5kZXJlZEl0ZW1zOmFueVtdO1xyXG4gICAgcHJpdmF0ZSBtX2ZpbGVNZW51V3JhcDphbnk7XHJcbiAgICBwcml2YXRlIG1fY29tbUJyb2tlcjpDb21tQnJva2VyO1xyXG4gICAgcHJpdmF0ZSBlbDphbnk7XHJcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXI6Vmlld0NvbnRhaW5lclJlZjtcclxuICAgIHByaXZhdGUgZG9tID0gbmV3IEJyb3dzZXJEb21BZGFwdGVyKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3Iodmlld0NvbnRhaW5lcjpWaWV3Q29udGFpbmVyUmVmLCByb3V0ZXI6Um91dGVyLCBjb21tQnJva2VyOkNvbW1Ccm9rZXIpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgc2VsZi5tX2NvbW1Ccm9rZXIgPSBjb21tQnJva2VyO1xyXG4gICAgICAgIHNlbGYubV9pdGVtcyA9IFtdO1xyXG4gICAgICAgIHNlbGYubV9yZW5kZXJlZEl0ZW1zID0gW107XHJcbiAgICAgICAgc2VsZi52aWV3Q29udGFpbmVyID0gdmlld0NvbnRhaW5lcjtcclxuICAgICAgICBzZWxmLmVsID0gdmlld0NvbnRhaW5lci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgc2VsZi5tX2ZpbGVNZW51V3JhcCA9IHNlbGYuZG9tLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoc2VsZi5lbCwgJ21fZmlsZU1lbnVXcmFwJyk7XHJcblxyXG4gICAgICAgIHJvdXRlci5zdWJzY3JpYmUoZnVuY3Rpb24gKGN1cnJlbnRSb3V0ZSkge1xyXG4gICAgICAgICAgICBzZWxmLm1fcmVuZGVyZWRJdGVtcyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpdGVtIGluIHNlbGYubV9pdGVtcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYubV9pdGVtc1tpdGVtXVsnYXBwJ10gPT0gY3VycmVudFJvdXRlKVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYubV9yZW5kZXJlZEl0ZW1zLnB1c2goc2VsZi5tX2l0ZW1zW2l0ZW1dKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2VsZi5tX3JlbmRlcmVkSXRlbXMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeShzZWxmLm1fZmlsZU1lbnVXcmFwKS5mYWRlT3V0KCdzbG93JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vbm90aWZ5IG5nMiBvZiB0aGUgY2hhbmdlcyBzbyB3ZSBjb21wbHkgd2l0aCBjaGFuZ2Ugc3RyYXRlZ3lcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmRvbS5zZXRTdHlsZShzZWxmLmVsLCAnb3BhY2l0eScsICcwJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeShzZWxmLm1fZmlsZU1lbnVXcmFwKS5mYWRlSW4oJ3Nsb3cnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9ub3RpZnkgbmcyIG9mIHRoZSBjaGFuZ2VzIHNvIHdlIGNvbXBseSB3aXRoIGNoYW5nZSBzdHJhdGVneVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZG9tLnNldFN0eWxlKHNlbGYuZWwsICdvcGFjaXR5JywgJzEnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBhcHA6QXBwID0gc2VsZi5tX2NvbW1Ccm9rZXIuZ2V0U2VydmljZShDb25zdHMuU2VydmljZXMoKS5BcHApO1xyXG4gICAgICAgICAgICAgICAgYXBwLmFwcFJlc2l6ZWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGBSb3V0ZSAke2N1cnJlbnRSb3V0ZX1gKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KCcubmF2YmFyLW5hdicpLmNzcyh7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaydcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIC8vc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgIC8vICAgIHZhciBtZW51ID0gY29tbUJyb2tlci5nZXRTZXJ2aWNlKCkgYXMgTWVudTtcclxuICAgICAgICAvL30sNDAwMCk7XHJcblxyXG5cclxuICAgICAgICAvKioganVzdCBzb21lIGV4YW1wbGUgb2Ygd2hhdCBjYW4gYmUgZG9uZSB3aXRoIGRpcmVjdCBkb20gbWFuaXB1bGF0aW9uICoqL1xyXG4gICAgICAgIC8vdGhpcy5kb20ucmVtb3ZlQ2hpbGQodGhpcy5lbCwgYmFyKTtcclxuICAgICAgICAvL3RoaXMuYmFja2dyb3VuZCA9IHRoaXMuZG9tLmdldEF0dHJpYnV0ZSh0aGlzLmVsLCAnYmFja2dyb3VuZCcpIHx8ICcjMDAwMDAwJztcclxuICAgICAgICAvL3RoaXMub3BhY2l0eSA9IHRoaXMuZG9tLnNldEF0dHJpYnV0ZSh0aGlzLmVsLCAnYmFja2dyb3VuZCcsICdyZWQnKTtcclxuICAgICAgICAvL3RoaXMud2lkdGggPSB0aGlzLmRvbS5nZXRBdHRyaWJ1dGUodGhpcy5lbCwgJ3dpZHRoJykgfHwgJzdweCc7XHJcbiAgICAgICAgLy90aGlzLnBvc2l0aW9uID0gdGhpcy5kb20uZ2V0QXR0cmlidXRlKHRoaXMuZWwsICdwb3NpdGlvbicpIHx8ICdyaWdodCc7XHJcbiAgICAgICAgLy9qUXVlcnkoJy5uYXZpY29ucycpLnNob3coKTtcclxuICAgICAgICAvL2pRdWVyeShcIi5uYXZiYXItaGVhZGVyIC5uYXZiYXItdG9nZ2xlXCIpLnRyaWdnZXIoXCJjbGlja1wiKTtcclxuICAgIH1cclxuXHJcbiAgICAvL25nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIC8vICAgIExpYi5sb2coYEFwcFByZWZpeDogJHt0aGlzWydhcHBQcmVmaXgnXX1gKTtcclxuICAgIC8vICAgIGpRdWVyeSgnLmZsaXAnKS5tb3VzZWVudGVyKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICAgICBqUXVlcnkodGhpcykuZmluZCgnLmZsaXBjYXJkJykuYWRkQ2xhc3MoJ2ZsaXBwZWQnKS5tb3VzZWxlYXZlKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnJlbW92ZUNsYXNzKCdmbGlwcGVkJyk7XHJcbiAgICAvLyAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgLy8gICAgfSk7XHJcbiAgICAvL31cclxuXHJcbiAgICBwcml2YXRlIGxpc3Rlbk1lbnVTZWxlY3RlZChldmVudCkge1xyXG4gICAgICAgIHRoaXMubV9jb21tQnJva2VyLmZpcmUoe1xyXG4gICAgICAgICAgICBmcm9tSW5zdGFuY2U6IHNlbGYsXHJcbiAgICAgICAgICAgIGV2ZW50OiBDb25zdHMuRXZlbnRzKCkuTUVOVV9TRUxFQ1RJT04sXHJcbiAgICAgICAgICAgIGNvbnRleHQ6IG51bGwsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGV2ZW50LnRhcmdldC50ZXh0XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZEZpbGVNZW51SXRlbShpX2l0ZW06RmlsZW1lbnVJdGVtKTp2b2lkIHtcclxuICAgICAgICB0aGlzLm1faXRlbXMucHVzaChpX2l0ZW0pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
