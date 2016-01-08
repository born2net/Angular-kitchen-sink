///<reference path="../../../../typings/app.d.ts"/>
System.register(["angular2/core", "src/Conts", "./WeatherService", "./SortableHeader", 'angular2/common', "../../../pipes/OrderBy", "angular2/common", 'rxjs/add/operator/distinctUntilChanged', 'rxjs/add/operator/switchMap', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/catch', 'rxjs/add/operator/do', "../../../services/CommBroker"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Conts_1, WeatherService_1, SortableHeader_1, common_1, OrderBy_1, common_2, CommBroker_1;
    var Weather;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Conts_1_1) {
                Conts_1 = Conts_1_1;
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
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (CommBroker_1_1) {
                CommBroker_1 = CommBroker_1_1;
            }],
        execute: function() {
            Weather = (function () {
                function Weather(weatherService, commBroker) {
                    this.weatherService = weatherService;
                    this.commBroker = commBroker;
                    this.zipControl = new common_1.Control();
                    // the real magic here is that the sort variable is being used in several places
                    // including here to set the pipe sorting, in the SortableHeader component to show and hide
                    // the header icons, as well as in SortableHeader to change the sort order on header clicks.
                    // So we pass the SAME sort var to all SortableHeader directives and all work with it
                    // in both displaying and the sorting mechanics
                    // we also use changeDetection: ChangeDetectionStrategy.OnPushObserve to make sure we use
                    // efficient rendering of the page only when the Observable is changes
                    this.sort = { field: null, desc: false };
                    this.listenWeatherInput();
                    this.commBroker.getService(Conts_1.Consts.Services().Properties).setPropView('Weather');
                }
                Weather.prototype.ngAfterViewInit = function () {
                    this.zipControl.updateValue('91301');
                };
                Weather.prototype.listenWeatherInput = function () {
                    var _this = this;
                    return this.weatherItems = this.zipControl.valueChanges
                        .debounceTime(400)
                        .distinctUntilChanged()
                        .filter(function (zip) {
                        return zip.length > 3;
                        // switchMap is really cool as it will both flatMap our Observables
                        // as well as it unsubscribes from all previous / pending calls to server and only
                        // listen to to newly created Observable
                    }).switchMap(function (zip) {
                        return _this.weatherService.search(zip + "/1");
                    });
                };
                Weather = __decorate([
                    core_1.Component({
                        selector: 'Weather',
                        providers: [WeatherService_1.WeatherService, SortableHeader_1.SortableHeader],
                        changeDetection: core_1.ChangeDetectionStrategy.OnPushObserve,
                        pipes: [OrderBy_1.OrderBy],
                        directives: [common_2.COMMON_DIRECTIVES, SortableHeader_1.SortableHeader],
                        styles: ["input {margin: 20px; width: 50%}"],
                        template: "\n    <small>I am a weather component</small>\n    <input type=\"text\" class=\"form-control\" placeholder=\"enter city or zip code\" [ngFormControl]=\"zipControl\">\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>day</th>\n          <th>icon</th>\n          <th sortableHeader=\"maxtempF\" [sort]=\"sort\">high</th>\n          <th sortableHeader=\"mintempF\" [sort]=\"sort\">low</th>\n        </tr>\n      </thead>\n      <tbody>\n      <!-- no need to subscribe to observable since async does this for us -->\n        <tr *ngFor=\"#item of weatherItems | async | OrderBy:sort.field:sort.desc\">\n          <td>{{ item.day }}</td>\n          <td><img src=\"{{ item.iconPath }}\" style=\"width: 40px; height: 40px\"/></td>\n          <td>{{ item.maxtempF }}</td>\n          <td>{{ item.mintempF }}</td>\n          <!-- <td [innerHtml]=\"item.day\"></td> -->\n        </tr>\n      </tbody>\n    </table>\n  ",
                    }), 
                    __metadata('design:paramtypes', [WeatherService_1.WeatherService, CommBroker_1.CommBroker])
                ], Weather);
                return Weather;
            })();
            exports_1("Weather", Weather);
        }
    }
});
//# sourceMappingURL=Weather.js.map