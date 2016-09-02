// reference: http://plnkr.co/edit/JazedoqzZvZIumg5hTHI?p=preview

import {
    Component,
    ViewChild,
    ViewContainerRef,
    Compiler
} from '@angular/core';
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

    @ViewChild('placeholder', {read: ViewContainerRef}) viewContainerRef;
    private componentFactory: any;

    constructor(public compiler:Compiler) {
        const url = 'https://raw.githubusercontent.com/born2net/ng2Boilerplate/master/src/comps/app2/notes/LoadMeComp.ts';
        const importer = url => Observable.fromPromise(System.import(url));
        //todo: rc.6
        // importer(url).subscribe((component) => {
        //     this.componentFactory = this.compiler.compileComponentSync(component['LoadMeComp']);
        // });
    }

    addItem () {
        this.viewContainerRef.createComponent(this.componentFactory, 0);
    }

    // ngAfterViewInit() {
    //     const url = 'https://raw.githubusercontent.com/born2net/ng2Boilerplate/master/src/comps/app2/notes/LoadMeComp.ts';
    //     const importer = url => Observable.fromPromise(System.import(url));
    //     const resolve = comp => Observable.fromPromise(this.compResolver.resolveComponent(comp));
    //     importer(url)
    //         .switchMap(comp => resolve(comp['LoadMeComp']))
    //         .subscribe(factory => this.putStuffHere.createComponent(factory))
    // }
}
