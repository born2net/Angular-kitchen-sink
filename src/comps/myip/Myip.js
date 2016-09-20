System.register(["@angular/core", 'rxjs/Observable', 'rxjs/add/operator/do', "rxjs/AsyncSubject", '@angular/http'], function(exports_1, context_1) {
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
    var core_1, Observable_1, AsyncSubject_1, http_1;
    var MyIp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (AsyncSubject_1_1) {
                AsyncSubject_1 = AsyncSubject_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            MyIp = (function () {
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
                        template: "\n                <h3>Your ip address is: {{ipAddress}}</h3>\n                <small>I am MyIp component</small>\n                <!--\n                 This is an example of providing a default template only if one is not provided by consumer of\n                 the component's ng-content template \n                -->\n                total children in ng-content: {{contentWrap.childNodes.length}}\n                <div #contentWrap><ng-content></ng-content></div>\n                <div class=\"timer\" *ngIf=\"contentWrap.childNodes.length === 1\">\n                  <div class=\"time\"> TOTAL {{contentWrap.childNodes.length}}</div></div>"
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
                ], MyIp);
                return MyIp;
                var _a;
            }());
            exports_1("MyIp", MyIp);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL215aXAvTXlpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5QkE7Z0JBSUksY0FBb0IsSUFBUztvQkFKakMsaUJBbUNDO29CQS9CdUIsU0FBSSxHQUFKLElBQUksQ0FBSztvQkFLekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07d0JBQ3JFLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUNqRCxDQUFDLENBQUMsQ0FBQztvQkFFSCxVQUFVLENBQUMsVUFBQSxDQUFDO3dCQUNSLEtBQUksQ0FBQyxPQUFPLENBQUMseUNBQXlDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNOzRCQUNwRSxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQzt3QkFDakQsQ0FBQyxDQUFDLENBQUM7b0JBQ1AsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO2dCQUNaLENBQUM7Z0JBT0Qsc0JBQU8sR0FBUCxVQUFRLEdBQUc7b0JBQVgsaUJBU0M7b0JBUkcsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNoQixNQUFNLENBQUMsdUJBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQyxRQUFRO3dCQUM5QixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzRCQUNoQixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksMkJBQVksRUFBYyxDQUFDOzRCQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFRLENBQUMsQ0FBQzt3QkFDeEQsQ0FBQzt3QkFDRCxNQUFNLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzVDLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBaERMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLE1BQU07d0JBQ2hCLFFBQVEsRUFBRSx5b0JBVTJFO3FCQUN4RixDQUFDOzt3QkFBQTtnQkFvQ0YsV0FBQzs7WUFBRCxDQW5DQSxBQW1DQyxJQUFBO1lBbkNELHVCQW1DQyxDQUFBIiwiZmlsZSI6ImNvbXBzL215aXAvTXlpcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0NvbnN0c30gZnJvbSBcIi4uLy4uL0NvbnRzXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCB7QXN5bmNTdWJqZWN0fSBmcm9tIFwicnhqcy9Bc3luY1N1YmplY3RcIjtcclxuaW1wb3J0IHtIdHRwfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuXHJcbmludGVyZmFjZSBJSXBBZGRyZXNzIHtcclxuICAgIGlwOnN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ015SXAnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICAgICAgICAgIDxoMz5Zb3VyIGlwIGFkZHJlc3MgaXM6IHt7aXBBZGRyZXNzfX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsPkkgYW0gTXlJcCBjb21wb25lbnQ8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgPCEtLVxyXG4gICAgICAgICAgICAgICAgIFRoaXMgaXMgYW4gZXhhbXBsZSBvZiBwcm92aWRpbmcgYSBkZWZhdWx0IHRlbXBsYXRlIG9ubHkgaWYgb25lIGlzIG5vdCBwcm92aWRlZCBieSBjb25zdW1lciBvZlxyXG4gICAgICAgICAgICAgICAgIHRoZSBjb21wb25lbnQncyBuZy1jb250ZW50IHRlbXBsYXRlIFxyXG4gICAgICAgICAgICAgICAgLS0+XHJcbiAgICAgICAgICAgICAgICB0b3RhbCBjaGlsZHJlbiBpbiBuZy1jb250ZW50OiB7e2NvbnRlbnRXcmFwLmNoaWxkTm9kZXMubGVuZ3RofX1cclxuICAgICAgICAgICAgICAgIDxkaXYgI2NvbnRlbnRXcmFwPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lclwiICpuZ0lmPVwiY29udGVudFdyYXAuY2hpbGROb2Rlcy5sZW5ndGggPT09IDFcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVcIj4gVE9UQUwge3tjb250ZW50V3JhcC5jaGlsZE5vZGVzLmxlbmd0aH19PC9kaXY+PC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXlJcCB7XHJcbiAgICBwcml2YXRlIGlwQWRkcmVzczpzdHJpbmc7XHJcbiAgICBwcml2YXRlIHN1YmplY3Q6QXN5bmNTdWJqZWN0PElJcEFkZHJlc3M+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwKSB7XHJcblxyXG4gICAgICAgIC8vIERlbW9uc3RyYXRlcyBBc3luY1N1YmplY3Qgd2hlcmUgdGhlIGZpcnN0IGNhbGwgd2lsbCBnbyBvdXQgdG8gc2VydmVyIHRvIGdyYWIgeW91clxyXG4gICAgICAgIC8vIGlwLCBidXQgMm5kIGNhbGwgKHZpYSB0aW1lb3V0KSB3aWxsIGdyYWIgaXQgZGlyZWN0bHkgZnJvbSB0aGUgU3ViamVjdCBuZXZlciBuZWVkaW5nXHJcbiAgICAgICAgLy8gdG8gaGl0IHRoZSBzZXJ2ZXIgYSBzZWNvbmQgdGltZSAod2VsbCB1bmxlc3MgdGhpcyB3aG9sZSBjb21wb25lbnQgZ2V0cyByZS1pbnN0YW50aWF0ZWQgdGhhdCBpcylcclxuICAgICAgICB0aGlzLmdldE15SXAoJ2h0dHBzOi8vc2VjdXJlLmRpZ2l0YWxzaWduYWdlLmNvbS9nZXRJcCcpLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXBBZGRyZXNzID0gSlNPTi5wYXJzZShyZXN1bHQuX2JvZHkpLmlwO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGU9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0TXlJcCgnaHR0cHM6Ly9zZWN1cmUuZGlnaXRhbHNpZ25hZ2UuY29tL2dldElwJykuc3Vic2NyaWJlKHJlc3VsdD0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXBBZGRyZXNzID0gSlNPTi5wYXJzZShyZXN1bHQuX2JvZHkpLmlwO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCAyMDAwKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgIFVzaW5nIGdldE15SXAgd2UgdGFrZSBhZHZhbnRhZ2Ugb2YgQXN5bmNTdWJqZWN0IHRvIHJldHJpZXZlIGRhdGEgZnJvbSBzZXJ2ZXIgb25seSBvbmNlXHJcbiAgICAgYXMgeW91ciBpcCBkb2VzIG5veSBjaGFuZ2UgcGVyIHNlc3Npb24uIEFzeW5jU3ViamVjdCBpcyBraW5kIG9mIGxpa2UgYSBQcm9taXNlIGFzIGl0IHJlc29sdmVzXHJcbiAgICAgb25jZSBhbmQgcmVtZW1iZXJzIGFuZCBlbWl0cyBpdHMgbGFzdCB2YWx1ZVxyXG4gICAgICoqL1xyXG4gICAgZ2V0TXlJcCh1cmwpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc3ViamVjdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJqZWN0ID0gbmV3IEFzeW5jU3ViamVjdDxJSXBBZGRyZXNzPigpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5odHRwLmdldCh1cmwpLnN1YnNjcmliZSgodGhpcy5zdWJqZWN0KSBhcyBhbnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN1YmplY3Quc3Vic2NyaWJlKG9ic2VydmVyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
