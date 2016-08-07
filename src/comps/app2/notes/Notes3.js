System.register(["@angular/core", "../../sliderpanel/Sliderpanel", "../../../services/CommBroker", "./NotesBase", "../../minitabs/Minitab", "../../minitabs/Minitabs", "./StarWarsSearch", "./WikiSearch", "./InfinityScroll", "./Clock", "./MultiSlotTransclusion", "./CompFactory", "./EmbedView", "./DynamicWebImport", "./CompBuilder", "./CompElemBuilder", "./CreateEmbedDiffer", "./ToggleButton", "./StreamButton", "../../ngForIf/ngBookRepeat", "./InjectTemplateParent", "../../tooltip/tooltip.component", "./dynamic.component.holder", "../../optionlistcomponent/optionlistcomponent"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Sliderpanel_1, CommBroker_1, NotesBase_1, Minitab_1, Minitabs_1, StarWarsSearch_1, WikiSearch_1, InfinityScroll_1, Clock_1, MultiSlotTransclusion_1, CompFactory_1, EmbedView_1, DynamicWebImport_1, CompBuilder_1, CompElemBuilder_1, CreateEmbedDiffer_1, ToggleButton_1, StreamButton_1, ngBookRepeat_1, InjectTemplateParent_1, tooltip_component_1, dynamic_component_holder_1, optionlistcomponent_1;
    var Notes3;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Sliderpanel_1_1) {
                Sliderpanel_1 = Sliderpanel_1_1;
            },
            function (CommBroker_1_1) {
                CommBroker_1 = CommBroker_1_1;
            },
            function (NotesBase_1_1) {
                NotesBase_1 = NotesBase_1_1;
            },
            function (Minitab_1_1) {
                Minitab_1 = Minitab_1_1;
            },
            function (Minitabs_1_1) {
                Minitabs_1 = Minitabs_1_1;
            },
            function (StarWarsSearch_1_1) {
                StarWarsSearch_1 = StarWarsSearch_1_1;
            },
            function (WikiSearch_1_1) {
                WikiSearch_1 = WikiSearch_1_1;
            },
            function (InfinityScroll_1_1) {
                InfinityScroll_1 = InfinityScroll_1_1;
            },
            function (Clock_1_1) {
                Clock_1 = Clock_1_1;
            },
            function (MultiSlotTransclusion_1_1) {
                MultiSlotTransclusion_1 = MultiSlotTransclusion_1_1;
            },
            function (CompFactory_1_1) {
                CompFactory_1 = CompFactory_1_1;
            },
            function (EmbedView_1_1) {
                EmbedView_1 = EmbedView_1_1;
            },
            function (DynamicWebImport_1_1) {
                DynamicWebImport_1 = DynamicWebImport_1_1;
            },
            function (CompBuilder_1_1) {
                CompBuilder_1 = CompBuilder_1_1;
            },
            function (CompElemBuilder_1_1) {
                CompElemBuilder_1 = CompElemBuilder_1_1;
            },
            function (CreateEmbedDiffer_1_1) {
                CreateEmbedDiffer_1 = CreateEmbedDiffer_1_1;
            },
            function (ToggleButton_1_1) {
                ToggleButton_1 = ToggleButton_1_1;
            },
            function (StreamButton_1_1) {
                StreamButton_1 = StreamButton_1_1;
            },
            function (ngBookRepeat_1_1) {
                ngBookRepeat_1 = ngBookRepeat_1_1;
            },
            function (InjectTemplateParent_1_1) {
                InjectTemplateParent_1 = InjectTemplateParent_1_1;
            },
            function (tooltip_component_1_1) {
                tooltip_component_1 = tooltip_component_1_1;
            },
            function (dynamic_component_holder_1_1) {
                dynamic_component_holder_1 = dynamic_component_holder_1_1;
            },
            function (optionlistcomponent_1_1) {
                optionlistcomponent_1 = optionlistcomponent_1_1;
            }],
        execute: function() {
            Notes3 = (function (_super) {
                __extends(Notes3, _super);
                function Notes3(sliderPanel, commBroker) {
                    _super.call(this, sliderPanel, commBroker);
                    this.sliderPanel = sliderPanel;
                    this.commBroker = commBroker;
                    this.me = this;
                    this.slideLeft = 'notes4';
                    this.slideRight = 'notes2';
                }
                Notes3 = __decorate([
                    core_1.Component({
                        selector: 'Notes3',
                        styles: [
                            "\n        .colorBlue span {\n            color: blue;\n        }"
                        ],
                        directives: [Minitab_1.Minitab, Minitabs_1.Minitabs, StarWarsSearch_1.StarWarsSearch, WikiSearch_1.WikiSearch, InfinityScroll_1.InfinityScroll,
                            Clock_1.Clock, MultiSlotTransclusion_1.MultiSlotTransclusion, CompFactory_1.CompFactory, EmbedView_1.EmbedView, DynamicWebImport_1.DynamicWebImport,
                            CompBuilder_1.CompBuilder, CompElemBuilder_1.CompElemBuilder, CreateEmbedDiffer_1.CreateEmbedDiffer, ToggleButton_1.ToggleButtonApp, StreamButton_1.StreamButton,
                            ngBookRepeat_1.ngBookRepeatSample, InjectTemplateParent_1.InjectTemplateParent, tooltip_component_1.TooltipDirective, dynamic_component_holder_1.DynamicHolder, optionlistcomponent_1.OptionListComponent],
                        template: " <button type=\"button\" (click)=\"onPrev($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-left\"></span>\n                </button>\n                <button type=\"button\" (click)=\"onNext($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-right\"></span>\n                </button>\n                <hr/>\n                <small>I am notes3 component</small>\n                <!-- style is really cool as we can externally style components via ngStyle -->\n                 <mini-tabs [style]=\"{'color': '#333333', 'backgroundColor': 'dodgerblue'}\">\n                  <mini-tab [tabTitle]=\"'Code 1'\">\n                    <h3>example of http search</h3>\n                    <StarWarsSearch></StarWarsSearch>\n                  </mini-tab>\n                  <mini-tab [tabTitle]=\"'Code 2'\">\n                    <h3>example of wiki search</h3>\n                     <WikiSearch></WikiSearch>\n                  </mini-tab>\n                  <mini-tab [tabTitle]=\"'Code 3'\">\n                    <h3>infinity scroll</h3>\n                     <InfinityScroll></InfinityScroll>\n                  </mini-tab>\n                  <mini-tab [tabTitle]=\"'Code 4'\">\n                    <h3>Clock</h3>\n                     <Clock></Clock>\n                  </mini-tab>       \n                  <mini-tab [tabTitle]=\"'Code 5'\">\n                    <h3>Multi Slot Transclusion</h3>\n                    <MultiSlotTransclusion>\n                    <h1>THIS WILL NOT APPEAR ANYWHERE AS NO MATCHING TAG EXISTS ON H1</h1>\n                    <h1 header>This is a Heading</h1>\n                      <p body>This is body</p>\n                      <div footer>\n                        <hr>\n                        <h3>This is a footer</h3>\n                      </div>\n                    </MultiSlotTransclusion>\n                  </mini-tab>\n                  <mini-tab [tabTitle]=\"'Code 6'\">\n                    <h3>Dynamic component factory</h3>\n                    <CompFactory></CompFactory>\n                  </mini-tab>\n                  <mini-tab [tabTitle]=\"'Code 7'\">\n                    <h3>Embed Template view</h3>\n                    <EmbedView></EmbedView>\n                  </mini-tab>\n                  <mini-tab [tabTitle]=\"'Code 8'\">\n                    <h3>Web Component import</h3>\n                    <DynamicWebImport></DynamicWebImport>\n                  </mini-tab>\n                  <mini-tab [tabTitle]=\"'Code 9'\">\n                    <h3>Component builder</h3>\n                    <CompBuilder></CompBuilder>\n                  </mini-tab>\n                  <mini-tab [tabTitle]=\"'Code 10'\">\n                    <h3>Component builder</h3>\n                    <CompElemBuilder></CompElemBuilder>\n                  </mini-tab>\n                   <mini-tab [tabTitle]=\"'Code 11'\">\n                    <h3>Using a Differ to Dynamically create and Render Templates</h3>\n                    <CreateEmbedDiffer></CreateEmbedDiffer>\n                  </mini-tab>                   \n                  <mini-tab [tabTitle]=\"'Code 12'\">\n                    <h3>Using two way binding into a component </h3>\n                    <pre><![CDATA[\n                      [(on)]=\"state\" // so you can use other banana in a box and not just [(ngModel)] \n                    ]]></pre>\n                    <ToggleButtonApp></ToggleButtonApp>\n                  </mini-tab>\n                  <mini-tab [tabTitle]=\"'Code 13'\">\n                    <h3>Streaming buttons via BehaviorSubject</h3>\n                    <StreamButton></StreamButton>\n                  </mini-tab>\n                  <mini-tab [tabTitle]=\"'Code 14'\">\n                    <h3>Custom ng template directive *ngBookRepeat</h3>\n                    <ngBookRepeatSample></ngBookRepeatSample>\n                  </mini-tab>\n                  <mini-tab [tabTitle]=\"'Code 15'\">\n                    <h3>Injecting template as string</h3>\n                    <InjectTemplateParent></InjectTemplateParent>\n                  </mini-tab>\n                  <mini-tab [tabTitle]=\"'Code 16'\">\n                    <h3>Tooltip injecting template</h3>\n                    <h2 class=\"colorBlue\">\n                        Hover for a tooltip on the\n                        <span [tooltip]=\"{position:'left'}\">\n                            left\n                            <template #tooltipTemplate>\n                                I'm a popover box!\n                            </template>\n                        </span>,\n                        <span [tooltip]=\"{position:'right'}\">\n                            right\n                            <template #tooltipTemplate>\n                                I'm a popover box!\n                            </template>\n                        </span>,\n                        <span [tooltip]=\"{position:'top'}\">\n                            top\n                            <template #tooltipTemplate>\n                                I'm a popover box!\n                            </template>\n                        </span>, or \n                        <span [tooltip]=\"{position:'bottom'}\">\n                            bottom\n                            <template #tooltipTemplate>\n                                I'm a popover box!\n                            </template>\n                        </span>\n                    </h2>\n                  </mini-tab>\n                  <mini-tab [tabTitle]=\"'Code 17'\">\n                    <dynamic-holder></dynamic-holder>\n                  </mini-tab>\n                  <mini-tab [tabTitle]=\"'Code 18'\">\n                    <optionsList></optionsList> \n                  </mini-tab>\n                </mini-tabs>\n                    \n                <small>I am a Minitab component (@ContentChildren)</small>\n                <ng-content></ng-content>"
                    }), 
                    __metadata('design:paramtypes', [Sliderpanel_1.Sliderpanel, CommBroker_1.CommBroker])
                ], Notes3);
                return Notes3;
            }(NotesBase_1.NotesBase));
            exports_1("Notes3", Notes3);
        }
    }
});
//# sourceMappingURL=Notes3.js.map