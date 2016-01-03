///<reference path="../../../../typings/app.d.ts"/>

import {Component} from "angular2/core";
import {Consts} from "../../Conts";
import {NgForm} from 'angular2/common'
import {LocalStorage} from "../../../services/LocalStorage";
import {StyleModel} from "../../../models/StyleModel";

@Component({
    selector: 'Settings',
    providers: [LocalStorage, StyleModel],
    template: `
                <small>I am Settings component</small>
                <hr/>
                <h3>Choose your theme</h3>
                <hr/>
                  <div class="clearfix" style="padding-bottom: 13px">
                  </div>
                  <div style="position: relative; top: -12px" class="material-switch pull-left">
                    <input id="changeStyle" name="someSwitchOption003" [(ngModel)]="model.style"
                     (change)="onChange($event)" type="checkbox"/>
                    <label for="changeStyle" class="label-primary"></label>
                  </div>
                  <div class="clearfix" style="padding-bottom: 13px">
                  <h1 style="color: gray">{{model.style==false ? 'Dark' : 'Lite'}}</h1>
                `
})

export class Settings {

    private model:StyleModel;
    constructor(private styleModel:StyleModel, private localStorage:LocalStorage) {
        this.model = styleModel;
        this.model.style = localStorage.getItem('style', false);
        this.onChange();
    }

    private loadCss(url:string) {
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = url;
        document.getElementsByTagName("head")[0].appendChild(link);
    }

    private onChange() {
        var self = this;
        // push method to top of event queue as dropdown event occurs before model update
        setTimeout(()=> {

            if (self.model.style) {
                self.loadCss('style_dark.css');
                self.localStorage.setItem('style', true);

            } else {
                self.loadCss('style.css');
                self.localStorage.setItem('style', false);
            }
        }, 1);
    }

}
