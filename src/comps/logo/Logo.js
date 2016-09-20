System.register(['@angular/core', "rxjs/Observable", 'rxjs/add/observable/fromEvent', 'rxjs/add/operator/do', 'rxjs/add/operator/merge', 'rxjs/add/operator/distinctUntilChanged'], function(exports_1, context_1) {
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
    var core_1, Observable_1;
    var Logo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {}],
        execute: function() {
            Logo = (function () {
                function Logo(elementRef) {
                    this.elementRef = elementRef;
                    this.listenMouse();
                }
                Logo.prototype.listenMouse = function () {
                    var _this = this;
                    var over = Observable_1.Observable.fromEvent(this.elementRef.nativeElement, 'mouseover').map(function (e) {
                        return Observable_1.Observable.from([1]);
                    });
                    var out = Observable_1.Observable.fromEvent(this.elementRef.nativeElement, 'mouseout').map(function (e) {
                        return Observable_1.Observable.from([0]);
                    });
                    over.merge(out).distinctUntilChanged().subscribe(function (events) {
                        if (events.value) {
                            jQuery(_this.elementRef.nativeElement).find('.flipcard').addClass('flipped');
                        }
                        else {
                            jQuery(_this.elementRef.nativeElement).find('.flipcard').removeClass('flipped');
                        }
                    });
                };
                Logo = __decorate([
                    core_1.Component({
                        selector: 'Logo',
                        template: "\n            <div id=\"logoContainer\" class=\"reshid flip\">\n              <div class=\"flipcard\">\n                <div class=\"face front\">\n                  <img class=\"img-responsive\" src=\"assets/logo_s.png\"/>\n                </div>\n                <div class=\"face back\">\n                  <img class=\"img-responsive\" src=\"assets/logo_b.png\"/>\n                </div>\n              </div>\n            </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
                ], Logo);
                return Logo;
                var _a;
            }());
            exports_1("Logo", Logo);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2xvZ28vTG9nby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE4QkE7Z0JBQ0ksY0FBb0IsVUFBcUI7b0JBQXJCLGVBQVUsR0FBVixVQUFVLENBQVc7b0JBQ3JDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDdkIsQ0FBQztnQkFFRCwwQkFBVyxHQUFYO29CQUFBLGlCQWNDO29CQWJHLElBQUksSUFBSSxHQUFtQix1QkFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO3dCQUM3RixNQUFNLENBQUMsdUJBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO29CQUMvQixDQUFDLENBQUMsQ0FBQztvQkFDSCxJQUFJLEdBQUcsR0FBbUIsdUJBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQzt3QkFDM0YsTUFBTSxDQUFDLHVCQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtvQkFDL0IsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07d0JBQ25ELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzRCQUNmLE1BQU0sQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQ2hGLENBQUM7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ0osTUFBTSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDbkYsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQW5DTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxNQUFNO3dCQUNoQixRQUFRLEVBQUUseWJBV1Q7cUJBQ0osQ0FBQzs7d0JBQUE7Z0JBc0JGLFdBQUM7O1lBQUQsQ0FwQkEsQUFvQkMsSUFBQTtZQXBCRCx1QkFvQkMsQ0FBQSIsImZpbGUiOiJjb21wcy9sb2dvL0xvZ28uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL2FwcC5kLnRzXCIvPlxyXG5cclxuaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb21FdmVudCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21lcmdlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kaXN0aW5jdFVudGlsQ2hhbmdlZCc7XHJcblxyXG4vKipcclxuICogTG9nbyBjb21wb25lbnQgZm9yIEFwcGxpY2F0aW9uIGhlYWRlclxyXG4gKiBhY3RpdmF0ZWQgdmlhIGVsZW1lbnRSZWYgYW5kIGxpc3RlbiB0byBtb3VzZSBldmVudHMgdmlhIGFuZ3VsYXJcclxuICogYWRhcHRlciBpbnRlcmZhY2VcclxuICoqL1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnTG9nbycsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibG9nb0NvbnRhaW5lclwiIGNsYXNzPVwicmVzaGlkIGZsaXBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxpcGNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmYWNlIGZyb250XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZVwiIHNyYz1cImFzc2V0cy9sb2dvX3MucG5nXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmFjZSBiYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZVwiIHNyYz1cImFzc2V0cy9sb2dvX2IucG5nXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExvZ28ge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOkVsZW1lbnRSZWYpIHtcclxuICAgICAgICB0aGlzLmxpc3Rlbk1vdXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGlzdGVuTW91c2UoKTp2b2lkIHtcclxuICAgICAgICB2YXIgb3ZlcjpPYnNlcnZhYmxlPGFueT4gPSBPYnNlcnZhYmxlLmZyb21FdmVudCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21vdXNlb3ZlcicpLm1hcChlPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5mcm9tKFsxXSlcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgb3V0Ok9ic2VydmFibGU8YW55PiA9IE9ic2VydmFibGUuZnJvbUV2ZW50KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbW91c2VvdXQnKS5tYXAoZT0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuZnJvbShbMF0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgb3Zlci5tZXJnZShvdXQpLmRpc3RpbmN0VW50aWxDaGFuZ2VkKCkuc3Vic2NyaWJlKGV2ZW50cyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudHMudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuZmluZCgnLmZsaXBjYXJkJykuYWRkQ2xhc3MoJ2ZsaXBwZWQnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuZmluZCgnLmZsaXBjYXJkJykucmVtb3ZlQ2xhc3MoJ2ZsaXBwZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
