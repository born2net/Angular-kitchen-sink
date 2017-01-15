//blog:
// https://medium.com/@MichalCafe/angular-create-tabs-with-template-outlet-46b60eb64edf#.r6o6px33h
// https://medium.com/@MichalCafe/angulars-content-projection-trap-and-why-you-should-consider-using-template-outlet-instead-cc3c4cad87c9#.kg8b6diko

import {Component, Input, ContentChildren, AfterContentInit, TemplateRef, QueryList} from "@angular/core";

@Component({
    selector: 'tabs-template-ref',
    template: `
    <h3>Example of using [templateRef] instead of ng-content for content projection</h3>
    <h5>helps avoid issues with components not following proper life cycle which can occur with ng-content</h5>
    <app-tabs>
      <app-tab name="First" [templateRef]="firstRef"></app-tab>
      <app-tab name="Second" [templateRef]="secondRef"></app-tab>
      <app-tab name="Third" [templateRef]="thirdRef"></app-tab>
    </app-tabs>
    
    <template #firstRef>
      First tab content.
    </template>
    
    <template #secondRef>
      Second tab content.
    </template>
   
    <template #thirdRef>
      Third tab content.
    </template>
  `,
})
export class TabsTemplateRef {
}

@Component({
    selector: 'app-tab',
    template: '',
})
export class TabComponent {
    @Input() name: string;
    @Input() templateRef: TemplateRef<any>;
}

@Component({
    selector: 'app-tabs',
    styles: [`
  
    span {
      float: left;
      padding: 5px;
      background-color: #D0CCD0;
      border-radius: 5px 5px 0 0;
      color: #828181;
      font-size: 14px;
      cursor: pointer;
    }
    
    .selected {
      background-color: #FBFCFF;
      color: #333;
    }
    
    div {
      clear: both;
      padding: 10px;
      background: #FBFCFF;
      min-height: 100px;
      border-radius: 0 5px 5px 5px;
    }

  `],
    template: `
    <span 
      *ngFor="let tab of tabList" 
      [ngClass]="{selected: isSelected(tab)}" 
      (click)="onTabClick(tab)"
    >
      {{tab.name}}
    </span>
    <div>
        <template [ngTemplateOutlet]="currentTab.templateRef"></template>
    </div>
  `,
})
export class TabsComponent implements AfterContentInit {

    @ContentChildren(TabComponent) tabList: QueryList<TabComponent>;
    currentTab: TabComponent;

    ngAfterContentInit() {
        this.currentTab = this.tabList.first;
    }

    onTabClick(tab: TabComponent) {
        this.currentTab = tab;
    }

    isSelected(tab: TabComponent) {
        return this.currentTab.name === tab.name;
    }

}

