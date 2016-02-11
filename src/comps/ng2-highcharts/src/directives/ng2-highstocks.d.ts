/// <reference path="../../typings/highcharts/highcharts.d.ts" />
import { ElementRef } from 'angular2/core';
export declare class Ng2Highstocks {
    jqEle: any;
    chart: HighchartsChartObject;
    constructor(ele: ElementRef);
    options: HighchartsOptions;
}
