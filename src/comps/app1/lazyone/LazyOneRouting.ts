import {
    Routes,
    RouterModule
}  from '@angular/router';
import {LazyComponent} from './LazyComponent';
//import {Component, ChangeDetectionStrategy} from "@angular/core";
//import {Lib} from "src/Lib";

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

