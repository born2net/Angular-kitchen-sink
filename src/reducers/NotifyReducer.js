"use strict";
var immutable_1 = require("immutable");
/**
 * register in store each call so we can filter
 * if we wish on a per component action basis using:
 *
 *    if (this.appStore.getState().settings.get('lastAction')=='SOME_ACTION');
 *      return;
 */
function notify(state, action) {
    if (state === void 0) { state = immutable_1.Map({}); }
    console.log('ACTION: ' + action.type);
    return { data: immutable_1.Map({ currentAction: action.type }) };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = notify;
