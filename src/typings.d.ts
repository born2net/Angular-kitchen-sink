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

// declare var bootbox: any

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




interface BootboxAlertOptions {
  size?: string;
  message: string;
  callback?: () => any;
}

interface BootboxConfirmOptions {
  size?: string;
  message: string;
  callback: (result: boolean) => any;
}

interface BootboxPromptOptions {
  title?:any;
  inputType?:any;
  buttons?:any;
  size?: string;
  message?: string;
  callback: (result: string) => any;
}

interface BootboxButton {
  label?: string;
  className?: string;
  callback?: () => any;
}

interface BootboxButtonMap {
  [key: string]: BootboxButton | Function;
}

interface BootboxDialogOptions {
  message: string | Element;
  title?: string | Element;
  locale?: string;
  callback?: (result: boolean) => any;
  onEscape?: () => any | boolean;
  show?: boolean;
  backdrop?: boolean;
  closeButton?: boolean;
  animate?: boolean;
  className?: string;
  size?: string;
  buttons?: BootboxButtonMap; // complex object where each key is of type BootboxButton
}

interface BootboxDefaultOptions {
  locale?: string;
  show?: boolean;
  backdrop?: boolean;
  closeButton?: boolean;
  animate?: boolean;
  className?: string;
}

interface BootboxLocaleValues {
  OK: string;
  CANCEL: string;
  CONFIRM: string;
}

interface BootboxStatic {
  alert(message: string, callback?: () => void): JQuery;
  alert(options: BootboxAlertOptions): JQuery;
  confirm(message: string, callback: (result: boolean) => void): JQuery;
  confirm(options: BootboxConfirmOptions): JQuery;
  prompt(message: string, callback: (result: string) => void): JQuery;
  prompt(options: BootboxPromptOptions): JQuery;
  dialog(message: string, callback?: (result: string) => void): JQuery;
  dialog(options: BootboxDialogOptions): JQuery;
  setDefaults(options: BootboxDefaultOptions): void;
  hideAll(): void;

  addLocale(name: string, values: BootboxLocaleValues): void;
  removeLocale(name: string): void;
  setLocale(name: string): void;
}

declare var bootbox: any;

declare module "bootbox" {
  export = bootbox;
}