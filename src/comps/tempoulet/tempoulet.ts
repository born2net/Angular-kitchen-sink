// blog ref: https://alligator.io/angular/reusable-components-ngtemplateoutlet/

import {Component, ContentChild, Directive, Input, TemplateRef} from "@angular/core";

@Directive({
    selector: '[cardItem]'
})
export class CardItemDirective {
}


@Directive({
    selector: '[listItem]'
})
export class ListItemDirective {
}

@Component({
    selector: 'card-or-list-view',
    template: `
        <ng-container [ngSwitch]="mode">
            <ng-container *ngSwitchCase="'card'">
                <ng-container *ngFor="let item of items">
                    <ng-container *ngTemplateOutlet="cardItemTemplate; context: {$implicit: item}"></ng-container>
                </ng-container>
            </ng-container>
            <ul *ngSwitchCase="'list'">
                <li *ngFor="let item of items">
                    <ng-container *ngTemplateOutlet="listItemTemplate; context: {$implicit: item}"></ng-container>
                </li>
            </ul>
        </ng-container>
    `

})
export class CardOrListViewComponent {

    @Input() items: any[] = [];

    @Input() mode: 'card' | 'list' = 'card';

    // Read in our structural directives as TemplateRefs
    @ContentChild(CardItemDirective, {read: TemplateRef}) cardItemTemplate;
    @ContentChild(ListItemDirective, {read: TemplateRef}) listItemTemplate;

}


@Component({
    selector: 'TemplateOutletExample',
    template: `
        <card-or-list-view
                [items]="items"
                [mode]="mode">
            
            <ng-template cardItem let-item>
                <div>
                    <h1>{{item.header}}</h1>
                    <p>{{item.content}}</p>
                </div>
            </ng-template>
            <!-- synthetic sugar -->
            <!--<div *cardItem="let item">-->
            <!--<h1>{{item.header}}</h1>-->
            <!--<p>{{item.content}}</p>-->
            <!--</div>-->
            
            <ng-template listItem let-item>
                <li>
                    {{item.header}}
                    {{item.content}}
                </li>
            </ng-template>
            <!-- synthetic sugar -->
            <!--<li *listItem="let item">-->
            <!--{{item.header}}: {{item.content}}-->
            <!--</li>-->
        </card-or-list-view>
    `
})
export class TemplateOutletExample {
    mode = 'card';
    items = [
        {
            header: 'Sean Levy',
            content: 'Loves Angular'
        },
        {
            header: 'James Brown',
            content: 'Loves Music'
        },
        {
            header: 'James Dean',
            content: 'Loves to Act'
        }

    ];
}

