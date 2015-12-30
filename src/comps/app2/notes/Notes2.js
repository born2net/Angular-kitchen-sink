System.register(["angular2/core", "../../sliderpanel/Sliderpanel"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Sliderpanel_1;
    var Notes2;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Sliderpanel_1_1) {
                Sliderpanel_1 = Sliderpanel_1_1;
            }],
        execute: function() {
            Notes2 = (function () {
                function Notes2(sliderPanel) {
                    this.sliderPanel = sliderPanel;
                }
                Notes2.prototype.onPrev = function (event) {
                    this.sliderPanel.slideToPage('notes1', 'right');
                };
                Notes2.prototype.onNext = function (event) {
                    this.sliderPanel.slideToPage('notes3', 'left');
                };
                Notes2 = __decorate([
                    core_1.Component({
                        selector: 'Notes2',
                        template: " <button type=\"button\" (click)=\"onPrev($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n                    </button>\n                    <button type=\"button\" (click)=\"onNext($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"glyphicon glyphicon-chevron-right\"></span>\n                </button>\n                <small>I am notes2 component</small>\n                <ng-content></ng-content>"
                    }), 
                    __metadata('design:paramtypes', [Sliderpanel_1.Sliderpanel])
                ], Notes2);
                return Notes2;
            })();
            exports_1("Notes2", Notes2);
        }
    }
});
//# sourceMappingURL=Notes2.js.map