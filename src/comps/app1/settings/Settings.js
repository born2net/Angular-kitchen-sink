///<reference path="../../../../typings/app.d.ts"/>
System.register(["angular2/core", "../../../models/StyleModel", "../../../styles/StyleService"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, StyleModel_1, StyleService_1;
    var Settings;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (StyleModel_1_1) {
                StyleModel_1 = StyleModel_1_1;
            },
            function (StyleService_1_1) {
                StyleService_1 = StyleService_1_1;
            }],
        execute: function() {
            Settings = (function () {
                function Settings(styleService) {
                    this.styleService = styleService;
                }
                Settings = __decorate([
                    core_1.Component({
                        selector: 'Settings',
                        providers: [StyleModel_1.StyleModel],
                        template: "\n                <small>I am Settings component</small>\n                <hr/>\n                <h3>Choose your theme</h3>\n                <hr/>\n                  <div class=\"clearfix\" style=\"padding-bottom: 13px\">\n                  </div>\n                  <select class=\"form-control\"\n                    [(ngModel)]=\"styleService.model.theme\"\n                    (change)=\"styleService.model.theme=$event.value; styleService.onUpdate()\">\n                      <option *ngFor=\"#theme of styleService.model.themes\">{{theme}}</option>\n                  </select>\n                  <hr/>\n                  <div style=\"position: relative; top: -12px\" class=\"material-switch pull-left\">\n                    <input id=\"changeStyle\" name=\"someSwitchOption003\"\n                     [(ngModel)]=\"styleService.model.remember\"\n                     (change)=\"styleService.onUpdate()\" type=\"checkbox\"/>\n                    <label for=\"changeStyle\" class=\"label-primary\"></label>\n                  </div>\n                  <div class=\"clearfix\" style=\"padding-bottom: 13px\">\n                  <h1 style=\"color: gray\">{{styleService.model.remember == true ? 'On' : 'Off'}}</h1>\n                "
                    }), 
                    __metadata('design:paramtypes', [StyleService_1.StyleService])
                ], Settings);
                return Settings;
            })();
            exports_1("Settings", Settings);
        }
    }
});
//# sourceMappingURL=Settings.js.map