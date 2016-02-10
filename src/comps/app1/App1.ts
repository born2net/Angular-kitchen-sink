import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';
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

@Component({
    providers: [HTTP_PROVIDERS, TodoStatsModel, TodosService, TodoAction],
    templateUrl: '/src/comps/app1/App1.html',
    directives: [ROUTER_DIRECTIVES, RouterLink, Menu, MenuItem, Sliderpanel, Digg, Contributors,
        Todos, Todo1, Todo2, TodoList, TodoItem, Logout, Settings, Help, Tabs, Tab]
})
export class App1 {

    constructor(private commBroker:CommBroker, private router:Router) {
        this.listenMenuChanges();
    }

    ngOnInit(){
        this.commBroker.getService(Consts.Services().App).appResized();
    }

    public listenMenuChanges() {
        var self = this;
        self.commBroker.onEvent(Consts.Events().MENU_SELECTION).subscribe((e:IMessage)=> {
            let screen = (e.message);
            self.router.navigate([`/App1/${screen}`]);
        });
    }
}