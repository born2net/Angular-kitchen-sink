import {Component} from "angular2/core";
import {Menu} from "./Menu";

@Component({
    inputs: ['localTabTitle:tabtitle', 'localFontAwesome:fontAwesome'],
    selector: 'MenuItem',
    template: ``
})
export class MenuItem {
    public title:string = 'no name';
    private m_appMenu:Menu;

    constructor(i_appMenu:Menu) {
        this.m_appMenu = i_appMenu;
        this.m_appMenu.addMenuItem(this);
    }

    ngAfterViewInit(){
        var self = this;
    }
}
