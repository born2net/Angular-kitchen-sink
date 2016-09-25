System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var Minitab;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Minitab = (function () {
                function Minitab() {
                    this.active = false;
                }
                __decorate([
                    core_1.Input('tabTitle'), 
                    __metadata('design:type', String)
                ], Minitab.prototype, "title", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Minitab.prototype, "active", void 0);
                Minitab = __decorate([
                    core_1.Component({
                        selector: 'mini-tab',
                        styles: ["\n    .pane{\n      padding: 1em;\n    }\n  "],
                        template: "\n    <div [hidden]=\"!active\" class=\"pane\">\n      <ng-content></ng-content>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Minitab);
                return Minitab;
            }());
            exports_1("Minitab", Minitab);
        }
    }
});
