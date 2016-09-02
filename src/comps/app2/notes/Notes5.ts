import {
    Component,
    Inject,
    Injectable,
    ViewContainerRef,
    ViewChild
} from "@angular/core";
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
    constructor(@Inject("NotesConfigValue") public config: {noteDefault: string}) {
    }

    showConfigValue() {
        console.log(this.config.noteDefault);
    }
}
/**
 Demonstrating that shows how to create a directive just like
 the *ngFor or *ngIf of ng2, and in our case *CountDown.

 What this means is that we are able to manually create a template
 and using viewContainer.createEmbeddedView(this.templateRef) we  bind
 the template into the component.

 While in practicality we mostly use <ng-content> to achieve the same effect
 it still a great example into the inner workings of ng2.
 */

@Component({
    selector: 'Notes5',
    providers: [// NotesService get's provided with a noteDefault
        NotesService, {
            provide: 'NotesConfigValue',
            useValue: {noteDefault: 'example of passing param to component via DI'}
        }],
    template: `<button type="button" (click)="onPrev($event)" class="btn btn-default btn-sm">
                    <span class="fa fa-arrow-left "></span>
                </button>
                <hr/>
                <small>I am Notes5 component..</small>
                <span #extensionAnchor></span>
                 <hr/>
                `
})
export class Notes5 extends NotesBase {
    constructor(private NotesService: NotesService, protected sliderPanel: Sliderpanel, protected commBroker: CommBroker) {
        super(sliderPanel, commBroker);
        NotesService.showConfigValue();
        this.me = this;
        this.slideRight = 'notes4';
    }

    @ViewChild('extensionAnchor', {read: ViewContainerRef}) extensionAnchor: ViewContainerRef;
}



