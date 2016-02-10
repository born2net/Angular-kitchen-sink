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
import {Consts} from "../../../src/Conts";
import {Observable} from "rxjs/Observable";
import {DiggLoader} from "../../../src/comps/digg/DiggLoader";
import {Observer} from "rxjs/Observer";
import {IDigg} from "./DiggLoader";
import {CommBroker, IMessage} from "../../services/CommBroker";
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';



@Component({
    selector: 'Digg',
    inputs: ['mode:mode'],
    encapsulation: ViewEncapsulation.Emulated, // so we don't bleed our styles to rest of dom
    providers: [DiggLoader],
    styles: [`
        .diggContainer {
            overflow-y: scroll;
            height: 300px;
        };
        .largeImage {
           max-width: 100px;
           max-height: 60px;
        }
        .smallImage {
           width: 70px;
           height: 40px;
        }
        .grow { transition: all .2s ease-in-out; }
        .grow:hover { transform: scale(1.1); opacity: 0.7}
    `],
    template: `
        <h1>Digg</h1>
        <div class="appHeight">
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

export class Digg {
    private mode:string;
    private tileStyle:boolean;
    private channel:Observable<any[]>;
    private stream:Observer<any[]>;
    private diggs:IDigg[];
    private el:any;
    private viewContainer:ViewContainerRef;
    private dom = new BrowserDomAdapter();

    constructor(private commBroker:CommBroker, diggLoader:DiggLoader, private m_commBroker:CommBroker, viewContainer:ViewContainerRef) {
        var self = this;
        self.mode = 'list';
        this.diggs = [];
        self.viewContainer = viewContainer;
        self.el = viewContainer.element.nativeElement;

        self.channel = new Observable(observer => {
            self.stream = observer;
        }).share();

        // for a cleaner approach to Observable endpoint server calls see Weather component
        self.channel.debounceTime(1000).distinctUntilChanged().subscribe((e)=> {
            self.diggs = [];
            diggLoader.loadDiggs(e, self.diggs)
        });
        this.listenWinResize();
        var propView = this.commBroker.getService(Consts.Services().Properties);
        if (propView)
            propView.setPropView('Digg');
    }

    private listenWinResize() {
        var self = this;
        self.m_commBroker.onEvent(Consts.Events().WIN_SIZED).subscribe((e:IMessage)=> {
            self.setSize(e.message.height)
        });
    }

    ngAfterContentInit() {
        this.tileStyle = this.mode == "tiles" ? true : false;
        this.setSize(this.m_commBroker.getValue(Consts.Values().APP_SIZE).height);
    }

    private setSize(height) {
        var h:any = height - 400;
        //var el = this.dom.getElementsByClassName(this.el, this.mode)[0];
        var el = this.dom.getElementsByClassName(this.el, 'diggContainer')[0];
        this.dom.setStyle(el, 'height', h);
    }

    private onSearch(event) {
        this.stream.next(event.target.value);
    }
}