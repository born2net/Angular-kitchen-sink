/**
 * Created by Tareq Boulakjar. from angulartypescript.com
 */
import {Component} from 'angular2/core';

import {Accordion, AccordionGroup} from './accordion';

@Component({
    selector: 'my-app',
    template:`
                <p>
                  <button type="button" class="btn btn-default" (click)="removeAngular2AccordionGroup()">
                    Remove a group from the dynamic content!
                  </button>
                   <button type="button" class="btn btn-default" (click)="addAngular2AccordionGroup()">
                    Add Content!
                  </button>
                </p>

                <accordion>
                  <accordion-group heading="First Group Header " isGroupOpen="true">
                    Introduction
                  </accordion-group>
                  <accordion-group [heading]="group.heading" *ngFor="let group of groups">
                    {{group.content}}
                  </accordion-group>
                  <accordion-group heading="Last Group Header" [isGroupOpen]="isGroupOpen">
                    Additional Information
                  </accordion-group>
                </accordion>
             `,

    directives: [Accordion, AccordionGroup]
})
export class Angular2Accordion  {
    isGroupOpen = false;

    groups: Array<any> = [
        {
            heading: 'Angular2Accordion Dynamic Content A',
            content: ' I’m a dynamic content to show in angular 2 accordion : )'
        },
        {
            heading: 'Angular2Accordion Dynamic Content B',
            content: 'I’m a dynamic content to show in angular 2 accordion : )'
        },
        {
            heading: 'Angular2Accordion HTML Content C',
            content: 'I’m a dynamic content to show in angular 2 accordion : ) '
        }
    ];

    removeAngular2AccordionGroup() {
        this.groups.splice(1,1);
    }

    addAngular2AccordionGroup() {
        let accordionGroupContent = {heading:'Hi New Content !', content:'Content angular 2 accordion '};
        this.groups.splice(1,0,accordionGroupContent);
    }
}