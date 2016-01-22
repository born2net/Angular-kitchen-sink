import * as PartActions from '../actions/part-actions';
import partReducer from "./part-reducer"

export default (state = [], action:any = {}) => {
    switch (action.type) {
        case PartActions.ADD_PART:
            return [...state, partReducer(null, action)];
        default:
            return state;
    }
};