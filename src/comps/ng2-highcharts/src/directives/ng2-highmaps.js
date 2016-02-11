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
var Ng2Highmaps = (function () {
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
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Ng2Highmaps);
    return Ng2Highmaps;
})();
exports.Ng2Highmaps = Ng2Highmaps;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL25nMi1oaWdoY2hhcnRzL3NyYy9kaXJlY3RpdmVzL25nMi1oaWdobWFwcy50cyJdLCJuYW1lcyI6WyJOZzJIaWdobWFwcyIsIk5nMkhpZ2htYXBzLmNvbnN0cnVjdG9yIiwiTmcySGlnaG1hcHMub3B0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0EscUJBQTJDLGVBQWUsQ0FBQyxDQUFBO0FBSTNEO0lBTUNBLHFCQUFZQSxHQUFlQTtRQUMxQkMsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0E7SUFDeENBLENBQUNBO0lBRURELHNCQUEyQkEsZ0NBQU9BO2FBQWxDQSxVQUFtQ0EsR0FBcUJBO1lBQ3ZERSxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDVEEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EscUJBQXFCQSxDQUFDQSxDQUFDQTtnQkFDbkNBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO2dCQUNqQkEsTUFBTUEsQ0FBQ0E7WUFDUkEsQ0FBQ0E7WUFDREEsRUFBRUEsQ0FBQUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsSUFBSUEsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzNCQSxFQUFFQSxDQUFBQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDZkEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0E7Z0JBQ3RCQSxDQUFDQTtnQkFDREEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsS0FBS0EsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDaERBLENBQUNBO1lBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNQQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxxQkFBcUJBLENBQUNBLENBQUNBO2dCQUNuQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDbEJBLENBQUNBO1FBQ0ZBLENBQUNBOzs7T0FBQUY7SUFmREE7UUFBQ0EsWUFBS0EsQ0FBQ0EsY0FBY0EsQ0FBQ0E7OztPQUFLQSxnQ0FBT0EsUUFlakNBO0lBekJGQTtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDVkEsUUFBUUEsRUFBRUEsZ0JBQWdCQTtTQUMxQkEsQ0FBQ0E7O29CQXdCREE7SUFBREEsa0JBQUNBO0FBQURBLENBMUJBLEFBMEJDQSxJQUFBO0FBdkJZLG1CQUFXLGNBdUJ2QixDQUFBIiwiZmlsZSI6ImNvbXBzL25nMi1oaWdoY2hhcnRzL3NyYy9kaXJlY3RpdmVzL25nMi1oaWdobWFwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2hpZ2hjaGFydHMvaGlnaGNoYXJ0cy5kLnRzXCIgLz5cclxuaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6ICdbbmcyLWhpZ2htYXBzXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nMkhpZ2htYXBzIHtcclxuXHRqcUVsZTogYW55O1xyXG5cdGNoYXJ0OiBIaWdoY2hhcnRzQ2hhcnRPYmplY3Q7XHJcblx0Y29uc3RydWN0b3IoZWxlOiBFbGVtZW50UmVmKSB7XHJcblx0XHR0aGlzLmpxRWxlID0galF1ZXJ5KGVsZS5uYXRpdmVFbGVtZW50KTtcclxuXHR9XHJcblxyXG5cdEBJbnB1dCgnbmcyLWhpZ2htYXBzJykgc2V0IG9wdGlvbnMob3B0OkhpZ2hjaGFydHNPcHRpb25zKSB7XHJcblx0XHRpZighb3B0KSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdObyB2YWxpZCBvcHRpb25zLi4uJyk7XHJcblx0XHRcdGNvbnNvbGUubG9nKG9wdCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGlmKG9wdC5zZXJpZXMgfHwgb3B0LmRhdGEpIHtcclxuXHRcdFx0aWYodGhpcy5jaGFydCkge1xyXG5cdFx0XHRcdHRoaXMuY2hhcnQuZGVzdHJveSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuY2hhcnQgPSB0aGlzLmpxRWxlLmhpZ2hjaGFydHMoJ01hcCcsIG9wdCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnTm8gdmFsaWQgb3B0aW9ucy4uLicpO1xyXG5cdFx0XHRjb25zb2xlLmRpcihvcHQpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
