import {Component} from 'angular2/core';
import {
    ROUTER_DIRECTIVES, RouteConfig, Router, OnActivate, ComponentInstruction, CanReuse,
    OnReuse, CanActivate, OnDeactivate
} from 'angular2/router';
import {HTTP_PROVIDERS} from "angular2/http";
import {RouterLink, RouteParams} from 'angular2/router';
import {Menu} from "../sidemenu/Menu";
import {MenuItem} from "../sidemenu/MenuItem";
import {CommBroker} from "../../services/CommBroker";
import {Consts} from "../../../src/Conts";
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
import {TodosService} from "./todos/TodoService";
import {TodoAction} from "./todos/actions/TodoAction";
import {Todos} from "./todos/Todos";

@RouteConfig([
    {path: '/Todos', component: Todos, as: 'Todos', useAsDefault: true},
    {path: '/Digg', component: Digg, as: 'Digg'},
    {path: '/Settings', component: Settings, as: 'Settings'},
    {path: '/Help', component: Help, as: 'Help'},
    {path: '/Logout', component: Logout, as: 'Logout'}
])

//CanActivate example of how to allow conditional route access after 10ms of Promise resolution
//@CanActivate(() => {
//    return new Promise(resolve => {
//        setTimeout(e=> {
//            resolve(true)
//        }, 10)
//    })
//})
@Component({
    providers: [HTTP_PROVIDERS, TodoStatsModel, TodosService, TodoAction],
    templateUrl: '/src/comps/app1/App1.html',
    directives: [ROUTER_DIRECTIVES, RouterLink, Menu, MenuItem, Sliderpanel, Digg, Contributors,
        Todos, Todo1, Todo2, TodoList, TodoItem, Logout, Settings, Help, Tabs, Tab]
})
export class App1 implements OnActivate, CanReuse, OnReuse, OnDeactivate {
    private routerActive:boolean;

    constructor(private commBroker:CommBroker, private router:Router) {
        this.listenMenuChanges();
    }

    ngOnInit() {
        this.routerActive = true;
        this.commBroker.getService(Consts.Services().App).appResized();
    }

    /** Examples on router life-cycle hooks **/
    routerCanReuse(next:ComponentInstruction, prev:ComponentInstruction) {
        return true;
    }

    routerOnReuse(to:ComponentInstruction, from:ComponentInstruction) {
        //console.log(to.params['name']);
        // console.log(to.urlPath ? to.urlPath : '' + ' ' + from.urlPath);
    }

    routerOnActivate(to:ComponentInstruction, from:ComponentInstruction) {
        this.routerActive = true;
        // demonstrate delay on routing, maybe to load some server data first or show loading bar
        return new Promise((resolve) => {
            setTimeout(()=> {
                resolve(true);
            }, 10)
        });
    }

    public listenMenuChanges() {
        var self = this;
        var unsub = self.commBroker.onEvent(Consts.Events().MENU_SELECTION).subscribe((e:IMessage)=> {
            if (!self.routerActive)
                return;
            let screen = (e.message);
            self.router.navigate([`/App1/${screen}`]);
        });
    }

    routerOnDeactivate(next:ComponentInstruction, prev:ComponentInstruction) {
        this.routerActive = false;
    }
}