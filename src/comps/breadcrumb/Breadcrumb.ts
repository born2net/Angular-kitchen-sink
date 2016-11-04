import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from "@angular/router";
import "rxjs/add/operator/filter";

/**
 *  reference: http://brianflove.com/2016/10/23/angular2-breadcrumb-using-router/
 **/

interface IBreadcrumb {
    label: string;
    params?: Params;
    url: string;
}

@Component({
    selector: "breadcrumb",
    template: `
    <ol class="breadcrumb">
      <li><a routerLink="" class="breadcrumb">Home</a></li>
      <li *ngFor="let breadcrumb of breadcrumbs">
        <a [routerLink]="[breadcrumb.url, breadcrumb.params]">{{breadcrumb.label}}</a>
      </li>
    </ol>
  `
})
export class BreadcrumbComponent implements OnInit {

    public breadcrumbs: IBreadcrumb[];

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {
        this.breadcrumbs = [];
    }

    ngOnInit() {
        const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";

        //subscribe to the NavigationEnd event
        this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
            //reset breadcrumbs
            this.breadcrumbs = [];

            //get the root route
            let currentRoute: ActivatedRoute = this.activatedRoute.root;

            //set the url to an empty string
            let url: string = "";

            //iterate from activated route to children
            while (currentRoute.children.length > 0) {
                let childrenRoutes: ActivatedRoute[] = currentRoute.children;

                //iterate over each children
                childrenRoutes.forEach(route => {
                    //set currentRoute to this route
                    currentRoute = route;

                    //verify this is the primary route
                    if (route.outlet !== PRIMARY_OUTLET) {
                        return;
                    }

                    //verify the custom data property "breadcrumb" is specified on the route
                    if (!route.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                        return;
                    }

                    //get the route's URL segment
                    let routeURL: string = route.snapshot.url.map(segment => segment.path).join("/");

                    //append route URL to URL
                    url += `/${routeURL}`;

                    //add breadcrumb
                    let breadcrumb: IBreadcrumb = {
                        label: route.snapshot.data[ROUTE_DATA_BREADCRUMB],
                        params: route.snapshot.params,
                        url: url
                    };
                    this.breadcrumbs.push(breadcrumb);
                });
            }
        });
    }

}
