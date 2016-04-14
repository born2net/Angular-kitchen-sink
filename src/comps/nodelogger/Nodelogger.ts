import {Directive, Input} from 'angular2/core'

@Directive({
    selector: '[nodeLogger]'
})
export class Nodelogger {
    @Input() nodeLogger;

    ngOnChanges(event:any) {
        if (event.nodeLogger.isFirstChange()) {
            console.log("Node logger ** instantiated **:", this.nodeLogger);
        } else {
            console.log("Node logger __ updated __:", this.nodeLogger);
        }
    }

}

