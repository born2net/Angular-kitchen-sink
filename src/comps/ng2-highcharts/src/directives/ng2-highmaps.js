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
    var Ng2Highmaps;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Ng2Highmaps = (function () {
                function Ng2Highmaps(ele) {
                    this.jqEle = jQuery(ele.nativeElement);
                }
                Object.defineProperty(Ng2Highmaps.prototype, "options", {
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
                            this.chart = this.jqEle.highcharts('Map', opt);
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
                    core_1.Input('ng2-highmaps'), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], Ng2Highmaps.prototype, "options", null);
                Ng2Highmaps = __decorate([
                    core_1.Directive({
                        selector: '[ng2-highmaps]'
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
                ], Ng2Highmaps);
                return Ng2Highmaps;
                var _a;
            }());
            exports_1("Ng2Highmaps", Ng2Highmaps);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL25nMi1oaWdoY2hhcnRzL3NyYy9kaXJlY3RpdmVzL25nMi1oaWdobWFwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQUdDLHFCQUFZLEdBQWU7b0JBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDeEMsQ0FBQztnQkFFc0Isc0JBQUksZ0NBQU87eUJBQVgsVUFBWSxHQUFxQjt3QkFDdkQsRUFBRSxDQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzRCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQzs0QkFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDakIsTUFBTSxDQUFDO3dCQUNSLENBQUM7d0JBQ0QsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs0QkFDM0IsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0NBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQzs0QkFDdEIsQ0FBQzs0QkFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQzt3QkFDaEQsQ0FBQzt3QkFBQyxJQUFJLENBQUMsQ0FBQzs0QkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7NEJBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2xCLENBQUM7b0JBQ0YsQ0FBQzs7O21CQUFBO2dCQWZEO29CQUFDLFlBQUssQ0FBQyxjQUFjLENBQUM7OzswREFBQTtnQkFWdkI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsZ0JBQWdCO3FCQUMxQixDQUFDOzsrQkFBQTtnQkF3QkYsa0JBQUM7O1lBQUQsQ0F2QkEsQUF1QkMsSUFBQTtZQXZCRCxxQ0F1QkMsQ0FBQSIsImZpbGUiOiJjb21wcy9uZzItaGlnaGNoYXJ0cy9zcmMvZGlyZWN0aXZlcy9uZzItaGlnaG1hcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9oaWdoY2hhcnRzL2hpZ2hjaGFydHMuZC50c1wiIC8+XHJcbmltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiAnW25nMi1oaWdobWFwc10nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZzJIaWdobWFwcyB7XHJcblx0anFFbGU6IGFueTtcclxuXHRjaGFydDogSGlnaGNoYXJ0c0NoYXJ0T2JqZWN0O1xyXG5cdGNvbnN0cnVjdG9yKGVsZTogRWxlbWVudFJlZikge1xyXG5cdFx0dGhpcy5qcUVsZSA9IGpRdWVyeShlbGUubmF0aXZlRWxlbWVudCk7XHJcblx0fVxyXG5cclxuXHRASW5wdXQoJ25nMi1oaWdobWFwcycpIHNldCBvcHRpb25zKG9wdDpIaWdoY2hhcnRzT3B0aW9ucykge1xyXG5cdFx0aWYoIW9wdCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnTm8gdmFsaWQgb3B0aW9ucy4uLicpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhvcHQpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRpZihvcHQuc2VyaWVzIHx8IG9wdC5kYXRhKSB7XHJcblx0XHRcdGlmKHRoaXMuY2hhcnQpIHtcclxuXHRcdFx0XHR0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmNoYXJ0ID0gdGhpcy5qcUVsZS5oaWdoY2hhcnRzKCdNYXAnLCBvcHQpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ05vIHZhbGlkIG9wdGlvbnMuLi4nKTtcclxuXHRcdFx0Y29uc29sZS5kaXIob3B0KTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
