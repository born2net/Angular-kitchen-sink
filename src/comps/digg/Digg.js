"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var Conts_1 = require("../../../src/Conts");
var Observable_1 = require("rxjs/Observable");
var DiggLoader_1 = require("../../../src/comps/digg/DiggLoader");
var CommBroker_1 = require("../../services/CommBroker");
require('rxjs/add/observable/from');
require('rxjs/add/operator/do');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
var Digg = (function () {
    function Digg(commBroker, diggLoader, m_commBroker, viewContainer) {
        this.commBroker = commBroker;
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
            styles: ["\n        .diggContainer {\n            overflow-y: scroll;\n            height: 300px;\n        };\n        .largeImage {\n           max-width: 100px;\n           max-height: 60px;\n        }\n        .smallImage {\n           width: 70px;\n           height: 40px;\n        }\n        .grow { transition: all .2s ease-in-out; }\n        .grow:hover { transform: scale(1.1); opacity: 0.7}\n    "],
            template: "\n        <h1>Digg</h1>\n        <div class=\"appHeight\">\n             <form (submit)=\"$event.preventDefault();\">\n                <br/>\n                <div class=\"input-group\">\n                      <span class=\"input-group-addon\" id=\"symbol-input\">Digg filter</span>\n                      <input type=\"text\" class=\"form-control\" (keyup)=\"onSearch($event)\" placeholder=\"press [ENTER] for unfiltered result\">\n                    </div>\n              </form>\n              <div class=\"diggContainer list\">\n                  <table class=\"table table-striped\">\n                  <tbody>\n                    <tr *ngFor=\"let digg of diggs\" [ngClass]=\"{'col-xs-4': tileStyle, 'col-lg-3': tileStyle}\">\n                      <td>\n                      <img class=\"img-responsive grow\" [ngClass]=\"{'largeImage': tileStyle, 'smallImage': !tileStyle}\" src=\"{{digg.link}}\"/>\n                      <span>{{digg.title}}</span>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n        </div>\n  "
        }), 
        __metadata('design:paramtypes', [CommBroker_1.CommBroker, DiggLoader_1.DiggLoader, CommBroker_1.CommBroker, core_1.ViewContainerRef])
    ], Digg);
    return Digg;
}());
exports.Digg = Digg;
//# sourceMappingURL=Digg.js.map