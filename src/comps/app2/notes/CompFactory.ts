import {
    Component,
    ViewChild,
    ComponentFactory,
    Compiler,
    ViewContainerRef
} from '@angular/core';

@Component({
    selector: 'MyComponent',
    template: `<h3 style="background-color: #00b0e8">Hello, I was created dynamically via compiler</h3>`
})
class MyComponent {
}

@Component({
    selector: 'CompFactory',
    template: `
    <h2>Above</h2>
     <div>
      <h2>Dynamicaly Add Elements</h2>
      <button (click)="addItem()">add hello</button>
      <div #placeholder></div>
    </div>
    <h2>Below</h2>
  `
})
export class CompFactory {
    constructor(private  view: ViewContainerRef, compiler: Compiler) {
        //todo: rc.6
        //this.componentFactory = compiler.compileComponentSync(MyComponent);
    }

    @ViewChild('placeholder', {read: ViewContainerRef}) viewContainerRef;
    private componentFactory: ComponentFactory<any>;

    addItem() {
        this.view.createComponent(this.componentFactory, 0);
    }
}