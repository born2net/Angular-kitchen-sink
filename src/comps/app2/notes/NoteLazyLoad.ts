import {Component} from "@angular/core";

@Component({
    selector: 'noteLazyLoad',
    template: `
      <h1>NoteLazyLoad</h1>
      <SMALL>I am a lazy loaded component that's loaded on a per needed basis, kind of like require([...])</SMALL>
      `
})


export class NoteLazyLoad {
    constructor(){
        console.log('lazy loaded NoteLazyLoad');
    }
}

