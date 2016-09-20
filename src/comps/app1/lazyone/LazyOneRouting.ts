import {
    Routes,
    RouterModule
}  from '@angular/router';

import {AAAA} from './aa';

import {Component, ChangeDetectionStrategy} from "@angular/core";
// import {Lib} from "src/Lib";



const routes: Routes = [{
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
}, {
    path: 'list',
    component: AAAA
}, {
    path: ':id',
    component: AAAA
}];

export const lazyOneRouting = RouterModule.forChild(routes);

