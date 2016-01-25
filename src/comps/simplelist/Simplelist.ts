import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {RouterLink} from 'angular2/router'
import {COMMON_DIRECTIVES} from "angular2/src/common/common_directives";

@Component({
    selector: 'simple-list',
    template: `
        <div *ngIf="!list">
            Loading...
        </div>
        <div *ngIf="list">
            <table class="table table-striped table-bordered table-hover">
                <tbody>
                    <tr *ngFor="#item of list" (mouseover)="current.next(item)" (mouseout)="current.next(null)">
                        <td *ngIf="!link">{{getContent(item)}}</td>
                        <td *ngIf="link"><a [routerLink]="getLink(item)">{{getContent(item)}}</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    directives: [RouterLink, COMMON_DIRECTIVES]
})
export class SimpleList {

    @Input() list:any[];
    @Input() content:((any)=>string);
    @Input() link:(any)=>any[];
    @Output() current: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    getContent(item):string {
        if (this.content) {
            return this.content(item);
        } else {
            return item;
        }
    }

    // work around a problem with changing links for items (Angular2-beta doesn't like that)
    private linkResultPerItem = {};
    getLink(item):(any)=>any[] {
        if (this.link) {
            var key = item;
            if (typeof key === "object") {
                key = JSON.stringify(key);
            }
            if (this.linkResultPerItem[key]==null) {
                this.linkResultPerItem[key] = this.link(item);
            }
            return this.linkResultPerItem[key];
        } else {
            return null;
        }
    }

}