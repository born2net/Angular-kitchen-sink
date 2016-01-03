///<reference path="../../../../typings/app.d.ts"/>
System.register(["angular2/core", "./WeatherService", "./SortableHeader", 'angular2/common', "../../../pipes/OrderBy", "angular2/common"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, WeatherService_1, SortableHeader_1, common_1, OrderBy_1, common_2;
    var Weather;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (WeatherService_1_1) {
                WeatherService_1 = WeatherService_1_1;
            },
            function (SortableHeader_1_1) {
                SortableHeader_1 = SortableHeader_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (OrderBy_1_1) {
                OrderBy_1 = OrderBy_1_1;
            },
            function (common_2_1) {
                common_2 = common_2_1;
            }],
        execute: function() {
            Weather = (function () {
                function Weather(weatherService, fb) {
                    this.weatherService = weatherService;
                    this.fb = fb;
                    this.sort = { field: null, desc: false };
                    this.weatherForm = fb.group({
                        'weatherInput': ['']
                    });
                    this.weatherInput = this.weatherForm.controls['weatherInput'];
                    this.weatherItems = weatherService.search('91301/1');
                    this.listenWeatherInput();
                }
                Weather.prototype.listenWeatherInput = function () {
                    var _this = this;
                    this.weatherInput.valueChanges
                        .debounceTime(100)
                        .filter(function (zip) {
                        if (zip.length == 5)
                            return true;
                        return false;
                    }).subscribe(function (value) { return _this.weatherItems = _this.weatherService.search(value + "/1"); }, function (err) { return console.log("onError: " + err); }, function () { return console.log('onCompleted'); });
                };
                Weather = __decorate([
                    core_1.Component({
                        selector: 'Weather',
                        providers: [WeatherService_1.WeatherService, SortableHeader_1.SortableHeader],
                        pipes: [OrderBy_1.OrderBy],
                        directives: [common_2.COMMON_DIRECTIVES, SortableHeader_1.SortableHeader],
                        styles: ["input {margin: 20px; width: 50%}"],
                        template: "\n    <small>I am a weather component</small>\n    <form [ngFormModel]=\"weatherForm\" (submit)=\"$event.preventDefault()\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"enter city or zip code\" [ngFormControl]=\"weatherForm.controls['weatherInput']\">\n    </form>\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>day</th>\n          <th>icon</th>\n          <th sortableHeader=\"maxtempF\" [sort]=\"sort\">high</th>\n          <th sortableHeader=\"mintempF\" [sort]=\"sort\">low</th>\n        </tr>\n      </thead>\n      <tbody>\n      <!-- no need to subscribe to observable since async does this for us -->\n        <tr *ngFor=\"#item of weatherItems | async | OrderBy:sort.field:sort.desc\">\n          <td>{{ item.day }}</td>\n          <td><img src=\"{{ item.iconPath }}\" style=\"width: 40px; height: 40px\"/></td>\n          <td>{{ item.maxtempF }}</td>\n          <td>{{ item.mintempF }}</td>\n          <!-- <td [innerHtml]=\"item.day\"></td> -->\n        </tr>\n      </tbody>\n    </table>\n  ",
                    }), 
                    __metadata('design:paramtypes', [WeatherService_1.WeatherService, common_1.FormBuilder])
                ], Weather);
                return Weather;
            })();
            exports_1("Weather", Weather);
        }
    }
});
//}).subscribe((value:string) => {
//    console.log('fetching zip weather : ', value);
//    this.weatherItems = this.weatherService.search(`${value}/1`);
//} 
//# sourceMappingURL=Weather.js.map