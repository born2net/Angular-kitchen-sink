var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var Footer = (function () {
    function Footer() {
    }
    Footer.prototype.onClick = function (link) {
        console.log("Let's go to Github...");
        return false;
    };
    __decorate([
        core_1.HostListener('mouseover', ['$event.target']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], Footer.prototype, "onClick", null);
    Footer = __decorate([
        core_1.Directive({
            selector: 'a[data-footer]'
        }), 
        __metadata('design:paramtypes', [])
    ], Footer);
    return Footer;
})();
exports.Footer = Footer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2Zvb3Rlci9mb290ZXIudHMiXSwibmFtZXMiOlsiRm9vdGVyIiwiRm9vdGVyLmNvbnN0cnVjdG9yIiwiRm9vdGVyLm9uQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUFzQyxlQUFlLENBQUMsQ0FBQTtBQUV0RDtJQUFBQTtJQVNBQyxDQUFDQTtJQUpHRCx3QkFBT0EsR0FEUEEsVUFDUUEsSUFBSUE7UUFDUkUsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsdUJBQXVCQSxDQUFDQSxDQUFDQTtRQUNyQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7SUFDakJBLENBQUNBO0lBSkRGO1FBQUNBLG1CQUFZQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTs7OztPQUM3Q0EsMkJBQU9BLFFBR05BO0lBUkxBO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxnQkFBZ0JBO1NBQzdCQSxDQUFDQTs7ZUFPREE7SUFBREEsYUFBQ0E7QUFBREEsQ0FUQSxBQVNDQSxJQUFBO0FBTlksY0FBTSxTQU1sQixDQUFBIiwiZmlsZSI6ImNvbXBzL2Zvb3Rlci9Gb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdExpc3RlbmVyfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ2FbZGF0YS1mb290ZXJdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9vdGVyIHtcclxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlb3ZlcicsIFsnJGV2ZW50LnRhcmdldCddKVxyXG4gICAgb25DbGljayhsaW5rKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMZXQncyBnbyB0byBHaXRodWIuLi5cIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
