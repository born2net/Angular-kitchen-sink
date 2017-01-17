//blog: https://medium.com/@MichalCafe/angulars-content-projection-trap-and-why-you-should-consider-using-template-outlet-instead-cc3c4cad87c9#.blqx64a2q

import {Component, Input, TemplateRef, OnDestroy, OnInit} from '@angular/core'

@Component({
    selector: 'ngTemplateOutlet',
    template: `
    <!--
    <h1>Using template outlet instead of ng-content</h1>
    <h4>avoid using ng-content as children don't conform to parent</h4>
     <tempref-content-example>
      <app-nested-component></app-nested-component>
     </tempref-content-example>
    -->
    <tempref-content-example [templateRef]="nestedComponentRef"></tempref-content-example>
    <template #nestedComponentRef>
      <app-nested-component></app-nested-component>
    </template>
  `,
})
export class ngTemplateOutletExample {}

@Component({
    selector: 'tempref-content-example',
    template: `
    <button (click)="display = !display" style="margin-bottom: 20px;">Toggle content</button>
    <br>
    <template *ngIf="display" [ngTemplateOutlet]="templateRef"></template>
     <!-- In ng v4+ NgTemplateOutlet now compatible with * syntax.-->
    <!-- <ng-container *ngTemplateOutlet="templateRefExp; -->
              <!--context: contextExp">-->
    <!-- </ng-container>-->
  `,
})
export class TempRefContentExample {
    display = false;
    @Input() templateRef: TemplateRef<any>;
}

@Component({
    selector: 'app-nested-component',
    template: `
    <b>I am a component that was added via TemplateRef</b>
  `,
})
export class NestedComponent implements OnDestroy, OnInit {

    ngOnInit() {
        alert('app-nested-component initialized!');
    }

    ngOnDestroy() {
        alert('app-nested-component destroyed!');
    }

}

