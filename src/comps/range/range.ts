import {Directive, Input, TemplateRef, ViewContainerRef} from "@angular/core";
import * as _ from 'lodash';
@Directive({
    selector: '[range]'
})
export class RangeDirective {
    _range: number[];

    @Input()
    set range( value ) {
        this.vcr.clear();
        this._range = this.generateRange(value[0], value[1]);
        this._range.forEach(num => {
            this.vcr.createEmbeddedView(this.tpl, {
                number: num
            });
        });
    }

    constructor( private vcr : ViewContainerRef, private tpl : TemplateRef<any> ) {}

    private generateRange( from, to ) {
        return _.range(from, to)
    }

}