import {Component, ViewChild, ViewContainerRef, ComponentResolver} from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'DynamicWebImport',
    template: `
    <h2>Above</h2>
    <div #putStuffHere></div>
    <h2>Below</h2>
  `
})
export class DynamicWebImport {
    @ViewChild('putStuffHere', {read: ViewContainerRef}) putStuffHere;

    constructor(public compResolver:ComponentResolver) {
    }

    ngAfterViewInit() {
        const url = 'https://gist.githubusercontent.com/johnlindquist/90c0a12814939738809ae0dceacdcf93/raw/e95c3204af1335693a45d65dbb61162824ad5ab8/loadMe.ts';
        const importer = url => Observable.fromPromise(System.import(url));
        const resolve = comp => Observable.fromPromise(this.compResolver.resolveComponent(comp));
        importer(url)
            .switchMap(comp => resolve(comp['LoadMe']))
            .subscribe(factory => this.putStuffHere.createComponent(factory))
    }
}
