import {Component, ViewEncapsulation} from '@angular/core';

 // Reference:
 //   http://blog.rangle.io/angular-2-ngmodel-and-custom-form-components/
 //   https://github.com/born2net/form-example

@Component({
  selector: 'ExampleHex',
  templateUrl: './example-hex.html',
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
