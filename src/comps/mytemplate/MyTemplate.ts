import {Component, ChangeDetectionStrategy, ViewChild, Input} from "@angular/core";
import {Compbaser} from "ng-mslib";

@Component({
    selector: 'MyTemplateExample',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
               <small class="release">my component
                   <i style="font-size: 1.4em" class="fa fa-cog pull-right"></i>
               </small>
               <small class="debug">{{me}}</small>
               <template let-name="name" #myTemplate>
                    Hi <strong>{{name}}</strong> on {{date.toLocaleDateString()}}
               </template> 
               <MyTemplate [name]="customer" [template]="myTemplate"></MyTemplate>
           `,
    host: {
        class: 'yellow'
    }
})
export class MyTemplateExample extends Compbaser {

    constructor() {
        super();
    }

    @ViewChild('myTemplate') myTemplate:any

    date: Date = new Date();
    customer:string = 'Sean';

    ngOnInit() {
    }

    destroy() {
    }
}

@Component({
    selector: 'MyTemplate',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
              <div class="yellow">
                  <h1>Welcome</h1>
                    <template 
                        [ngTemplateOutlet]="template" 
                        [ngOutletContext]="{name: name}">
                    </template>
            </div>
           `,
    host: {
        class: 'yellow'
    }
})
export class MyTemplate extends Compbaser {

    constructor() {
        super();
    }

    @Input() name:string;
    @Input() template:any;

    destroy() {
    }
}



