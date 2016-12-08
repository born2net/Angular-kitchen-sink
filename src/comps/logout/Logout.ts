import {Observable} from "rxjs/Observable";
import {Component} from "@angular/core";
import {Router} from "@angular/router";
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/bindCallback';
@Component({
    selector: 'Logout',
    template: `
                <h1>Goodbye</h1>
                <small>I am Logout component</small>
                <h5>Demo canDeactivate by moving to a new route and locking in canDeactivate on url changes </h5>
                <button (click)="onCanDeactivate($event)" class="btn btn-default">Logout now</button>
        `
})

export class Logout {
    constructor(private router:Router) {
    }

    private allowNavigateAway:boolean = true;

    private onCanDeactivate() {
        this.allowNavigateAway = false;
        this.router.navigate(['/'])
    }

    public canDeactivate():any {

        if (this.allowNavigateAway) {
            return true;
        }
        var cb = (result) => {
            if (result) {
                jQuery('body').fadeOut(3000, function () {
                    window.location.replace("https://github.com/born2net/Angular-kitchen-sink");
                    return true;
                });
            } else {
                return false;
            }
        }
        if (confirm('Are you sure you want to save this thing into the database?')) {
            cb(true);
        } else {
            cb(false);
        }
        let o = Observable.bindCallback(cb)
        return o;
    }
}
