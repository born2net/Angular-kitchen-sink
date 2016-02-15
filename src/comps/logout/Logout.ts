///<reference path="../../../typings/app.d.ts" />

import {Component} from "angular2/core";

@Component({
    selector: 'Logout',
    template: `
        <h1><Center>Goodbye</Center></h1>
        <small>I am Logout component</small>
        `
})

export class Logout {
    constructor() {
        jQuery('body').fadeOut(3000, function () {
            window.location.replace("https://github.com/born2net/ng2Boilerplate");
        });
    }
}
