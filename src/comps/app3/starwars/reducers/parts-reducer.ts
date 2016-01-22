import * as PartActions from '../actions/part-actions';
import partReducer from "./part-reducer"
import {IPart} from "../components/shopping-component";

export default (state:IPart[] = [], action:any = {}) => {
    switch (action.type) {
        case PartActions.ADD_PART:
            return [...state, partReducer(null, action)];
        default:
            return state;
    }
};