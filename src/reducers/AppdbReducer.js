System.register(['immutable', "../actions/AppdbAction"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var immutable_1, AppdbAction;
    function appdb(state, action) {
        if (state === void 0) { state = immutable_1.Map({}); }
        switch (action.type) {
            case AppdbAction.APP_START_TIME:
                return immutable_1.Map({ appStartTime: Date.now() });
            default:
                return state;
        }
    }
    exports_1("default", appdb);
    return {
        setters:[
            function (immutable_1_1) {
                immutable_1 = immutable_1_1;
            },
            function (AppdbAction_1) {
                AppdbAction = AppdbAction_1;
            }],
        execute: function() {
        }
    }
});
