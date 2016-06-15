import {Component} from '@angular/core';

@Component({
    selector: 'MultiSlotTransclusion',
    template: `
          <h5>Use multi slot transclusion to inject multiple ng-contents within a single component</h5>
          <hr/>
          heading inject here:
          <ng-content select="[header]"></ng-content>
          
          body injected here:
          <ng-content select="[body]"></ng-content>
          
          footer inject here:
          <ng-content select="[footer]"></ng-content>
  `
})
export class MultiSlotTransclusion {
}