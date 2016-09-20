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
    var Ng2Highcharts;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Ng2Highcharts = (function () {
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
                    __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
                ], Ng2Highcharts);
                return Ng2Highcharts;
                var _a;
            }());
            exports_1("Ng2Highcharts", Ng2Highcharts);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL25nMi1oaWdoY2hhcnRzL3NyYy9kaXJlY3RpdmVzL25nMi1oaWdoY2hhcnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBSUMsdUJBQVksR0FBZTtvQkFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7Z0JBQ3hCLENBQUM7Z0JBRXdCLHNCQUFJLGtDQUFPO3lCQUFYLFVBQVksR0FBcUI7d0JBQ3pELEVBQUUsQ0FBQSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7NEJBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQ2pCLE1BQU0sQ0FBQzt3QkFDUixDQUFDO3dCQUNELEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7NEJBQzNCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dDQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7NEJBQ3RCLENBQUM7NEJBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQ0FDaEIsR0FBRyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7NEJBQ2hCLENBQUM7NEJBQ0QsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7NEJBQ3BELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN4QyxDQUFDO3dCQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQzs0QkFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDbEIsQ0FBQztvQkFDRixDQUFDOzs7bUJBQUE7Z0JBbkJEO29CQUFDLFlBQUssQ0FBQyxnQkFBZ0IsQ0FBQzs7OzREQUFBO2dCQVh6QjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxrQkFBa0I7cUJBQzVCLENBQUM7O2lDQUFBO2dCQTZCRixvQkFBQzs7WUFBRCxDQTVCQSxBQTRCQyxJQUFBO1lBNUJELHlDQTRCQyxDQUFBIiwiZmlsZSI6ImNvbXBzL25nMi1oaWdoY2hhcnRzL3NyYy9kaXJlY3RpdmVzL25nMi1oaWdoY2hhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvaGlnaGNoYXJ0cy9oaWdoY2hhcnRzLmQudHNcIiAvPlxyXG5pbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6ICdbbmcyLWhpZ2hjaGFydHNdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmcySGlnaGNoYXJ0cyB7XHJcblx0aG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcblx0Y2hhcnQ6IEhpZ2hjaGFydHNDaGFydE9iamVjdDtcclxuXHRyZW5kZXJUbzogSGlnaGNoYXJ0c09wdGlvbnM7XHJcblx0Y29uc3RydWN0b3IoZWxlOiBFbGVtZW50UmVmKSB7XHJcblx0XHR0aGlzLmhvc3RFbGVtZW50ID0gZWxlO1xyXG5cdH1cclxuXHJcblx0QElucHV0KCduZzItaGlnaGNoYXJ0cycpIHNldCBvcHRpb25zKG9wdDpIaWdoY2hhcnRzT3B0aW9ucykge1xyXG5cdFx0aWYoIW9wdCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnTm8gdmFsaWQgb3B0aW9ucy4uLicpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhvcHQpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRpZihvcHQuc2VyaWVzIHx8IG9wdC5kYXRhKSB7XHJcblx0XHRcdGlmKHRoaXMuY2hhcnQpIHtcclxuXHRcdFx0XHR0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoIW9wdC5jaGFydCkge1xyXG5cdFx0XHRcdG9wdC5jaGFydCA9IHt9O1xyXG5cdFx0XHR9XHJcblx0XHRcdG9wdC5jaGFydC5yZW5kZXJUbyA9IHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuXHRcdFx0dGhpcy5jaGFydCA9IG5ldyBIaWdoY2hhcnRzLkNoYXJ0KG9wdCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnTm8gdmFsaWQgb3B0aW9ucy4uLicpO1xyXG5cdFx0XHRjb25zb2xlLmRpcihvcHQpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
