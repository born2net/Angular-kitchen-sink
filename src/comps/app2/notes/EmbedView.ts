import {
    Component,
    ViewChild,
    ViewContainerRef
} from "@angular/core";

@Component({
    selector: 'EmbedView',
    template: `
    <template #myTemplate><h3 style="background-color: #00b0e8">Hello, I was created dynamically embedded via createEmbeddedView</h3></template>
    
    <h2>Above</h2>
    <div #putStuffHere></div>
    <h2>Below</h2>
  `
})
export class EmbedView {
    @ViewChild('myTemplate') myTemplate;

    @ViewChild('putStuffHere', {read: ViewContainerRef}) putStuffHere;

    constructor(public view:ViewContainerRef) {
    }

    ngAfterViewInit() {
        this.putStuffHere.createEmbeddedView(this.myTemplate)
    }

}
