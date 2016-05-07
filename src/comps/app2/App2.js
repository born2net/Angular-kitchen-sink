"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
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
var http_1 = require("@angular/http");
var Logout_1 = require("../logout/Logout");
var Contact_1 = require("./contact/Contact");
var DividerPanel_1 = require("../dividerpanel/DividerPanel");
var ModalDialog_1 = require("../modaldialog/ModalDialog");
var Properties_1 = require("./properties/Properties");
var Weather_1 = require("./weather/Weather");
var App2 = (function () {
    function App2(commBroker) {
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
    App2.prototype.ngOnInit = function () {
        this.routerActive = true;
        this.commBroker.getService(Conts_1.Consts.Services().App).appResized();
    };
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
            directives: [router_1.ROUTER_DIRECTIVES, DividerPanel_1.DividerPanel, Menu_1.Menu, MenuItem_1.MenuItem, Sliderpanel_1.Sliderpanel, Digg_1.Digg, Properties_1.Properties,
                Weather_1.Weather, Logout_1.Logout, Contact_1.Contact, ModalDialog_1.ModalDialog, Notes_1.Notes, Notes1_1.Notes1, Notes2_1.Notes2, Notes3_1.Notes3, Notes4_1.Notes4, Notes5_1.Notes5, Contact_1.Contact, ModalDialog_1.ModalDialog]
        }), 
        __metadata('design:paramtypes', [CommBroker_1.CommBroker])
    ], App2);
    return App2;
}());
exports.App2 = App2;
//# sourceMappingURL=App2.js.map