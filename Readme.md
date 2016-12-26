Angular kitchen sink
======================

The Ultimate Angular 2 (3,4,5...) kitchen sink Single Page App, because code samples are always better than docs! 
----------------

Powered by angular-cli

<p align="center">  
  <img src="http://www.digitalsignage.com/_images/kitchensinklogo.png">
</p>

Check this working demo: http://ng.javascriptninja.io
====

Cherry pick the snippets you like and use the code to see just what's possible with the awesomeness of Angular

<hr/>
to install::
```             
git clone https://github.com/born2net/Angular-kitchen-sink.git
cd Angular-kitchen-sink
npm install
open browser to http://localhost:4201/
```

<hr/>
What features of Angular does this app cover? everything:
- Gulp tasks for dev / prod, doc gen and more
   - use: gulp developer (to debug in real time (i.e.: compile TS in the browser and work close to the metal)
   - use: gulp development --restart (see below on details for best performance debugging)
   - use: gulp production (see below on details for server directory setup)
- ng-bootstrap components (https://github.com/valor-software/ng2-bootstrap)
- Support the awesomeness of Redux DevTool with live time travel (http://goo.gl/PNG5nV)
- Immutable.js (https://facebook.github.io/immutable-js/) Todo component with: 
   - backend server sync   
   - Extend Base class StoreModel makes working with Immutable.js a breeze and use the power of Typing
   - Using factory to always create immutable typed instances of a class
- Lazy loading with router (ngModules)
- Use modules with ANALYZE_FOR_ENTRY_COMPONENTS to allow for AOT component registration
- Sharing a global AuthService when loading via Feature module as well as when loading via Lazy route
- Highcharts directive wrapper (http://www.highcharts.com) 
- StarWars movie shop powered by Redux store
- ng-redux using multiple examples of deep selection to bind to specific  reducer / values 
- Pass custom styles to components via ngStyle and custom properties
- Pass in custom stylles via input and evaluate in component
- jQuery integration the Angular way via BrowserDomAdapter
- Access native HTML elements like <input> by inserting identifiers (i.e.: #anotherWayToGetInput)
- CommBroker dependency service, value sharing / mediator design pattern
- Custom @Decorator (@StyleDecorator) for components
- Component is passed in style via inputs and evaluates (light class)
- Component is styled using deep css selector from parent component (border)
- Use EventEmitter.observers and show element only when (onMyEvent) is bound to
- Use ngDoCheck with a combination of IterableDiffer or KeyValueDiffers to know when specific inputs to a component changed
- LocalStorage service
- Global Consts for event and vars registration
- Responsive design (on size change Angular components will react)
- Creation of a Component's Template from Dynamic HTML fragment (notes5)
- Creation of a Component's Template from component content
- Creation of a Component's Template without synthetic suga
- Create module dynamically and its declared components at runtime via compileModuleAndAllComponentsSync
- Create component dynamically at runtime and pass in template (tooltip)
- Multi slot transclusion
- RXjs powered Custom HTTP class that extends the default Http ng to add new behaviour
- Rxjs reactive operators and subscribers throughout the app (some random examples as well)
- Rxjs Change detection strategy for improved rendering of page (OnPushObserve)
- Rxjs Node server side CRUD for Observable client to server calls
- Rxjs... lots more of it...
- Use ANALYZE_FOR_ENTRY_COMPONENTS as part of ngModule provider so we can skip entryComponents
- Different ways to load and inject dynamic components (see Notes3 component)
- Import template into a component as a runtime string
- Create your own custom \*NgBookIf and \*ngBookRepeat directives with createEmbeddedView
- Force change detection via ref.markForCheck();
- Embedded SVG component
- Greensock SVG animation
- ngAnimate SVG
- Lots of standalone components such as Modal, Sliders, Todo, Tabs and more
- Shared state (Side menu and file menu)
- use module.moduleName inside component to be able to reference files paths locally (Notes1.ts)
- use contentWrap.childNodes.length to provide a default template to component if not provided by consumer
- use lazy loading of components when router enters path (NoteDynamic, kind of like require(...))
- manage app version by injecting from package.json and gulp bumping on release 
- Extend the Date pipe with custom implementation
- Extend the http service with an Http interceptor service
- ng2Animation
    - router animation
    - enter / leave states
    - default any / void animations 
- Dependency injection and decorators such as @Host
- Advanced decorators such as @HostListener @ContentChildren @Injectable and more
- Provide data to *ngFor declaratively via @ContentChildren
- Provide components to *ngFor declaratively via @ContentChildren
- Using @CanActivate we prevent user from accessing routes if not authenticated (checkout AppInjService)
- Using @CanDeactivate to demo user prompting when navigating away from a url route segment
- trackBy to create a custom identifier for *ngFor (trackBy:identify)
   - use nodeLogger to show ToDo items are only updated and not re-created when using our own identifier method
- Error handler service overrides ng error handling and provide custom options
- Dependency sharing
- Hook into application lifecycles
- Form and validation (both via FormBuilder and manual creating Control Groups)
- Generic implemntation, based classed of a form NG_VALUE_ACCESSOR (hexadecimal  form component)
- Use ng-container is a generic substitute to a none element (like template)
- Custom validators such as PasswordMatch (@Attribute)
- Form observables and operations including Async piping and more
- Form promised based field validation
- Form custom counter component compatible with both template and model forms
- Todo data model persistence and sync to node server via CRUD (node CRUD end point server side included)
- Subclass / Inheritance ES6 (Notes component) 
- Static shared lib and single reference file
- Theme service (supports 2 themes including Lite and Dark)
- Pipes including grid sort and character counter
- Use reflection to automatically show a component's name, super useful for debugging component location in page
- Interfaces
- UI data binding / uni and 2 way
- Document generation
- and much more...

if you are on a Windows environment I highly recommend you work with: http://cmder.net as well as https://www.cygwin.com

Looking for even more?
------------
checkout this enterprise level angular app that's forked off this project: https://github.com/born2net/studioDashboard

Recommended:
------------------------------------------------------------------------

for the ultimate store solution for angular2 watch:

[![The Ultimate redux typed store implementation for angular](http://img.youtube.com/vi/bEkPEnudm7s/0.jpg)](https://www.youtube.com/watch?v=bEkPEnudm7s&feature=youtu.be "The Ultimate redux typed store implementation for angular")








