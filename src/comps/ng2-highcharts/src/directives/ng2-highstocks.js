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
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], Ng2Highstocks);
                return Ng2Highstocks;
            }());
            exports_1("Ng2Highstocks", Ng2Highstocks);
        }
    }
});
