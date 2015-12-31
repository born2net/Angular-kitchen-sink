import {Component, Host} from 'angular2/core';
import {Tabs} from '../tabs/tabs';

@Component({
    selector: 'tab',
    inputs: [
        'title:tabtitle',
        'active'
    ],
    styles: [`
    .pane{
      padding: 1em;
    }
  `],
    template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `
})

/**
 Add this Tab as part of it's parents Tabs component
 use @Host to make sure we only look for a parent Tabs dependency injector
 and don't go any further to prevent lookup of wrong Tabs under misconfiguration
 **/
export class Tab {
    title:string;
    active = this.active || false;

    constructor(@Host() tabs:Tabs) {
        //this.title = 'tab';
        tabs.addTab(this);
    }
}
