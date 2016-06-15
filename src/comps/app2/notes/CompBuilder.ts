import {Component, ViewChild, ViewContainerRef, ComponentResolver} from '@angular/core';

//pass in whatever you need
function componentBuilder(template){
    @Component({
        selector: 'my-component',
        template
    })
    class CustomComponent{}

    return CustomComponent;
}
@Component({
    selector: 'CompBuilder',
    template: `
    <h2>Above</h2>
    <div #putStuffHere></div>
    <h2>Below</h2>
  `
})
export class CompBuilder {
    @ViewChild('putStuffHere', {read: ViewContainerRef}) putStuffHere;

    constructor(
        public view:ViewContainerRef,
        public compResolver:ComponentResolver
    ){}

    ngAfterViewInit(){
        this.compResolver.resolveComponent(componentBuilder(`<h3 style="background-color: #00b0e8">My {{message}} Component</h3>`))
            .then(factory => {
                const ref = this.putStuffHere.createComponent(factory);
                ref.instance.message = 'Awesome';
            })

    }
}
