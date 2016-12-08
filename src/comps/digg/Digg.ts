import {
    Component,
    ViewContainerRef,
    ViewEncapsulation,
    Inject
} from "@angular/core";
import {DOCUMENT} from "@angular/platform-browser";
import {Consts} from "../../../src/Conts";
import {Observable} from "rxjs/Observable";
import {DiggLoader} from "../../../src/comps/digg/DiggLoader";
import {Observer} from "rxjs/Observer";
import {IDigg} from "./DiggLoader";
import {
    CommBroker,
    IMessage
} from "../../services/CommBroker";
import "rxjs/add/observable/from";
import "rxjs/add/operator/do";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import {Ngmslib} from "ng-mslib";

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
        <h6>Automatically show Component name using Reflection:
            <small class="debug">component name: {{me}}</small>
        </h6>
        
        <div class="appHeight" HeightDirective (resizing)="smallHeight = $event">
                 <h5>
                    component height: {{smallHeight}}px
                </h5>
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
                    <tr *ngFor="let digg of diggs" [ngClass]="{'col-xs-4': tileStyle, 'col-lg-3': tileStyle}">
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
    private mode: string;
    private tileStyle: boolean;
    private channel: Observable<any>;
    private stream: Observer<any[]>;
    private diggs: IDigg[];
    private el: any;
    private viewContainer: ViewContainerRef;
    private dom: HTMLBodyElement;

    constructor(private commBroker: CommBroker, diggLoader: DiggLoader, @Inject(DOCUMENT) private doc, private m_commBroker: CommBroker, viewContainer: ViewContainerRef) {
        var self = this;
        self.mode = 'list';
        this.dom = this.doc.body;
        this.diggs = [];
        self.viewContainer = viewContainer;
        self.el = viewContainer.element.nativeElement;
        self['me'] = Ngmslib.GetCompSelector(this.constructor, this)


        self.channel = new Observable(observer => {
            self.stream = observer;
        }).share();

        // for a cleaner approach to Observable endpoint server calls see Weather component
        self.channel.debounceTime(1000).distinctUntilChanged().subscribe((e) => {
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
        self.m_commBroker.onEvent(Consts.Events().WIN_SIZED).subscribe((e: IMessage) => {
            self.setSize(e.message.height)
        });
    }

    ngAfterContentInit() {
        this.tileStyle = this.mode == "tiles" ? true : false;
        this.setSize(this.m_commBroker.getValue(Consts.Values().APP_SIZE).height);
    }

    private setSize(height) {
        var h: any = height - 400;
        var jq:any = jQuery;
        var el = jq(this.dom).find('diggContainer', this.el)[0];
        jQuery(this.dom).find(el).css({height: h});
    }

    private onSearch(event) {
        this.stream.next(event.target.value);
    }
}