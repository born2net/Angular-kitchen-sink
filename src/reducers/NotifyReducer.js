"use strict";
var immutable_1 = require('immutable');
function notify(state, action) {
    if (state === void 0) { state = immutable_1.Map({}); }
    console.log('ACTION: ' + action.type);
    return { data: immutable_1.Map({ currentAction: action.type }) };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = notify;
//# sourceMappingURL=NotifyReducer.js.map