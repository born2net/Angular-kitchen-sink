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
    var CharCount;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CharCount = (function () {
                function CharCount() {
                }
                CharCount.prototype.transform = function (input) {
                    return input.length;
                };
                CharCount = __decorate([
                    core_1.Pipe({
                        name: 'CharCount'
                    }), 
                    __metadata('design:paramtypes', [])
                ], CharCount);
                return CharCount;
            }());
            exports_1("CharCount", CharCount);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpcGVzL0NoYXJDb3VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUFBO2dCQUtBLENBQUM7Z0JBSkcsNkJBQVMsR0FBVCxVQUFVLEtBQWE7b0JBQ25CLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO2dCQUN4QixDQUFDO2dCQU5MO29CQUFDLFdBQUksQ0FBQzt3QkFDRixJQUFJLEVBQUUsV0FBVztxQkFDcEIsQ0FBQzs7NkJBQUE7Z0JBTUYsZ0JBQUM7WUFBRCxDQUxBLEFBS0MsSUFBQTtZQUxELGlDQUtDLENBQUEiLCJmaWxlIjoicGlwZXMvQ2hhckNvdW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICdDaGFyQ291bnQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGFyQ291bnQgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybShpbnB1dDogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gaW5wdXQubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
