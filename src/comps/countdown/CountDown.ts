import {Directive, Component, TemplateRef, ViewContainerRef, ChangeDetectorRef} from '@angular/core'

// credit: http://www.michaelbromley.co.uk/blog/513/components-with-custom-templates-in-angular-2
// http://plnkr.co/edit/4pToagzeAI5wuLgHg61j?p=preview

@Directive({
    selector: '[CountDown]'
})
export class CountDown {

    running: boolean = false;
    time: number = 0;

    constructor(private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef,
                private cdr: ChangeDetectorRef) {}

    ngOnInit() {
        // we need to detach the change detector initially, to prevent a
        // "changed after checked" error.
        this.cdr.detach();
    }

    // Detaches and removes the view container
    hide() {
        this.viewContainer.detach();
        this.viewContainer.remove();
    }

    ngAfterViewInit() {
        let view = this.viewContainer.createEmbeddedView(this.templateRef);
        let api = {
            toggle: () => this.toggle(),
            reset: () => this.reset(),
            getTime: () => this.getTime()
        }
        //todo: fix as setLocal no longer supported
        //var viewRef = <EmbeddedViewRef<NgForRow>>this._viewContainer.get(record.currentIndex);
        //view.setLocal('timerApi', api);

        setTimeout(() => this.cdr.reattach());
    }

    getTime() {
        let pad = n => n <= 9 ? '0' + n : n;
        let cs = Math.floor(this.time % 100);
        let s = Math.floor(this.time / 100) % 60;
        let m = Math.floor(this.time / 6000);
        return `${pad(m)}:${pad(s)}:${pad(cs)}`;
    }

    toggle() {
        this.running = !this.running;
        if (this.running) {
            this.tick();
        }
    }

    reset() {
        this.time = 0;
    }

    tick = () => {
        this.time += 1;
        if (this.running) {
            setTimeout(this.tick, 10);
        }
    };
}