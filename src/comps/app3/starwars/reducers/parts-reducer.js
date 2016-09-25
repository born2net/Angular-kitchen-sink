System.register(['../actions/part-actions', "./part-reducer"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PartActions, part_reducer_1;
    return {
        setters:[
            function (PartActions_1) {
                PartActions = PartActions_1;
            },
            function (part_reducer_1_1) {
                part_reducer_1 = part_reducer_1_1;
            }],
        execute: function() {
            exports_1("default",function (state, action) {
                if (state === void 0) { state = []; }
                if (action === void 0) { action = {}; }
                switch (action.type) {
                    case PartActions.ADD_PART:
                        return state.concat([part_reducer_1.default(null, action)]);
                    default:
                        return state;
                }
            });
        }
    }
});
