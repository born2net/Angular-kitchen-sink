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
var Observable_1 = require("rxjs/Observable");
require('rxjs/add/observable/fromEvent');
require('rxjs/add/observable/fromArray');
require('rxjs/add/operator/do');
require('rxjs/add/operator/merge');
require('rxjs/add/operator/distinctUntilChanged');
var Logo = (function () {
    function Logo(elementRef) {
        this.elementRef = elementRef;
        this.listenMouse();
    }
    Logo.prototype.listenMouse = function () {
        var _this = this;
        var over = Observable_1.Observable.fromEvent(this.elementRef.nativeElement, 'mouseover').map(function (e) {
            return Observable_1.Observable.of(1);
        });
        var out = Observable_1.Observable.fromEvent(this.elementRef.nativeElement, 'mouseout').map(function (e) {
            return Observable_1.Observable.of(0);
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
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Logo);
    return Logo;
})();
exports.Logo = Logo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2xvZ28vbG9nby50cyJdLCJuYW1lcyI6WyJMb2dvIiwiTG9nby5jb25zdHJ1Y3RvciIsIkxvZ28ubGlzdGVuTW91c2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBLHFCQUFvQyxlQUFlLENBQUMsQ0FBQTtBQUNwRCwyQkFBeUIsaUJBQWlCLENBQUMsQ0FBQTtBQUMzQyxRQUFPLCtCQUErQixDQUFDLENBQUE7QUFDdkMsUUFBTywrQkFBK0IsQ0FBQyxDQUFBO0FBQ3ZDLFFBQU8sc0JBQXNCLENBQUMsQ0FBQTtBQUM5QixRQUFPLHlCQUF5QixDQUFDLENBQUE7QUFDakMsUUFBTyx3Q0FBd0MsQ0FBQyxDQUFBO0FBT2hEO0lBaUJJQSxjQUFvQkEsVUFBcUJBO1FBQXJCQyxlQUFVQSxHQUFWQSxVQUFVQSxDQUFXQTtRQUNyQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0E7SUFDdkJBLENBQUNBO0lBRURELDBCQUFXQSxHQUFYQTtRQUFBRSxpQkFjQ0E7UUFiR0EsSUFBSUEsSUFBSUEsR0FBbUJBLHVCQUFVQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxhQUFhQSxFQUFFQSxXQUFXQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxVQUFBQSxDQUFDQTtZQUM3RkEsTUFBTUEsQ0FBQ0EsdUJBQVVBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUFBO1FBQzNCQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNIQSxJQUFJQSxHQUFHQSxHQUFtQkEsdUJBQVVBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLGFBQWFBLEVBQUVBLFVBQVVBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLFVBQUFBLENBQUNBO1lBQzNGQSxNQUFNQSxDQUFDQSx1QkFBVUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQUE7UUFDM0JBLENBQUNBLENBQUNBLENBQUNBO1FBQ0hBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLG9CQUFvQkEsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsVUFBQUEsTUFBTUE7WUFDbkRBLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO2dCQUNmQSxNQUFNQSxDQUFDQSxLQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQTtZQUNoRkEsQ0FBQ0E7WUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ0pBLE1BQU1BLENBQUNBLEtBQUlBLENBQUNBLFVBQVVBLENBQUNBLGFBQWFBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBLFdBQVdBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO1lBQ25GQSxDQUFDQTtRQUNMQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNQQSxDQUFDQTtJQW5DTEY7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLE1BQU1BO1lBQ2hCQSxRQUFRQSxFQUFFQSx5YkFXVEE7U0FDSkEsQ0FBQ0E7O2FBc0JEQTtJQUFEQSxXQUFDQTtBQUFEQSxDQXBDQSxBQW9DQ0EsSUFBQTtBQXBCWSxZQUFJLE9Bb0JoQixDQUFBIiwiZmlsZSI6ImNvbXBzL2xvZ28vTG9nby5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYXBwLmQudHNcIi8+XHJcblxyXG5pbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZnJvbUV2ZW50JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb21BcnJheSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21lcmdlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kaXN0aW5jdFVudGlsQ2hhbmdlZCc7XHJcblxyXG4vKipcclxuICogTG9nbyBjb21wb25lbnQgZm9yIEFwcGxpY2F0aW9uIGhlYWRlclxyXG4gKiBhY3RpdmF0ZWQgdmlhIGVsZW1lbnRSZWYgYW5kIGxpc3RlbiB0byBtb3VzZSBldmVudHMgdmlhIGFuZ3VsYXJcclxuICogYWRhcHRlciBpbnRlcmZhY2VcclxuICoqL1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnTG9nbycsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibG9nb0NvbnRhaW5lclwiIGNsYXNzPVwicmVzaGlkIGZsaXBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxpcGNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmYWNlIGZyb250XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZVwiIHNyYz1cImFzc2V0cy9sb2dvX3MucG5nXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmFjZSBiYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZVwiIHNyYz1cImFzc2V0cy9sb2dvX2IucG5nXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExvZ28ge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOkVsZW1lbnRSZWYpIHtcclxuICAgICAgICB0aGlzLmxpc3Rlbk1vdXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGlzdGVuTW91c2UoKTp2b2lkIHtcclxuICAgICAgICB2YXIgb3ZlcjpPYnNlcnZhYmxlPGFueT4gPSBPYnNlcnZhYmxlLmZyb21FdmVudCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21vdXNlb3ZlcicpLm1hcChlPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZigxKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBvdXQ6T2JzZXJ2YWJsZTxhbnk+ID0gT2JzZXJ2YWJsZS5mcm9tRXZlbnQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtb3VzZW91dCcpLm1hcChlPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZigwKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG92ZXIubWVyZ2Uob3V0KS5kaXN0aW5jdFVudGlsQ2hhbmdlZCgpLnN1YnNjcmliZShldmVudHMgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnRzLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmZpbmQoJy5mbGlwY2FyZCcpLmFkZENsYXNzKCdmbGlwcGVkJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmZpbmQoJy5mbGlwY2FyZCcpLnJlbW92ZUNsYXNzKCdmbGlwcGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
