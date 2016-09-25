System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function NameTakenValidator(control) {
        var q = new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (control.value === 'Sean') {
                    resolve({ "taken": true });
                }
                else {
                    resolve(null);
                }
            }, 1000);
        });
        return q;
    }
    exports_1("default", NameTakenValidator);
    return {
        setters:[],
        execute: function() {
        }
    }
});
