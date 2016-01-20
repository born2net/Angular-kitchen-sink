ng2Boilerplate
=====================

An Angular 2 and Bootstrap easy to start, A-Z startup project
----------------

ready to be impressed with Angular 2?


Check this working demo: http://ng2.javascriptninja.io
====

this project is available in 2 flavors:
- webpack: https://github.com/born2net/ng2Boilerplate-webpack
- systemjs: https://github.com/born2net/ng2Boilerplate

The goal behind ng2Boilerplayer is to deliver an easy to start Angular 2 base application that includes the basis around what any solid single page application requires.

to install::
```
git clone https://github.com/born2net/ng2Boilerplate.git
cd ng2Boilerplate/
npm install
gulp LiveServer
```

and for your TypeScript compiler to transpile use the args of:
```
--target es5 --module system --experimentalDecorators --preserveConstEnums true --sourceMap true --emitDecoratorMetadata
```

(optionally: copy node_modules/angular2 and node_modules/rxjs from ./node_modules directory to root of project so TypeScript can find it in the path while transpiling.
 However you don’t need these directories during runtime as system.js will load both libs from node_moduldes directory respectively)

What features of Angular does this app cover? well pretty much all the core stuff:

- System.js modulated async loader (not a fan of Webpack and it's black magic)
- Routing with Async of modules (App1 and App2) on a per navigation basis
- jQuery integration the Angular way via BrowserDomAdapter
- CommBroker dependency service, value sharing and mediator design pattern
- LocalStorage service
- Global Consts for event and vars registration
- Responsive design (on size change Angular components will react) 
- Rxjs reactive operators and subscribers throughout the app (some random examples as well)
- Rxjs Change detection strategy for improved rendering of page (OnPushObserve)
- Rxjs Node server side CRUD for Observable client to server calls
- Lots of standalone components such as Modal, Sliders, Todo, Tabs and more
- Shared state (Side menu and file menu)
- Dependency injection and decorators such as @Host
- Dependency sharing
- ES6 such as arrow functions, Map, let and more
- Hook into application lifecycles
- Form and validation (both via FormBuilder and manual creating Control Groups)
- Form observables and operations including Async piping and more
- Form promised based field validation
- Todo data model persistence and sync to node server via CRUD
- Subclass / Inheritance ES6 (Notes component) 
- Static shared lib and single reference file
- Theme service (supports 3 themes including Lite, Dark and Polymer)
- Pipes including grid sort and character counter
- Interfaces
- UI data binding / uni and 2 way
- Document generation
- and much more...

Generated docs are@ http://ng2.javascriptninja.io/docs/globals.html


Contributors are welcome!





