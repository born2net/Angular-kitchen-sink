import {List, Map} from 'immutable';
import * as SampleActions from "../actions/SampleActions";
import {ServerModel} from "../models/ServerModel";

export default function sample_reducer(state:Map<string,any> = Map<string,any>(), action:any):Map<string, List<ServerModel>> {

  switch (action.type) {
    case SampleActions.SERVERS_STATUS: {
      var model = new ServerModel(action.payload);
      return state.setIn(['servers'], model);
    }
    default:
      return state;
  }
}
