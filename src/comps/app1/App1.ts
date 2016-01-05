import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS} from "angular2/http";
import {RouterLink, RouteParams} from 'angular2/router';
import {Menu} from "../sidemenu/Menu";
import {MenuItem} from "../sidemenu/MenuItem";
import {CommBroker} from "../../services/CommBroker";
import {Consts} from "../../Conts";
import {IMessage} from "../../services/CommBroker";
import {Sliderpanel} from "../sliderpanel/Sliderpanel";
import {Digg} from "../digg/Digg";
import {Tabs} from "../tabs/tabs";
import {Tab} from "../tabs/tab";
import {Logout} from "../logout/Logout";
import {Settings} from "./settings/Settings";
import {Help} from "./help/Help";
import {Todo1} from "./todos/Todo1";
import {Todo2} from "./todos/Todo2";
import {TodoList} from "./todos/Todolist";
import {TodoItem} from "./todos/Todoitem";
import TodoStatsModel from "./todos/TodoStatsModel";
import {Contributors} from "./help/contributors/contributors";
import {RefreshTheme} from "../../styles/RefreshTheme";
/**
 Application 1 lazy loaded
 **/
@Component({
    providers: [HTTP_PROVIDERS, TodoStatsModel],
    templateUrl: 'src/comps/app1/App1.html',
    directives: [ROUTER_DIRECTIVES, RouterLink, Menu, MenuItem, Sliderpanel, Digg,
        Todo1, Todo2, TodoList, TodoItem, Logout, Settings, Help, Tabs, Tab, Contributors]
})
export class App1 extends RefreshTheme {
    private screens:any;
    private commBroker:CommBroker;

    constructor(params:RouteParams, commBroker:CommBroker, Consts:Consts) {
        super();
        var self = this;
        self.commBroker = commBroker;
        self.screens = {
            todos: true,
            digg: false,
            settings: false,
            help: false,
            logout: false
        };
        self.listenMenuChanges();
    }

    public listenMenuChanges() {
        var self = this;
        self.commBroker.onEvent(Consts.Events().MENU_SELECTION).subscribe((e:IMessage)=> {
            let screen = (e.message).toLowerCase();
            if (!self.screens.hasOwnProperty(screen)) {
                console.log('no screen by the name of ' + screen);
                return;
            }

            for (let screen in self.screens)
                self.screens[screen] = false;
            self.screens[screen] = true;
        });
    }
}