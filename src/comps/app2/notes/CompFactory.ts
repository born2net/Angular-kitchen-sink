import {Component, ViewChild, ViewContainerRef, ComponentResolver} from '@angular/core';

@Component({
    selector: 'MyComponent',
    template: `<h3 style="background-color: #00b0e8">Hello, I was created dynamically via ComponentResolver</h3>`
})
class MyComponent{}

@Component({
    selector: 'CompFactory',
    template: `
    <h2>Above</h2>
    <div #putStuffHere></div>
    <h2>Below</h2>
  `
})
export class CompFactory {
    @ViewChild('putStuffHere', {read: ViewContainerRef}) putStuffHere;

    constructor(
        public view:ViewContainerRef,
        public compResolver:ComponentResolver
    ){}

    ngAfterViewInit(){
        this.compResolver.resolveComponent(MyComponent)
            .then(factory => {
                this.putStuffHere.createComponent(factory);
            })

    }
}
