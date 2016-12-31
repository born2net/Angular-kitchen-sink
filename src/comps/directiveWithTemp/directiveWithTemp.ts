/** Allows us to pass in a template (i.e.: the shortcut of *) and created it in via embedded view: **/
//
// <div *ngFor="let item of usernames">
//      <div *directiveWithTemp="item">
//           {{item.name}}
//      </div>
// </div>
//


import {Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
    selector: '[directiveWithTemp]'
})
export class DirectiveWithTemp {

    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {
    }

    @Input()

    set appMydirective(user) {
        if (user.status == 'active') {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
    }

}


