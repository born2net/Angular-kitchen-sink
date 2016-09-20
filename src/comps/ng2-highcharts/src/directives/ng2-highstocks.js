System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var Ng2Highstocks;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Ng2Highstocks = (function () {
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
                    __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
                ], Ng2Highstocks);
                return Ng2Highstocks;
                var _a;
            }());
            exports_1("Ng2Highstocks", Ng2Highstocks);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL25nMi1oaWdoY2hhcnRzL3NyYy9kaXJlY3RpdmVzL25nMi1oaWdoc3RvY2tzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBR0MsdUJBQVksR0FBZTtvQkFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUN4QyxDQUFDO2dCQUV3QixzQkFBSSxrQ0FBTzt5QkFBWCxVQUFZLEdBQXFCO3dCQUN6RCxFQUFFLENBQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDOzRCQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUNqQixNQUFNLENBQUM7d0JBQ1IsQ0FBQzt3QkFDRCxFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzRCQUMzQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQ0FDZixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDOzRCQUN0QixDQUFDOzRCQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFDO3dCQUN2RCxDQUFDO3dCQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQzs0QkFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDbEIsQ0FBQztvQkFDRixDQUFDOzs7bUJBQUE7Z0JBZkQ7b0JBQUMsWUFBSyxDQUFDLGdCQUFnQixDQUFDOzs7NERBQUE7Z0JBVnpCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjtxQkFDNUIsQ0FBQzs7aUNBQUE7Z0JBd0JGLG9CQUFDOztZQUFELENBdkJBLEFBdUJDLElBQUE7WUF2QkQseUNBdUJDLENBQUEiLCJmaWxlIjoiY29tcHMvbmcyLWhpZ2hjaGFydHMvc3JjL2RpcmVjdGl2ZXMvbmcyLWhpZ2hzdG9ja3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9oaWdoY2hhcnRzL2hpZ2hjaGFydHMuZC50c1wiIC8+XHJcbmltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiAnW25nMi1oaWdoc3RvY2tzXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nMkhpZ2hzdG9ja3Mge1xyXG5cdGpxRWxlOiBhbnk7XHJcblx0Y2hhcnQ6IEhpZ2hjaGFydHNDaGFydE9iamVjdDtcclxuXHRjb25zdHJ1Y3RvcihlbGU6IEVsZW1lbnRSZWYpIHtcclxuXHRcdHRoaXMuanFFbGUgPSBqUXVlcnkoZWxlLm5hdGl2ZUVsZW1lbnQpO1xyXG5cdH1cclxuXHJcblx0QElucHV0KCduZzItaGlnaHN0b2NrcycpIHNldCBvcHRpb25zKG9wdDpIaWdoY2hhcnRzT3B0aW9ucykge1xyXG5cdFx0aWYoIW9wdCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnTm8gdmFsaWQgb3B0aW9ucy4uLicpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhvcHQpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRpZihvcHQuc2VyaWVzIHx8IG9wdC5kYXRhKSB7XHJcblx0XHRcdGlmKHRoaXMuY2hhcnQpIHtcclxuXHRcdFx0XHR0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmNoYXJ0ID0gdGhpcy5qcUVsZS5oaWdoY2hhcnRzKCdTdG9ja0NoYXJ0Jywgb3B0KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdObyB2YWxpZCBvcHRpb25zLi4uJyk7XHJcblx0XHRcdGNvbnNvbGUuZGlyKG9wdCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
