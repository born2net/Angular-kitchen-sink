import {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';
@Component({
    selector: 'Clock',
    template: `
    {{clock | async | date:'medium'}}    
`
})
export class Clock {
    clock = Observable
        .interval(1000)
        .map(()=> new Date());
}