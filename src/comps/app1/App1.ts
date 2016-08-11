import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {
    CommBroker,
    IMessage
} from "../../services/CommBroker";
import {Consts} from "../../../src/Conts";
import TodoStatsModel from "./todos/TodoStatsModel";
import {TodoService} from "./todos/TodoService";
import {TodoAction} from "./todos/actions/TodoAction";


// @Routes([
//     {path: '/Todos', component: Todos},
//     {path: '/Digg', component: Digg},
//     {path: '/Settings', component: Settings},
//     {path: '/Help', component: Help},
//     {path: '/Logout', component: Logout}
// ])

//CanActivate example of how to allow conditional route access after 10ms of Promise resolution
//@CanActivate(() => {
//    return new Promise(resolve => {
//        setTimeout(e=> {
//            resolve(true)
//        }, 10)
//    })
//})
@Component({
    providers: [TodoStatsModel, TodoService, TodoAction],
    templateUrl: '/src/comps/app1/App1.html'

})
export class App1 {
    private routerActive:boolean;

    constructor(private commBroker:CommBroker, private router:Router) {
        this.listenMenuChanges();

        // redirect to To do's
        router.navigate(['/App1/Todos']);
    }

    ngOnInit() {
        this.routerActive = true;
        this.commBroker.getService(Consts.Services().App).appResized();
    }

    /** Examples on router life-cycle hooks **/
    // routerCanReuse(next:ComponentInstruction, prev:ComponentInstruction) {
    //     return true;
    // }

    // routerOnReuse(segment:RouteSegment, tree:Tree<RouteSegment>) {
    //      console.log(segment);
    //     // console.log(to.urlPath ? to.urlPath : '' + ' ' + from.urlPath);
    // }

    // routerOnActivate(segment:RouteSegment, tree:Tree<RouteSegment>) {
    //     this.routerActive = true;
    //     // demonstrate delay on routing, maybe to load some server data first or show loading bar
    //     return new Promise((resolve) => {
    //         setTimeout(()=> {
    //             resolve(false);
    //         }, 3000)
    //     });
    // }

    public listenMenuChanges() {
        var self = this;
        var unsub = self.commBroker.onEvent(Consts.Events().MENU_SELECTION).subscribe((e:IMessage)=> {
            if (!self.routerActive)
                return;
            let screen = (e.message);
            self.router.navigate([`/App1/${screen}`]);
        });
    }

    // routerOnDeactivate(next:ComponentInstruction, prev:ComponentInstruction) {
    //     this.routerActive = false;
    // }
}