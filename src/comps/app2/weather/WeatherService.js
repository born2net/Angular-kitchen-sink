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
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
                ], WeatherService);
                return WeatherService;
                var _a;
            }());
            exports_1("WeatherService", WeatherService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDIvd2VhdGhlci9XZWF0aGVyU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0E7Z0JBR0ksd0JBQW9CLElBQVM7b0JBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztnQkFDN0IsQ0FBQztnQkFFRCwrQkFBTSxHQUFOLFVBQU8sS0FBWTtvQkFPZixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7eUJBQ1gsR0FBRyxDQUFDLEtBQUcsY0FBYyxDQUFDLFFBQVEsR0FBRyxLQUFPLENBQUM7eUJBQ3pDLEVBQUUsQ0FBQyxVQUFBLENBQUM7d0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBcUIsQ0FBQyxDQUFDLE1BQVEsQ0FBQyxDQUFBO29CQUNoRCxDQUFDLENBQUM7eUJBQ0QsR0FBRyxDQUFDLFVBQUMsR0FBTyxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzt5QkFDNUIsR0FBRyxDQUFDLFVBQUMsQ0FBQzt3QkFDSCxJQUFJLEtBQUssR0FBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ2xELE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ2pCLENBQUMsQ0FBQzt5QkFDRCxLQUFLLENBQUMsVUFBVSxDQUFDO3dCQUNkLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUM5QixDQUFDLENBQUMsQ0FBQztnQkFFWCxDQUFDO2dCQTFCTSx1QkFBUSxHQUFVLDRDQUE0QyxDQUFDO2dCQUYxRTtvQkFBQyxpQkFBVSxFQUFFOztrQ0FBQTtnQkE2QmIscUJBQUM7O1lBQUQsQ0E1QkEsQUE0QkMsSUFBQTtZQTVCRCwyQ0E0QkMsQ0FBQSIsImZpbGUiOiJjb21wcy9hcHAyL3dlYXRoZXIvV2VhdGhlclNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHAsIFJlcXVlc3RPcHRpb25zLCBVUkxTZWFyY2hQYXJhbXN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZW1wdHknXHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9lbXB0eSdcclxuaW1wb3J0IHtJV2VhdGhlckl0ZW19IGZyb20gXCIuL0lXZWF0aGVyXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXZWF0aGVyU2VydmljZSB7XHJcbiAgICBzdGF0aWMgQkFTRV9VUkw6c3RyaW5nID0gJ2h0dHBzOi8vc2VjdXJlLmRpZ2l0YWxzaWduYWdlLmNvbS9XZWF0aGVyLyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHApIHtcclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2gocXVlcnk6c3RyaW5nKTpPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIC8vIGlmIHlvdSB3aXNoIHRvIHVzZSA/cT1wYXJhbV9oZXJlIHlvdSBjYW4gdXNlXHJcbiAgICAgICAgLy9jb25zdCBzZWFyY2g6VVJMU2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xyXG4gICAgICAgIC8vc2VhcmNoLnNldCgncScsIHF1ZXJ5KTtcclxuICAgICAgICAvL3JldHVybiB0aGlzLmh0dHAuZ2V0KGAke1dlYXRoZXJTZXJ2aWNlLkJBU0VfVVJMfWAsIG5ldyBSZXF1ZXN0T3B0aW9ucyh7c2VhcmNofSkpXHJcblxyXG4gICAgICAgIC8vIGRvIGlzIGEgZ3JlYXQgd2F5IHRvIHRyYWNlIGZvciBkZWJ1Z2dpbmcgT2JzZXJ2YWJsZXNcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5nZXQoYCR7V2VhdGhlclNlcnZpY2UuQkFTRV9VUkx9JHtxdWVyeX1gKVxyXG4gICAgICAgICAgICAuZG8oeCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgV2VhdGhlciByZXNwb25zZTogJHt4LnN0YXR1c31gKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAubWFwKChyZXM6YW55KSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAubWFwKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbXM6QXJyYXk8SVdlYXRoZXJJdGVtPiA9IGVbMF0uZGF0YS53ZWF0aGVyO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmVtcHR5KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIC8vLm1hcCgoaXRlbTogQXJyYXk8e2l0ZW06IElXZWF0aGVySXRlbX0+KSA9PiBpdGVtLm1hcCgoaXRlbToge3Nob3c6IElXZWF0aGVySXRlbX0pKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
