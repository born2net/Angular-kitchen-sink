///<reference path="../../../typings/app.d.ts" />

import {Component, ViewContainerRef, ViewEncapsulation} from 'angular2/core';
import {BrowserDomAdapter} from 'angular2/platform/browser';
import {Notes1} from "../app2/notes/Notes1";
import {IRegisterCaller} from "../../interfaces/IRegisterCaller";

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
    private el:HTMLElement;
    private viewContainer:ViewContainerRef;
    private dom = new BrowserDomAdapter();
    private owner:any;

    constructor(viewContainer:ViewContainerRef) {
        this.viewContainer = viewContainer;
        this.el = this.viewContainer.element.nativeElement;
    }

    ngAfterViewInit() {
        (this.owner as IRegisterCaller).registerCaller(this);
    }

    openModal() {
        var modal = this.dom.getElementsByClassName(this.el, 'modal')[0];
        jQuery(modal).modal();
    }
}