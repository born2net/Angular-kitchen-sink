///<reference path="../typings/app.d.ts"/>

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

    static loadMaterial(){
        if (
            System.has(`${window.location.origin}/src/styles/material-design/js/material.min.js`) ||
            System.has('/src/styles/material-design/js/material.min.js') ||
            System.has('material.min.js')
        ) {
            jQuery.material.init();
            console.log('re-init material');
            return;
        }
        var a:Promise<any> = System.import('src/styles/material-design/js/material.min.js');
        var b:Promise<any> = System.import('src/styles/material-design/js/ripples.min.js');
        Promise.all([a,b]).then(function(e){
            console.log('loaded material');
        })
    }
}
