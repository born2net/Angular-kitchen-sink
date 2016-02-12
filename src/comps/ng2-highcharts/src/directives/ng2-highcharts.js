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
var Ng2Highcharts = (function () {
    function Ng2Highcharts(ele) {
        this.hostElement = ele;
    }
    Object.defineProperty(Ng2Highcharts.prototype, "options", {
        set: function (opt) {
            if (!opt) {
                console.log('No valid options...');
                console.log(opt);
                return;
            }
            if (opt.series || opt.data) {
                if (this.chart) {
                    this.chart.destroy();
                }
                if (!opt.chart) {
                    opt.chart = {};
                }
                opt.chart.renderTo = this.hostElement.nativeElement;
                this.chart = new Highcharts.Chart(opt);
            }
            else {
                console.log('No valid options...');
                console.dir(opt);
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input('ng2-highcharts'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], Ng2Highcharts.prototype, "options", null);
    Ng2Highcharts = __decorate([
        core_1.Directive({
            selector: '[ng2-highcharts]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Ng2Highcharts);
    return Ng2Highcharts;
})();
exports.Ng2Highcharts = Ng2Highcharts;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL25nMi1oaWdoY2hhcnRzL3NyYy9kaXJlY3RpdmVzL25nMi1oaWdoY2hhcnRzLnRzIl0sIm5hbWVzIjpbIk5nMkhpZ2hjaGFydHMiLCJOZzJIaWdoY2hhcnRzLmNvbnN0cnVjdG9yIiwiTmcySGlnaGNoYXJ0cy5vcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFFM0Q7SUFPQ0EsdUJBQVlBLEdBQWVBO1FBQzFCQyxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxHQUFHQSxDQUFDQTtJQUN4QkEsQ0FBQ0E7SUFFREQsc0JBQTZCQSxrQ0FBT0E7YUFBcENBLFVBQXFDQSxHQUFxQkE7WUFDekRFLEVBQUVBLENBQUFBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO2dCQUNUQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxxQkFBcUJBLENBQUNBLENBQUNBO2dCQUNuQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2pCQSxNQUFNQSxDQUFDQTtZQUNSQSxDQUFDQTtZQUNEQSxFQUFFQSxDQUFBQSxDQUFDQSxHQUFHQSxDQUFDQSxNQUFNQSxJQUFJQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDM0JBLEVBQUVBLENBQUFBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO29CQUNmQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQTtnQkFDdEJBLENBQUNBO2dCQUNEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDaEJBLEdBQUdBLENBQUNBLEtBQUtBLEdBQUdBLEVBQUVBLENBQUNBO2dCQUNoQkEsQ0FBQ0E7Z0JBQ0RBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLGFBQWFBLENBQUNBO2dCQUNwREEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsVUFBVUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDeENBLENBQUNBO1lBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNQQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxxQkFBcUJBLENBQUNBLENBQUNBO2dCQUNuQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDbEJBLENBQUNBO1FBQ0ZBLENBQUNBOzs7T0FBQUY7SUFuQkRBO1FBQUNBLFlBQUtBLENBQUNBLGdCQUFnQkEsQ0FBQ0E7OztPQUFLQSxrQ0FBT0EsUUFtQm5DQTtJQTlCRkE7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1ZBLFFBQVFBLEVBQUVBLGtCQUFrQkE7U0FDNUJBLENBQUNBOztzQkE2QkRBO0lBQURBLG9CQUFDQTtBQUFEQSxDQS9CQSxBQStCQ0EsSUFBQTtBQTVCWSxxQkFBYSxnQkE0QnpCLENBQUEiLCJmaWxlIjoiY29tcHMvbmcyLWhpZ2hjaGFydHMvc3JjL2RpcmVjdGl2ZXMvbmcyLWhpZ2hjaGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9oaWdoY2hhcnRzL2hpZ2hjaGFydHMuZC50c1wiIC8+XHJcbmltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogJ1tuZzItaGlnaGNoYXJ0c10nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZzJIaWdoY2hhcnRzIHtcclxuXHRob3N0RWxlbWVudDogRWxlbWVudFJlZjtcclxuXHRjaGFydDogSGlnaGNoYXJ0c0NoYXJ0T2JqZWN0O1xyXG5cdHJlbmRlclRvOiBIaWdoY2hhcnRzT3B0aW9ucztcclxuXHRjb25zdHJ1Y3RvcihlbGU6IEVsZW1lbnRSZWYpIHtcclxuXHRcdHRoaXMuaG9zdEVsZW1lbnQgPSBlbGU7XHJcblx0fVxyXG5cclxuXHRASW5wdXQoJ25nMi1oaWdoY2hhcnRzJykgc2V0IG9wdGlvbnMob3B0OkhpZ2hjaGFydHNPcHRpb25zKSB7XHJcblx0XHRpZighb3B0KSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdObyB2YWxpZCBvcHRpb25zLi4uJyk7XHJcblx0XHRcdGNvbnNvbGUubG9nKG9wdCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGlmKG9wdC5zZXJpZXMgfHwgb3B0LmRhdGEpIHtcclxuXHRcdFx0aWYodGhpcy5jaGFydCkge1xyXG5cdFx0XHRcdHRoaXMuY2hhcnQuZGVzdHJveSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghb3B0LmNoYXJ0KSB7XHJcblx0XHRcdFx0b3B0LmNoYXJ0ID0ge307XHJcblx0XHRcdH1cclxuXHRcdFx0b3B0LmNoYXJ0LnJlbmRlclRvID0gdGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG5cdFx0XHR0aGlzLmNoYXJ0ID0gbmV3IEhpZ2hjaGFydHMuQ2hhcnQob3B0KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdObyB2YWxpZCBvcHRpb25zLi4uJyk7XHJcblx0XHRcdGNvbnNvbGUuZGlyKG9wdCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
