import {Component} from "@angular/core";
import {Sliderpanel} from "../../sliderpanel/Sliderpanel";
import {CommBroker} from "../../../services/CommBroker";
import {NotesBase} from "./NotesBase";
import {Minitab} from "../../minitabs/Minitab";
import {Minitabs} from "../../minitabs/Minitabs";
import {StarWarsSearch} from "./StarWarsSearch";
import {WikiSearch} from "./WikiSearch";
import {InfinityScroll} from "./InfinityScroll";
import {Clock} from "./Clock";
import {MultiSlotTransclusion} from "./MultiSlotTransclusion";
import {CompFactory} from "./CompFactory";
import {EmbedView} from "./EmbedView";
import {DynamicWebImport} from "./DynamicWebImport";
import {CompBuilder} from "./CompBuilder";
import {CompElemBuilder} from "./CompElemBuilder";
import {CreateEmbedDiffer} from "./CreateEmbedDiffer";
import {ToggleButtonApp} from "./ToggleButton";
import {StreamButton} from "./StreamButton";
import {ngBookRepeatSample} from "../../ngForIf/ngBookRepeat";
import {InjectTemplateParent} from "./InjectTemplateParent";

@Component({
    selector: 'Notes3',
    directives: [Minitab, Minitabs, StarWarsSearch, WikiSearch, InfinityScroll,
        Clock, MultiSlotTransclusion, CompFactory, EmbedView, DynamicWebImport,
        CompBuilder, CompElemBuilder, CreateEmbedDiffer, ToggleButtonApp, StreamButton,
        ngBookRepeatSample, InjectTemplateParent],
    template: ` <button type="button" (click)="onPrev($event)" class="btn btn-default btn-sm">
                    <span class="fa fa-arrow-left"></span>
                </button>
                <button type="button" (click)="onNext($event)" class="btn btn-default btn-sm">
                    <span class="fa fa-arrow-right"></span>
                </button>
                <hr/>
                <small>I am notes3 component</small>
                <!-- style is really cool as we can externally style components via ngStyle -->
                 <mini-tabs [style]="{'color': '#333333', 'backgroundColor': 'dodgerblue'}">
                  <mini-tab [tabTitle]="'Code 1'">
                    <h3>example of http search</h3>
                    <StarWarsSearch></StarWarsSearch>
                  </mini-tab>
                  <mini-tab [tabTitle]="'Code 2'">
                    <h3>example of wiki search</h3>
                     <WikiSearch></WikiSearch>
                  </mini-tab>
                  <mini-tab [tabTitle]="'Code 3'">
                    <h3>infinity scroll</h3>
                     <InfinityScroll></InfinityScroll>
                  </mini-tab>
                  <mini-tab [tabTitle]="'Code 4'">
                    <h3>Clock</h3>
                     <Clock></Clock>
                  </mini-tab>       
                  <mini-tab [tabTitle]="'Code 5'">
                    <h3>Multi Slot Transclusion</h3>
                    <MultiSlotTransclusion>
                    <h1>THIS WILL NOT APPEAR ANYWHERE AS NO MATCHING TAG EXISTS ON H1</h1>
                    <h1 header>This is a Heading</h1>
                      <p body>This is body</p>
                      <div footer>
                        <hr>
                        <h3>This is a footer</h3>
                      </div>
                    </MultiSlotTransclusion>
                  </mini-tab>
                  <mini-tab [tabTitle]="'Code 6'">
                    <h3>Dynamic component factory</h3>
                    <CompFactory></CompFactory>
                  </mini-tab>
                  <mini-tab [tabTitle]="'Code 7'">
                    <h3>Embed Template view</h3>
                    <EmbedView></EmbedView>
                  </mini-tab>
                  <mini-tab [tabTitle]="'Code 8'">
                    <h3>Web Component import</h3>
                    <DynamicWebImport></DynamicWebImport>
                  </mini-tab>
                  <mini-tab [tabTitle]="'Code 9'">
                    <h3>Component builder</h3>
                    <CompBuilder></CompBuilder>
                  </mini-tab>
                  <mini-tab [tabTitle]="'Code 10'">
                    <h3>Component builder</h3>
                    <CompElemBuilder></CompElemBuilder>
                  </mini-tab>
                   <mini-tab [tabTitle]="'Code 11'">
                    <h3>Using a Differ to Dynamically create and Render Templates</h3>
                    <CreateEmbedDiffer></CreateEmbedDiffer>
                  </mini-tab>                   
                  <mini-tab [tabTitle]="'Code 12'">
                    <h3>Using two way binding into a component </h3>
                    <pre><![CDATA[
                      [(on)]="state" // so you can use other banana in a box and not just [(ngModel)] 
                    ]]></pre>
                    <ToggleButtonApp></ToggleButtonApp>
                  </mini-tab>
                  <mini-tab [tabTitle]="'Code 13'">
                    <h3>Streaming buttons via BehaviorSubject</h3>
                    <StreamButton></StreamButton>
                  </mini-tab>
                  <mini-tab [tabTitle]="'Code 14'">
                    <h3>Custom ng template directive *ngBookRepeat</h3>
                    <ngBookRepeatSample></ngBookRepeatSample>
                  </mini-tab>
                  <mini-tab [tabTitle]="'Code 15'">
                    <h3>Injecting template as string</h3>
                    <InjectTemplateParent></InjectTemplateParent>
                    
                  </mini-tab>
                </mini-tabs>
                    
                <small>I am a Minitab component (@ContentChildren)</small>
                <ng-content></ng-content>`
})

export class Notes3 extends NotesBase {
    constructor(protected sliderPanel:Sliderpanel, protected commBroker:CommBroker) {
        super(sliderPanel, commBroker);
        this.me = this;
        this.slideLeft = 'notes4';
        this.slideRight = 'notes2';
    }
}


