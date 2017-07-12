// blog: https://netbasal.com/leverage-structural-directives-to-create-powerful-components-in-angular-c95e3cfde789
// https://embed.plnkr.co/KsVKOO1vpXaTw5DJRqZ6/

import {Component, ContentChild, ContentChildren, Directive, forwardRef, Input, TemplateRef} from "@angular/core";
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";

export const VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NbDropdownComponent),
    multi: true,
};


@Directive({
    selector: '[nbSelectMatch]'
})
export class NbSelectMatchDirective {

    constructor(private tpl: TemplateRef<any>) {
    }

}

@Directive({
    selector: '[nbSelectOption]'
})
export class NbSelectOptionDirective {
    option;

    constructor(private tpl: TemplateRef<any>) {
    }

    @Input() set nbSelectOption(option) {
        this.option = option;
    }
}


@Component({
    selector: 'nb-dropdown',
    template: `
        <div class="dropdown" [class.open]="isOpen" (click)="isOpen = !isOpen">
            <button class="btn btn-default dropdown-toggle" type="button">
                <ng-container [ngTemplateOutlet]="match.tpl" [ngOutletContext]="selected"></ng-container>
                <span *ngIf="!selected.$implicit" style="color: red;">{{placeholder}}</span>
                <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
                <li *ngFor="let option of nbSelectOptions" (click)="select(option)">
                    <a href="#">
                        <ng-container [ngTemplateOutlet]="option.tpl"></ng-container>
                    </a>
                </li>
            </ul>


        </div>
    `,
    providers: [VALUE_ACCESSOR]
})
export class NbDropdownComponent implements ControlValueAccessor {
    onChange;
    isOpen = false;
    @Input() placeholder = 'Choose something...';
    @ContentChild(NbSelectMatchDirective) match;
    @ContentChildren(NbSelectOptionDirective) nbSelectOptions;
    selected = {}

    writeValue(selected: any): void {
        if (selected) {
            this.setSelected(selected);
        }
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
    }

    select(nbSelectMatch) {
        this.setSelected(nbSelectMatch);
        this.onChange(nbSelectMatch.option);
    }

    setSelected(nbSelectMatch) {
        this.selected = {
            $implicit: nbSelectMatch.option ? nbSelectMatch.option : nbSelectMatch
        }
    }
}


@Component({
    selector: 'template-outlet-2',
    template: `
        <div class="container" style="margin-top: 1em">
            <nb-dropdown [formControl]="browser" placeholder="Choose favorite browser">

                <!--<ng-template nbSelectMatch let-selected><i class="fa fa-{{selected?.icon}}"></i>{{selected?.title}}</ng-template>-->


                <ng-container *nbSelectMatch="let selected"><i class="fa fa-{{selected?.icon}}"></i>{{selected?.title}}</ng-container>

                <!--<ng-container *ngFor="let browser of browsers;">-->
                <!--<ng-template [nbSelectOption]="browser"><i class="fa fa-{{browser.icon}}"></i>{{browser.title}}</ng-template>-->
                <!--</ng-container>-->


                <ng-container *ngFor="let browser of browsers;">
                    <ng-container *nbSelectOption="browser"><i class="fa fa-{{browser.icon}}"></i>{{browser.title}}</ng-container>
                </ng-container>

            </nb-dropdown>

            <pre style="margin-top: 11em;">Form Control value: {{browser.value | json}}</pre>
        </div>
    `,
})
export class TenmplateOutlet2 {
    browser = new FormControl();
    browsers = [
        {
            id: 1,
            title: 'Chrome',
            icon: 'chrome'
        },
        {
            id: 2,
            title: 'Firefox',
            icon: 'firefox'
        },
        {
            id: 3,
            title: 'Edge',
            icon: 'edge'
        }
    ]

    constructor() {

    }
}

