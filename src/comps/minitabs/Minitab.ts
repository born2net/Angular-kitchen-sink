import { Component, Input } from '@angular/core';

@Component({
    selector: 'mini-tab',
    styles: [`
    .pane{
      padding: 1em;
    }
  `],
    template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `
})
export class Minitab {
    @Input('tabTitle') title: string;
    @Input() active = false;
}