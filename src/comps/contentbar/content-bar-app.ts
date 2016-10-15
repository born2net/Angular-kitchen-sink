/**
 *  Document reference:
 *      http://www.mcrook.com/2016/10/angular-2-contentchildren-with-abstract.html?showComment=1476555775543#c1385775057527422601
 **/

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