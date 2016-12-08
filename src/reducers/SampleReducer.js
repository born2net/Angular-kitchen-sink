"use strict";
var immutable_1 = require('immutable');
var SampleActions = require("../actions/SampleActions");
var ServerModel_1 = require("../models/ServerModel");
function sample_reducer(state, action) {
    if (state === void 0) { state = immutable_1.Map(); }
    switch (action.type) {
        case SampleActions.SERVERS_STATUS: {
            var model = new ServerModel_1.ServerModel(action.payload);
            return state.setIn(['servers'], model);
        }
        default:
            return state;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = sample_reducer;
