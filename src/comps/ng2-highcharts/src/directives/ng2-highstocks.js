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
var Ng2Highstocks = (function () {
    function Ng2Highstocks(ele) {
        this.jqEle = jQuery(ele.nativeElement);
    }
    Object.defineProperty(Ng2Highstocks.prototype, "options", {
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
                this.chart = this.jqEle.highcharts('StockChart', opt);
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
        core_1.Input('ng2-highstocks'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], Ng2Highstocks.prototype, "options", null);
    Ng2Highstocks = __decorate([
        core_1.Directive({
            selector: '[ng2-highstocks]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Ng2Highstocks);
    return Ng2Highstocks;
})();
exports.Ng2Highstocks = Ng2Highstocks;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL25nMi1oaWdoY2hhcnRzL3NyYy9kaXJlY3RpdmVzL25nMi1oaWdoc3RvY2tzLnRzIl0sIm5hbWVzIjpbIk5nMkhpZ2hzdG9ja3MiLCJOZzJIaWdoc3RvY2tzLmNvbnN0cnVjdG9yIiwiTmcySGlnaHN0b2Nrcy5vcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFJM0Q7SUFNQ0EsdUJBQVlBLEdBQWVBO1FBQzFCQyxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQTtJQUN4Q0EsQ0FBQ0E7SUFFREQsc0JBQTZCQSxrQ0FBT0E7YUFBcENBLFVBQXFDQSxHQUFxQkE7WUFDekRFLEVBQUVBLENBQUFBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO2dCQUNUQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxxQkFBcUJBLENBQUNBLENBQUNBO2dCQUNuQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2pCQSxNQUFNQSxDQUFDQTtZQUNSQSxDQUFDQTtZQUNEQSxFQUFFQSxDQUFBQSxDQUFDQSxHQUFHQSxDQUFDQSxNQUFNQSxJQUFJQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDM0JBLEVBQUVBLENBQUFBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO29CQUNmQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQTtnQkFDdEJBLENBQUNBO2dCQUNEQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxVQUFVQSxDQUFDQSxZQUFZQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUN2REEsQ0FBQ0E7WUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ1BBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLHFCQUFxQkEsQ0FBQ0EsQ0FBQ0E7Z0JBQ25DQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNsQkEsQ0FBQ0E7UUFDRkEsQ0FBQ0E7OztPQUFBRjtJQWZEQTtRQUFDQSxZQUFLQSxDQUFDQSxnQkFBZ0JBLENBQUNBOzs7T0FBS0Esa0NBQU9BLFFBZW5DQTtJQXpCRkE7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1ZBLFFBQVFBLEVBQUVBLGtCQUFrQkE7U0FDNUJBLENBQUNBOztzQkF3QkRBO0lBQURBLG9CQUFDQTtBQUFEQSxDQTFCQSxBQTBCQ0EsSUFBQTtBQXZCWSxxQkFBYSxnQkF1QnpCLENBQUEiLCJmaWxlIjoiY29tcHMvbmcyLWhpZ2hjaGFydHMvc3JjL2RpcmVjdGl2ZXMvbmcyLWhpZ2hzdG9ja3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9oaWdoY2hhcnRzL2hpZ2hjaGFydHMuZC50c1wiIC8+XHJcbmltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiAnW25nMi1oaWdoc3RvY2tzXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nMkhpZ2hzdG9ja3Mge1xyXG5cdGpxRWxlOiBhbnk7XHJcblx0Y2hhcnQ6IEhpZ2hjaGFydHNDaGFydE9iamVjdDtcclxuXHRjb25zdHJ1Y3RvcihlbGU6IEVsZW1lbnRSZWYpIHtcclxuXHRcdHRoaXMuanFFbGUgPSBqUXVlcnkoZWxlLm5hdGl2ZUVsZW1lbnQpO1xyXG5cdH1cclxuXHJcblx0QElucHV0KCduZzItaGlnaHN0b2NrcycpIHNldCBvcHRpb25zKG9wdDpIaWdoY2hhcnRzT3B0aW9ucykge1xyXG5cdFx0aWYoIW9wdCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnTm8gdmFsaWQgb3B0aW9ucy4uLicpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhvcHQpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRpZihvcHQuc2VyaWVzIHx8IG9wdC5kYXRhKSB7XHJcblx0XHRcdGlmKHRoaXMuY2hhcnQpIHtcclxuXHRcdFx0XHR0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmNoYXJ0ID0gdGhpcy5qcUVsZS5oaWdoY2hhcnRzKCdTdG9ja0NoYXJ0Jywgb3B0KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdObyB2YWxpZCBvcHRpb25zLi4uJyk7XHJcblx0XHRcdGNvbnNvbGUuZGlyKG9wdCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
