///<reference path="../../../typings/jquery/jquery.d.ts" />

import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
//import {RouterLink, RouteParams} from '@angular/router';
import {MenuItem} from "../sidemenu/MenuItem";
import {Menu} from "../sidemenu/Menu";
import {CommBroker} from "../../services/CommBroker";
import {Consts} from "../../../src/Conts";
import {IMessage} from "../../services/CommBroker";
import {Sliderpanel} from "../sliderpanel/Sliderpanel";
import {Notes} from "./notes/Notes";
import {Notes1} from "./notes/Notes1";
import {Notes2} from "./notes/Notes2";
import {Notes3} from "./notes/Notes3";
import {Notes4} from "./notes/Notes4";
import {Notes5} from "./notes/Notes5";
import {Digg} from "../digg/Digg";
import {HTTP_PROVIDERS} from "@angular/http";
import {Logout} from "../logout/Logout";
import {Contact} from "./contact/Contact";
import {DividerPanel} from "../dividerpanel/DividerPanel";
import {ModalDialog} from "../modaldialog/ModalDialog";
import {Properties} from "./properties/Properties";
import {Weather} from "./weather/Weather";

/**
 Application 2 lazy loaded
 **/
@Component({
    templateUrl: '/src/comps/app2/App2.html',
    providers: [HTTP_PROVIDERS],
    directives: [ROUTER_DIRECTIVES, DividerPanel, Menu, MenuItem, Sliderpanel, Digg, Properties,
        Weather, Logout, Contact, ModalDialog, Notes, Notes1, Notes2, Notes3, Notes4, Notes5, Contact, ModalDialog]
})

export class App2 {
    private screens:any;
    private commBroker:CommBroker;

    constructor(commBroker:CommBroker) {
        var self = this;
        jQuery(".navbar-header .navbar-toggle").trigger("click");
        jQuery('.navbar-nav').css({
            display: 'block'
        });

        self.commBroker = commBroker;
        self.screens = {
            notes: true,
            weather: false,
            digg: false,
            contact: false,
            logout: false
        };
        self.listenMenuChanges();
    }

    ngOnInit() {
        //this.routerActive = true;
        this.commBroker.getService(Consts.Services().App).appResized();
    }

    private listenMenuChanges() {
        var self = this;
        self.commBroker.onEvent(Consts.Events().MENU_SELECTION).subscribe((e:IMessage)=> {
            var screen = (e.message).toLowerCase();
            if (!self.screens.hasOwnProperty(screen))
                return;
            for (let screen in self.screens)
                self.screens[screen] = false;
            self.screens[screen] = true;
        });
    }
}

// in TS1.8+ we can Augment the global/module scope from inside modules:
// ref: https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript
// declare global {
//     interface Array<T> {
//         mapToNumbers(): number[];
//     }
// }