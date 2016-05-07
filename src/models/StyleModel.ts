import {Component, Injectable} from "@angular/core";

@Injectable()
export class StyleModel {
    public remember:boolean;
    public selectedTheme:string;
    public theme:string;
    public themes:string[] = ['lite','dark','polymer'];
}
