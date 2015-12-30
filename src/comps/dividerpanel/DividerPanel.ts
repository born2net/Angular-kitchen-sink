///<reference path="../../../typings/app.d.ts" />

import {Component} from "angular2/core";
import {Consts} from "../../Conts";

@Component({
    selector: 'DividerPanel',
    styles: [`
        #togglePanel {
                position: fixed;
                margin: 10px;
                right: -5px;
                top: 50px;
                z-index: 1050;
                height: 30px;
                width: 30px;
                text-align: center;
                padding: 6px 0;
                font-size: 11px;
                outline:none;
                border-radius: 15px !important;
        }
        #togglePanel > span {
           opacity: 0.5;
           position: relative;
           top: -3px;
           font-size: 2em;
        }
    `],
    template: `
                <button id="togglePanel" (click)="onToggleSidePanel($event)" class="propPanelIsOpen btn btn-default btn-sm hidden-lg">
                    <span [ngClass]="{'fa-arrow-circle-right': panelOpen, 'fa-arrow-circle-left': !panelOpen}"  class="fa"></span>
                  </button>
                <ng-content></ng-content>
              `
})

export class DividerPanel {
    private panelOpen:boolean;
    constructor() {
        this.panelOpen = true;
    }

    onToggleSidePanel() {
        var self = this;
        if (jQuery(Consts.Elems().TOGGLE_PANEL).hasClass('propPanelIsOpen')) {
            this.panelOpen = false;;
            jQuery(Consts.Elems().TOGGLE_PANEL).toggleClass('propPanelIsOpen');
            jQuery(Consts.Elems().PROP_PANEL_WRAP).addClass('hidden-xs hidden-sm hidden-md');
            jQuery(Consts.Elems().MAIN_PANEL_WRAP).removeClass('col-xs-9 col-sm-9 col-md-9');
            jQuery(Consts.Elems().MAIN_PANEL_WRAP).addClass('col-xs-12 col-md-12');
        } else {
            this.panelOpen = true;
            jQuery(Consts.Elems().TOGGLE_PANEL).toggleClass('propPanelIsOpen');
            jQuery(Consts.Elems().MAIN_PANEL_WRAP).addClass('col-xs-9 col-sm-9 col-md-9');
            setTimeout(function () {
                jQuery(Consts.Elems().PROP_PANEL_WRAP).hide();
                jQuery(Consts.Elems().MAIN_PANEL_WRAP).removeClass('col-xs-12 col-md-12');
                jQuery(Consts.Elems().PROP_PANEL_WRAP).removeClass('hidden-xs hidden-sm hidden-md');
                jQuery(Consts.Elems().PROP_PANEL_WRAP).fadeIn('fast');
            }, 500)
        }
    }
}
