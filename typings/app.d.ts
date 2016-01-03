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
///<reference path="../typings/bootbox/bootbox.d.ts" />

declare var assert: any;


interface BrowserNodeGlobal {
    Object: typeof Object;
    Array: typeof Array;
    Map: typeof Map;
    Set: typeof Set;
    Date: typeof Date;
    RegExp: typeof RegExp;
    JSON: typeof JSON;
    Math: typeof Math;
    assert(condition: any): void;
    Reflect: any;
    zone: any;
    getAngularTestability: Function;
    getAllAngularTestabilities: Function;
    angularDevMode: boolean;
    setTimeout: Function;
    clearTimeout: Function;
    setInterval: Function;
    clearInterval: Function;
}