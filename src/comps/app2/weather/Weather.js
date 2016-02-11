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
    function Weather(weatherService, commBroker) {
        this.weatherService = weatherService;
        this.commBroker = commBroker;
        this.zipControl = new common_1.Control();
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
exports.Weather = Weather;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDIvd2VhdGhlci93ZWF0aGVyLnRzIl0sIm5hbWVzIjpbIldlYXRoZXIiLCJXZWF0aGVyLmNvbnN0cnVjdG9yIiwiV2VhdGhlci5uZ0FmdGVyVmlld0luaXQiLCJXZWF0aGVyLmxpc3RlbldlYXRoZXJJbnB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUEscUJBQWlELGVBQWUsQ0FBQyxDQUFBO0FBQ2pFLHNCQUFxQix1QkFBdUIsQ0FBQyxDQUFBO0FBRTdDLCtCQUE2QixrQkFBa0IsQ0FBQyxDQUFBO0FBQ2hELCtCQUE2QixrQkFBa0IsQ0FBQyxDQUFBO0FBQ2hELHVCQUErRixpQkFDL0YsQ0FBQyxDQUQrRztBQUNoSCx3QkFBc0Isd0JBQXdCLENBQUMsQ0FBQTtBQUMvQyx1QkFBZ0MsaUJBQWlCLENBQUMsQ0FBQTtBQUVsRCxRQUFPLHdDQUF3QyxDQUFDLENBQUE7QUFDaEQsUUFBTyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3JDLFFBQU8sZ0NBQWdDLENBQUMsQ0FBQTtBQUN4QyxRQUFPLHlCQUF5QixDQUFDLENBQUE7QUFDakMsUUFBTyxzQkFBc0IsQ0FBQyxDQUFBO0FBQzlCLFFBQU8sd0NBQXdDLENBQUMsQ0FBQTtBQUNoRCwyQkFBeUIsOEJBQThCLENBQUMsQ0FBQTtBQUV4RDtJQStDSUEsaUJBQW9CQSxjQUE2QkEsRUFBVUEsVUFBcUJBO1FBQTVEQyxtQkFBY0EsR0FBZEEsY0FBY0EsQ0FBZUE7UUFBVUEsZUFBVUEsR0FBVkEsVUFBVUEsQ0FBV0E7UUFaeEVBLGVBQVVBLEdBQVdBLElBQUlBLGdCQUFPQSxFQUFFQSxDQUFDQTtRQVNwQ0EsU0FBSUEsR0FBbUNBLEVBQUNBLEtBQUtBLEVBQUVBLElBQUlBLEVBQUVBLElBQUlBLEVBQUVBLEtBQUtBLEVBQUNBLENBQUNBO1FBSXJFQSxJQUFJQSxDQUFDQSxrQkFBa0JBLEVBQUVBLENBQUNBO1FBQzFCQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxVQUFVQSxDQUFDQSxjQUFNQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxXQUFXQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQTtJQUNwRkEsQ0FBQ0E7SUFFREQsaUNBQWVBLEdBQWZBO1FBQ0lFLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLFdBQVdBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO0lBQ3pDQSxDQUFDQTtJQUVERixvQ0FBa0JBLEdBQWxCQTtRQUFBRyxpQkFZQ0E7UUFYR0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsWUFBWUE7YUFDbERBLFlBQVlBLENBQUNBLEdBQUdBLENBQUNBO2FBQ2pCQSxvQkFBb0JBLEVBQUVBO2FBQ3RCQSxNQUFNQSxDQUFDQSxVQUFDQSxHQUFVQTtZQUNmQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUkxQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsVUFBQUEsR0FBR0E7WUFDWkEsTUFBTUEsQ0FBQ0EsS0FBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsTUFBTUEsQ0FBSUEsR0FBR0EsT0FBSUEsQ0FBQ0EsQ0FBQUE7UUFDakRBLENBQUNBLENBQUNBLENBQUFBO0lBQ1ZBLENBQUNBO0lBcEVMSDtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsU0FBU0E7WUFDbkJBLFNBQVNBLEVBQUVBLENBQUNBLCtCQUFjQSxFQUFFQSwrQkFBY0EsQ0FBQ0E7WUFDM0NBLGVBQWVBLEVBQUVBLDhCQUF1QkEsQ0FBQ0EsYUFBYUE7WUFDdERBLEtBQUtBLEVBQUVBLENBQUNBLGlCQUFPQSxDQUFDQTtZQUNoQkEsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWlCQSxFQUFFQSwrQkFBY0EsQ0FBQ0E7WUFDL0NBLE1BQU1BLEVBQUVBLENBQUNBLGtDQUFrQ0EsQ0FBQ0E7WUFDNUNBLFFBQVFBLEVBQUVBLHE2QkF1QlhBO1NBQ0ZBLENBQUNBOztnQkFzQ0RBO0lBQURBLGNBQUNBO0FBQURBLENBckVBLEFBcUVDQSxJQUFBO0FBcENZLGVBQU8sVUFvQ25CLENBQUEiLCJmaWxlIjoiY29tcHMvYXBwMi93ZWF0aGVyL1dlYXRoZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi90eXBpbmdzL2FwcC5kLnRzXCIvPlxyXG5cclxuaW1wb3J0IHtDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge0NvbnN0c30gZnJvbSBcIi4uLy4uLy4uLy4uL3NyYy9Db250c1wiO1xyXG5pbXBvcnQge0lXZWF0aGVySXRlbX0gZnJvbSBcIi4vSVdlYXRoZXJcIjtcclxuaW1wb3J0IHtXZWF0aGVyU2VydmljZX0gZnJvbSBcIi4vV2VhdGhlclNlcnZpY2VcIjtcclxuaW1wb3J0IHtTb3J0YWJsZUhlYWRlcn0gZnJvbSBcIi4vU29ydGFibGVIZWFkZXJcIjtcclxuaW1wb3J0IHtGT1JNX0RJUkVDVElWRVMsIEZvcm1CdWlsZGVyLCBDb250cm9sR3JvdXAsIFZhbGlkYXRvcnMsIEFic3RyYWN0Q29udHJvbCwgQ29udHJvbH0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJ1xyXG5pbXBvcnQge09yZGVyQnl9IGZyb20gXCIuLi8uLi8uLi9waXBlcy9PcmRlckJ5XCI7XHJcbmltcG9ydCB7Q09NTU9OX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGlzdGluY3RVbnRpbENoYW5nZWQnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGVib3VuY2VUaW1lJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2Rpc3RpbmN0VW50aWxDaGFuZ2VkJztcclxuaW1wb3J0IHtDb21tQnJva2VyfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvQ29tbUJyb2tlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ1dlYXRoZXInLFxyXG4gICAgcHJvdmlkZXJzOiBbV2VhdGhlclNlcnZpY2UsIFNvcnRhYmxlSGVhZGVyXSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoT2JzZXJ2ZSxcclxuICAgIHBpcGVzOiBbT3JkZXJCeV0sXHJcbiAgICBkaXJlY3RpdmVzOiBbQ09NTU9OX0RJUkVDVElWRVMsIFNvcnRhYmxlSGVhZGVyXSxcclxuICAgIHN0eWxlczogW2BpbnB1dCB7bWFyZ2luOiAyMHB4OyB3aWR0aDogNTAlfWBdLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxzbWFsbD5JIGFtIGEgd2VhdGhlciBjb21wb25lbnQ8L3NtYWxsPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cImVudGVyIGNpdHkgb3IgemlwIGNvZGVcIiBbbmdGb3JtQ29udHJvbF09XCJ6aXBDb250cm9sXCI+XHJcbiAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZVwiPlxyXG4gICAgICA8dGhlYWQ+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRoPmRheTwvdGg+XHJcbiAgICAgICAgICA8dGg+aWNvbjwvdGg+XHJcbiAgICAgICAgICA8dGggc29ydGFibGVIZWFkZXI9XCJtYXh0ZW1wRlwiIFtzb3J0XT1cInNvcnRcIj5oaWdoPC90aD5cclxuICAgICAgICAgIDx0aCBzb3J0YWJsZUhlYWRlcj1cIm1pbnRlbXBGXCIgW3NvcnRdPVwic29ydFwiPmxvdzwvdGg+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC90aGVhZD5cclxuICAgICAgPHRib2R5PlxyXG4gICAgICA8IS0tIG5vIG5lZWQgdG8gc3Vic2NyaWJlIHRvIG9ic2VydmFibGUgc2luY2UgYXN5bmMgZG9lcyB0aGlzIGZvciB1cyAtLT5cclxuICAgICAgICA8dHIgKm5nRm9yPVwiI2l0ZW0gb2Ygd2VhdGhlckl0ZW1zIHwgYXN5bmMgfCBPcmRlckJ5OnNvcnQuZmllbGQ6c29ydC5kZXNjXCI+XHJcbiAgICAgICAgICA8dGQ+e3sgaXRlbS5kYXkgfX08L3RkPlxyXG4gICAgICAgICAgPHRkPjxpbWcgc3JjPVwie3sgaXRlbS5pY29uUGF0aCB9fVwiIHN0eWxlPVwid2lkdGg6IDQwcHg7IGhlaWdodDogNDBweFwiLz48L3RkPlxyXG4gICAgICAgICAgPHRkPnt7IGl0ZW0ubWF4dGVtcEYgfX08L3RkPlxyXG4gICAgICAgICAgPHRkPnt7IGl0ZW0ubWludGVtcEYgfX08L3RkPlxyXG4gICAgICAgICAgPCEtLSA8dGQgW2lubmVySHRtbF09XCJpdGVtLmRheVwiPjwvdGQ+IC0tPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgIDwvdGJvZHk+XHJcbiAgICA8L3RhYmxlPlxyXG4gIGAsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgV2VhdGhlciB7XHJcbiAgICBwcml2YXRlIHdlYXRoZXJJdGVtczpPYnNlcnZhYmxlPElXZWF0aGVySXRlbVtdPjtcclxuICAgIHByaXZhdGUgemlwQ29udHJvbDpDb250cm9sID0gbmV3IENvbnRyb2woKTtcclxuXHJcbiAgICAvLyB0aGUgcmVhbCBtYWdpYyBoZXJlIGlzIHRoYXQgdGhlIHNvcnQgdmFyaWFibGUgaXMgYmVpbmcgdXNlZCBpbiBzZXZlcmFsIHBsYWNlc1xyXG4gICAgLy8gaW5jbHVkaW5nIGhlcmUgdG8gc2V0IHRoZSBwaXBlIHNvcnRpbmcsIGluIHRoZSBTb3J0YWJsZUhlYWRlciBjb21wb25lbnQgdG8gc2hvdyBhbmQgaGlkZVxyXG4gICAgLy8gdGhlIGhlYWRlciBpY29ucywgYXMgd2VsbCBhcyBpbiBTb3J0YWJsZUhlYWRlciB0byBjaGFuZ2UgdGhlIHNvcnQgb3JkZXIgb24gaGVhZGVyIGNsaWNrcy5cclxuICAgIC8vIFNvIHdlIHBhc3MgdGhlIFNBTUUgc29ydCB2YXIgdG8gYWxsIFNvcnRhYmxlSGVhZGVyIGRpcmVjdGl2ZXMgYW5kIGFsbCB3b3JrIHdpdGggaXRcclxuICAgIC8vIGluIGJvdGggZGlzcGxheWluZyBhbmQgdGhlIHNvcnRpbmcgbWVjaGFuaWNzXHJcbiAgICAvLyB3ZSBhbHNvIHVzZSBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaE9ic2VydmUgdG8gbWFrZSBzdXJlIHdlIHVzZVxyXG4gICAgLy8gZWZmaWNpZW50IHJlbmRlcmluZyBvZiB0aGUgcGFnZSBvbmx5IHdoZW4gdGhlIE9ic2VydmFibGUgaXMgY2hhbmdlc1xyXG4gICAgcHVibGljIHNvcnQ6IHtmaWVsZDogc3RyaW5nLCBkZXNjOiBib29sZWFufSA9IHtmaWVsZDogbnVsbCwgZGVzYzogZmFsc2V9O1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdlYXRoZXJTZXJ2aWNlOldlYXRoZXJTZXJ2aWNlLCBwcml2YXRlIGNvbW1Ccm9rZXI6Q29tbUJyb2tlcikge1xyXG4gICAgICAgIHRoaXMubGlzdGVuV2VhdGhlcklucHV0KCk7XHJcbiAgICAgICAgdGhpcy5jb21tQnJva2VyLmdldFNlcnZpY2UoQ29uc3RzLlNlcnZpY2VzKCkuUHJvcGVydGllcykuc2V0UHJvcFZpZXcoJ1dlYXRoZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgdGhpcy56aXBDb250cm9sLnVwZGF0ZVZhbHVlKCc5MTMwMScpO1xyXG4gICAgfVxyXG5cclxuICAgIGxpc3RlbldlYXRoZXJJbnB1dCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53ZWF0aGVySXRlbXMgPSB0aGlzLnppcENvbnRyb2wudmFsdWVDaGFuZ2VzXHJcbiAgICAgICAgICAgIC5kZWJvdW5jZVRpbWUoNDAwKVxyXG4gICAgICAgICAgICAuZGlzdGluY3RVbnRpbENoYW5nZWQoKVxyXG4gICAgICAgICAgICAuZmlsdGVyKCh6aXA6c3RyaW5nKT0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB6aXAubGVuZ3RoID4gMztcclxuICAgICAgICAgICAgICAgIC8vIHN3aXRjaE1hcCBpcyByZWFsbHkgY29vbCBhcyBpdCB3aWxsIGJvdGggZmxhdE1hcCBvdXIgT2JzZXJ2YWJsZXNcclxuICAgICAgICAgICAgICAgIC8vIGFzIHdlbGwgYXMgaXQgdW5zdWJzY3JpYmVzIGZyb20gYWxsIHByZXZpb3VzIC8gcGVuZGluZyBjYWxscyB0byBzZXJ2ZXIgYW5kIG9ubHlcclxuICAgICAgICAgICAgICAgIC8vIGxpc3RlbiB0byB0byBuZXdseSBjcmVhdGVkIE9ic2VydmFibGVcclxuICAgICAgICAgICAgfSkuc3dpdGNoTWFwKHppcCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53ZWF0aGVyU2VydmljZS5zZWFyY2goYCR7emlwfS8xYClcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
