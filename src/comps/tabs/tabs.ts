import {Component} from 'angular2/core';
//import {Tab} from 'tab';

@Component({
    selector: 'tabs',
    template: `
    <ul class="nav nav-tabs">
      <li *ngFor="#tab of tabs" (click)="selectTab(tab, $event)" [class.active]="tab.active">
        <a href="#">{{tab.title}}</a>
      </li>
    </ul>
    <ng-content></ng-content>
    <small>I am Tabs component</small>
  `
})
export class Tabs {

    tabs:any[];

    constructor() {
        this.tabs = [];
    }

    private selectTab(tab, event) {
        event.preventDefault;
        _deactivateAllTabs(this.tabs);
        tab.active = true;
        function _deactivateAllTabs(tabs:any[]) {
            tabs.forEach((tab)=>tab.active = false);
        }
        return false;
    }

    // _deactivateAllTabs(){
    //   this.tabs.forEach((tab)=>tab.active = false);
    // }

    addTab(tab:any) {
        if (this.tabs.length === 0) {
            tab.active = true;
        }
        this.tabs.push(tab);
    }
}