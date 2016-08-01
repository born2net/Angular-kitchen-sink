import {Pipe} from '@angular/core';
import * as moment from 'moment';
/**
 reference: https://www.dunebook.com/create-a-commenting-application-with-angular-2
 to use:
  @Componrny({
    pipes: [FromNow]
  })
 ...
 <div>
    {{someDateObject | fromNow}}
 </div>
 **/

@Pipe({
    name: 'fromNow'
})
// Our pipe will transform dates and timestamps to relative times
// using Moment.js
export class FromNow {
    // The transform method will be called when the pipe is used
    // within a template
    transform(value) {
        if (value && (value instanceof Date || typeof value === 'number')) {
            return moment(value).fromNow();
        }
    }
}