import {
    Component, Input, Output, EventEmitter, IterableDiffer, Inject, IterableDiffers,
    ChangeDetectorRef
} from '@angular/core';
import {COMMON_DIRECTIVES} from "@angular/common";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: 'simple-list',
    template: `
        <div *ngIf="!list">
            Loading...
        </div>
        <div *ngIf="list">
            <table class="table table-striped table-bordered table-hover">
                <tbody>
                    <tr *ngFor="let item of list" (mouseover)="current.next(item)" (mouseout)="current.next(null)">
                        <td *ngIf="!link">{{getContent(item)}}</td>
                        <td *ngIf="link"><a [routerLink]="getLink(item)">{{getContent(item)}}</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
})
export class SimpleList {

    @Input() list:any[];
    @Input() content:((any)=>string);
    @Input() link:(any)=>any[];
    @Output() current:EventEmitter<any> = new EventEmitter();

    /**
     * Checking for changes In order to evaluate what changed, Angular provides differs .
     * Differs will evaluate a given property of your directive to determine what changed .
     * There are two types of built-in differs: iterable differs and key-value differs .
     * Iterable differs Iterable differs should be used when we have a list-like structure and we’re only interested
     * on knowing things that were added or removed from that list.
     * Key-value differs Key-value differs should be used for dictionary-like structures,
     * and it works at the key level. This differ will identify changes when a new key is added,
     * when a key removed and when the value of a key changed.
     */
    constructor(differs:IterableDiffers, private changeDetector:ChangeDetectorRef) {

        // we can also re-use an existing changeDetector via:
        // this.differ = this.differs.find(items).create(this.changeDetector);
        // to keep track of changes
        this.differ = differs.find([]).create(null);
    }

    private differ:IterableDiffer;

    ngDoCheck():void {
        var changes = this.differ.diff(this.list);
        if (changes) {
            //changes.forEachAddedItem(r => console.log('Added to movie list', JSON.stringify(r.item)));
            //changes.forEachRemovedItem(r => console.log('Removed from list', JSON.stringify(r.item)));
        }
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
            if (this.linkResultPerItem[key] == null) {
                this.linkResultPerItem[key] = this.link(item);
            }
            return this.linkResultPerItem[key];
        } else {
            return null;
        }
    }

}