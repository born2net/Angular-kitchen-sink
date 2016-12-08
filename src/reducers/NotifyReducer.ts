import {Map} from 'immutable';

/**
 * register in store each call so we can filter
 * if we wish on a per component action basis using:
 *
 *    if (this.appStore.getState().settings.get('lastAction')=='SOME_ACTION');
 *      return;
 */
export default function notify(state:Map<string, any> = Map<string, any>({}), action:any) {
    console.log('ACTION: ' + action.type);
    return {data: Map({currentAction: action.type})};
}