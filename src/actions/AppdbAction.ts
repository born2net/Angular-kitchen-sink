import {Injectable} from "@angular/core";
import {Actions, AppStore} from "angular2-redux-util";

export const APP_START_TIME = 'APP_START_TIME';

/** global application actions defined here **/

@Injectable()
export class AppdbAction extends Actions {
    constructor(i_appStore:AppStore){
        super(i_appStore);
    }
    public appStartTime() {
        return {type: APP_START_TIME, value: Date.now()};
    }
}
