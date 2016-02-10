"use strict";
var PartActions = require('../actions/part-actions');
var part_reducer_1 = require("./part-reducer");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (state, action) {
    if (state === void 0) { state = []; }
    if (action === void 0) { action = {}; }
    switch (action.type) {
        case PartActions.ADD_PART:
            return state.concat([part_reducer_1.default(null, action)]);
        default:
            return state;
    }
};
//# sourceMappingURL=parts-reducer.js.map