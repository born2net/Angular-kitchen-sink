import {Component} from "angular2/core";
import {Consts} from "../../Conts";
import {NgForm} from 'angular2/common'

export class StyleModel {
    constructor(public male:boolean) {
    }
}

@Component({
    selector: 'Settings',
    template: `
                <small>I am Settings component</small>
                <hr/>
                <h3>Choose your theme</h3>
                <hr/>
                  <div class="clearfix" style="padding-bottom: 13px">
                  </div>
                  <div style="position: relative; top: -12px" class="material-switch pull-left">
                    <input id="changeStyle" name="someSwitchOption003" [(ngModel)]="model.male" (change)="onChange($event)" type="checkbox"/>
                    <label for="changeStyle" class="label-primary"></label>
                  </div>
                  <div class="clearfix" style="padding-bottom: 13px">
                  <h1 style="color: gray">{{model.male==true ? 'Lite' : 'Dark'}}</h1>
                `
})

export class Settings {

    private loadCss(url:string) {
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = url;
        document.getElementsByTagName("head")[0].appendChild(link);
    }

    private onChange() {
        // push method to top of event queue as dropdown event occurs before model update
        setTimeout(()=> {
            console.log(JSON.stringify(this.model));
            if (this.model.male) {
                this.loadCss('style_dark.css');
            } else {
                this.loadCss('style.css');
            }
        }, 1);
    }

    model = new StyleModel(true);
}
