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

// interface StringJS {
//
//   length: number;
//
//   s: string;
//
//   between(left: string, right?: string): StringJS;
//
//   camelize(): StringJS;
//
//   capitalize(): StringJS;
//
//   chompLeft(prefix: string): StringJS;
//
//   chompRight(suffix: string): StringJS;
//
//   collapseWhitespace(): StringJS;
//
//   contains(ss: string): boolean;
//
//   count(substring: string): number;
//
//   dasherize(): StringJS;
//
//   decodeHTMLEntities(): StringJS;
//
//   endsWith(ss: string): boolean;
//
//   escapeHTML(): StringJS;
//
//   ensureLeft(prefix: string): StringJS;
//
//   ensureRight(suffix: string): StringJS;
//
//   humanize(): StringJS;
//
//   include(ss: string): boolean;
//
//   isAlpha(): boolean;
//
//   isAlphaNumeric(): boolean;
//
//   isEmpty(): boolean;
//
//   isLower(): boolean;
//
//   isNumeric(): boolean;
//
//   isUpper(): boolean;
//
//   latinise(): StringJS;
//
//   left(n: number): StringJS;
//
//   lines(): string[];
//
//   pad(len: number, char?: string|number): StringJS;
//
//   padLeft(len: number, char?: string|number): StringJS;
//
//   padRight(len: number, char?: string|number): StringJS;
//
//   parseCSV(delimiter?: string, qualifier?: string, escape?: string, lineDelimiter?: string): string[];
//
//   repeat(n: number): StringJS;
//
//   replaceAll(ss: string, newStr: string): StringJS;
//
//   strip(...strings: string[]): StringJS;
//
//   right(n: number): StringJS;
//
//   setValue(string: any): StringJS;
//
//   slugify(): StringJS;
//
//   startsWith(prefix: string): boolean;
//
//   stripPunctuation(): StringJS;
//
//   stripTags(...tags: string[]): StringJS;
//
//   template(values: Object, open?: string, close?: string): StringJS;
//
//   times(n: number): StringJS;
//
//   toBoolean(): boolean;
//
//   toCSV(delimiter?: string, qualifier?: string): StringJS;
//
//   toCSV(options: {
//     delimiter?: string,
//     qualifier?: string,
//     escape?: string,
//     encloseNumbers?: boolean,
//     keys?: boolean
//   }): StringJS;
//
//   toFloat(precision?: number): number;
//
//   toInt(): number;
//
//   toInteger(): number;
//
//   toString(): string;
//
//   trim(): StringJS;
//
//   trimLeft(): StringJS;
//
//   trimRight(): StringJS;
//
//   truncate(length: number, chars?: string): StringJS;
//
//   underscore(): StringJS;
//
//   unescapeHTML(): StringJS;
//
//   wrapHTML(element?: string, attributes?: Object): StringJS;
//
//   isBlank(): boolean;
//
//   isNotBlank(): boolean;
//
//   booleanToNumber(forceCasting?:boolean): 0|1|string;
//
//   fileTailName(i_level: number):StringJS;
//
//   isBlank():boolean;
//
//   cleanChar():StringJS;
//
//   toCurrency(format?:'us'|'eu'):StringJS;
//
//   toPercent():StringJS;
// }
// type StringJSType = {(o: any): StringJS};
// declare module "string" {
//   var S: {
//     (o: any): StringJS;
//     default: StringJSType,
//     VERSION: string;
//     TMPL_OPEN: string;
//     TMPL_CLOSE: string;
//   }
//   export = S;
// }
// declare var StringJS: {(o: any): StringJS};
//
//
//
//
