ng2Boilerplate
=====================

The Ultimate Angular 2 kitchen sink Single Page App, because code samples are always better than docs! 
----------------

I have mastered the perfect workflow with in browser Typescript compilation for development, 
just in-time browser reloads on saves, and production ready via bundling, all powered by the awesome jspm, so enjoy the fruits of my labor!


Check this working demo: http://ng2.javascriptninja.io
====

The goal behind ng2Boilerplate is to deliver an easy to start Angular 2 base application that includes the basis around what any solid single page application requires.
I spent countless hours reading every Angular2 book and article I could get my hands on (so you don't have to),
and built IMHO the perfect Angular2 setup... 

- The goals are
   - Best workflow for development
   - Best production process
   - Touch as many ng2 areas as possible so you can use this project as examples for source code that actually works!
   - strong modeling design via redux and immutable.js  
   - Power by commonly used components (sliders, bootstrap, charts, etc)

<hr/>
to install::
```             
git clone https://github.com/born2net/ng2Boilerplate.git
cd ng2Boilerplate
npm install jspm -g
npm install
```
<hr/>
the project uses TypeScript 1.9+ since it is powered by ng2 latest router
```
npm install typescript@next --save
```

<hr/>
if you wish to use hot-reload so you can reload components as soon as you save for super quick development process, be sure to install the following:
```
npm install chokidar-socket-emitter --save-dev
npm install http-server --save-dev
jspm install systemjs-hot-reloader --dev
```
to learn more about hot-reload you can visit: https://github.com/capaj/systemjs-hot-reloader

<hr/>
development standard mode:
```
gulp development
open browser to: http://localhost:8080/src/public/index.html
```
<hr/>
development hot-reload mode:
```
npm run devserver
open browser to: http://localhost:9089/src/public/index.html
```
<hr/>

production mode:
```
gulp production
```
<hr/>
What features of Angular does this app cover? everything:

- Use System module mode in tsconfig and jspm.config.js for hot-reload, relative template / styles and production bundling
- powered by the awesome (awesome awesome) jspm version 0.17 beta (http://jspm.io & http://jspm.io/0.17-beta-guide/)
   - support hot-reload for the fastest component development cycle
   - in development TypeScript is compiled in real time in browser, best workflow
   - for production a jspm minified bundle is created
   - support multi version npm / github repositories
- Gulp tasks for dev / prod, doc gen and more
   - use: gulp developer (to debug in real time (i.e.: compile TS in the browser and work close to the metal)
   - use: gulp development --restart (see below on details for best performance debugging)
   - use: gulp production (see below on details for server directory setup)
- ng2-bootstrap components (https://github.com/valor-software/ng2-bootstrap)
- Support the awesomeness of Redux DevTool with live time travel (http://goo.gl/PNG5nV)
- Immutable.js (https://facebook.github.io/immutable-js/) Todo component with: 
   - backend server sync
   - local redux store (https://github.com/rackt/redux)
   - Extend Base class StoreModel makes working with Immutable.js a breeze and use the power of Typing
   - Using factory to always create immutable typed instances of a class
- Advanced Routing (also support async routing if jspm bundling is not used)
- Highcharts ng2 directive wrapper (http://www.highcharts.com) 
- StarWars movie shop powered by Redux store
- Pass custom styles to components via ngStyle and custom properties
- jQuery integration the Angular way via BrowserDomAdapter
- Access native HTML elements like <input> by inserting identifiers (i.e.: #anotherWayToGetInput)
- CommBroker dependency service, value sharing / mediator design pattern
- Custom @Decorator (@StyleDecorator) for components
- Use ngDoCheck with a combination of IterableDiffer or KeyValueDiffers to know when specific inputs to a component changed
- LocalStorage service
- Global Consts for event and vars registration
- Responsive design (on size change Angular components will react)
- Creation of a Component's Template from Dynamic HTML fragment (notes5)
- Multi slot transclusion
- RXjs powered Custom HTTP class that extends the default Http ng2 to add new behaviour
- Rxjs reactive operators and subscribers throughout the app (some random examples as well)
- Rxjs Change detection strategy for improved rendering of page (OnPushObserve)
- Rxjs Node server side CRUD for Observable client to server calls
- Rxjs... lots more of it...
- Dynamic component factory
- Create your own custom \*NgBookIf and \*ngBookRepeat directives with createEmbeddedView
- Force change detection via ref.markForCheck();
- Lots of standalone components such as Modal, Sliders, Todo, Tabs and more
- Shared state (Side menu and file menu)
- use module.moduleName inside component to be able to reference files paths locally (Notes1.ts)
- use contentWrap.childNodes.length to provide a default template to component if not provided by consumer
- use lazy loading of components when router enters path (NoteDynamic, kind of like require(...))
- Dependency injection and decorators such as @Host
- Advanced decorators such as @HostListener @ContentChildren @Injectable and more
- Using @CanActivate we prevent user from accessing routes if not authenticated (checkout AppInjService)
- Using @CanDeactivate to demo user prompting when navigating away from a url route segment
- trackBy to create a custom identifier for *ngFor (trackBy:identify)
   - use nodeLogger to show ToDo items are only updated and not re-created when using our own identifier method 
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

Debugging:
---------
jspm is great as you get to debug close to the metal (not like Webpack all bundled up and hard to reason about)
for best performance I find it's great to restart the web dev server every 30min, hence gulp + forever:
```
gulp development --restart
forever stopall ; forever start -a -l f.log node_modules/gulp/bin/gulp.js development --restart ; tail -f ~/.forever/f.log
open browser to: http://localhost:8080/src/public/index.html
alias stop='forever stopall'
```
this above will create a process that restarts every 30 minutes but it's transparent to you.

Another handy command to shortcut kill chrome sessions to start a fresh one is:
```
alias kill_chrome='ps -W | awk '\''/chrome/,NF=1'\'' | xargs kill -f'
```

and if you are on a Windows environment I highly recommend you work with:
http://cmder.net for the ultimate windows terminal
as well as Cygwin for Linux look and feel
https://www.cygwin.com

just my 2 cents, I spent a lot of time mastering my dev environment, so figured I will share ;)




Production: 
------------
jspm is also great for release as it bundles and minifies.
to release to production
   1. change the gulp sync to your method of rsync of ftp 
   2. your server should have the structure emitted in the 'dist' folder that is created by 
   ```gulp production```
   3. server hosting root is assumed to be same as dist folder (where dist/ROOT_HERE) 
   4. all Typescript files are bundles where css and html are copied raw to dist folder for bets performance / size ratio

All this awesomeness tx to jspm, love it!!!

Looking for even more?
------------
checkout this enterprise level angular 2 app: https://github.com/born2net/studioDashboard

Notes:
------------
all project (non dev) dependency modules are installed in jspm_packages, however we also install them as dev dependency modules under node_modules just to make Typescript / Intellisense happy; that is until Typescript 2.0 comes out and we can get rid of non dev modules in node_modules all together.

Docs: Generated docs are@ http://ng2.javascriptninja.io/docs/globals.html

Contributors are welcome!





