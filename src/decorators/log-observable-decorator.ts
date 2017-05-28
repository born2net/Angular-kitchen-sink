// Usage:
// @Component({
//     selector: 'posts-page',
//     template: `
//         <posts [posts]="posts$ | async"></posts>
//     `
// })
// export class PostsPageComponent implements OnInit {
//
//     @log$ posts$ : Observable<Post[]>;
//
//     constructor( private store : Store<any> ) {
//         this.posts$ = store.select('posts');
//     }
//
// }

import {Observable} from "rxjs/Observable";
export function log$(target : any, propertyKey : string ) {
    let propertyValue;

    function getter() {
        return propertyValue;
    }

    function setter( value : any ) {
        if( value instanceof Observable ) {
            propertyValue = value.do(res => {
                const isArrayOfObjects = Array.isArray(res) && typeof res[0] === 'object';
                const logType = isArrayOfObjects ? 'table' : 'log';
                console.groupCollapsed(propertyKey);
                console[logType](res)
                console.groupEnd();
            });
        } else {
            propertyValue = value;
        }
    }

    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}