import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import HelloWorldComponent from './hello-world-component';
import WorldHelloComponent from './world-hello-component';
import DynamicComponent from './dynamic-component';

@Component({
    selector: 'dynamic-app',
    template: `
    <div>
      <small>I am dynamic-app component</small>
      <h2>dynamically create components and pass in data</h2>
      <button (click)="createHelloWorldComponent()">Create Hello World</button>
      <button (click)="createWorldHelloComponent()">Create World Hello</button>
      <dynamic-component [componentData]="componentData"></dynamic-component>
    </div>
  `,
})
export class DynamicApp {
    componentData = null;

    createHelloWorldComponent(){
        this.componentData = {
            component: HelloWorldComponent,
            inputs: {
                showNum: 9
            }
        };
    }

    createWorldHelloComponent(){
        this.componentData = {
            component: WorldHelloComponent,
            inputs: {
                showNum: 2
            }
        };
    }
}

// @NgModule({
//     imports: [ BrowserModule ],
//     declarations: [ App, HelloWorldComponent, WorldHelloComponent, DynamicComponent],
//     bootstrap: [ App ]
// })
// export class AppModule {}