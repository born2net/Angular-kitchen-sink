/// <reference path="../../typings/highcharts/highcharts.d.ts" />
import {Directive, ElementRef, Input} from 'angular2/core';

declare var jQuery: any;

@Directive({
	selector: '[ng2-highstocks]'
})
export class Ng2Highstocks {
	jqEle: any;
	chart: HighchartsChartObject;
	constructor(ele: ElementRef) {
		this.jqEle = jQuery(ele.nativeElement);
	}

	@Input('ng2-highstocks') set options(opt:HighchartsOptions) {
		if(!opt) {
			console.log('No valid options...');
			console.log(opt);
			return;
		}
		if(opt.series || opt.data) {
			if(this.chart) {
				this.chart.destroy();
			}
			this.chart = this.jqEle.highcharts('StockChart', opt);
		} else {
			console.log('No valid options...');
			console.dir(opt);
		}
	}
}
