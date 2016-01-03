///<reference path="../../../typings/app.d.ts"/>

import {Component, Injectable} from "angular2/core";
import {MenuItem} from "./MenuItem";
import {CommBroker} from "../../services/CommBroker";
import {Consts} from "../../Conts";
import {IMessage} from "../../services/CommBroker";

@Component({
    selector: 'Menu',
    inputs: ['fontAwesome:fontAwesome'],
    styles: [`
    .appMenu {
      background: #3e3f48;
    }
  `],
    template: `
        <section id="appNavigatorWasp" (click)="listenMenuSelected($event)" class="appMenu hidden-xs hidden-sm hidden-md col-lg-1">
         <li *ngFor="#item of m_items" data-ripple-color="white" class="btn btn-default list-group-item">
            <i class="navicons fa {{item.localFontAwesome}}" [hidden]="m_hidden">
            </i>
            <span>{{item.localTabTitle}}</span>
          </li>
      </section>
    `
})

export class Menu {
    private m_items:MenuItem[];
    private m_commBroker:CommBroker;
    private m_hidden:boolean;

    constructor(commBroker:CommBroker) {
        this.m_hidden = false;
        this.m_items = [];
        this.m_commBroker = commBroker;
        this.listenWinResize();

    }

    private listenWinResize() {
        var self = this;
        self.m_commBroker.onEvent(Consts.Events().WIN_SIZED).subscribe((e:IMessage)=> {
            if (e.message.width < Consts.Values().MENU_MIN_ICON_SHOW){
                this.m_hidden = true;
            } else {
                this.m_hidden = false;
            }
        });
    }

    private listenMenuSelected(event) {
        var text = event.target.nodeName.toLocaleLowerCase() == 'li' ? jQuery(event.target).find('span').text() : jQuery(event.target).closest('li').find('span').text();
        event.preventDefault();
        this.m_commBroker.fire({
            fromInstance: self,
            event: Consts.Events().MENU_SELECTION,
            context: null,
            message: text
        });
        return false;
    }

    public addMenuItem(i_item:MenuItem):void {
        this.m_items.push(i_item);
    }
}
