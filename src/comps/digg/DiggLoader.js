System.register(["@angular/core", "@angular/http", 'rxjs/add/operator/map', 'rxjs/add/observable/from', 'rxjs/add/operator/mergeMap', 'rxjs/add/operator/retry', "rxjs/Observable"], function(exports_1, context_1) {
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
    var DiggLoader;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            DiggLoader = (function () {
                function DiggLoader(http) {
                    this.http = http;
                    this.m_http = http;
                }
                DiggLoader.prototype.loadDiggs = function (filter, diggs) {
                    filter = filter.toLowerCase();
                    var s = this.m_http.get('https://secure.digitalsignage.com/Digg').retry(2);
                    s.mergeMap(function (res) {
                        var news = res.json();
                        return Observable_1.Observable.from(news);
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
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
                ], DiggLoader);
                return DiggLoader;
                var _a;
            }());
            exports_1("DiggLoader", DiggLoader);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2RpZ2cvRGlnZ0xvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF3QkE7Z0JBR0ksb0JBQW9CLElBQVM7b0JBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztvQkFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBRUQsOEJBQVMsR0FBVCxVQUFVLE1BQVUsRUFBRSxLQUFhO29CQUMvQixNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQWE5QixJQUFJLENBQUMsR0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDL0UsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFDLEdBQUc7d0JBQ1gsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUN0QixNQUFNLENBQUMsdUJBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2pDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQVU7d0JBQzFCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDaEQsTUFBTSxDQUFDLElBQUksQ0FBQzt3QkFDaEIsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFPO3dCQUMxQixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNsQixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQTNDTDtvQkFBQyxpQkFBVSxFQUFFOzs4QkFBQTtnQkE0Q2IsaUJBQUM7O1lBQUQsQ0FqQ0EsQUFpQ0MsSUFBQTtZQWpDRCxtQ0FpQ0MsQ0FBQSIsImZpbGUiOiJjb21wcy9kaWdnL0RpZ2dMb2FkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9mcm9tJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tZXJnZU1hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvcmV0cnknO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURpZ2cge1xyXG4gICAgdGl0bGU6c3RyaW5nO1xyXG4gICAgc3ViamVjdDpzdHJpbmc7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuLyoqXHJcbiAqIFRoaXMgc2VydmljZSBpcyBhIHRoaW4gd3JhcHBlciBhcm91bmQgSHR0cCwgdXNlZCB0byBmZXRjaCBhXHJcbiAqIGxpc3Qgb2YgRGlnZ3NcclxuICpcclxuICogVGhlIHNlcnZpY2Ugd2lsbCBhdXRvbWF0aWNhbGx5IHVud3JhcCB0aGUgcmVzcG9uc2UgYW5kIHJldHVyblxyXG4gKiBhbiBhcnJheSBvZiBEaWdnc1xyXG4gKlxyXG4gKiBJZiB0aGUgcmVxdWVzdCBmYWlscyBvbmNlLCB0aGUgc2VydmljZSB3aWxsIGluZGlzY3JpbWluYXRlbHlcclxuICogcmV0cnkgdGhlIHJlcXVlc3Qgd2l0aCB0aGUgc2FtZSB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBEaWdnTG9hZGVyIHtcclxuICAgIHByaXZhdGUgbV9odHRwOkh0dHA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHApIHtcclxuICAgICAgICB0aGlzLm1faHR0cCA9IGh0dHA7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZERpZ2dzKGZpbHRlcjphbnksIGRpZ2dzOklEaWdnW10pIHtcclxuICAgICAgICBmaWx0ZXIgPSBmaWx0ZXIudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgLy8gQW5vdGhlciBvcHRpb25zIGlzIHRvIHVzZSBqc29ucCBpZiBubyBDT1JTIHN1cHBvcnQgdmlhOlxyXG4gICAgICAgIC8vIGpzb25wLmdldCgnaHR0cHM6Ly9zZWN1cmUuZGlnaXRhbHNpZ25hZ2UuY29tL0RpZ2c/Y2FsbGJhY2s9SlNPTlBfQ0FMTEJBQ0snKS5tYXAocmVzLi4uXHJcblxyXG4gICAgICAgIC8vIGFuZCBhbm90aGVyIHNlYXJjaCBwYXJhbXMgYW5kIHJlcXVlc3Qgb3B0aW9uczpcclxuICAgICAgICAvLyBsZXQgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xyXG4gICAgICAgIC8vIHNlYXJjaFBhcmFtcy5zZXQoJ3NvcnQnLCAnYXNjZW5kaW5nJyk7XHJcbiAgICAgICAgLy8gbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe3NlYXJjaDogc2VhcmNoUGFyYW1zfSk7XHJcbiAgICAgICAgLy8gdGhpcy5tX2h0dHAuZ2V0KCdodHRwczovL3NlY3VyZS5kaWdpdGFsc2lnbmFnZS5jb20vRGlnZycsIG9wdGlvbnMpIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS50ZXh0KCkpO1xyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICBsZXQgczphbnkgPSB0aGlzLm1faHR0cC5nZXQoJ2h0dHBzOi8vc2VjdXJlLmRpZ2l0YWxzaWduYWdlLmNvbS9EaWdnJykucmV0cnkoMik7XHJcbiAgICAgICAgcy5tZXJnZU1hcCgocmVzKT0+IHtcclxuICAgICAgICAgICAgbGV0IG5ld3MgPSByZXMuanNvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5mcm9tKG5ld3MpO1xyXG4gICAgICAgIH0pLmZpbHRlcihmdW5jdGlvbiAoZGF0YTpJRGlnZykge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS50aXRsZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZmlsdGVyKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnN1YnNjcmliZShmdW5jdGlvbiAodjpJRGlnZykge1xyXG4gICAgICAgICAgICBkaWdncy5wdXNoKHYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
