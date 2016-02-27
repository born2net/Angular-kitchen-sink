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
var http_1 = require("angular2/http");
require('rxjs/add/operator/map');
require('rxjs/add/observable/fromArray');
require('rxjs/add/operator/mergeMap');
require('rxjs/add/operator/retry');
var Observable_1 = require("rxjs/Observable");
var DiggLoader = (function () {
    function DiggLoader(http) {
        this.http = http;
        this.m_http = http;
    }
    DiggLoader.prototype.loadDiggs = function (filter, diggs) {
        filter = filter.toLowerCase();
        var s = this.m_http.get('https://secure.digitalsignage.com/Digg').retry(2);
        s.mergeMap(function (res) {
            var news = res.json();
            return Observable_1.Observable.fromArray(news);
        }).filter(function (data) {
            if (data.title.toLowerCase().indexOf(filter) > -1) {
                return true;
            }
        }).subscribe(function (v) {
            diggs.push(v);
        });
    };
    DiggLoader = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DiggLoader);
    return DiggLoader;
})();
exports.DiggLoader = DiggLoader;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2RpZ2cvZGlnZ2xvYWRlci50cyJdLCJuYW1lcyI6WyJEaWdnTG9hZGVyIiwiRGlnZ0xvYWRlci5jb25zdHJ1Y3RvciIsIkRpZ2dMb2FkZXIubG9hZERpZ2dzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBb0MsZUFBZSxDQUFDLENBQUE7QUFDcEQscUJBQW1CLGVBQWUsQ0FBQyxDQUFBO0FBQ25DLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQixRQUFPLCtCQUErQixDQUFDLENBQUE7QUFDdkMsUUFBTyw0QkFBNEIsQ0FBQyxDQUFBO0FBQ3BDLFFBQU8seUJBQXlCLENBQUMsQ0FBQTtBQUNqQywyQkFBeUIsaUJBQWlCLENBQUMsQ0FBQTtBQU8zQztJQWNJQSxvQkFBb0JBLElBQVNBO1FBQVRDLFNBQUlBLEdBQUpBLElBQUlBLENBQUtBO1FBQ3pCQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQTtJQUN2QkEsQ0FBQ0E7SUFFREQsOEJBQVNBLEdBQVRBLFVBQVVBLE1BQVVBLEVBQUVBLEtBQWFBO1FBQy9CRSxNQUFNQSxHQUFHQSxNQUFNQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQTtRQWE5QkEsSUFBSUEsQ0FBQ0EsR0FBT0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0Esd0NBQXdDQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUMvRUEsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsVUFBQ0EsR0FBR0E7WUFDWEEsSUFBSUEsSUFBSUEsR0FBR0EsR0FBR0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7WUFDdEJBLE1BQU1BLENBQUNBLHVCQUFVQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUN0Q0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsVUFBVUEsSUFBVUE7WUFDMUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoRCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUM7UUFDTCxDQUFDLENBQUNBLENBQUNBLFNBQVNBLENBQUNBLFVBQVVBLENBQU9BO1lBQzFCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUFDQSxDQUFDQTtJQUNQQSxDQUFDQTtJQTNDTEY7UUFBQ0EsaUJBQVVBLEVBQUVBOzttQkE0Q1pBO0lBQURBLGlCQUFDQTtBQUFEQSxDQTVDQSxBQTRDQ0EsSUFBQTtBQWpDWSxrQkFBVSxhQWlDdEIsQ0FBQSIsImZpbGUiOiJjb21wcy9kaWdnL0RpZ2dMb2FkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtIdHRwfSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9mcm9tQXJyYXknO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21lcmdlTWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9yZXRyeSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRGlnZyB7XHJcbiAgICB0aXRsZTpzdHJpbmc7XHJcbiAgICBzdWJqZWN0OnN0cmluZztcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG4vKipcclxuICogVGhpcyBzZXJ2aWNlIGlzIGEgdGhpbiB3cmFwcGVyIGFyb3VuZCBIdHRwLCB1c2VkIHRvIGZldGNoIGFcclxuICogbGlzdCBvZiBEaWdnc1xyXG4gKlxyXG4gKiBUaGUgc2VydmljZSB3aWxsIGF1dG9tYXRpY2FsbHkgdW53cmFwIHRoZSByZXNwb25zZSBhbmQgcmV0dXJuXHJcbiAqIGFuIGFycmF5IG9mIERpZ2dzXHJcbiAqXHJcbiAqIElmIHRoZSByZXF1ZXN0IGZhaWxzIG9uY2UsIHRoZSBzZXJ2aWNlIHdpbGwgaW5kaXNjcmltaW5hdGVseVxyXG4gKiByZXRyeSB0aGUgcmVxdWVzdCB3aXRoIHRoZSBzYW1lIHZhbHVlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIERpZ2dMb2FkZXIge1xyXG4gICAgcHJpdmF0ZSBtX2h0dHA6SHR0cDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cCkge1xyXG4gICAgICAgIHRoaXMubV9odHRwID0gaHR0cDtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkRGlnZ3MoZmlsdGVyOmFueSwgZGlnZ3M6SURpZ2dbXSkge1xyXG4gICAgICAgIGZpbHRlciA9IGZpbHRlci50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICAvLyBBbm90aGVyIG9wdGlvbnMgaXMgdG8gdXNlIGpzb25wIGlmIG5vIENPUlMgc3VwcG9ydCB2aWE6XHJcbiAgICAgICAgLy8ganNvbnAuZ2V0KCdodHRwczovL3NlY3VyZS5kaWdpdGFsc2lnbmFnZS5jb20vRGlnZz9jYWxsYmFjaz1KU09OUF9DQUxMQkFDSycpLm1hcChyZXMuLi5cclxuXHJcbiAgICAgICAgLy8gYW5kIGFub3RoZXIgc2VhcmNoIHBhcmFtcyBhbmQgcmVxdWVzdCBvcHRpb25zOlxyXG4gICAgICAgIC8vIGxldCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgICAgICAgLy8gc2VhcmNoUGFyYW1zLnNldCgnc29ydCcsICdhc2NlbmRpbmcnKTtcclxuICAgICAgICAvLyBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7c2VhcmNoOiBzZWFyY2hQYXJhbXN9KTtcclxuICAgICAgICAvLyB0aGlzLm1faHR0cC5nZXQoJ2h0dHBzOi8vc2VjdXJlLmRpZ2l0YWxzaWduYWdlLmNvbS9EaWdnJywgb3B0aW9ucykgLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnRleHQoKSk7XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIGxldCBzOmFueSA9IHRoaXMubV9odHRwLmdldCgnaHR0cHM6Ly9zZWN1cmUuZGlnaXRhbHNpZ25hZ2UuY29tL0RpZ2cnKS5yZXRyeSgyKTtcclxuICAgICAgICBzLm1lcmdlTWFwKChyZXMpPT4ge1xyXG4gICAgICAgICAgICBsZXQgbmV3cyA9IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmZyb21BcnJheShuZXdzKTtcclxuICAgICAgICB9KS5maWx0ZXIoZnVuY3Rpb24gKGRhdGE6SURpZ2cpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEudGl0bGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlcikgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5zdWJzY3JpYmUoZnVuY3Rpb24gKHY6SURpZ2cpIHtcclxuICAgICAgICAgICAgZGlnZ3MucHVzaCh2KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
