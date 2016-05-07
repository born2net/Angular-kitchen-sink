import {Component, Input} from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

import {Progress} from './progress.directive';
import {Bar} from './bar.component';

@Component({
    selector: 'progressbar, [progressbar]',
    directives: [Progress, Bar],
    template: `
    <div progress [animate]="animate" [max]="max">
      <bar [type]="type" [value]="value">
          <ng-content></ng-content>
      </bar>
    </div>
  `
})
export class Progressbar {
    @Input() private animate:boolean;
    @Input() private max:number;
    @Input() private type:string;
    @Input() private value:number;
}
