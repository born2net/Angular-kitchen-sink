///<reference path="../../../../typings/app.d.ts" />
import {Component, Injectable} from "angular2/core";
import {Consts} from "src/Conts";



@Component({
    selector: 'Properties',
    template: `<ng-content></ng-content>`
})

export class Properties {
    private sliderHandler;

    constructor() {
        this._listenClickSlidingPanel();
    }

    /**
     Listen for open/close actions on properties panel that can slide in and out
     @method _listenClickSlidingPanel
     **/
    _listenClickSlidingPanel() {
        var self = this;
        self.sliderHandler = function () {
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
        };
        jQuery(Consts.Elems().TOGGLE_PANEL).on('click', this.sliderHandler);
    }

    ngOnDestroy() {
        jQuery(Consts.Elems().TOGGLE_PANEL).off('click', this.sliderHandler);
    }
}
