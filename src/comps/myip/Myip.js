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
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/do');
var AsyncSubject_1 = require("rxjs/subject/AsyncSubject");
var http_1 = require('angular2/http');
var MyIp = (function () {
    function MyIp(http) {
        var _this = this;
        this.http = http;
        this.getMyIp('https://secure.digitalsignage.com/getIp').subscribe(function (result) {
            _this.ipAddress = JSON.parse(result._body).ip;
        });
        setTimeout(function (e) {
            _this.getMyIp('https://secure.digitalsignage.com/getIp').subscribe(function (result) {
                _this.ipAddress = JSON.parse(result._body).ip;
            });
        }, 2000);
    }
    MyIp.prototype.getMyIp = function (url) {
        var _this = this;
        var self = this;
        return Observable_1.Observable.create(function (observer) {
            if (!_this.subject) {
                _this.subject = new AsyncSubject_1.AsyncSubject();
                self.http.get(url).subscribe((_this.subject));
            }
            return _this.subject.subscribe(observer);
        });
    };
    MyIp = __decorate([
        core_1.Component({
            selector: 'MyIp',
            template: "\n                <h3>Your ip address is: {{ipAddress}}</h3>\n                <small>I am MyIp component</small>\n                <ng-content></ng-content>\n    "
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MyIp);
    return MyIp;
})();
exports.MyIp = MyIp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL215aXAvbXlpcC50cyJdLCJuYW1lcyI6WyJNeUlwIiwiTXlJcC5jb25zdHJ1Y3RvciIsIk15SXAuZ2V0TXlJcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBRXhDLDJCQUF5QixpQkFBaUIsQ0FBQyxDQUFBO0FBQzNDLFFBQU8sc0JBQXNCLENBQUMsQ0FBQTtBQUM5Qiw2QkFBMkIsMkJBQTJCLENBQUMsQ0FBQTtBQUN2RCxxQkFBbUIsZUFBZSxDQUFDLENBQUE7QUFPbkM7SUFhSUEsY0FBb0JBLElBQVNBO1FBYmpDQyxpQkE0Q0NBO1FBL0J1QkEsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBS0E7UUFLekJBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLHlDQUF5Q0EsQ0FBQ0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsVUFBQ0EsTUFBTUE7WUFDckVBLEtBQUlBLENBQUNBLFNBQVNBLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBO1FBQ2pEQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUVIQSxVQUFVQSxDQUFDQSxVQUFBQSxDQUFDQTtZQUNSQSxLQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSx5Q0FBeUNBLENBQUNBLENBQUNBLFNBQVNBLENBQUNBLFVBQUFBLE1BQU1BO2dCQUNwRUEsS0FBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0E7WUFDakRBLENBQUNBLENBQUNBLENBQUNBO1FBQ1BBLENBQUNBLEVBQUVBLElBQUlBLENBQUNBLENBQUFBO0lBQ1pBLENBQUNBO0lBT0RELHNCQUFPQSxHQUFQQSxVQUFRQSxHQUFHQTtRQUFYRSxpQkFTQ0E7UUFSR0EsSUFBSUEsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDaEJBLE1BQU1BLENBQUNBLHVCQUFVQSxDQUFDQSxNQUFNQSxDQUFDQSxVQUFDQSxRQUFRQTtZQUM5QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsS0FBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2hCQSxLQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSwyQkFBWUEsRUFBY0EsQ0FBQ0E7Z0JBQzlDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxLQUFJQSxDQUFDQSxPQUFPQSxDQUFRQSxDQUFDQSxDQUFDQTtZQUN4REEsQ0FBQ0E7WUFDREEsTUFBTUEsQ0FBQ0EsS0FBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7UUFDNUNBLENBQUNBLENBQUNBLENBQUNBO0lBQ1BBLENBQUNBO0lBM0NMRjtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsTUFBTUE7WUFFaEJBLFFBQVFBLEVBQUVBLG1LQUlUQTtTQUNKQSxDQUFDQTs7YUFvQ0RBO0lBQURBLFdBQUNBO0FBQURBLENBNUNBLEFBNENDQSxJQUFBO0FBbkNZLFlBQUksT0FtQ2hCLENBQUEiLCJmaWxlIjoiY29tcHMvbXlpcC9NeWlwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7Q29uc3RzfSBmcm9tIFwiLi4vLi4vQ29udHNcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuaW1wb3J0IHtBc3luY1N1YmplY3R9IGZyb20gXCJyeGpzL3N1YmplY3QvQXN5bmNTdWJqZWN0XCI7XHJcbmltcG9ydCB7SHR0cH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcbi8vaW1wb3J0IHtKU09OUF9QUk9WSURFUlMsIEpzb25wfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuXHJcbmludGVyZmFjZSBJSXBBZGRyZXNzIHtcclxuICAgIGlwOiBzdHJpbmc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdNeUlwJyxcclxuICAgIC8vcHJvdmlkZXJzOiBbSlNPTlBfUFJPVklERVJTXSwgLy8gaWYgeW91IHdhbnQgdG8gdXNlIEpzb25wIGluc3RlYWRcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgICAgICAgICA8aDM+WW91ciBpcCBhZGRyZXNzIGlzOiB7e2lwQWRkcmVzc319PC9oMz5cclxuICAgICAgICAgICAgICAgIDxzbWFsbD5JIGFtIE15SXAgY29tcG9uZW50PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIE15SXAge1xyXG4gICAgcHJpdmF0ZSBpcEFkZHJlc3M6c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBzdWJqZWN0OkFzeW5jU3ViamVjdDxJSXBBZGRyZXNzPjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cCkge1xyXG5cclxuICAgICAgICAvLyBEZW1vbnN0cmF0ZXMgQXN5bmNTdWJqZWN0IHdoZXJlIHRoZSBmaXJzdCBjYWxsIHdpbGwgZ28gb3V0IHRvIHNlcnZlciB0byBncmFiIHlvdXJcclxuICAgICAgICAvLyBpcCwgYnV0IDJuZCBjYWxsICh2aWEgdGltZW91dCkgd2lsbCBncmFiIGl0IGRpcmVjdGx5IGZyb20gdGhlIFN1YmplY3QgbmV2ZXIgbmVlZGluZ1xyXG4gICAgICAgIC8vIHRvIGhpdCB0aGUgc2VydmVyIGEgc2Vjb25kIHRpbWUgKHdlbGwgdW5sZXNzIHRoaXMgd2hvbGUgY29tcG9uZW50IGdldHMgcmUtaW5zdGFudGlhdGVkIHRoYXQgaXMpXHJcbiAgICAgICAgdGhpcy5nZXRNeUlwKCdodHRwczovL3NlY3VyZS5kaWdpdGFsc2lnbmFnZS5jb20vZ2V0SXAnKS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlwQWRkcmVzcyA9IEpTT04ucGFyc2UocmVzdWx0Ll9ib2R5KS5pcDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChlPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmdldE15SXAoJ2h0dHBzOi8vc2VjdXJlLmRpZ2l0YWxzaWduYWdlLmNvbS9nZXRJcCcpLnN1YnNjcmliZShyZXN1bHQ9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlwQWRkcmVzcyA9IEpTT04ucGFyc2UocmVzdWx0Ll9ib2R5KS5pcDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgMjAwMClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICBVc2luZyBnZXRNeUlwIHdlIHRha2UgYWR2YW50YWdlIG9mIEFzeW5jU3ViamVjdCB0byByZXRyaWV2ZSBkYXRhIGZyb20gc2VydmVyIG9ubHkgb25jZVxyXG4gICAgIGFzIHlvdXIgaXAgZG9lcyBub3kgY2hhbmdlIHBlciBzZXNzaW9uLiBBc3luY1N1YmplY3QgaXMga2luZCBvZiBsaWtlIGEgUHJvbWlzZSBhcyBpdCByZXNvbHZlc1xyXG4gICAgIG9uY2UgYW5kIHJlbWVtYmVycyBhbmQgZW1pdHMgaXRzIGxhc3QgdmFsdWVcclxuICAgICAqKi9cclxuICAgIGdldE15SXAodXJsKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnN1YmplY3QpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3ViamVjdCA9IG5ldyBBc3luY1N1YmplY3Q8SUlwQWRkcmVzcz4oKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuaHR0cC5nZXQodXJsKS5zdWJzY3JpYmUoKHRoaXMuc3ViamVjdCkgYXMgYW55KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdWJqZWN0LnN1YnNjcmliZShvYnNlcnZlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
