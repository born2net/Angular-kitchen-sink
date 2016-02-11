"use strict";
var Conts_1 = require("../Conts");
var RefreshTheme = (function () {
    function RefreshTheme() {
        setTimeout(function (e) {
            if (document['commBroker']) {
                document['commBroker'].getService(Conts_1.Consts.Services().StyleService).refreshTheme();
            }
        }, 50);
    }
    return RefreshTheme;
}());
exports.RefreshTheme = RefreshTheme;
//# sourceMappingURL=RefreshTheme.js.map