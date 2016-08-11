System.register(["@angular/core", "../../services/CommBroker", "../../../src/Conts"], function(exports_1, context_1) {
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
    var core_1, CommBroker_1, Conts_1;
    var App2;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (CommBroker_1_1) {
                CommBroker_1 = CommBroker_1_1;
            },
            function (Conts_1_1) {
                Conts_1 = Conts_1_1;
            }],
        execute: function() {
            App2 = (function () {
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
                        templateUrl: '/src/comps/app2/App2.html'
                    }), 
                    __metadata('design:paramtypes', [CommBroker_1.CommBroker])
                ], App2);
                return App2;
            }());
            exports_1("App2", App2);
        }
    }
});
//# sourceMappingURL=App2.js.map