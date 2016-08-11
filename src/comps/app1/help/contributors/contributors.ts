import {Component} from '@angular/core';
import {MyChart} from "./MyChart";

@Component({
    selector: 'Contributors',
    template: `
                <MyChart></MyChart>
                <small>I am Contributors component with HighCharts ng2 component</small>`
})
export class Contributors {
}


