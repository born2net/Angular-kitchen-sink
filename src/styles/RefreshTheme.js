System.register(["../Conts"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Conts_1;
    var RefreshTheme;
    return {
        setters:[
            function (Conts_1_1) {
                Conts_1 = Conts_1_1;
            }],
        execute: function() {
            RefreshTheme = (function () {
                function RefreshTheme() {
                    setTimeout(function (e) {
                        if (document['commBroker']) {
                            document['commBroker'].getService(Conts_1.Consts.Services().StyleService).refreshTheme();
                        }
                    }, 50);
                }
                return RefreshTheme;
            }());
            exports_1("RefreshTheme", RefreshTheme);
        }
    }
});
