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
var router_1 = require('angular2/router');
var router_2 = require('angular2/router');
var MenuItem_1 = require("../sidemenu/MenuItem");
var Menu_1 = require("../sidemenu/Menu");
var CommBroker_1 = require("../../services/CommBroker");
var Conts_1 = require("../../../src/Conts");
var Sliderpanel_1 = require("../sliderpanel/Sliderpanel");
var Notes_1 = require("./notes/Notes");
var Notes1_1 = require("./notes/Notes1");
var Notes2_1 = require("./notes/Notes2");
var Notes3_1 = require("./notes/Notes3");
var Notes4_1 = require("./notes/Notes4");
var Notes5_1 = require("./notes/Notes5");
var Digg_1 = require("../digg/Digg");
var http_1 = require("angular2/http");
var Logout_1 = require("../logout/Logout");
var Contact_1 = require("./contact/Contact");
var DividerPanel_1 = require("../dividerpanel/DividerPanel");
var ModalDialog_1 = require("../modaldialog/ModalDialog");
var Properties_1 = require("./properties/Properties");
var Weather_1 = require("./weather/Weather");
var App2 = (function () {
    function App2(params, commBroker, Consts) {
        var self = this;
        jQuery(".navbar-header .navbar-toggle").trigger("click");
        jQuery('.navbar-nav').css({
            display: 'block'
        });
        self.commBroker = commBroker;
        self.screens = {
            notes: true,
            weather: false,
            digg: false,
            contact: false,
            logout: false
        };
        self.listenMenuChanges();
    }
    App2.prototype.listenMenuChanges = function () {
        var self = this;
        self.commBroker.onEvent(Conts_1.Consts.Events().MENU_SELECTION).subscribe(function (e) {
            var screen = (e.message).toLowerCase();
            if (!self.screens.hasOwnProperty(screen))
                return;
            for (var screen_1 in self.screens)
                self.screens[screen_1] = false;
            self.screens[screen] = true;
        });
    };
    App2 = __decorate([
        core_1.Component({
            templateUrl: '/src/comps/app2/App2.html',
            providers: [http_1.HTTP_PROVIDERS],
            directives: [router_1.ROUTER_DIRECTIVES, router_2.RouterLink, DividerPanel_1.DividerPanel, Menu_1.Menu, MenuItem_1.MenuItem, Sliderpanel_1.Sliderpanel, Digg_1.Digg, Properties_1.Properties,
                Notes_1.Notes, Notes1_1.Notes1, Notes2_1.Notes2, Notes3_1.Notes3, Notes4_1.Notes4, Notes5_1.Notes5, Weather_1.Weather, Logout_1.Logout, Contact_1.Contact, ModalDialog_1.ModalDialog]
        }), 
        __metadata('design:paramtypes', [router_2.RouteParams, CommBroker_1.CommBroker, Conts_1.Consts])
    ], App2);
    return App2;
})();
exports.App2 = App2;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDIvYXBwMi50cyJdLCJuYW1lcyI6WyJBcHAyIiwiQXBwMi5jb25zdHJ1Y3RvciIsIkFwcDIubGlzdGVuTWVudUNoYW5nZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUV4Qyx1QkFBZ0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNsRCx1QkFBc0MsaUJBQWlCLENBQUMsQ0FBQTtBQUN4RCx5QkFBdUIsc0JBQXNCLENBQUMsQ0FBQTtBQUM5QyxxQkFBbUIsa0JBQWtCLENBQUMsQ0FBQTtBQUN0QywyQkFBeUIsMkJBQTJCLENBQUMsQ0FBQTtBQUNyRCxzQkFBcUIsb0JBQW9CLENBQUMsQ0FBQTtBQUUxQyw0QkFBMEIsNEJBQTRCLENBQUMsQ0FBQTtBQUN2RCxzQkFBb0IsZUFBZSxDQUFDLENBQUE7QUFDcEMsdUJBQXFCLGdCQUFnQixDQUFDLENBQUE7QUFDdEMsdUJBQXFCLGdCQUFnQixDQUFDLENBQUE7QUFDdEMsdUJBQXFCLGdCQUFnQixDQUFDLENBQUE7QUFDdEMsdUJBQXFCLGdCQUFnQixDQUFDLENBQUE7QUFDdEMsdUJBQXFCLGdCQUFnQixDQUFDLENBQUE7QUFDdEMscUJBQW1CLGNBQWMsQ0FBQyxDQUFBO0FBQ2xDLHFCQUE2QixlQUFlLENBQUMsQ0FBQTtBQUM3Qyx1QkFBcUIsa0JBQWtCLENBQUMsQ0FBQTtBQUN4Qyx3QkFBc0IsbUJBQW1CLENBQUMsQ0FBQTtBQUMxQyw2QkFBMkIsOEJBQThCLENBQUMsQ0FBQTtBQUMxRCw0QkFBMEIsNEJBQTRCLENBQUMsQ0FBQTtBQUN2RCwyQkFBeUIseUJBQXlCLENBQUMsQ0FBQTtBQUNuRCx3QkFBc0IsbUJBQW1CLENBQUMsQ0FBQTtBQUsxQztJQVVJQSxjQUFZQSxNQUFrQkEsRUFBRUEsVUFBcUJBLEVBQUVBLE1BQWFBO1FBQ2hFQyxJQUFJQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUNoQkEsTUFBTUEsQ0FBQ0EsK0JBQStCQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtRQUN6REEsTUFBTUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0E7WUFDdEJBLE9BQU9BLEVBQUVBLE9BQU9BO1NBQ25CQSxDQUFDQSxDQUFDQTtRQUVIQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxVQUFVQSxDQUFDQTtRQUM3QkEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0E7WUFDWEEsS0FBS0EsRUFBRUEsSUFBSUE7WUFDWEEsT0FBT0EsRUFBRUEsS0FBS0E7WUFDZEEsSUFBSUEsRUFBRUEsS0FBS0E7WUFDWEEsT0FBT0EsRUFBRUEsS0FBS0E7WUFDZEEsTUFBTUEsRUFBRUEsS0FBS0E7U0FDaEJBLENBQUNBO1FBQ0ZBLElBQUlBLENBQUNBLGlCQUFpQkEsRUFBRUEsQ0FBQ0E7SUFDN0JBLENBQUNBO0lBRU9ELGdDQUFpQkEsR0FBekJBO1FBQ0lFLElBQUlBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1FBQ2hCQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxPQUFPQSxDQUFDQSxjQUFNQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxjQUFjQSxDQUFDQSxDQUFDQSxTQUFTQSxDQUFDQSxVQUFDQSxDQUFVQTtZQUN6RUEsSUFBSUEsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0E7WUFDdkNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLGNBQWNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO2dCQUNyQ0EsTUFBTUEsQ0FBQ0E7WUFDWEEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsUUFBTUEsSUFBSUEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7Z0JBQzVCQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxRQUFNQSxDQUFDQSxHQUFHQSxLQUFLQSxDQUFDQTtZQUNqQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDaENBLENBQUNBLENBQUNBLENBQUNBO0lBQ1BBLENBQUNBO0lBdENMRjtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDUEEsV0FBV0EsRUFBRUEsMkJBQTJCQTtZQUN4Q0EsU0FBU0EsRUFBRUEsQ0FBQ0EscUJBQWNBLENBQUNBO1lBQzNCQSxVQUFVQSxFQUFFQSxDQUFDQSwwQkFBaUJBLEVBQUVBLG1CQUFVQSxFQUFFQSwyQkFBWUEsRUFBRUEsV0FBSUEsRUFBRUEsbUJBQVFBLEVBQUVBLHlCQUFXQSxFQUFFQSxXQUFJQSxFQUFFQSx1QkFBVUE7Z0JBQ25HQSxhQUFLQSxFQUFFQSxlQUFNQSxFQUFFQSxlQUFNQSxFQUFFQSxlQUFNQSxFQUFFQSxlQUFNQSxFQUFFQSxlQUFNQSxFQUFFQSxpQkFBT0EsRUFBRUEsZUFBTUEsRUFBRUEsaUJBQU9BLEVBQUVBLHlCQUFXQSxDQUFDQTtTQUM1RkEsQ0FBQ0E7O2FBa0NEQTtJQUFEQSxXQUFDQTtBQUFEQSxDQXZDQSxBQXVDQ0EsSUFBQTtBQWpDWSxZQUFJLE9BaUNoQixDQUFBIiwiZmlsZSI6ImNvbXBzL2FwcDIvQXBwMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvanF1ZXJ5L2pxdWVyeS5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtIdHRwfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtSb3V0ZXJMaW5rLCBSb3V0ZVBhcmFtc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtNZW51SXRlbX0gZnJvbSBcIi4uL3NpZGVtZW51L01lbnVJdGVtXCI7XHJcbmltcG9ydCB7TWVudX0gZnJvbSBcIi4uL3NpZGVtZW51L01lbnVcIjtcclxuaW1wb3J0IHtDb21tQnJva2VyfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvQ29tbUJyb2tlclwiO1xyXG5pbXBvcnQge0NvbnN0c30gZnJvbSBcIi4uLy4uLy4uL3NyYy9Db250c1wiO1xyXG5pbXBvcnQge0lNZXNzYWdlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvQ29tbUJyb2tlclwiO1xyXG5pbXBvcnQge1NsaWRlcnBhbmVsfSBmcm9tIFwiLi4vc2xpZGVycGFuZWwvU2xpZGVycGFuZWxcIjtcclxuaW1wb3J0IHtOb3Rlc30gZnJvbSBcIi4vbm90ZXMvTm90ZXNcIjtcclxuaW1wb3J0IHtOb3RlczF9IGZyb20gXCIuL25vdGVzL05vdGVzMVwiO1xyXG5pbXBvcnQge05vdGVzMn0gZnJvbSBcIi4vbm90ZXMvTm90ZXMyXCI7XHJcbmltcG9ydCB7Tm90ZXMzfSBmcm9tIFwiLi9ub3Rlcy9Ob3RlczNcIjtcclxuaW1wb3J0IHtOb3RlczR9IGZyb20gXCIuL25vdGVzL05vdGVzNFwiO1xyXG5pbXBvcnQge05vdGVzNX0gZnJvbSBcIi4vbm90ZXMvTm90ZXM1XCI7XHJcbmltcG9ydCB7RGlnZ30gZnJvbSBcIi4uL2RpZ2cvRGlnZ1wiO1xyXG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiO1xyXG5pbXBvcnQge0xvZ291dH0gZnJvbSBcIi4uL2xvZ291dC9Mb2dvdXRcIjtcclxuaW1wb3J0IHtDb250YWN0fSBmcm9tIFwiLi9jb250YWN0L0NvbnRhY3RcIjtcclxuaW1wb3J0IHtEaXZpZGVyUGFuZWx9IGZyb20gXCIuLi9kaXZpZGVycGFuZWwvRGl2aWRlclBhbmVsXCI7XHJcbmltcG9ydCB7TW9kYWxEaWFsb2d9IGZyb20gXCIuLi9tb2RhbGRpYWxvZy9Nb2RhbERpYWxvZ1wiO1xyXG5pbXBvcnQge1Byb3BlcnRpZXN9IGZyb20gXCIuL3Byb3BlcnRpZXMvUHJvcGVydGllc1wiO1xyXG5pbXBvcnQge1dlYXRoZXJ9IGZyb20gXCIuL3dlYXRoZXIvV2VhdGhlclwiO1xyXG5cclxuLyoqXHJcbiBBcHBsaWNhdGlvbiAyIGxhenkgbG9hZGVkXHJcbiAqKi9cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogJy9zcmMvY29tcHMvYXBwMi9BcHAyLmh0bWwnLFxyXG4gICAgcHJvdmlkZXJzOiBbSFRUUF9QUk9WSURFUlNdLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXJMaW5rLCBEaXZpZGVyUGFuZWwsIE1lbnUsIE1lbnVJdGVtLCBTbGlkZXJwYW5lbCwgRGlnZywgUHJvcGVydGllcyxcclxuICAgICAgICBOb3RlcywgTm90ZXMxLCBOb3RlczIsIE5vdGVzMywgTm90ZXM0LCBOb3RlczUsIFdlYXRoZXIsIExvZ291dCwgQ29udGFjdCwgTW9kYWxEaWFsb2ddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHAyIHtcclxuICAgIHByaXZhdGUgc2NyZWVuczphbnk7XHJcbiAgICBwcml2YXRlIGNvbW1Ccm9rZXI6Q29tbUJyb2tlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6Um91dGVQYXJhbXMsIGNvbW1Ccm9rZXI6Q29tbUJyb2tlciwgQ29uc3RzOkNvbnN0cykge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBqUXVlcnkoXCIubmF2YmFyLWhlYWRlciAubmF2YmFyLXRvZ2dsZVwiKS50cmlnZ2VyKFwiY2xpY2tcIik7XHJcbiAgICAgICAgalF1ZXJ5KCcubmF2YmFyLW5hdicpLmNzcyh7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaydcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2VsZi5jb21tQnJva2VyID0gY29tbUJyb2tlcjtcclxuICAgICAgICBzZWxmLnNjcmVlbnMgPSB7XHJcbiAgICAgICAgICAgIG5vdGVzOiB0cnVlLFxyXG4gICAgICAgICAgICB3ZWF0aGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgZGlnZzogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbnRhY3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICBsb2dvdXQ6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZWxmLmxpc3Rlbk1lbnVDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsaXN0ZW5NZW51Q2hhbmdlcygpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgc2VsZi5jb21tQnJva2VyLm9uRXZlbnQoQ29uc3RzLkV2ZW50cygpLk1FTlVfU0VMRUNUSU9OKS5zdWJzY3JpYmUoKGU6SU1lc3NhZ2UpPT4ge1xyXG4gICAgICAgICAgICB2YXIgc2NyZWVuID0gKGUubWVzc2FnZSkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgaWYgKCFzZWxmLnNjcmVlbnMuaGFzT3duUHJvcGVydHkoc2NyZWVuKSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgZm9yIChsZXQgc2NyZWVuIGluIHNlbGYuc2NyZWVucylcclxuICAgICAgICAgICAgICAgIHNlbGYuc2NyZWVuc1tzY3JlZW5dID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHNlbGYuc2NyZWVuc1tzY3JlZW5dID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
