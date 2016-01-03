import {Pipe, PipeTransform} from 'angular2/core';
import * as _ from 'lodash';

@Pipe({
    name: 'OrderBy'
})
export class OrderBy implements PipeTransform {

    transform(input: Object[], [field, desc = false]: [string, boolean]): Object[] {
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