System.register(['immutable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var immutable_1;
    function notify(state, action) {
        if (state === void 0) { state = immutable_1.Map({}); }
        console.log('ACTION: ' + action.type);
        return { data: immutable_1.Map({ currentAction: action.type }) };
    }
    exports_1("default", notify);
    return {
        setters:[
            function (immutable_1_1) {
                immutable_1 = immutable_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=NotifyReducer.js.map