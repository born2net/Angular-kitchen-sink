"use strict";
var PartActions = require('../actions/part-actions');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (state, action) {
    if (state === void 0) { state = {}; }
    if (action === void 0) { action = {}; }
    switch (action.type) {
        case PartActions.ADD_PART:
            return { id: action.id, name: action.name };
        default:
            return state;
    }
};
//# sourceMappingURL=part-reducer.js.map