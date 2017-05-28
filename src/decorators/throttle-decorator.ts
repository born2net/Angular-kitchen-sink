// Usage:
// @Component({
//     selector: 'app-posts-page',
//     template: `
//         <posts [posts]="posts$ | async"></posts>
//     `
// })
// export class PostsPageComponent {
//     constructor( private store : Store<any> ) {
//         this.posts$ = store.select('posts');
//     }
//
//     @HostListener('document:scroll')
//     @throttle()
//     scroll() {
//         console.log('scroll');
//     }
//
// }

import * as _ from "lodash";

export function throttle( milliseconds : number = 500 ) : MethodDecorator {
    return function ( target : any, propertyKey : string, descriptor : PropertyDescriptor ) {
        const original = descriptor.value;
        descriptor.value = _.throttle(original, milliseconds);
        return descriptor;
    };
}