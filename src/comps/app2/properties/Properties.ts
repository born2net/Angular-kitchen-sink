///<reference path="../../../../typings/app.d.ts" />
import {Component, Injectable} from "angular2/core";
import {Consts} from "src/Conts";



@Component({
    selector: 'Properties',
    template: `
                 <ul [ngSwitch]="value">
                  <li *ngSwitchWhen="1">is 1111111111111</li>
                  <li *ngSwitchWhen="2"><h1>dDDDD</h1>is 2dd</li>
                  <li *ngSwitchWhen="3">
                  <div style="height:  400px ;overflow-y: scroll">
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>
                  <h1>3333333333333333333333333</h1>

                  </div>
                  </li>
                  <li *ngSwitchWhen="4">is 4</li>
                </ul>
                <button (click)="onClick()">Click me</button>
                <ng-content></ng-content>
              `
})

export class Properties {
    private sliderHandler;
    private value:string;
    private c:number;

    constructor() {
        this._listenClickSlidingPanel();
        this.value = 1;
        this.c = 1;
    }

    onClick(){
        this.c++;
        this.value = this.c;
        console.log(this.c)
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
