import {Component} from "@angular/core";
import {
    CommBroker,
    IMessage
} from "../../services/CommBroker";
import {Consts} from "../../../src/Conts";

/**
 Application 2 lazy loaded
 **/
@Component({
    templateUrl: "./App2.html"
})

export class App2 {
    private screens: any;
    private commBroker: CommBroker;

    constructor(commBroker: CommBroker) {
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
        self.commBroker.onEvent(Consts.Events().MENU_SELECTION).subscribe((e: IMessage) => {
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