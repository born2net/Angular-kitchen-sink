System.register(['@angular/core', "../../../src/comps/digg/DiggLoader", 'rxjs/add/observable/from', 'rxjs/add/operator/do', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/distinctUntilChanged'], function(exports_1, context_1) {
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
    var core_1, DiggLoader_1;
    var Digg;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (DiggLoader_1_1) {
                DiggLoader_1 = DiggLoader_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {}],
        execute: function() {
            Digg = (function () {
                function Digg() {
                }
                Digg = __decorate([
                    core_1.Component({
                        selector: 'Digg',
                        inputs: ['mode:mode'],
                        encapsulation: core_1.ViewEncapsulation.Emulated,
                        providers: [DiggLoader_1.DiggLoader],
                        styles: ["\n        .diggContainer {\n            overflow-y: scroll;\n            height: 300px;\n        };\n        .largeImage {\n           max-width: 100px;\n           max-height: 60px;\n        }\n        .smallImage {\n           width: 70px;\n           height: 40px;\n        }\n        .grow { transition: all .2s ease-in-out; }\n        .grow:hover { transform: scale(1.1); opacity: 0.7}\n    "],
                        template: "\n        <h1>Digg</h1>\n        <div class=\"appHeight\" HeightDirective (resizing)=\"smallHeight = $event\">\n                 <h5>\n                    component height: {{smallHeight}}px\n                </h5>\n             <form (submit)=\"$event.preventDefault();\">\n                <br/>\n                <div class=\"input-group\">\n                      <span class=\"input-group-addon\" id=\"symbol-input\">Digg filter</span>\n                      <input type=\"text\" class=\"form-control\" (keyup)=\"onSearch($event)\" placeholder=\"press [ENTER] for unfiltered result\">\n                    </div>\n              </form>\n              <div class=\"diggContainer list\">\n                  <table class=\"table table-striped\">\n                  <tbody>\n                    <tr *ngFor=\"let digg of diggs\" [ngClass]=\"{'col-xs-4': tileStyle, 'col-lg-3': tileStyle}\">\n                      <td>\n                      <img class=\"img-responsive grow\" [ngClass]=\"{'largeImage': tileStyle, 'smallImage': !tileStyle}\" src=\"{{digg.link}}\"/>\n                      <span>{{digg.title}}</span>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n        </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Digg);
                return Digg;
            }());
            exports_1("Digg", Digg);
        }
    }
});
//# sourceMappingURL=Digg.js.map