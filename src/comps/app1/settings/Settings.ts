///<reference path="../../../../typings/app.d.ts"/>

import {Component} from "angular2/core";
import {StyleModel} from "../../../models/StyleModel";
import {StyleService} from "../../../styles/StyleService";


@Component({
    selector: 'Settings',
    providers: [StyleModel],
    template: `
                <small>I am Settings component</small>
                <hr/>
                <h3>Choose your theme</h3>
                <hr/>
                  <div class="clearfix" style="padding-bottom: 13px">
                  </div>
                  <select class="form-control"
                    [(ngModel)]="styleService.model.theme"
                    (change)="styleService.model.theme=$event.value; styleService.onUpdate()">
                      <option *ngFor="#theme of styleService.model.themes">{{theme}}</option>
                  </select>
                  <hr/>
                  <h3>Auto load theme on start</h3>
                  <div class="clearfix" style="padding-bottom: 30px">
                  <div style="position: relative" class="material-switch pull-left">
                    <input id="changeStyle" name="someSwitchOption003"
                     [(ngModel)]="styleService.model.remember"
                     (change)="styleService.onUpdate()" type="checkbox"/>
                    <label for="changeStyle" class="label-primary"></label>
                  </div>
                  <div class="clearfix" style="padding-bottom: 13px">
                  <h1 style="color: gray">{{styleService.model.remember == true ? 'On' : 'Off'}}</h1>
                `
})

export class Settings {
    constructor(private styleService:StyleService) {}
}
