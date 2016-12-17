import {Component, ViewEncapsulation} from '@angular/core';

 // Reference:
 //   http://blog.rangle.io/angular-2-ngmodel-and-custom-form-components/
 //   https://github.com/born2net/form-example

@Component({
  selector: 'ExampleHex',
  template: `
      <form #form="ngForm" (ngSubmit)="onSubmit(form.value)">
        <form-text
          required
          hexadecimal
          name="hexadecimalValue"
          label="Value 1"
          placeholder="Enter a hexadecimal value"
          [(ngModel)]="hexadecimalValue">
        </form-text>
      
        <form-select
          required
          name="dropdownValue"
          label="Value 2"
          placeholder="Select a dropdown value"
          [(ngModel)]="dropdownValue">
          <option [value]="1">Option One</option>
          <option [value]="2">Option Two</option>
          <option [value]="3">Option Three</option>
          <option [value]="4">Option Four</option>
        </form-select>
      
        <button type="Submit" [disabled]="!form.valid">Submit</button>
      </form>
    `,
  styleUrls: ['./example-hex.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ExampleHex {
  public hexadecimalValue: string;

  public dropdownValue: string = '';

  onSubmit(value) {
    alert(`Submit: ${JSON.stringify(value)}`);
  }
}
