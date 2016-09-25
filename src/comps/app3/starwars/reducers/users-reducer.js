System.register(['../actions/user-actions'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UserActions;
    return {
        setters:[
            function (UserActions_1) {
                UserActions = UserActions_1;
            }],
        execute: function() {
            exports_1("default",function (state, action) {
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
            });
        }
    }
});
