System.register(["angular2/core", "angular2/http", 'rxjs/add/operator/map', 'rxjs/add/observable/fromArray', 'rxjs/add/operator/mergeMap', 'rxjs/add/operator/retry', "rxjs/Observable"], function(exports_1) {
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
            exports_1("DiggLoader", DiggLoader);
        }
    }
});
//# sourceMappingURL=DiggLoader.js.map