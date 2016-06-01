import {Component} from "@angular/core";

@Component({
    selector: 'noteDynamic',
    template: `
      <h1>NoteDynamic</h1>
      <SMALL>I am a dynamic component that's loaded on a per needed basis, kind of like require([...])</SMALL>
      `
})


export class NoteDynamic {
    constructor(){
        console.log('loaded dynamic now')
    }
}

