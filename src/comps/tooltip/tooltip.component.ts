import {
    Input,
    Component,
    Directive,
    ViewContainerRef,
    ComponentRef,
    TemplateRef,
    ContentChild,
    AfterViewInit,
    ElementRef,
    OnInit,
    OnChanges,
    Compiler,
    ModuleWithComponentFactories
} from "@angular/core";
import {PositionService} from "./position.service";
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

let $: any = window["$"];
let _: any = window["_"];

interface TooltipOptions {
    position: string;
    popupClass: string;
    margin: number;
    trigger: {
        on: string;
        off?: string;
    };
    dismissable: boolean;
    active: boolean;
}

let defaultTooltipOptions: TooltipOptions = {
    position: "top",
    popupClass: "",
    margin: 11,
    trigger: {
        on: "mouseover",
        off: "mouseout"
    },
    dismissable: true,
    active: true
};

// note: we :host to style the hosting the container of this component

@Component({
    selector: "tooltip",
    template: `<div class="inner">
            <template [ngTemplateOutlet]="content"></template>
         </div>
         <div class="arrow"></div>`,
    styles: [
        `
            :host {
                border: 1px solid #ccc;
                background: white;
                border-radius: 5px;
                padding: 10px;
                box-shadow: 1px 2px 3px rgba(0,0,0,0.15);
                position: fixed
            }

            :host > .arrow {
                position: absolute;
                display: block;
                width: 0;
                height: 0;
                border-color: transparent;
                border-style: solid;
                border-width: 11px;
            }

            :host > .arrow:after {
                position: absolute;
                display: block;
                width: 0;
                height: 0;
                border-color: transparent;
                border-style: solid;
                border-width: 10px;
                content: "";
            }

            :host(.top) > .arrow {    
                left: 50%;
                margin-left: -11px;
                border-bottom-width: 0;
                border-top-color: #ccc;
                bottom: -11px;
            }

            :host(.top) > .arrow:after {
                bottom: 1px;
                margin-left: -10px;
                border-bottom-width: 0;
                border-top-color: #fff;
            }

            :host(.bottom) > .arrow {    
                left: 50%;
                margin-left: -11px;
                border-top-width: 0;
                border-bottom-color: #ccc;
                top: -11px;
            }

            :host(.bottom) > .arrow:after {
                top: 1px;
                margin-left: -10px;
                border-top-width: 0;
                border-bottom-color: #fff;
            }

            :host(.right) > .arrow {    
                top: 50%;
                left: -11px;
                margin-top: -11px;
                border-left-width: 0;
                border-right-color: #ccc;
            }

            :host(.right) > .arrow:after {
                left: 1px;
                bottom: -10px;
                border-left-width: 0;
                border-right-color: #fff;
            }

            :host(.left) > .arrow {    
                top: 50%;
                right: -11px;
                margin-top: -11px;
                border-right-width: 0;
                border-left-color: #ccc;
            }

            :host(.left) > .arrow:after {
                right: 1px;
                bottom: -10px;
                border-right-width: 0;
                border-left-color: #fff;
            }

            .inner {
                font-size: 12px;
            }
        `
    ]
})
class Tooltip implements AfterViewInit {
    @Input() private content: TemplateRef <Object>;
    @Input() private parentEl: ElementRef;
    @Input() private tooltipOptions: TooltipOptions;

    constructor(private positionService: PositionService,
                public elementRef: ElementRef) {
    }

    private position() {
        // Class and style are added directly to the rendered components
        // to avoid issues with change detection (https://github.com/angular/angular/issues/6005)
        $(this.elementRef.nativeElement).addClass([
            this.tooltipOptions.position,
            this.tooltipOptions.popupClass].join(" "));

        let position = this.positionService.positionElements(
            this.parentEl.nativeElement,
            this.elementRef.nativeElement,
            this.tooltipOptions.position,
            this.tooltipOptions.margin,
            false);

        $(this.elementRef.nativeElement).css(
            {
                top: position.top + "px",
                left: position.left + "px",
                display: "block",
            }
        );
    }

    ngAfterViewInit(): void {
        this.position();
    }
}

@NgModule({
    imports: [BrowserModule],
    declarations: [Tooltip],
    exports: [Tooltip]
})
export class TooltipModule {
}

@Directive({
    selector: "[tooltip]"
})
export class TooltipDirective implements OnInit, OnChanges {
    @Input("tooltip")
    private tooltipOptions: any;

    @ContentChild("tooltipTemplate")
    private tooltipTemplate: TemplateRef <Object>;

    private tooltip: ComponentRef<Tooltip>;
    private tooltipId: string;
    private tooltipFactory: ModuleWithComponentFactories<any>;

    constructor(private compiler: Compiler,
                private viewContainer: ViewContainerRef,
                public elementRef: ElementRef,
                private position: PositionService) {

        this.tooltipId = _.uniqueId("tooltip");
        this.tooltipFactory = compiler.compileModuleAndAllComponentsSync(TooltipModule);

    }

    ngOnInit() {
        let element = $(this.elementRef.nativeElement);

        if (!this.options.trigger.off) {
            element.on(this.options.trigger.on, () => {
                if (this.tooltip) {
                    this.hideTooltip();
                } else if (this.options.active === true) {
                    this.showTooltip();
                }
            });
        }
        else {
            element.on(this.options.trigger.on, () => {
                if (!this.tooltip && this.options.active === true) {
                    this.showTooltip();
                }
            });

            element.on(this.options.trigger.off, () => {
                if (this.tooltip) {
                    this.hideTooltip();
                }
            });
        }
    }

    ngOnChanges() {
        if (this.options.active === false && this.tooltip) {
            this.hideTooltip();
        }
    }

    private showTooltip() {
        if (this.tooltipTemplate) {

            this.destroyView();
            this.tooltip = this.viewContainer.createComponent(this.tooltipFactory.componentFactories[0], 0);
            this.tooltip.instance["content"] = this.tooltipTemplate;
            this.tooltip.instance["parentEl"] = this.elementRef;
            this.tooltip.instance["tooltipOptions"] = this.options;

            if (this.options.dismissable) {
                $("html").on("click." + this.tooltipId, (event: any) => {
                    let $target = $(event.target);
                    if (!$target.closest(this.tooltip.instance.elementRef.nativeElement).length && !$target.closest(this.elementRef.nativeElement).length) {
                        this.hideTooltip();
                    }
                });
            }
        }
    }

    private destroyView() {
        if (this.viewContainer.length > 0) {
            this.viewContainer.remove(0);
        }

    }

    private hideTooltip() {
        this.tooltip.destroy();
        $("html").off("click." + this.tooltipId);
        this.tooltip = undefined;
    }

    private get options(): TooltipOptions {
        return _.defaults({}, this.tooltipOptions || {}, defaultTooltipOptions);
    }
}
