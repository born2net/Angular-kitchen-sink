/*******************************************
 ng2Boilerplate application

 Get up and running quickly with a working
 application with solid foundation for
 Google's Angular 2

 GitHub: https://github.com/born2net/ng2Boilerplate

 Licence: MIT
 *******************************************/
System.register(['angular2/core', 'angular2/platform/browser', "src/Conts", "rxjs/Observable", "src/comps/digg/DiggLoader", "../../services/CommBroker", 'rxjs/add/observable/from', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/distinctUntilChanged', "../../styles/RefreshTheme"], function(exports_1) {
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
    var core_1, browser_1, Conts_1, Observable_1, DiggLoader_1, CommBroker_1, RefreshTheme_1;
    var DIGG_INIT_HEIGHT, Digg;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
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
            function (RefreshTheme_1_1) {
                RefreshTheme_1 = RefreshTheme_1_1;
            }],
        execute: function() {
            DIGG_INIT_HEIGHT = '400px';
            Digg = (function (_super) {
                __extends(Digg, _super);
                function Digg(diggLoader, m_commBroker, viewContainer) {
                    _super.call(this);
                    this.m_commBroker = m_commBroker;
                    this.dom = new browser_1.BrowserDomAdapter();
                    var self = this;
                    self.mode = 'list';
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
                    var h = height - 200;
                    //var el = this.dom.getElementsByClassName(this.el, this.mode)[0];
                    var el = this.dom.getElementsByClassName(this.el, 'diggContainer')[0];
                    this.dom.setStyle(el, 'height', h);
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
                        styles: [("\n        .diggContainer {\n            overflow-y: scroll;\n            height: " + DIGG_INIT_HEIGHT + ";\n        };\n        .largeImage {\n           max-width: 100;\n           max-height: 60;\n        }\n        .smallImage {\n           width: 70;\n           height: 40;\n        }\n        .grow { transition: all .2s ease-in-out; }\n        .grow:hover { transform: scale(1.1); opacity: 0.7}\n    ")],
                        template: "\n        <ng-content></ng-content>\n        <div >\n             <form (submit)=\"$event.preventDefault();\">\n                <br/>\n                <div class=\"input-group\">\n                      <span class=\"input-group-addon\" id=\"symbol-input\">Digg filter</span>\n                      <input type=\"text\" class=\"form-control\" (keyup)=\"onSearch($event)\" placeholder=\"press [ENTER] for unfiltered result\">\n                    </div>\n              </form>\n              <div class=\"diggContainer list\">\n                  <table class=\"table table-striped\">\n                  <tbody>\n                    <tr *ngFor=\"#digg of diggs\" [ngClass]=\"{'col-xs-4': tileStyle, 'col-lg-3': tileStyle}\">\n                      <td>\n                      <img class=\"img-responsive grow\" [ngClass]=\"{'largeImage': tileStyle, 'smallImage': !tileStyle}\" src=\"{{digg.link}}\"/>\n                      <span>{{digg.title}}</span>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n        </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [DiggLoader_1.DiggLoader, CommBroker_1.CommBroker, core_1.ViewContainerRef])
                ], Digg);
                return Digg;
            })(RefreshTheme_1.RefreshTheme);
            exports_1("Digg", Digg);
        }
    }
});
//# sourceMappingURL=Digg.js.map