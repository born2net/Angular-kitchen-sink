System.register(['@angular/core', '@angular/http', 'rxjs/Observable', 'rxjs/add/operator/do', 'rxjs/add/observable/empty'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var WeatherService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            WeatherService = (function () {
                function WeatherService(http) {
                    this.http = http;
                }
                WeatherService.prototype.search = function (query) {
                    return this.http
                        .get("" + WeatherService.BASE_URL + query)
                        .do(function (x) {
                        console.log("Weather response: " + x.status);
                    })
                        .map(function (res) { return res.json(); })
                        .map(function (e) {
                        var items = e[0].data.weather;
                        return items;
                    })
                        .catch(function (e) {
                        return Observable_1.Observable.empty();
                    });
                };
                WeatherService.BASE_URL = 'https://secure.digitalsignage.com/Weather/';
                WeatherService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], WeatherService);
                return WeatherService;
            }());
            exports_1("WeatherService", WeatherService);
        }
    }
});
