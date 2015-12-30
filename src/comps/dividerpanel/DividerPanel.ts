///<reference path="../../../typings/app.d.ts" />

import {Component} from "angular2/core";
import {Consts} from "../../Conts";

@Component({
    selector: 'DividerPanel',
    template: `
                <button id="togglePanel" (click)="onToggleSidePanel($event)" class="propPanelIsOpen btn btn-default btn-sm hidden-lg">
                    <span class="glyphicon glyphicon-resize-horizontal"></span>
                  </button>
                <ng-content></ng-content>
              `
})

export class DividerPanel {
    constructor() {
    }

    /**
     Listen for open/close actions on properties panel that can slide in and out
     @method _listenClickSlidingPanel
     **/
    onToggleSidePanel() {
        var self = this;
        if (jQuery(Consts.Elems().TOGGLE_PANEL).hasClass('propPanelIsOpen')) {
            jQuery(Consts.Elems().TOGGLE_PANEL).toggleClass('propPanelIsOpen');
            jQuery(Consts.Elems().PROP_PANEL_WRAP).addClass('hidden-xs hidden-sm hidden-md');
            jQuery(Consts.Elems().MAIN_PANEL_WRAP).removeClass('col-xs-9 col-sm-9 col-md-9');
            jQuery(Consts.Elems().MAIN_PANEL_WRAP).addClass('col-xs-12 col-md-12');
        } else {
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
