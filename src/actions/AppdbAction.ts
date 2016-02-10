import {Injectable} from "angular2/core";
import {Actions} from "angular2-redux-util";

export const APP_START_TIME = 'APP_START_TIME';

/** global application actions defined here **/

@Injectable()
export class AppdbAction extends Actions {

    public appStartTime() {
        return {type: APP_START_TIME, value: Date.now()};
    }
}
