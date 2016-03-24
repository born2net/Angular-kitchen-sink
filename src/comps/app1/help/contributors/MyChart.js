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
var ng2_highcharts_1 = require('../../../ng2-highcharts/ng2-highcharts');
window['Highcharts'] = require('highcharts');
var MyChart = (function () {
    function MyChart() {
        this.chartBar = {
            chart: {
                type: 'line'
            },
            xAxis: {
                categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            },
            credits: {
                enabled: false
            },
            series: [
                {
                    name: 'NC',
                    data: [7057, 6858, 6643, 6570, 6115, 107, 31, 635, 203, 2, 2]
                }, {
                    name: 'OK',
                    data: [54047, 52484, 50591, 49479, 46677, 33, 156, 947, 408, 6, 2]
                }, {
                    name: 'KO',
                    data: [11388, 11115, 10742, 10757, 10290, 973, 914, 4054, 732, 34, 2]
                }, {
                    name: 'VALID',
                    data: [8836, 8509, 8255, 7760, 7621, 973, 914, 4054, 732, 34, 2]
                }, {
                    name: 'CHECK',
                    data: [115, 162, 150, 187, 172, 973, 914, 4054, 732, 34, 2]
                }, {
                    name: 'COR',
                    data: [12566, 12116, 11446, 10749, 10439, 973, 914, 4054, 732, 34, 2]
                }
            ]
        };
    }
    MyChart.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this.chartBar = {
                chart: {
                    type: 'pie'
                },
                xAxis: {
                    categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                },
                credits: {
                    enabled: false
                },
                series: [
                    {
                        name: 'NC',
                        data: [7057, 6858, 6643, 6570, 6115, 107, 31, 635, 203, 2, 2]
                    }, {
                        name: 'OK',
                        data: [54047, 52484, 50591, 49479, 46677, 33, 156, 947, 408, 6, 2]
                    }, {
                        name: 'KO',
                        data: [11388, 11115, 10742, 10757, 10290, 973, 914, 4054, 732, 34, 2]
                    }, {
                        name: 'VALID',
                        data: [8836, 8509, 8255, 7760, 7621, 973, 914, 4054, 732, 34, 2]
                    }, {
                        name: 'CHECK',
                        data: [115, 162, 150, 187, 172, 973, 914, 4054, 732, 34, 2]
                    }, {
                        name: 'COR',
                        data: [12566, 12116, 11446, 10749, 10439, 973, 914, 4054, 732, 34, 2]
                    }
                ]
            };
        }, 3000);
    };
    MyChart = __decorate([
        core_1.Component({
            selector: 'MyChart',
            directives: [ng2_highcharts_1.Ng2Highcharts],
            template: "\n        <div style=\"width: 100%; height: 80%\">\n            <!-- <div [ng2-highcharts]=\"chartOptions\" class=\"graph\"></div> -->\n             <div [ng2-highcharts]=\"chartBar\" class=\"graph\"></div>\n        </div>\n\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], MyChart);
    return MyChart;
}());
exports.MyChart = MyChart;
//# sourceMappingURL=MyChart.js.map