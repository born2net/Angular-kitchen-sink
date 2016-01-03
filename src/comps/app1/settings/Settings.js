///<reference path="../../../../typings/app.d.ts"/>
System.register(["angular2/core", "../../../services/LocalStorage", "../../../models/StyleModel"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, LocalStorage_1, StyleModel_1;
    var Settings;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (LocalStorage_1_1) {
                LocalStorage_1 = LocalStorage_1_1;
            },
            function (StyleModel_1_1) {
                StyleModel_1 = StyleModel_1_1;
            }],
        execute: function() {
            Settings = (function () {
                function Settings(styleModel, localStorage) {
                    this.styleModel = styleModel;
                    this.localStorage = localStorage;
                    this.model = styleModel;
                    this.model.style = localStorage.getItem('style', false);
                    this.onChange();
                }
                Settings.prototype.loadCss = function (url) {
                    var link = document.createElement("link");
                    link.type = "text/css";
                    link.rel = "stylesheet";
                    link.href = url;
                    document.getElementsByTagName("head")[0].appendChild(link);
                };
                Settings.prototype.onChange = function () {
                    var self = this;
                    // push method to top of event queue as dropdown event occurs before model update
                    setTimeout(function () {
                        if (self.model.style) {
                            self.loadCss('style_dark.css');
                            self.localStorage.setItem('style', true);
                        }
                        else {
                            self.loadCss('style.css');
                            self.localStorage.setItem('style', false);
                        }
                    }, 1);
                };
                Settings = __decorate([
                    core_1.Component({
                        selector: 'Settings',
                        providers: [LocalStorage_1.LocalStorage, StyleModel_1.StyleModel],
                        template: "\n                <small>I am Settings component</small>\n                <hr/>\n                <h3>Choose your theme</h3>\n                <hr/>\n                  <div class=\"clearfix\" style=\"padding-bottom: 13px\">\n                  </div>\n                  <div style=\"position: relative; top: -12px\" class=\"material-switch pull-left\">\n                    <input id=\"changeStyle\" name=\"someSwitchOption003\" [(ngModel)]=\"model.style\"\n                     (change)=\"onChange($event)\" type=\"checkbox\"/>\n                    <label for=\"changeStyle\" class=\"label-primary\"></label>\n                  </div>\n                  <div class=\"clearfix\" style=\"padding-bottom: 13px\">\n                  <h1 style=\"color: gray\">{{model.style==false ? 'Dark' : 'Lite'}}</h1>\n                "
                    }), 
                    __metadata('design:paramtypes', [StyleModel_1.StyleModel, LocalStorage_1.LocalStorage])
                ], Settings);
                return Settings;
            })();
            exports_1("Settings", Settings);
        }
    }
});
//# sourceMappingURL=Settings.js.map