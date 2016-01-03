///<reference path="../../../../typings/app.d.ts"/>

import {Component} from "angular2/core";
import {Consts} from "../../Conts";
import {NgForm} from 'angular2/common'
import {LocalStorage} from "../../../services/LocalStorage";
import {StyleModel} from "../../../models/StyleModel";

const lite:boolean = true;
const dark:boolean = false;

@Component({
    selector: 'Settings',
    providers: [LocalStorage, StyleModel],
    template: `
                <small>I am Settings component</small>
                <hr/>
                <h3>Choose your theme</h3>
                <h4>As soon as this component loads, your previous theme selection will be restored from LocalStorage</h4>
                <hr/>
                  <div class="clearfix" style="padding-bottom: 13px">
                  </div>
                  <div style="position: relative; top: -12px" class="material-switch pull-left">
                    <input id="changeStyle" name="someSwitchOption003" [(ngModel)]="model.style"
                     (change)="onChange($event)" type="checkbox"/>
                    <label for="changeStyle" class="label-primary"></label>
                  </div>
                  <div class="clearfix" style="padding-bottom: 13px">
                  <h1 style="color: gray">{{model.style == true ? 'Lite' : 'Dark'}}</h1>
                `
})

export class Settings {

    private model:StyleModel;
    constructor(private styleModel:StyleModel, private localStorage:LocalStorage) {
        this.model = styleModel;
        this.model.style = localStorage.getItem('style', lite);
        this.loadStyle();
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
            self.model.style = !self.model.style;
            self.localStorage.setItem('style', self.model.style);
            self.loadStyle();
        }, 1);
    }

    private loadStyle(){
        if (this.model.style == lite) {
            this.loadCss('style.css');
        } else {
            this.loadCss('style_dark.css');
        }
    }

}
