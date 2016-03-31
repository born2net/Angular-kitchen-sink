import {Component, ChangeDetectorRef} from "angular2/core";
import {Sliderpanel} from "../../sliderpanel/Sliderpanel";

@Component({
    selector: 'Todo1',
    template: ` <button type="button" (click)="onNext($event)" class="btn btn-default btn-sm goNext">
                    <span class="fa fa-arrow-right"></span>
                </button>                
                <small>I am todo1 component</small>
               <br/>
                <br/>
                 <button type="button" (click)="onForceDetection()" class="btn btn-default btn-sm goNext">
                    Force change detection on component;
                </button>
                <ng-content></ng-content>
                `

})

export class Todo1 {
    private sliderPanel:Sliderpanel;

    constructor(sliderPanel:Sliderpanel, private ref:ChangeDetectorRef) {
        this.sliderPanel = sliderPanel;
    }

    private onForceDetection(){
        this.ref.markForCheck();
        console.log('cd completed')
    }

    private onNext(event) {
        this.sliderPanel.slideToPage('todo2', 'left')
    }
}
