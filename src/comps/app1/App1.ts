import {
    Component,
    ViewChild
} from "@angular/core";
import {Router} from "@angular/router";
import {
    CommBroker,
    IMessage
} from "../../services/CommBroker";
import {Consts} from "../../../src/Conts";
import TodoStatsModel from "./todos/TodoStatsModel";
import {TodoService} from "./todos/TodoService";
import App1Template from './App1.html!text'
import {ModalDirective} from "ng2-bootstrap";


@Component({
    moduleId: __moduleName,
    providers: [TodoStatsModel, TodoService],
    template: App1Template

})
export class App1 {
    private routerActive: boolean;
    private unsub1;
    private unsub2;
    private loading: boolean = false;

    constructor(private commBroker: CommBroker, private router: Router) {
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

    @ViewChild('lgModal') public lgModal: ModalDirective;

    public listenMenuChanges() {
        var self = this;
        this.unsub1 = self.commBroker.onEvent(Consts.Events().LAZYLOAD_COMPLETED).subscribe((e: IMessage) => {
            this.lgModal.hide();
        });
        this.unsub2 = self.commBroker.onEvent(Consts.Events().MENU_SELECTION).subscribe((e: IMessage) => {
            if (!self.routerActive)
                return;
            let screen = (e.message);
            if (screen == 'LazyLoad')
                if (!this.loading) {
                    this.loading = true;
                    this.lgModal.show();
                }
            self.router.navigate([`/App1/${screen}`]);
        });
    }

    ngOnDestroy() {
        this.unsub1.unsubscribe();
        this.unsub2.unsubscribe();
    }

    // routerOnDeactivate(next:ComponentInstruction, prev:ComponentInstruction) {
    //     this.routerActive = false;
    // }
}