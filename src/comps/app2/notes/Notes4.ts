import {Component} from 'angular2/core';
import {Sliderpanel} from "../../sliderpanel/Sliderpanel";
import {CommBroker} from "../../../services/CommBroker";
import {NotesBase} from "./NotesBase";
import {NotesDetails} from "./NotesDetails";
import {NotesDetailsItems} from "./NotesDetailsItems";


/**
 *  Among other things, this class demonstrates how to pass a method to a component
 *  and that component call it: [content]="getContent"
 **/
@Component({
    selector: 'Notes4',
    directives: [NotesDetails, NotesDetailsItems],
    template: ` <button type="button" (click)="onPrev($event)" class="btn btn-default btn-sm">
                    <span class="fa fa-arrow-left "></span>
                </button>
                <button type="button" (click)="onNext($event)" class="btn btn-default btn-sm">
                    <span class="fa fa-arrow-right"></span>
                </button>
                <hr/>
                <small>I am notes4 component</small>
                <hr/>
                <button (click)="show = !show">Toggle one item</button>
                <notes-details>
                  <notes-details-item [content]="getContent" [myValue]="'One'"
                        (select)="itemDetailsClicked($event)"> noted details item 1 </notes-details-item>
                  <notes-details-item [content]="getContent" [myValue]="'Two'"
                        (select)="itemDetailsClicked($event)" *ngIf="show"> noted details item 2 </notes-details-item>
                </notes-details>
                <ng-content></ng-content>`
})

export class Notes4 extends NotesBase {
    private show:boolean = true;
    private someValue:any = '999';

    constructor(protected sliderPanel:Sliderpanel, protected commBroker:CommBroker) {
        super(sliderPanel, commBroker);
        this.someValue = 'FooBar';
        var self = this;
        this.slideLeft = 'notes5';
        this.slideRight = 'notes3';

    }

    getContent(user):string {
        return user;
    }

    itemDetailsClicked(event) {
        alert(event);
    }
}


