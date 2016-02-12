"use strict";
var UserActions = require('../actions/user-actions');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (state, action) {
    if (state === void 0) { state = {}; }
    if (action === void 0) { action = {}; }
    switch (action.type) {
        case UserActions.REQUEST_USERS:
            return Object.assign({}, state, { isFetching: true });
        case UserActions.RECEIVE_USERS:
            return Object.assign({}, state, { isFetching: false, list: action.users, updated: action.updated });
        case UserActions.CURRENT_USER:
            return Object.assign({}, state, { current: action.current });
        case UserActions.SET_FILM_FILTER:
            return Object.assign({}, state, { filmFilter: action.filmFilter });
        default:
            return state;
    }
};
//# sourceMappingURL=users-reducer.js.map