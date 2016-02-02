import {Injectable} from "angular2/core";
import {Actions} from "angular2-redux-util";

export const ADD_PART = 'ADD_PART';

@Injectable()
export class PartActions extends Actions {
    private id:number = 11;

    addPart(name) {
        return {type: ADD_PART, id: _.uniqueId(), name};
    }
}
