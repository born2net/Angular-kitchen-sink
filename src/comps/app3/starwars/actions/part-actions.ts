import {Injectable} from "@angular/core";
import {Actions, AppStore} from "angular2-redux-util";
import * as _ from "lodash";

export const ADD_PART = 'ADD_PART';

@Injectable()
export class PartActions extends Actions {
    constructor(i_appStore:AppStore) {
        super(i_appStore);

    }

    private id: number = 11;

    addPart(name) {
        return {type: ADD_PART, id: _.uniqueId(), name};
    }
}
