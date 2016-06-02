System.register(["@angular/core", "../../sliderpanel/Sliderpanel", "../../../services/CommBroker", "./NotesBase", "../../countdown/CountDown", "./NoteDynamicOutlet"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, Sliderpanel_1, CommBroker_1, NotesBase_1, CountDown_1, NoteDynamicOutlet_1;
    var NotesService, Notes5;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Sliderpanel_1_1) {
                Sliderpanel_1 = Sliderpanel_1_1;
            },
            function (CommBroker_1_1) {
                CommBroker_1 = CommBroker_1_1;
            },
            function (NotesBase_1_1) {
                NotesBase_1 = NotesBase_1_1;
            },
            function (CountDown_1_1) {
                CountDown_1 = CountDown_1_1;
            },
            function (NoteDynamicOutlet_1_1) {
                NoteDynamicOutlet_1 = NoteDynamicOutlet_1_1;
            }],
        execute: function() {
            NotesService = (function () {
                function NotesService(config) {
                    this.config = config;
                }
                NotesService.prototype.showConfigValue = function () {
                    console.log(this.config.noteDefault);
                };
                NotesService = __decorate([
                    core_1.Injectable(),
                    __param(0, core_1.Inject("NotesConfigValue")), 
                    __metadata('design:paramtypes', [Object])
                ], NotesService);
                return NotesService;
            }());
            Notes5 = (function (_super) {
                __extends(Notes5, _super);
                function Notes5(componentResolver, NotesService, sliderPanel, commBroker) {
                    _super.call(this, sliderPanel, commBroker);
                    this.componentResolver = componentResolver;
                    this.NotesService = NotesService;
                    this.sliderPanel = sliderPanel;
                    this.commBroker = commBroker;
                    this.html = "\n                  <div>\n                    <h1>Dynamic HTML Fragment</h1>\n                    <small>I am a dynamically created component with runtime injected HTML template</small>\n                  </div>\n      ";
                    NotesService.showConfigValue();
                    this.me = this;
                    this.slideRight = 'notes4';
                }
                Notes5.prototype.LazyLoadComponentAsync = function (componentPath, componentName, locationAnchor) {
                    var _this = this;
                    System.import(componentPath)
                        .then(function (fileContents) {
                        return fileContents[componentName];
                    })
                        .then(function (component) {
                        _this.componentResolver.resolveComponent(component).then(function (factory) {
                            locationAnchor.createComponent(factory, 0, locationAnchor.injector);
                        });
                    });
                };
                Notes5.prototype.ngAfterViewInit = function () {
                    this.LazyLoadComponentAsync("src/comps/app2/notes/NoteLazyLoad", "NoteLazyLoad", this.extensionAnchor);
                };
                __decorate([
                    core_1.ViewChild('extensionAnchor', { read: core_1.ViewContainerRef }), 
                    __metadata('design:type', core_1.ViewContainerRef)
                ], Notes5.prototype, "extensionAnchor", void 0);
                Notes5 = __decorate([
                    core_1.Component({
                        selector: 'Notes5',
                        directives: [CountDown_1.CountDown, NoteDynamicOutlet_1.NoteDynamicOutlet],
                        providers: [
                            NotesService,
                            core_1.provide("NotesConfigValue", { useValue: { noteDefault: 'example of passing param to component via DI' } }),
                        ],
                        template: "<button type=\"button\" (click)=\"onPrev($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-left \"></span>\n                </button>\n                <hr/>\n                <small>I am Notes5 component..</small>\n                <span #extensionAnchor></span>\n                 <hr/>\n                 <dynamic-html-outlet [src]=\"html\"></dynamic-html-outlet>\n                \n                <!--<div>-->\n                   <!--<small>I am CountDown component</small>-->\n                    <!--<h2>CountDown</h2>-->\n                    <!--<div class=\"timer\" *CountDown=\"let timer=timerApi\">-->\n                      <!--<div class=\"time\">{{ timer.getTime() }}</div>-->\n                      <!--<div class=\"controls\">-->\n                        <!--<button (click)=\"timer.toggle()\">Toggle</button>-->\n                        <!--<button (click)=\"timer.reset()\">Reset</button>-->\n                      <!--</div>-->\n                    <!--</div>-->\n                <!--</div>-->\n                <!--<label>A unique example of how to <u>manually</u> create and bind a Template to a view using our very own *CountDown directive (note that asterisk)</label>-->\n                <!--<br/>-->\n                <!--<label>Check the code to learn more...</label>-->\n                \n                \n                "
                    }), 
                    __metadata('design:paramtypes', [core_1.ComponentResolver, NotesService, Sliderpanel_1.Sliderpanel, CommBroker_1.CommBroker])
                ], Notes5);
                return Notes5;
            }(NotesBase_1.NotesBase));
            exports_1("Notes5", Notes5);
        }
    }
});
//# sourceMappingURL=Notes5.js.map