// Compiled using typings@0.6.6
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/75249b97104d00c1ca2451ac29369009a5f2b101/redux-thunk/redux-thunk.d.ts
// Type definitions for redux-thunk
// Project: https://github.com/gaearon/redux-thunk
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module ReduxThunk {
    export interface Thunk extends Redux.Middleware {}
    export interface ThunkInterface {
      <T>(dispatch: Redux.Dispatch, getState?: () => T): any;
    }
}

declare module "redux-thunk" {
    var thunk: ReduxThunk.Thunk;
    export = thunk;
}