import { Component } from '@angular/core';

@Component({
    selector: 'content-bar-app',
    template: `
  <question-editor (formValueChange)="myFormValue = $event">
    <foo-editor></foo-editor>
    <bar-editor></bar-editor>
  </question-editor>
  <br />
  <h3>{{myFormValue}}</h3>
  `
})
export class ContentBarApp {

    myFormValue: string = "nothing yet";
}