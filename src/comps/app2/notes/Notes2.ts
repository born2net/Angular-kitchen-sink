import {
    Component,
    ViewChild,
    ComponentRef
} from "@angular/core";
import {Sliderpanel} from "../../sliderpanel/Sliderpanel";
import {CommBroker} from "../../../services/CommBroker";
import {NotesBase} from "./NotesBase";
import {MyIp} from "../../myip/Myip";
import {PureDialog} from "../../puredialog/PureDialog";
import {PureDialogDirective} from "../../puredialog/PureDialogDirective";
// import {MODAL_DIRECTIVES} from "ng2-bs3-modal-born2net/ng2-bs3-modal";

@Component({
    selector: 'Notes2',
    providers: [MyIp],
    entryComponents: [PureDialog],
    template: `     
                <button type="button" (click)="onPrev($event)" class="btn btn-default btn-sm">
                    <span class="fa fa-arrow-left"></span>
                </button>
                <button type="button" (click)="onNext($event)" class="btn btn-default btn-sm">
                    <span class="fa fa-arrow-right"></span>
                </button>
                <hr/>
                <small>I am notes2 component</small>                
                <ModalDialog title="My owner is Notes2" content="I am here to serve Notes2" [owner]="me">
                </ModalDialog>
                <hr/>
                <div dialogAnchor></div>
                <button type="button" class="btn btn-default" (click)="openDialogBox()">Pure ng2 Modal</button>
                <hr/>
                <MyIp>
                    <!-- remove entire snippet including this comment to have component inject default template -->
                    <hr/>
                      <div>
                          <h4>Example of providing a default ng-content template if not provided by the consumer of the component</h4>
                      </div>
                    <hr/>
                </MyIp>
                <small>Example of @HostBinding / @HostListener print console.log() and add underscores</small>
                <input type="text" trimmed-input />
                <hr/>
                <h5>Press enter to jump to next input</h5>
                <input (keyup.enter)="next.focus()">
                <input #next>
                `
})

export class Notes2 extends NotesBase {
    constructor(protected sliderPanel: Sliderpanel, protected commBroker: CommBroker) {
        super(sliderPanel, commBroker);
        this.me = this;
        this.slideLeft = 'notes3';
        this.slideRight = 'notes1';
    }

    @ViewChild(PureDialogDirective)
    pureDialogDirective: PureDialogDirective;

    openDialogBox() {
        var pureDialog:ComponentRef<PureDialog> = this.pureDialogDirective.createDialog(PureDialog);
        setTimeout(()=>{
            pureDialog.instance.onClickedExit();
        },3000)

    }
}


