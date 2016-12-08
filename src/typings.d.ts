// Typings reference file, you can add your own global typings here
// https://www.typescriptlang.org/docs/handbook/writing-declaration-files.html


// import {Middleware, Dispatch} from "redux";
// export type ThunkAction<R, S, E> = (dispatch: Dispatch<S>, getState: () => S,
//                                     extraArgument: E) => R;
// declare module "redux" {
//   export interface Dispatch<S> {
//     <R, E>(asyncAction: ThunkAction<R, S, E>): R;
//   }
// }
// declare const thunk: Middleware & {
//   withExtraArgument(extraArgument: any): Middleware;
// };
// export default thunk;

declare module Reflect {
  function apply(target: Function, thisArgument: any, argumentsList: ArrayLike<any>): any;
  function construct(target: Function, argumentsList: ArrayLike<any>): any;
  function getMetadata(annotations:string, constructor:any):any;
  function defineProperty(target: any, propertyKey: PropertyKey, attributes: PropertyDescriptor): boolean;
  function deleteProperty(target: any, propertyKey: PropertyKey): boolean;
  function get(target: any, propertyKey: PropertyKey, receiver?: any): any;
  function getOwnPropertyDescriptor(target: any, propertyKey: PropertyKey): PropertyDescriptor;
  function getPrototypeOf(target: any): any;
  function has(target: any, propertyKey: PropertyKey): boolean;
  function isExtensible(target: any): boolean;
  function ownKeys(target: any): Array<PropertyKey>;
  function preventExtensions(target: any): boolean;
  function set(target: any, propertyKey: PropertyKey, value: any, receiver?: any): boolean;
  function setPrototypeOf(target: any, proto: any): boolean;
}

declare module 'redux-thunk' {
  import { Middleware, Dispatch} from 'redux';
  const thunkMiddleware : Middleware;
  export default thunkMiddleware;

}


interface JQuery {
  modal:any;
}

