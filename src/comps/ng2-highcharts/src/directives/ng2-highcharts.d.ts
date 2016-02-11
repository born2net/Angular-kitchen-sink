/// <reference path="../../typings/highcharts/highcharts.d.ts" />
import { ElementRef } from 'angular2/core';
export declare class Ng2Highcharts {
    hostElement: ElementRef;
    chart: HighchartsChartObject;
    renderTo: HighchartsOptions;
    constructor(ele: ElementRef);
    options: HighchartsOptions;
}
