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
var RefreshTheme_1 = require("../../styles/RefreshTheme");
var App2 = (function (_super) {
    __extends(App2, _super);
    function App2(params, commBroker, Consts) {
        _super.call(this);
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
            template: require('./App2.html'),
            providers: [http_1.HTTP_PROVIDERS],
            directives: [router_1.ROUTER_DIRECTIVES, router_2.RouterLink, DividerPanel_1.DividerPanel, Menu_1.Menu, MenuItem_1.MenuItem, Sliderpanel_1.Sliderpanel, Digg_1.Digg, Properties_1.Properties,
                Notes_1.Notes, Notes1_1.Notes1, Notes2_1.Notes2, Notes3_1.Notes3, Notes4_1.Notes4, Notes5_1.Notes5, Weather_1.Weather, Logout_1.Logout, Contact_1.Contact, ModalDialog_1.ModalDialog]
        }), 
        __metadata('design:paramtypes', [router_2.RouteParams, CommBroker_1.CommBroker, Conts_1.Consts])
    ], App2);
    return App2;
})(RefreshTheme_1.RefreshTheme);
exports.App2 = App2;
//# sourceMappingURL=App2.js.map