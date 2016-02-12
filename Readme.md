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
- Gulp tasks for dev / prod, doc gen and more
   - use: gulp developer (to debug in real time (i.e.: compile TS in the browser and work close to the metal)
   - use: gulp development --restart (see below on details for best performance debugging)
   - use: gulp production (see below on details for server directory setup)
- ng2-bootstrap components (https://github.com/valor-software/ng2-bootstrap)
- Support the awesomeness of Redux DevTool with live time travel (http://goo.gl/PNG5nV)
- Immutable.js (https://facebook.github.io/immutable-js/) Todo component with: 
   - backend server sync
   - local redux store (https://github.com/rackt/redux)
   - Extending Base class StoreModel makes working with Immutable.js a breeze
   - Using factory to always create immutable typed instances of a class
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
- Advanced decorators such as @HostListener @CanActivate @ContentChildren @Injectable and more
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
for best performance I find it's great to restart the web dev server every 10min, hence gulp + forever:
```
gulp development --restart
forever stopall ; forever start -a -l f.log node_modules/gulp/bin/gulp.js development --restart ; tail -f ~/.forever/f.log
open browser to: http://localhost:8080/src/public/index.html
alias stop='forever stopall'
```
this above will create a process that restarts every 10minutes but it's transparent to you.

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

Notes:
------------
all project (non dev) dependency modules are installed in jspm_packages, however we also install them as dev dependency modules under node_modules just to make Typescript / Intellisense happy; that is until Typescript 2.0 comes out and we can get rid of non dev modules in node_modules all together.

Docs: Generated docs are@ http://ng2.javascriptninja.io/docs/globals.html

Contributors are welcome!





