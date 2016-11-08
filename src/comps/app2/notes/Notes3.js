System.register(["@angular/core", "../../sliderpanel/Sliderpanel", "../../../services/CommBroker", "./NotesBase", "./DynaFactoryResService"], function(exports_1, context_1) {
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
    var core_1, Sliderpanel_1, CommBroker_1, NotesBase_1, DynaFactoryResService_1;
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
            function (DynaFactoryResService_1_1) {
                DynaFactoryResService_1 = DynaFactoryResService_1_1;
            }],
        execute: function() {
            Notes3 = (function (_super) {
                __extends(Notes3, _super);
                function Notes3(sliderPanel, commBroker) {
                    _super.call(this, sliderPanel, commBroker);
                    this.sliderPanel = sliderPanel;
                    this.commBroker = commBroker;
                    this.show = true;
                    this.wheelDirection = 'wheel me in';
                    this.me = this;
                    this.slideLeft = 'notes4';
                    this.slideRight = 'notes2';
                }
                Notes3.prototype.toggleShowHide = function () {
                    this.show = !this.show;
                };
                Notes3.prototype.mouseWheel = function (direction, event) {
                    this.wheelDirection = direction;
                };
                Notes3 = __decorate([
                    core_1.Component({
                        selector: 'Notes3',
                        providers: [DynaFactoryResService_1.DynaFactoryResService],
                        styles: [
                            "\n        .colorBlue span {\n            color: blue;\n        }"
                        ],
                        template: " <button type=\"button\" (click)=\"onPrev($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-left\"></span>\n                </button>\n                <button type=\"button\" (click)=\"onNext($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-right\"></span>\n                </button>\n                <hr/>\n                <small>I am notes3 component</small>\n                <!-- style is really cool as we can externally style components via ngStyle -->\n                 <mini-tabs [style]=\"{'color': '#333333', 'backgroundColor': 'dodgerblue'}\">\n                  <mini-tab [tabTitle]=\"'Code 1'\">\n                    <h3>example of http search</h3>\n                    <StarWarsSearch></StarWarsSearch>\n                  </mini-tab>\n                  <mini-tab [tabTitle]=\"'Code 2'\">\n                    <h3>example of wiki search</h3>directive             <WikiSearch></WikiSearch>\n                  </mini-tab>\n                  <mini-tab [tabTitle]=\"'Code 3'\">\n                    <h3>infinity scroll</h3>\n                     <InfinityScroll></InfinityScroll>\n                  </mini-tab>\n                  <mini-tab [tabTitle]=\"'Code 4'\">\n                    <h3>Clock</h3>\n                     <Clock></Clock>\n                     <hr/>\n                     <h4>MouseWheel directive</h4>\n                     <h5>Scroll with mouse wheel to show direction</h5>\n                     <div mouseWheel (mouseWheelUp)=\"mouseWheel('up',$event)\" (mouseWheelDown)=\"mouseWheel('down',$event)\">\n                        <textarea>{{wheelDirection}}</textarea>                    \n                     </div>\n                  </mini-tab>       \n                  <mini-tab [tabTitle]=\"'Code 5'\">\n                    <h3>Multi Slot Transclusion</h3>\n                    <MultiSlotTransclusion>\n                    <h1>THIS WILL NOT APPEAR ANYWHERE AS NO MATCHING TAG EXISTS ON H1</h1>\n                    <h1 header>This is a Heading</h1>\n                      <p body>This is body</p>\n                      <div footer>\n                        <hr>\n                        <h3>This is a footer</h3>\n                      </div>\n                    </MultiSlotTransclusion>\n                  </mini-tab>\n                  <mini-tab [tabTitle]=\"'Code 6'\">\n                    <h3>Embed Template view</h3>\n                    <EmbedView></EmbedView>\n                  </mini-tab>\n                  <mini-tab [tabTitle]=\"'Code 7'\">\n                    <h3>Component builder</h3>\n                    <CompElemBuilder></CompElemBuilder>\n                  </mini-tab>\n                   <mini-tab [tabTitle]=\"'Code 8'\">\n                    <h3>Using a Differ to Dynamically create and Render Templates</h3>\n                    <CreateEmbedDiffer></CreateEmbedDiffer>\n                  </mini-tab>                   \n                  <mini-tab [tabTitle]=\"'Code 9'\">\n                    <h3>Using two way binding into a component (custom banana in a box)</h3>\n                    <pre><![CDATA[\n                      [(on)]=\"state\" // so you can use other banana in a box and not just [(ngModel)] \n                    ]]></pre>\n                    <ToggleButtonApp></ToggleButtonApp>\n                  </mini-tab>\n                  <mini-tab [tabTitle]=\"'Code 10'\">\n                    <h3>Streaming buttons via BehaviorSubject</h3>\n                    <StreamButton></StreamButton>\n                  </mini-tab>\n                  <mini-tab [tabTitle]=\"'Code 11'\">\n                    <h3>Custom ng template directive *ngBookRepeat</h3>\n                    <ngBookRepeatSample></ngBookRepeatSample>\n                  </mini-tab>\n                  <mini-tab [tabTitle]=\"'Code 12'\">\n                    <h3>Injecting compileModuleAndAllComponentsSync component</h3>\n                    <InjectTemplateParent></InjectTemplateParent>\n                  </mini-tab>\n                  <mini-tab [tabTitle]=\"'Code 13'\">\n                    <h3>Tooltip injecting template</h3>\n                    <h2 class=\"colorBlue\">\n                        Hover for a tooltip on the\n                        <span [tooltip]=\"{position:'left'}\">\n                            left\n                            <template #tooltipTemplate>\n                                I'm a popover box!\n                            </template>\n                        </span>,\n                        <span [tooltip]=\"{position:'right'}\">\n                            right\n                            <template #tooltipTemplate>\n                                I'm a popover box!\n                            </template>\n                        </span>,\n                        <span [tooltip]=\"{position:'top'}\">\n                            top\n                            <template #tooltipTemplate>\n                                I'm a popover box!\n                            </template>\n                        </span>, or \n                        <span [tooltip]=\"{position:'bottom'}\">\n                            bottom\n                            <template #tooltipTemplate>\n                                I'm a popover box!\n                            </template>\n                        </span>\n                    </h2>\n                  </mini-tab>                  \n                  <mini-tab [tabTitle]=\"'Code 14'\">                  \n                    <optionsList></optionsList> \n                  </mini-tab>\n                  <mini-tab [tabTitle]=\"'Code 15'\">\n                    <h3>Dynamic factory resolver</h3>\n                    <DynaFactoryRes></DynaFactoryRes>  \n                  </mini-tab>\n                  <mini-tab [tabTitle]=\"'Code 16'\">\n                    <dynamic-app></dynamic-app>  \n                  </mini-tab>\n                  <mini-tab [tabTitle]=\"'Code 17'\">\n                        <h3>provide data to ngFor declaratively via contentChildren</h3>\n                        <ContentHeroes>\n                            <ContentHero id=\"1\" name=\"Superman\"></ContentHero>\n                            <ContentHero id=\"2\" name=\"Batman\"></ContentHero>\n                            <ContentHero id=\"3\" name=\"Batgirl\"></ContentHero>\n                            <ContentHero id=\"3\" name=\"Robin\"></ContentHero>\n                            <ContentHero id=\"4\" name=\"Flash\"></ContentHero>\n                            <ContentHero id=\"5\" name=\"Green Lantern\"></ContentHero>\n                        </ContentHeroes>\n                  </mini-tab>\n                  <mini-tab [tabTitle]=\"'Code 18'\">\n                    <h3>provide components to ngFor declaratively via contentChildren</h3>\n                    <h6>Polymorphic Component Container using ContentChildren</h6>\n                    <content-bar-app></content-bar-app>\n                  </mini-tab>\n                  <mini-tab [tabTitle]=\"'Code 19'\">\n                    <h3>Show / hide powered by *showIfLoggedIn directive</h3>\n                    <div *showHideDirective=\"show\"d>\n                        <h6>now you can see me</h6>\n                    </div>\n                    <button class=\"btn\" (click)=\"toggleShowHide()\" >toggle</button>\n                  </mini-tab>\n                </mini-tabs>\n                    \n                <small>I am a Minitab component (@ContentChildren)</small>\n                <ng-content></ng-content>"
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