System.register(["@angular/core", "@angular/router", "../../services/CommBroker", "../../Conts", "@angular/platform-browser"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, router_1, CommBroker_1, Conts_1, platform_browser_1;
    var Filemenu;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (CommBroker_1_1) {
                CommBroker_1 = CommBroker_1_1;
            },
            function (Conts_1_1) {
                Conts_1 = Conts_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            }],
        execute: function() {
            Filemenu = (function () {
                function Filemenu(viewContainer, dom, router, activatedRoute, commBroker) {
                    this.dom = dom;
                    this.router = router;
                    this.activatedRoute = activatedRoute;
                    var self = this;
                    self.m_commBroker = commBroker;
                    self.m_items = [];
                    self.m_renderedItems = [];
                    self.viewContainer = viewContainer;
                    self.el = viewContainer.element.nativeElement;
                    self.m_fileMenuWrap = self.dom.getElementsByClassName(self.el, 'm_fileMenuWrap');
                    this.router.events.subscribe(function (navigationStart) {
                        return;
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
                        template: "\n        <div>\n             <div class=\"m_fileMenuWrap\">\n                <ul class=\"nav navbar-nav\" >\n                <li id=\"commonFileMenu\" class=\"hidden-lg\" dropdown>\n                  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Navigatior<b class=\"caret\"></b></a>\n                  <ul class=\"dropdown-menu\">\n                  <li class=\"divider\"></li>\n                    <li *ngFor=\"let item of m_renderedItems\" (click)=\"listenMenuSelected($event)\">\n                       <a href=\"#\">{{item.title}}</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                  </ul>\n                </li>\n              </ul>\n            </div>\n        </div>\n    "
                    }),
                    __param(1, core_1.Inject(platform_browser_1.DOCUMENT)), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _a) || Object, Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, (typeof (_c = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _c) || Object, CommBroker_1.CommBroker])
                ], Filemenu);
                return Filemenu;
                var _a, _b, _c;
            }());
            exports_1("Filemenu", Filemenu);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2ZpbGVtZW51L0ZpbGVtZW51LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMENBO2dCQVFJLGtCQUFZLGFBQStCLEVBQTRCLEdBQUcsRUFBVSxNQUFjLEVBQVUsY0FBOEIsRUFBRSxVQUFzQjtvQkFBM0YsUUFBRyxHQUFILEdBQUcsQ0FBQTtvQkFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO29CQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtvQkFDdEksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNoQixJQUFJLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQztvQkFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO29CQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztvQkFDbkMsSUFBSSxDQUFDLEVBQUUsR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztvQkFDOUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztvQkFFakYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsZUFBZ0M7d0JBQzFELE1BQU0sQ0FBQztvQkFzQlgsQ0FBQyxDQUFDLENBQUE7b0JBdUNGLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUM7d0JBQ3RCLE9BQU8sRUFBRSxPQUFPO3FCQUNuQixDQUFDLENBQUM7Z0JBZ0JQLENBQUM7Z0JBWU8scUNBQWtCLEdBQTFCLFVBQTJCLEtBQUs7b0JBQzVCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO3dCQUNuQixZQUFZLEVBQUUsSUFBSTt3QkFDbEIsS0FBSyxFQUFFLGNBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxjQUFjO3dCQUNyQyxPQUFPLEVBQUUsSUFBSTt3QkFDYixPQUFPLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJO3FCQUM3QixDQUFDLENBQUM7b0JBQ0gsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN2QixNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNqQixDQUFDO2dCQUVNLGtDQUFlLEdBQXRCLFVBQXVCLE1BQW9CO29CQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUIsQ0FBQztnQkFoSkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsVUFBVTt3QkFDcEIsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDO3dCQUNyQixRQUFRLEVBQUUsNHVCQWlCVDtxQkFDSixDQUFDOytCQVNnRCxhQUFNLENBQUMsMkJBQVEsQ0FBQzs7NEJBVGhFO2dCQTRIRixlQUFDOztZQUFELENBM0hBLEFBMkhDLElBQUE7WUEzSEQsK0JBMkhDLENBQUEiLCJmaWxlIjoiY29tcHMvZmlsZW1lbnUvRmlsZW1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgVmlld0NvbnRhaW5lclJlZixcclxuICAgIEluamVjdFxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7RmlsZW1lbnVJdGVtfSBmcm9tIFwiLi9GaWxlbWVudUl0ZW1cIjtcclxuaW1wb3J0IHtcclxuICAgIFJvdXRlcixcclxuICAgIEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgTmF2aWdhdGlvblN0YXJ0XHJcbn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge0NvbW1Ccm9rZXJ9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9Db21tQnJva2VyXCI7XHJcbmltcG9ydCB7Q29uc3RzfSBmcm9tIFwiLi4vLi4vQ29udHNcIjtcclxuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuXHJcbi8qKlxyXG4gRmlsZW1lbnUgbWFuYWdlcyB0aGUgdG9wIGhlYWRlciBmaWxlIG1lbnUgcGVyIGFwcGxpY2F0aW9uIGFzIGl0IG11dGF0ZXMgaXQncyBjb250ZW50IGRlcGVuZGluZ1xyXG4gb24gd2hpY2ggQXBwIGhhcyBsb2FkZWRcclxuIEBjbGFzcyBGaWxlbWVudVxyXG4gKiovXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdGaWxlbWVudScsXHJcbiAgICBpbnB1dHM6IFsnYXBwUHJlZml4J10sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibV9maWxlTWVudVdyYXBcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXZiYXItbmF2XCIgPlxyXG4gICAgICAgICAgICAgICAgPGxpIGlkPVwiY29tbW9uRmlsZU1lbnVcIiBjbGFzcz1cImhpZGRlbi1sZ1wiIGRyb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPk5hdmlnYXRpb3I8YiBjbGFzcz1cImNhcmV0XCI+PC9iPjwvYT5cclxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJkaXZpZGVyXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgbV9yZW5kZXJlZEl0ZW1zXCIgKGNsaWNrKT1cImxpc3Rlbk1lbnVTZWxlY3RlZCgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj57e2l0ZW0udGl0bGV9fTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEZpbGVtZW51IHtcclxuICAgIHByaXZhdGUgbV9pdGVtczogRmlsZW1lbnVJdGVtW107XHJcbiAgICBwcml2YXRlIG1fcmVuZGVyZWRJdGVtczogYW55W107XHJcbiAgICBwcml2YXRlIG1fZmlsZU1lbnVXcmFwOiBhbnk7XHJcbiAgICBwcml2YXRlIG1fY29tbUJyb2tlcjogQ29tbUJyb2tlcjtcclxuICAgIHByaXZhdGUgZWw6IGFueTtcclxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLCBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvbSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsIGNvbW1Ccm9rZXI6IENvbW1Ccm9rZXIpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgc2VsZi5tX2NvbW1Ccm9rZXIgPSBjb21tQnJva2VyO1xyXG4gICAgICAgIHNlbGYubV9pdGVtcyA9IFtdO1xyXG4gICAgICAgIHNlbGYubV9yZW5kZXJlZEl0ZW1zID0gW107XHJcbiAgICAgICAgc2VsZi52aWV3Q29udGFpbmVyID0gdmlld0NvbnRhaW5lcjtcclxuICAgICAgICBzZWxmLmVsID0gdmlld0NvbnRhaW5lci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgc2VsZi5tX2ZpbGVNZW51V3JhcCA9IHNlbGYuZG9tLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoc2VsZi5lbCwgJ21fZmlsZU1lbnVXcmFwJyk7XHJcblxyXG4gICAgICAgIHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoKG5hdmlnYXRpb25TdGFydDogTmF2aWdhdGlvblN0YXJ0KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gdmFyIGN1cnJlbnRSb3V0ZTpzdHJpbmcgPSB0aGlzLnJvdXRlci5zZXJpYWxpemVVcmwobmF2aWdhdGlvblN0YXJ0LnVybCk7XHJcbiAgICAgICAgICAgIC8vIGN1cnJlbnRSb3V0ZSA9IGN1cnJlbnRSb3V0ZS5yZXBsYWNlKC9cXC8vLCcnKTtcclxuICAgICAgICAgICAgLy8gc2VsZi5tX3JlbmRlcmVkSXRlbXMgPSBbXTtcclxuICAgICAgICAgICAgLy8gZm9yICh2YXIgaXRlbSBpbiBzZWxmLm1faXRlbXMpIHtcclxuICAgICAgICAgICAgLy8gICAgIGlmIChzZWxmLm1faXRlbXNbaXRlbV1bJ2FwcCddID09IGN1cnJlbnRSb3V0ZSlcclxuICAgICAgICAgICAgLy8gICAgICAgICBzZWxmLm1fcmVuZGVyZWRJdGVtcy5wdXNoKHNlbGYubV9pdGVtc1tpdGVtXSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gaWYgKHNlbGYubV9yZW5kZXJlZEl0ZW1zLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBqUXVlcnkoc2VsZi5tX2ZpbGVNZW51V3JhcCkuZmFkZU91dCgnc2xvdycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAvL25vdGlmeSBuZzIgb2YgdGhlIGNoYW5nZXMgc28gd2UgY29tcGx5IHdpdGggY2hhbmdlIHN0cmF0ZWd5XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgc2VsZi5kb20uc2V0U3R5bGUoc2VsZi5lbCwgJ29wYWNpdHknLCAnMCcpO1xyXG4gICAgICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vICAgICBqUXVlcnkoc2VsZi5tX2ZpbGVNZW51V3JhcCkuZmFkZUluKCdzbG93JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIC8vbm90aWZ5IG5nMiBvZiB0aGUgY2hhbmdlcyBzbyB3ZSBjb21wbHkgd2l0aCBjaGFuZ2Ugc3RyYXRlZ3lcclxuICAgICAgICAgICAgLy8gICAgICAgICBzZWxmLmRvbS5zZXRTdHlsZShzZWxmLmVsLCAnb3BhY2l0eScsICcxJyk7XHJcbiAgICAgICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gICAgIGxldCBhcHA6QXBwID0gc2VsZi5tX2NvbW1Ccm9rZXIuZ2V0U2VydmljZShDb25zdHMuU2VydmljZXMoKS5BcHApO1xyXG4gICAgICAgICAgICAvLyAgICAgYXBwLmFwcFJlc2l6ZWQoKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAvLyBjb25zdCB0ZWFtQWN0aXZhdGVkUm91dGUgPSByb3V0ZXIucm91dGVyU3RhdGUoYWN0aXZlUm91dGUpO1xyXG4gICAgICAgIC8vIHZhciB0ZWFtSWQgPSB0ZWFtQWN0aXZhdGVkUm91dGUucGFyYW1zLm1hcChyID0+IHIuaWQpO1xyXG5cclxuICAgICAgICAvLyB2YXIgc3ViID0gdGhpcy5hY3RpdmVSb3V0ZVxyXG4gICAgICAgIC8vICAgICAucGFyYW1zXHJcbiAgICAgICAgLy8gICAgIC5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBpZCA9ICtwYXJhbXNbJ2lkJ107XHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIC8vIHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoKHVybFRyZWU6VXJsVHJlZSk9PntcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2codXJsVHJlZSk7XHJcbiAgICAgICAgLy8gfSlcclxuXHJcbiAgICAgICAgLy8gcm91dGVyLmNoYW5nZXMuc3Vic2NyaWJlKGZ1bmN0aW9uIChjdXJyZW50Um91dGUpIHtcclxuICAgICAgICAvLyAvL3JvdXRlci5zdWJzY3JpYmUoZnVuY3Rpb24gKGN1cnJlbnRSb3V0ZSkge1xyXG4gICAgICAgIC8vICAgICBzZWxmLm1fcmVuZGVyZWRJdGVtcyA9IFtdO1xyXG4gICAgICAgIC8vICAgICBmb3IgKHZhciBpdGVtIGluIHNlbGYubV9pdGVtcykge1xyXG4gICAgICAgIC8vICAgICAgICAgaWYgKHNlbGYubV9pdGVtc1tpdGVtXVsnYXBwJ10gPT0gY3VycmVudFJvdXRlKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHNlbGYubV9yZW5kZXJlZEl0ZW1zLnB1c2goc2VsZi5tX2l0ZW1zW2l0ZW1dKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBpZiAoc2VsZi5tX3JlbmRlcmVkSXRlbXMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAvLyAgICAgICAgIGpRdWVyeShzZWxmLm1fZmlsZU1lbnVXcmFwKS5mYWRlT3V0KCdzbG93JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vbm90aWZ5IG5nMiBvZiB0aGUgY2hhbmdlcyBzbyB3ZSBjb21wbHkgd2l0aCBjaGFuZ2Ugc3RyYXRlZ3lcclxuICAgICAgICAvLyAgICAgICAgICAgICBzZWxmLmRvbS5zZXRTdHlsZShzZWxmLmVsLCAnb3BhY2l0eScsICcwJyk7XHJcbiAgICAgICAgLy8gICAgICAgICB9KTtcclxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgIGpRdWVyeShzZWxmLm1fZmlsZU1lbnVXcmFwKS5mYWRlSW4oJ3Nsb3cnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy9ub3RpZnkgbmcyIG9mIHRoZSBjaGFuZ2VzIHNvIHdlIGNvbXBseSB3aXRoIGNoYW5nZSBzdHJhdGVneVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHNlbGYuZG9tLnNldFN0eWxlKHNlbGYuZWwsICdvcGFjaXR5JywgJzEnKTtcclxuICAgICAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgYXBwOkFwcCA9IHNlbGYubV9jb21tQnJva2VyLmdldFNlcnZpY2UoQ29uc3RzLlNlcnZpY2VzKCkuQXBwKTtcclxuICAgICAgICAvLyAgICAgICAgIGFwcC5hcHBSZXNpemVkKCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgLy9jb25zb2xlLmxvZyhgUm91dGUgJHtjdXJyZW50Um91dGV9YCk7XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIGpRdWVyeSgnLm5hdmJhci1uYXYnKS5jc3Moe1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAvL3NldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAvLyAgICB2YXIgbWVudSA9IGNvbW1Ccm9rZXIuZ2V0U2VydmljZSgpIGFzIE1lbnU7XHJcbiAgICAgICAgLy99LDQwMDApO1xyXG5cclxuXHJcbiAgICAgICAgLyoqIGp1c3Qgc29tZSBleGFtcGxlIG9mIHdoYXQgY2FuIGJlIGRvbmUgd2l0aCBkaXJlY3QgZG9tIG1hbmlwdWxhdGlvbiAqKi9cclxuICAgICAgICAvL3RoaXMuZG9tLnJlbW92ZUNoaWxkKHRoaXMuZWwsIGJhcik7XHJcbiAgICAgICAgLy90aGlzLmJhY2tncm91bmQgPSB0aGlzLmRvbS5nZXRBdHRyaWJ1dGUodGhpcy5lbCwgJ2JhY2tncm91bmQnKSB8fCAnIzAwMDAwMCc7XHJcbiAgICAgICAgLy90aGlzLm9wYWNpdHkgPSB0aGlzLmRvbS5zZXRBdHRyaWJ1dGUodGhpcy5lbCwgJ2JhY2tncm91bmQnLCAncmVkJyk7XHJcbiAgICAgICAgLy90aGlzLndpZHRoID0gdGhpcy5kb20uZ2V0QXR0cmlidXRlKHRoaXMuZWwsICd3aWR0aCcpIHx8ICc3cHgnO1xyXG4gICAgICAgIC8vdGhpcy5wb3NpdGlvbiA9IHRoaXMuZG9tLmdldEF0dHJpYnV0ZSh0aGlzLmVsLCAncG9zaXRpb24nKSB8fCAncmlnaHQnO1xyXG4gICAgICAgIC8valF1ZXJ5KCcubmF2aWNvbnMnKS5zaG93KCk7XHJcbiAgICAgICAgLy9qUXVlcnkoXCIubmF2YmFyLWhlYWRlciAubmF2YmFyLXRvZ2dsZVwiKS50cmlnZ2VyKFwiY2xpY2tcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy9uZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAvLyAgICBMaWIubG9nKGBBcHBQcmVmaXg6ICR7dGhpc1snYXBwUHJlZml4J119YCk7XHJcbiAgICAvLyAgICBqUXVlcnkoJy5mbGlwJykubW91c2VlbnRlcihmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgICAgalF1ZXJ5KHRoaXMpLmZpbmQoJy5mbGlwY2FyZCcpLmFkZENsYXNzKCdmbGlwcGVkJykubW91c2VsZWF2ZShmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5yZW1vdmVDbGFzcygnZmxpcHBlZCcpO1xyXG4gICAgLy8gICAgICAgIH0pO1xyXG4gICAgLy8gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIC8vICAgIH0pO1xyXG4gICAgLy99XHJcblxyXG4gICAgcHJpdmF0ZSBsaXN0ZW5NZW51U2VsZWN0ZWQoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLm1fY29tbUJyb2tlci5maXJlKHtcclxuICAgICAgICAgICAgZnJvbUluc3RhbmNlOiBzZWxmLFxyXG4gICAgICAgICAgICBldmVudDogQ29uc3RzLkV2ZW50cygpLk1FTlVfU0VMRUNUSU9OLFxyXG4gICAgICAgICAgICBjb250ZXh0OiBudWxsLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBldmVudC50YXJnZXQudGV4dFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRGaWxlTWVudUl0ZW0oaV9pdGVtOiBGaWxlbWVudUl0ZW0pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1faXRlbXMucHVzaChpX2l0ZW0pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
