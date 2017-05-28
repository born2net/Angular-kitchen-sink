// Usage:
// @Component({
//     ...
// })
// @PageTrack('blog')
// export class PostsPageComponent {
//
//     constructor( private store : Store<any> ) {
//         this.posts$ = store.select('posts').pluck('data');
//     }
//
// }


export function PageTrack( pageName : string ): ClassDecorator {

    return function ( constructor : any ) {


        const ngOnInit = constructor.prototype.ngOnInit;

        constructor.prototype.ngOnInit = function ( ...args ) {
            // someExampleAnalyticsService.visit(pageName);
            ngOnInit && ngOnInit.apply(this, args);
        }

        const ngOnDestroy = constructor.prototype.ngOnDestroy;

        constructor.prototype.ngOnDestroy = function ( ...args ) {
            // someExampleAnalyticsService.leave(pageName);
            ngOnDestroy && ngOnDestroy.apply(this, args);
        }

    }
}