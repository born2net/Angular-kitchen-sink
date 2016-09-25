System.register(["@angular/core", "@angular/platform-browser", "../../../src/Conts", "rxjs/Observable", "../../../src/comps/digg/DiggLoader", "../../services/CommBroker", "rxjs/add/observable/from", "rxjs/add/operator/do", "rxjs/add/operator/debounceTime", "rxjs/add/operator/distinctUntilChanged"], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, platform_browser_1, Conts_1, Observable_1, DiggLoader_1, CommBroker_1;
    var Digg;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (Conts_1_1) {
                Conts_1 = Conts_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (DiggLoader_1_1) {
                DiggLoader_1 = DiggLoader_1_1;
            },
            function (CommBroker_1_1) {
                CommBroker_1 = CommBroker_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {}],
        execute: function() {
            Digg = (function () {
                function Digg(commBroker, diggLoader, doc, m_commBroker, viewContainer) {
                    this.commBroker = commBroker;
                    this.doc = doc;
                    this.m_commBroker = m_commBroker;
                    var self = this;
                    self.mode = 'list';
                    this.dom = this.doc.body;
                    this.diggs = [];
                    self.viewContainer = viewContainer;
                    self.el = viewContainer.element.nativeElement;
                    self.channel = new Observable_1.Observable(function (observer) {
                        self.stream = observer;
                    }).share();
                    self.channel.debounceTime(1000).distinctUntilChanged().subscribe(function (e) {
                        self.diggs = [];
                        diggLoader.loadDiggs(e, self.diggs);
                    });
                    this.listenWinResize();
                    var propView = this.commBroker.getService(Conts_1.Consts.Services().Properties);
                    if (propView)
                        propView.setPropView('Digg');
                }
                Digg.prototype.listenWinResize = function () {
                    var self = this;
                    self.m_commBroker.onEvent(Conts_1.Consts.Events().WIN_SIZED).subscribe(function (e) {
                        self.setSize(e.message.height);
                    });
                };
                Digg.prototype.ngAfterContentInit = function () {
                    this.tileStyle = this.mode == "tiles" ? true : false;
                    this.setSize(this.m_commBroker.getValue(Conts_1.Consts.Values().APP_SIZE).height);
                };
                Digg.prototype.setSize = function (height) {
                    var h = height - 400;
                    var el = jQuery(this.dom).find('diggContainer', this.el)[0];
                    jQuery(this.dom).find(el).css({ height: h });
                };
                Digg.prototype.onSearch = function (event) {
                    this.stream.next(event.target.value);
                };
                Digg = __decorate([
                    core_1.Component({
                        selector: 'Digg',
                        inputs: ['mode:mode'],
                        encapsulation: core_1.ViewEncapsulation.Emulated,
                        providers: [DiggLoader_1.DiggLoader],
                        styles: ["\n        .diggContainer {\n            overflow-y: scroll;\n            height: 300px;\n        };\n        .largeImage {\n           max-width: 100px;\n           max-height: 60px;\n        }\n        .smallImage {\n           width: 70px;\n           height: 40px;\n        }\n        .grow { transition: all .2s ease-in-out; }\n        .grow:hover { transform: scale(1.1); opacity: 0.7}\n    "],
                        template: "\n        <h1>Digg</h1>\n        <div class=\"appHeight\" HeightDirective (resizing)=\"smallHeight = $event\">\n                 <h5>\n                    component height: {{smallHeight}}px\n                </h5>\n             <form (submit)=\"$event.preventDefault();\">\n                <br/>\n                <div class=\"input-group\">\n                      <span class=\"input-group-addon\" id=\"symbol-input\">Digg filter</span>\n                      <input type=\"text\" class=\"form-control\" (keyup)=\"onSearch($event)\" placeholder=\"press [ENTER] for unfiltered result\">\n                    </div>\n              </form>\n              <div class=\"diggContainer list\">\n                  <table class=\"table table-striped\">\n                  <tbody>\n                    <tr *ngFor=\"let digg of diggs\" [ngClass]=\"{'col-xs-4': tileStyle, 'col-lg-3': tileStyle}\">\n                      <td>\n                      <img class=\"img-responsive grow\" [ngClass]=\"{'largeImage': tileStyle, 'smallImage': !tileStyle}\" src=\"{{digg.link}}\"/>\n                      <span>{{digg.title}}</span>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n        </div>\n  "
                    }),
                    __param(2, core_1.Inject(platform_browser_1.DOCUMENT)), 
                    __metadata('design:paramtypes', [CommBroker_1.CommBroker, DiggLoader_1.DiggLoader, Object, CommBroker_1.CommBroker, core_1.ViewContainerRef])
                ], Digg);
                return Digg;
            }());
            exports_1("Digg", Digg);
        }
    }
});
