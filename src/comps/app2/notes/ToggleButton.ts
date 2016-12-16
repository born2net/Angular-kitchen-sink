import {Component, Input, Output, EventEmitter} from '@angular/core';

// here we created our own ngModel using the Change suffix
// you can also bind to model as:
// <input [value]="cdMsg" (input)="update($event.target.value)"/>
//
// update(val : string) {
//     this.cdMsg = val;
//     this.cdMsgChange.emit(this.cdMsg);
// }
//
// or even without sugar:
// <msg-app bindon-cdMsg ="msg"> </msg-app>
//
// reference: Angular 2 Two-Way Data Binding + NgModel Example
// http://www.concretepage.com/angular-2/angular-2-two-way-data-binding-ngmodel-example

@Component({
    selector: 'toggle-button',
    styles: [`
  .on{
    background-color: white;
    color: black;
  }
  
  .off{
    background-color: black;
    color: white;
  }
`],
    template: `
  <button 
    (click)="onClick($event)"
    [ngClass]="on ? 'on' : 'off'">
      <ng-content></ng-content>
  </button>
`
})
export class ToggleButton {
    @Input() on = true;
    @Output() onChange = new EventEmitter();

    onClick() {
        this.on = !this.on;
        this.onChange.emit(this.on);
    }
}

@Component({
    selector: 'ToggleButtonApp',
    template: `
      <toggle-button [(on)]="state">
        {{state ? 'On' : 'Off'}}  
      </toggle-button>
      <h2 *ngIf="state">two way is cool</h2>
`
})
export class ToggleButtonApp {
    state = false;
}

