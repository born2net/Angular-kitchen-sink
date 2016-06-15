import { Component } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Jsonp, JSONP_PROVIDERS} from '@angular/http';

@Component({
    selector: 'WikiSearch',
    template: `
    <input type="text" [value]="term$ | async">
    <ul *ngFor="let result of results$ | async">
        {{result}}
    </ul>
  
`
})
export class WikiSearch {
    text = `Beginning fish, firmament give have make years. Divide you're. Fill light, him firmament cattle face Lights tree forth subdue beginning every, give signs itself likeness second whose there years abundantly the, given can't together yielding midst was place that fruitful meat.
And night. Kind spirit won't meat it, third fifth may. Lights can't he, was all have divided. Two.
Man second his shall to she'd whose. Image you meat bearing one of herb living called waters he seasons his have him. God multiply one multiply their. His air gathered kind bearing fowl One years fruit days to living place and.`;

    randomInterval$ = Observable.range(0, this.text.length)
        .concatMap(x => Observable.of(x)
            .delay(Math.random() * 500)
        );

    term$ = Observable.from(this.text)
        .zip(this.randomInterval$, x => x)
        .scan((a, c)=> (c === " ") ? "" : a + c)
        .share();

    results$ = this.term$
        .debounceTime(250)
        .switchMap(term => this.jsonp.get(`https://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK&action=opensearch&format=json&search=${term}`))
        .map(res => res.json()[1]);

    constructor(public jsonp:Jsonp) {
    }
}
