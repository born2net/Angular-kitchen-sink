import {Injector} from '@angular/core';
let appInjectorRef: Injector;
/**
 * With the help of appInjService we register the main app
 * injector and keep is via closure in appInjectorRef so we can always
 * grab it and easily get a reference to whatever component instance we wish,
 * that is provided through our main App.ts providers
 */
export const appInjService = (injector?: Injector): Injector => {
    if (injector)
        appInjectorRef = injector;
    return appInjectorRef;
};