System.register(["angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var StyleModel, Settings;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            StyleModel = (function () {
                function StyleModel(male) {
                    this.male = male;
                }
                return StyleModel;
            })();
            exports_1("StyleModel", StyleModel);
            Settings = (function () {
                function Settings() {
                    this.model = new StyleModel(true);
                }
                Settings.prototype.loadCss = function (url) {
                    var link = document.createElement("link");
                    link.type = "text/css";
                    link.rel = "stylesheet";
                    link.href = url;
                    document.getElementsByTagName("head")[0].appendChild(link);
                };
                Settings.prototype.onChange = function () {
                    var _this = this;
                    // push method to top of event queue as dropdown event occurs before model update
                    setTimeout(function () {
                        console.log(JSON.stringify(_this.model));
                        if (_this.model.male) {
                            _this.loadCss('style_dark.css');
                        }
                        else {
                            _this.loadCss('style.css');
                        }
                    }, 1);
                };
                Settings = __decorate([
                    core_1.Component({
                        selector: 'Settings',
                        template: "\n                <small>I am Settings component</small>\n                <hr/>\n                <h3>Choose your theme</h3>\n                <hr/>\n                  <div class=\"clearfix\" style=\"padding-bottom: 13px\">\n                  </div>\n                  <div style=\"position: relative; top: -12px\" class=\"material-switch pull-left\">\n                    <input id=\"changeStyle\" name=\"someSwitchOption003\" [(ngModel)]=\"model.male\" (change)=\"onChange($event)\" type=\"checkbox\"/>\n                    <label for=\"changeStyle\" class=\"label-primary\"></label>\n                  </div>\n                  <div class=\"clearfix\" style=\"padding-bottom: 13px\">\n                  <h1 style=\"color: gray\">{{model.male==true ? 'Lite' : 'Dark'}}</h1>\n                "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Settings);
                return Settings;
            })();
            exports_1("Settings", Settings);
        }
    }
});
//# sourceMappingURL=Settings.js.map