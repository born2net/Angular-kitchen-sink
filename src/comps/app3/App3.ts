///<reference path="../../../typings/jquery/jquery.d.ts"/>

import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouterLink, RouteParams} from 'angular2/router';
import {Starwars} from "./starwars/Starwars";

@Component({
    templateUrl: '/src/comps/app3/App3.html',
    directives: [ROUTER_DIRECTIVES, RouterLink, Starwars]
})
export class App3 {

    constructor() {
    }
}