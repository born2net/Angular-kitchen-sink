import {Component, ElementRef} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/delay';

@Component({
    selector: 'InfinityScroll',
    styles: [`
    .list { 
        height: 200px; 
        overflow-y: scroll;
    }
    p { 
        margin: 2px
    }
    p:nth-child(odd) { 
        background: #eee;
        }
  `],
    template: `
    <div #list class="list">
      <p *ngFor="let item of items$ | async">
        {{item}}
      </p>
    </div>
  `
})
export class InfinityScroll {
    constructor(el:ElementRef) {
    }

    show = false;
    items$:any = Observable
        .interval(500)
        .delay(500)
        .map((_:any) => Math.random())
        .startWith(<any>[])
        .scan((acc:any, curr:any)=> [...acc, curr]);
}