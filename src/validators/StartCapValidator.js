System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function StartCapValidator(control) {
        if (!control.value.match(/^[A-Z]/)) {
            return { notCapped: true };
        }
        else {
            return null;
        }
    }
    exports_1("default", StartCapValidator);
    return {
        setters:[],
        execute: function() {
        }
    }
});
