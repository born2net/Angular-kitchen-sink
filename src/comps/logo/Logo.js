"use strict";
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
}());
exports.Logo = Logo;
//# sourceMappingURL=Logo.js.map