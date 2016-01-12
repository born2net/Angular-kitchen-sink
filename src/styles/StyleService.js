System.register(["angular2/core", "../services/LocalStorage", "../models/StyleModel", "../services/CommBroker", "../Conts"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, LocalStorage_1, StyleModel_1, CommBroker_1, Conts_1;
    var StyleService;
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
            },
            function (CommBroker_1_1) {
                CommBroker_1 = CommBroker_1_1;
            },
            function (Conts_1_1) {
                Conts_1 = Conts_1_1;
            }],
        execute: function() {
            StyleService = (function () {
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
                                this.loadCss('style.css');
                                break;
                            }
                        case 'dark':
                            {
                                this.loadCss('style_dark.css');
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
                    this.loadCss('src/styles/material-design/css/bootstrap-material-design.css');
                    this.loadCss('src/styles/material-design/css/ripples.min.css');
                    var a = System.import('src/styles/material-design/js/material.min.js');
                    var b = System.import('src/styles/material-design/js/ripples.min.js');
                    Promise.all([a, b]).then(function (e) {
                        jQuery.material.init();
                    });
                };
                StyleService.prototype.loadCss = function (url) {
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
                StyleService.prototype.refreshTheme = function () {
                    if (this.model.selectedTheme != 'polymer')
                        return;
                    this.loadTheme('polymer');
                };
                StyleService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [CommBroker_1.CommBroker])
                ], StyleService);
                return StyleService;
            })();
            exports_1("StyleService", StyleService);
        }
    }
});
//# sourceMappingURL=StyleService.js.map