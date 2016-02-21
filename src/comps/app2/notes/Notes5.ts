import {Component, Inject, Injectable, provide} from 'angular2/core';
import {Sliderpanel} from "../../sliderpanel/Sliderpanel";
import {CommBroker} from "../../../services/CommBroker";
import {NotesBase} from "./NotesBase";

/**
 * In this example I show to to pass parameters to a service that is being injected using
 * the dependency injection in angular2.
 * The NotesService gets injected into the Notes5 component, and it is passed in
 * a constructor parameter value of 'example of passing param to component via DI'.
 * This is powerful as it lets us
 * instantiate components through the angular DI system with params.
 */

@Injectable()
class NotesService {
    constructor(@Inject("NotesConfigValue")
                public config:{noteDefault: string}) {
    }

    showConfigValue() {
        // show the passed in param via provide("NotesConfigValue", {useValue: {noteDefault: 'example of passing param to component via DI'}}),
        console.log(this.config.noteDefault);
    }
}

@Component({
    selector: 'Notes5',
    providers: [
        // NotesService get's provided with a 'useValue' constructor
        NotesService,
        provide("NotesConfigValue", {useValue: {noteDefault: 'example of passing param to component via DI'}}),
    ],
    template: `<button type="button" (click)="onPrev($event)" class="btn btn-default btn-sm">
                    <span class="fa fa-arrow-left "></span>
                </button>
                <hr/>
                <small>I am notes5 component</small>
                <ng-content></ng-content>`
})

export class Notes5 extends NotesBase {
    constructor(private NotesService:NotesService,
                protected sliderPanel:Sliderpanel,
                protected commBroker:CommBroker) {
        super(sliderPanel, commBroker);
        NotesService.showConfigValue();
        this.me = this;
        this.slideRight = 'notes4';
    }
}


