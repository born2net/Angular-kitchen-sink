import {Component, Input, Output, EventEmitter} from '@angular/core';

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

