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
var core_1 = require("angular2/core");
var Conts_1 = require("../../../../src/Conts");
var WeatherService_1 = require("./WeatherService");
var SortableHeader_1 = require("./SortableHeader");
var common_1 = require('angular2/common');
var OrderBy_1 = require("../../../pipes/OrderBy");
var common_2 = require("angular2/common");
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/switchMap');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/do');
require('rxjs/add/operator/distinctUntilChanged');
var CommBroker_1 = require("../../../services/CommBroker");
var Weather = (function () {
    function Weather(renderer, weatherService, commBroker) {
        this.renderer = renderer;
        this.weatherService = weatherService;
        this.commBroker = commBroker;
        this.zipControl = new common_1.Control();
        this.sort = { field: null, desc: false };
        this.listenWeatherInput();
        this.commBroker.getService(Conts_1.Consts.Services().Properties).setPropView('Weather');
    }
    Weather.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.zipControl.updateValue('91301');
        setTimeout(function () {
            _this.renderer.invokeElementMethod(_this.myWeatherInput.nativeElement, 'focus', []);
        }, 1000);
    };
    Weather.prototype.listenWeatherInput = function () {
        var _this = this;
        return this.weatherItems = this.zipControl.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .filter(function (zip) {
            return zip.length > 3;
        }).switchMap(function (zip) {
            return _this.weatherService.search(zip + "/1");
        });
    };
    __decorate([
        core_1.ViewChild('anotherWayToGetInput'), 
        __metadata('design:type', core_1.ElementRef)
    ], Weather.prototype, "myWeatherInput", void 0);
    Weather = __decorate([
        core_1.Component({
            selector: 'Weather',
            providers: [WeatherService_1.WeatherService, SortableHeader_1.SortableHeader],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            pipes: [OrderBy_1.OrderBy],
            directives: [common_2.COMMON_DIRECTIVES, SortableHeader_1.SortableHeader],
            styles: ["input {margin: 20px; width: 50%}"],
            template: "\n    <small>I am a weather component</small>\n    <input type=\"text\" #anotherWayToGetInput class=\"form-control\" placeholder=\"enter city or zip code\" [ngFormControl]=\"zipControl\">\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>day</th>\n          <th>icon</th>\n          <th sortableHeader=\"maxtempF\" [sort]=\"sort\">high</th>\n          <th sortableHeader=\"mintempF\" [sort]=\"sort\">low</th>\n        </tr>\n      </thead>\n      <tbody>\n      <!-- no need to subscribe to observable since async does this for us -->\n        <tr *ngFor=\"let item of weatherItems | async | OrderBy:sort.field:sort.desc\">\n          <td>{{ item.day }}</td>\n          <td><img src=\"{{ item.iconPath }}\" style=\"width: 40px; height: 40px\"/></td>\n          <td>{{ item.maxtempF }}</td>\n          <td>{{ item.mintempF }}</td>\n          <!-- <td [innerHtml]=\"item.day\"></td> -->\n        </tr>\n      </tbody>\n    </table>\n  ",
        }), 
        __metadata('design:paramtypes', [core_1.Renderer, WeatherService_1.WeatherService, CommBroker_1.CommBroker])
    ], Weather);
    return Weather;
}());
exports.Weather = Weather;
//# sourceMappingURL=Weather.js.map