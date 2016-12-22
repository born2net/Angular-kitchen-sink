import {Component, ChangeDetectorRef} from "@angular/core";

@Component({
    selector: 'Todo1',
    template: ` <div>
                    <small>I am the todo1 component</small>
                   <br/>
                    <br/>
                     <button type="button" (click)="onForceDetection()" class="btn btn-default btn-sm goNext">
                        Force change detection on component;
                    </button>
                    <ng-content></ng-content>
                    </div>
                `

})

export class Todo1 {
    constructor(private cd:ChangeDetectorRef){
    }

    private onForceDetection() {
        this.cd.markForCheck();
    }

}
