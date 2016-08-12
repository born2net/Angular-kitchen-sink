import {
    Routes,
    RouterModule
}  from '@angular/router';
import {LazyComponent} from "./LazyComponent";

const routes: Routes = [{
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
}, {
    path: 'list',
    component: LazyComponent
}, {
    path: ':id',
    component: LazyComponent
}];

export const lazyOneRouting = RouterModule.forChild(routes);

