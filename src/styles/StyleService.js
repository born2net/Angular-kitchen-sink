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
var core_1 = require("angular2/core");
var LocalStorage_1 = require("../services/LocalStorage");
var StyleModel_1 = require("../models/StyleModel");
var CommBroker_1 = require("../services/CommBroker");
var Conts_1 = require("../Conts");
var StyleService = (function () {
    function StyleService(commBroker) {
        this.commBroker = commBroker;
        this.model = new StyleModel_1.StyleModel();
        this.localStorage = new LocalStorage_1.LocalStorage();
        this.commBroker.setService(Conts_1.Consts.Services().StyleService, this);
        var styleData = this.localStorage.getItem('style_data', {
            theme: 'lite',
            remember: true
        });
        this.model.remember = styleData.remember;
        this.model.theme = styleData.theme;
        if (this.model.remember == false)
            return;
        this.loadTheme(this.model.theme);
    }
    StyleService.prototype.loadTheme = function (styleName) {
        this.model.selectedTheme = styleName;
        switch (styleName) {
            case 'lite':
                {
                    this.loadCss('../styles/style.css');
                    break;
                }
            case 'dark':
                {
                    this.loadCss('../styles/style_dark.css');
                    break;
                }
            case 'polymer':
                {
                    this.loadMaterial();
                    break;
                }
        }
    };
    StyleService.prototype.loadMaterial = function () {
    };
    StyleService.prototype.loadCss = function (url) {
        if (url.indexOf('_') == -1)
            return;
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.className = 'customStyles';
        link.href = url;
        document.getElementsByTagName("head")[0].appendChild(link);
    };
    StyleService.prototype.onUpdate = function () {
        var _this = this;
        var self = this;
        setTimeout(function (e) {
            self.localStorage.setItem('style_data', {
                theme: self.model.theme,
                remember: self.model.remember
            });
            _this.loadTheme(self.model.theme);
            if (self.model.remember)
                bootbox.alert('reload the application to see the full effect of the theme...');
        }, 10);
    };
    Object.defineProperty(StyleService.prototype, "model", {
        get: function () {
            return this.styleModel;
        },
        set: function (styleModel) {
            this.styleModel = styleModel;
        },
        enumerable: true,
        configurable: true
    });
    StyleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [CommBroker_1.CommBroker])
    ], StyleService);
    return StyleService;
}());
exports.StyleService = StyleService;
//# sourceMappingURL=StyleService.js.map