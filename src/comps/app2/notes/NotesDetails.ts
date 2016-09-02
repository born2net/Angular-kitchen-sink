import {Component} from '@angular/core';

// notice the optional {{items?.length}} deceleration

@Component({
    selector: 'notes-details',
    template: `
                I see {{items?.length}} items. <ng-content></ng-content>
                <small>I am NotesDetails (constructor based QueryList)</small>
                `
})
export class NotesDetails {
}

