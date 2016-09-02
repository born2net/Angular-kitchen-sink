import {
    Component,
    ViewChild,
    ComponentFactory,
    Compiler,
    ViewContainerRef
} from '@angular/core';


//pass in whatever you need
function componentBuilder(template) {
    @Component({
        selector: 'my-component',
        template
    })
    class CustomComponent {
    }

    return CustomComponent;
}

@Component({
    selector: 'MyComponent',
    template: `<h3 style="background-color: #00b0e8">Hello, I was created dynamically via compiler</h3>`
})
class MyComponent {
}

@Component({
    selector: 'CompBuilder',
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
export class CompBuilder {
    constructor(private  view: ViewContainerRef, compiler: Compiler) {
        var myComponent = componentBuilder(`<h3 style="background-color: #00b0e8">My {{message}} Component</h3>`)
        //todo: rc.6
        ///this.componentFactory = compiler.compileComponentSync(myComponent);
    }

    @ViewChild('placeholder', {read: ViewContainerRef}) viewContainerRef;
    private componentFactory: ComponentFactory<any>;

    addItem() {
        var ref = this.view.createComponent(this.componentFactory, 0);
        ref.instance.message = 'Awesome!';
    }
}