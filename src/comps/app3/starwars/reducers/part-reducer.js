System.register(['../actions/part-actions'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PartActions;
    return {
        setters:[
            function (PartActions_1) {
                PartActions = PartActions_1;
            }],
        execute: function() {
            exports_1("default",function (state, action) {
                if (state === void 0) { state = {}; }
                if (action === void 0) { action = {}; }
                switch (action.type) {
                    case PartActions.ADD_PART:
                        return { id: action.id, name: action.name };
                    default:
                        return state;
                }
            });
        }
    }
});
