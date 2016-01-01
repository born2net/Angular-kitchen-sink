System.register(["angular2/core", "./WeatherService"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, WeatherService_1;
    var Weather;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (WeatherService_1_1) {
                WeatherService_1 = WeatherService_1_1;
            }],
        execute: function() {
            Weather = (function () {
                //public sort: {field: string, desc: boolean} = {field: null, desc: false};
                function Weather(weatherService) {
                    this.weatherService = weatherService;
                    this.weatherItems = weatherService.search('91301/1');
                }
                Weather = __decorate([
                    core_1.Component({
                        selector: 'Weather',
                        providers: [WeatherService_1.WeatherService],
                        template: "\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>day</th>\n          <th>icon</th>\n          <th>high</th>\n          <th>low</th>\n        </tr>\n      </thead>\n      <tbody>\n      <!-- no need to subscribe to observable since async does this for us -->\n        <tr *ngFor=\"#item of weatherItems | async\">\n          <td>{{ item.day }}</td>\n          <td><img src=\"{{ item.iconPath }}\" style=\"width: 40px; height: 40px\"/></td>\n          <td>{{ item.maxtempF }}</td>\n          <td>{{ item.mintempF }}</td>\n          <!-- <td [innerHtml]=\"item.day\"></td> -->\n        </tr>\n      </tbody>\n    </table>\n  ",
                    }), 
                    __metadata('design:paramtypes', [WeatherService_1.WeatherService])
                ], Weather);
                return Weather;
            })();
            exports_1("Weather", Weather);
        }
    }
});
//# sourceMappingURL=Weather.js.map