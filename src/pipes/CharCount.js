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
var CharCount = (function () {
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
})();
exports.CharCount = CharCount;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpcGVzL2NoYXJjb3VudC50cyJdLCJuYW1lcyI6WyJDaGFyQ291bnQiLCJDaGFyQ291bnQuY29uc3RydWN0b3IiLCJDaGFyQ291bnQudHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFFbEQ7SUFBQUE7SUFRQUMsQ0FBQ0E7SUFKR0QsNkJBQVNBLEdBQVRBLFVBQVVBLEtBQWFBO1FBQ25CRSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQTtJQUN4QkEsQ0FBQ0E7SUFOTEY7UUFBQ0EsV0FBSUEsQ0FBQ0E7WUFDRkEsSUFBSUEsRUFBRUEsV0FBV0E7U0FDcEJBLENBQUNBOztrQkFNREE7SUFBREEsZ0JBQUNBO0FBQURBLENBUkEsQUFRQ0EsSUFBQTtBQUxZLGlCQUFTLFlBS3JCLENBQUEiLCJmaWxlIjoicGlwZXMvQ2hhckNvdW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICdDaGFyQ291bnQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGFyQ291bnQgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybShpbnB1dDogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gaW5wdXQubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
