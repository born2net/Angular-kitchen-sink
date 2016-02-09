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
            var news = JSON.parse(res._body);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2RpZ2cvZGlnZ2xvYWRlci50cyJdLCJuYW1lcyI6WyJEaWdnTG9hZGVyIiwiRGlnZ0xvYWRlci5jb25zdHJ1Y3RvciIsIkRpZ2dMb2FkZXIubG9hZERpZ2dzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBb0MsZUFBZSxDQUFDLENBQUE7QUFDcEQscUJBQW1CLGVBQWUsQ0FBQyxDQUFBO0FBQ25DLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQixRQUFPLCtCQUErQixDQUFDLENBQUE7QUFDdkMsUUFBTyw0QkFBNEIsQ0FBQyxDQUFBO0FBQ3BDLFFBQU8seUJBQXlCLENBQUMsQ0FBQTtBQUNqQywyQkFBeUIsaUJBQWlCLENBQUMsQ0FBQTtBQU8zQztJQWFJQSxvQkFBb0JBLElBQVNBO1FBQVRDLFNBQUlBLEdBQUpBLElBQUlBLENBQUtBO1FBQ3pCQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQTtJQUN2QkEsQ0FBQ0E7SUFDREQsOEJBQVNBLEdBQVRBLFVBQVVBLE1BQVVBLEVBQUVBLEtBQWFBO1FBQy9CRSxNQUFNQSxHQUFHQSxNQUFNQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQTtRQUM5QkEsSUFBSUEsQ0FBQ0EsR0FBT0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0Esd0NBQXdDQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUMvRUEsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsVUFBQ0EsR0FBR0E7WUFDWEEsSUFBSUEsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7WUFDakNBLE1BQU1BLENBQUNBLHVCQUFVQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUN0Q0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsVUFBVUEsSUFBVUE7WUFDMUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoRCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUM7UUFDTCxDQUFDLENBQUNBLENBQUNBLFNBQVNBLENBQUNBLFVBQVVBLENBQU9BO1lBQzFCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUFDQSxDQUFDQTtJQUNQQSxDQUFDQTtJQTdCTEY7UUFBQ0EsaUJBQVVBLEVBQUVBOzttQkE4QlpBO0lBQURBLGlCQUFDQTtBQUFEQSxDQTlCQSxBQThCQ0EsSUFBQTtBQW5CWSxrQkFBVSxhQW1CdEIsQ0FBQSIsImZpbGUiOiJjb21wcy9kaWdnL0RpZ2dMb2FkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtIdHRwfSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9mcm9tQXJyYXknO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21lcmdlTWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9yZXRyeSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRGlnZyB7XHJcbiAgICB0aXRsZTpzdHJpbmc7XHJcbiAgICBzdWJqZWN0OnN0cmluZztcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG4vKipcclxuICogVGhpcyBzZXJ2aWNlIGlzIGEgdGhpbiB3cmFwcGVyIGFyb3VuZCBIdHRwLCB1c2VkIHRvIGZldGNoIGFcclxuICogbGlzdCBvZiBEaWdnc1xyXG4gKlxyXG4gKiBUaGUgc2VydmljZSB3aWxsIGF1dG9tYXRpY2FsbHkgdW53cmFwIHRoZSByZXNwb25zZSBhbmQgcmV0dXJuXHJcbiAqIGFuIGFycmF5IG9mIERpZ2dzXHJcbiAqXHJcbiAqIElmIHRoZSByZXF1ZXN0IGZhaWxzIG9uY2UsIHRoZSBzZXJ2aWNlIHdpbGwgaW5kaXNjcmltaW5hdGVseVxyXG4gKiByZXRyeSB0aGUgcmVxdWVzdCB3aXRoIHRoZSBzYW1lIHZhbHVlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIERpZ2dMb2FkZXIge1xyXG4gICAgcHJpdmF0ZSBtX2h0dHA6SHR0cDtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwKSB7XHJcbiAgICAgICAgdGhpcy5tX2h0dHAgPSBodHRwO1xyXG4gICAgfVxyXG4gICAgbG9hZERpZ2dzKGZpbHRlcjphbnksIGRpZ2dzOklEaWdnW10pIHtcclxuICAgICAgICBmaWx0ZXIgPSBmaWx0ZXIudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBsZXQgczphbnkgPSB0aGlzLm1faHR0cC5nZXQoJ2h0dHBzOi8vc2VjdXJlLmRpZ2l0YWxzaWduYWdlLmNvbS9EaWdnJykucmV0cnkoMik7XHJcbiAgICAgICAgcy5tZXJnZU1hcCgocmVzKT0+IHtcclxuICAgICAgICAgICAgbGV0IG5ld3MgPSBKU09OLnBhcnNlKHJlcy5fYm9keSk7XHJcbiAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmZyb21BcnJheShuZXdzKTtcclxuICAgICAgICB9KS5maWx0ZXIoZnVuY3Rpb24gKGRhdGE6SURpZ2cpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEudGl0bGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlcikgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5zdWJzY3JpYmUoZnVuY3Rpb24gKHY6SURpZ2cpIHtcclxuICAgICAgICAgICAgZGlnZ3MucHVzaCh2KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
