ng2Boilerplate
=====================

The ultimate Angular 2 bootstrap single page app 
----------------

ready to be impressed with Angular 2?


Check this working demo: http://ng2.javascriptninja.io
====

The goal behind ng2Boilerplate is to deliver an easy to start Angular 2 base application that includes the basis around what any solid single page application requires.
I spent countless hours reading every Angular2 book and article I could get my hands on (so you don't have to),
and built IMHO the perfect Angular2 setup... 

- The goals are
   - Best workflow for development
   - Best production process
   - Touch as many ng2 areas as possible
   - strong modeling design (redux)
   - Power by commonly used components (sliders, bootstrap, charts, etc)


to install::
```             
git clone https://github.com/born2net/ng2Boilerplate.git
cd ng2Boilerplate
npm install jspm -g
npm install
```

development mode:
```
gulp development
```

production mode:
```
gulp production
```

What features of Angular does this app cover? well pretty much all the core stuff:

- powered by the awesome (awesome awesome) jspm (http://jspm.io/)
   - in development TypeScript is compiled in real time in browser, best workflow
   - for production minified bundle is created
   - support multi version npm / github repositories
- ng2-bootstrap components (https://github.com/valor-software/ng2-bootstrap)
- Support for the awesomeness of Redux dev tool with live time travel (http://goo.gl/PNG5nV) 
- Immutable.js (https://facebook.github.io/immutable-js/) Todo component with: 
   - backend server sync
   - local redux store (https://github.com/rackt/redux)
   - Extending Base class StoreModel makes working with Immutable.js a breeze
- Advanced Routing (also support async routing if jspm bundling is not used)
- Highcharts ng2 directive wrapper (http://www.highcharts.com) 
- StarWars movie shop powered by Redux store
- jQuery integration the Angular way via BrowserDomAdapter
- CommBroker dependency service, value sharing / mediator design pattern
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
- Gulp tasks for dev / prod, doc gen and more
- UI data binding / uni and 2 way
- Document generation
- and much more...

Generated docs are@ http://ng2.javascriptninja.io/docs/globals.html


Contributors are welcome!





