import {NgRedux, select} from "ng2-redux"; //toggle
import {Component, Inject} from "@angular/core";
import {AppStore} from "angular2-redux-util";
import {Ngmslib} from "ng-mslib";
import {Compbaser} from "../Compbases";
import * as SampleActionTypes from "../../actions/SampleActions";
import {SampleActions} from "../../actions/SampleActions";
import {Map} from 'immutable';
import * as _ from "lodash";
import {Observable} from "rxjs";
import {setTimeout} from "timers";

@Component({
    selector: 'obs-redux',
    template: `
      I am : {{me}}
      <br/>
      <button (click)="startStream()" class="btn">Start stream</button>
      <h5>StringJSPipe pipe: {{selectedReportNameLong | StringJSPipe:stringJSPipeArgs}}</h5>
      <hr/>
      <h5>example of ng-redux and AppStore redux store</h5>
      <h4>async subscription using ng-redux @select decorator</h4>
      <p>{{obs1$ | async }}</p>
      <h4>async subscription using ng-redux select operator</h4>
      <p>{{obs2$ | async }}</p>
      <h4>async subscription using AppStore subscription</h4>
      <p>{{none_obs_value}}</p>
    `,
})
export class ObsRedux extends Compbaser {
    // constructor(private appStore: AppStore, @Inject('OFFLINE_ENV') private offlineEnv) {
    constructor(private store: NgRedux<any>, private appStore: AppStore, @Inject('OFFLINE_ENV') private offlineEnv, private action: SampleActions) { //toggle
        super();

        // example of using external lib Ngmslib
        var a = new Ngmslib(1);
        console.log(Ngmslib.Testing('I am static'));
        console.log(a.replaceReducer(2));
        console.log(StringJS('/a/a/a/a/a').fileTailName(3).s);
        StringJS('a').capitalize()

        console.log('>>> offline: ' + this.offlineEnv + ' ' + this.obs2$);

        this.cancelOnDestroy(
            this.appStore.sub((i_value) => {
                this.none_obs_value = i_value;
            }, 'sample_reducer.general')
        )
    }

    ngOnInit() {
        // dive deep into immutable tree and apply operators
        this.obs2$ = this.store.select(['sample_reducer', 'general']).map(e => e);
    }

    private startStream() {
        // doing dispatch through the ng-redux instance
        this.store.dispatch({type: SampleActionTypes.GENERAL_STATUS, payload: _.uniqueId()})

        setTimeout(() => {
            // doing dispatch through the AppStore instance
            this.appStore.dispatch({type: SampleActionTypes.GENERAL_STATUS, payload: _.uniqueId()})
        }, 2000)

        setTimeout(() => {
            // doing dispatch through a async thunkable
            // this.store.dispatch<any>(this.action.serverStatus()); // no need for <any> in "ng2-redux": "^4.2.0-thunkexp.0",
            this.store.dispatch(this.action.serverStatus());
        }, 2000)

        setTimeout(() => {
            setInterval(() => {
                this.store.dispatch(this.act(_.uniqueId()));
            }, 1000)
        }, 4000)
    }

    // possible future (hoping..) road map usage
    // @select(['sample_reducer','general'])
    // set setGeneral(i_obs$) {
    //     this.obs2$ = i_obs$;
    //     this.obs2$.map(e => 'foo');
    // }

    // dive deep into immutable tree
    @select(['sample_reducer', 'general']) obs1$: Observable<number>

    private obs2$: Observable<number>;

    private none_obs_value: number;

    private selectedReportNameLong: string = 'hello-world-humanize-me';

    public stringJSPipeArgs = {
        humanize: []
    }

    private act = (i_value): any => {
        return (dispatch) => {
            setTimeout(() => {
                dispatch({type: SampleActionTypes.GENERAL_STATUS, payload: i_value})
            }, 500)
        }
    }
}