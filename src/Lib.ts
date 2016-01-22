
/** Common Library **/
import {Injectable} from 'angular2/core';

@Injectable()
export class Lib {

    static log(msg){
        console.log(new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1") + ': ' + msg);
    }

    static guid():string {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }


    //static loadMaterial(){
    //    if (
    //        System.has(`${window.location.origin}/src/styles/material-design/js/material.min.js`) ||
    //        System.has('/src/styles/material-design/js/material.min.js') ||
    //        System.has('material.min.js')
    //    ) {
    //        jQuery.material.init();
    //        console.log('re-init material');
    //        return;
    //    }
    //    var a:Promise<any> = System.import('src/styles/material-design/js/material.min.js');
    //    var b:Promise<any> = System.import('src/styles/material-design/js/ripples.min.js');
    //    Promise.all([a,b]).then(function(e){
    //        console.log('loaded material');
    //    })
    //}
}



/* tslint:disable */
// polyfill for Object.assign (not part of TS yet)
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
if (!Object.assign) {
    Object.defineProperty(Object, "assign", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function(target) {
            "use strict";
            if (target === undefined || target === null) {
                throw new TypeError("Cannot convert first argument to object");
            }

            var to = Object(target);
            for (var i = 1; i < arguments.length; i++) {
                var nextSource = arguments[i];
                if (nextSource === undefined || nextSource === null) {
                    continue;
                }
                nextSource = Object(nextSource);

                var keysArray = Object.keys(nextSource);
                for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
                    var nextKey = keysArray[nextIndex];
                    var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                    if (desc !== undefined && desc.enumerable) {
                        to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
    });
}