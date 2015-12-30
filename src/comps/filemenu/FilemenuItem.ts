import {Component} from 'angular2/core';
import {Filemenu} from "./Filemenu";

/**
 Filemenu manages the top header file menu per application as it mutates it's content depending
 on which App has loaded
 @class Filemenu
 **/
@Component({
    selector: 'FilemenuItem',
    inputs: ['title:title', 'app:app'],
    template: ``
})
export class FilemenuItem {
    private m_fileMenu:Filemenu;
    constructor(fileMenu:Filemenu) {
        this.m_fileMenu = fileMenu;
        this.m_fileMenu.addFileMenuItem(this);
    }

    ngAfterViewInit(){
    }
}