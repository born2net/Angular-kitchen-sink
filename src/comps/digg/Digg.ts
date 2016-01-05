/*******************************************
 ng2Boilerplate application

 Get up and running quickly with a working
 application with solid foundation for
 Google's Angular 2

 GitHub: https://github.com/born2net/ng2Boilerplate

 Licence: MIT
 *******************************************/

import {Component, ViewContainerRef, ViewEncapsulation} from 'angular2/core';
import {BrowserDomAdapter} from 'angular2/platform/browser';
import {Consts} from "src/Conts";
import {Control, AsyncPipe} from "angular2/common";
import {Observable} from "rxjs/Observable";
import {Http} from "angular2/http";
import {DiggLoader} from "src/comps/digg/DiggLoader";
import {Observer} from "rxjs/Observer";
import {IDigg} from "./DiggLoader";
import {CommBroker, IMessage} from "../../services/CommBroker";
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {RefreshTheme} from "../../styles/RefreshTheme";


const DIGG_INIT_HEIGHT = '400px';

@Component({
    selector: 'Digg',
    inputs: ['mode:mode'],
    encapsulation: ViewEncapsulation.Emulated, // so we don't bleed our styles to rest of dom
    providers: [DiggLoader],
    styles: [`
        .diggContainer {
            overflow-y: scroll;
            height: ${DIGG_INIT_HEIGHT};
        };
        .largeImage {
           max-width: 100;
           max-height: 60;
        }
        .smallImage {
           width: 70;
           height: 40;
        }
        .grow { transition: all .2s ease-in-out; }
        .grow:hover { transform: scale(1.1); opacity: 0.7}
    `],
    template: `
        <ng-content></ng-content>
        <div >
             <form (submit)="$event.preventDefault();">
                <br/>
                <div class="input-group">
                      <span class="input-group-addon" id="symbol-input">Digg filter</span>
                      <input type="text" class="form-control" (keyup)="onSearch($event)" placeholder="press [ENTER] for unfiltered result">
                    </div>
              </form>
              <div class="diggContainer list">
                  <table class="table table-striped">
                  <tbody>
                    <tr *ngFor="#digg of diggs" [ngClass]="{'col-xs-4': tileStyle, 'col-lg-3': tileStyle}">
                      <td>
                      <img class="img-responsive grow" [ngClass]="{'largeImage': tileStyle, 'smallImage': !tileStyle}" src="{{digg.link}}"/>
                      <span>{{digg.title}}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
        </div>
  `
})

export class Digg extends RefreshTheme {
    private mode:string;
    private tileStyle:boolean;
    private channel:Observable<any[]>;
    private stream:Observer<any[]>;
    private diggs:IDigg[];
    private el:any;
    private viewContainer:ViewContainerRef;
    private dom = new BrowserDomAdapter();

    constructor(diggLoader:DiggLoader, private m_commBroker:CommBroker, viewContainer:ViewContainerRef) {
        super();
        var self = this;
        self.mode = 'list';
        this.diggs = [];
        self.viewContainer = viewContainer;
        self.el = viewContainer.element.nativeElement;

        self.channel = new Observable(observer => {
            self.stream = observer;
        }).share();

        self.channel.debounceTime(1000).distinctUntilChanged().subscribe((e)=> {
            self.diggs = [];
            diggLoader.loadDiggs(e, self.diggs)
        });

        this.listenWinResize();
    }

    private listenWinResize() {
        var self = this;
        self.m_commBroker.onEvent(Consts.Events().WIN_SIZED).subscribe((e:IMessage)=> {
            self.setSize(e.message.height)
        });
    }

    ngAfterContentInit() {
        this.tileStyle = this.mode=="tiles" ? true : false;
        this.setSize(this.m_commBroker.getValue(Consts.Values().APP_SIZE).height);
    }

    private setSize(height) {
        var h:any = height - 200;
        //var el = this.dom.getElementsByClassName(this.el, this.mode)[0];
        var el = this.dom.getElementsByClassName(this.el, 'diggContainer')[0];
        this.dom.setStyle(el, 'height', h);
    }

    private onSearch(event) {
        this.stream.next(event.target.value);
    }
}