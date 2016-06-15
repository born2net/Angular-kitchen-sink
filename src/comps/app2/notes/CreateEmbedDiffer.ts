import {
    KeyValueDiffers,
    Component,
    ViewChild,
    ViewContainerRef,
    Directive,
    TemplateRef,
    Input,
    ChangeDetectorRef, KeyValueDiffer
} from '@angular/core';


@Component({
    selector: 'app-card',
    styles: [`
    :host{
      font-family: Monaco, Consolas, monospace;
    }
    .container{
      overflow-y: scroll;
      height: 150px; 
    }
`],
    template: `
        <template #word let-greeting="message">
          <div>{{greeting}}</div>
        </template>
        
        <div #container class="container">
          <div #target ></div>
        </div>
  `
})
export class CardComponent {
    @ViewChild('target', {read: ViewContainerRef}) target;
    @ViewChild('word', {read: TemplateRef}) word;

    @Input() message;
    messageDiffer:KeyValueDiffer;

    constructor(public keyValueDiffers:KeyValueDiffers, public changeDetector:ChangeDetectorRef) {
        this.messageDiffer = this.keyValueDiffers.find({}).create(this.changeDetector);
    }

    ngDoCheck() {
        const changes = this.messageDiffer.diff(this.message);
        if (changes) {
            changes.forEachChangedItem(message => {
                this.target.createEmbeddedView(this.word, {message: message.currentValue});
            })
        }
    }
}

@Component({
    selector: 'CreateEmbedDiffer',
    directives: [CardComponent],
    template: `
  <h2>Type stuff here</h2>
  <input type="text" [(ngModel)]="note.greeting">
  <app-card [message]="note"></app-card>
  `
})
export class CreateEmbedDiffer {
    note = {
        greeting: "egghead.io"
    };
}