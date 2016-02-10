///<reference path="../../../typings/jquery/jquery.d.ts" />

import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouterLink, RouteParams} from 'angular2/router';
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
import {HTTP_PROVIDERS} from "angular2/http";
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
    directives: [ROUTER_DIRECTIVES, RouterLink, DividerPanel, Menu, MenuItem, Sliderpanel, Digg, Properties,
        Notes, Notes1, Notes2, Notes3, Notes4, Notes5, Weather, Logout, Contact, ModalDialog]
})
export class App2 {
    private screens:any;
    private commBroker:CommBroker;

    constructor(params:RouteParams, commBroker:CommBroker, Consts:Consts) {
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