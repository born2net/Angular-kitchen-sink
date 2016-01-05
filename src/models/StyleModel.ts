import {Component, Injectable} from "angular2/core";

@Injectable()
export class StyleModel {
    public remember:boolean;
    public selectedTheme:string;
    public theme:string;
    public themes:string[] = ['lite','dark','polymer'];
}
