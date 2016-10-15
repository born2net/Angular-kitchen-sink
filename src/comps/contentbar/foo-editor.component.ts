import { Component, forwardRef } from '@angular/core';
import { BaseEditor } from './base-editor';

@Component({
    selector: 'foo-editor',
    template: `
  <div style="color: red" *ngIf="isSelected">
    <p>foo editor</p>
    <select [(ngModel)]="value">
      <option>val1</option>
      <option>val2</option>
    </select>
  </div>
  `,
    providers: [{provide: BaseEditor, useExisting: forwardRef(() => FooEditorComponent)}]
})
export class FooEditorComponent extends BaseEditor {
    constructor() {
        super('foo editor', true)
    }

}