/**
 * Declarations angular depends on for compilation to ES6.
 * This file is also used to propagate our transitive typings
 * to users.
 */


// <reference path="../typings/hammerjs/hammerjs.d.ts"/>
// <reference path="../typings/jasmine/jasmine.d.ts"/>
// <reference pathn="../typings/angular-protractor/angular-protractor.d.ts"/>
// <reference path="../typings/node/node.d.ts" />

//<reference path="../typings/es6-shim/es6-shim.d.ts" />
//<reference path="../typings/zone.js/zone.js.d.ts"/>

///<reference path="../typings/jquery/jquery.d.ts" />

///<reference path="../typings/systemjs/systemjs.d.ts" />
///<reference path='../node_modules/immutable/dist/Immutable.d.ts'/>
///<reference path="../typings/browser/ambient/redux/redux.d.ts" />
///<reference path="../typings/browser/ambient/redux-thunk/redux-thunk.d.ts" />
///<reference path="../typings/browser/ambient/reselect/reselect.d.ts" />
///<reference path="../typings/bootbox/bootbox.d.ts" />
///<reference path="../typings/lodash/lodash.d.ts" />
///<reference path="../typings/moment/moment-node.d.ts" />

declare var assert: any;

interface Window {
    devToolsExtension: any;
    devToolsExtensionDisabled: any;
    DOMParser:any;
}

declare var watch:any;

// in TS1.8 we can use this:
//declare global {
//    devToolsExtension: any;
//    devToolsExtensionDisabled: any;
//    devToolsExtensionDisabled Array<T> {
//}


