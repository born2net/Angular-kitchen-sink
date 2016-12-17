import {Component, Output, EventEmitter} from "@angular/core";
import {Sliderpanel} from "../../sliderpanel/Sliderpanel";
import {CommBroker} from "../../../services/CommBroker";
import {NotesBase} from "./NotesBase";
import {DynaFactoryResService} from "./DynaFactoryResService";

@Component({
    selector: 'Notes3',
    providers: [DynaFactoryResService],
    styles: [`
        .colorBlue span {
            color: blue;
        }
    `],
    templateUrl: './Notes3.html'
})

export class Notes3 extends NotesBase {
    constructor(protected sliderPanel: Sliderpanel, protected commBroker: CommBroker) {
        super(sliderPanel, commBroker);
        this.me = this;
        this.slideLeft = 'notes4';
        this.slideRight = 'notes2';
    }

    private myInputText: string = '';
    private show = true;
    private wheelDirection = 'wheel me in';

    @Output() myKeyUp: EventEmitter<any> = new EventEmitter<any>();

    private items: any[] = [
        {title: 'Item 1'},
        {title: 'Item 2'},
        {title: 'Item 3'}
    ];


    toggleShowHide() {
        this.show = !this.show;
    }

    mouseWheel(direction, event) {
        this.wheelDirection = direction;
    }
}


