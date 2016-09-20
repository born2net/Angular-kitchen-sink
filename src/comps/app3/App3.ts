///<reference path="../../../typings/jquery/jquery.d.ts"/>

import {Component} from '@angular/core';
import {Starwars} from "./starwars/Starwars";
import App3Template from './App3.html!text';

@Component({
    moduleId: __moduleName,
    template: App3Template
})
export class App3 {

    constructor() {
    }
}