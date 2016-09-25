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
    var FilmView;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FilmView = (function () {
                function FilmView() {
                    this.data = null;
                    this.loading = false;
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FilmView.prototype, "data", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FilmView.prototype, "loading", void 0);
                FilmView = __decorate([
                    core_1.Component({
                        selector: 'film',
                        template: "\n        <label>{{data?.title}}</label><span *ngIf=\"loading\" class=\"blink\">loading...</span>\n        <p>{{data?.opening_crawl}}</p>\n    ",
                        styles: ["\n        .blink {\n            margin-left:10px;\n            animation: blink .75s linear infinite;\n        }\n        @keyframes blink {\n            0% { opacity: 1; }\n            50% { opacity: 1; }\n            50.01% { opacity: 0; }\n            100% { opacity: 0; }\n        }\n    "],
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush
                    }), 
                    __metadata('design:paramtypes', [])
                ], FilmView);
                return FilmView;
            }());
            exports_1("FilmView", FilmView);
        }
    }
});
