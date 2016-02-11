import { Component, ContentChildren, QueryList, AfterContentInit } from 'angular2/core';
import { Minitab } from './Minitab';

@Component({
    selector: 'mini-tabs',
    template:`
    <ul class="nav nav-tabs">
      <li *ngFor="#tab of tabs" (click)="selectTab(tab,$event)" [class.active]="tab.active">
        <a href="#">{{tab.title}}</a>
      </li>
    </ul>
    <ng-content></ng-content>
  `
})
export class Minitabs implements AfterContentInit {

    @ContentChildren(Minitab) tabs: QueryList<Minitab>;

    // contentChildren are set
    ngAfterContentInit() {
        console.log(this.tabs);
        // get all active tabs
        let activeTabs = this.tabs.filter((tab)=>tab.active);

        // if there is no active tab set, activate the first
        if(activeTabs.length === 0)
            this.selectTab(this.tabs.first);
    }

    selectTab(tab: Minitab, event?:MouseEvent){
        // deactivate all tabs
        event ? event.preventDefault() : null;
        this.tabs.toArray().forEach(tab => tab.active = false);

        // activate the tab the user has clicked on.
        tab.active = true;
    }

}