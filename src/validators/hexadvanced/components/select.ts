import {
  Component,
  Optional,
  Inject,
  Input,
  ViewChild,
} from '@angular/core';

import {
  NgModel,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  NG_ASYNC_VALIDATORS,
} from '@angular/forms';

import {ElementBase, animations} from '../form';

@Component({
  selector: 'form-select',
  template: `
    <div>
      <label *ngIf="label" [attr.for]="identifier">{{label}}</label>
      <select
          [(ngModel)]="value"
          [ngClass]="{invalid: (invalid | async)}"
          [id]="identifier">
        <option value="" disabled selected *ngIf="placeholder">{{placeholder}}</option>
        <ng-content></ng-content>
      </select>
      <validation
        [@flyInOut]="'in,out'"
        *ngIf="invalid | async"
        [messages]="failures | async">
      </validation>
    </div>
  `,
  animations,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: FormSelectComponent,
    multi: true,
  }],
})
export class FormSelectComponent extends ElementBase<string> {
  @Input() public label: string;
  @Input() public placeholder: string;

  @ViewChild(NgModel) model: NgModel;

  public identifier = `form-select-${identifier++}`;

  constructor(
    @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
    @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
  ) {
    super(validators, asyncValidators);
  }
}

let identifier = 0;