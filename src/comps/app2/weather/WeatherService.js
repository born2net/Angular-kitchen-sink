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
var http_1 = require('angular2/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/do');
require('rxjs/add/observable/empty');
require('rxjs/add/observable/empty');
var WeatherService = (function () {
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
})();
exports.WeatherService = WeatherService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDIvd2VhdGhlci93ZWF0aGVyc2VydmljZS50cyJdLCJuYW1lcyI6WyJXZWF0aGVyU2VydmljZSIsIldlYXRoZXJTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiV2VhdGhlclNlcnZpY2Uuc2VhcmNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMscUJBQW9ELGVBQWUsQ0FBQyxDQUFBO0FBQ3BFLDJCQUF5QixpQkFBaUIsQ0FBQyxDQUFBO0FBQzNDLFFBQU8sc0JBQXNCLENBQUMsQ0FBQTtBQUM5QixRQUFPLDJCQUNQLENBQUMsQ0FEaUM7QUFDbEMsUUFBTywyQkFDUCxDQUFDLENBRGlDO0FBR2xDO0lBSUlBLHdCQUFvQkEsSUFBU0E7UUFBVEMsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBS0E7SUFDN0JBLENBQUNBO0lBRURELCtCQUFNQSxHQUFOQSxVQUFPQSxLQUFZQTtRQU9mRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQTthQUNYQSxHQUFHQSxDQUFDQSxLQUFHQSxjQUFjQSxDQUFDQSxRQUFRQSxHQUFHQSxLQUFPQSxDQUFDQTthQUN6Q0EsRUFBRUEsQ0FBQ0EsVUFBQUEsQ0FBQ0E7WUFDREEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsdUJBQXFCQSxDQUFDQSxDQUFDQSxNQUFRQSxDQUFDQSxDQUFBQTtRQUNoREEsQ0FBQ0EsQ0FBQ0E7YUFDREEsR0FBR0EsQ0FBQ0EsVUFBQ0EsR0FBT0EsSUFBS0EsT0FBQUEsR0FBR0EsQ0FBQ0EsSUFBSUEsRUFBRUEsRUFBVkEsQ0FBVUEsQ0FBQ0E7YUFDNUJBLEdBQUdBLENBQUNBLFVBQUNBLENBQUNBO1lBQ0hBLElBQUlBLEtBQUtBLEdBQXVCQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQTtZQUNsREEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7UUFDakJBLENBQUNBLENBQUNBO2FBQ0RBLEtBQUtBLENBQUNBLFVBQVVBLENBQUNBO1lBQ2QsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUIsQ0FBQyxDQUFDQSxDQUFDQTtJQUVYQSxDQUFDQTtJQTFCTUYsdUJBQVFBLEdBQVVBLDRDQUE0Q0EsQ0FBQ0E7SUFGMUVBO1FBQUNBLGlCQUFVQSxFQUFFQTs7dUJBNkJaQTtJQUFEQSxxQkFBQ0E7QUFBREEsQ0E3QkEsQUE2QkNBLElBQUE7QUE1Qlksc0JBQWMsaUJBNEIxQixDQUFBIiwiZmlsZSI6ImNvbXBzL2FwcDIvd2VhdGhlci9XZWF0aGVyU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7SHR0cCwgUmVxdWVzdE9wdGlvbnMsIFVSTFNlYXJjaFBhcmFtc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9lbXB0eSdcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2VtcHR5J1xyXG5pbXBvcnQge0lXZWF0aGVySXRlbX0gZnJvbSBcIi4vSVdlYXRoZXJcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdlYXRoZXJTZXJ2aWNlIHtcclxuICAgIHN0YXRpYyBCQVNFX1VSTDpzdHJpbmcgPSAnaHR0cHM6Ly9zZWN1cmUuZGlnaXRhbHNpZ25hZ2UuY29tL1dlYXRoZXIvJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cCkge1xyXG4gICAgfVxyXG5cclxuICAgIHNlYXJjaChxdWVyeTpzdHJpbmcpOk9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgLy8gaWYgeW91IHdpc2ggdG8gdXNlID9xPXBhcmFtX2hlcmUgeW91IGNhbiB1c2VcclxuICAgICAgICAvL2NvbnN0IHNlYXJjaDpVUkxTZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgICAgICAgLy9zZWFyY2guc2V0KCdxJywgcXVlcnkpO1xyXG4gICAgICAgIC8vcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7V2VhdGhlclNlcnZpY2UuQkFTRV9VUkx9YCwgbmV3IFJlcXVlc3RPcHRpb25zKHtzZWFyY2h9KSlcclxuXHJcbiAgICAgICAgLy8gZG8gaXMgYSBncmVhdCB3YXkgdG8gdHJhY2UgZm9yIGRlYnVnZ2luZyBPYnNlcnZhYmxlc1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLmdldChgJHtXZWF0aGVyU2VydmljZS5CQVNFX1VSTH0ke3F1ZXJ5fWApXHJcbiAgICAgICAgICAgIC5kbyh4ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBXZWF0aGVyIHJlc3BvbnNlOiAke3guc3RhdHVzfWApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5tYXAoKHJlczphbnkpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5tYXAoKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtczpBcnJheTxJV2VhdGhlckl0ZW0+ID0gZVswXS5kYXRhLndlYXRoZXI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuZW1wdHkoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgLy8ubWFwKChpdGVtOiBBcnJheTx7aXRlbTogSVdlYXRoZXJJdGVtfT4pID0+IGl0ZW0ubWFwKChpdGVtOiB7c2hvdzogSVdlYXRoZXJJdGVtfSkpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
