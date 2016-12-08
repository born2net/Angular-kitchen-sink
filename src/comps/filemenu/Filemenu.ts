import {
    Component,
    ViewContainerRef,
    Inject
} from "@angular/core";
import {FilemenuItem} from "./FilemenuItem";
import {
    Router,
    ActivatedRoute,
    NavigationStart
} from "@angular/router";
import {CommBroker} from "../../services/CommBroker";
import {Consts} from "../../Conts";
import {DOCUMENT} from "@angular/platform-browser";

/**
 Filemenu manages the top header file menu per application as it mutates it's content depending
 on which App has loaded
 @class Filemenu
 **/
@Component({
    selector: 'Filemenu',
    inputs: ['appPrefix'],
    template: `
        <div>
             <div class="m_fileMenuWrap">
                <ul class="nav navbar-nav" >
                <li id="commonFileMenu" class="hidden-lg" dropdown>
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">Navigatior<b class="caret"></b></a>
                  <ul class="dropdown-menu">
                  <li class="divider"></li>
                    <li *ngFor="let item of m_renderedItems" (click)="listenMenuSelected($event)">
                       <a href="#">{{item.title}}</a>
                    </li>
                    <li class="divider"></li>
                  </ul>
                </li>
              </ul>
            </div>
        </div>
    `
})
export class Filemenu {
    private m_items: FilemenuItem[];
    private m_renderedItems: any[];
    private m_fileMenuWrap: any;
    private m_commBroker: CommBroker;
    private el: any;
    private viewContainer: ViewContainerRef;

    constructor(viewContainer: ViewContainerRef, @Inject(DOCUMENT) private dom, private router: Router, private activatedRoute: ActivatedRoute, commBroker: CommBroker) {
        var self = this;
        self.m_commBroker = commBroker;
        self.m_items = [];
        self.m_renderedItems = [];
        self.viewContainer = viewContainer;
        self.el = viewContainer.element.nativeElement;
        self.m_fileMenuWrap = self.dom.getElementsByClassName(self.el, 'm_fileMenuWrap');

        this.router.events.subscribe((navigationStart: NavigationStart) => {
            return;
            // var currentRoute:string = this.router.serializeUrl(navigationStart.url);
            // currentRoute = currentRoute.replace(/\//,'');
            // self.m_renderedItems = [];
            // for (var item in self.m_items) {
            //     if (self.m_items[item]['app'] == currentRoute)
            //         self.m_renderedItems.push(self.m_items[item]);
            // }
            // if (self.m_renderedItems.length == 0) {
            //     jQuery(self.m_fileMenuWrap).fadeOut('slow', function () {
            //         //notify ng2 of the changes so we comply with change strategy
            //         self.dom.setStyle(self.el, 'opacity', '0');
            //     });
            // } else {
            //     jQuery(self.m_fileMenuWrap).fadeIn('slow', function () {
            //         //notify ng2 of the changes so we comply with change strategy
            //         self.dom.setStyle(self.el, 'opacity', '1');
            //     });
            //
            //     let app:App = self.m_commBroker.getService(Consts.Services().App);
            //     app.appResized();
            // }
        })


        // const teamActivatedRoute = router.routerState(activeRoute);
        // var teamId = teamActivatedRoute.params.map(r => r.id);

        // var sub = this.activeRoute
        //     .params
        //     .subscribe(params => {
        //         let id = +params['id'];
        //     });
        // this.router.events.subscribe((urlTree:UrlTree)=>{
        //     console.log(urlTree);
        // })

        // router.changes.subscribe(function (currentRoute) {
        // //router.subscribe(function (currentRoute) {
        //     self.m_renderedItems = [];
        //     for (var item in self.m_items) {
        //         if (self.m_items[item]['app'] == currentRoute)
        //             self.m_renderedItems.push(self.m_items[item]);
        //     }
        //     if (self.m_renderedItems.length == 0) {
        //         jQuery(self.m_fileMenuWrap).fadeOut('slow', function () {
        //             //notify ng2 of the changes so we comply with change strategy
        //             self.dom.setStyle(self.el, 'opacity', '0');
        //         });
        //     } else {
        //         jQuery(self.m_fileMenuWrap).fadeIn('slow', function () {
        //             //notify ng2 of the changes so we comply with change strategy
        //             self.dom.setStyle(self.el, 'opacity', '1');
        //         });
        //
        //         let app:App = self.m_commBroker.getService(Consts.Services().App);
        //         app.appResized();
        //     }
        //     //console.log(`Route ${currentRoute}`);
        // });

        jQuery('.navbar-nav').css({
            display: 'block'
        });


        //setTimeout(()=>{
        //    var menu = commBroker.getService() as Menu;
        //},4000);


        /** just some example of what can be done with direct dom manipulation **/
        //this.dom.removeChild(this.el, bar);
        //this.background = this.dom.getAttribute(this.el, 'background') || '#000000';
        //this.opacity = this.dom.setAttribute(this.el, 'background', 'red');
        //this.width = this.dom.getAttribute(this.el, 'width') || '7px';
        //this.position = this.dom.getAttribute(this.el, 'position') || 'right';
        //jQuery('.navicons').show();
        //jQuery(".navbar-header .navbar-toggle").trigger("click");
    }

    //ngAfterViewInit() {
    //    Lib.log(`AppPrefix: ${this['appPrefix']}`);
    //    jQuery('.flip').mouseenter(function () {
    //        jQuery(this).find('.flipcard').addClass('flipped').mouseleave(function () {
    //            jQuery(this).removeClass('flipped');
    //        });
    //        return false;
    //    });
    //}

    private listenMenuSelected(event) {
        this.m_commBroker.fire({
            fromInstance: self,
            event: Consts.Events().MENU_SELECTION,
            context: null,
            message: event.target.text
        });
        event.preventDefault();
        return false;
    }

    public addFileMenuItem(i_item: FilemenuItem): void {
        this.m_items.push(i_item);
    }
}
