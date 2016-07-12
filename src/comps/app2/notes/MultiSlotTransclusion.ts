import {Component} from '@angular/core';

/**
 * For reference see: https://toddmotto.com/transclusion-in-angular-2-with-ng-content
 *
 **/

@Component({
    selector: 'MultiSlotTransclusion',
    template: `
          <h5>Use multi slot transclusion to inject multiple ng-contents within a single component</h5>
          <hr/>
          heading inject here:
          <ng-content select="[header]"></ng-content>
          
          <!--     
             You can also use selection via class or actual component
             ========================================================
             <ng-content select=".my-component-title"></ng-content>  // by class
             <ng-content select="my-component-title"></ng-content>   // by component tag name
          -->
          
          body injected here:
          <ng-content select="[body]"></ng-content>
          
          footer inject here:
          <ng-content select="[footer]"></ng-content>
  `
})
export class MultiSlotTransclusion {
}