import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';

@Pipe({
    name: 'OrderBy'
})
export class OrderBy implements PipeTransform {

    // transform(input: Object[], [field, desc = false]: [string, boolean]): Object[] {
    transform(input: Object[], ...args:any[]): Object[] {
        var field =  args[0];
        var desc = args[1] == undefined ? false : args[1];
        if (input && field) {
            return Array.from(input).sort((a: Object, b: Object) => {
                if (_.get(a, field) < _.get(b, field)) {
                    return desc ? 1 : -1;
                }
                if (_.get(a, field) > _.get(b, field)) {
                    return desc ? -1 : 1;
                }
                return 0;
            });
        }
        return input;
    }

}