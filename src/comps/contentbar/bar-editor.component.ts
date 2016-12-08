import {
    Component,
    forwardRef
} from "@angular/core";
import {BaseEditor} from "./base-editor";

@Component({
    selector: 'bar-editor',
    template: `
  <div style="color: blue" *ngIf="isSelected">
    <p>bar editor</p>
    <input [(ngModel)]="value">
  </div>
  `,
    providers: [{
        provide: BaseEditor,
        useExisting: forwardRef(() => BarEditorComponent)
    }]
})
export class BarEditorComponent extends BaseEditor {
    constructor() {
        super('bar editor', false)
    }
}