import {
    Component,
    ViewContainerRef,
    ViewEncapsulation,
    Inject
} from "@angular/core";
import {IRegisterCaller} from "../../interfaces/IRegisterCaller";
import {DOCUMENT} from "@angular/platform-browser";

@Component({
    selector: 'ModalDialog',
    inputs: ['title:title', 'content:content', 'owner:owner'],
    styles: [`
            .modal-dialog {
                width: 95%;
                height: 95%;
                padding: 0;
            }

            .modal-content {
                height: 95%;
                border-radius: 0;
            }
    `],
    encapsulation: ViewEncapsulation.Emulated,
    template: `
         <div class="modal modal-static fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
             aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button id="toggleProperties" type="button" class="close" data-dismiss="modal"
                                aria-hidden="true">&times;</button>
                        <h4 class="modal-title" id="myModalLabel" data-localize="ModalTitle">{{title}}</h4>
                    </div>
                    <div class="modal-body">
                        {{content}}
                        <small>I am ModalDialog component</small>
                        <ng-content></ng-content>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal" data-localize="close">Close</button>
                        <button type="button" class="btn btn-primary" data-localize="saveChanges">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class ModalDialog {
    private el: HTMLElement;
    private viewContainer: ViewContainerRef;
    private dom: HTMLBodyElement;
    private owner: any;

    constructor(viewContainer: ViewContainerRef, @Inject(DOCUMENT) private doc) {
        this.viewContainer = viewContainer;
        this.dom = doc.body;
        this.el = this.viewContainer.element.nativeElement;
    }

    ngAfterViewInit() {
        (this.owner as IRegisterCaller).registerCaller(this);
    }

    openModal() {
        var jq:any = jQuery;
        var modal = jq(this.dom).find('.modal', this.el)[0];
        jQuery(modal).modal();
    }
}