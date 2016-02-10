"use strict";
var immutable_1 = require('immutable');
var AppdbAction = require("../actions/AppdbAction");
function appdb(state, action) {
    if (state === void 0) { state = immutable_1.Map({}); }
    switch (action.type) {
        case AppdbAction.APP_START_TIME:
            return immutable_1.Map({ appStartTime: Date.now() });
        default:
            return state;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = appdb;
//# sourceMappingURL=AppdbReducer.js.map